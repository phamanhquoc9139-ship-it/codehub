// scratch/build_toan9_page.js
const fs = require('fs');
const path = require('path');

const dataP1 = require('./toan9_data_p1.js');
const dataP2 = require('./toan9_data_p2.js');
const svgs = require('./toan9_svgs.js');
const examQuestions = require('./toan9_exam.js');

const allChapters = [...dataP1.chapters, ...dataP2.chapters];
const practicalProjects = dataP2.practicalProjects;
const quickFormulas = dataP2.quickFormulas;
const problemSolvingSteps = dataP2.problemSolvingSteps;

// Mistakes data
const classicMistakes = [
  {
    title: "1. Quên điều kiện xác định (ĐKXĐ)",
    desc: "Khi giải phương trình chứa ẩn ở mẫu hoặc biểu thức chứa căn bậc hai $\\sqrt{A}$, học sinh thường quên đặt ĐKXĐ (mẫu $\\neq 0$, $A \\ge 0$) hoặc quên đối chiếu nghiệm sau khi giải xong dẫn đến nhận nghiệm ngoại lai."
  },
  {
    title: "2. Nhân/chia bất đẳng thức với số âm không đổi chiều",
    desc: "Khi nhân hoặc chia hai vế của bất phương trình với một số âm, bắt buộc phải ĐỔI CHIỀU dấu bất đẳng thức ($a > b \\iff ac < bc$ với $c < 0$). Rất nhiều bạn giữ nguyên chiều dẫn đến sai hoàn toàn tập nghiệm."
  },
  {
    title: "3. Khai căn sai lầm: $\\sqrt{A^2} = A$",
    desc: "Công thức chuẩn là $\\sqrt{A^2} = |A|$. Nếu chưa biết dấu của $A$, tuyệt đối không được bỏ dấu giá trị tuyệt đối. Ví dụ: $\\sqrt{(2 - \\sqrt{5})^2} = |2 - \\sqrt{5}| = \\sqrt{5} - 2$, không phải $2 - \\sqrt{5}$."
  },
  {
    title: "4. Tách căn của một tổng: $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ (Sai nghiêm trọng)",
    desc: "Phép khai phương CHỈ có tính chất phân phối với phép nhân và phép chia, KHÔNG có tính chất phân phối với phép cộng/trừ! $\\sqrt{a + b} < \\sqrt{a} + \\sqrt{b}$ với $a, b > 0$."
  },
  {
    title: "5. Nhầm lẫn giữa góc ở tâm và góc nội tiếp",
    desc: "Góc nội tiếp bằng NỬA số đo cung bị chắn (bằng nửa góc ở tâm cùng chắn cung đó). Nhiều học sinh quên chia 2 khi tính góc nội tiếp từ góc ở tâm."
  },
  {
    title: "6. Dùng nhầm đường kính $d$ thay vì bán kính $r$ trong hình trụ/nón/cầu",
    desc: "Đề bài thường cho đường kính đáy $d$. Nếu không chia đôi để lấy bán kính $r = d/2$ trước khi áp dụng công thức $V = \\pi r^2 h$ hay $S = 4\\pi R^2$, kết quả sẽ sai lệch từ 2 đến 8 lần."
  },
  {
    title: "7. Quên điều kiện tồn tại 2 nghiệm khi dùng Viète",
    desc: "Để áp dụng định lí Viète, phương trình $ax^2 + bx + c = 0$ ($a \\neq 0$) BẮT BUỘC phải có nghiệm, tức là phải có điều kiện $\\Delta \\ge 0$ (hoặc $\\Delta > 0$ nếu đề yêu cầu 2 nghiệm phân biệt)."
  },
  {
    title: "8. Ngộ nhận tính đồng khả năng trong xác suất",
    desc: "Ví dụ khi gieo hai con xúc xắc, tổng số chấm từ 2 đến 12 KHÔNG đồng khả năng (tổng 7 có 6 cách xuất hiện, trong khi tổng 2 chỉ có 1 cách). Phải luôn xét không gian mẫu gồm 36 cặp có thứ tự."
  },
  {
    title: "9. Nhầm lẫn khoảng nửa mở $[a; b)$ trong thống kê ghép nhóm",
    desc: "Giá trị biên phải $b$ KHÔNG thuộc nhóm $[a; b)$ mà thuộc nhóm kế tiếp $[b; c)$. Ví dụ giá trị 160cm thuộc nhóm $[160; 170)$, không thuộc $[150; 160)$."
  },
  {
    title: "10. Làm tròn số quá sớm trong các bước trung gian",
    desc: "Trong các bài toán thực tế (tỉ số lượng giác, hình khối, thống kê), nếu làm tròn số quá sớm ở các bước giữa sẽ tích luỹ sai số lớn. Chỉ làm tròn ở bước đáp số cuối cùng."
  }
];

// Generate Lessons HTML
function renderLessonsHTML() {
  return allChapters.map(chap => {
    const lessonsHTML = chap.lessons.map(l => {
      const svgHTML = l.svgKey && svgs[l.svgKey] ? `
        <div class="my-5 overflow-hidden">
          ${svgs[l.svgKey]}
        </div>
      ` : '';

      const sectionsHTML = l.sections.map(s => `
        <div class="mb-6 p-5 bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
          <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            ${s.heading}
          </h4>
          <div class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
            ${s.content}
          </div>
        </div>
      `).join('');

      const quizHTML = l.quiz && l.quiz.length > 0 ? `
        <div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố Kiến Thức (${l.quiz.length} câu)
            </h4>
            <span class="text-[11px] font-semibold text-slate-400">Chọn đáp án đúng nhất</span>
          </div>
          <div class="space-y-4">
            ${l.quiz.map((qItem, qIdx) => `
              <div class="p-3.5 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs">
                <p class="font-bold text-slate-900 dark:text-white mb-2.5">
                  <span class="text-blue-600 dark:text-blue-400">Câu ${qIdx + 1}:</span> ${qItem.q}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
                  ${qItem.options.map((opt, optIdx) => `
                    <button onclick="checkLessonQuiz(this, ${qItem.ans === optIdx}, '${qItem.exp.replace(/'/g, "\\'")}')" 
                            class="quiz-btn text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition flex items-center gap-2">
                      <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-[10px] text-slate-600 dark:text-slate-300 shrink-0">
                        ${String.fromCharCode(65 + optIdx)}
                      </span>
                      <span class="font-medium text-slate-700 dark:text-slate-300">${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="quiz-feedback hidden p-2.5 rounded-lg text-[11px] mt-2"></div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : '';

      return `
        <article id="${l.id}" class="lesson-card bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2.5">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-blue-500/20 tracking-wide">
                <i class="fa-solid fa-graduation-cap"></i> ${l.number}
              </span>
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                ${l.tag}
              </span>
            </div>
            <button onclick="toggleBookmark('${l.id}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-3 leading-snug tracking-tight">
            <span class="text-blue-600 dark:text-blue-400">${l.number}:</span> ${l.title}
          </h3>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            ${l.summary}
          </p>

          ${svgHTML}
          ${sectionsHTML}
          ${quizHTML}
        </article>
      `;
    }).join('');

    return `
      <section id="${chap.id}" class="chapter-wrapper mb-14">
        <!-- Chapter Header -->
        <div class="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/25 shrink-0">
            ${chap.number}
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-800/60">${chap.badge}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Chương ${chap.number}: ${chap.title}
            </h2>
            <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">${chap.subtitle}</p>
          </div>
        </div>

        ${lessonsHTML}
      </section>
    `;
  }).join('');
}

// Generate Practical Projects HTML
function renderPracticalHTML() {
  return practicalProjects.map((p, idx) => `
    <div id="${p.id}" class="p-5 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 mb-4">
      <div class="flex items-center gap-2.5 mb-2">
        <span class="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
          Hoạt động ${idx + 1}
        </span>
        <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">${p.badge}</span>
      </div>
      <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">${p.title}</h4>
      <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${p.content}</div>
    </div>
  `).join('');
}

// Generate Quick Formulas HTML for Modal
function renderFormulasModalHTML() {
  return quickFormulas.map((f, i) => `
    <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
      <div class="font-bold text-blue-700 dark:text-blue-300 sm:w-1/3">${f.topic}</div>
      <div class="text-slate-900 dark:text-white sm:w-2/3 text-left sm:text-right font-semibold">$$${f.formula}$$</div>
    </div>
  `).join('');
}

// Generate Mistakes Modal HTML
function renderMistakesModalHTML() {
  return classicMistakes.map(m => `
    <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900/60 text-xs">
      <div class="font-bold text-rose-700 dark:text-rose-300 mb-1 text-sm flex items-center gap-2">
        <i class="fa-solid fa-triangle-exclamation"></i>
        ${m.title}
      </div>
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${m.desc}</p>
    </div>
  `).join('');
}

// Generate Steps HTML
function renderStepsHTML() {
  return problemSolvingSteps.map(s => `
    <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
      <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black shrink-0 text-xs">${s.step}</span>
      <div>
        <strong class="text-slate-900 dark:text-white block mb-0.5">${s.title}</strong>
        <span class="text-slate-500 dark:text-slate-400">${s.desc}</span>
      </div>
    </div>
  `).join('');
}

// Generate Sidebar Navigation HTML
function renderSidebarNavHTML() {
  return allChapters.map(chap => `
    <div class="mb-3">
      <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1 flex items-center justify-between">
        <span>Chương ${chap.number}</span>
        <span class="text-[10px] lowercase text-blue-500 font-bold">${chap.lessons.length} bài</span>
      </div>
      <div class="space-y-0.5">
        ${chap.lessons.map(l => `
          <a href="#${l.id}" class="nav-link block px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-blue-950/40 transition truncate">
            <span class="font-bold text-slate-400 mr-1.5">${l.number}:</span>
            ${l.title}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Full Page Generator
function generateFullPageHTML() {
  const lessonsBody = renderLessonsHTML();
  const practicalBody = renderPracticalHTML();
  const formulasModalBody = renderFormulasModalHTML();
  const mistakesModalBody = renderMistakesModalHTML();
  const stepsBody = renderStepsHTML();
  const sidebarNav = renderSidebarNavHTML();

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Toán 9 (Toán Lớp 9 - Trọn Bộ 10 Chương & 32 Bài Học SGK Kết Nối Tri Thức: Tập 1 & Tập 2 • Hình Vẽ Trực Quan & Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            math: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
            },
            slate: {
              850: '#151f32',
              950: '#090d16'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- KaTeX for crisp LaTeX Math Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.3); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(148, 163, 184, 0.5); }
    .katex-display { margin: 0.6em 0; overflow-x: auto; overflow-y: hidden; }
    .katex { font-size: 1.1em; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Logo & Breadcrumb -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition">
            <i class="fa-solid fa-square-root-variable"></i>
          </div>
          <div>
            <span class="text-sm font-black text-slate-900 dark:text-white leading-none block">TOÁN 9</span>
            <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400">KẾT NỐI TRI THỨC</span>
          </div>
        </a>
        <div class="hidden md:flex items-center gap-1.5 text-xs text-slate-400 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
          <span>THCS</span>
          <i class="fa-solid fa-angle-right text-[10px]"></i>
          <span>Khối 9</span>
          <i class="fa-solid fa-angle-right text-[10px]"></i>
          <span class="text-blue-600 dark:text-blue-400 font-semibold">10 Chương • 32 Bài Học</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Quick Search -->
        <button onclick="openModal('modal-search')" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 transition">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>Tìm kiếm...</span>
          <kbd class="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border text-[10px] font-mono text-slate-400">Ctrl K</kbd>
        </button>

        <!-- Sổ tay công thức -->
        <button onclick="openModal('modal-formulas')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900 transition">
          <i class="fa-solid fa-book-bookmark"></i>
          <span class="hidden sm:inline">Sổ Tay</span> Công Thức
        </button>

        <!-- 10 Cạm bẫy lỗi sai -->
        <button onclick="openModal('modal-mistakes')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold hover:bg-rose-100 dark:hover:bg-rose-900 transition">
          <i class="fa-solid fa-shield-halved"></i>
          <span class="hidden sm:inline">10</span> Cạm Bẫy
        </button>

        <!-- Đấu trường Trạng Nguyên -->
        <button onclick="openModal('modal-exam')" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black shadow-md shadow-orange-500/20 hover:scale-105 transition">
          <i class="fa-solid fa-crown"></i>
          <span>Trạng Nguyên 9</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" onclick="toggleTheme()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 flex items-center justify-center transition">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:block"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- ==================== HERO SECTION ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-certificate"></i> Bộ Sách Kết Nối Tri Thức Với Cuộc Sống • Hai Tập Hoàn Chỉnh
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Học Liệu Cốt Lõi <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Toán 9 Toàn Diện</span>
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Hệ thống hóa toàn bộ <strong>10 Chương, 32 Bài Học</strong>, phương trình & hệ phương trình, căn thức, hệ thức lượng tam giác vuông, đường tròn, đồ thị Parabol, định lí Viète, thống kê tần số ghép nhóm, xác suất cổ điển, tứ giác nội tiếp và hình khối không gian thực tiễn.
        </p>
        
        <!-- Stats Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">10</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Chương Học</div>
          </div>
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">32</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Bài Học SGK</div>
          </div>
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">14+</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Sơ Đồ Vector SVG</div>
          </div>
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-amber-500 dark:text-amber-400">25</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Đề Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTENT ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- STICKY SIDEBAR NAVIGATION (4 Cols) -->
      <aside class="hidden lg:block lg:col-span-4 sticky top-24 max-h-[85vh] overflow-y-auto custom-scrollbar p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="text-xs font-black uppercase text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-list-check text-blue-600"></i> Mục Lục 10 Chương
          </span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
            32 Bài SGK
          </span>
        </div>
        
        <nav class="space-y-1">
          ${sidebarNav}
          <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
            <a href="#thuc-hanh-trai-nghiem" class="block px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40">
              <i class="fa-solid fa-flask-vial mr-1.5"></i> Hoạt Động Thực Hành - Trải Nghiệm
            </a>
            <a href="#quy-trinh-giai-toan" class="block px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40">
              <i class="fa-solid fa-arrow-down-1-9 mr-1.5"></i> 6 Bước Chuẩn Giải Toán 9
            </a>
          </div>
        </nav>
      </aside>

      <!-- LESSONS STREAM (8 Cols) -->
      <div class="lg:col-span-8 space-y-4">
        ${lessonsBody}

        <!-- Section Thực hành Trải nghiệm -->
        <section id="thuc-hanh-trai-nghiem" class="mb-14">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-emerald-500/20 shrink-0">
              <i class="fa-solid fa-flask"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Ứng Dụng Thực Tiễn</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                Hoạt Động Thực Hành & Trải Nghiệm
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Pha chế dung dịch, đo đạc thực địa, GeoGebra, Excel & di truyền Men-đen</p>
            </div>
          </div>
          ${practicalBody}
        </section>

        <!-- Section 6 Bước Quy trình Giải Toán -->
        <section id="quy-trinh-giai-toan" class="mb-14 p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl border border-indigo-900/50 shadow-xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl text-amber-400 shrink-0">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-indigo-300 uppercase tracking-wider">Phương Pháp Khoa Học</span>
              <h2 class="text-xl sm:text-2xl font-black text-white leading-tight">
                6 Bước Chuẩn Giải Toán Vào Lớp 10
              </h2>
              <p class="text-xs text-indigo-200">Trình bày chặt chẽ, tối đa điểm số trong các kì thi học kì và tuyển sinh vào 10</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${stepsBody}
          </div>
        </section>

      </div>
    </div>
  </main>

  <!-- ==================== MODALS ==================== -->

  <!-- Modal 1: Sổ Tay 20 Công Thức Cốt Lõi -->
  <div id="modal-formulas" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Bảng Tra Cứu 20 Công Thức & Định Lí Cốt Lõi</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Trọn bộ công thức Đại số, Hình học, Thống kê & Xác suất Toán 9</p>
          </div>
        </div>
        <button onclick="closeModal('modal-formulas')" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-2">
        ${formulasModalBody}
      </div>
    </div>
  </div>

  <!-- Modal 2: 10 Cạm Bẫy Lỗi Sai -->
  <div id="modal-mistakes" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">10 Cạm Bẫy Toán Học Cần Tránh Khi Thi Vào 10</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Các lỗi sai kinh điển khiến học sinh mất điểm đáng tiếc</p>
          </div>
        </div>
        <button onclick="closeModal('modal-mistakes')" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-3">
        ${mistakesModalBody}
      </div>
    </div>
  </div>

  <!-- Modal 3: Đấu Trường Trạng Nguyên Toán 9 -->
  <div id="modal-exam" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
            <i class="fa-solid fa-crown text-amber-300"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Toán Học 9</h3>
            <p class="text-xs text-blue-100">25 Câu Hỏi Tuyển Chọn Toàn Cấp &bull; Thời gian 60:00 &bull; Chuẩn Cấu Trúc Thi Vào 10</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Countdown Timer -->
          <div class="px-3.5 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 text-white font-mono font-bold text-sm flex items-center gap-2">
            <i class="fa-regular fa-clock text-amber-300"></i>
            <span id="exam-timer">60:00</span>
          </div>
          <button onclick="closeModal('modal-exam')" class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div id="exam-container" class="p-6 overflow-y-auto custom-scrollbar space-y-6 flex-1">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Footer -->
      <div class="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
        <div class="text-xs text-slate-500" id="exam-progress-text">Đã trả lời: 0/25 câu</div>
        <button onclick="submitExam()" class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition">
          Nộp Bài & Chấm Điểm
        </button>
      </div>
    </div>
  </div>

  <!-- Modal 4: Quick Search -->
  <div id="modal-search" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-start justify-center p-4 pt-20">
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-full max-w-xl shadow-2xl overflow-hidden">
      <div class="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
        <i class="fa-solid fa-magnifying-glass text-slate-400 ml-2"></i>
        <input type="text" id="search-input" oninput="handleSearch(this.value)" placeholder="Tìm bài học, công thức, định lí..." class="w-full bg-transparent border-0 focus:outline-none text-sm text-slate-900 dark:text-white placeholder-slate-400">
        <button onclick="closeModal('modal-search')" class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div id="search-results" class="max-h-72 overflow-y-auto p-2 text-xs text-slate-500">
        <p class="p-3 text-center">Nhập từ khóa để tra cứu nhanh...</p>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">
        Học Liệu Toán 9 • Bộ Sách Kết Nối Tri Thức Với Cuộc Sống (Tập 1 & Tập 2)
      </p>
      <p>Bản quyền thuộc CodeHub Platform &bull; Thiết kế bài bản dành cho ôn tập và chuẩn bị kì thi tuyển sinh vào Lớp 10.</p>
    </div>
  </footer>

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Theme Toggle
    function toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Modal Control
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (id === 'modal-exam' && !examTimerInterval) {
          startExam();
        }
        renderMath();
      }
    }
    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    // Keyboard Shortcut Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
      if (e.key === 'Escape') {
        ['modal-formulas', 'modal-mistakes', 'modal-exam', 'modal-search'].forEach(closeModal);
      }
    });

    // Mini Quiz Handler
    function checkLessonQuiz(btn, isCorrect, exp) {
      const parent = btn.closest('.p-3\\.5');
      const feedback = parent.querySelector('.quiz-feedback');
      const allBtns = parent.querySelectorAll('.quiz-btn');
      
      allBtns.forEach(b => {
        b.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
      });

      if (isCorrect) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40');
        feedback.className = 'quiz-feedback p-2.5 rounded-lg text-[11px] mt-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 block';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i><strong>Chính xác!</strong> ' + exp;
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
        feedback.className = 'quiz-feedback p-2.5 rounded-lg text-[11px] mt-2 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 block';
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mr-1.5"></i><strong>Chưa đúng!</strong> ' + exp;
      }
      renderMath();
    }

    // Bookmark Toggle
    function toggleBookmark(id) {
      const btn = document.querySelector('#' + id + ' .bookmark-btn');
      if (btn) {
        const icon = btn.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
          icon.className = 'fa-solid fa-bookmark text-amber-500';
        } else {
          icon.className = 'fa-regular fa-bookmark text-slate-400';
        }
      }
    }

    // Quick Search Index
    const searchData = [
      ${allChapters.flatMap(c => c.lessons.map(l => `{ id: "${l.id}", title: "${l.number}: ${l.title.replace(/"/g, '\\"')}", tag: "${l.tag}" }`)).join(',\n      ')}
    ];

    function handleSearch(query) {
      const q = query.toLowerCase().trim();
      const resultsDiv = document.getElementById('search-results');
      if (!q) {
        resultsDiv.innerHTML = '<p class="p-3 text-center">Nhập từ khóa để tra cứu nhanh...</p>';
        return;
      }
      const matches = searchData.filter(item => item.title.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q));
      if (matches.length === 0) {
        resultsDiv.innerHTML = '<p class="p-3 text-center text-slate-400">Không tìm thấy bài học phù hợp</p>';
        return;
      }
      resultsDiv.innerHTML = matches.map(m => \`
        <a href="#\${m.id}" onclick="closeModal('modal-search')" class="block p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition">
          <div class="font-bold text-xs text-blue-600 dark:text-blue-400">\${m.title}</div>
          <div class="text-[10px] text-slate-400">\${m.tag}</div>
        </a>
      \`).join('');
    }

    // Exam Engine
    const examQuestions = ${JSON.stringify(examQuestions)};
    let examUserAnswers = {};
    let examTimerInterval = null;
    let examTimeLeft = 3600;

    function startExam() {
      examUserAnswers = {};
      examTimeLeft = 3600;
      renderExamQuestions();
      updateExamTimerDisplay();
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        updateExamTimerDisplay();
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          alert('Hết giờ làm bài! Hệ thống sẽ tự động thu bài.');
          submitExam();
        }
      }, 1000);
    }

    function updateExamTimerDisplay() {
      const m = Math.floor(examTimeLeft / 60);
      const s = examTimeLeft % 60;
      const str = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      const timerEl = document.getElementById('exam-timer');
      if (timerEl) timerEl.innerText = str;
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-container');
      container.innerHTML = examQuestions.map((q, idx) => \`
        <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs">
          <p class="font-bold text-slate-900 dark:text-white mb-3">
            <span class="text-blue-600 dark:text-blue-400">Câu \${idx + 1}:</span> \${q.q}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            \${q.options.map((opt, oIdx) => \`
              <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700/50 cursor-pointer transition">
                <input type="radio" name="exam_q_\${idx}" value="\${oIdx}" onchange="selectExamOption(\${idx}, \${oIdx})" class="text-blue-600 focus:ring-blue-500">
                <span class="font-medium text-slate-700 dark:text-slate-300">\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="exam-exp-\${idx}" class="hidden p-3 rounded-xl mt-3 text-[11px] leading-relaxed"></div>
        </div>
      \`).join('');
      renderMath();
    }

    function selectExamOption(qIdx, oIdx) {
      examUserAnswers[qIdx] = oIdx;
      const count = Object.keys(examUserAnswers).length;
      document.getElementById('exam-progress-text').innerText = 'Đã trả lời: ' + count + '/' + examQuestions.length + ' câu';
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;
      examQuestions.forEach((q, idx) => {
        const uAns = examUserAnswers[idx];
        const expDiv = document.getElementById('exam-exp-' + idx);
        if (expDiv) {
          expDiv.classList.remove('hidden');
          if (uAns === q.ans) {
            score++;
            expDiv.className = 'p-3 rounded-xl mt-3 text-[11px] leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 block';
            expDiv.innerHTML = '<strong>Đúng!</strong> ' + q.exp;
          } else {
            expDiv.className = 'p-3 rounded-xl mt-3 text-[11px] leading-relaxed bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-700 block';
            expDiv.innerHTML = '<strong>Chưa đúng!</strong> Đáp án đúng: ' + q.options[q.ans] + '. ' + q.exp;
          }
        }
      });
      renderMath();
      const pct = Math.round((score / examQuestions.length) * 100);
      let rank = 'Trạng Nguyên Toàn Cấp';
      if (pct < 50) rank = 'Học Sinh Cần Ôn Luyện Thêm';
      else if (pct < 70) rank = 'Tú Tài Toán Học';
      else if (pct < 90) rank = 'Bảng Nhãn Toán Học';

      alert('KẾT QUẢ THI:\\n\\nBạn đạt: ' + score + '/' + examQuestions.length + ' điểm (' + pct + '%)\\nDanh hiệu: ' + rank);
    }

    // KaTeX Math Rendering Trigger
    function renderMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '\\\\(', right: '\\\\)', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function ensureMathRendered() {
      renderMath();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (typeof renderMathInElement === 'function') {
          renderMath();
          if (attempts > 5) clearInterval(interval);
        }
        if (attempts > 20) clearInterval(interval);
      }, 250);
    }

    document.addEventListener("DOMContentLoaded", ensureMathRendered);
    window.addEventListener("load", ensureMathRendered);
    setTimeout(ensureMathRendered, 500);
  </script>
</body>
</html>`;
}

// Compile and Save
const htmlContent = generateFullPageHTML();
const baseDir = path.resolve(__dirname, '..');
const file1 = path.join(baseDir, 'courses', 'toan_9.html');
const file2 = path.join(baseDir, 'courses', 'math_9.html');

fs.writeFileSync(file1, htmlContent, 'utf8');
console.log('Saved toan_9.html, size:', htmlContent.length);

fs.writeFileSync(file2, htmlContent, 'utf8');
console.log('Saved math_9.html, size:', htmlContent.length);
