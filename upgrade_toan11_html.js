const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'toan_11.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original toan_11.html size:', html.length);

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
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 transition-all duration-150" style="width: 0%;"></div>
`;
  html = html.replace('<body class="', `${progressBar}<body class="`);
  console.log('Added Reading Progress Bar');
}

// 3. Add Course Exam button in Nav (next to themeToggle)
if (!html.includes('openCourseQuizModal()')) {
  const examBtn = `<!-- Exam Modal Button -->
          <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold shadow-sm transition">
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
                     placeholder="Tìm kiếm bài học toán 11..." 
                     class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
            </div>
          </div>
          `;
  html = html.replace('<nav>', `${searchBar}<nav>`);
  console.log('Added Search Bar to sidebar');
}

// 5. Add second quiz questions to key lessons across 9 chapters
const extraQuizzes11 = {
  "bai-1": {
    q: "Biết $\\sin\\alpha = \\frac{3}{5}$ và $\\frac{\\pi}{2} < \\alpha < \\pi$. Giá trị của $\\cos\\alpha$ bằng:",
    opts: [
      "$-\\frac{4}{5}$",
      "$\\frac{4}{5}$",
      "$\\pm\\frac{4}{5}$",
      "$-\\frac{3}{4}$"
    ],
    correct: 0,
    expl: "Ta có $\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$. Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư thứ II) nên $\\cos\\alpha < 0$. Do đó $\\cos\\alpha = -\\frac{4}{5}$."
  },
  "bai-2": {
    q: "Công thức nhân đôi nào sau đây là ĐÚNG đối với hàm số côsin?",
    opts: [
      "$\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$",
      "$\\cos 2a = \\cos^2 a + \\sin^2 a$",
      "$\\cos 2a = 2\\cos a$",
      "$\\cos 2a = \\sin^2 a - \\cos^2 a$"
    ],
    correct: 0,
    expl: "Theo công thức nhân đôi chuẩn trong lượng giác: $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$."
  },
  "bai-4": {
    q: "Tập nghiệm của phương trình lượng giác cơ bản $\\cos x = \\frac{1}{2}$ là:",
    opts: [
      "$x = \\pm\\frac{\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$",
      "$x = \\pm\\frac{\\pi}{6} + k2\\pi \\quad (k \\in \\mathbb{Z})$",
      "$x = \\frac{\\pi}{3} + k\\pi \\quad (k \\in \\mathbb{Z})$",
      "$x = \\pm\\frac{2\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$"
    ],
    correct: 0,
    expl: "Phương trình $\\cos x = \\cos\\frac{\\pi}{3} \\Leftrightarrow x = \\pm\\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
  },
  "bai-6": {
    q: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$. Số hạng thứ 10 của cấp số cộng là:",
    opts: [
      "$u_{10} = 32$",
      "$u_{10} = 35$",
      "$u_{10} = 29$",
      "$u_{10} = 30$"
    ],
    correct: 0,
    expl: "Công thức số hạng tổng quát của cấp số cộng: $u_n = u_1 + (n - 1)d$. Với $n = 10$: $u_{10} = 5 + 9 \\times 3 = 5 + 27 = 32$."
  },
  "bai-7": {
    q: "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Tổng của 6 số hạng đầu tiên $S_6$ bằng:",
    opts: [
      "$S_6 = 189$",
      "$S_6 = 192$",
      "$S_6 = 96$",
      "$S_6 = 384$"
    ],
    correct: 0,
    expl: "Công thức tính tổng $n$ số hạng đầu của cấp số nhân: $S_n = u_1 \\cdot \\frac{q^n - 1}{q - 1}$. Với $n = 6$: $S_6 = 3 \\cdot \\frac{2^6 - 1}{2 - 1} = 3 \\times (64 - 1) = 3 \\times 63 = 189$."
  },
  "bai-9": {
    q: "Trong mẫu số liệu ghép nhóm, công thức xác định nhóm chứa trung vị $M_e$ căn cứ vào điều kiện nào?",
    opts: [
      "Nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $\\frac{n}{2}$",
      "Nhóm có tần số lớn nhất",
      "Nhóm chính giữa của bảng phân bố",
      "Nhóm có khoảng cách lớp dài nhất"
    ],
    correct: 0,
    expl: "Trung vị chia mẫu dữ liệu làm 2 phần bằng nhau nên nhóm chứa trung vị $M_e$ là nhóm đầu tiên có tần số tích lũy $cf_i \\ge \\frac{n}{2}$."
  },
  "bai-15": {
    q: "Giá trị của giới hạn dãy số $L = \\lim_{n \\to \\infty} \\frac{3n^2 - 2n + 5}{n^2 + 4n - 1}$ bằng:",
    opts: [
      "3",
      "0",
      "$+\\infty$",
      "5"
    ],
    correct: 0,
    expl: "Chia cả tử và mẫu cho $n^2$ bậc cao nhất: $L = \\lim \\frac{3 - \\frac{2}{n} + \\frac{5}{n^2}}{1 + \\frac{4}{n} - \\frac{1}{n^2}} = \\frac{3 - 0 + 0}{1 + 0 - 0} = 3$."
  },
  "bai-16": {
    q: "Giá trị của giới hạn hàm số $L = \\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ bằng:",
    opts: [
      "2",
      "1",
      "0",
      "Không tồn tại"
    ],
    correct: 0,
    expl: "Khử dạng vô định $\\frac{0}{0}$: $\\lim_{x \\to 1} \\frac{(x - 1)(x + 1)}{x - 1} = \\lim_{x \\to 1} (x + 1) = 1 + 1 = 2$."
  },
  "bai-17": {
    q: "Hàm số $y = f(x)$ được gọi là liên tục tại điểm $x_0$ nếu thỏa mãn điều kiện nào sau đây?",
    opts: [
      "$\\lim_{x \\to x_0} f(x) = f(x_0)$",
      "$f(x_0) > 0$",
      "$\\lim_{x \\to x_0} f(x) = 0$",
      "$f'(x_0) = 0$"
    ],
    correct: 0,
    expl: "Định nghĩa hàm số liên tục tại điểm: $f(x)$ xác định trên khoảng chứa $x_0$, tồn tại giới hạn $\\lim_{x \\to x_0} f(x)$ và giá trị giới hạn đó đúng bằng giá trị hàm số $f(x_0)$."
  },
  "bai-19": {
    q: "Với các số thực dương $a, b$ ($a \\ne 1$), đẳng thức nào sau đây là ĐÚNG về tính chất của logarit?",
    opts: [
      "$\\log_a (x \\cdot y) = \\log_a x + \\log_a y$",
      "$\\log_a (x + y) = \\log_a x + \\log_a y$",
      "$\\log_a (x \\cdot y) = \\log_a x \\cdot \\log_a y$",
      "$\\log_a \\left(\\frac{x}{y}\\right) = \\frac{\\log_a x}{\\log_a y}$"
    ],
    correct: 0,
    expl: "Logarit của một tích bằng tổng các logarit: $\\log_a (xy) = \\log_a x + \\log_a y$."
  },
  "bai-21": {
    q: "Nghiệm của phương trình mũ $2^{x + 1} = 16$ là:",
    opts: [
      "$x = 3$",
      "$x = 4$",
      "$x = 2$",
      "$x = 5$"
    ],
    correct: 0,
    expl: "Ta có $16 = 2^4$. Phương trình tương đương $x + 1 = 4 \\Leftrightarrow x = 3$."
  },
  "bai-23": {
    q: "Điều kiện cần và đủ để đường thẳng d vuông góc với mặt phẳng (P) là:",
    opts: [
      "Đường thẳng d vuông góc với hai đường thẳng cắt nhau cùng nằm trong mặt phẳng (P)",
      "Đường thẳng d vuông góc với một đường thẳng nằm trong (P)",
      "Đường thẳng d vuông góc với hai đường thẳng song song trong (P)",
      "Đường thẳng d cắt mặt phẳng (P)"
    ],
    correct: 0,
    expl: "Theo định lý cơ bản về đường thẳng vuông góc với mặt phẳng: Nếu đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau cùng thuộc mặt phẳng $(P)$ thì $d \\perp (P)$."
  },
  "bai-25": {
    q: "Góc giữa hai mặt phẳng vuông góc với nhau bằng bao nhiêu?",
    opts: [
      "$90^\\circ$",
      "$180^\\circ$",
      "$0^\\circ$",
      "$45^\\circ$"
    ],
    correct: 0,
    expl: "Hai mặt phẳng vuông góc với nhau khi và chỉ khi góc tạo bởi hai mặt phẳng đó bằng đúng $90^\\circ$."
  },
  "bai-29": {
    q: "Cho hai biến cố xung khắc $A$ và $B$ với $P(A) = 0.35$ và $P(B) = 0.45$. Xác suất của biến cố hợp $P(A \\cup B)$ bằng:",
    opts: [
      "0.80",
      "0.10",
      "0.1575",
      "0.70"
    ],
    correct: 0,
    expl: "Vì hai biến cố $A$ và $B$ xung khắc ($A \\cap B = \\emptyset$) nên theo công thức cộng xác suất: $P(A \\cup B) = P(A) + P(B) = 0.35 + 0.45 = 0.80$."
  },
  "bai-30": {
    q: "Cho hai biến cố độc lập $A$ và $B$ với $P(A) = 0.4$ và $P(B) = 0.5$. Xác suất để cả hai biến cố cùng xảy ra $P(A \\cap B)$ là:",
    opts: [
      "0.20",
      "0.90",
      "0.10",
      "0.45"
    ],
    correct: 0,
    expl: "Với hai biến cố độc lập, theo công thức nhân xác suất: $P(A \\cap B) = P(A) \\cdot P(B) = 0.4 \\times 0.5 = 0.20$."
  },
  "bai-32": {
    q: "Đạo hàm của hàm số $y = x \\cdot \\sin x$ bằng:",
    opts: [
      "$y' = \\sin x + x\\cos x$",
      "$y' = x\\cos x$",
      "$y' = \\cos x$",
      "$y' = \\sin x - x\\cos x$"
    ],
    correct: 0,
    expl: "Áp dụng quy tắc đạo hàm của tích $(uv)' = u'v + uv'$: $(x \\cdot \\sin x)' = (x)' \\sin x + x (\\sin x)' = 1 \\cdot \\sin x + x\\cos x = \\sin x + x\\cos x$."
  }
};

// Add second quiz to matching lessons
for (const [id, extra] of Object.entries(extraQuizzes11)) {
  const articleRegex = new RegExp(`(<article id="${id}"[\\s\\S]*?)(<div class="p-4 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700">)([\\s\\S]*?)(<\\/article>)`);
  const match = html.match(articleRegex);
  if (match && !match[3].includes('(Câu 2)')) {
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
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
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

    const newArticleContent = match[1] + match[2] + match[3] + q2Block + '\n      </article>';
    html = html.replace(match[0], newArticleContent);
  }
}
console.log('Added enhanced dual quizzes to key lessons in toan_11.html');

// 6. Exam Modal HTML for Toán 11
const examModalHtml11 = `
  <!-- Course Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-bold text-xs">
            Bài thi đánh giá tổng kết
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Toán Học Lớp 11
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
            1. Tập nghiệm của phương trình lượng giác $\\sin x = \\frac{1}{2}$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-indigo-600">
              <span>A. $x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi \\quad (k \\in \\mathbb{Z})$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-indigo-600">
              <span>B. $x = \\pm\\frac{\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-indigo-600">
              <span>C. $x = \\frac{\\pi}{6} + k\\pi \\quad (k \\in \\mathbb{Z})$</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 4$. Số hạng thứ 10 là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-indigo-600">
              <span>A. $u_{10} = 39$ ($3 + 9 \\times 4 = 39$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-indigo-600">
              <span>B. $u_{10} = 43$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-indigo-600">
              <span>C. $u_{10} = 36$</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Tổng 5 số hạng đầu tiên $S_5$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-indigo-600">
              <span>A. $S_5 = 242$ ($2 \\cdot \\frac{3^5 - 1}{3 - 1} = 242$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-indigo-600">
              <span>B. $S_5 = 486$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-indigo-600">
              <span>C. $S_5 = 162$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm gồm $k$ nhóm được tính bằng công thức nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-indigo-600">
              <span>A. $\\bar{x} = \\frac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n}$ (với $c_i$ là giá trị đại diện và $m_i$ là tần số nhóm)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-indigo-600">
              <span>B. $\\bar{x} = \\frac{c_1 + c_2 + \\dots + c_k}{k}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-indigo-600">
              <span>C. $\\bar{x} = \\frac{m_1 + m_2 + \\dots + m_k}{k}$</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Giá trị của giới hạn dãy số $\\lim_{n \\to \\infty} \\frac{2n^2 - 3n + 1}{n^2 + 5}$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-indigo-600">
              <span>A. 2</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-indigo-600">
              <span>B. 0</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-indigo-600">
              <span>C. $+\\infty$</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Giá trị của giới hạn hàm số $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-indigo-600">
              <span>A. 4 (do $\\lim_{x \\to 2} (x + 2) = 4$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-indigo-600">
              <span>B. 2</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-indigo-600">
              <span>C. 0</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Với các số thực dương $a, b$ ($a \\ne 1$), đẳng thức nào sau đây là ĐÚNG?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-indigo-600">
              <span>A. $\\log_a (x \\cdot y) = \\log_a x + \\log_a y$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-indigo-600">
              <span>B. $\\log_a (x \\cdot y) = \\log_a x \\cdot \\log_a y$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-indigo-600">
              <span>C. $\\log_a (x + y) = \\log_a x + \\log_a y$</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Cho đường thẳng a vuông góc với hai đường thẳng cắt nhau b và c cùng nằm trong mặt phẳng (P). Khi đó:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-indigo-600">
              <span>A. Đường thẳng a vuông góc với mặt phẳng (P)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-indigo-600">
              <span>B. Đường thẳng a song song với mặt phẳng (P)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-indigo-600">
              <span>C. Đường thẳng a nằm trong mặt phẳng (P)</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Cho hai biến cố độc lập A và B có $P(A) = 0.3$ và $P(B) = 0.4$. Xác suất của biến cố giao $P(A \\cap B)$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-indigo-600">
              <span>A. 0.12 ($0.3 \\times 0.4 = 0.12$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-indigo-600">
              <span>B. 0.70</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-indigo-600">
              <span>C. 0.10</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Đạo hàm của hàm số $y = x^3 - 2\\sqrt{x}$ trên khoảng $(0; +\\infty)$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-indigo-600">
              <span>A. $y' = 3x^2 - \\frac{1}{\\sqrt{x}}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-indigo-600">
              <span>B. $y' = 3x^2 - \\frac{2}{\\sqrt{x}}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-indigo-600">
              <span>C. $y' = 3x^2 - \\sqrt{x}$</span>
            </label>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 transition">
            Đóng
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white">
          Kết quả của bạn: 0/10 điểm
        </h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          Đang tải đánh giá năng lực...
        </p>
        <button onclick="resetCourseExam()" class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition">
          <i class="fa-solid fa-rotate-right mr-1"></i> Làm lại bài thi
        </button>
      </div>
    </div>
  </div>
`;

// 7. Update script section with KaTeX auto-rendering, exam logic and search filter
const updatedScript11 = `  <script>
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
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ chương trình Toán 11 GDPT 2018!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các kiến thức Lượng giác, Cấp số, Giới hạn, Mũ - Lôgarit và Đạo hàm.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy ôn luyện thêm các quy tắc tính xác suất và quan hệ vuông góc không gian nhé!';
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
            link.classList.add('text-indigo-600', 'font-bold');
          } else {
            link.classList.remove('text-indigo-600', 'font-bold');
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
  html = html.substring(0, scriptStartIdx) + '\n' + examModalHtml11 + '\n' + updatedScript11 + '\n' + html.substring(scriptEndIdx);
  console.log('Updated client-side script block and inserted Exam Modal');
} else {
  html = html.replace('</body>', examModalHtml11 + '\n' + updatedScript11 + '\n</body>');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully upgraded courses/toan_11.html! New size:', html.length, 'bytes');
