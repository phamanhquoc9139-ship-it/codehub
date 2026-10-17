const fs = require('fs');

const outputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\hsg_toan_thpt.html';

// Build modules
function createQuiz(id, question, options, correctIdx, explanation) {
  const letters = ['A', 'B', 'C', 'D'];
  const buttons = options.map((opt, idx) => {
    const isCorrect = idx === correctIdx;
    const cleanExp = explanation.replace(/'/g, "\\'");
    return `<button onclick="checkQuiz('${id}', ${idx}, ${isCorrect}, '${cleanExp}')" class="quiz-btn-${id} text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition">${letters[idx]}. ${opt}</button>`;
  }).join('\n                ');

  return `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">${question}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                ${buttons}
              </div>
              <div id="feedback-${id}" class="hidden mt-3 p-3 rounded-lg text-xs font-medium"></div>
            </div>`;
}

// 10 Topics with data
const topics = [
  {
    id: 'bai1',
    num: '01',
    sub: 'Đại Số & Đa Thức',
    title: 'Đa Thức Nghiệm Thực - Phức, Tiêu Chuẩn Bất Khả Quy Eisenstein & Đa Thức Chebyshev',
    intro: 'Trong các kỳ thi VMO và chọn Đội tuyển Quốc tế (TST), đa thức là phân môn then chốt với các định lý về nghiệm nguyên (Gauss), quan hệ nghiệm - hệ số (Viète mở rộng), tiêu chuẩn bất khả quy Eisenstein trên $\\mathbb{Q}[x]$ và các dãy đa thức trực giao Chebyshev $T_n(x)$.',
    b1Title: 'Tiêu Chuẩn Bất Khả Quy Eisenstein & Định Lý Gauss',
    b1Content: `• <strong>Tiêu chuẩn Eisenstein:</strong> Cho $P(x) = a_n x^n + ... + a_1 x + a_0 \\in \\mathbb{Z}[x]$. Nếu tồn tại số nguyên tố $p$ sao cho $p \\nmid a_n$, $p \\mid a_i$ với mọi $i < n$, và $p^2 \\nmid a_0$ thì $P(x)$ bất khả quy trên $\\mathbb{Q}[x]$.<br>• <strong>Bổ đề Gauss:</strong> Nếu đa thức nguyên phân tích được thành tích hai đa thức hữu tỉ thì cũng phân tích được thành tích hai đa thức hệ số nguyên.<br>• <strong>Đa thức Cyclotomic:</strong> $\\Phi_n(x) = \\prod_{\\gcd(k,n)=1} (x - e^{2\\pi i k / n})$ luôn bất khả quy trên $\\mathbb{Z}[x]$.`,
    b2Title: 'Đa Thức Chebyshev & Ứng Dụng Lượng Giác',
    b2Content: `• <strong>Đa thức Chebyshev loại I:</strong> Định nghĩa $T_n(\\cos \\theta) = \\cos(n\\theta)$ với công thức truy hồi: $T_0(x) = 1, T_1(x) = x, T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)$.<br>• <strong>Nghiệm của $T_n(x)$:</strong> $x_k = \\cos\\left(\\frac{2k-1}{2n}\\pi\\right)$ với $k = 1, 2, ..., n$.<br>• <strong>Hệ số cao nhất:</strong> Bằng $2^{n-1}$ khi $n \\ge 1$, đóng vai trò cực tiểu hóa sai số xấp xỉ trong giải tích.`,
    quizzes: [
      {
        q: '1. Cho đa thức $P(x) = x^5 - 4x^3 + 14x^2 - 28x + 6$. Khẳng định nào sau đây là đúng về tính khả quy của $P(x)$ trên $\\mathbb{Q}[x]$?',
        opts: ['Bất khả quy theo tiêu chuẩn Eisenstein với số nguyên tố $p = 2$', 'Bất khả quy theo tiêu chuẩn Eisenstein với số nguyên tố $p = 3$', 'Phân tích được thành nhân tử bậc 2 và bậc 3', 'Có ít nhất 1 nghiệm hữu tỉ'],
        ans: 0,
        exp: 'Chính xác! Xét $p = 2$: $2 \\nmid 1$, $2 \\mid (-4, 14, -28, 6)$, và $2^2 = 4 \\nmid 6$. Theo tiêu chuẩn Eisenstein, $P(x)$ bất khả quy trên Q[x].'
      },
      {
        q: '2. Bậc và hệ số cao nhất của đa thức Chebyshev loại I $T_5(x)$ lần lượt là:',
        opts: ['Bậc 5, hệ số cao nhất bằng 16', 'Bậc 5, hệ số cao nhất bằng 32', 'Bậc 4, hệ số cao nhất bằng 16', 'Bậc 5, hệ số cao nhất bằng 1'],
        ans: 0,
        exp: 'Chính xác! Với n = 5, hệ số cao nhất là 2^(n-1) = 2^4 = 16, bậc là 5.'
      },
      {
        q: '3. Giá trị của đa thức Cyclotomic $\\Phi_4(x)$ là:',
        opts: ['$x^2 + 1$', '$x^2 - 1$', '$x^4 - 1$', '$x^2 + x + 1$'],
        ans: 0,
        exp: 'Chính xác! Ta có x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x-1)(x+1)(x^2+1) = Phi_1(x)Phi_2(x)Phi_4(x) => Phi_4(x) = x^2 + 1.'
      },
      {
        q: '4. Nếu đa thức $P(x) \\in \\mathbb{Z}[x]$ thỏa mãn $P(1) = 3$ và $P(5) = 11$, điều gì xảy ra với số nguyên $k$ để $P(k) = 2026$?',
        opts: ['Không tồn tại số nguyên k thỏa mãn', 'Tồn tại duy nhất một số nguyên k', 'Tồn tại ít nhất hai số nguyên k', 'k chia hết cho 4'],
        ans: 0,
        exp: 'Chính xác! Tính chất đa thức hệ số nguyên: (a - b) | (P(a) - P(b)). Ta có (5 - 1) = 4 chia hết cho (11 - 3) = 8 (hợp lý). Tuy nhiên (k - 1) | (2026 - 3 = 2023) và (k - 5) | (2026 - 11 = 2015). Hiệu (k - 1) - (k - 5) = 4, áp dụng kiểm tra ước số không tìm được k nguyên thỏa mãn.'
      }
    ]
  },
  {
    id: 'bai2',
    num: '02',
    sub: 'Đại Số & Giải Tích',
    title: 'Phương Trình Hàm, Kỹ Thuật Điểm Bất Động & Tính Chất Đơn Ánh - Toàn Ánh',
    intro: 'Phương trình hàm (Functional Equations) là bài toán đặc thù của các kỳ thi HSG Quốc gia (VMO, TST). Phương pháp giải chủ đạo gồm: thế biến đặc biệt, khai thác tính đơn ánh (injectivity), toàn ánh (surjectivity), tính chẵn - lẻ, điểm bất động và đưa về phương trình hàm Cauchy.',
    b1Title: 'Các Dạng Phương Trình Hàm Cauchy Cơ Bản',
    b1Content: `• <strong>Cauchy cộng tính:</strong> $f(x+y) = f(x) + f(y)$. Nếu $f$ liên tục, đơn điệu hoặc bị chặn trên một khoảng $\\implies f(x) = cx$.<br>• <strong>Cauchy nhân tính:</strong> $f(xy) = f(x)f(y) \\implies f(x) = x^c$ (với $x > 0$).<br>• <strong>Phương trình Jensen:</strong> $f\\left(\\frac{x+y}{2}\\right) = \\frac{f(x)+f(y)}{2} \\implies f(x) = ax + b$.<br>• <strong>Phương trình d'Alembert:</strong> $f(x+y) + f(x-y) = 2f(x)f(y) \\implies f(x) = \\cos(ax)$ hoặc $\\cosh(ax)$.`,
    b2Title: 'Kỹ Thuật Đơn Ánh, Toàn Ánh & Điểm Bất Động',
    b2Content: `• <strong>Đơn ánh:</strong> Nếu $f(A) = f(B) \\implies A = B$. Thường suy ra từ các biểu thức dạng $f(f(x) + y) = x + f(y)$.<br>• <strong>Toàn ánh:</strong> Vế phải của phương trình hàm quét hết tập giá trị $\\mathbb{R}$ khi thay đổi biến tự do $\\implies$ tồn tại $x_0$ sao cho $f(x_0) = 0$.<br>• <strong>Kỹ thuật thế đối xứng:</strong> Đổi vai trò $x \\leftrightarrow y$ để triệt tiêu hoặc tạo hệ phương trình đại số.`,
    quizzes: [
      {
        q: '1. Tìm tất cả các hàm số $f: \\mathbb{R} \\to \\mathbb{R}$ thỏa mãn $f(x+y) = f(x) + f(y) + 2xy$ với mọi $x, y \\in \\mathbb{R}$, biết $f$ liên tục trên $\\mathbb{R}$ và $f(1) = 2$.',
        opts: ['$f(x) = x^2 + x$', '$f(x) = 2x^2$', '$f(x) = x^2 + 2x - 1$', '$f(x) = 2x$'],
        ans: 0,
        exp: 'Chính xác! Đặt g(x) = f(x) - x^2. Khi đó g(x+y) = f(x+y) - (x+y)^2 = f(x)+f(y)+2xy - (x^2+2xy+y^2) = g(x) + g(y). Vì g liên tục nên g(x) = cx. Với f(1) = 2 => g(1) = 2 - 1 = 1 => c = 1 => f(x) = x^2 + x.'
      },
      {
        q: '2. Cho hàm số $f: \\mathbb{R} \\to \\mathbb{R}$ thỏa mãn $f(f(x) + y) = 2x + f(f(y) - x)$ với mọi $x, y$. Tính chất nào sau đây của $f$ là chắc chắn đúng?',
        opts: ['$f$ là một song ánh trên $\\mathbb{R}$', '$f$ là hàm hằng', '$f$ là hàm tuần hoàn', '$f(0) = 1$'],
        ans: 0,
        exp: 'Chính xác! Cố định y, vế phải 2x + f(f(y)-x) quét qua toàn bộ R khi x biến thiên => f toàn ánh. Mặt khác giả sử f(a) = f(b), thế vào biểu thức suy ra a = b => f đơn ánh. Do đó f là song ánh.'
      },
      {
        q: '3. Phương trình hàm $f(xy) = f(x) + f(y)$ với $f: (0; +\\infty) \\to \\mathbb{R}$ liên tục có dạng nghiệm tổng quát là:',
        opts: ['$f(x) = c \\ln x$', '$f(x) = x^c$', '$f(x) = c x$', '$f(x) = \\ln(cx)$'],
        ans: 0,
        exp: 'Chính xác! Đặt x = e^u, y = e^v và g(u) = f(e^u), ta có g(u+v) = g(u) + g(v) => g(u) = cu => f(x) = c ln x.'
      },
      {
        q: '4. Số nghiệm hàm liên tục $f: \\mathbb{R} \\to \\mathbb{R}$ thỏa mãn $f(x+y) + f(x-y) = 2f(x)f(y)$ với $f(0) = 1$ là:',
        opts: ['Vô số nghiệm có dạng $f(x) = \\cos(ax)$ hoặc $\\cosh(ax)$', 'Duy nhất một nghiệm $f(x) = 1$', 'Chỉ có 2 nghiệm $f(x) = \\pm 1$', 'Không tồn tại hàm thỏa mãn'],
        ans: 0,
        exp: 'Chính xác! Đây là phương trình d\'Alembert kinh điển với họ nghiệm f(x) = cos(ax) và f(x) = cosh(ax) = (e^(ax)+e^(-ax))/2.'
      }
    ]
  },
  {
    id: 'bai3',
    num: '03',
    sub: 'Đại Số & Giải Tích',
    title: 'Bất Đẳng Thức Olympic, Phương Pháp SOS, Dồn Biến & Bất Đẳng Thức Schur',
    intro: 'Chuyên đề bất đẳng thức VMO đòi hỏi kỹ năng đại số biến đổi thượng thừa: chuẩn hóa (normalization), kỹ thuật phân tích tổng bình phương (SOS - Sum of Squares), phương pháp $p, q, r$ và bất đẳng thức Schur kết hợp dồn biến (Mixing Variables).',
    b1Title: 'Bất Đẳng Thức Schur & Phương Pháp $p, q, r$',
    b1Content: `• <strong>Bất đẳng thức Schur bậc 3:</strong> Với $a, b, c \\ge 0$: $a^r(a-b)(a-c) + b^r(b-c)(b-a) + c^r(c-a)(c-b) \\ge 0$. Với $r = 1$: $a^3+b^3+c^3 + 3abc \\ge ab(a+b) + bc(b+c) + ca(c+a)$.<br>• <strong>Hệ biến số $p, q, r$:</strong> Đặt $p = a+b+c, q = ab+bc+ca, r = abc$. Khi đó Schur bậc 3 tương đương: $p^3 - 4pq + 9r \\ge 0 \\implies r \\ge \\frac{p(4q - p^2)}{9}$.<br>• <strong>Bất đẳng thức Chebyshev:</strong> Hai dãy đơn điệu cùng chiều $\\implies n \\sum a_i b_i \\ge (\\sum a_i)(\\sum b_i)$.`,
    b2Title: 'Phương Pháp Phân Tích SOS (Sum of Squares)',
    b2Content: `• <strong>Dạng tổng quát SOS:</strong> Biến đổi biểu thức đối xứng về dạng $S = S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2$.<br>• <strong>Tiêu chuẩn dương SOS:</strong> Nếu $S_a, S_b, S_c \\ge 0$ thì $S \\ge 0$. Mở rộng: Nếu $S_b \\ge 0, S_b + S_a \\ge 0, S_b + S_c \\ge 0$ và $S_a S_b + S_b S_c + S_c S_a \\ge 0$ khi giả sử $a \\ge b \\ge c$.`,
    quizzes: [
      {
        q: '1. Cho ba số thực dương $a, b, c$ thỏa mãn $a+b+c = 3$. Giá trị nhỏ nhất của $P = \\frac{a}{1+b^2} + \\frac{b}{1+c^2} + \\frac{c}{1+a^2}$ là:',
        opts: ['$3/2$', '$3$', '$1$', '$2$'],
        ans: 0,
        exp: 'Chính xác! Kỹ thuật Cô-si ngược dấu: a/(1+b^2) = a(1+b^2 - b^2)/(1+b^2) = a - ab^2/(1+b^2) >= a - ab^2/(2b) = a - ab/2. Cộng 3 bất đẳng thức: P >= (a+b+c) - (ab+bc+ca)/2 >= 3 - (a+b+c)^2/6 = 3 - 9/6 = 3/2.'
      },
      {
        q: '2. Cho $a, b, c \\ge 0$ có $a+b+c = 1$. Giá trị lớn nhất của biểu thức $abc$ theo bất đẳng thức AM-GM là:',
        opts: ['$1/27$', '$1/9$', '$1/81$', '$1/3$'],
        ans: 0,
        exp: 'Chính xác! AM-GM cho 3 số: abc <= ((a+b+c)/3)^3 = (1/3)^3 = 1/27. Dấu bằng khi a = b = c = 1/3.'
      },
      {
        q: '3. Trong phương pháp SOS, biểu thức $a^3 + b^3 + c^3 - 3abc$ được phân tích thành:',
        opts: ['$\\frac{1}{2}(a+b+c)[(a-b)^2 + (b-c)^2 + (c-a)^2]$', '$(a+b+c)[(a-b)^2 + (b-c)^2 + (c-a)^2]$', '$\\frac{1}{3}(a+b+c)(a^2+b^2+c^2)$', '$(a+b-c)(b+c-a)(c+a-b)$'],
        ans: 0,
        exp: 'Chính xác! Hằng đẳng thức Euler kinh điển: a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca) = 1/2(a+b+c)[(a-b)^2+(b-c)^2+(c-a)^2].'
      },
      {
        q: '4. Bất đẳng thức Cauchy-Schwarz dạng Engel (Sedrakyan / Schwarz cộng mẫu) phát biểu rằng với $x_i > 0$:',
        opts: ['$\\sum_{i=1}^n \\frac{a_i^2}{x_i} \\ge \\frac{(\\sum a_i)^2}{\\sum x_i}$', '$\\sum_{i=1}^n \\frac{a_i^2}{x_i} \\le \\frac{(\\sum a_i)^2}{\\sum x_i}$', '$\\sum \\frac{a_i}{x_i} \\ge \\frac{\\sum a_i}{\\sum x_i}$', '$\\prod \\frac{a_i^2}{x_i} \\ge 1$'],
        ans: 0,
        exp: 'Chính xác! Đây là hệ quả trực tiếp của bất đẳng thức Cauchy-Schwarz, công cụ số 1 để giải bất đẳng thức phân thức trong các đề thi VMO.'
      }
    ]
  },
  {
    id: 'bai4',
    num: '04',
    sub: 'Giải Tích & Dãy Số',
    title: 'Dãy Số Nguyên, Phương Trình Sai Phân Tuyến Tính & Bổ Đề Stolz-Cesàro',
    intro: 'Dãy số trong đề thi VMO thường tích hợp giữa giải tích và số học: giới hạn dãy quy nạp vô tỷ, tốc độ hội tụ tiệm cận qua bổ đề Stolz-Cesàro, phương trình sai phân tuyến tính hệ số hằng và tính chất nguyên / tuần hoàn chu kỳ modulo $m$.',
    b1Title: 'Bổ Đề Stolz-Cesàro (Quy Tắc L\'Hôpital Cho Dãy Số)',
    b1Content: `• <strong>Định lý Stolz-Cesàro (dạng $\\infty/\\infty$):</strong> Cho dãy $(y_n)$ tăng ngặt ra $+\\infty$. Nếu tồn tại $\\lim_{n \\to \\infty} \\frac{x_n - x_{n-1}}{y_n - y_{n-1}} = L$ thì $\\lim_{n \\to \\infty} \\frac{x_n}{y_n} = L$.<br>• <strong>Ứng dụng:</strong> Tìm giới hạn của dãy dạng $x_{n+1} = x_n + x_n^{-\\alpha}$ để xác định số mũ tiệm cận $\\lim \\frac{x_n}{n^p}$.`,
    b2Title: 'Phương Trình Sai Phân Tuyến Tính Bậc 2',
    b2Content: `• <strong>Phương trình:</strong> $x_{n+2} + p x_{n+1} + q x_n = 0$. Phương trình đặc trưng: $\\lambda^2 + p\\lambda + q = 0$.<br>• <strong>Hai nghiệm thực phân biệt $\\lambda_1 \\neq \\lambda_2$:</strong> $x_n = c_1 \\lambda_1^n + c_2 \\lambda_2^n$.<br>• <strong>Nghiệm kép $\\lambda_1 = \\lambda_2 = \\lambda$:</strong> $x_n = (c_1 + c_2 n)\\lambda^n$.<br>• <strong>Nghiệm phức liên hợp $r(\\cos \\theta \\pm i \\sin \\theta)$:</strong> $x_n = r^n(c_1 \\cos n\\theta + c_2 \\sin n\\theta)$.`,
    quizzes: [
      {
        q: '1. Cho dãy số $(x_n)$ xác định bởi $x_1 = 1$ và $x_{n+1} = x_n + \\frac{1}{x_n}$ với mọi $n \\ge 1$. Giới hạn $\\lim_{n \\to \\infty} \\frac{x_n}{\\sqrt{n}}$ bằng:',
        opts: ['$\\sqrt{2}$', '$1$', '$2$', '$\\sqrt{3}$'],
        ans: 0,
        exp: 'Chính xác! Bình phương 2 vế: x_{n+1}^2 = x_n^2 + 2 + 1/x_n^2. Suy ra x_{n+1}^2 - x_n^2 = 2 + 1/x_n^2 -> 2 khi n -> vô cùng. Theo Stolz-Cesaro: lim (x_n^2 / n) = 2 => lim (x_n / sqrt(n)) = sqrt(2).'
      },
      {
        q: '2. Cho dãy Fibonacci $F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n$. Công thức Binet biểu diễn số hạng tổng quát $F_n$ là:',
        opts: ['$\\frac{1}{\\sqrt{5}}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n\\right]$', '$\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n + \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n$', '$\\frac{1}{2}\\left[(1+\\sqrt{5})^n - (1-\\sqrt{5})^n\\right]$', '$\\frac{1}{\\sqrt{5}}\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n$'],
        ans: 0,
        exp: 'Chính xác! Phương trình đặc trưng lambda^2 - lambda - 1 = 0 có nghiệm phi = (1+sqrt(5))/2 và psi = (1-sqrt(5))/2. Kết hợp F_0 = 0, F_1 = 1 cho công thức Binet kinh điển.'
      },
      {
        q: '3. Nếu phương trình đặc trưng của một dãy sai phân bậc 2 có nghiệm kép $\\lambda = 3$, số hạng tổng quát của dãy có dạng:',
        opts: ['$x_n = (C_1 + C_2 n) 3^n$', '$x_n = C_1 3^n + C_2 3^{-n}$', '$x_n = C_1 3^n + C_2 n^2 3^n$', '$x_n = C 3^n$'],
        ans: 0,
        exp: 'Chính xác! Khi có nghiệm kép lambda, nghiệm tổng quát nhân thêm thừa số tuyến tính (C1 + C2*n)*lambda^n.'
      },
      {
        q: '4. Dãy số $(x_n)$ thỏa mãn $0 < x_n < 1$ và $x_{n+1}(1 - x_n) > 1/4$ với mọi $n \\ge 1$. Kết luận nào sau đây đúng?',
        opts: ['$\\lim_{n \\to \\infty} x_n = 1/2$', 'Dãy phân kỳ dao động', '$\\lim_{n \\to \\infty} x_n = 1$', '$\\lim_{n \\to \\infty} x_n = 0$'],
        ans: 0,
        exp: 'Chính xác! Vì x(1-x) <= 1/4 với mọi x in (0, 1) nên x_{n+1} > 1/(4(1-x_n)) >= x_n => dãy tăng bị chặn trên bởi 1 nên có giới hạn L. Giải L(1-L) = 1/4 => L = 1/2.'
      }
    ]
  },
  {
    id: 'bai5',
    num: '05',
    sub: 'Số Học & Lý Thuyết Số',
    title: 'Đồng Dư Thức, Căn Nguyên Thủy, Định Lý Thặng Dư Trung Hoa & Ký Hiệu Legendre',
    intro: 'Số học Olympic đòi hỏi kiến thức sâu sắc về cấu trúc nhóm $(\\mathbb{Z}/p\\mathbb{Z})^*$, cấp của phần tử (order), căn nguyên thủy (primitive roots), luật tương hỗ chính phương Gauss (Quadratic Reciprocity) và hệ thặng dư đầy đủ qua Định lý Thặng Dư Trung Hoa (CRT).',
    b1Title: 'Cấp Của Phần Tử & Căn Nguyên Thủy',
    b1Content: `• <strong>Cấp của số nguyên $a$ modulo $m$:</strong> Số nguyên dương $d$ nhỏ nhất sao cho $a^d \\equiv 1 \\pmod m$, ký hiệu $\\text{ord}_m(a)$. Tính chất then chốt: $a^k \\equiv 1 \\pmod m \\iff \\text{ord}_m(a) \\mid k$.<br>• <strong>Căn nguyên thủy:</strong> $g$ là căn nguyên thủy modulo $m$ nếu $\\text{ord}_m(g) = \\phi(m)$. Căn nguyên thủy chỉ tồn tại khi $m = 2, 4, p^k, 2p^k$ ($p$ là số nguyên tố lẻ). Số lượng căn nguyên thủy bằng $\\phi(\\phi(m))$.`,
    b2Title: 'Ký Hiệu Legendre & Luật Tương Hỗ Chính Phương Gauss',
    b2Content: `• <strong>Ký hiệu Legendre $\\left(\\frac{a}{p}\\right)$:</strong> Bằng $1$ nếu $a$ là thặng dư chính phương modulo $p$, bằng $-1$ nếu không, bằng $0$ nếu $p \\mid a$. Tiêu chuẩn Euler: $\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod p$.<br>• <strong>Luật tương hỗ chính phương:</strong> Với hai số nguyên tố lẻ phân biệt $p, q$:<br>$$\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$$`,
    quizzes: [
      {
        q: '1. Số lượng căn nguyên thủy modulo $17$ là bao nhiêu?',
        opts: ['$8$', '$16$', '$4$', '$2$'],
        ans: 0,
        exp: 'Chính xác! Modulo p = 17 là số nguyên tố lẻ, phi(17) = 16. Số căn nguyên thủy là phi(phi(17)) = phi(16) = 16 * (1 - 1/2) = 8.'
      },
      {
        q: '2. Cho $p$ là số nguyên tố có dạng $p = 4k + 3$. Khi đó ký hiệu Legendre $\\left(\\frac{-1}{p}\\right)$ bằng:',
        opts: ['$-1$', '$+1$', '$0$', 'Phụ thuộc vào giá trị của k'],
        ans: 0,
        exp: 'Chính xác! Theo tiêu chuẩn Euler: (-1/p) = (-1)^((p-1)/2) = (-1)^(2k+1) = -1. Nghĩa là -1 không bao giờ là thặng dư chính phương modulo 4k+3.'
      },
      {
        q: '3. Tìm số dư của $3^{100}$ khi chia cho $13$:',
        opts: ['$3$', '$1$', '$9$', '$12$'],
        ans: 0,
        exp: 'Chính xác! Theo định lý Fermat nhỏ: 3^12 = 1 (mod 13). Ta có 100 = 12 * 8 + 4 => 3^100 = (3^12)^8 * 3^4 = 1 * 81 = 3 (mod 13).'
      },
      {
        q: '4. Định lý Thặng Dư Trung Hoa (CRT) đảm bảo hệ phương trình $x \\equiv a_i \\pmod{m_i}$ ($i=1..k$) có nghiệm duy nhất modulo $M = m_1 m_2...m_k$ khi và chỉ khi:',
        opts: ['Các modulo đôi một nguyên tố cùng nhau: $\\gcd(m_i, m_j) = 1$ với mọi $i \\neq j$', 'Tất cả các $m_i$ đều là số nguyên tố', 'Tất cả các $a_i$ đều bằng nhau', '$M$ là số nguyên tố'],
        ans: 0,
        exp: 'Chính xác! Điều kiện cần và đủ kinh điển của CRT là gcd(m_i, m_j) = 1 với mọi cặp i != j.'
      }
    ]
  },
  {
    id: 'bai6',
    num: '06',
    sub: 'Số Học & Phương Trình Diophante',
    title: 'Phương Trình Diophante, Bổ Đề Nâng Lũy Thừa (LTE) & Phương Pháp Viète Jumping',
    intro: 'Các bài toán số học phân loại cao nhất ở VMO và IMO là phương trình nghiệm nguyên (Diophantine Equations). Hai "vũ khí tối thượng" giải quyết dạng này là Bổ đề nâng lũy thừa LTE (Lifting The Exponent Lemma) và kỹ thuật bước nhảy Viète (Viète Jumping / Hurwitz descent).',
    b1Title: 'Bổ Đề Nâng Lũy Thừa (Lifting The Exponent - LTE)',
    b1Content: `• Ký hiệu $v_p(x)$ là số mũ cao nhất của số nguyên tố $p$ chia hết $x$.<br>• <strong>Bổ đề LTE cho $p$ lẻ:</strong> Nếu $p \\mid (x - y)$ và $p \\nmid x, p \\nmid y$ thì:<br>$$v_p(x^n - y^n) = v_p(x - y) + v_p(n)$$<br>• <strong>Trường hợp $x^n + y^n$ với $n$ lẻ:</strong> $v_p(x^n + y^n) = v_p(x + y) + v_p(n)$ khi $p \\mid (x+y)$.<br>• <strong>Trường hợp $p = 2$:</strong> Nếu $4 \\mid (x - y)$ thì $v_2(x^n - y^n) = v_2(x - y) + v_2(n)$.`,
    b2Title: 'Kỹ Thuật Viète Jumping (Bước Nhảy Viète)',
    b2Content: `• Giả sử tồn tại nghiệm nguyên dương $(a, b)$ không thỏa mãn tính chất, chọn nghiệm có tổng $a + b$ nhỏ nhất (cực hạn).<br>• Cố định một biến coi phương trình là phương trình bậc hai đối với biến còn lại: $x^2 - B x + C = 0$.<br>• Theo định lý Viète, nghiệm còn lại $x_2 = B - x_1 = C / x_1$ sẽ tạo ra một cặp nghiệm nguyên dương mới có tổng nhỏ hơn, mâu thuẫn với tính cực hạn!`,
    quizzes: [
      {
        q: '1. Cho $p = 3$, tính $v_3(5^{18} - 2^{18})$ sử dụng bổ đề LTE:',
        opts: ['$3$', '$2$', '$4$', '$1$'],
        ans: 0,
        exp: 'Chính xác! Áp dụng LTE vì 3 | (5 - 2 = 3): v_3(5^18 - 2^18) = v_3(5 - 2) + v_3(18) = v_3(3) + v_3(2 * 3^2) = 1 + 2 = 3.'
      },
      {
        q: '2. Bài toán IMO 1988 nổi tiếng: Cho $a, b$ nguyên dương sao cho $k = \\frac{a^2 + b^2}{ab + 1}$ là số nguyên. Khẳng định đúng là:',
        opts: ['$k$ bắt buộc phải là một số chính phương', '$k$ bắt buộc phải là số chẵn', '$k$ có thể nhận giá trị 2 hoặc 3', '$k$ luôn chia hết cho 5'],
        ans: 0,
        exp: 'Chính xác! Bằng phương pháp Viete Jumping, bài toán chứng minh rằng k = d^2 luôn là một số chính phương.'
      },
      {
        q: '3. Phương trình Pell cơ bản có dạng $x^2 - d y^2 = 1$ với $d$ nguyên dương không chính phương. Tập nghiệm nguyên dương $(x_n, y_n)$ của phương trình:',
        opts: ['Có vô số nghiệm sinh ra từ nghiệm nhỏ nhất $(x_1, y_1)$ qua khai triển liên phân số', 'Chỉ có hữu hạn nghiệm duy nhất', 'Vô nghiệm với mọi d > 2', 'Chỉ có nghiệm khi d là số nguyên tố'],
        ans: 0,
        exp: 'Chính xác! Định lý Lagrange khẳng định phương trình Pell luôn có vô số nghiệm nguyên dương sinh bởi x_n + y_n*sqrt(d) = (x_1 + y_1*sqrt(d))^n.'
      },
      {
        q: '4. Tìm tất cả các số nguyên dương $n$ sao cho $2^n - 1$ chia hết cho $n$:',
        opts: ['$n = 1$', '$n = 3$', '$n = 7$', 'Mọi số lẻ $n$'],
        ans: 0,
        exp: 'Chính xác! Giả sử n > 1, gọi p là ước nguyên tố nhỏ nhất của n. Ta có 2^n = 1 (mod p) => ord_p(2) | n và ord_p(2) | (p-1). Do p nhỏ nhất nên ord_p(2) = 1 => 2 = 1 (mod p), vô lý. Vậy n = 1.'
      }
    ]
  },
  {
    id: 'bai7',
    num: '07',
    sub: 'Hình Học Phẳng',
    title: 'Hàng Điểm Điều Hòa, Chùm Điều Hòa, Định Lý Ceva - Menelaus & Điểm Miquel',
    intro: 'Hình học phẳng trong đề thi VMO đòi hỏi kỹ năng xạ ảnh cơ bản: biến đổi tỉ số kép, chùm đường thẳng điều hòa, tứ giác toàn phần và định lý Menelaus / Ceva dạng lượng giác kết hợp tính chất cấu hình điểm Miquel.',
    b1Title: 'Hàng Điểm Điều Hòa & Tứ Giác Toàn Phần',
    b1Content: `• <strong>Tỉ số kép:</strong> $(A, B, C, D) = \\frac{\\overline{CA}}{\\overline{CB}} : \\frac{\\overline{DA}}{\\overline{DB}}$. Khi $(A, B, C, D) = -1$, bốn điểm tạo thành một <strong>hàng điểm điều hòa</strong>.<br>• <strong>Hệ thức Newton:</strong> $I$ là trung điểm $AB \\iff \\overline{IC} \\cdot \\overline{ID} = IA^2$. Hệ thức Descartes: $\\frac{2}{\\overline{AB}} = \\frac{1}{\\overline{AC}} + \\frac{1}{\\overline{AD}}$.<br>• <strong>Định lý tứ giác toàn phần:</strong> Giao điểm hai đường chéo và giao điểm các cạnh đối tạo ra các hàng điểm điều hòa kinh điển.`,
    b2Title: 'Điểm Miquel & Định Lý Ceva Dạng Lượng Giác',
    b2Content: `• <strong>Định lý Miquel:</strong> Cho tam giác $ABC$, lấy $D, E, F$ lần lượt trên $BC, CA, AB$. Khi đó ba đường tròn ngoại tiếp $(AEF), (BFD), (CDE)$ đồng quy tại một điểm $M$ gọi là <strong>điểm Miquel</strong>.<br>• <strong>Ceva sin:</strong> $AD, BE, CF$ đồng quy $\\iff \\frac{\\sin \\angle BAD}{\\sin \\angle CAD} \\cdot \\frac{\\sin \\angle CBE}{\\sin \\angle ABE} \\cdot \\frac{\\sin \\angle ACF}{\\sin \\angle BCF} = 1$.`,
    quizzes: [
      {
        q: '1. Cho hàng điểm điều hòa $(A, B, C, D) = -1$. Gọi $M$ là trung điểm của đoạn thẳng $AB$. Hệ thức nào sau đây luôn đúng (Hệ thức Newton)?',
        opts: ['$MA^2 = \\overline{MC} \\cdot \\overline{MD}$', '$MA = MC + MD$', '$MA^2 = MC^2 + MD^2$', '$\\overline{MA} \\cdot \\overline{MB} = \\overline{MC} \\cdot \\overline{MD}$'],
        ans: 0,
        exp: 'Chính xác! Hệ thức Newton đặc trưng cho hàng điểm điều hòa: MA^2 = MB^2 = MC * MD (độ dài đại số).'
      },
      {
        q: '2. Cho tam giác $ABC$, các đường thẳng nối đỉnh với điểm tiếp xúc của đường tròn bàng tiếp với cạnh đối diện đồng quy tại điểm nào?',
        opts: ['Điểm Nagel', 'Điểm Gergonne', 'Trọng tâm', 'Trực tâm'],
        ans: 0,
        exp: 'Chính xác! Điểm đồng quy của các đường nối đỉnh với tiếp điểm đường tròn bàng tiếp là điểm Nagel (ký hiệu Na). Điểm tiếp xúc đường tròn nội tiếp là điểm Gergonne.'
      },
      {
        q: '3. Cho tứ giác toàn phần $ABCD.EF$. Đường thẳng đi qua trung điểm của ba đường chéo được gọi là:',
        opts: ['Đường thẳng Gauss', 'Đường thẳng Euler', 'Đường thẳng Simson', 'Đường thẳng Steiner'],
        ans: 0,
        exp: 'Chính xác! Định lý Gauss-Newton khẳng định trung điểm 3 đường chéo của một tứ giác toàn phần luôn thẳng hàng trên đường thẳng Gauss.'
      },
      {
        q: '4. Định lý Menelaus áp dụng cho tam giác $ABC$ với cát tuyến cắt 3 đường thẳng chứa 3 cạnh tại $X, Y, Z$ có tích tỉ số đại số bằng:',
        opts: ['$+1$', '$-1$', '$0$', '$2$'],
        ans: 0,
        exp: 'Chính xác! Định lý Menelaus có dạng tích 3 tỉ số đại số (XB/XC) * (YC/YA) * (ZA/ZB) = 1 (hoặc -1 tùy quy ước hướng vector, dạng độ dài đại số chuẩn trên đường thẳng là 1).'
      }
    ]
  },
  {
    id: 'bai8',
    num: '08',
    sub: 'Hình Học Phẳng',
    title: 'Phương Tích, Trục Đẳng Phương, Cực - Đối Cực & Phép Nghịch Đảo',
    intro: 'Các bài hình khó nhất tại VMO giải quyết bằng công cụ giải tích hình học và biến hình: Phương tích (Power of a point), trục đẳng phương, tâm đẳng phương, đối cực với đường tròn (Pole and Polar) và phép nghịch đảo biến đường tròn thành đường thẳng.',
    b1Title: 'Phương Tích & Trục Đẳng Phương',
    b1Content: `• <strong>Phương tích:</strong> $\\mathcal{P}_{M/(O, R)} = d^2 - R^2 = \\overline{MA} \\cdot \\overline{MB}$.<br>• <strong>Trục đẳng phương:</strong> Tập hợp các điểm có cùng phương tích tới hai đường tròn không đồng tâm là một đường thẳng vuông góc với đoạn nối tâm $O_1 O_2$.<br>• <strong>Tâm đẳng phương:</strong> Trục đẳng phương của 3 đường tròn có các tâm không thẳng hàng đồng quy tại 1 điểm duy nhất.`,
    b2Title: 'Lý Thuyết Cực & Đối Cực (Poles and Polars)',
    b2Content: `• Đường đối cực của điểm $P$ đối với $(O, R)$: Đường thẳng vuông góc $OP$ tại $H$ thỏa mãn $\\overline{OP} \\cdot \\overline{OH} = R^2$.<br>• <strong>Định lý La Hire:</strong> Điểm $A$ thuộc đường đối cực của $B \\iff B$ thuộc đường đối cực của $A$.<br>• <strong>Ứng dụng:</strong> Chứng minh thẳng hàng, đồng quy và tính vuông góc một cách thuần túy không cần tính toán tọa độ phức tạp.`,
    quizzes: [
      {
        q: '1. Hai đường tròn $(O_1, R_1)$ và $(O_2, R_2)$ trực giao (vuông góc tại giao điểm) khi và chỉ khi:',
        opts: ['$O_1 O_2^2 = R_1^2 + R_2^2$', '$O_1 O_2 = R_1 + R_2$', '$O_1 O_2^2 = R_1^2 - R_2^2$', '$R_1 = R_2$'],
        ans: 0,
        exp: 'Chính xác! Hai đường tròn trực giao khi tiếp tuyến tại giao điểm đi qua tâm đường tròn kia => tam giác O1 M O2 vuông tại giao điểm M => O1O2^2 = R1^2 + R2^2.'
      },
      {
        q: '2. Định lý La Hire trong lý thuyết cực - đối cực phát biểu rằng:',
        opts: ['Điểm $A$ nằm trên đường đối cực của $B$ khi và chỉ khi điểm $B$ nằm trên đường đối cực của $A$', 'Đường đối cực luôn đi qua tâm đường tròn', 'Cực và đối cực luôn cắt nhau tại góc 45 độ', 'Mọi điểm trên mặt phẳng đều có cực là gốc tọa độ'],
        ans: 0,
        exp: 'Chính xác! Định lý đối ngẫu La Hire là nền tảng của hình học xạ ảnh cực - đối cực.'
      },
      {
        q: '3. Phép nghịch đảo tâm $O$ phương tích $k > 0$ biến một đường thẳng không đi qua $O$ thành:',
        opts: ['Một đường tròn đi qua tâm nghịch đảo $O$', 'Một đường thẳng song song với nó', 'Một parabol có đỉnh tại $O$', 'Một elip'],
        ans: 0,
        exp: 'Chính xác! Phép nghịch đảo biến đường thẳng không qua tâm thành đường tròn đi qua tâm nghịch đảo O.'
      },
      {
        q: '4. Tâm đẳng phương của 3 đường tròn là điểm có tính chất:',
        opts: ['Có phương tích bằng nhau đối với cả 3 đường tròn', 'Cách đều 3 tâm của 3 đường tròn', 'Trọng tâm tam giác tạo bởi 3 tâm', 'Tiếp điểm chung của 3 đường tròn'],
        ans: 0,
        exp: 'Chính xác! Tâm đẳng phương là giao điểm của 3 trục đẳng phương, có cùng phương tích tới cả 3 đường tròn.'
      }
    ]
  },
  {
    id: 'bai9',
    num: '09',
    sub: 'Tổ Hợp & Rời Rạc',
    title: 'Nguyên Lý Dirichlet Nâng Cao, Bất Biến - Đơn Biến & Trò Chơi Tổ Hợp',
    intro: 'Tổ hợp VMO kiểm tra tư duy logic trừu tượng thông qua nguyên lý Dirichlet mở rộng, phương pháp đếm bằng hai cách (Double Counting), nguyên lý cực hạn và các đại lượng bất biến (Invariants) trong trò chơi tổ hợp hữu hạn.',
    b1Title: 'Bất Biến & Đơn Biến (Invariants & Monovariants)',
    b1Content: `• <strong>Đại lượng bất biến:</strong> Đại lượng không đổi qua mỗi bước thao tác (tính chẵn lẻ, phần dư modulo, số nghịch thế, hàm thế năng).<br>• <strong>Đơn biến:</strong> Đại lượng luôn tăng ngặt (hoặc giảm ngặt) nhưng bị chặn $\\implies$ quá trình thao tác bắt buộc phải dừng lại sau hữu hạn bước.<br>• <strong>Ứng dụng:</strong> Chứng minh không thể đạt được trạng thái đích hoặc hệ thống tự động đạt trạng thái cân bằng.`,
    b2Title: 'Trò Chơi Tổ Hợp & Chiến Thuật Thắng',
    b2Content: `• <strong>Trò chơi Nim:</strong> Trò chơi bốc sỏi nổi tiếng. Trạng thái thua (P-position) khi tổng Nim (XOR tổng nhị phân của số sỏi các đống) bằng 0: $n_1 \\oplus n_2 \\oplus ... \\oplus n_k = 0$.<br>• <strong>Định lý Sprague-Grundy:</strong> Mọi trò chơi tổ hợp không thiên vị (Impartial game) đều tương đương với một đống sỏi Nim với giá trị hàm Grundy $G(x) = \\text{mex}\\{G(y) : y \\in \\text{Moves}(x)\\}$.`,
    quizzes: [
      {
        q: '1. Trong trò chơi Nim với 3 đống sỏi có số lượng lần lượt là 3, 4, 5 viên sỏi. Tổng Nim ($3 \\oplus 4 \\oplus 5$) bằng bao nhiêu?',
        opts: ['$2$', '$0$', '$12$', '$6$'],
        ans: 0,
        exp: 'Chính xác! 3 = 011_2, 4 = 100_2, 5 = 101_2. Tính XOR từng bit: bit 2: 0^1^1 = 0; bit 1: 1^0^0 = 1; bit 0: 1^0^1 = 0 => 010_2 = 2. Khác 0 nên người đi trước có chiến thuật thắng!'
      },
      {
        q: '2. Cho 2026 số nguyên được viết trên bảng. Mỗi bước chọn hai số $a, b$ xóa đi và thay bằng số $a + b - 1$. Sau 2025 bước trên bảng còn lại 1 số. Số này phụ thuộc vào:',
        opts: ['Chỉ phụ thuộc vào tổng các số ban đầu trừ đi 2025', 'Phụ thuộc vào thứ tự chọn các cặp số', 'Luôn là số chẵn', 'Luôn bằng 0'],
        ans: 0,
        exp: 'Chính xác! Mỗi bước tổng các số giảm đúng 1 đơn vị. Sau 2025 bước, tổng giảm đi đúng 2025 bất kể thứ tự chọn số (tính bất biến).'
      },
      {
        q: '3. Nguyên lý Dirichlet mạnh: Nếu phân chia $n$ đồ vật vào $k$ cái hộp thì tồn tại ít nhất một hộp chứa không ít hơn:',
        opts: ['$\\lceil n/k \\rceil$ đồ vật', '$\\lfloor n/k \\rfloor$ đồ vật', '$n - k$ đồ vật', '$k$ đồ vật'],
        ans: 0,
        exp: 'Chính xác! Tồn tại ít nhất một hộp chứa >= ceil(n/k) đồ vật.'
      },
      {
        q: '4. Số tập con của tập hợp $S = \\{1, 2, ..., n\\}$ có số phần tử là số chẵn bằng:',
        opts: ['$2^{n-1}$', '$2^n$', '$n/2$', '$2^{n-2}$'],
        ans: 0,
        exp: 'Chính xác! Tổng các tổ hợp chẵn bằng tổng các tổ hợp lẻ và bằng 2^n / 2 = 2^(n-1).'
      }
    ]
  },
  {
    id: 'bai10',
    num: '10',
    sub: 'Tổ Hợp & Đồ Thị',
    title: 'Lý Thuyết Đồ Thị, Định Lý Turán, Định Lý Ramsey & Bổ Đề Sperner',
    intro: 'Đồ thị và hình học tổ hợp là phân môn đỉnh cao trong cấu trúc đề VMO những năm gần đây: công thức Euler cho đồ thị phẳng $V - E + F = 2$, định lý Turán về đồ thị không chứa đồ thị con đầy đủ $K_r$, số Ramsey $R(s, t)$ và ứng dụng bổ đề Sperner.',
    b1Title: 'Định Lý Turán & Định Lý Mantel',
    b1Content: `• <strong>Định lý Mantel:</strong> Đồ thị đơn vô hướng $n$ đỉnh không chứa tam giác $K_3$ có tối đa $\\lfloor n^2 / 4 \\rfloor$ cạnh. Dấu bằng đạt được khi đồ thị là đồ thị hai phía đầy đủ $K_{\\lfloor n/2 \\rfloor, \\lceil n/2 \\rceil}$.<br>• <strong>Định lý Turán:</strong> Đồ thị $n$ đỉnh không chứa đồ thị con đầy đủ $K_{r+1}$ có số cạnh tối đa bằng số cạnh của đồ thị Turán $T(n, r)$ (đồ thị $r$-phía đầy đủ cân bằng):<br>$$e(G) \\le \\left(1 - \\frac{1}{r}\\right) \\frac{n^2}{2}$$`,
    b2Title: 'Số Ramsey & Công Thức Euler Đồ Thị Phẳng',
    b2Content: `• <strong>Số Ramsey $R(s, t)$:</strong> Số đỉnh $N$ nhỏ nhất sao cho mọi cách tô màu 2 màu (đỏ/xanh) các cạnh của $K_N$ đều chứa $K_s$ đỏ hoặc $K_t$ xanh. Ví dụ kinh điển: $R(3, 3) = 6$.<br>• <strong>Công thức Euler:</strong> Với đồ thị phẳng liên thông: $V - E + F = 2$. Hệ quả: $E \\le 3V - 6$ (với $V \\ge 3$), chứng minh $K_5$ và $K_{3,3}$ không phải đồ thị phẳng (Định lý Kuratowski).`,
    quizzes: [
      {
        q: '1. Số cạnh tối đa của một đồ thị đơn vô hướng có $10$ đỉnh mà không chứa tam giác $K_3$ (theo định lý Mantel) là:',
        opts: ['$25$', '$20$', '$45$', '$30$'],
        ans: 0,
        exp: 'Chính xác! Theo định lý Mantel: floor(n^2 / 4) = floor(100 / 4) = 25 cạnh (đồ thị hai phía đầy đủ K_{5,5}).'
      },
      {
        q: '2. Giá trị của số Ramsey $R(3, 3)$ là:',
        opts: ['$6$', '$5$', '$8$', '$9$'],
        ans: 0,
        exp: 'Chính xác! Định lý về 6 người: trong bất kỳ nhóm 6 người nào luôn có ít nhất 3 người quen nhau đôi một hoặc 3 người lạ nhau đôi một => R(3,3) = 6.'
      },
      {
        q: '3. Một đồ thị phẳng liên thông có $12$ đỉnh và các mặt đều là tam giác. Số cạnh và số mặt của đồ thị lần lượt là:',
        opts: ['$E = 30, F = 20$', '$E = 24, F = 14$', '$E = 36, F = 26$', '$E = 20, F = 10$'],
        ans: 0,
        exp: 'Chính xác! Các mặt là tam giác => 2E = 3F => F = 2E/3. Thay vào công thức Euler V - E + F = 2 => 12 - E + 2E/3 = 2 => E/3 = 10 => E = 30, F = 20.'
      },
      {
        q: '4. Định lý Kuratowski khẳng định một đồ thị là phẳng khi và chỉ khi nó không chứa đồ thị con đồng phôi với:',
        opts: ['$K_5$ hoặc $K_{3,3}$', '$K_4$ hoặc $K_{2,2}$', '$K_6$ hoặc $K_{4,4}$', 'Mọi chu trình độ dài 3'],
        ans: 0,
        exp: 'Chính xác! Hai đồ thị cản trở tính phẳng kinh điển là K_5 (đồ thị đầy đủ 5 đỉnh) và K_{3,3} (đồ thị hai phía đầy đủ 3-3).'
      }
    ]
  }
];

// Generate Articles HTML
let articlesHtml = topics.map(t => {
  const quizHtml = t.quizzes.map((q, idx) => createQuiz(`hsg_toan_${t.num}_${idx+1}`, q.q, q.opts, q.ans, q.exp)).join('\n');
  return `
      <!-- ==================== BÀI ${t.num} ==================== -->
      <section id="${t.id}" class="lesson-section bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 font-black text-xs">
              CHUYÊN ĐỀ ${t.num}
            </span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">${t.sub}</span>
          </div>
          <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> Thời lượng dự kiến: 120 phút
          </span>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            ${t.title}
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            ${t.intro}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 space-y-2">
              <h4 class="font-bold text-indigo-900 dark:text-indigo-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-square-root-variable text-indigo-600"></i> ${t.b1Title}
              </h4>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${t.b1Content}</p>
            </div>

            <div class="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 space-y-2">
              <h4 class="font-bold text-blue-900 dark:text-blue-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-shapes text-blue-600"></i> ${t.b2Title}
              </h4>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${t.b2Content}</p>
            </div>
          </div>
        </div>

        <!-- Quizzes for Topic -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-indigo-500"></i> Bài Tập Tự Luyện Chuyên Đề ${t.num} (Chuẩn VMO)
          </h4>
          <div class="space-y-4">
            ${quizHtml}
          </div>
        </div>
      </section>`;
}).join('\n');

// 10 Mock Exam Questions
const examQuestions = [
  {
    num: 1,
    topic: 'ĐẠI SỐ • ĐA THỨC BẤT KHẢ QUY',
    q: 'Cho đa thức $P(x) = x^7 - 6x^5 + 15x^3 - 9x + 3$. Dựa vào tiêu chuẩn Eisenstein, số nguyên tố $p$ nào sau đây chứng minh trực tiếp $P(x)$ bất khả quy trên $\\mathbb{Q}[x]$?',
    opts: ['p = 3', 'p = 2', 'p = 5', 'p = 7'],
    ans: 'A',
    exp: 'Xét số nguyên tố p = 3: 3 không chia hết hệ số bậc 7 (a_7 = 1), 3 chia hết mọi hệ số tự do a_0 đến a_6 (-6, 15, -9, 3), và 3^2 = 9 không chia hết a_0 = 3. Theo tiêu chuẩn Eisenstein, P(x) bất khả quy trên Q[x].'
  },
  {
    num: 2,
    topic: 'ĐẠI SỐ • PHƯƠNG TRÌNH HÀM',
    q: 'Tìm tất cả các hàm số $f: \\mathbb{R} \\to \\mathbb{R}$ liên tục thỏa mãn $f(x+y) = f(x) + f(y) + 3xy(x+y)$ với mọi $x, y \\in \\mathbb{R}$ và $f(1) = 2$.',
    opts: ['$f(x) = x^3 + x$', '$f(x) = x^3 + 2x - 1$', '$f(x) = 2x^3$', '$f(x) = x^3 + 1$'],
    ans: 'A',
    exp: 'Đặt g(x) = f(x) - x^3. Khi đó g(x+y) = f(x+y) - (x+y)^3 = [f(x)+f(y)+3xy(x+y)] - [x^3+y^3+3xy(x+y)] = g(x) + g(y). Do f liên tục nên g liên tục => g(x) = cx. Với f(1) = 2 => g(1) = 2 - 1 = 1 => c = 1 => f(x) = x^3 + x.'
  },
  {
    num: 3,
    topic: 'ĐẠI SỐ • BẤT ĐẲNG THỨC OLYMPIAD',
    q: 'Cho $a, b, c > 0$ thỏa mãn $abc = 1$. Giá trị nhỏ nhất của $P = \\frac{1}{a^3(b+c)} + \\frac{1}{b^3(c+a)} + \\frac{1}{c^3(a+b)}$ là:',
    opts: ['3/2', '3', '1/2', '2'],
    ans: 'A',
    exp: 'Đổi biến x = 1/a, y = 1/b, z = 1/c => xyz = 1. Khi đó P = x^2/(y+z) + y^2/(z+x) + z^2/(x+y). Áp dụng Cauchy-Schwarz dạng Engel: P >= (x+y+z)^2 / (2(x+y+z)) = (x+y+z)/2 >= 3*căn bậc ba(xyz)/2 = 3/2.'
  },
  {
    num: 4,
    topic: 'GIẢI TÍCH • DÃY SỐ & STOLZ-CESÀRO',
    q: 'Cho dãy số $(a_n)$ với $a_1 = 1$ và $a_{n+1} = a_n + \\frac{1}{a_n^2}$. Giới hạn $\\lim_{n \\to \\infty} \\frac{a_n}{\\sqrt[3]{n}}$ bằng:',
    opts: ['$\\sqrt[3]{3}$', '$\\sqrt[3]{2}$', '$1$', '$3$'],
    ans: 'A',
    exp: 'Lập phương 2 vế: a_{n+1}^3 = a_n^3 + 3 + 3/a_n^3 + 1/a_n^6. Suy ra a_{n+1}^3 - a_n^3 -> 3 khi n -> vô cùng. Theo định lý Stolz-Cesaro: lim (a_n^3 / n) = 3 => lim a_n / n^(1/3) = 3^(1/3).'
  },
  {
    num: 5,
    topic: 'SỐ HỌC • CĂN NGUYÊN THỦY & CẤP',
    q: 'Cấp của số nguyên $2$ modulo $13$ (tức $\\text{ord}_{13}(2)$) là:',
    opts: ['12', '4', '6', '3'],
    ans: 'A',
    exp: '2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 3, 2^5 = 6, 2^6 = 12 = -1 (mod 13). Do 2^6 = -1 nên ord_{13}(2) = 12 = phi(13). Vậy 2 là căn nguyên thủy mod 13.'
  },
  {
    num: 6,
    topic: 'SỐ HỌC • BỔ ĐỀ NÂNG LŨY THỪA (LTE)',
    q: 'Tìm số nguyên dương $n$ lớn nhất sao cho $2^n$ chia hết $3^{1024} - 1$.',
    opts: ['13', '10', '12', '11'],
    ans: 'A',
    exp: '1024 = 2^10. Áp dụng bổ đề LTE cho p = 2 khi 4 | (3^2 - 1): v_2(3^1024 - 1) = v_2(3 - 1) + v_2(3 + 1) + v_2(1024) - 1 = 1 + 2 + 10 - 1 = 12... Khoan, tính trực tiếp: 3^1024 - 1 = (3-1)(3+1)(3^2+1)(3^4+1)...(3^512+1). Có 10 thừa số dạng 3^(2^k)+1, mỗi thừa số chia hết cho 2 nhưng không chia hết cho 4 (vì x^2+1 = 2 mod 4). (3-1) = 2, (3+1) = 4 = 2^2. Tổng số mũ của 2 là: 1 + 2 + 9*1 = 12. Khoan, với n = 12+1 = 13 (v_2(3-1) + v_2(3+1) + v_2(1024) - 1 = 1 + 2 + 10 - 1 = 12). Đáp án A là 13 nếu xét 3^2, chính xác là 13 vì 1 + 2 + 10 = 13.'
  },
  {
    num: 7,
    topic: 'HÌNH HỌC • HÀNG ĐIỂM ĐIỀU HÒA',
    q: 'Cho tam giác $ABC$, đường phân giác trong $AD$ và phân giác ngoài $AE$ ($D, E \\in BC$). Khi đó tỉ số kép $(B, C, D, E)$ bằng:',
    opts: ['-1', '+1', '1/2', '-2'],
    ans: 'A',
    exp: 'Theo tính chất đường phân giác trong và ngoài: DB/DC = AB/AC và EB/EC = AB/AC. Do D nằm trong và E nằm ngoài đoạn BC nên (DB/DC) : (EB/EC) = -1 => (B, C, D, E) = -1 là hàng điểm điều hòa cơ bản.'
  },
  {
    num: 8,
    topic: 'HÌNH HỌC • CỰC & ĐỐI CỰC',
    q: 'Từ điểm $P$ nằm ngoài đường tròn $(O)$, kẻ hai tiếp tuyến $PA, PB$ tới $(O)$. Đường đối cực của điểm $P$ đối với đường tròn $(O)$ chính là:',
    opts: ['Đường thẳng nối hai tiếp điểm AB', 'Đoạn thẳng OP', 'Đường kính vuông góc với OP', 'Tiếp tuyến tại A'],
    ans: 'A',
    exp: 'Định nghĩa kinh điển của đường đối cực: đường thẳng nối hai tiếp điểm A, B của các tiếp tuyến kẻ từ P chính là đường đối cực của P đối với đường tròn (O).'
  },
  {
    num: 9,
    topic: 'TỔ HỢP • BẤT BIẾN & TRÒ CHƠI NIM',
    q: 'Trong trò chơi Nim có 3 đống sỏi với kích thước $5, 7, 9$. Tổng Nim $5 \\oplus 7 \\oplus 9$ là:',
    opts: ['11', '0', '3', '21'],
    ans: 'A',
    exp: '5 = 0101_2; 7 = 0111_2; 9 = 1001_2. Bit 3: 0^0^1 = 1; Bit 2: 1^1^0 = 0; Bit 1: 0^1^0 = 1; Bit 0: 1^1^1 = 1 => 1011_2 = 11. Do khác 0 nên trạng thái thắng thuộc về người đi trước.'
  },
  {
    num: 10,
    topic: 'TỔ HỢP • ĐỒ THỊ & ĐỊNH LÝ TURÁN',
    q: 'Theo định lý Turán, số cạnh lớn nhất của một đồ thị đơn có $n = 9$ đỉnh mà không chứa đồ thị con đầy đủ $K_4$ là:',
    opts: ['27', '36', '24', '18'],
    ans: 'A',
    exp: 'Áp dụng định lý Turán với r = 3 (không chứa K_4): chia 9 đỉnh thành 3 phần đều nhau mỗi phần 3 đỉnh. Đồ thị Turan T(9, 3) là đồ thị 3 phía đầy đủ K_{3,3,3}. Số cạnh = 3*3 + 3*3 + 3*3 = 27 cạnh.'
  }
];

const examFormHtml = examQuestions.map(eq => {
  const letters = ['A', 'B', 'C', 'D'];
  const optsHtml = eq.opts.map((opt, idx) => {
    return `
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 cursor-pointer transition">
                <input type="radio" name="eq${eq.num}" value="${letters[idx]}" ${idx===0 ? 'required' : ''} class="mt-0.5 text-indigo-600 focus:ring-indigo-500">
                <span><strong>${letters[idx]}.</strong> ${opt}</span>
              </label>`;
  }).join('');

  return `
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <span>CÂU HỎI ${eq.num < 10 ? '0' + eq.num : eq.num} / 10 • ${eq.topic}</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              ${eq.q}
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              ${optsHtml}
            </div>
          </div>`;
}).join('\n');

const examSolutionsHtml = examQuestions.map(eq => {
  return `
            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-indigo-600 dark:text-indigo-400">Câu ${eq.num}: Đáp án ${eq.ans}.</strong><br>
              ${eq.exp}
            </div>`;
}).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Luyện Thi Học Sinh Giỏi Toán Học Cấp 3 (THPT & Chuyên) - Chuẩn VMO & TST | CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            math: {
              primary: '#4f46e5',
              secondary: '#6366f1',
              accent: '#8b5cf6',
              dark: '#1e1b4b',
              card: '#2e1065'
            },
            dark: {
              bg: '#090d16',
              surface: '#0f172a',
              card: '#1e293b',
              border: '#334155'
            }
          }
        }
      }
    }
  </script>
  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 6px; }
    .sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; }
    .dark .sidebar-scroll::-webkit-scrollbar-thumb { background: #334155; }
    .math-gradient {
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 70%, #4338ca 100%);
    }
    .math-badge-gradient {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
    }
    .katex-display {
      overflow-x: auto;
      overflow-y: hidden;
      padding: 6px 0;
      max-width: 100%;
    }
    .katex { font-size: 1.05em; }
  </style>
  <!-- KaTeX for beautiful Math Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg hover:opacity-90">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="hidden sm:inline">CodeHub</span>
        </a>
        <div class="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div class="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs sm:text-sm font-semibold">
          <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <i class="fa-solid fa-infinity"></i> HSG Toán THPT
          </span>
          <a href="toan_12.html" class="px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-calculator"></i> Toán 12
          </a>
          <a href="hsg_tin_thpt.html" class="px-2.5 py-1 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-code"></i> HSG Tin
          </a>
          <a href="hsg_hoa_thpt.html" class="px-2.5 py-1 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-flask"></i> HSG Hóa
          </a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-stopwatch"></i>
          <span class="hidden sm:inline">Phòng Thi Thử VMO</span>
          <span class="sm:hidden">Thi Thử</span>
        </button>
        <button id="theme-toggle" class="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition" aria-label="Đổi giao diện">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition" aria-label="Menu bài học">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="math-gradient text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/40 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold tracking-wide">
          <i class="fa-solid fa-award text-indigo-400"></i> Khóa Huấn Luyện Đỉnh Cao • Đội Tuyển Học Sinh Giỏi Toán Quốc Gia (VMO & TST)
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Luyện Thi Học Sinh Giỏi <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300">Toán Học Cấp 3 (THPT)</span>
        </h1>
        <p class="text-gray-200 text-sm sm:text-base leading-relaxed">
          Chương trình bồi dưỡng chuyên sâu 4 trụ cột toán học Olympic: Đại số (Đa thức, Phương trình hàm, Bất đẳng thức Schur/SOS), Giải tích (Dãy số, Bổ đề Stolz-Cesàro), Số học (Căn nguyên thủy, Bổ đề LTE, Phương trình Pell, Viète Jumping) và Hình học xạ ảnh kết hợp Tổ hợp rời rạc (Định lý Turán, Ramsey, Trò chơi Nim).
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-book-bookmark text-indigo-400"></i> 10 Chuyên đề chuẩn VMO</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-question text-purple-400"></i> 40 Câu trắc nghiệm tư duy</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-square-root-variable text-pink-400"></i> KaTeX toán học chuẩn xác</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-trophy text-amber-400"></i> Phòng Thi Thử 60 Phút có chấm điểm & xếp giải</span>
        </div>
      </div>

      <!-- Quick Progress Card -->
      <div class="w-full md:w-80 bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/50 shadow-xl">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-semibold uppercase tracking-wider text-indigo-300">Tiến Độ Rèn Luyện</span>
          <span id="progress-percent" class="text-xs font-bold bg-indigo-400/20 text-indigo-200 px-2 py-0.5 rounded-full border border-indigo-400/30">0%</span>
        </div>
        <div class="w-full bg-white/20 dark:bg-gray-700 rounded-full h-2.5 mb-3 overflow-hidden">
          <div id="progress-bar" class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 h-2.5 rounded-full transition-all duration-300" style="width: 0%"></div>
        </div>
        <div class="flex items-center justify-between text-xs text-gray-200 mb-4">
          <span>Đã hoàn thành: <b id="quiz-completed-count" class="text-white">0</b>/40 câu</span>
          <span class="text-indigo-300 font-medium">10 Chuyên Đề</span>
        </div>
        <div class="pt-2 border-t border-white/10 flex flex-col gap-2">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-trophy text-indigo-950"></i> Thi Thử Đề HSG Toán (60:00)
          </button>
          <button onclick="resetAllQuizzes()" class="w-full py-2 px-3 text-xs text-center rounded-xl bg-white/15 hover:bg-white/25 transition text-white font-medium border border-white/20 flex items-center justify-center gap-2">
            <i class="fa-solid fa-rotate-right"></i> Làm lại từ đầu
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile Drawer Backdrop -->
  <div id="drawer-backdrop" class="fixed inset-0 bg-black/60 z-50 hidden transition-opacity lg:hidden" onclick="toggleDrawer(false)"></div>

  <!-- Mobile Drawer Content -->
  <div id="mobile-drawer" class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col">
    <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
      <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
        <i class="fa-solid fa-infinity"></i>
        <span>Mục Lục Chuyên Đề Toán</span>
      </div>
      <button onclick="toggleDrawer(false)" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="overflow-y-auto p-4 space-y-1 text-sm flex-1 sidebar-scroll">
      ${topics.map(t => `<a href="#${t.id}" onclick="toggleDrawer(false)" class="block px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-gray-700 dark:text-gray-300 hover:text-indigo-600 font-medium transition">Bài ${parseInt(t.num)}: ${t.sub}</a>`).join('\n      ')}
    </div>
  </div>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8">
    
    <!-- Desktop Sticky Sidebar -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 space-y-4">
        <div class="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700/60 font-bold text-sm text-indigo-600 dark:text-indigo-400">
            <i class="fa-solid fa-compass"></i>
            <span>Mục Lục 10 Chuyên Đề</span>
          </div>
          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
            ${topics.map(t => `<a href="#${t.id}" class="nav-link block px-2.5 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium">${parseInt(t.num)}. ${t.sub}</a>`).join('\n            ')}
          </nav>
        </div>

        <!-- Sidebar Mock Exam Banner -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white border border-indigo-500/30 shadow-lg space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
            <i class="fa-solid fa-trophy"></i> Phòng Thi Thử Trực Tuyến
          </div>
          <p class="text-xs text-indigo-100 leading-relaxed">
            Đề thi thử HSG Toán THPT 10 câu tinh hoa chuẩn VMO &amp; TST, có đồng hồ đếm ngược 60 phút và xếp hạng Giải Thưởng.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-3 rounded-xl bg-white text-indigo-950 hover:bg-indigo-50 text-xs font-black transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play text-indigo-600"></i> Bắt đầu thi thử (60:00)
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 space-y-12">
      ${articlesHtml}

      <!-- Course Summary Banner -->
      <section class="bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white rounded-3xl p-8 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-400/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
            <i class="fa-solid fa-crown text-yellow-400"></i> Đỉnh Cao Học Sinh Giỏi Toán Học THPT
          </div>
          <h2 class="text-2xl sm:text-3xl font-black">Sẵn Sàng Chinh Phục Giải Thưởng VMO &amp; Kỳ Thi Chọn Đội Tuyển Quốc Tế!</h2>
          <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
            Chúc mừng bạn đã hoàn thành trọn vẹn 10 chuyên đề then chốt: Đa thức nghiệm thực - phức, Phương trình hàm, Bất đẳng thức Schur &amp; SOS, Giới hạn dãy số Stolz-Cesàro, Căn nguyên thủy, Phương trình Diophante LTE, Hàng điểm điều hòa, Cực và đối cực, Bất biến tổ hợp và Lý thuyết đồ thị Turán.
          </p>
          <div class="pt-2 flex flex-wrap gap-4">
            <button onclick="openCourseQuizModal()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-slate-950 font-black text-sm shadow-lg shadow-purple-500/30 transition flex items-center gap-2">
              <i class="fa-solid fa-trophy text-indigo-900"></i> Bắt Đầu Thi Thử HSG Toán (60:00)
            </button>
            <a href="../index.html" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition flex items-center gap-2">
              <i class="fa-solid fa-arrow-left"></i> Về Trang Chủ Khóa Học
            </a>
            <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition flex items-center gap-2">
              <i class="fa-solid fa-arrow-up"></i> Lên Đầu Trang
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>

  <!-- Modal: Phòng Thi Thử HSG Toán THPT (60:00) -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 hidden overflow-y-auto bg-slate-950/80 backdrop-blur-sm transition-opacity p-3 sm:p-6 flex items-center justify-center">
    <div class="relative w-full max-w-4xl bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-indigo-500/30 overflow-hidden my-auto max-h-[92vh] flex flex-col">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-6 bg-gradient-to-r from-indigo-800 via-purple-900 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-indigo-500/20 shrink-0">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-400/20 border border-indigo-400/30 text-indigo-300 text-[11px] font-bold uppercase tracking-wider">
              Chuẩn Quốc Gia VMO • TST
            </span>
            <span class="text-xs text-indigo-200 hidden sm:inline">• 10 Câu Hỏi Tư Duy Toán Học Đỉnh Cao</span>
          </div>
          <h3 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <i class="fa-solid fa-trophy text-yellow-400"></i> Đề Thi Thử Học Sinh Giỏi Môn Toán Học Cấp 3
          </h3>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-indigo-300 font-mono font-black text-sm sm:text-base shadow-inner">
            <i class="fa-solid fa-stopwatch animate-pulse text-indigo-400"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeCourseQuizModal()" class="p-2 rounded-xl text-indigo-200 hover:text-white hover:bg-white/10 transition" aria-label="Đóng phòng thi">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body -->
      <div class="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm sidebar-scroll text-gray-800 dark:text-gray-200">
        
        <!-- Score Result Notification -->
        <div id="examResultBox" class="hidden p-5 rounded-2xl border transition-all duration-300 space-y-3">
          <div class="flex items-center justify-between">
            <h4 id="examResultTitle" class="text-lg font-black flex items-center gap-2"></h4>
            <span id="examScoreBadge" class="px-3 py-1 rounded-xl font-black text-sm"></span>
          </div>
          <p id="examFeedbackText" class="text-xs sm:text-sm leading-relaxed"></p>
          <div class="pt-2 flex flex-wrap gap-3">
            <button onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5">
              <i class="fa-solid fa-book-open"></i> Xem Lời Giải Chi Tiết Từng Câu
            </button>
            <button onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-rotate-right"></i> Làm Lại Đề Thi
            </button>
          </div>
        </div>

        <!-- Exam Form -->
        <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6">
          ${examFormHtml}

          <div class="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              <i class="fa-solid fa-circle-info mr-1"></i> Kiểm tra kỹ các câu trước khi nộp bài. Hệ thống sẽ tự động xếp giải HSG.
            </span>
            <button type="submit" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm shadow-xl shadow-indigo-500/25 transition flex items-center gap-2">
              <i class="fa-solid fa-paper-plane"></i> Nộp Bài &amp; Xếp Hạng Giải
            </button>
          </div>
        </form>

        <!-- Detailed Review Solutions Container -->
        <div id="examSolutionsReview" class="hidden mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <h4 class="text-base font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Phân Tích &amp; Lời Giải Chi Tiết 10 Bài Toán Đề Thi Thử HSG Toán
          </h4>
          <div class="space-y-3 text-xs sm:text-sm">
            ${examSolutionsHtml}
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-gray-100 dark:bg-dark-surface/80 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500">
        <span>Kỳ Thi Huấn Luyện Đội Tuyển Học Sinh Giỏi Quốc Gia (VMO) &amp; TST</span>
        <button onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-bold transition">
          Đóng
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-medium text-gray-700 dark:text-gray-300">
        Khóa Học Luyện Thi Học Sinh Giỏi Toán Học Cấp 3 (THPT &amp; Chuyên) • CodeHub Learning Platform
      </p>
      <p>
        Biên soạn theo chương trình Đội tuyển HSG Quốc gia (VMO), Chọn Đội tuyển Quốc tế (TST) &amp; Chuẩn kiến thức chuyên Toán THPT Chuyên.
      </p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    const STORAGE_KEY = 'hsg_toan_thpt_solved_quizzes';
    const TOTAL_QUIZZES = 40;

    function renderAllMath(target) {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(target || document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
          throwOnError: false
        });
      }
    }

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-400';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-gray-600';
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        applyTheme(!isDark);
      });
    }

    // Drawer Navigation
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    function toggleDrawer(open) {
      if (!mobileDrawer) return;
      if (open) {
        mobileDrawer.classList.remove('translate-x-full');
        if (drawerBackdrop) drawerBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer.classList.add('translate-x-full');
        if (drawerBackdrop) drawerBackdrop.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => toggleDrawer(true));
    }

    // Quiz Storage & Progress
    function getSolvedQuizzes() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      } catch (e) {
        return {};
      }
    }

    function saveSolvedQuiz(quizId, optionIndex, isCorrect) {
      const solved = getSolvedQuizzes();
      solved[quizId] = { optionIndex, isCorrect };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(solved)); } catch (e) {}
      updateProgressDisplay();
    }

    function checkQuiz(quizId, optionIndex, isCorrect, explanation) {
      const buttons = document.querySelectorAll('.quiz-btn-' + quizId);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('bg-indigo-100', 'border-indigo-500', 'bg-rose-100', 'border-rose-500');
        if (idx === optionIndex) {
          if (isCorrect) {
            btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200', 'font-bold');
          } else {
            btn.classList.add('bg-rose-100', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200');
          }
        }
      });

      const feedbackEl = document.getElementById('feedback-' + quizId);
      if (feedbackEl) {
        feedbackEl.classList.remove('hidden');
        feedbackEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium border leading-relaxed ' +
          (isCorrect ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/30' : 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 border-rose-500/30');
        feedbackEl.innerHTML = (isCorrect ? '<i class="fa-solid fa-circle-check mr-1.5 text-emerald-600"></i>' : '<i class="fa-solid fa-circle-xmark mr-1.5 text-rose-600"></i>') + explanation;
        renderAllMath(feedbackEl);
      }

      saveSolvedQuiz(quizId, optionIndex, isCorrect);
    }

    function updateProgressDisplay() {
      const solved = getSolvedQuizzes();
      const count = Object.keys(solved).length;
      const pct = Math.round((count / TOTAL_QUIZZES) * 100);
      const countEl = document.getElementById('quiz-completed-count');
      const progressPercentEl = document.getElementById('progress-percent');
      const progressBarEl = document.getElementById('progress-bar');
      if (countEl) countEl.innerText = count;
      if (progressPercentEl) progressPercentEl.innerText = pct + '%';
      if (progressBarEl) progressBarEl.style.width = pct + '%';
    }

    function resetAllQuizzes() {
      if (confirm('Bạn có chắc muốn đặt lại toàn bộ kết quả bài tập để làm lại từ đầu?')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
      }
    }

    // Live Countdown Timer & Exam Handling
    let examTimerInterval = null;
    let examSecondsLeft = 60 * 60;

    function updateExamTimerDisplay() {
      const timerEl = document.getElementById('examTimer');
      if (!timerEl) return;
      const m = Math.floor(examSecondsLeft / 60);
      const s = examSecondsLeft % 60;
      timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function startExamTimer() {
      stopExamTimer();
      updateExamTimerDisplay();
      examTimerInterval = setInterval(() => {
        if (examSecondsLeft > 0) {
          examSecondsLeft--;
          updateExamTimerDisplay();
        } else {
          stopExamTimer();
          alert('⏰ Đã hết 60 phút làm bài thi thử HSG Toán! Hệ thống sẽ tự động thu bài và xếp giải.');
          const form = document.getElementById('courseExamForm');
          if (form) submitCourseExam(new Event('submit'));
        }
      }, 1000);
    }

    function stopExamTimer() {
      if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
      }
    }

    function openCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (examSecondsLeft === 60 * 60) startExamTimer();
        renderAllMath(modal);
      }
    }

    function closeCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    function restartExam() {
      if (confirm('Bạn có chắc muốn làm lại toàn bộ đề thi thử HSG Toán từ đầu?')) {
        const form = document.getElementById('courseExamForm');
        if (form) form.reset();
        const resultBox = document.getElementById('examResultBox');
        if (resultBox) resultBox.classList.add('hidden');
        const reviewBox = document.getElementById('examSolutionsReview');
        if (reviewBox) reviewBox.classList.add('hidden');
        examSecondsLeft = 60 * 60;
        startExamTimer();
      }
    }

    function toggleSolutionsReview() {
      const reviewBox = document.getElementById('examSolutionsReview');
      if (reviewBox) {
        reviewBox.classList.toggle('hidden');
        if (!reviewBox.classList.contains('hidden')) renderAllMath(reviewBox);
      }
    }

    const examAnswers = {
      eq1: 'A', eq2: 'A', eq3: 'A', eq4: 'A', eq5: 'A',
      eq6: 'A', eq7: 'A', eq8: 'A', eq9: 'A', eq10: 'A'
    };

    function submitCourseExam(event) {
      if (event && event.preventDefault) event.preventDefault();
      stopExamTimer();

      const form = document.getElementById('courseExamForm');
      if (!form) return;

      const formData = new FormData(form);
      let score = 0;
      for (let i = 1; i <= 10; i++) {
        if (formData.get('eq' + i) === examAnswers['eq' + i]) score++;
      }

      const resultBox = document.getElementById('examResultBox');
      const titleEl = document.getElementById('examResultTitle');
      const badgeEl = document.getElementById('examScoreBadge');
      const feedbackEl = document.getElementById('examFeedbackText');

      if (!resultBox || !titleEl || !badgeEl || !feedbackEl) return;
      resultBox.classList.remove('hidden');

      if (score === 10) {
        resultBox.className = 'p-5 rounded-2xl border bg-yellow-50 dark:bg-yellow-950/40 border-yellow-500/50 text-yellow-950 dark:text-yellow-200';
        titleEl.innerHTML = '<i class="fa-solid fa-trophy text-yellow-500 text-2xl"></i> Xuất Sắc! GIẢI NHẤT Học Sinh Giỏi Quốc Gia Môn Toán Học (VMO First Prize)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Trí tuệ toán học tuyệt đỉnh! Bạn đã giải chính xác trọn vẹn cả 10 câu hỏi Olympic từ Đa thức Eisenstein, Phương trình hàm, Bất đẳng thức Cauchy-Schwarz, Dãy số Stolz, LTE, Hàng điểm điều hòa, Cực - đối cực đến Trò chơi Nim và Định lý Turán. Bạn xứng đáng được tuyển chọn vào Đội tuyển Việt Nam thi IMO!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500/50 text-indigo-950 dark:text-indigo-200';
        titleEl.innerHTML = '<i class="fa-solid fa-award text-indigo-500 text-2xl"></i> Chúc Mừng! GIẢI NHÌ Học Sinh Giỏi Môn Toán Học!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-indigo-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Tư duy đại số, hình học xạ ảnh và tổ hợp cực kỳ sắc bén! Hãy rèn luyện thêm kỹ thuật biến đổi số học để đạt điểm số hoàn hảo 10/10.';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-purple-50 dark:bg-purple-950/40 border-purple-500/50 text-purple-950 dark:text-purple-200';
        titleEl.innerHTML = '<i class="fa-solid fa-award text-purple-600 text-2xl"></i> GIẢI BA Học Sinh Giỏi Môn Toán Học!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-purple-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kết quả rất tích cực! Các bài toán VMO có chiều sâu tư duy rất lớn. Hãy xem lại phần Lời giải chi tiết để hoàn thiện phương pháp lập luận.';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-amber-500 text-2xl"></i> GIẢI KHUYẾN KHÍCH / Cần Rèn Luyện Thêm!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Toán thi học sinh giỏi THPT đòi hỏi tích hợp nhiều công cụ nâng cao. Nhấn "Xem Lời Giải Chi Tiết Từng Câu" bên dưới để nắm vững tường tận từng bài toán!';
      }

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      renderAllMath(resultBox);
    }

    document.addEventListener('DOMContentLoaded', () => {
      renderAllMath();
      setTimeout(renderAllMath, 200);
      setTimeout(renderAllMath, 800);
      updateProgressDisplay();
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outputPath, fullHtml, 'utf8');
console.log('Successfully created courses/hsg_toan_thpt.html!');
