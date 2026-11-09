// 2 Practical Cases / Real-world Project Scenarios for Section D of all 15 lessons in Chuyên đề Tin học 10 ICT
module.exports = {
  1: [
    {
      type: "Tình huống chuẩn hóa văn bản",
      title: "Khắc phục hiện tượng tiêu đề cẩm nang hiển thị lộn xộn trong Navigation Pane",
      content: "Nhóm soạn thảo Cẩm nang du lịch Sa Pa mở ngăn Navigation Pane thì thấy mục '2. Khám phá đỉnh Fansipan' lại bị thụt lề sâu hơn mục '1. Thung lũng Mường Hoa', đồng thời một số đoạn văn nội dung thường cũng xuất hiện trong danh sách tiêu đề.",
      solution: "Nguyên nhân do người soạn thảo đã gán nhầm cấp Style: mục 1 gán Heading 1 nhưng mục 2 lại gán Heading 3, và một đoạn văn bản thường bị gán nhầm Heading. Cách xử lí: Bôi đen mục 2 và gán lại đúng kiểu Heading 1; bôi đen đoạn văn bị lẫn và gán lại kiểu Normal. Mở lại Navigation Pane để kiểm tra cây phân cấp đã thẳng hàng, đúng thứ tự."
    },
    {
      type: "Tình huống tùy biến giao diện",
      title: "Đồng bộ phông chữ tiếng Việt cho toàn bộ tài liệu bằng lệnh Modify Style",
      content: "Khi nộp bản thảo cẩm nang, giáo viên yêu cầu toàn bộ các tiêu đề chính (Heading 1) phải đổi sang phông chữ Arial, cỡ 16, in đậm và màu xanh đậm thương hiệu du lịch. Nhóm lo lắng vì tài liệu dài hơn 20 trang nếu sửa tay từng dòng sẽ rất mất thời gian.",
      solution: "Giải pháp nhanh chóng: Không cần bôi đen từng tiêu đề trên các trang. Trong thẻ Home, nhóm Styles, nhấp chuột phải vào mẫu Heading 1 -> Chọn Modify... -> Tại bảng thuộc tính, chọn phông Arial, cỡ chữ 16, chọn chữ đậm (B) và chọn màu xanh đậm -> Nhấn OK. Toàn bộ các tiêu đề Heading 1 trong suốt 20 trang tài liệu sẽ lập tức được tự động cập nhật đồng bộ chỉ trong 2 giây."
    }
  ],
  2: [
    {
      type: "Tình huống dàn trang & Wrap Text",
      title: "Khắc phục lỗi văn bản bị đẩy dạt lung tung và chừa khoảng trống lớn khi chèn ảnh",
      content: "Khi chèn bức ảnh toàn cảnh vịnh Hạ Long vào giữa bài viết, bức ảnh chiếm trọn một khoảng trắng lớn, đẩy hai dòng chữ ra xa tít mép trên và mép dưới trang giấy, khiến trang cẩm nang bị rời rạc, mất thẩm mỹ.",
      solution: "Hiện tượng này do ảnh đang ở chế độ mặc định 'In Line with Text' (hoặc 'Top and Bottom'). Cách khắc phục: Chọn bức ảnh -> Vào thẻ ngữ cảnh Picture Format -> Chọn Wrap Text -> Đổi sang kiểu 'Square' (hoặc 'Tight'). Sau đó kéo rê ảnh về góc phải đoạn văn; văn bản sẽ tự động bao bọc vuông vức, mềm mại xung quanh bức ảnh như trên các trang tạp chí chuyên nghiệp."
    },
    {
      type: "Tình huống thiết kế mỹ thuật",
      title: "Tạo ảnh nền phong cảnh mờ trang nhã cho trang lời tựa cẩm nang",
      content: "Nhóm muốn lấy một bức ảnh chụp ruộng bậc thang mùa lúa chín làm hình nền bao phủ toàn bộ trang Lời mở đầu, phía trên bức ảnh là các dòng chữ giới thiệu của giám đốc công ty du lịch.",
      solution: "Thao tác thực hiện: Chèn bức ảnh vào trang -> Chọn Wrap Text -> Chọn chế độ 'Behind Text' để ảnh chìm hoàn toàn xuống dưới chữ -> Kéo giãn ảnh phủ kín trang giấy. Để chữ phía trên dễ đọc, vào thẻ Picture Format -> Chọn mục Color -> Chọn chế độ Washout (hoặc giảm độ bão hòa màu, tăng độ sáng trong Corrections) giúp bức ảnh mờ ảo, làm nổi bật các dòng chữ giới thiệu."
    }
  ],
  3: [
    {
      type: "Tình huống thiết kế nhãn đồ họa",
      title: "Tạo nhãn giá 'Đặc sản thắng cố' trong suốt đè lên ảnh món ăn",
      content: "Trong trang Giới thiệu ẩm thực Tây Bắc, bạn Lan muốn chèn một ô chữ nhật ghi chú 'Món ngon phải thử - Giá từ 150.000đ' đè lên góc của bức ảnh bát thắng cố, nhưng khi dùng Text Box thông thường thì khung màu trắng của hộp văn bản che mất góc bức ảnh.",
      solution: "Cách xử lí hộp văn bản trong suốt: Chọn hộp Text Box vừa vẽ -> Vào thẻ ngữ cảnh Shape Format -> Tại nút Shape Fill, chọn 'No Fill' (không màu nền) -> Tại nút Shape Outline, chọn 'No Outline' (không đường viền) -> Chọn màu chữ trắng hoặc vàng kim nổi bật trên nền thức ăn. Hộp văn bản trở nên trong suốt hoàn toàn, chỉ để lộ chữ nghệ thuật nổi bật đè lên ảnh."
    },
    {
      type: "Tình huống quản lí lớp đối tượng",
      title: "Khắc phục tình trạng logo và dải băng trang trí bị xô lệch vị trí khi chỉnh sửa văn bản",
      content: "Trang bìa cẩm nang gồm một hình khối dải băng (Ribbon), một ngôi sao vàng 5 cánh và một hộp chữ ghi tên giải thưởng du lịch. Mỗi khi bạn thêm một dòng chữ ở trên, ba chi tiết này lại bị trôi dạt sang các vị trí khác nhau làm hỏng bố cục.",
      solution: "Giải pháp liên kết nhóm đối tượng (Group): Giữ phím Shift, lần lượt nháy chuột chọn cả 3 đối tượng (dải băng + ngôi sao + hộp chữ) -> Vào thẻ Shape Format -> Chọn nút Group -> Nhấn chọn Group (hoặc chuột phải chọn Group). Ba chi tiết sẽ được khóa chặt thành một khối thống nhất duy nhất. Đồng thời trong mục Wrap Text của nhóm đối tượng, tích chọn 'Fix position on page' để cố định tọa độ trang bìa."
    }
  ],
  4: [
    {
      type: "Tình huống lỗi mục lục tự động",
      title: "Xử lí lỗi mục lục tự động bị thiếu mất phần 'Ẩm thực địa phương'",
      content: "Sau khi tạo mục lục tự động bằng lệnh Table of Contents, nhóm kiểm tra lại thì thấy mục lục hiển thị đầy đủ các phần Danh lam thắng cảnh, Lịch trình, nhưng hoàn toàn biến mất mục 'Chuyên mục ẩm thực địa phương'.",
      solution: "Nguyên nhân: Tiêu đề 'Chuyên mục ẩm thực địa phương' trong bài viết chưa được gán Style Heading mà vẫn đang mang kiểu Normal (chỉ được in đậm thủ công). Cách sửa: Cuộn xuống trang ẩm thực, bôi đen tiêu đề đó và nhấp chọn Style 'Heading 1' -> Quay trở lại trang mục lục, nhấp chuột phải vào mục lục -> Chọn Update Field -> Chọn 'Update entire table' -> Nhấn OK. Mục ẩm thực sẽ lập tức xuất hiện ngay ngắn trong mục lục kèm số trang chính xác."
    },
    {
      type: "Tình huống nghiệm thu xuất bản PDF",
      title: "Ngăn chặn lỗi tiêu đề bị đẩy cô đơn sang trang sau khi xuất bản PDF",
      content: "Xem trước bản PDF của Cẩm nang du lịch, nhóm phát hiện tiêu đề '4. Lịch trình khám phá 3 ngày 2 đêm' nằm ở dòng cuối cùng của trang 12, trong khi toàn bộ nội dung chi tiết lại bắt đầu từ đầu trang 13, gây cảm giác thiếu chuyên nghiệp.",
      solution: "Khắc phục lỗi mồ côi (Orphan heading): Mở tệp Word gốc, đặt con trỏ soạn thảo ngay phía trước chữ '4. Lịch trình...' -> Nhấn tổ hợp phím Ctrl + Enter để chủ động ngắt trang (Page Break). Tiêu đề sẽ được đẩy hẳn sang đầu trang 13 cùng với nội dung của nó. Sau đó cập nhật lại mục lục (F9) và tiến hành xuất bản lại tệp PDF qua File -> Export -> Create PDF/XPS Document."
    }
  ],
  5: [
    {
      type: "Tình huống chuẩn hóa dữ liệu bảng",
      title: "Sửa lỗi cột đơn giá phòng không thể tính tổng do nhập lẫn chữ và số",
      content: "Trong bảng giá phòng khách sạn, học sinh nhập vào cột Đơn giá các chuỗi kí tự như '800k', '1.200.000 vnđ', 'Thỏa thuận'. Khi bật hàng Total Row để tính tổng chi phí, ô tổng cộng hiển thị kết quả bằng 0 hoặc báo lỗi.",
      solution: "Nguyên tắc chuẩn hóa cơ sở dữ liệu: Mỗi cột trong bảng chỉ được phép chứa một kiểu dữ liệu duy nhất. Cột Đơn giá bắt buộc phải nhập số nguyên thuần túy (ví dụ: 800000, 1200000). Đơn vị tiền tệ 'VNĐ' hoặc 'đ' không gõ tay vào ô mà được thiết lập qua định dạng hiển thị: Chọn cột đơn giá -> Chuột phải chọn Format Cells -> Chọn Currency (hoặc Accounting) -> Chọn kí hiệu đ. Sau khi chuẩn hóa, hàng Total Row sẽ tự động cộng tổng chính xác tức thì."
    },
    {
      type: "Tình huống khai thác bảng thông minh",
      title: "Tự động cập nhật bảng giá xe du lịch mới bổ sung vào cơ sở dữ liệu",
      content: "Công ty du lịch vừa kí hợp đồng thêm dòng 'Xe Limousine 9 chỗ VIP' phục vụ khách hạng sang. Nhóm cần đưa loại xe này vào bảng giá 'BangGiaXe' đã định dạng bằng Format as Table mà không làm hỏng công thức các dòng cũ.",
      solution: "Thao tác cực kì đơn giản với Excel Table: Đặt con trỏ chuột vào ô trống ngay bên dưới dòng cuối cùng của bảng giá xe -> Gõ tên 'Xe Limousine 9 chỗ VIP' và nhập đơn giá -> Nhấn Enter. Bảng thông minh sẽ tự động nới rộng khung viền, tự động tô màu xen kẽ (Banded Rows) và tự động mở rộng vùng tham chiếu của tên bảng BangGiaXe để các công thức tra cứu sau này lập tức nhận diện được loại xe mới."
    }
  ],
  6: [
    {
      type: "Tình huống thiết kế biểu mẫu Form",
      title: "Cố định vị trí hộp kiểm không bị méo mó khi người dùng co giãn cột bảng tính",
      content: "Khi tạo biểu mẫu khảo sát dịch vụ du lịch, học sinh chèn các hộp kiểm (Check Box) vào cột D. Khi giáo viên điều chỉnh độ rộng của cột D cho vừa chữ, các hộp kiểm bị co rúm lại hoặc trôi dạt sang đè lên cột E.",
      solution: "Cách khóa cố định đối tượng điều khiển: Giữ phím Ctrl, lần lượt nháy chuột chọn tất cả các hộp kiểm trên biểu mẫu -> Nháy chuột phải chọn Format Control... -> Chọn thẻ 'Properties' -> Tích chọn tùy chọn 'Move but don't size with cells' (cho phép di chuyển theo dòng nhưng không bị méo khi co giãn ô) hoặc 'Don't move or size with cells' -> Nhấn OK. Hộp kiểm sẽ luôn giữ nguyên kích thước chuẩn đẹp mắt."
    },
    {
      type: "Tình huống liên kết logic biểu mẫu",
      title: "Ẩn các ô giá trị TRUE/FALSE phụ để phiếu đăng kí tour trông chuyên nghiệp",
      content: "Các hộp kiểm dịch vụ cộng thêm (hướng dẫn viên, bảo hiểm, ăn sáng) được liên kết với các ô E10, E11, E12. Khi tích chọn, trên màn hình hiện rõ các chữ TRUE / FALSE to đùng khiến phiếu đăng kí tour gửi cho khách nhìn rất rối mắt.",
      solution: "Cách che giấu ô liên kết thẩm mỹ: Có 2 giải pháp chuẩn: Cách 1: Chọn cột E chứa các chữ TRUE/FALSE, nháy chuột phải vào chữ cái tên cột E -> Chọn 'Hide' để ẩn hẳn cột này đi (các công thức ở sheet khác vẫn đọc được giá trị bình thường). Cách 2: Chọn các ô E10:E12 -> Chọn màu phông chữ (Font Color) trùng hoàn toàn với màu nền của bảng tính (màu trắng); chữ TRUE/FALSE sẽ trở nên 'vô hình' trước mắt người dùng."
    }
  ],
  7: [
    {
      type: "Tình huống công thức điều kiện IF",
      title: "Tính tiền phụ thu phòng đơn tự động dựa trên trạng thái hộp kiểm",
      content: "Trong tour du lịch Sa Pa, nếu khách đi một mình có nhu cầu ở phòng riêng một mình (tích chọn hộp kiểm 'Yêu cầu phòng đơn' - ô liên kết F8 nhận giá trị TRUE), công ty sẽ phụ thu 450.000đ/đêm; nếu không phụ thu bằng 0đ.",
      solution: "Công thức thiết lập tại ô Thành tiền phụ thu: =IF(F8=TRUE; SoDem * 450000; 0) (hoặc viết gọn: =IF(F8; SoDem * 450000; 0)). Khi khách hàng tích vào ô hộp kiểm, F8 chuyển thành TRUE và công thức lập tức tính ra số tiền phụ thu; khi khách bỏ tích (ở chung phòng với bạn), F8 là FALSE và số tiền phụ thu tự động nhảy về 0đ."
    },
    {
      type: "Tình huống phân loại quy mô khách hàng",
      title: "Ứng dụng hàm IF lồng nhau để phân loại 'Đoàn lớn' và 'Đoàn nhỏ' áp dụng chiết khấu",
      content: "Chính sách của công ty du lịch quy định: Đoàn khách từ 30 người trở lên được xếp loại 'Đoàn lớn' và giảm giá 10%; đoàn từ 15 đến dưới 30 người xếp loại 'Đoàn vừa' giảm 5%; dưới 15 người xếp loại 'Khách lẻ' không giảm giá.",
      solution: "Công thức hàm IF lồng nhau tại ô Phân loại (với ô C4 là số lượng khách): =IF(C4>=30; \"Đoàn lớn - Giảm 10%\"; IF(C4>=15; \"Đoàn vừa - Giảm 5%\"; \"Khách lẻ - Giá chuẩn\")). Công thức này giúp nhân viên bán tour chỉ cần gõ số người là hệ thống tự động xác định chính sách ưu đãi áp dụng."
    }
  ],
  8: [
    {
      type: "Tình huống tra cứu dữ liệu VLOOKUP",
      title: "Khắc phục mã lỗi #N/A khi tra cứu đơn giá phòng khách sạn",
      content: "Học sinh sử dụng công thức =VLOOKUP(C4; 'GiaGoc'!$A$3:$C$8; 3; FALSE) để tra cứu đơn giá phòng 'Deluxe'. Tuy nhiên ô tính luôn báo lỗi #N/A mặc dù nhìn bằng mắt thường trong bảng GiaGoc rõ ràng có dòng 'Deluxe'.",
      solution: "Nguyên nhân phổ biến nhất: Do vô tình gõ thêm một dấu cách thừa ở cuối chữ (ví dụ ô C4 chứa 'Deluxe ' có 7 kí tự, trong khi bảng gốc chỉ có 'Deluxe' 6 kí tự). Cách khắc phục: Xóa sạch khoảng trắng thừa ở hai ô; hoặc bọc hàm TRIM để làm sạch dữ liệu: =VLOOKUP(TRIM(C4); 'GiaGoc'!$A$3:$C$8; 3; FALSE). Đơn giá sẽ lập tức hiển thị chính xác."
    },
    {
      type: "Tình huống linh hoạt VLOOKUP vs HLOOKUP",
      title: "Xử lí tra cứu khi bảng giá dịch vụ bổ sung được xếp theo hàng ngang",
      content: "Khách sạn cung cấp bảng phụ thu theo dạng hàng ngang: Hàng 1 là tên các dịch vụ (Giặt ủi, Thuê xe máy, Ăn sáng), Hàng 2 là đơn giá tương ứng. Học sinh dùng VLOOKUP bị báo lỗi sai cấu trúc.",
      solution: "Chuyển sang sử dụng hàm HLOOKUP (Horizontal Lookup): Vì dữ liệu nguồn xếp theo hàng ngang, công thức chuẩn là: =HLOOKUP(C10; 'GiaGoc'!$B$1:$E$2; 2; FALSE). Trong đó, hàm sẽ dò tìm tên dịch vụ ở hàng 1 và gióng thẳng xuống hàng thứ 2 trong bảng để lấy đơn giá phụ thu chính xác."
    }
  ],
  9: [
    {
      type: "Tình huống quản trị tài chính tour",
      title: "Tránh cạm bẫy nhầm lẫn giữa Doanh thu và Lợi nhuận khi báo giá",
      content: "Một nhóm học sinh tính ra tổng số tiền thu từ đoàn khách 20 người đi tour Đà Nẵng 3 ngày là 40.000.000đ và hào hứng báo cáo nhóm đã kiếm được lợi nhuận 40 triệu đồng trong chuyến đi.",
      solution: "Giáo viên uốn nắn tư duy kinh tế: 40.000.000đ là Doanh thu (tổng thu), chưa phải Lợi nhuận. Nhóm phải trừ đi toàn bộ Giá vốn chi phí thực tế: tiền khách sạn (12 triệu), tiền thuê xe (8 triệu), tiền ăn uống (10 triệu), vé tham quan (4 triệu). Tổng giá vốn là 34 triệu đồng. Do đó Lợi nhuận thực tế của công ty chỉ là: 40 triệu - 34 triệu = 6 triệu đồng (đạt tỉ suất lợi nhuận khoảng 17.6% trên giá vốn)."
    },
    {
      type: "Tình huống định giá bán cạnh tranh",
      title: "Làm tròn giá tour cho từng khách bằng hàm ROUND",
      content: "Sau khi tính toán chi phí và cộng thêm 20% lợi nhuận, mức giá tính toán cho một khách lẻ trong tour là 2.348.625đ. Mức giá lẻ này rất khó báo giá và bất tiện khi thu tiền mặt tại hội chợ.",
      solution: "Sử dụng hàm ROUND để làm tròn số tiền đến hàng nghìn đồng: =ROUND(TongTien / SoKhach; -3). Với đối số làm tròn là -3, Excel sẽ làm tròn số 2.348.625đ thành 2.349.000đ (hoặc làm tròn đến hàng chục nghìn với đối số -4 thành 2.350.000đ). Mức giá này vừa đảm bảo lợi nhuận, vừa tròn đẹp, chuyên nghiệp trong mắt khách hàng."
    }
  ],
  10: [
    {
      type: "Tình huống tự động hóa ngày tháng",
      title: "Tự động cập nhật ngày phát hành báo giá và thời hạn bảo lưu giá tour",
      content: "Nhân viên bán tour thường xuyên quên cập nhật ngày làm báo giá, dẫn đến việc gửi cho khách hàng bản báo giá mang ngày của tháng trước. Công ty yêu cầu ngày báo giá phải luôn là ngày hiện tại và thời hạn hiệu lực là đúng 5 ngày sau đó.",
      solution: "Ứng dụng hàm thời gian hệ thống: Tại ô Ngày phát hành báo giá, nhập công thức: =TODAY(). Tại ô Thời hạn báo giá có hiệu lực, nhập công thức: =TODAY() + 5. Sau đó định dạng ô ở kiểu hiển thị tiếng Việt: Format Cells -> Custom -> Gõ vào mục Type: 'Có giá trị đến ngày ' dd/mm/yyyy. Mỗi khi mở tệp Excel ra để in cho khách mới, hai ô này sẽ tự động nhảy đúng ngày hiện thực tế mà không cần gõ tay."
    },
    {
      type: "Tình huống chuẩn bị in ấn báo giá",
      title: "Thiết lập vùng in Set Print Area để bản báo giá PDF chỉ vừa khít 1 trang A4",
      content: "Khi xuất bản bảng Báo giá du lịch sang tệp PDF, do trên trang tính có một vài cột nháp ghi chú chi phí ở bên phải nên tệp PDF bị tách làm đôi: trang 1 chứa nửa bên trái, trang 2 chứa nửa bên phải rất xấu xí.",
      solution: "Thao tác khóa vùng in chuẩn: Bôi đen chính xác khu vực biểu mẫu Báo giá chính thức (từ cột A đến cột F, từ dòng 1 đến dòng 30) -> Vào thẻ Page Layout -> Nhóm Page Setup -> Chọn Print Area -> Nhấn 'Set Print Area'. Sau đó nhấp vào mục Width chọn '1 page' để ép toàn bộ chiều ngang vừa khít một trang giấy A4. Khi xuất PDF, tài liệu sẽ hiển thị nguyên vẹn, vuông vức trên đúng 1 trang duy nhất."
    }
  ],
  11: [
    {
      type: "Tình huống bảo vệ phần mềm bảng tính",
      title: "Bảo vệ tệp báo giá tour không bị nhân viên bán hàng vô tình sửa hỏng công thức",
      content: "Chương trình báo giá hoàn chỉnh được bàn giao cho các tư vấn viên tại hội chợ. Một nhân viên do không rành Excel đã gõ đè số tiền vào ô chứa công thức SUM khiến toàn bộ hệ thống tính toán tự động bị tê liệt.",
      solution: "Quy trình thiết lập Protect Sheet chuẩn: Bước 1: Chọn tất cả các ô nhân viên được phép nhập (tên khách, số người, ô tích hộp kiểm) -> Chuột phải chọn Format Cells -> Thẻ Protection -> BỎ TÍCH chọn 'Locked'. Bước 2: Chọn toàn bộ trang tính -> Vào thẻ Review -> Nhấn nút 'Protect Sheet' -> Đặt mật khẩu quản trị -> Nhấn OK. Giờ đây nhân viên chỉ có thể gõ vào ô nhập liệu; nếu vô tình bấm vào ô công thức, Excel sẽ lập tức hiện cảnh báo khóa bảo vệ an toàn."
    },
    {
      type: "Tình huống kiểm thử kịch bản biên (Edge Case)",
      title: "Kiểm thử chương trình báo giá với tình huống số lượng khách bằng 0",
      content: "Khi kiểm thử nghiệm thu phần mềm, kiểm thử viên thử xóa trắng ô số lượng khách (giá trị coi như bằng 0). Tại ô tính Đơn giá trên mỗi khách xuất hiện mã lỗi chia cho không '#DIV/0!'.",
      solution: "Xử lí lỗi chia cho không bằng hàm IFERROR hoặc IF: Công thức tính giá trên mỗi người ban đầu là: =TongChiPhi / SoKhach. Để ngăn chặn lỗi khi chưa nhập số khách, viết lại công thức: =IF(SoKhach>0; TongChiPhi / SoKhach; 0) hoặc =IFERROR(TongChiPhi / SoKhach; \"Chưa nhập số khách\"). Khi kiểm thử lại với số lượng khách bằng 0 hoặc ô trống, bảng tính sẽ hiển thị thông báo thân thiện thay vì mã lỗi hệ thống."
    }
  ],
  12: [
    {
      type: "Tình huống chuẩn hóa thương hiệu thuyết trình",
      title: "Đồng bộ logo công ty và chân trang trên toàn bộ 25 trang slide bằng Slide Master",
      content: "Nhóm phân công 4 bạn làm 4 phần của bài thuyết trình tour Phú Quốc. Khi ghép lại thành bài chung 25 slide, mỗi bạn đặt logo ở một góc khác nhau, phông chữ mỗi trang một kiểu trông rất lộn xộn.",
      solution: "Khắc phục triệt để bằng Slide Master: Mở bài thuyết trình ghép -> Vào thẻ View -> Chọn Slide Master -> Cuộn lên slide trên cùng (Slide Master mẹ số 1) -> Chèn logo công ty vào góc trên bên phải -> Chọn cặp phông chữ đồng bộ (ví dụ: phông Montserrat cho tiêu đề và Calibri cho nội dung) -> Thiết lập chân trang ghi 'Công ty Du lịch Ba Miền - Hội chợ 2026'. Nhấn nút Close Master View. Lập tức toàn bộ 25 slide con trong bài sẽ tự động hiển thị logo ngay ngắn đúng tọa độ và đồng bộ phông chữ."
    },
    {
      type: "Tình huống thiết kế kịch bản trình chiếu",
      title: "Áp dụng nguyên tắc 'Một thông điệp chính' để cải tạo slide đặc sản dày đặc chữ",
      content: "Slide giới thiệu 'Ẩm thực Miền Trung' của học sinh có một đoạn văn bản 20 dòng chép nguyên văn công thức nấu mì Quảng, nước dùng, gia vị khiến khán giả ngồi dưới không thể đọc nổi.",
      solution: "Cải tiến bố cục theo chuẩn Storytelling: Thay vì đưa cả đoạn văn, chuyển đổi slide thành bố cục thị giác: 1 Bức ảnh chụp cận cảnh tô mì Quảng bốc khói nghi ngút chiếm 60% màn hình; 40% diện tích còn lại chỉ ghi 3 từ khóa đắt giá: 'Sợi mì vàng óng', 'Nước nhưn đậm đà tôm thịt', 'Bánh tráng mè giòn rụm'. Người thuyết trình sẽ dựa vào 3 từ khóa đó để diễn giải sinh động bằng lời nói."
    }
  ],
  13: [
    {
      type: "Tình huống biên tập video trên Slide",
      title: "Sử dụng Trim Video để cắt gọn clip danh thắng Tràng An từ 5 phút xuống 40 giây",
      content: "Nhóm tải về một video giới thiệu quần thể Tràng An dài tới 5 phút. Nếu chiếu hết video này thì bài thuyết trình tại hội chợ sẽ bị quá thời lượng cho phép (tối đa 5 phút cho toàn bài).",
      solution: "Cắt video trực tiếp trong PowerPoint: Chọn khung video trên slide -> Vào thẻ ngữ cảnh Playback -> Nhấp chọn nút 'Trim Video' -> Một cửa sổ biên tập hiện ra, kéo thanh mốc màu xanh đến 01:15 (đoạn thuyền lướt qua hang động đẹp nhất) và kéo mốc màu đỏ kết thúc ở 01:55 -> Nhấn OK. Video trên slide sẽ chỉ phát đúng 40 giây tinh hoa nhất, tiết kiệm thời lượng quý báu của bài thuyết trình."
    },
    {
      type: "Tình huống phối hợp âm thanh thuyết trình",
      title: "Điều chỉnh âm lượng video nền để không lấn át giọng nói của bạn thuyết trình",
      content: "Trong slide giới thiệu lễ hội cồng chiêng Tây Nguyên, nhóm chèn một đoạn video biểu diễn. Khi phát thử, tiếng cồng chiêng trong clip kêu quá to làm át hoàn toàn tiếng thuyết minh của bạn đại diện nhóm.",
      solution: "Xử lí âm lượng trong thẻ Playback: Chọn video -> Vào thẻ Playback -> Nhấp chọn nút 'Volume' -> Chọn mức 'Low' (nhỏ) để tiếng nhạc chỉ đóng vai trò làm nền du dương phía sau; hoặc chọn 'Mute' (tắt tiếng) nếu người thuyết trình muốn tự mình mô tả trực tiếp theo nhịp hình ảnh trên màn hình."
    }
  ],
  14: [
    {
      type: "Tình huống cài đặt Trigger trò chơi",
      title: "Khắc phục lỗi nhấp chuột ra ngoài cũng làm biến mất hộp quà may mắn",
      content: "Nhóm thiết kế trò chơi 'Vòng quay may mắn' có 3 hộp quà bí mật. Khi bạn thuyết trình vô tình nhấp chuột vào khoảng trống giữa màn hình, cả 3 hộp quà đều đồng loạt biến mất để lộ hết đáp án phần thưởng trước sự ngỡ ngàng của khách tham quan.",
      solution: "Nguyên nhân và cách sửa Trigger: Do hiệu ứng biến mất chưa được gán Trigger với chính nút bấm của nó mà vẫn nằm ở chế độ chạy tuần tự (On Click). Cách sửa: Mở Animation Pane -> Chọn hiệu ứng Exit của HopQua1 -> Nhấp nút 'Trigger' trên thanh công cụ -> Chọn 'On Click of...' -> Chọn đúng tên đối tượng 'HopQua1'. Lặp lại cho HopQua2 và HopQua3. Giờ đây chỉ khi nhấp đúng con trỏ chuột vào hình hộp quà nào thì hộp quà đó mới mở ra."
    },
    {
      type: "Tình huống quản lí đối tượng Selection Pane",
      title: "Đặt tên chuẩn cho các đối tượng đồ họa để tránh nhầm lẫn khi thiết lập Trigger phức tạp",
      content: "Trên một slide trò chơi có tới 15 hình vẽ khác nhau (5 câu hỏi, 5 nút bấm chọn đáp án, 5 khung kết quả). Khi mở danh sách Trigger, PowerPoint chỉ hiện các tên vô nghĩa như 'Rectangle 12', 'Oval 5', 'Freeform 8' khiến học sinh không biết chọn nút nào.",
      solution: "Chuẩn hóa đối tượng bằng Selection Pane: Vào thẻ Home -> Nhóm Editing -> Chọn Select -> 'Selection Pane'. Nhấp đúp chuột vào từng đối tượng trong danh sách bên phải và gõ lại tên có ý nghĩa rõ ràng (ví dụ: Nut_A, Nut_B, Khung_Dung, Khung_Sai, HopQua_MayMan). Khi quay lại thẻ Animations để gán Trigger, danh sách tên đối tượng sẽ hiện rõ ràng, giúp thao tác chuẩn xác 100% không lo nhầm lẫn."
    }
  ],
  15: [
    {
      type: "Tình huống ghi âm thuyết minh",
      title: "Thu âm lại lời thuyết minh cho slide ẩm thực bị đọc vấp mà không cần thu lại cả bài",
      content: "Khi hoàn thiện bài trình chiếu bằng tính năng Record Slide Show, bạn thuyết minh đã nói rất trôi chảy 14 slide đầu, nhưng đến slide 15 giới thiệu món 'Bún chả Hà Nội' thì bị ho và đọc vấp tên nguyên liệu.",
      solution: "Ưu điểm của âm thanh độc lập trên từng slide: Không cần phải xóa đi thu lại toàn bộ từ đầu. Bạn chỉ cần chuyển đến đúng slide số 15 -> Chọn biểu tượng chiếc loa ghi âm của slide 15 và nhấn phím Delete để xóa -> Vào thẻ Insert -> Audio -> Chọn 'Record Audio...' -> Bấm nút thu âm và đọc lại riêng phần thuyết minh cho slide 15 -> Nhấn OK. Toàn bộ 14 slide trước vẫn được bảo toàn nguyên vẹn bản thu âm hoàn hảo."
    },
    {
      type: "Tình huống xuất bản video Full HD",
      title: "Xuất bản bài trình chiếu thành video MP4 Full HD 1080p chạy tự động tại gian hàng hội chợ",
      content: "Tại Hội chợ du lịch Ba miền, gian hàng của nhóm được trang bị một tivi màn hình lớn 55 inch. Nhóm cần chuyển bài thuyết trình PowerPoint thành một video độc lập để cắm USB vào tivi tự động phát lặp đi lặp lại suốt cả ngày hội.",
      solution: "Quy trình xuất video chất lượng cao: Trong PowerPoint, vào File -> Export -> Chọn 'Create a Video' -> Chọn độ phân giải 'Full HD (1080p)' để hình ảnh sắc nét trên tivi lớn -> Tích chọn 'Use Recorded Timings and Narrations' (sử dụng thời gian và lời thuyết minh đã thu) -> Nhấn nút 'Create Video' -> Lưu tệp dưới tên QuangBaDuLich_BaMien.mp4. Chép tệp video vào USB, cắm vào tivi và chọn chế độ 'Lặp lại video' (Repeat Video) để gian hàng luôn sôi động, thu hút đông đảo khách tham quan."
    }
  ]
};
