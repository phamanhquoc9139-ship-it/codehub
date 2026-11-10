const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'vatly_10.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original vatly_10.html size:', html.length);

// Step 0: Fix all historical string escaping corruptions in vatly_10.html
html = html
  .replace(/\r(?=ightarrow)/g, '\\r')
  .replace(/\r(?=ho\b)/g, '\\r')
  .replace(/\x08ar/g, '\\bar')
  .replace(/\x08/g, '\\b')
  .replace(/\x0bec/g, '\\vec')
  .replace(/\x0b/g, '\\v')
  .replace(/\x0crac/g, '\\frac')
  .replace(/\x0c/g, '\\f')
  .replace(/\t(?=ext\{)/g, '\\t')
  .replace(/\t(?=heta\b)/g, '\\t');

console.log('Fixed escape anomalies (frac, vec, bar, text, rightarrow, rho, theta)');

// Step 1: Add KaTeX CDN to <head>
if (!html.includes('katex.min.css')) {
  const katexTags = `  <!-- KaTeX for beautiful Math & Physics Formula Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
`;
  html = html.replace('</head>', `${katexTags}</head>`);
  console.log('Added KaTeX CDN links to <head>');
}

// Step 2: Add Reading Progress Bar
if (!html.includes('id="progressBar"')) {
  const progressBar = `  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 z-50 transition-all duration-150" style="width: 0%;"></div>
`;
  html = html.replace('<body class="', `${progressBar}<body class="`);
  console.log('Added Reading Progress Bar');
}

// Step 3: Add Course Exam Button in Navbar
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

// Step 4: Add Search Bar in Sidebar
if (!html.includes('id="lessonSearch"')) {
  const searchBar = `<!-- Search Bar -->
          <div class="mb-3">
            <div class="relative">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-400 text-xs"></i>
              <input type="text" 
                     id="lessonSearch" 
                     placeholder="Tìm kiếm bài học Vật lí 10..." 
                     class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
            </div>
          </div>
          `;
  html = html.replace('Mục lục khóa học</h3>', `Mục lục khóa học</h3>\n        </div>\n        ${searchBar}\n        <div>`);
  // Clean up if double div was created
  console.log('Added Search Bar to sidebar');
}

// Step 5: Add Dual Interactive Quizzes to Key Lessons
const extraQuizzesPhysics10 = {
  "bai-3": {
    q: "Dùng thước kẹp đo chiều dài thanh kim loại thu được giá trị $\\bar{L} = 20.0\\text{ cm}$ với sai số tuyệt đối $\\Delta L = 0.2\\text{ cm}$. Sai số tỉ đối $\\delta L$ của phép đo này là:",
    opts: [
      "$\\delta L = 1.0\\%$",
      "$\\delta L = 0.1\\%$",
      "$\\delta L = 2.0\\%$",
      "$\\delta L = 0.5\\%$"
    ],
    correct: 0,
    expl: "Sai số tỉ đối được tính theo công thức: $\\delta L = \\frac{\\Delta L}{\\bar{L}} \\times 100\\% = \\frac{0.2}{20.0} \\times 100\\% = 1.0\\%$."
  },
  "bai-4": {
    q: "Một người đi xe máy từ điểm A đến điểm B cách $40\\text{ m}$ về phía Đông, rồi rẽ vuông góc đi tiếp $30\\text{ m}$ về phía Bắc đến C. Độ lớn của vectơ độ dịch chuyển $\\vec{d}$ từ A đến C là:",
    opts: [
      "$50\\text{ m}$",
      "$70\\text{ m}$",
      "$10\\text{ m}$",
      "$40\\text{ m}$"
    ],
    correct: 0,
    expl: "Vì hai quãng đường vuông góc nhau (Đông và Bắc) nên độ lớn độ dịch chuyển chính là cạnh huyền của tam giác vuông: $d = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\text{ m}$."
  },
  "bai-5": {
    q: "Một ô tô chạy trên một đường thẳng. Trong nửa đoạn đường đầu ô tô chạy với tốc độ $v_1 = 40\\text{ km/h}$, nửa đoạn đường còn lại chạy với tốc độ $v_2 = 60\\text{ km/h}$. Tốc độ trung bình trên cả đoạn đường là:",
    opts: [
      "$48\\text{ km/h}$",
      "$50\\text{ km/h}$",
      "$45\\text{ km/h}$",
      "$52\\text{ km/h}$"
    ],
    correct: 0,
    expl: "Với hai nửa quãng đường bằng nhau, công thức tính tốc độ trung bình: $v_{tb} = \\frac{2 v_1 v_2}{v_1 + v_2} = \\frac{2 \\times 40 \\times 60}{40 + 60} = \\frac{4800}{100} = 48\\text{ km/h}$."
  },
  "bai-8": {
    q: "Một đoàn tàu đang chạy thẳng đều với vận tốc $v_0 = 15\\text{ m/s}$ thì người lái tàu hãm phanh. Sau $10\\text{ s}$ đoàn tàu dừng hẳn ($v = 0$). Gia tốc của đoàn tàu là:",
    opts: [
      "$a = -1.5\\text{ m/s}^2$",
      "$a = 1.5\\text{ m/s}^2$",
      "$a = -0.67\\text{ m/s}^2$",
      "$a = -15\\text{ m/s}^2$"
    ],
    correct: 0,
    expl: "Áp dụng định nghĩa gia tốc: $a = \\frac{v - v_0}{\\Delta t} = \\frac{0 - 15}{10} = -1.5\\text{ m/s}^2$ (dấu âm thể hiện gia tốc ngược chiều vận tốc - chuyển động chậm dần đều)."
  },
  "bai-9": {
    q: "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu ($v_0 = 0$) với gia tốc $a = 2\\text{ m/s}^2$. Quãng đường vật đi được trong $5\\text{ s}$ đầu tiên là:",
    opts: [
      "$25\\text{ m}$",
      "$10\\text{ m}$",
      "$50\\text{ m}$",
      "$20\\text{ m}$"
    ],
    correct: 0,
    expl: "Áp dụng công thức đường đi của chuyển động biến đổi đều: $s = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\times 2 \\times 5^2 = 25\\text{ m}$."
  },
  "bai-10": {
    q: "Thả một hòn sỏi rơi tự do từ độ cao $h = 20\\text{ m}$ xuống đất tại nơi có $g = 10\\text{ m/s}^2$. Vận tốc của hòn sỏi ngay trước khi chạm đất là:",
    opts: [
      "$20\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$40\\text{ m/s}$",
      "$14.1\\text{ m/s}$"
    ],
    correct: 0,
    expl: "Vận tốc chạm đất trong rơi tự do: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\text{ m/s}$."
  },
  "bai-12": {
    q: "Một vật được ném ngang từ độ cao $h = 45\\text{ m}$ với vận tốc ban đầu $v_0 = 20\\text{ m/s}$, lấy $g = 10\\text{ m/s}^2$. Tầm ném xa $L$ của vật là:",
    opts: [
      "$60\\text{ m}$",
      "$45\\text{ m}$",
      "$90\\text{ m}$",
      "$30\\text{ m}$"
    ],
    correct: 0,
    expl: "Thời gian rơi: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 45}{10}} = 3\\text{ s}$. Tầm ném xa: $L = v_0 \\cdot t = 20 \\times 3 = 60\\text{ m}$."
  },
  "bai-13": {
    q: "Hai lực đồng quy $\\vec{F}_1$ và $\\vec{F}_2$ có phương vuông góc với nhau, độ lớn tương ứng là $F_1 = 6\\text{ N}$ và $F_2 = 8\\text{ N}$. Độ lớn hợp lực $F$ của chúng bằng:",
    opts: [
      "$10\\text{ N}$",
      "$14\\text{ N}$",
      "$2\\text{ N}$",
      "$48\\text{ N}$"
    ],
    correct: 0,
    expl: "Khi hai lực vuông góc nhau: $F = \\sqrt{F_1^2 + F_2^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ N}$."
  },
  "bai-15": {
    q: "Một lực $F = 10\\text{ N}$ tác dụng vào vật khối lượng $m = 2\\text{ kg}$ đang đứng yên trên mặt sàn trơn nhẵn. Gia tốc mà vật thu được có độ lớn là:",
    opts: [
      "$5\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$0.2\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$"
    ],
    correct: 0,
    expl: "Theo định luật II Newton: $a = \\frac{F}{m} = \\frac{10}{2} = 5\\text{ m/s}^2$."
  },
  "bai-16": {
    q: "Khi một con ngựa kéo một cỗ xe chuyển động thẳng trên đường, theo định luật III Newton, nhận định nào sau đây là ĐÚNG?",
    opts: [
      "Lực ngựa kéo xe và lực xe kéo ngựa là hai lực trực đối, tác dụng vào hai vật thể khác nhau",
      "Lực ngựa kéo xe có độ lớn lớn hơn lực xe kéo ngựa nên xe mới chuyển động được",
      "Hai lực này triệt tiêu nhau vì cùng tác dụng lên một vật",
      "Chỉ có ngựa tác dụng lực lên xe, xe không tác dụng lực lên ngựa"
    ],
    correct: 0,
    expl: "Theo định luật III Newton, hai lực tương tác là hai lực trực đối (cùng phương, ngược chiều, cùng độ lớn) và luôn đặt vào hai vật khác nhau (lực ngựa tác dụng lên xe đặt vào xe, lực phản lực của xe tác dụng vào ngựa đặt vào ngựa)."
  },
  "bai-18": {
    q: "Một vật có khối lượng $m = 5\\text{ kg}$ trượt đều trên sàn ngang nhờ lực kéo ngang $F = 10\\text{ N}$, lấy $g = 10\\text{ m/s}^2$. Hệ số ma sát trượt $\\mu_t$ giữa vật và sàn là:",
    opts: [
      "$\\mu_t = 0.2$",
      "$\\mu_t = 0.5$",
      "$\\mu_t = 0.1$",
      "$\\mu_t = 0.02$"
    ],
    correct: 0,
    expl: "Vì vật trượt đều nên lực kéo cân bằng với lực ma sát: $F_{mst} = F = 10\\text{ N}$. Áp lực $N = P = mg = 5 \\times 10 = 50\\text{ N}$. Suy ra $\\mu_t = \\frac{F_{mst}}{N} = \\frac{10}{50} = 0.2$."
  },
  "bai-21": {
    q: "Một thanh nhẹ có thể quay quanh trục cố định, chịu tác dụng của lực $F = 20\\text{ N}$ với cánh tay đòn $d = 0.5\\text{ m}$. Moment của lực $F$ đối với trục quay có giá trị là:",
    opts: [
      "$M = 10\\text{ N}\\cdot\\text{m}$",
      "$M = 40\\text{ N}\\cdot\\text{m}$",
      "$M = 10\\text{ J}$",
      "$M = 20.5\\text{ N}\\cdot\\text{m}$"
    ],
    correct: 0,
    expl: "Định nghĩa moment lực: $M = F \\cdot d = 20 \\times 0.5 = 10\\text{ N}\\cdot\\text{m}$."
  },
  "bai-23": {
    q: "Một lực $F = 50\\text{ N}$ kéo một kiện hàng chuyển dịch quãng đường $s = 10\\text{ m}$ trên mặt sàn nằm ngang. Hướng của lực hợp với phương chuyển dời một góc $60^\\circ$. Công của lực đó thực hiện là:",
    opts: [
      "$250\\text{ J}$",
      "$500\\text{ J}$",
      "$433\\text{ J}$",
      "$300\\text{ J}$"
    ],
    correct: 0,
    expl: "Công cơ học: $A = F \\cdot s \\cdot \\cos\\alpha = 50 \\times 10 \\times \\cos 60^\\circ = 500 \\times 0.5 = 250\\text{ J}$."
  },
  "bai-24": {
    q: "Một động cơ điện thực hiện được một công $A = 36000\\text{ J}$ trong thời gian $1\\text{ phút}$. Công suất của động cơ đó là:",
    opts: [
      "$\\mathcal{P} = 600\\text{ W}$",
      "$\\mathcal{P} = 36000\\text{ W}$",
      "$\\mathcal{P} = 60\\text{ W}$",
      "$\\mathcal{P} = 360\\text{ W}$"
    ],
    correct: 0,
    expl: "Đổi thời gian: $1\\text{ phút} = 60\\text{ s}$. Công suất: $\\mathcal{P} = \\frac{A}{t} = \\frac{36000}{60} = 600\\text{ W}$."
  },
  "bai-25": {
    q: "Một ô tô có khối lượng $m = 1000\\text{ kg}$ đang di chuyển với vận tốc $v = 20\\text{ m/s}$ (tương đương $72\\text{ km/h}$). Động năng của ô tô bằng:",
    opts: [
      "$200\\text{ kJ}$",
      "$100\\text{ kJ}$",
      "$400\\text{ kJ}$",
      "$20\\text{ kJ}$"
    ],
    correct: 0,
    expl: "Động năng: $W_đ = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 1000 \\times 20^2 = 500 \\times 400 = 200\\,000\\text{ J} = 200\\text{ kJ}$."
  },
  "bai-26": {
    q: "Thả rơi một vật khối lượng $m = 0.5\\text{ kg}$ từ độ cao $h = 10\\text{ m}$ xuống đất, bỏ qua lực cản không khí, lấy $g = 10\\text{ m/s}^2$. Vị trí mà tại đó động năng bằng thế năng ($W_đ = W_t$) có độ cao so với mặt đất là:",
    opts: [
      "$z = 5\\text{ m}$",
      "$z = 2.5\\text{ m}$",
      "$z = 7.5\\text{ m}$",
      "$z = 4\\text{ m}$"
    ],
    correct: 0,
    expl: "Bảo toàn cơ năng: $W = W_t + W_đ = 2W_t \\Leftrightarrow mgh = 2mgz \\Rightarrow z = \\frac{h}{2} = 5\\text{ m}$."
  },
  "bai-28": {
    q: "Một viên đạn có khối lượng $m = 20\\text{ g} = 0.02\\text{ kg}$ bay với vận tốc $v = 600\\text{ m/s}$. Độ lớn động lượng của viên đạn là:",
    opts: [
      "$12\\text{ kg}\\cdot\\text{m/s}$",
      "$12000\\text{ kg}\\cdot\\text{m/s}$",
      "$6\\text{ kg}\\cdot\\text{m/s}$",
      "$24\\text{ kg}\\cdot\\text{m/s}$"
    ],
    correct: 0,
    expl: "Độ lớn động lượng: $p = mv = 0.02 \\times 600 = 12\\text{ kg}\\cdot\\text{m/s}$."
  },
  "bai-29": {
    q: "Một khẩu súng có khối lượng $M = 4\\text{ kg}$ bắn ra một viên đạn khối lượng $m = 20\\text{ g} = 0.02\\text{ kg}$ với vận tốc $v = 400\\text{ m/s}$. Vận tốc giật lùi $V$ của khẩu súng ngay sau khi bắn là:",
    opts: [
      "$V = -2\\text{ m/s}$",
      "$V = 2\\text{ m/s}$",
      "$V = -0.2\\text{ m/s}$",
      "$V = -4\\text{ m/s}$"
    ],
    correct: 0,
    expl: "Theo định luật bảo toàn động lượng cho hệ kín (súng + đạn): $M\\vec{V} + m\\vec{v} = \\vec{0} \\Rightarrow V = -\\frac{mv}{M} = -\\frac{0.02 \\times 400}{4} = -2\\text{ m/s}$ (dấu trừ chứng tỏ súng bị giật ngược chiều bay của đạn)."
  },
  "bai-31": {
    q: "Một chất điểm chuyển động tròn đều trên quỹ đạo bán kính $r = 0.5\\text{ m}$ với tốc độ góc $\\omega = 10\\text{ rad/s}$. Tốc độ dài $v$ của chất điểm bằng:",
    opts: [
      "$v = 5\\text{ m/s}$",
      "$v = 20\\text{ m/s}$",
      "$v = 2\\text{ m/s}$",
      "$v = 50\\text{ m/s}$"
    ],
    correct: 0,
    expl: "Mối liên hệ giữa tốc độ dài và tốc độ góc: $v = \\omega \\cdot r = 10 \\times 0.5 = 5\\text{ m/s}$."
  },
  "bai-32": {
    q: "Một ô tô có khối lượng $m = 1200\\text{ kg}$ chuyển động tròn đều qua đoạn đường cong có bán kính cong $r = 50\\text{ m}$ với tốc độ $v = 10\\text{ m/s}$. Lực hướng tâm cần thiết để giữ ô tô không bị trượt ra ngoài cung đường là:",
    opts: [
      "$2400\\text{ N}$",
      "$1200\\text{ N}$",
      "$4800\\text{ N}$",
      "$600\\text{ N}$"
    ],
    correct: 0,
    expl: "Lực hướng tâm: $F_{ht} = m\\frac{v^2}{r} = 1200 \\times \\frac{10^2}{50} = 1200 \\times 2 = 2400\\text{ N}$."
  },
  "bai-33": {
    q: "Một lò xo nhẹ có độ cứng $k = 100\\text{ N/m}$. Khi treo một quả cân có trọng lượng $P = 5\\text{ N}$ thì khi cân bằng, độ biến dạng $\\Delta l$ của lò xo là:",
    opts: [
      "$5\\text{ cm}$",
      "$0.5\\text{ cm}$",
      "$20\\text{ cm}$",
      "$2\\text{ cm}$"
    ],
    correct: 0,
    expl: "Khi cân bằng, lực đàn hồi cân bằng trọng lực: $F_{đh} = P \\Leftrightarrow k \\cdot \\Delta l = P \\Rightarrow \\Delta l = \\frac{P}{k} = \\frac{5}{100} = 0.05\\text{ m} = 5\\text{ cm}$."
  },
  "bai-34": {
    q: "Biết khối lượng riêng của nước là $\\rho = 1000\\text{ kg/m}^3$ và $g = 10\\text{ m/s}^2$. Áp suất thuỷ tĩnh tác dụng lên một thợ lặn ở độ sâu $h = 15\\text{ m}$ dưới mặt nước (bỏ qua áp suất khí quyển) là:",
    opts: [
      "$150\\,000\\text{ Pa}$",
      "$15\\,000\\text{ Pa}$",
      "$1.5\\times 10^6\\text{ Pa}$",
      "$75\\,000\\text{ Pa}$"
    ],
    correct: 0,
    expl: "Áp suất thuỷ tĩnh: $p = \\rho g h = 1000 \\times 10 \\times 15 = 150\\,000\\text{ Pa} = 150\\text{ kPa}$."
  }
};

// Insert second quiz into matching lessons
for (const [id, extra] of Object.entries(extraQuizzesPhysics10)) {
  const articleRegex = new RegExp(`(<article id="${id}"[\\s\\S]*?)(<div class="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">[\\s\\S]*?)(<\\/article>)`);
  const match = html.match(articleRegex);
  if (match && !match[0].includes('Câu hỏi tự kiểm tra (Câu 2)')) {
    const letters = ['A', 'B', 'C', 'D'];
    const q2OptionsHtml = extra.opts.map((opt, oIdx) => {
      const isCorrect = oIdx === extra.correct;
      return `
      <button onclick="checkQuiz(this, ${isCorrect})" class="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-left transition-all flex items-center gap-2">
        <span class="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center font-bold text-[10px] text-gray-500">${letters[oIdx]}</span>
        <span class="text-gray-700 dark:text-gray-300">${opt}</span>
      </button>`;
    }).join('\n    ');

    const q2Block = `
      <!-- Self-check Quiz 2 -->
      <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
          <i class="fa-solid fa-circle-question text-sky-500"></i> Câu hỏi tự kiểm tra (Câu 2)
        </div>
        <p class="text-sm font-medium text-gray-900 dark:text-white mb-3">
          ${extra.q}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
          ${q2OptionsHtml}
        </div>
        <div class="quiz-feedback hidden p-3 rounded-lg text-xs leading-relaxed">
          <div class="feedback-title font-bold mb-1"></div>
          <div class="feedback-text text-gray-700 dark:text-gray-300">${extra.expl}</div>
        </div>
      </div>`;

    const newArticleContent = match[1] + match[2] + q2Block + '\n    </article>';
    html = html.replace(match[0], newArticleContent);
  }
}
console.log('Added enhanced dual quizzes to 22 key lessons in vatly_10.html');

// Step 6: Define Course Exam Modal
const examModalHtmlPhysics10 = `
  <!-- Course Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 font-bold text-xs">
            Bài thi đánh giá tổng kết
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Vật Lí Lớp 10
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
            1. Một học sinh đo chiều dài một cuốn sách được giá trị trung bình $\\bar{L} = 24.5\\text{ cm}$ và sai số tuyệt đối $\\Delta L = 0.1\\text{ cm}$. Cách ghi kết quả đo đúng quy chuẩn là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-sky-600">
              <span>A. $L = (24.5 \\pm 0.1)\\text{ cm}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-sky-600">
              <span>B. $L = 24.5 \\pm 0.1$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-sky-600">
              <span>C. $L = 24.5\\text{ cm} \\pm 1\\text{ mm}$</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Một ô tô chạy từ A đến B cách nhau $120\\text{ km}$ hết $2\\text{ giờ}$, sau đó lập tức quay trở lại A theo đường cũ hết $3\\text{ giờ}$. Vận tốc trung bình của ô tô trong cả quá trình là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-sky-600">
              <span>A. $0\\text{ km/h}$ (vì điểm đầu và điểm cuối trùng nhau nên độ dịch chuyển $d = 0$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-sky-600">
              <span>B. $48\\text{ km/h}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-sky-600">
              <span>C. $24\\text{ km/h}$</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Công thức độc lập với thời gian liên hệ giữa gia tốc $a$, vận tốc ban đầu $v_0$, vận tốc $v$ và độ dịch chuyển $d$ trong chuyển động thẳng biến đổi đều là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-sky-600">
              <span>A. $v^2 - v_0^2 = 2ad$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-sky-600">
              <span>B. $v^2 + v_0^2 = 2ad$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-sky-600">
              <span>C. $v - v_0 = 2ad$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Thả rơi tự do một vật từ độ cao $h = 45\\text{ m}$ tại nơi có $g = 10\\text{ m/s}^2$. Thời gian vật rơi chạm đất và vận tốc khi chạm đất là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-sky-600">
              <span>A. $t = 3\\text{ s}$ và $v = 30\\text{ m/s}$ (do $t = \\sqrt{2h/g} = 3\\text{ s}$, $v = gt = 30\\text{ m/s}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-sky-600">
              <span>B. $t = 4.5\\text{ s}$ và $v = 45\\text{ m/s}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-sky-600">
              <span>C. $t = 2\\text{ s}$ và $v = 20\\text{ m/s}$</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Tác dụng một lực không đổi $F = 15\\text{ N}$ vào một vật khối lượng $m = 3\\text{ kg}$ đang đứng yên. Quãng đường vật đi được sau $4\\text{ s}$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-sky-600">
              <span>A. $40\\text{ m}$ (do $a = F/m = 5\\text{ m/s}^2 \\Rightarrow s = \\frac{1}{2}at^2 = 40\\text{ m}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-sky-600">
              <span>B. $20\\text{ m}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-sky-600">
              <span>C. $60\\text{ m}$</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Một thanh nhẹ quay quanh trục cố định chịu tác dụng lực $F_1 = 30\\text{ N}$ với cánh tay đòn $d_1 = 20\\text{ cm}$. Để thanh cân bằng, lực $F_2$ tác dụng ngược chiều kim đồng hồ có cánh tay đòn $d_2 = 40\\text{ cm}$ phải bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-sky-600">
              <span>A. $15\\text{ N}$ (theo quy tắc moment: $F_1 d_1 = F_2 d_2 \\Rightarrow F_2 = 15\\text{ N}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-sky-600">
              <span>B. $60\\text{ N}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-sky-600">
              <span>C. $30\\text{ N}$</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Lực kéo $F = 100\\text{ N}$ hợp với phương chuyển dời một góc $60^\\circ$ làm hòm gỗ trượt trên sàn quãng đường $s = 20\\text{ m}$. Công do lực kéo sinh ra là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-sky-600">
              <span>A. $1000\\text{ J}$ (do $A = F \\cdot s \\cdot \\cos 60^\\circ = 1000\\text{ J}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-sky-600">
              <span>B. $2000\\text{ J}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-sky-600">
              <span>C. $1732\\text{ J}$</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Ném một vật từ mặt đất thẳng đứng lên cao với vận tốc ban đầu $v_0 = 10\\text{ m/s}$ (lấy $g = 10\\text{ m/s}^2$, bỏ qua lực cản). Độ cao cực đại vật đạt được là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-sky-600">
              <span>A. $5\\text{ m}$ (bảo toàn cơ năng: $h_{\\max} = \\frac{v_0^2}{2g} = \\frac{100}{20} = 5\\text{ m}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-sky-600">
              <span>B. $10\\text{ m}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-sky-600">
              <span>C. $2.5\\text{ m}$</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Viên đạn khối lượng $m_1 = 0.05\\text{ kg}$ bay ngang với vận tốc $400\\text{ m/s}$ cắm vào bao cát $m_2 = 4.95\\text{ kg}$ đang đứng yên. Vận tốc của hệ ngay sau va chạm là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-sky-600">
              <span>A. $4\\text{ m/s}$ (va chạm mềm: $V = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{20}{5} = 4\\text{ m/s}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-sky-600">
              <span>B. $2\\text{ m/s}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-sky-600">
              <span>C. $40\\text{ m/s}$</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Vật khối lượng $m = 0.2\\text{ kg}$ chuyển động tròn đều trên đường tròn bán kính $R = 0.5\\text{ m}$ với tốc độ không đổi $v = 2\\text{ m/s}$. Lực hướng tâm tác dụng lên vật là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-sky-600">
              <span>A. $1.6\\text{ N}$ (do $F_{ht} = m \\frac{v^2}{R} = 0.2 \\times \\frac{4}{0.5} = 1.6\\text{ N}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-sky-600">
              <span>B. $0.8\\text{ N}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-sky-600">
              <span>C. $3.2\\text{ N}$</span>
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

// Step 7: Define comprehensive client-side script
const updatedScriptPhysics10 = `  <script>
    // Theme toggle logic
    const themeToggle = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }

    themeToggle?.addEventListener('click', () => {
      htmlEl.classList.toggle('dark');
      localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
    });

    // Reading Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = scrolled + '%';
    });

    // Live Search Lessons in Sidebar
    const searchInput = document.getElementById('lessonSearch');
    searchInput?.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('aside ul li');
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

    // Quiz interactive logic
    function checkQuiz(button, isCorrect) {
      const container = button.closest('div.border-t');
      const allButtons = container.querySelectorAll('button');
      const feedback = container.querySelector('.quiz-feedback');
      const feedbackTitle = feedback.querySelector('.feedback-title');

      allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-gray-100', 'dark:hover:bg-gray-800');
      });

      feedback.classList.remove('hidden');

      if (isCorrect) {
        button.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        feedback.classList.add('bg-emerald-50', 'dark:bg-emerald-950/30', 'border', 'border-emerald-200', 'dark:border-emerald-800');
        feedbackTitle.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i> Chính xác!';
        feedbackTitle.className = 'feedback-title font-bold mb-1 text-emerald-700 dark:text-emerald-300';
      } else {
        button.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        feedback.classList.add('bg-rose-50', 'dark:bg-rose-950/30', 'border', 'border-rose-200', 'dark:border-rose-800');
        feedbackTitle.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mr-1.5"></i> Chưa chính xác. Xem lời giải chi tiết:';
        feedbackTitle.className = 'feedback-title font-bold mb-1 text-rose-700 dark:text-rose-300';
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
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ kiến thức Vật lí 10 (GDPT 2018 - Kết nối tri thức)!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các định luật Newton, chuyển động biến đổi đều, công - cơ năng và động lượng!';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy ôn luyện thêm các dạng bài chuyển động tròn, lực hướng tâm và moment lực nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc kỹ lại phần lý thuyết và ví dụ minh họa của từng bài học nhé!';
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
    const articles = document.querySelectorAll('article[id]');
    const sidebarLinks = document.querySelectorAll('aside a[href^="#bai-"]');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollY = window.pageYOffset;
      articles.forEach(article => {
        const artHeight = article.offsetHeight;
        const artTop = article.offsetTop - 160;
        if (scrollY > artTop && scrollY <= artTop + artHeight) {
          current = article.getAttribute('id');
        }
      });

      if (current) {
        sidebarLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-sky-600', 'font-bold', 'bg-sky-50', 'dark:bg-sky-900/30');
          } else {
            link.classList.remove('text-sky-600', 'font-bold', 'bg-sky-50', 'dark:bg-sky-900/30');
          }
        });
      }
    });
  </script>
`;

// Replace script section and insert Exam Modal before script
const scriptStartIdx = html.indexOf('<script>\n    // Theme toggle logic');
if (scriptStartIdx !== -1) {
  const scriptEndIdx = html.indexOf('</body>', scriptStartIdx);
  html = html.substring(0, scriptStartIdx) + '\n' + examModalHtmlPhysics10 + '\n' + updatedScriptPhysics10 + '\n' + html.substring(scriptEndIdx);
  console.log('Updated client-side script block and inserted Exam Modal');
} else {
  html = html.replace('</body>', examModalHtmlPhysics10 + '\n' + updatedScriptPhysics10 + '\n</body>');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully upgraded courses/vatly_10.html! New size:', html.length, 'bytes');
