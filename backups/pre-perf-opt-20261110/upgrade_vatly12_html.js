const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'vatly_12.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original vatly_12.html size:', html.length);

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
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 z-50 transition-all duration-150" style="width: 0%;"></div>
`;
  html = html.replace('<body class="', `${progressBar}<body class="`);
  console.log('Added Reading Progress Bar');
}

// Step 3: Add Course Exam Button in Navbar
if (!html.includes('openCourseQuizModal()')) {
  const examBtn = `<!-- Exam Modal Button -->
          <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-sm transition">
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
                     placeholder="Tìm kiếm bài học Vật lí 12..." 
                     class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
            </div>
          </div>
          `;
  html = html.replace('<div class="space-y-6">', `${searchBar}<div class="space-y-6">`);
  console.log('Added Search Bar to sidebar');
}

// Step 5: Add Dual Interactive Quizzes to 20 Key Lessons
const extraQuizzesPhysics12 = {
  "bai-1": {
    q: "Trong quá trình nóng chảy của một chất rắn kết tinh tinh khiết:",
    opts: [
      "Nhiệt độ của vật giữ nguyên không đổi dù vật vẫn liên tục nhận nhiệt lượng",
      "Nhiệt độ của vật tăng dần đều theo thời gian",
      "Thể tích của vật luôn luôn giảm",
      "Liên kết phân tử giữa các hạt trở nên bền vững hơn"
    ],
    correct: 0,
    expl: "Chất rắn kết tinh có nhiệt độ nóng chảy xác định. Trong suốt thời gian nóng chảy, toàn bộ nhiệt lượng cung cấp được dùng để phá vỡ mạng tinh thể nên nhiệt độ của chất rắn không thay đổi."
  },
  "bai-2": {
    q: "Một khối khí lí tưởng nhận nhiệt lượng $Q = 100\\text{ J}$ từ môi trường và đồng thời thực hiện một công $A' = 40\\text{ J}$ đẩy piston di chuyển. Độ biến thiên nội năng $\\Delta U$ của khối khí là:",
    opts: [
      "$\\Delta U = 60\\text{ J}$",
      "$\\Delta U = 140\\text{ J}$",
      "$\\Delta U = -60\\text{ J}$",
      "$\\Delta U = 40\\text{ J}$"
    ],
    correct: 0,
    expl: "Theo định luật I nhiệt động lực học: $\\Delta U = Q + A$. Khí nhận nhiệt lượng $Q = +100\\text{ J}$; khí sinh công $A' = 40\\text{ J}$ nghĩa là công khối khí nhận vào là $A = -40\\text{ J}$. Suy ra $\\Delta U = 100 - 40 = 60\\text{ J}$."
  },
  "bai-3": {
    q: "Nhiệt độ đóng băng của nước tinh khiết ở áp suất tiêu chuẩn là $0^\\circ\\text{C}$. Theo thang nhiệt độ Kelvin, giá trị này tương ứng với:",
    opts: [
      "$273.15\\text{ K}$",
      "$0\\text{ K}$",
      "$-273.15\\text{ K}$",
      "$373.15\\text{ K}$"
    ],
    correct: 0,
    expl: "Mối liên hệ giữa nhiệt độ thang Celsius ($t$) và thang Kelvin ($T$) là: $T(\\text{K}) = t(^\\circ\\text{C}) + 273.15$. Với $t = 0^\\circ\\text{C} \\Rightarrow T = 273.15\\text{ K}$."
  },
  "bai-4": {
    q: "Cần cung cấp một nhiệt lượng bằng bao nhiêu để làm nóng $m = 2\\text{ kg}$ nước từ $20^\\circ\\text{C}$ lên $80^\\circ\\text{C}$, biết nhiệt dung riêng của nước là $c = 4180\\text{ J/(kg}\\cdot\\text{K)}$?",
    opts: [
      "$501.6\\text{ kJ}$",
      "$250.8\\text{ kJ}$",
      "$167.2\\text{ kJ}$",
      "$668.8\\text{ kJ}$"
    ],
    correct: 0,
    expl: "Công thức tính nhiệt lượng: $Q = mc\\Delta T = 2 \\times 4180 \\times (80 - 20) = 8360 \\times 60 = 501\,600\\text{ J} = 501.6\\text{ kJ}$."
  },
  "bai-5": {
    q: "Nhiệt lượng cần thiết để làm nóng chảy hoàn toàn $m = 0.5\\text{ kg}$ nước đá ở $0^\\circ\\text{C}$ là bao nhiêu, biết nhiệt nóng chảy riêng của nước đá là $\\lambda = 3.34 \\times 10^5\\text{ J/kg}$?",
    opts: [
      "$167\\text{ kJ}$",
      "$334\\text{ kJ}$",
      "$668\\text{ kJ}$",
      "$83.5\\text{ kJ}$"
    ],
    correct: 0,
    expl: "Áp dụng công thức nhiệt lượng nóng chảy: $Q = \\lambda m = 3.34 \\times 10^5 \\times 0.5 = 1.67 \\times 10^5\\text{ J} = 167\\text{ kJ}$."
  },
  "bai-6": {
    q: "Nhiệt lượng cần cung cấp để hóa hơi hoàn toàn $m = 1\\text{ kg}$ nước ở nhiệt độ sôi $100^\\circ\\text{C}$ (áp suất tiêu chuẩn), biết nhiệt hóa hơi riêng của nước $L = 2.26 \\times 10^6\\text{ J/kg}$ là:",
    opts: [
      "$2.26 \\times 10^6\\text{ J}$",
      "$1.13 \\times 10^6\\text{ J}$",
      "$4.52 \\times 10^6\\text{ J}$",
      "$2.26 \\times 10^3\\text{ J}$"
    ],
    correct: 0,
    expl: "Công thức tính nhiệt lượng hóa hơi: $Q = L \\cdot m = 2.26 \\times 10^6 \\times 1 = 2.26 \\times 10^6\\text{ J} = 2.26\\text{ MJ}$."
  },
  "bai-8": {
    q: "Trong mô hình động học phân tử chất khí, nhận định nào sau đây là KHÔNG chính xác đối với khí lí tưởng?",
    opts: [
      "Các phân tử khí luôn hút nhau rất mạnh khi ở khoảng cách xa",
      "Các phân tử khí được coi là các chất điểm không có kích thước đáng kể",
      "Các phân tử khí chuyển động hỗn loạn không ngừng về mọi phía",
      "Các phân tử chỉ tương tác với nhau khi va chạm đàn hồi"
    ],
    correct: 0,
    expl: "Trong khí lí tưởng, lực tương tác giữa các phân tử khi không va chạm được coi là bằng không (bỏ qua), chúng chỉ tương tác với nhau khi va chạm đàn hồi."
  },
  "bai-9": {
    q: "Một khối khí lí tưởng có thể tích ban đầu $V_1 = 4\\text{ lít}$ ở áp suất $p_1 = 1\\text{ bar}$. Giữ nhiệt độ không đổi (quá trình đẳng nhiệt), nén khối khí đến thể tích $V_2 = 2\\text{ lít}$. Áp suất $p_2$ sau khi nén là:",
    opts: [
      "$p_2 = 2\\text{ bar}$",
      "$p_2 = 0.5\\text{ bar}$",
      "$p_2 = 4\\text{ bar}$",
      "$p_2 = 1.5\\text{ bar}$"
    ],
    correct: 0,
    expl: "Theo định luật Boyle cho quá trình đẳng nhiệt: $p_1 V_1 = p_2 V_2 \\Rightarrow p_2 = \\frac{p_1 V_1}{V_2} = \\frac{1 \\times 4}{2} = 2\\text{ bar}$."
  },
  "bai-10": {
    q: "Một khối khí lí tưởng có thể tích $V_1 = 3\\text{ lít}$ ở nhiệt độ $T_1 = 300\\text{ K}$ ($27^\\circ\\text{C}$). Giữ áp suất không đổi (quá trình đẳng áp), đun nóng khối khí đến $T_2 = 400\\text{ K}$. Thể tích $V_2$ của khối khí là:",
    opts: [
      "$V_2 = 4\\text{ lít}$",
      "$V_2 = 2.25\\text{ lít}$",
      "$V_2 = 5\\text{ lít}$",
      "$V_2 = 3.5\\text{ lít}$"
    ],
    correct: 0,
    expl: "Theo định luật Charles cho quá trình đẳng áp: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\Rightarrow V_2 = V_1 \\frac{T_2}{T_1} = 3 \\times \\frac{400}{300} = 4\\text{ lít}$."
  },
  "bai-11": {
    q: "Phương trình trạng thái của khí lí tưởng (phương trình Clapeyron - Mendeleev) cho $n\\text{ mol}$ khí là:",
    opts: [
      "$pV = nRT = \\frac{m}{M}RT$",
      "$pT = nRV$",
      "$\\frac{pV}{T} = \\text{hằng số chỉ đúng cho 1 phân tử}$",
      "$pV = \\frac{n}{R}T$"
    ],
    correct: 0,
    expl: "Phương trình Clapeyron - Mendeleev: $pV = nRT = \\frac{m}{M}RT$ với $R \\approx 8.31\\text{ J/(mol}\\cdot\\text{K)}$ là hằng số khí lí tưởng."
  },
  "bai-13": {
    q: "Theo thuyết động học phân tử, động năng tịnh tiến trung bình của các phân tử khí lí tưởng tỉ lệ thuận với:",
    opts: [
      "Nhiệt độ tuyệt đối $T$ của khối khí ($\\bar{E}_d = \\frac{3}{2}kT$)",
      "Căn bậc hai của nhiệt độ tuyệt đối",
      "Khối lượng của mỗi phân tử khí",
      "Áp suất của khối khí"
    ],
    correct: 0,
    expl: "Hệ thức liên hệ giữa động năng phân tử và nhiệt độ: $\\bar{E}_d = \\frac{3}{2}kT$, chứng minh nhiệt độ là thước đo động năng chuyển động nhiệt trung bình của các phân tử."
  },
  "bai-14": {
    q: "Đặc điểm cơ bản của các đường sức từ trong từ trường là:",
    opts: [
      "Là những đường cong khép kín hoặc vô hạn ở hai đầu (từ trường là trường xoáy)",
      "Xuất phát từ điện tích dương và kết thúc ở điện tích âm",
      "Có thể cắt nhau tại những điểm có từ trường mạnh",
      "Luôn luôn là các đường thẳng song song cách đều"
    ],
    correct: 0,
    expl: "Từ trường không có các 'từ tích' tự do, do đó các đường sức từ luôn là những đường cong kín hoặc vô hạn ở hai đầu. Từ trường là một trường véc tơ xoáy."
  },
  "bai-15": {
    q: "Một đoạn dây dẫn thẳng dài $L = 0.2\\text{ m}$ mang dòng điện $I = 4\\text{ A}$ đặt vuông góc với vectơ cảm ứng từ đều $B = 0.5\\text{ T}$. Lực từ tác dụng lên đoạn dây dẫn bằng:",
    opts: [
      "$F = 0.4\\text{ N}$",
      "$F = 0.8\\text{ N}$",
      "$F = 0.2\\text{ N}$",
      "$F = 4\\text{ N}$"
    ],
    correct: 0,
    expl: "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện: $F = I B L \\sin\\alpha = 4 \\times 0.5 \\times 0.2 \\times \\sin 90^\\circ = 0.4\\text{ N}$."
  },
  "bai-16": {
    q: "Khung dây phẳng diện tích $S = 0.05\\text{ m}^2$ đặt trong từ trường đều $B = 0.2\\text{ T}$. Góc hợp bởi vectơ cảm ứng từ $\\vec{B}$ và vectơ pháp tuyến $\\vec{n}$ là $\\alpha = 60^\\circ$. Từ thông qua khung dây là:",
    opts: [
      "$\\Phi = 5 \\times 10^{-3}\\text{ Wb}$",
      "$\\Phi = 10^{-2}\\text{ Wb}$",
      "$\\Phi = 8.66 \\times 10^{-3}\\text{ Wb}$",
      "$\\Phi = 0.05\\text{ Wb}$"
    ],
    correct: 0,
    expl: "Công thức tính từ thông: $\\Phi = B \\cdot S \\cdot \\cos\\alpha = 0.2 \\times 0.05 \\times \\cos 60^\\circ = 0.01 \\times 0.5 = 5 \\times 10^{-3}\\text{ Wb}$."
  },
  "bai-17": {
    q: "Một máy biến áp lí tưởng có cuộn sơ cấp $N_1 = 1000\\text{ vòng}$ và cuộn thứ cấp $N_2 = 200\\text{ vòng}$. Khi đặt vào hai đầu cuộn sơ cấp điện áp xoay chiều $U_1 = 220\\text{ V}$ thì điện áp hai đầu cuộn thứ cấp để hở là:",
    opts: [
      "$U_2 = 44\\text{ V}$",
      "$U_2 = 1100\\text{ V}$",
      "$U_2 = 88\\text{ V}$",
      "$U_2 = 22\\text{ V}$"
    ],
    correct: 0,
    expl: "Hệ thức máy biến áp: $\\frac{U_2}{U_1} = \\frac{N_2}{N_1} \\Rightarrow U_2 = U_1 \\frac{N_2}{N_1} = 220 \\times \\frac{200}{1000} = 44\\text{ V}$ (đây là máy hạ áp)."
  },
  "bai-18": {
    q: "Nguyên tắc tạo ra dòng điện xoay chiều trong máy phát điện xoay chiều dựa trên hiện tượng:",
    opts: [
      "Hiện tượng cảm ứng điện từ",
      "Hiện tượng tự cảm",
      "Hiện tượng quang điện",
      "Hiện tượng nhiệt điện"
    ],
    correct: 0,
    expl: "Máy phát điện xoay chiều hoạt động dựa trên hiện tượng cảm ứng điện từ: khi quay khung dây trong từ trường (hoặc quay nam châm quanh cuộn dây), từ thông qua cuộn dây biến thiên làm xuất hiện suất điện động cảm ứng xoay chiều."
  },
  "bai-19": {
    q: "Theo thuyết điện từ của Maxwell, mối quan hệ giữa điện trường và từ trường biến thiên là:",
    opts: [
      "Từ trường biến thiên sinh ra điện trường xoáy, và điện trường biến thiên sinh ra từ trường xoáy",
      "Điện trường tĩnh sinh ra từ trường biến thiên",
      "Từ trường không đổi sinh ra điện trường xoáy",
      "Hai trường này tồn tại hoàn toàn độc lập và không tương tác lẫn nhau"
    ],
    correct: 0,
    expl: "Luận điểm Maxwell: Một từ trường biến thiên theo thời gian sinh ra một điện trường xoáy; ngược lại một điện trường biến thiên theo thời gian sinh ra một từ trường xoáy. Cả hai tạo thành điện từ trường thống nhất lan truyền trong không gian."
  },
  "bai-20": {
    q: "Hạt nhân nguyên tử $^{238}_{92}\\text{U}$ có cấu tạo gồm:",
    opts: [
      "92 proton và 146 neutron",
      "92 proton và 238 neutron",
      "146 proton và 92 neutron",
      "238 nucleon trong đó có 146 proton"
    ],
    correct: 0,
    expl: "Kí hiệu $^{A}_{Z}\\text{X}$: số proton $Z = 92$, số khối $A = 238$, số neutron $N = A - Z = 238 - 92 = 146$."
  },
  "bai-21": {
    q: "Năng lượng liên kết hạt nhân được giải phóng khi các nucleon riêng rẽ liên kết tạo thành hạt nhân được tính bằng công thức:",
    opts: [
      "$E_{lk} = \\Delta m \\cdot c^2 = [Z m_p + (A - Z) m_n - m_X] \\cdot c^2$",
      "$E_{lk} = m_X \\cdot c^2$",
      "$E_{lk} = \\frac{\\Delta m}{c^2}$",
      "$E_{lk} = \\frac{1}{2}\\Delta m \\cdot c^2$"
    ],
    correct: 0,
    expl: "Theo hệ thức Einstein: $E_{lk} = \\Delta m \\cdot c^2$ với $\\Delta m = Z m_p + (A - Z) m_n - m_X$ là độ hụt khối của hạt nhân."
  },
  "bai-22": {
    q: "Một chất phóng xạ có chu kì bán rã $T = 8\\text{ ngày}$. Ban đầu có khối lượng $m_0 = 100\\text{ g}$. Sau thời gian $t = 24\\text{ ngày}$, khối lượng chất phóng xạ còn lại chưa bị phân rã là:",
    opts: [
      "$12.5\\text{ g}$",
      "$25\\text{ g}$",
      "$6.25\\text{ g}$",
      "$50\\text{ g}$"
    ],
    correct: 0,
    expl: "Thời gian phân rã $t = 24\\text{ ngày} = 3T$. Khối lượng còn lại: $m = m_0 \\cdot 2^{-t/T} = 100 \\times 2^{-3} = \\frac{100}{8} = 12.5\\text{ g}$."
  }
};

// Insert second quiz into matching lessons
for (const [id, extra] of Object.entries(extraQuizzesPhysics12)) {
  const articleRegex = new RegExp(`(<article id="${id}"[\\s\\S]*?)(<div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">[\\s\\S]*?)(<\\/article>)`);
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
    }).join('\n        ');

    const q2Block = `
    <!-- Self-check Quiz 2 -->
    <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
      <div class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
        <i class="fa-solid fa-circle-question text-purple-500"></i> Câu hỏi tự kiểm tra (Câu 2)
      </div>
      <p class="text-sm font-medium text-gray-900 dark:text-white mb-3">${extra.q}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        ${q2OptionsHtml}
      </div>
      <div class="quiz-feedback hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed"></div>
      <input type="hidden" class="quiz-expl" value="${extra.expl.replace(/"/g, '&quot;')}">
    </div>`;

    const newArticleContent = match[1] + match[2] + q2Block + '\n  </article>';
    html = html.replace(match[0], newArticleContent);
  }
}
console.log('Added enhanced dual quizzes to 20 key lessons in vatly_12.html');

// Step 6: Define Course Exam Modal
const examModalHtmlPhysics12 = `
  <!-- Course Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 font-bold text-xs">
            Bài thi đánh giá tổng kết
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Vật Lí Lớp 12
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
            1. Người ta thực hiện một công $A = 150\\text{ J}$ để nén một lượng khí trong xilanh, đồng thời khí truyền ra môi trường xung quanh một nhiệt lượng $Q = 50\\text{ J}$. Độ biến thiên nội năng $\\Delta U$ của lượng khí là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-purple-600">
              <span>A. $\\Delta U = 100\\text{ J}$ (do $\\Delta U = Q + A = -50 + 150 = 100\\text{ J}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-purple-600">
              <span>B. $\\Delta U = 200\\text{ J}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-purple-600">
              <span>C. $\\Delta U = -100\\text{ J}$</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Nhiệt lượng cần cung cấp để làm nóng $m = 1\\text{ kg}$ nhôm từ $25^\\circ\\text{C}$ lên $75^\\circ\\text{C}$ biết nhiệt dung riêng của nhôm $c = 880\\text{ J/(kg}\\cdot\\text{K)}$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-purple-600">
              <span>A. $44\,000\\text{ J}$ (do $Q = mc\\Delta T = 1 \\times 880 \\times 50 = 44\,000\\text{ J}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-purple-600">
              <span>B. $88\,000\\text{ J}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-purple-600">
              <span>C. $22\,000\\text{ J}$</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Một khối khí lí tưởng được nén đẳng nhiệt từ thể tích $V_1 = 6\\text{ lít}$ ở áp suất $p_1 = 1.5\\text{ atm}$ đến thể tích $V_2 = 2\\text{ lít}$. Áp suất $p_2$ của khối khí sau khi nén là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-purple-600">
              <span>A. $4.5\\text{ atm}$ (theo định luật Boyle: $p_2 = \\frac{p_1 V_1}{V_2} = \\frac{1.5 \\times 6}{2} = 4.5\\text{ atm}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-purple-600">
              <span>B. $0.5\\text{ atm}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-purple-600">
              <span>C. $3.0\\text{ atm}$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Phương trình trạng thái của khí lí tưởng biểu diễn mối liên hệ giữa các thông số trạng thái $p, V, T$ của $n\\text{ mol}$ khí là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-purple-600">
              <span>A. $pV = nRT = \\frac{m}{M}RT$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-purple-600">
              <span>B. $pV = \\frac{n}{R}T$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-purple-600">
              <span>C. $\\frac{p}{V} = nRT$</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Động năng tịnh tiến trung bình của các phân tử khí lí tưởng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-purple-600">
              <span>A. Chỉ phụ thuộc vào nhiệt độ tuyệt đối $T$ của khối khí ($\\bar{E}_d = \\frac{3}{2}kT$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-purple-600">
              <span>B. Tỉ lệ thuận với khối lượng của mỗi phân tử</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-purple-600">
              <span>C. Tỉ lệ nghịch với nhiệt độ tuyệt đối $T$</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Đoạn dây dẫn thẳng dài $L = 0.5\\text{ m}$ mang dòng điện $I = 2\\text{ A}$ đặt vuông góc với vectơ cảm ứng từ đều $B = 0.4\\text{ T}$. Lực từ tác dụng lên đoạn dây là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-purple-600">
              <span>A. $0.4\\text{ N}$ (do $F = I B L \\sin 90^\\circ = 2 \\times 0.4 \\times 0.5 \\times 1 = 0.4\\text{ N}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-purple-600">
              <span>B. $0.8\\text{ N}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-purple-600">
              <span>C. $0.2\\text{ N}$</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Một máy biến áp lí tưởng có số vòng dây sơ cấp $N_1 = 1200\\text{ vòng}$, thứ cấp $N_2 = 300\\text{ vòng}$. Khi điện áp hiệu dụng sơ cấp $U_1 = 220\\text{ V}$ thì điện áp thứ cấp để hở là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-purple-600">
              <span>A. $55\\text{ V}$ (do $U_2 = U_1 \\frac{N_2}{N_1} = 220 \\times \\frac{300}{1200} = 55\\text{ V}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-purple-600">
              <span>B. $110\\text{ V}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-purple-600">
              <span>C. $880\\text{ V}$</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Hạt nhân nguyên tử đồng $^{64}_{29}\\text{Cu}$ có cấu tạo gồm:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-purple-600">
              <span>A. 29 proton và 35 neutron (do $N = A - Z = 64 - 29 = 35$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-purple-600">
              <span>B. 29 proton và 64 neutron</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-purple-600">
              <span>C. 35 proton và 29 neutron</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Đại lượng vật lí nào sau đây đặc trưng cho mức độ bền vững của một hạt nhân nguyên tử?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-purple-600">
              <span>A. Năng lượng liên kết riêng ($\\frac{E_{lk}}{A}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-purple-600">
              <span>B. Năng lượng liên kết toàn phần ($E_{lk}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-purple-600">
              <span>C. Độ hụt khối ($\\Delta m$)</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Đồng vị phóng xạ Iod $^{131}_{53}\\text{I}$ có chu kì bán rã $T = 8\\text{ ngày}$. Sau thời gian $t = 16\\text{ ngày}$, tỉ lệ phần trăm số hạt nhân Iod còn lại chưa phân rã là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-purple-600">
              <span>A. $25\\%$ (vì $t = 2T \\Rightarrow N = \\frac{N_0}{2^2} = 25\\% N_0$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-purple-600">
              <span>B. $50\\%$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-purple-600">
              <span>C. $12.5\\%$</span>
            </label>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 transition">
            Đóng
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white">
          Kết quả của bạn: 0/10 điểm
        </h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          Đang tải đánh giá năng lực...
        </p>
        <button onclick="resetCourseExam()" class="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition">
          <i class="fa-solid fa-rotate-right mr-1"></i> Làm lại bài thi
        </button>
      </div>
    </div>
  </div>
`;

// Step 7: Define comprehensive client-side script
const updatedScriptPhysics12 = `  <script>
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    themeToggle?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
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

    // Quiz evaluation
    function checkQuiz(btn, isCorrect) {
      const parent = btn.closest('.border-t') || btn.closest('article');
      const feedback = parent.querySelector('.quiz-feedback');
      const expl = parent.querySelector('.quiz-expl').value;
      const allBtns = parent.querySelectorAll('button[onclick^="checkQuiz"]');
      
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-purple-500', 'bg-purple-50');
      });

      if (isCorrect) {
        btn.classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-950/40', 'text-green-700', 'dark:text-green-300');
        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-lg text-xs leading-relaxed bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 block';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1 mb-1"><i class="fa-solid fa-circle-check"></i> Chính xác!</span>' + expl;
      } else {
        btn.classList.add('border-red-500', 'bg-red-50', 'dark:bg-red-950/40', 'text-red-700', 'dark:text-red-300');
        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-lg text-xs leading-relaxed bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 block';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1 mb-1"><i class="fa-solid fa-circle-xmark"></i> Chưa đúng!</span>' + expl;
      }
      feedback.classList.remove('hidden');

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
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ chương trình Vật lí 12 GDPT 2018!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc về Nhiệt học, Khí lí tưởng, Từ trường và Vật lí hạt nhân.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy ôn luyện thêm các dạng bài phương trình trạng thái khí và hiện tượng phóng xạ nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc kỹ lại các lý thuyết và ví dụ mẫu của từng bài học nhé!';
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
            link.classList.add('text-purple-600', 'font-bold', 'bg-purple-50', 'dark:bg-purple-900/30');
          } else {
            link.classList.remove('text-purple-600', 'font-bold', 'bg-purple-50', 'dark:bg-purple-900/30');
          }
        });
      }
    });
  </script>
`;

// Replace script section and insert Exam Modal before script
const scriptStartIdx = html.indexOf('<script>\n    // Theme toggle');
if (scriptStartIdx !== -1) {
  const scriptEndIdx = html.indexOf('</body>', scriptStartIdx);
  html = html.substring(0, scriptStartIdx) + '\n' + examModalHtmlPhysics12 + '\n' + updatedScriptPhysics12 + '\n' + html.substring(scriptEndIdx);
  console.log('Updated client-side script block and inserted Exam Modal');
} else {
  html = html.replace('</body>', examModalHtmlPhysics12 + '\n' + updatedScriptPhysics12 + '\n</body>');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully upgraded courses/vatly_12.html! New size:', html.length, 'bytes');
