const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'courses', 'vatly_11.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original vatly_11.html size:', html.length);

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
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 transition-all duration-150" style="width: 0%;"></div>
`;
  html = html.replace('<body class="', `${progressBar}<body class="`);
  console.log('Added Reading Progress Bar');
}

// Step 3: Add Course Exam Button in Navbar
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

// Step 4: Add Search Bar in Sidebar
if (!html.includes('id="lessonSearch"')) {
  const searchBar = `<!-- Search Bar -->
          <div class="mb-3">
            <div class="relative">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-400 text-xs"></i>
              <input type="text" 
                     id="lessonSearch" 
                     placeholder="Tìm kiếm bài học Vật lí 11..." 
                     class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
            </div>
          </div>
          `;
  html = html.replace('<div class="space-y-6">', `${searchBar}<div class="space-y-6">`);
  console.log('Added Search Bar to sidebar');
}

// Step 5: Add Dual Interactive Quizzes to 23 Key Lessons
const extraQuizzesPhysics11 = {
  "bai-1": {
    q: "Một chất điểm dao động điều hòa với chu kỳ $T = 0.5\\text{ s}$. Tần số góc $\\omega$ của dao động bằng:",
    opts: [
      "$\\omega = 4\\pi\\text{ rad/s}$",
      "$\\omega = 2\\pi\\text{ rad/s}$",
      "$\\omega = \\pi\\text{ rad/s}$",
      "$\\omega = 8\\pi\\text{ rad/s}$"
    ],
    correct: 0,
    expl: "Tần số góc liên hệ với chu kỳ qua công thức: $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.5} = 4\\pi\\text{ rad/s}$."
  },
  "bai-2": {
    q: "Một vật dao động điều hòa theo phương trình $x = A\\cos(\\omega t + \\varphi)$. Tại thời điểm $t = 0$, pha ban đầu $\\varphi = \\frac{\\pi}{3}\\text{ rad}$ cho biết:",
    opts: [
      "Vật đang ở li độ $x = \\frac{A}{2}$ và chuyển động theo chiều âm của trục tọa độ",
      "Vật đang ở li độ $x = \\frac{A}{2}$ và chuyển động theo chiều dương",
      "Vật đang ở vị trí cân bằng và chuyển động theo chiều âm",
      "Vật đang ở vị trí biên dương $x = +A$"
    ],
    correct: 0,
    expl: "Tại $t = 0$, li độ $x = A\\cos(\\frac{\\pi}{3}) = \\frac{A}{2}$. Vận tốc $v = -\\omega A\\sin(\\frac{\\pi}{3}) < 0$, do đó vật đang chuyển động theo chiều âm."
  },
  "bai-3": {
    q: "Trong dao động điều hòa, mối quan hệ về pha giữa gia tốc $a$ và li độ $x$ của vật là:",
    opts: [
      "Gia tốc luôn ngược pha với li độ ($a = -\\omega^2 x$)",
      "Gia tốc cùng pha với li độ",
      "Gia tốc sớm pha $\\frac{\\pi}{2}$ so với li độ",
      "Gia tốc trễ pha $\\frac{\\pi}{2}$ so với li độ"
    ],
    correct: 0,
    expl: "Theo định luật động học vi phân của dao động điều hòa: $a = x'' = -\\omega^2 x = \\omega^2 A\\cos(\\omega t + \\varphi + \\pi)$. Gia tốc luôn ngược pha (lệch pha $\\pi$) so với li độ."
  },
  "bai-4": {
    q: "Một con lắc lò xo dao động điều hòa với biên độ $A = 10\\text{ cm}$. Tại vị trí vật có li độ $x = 6\\text{ cm}$, tỉ số giữa thế năng và động năng $\\frac{W_t}{W_đ}$ bằng:",
    opts: [
      "$\\frac{9}{16}$",
      "$\\frac{16}{9}$",
      "$\\frac{3}{5}$",
      "$\\frac{9}{25}$"
    ],
    correct: 0,
    expl: "Thế năng $W_t = \\frac{1}{2}kx^2 \\sim 6^2 = 36$. Động năng $W_đ = W - W_t = \\frac{1}{2}k(A^2 - x^2) \\sim 100 - 36 = 64$. Tỉ số $\\frac{W_t}{W_đ} = \\frac{36}{64} = \\frac{9}{16}$."
  },
  "bai-5": {
    q: "Trong dao động điều hòa, động năng và thế năng của vật biến thiên tuần hoàn theo thời gian với chu kì $T'$ và tần số $f'$ là:",
    opts: [
      "$T' = \\frac{T}{2}$ và $f' = 2f$",
      "$T' = T$ và $f' = f$",
      "$T' = 2T$ và $f' = \\frac{f}{2}$",
      "$T' = \\frac{T}{4}$ và $f' = 4f$"
    ],
    correct: 0,
    expl: "Trong dao động điều hòa chu kì $T$ và tần số $f$, động năng và thế năng biến đổi tuần hoàn với chu kì bằng một nửa chu kì dao động ($T' = T/2$) và tần số gấp đôi tần số dao động ($f' = 2f$), trong khi cơ năng toàn phần được bảo toàn."
  },
  "bai-6": {
    q: "Hiện tượng cộng hưởng cơ học xảy ra khi:",
    opts: [
      "Tần số của ngoại lực cưỡng bức xấp xỉ bằng tần số dao động riêng của hệ ($f \\approx f_0$)",
      "Lực ma sát và lực cản của môi trường rất lớn",
      "Tần số ngoại lực lớn gấp 2 lần tần số riêng của hệ",
      "Hệ không chịu tác dụng của bất kỳ ngoại lực nào"
    ],
    correct: 0,
    expl: "Hiện tượng cộng hưởng là hiện tượng biên độ dao động cưỡng bức tăng đến giá trị cực đại khi tần số của ngoại lực cưỡng bức bằng hoặc xấp xỉ bằng tần số dao động riêng của hệ dao động ($f \\approx f_0$)."
  },
  "bai-7": {
    q: "Một con lắc lò xo có khối lượng $m = 200\\text{ g} = 0.2\\text{ kg}$ dao động điều hòa với tần số góc $\\omega = 20\\text{ rad/s}$ và biên độ $A = 5\\text{ cm} = 0.05\\text{ m}$. Cơ năng dao động của con lắc là:",
    opts: [
      "$W = 0.1\\text{ J}$",
      "$W = 0.2\\text{ J}$",
      "$W = 0.05\\text{ J}$",
      "$W = 100\\text{ J}$"
    ],
    correct: 0,
    expl: "Cơ năng dao động: $W = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2} \\times 0.2 \\times 20^2 \\times 0.05^2 = 0.1 \\times 400 \\times 0.0025 = 0.1\\text{ J}$."
  },
  "bai-8": {
    q: "Một sóng cơ hình sin truyền với tốc độ $v = 1.2\\text{ m/s}$ và chu kì dao động $T = 0.4\\text{ s}$. Bước sóng $\\lambda$ của sóng bằng:",
    opts: [
      "$\\lambda = 48\\text{ cm}$",
      "$\\lambda = 30\\text{ cm}$",
      "$\\lambda = 3\\text{ m}$",
      "$\\lambda = 0.48\\text{ cm}$"
    ],
    correct: 0,
    expl: "Bước sóng là quãng đường sóng truyền đi được trong một chu kì: $\\lambda = v \\cdot T = 1.2 \\times 0.4 = 0.48\\text{ m} = 48\\text{ cm}$."
  },
  "bai-9": {
    q: "Sóng ngang là sóng có phương dao động của các phần tử môi trường:",
    opts: [
      "Vuông góc với phương truyền sóng",
      "Trùng với phương truyền sóng",
      "Song song với phương truyền sóng",
      "Luôn hướng thẳng đứng lên trên"
    ],
    correct: 0,
    expl: "Định nghĩa: Sóng ngang là sóng mà phương dao động của các phần tử môi trường vuông góc với phương truyền sóng. Sóng ngang truyền được trong chất rắn và trên bề mặt chất lỏng."
  },
  "bai-11": {
    q: "Đặc điểm nào sau đây KHÔNG đúng đối với sóng điện từ?",
    opts: [
      "Sóng điện từ là sóng dọc và cần môi trường vật chất đàn hồi để truyền đi",
      "Sóng điện từ là sóng ngang, truyền được trong cả chân không",
      "Vectơ cường độ điện trường $\\vec{E}$ và vectơ cảm ứng từ $\\vec{B}$ luôn vuông góc với nhau và vuông góc với phương truyền sóng",
      "Tốc độ lan truyền sóng điện từ trong chân không bằng $c \\approx 3 \\times 10^8\\text{ m/s}$"
    ],
    correct: 0,
    expl: "Sóng điện từ là sóng ngang và truyền được trong chân không mà không cần môi trường vật chất. Nhận định 'sóng điện từ là sóng dọc cần môi trường vật chất' là sai."
  },
  "bai-12": {
    q: "Trong hiện tượng giao thoa sóng nước của hai nguồn kết hợp cùng pha phát sóng có bước sóng $\\lambda$, những điểm dao động với biên độ cực đại thỏa mãn điều kiện hiệu khoảng cách $d_2 - d_1$ là:",
    opts: [
      "$d_2 - d_1 = k\\lambda \\quad (k \\in \\mathbb{Z})$",
      "$d_2 - d_1 = (k + 0.5)\\lambda \\quad (k \\in \\mathbb{Z})$",
      "$d_2 - d_1 = (2k + 1)\\frac{\\lambda}{4} \\quad (k \\in \\mathbb{Z})$",
      "$d_2 - d_1 = k\\frac{\\lambda}{2} \\quad (k \\in \\mathbb{Z})$"
    ],
    correct: 0,
    expl: "Hai nguồn cùng pha: cực đại giao thoa có hiệu đường đi bằng một số nguyên lần bước sóng: $d_2 - d_1 = k\\lambda$ ($k \\in \\mathbb{Z}$)."
  },
  "bai-13": {
    q: "Trên một sợi dây đàn hồi đang có sóng dừng ổn định, khoảng cách giữa hai nút sóng liên tiếp (hoặc hai bụng sóng liên tiếp) bằng:",
    opts: [
      "$\\frac{\\lambda}{2}$",
      "$\\lambda$",
      "$\\frac{\\lambda}{4}$",
      "$2\\lambda$"
    ],
    correct: 0,
    expl: "Khoảng cách giữa hai nút sóng liên tiếp (hoặc hai bụng sóng liên tiếp) luôn bằng nửa bước sóng: $\\frac{\\lambda}{2}$. Khoảng cách giữa một nút và một bụng liền kề là $\\frac{\\lambda}{4}$."
  },
  "bai-14": {
    q: "Một sợi dây đàn hồi dài $L = 1.2\\text{ m}$ hai đầu cố định, trên dây có sóng dừng với 3 bụng sóng. Bước sóng $\\lambda$ trên dây là:",
    opts: [
      "$\\lambda = 0.8\\text{ m}$",
      "$\\lambda = 0.4\\text{ m}$",
      "$\\lambda = 1.2\\text{ m}$",
      "$\\lambda = 2.4\\text{ m}$"
    ],
    correct: 0,
    expl: "Điều kiện sóng dừng hai đầu cố định: $L = k\\frac{\\lambda}{2}$. Với 3 bụng sóng ($k = 3$): $\\lambda = \\frac{2L}{k} = \\frac{2 \\times 1.2}{3} = 0.8\\text{ m} = 80\\text{ cm}$."
  },
  "bai-16": {
    q: "Hai điện tích điểm $q_1 = 2 \\times 10^{-8}\\text{ C}$ và $q_2 = -4 \\times 10^{-8}\\text{ C}$ đặt cách nhau $r = 3\\text{ cm} = 0.03\\text{ m}$ trong chân không ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$). Lực tương tác tĩnh điện giữa chúng là:",
    opts: [
      "Lực hút có độ lớn $F = 8 \\times 10^{-3}\\text{ N}$",
      "Lực đẩy có độ lớn $F = 8 \\times 10^{-3}\\text{ N}$",
      "Lực hút có độ lớn $F = 2.4 \\times 10^{-4}\\text{ N}$",
      "Lực đẩy có độ lớn $F = 2.4 \\times 10^{-4}\\text{ N}$"
    ],
    correct: 0,
    expl: "Vì hai điện tích trái dấu nên chúng hút nhau. Độ lớn lực: $F = k\\frac{|q_1 q_2|}{r^2} = 9 \\times 10^9 \\times \\frac{8 \\times 10^{-16}}{0.03^2} = 9 \\times 10^9 \\times \\frac{8 \\times 10^{-16}}{9 \\times 10^{-4}} = 8 \\times 10^{-3}\\text{ N}$."
  },
  "bai-17": {
    q: "Cường độ điện trường do điện tích điểm $Q$ sinh ra tại một điểm cách nó một khoảng $r$ trong chân không có độ lớn được tính bằng công thức:",
    opts: [
      "$E = k \\frac{|Q|}{r^2}$",
      "$E = k \\frac{|Q|}{r}$",
      "$E = k \\frac{Q^2}{r}$",
      "$E = k \\frac{|Q|}{2r}$"
    ],
    correct: 0,
    expl: "Độ lớn cường độ điện trường của điện tích điểm: $E = k\\frac{|Q|}{r^2}$, tỉ lệ thuận với độ lớn điện tích $|Q|$ và tỉ lệ nghịch với bình phương khoảng cách $r^2$."
  },
  "bai-18": {
    q: "Hiệu điện thế giữa hai bản kim loại phẳng tích điện trái dấu cách nhau $d = 2\\text{ cm} = 0.02\\text{ m}$ là $U = 100\\text{ V}$. Cường độ điện trường đều giữa hai bản là:",
    opts: [
      "$E = 5000\\text{ V/m}$",
      "$E = 200\\text{ V/m}$",
      "$E = 50\\text{ V/m}$",
      "$E = 2\\text{ V/m}$"
    ],
    correct: 0,
    expl: "Trong điện trường đều, mối liên hệ giữa hiệu điện thế và cường độ điện trường là: $E = \\frac{U}{d} = \\frac{100}{0.02} = 5000\\text{ V/m}$."
  },
  "bai-19": {
    q: "Công của lực điện tác dụng lên một điện tích khi điện tích đó dịch chuyển trong điện trường đều có đặc điểm nào sau đây?",
    opts: [
      "Không phụ thuộc vào hình dạng đường đi, chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối",
      "Tỉ lệ thuận với độ dài quỹ đạo chuyển động",
      "Luôn luôn bằng 0 trên mọi quỹ đạo cong",
      "Phụ thuộc vào khối lượng của điện tích dịch chuyển"
    ],
    correct: 0,
    expl: "Điện trường tĩnh là một trường lực thế nên công của lực điện $A = qEd$ không phụ thuộc vào dạng quỹ đạo chuyển động mà chỉ phụ thuộc vào toạ độ vị trí đầu và vị trí cuối của điện tích."
  },
  "bai-20": {
    q: "Hiệu điện thế giữa hai điểm M và N trong điện trường là $U_{MN} = 24\\text{ V}$. Khi dịch chuyển một điện tích $q = 2\\text{ C}$ từ M đến N thì công của lực điện thực hiện bằng:",
    opts: [
      "$A_{MN} = 48\\text{ J}$",
      "$A_{MN} = 12\\text{ J}$",
      "$A_{MN} = 24\\text{ J}$",
      "$A_{MN} = 96\\text{ J}$"
    ],
    correct: 0,
    expl: "Theo định nghĩa hiệu điện thế: $U_{MN} = \\frac{A_{MN}}{q} \\Rightarrow A_{MN} = q \\cdot U_{MN} = 2 \\times 24 = 48\\text{ J}$."
  },
  "bai-21": {
    q: "Một tụ điện có điện dung $C = 20\\text{ }\\mu\\text{F} = 20 \\times 10^{-6}\\text{ F}$ được mắc vào hai cực nguồn điện có hiệu điện thế $U = 50\\text{ V}$. Năng lượng điện trường tích lũy trong tụ là:",
    opts: [
      "$W = 0.025\\text{ J}$",
      "$W = 0.05\\text{ J}$",
      "$W = 25\\text{ J}$",
      "$W = 0.001\\text{ J}$"
    ],
    correct: 0,
    expl: "Năng lượng điện trường của tụ điện: $W = \\frac{1}{2}CU^2 = \\frac{1}{2} \\times (20 \\times 10^{-6}) \\times 50^2 = 10^{-5} \\times 2500 = 0.025\\text{ J}$."
  },
  "bai-22": {
    q: "Một dòng điện không đổi có cường độ $I = 2\\text{ A}$ chạy qua một dây dẫn kim loại trong thời gian $10\\text{ s}$. Điện lượng $q$ dịch chuyển qua tiết diện thẳng của dây là:",
    opts: [
      "$q = 20\\text{ C}$",
      "$q = 5\\text{ C}$",
      "$q = 0.2\\text{ C}$",
      "$q = 200\\text{ C}$"
    ],
    correct: 0,
    expl: "Điện lượng chuyển qua tiết diện dây: $q = I \\cdot t = 2 \\times 10 = 20\\text{ C}$."
  },
  "bai-23": {
    q: "Đặt hiệu điện thế $U = 12\\text{ V}$ vào hai đầu điện trở thuần $R = 6\\text{ }\\Omega$. Cường độ dòng điện chạy qua điện trở là:",
    opts: [
      "$I = 2\\text{ A}$",
      "$I = 0.5\\text{ A}$",
      "$I = 72\\text{ A}$",
      "$I = 3\\text{ A}$"
    ],
    correct: 0,
    expl: "Theo định luật Ohm cho đoạn mạch: $I = \\frac{U}{R} = \\frac{12}{6} = 2\\text{ A}$."
  },
  "bai-24": {
    q: "Suất điện động $\\mathcal{E}$ của nguồn điện là đại lượng đặc trưng cho:",
    opts: [
      "Khả năng thực hiện công của các lực lạ bên trong nguồn điện",
      "Khả năng cản trở dòng điện của nguồn",
      "Lực tĩnh điện tác dụng lên các hạt tải điện trong mạch",
      "Nhiệt lượng tỏa ra trên nguồn điện"
    ],
    correct: 0,
    expl: "Suất điện động $\\mathcal{E} = \\frac{A}{q}$ là đại lượng đặc trưng cho khả năng thực hiện công của lực lạ bên trong nguồn điện để tách và di chuyển các điện tích tạo nên dòng điện."
  },
  "bai-25": {
    q: "Một bóng đèn điện tiêu thụ công suất $\\mathcal{P} = 100\\text{ W}$. Điện năng tiêu thụ của bóng đèn khi thắp sáng liên tục trong thời gian $5\\text{ giờ}$ là:",
    opts: [
      "$0.5\\text{ kWh} = 1.8 \\times 10^6\\text{ J}$",
      "$500\\text{ kWh}$",
      "$0.5\\text{ J}$",
      "$500\\text{ J}$"
    ],
    correct: 0,
    expl: "Điện năng tiêu thụ: $A = \\mathcal{P} \\cdot t = 0.1\\text{ kW} \\times 5\\text{ h} = 0.5\\text{ kWh}$. Đổi sang Joule: $0.5 \\times 3.6 \\times 10^6\\text{ J} = 1.8 \\times 10^6\\text{ J}$."
  }
};

// Insert second quiz into matching lessons
for (const [id, extra] of Object.entries(extraQuizzesPhysics11)) {
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
        <i class="fa-solid fa-circle-question text-indigo-500"></i> Câu hỏi tự kiểm tra (Câu 2)
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
console.log('Added enhanced dual quizzes to 23 key lessons in vatly_11.html');

// Step 6: Define Course Exam Modal
const examModalHtmlPhysics11 = `
  <!-- Course Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-bold text-xs">
            Bài thi đánh giá tổng kết
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Vật Lí Lớp 11
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
            1. Một chất điểm dao động điều hòa với phương trình $x = 5\\cos(10\\pi t + \\frac{\\pi}{3})\\text{ (cm)}$. Pha ban đầu và chu kì dao động của vật lần lượt là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-indigo-600">
              <span>A. $\\varphi = \\frac{\\pi}{3}\\text{ rad}$ và $T = 0.2\\text{ s}$ (do $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{10\\pi} = 0.2\\text{ s}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-indigo-600">
              <span>B. $\\varphi = \\frac{\\pi}{3}\\text{ rad}$ và $T = 5\\text{ s}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-indigo-600">
              <span>C. $\\varphi = 5\\text{ cm}$ và $T = 0.2\\text{ s}$</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Trong dao động điều hòa, khi chất điểm chuyển động từ vị trí biên về vị trí cân bằng thì:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-indigo-600">
              <span>A. Vận tốc và gia tốc cùng chiều (chuyển động nhanh dần về vị trí cân bằng)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-indigo-600">
              <span>B. Vận tốc và gia tốc ngược chiều nhau</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-indigo-600">
              <span>C. Độ lớn gia tốc tăng dần đến cực đại</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Một con lắc lò xo có độ cứng $k = 100\\text{ N/m}$ dao động điều hòa với biên độ $A = 4\\text{ cm} = 0.04\\text{ m}$. Cơ năng dao động của con lắc là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-indigo-600">
              <span>A. $0.08\\text{ J}$ (do $W = \\frac{1}{2}kA^2 = \\frac{1}{2} \\times 100 \\times 0.0016 = 0.08\\text{ J}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-indigo-600">
              <span>B. $0.16\\text{ J}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-indigo-600">
              <span>C. $80\\text{ J}$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Một con lắc đơn có tần số dao động riêng là $f_0 = 2\\text{ Hz}$. Kích thích con lắc dao động cưỡng bức bằng ngoại lực tuần hoàn. Hiện tượng cộng hưởng xảy ra khi tần số ngoại lực bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-indigo-600">
              <span>A. $2\\text{ Hz}$ (tần số ngoại lực bằng tần số riêng $f = f_0$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-indigo-600">
              <span>B. $4\\text{ Hz}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-indigo-600">
              <span>C. $1\\text{ Hz}$</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Một sóng cơ hình sin có tần số $f = 50\\text{ Hz}$ truyền trong môi trường với tốc độ $v = 150\\text{ m/s}$. Bước sóng $\\lambda$ của sóng là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-indigo-600">
              <span>A. $3\\text{ m}$ (do $\\lambda = \\frac{v}{f} = \\frac{150}{50} = 3\\text{ m}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-indigo-600">
              <span>B. $7500\\text{ m}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-indigo-600">
              <span>C. $0.33\\text{ m}$</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Giao thoa sóng nước với hai nguồn kết hợp cùng pha có bước sóng $\\lambda = 2\\text{ cm}$. Điểm M có khoảng cách đến hai nguồn lần lượt là $d_1 = 16\\text{ cm}$ và $d_2 = 20\\text{ cm}$ thuộc:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-indigo-600">
              <span>A. Vân cực đại giao thoa bậc 2 (vì $d_2 - d_1 = 4\\text{ cm} = 2\\lambda$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-indigo-600">
              <span>B. Vân cực tiểu giao thoa thứ 2</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-indigo-600">
              <span>C. Vân cực đại giao thoa bậc 4</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Một sợi dây đàn hồi hai đầu cố định dài $L = 60\\text{ cm}$, trên dây đang có sóng dừng với 3 bụng sóng. Khoảng cách giữa hai nút sóng liên tiếp là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-indigo-600">
              <span>A. $20\\text{ cm}$ (do $L = 3\\frac{\\lambda}{2} \\Rightarrow \\frac{\\lambda}{2} = 20\\text{ cm}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-indigo-600">
              <span>B. $40\\text{ cm}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-indigo-600">
              <span>C. $10\\text{ cm}$</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Khoảng cách giữa hai điện tích điểm trong chân không tăng lên 2 lần ($r' = 2r$), độ lớn các điện tích giữ nguyên. Lực tương tác tĩnh điện giữa chúng sẽ:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-indigo-600">
              <span>A. Giảm đi 4 lần (theo định luật Coulomb $F \\sim \\frac{1}{r^2}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-indigo-600">
              <span>B. Giảm đi 2 lần</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-indigo-600">
              <span>C. Tăng lên 4 lần</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Một tụ điện có điện dung $C = 10\\text{ }\\mu\\text{F}$ được nối vào hai đầu nguồn điện có hiệu điện thế $U = 12\\text{ V}$. Điện tích tích trữ trên tụ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-indigo-600">
              <span>A. $120\\text{ }\\mu\\text{C}$ (do $Q = C \\cdot U = 10 \\times 12 = 120\\text{ }\\mu\\text{C}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-indigo-600">
              <span>B. $1.2\\text{ }\\mu\\text{C}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-indigo-600">
              <span>C. $60\\text{ }\\mu\\text{C}$</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Nguồn điện có suất điện động $\\mathcal{E} = 12\\text{ V}$, điện trở trong $r = 1\\text{ }\\Omega$ cấp điện cho điện trở ngoài $R = 5\\text{ }\\Omega$. Cường độ dòng điện $I$ trong mạch và hiệu điện thế mạch ngoài $U_N$ là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-indigo-600">
              <span>A. $I = 2\\text{ A}$ và $U_N = 10\\text{ V}$ ($I = \\frac{\\mathcal{E}}{R+r} = 2\\text{ A}$, $U_N = IR = 10\\text{ V}$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-indigo-600">
              <span>B. $I = 2.4\\text{ A}$ và $U_N = 12\\text{ V}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-indigo-600">
              <span>C. $I = 1\\text{ A}$ và $U_N = 5\\text{ V}$</span>
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

// Step 7: Define comprehensive client-side script
const updatedScriptPhysics11 = `  <script>
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    themeToggle?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
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
        b.classList.remove('border-indigo-500', 'bg-indigo-50');
      });

      if (isCorrect) {
        btn.classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-950/40', 'text-green-700', 'dark:text-green-300');
        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-lg text-xs leading-relaxed bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 block';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1 mb-1"><i class="fa-solid fa-circle-check text-green-600"></i> Chính xác!</span>' + expl;
      } else {
        btn.classList.add('border-red-500', 'bg-red-50', 'dark:bg-red-950/40', 'text-red-700', 'dark:text-red-300');
        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-lg text-xs leading-relaxed bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 block';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1 mb-1"><i class="fa-solid fa-circle-xmark text-red-600"></i> Chưa đúng!</span>' + expl;
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
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ chương trình Vật lí 11 GDPT 2018!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc về Dao động điều hòa, Sóng cơ, Điện trường và Mạch điện.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy ôn luyện thêm các dạng bài sóng dừng, giao thoa và định luật Ohm cho toàn mạch nhé!';
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
            link.classList.add('text-indigo-600', 'font-bold', 'bg-indigo-50', 'dark:bg-indigo-900/30');
          } else {
            link.classList.remove('text-indigo-600', 'font-bold', 'bg-indigo-50', 'dark:bg-indigo-900/30');
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
  html = html.substring(0, scriptStartIdx) + '\n' + examModalHtmlPhysics11 + '\n' + updatedScriptPhysics11 + '\n' + html.substring(scriptEndIdx);
  console.log('Updated client-side script block and inserted Exam Modal');
} else {
  html = html.replace('</body>', examModalHtmlPhysics11 + '\n' + updatedScriptPhysics11 + '\n</body>');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully upgraded courses/vatly_11.html! New size:', html.length, 'bytes');
