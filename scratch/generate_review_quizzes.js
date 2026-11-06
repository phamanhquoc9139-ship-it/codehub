// scratch/generate_review_quizzes.js
const fs = require('fs');
const path = require('path');

const reviewQuizzes = {
  // Bài 1: Mệnh đề
  1: [
    {
      q: "Câu nào dưới đây là một mệnh đề toán học?",
      options: ["Số 17 là số nguyên tố.", "Học toán thật là thú vị!", "Hôm nay trời có mưa không?", "$2x + 1 > 0$."],
      ans: 0,
      exp: "Một câu khẳng định có giá trị chân lí xác định (đúng hoặc sai) là một mệnh đề logic. 'Số 17 là số nguyên tố' là mệnh đề đúng."
    },
    {
      q: "Phủ định của mệnh đề: '$\\forall x \\in \\mathbb{R},\\, x^2 - x + 1 > 0$' là mệnh đề nào?",
      options: ["$\\exists x \\in \\mathbb{R},\\, x^2 - x + 1 \\le 0$", "$\\forall x \\in \\mathbb{R},\\, x^2 - x + 1 \\le 0$", "$\\exists x \\in \\mathbb{R},\\, x^2 - x + 1 < 0$", "$\\forall x \\in \\mathbb{R},\\, x^2 - x + 1 < 0$"],
      ans: 0,
      exp: "Phủ định của lượng từ 'với mọi' $\\forall$ là 'tồn tại' $\\exists$, và phủ định của bất đẳng thức '$>$' là '$\\le$'."
    },
    {
      q: "Cho mệnh đề kéo theo $P \\Rightarrow Q$. Khi nào mệnh đề này nhận giá trị SAI?",
      options: ["Khi $P$ đúng và $Q$ sai", "Khi $P$ sai và $Q$ đúng", "Khi cả $P$ và $Q$ cùng sai", "Khi cả $P$ và $Q$ cùng đúng"],
      ans: 0,
      exp: "Mệnh đề kéo theo $P \\Rightarrow Q$ chỉ sai trong trường hợp duy nhất là tiền đề $P$ đúng nhưng kết luận $Q$ sai."
    }
  ],

  // Bài 2: Tập hợp và phép toán
  2: [
    {
      q: "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Hợp $A \\cup B$ là tập hợp nào?",
      options: ["$\\{1; 2; 3; 4; 5; 6\\}$", "$\\{3; 4\\}$", "$\\{1; 2\\}$", "$\\{5; 6\\}$"],
      ans: 0,
      exp: "Phép hợp $A \\cup B$ gồm tất cả các phần tử thuộc $A$ hoặc thuộc $B$ không lặp lại."
    },
    {
      q: "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5\\}$. Hiệu $A \\setminus B$ là:",
      options: ["$\\{1; 2\\}$", "$\\{3; 4\\}$", "$\\{5\\}$", "$\\{1; 2; 5\\}$"],
      ans: 0,
      exp: "Hiệu $A \\setminus B$ là tập hợp các phần tử thuộc $A$ nhưng không thuộc $B$, ở đây loại bỏ 3 và 4."
    },
    {
      q: "Giao của hai khoảng $(-2; 4)$ và $[1; 6)$ trên trục số thực là:",
      options: ["$[1; 4)$", "$(-2; 6)$", "$[1; 4]$", "$(-2; 1]$"],
      ans: 0,
      exp: "Giao là phần chung: $x > -2$ và $x < 4$ kết hợp với $x \\ge 1$ và $x < 6$, ta được $1 \\le x < 4$ tức là $[1; 4)$."
    }
  ],

  // Bài 3: Bất phương trình bậc nhất hai ẩn
  3: [
    {
      q: "Cặp số nào dưới đây là một nghiệm của bất phương trình $2x - 3y + 6 \\le 0$?",
      options: ["$(0; 3)$", "$(0; 0)$", "$(1; 1)$", "$(2; 0)$"],
      ans: 0,
      exp: "Thay $(x = 0, y = 3)$: $2(0) - 3(3) + 6 = -3 \\le 0$ (Đúng). Với $(0; 0)$ thì $6 \\le 0$ (Sai)."
    },
    {
      q: "Đường thẳng biên $d: 2x - y = 4$ chia mặt phẳng thành hai nửa mặt phẳng. Điểm gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
      options: ["$2x - y < 4$", "$2x - y > 4$", "$2x - y \\ge 4$", "$2x - y + 4 < 0$"],
      ans: 0,
      exp: "Thay tọa độ $O(0; 0)$ vào biểu thức $2x - y = 0 < 4$, thỏa mãn bất phương trình $2x - y < 4$."
    },
    {
      q: "Miền nghiệm của bất phương trình $x - 2y \\ge 0$ bao gồm:",
      options: ["Một nửa mặt phẳng có kể cả bờ là đường thẳng $x - 2y = 0$", "Một nửa mặt phẳng không kể bờ $x - 2y = 0$", "Toàn bộ mặt phẳng Oxy", "Chỉ gồm các điểm nằm trên đường thẳng $x - 2y = 0$"],
      ans: 0,
      exp: "Dấu '$\\ge$' biểu thị bất đẳng thức không ngặt nên miền nghiệm bao gồm cả đường thẳng bờ."
    }
  ],

  // Bài 4: Hệ bất phương trình bậc nhất hai ẩn
  4: [
    {
      q: "Miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn thông thường là một:",
      options: ["Miền đa giác (hoặc miền đa giác không bị chặn)", "Đường tròn hoặc elip", "Một đường thẳng duy nhất", "Hình parabol"],
      ans: 0,
      exp: "Giao của các nửa mặt phẳng bờ là các đường thẳng tạo nên một miền đa giác lồi (hoặc vô hạn)."
    },
    {
      q: "Trong bài toán quy hoạch tuyến tính, giá trị lớn nhất và nhỏ nhất của hàm mục tiêu $F(x; y) = ax + by$ luôn đạt được tại:",
      options: ["Một trong các đỉnh của miền đa giác nghiệm", "Trọng tâm của miền đa giác", "Một điểm nằm sâu bên trong miền nghiệm", "Gốc tọa độ $O(0; 0)$"],
      ans: 0,
      exp: "Theo định lí quy hoạch tuyến tính, cực trị của hàm mục tiêu bậc nhất luôn nằm tại các đỉnh biên của đa giác nghiệm."
    },
    {
      q: "Hệ bất phương trình nào dưới đây là hệ bất phương trình bậc nhất hai ẩn?",
      options: ["$\\begin{cases} x + y \\le 5 \\\\ 2x - 3y \\ge 1 \\end{cases}$", "$\\begin{cases} x^2 + y \\le 5 \\\\ x - y > 0 \\end{cases}$", "$\\begin{cases} xy \\le 4 \\\\ x + y \\ge 1 \\end{cases}$", "$\\begin{cases} \\frac{1}{x} + y \\le 2 \\\\ x > 0 \\end{cases}$"],
      ans: 0,
      exp: "Mỗi bất phương trình trong hệ đều phải là bậc nhất đối với hai ẩn số $x$ và $y$."
    }
  ],

  // Bài 5: Giá trị lượng giác từ 0 đến 180 độ
  5: [
    {
      q: "Giá trị của $\\cos 120^\\circ$ là bao nhiêu?",
      options: ["$-1/2$", "$1/2$", "$-\\sqrt{3}/2$", "$\\sqrt{3}/2$"],
      ans: 0,
      exp: "Ta có quan hệ hai góc bù nhau: $\\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -1/2$."
    },
    {
      q: "Với mọi góc tù $\\alpha \\in (90^\\circ; 180^\\circ)$, khẳng định nào sau đây là ĐÚNG?",
      options: ["$\\sin\\alpha > 0$ và $\\cos\\alpha < 0$", "$\\sin\\alpha < 0$ và $\\cos\\alpha < 0$", "$\\sin\\alpha > 0$ và $\\cos\\alpha > 0$", "$\\tan\\alpha > 0$"],
      ans: 0,
      exp: "Trên nửa đường tròn đơn vị, góc tù có tung độ $y > 0$ (nghĩa là $\\sin > 0$) và hoành độ $x < 0$ (nghĩa là $\\cos < 0$)."
    },
    {
      q: "Giá trị của biểu thức $P = \\sin^2 35^\\circ + \\sin^2 55^\\circ$ bằng:",
      options: ["$1$", "$0$", "$2$", "$1/2$"],
      ans: 0,
      exp: "Do $35^\\circ + 55^\\circ = 90^\\circ$ nên $\\sin 55^\\circ = \\cos 35^\\circ$. Suy ra $P = \\sin^2 35^\\circ + \\cos^2 35^\\circ = 1$."
    }
  ],

  // Bài 6: Hệ thức lượng trong tam giác
  6: [
    {
      q: "Trong tam giác $ABC$, biết $b = 5, c = 8$ và góc $A = 60^\\circ$. Độ dài cạnh $a$ bằng:",
      options: ["$7$", "$\\sqrt{39}$", "$\\sqrt{49}$", "$\\sqrt{74}$"],
      ans: 0,
      exp: "Áp dụng định lí cosin: $a^2 = b^2 + c^2 - 2bc\\cos A = 25 + 64 - 2(5)(8)(1/2) = 89 - 40 = 49 \\implies a = 7$."
    },
    {
      q: "Định lí sin trong tam giác $ABC$ với bán kính đường tròn ngoại tiếp $R$ là:",
      options: ["$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$", "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = R$", "$a\\sin A = b\\sin B = c\\sin C = 2R$", "$a = 2R\\cos A$"],
      ans: 0,
      exp: "Định lí sin: tỉ số giữa một cạnh và sin góc đối diện bằng đường kính đường tròn ngoại tiếp $2R$."
    },
    {
      q: "Công thức tính diện tích tam giác nào sau đây là ĐÚNG?",
      options: ["$S = \\frac{1}{2}ab\\sin C$", "$S = \\frac{1}{2}ab\\cos C$", "$S = \\frac{abc}{2R}$", "$S = \\frac{p}{r}$"],
      ans: 0,
      exp: "Diện tích tam giác bằng một nửa tích hai cạnh với sin của góc xen giữa: $S = \\frac{1}{2}ab\\sin C$."
    }
  ],

  // Bài 7: Các khái niệm mở đầu về vectơ
  7: [
    {
      q: "Hai vectơ được gọi là bằng nhau nếu chúng có:",
      options: ["Cùng hướng và cùng độ dài", "Cùng phương và cùng độ dài", "Cùng điểm đầu và cùng điểm cuối", "Cùng độ dài"],
      ans: 0,
      exp: "Hai vectơ bằng nhau khi và chỉ khi chúng cùng hướng (cùng phương và cùng chiều) và cùng độ dài."
    },
    {
      q: "Vectơ-không $\\vec{0}$ có đặc điểm nào dưới đây?",
      options: ["Có độ dài bằng 0 và phương tùy ý", "Có độ dài bằng 1", "Không có phương", "Điểm đầu khác điểm cuối"],
      ans: 0,
      exp: "Vectơ-không có điểm đầu và điểm cuối trùng nhau, độ dài bằng 0 và có phương tùy ý."
    },
    {
      q: "Cho hình bình hành $ABCD$. Vectơ nào dưới đây bằng vectơ $\\vec{AB}$?",
      options: ["$\\vec{DC}$", "$\\vec{CD}$", "$\\vec{BA}$", "$\\vec{BC}$"],
      ans: 0,
      exp: "Đoạn thẳng $AB$ song song và bằng $DC$, đồng thời hướng từ $A \\to B$ cùng hướng với $D \\to C$ nên $\\vec{AB} = \\vec{DC}$."
    }
  ],

  // Bài 8: Tổng và hiệu của hai vectơ
  8: [
    {
      q: "Cho ba điểm phân biệt $A, B, C$. Theo quy tắc ba điểm, tổng $\\vec{AB} + \\vec{BC}$ bằng:",
      options: ["$\\vec{AC}$", "$\\vec{CA}$", "$\\vec{BA}$", "$\\vec{CB}$"],
      ans: 0,
      exp: "Quy tắc ba điểm (nối ngọn điểm này với gốc điểm kia): $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
    },
    {
      q: "Nếu $ABCD$ là hình bình hành thì tổng $\\vec{AB} + \\vec{AD}$ bằng vectơ nào?",
      options: ["$\\vec{AC}$", "$\\vec{CA}$", "$\\vec{BD}$", "$\\vec{DB}$"],
      ans: 0,
      exp: "Theo quy tắc hình bình hành xuất phát từ đỉnh $A$, tổng hai vectơ cạnh bằng vectơ đường chéo $\\vec{AC}$."
    },
    {
      q: "Với ba điểm bất kì $O, A, B$, hiệu $\\vec{OB} - \\vec{OA}$ bằng:",
      options: ["$\\vec{AB}$", "$\\vec{BA}$", "$\\vec{OA} + \\vec{OB}$", "$\\vec{0}$"],
      ans: 0,
      exp: "Quy tắc trừ chung gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$."
    }
  ],

  // Bài 9: Tích của một vectơ với một số
  9: [
    {
      q: "Cho vectơ $\\vec{a} \\ne \\vec{0}$ và số thực $k < 0$. Vectơ $k\\vec{a}$ có hướng như thế nào so với $\\vec{a}$?",
      options: ["Ngược hướng với $\\vec{a}$", "Cùng hướng với $\\vec{a}$", "Vuông góc với $\\vec{a}$", "Có hướng tùy ý"],
      ans: 0,
      exp: "Khi nhân vectơ với số âm $k < 0$, vectơ mới luôn ngược hướng với vectơ ban đầu và có độ dài gấp $|k|$ lần."
    },
    {
      q: "Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi:",
      options: ["$\\vec{IA} + \\vec{IB} = \\vec{0}$", "$\\vec{IA} = \\vec{IB}$", "$\\vec{AB} = 2\\vec{IA}$", "$\\vec{IA} - \\vec{IB} = \\vec{0}$"],
      ans: 0,
      exp: "Hai vectơ $\\vec{IA}$ và $\\vec{IB}$ có cùng độ dài nhưng ngược hướng nên tổng của chúng bằng vectơ-không."
    },
    {
      q: "Điểm $G$ là trọng tâm tam giác $ABC$ khi và chỉ khi:",
      options: ["$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$", "$\\vec{AG} + \\vec{BG} + \\vec{CG} = \\vec{AB}$", "$GA = GB = GC$", "$\\vec{GA} + \\vec{GB} = \\vec{GC}$"],
      ans: 0,
      exp: "Đặc trưng vectơ của trọng tâm tam giác là tổng ba vectơ từ trọng tâm tới 3 đỉnh bằng vectơ-không."
    }
  ],

  // Bài 10: Vectơ trong mặt phẳng tọa độ
  10: [
    {
      q: "Trong hệ tọa độ $Oxy$, cho vectơ $\\vec{u} = 2\\vec{i} - 5\\vec{j}$. Tọa độ của vectơ $\\vec{u}$ là:",
      options: ["$(2; -5)$", "$(-5; 2)$", "$(2; 5)$", "$(-2; -5)$"],
      ans: 0,
      exp: "Tọa độ vectơ $\\vec{u} = x\\vec{i} + y\\vec{j}$ chính là cặp số $(x; y) = (2; -5)$."
    },
    {
      q: "Cho hai điểm $A(1; 3)$ và $B(5; -1)$. Tọa độ của vectơ $\\vec{AB}$ là:",
      options: ["$(4; -4)$", "$(6; 2)$", "$(-4; 4)$", "$(3; 1)$"],
      ans: 0,
      exp: "Tọa độ vectơ $\\vec{AB} = (x_B - x_A;\\, y_B - y_A) = (5 - 1;\\, -1 - 3) = (4; -4)$."
    },
    {
      q: "Tọa độ trung điểm $M$ của đoạn thẳng nối $A(2; 4)$ và $B(6; 8)$ là:",
      options: ["$(4; 6)$", "$(8; 12)$", "$(2; 2)$", "$(3; 5)$"],
      ans: 0,
      exp: "Tọa độ trung điểm là trung bình cộng tọa độ hai đầu mút: $x_M = (2 + 6)/2 = 4;\\, y_M = (4 + 8)/2 = 6$."
    }
  ],

  // Bài 11: Tích vô hướng của hai vectơ
  11: [
    {
      q: "Cho hai vectơ $\\vec{a} = (1; 2)$ và $\\vec{b} = (3; -1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: ["$1$", "$5$", "$-1$", "$7$"],
      ans: 0,
      exp: "Biểu thức tọa độ của tích vô hướng: $\\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2 = 1(3) + 2(-1) = 3 - 2 = 1$."
    },
    {
      q: "Hai vectơ khác không $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau khi và chỉ khi:",
      options: ["$\\vec{a} \\cdot \\vec{b} = 0$", "$\\vec{a} \\cdot \\vec{b} = 1$", "$|\\vec{a}| = |\\vec{b}|$", "$\\vec{a} + \\vec{b} = \\vec{0}$"],
      ans: 0,
      exp: "Vì $\\cos 90^\\circ = 0$ nên hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng 0."
    },
    {
      q: "Độ dài của vectơ $\\vec{u} = (3; -4)$ trong mặt phẳng tọa độ bằng:",
      options: ["$5$", "$7$", "$\\sqrt{7}$", "$25$"],
      ans: 0,
      exp: "Độ dài vectơ: $|\\vec{u}| = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$."
    }
  ],

  // Bài 12: Số gần đúng và sai số
  12: [
    {
      q: "Cho kết quả đo chiều cao cột cờ là $h = 12,5 \\pm 0,1\\text{ m}$. Sai số tuyệt đối của phép đo không vượt quá:",
      options: ["$0,1\\text{ m}$", "$12,5\\text{ m}$", "$0,01\\text{ m}$", "$12,6\\text{ m}$"],
      ans: 0,
      exp: "Kí hiệu $a \\pm d$ biểu thị độ chính xác $d = 0,1\\text{ m}$, do đó sai số tuyệt đối $\\Delta_h \\le 0,1\\text{ m}$."
    },
    {
      q: "Quy tròn số $a = 23,456$ đến hàng phần mười (đến chữ số thập phân thứ nhất) được kết quả là:",
      options: ["$23,5$", "$23,4$", "$23,46$", "$23,0$"],
      ans: 0,
      exp: "Chữ số ngay sau hàng phần mười là 5 ($\\ge 5$) nên cộng thêm 1 vào chữ số 4, thành 23,5."
    },
    {
      q: "Sai số tương đối $\\delta_a$ của phép đo đặc trưng cho điều gì?",
      options: ["Chất lượng và độ tin cậy của phép đo", "Độ lớn của đại lượng đo", "Giá trị trung bình của phép đo", "Khoảng cách đo được"],
      ans: 0,
      exp: "Sai số tương đối $\\delta_a = \\frac{\\Delta_a}{|a|}$ đo tỉ lệ sai số trên độ lớn giá trị, phản ánh độ chính xác của phép đo."
    }
  ],

  // Bài 13: Các số đặc trưng đo xu thế trung tâm
  13: [
    {
      q: "Mẫu số liệu điểm thi gồm: $5, 6, 7, 8, 9$. Số trung bình cộng của mẫu là:",
      options: ["$7$", "$6,5$", "$8$", "$7,5$"],
      ans: 0,
      exp: "Số trung bình $\\bar{x} = (5 + 6 + 7 + 8 + 9)/5 = 35/5 = 7$."
    },
    {
      q: "Cho mẫu số liệu điểm: $3, 5, 6, 7, 8, 9$. Trung vị $M_e$ của mẫu là:",
      options: ["$6,5$", "$6$", "$7$", "$6,3$"],
      ans: 0,
      exp: "Mẫu có $n = 6$ phần tử (chẵn) nên trung vị là trung bình cộng của 2 số chính giữa: $(6 + 7)/2 = 6,5$."
    },
    {
      q: "Giá trị xuất hiện với tần số lớn nhất trong mẫu số liệu được gọi là:",
      options: ["Mốt ($M_o$)", "Trung vị ($M_e$)", "Số trung bình", "Tứ phân vị"],
      ans: 0,
      exp: "Mốt (Mode) là giá trị có tần số xuất hiện nhiều nhất trong mẫu quan sát."
    }
  ],

  // Bài 14: Các số đặc trưng đo độ phân tán
  14: [
    {
      q: "Khoảng biến thiên $R$ của mẫu số liệu được tính bằng:",
      options: ["$R = x_{\\max} - x_{\\min}$", "$R = Q_3 - Q_1$", "$R = \\bar{x} - x_{\\min}$", "$R = s^2$"],
      ans: 0,
      exp: "Khoảng biến thiên (Range) là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất trong mẫu."
    },
    {
      q: "Mối liên hệ giữa độ lệch chuẩn $s$ và phương sai $s^2$ là:",
      options: ["$s = \\sqrt{s^2}$", "$s = (s^2)^2$", "$s = 2s^2$", "$s = \\frac{s^2}{n}$"],
      ans: 0,
      exp: "Độ lệch chuẩn là căn bậc hai số học của phương sai mẫu: $s = \\sqrt{s^2}$."
    },
    {
      q: "Một giá trị $x$ trong mẫu được coi là giá trị bất thường (outlier) nếu:",
      options: ["$x < Q_1 - 1,5\\Delta_Q$ hoặc $x > Q_3 + 1,5\\Delta_Q$", "$x < Q_1 - \\Delta_Q$", "$x > Q_3 + \\Delta_Q$", "$x = x_{\\max}$"],
      ans: 0,
      exp: "Theo chuẩn phân tích hộp Box-plot, giá trị vượt quá $1,5\\Delta_Q$ ngoài khoảng tứ phân vị là giá trị bất thường."
    }
  ],

  // Bài 15: Hàm số và đồ thị
  15: [
    {
      q: "Tập xác định của hàm số $y = \\sqrt{x - 2}$ là:",
      options: ["$[2; +\\infty)$", "$(2; +\\infty)$", "$(-\\infty; 2]$", "$\\mathbb{R} \\setminus \\{2\\}$"],
      ans: 0,
      exp: "Biểu thức dưới dấu căn bậc hai có nghĩa khi $x - 2 \\ge 0 \\iff x \\ge 2$ hay $[2; +\\infty)$."
    },
    {
      q: "Hàm số $y = f(x)$ được gọi là đồng biến trên khoảng $(a; b)$ nếu với mọi $x_1 < x_2$ thì:",
      options: ["$f(x_1) < f(x_2)$", "$f(x_1) > f(x_2)$", "$f(x_1) = f(x_2)$", "$f(x_1) \\le 0$"],
      ans: 0,
      exp: "Đồng biến (tăng) nghĩa là giá trị $x$ tăng thì giá trị hàm số $f(x)$ cũng tăng theo: $x_1 < x_2 \\implies f(x_1) < f(x_2)$."
    },
    {
      q: "Đồ thị hàm số chẵn có tính chất đối xứng nào?",
      options: ["Đối xứng qua trục tung $Oy$", "Đối xứng qua gốc tọa độ $O$", "Đối xứng qua trục hoành $Ox$", "Đối xứng qua đường phân giác $y = x$"],
      ans: 0,
      exp: "Hàm số chẵn thỏa mãn $f(-x) = f(x)$ nên đồ thị nhận trục tung $Oy$ làm trục đối xứng."
    }
  ],

  // Bài 16: Hàm số bậc hai
  16: [
    {
      q: "Tọa độ đỉnh $I$ của parabol $(P): y = ax^2 + bx + c$ ($a \\ne 0$) là:",
      options: ["$I\\left(-\\frac{b}{2a};\\, -\\frac{\\Delta}{4a}\\right)$", "$I\\left(\\frac{b}{2a};\\, \\frac{\\Delta}{4a}\\right)$", "$I\\left(-\\frac{b}{a};\\, -\\frac{\\Delta}{2a}\\right)$", "$I\\left(0;\\, c\\right)$"],
      ans: 0,
      exp: "Đỉnh của parabol có hoành độ $x_I = -\\frac{b}{2a}$ và tung độ $y_I = -\\frac{\\Delta}{4a}$."
    },
    {
      q: "Trục đối xứng của parabol $y = x^2 - 4x + 3$ là đường thẳng có phương trình:",
      options: ["$x = 2$", "$x = -2$", "$x = 4$", "$y = 2$"],
      ans: 0,
      exp: "Trục đối xứng có phương trình $x = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$."
    },
    {
      q: "Parabol $y = ax^2 + bx + c$ có bề lõm quay lên trên khi và chỉ khi:",
      options: ["$a > 0$", "$a < 0$", "$\\Delta > 0$", "$c > 0$"],
      ans: 0,
      exp: "Hệ số $a > 0$ thì bề lõm hướng lên trên (đạt giá trị nhỏ nhất tại đỉnh); $a < 0$ thì bề lõm hướng xuống dưới."
    }
  ],

  // Bài 17: Dấu của tam thức bậc hai
  17: [
    {
      q: "Cho tam thức $f(x) = ax^2 + bx + c$ ($a \\ne 0$). Nếu biệt thức $\\Delta < 0$ thì dấu của $f(x)$ như thế nào?",
      options: ["$f(x)$ luôn cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$", "$f(x)$ luôn trái dấu với hệ số $a$", "$f(x)$ luôn dương", "$f(x)$ đổi dấu khi qua 0"],
      ans: 0,
      exp: "Định lí về dấu tam thức bậc hai: Khi $\\Delta < 0$, tam thức vô nghiệm thực và luôn cùng dấu với hệ số $a$ trên $\\mathbb{R}$."
    },
    {
      q: "Quy tắc xét dấu tam thức bậc hai có hai nghiệm phân biệt $x_1 < x_2$ là:",
      options: ["Trong trái, ngoài cùng (Trong khoảng hai nghiệm trái dấu với $a$, ngoài khoảng cùng dấu với $a$)", "Trong cùng, ngoài trái", "Luôn luôn cùng dấu với $a$", "Luôn luôn mang dấu dương"],
      ans: 0,
      exp: "Khẩu quyết kinh điển: 'Trong trái - Ngoài cùng' đối với hệ số $a$ khi $\\Delta > 0$."
    },
    {
      q: "Tập nghiệm của bất phương trình $x^2 - 5x + 6 < 0$ là:",
      options: ["$(2; 3)$", "$(-\\infty; 2) \\cup (3; +\\infty)$", "$[2; 3]$", "$\\varnothing$"],
      ans: 0,
      exp: "Tam thức có $a = 1 > 0$ và 2 nghiệm $x = 2, x = 3$. Để $f(x) < 0$ (trái dấu với $a$), ta lấy nghiệm ở trong khoảng: $x \\in (2; 3)$."
    }
  ],

  // Bài 18: Phương trình quy về bậc hai
  18: [
    {
      q: "Khi giải phương trình dạng $\\sqrt{f(x)} = g(x)$, bước biến đổi tương đương bắt buộc phải có điều kiện gì?",
      options: ["$g(x) \\ge 0$", "$f(x) \\ge 0$", "$g(x) \\le 0$", "Không cần điều kiện"],
      ans: 0,
      exp: "Vế trái là căn thức bậc hai luôn $\\ge 0$ nên vế phải bắt buộc phải thỏa mãn $g(x) \\ge 0$ trước khi bình phương hai vế."
    },
    {
      q: "Số nghiệm của phương trình $\\sqrt{x^2 - 3x + 2} = x - 1$ là:",
      options: ["$1$", "$2$", "$0$", "$3$"],
      ans: 0,
      exp: "Điều kiện $x \\ge 1$. Bình phương: $x^2 - 3x + 2 = (x - 1)^2 = x^2 - 2x + 1 \\iff x = 1$ (thỏa mãn)."
    },
    {
      q: "Phương trình dạng $\\sqrt{f(x)} = \\sqrt{g(x)}$ tương đương với hệ nào dưới đây?",
      options: ["$\\begin{cases} f(x) \\ge 0 \\text{ (hoặc } g(x) \\ge 0) \\\\ f(x) = g(x) \\end{cases}$", "$f(x) = g(x)$ không cần điều kiện", "$f(x) + g(x) = 0$", "$[f(x)]^2 = [g(x)]^2$"],
      ans: 0,
      exp: "Hai căn bậc hai bằng nhau khi và chỉ khi biểu thức bên trong bằng nhau và ít nhất một trong hai biểu thức không âm."
    }
  ],

  // Bài 19: Phương trình đường thẳng
  19: [
    {
      q: "Đường thẳng $\\Delta: 2x - 3y + 5 = 0$ có một vectơ pháp tuyến (VTPT) là:",
      options: ["$\\vec{n} = (2; -3)$", "$\\vec{n} = (3; 2)$", "$\\vec{n} = (2; 3)$", "$\\vec{n} = (-3; 2)$"],
      ans: 0,
      exp: "Đường thẳng dạng $ax + by + c = 0$ nhận $\\vec{n} = (a; b) = (2; -3)$ làm vectơ pháp tuyến."
    },
    {
      q: "Nếu đường thẳng có một VTPT $\\vec{n} = (a; b)$ thì một vectơ chỉ phương (VTCP) của nó là:",
      options: ["$\\vec{u} = (-b; a)$", "$\\vec{u} = (a; b)$", "$\\vec{u} = (b; a)$", "$\\vec{u} = (a; -b)$"],
      ans: 0,
      exp: "Do $\\vec{u} \\perp \\vec{n}$ nên $\\vec{u} \\cdot \\vec{n} = 0$, chọn $\\vec{u} = (-b; a)$ vì $(-b)a + a(b) = 0$."
    },
    {
      q: "Phương trình tham số của đường thẳng đi qua $M_0(1; 2)$ và có VTCP $\\vec{u} = (3; -4)$ là:",
      options: ["$\\begin{cases} x = 1 + 3t \\\\ y = 2 - 4t \\end{cases}$", "$\\begin{cases} x = 3 + t \\\\ y = -4 + 2t \\end{cases}$", "$\\begin{cases} x = 1 - 4t \\\\ y = 2 + 3t \\end{cases}$", "$3x - 4y + 5 = 0$"],
      ans: 0,
      exp: "Phương trình tham số có dạng $x = x_0 + u_1 t;\\, y = y_0 + u_2 t$, thay vào ta được hệ $x = 1 + 3t;\\, y = 2 - 4t$."
    }
  ],

  // Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách
  20: [
    {
      q: "Khoảng cách từ điểm $M_0(1; 1)$ đến đường thẳng $\\Delta: 3x + 4y + 3 = 0$ bằng:",
      options: ["$2$", "$10$", "$5$", "$1$"],
      ans: 0,
      exp: "Áp dụng công thức: $d(M_0, \\Delta) = \\frac{|3(1) + 4(1) + 3|}{\\sqrt{3^2 + 4^2}} = \\frac{10}{5} = 2$."
    },
    {
      q: "Hai đường thẳng $d_1: ax + by + c = 0$ và $d_2: a'x + b'y + c' = 0$ vuông góc với nhau khi và chỉ khi:",
      options: ["$aa' + bb' = 0$", "$ab' - a'b = 0$", "$\\frac{a}{a'} = \\frac{b}{b'}$", "$a = a'$ và $b = b'$"],
      ans: 0,
      exp: "Hai đường thẳng vuông góc khi hai VTPT vuông góc, tức tích vô hướng $\\vec{n}_1 \\cdot \\vec{n}_2 = aa' + bb' = 0$."
    },
    {
      q: "Góc $\\varphi$ giữa hai đường thẳng bất kì trong mặt phẳng thỏa mãn điều kiện nào?",
      options: ["$0^\\circ \\le \\varphi \\le 90^\\circ$", "$0^\\circ \\le \\varphi \\le 180^\\circ$", "$0^\\circ < \\varphi < 90^\\circ$", "$\\varphi = 90^\\circ$"],
      ans: 0,
      exp: "Góc giữa hai đường thẳng luôn là góc nhọn hoặc góc vuông, tức $\\varphi \\in [0^\\circ; 90^\\circ]$."
    }
  ],

  // Bài 21: Đường tròn trong mặt phẳng tọa độ
  21: [
    {
      q: "Đường tròn $(C): (x - 2)^2 + (y + 3)^2 = 25$ có tọa độ tâm $I$ và bán kính $R$ là:",
      options: ["$I(2; -3),\\, R = 5$", "$I(-2; 3),\\, R = 5$", "$I(2; -3),\\, R = 25$", "$I(-2; 3),\\, R = 25$"],
      ans: 0,
      exp: "Dạng chính tắc $(x - a)^2 + (y - b)^2 = R^2$ cho tâm $I(a; b) = (2; -3)$ và $R = \\sqrt{25} = 5$."
    },
    {
      q: "Phương trình $x^2 + y^2 - 2ax - 2by + c = 0$ là phương trình đường tròn khi và chỉ khi:",
      options: ["$a^2 + b^2 - c > 0$", "$a^2 + b^2 - c \\ge 0$", "$a^2 + b^2 - c < 0$", "$a^2 + b^2 = c$"],
      ans: 0,
      exp: "Bán kính $R = \\sqrt{a^2 + b^2 - c}$ có nghĩa và dương khi điều kiện $a^2 + b^2 - c > 0$ được thỏa mãn."
    },
    {
      q: "Tiếp tuyến của đường tròn $(C)$ tâm $I$ tại tiếp điểm $M_0 \\in (C)$ nhận vectơ nào làm VTPT?",
      options: ["$\\vec{IM_0}$", "$\\vec{OM_0}$", "Vectơ song song bán kính", "Vectơ-không"],
      ans: 0,
      exp: "Theo tính chất hình học, tiếp tuyến vuông góc với bán kính tại tiếp điểm nên nhận $\\vec{IM_0}$ làm VTPT."
    }
  ],

  // Bài 22: Ba đường conic
  22: [
    {
      q: "Phương trình chính tắc của elip có dạng nào dưới đây?",
      options: ["$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\quad (a > b > 0)$", "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$", "$y^2 = 2px$", "$x^2 + y^2 = R^2$"],
      ans: 0,
      exp: "Phương trình chính tắc của Elip là $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ với hệ thức $b^2 = a^2 - c^2$."
    },
    {
      q: "Trong elip, mối liên hệ giữa các bán trục $a, b$ và tiêu cự $2c$ là:",
      options: ["$a^2 = b^2 + c^2$", "$c^2 = a^2 + b^2$", "$b^2 = a^2 + c^2$", "$a = b + c$"],
      ans: 0,
      exp: "Ở Elip bán trục lớn $a$ là lớn nhất, ta luôn có $a^2 = b^2 + c^2$ hay $b^2 = a^2 - c^2$."
    },
    {
      q: "Đường chuẩn của parabol chính tắc $y^2 = 2px$ ($p > 0$) có phương trình là:",
      options: ["$x = -\\frac{p}{2}$", "$x = \\frac{p}{2}$", "$y = -\\frac{p}{2}$", "$x = -p$"],
      ans: 0,
      exp: "Parabol có tiêu điểm $F(p/2; 0)$ và đường chuẩn đối xứng qua gốc tọa độ có phương trình $x = -p/2$."
    }
  ],

  // Bài 23: Quy tắc đếm
  23: [
    {
      q: "Một bạn có 3 chiếc áo sơ mi khác nhau và 4 chiếc quần âu khác nhau. Hỏi bạn đó có bao nhiêu cách chọn 1 bộ trang phục gồm 1 áo và 1 quần?",
      options: ["$12$", "$7$", "$1$", "$24$"],
      ans: 0,
      exp: "Để hoàn thành một bộ đồ cần thực hiện liên tiếp 2 công đoạn: chọn áo (3 cách) và chọn quần (4 cách). Áp dụng quy tắc nhân: $3 \\times 4 = 12$ cách."
    },
    {
      q: "Một hộp chứa 5 quả cầu xanh và 4 quả cầu đỏ. Hỏi có bao nhiêu cách chọn lấy 1 quả cầu bất kì?",
      options: ["$9$", "$20$", "$5$", "$4$"],
      ans: 0,
      exp: "Chọn 1 quả cầu: hoặc chọn màu xanh (5 cách), hoặc chọn màu đỏ (4 cách). Hai phương án độc lập nên áp dụng quy tắc cộng: $5 + 4 = 9$ cách."
    },
    {
      q: "Từ các chữ số $1, 2, 3, 4, 5$, có thể lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau?",
      options: ["$60$", "$125$", "$15$", "$20$"],
      ans: 0,
      exp: "Chọn 3 chữ số và xếp thứ tự: $A_5^3 = 5 \\times 4 \\times 3 = 60$ số."
    }
  ],

  // Bài 24: Hoán vị, chỉnh hợp và tổ hợp
  24: [
    {
      q: "Có bao nhiêu cách xếp 5 học sinh thành một hàng dọc?",
      options: ["$120$", "$25$", "$5$", "$24$"],
      ans: 0,
      exp: "Số cách xếp 5 phần tử theo thứ tự là số hoán vị $P_5 = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ cách."
    },
    {
      q: "Một lớp có 30 học sinh. Cần chọn một ban cán sự gồm 1 lớp trưởng, 1 lớp phó và 1 bí thư. Hỏi có bao nhiêu cách chọn?",
      options: ["$A_{30}^3 = 24\\,360$", "$C_{30}^3 = 4\\,060$", "$30^3$", "$30!$"],
      ans: 0,
      exp: "Do các chức vụ được phân chia vai trò (có thứ tự) nên đây là bài toán chỉnh hợp chập 3 của 30: $A_{30}^3 = 30 \\times 29 \\times 28 = 24\\,360$ cách."
    },
    {
      q: "Có bao nhiêu cách chọn ra 3 học sinh từ nhóm 10 học sinh để đi lao động (không phân biệt nhiệm vụ)?",
      options: ["$C_{10}^3 = 120$", "$A_{10}^3 = 720$", "$30$", "$10!$"],
      ans: 0,
      exp: "Chọn nhóm 3 người không phân biệt thứ tự/vai trò là một tổ hợp: $C_{10}^3 = \\frac{10!}{3!7!} = 120$ cách."
    }
  ],

  // Bài 25: Nhị thức Newton
  25: [
    {
      q: "Khai triển của nhị thức $(a + b)^4$ có tất cả bao nhiêu số hạng?",
      options: ["$5$", "$4$", "$3$", "$16$"],
      ans: 0,
      exp: "Khai triển $(a + b)^n$ luôn có $n + 1$ số hạng. Với $n = 4$ sẽ có $4 + 1 = 5$ số hạng."
    },
    {
      q: "Hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(x + 2)^5$ là:",
      options: ["$40$", "$10$", "$80$", "$20$"],
      ans: 0,
      exp: "Số hạng tổng quát: $T_{k+1} = C_5^k x^{5-k} 2^k$. Để có $x^3$ thì $5 - k = 3 \\implies k = 2$. Hệ số là $C_5^2 \\cdot 2^2 = 10 \\times 4 = 40$."
    },
    {
      q: "Tổng các hệ số trong khai triển của biểu thức $(1 + x)^n$ bằng:",
      options: ["$2^n$", "$n$", "$2n$", "$2^{n-1}$"],
      ans: 0,
      exp: "Thay $x = 1$ vào biểu thức, ta được $(1 + 1)^n = 2^n$ chính là tổng tất cả các hệ số tổ hợp $\\sum C_n^k$."
    }
  ],

  // Bài 26: Biến cố và định nghĩa cổ điển của xác suất
  26: [
    {
      q: "Gieo một con xúc xắc cân đối và đồng chất một lần. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
      options: ["$6$", "$12$", "$36$", "$1$"],
      ans: 0,
      exp: "Con xúc xắc có 6 mặt từ 1 đến 6 chấm nên không gian mẫu có $n(\\Omega) = 6$."
    },
    {
      q: "Xác suất để gieo được mặt có số chấm là số chẵn khi gieo xúc xắc một lần là:",
      options: ["$1/2$", "$1/3$", "$1/6$", "$2/3$"],
      ans: 0,
      exp: "Các mặt chẵn là $\\{2; 4; 6\\}$ (3 kết quả). Xác suất $P = 3/6 = 1/2$."
    },
    {
      q: "Biến cố chắc chắn có xác suất bằng bao nhiêu?",
      options: ["$1$", "$0$", "$0,5$", "$100$"],
      ans: 0,
      exp: "Biến cố chắc chắn (luôn xảy ra trong mọi phép thử) có xác suất $P(\\Omega) = 1$. Biến cố không thể có $P(\\varnothing) = 0$."
    }
  ],

  // Bài 27: Thực hành tính xác suất trong bài toán thực tế
  27: [
    {
      q: "Một hộp có 4 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên 2 viên bi. Xác suất để lấy được 2 viên bi cùng màu đỏ là:",
      options: ["$\\frac{6}{45} = \\frac{2}{15}$", "$\\frac{4}{10}$", "$\\frac{12}{45}$", "$\\frac{1}{2}$"],
      ans: 0,
      exp: "$n(\\Omega) = C_{10}^2 = 45$. Số cách chọn 2 bi đỏ là $C_4^2 = 6$. Xác suất $P = 6/45 = 2/15$."
    },
    {
      q: "Biết biến cố $A$ có xác suất $P(A) = 0,35$. Xác suất của biến cố đối $\\overline{A}$ là:",
      options: ["$0,65$", "$0,35$", "$1$", "$-0,35$"],
      ans: 0,
      exp: "Theo công thức biến cố đối: $P(\\overline{A}) = 1 - P(A) = 1 - 0,35 = 0,65$."
    },
    {
      q: "Cho hai biến cố xung khắc $A$ và $B$. Công thức cộng xác suất $P(A \\cup B)$ là:",
      options: ["$P(A) + P(B)$", "$P(A) \\times P(B)$", "$P(A) + P(B) - P(A \\cap B)$", "$1 - P(A)$"],
      ans: 0,
      exp: "Khi $A$ và $B$ xung khắc thì $A \\cap B = \\varnothing \\implies P(A \\cap B) = 0$, do đó $P(A \\cup B) = P(A) + P(B)$."
    }
  ],

  // Bài 28: Hoạt động tài chính
  28: [
    {
      q: "Gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất kép $6\\%$/năm. Số tiền cả gốc lẫn lãi sau 2 năm là:",
      options: ["$112,36\\text{ triệu đồng}$", "$112\\text{ triệu đồng}$", "$106\\text{ triệu đồng}$", "$120\\text{ triệu đồng}$"],
      ans: 0,
      exp: "Áp dụng công thức lãi kép: $T_2 = 100 \\times (1 + 0,06)^2 = 100 \\times 1,1236 = 112,36\\text{ triệu đồng}$."
    },
    {
      q: "Hàm số tính tiền điện sinh hoạt theo biểu giá lũy tiến 6 bậc là ví dụ điển hình của loại hàm số nào?",
      options: ["Hàm số cho bởi nhiều công thức (hàm từng khúc)", "Hàm số bậc nhất liên tục", "Hàm số bậc hai", "Hàm số hằng"],
      ans: 0,
      exp: "Ở mỗi khoảng sản lượng tiêu thụ (0-50, 51-100, 101-200...), đơn giá điện được áp dụng theo các công thức khác nhau."
    },
    {
      q: "Lãi đơn khác lãi kép ở điểm cốt lõi nào?",
      options: ["Lãi đơn không cộng dồn tiền lãi vào vốn để tính lãi cho kì tiếp theo", "Lãi đơn có lãi suất cao hơn lãi kép", "Lãi đơn chỉ tính cho kì hạn 1 tháng", "Lãi đơn tiền lãi tăng theo cấp số nhân"],
      ans: 0,
      exp: "Ở lãi đơn, tiền lãi mỗi kì chỉ tính trên vốn gốc ban đầu; còn lãi kép thì lãi kì trước được nhập vào vốn để sinh lãi kì sau ('lãi mẹ đẻ lãi con')."
    }
  ],

  // Bài 29: Mạng xã hội: Liên kết và ảnh hưởng
  29: [
    {
      q: "Trong mô hình đồ thị mạng xã hội, các cá nhân (tài khoản) và các mối quan hệ kết bạn được biểu diễn tương ứng bằng:",
      options: ["Đỉnh (nút) và Cạnh (liên kết)", "Tọa độ và Mặt phẳng", "Vectơ và Độ dài", "Hàm số và Đồ thị"],
      ans: 0,
      exp: "Lí thuyết đồ thị biểu diễn mỗi đối tượng là một đỉnh (Vertex/Node) và mối liên hệ tương tác là một cạnh (Edge)."
    },
    {
      q: "Bậc của một đỉnh trong đồ thị mạng xã hội biểu thị điều gì?",
      options: ["Số lượng bạn bè kết nối trực tiếp với tài khoản đó", "Thời gian tham gia mạng xã hội", "Số lượng bài viết đã đăng", "Khoảng cách đến tài khoản xa nhất"],
      ans: 0,
      exp: "Bậc của đỉnh là số cạnh nối vào đỉnh đó, biểu thị số liên kết trực tiếp (số bạn bè) của người dùng."
    },
    {
      q: "Hiện tượng 'thế giới nhỏ' (Small World) trong mạng xã hội chỉ ra rằng:",
      options: ["Khoảng cách trung bình giữa hai người bất kì trên toàn cầu qua các liên kết bạn bè là rất ngắn (khoảng 6 bước)", "Mọi người đều quen biết nhau", "Mạng xã hội chỉ có quy mô nhỏ", "Số lượng người dùng không vượt quá 1000"],
      ans: 0,
      exp: "Thực nghiệm của Milgram chỉ ra quy tắc 6 bậc cách biệt (six degrees of separation): khoảng cách trung bình kết nối giữa hai cá nhân ngẫu nhiên rất nhỏ."
    }
  ],

  // Bài 30: Phương pháp bắt - đánh dấu cá thể
  30: [
    {
      q: "Nhà sinh học bắt 100 cá thể cá trong hồ, đánh dấu rồi thả lại. Sau đó bắt lại 80 con thấy có 20 con có dấu. Kích thước quần thể cá $N$ ước tính là:",
      options: ["$400\\text{ con}$", "$800\\text{ con}$", "$200\\text{ con}$", "$160\\text{ con}$"],
      ans: 0,
      exp: "Công thức Lincoln-Petersen: $\\frac{r}{n} \\approx \\frac{m}{N} \\implies N \\approx \\frac{m \\cdot n}{r} = \\frac{100 \\times 80}{20} = 400\\text{ con}$."
    },
    {
      q: "Giả định cốt lõi để phương pháp đánh dấu bắt lại đạt độ chính xác cao là:",
      options: ["Dấu đánh không bị mất và các cá thể có dấu hòa lẫn đồng đều vào quần thể", "Quần thể cá liên tục di cư đi nơi khác", "Cá có dấu bị bắt dễ dàng hơn cá không dấu", "Số lượng cá tăng gấp đôi sau khi thả"],
      ans: 0,
      exp: "Giả định hệ kín (không sinh, tử, di cư đột biến trong thời gian ngắn) và dấu đánh không ảnh hưởng đến khả năng sống/bị bắt lại của cá thể."
    },
    {
      q: "Nếu tỉ lệ cá có dấu bắt lại $r/n$ càng nhỏ thì kích thước quần thể $N$ ước tính sẽ:",
      options: ["Càng lớn", "Càng nhỏ", "Không thay đổi", "Tiến về 0"],
      ans: 0,
      exp: "Vì $N \\approx \\frac{m \\cdot n}{r} = \\frac{m}{r/n}$, khi tỉ lệ $r/n$ càng bé thì mẫu số nhỏ khiến $N$ ước tính càng lớn."
    }
  ]
};

const outPath = path.join(__dirname, 'toan10_review_quizzes.js');
const fileContent = '// scratch/toan10_review_quizzes.js\n// Bộ 90 câu hỏi ôn tập củng cố trọn vẹn cho 30 bài Toán 10 (3 câu/bài)\nmodule.exports = ' + JSON.stringify(reviewQuizzes, null, 2) + ';\n';

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Successfully generated 90 review quizzes for all 30 lessons!');
