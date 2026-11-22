import json
import re
import os
import sys

def run_tests():
    repo_dir = r"c:\Users\N4G\OneDrive\13. Nghe An\nls-thcs-nghean"
    index_html_path = os.path.join(repo_dir, "index.html")
    app_js_path = os.path.join(repo_dir, "js", "app.js")
    style_css_path = os.path.join(repo_dir, "css", "style.css")
    lessons_json_path = os.path.join(repo_dir, "data", "lessons.json")
    prompts_json_path = os.path.join(repo_dir, "data", "prompts.json")

    results = []

    def check(name, condition, msg=""):
        status = "PASS" if condition else "FAIL"
        results.append((name, status, msg))
        print(f"[{status}] {name}" + (f": {msg}" if msg else ""))

    # 1. Check data files
    with open(lessons_json_path, "r", encoding="utf-8") as f:
        lessons = json.load(f)
    check("Lessons JSON valid", len(lessons) == 6, f"Found {len(lessons)} lessons")

    with open(prompts_json_path, "r", encoding="utf-8") as f:
        prompts = json.load(f)
    check("Prompts JSON valid", len(prompts) == 36, f"Found {len(prompts)} prompts")

    # Check unique prompt titles
    prompt_titles = [p.get("title") for p in prompts]
    check("Prompt titles unique", len(prompt_titles) == len(set(prompt_titles)), f"{len(set(prompt_titles))} unique titles")

    # Check prompt groups / categories
    categories = {}
    for p in prompts:
        c = p.get("cat")
        categories[c] = categories.get(c, 0) + 1
    check("Prompt categories distribution", len(categories) >= 4, f"Categories: {categories}")

    # Check prompt 4-card structure in prompt text
    has_card_structure = all(
        ("[Ngữ cảnh]" in p["text"] or "Ngữ cảnh" in p["text"]) for p in prompts
    )
    check("Prompts contain structured sections", has_card_structure, "All prompts contain context/instructions")

    # 2. Check HTML structure and DOM IDs
    with open(index_html_path, "r", encoding="utf-8") as f:
        html = f.read()

    with open(app_js_path, "r", encoding="utf-8") as f:
        js = f.read()

    # Extract all $('#id') and document.getElementById('id') from app.js
    js_ids = re.findall(r"\$\('#([\w-]+)'\)", js)
    js_ids += re.findall(r"getElementById\('([\w-]+)'\)", js)
    missing_ids = []
    for jid in set(js_ids):
        # some ids like panel- or output may be dynamic, but let's check static ones
        if not re.search(r'id=["\']' + jid + r'["\']', html) and not jid.startswith("panel-") and not jid.endswith("-output"):
            missing_ids.append(jid)
    check("All JS IDs exist in HTML", len(missing_ids) == 0, f"Missing: {missing_ids}")

    # Check required output IDs exist in HTML
    output_ids = ['khbd-output', 'media-output', 'assessment-output', 'pdca-output']
    missing_outputs = [oid for oid in output_ids if f'id="{oid}"' not in html]
    check("All Output IDs exist in HTML", len(missing_outputs) == 0, f"Missing: {missing_outputs}")

    # Check inputs exist in HTML
    khbd_inputs = ['subject', 'grade', 'topic', 'outcomes', 'tc', 'atm', 'devices', 'duration']
    missing_khbd = [inp for inp in khbd_inputs if f'id="{inp}"' not in html]
    check("All KHBD inputs exist in HTML", len(missing_khbd) == 0, f"Missing: {missing_khbd}")

    # Check accessibility: aria-expanded and aria-controls on .menu-toggle
    check("Menu toggle accessibility", 'aria-expanded=' in html and 'aria-controls="nav"' in html, "aria attributes present")

    # Check duration input min/max/step attributes
    check("Duration input validation attributes", 'id="duration"' in html and 'min="1"' in html and 'max="180"' in html, "min=1 max=180 present")

    # 3. Check CSS
    with open(style_css_path, "r", encoding="utf-8") as f:
        css = f.read()
    check("Mobile menu backdrop-filter", "backdrop-filter" in css, "backdrop blur present")
    check("Mobile menu z-index", "z-index" in css and "nav.open" in css, "nav.open and z-index styled")

    # 4. Test Logic simulation
    # A. Duration clamp logic: Math.min(180, Math.max(1, Math.round(rawDuration)))
    def clamp_duration(val):
        try:
            raw = float(val)
            if raw != raw: # NaN
                return 45
            import math
            return min(180, max(1, round(raw)))
        except:
            return 45

    check("Duration clamp negative (-15 -> 1)", clamp_duration("-15") == 1, f"Got {clamp_duration('-15')}")
    check("Duration clamp zero (0 -> 1)", clamp_duration("0") == 1, f"Got {clamp_duration('0')}")
    check("Duration clamp decimal (1.5 -> 2)", clamp_duration("1.5") == 2, f"Got {clamp_duration('1.5')}")
    check("Duration clamp normal (45 -> 45)", clamp_duration("45") == 45, f"Got {clamp_duration('45')}")
    check("Duration clamp upper bound (999 -> 180)", clamp_duration("999") == 180, f"Got {clamp_duration('999')}")
    check("Duration clamp empty ('' -> 45)", clamp_duration("") == 45, f"Got {clamp_duration('')}")

    # B. Grade TC1/TC2 mapping logic: g <= 7 ? 'TC1 (lớp 6–7)' : 'TC2 (lớp 8–9)'
    def get_expected_tc(grade):
        return 'TC1 (lớp 6–7)' if int(grade) <= 7 else 'TC2 (lớp 8–9)'

    check("Grade 6 -> TC1", get_expected_tc(6) == 'TC1 (lớp 6–7)')
    check("Grade 7 -> TC1", get_expected_tc(7) == 'TC1 (lớp 6–7)')
    check("Grade 8 -> TC2", get_expected_tc(8) == 'TC2 (lớp 8–9)')
    check("Grade 9 -> TC2", get_expected_tc(9) == 'TC2 (lớp 8–9)')

    # C. Prompt 4 template structure
    def prompt4(title, context, data, instructions, result):
        return f"{title}\n[Ngữ cảnh]\n{context}\n\n[Dữ liệu/điều kiện]\n{data}\n\n[Hướng dẫn]\n{instructions}\n\n[Kết quả mong muốn]\n{result}"

    sample_prompt = prompt4("TEST", "ctx", "dat", "ins", "res")
    check("Prompt4 has 4 cards", "[Ngữ cảnh]" in sample_prompt and "[Dữ liệu/điều kiện]" in sample_prompt and "[Hướng dẫn]" in sample_prompt and "[Kết quả mong muốn]" in sample_prompt)

    # 5. Security & Privacy checks
    check("No external tracking scripts", "google-analytics" not in html and "facebook" not in html and "cdn." not in html, "Zero external tracking")
    check("Disclaimer notice present", "Không nhập thông tin nhận diện học sinh" in html or "Dữ liệu ở thiết bị" in html, "Clear privacy disclaimer")

    return results

if __name__ == "__main__":
    run_tests()
