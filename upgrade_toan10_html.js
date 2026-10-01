const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'toan_10.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original toan_10.html size:', html.length);

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

// 2. Add Reading Progress Bar right before body opening / after body tag
if (!html.includes('id="progressBar"')) {
  const progressBar = `  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 z-50 transition-all duration-150" style="width: 0%;"></div>
`;
  html = html.replace('<body class="', `${progressBar}<body class="`);
  console.log('Added Reading Progress Bar');
}

// 3. Add Course Exam button in Nav (next to themeToggle)
if (!html.includes('openCourseQuizModal()')) {
  const examBtn = `<!-- Exam Modal Button -->
          <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-xs font-semibold shadow-sm transition">
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
                     placeholder="Tìm kiếm bài học toán 10..." 
                     class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
            </div>
          </div>
          `;
  html = html.replace('<nav>', `${searchBar}<nav>`);
  console.log('Added Search Bar to sidebar');
}

// 5. Add second quiz questions to key lessons across 9 chapters
const extraQuizzes10 = {
  "bai-1": {
    q: "Cho mệnh đề chứa biến $P(n)$: '$n^2 - 1$ chia hết cho 4' với $n$ là số nguyên. Mệnh đề nào sau đây ĐÚNG?",
    opts: [
      "$P(3)$ là mệnh đề đúng",
      "$P(2)$ là mệnh đề đúng",
      "$P(4)$ là mệnh đề đúng",
      "$\\forall n \\in \\mathbb{Z}, P(n)$ là mệnh đề đúng"
    ],
    correct: 0,
    expl: "Với $n = 3$, ta có $3^2 - 1 = 9 - 1 = 8$ chia hết cho 4, do đó mệnh đề $P(3)$ là mệnh đề đúng."
  },
  "bai-2": {
    q: "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid -2 \\le x < 3\\} = [-2; 3)$ và $B = (0; 5]$. Giao của hai tập hợp $A \\cap B$ là:",
    opts: [
      "$(0; 3)$",
      "$[-2; 5]$",
      "$[0; 3)$",
      "$(0; 3]$"
    ],
    correct: 0,
    expl: "Giao của hai tập hợp là phần tử chung của cả hai tập: $A \\cap B = [-2; 3) \\cap (0; 5] = (0; 3)$."
  },
  "bai-3": {
    q: "Điểm nào sau đây KHÔNG thuộc miền nghiệm của bất phương trình $2x - 3y + 6 > 0$?",
    opts: [
      "$(0; 3)$",
      "$(0; 0)$",
      "$(1; 1)$",
      "$(2; 0)$"
    ],
    correct: 0,
    expl: "Thay toạ độ $(0; 3)$ vào vế trái: $2(0) - 3(3) + 6 = 0 - 9 + 6 = -3 < 0$, không thỏa mãn $> 0$. Do đó điểm $(0; 3)$ không thuộc miền nghiệm."
  },
  "bai-4": {
    q: "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là một hình có dạng gì?",
    opts: [
      "Miền tam giác vuông cân",
      "Miền hình chữ nhật",
      "Miền hình thang",
      "Một dải vô hạn"
    ],
    correct: 0,
    expl: "Miền nghiệm được giới hạn bởi các đường thẳng $x = 0$ (trục tung), $y = 0$ (trục hoành) và $x + y = 4$. Đây là tam giác vuông cân tại gốc toạ độ $O(0,0)$ với các đỉnh $O(0,0), A(4,0), B(0,4)$."
  },
  "bai-5": {
    q: "Với mọi góc nhọn $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$), khẳng định nào sau đây là ĐÚNG?",
    opts: [
      "$\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$",
      "$\\sin(180^\\circ - \\alpha) = -\\sin\\alpha$",
      "$\\tan(180^\\circ - \\alpha) = \\tan\\alpha$",
      "$\\cot(180^\\circ - \\alpha) = \\cot\\alpha$"
    ],
    correct: 0,
    expl: "Hai góc bù nhau có $\\sin$ bằng nhau, các giá trị $\\cos, \\tan, \\cot$ đối nhau: $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$."
  },
  "bai-6": {
    q: "Cho tam giác $ABC$ có $b = 5$, $c = 8$ và góc $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
    opts: [
      "7",
      "$\\sqrt{129}$",
      "$\\sqrt{39}$",
      "6"
    ],
    correct: 0,
    expl: "Theo định lý côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 5^2 + 8^2 - 2 \\times 5 \\times 8 \\times \\cos 60^\\circ = 25 + 64 - 80 \\times 0.5 = 89 - 40 = 49 \\Rightarrow a = 7$."
  },
  "bai-8": {
    q: "Cho 4 điểm phân biệt $A, B, C, D$. Tổng các vectơ $\\vec{AB} + \\vec{BC} + \\vec{CD}$ bằng:",
    opts: [
      "$\\vec{AD}$",
      "$\\vec{DA}$",
      "$\\vec{AC}$",
      "$\\vec{0}$"
    ],
    correct: 0,
    expl: "Áp dụng liên tiếp quy tắc ba điểm nối đuôi nhau: $\\vec{AB} + \\vec{BC} + \\vec{CD} = (\\vec{AB} + \\vec{BC}) + \\vec{CD} = \\vec{AC} + \\vec{CD} = \\vec{AD}$."
  },
  "bai-9": {
    q: "Cho tam giác $ABC$ có $M$ là trung điểm cạnh $BC$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
    opts: [
      "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$",
      "$\\vec{AB} + \\vec{AC} = \\vec{AM}$",
      "$\\vec{AB} - \\vec{AC} = 2\\vec{AM}$",
      "$\\vec{AM} = 2(\\vec{AB} + \\vec{AC})$"
    ],
    correct: 0,
    expl: "Theo tính chất trung điểm của đoạn thẳng: Với điểm $A$ tùy ý và $M$ là trung điểm $BC$, ta luôn có $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$."
  },
  "bai-10": {
    q: "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-1; 3)$ và $B(2; -1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
    opts: [
      "$(3; -4)$",
      "$(1; 2)$",
      "$(-3; 4)$",
      "$(3; 2)$"
    ],
    correct: 0,
    expl: "Toạ độ vectơ $\\vec{AB} = (x_B - x_A; y_B - y_A) = (2 - (-1); -1 - 3) = (3; -4)$."
  },
  "bai-11": {
    q: "Trong mặt phẳng $Oxy$, cho hai vectơ $\\vec{u} = (2; -3)$ và $\\vec{v} = (6; 4)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
    opts: [
      "0 (hai vectơ vuông góc)",
      "24",
      "12",
      "-24"
    ],
    correct: 0,
    expl: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 2 \\times 6 + (-3) \\times 4 = 12 - 12 = 0$. Hai vectơ vuông góc với nhau."
  },
  "bai-13": {
    q: "Cho mẫu số liệu điểm kiểm tra: 4, 6, 7, 7, 8, 9, 10. Số trung vị $M_e$ của mẫu số liệu trên là:",
    opts: [
      "7",
      "7.3",
      "8",
      "6.5"
    ],
    correct: 0,
    expl: "Mẫu số liệu đã sắp xếp có $n = 7$ giá trị (lẻ), nên số trung vị là giá trị chính giữa ở vị trí thứ $(7+1)/2 = 4$, đó là số 7."
  },
  "bai-14": {
    q: "Khoảng biến thiên $R$ của một mẫu số liệu đo đạc đại diện cho:",
    opts: [
      "Hiệu số giữa giá trị lớn nhất và giá trị nhỏ nhất của mẫu",
      "Trung bình cộng của tất cả các giá trị",
      "Giá trị nằm chính giữa sau khi sắp xếp",
      "Căn bậc hai của phương sai"
    ],
    correct: 0,
    expl: "Định nghĩa khoảng biến thiên: $R = x_{max} - x_{min}$, phản ánh độ phân tán cực đại của các số liệu trong mẫu."
  },
  "bai-16": {
    q: "Toạ độ đỉnh $I$ của parabol $(P): y = x^2 - 4x + 3$ là:",
    opts: [
      "$I(2; -1)$",
      "$I(-2; 15)$",
      "$I(2; 3)$",
      "$I(-2; -1)$"
    ],
    correct: 0,
    expl: "Hoành độ đỉnh $x_I = -\\frac{b}{2a} = -\\frac{-4}{2 \\times 1} = 2$. Tung độ đỉnh $y_I = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Vậy $I(2; -1)$."
  },
  "bai-17": {
    q: "Tập nghiệm của bất phương trình bậc hai $x^2 - 5x + 6 \\le 0$ là:",
    opts: [
      "$[2; 3]$",
      "$(-\\infty; 2] \\cup [3; +\\infty)$",
      "$(2; 3)$",
      "$\\mathbb{R}$"
    ],
    correct: 0,
    expl: "Tam thức $f(x) = x^2 - 5x + 6$ có hai nghiệm là 2 và 3, hệ số $a = 1 > 0$. Bất phương trình lấy dấu $\\le 0$ (trái dấu $a$), theo quy tắc 'trong trái ngoài cùng' ta có tập nghiệm là đoạn $[2; 3]$."
  },
  "bai-18": {
    q: "Số nghiệm thực của phương trình $\\sqrt{x^2 - 3x + 2} = \\sqrt{x - 1}$ là:",
    opts: [
      "2 nghiệm ($x = 1, x = 3$)",
      "1 nghiệm",
      "Vô nghiệm",
      "3 nghiệm"
    ],
    correct: 0,
    expl: "Bình phương hai vế: $x^2 - 3x + 2 = x - 1 \\Leftrightarrow x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Thử lại cả hai nghiệm đều thỏa mãn điều kiện dưới căn $\\ge 0$. Vậy phương trình có 2 nghiệm."
  },
  "bai-19": {
    q: "Phương trình tổng quát của đường thẳng đi qua điểm $M(1; -2)$ và có vectơ pháp tuyến $\\vec{n} = (3; 4)$ là:",
    opts: [
      "$3x + 4y + 5 = 0$",
      "$3x + 4y - 5 = 0$",
      "$4x - 3y - 10 = 0$",
      "$3x - 4y - 11 = 0$"
    ],
    correct: 0,
    expl: "Phương trình đường thẳng: $3(x - 1) + 4(y - (-2)) = 0 \\Leftrightarrow 3x - 3 + 4y + 8 = 0 \\Leftrightarrow 3x + 4y + 5 = 0$."
  },
  "bai-20": {
    q: "Khoảng cách từ điểm $M(1; 2)$ đến đường thẳng $\\Delta: 3x + 4y - 1 = 0$ bằng:",
    opts: [
      "2",
      "10",
      "$\\frac{8}{5}$",
      "$\\frac{10}{\\sqrt{7}}$"
    ],
    correct: 0,
    expl: "Áp dụng công thức khoảng cách: $d(M, \\Delta) = \\frac{|3(1) + 4(2) - 1|}{\\sqrt{3^2 + 4^2}} = \\frac{|3 + 8 - 1|}{\\sqrt{25}} = \\frac{10}{5} = 2$."
  },
  "bai-21": {
    q: "Đường tròn $(C): (x - 2)^2 + (y + 1)^2 = 16$ có tâm $I$ và bán kính $R$ lần lượt là:",
    opts: [
      "$I(2; -1)$ và $R = 4$",
      "$I(-2; 1)$ và $R = 4$",
      "$I(2; -1)$ và $R = 16$",
      "$I(-2; 1)$ và $R = 16$"
    ],
    correct: 0,
    expl: "Phương trình chính tắc dạng $(x - a)^2 + (y - b)^2 = R^2 \\Rightarrow a = 2, b = -1, R = \\sqrt{16} = 4$."
  },
  "bai-24": {
    q: "Có bao nhiêu cách chọn 3 học sinh từ một tổ gồm 10 học sinh để đi làm trực nhật?",
    opts: [
      "$C_{10}^3 = 120$",
      "$A_{10}^3 = 720$",
      "$10^3 = 1000$",
      "$30$"
    ],
    correct: 0,
    expl: "Việc chọn 3 học sinh không phân biệt thứ tự nhiệm vụ là một tổ hợp chập 3 của 10 phần tử: $C_{10}^3 = \\frac{10!}{3!7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$ cách."
  },
  "bai-26": {
    q: "Gieo một con xúc xắc cân đối và đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm chia hết cho 3 là:",
    opts: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{6}$",
      "$\\frac{2}{3}$"
    ],
    correct: 0,
    expl: "Không gian mẫu $n(\\Omega) = 6$. Các mặt có số chấm chia hết cho 3 là $\\{3, 6\\} \\Rightarrow n(A) = 2$. Xác suất $P(A) = \\frac{2}{6} = \\frac{1}{3}$."
  }
};

// Add second quiz to matching lessons
for (const [id, extra] of Object.entries(extraQuizzes10)) {
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

    const newArticleContent = match[1] + match[2] + match[3] + q2Block + '\n      </article>';
    html = html.replace(match[0], newArticleContent);
  }
}
console.log('Added enhanced dual quizzes to key lessons in toan_10.html');

// 6. Exam Modal HTML for Toán 10
const examModalHtml10 = `
  <!-- Course Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 font-bold text-xs">
            Bài thi đánh giá tổng kết
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Toán Học Lớp 10
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
            1. Phủ định của mệnh đề "$\\exists x \\in \\mathbb{R}, x^2 - 2x + 3 \\le 0$" là mệnh đề nào sau đây?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-sky-600">
              <span>A. "$\\forall x \\in \\mathbb{R}, x^2 - 2x + 3 > 0$"</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-sky-600">
              <span>B. "$\\forall x \\in \\mathbb{R}, x^2 - 2x + 3 \\ge 0$"</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-sky-600">
              <span>C. "$\\exists x \\in \\mathbb{R}, x^2 - 2x + 3 > 0$"</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Cho hai tập hợp $A = [-3; 2)$ và $B = (0; 4]$. Hợp của hai tập hợp $A \\cup B$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-sky-600">
              <span>A. $[-3; 4]$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-sky-600">
              <span>B. $(0; 2)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-sky-600">
              <span>C. $[-3; 0]$</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Cho tam giác $ABC$ có $AB = 6$, $AC = 8$ và $\\widehat{A} = 60^\\circ$. Diện tích $S$ của tam giác $ABC$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-sky-600">
              <span>A. $12\\sqrt{3}$ (do $S = \\frac{1}{2} \\times 6 \\times 8 \\times \\sin 60^\\circ$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-sky-600">
              <span>B. 24</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-sky-600">
              <span>C. $24\\sqrt{3}$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ tổng $\\vec{AB} + \\vec{AD}$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-sky-600">
              <span>A. $a\\sqrt{2}$ (đúng bằng độ dài đường chéo $AC$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-sky-600">
              <span>B. $2a$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-sky-600">
              <span>C. $a$</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Cho mẫu số liệu: 3, 5, 6, 8, 9, 11. Số trung vị $M_e$ của mẫu là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-sky-600">
              <span>A. 7 (trung bình cộng của 6 và 8)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-sky-600">
              <span>B. 6</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-sky-600">
              <span>C. 8</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Toạ độ đỉnh của parabol $(P): y = -x^2 + 2x + 3$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-sky-600">
              <span>A. $I(1; 4)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-sky-600">
              <span>B. $I(-1; 0)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-sky-600">
              <span>C. $I(1; 2)$</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Bất phương trình $x^2 - 4x + 4 > 0$ có tập nghiệm là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-sky-600">
              <span>A. $\\mathbb{R} \\setminus \\{2\\}$ (với mọi $x \\ne 2$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-sky-600">
              <span>B. $\\mathbb{R}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-sky-600">
              <span>C. $\\emptyset$</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Cho hai đường thẳng $d_1: 2x - y + 1 = 0$ và $d_2: x + 2y - 3 = 0$. Vị trí tương đối của hai đường thẳng là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-sky-600">
              <span>A. Vuông góc với nhau (vì $\\vec{n}_1 \\cdot \\vec{n}_2 = 2(1) + (-1)(2) = 0$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-sky-600">
              <span>B. Song song với nhau</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-sky-600">
              <span>C. Trùng nhau</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Đường tròn $(C): x^2 + y^2 - 4x + 6y - 12 = 0$ có bán kính $R$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-sky-600">
              <span>A. $R = 5$ (do $R = \\sqrt{2^2 + (-3)^2 - (-12)} = \\sqrt{25} = 5$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-sky-600">
              <span>B. $R = 25$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-sky-600">
              <span>C. $R = \\sqrt{13}$</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Một hộp đựng 4 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên 2 viên bi. Xác suất để lấy được 2 viên bi cùng màu đỏ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-sky-600">
              <span>A. $\\frac{C_4^2}{C_{10}^2} = \\frac{6}{45} = \\frac{2}{15}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-sky-600">
              <span>B. $\\frac{4}{10} = \\frac{2}{5}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-sky-600">
              <span>C. $\\frac{8}{15}$</span>
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

// 7. Update script section with KaTeX auto-rendering, exam logic and search filter
const updatedScript10 = `  <script>
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
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ chương trình Toán 10 GDPT 2018!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các kiến thức Mệnh đề, Vectơ, Hàm số bậc hai, Đường tròn Oxy và Xác suất!';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy ôn luyện thêm các dạng bài toạ độ phẳng Oxy và đại số tổ hợp nhé!';
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
  html = html.substring(0, scriptStartIdx) + '\n' + examModalHtml10 + '\n' + updatedScript10 + '\n' + html.substring(scriptEndIdx);
  console.log('Updated client-side script block and inserted Exam Modal');
} else {
  html = html.replace('</body>', examModalHtml10 + '\n' + updatedScript10 + '\n</body>');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully upgraded courses/toan_10.html! New size:', html.length, 'bytes');
