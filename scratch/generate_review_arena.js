// Generator for ict11_review_arena.js
const fs = require('fs');

const reviewArena = {
  summaryTable: [
    { phase: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)", id: 1, title: "Giới thiệu phần mềm vẽ trang trí", product: "Giao diện Inkscape, hệ tọa độ, hộp thoại Fill and Stroke, phân biệt Vector và Bitmap (SVG/PNG)." },
    { phase: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)", id: 2, title: "Làm việc với đối tượng hình khối", product: "Hình chữ nhật bo góc Rx/Ry, hình tròn/elip/cung Arc/Slice, sao và đa giác 5 cánh, Object to Path." },
    { phase: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)", id: 3, title: "Làm việc với đối tượng đường", product: "Bút vẽ Bezier, điểm neo Cusp/Smooth/Symmetric, nối/tách điểm neo, lệnh Stroke to Path." },
    { phase: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)", id: 4, title: "Chỉnh sửa, ghép nối các đối tượng đồ họa", product: "Bộ 6 phép toán Boolean (Union, Difference, Intersection...), Text on Path, Align & Distribute." },
    { phase: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)", id: 5, title: "Thiết kế sản phẩm trang trí hoàn chỉnh", product: "Tranh vector Tháp Rùa Hồ Gươm, bưu thiếp kỷ niệm, cấu trúc phân lớp Layers, xuất SVG và PNG 300 DPI." },

    { phase: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic & VideoPad)", id: 6, title: "Làm quen với phần mềm làm phim hoạt hình", product: "Toontastic 3D, cấu trúc kịch bản 3 hồi (Beginning - Middle - Climax) và 5 cảnh, bối cảnh 3D." },
    { phase: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic & VideoPad)", id: 7, title: "Thiết kế nhân vật hoạt hình", product: "Tùy biến nhân vật thư viện, công cụ Draw Your Own 2D, cơ chế Rigging tự động gắn khớp xương, avatar mặt thật." },
    { phase: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic & VideoPad)", id: 8, title: "Thực hành sản xuất phim hoạt hình", product: "Điều phối nhân vật chuột/chạm tay, thu âm lồng tiếng trực tiếp, thanh trượt Mood Music 5 cảm xúc, xuất MP4." },
    { phase: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic & VideoPad)", id: 9, title: "Tạo các nguồn dữ liệu cho phim", product: "Tài nguyên đa phương tiện (Inkscape PNG trong suốt, Foley SFX, Creative Commons CC0/CC-BY), cấu trúc thư mục dự án." },
    { phase: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic & VideoPad)", id: 10, title: "Hoàn thiện phim từ các nguồn dữ liệu", product: "Biên tập hậu kỳ VideoPad, Multi-track Timeline, cắt ghép Split, Audio Ducking nhạc nền, tiêu đề Title & Credits." },

    { phase: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh (GIMP)", id: 11, title: "Thao tác với các lớp ảnh", product: "Cấu trúc xếp chồng Layers trong GIMP, Blend Modes (Normal, Screen, Multiply), Layer Mask đen-trắng phi phá hủy." },
    { phase: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh (GIMP)", id: 12, title: "Tạo ảnh động", product: "Nguyên lý lưu ảnh võng mạc, quy ước Layer thành Frame, bộ lọc Filters > Animation > Playback, xuất GIF As animation." },
    { phase: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh (GIMP)", id: 13, title: "Điều chỉnh thời gian trễ và tạo chữ động", product: "Cú pháp tên lớp (ms), chế độ (combine) vs (replace), chữ động Text Animation, Optimize for GIF." },
    { phase: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh (GIMP)", id: 14, title: "Tạo hiệu ứng cho ảnh động", product: "Hiệu ứng hòa tan Blend sinh frame trung gian, hiệu ứng mưa rơi Linear Motion Blur, hiệu ứng gợn sóng Waves." },
    { phase: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh (GIMP)", id: 15, title: "Thực hành biên tập ảnh động", product: "Banner động 728x90px quảng bá Ngày hội sách, nút CTA nhấp nháy, kiểm thử trình duyệt, tối ưu dung lượng < 1.5MB." }
  ],

  keyTerms: [
    { term: "Vector", definition: "Đồ họa mô tả bằng phương trình toán học xác định tọa độ, đường cong và màu sắc; phóng to hay thu nhỏ tùy ý mà đường nét vẫn sắc mịn tuyệt đối." },
    { term: "Bitmap / Raster", definition: "Ảnh được cấu thành từ mạng lưới các ô điểm ảnh (pixel); khi phóng lớn vượt kích thước ban đầu sẽ xuất hiện hiện tượng vỡ hạt mờ nhòe." },
    { term: "Path (Đối tượng đường)", definition: "Chuỗi các đoạn thẳng hoặc đoạn cong liên kết với nhau qua các điểm neo (Node); có thể uốn lượn tự do theo công thức Bezier." },
    { term: "Node (Điểm neo)", definition: "Điểm điều khiển hình dạng đường vẽ; gồm các tay nắm tiếp tuyến quyết định hướng tiếp tuyến và độ căng của đoạn cong liên kết." },
    { term: "Fill", definition: "Màu sắc hoặc dải chuyển màu (Gradient) được tô lấp đầy toàn bộ vùng không gian bên trong của một đối tượng đồ họa khép kín." },
    { term: "Stroke", definition: "Đường viền bao quanh đối tượng; bao gồm thuộc tính màu viền (Stroke paint), độ dày đường nét và kiểu dáng nét vẽ (Stroke style)." },
    { term: "Opacity", definition: "Độ đục / độ mờ của đối tượng (từ 0% trong suốt hoàn toàn đến 100% đục đặc); giảm Opacity để nhìn xuyên thấu các đối tượng bên dưới." },
    { term: "Union", definition: "Phép toán Boolean gộp hợp nhất nhiều đối tượng hình vector giao nhau thành một đối tượng duy nhất mang đường bao liên tục." },
    { term: "Group", definition: "Nhóm liên kết nhiều đối tượng riêng rẽ để di chuyển, xoay hoặc co giãn cùng lúc mà vẫn bảo tồn từng hình khối thành phần độc lập." },
    { term: "Bối cảnh (3D Stage)", definition: "Không gian sân khấu ba chiều diễn ra câu chuyện hoạt hình; cung cấp địa hình, đạo cụ và góc quay camera cho diễn viên hoạt động." },
    { term: "Kịch bản phân cảnh", definition: "Bản thiết kế cấu trúc chi tiết của bộ phim; quy định rõ từng cảnh gồm nhân vật tham gia, bối cảnh, hành động cử chỉ và lời thoại đối thoại." },
    { term: "Layer Mask (Mặt nạ lớp)", definition: "Lớp mặt nạ xám gắn liền với ảnh gốc; dùng sắc thái đen để che giấu, trắng để hiển thị và xám để làm mờ mà không làm mất pixel gốc." },
    { term: "Khung hình (Frame)", definition: "Một hình ảnh tĩnh đơn lẻ trong chuỗi các hình ảnh được phát liên tiếp theo dòng thời gian để tạo ra ảo giác chuyển động sống động." },
    { term: "Delay (Thời gian trễ)", definition: "Khoảng thời lượng một khung hình tĩnh được hiển thị trên màn hình trước khi chuyển sang khung hình tiếp theo, tính bằng mili-giây (ms)." }
  ],

  qualityChecklist: [
    {
      domain: "Đồ họa Vector (Inkscape)",
      items: [
        "Cấu trúc đường nét khép kín chuẩn xác, không hở nét tại các điểm mút kết nối.",
        "Sử dụng đúng phân loại điểm neo (Cusp cho góc nhọn, Smooth cho đường lượn mượt mà).",
        "Tổ chức lớp vẽ theo thứ tự phân tầng hợp lý (Nền trời -> Kiến trúc -> Mặt nước -> Hoa văn).",
        "Màu sắc hài hòa, dải màu Gradient tạo chiều sâu và đổ bóng chân thực.",
        "Lưu file nguồn chuẩn SVG và xuất ảnh bitmap PNG đạt độ phân giải in ấn 300 DPI."
      ]
    },
    {
      domain: "Phim Hoạt hình (Toontastic & VideoPad)",
      items: [
        "Kịch bản có cấu trúc rõ ràng (Mở đầu Beginning -> Biến cố Middle -> Cao trào Climax).",
        "Nhân vật cử động nhịp nhàng, khớp khung xương (Rigging) tự nhiên, không bị méo chi.",
        "Giọng lồng tiếng rõ ràng, khớp hoàn hảo với chuyển động và biểu cảm nhân vật.",
        "Âm lượng nhạc nền được xử lý Audio Ducking, tự động hạ nhỏ khi nhân vật phát biểu.",
        "Tiêu đề mở đầu (Title) và danh sách đoàn làm phim (Credits) trang trọng, xuất file MP4 HD 1080p."
      ]
    },
    {
      domain: "Biên tập Ảnh động (GIMP)",
      items: [
        "Tách ghép nhân vật bằng Layer Mask mềm mại, đường biên lông tóc tự nhiên, không lem nền.",
        "Quy ước đặt tên Layer kèm thông số trễ (ms) và chế độ (replace)/(combine) chuẩn cú pháp.",
        "Tối ưu dung lượng thông qua Filters > Animation > Optimize (for GIF) và Indexed 128 màu.",
        "Chuyển động mượt mà, kiểm tra Playback không bị giật lùi hoặc dính bóng ma chữ cũ.",
        "File GIF hoàn thiện tải nhanh dưới 1.5MB và thiết lập lặp vô tận (Loop forever) trên trình duyệt."
      ]
    }
  ],

  arenaQuestions: [
    {
      id: 1,
      q: "Điểm khác biệt cốt lõi giữa đồ họa vector và đồ họa bitmap (raster) là gì?",
      options: [
        "Đồ họa vector được tạo từ phương trình toán học nên phóng to không bị vỡ hạt; bitmap tạo từ lưới pixel dễ vỡ hạt.",
        "Đồ họa vector chỉ có 2 màu đen trắng; đồ họa bitmap mới có thể hiển thị ảnh nhiều màu.",
        "Đồ họa vector luôn có dung lượng tệp lớn hơn đồ họa bitmap gấp hàng chục lần.",
        "Đồ họa vector chỉ chạy được trên hệ điều hành Linux; bitmap mới dùng được trên Windows."
      ],
      answer: 0,
      exp: "Đồ họa vector được biểu diễn bằng các đối tượng và phương trình toán học xác định tọa độ và đường cong, nên khi phóng to thu nhỏ đường nét vẫn giữ nguyên độ sắc nét hoàn hảo; bitmap được tạo từ lưới pixel nên phóng lớn sẽ vỡ hạt."
    },
    {
      id: 2,
      q: "Phím tắt chuẩn để mở hộp thoại quản lý màu tô và đường viền (Fill and Stroke) trong Inkscape là gì?",
      options: [
        "Shift + Ctrl + F",
        "Ctrl + Alt + Del",
        "Shift + F5",
        "Ctrl + P"
      ],
      answer: 0,
      exp: "Tổ hợp phím Shift + Ctrl + F mở trực tiếp hộp thoại Fill and Stroke trong Inkscape, cho phép điều khiển màu tô (Fill), màu viền (Stroke paint), kiểu nét (Stroke style) và Opacity."
    },
    {
      id: 3,
      q: "Để vẽ ngôi sao vàng 5 cánh trên Quốc kỳ Việt Nam đúng tỉ lệ chuẩn mực hình học trong Inkscape, cần thiết lập các tham số nào trên Star Tool (*)?",
      options: [
        "Corners: 5 và Spoke ratio: 0.382",
        "Corners: 5 và Spoke ratio: 0.850",
        "Corners: 6 và Spoke ratio: 0.500",
        "Corners: 5 và Rounded: 0.900"
      ],
      answer: 0,
      exp: "Ngôi sao 5 cánh có tỉ lệ vàng chuẩn giữa bán kính đáy lõm và đỉnh là xấp xỉ 0.382 (Spoke ratio: 0.382; Corners: 5)."
    },
    {
      id: 4,
      q: "Sau khi vẽ một hình elip bằng Circle Tool trong Inkscape, muốn biến đổi hình thành đối tượng đường để tùy ý nắn các điểm neo, cần dùng lệnh nào?",
      options: [
        "Path > Object to Path (Shift + Ctrl + C)",
        "Object > Group (Ctrl + G)",
        "Edit > Cut (Ctrl + X)",
        "Path > Stroke to Path (Ctrl + Alt + C)"
      ],
      answer: 0,
      exp: "Lệnh Path > Object to Path (Shift+Ctrl+C) chuyển đổi đối tượng hình khối tham số nguyên thủy thành đối tượng đường (Path) với các điểm neo (Node) để uốn nắn tự do."
    },
    {
      id: 5,
      q: "Loại điểm neo nào trong Inkscape có hai tay nắm tiếp tuyến luôn thẳng hàng 180 độ và luôn có độ dài bằng nhau?",
      options: [
        "Điểm neo đối xứng (Symmetric node)",
        "Điểm neo nhọn (Cusp node)",
        "Điểm neo trơn (Smooth node)",
        "Điểm neo tự động (Auto-smooth node)"
      ],
      answer: 0,
      exp: "Symmetric node (điểm đối xứng) có 2 tay nắm tiếp tuyến cùng phương và luôn có độ dài bằng nhau, đảm bảo độ cong cân đối hoàn hảo về cả hai phía."
    },
    {
      id: 6,
      q: "Để tạo hình vầng trăng khuyết từ hai hình tròn giao nhau trong Inkscape, ta chọn cả hai hình rồi áp dụng phép toán Boolean nào?",
      options: [
        "Path > Difference (Ctrl + -)",
        "Path > Union (Ctrl + +)",
        "Path > Intersection (Ctrl + *)",
        "Path > Combine (Ctrl + K)"
      ],
      answer: 0,
      exp: "Phép toán Difference (Ctrl+-) sẽ lấy hình tròn nằm dưới trừ đi phần bị che khuất bởi hình tròn nằm trên, tạo ra hình vầng trăng lưỡi liềm sắc nét."
    },
    {
      id: 7,
      q: "Để dòng chữ tự động uốn lượn cong tròn theo đường viền của một hình tròn trong Inkscape, ta chọn dòng chữ và hình tròn rồi vào menu:",
      options: [
        "Text > Put on Path",
        "Path > Object to Path",
        "Object > Clip > Set",
        "Filters > Distort"
      ],
      answer: 0,
      exp: "Lệnh Text > Put on Path gắn văn bản vào đường dẫn cong, làm cho dòng chữ uốn lượn chạy men theo hình học của đường dẫn đó."
    },
    {
      id: 8,
      q: "Độ phân giải DPI chuẩn mực khi xuất ảnh PNG từ Inkscape để in ấn phẩm bưu thiếp chất lượng cao là bao nhiêu?",
      options: [
        "300 DPI",
        "72 DPI",
        "96 DPI",
        "150 DPI"
      ],
      answer: 0,
      exp: "Chuẩn in ấn thương mại và thiết kế đồ họa chất lượng cao luôn yêu cầu độ phân giải tối thiểu 300 DPI (dots per inch) để bản in sắc mịn, không bị vỡ hạt."
    },
    {
      id: 9,
      q: "Cấu trúc kịch bản phân cảnh 3 hồi chuẩn mực trong phần mềm làm phim hoạt hình Toontastic 3D gồm những phần nào?",
      options: [
        "Beginning (Mở đầu) -> Middle (Xung đột) -> Climax (Cao trào / Kết thúc)",
        "Giới thiệu -> Quảng cáo -> Bán hàng",
        "Part 1 -> Part 2 -> Part 3 -> Part 4",
        "Lý thuyết -> Bài tập -> Kiểm tra"
      ],
      answer: 0,
      exp: "Toontastic 3D thiết lập cấu trúc kịch bản truyện ngắn (Short Story) gồm 3 phân cảnh kinh điển: Beginning (thiết lập bối cảnh, nhân vật), Middle (biến cố xung đột), Climax (giải quyết mâu thuẫn và bài học)."
    },
    {
      id: 10,
      q: "Tính năng nào trong Toontastic 3D cho phép người học đưa gương mặt thật của chính mình hoặc bạn bè vào nhân vật hoạt hình?",
      options: [
        "Chụp ảnh từ webcam hoặc tải ảnh chân dung cận cảnh vào khung mặt nhân vật",
        "Vẽ tay bằng cọ màu nước 3D",
        "Gõ tên người dùng vào ô nhân vật",
        "Quét mã QR học sinh trên thẻ thư viện"
      ],
      answer: 0,
      exp: "Toontastic hỗ trợ chụp webcam trực tiếp hoặc tải ảnh chân dung từ máy tính lên để làm Avatar mặt cho nhân vật hoạt hình 3D."
    },
    {
      id: 11,
      q: "Khi đạo diễn bấm nút Start Recording trong Toontastic 3D, thao tác nào diễn ra đồng thời theo thời gian thực?",
      options: [
        "Kéo di chuyển nhân vật trên sân khấu 3D và thu âm trực tiếp lời thoại qua micro",
        "Chỉ di chuyển nhân vật, sau khi xong phim mới được gõ chữ phụ đề",
        "Phần mềm tự động tạo câu thoại ngẫu nhiên bằng trí tuệ nhân tạo",
        "Tất cả màn hình đứng yên chờ người dùng vẽ xong cảnh tiếp theo"
      ],
      answer: 0,
      exp: "Trong quá trình quay (Recording), người học vừa dùng tay/chuột điều phối hành động của nhân vật, vừa nói trực tiếp vào micro để lồng tiếng đồng bộ hoàn toàn theo chuyển động."
    },
    {
      id: 12,
      q: "Để sử dụng các bản nhạc hoặc hiệu ứng âm thanh tải từ Internet vào phim hoạt hình mà không vi phạm bản quyền tác giả, nên chọn nguồn có giấy phép nào?",
      options: [
        "Creative Commons (CC-BY hoặc CC0) / Public Domain",
        "Nhạc có bản quyền độc quyền của ca sĩ nổi tiếng",
        "Bản thu âm trộm từ rạp chiếu phim",
        "Tất cả các bản nhạc tải từ mạng xã hội đều được dùng thoải mái không cần xin phép"
      ],
      answer: 0,
      exp: "Tài nguyên có giấy phép Creative Commons (CC0, CC-BY) hoặc thuộc miền công cộng (Public Domain) cho phép sử dụng hợp pháp trong sản phẩm giáo dục khi tuân thủ ghi nhận nguồn tác giả."
    },
    {
      id: 13,
      q: "Kĩ thuật 'Audio Ducking' trong biên tập video đa rãnh bằng VideoPad có tác dụng gì?",
      options: [
        "Tự động hạ nhỏ âm lượng nhạc nền khi có tiếng nói lời thoại của nhân vật cất lên",
        "Tăng âm lượng nhạc nền lên mức tối đa để che lấp tiếng ồn xung quanh",
        "Tắt hoàn toàn tiếng micro của diễn viên để chỉ nghe thấy tiếng nhạc",
        "Làm méo giọng nhân vật thành tiếng vịt kêu hài hước"
      ],
      answer: 0,
      exp: "Audio Ducking tự động làm giảm âm lượng của rãnh nhạc nền khi rãnh lời thoại có tín hiệu âm thanh phát ra, giúp lời thoại của nhân vật luôn rõ ràng, dễ nghe."
    },
    {
      id: 14,
      q: "Ưu điểm vượt trội của việc dùng Mặt nạ lớp (Layer Mask) so với công cụ Tẩy (Eraser) khi cắt ghép ảnh trong GIMP là gì?",
      options: [
        "Chỉnh sửa phi phá hủy: vùng ảnh bị che bằng màu đen có thể khôi phục lại nguyên vẹn bất kì lúc nào bằng cách tô màu trắng",
        "Layer Mask giúp xóa vĩnh viễn dữ liệu ảnh để tệp nhẹ hơn",
        "Layer Mask tự động làm bức ảnh đẹp hơn mà không cần tô vẽ gì",
        "Layer Mask chỉ áp dụng được cho ảnh đen trắng, không dùng được cho ảnh màu"
      ],
      answer: 0,
      exp: "Layer Mask cho phép che giấu điểm ảnh (tô đen) và hiển thị lại (tô trắng) mà không bao giờ làm mất điểm ảnh gốc, mang tính linh hoạt phi phá hủy (non-destructive editing)."
    },
    {
      id: 15,
      q: "Khi xuất ảnh động định dạng GIF từ GIMP, mỗi khung hình (frame) của ảnh động tương ứng với thành phần nào trong bảng quản lý?",
      options: [
        "Mỗi Layer (lớp ảnh) trong bảng điều khiển Layers tương ứng với một khung hình",
        "Mỗi kênh màu (Channel) là một khung hình",
        "Mỗi đường dẫn (Path) là một khung hình",
        "Phải tạo 10 tệp ảnh riêng biệt ở 10 thư mục khác nhau"
      ],
      answer: 0,
      exp: "Quy ước hoạt họa trong GIMP là mỗi Layer trong danh sách sẽ được xem như một khung hình (frame) của chuỗi ảnh động, phát theo thứ tự từ dưới lên trên."
    },
    {
      id: 16,
      q: "Để một khung hình chữ dừng lại trên màn hình đúng 1.5 giây để người xem đọc kĩ nội dung, ta đặt tên cho Layer đó trong GIMP như thế nào?",
      options: [
        "Tên_Layer (1500ms)",
        "Tên_Layer (1.5s)",
        "Tên_Layer [1500]",
        "Delay 1500: Tên_Layer"
      ],
      answer: 0,
      exp: "Cú pháp quy ước của GIMP để đặt độ trễ khung hình là gõ số mili-giây trong dấu ngoặc đơn ở đuôi tên lớp: (1500ms) tương đương 1.5 giây."
    },
    {
      id: 17,
      q: "Sự khác biệt giữa hai chế độ gán nhãn khung hình `(replace)` và `(combine)` trong ảnh động GIF của GIMP là gì?",
      options: [
        "(replace) xóa sạch khung hình cũ trước khi vẽ khung mới; (combine) vẽ đè khung mới lên khung cũ mà không xóa",
        "(replace) làm ảnh mờ đi; (combine) làm ảnh sắc nét hơn",
        "(replace) dùng cho video; (combine) dùng cho âm thanh",
        "Cả hai chế độ đều hoàn toàn giống nhau, chỉ khác tên gọi"
      ],
      answer: 0,
      exp: "Chế độ `(replace)` xóa bỏ toàn bộ nội dung của khung hình trước đó (tránh hiện tượng bóng ma đè chữ); chế độ `(combine)` tích lũy nội dung đè lên lớp nền."
    },
    {
      id: 18,
      q: "Bộ lọc tự động nào trong GIMP giúp sinh ra các khung hình trung gian hòa tan mượt mà từ một nụ hoa hé nở thành bông hoa sen trọn vẹn?",
      options: [
        "Filters > Animation > Blend",
        "Filters > Blur > Gaussian Blur",
        "Filters > Distorts > Ripple",
        "Image > Transform > Rotate"
      ],
      answer: 0,
      exp: "Lệnh Filters > Animation > Blend tự động tính toán nội suy màu sắc và độ trong suốt giữa hai lớp ảnh để sinh ra chuỗi khung hình chuyển tiếp (morphing) hòa quyện mềm mại."
    },
    {
      id: 19,
      q: "Lệnh nào trong GIMP giúp tối ưu hóa kích thước tệp ảnh động GIF bằng cách chỉ lưu trữ những điểm ảnh có sự thay đổi giữa các khung hình liên tiếp?",
      options: [
        "Filters > Animation > Optimize (for GIF)",
        "Image > Scale Image",
        "File > Save As",
        "Edit > Clear"
      ],
      answer: 0,
      exp: "Filters > Animation > Optimize (for GIF) phân tích sự khác biệt giữa các frame và loại bỏ các điểm ảnh pixel tĩnh bị trùng lặp, giúp giảm dung lượng tệp GIF từ 40% đến 70%."
    },
    {
      id: 20,
      q: "Khi xuất bản một Banner ảnh động GIF treo trên website giáo dục, tiêu chuẩn tối ưu nào sau đây là chuẩn mực chuyên nghiệp?",
      options: [
        "Kích thước chuẩn (như 728x90px), dung lượng tải nhẹ (< 1.5 MB), bảng màu Indexed 128-256 màu và tích chọn Loop forever",
        "Kích thước tùy ý, dung lượng càng nặng trên 50MB càng nét",
        "Chỉ xuất dạng ảnh tĩnh PNG không cần chuyển động",
        "Bỏ tùy chọn Loop forever để ảnh chỉ chạy đúng 1 lần rồi biến mất"
      ],
      answer: 0,
      exp: "Tiêu chuẩn Banner Web chuyên nghiệp: đúng tỉ lệ hiển thị (728x90px Leaderboard), nén tối ưu dưới 1.5MB để tải nhanh trên di động, khử răng cưa bằng Indexed 128-256 màu và lặp vô tận (Loop forever)."
    }
  ]
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/ict11_review_arena.js', 'module.exports = ' + JSON.stringify(reviewArena, null, 2) + ';\n', 'utf8');
console.log('Saved ict11_review_arena.js successfully');
