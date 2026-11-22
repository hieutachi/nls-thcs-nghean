# NLS THCS Nghệ An · Bản demo GitHub Pages

Website tĩnh hỗ trợ thực hành khóa bồi dưỡng 03 ngày / 06 buổi cho CBQL và GV THCS. Dự án dùng HTML, CSS và JavaScript thuần; không có backend, không thu thập dữ liệu học sinh. Mọi prompt được tạo ngay trên thiết bị. Tiến độ nghiệm thu lưu bằng `localStorage` trên trình duyệt hiện tại.

## Chạy thử

Mở `index.html` bằng trình duyệt hiện đại. Không cần cài thư viện, build hay máy chủ. Các tệp dữ liệu JSON trong `data/` là bản mô tả để quản trị nội dung; bản demo đang nạp nội dung nhúng trong `js/app.js` để mở trực tiếp bằng `file://` mà không phụ thuộc CORS.

## Cấu trúc

- `index.html` — nội dung trang và giao diện.
- `css/style.css` — thiết kế responsive và chế độ in.
- `js/app.js` — lộ trình, thư viện prompt, sinh prompt, sao chép/tải/in, tiến độ cục bộ.
- `data/lessons.json` — dữ liệu tham chiếu 06 buổi.
- `data/prompts.json` — danh mục 30 prompt mẫu.

## Deploy GitHub Pages

1. Tạo repository GitHub mới, ví dụ `nls-thcs-nghean`.
2. Đưa toàn bộ nội dung thư mục này lên nhánh `main`, giữ nguyên cấu trúc thư mục.
3. Mở **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, thư mục `/ (root)`, rồi **Save**.
6. Chờ GitHub Pages hoàn tất deploy; mở URL dạng `https://<tên-tài-khoản>.github.io/<tên-repository>/`.

## Tính năng

- Lộ trình 06 buổi và 05 sản phẩm nghiệm thu.
- Thư viện 30 prompt, lọc nhóm và tìm kiếm từ khóa.
- Bộ tạo prompt KHBD 4C, học liệu, đề/Rubric và PDCA.
- Nút sao chép, tải `.txt`, in nội dung.
- Checklist tiến độ lưu cục bộ trong trình duyệt.
- Hướng dẫn SIFT, ứng phó sự cố 4 bước, 4 KHÔNG–3 CÓ và ẩn danh hóa.
- Liên kết công cụ Google và gợi ý phương án ngoại tuyến.

## An toàn, bản quyền và nội dung pháp lý

Không nhập tên, hình ảnh, hồ sơ hoặc dữ liệu có thể nhận diện học sinh. Website không truyền nội dung biểu mẫu đi đâu. Tiến độ được ghi trong `localStorage`; người dùng có thể xóa dữ liệu trang web trong cài đặt trình duyệt. Prompt là gợi ý, phải được giáo viên kiểm chứng. Nguồn/giấy phép học liệu phải được xác minh trước khi sử dụng hoặc tái phân phối.

Các văn bản và mã chỉ báo trong chương trình là thông tin tham chiếu ban đầu; cần đối chiếu văn bản gốc, hiệu lực và hướng dẫn chính thức trước khi dùng chính thức. Không dùng website để suy diễn điều khoản hoặc quyết định chuyên môn/pháp lý.

**Thông báo:** Website chỉ là công cụ hỗ trợ; giáo viên chịu trách nhiệm kiểm chứng nội dung, pháp lý và phù hợp học sinh.

## Kiểm thử thủ công trước khi dùng

1. Mở `index.html` trực tiếp, kiểm tra không cần mạng/CDN.
2. Thu nhỏ cửa sổ/điện thoại: menu thu gọn, thẻ và biểu mẫu không tràn ngang.
3. Nhập KHBD lớp 6, xác nhận gợi ý TC1; tạo, sao chép, tải và in prompt.
4. Chọn lớp 9, xác nhận gợi ý TC2; kiểm tra mã ATM và cảnh báo đối chiếu.
5. Tạo prompt cho slide, video, infographic và trò chơi.
6. Tạo prompt đề với các tỷ lệ mức độ, số câu khác nhau.
7. Tạo PDCA; xác nhận đủ Plan/Do/Check/Act và 4 tuần.
8. Tìm prompt theo từ khóa, đổi từng bộ lọc; kiểm tra thư viện có 30 mục.
9. Đánh dấu sản phẩm, tải lại trang và xác nhận tiến độ lưu; xóa localStorage để kiểm tra reset.
10. Dùng DevTools Network khi tương tác: xác nhận không có request gửi dữ liệu biểu mẫu; rà soát bản quyền và đối chiếu pháp lý với người phụ trách trước triển khai.
