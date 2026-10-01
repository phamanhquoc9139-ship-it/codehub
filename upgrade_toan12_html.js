const fs = require('fs');
const path = require('path');

// Second quiz data for each of the 19 lessons in Toán 12
const extraQuizzes = {
  "bai-1": {
    q: "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ có bảng xét dấu đạo hàm: $f'(x)$ đổi dấu qua các điểm $x = -2$ (từ âm sang dương), $x = 0$ (từ dương sang âm) và $x = 3$ (từ âm sang dương). Số điểm cực trị của hàm số là:",
    opts: [
      "3 điểm cực trị (2 cực tiểu và 1 cực đại)",
      "2 điểm cực trị",
      "1 điểm cực trị",
      "4 điểm cực trị"
    ],
    correct: 0,
    expl: "Đạo hàm $f'(x)$ đổi dấu khi đi qua 3 điểm phân biệt $x = -2, x = 0, x = 3$. Do đó hàm số có đúng 3 điểm cực trị (tại $x = -2$ và $x = 3$ là điểm cực tiểu, tại $x = 0$ là điểm cực đại)."
  },
  "bai-2": {
    q: "Giá trị lớn nhất của hàm số $f(x) = \\frac{x + 1}{x - 1}$ trên đoạn $[2; 4]$ bằng:",
    opts: [
      "3 (đạt tại $x = 2$)",
      "\\frac{5}{3}",
      "1",
      "4"
    ],
    correct: 0,
    expl: "Đạo hàm $f'(x) = \\frac{-2}{(x-1)^2} < 0, \\forall x \\in [2; 4]$. Do đó hàm số nghịch biến trên $[2; 4]$, giá trị lớn nhất đạt tại đầu mút bên trái: $\\max_{[2; 4]} f(x) = f(2) = \\frac{2+1}{2-1} = 3$."
  },
  "bai-3": {
    q: "Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 1}{x - 1}$ là:",
    opts: [
      "$y = x + 3$",
      "$y = x - 1$",
      "$y = x + 1$",
      "$y = 2x + 1$"
    ],
    correct: 0,
    expl: "Chia đa thức: $\\frac{x^2 + 2x - 1}{x - 1} = x + 3 + \\frac{2}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\frac{2}{x - 1} = 0$ nên tiệm cận xiên là đường thẳng $y = x + 3$."
  },
  "bai-4": {
    q: "Đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) có hệ số $a > 0$ và có 2 điểm cực trị. Hình dạng nhánh ngoài cùng bên phải của đồ thị sẽ:",
    opts: [
      "Đi lên phía trên ($+\\infty$) khi $x \\to +\\infty$",
      "Đi xuống phía dưới ($-\\infty$)",
      "Nằm ngang song song với trục hoành",
      "Tiệm cận với trục tung"
    ],
    correct: 0,
    expl: "Vì $a > 0$ nên khi $x \\to +\\infty$, $y \\to +\\infty$. Do đó nhánh ngoài cùng bên phải của đồ thị luôn hướng lên trên."
  },
  "bai-5": {
    q: "Một hộp không nắp được làm từ tấm bìa hình vuông cạnh $a = 24\\text{ cm}$ bằng cách cắt đi 4 hình vuông cạnh $x$ ở bốn góc rồi gập lại. Thể tích hộp đạt cực đại khi $x$ bằng:",
    opts: [
      "$x = 4\\text{ cm}$",
      "$x = 6\\text{ cm}$",
      "$x = 3\\text{ cm}$",
      "$x = 8\\text{ cm}$"
    ],
    correct: 0,
    expl: "Thể tích $V(x) = x(24 - 2x)^2 = 4x(12 - x)^2$ với $0 < x < 12$. Đạo hàm $V'(x) = 4(12 - x)(12 - 3x) = 0 \\Leftrightarrow x = 4\\text{ cm}$. Khi đó thể tích cực đại là $V(4) = 4 \\times 16^2 = 1024\\text{ cm}^3$."
  },
  "bai-6": {
    q: "Cho hình hộp $ABCD.A'B'C'D'$. Quy tắc hình hộp trong không gian khẳng định tổng ba vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng vectơ nào?",
    opts: [
      "$\\vec{AC'}$ (vectơ đường chéo xuất phát từ đỉnh A)",
      "$\\vec{AC}$",
      "$\\vec{BD'}$",
      "$\\vec{A'C}$"
    ],
    correct: 0,
    expl: "Theo quy tắc hình hộp trong không gian: tổng 3 vectơ xuất phát từ cùng một đỉnh trên 3 cạnh của hình hộp bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
  },
  "bai-7": {
    q: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(2; -3; 5)$ lên mặt phẳng toạ độ $(Oxy)$ có toạ độ là:",
    opts: [
      "$M_1(2; -3; 0)$",
      "$M_2(0; 0; 5)$",
      "$M_3(2; 0; 5)$",
      "$M_4(0; -3; 5)$"
    ],
    correct: 0,
    expl: "Khi chiếu vuông góc lên mặt phẳng $(Oxy)$, hoành độ $x$ và tung độ $y$ giữ nguyên, cao độ $z$ bằng 0. Do đó điểm ảnh là $(2; -3; 0)$."
  },
  "bai-8": {
    q: "Trong không gian Oxyz, cho hai vectơ $\\vec{u} = (1; 2; -1)$ và $\\vec{v} = (2; -1; 3)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
    opts: [
      "-3",
      "3",
      "7",
      "0"
    ],
    correct: 0,
    expl: "Áp dụng biểu thức toạ độ tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2 = 1(2) + 2(-1) + (-1)(3) = 2 - 2 - 3 = -3$."
  },
  "bai-9": {
    q: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm được tính bằng công thức nào sau đây?",
    opts: [
      "$\\Delta_Q = Q_3 - Q_1$",
      "$\\Delta_Q = Q_2 - Q_1$",
      "$\\Delta_Q = Q_3 - Q_2$",
      "$\\Delta_Q = \\frac{Q_1 + Q_3}{2}$"
    ],
    correct: 0,
    expl: "Khoảng tứ phân vị đo độ phân tán của 50% số liệu chính giữa, được định nghĩa là hiệu giữa tứ phân vị thứ ba và tứ phân vị thứ nhất: $\\Delta_Q = Q_3 - Q_1$."
  },
  "bai-10": {
    q: "Khi so sánh mức độ phân tán của hai mẫu số liệu ghép nhóm có cùng đơn vị đo và số trung bình xấp xỉ nhau, mẫu số liệu nào có độ biến động, bấp bênh lớn hơn?",
    opts: [
      "Mẫu số liệu có phương sai và độ lệch chuẩn lớn hơn",
      "Mẫu số liệu có phương sai nhỏ hơn",
      "Mẫu số liệu có cỡ mẫu nhỏ hơn",
      "Hai mẫu số liệu có độ biến động như nhau"
    ],
    correct: 0,
    expl: "Phương sai $s^2$ và độ lệch chuẩn $s$ đo lường độ phân tán quanh số trung bình. Giá trị $s$ càng lớn chứng tỏ số liệu càng phân tán rộng, bấp bênh và rủi ro cao hơn."
  },
  "bai-11": {
    q: "Họ nguyên hàm của hàm số $f(x) = e^{2x} + \\frac{1}{x}$ trên khoảng $(0; +\\infty)$ là:",
    opts: [
      "$\\frac{1}{2}e^{2x} + \\ln x + C$",
      "$2e^{2x} - \\frac{1}{x^2} + C$",
      "$e^{2x} + \\ln x + C$",
      "$\\frac{1}{2}e^{2x} - \\ln x + C$"
    ],
    correct: 0,
    expl: "Ta có $\\int e^{2x} dx = \\frac{1}{2}e^{2x}$ và $\\int \\frac{1}{x} dx = \\ln|x| = \\ln x$ (với $x > 0$). Do đó $\\int f(x) dx = \\frac{1}{2}e^{2x} + \\ln x + C$."
  },
  "bai-12": {
    q: "Giá trị của tích phân $I = \\int_0^1 (3x^2 + 2x) dx$ bằng:",
    opts: [
      "2",
      "5",
      "1",
      "3"
    ],
    correct: 0,
    expl: "Nguyên hàm của $3x^2 + 2x$ là $x^3 + x^2$. Áp dụng công thức Newton-Leibniz: $I = [x^3 + x^2]_0^1 = (1 + 1) - 0 = 2$."
  },
  "bai-13": {
    q: "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$ quanh trục $Ox$ được tính theo công thức:",
    opts: [
      "$V = \\pi \\int_a^b [f(x)]^2 dx$",
      "$V = \\int_a^b [f(x)]^2 dx$",
      "$V = \\pi \\int_a^b |f(x)| dx$",
      "$V = 2\\pi \\int_a^b f(x) dx$"
    ],
    correct: 0,
    expl: "Theo công thức thể tích khối tròn xoay chuẩn trong SGK Giải tích 12: $V = \\pi \\int_a^b y^2 dx = \\pi \\int_a^b [f(x)]^2 dx$."
  },
  "bai-14": {
    q: "Mặt phẳng đi qua điểm $M(1; 2; 3)$ và nhận vectơ $\\vec{n} = (2; -1; 4)$ làm vectơ pháp tuyến có phương trình tổng quát là:",
    opts: [
      "$2x - y + 4z - 12 = 0$",
      "$2x - y + 4z + 12 = 0$",
      "$x + 2y + 3z - 12 = 0$",
      "$2x - y + 4z = 0$"
    ],
    correct: 0,
    expl: "Phương trình mặt phẳng: $2(x - 1) - 1(y - 2) + 4(z - 3) = 0 \\Leftrightarrow 2x - 2 - y + 2 + 4z - 12 = 0 \\Leftrightarrow 2x - y + 4z - 12 = 0$."
  },
  "bai-15": {
    q: "Vectơ nào sau đây là một vectơ chỉ phương của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 3}{-1} = \\frac{z - 4}{5}$?",
    opts: [
      "$\\vec{u} = (2; -1; 5)$",
      "$\\vec{u} = (1; -3; 4)$",
      "$\\vec{u} = (-1; 3; -4)$",
      "$\\vec{u} = (2; 1; 5)$"
    ],
    correct: 0,
    expl: "Phương trình chính tắc $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$ có VTCP là $\\vec{u} = (a; b; c) = (2; -1; 5)$."
  },
  "bai-16": {
    q: "Góc $\\varphi$ giữa đường thẳng $d$ có VTCP $\\vec{u}$ và mặt phẳng $(P)$ có VTPT $\\vec{n}$ được tính theo công thức lượng giác nào?",
    opts: [
      "$\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$",
      "$\\cos \\varphi = \\frac{\\vec{u} \\cdot \\vec{n}}{|\\vec{u}| \\cdot |\\vec{n}|}$",
      "$\\tan \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$",
      "$\\cos \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$"
    ],
    correct: 0,
    expl: "Vì góc giữa đường thẳng và mặt phẳng là góc phụ với góc giữa VTCP và VTPT ($90^\\circ - \\theta$) nên $\\sin \\varphi = |\\cos \\theta| = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$."
  },
  "bai-17": {
    q: "Mặt cầu $(S)$ có phương trình $(x + 1)^2 + (y - 2)^2 + (z + 3)^2 = 25$ có toạ độ tâm $I$ và bán kính $R$ lần lượt là:",
    opts: [
      "$I(-1; 2; -3)$ và $R = 5$",
      "$I(1; -2; 3)$ và $R = 25$",
      "$I(-1; 2; -3)$ và $R = 25$",
      "$I(1; -2; 3)$ và $R = 5$"
    ],
    correct: 0,
    expl: "Phương trình $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ cho tâm $I(a; b; c) = (-1; 2; -3)$ và bán kính $R = \\sqrt{25} = 5$."
  },
  "bai-18": {
    q: "Cho hai biến cố $A$ và $B$ có $P(B) = 0.5$ và $P(A \\cap B) = 0.2$. Xác suất có điều kiện $P(A|B)$ bằng:",
    opts: [
      "0.4",
      "0.1",
      "0.7",
      "0.25"
    ],
    correct: 0,
    expl: "Theo định nghĩa xác suất có điều kiện: $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = 0.4$."
  },
  "bai-19": {
    q: "Cho $\\{B_1, B_2\\}$ là một hệ đầy đủ các biến cố với $P(B_1) = 0.6, P(B_2) = 0.4$. Biết $P(A|B_1) = 0.1$ và $P(A|B_2) = 0.2$. Theo công thức xác suất toàn phần, $P(A)$ bằng:",
    opts: [
      "0.14",
      "0.30",
      "0.08",
      "0.12"
    ],
    correct: 0,
    expl: "Áp dụng công thức xác suất toàn phần: $P(A) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2) = 0.6 \\times 0.1 + 0.4 \\times 0.2 = 0.06 + 0.08 = 0.14$."
  }
};

const filePath = path.join(__dirname, 'courses', 'toan_12.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original toan_12.html size:', html.length);

// 1. Add KaTeX scripts into head if missing
if (!html.includes('katex.min.css')) {
  const katexTags = `  <!-- KaTeX for beautiful Math Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
`;
  html = html.replace('</head>', `${katexTags}</head>`);
  console.log('Added KaTeX CDN links to <head>');
}

// 2. Add Reading Progress Bar right after <body>
if (!html.includes('id="progressBar"')) {
  const progressBar = `  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 z-50 transition-all duration-150" style="width: 0%;"></div>
`;
  html = html.replace('<body class="', `${progressBar}<body class="`);
  console.log('Added Reading Progress Bar');
}

// 3. Add Course Exam button in Nav (next to themeToggle)
if (!html.includes('openCourseQuizModal()')) {
  const examBtn = `<!-- Exam Modal Button -->
          <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-sm transition">
            <i class="fa-solid fa-file-signature"></i>
            <span class="hidden sm:inline">Kiểm tra toàn khóa</span>
            <span>(10 câu)</span>
          </button>
          `;
  html = html.replace('<button id="themeToggle"', `${examBtn}<button id="themeToggle"`);
  console.log('Added Exam button to navbar');
}

// 4. Add Live search bar in sidebar
if (!html.includes('id="lessonSearch"')) {
  const searchBar = `<!-- Search Bar -->
          <div class="mb-3">
            <div class="relative">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-400 text-xs"></i>
              <input type="text" 
                     id="lessonSearch" 
                     placeholder="Tìm kiếm bài học toán 12..." 
                     class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
            </div>
          </div>
          `;
  html = html.replace('<nav>', `${searchBar}<nav>`);
  console.log('Added Search Bar to sidebar');
}

// 5. Enhance each article by adding Question 2
for (let i = 1; i <= 19; i++) {
  const id = `bai-${i}`;
  const extra = extraQuizzes[id];
  if (!extra) continue;

  // Find article
  const articleRegex = new RegExp(`(<article id="${id}"[\\s\\S]*?)(<div class="p-4 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700">)([\\s\\S]*?)(<\\/article>)`);
  const match = html.match(articleRegex);
  if (match) {
    const letters = ['A', 'B', 'C', 'D'];
    const q2OptionsHtml = extra.opts.map((opt, oIdx) => {
      const isCorrect = oIdx === extra.correct;
      return `
              <button onclick="checkQuiz(this, ${isCorrect})" class="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-left transition-all flex items-center gap-2">
                <span class="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center font-bold text-[10px] text-gray-500">${letters[oIdx]}</span>
                <span class="text-gray-700 dark:text-gray-300">${opt}</span>
              </button>`;
    }).join('');

    const q2Block = `
        <!-- Câu hỏi 2 -->
        <div class="p-4 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 mt-4">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question"></i> Câu hỏi trắc nghiệm củng cố (Câu 2)
            </span>
            <span class="text-[11px] text-gray-400">Chọn 1 đáp án đúng</span>
          </div>
          <p class="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">${extra.q}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${q2OptionsHtml}
          </div>
          <div class="quiz-feedback hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed"></div>
          <input type="hidden" class="quiz-expl" value="${extra.expl.replace(/"/g, '&quot;')}">
        </div>`;

    // Only add if not already added
    if (!match[3].includes('(Câu 2)')) {
      const newArticleContent = match[1] + match[2] + match[3] + q2Block + '\n      </article>';
      html = html.replace(match[0], newArticleContent);
    }
  }
}
console.log('Enhanced all 19 lessons with dual quizzes');

// 6. Add Course Exam Modal before </body>
const examModalHtml = `
  <!-- Course Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 font-bold text-xs">
            Bài thi đánh giá tổng kết
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Toán Học Lớp 12
          </h3>
        </div>
        <button onclick="closeCourseQuizModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Exam Form -->
      <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6 text-sm text-gray-700 dark:text-gray-300">
        <!-- Q1 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            1. Cho hàm số $y = x^3 - 3x + 2$. Điểm cực đại của hàm số là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-sky-600">
              <span>A. $x = -1$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-sky-600">
              <span>B. $x = 1$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-sky-600">
              <span>C. $x = 0$</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 5$ trên đoạn $[0; 2]$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-sky-600">
              <span>A. 4 (tại $x = 1$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-sky-600">
              <span>B. 5</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-sky-600">
              <span>C. 13</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là đường thẳng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-sky-600">
              <span>A. $y = 3$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-sky-600">
              <span>B. $x = -2$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-sky-600">
              <span>C. $y = -\\frac{1}{2}$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - x + 1}{x - 1}$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-sky-600">
              <span>A. $y = 2x + 1$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-sky-600">
              <span>B. $y = 2x - 1$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-sky-600">
              <span>C. $y = x + 2$</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Trong không gian Oxyz, toạ độ của vectơ $\\vec{u} = 2\\vec{i} - 3\\vec{j} + 4\\vec{k}$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-sky-600">
              <span>A. $(2; -3; 4)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-sky-600">
              <span>B. $(2; 3; 4)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-sky-600">
              <span>C. $(-3; 2; 4)$</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Họ nguyên hàm của hàm số $f(x) = \\cos 2x$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-sky-600">
              <span>A. $\\frac{1}{2}\\sin 2x + C$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-sky-600">
              <span>B. $-\\frac{1}{2}\\sin 2x + C$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-sky-600">
              <span>C. $2\\sin 2x + C$</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Diện tích hình phẳng giới hạn bởi đồ thị $y = x^2 - 4$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-sky-600">
              <span>A. $\\frac{16}{3}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-sky-600">
              <span>B. $-\\frac{16}{3}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-sky-600">
              <span>C. 8</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Mặt phẳng $(P)$ đi qua $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$ có phương trình theo đoạn chắn là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-sky-600">
              <span>A. $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-sky-600">
              <span>B. $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 0$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-sky-600">
              <span>C. $x + 2y + 3z = 1$</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Trong không gian Oxyz, bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-sky-600">
              <span>A. $4$ ($R = \\sqrt{1^2 + (-2)^2 + 3^2 - (-2)} = \\sqrt{16} = 4$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-sky-600">
              <span>B. $16$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-sky-600">
              <span>C. $\\sqrt{12}$</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Cho hai biến cố A và B độc lập với nhau có $P(A) = 0.4$ và $P(B) = 0.5$. Xác suất của biến cố hợp $P(A \\cup B)$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-sky-600">
              <span>A. $0.7$ ($P(A \\cup B) = P(A) + P(B) - P(A)P(B) = 0.9 - 0.2 = 0.7$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-sky-600">
              <span>B. $0.9$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-sky-600">
              <span>C. $0.2$</span>
            </label>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 transition">
            Đóng
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-sky-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white">
          Kết quả của bạn: 0/10 điểm
        </h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          Đang tải đánh giá năng lực...
        </p>
        <button onclick="resetCourseExam()" class="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-700 transition">
          <i class="fa-solid fa-rotate-right mr-1"></i> Làm lại bài thi
        </button>
      </div>
    </div>
  </div>
`;

// Exam modal HTML will be inserted along with script section below

// 7. Update script section with KaTeX auto-rendering, exam logic and search filter
const updatedScript = `  <script>
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }
    themeToggle?.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // Reading Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = scrolled + '%';
    });

    // Search lessons in sidebar
    const searchInput = document.getElementById('lessonSearch');
    searchInput?.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('.sidebar-item');
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });

    // Initialize KaTeX on page load
    document.addEventListener('DOMContentLoaded', function() {
      renderAllMath();
    });

    function renderAllMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    // Quiz evaluation
    function checkQuiz(btn, isCorrect) {
      const parent = btn.closest('.p-4');
      const feedback = parent.querySelector('.quiz-feedback');
      const expl = parent.querySelector('.quiz-expl').value;
      const allBtns = parent.querySelectorAll('button[onclick^="checkQuiz"]');
      
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-emerald-500', 'bg-emerald-50');
      });

      if (isCorrect) {
        btn.classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-950/40', 'text-green-700', 'dark:text-green-300');
        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-lg text-xs leading-relaxed bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 block';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-green-600"></i> Chính xác!</span>' + '<p class="mt-1">' + expl + '</p>';
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-700', 'dark:text-rose-300');
        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 block';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-xmark text-rose-600"></i> Chưa chính xác!</span>' + '<p class="mt-1">' + expl + '</p>';
      }

      if (typeof renderMathInElement === 'function') {
        renderMathInElement(feedback, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    // Modal Course Quiz
    function openCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) modal.classList.remove('hidden');
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(modal, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }
    function closeCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) modal.classList.add('hidden');
    }

    // Course Exam Submission
    const examAnswers = {
      eq1: 'A',
      eq2: 'A',
      eq3: 'A',
      eq4: 'A',
      eq5: 'A',
      eq6: 'A',
      eq7: 'A',
      eq8: 'A',
      eq9: 'A',
      eq10: 'A'
    };

    function submitCourseExam(e) {
      e.preventDefault();
      const form = document.getElementById('courseExamForm');
      let score = 0;

      for (let i = 1; i <= 10; i++) {
        const val = form['eq' + i]?.value;
        if (val === examAnswers['eq' + i]) {
          score++;
        }
      }

      form.classList.add('hidden');
      const resultBox = document.getElementById('courseExamResult');
      resultBox.classList.remove('hidden');
      document.getElementById('examScoreText').innerText = 'Kết quả của bạn: ' + score + '/10 điểm';

      let comment = '';
      if (score >= 9) {
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ chương trình Toán 12 chuẩn bị cho kỳ thi THPT Quốc gia!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các kiến thức Đạo hàm, Tích phân, Oxyz và Xác suất Bayes.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy ôn luyện thêm các dạng bài tập hình không gian Oxyz và công thức xác suất toàn phần nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc kỹ lại lý thuyết và các ví dụ mẫu của từng bài học nhé!';
      }
      document.getElementById('examCommentText').innerText = comment;
    }

    function resetCourseExam() {
      const form = document.getElementById('courseExamForm');
      form.reset();
      form.classList.remove('hidden');
      document.getElementById('courseExamResult').classList.add('hidden');
    }

    // Active sidebar scrollspy
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('aside nav a');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 160;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        sidebarLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-sky-600', 'font-bold');
          } else {
            link.classList.remove('text-sky-600', 'font-bold');
          }
        });
      }
    });
  </script>
`;

// Replace script section and ensure exam modal is properly included before script
const scriptStartIdx = html.indexOf('<script>\n    // Theme toggle');
if (scriptStartIdx !== -1) {
  const scriptEndIdx = html.indexOf('</body>', scriptStartIdx);
  html = html.substring(0, scriptStartIdx) + '\n' + examModalHtml + '\n' + updatedScript + '\n' + html.substring(scriptEndIdx);
  console.log('Updated client-side script block and inserted Exam Modal');
} else {
  html = html.replace('</body>', examModalHtml + '\n' + updatedScript + '\n</body>');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully upgraded courses/toan_12.html! New size:', html.length, 'bytes');
