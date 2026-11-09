module.exports = {
  "1": [
    {
      "type": "Tình huống đồ họa thực tế",
      "title": "Khắc phục logo trường học bị nhòe vỡ hạt khi in ấn phông bạt cỡ lớn",
      "content": "Đoàn trường cần in phông sân khấu kích thước 3m x 2m cho lễ khai giảng. Khi phóng to file ảnh logo trường (dạng JPG tải từ Facebook), logo bị vỡ hạt mờ nhòe nghiêm trọng, các đường viền chữ bị răng cưa méo mó.",
      "solution": "Đưa file ảnh raster vào Inkscape làm mẫu mờ, sử dụng công cụ vẽ hình khối và bút Bezier để đồ lại toàn bộ các đường nét thành đối tượng vector. Lưu file dưới định dạng gốc SVG và xuất file in ấn PNG độ phân giải 300 DPI, đảm bảo phóng lớn kích thước sân khấu vẫn sắc nét hoàn hảo."
    },
    {
      "type": "Kĩ năng thao tác chuẩn mực",
      "title": "Khắc phục hiện tượng đối tượng bị lệch vị trí khi chỉnh sửa bố cục bưu thiếp",
      "content": "Khi thiết kế bưu thiếp, cụm chữ chúc mừng gồm 4 dòng văn bản và khung viền trang trí thường xuyên bị di chuyển lệch nhau mỗi khi người học lỡ tay nhấp chuột kéo một thành phần riêng lẻ.",
      "solution": "Dùng Select Tool (F1) quét chọn bao quanh toàn bộ cụm chữ và khung viền, nhấn phím tắt Ctrl+G (Object > Group) để nhóm chúng thành một đối tượng duy nhất. Khi cần chỉnh sửa nội dung chữ bên trong, chỉ cần nhấp đúp vào nhóm để chỉnh sửa cục bộ mà không làm phá vỡ vị trí tổng thể."
    }
  ],
  "2": [
    {
      "type": "Tình huống thiết kế chính xác",
      "title": "Vẽ ngôi sao vàng 5 cánh trên Quốc kỳ đúng tỉ lệ hình học chuẩn mực",
      "content": "Học sinh tự vẽ lá cờ Tổ quốc nhưng dùng chuột kéo tự do khiến ngôi sao vàng 5 cánh bị méo, các cánh sao dài ngắn không đều và tâm sao bị lệch khỏi tâm hình chữ nhật đỏ.",
      "solution": "Chọn công cụ Star Tool (*), trên thanh điều khiển nhập Corners = 5, Spoke ratio = 0.382 (tỉ lệ vàng chuẩn của ngôi sao 5 cánh), giữ phím Ctrl khi vẽ để khóa góc đứng thẳng. Mở bảng Align & Distribute (Shift+Ctrl+A), chọn căn giữa theo chiều ngang và dọc so với nền cờ đỏ."
    },
    {
      "type": "Kĩ năng bo góc thông minh",
      "title": "Cắt góc bo tròn cho khung thẻ học sinh mà không bị méo khi co giãn",
      "content": "Nhóm thiết kế mẫu thẻ thư viện, ban đầu vẽ hình chữ nhật rồi dùng bút vẽ tay 4 góc cong. Khi kéo dài thẻ để thêm thông tin thì 4 góc cong bị dẹt thành hình elip kỳ quặc.",
      "solution": "Sử dụng công cụ Rectangle Tool (F4) chuẩn, nhấp và kéo nhẹ tay nắm tròn (Circle Handle) ở góc trên bên phải hình chữ nhật để thiết lập thông số bán kính bo tròn Rx, Ry. Khung thẻ sẽ giữ nguyên độ cong góc mượt mà tuyệt đối kể cả khi thay đổi chiều dài hoặc chiều rộng thẻ."
    }
  ],
  "3": [
    {
      "type": "Kĩ năng tinh chỉnh đường cong",
      "title": "Xử lý đường viền cuống lá và cánh sen bị gãy khúc thô ráp khi vẽ bằng Bezier",
      "content": "Học sinh vẽ bông hoa sen biểu trưng nhưng nhấp chuột liên tục tạo quá nhiều điểm neo, khiến đường lượn cánh hoa bị gồ ghề lồi lõm như răng cưa.",
      "solution": "Chuyển sang công cụ Node Tool (F2), quét chọn các điểm neo thừa dọc thân cánh hoa rồi bấm phím Delete để loại bỏ (Inkscape sẽ tự động nội suy làm mịn đường nối giữa 2 điểm còn lại). Với các điểm uốn mượt, bấm nút 'Make selected nodes smooth' trên thanh thuộc tính và xoay tay nắm tiếp tuyến để đạt đường cong hoàn mỹ."
    },
    {
      "type": "Tình huống đổ màu đối tượng đường",
      "title": "Khắc phục lỗi không thể đổ màu tô Fill cho hình đồ họa đường viền",
      "content": "Sau khi đồ lại đường viền bản đồ hình chữ S của Việt Nam bằng công cụ Bezier, học sinh nhấp chọn màu vàng trên bảng màu Palette nhưng đối tượng không hiện màu tô bên trong.",
      "solution": "Nguyên nhân do đường vẽ còn bị hở ở điểm đầu mút mỏm Cà Mau và đầu mút Móng Cái (Open Path). Khắc phục: Dùng Node Tool quét chọn hai điểm neo ở hai đầu mút hở, nhấp vào nút 'Join selected nodes' (hoặc 'Join selected endnodes with a new segment') để biến đường hở thành hình khép kín (Closed Path), màu tô Fill sẽ hiển thị rực rỡ ngay lập tức."
    }
  ],
  "4": [
    {
      "type": "Kĩ năng tạo hình Boolean",
      "title": "Thiết kế biểu tượng vầng trăng khuyết và bánh răng công nghiệp bằng phép toán Path",
      "content": "Trong dự án logo Hội trại thanh niên, nhóm cần vẽ vầng trăng lưỡi liềm sắc sảo và bánh răng kỹ thuật nhưng vẽ tay bằng chuột rất mất thời gian và thiếu cân xứng.",
      "solution": "Vẽ 2 hình tròn đè lệch nhau, chọn cả hai rồi nhấn Ctrl+- (Path > Difference) để lấy phần trăng khuyết chuẩn xác 100%. Để tạo bánh răng: vẽ hình tròn kết hợp với một hình đa giác nhiều cánh sao đã bo góc tròn ở đỉnh, chọn cả hai và nhấn Ctrl++ (Path > Union), sau đó vẽ hình tròn nhỏ ở tâm và dùng Difference để khoét lỗ trục."
    },
    {
      "type": "Tình huống chữ cong theo đường dẫn",
      "title": "Uốn dòng chữ tên trường học chạy cong đều theo viền trên của huy hiệu tròn",
      "content": "Khi thiết kế tem kỷ niệm 50 năm thành lập trường, nhóm muốn dòng chữ 'TRƯỜNG THPT CHUYÊN KHOA HỌC' uốn lượn cong tròn theo vòng tròn bên ngoài nhưng dòng chữ bị lộn ngược vào phía trong.",
      "solution": "Gõ dòng văn bản và vẽ vòng tròn quỹ đạo. Chọn cả hai đối tượng rồi vào Text > Put on Path. Nếu chữ bị lộn ngược hướng vào lòng hình tròn, chọn riêng vòng tròn quỹ đạo và dùng lệnh Path > Reverse (đảo ngược chiều đường dẫn), dòng chữ sẽ lập tức quay ra ngoài và uốn lượn thuận chiều mắt đọc."
    }
  ],
  "5": [
    {
      "type": "Dự án thực tế hoàn chỉnh",
      "title": "Thiết kế tranh đồ họa vector Tháp Rùa Hồ Gươm hoàn chỉnh từ ảnh chụp tư liệu",
      "content": "Yêu cầu dự án là tạo bức tranh đồ họa vector danh thắng Tháp Rùa sắc sảo để in trên cẩm nang du lịch Hà Nội, đòi hỏi thể hiện rõ kết cấu 3 tầng tháp cổ kính và mặt nước Hồ Gươm lung linh.",
      "solution": "Quy trình thực hiện: 1. Tạo layer 'Background' vẽ nền trời mây chuyển màu; 2. Tạo layer 'Architecture' vẽ khối đế, tường rêu và các cửa vòm bằng hình chữ nhật bo góc kết hợp phép cắt Difference; 3. Dùng Gradient Tool tô màu chuyển sắc cho mái ngói đất nung; 4. Tạo layer 'Water' vẽ mặt hồ và bóng đổ lung linh bằng cách giảm Opacity 40% kết hợp hiệu ứng Blur 5%."
    },
    {
      "type": "Kĩ năng đóng gói & Xuất bản",
      "title": "Xuất bản bưu thiếp đa kênh vừa hiển thị web vừa in ấn thương mại chất lượng cao",
      "content": "Bưu thiếp kỷ niệm sau khi thiết kế xong cần gửi đăng lên website trường và đồng thời gửi xưởng in 1000 bản trên giấy ảnh bìa dày để tặng đại biểu.",
      "solution": "Lưu file gốc dạng SVG để tiện chỉnh sửa sau này. Để đăng web: Vào File > Export, chọn vùng xuất Page, đặt DPI là 96 hoặc 150, định dạng PNG dung lượng nhẹ. Để in ấn: Đặt DPI là 300 (chuẩn công nghiệp in), kiểm tra không còn đối tượng nào nằm ngoài khổ giấy rồi xuất file PNG chất lượng tối đa gửi nhà in."
    }
  ],
  "6": [
    {
      "type": "Tình huống biên kịch phân cảnh",
      "title": "Xây dựng kịch bản hoạt hình 3 hồi truyền tải thông điệp Phòng chống bạo lực học đường",
      "content": "Nhóm được giao làm phim hoạt hình 60 giây tuyên truyền tình bạn đẹp trong trường học nhưng các bạn lúng túng không biết sắp xếp thứ tự các cảnh sao cho lôi cuốn và xúc động.",
      "solution": "Áp dụng cấu trúc 3 hồi Short Story trong Toontastic 3D: Cảnh 1 (Beginning): Giới thiệu bạn Minh mới chuyển trường đang ngồi đọc sách một mình ở sân trường; Cảnh 2 (Middle): Nhóm học sinh khác trêu chọc làm rơi sách của Minh, mâu thuẫn nảy sinh; Cảnh 3 (Climax): Lớp trưởng xuất hiện nhắc nhở, nhặt sách và mời Minh tham gia câu lạc bộ, hòa giải và nêu thông điệp đoàn kết."
    },
    {
      "type": "Kĩ năng thiết lập không gian sân khấu",
      "title": "Khai thác tối đa bối cảnh 3D để tạo chiều sâu không gian cho câu chuyện thám hiểm",
      "content": "Khi làm phim thám hiểm đáy biển, học sinh chỉ để nhân vật bơi ở góc trái màn hình khiến cảnh quay đơn điệu và trống trải phần lớn không gian sân khấu.",
      "solution": "Tận dụng tính năng xoay và lia camera 3D trong Toontastic: Kéo rê màn hình sang phải để mở rộng khung cảnh rạn san hô và kho báu chìm; chạm vào các sinh vật biển trên nền cảnh để kích hoạt hiệu ứng động (cá bơi, rùa biển chuyển động), tạo sân khấu đa chiều sống động."
    }
  ],
  "7": [
    {
      "type": "Kĩ năng vẽ nhân vật độc bản",
      "title": "Khắc phục lỗi nhân vật vẽ tay bằng Draw Your Own bị dính liền tay chân khi cử động",
      "content": "Học sinh tự vẽ một chú rô-bốt bảo vệ môi trường bằng cọ vẽ tay, nhưng khi đưa vào diễn xuất thì hai chân rô-bốt bị dính liền vào nhau và cánh tay không thể vung lên được.",
      "solution": "Quy tắc vẽ nhân vật cho thuật toán Rigging tự động: Phải vẽ thân mình, hai cánh tay và hai chân tách biệt rõ ràng, giữa hai chân phải có khoảng trống hở hình chữ V. Khi hoàn thành nét vẽ, Toontastic sẽ nhận diện đúng các khớp vai và háng, cho phép rô-bốt bước đi và vẫy tay linh hoạt."
    },
    {
      "type": "Tình huống sáng tạo nhân vật",
      "title": "Tạo nhân vật Avatar hoạt hình mang gương mặt thật của các thành viên trong nhóm",
      "content": "Để tăng tính gắn kết và tạo sự hào hứng cho buổi thuyết trình dự án Tin học, nhóm muốn chính các bạn trong tổ xuất hiện đối thoại trực tiếp trong phim hoạt hình.",
      "solution": "Chọn nhân vật có sẵn trong thư viện Toontastic, nhấp vào biểu tượng khuôn mặt có hình chiếc máy ảnh. Dùng webcam chụp ảnh chân dung bạn cùng nhóm hoặc tải ảnh chân dung cận cảnh từ máy tính, căn chỉnh khuôn mặt vào vòng elip. Nhân vật hoạt hình 3D sẽ mang gương mặt thật với biểu cảm sinh động, tạo bất ngờ thú vị cho cả lớp."
    }
  ],
  "8": [
    {
      "type": "Kĩ năng phối hợp điều phối & Thu âm",
      "title": "Khắc phục tiếng ồn tạp âm và nhân vật cử động giật cục khi quay phim trực tiếp",
      "content": "Khi bấm Start Recording để diễn xuất, cả 3 bạn cùng nói chen ngang vào micro máy tính khiến lời thoại bị rè, đồng thời tay bấm giật màn hình làm nhân vật bay mất kiểm soát.",
      "solution": "Phân công vai trò chuyên nghiệp: 1 bạn giữ chuột di chuyển nhân vật nhịp nhàng theo đường đi định trước; 2 bạn còn lại đứng sát micro luân phiên đọc lời thoại theo đúng kịch bản phân vai. Quay trong phòng yên tĩnh và thực hiện từng cảnh ngắn (10-15 giây) để nếu sai sót có thể bấm Re-record diễn lại ngay mà không mất công."
    },
    {
      "type": "Kĩ năng cảm xúc âm nhạc",
      "title": "Lựa chọn nhạc nền Mood Music nâng cao kịch tính cho cảnh nhân vật vượt qua thử thách",
      "content": "Ở phân cảnh nhân vật thám tử giải mã thành công câu đố hóc búa, đoạn phim ban đầu bị buồn tẻ do giữ nguyên bản nhạc nền rùng rợn của cảnh tìm kiếm trước đó.",
      "solution": "Sau khi bấm Stop Recording, màn hình điều chỉnh Mood xuất hiện với 5 nấc cảm xúc. Kéo thanh trượt sang biểu tượng khuôn mặt hào hứng (Triumphant / Energetic) để hệ thống tự động lồng bản nhạc chiến thắng rộn rã, làm bùng nổ cảm xúc của khán giả tại thời điểm cao trào."
    }
  ],
  "9": [
    {
      "type": "Tình huống bản quyền đa phương tiện",
      "title": "Tìm kiếm và sử dụng kho âm thanh hiệu ứng Foley miễn phí bản quyền cho dự án phim",
      "content": "Bộ phim hoạt hình về phi hành gia vũ trụ cần tiếng đếm ngược phóng tên lửa và tiếng động cơ gầm rú, nhưng các video trên YouTube đều dính cảnh báo bản quyền thương mại.",
      "solution": "Truy cập các kho tài nguyên giáo dục mở như YouTube Audio Library hoặc Freesound.org, lọc các hiệu ứng âm thanh có giấy phép Creative Commons (CC0 hoặc CC-BY). Tải tệp âm thanh WAV/MP3 sạch, lưu vào thư mục dự án và ghi rõ tên tác giả âm thanh ở bảng danh đề Credit cuối phim."
    },
    {
      "type": "Kĩ năng tích hợp đồ họa liên phần mềm",
      "title": "Đưa đạo cụ cúp lưu niệm vẽ từ Inkscape vào phim hoạt hình với nền trong suốt",
      "content": "Nhóm tự vẽ chiếc cúp vô địch môn bóng đá bằng Inkscape để chèn vào phân cảnh trao giải, nhưng khi chèn vào video lại bị một khung vuông màu trắng to tướng bao quanh che khuất các nhân vật.",
      "solution": "Khi vẽ trong Inkscape, mở Document Properties (Shift+Ctrl+D) kiểm tra màu nền Checkerboard (trong suốt). Khi xuất ảnh, vào File > Export, chọn định dạng PNG (hỗ trợ kênh Alpha trong suốt) thay vì JPG. File PNG trong suốt chèn vào phần mềm dựng phim sẽ hiển thị nguyên vẹn cúp vàng lung linh mà không có viền trắng."
    }
  ],
  "10": [
    {
      "type": "Kĩ năng cân bằng âm thanh trên VideoPad",
      "title": "Xử lý lỗi nhạc nền quá lớn át tiếng lồng tiếng nhân vật bằng kĩ thuật Audio Ducking",
      "content": "Sau khi ghép toàn bộ các cảnh phim hoạt hình vào VideoPad và chèn thêm bản nhạc giao hưởng hùng tráng, nhóm phát hiện khán giả không thể nghe rõ lời thoại của các nhân vật nữa.",
      "solution": "Bố trí kênh Audio Track 1 chứa giọng lồng tiếng của diễn viên, Audio Track 2 chứa nhạc nền. Trên track nhạc nền, nhấp chuột phải chọn 'Apply Audio Ducking' (hoặc dùng công cụ Volume Curve vẽ các điểm hạ âm lượng): Mỗi khi Audio Track 1 có tiếng nói phát ra, âm lượng nhạc nền sẽ tự động giảm xuống 20%, khi hết lời thoại nhạc lại tự động nâng lên 80%."
    },
    {
      "type": "Kĩ năng hoàn thiện & Đóng gói sản phẩm",
      "title": "Lắp ráp phần mở đầu Title Card và danh đề đoàn làm phim Credit chuẩn điện ảnh",
      "content": "Tác phẩm hoạt hình cần có phần giới thiệu tên phim trang trọng ở đầu và vinh danh đóng góp của các bạn trong tổ ở cuối video trước khi nộp cho giáo viên.",
      "solution": "Sử dụng công cụ Add Title / Text Clip trên VideoPad: Chọn kiểu 'Simple Text Title' với hiệu ứng mờ dần (Fade In/Out 1s) cho tiêu đề mở đầu; ở cuối phim tạo clip 'Scrolling Credits' chạy từ dưới lên trên liệt kê: Đạo diễn, Biên kịch, Họa sĩ đồ họa, Lồng tiếng, Âm nhạc. Xuất file bằng Export Video > Video File ở chuẩn MP4 1080p."
    }
  ],
  "11": [
    {
      "type": "Kĩ năng ghép ảnh không phá hủy",
      "title": "Tách chân dung nhân vật ghép vào bối cảnh mới bằng Layer Mask mềm mại",
      "content": "Học sinh cần tách hình ảnh một chú chim bồ câu đang bay từ ảnh chụp công viên để ghép vào bức tranh bầu trời hòa bình, nhưng nếu dùng công cụ Tẩy (Eraser) thì đường viền lông cánh bị nham nhở và mất chi tiết.",
      "solution": "Nhân đôi lớp ảnh gốc trong GIMP, nhấp chuột phải chọn Add Layer Mask (White - full opacity). Dùng công cụ chọn bao quanh chú chim, sau đó dùng cọ vẽ màu đen (Black Brush) với độ cứng viền mềm (Hardness 25%) để tô che đi phần nền công viên. Nếu lỡ tô phạm vào lông cánh chim, chỉ cần đổi màu cọ sang trắng (White) rồi tô lại để phục hồi tức thì."
    },
    {
      "type": "Tình huống phối màu hòa trộn",
      "title": "Tạo hiệu ứng ánh nắng vàng chiếu xiên qua tán cây bằng chế độ Blend Mode trong GIMP",
      "content": "Bức ảnh phong cảnh sau khi ghép các chi tiết trông rời rạc, thiếu sự liên kết ánh sáng giữa chủ thể và phông nền phía sau.",
      "solution": "Tạo một Layer mới ở trên cùng, dùng công cụ Gradient tô dải màu từ vàng cam nhạt sang trong suốt theo góc xiên 45 độ. Mở hộp thoại Layers, đổi chế độ hòa trộn từ Normal sang 'Screen' hoặc 'Soft Light' và giảm Opacity xuống 60%. Ánh nắng vàng sẽ hòa quyện lung linh phủ đều lên toàn bộ khung cảnh tự nhiên."
    }
  ],
  "12": [
    {
      "type": "Tình huống xuất tệp ảnh động",
      "title": "Khắc phục lỗi ảnh động đèn giao thông nhấp nháy xuất từ GIMP nhưng khi xem lại đứng yên",
      "content": "Học sinh thiết kế 3 layer tượng trưng cho đèn Đỏ, đèn Vàng, đèn Xanh trong GIMP. Sau khi xuất ra file `.gif` và mở trong trình duyệt Chrome, hình ảnh chỉ hiện đèn Xanh duy nhất và không hề chuyển động.",
      "solution": "Nguyên nhân do khi dùng lệnh File > Export As, người học đã bỏ quên ô tùy chọn hoạt họa quan trọng. Khắc phục: Vào lại Export As, nhập tên file đuôi `.gif`, trong hộp thoại 'Export Image as GIF' hiện lên bắt buộc phải tích chọn vào ô 'As animation' và tích chọn ô 'Loop forever'. Ảnh sẽ lập tức chuyển động nhấp nháy liên tục không ngừng."
    },
    {
      "type": "Kĩ năng kiểm soát hướng chuyển động",
      "title": "Khắc phục hiện tượng chuỗi hành động nhân vật bị phát giật lùi ngược thời gian",
      "content": "Nhóm vẽ chuyển động một mầm cây mọc từ hạt giống nhô lên khỏi mặt đất thành cây con gồm 5 lớp ảnh, nhưng khi mở Playback kiểm tra thì mầm cây lại chui ngược xuống đất biến thành hạt giống.",
      "solution": "GIMP có quy ước phát ảnh động mặc định đi từ lớp dưới cùng (Layer ở đáy danh sách) lên các lớp phía trên. Để sửa lỗi: Vào menu Layer > Stack > Reverse Layer Order (hoặc kéo thả sắp xếp lại thứ tự lớp) để hạt giống nằm ở lớp đáy cùng và cây non lớn nhất nằm ở lớp trên cùng."
    }
  ],
  "13": [
    {
      "type": "Kĩ năng điều khiển thời gian trễ",
      "title": "Tùy biến tốc độ hiển thị thông điệp khuyến mãi trên Banner ảnh động để người xem đọc kịp",
      "content": "Một banner GIF quảng cáo có 4 khung hình chuyển động: Khung 1-2 là hình ảnh logo lướt qua, khung 3 là câu slogan dài 20 từ, khung 4 là nút bấm 'Mua ngay'. Nếu để trễ đồng đều 200ms thì người xem không thể đọc kịp câu slogan.",
      "solution": "Mở bảng Layers trong GIMP, nhấp đúp vào tên từng lớp để thêm thông số trễ chuyên biệt: Khung 1 đặt tên `Logo (150ms)`, Khung 2 đặt tên `Icon (150ms)`, Khung 3 chứa câu khẩu hiệu đặt tên `Slogan (1500ms)` để dừng hẳn 1.5 giây cho khách đọc kỹ, Khung 4 đặt tên `CTA (1000ms)`. Xuất GIF, banner sẽ có nhịp điệu hiển thị vô cùng thông minh."
    },
    {
      "type": "Tình huống loại bỏ hiện tượng bóng ma",
      "title": "Khắc phục lỗi các dòng chữ mới hiện ra nhưng chữ của khung hình cũ vẫn đè lộn xộn",
      "content": "Khi tạo hiệu ứng chữ đếm ngược 3... 2... 1... CHÚC MỪNG NĂM MỚI, các chữ số cũ không biến mất mà tích tụ đè chồng lên nhau thành một cục màu đen xì khó nhìn.",
      "solution": "Hiện tượng này xảy ra do chế độ khung hình mặc định là Combine (chồng lớp). Để mỗi khung hình mới xuất hiện sẽ xóa sạch khung hình phía trước, hãy thêm nhãn `(replace)` vào đuôi tên của tất cả các lớp: `Frame 1 (500ms)(replace)`, `Frame 2 (500ms)(replace)`, `Frame 3 (500ms)(replace)`. Lỗi bóng ma sẽ biến mất hoàn toàn."
    }
  ],
  "14": [
    {
      "type": "Kĩ năng tạo hiệu ứng hòa tan",
      "title": "Tạo hoạt cảnh mặt trăng chuyển từ trăng non sang trăng tròn bằng bộ lọc Blend tự động",
      "content": "Học sinh muốn làm video minh họa chu kỳ tuần trăng cho bài học Địa lí nhưng chỉ có hình vẽ trăng lưỡi liềm và hình trăng rằm tròn vành vạnh, nếu vẽ tay hàng chục khung hình ở giữa thì quá tốn công.",
      "solution": "Đặt 2 lớp ảnh trăng khuyết và trăng tròn cạnh nhau trong GIMP. Vào Filters > Animation > Blend, trong hộp thoại hiện ra nhập 'Intermediate frames = 6' và 'Max blur = 0'. GIMP sẽ tự động tính toán hòa tan dải sáng và sinh ra 6 khung hình trung gian hoàn hảo, tạo hiệu ứng vầng trăng từ từ tròn đầy cực kỳ mượt mà chỉ trong vài giây."
    },
    {
      "type": "Kĩ năng hiệu ứng môi trường chuyển động",
      "title": "Tạo cảnh mưa rào mùa hạ chân thực trên tranh phong cảnh bằng Linear Motion Blur",
      "content": "Yêu cầu dự án là biến bức tranh tĩnh Hồ Gươm mùa hạ thành một bức ảnh động có hiệu ứng mưa rào rơi nghiêng sống động để chèn vào bài viết tản văn học đường.",
      "solution": "Tạo 3 layer mới trong suốt đặt tên Rain1, Rain2, Rain3. Trên mỗi layer, tô màu đen, rải nhiễu trắng bằng Filters > Noise > RGB Noise, sau đó áp dụng Filters > Blur > Linear Motion Blur với góc nghiêng Angle = 70 độ và Length = 25px. Đổi chế độ hòa trộn của 3 lớp sang 'Screen' (để lọc bỏ màu đen, chỉ giữ vệt mưa trắng) và gán độ trễ lệch pha `(80ms)(replace)`."
    }
  ],
  "15": [
    {
      "type": "Dự án truyền thông số toàn diện",
      "title": "Sản xuất Banner động GIF 728x90px quảng bá Ngày hội Đọc sách và Văn hóa đọc",
      "content": "Đoàn trường phát động cuộc thi thiết kế Banner động treo trên đầu trang tin điện tử của trường nhằm lan tỏa văn hóa đọc sách trong học sinh, yêu cầu bắt mắt, thông điệp ngắn gọn và có nút kích thích tương tác.",
      "solution": "Quy trình thực hiện chuẩn mực: 1. Tạo tệp kích thước chuẩn 728x90px; 2. Thiết kế nền dải màu và cuốn sách mở phát sáng từ Inkscape xuất PNG trong suốt; 3. Tạo chuyển động chữ 'NGÀY HỘI SÁCH 2026' lướt vào từ bên trái; 4. Tạo hiệu ứng các hạt bụi sao lấp lánh rơi quanh trang sách bằng 4 frame gán `(120ms)(replace)`; 5. Khung hình cuối hiển thị nút 'KHÁM PHÁ NGAY' nhấp nháy viền vàng dừng 1000ms."
    },
    {
      "type": "Kĩ năng tối ưu hóa tệp cho môi trường Web",
      "title": "Thu nhỏ dung lượng tệp ảnh động từ 15MB xuống dưới 1MB mà mắt thường không phân biệt được",
      "content": "Sau khi xuất ảnh GIF banner, kích thước tệp lên tới 15.4MB khiến trang web trường bị treo mỗi khi tải trang trên điện thoại di động.",
      "solution": "Mở lại tệp ảnh động trong GIMP, chạy lệnh Filters > Animation > Optimize (for GIF). Bộ lọc sẽ xóa bỏ 80% các điểm ảnh tĩnh không thay đổi giữa các frame. Tiếp theo vào Image > Mode > Indexed, giảm số lượng màu tối đa từ 256 xuống 128 màu kèm tính năng khuếch tán lỗi (Dithering). Dung lượng tệp giảm mạnh xuống chỉ còn 850KB trong khi hình ảnh vẫn sắc nét và chạy trơn tru."
    }
  ]
};
