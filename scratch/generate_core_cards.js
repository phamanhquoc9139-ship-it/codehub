// Generator for ict11_core_cards.js
const fs = require('fs');

const coreCards = {
  1: [
    {
      title: "Đồ họa Vector vs Bitmap/Raster",
      text: "Đồ họa vector xây dựng từ các biểu thức toán học xác định điểm, đường cong và màu sắc nên phóng to thu nhỏ tuyệt đối không bị vỡ hạt, định dạng chuẩn là SVG; raster tạo từ lưới điểm ảnh (pixel), dễ vỡ hạt khi phóng lớn."
    },
    {
      title: "Hộp công cụ & Hộp thoại Fill and Stroke",
      text: "Công cụ vẽ hình khối, bút vẽ Bezier và công cụ chọn trên thanh Tool; hộp thoại Fill and Stroke (Shift+Ctrl+F) điều khiển chính xác màu tô (Fill), viền (Stroke paint), độ dày nét (Stroke style) và độ đục (Opacity)."
    },
    {
      title: "Thao tác biến đổi đối tượng cơ bản",
      text: "Sử dụng Select Tool (F1) nhấp lần 1 để hiện 8 mũi tên co giãn kích thước (giữ Ctrl để giữ tỉ lệ), nhấp lần 2 để hiện các mũi tên xoay tròn và nghiêng hình quanh tâm quay."
    },
    {
      title: "Quản lý nhóm và thứ tự lớp hiển thị",
      text: "Nhóm các đối tượng thành một khối duy nhất bằng Group (Ctrl+G), rã nhóm bằng Ungroup (Ctrl+U); điều chỉnh độ sâu hiển thị bằng Raise/Lower (Page Up/Page Down) hoặc đưa lên trên/xuống dưới cùng (Home/End)."
    }
  ],
  2: [
    {
      title: "Hình chữ nhật & Bo góc thông minh",
      text: "Công cụ Rectangle Tool (F4) tạo hình chữ nhật hoặc hình vuông (giữ Ctrl). Sử dụng hai tay nắm hình tròn ở góc trên bên phải để điều chỉnh bán kính bo tròn Rx, Ry tức thì mà không biến dạng đường nét."
    },
    {
      title: "Hình tròn, Elip & Cung tròn / Hình quạt",
      text: "Circle Tool (F5) tạo hình elip hoặc hình tròn hoàn hảo (giữ Ctrl). Kéo các tay nắm hình tròn theo hướng bên ngoài hoặc bên trong elip để tạo cung mở (Arc) hoặc hình nan quạt (Slice) phân chia góc."
    },
    {
      title: "Sao và Đa giác đều tùy biến",
      text: "Công cụ Star/Polygon Tool (*) cho phép chọn chế độ đa giác đều hoặc hình sao nhiều cánh; dễ dàng điều chỉnh số đỉnh (Corners), tỉ lệ bán kính đáy (Spoke ratio) và độ bo tròn góc (Rounded) linh hoạt."
    },
    {
      title: "Chuyển hình khối thành đối tượng đường",
      text: "Lệnh Path > Object to Path (Shift+Ctrl+C) biến các hình khối tham số nguyên thủy thành đối tượng đường (Path) với các điểm neo (Node), giải phóng toàn bộ khả năng uốn nắn tự do của đối tượng."
    }
  ],
  3: [
    {
      title: "Bút vẽ Bezier & Đường cong toán học",
      text: "Công cụ Bezier Tool (Shift+F6) cho phép nhấp chuột để tạo chuỗi đoạn thẳng gấp khúc hoặc nhấp và kéo rê chuột để tạo đường cong mượt mà thông qua các tay nắm tiếp tuyến toán học."
    },
    {
      title: "Các loại điểm neo (Node Types)",
      text: "Sử dụng Node Tool (F2) điều khiển 3 loại điểm neo chính: Cusp node (điểm nhọn, hai tay nắm độc lập), Smooth node (điểm trơn, hai tay nắm cùng phương) và Symmetric node (điểm đối xứng, hai tay nắm bằng nhau)."
    },
    {
      title: "Chỉnh sửa, thêm bớt và nối tách điểm neo",
      text: "Nhấp đúp chuột lên đoạn thẳng để thêm điểm neo mới; chọn điểm và ấn Delete để xóa; lệnh Join selected nodes nối hai đầu mút hở thành đường khép kín; Break path tách đối tượng tại điểm neo."
    },
    {
      title: "Biến đổi nét viền thành mảng (Stroke to Path)",
      text: "Lệnh Path > Stroke to Path (Ctrl+Alt+C) chuyển đổi đường nét vẽ mảnh thành một mảng đồ họa kín, cho phép áp dụng tô dải màu gradient, đổ bóng hoặc thực hiện các phép cắt ghép Boolean dễ dàng."
    }
  ],
  4: [
    {
      title: "Bộ 6 phép toán Boolean trên Path",
      text: "Path Boolean operations là cốt lõi tạo hình vector: Hợp nhất (Union Ctrl++), Trừ cắt (Difference Ctrl+-), Giao nhau (Intersection Ctrl+*), Loại trừ phần giao (Exclusion), Chia cắt mảng (Division) và Cắt nét (Cut Path)."
    },
    {
      title: "Căn gióng và phân phối (Align & Distribute)",
      text: "Bảng Align & Distribute (Shift+Ctrl+A) căn thẳng hàng các mép trái, phải, giữa tâm và chia đều khoảng cách các đối tượng; cho phép chọn mốc chuẩn tương đối (Relative to: Selection, First selected, Page)."
    },
    {
      title: "Uốn cong chữ theo đường dẫn (Put on Path)",
      text: "Tạo dòng chữ và một đường cong/hình tròn, chọn cả hai rồi vào Text > Put on Path; chữ sẽ tự động uốn lượn uốn quanh viền hình, ứng dụng tạo logo hình tròn, huy hiệu và tem nhãn chuyên nghiệp."
    },
    {
      title: "Lồng ghép khung hình (Clip & Mask)",
      text: "Sử dụng Object > Clip > Set để giấu toàn bộ phần hình ảnh nằm ngoài viền của khung vector bên trên; Object > Mask > Set tận dụng sắc thái xám của hình trên để tạo hiệu ứng mờ dần trong suốt nghệ thuật."
    }
  ],
  5: [
    {
      title: "Quy trình 5 bước thiết kế sản phẩm đồ họa",
      text: "Xác định mục tiêu & kích thước sản phẩm -> Phác thảo bố cục cấu trúc -> Tạo hình khối nền & chi tiết bằng công cụ vector -> Phối màu, gán dải màu Gradient & hiệu ứng -> Đóng gói và xuất bản file đích."
    },
    {
      title: "Quản lý cấu trúc phân lớp (Layers Panel)",
      text: "Tổ chức bản vẽ qua các lớp riêng biệt (Background nền, Base khối đế, Details hoa văn, Typography văn bản); khóa lớp (Lock) để tránh thao tác nhầm và bật tắt con mắt (Visibility) để kiểm tra từng phần."
    },
    {
      title: "Ứng dụng dải màu chuyển Gradient & Chiều sâu",
      text: "Sử dụng Gradient Tool (G) tạo dải màu tuyến tính (Linear) hoặc tỏa tròn (Radial) trên mái ngói, mặt nước, bầu trời; kết hợp giảm Opacity và làm mờ viền Blur để tạo đổ bóng (drop shadow) chân thực."
    },
    {
      title: "Tiêu chuẩn xuất bản sản phẩm số chuẩn mực",
      text: "Lưu file gốc dạng SVG để bảo toàn nguyên vẹn cấu trúc vector; xuất ảnh bitmap dạng PNG thông qua File > Export với độ phân giải cao 300 DPI khi cần in ấn bưu thiếp hoặc 96-150 DPI để xuất bản web."
    }
  ],
  6: [
    {
      title: "Môi trường làm phim hoạt hình 3D Toontastic",
      text: "Toontastic 3D là ứng dụng hoạt hình giáo dục mô phỏng sân khấu 3D trực quan, cho phép người học đóng vai đạo diễn dàn dựng không gian, điều khiển diễn viên và thu âm lồng tiếng trực tiếp trong thời gian thực."
    },
    {
      title: "Cấu trúc kịch bản 3 hồi (Short Story)",
      text: "Phân cảnh chuẩn cho truyện ngắn gồm 3 mốc: Mở đầu (Beginning - giới thiệu bối cảnh, nhân vật) -> Cao trào (Middle - biến cố hoặc nút thắt kịch tính nảy sinh) -> Hồi kết (Climax - giải quyết mâu thuẫn bài học)."
    },
    {
      title: "Cấu trúc câu chuyện 5 cảnh (Classic Story)",
      text: "Mô hình tự sự kinh điển: Setup (Thiết lập) -> Conflict (Xung đột nảy sinh) -> Challenge (Thử thách cam go) -> Climax (Cao trào bùng nổ) -> Resolution (Kết thúc trọn vẹn và thông điệp)."
    },
    {
      title: "Lựa chọn và làm quen bối cảnh không gian 3D",
      text: "Khám phá các thế giới có sẵn: Trạm vũ trụ không gian, Rừng cắm trại ven hồ, Tàu cướp biển, Vương quốc dưới đáy biển Atlantis; làm quen thao tác xoay góc nhìn camera và tương tác với đồ vật trên sân khấu."
    }
  ],
  7: [
    {
      title: "Thư viện nhân vật 3D & Tùy biến trang phục",
      text: "Khám phá kho nhân vật đa dạng (phi hành gia, thám tử, nhà khoa học, động vật); sử dụng cọ vẽ màu và bảng họa tiết để tùy biến màu tóc, quần áo, phụ kiện để phù hợp với vai trò trong câu chuyện."
    },
    {
      title: "Công cụ tự vẽ nhân vật (Draw Your Own)",
      text: "Sử dụng bút vẽ 2D trong Toontastic để tự phác họa nhân vật độc bản từ nét vẽ tay của chính mình; ứng dụng sẽ tự động tính toán bề dày và chuyển đổi nét vẽ phẳng thành mô hình 3D có độ phồng."
    },
    {
      title: "Cơ chế gắn khung xương tự động (Rigging)",
      text: "Toontastic tự động xác định các khớp nối giải phẫu (cổ, vai, khuỷu tay, đầu gối, mắt cá chân) trên hình vẽ người dùng, cho phép nhân vật tự do cử động, co duỗi tay chân sinh động khi diễn xuất."
    },
    {
      title: "Chèn chân dung cá nhân làm Avatar nhân vật",
      text: "Tính năng chụp ảnh hoặc tải chân dung từ máy tính lên vùng đầu nhân vật, giúp người học hóa thân trực tiếp thành nhân vật hoạt hình trong phim, tăng tính gắn kết cảm xúc và tạo tiếng cười dí dỏm."
    }
  ],
  8: [
    {
      title: "Điều phối nhân vật theo thời gian thực",
      text: "Khi bấm nút Start Recording, đạo diễn dùng ngón tay hoặc chuột kéo rê nhân vật di chuyển trên sân khấu 3D, chạm nhẹ vào nhân vật để tạo biểu cảm, xoay người hoặc kích hoạt các hành động đặc thù."
    },
    {
      title: "Lồng tiếng và tương tác âm thanh trực tiếp",
      text: "Micro máy tính sẽ ghi lại toàn bộ giọng đọc lời thoại, âm thanh tiếng động của người học khớp hoàn toàn theo từng chuyển động thực của nhân vật, loại bỏ nhu cầu đồng bộ phụ đề phức tạp."
    },
    {
      title: "Lựa chọn cảm xúc & Nhạc nền (Mood Music)",
      text: "Sau khi diễn xong cảnh, phần mềm cung cấp thanh trượt âm nhạc theo 5 cấp độ cảm xúc: Vui tươi náo nhiệt (Cheerful), Bí ẩn rùng rợn (Spooky), Kịch tính hồi hộp (Dramatic), Nghẹn ngào sâu lắng hay Hùng tráng."
    },
    {
      title: "Xuất bản và quản lý tập phim hoạt hình",
      text: "Sau khi hoàn thiện tất cả các phân cảnh, bấm Finish để Toontastic tự động ghép nối các cảnh thành một phim hoàn chỉnh với phụ đề đề danh (Director Credits), cho phép Export ra tệp video MP4 HD."
    }
  ],
  9: [
    {
      title: "Xây dựng kho tài nguyên đa phương tiện",
      text: "Bộ phim hoàn chỉnh cần nhiều nguồn dữ liệu: Phim hoạt hình gốc từ Toontastic, hình ảnh đồ họa vector vẽ từ Inkscape (nền PNG trong suốt), tệp ghi âm thuyết minh và các bản nhạc nền độc lập."
    },
    {
      title: "Ghi âm và tạo hiệu ứng âm thanh Foley",
      text: "Thu âm lời bình luận viên rõ ràng bằng micro rời; tự tạo các âm thanh thực tế đời thường (Foley) như tiếng lật trang sách, tiếng gõ cửa, tiếng bước chân hoặc tìm nguồn hiệu ứng miễn phí bản quyền hợp lệ."
    },
    {
      title: "Bản quyền và đạo đức sử dụng tài nguyên số",
      text: "Tuyệt đối tôn trọng quyền sở hữu trí tuệ: Sử dụng tài nguyên có giấy phép Creative Commons (CC-BY, CC0) hoặc miền công cộng (Public Domain); ghi nhận nguồn tác giả rõ ràng ở đoạn credit cuối phim."
    },
    {
      title: "Cấu trúc thư mục dự án phim khoa học",
      text: "Thiết lập cây thư mục bài bản: 01_Scripts (kịch bản phân cảnh), 02_Footage (video cảnh thô), 03_Audio (lời thoại, nhạc nền, SFX), 04_Graphics (ảnh, logo, vẽ tay), 05_Final_Exports (phim hoàn chỉnh)."
    }
  ],
  10: [
    {
      title: "Giao diện biên tập phi tuyến tính VideoPad",
      text: "Làm quen với VideoPad Video Editor: Cửa sổ Clip Bin (quản lý tệp nguyên liệu), Cửa sổ Xem trước (Clip Preview / Sequence Preview) và Bàn dựng dòng thời gian đa rãnh (Multi-track Timeline)."
    },
    {
      title: "Kĩ thuật cắt tỉa & Ghép nối phân cảnh",
      text: "Kéo thả các đoạn clip vào Video Track 1; dùng thanh trượt thời gian xác định điểm cần cắt rồi dùng lệnh Split (L) để chia tách clip; xóa đoạn thừa và áp dụng hiệu ứng chuyển cảnh mềm mại (Cross Dissolve, Fade)."
    },
    {
      title: "Biên tập đa kênh âm thanh (Audio Mixing)",
      text: "Bố trí kênh Audio Track 1 cho giọng lồng tiếng diễn viên và Audio Track 2 cho nhạc nền tổng thể; điều chỉnh thanh âm lượng (Volume Curve) để nhạc tự động giảm nhỏ khi có lời thoại (Audio Ducking)."
    },
    {
      title: "Chèn chữ đề dẫn, tiêu đề và Xuất bản video",
      text: "Sử dụng Text Overlay để tạo tiêu đề mở đầu (Opening Title) và danh sách đoàn làm phim (Credits cuộn dọc); xuất file video cuối cùng thông qua Export Video > Video File ở chuẩn Full HD 1080p, định dạng MP4."
    }
  ],
  11: [
    {
      title: "Nguyên lý lớp ảnh (Layer Architecture) trong GIMP",
      text: "Hình ảnh trong GIMP được tạo thành từ các lớp ảnh xếp chồng lên nhau như các tấm kính trong suốt. Lớp ở trên sẽ che khuất lớp ở dưới nếu vùng đó chứa điểm ảnh đặc, giúp chỉnh sửa từng thành phần độc lập."
    },
    {
      title: "Hộp thoại Layers & Chế độ hòa trộn (Blend Modes)",
      text: "Hộp thoại Layers (Ctrl+L) quản lý danh sách lớp, điều chỉnh thanh trượt độ mờ đục Opacity, và thử nghiệm các chế độ hòa trộn mạnh mẽ: Normal, Multiply (làm tối), Screen (làm sáng), Overlay (tăng tương phản)."
    },
    {
      title: "Sức mạnh chỉnh sửa phi phá hủy của Mặt nạ lớp (Layer Mask)",
      text: "Layer Mask là công cụ then chốt: Tô màu đen lên mask để che giấu vùng ảnh, tô màu trắng để hiển thị lại, tô màu xám để làm mờ bán phần. Dữ liệu gốc không hề bị xóa mất như khi dùng tẩy thông thường."
    },
    {
      title: "Cắt ghép chủ thể và làm mềm đường biên",
      text: "Dùng công cụ chọn (Lasso, Fuzzy Select) bao quanh đối tượng, tạo vùng chọn viền mềm (Select > Feather) để tránh mép bị răng cưa cộc lốc, sau đó Add Layer Mask từ vùng chọn để tách chủ thể mượt mà vào cảnh mới."
    }
  ],
  12: [
    {
      title: "Nguyên lý lưu ảnh võng mạc và ảnh động GIF",
      text: "Ảnh động (Animated GIF) hoạt động dựa trên đặc tính lưu ảnh của mắt người khi xem chuỗi ảnh tĩnh diễn ra liên tiếp với tốc độ từ 10 đến 24 khung hình/giây (FPS), tạo ra ảo giác chuyển động nhịp nhàng."
    },
    {
      title: "Quy ước chuyển Layer thành Frame trong GIMP",
      text: "Khi xuất ảnh GIF động trong GIMP, mỗi Layer trong bảng điều khiển Layers sẽ tự động được xem như một khung hình (Frame). Thứ tự phát chuyển động mặc định đi từ lớp dưới cùng lên trên cùng."
    },
    {
      title: "Xem trước chuyển động với bộ lọc Playback",
      text: "Trước khi xuất tệp, luôn kiểm tra chuyển động chuyển động bằng lệnh Filters > Animation > Playback; cửa sổ phát sẽ mở ra với các nút Play, Pause, Step frame và cho phép điều chỉnh tỉ lệ khung hình kiểm thử."
    },
    {
      title: "Xuất bản ảnh động định dạng GIF tiêu chuẩn",
      text: "Vào File > Export As, chọn đuôi mở rộng .gif; trong hộp thoại thiết lập bắt buộc tích chọn 'As animation', tích chọn 'Loop forever' để ảnh tự động lặp vô tận, và thiết lập thời gian trễ mặc định giữa các khung hình."
    }
  ],
  13: [
    {
      title: "Cú pháp điều khiển thời gian trễ trên tên Layer",
      text: "GIMP cho phép tùy biến tốc độ riêng cho từng khung hình bằng cách gõ đuôi tên lớp: Tên_Lớp (100ms) hoặc (500ms). Khung hình có thời gian trễ lớn sẽ dừng lại lâu hơn để người xem kịp đọc văn bản hoặc quan sát."
    },
    {
      title: "Cơ chế kết hợp khung hình: Combine vs Replace",
      text: "Gán nhãn (combine) để khung hình mới vẽ đè lên khung hình cũ mà không xóa nền (tiết kiệm dung lượng và tạo chuyển động tích lũy); gán nhãn (replace) để khung hình mới xóa hoàn toàn khung hình trước."
    },
    {
      title: "Kĩ thuật tạo chữ động (Text Animation)",
      text: "Nhân bản nhiều lớp văn bản, thay đổi dần vị trí tọa độ, kích thước cỡ chữ hoặc áp dụng hiệu ứng mờ dần (Fade in / Fade out) qua từng khung hình để tạo chuyển động chữ bay, chữ nhấp nháy thu hút."
    },
    {
      title: "Tối ưu hóa tệp ảnh động (Optimize for GIF)",
      text: "Chạy lệnh Filters > Animation > Optimize (for GIF); GIMP sẽ tự động phân tích và chỉ lưu lại những điểm ảnh pixel có sự thay đổi giữa các khung hình liên tiếp, giúp giảm kích thước tệp GIF từ 40% đến 70%."
    }
  ],
  14: [
    {
      title: "Hiệu ứng chuyển cảnh hòa tan biến hình (Blend)",
      text: "Lệnh Filters > Animation > Blend tự động tạo ra các khung hình trung gian biến đổi dần từ lớp ảnh này sang lớp ảnh khác bằng cách hòa trộn dải màu, tạo hiệu ứng chuyển động biến hình mượt mà không cần vẽ tay."
    },
    {
      title: "Tạo hiệu ứng mưa rơi với Linear Motion Blur",
      text: "Tạo lớp đen, rải hạt nhiễu trắng ngẫu nhiên bằng Noise > RGB Noise, kéo giãn vệt nước theo phương nghiêng bằng Filters > Blur > Linear Motion Blur, rồi đổi chế độ hòa trộn sang Screen để tạo cảnh mưa rơi."
    },
    {
      title: "Tạo hiệu ứng gợn sóng mặt nước (Waves / Ripples)",
      text: "Lệnh Filters > Animation > Waves tự động biến đổi hình ảnh tĩnh thành chuỗi khung hình uốn lượn hình sin lan tỏa từ tâm, mô phỏng mặt hồ nước dập dềnh hoặc hiệu ứng cờ bay trước gió sống động."
    },
    {
      title: "Cân đối độ mượt mà FPS và dung lượng tệp",
      text: "Tăng số lượng khung hình trung gian giúp chuyển động uyển chuyển hơn nhưng sẽ đẩy dung lượng tệp tăng vọt; với ảnh động trên trang web giáo dục, chuẩn tối ưu là từ 6 đến 12 khung hình/giây và dưới 1.5 MB."
    }
  ],
  15: [
    {
      title: "Quy trình sản xuất Banner ảnh động hoàn chỉnh",
      text: "Khảo sát yêu cầu kích thước & tỉ lệ hiển thị -> Xây dựng thông điệp & Storyboard phân đoạn ngắn -> Thiết kế đồ họa tĩnh từng thành phần trên Inkscape & GIMP -> Dàn dựng khung hình động -> Xuất & kiểm thử."
    },
    {
      title: "Kĩ thuật lồng ghép chủ thể động trên nền hiệu ứng",
      text: "Kết hợp ảnh nhân vật đã tách nền bằng Layer Mask với phông nền động (mưa rơi, tuyết rơi hoặc tia sáng lấp lánh); sử dụng cơ chế khung hình kết hợp để chủ thể đứng yên trong khi hiệu ứng biến chuyển nhịp nhàng."
    },
    {
      title: "Nút kêu gọi hành động (Call to Action - CTA) sinh động",
      text: "Thiết kế nút bấm CTA (như 'Tìm hiểu ngay', 'Xem chi tiết') đổi màu nhấp nháy hoặc phóng to nhẹ ở khung hình cuối cùng để hướng sự chú ý của người xem và kích thích tương tác người dùng trang web."
    },
    {
      title: "Kiểm thử toàn diện và tiêu chuẩn sản phẩm số",
      text: "Kiểm tra ảnh GIF thành phẩm trên trình duyệt web: Vòng lặp Loop trơn tru không bị giật, thông điệp hiển thị rõ ràng, thời gian dừng đọc hợp lý, màu sắc không bị gắt nhiễu và dung lượng tải trang tối ưu."
    }
  ]
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/ict11_core_cards.js', 'module.exports = ' + JSON.stringify(coreCards, null, 2) + ';\n', 'utf8');
console.log('Saved ict11_core_cards.js successfully');
