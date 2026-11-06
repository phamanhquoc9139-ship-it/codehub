// Bộ 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Toán 7
// Bao quát 10 chương: Đại số, Hình học, Thống kê & Xác suất
module.exports = [
  // Chương I: Số hữu tỉ (6 câu)
  {
    q: "Tập hợp các số hữu tỉ được kí hiệu bằng chữ cái nào sau đây?",
    options: ["$\\mathbb{N}$", "$\\mathbb{Z}$", "$\\mathbb{Q}$", "$\\mathbb{R}$"],
    answer: 2,
    explain: "Tập hợp số hữu tỉ được kí hiệu là $\\mathbb{Q}$, là các số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$."
  },
  {
    q: "Số đối của số hữu tỉ $-\\frac{3}{7}$ là số nào?",
    options: ["$\\frac{7}{3}$", "$\\frac{3}{7}$", "$-\\frac{7}{3}$", "$0$"],
    answer: 1,
    explain: "Hai số đối nhau có tổng bằng 0. Số đối của $-\\frac{3}{7}$ là $\\frac{3}{7}$."
  },
  {
    q: "Kết quả của phép tính $\\left(-\\frac{2}{3}\\right)^3$ là:",
    options: ["$-\\frac{8}{27}$", "$\\frac{8}{27}$", "$-\\frac{6}{9}$", "$-\\frac{8}{9}$"],
    answer: 0,
    explain: "$\\left(-\\frac{2}{3}\\right)^3 = \\frac{(-2)^3}{3^3} = -\\frac{8}{27}$."
  },
  {
    q: "Cho đẳng thức $x^m \\cdot x^n$ (với $x \\neq 0; m, n \\in \\mathbb{N}$). Công thức đúng là:",
    options: ["$x^{m \\cdot n}$", "$x^{m + n}$", "$x^{m - n}$", "$x^{m : n}$"],
    answer: 1,
    explain: "Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: $x^m \\cdot x^n = x^{m+n}$."
  },
  {
    q: "Tìm $x$, biết: $x + \\frac{1}{3} = \\frac{4}{3}$.",
    options: ["$x = \\frac{5}{3}$", "$x = 1$", "$x = -1$", "$x = \\frac{3}{4}$"],
    answer: 1,
    explain: "Áp dụng quy tắc chuyển vế: $x = \\frac{4}{3} - \\frac{1}{3} = \\frac{3}{3} = 1$."
  },
  {
    q: "Thứ tự thực hiện phép tính đối với biểu thức không có dấu ngoặc là:",
    options: [
      "Cộng, trừ $\\rightarrow$ Nhân, chia $\\rightarrow$ Lũy thừa",
      "Lũy thừa $\\rightarrow$ Nhân và chia $\\rightarrow$ Cộng và trừ",
      "Nhân, chia $\\rightarrow$ Lũy thừa $\\rightarrow$ Cộng, trừ",
      "Thực hiện tùy ý từ phải sang trái"
    ],
    answer: 1,
    explain: "Thứ tự chuẩn: Lũy thừa trước $\\rightarrow$ Nhân và chia $\\rightarrow$ Cộng và trừ sau."
  },

  // Chương II: Số thực (4 câu)
  {
    q: "Số nào sau đây là số vô tỉ?",
    options: ["$0,75$", "$\\frac{2}{5}$", "$\\sqrt{2}$", "$\\sqrt{9}$"],
    answer: 2,
    explain: "$\\sqrt{2} = 1,4142135...$ là số thập phân vô hạn không tuần hoàn, do đó là số vô tỉ (thuộc $\\mathbb{I}$)."
  },
  {
    q: "Căn bậc hai số học của 49 là:",
    options: ["7", "-7", "$\\pm 7$", "2401"],
    answer: 0,
    explain: "Căn bậc hai số học của số thực $a \\ge 0$ là số không âm $x$ sao cho $x^2 = a$. Vậy $\\sqrt{49} = 7$."
  },
  {
    q: "Giá trị tuyệt đối của $-3,5$ là:",
    options: ["$-3,5$", "$3,5$", "$\\pm 3,5$", "$0$"],
    answer: 1,
    explain: "Giá trị tuyệt đối của số âm là số đối của nó: $|-3,5| = 3,5$."
  },
  {
    q: "Làm tròn số $4,5672$ đến hàng phần trăm (chữ số thập phân thứ hai):",
    options: ["$4,56$", "$4,57$", "$4,567$", "$4,60$"],
    answer: 1,
    explain: "Chữ số sau hàng phần trăm là 7 ($7 \\ge 5$) nên cộng thêm 1 vào chữ số hàng phần trăm: $4,5672 \\approx 4,57$."
  },

  // Chương III: Góc và đường thẳng song song (4 câu)
  {
    q: "Hai góc kề bù có tổng số đo bằng bao nhiêu?",
    options: ["$90^\\circ$", "$180^\\circ$", "$360^\\circ$", "$60^\\circ$"],
    answer: 1,
    explain: "Hai góc kề bù là hai góc vừa kề nhau vừa bù nhau, tổng số đo của chúng luôn bằng $180^\\circ$."
  },
  {
    q: "Hai góc đối đỉnh thì:",
    options: ["Có tổng bằng $180^\\circ$", "Phụ nhau", "Bằng nhau", "Kề nhau"],
    answer: 2,
    explain: "Định lí: Hai góc đối đỉnh thì bằng nhau."
  },
  {
    q: "Tia phân giác của một góc là tia:",
    options: [
      "Nằm trong góc và tạo với hai cạnh của góc hai góc bằng nhau",
      "Nằm ngoài góc",
      "Vuông góc với một cạnh của góc",
      "Cắt góc thành 3 phần bằng nhau"
    ],
    answer: 0,
    explain: "Tia phân giác của một góc nằm giữa hai cạnh và chia góc đó thành hai góc có số đo bằng nhau."
  },
  {
    q: "Nếu một đường thẳng cắt hai đường thẳng song song thì:",
    options: [
      "Hai góc so le trong bằng nhau",
      "Hai góc đồng vị bằng nhau",
      "Hai góc trong cùng phía bù nhau",
      "Cả 3 khẳng định trên đều đúng"
    ],
    answer: 3,
    explain: "Tính chất hai đường thẳng song song: so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau."
  },

  // Chương IV: Tam giác bằng nhau (5 câu)
  {
    q: "Tổng ba góc trong một tam giác luôn bằng:",
    options: ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"],
    answer: 1,
    explain: "Định lí tổng ba góc của một tam giác: Trong mọi tam giác, tổng số đo ba góc luôn bằng $180^\\circ$."
  },
  {
    q: "Trường hợp bằng nhau Cạnh - Góc - Cạnh (c-g-c) đòi hỏi:",
    options: [
      "Góc xen giữa hai cạnh tương ứng bằng nhau",
      "Góc bất kì của tam giác bằng nhau",
      "Ba cạnh bằng nhau",
      "Một góc vuông"
    ],
    answer: 0,
    explain: "Trường hợp c-g-c yêu cầu góc phải là góc xen giữa hai cặp cạnh tương ứng bằng nhau."
  },
  {
    q: "Tam giác $ABC$ cân tại $A$ có $\\widehat{A} = 50^\\circ$. Số đo của góc $\\widehat{B}$ là:",
    options: ["$65^\\circ$", "$50^\\circ$", "$130^\\circ$", "$70^\\circ$"],
    answer: 0,
    explain: "Tam giác cân có hai góc ở đáy bằng nhau: $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - 50^\\circ}{2} = 65^\\circ$."
  },
  {
    q: "Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của nó được gọi là:",
    options: ["Đường cao", "Đường trung tuyến", "Đường phân giác", "Đường trung trực"],
    answer: 3,
    explain: "Định nghĩa: Đường thẳng vuông góc với đoạn thẳng tại trung điểm gọi là đường trung trực của đoạn thẳng đó."
  },
  {
    q: "Tam giác đều là tam giác có:",
    options: [
      "Ba cạnh bằng nhau và ba góc bằng $60^\\circ$",
      "Hai cạnh bằng nhau",
      "Một góc bằng $90^\\circ$",
      "Tổng ba góc bằng $360^\\circ$"
    ],
    answer: 0,
    explain: "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng $60^\\circ$."
  },

  // Chương V: Thu thập và biểu diễn dữ liệu (3 câu)
  {
    q: "Dữ liệu nào sau đây là dữ liệu định lượng (số liệu)?",
    options: [
      "Màu sắc yêu thích của học sinh",
      "Chiều cao (cm) của các thành viên trong tổ",
      "Nơi sinh của các bạn trong lớp",
      "Xếp loại học lực (Tốt, Khá, Đạt)"
    ],
    answer: 1,
    explain: "Chiều cao là đại lượng đo được và biểu diễn bằng số thực, thuộc loại dữ liệu định lượng."
  },
  {
    q: "Để biểu diễn tỉ lệ phần trăm của các thành phần trong toàn bộ tổng thể, biểu đồ nào thích hợp nhất?",
    options: ["Biểu đồ cột", "Biểu đồ đoạn thẳng", "Biểu đồ hình quạt tròn", "Biểu đồ tranh"],
    answer: 2,
    explain: "Biểu đồ hình quạt tròn được dùng phổ biến nhất để thể hiện cơ cấu, tỉ lệ % của từng phần trong một tổng thể (100%)."
  },
  {
    q: "Biểu đồ đoạn thẳng đặc biệt phù hợp để biểu diễn:",
    options: [
      "Sự thay đổi của một đại lượng theo thời gian (xu hướng)",
      "So sánh số lượng danh mục rời rạc",
      "Phần trăm cơ cấu dân số",
      "Hình dạng hình học"
    ],
    answer: 0,
    explain: "Biểu đồ đoạn thẳng giúp quan sát rõ xu thế tăng, giảm, ổn định của dữ liệu qua các mốc thời gian liên tục."
  },

  // Chương VI: Tỉ lệ thức và Đại lượng tỉ lệ (5 câu)
  {
    q: "Tỉ lệ thức là đẳng thức của hai:",
    options: ["Tổng", "Tỉ số", "Tích", "Hiệu"],
    answer: 1,
    explain: "Tỉ lệ thức là đẳng thức của hai tỉ số $\\frac{a}{b} = \\frac{c}{d}$."
  },
  {
    q: "Từ đẳng thức $a \\cdot d = b \\cdot c$ ($a, b, c, d \\neq 0$), ta suy ra được tỉ lệ thức nào?",
    options: ["$\\frac{a}{b} = \\frac{c}{d}$", "$\\frac{a}{c} = \\frac{d}{b}$", "$\\frac{a}{d} = \\frac{b}{c}$", "$\\frac{b}{a} = \\frac{c}{d}$"],
    answer: 0,
    explain: "Tính chất cơ bản: Tích trung tỉ bằng tích ngoại tỉ: $a \\cdot d = b \\cdot c \\Leftrightarrow \\frac{a}{b} = \\frac{c}{d}$."
  },
  {
    q: "Cho $\\frac{x}{3} = \\frac{y}{5}$ và $x + y = 16$. Giá trị của $x$ và $y$ là:",
    options: ["$x = 6; y = 10$", "$x = 10; y = 6$", "$x = 3; y = 5$", "$x = 8; y = 8$"],
    answer: 0,
    explain: "Theo tính chất dãy tỉ số bằng nhau: $\\frac{x}{3} = \\frac{y}{5} = \\frac{x+y}{3+5} = \\frac{16}{8} = 2 \\Rightarrow x = 6; y = 10$."
  },
  {
    q: "Đại lượng $y$ tỉ lệ thuận với đại lượng $x$ theo hệ số tỉ lệ $k \\neq 0$ được liên hệ bởi công thức:",
    options: ["$y = \\frac{k}{x}$", "$y = k \\cdot x$", "$x \\cdot y = k$", "$y = k + x$"],
    answer: 1,
    explain: "Đại lượng $y$ tỉ lệ thuận với $x$ khi $y = kx$ ($k$ là hằng số khác 0)."
  },
  {
    q: "Nếu $y$ tỉ lệ nghịch với $x$ theo hệ số tỉ lệ $a = 12$ thì khi $x = 3$, $y$ nhận giá trị là:",
    options: ["$36$", "$4$", "$15$", "$9$"],
    answer: 1,
    explain: "$x \\cdot y = 12 \\Rightarrow y = \\frac{12}{x} = \\frac{12}{3} = 4$."
  },

  // Chương VII: Biểu thức đại số và Đa thức một biến (5 câu)
  {
    q: "Bậc của đa thức $P(x) = 4x^5 - 2x^3 + 7x - 9$ là:",
    options: ["3", "4", "5", "9"],
    answer: 2,
    explain: "Bậc của đa thức một biến là số mũ cao nhất của biến trong dạng thu gọn: số mũ lớn nhất là 5."
  },
  {
    q: "Hệ số cao nhất và hệ số tự do của $Q(x) = -3x^4 + 5x^2 - 8$ lần lượt là:",
    options: ["$-3$ và $-8$", "$5$ và $-8$", "$-3$ và $8$", "$4$ và $-8$"],
    answer: 0,
    explain: "Hệ số cao nhất là hệ số của lũy thừa bậc cao nhất ($-3$), hệ số tự do là hằng số không chứa biến ($-8$)."
  },
  {
    q: "Số nào sau đây là nghiệm của đa thức $A(x) = 2x - 6$?",
    options: ["$x = -3$", "$x = 3$", "$x = 0$", "$x = 6$"],
    answer: 1,
    explain: "Cho $A(x) = 0 \\Leftrightarrow 2x - 6 = 0 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."
  },
  {
    q: "Thu gọn đơn thức $(2x^2) \\cdot (3x^3)$ ta được:",
    options: ["$5x^5$", "$6x^5$", "$6x^6$", "$5x^6$"],
    answer: 1,
    explain: "$(2x^2) \\cdot (3x^3) = (2 \\cdot 3) \\cdot (x^{2+3}) = 6x^5$."
  },
  {
    q: "Thực hiện phép chia $(6x^3 - 4x^2) : (2x^2)$ được kết quả là:",
    options: ["$3x - 2$", "$3x^2 - 2$", "$3x - 4$", "$6x - 2$"],
    answer: 0,
    explain: "$\\frac{6x^3 - 4x^2}{2x^2} = \\frac{6x^3}{2x^2} - \\frac{4x^2}{2x^2} = 3x - 2$."
  },

  // Chương VIII: Biến cố và Xác suất (2 câu)
  {
    q: "Tung một con xúc xắc cân đối 6 mặt. Biến cố \"Mặt xuất hiện có số chấm lớn hơn 7\" là biến cố gì?",
    options: ["Biến cố chắc chắn", "Biến cố không thể", "Biến cố ngẫu nhiên", "Biến cố đồng khả năng"],
    answer: 1,
    explain: "Xúc xắc chỉ có số chấm từ 1 đến 6 nên không thể xuất hiện mặt > 7. Đây là biến cố không thể."
  },
  {
    q: "Xác suất của một biến cố chắc chắn luôn bằng:",
    options: ["0", "0,5", "1", "100"],
    answer: 2,
    explain: "Theo định nghĩa xác suất: Biến cố chắc chắn có xác suất bằng 1, biến cố không thể có xác suất bằng 0."
  },

  // Chương IX: Quan hệ các yếu tố tam giác & 4 đường đồng quy (4 câu)
  {
    q: "Trong tam giác $ABC$, nếu cạnh $BC > AB$ thì quan hệ giữa hai góc đối diện là:",
    options: ["$\\widehat{A} > \\widehat{C}$", "$\\widehat{A} < \\widehat{C}$", "$\\widehat{A} = \\widehat{C}$", "Không so sánh được"],
    answer: 0,
    explain: "Định lí: Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn. Đối diện $BC$ là góc $A$, đối diện $AB$ là góc $C$."
  },
  {
    q: "Bộ ba độ dài đoạn thẳng nào sau đây CÓ THỂ là độ dài ba cạnh của một tam giác?",
    options: ["2 cm, 3 cm, 6 cm", "3 cm, 4 cm, 5 cm", "1 cm, 2 cm, 3 cm", "4 cm, 5 cm, 10 cm"],
    answer: 1,
    explain: "Theo bất đẳng thức tam giác: $3 + 4 = 7 > 5$. Các bộ khác đều có tổng hai cạnh $\\le$ cạnh thứ ba."
  },
  {
    q: "Giao điểm của ba đường trung tuyến trong một tam giác được gọi là:",
    options: ["Trực tâm", "Trọng tâm", "Tâm đường tròn nội tiếp", "Tâm đường tròn ngoại tiếp"],
    answer: 1,
    explain: "Định nghĩa: Giao điểm của ba đường trung tuyến gọi là trọng tâm tam giác (cách mỗi đỉnh $\\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó)."
  },
  {
    q: "Giao điểm của ba đường cao trong một tam giác được gọi là:",
    options: ["Trực tâm", "Trọng tâm", "Tâm đối xứng", "Trung điểm"],
    answer: 0,
    explain: "Ba đường cao của một tam giác cùng đi qua một điểm, điểm đó gọi là trực tâm của tam giác."
  },

  // Chương X: Hình khối thực tiễn (2 câu)
  {
    q: "Hình hộp chữ nhật có kích thước ba cạnh đáy và chiều cao lần lượt là $a, b, h$. Thể tích được tính bằng:",
    options: ["$V = a \\cdot b \\cdot h$", "$V = 2(a + b) \\cdot h$", "$V = a + b + h$", "$V = \\frac{1}{3} a \\cdot b \\cdot h$"],
    answer: 0,
    explain: "Thể tích hình hộp chữ nhật bằng diện tích đáy nhân chiều cao: $V = S_{đáy} \\cdot h = a \\cdot b \\cdot h$."
  },
  {
    q: "Lăng trụ đứng tam giác có các mặt bên là hình gì?",
    options: ["Hình tam giác", "Hình chữ nhật", "Hình bình hành", "Hình thang cân"],
    answer: 1,
    explain: "Đặc điểm của hình lăng trụ đứng: Hai đáy là hai đa giác song song và bằng nhau, các mặt bên đều là các hình chữ nhật vuông góc với đáy."
  }
];
