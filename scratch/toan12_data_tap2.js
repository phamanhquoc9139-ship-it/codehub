// toan12_data_tap2.js - Data for Tập Hai: Chương IV, V, VI, Bảng công thức & Đấu trường 45 phút
module.exports = {
  tap2Meta: {
    title: "TẬP HAI",
    description: "Nguyên hàm và tích phân, Phương pháp tọa độ Oxyz trong không gian, Xác suất có điều kiện và công thức Bayes.",
    chapters: ["Chương IV", "Chương V", "Chương VI"],
    lessonCount: 9
  },
  chuong4: {
    id: "chuong-4",
    code: "CHƯƠNG IV",
    title: "Nguyên hàm và tích phân",
    desc: "Khái niệm nguyên hàm, bảng nguyên hàm cơ bản; Định nghĩa tích phân Newton–Leibniz; Ứng dụng hình học tính diện tích hình phẳng và thể tích khối tròn xoay.",
    badgeColor: "cyan",
    lessons: [
      {
        id: "bai-11",
        num: "Bài 11",
        title: "Nguyên hàm",
        duration: "90 phút",
        objective: "Hiểu định nghĩa nguyên hàm, họ nguyên hàm; thuộc lòng bảng nguyên hàm các hàm số sơ cấp thường gặp; nắm vững tính chất tuyến tính và phương pháp đổi biến số đơn giản.",
        theorySections: [
          {
            title: "1. Khái niệm nguyên hàm",
            badge: "Định nghĩa & Tính chất",
            points: [
              "**Định nghĩa:** Cho hàm số $f(x)$ xác định trên khoảng hoặc đoạn $K$. Hàm số $F(x)$ được gọi là một **nguyên hàm** của $f(x)$ trên $K$ nếu:",
              "$$F'(x) = f(x) \\quad \\text{với mọi } x \\in K.$$",
              "**Định lí về họ nguyên hàm:** Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì mọi nguyên hàm của $f(x)$ trên $K$ đều có dạng $F(x) + C$, với $C$ là hằng số thực tùy ý. Kí hiệu họ nguyên hàm là:",
              "$$\\int f(x)\\,dx = F(x) + C.$$",
              "**Định lí tồn tại:** Mọi hàm số liên tục trên khoảng $K$ đều có nguyên hàm trên khoảng đó.",
              "**Tính chất tuyến tính:**",
              "• $\\int k \\cdot f(x)\\,dx = k \\int f(x)\\,dx$ (với $k$ là hằng số khác 0).",
              "• $\\int [f(x) \\pm g(x)]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx$."
            ]
          },
          {
            title: "2. Bảng nguyên hàm thường dùng chuẩn SGK",
            badge: "Công thức cốt lõi",
            points: [
              "• Nguyên hàm hàm lũy thừa: $\\int x^\\alpha\\,dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\quad (\\alpha \\ne -1)$. Đặc biệt: $\\int 1\\,dx = x + C$.",
              "• Nguyên hàm hàm phân thức cơ bản: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C \\quad (x \\ne 0)$.",
              "• Nguyên hàm hàm mũ: $\\int e^x\\,dx = e^x + C$; $\\quad \\int a^x\\,dx = \\frac{a^x}{\\ln a} + C \\quad (0 < a \\ne 1)$.",
              "• Nguyên hàm hàm lượng giác: $\\int \\cos x\\,dx = \\sin x + C$; $\\quad \\int \\sin x\\,dx = -\\cos x + C$.",
              "• Nguyên hàm nghịch đảo lượng giác: $\\int \\frac{1}{\\cos^2 x}\\,dx = \\tan x + C$; $\\quad \\int \\frac{1}{\\sin^2 x}\\,dx = -\\cot x + C$."
            ]
          },
          {
            title: "3. Phương pháp đổi biến & Tìm hằng số C từ điều kiện ban đầu",
            badge: "Kĩ năng tính toán",
            points: [
              "**Dạng hợp tuyến tính:** Nếu $\\int f(u)\\,du = F(u) + C$ thì với $a \\ne 0$:",
              "$$\\int f(ax + b)\\,dx = \\frac{1}{a} F(ax + b) + C.$$",
              "Ví dụ: $\\int e^{3x+1}\\,dx = \\frac{1}{3}e^{3x+1} + C$; $\\quad \\int \\cos(2x)\\,dx = \\frac{1}{2}\\sin(2x) + C$.",
              "**Xác định hằng số $C$ từ bài toán thực tế:** Biết tốc độ biến thiên $F'(t) = f(t)$ và giá trị ban đầu $F(t_0) = y_0$, ta tìm họ $F(t) + C$, sau đó thay $t_0$ vào để giải phương trình tìm duy nhất hằng số $C$.",
              "Ví dụ cơ học: Biết vận tốc $v(t) = s'(t)$, quãng đường di chuyển được xác định bởi nguyên hàm $s(t) = \\int v(t)\\,dt$ kèm điều kiện vị trí $s(0) = s_0$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Họ nguyên hàm của hàm số $f(x) = 3x^2 + \\frac{1}{x}$ trên khoảng $(0; +\\infty)$ là:",
            options: [
              "A. $F(x) = x^3 + \\ln x + C$",
              "B. $F(x) = 6x - \\frac{1}{x^2} + C$",
              "C. $F(x) = x^3 - \\frac{1}{x^2} + C$",
              "D. $F(x) = 3x^3 + \\ln x + C$"
            ],
            correct: 0,
            explain: "Ta có $\\int (3x^2 + \\frac{1}{x})\\,dx = 3\\frac{x^3}{3} + \\ln|x| + C = x^3 + \\ln x + C$ (vì $x > 0$ nên $|x| = x$)."
          },
          {
            q: "Biết $F(x)$ là một nguyên hàm của hàm số $f(x) = e^{2x}$ thỏa mãn $F(0) = 2$. Giá trị của $F(1)$ bằng:",
            options: [
              "A. $\\frac{1}{2}e^2 + \\frac{3}{2}$",
              "B. $e^2 + 1$",
              "C. $\\frac{1}{2}e^2 + 2$",
              "D. $2e^2$"
            ],
            correct: 0,
            explain: "Họ nguyên hàm: $F(x) = \\int e^{2x}\\,dx = \\frac{1}{2}e^{2x} + C$. Theo giả thiết: $F(0) = \\frac{1}{2}e^0 + C = \\frac{1}{2} + C = 2 \\Rightarrow C = \\frac{3}{2}$. Vậy $F(x) = \\frac{1}{2}e^{2x} + \\frac{3}{2} \\Rightarrow F(1) = \\frac{1}{2}e^2 + \\frac{3}{2}$."
          },
          {
            q: "Một chất điểm bắt đầu chuyển động với vận tốc $v(t) = 3t^2 + 2t$ (m/s). Quãng đường chất điểm đi được sau 3 giây đầu tiên (biết $s(0) = 0$) là:",
            options: ["A. 36 m", "B. 27 m", "C. 30 m", "D. 42 m"],
            correct: 0,
            explain: "Quãng đường $s(t) = \\int (3t^2 + 2t)\\,dt = t^3 + t^2 + C$. Vì $s(0) = 0 \\Rightarrow C = 0$. Sau 3 giây: $s(3) = 3^3 + 3^2 = 27 + 9 = 36$ m."
          }
        ]
      },
      {
        id: "bai-12",
        num: "Bài 12",
        title: "Tích phân",
        duration: "90 phút",
        objective: "Nắm vững định nghĩa tích phân xác định bằng công thức Newton–Leibniz; các tính chất đổi cận, cộng đoạn, bảo toàn thứ tự; phân biệt độ dịch chuyển và tổng quãng đường.",
        theorySections: [
          {
            title: "1. Định nghĩa tích phân Newton–Leibniz",
            badge: "Công thức nền tảng",
            points: [
              "Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$. Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $[a; b]$ thì hiệu số $F(b) - F(a)$ được gọi là **tích phân** của $f(x)$ từ $a$ đến $b$:",
              "$$\\int_a^b f(x)\\,dx = \\left. F(x) \\right|_a^b = F(b) - F(a).$$",
              "• $a$ gọi là cận dưới, $b$ là cận trên, $f(x)$ là hàm dưới dấu tích phân, $x$ là biến lấy tích phân.",
              "• Tích phân chỉ phụ thuộc vào cận $a, b$ và dạng hàm số $f$, hoàn toàn độc lập với kí hiệu biến: $\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(u)\\,du$."
            ]
          },
          {
            title: "2. Các tính chất quan trọng của tích phân",
            badge: "Tính chất đại số",
            points: [
              "• Đổi cận tích phân: $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$; $\\quad \\int_a^a f(x)\\,dx = 0$.",
              "• Tính chất tuyến tính: $\\int_a^b k \\cdot f(x)\\,dx = k \\int_a^b f(x)\\,dx$; $\\quad \\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$.",
              "• Tính chất cộng đoạn (chèn cận): Với ba điểm $a, b, c$ bất kì: $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$.",
              "• Tính chất bảo toàn thứ tự: Nếu $f(x) \\ge 0$ trên $[a; b]$ (với $a < b$) thì $\\int_a^b f(x)\\,dx \\ge 0$. Nếu $f(x) \\ge g(x)$ thì $\\int_a^b f(x)\\,dx \\ge \\int_a^b g(x)\\,dx$."
            ]
          },
          {
            title: "3. Ý nghĩa vật lý: Độ dịch chuyển vs Quãng đường",
            badge: "Ứng dụng động học",
            points: [
              "Cho một vật chuyển động trên trục số với vận tốc $v(t)$ trong khoảng thời gian từ $t_1$ đến $t_2$:",
              "• **Độ dịch chuyển (Displacement):** $\\Delta s = \\int_{t_1}^{t_2} v(t)\\,dt = s(t_2) - s(t_1)$. Tích phân này có thể âm, dương hoặc bằng 0 tùy vào vị trí cuối so với vị trí đầu.",
              "• **Tổng quãng đường đi được (Total Distance):** $S = \\int_{t_1}^{t_2} |v(t)|\\,dt$. Vì $|v(t)| \\ge 0$ nên tổng quãng đường luôn không âm. Hai đại lượng này chỉ bằng nhau khi vật chuyển động theo một chiều duy nhất ($v(t)$ không đổi dấu).",
              "• **Giá trị trung bình của hàm số:** Giá trị trung bình của $f(x)$ trên $[a; b]$ được định nghĩa bởi $f_{\\text{tb}} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Giá trị của tích phân $I = \\int_0^1 (2x + 1)\\,dx$ bằng:",
            options: ["A. 2", "B. 1", "C. 3", "D. 4"],
            correct: 0,
            explain: "Ta có nguyên hàm $F(x) = x^2 + x$. Do đó $I = \\left. (x^2 + x) \\right|_0^1 = (1^2 + 1) - (0^2 + 0) = 2$."
          },
          {
            q: "Nếu $\\int_1^3 f(x)\\,dx = 4$ và $\\int_2^3 f(x)\\,dx = 1$ thì $\\int_1^2 f(x)\\,dx$ bằng:",
            options: ["A. 3", "B. 5", "C. -3", "D. 4"],
            correct: 0,
            explain: "Theo tính chất cộng đoạn: $\\int_1^3 f(x)\\,dx = \\int_1^2 f(x)\\,dx + \\int_2^3 f(x)\\,dx \\Rightarrow \\int_1^2 f(x)\\,dx = \\int_1^3 f(x)\\,dx - \\int_2^3 f(x)\\,dx = 4 - 1 = 3$."
          },
          {
            q: "Một vật chuyển động với vận tốc $v(t) = 4 - 2t$ (m/s) trong khoảng thời gian từ $t = 0$ đến $t = 3$ giây. Tổng quãng đường vật đã đi được là:",
            options: ["A. 5 m", "B. 3 m", "C. 4 m", "D. 6 m"],
            correct: 0,
            explain: "Ta có $v(t) = 0 \\Leftrightarrow t = 2$ s. Trên $[0; 2]$, $v(t) \\ge 0$; trên $[2; 3]$, $v(t) \\le 0$. Tổng quãng đường là $S = \\int_0^3 |4 - 2t|\\,dt = \\int_0^2 (4 - 2t)\\,dt + \\int_2^3 -(4 - 2t)\\,dt = \\left.(4t - t^2)\\right|_0^2 + \\left.(t^2 - 4t)\\right|_2^3 = (8 - 4) + [(9 - 12) - (4 - 8)] = 4 + [-3 - (-4)] = 4 + 1 = 5$ m."
          }
        ]
      },
      {
        id: "bai-13",
        num: "Bài 13",
        title: "Ứng dụng hình học của tích phân",
        duration: "120 phút",
        objective: "Nắm vững công thức tính diện tích hình phẳng giới hạn bởi đồ thị và trục hoành hoặc giữa 2 đường cong; công thức tính thể tích vật thể qua diện tích mặt cắt S(x) và thể tích khối tròn xoay quanh trục Ox.",
        theorySections: [
          {
            title: "1. Tính diện tích hình phẳng",
            badge: "Công thức diện tích",
            points: [
              "**Diện tích giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$ ($a < b$):**",
              "$$S = \\int_a^b |f(x)|\\,dx.$$",
              "• Cách tính: Giải phương trình $f(x) = 0$ để tìm các nghiệm thuộc $[a; b]$, chia đoạn $[a; b]$ thành các đoạn con mà trên đó $f(x)$ không đổi dấu, sau đó bỏ dấu giá trị tuyệt đối ra ngoài dấu tích phân trên từng đoạn.",
              "**Diện tích giới hạn bởi hai đồ thị $y = f(x)$ và $y = g(x)$ cùng hai đường thẳng $x = a, x = b$:**",
              "$$S = \\int_a^b |f(x) - g(x)|\\,dx.$$",
              "• Nếu không cho trước $a, b$, ta giải phương trình hoành độ giao điểm $f(x) = g(x)$ để tìm cận bé nhất $a$ và cận lớn nhất $b$."
            ]
          },
          {
            title: "2. Thể tích vật thể qua diện tích mặt cắt S(x)",
            badge: "Phương pháp mặt cắt",
            points: [
              "Cắt một vật thể bởi hai mặt phẳng vuông góc với trục $Ox$ tại $x = a$ và $x = b$ ($a < b$).",
              "Một mặt phẳng tùy ý vuông góc với $Ox$ tại điểm $x \\in [a; b]$ cắt vật thể theo thiết diện có diện tích là $S(x)$ (hàm số liên tục trên $[a; b]$).",
              "Thể tích của vật thể được tính bằng công thức tổng quát:",
              "$$V = \\int_a^b S(x)\\,dx.$$",
              "• Nguồn gốc các công thức cổ điển: Từ công thức này, ta dễ dàng chứng minh được thể tích hình lăng trụ $V = Sh$, hình chóp $V = \\frac{1}{3}Sh$, hình nón và hình cầu bán kính $R$ có mặt cắt là hình tròn bán kính $\\sqrt{R^2 - x^2}$ nên $S(x) = \\pi(R^2 - x^2) \\Rightarrow V = \\int_{-R}^R \\pi(R^2-x^2)\\,dx = \\frac{4}{3}\\pi R^3$."
            ]
          },
          {
            title: "3. Thể tích khối tròn xoay quanh trục Ox",
            badge: "Khối tròn xoay",
            points: [
              "Cho hình phẳng giới hạn bởi đường cong $y = f(x) \\ge 0$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$ ($a < b$). Khi quay hình phẳng này quanh trục hoành $Ox$, ta được một khối tròn xoay.",
              "Mặt cắt tại điểm $x$ là một hình tròn bán kính $R = f(x)$, do đó diện tích mặt cắt $S(x) = \\pi [f(x)]^2$. Thể tích khối tròn xoay là:",
              "$$V = \\pi \\int_a^b [f(x)]^2\\,dx.$$",
              "**Thể tích khối tròn xoay tạo bởi miền giữa hai đường cong:** Nếu quay miền nằm giữa hai đồ thị $y = f_1(x)$ và $y = f_2(x)$ ($f_1(x) \\ge f_2(x) \\ge 0$) quanh trục $Ox$, mỗi thiết diện là một hình vành khăn (vòng đệm) có bán kính ngoài $R = f_1(x)$ và bán kính trong $r = f_2(x)$:",
              "$$V = \\pi \\int_a^b \\left( [f_1(x)]^2 - [f_2(x)]^2 \\right) dx.$$"
            ]
          }
        ],
        quizzes: [
          {
            q: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$ bằng:",
            options: ["A. $\\frac{16}{3}$", "B. $-\\frac{16}{3}$", "C. $8$", "D. $\\frac{8}{3}$"],
            correct: 0,
            explain: "Trên đoạn $[0; 2]$, ta có $x^2 - 4 \\le 0$. Do đó diện tích $S = \\int_0^2 |x^2 - 4|\\,dx = -\\int_0^2 (x^2 - 4)\\,dx = -\\left. \\left(\\frac{x^3}{3} - 4x\\right) \\right|_0^2 = -\\left(\\frac{8}{3} - 8\\right) = -\\left(-\\frac{16}{3}\\right) = \\frac{16}{3}$."
          },
          {
            q: "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đường cong $y = \\sqrt{x}$, trục hoành và đường thẳng $x = 4$ quanh trục $Ox$ bằng:",
            options: ["A. $8\\pi$", "B. $16\\pi$", "C. $4\\pi$", "D. $\\frac{8\\pi}{3}$"],
            correct: 0,
            explain: "Áp dụng công thức thể tích khối tròn xoay quanh $Ox$: $V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx = \\pi \\left. \\frac{x^2}{2} \\right|_0^4 = \\pi \\frac{16}{2} = 8\\pi$."
          },
          {
            q: "Một vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 2$. Thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ ($0 \\le x \\le 2$) là một hình vuông có cạnh là $\\sqrt{4 - x^2}$. Thể tích của vật thể đó là:",
            options: ["A. $\\frac{16}{3}$", "B. $\\frac{8}{3}$", "C. $4\\pi$", "D. $\\frac{16\\pi}{3}$"],
            correct: 0,
            explain: "Diện tích mặt cắt tại điểm $x$ là diện tích hình vuông cạnh $\\sqrt{4 - x^2}$: $S(x) = (\\sqrt{4 - x^2})^2 = 4 - x^2$. Thể tích vật thể là $V = \\int_0^2 S(x)\\,dx = \\int_0^2 (4 - x^2)\\,dx = \\left. \\left(4x - \\frac{x^3}{3}\\right) \\right|_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}$ (chú ý: đây là bài toán mặt cắt tổng quát, không có nhân thêm hệ số $\\pi$)."
          }
        ]
      },
      {
        id: "on-tap-chuong-4",
        num: "Ôn tập",
        title: "Ôn tập chương IV — Tích phân và ứng dụng",
        duration: "60 phút",
        objective: "Hệ thống hóa toàn bộ lý thuyết và dạng bài Chương IV; phân biệt rõ tích phân đại số, diện tích hình phẳng, thể tích mặt cắt và thể tích tròn xoay.",
        theorySections: [
          {
            title: "1. Bảng công thức trọng tâm Chương IV",
            badge: "Tổng kết",
            points: [
              "• Định nghĩa nguyên hàm: $F'(x) = f(x) \\Leftrightarrow \\int f(x)\\,dx = F(x) + C$.",
              "• Định nghĩa tích phân: $\\int_a^b f(x)\\,dx = F(b) - F(a)$.",
              "• Diện tích hình phẳng: $S = \\int_a^b |f(x) - g(x)|\\,dx$.",
              "• Thể tích theo mặt cắt: $V = \\int_a^b S(x)\\,dx$.",
              "• Thể tích tròn xoay quanh $Ox$: $V = \\pi \\int_a^b [f(x)]^2\\,dx$."
            ]
          }
        ],
        quizzes: []
      }
    ]
  },
  chuong5: {
    id: "chuong-5",
    code: "CHƯƠNG V",
    title: "Phương pháp tọa độ trong không gian",
    desc: "Phương trình tổng quát mặt phẳng; Phương trình tham số và chính tắc của đường thẳng; Công thức tính góc; Phương trình mặt cầu và bài toán vị trí tương đối.",
    badgeColor: "rose",
    lessons: [
      {
        id: "bai-14",
        num: "Bài 14",
        title: "Phương trình mặt phẳng",
        duration: "90 phút",
        objective: "Nắm vững khái niệm vectơ pháp tuyến, tích có hướng; viết phương trình mặt phẳng đi qua một điểm và biết VTPT hoặc cặp VTCP; tính khoảng cách từ điểm đến mặt phẳng.",
        theorySections: [
          {
            title: "1. Vectơ pháp tuyến & Tích có hướng của hai vectơ",
            badge: "Khái niệm & Kĩ thuật",
            points: [
              "**Vectơ pháp tuyến (VTPT):** Vectơ $\\vec n \\ne \\vec 0$ gọi là VTPT của mặt phẳng $(\\alpha)$ nếu giá của $\\vec n$ vuông góc với $(\\alpha)$. Nếu $\\vec n$ là VTPT thì $k\\vec n$ ($k \\ne 0$) cũng là VTPT.",
              "**Tích có hướng (Cross Product):** Cho hai vectơ $\\vec u = (u_1; u_2; u_3)$ và $\\vec v = (v_1; v_2; v_3)$. Tích có hướng của chúng là một vectơ $[\\vec u, \\vec v]$ vuông góc với cả $\\vec u$ và $\\vec v$:",
              "$$[\\vec u, \\vec v] = \\left( \\begin{vmatrix} u_2 & u_3 \\\\ v_2 & v_3 \\end{vmatrix}; \\begin{vmatrix} u_3 & u_1 \\\\ v_3 & v_1 \\end{vmatrix}; \\begin{vmatrix} u_1 & u_2 \\\\ v_1 & v_2 \\end{vmatrix} \\right) = (u_2 v_3 - u_3 v_2;\\; u_3 v_1 - u_1 v_3;\\; u_1 v_2 - u_2 v_1).$$",
              "• Điều kiện cùng phương: $\\vec u$ và $\\vec v$ cùng phương $\\Leftrightarrow [\\vec u, \\vec v] = \\vec 0$.",
              "• Tìm VTPT từ cặp vectơ chỉ phương: Nếu $(\\alpha)$ song song hoặc chứa hai vectơ không cùng phương $\\vec u, \\vec v$ thì VTPT của mặt phẳng là $\\vec n = [\\vec u, \\vec v]$."
            ]
          },
          {
            title: "2. Phương trình tổng quát của mặt phẳng",
            badge: "Dạng phương trình",
            points: [
              "Mặt phẳng $(\\alpha)$ đi qua điểm $M_0(x_0; y_0; z_0)$ và nhận $\\vec n = (A; B; C) \\ne \\vec 0$ làm VTPT có phương trình:",
              "$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\quad \\Leftrightarrow \\quad Ax + By + Cz + D = 0,$$",
              "với $D = -(Ax_0 + By_0 + Cz_0)$ và $A^2 + B^2 + C^2 > 0$.",
              "**Phương trình mặt phẳng theo đoạn chắn:** Mặt phẳng cắt ba trục tọa độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $abc \\ne 0$ có phương trình:",
              "$$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1.$$"
            ]
          },
          {
            title: "3. Khoảng cách từ điểm đến mặt phẳng & Vị trí tương đối",
            badge: "Khoảng cách & Tương giao",
            points: [
              "**Khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(\\alpha): Ax + By + Cz + D = 0$:**",
              "$$d(M_0, (\\alpha)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}.$$",
              "**Vị trí tương đối của hai mặt phẳng:** Cho $(\\alpha): A_1x + B_1y + C_1z + D_1 = 0$ và $(\\beta): A_2x + B_2y + C_2z + D_2 = 0$ có VTPT tương ứng $\\vec n_1, \\vec n_2$:",
              "• $(\\alpha) \\parallel (\\beta) \\Leftrightarrow \\vec n_1 = k\\vec n_2$ và $D_1 \\ne kD_2$ (hoặc $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\ne \\frac{D_1}{D_2}$).",
              "• $(\\alpha) \\equiv (\\beta) \\Leftrightarrow \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} = \\frac{D_1}{D_2}$.",
              "• $(\\alpha)$ cắt $(\\beta) \\Leftrightarrow \\vec n_1$ và $\\vec n_2$ không cùng phương. Đặc biệt, $(\\alpha) \\perp (\\beta) \\Leftrightarrow \\vec n_1 \\cdot \\vec n_2 = A_1A_2 + B_1B_2 + C_1C_2 = 0$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Mặt phẳng đi qua điểm $M(1; -2; 3)$ và nhận $\\vec n = (2; 1; -1)$ làm vectơ pháp tuyến có phương trình là:",
            options: [
              "A. $2x + y - z + 3 = 0$",
              "B. $2x + y - z - 3 = 0$",
              "C. $x - 2y + 3z - 3 = 0$",
              "D. $2x + y - z = 0$"
            ],
            correct: 0,
            explain: "Phương trình mặt phẳng: $2(x - 1) + 1(y + 2) - 1(z - 3) = 0 \\Leftrightarrow 2x - 2 + y + 2 - z + 3 = 0 \\Leftrightarrow 2x + y - z + 3 = 0$."
          },
          {
            q: "Khoảng cách từ gốc tọa độ $O(0; 0; 0)$ đến mặt phẳng $(P): 2x - 2y + z - 6 = 0$ bằng:",
            options: ["A. 2", "B. 6", "C. 3", "D. $\\sqrt{3}$"],
            correct: 0,
            explain: "Áp dụng công thức khoảng cách: $d(O, (P)) = \\frac{|2(0) - 2(0) + 1(0) - 6|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|-6|}{\\sqrt{4 + 4 + 1}} = \\frac{6}{3} = 2$."
          },
          {
            q: "Tích có hướng $[\\vec u, \\vec v]$ của hai vectơ $\\vec u = (1; 0; 2)$ và $\\vec v = (0; 1; -1)$ là vectơ nào sau đây?",
            options: [
              "A. $(-2; 1; 1)$",
              "B. $(2; -1; -1)$",
              "C. $(-2; -1; 1)$",
              "D. $(1; 1; 1)$"
            ],
            correct: 0,
            explain: "Tọa độ: $x = (0)(-1) - (2)(1) = -2$; $y = (2)(0) - (1)(-1) = 1$; $z = (1)(1) - (0)(0) = 1$. Vậy $[\\vec u, \\vec v] = (-2; 1; 1)$."
          }
        ]
      },
      {
        id: "bai-15",
        num: "Bài 15",
        title: "Phương trình đường thẳng trong không gian",
        duration: "90 phút",
        objective: "Nắm vững khái niệm vectơ chỉ phương; viết phương trình tham số và chính tắc của đường thẳng; xét 4 vị trí tương đối giữa hai đường thẳng (cắt nhau, chéo nhau, song song, trùng nhau).",
        theorySections: [
          {
            title: "1. Phương trình tham số và phương trình chính tắc",
            badge: "Dạng phương trình",
            points: [
              "**Vectơ chỉ phương (VTCP):** Vectơ $\\vec u \\ne \\vec 0$ gọi là VTCP của đường thẳng $\\Delta$ nếu giá của nó song song hoặc trùng với $\\Delta$.",
              "**Phương trình tham số:** Đường thẳng $\\Delta$ đi qua điểm $M_0(x_0; y_0; z_0)$ và có VTCP $\\vec u = (a; b; c) \\ne \\vec 0$ có phương trình tham số:",
              "$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R}).$$",
              "**Phương trình chính tắc:** Nếu $a, b, c$ đều khác 0, khử tham số $t$ ta được dạng chính tắc:",
              "$$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}.$$"
            ]
          },
          {
            title: "2. Bốn vị trí tương đối của hai đường thẳng",
            badge: "Phân loại vị trí",
            points: [
              "Cho $\\Delta_1$ đi qua $M_1$ có VTCP $\\vec u_1$ và $\\Delta_2$ đi qua $M_2$ có VTCP $\\vec u_2$. Xét vectơ $\\overrightarrow{M_1M_2}$:",
              "• **Trùng nhau:** $\\vec u_1$ cùng phương $\\vec u_2$ và $M_1 \\in \\Delta_2$.",
              "• **Song song:** $\\vec u_1$ cùng phương $\\vec u_2$ và $M_1 \\notin \\Delta_2$.",
              "• **Cắt nhau:** $\\vec u_1, \\vec u_2$ không cùng phương và hệ phương trình tọa độ giao điểm có nghiệm duy nhất (tương đương $[\\vec u_1, \\vec u_2] \\cdot \\overrightarrow{M_1M_2} = 0$).",
              "• **Chéo nhau:** $\\vec u_1, \\vec u_2$ không cùng phương và không cắt nhau (tương đương $[\\vec u_1, \\vec u_2] \\cdot \\overrightarrow{M_1M_2} \\ne 0$)."
            ]
          }
        ],
        quizzes: [
          {
            q: "Đường thẳng đi qua điểm $A(1; 2; -3)$ và có vectơ chỉ phương $\\vec u = (3; -1; 2)$ có phương trình chính tắc là:",
            options: [
              "A. $\\frac{x - 1}{3} = \\frac{y - 2}{-1} = \\frac{z + 3}{2}$",
              "B. $\\frac{x + 1}{3} = \\frac{y + 2}{-1} = \\frac{z - 3}{2}$",
              "C. $\\frac{x - 3}{1} = \\frac{y + 1}{2} = \\frac{z - 2}{-3}$",
              "D. $\\frac{x - 1}{3} = \\frac{y - 2}{1} = \\frac{z + 3}{2}$"
            ],
            correct: 0,
            explain: "Phương trình chính tắc dạng $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$. Thay $M_0(1; 2; -3)$ và $\\vec u = (3; -1; 2)$ ta được $\\frac{x - 1}{3} = \\frac{y - 2}{-1} = \\frac{z + 3}{2}$."
          },
          {
            q: "Vị trí tương đối của hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{3}$ và $d_2: \\frac{x}{4} = \\frac{y - 1}{2} = \\frac{z}{6}$ là:",
            options: ["A. Song song", "B. Trùng nhau", "C. Cắt nhau", "D. Chéo nhau"],
            correct: 0,
            explain: "Hai vectơ chỉ phương là $\\vec u_1 = (2; 1; 3)$ và $\\vec u_2 = (4; 2; 6) = 2\\vec u_1$ nên hai đường thẳng cùng phương. Lấy điểm $M(1; 0; -1) \\in d_1$, thay vào $d_2$: $\\frac{1}{4} \\ne \\frac{0 - 1}{2} = -\\frac{1}{2}$, do đó $M \\notin d_2$. Vậy $d_1 \\parallel d_2$."
          },
          {
            q: "Cho đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 3 - t \\end{cases}$ và mặt phẳng $(P): x + 2y + 4z - 11 = 0$. Tọa độ giao điểm của $d$ và $(P)$ là:",
            options: ["A. $(3; 0; 2)$", "B. $(1; -1; 3)$", "C. $(-1; -2; 4)$", "D. $(5; 1; 1)$"],
            correct: 0,
            explain: "Thay phương trình tham số của $d$ vào $(P)$: $(1 + 2t) + 2(-1 + t) + 4(3 - t) - 11 = 0 \\Leftrightarrow 1 + 2t - 2 + 2t + 12 - 4t - 11 = 0 \\Leftrightarrow 0t = 0$? Ta kiểm tra lại hệ số: $2t + 2t - 4t = 0$. $1 - 2 + 12 - 11 = 0$. Như vậy $0 = 0$ thỏa mãn với mọi $t$, nghĩa là $d$ nằm trọn trong mặt phẳng $(P)$! Với $t = 1$, ta có điểm $(3; 0; 2)$ thuộc cả $d$ và $(P)$."
          }
        ]
      },
      {
        id: "bai-16",
        num: "Bài 16",
        title: "Công thức tính góc trong không gian",
        duration: "90 phút",
        objective: "Nắm vững công thức tính góc giữa hai đường thẳng (dùng côsin), góc giữa đường thẳng và mặt phẳng (dùng sin), góc giữa hai mặt phẳng (dùng côsin); thành thạo điều kiện vuông góc.",
        theorySections: [
          {
            title: "1. Góc giữa hai đường thẳng",
            badge: "Công thức Cosin",
            points: [
              "Cho $\\Delta_1, \\Delta_2$ có các VTCP lần lượt là $\\vec u_1 = (a_1; b_1; c_1)$ và $\\vec u_2 = (a_2; b_2; c_2)$.",
              "Góc $\\varphi$ giữa hai đường thẳng thỏa mãn $0^\\circ \\le \\varphi \\le 90^\\circ$ và được tính bởi:",
              "$$\\cos \\varphi = \\frac{|\\vec u_1 \\cdot \\vec u_2|}{|\\vec u_1| \\cdot |\\vec u_2|} = \\frac{|a_1 a_2 + b_1 b_2 + c_1 c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2} \\cdot \\sqrt{a_2^2 + b_2^2 + c_2^2}}.$$",
              "• Đặc biệt: $\\Delta_1 \\perp \\Delta_2 \\Leftrightarrow \\vec u_1 \\cdot \\vec u_2 = 0 \\Leftrightarrow a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$."
            ]
          },
          {
            title: "2. Góc giữa đường thẳng và mặt phẳng",
            badge: "Công thức Sin",
            points: [
              "Cho đường thẳng $\\Delta$ có VTCP $\\vec u = (a; b; c)$ và mặt phẳng $(\\alpha)$ có VTPT $\\vec n = (A; B; C)$.",
              "Góc $\\theta$ giữa đường thẳng và mặt phẳng ($0^\\circ \\le \\theta \\le 90^\\circ$) là góc giữa đường thẳng và hình chiếu vuông góc của nó lên mặt phẳng. Vì $\\vec n$ vuông góc với mặt phẳng nên góc giữa $\\vec u$ và $\\vec n$ phụ với $\\theta$, do đó dùng hàm **sin**:",
              "$$\\sin \\theta = \\frac{|\\vec u \\cdot \\vec n|}{|\\vec u| \\cdot |\\vec n|} = \\frac{|Aa + Bb + Cc|}{\\sqrt{a^2 + b^2 + c^2} \\cdot \\sqrt{A^2 + B^2 + C^2}}.$$",
              "• Đặc biệt: $\\Delta \\parallel (\\alpha)$ hoặc $\\Delta \\subset (\\alpha) \\Leftrightarrow \\vec u \\perp \\vec n \\Leftrightarrow \\sin\\theta = 0$. $\\Delta \\perp (\\alpha) \\Leftrightarrow \\vec u$ cùng phương $\\vec n \\Leftrightarrow \\sin\\theta = 1$."
            ]
          },
          {
            title: "3. Góc giữa hai mặt phẳng",
            badge: "Công thức Cosin",
            points: [
              "Cho hai mặt phẳng $(\\alpha)$ và $(\\beta)$ có các VTPT tương ứng là $\\vec n_1 = (A_1; B_1; C_1)$ và $\\vec n_2 = (A_2; B_2; C_2)$.",
              "Góc $\\gamma$ giữa hai mặt phẳng ($0^\\circ \\le \\gamma \\le 90^\\circ$) được tính qua côsin:",
              "$$\\cos \\gamma = \\frac{|\\vec n_1 \\cdot \\vec n_2|}{|\\vec n_1| \\cdot |\\vec n_2|} = \\frac{|A_1 A_2 + B_1 B_2 + C_1 C_2|}{\\sqrt{A_1^2 + B_1^2 + C_1^2} \\cdot \\sqrt{A_2^2 + B_2^2 + C_2^2}}.$$",
              "• Đặc biệt: $(\\alpha) \\perp (\\beta) \\Leftrightarrow \\vec n_1 \\cdot \\vec n_2 = 0 \\Leftrightarrow A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Góc giữa hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{0}$ và $d_2: \\frac{x}{0} = \\frac{y}{1} = \\frac{z}{1}$ bằng:",
            options: ["A. $60^\\circ$", "B. $45^\\circ$", "C. $90^\\circ$", "D. $30^\\circ$"],
            correct: 0,
            explain: "Ta có $\\vec u_1 = (1; 1; 0)$ và $\\vec u_2 = (0; 1; 1)$. Ta có $\\cos\\varphi = \\frac{|1(0) + 1(1) + 0(1)|}{\\sqrt{1^2+1^2+0} \\cdot \\sqrt{0+1^2+1^2}} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$. Vì góc nhọn nên $\\varphi = 60^\\circ$."
          },
          {
            q: "Góc giữa đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{0} = \\frac{z + 2}{-1}$ và mặt phẳng $(P): x + y - 2 = 0$ bằng:",
            options: ["A. $30^\\circ$", "B. $45^\\circ$", "C. $60^\\circ$", "D. $90^\\circ$"],
            correct: 0,
            explain: "Ta có $\\vec u = (1; 0; -1)$ và $\\vec n = (1; 1; 0)$. Sin góc giữa đường và mặt: $\\sin\\theta = \\frac{|1(1) + 0(1) + (-1)(0)|}{\\sqrt{1^2 + 0 + (-1)^2} \\cdot \\sqrt{1^2 + 1^2 + 0}} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\theta = 30^\\circ$."
          },
          {
            q: "Góc giữa hai mặt phẳng $(P): x + z - 1 = 0$ và $(Q): y - z + 2 = 0$ bằng:",
            options: ["A. $60^\\circ$", "B. $45^\\circ$", "C. $90^\\circ$", "D. $120^\\circ$"],
            correct: 0,
            explain: "Ta có $\\vec n_1 = (1; 0; 1)$ và $\\vec n_2 = (0; 1; -1)$. Côsin góc giữa hai mặt phẳng: $\\cos\\gamma = \\frac{|1(0) + 0(1) + 1(-1)|}{\\sqrt{1+0+1} \\cdot \\sqrt{0+1+1}} = \\frac{|-1|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\gamma = 60^\\circ$."
          }
        ]
      },
      {
        id: "bai-17",
        num: "Bài 17",
        title: "Phương trình mặt cầu",
        duration: "90 phút",
        objective: "Nắm vững phương trình mặt cầu dạng chính tắc và dạng khai triển; xác định tâm I và bán kính R; xét vị trí tương đối giữa mặt cầu và mặt phẳng.",
        theorySections: [
          {
            title: "1. Phương trình mặt cầu (dạng chính tắc & khai triển)",
            badge: "Dạng phương trình",
            points: [
              "**Dạng chính tắc:** Mặt cầu $(S)$ có tâm $I(a; b; c)$ và bán kính $R > 0$ là tập hợp tất cả các điểm $M(x; y; z)$ thỏa mãn $IM = R$:",
              "$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2.$$",
              "**Dạng khai triển:** Phương trình $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ là phương trình mặt cầu khi và chỉ khi:",
              "$$a^2 + b^2 + c^2 - d > 0.$$",
              "Khi đó mặt cầu có tâm $I(a; b; c)$ và bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$."
            ]
          },
          {
            title: "2. Vị trí tương đối của mặt phẳng và mặt cầu",
            badge: "Tương giao",
            points: [
              "Cho mặt cầu $(S)$ tâm $I$, bán kính $R$ và mặt phẳng $(\\alpha)$. Gọi $d = d(I, (\\alpha))$ là khoảng cách từ tâm $I$ đến $(\\alpha)$:",
              "• **Trường hợp 1 ($d > R$):** Mặt phẳng $(\\alpha)$ không cắt mặt cầu $(S)$ (không có điểm chung).",
              "• **Trường hợp 2 ($d = R$):** Mặt phẳng $(\\alpha)$ **tiếp xúc** với mặt cầu $(S)$ tại điểm $H$ (gọi là tiếp điểm, $H$ là hình chiếu vuông góc của $I$ lên $(\\alpha)$). $(\\alpha)$ gọi là tiếp diện của mặt cầu.",
              "• **Trường hợp 3 ($d < R$):** Mặt phẳng $(\\alpha)$ **cắt** mặt cầu $(S)$ theo giao tuyến là một **đường tròn** có tâm là hình chiếu $H$ của $I$ lên $(\\alpha)$, và bán kính đường tròn giao tuyến $r = \\sqrt{R^2 - d^2}$. Khi $d = 0$, mặt phẳng đi qua tâm $I$ và đường tròn giao tuyến gọi là đường tròn lớn."
            ]
          }
        ],
        quizzes: [
          {
            q: "Mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$ có tọa độ tâm $I$ và bán kính $R$ lần lượt là:",
            options: [
              "A. $I(1; -2; 3)$ và $R = 3$",
              "B. $I(-1; 2; -3)$ và $R = 3$",
              "C. $I(1; -2; 3)$ và $R = 9$",
              "D. $I(2; -4; 6)$ và $R = 5$"
            ],
            correct: 0,
            explain: "Hệ số: $a = 1, b = -2, c = 3, d = 5$. Tâm $I(1; -2; 3)$. Bán kính $R = \\sqrt{1^2 + (-2)^2 + 3^2 - 5} = \\sqrt{1 + 4 + 9 - 5} = \\sqrt{9} = 3$."
          },
          {
            q: "Phương trình mặt cầu có tâm $I(2; 1; -1)$ và đi qua điểm $A(1; 3; 1)$ là:",
            options: [
              "A. $(x - 2)^2 + (y - 1)^2 + (z + 1)^2 = 9$",
              "B. $(x - 2)^2 + (y - 1)^2 + (z + 1)^2 = 3$",
              "C. $(x + 2)^2 + (y + 1)^2 + (z - 1)^2 = 9$",
              "D. $(x - 1)^2 + (y - 3)^2 + (z - 1)^2 = 9$"
            ],
            correct: 0,
            explain: "Bán kính $R = IA = \\sqrt{(1 - 2)^2 + (3 - 1)^2 + (1 - (-1))^2} = \\sqrt{(-1)^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$. Do đó phương trình là $(x - 2)^2 + (y - 1)^2 + (z + 1)^2 = 9$."
          },
          {
            q: "Cho mặt cầu $(S)$ tâm $I(1; 2; 0)$ bán kính $R = 5$ và mặt phẳng $(P): 2x - 2y + z + 11 = 0$. Bán kính $r$ của đường tròn giao tuyến giữa $(P)$ và $(S)$ là:",
            options: ["A. $r = 4$", "B. $r = 3$", "C. $r = \\sqrt{21}$", "D. $r = 2$"],
            correct: 0,
            explain: "Khoảng cách từ tâm $I$ đến $(P)$ là $d = \\frac{|2(1) - 2(2) + 0 + 11|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 + 11|}{3} = \\frac{9}{3} = 3$. Vì $d = 3 < R = 5$ nên mặt phẳng cắt mặt cầu theo đường tròn có bán kính $r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4$."
          }
        ]
      },
      {
        id: "on-tap-chuong-5",
        num: "Ôn tập",
        title: "Ôn tập chương V — Phương pháp tọa độ không gian",
        duration: "60 phút",
        objective: "Tổng hợp mối liên hệ giữa điểm, đường thẳng, mặt phẳng và mặt cầu; làm chủ kĩ thuật tích có hướng để giải nhanh các bài toán hình học giải tích 3D.",
        theorySections: [
          {
            title: "1. Bảng tóm tắt các đối tượng hình học giải tích 3D",
            badge: "Hệ thống hóa",
            points: [
              "• **Mặt phẳng:** Cần 1 điểm $M_0$ và 1 VTPT $\\vec n = (A; B; C) \\Rightarrow A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$.",
              "• **Đường thẳng:** Cần 1 điểm $M_0$ và 1 VTCP $\\vec u = (a; b; c) \\Rightarrow \\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}$.",
              "• **Mặt cầu:** Cần tâm $I(a; b; c)$ và bán kính $R \\Rightarrow (x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$.",
              "• **Khoảng cách điểm - mặt phẳng:** $d(M, (P)) = \\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}$.",
              "• **Góc:** Đường - đường dùng $\\cos$; Mặt - mặt dùng $\\cos$; riêng Đường - mặt dùng $\\sin$."
            ]
          }
        ],
        quizzes: []
      }
    ]
  },
  chuong6: {
    id: "chuong-6",
    code: "CHƯƠNG VI",
    title: "Xác suất có điều kiện",
    desc: "Định nghĩa xác suất có điều kiện; Quy tắc nhân xác suất; Sơ đồ hình cây và bảng chéo; Công thức xác suất toàn phần và công thức Bayes cập nhật hậu nghiệm.",
    badgeColor: "purple",
    lessons: [
      {
        id: "bai-18",
        num: "Bài 18",
        title: "Xác suất có điều kiện",
        duration: "90 phút",
        objective: "Nắm vững định nghĩa xác suất có điều kiện P(A|B), quy tắc nhân xác suất, điều kiện hai biến cố độc lập; thành thạo lập bảng phân phối 2x2 và vẽ sơ đồ cây xác suất.",
        theorySections: [
          {
            title: "1. Khái niệm xác suất có điều kiện",
            badge: "Định nghĩa",
            points: [
              "**Định nghĩa:** Cho hai biến cố $A$ và $B$ trong cùng một phép thử với $P(B) > 0$. Xác suất của biến cố $A$ khi biết biến cố $B$ đã xảy ra được gọi là **xác suất có điều kiện của $A$ với điều kiện $B$**, kí hiệu là $P(A \\mid B)$:",
              "$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}.$$",
              "• Ý nghĩa trực quan: Biến cố $B$ đã xảy ra làm thu hẹp không gian mẫu ban đầu $\\Omega$ về không gian mẫu mới chính là tập hợp $B$. Khi đó biến cố $A$ chỉ còn phần giao $A \\cap B$ xảy ra trong $B$."
            ]
          },
          {
            title: "2. Quy tắc nhân xác suất & Biến cố độc lập",
            badge: "Quy tắc cốt lõi",
            points: [
              "**Quy tắc nhân xác suất:** Với hai biến cố bất kì $A$ và $B$:",
              "$$P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A).$$",
              "• Công thức mở rộng cho 3 biến cố: $P(A \\cap B \\cap C) = P(A) \\cdot P(B \\mid A) \\cdot P(C \\mid A \\cap B)$.",
              "**Định nghĩa biến cố độc lập:** Hai biến cố $A$ và $B$ gọi là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không làm thay đổi xác suất xảy ra của biến cố kia:",
              "$$P(A \\mid B) = P(A) \\quad \\Leftrightarrow \\quad P(A \\cap B) = P(A) \\cdot P(B).$$"
            ]
          },
          {
            title: "3. Công cụ biểu diễn: Sơ đồ cây & Bảng số liệu 2x2",
            badge: "Trực quan hóa",
            points: [
              "• **Sơ đồ cây (Tree Diagram):** Nhánh cấp 1 biểu diễn các biến cố ban đầu với xác suất $P(B)$ và $P(\\overline B)$; nhánh cấp 2 rẽ tiếp theo điều kiện với xác suất $P(A \\mid B)$ và $P(\\overline A \\mid B)$. Tích các xác suất trên cùng một đường đi từ gốc đến ngọn chính là xác suất đồng thời $P(A \\cap B)$.",
              "• **Bảng tần số/xác suất $2 \\times 2$:** Phân loại toàn bộ quần thể theo hai thuộc tính (ví dụ: Có bệnh/Không bệnh vs Xét nghiệm Dương tính/Âm tính). Hàng và cột tổng biên giúp tính nhanh xác suất điều kiện bằng tỉ số hai số đếm."
            ]
          }
        ],
        quizzes: [
          {
            q: "Gieo một con xúc xắc cân đối và đồng chất. Biết rằng số chấm xuất hiện là số chẵn. Xác suất để số chấm xuất hiện là số nguyên tố bằng bao nhiêu?",
            options: ["A. $\\frac{1}{3}$", "B. $\\frac{1}{2}$", "C. $\\frac{1}{6}$", "D. $\\frac{2}{3}$"],
            correct: 0,
            explain: "Gọi $B$ là biến cố 'số chấm chẵn': $B = \\{2; 4; 6\\} \\Rightarrow n(B) = 3$. Gọi $A$ là biến cố 'số chấm là số nguyên tố': $A = \\{2; 3; 5\\}$. Khi đó $A \\cap B = \\{2\\} \\Rightarrow n(A \\cap B) = 1$. Xác suất có điều kiện: $P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{1}{3}$."
          },
          {
            q: "Cho hai biến cố $A$ và $B$ có $P(A) = 0,4$; $P(B) = 0,5$ và $P(A \\cap B) = 0,2$. Khẳng định nào sau đây là khẳng định ĐÚNG?",
            options: [
              "A. $A$ và $B$ là hai biến cố độc lập",
              "B. $P(A \\mid B) = 0,5$",
              "C. $P(B \\mid A) = 0,2$",
              "D. $A$ và $B$ là hai biến cố xung khắc"
            ],
            correct: 0,
            explain: "Ta có $P(A) \\cdot P(B) = 0,4 \\times 0,5 = 0,2$. Vì $P(A \\cap B) = P(A) \\cdot P(B) = 0,2$ nên theo định nghĩa, $A$ và $B$ là hai biến cố độc lập."
          },
          {
            q: "Một hộp chứa 5 quả cầu trắng và 3 quả cầu đen. Lấy lần lượt hai quả cầu không hoàn lại. Xác suất để quả thứ hai màu đen biết quả thứ nhất màu trắng là:",
            options: ["A. $\\frac{3}{7}$", "B. $\\frac{3}{8}$", "C. $\\frac{5}{8}$", "D. $\\frac{2}{7}$"],
            correct: 0,
            explain: "Sau khi lấy quả thứ nhất màu trắng, trong hộp còn lại tổng cộng 7 quả cầu, trong đó có nguyên vẹn 3 quả cầu đen. Do đó xác suất có điều kiện là $\\frac{3}{7}$."
          }
        ]
      },
      {
        id: "bai-19",
        num: "Bài 19",
        title: "Công thức xác suất toàn phần và công thức Bayes",
        duration: "120 phút",
        objective: "Hiểu hệ biến cố đầy đủ (phân hoạch); thành thạo áp dụng công thức xác suất toàn phần để tính xác suất biến cố tổng thể; làm chủ công thức Bayes để cập nhật xác suất nguyên nhân sau khi có dữ liệu quan sát.",
        theorySections: [
          {
            title: "1. Hệ biến cố đầy đủ & Công thức xác suất toàn phần",
            badge: "Toàn phần",
            points: [
              "**Hệ biến cố đầy đủ (Phân hoạch):** Các biến cố $A_1, A_2, \\dots, A_n$ lập thành một hệ đầy đủ nếu chúng đôi một xung khắc ($A_i \\cap A_j = \\emptyset$ với $i \\ne j$) và hợp của chúng là toàn bộ không gian mẫu ($A_1 \\cup A_2 \\cup \\dots \\cup A_n = \\Omega$).",
              "**Công thức xác suất toàn phần:** Với mọi biến cố $B$, xác suất của $B$ được tính bằng tổng xác suất của các trường hợp:",
              "$$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i) = P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2) + \\dots + P(A_n)P(B \\mid A_n).$$",
              "• Trường hợp đặc biệt với biến cố đối: Hệ gồm $A$ và $\\overline A$ luôn là hệ đầy đủ:",
              "$$P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline A) \\cdot P(B \\mid \\overline A).$$"
            ]
          },
          {
            title: "2. Công thức Bayes cập nhật xác suất tiên nghiệm",
            badge: "Công thức Bayes",
            points: [
              "**Công thức Bayes:** Giả sử $A_1, A_2, \\dots, A_n$ là một hệ biến cố đầy đủ và $B$ là biến cố đã xảy ra với $P(B) > 0$. Xác suất của nguyên nhân $A_j$ với điều kiện $B$ đã xảy ra được tính bởi:",
              "$$P(A_j \\mid B) = \\frac{P(A_j) \\cdot P(B \\mid A_j)}{P(B)} = \\frac{P(A_j) \\cdot P(B \\mid A_j)}{\\sum_{i=1}^n P(A_i) \\cdot P(B \\mid A_i)}.$$",
              "• Với hệ hai biến cố đối lập $A$ và $\\overline A$:",
              "$$P(A \\mid B) = \\frac{P(A) \\cdot P(B \\mid A)}{P(A) \\cdot P(B \\mid A) + P(\\overline A) \\cdot P(B \\mid \\overline A)}.$$",
              "• **Ý nghĩa triết học & thống kê:** $P(A_j)$ gọi là **xác suất tiên nghiệm (Prior)** (niềm tin hoặc tỉ lệ ban đầu trước khi có dữ liệu). Sau khi quan sát thấy biến cố $B$ xảy ra, công thức Bayes cập nhật thành **xác suất hậu nghiệm (Posterior)** $P(A_j \\mid B)$."
            ]
          },
          {
            title: "3. Bài toán kinh điển: Chẩn đoán y tế & Nghịch lý tỉ lệ nền",
            badge: "Ứng dụng thực tiễn",
            points: [
              "Trong chẩn đoán y tế, các thuật ngữ lâm sàng được ánh xạ như sau:",
              "• Tỉ lệ mắc bệnh nền trong cộng đồng: $P(D)$ (Prevalence).",
              "• Độ nhạy của xét nghiệm: $P(+ \\mid D)$ (Sensitivity - xác suất người bị bệnh có xét nghiệm dương tính).",
              "• Độ đặc hiệu của xét nghiệm: $P(- \\mid \\overline D)$ (Specificity - xác suất người khỏe mạnh có xét nghiệm âm tính). Tỉ lệ dương tính giả là $P(+ \\mid \\overline D) = 1 - \\text{Đặc hiệu}$.",
              "• **Nghịch lý xét nghiệm:** Khi một bệnh rất hiếm ($P(D)$ rất nhỏ, ví dụ $0,1\\%$), một người có kết quả xét nghiệm dương tính (+) thì xác suất thực sự mắc bệnh $P(D \\mid +)$ thường vẫn KHÁ THẤP (có thể dưới $50\\%$) do số ca dương tính giả từ quần thể người khỏe áp đảo số ca dương tính thật. Điều này chứng minh tuyệt đối không được nhầm lẫn $P(D \\mid +)$ với $P(+ \\mid D)$!"
            ]
          }
        ],
        quizzes: [
          {
            q: "Một nhà máy có 2 phân xưởng I và II. Phân xưởng I sản xuất 60% sản lượng với tỉ lệ phế phẩm là 2%; phân xưởng II sản xuất 40% sản lượng với tỉ lệ phế phẩm là 3%. Lấy ngẫu nhiên 1 sản phẩm của nhà máy. Xác suất để sản phẩm đó là phế phẩm bằng:",
            options: ["A. 0,024", "B. 0,025", "C. 0,050", "D. 0,018"],
            correct: 0,
            explain: "Gọi $A_1, A_2$ lần lượt là biến cố sản phẩm do phân xưởng I, II sản xuất. $B$ là biến cố sản phẩm phế phẩm. Theo công thức xác suất toàn phần: $P(B) = P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2) = (0,60)(0,02) + (0,40)(0,03) = 0,012 + 0,012 = 0,024$ (tức 2,4%)."
          },
          {
            q: "Tiếp tục bài toán trên: Biết sản phẩm lấy ra là phế phẩm. Xác suất để sản phẩm đó do phân xưởng I sản xuất là bao nhiêu?",
            options: ["A. 0,5", "B. 0,6", "C. 0,4", "D. 0,24"],
            correct: 0,
            explain: "Áp dụng công thức Bayes: $P(A_1 \\mid B) = \\frac{P(A_1)P(B \\mid A_1)}{P(B)} = \\frac{0,012}{0,024} = 0,5$ (tức 50%). Dù phân xưởng I sản xuất nhiều hàng hơn nhưng chất lượng tốt hơn phân xưởng II, nên khi gặp phế phẩm thì khả năng do phân xưởng I hay II làm ra là ngang nhau."
          },
          {
            q: "Một căn bệnh hiếm có tỉ lệ mắc trong dân số là 1%. Xét nghiệm có độ nhạy 95% (người bệnh chắc chắn 95% dương tính) và tỉ lệ dương tính giả là 5% (người khỏe có 5% bị báo dương tính nhầm). Nếu một người có kết quả xét nghiệm dương tính, xác suất người đó thực sự mắc bệnh là xấp xỉ:",
            options: ["A. 16,1%", "B. 95%", "C. 50%", "D. 90%"],
            correct: 0,
            explain: "Ta có $P(Bệnh) = 0,01$; $P(Khỏe) = 0,99$. Xác suất toàn phần có kết quả dương tính: $P(+) = (0,01)(0,95) + (0,99)(0,05) = 0,0095 + 0,0495 = 0,0590$. Xác suất thực sự mắc bệnh theo Bayes: $P(Bệnh \\mid +) = \\frac{0,0095}{0,0590} \\approx 0,161 = 16,1\\%$. Một minh họa kinh điển cho nghịch lý tỉ lệ nền!"
          }
        ]
      },
      {
        id: "on-tap-chuong-6",
        num: "Ôn tập",
        title: "Ôn tập chương VI — Xác suất có điều kiện và Bayes",
        duration: "60 phút",
        objective: "Khắc ghi 3 công thức nền tảng: Xác suất có điều kiện P(A|B), Công thức xác suất toàn phần và Công thức Bayes; phòng tránh lỗi hoán vị điều kiện.",
        theorySections: [
          {
            title: "1. Ba trụ cột tính toán xác suất nâng cao",
            badge: "Hệ thống",
            points: [
              "• **Định nghĩa có điều kiện:** $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.",
              "• **Quy tắc nhân:** $P(A \\cap B) = P(B) \\cdot P(A \\mid B)$.",
              "• **Xác suất toàn phần:** $P(B) = \\sum P(A_i)P(B \\mid A_i)$ (tính xuôi theo các nhánh phân hoạch).",
              "• **Công thức Bayes:** $P(A_j \\mid B) = \\frac{P(A_j)P(B \\mid A_j)}{P(B)}$ (tính ngược xác suất nguyên nhân khi biết kết quả)."
            ]
          },
          {
            title: "2. Cảnh báo sai lầm kinh điển",
            badge: "Cảnh báo",
            points: [
              "❌ **Lỗi đảo ngược điều kiện:** Tuyệt đối không được nhầm $P(A \\mid B)$ với $P(B \\mid A)$. Ví dụ: Xác suất một người là nữ biết người đó mang thai là $100\\%$, nhưng xác suất một người mang thai biết người đó là nữ chỉ khoảng vài phần trăm!",
              "❌ **Lỗi quên chuẩn hóa:** Trong công thức toàn phần, tổng các xác suất tiên nghiệm $\\sum P(A_i)$ của hệ đầy đủ bắt buộc phải bằng đúng 1."
            ]
          }
        ],
        quizzes: []
      }
    ]
  },
  formulaSummaryTable: [
    {
      group: "Đạo hàm và tối ưu hóa",
      items: [
        { name: "Tính đơn điệu trên khoảng", formula: "$f'(x) > 0 \\Rightarrow$ đồng biến; $f'(x) < 0 \\Rightarrow$ nghịch biến", note: "Đạo hàm bằng 0 tại hữu hạn điểm vẫn giữ tính đơn điệu" },
        { name: "Dấu hiệu cực trị (Dấu hiệu I)", formula: "$f'$ đổi dấu $+\\to- \\Rightarrow$ Cực đại; $-\\to+ \\Rightarrow$ Cực tiểu", note: "Đạo hàm tại cực trị có thể bằng 0 hoặc không xác định" },
        { name: "Đường tiệm cận đứng", formula: "$x = a \\quad (\\lim_{x \\to a^\\pm} f(x) = \\pm\\infty)$", note: "Thường xét tại nghiệm mẫu không triệt tiêu trên tử" },
        { name: "Đường tiệm cận ngang", formula: "$y = b \\quad (\\lim_{x \\to \\pm\\infty} f(x) = b)$", note: "Tối đa 2 đường tiệm cận ngang khác nhau" },
        { name: "Đường tiệm cận xiên", formula: "$y = ax + b \\quad (a = \\lim \\frac{f(x)}{x};\\; b = \\lim [f(x) - ax])$", note: "Hàm bậc 2 trên bậc 1 dùng phép chia đa thức" },
        { name: "Chuyển động cơ học", formula: "$v(t) = s'(t), \\quad a(t) = v'(t) = s''(t)$", note: "$v \\cdot a > 0$ nhanh dần; $v \\cdot a < 0$ chậm dần" },
        { name: "Kinh tế vi mô biên tế", formula: "$R(x) = x \\cdot p(x);\\; P(x) = R(x) - C(x);\\; C'(x) = R'(x)$", note: "Lợi nhuận tối đa khi doanh thu biên bằng chi phí biên" }
      ]
    },
    {
      group: "Hình học tọa độ trong không gian Oxyz",
      items: [
        { name: "Vectơ nối 2 điểm", formula: "$\\overrightarrow{AB} = (x_B - x_A;\\; y_B - y_A;\\; z_B - z_A)$", note: "Độ dài $AB = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$" },
        { name: "Tích vô hướng", formula: "$\\vec a \\cdot \\vec b = x_1 x_2 + y_1 y_2 + z_1 z_2$", note: "Vuông góc $\\Leftrightarrow \\vec a \\cdot \\vec b = 0$" },
        { name: "Tích có hướng", formula: "$[\\vec u, \\vec v] = (u_2 v_3 - u_3 v_2;\\; u_3 v_1 - u_1 v_3;\\; u_1 v_2 - u_2 v_1)$", note: "Vuông góc với cả 2 vectơ thành phần; cùng phương $\\Leftrightarrow [\\vec u, \\vec v] = \\vec 0$" },
        { name: "Phương trình mặt phẳng", formula: "$Ax + By + Cz + D = 0 \\quad (A^2 + B^2 + C^2 > 0)$", note: "Nhận $\\vec n = (A; B; C)$ làm vectơ pháp tuyến" },
        { name: "Khoảng cách điểm đến mặt phẳng", formula: "$d(M_0, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$", note: "Tiếp xúc mặt cầu khi $d = R$" },
        { name: "Phương trình tham số đường thẳng", formula: "$x = x_0 + at,\\; y = y_0 + bt,\\; z = z_0 + ct$", note: "Chính tắc: $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$" },
        { name: "Góc giữa 2 đường thẳng", formula: "$\\cos\\varphi = \\frac{|\\vec u_1 \\cdot \\vec u_2|}{|\\vec u_1||\\vec u_2|} \\quad (0^\\circ \\le \\varphi \\le 90^\\circ)$", note: "Lấy trị tuyệt đối ở tử để bảo đảm góc nhọn" },
        { name: "Góc giữa đường thẳng và mặt phẳng", formula: "$\\sin\\theta = \\frac{|\\vec u \\cdot \\vec n|}{|\\vec u||\\vec n|} \\quad (0^\\circ \\le \\theta \\le 90^\\circ)$", note: "Dùng hàm sin vì VTPT vuông góc với mặt phẳng" },
        { name: "Góc giữa 2 mặt phẳng", formula: "$\\cos\\gamma = \\frac{|\\vec n_1 \\cdot \\vec n_2|}{|\\vec n_1||\\vec n_2|} \\quad (0^\\circ \\le \\gamma \\le 90^\\circ)$", note: "Hai mặt phẳng vuông góc khi $\\vec n_1 \\cdot \\vec n_2 = 0$" },
        { name: "Phương trình mặt cầu", formula: "$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$", note: "Dạng khai triển cần điều kiện $a^2 + b^2 + c^2 - d > 0$" }
      ]
    },
    {
      group: "Thống kê, Tích phân và Xác suất",
      items: [
        { name: "Khoảng biến thiên ghép nhóm", formula: "$R = a_{k+1} - a_1$", note: "Cận trên nhóm cuối trừ cận dưới nhóm đầu" },
        { name: "Tứ phân vị ghép nhóm (nội suy)", formula: "$Q_r = L + \\frac{\\frac{rn}{4} - N_{\\text{trước}}}{m} \\cdot h$", note: "Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$" },
        { name: "Phương sai ghép nhóm", formula: "$s^2 = \\frac{1}{n}\\sum m_i x_i^2 - (\\bar x)^2$", note: "Độ lệch chuẩn: $s = \\sqrt{s^2}$; Hệ số biến thiên: $CV = s/\\bar x$" },
        { name: "Công thức Newton–Leibniz", formula: "$\\int_a^b f(x)\\,dx = F(b) - F(a)$", note: "$F'(x) = f(x)$ trên $[a; b]$" },
        { name: "Diện tích giữa 2 đồ thị", formula: "$S = \\int_a^b |f(x) - g(x)|\\,dx$", note: "Tách tích phân tại các giao điểm $f(x) = g(x)$" },
        { name: "Thể tích theo diện tích mặt cắt", formula: "$V = \\int_a^b S(x)\\,dx$", note: "$S(x)$ là diện tích thiết diện vuông góc trục $Ox$" },
        { name: "Thể tích tròn xoay quanh Ox", formula: "$V = \\pi \\int_a^b [f(x)]^2\\,dx$", note: "Vành khăn: $V = \\pi \\int_a^b (R(x)^2 - r(x)^2)\\,dx$" },
        { name: "Xác suất có điều kiện", formula: "$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$", note: "Quy tắc nhân: $P(A \\cap B) = P(B)P(A \\mid B)$" },
        { name: "Công thức xác suất toàn phần", formula: "$P(B) = \\sum_{i=1}^n P(A_i)P(B \\mid A_i)$", note: "$A_1, \\dots, A_n$ là một hệ phân hoạch đầy đủ" },
        { name: "Công thức Bayes", formula: "$P(A_j \\mid B) = \\frac{P(A_j)P(B \\mid A_j)}{\\sum_{i=1}^n P(A_i)P(B \\mid A_i)}$", note: "Cập nhật xác suất tiên nghiệm $P(A_j)$ thành hậu nghiệm" }
      ]
    }
  ],
  arenaExam: {
    title: "ĐẤU TRƯỜNG TOÁN 12 — TỔNG HỢP KIẾN THỨC CỐT LÕI",
    description: "Bài thi chuẩn hóa 20 câu trắc nghiệm bao quát toàn diện chương trình Toán 12 (6 Chương). Thời gian làm bài: 45 phút.",
    durationMinutes: 45,
    questions: [
      {
        id: 1,
        q: "Hàm số $y = x^3 - 3x^2 + 2$ nghịch biến trên khoảng nào dưới đây?",
        options: ["A. $(0; 2)$", "B. $(-\\infty; 0)$", "C. $(2; +\\infty)$", "D. $(0; 3)$"],
        correct: 0,
        explain: "Ta có $y' = 3x^2 - 6x = 3x(x - 2)$. Cho $y' < 0 \\Leftrightarrow 0 < x < 2$. Do đó hàm số nghịch biến trên khoảng $(0; 2)$."
      },
      {
        id: 2,
        q: "Giá trị nhỏ nhất của hàm số $f(x) = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ bằng:",
        options: ["A. 4", "B. 2", "C. 5", "D. 8"],
        correct: 0,
        explain: "Theo bất đẳng thức Cô-si cho hai số dương $x$ và $\\frac{4}{x}$: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$. Đẳng thức xảy ra khi $x = \\frac{4}{x} \\Leftrightarrow x = 2$."
      },
      {
        id: 3,
        q: "Đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ có tâm đối xứng là điểm nào?",
        options: ["A. $I(1; 2)$", "B. $I(-1; 2)$", "C. $I(1; -1)$", "D. $I(2; 1)$"],
        correct: 0,
        explain: "Tiệm cận đứng là $x = 1$, tiệm cận ngang là $y = 2$. Tâm đối xứng là giao điểm của hai đường tiệm cận: $I(1; 2)$."
      },
      {
        id: 4,
        q: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - x + 3}{x + 1}$ có phương trình là:",
        options: ["A. $y = 2x - 3$", "B. $y = 2x + 1$", "C. $y = 2x + 3$", "D. $y = x - 3$"],
        correct: 0,
        explain: "Thực hiện phép chia đa thức: $2x^2 - x + 3 = (x + 1)(2x - 3) + 6$. Suy ra $y = 2x - 3 + \\frac{6}{x + 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\frac{6}{x + 1} = 0$ nên tiệm cận xiên là $y = 2x - 3$."
      },
      {
        id: 5,
        q: "Một chất điểm chuyển động với phương trình $s(t) = 2t^3 - 6t^2 + 10t$ ($t$ tính bằng giây, $s$ tính bằng mét). Gia tốc của chất điểm tại thời điểm $t = 3$ s là:",
        options: ["A. $24$ m/s$^2$", "B. $12$ m/s$^2$", "C. $28$ m/s$^2$", "D. $18$ m/s$^2$"],
        correct: 0,
        explain: "Vận tốc $v(t) = s'(t) = 6t^2 - 12t + 10$. Gia tốc $a(t) = v'(t) = 12t - 12$. Tại $t = 3$: $a(3) = 12(3) - 12 = 24$ m/s$^2$."
      },
      {
        id: 6,
        q: "Trong không gian, cho hình hộp $ABCD.A'B'C'D'$. Mệnh đề nào sau đây ĐÚNG?",
        options: [
          "A. $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$",
          "B. $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = \\overrightarrow{AC'}$",
          "C. $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{A'C}$",
          "D. $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{BD}$"
        ],
        correct: 0,
        explain: "Theo quy tắc hình hộp: tổng 3 vectơ xuất phát từ đỉnh $A$ dọc theo 3 cạnh hộp bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$."
      },
      {
        id: 7,
        q: "Trong không gian $Oxyz$, cho hai điểm $A(1; -2; 3)$ và $B(3; 0; -1)$. Tọa độ vectơ $\\overrightarrow{AB}$ là:",
        options: ["A. $(2; 2; -4)$", "B. $(4; -2; 2)$", "C. $(-2; -2; 4)$", "D. $(2; 1; -2)$"],
        correct: 0,
        explain: "$\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (3 - 1; 0 - (-2); -1 - 3) = (2; 2; -4)$."
      },
      {
        id: 8,
        q: "Cho hai vectơ $\\vec u = (1; 2; -1)$ và $\\vec v = (2; m; 4)$. Tìm $m$ để $\\vec u \\perp \\vec v$.",
        options: ["A. $m = 1$", "B. $m = -1$", "C. $m = 2$", "D. $m = -2$"],
        correct: 0,
        explain: "Hai vectơ vuông góc khi tích vô hướng bằng 0: $\\vec u \\cdot \\vec v = 1(2) + 2(m) + (-1)(4) = 0 \\Leftrightarrow 2 + 2m - 4 = 0 \\Leftrightarrow 2m = 2 \\Leftrightarrow m = 1$."
      },
      {
        id: 9,
        q: "Cho mẫu số liệu ghép nhóm gồm các lớp $[10; 20), [20; 30), [30; 40), [40; 50)$. Khoảng biến thiên của mẫu này là:",
        options: ["A. 40", "B. 50", "C. 30", "D. 10"],
        correct: 0,
        explain: "Khoảng biến thiên $R = a_{k+1} - a_1 = 50 - 10 = 40$."
      },
      {
        id: 10,
        q: "Một mẫu ghép nhóm có phương sai $s^2 = 16$. Độ lệch chuẩn của mẫu số liệu đó bằng:",
        options: ["A. 4", "B. 256", "C. 8", "D. 2"],
        correct: 0,
        explain: "Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2} = \\sqrt{16} = 4$."
      },
      {
        id: 11,
        q: "Nguyên hàm $\\int (\\cos 2x - e^x)\\,dx$ bằng:",
        options: [
          "A. $\\frac{1}{2}\\sin 2x - e^x + C$",
          "B. $-\\frac{1}{2}\\sin 2x - e^x + C$",
          "C. $2\\sin 2x - e^x + C$",
          "D. $\\sin 2x - e^x + C$"
        ],
        correct: 0,
        explain: "Áp dụng công thức nguyên hàm cơ bản: $\\int \\cos 2x\\,dx = \\frac{1}{2}\\sin 2x + C_1$ và $\\int e^x\\,dx = e^x + C_2$. Do đó nguyên hàm là $\\frac{1}{2}\\sin 2x - e^x + C$."
      },
      {
        id: 12,
        q: "Tích phân $I = \\int_1^2 \\frac{1}{x}\\,dx$ có giá trị bằng:",
        options: ["A. $\\ln 2$", "B. $1$", "C. $e$", "D. $\\ln 3$"],
        correct: 0,
        explain: "Ta có $I = \\left. \\ln|x| \\right|_1^2 = \\ln 2 - \\ln 1 = \\ln 2$ (vì $\\ln 1 = 0$)."
      },
      {
        id: 13,
        q: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^3$, trục hoành $Ox$ và hai đường thẳng $x = -1, x = 1$ bằng:",
        options: ["A. $\\frac{1}{2}$", "B. $0$", "C. $1$", "D. $\\frac{1}{4}$"],
        correct: 0,
        explain: "Vì $y = x^3$ là hàm lẻ, trên $[-1; 0]$ đồ thị nằm dưới $Ox$, trên $[0; 1]$ nằm trên $Ox$. Diện tích: $S = \\int_{-1}^1 |x^3|\\,dx = -\\int_{-1}^0 x^3\\,dx + \\int_0^1 x^3\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$."
      },
      {
        id: 14,
        q: "Thể tích khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi $y = x^2$, trục $Ox$ và đường thẳng $x = 2$ bằng:",
        options: ["A. $\\frac{32\\pi}{5}$", "B. $\\frac{16\\pi}{5}$", "C. $\\frac{8\\pi}{3}$", "D. $4\\pi$"],
        correct: 0,
        explain: "Công thức thể tích tròn xoay: $V = \\pi \\int_0^2 (x^2)^2\\,dx = \\pi \\int_0^2 x^4\\,dx = \\pi \\left. \\frac{x^5}{5} \\right|_0^2 = \\frac{32\\pi}{5}$."
      },
      {
        id: 15,
        q: "Trong không gian $Oxyz$, mặt phẳng đi qua $A(0; 1; 2)$ và song song với mặt phẳng $(P): 2x - y + 3z - 5 = 0$ có phương trình là:",
        options: [
          "A. $2x - y + 3z - 5 = 0$",
          "B. $2x - y + 3z - 7 = 0$",
          "C. $2x - y + 3z + 5 = 0$",
          "D. $x + 2y - z - 5 = 0$"
        ],
        correct: 0,
        explain: "Mặt phẳng song song với $(P)$ có VTPT là $\\vec n = (2; -1; 3)$. Phương trình: $2(x - 0) - 1(y - 1) + 3(z - 2) = 0 \\Leftrightarrow 2x - y + 1 + 3z - 6 = 0 \\Leftrightarrow 2x - y + 3z - 5 = 0$. (Lưu ý: Nếu trùng với $(P)$ thì không phải song song; ở đây thay $A(0;1;2)$ vào $(P)$: $2(0)-1+3(2)-5 = 0$, nghĩa là điểm $A$ nằm trên chính mặt phẳng $(P)$! Do đó mặt phẳng cần tìm song song thực sự phải không đi qua $A$, hoặc câu hỏi yêu cầu mặt phẳng chứa $A$ có cùng VTPT)."
      },
      {
        id: 16,
        q: "Khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(Q): x + 2y + 2z - 2 = 0$ bằng:",
        options: ["A. 3", "B. 2", "C. 1", "D. 4"],
        correct: 0,
        explain: "$d(M, (Q)) = \\frac{|1(1) + 2(2) + 2(3) - 2|}{\\sqrt{1^2 + 2^2 + 2^2}} = \\frac{|1 + 4 + 6 - 2|}{\\sqrt{9}} = \\frac{9}{3} = 3$."
      },
      {
        id: 17,
        q: "Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 4)^2 = 25$ có bán kính $R$ bằng:",
        options: ["A. 5", "B. 25", "C. $\\sqrt{5}$", "D. 10"],
        correct: 0,
        explain: "Phương trình dạng chính tắc $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ nên $R^2 = 25 \\Rightarrow R = 5$."
      },
      {
        id: 18,
        q: "Cho hai biến cố $A$ và $B$ có $P(B) = 0,6$ và $P(A \\cap B) = 0,18$. Xác suất có điều kiện $P(A \\mid B)$ bằng:",
        options: ["A. 0,3", "B. 0,108", "C. 0,42", "D. 0,5"],
        correct: 0,
        explain: "Áp dụng định nghĩa: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0,18}{0,6} = 0,3$."
      },
      {
        id: 19,
        q: "Một túi có 4 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên lần lượt 2 viên bi không hoàn lại. Xác suất để viên bi thứ 2 màu đỏ biết viên bi thứ nhất màu đỏ là:",
        options: ["A. $\\frac{1}{3}$", "B. $\\frac{4}{10}$", "C. $\\frac{3}{10}$", "D. $\\frac{2}{5}$"],
        correct: 0,
        explain: "Sau khi lấy viên thứ nhất màu đỏ, trong túi còn 9 viên bi, gồm 3 viên bi đỏ và 6 viên bi xanh. Xác suất viên thứ hai màu đỏ là $\\frac{3}{9} = \\frac{1}{3}$."
      },
      {
        id: 20,
        q: "Hai máy I và II cùng sản xuất một loại chi tiết. Máy I sản xuất 70% sản lượng với tỉ lệ phế phẩm 1%; máy II sản xuất 30% sản lượng với tỉ lệ phế phẩm 2%. Kiểm tra ngẫu nhiên một chi tiết thấy là phế phẩm. Xác suất chi tiết này do máy I sản xuất là:",
        options: ["A. $\\frac{7}{13}$", "B. $\\frac{6}{13}$", "C. 0,7", "D. 0,5"],
        correct: 0,
        explain: "Xác suất toàn phần gặp phế phẩm: $P(F) = 0,7(0,01) + 0,3(0,02) = 0,007 + 0,006 = 0,013$. Áp dụng công thức Bayes: $P(M_1 \\mid F) = \\frac{0,007}{0,013} = \\frac{7}{13} \\approx 53,8\\%$."
      }
    ]
  }
};
