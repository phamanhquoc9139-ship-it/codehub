// khtn9_exam.js - Bộ 30 câu hỏi thi Trạng Nguyên Khoa Học Tự Nhiên 9 (60:00 Toàn Diện)
module.exports = [
  // CƠ HỌC (Câu 1 - 4)
  {
    id: 1,
    branch: "Vật lí",
    q: "Một quả bóng có khối lượng m = 200 g chuyển động với vận tốc v = 10 m/s. Động năng của quả bóng là:",
    options: ["10 J", "20 J", "100 J", "1000 J"],
    ans: 0,
    expl: "Đổi m = 200 g = 0.2 kg. Động năng Wđ = 1/2 m v² = 0.5 * 0.2 * 10² = 10 J."
  },
  {
    id: 2,
    branch: "Vật lí",
    q: "Thế năng trọng trường của một vật m = 5 kg ở độ cao h = 4 m so với mặt đất (lấy g = 10 N/kg, mốc thế năng tại mặt đất) là:",
    options: ["20 J", "40 J", "200 J", "400 J"],
    ans: 2,
    expl: "Wt = mgh = 5 * 10 * 4 = 200 J."
  },
  {
    id: 3,
    branch: "Vật lí",
    q: "Khi một vật trượt xuống từ đỉnh máng nghiêng không có ma sát, quá trình chuyển hóa năng lượng chủ yếu là:",
    options: [
      "Thế năng chuyển hóa thành động năng",
      "Động năng chuyển hóa thành thế năng",
      "Cơ năng chuyển hóa hoàn toàn thành nhiệt năng",
      "Thế năng chuyển hóa thành quang năng"
    ],
    ans: 0,
    expl: "Khi trượt xuống, độ cao giảm nên thế năng giảm, đồng thời vận tốc tăng nên động năng tăng; do không có ma sát nên thế năng chuyển hóa hoàn toàn thành động năng và cơ năng được bảo toàn."
  },
  {
    id: 4,
    branch: "Vật lí",
    q: "Một động cơ điện sinh một công A = 72000 J trong thời gian t = 2 phút. Công suất của động cơ là:",
    options: ["600 W", "36000 W", "1200 W", "60 W"],
    ans: 0,
    expl: "Đổi t = 2 phút = 120 s. Công suất P = A / t = 72000 / 120 = 600 W."
  },

  // QUANG HỌC (Câu 5 - 8)
  {
    id: 5,
    branch: "Vật lí",
    q: "Hiện tượng khúc xạ ánh sáng là hiện tượng:",
    options: [
      "Tia sáng bị hắt trở lại môi trường cũ khi gặp mặt gương phẳng",
      "Tia sáng bị đổi hướng truyền khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt",
      "Tia sáng truyền thẳng khi đi từ không khí vào nước",
      "Tia sáng bị phân chia thành nhiều chùm sáng song song"
    ],
    ans: 1,
    expl: "Khúc xạ ánh sáng là hiện tượng tia sáng bị gãy khúc (đổi phương truyền) tại mặt phân cách khi truyền xiên góc giữa hai môi trường trong suốt có chiết suất khác nhau."
  },
  {
    id: 6,
    branch: "Vật lí",
    q: "Điều kiện để xảy ra hiện tượng phản xạ toàn phần tại mặt phân cách giữa hai môi trường là:",
    options: [
      "Ánh sáng truyền từ môi trường kém chiết quang sang môi trường chiết quang hơn và góc tới bất kì",
      "Ánh sáng truyền từ môi trường chiết quang hơn sang môi trường kém chiết quang và góc tới i ≥ i_gh",
      "Tia sáng tới phải vuông góc với mặt phân cách",
      "Góc tới phải luôn nhỏ hơn góc khúc xạ"
    ],
    ans: 1,
    expl: "Hai điều kiện bắt buộc để có phản xạ toàn phần: 1. Truyền từ môi trường có chiết suất lớn sang môi trường có chiết suất nhỏ (n1 > n2); 2. Góc tới i lớn hơn hoặc bằng góc giới hạn phản xạ toàn phần (i ≥ i_gh)."
  },
  {
    id: 7,
    branch: "Vật lí",
    q: "Đặt vật sáng AB vuông góc với trục chính của một thấu kính hội tụ tại vị trí ngoài khoảng 2f (d > 2f). Ảnh thu được qua thấu kính có đặc điểm:",
    options: [
      "Ảnh ảo, cùng chiều và lớn hơn vật",
      "Ảnh thật, ngược chiều và nhỏ hơn vật",
      "Ảnh thật, cùng chiều và bằng vật",
      "Ảnh ảo, ngược chiều và lớn hơn vật"
    ],
    ans: 1,
    expl: "Khi vật thật nằm ngoài khoảng 2f trước thấu kính hội tụ, thấu kính cho ảnh thật, ngược chiều với vật, nằm trong khoảng f < d' < 2f và nhỏ hơn vật."
  },
  {
    id: 8,
    branch: "Vật lí",
    q: "Một kính lúp có ghi ký hiệu 10x. Tiêu cự của kính lúp này là:",
    options: ["2.5 cm", "10 cm", "25 cm", "250 cm"],
    ans: 0,
    expl: "Áp dụng công thức số bội giác của kính lúp G = 25 / f (với f tính theo cm) => f = 25 / G = 25 / 10 = 2.5 cm."
  },

  // ĐIỆN HỌC & ĐIỆN TỪ (Câu 9 - 12)
  {
    id: 9,
    branch: "Vật lí",
    q: "Theo định luật Ohm, cường độ dòng điện chạy qua dây dẫn phụ thuộc vào hiệu điện thế U và điện trở R như thế nào?",
    options: [
      "Tỉ lệ thuận với cả U và R",
      "Tỉ lệ nghịch với U và tỉ lệ thuận với R",
      "Tỉ lệ thuận với U và tỉ lệ nghịch với R",
      "Không phụ thuộc vào U và R"
    ],
    ans: 2,
    expl: "Hệ thức định luật Ohm I = U / R cho thấy cường độ dòng điện I tỉ lệ thuận với hiệu điện thế U giữa hai đầu dây và tỉ lệ nghịch với điện trở R của dây dẫn."
  },
  {
    id: 10,
    branch: "Vật lí",
    q: "Hai điện trở R1 = 10 Ω và R2 = 40 Ω mắc song song vào hiệu điện thế U = 16 V. Điện trở tương đương của đoạn mạch là:",
    options: ["50 Ω", "8 Ω", "30 Ω", "400 Ω"],
    ans: 1,
    expl: "Rtđ = (R1 * R2) / (R1 + R2) = (10 * 40) / (10 + 40) = 400 / 50 = 8 Ω."
  },
  {
    id: 11,
    branch: "Vật lí",
    q: "Một bóng đèn có công suất định mức 60 W được thắp sáng 5 giờ mỗi ngày trong suốt 30 ngày. Điện năng tiêu thụ của bóng đèn trong 1 tháng là:",
    options: ["9 kWh", "18 kWh", "90 kWh", "300 kWh"],
    ans: 0,
    expl: "Tổng thời gian dùng trong tháng: t = 5 h * 30 = 150 h. Điện năng tiêu thụ: A = P * t = 0.06 kW * 150 h = 9 kWh (9 số điện)."
  },
  {
    id: 12,
    branch: "Vật lí",
    q: "Điều kiện để xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín là:",
    options: [
      "Cuộn dây phải được làm bằng chất siêu dẫn",
      "Phải đặt cuộn dây trong một từ trường mạnh và không đổi",
      "Số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín phải biến thiên",
      "Phải nối cuộn dây với nguồn điện một chiều pin"
    ],
    ans: 2,
    expl: "Theo định luật Faraday, dòng điện cảm ứng chỉ xuất hiện trong cuộn dây kín khi và chỉ khi số đường sức từ xuyên qua tiết diện cuộn dây có sự biến thiên (tăng lên hoặc giảm đi) theo thời gian."
  },

  // HÓA HỌC KIM LOẠI (Câu 13 - 16)
  {
    id: 13,
    branch: "Hóa học",
    q: "Kim loại nào sau đây phản ứng mãnh liệt với nước ở nhiệt độ thường giải phóng khí Hydrogen?",
    options: ["Đồng (Cu)", "Sắt (Fe)", "Sodium (Na)", "Nhôm (Al)"],
    ans: 2,
    expl: "Sodium (Na) là kim loại kiềm rất hoạt động, phản ứng mãnh liệt với nước ở nhiệt độ thường: 2Na + 2H2O -> 2NaOH + H2^."
  },
  {
    id: 14,
    branch: "Hóa học",
    q: "Cho thanh kẽm (Zn) vào dung dịch copper(II) sulfate (CuSO4). Hiện tượng quan sát được là:",
    options: [
      "Không có hiện tượng gì xảy ra",
      "Có bọt khí thoát ra mãnh liệt",
      "Có lớp kim loại màu đỏ bám ngoài thanh kẽm, màu xanh của dung dịch nhạt dần",
      "Thanh kẽm tan ra và dung dịch chuyển sang màu tím"
    ],
    ans: 2,
    expl: "Zn đứng trước Cu trong dãy hoạt động hóa học nên đẩy Cu ra khỏi muối: Zn + CuSO4 -> ZnSO4 + Cu (kết tủa đồng màu đỏ bám trên Zn, màu xanh lam của ion Cu2+ nhạt dần)."
  },
  {
    id: 15,
    branch: "Hóa học",
    q: "Gang và thép đều là hợp kim của sắt (Fe) với nguyên tố nào sau đây là chủ yếu?",
    options: [
      "Aluminium (Al)",
      "Carbon (C)",
      "Sulfur (S)",
      "Copper (Cu)"
    ],
    ans: 1,
    expl: "Gang và thép đều là hợp kim của sắt với carbon; trong gang hàm lượng carbon chiếm từ 2-5%, còn trong thép hàm lượng carbon dưới 2%."
  },
  {
    id: 16,
    branch: "Hóa học",
    q: "Kim loại duy nhất ở thể lỏng ở điều kiện nhiệt độ phòng (25°C) là:",
    options: ["Chì (Pb)", "Thủy ngân (Hg)", "Thiếc (Sn)", "Bromine (Br)"],
    ans: 1,
    expl: "Thủy ngân (Hg) là kim loại duy nhất tồn tại ở trạng thái lỏng ở nhiệt độ thường (nóng chảy ở -38.8°C). Bromine cũng là chất lỏng nhưng là phi kim."
  },

  // HÓA HỌC HỮU CƠ (Câu 17 - 21)
  {
    id: 17,
    branch: "Hóa học",
    q: "Hydrocarbon no, mạch hở, trong phân tử chỉ chứa các liên kết đơn C-C và C-H thuộc dãy đồng đẳng nào?",
    options: ["Alkane", "Alkene", "Alkyne", "Arene"],
    ans: 0,
    expl: "Alkane là hydrocarbon no mạch hở, công thức chung CnH2n+2 (n ≥ 1), chỉ chứa liên kết đơn."
  },
  {
    id: 18,
    branch: "Hóa học",
    q: "Khí ethene (C2H4) có khả năng làm mất màu dung dịch nào sau đây do trong phân tử chứa liên kết đôi C=C?",
    options: [
      "Dung dịch nước Bromine (Br2)",
      "Dung dịch Muối ăn (NaCl)",
      "Dung dịch Nước vôi trong Ca(OH)2",
      "Dung dịch Rượu ethylic"
    ],
    ans: 0,
    expl: "Liên kết đôi C=C của ethene dễ tham gia phản ứng cộng, làm mất màu nâu đỏ của dung dịch nước bromine: CH2=CH2 + Br2 -> CH2Br-CH2Br."
  },
  {
    id: 19,
    branch: "Hóa học",
    q: "Nhóm chức đặc trưng quy định tính acid của phân tử Acetic acid (CH3COOH) là:",
    options: [
      "Nhóm Hydroxyl (-OH)",
      "Nhóm Carboxyl (-COOH)",
      "Nhóm Amino (-NH2)",
      "Nhóm Aldehyde (-CHO)"
    ],
    ans: 1,
    expl: "Nhóm Carboxyl (-COOH) gồm nhóm carbonyl C=O liên kết trực tiếp với nhóm -OH, làm nguyên tử H linh động phân li thành ion H+ tạo tính acid."
  },
  {
    id: 20,
    branch: "Hóa học",
    q: "Dung dịch chất nào sau đây cho phản ứng tráng bạc (tạo lớp gương bạc kim loại khi đun với AgNO3 trong NH3)?",
    options: [
      "Saccharose (đường mía)",
      "Glucose (đường nho)",
      "Tinh bột",
      "Cellulose"
    ],
    ans: 1,
    expl: "Glucose (C6H12O6) có nhóm chức aldehyde (-CHO) trong cấu tạo dạng mạch hở nên có tính khử, tham gia phản ứng tráng bạc đặc trưng."
  },
  {
    id: 21,
    branch: "Hóa học",
    q: "Khi nhỏ dung dịch cồn iodine (I2) vào lát cắt củ khoai tây, hiện tượng quan sát được là:",
    options: [
      "Không có hiện tượng gì",
      "Xuất hiện kết tủa trắng",
      "Xuất hiện màu xanh tím đặc trưng",
      "Dung dịch sủi bọt khí CO2"
    ],
    ans: 2,
    expl: "Tinh bột trong khoai tây hấp phụ các phân tử iodine tạo hợp chất bọc có màu xanh tím đặc trưng; đây là phản ứng định tính kinh điển để nhận biết tinh bột."
  },

  // DI TRUYỀN HỌC MENDEL & CƠ SỞ PHÂN TỬ (Câu 22 - 25)
  {
    id: 22,
    branch: "Sinh học",
    q: "Trong phép lai một cặp tính trạng của Mendel ở đậu Hà Lan, khi cho cây hoa đỏ dị hợp (Aa) tự thụ phấn, tỉ lệ kiểu hình ở đời con F2 là:",
    options: [
      "100% hoa đỏ",
      "1 hoa đỏ : 1 hoa trắng",
      "3 hoa đỏ : 1 hoa trắng",
      "9 hoa đỏ : 7 hoa trắng"
    ],
    ans: 2,
    expl: "Phép lai Aa x Aa cho tỉ lệ kiểu gene 1AA : 2Aa : 1aa. Vì A trội hoàn toàn so với a nên AA và Aa biểu hiện hoa đỏ (3 phần), aa biểu hiện hoa trắng (1 phần), tỉ lệ kiểu hình là 3 đỏ : 1 trắng."
  },
  {
    id: 23,
    branch: "Sinh học",
    q: "Các base nitơ trên hai mạch đơn của phân tử DNA liên kết với nhau theo nguyên tắc bổ sung như thế nào?",
    options: [
      "A liên kết với G, T liên kết với C",
      "A liên kết với T bằng 2 liên kết hydrogen, G liên kết với C bằng 3 liên kết hydrogen",
      "A liên kết với U, G liên kết với C",
      "A liên kết với C, T liên kết với G"
    ],
    ans: 1,
    expl: "Trong DNA mạch kép, theo nguyên tắc bổ sung: Adenine (A) liên kết với Thymine (T) bằng 2 liên kết hydrogen, Guanine (G) liên kết với Cytosine (C) bằng 3 liên kết hydrogen."
  },
  {
    id: 24,
    branch: "Sinh học",
    q: "Quá trình dịch mã (tổng hợp chuỗi polypeptide của protein) diễn ra ở bộ phận nào trong tế bào?",
    options: [
      "Bên trong nhân tế bào",
      "Tại các bào quan ribosome ở tế bào chất",
      "Bên trong màng nhân",
      "Tại màng sinh chất"
    ],
    ans: 1,
    expl: "Quá trình phiên mã diễn ra trong nhân tế bào tạo mRNA; sau đó mRNA di chuyển ra tế bào chất và gắn vào ribosome để thực hiện quá trình dịch mã tổng hợp protein."
  },
  {
    id: 25,
    branch: "Sinh học",
    q: "Đột biến mất hoặc thêm một cặp nucleotide trong cấu trúc của gene thường gây hậu quả nghiêm trọng hơn đột biến thay thế vì:",
    options: [
      "Làm đứt gãy hoàn toàn phân tử DNA",
      "Làm dịch khung đọc mã di truyền kể từ vị trí đột biến về sau, làm thay đổi toàn bộ chuỗi amino acid",
      "Làm tế bào không thể phân chia được nữa",
      "Làm tăng đột biến số lượng nhiễm sắc thể"
    ],
    ans: 1,
    expl: "Mã di truyền được đọc theo từng bộ ba liên tục; khi mất hoặc thêm 1 cặp nucleotide sẽ gây ra hiện tượng dịch khung đọc, khiến toàn bộ các bộ ba từ vị trí đột biến trở đi bị đọc sai, dẫn tới thay đổi toàn bộ amino acid tương ứng."
  },

  // DI TRUYỀN NST & TIẾN HÓA (Câu 26 - 30)
  {
    id: 26,
    branch: "Sinh học",
    q: "Kết quả của quá trình nguyên phân từ một tế bào mẹ ban đầu (2n) là tạo ra:",
    options: [
      "2 tế bào con có bộ NST đơn bội (n)",
      "2 tế bào con có bộ NST giống hệt mẹ (2n)",
      "4 tế bào con có bộ NST đơn bội (n)",
      "4 tế bào con có bộ NST lưỡng bội (2n)"
    ],
    ans: 1,
    expl: "Nguyên phân là hình thức phân bào duy trì ổn định bộ NST của tế bào mẹ: Từ 1 tế bào 2n qua 1 lần phân bào tạo ra 2 tế bào con có bộ NST 2n giống hệt tế bào mẹ."
  },
  {
    id: 27,
    branch: "Sinh học",
    q: "Ở người bình thường, cặp nhiễm sắc thể giới tính của nam và nữ lần lượt là:",
    options: [
      "Nam là XX, Nữ là XY",
      "Nam là XY, Nữ là XX",
      "Cả nam và nữ đều là XX",
      "Nam là YY, Nữ là XX"
    ],
    ans: 1,
    expl: "Ở người, giới tính được quy định bởi cặp NST giới tính số 23: Nữ giới mang cặp NST giới tính tương đồng XX, nam giới mang cặp NST giới tính không tương đồng XY."
  },
  {
    id: 28,
    branch: "Sinh học",
    q: "Hội chứng Down ở người là do dạng đột biến nào sau đây gây ra?",
    options: [
      "Đột biến mất đoạn nhiễm sắc thể số 5",
      "Đột biến lệch bội thừa 1 chiếc ở cặp nhiễm sắc thể số 21 (có 3 chiếc NST 21)",
      "Đột biến mất cặp nhiễm sắc thể giới tính",
      "Đột biến đa bội 3n"
    ],
    ans: 1,
    expl: "Hội chứng Down là thể ba nhiễm (2n + 1 = 47) ở cặp NST số 21, làm người bệnh có 3 chiếc NST 21 trong mỗi tế bào sinh dưỡng."
  },
  {
    id: 29,
    branch: "Sinh học",
    q: "Theo quan niệm tiến hóa của Darwin, đối tượng trực tiếp chịu tác động của chọn lọc tự nhiên là:",
    options: [
      "Các cá thể sinh vật trong quần thể",
      "Toàn bộ hệ sinh thái",
      "Các phân tử DNA trong nhân",
      "Khí quyển Trái Đất"
    ],
    ans: 0,
    expl: "Theo học thuyết Darwin, chọn lọc tự nhiên tác động trực tiếp lên các cá thể mang các biến dị khác nhau; cá thể nào thích nghi tốt hơn với môi trường sống thì sống sót và sinh sản ưu thế."
  },
  {
    id: 30,
    branch: "Sinh học",
    q: "Loại bằng chứng nào sau đây được coi là bằng chứng TRỰC TIẾP cung cấp tư liệu xác thực nhất về các loài sinh vật từng sống trong các đại địa chất trước đây?",
    options: [
      "Bằng chứng tế bào học",
      "Hóa thạch trong các lớp địa tầng",
      "Bằng chứng cơ quan thoái hóa",
      "Bằng chứng phôi sinh học so sánh"
    ],
    ans: 1,
    expl: "Hóa thạch là di tích hay dấu vết của sinh vật cổ được bảo tồn trong đất đá, cung cấp bằng chứng trực tiếp và tin cậy nhất về hình thái, niên đại và quá trình tiến hóa của sinh giới trong quá khứ."
  }
];
