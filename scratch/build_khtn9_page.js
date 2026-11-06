// build_khtn9_page.js - Trình biên dịch toàn diện môn Khoa học tự nhiên 9 (51 Bài Học Chuẩn SGK)
const fs = require('fs');
const path = require('path');

const physicsLessons = require('./khtn9_data_physics.js');
const chemistryLessons = require('./khtn9_data_chemistry.js');
const biologyLessons = require('./khtn9_data_biology.js');
const allLessons = [...physicsLessons, ...chemistryLessons, ...biologyLessons];

const formulasData = require('./khtn9_formulas.js');
const svgP1 = require('./khtn9_svg_p1.js');
const svgP2 = require('./khtn9_svg_p2.js');
const svgP3 = require('./khtn9_svg_p3.js');
const allLessonSvgs = { ...svgP1, ...svgP2, ...svgP3 };

const { lensCalculatorWidget, circuitOhmCalculatorWidget, punnettSquareWidget } = require('./khtn9_widgets.js');
const examQuestions = require('./khtn9_exam.js');

function generateKHTN9Page(lang = 'vi') {
  const isEn = lang === 'en';
  const pageTitle = isEn
    ? "Natural Science 9 — Core Knowledge SGK | CodeHub"
    : "Khoa Học Tự Nhiên 9 — Kiến Thức Cốt Lõi Theo Sách (14 Chương • 51 Bài Học Chuẩn SGK) | CodeHub";

  // Chapters grouping
  const chapters = [
    { id: "chap-0", title: "BÀI MỞ ĐẦU", branch: "Mở đầu", icon: "fa-flask-vial", range: [1, 1] },
    { id: "chap-1", title: "CHƯƠNG I. NĂNG LƯỢNG CƠ HỌC", branch: "Vật lí", icon: "fa-person-running", range: [2, 4] },
    { id: "chap-2", title: "CHƯƠNG II. ÁNH SÁNG", branch: "Vật lí", icon: "fa-wand-magic-sparkles", range: [5, 10] },
    { id: "chap-3", title: "CHƯƠNG III. ĐIỆN", branch: "Vật lí", icon: "fa-bolt", range: [11, 13] },
    { id: "chap-4", title: "CHƯƠNG IV. ĐIỆN TỪ", branch: "Vật lí", icon: "fa-rotate", range: [14, 15] },
    { id: "chap-5", title: "CHƯƠNG V. NĂNG LƯỢNG VỚI CUỘC SỐNG", branch: "Vật lí", icon: "fa-sun", range: [16, 17] },
    { id: "chap-6", title: "CHƯƠNG VI. KIM LOẠI", branch: "Hóa học", icon: "fa-cubes", range: [18, 21] },
    { id: "chap-7", title: "CHƯƠNG VII. HỢP CHẤT HỮU CƠ & NHIÊN LIỆU", branch: "Hóa học", icon: "fa-fire-flame-simple", range: [22, 25] },
    { id: "chap-8", title: "CHƯƠNG VIII. ETHYLIC ALCOHOL & ACETIC ACID", branch: "Hóa học", icon: "fa-wine-bottle", range: [26, 27] },
    { id: "chap-9", title: "CHƯƠNG IX. LIPID, CARBOHYDRATE, PROTEIN, POLYMER", branch: "Hóa học", icon: "fa-wheat-awn", range: [28, 32] },
    { id: "chap-10", title: "CHƯƠNG X. TÀI NGUYÊN VỎ TRÁI ĐẤT", branch: "Hóa học", icon: "fa-mountain", range: [33, 35] },
    { id: "chap-11", title: "CHƯƠNG XI. DI TRUYỀN MENDEL & PHÂN TỬ", branch: "Sinh học", icon: "fa-seedling", range: [36, 41] },
    { id: "chap-12", title: "CHƯƠNG XII. DI TRUYỀN NHIỄM SẮC THỂ", branch: "Sinh học", icon: "fa-bacterium", range: [42, 46] },
    { id: "chap-13", title: "CHƯƠNG XIII. DI TRUYỀN HỌC VỚI CON NGƯỜI", branch: "Sinh học", icon: "fa-user-doctor", range: [47, 48] },
    { id: "chap-14", title: "CHƯƠNG XIV. TIẾN HÓA", branch: "Sinh học", icon: "fa-timeline", range: [49, 51] }
  ];

  // Sidebar chapter items
  const sidebarHtml = chapters.map(chap => {
    const chapLessons = allLessons.filter(l => l.id >= chap.range[0] && l.id <= chap.range[1]);
    let branchColor = "text-blue-700 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/30";
    if (chap.branch === "Hóa học") branchColor = "text-teal-700 dark:text-teal-400 bg-teal-50/70 dark:bg-teal-950/30";
    else if (chap.branch === "Sinh học") branchColor = "text-emerald-700 dark:text-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/30";

    const lessonLinks = chapLessons.map(l => `
      <a href="#lesson-${l.id}" class="lesson-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs transition group" data-branch="${l.branch}" data-id="${l.id}">
        <span class="truncate flex items-center gap-1.5">
          <span class="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[9px] font-bold shrink-0">${l.id}</span>
          <span class="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition truncate">${l.title}</span>
        </span>
      </a>
    `).join('');

    return `
      <div class="mb-3 chapter-nav-group" data-branch="${chap.branch}">
        <div class="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${branchColor} rounded-lg mb-1 flex items-center justify-between">
          <span class="truncate flex items-center gap-1.5">
            <i class="fa-solid ${chap.icon}"></i> ${chap.title}
          </span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono shrink-0">${chapLessons.length}</span>
        </div>
        <div class="pl-1 space-y-0.5">
          ${lessonLinks}
        </div>
      </div>
    `;
  }).join('');

  // 51 Detailed Lesson Cards
  const lessonCardsHtml = allLessons.map(l => {
    let headerGradient = "from-blue-600 to-indigo-600";
    let branchBadgeBg = "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
    if (l.branch === "Hóa học") {
      headerGradient = "from-teal-600 to-emerald-600";
      branchBadgeBg = "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300";
    } else if (l.branch === "Sinh học") {
      headerGradient = "from-emerald-600 to-green-600";
      branchBadgeBg = "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
    }

    // Dedicated Unique Illustration for each of the 51 lessons
    const diagramSvg = allLessonSvgs[l.id] || '';

    // Interactive Widget injection mapping
    let widgetHtml = '';
    if (l.id === 8 || l.id === 9) widgetHtml = lensCalculatorWidget;
    else if (l.id === 11 || l.id === 12) widgetHtml = circuitOhmCalculatorWidget;
    else if (l.id === 37) widgetHtml = punnettSquareWidget;

    const q = l.quiz;
    const quizOptions = q.options.map((opt, oIdx) => `
      <button type="button" onclick="checkLessonQuiz(${l.id}, ${oIdx}, ${q.ans}, '${q.expl.replace(/'/g, "\\'")}')" class="quiz-btn-${l.id} w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-500 text-xs text-slate-800 dark:text-slate-200 transition flex items-center justify-between group bg-white dark:bg-slate-800">
        <span class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold flex items-center justify-center group-hover:bg-teal-100 group-hover:text-teal-700 transition">${String.fromCharCode(65 + oIdx)}</span>
          <span>${opt}</span>
        </span>
        <i class="fa-regular fa-circle text-slate-400 group-hover:text-teal-500 text-xs"></i>
      </button>
    `).join('');

    return `
      <article id="lesson-${l.id}" class="lesson-card bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm transition hover:shadow-md mb-8" data-branch="${l.branch}" data-id="${l.id}">
        <!-- Header bài học -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r ${headerGradient} text-white shadow-xs">
                KHTN 9 • ${l.branch.toUpperCase()}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${l.chapter}</span>
            </div>
            <h3 class="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0">#${l.id}</span>
              ${l.title}
            </h3>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="readAloudLesson('lesson-${l.id}')" class="px-3 py-1.5 rounded-xl border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/50 text-xs font-bold transition flex items-center gap-1.5">
              <i class="fa-solid fa-volume-high"></i> <span>Đọc bài</span>
            </button>
          </div>
        </div>

        <!-- Tóm tắt cô đọng -->
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border-l-4 border-teal-500">
          ${l.summary}
        </p>

        <!-- Sơ đồ vector SVG nếu có -->
        ${diagramSvg ? `
        <div class="mb-5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <div class="text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 mb-2 flex items-center justify-between">
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-shapes text-teal-600"></i> Mô hình trực quan vector SVG</span>
            <span class="text-[10px] text-slate-400">Bản vẽ độc quyền SGK KNTN 9</span>
          </div>
          ${diagramSvg}
        </div>
        ` : ''}

        <!-- Kiến thức trọng tâm -->
        <div class="mb-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-key text-teal-500"></i> Kiến thức &amp; Quy luật cốt lõi:
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            ${l.keyPoints.map(kp => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-teal-500 mt-1 shrink-0 text-xs"></i>
                <span class="leading-relaxed">${kp}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Công thức & Quy tắc -->
        <div class="mb-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-square-root-variable text-indigo-500"></i> Công thức / Quy tắc tính toán:
          </div>
          <div class="font-mono text-xs sm:text-sm font-bold text-indigo-900 dark:text-indigo-300 katex-render overflow-x-auto py-1">
            $$${l.formula}$$
          </div>
        </div>

        <!-- Thí nghiệm / An toàn thực hành -->
        <div class="mb-5 p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200">
          <div class="font-bold flex items-center gap-1.5 mb-1 text-amber-800 dark:text-amber-300">
            <i class="fa-solid fa-vial-circle-check text-amber-600"></i> Thí nghiệm &amp; Vận dụng an toàn:
          </div>
          <p class="leading-relaxed text-slate-700 dark:text-slate-300">${l.experiment}</p>
        </div>

        <!-- Interactive Widget Injection -->
        ${widgetHtml}

        <!-- Quick Quiz -->
        <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question text-teal-500"></i> Câu hỏi củng cố nhanh:
            </span>
            <span class="text-[10px] text-slate-400">Chọn đáp án để xem giải thích</span>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-3">
            ${q.q}
          </p>
          <div class="space-y-2">
            ${quizOptions}
          </div>
          <div id="quiz-feedback-${l.id}" class="hidden mt-3 p-3 rounded-xl text-xs leading-relaxed"></div>
        </div>
      </article>
    `;
  }).join('');

  // Trạng Nguyên 60:00 Exam Questions
  const examItemsHtml = examQuestions.map((eq, eqIdx) => {
    let branchColor = "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
    if (eq.branch === "Hóa học") branchColor = "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300";
    else if (eq.branch === "Sinh học") branchColor = "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";

    const opts = eq.options.map((opt, oIdx) => `
      <label class="flex items-start gap-2.5 p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition text-xs text-slate-800 dark:text-slate-200">
        <input type="radio" name="exam_q_${eq.id}" value="${oIdx}" class="mt-0.5 text-teal-600 focus:ring-teal-500">
        <span><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}</span>
      </label>
    `).join('');

    return `
      <div class="exam-question-card p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-4" id="exam-card-${eq.id}">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span class="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] font-black">${eqIdx + 1}</span>
            Câu ${eqIdx + 1}
          </span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${branchColor}">${eq.branch}</span>
        </div>
        <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-3">${eq.q}</p>
        <div class="space-y-1.5">
          ${opts}
        </div>
        <div id="exam-expl-${eq.id}" data-ans="${eq.ans}" data-expl="${eq.expl.replace(/"/g, '&quot;')}" class="hidden mt-3 p-3 rounded-xl text-xs leading-relaxed"></div>
      </div>
    `;
  }).join('');

  // Formulas Cards in Modal
  const formulaCardsHtml = formulasData.map((f, fIdx) => `
    <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 formula-item" data-branch="${f.branch.toLowerCase()}">
      <div class="flex items-center justify-between gap-2 mb-1.5">
        <span class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">${f.title}</span>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">${f.branch} • ${f.topic}</span>
      </div>
      <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-teal-700 dark:text-teal-300 overflow-x-auto mb-2">
        $$${f.formula}$$
      </div>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-1"><strong>Đơn vị:</strong> ${f.unit}</p>
      <p class="text-[11px] text-slate-600 dark:text-slate-300"><strong>Lưu ý:</strong> ${f.notes}</p>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            science: {
              teal: '#0D9488',
              cyan: '#06B6D4',
              emerald: '#059669',
              blue: '#2563EB',
              amber: '#D97706',
              purple: '#7C3AED'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- KaTeX for formulas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}]});"></script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
    }
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .katex-display {
      margin: 0.5em 0 !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 3px 0;
    }
    .katex {
      font-size: 1.05em;
    }
    .katex, .katex * {
      letter-spacing: normal !important;
    }
    body, p, li, h1, h2, h3, h4, button, span {
      letter-spacing: 0.005em !important;
      word-spacing: normal !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .lesson-card p, .lesson-card li {
      line-height: 1.7 !important;
    }
    svg text {
      letter-spacing: normal !important;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
      user-select: none;
    }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    .lesson-card { scroll-margin-top: 5rem; }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased min-h-screen">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 glass-header transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 via-blue-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-atom text-sm"></i>
          </div>
          <div>
            <span class="font-extrabold text-base tracking-tight bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">CodeHub</span>
            <span class="hidden sm:inline-block text-[11px] font-semibold text-slate-400 dark:text-slate-500 ml-1.5 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Lớp 9</span>
          </div>
        </a>
        <div class="h-4 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="hidden sm:flex items-center gap-1.5">
          <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Khoa Học Tự Nhiên 9</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">14 Chương • 51 Bài Học</span>
        </div>
      </div>

      <!-- Quick Search & Actions -->
      <div class="flex items-center gap-2">
        <div class="relative hidden md:block w-48 lg:w-64">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-xs text-slate-400"></i>
          <input type="text" id="lessonSearch" onkeyup="searchLessons()" placeholder="Tìm bài học, công thức, khái niệm..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition">
        </div>

        <!-- Mở Modal Sổ tay Công thức -->
        <button onclick="openFormulasModal()" class="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 transition flex items-center gap-1.5 shadow-xs">
          <i class="fa-solid fa-book-bookmark text-teal-600"></i>
          <span class="hidden sm:inline">Sổ tay Công thức</span>
        </button>

        <!-- Nút Trạng Nguyên 60:00 -->
        <a href="#exam-section" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-teal-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60p)</span>
        </a>

        <!-- Dark/Light Mode -->
        <button onclick="toggleDarkMode()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition" title="Đổi giao diện sáng/tối">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Sidebar Left Navigation -->
      <aside class="lg:w-80 shrink-0">
        <div class="sticky top-20 bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
          
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
            <h3 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-layer-group text-teal-500"></i> Mục Lục 51 Bài Học
            </h3>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300">SGK Kết Nối</span>
          </div>

          <!-- Lọc nhanh theo Phân môn (Hóa - Lí - Sinh) -->
          <div class="mb-3">
            <div class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Lọc theo phân môn:</div>
            <div class="grid grid-cols-2 gap-1 sm:grid-cols-4">
              <button onclick="filterBranch('all')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-bold bg-teal-600 text-white text-center transition shadow-xs" data-branch="all">Tất cả (51)</button>
              <button onclick="filterBranch('Vật lí')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-center transition" data-branch="Vật lí">Vật lí (16)</button>
              <button onclick="filterBranch('Hóa học')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-center transition" data-branch="Hóa học">Hóa học (18)</button>
              <button onclick="filterBranch('Sinh học')" class="branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-center transition" data-branch="Sinh học">Sinh học (16)</button>
            </div>
          </div>

          <!-- Danh sách bài học theo Chương -->
          <div id="sidebarLessonList" class="max-h-[calc(100vh-22rem)] overflow-y-auto pr-1">
            ${sidebarHtml}
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 min-w-0">

        <!-- Hero Course Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 mb-8 shadow-lg">
          <div class="relative z-10 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold mb-3 border border-teal-500/30">
              <i class="fa-solid fa-certificate"></i> CHƯƠNG TRÌNH GDPT 2018 — SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
            </div>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              KHOA HỌC TỰ NHIÊN 9
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Hệ thống học liệu số hóa toàn diện gồm trọn bộ <strong>14 chương, 51 bài học chuẩn SGK</strong> kết hợp Vật lí, Hóa học và Sinh học; tích hợp bản vẽ mô phỏng vector SVG độc quyền, công cụ tính quang học &amp; mạch điện tương tác và kỳ thi Trạng Nguyên 60 phút.
            </p>
            <div class="grid grid-cols-3 gap-3 max-w-lg mb-4">
              <div class="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <span class="block text-base sm:text-lg font-black text-cyan-400">16 Bài</span>
                <span class="text-[10px] text-slate-300">Vật lí (Cơ, Quang, Điện)</span>
              </div>
              <div class="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <span class="block text-base sm:text-lg font-black text-teal-400">18 Bài</span>
                <span class="text-[10px] text-slate-300">Hóa học (Kim loại, HCHC)</span>
              </div>
              <div class="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <span class="block text-base sm:text-lg font-black text-emerald-400">16 Bài</span>
                <span class="text-[10px] text-slate-300">Sinh học (Di truyền, Tiến hóa)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Danh sách 51 Bài Học Chi Tiết -->
        <div id="lessonsContainer">
          ${lessonCardsHtml}
        </div>

        <!-- Trạng Nguyên 60:00 Exam Section -->
        <section id="exam-section" class="scroll-mt-20 my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-800 shadow-xl">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-slate-900">KỲ THI TRẠNG NGUYÊN 60:00</span>
                <span class="text-xs text-slate-400 font-medium">30 Câu Hỏi Toàn Diện KHTN 9</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-white">ĐỀ THI TỔNG HỢP KIẾN THỨC KHOA HỌC TỰ NHIÊN 9</h2>
            </div>
            <!-- Đồng hồ đếm ngược -->
            <div class="flex items-center gap-3">
              <div class="px-4 py-2 rounded-2xl bg-slate-800/90 border border-slate-700 text-center">
                <span class="block text-[10px] text-slate-400 font-bold uppercase">Thời gian còn lại</span>
                <span id="exam-timer" class="font-mono text-xl sm:text-2xl font-black text-amber-400">60:00</span>
              </div>
            </div>
          </div>

          <!-- Danh sách câu hỏi thi -->
          <div id="examQuestionsList" class="space-y-4 mb-8">
            ${examItemsHtml}
          </div>

          <!-- Nộp bài & Kết quả -->
          <div class="flex items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button type="button" onclick="submitExam()" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-white font-extrabold text-sm shadow-lg transition flex items-center gap-2">
              <i class="fa-solid fa-flag-checkered"></i> Nộp bài &amp; Xem xếp hạng Trạng Nguyên
            </button>
            <div id="exam-result-box" class="hidden text-right">
              <span class="block text-xs text-slate-400">Điểm số đạt được:</span>
              <span id="exam-score-text" class="text-2xl font-black text-amber-400">0/30</span>
              <span id="exam-rank-badge" class="ml-2 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950"></span>
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- Sổ Tay Công Thức Modal -->
  <div id="formulas-modal" class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col border border-slate-200 dark:border-slate-800 shadow-2xl">
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-book-bookmark text-teal-600"></i>
          SỔ TAY CÔNG THỨC &amp; QUY LUẬT CẦN NHỚ (KHTN 9)
        </h3>
        <button onclick="closeFormulasModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center text-sm transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-4 border-b border-slate-100 dark:border-slate-800">
        <input type="text" id="formulaSearch" onkeyup="filterFormulas()" placeholder="Lọc theo tên công thức, phân môn..." class="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none">
      </div>
      <div id="formulasGrid" class="p-5 overflow-y-auto space-y-3.5 flex-1">
        ${formulaCardsHtml}
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-8 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="font-extrabold text-slate-900 dark:text-white">CodeHub Education</span>
        <span>• Khoa Học Tự Nhiên Lớp 9</span>
      </div>
      <p>Nội dung biên soạn theo SGK Kết nối tri thức với cuộc sống (Bộ Giáo dục và Đào tạo).</p>
      <div class="flex items-center gap-4">
        <a href="#lesson-1" class="hover:text-teal-600 transition">Về đầu trang ↑</a>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Dark mode
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }
    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    }

    // Branch filtering
    function filterBranch(branch) {
      document.querySelectorAll('.branch-filter-btn').forEach(b => {
        if (b.dataset.branch === branch) {
          b.className = 'branch-filter-btn px-2 py-1 text-xs rounded-lg font-bold bg-teal-600 text-white text-center transition shadow-xs';
        } else {
          b.className = 'branch-filter-btn px-2 py-1 text-xs rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-center transition';
        }
      });

      document.querySelectorAll('.chapter-nav-group').forEach(group => {
        if (branch === 'all' || group.dataset.branch === branch || group.dataset.branch === 'Mở đầu') {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });

      document.querySelectorAll('.lesson-card').forEach(card => {
        if (branch === 'all' || card.dataset.branch === branch) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Search lessons
    function searchLessons() {
      const query = document.getElementById('lessonSearch').value.toLowerCase().trim();
      document.querySelectorAll('.lesson-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
      });
    }

    // Quick Lesson Quiz checking
    function checkLessonQuiz(lessonId, chosenIdx, correctIdx, explanation) {
      const feedbackEl = document.getElementById('quiz-feedback-' + lessonId);
      const buttons = document.querySelectorAll('.quiz-btn-' + lessonId);

      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('border-teal-400', 'border-emerald-500', 'border-rose-500', 'bg-emerald-50', 'bg-rose-50');
        if (idx === correctIdx) {
          btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40');
        } else if (idx === chosenIdx) {
          btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
        }
      });

      if (feedbackEl) {
        feedbackEl.classList.remove('hidden', 'bg-emerald-50', 'bg-rose-50', 'text-emerald-900', 'text-rose-900');
        if (chosenIdx === correctIdx) {
          feedbackEl.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-900', 'dark:text-emerald-200');
          feedbackEl.innerHTML = '<strong><i class=\"fa-solid fa-circle-check text-emerald-600\"></i> Chính xác!</strong> ' + explanation;
        } else {
          feedbackEl.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-900', 'dark:text-rose-200');
          feedbackEl.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600\"></i> Chưa chính xác.</strong> ' + explanation;
        }
      }
    }

    // Formulas Modal
    function openFormulasModal() {
      document.getElementById('formulas-modal').classList.remove('hidden');
    }
    function closeFormulasModal() {
      document.getElementById('formulas-modal').classList.add('hidden');
    }
    function filterFormulas() {
      const q = document.getElementById('formulaSearch').value.toLowerCase().trim();
      document.querySelectorAll('.formula-item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? 'block' : 'none';
      });
    }

    // Text-To-Speech
    function readAloudLesson(lessonId) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ đọc giọng nói Text-to-speech.');
        return;
      }
      window.speechSynthesis.cancel();
      const el = document.getElementById(lessonId);
      if (!el) return;
      const text = el.querySelector('h3').innerText + '. ' + el.querySelector('p').innerText;
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'vi-VN';
      utter.rate = 1.0;
      window.speechSynthesis.speak(utter);
    }

    // Widget 1: Lens Calculator
    function calculateLensImage() {
      const f = parseFloat(document.getElementById('lens_f').value);
      const d = parseFloat(document.getElementById('lens_d').value);
      if (isNaN(f) || isNaN(d) || f <= 0 || d <= 0) return;

      const dPrimeEl = document.getElementById('res_d_prime');
      const natureEl = document.getElementById('res_nature');
      const magEl = document.getElementById('res_mag');

      if (d === f) {
        dPrimeEl.textContent = 'Ở vô cực (∞)';
        natureEl.textContent = 'Không thu được ảnh rõ (chùm tia ló song song)';
        magEl.textContent = '|k| -> ∞';
        return;
      }

      const dPrime = (d * f) / (d - f);
      const k = -dPrime / d;
      const absK = Math.abs(k);

      dPrimeEl.textContent = dPrime.toFixed(1) + ' cm';
      if (dPrime > 0) {
        natureEl.textContent = 'Ảnh thật, ngược chiều với vật';
        natureEl.className = 'font-extrabold text-emerald-600 dark:text-emerald-400 text-xs';
      } else {
        natureEl.textContent = 'Ảnh ảo, cùng chiều và lớn hơn vật';
        natureEl.className = 'font-extrabold text-purple-600 dark:text-purple-400 text-xs';
      }

      let magDesc = absK > 1 ? 'Ảnh lớn gấp ' + absK.toFixed(1) + ' lần vật' : (absK === 1 ? 'Ảnh bằng vật' : 'Ảnh nhỏ hơn vật (' + absK.toFixed(2) + ' lần)');
      magEl.textContent = '|k| = ' + absK.toFixed(2) + ' (' + magDesc + ')';
    }

    function setLensPreset(f, d) {
      document.getElementById('lens_f').value = f;
      document.getElementById('lens_d').value = d;
      calculateLensImage();
    }

    // Widget 2: Circuit & Ohm's Law Calculator
    function calculateCircuit() {
      const u = parseFloat(document.getElementById('circuit_u').value);
      const r1 = parseFloat(document.getElementById('circuit_r1').value);
      const r2 = parseFloat(document.getElementById('circuit_r2').value);
      const isParallel = document.querySelector('input[name=\"circuit_type\"]:checked').value === 'parallel';

      if (isNaN(u) || isNaN(r1) || isNaN(r2) || r1 <= 0 || r2 <= 0) return;

      let rtd = 0, iTotal = 0, i1 = 0, i2 = 0;
      if (isParallel) {
        rtd = (r1 * r2) / (r1 + r2);
        iTotal = u / rtd;
        i1 = u / r1;
        i2 = u / r2;
      } else {
        rtd = r1 + r2;
        iTotal = u / rtd;
        i1 = iTotal;
        i2 = iTotal;
      }

      const power = u * iTotal;

      document.getElementById('res_rtd').textContent = rtd.toFixed(2) + ' Ω';
      document.getElementById('res_itotal').textContent = iTotal.toFixed(2) + ' A';
      document.getElementById('res_ibranches').textContent = 'I1=' + i1.toFixed(2) + 'A | I2=' + i2.toFixed(2) + 'A';
      document.getElementById('res_power').textContent = power.toFixed(1) + ' W';
    }

    // Widget 3: Mendel Punnett Square
    function generatePunnett() {
      const dad = document.getElementById('parent_dad').value;
      const mom = document.getElementById('parent_mom').value;

      const dadGametes = dad === 'Aa' ? ['A', 'a'] : (dad === 'AA' ? ['A', 'A'] : ['a', 'a']);
      const momGametes = mom === 'Aa' ? ['A', 'a'] : (mom === 'AA' ? ['A', 'A'] : ['a', 'a']);

      let counts = { AA: 0, Aa: 0, aa: 0 };
      let tableHtml = '<table class=\"w-full text-center border-collapse text-xs border border-emerald-300 dark:border-emerald-800\">';
      tableHtml += '<tr class=\"bg-emerald-100 dark:bg-emerald-950 font-bold\"><th class=\"p-2 border border-emerald-300 dark:border-emerald-800\">Giao tử Mẹ \\ Bố</th><th class=\"p-2 border border-emerald-300 dark:border-emerald-800\">' + dadGametes[0] + '</th><th class=\"p-2 border border-emerald-300 dark:border-emerald-800\">' + dadGametes[1] + '</th></tr>';

      momGametes.forEach(mg => {
        tableHtml += '<tr><td class=\"p-2 font-bold bg-emerald-50 dark:bg-slate-800 border border-emerald-300 dark:border-emerald-800\">' + mg + '</td>';
        dadGametes.forEach(dg => {
          let alleles = [mg, dg].sort().join('');
          if (alleles === 'aA') alleles = 'Aa';
          counts[alleles] = (counts[alleles] || 0) + 1;
          let color = alleles.includes('A') ? 'bg-emerald-50 text-emerald-800 font-bold' : 'bg-rose-50 text-rose-800 font-bold';
          tableHtml += '<td class=\"p-2 border border-emerald-300 dark:border-emerald-800 ' + color + '\">' + alleles + '</td>';
        });
        tableHtml += '</tr>';
      });
      tableHtml += '</table>';

      document.getElementById('punnett_table_box').innerHTML = tableHtml;

      const total = 4;
      const dominant = (counts.AA || 0) + (counts.Aa || 0);
      const recessive = counts.aa || 0;

      let summary = '<div class=\"flex flex-wrap items-center justify-between gap-2\">';
      summary += '<div><strong>Tỉ lệ kiểu gene:</strong> ' + (counts.AA ? counts.AA + ' AA : ' : '') + (counts.Aa ? counts.Aa + ' Aa : ' : '') + (counts.aa ? counts.aa + ' aa' : '').replace(/ : $/, '') + '</div>';
      summary += '<div><strong>Tỉ lệ kiểu hình:</strong> ' + (dominant ? (dominant * 25) + '% Trội (Hoa đỏ)' : '') + (dominant && recessive ? ' : ' : '') + (recessive ? (recessive * 25) + '% Lặn (Hoa trắng)' : '') + '</div>';
      summary += '</div>';

      document.getElementById('punnett_summary').innerHTML = summary;
    }

    // Exam countdown timer (60:00)
    let timeLeft = 3600;
    const timerEl = document.getElementById('exam-timer');
    const timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        submitExam();
        return;
      }
      timeLeft--;
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      if (timerEl) {
        timerEl.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }
    }, 1000);

    // Submit Exam
    function submitExam() {
      clearInterval(timerInterval);
      const questionCards = document.querySelectorAll('.exam-question-card');
      let score = 0;
      const total = questionCards.length;

      questionCards.forEach(card => {
        const qId = card.id.replace('exam-card-', '');
        const selected = card.querySelector('input[name=\"exam_q_' + qId + '\"]:checked');
        const explEl = document.getElementById('exam-expl-' + qId);
        const correctAns = parseInt(explEl.dataset.ans, 10);
        const explText = explEl.dataset.expl;

        explEl.classList.remove('hidden', 'bg-emerald-50', 'bg-rose-50');
        if (selected && parseInt(selected.value, 10) === correctAns) {
          score++;
          explEl.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-900', 'dark:text-emerald-200');
          explEl.innerHTML = '<strong class=\"text-emerald-600\"><i class=\"fa-solid fa-circle-check\"></i> Đúng!</strong> ' + explText;
        } else {
          explEl.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-900', 'dark:text-rose-200');
          explEl.innerHTML = '<strong class=\"text-rose-600\"><i class=\"fa-solid fa-circle-xmark\"></i> Sai (Đáp án đúng: ' + String.fromCharCode(65 + correctAns) + ').</strong> ' + explText;
        }
      });

      const resBox = document.getElementById('exam-result-box');
      const scoreText = document.getElementById('exam-score-text');
      const rankBadge = document.getElementById('exam-rank-badge');

      if (resBox && scoreText && rankBadge) {
        resBox.classList.remove('hidden');
        scoreText.textContent = score + '/' + total;

        const pct = (score / total) * 100;
        let rank = 'Tiến Sĩ';
        let rankClass = 'bg-slate-300 text-slate-900';
        if (pct >= 90) {
          rank = '👑 TRẠNG NGUYÊN TOÀN NĂNG';
          rankClass = 'bg-amber-400 text-slate-950 shadow-md';
        } else if (pct >= 80) {
          rank = '🥈 BẢNG NHÃN';
          rankClass = 'bg-blue-400 text-slate-950 shadow-md';
        } else if (pct >= 70) {
          rank = '🥉 THÁM HOA';
          rankClass = 'bg-emerald-400 text-slate-950 shadow-md';
        }

        rankBadge.textContent = rank;
        rankBadge.className = 'ml-2 px-3 py-1 rounded-full text-xs font-black ' + rankClass;
      }
    }

    // Initialize widgets on load
    window.addEventListener('DOMContentLoaded', () => {
      calculateLensImage();
      calculateCircuit();
      generatePunnett();
    });
  </script>
</body>
</html>`;
}

// Generate files
const outViPath = path.resolve(__dirname, '../courses/khtn_9.html');
const outAliasPath = path.resolve(__dirname, '../courses/natural_science_9.html');

const htmlVi = generateKHTN9Page('vi');
fs.writeFileSync(outViPath, htmlVi, 'utf8');
fs.writeFileSync(outAliasPath, htmlVi, 'utf8');

console.log(`Successfully generated:`);
console.log(` - ${outViPath} (${htmlVi.length} bytes)`);
console.log(` - ${outAliasPath} (${htmlVi.length} bytes)`);
