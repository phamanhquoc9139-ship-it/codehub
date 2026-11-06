// scratch/toan10_quizzes.js
module.exports = {
  "1": {
    "q": "Câu nào sau đây là một mệnh đề toán học?",
    "options": [
      "Số 17 là một số nguyên tố.",
      "Bạn học lớp mấy thế?",
      "Toán học thật là thú vị!",
      "Hãy làm bài tập về nhà ngay đi."
    ],
    "ans": 0,
    "exp": "Mệnh đề logic là câu khẳng định có giá trị chân lí xác định (đúng hoặc sai). 'Số 17 là số nguyên tố' là khẳng định đúng."
  },
  "2": {
    "q": "Cho tập hợp $A = [1; 5]$ và $B = (3; 7)$. Tập hợp $A \\cap B$ là:",
    "options": [
      "(3; 5]",
      "[1; 7)",
      "[3; 5]",
      "(1; 7)"
    ],
    "ans": 0,
    "exp": "Giao $A \\cap B$ lấy phần tử chung: $3 < x \\le 5$, tức là nửa khoảng $(3; 5]$."
  },
  "3": {
    "q": "Cặp số nào sau đây là một nghiệm của bất phương trình $2x - 3y + 1 > 0$?",
    "options": [
      "(2; 1)",
      "(0; 1)",
      "(1; 2)",
      "(-1; 0)"
    ],
    "ans": 0,
    "exp": "Thay $(2; 1)$ vào: $2(2) - 3(1) + 1 = 4 - 3 + 1 = 2 > 0$ (thỏa mãn)."
  },
  "4": {
    "q": "Trong bài toán quy hoạch tuyến tính trên miền đa giác lồi đóng và bị chặn, giá trị lớn nhất của hàm mục tiêu $F(x; y) = ax + by$ luôn đạt được tại:",
    "options": [
      "Một trong các đỉnh của đa giác miền nghiệm",
      "Gốc tọa độ $O(0; 0)$",
      "Tâm đối xứng của đa giác",
      "Trung điểm của một cạnh bất kì"
    ],
    "ans": 0,
    "exp": "Định lí tối ưu tuyến tính khẳng định giá trị Max hoặc Min của biểu thức tuyến tính luôn đạt tại một trong các đỉnh của đa giác nghiệm."
  },
  "5": {
    "q": "Giá trị của $\\cos 120^\\circ$ bằng:",
    "options": [
      "-1/2",
      "1/2",
      "$-\\sqrt{3}/2$",
      "$\\sqrt{3}/2$"
    ],
    "ans": 0,
    "exp": "Áp dụng quan hệ góc bù: $\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -1/2$."
  },
  "6": {
    "q": "Cho tam giác $ABC$ có $b = 7, c = 5$ và $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
    "options": [
      "$\\sqrt{39}$",
      "39",
      "$\\sqrt{74}$",
      "8"
    ],
    "ans": 0,
    "exp": "Theo định lí côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 49 + 25 - 2(7)(5)(1/2) = 74 - 35 = 39 \\implies a = \\sqrt{39}$."
  },
  "7": {
    "q": "Hai vectơ được gọi là bằng nhau khi và chỉ khi:",
    "options": [
      "Chúng có cùng hướng và cùng độ dài",
      "Chúng có cùng độ dài",
      "Giá của chúng song song với nhau",
      "Chúng có cùng điểm đầu"
    ],
    "ans": 0,
    "exp": "Hai vectơ bằng nhau khi chúng có cùng hướng và cùng độ dài."
  },
  "8": {
    "q": "Cho hình bình hành $ABCD$. Vectơ $\\vec{AB} + \\vec{AD}$ bằng vectơ nào sau đây?",
    "options": [
      "$\\vec{AC}$",
      "$\\vec{CA}$",
      "$\\vec{BD}$",
      "$\\vec{DB}$"
    ],
    "ans": 0,
    "exp": "Theo quy tắc hình bình hành: tổng hai vectơ chung gốc bằng vectơ đường chéo xuất phát từ gốc chung: $\\vec{AB} + \\vec{AD} = \\vec{AC}$."
  },
  "9": {
    "q": "Cho đoạn thẳng $AB$ có trung điểm $I$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
    "options": [
      "$\\vec{IA} + \\vec{IB} = \\vec{0}$",
      "$\\vec{IA} = \\vec{IB}$",
      "$\\vec{AB} = 2\\vec{IA}$",
      "$\\vec{AI} + \\vec{BI} = \\vec{AB}$"
    ],
    "ans": 0,
    "exp": "Vì $I$ là trung điểm nên $\\vec{IA}$ và $\\vec{IB}$ là hai vectơ đối nhau, do đó $\\vec{IA} + \\vec{IB} = \\vec{0}$."
  },
  "10": {
    "q": "Trong mặt phẳng $Oxy$, cho $A(1; 3)$ và $B(5; -1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:",
    "options": [
      "(3; 1)",
      "(6; 2)",
      "(2; -2)",
      "(4; -4)"
    ],
    "ans": 0,
    "exp": "Tọa độ trung điểm: $x_M = (1 + 5)/2 = 3; y_M = (3 + (-1))/2 = 1 \\implies M(3; 1)$."
  },
  "11": {
    "q": "Cho $\\vec{a} = (1; 2)$ và $\\vec{b} = (-2; 1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
    "options": [
      "0 (hai vectơ vuông góc)",
      "4",
      "-4",
      "1"
    ],
    "ans": 0,
    "exp": "Tích vô hướng: $\\vec{a} \\cdot \\vec{b} = 1(-2) + 2(1) = -2 + 2 = 0 \\implies \\vec{a} \\perp \\vec{b}$."
  },
  "12": {
    "q": "Biết kết quả đo chiều dài một chiếc bàn là $L = 1.25 \\pm 0.01$ m. Sai số tuyệt đối của phép đo không vượt quá:",
    "options": [
      "0.01 m",
      "0.02 m",
      "1.25 m",
      "0.005 m"
    ],
    "ans": 0,
    "exp": "Theo cách ghi $a \\pm d$, độ chính xác $d = 0.01$ m chính là chặn trên của sai số tuyệt đối $\\Delta_L \\le 0.01$ m."
  },
  "13": {
    "q": "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 9, 10. Số trung vị $M_e$ của mẫu số liệu là:",
    "options": [
      "7.5",
      "7",
      "8",
      "7.8"
    ],
    "ans": 0,
    "exp": "Mẫu có $n = 6$ (chẵn), hai phần tử giữa là 7 và 8. Trung vị $M_e = (7 + 8)/2 = 7.5$."
  },
  "14": {
    "q": "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu đo mức độ phân tán của:",
    "options": [
      "50% số liệu ở trung tâm",
      "Toàn bộ 100% số liệu",
      "25% số liệu nhỏ nhất",
      "Chỉ hai giá trị lớn nhất và nhỏ nhất"
    ],
    "ans": 0,
    "exp": "$\\Delta_Q = Q_3 - Q_1$ đại diện cho độ phân tán của 50% số liệu nằm ở chính giữa mẫu, không bị ảnh hưởng bởi giá trị ngoại lai."
  },
  "15": {
    "q": "Tập xác định của hàm số $y = \\frac{1}{\\sqrt{x - 2}}$ là:",
    "options": [
      "$(2; +\\infty)$",
      "$[2; +\\infty)$",
      "$\\mathbb{R} \\setminus {2}$",
      "$(-\\infty; 2)$"
    ],
    "ans": 0,
    "exp": "Biểu thức dưới căn ở mẫu có nghĩa khi $x - 2 > 0 \\Leftrightarrow x > 2$, tức là khoảng $(2; +\\infty)$."
  },
  "16": {
    "q": "Tọa độ đỉnh $I$ của parabol $y = x^2 - 4x + 3$ là:",
    "options": [
      "(2; -1)",
      "(-2; 15)",
      "(4; 3)",
      "(2; 3)"
    ],
    "ans": 0,
    "exp": "Hoành độ đỉnh $x_I = -b/(2a) = 4/2 = 2$. Tung độ $y_I = 2^2 - 4(2) + 3 = -1 \\implies I(2; -1)$."
  },
  "17": {
    "q": "Tập nghiệm của bất phương trình bậc hai $x^2 - 5x + 6 < 0$ là:",
    "options": [
      "(2; 3)",
      "$(-\\infty; 2) \\cup (3; +\\infty)$",
      "[2; 3]",
      "\\varnothing"
    ],
    "ans": 0,
    "exp": "Phương trình có 2 nghiệm $x = 2, x = 3$. Hệ số $a = 1 > 0$. Áp dụng quy tắc 'trong trái ngoài cùng', $f(x) < 0$ trong khoảng $(2; 3)$."
  },
  "18": {
    "q": "Tập nghiệm của phương trình $\\sqrt{x + 3} = x + 1$ là:",
    "options": [
      "{1}",
      "{-2; 1}",
      "{-2}",
      "\\varnothing"
    ],
    "ans": 0,
    "exp": "Điều kiện $x + 1 \\ge 0 \\Leftrightarrow x \\ge -1$. Bình phương: $x + 3 = x^2 + 2x + 1 \\Leftrightarrow x^2 + x - 2 = 0 \\implies x = 1$ (nhận), $x = -2$ (loại)."
  },
  "19": {
    "q": "Vectơ nào sau đây là một vectơ pháp tuyến của đường thẳng $\\Delta: 2x - 3y + 5 = 0$?",
    "options": [
      "$\\vec{n} = (2; -3)$",
      "$\\vec{u} = (3; 2)$",
      "$\\vec{n} = (2; 3)$",
      "$\\vec{n} = (-3; 2)$"
    ],
    "ans": 0,
    "exp": "Đường thẳng $ax + by + c = 0$ nhận $\\vec{n} = (a; b) = (2; -3)$ làm vectơ pháp tuyến."
  },
  "20": {
    "q": "Khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng $\\Delta: 3x - 4y + 10 = 0$ là:",
    "options": [
      "2",
      "10",
      "5",
      "1"
    ],
    "ans": 0,
    "exp": "$d(O, \\Delta) = \\frac{|3(0) - 4(0) + 10|}{\\sqrt{3^2 + (-4)^2}} = \\frac{10}{5} = 2$."
  },
  "21": {
    "q": "Đường tròn $(x - 1)^2 + (y + 2)^2 = 9$ có tâm $I$ và bán kính $R$ lần lượt là:",
    "options": [
      "I(1; -2) và R = 3",
      "I(-1; 2) và R = 9",
      "I(1; 2) và R = 3",
      "I(-1; -2) và R = 9"
    ],
    "ans": 0,
    "exp": "Phương trình chính tắc $(x - a)^2 + (y - b)^2 = R^2$ có tâm $I(a; b) = (1; -2)$ và $R = \\sqrt{9} = 3$."
  },
  "22": {
    "q": "Phương trình chính tắc của đường Elip có độ dài trục lớn bằng 10 và tiêu cự bằng 6 là:",
    "options": [
      "x²/25 + y²/16 = 1",
      "x²/100 + y²/36 = 1",
      "x²/25 + y²/9 = 1",
      "x²/16 + y²/25 = 1"
    ],
    "ans": 0,
    "exp": "Ta có $2a = 10 \\implies a = 5 \\implies a^2 = 25$. Tiêu cự $2c = 6 \\implies c = 3$. Suy ra $b^2 = a^2 - c^2 = 25 - 9 = 16$. Phương trình: $x^2/25 + y^2/16 = 1$."
  },
  "23": {
    "q": "Một bạn học sinh có 4 chiếc áo sơ mi khác nhau và 3 chiếc quần âu khác nhau. Hỏi có bao nhiêu cách chọn một bộ quần áo (gồm 1 áo và 1 quần)?",
    "options": [
      "12 cách",
      "7 cách",
      "24 cách",
      "1 cách"
    ],
    "ans": 0,
    "exp": "Công việc gồm 2 công đoạn liên tiếp: chọn 1 áo (4 cách), chọn 1 quần (3 cách). Theo quy tắc nhân: $4 \\times 3 = 12$ cách."
  },
  "24": {
    "q": "Có bao nhiêu cách chọn 3 bạn học sinh từ một nhóm 10 học sinh để đi trực nhật?",
    "options": [
      "120 cách (C₁₀³)",
      "720 cách (A₁₀³)",
      "30 cách",
      "100 cách"
    ],
    "ans": 0,
    "exp": "Chọn 3 người không phân biệt thứ tự là một tổ hợp chập 3 của 10: $C_{10}^3 = \\frac{10!}{3!7!} = 120$ cách."
  },
  "25": {
    "q": "Hệ số của số hạng chứa $x^2$ trong khai triển nhị thức $(x + 2)^4$ là:",
    "options": [
      "24",
      "6",
      "12",
      "16"
    ],
    "ans": 0,
    "exp": "Số hạng tổng quát: $C_4^k x^{4-k} 2^k$. Để có $x^2$ thì $4 - k = 2 \\implies k = 2$. Hệ số là $C_4^2 \\cdot 2^2 = 6 \\cdot 4 = 24$."
  },
  "26": {
    "q": "Gieo một con xúc xắc cân đối và đồng chất 6 mặt một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố là:",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "1/6"
    ],
    "ans": 0,
    "exp": "Không gian mẫu $n(\\Omega) = 6$. Các mặt nguyên tố là $\\{2; 3; 5\\}$ ($n(A) = 3$). Xác suất $P(A) = 3/6 = 1/2$."
  },
  "27": {
    "q": "Rút ngẫu nhiên đồng thời 2 lá bài từ cỗ bài tây 52 lá. Số phần tử của không gian mẫu $n(\\Omega)$ bằng:",
    "options": [
      "C₅₂² = 1326",
      "A₅₂² = 2652",
      "52 × 2 = 104",
      "52"
    ],
    "ans": 0,
    "exp": "Rút đồng thời 2 lá từ 52 lá không phân biệt thứ tự: $n(\\Omega) = C_{52}^2 = \\frac{52 \\times 51}{2} = 1326$."
  },
  "28": {
    "q": "Trong biểu giá điện sinh hoạt bậc thang, hàm số biểu diễn số tiền điện phải trả theo lượng tiêu thụ là một ví dụ thực tế của:",
    "options": [
      "Hàm số cho bởi nhiều công thức (hàm từng đoạn)",
      "Hàm số bậc nhất đồng biến duy nhất",
      "Hàm số bậc hai có đỉnh parabol",
      "Hàm hằng không đổi"
    ],
    "ans": 0,
    "exp": "Giá điện theo bậc thang được tính bằng các đơn giá khác nhau trên từng khoảng tiêu thụ, tương ứng với hàm số từng đoạn."
  },
  "29": {
    "q": "Khi khảo sát thống kê về thời gian dùng mạng xã hội của học sinh có một vài bạn dùng đến 12 giờ/ngày (giá trị rất lớn), đại lượng đo xu thế trung tâm ít bị ảnh hưởng nhất là:",
    "options": [
      "Trung vị (Median)",
      "Số trung bình cộng",
      "Khoảng biến thiên R",
      "Phương sai"
    ],
    "ans": 0,
    "exp": "Trung vị và tứ phân vị ít bị ảnh hưởng bởi các giá trị bất thường (outliers), trong khi số trung bình và phương sai rất nhạy cảm."
  },
  "30": {
    "q": "Trong phương pháp đánh dấu bắt lại, lần 1 bắt và đánh dấu $m = 100$ con cá. Lần 2 bắt $n = 80$ con, thấy có $r = 10$ con mang dấu. Ước tính số cá $N$ trong hồ là:",
    "options": [
      "800 con",
      "180 con",
      "700 con",
      "1000 con"
    ],
    "ans": 0,
    "exp": "Theo công thức $N \\approx (m \\cdot n)/r = (100 \\times 80)/10 = 800$ con cá."
  }
};
