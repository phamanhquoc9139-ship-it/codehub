// Toán 11 - Kết nối tri thức với cuộc sống (Part 2: Tập 2: Bài 18 - Bài 33 + Bảng tổng hợp & Lỗi dễ mắc)
const fs = require('fs');
const path = require('path');
const { generalConventions, chapters, experientialModules, lessonsP1 } = require('./toan11_data_p1.js');

const lessonsP2 = [
  {
    num: 18,
    chapter: 6,
    vol: 2,
    title: "Lũy thừa với số mũ thực",
    subtitle: "Lũy thừa với số mũ nguyên, căn bậc n, lũy thừa với số mũ hữu tỉ – số mũ thực và các tính chất biến đổi.",
    concepts: [
      "Lũy thừa với số mũ nguyên: Cho \\(n \\in \\mathbb{N}^*\\), \\(a^n = a \\cdot a \\cdots a\\) (\\(n\\) thừa số \\(a\\)). Với \\(a \\ne 0\\): \\(a^0 = 1\\) và \\(a^{-n} = \\frac{1}{a^n}\\). Chú ý: \\(0^0\\) và \\(0^{-n}\\) (\\(n \\in \\mathbb{N}^*\\)) không có nghĩa.",
      "Căn bậc \\(n\\): Cho số thực \\(b\\) và số nguyên \\(n \\ge 2\\). Số \\(a\\) được gọi là căn bậc \\(n\\) của \\(b\\) nếu \\(a^n = b\\). Khi \\(n\\) lẻ, với mọi \\(b \\in \\mathbb{R}\\) có duy nhất một căn bậc \\(n\\) kí hiệu \\(\\sqrt[n]{b}\\); khi \\(n\\) chẵn, chỉ \\(b \\ge 0\\) mới có căn bậc \\(n\\) thực và \\(\\sqrt[n]{b} \\ge 0\\) là căn số học không âm.",
      "Lũy thừa với số mũ hữu tỉ và thực: Cho số thực dương \\(a > 0\\) và số hữu tỉ \\(r = \\frac{m}{n}\\) (\\(m \\in \\mathbb{Z}, n \\in \\mathbb{N}, n \\ge 2\\)), ta định nghĩa \\(a^r = a^{\\frac{m}{n}} = \\sqrt[n]{a^m}\\). Với số vô tỉ \\(\\alpha = \\lim r_n\\) (\\(a > 0\\)), \\(a^\\alpha = \\lim a^{r_n}\\). Như vậy khi số mũ không nguyên, cơ số \\(a\\) bắt buộc phải dương (\\(a > 0\\)).",
      "Tính chất so sánh (với \\(a > 0\\)): Luôn có \\(a^x > 0, \\forall x \\in \\mathbb{R}\\). Nếu cơ số \\(a > 1\\) thì \\(a^\\alpha > a^\\beta \\iff \\alpha > \\beta\\) (cùng chiều); nếu \\(0 < a < 1\\) thì \\(a^\\alpha > a^\\beta \\iff \\alpha < \\beta\\) (ngược chiều)."
    ],
    formulas: [
      { name: "1. Định nghĩa lũy thừa mũ âm & mũ phân số", eq: "\\(a^0 = 1,\\; a^{-n} = \\frac{1}{a^n}\\; (a \\ne 0)\\); \\qquad \\(a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m\\; (a > 0, n \\ge 2)\\)", note: "Chuyển căn thức về dạng lũy thừa mũ phân số giúp rút gọn biểu thức cực nhanh." },
      { name: "2. Năm quy tắc tính lũy thừa với số mũ thực (a > 0, b > 0; α, β ∈ ℝ)", eq: "• \\(a^\\alpha \\cdot a^\\beta = a^{\\alpha + \\beta}\\); \\qquad • \\(\\frac{a^\\alpha}{a^\\beta} = a^{\\alpha - \\beta}\\)<br>• \\((a^\\alpha)^\\beta = a^{\\alpha\\beta}\\); \\qquad • \\((ab)^\\alpha = a^\\alpha b^\\alpha\\); \\qquad • \\(\\left(\\frac{a}{b}\\right)^\\alpha = \\frac{a^\\alpha}{b^\\alpha}\\)", note: "Tất cả tính chất của lũy thừa số mũ nguyên dương đều giữ nguyên cho số mũ thực khi \\(a, b > 0\\)." },
      { name: "3. Tính chất căn bậc n (a, b ≥ 0)", eq: "\\(\\sqrt[n]{a}\\cdot\\sqrt[n]{b} = \\sqrt[n]{ab}; \\quad \\sqrt[n]{\\sqrt[k]{a}} = \\sqrt[nk]{a}; \\quad \\sqrt[n]{a^n} = \\left\\{\\begin{array}{ll} a & \\text{nếu } n \\text{ lẻ} \\\\ |a| & \\text{nếu } n \\text{ chẵn} \\end{array}\\right.\\)", note: "Chú ý dấu giá trị tuyệt đối \\(|a|\\) khi \\(n\\) chẵn." },
      { name: "4. So sánh hai lũy thừa cùng cơ số", eq: "• Với \\(a > 1\\): \\(a^\\alpha > a^\\beta \\iff \\alpha > \\beta\\)<br>• Với \\(0 < a < 1\\): \\(a^\\alpha > a^\\beta \\iff \\alpha < \\beta\\)", note: "Hệ quả: Với \\(a > 1\\), \\(a^\\alpha > 1 \\iff \\alpha > 0\\); với \\(0 < a < 1\\), \\(a^\\alpha > 1 \\iff \\alpha < 0\\)." }
    ],
    methods: [
      "Cách rút gọn biểu thức chứa căn và lũy thừa: Đổi toàn bộ các căn thức \\(\\sqrt[n]{a^m}\\) sang lũy thừa mũ hữu tỉ \\(a^{m/n}\\), đưa các số về cùng cơ số nguyên tố (như \\(2, 3, 5\\)) hoặc dùng hằng đẳng thức đáng nhớ với \\(x = a^{1/2}, y = b^{1/2}\\).",
      "Cách so sánh hai lũy thừa: Đưa về cùng cơ số \\(a\\) rồi xét \\(a > 1\\) hay \\(0 < a < 1\\); hoặc đưa về cùng số mũ dương \\(\\alpha > 0\\) (nếu \\(0 < a < b\\) và \\(\\alpha > 0\\) thì \\(a^\\alpha < b^\\alpha\\)).",
      "Lỗi dễ mắc: Không đảo chiều bất đẳng thức khi cơ số \\(0 < a < 1\\); hoặc viết \\((-2)^{\\frac{1}{2}}\\) (cơ số âm không xác định với số mũ không nguyên)."
    ],
    applications: [
      "Tính tiền gốc và lãi kép \\(A = P(1+r)^n\\) sau \\(n\\) kì gửi ngân hàng.",
      "Công thức định luật Kepler thứ ba trong thiên văn học \\(T^2 \\propto R^3 \\iff T = k R^{3/2}\\)."
    ],
    diagramCaption: "Sơ đồ chuyển đổi giữa căn bậc n và lũy thừa mũ hữu tỉ a^(m/n) cùng quy tắc so sánh theo cơ số a > 1 và 0 < a < 1."
  },
  {
    num: 19,
    chapter: 6,
    vol: 2,
    title: "Lôgarit",
    subtitle: "Định nghĩa lôgarit, điều kiện tồn tại, các quy tắc tính lôgarit (tích, thương, lũy thừa), công thức đổi cơ số và log, ln.",
    concepts: [
      "Định nghĩa: Cho hai số thực dương \\(a, b\\) với \\(a \\ne 1\\). Số thực \\(\\alpha\\) thỏa mãn đẳng thức \\(a^\\alpha = b\\) được gọi là lôgarit cơ số \\(a\\) của \\(b\\), kí hiệu là \\(\\log_a b = \\alpha\\).",
      "Điều kiện để \\(\\log_a b\\) có nghĩa: Cơ số \\(0 < a \\ne 1\\) và biểu thức lấy lôgarit (đối số) phải dương \\(b > 0\\) (không có lôgarit của số âm và số 0!).",
      "Hai loại lôgarit đặc biệt thường dùng: (1) Lôgarit thập phân (cơ số 10): viết là \\(\\log b\\) hoặc \\(\\lg b\\) thay cho \\(\\log_{10} b\\); (2) Lôgarit tự nhiên (cơ số \\(e \\approx 2,71828\\dots\\)): viết là \\(\\ln b\\) thay cho \\(\\log_e b\\)."
    ],
    formulas: [
      { name: "1. Định nghĩa & 4 tính chất cơ bản (0 < a ≠ 1, b > 0)", eq: "\\(\\alpha = \\log_a b \\iff a^\\alpha = b\\)<br>\\(\\log_a 1 = 0; \\quad \\log_a a = 1; \\quad \\log_a(a^\\alpha) = \\alpha; \\quad a^{\\log_a b} = b\\)", note: "Công thức \\(a^{\\log_a b} = b\\) rất hay dùng khi số mũ có chứa lôgarit." },
      { name: "2. Lôgarit của một tích, một thương và một lũy thừa (M, N > 0)", eq: "• \\(\\log_a(MN) = \\log_a M + \\log_a N\\)<br>• \\(\\log_a\\left(\\frac{M}{N}\\right) = \\log_a M - \\log_a N; \\quad \\log_a\\left(\\frac{1}{N}\\right) = -\\log_a N\\)<br>• \\(\\log_a(M^\\alpha) = \\alpha \\log_a M; \\quad \\log_a\\sqrt[n]{M} = \\frac{1}{n}\\log_a M\\)", note: "Chú ý: Nếu chỉ biết \\(x \\ne 0\\) và \\(n\\) chẵn thì \\(\\log_a(x^{2k}) = 2k\\log_a|x|\\)." },
      { name: "3. Công thức đổi cơ số (0 < a, c ≠ 1; b > 0)", eq: "\\(\\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{\\ln b}{\\ln a} \\iff \\log_c a \\cdot \\log_a b = \\log_c b\\)<br>Hệ quả: \\(\\log_a b = \\frac{1}{\\log_b a}\\; (b \\ne 1)\\); \\quad \\(\\log_{a^\\alpha} b = \\frac{1}{\\alpha}\\log_a b\\; (\\alpha \\ne 0)\\)", note: "Mũ ở đối số đưa ra ngoài giữ nguyên trên tử (\\(\\alpha\\)); mũ ở cơ số đưa ra ngoài phải nghịch đảo xuống mẫu (\\(\\frac{1}{\\alpha}\\))." }
    ],
    methods: [
      "Biểu diễn \\(\\log_a b\\) theo các lôgarit đã cho: Phân tích cơ số \\(a\\) và đối số \\(b\\) ra thừa số nguyên tố, sau đó dùng công thức đổi cơ số sang cơ số chung (thường là cơ số nguyên tố nhỏ nhất đề bài cho).",
      "Khi biến đổi biểu thức chứa \\(\\log_a[f(x)]\\), bước đầu tiên luôn là đặt điều kiện xác định \\(f(x) > 0\\) (và cơ số \\(0 < g(x) \\ne 1\\)).",
      "Lỗi dễ mắc: Nhầm \\(\\log_a(M + N)\\) thành \\(\\log_a M + \\log_a N\\) hoặc nhầm \\(\\frac{\\log_a M}{\\log_a N}\\) thành \\(\\log_a M - \\log_a N\\) (thực tế \\(\\frac{\\log_a M}{\\log_a N} = \\log_N M\\))."
    ],
    applications: [
      "Tính độ pH của dung dịch hóa học: \\(\\text{pH} = -\\log[\\text{H}^+] \\iff [\\text{H}^+] = 10^{-\\text{pH}}\\) (mol/L).",
      "Tính mức cường độ âm \\(L(\\text{B}) = \\log\\left(\\frac{I}{I_0}\\right)\\) (hoặc \\(L(\\text{dB}) = 10\\log\\left(\\frac{I}{I_0}\\right)\\)) và độ lớn địa chấn trên thang Richter \\(M = \\log A - \\log A_0\\)."
    ],
    diagramCaption: "Cầu nối hai chiều giữa Lũy thừa a^α = b và Lôgarit α = log_a(b) cùng sơ đồ quy tắc Tích – Thương – Đổi cơ số."
  },
  {
    num: 20,
    chapter: 6,
    vol: 2,
    title: "Hàm số mũ và hàm số lôgarit",
    subtitle: "Tập xác định, tập giá trị, sự biến thiên, tiệm cận và tính đối xứng qua đường thẳng y = x của đồ thị y = a^x và y = log_a x.",
    concepts: [
      "Hàm số mũ \\(y = a^x\\) (với cơ số \\(0 < a \\ne 1\\)): Tập xác định \\(D = \\mathbb{R}\\); Tập giá trị \\(T = (0; +\\infty)\\) (đồ thị nằm hoàn toàn phía trên trục hoành \\(Ox\\)); luôn đi qua điểm \\((0; 1)\\) và \\((1; a)\\); nhận trục hoành \\(Ox\\) (\\(y = 0\\)) làm đường tiệm cận ngang. Nếu \\(a > 1\\) hàm số đồng biến trên \\(\\mathbb{R}\\); nếu \\(0 < a < 1\\) hàm số nghịch biến trên \\(\\mathbb{R}\\).",
      "Hàm số lôgarit \\(y = \\log_a x\\) (với cơ số \\(0 < a \\ne 1\\)): Tập xác định \\(D = (0; +\\infty)\\) (đồ thị nằm hoàn toàn bên phải trục tung \\(Oy\\)); Tập giá trị \\(T = \\mathbb{R}\\); luôn đi qua điểm \\((1; 0)\\) và \\((a; 1)\\); nhận trục tung \\(Oy\\) (\\(x = 0\\)) làm đường tiệm cận đứng. Nếu \\(a > 1\\) hàm số đồng biến trên \\((0; +\\infty)\\); nếu \\(0 < a < 1\\) hàm số nghịch biến trên \\((0; +\\infty)\\).",
      "Mối quan hệ đối xứng: Với cùng cơ số \\(a\\), đồ thị của hai hàm số \\(y = a^x\\) và \\(y = \\log_a x\\) đối xứng với nhau qua đường phân giác của góc phần tư thứ nhất \\(y = x\\)."
    ],
    formulas: [
      { name: "Bảng đối chiếu Hàm số mũ y = a^x và Hàm số lôgarit y = log_a x", eq: "• \\(y = a^x\\): \\(D = \\mathbb{R},\\; T = (0;+\\infty),\\; \\text{TCN } y=0,\\; \\text{qua } (0;1)\\)<br>• \\(y = \\log_a x\\): \\(D = (0;+\\infty),\\; T = \\mathbb{R},\\; \\text{TCĐ } x=0,\\; \\text{qua } (1;0)\\)", note: "Cả hai hàm đều đồng biến khi \\(a > 1\\) và nghịch biến khi \\(0 < a < 1\\)." },
      { name: "Giới hạn ở hai đầu miền xác định", eq: "• Khi \\(a > 1\\): \\(\\lim_{x\\to -\\infty} a^x = 0,\\; \\lim_{x\\to +\\infty} a^x = +\\infty\\); \\quad \\(\\lim_{x\\to 0^+} \\log_a x = -\\infty,\\; \\lim_{x\\to +\\infty} \\log_a x = +\\infty\\)<br>• Khi \\(0 < a < 1\\): \\(\\lim_{x\\to -\\infty} a^x = +\\infty,\\; \\lim_{x\\to +\\infty} a^x = 0\\); \\quad \\(\\lim_{x\\to 0^+} \\log_a x = +\\infty,\\; \\lim_{x\\to +\\infty} \\log_a x = -\\infty\\)", note: "Hàm mũ và hàm lôgarit liên tục trên toàn bộ tập xác định của chúng." },
      { name: "Mô hình tăng trưởng mũ & Phân rã phóng xạ", eq: "\\(N(t) = N_0 (1 + r)^t = N_0 e^{kt}; \\qquad m(t) = m_0 \\cdot 2^{-\\frac{t}{T}} = m_0 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{T}}\\)", note: "\\(T\\) là chu kì bán rã (thời gian để lượng chất phóng xạ giảm còn một nửa)." }
    ],
    methods: [
      "Tìm tập xác định của hàm số \\(y = \\log_{g(x)} f(x)\\): Giải hệ điều kiện \\(\\left\\{\\begin{array}{l} f(x) > 0 \\\\ 0 < g(x) \\ne 1 \\end{array}\\right.\\). Với hàm số \\(y = [f(x)]^\\alpha\\) có \\(\\alpha\\) không nguyên thì điều kiện là \\(f(x) > 0\\).",
      "Mẹo đọc đồ thị nhận biết cơ số \\(a, b, c\\): Kẻ đường thẳng \\(y = 1\\) cắt các đồ thị \\(y = \\log_a x, \\log_b x\\) tại các hoành độ \\(x = a, b\\); hoặc kẻ đường thẳng \\(x = 1\\) cắt các đồ thị \\(y = a^x, b^x\\) tại các tung độ \\(y = a, b\\).",
      "Lỗi dễ mắc: Nhầm tập xác định của \\(y = \\log_a(x^2 - 1)\\) là \\(x^2 - 1 \\ge 0\\) (phải là dấu lớn hơn hẳn \\(x^2 - 1 > 0\\))."
    ],
    applications: [
      "Dự báo quy mô dân số \\(P(t) = P_0 e^{rt}\\), tính thời gian hoàn vốn đầu tư và xác định tuổi cổ vật bằng phương pháp đồng vị phóng xạ Carbon-14 (\\(T \\approx 5730\\) năm).",
      "Mô hình làm nguội của Newton và sự suy giảm cường độ ánh sáng khi truyền qua môi trường hấp thụ."
    ],
    diagramCaption: "Đồ thị hàm số mũ y = a^x và hàm số lôgarit y = log_a x trong hai trường hợp a > 1 và 0 < a < 1, đối xứng nhau qua đường phân giác y = x."
  },
  {
    num: 21,
    chapter: 6,
    vol: 2,
    title: "Phương trình, bất phương trình mũ và lôgarit",
    subtitle: "Phương pháp giải phương trình, bất phương trình mũ và lôgarit cơ bản – nâng cao và quy tắc bảo toàn/đảo chiều theo cơ số.",
    concepts: [
      "Phương trình mũ cơ bản \\(a^x = b\\) (\\(0 < a \\ne 1\\)): Vì \\(a^x > 0, \\forall x \\in \\mathbb{R}\\) nên nếu \\(b \\le 0\\) thì phương trình vô nghiệm; nếu \\(b > 0\\) thì phương trình luôn có nghiệm duy nhất \\(x = \\log_a b\\).",
      "Phương trình lôgarit cơ bản \\(\\log_a x = b\\) (\\(0 < a \\ne 1\\)): Với mọi \\(b \\in \\mathbb{R}\\), phương trình luôn có nghiệm duy nhất \\(x = a^b\\) (tự động thỏa mãn điều kiện \\(x > 0\\)).",
      "Nguyên tắc vàng khi giải bất phương trình mũ và lôgarit: (1) Xét cơ số \\(a\\): nếu \\(a > 1\\) thì giữ nguyên chiều bất phương trình; nếu \\(0 < a < 1\\) thì PHẢI ĐẢO CHIỀU bất phương trình; (2) Với bất phương trình lôgarit, bắt buộc phải kết hợp điều kiện xác định làm cho mọi biểu thức trong log đều dương (\\(> 0\\))."
    ],
    formulas: [
      { name: "1. Phương trình mũ cơ bản & Đưa về cùng cơ số (0 < a ≠ 1)", eq: "• \\(a^x = b \\iff \\left\\{\\begin{array}{ll} x = \\log_a b & \\text{nếu } b > 0 \\\\ \\text{vô nghiệm} & \\text{nếu } b \\le 0 \\end{array}\\right.\\)<br>• \\(a^{f(x)} = a^{g(x)} \\iff f(x) = g(x)\\)", note: "Nếu cơ số chứa ẩn, cần xét thêm trường hợp cơ số bằng 1." },
      { name: "2. Phương trình lôgarit cơ bản & Đưa về cùng cơ số (0 < a ≠ 1)", eq: "• \\(\\log_a f(x) = b \\iff f(x) = a^b\\) (tự thỏa \\(f(x) > 0\\) vì \\(a^b > 0\\))<br>• \\(\\log_a f(x) = \\log_a g(x) \\iff \\left\\{\\begin{array}{l} f(x) > 0 \\; (\\text{hoặc } g(x) > 0) \\\\ f(x) = g(x) \\end{array}\\right.\\)", note: "Chỉ cần đặt điều kiện dương cho 1 trong 2 biểu thức \\(f(x)\\) hoặc \\(g(x)\\) khi \\(f(x) = g(x)\\)." },
      { name: "3. Bất phương trình mũ (0 < a ≠ 1)", eq: "• Với \\(a > 1\\): \\(a^{f(x)} > a^{g(x)} \\iff f(x) > g(x)\\)<br>• Với \\(0 < a < 1\\): \\(a^{f(x)} > a^{g(x)} \\iff f(x) < g(x)\\) (ĐẢO CHIỀU)", note: "Nếu \\(a^{f(x)} > b\\) với \\(b \\le 0\\) thì nghiệm là mọi \\(x\\) làm \\(f(x)\\) xác định; nếu \\(a^{f(x)} \\le b\\) với \\(b \\le 0\\) thì vô nghiệm." },
      { name: "4. Bất phương trình lôgarit (0 < a ≠ 1)", eq: "• Với \\(a > 1\\): \\(\\log_a f(x) > \\log_a g(x) \\iff \\left\\{\\begin{array}{l} g(x) > 0 \\\\ f(x) > g(x) \\end{array}\\right.\\); \\quad \\(\\log_a f(x) < b \\iff 0 < f(x) < a^b\\)<br>• Với \\(0 < a < 1\\): \\(\\log_a f(x) > \\log_a g(x) \\iff \\left\\{\\begin{array}{l} f(x) > 0 \\\\ f(x) < g(x) \\end{array}\\right.\\); \\quad \\(\\log_a f(x) > b \\iff 0 < f(x) < a^b\\)", note: "Rất dễ quên chặn dưới \\(0 < f(x)\\) khi giải \\(\\log_a f(x) < b\\) (với \\(a>1\\)) hoặc \\(\\log_a f(x) > b\\) (với \\(0<a<1\\))!" }
    ],
    methods: [
      "Các phương pháp giải nâng cao: (1) Đưa về cùng cơ số; (2) Đặt ẩn phụ: đặt \\(t = a^x\\) (điều kiện \\(t > 0\\)) hoặc đặt \\(t = \\log_a x\\) (\\(t \\in \\mathbb{R}\\)); (3) Lôgarit hóa hai vế dương của phương trình \\(a^{f(x)} = b^{g(x)}\\).",
      "Khi gộp \\(\\log_a f(x) + \\log_a g(x) = \\log_a[f(x)g(x)]\\), bắt buộc phải đặt điều kiện riêng \\(f(x) > 0\\) VÀ \\(g(x) > 0\\) ngay từ đầu (vì \\(f(x)g(x) > 0\\) chứa cả trường hợp cả hai cùng âm làm log ban đầu vô nghĩa).",
      "Lỗi dễ mắc: Quên điều kiện \\(f(x) > 0\\) ở bất phương trình \\(\\log_2 f(x) < 3 \\iff 0 < f(x) < 8\\); quên đảo chiều khi cơ số \\(0 < a < 1\\) (ví dụ \\(\\log_{0,5} x\\) hoặc \\((1/3)^x\\))."
    ],
    applications: [
      "Giải bài toán tìm số năm \\(n\\) tối thiểu để số tiền tiết kiệm \\(P(1+r)^n\\) vượt mốc mục tiêu \\(A\\): \\(n > \\log_{1+r}\\left(\\frac{A}{P}\\right)\\).",
      "Tính thời gian thuốc kháng sinh đào thải trong máu xuống dưới ngưỡng an toàn."
    ],
    diagramCaption: "Sơ đồ thuật toán giải bất phương trình Mũ và Lôgarit: phân nhánh theo cơ số a > 1 (giữ chiều) và 0 < a < 1 (đảo chiều + chặn điều kiện > 0)."
  },
  {
    num: 22,
    chapter: 7,
    vol: 2,
    title: "Hai đường thẳng vuông góc",
    subtitle: "Góc giữa hai đường thẳng bất kì trong không gian, định nghĩa hai đường thẳng vuông góc (cắt nhau hoặc chéo nhau) và phương pháp chứng minh.",
    concepts: [
      "Góc giữa hai đường thẳng \\(a\\) và \\(b\\) trong không gian, kí hiệu \\((a, b)\\), là góc giữa hai đường thẳng \\(a'\\) và \\(b'\\) cùng đi qua một điểm \\(O\\) bất kì và lần lượt song song (hoặc trùng) với \\(a\\) và \\(b\\).",
      "Miền giá trị của góc giữa hai đường thẳng: \\(0^\\circ \\le (a, b) \\le 90^\\circ\\) (luôn là góc nhọn hoặc góc vuông, không bao giờ là góc tù!). Nếu \\(a \\parallel b\\) hoặc \\(a \\equiv b\\) thì \\((a, b) = 0^\\circ\\).",
      "Hai đường thẳng \\(a\\) và \\(b\\) được gọi là vuông góc với nhau, kí hiệu \\(a \\perp b\\), nếu góc giữa chúng bằng \\(90^\\circ\\). Lưu ý cực kì quan trọng: Trong không gian, hai đường thẳng vuông góc với nhau có thể CẮT NHAU hoặc CHÉO NHAU (không nhất thiết phải cắt nhau như trong mặt phẳng).",
      "Tính chất: Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng còn lại (\\(a \\parallel b\\) và \\(c \\perp a \\Rightarrow c \\perp b\\))."
    ],
    formulas: [
      { name: "1. Định nghĩa góc giữa hai đường thẳng a và b", eq: "Lấy \\(O\\) bất kì (thường chọn \\(O \\in a\\) hoặc \\(O\\) là trung điểm), kẻ \\(a' \\parallel a,\\; b' \\parallel b\\) qua \\(O\\):<br>\\((a, b) = (a', b') \\in [0^\\circ; 90^\\circ]\\)", note: "Nếu trong tam giác tính ra góc \\(\\widehat{A'OB'} > 90^\\circ\\) thì góc giữa hai đường thẳng là \\(180^\\circ - \\widehat{A'OB'}\\)." },
      { name: "2. Điều kiện hai đường thẳng vuông góc", eq: "\\(a \\perp b \\iff (a, b) = 90^\\circ\\); \\qquad \\left\\{\\begin{array}{l} a \\parallel b \\\\ c \\perp a \\end{array}\\right. \\implies c \\perp b\\)", note: "Hai cạnh đối của tứ diện đều (ví dụ \\(AB\\) và \\(CD\\)) luôn chéo nhau và vuông góc với nhau." },
      { name: "3. Định lí Côsin tính góc giữa hai đường thẳng", eq: "Trong \\(\\triangle OMN\\) có \\(OM \\parallel a,\\; ON \\parallel b\\):<br>\\(\\cos(a, b) = |\\cos\\widehat{MON}| = \\frac{|OM^2 + ON^2 - MN^2|}{2 \\cdot OM \\cdot ON}\\)", note: "Lấy trị tuyệt đối \\(|\\cos\\widehat{MON}|\\) để đảm bảo góc \\((a, b) \\le 90^\\circ\\)." }
    ],
    methods: [
      "Cách xác định và tính góc \\((a, b)\\) giữa hai đường chéo nhau: Từ một điểm thuận lợi (thường là trung điểm một đoạn thẳng trong hình chóp để tận dụng đường trung bình song song với \\(a\\) và \\(b\\)), dựng tam giác chứa hai cạnh song song với \\(a, b\\) rồi áp dụng định lí Côsin hoặc hệ thức lượng tam giác vuông.",
      "Cách chứng minh \\(a \\perp b\\): (1) Kẻ \\(a' \\parallel a\\) cắt \\(b\\) rồi dùng định lí Pythagore đảo hoặc tính chất tam giác cân/đều; (2) Dùng tích vô hướng \\(\\vec{u}_a \\cdot \\vec{u}_b = 0\\); (3) Chứng minh \\(a\\) vuông góc với một mặt phẳng chứa \\(b\\) (Bài 23).",
      "Lỗi dễ mắc: Kết luận góc giữa hai đường thẳng bằng \\(120^\\circ\\) (quên lấy góc bù \\(180^\\circ - 120^\\circ = 60^\\circ\\)) hoặc tưởng rằng hai đường thẳng vuông góc trong không gian thì bắt buộc phải cắt nhau."
    ],
    applications: [
      "Trong hình lập phương \\(ABCD.A'B'C'D'\\), các cặp cạnh chéo nhau như \\(AB \\perp CC'\\), \\(AB \\perp B'C'\\), \\(AC \\perp B'D'\\) giúp định hình kết cấu khung vuông góc.",
      "Tính góc lệch giữa hai thanh giằng chéo nhau trong kết cấu cầu thép và giàn giáo xây dựng."
    ],
    diagramCaption: "Cách xác định góc (a, b) giữa hai đường thẳng chéo nhau bằng phép tịnh tiến song song về điểm O và ví dụ hai đường vuông góc chéo nhau trong hình lập phương."
  },
  {
    num: 23,
    chapter: 7,
    vol: 2,
    title: "Đường thẳng vuông góc với mặt phẳng",
    subtitle: "Định nghĩa, điều kiện để đường thẳng vuông góc mặt phẳng, tính chất cơ bản và định lí ba đường vuông góc.",
    concepts: [
      "Định nghĩa: Đường thẳng \\(d\\) được gọi là vuông góc với mặt phẳng \\((P)\\), kí hiệu \\(d \\perp (P)\\), nếu \\(d\\) vuông góc với MỌI đường thẳng \\(a\\) nằm trong mặt phẳng \\((P)\\).",
      "Định lí dấu hiệu nhận biết (cốt lõi): Nếu một đường thẳng vuông góc với HAI đường thẳng cắt nhau cùng thuộc một mặt phẳng thì nó vuông góc với mặt phẳng ấy.",
      "Tính chất: (1) Có duy nhất một mặt phẳng đi qua một điểm cho trước và vuông góc với một đường thẳng cho trước (mặt phẳng trung trực của đoạn thẳng \\(AB\\) đi qua trung điểm \\(I\\) của \\(AB\\) và vuông góc với \\(AB\\), là tập hợp các điểm cách đều \\(A\\) và \\(B\\)); (2) Có duy nhất một đường thẳng đi qua một điểm cho trước và vuông góc với một mặt phẳng cho trước; (3) Hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì song song với nhau; hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau.",
      "Định lí ba đường vuông góc: Cho đường thẳng \\(a\\) nằm trong mặt phẳng \\((P)\\) và đường thẳng \\(b\\) không nằm trong \\((P)\\) đồng thời không vuông góc với \\((P)\\). Gọi \\(b'\\) là hình chiếu vuông góc của \\(b\\) trên \\((P)\\). Khi đó \\(a \\perp b \\iff a \\perp b'\\)."
    ],
    formulas: [
      { name: "1. Dấu hiệu chứng minh d ⊥ (P) (vuông góc 2 đường cắt nhau)", eq: "\\(\\left\\{\\begin{array}{l} a, b \\subset (P); \\quad a \\cap b = I \\\\ d \\perp a, \\quad d \\perp b \\end{array}\\right. \\implies d \\perp (P)\\)", note: "Từ \\(d \\perp (P)\\), ta suy ra ngay \\(d \\perp c\\) với mọi đường thẳng \\(c \\subset (P)\\)." },
      { name: "2. Cách chứng minh d ⊥ c trong không gian (phương pháp mạnh nhất)", eq: "\\(\\left\\{\\begin{array}{l} d \\perp (P) \\\\ c \\subset (P) \\end{array}\\right. \\implies d \\perp c\\)", note: "Muốn chứng minh \\(d \\perp c\\), ta tìm mặt phẳng \\((P) \\supset c\\) rồi chứng minh \\(d \\perp (P)\\)." },
      { name: "3. Liên hệ giữa quan hệ song song và vuông góc", eq: "• \\(\\left\\{\\begin{array}{l} a \\perp (P) \\\\ b \\perp (P) \\end{array}\\right. \\;(a \\ne b) \\implies a \\parallel b; \\qquad \\left\\{\\begin{array}{l} a \\parallel b \\\\ a \\perp (P) \\end{array}\\right. \\implies b \\perp (P)\\)<br>• \\(\\left\\{\\begin{array}{l} (P) \\perp d \\\\ (Q) \\perp d \\end{array}\\right. \\;((P) \\ne (Q)) \\implies (P) \\parallel (Q); \\qquad \\left\\{\\begin{array}{l} d \\parallel (P) \\\\ \\Delta \\perp (P) \\end{array}\\right. \\implies \\Delta \\perp d\\)", note: "Rất hữu ích khi chuyển chứng minh vuông góc từ đường này sang đường song song với nó." },
      { name: "4. Định lí ba đường vuông góc", eq: "Với \\(a \\subset (P)\\) và \\(b'\\) là hình chiếu vuông góc của \\(b\\) lên \\((P)\\):<br>\\(a \\perp b \\iff a \\perp b'\\)", note: "Bản chất là chứng minh \\(a \\perp \\text{mp}(b, b')\\)." }
    ],
    methods: [
      "Quy trình chuẩn chứng minh \\(d \\perp (P)\\): Tìm trong \\((P)\\) hai đường thẳng cắt nhau \\(a, b\\) sao cho \\(d \\perp a\\) (thường do giả thiết đường cao \\(SA \\perp \\text{đáy}\\)) và \\(d \\perp b\\) (thường do tính chất đáy là hình vuông, chữ nhật, tam giác vuông hoặc tam giác cân/đều).",
      "Ứng dụng trong hình chóp có \\(SA \\perp (ABC)\\): Nếu \\(\\triangle ABC\\) vuông tại \\(B\\) thì \\(BC \\perp AB\\) và \\(BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB\\) (và nếu kẻ \\(AH \\perp SB\\) thì \\(AH \\perp (SBC) \\Rightarrow AH \\perp SC\\)).",
      "Lỗi dễ mắc: Mới chỉ ra \\(d\\) vuông góc với 1 đường thẳng trong \\((P)\\) hoặc 2 đường thẳng song song trong \\((P)\\) đã kết luận \\(d \\perp (P)\\)."
    ],
    applications: [
      "Sử dụng dây dọi trong xây dựng để kiểm tra cột nhà, bức tường có thẳng đứng vuông góc với mặt sàn nằm ngang hay không.",
      "Thiết kế trục quay động cơ vuông góc với mặt phẳng bánh răng."
    ],
    diagramCaption: "Dấu hiệu d ⊥ (P) khi d vuông góc với hai đường cắt nhau a, b ⊂ (P) và mô hình Định lí ba đường vuông góc (a ⊥ b ⇔ a ⊥ b')."
  },
  {
    num: 24,
    chapter: 7,
    vol: 2,
    title: "Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng",
    subtitle: "Định nghĩa phép chiếu vuông góc, cách xác định và tính góc giữa đường thẳng với mặt phẳng và công thức diện tích hình chiếu.",
    concepts: [
      "Phép chiếu vuông góc lên mặt phẳng \\((P)\\) là phép chiếu song song theo phương chiếu \\(l\\) vuông góc với mặt phẳng \\((P)\\). Hình chiếu vuông góc của điểm \\(M\\) trên \\((P)\\) chính là chân đường vuông góc \\(H\\) kẻ từ \\(M\\) xuống \\((P)\\) (\\(MH \\perp (P)\\) tại \\(H\\)).",
      "Định nghĩa góc giữa đường thẳng \\(d\\) và mặt phẳng \\((P)\\), kí hiệu \\((d, (P))\\): (1) Nếu \\(d \\perp (P)\\) thì góc giữa \\(d\\) và \\((P)\\) bằng \\(90^\\circ\\); (2) Nếu \\(d\\) không vuông góc với \\((P)\\) thì góc giữa \\(d\\) và \\((P)\\) là góc giữa \\(d\\) và hình chiếu vuông góc \\(d'\\) của nó trên \\((P)\\): \\((d, (P)) = (d, d')\\).",
      "Miền giá trị: \\(0^\\circ \\le (d, (P)) \\le 90^\\circ\\). Đặc biệt nếu \\(d \\parallel (P)\\) hoặc \\(d \\subset (P)\\) thì \\((d, (P)) = 0^\\circ\\). Góc giữa \\(d\\) và hình chiếu \\(d'\\) là góc nhỏ nhất trong các góc tạo bởi \\(d\\) với mọi đường thẳng nằm trong \\((P)\\)."
    ],
    formulas: [
      { name: "1. Quy tắc 3 bước xác định góc giữa đường xiên AB và mặt phẳng (P)", eq: "• Bước 1: Tìm giao điểm \\(B = AB \\cap (P)\\) (Đỉnh góc).<br>• Bước 2: Từ \\(A\\), tìm chân đường vuông góc \\(H\\) trên \\((P)\\) sao cho \\(AH \\perp (P)\\).<br>• Bước 3: \\(HB\\) là hình chiếu của \\(AB\\) lên \\((P) \\implies (AB, (P)) = (AB, HB) = \\widehat{ABH}\\).", note: "Tam giác \\(AHB\\) luôn vuông tại \\(H\\)!" },
      { name: "2. Hệ thức lượng trong tam giác vuông AHB (vuông tại H)", eq: "\\(\\sin\\alpha = \\frac{AH}{AB}; \\qquad \\cos\\alpha = \\frac{HB}{AB}; \\qquad \\tan\\alpha = \\frac{AH}{HB}; \\qquad AB^2 = AH^2 + HB^2\\)", note: "Với \\(\\alpha = \\widehat{ABH} = (AB, (P))\\)." },
      { name: "3. Công thức diện tích hình chiếu của một đa giác", eq: "\\(S' = S \\cdot \\cos\\varphi\\)", note: "\\(S\\): diện tích đa giác trong mặt phẳng \\((Q)\\); \\(S'\\): diện tích hình chiếu vuông góc trên \\((P)\\); \\(\\varphi\\): góc giữa \\((P)\\) và \\((Q)\\)." }
    ],
    methods: [
      "Mẹo nhớ nhanh xác định góc \\((AB, (P))\\): 'Giao – Chiếu – Nối': (1) Tìm giao điểm \\(B\\); (2) Tìm hình chiếu vuông góc \\(H\\) của điểm còn lại \\(A\\) xuống \\((P)\\); (3) Nối \\(H\\) với \\(B\\) thì góc cần tìm luôn đặt tại giao điểm \\(B\\) (\\(\\widehat{ABH}\\)).",
      "Trong hình chóp \\(S.ABC\\) có \\(SA \\perp (ABC)\\): Góc giữa cạnh bên \\(SB, SC\\) với mặt đáy \\((ABC)\\) lần lượt là \\(\\widehat{SBA}, \\widehat{SCA}\\). Góc giữa \\(SC\\) với mặt bên \\((SAB)\\) (khi \\(BC \\perp (SAB)\\)) là \\(\\widehat{CSB}\\).",
      "Lỗi dễ mắc: Lấy nhầm góc giữa \\(AB\\) với một đường bất kì trong \\((P)\\) mà chưa chứng minh đường đó là hình chiếu vuông góc \\(HB\\) (tức chưa chứng minh \\(AH \\perp (P)\\))."
    ],
    applications: [
      "Tính độ dốc của đường đèo, cầu thang, mái nhà hoặc góc nghiêng tối ưu của tấm pin năng lượng mặt trời so với mặt đất.",
      "Tính chiều cao của tháp/cây từ chiều dài bóng trên mặt đất và góc nâng của tia nắng Mặt Trời: \\(h = d \\cdot \\tan\\alpha\\)."
    ],
    diagramCaption: "Quy tắc 'Giao – Chiếu – Nối' xác định góc α = ∠ABH giữa đường xiên AB và mặt phẳng (P) trong tam giác vuông AHB."
  },
  {
    num: 25,
    chapter: 7,
    vol: 2,
    title: "Hai mặt phẳng vuông góc",
    subtitle: "Góc giữa hai mặt phẳng, góc nhị diện, điều kiện hai mặt phẳng vuông góc, các định lí hệ quả và hình lăng trụ đứng – hình chóp đều.",
    concepts: [
      "Góc giữa hai mặt phẳng \\((P)\\) và \\((Q)\\), kí hiệu \\(((P), (Q))\\), là góc giữa hai đường thẳng lần lượt vuông góc với \\((P)\\) và \\((Q)\\), luôn thỏa mãn \\(0^\\circ \\le ((P), (Q)) \\le 90^\\circ\\). Cách dựng thực hành: Nếu \\((P)\\) cắt \\((Q)\\) theo giao tuyến \\(c\\), từ điểm \\(I \\in c\\) kẻ \\(a \\subset (P)\\) có \\(a \\perp c\\) và \\(b \\subset (Q)\\) có \\(b \\perp c\\) thì \\(((P), (Q)) = (a, b)\\).",
      "Góc nhị diện \\([P, c, Q]\\) gồm hai nửa mặt phẳng \\((P), (Q)\\) có chung bờ \\(c\\). Với \\(I \\in c\\), tia \\(Ix \\subset (P), Ix \\perp c\\) và tia \\(Iy \\subset (Q), Iy \\perp c\\) tạo thành góc phẳng nhị diện \\(\\widehat{xIy} \\in [0^\\circ; 180^\\circ]\\) (chú ý: góc phẳng nhị diện có thể tù, còn góc giữa hai mặt phẳng luôn \\(\\le 90^\\circ\\)!).",
      "Hai mặt phẳng vuông góc: \\((P) \\perp (Q) \\iff ((P), (Q)) = 90^\\circ\\). Dấu hiệu nhận biết: Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia thì hai mặt phẳng đó vuông góc với nhau.",
      "Các khối đa diện đặc biệt: (1) Lăng trụ đứng có cạnh bên vuông góc với đáy (mặt bên là hình chữ nhật, cạnh bên bằng chiều cao \\(h\\)); Lăng trụ đều là lăng trụ đứng có đáy là đa giác đều; Hình hộp đứng (đáy là hình bình hành); Hình hộp chữ nhật (6 mặt là hình chữ nhật); Hình lập phương (6 mặt là hình vuông); (2) Hình chóp đều có đáy là đa giác đều và chân đường cao \\(SO\\) trùng với tâm \\(O\\) của đáy (các cạnh bên bằng nhau, các mặt bên là các tam giác cân bằng nhau)."
    ],
    formulas: [
      { name: "1. Xác định góc giữa hai mặt phẳng cắt nhau theo giao tuyến c", eq: "\\(\\left\\{\\begin{array}{l} (P) \\cap (Q) = c \\\\ a \\subset (P),\\; a \\perp c \\text{ tại } I \\\\ b \\subset (Q),\\; b \\perp c \\text{ tại } I \\end{array}\\right. \\implies ((P), (Q)) = (a, b) \\in [0^\\circ; 90^\\circ]\\)", note: "Với góc phẳng nhị diện \\([A, c, B]\\), số đo góc nhị diện là \\(\\widehat{AIB} \\in [0^\\circ; 180^\\circ]\\)." },
      { name: "2. Dấu hiệu chứng minh hai mặt phẳng vuông góc (P) ⊥ (Q)", eq: "\\(\\left\\{\\begin{array}{l} d \\subset (P) \\\\ d \\perp (Q) \\end{array}\\right. \\implies (P) \\perp (Q)\\)", note: "Muốn chứng minh \\((P) \\perp (Q)\\), ta chỉ ra trong \\((P)\\) có chứa 1 đường thẳng \\(d \\perp (Q)\\)." },
      { name: "3. Hai định lí tính chất cực kì quan trọng để xác định đường cao SO", eq: "• Định lí 1 (Đường vuông góc giao tuyến): \\(\\left\\{\\begin{array}{l} (P) \\perp (Q),\\; (P) \\cap (Q) = c \\\\ a \\subset (P),\\; a \\perp c \\end{array}\\right. \\implies a \\perp (Q)\\)<br>• Định lí 2 (Giao tuyến của 2 mặt cùng vuông góc với đáy): \\(\\left\\{\\begin{array}{l} (P) \\cap (Q) = d \\\\ (P) \\perp (R),\\; (Q) \\perp (R) \\end{array}\\right. \\implies d \\perp (R)\\)", note: "Ví dụ: Nếu mặt bên \\((SAB) \\perp (ABC)\\) thì đường cao \\(SH\\) của \\(\\triangle SAB\\) kẻ xuống giao tuyến \\(AB\\) chính là đường cao của hình chóp (\\(SH \\perp (ABC)\\))!" },
      { name: "4. Đường chéo của hình hộp chữ nhật (kích thước a, b, c) & Hình lập phương cạnh a", eq: "\\(d_{\\text{hình hộp chữ nhật}} = \\sqrt{a^2 + b^2 + c^2}; \\qquad d_{\\text{lập phương}} = a\\sqrt{3}\\)", note: "Trong chóp tam giác đều \\(S.ABC\\) cạnh đáy \\(a\\): bán kính ngoại tiếp đáy \\(R = AO = \\frac{a\\sqrt{3}}{3}\\), nội tiếp \\(r = OM = \\frac{a\\sqrt{3}}{6}\\)." }
    ],
    methods: [
      "Mẫu dựng góc giữa mặt bên \\((SBC)\\) và mặt đáy \\((ABC)\\) khi biết \\(SA \\perp (ABC)\\): (1) Giao tuyến là \\(BC\\); (2) Từ chân đường cao \\(A\\), kẻ \\(AH \\perp BC\\) tại \\(H\\); (3) Theo định lí 3 đường vuông góc, \\(SH \\perp BC\\); (4) Vậy góc \\(((SBC), (ABC)) = (SH, AH) = \\widehat{SHA}\\).",
      "Cách tìm chân đường cao hình chóp từ giả thiết mặt bên vuông góc đáy: Nếu \\((SAB) \\perp (ABC)\\) và \\((SAC) \\perp (ABC)\\) thì giao tuyến \\(SA \\perp (ABC)\\). Nếu chỉ có \\((SAB) \\perp (ABC)\\) thì từ \\(S\\) hạ \\(SH \\perp AB\\) (giao tuyến), suy ra \\(SH \\perp (ABC)\\).",
      "Lỗi dễ mắc: Nhầm góc phẳng nhị diện (có thể tù \\(> 90^\\circ\\)) với góc giữa hai mặt phẳng (luôn \\(\\le 90^\\circ\\)); hoặc trong hình chóp đều tưởng nhầm góc giữa mặt bên và đáy là góc giữa cạnh bên và đáy."
    ],
    applications: [
      "Tính độ nghiêng mái dốc kim tự tháp Ai Cập, mái nhà tứ giác đều và góc mở của laptop, cánh cửa.",
      "Thiết kế các vách ngăn chịu lực vuông góc với sàn trong xây dựng dân dụng."
    ],
    diagramCaption: "Cách xác định góc giữa hai mặt phẳng ((SBC), (ABC)) = ∠SHA qua giao tuyến BC và mô hình hình chóp tứ giác đều S.ABCD."
  },
  {
    num: 26,
    chapter: 7,
    vol: 2,
    title: "Khoảng cách",
    subtitle: "Khoảng cách từ một điểm đến đường thẳng/mặt phẳng, khoảng cách giữa đường và mặt song song, hai mặt song song và hai đường chéo nhau.",
    concepts: [
      "Khoảng cách từ điểm \\(M\\) đến đường thẳng \\(a\\) (hoặc mặt phẳng \\((P)\\)), kí hiệu \\(d(M, a)\\) (hoặc \\(d(M, (P))\\)), là độ dài đoạn vuông góc \\(MH\\) kẻ từ \\(M\\) đến \\(a\\) (hoặc \\((P)\\)). Đây là khoảng cách ngắn nhất từ \\(M\\) tới mọi điểm thuộc \\(a\\) (hoặc \\((P)\\)).",
      "Khoảng cách giữa đường thẳng \\(a\\) và mặt phẳng \\((P)\\) song song với nhau là khoảng cách từ một điểm \\(M\\) bất kì trên \\(a\\) đến \\((P)\\): \\(d(a, (P)) = d(M, (P))\\). Khoảng cách giữa hai mặt phẳng song song \\((P) \\parallel (Q)\\) là khoảng cách từ một điểm bất kì của mặt này đến mặt kia.",
      "Đường vuông góc chung và khoảng cách giữa hai đường thẳng chéo nhau \\(a, b\\): Đường thẳng \\(\\Delta\\) cắt cả \\(a, b\\) (tại \\(M, N\\)) và cùng vuông góc với \\(a, b\\) gọi là đường vuông góc chung của \\(a\\) và \\(b\\). Độ dài đoạn vuông góc chung \\(MN\\) là khoảng cách giữa hai đường chéo nhau: \\(d(a, b) = MN\\) (cũng bằng khoảng cách từ \\(a\\) đến mặt phẳng \\((P)\\) chứa \\(b\\) và song song với \\(a\\))."
    ],
    formulas: [
      { name: "1. Quy đổi tỉ số khoảng cách từ điểm M bất kì về chân đường cao A", eq: "Cho \\(AM\\) cắt mặt phẳng \\((P)\\) tại \\(I\\) (hoặc \\(AM \\parallel (P)\\)):<br>• Nếu \\(AM \\parallel (P) \\implies d(M, (P)) = d(A, (P))\\)<br>• Nếu \\(AM \\cap (P) = I \\implies \\frac{d(M, (P))}{d(A, (P))} = \\frac{MI}{AI}\\)", note: "Đây là kĩ thuật 'Đổi điểm' quan trọng nhất: luôn đưa điểm khó tính \\(M\\) về chân đường cao \\(A\\)!" },
      { name: "2. Bài toán gốc: Tính d(A, (SBC)) khi biết SA ⊥ (ABC) (chân đường cao A)", eq: "• Bước 1: Trong đáy \\((ABC)\\), từ \\(A\\) kẻ \\(AE \\perp BC\\) tại \\(E\\) (\\(BC\\) là giao tuyến).<br>• Bước 2: Trong \\(\\triangle SAE\\) vuông tại \\(A\\), kẻ \\(AH \\perp SE\\) tại \\(H \\implies AH \\perp (SBC)\\).<br>• Công thức: \\(\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AE^2} \\iff AH = \\frac{SA \\cdot AE}{\\sqrt{SA^2 + AE^2}}\\)", note: "Nếu \\(\\triangle ABC\\) vuông tại \\(B\\) thì \\(E \\equiv B\\) (chỉ cần kẻ 1 đường \\(AH \\perp SB\\))." },
      { name: "3. Công thức 1/d^2 cho tứ diện vuông O.ABC (OA, OB, OC đôi một vuông góc)", eq: "Gọi \\(OH = d(O, (ABC))\\) thì \\(H\\) là trực tâm \\(\\triangle ABC\\) và:<br>\\(\\frac{1}{OH^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2}\\)", note: "Áp dụng cực nhanh khi 3 cạnh xuất phát từ \\(O\\) đôi một vuông góc." },
      { name: "4. Khoảng cách giữa hai đường thẳng chéo nhau a và b", eq: "Dựng mặt phẳng \\((P) \\supset b\\) sao cho \\(a \\parallel (P)\\). Khi đó với mọi \\(M \\in a\\):<br>\\(d(a, b) = d(a, (P)) = d(M, (P))\\)", note: "Quy bài toán khoảng cách hai đường chéo nhau về bài toán khoảng cách từ điểm đến mặt phẳng!" }
    ],
    methods: [
      "Ba bước vàng tính \\(d(M, (P))\\): (1) Nếu \\(M\\) là chân đường cao của hình chóp \\(\\to\\) dùng bài toán mẫu 2 nét vẽ (\\(AE \\perp \\text{giao tuyến}\\), \\(AH \\perp SE\\)); (2) Nếu \\(M\\) không phải chân đường cao \\(\\to\\) nối \\(M\\) với chân đường cao \\(A\\) để đổi khoảng cách theo tỉ số \\(\\frac{d(M,(P))}{d(A,(P))} = \\frac{MI}{AI}\\); (3) Hoặc dùng phương pháp thể tích \\(d(M, (P)) = \\frac{3V_{M.ABC}}{S_{\\triangle ABC}}\\) (Bài 27).",
      "Hai trường hợp tính \\(d(a, b)\\) giữa hai đường chéo nhau: (1) Nếu \\(a \\perp b\\) (ví dụ \\(SA \\perp BC\\)): dựng đoạn vuông góc chung trực tiếp; (2) Trường hợp tổng quát (ví dụ \\(d(SA, BC)\\) hoặc \\(d(AB, SC)\\)): qua \\(C\\) kẻ đường thẳng \\(Cx \\parallel AB\\) để tạo mặt phẳng \\((SCx) \\parallel AB\\), rồi tính \\(d(AB, SC) = d(A, (SCx))\\).",
      "Lỗi dễ mắc: Kẻ \\(AH \\perp SB\\) rồi kết luận ngay \\(AH = d(A, (SBC))\\) khi \\(\\triangle ABC\\) KHÔNG vuông tại \\(B\\) (phải kẻ \\(AE \\perp BC\\) trước rồi mới kẻ \\(AH \\perp SE\\)!)."
    ],
    applications: [
      "Tính khoảng cách an toàn tối thiểu giữa hai đường ống dẫn khí/đường dây cao thế chéo nhau hoặc hai hành lang bay của máy bay ở các độ cao khác nhau.",
      "Tính chiều dài ngắn nhất của cáp neo nối từ chân trụ đến mái nghiêng."
    ],
    diagramCaption: "Bài toán gốc 2 nét vẽ tính khoảng cách từ chân đường cao A đến mặt bên (SBC): kẻ AE ⊥ BC và AH ⊥ SE, cùng phương pháp mặt phẳng song song tính d(a, b)."
  },
  {
    num: 27,
    chapter: 7,
    vol: 2,
    title: "Thể tích",
    subtitle: "Công thức tính thể tích khối hộp chữ nhật, khối lăng trụ, khối chóp và khối chóp cụt đều kèm các công thức diện tích đáy.",
    concepts: [
      "Thể tích của một khối đa diện là số đo phần không gian mà khối đa diện đó chiếm chỗ, luôn là một số dương và có tính chất cộng được (nếu chia khối \\(H\\) thành hai khối \\(H_1, H_2\\) không có điểm trong chung thì \\(V(H) = V(H_1) + V(H_2)\\)).",
      "Trong mọi công thức thể tích, \\(B\\) (hoặc \\(S_{\\text{đáy}}\\)) là diện tích mặt đáy, còn \\(h\\) bắt buộc phải là CHIỀU CAO (tức khoảng cách vuông góc từ đỉnh hoặc mặt đáy trên xuống mặt phẳng chứa đáy dưới), tuyệt đối không phải độ dài cạnh bên xiên!",
      "Chú ý phân biệt hệ số \\(\\frac{1}{3}\\): Khối lăng trụ có \\(V = B \\cdot h\\) (không có \\(\\frac{1}{3}\\)); khối chóp có \\(V = \\frac{1}{3} B \\cdot h\\) (có hệ số \\(\\frac{1}{3}\\)). Đối với lăng trụ đứng và hình hộp chữ nhật, cạnh bên vuông góc với đáy nên độ dài cạnh bên chính là chiều cao \\(h\\)."
    ],
    formulas: [
      { name: "1. Thể tích khối hộp chữ nhật, khối lập phương & khối lăng trụ", eq: "• Khối hộp chữ nhật (3 kích thước \\(a, b, c\\)): \\(V = a \\cdot b \\cdot c\\)<br>• Khối lập phương cạnh \\(a\\): \\(V = a^3\\)<br>• Khối lăng trụ bất kì (diện tích đáy \\(B\\), chiều cao \\(h\\)): \\(V_{\\text{lăng trụ}} = B \\cdot h\\)", note: "Với lăng trụ xiên có cạnh bên \\(l\\) tạo với đáy góc \\(\\alpha\\), chiều cao là \\(h = l \\cdot \\sin\\alpha\\)." },
      { name: "2. Thể tích khối chóp & Khối chóp cụt", eq: "• Khối chóp (diện tích đáy \\(B\\), chiều cao \\(h\\)): \\(V_{\\text{chóp}} = \\frac{1}{3} B \\cdot h\\)<br>• Khối chóp cụt (diện tích 2 đáy \\(B_1, B_2\\), chiều cao \\(h\\)): \\(V_{\\text{chóp cụt}} = \\frac{h}{3}\\left(B_1 + B_2 + \\sqrt{B_1 B_2}\\right)\\)", note: "Từ \\(V = \\frac{1}{3}Bh \\implies h = d(S, (ABC)) = \\frac{3V_{S.ABC}}{S_{\\triangle ABC}}\\) (dùng thể tích để tính khoảng cách!)." },
      { name: "3. Tỉ số thể tích Simson (cho khối chóp tam giác S.ABC)", eq: "Lấy \\(A' \\in SA,\\; B' \\in SB,\\; C' \\in SC\\) thì:<br>\\(\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}\\)", note: "Chỉ áp dụng trực tiếp cho chóp TAM GIÁC; với chóp tứ giác phải chia đáy thành 2 tam giác trước." },
      { name: "4. Các công thức diện tích đáy B hay dùng nhất", eq: "• Tam giác đều cạnh \\(a\\): \\(S = \\frac{a^2\\sqrt{3}}{4}\\), đường cao \\(h_đ = \\frac{a\\sqrt{3}}{2}\\)<br>• Tam giác thường: \\(S = \\frac{1}{2}a h_a = \\frac{1}{2}ab\\sin C = \\sqrt{p(p-a)(p-b)(p-c)}\\)<br>• Hình vuông cạnh \\(a\\): \\(S = a^2\\) (đường chéo \\(a\\sqrt{2}\\)); Hình chữ nhật: \\(S = ab\\)<br>• Hình thoi: \\(S = \\frac{1}{2}d_1 d_2\\); Hình thang: \\(S = \\frac{(a+b)h}{2}\\)", note: "Thể tích tứ diện vuông \\(O.ABC\\) (với \\(OA, OB, OC\\) đôi một vuông góc): \\(V = \\frac{1}{6} OA \\cdot OB \\cdot OC\\)." }
    ],
    methods: [
      "Quy trình 3 bước tính thể tích khối chóp/lăng trụ: (1) Tính diện tích mặt đáy \\(B\\) dựa vào hình học phẳng; (2) Xác định chân đường cao \\(H\\) của đỉnh xuống đáy và tính chiều cao \\(h = SH\\) (dùng định lí Pythagore hoặc tỉ số lượng giác \\(h = \\text{cạnh chiếu} \\cdot \\tan\\alpha\\)); (3) Ráp vào công thức \\(V = \\frac{1}{3}Bh\\) (chóp) hoặc \\(V = Bh\\) (lăng trụ) và kiểm tra đơn vị lập phương.",
      "Cách xác định nhanh chân đường cao \\(H\\) của hình chóp: (1) Có cạnh bên \\(SA \\perp \\text{đáy} \\Rightarrow h = SA\\); (2) Hai mặt bên \\((SAB)\\) và \\((SAC)\\) cùng vuông góc với đáy \\(\\Rightarrow SA \\perp \\text{đáy}\\); (3) Mặt bên \\((SAB) \\perp \\text{đáy}\\) \\(\\Rightarrow\\) đường cao \\(SH\\) của \\(\\triangle SAB\\) vuông góc với đáy; (4) Hình chóp đều hoặc các cạnh bên bằng nhau \\(\\Rightarrow H\\) là tâm đường tròn ngoại tiếp đáy.",
      "Lỗi dễ mắc: Quên nhân \\(\\frac{1}{3}\\) khi tính thể tích khối chóp (hoặc nhân thừa \\(\\frac{1}{3}\\) cho khối lăng trụ); lấy nhầm độ dài cạnh bên xiên hoặc trung đoạn mặt bên làm chiều cao \\(h\\)."
    ],
    applications: [
      "Tính dung tích bể chứa nước, thể tích bê tông đúc trụ cầu, mái vòm, gầu xúc máy đào (dạng chóp cụt) và thể tích kim tự tháp.",
      "Ứng dụng công thức \\(h = \\frac{3V}{B}\\) để tính khoảng cách từ một điểm đến mặt phẳng mà không cần dựng hình chiếu phức tạp."
    ],
    diagramCaption: "So sánh trực quan Thể tích khối lăng trụ V = B·h, khối chóp V = (1/3)B·h và khối chóp cụt V = (h/3)(B_1 + B_2 + √(B_1·B_2))."
  },
  {
    num: 28,
    chapter: 8,
    vol: 2,
    title: "Biến cố hợp, biến cố giao, biến cố độc lập",
    subtitle: "Phép thử ngẫu nhiên, không gian mẫu Ω, biến cố đối, biến cố hợp A ∪ B, biến cố giao A ∩ B, biến cố xung khắc và biến cố độc lập.",
    concepts: [
      "Không gian mẫu \\(\\Omega\\) là tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên; mỗi biến cố \\(A\\) là một tập con của \\(\\Omega\\) (\\(A \\subset \\Omega\\)). Biến cố đối của \\(A\\) là \\(\\bar{A} = \\Omega \\setminus A\\) ('\\(A\\) không xảy ra'), luôn có \\(P(\\bar{A}) = 1 - P(A)\\).",
      "Biến cố hợp \\(A \\cup B\\) xảy ra khi và chỉ khi có ÍT NHẤT MỘT trong hai biến cố \\(A\\) hoặc \\(B\\) xảy ra (gắn với từ khóa 'hoặc', 'ít nhất một').",
      "Biến cố giao \\(A \\cap B\\) (còn viết gọn là \\(AB\\)) xảy ra khi và chỉ khi CẢ HAI biến cố \\(A\\) và \\(B\\) đồng thời xảy ra (gắn với từ khóa 'và', 'cả hai', 'đồng thời').",
      "Biến cố xung khắc vs Biến cố độc lập: (1) Hai biến cố \\(A\\) và \\(B\\) là XUNG KHẮC nếu chúng không bao giờ cùng xảy ra trong một phép thử (\\(A \\cap B = \\varnothing \\Rightarrow P(A \\cap B) = 0\\)); (2) Hai biến cố \\(A\\) và \\(B\\) là ĐỘC LẬP nếu việc xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng tới xác suất xảy ra của biến cố kia (điều kiện cần và đủ: \\(P(A \\cap B) = P(A)\\cdot P(B)\\))."
    ],
    formulas: [
      { name: "1. Xác suất cổ điển (khi các kết quả sơ cấp đồng khả năng)", eq: "\\(P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{|A|}{|\\Omega|}; \\qquad 0 \\le P(A) \\le 1; \\qquad P(\\bar{A}) = 1 - P(A)\\)", note: "\\(P(\\Omega) = 1\\) (biến cố chắc chắn); \\(P(\\varnothing) = 0\\) (biến cố không thể)." },
      { name: "2. Bảng từ khóa chuyển lời văn sang kí hiệu tập hợp biến cố", eq: "• 'Ít nhất một trong hai \\(A, B\\) xảy ra' \\(\\longrightarrow A \\cup B\\)<br>• 'Cả hai \\(A\\) và \\(B\\) cùng xảy ra' \\(\\longrightarrow A \\cap B = AB\\)<br>• 'Chỉ \\(A\\) xảy ra, \\(B\\) không xảy ra' \\(\\longrightarrow A\\bar{B} = A \\setminus B\\)<br>• 'Cả hai đều không xảy ra' \\(\\longrightarrow \\bar{A}\\bar{B} = \\overline{A \\cup B}\\)", note: "Theo luật De Morgan: \\(\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}\\) và \\(\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}\\)." },
      { name: "3. Phân biệt Xung khắc và Độc lập (với P(A) > 0, P(B) > 0)", eq: "• \\(A, B\\) xung khắc \\(\\iff A \\cap B = \\varnothing \\implies P(A \\cap B) = 0\\)<br>• \\(A, B\\) độc lập \\(\\iff P(A \\cap B) = P(A) \\cdot P(B)\\)", note: "Nếu \\(P(A) > 0\\) và \\(P(B) > 0\\): hai biến cố xung khắc thì KHÔNG ĐỘC LẬP; hai biến cố độc lập thì KHÔNG XUNG KHẮC!" }
    ],
    methods: [
      "Khi gặp bài toán biểu diễn biến cố phức tạp (như 'có đúng 1 trong 2 người bắn trúng' hoặc 'ít nhất 1 động cơ hoạt động'): Phân tích thành các biến cố sơ cấp \\(A, B, \\bar{A}, \\bar{B}\\). Ví dụ: 'Có đúng 1 biến cố xảy ra' là \\(C = A\\bar{B} \\cup \\bar{A}B\\) (hai biến cố \\(A\\bar{B}\\) và \\(\\bar{A}B\\) xung khắc nhau).",
      "Nếu \\(A\\) và \\(B\\) độc lập thì các cặp \\((A, \\bar{B})\\), \\((\\bar{A}, B)\\) và \\((\\bar{A}, \\bar{B})\\) cũng độc lập với nhau.",
      "Lỗi dễ mắc: Nhầm lẫn hai khái niệm 'xung khắc' và 'độc lập' là giống nhau (thực chất chúng hoàn toàn trái ngược nhau khi \\(P(A), P(B) > 0\\)!)."
    ],
    applications: [
      "Phân tích độ tin cậy của hệ thống kĩ thuật mắc nối tiếp (cần cả hai \\(A \\cap B\\)) và mắc song song dự phòng (cần ít nhất một \\(A \\cup B\\)).",
      "Xét nghiệm sàng lọc y tế và phân tích di truyền các tính trạng phân li độc lập."
    ],
    diagramCaption: "Biểu đồ Venn minh họa trực quan các vùng biến cố: Hợp A ∪ B, Giao A ∩ B, Biến cố đối Ā, Chỉ A xảy ra (A\\B) và Hai biến cố xung khắc."
  },
  {
    num: 29,
    chapter: 8,
    vol: 2,
    title: "Công thức cộng xác suất",
    subtitle: "Công thức cộng xác suất cho hai biến cố xung khắc và hai biến cố bất kì, mở rộng cho ba biến cố và phương pháp phần bù.",
    concepts: [
      "Quy tắc cộng cho hai biến cố xung khắc: Nếu \\(A\\) và \\(B\\) là hai biến cố xung khắc (\\(A \\cap B = \\varnothing\\)) thì xác suất để \\(A\\) hoặc \\(B\\) xảy ra bằng tổng xác suất của chúng: \\(P(A \\cup B) = P(A) + P(B)\\).",
      "Quy tắc cộng tổng quát cho hai biến cố bất kì: Với hai biến cố \\(A, B\\) bất kì, \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\). Phải trừ đi \\(P(A \\cap B)\\) vì phần giao \\(A \\cap B\\) đã được tính lặp hai lần trong \\(P(A)\\) và \\(P(B)\\).",
      "Chiến lược tính qua biến cố đối: Biến cố \\(E =\\) 'Có ít nhất một biến cố xảy ra' có biến cố đối là \\(\\bar{E} =\\) 'Không có biến cố nào xảy ra', do đó \\(P(E) = 1 - P(\\bar{E})\\)."
    ],
    formulas: [
      { name: "1. Công thức cộng cho hai biến cố xung khắc (A ∩ B = ∅)", eq: "\\(P(A \\cup B) = P(A) + P(B)\\)<br>Mở rộng cho \\(k\\) biến cố đôi một xung khắc: \\(P(A_1 \\cup A_2 \\cup \\dots \\cup A_k) = \\sum_{i=1}^k P(A_i)\\)", note: "Hệ quả: \\(P(A) = P(A\\cap B) + P(A\\cap\\bar{B})\\) vì \\(A\\cap B\\) và \\(A\\cap\\bar{B}\\) xung khắc." },
      { name: "2. Công thức cộng tổng quát cho hai biến cố bất kì", eq: "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)<br>Suy ra: \\(P(A \\cap B) = P(A) + P(B) - P(A \\cup B)\\)", note: "Nếu \\(P(A) + P(B) > 1\\) thì hai biến cố \\(A, B\\) chắc chắn KHÔNG thể xung khắc (vì \\(P(A\\cup B) \\le 1\\))." },
      { name: "3. Công thức cộng mở rộng cho ba biến cố A, B, C", eq: "\\(P(A\\cup B\\cup C) = P(A)+P(B)+P(C) - P(AB)-P(BC)-P(CA) + P(ABC)\\)", note: "Nguyên lí bù trừ: Cộng đơn – Trừ đôi – Cộng ba." },
      { name: "4. Công thức tính xác suất 'Chỉ A xảy ra' và 'Cả hai không xảy ra'", eq: "\\(P(A\\bar{B}) = P(A) - P(A \\cap B); \\qquad P(\\bar{A}\\bar{B}) = 1 - P(A \\cup B)\\)", note: "Dễ dàng kiểm tra ngay trên sơ đồ Venn." }
    ],
    methods: [
      "Quy trình 3 bước áp dụng công thức cộng: (1) Gọi tên rõ biến cố \\(A, B\\) và xác định biến cố cần tính là \\(A \\cup B\\) (hoặc \\(A \\cap B\\)); (2) Kiểm tra xem \\(A\\) và \\(B\\) có xung khắc không: nếu không có phần tử chung thì cộng trực tiếp \\(P(A) + P(B)\\); nếu có phần chung (ví dụ số vừa chia hết cho 2 vừa chia hết cho 3 là chia hết cho 6) thì bắt buộc phải tính \\(P(A \\cap B)\\) và trừ đi; (3) Kiểm tra kết quả nằm trong đoạn \\([0; 1]\\).",
      "Mẹo vẽ sơ đồ Venn điền số lượng phần tử hoặc xác suất: Điền vùng giao \\(A \\cap B\\) ở giữa trước, sau đó lấy tổng của \\(A\\) trừ đi phần giao để ra vùng \\(A \\setminus B\\).",
      "Lỗi dễ mắc: Dùng \\(P(A \\cup B) = P(A) + P(B)\\) cho hai biến cố không xung khắc dẫn đến xác suất lớn hơn 1 hoặc kết quả sai!"
    ],
    applications: [
      "Thống kê thị trường, khảo sát tỉ lệ học sinh thích môn Toán, môn Lí hoặc cả hai môn; tỉ lệ khách hàng mua sản phẩm A hoặc B.",
      "Tính xác suất rút được thẻ mang số chia hết cho \\(a\\) hoặc chia hết cho \\(b\\)."
    ],
    diagramCaption: "Minh họa nguyên lí bù trừ P(A ∪ B) = P(A) + P(B) - P(A ∩ B): trừ đi phần giao bị tô chồng hai lần."
  },
  {
    num: 30,
    chapter: 8,
    vol: 2,
    title: "Công thức nhân xác suất cho hai biến cố độc lập",
    subtitle: "Quy tắc nhân xác suất P(A ∩ B) = P(A)P(B), kết hợp quy tắc cộng – nhân và phương pháp sơ đồ hình cây.",
    concepts: [
      "Công thức nhân xác suất: Nếu hai biến cố \\(A\\) và \\(B\\) độc lập với nhau thì xác suất để cả hai biến cố cùng xảy ra bằng tích xác suất của chúng: \\(P(A \\cap B) = P(A) \\cdot P(B)\\). Mở rộng cho \\(n\\) biến cố độc lập: \\(P(A_1 A_2 \\dots A_n) = P(A_1)P(A_2)\\dots P(A_n)\\).",
      "Nhận diện phép thử độc lập trong thực tế: Các phép thử lặp lại có hoàn lại (lấy bi ra xem màu rồi bỏ lại vào hộp trước khi lấy tiếp), gieo xúc xắc/đồng xu nhiều lần, các xạ thủ bắn độc lập vào bia, các bóng đèn/động cơ hoạt động độc lập.",
      "Chú ý: Nếu lấy nhiều lần KHÔNG HOÀN LẠI thì các lần lấy phụ thuộc nhau, không được tự ý nhân các xác suất biên nếu chưa xét điều kiện của bước trước.",
      "Sơ đồ hình cây (Probability Tree): Biểu diễn các phép thử nối tiếp theo từng tầng nhánh; xác suất của một nhánh kết quả cuối cùng bằng TÍCH các xác suất dọc theo đường đi trên nhánh đó; xác suất của biến cố gồm nhiều nhánh rời nhau bằng TỔNG xác suất của các nhánh đó."
    ],
    formulas: [
      { name: "1. Công thức nhân cho hai biến cố độc lập A và B", eq: "\\(A, B\\text{ độc lập } \\iff P(AB) = P(A) \\cdot P(B)\\)<br>Hệ quả: \\(P(A\\bar{B}) = P(A)P(\\bar{B}); \\quad P(\\bar{A}B) = P(\\bar{A})P(B); \\quad P(\\bar{A}\\bar{B}) = P(\\bar{A})P(\\bar{B})\\)", note: "Trong đó \\(P(\\bar{A}) = 1 - P(A)\\) và \\(P(\\bar{B}) = 1 - P(B)\\)." },
      { name: "2. Kết hợp Công thức cộng và Công thức nhân khi A, B độc lập", eq: "\\(P(A \\cup B) = P(A) + P(B) - P(A)P(B) = 1 - P(\\bar{A})P(\\bar{B})\\)", note: "Hai cách tính xác suất 'Có ít nhất một trong hai biến cố độc lập \\(A, B\\) xảy ra' cho cùng một kết quả." },
      { name: "3. Xác suất 'Có ít nhất 1 lần thành công' trong n phép thử độc lập", eq: "\\(P(\\text{ít nhất 1 thành công}) = 1 - P(\\bar{A}_1)P(\\bar{A}_2)\\dots P(\\bar{A}_n)\\)", note: "Nếu mỗi lần có cùng xác suất thất bại \\(q = 1 - p\\) thì \\(P = 1 - q^n\\)." },
      { name: "4. Xác suất 'Có đúng 1 trong 2 biến cố độc lập A, B xảy ra'", eq: "\\(P(A\\bar{B} \\cup \\bar{A}B) = P(A)P(\\bar{B}) + P(\\bar{A})P(B)\\)", note: "Vì \\(A\\bar{B}\\) và \\(\\bar{A}B\\) xung khắc nên dùng công thức cộng, còn bên trong mỗi tích dùng công thức nhân." }
    ],
    methods: [
      "Quy tắc phối hợp Cộng – Nhân: Phân tích biến cố cần tính thành HỢP của các trường hợp đôi một xung khắc (dùng phép CỘNG \\(+\\)), trong mỗi trường hợp gồm các bước/điều kiện độc lập xảy ra đồng thời (dùng phép NHÂN \\(\\times\\)).",
      "Cách vẽ và tính trên Sơ đồ hình cây: Tại mỗi nút phân nhánh, tổng xác suất các nhánh con đi ra từ cùng một nút luôn bằng \\(1\\). Nhân dọc theo nhánh từ gốc đến ngọn, sau đó cộng các ngọn thỏa mãn yêu cầu đề bài.",
      "Lỗi dễ mắc: Khi \\(A, B\\) độc lập, tính \\(P(A \\cup B)\\) bằng \\(P(A) + P(B)\\) mà quên trừ đi tích \\(P(A)P(B)\\)!"
    ],
    applications: [
      "Tính xác suất trúng đích của hệ thống phòng không nhiều tên lửa bắn độc lập, độ an toàn của hệ thống phanh kép trên ô tô và xác suất di truyền gen Mendel.",
      "Tính xác suất vượt qua kì thi trắc nghiệm hoặc xác suất hệ thống máy chủ hoạt động liên tục không gián đoạn."
    ],
    diagramCaption: "Sơ đồ hình cây (Tree Diagram) cho hai phép thử độc lập: quy tắc Nhân dọc theo nhánh và Cộng các nhánh xung khắc."
  },
  {
    num: 31,
    chapter: 9,
    vol: 2,
    title: "Định nghĩa và ý nghĩa của đạo hàm",
    subtitle: "Định nghĩa đạo hàm tại một điểm từ giới hạn thương sai phân, ý nghĩa hình học (tiếp tuyến) và ý nghĩa vật lí (vận tốc tức thời).",
    concepts: [
      "Định nghĩa đạo hàm tại một điểm: Cho hàm số \\(y = f(x)\\) xác định trên khoảng \\((a; b)\\) và \\(x_0 \\in (a; b)\\). Nếu tồn tại giới hạn hữu hạn \\(\\lim_{x\\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\) thì giới hạn đó được gọi là đạo hàm của hàm số \\(y = f(x)\\) tại điểm \\(x_0\\), kí hiệu là \\(f'(x_0)\\) hoặc \\(y'(x_0)\\). Đặt \\(\\Delta x = x - x_0\\) (số gia của đối số) và \\(\\Delta y = f(x_0 + \\Delta x) - f(x_0)\\) (số gia của hàm số), ta có \\(f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}\\).",
      "Quan hệ giữa tính có đạo hàm và tính liên tục: Nếu hàm số \\(y = f(x)\\) có đạo hàm tại \\(x_0\\) thì nó LIÊN TỤC tại \\(x_0\\). Chiều ngược lại không đúng: một hàm số liên tục tại \\(x_0\\) có thể không có đạo hàm tại \\(x_0\\) (ví dụ \\(y = |x|\\) liên tục tại \\(x = 0\\) nhưng đồ thị bị gãy khúc tạo góc nhọn nên không có đạo hàm tại \\(0\\)).",
      "Ý nghĩa hình học của đạo hàm: Đạo hàm \\(f'(x_0)\\) là hệ số góc \\(k\\) của tiếp tuyến với đồ thị \\((C): y = f(x)\\) tại tiếp điểm \\(M_0(x_0; f(x_0))\\).",
      "Ý nghĩa vật lí của đạo hàm: Nếu chất điểm chuyển động theo phương trình quãng đường \\(s = s(t)\\) thì vận tốc tức thời tại thời điểm \\(t_0\\) là \\(v(t_0) = s'(t_0)\\). Nếu điện lượng truyền qua dây dẫn là \\(q = q(t)\\) thì cường độ dòng điện tức thời là \\(I(t_0) = q'(t_0)\\)."
    ],
    formulas: [
      { name: "1. Định nghĩa đạo hàm tại điểm x_0", eq: "\\(f'(x_0) = \\lim_{x\\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}\\)", note: "Tỉ số \\(\\frac{\\Delta y}{\\Delta x}\\) là tốc độ biến thiên trung bình; \\(f'(x_0)\\) là tốc độ biến thiên tức thời." },
      { name: "2. Hệ số góc và Phương trình tiếp tuyến tại tiếp điểm M(x_0; y_0)", eq: "Hệ số góc: \\(k = f'(x_0) = \\tan\\alpha\\)<br>Phương trình tiếp tuyến: \\(y - y_0 = f'(x_0)(x - x_0) \\iff y = f'(x_0)(x - x_0) + f(x_0)\\)", note: "Trong đó \\(y_0 = f(x_0)\\) là tung độ tiếp điểm." },
      { name: "3. Vận tốc tức thời và Cường độ dòng điện tức thời", eq: "\\(v(t_0) = s'(t_0); \\qquad I(t_0) = q'(t_0)\\)", note: "Khi vật dừng lại thì vận tốc tức thời bằng 0: \\(v(t) = s'(t) = 0\\)." }
    ],
    methods: [
      "Quy trình 3 bước tính đạo hàm tại \\(x_0\\) bằng định nghĩa: (1) Tính \\(\\Delta y = f(x_0 + \\Delta x) - f(x_0)\\) và rút gọn theo \\(\\Delta x\\); (2) Lập tỉ số \\(\\frac{\\Delta y}{\\Delta x}\\) và giản ước \\(\\Delta x\\); (3) Tính giới hạn \\(\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}\\).",
      "Ba dạng bài viết phương trình tiếp tuyến của đồ thị \\((C): y = f(x)\\):<br>• Dạng 1 (Biết tiếp điểm \\(M(x_0; y_0)\\)): Tính \\(f'(x_0)\\) rồi thay vào \\(y = f'(x_0)(x - x_0) + y_0\\).<br>• Dạng 2 (Biết hoành độ \\(x_0\\) hoặc tung độ \\(y_0\\)): Tìm \\(x_0, y_0\\) rồi quay về Dạng 1.<br>• Dạng 3 (Biết hệ số góc \\(k\\)): Giải phương trình \\(f'(x_0) = k\\) để tìm \\(x_0\\). Lưu ý: Tiếp tuyến song song với \\(d: y = ax + b \\Rightarrow k = a\\) (nhớ kiểm tra không trùng \\(d\\)); tiếp tuyến vuông góc với \\(d: y = ax + b \\;(a \\ne 0) \\Rightarrow k = -\\frac{1}{a}\\).",
      "Lỗi dễ mắc: Nhầm \\(f'(x)\\) (còn chứa biến \\(x\\)) làm hệ số góc tiếp tuyến thay vì phải thay số \\(x_0\\) vào \\(f'(x_0)\\)!"
    ],
    applications: [
      "Xác định phương tiếp tuyến của quỹ đạo chuyển động và hướng văng của tia lửa khi mài kim loại trên đá mài tròn.",
      "Tính tốc độ tức thời hiển thị trên đồng hồ công-tơ-mét ô tô và tốc độ phản ứng hóa học tức thời."
    ],
    diagramCaption: "Cát tuyến M_0M tiến dần tới vị trí giới hạn là Tiếp tuyến M_0T khi x → x_0, với hệ số góc k = tan α = f'(x_0)."
  },
  {
    num: 32,
    chapter: 9,
    vol: 2,
    title: "Các quy tắc tính đạo hàm",
    subtitle: "Bảng đạo hàm các hàm số sơ cấp cơ bản, quy tắc đạo hàm của tổng – hiệu – tích – thương và quy tắc đạo hàm của hàm hợp.",
    concepts: [
      "Thay vì tính giới hạn thương sai phân mỗi lần, ta sử dụng bảng đạo hàm của các hàm số sơ cấp cơ bản (lũy thừa, căn thức, lượng giác, mũ, lôgarit) kết hợp với các quy tắc đạo hàm của tổng, hiệu, tích, thương.",
      "Quy tắc đạo hàm của hàm hợp: Nếu hàm số \\(u = g(x)\\) có đạo hàm tại \\(x\\) là \\(u'_x\\) và hàm số \\(y = f(u)\\) có đạo hàm tại \\(u\\) là \\(y'_u\\) thì hàm hợp \\(y = f(g(x))\\) có đạo hàm tại \\(x\\) là \\(y'_x = y'_u \\cdot u'_x = f'(u) \\cdot u'(x)\\).",
      "Mọi công thức đạo hàm của hàm hợp \\(f(u)\\) đều giống hệt công thức của \\(f(x)\\) nhưng BẮT BUỘC NHÂN THÊM \\(u'\\) ở cuối!"
    ],
    formulas: [
      { name: "1. Quy tắc đạo hàm của tổng, hiệu, tích, thương (u = u(x), v = v(x))", eq: "• \\((u \\pm v)' = u' \\pm v'\\); \\qquad • \\((k \\cdot u)' = k \\cdot u'\\; (k \\text{ là hằng số})\\)<br>• \\((u \\cdot v)' = u'v + uv'\\); \\qquad • \\((u v w)' = u'vw + uv'w + uvw'\\)<br>• \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\; (v \\ne 0)\\); \\qquad • \\(\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^2}\\)", note: "Mẹo tính nhanh đạo hàm hàm bậc nhất trên bậc nhất: \\(\\left(\\frac{ax+b}{cx+d}\\right)' = \\frac{ad - bc}{(cx+d)^2}\\)." },
      { name: "2. Đạo hàm hàm lũy thừa và căn thức (đối chiếu x và hàm hợp u)", eq: "• \\((c)' = 0\\); \\quad \\((x)' = 1\\); \\quad \\((x^\\alpha)' = \\alpha x^{\\alpha-1} \\; \\longrightarrow \\; (u^\\alpha)' = \\alpha u^{\\alpha-1} \\cdot u'\\)<br>• \\((\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}\\; (x > 0) \\; \\longrightarrow \\; (\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}\\; (u > 0)\\)", note: "Hệ quả: \\(\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}\\)." },
      { name: "3. Đạo hàm các hàm số lượng giác (góc tính bằng radian)", eq: "• \\((\\sin x)' = \\cos x \\; \\longrightarrow \\; (\\sin u)' = u' \\cdot \\cos u\\)<br>• \\((\\cos x)' = -\\sin x \\; \\longrightarrow \\; (\\cos u)' = -u' \\cdot \\sin u\\)<br>• \\((\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x \\; \\longrightarrow \\; (\\tan u)' = \\frac{u'}{\\cos^2 u}\\)<br>• \\((\\cot x)' = -\\frac{1}{\\sin^2 x} = -(1 + \\cot^2 x) \\; \\longrightarrow \\; (\\cot u)' = -\\frac{u'}{\\sin^2 u}\\)", note: "Mẹo nhớ dấu: Đạo hàm của các hàm bắt đầu bằng chữ 'c' (\\(\\cos, \\cot\\)) luôn có dấu trừ (\\(-\\))!" },
      { name: "4. Đạo hàm hàm số mũ và hàm số lôgarit", eq: "• \\((e^x)' = e^x \\; \\longrightarrow \\; (e^u)' = u' \\cdot e^u\\)<br>• \\((a^x)' = a^x \\ln a \\; \\longrightarrow \\; (a^u)' = u' \\cdot a^u \\ln a\\; (0 < a \\ne 1)\\)<br>• \\((\\ln x)' = \\frac{1}{x} \\; \\longrightarrow \\; (\\ln u)' = \\frac{u'}{u}\\; (u > 0)\\)<br>• \\((\\log_a x)' = \\frac{1}{x \\ln a} \\; \\longrightarrow \\; (\\log_a u)' = \\frac{u'}{u \\ln a}\\; (u > 0, 0 < a \\ne 1)\\)", note: "Chú ý: \\((a^x)'\\) là nhân \\(\\ln a\\), còn \\((\\log_a x)'\\) là chia cho \\(\\ln a\\) ở dưới mẫu." }
    ],
    methods: [
      "Quy tắc bóc vỏ từ ngoài vào trong khi tính đạo hàm hàm hợp phức tạp (ví dụ \\(y = \\sin^3(2x + 1)\\)): (1) Lớp ngoài cùng là lũy thừa \\(u^3 \\to 3\\sin^2(2x+1)\\); (2) Nhân đạo hàm lớp giữa \\(\\sin(2x+1) \\to \\cos(2x+1)\\); (3) Nhân đạo hàm lớp trong cùng \\((2x+1)' = 2\\). Kết quả: \\(y' = 6\\sin^2(2x+1)\\cos(2x+1) = 3\\sin(4x+2)\\sin(2x+1)\\).",
      "Với biểu thức lôgarit có tích/thương/lũy thừa (như \\(y = \\ln\\frac{x+1}{x-2}\\)), hãy tách thành \\(\\ln(x+1) - \\ln(x-2)\\) trước khi lấy đạo hàm để tránh phải dùng quy tắc thương phức tạp.",
      "Lỗi dễ mắc: Quên nhân \\(u'\\) khi đạo hàm hàm hợp (ví dụ viết \\((e^{2x})' = e^{2x}\\) thay vì \\(2e^{2x}\\)); nhầm \\((uv)' = u'v'\\); quên dấu trừ ở \\((\\cos x)' = -\\sin x\\)."
    ],
    applications: [
      "Tìm cực trị, khảo sát tốc độ tăng/giảm của doanh thu, chi phí biên trong kinh tế học (Marginal Cost \\(MC = C'(q)\\)).",
      "Tính tốc độ phân rã phóng xạ tức thời \\(N'(t) = -\\lambda N_0 e^{-\\lambda t}\\) và suất điện động cảm ứng \\(e = -\\Phi'(t)\\)."
    ],
    diagramCaption: "Sơ đồ dây chuyền đạo hàm hàm hợp y = f(u(x)) ⇒ y'_x = f'(u)·u'(x) và bảng đối chiếu nhanh đạo hàm cơ bản – hàm hợp."
  },
  {
    num: 33,
    chapter: 9,
    vol: 2,
    title: "Đạo hàm cấp hai",
    subtitle: "Định nghĩa đạo hàm cấp hai f''(x), cách tính và ý nghĩa cơ học (gia tốc tức thời a(t) = v'(t) = s''(t)).",
    concepts: [
      "Định nghĩa: Cho hàm số \\(y = f(x)\\) có đạo hàm \\(y' = f'(x)\\) tại mọi điểm \\(x \\in (a; b)\\). Nếu hàm số \\(f'(x)\\) lại có đạo hàm tại \\(x\\) thì ta gọi đạo hàm của \\(f'(x)\\) là đạo hàm cấp hai của hàm số \\(y = f(x)\\) tại \\(x\\), kí hiệu là \\(f''(x)\\) hoặc \\(y''\\).",
      "Công thức định nghĩa: \\(f''(x) = [f'(x)]'\\). Chú ý phân biệt kí hiệu: \\(f''(x)\\) là đạo hàm của \\(f'(x)\\), hoàn toàn khác với bình phương đạo hàm cấp một \\([f'(x)]^2\\)!",
      "Ý nghĩa cơ học của đạo hàm cấp hai: Một chất điểm chuyển động theo phương trình \\(s = s(t)\\) có vận tốc tức thời là \\(v(t) = s'(t)\\). Đạo hàm cấp hai \\(s''(t) = v'(t)\\) chính là GIA TỐC TỨC THỜI \\(a(t)\\) của chuyển động tại thời điểm \\(t\\) (đặc trưng cho tốc độ biến thiên của vận tốc, đơn vị \\(\\text{m/s}^2\\))."
    ],
    formulas: [
      { name: "1. Định nghĩa đạo hàm cấp hai", eq: "\\(f''(x) = \\big(f'(x)\\big)'; \\qquad y'' = (y')'\\)", note: "Để tính \\(f''(x_0)\\), ta phải tìm hàm \\(f'(x)\\) rồi đạo hàm tiếp ra \\(f''(x)\\), sau đó mới thay số \\(x = x_0\\) ở bước cuối cùng!" },
      { name: "2. Một số công thức đạo hàm cấp hai thường gặp", eq: "• \\((x^n)'' = n(n - 1)x^{n-2}\\); \\qquad • \\((e^{kx})'' = k^2 e^{kx}\\)<br>• \\((\\sin(\\omega x + \\varphi))'' = -\\omega^2 \\sin(\\omega x + \\varphi)\\)<br>• \\((\\cos(\\omega x + \\varphi))'' = -\\omega^2 \\cos(\\omega x + \\varphi)\\)", note: "Với dao động điều hòa \\(x(t) = A\\cos(\\omega t + \\varphi)\\), ta chứng minh được ngay \\(a(t) = x''(t) = -\\omega^2 x(t)\\) (liên hệ trực tiếp với Vật lí 11 Bài 3!)." },
      { name: "3. Chuỗi đạo hàm cơ học: Quãng đường → Vận tốc → Gia tốc", eq: "\\(s(t) \\xrightarrow{\\text{đạo hàm lần 1}} v(t) = s'(t) \\xrightarrow{\\text{đạo hàm lần 2}} a(t) = v'(t) = s''(t)\\)", note: "Theo định luật II Newton, lực hợp lực tác dụng lên vật có khối lượng \\(m\\) là \\(F(t) = m \\cdot a(t) = m \\cdot s''(t)\\)." }
    ],
    methods: [
      "Quy trình tính \\(y''\\) và chứng minh hệ thức đạo hàm (ví dụ chứng minh \\(y'' + 4y = 0\\)): (1) Tính \\(y'\\) và rút gọn tối đa biểu thức \\(y'\\) trước khi đạo hàm lần thứ hai; (2) Tính \\(y'' = (y')'\\); (3) Thay \\(y, y', y''\\) vào vế trái của đẳng thức để rút gọn về vế phải.",
      "Trong bài toán chuyển động \\(s(t)\\): Nếu đề hỏi 'gia tốc của vật tại thời điểm vận tốc bằng 0', ta giải phương trình \\(v(t) = s'(t) = 0\\) để tìm thời điểm \\(t_0\\), sau đó thay \\(t_0\\) vào \\(a(t_0) = s''(t_0)\\).",
      "Lỗi dễ mắc: Thay số \\(x_0\\) vào \\(f'(x_0)\\) ra một hằng số rồi lấy đạo hàm của hằng số đó bằng \\(0\\) (sai hoàn toàn vì phải đạo hàm theo biến \\(x\\) ra \\(f''(x)\\) trước rồi mới thay \\(x_0\\)!)."
    ],
    applications: [
      "Chứng minh phương trình động lực học của dao động điều hòa \\(x'' + \\omega^2 x = 0\\) trong Vật lí 11.",
      "Tính gia tốc hãm phanh của xe ô tô, tàu cao tốc và đánh giá độ lồi/lõm, điểm uốn của đường cong thiết kế cầu đường."
    ],
    diagramCaption: "Mối liên hệ chuỗi đạo hàm s(t) → v(t) = s'(t) → a(t) = s''(t) trong chuyển động cơ học và dao động điều hòa."
  }
];

const formulaSummaryTable = [
  { topic: "1. Hệ thức lượng giác cơ bản (Bài 1)", formula: "\\(\\sin^2\\alpha+\\cos^2\\alpha=1; \\quad 1+\\tan^2\\alpha=\\frac{1}{\\cos^2\\alpha}; \\quad 1+\\cot^2\\alpha=\\frac{1}{\\sin^2\\alpha}; \\quad \\tan\\alpha\\cot\\alpha=1\\)" },
  { topic: "2. Công thức cộng & Nhân đôi (Bài 2)", formula: "\\(\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b; \\quad \\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b; \\quad \\sin 2a=2\\sin a\\cos a; \\quad \\cos 2a=2\\cos^2a-1=1-2\\sin^2a\\)" },
  { topic: "3. Hạ bậc & Tổng thành tích (Bài 2)", formula: "\\(\\sin^2a=\\frac{1-\\cos 2a}{2}; \\quad \\cos^2a=\\frac{1+\\cos 2a}{2}; \\quad \\cos a+\\cos b=2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}; \\quad \\sin a+\\sin b=2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}\\)" },
  { topic: "4. Phương trình lượng giác cơ bản (Bài 4)", formula: "\\(\\sin u=\\sin v \\iff u=v+k2\\pi \\text{ hoặc } u=\\pi-v+k2\\pi; \\quad \\cos u=\\cos v \\iff u=\\pm v+k2\\pi; \\quad \\tan u=\\tan v \\iff u=v+k\\pi\\)" },
  { topic: "5. Cấp số cộng (CSC - Bài 6)", formula: "\\(u_{n+1}=u_n+d; \\quad u_n=u_1+(n-1)d; \\quad u_k=\\frac{u_{k-1}+u_{k+1}}{2}; \\quad S_n=\\frac{n(u_1+u_n)}{2}=\\frac{n[2u_1+(n-1)d]}{2}\\)" },
  { topic: "6. Cấp số nhân (CSN - Bài 7)", formula: "\\(u_{n+1}=u_n\\cdot q; \\quad u_n=u_1\\cdot q^{n-1}; \\quad u_k^2=u_{k-1}u_{k+1}; \\quad S_n=\\frac{u_1(1-q^n)}{1-q}\\;(q\\ne 1); \\quad S_{\\infty}=\\frac{u_1}{1-q}\\;(|q|<1)\\)" },
  { topic: "7. Số đặc trưng mẫu ghép nhóm (Bài 8–9)", formula: "\\(c_i=\\frac{a_i+a_{i+1}}{2}; \\quad \\bar{x}=\\frac{1}{n}\\sum n_ic_i; \\quad M_e=L+\\frac{\\frac{n}{2}-F}{f}h; \\quad M_o=L+\\frac{d_1}{d_1+d_2}h\\)" },
  { topic: "8. Quan hệ song song không gian (Bài 10–14)", formula: "\\(d\\not\\subset(P),\\; d\\parallel a\\subset(P) \\Rightarrow d\\parallel(P); \\quad a\\cap b=I\\subset(P),\\; a,b\\parallel(Q)\\Rightarrow (P)\\parallel(Q); \\quad \\text{Thales: } \\frac{AB}{A'B'}=\\frac{BC}{B'C'}\\)" },
  { topic: "9. Giới hạn & Hàm số liên tục (Bài 15–17)", formula: "\\(\\lim\\frac{1}{n^k}=0; \\quad \\lim_{|q|<1}q^n=0; \\quad \\lim_{x\\to 0}\\frac{\\sin x}{x}=1; \\quad \\text{Liên tục tại } x_0 \\iff \\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=f(x_0)\\)" },
  { topic: "10. Lũy thừa & Lôgarit (Bài 18–19)", formula: "\\(a^{\\frac{m}{n}}=\\sqrt[n]{a^m}; \\quad \\log_a(MN)=\\log_aM+\\log_aN; \\quad \\log_a\\frac{M}{N}=\\log_aM-\\log_aN; \\quad \\log_a(M^\\alpha)=\\alpha\\log_aM; \\quad \\log_ab=\\frac{\\ln b}{\\ln a}\\)" },
  { topic: "11. PT & BPT Mũ – Lôgarit (Bài 20–21)", formula: "\\(a>1\\): giữ nguyên chiều BPT; \\(0<a<1\\): ĐẢO CHIỀU BPT; \\quad \\(\\log_af(x)>\\log_ag(x)\\;(0<a<1) \\iff 0<f(x)<g(x)\\)" },
  { topic: "12. Quan hệ vuông góc & Góc (Bài 22–25)", formula: "\\(d\\perp a,\\; d\\perp b\\;(a\\cap b\\subset(P)) \\Rightarrow d\\perp(P); \\quad (AB,(P))=\\widehat{ABH}; \\quad ((P),(Q))=(a,b)\\; (a,b\\perp \\text{giao tuyến})\\)" },
  { topic: "13. Khoảng cách & Thể tích (Bài 26–27)", formula: "\\(\\frac{1}{AH^2}=\\frac{1}{SA^2}+\\frac{1}{AE^2}; \\quad V_{\\text{lăng trụ}}=Bh; \\quad V_{\\text{chóp}}=\\frac{1}{3}Bh; \\quad V_{\\text{chóp cụt}}=\\frac{h}{3}(B_1+B_2+\\sqrt{B_1B_2})\\)" },
  { topic: "14. Quy tắc Cộng & Nhân xác suất (Bài 28–30)", formula: "\\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B); \\quad A,B \\text{ xung khắc } \\Rightarrow P(AB)=0; \\quad A,B \\text{ độc lập } \\iff P(AB)=P(A)P(B)\\)" },
  { topic: "15. Đạo hàm, Tiếp tuyến & Cấp hai (Bài 31–33)", formula: "\\(y=f'(x_0)(x-x_0)+f(x_0); \\quad (uv)'=u'v+uv'; \\quad \\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}; \\quad [f(u)]'=f'(u)u'; \\quad v(t)=s'(t),\\; a(t)=s''(t)\\)" }
];

const commonPitfalls = [
  {
    icon: "fa-triangle-exclamation",
    title: "1. Bỏ sót điều kiện xác định & Đảo chiều bất phương trình Mũ – Lôgarit",
    desc: "Khi giải phương trình/bất phương trình lôgarit, bắt buộc đặt điều kiện cho mọi đối số dương (> 0) trước khi gộp log. Với cơ số 0 < a < 1, khi bỏ mũ hoặc bỏ log bắt buộc phải đảo chiều bất đẳng thức và chặn dưới (> 0)."
  },
  {
    icon: "fa-cube",
    title: "2. Ngộ nhận trực quan trong Hình học không gian & Nhầm chiều cao h",
    desc: "Không được suy ra song song hay vuông góc chỉ từ dáng hình vẽ phẳng. Khi tính thể tích V = (1/3)Bh hoặc V = Bh, chiều cao h phải là khoảng cách vuông góc từ đỉnh xuống mặt phẳng đáy, tuyệt đối không lấy cạnh bên xiên làm chiều cao."
  },
  {
    icon: "fa-dice",
    title: "3. Nhầm lẫn giữa Biến cố Xung khắc và Biến cố Độc lập",
    desc: "Xung khắc nghĩa là không cùng xảy ra (P(AB) = 0, dùng công thức cộng P(A∪B) = P(A) + P(B)); Độc lập nghĩa là không ảnh hưởng xác suất của nhau (P(AB) = P(A)P(B)). Lấy không hoàn lại tạo ra các biến cố phụ thuộc, không được nhân trực tiếp xác suất không điều kiện."
  },
  {
    icon: "fa-chart-line",
    title: "4. Quên nhân u'(x) ở Đạo hàm hàm hợp & Đưa x ra khỏi căn khi x → -∞",
    desc: "Khi tính đạo hàm hàm hợp f(u(x)) luôn phải nhân thêm u'(x), và chú ý dấu âm của (cos u)' = -u'sin u, (cot u)' = -u'/sin²u. Khi tính giới hạn tại x → -∞, nhớ rằng √(x²) = |x| = -x."
  }
];

const allLessons = [...lessonsP1, ...lessonsP2];

const outContent = `// Auto-generated Toán 11 Complete Data (2 Tập, 9 Chương, 33 Bài)
const generalConventions = ${JSON.stringify(generalConventions, null, 2)};
const chapters = ${JSON.stringify(chapters, null, 2)};
const experientialModules = ${JSON.stringify(experientialModules, null, 2)};
const lessons = ${JSON.stringify(allLessons, null, 2)};
const formulaSummaryTable = ${JSON.stringify(formulaSummaryTable, null, 2)};
const commonPitfalls = ${JSON.stringify(commonPitfalls, null, 2)};

module.exports = { generalConventions, chapters, experientialModules, lessons, formulaSummaryTable, commonPitfalls };
`;

fs.writeFileSync(path.join(__dirname, 'toan11_data.js'), outContent, 'utf8');
console.log('Successfully generated scratch/toan11_data.js! Total lessons:', allLessons.length);
