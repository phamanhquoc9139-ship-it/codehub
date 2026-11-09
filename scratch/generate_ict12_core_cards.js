// Generator for ict12_core_cards.js
const fs = require('fs');

const coreCards = {
  1: [
    {
      title: "Khái niệm dự án & Tam giác ràng buộc",
      text: "Dự án là công việc tạo ra sản phẩm/kết quả duy nhất trong khoảng thời gian xác định; chịu sự chi phối chặt chẽ của 3 yếu tố ràng buộc: Mục tiêu phạm vi, Thời hạn tiến độ và Ngân sách nguồn lực."
    },
    {
      title: "Định dạng tệp dự án .gan của GanttProject",
      text: "GanttProject lưu trữ toàn bộ dữ liệu dự án (danh sách nhiệm vụ, quan hệ phụ thuộc, nguồn lực nhân sự, chi phí và lịch biểu) dưới định dạng tệp chuẩn mở XML có đuôi mở rộng là .gan."
    },
    {
      title: "Cấu trúc phân rã công việc (WBS phân cấp)",
      text: "Sử dụng thao tác Indent (thụt lề sang phải) để gom các nhiệm vụ con dưới một nhiệm vụ cha (Summary Task); thời lượng và ngày bắt đầu/kết thúc của nhiệm vụ cha được phần mềm tự động tính toán tổng hợp."
    },
    {
      title: "Dự án xuyên suốt Kỉ yếu lớp 12A1",
      text: "Dự án mẫu gồm 5 giai đoạn lớn: 1. Chuẩn bị kế hoạch -> 2. Viết kịch bản chi tiết -> 3. Thu thập tư liệu ảnh/video -> 4. Biên tập hậu kỳ dựng phim -> 5. Xuất bản và tổ chức buổi công chiếu kỉ yếu."
    }
  ],
  2: [
    {
      title: "Thời lượng và cơ chế tính ngày tự động",
      text: "Khai báo thời lượng (Duration theo ngày) và ngày bắt đầu sớm nhất (Earliest begin) trong Task Properties; phần mềm sẽ tự động loại trừ ngày nghỉ cuối tuần để tính toán chính xác ngày kết thúc."
    },
    {
      title: "Mốc sự kiện quan trọng (Milestone)",
      text: "Milestone đánh dấu thời điểm hoàn thành một giai đoạn then chốt; có thời lượng bằng đúng 0 ngày (Duration = 0), không tốn công nhân sự và được biểu diễn bằng hình thoi đặc trưng trên biểu đồ Gantt."
    },
    {
      title: "Quan hệ tiền nhiệm Predecessors (Finish-to-Start)",
      text: "Thiết lập liên kết phụ thuộc trong tab Predecessors: Kiểu FS (Finish-to-Start) quy định nhiệm vụ sau chỉ được bắt đầu khi nhiệm vụ trước đã hoàn tất; có thể gán thêm độ trễ (Lag) nếu cần thời gian chờ duyệt."
    },
    {
      title: "Tính nhất quán của chuỗi liên hoàn",
      text: "Không gõ ngày cố định bằng tay cho từng việc; việc mô hình hóa quan hệ tiền nhiệm giúp toàn bộ kế hoạch tự động dịch chuyển trơn tru khi một khâu phía trước bị dời lịch hoặc hoàn thành sớm."
    }
  ],
  3: [
    {
      title: "Khai báo danh mục nguồn lực (Resources)",
      text: "Thiết lập danh sách nhân sự tham gia dự án gồm: Tên thành viên (Name), Vai trò mặc định (Role như Đạo diễn, Quay phim), Định mức chi phí theo ngày (Standard rate) và Lịch nghỉ cá nhân (Days off)."
    },
    {
      title: "Tỉ lệ tham gia phân bổ (Units %)",
      text: "Mỗi nhiệm vụ có thể phân công một hoặc nhiều người đảm nhận với tỉ lệ phần trăm tham gia nhất định (mặc định 100% nghĩa là toàn thời gian trong ngày; 50% là bán thời gian nửa ngày)."
    },
    {
      title: "Công thức tự động tổng hợp kinh phí dự án",
      text: "GanttProject tự động tính toán chi phí theo công thức: Chi phí nhiệm vụ = Thời lượng (ngày) × Đơn giá tiền công × Tỉ lệ phân bổ; sau đó tự động cộng dồn thành tổng ngân sách toàn dự án."
    },
    {
      title: "Nhận diện & Xử lý quá tải nhân sự (Overload)",
      text: "Khi một người bị giao nhiều việc trùng lặp trong cùng một khoảng thời gian khiến tổng tỉ lệ vượt quá 100% (ví dụ 200%), Resource Chart sẽ báo động đỏ; cần giảm tỉ lệ, đổi người hoặc dời lịch để cân bằng."
    }
  ],
  4: [
    {
      title: "Vai trò đóng băng của Đường cơ sở (Baseline)",
      text: "Baseline lưu lại toàn bộ mốc ngày, thời lượng và kinh phí ban đầu sau khi kế hoạch được phê duyệt; đóng vai trò là chiếc 'thước đo mốc' cố định để so sánh, giám sát độ lệch thực tế trong suốt dự án."
    },
    {
      title: "Cập nhật tiến độ thực tế (% Progress)",
      text: "Cập nhật phần trăm khối lượng công việc đã hoàn thành (từ 0% đến 100%); trên biểu đồ Gantt, tiến độ được thể hiện bằng dải màu đậm lấp đầy dần từ trái sang phải bên trong thanh nhiệm vụ."
    },
    {
      title: "Ghi nhận ngày kết thúc thực tế",
      text: "Khi một nhiệm vụ xong sớm hoặc muộn hơn kế hoạch, cập nhật lại ngày kết thúc thực tế để phần mềm tự động điều chỉnh lịch trình của chuỗi nhiệm vụ phụ thuộc phía sau một cách chủ động."
    },
    {
      title: "Phân tích độ lệch so với Baseline",
      text: "Biểu đồ Gantt hiển thị song song thanh tiến độ thực tế phía trên và thanh Baseline phía dưới; giúp nhà quản trị phát hiện ngay khâu nào sớm, khâu nào trễ để có phương án bù tiến độ kịp thời."
    }
  ],
  5: [
    {
      title: "Tích hợp liên kết tài nguyên đám mây (Web Link)",
      text: "Trong thuộc tính nhiệm vụ, dán URL thư mục chia sẻ trên Google Drive vào trường Web Link; thành viên chỉ cần nhấp chuột vào biểu tượng liên kết trên GanttProject là mở ngay kịch bản hoặc thư mục ảnh cần xem."
    },
    {
      title: "Cấu trúc thư mục dự án trực tuyến khoa học",
      text: "Tổ chức cây thư mục lưu trữ chia sẻ rõ ràng: 01_Kich_ban, 02_Tu_lieu_anh_video, 03_Am_thanh_Foley, 04_Du_an_Gantt, 05_Xuat_ban; phân quyền truy cập Chỉnh sửa/Chỉ xem hợp lý cho từng nhóm phụ trách."
    },
    {
      title: "Tổng hợp và báo cáo dự án trực quan",
      text: "Xuất dữ liệu dự án dưới dạng hình ảnh biểu đồ Gantt, sơ đồ tư duy (Mindmap) hoặc tệp bảng tính; báo cáo rõ các công việc hoàn tất, công việc trễ hạn, mức tiêu hao kinh phí và các rủi ro phát sinh."
    },
    {
      title: "Lợi ích phần mềm QLDA & Vai trò con người",
      text: "Phần mềm mang lại cái nhìn toàn cảnh, tối ưu nguồn lực và hỗ trợ ra quyết định; tuy nhiên dữ liệu đầu vào phải chính xác và người quản trị phải thường xuyên tương tác, kiểm tra tiến độ ngoài thực tế."
    }
  ],
  6: [
    {
      title: "Tiêu chí xác định khi nào cần cài đặt / gỡ bỏ",
      text: "Cài mới khi có nhu cầu sử dụng công cụ; cài lại khi ứng dụng bị lỗi tệp thư viện hoặc xung đột hệ thống; gỡ bỏ khi phần mềm không còn dùng, không tương thích hoặc chiếm dụng tài nguyên ổ đĩa."
    },
    {
      title: "Gỡ bỏ phần mềm chuẩn mực trên Windows",
      text: "Vào Control Panel > Programs > Programs and Features (hoặc Settings > Apps > Installed apps), chọn ứng dụng cần gỡ và bấm Uninstall; xác nhận các bước và dọn sạch dữ liệu tạm khi có yêu cầu."
    },
    {
      title: "Phân biệt xóa Shortcut và gỡ bỏ phần mềm",
      text: "Nhấn Delete hoặc kéo biểu tượng Icon trên màn hình Desktop vào thùng rác chỉ là xóa lối tắt (.lnk), toàn bộ chương trình trong ổ C vẫn còn nguyên vẹn; bắt buộc phải chạy trình Uninstall để gỡ sạch."
    },
    {
      title: "Quản trị ứng dụng trên thiết bị di động",
      text: "Trên Android chạm giữ biểu tượng chọn 'Gỡ cài đặt' (ứng dụng hệ thống không thể gỡ); trên iOS chạm giữ chọn 'Xóa ứng dụng' để gỡ sạch hoàn toàn, phân biệt với 'Xóa khỏi Màn hình chính' chỉ ẩn vào App Library."
    }
  ],
  7: [
    {
      title: "Nguyên tắc sao lưu dữ liệu sống còn trước khi cài OS",
      text: "Quá trình cài lại hệ điều hành sẽ định dạng (Format) lại phân vùng ổ C; bắt buộc phải sao lưu toàn bộ tệp cá nhân trên Desktop, Documents, Downloads sang ổ cứng phụ (D, E) hoặc USB/đám mây."
    },
    {
      title: "Tạo USB Boot chuẩn mực với công cụ Rufus",
      text: "Chuẩn bị USB tối thiểu 8GB (toàn bộ dữ liệu USB sẽ bị xóa); nạp file ảnh ISO chuẩn từ Microsoft; chọn sơ đồ phân vùng GPT cho chuẩn khởi động UEFI hiện đại, hoặc chọn MBR cho Legacy BIOS cũ."
    },
    {
      title: "Phím tắt truy cập Boot Menu & BIOS Setup",
      text: "Khởi động lại máy tính và nhấn liên tục phím tắt Boot Menu (phổ biến: F12, F11, F9, Esc hoặc F2/Del vào BIOS tùy theo hãng bo mạch chủ) để chọn ưu tiên khởi động từ chiếc USB cài đặt vừa tạo."
    },
    {
      title: "Các bước Windows Setup & Custom Installation",
      text: "Chọn ngôn ngữ và bàn phím US; chọn tùy chọn Custom: Install Windows only (advanced); chọn đúng phân vùng hệ thống cũ để format và cài đặt; tuyệt đối không tắt nguồn máy tính trong khi cài."
    }
  ],
  8: [
    {
      title: "Nhận diện các mối nguy hại đe dọa dữ liệu số",
      text: "Dữ liệu có thể bị xóa sổ do hỏng phần cứng ổ đĩa, lỗi người dùng bấm nhầm Shift+Delete, chập điện đột ngột, lỗi hệ điều hành và đặc biệt là sự tấn công của các loại mã độc phá hoại nguy hiểm."
    },
    {
      title: "Hiểm họa mã độc tống tiền Ransomware",
      text: "Ransomware là mã độc nguy hiểm nhất hiện nay, xâm nhập máy tính qua email lừa đảo hoặc tệp bẻ khóa, tự động mã hóa bất đối xứng toàn bộ tài liệu và đòi tiền chuộc để cung cấp khóa giải mã."
    },
    {
      title: "Chiến lược sao lưu dữ liệu kinh điển 3-2-1",
      text: "Quy tắc vàng: Duy trì ít nhất 3 bản sao dữ liệu (1 bản gốc + 2 bản sao lưu), lưu trên 2 loại phương tiện vật lý khác nhau (ổ cứng máy + ổ cứng ngoài), và có ít nhất 1 bản sao ngoại vi/đám mây."
    },
    {
      title: "Đồng bộ (Sync) KHÔNG thay thế được Sao lưu (Backup)",
      text: "Đồng bộ đám mây là tiến trình 2 chiều tức thì: nếu tệp trên máy bị virus mã hóa hoặc xóa nhầm, thao tác đó sẽ đồng bộ làm hỏng luôn bản trên mây; sao lưu độc lập có lưu lịch sử phiên bản mới là lá chắn an toàn."
    }
  ],
  9: [
    {
      title: "Cấu hình sao lưu phiên bản với Windows File History",
      text: "Bật File History trong Settings, trỏ tới ổ cứng ngoài; tính năng sẽ tự động quét và lưu các bản sao theo từng giờ; khi cần khôi phục, mở Restore personal files để duyệt lùi dòng thời gian lấy lại tệp cũ."
    },
    {
      title: "Đồng bộ sao lưu thư mục dự án với Google Drive",
      text: "Cài đặt Google Drive for Desktop, chọn lệnh 'Sync or Backup this folder' trỏ vào thư mục bài học; nhận diện đúng 3 trạng thái biểu tượng: Tích xanh (Hoàn tất), Xoay tròn (Đang đồng bộ), Chấm than đỏ (Bị lỗi)."
    },
    {
      title: "Nén và mã hóa mật khẩu mạnh mẽ với 7-Zip",
      text: "Nhấp phải chọn 7-Zip > Add to archive; chọn định dạng .7z, chọn phương thức mã hóa AES-256 và tích chọn 'Encrypt file names' để ngăn chặn hoàn toàn việc xem trộm danh sách tên tệp khi chưa có mật khẩu."
    },
    {
      title: "Quét diệt mã độc toàn diện với Microsoft Defender",
      text: "Cập nhật cơ sở dữ liệu nhận diện virus mới nhất trong Windows Security; thực hiện Quick Scan bộ nhớ hoặc nhấp phải vào ổ đĩa USB chọn 'Scan with Microsoft Defender' trước khi sao chép tài liệu."
    }
  ],
  10: [
    {
      title: "Công thức xác suất cổ điển P(A) = m(A) / n(A)",
      text: "Trong phép thử đồng khả năng, xác suất của biến cố A bằng tỉ số giữa số kết quả thuận lợi m(A) chia cho tổng số kết quả có thể xảy ra n(A); trong Excel tính riêng m và n bằng hàm tổ hợp rồi thực hiện phép chia."
    },
    {
      title: "Bộ ba hàm đếm tổ hợp và chỉnh hợp trong Excel",
      text: "Hàm COMBIN(n, k) tính tổ hợp không lặp, không thứ tự; hàm PERMUT(n, k) tính chỉnh hợp có thứ tự; hàm COMBINA(n, k) tính tổ hợp lặp (các phần tử có thể được chọn lặp lại nhiều lần)."
    },
    {
      title: "Hàm phân phối xác suất nhị thức BINOM.DIST",
      text: "Hàm BINOM.DIST(number_s, trials, probability_s, cumulative) tính xác suất có k lần thành công trong n phép thử độc lập; đặt cumulative = FALSE cho xác suất đúng k lần, TRUE cho xác suất tích lũy."
    },
    {
      title: "Hàm sinh số ngẫu nhiên & Cố định giá trị",
      text: "RAND() sinh số thực ngẫu nhiên trong [0; 1); RANDBETWEEN(bottom, top) sinh số nguyên ngẫu nhiên; sau khi tạo số ngẫu nhiên, sao chép và dùng Paste Special > Values để cố định dữ liệu không bị biến động."
    }
  ],
  11: [
    {
      title: "Bốn chỉ số đo xu thế trung tâm trong Excel",
      text: "Trung bình cộng Mean (AVERAGE), Trung vị Median (MEDIAN - giá trị đứng giữa, chống chịu ngoại lệ), Mốt Mode (MODE.SNGL/MODE.MULT - giá trị xuất hiện nhiều nhất) và Tứ phân vị Quartiles (QUARTILE.INC)."
    },
    {
      title: "Nguyên tắc chọn chỉ số đại diện khi có ngoại lệ",
      text: "Nếu dữ liệu đối xứng hình chuông thì dùng Trung bình cộng; nếu tập dữ liệu bị lệch mạnh hoặc xuất hiện các giá trị quá lớn/quá nhỏ bất thường (Outliers) thì Trung vị là chỉ số đại diện khách quan nhất."
    },
    {
      title: "Bốn thước đo độ phân tán dữ liệu",
      text: "Khoảng biến thiên Range = Max - Min; Khoảng tứ phân vị IQR = Q3 - Q1 (đo độ rộng 50% dữ liệu ở giữa); Phương sai VAR.S đo độ phân tán quanh trung bình; Độ lệch chuẩn STDEV.S đo độ lệch cùng đơn vị đo."
    },
    {
      title: "Hệ số biến thiên CV và tính đồng đều dữ liệu",
      text: "Công thức CV = (STDEV / AVERAGE) × 100%; là thước đo phân tán tương đối không phụ thuộc vào đơn vị đo hay thang điểm, giúp so sánh chính xác mức độ đồng đều giữa các tập dữ liệu khác nhau."
    }
  ],
  12: [
    {
      title: "Cấu trúc 4 phân vùng trong PivotTable Fields",
      text: "Phân bổ trường dữ liệu khoa học: Rows (tạo các dòng phân nhóm), Columns (tạo các cột phân nhóm chéo 2 chiều), Values (chứa dữ liệu cần đếm Count hoặc tính tổng Sum) và Filters (bộ lọc toàn bảng)."
    },
    {
      title: "Chuẩn hóa bảng dữ liệu nguồn trước khi tạo Pivot",
      text: "Bảng dữ liệu nguồn bắt buộc phải có một dòng tiêu đề cột duy nhất ở trên cùng, không được gộp ô (Merge Cells) ở dòng tiêu đề, và không được có dòng hoặc cột trống hoàn toàn làm đứt gãy bảng."
    },
    {
      title: "Hiển thị đồng thời Tần số và Tần suất (%)",
      text: "Kéo trường vào Values chọn hàm Count để đếm tần số; kéo tiếp trường đó vào Values lần thứ hai, mở Value Field Settings > Show Values As chọn '% of Grand Total' để hiển thị tỉ lệ phần trăm trên tổng thể."
    },
    {
      title: "Kĩ thuật ghép nhóm (Grouping) biến định lượng",
      text: "Nhấp phải vào một ô số liệu chọn Group...; chia miền biến thiên từ Min đến Max thành k khoảng đều nhau với độ rộng khoảng h = (Max - Min) / k để cô đọng bảng tần số ghép nhóm khoa học."
    }
  ],
  13: [
    {
      title: "Nguyên tắc chọn Biểu đồ cột vs Biểu đồ tròn",
      text: "Biểu đồ cột (Column / Bar) tối ưu để so sánh số lượng hoặc giá trị giữa các nhóm phân loại; Biểu đồ tròn (Pie) chỉ dùng để biểu diễn cơ cấu tỉ lệ các phần cấu thành một tổng thể 100% khi có dưới 6 thành phần."
    },
    {
      title: "Biểu đồ phân bố tần số Histogram",
      text: "Histogram trực quan hóa hình dạng phân bố tần số của biến định lượng liên tục qua các cột dính sát nhau không có khe hở (bins), giúp nhận diện dữ liệu có đối xứng chuẩn hình chuông hay bị lệch."
    },
    {
      title: "Biểu đồ Pareto & Nguyên lý tối ưu 80/20",
      text: "Pareto kết hợp các cột giá trị được xếp theo thứ tự giảm dần từ trái sang phải với một đường biểu diễn tỉ lệ phần trăm tích lũy, giúp nhà quản trị nhận diện ngay 20% nguyên nhân cốt lõi gây ra 80% vấn đề."
    },
    {
      title: "Bốn thành phần bắt buộc của biểu đồ chuẩn mực",
      text: "Biểu đồ báo cáo chuẩn mực bắt buộc phải có: Tiêu đề rõ ràng (Chart Title), Nhãn trục hoành và trục tung kèm đơn vị tính (Axis Titles), Chú giải (Legend) và Nhãn giá trị dữ liệu (Data Labels)."
    }
  ],
  14: [
    {
      title: "Bản chất mối liên hệ tương quan tuyến tính",
      text: "Tương quan tuyến tính đo lường xu hướng biến thiên đồng thời theo quy luật đường thẳng giữa 2 biến định lượng: Tương quan dương (r > 0, cùng chiều), Tương quan âm (r < 0, ngược chiều), Không tương quan (r ≈ 0)."
    },
    {
      title: "Miền giá trị và thang đo độ mạnh yếu của hệ số r",
      text: "Hệ số tương quan Pearson r nằm trong đoạn [-1; 1]; dấu của r chỉ hướng biến thiên; độ lớn |r| từ 0.7 đến 0.9 là tương quan mạnh, từ 0.9 đến 1.0 là tương quan rất mạnh (hoàn hảo khi |r| = 1)."
    },
    {
      title: "Cú pháp và điều kiện hàm CORREL trong Excel",
      text: "Sử dụng cú pháp =CORREL(array1, array2); hai dãy dữ liệu bắt buộc phải có cùng kích thước và các giá trị trên cùng một hàng phải được ghép cặp đúng từ cùng một đối tượng quan sát (tối thiểu từ 5 cặp)."
    },
    {
      title: "Tương quan (Correlation) KHÔNG LÀ Nhân quả (Causation)",
      text: "Hệ số tương quan cao chỉ chứng minh hai đại lượng biến thiên song hành cùng nhau, hoàn toàn không chứng minh biến X gây ra biến Y; sự đồng biến có thể do một biến ẩn thứ ba tác động lên cả hai."
    }
  ],
  15: [
    {
      title: "Logic suy diễn thống kê & Bộ giả thuyết H0 / H1",
      text: "Giả thuyết gốc H0 ngầm định 'không có sự khác biệt / bằng nhau'; Giả thuyết đối H1 là điều cần tìm bằng chứng để khẳng định (hai phía hoặc một phía); Mức ý nghĩa alpha thường chọn 0.05 (5%) hoặc 0.01 (1%)."
    },
    {
      title: "Ý nghĩa của p-value & Quy tắc quyết định vàng",
      text: "p-value là xác suất quan sát được kết quả cực đoan như mẫu nếu H0 đúng; Quy tắc quyết định: Nếu p-value ≤ alpha thì BÁC BỎ H0 (sự khác biệt có ý nghĩa thống kê); nếu p-value > alpha thì CHƯA ĐỦ BẰNG CHỨNG bác bỏ H0."
    },
    {
      title: "Kiểm định trung bình một mẫu với hàm Z.TEST",
      text: "Cú pháp =Z.TEST(array, x, [sigma]); kiểm tra giá trị trung bình của một mẫu so với mốc x; với kiểm định hai phía, SGK hướng dẫn tính p = 2 × MIN(Z.TEST, 1 - Z.TEST) rồi so sánh p với mức ý nghĩa alpha."
    },
    {
      title: "So sánh trung bình hai nhóm độc lập với hàm T.TEST",
      text: "Cú pháp =T.TEST(array1, array2, tails, type); so sánh trung bình hai nhóm mẫu; SGK khuyến nghị chọn tails = 2 (hai phía) và type = 3 (hai mẫu độc lập không giả định phương sai bằng nhau) để so sánh nam/nữ."
    }
  ]
};

fs.writeFileSync('scratch/ict12_core_cards.js', 'module.exports = ' + JSON.stringify(coreCards, null, 2) + ';\n', 'utf8');
console.log('Saved ict12_core_cards.js successfully');
