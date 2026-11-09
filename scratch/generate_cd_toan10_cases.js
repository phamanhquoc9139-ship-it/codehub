const fs = require('fs');
const path = require('path');

const practicalCases = {
  "1": [
    {
      badge: "Tình huống 1 • Đại số",
      title: "Giải hệ ba phương trình bằng phương pháp khử Gauss",
      scenario: "Cho hệ ba phương trình bậc nhất ba ẩn $\\begin{cases} x - 2y + z = 1 \\\\ 2x + y - z = 4 \\\\ 3x - y + 2z = 9 \\end{cases}$. Cần xác định chính xác bộ nghiệm $(x; y; z)$ thông qua các bước biến đổi bậc thang.",
      analysis: "Khử ẩn $x$ ở hai phương trình dưới: Lấy $PT(2) - 2 PT(1)$ và $PT(3) - 3 PT(1)$. Ta thu được hệ mới: $\\begin{cases} x - 2y + z = 1 \\\\ 5y - 3z = 2 \\\\ 5y - z = 6 \\end{cases}$. Khử ẩn $y$ ở phương trình 3: Lấy $PT(3) - PT(2) \\implies 2z = 4$.",
      solution: "Từ phương trình cuối: $2z = 4 \\implies z = 2$. Thay vào phương trình thứ hai: $5y - 3(2) = 2 \\implies 5y = 8 \\implies y = 1{,}6$. Thay vào phương trình đầu: $x - 2(1{,}6) + 2 = 1 \\implies x = 2{,}2$. Bộ nghiệm duy nhất là $(2{,}2; 1{,}6; 2)$.",
      takeaway: "Phương pháp khử Gauss đưa ma trận hệ số về tam giác trên giúp việc tìm nghiệm trở nên tuần tự, giảm thiểu tối đa sai sót nhầm lẫn so với phương pháp cộng đại số ngẫu nhiên."
    },
    {
      badge: "Tình huống 2 • Hình học",
      title: "Xác định giao điểm của ba mặt phẳng trong không gian",
      scenario: "Trong không gian $Oxyz$, ba mặt phẳng $(\\alpha): x + y + z = 6$, $(\\beta): 2x - y + z = 3$ và $(\\gamma): x + 2y - z = 2$ cắt nhau tại bao nhiêu điểm chung?",
      analysis: "Tọa độ giao điểm chung thỏa mãn hệ 3 phương trình bậc nhất ba ẩn. Ta biến đổi hệ: $PT(2) - 2 PT(1) \\implies -3y - z = -9 \\implies 3y + z = 9$; $PT(3) - PT(1) \\implies y - 2z = -4$. Tiếp tục khử $y$: $3 \\cdot PT(3) - PT(2) \\implies -7z = -21 \\implies z = 3$.",
      solution: "Từ $z = 3$, ta có $y = \\frac{9 - 3}{3} = 2$. Thay vào phương trình đầu: $x + 2 + 3 = 6 \\implies x = 1$. Ba mặt phẳng cắt nhau tại duy nhất một điểm chung là $M(1; 2; 3)$.",
      takeaway: "Về mặt hình học không gian, một hệ ba phương trình bậc nhất ba ẩn có nghiệm duy nhất tương đương với việc ba mặt phẳng cắt nhau tại đúng một điểm duy nhất."
    }
  ],
  "2": [
    {
      badge: "Tình huống 1 • Kinh tế",
      title: "Phân bổ danh mục đầu tư tài chính ba kênh",
      scenario: "Một nhà đầu tư có 1 tỉ đồng phân bổ vào 3 kênh: Trái phiếu chính phủ (lãi suất 6%/năm), Chứng chỉ tiền gửi (lãi suất 8%/năm) và Quỹ cổ phiếu (lãi suất 12%/năm). Mục tiêu thu được 88 triệu đồng tiền lãi mỗi năm và số tiền đầu tư vào cổ phiếu gấp đôi trái phiếu. Hỏi cần phân bổ bao nhiêu tiền vào mỗi kênh?",
      analysis: "Gọi $x, y, z$ lần lượt là số tiền đầu tư (đơn vị: triệu đồng) vào trái phiếu, chứng chỉ tiền gửi và cổ phiếu ($x, y, z > 0$). Thiết lập hệ: (1) Tổng vốn: $x + y + z = 1000$; (2) Tổng tiền lãi: $0{,}06x + 0{,}08y + 0{,}12z = 88$; (3) Quan hệ: $z = 2x \\iff 2x - z = 0$.",
      solution: "Thay $z = 2x$ vào hệ hai phương trình đầu: $\\begin{cases} 3x + y = 1000 \\\\ 0{,}30x + 0{,}08y = 88 \\end{cases}$. Nhân phương trình đầu với $0{,}08$: $0{,}24x + 0{,}08y = 80$. Trừ hai phương trình: $0{,}06x = 8 \\implies x = \\frac{400}{3} \\approx 133{,}33$ triệu đồng. Suy ra $z = 2x \\approx 266{,}67$ triệu đồng và $y = 1000 - 400 = 600$ triệu đồng.",
      takeaway: "Mô hình hệ phương trình bậc nhất ba ẩn là công cụ đắc lực để cân đối rủi ro và lợi nhuận kì vọng trong quản lí tài chính cá nhân và danh mục doanh nghiệp."
    },
    {
      badge: "Tình huống 2 • Kĩ thuật",
      title: "Tính toán dòng điện trong mạch Kirchhoff hai mắt lưới",
      scenario: "Một mạch điện một chiều gồm hai nguồn điện $E_1 = 12\\text{V}, E_2 = 6\\text{V}$ và ba điện trở $R_1 = 2\\,\\Omega, R_2 = 4\\,\\Omega, R_3 = 6\\,\\Omega$. Dùng định luật Kirchhoff xác định cường độ dòng điện $I_1, I_2, I_3$ chạy qua các nhánh.",
      analysis: "Áp dụng định luật nút tại điểm nối: $I_1 + I_2 - I_3 = 0$. Áp dụng định luật mắt lưới vòng 1: $R_1 I_1 + R_3 I_3 = E_1 \\iff 2I_1 + 6I_3 = 12$. Vòng 2: $R_2 I_2 + R_3 I_3 = E_2 \\iff 4I_2 + 6I_3 = 6$. Hệ phương trình 3 ẩn $I_1, I_2, I_3$ hoàn toàn xác định.",
      solution: "Giải hệ bằng phương pháp Gauss: $I_1 = 2{,}45\\text{ A}, I_2 = -0{,}18\\text{ A}, I_3 = 2{,}27\\text{ A}$. Vì $I_2 < 0$, dòng điện thực tế qua nhánh 2 chạy ngược chiều so với chiều mũi tên giả định ban đầu và có độ lớn $0{,}18\\text{ A}$.",
      takeaway: "Khi mô hình hóa mạch điện bằng hệ phương trình, dấu âm của cường độ dòng điện mang ý nghĩa vật lí trực quan về chiều di chuyển thực tế của các hạt mang điện tích."
    }
  ],
  "3": [
    {
      badge: "Tình huống 1 • Lí thuyết số",
      title: "Chứng minh công thức tính tổng lũy thừa bậc hai",
      scenario: "Cần chứng minh chặt chẽ công thức tính tổng bình phương của $n$ số tự nhiên đầu tiên: $S_n = 1^2 + 2^2 + 3^2 + \\dots + n^2 = \\frac{n(n+1)(2n+1)}{6}$ đúng với mọi $n \\in \\mathbb{N}^*$.",
      analysis: "Áp dụng quy trình quy nạp 2 bước. (1) Bước cơ sở: Kiểm tra tại $n = 1$: Vế trái bằng $1^2 = 1$; vế phải bằng $\\frac{1(2)(3)}{6} = 1$. Đẳng thức đúng tại $n=1$. (2) Bước quy nạp: Giả sử đúng với $n=k$: $S_k = \\frac{k(k+1)(2k+1)}{6}$. Ta cần chứng minh đúng với $n=k+1$, tức $S_{k+1} = \\frac{(k+1)(k+2)(2k+3)}{6}$.",
      solution: "Ta có: $S_{k+1} = S_k + (k+1)^2 = \\frac{k(k+1)(2k+1)}{6} + (k+1)^2 = (k+1) \\left[\\frac{2k^2 + k + 6k + 6}{6}\\right] = \\frac{(k+1)(2k^2 + 7k + 6)}{6} = \\frac{(k+1)(k+2)(2k+3)}{6}$. Đẳng thức đúng với $n=k+1$. Theo nguyên lí quy nạp, công thức đúng với mọi $n \\in \\mathbb{N}^*$.",
      takeaway: "Kĩ năng then chốt của bước quy nạp là luôn phân tích $S_{k+1} = S_k + a_{k+1}$ rồi thay giả thiết quy nạp và đặt nhân tử chung $(k+1)$ ra ngoài."
    },
    {
      badge: "Tình huống 2 • Khoa học máy tính",
      title: "Đánh giá số phép chuyển trong bài toán Tháp Hà Nội",
      scenario: "Trò chơi Tháp Hà Nội gồm $n$ chiếc đĩa có kích thước khác nhau xếp chồng trên cột A. Mỗi lần chỉ được chuyển 1 đĩa và không đĩa lớn nào được nằm trên đĩa nhỏ. Chứng minh số bước chuyển tối thiểu để dời toàn bộ $n$ đĩa sang cột C là $M_n = 2^n - 1$.",
      analysis: "Quy nạp theo số đĩa $n$. Với $n = 1$: Rõ ràng chỉ cần 1 bước chuyển đĩa duy nhất: $M_1 = 2^1 - 1 = 1$. Đúng. Giả sử với $k$ đĩa cần tối thiểu $M_k = 2^k - 1$ bước.",
      solution: "Để dời $k+1$ đĩa: Bước 1 chuyển $k$ đĩa trên cùng sang cột trung gian B (mất $M_k$ bước); Bước 2 chuyển chiếc đĩa lớn nhất thứ $k+1$ sang cột C (mất 1 bước); Bước 3 chuyển $k$ đĩa từ B sang C (mất $M_k$ bước). Tổng số bước: $M_{k+1} = M_k + 1 + M_k = 2M_k + 1 = 2(2^k - 1) + 1 = 2^{k+1} - 1$. Mệnh đề đúng với $k+1$.",
      takeaway: "Quy nạp toán học là nền tảng lí thuyết của thuật toán đệ quy trong khoa học máy tính, giúp xác định chính xác độ phức tạp tính toán của các bài toán đệ quy."
    }
  ],
  "4": [
    {
      badge: "Tình huống 1 • Đại số tổ hợp",
      title: "Tìm hệ số của lũy thừa xác định trong khai triển đa thức",
      scenario: "Trong khai triển nhị thức Newton của biểu thức $P(x) = \\left(2x^2 - \\frac{1}{x}\\right)^6$ (với $x \\ne 0$), hãy tìm số hạng không chứa $x$ (số hạng tự do).",
      analysis: "Số hạng thứ $k+1$ trong khai triển có dạng: $T_{k+1} = C_6^k (2x^2)^{6-k} \\left(-\\frac{1}{x}\\right)^k = C_6^k 2^{6-k} (-1)^k (x^2)^{6-k} x^{-k} = C_6^k 2^{6-k} (-1)^k x^{12 - 3k}$. Số hạng không chứa $x$ ứng với số mũ bằng 0: $12 - 3k = 0 \\implies k = 4$.",
      solution: "Thay $k = 4$ vào biểu thức hệ số: $T_5 = C_6^4 \\cdot 2^{6-4} \\cdot (-1)^4 = 15 \\times 4 \\times 1 = 60$. Vậy số hạng không chứa $x$ trong khai triển là 60.",
      takeaway: "Khi khai triển biểu thức chứa phân thức hoặc dấu trừ, việc tách riêng ba phần: hệ số tổ hợp $C_n^k$, phần hằng số lũy thừa và phần biến số $x^m$ giúp tính toán không bao giờ bị nhầm dấu."
    },
    {
      badge: "Tình huống 2 • Xác suất thực tế",
      title: "Ứng dụng nhị thức Newton tính xác suất kiểm tra chất lượng",
      scenario: "Một lô hàng có tỉ lệ sản phẩm lỗi là $p = 0{,}05$. Lấy ngẫu nhiên $n = 5$ sản phẩm để kiểm tra. Sử dụng khai triển nhị thức $(p + q)^5$ với $q = 1 - p = 0{,}95$ để tính xác suất có đúng 1 sản phẩm bị lỗi.",
      analysis: "Tổng xác suất của mọi trường hợp được mô tả bằng khai triển $(q + p)^5 = \\sum_{k=0}^5 C_5^k q^{5-k} p^k = 1$. Biến cố có đúng 1 sản phẩm lỗi ứng với $k = 1$, tức số hạng $C_5^1 q^4 p^1$.",
      solution: "Xác suất cần tính: $P(X = 1) = C_5^1 \\times (0{,}95)^4 \\times (0{,}05)^1 = 5 \\times 0{,}81450625 \\times 0{,}05 \\approx 0{,}2036$ (khoảng $20{,}36\\%$).",
      takeaway: "Nhị thức Newton là chiếc cầu nối toán học quan trọng dẫn tới phân bố xác suất nhị thức (Binomial Distribution) trong kiểm thử thống kê và quản lí chất lượng sản phẩm công nghiệp."
    }
  ],
  "5": [
    {
      badge: "Tình huống 1 • Thiên văn học",
      title: "Mô hình hóa quỹ đạo của Trái Đất quanh Mặt Trời",
      scenario: "Quỹ đạo chuyển động của Trái Đất quanh Mặt Trời là một đường elip có tâm sai $e \\approx 0{,}0167$ và khoảng cách trung bình (bán trục lớn) $a \\approx 149{,}6$ triệu km. Tính khoảng cách gần nhất (điểm cận nhật) và xa nhất (điểm viễn nhật) từ Trái Đất đến Mặt Trời.",
      analysis: "Tiêu cự $c$ được tính theo công thức tâm sai: $c = e \\cdot a = 0{,}0167 \\times 149{,}6 \\approx 2{,}498$ triệu km. Điểm cận nhật đạt tại $r_{\\min} = a - c$; điểm viễn nhật đạt tại $r_{\\max} = a + c$.",
      solution: "Khoảng cách cận nhật: $r_{\\min} = 149{,}6 - 2{,}498 = 147{,}102$ triệu km (rơi vào khoảng đầu tháng 1 hàng năm). Khoảng cách viễn nhật: $r_{\\max} = 149{,}6 + 2{,}498 = 152{,}098$ triệu km (rơi vào khoảng đầu tháng 7 hàng năm).",
      takeaway: "Tâm sai của quỹ đạo Trái Đất rất nhỏ ($e \\approx 0{,}017$) nên quỹ đạo gần như hình tròn. Sự chênh lệch khoảng cách này không phải nguyên nhân tạo ra 4 mùa (mà do độ nghiêng trục tự quay của Trái Đất)."
    },
    {
      badge: "Tình huống 2 • Y học & Âm học",
      title: "Nguyên lí máy tán sỏi thận ngoài cơ thể (Lithotripter)",
      scenario: "Máy tán sỏi thận sử dụng một gương phản xạ hình elip. Nguồn phát sóng xung kích đặt tại tiêu điểm $F_1$, viên sỏi thận của bệnh nhân được định vị tại tiêu điểm $F_2$. Nếu gương có bán trục lớn $a = 15\\text{ cm}$ và bán trục nhỏ $b = 9\\text{ cm}$, hỏi khoảng cách giữa đầu phát sóng và viên sỏi thận là bao nhiêu?",
      analysis: "Khoảng cách giữa đầu phát sóng $F_1$ và viên sỏi $F_2$ chính là tiêu cự của elip: $F_1F_2 = 2c$. Hệ thức elip: $c = \\sqrt{a^2 - b^2}$.",
      solution: "Ta có: $c = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12\\text{ cm}$. Khoảng cách cần đặt giữa đầu phát và viên sỏi là $2c = 2 \\times 12 = 24\\text{ cm}$.",
      takeaway: "Nhờ tính chất quang học của elip, toàn bộ năng lượng sóng xung kích phân kì từ $F_1$ sau khi phản xạ đều tập trung năng lượng hủy diệt tại tiêu điểm $F_2$ để làm vỡ sỏi mà không làm tổn thương các mô xung quanh."
    }
  ],
  "6": [
    {
      badge: "Tình huống 1 • Hàng hải",
      title: "Hệ thống định vị vô tuyến vi sai hàng hải LORAN",
      scenario: "Hai trạm phát sóng vô tuyến $A$ và $B$ đặt cách nhau 300 km dọc bờ biển (xem là hai tiêu điểm $F_1, F_2$ trên trục $Ox$). Một con tàu ngoài khơi nhận tín hiệu từ trạm $B$ sớm hơn trạm $A$ là $600\\,\\mu\\text{s}$. Biết tốc độ truyền sóng vô tuyến là $300{,}000\\text{ km/s}$, lập phương trình quỹ đạo con tàu.",
      analysis: "Hiệu quãng đường từ tàu đến hai trạm là: $2a = d_A - d_B = v \\cdot \\Delta t = 300{,}000 \\times (600 \\times 10^{-6}) = 180\\text{ km} \\implies a = 90\\text{ km}$. Khoảng cách hai trạm là $2c = 300\\text{ km} \\implies c = 150\\text{ km}$. Bán trục ảo $b = \\sqrt{c^2 - a^2} = \\sqrt{150^2 - 90^2} = 120\\text{ km}$.",
      solution: "Phương trình chính tắc của hypebol định vị là $\\frac{x^2}{90^2} - \\frac{y^2}{120^2} = 1 \\iff \\frac{x^2}{8100} - \\frac{y^2}{14400} = 1$. Vì tàu nhận tín hiệu từ $B$ trước nên tàu nằm trên nhánh phải ($x \\ge 90$).",
      takeaway: "Hiệu thời gian truyền tín hiệu không đổi tương đương với hiệu khoảng cách không đổi, biến đường hypebol trở thành công cụ dẫn đường kinh điển trước kỉ nguyên GPS vệ tinh."
    },
    {
      badge: "Tình huống 2 • Kiến trúc",
      title: "Thiết kế tháp tản nhiệt nhà máy nhiệt điện dạng hypeboloid",
      scenario: "Một tháp làm mát có mặt cắt thẳng đứng là một hypebol có phương trình $\\frac{x^2}{144} - \\frac{y^2}{400} = 1$ (đơn vị: mét). Đường kính hẹp nhất của tháp (ngang thắt lưng tại gốc $O$) và đường kính miệng tháp ở độ cao $y = 50\\text{ m}$ là bao nhiêu?",
      analysis: "Đường kính hẹp nhất tương ứng với khoảng cách giữa hai đỉnh trên trục hoành: $d_{\\min} = 2a$. Tại $y = 50\\text{ m}$, thay vào phương trình để tìm $x$ rồi suy ra đường kính miệng tháp $d_{\\text{miệng}} = 2x$.",
      solution: "Từ phương trình ta có $a^2 = 144 \\implies a = 12\\text{ m} \\implies$ Đường kính thắt lưng tháp là $2a = 24\\text{ m}$. Tại $y = 50$: $\\frac{x^2}{144} - \\frac{2500}{400} = 1 \\iff \\frac{x^2}{144} = 1 + 6{,}25 = 7{,}25 \\iff x^2 = 1044 \\implies x \\approx 32{,}31\\text{ m}$. Đường kính miệng tháp là $2x \\approx 64{,}62\\text{ m}$.",
      takeaway: "Mặt hypeboloid tròn xoay là một mặt kẻ (ruled surface), có thể thi công hoàn toàn bằng các thanh dầm thép thẳng nghiêng chéo, vừa dễ xây dựng vừa có khả năng chịu áp lực gió cực tốt."
    }
  ],
  "7": [
    {
      badge: "Tình huống 1 • Viễn thông",
      title: "Thiết kế chảo thu sóng vệ tinh DTH chuẩn parabol",
      scenario: "Một công ty viễn thông thiết kế chảo thu truyền hình vệ tinh có đường kính miệng chảo $D = 120\\text{ cm}$ và độ sâu ở tâm chảo là $h = 20\\text{ cm}$. Xác định vị trí gắn đầu thu LNB (tiêu điểm) cách đỉnh chảo bao nhiêu để thu sóng tối ưu?",
      analysis: "Đặt hệ trục tọa độ với đỉnh chảo tại $O(0; 0)$ và trục đối xứng $Ox$. Phương trình parabol có dạng $y^2 = 2px$. Điểm mép chảo có tọa độ $(x; y) = (h; D/2) = (20; 60)$.",
      solution: "Thay tọa độ $(20; 60)$ vào phương trình: $60^2 = 2p(20) \\iff 3600 = 40p \\implies p = 90\\text{ cm}$. Tiêu điểm $F$ cách đỉnh chảo một khoảng bằng $x_F = \\frac{p}{2} = \\frac{90}{2} = 45\\text{ cm}$. Đầu thu LNB cần đặt chính xác cách đáy chảo 45 cm trên trục đối xứng.",
      takeaway: "Định lí quang học parabol đảm bảo toàn bộ sóng phẳng song song từ vệ tinh ngoài không gian chiếu vào lòng chảo đều hội tụ chính xác tại đầu thu LNB đặt ở tiêu điểm."
    },
    {
      badge: "Tình huống 2 • Giao thông",
      title: "Mô hình cáp chủ cầu treo nhịp lớn",
      scenario: "Một cây cầu treo có nhịp dài $L = 200\\text{ m}$. Hai trụ tháp cao $H = 30\\text{ m}$ so với mặt sàn cầu, cáp chủ uốn cong theo đường parabol và tiếp xúc mặt sàn tại chính giữa cầu. Tính chiều dài thanh cáp treo thẳng đứng cách tâm cầu 50 m.",
      analysis: "Chọn gốc tọa độ $O(0; 0)$ tại điểm võng thấp nhất của cáp ở giữa cầu, trục tung hướng lên. Phương trình parabol có dạng $y = ax^2$. Tại đỉnh tháp mép cầu, tọa độ là $(100; 30)$. Suy ra $30 = a(100)^2 \\implies a = \\frac{30}{10000} = 0{,}003$.",
      solution: "Tại vị trí cách tâm cầu 50 m ($x = 50$): $y = 0{,}003 \\times 50^2 = 0{,}003 \\times 2500 = 7{,}5\\text{ m}$. Chiều dài của thanh cáp treo thẳng đứng tại vị trí này là 7,5 m.",
      takeaway: "Dưới tải trọng phân bố đều của bản mặt cầu, dây cáp treo mềm tự nhiên điều chỉnh ứng suất uốn theo dạng đường parabol, truyền toàn bộ tải trọng lên các trụ tháp chịu nén."
    }
  ],
  "8": [
    {
      badge: "Tình huống 1 • Vũ trụ học",
      title: "Xác định bản chất quỹ đạo sao chổi qua tâm sai e",
      scenario: "Một đài thiên văn phát hiện một thiên thể mới đi vào hệ Mặt Trời. Qua đo đạc các thông số quỹ đạo, tỉ số khoảng cách từ thiên thể tới Mặt Trời và đường chuẩn đo được là $e = 1{,}045$. Hãy dự đoán chuyển động tương lai của thiên thể này.",
      analysis: "Dựa vào định lí tiêu điểm - đường chuẩn thống nhất cho ba đường conic: $0 < e < 1$ là Elip (quỹ đạo kín); $e = 1$ là Parabol; $e > 1$ là Hypebol (quỹ đạo mở).",
      solution: "Vì $e = 1{,}045 > 1$, thiên thể chuyển động theo quỹ đạo Hypebol. Điều này chứng minh thiên thể có nguồn gốc ngoài hệ Mặt Trời (thiên thể liên sao), nó chỉ ghé qua cận điểm Mặt Trời một lần duy nhất rồi bay vĩnh viễn ra ngoài không gian liên sao mà không bao giờ quay trở lại.",
      takeaway: "Chỉ số tâm sai $e$ là đại lượng vật lí then chốt cho phép các nhà thiên văn học phân loại ngay lập tức vật thể thuộc hệ Mặt Trời hay là khách viếng thăm từ dải Ngân Hà."
    },
    {
      badge: "Tình huống 2 • Quang học không gian",
      title: "Thiết kế hệ kính thiên văn Cassegrain phối hợp Elip & Hypebol",
      scenario: "Kính thiên văn phản xạ Cassegrain sử dụng một gương sơ cấp Parabol hội tụ ánh sáng về tiêu điểm $F_1$, và một gương thứ cấp Hypebol có tiêu điểm trùng với $F_1$ để đổi hướng chùm tia về tiêu điểm $F_2$ nằm phía sau gương sơ cấp. Nêu nguyên lí liên kết của hai đường conic này.",
      analysis: "Chùm sáng từ ngôi sao ở xa là chùm tia song song $\\implies$ Gương parabol sơ cấp phản xạ chúng hướng về tiêu điểm $F_1$. Đặt gương thứ cấp Hypebol chặn trước $F_1$ sao cho tiêu điểm ảo của Hypebol trùng $F_1$.",
      solution: "Theo tính chất quang học của hypebol, mọi tia tới hướng về tiêu điểm $F_1$ sau khi phản xạ trên bề mặt gương hypebol sẽ hội tụ chính xác về tiêu điểm thực $F_2$, nơi đặt cảm biến thu ảnh CCD hoặc thị kính quan sát.",
      takeaway: "Sự kết hợp tinh tế giữa hai đường conic (Parabol và Hypebol) giúp rút ngắn đáng kể chiều dài ống kính thiên văn mà vẫn duy trì tiêu cự cực lớn và triệt tiêu quang sai."
    }
  ]
};

const outputPath = path.join(__dirname, 'cd_toan10_cases.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(practicalCases, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/cd_toan10_cases.js with 16 cases across 8 lessons.');
