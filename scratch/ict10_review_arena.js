// Course Review, 9-step Project Workflow, Key Terms, and 20 Arena Questions for Chuyên đề Tin học 10 ICT
module.exports = {
  summaryTable: [
    { phase: "Cẩm nang văn bản (Word)", id: 1, title: "Lập dàn ý và định dạng nâng cao", product: "Dàn ý phân cấp, hệ thống Styles (Heading 1/2/3, Normal), Navigation Pane." },
    { phase: "Cẩm nang văn bản (Word)", id: 2, title: "Trình bày văn bản với định dạng ảnh", product: "Picture Format, Picture Styles, 7 kiểu Wrap Text, căn chỉnh và chú thích ảnh." },
    { phase: "Cẩm nang văn bản (Word)", id: 3, title: "Hình khối và hộp văn bản", product: "Shapes, Text Box, WordArt, xếp lớp đối tượng (Arrange), Align và Group." },
    { phase: "Cẩm nang văn bản (Word)", id: 4, title: "Tạo mục lục và xuất bản văn bản", product: "Mục lục tự động (Table of Contents), cập nhật F9, rà soát và xuất bản PDF." },
    { phase: "Chương trình báo giá (Excel)", id: 5, title: "Tạo dữ liệu ban đầu với bảng", product: "Format as Table, Table Design, hàng Total Row tự động, bảng giá gốc dịch vụ." },
    { phase: "Chương trình báo giá (Excel)", id: 6, title: "Tạo biểu mẫu khách hàng với hộp kiểm", product: "Developer -> Check Box (Form Controls), liên kết ô Cell link (TRUE/FALSE)." },
    { phase: "Chương trình báo giá (Excel)", id: 7, title: "Xây dựng dự toán với hàm điều kiện", product: "Hàm IF, tính phụ phí theo hộp kiểm, địa chỉ tuyệt đối ($), tham chiếu liên Sheet." },
    { phase: "Chương trình báo giá (Excel)", id: 8, title: "Hoàn thiện dự toán với hàm tìm kiếm", product: "Hàm VLOOKUP/HLOOKUP, tra đơn giá tự động từ bảng nguồn, xử lí lỗi #N/A." },
    { phase: "Chương trình báo giá (Excel)", id: 9, title: "Tổng hợp, thống kê số liệu báo giá", product: "Cơ cấu giá vốn, biên lợi nhuận (%), tính doanh thu và giá bán cho khách (ROUND)." },
    { phase: "Chương trình báo giá (Excel)", id: 10, title: "Tạo và xuất báo giá với hàm thời gian", product: "Hàm NOW(), TODAY(), tính thời hạn bảo lưu giá (+7 ngày), Set Print Area, xuất PDF." },
    { phase: "Chương trình báo giá (Excel)", id: 11, title: "Kiểm thử, hoàn thiện và đóng gói", product: "Kiểm thử 3 bộ kịch bản, sửa lỗi công thức, Protect Sheet, ẩn Sheet nguồn." },
    { phase: "Truyền thông trình chiếu (PowerPoint)", id: 12, title: "Xây dựng ý tưởng, cấu trúc slide", product: "Kịch bản kể chuyện 6 phần (Storytelling), thiết kế mẫu chính Slide Master, logo." },
    { phase: "Truyền thông trình chiếu (PowerPoint)", id: 13, title: "Minh họa ấn tượng bằng video", product: "Chèn video MP4, cắt thời lượng Trim Video, Playback tự động, kiểm soát âm lượng." },
    { phase: "Truyền thông trình chiếu (PowerPoint)", id: 14, title: "Thu hút khách hàng với trò chơi", product: "Hiệu ứng Animation nâng cao, Animation Pane, thiết lập Trigger mở hộp quà may mắn." },
    { phase: "Truyền thông trình chiếu (PowerPoint)", id: 15, title: "Hoàn thiện và xuất bản truyền thông", product: "Ghi âm thuyết minh từng slide, Record Slide Show, xuất video chất lượng Full HD 1080p." }
  ],

  projectWorkflow: [
    { step: 1, title: "Chọn địa danh và xác định đối tượng khách hàng", desc: "Các nhóm thảo luận lựa chọn địa danh du lịch nổi tiếng tại Việt Nam (Sa Pa, Đà Nẵng, Hạ Long, Phú Quốc...), xác định nhóm đối tượng khách hàng mục tiêu." },
    { step: 2, title: "Phân công nhóm, thu thập tư liệu và ghi rõ nguồn", desc: "Phân chia trách nhiệm thành viên, tìm kiếm hình ảnh độ phân giải cao, video phong cảnh và bảng giá dịch vụ thực tế có trích dẫn bản quyền." },
    { step: 3, title: "Xây dựng Cẩm nang du lịch (Word)", desc: "Lập dàn ý, gán hệ thống phân cấp Styles, chèn ảnh với Wrap Text chuẩn, dùng Text Box/Shapes tạo trang ẩm thực, tạo mục lục tự động và xuất bản tệp PDF." },
    { step: 4, title: "Thiết lập cơ sở dữ liệu và biểu mẫu (Excel)", desc: "Dùng Format as Table tạo các bảng giá gốc (phòng, xe, dịch vụ); dùng Developer chèn Check Box tạo biểu mẫu thu thập thông tin khách hàng." },
    { step: 5, title: "Lập dự toán và xây dựng bảng báo giá tự động", desc: "Ứng dụng hàm IF, VLOOKUP/HLOOKUP để tra cứu giá tự động; xác định biên lợi nhuận, dùng NOW/TODAY điền ngày và tính tổng báo giá." },
    { step: 6, title: "Kiểm thử, sửa lỗi và đóng gói sản phẩm bảng tính", desc: "Thử nghiệm các bộ dữ liệu bình thường và biên giới hạn; sửa lỗi công thức; thiết lập Protect Sheet khóa công thức và ẩn sheet dữ liệu gốc." },
    { step: 7, title: "Xây dựng bài thuyết trình quảng bá (PowerPoint)", desc: "Thiết kế theo mạch Storytelling hấp dẫn; dùng Slide Master đồng bộ phông chữ, bảng màu và logo thương hiệu; chèn video Trim gọn gàng." },
    { step: 8, title: "Tích hợp trò chơi tương tác, thu âm và xuất video", desc: "Ứng dụng cơ chế Trigger tạo trò chơi mở hộp quà bí mật; thu âm lời thuyết minh truyền cảm trên từng slide; xuất bản tệp video MP4 Full HD." },
    { step: 9, title: "Báo cáo tại Hội chợ du lịch Ba miền", desc: "Trưng bày bộ 3 sản phẩm liên kết (Cẩm nang PDF, Bảng tính báo giá XLSX/PDF, Video MP4); thuyết trình và bảo vệ dự án trước hội đồng đánh giá." }
  ],

  keyTerms: [
    { term: "Style", def: "Tập hợp các thuộc tính định dạng (phông, cỡ, màu, căn lề, giãn đoạn) được thiết kế sẵn để áp dụng đồng bộ cho các thành phần cùng cấp trong văn bản." },
    { term: "Navigation Pane", def: "Ngăn điều hướng cấu trúc tài liệu trong Word (Ctrl + F), hiển thị cây phân cấp tiêu đề giúp xem nhanh và kéo thả sắp xếp lại bố cục." },
    { term: "Wrap Text", def: "Tính năng điều khiển cách thức dòng văn bản bao quanh hoặc tương tác xếp lớp với hình ảnh (In Line, Square, Tight, Behind Text, In Front of Text...)." },
    { term: "Text Box", def: "Hộp chứa văn bản độc lập với dòng văn bản chính, có thể tự do di chuyển, đổi hướng chữ (Text Direction) và thiết lập không màu nền (No Fill) để nổi bật trên ảnh." },
    { term: "Format as Table", def: "Công cụ biến vùng dữ liệu thành bảng có cấu trúc thông minh trong Excel, tự động co giãn khi thêm dữ liệu, tích hợp Header Row, Filter và Total Row." },
    { term: "Cell link", def: "Ô tính liên kết nhận trạng thái logic trực tiếp từ hộp kiểm Form Controls (nhận TRUE khi được tích chọn, nhận FALSE khi bỏ tích chọn)." },
    { term: "Hàm IF", def: "Hàm điều kiện logic trong Excel: kiểm tra một biểu thức so sánh, trả về giá trị nếu đúng (TRUE) và trả về giá trị khác nếu sai (FALSE)." },
    { term: "Hàm VLOOKUP / HLOOKUP", def: "Các hàm tra cứu dữ liệu tự động: VLOOKUP tìm theo chiều dọc trên cột đầu tiên; HLOOKUP tìm theo chiều ngang trên hàng đầu tiên của bảng." },
    { term: "Hàm NOW() / TODAY()", def: "Hàm thời gian hệ thống trong Excel: TODAY() trả về ngày/tháng/năm hiện tại; NOW() trả về cả ngày/tháng/năm kèm theo giờ/phút hiện tại." },
    { term: "Slide Master", def: "Trang chiếu chính trong PowerPoint kiểm soát định dạng chung (phông chữ, bảng màu Theme, chân trang và logo) cho toàn bộ các slide trong bài." },
    { term: "Trigger", def: "Cò kích hoạt hiệu ứng hoạt hình Animation trong PowerPoint; hiệu ứng chỉ xảy ra khi người dùng nhấp chuột chính xác vào một đối tượng chỉ định." }
  ],

  arenaQuestions: [
    {
      q: "Khi bạn chỉnh sửa thuộc tính của kiểu 'Heading 1' thông qua lệnh Modify trong Microsoft Word, điều gì sẽ xảy ra?",
      options: [
        "Chỉ có đoạn văn bản đang đặt con trỏ mới được thay đổi",
        "Toàn bộ các đoạn văn bản đang sử dụng kiểu Heading 1 trên toàn tài liệu sẽ được tự động cập nhật đồng bộ tức thì",
        "Tài liệu sẽ bị xóa hết định dạng và chuyển về dạng văn bản thô",
        "Phần mềm sẽ tự động đóng lại và không lưu"
      ],
      answer: 1,
      explain: "Lợi ích lớn nhất của việc dùng Style là tính đồng bộ: khi sửa đổi Style qua Modify, toàn bộ các đoạn văn bản áp dụng Style đó trên tài liệu sẽ lập tức được cập nhật."
    },
    {
      q: "Trong ngăn điều hướng Navigation Pane của Word, thao tác nào cho phép bạn tái cấu trúc nhanh vị trí các chương mục mà không cần bôi đen cắt dán?",
      options: [
        "Kéo thả trực tiếp tiêu đề mục trong danh sách Navigation Pane",
        "Nhấn phím F5 liên tục",
        "Nháy đúp vào thanh trạng thái",
        "Đổi màu chữ của tiêu đề"
      ],
      answer: 0,
      explain: "Navigation Pane cho phép người dùng kéo thả trực tiếp các tiêu đề mục để hoán đổi vị trí và sắp xếp lại bố cục các phần nội dung cực kì tiện lợi."
    },
    {
      q: "Để một bức ảnh phong cảnh nằm chìm hoàn toàn ở lớp phía sau các dòng chữ giới thiệu của cẩm nang du lịch, bạn chọn kiểu Wrap Text nào?",
      options: [
        "In Line with Text",
        "Square",
        "Behind Text",
        "In Front of Text"
      ],
      answer: 2,
      explain: "Behind Text đặt ảnh nằm ở lớp phía sau văn bản, rất phù hợp để làm hình nền trang mở đầu hoặc watermark mờ."
    },
    {
      q: "Muốn một hộp văn bản (Text Box) trở nên trong suốt hoàn toàn, chỉ để lộ chữ nổi trực tiếp đè lên bức ảnh phong cảnh, bạn phải thiết lập:",
      options: [
        "Shape Fill = No Fill và Shape Outline = No Outline",
        "Shape Fill = Solid White và Shape Outline = Black",
        "Xóa bỏ hộp văn bản và gõ chữ vào thanh địa chỉ",
        "Đổi phông chữ sang định dạng Webdings"
      ],
      answer: 0,
      explain: "No Fill (không màu nền) và No Outline (không đường viền) làm khung Text Box trong suốt, giúp chữ hiển thị sắc nét nổi bật ngay trên ảnh nền."
    },
    {
      q: "Sau khi bổ sung thêm nhiều đoạn văn khiến các đề mục bị dồn sang trang sau, để mục lục tự động cập nhật lại đúng số trang mới, người dùng nhấn phím tắt nào?",
      options: [
        "F4",
        "F9 (hoặc chuột phải chọn Update Field -> Update entire table)",
        "F12",
        "Ctrl + Z"
      ],
      answer: 1,
      explain: "Phím F9 (hoặc Update Field) kích hoạt lệnh cập nhật mục lục tự động trong Word để dò quét lại số trang và tiêu đề mới nhất."
    },
    {
      q: "Ưu thế lớn nhất khi chuyển đổi một vùng ô dữ liệu thông thường thành bảng có cấu trúc bằng lệnh 'Format as Table' trong Excel là gì?",
      options: [
        "Bảng tự động nới rộng kích thước, tự áp dụng định dạng và sao chép công thức khi người dùng gõ thêm dòng mới ở đáy bảng",
        "Dữ liệu trong bảng sẽ không bao giờ bị xóa được nữa",
        "Bảng tự động gửi email cho khách hàng",
        "Excel sẽ chuyển sang giao diện tiếng Pháp"
      ],
      answer: 0,
      explain: "Tính năng Format as Table biến dữ liệu thành bảng thông minh có khả năng tự động co giãn kích thước (auto-expand) và tự nhân bản công thức xuống dòng mới."
    },
    {
      q: "Thuộc tính 'Cell link' trong hộp thoại Format Control của Check Box (Form Controls) có chức năng gì?",
      options: [
        "Liên kết hộp kiểm với một trang web du lịch bên ngoài",
        "Chỉ định ô tính trên bảng tính nhận giá trị logic TRUE (khi tích chọn) hoặc FALSE (khi bỏ tích chọn)",
        "Đổi màu nền của hộp kiểm sang màu đỏ",
        "Khóa trang tính bằng mật khẩu"
      ],
      answer: 1,
      explain: "Ô Cell link là cầu nối giữa giao diện tương tác và công thức tính toán: khi khách tích chọn hộp kiểm, ô liên kết nhận TRUE; khi bỏ tích, ô nhận FALSE."
    },
    {
      q: "Công thức nào sau đây thể hiện đúng cú pháp hàm IF để tính tiền phụ phí hướng dẫn viên: nếu ô E10 là TRUE thì lấy số ngày (C2) nhân với 500.000đ, ngược lại bằng 0đ?",
      options: [
        "=IF(E10=TRUE; C2 * 500000; 0)",
        "=IF(E10; 0; C2 * 500000)",
        "=IF(C2 * 500000; E10=TRUE)",
        "=SUM(E10; C2; 500000)"
      ],
      answer: 0,
      explain: "Cú pháp chuẩn của hàm IF là =IF(điều_kiện; giá_trị_nếu_đúng; giá_trị_nếu_sai). Nếu E10=TRUE thì lấy C2*500000, ngược lại trả về 0."
    },
    {
      q: "Trong Excel, để khóa cố định tọa độ ô đơn giá $D$5 khi sao chép công thức xuống dưới, bạn đặt con trỏ tại ô D5 và nhấn phím nào?",
      options: [
        "F2",
        "F4",
        "F7",
        "F10"
      ],
      answer: 1,
      explain: "Phím F4 dùng để chuyển đổi nhanh giữa các kiểu địa chỉ tương đối (D5), tuyệt đối ($D$5), khóa dòng (D$5) hoặc khóa cột ($D5)."
    },
    {
      q: "Trong hàm =VLOOKUP(Lookup_value, Table_array, Col_index_num, Range_lookup), tham số Range_lookup nên đặt là gì để tìm kiếm chính xác 100% tên phòng?",
      options: [
        "TRUE (hoặc số 1)",
        "FALSE (hoặc số 0)",
        "\"EXACT\"",
        "Để trống"
      ],
      answer: 1,
      explain: "Range_lookup = FALSE (hoặc 0) chỉ định hàm VLOOKUP tìm kiếm chính xác tuyệt đối, khớp từng kí tự của giá trị cần tìm."
    },
    {
      q: "Quy tắc cấu trúc bắt buộc đối với bảng dữ liệu tra cứu Table_array trong hàm VLOOKUP là gì?",
      options: [
        "Cột chứa giá trị cần tìm BẮT BUỘC phải là cột đầu tiên bên trái nhất của bảng tra cứu",
        "Bảng tra cứu phải có số cột bằng đúng số hàng",
        "Tất cả các ô trong bảng đều phải chứa số thực",
        "Bảng phải được tô màu xanh lá cây"
      ],
      answer: 0,
      explain: "Hàm VLOOKUP chỉ có thể dò tìm giá trị trên cột đầu tiên (bên trái nhất) của vùng bảng dữ liệu, không thể tra cứu ngược về bên trái."
    },
    {
      q: "Một tour du lịch có tổng chi phí giá vốn là 30.000.000đ cho đoàn 15 người. Công ty muốn đạt tỉ lệ lợi nhuận là 20% trên giá vốn. Mức giá báo cho mỗi khách là:",
      options: [
        "2.000.000 đ",
        "2.400.000 đ",
        "2.600.000 đ",
        "3.000.000 đ"
      ],
      answer: 1,
      explain: "Tổng doanh thu đoàn = 30.000.000 * (1 + 20%) = 36.000.000đ. Giá báo cho mỗi khách = 36.000.000 / 15 = 2.400.000đ/người."
    },
    {
      q: "Hàm nào trong Excel trả về ngày tháng năm hiện tại của máy tính mà KHÔNG bao gồm giờ phút?",
      options: [
        "NOW()",
        "TODAY()",
        "DATE()",
        "TIME()"
      ],
      answer: 1,
      explain: "Hàm TODAY() trả về ngày/tháng/năm hiện tại; hàm NOW() trả về cả ngày tháng năm kèm theo giờ phút."
    },
    {
      q: "Để bản báo giá du lịch tự động hiển thị ngày hết hạn là đúng 7 ngày sau ngày lập báo giá hôm nay, công thức thiết lập là:",
      options: [
        "=TODAY() + 7",
        "=NOW() * 7",
        "=DATE(7)",
        "=DAY() + 7"
      ],
      answer: 0,
      explain: "Vì Excel lưu trữ ngày tháng dưới dạng các số nguyên liên tiếp, nên =TODAY() + 7 sẽ trả về ngày chính xác sau hôm nay đúng 7 ngày."
    },
    {
      q: "Để bảo vệ bảng tính bằng tính năng Protect Sheet sao cho người dùng CHỈ ĐƯỢC NHẬP vào ô số lượng khách mà KHÔNG được sửa công thức tính tiền, bạn phải làm gì?",
      options: [
        "Mở khóa ô (Bỏ chọn 'Locked') cho ô số lượng khách, sau đó mới bật Protect Sheet",
        "Khóa tất cả các ô trên trang tính bằng mật khẩu",
        "Xóa bỏ các ô chứa công thức tính tiền",
        "Đổi tên trang tính thành 'ReadOnly'"
      ],
      answer: 0,
      explain: "Mặc định mọi ô đều bị Locked. Ta phải mở khóa (bỏ Locked) cho các ô cho phép nhập liệu, sau đó bật Protect Sheet thì các ô còn lại (chứa công thức) sẽ được khóa an toàn."
    },
    {
      q: "Công cụ Slide Master trong PowerPoint mang lại lợi ích nổi bật nào sau đây?",
      options: [
        "Làm cho dung lượng bài thuyết trình giảm xuống 0 KB",
        "Quy định định dạng chung (phông chữ, bảng màu, chân trang, logo) tự động áp dụng đồng bộ cho toàn bộ các slide con trong bài",
        "Tự động dịch lời thuyết minh sang tiếng nước ngoài",
        "Bắt buộc người xem phải trả tiền bản quyền"
      ],
      answer: 1,
      explain: "Slide Master là trang chiếu chính; khi chỉnh sửa phông chữ hay đặt logo trên Master, tất cả các slide trong bài sẽ kế thừa và đồng bộ tức thì."
    },
    {
      q: "Trong thẻ Playback của PowerPoint, công cụ nào cho phép bạn cắt gọn đoạn video từ 5 phút xuống chỉ phát 40 giây ấn tượng nhất?",
      options: [
        "Crop",
        "Trim Video",
        "Video Shape",
        "Fade In"
      ],
      answer: 1,
      explain: "Công cụ Trim Video cho phép kéo chọn thời điểm bắt đầu (Start Time) và kết thúc (End Time) để cắt gọn thời lượng video trực tiếp trên slide."
    },
    {
      q: "Trong PowerPoint, 'Trigger' được hiểu chính xác là gì?",
      options: [
        "Một loại hiệu ứng âm thanh tiếng súng nổ",
        "Một thiết lập gắn hiệu ứng hoạt hình với một đối tượng bấm cụ thể, hiệu ứng chỉ chạy khi người dùng nhấp chuột trúng đối tượng đó",
        "Hiệu ứng chuyển đổi giữa các slide",
        "Công cụ tự động vẽ sơ đồ tổ chức"
      ],
      answer: 1,
      explain: "Trigger (cò kích hoạt) cho phép gắn hiệu ứng Animation với một đối tượng bấm, tạo tính năng tương tác phi tuyến tính như trò chơi mở hộp quà hay câu đố trắc nghiệm."
    },
    {
      q: "Ưu điểm của việc thu âm lời thuyết minh bằng tính năng Record Audio riêng lẻ trên từng slide là gì?",
      options: [
        "Tự động làm méo giọng nói thành tiếng người máy",
        "Đoạn thu âm của mỗi trang là đối tượng độc lập; nếu đọc vấp ở trang nào thì chỉ cần xóa và thu lại đúng trang đó",
        "Bắt buộc phải có kết nối mạng Internet mới thu âm được",
        "Âm thanh sẽ tự động dịch sang tiếng Nhật"
      ],
      answer: 1,
      explain: "Âm thanh trên từng slide là độc lập, giúp người thuyết trình dễ dàng thu lại từng trang bị lỗi mà không phải thu âm lại cả bài từ đầu."
    },
    {
      q: "Để xuất bản toàn bộ bài trình chiếu PowerPoint thành một tệp video hoàn chỉnh chạy tự động tại gian hàng hội chợ, bạn sử dụng lệnh nào?",
      options: [
        "File -> Save As -> Chọn tệp văn bản .txt",
        "File -> Export -> Create a Video (chọn Full HD 1080p và Use Recorded Timings)",
        "Insert -> Screen Recording",
        "Review -> Protect Presentation"
      ],
      answer: 1,
      explain: "File -> Export -> Create a Video cho phép chuyển đổi toàn bộ slide, hiệu ứng hoạt hình và âm thanh thuyết minh thành tệp video MP4 chất lượng cao."
    }
  ]
};
