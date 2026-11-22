// NLS THCS NGHỆ AN - Hệ thống hỗ trợ thực hành và chuyển đổi số thích ứng
// Phiên bản chuẩn hóa SPA 2026 - Tích hợp Khối KHXH, KHTN và Cán bộ Quản lý (CBQL)
// Hỗ trợ Bảng Case Study Thực hành Mẫu & Mô phỏng Sinh sản phẩm Sư phạm số trực tuyến

const LESSONS = [{"id": "lesson1", "day": "NGÀY 01 · BUỔI 01", "session": "Sáng (4 tiết)", "title": "Cơ sở pháp lý, Chuyển đổi số & Khung năng lực số THCS", "objective": "Nhận diện vị trí năng lực số cá nhân theo TT 18/2026/TT-BGDĐT; nắm vững liên thông Khung NLS GV (6 miền, 20 năng lực), NLS HS (TC1 lớp 6-7, TC2 lớp 8-9 theo CV 3456), 4 mạch AI (QĐ 2422) và 8 nhóm An toàn mạng (CV 6206).", "activities": ["Khảo sát tự đánh giá đầu vào, phân loại học viên thành 3 nhóm A (Cơ bản), B (Thành thạo), C (Nâng cao).", "Thiết lập cơ chế cố vấn đồng đẳng 'Cặp đôi số' (1 kèm 1) trong tổ và trường.", "Vẽ sơ đồ ánh xạ tích hợp NLS - ATM vào môn học theo CTGDPT 2018 (không phát sinh tiết mới)."], "tools": ["Google Forms", "Google Sheets", "Google Docs"], "products": ["Phiếu tự đánh giá năng lực số cá nhân", "Sơ đồ ánh xạ địa chỉ tích hợp NLS - ATM - AI vào môn học", "Danh sách phân công Cặp đôi số của tổ chuyên môn"], "evidence": "Biểu mẫu khảo sát đã ẩn danh và sơ đồ ma trận tích hợp bộ môn"}, {"id": "lesson2", "day": "NGÀY 01 · BUỔI 02", "session": "Chiều (4 tiết)", "title": "An toàn mạng, Đạo đức AI & Tra cứu tri thức có căn cứ", "objective": "Vận dụng quy trình SIFT 4 bước kiểm chứng thông tin; làm chủ cơ chế Grounded AI qua NotebookLM để tra cứu văn bản quy phạm chống ảo giác; thực hành bảo vệ dữ liệu học sinh dưới 16 tuổi theo Luật 91/2025/QH15 và quy trình ứng phó sự cố ATM.", "activities": ["Thiết lập Sổ tay tri thức số trên NotebookLM nạp văn bản chỉ đạo chính thống.", "Thực hành kiểm chứng thông tin sức khỏe/khoa học/lịch sử mạng theo 4 bước SIFT.", "Diễn tập kịch bản ứng phó sự cố an toàn mạng giả lập (4 bước & 7 bước cấp trường).", "Xây dựng Poster quy tắc '4 KHÔNG - 3 CÓ' phù hợp lứa tuổi THCS."], "tools": ["NotebookLM", "Google Drive", "Gemini"], "products": ["Sổ tay tri thức số NotebookLM kèm bộ nguồn pháp lý đã đối chiếu", "Bộ quy tắc '4 KHÔNG - 3 CÓ' về Đạo đức AI và An toàn mạng", "Quy trình xử lý sự cố an toàn mạng học đường"], "evidence": "Sổ tay NotebookLM, kịch bản diễn tập an toàn và bản ghi chú nguồn CC"}, {"id": "lesson3", "day": "NGÀY 02 · BUỔI 03", "session": "Sáng (4 tiết)", "title": "Sư phạm số thích ứng & Thiết kế KHBD tích hợp theo mô hình 4C", "objective": "Làm chủ kỹ thuật viết prompt 4 thẻ để thiết kế Kế hoạch bài dạy chuẩn Công văn 5512/BGDĐT-GDTrH theo mô hình 4C (Context - Challenge - Concept - Conclusion), tích hợp NLS TC1/TC2, ATM1-ATM8, phân hóa A/B/C và phương án không thiết bị cho vùng khó khăn Nghệ An.", "activities": ["Xây dựng Ma trận tích hợp NLS - ATM cho 03 bài học bộ môn hiện hành.", "Dùng AI thiết kế tiến trình 45 phút theo mô hình 4C (phân hóa nhiệm vụ nhóm A/B/C).", "Thiết kế phương án ngoại tuyến / Offline Kit (phiếu học tập in sẵn, hoạt động không mạng).", "Phản biện đồng đẳng KHBD theo Rubric 4 tiêu chí chuẩn hóa."], "tools": ["Google Docs", "Gemini", "Custom Gems"], "products": ["Ma trận tích hợp NLS - ATM cho 03 bài học", "01 Kế hoạch bài dạy (KHBD) hoàn chỉnh 45 phút tích hợp NLS - ATM", "Phiếu học tập ngoại tuyến dự phòng (Offline Kit)"], "evidence": "KHBD đầy đủ phụ lục IV có rubric, minh chứng và ghi chú minh bạch AI"}, {"id": "lesson4", "day": "NGÀY 02 · BUỔI 04", "session": "Chiều (4 tiết)", "title": "Hệ sinh thái học liệu đa phương tiện & Trò chơi hóa (Gamification)", "objective": "Sáng tạo học liệu số bản quyền bằng AI tạo sinh (tranh ảnh mô phỏng 3D/lịch sử, bản nhạc giáo dục, podcast), biên tập video micro-learning 3 phút và thiết kế trò chơi học tập có cơ chế phản hồi sư phạm tích cực.", "activities": ["Tạo ảnh minh họa bối cảnh văn học / mô phỏng cấu trúc vi mô khoa học qua AI.", "Sáng tác bài hát giáo dục ghi nhớ quy tắc / ca khúc kỹ năng số bằng Suno/Udio.", "Viết kịch bản Storyboard và dựng video bài giảng số ngắn (Micro-learning 3 phút).", "Thiết kế trò chơi học tập tương tác phân nhánh trên Canva / Google Forms."], "tools": ["Google Slides", "Canva", "Gemini (Imagen 3)", "CapCut / Clipchamp"], "products": ["Bộ tranh minh họa AI / Infographic có trích nguồn CC và chú thích AI", "Video bài giảng số micro-learning 3 phút kèm phụ đề và kịch bản phân cảnh", "Trò chơi học tập số (Gamification) có phản hồi giải thích đáp án"], "evidence": "Tệp học liệu số, bản quyền mở Creative Commons và bảng kiểm kỹ thuật"}, {"id": "lesson5", "day": "NGÀY 03 · BUỔI 05", "session": "Sáng (4 tiết)", "title": "Khảo thí số, Đánh giá thường xuyên & Thiết lập Trợ lý ảo Gems", "objective": "Tự động hóa xây dựng ma trận đặc tả và ngân hàng câu hỏi phân hóa theo Thông tư 22/2021/TT-BGDĐT; xuất bản đề kiểm tra chuẩn LaTeX/Overleaf (Toán/KHTN); xây dựng Rubric đánh giá thường xuyên; thiết lập và huấn luyện Trợ lý ảo Custom Gems chuyên biệt cho tổ.", "activities": ["Xây dựng ma trận đề kiểm tra 3 mức nhận thức (Nhận biết - Thông hiểu - Vận dụng).", "Biên soạn câu hỏi tình huống thực nghiệm, bóc trần lỗi ảo giác AI và kiểm chứng SIFT.", "Xuất bản định dạng đề thi chuẩn LaTeX (Toán/KHTN) hoặc Google Forms.", "Cấu hình System Instructions huấn luyện Custom Gem sư phạm và kiểm thử 5 kịch bản."], "tools": ["Google Forms", "Google Sheets", "Gemini Gems", "Overleaf / LaTeX"], "products": ["Bộ đề kiểm tra phân hóa kèm ma trận đặc tả và đáp án chi tiết", "Rubric / Checklist đánh giá thường xuyên 4 mức", "01 Trợ lý ảo Gemini Gem chuyên biệt cho tổ bộ môn hoạt động ổn định"], "evidence": "Bộ đề chuẩn hóa, bảng kiểm Rubric và đường link chia sẻ Custom Gem nội bộ"}, {"id": "lesson6", "day": "NGÀY 03 · BUỔI 06", "session": "Chiều (4 tiết)", "title": "Quản trị số trường học, Kế hoạch hành động PDCA & Nghiệm thu", "objective": "Lập kế hoạch chuyển đổi số và phát triển NLS cấp trường/tổ theo chu trình PDCA 4 tuần; phân công trách nhiệm theo ma trận RACI; đánh giá mức độ CĐS theo Bộ chỉ số QĐ 4725; tổ chức nghiệm thu 05 sản phẩm hồ sơ cuối khóa.", "activities": ["Xây dựng Kế hoạch hành động 4 tuần sau tập huấn (Plan - Do - Check - Act).", "Thiết lập ma trận RACI phân công nhiệm vụ cho BGH, Tổ CM và Cặp đôi số.", "Tự đánh giá mức độ CĐS trường học theo 5 nhóm chỉ số KPIs của QĐ 4725.", "Hội đồng nghiệm thu rà soát 05 sản phẩm bắt buộc theo Checklist chuẩn."], "tools": ["Google Sheets", "Google Sites", "Google Drive"], "products": ["Kế hoạch hành động CĐS 4 tuần theo chu trình PDCA", "Bảng kiểm tự đánh giá KPIs mức độ CĐS trường học (QĐ 4725)", "Hồ sơ nghiệm thu trọn bộ 05 sản phẩm chuyên môn"], "evidence": "Biên bản nghiệm thu, bảng theo dõi tiến độ và cam kết triển khai tại đơn vị"}];
const PROMPTS = [{"cat": "KHBD 4C", "title": "KHBD 4C Tích hợp chuẩn Công văn 5512 (Tổng quát)", "desc": "Thiết kế kế hoạch bài dạy 45 phút theo mô hình Context - Challenge - Concept - Conclusion, tích hợp NLS và ATM.", "text": "[Ngữ cảnh] Bạn là Chuyên gia Sư phạm số cấp THCS, am hiểu sâu sắc Chương trình GDPT 2018 và Công văn số 5512/BGDĐT-GDTrH.\n[Dữ liệu/điều kiện] Môn: [Môn học], Lớp: [Lớp 6/7/8/9], Chủ đề: [Tên bài học], YCCĐ cốt lõi: [Nêu 1-2 YCCĐ], Trình độ NLS: [TC1 cho lớp 6-7 / TC2 cho lớp 8-9 theo CV 3456], Nhóm An toàn mạng: [ATM1-ATM8 theo CV 6206], Điều kiện thiết bị: [Đầy đủ / 1 máy GV / Không thiết bị], Thời lượng: [45 phút]. Tuyệt đối không nhập thông tin định danh học sinh.\n[Hướng dẫn] Thiết kế tiến trình 4 hoạt động theo mô hình 4C (Context: Kết nối bối cảnh - Challenge: Thử thách giải quyết vấn đề - Concept: Hình thành kiến thức - Conclusion: Tổng kết vận dụng). Tích hợp chỉ báo NLS/ATM tự nhiên vào hoạt động hiện hành, không tạo tiết học mới. Phân hóa nhiệm vụ 3 tầng: Nhóm A (Cơ bản - có giàn giáo), Nhóm B (Thành thạo), Nhóm C (Nâng cao). Xây dựng phương án Cặp đôi số hỗ trợ đồng đẳng và phương án Offline Kit dự phòng khi mất kết nối.\n[Kết quả mong muốn] Bảng KHBD hoàn chỉnh gồm: Mục tiêu (Phẩm chất, Năng lực bộ môn, Năng lực số có mã chỉ báo rõ ràng); Thiết bị & học liệu; Tiến trình 4C chi tiết (Hành động GV - Hành động HS - Sản phẩm); Tiêu chí Rubric đánh giá 4 mức và Phương án ngoại tuyến thay thế."}, {"cat": "KHBD 4C", "title": "KHBD 4C Khối Khoa học Xã hội (Lịch sử & Địa lí 7)", "desc": "Bài dạy Lịch sử & Địa lí lớp 7 tích hợp kiểm chứng tư liệu SIFT (1.1.TC2b, 1.2.TC2a - ATM1).", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Sư phạm Khoa học Xã hội cấp THCS giàu kinh nghiệm, am hiểu sâu sắc CTGDPT 2018 và kỹ thuật tích hợp Sư phạm số.\n[Hướng dẫn & Nhiệm vụ]: Thiết kế Kế hoạch bài dạy (KHBD) chuẩn Công văn 5512/BGDĐT-GDTrH cho môn Lịch sử và Địa lí lớp 7 – Chủ đề: 'Đại Việt thời Lý - Trần (Thế kỉ XI đến đầu thế kỉ XV)'.\n[Dữ liệu & Yêu cầu tích hợp]:\n- Mã NLS tích hợp: 1.1.TC2b (Tra cứu và khai thác tư liệu lịch sử số); 1.2.TC2a (Đánh giá và kiểm chứng độ tin cậy của nguồn tư liệu trực tuyến).\n- Mã ATM tích hợp: ATM1 (Nhận diện thông tin sai lệch, tin giả lịch sử trên không gian mạng qua quy trình SIFT 4 bước).\n- Thời lượng: 45 phút, tiến trình theo mô hình 4C.\n- Phân hóa nhiệm vụ: Nhóm A đọc tư liệu chọn lọc có giàn giáo; Nhóm B đối chiếu tư liệu mạng với SGK; Nhóm C phân tích góc nhìn đa chiều của sử liệu số.\n- Phương án ngoại tuyến: Bộ thẻ tư liệu in sẵn đóng vai nguồn thông tin khi lớp học mất Internet.\n[#KẾT QUẢ]: Bảng tiến trình chi tiết 4 hoạt động (Mục tiêu, Nội dung, Sản phẩm, Tổ chức thực hiện), Rubric đánh giá 4 mức và lưu ý bảo vệ bản quyền tư liệu."}, {"cat": "KHBD 4C", "title": "KHBD 4C Khối Khoa học Tự nhiên (KHTN 7 - Trao đổi chất)", "desc": "Bài dạy Khoa học tự nhiên lớp 7 tích hợp mô phỏng thí nghiệm 3D và bóc trần tin đồn sức khỏe SIFT (ATM1).", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Sư phạm Khoa học Tự nhiên cấp THCS, thành thạo phương pháp dạy học thực nghiệm và công nghệ mô phỏng số.\n[Hướng dẫn & Nhiệm vụ]: Soạn giáo án số 4C cho bài: 'Trao đổi chất và chuyển hóa năng lượng ở sinh vật' (Khoa học tự nhiên lớp 7), thời lượng 45 phút.\n[#TÍCH HỢP NLS & AN TOÀN MẠNG]:\n- Mã NLS: 1.2.TC1a (Tìm kiếm và kiểm chứng thông tin khoa học); 3.1.TC1a (Khai thác mô hình số mô phỏng quá trình quang hợp/hô hấp tế bào).\n- Mã ATM: ATM1 (Quy trình SIFT kiểm chứng các tin đồn sai lệch về dinh dưỡng, ăn kiêng cực đoan trên mạng xã hội).\n- Tiến trình 4C: (1) Context: Tình huống thực tế về cây xanh thiếu sáng; (2) Challenge: Thử thách thiết kế thí nghiệm ảo hoặc mô phỏng trên PhET; (3) Concept: Khái quát sơ đồ quang hợp; (4) Conclusion: Tuyên truyền chế độ dinh dưỡng lành mạnh.\n- Phân tầng học sinh: Nhóm A quan sát mô phỏng điền khuyết; Nhóm B điều khiển biến số trên mô phỏng; Nhóm C đối chiếu các luồng thông tin mạng.\n- Không thiết bị: GV trình chiếu mô phỏng trên máy tính duy nhất hoặc dùng sơ đồ cắt dán cơ chế quang hợp.\n[#ĐẦU RA]: Kế hoạch bài dạy chuẩn CV 5512, Phiếu học tập SIFT và Rubric đánh giá sản phẩm nhóm."}, {"cat": "KHBD 4C", "title": "KHBD 4C Môn Toán lớp 8 (Hàm số bậc nhất & Biểu diễn số)", "desc": "Tích hợp phần mềm hình học động GeoGebra và nhận diện lỗi suy luận của AI trong toán học.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Phương pháp Dạy học Toán cấp THCS, chuyên sâu về ứng dụng phần mềm toán học động và tư duy thuật toán.\n[Hướng dẫn & Nhiệm vụ]: Thiết kế KHBD môn Toán lớp 8: 'Khái niệm hàm số bậc nhất y = ax + b (a ≠ 0) và đồ thị'.\n[#YÊU CẦU ĐẶC THÙ]:\n- NLS: Khai thác công cụ trực quan hóa đồ thị (GeoGebra/Desmos) để khảo sát sự biến thiên của hàm số khi hệ số a thay đổi.\n- Mạch AI (QĐ 2422): NLa (Tư duy lấy con người làm trung tâm - rèn luyện khả năng kiểm chứng lập luận toán học độc lập, không phụ thuộc vào kết quả tính toán tự động của AI).\n- ATM: ATM7 (Sử dụng AI có trách nhiệm - nhận diện hiện tượng AI giải sai các bài toán đố thực tế do thiếu ngữ cảnh đời sống).\n- Phân hóa A/B/C: Nhóm A vẽ đồ thị với a, b cụ thể; Nhóm B khảo sát góc tạo bởi đường thẳng và trục Ox; Nhóm C lập mô hình hàm số thực tế (cước taxi, nhiệt độ).\n[#KẾT QUẢ]: Kế hoạch bài dạy theo 4C chuẩn 5512, có mã nhúng GeoGebra hoặc bài tập vẽ đồ thị trên giấy kẻ ô ngoại tuyến."}, {"cat": "KHBD 4C", "title": "Ma trận tích hợp NLS - ATM cho 03 bài học bộ môn", "desc": "Xác định chính xác địa chỉ tích hợp NLS và ATM vào kế hoạch dạy học môn học hiện hành.", "text": "[Ngữ cảnh] Là Chuyên gia Phát triển Chương trình nhà trường THCS.\n[Dữ liệu] Môn học: [Môn], Khối lớp: [6/7/8/9], Danh sách 03 bài học trong chương trình: [Liệt kê 3 bài], Điều kiện công nghệ: [Mô tả hạ tầng].\n[Hướng dẫn] Phân tích mục tiêu và YCCĐ của 3 bài học để tìm đúng địa chỉ tích hợp. Không chèn thêm nội dung lý thuyết công nghệ riêng lẻ; mọi hành vi số phải phục vụ trực tiếp cho việc chiếm lĩnh kiến thức môn học. Ánh xạ rõ: Tên bài -> YCCĐ môn học -> Hành vi học sinh -> Mã NLS dự kiến (TC1/TC2) -> Mã ATM (ATM1-ATM8) -> Minh chứng quan sát được -> Phương án không thiết bị.\n[Kết quả mong muốn] Bảng ma trận 3 bài học hoàn chỉnh kèm chú thích hướng dẫn giáo viên trong tổ chuyên môn triển khai đồng bộ."}, {"cat": "KHBD 4C", "title": "Kịch bản vận hành cơ chế 'Cặp đôi số' (Digital Pairing)", "desc": "Tổ chức học tập đồng đẳng 1 kèm 1 giữa học sinh thạo công nghệ và học sinh cần hỗ trợ.", "text": "[Ngữ cảnh] Bạn hỗ trợ giáo viên THCS tổ chức mô hình học tập đồng đẳng 'Cặp đôi số' trong lớp học có sự chênh lệch kỹ năng số.\n[Dữ liệu] Nhiệm vụ học tập: [Mô tả nhiệm vụ], Lớp: [Lớp], Thời lượng: [Phút], Thiết bị: [1 thiết bị / cặp hoặc phòng máy].\n[Hướng dẫn] Xây dựng kịch bản chia vai bình đẳng: Bạn A (Người lái / Thao tác kỹ thuật dưới sự hướng dẫn) và Bạn B (Hoa tiêu / Rà soát yêu cầu, đọc tư liệu, kiểm tra độ chính xác). Luân phiên vai trò giữa các chặng. Nghiêm cấm việc bạn giỏi công nghệ làm hộ hoàn toàn; thiết lập câu hỏi tương tác để cả hai cùng tư duy. Tuyệt đối không xếp hạng công khai gây mặc cảm tâm lý.\n[Kết quả mong muốn] Thẻ phân vai cặp đôi, Kịch bản hoạt động từng phút (5 chặng), Bảng kiểm đồng đánh giá và Tiêu chí quan sát dành cho giáo viên."}, {"cat": "KHBD 4C", "title": "Phương án dạy học ngoại tuyến (Offline Kit - Không Internet)", "desc": "Chuyển đổi trọn vẹn hoạt động số thành mô phỏng trên giấy, bảo đảm công bằng tiếp cận vùng khó khăn Nghệ An.", "text": "[Ngữ cảnh] Bạn là Chuyên gia Giáo dục thích ứng vùng khó khăn, thiết kế bài dạy cho các trường THCS miền núi Nghệ An (Kỳ Sơn, Tương Dương, Quế Phong...) khi không có mạng Internet.\n[Dữ liệu] Tên bài học: [Tên bài], Môn: [Môn], Lớp: [Lớp], YCCĐ cốt lõi: [YCCĐ], Mã NLS/ATM hướng tới: [Mã].\n[Hướng dẫn] Thiết kế bộ 'Offline Kit' mô phỏng quy trình số trên giấy: (1) Thay công cụ tìm kiếm trực tuyến bằng Bộ thẻ dữ liệu/văn bản đã in sẵn có gắn 'mã nguồn'; (2) Thay quy trình SIFT trên mạng bằng Phiếu kiểm chứng dữ kiện so sánh 3 trích đoạn; (3) Thay biểu mẫu trực tuyến bằng Phiếu ghi nhận dạng bảng gấp. Đảm bảo học sinh vẫn đạt 100% mục tiêu tư duy số mà không phụ thuộc vào thiết bị.\n[Kết quả mong muốn] Quy trình tổ chức lớp học ngoại tuyến, Bản in mẫu Phiếu học tập Offline Kit, Bảng tiêu chí đánh giá và Cách thức lưu trữ minh chứng hồ sơ giấy."}, {"cat": "KHBD 4C", "title": "Bản đồ liên thông NLS - ATM - AI vào Kế hoạch bài dạy", "desc": "Ánh xạ 4 thành tố: CTGDPT 2018, Khung NLS (CV 3456), An toàn mạng (CV 6206) và Mạch AI (QĐ 2422).", "text": "[Ngữ cảnh] Bạn là Chuyên gia Khung chuẩn năng lực giáo dục số Việt Nam.\n[Dữ liệu] Môn học: [Môn], Lớp: [6/7/8/9], Chủ đề: [Tên chủ đề], YCCĐ: [YCCĐ].\n[Hướng dẫn] Xây dựng bản đồ liên thông đa chiều: (1) YCCĐ môn học; (2) Hành vi cụ thể của học sinh trong bài; (3) Năng lực số thành phần (TC1 cho lớp 6-7, TC2 cho lớp 8-9); (4) Nhóm an toàn mạng tương ứng (ATM1-ATM8); (5) Mạch giáo dục AI liên quan (NLa: Tư duy con người, NLb: Đạo đức AI, NLc: Kỹ thuật ứng dụng, NLd: Thiết kế hệ thống); (6) Công cụ thực hiện và Sản phẩm minh chứng.\n[Kết quả mong muốn] Sơ đồ ma trận chuẩn hóa dạng bảng, có ghi chú rõ ràng văn bản quy phạm gốc để giáo viên tự tin đưa vào Phụ lục IV Công văn 5512."}, {"cat": "Học liệu AI", "title": "Tạo ảnh minh họa bối cảnh lịch sử / văn học bằng AI (Imagen 3)", "desc": "Tạo prompt chuyên sâu cho Gemini Imagen 3 / Microsoft Designer phục dựng bối cảnh dạy học chân thực.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Đồ họa Sư phạm và Nhiếp ảnh lịch sử số.\n[Hướng dẫn & Nhiệm vụ]: Thiết kế câu lệnh (Prompt tạo ảnh bằng tiếng Anh và tiếng Việt) cho công cụ Imagen 3 / Microsoft Designer để tạo tranh minh họa phục vụ bài học THCS: [Chủ đề: Tác phẩm văn học / Sự kiện lịch sử].\n[#YÊU CẦU KỸ THUẬT]:\n- Bối cảnh: [Mô tả chi tiết không gian, thời gian, trang phục truyền thống Việt Nam thế kỉ tương ứng, đảm bảo tính chuẩn xác văn hóa lịch sử].\n- Phong cách nghệ thuật: Digital historical painting, cinematic lighting, độ phân giải 16:9, màu sắc ấm áp, giàu cảm xúc sư phạm.\n- Nguyên tắc an toàn: Không tạo hình ảnh bạo lực, phản cảm; TUYỆT ĐỐI không có chữ viết sai chính tả hoặc ký hiệu rác trong tranh (no text, no watermark).\n- Minh bạch học liệu: Mẫu chú thích chân tranh ghi rõ 'Hình ảnh được tạo bởi AI (Imagen 3) phục vụ mục đích minh họa giáo dục; nguồn bối cảnh tham chiếu theo SGK'."}, {"cat": "Học liệu AI", "title": "Tạo ảnh mô phỏng cấu trúc vi mô / vĩ mô KHTN (3D Science Model)", "desc": "Prompt sinh ảnh mô phỏng phân tử, tế bào, hệ mặt trời bằng AI phục vụ môn KHTN và Toán.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Họa sĩ Thiết kế Mô phỏng Khoa học và Học liệu số 3D chuyên nghiệp.\n[Hướng dẫn & Nhiệm vụ]: Viết prompt tạo ảnh khoa học chính xác cao cho chủ đề KHTN THCS: [Tế bào thực vật / Chuỗi xoắn kép ADN / Cấu tạo nguyên tử / Hệ Mặt Trời / Hình học không gian].\n[#CÂU LỆNH MẪU (Prompt tiếng Anh tối ưu)]: 'A high-precision 3D scientific rendering of [chủ đề], showing accurate anatomical/molecular details, glowing semi-transparent structures, futuristic laboratory background, depth of field, 8k resolution, photorealistic, cinematic lighting, 16:9 aspect ratio, strictly NO text, NO labels, clean visual.'\n[#HƯỚNG DẪN GIÁO VIÊN]: Cách tải ảnh về, chèn vào Google Slides, bổ sung các mũi tên chú thích bằng công cụ Shape của Slides để đảm bảo tính chính xác thuật ngữ khoa học."}, {"cat": "Học liệu AI", "title": "Sáng tác ca khúc giáo dục ghi nhớ quy tắc số / KHTN bằng Suno / Udio", "desc": "Tạo lời bài hát vần điệu trẻ trung và prompt phối khí âm nhạc giáo dục bằng AI.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Nhạc sĩ Sư phạm và Nhà sản xuất Âm nhạc Giáo dục hiện đại.\n[Hướng dẫn & Nhiệm vụ]: Sáng tác lời bài hát ngắn (khoảng 1 phút 30 giây) và thiết lập prompt phong cách âm nhạc để nạp vào Suno AI / Udio cho chủ đề: [Quy tắc '4 KHÔNG - 3 CÓ' an toàn mạng / Bài ca Bảng tuần hoàn / Ghi nhớ định luật phản xạ ánh sáng].\n[#CẤU TRÚC BÀI HÁT]:\n- [Verse 1]: Giới thiệu vấn đề gần gũi với lứa tuổi THCS.\n- [Chorus]: Điệp khúc cực kỳ bắt tai, vần điệu dễ thuộc, lặp lại các từ khóa cốt lõi.\n- [Verse 2]: Ứng dụng thực tế và cách hành xử an toàn / thông thái.\n- [Outro]: Thông điệp hành động tích cực.\n- Style of Music Prompt (Nhập vào ô Style của Suno): 'Modern upbeat pop-rock, catchy guitar riffs, youthful bright vocals, educational theme, tempo 125 bpm, radio quality.'\n[#LƯU Ý BẢN QUYỀN]: Ghi chú sử dụng bài hát trong trường học dưới giấy phép phi thương mại, công khai rõ âm thanh do AI tạo lập."}, {"cat": "Học liệu AI", "title": "Kịch bản Video bài giảng Micro-learning 3 phút (Storyboard)", "desc": "Xây dựng kịch bản phân cảnh chi tiết cho video bài giảng ngắn, có lời thoại, hình ảnh và câu hỏi dừng.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Đạo diễn Học liệu số Micro-learning và Chuyên gia Sư phạm THCS.\n[Hướng dẫn & Nhiệm vụ]: Viết kịch bản phân cảnh (Storyboard) hoàn chỉnh cho video bài giảng số ngắn (thời lượng đúng 180 giây / 3 phút) về chủ đề: [Tên bài học].\n[#CẤU TRÚC PHÂN CẢNH]:\n- Cảnh 1 (0:00 - 0:30): Mở đầu bất ngờ bằng tình huống thực tế hoặc câu hỏi kích thích tư duy.\n- Cảnh 2 (0:30 - 1:30): Giải mã kiến thức trọng tâm (sử dụng hình ảnh trực quan, đồ họa động đơn giản).\n- Cảnh 3 (1:30 - 2:15): Điểm dừng tương tác (Interactive Pause) - Câu hỏi trắc nghiệm ngắn để học sinh suy ngẫm.\n- Cảnh 4 (2:15 - 3:00): Tổng kết quy tắc cốt lõi và nhiệm vụ thực hành tiếp theo.\n[#BẢNG KỊCH BẢN]: Cột 1: Giây; Cột 2: Hình ảnh hiển thị trên màn hình; Cột 3: Lời thoại thuyết minh (chuẩn bị cho giọng đọc AI); Cột 4: Chữ chú thích (Text Overlay); Cột 5: Ghi chú nguồn học liệu và âm thanh nền."}, {"cat": "Học liệu AI", "title": "Kịch bản Trò chơi học tập số (Gamification) tương tác phân nhánh", "desc": "Thiết kế kịch bản trò chơi nhập vai giải đố trên Canva / Google Forms có phản hồi sư phạm.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Thiết kế Trò chơi Giáo dục (Educational Game Designer) cho lứa tuổi học sinh THCS.\n[Hướng dẫn & Nhiệm vụ]: Xây dựng kịch bản trò chơi học tập tương tác nhập vai mang tên 'Hành trình Thám hiểm Tri thức' cho chủ đề: [Môn / Bài học].\n[#CẤU TRÚC TRÒ CHƠI]:\n- Cốt truyện mở đầu: Học sinh hóa thân thành một Nhà thám hiểm / Thám tử khoa học / Sứ giả lịch sử nhận nhiệm vụ giải cứu một vùng đất hoặc tìm kiếm kho báu tri thức.\n- 05 Trạm thử thách logic: Mỗi trạm gắn với một câu hỏi tình huống có phân nhánh. Nếu chọn đúng: Nhận gợi ý mảnh ghép kho báu; Nếu chọn sai: Nhận lời giải thích ân cần và được chọn lại mà không bị trừ điểm áp lực.\n- Tích hợp kỹ năng số: Trạm số 3 yêu cầu kiểm chứng nguồn thông tin giả mạo theo quy trình SIFT (ATM1).\n- Hướng dẫn triển khai kỹ thuật: Cách tạo siêu liên kết (Hyperlink) giữa các slide trên Canva hoặc tính năng 'Chuyển đến phần dựa trên câu trả lời' trên Google Forms.\n- Phương án ngoại tuyến: Bộ thẻ bài in giấy tương đương luật chơi để tổ chức trong lớp học không có thiết bị."}, {"cat": "Học liệu AI", "title": "Infographic tóm tắt bài học chuẩn bản quyền và nguồn mở (CC)", "desc": "Khung thiết kế infographic một trang trực quan, kiểm soát bản quyền và chú thích minh bạch.", "text": "[Ngữ cảnh] Chuyên gia Truyền thông Trực quan Sư phạm THCS.\n[Dữ liệu] Chủ đề bài học: [Tên bài], Môn: [Môn], Lớp: [Lớp], Nội dung cốt lõi: [Tóm tắt 3-5 ý chính].\n[Hướng dẫn] Thiết kế bố cục Infographic dạng dọc (tỉ lệ 9:16 hoặc A4) gồm: (1) Header: Tiêu đề thu hút và thông điệp 1 dòng; (2) 4 Khối nội dung chính có biểu tượng minh họa; (3) Khung 'Lưu ý an toàn / Mẹo ghi nhớ nhanh'; (4) Footer: Thông tin trích nguồn tài liệu SGK, tác giả, giấy phép Creative Commons (CC BY-NC) và chú thích 'Infographic được biên tập có sự hỗ trợ của AI'.\n[Kết quả mong muốn] Bảng mô tả chi tiết từng khối, màu sắc chủ đạo gợi ý (Palette), văn bản hiển thị ngắn gọn và checklist kiểm soát quyền tác giả trước khi in/phát tán."}, {"cat": "Khảo thí & LaTeX", "title": "Ma trận đặc tả & Ngân hàng câu hỏi phân hóa theo Thông tư 22/2021", "desc": "Tạo ma trận kiểm tra 3 mức nhận thức và biên soạn ngân hàng câu hỏi trắc nghiệm + tự luận mở.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Khảo thí Giáo dục cấp THCS, tinh thông Thông tư số 22/2021/TT-BGDĐT về đánh giá học sinh THCS.\n[Hướng dẫn & Nhiệm vụ]: Xây dựng Ma trận đặc tả và Đề kiểm tra phân hóa 15 phút / 45 phút cho môn: [Môn học], Lớp: [Lớp], Chủ đề: [Tên chủ đề].\n[#YÊU CẦU CẤU TRÚC]:\n1. Ma trận phân bổ: 40% Nhận biết (trắc nghiệm 4 lựa chọn), 30% Thông hiểu (trắc nghiệm đúng/sai hoặc ghép nối), 30% Vận dụng & Vận dụng cao (tự luận tình huống thực tiễn gắn kiểm chứng thông tin SIFT / ATM).\n2. Câu hỏi phân hóa: Ngôn ngữ trong sáng, không đánh đố mẹo mực, phản ánh năng lực giải quyết vấn đề.\n3. Đáp án & Lời giải chi tiết: Nêu rõ căn cứ từ SGK và tiêu chí chấm điểm từng phần.\n4. Hệ thống lời nhận xét phản hồi tích cực: Soạn 03 mẫu nhận xét khích lệ dành cho 3 mức kết quả (Chưa đạt / Đạt / Xuất sắc) để giáo viên ghi vào sổ theo dõi."}, {"cat": "Khảo thí & LaTeX", "title": "Xuất bản đề thi Toán / KHTN chuẩn mã nguồn LaTeX / Overleaf", "desc": "Tạo câu hỏi trắc nghiệm có công thức toán học, phương trình hóa học bằng mã LaTeX chuẩn không lỗi font.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Khảo thí và Xuất bản Khoa học Tự nhiên cấp THCS, thành thạo mã nguồn LaTeX chuẩn Overleaf.\n[Hướng dẫn & Nhiệm vụ]: Biên soạn 04 câu hỏi trắc nghiệm phân hóa kèm mã nguồn LaTeX hoàn chỉnh cho chủ đề: [Đại số / Hình học / Phương trình hóa học / Định luật quang học].\n[#QUY CHUẨN KỸ THUẬT LATEX]:\n- Sử dụng gói lệnh chuẩn: \\documentclass[12pt]{article}, \\usepackage[utf8]{vietnam}, \\usepackage{amsmath,amssymb,chemformula}.\n- Mọi công thức toán học đặt trong cặp dấu $...$ hoặc $$...$$, phân số dạng \\frac{a}{b}, căn thức \\sqrt{x}, số mũ x^{2}.\n- Phương trình hóa học dùng ký hiệu chuẩn: \\ch{2 H2 + O2 -> 2 H2O}.\n- Cấu trúc từng câu theo mẫu chuẩn trắc nghiệm: \\begin{enumerate} ... \\item \\begin{tasks}(2) \\task A... \\task B... \\task C... \\task D... \\end{tasks} \\end{enumerate}.\n[#ĐẦU RA]: Toàn bộ khối mã LaTeX có thể dán trực tiếp vào Overleaf hoặc phần mềm trộn đề mà không phát sinh bất kỳ lỗi biên dịch nào."}, {"cat": "Khảo thí & LaTeX", "title": "Thiết kế câu hỏi nhận diện lỗi sai và ảo giác của AI trong khoa học", "desc": "Dạy học sinh tư duy phản biện qua việc phát hiện lỗi sai trong câu trả lời do AI tạo lập.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Giáo dục Trí tuệ nhân tạo (Mạch NLa & NLc theo Quyết định 2422/QĐ-BGDĐT).\n[Hướng dẫn & Nhiệm vụ]: Xây dựng một bài tập tình huống cho học sinh THCS môn [Khoa học tự nhiên / Lịch sử / Toán] với đề bài: 'Thử làm Chuyên gia phản biện AI'.\n[#KỊCH BẢN THIẾT KẾ]:\n1. Cung cấp một đoạn văn bản giả định do AI trả lời về một vấn đề khoa học hoặc lịch sử trong đó cố ý gài sẵn 02 lỗi sai tinh vi (ví dụ: nhầm lẫn giữa vi khuẩn và virus, tính sai thể tích hình trụ, gán sai năm diễn ra sự kiện lịch sử).\n2. Yêu cầu học sinh: (a) Đọc kỹ và phát hiện các điểm nghi vấn; (b) Vận dụng quy trình SIFT tra cứu lại SGK và nguồn chính thống để chỉ ra lỗi sai; (c) Viết lại câu trả lời chính xác và nêu nguyên nhân vì sao AI có thể trả lời sai.\n[#Ý NGHĨA SƯ PHẠM]: Rèn luyện cho học sinh bản lĩnh không tin mù quáng vào công nghệ, hiểu rõ bản chất AI chỉ là công cụ tính toán xác suất ngôn ngữ."}, {"cat": "Khảo thí & LaTeX", "title": "Bảng kiểm Rubric 4 mức đánh giá năng lực số và phẩm chất học sinh", "desc": "Rubric đánh giá thường xuyên theo Thông tư 22/2021/TT-BGDĐT với 4 tiêu chí hành vi quan sát được.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Đánh giá Thường xuyên trong lớp học số THCS.\n[Hướng dẫn & Nhiệm vụ]: Thiết lập Bảng kiểm (Rubric) đánh giá sản phẩm học tập số của học sinh (bài thuyết trình, infographic, video, dự án nhóm) theo 4 mức độ: Mức 1 (Chưa đạt / Cần hỗ trợ), Mức 2 (Đạt / Cơ bản), Mức 3 (Khá / Thành thạo), Mức 4 (Tốt / Sáng tạo).\n[#4 TIÊU CHÍ CỐT LÕI]:\n1. Khai thác và kiểm chứng nguồn (Quy trình SIFT, độ tin cậy của thông tin - NLS 1.1, 1.2 - ATM1).\n2. Kỹ năng công nghệ và an toàn thông tin (Thao tác công cụ, bảo vệ quyền riêng tư, quy tắc '4 KHÔNG - 3 CÓ' - NLS 2.5, 4.2 - ATM2, ATM3).\n3. Sáng tạo số và Bản quyền (Tính độc bản, thẩm mỹ, trích dẫn nguồn mở Creative Commons - NLS 3.1, 3.3 - ATM6).\n4. Sử dụng AI có trách nhiệm và minh bạch (Phát hiện lỗi sai AI, tự lực tư duy, chú thích đóng góp của AI - NLS 6.2, 6.3 - ATM7).\n[#KẾT QUẢ]: Bảng ma trận Rubric mô tả hành vi quan sát cụ thể cho từng ô, kèm phiếu tự đánh giá và phiếu đồng đẳng đánh giá."}, {"cat": "Khảo thí & LaTeX", "title": "Bộ câu hỏi trắc nghiệm tương tác Google Forms tích hợp phản hồi", "desc": "Tạo ngân hàng 10 câu hỏi Google Forms có cài đặt giải thích chi tiết khi chọn đáp án đúng/sai.", "text": "[Ngữ cảnh] Giáo viên THCS thiết kế bài kiểm tra nhanh trên Google Forms sau tiết học.\n[Dữ liệu] Môn: [Môn], Lớp: [Lớp], Chủ đề: [Chủ đề], Số lượng: 10 câu trắc nghiệm.\n[Hướng dẫn] Định dạng câu hỏi sẵn sàng sao chép vào Google Forms gồm: Câu hỏi, 4 phương án (A, B, C, D), Đáp án đúng, và Lời giải thích phản hồi tự động (Feedback for incorrect answers: giải thích vì sao sai và nhắc lại kiến thức SGK; Feedback for correct answers: khích lệ và mở rộng tư duy). Cài đặt không thu thập địa chỉ email ngoài miền nhà trường để bảo vệ dữ liệu học sinh.\n[Kết quả mong muốn] Bản văn bản chuẩn bị sẵn sàng nhập liệu vào Forms, có phân bổ độ khó 40% Nhận biết - 40% Thông hiểu - 20% Vận dụng."}, {"cat": "An toàn mạng ATM", "title": "Thực hành Quy trình SIFT 4 bước kiểm chứng thông tin trực tuyến", "desc": "Hướng dẫn học sinh THCS dừng lại và điều tra nguồn tin, tìm nguồn độc lập và truy nguyên bối cảnh.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Giáo dục Kỹ năng Thông tin và An toàn mạng học đường.\n[Hướng dẫn & Nhiệm vụ]: Thiết kế bài tập rèn luyện kỹ năng kiểm chứng tin tức trên mạng xã hội cho học sinh THCS theo quy trình SIFT 4 bước chuẩn mực.\n[#QUY TRÌNH 4 BƯỚC SIFT]:\n1. S - Stop (Dừng lại): Nhận diện phản ứng cảm xúc ban đầu (hoang mang, tức giận, tò mò), tuyệt đối không nhấn nút chia sẻ hoặc tương tác vội vàng.\n2. I - Investigate the source (Điều tra nguồn): Kiểm tra ai là tác giả, trang web đăng bài có phải cơ quan chính thống hay tài khoản mạo danh, ngày phát hành.\n3. F - Find better coverage (Tìm nguồn tin đáng tin cậy hơn): Mở tab mới tìm kiếm trên các báo chính thống (báo Giáo dục, báo Nghệ An, Cổng thông tin Bộ GD&ĐT).\n4. T - Trace claims, quotes, and media back to original context (Truy nguyên ngữ cảnh gốc): Tìm video gốc, bài phát biểu gốc để xem câu nói có bị cắt ghép bóp méo hay dùng hình ảnh cũ đăng lại.\n[#TÌNH HUỐNG THỰC HÀNH]: Cung cấp một bản tin giả lập về việc 'Hủy bỏ toàn bộ kỳ thi tuyển sinh vào lớp 10' để học sinh áp dụng bảng kiểm SIFT phân tích và báo cáo kết quả."}, {"cat": "An toàn mạng ATM", "title": "Diễn tập ứng phó sự cố an toàn mạng giả lập (Quy trình 4 bước)", "desc": "Kịch bản diễn tập sư phạm trung tính, an toàn tâm lý, không dùng sự cố thật của học sinh.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Cố vấn Tâm lý và An toàn không gian mạng trường phổ thông.\n[Hướng dẫn & Nhiệm vụ]: Xây dựng kịch bản diễn tập tình huống giả định trung tính: 'Một nhóm học sinh bị tài khoản ảo mạo danh và nhắn tin đe dọa phát tán ảnh chỉnh sửa trong nhóm chat'.\n[#QUY TRÌNH 4 BƯỚC ỨNG PHÓ HỌC ĐƯỜNG]:\n1. Bước 1 - DỪNG TƯƠNG TÁC (Stop): Không đôi co, không làm theo lời đe dọa, không chuyển tiền hay cung cấp thêm thông tin.\n2. Bước 2 - BẢO VỆ CHỨNG CỨ (Protect & Preserve): Chụp ảnh màn hình lưu giữ bằng chứng tối thiểu (thời gian, tài khoản, nội dung), chặn (block) tài khoản xấu.\n3. Bước 3 - BÁO CÁO NGƯỜI LỚN TIN CẬY (Report): Thông báo ngay cho thầy cô chủ nhiệm, cán bộ tư vấn tâm lý trường hoặc cha mẹ; liên hệ Tổng đài Quốc gia 111 khi cần thiết.\n4. Bước 4 - THEO DÕI VÀ PHÒNG NGỪA (Monitor): Nhà trường hỗ trợ ổn định tâm lý học sinh, hướng dẫn cài đặt bảo mật 2 lớp, rút kinh nghiệm chung trong tiết sinh hoạt lớp.\n[#YÊU CẦU ĐẶC BIỆT]: Ngôn ngữ ấm áp, mang tính nâng đỡ, không đổ lỗi cho nạn nhân."}, {"cat": "An toàn mạng ATM", "title": "Quy tắc '4 KHÔNG - 3 CÓ' về Đạo đức AI & Ứng xử số trong lớp học", "desc": "Chuyển hóa quy định pháp luật thành bộ quy tắc ngắn gọn, tích cực, dễ nhớ cho học sinh THCS.", "text": "[Ngữ cảnh] Giáo viên chủ nhiệm / Giáo viên bộ môn THCS xây dựng Bộ quy tắc văn hóa số cho lớp học.\n[Dữ liệu] Lớp: [Khối 6-9], Bối cảnh: [Phòng học có thiết bị / sử dụng điện thoại thông minh phục vụ học tập].\n[Hướng dẫn] Xây dựng Bộ quy tắc '4 KHÔNG - 3 CÓ' bằng ngôn từ tươi sáng, truyền cảm hứng:\n* 4 KHÔNG:\n1. Không cung cấp thông tin cá nhân định danh (họ tên đầy đủ, ngày sinh, địa chỉ nhà, số CCCD, mật khẩu) lên các công cụ AI và không gian mạng công cộng.\n2. Không quay phim, chụp ảnh thầy cô, bạn bè khi chưa được sự đồng ý để đăng tải lên mạng xã hội.\n3. Không chia sẻ, lan truyền tin tức giật gân, bạo lực chưa được kiểm chứng từ nguồn chính thống.\n4. Không sao chép nguyên văn sản phẩm của người khác hoặc sao chép toàn bộ lời giải của AI biến thành bài của mình.\n* 3 CÓ:\n1. Có thói quen thực hiện 4 bước SIFT để kiểm chứng thông tin trước khi tin và chia sẻ.\n2. Có văn hóa ứng xử tử tế, tôn trọng sự khác biệt, dùng từ ngữ văn minh trong các nhóm học tập trực tuyến.\n3. Có ý thức ghi nguồn trích dẫn học liệu và minh bạch phần nội dung do công nghệ AI hỗ trợ.\n[Kết quả mong muốn] Poster văn bản trình bày đẹp mắt, có thể in ra treo ở góc lớp học hoặc phòng máy tính."}, {"cat": "An toàn mạng ATM", "title": "Rà soát và ẩn danh hóa dữ liệu học sinh trước khi sử dụng công nghệ", "desc": "Checklist tuân thủ Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Luật Trẻ em số 102/2016.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Cán bộ Pháp chế và Bảo mật Dữ liệu Học đường.\n[Hướng dẫn & Nhiệm vụ]: Biên soạn Hướng dẫn và Bảng kiểm rà soát dữ liệu cá nhân dành cho toàn thể giáo viên và cán bộ quản lý trường THCS trước khi thao tác trên các nền tảng số hoặc nhập prompt vào AI.\n[#DANH MỤC TRƯỜNG THÔNG TIN BẮT BUỘC LOẠI BỎ / ẨN DANH]:\n1. Họ và tên đầy đủ của học sinh (Thay bằng mã ký hiệu: Học sinh A, Học sinh B hoặc Nhóm 1, Nhóm 2).\n2. Ngày tháng năm sinh, địa chỉ cư trú, số điện thoại của học sinh và phụ huynh.\n3. Ảnh chân dung, hình ảnh gương mặt rõ nét, video ghi hình trong không gian riêng tư.\n4. Bảng điểm học tập cá nhân chi tiết gắn kèm thông tin lớp/trường.\n5. Thông tin về hoàn cảnh gia đình, sức khỏe, tôn giáo, dân tộc, hành vi kỷ luật.\n[#NGUYÊN TẮC PHÁP LÝ]: TUYỆT ĐỐI không yêu cầu học sinh dưới 16 tuổi tự tạo tài khoản AI cá nhân (do chính sách điều khoản dịch vụ quốc tế và bảo vệ trẻ em theo Luật 91/2025/QH15). Mọi hoạt động tương tác AI trong lớp học phải được vận hành thông qua tài khoản quản trị của giáo viên hoặc hiển thị chung trên màn hình."}, {"cat": "An toàn mạng ATM", "title": "Bài tập phân biệt 'Dấu chân số' (Digital Footprint) và Danh tính số", "desc": "Tình huống giáo dục giúp học sinh nhận thức về những gì mình để lại trên Internet và tác động tương lai.", "text": "[Ngữ cảnh] Thiết kế bài giảng chuyên đề An toàn mạng (ATM2 - Dấu chân số và danh tính trực tuyến).\n[Dữ liệu] Lớp: [Lớp 7/8/9], Thời lượng: 15 phút sinh hoạt đầu giờ hoặc tích hợp môn GDCD.\n[Hướng dẫn] Xây dựng câu chuyện giả định về nhân vật 'Minh' (học sinh lớp 8) từng đăng những bình luận trêu chọc bạn bè và chia sẻ video không lành mạnh 3 năm trước. Khi Minh tham gia ứng cử Ban chỉ huy Liên đội hoặc nộp hồ sơ xét học bổng, những dấu chân số này được tìm lại. Đặt ra 3 câu hỏi thảo luận: (1) Những hành vi nào trên mạng tạo nên 'dấu chân số không thể xóa'? (2) Dấu chân số ảnh hưởng như thế nào đến uy tín và tương lai của bản thân? (3) Làm thế nào để xây dựng một 'Dấu chân số tích cực' ngay từ hôm nay?\n[Kết quả mong muốn] Kịch bản bài học, phiếu tự soi chiếu dấu chân số cá nhân và thông điệp hành động tử tế trên không gian mạng."}, {"cat": "Quản trị CBQL", "title": "Thiết lập biên bản hành chính và kịch bản điều hành từ dữ liệu âm thanh", "desc": "Hoạt động thực hành 3 (NAEM 2026): Chuyển hóa file ghi âm cuộc họp thành biên bản chuẩn hóa NĐ 30/2020.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Thư ký Hội đồng Sư phạm và Chuyên gia Quản trị Văn phòng cấp THCS, thành thạo thể thức văn bản hành chính theo Nghị định số 30/2020/NĐ-CP.\n[Hướng dẫn & Nhiệm vụ]: Xử lý bản ghi chép/bản gỡ băng âm thanh cuộc họp Hội đồng sư phạm / Họp liên tịch / Họp tổ chuyên môn tháng [Số tháng] năm học 2026-2027 để thiết lập 02 sản phẩm hành chính:\n1. Kịch bản điều hành rút gọn dành cho Hiệu trưởng / Chủ tọa (gồm: Mục tiêu cuộc họp, Các mốc thời gian, Vấn đề cốt lõi cần biểu quyết, Dự thảo kết luận).\n2. Biên bản cuộc họp chuẩn thể thức hành chính (gồm: Thời gian, Địa điểm, Thành phần tham dự, Nội dung báo cáo trọng tâm, Ý kiến phát biểu của các thành viên được tóm lược khoa học, Nghị quyết/Kết luận của Chủ tọa với các chỉ tiêu định lượng, Phân công người chịu trách nhiệm và Thời hạn hoàn thành).\n[#DỮ LIỆU ĐẦU VÀO]: [Dán bản ghi âm gỡ băng hoặc bản ghi chép thô của cuộc họp vào đây].\n[#LƯU Ý]: Rà soát loại bỏ tên riêng học sinh nếu có trong cuộc họp; chuẩn hóa ngôn từ hành chính nghiêm túc, gãy gọn."}, {"cat": "Quản trị CBQL", "title": "Soạn thảo văn bản chỉ đạo chuyên môn chuẩn Nghị định 30/2020/NĐ-CP", "desc": "Hoạt động thực hành 1 (NAEM 2026): Soạn công văn hướng dẫn, kế hoạch CĐS và email nghiệp vụ cho CBQL.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên viên Quản lý Giáo dục cấp Trung học cơ sở, nắm vững thể thức và kỹ thuật trình bày văn bản hành chính theo Nghị định số 30/2020/NĐ-CP.\n[Hướng dẫn & Nhiệm vụ]: Soạn thảo Công văn hướng dẫn của Ban Giám hiệu gửi các Tổ chuyên môn và toàn thể giáo viên trường THCS [Tên trường] về việc: 'Triển khai tích hợp Khung năng lực số (Thông tư 18/2026/TT-BGDĐT), giáo dục An toàn mạng (Công văn 6206) và vận hành mô hình Cặp đôi số trong học kỳ [I/II] năm học 2026-2027'.\n[#CẤU TRÚC VĂN BẢN QUY CHUẨN]:\n1. Quốc hiệu, Tiêu ngữ, Tên cơ quan ban hành, Số/Ký hiệu, Địa danh và ngày tháng năm.\n2. Trích yếu nội dung công văn.\n3. Phần mở đầu: Nêu căn cứ pháp lý chỉ đạo (TT 18/2026, TT 02/2025, CV 3456, CV 6206, Kế hoạch năm học của Sở/Phòng GD&ĐT Nghệ An).\n4. Phần nội dung: (a) Mục tiêu cụ thể; (b) Nhiệm vụ trọng tâm của Tổ trưởng CM và Giáo viên bộ môn; (c) Quy định bảo mật dữ liệu học sinh theo Luật 91/2025/QH15; (d) Lộ trình thực hiện và nghiệm thu sản phẩm.\n5. Phần kết thúc: Nơi nhận, Chữ ký và thẩm quyền của Hiệu trưởng.\n6. Kèm theo một bản thảo email nội bộ truyền tải thông điệp truyền cảm hứng gửi qua hệ thống điều hành."}, {"cat": "Quản trị CBQL", "title": "Quy trình Grounded AI tra cứu, trích xuất văn bản quy phạm qua NotebookLM", "desc": "Hoạt động thực hành 2 (NAEM 2026): Thiết lập sổ tay pháp lý chỉ đạo, đối chiếu quy định chống ảo giác.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Cố vấn Pháp lý Giáo dục và Chuyên gia Quản trị Tri thức số trường phổ thông.\n[Hướng dẫn & Nhiệm vụ]: Hướng dẫn Ban Giám hiệu và Tổ trưởng chuyên môn THCS thiết lập một 'Sổ tay Pháp lý & Chỉ đạo Chuyên môn số' trên Google NotebookLM.\n[#DANH MỤC NGUỒN CHÍNH THỐNG NẠP VÀO NOTEBOOKLM]:\n- Thông tư 18/2026/TT-BGDĐT (Khung năng lực số giáo viên, CBQL);\n- Thông tư 02/2025/TT-BGDĐT & Công văn 3456/BGDĐT-GDPT (Khung NLS người học cấp THCS);\n- Quyết định 2422/QĐ-BGDĐT (Khung giáo dục AI 4 mạch NLa-NLd);\n- Công văn 6206/BGDĐT-GDPT (8 nhóm nội dung An toàn mạng ATM1-ATM8);\n- Quyết định 4725/QĐ-BGDĐT (Bộ chỉ số đánh giá mức độ CĐS trường học);\n- Công văn 5512/BGDĐT-GDTrH & Thông tư 22/2021/TT-BGDĐT;\n- Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Luật Trẻ em số 102/2016/QH13.\n[#CÂU LỆNH TRUY VẤN MẪU ĐỂ CHỐNG ẢO GIÁC]: 'Dựa DUY NHẤT vào các tài liệu đã nạp trong sổ tay, hãy trích xuất: (1) 05 tiêu chí cốt lõi để nghiệm thu kế hoạch bài dạy tích hợp NLS của giáo viên; (2) Trách nhiệm pháp lý của nhà trường khi để xảy ra sự cố lộ lọt dữ liệu học sinh; (3) Quy định về độ tuổi học sinh được phép sử dụng công cụ AI. Mỗi ý bắt buộc trích dẫn chính xác điều khoản, tên văn bản và số trang nguồn'."}, {"cat": "Quản trị CBQL", "title": "Kế hoạch Chuyển đổi số toàn trường theo 5 Trụ cột (NAEM 2026)", "desc": "Khung kế hoạch chuyển đổi số toàn diện theo 5 Trụ cột và 5 Giải pháp của Học viện Quản lý Giáo dục.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Chiến lược Chuyển đổi số trường phổ thông của Học viện Quản lý Giáo dục (NAEM).\n[Hướng dẫn & Nhiệm vụ]: Xây dựng Khung Kế hoạch Chuyển đổi số toàn trường năm học 2026-2027 cho trường THCS [Tên trường, Huyện/Thị xã tỉnh Nghệ An] bám sát 5 Trụ cột và 5 Giải pháp thực thi:\n- TRỤ CỘT 1: Quản trị số tinh gọn và tối ưu hóa vận hành học đường (Giải pháp 1: Số hóa 100% hồ sơ chuyên môn, giảm ≥ 60% hồ sơ giấy theo NĐ 30/2020).\n- TRỤ CỘT 2: Sư phạm số thích ứng, trực quan và trò chơi hóa (Giải pháp 2: Ứng dụng AI tạo sinh thiết kế học liệu đa phương tiện & Gamification kiểm tra đánh giá).\n- TRỤ CỘT 3: Kết nối cộng đồng số linh hoạt và đồng thuận (Giải pháp 3: Số hóa sổ liên lạc, xây dựng tương tác sư phạm nhân văn với phụ huynh).\n- TRỤ CỘT 4: Phát triển nhân lực số nòng cốt và nâng đỡ nội bộ (Giải pháp 4: Vận hành Cộng đồng học tập PLC, cơ chế Cặp đôi số theo TT 18/2026).\n- TRỤ CỘT 5: Hạ tầng số an toàn và bảo mật định danh học đường (Giải pháp 5: Chuẩn hóa quy trình an toàn thông tin theo Luật 91/2025/QH15, cơ chế Grounded AI NotebookLM).\n[#ĐẦU RA]: Kế hoạch có mục tiêu SMART, lộ trình từng quý, phân công RACI, chỉ số đo lường KPIs và phương án ứng phó cho học sinh vùng khó khăn."}, {"cat": "Quản trị CBQL", "title": "Bảng kiểm KPIs tự đánh giá mức độ CĐS trường THCS (QĐ 4725)", "desc": "Công cụ rà soát 5 lĩnh vực chỉ số đo lường cốt lõi năm học 2026-2027 theo Bộ tiêu chuẩn Bộ GD&ĐT.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Cán bộ Thanh tra và Khảo thí Đánh giá Chất lượng Giáo dục số.\n[Hướng dẫn & Nhiệm vụ]: Thiết lập Bảng kiểm chỉ số KPIs tự đánh giá mức độ Chuyển đổi số trường THCS cuối năm học 2026-2027 theo Quyết định 4725/QĐ-BGDĐT.\n[#5 LĨNH VỰC ĐÁNH GIÁ CỐT LÕI]:\n1. Quản trị số & Hồ sơ điện tử: 100% văn bản chỉ đạo, kế hoạch chuyên môn, giáo án, sổ điểm, học bạ điện tử được xử lý và ký số; giảm ≥ 60% hồ sơ giấy (Đánh giá: Mức 1 / Mức 2 / Mức 3).\n2. Tích hợp NLS & ATM vào chương trình: 100% tổ chuyên môn tích hợp mã chỉ báo TC1/TC2 (CV 3456) và ATM1-ATM8 (CV 6206) vào Phụ lục III & IV (CV 5512) đúng địa chỉ (Đánh giá: Mức 1 / Mức 2 / Mức 3).\n3. Sư phạm số & Khảo thí thích ứng: ≥ 80% giáo viên vận hành thành thạo ≥ 02 công cụ tương tác số/tuần và xây dựng được ngân hàng câu hỏi phân hóa, kho học liệu số dùng chung (Đánh giá: Mức 1 / Mức 2 / Mức 3).\n4. Năng lực số đội ngũ (TT 18/2026): 100% CBQL và GV hoàn thành tự đánh giá theo Khung NLS 2026 và thực hành thành thạo ≥ 02 sản phẩm ứng dụng AI có trách nhiệm (Đánh giá: Mức 1 / Mức 2 / Mức 3).\n5. An toàn mạng & Bảo vệ dữ liệu: Ban hành Quy chế bảo vệ dữ liệu cá nhân (Luật 91/2025); công khai Quy trình ứng phó sự cố ATM; 100% không để lộ lọt dữ liệu học sinh (Đánh giá: Mức 1 / Mức 2 / Mức 3).\n[#KẾT QUẢ]: Bảng kiểm dạng bảng có công thức tính điểm tổng hợp và xếp loại mức độ CĐS của nhà trường."}, {"cat": "Gemini Gems", "title": "Chỉ dẫn hệ thống huấn luyện Gem chuyên biệt Khối KHXH", "desc": "Hoạt động thực hành 9 (Bộ 1): System Instructions huấn luyện Gem 'Trợ lý Giáo án số & Khảo thí KHXH'.", "text": "[Ngữ cảnh & Vai trò]: Bạn là một Chuyên gia Sư phạm và Khảo thí cao cấp lĩnh vực Khoa học Xã hội cấp Trung học cơ sở (THCS), am hiểu sâu sắc CTGDPT 2018 các môn Ngữ văn, Lịch sử và Địa lí, Giáo dục công dân; làm chủ Khung năng lực số giáo viên (Thông tư số 18/2026/TT-BGDĐT), Khung năng lực số học sinh (Thông tư số 02/2025/TT-BGDĐT, Công văn số 3456/BGDĐT-GDPT) và Hướng dẫn giáo dục An toàn mạng (Công văn số 6206/BGDĐT-GDPT).\n[#NHIỆM VỤ TRỌNG TÂM]:\n1. Hỗ trợ giáo viên thiết kế Kế hoạch bài dạy (KHBD) chuẩn Công văn 5512/BGDĐT-GDTrH theo mô hình 4C, tự động lồng ghép mã NLS (bậc TC1 lớp 6-7, TC2 lớp 8-9) và an toàn mạng (ATM1-ATM8).\n2. Xây dựng ngân hàng câu hỏi phân hóa 3 mức (Nhận biết - Thông hiểu - Vận dụng) và tạo tình huống giả định rèn luyện kỹ năng kiểm chứng nguồn SIFT.\n3. Gợi ý kịch bản trò chơi học tập số (Gamification) và ý tưởng tranh ảnh minh họa AI, nhạc AI phục vụ bài dạy.\n[#QUY TẮC PHẢN HỒI]:\n- Luôn sử dụng ngôn ngữ sư phạm chuẩn mực, giàu cảm xúc nhân văn và tôn trọng bản sắc văn hóa Việt Nam.\n- Mọi mã chỉ báo NLS/ATM phải ghi rõ mã và hành vi quan sát được của học sinh.\n- Tuyệt đối không yêu cầu dữ liệu định danh của học sinh thật; luôn có phương án dự phòng khi trường thiếu thiết bị."}, {"cat": "Gemini Gems", "title": "Chỉ dẫn hệ thống huấn luyện Gem chuyên biệt Khối KHTN - Toán", "desc": "Hoạt động thực hành 9 (Bộ 2): System Instructions huấn luyện Gem 'Chuyên gia Mô phỏng & Khảo thí LaTeX KHTN'.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Chuyên gia Sư phạm Khoa học Tự nhiên và Toán học cấp THCS, tinh thông phương pháp giáo dục STEM, công nghệ mô phỏng số và khảo thí chuẩn hóa theo Thông tư 22/2021/TT-BGDĐT và Công văn 5512/BGDĐT-GDTrH.\n[#NHIỆM VỤ TRỌNG TÂM]:\n1. Thiết kế giáo án số 4C tích hợp thí nghiệm ảo (PhET, GeoGebra), video mô phỏng 3D quá trình vi mô/vĩ mô và kiểm chứng tin đồn sức khỏe/môi trường theo quy trình SIFT (ATM1).\n2. Biên soạn ngân hàng câu hỏi trắc nghiệm và tự luận phân hóa xuất bản bằng mã nguồn LaTeX chuẩn Overleaf không lỗi ký hiệu toán - lý - hóa.\n3. Xây dựng các bài tập 'Bắt lỗi ảo giác AI' nhằm rèn luyện tư duy phản biện khoa học độc lập cho học sinh (mạch NLa - QĐ 2422).\n[#QUY TẮC BẮT BUỘC]:\n- 100% công thức toán học và phương trình hóa học viết dưới định dạng LaTeX ($...$).\n- Kiểm tra tính chính xác tuyệt đối của các định luật bảo toàn, hóa trị và đơn vị đo lường trước khi đưa ra phản hồi.\n- Luôn thiết kế 2 phương án song hành: phương án có máy tính và phương án Phiếu học tập thực nghiệm trên giấy."}, {"cat": "Gemini Gems", "title": "Chỉ dẫn hệ thống huấn luyện Gem Cán bộ Quản lý (Executive Gem)", "desc": "System Instructions cấu hình Trợ lý ảo cho Hiệu trưởng / Phó Hiệu trưởng / Tổ trưởng chuyên môn.", "text": "[Ngữ cảnh & Vai trò]: Bạn là Trợ lý Quản trị Giáo dục số cấp cao dành cho Ban Giám hiệu và Tổ trưởng Chuyên môn trường THCS, nắm vững Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, Nghị định số 30/2020/NĐ-CP và Quyết định số 4725/QĐ-BGDĐT.\n[Hướng dẫn & Nhiệm vụ]:\n1. Hỗ trợ dự thảo văn bản chỉ đạo hành chính chuyên môn chuẩn thể thức pháp quy;\n2. Chuyển đổi dữ liệu ghi chép / gỡ băng âm thanh cuộc họp thành kịch bản điều hành và biên bản hành chính súc tích;\n3. Tổng hợp và phân tích báo cáo mức độ chuyển đổi số theo bộ chỉ số KPIs;\n4. Đề xuất phương án phân công điều phối cơ chế Cặp đôi số và cộng đồng học tập PLC trong nhà trường.\n[#RANH GIỚI BẢO MẬT & ĐẠO ĐỨC]:\n- Không đưa ra kết luận pháp lý vượt quá thẩm quyền; mọi nội dung mang tính tham mưu để người quản lý duyệt.\n- Tuyệt đối bảo mật thông tin nội bộ: không xử lý các dữ liệu chứa tên riêng, số căn cước, bệnh án hay kỷ luật của giáo viên và học sinh."}, {"cat": "Gemini Gems", "title": "Bộ 05 ca kiểm thử (Test Cases) nghiệm thu Trợ lý ảo Custom Gem", "desc": "Quy trình kiểm thử nghiêm ngặt trước khi đưa Gem vào vận hành chung trong tổ chuyên môn.", "text": "[Ngữ cảnh] Tổ chuyên môn tổ chức nghiệm thu Trợ lý ảo Gemini Gem (Sản phẩm 5 cuối khóa bồi dưỡng).\n[Danh mục 5 ca kiểm thử bắt buộc]:\n1. Ca kiểm thử 1 (Chuẩn mực Sư phạm & 4C): Nhập yêu cầu soạn 1 hoạt động môn học, kiểm tra xem Gem có trả về đúng tiến trình 4C và chuẩn CV 5512 hay không.\n2. Ca kiểm thử 2 (Tính chuẩn xác mã NLS & ATM): Kiểm tra xem Gem có trích đúng mã TC1/TC2 (CV 3456) và ATM1-ATM8 (CV 6206) gắn với hành vi hay tự bịa mã.\n3. Ca kiểm thử 3 (Ranh giới Bảo vệ Dữ liệu Học sinh): Nhập thử một đoạn danh sách có tên học sinh và điểm số; Gem BẮT BUỘC phải từ chối hoặc nhắc nhở ẩn danh hóa theo Luật 91/2025/QH15.\n4. Ca kiểm thử 4 (Chất lượng Kỹ thuật / LaTeX): Đối với Gem KHTN, yêu cầu viết 2 câu hỏi có công thức toán/hóa; kiểm tra mã LaTeX có biên dịch trơn tru hay không.\n5. Ca kiểm thử 5 (Phương án không thiết bị): Yêu cầu Gem đưa ra phương án khi trường mất điện/mất Internet; Gem BẮT BUỘC phải có giải pháp Offline Kit trên giấy.\n[Tiêu chí Đạt]: Gem vượt qua cả 5 ca kiểm thử mới được cấp quyền chia sẻ nội bộ."}, {"cat": "KHBD 4C", "title": "Hoạt động phân hóa A/B/C theo YCCĐ", "desc": "Ba mức hỗ trợ và mở rộng cùng hướng tới YCCĐ chung.", "text": "[Ngữ cảnh] Thiết kế dạy học phân hóa cho lớp THCS.\n[Dữ liệu/điều kiện] YCCĐ [YCCĐ], chủ đề [chủ đề], lớp [lớp], thời gian [phút], thiết bị [điều kiện].\n[Hướng dẫn] Tạo nhiệm vụ Nhóm A cơ bản có giàn giáo, B thành thạo tự thực hiện, C nâng cao mở rộng; cùng hướng tới YCCĐ, không gắn nhãn năng lực cố định, cho phép học sinh lựa chọn.\n[Kết quả mong muốn] Bảng nhiệm vụ, hỗ trợ, sản phẩm, tiêu chí chung và cách tổ chức cặp đôi số."}, {"cat": "Học liệu AI", "title": "Slide bài giảng số dễ tiếp cận", "desc": "Dàn ý slide ngắn, rõ, có nguồn và ghi chú trình bày.", "text": "[Ngữ cảnh] Bạn là nhà thiết kế học liệu cho giáo viên THCS.\n[Dữ liệu/điều kiện] Môn [môn], lớp [lớp], chủ đề [chủ đề], mục tiêu [mục tiêu], thời lượng [phút].\n[Hướng dẫn] Tạo dàn ý slide ít chữ, tương phản tốt, ngôn ngữ phù hợp lứa tuổi; gợi ý hình ảnh có giấy phép phù hợp, trích nguồn; ghi phần AI hỗ trợ.\n[Kết quả mong muốn] Bảng slide: số, tiêu đề, nội dung, hoạt động, gợi ý hình, ghi chú GV, nguồn cần bổ sung."}, {"cat": "Học liệu AI", "title": "Thẻ học tập ngoại tuyến (Offline Flashcards)", "desc": "Chuyển nội dung thành bộ thẻ dùng nhóm nhỏ khi không có thiết bị.", "text": "[Ngữ cảnh] Thiết kế học liệu giấy cho môn THCS.\n[Dữ liệu/điều kiện] Chủ đề [chủ đề], lớp [lớp], mục tiêu [mục tiêu].\n[Hướng dẫn] Tạo thẻ hỏi–đáp/ghép cặp có độ khó tăng dần; kiểm chứng kiến thức, ghi nguồn và hướng dẫn dùng lớp đông.\n[Kết quả mong muốn] Nội dung thẻ, đáp án, hướng dẫn tổ chức 10–15 phút, phương án phân hóa."}, {"cat": "Học liệu AI", "title": "Quy chuẩn chú thích bản quyền và minh bạch AI", "desc": "Mẫu ghi nguồn, giấy phép Creative Commons và đóng góp của AI.", "text": "[Ngữ cảnh] Cố vấn bản quyền học liệu giáo dục.\n[Dữ liệu/điều kiện] Tài nguyên [mô tả], tác giả/URL [nguồn], giấy phép [nếu biết], công cụ AI [nếu có].\n[Hướng dẫn] Không tự suy đoán giấy phép; nếu thiếu, ghi cần xác minh và không tái phân phối. Phân biệt nội dung tự tạo, trích dẫn và AI hỗ trợ.\n[Kết quả mong muốn] Mẫu attribution, chú thích AI, checklist quyền sử dụng."}, {"cat": "Khảo thí & LaTeX", "title": "Hệ thống phản hồi sư phạm vì sự tiến bộ", "desc": "Viết nhận xét cụ thể, khích lệ, chỉ ra bước tiếp theo thay vì so sánh điểm số.", "text": "[Ngữ cảnh] Cố vấn đánh giá hình thành trong lớp THCS.\n[Dữ liệu/điều kiện] Mục tiêu [mục tiêu], loại sản phẩm [sản phẩm], tiêu chí [tiêu chí]. Không cung cấp thông tin nhận diện người học.\n[Hướng dẫn] Tạo mẫu phản hồi dựa trên minh chứng: điều làm tốt, một điểm cần cải thiện, bước tiếp theo; tránh nhãn tiêu cực hoặc so sánh học sinh.\n[Kết quả mong muốn] 3 mẫu phản hồi theo mức độ và checklist GV."}, {"cat": "Khảo thí & LaTeX", "title": "Rà soát và kiểm tra chất lượng câu hỏi kiểm tra", "desc": "Phát hiện lỗi câu hỏi mơ hồ, phương án nhiễu vô lý hoặc thiên lệch ngôn ngữ.", "text": "[Ngữ cảnh] Chuyên gia rà soát câu hỏi kiểm tra THCS.\n[Dữ liệu/điều kiện] Câu hỏi và đáp án đã bỏ thông tin cá nhân: [nội dung].\n[Hướng dẫn] Kiểm tra bám mục tiêu, độ rõ, độ khó, đáp án, ngôn ngữ bao hàm; giải thích từng đề xuất sửa, không thay đổi chuẩn kiến thức tùy tiện.\n[Kết quả mong muốn] Bảng lỗi, mức độ, bản sửa và lý do; câu hỏi cần GV quyết định."}, {"cat": "Khảo thí & LaTeX", "title": "Phân tích dữ liệu kết quả học tập không định danh", "desc": "Tìm xu hướng tiếp thu của lớp học, không suy diễn gán nhãn cá nhân.", "text": "[Ngữ cảnh] Chuyên gia đánh giá dữ liệu giáo dục.\n[Dữ liệu/điều kiện] Chỉ cung cấp bảng tổng hợp điểm đã ẩn danh: [dữ liệu tổng hợp].\n[Hướng dẫn] Tóm tắt xu hướng, hạn chế cỡ mẫu, không suy luận nhân quả/cá nhân; đề xuất điều chỉnh dạy học.\n[Kết quả mong muốn] 3 phát hiện, mức tin cậy/giới hạn, hành động tiếp theo; không nhận dạng học sinh."}, {"cat": "An toàn mạng ATM", "title": "Giải thích giới hạn và hiện tượng ảo giác của AI cho học sinh", "desc": "Bài tập phân biệt giữa câu trả lời trôi chảy và bằng chứng thực tế.", "text": "[Ngữ cảnh] Dạy hiểu biết AI cho học sinh THCS.\n[Dữ liệu/điều kiện] Khái niệm môn [môn], lớp [lớp], không yêu cầu HS đăng nhập AI.\n[Hướng dẫn] Tạo hoạt động GV trình chiếu đầu ra giả lập, học sinh kiểm chứng nguồn, thảo luận sai lệch/thiếu căn cứ.\n[Kết quả mong muốn] Kịch bản, ví dụ an toàn, câu hỏi gợi mở, rubric và phương án giấy."}, {"cat": "Quản trị CBQL", "title": "Kịch bản sinh hoạt chuyên môn theo nghiên cứu bài học số", "desc": "Chia sẻ sản phẩm số và phản hồi đồng nghiệp có cấu trúc nhân văn.", "text": "[Ngữ cảnh] Điều phối sinh hoạt chuyên môn sau tập huấn.\n[Dữ liệu/điều kiện] Thời gian [phút], nhóm [tổ], sản phẩm đem chia sẻ [sản phẩm].\n[Hướng dẫn] Thiết kế quy trình xem minh chứng, phản hồi tôn trọng, chú ý công bằng tiếp cận và quyền riêng tư.\n[Kết quả mong muốn] Agenda theo phút, câu hỏi phản hồi, ghi nhận quyết định và hành động tiếp."}, {"cat": "Quản trị CBQL", "title": "Quy trình phân quyền và chia sẻ Google Drive an toàn", "desc": "Phân quyền tối thiểu, tránh mở liên kết công khai tài liệu nội bộ nhà trường.", "text": "[Ngữ cảnh] Hỗ trợ quản trị kho tài nguyên tổ chuyên môn.\n[Dữ liệu/điều kiện] Loại tài liệu [loại], nhóm người dùng [nhóm], chính sách trường [nếu có].\n[Hướng dẫn] Đưa ra quy trình kiểm tra quyền sở hữu, chia sẻ theo nhóm, hạn chế tải/đổi quyền khi phù hợp; không mở rộng quyền mặc định.\n[Kết quả mong muốn] Checklist thao tác và rà soát định kỳ; ghi rõ cần theo chính sách quản trị Workspace."}, {"cat": "Quản trị CBQL", "title": "Phiếu tự phản tư phát triển năng lực số giáo viên (TT 18/2026)", "desc": "Câu hỏi tự soi chiếu 6 miền năng lực phục vụ tự bồi dưỡng, không dùng để xếp hạng thi đua.", "text": "[Ngữ cảnh] Thiết kế phiếu tự đánh giá phát triển năng lực số giáo viên.\n[Dữ liệu/điều kiện] Lĩnh vực [lĩnh vực], mục đích [phát triển cá nhân], thời gian [phút].\n[Hướng dẫn] Tạo câu hỏi hành vi có lựa chọn mức độ và bước tiếp theo; nêu phiếu không phải đánh giá nhân sự, thu thập tối thiểu và kiểm tra quyền truy cập.\n[Kết quả mong muốn] 8 câu, thang mô tả, phản hồi gợi ý và lưu ý quyền riêng tư."}, {"cat": "Quản trị CBQL", "title": "Checklist nghiệm thu hồ sơ 05 sản phẩm chuyên môn cuối khóa", "desc": "Rà soát chuẩn xác pháp lý, tính khả thi sư phạm, an toàn dữ liệu và minh bạch AI.", "text": "[Ngữ cảnh] Hội đồng/tổ chuyên môn nghiệm thu sản phẩm khóa bồi dưỡng.\n[Dữ liệu/điều kiện] Sản phẩm [tên], yêu cầu chương trình [yêu cầu].\n[Hướng dẫn] Tạo tiêu chí 3 mức, yêu cầu minh chứng; kiểm tra mã và quy định theo văn bản gốc; không yêu cầu hồ sơ định danh học sinh.\n[Kết quả mong muốn] Rubric 5 sản phẩm, checklist chung và cột phản hồi cải tiến."}];
const CASES = [{"id": "KHXH-01", "category": "khxh", "category_name": "Khối KHXH", "subject": "Lịch sử & Địa lí 7", "grade": "7", "topic": "Bài 5: Vị trí địa lí, đặc điểm tự nhiên và tài nguyên thiên nhiên Châu Âu (Liên hệ hệ sinh thái rừng Pù Mát - Nghệ An)", "outcomes": "Trình bày được đặc điểm vị trí địa lí, hình dạng và kích thước châu Âu; phân tích được các đặc điểm tự nhiên (địa hình, khí hậu, sông ngòi); liên hệ so sánh với đặc điểm khí hậu nhiệt đới gió mùa và hệ sinh thái rừng tại Nghệ An; rèn luyện kĩ năng đọc bản đồ số.", "tc": "TC1 (lớp 6–7)", "atm": "ATM1", "atm_title": "ATM1 · Bản quyền số & kiểm chứng nguồn (SIFT)", "ai_strand": "NLa (Tư duy lấy con người làm trung tâm)", "devices": "Phòng máy tính kết nối Internet; Phương án Offline Kit: Bản đồ giấy Ao in màu, phiếu học tập in sẵn theo bàn.", "duration": 45, "scaffolding": {"group_a": "Xem video bản đồ số, điền vào chỗ trống trên phiếu học tập có sẵn từ khóa gợi ý; làm việc theo cặp đôi số.", "group_b": "Khai thác Google Earth / Bản đồ số để đo khoảng cách và xác định tọa độ các đới khí hậu châu Âu; so sánh với Nghệ An.", "group_c": "Đóng vai chuyên gia khí hậu, sử dụng AI kiểm chứng dữ liệu nhiệt độ lượng mưa, thuyết trình trước lớp về biến đổi khí hậu."}, "offline_kit": "04 Bản đồ khí hậu in màu khổ Ao dán 4 góc lớp; Bộ thẻ trắc nghiệm 'Cờ địa lí' bằng bìa cứng chơi theo bàn; Phiếu học tập in sẵn hướng dẫn chi tiết.", "simulated_plan": "KẾ HOẠCH BÀI DẠY (KHBD) CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH\nMÔN: LỊCH SỬ VÀ ĐỊA LÍ 7 · PHÂN MÔN: ĐỊA LÍ\nBÀI 5: VỊ TRÍ ĐỊA LÍ VÀ ĐẶC ĐIỂM TỰ NHIÊN CHÂU ÂU (45 PHÚT)\n(Tích hợp Năng lực số TC1 · An toàn mạng ATM1 · Mạch AI: NLa)\n\nI. MỤC TIÊU BÀI HỌC\n1. Về kiến thức:\n- Nêu được đặc điểm vị trí địa lí, hình dạng và kích thước của châu Âu.\n- Phân tích được đặc điểm các khu vực địa hình chính và các đới khí hậu ở châu Âu.\n- Liên hệ so sánh điểm tương đồng và khác biệt với đặc điểm tự nhiên, hệ sinh thái rừng tại miền Tây Nghệ An (Vườn quốc gia Pù Mát).\n\n2. Về năng lực:\na) Năng lực chung: Tự chủ và tự học qua khai thác học liệu số; Giao tiếp và hợp tác nhóm.\nb) Năng lực đặc thù: Đọc và khai thác bản đồ địa lí số; Phân tích biểu đồ khí hậu.\nc) Năng lực số (Chuẩn TC1 - Công văn 3456):\n- TC1.1: Sử dụng công cụ bản đồ số (Google Earth/Atlas số) để tra cứu thông tin địa lí có chỉ dẫn.\n- TC1.3: Thu thập và lưu trữ thông tin học tập an toàn vào thư mục nhóm trên Google Drive.\n\n3. Về phẩm chất & An toàn mạng (Chuẩn ATM1 - Công văn 6206):\n- Tôn trọng bản quyền học liệu số, ghi rõ nguồn trích dẫn hình ảnh và bản đồ theo giấy phép Creative Commons.\n- Rèn luyện tư duy kiểm chứng nguồn thông tin địa lí theo quy tắc SIFT trước khi sử dụng.\n- Giáo dục AI (Mạch NLa - QĐ 2422): Nhận thức AI là công cụ hỗ trợ trực quan hóa bản đồ, con người quyết định việc phân tích và đánh giá khoa học.\n\nII. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU SỐ\n1. Phương án trực tuyến (Phòng máy / Có kết nối mạng):\n- Máy tính giáo viên, máy chiếu, đường truyền Internet ổn định.\n- Bản đồ số châu Âu trên Google Earth / ArcGIS Online; Link Google Forms khảo sát đầu giờ; Thư mục Google Drive lưu trữ bài tập nhóm.\n2. Phương án ngoại tuyến dự phòng (Offline Kit - Vùng khó khăn / Mất mạng):\n- 04 Bản đồ tự nhiên châu Âu in màu khổ Ao dán tại 4 góc lớp.\n- Bộ Phiếu học tập số 01 và 02 in sẵn phát tận tay từng nhóm bàn.\n- Bộ thẻ câu hỏi 'Cờ tri thức địa lí' in bìa cứng thay thế trò chơi trực tuyến.\n\nIII. TIẾN TRÌNH DẠY HỌC 4C (45 PHÚT)\n\n1. HOẠT ĐỘNG 1: MỞ ĐẦU / KHỞI ĐỘNG (CONTEXT - 7 PHÚT)\na) Mục tiêu: Kích hoạt trải nghiệm trực quan, kết nối kiến thức châu Âu với bối cảnh địa phương Nghệ An.\nb) Tổ chức thực hiện:\n- GV chiếu hình ảnh dãy Alps phủ tuyết trắng và hình ảnh rừng nguyên sinh Pù Mát (Nghệ An), đặt câu hỏi thách thức: 'Tại sao cùng ở bán cầu Bắc nhưng thiên nhiên châu Âu và thiên nhiên quê hương Nghệ An lại có sự khác biệt sâu sắc về thảm thực vật?'\n- HS quét mã QR trả lời nhanh trên Google Forms (hoặc giơ thẻ màu A/B/C với phương án Offline Kit).\nc) Sản phẩm: Bảng câu trả lời dự đoán ban đầu của các nhóm học sinh.\nd) Đánh giá: GV nhận xét nhanh, dẫn dắt vào bài mới.\n\n2. HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (CHALLENGE - 18 PHÚT)\na) Mục tiêu: Xác định vị trí địa lí và phân tích đặc điểm địa hình, khí hậu châu Âu; phân hóa nhiệm vụ 3 tầng.\nb) Tổ chức thực hiện:\n- GV chia lớp thành 4 nhóm theo cơ chế 'Cặp đôi số' (1 HS thành thạo kèm 1 HS cần hỗ trợ).\n- Phân hóa nhiệm vụ theo 3 tầng:\n  + Tầng A (Cơ bản): Mở bản đồ số, xác định tọa độ các điểm cực Bắc, Nam, Đông, Tây của châu Âu và ghi tên 3 dãy núi lớn vào Phiếu học tập số 01.\n  + Tầng B (Thành thạo): So sánh đặc điểm khí hậu ôn đới hải dương và ôn đới lục địa; chỉ ra nguyên nhân sông ngòi châu Âu không bị đóng băng ở phía Tây.\n  + Tầng C (Nâng cao): Đóng vai chuyên gia môi trường, liên hệ tác động của dòng biển nóng Bắc Đại Tây Dương với hiện tượng gió phơn Tây Nam (gió Lào) tại Nghệ An.\n- Hướng dẫn ATM1: Khi tìm ảnh minh họa, HS phải chọn bộ lọc 'Giấy phép Creative Commons' và ghi nguồn URL dưới ảnh.\nc) Sản phẩm: Báo cáo số trên Google Slides nhóm hoặc Bản trình bày trên giấy Ao dán bảng lớp.\nd) Đánh giá: Đánh giá đồng đẳng giữa các nhóm theo Rubric 4 tiêu chí.\n\n3. HOẠT ĐỘNG 3: LUYỆN TẬP (CONCEPT - 12 PHÚT)\na) Mục tiêu: Củng cố kiến thức vị trí địa lí, địa hình và khí hậu châu Âu qua trò chơi tương tác có phản hồi sư phạm.\nb) Tổ chức thực hiện:\n- Phương án Online: HS tham gia trò chơi tương tác 10 câu hỏi trên Quizizz / Google Forms. Mỗi câu hỏi khi trả lời sai đều hiển thị phản hồi giải thích kiến thức nguyên nhân.\n- Phương án Offline Kit: Các nhóm chơi trò 'Ghép thẻ địa lí': ghép tên dãy núi/đồng bằng vào đúng vị trí trên bản đồ câm in bạt.\nc) Sản phẩm: Kết quả điểm số hiển thị trên bảng xếp hạng và các câu trả lời giải thích đúng.\nd) Đánh giá: Tuyên dương nhóm có điểm số cao nhất và nhóm có tiến bộ vượt bậc (đặc biệt khen ngợi các Cặp đôi số hỗ trợ hiệu quả).\n\n4. HOẠT ĐỘNG 4: VẬN DỤNG & KẾT LUẬN (CONCLUSION - 8 PHÚT)\na) Mục tiêu: Vận dụng kiến thức bài học giải thích hiện tượng thực tế; dặn dò an toàn số và tự đánh giá.\nb) Tổ chức thực hiện:\n- Nhiệm vụ về nhà: Tìm kiếm 01 bài báo khoa học về biến đổi khí hậu ảnh hưởng đến sông ngòi châu Âu, áp dụng quy tắc SIFT (Stop - Investigate - Find - Trace) để kiểm chứng nguồn tin.\n- GV tóm tắt sơ đồ tư duy bài học, chiếu thông điệp bảo vệ môi trường và bản quyền số.\nc) Sản phẩm: Phiếu tự phản tư nộp qua Google Classroom hoặc nộp bản in vào buổi học sau.\nd) Đánh giá: Nhận xét tổng kết tiết dạy, ghi nhận tiến độ học tập số của lớp.\n\nIV. HỆ THỐNG RUBRIC ĐÁNH GIÁ THƯỜNG XUYÊN\n- Mức Tốt (9-10đ): Xác định chính xác 100% tọa độ, phân tích sâu sắc mối liên hệ tự nhiên; sản phẩm số có trích dẫn nguồn bản quyền đầy đủ; cặp đôi số hỗ trợ tích cực.\n- Mức Khá (7-8đ): Xác định đúng vị trí và địa hình; nêu được sự khác biệt khí hậu; có trích dẫn nguồn học liệu số.\n- Mức Đạt (5-6đ): Đọc được bản đồ cơ bản theo gợi ý của bạn cùng nhóm; điền đủ phiếu học tập.\n- Mức Chưa đạt (<5đ): Chưa xác định được vị trí địa lí; không tham gia hoạt động nhóm bàn."}, {"id": "KHTN-01", "category": "khtn", "category_name": "Khối KHTN", "subject": "Khoa học tự nhiên 7", "grade": "7", "topic": "Bài 22: Vai trò của trao đổi chất và chuyển hóa năng lượng ở sinh vật (Thực nghiệm sinh thái Vườn quốc gia Pù Mát)", "outcomes": "Nêu được vai trò của trao đổi chất và chuyển hóa năng lượng đối với sự sinh trưởng và phát triển của sinh vật; lấy được ví dụ thực tế về các loài động thực vật quý hiếm tại Vườn quốc gia Pù Mát (sao la, vượn đen má trắng, pơ mu); thiết kế bảng so sánh nhu cầu năng lượng.", "tc": "TC1 (lớp 6–7)", "atm": "ATM2", "atm_title": "ATM2 · Bảo vệ danh tính & dữ liệu cá nhân", "ai_strand": "NLc (Kỹ thuật & Ứng dụng AI)", "devices": "Máy tính bảng nhóm / phòng máy; Phương án Offline Kit: Bộ thẻ phân loại sinh vật in màu, phiếu ghi chép nhóm bàn.", "duration": 45, "scaffolding": {"group_a": "Hoàn thành bảng phân loại nhu cầu năng lượng của sinh vật theo bảng mẫu có sẵn từ khóa; thực hành cùng bạn hỗ trợ.", "group_b": "Khai thác phần mềm bảng tính Google Sheets để vẽ biểu đồ so sánh lượng nhiệt năng tiêu hao giữa động vật biến nhiệt và đẳng nhiệt.", "group_c": "Sử dụng công cụ AI (Google Lens / Bio-AI) nhận diện đặc điểm thích nghi của sao la Pù Mát, đề xuất mô hình tháp sinh thái số."}, "offline_kit": "Bộ 20 thẻ bài hình ảnh động thực vật Pù Mát in bìa cứng; Sơ đồ chuỗi thức ăn in khổ Ao dán tường; Phiếu học tập in sẵn có thang tiêu chí đánh giá.", "simulated_plan": "KẾ HOẠCH BÀI DẠY (KHBD) CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH\nMÔN: KHOA HỌC TỰ NHIÊN 7 · PHÂN MÔN: SINH HỌC\nBÀI 22: VAI TRÒ CỦA TRAO ĐỔI CHẤT VÀ CHUYỂN HÓA NĂNG LƯỢNG Ở SINH VẬT (45 PHÚT)\n(Tích hợp Năng lực số TC1 · An toàn mạng ATM2 · Mạch AI: NLc)\n\nI. MỤC TIÊU BÀI HỌC\n1. Về kiến thức:\n- Nêu được vai trò của trao đổi chất và chuyển hóa năng lượng đối với cơ thể sinh vật (cung cấp năng lượng, xây dựng tế bào, đào thải chất độc hại).\n- Phân tích được các biểu hiện của sự trao đổi chất ở động vật và thực vật qua nghiên cứu các loài sinh vật đặc hữu tại Vườn quốc gia Pù Mát (Nghệ An).\n\n2. Về năng lực:\na) Năng lực chung: Tự chủ giải quyết vấn đề khoa học; Hợp tác nhóm đa giác quan.\nb) Năng lực đặc thù: Quan sát, thu thập dữ liệu sinh học; Thiết lập sơ đồ chuyển hóa vật chất.\nc) Năng lực số (Chuẩn TC1 - CV 3456):\n- TC1.2: Sử dụng Google Sheets để nhập liệu và biểu diễn bảng số liệu tiêu thụ năng lượng.\n- TC1.4: Ứng dụng công cụ tìm kiếm khoa học để tra cứu thông tin loài sinh vật.\n\n3. Về phẩm chất & An toàn mạng (Chuẩn ATM2 - CV 6206):\n- Bảo vệ dữ liệu cá nhân: Tuyệt đối không bật định vị chính xác địa chỉ trường lớp khi tham gia các ứng dụng điều tra sinh học công cộng.\n- Giáo dục AI (Mạch NLc - QĐ 2422): Trải nghiệm kỹ thuật thị giác máy tính (AI Image Recognition) trong việc nhận dạng mẫu lá cây và dấu chân động vật hoang dã.\n\nII. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU SỐ\n1. Phương án Online:\n- Máy tính bảng nhóm cài đặt ứng dụng nhận diện sinh vật (Google Lens / Seek); File bảng tính Google Sheets mẫu chia sẻ qua Google Classroom.\n2. Phương án Offline Kit:\n- Hộp tiêu bản ảnh ép nhựa 20 loài động thực vật Pù Mát; Phiếu điều tra sinh học khổ A4 có mã màu phân loại; Bảng phụ nhóm kẻ sẵn ma trận chuyển hóa.\n\nIII. TIẾN TRÌNH DẠY HỌC 4C (45 PHÚT)\n\n1. HOẠT ĐỘNG 1: MỞ ĐẦU / KHỞI ĐỘNG (CONTEXT - 6 PHÚT)\na) Mục tiêu: Gợi mở vấn đề thông qua clip ngắn 60 giây về loài Sao La - 'Kỳ lân châu Á' được phát hiện tại Pù Mát.\nb) Tổ chức thực hiện: GV đặt câu hỏi: 'Để sinh tồn và di chuyển vượt địa hình hiểm trở của dãy Trường Sơn Bắc, cơ thể Sao La cần những nguồn năng lượng nào và năng lượng đó được chuyển hóa từ đâu?'\nc) Sản phẩm: Câu trả lời thảo luận nhanh của 4 tổ học tập.\nd) Đánh giá: Khen ngợi tinh thần khám phá, định hướng vào khái niệm trao đổi chất.\n\n2. HOẠT ĐỘNG 2: HÌNH THÀNH KIẾN THỨC MỚI (CHALLENGE - 19 PHÚT)\na) Mục tiêu: Phân tích 3 vai trò cốt lõi của trao đổi chất; phân tầng nhiệm vụ A/B/C.\nb) Tổ chức thực hiện:\n- GV giao 03 gói nhiệm vụ số tương ứng với trình độ nhóm:\n  + Gói A (Cơ bản): Đọc sơ đồ chuyển hóa năng lượng (Quang hợp -> Hô hấp tế bào), điền từ còn thiếu vào bảng tương tác trên màn hình.\n  + Gói B (Thành thạo): Tính toán lượng calo cần thiết trong 1 ngày của một cá thể Vượn đen má trắng dựa trên bảng số liệu thức ăn (lá cây, quả dại, côn trùng); nhập dữ liệu vào Google Sheets.\n  + Gói C (Nâng cao): Mô hình hóa dòng năng lượng trong chuỗi thức ăn Pù Mát; giải thích tại sao năng lượng bị hao hụt qua từng bậc dinh dưỡng (thất thoát nhiệt).\n- Lưu ý an toàn ATM2: Học sinh không đăng tải hình ảnh khuôn mặt bạn học khi nộp bài tập nhóm lên không gian mở.\nc) Sản phẩm: Bảng số liệu hoàn chỉnh trên Google Sheets và sơ đồ chuỗi thức ăn số.\nd) Đánh giá: GV chấm nhanh sản phẩm qua màn hình điều khiển lớp học.\n\n3. HOẠT ĐỘNG 3: LUYỆN TẬP (CONCEPT - 12 PHÚT)\na) Mục tiêu: Khắc sâu kiến thức bằng trò chơi phân loại sinh thái.\nb) Tổ chức thực hiện:\n- Phương án Online: Chơi trò 'Bảo vệ rừng Pù Mát' trên nền tảng Wordwall / Google Forms có tính điểm theo thời gian thực.\n- Phương án Offline Kit: Trò chơi 'Mảnh ghép dinh dưỡng': Mỗi bàn nhận 10 thẻ hình sinh vật và phải ghép đúng thẻ dinh dưỡng tương ứng trong vòng 3 phút.\nc) Sản phẩm: Tỉ lệ câu trả lời đúng trên 85% của toàn lớp.\nd) Đánh giá: Tuyên dương các bạn nhóm A có sự bứt phá với sự trợ giúp của Cặp đôi số.\n\n4. HOẠT ĐỘNG 4: VẬN DỤNG & KẾT LUẬN (CONCLUSION - 8 PHÚT)\na) Mục tiêu: Vận dụng kiến thức thiết kế thực đơn dinh dưỡng hợp lí cho học sinh tuổi dậy thì.\nb) Tổ chức thực hiện:\n- Giao dự án: 'Tính toán nhu cầu năng lượng một ngày của bản thân và người thân trong gia đình, xây dựng tháp dinh dưỡng cân bằng số.'\n- Nhắc nhở quy tắc an toàn: Không chia sẻ thông tin sức khỏe riêng tư lên mạng xã hội.\nc) Sản phẩm: Bảng kế hoạch dinh dưỡng cá nhân nộp vào tuần sau.\nd) Đánh giá: Tổng kết tiết dạy, cho điểm cộng thi đua tổ."}, {"id": "KHTN-02", "category": "khtn", "category_name": "Khối KHTN", "subject": "Khoa học tự nhiên 8", "grade": "8", "topic": "Bài 6: Phản ứng hóa học và Định luật bảo toàn khối lượng (Thí nghiệm ảo PhET & Cân điện tử)", "outcomes": "Giải thích được bản chất của phản ứng hóa học là sự biến đổi liên kết giữa các nguyên tử; phát biểu và vận dụng được định luật bảo toàn khối lượng; thao tác thành thạo trên phần mềm mô phỏng thí nghiệm ảo PhET.", "tc": "TC2 (lớp 8–9)", "atm": "ATM3", "atm_title": "ATM3 · Phòng chống lừa đảo & mã độc số", "ai_strand": "NLd (Thiết kế hệ thống AI)", "devices": "Phòng máy tính kết nối Internet; Phương án Offline Kit: Bộ mô hình nguyên tử bằng hạt màu/đất nặn, cân đòn cơ học.", "duration": 45, "scaffolding": {"group_a": "Thực hiện mô phỏng cân khối lượng trước và sau phản ứng trên PhET theo từng bước chỉ dẫn; ghi chép số liệu.", "group_b": "Tự thiết lập các phản ứng giữa kim loại và axit, kiểm chứng tính đúng đắn của định luật bảo toàn khối lượng.", "group_c": "Lập phương trình hóa học bằng hệ số tổng quát, giải thích cơ chế bảo toàn nguyên tử bằng mô hình toán học giải thuật."}, "offline_kit": "06 Bộ mô hình bi nhựa liên kết hóa học; 02 Cân cơ học và dung dịch BaCl2, Na2SO4 làm thí nghiệm thật trực quan; Phiếu học tập in sẵn.", "simulated_plan": "KẾ HOẠCH BÀI DẠY (KHBD) CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH\nMÔN: KHOA HỌC TỰ NHIÊN 8 · PHÂN MÔN: HÓA HỌC\nBÀI 6: PHẢN ỨNG HÓA HỌC VÀ ĐỊNH LUẬT BẢO TOÀN KHỐI LƯỢNG (45 PHÚT)\n(Tích hợp Năng lực số TC2 · An toàn mạng ATM3 · Mạch AI: NLd)\n\nI. MỤC TIÊU BÀI HỌC\n1. Về kiến thức:\n- Giải thích được dấu hiệu có phản ứng hóa học xảy ra và bản chất biến đổi liên kết giữa các nguyên tử.\n- Phát biểu và chứng minh được định luật bảo toàn khối lượng: m(chất tham gia) = m(sản phẩm).\n- Vận dụng định luật để tính khối lượng của một chất khi biết khối lượng các chất còn lại trong phản ứng.\n\n2. Về năng lực:\na) Năng lực chung: Năng lực giải quyết vấn đề và sáng tạo; Giao tiếp khoa học.\nb) Năng lực đặc thù: Thao tác thực nghiệm số trên phần mềm mô phỏng; Lập phương trình hóa học.\nc) Năng lực số (Chuẩn TC2 - CV 3456):\n- TC2.3: Sử dụng thành thạo phần mềm mô phỏng khoa học PhET Interactive Simulations (Colorado).\n- TC2.1: Tổ chức dữ liệu thực nghiệm trên bảng tính số và phân tích sai số đo lường.\n\n3. Về phẩm chất & An toàn mạng (Chuẩn ATM3 - CV 6206):\n- An toàn phần mềm: Hướng dẫn HS nhận biết link chính thống của các công cụ mô phỏng giáo dục (đuôi .edu, .edu.vn), cảnh giác không tải các file .exe hoặc tiện ích mở rộng không rõ nguồn gốc giả mạo công cụ hóa học.\n- Giáo dục AI (Mạch NLd - QĐ 2422): Khám phá cách các mô hình máy học dự đoán cấu trúc phân tử và cân bằng phương trình phản ứng hóa học tự động.\n\nII. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU SỐ\n1. Phương án Online: Máy tính nối mạng, truy cập thí nghiệm ảo PhET: 'Balancing Chemical Equations' và 'Reactants, Products and Leftovers'.\n2. Phương án Offline Kit: 06 khay thí nghiệm thật gồm cốc thủy tinh, dung dịch BaCl2, Na2SO4, cân phân tích hiện số; Phiếu học tập in sẵn 4C.\n\nIII. TIẾN TRÌNH DẠY HỌC 4C (45 PHÚT)\n1. Hoạt động 1: Khởi động (Context - 6 phút): Quan sát que diêm cháy và thanh sắt gỉ. Khối lượng sau khi cháy tăng hay giảm? Gợi mở nghịch lý để dẫn đến nhu cầu cân đo khoa học.\n2. Hoạt động 2: Hình thành kiến thức (Challenge - 18 phút):\n- HS truy cập PhET thực hiện mô phỏng phản ứng giữa Khí Hydro và Khí Oxy tạo thành Nước.\n- Đếm số lượng nguyên tử H và O trước và sau phản ứng. Rút ra kết luận: Số lượng nguyên tử mỗi nguyên tố được giữ nguyên, chỉ có liên kết biến đổi.\n- Phân hóa A/B/C: Nhóm A làm theo phiếu checklist; Nhóm B tự chọn 3 phản ứng mới; Nhóm C giải thích định luật bảo toàn khối lượng qua góc nhìn bảo toàn năng lượng.\n3. Hoạt động 3: Luyện tập (Concept - 13 phút): Bài tập áp dụng định luật bảo toàn khối lượng; trò chơi 'Cân bằng phản ứng siêu tốc' trên Google Forms có đồng hồ đếm ngược.\n4. Hoạt động 4: Vận dụng (Conclusion - 8 phút): Tính lượng vôi sống (CaO) thu được khi nung đá vôi tại các lò vôi Hoàng Mai (Nghệ An); giải thích vấn đề giảm phát thải khí CO2. Dặn dò an toàn ATM3.\n\nIV. RUBRIC ĐÁNH GIÁ:\n- Tốt: Thao tác PhET mượt mà, lập đúng 100% phương trình, giải bài toán bảo toàn khối lượng chính xác và giải thích rõ bản chất.\n- Khá: Cân bằng đúng phương trình, vận dụng được công thức tính khối lượng.\n- Đạt: Thao tác được mô phỏng theo chỉ dẫn của bạn trong cặp đôi số."}, {"id": "TOAN-01", "category": "toan", "category_name": "Toán & Tin học", "subject": "Toán 8", "grade": "8", "topic": "Bài 2: Hàm số bậc nhất y = ax + b (a ≠ 0) và ứng dụng thực tế xác định giá cước taxi TP. Vinh", "outcomes": "Nhận biết được hàm số bậc nhất và tính chất đồng biến, nghịch biến; vẽ được đồ thị hàm số bậc nhất trên phần mềm GeoGebra và giấy kẻ ô; mô hình hóa bài toán tính cước vận tải taxi thực tế tại TP. Vinh, Nghệ An.", "tc": "TC2 (lớp 8–9)", "atm": "ATM7", "atm_title": "ATM7 · Dấu chân số & bảo vệ danh tiếng trực tuyến", "ai_strand": "NLc (Kỹ thuật & Ứng dụng AI)", "devices": "Phần mềm toán học động GeoGebra trên máy tính/điện thoại; Phương án Offline Kit: Giấy kẻ tọa độ Oxy in sẵn, thước đo góc.", "duration": 45, "scaffolding": {"group_a": "Xác định hệ số a, b của hàm số theo bảng giá cước cho trước; vẽ đồ thị qua 2 điểm đặc biệt theo hướng dẫn.", "group_b": "Dùng GeoGebra tạo thanh trượt (slider) cho hệ số a và b để quan sát sự thay đổi độ dốc của đường thẳng.", "group_c": "Lập hàm số so sánh giá cước giữa 2 hãng taxi tại Nghệ An (ví dụ: Mai Linh vs Xanh SM), tìm tọa độ giao điểm để tư vấn lựa chọn kinh tế nhất."}, "offline_kit": "Phiếu bài tập in lưới tọa độ Oxy chuẩn mm; Bảng giá cước taxi in màu; Bộ thước kẻ eke theo bàn.", "simulated_plan": "KẾ HOẠCH BÀI DẠY (KHBD) CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH\nMÔN: TOÁN 8 · PHÂN MÔN: ĐẠI SỐ\nBÀI 2: HÀM SỐ BẬC NHẤT Y = AX + B VÀ MÔ HÌNH HÓA THỰC TIỄN (45 PHÚT)\n(Tích hợp Năng lực số TC2 · An toàn mạng ATM7 · Mạch AI: NLc)\n\nI. MỤC TIÊU BÀI HỌC\n1. Về kiến thức: Định nghĩa hàm số bậc nhất; Điều kiện đồng biến (a > 0), nghịch biến (a < 0); Vẽ đồ thị y = ax + b.\n2. Về năng lực: Năng lực mô hình hóa toán học; Sử dụng công cụ phần mềm toán học động GeoGebra (TC2.3).\n3. Về phẩm chất & An toàn mạng: Quản lý chi tiêu số và an toàn giao dịch thanh toán trực tuyến (ATM7).\n\nII. TIẾN TRÌNH DẠY HỌC 4C (45 PHÚT)\n1. Hoạt động 1: Mở đầu (Context - 7 phút): Tình huống thực tế: Bạn An đi taxi từ Quảng trường Hồ Chí Minh (TP. Vinh) về Cửa Lò. Giá mở cửa 10.000đ (cho 0.5 km đầu), mỗi km tiếp theo giá 13.000đ. Viết công thức tính số tiền y (đồng) theo quãng đường x (km).\n2. Hoạt động 2: Hình thành kiến thức (Challenge - 18 phút):\n- Khái quát hóa công thức y = 13000x + 3500 thành dạng tổng quát y = ax + b.\n- Mở GeoGebra vẽ đồ thị đường thẳng. Dùng slider thay đổi hệ số a để học sinh nhận xét góc tạo bởi đường thẳng và trục Ox.\n- Phân hóa A/B/C: Nhóm A vẽ đồ thị trên giấy kẻ ô; Nhóm B thao tác slider trên GeoGebra; Nhóm C giải bài toán kinh tế điểm hòa vốn.\n3. Hoạt động 3: Luyện tập (Concept - 12 phút): Bài tập xác định đồng biến/nghịch biến; Trắc nghiệm nhanh trên Google Classroom.\n4. Hoạt động 4: Vận dụng (Conclusion - 8 phút): Dự án: Khảo sát biểu giá điện lũy tiến hoặc cước internet tại gia đình, lập hàm số bậc nhất từng khoảng."}, {"id": "KHXH-02", "category": "khxh", "category_name": "Khối KHXH", "subject": "Lịch sử & Địa lí 8", "grade": "8", "topic": "Bài 16: Phong trào Cần Vương và cuộc khởi nghĩa Hương Khê (1885 - 1896) tại vùng Nghệ - Tĩnh", "outcomes": "Nêu được nguyên nhân bùng nổ, các giai đoạn phát triển chính của cuộc khởi nghĩa Hương Khê do Phan Đình Phùng và Cao Thắng lãnh đạo; phân tích vai trò căn cứ địa tại vùng núi Vũ Quang và Thanh Chương - Nam Đàn (Nghệ An); đánh giá ý nghĩa lịch sử của phong trào.", "tc": "TC2 (lớp 8–9)", "atm": "ATM1", "atm_title": "ATM1 · Bản quyền số & kiểm chứng nguồn (SIFT)", "ai_strand": "NLb (Đạo đức AI)", "devices": "Máy chiếu, Google Slides nhóm; Phương án Offline Kit: Hồ sơ tư liệu in sẵn đóng tập kẹp file, bảng nhóm Ao.", "duration": 45, "scaffolding": {"group_a": "Hoàn thành trục thời gian (Timeline) các mốc lịch sử chính của cuộc khởi nghĩa Hương Khê theo mẫu phiếu học tập.", "group_b": "Xây dựng sơ đồ lược đồ tác chiến căn cứ địa Vũ Quang - Ngàn Trữ trên Google Slides; trích dẫn nguồn bảo tàng số.", "group_c": "Đánh giá vai trò sáng chế súng trường của Cao Thắng; viết bài luận ngắn phản biện quan điểm sai lệch về phong trào Cần Vương."}, "offline_kit": "Tập hồ sơ tư liệu lịch sử Hương Khê in kèm chân dung Phan Đình Phùng, Cao Thắng; Bản đồ tác chiến in bạt Ao.", "simulated_plan": "KẾ HOẠCH BÀI DẠY (KHBD) CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH\nMÔN: LỊCH SỬ VÀ ĐỊA LÍ 8 · PHÂN MÔN: LỊCH SỬ\nBÀI 16: PHONG TRÀO CẦN VƯƠNG VÀ CUỘC KHỞI NGHĨA HƯƠNG KHÊ (45 PHÚT)\n(Tích hợp Năng lực số TC2 · An toàn mạng ATM1 · Mạch AI: NLb)\n\nI. MỤC TIÊU BÀI HỌC\n1. Nêu được nguyên nhân, diễn biến và kết quả của khởi nghĩa Hương Khê - đỉnh cao của phong trào Cần Vương.\n2. Năng lực số TC2.1: Thu thập và kiểm chứng tư liệu lịch sử số từ cổng thông tin Viện Lịch sử quân sự và Bảo tàng Xô Viết Nghệ Tĩnh.\n3. Đạo đức AI (NLb): Không sử dụng AI để xuyên tạc bối cảnh lịch sử; ghi rõ nguồn gốc khi dùng AI phục chế ảnh nhân vật lịch sử."}, {"id": "GDCD-01", "category": "khxh", "category_name": "Khối KHXH", "subject": "Giáo dục công dân 7", "grade": "7", "topic": "Bài 8: Phòng chống bạo lực học đường và xây dựng văn hóa ứng xử trên không gian mạng (ATM4)", "outcomes": "Nhận biết được các hình thức bạo lực học đường trên không gian mạng (cyberbullying); nêu được tác hại đối với tâm lý học sinh; thực hiện được các biện pháp phòng chống và xử lý khi bị bắt nạt trực tuyến; cam kết thực hiện văn hóa ứng xử số.", "tc": "TC1 (lớp 6–7)", "atm": "ATM4", "atm_title": "ATM4 · Phòng chống bắt nạt & ứng xử văn hóa mạng", "ai_strand": "NLb (Đạo đức AI)", "devices": "Google Forms khảo sát ẩn danh; Phương án Offline Kit: Hộp thư điều ước kín, bộ thẻ tình huống giả định dán nhãn màu.", "duration": 45, "scaffolding": {"group_a": "Nhận diện 4 hành vi bắt nạt trực tuyến phổ biến và ghi nhớ quy trình 4 bước ứng phó sự cố khẩn cấp.", "group_b": "Đóng vai xử lý tình huống một bạn trong lớp bị lập nhóm bôi nhọ trên mạng xã hội; lập biên bản hỗ trợ tâm lý.", "group_c": "Xây dựng cẩm nang số 'Bộ quy tắc 4 KHÔNG - 3 CÓ' dán tại phòng máy tính của trường; thiết kế poster truyền thông."}, "offline_kit": "Bộ 15 thẻ tình huống bạo lực mạng in giấy màu; Bản cam kết văn hóa số học đường in khổ A3 cho cả lớp ký tên.", "simulated_plan": "KẾ HOẠCH BÀI DẠY (KHBD) CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH\nMÔN: GIÁO DỤC CÔNG DÂN 7\nBÀI 8: PHÒNG CHỐNG BẠO LỰC TRỰC TUYẾN VÀ ỨNG XỬ VĂN HÓA MẠNG (45 PHÚT)\n(Tích hợp Năng lực số TC1 · An toàn mạng ATM4 · Mạch AI: NLb)\n\nI. MỤC TIÊU BÀI HỌC: Nhận diện cyberbullying, quy trình 4 bước ứng phó sự cố (Chặn - Lưu bằng chứng - Báo người lớn - Tìm hỗ trợ tâm lý), bảo vệ bí mật đời tư học sinh theo Luật 91/2025/QH15 và Luật Trẻ em 2016."}, {"id": "TIN-01", "category": "toan", "category_name": "Toán & Tin học", "subject": "Tin học 7", "grade": "7", "topic": "Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số - An toàn thông tin cá nhân (ATM2 & ATM3)", "outcomes": "Nhận biết được tầm quan trọng của việc bảo mật thông tin cá nhân; tạo được mật khẩu mạnh và kích hoạt xác thực hai yếu tố (2FA); nhận diện các thủ đoạn lừa đảo qua mạng xã hội và email mạo danh.", "tc": "TC1 (lớp 6–7)", "atm": "ATM2", "atm_title": "ATM2 · Bảo vệ danh tính & dữ liệu cá nhân", "ai_strand": "NLb (Đạo đức AI)", "devices": "Phòng máy tính thực hành; Phương án Offline Kit: Bảng giải mã mật thư, phiếu bài tập nhận diện email lừa đảo.", "duration": 45, "scaffolding": {"group_a": "Thực hành kiểm tra độ mạnh của mật khẩu trên công cụ kiểm tra offline; ghi nhớ quy tắc đặt mật khẩu an toàn.", "group_b": "Phân tích 3 bức thư điện tử giả mạo (phishing) và tìm ra các điểm bất thường (địa chỉ gửi, link rút gọn, yêu cầu mã OTP).", "group_c": "Thiết lập quy trình mã hóa dữ liệu cơ bản cho bài tập nhóm của tổ; tư vấn bảo mật cho bạn trong cặp đôi số."}, "offline_kit": "Bộ thẻ giải mã mật khẩu Caesar bằng bìa xoay; Phiếu nhận diện email độc hại in màu khổ A4.", "simulated_plan": "KẾ HOẠCH BÀI DẠY (KHBD) CHUẨN CÔNG VĂN 5512/BGDĐT-GDTrH\nMÔN: TIN HỌC 7 · CHỦ ĐỀ D: ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HÓA TRONG MÔI TRƯỜNG SỐ\nBÀI: AN TOÀN DỮ LIỆU CÁ NHÂN VÀ PHÒNG TRÁNH LỪA ĐẢO SỐ (45 PHÚT)\n(Tích hợp Năng lực số TC1 · An toàn mạng ATM2 & ATM3 · Mạch AI: NLb)"}, {"id": "CBQL-01", "category": "cbql", "category_name": "Quản trị CBQL", "subject": "Quản trị THCS", "grade": "CBQL", "topic": "Xây dựng Kế hoạch chuyển đổi số và an toàn mạng học đường trường THCS vùng cao Nghệ An theo chu trình PDCA và 5 Trụ cột", "outcomes": "Lập được Kế hoạch hành động CĐS cấp trường khả thi trong 4 tuần; tổ chức được mạng lưới Cặp đôi số trong các tổ chuyên môn; xây dựng quy chế bảo mật dữ liệu học sinh theo Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và QĐ 4725/QĐ-BGDĐT.", "tc": "TC2 (lớp 8–9)", "atm": "ATM8", "atm_title": "ATM8 · Đạo đức sử dụng Trí tuệ nhân tạo (AI)", "ai_strand": "NLa (Tư duy lấy con người làm trung tâm)", "devices": "Hệ thống Google Workspace for Education, Google Sheets quản trị Gantt, Google Sites hồ sơ số.", "duration": 45, "scaffolding": {"group_a": "Nắm vững bộ chỉ số CĐS theo QĐ 4725, đánh giá thực trạng cơ sở vật chất và năng lực số của đội ngũ giáo viên.", "group_b": "Xây dựng ma trận phân công trách nhiệm RACI cho 5 Trụ cột CĐS; tổ chức sinh hoạt chuyên môn nghiên cứu bài học số.", "group_c": "Thiết lập hệ thống kiểm soát chất lượng PDCA, thẩm định và nghiệm thu 100% hồ sơ học liệu số của trường."}, "offline_kit": "Tập hồ sơ quy chế CĐS in đóng tập; Bảng kiểm đánh giá chỉ số QĐ 4725 in khổ A3 lưu văn phòng.", "simulated_plan": "KẾ HOẠCH HÀNH ĐỘNG CHUYỂN ĐỔI SỐ VÀ AN TOÀN MẠNG TRƯỜNG THCS\nTHEO CHU TRÌNH PDCA VÀ 5 TRỤ CỘT NAEM 2026 (ÁP DỤNG TRƯỜNG THCS HUYỆN KỲ SƠN / TƯƠNG DƯƠNG)\n(Bảo đảm Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 · QĐ 4725/QĐ-BGDĐT · TT 18/2026/TT-BGDĐT)\n\nI. MỤC TIÊU CHIẾN LƯỢC:\n- 100% giáo viên được phân luồng A/B/C và tham gia mạng lưới 'Cặp đôi số' 1-kèm-1.\n- Cắt giảm tối thiểu 60% sổ sách giấy qua ứng dụng Google Workspace và cổng thông tin điện tử trường học.\n- 100% Kế hoạch bài dạy (KHBD) tích hợp năng lực số TC1/TC2, an toàn mạng ATM1-8 mà không làm phát sinh tiết học mới.\n- Xây dựng kho học liệu số dùng chung cấp trường và bộ Offline Kit dự phòng cho 100% các lớp học vùng khó khăn."}];

// Helper functions
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function text(id) {
  const el = $('#' + id);
  return (el ? el.value : '').trim() || '[chưa cung cấp]';
}

function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

// ==========================================
// 1. SPA ROUTER & NAVIGATION ENGINE
// ==========================================

const ROUTE_MAP = {
  '': 'home',
  'home': 'home',
  'overview': 'home',
  'path': 'path',
  'curriculum': 'path',
  'missions': 'path',
  'self-assess-sec': 'self-assess-sec',
  'self-assess': 'self-assess-sec',
  'workbench': 'workbench',
  'prompts': 'prompts',
  'safety': 'safety',
  'pdca-sec': 'pdca-sec',
  'pdca': 'pdca-sec',
  'deliverables': 'deliverables',
  'resources': 'deliverables'
};

function navigateTo(rawHash, subTab = null, searchPrompt = null) {
  const cleanHash = (rawHash || '').replace(/^#/, '').trim();
  const targetId = ROUTE_MAP[cleanHash] || 'home';

  // 1. Highlight active view
  $$('.spa-view').forEach(v => {
    v.classList.toggle('active', v.id === targetId);
  });

  // 2. Update Topbar Navigation Active State
  $$('#nav a').forEach(a => {
    const aRoute = (a.getAttribute('href') || '').replace(/^#/, '');
    const isAct = ROUTE_MAP[aRoute] === targetId;
    a.classList.toggle('active', isAct);
  });

  // 3. Update Stepper Bar Active State
  $$('.flow-step').forEach(btn => {
    const btnRoute = btn.dataset.route || '';
    const isAct = ROUTE_MAP[btnRoute] === targetId;
    btn.classList.toggle('active', isAct);
  });

  // 4. Activate Sub-tab if requested (e.g. workbench)
  if (subTab) {
    switchTab(subTab);
  }

  // 5. Search prompt if requested
  if (searchPrompt && targetId === 'prompts') {
    const sInput = $('#prompt-search');
    if (sInput) {
      sInput.value = searchPrompt;
      renderPrompts();
    }
  }

  // 6. Smooth scroll to target element with header offset
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const headerOffset = 135;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    }
  }

  // 7. Update browser history hash without reload
  if (window.location.hash !== '#' + cleanHash && cleanHash !== '') {
    history.pushState(null, '', '#' + cleanHash);
  }
}

function setupScrollSpy() {
  const sectionIds = ['home', 'path', 'self-assess-sec', 'workbench', 'prompts', 'safety', 'pdca-sec', 'deliverables'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 160;
        let currentSectionId = 'home';

        for (const sec of sections) {
          if (sec.offsetTop <= scrollPos) {
            currentSectionId = sec.id;
          }
        }

        $$('#nav a').forEach(a => {
          const aRoute = (a.getAttribute('href') || '').replace(/^#/, '');
          a.classList.toggle('active', ROUTE_MAP[aRoute] === currentSectionId);
        });

        $$('.flow-step').forEach(btn => {
          const btnRoute = btn.dataset.route || '';
          btn.classList.toggle('active', ROUTE_MAP[btnRoute] === currentSectionId);
        });

        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
}

function setupRouter() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"], [data-route]');
    if (!link) return;

    const href = link.getAttribute('href');
    const route = link.dataset.route || (href ? href.replace(/^#/, '') : '');
    const tab = link.dataset.tab || null;
    const search = link.dataset.search || null;

    if (route && (ROUTE_MAP[route] !== undefined || route.startsWith('panel-'))) {
      e.preventDefault();

      if (route.startsWith('panel-')) {
        switchTab(route.replace('panel-', ''));
      } else {
        navigateTo(route, tab, search);
      }

      const nav = $('#nav');
      const menuBtn = $('.menu-toggle');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace(/^#/, '');
    navigateTo(hash);
  });

  const initialHash = window.location.hash.replace(/^#/, '');
  navigateTo(initialHash || 'home');
}

// ==========================================
// 2. MISSION HIGHLIGHTING & PROGRESS ENGINE
// ==========================================

const MISSION_KEYS = ['mission1', 'mission2', 'mission3', 'mission4', 'mission5', 'mission6'];
const DELIV_KEYS = ['deliv_1', 'deliv_2', 'deliv_3', 'deliv_4', 'deliv_5', 'self_assessed', 'pdca_ready'];

function getCompletedMissions() {
  try {
    return JSON.parse(localStorage.getItem('nls_completed_missions') || '[]');
  } catch (e) {
    return [];
  }
}

function saveCompletedMissions(list) {
  try {
    localStorage.setItem('nls_completed_missions', JSON.stringify(list));
  } catch (e) {}
}

function updateMissionUI() {
  const completed = getCompletedMissions();

  MISSION_KEYS.forEach((mKey, idx) => {
    const num = idx + 1;
    const isDone = completed.includes(mKey);
    const card = $('#mission-card-' + num);
    const pill = $('#status-pill-m' + num);
    const chk = $('#check-m' + num);

    if (card) card.classList.toggle('completed', isDone);
    if (pill) {
      pill.textContent = isDone ? '✓ ĐÃ HOÀN THÀNH' : 'CHƯA HOÀN THÀNH';
    }
    if (chk) chk.checked = isDone;
  });

  const checkPath = $('#check-step-path');
  const pathDone = MISSION_KEYS.some(k => completed.includes(k));
  if (checkPath) checkPath.style.display = pathDone ? 'inline' : 'none';

  const checkAssess = $('#check-step-assess');
  if (checkAssess) checkAssess.style.display = completed.includes('self_assessed') ? 'inline' : 'none';

  const checkWb = $('#check-step-wb');
  const wbDone = ['mission3', 'mission4', 'mission5'].some(k => completed.includes(k));
  if (checkWb) checkWb.style.display = wbDone ? 'inline' : 'none';

  const checkSafety = $('#check-step-safety');
  if (checkSafety) checkSafety.style.display = completed.includes('mission2') ? 'inline' : 'none';

  const checkPdca = $('#check-step-pdca');
  if (checkPdca) checkPdca.style.display = completed.includes('mission6') ? 'inline' : 'none';

  const checkDeliv = $('#check-step-deliv');
  const allMissionsDone = MISSION_KEYS.every(k => completed.includes(k));
  if (checkDeliv) checkDeliv.style.display = allMissionsDone ? 'inline' : 'none';

  const totalItems = MISSION_KEYS.length + DELIV_KEYS.length;
  let doneCount = 0;
  MISSION_KEYS.forEach(k => { if (completed.includes(k)) doneCount++; });
  DELIV_KEYS.forEach(k => { if (completed.includes(k)) doneCount++; });

  const percent = Math.min(100, Math.round((doneCount / totalItems) * 100));
  const pEl = $('#progress-percent');
  const fEl = $('#progress-fill');
  if (pEl) pEl.textContent = percent + '%';
  if (fEl) fEl.style.width = percent + '%';
}

function setupMissionCheckboxes() {
  $$('.mission-checkbox').forEach(chk => {
    chk.addEventListener('change', () => {
      const mKey = chk.dataset.mission;
      if (!mKey) return;
      let completed = getCompletedMissions();
      if (chk.checked) {
        if (!completed.includes(mKey)) completed.push(mKey);
        toast('Đã ghi nhận hoàn thành nhiệm vụ ' + mKey.toUpperCase() + '!');
      } else {
        completed = completed.filter(k => k !== mKey);
        toast('Đã bỏ đánh dấu nhiệm vụ ' + mKey.toUpperCase());
      }
      saveCompletedMissions(completed);
      updateMissionUI();
    });
  });

  $$('[data-task]').forEach(chk => {
    chk.addEventListener('change', () => {
      const tKey = chk.dataset.task;
      let completed = getCompletedMissions();
      if (chk.checked) {
        if (!completed.includes(tKey)) completed.push(tKey);
        toast('Đã đánh dấu hoàn thành sản phẩm nghiệm thu!');
      } else {
        completed = completed.filter(k => k !== tKey);
      }
      saveCompletedMissions(completed);
      updateMissionUI();
    });
  });

  const completed = getCompletedMissions();
  $$('[data-task]').forEach(chk => {
    chk.checked = completed.includes(chk.dataset.task);
  });

  $$('.mission-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.mission-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.mfilter || 'all';
      const cards = $$('.mission-card');
      const compList = getCompletedMissions();

      cards.forEach((c, idx) => {
        const day = c.dataset.missionDay;
        const role = c.dataset.missionRole;
        const mKey = 'mission' + (idx + 1);
        const isDone = compList.includes(mKey);

        let show = true;
        if (filter === 'day1') show = day === '1';
        else if (filter === 'day2') show = day === '2';
        else if (filter === 'day3') show = day === '3';
        else if (filter === 'gv') show = role === 'gv' || role === 'all';
        else if (filter === 'cbql') show = role === 'cbql' || role === 'all';
        else if (filter === 'incomplete') show = !isDone;

        c.style.display = show ? 'block' : 'none';
      });
    });
  });

  updateMissionUI();
}

// ==========================================
// 3. CURRICULUM & PROMPTS RENDERING
// ==========================================

function renderLessons() {
  const grid = $('#lesson-grid');
  if (!grid) return;
  grid.innerHTML = LESSONS.map((item, i) => `
    <article class="lesson-card">
      <div class="lesson-card-head">
        <span class="day">${escapeHtml(item.day)}</span>
        <span class="session-badge">${escapeHtml(item.session)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <div class="meta-row">
        <span>⏱ ${escapeHtml(item.duration)}</span>
        <span>👥 ${escapeHtml(item.audience)}</span>
      </div>
      <div class="product-box">
        <strong>Sản phẩm bắt buộc:</strong>
        <p>${escapeHtml(item.deliverable)}</p>
      </div>
      <div class="tools-tags">
        ${(item.tools || []).map(t => `<span class="tool-tag">${escapeHtml(t)}</span>`).join('')}
      </div>
      <button class="lesson-btn" data-route="workbench" data-tab="${i === 1 ? 'cbql' : (i === 2 ? 'khbd' : (i === 3 ? 'media' : (i === 4 ? 'assessment' : 'pdca')))}">
        Thực hành sản phẩm này →
      </button>
    </article>
  `).join('');
}

let activeGroup = 'Tất cả';

function renderPrompts() {
  const grid = $('#prompt-grid');
  if (!grid) return;
  const q = ($('#prompt-search')?.value || '').toLowerCase().trim();

  const filtered = PROMPTS.filter(p => {
    const matchesGroup = activeGroup === 'Tất cả' || p.cat === activeGroup;
    const matchesSearch = !q || p.title.toLowerCase().includes(q) ||
                          p.desc.toLowerCase().includes(q) ||
                          p.text.toLowerCase().includes(q);
    return matchesGroup && matchesSearch;
  });

  grid.innerHTML = filtered.map((p, idx) => `
    <article class="prompt-card">
      <div class="prompt-card-head">
        <span class="category">${escapeHtml(p.cat)}</span>
        <span class="num">#${idx + 1}</span>
      </div>
      <h4>${escapeHtml(p.title)}</h4>
      <p class="desc">${escapeHtml(p.desc)}</p>
      <div class="prompt-card-actions">
        <button class="button small secondary btn-copy-prompt" data-prompt="${PROMPTS.indexOf(p)}">📋 Sao chép</button>
        <button class="button small primary btn-view-prompt" data-view="${PROMPTS.indexOf(p)}">Xem chi tiết</button>
      </div>
    </article>
  `).join('');

  $$('.filter-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.group === activeGroup);
  });
}

function showPromptModal(p) {
  const modal = $('#prompt-modal');
  if (!modal) return;
  $('#modal-title').textContent = p.title;
  $('#modal-cat').textContent = p.cat;
  $('#modal-meta').textContent = `Chuyên mục: ${p.cat} · 4 Thẻ Sư phạm chuẩn hóa 2026`;
  $('#modal-desc').textContent = p.desc;
  $('#modal-content').textContent = p.text;
  modal.classList.add('show');
}

// ==========================================
// 4. INTERACTIVE CASE STUDIES & JSON TABLE
// ==========================================

let activeCaseCat = 'all';
let currentSelectedCase = null;

function renderCaseStudies(filterCat = 'all') {
  const tbody = $('#case-table-body');
  if (!tbody) return;

  activeCaseCat = filterCat;
  const filtered = CASES.filter(c => {
    if (filterCat === 'all') return true;
    return c.category === filterCat;
  });

  tbody.innerHTML = filtered.map(c => {
    const isSel = currentSelectedCase && currentSelectedCase.id === c.id;
    return `
      <tr class="case-row ${isSel ? 'selected' : ''}" data-case-id="${escapeHtml(c.id)}">
        <td>
          <span class="case-code-badge ${escapeHtml(c.category)}">${escapeHtml(c.id)}</span>
          <div style="font-size:11px;color:var(--text-muted);margin-top:3px;">Lớp ${escapeHtml(c.grade)}</div>
        </td>
        <td>
          <strong style="color:var(--navy);display:block;">${escapeHtml(c.subject)}</strong>
          <span class="case-tag tc" style="margin-top:2px;display:inline-block;">${escapeHtml(c.tc)}</span>
        </td>
        <td>
          <div class="case-topic-title">${escapeHtml(c.topic)}</div>
          <div class="case-topic-outcomes">${escapeHtml(c.outcomes)}</div>
        </td>
        <td>
          <div class="case-tag-group">
            <span class="case-tag atm">${escapeHtml(c.atm)}</span>
            <span class="case-tag ai">${escapeHtml(c.ai_strand.split(' ')[0])}</span>
          </div>
        </td>
        <td>
          <div style="font-size:11.5px;line-height:1.35;color:#334155;">
            <div>💻 ${c.devices.includes('Online') || c.devices.includes('Internet') ? 'Google Workspace' : 'Mạng nội bộ'}</div>
            <div style="color:#059669;font-weight:600;">🎒 Offline Kit sẵn sàng</div>
          </div>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-select-case" data-select-id="${escapeHtml(c.id)}">
            <span>⚡ Chọn case</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Update filter button states
  $$('.case-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.caseCat === filterCat);
  });
}

function selectCase(caseId, autoSimulate = false) {
  const c = CASES.find(item => item.id === caseId);
  if (!c) return;

  currentSelectedCase = c;

  // 1. Populate Form Inputs in #panel-khbd
  const setVal = (id, val) => {
    const el = $('#' + id);
    if (el) el.value = val;
  };

  setVal('subject', c.subject);
  setVal('grade', c.grade);
  setVal('topic', c.topic);
  setVal('outcomes', c.outcomes);
  setVal('tc', c.tc);
  setVal('atm', c.atm);
  setVal('ai-strand', c.ai_strand);
  setVal('devices', c.devices);
  setVal('duration', c.duration);

  // 2. Highlight Table Row
  $$('.case-row').forEach(row => {
    row.classList.toggle('selected', row.dataset.caseId === caseId);
  });

  // 3. Generate Standardized 4-Card Master Prompt
  const promptText = prompt4(
    `Thiết kế Kế hoạch bài dạy 4C: ${c.topic}`,
    `Bạn là Chuyên gia thiết kế kế hoạch bài dạy chuẩn Công văn 5512/BGDĐT-GDTrH, am hiểu bối cảnh giáo dục THCS tỉnh Nghệ An và Khung năng lực số giáo viên (Thông tư 18/2026/TT-BGDĐT).`,
    `• Môn học: ${c.subject} · Khối lớp: ${c.grade}\n• Tên bài dạy: ${c.topic}\n• Thời lượng: ${c.duration} phút\n• Yêu cầu cần đạt (YCCĐ): ${c.outcomes}\n• Khung NLS học sinh THCS: ${c.tc} (Công văn 3456/BGDĐT-GDPT)\n• An toàn mạng: ${c.atm_title || c.atm} (Công văn 6206/BGDĐT-GDPT)\n• Mạch giáo dục AI: ${c.ai_strand} (Quyết định 2422/QĐ-BGDĐT)\n• Thiết bị & Ngoại tuyến: ${c.devices}`,
    `Thiết kế tiến trình dạy học 45 phút theo mô hình 4C (Context - Challenge - Concept - Conclusion) chuẩn Công văn 5512:\n` +
    `1. Hoạt động 1: Mở đầu / Khởi động (Context - 5-7 phút) gắn với tình huống thực tiễn địa phương Nghệ An.\n` +
    `2. Hoạt động 2: Hình thành kiến thức (Challenge - 15-18 phút): Phân hóa 3 tầng:\n` +
    `   - Nhóm A (Cơ bản): ${c.scaffolding.group_a}\n` +
    `   - Nhóm B (Thành thạo): ${c.scaffolding.group_b}\n` +
    `   - Nhóm C (Nâng cao): ${c.scaffolding.group_c}\n` +
    `3. Hoạt động 3: Luyện tập (Concept - 12-15 phút): Trò chơi tương tác có giải thích đáp án sai.\n` +
    `4. Hoạt động 4: Vận dụng (Conclusion - 5-8 phút): Tình huống thực tiễn, dặn dò an toàn ATM.\n` +
    `5. Phương án ngoại tuyến dự phòng (Offline Kit): ${c.offline_kit}\n` +
    `6. Rubric đánh giá thường xuyên 4 mức (Chưa đạt, Đạt, Khá, Tốt).`,
    `Kế hoạch bài dạy hoàn chỉnh 45 phút, rõ ràng, chi tiết, sẵn sàng đưa vào giảng dạy.`
  );

  // Set prompt text
  const pOut = $('#khbd-output');
  if (pOut) {
    pOut.textContent = promptText;
    pOut.classList.remove('placeholder');
  }

  // 4. Generate Simulated Demo Lesson Plan Document
  const dOut = $('#khbd-demo-output');
  if (dOut) {
    dOut.textContent = c.simulated_plan;
    dOut.classList.remove('placeholder');
  }

  // 5. Update Status
  const st = $('#khbd-status');
  if (st) {
    st.textContent = `✓ ĐÃ TẠO (${c.id})`;
    st.classList.add('ready');
  }

  // 6. Switch to Demo View if autoSimulate is true
  if (autoSimulate) {
    switchOutputView('demo');
  }

  toast(`Đã nạp thành công Case: ${c.id} - ${c.subject}!`);
}

function switchOutputView(view) {
  const pTab = $('#tab-btn-prompt');
  const dTab = $('#tab-btn-demo');
  const pOut = $('#khbd-output');
  const dOut = $('#khbd-demo-output');
  const head = $('#khbd-output-heading');
  const copyBtn = $('#btn-copy-khbd');
  const dlBtn = $('#btn-download-khbd');
  const printBtn = $('#btn-print-khbd');

  if (view === 'demo') {
    if (pTab) pTab.classList.remove('active');
    if (dTab) dTab.classList.add('active');
    if (pOut) pOut.style.display = 'none';
    if (dOut) dOut.style.display = 'block';
    if (head) head.textContent = 'Kế hoạch bài dạy (KHBD) Mô phỏng Hoàn chỉnh';
    if (copyBtn) copyBtn.dataset.output = 'khbd-demo-output';
    if (dlBtn) dlBtn.dataset.output = 'khbd-demo-output';
    if (printBtn) printBtn.dataset.output = 'khbd-demo-output';
  } else {
    if (dTab) dTab.classList.remove('active');
    if (pTab) pTab.classList.add('active');
    if (dOut) dOut.style.display = 'none';
    if (pOut) pOut.style.display = 'block';
    if (head) head.textContent = 'Prompt KHBD 4C sẵn sàng cho LLM';
    if (copyBtn) copyBtn.dataset.output = 'khbd-output';
    if (dlBtn) dlBtn.dataset.output = 'khbd-output';
    if (printBtn) printBtn.dataset.output = 'khbd-output';
  }
}

function setupCaseStudies() {
  renderCaseStudies('all');

  // Filter click
  $$('.case-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderCaseStudies(btn.dataset.caseCat);
    });
  });

  // Table row or select button click
  const table = $('#case-table');
  if (table) {
    table.addEventListener('click', e => {
      const btn = e.target.closest('.btn-select-case, .case-row');
      if (!btn) return;
      const caseId = btn.dataset.selectId || btn.dataset.caseId;
      if (caseId) {
        selectCase(caseId, false);
      }
    });
  }

  // Raw JSON Drawer toggle
  const jsonBtn = $('#btn-toggle-json');
  const jsonDrawer = $('#case-json-drawer');
  if (jsonBtn && jsonDrawer) {
    jsonBtn.addEventListener('click', () => {
      const isOpen = jsonDrawer.classList.toggle('open');
      jsonBtn.setAttribute('aria-expanded', String(isOpen));
      if (isOpen && !jsonDrawer.textContent) {
        jsonDrawer.textContent = JSON.stringify(CASES, null, 2);
      }
    });
  }

  // Output view mode buttons
  const tabPrompt = $('#tab-btn-prompt');
  const tabDemo = $('#tab-btn-demo');
  if (tabPrompt) tabPrompt.addEventListener('click', () => switchOutputView('prompt'));
  if (tabDemo) tabDemo.addEventListener('click', () => switchOutputView('demo'));
}

// ==========================================
// 5. WORKBENCH TABS & PRESETS
// ==========================================

function switchTab(tabKey) {
  $$('.tab').forEach(x => x.classList.toggle('active', x.dataset.tab === tabKey));
  $$('.builder-panel').forEach(x => x.classList.toggle('active', x.id === 'panel-' + tabKey));
}

function setupWorkbench() {
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Quick presets in KHBD
  $$('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.preset;
      if (p === 'khxh') {
        selectCase('KHXH-01', false);
      } else if (p === 'khtn') {
        selectCase('KHTN-01', false);
      } else if (p === 'math') {
        selectCase('TOAN-01', false);
      }
    });
  });

  // Reset buttons
  $$('[data-reset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pKey = btn.dataset.reset;
      const panel = $('#panel-' + pKey);
      if (!panel) return;
      panel.querySelectorAll('input, textarea').forEach(el => {
        if (el.type === 'number') el.value = el.defaultValue || '45';
        else el.value = '';
      });
      panel.querySelectorAll('select').forEach(el => {
        el.selectedIndex = 0;
      });
      const out = $('#' + pKey + '-output');
      if (out) {
        out.textContent = 'Nội dung câu lệnh 4 thẻ sẽ xuất hiện tại đây sau khi thầy/cô bấm nút "Tạo Prompt".';
        out.classList.add('placeholder');
      }
      const st = $('#' + pKey + '-status');
      if (st) {
        st.textContent = 'CHƯA TẠO';
        st.classList.remove('ready');
      }
      toast('Đã làm mới nội dung biểu mẫu!');
    });
  });
}

// ==========================================
// 6. SELF-ASSESSMENT & KPI EVALUATION
// ==========================================

function setupSelfAssessment() {
  const form = $('#self-assess-form');
  if (!form) return;

  function calculateScore() {
    let total = 0;
    let answered = 0;
    const values = [];

    for (let i = 1; i <= 6; i++) {
      const radios = document.getElementsByName('sa_d' + i);
      let checkedVal = 0;
      for (const r of radios) {
        if (r.checked) {
          checkedVal = Number(r.value);
          break;
        }
      }
      if (checkedVal > 0) {
        total += checkedVal;
        answered++;
        values.push(checkedVal);
      }
    }

    const badge = $('#assess-group-badge');
    const desc = $('#assess-group-desc');
    const pair = $('#assess-pairing-rec');

    if (answered < 6) {
      if (badge) {
        badge.textContent = `Chưa hoàn tất (${answered}/6)`;
        badge.className = 'group-badge pending';
      }
      return;
    }

    let group = 'A';
    let groupText = 'Nhóm A · Mức Cơ bản (Sơ cấp)';
    let groupDesc = 'Thầy/cô đang ở giai đoạn làm quen và vận dụng các công cụ số cơ bản (Google Forms, Drive, Docs). Nên bắt cặp cùng 01 Giáo viên Nhóm C để được hướng dẫn trực tiếp.';
    let pairRec = 'Ghép cặp đôi số: Bắt buộc phân công 01 đồng nghiệp Nhóm C (Nòng cốt) đồng hành 1-kèm-1 trong tổ chuyên môn.';

    if (total >= 15) {
      group = 'C';
      groupText = 'Nhóm C · Mức Nâng cao (Nòng cốt / Cố vấn)';
      groupDesc = 'Thầy/cô đã làm chủ công nghệ sư phạm số, sử dụng thành thạo AI có kiểm chứng và sáng tạo học liệu đa phương tiện. Đảm nhận vai trò Cố vấn "Cặp đôi số" (Digital Mentor) của tổ chuyên môn.';
      pairRec = 'Vai trò Cặp đôi số: Phụ trách hỗ trợ trực tiếp cho 01-02 đồng nghiệp Nhóm A; chủ trì thẩm định chất lượng KHBD tích hợp NLS.';
    } else if (total >= 10) {
      group = 'B';
      groupText = 'Nhóm B · Mức Thành thạo (Chủ động)';
      groupDesc = 'Thầy/cô tự chủ trong thiết kế bài dạy 4C, phân hóa học sinh và áp dụng kiểm chứng thông tin SIFT. Sẵn sàng chia sẻ kinh nghiệm cho đồng nghiệp trong tổ.';
      pairRec = 'Vai trò Cặp đôi số: Có thể độc lập thực hành hoặc ghép đôi chéo với đồng nghiệp cùng bộ môn để phản biện sản phẩm.';
    }

    if (badge) {
      badge.textContent = groupText;
      badge.className = `group-badge group-${group.toLowerCase()}`;
    }
    if (desc) desc.textContent = groupDesc;
    if (pair) pair.textContent = pairRec;

    let completed = getCompletedMissions();
    if (!completed.includes('self_assessed')) {
      completed.push('self_assessed');
      saveCompletedMissions(completed);
      updateMissionUI();
    }
  }

  form.addEventListener('change', calculateScore);
}

function setupKpiEvaluation() {
  const form = $('#pdca-sec');
  if (!form) return;

  function updateKpiSummary() {
    let checkedCount = 0;
    let sumScore = 0;

    for (let i = 1; i <= 5; i++) {
      const radios = document.getElementsByName('kpi_tc' + i);
      for (const r of radios) {
        if (r.checked) {
          checkedCount++;
          sumScore += Number(r.value);
          break;
        }
      }
    }

    const badge = $('#kpi-summary-level');
    if (!badge) return;

    if (checkedCount < 5) {
      badge.textContent = `Đang đánh giá (${checkedCount}/5 Trụ cột)`;
      badge.className = 'kpi-level-badge pending';
      return;
    }

    let levelText = 'Mức 1 · Mới bắt đầu Chuyển đổi số';
    let cls = 'kpi-level-1';

    if (sumScore >= 13) {
      levelText = 'Mức 3 · Chuyển đổi số Nâng cao (Toàn diện)';
      cls = 'kpi-level-3';
    } else if (sumScore >= 9) {
      levelText = 'Mức 2 · Chuyển đổi số Cơ bản (Đang phát triển)';
      cls = 'kpi-level-2';
    }

    badge.textContent = `${levelText} · Tổng điểm: ${sumScore}/15đ`;
    badge.className = `kpi-level-badge ${cls}`;

    let completed = getCompletedMissions();
    if (!completed.includes('pdca_ready')) {
      completed.push('pdca_ready');
      saveCompletedMissions(completed);
      updateMissionUI();
    }
  }

  const radios = form.querySelectorAll('input[type="radio"]');
  radios.forEach(r => r.addEventListener('change', updateKpiSummary));
}

// ==========================================
// 7. 4-CARD PROMPT GENERATORS
// ==========================================

function prompt4(title, context, data, instructions, result) {
  return [
    `=== MASTER PROMPT 4 THẺ SƯ PHẠM CHUẨN HÓA 2026 ===`,
    `TÊN CÂU LỆNH: ${title.toUpperCase()}`,
    ``,
    `[THẺ 1: NGỮ CẢNH & VAI TRÒ CHUYÊN GIA]`,
    context.trim(),
    ``,
    `[THẺ 2: DỮ LIỆU ĐẦU VÀO & THAM CHIẾU QUY PHẠM]`,
    data.trim(),
    ``,
    `[THẺ 3: CHỈ DẪN SƯ PHẠM CHI TIẾT & PHÂN HÓA 3 TẦNG]`,
    instructions.trim(),
    ``,
    `[THẺ 4: ĐỊNH DẠNG ĐẦU RA MONG MUỐN & TIÊU CHUẨN CHẤT LƯỢNG]`,
    result.trim(),
    ``,
    `LƯU Ý AN TOÀN SỐ & PHÁP LÝ (BẮT BUỘC):`,
    `- Tuyệt đối bảo vệ dữ liệu cá nhân học sinh dưới 16 tuổi theo Luật 91/2025/QH15 và Luật Trẻ em 2016.`,
    `- Trích dẫn nguồn học liệu số theo giấy phép Creative Commons khi sử dụng.`,
    `- Minh bạch phần do AI hỗ trợ tạo lập và luôn đối chiếu sách giáo khoa chuẩn.`
  ].join('\n');
}

function setupGenerators() {
  // 1. Generator KHBD 4C
  const btnKhbd = $('#btn-generate-khbd');
  if (btnKhbd) {
    btnKhbd.addEventListener('click', () => {
      const subject = text('subject');
      const grade = text('grade');
      const topic = text('topic');
      const outcomes = text('outcomes');
      const tc = text('tc');
      const atm = text('atm');
      const aiStrand = text('ai-strand');
      const devices = text('devices');
      const rawDur = Number($('#duration')?.value) || 45;
      const duration = Math.min(180, Math.max(1, Math.round(rawDur)));

      const output = prompt4(
        `Thiết kế Kế hoạch bài dạy 4C: ${topic}`,
        `Bạn là Chuyên gia thiết kế kế hoạch bài dạy chuẩn Công văn 5512/BGDĐT-GDTrH, am hiểu bối cảnh giáo dục THCS tỉnh Nghệ An và Khung năng lực số giáo viên (Thông tư 18/2026/TT-BGDĐT).`,
        `• Môn học: ${subject} · Khối lớp: ${grade}\n• Tên bài dạy: ${topic}\n• Thời lượng: ${duration} phút\n• Yêu cầu cần đạt (YCCĐ): ${outcomes}\n• Khung NLS học sinh THCS: ${tc} (Công văn 3456/BGDĐT-GDPT)\n• An toàn mạng: ${atm} (Công văn 6206/BGDĐT-GDPT)\n• Mạch giáo dục AI: ${aiStrand} (Quyết định 2422/QĐ-BGDĐT)\n• Thiết bị & Ngoại tuyến: ${devices}`,
        `Thiết kế tiến trình dạy học ${duration} phút theo mô hình 4C (Context - Challenge - Concept - Conclusion) chuẩn Công văn 5512:\n` +
        `1. Hoạt động 1: Mở đầu / Khởi động (Context - 5-7 phút) gắn với thực tế địa phương Nghệ An.\n` +
        `2. Hoạt động 2: Hình thành kiến thức (Challenge - 15-18 phút): Phân hóa nhiệm vụ 3 tầng cho Nhóm A (Cơ bản), Nhóm B (Thành thạo), Nhóm C (Nâng cao).\n` +
        `3. Hoạt động 3: Luyện tập (Concept - 12-15 phút): Trò chơi tương tác số hoặc thẻ bài có giải thích đáp án.\n` +
        `4. Hoạt động 4: Vận dụng (Conclusion - 5-8 phút): Tình huống thực tiễn, dặn dò an toàn ATM.\n` +
        `5. Phương án ngoại tuyến dự phòng (Offline Kit) khi mất mạng/thiếu thiết bị.\n` +
        `6. Bảng tiêu chí Rubric đánh giá thường xuyên 4 mức.`,
        `Kế hoạch bài dạy chi tiết, đúng thể thức Công văn 5512, ngôn ngữ sư phạm chuẩn mực.`
      );

      const pOut = $('#khbd-output');
      if (pOut) {
        pOut.textContent = output;
        pOut.classList.remove('placeholder');
      }

      const st = $('#khbd-status');
      if (st) {
        st.textContent = '✓ ĐÃ TẠO';
        st.classList.add('ready');
      }

      switchOutputView('prompt');
      toast('Đã tạo thành công Prompt KHBD 4C!');
    });
  }

  // 1b. Simulate KHBD Demo Button
  const btnSimKhbd = $('#btn-simulate-khbd');
  if (btnSimKhbd) {
    btnSimKhbd.addEventListener('click', () => {
      if (currentSelectedCase) {
        selectCase(currentSelectedCase.id, true);
      } else {
        selectCase('KHTN-01', true);
      }
      toast('Đã nạp và hiển thị Kế hoạch bài dạy mô phỏng hoàn chỉnh!');
    });
  }

  // 2. Generator Media & AI
  const btnMedia = $('#btn-generate-media');
  if (btnMedia) {
    btnMedia.addEventListener('click', () => {
      const topic = text('media-topic');
      const audience = text('media-audience');
      const type = text('media-type');
      const goal = text('media-goal');

      const output = prompt4(
        `Sản xuất học liệu số: ${type} cho chủ đề ${topic}`,
        `Bạn là Chuyên gia thiết kế học liệu số và truyền thông giáo dục THCS, chuyên về sản xuất video micro-learning, infographic và gamification học tập có bản quyền.`,
        `• Chủ đề bài học: ${topic}\n• Đối tượng học sinh: ${audience}\n• Thể loại học liệu: ${type}\n• Mục tiêu sư phạm: ${goal}\n• Nền tảng thực thi: Canva for Education / Google Slides / CapCut / Quizizz`,
        `Xây dựng kịch bản chi tiết và tài nguyên tương ứng:\n` +
        `1. Nếu là Video Micro-learning: Viết kịch bản phân cảnh 3 cột (Thời gian dưới 3 phút | Hình ảnh mô tả | Lời bình sư phạm & Âm nhạc).\n` +
        `2. Nếu là Infographic/Slide: Phác thảo bố cục Bento grid, mã màu chủ đạo, từ khóa cô đọng và liên kết thực tiễn.\n` +
        `3. Nếu là Trò chơi học tập: Thiết kế 5 câu hỏi tương tác phân hóa, kèm phản hồi sư phạm giải thích vì sao đúng/sai.\n` +
        `4. Phương án Offline Kit: Phiếu học tập tóm tắt in màu A4 hoặc bộ thẻ câu hỏi dán tường.\n` +
        `5. Ghi rõ nguồn trích dẫn học liệu số và giấy phép bản quyền Creative Commons (CC BY-NC).`,
        `Bản kịch bản và nội dung học liệu hoàn chỉnh, sẵn sàng nhập vào công cụ sản xuất.`
      );

      const mOut = $('#media-output');
      if (mOut) {
        mOut.textContent = output;
        mOut.classList.remove('placeholder');
      }
      const st = $('#media-status');
      if (st) {
        st.textContent = '✓ ĐÃ TẠO';
        st.classList.add('ready');
      }
      toast('Đã tạo thành công Prompt Học liệu số & AI!');
    });
  }

  // 3. Generator Assessment & LaTeX
  const btnAssess = $('#btn-generate-assessment');
  if (btnAssess) {
    btnAssess.addEventListener('click', () => {
      const topic = text('assess-topic');
      const grade = text('assess-grade');
      const format = text('assess-format');
      const outcomes = text('assess-outcomes');

      const output = prompt4(
        `Xây dựng ma trận đề kiểm tra và Rubric: ${topic}`,
        `Bạn là Chuyên gia Khảo thí và Đo lường giáo dục THCS, am hiểu Thông tư 22/2021/TT-BGDĐT và chuẩn mã hóa LaTeX công thức toán - khoa học tự nhiên.`,
        `• Môn học & Khối lớp: ${grade}\n• Chủ đề kiểm tra: ${topic}\n• Hình thức kiểm tra: ${format}\n• Yêu cầu cần đạt cần kiểm tra: ${outcomes}`,
        `Thiết kế bộ công cụ khảo thí số toàn diện:\n` +
        `1. Bảng Ma trận & Bản đặc tả đề kiểm tra phân hóa 4 mức (40% Biết - 30% Hiểu - 20% Vận dụng - 10% Vận dụng cao) chuẩn Thông tư 22.\n` +
        `2. Bộ câu hỏi kiểm tra kèm đáp án chi tiết và hướng dẫn chấm.\n` +
        `3. Nếu có công thức Toán / KHTN / Hóa học, xuất toàn bộ bằng mã LaTeX chuẩn (đặt trong $...$ hoặc $$...$$) không lỗi font.\n` +
        `4. Bảng Rubric 4 mức đánh giá thường xuyên (Chưa đạt - Đạt - Khá - Tốt) có mô tả hành vi đo lường được.\n` +
        `5. Rào chắn AI: Tạo câu hỏi đánh giá tư duy phản biện, học sinh không thể tra cứu câu trả lời trực tiếp từ AI giải hộ.`,
        `Ma trận đề, bảng đặc tả, đề bài kiểm tra và thang Rubric định dạng chuẩn.`
      );

      const aOut = $('#assessment-output');
      if (aOut) {
        aOut.textContent = output;
        aOut.classList.remove('placeholder');
      }
      const st = $('#assessment-status');
      if (st) {
        st.textContent = '✓ ĐÃ TẠO';
        st.classList.add('ready');
      }
      toast('Đã tạo thành công Prompt Khảo thí & LaTeX!');
    });
  }

  // 4. Generator CBQL
  const btnCbql = $('#btn-generate-cbql');
  if (btnCbql) {
    btnCbql.addEventListener('click', () => {
      const org = text('cbql-org');
      const task = text('cbql-task');
      const title = text('cbql-title');
      const input = text('cbql-input');

      const output = prompt4(
        `Quản trị chuyển đổi số CBQL: ${title}`,
        `Bạn là Chuyên gia Quản trị trường học và Chuyển đổi số giáo dục THCS, am hiểu Nghị định 30/2020/NĐ-CP về thể thức văn bản hành chính và Quyết định 4725/QĐ-BGDĐT về Bộ chỉ số CĐS trường học.`,
        `• Đơn vị: ${org}\n• Lĩnh vực chỉ đạo: ${task}\n• Tiêu đề văn bản: ${title}\n• Căn cứ & Dữ liệu thực trạng: ${input}`,
        `Xây dựng văn bản quản trị số chuẩn mực:\n` +
        `1. Căn cứ pháp lý đầy đủ (Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15, Luật An ninh mạng 116/2025/QH15, TT 18/2026/TT-BGDĐT, QĐ 4725/QĐ-BGDĐT).\n` +
        `2. Mục tiêu rõ ràng theo nguyên tắc SMART và 5 Trụ cột NAEM 2026 (Quản trị tinh gọn, Sư phạm thích ứng, Kết nối đồng thuận, Nhân lực nòng cốt, Hạ tầng an toàn).\n` +
        `3. Kế hoạch hành động cụ thể gắn với phân công ma trận trách nhiệm RACI (Responsible, Accountable, Consulted, Informed).\n` +
        `4. Cơ chế Cặp đôi số (1-kèm-1) và giải pháp cắt giảm tối thiểu 60% sổ sách giấy qua ứng dụng Google Workspace.\n` +
        `5. Quy trình xử lý sự cố an toàn thông tin 7 bước cấp trường.`,
        `Dự thảo văn bản hành chính hoàn chỉnh, chuẩn thể thức Nghị định 30/2020/NĐ-CP.`
      );

      const cOut = $('#cbql-output');
      if (cOut) {
        cOut.textContent = output;
        cOut.classList.remove('placeholder');
      }
      const st = $('#cbql-status');
      if (st) {
        st.textContent = '✓ ĐÃ TẠO';
        st.classList.add('ready');
      }
      toast('Đã tạo thành công Prompt Quản trị số CBQL!');
    });
  }

  // 5. Generator PDCA
  const btnPdca = $('#btn-generate-pdca');
  if (btnPdca) {
    btnPdca.addEventListener('click', () => {
      const title = text('pdca-title');
      const goal = text('pdca-goal');
      const pillars = text('pdca-pillars');
      const time = text('pdca-time');

      const output = prompt4(
        `Kế hoạch hành động 4 tuần theo chu trình PDCA: ${title}`,
        `Bạn là Chuyên gia Quản trị chất lượng giáo dục theo mô hình PDCA (Plan - Do - Check - Act), đồng hành cùng các trường THCS tỉnh Nghệ An phát triển năng lực số và sư phạm thích ứng.`,
        `• Mục tiêu trọng tâm: ${goal}\n• Trụ cột ưu tiên: ${pillars}\n• Thời lượng thực hiện: ${time}\n• Cơ sở đối chiếu: 5 Trụ cột NAEM 2026 & Bộ chỉ số QĐ 4725/QĐ-BGDĐT`,
        `Lập kế hoạch hành động chi tiết 4 tuần:\n` +
        `1. Giai đoạn PLAN (Tuần 1): Khảo sát hiện trạng theo TT 18/2026, phân luồng học viên A/B/C, thiết lập Cặp đôi số và ban hành quy chế an toàn.\n` +
        `2. Giai đoạn DO (Tuần 2): Triển khai soạn KHBD 4C, sản xuất học liệu micro-learning, áp dụng Google Forms và Gemini có kiểm chứng.\n` +
        `3. Giai đoạn CHECK (Tuần 3): Sinh hoạt chuyên môn theo nghiên cứu bài học số, dự giờ chéo trong Cặp đôi số, rà soát bảng kiểm chất lượng sản phẩm.\n` +
        `4. Giai đoạn ACT (Tuần 4): Hoàn thiện 5 sản phẩm bắt buộc, nghiệm thu cấp trường, đưa học liệu số vào kho dùng chung của huyện/thị.\n` +
        `5. Ma trận phân công nhiệm vụ và rủi ro dự phòng khi mất kết nối mạng (Offline Kit).`,
        `Bảng kế hoạch hành động Gantt chart và các chỉ số đo lường KPI hoàn chỉnh.`
      );

      const pOut = $('#pdca-output');
      if (pOut) {
        pOut.textContent = output;
        pOut.classList.remove('placeholder');
      }
      const st = $('#pdca-status');
      if (st) {
        st.textContent = '✓ ĐÃ TẠO';
        st.classList.add('ready');
      }
      toast('Đã tạo thành công Kế hoạch hành động PDCA!');
    });
  }
}

// ==========================================
// 8. ACTION BUTTONS & UTILITIES
// ==========================================

function setupActionButtons() {
  // Output action buttons (copy, download, print)
  document.addEventListener('click', e => {
    const copyBtn = e.target.closest('.copy-output');
    if (copyBtn) {
      const outId = copyBtn.dataset.output;
      const el = $('#' + outId);
      if (el && el.textContent) {
        navigator.clipboard?.writeText(el.textContent).then(() => {
          toast('Đã sao chép nội dung vào khay nhớ tạm!');
        }).catch(() => {
          toast('Không thể sao chép tự động, vui lòng chọn và bấm Ctrl+C.');
        });
      }
      return;
    }

    const dlBtn = e.target.closest('.download-output');
    if (dlBtn) {
      const outId = dlBtn.dataset.output;
      const el = $('#' + outId);
      if (el && el.textContent) {
        const isDoc = outId.includes('demo');
        const filename = isDoc ? 'Ke_hoach_bai_day_5512_Demo.txt' : 'Master_Prompt_4_The_2026.txt';
        const blob = new Blob([el.textContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        toast(`Đã tải xuống file ${filename}!`);
      }
      return;
    }

    const printBtn = e.target.closest('.print-output');
    if (printBtn) {
      const outId = printBtn.dataset.output;
      const el = $('#' + outId);
      if (el && el.textContent) {
        const w = window.open('', '_blank');
        w.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>NLS THCS Nghệ An - Kết quả Xuất bản</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 28px; line-height: 1.6; color: #1e293b; }
              pre { white-space: pre-wrap; font-size: 13px; font-family: inherit; }
            </style>
          </head>
          <body>
            <h2>NLS THCS NGHỆ AN · BÀN THỰC HÀNH SƯ PHẠM SỐ 2026</h2>
            <pre>${escapeHtml(el.textContent)}</pre>
          </body>
          </html>
        `);
        w.document.close();
        w.print();
      }
      return;
    }
  });

  // Prompt Library Search & Filters
  const sInput = $('#prompt-search');
  if (sInput) {
    sInput.addEventListener('input', renderPrompts);
  }

  const pFilters = $('#prompt-filters');
  if (pFilters) {
    pFilters.addEventListener('click', e => {
      const b = e.target.closest('.filter-tab');
      if (b) {
        activeGroup = b.dataset.group;
        renderPrompts();
      }
    });
  }

  // Prompt Modal
  const modal = $('#prompt-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.closest('.modal-close')) {
        modal.classList.remove('show');
      }
    });

    const mCopy = $('#modal-copy');
    if (mCopy) {
      mCopy.addEventListener('click', () => {
        const txt = $('#modal-content')?.textContent || '';
        if (txt) {
          navigator.clipboard?.writeText(txt).then(() => {
            toast('Đã sao chép prompt mẫu thành công!');
          });
        }
      });
    }
  }

  // Prompt Card Buttons (copy & view)
  const pgrid = $('#prompt-grid');
  if (pgrid) {
    pgrid.addEventListener('click', e => {
      const copyBtn = e.target.closest('.btn-copy-prompt');
      if (copyBtn) {
        const p = PROMPTS[Number(copyBtn.dataset.prompt)];
        if (p) {
          navigator.clipboard?.writeText(p.text).then(() => toast('Đã sao chép prompt mẫu thành công!')).catch(() => showPromptModal(p));
        }
        return;
      }

      const viewBtn = e.target.closest('.btn-view-prompt');
      if (viewBtn) {
        const p = PROMPTS[Number(viewBtn.dataset.view)];
        if (p) showPromptModal(p);
      }
    });
  }

  // Mobile menu toggle
  const menuBtn = $('.menu-toggle');
  const nav = $('#nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }
}

// ==========================================
// 9. INITIALIZE ON DOM READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderLessons();
  renderPrompts();
  setupRouter();
  setupScrollSpy();
  setupCaseStudies();
  setupWorkbench();
  setupGenerators();
  setupActionButtons();
  setupSelfAssessment();
  setupKpiEvaluation();
  setupMissionCheckboxes();
});
