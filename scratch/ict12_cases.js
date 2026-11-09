module.exports = {
  "1": [
    {
      "type": "Tình huống khởi tạo dự án thực tế",
      "title": "Chuyển đổi danh sách 25 đầu việc kỉ yếu lớp 12A1 từ sổ tay sang GanttProject",
      "content": "Ban cán sự lớp 12A1 lên kế hoạch sản xuất video kỉ yếu tốt nghiệp với 25 đầu việc ghi chép rời rạc trong sổ tay. Khi giáo viên chủ nhiệm hỏi tiến độ và dự toán chi phí, nhóm trưởng lúng túng không thể tổng hợp được lộ trình cụ thể.",
      "solution": "Khởi tạo tệp dự án .gan trên GanttProject; khai báo tên dự án và ngày bắt đầu. Tổ chức 25 đầu việc thành cấu trúc phân cấp WBS gồm 5 giai đoạn lớn (Chuẩn bị, Kịch bản, Thu thập tư liệu, Dựng phim, Công chiếu). Dùng nút Indent để gom các nhiệm vụ con, giúp phần mềm tự động tính toán tổng thời lượng và hiển thị trực quan toàn bộ dự án."
    },
    {
      "type": "Kĩ năng phân cấp nhiệm vụ WBS",
      "title": "Khắc phục lỗi nhiệm vụ con hiển thị ngang hàng làm sai lệch thời gian toàn dự án",
      "content": "Khi nhập danh mục công việc, học sinh để các mục 'Quay cảnh lớp học', 'Quay phỏng vấn thầy cô' nằm ngang hàng với tiêu đề lớn 'Thu thập ảnh và video', dẫn đến phần mềm cộng dồn nối tiếp làm kéo dài thời gian dự án vô lý.",
      "solution": "Chọn các nhiệm vụ thành phần cụ thể và bấm nút Indent (hoặc phím tắt thụt lề sang phải). Các nhiệm vụ này sẽ tự động trở thành nhiệm vụ con của mục 'Thu thập ảnh và video'. Khi đó, mục cha sẽ tự động tính ngày bắt đầu sớm nhất và kết thúc muộn nhất của các con mà không cộng dồn thời lượng sai lệch."
    }
  ],
  "2": [
    {
      "type": "Tình huống điều phối tiến độ liên hoàn",
      "title": "Mô hình hóa quan hệ tiền nhiệm Finish-to-Start để tự động trượt lịch khi kịch bản bị sửa",
      "content": "Khâu 'Viết kịch bản chi tiết' bị kéo dài thêm 3 ngày do phải chỉnh sửa lại cốt truyện. Nhóm quay phim không nắm được sự chậm trễ này nên vẫn chuẩn bị thiết bị theo lịch cũ, gây lãng phí công sức chờ đợi.",
      "solution": "Mở Task Properties của nhiệm vụ 'Quay phim tư liệu', sang tab Predecessors thêm nhiệm vụ tiền nhiệm là 'Viết kịch bản' với kiểu liên kết FS (Finish-to-Start). Khi khâu kịch bản kéo dài thêm 3 ngày, toàn bộ lịch quay phim và các khâu hậu kỳ phía sau sẽ tự động trượt lùi 3 ngày trên biểu đồ Gantt, đảm bảo tính nhất quán tuyệt đối."
    },
    {
      "type": "Kĩ năng thiết lập mốc Milestone chuẩn xác",
      "title": "Tạo sự kiện 'Duyệt kịch bản lần cuối' và 'Công chiếu video' không làm tăng thời lượng",
      "content": "Nhóm cần đánh dấu ngày Ban giám hiệu duyệt kịch bản và ngày phát hành video kỉ yếu, nhưng khi tạo nhiệm vụ mới và để thời lượng 1 ngày thì lịch toàn dự án bị kéo dài thêm 1 ngày không cần thiết.",
      "solution": "Mở Task Properties của nhiệm vụ, trong tab General tích chọn vào ô vuông 'Milestone'. Phần mềm sẽ tự động gán thời lượng bằng 0 ngày và chuyển đổi biểu tượng thanh thời gian thành hình thoi màu đen đặc trưng trên biểu đồ Gantt, đóng vai trò là cột mốc kiểm soát tiến độ hoàn hảo mà không tiêu tốn thời gian."
    }
  ],
  "3": [
    {
      "type": "Tình huống giải quyết quá tải nguồn lực",
      "title": "Xử lý xung đột nhân sự khi thành viên bị giao đồng thời hai nhiệm vụ toàn thời gian",
      "content": "Bạn Nam vừa đảm nhận vai trò Đạo diễn kiêm luôn Dựng phim. Trong tuần thứ 3, bạn bị phân công 100% cho việc 'Quay bổ sung ngoại cảnh' và 100% cho việc 'Cắt nối clip thô', khiến biểu đồ Resource Chart báo động đỏ 200%.",
      "solution": "Giải pháp điều phối chuẩn mực: 1. Giảm tỉ lệ tham gia của Nam trong mỗi nhiệm vụ xuống 50% nếu bạn có thể chia nửa ngày làm việc này, nửa ngày làm việc kia; hoặc 2. Chuyển khâu 'Cắt nối clip thô' cho bạn Hoa (đang có tải 0%) đảm nhận; hoặc 3. Dời lịch cắt clip bắt đầu sau khi khâu quay ngoại cảnh hoàn tất."
    },
    {
      "type": "Kĩ năng kiểm soát dự toán kinh phí",
      "title": "Kiểm soát chi phí thuê máy quay và bồi dưỡng ê-kíp theo hạn mức 3.000.000 đồng",
      "content": "Lớp cấp ngân sách 3.000.000 đồng để làm kỉ yếu. Nhóm cần tính toán chi phí công cho 5 thành viên và chi phí thuê chân máy, flycam để đảm bảo không bị vượt quá ngân sách tài trợ.",
      "solution": "Mở danh sách Resources, khai báo tên các thành viên và thiết bị kèm đơn giá ngày công (Standard rate). Gán nhân sự và thiết bị vào từng nhiệm vụ với tỉ lệ phân bổ phù hợp. GanttProject sẽ tự động nhân thời lượng với đơn giá và tổng hợp chi phí toàn dự án; đối chiếu với con số 3 triệu để kịp thời cắt giảm khâu phát sinh."
    }
  ],
  "4": [
    {
      "type": "Kĩ năng đối chiếu đường cơ sở Baseline",
      "title": "Sử dụng Baseline chứng minh tiến độ dự án bị chậm 2 ngày do thời tiết mưa bão",
      "content": "Trong buổi họp giao ban giữa kì, ban cán sự lớp tranh cãi gay gắt về việc dự án đang nhanh hay chậm so với kế hoạch ban đầu, nhưng không ai nhớ chính xác ngày hẹn xuất bản gốc.",
      "solution": "Sau khi kế hoạch ban đầu được duyệt, nhóm trưởng đã bấm Project > Baselines > Create Baseline để lưu lại kế hoạch chuẩn. Trên biểu đồ Gantt, mở tính năng hiển thị Baseline: bên dưới thanh nhiệm vụ thực tế sẽ xuất hiện thanh Baseline màu xám cố định; so sánh hai thanh cho thấy khâu quay phim bị dời chậm đúng 2 ngày so với kế hoạch gốc."
    },
    {
      "type": "Tình huống quản trị thay đổi tích cực",
      "title": "Đẩy sớm tiến độ công chiếu khi khâu thu thập ảnh tư liệu hoàn thành trước 1 ngày",
      "content": "Nhờ cả lớp tích cực gửi ảnh cũ qua Google Drive, khâu 'Thu thập ảnh tư liệu' hoàn tất sớm hơn dự kiến 1 ngày. Nhóm trưởng muốn tận dụng cơ hội này để đẩy nhanh tiến độ toàn dự án.",
      "solution": "Mở thuộc tính nhiệm vụ thu thập ảnh, cập nhật ngày kết thúc thực tế sớm hơn 1 ngày và đẩy tỉ lệ hoàn thành lên 100%. Nhờ có liên kết Finish-to-Start (FS), khâu 'Dựng phim hậu kỳ' tự động bắt đầu sớm hơn 1 ngày, giúp toàn bộ video kỉ yếu hoàn thành trước thời hạn, tạo thêm thời gian chuẩn bị cho buổi công chiếu."
    }
  ],
  "5": [
    {
      "type": "Kĩ năng tích hợp tài nguyên đám mây",
      "title": "Gắn liên kết thư mục Google Drive vào từng đầu việc trên GanttProject",
      "content": "Các thành viên nhóm dựng phim thường xuyên làm phiền nhóm trưởng để xin link tải kịch bản phân cảnh, link tải bài hát nhạc nền và link thư mục chứa 500 ảnh kỉ yếu nằm rải rác trên mạng xã hội.",
      "solution": "Tạo thư mục Google Drive dự án với cấu trúc khoa học: 01_Kich_ban, 02_Anh_video, 03_Nhac_nen. Lấy liên kết chia sẻ của từng thư mục, mở Task Properties của nhiệm vụ tương ứng trên GanttProject và dán vào trường 'Web Link'. Thành viên chỉ cần nhấp chuột vào biểu tượng quả cầu liên kết trên phần mềm là mở ngay tư liệu cần làm."
    },
    {
      "type": "Kĩ năng báo cáo tổng kết dự án số",
      "title": "Xuất dữ liệu dự án trình bày trước Hội đồng phụ huynh và Ban giám hiệu",
      "content": "Kết thúc dự án, nhóm trưởng cần làm báo cáo minh bạch về quá trình triển khai, khối lượng công việc của từng học sinh và quyết toán kinh phí đã sử dụng.",
      "solution": "Sử dụng tính năng Project > Export của GanttProject để xuất biểu đồ Gantt dạng ảnh PNG độ phân giải cao và xuất bảng tính chi phí dạng CSV/Excel. Kết hợp sơ đồ tư duy Mindmap tóm lược 5 cột mốc quan trọng, minh chứng toàn bộ 25 đầu việc hoàn thành 100% và tiết kiệm được 250.000 đồng so với dự toán ban đầu."
    }
  ],
  "6": [
    {
      "type": "Tình huống giải phóng dung lượng ổ C",
      "title": "Khắc phục tình trạng ổ đĩa C báo đỏ do học sinh kéo icon phần mềm vào thùng rác",
      "content": "Máy tính phòng thực hành tin học bị đầy bộ nhớ ổ C. Một số học sinh muốn dọn dẹp nên chọn biểu tượng các game nặng ngoài màn hình Desktop rồi nhấn phím Delete, nhưng dung lượng ổ C vẫn đỏ quạch không hề giảm bớt.",
      "solution": "Giải thích cho học sinh: Thao tác xóa ngoài Desktop chỉ xóa tệp lối tắt Shortcut (.lnk) dung lượng vài KB. Hướng dẫn quy trình chuẩn: Mở Control Panel > Programs > Programs and Features (hoặc Settings > Apps > Installed apps), chọn đúng phần mềm cần gỡ, bấm Uninstall và làm theo trình hướng dẫn để xóa sạch mã nguồn và dữ liệu tạm khỏi ổ C."
    },
    {
      "type": "Kĩ năng quản trị ứng dụng di động an toàn",
      "title": "Xử lý điện thoại Android bị nhiễm mã độc quảng cáo liên tục sau khi cài file APK lạ",
      "content": "Một bạn học sinh tải file APK chỉnh sửa ảnh từ một trang web không rõ nguồn gốc về cài đặt trên điện thoại Android, sau đó màn hình liên tục nhảy quảng cáo rác đè lên các ứng dụng khác.",
      "solution": "Vào Cài đặt (Settings) > Ứng dụng (Apps) > Quản lý ứng dụng; tìm ứng dụng vừa cài đặt (thường có biểu tượng trong suốt hoặc không có tên), chọn 'Buộc dừng' (Force stop) rồi chọn 'Gỡ cài đặt' (Uninstall). Khuyến cáo học sinh chỉ cài đặt ứng dụng từ kho chính thức Google Play hoặc Apple App Store."
    }
  ],
  "7": [
    {
      "type": "Tình huống sao lưu bảo toàn dữ liệu khi cài OS",
      "title": "Cài lại hệ điều hành Windows sạch sẽ mà không làm mất dữ liệu học tập trên ổ D",
      "content": "Máy tính bị nhiễm virus làm hỏng tệp hệ thống, khởi động rất chậm. Học sinh cần cài lại Windows 11 nhưng rất lo sợ bị mất toàn bộ tài liệu ôn thi THPT Quốc gia lưu trong máy.",
      "solution": "Quy trình an toàn: 1. Khởi động máy, sao chép toàn bộ tệp quan trọng từ Desktop, Documents, Downloads sang ổ D hoặc tải lên Google Drive; 2. Khởi động từ USB Boot Rufus, chọn Custom: Install Windows only (advanced); 3. Tuyệt đối chỉ Format phân vùng ổ C (Drive 0 Partition 3), giữ nguyên vẹn phân vùng ổ D (Data) để sau khi cài xong dữ liệu vẫn còn nguyên vẹn."
    },
    {
      "type": "Kĩ năng cấu hình Rufus chuẩn UEFI / GPT",
      "title": "Khắc phục lỗi máy tính đời mới không nhận USB Boot do chọn nhầm chuẩn MBR",
      "content": "Học sinh dùng Rufus tạo USB cài Windows cho laptop Dell đời mới chạy chuẩn UEFI, nhưng khi bấm F12 vào Boot Menu thì danh sách thiết bị hoàn toàn không hiển thị chiếc USB.",
      "solution": "Nguyên nhân do trong Rufus học sinh đã để mặc định Partition scheme là MBR (dành cho Legacy BIOS cũ). Khắc phục: Mở lại Rufus, chọn tệp ISO Windows, tại mục Partition scheme chọn chuẩn 'GPT', mục Target system tự động chọn 'UEFI (non CSM)'. Tạo lại USB, máy tính sẽ nhận diện ngay lập tức trong Boot Menu."
    }
  ],
  "8": [
    {
      "type": "Tình huống ứng phó hiểm họa Ransomware",
      "title": "Phòng chống mã độc tống tiền mã hóa toàn bộ tiểu luận tốt nghiệp của học sinh",
      "content": "Một bạn học sinh tải bộ cài game 'bẻ khóa' từ diễn đàn mạng, sau khi giải nén chạy thử thì toàn bộ tài liệu Word, Excel trong máy bị đổi đuôi thành .locked và màn hình hiện thông báo đòi 300 USD tiền chuộc.",
      "solution": "Nhận diện đây là mã độc tống tiền Ransomware. Tuyệt đối không trả tiền chuộc vì kẻ xấu thường không gửi khóa giải mã. Ngắt kết nối mạng ngay lập tức để tránh lây lan trong mạng gia đình. Cài lại hệ điều hành sạch sẽ và khôi phục dữ liệu từ bản sao lưu ngoại vi hoặc từ lịch sử phiên bản đám mây đã thiết lập từ trước."
    },
    {
      "type": "Kĩ năng thực thi quy tắc sao lưu 3-2-1",
      "title": "Bảo vệ an toàn tuyệt đối cho đồ án kỉ yếu trước nguy cơ cháy nổ chập điện ổ cứng",
      "content": "Nhóm làm phim kỉ yếu chỉ lưu video thành phẩm trên ổ cứng laptop và cắm sẵn một ổ cứng di động trong máy. Đêm hôm đó, sự cố chập điện nguồn làm cháy hỏng cả bo mạch laptop lẫn ổ cứng ngoài.",
      "solution": "Phân tích bài học: Nhóm đã vi phạm quy tắc 3-2-1 vì hai thiết bị nằm cùng một vị trí vật lý. Thực hành chuẩn: 1. Bản gốc trên laptop; 2. Bản sao trên ổ cứng ngoài (rút ra cất tủ sau khi copy); 3. Bản sao thứ ba bắt buộc phải tải lên dịch vụ đám mây (Google Drive / OneDrive) đặt tại vị trí ngoại vi để khi máy hỏng vẫn tải về được 100%."
    }
  ],
  "9": [
    {
      "type": "Kĩ năng khôi phục tệp bị sửa đè với File History",
      "title": "Lấy lại 15 trang đề cương ôn tập môn Tin học bị bạn cùng nhóm lưu đè nhầm",
      "content": "Hai bạn cùng làm chung tài liệu đề cương trên máy tính. Bạn A vô tình chọn Select All xóa sạch và gõ nội dung mới rồi bấm Save, làm mất toàn bộ 15 trang tài liệu viết công phu từ hôm trước.",
      "solution": "Nhờ đã bật tính năng File History trỏ vào ổ cứng ngoài từ trước: Mở thư mục chứa tệp, chọn tệp đề cương -> nhấp vào thẻ Home chọn nút 'History' (hoặc mở Restore personal files). Duyệt thanh thời gian về thời điểm ngày hôm trước khi chưa bị xóa đè, chọn phiên bản hoàn chỉnh và bấm nút Restore màu xanh để khôi phục nguyên vẹn."
    },
    {
      "type": "Kĩ năng nén và mã hóa mật khẩu cấp độ cao với 7-Zip",
      "title": "Bảo mật danh sách thông tin cá nhân và số điện thoại học sinh khi gửi qua mạng",
      "content": "Bí thư Đoàn trường cần gửi tệp Excel chứa dữ liệu cá nhân, số căn cước công dân và điểm số của 400 đoàn viên cho Huyện đoàn qua email, đòi hỏi bảo mật tuyệt đối chống lộ lọt thông tin.",
      "solution": "Sử dụng tiện ích 7-Zip: Nhấp phải vào tệp Excel chọn 7-Zip > Add to archive. Chọn Archive format là '.7z', tại phần Encryption nhập mật khẩu dài trên 12 ký tự (chữ hoa, thường, số, ký tự đặc biệt), chọn mã hóa AES-256 và tích chọn 'Encrypt file names'. Gửi tệp nén qua email và nhắn mật khẩu mở tệp qua kênh tin nhắn riêng biệt an toàn."
    }
  ],
  "10": [
    {
      "type": "Tình huống giải toán xác suất cổ điển trên Excel",
      "title": "Tính xác suất chọn ngẫu nhiên đội tuyển học sinh giỏi gồm cả nam và nữ",
      "content": "Đoàn trường có 12 bạn nữ và 8 bạn nam đạt tiêu chuẩn. Cần chọn ngẫu nhiên 4 bạn đại diện đi dự Đại hội Thanh niên tiên tiến. Cần tính xác suất để chọn được đúng 2 bạn nam và 2 bạn nữ.",
      "solution": "Áp dụng công thức P(A) = m(A) / n(A) trong Excel: Ô B1 tính tổng số cách n: =COMBIN(20, 4) ra 4.845 cách; Ô B2 tính số cách chọn 2 nam: =COMBIN(8, 2) ra 28 cách; Ô B3 tính số cách chọn 2 nữ: =COMBIN(12, 2) ra 66 cách; Ô B4 tính số cách thuận lợi m: =B2*B3 ra 1.848 cách; Ô B5 tính xác suất: =B4/B1 ra kết quả xấp xỉ 0.3814 (38.14%)."
    },
    {
      "type": "Kĩ năng chọn mẫu ngẫu nhiên không thiên vị",
      "title": "Bốc thăm ngẫu nhiên 5 bạn học sinh kiểm tra vở ghi bằng hàm RANDBETWEEN",
      "content": "Giáo viên chủ nhiệm muốn chọn ngẫu nhiên 5 bạn trong danh sách lớp 40 học sinh để kiểm tra sách vở đầu giờ một cách hoàn toàn khách quan, tránh bị phàn nàn là gọi thiên vị.",
      "solution": "Trong Excel, lập cột số ngẫu nhiên dùng công thức =RANDBETWEEN(1, 40) kết hợp hàm VLOOKUP để tự động tra cứu họ tên học sinh tương ứng với số thứ tự. Sau khi có 5 tên học sinh, sao chép vùng đó và nhấn Paste Special > Values để cố định danh sách, tránh việc bảng tính tự đổi tên khi giáo viên nhập điểm."
    }
  ],
  "11": [
    {
      "type": "Tình huống chọn chỉ số đại diện khi có ngoại lệ",
      "title": "Nhận diện sự sai lệch của Trung bình cộng khi khảo sát tiền tiêu vặt của học sinh",
      "content": "Khảo sát tiền tiêu vặt hàng tuần của 30 học sinh trong lớp: 29 bạn có mức tiêu vặt từ 50.000đ đến 100.000đ, riêng 1 bạn con nhà giàu có mức tiêu vặt 20.000.000đ. Ban cán sự dùng hàm AVERAGE ra mức bình quân 740.000đ/bạn.",
      "solution": "Con số 740.000đ hoàn toàn sai lệch so với thực tế của 97% học sinh do giá trị ngoại lệ 20 triệu kéo vọt mức trung bình lên. Giải pháp chuẩn thống kê: Sử dụng hàm =MEDIAN(vùng) ra kết quả 75.000đ và Khoảng tứ phân vị =QUARTILE.INC(vùng, 3) - QUARTILE.INC(vùng, 1) để phản ánh trung thực mức chi tiêu phổ biến của đa số học sinh."
    },
    {
      "type": "Kĩ năng so sánh độ đồng đều bằng Hệ số biến thiên CV",
      "title": "So sánh mức độ ổn định điểm số giữa môn Toán (thang 10) và môn Tiếng Anh (thang 100)",
      "content": "Lớp 12A1 thi thử môn Toán có điểm trung bình 8.0, độ lệch chuẩn 1.2; thi thử môn Tiếng Anh có điểm trung bình 75, độ lệch chuẩn 9.0. Giáo viên muốn biết học sinh học đều môn nào hơn.",
      "solution": "Không thể so sánh trực tiếp độ lệch chuẩn 1.2 với 9.0 vì hai môn khác thang điểm. Tính hệ số biến thiên: CV Toán = (1.2 / 8.0) * 100% = 15.0%; CV Tiếng Anh = (9.0 / 75) * 100% = 12.0%. Kết luận: Vì CV Tiếng Anh (12%) nhỏ hơn CV Toán (15%) nên điểm số môn Tiếng Anh của lớp có độ phân tán thấp hơn, học sinh học đồng đều và ổn định hơn môn Toán."
    }
  ],
  "12": [
    {
      "type": "Kĩ năng tổng hợp dữ liệu khảo sát đa chiều",
      "title": "Lập bảng tổng hợp chéo 2 chiều kết quả thi khảo sát phân loại theo Giới tính và Ban học",
      "content": "Tệp Excel chứa danh sách 600 học sinh khối 12 gồm các cột: Họ tên, Giới tính (Nam/Nữ), Ban học (Tự nhiên/Xã hội) và Điểm tổng. Ban giám hiệu yêu cầu báo cáo ngay số lượng và điểm trung bình của từng nhóm.",
      "solution": "Chọn toàn bộ bảng dữ liệu, vào Insert > PivotTable. Kéo trường 'Ban học' vào vùng Rows, kéo trường 'Giới tính' vào vùng Columns, kéo trường 'Điểm tổng' vào vùng Values hai lần: lần 1 chọn hàm Count (đổi tên thành Số lượng), lần 2 chọn hàm Average (đổi tên thành Điểm TB). Chỉ mất 10 giây để có bảng tổng hợp chéo 2 chiều hoàn hảo trình Ban giám hiệu."
    },
    {
      "type": "Kĩ năng ghép nhóm Grouping điểm thi",
      "title": "Tạo bảng phân bố tần số điểm thi tốt nghiệp theo các khoảng 5 điểm",
      "content": "Danh sách điểm thi tốt nghiệp tổ hợp Khoa học tự nhiên của 300 học sinh dao động từ 11.2 đến 28.6 điểm. Nếu đưa vào PivotTable thì có tới hàng trăm dòng điểm lẻ chi li khó quan sát xu hướng.",
      "solution": "Trong bảng PivotTable, nhấp chuột phải vào một ô điểm số bất kì trong cột Rows -> chọn lệnh 'Group...'. Trong hộp thoại Grouping, nhập Starting at: 10, Ending at: 30, By: 5. Phần mềm sẽ tự động gom toàn bộ điểm số thành 4 khoảng gọn gàng: 10-15, 15-20, 20-25, 25-30 kèm số lượng học sinh trong từng mức."
    }
  ],
  "13": [
    {
      "type": "Tình huống lựa chọn biểu đồ báo cáo chuẩn xác",
      "title": "Chuyển đổi biểu đồ cơ cấu chi phí quỹ lớp từ dạng Cột sang dạng Tròn",
      "content": "Thủ quỹ lớp vẽ biểu đồ cột dọc để trình bày các khoản chi của quỹ lớp (In tài liệu 45%, Mua quà sinh nhật 25%, Mua nước uống 15%, Dã ngoại 15%) nhưng phụ huynh thấy khó hình dung cơ cấu tổng thể.",
      "solution": "Nguyên tắc trực quan hóa: Khi muốn thể hiện tỉ lệ phần trăm các thành phần cấu thành một tổng thể 100% và số lượng nhóm nhỏ hơn 6, bắt buộc phải dùng Biểu đồ tròn (Pie Chart). Chuyển sang Pie Chart, hiển thị nhãn Data Labels dạng phần trăm kèm tên mục, giúp phụ huynh thấy rõ ngay lát cắt in tài liệu chiếm gần một nửa tổng quỹ."
    },
    {
      "type": "Kĩ năng ứng dụng biểu đồ Pareto tìm nguyên nhân cốt lõi",
      "title": "Xác định 20% nguyên nhân chính gây ra 80% trường hợp học sinh vi phạm nội quy",
      "content": "Đoàn trường thống kê 500 lượt vi phạm nội quy gồm: Đi muộn, Không mặc đồng phục, Sử dụng điện thoại, Ăn quà vặt, Không đeo thẻ, Nói chuyện riêng. Cần tìm giải pháp chấn chỉnh hiệu quả nhất.",
      "solution": "Chọn bảng số liệu vi phạm, vào Insert > Charts > chọn biểu đồ 'Pareto'. Biểu đồ tự động sắp xếp các cột vi phạm giảm dần từ trái sang phải kèm đường tích lũy phần trăm. Kết quả chỉ ra 2 hành vi 'Đi muộn' (280 vụ) và 'Không mặc đồng phục' (130 vụ) chiếm tới 82% tổng số vi phạm. Ban chấp hành Đoàn chỉ cần tập trung kiểm soát 2 khâu này ở cổng trường là giải quyết được hơn 80% vấn đề."
    }
  ],
  "14": [
    {
      "type": "Kĩ năng đo lường tương quan học tập",
      "title": "Tính hệ số tương quan giữa điểm thi môn Toán và điểm thi môn Vật lí khối 12",
      "content": "Ban chuyên môn muốn đánh giá xem học sinh đạt điểm cao môn Toán có xu hướng đạt điểm cao môn Vật lí hay không dựa trên kết quả thi học kì 1 của 35 học sinh lớp 12A1.",
      "solution": "Đảm bảo hai cột điểm Toán (vùng C2:C36) và Vật lí (vùng D2:D36) cùng thuộc về 35 học sinh ghép cặp chuẩn xác. Tại ô F2 nhập công thức =CORREL(C2:C36, D2:D36) cho ra kết quả r = 0.842. Diễn giải thống kê: Vì r > 0 và nằm trong khoảng 0.7 - 0.9 nên có mối liên hệ tương quan thuận (dương) mức độ mạnh giữa kết quả học tập hai môn."
    },
    {
      "type": "Tình huống tránh ngụy biện nhân quả trong phân tích dữ liệu",
      "title": "Phản bác nhận định sai lầm 'Uống nhiều cà phê làm tăng nguy cơ tai nạn giao thông'",
      "content": "Một báo cáo điều tra chỉ ra hệ số tương quan giữa lượng tiêu thụ cà phê tại các trạm dừng nghỉ và số vụ tai nạn giao thông trên tuyến quốc lộ là r = 0.88, từ đó kết luận chất caffeine trong cà phê gây ra tai nạn.",
      "solution": "Chỉ ra lỗi ngụy biện kinh điển trong thống kê: Tương quan không đồng nghĩa với Nhân quả (Correlation is not Causation). Thực chất ở đây có một biến ẩn thứ ba tác động lên cả hai: Đó là 'Lưu lượng xe cộ đông đúc và các chuyến xe chạy đường dài ban đêm'. Lái xe ban đêm đông thì mua cà phê nhiều hơn để chống buồn ngủ, đồng thời nguy cơ tai nạn ban đêm cũng cao hơn; cà phê hoàn toàn không phải nguyên nhân gây tai nạn."
    }
  ],
  "15": [
    {
      "type": "Tình huống kiểm định trung bình một mẫu Z.TEST",
      "title": "Kiểm tra tuyên bố 'Thời lượng pin điện thoại trung bình đạt 12 giờ' của nhà sản xuất",
      "content": "Nhà sản xuất công bố pin dòng điện thoại mới đạt trung bình 12.0 giờ. Hội Bảo vệ người tiêu dùng đo thử nghiệm trên 36 chiếc điện thoại ngẫu nhiên cho kết quả trung bình 11.4 giờ với độ lệch chuẩn mẫu 1.5 giờ. Cần kiểm tra ở mức ý nghĩa 5%.",
      "solution": "Thiết lập giả thuyết: H0: μ = 12.0 giờ; H1: μ < 12.0 giờ (kiểm định 1 phía). Nhập công thức trong Excel =Z.TEST(vùng_pin, 12) ra kết quả p-value = 0.0082. So sánh với mức ý nghĩa alpha = 0.05: Vì p-value (0.0082) < 0.05 nên ta BÁC BỎ giả thuyết gốc H0. Kết luận: Có bằng chứng thống kê vững chắc khẳng định thời lượng pin thực tế thấp hơn mức 12 giờ quảng cáo."
    },
    {
      "type": "Kĩ năng kiểm định so sánh hai nhóm T.TEST",
      "title": "Đánh giá hiệu quả phương pháp giảng dạy ứng dụng CNTT so với phương pháp truyền thống",
      "content": "Giáo viên dạy thử nghiệm phương pháp ứng dụng phần mềm cho lớp 12A (25 học sinh) và dạy phương pháp thuyết trình truyền thống cho lớp 12B (24 học sinh). Kết quả bài kiểm tra chuẩn hóa được ghi lại ở hai cột.",
      "solution": "Thiết lập giả thuyết: H0: Điểm trung bình hai lớp bằng nhau (μA = μB); H1: Điểm trung bình hai lớp có sự khác biệt (μA ≠ μB). Sử dụng hàm T.TEST với kiểm định hai phía (tails = 2) và hai mẫu độc lập không giả định phương sai bằng nhau (type = 3): =T.TEST(C2:C26, D2:D25, 2, 3) ra p-value = 0.024. Vì 0.024 < 0.05 nên bác bỏ H0; phương pháp giảng dạy mới tạo ra sự khác biệt có ý nghĩa thống kê thực sự."
    }
  ]
};
