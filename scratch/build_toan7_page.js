const fs = require('fs');
const path = require('path');

const p1 = require('./toan7_data_p1.js');
const p2 = require('./toan7_data_p2.js');
const examQuestions = require('./toan7_exam.js');

const allLessons = [...p1.lessons, ...p2.lessons];
console.log('Total lessons loaded:', allLessons.length);

// Generate SVG Mindmap for each lesson
function generateMathSvgMindmap(l, index) {
  const chapterColors = [
    { bg1: '#0f172a', bg2: '#1e3a8a', stroke: '#3b82f6', text: '#93c5fd' }, // Ch 1: Blue
    { bg1: '#0f172a', bg2: '#14532d', stroke: '#22c55e', text: '#86efac' }, // Ch 2: Green
    { bg1: '#0f172a', bg2: '#581c87', stroke: '#a855f7', text: '#d8b4fe' }, // Ch 3: Purple
    { bg1: '#0f172a', bg2: '#7c2d12', stroke: '#f97316', text: '#fdba74' }, // Ch 4: Orange
    { bg1: '#0f172a', bg2: '#0e7490', stroke: '#06b6d4', text: '#67e8f9' }, // Ch 5: Cyan
    { bg1: '#0f172a', bg2: '#831843', stroke: '#ec4899', text: '#f472b6' }, // Ch 6: Pink
    { bg1: '#0f172a', bg2: '#713f12', stroke: '#eab308', text: '#fde047' }, // Ch 7: Yellow/Gold
    { bg1: '#0f172a', bg2: '#134e4a', stroke: '#14b8a6', text: '#5eead4' }, // Ch 8: Teal
    { bg1: '#0f172a', bg2: '#4c1d95', stroke: '#8b5cf6', text: '#c4b5fd' }, // Ch 9: Violet
    { bg1: '#0f172a', bg2: '#881337', stroke: '#f43f5e', text: '#fda4af' }  // Ch 10: Rose
  ];
  const col = chapterColors[(l.chapter - 1) % chapterColors.length];

  const titleShort = l.title.length > 30 ? l.title.substring(0, 28) + '...' : l.title;
  const p1Text = l.points[0] ? (l.points[0].length > 42 ? l.points[0].substring(0, 40) + '...' : l.points[0]) : '';
  const p2Text = l.points[1] ? (l.points[1].length > 42 ? l.points[1].substring(0, 40) + '...' : l.points[1]) : '';
  const p3Text = l.points[2] ? (l.points[2].length > 42 ? l.points[2].substring(0, 40) + '...' : l.points[2]) : '';

  return `
  <svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-lg border border-slate-700/60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="math_bg_${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${col.bg1}"/>
        <stop offset="100%" stop-color="${col.bg2}"/>
      </linearGradient>
      <linearGradient id="node_grad_${index}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${col.stroke}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.9"/>
      </linearGradient>
      <filter id="glow_${index}" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Background Canvas -->
    <rect width="840" height="210" rx="16" fill="url(#math_bg_${index})"/>
    <rect x="4" y="4" width="832" height="202" rx="12" fill="none" stroke="${col.stroke}" stroke-width="1.2" stroke-dasharray="6 4" opacity="0.4"/>

    <!-- Grid lines -->
    <path d="M 0 52.5 L 840 52.5 M 0 105 L 840 105 M 0 157.5 L 840 157.5" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    <path d="M 210 0 L 210 210 M 420 0 L 420 210 M 630 0 L 630 210" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>

    <!-- Connecting Branches -->
    <path d="M 210 105 C 270 105, 270 48, 330 48" fill="none" stroke="${col.stroke}" stroke-width="2.5" stroke-dasharray="3 3"/>
    <path d="M 210 105 C 270 105, 270 105, 330 105" fill="none" stroke="${col.stroke}" stroke-width="2.5"/>
    <path d="M 210 105 C 270 105, 270 162, 330 162" fill="none" stroke="${col.stroke}" stroke-width="2.5" stroke-dasharray="3 3"/>

    <!-- Sub branches to right notes -->
    <path d="M 590 48 C 625 48, 625 75, 660 75" fill="none" stroke="#64748b" stroke-width="1.8"/>
    <path d="M 590 162 C 625 162, 625 135, 660 135" fill="none" stroke="#64748b" stroke-width="1.8"/>

    <!-- Center Left Core Hub -->
    <rect x="25" y="65" width="185" height="80" rx="14" fill="#0f172a" stroke="${col.stroke}" stroke-width="2.5" filter="url(#glow_${index})"/>
    <rect x="35" y="75" width="165" height="22" rx="6" fill="${col.stroke}" fill-opacity="0.25"/>
    <text x="117" y="90" text-anchor="middle" fill="${col.text}" font-size="11" font-weight="900" letter-spacing="1">BÀI ${l.id} • ${l.term.toUpperCase()}</text>
    <text x="117" y="116" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">${escapeXml(titleShort)}</text>
    <text x="117" y="134" text-anchor="middle" fill="#94a3b8" font-size="10 font-medium">SGK KNTT • Trang ${l.pages}</text>

    <!-- Branch 1 Box -->
    <rect x="330" y="24" width="260" height="48" rx="10" fill="#090d16" stroke="${col.stroke}" stroke-width="1.5"/>
    <circle cx="348" cy="48" r="9" fill="${col.stroke}"/>
    <text x="348" y="52" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">1</text>
    <text x="366" y="44" fill="#f8fafc" font-size="11" font-weight="bold">Trọng tâm kiến thức</text>
    <text x="366" y="59" fill="#94a3b8" font-size="9.5">${escapeXml(p1Text)}</text>

    <!-- Branch 2 Box -->
    <rect x="330" y="81" width="260" height="48" rx="10" fill="#090d16" stroke="${col.stroke}" stroke-width="1.5"/>
    <circle cx="348" cy="105" r="9" fill="${col.stroke}"/>
    <text x="348" y="109" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">2</text>
    <text x="366" y="101" fill="#f8fafc" font-size="11" font-weight="bold">Công thức / Dấu hiệu</text>
    <text x="366" y="116" fill="#94a3b8" font-size="9.5">${escapeXml(p2Text)}</text>

    <!-- Branch 3 Box -->
    <rect x="330" y="138" width="260" height="48" rx="10" fill="#090d16" stroke="${col.stroke}" stroke-width="1.5"/>
    <circle cx="348" cy="162" r="9" fill="${col.stroke}"/>
    <text x="348" y="166" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">3</text>
    <text x="366" y="158" fill="#f8fafc" font-size="11" font-weight="bold">Phương pháp &amp; Kĩ năng</text>
    <text x="366" y="173" fill="#94a3b8" font-size="9.5">${escapeXml(p3Text)}</text>

    <!-- Right Side Application Card -->
    <rect x="660" y="45" width="160" height="120" rx="12" fill="#111827" stroke="#475569" stroke-width="1.5"/>
    <rect x="670" y="55" width="140" height="22" rx="5" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="740" y="70" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold"><tspan>★</tspan> ỨNG DỤNG THỰC TẾ</text>
    <text x="740" y="98" text-anchor="middle" fill="#e2e8f0" font-size="10.5" font-weight="bold">Toán học 7 KNTT</text>
    <text x="740" y="116" text-anchor="middle" fill="#94a3b8" font-size="9.5">Tư duy logic &amp; chứng minh</text>
    <text x="740" y="132" text-anchor="middle" fill="#38bdf8" font-size="9">Thực hành giải toán chuẩn</text>
    <rect x="685" y="144" width="110" height="14" rx="4" fill="${col.stroke}" fill-opacity="0.3"/>
    <text x="740" y="154" text-anchor="middle" fill="${col.text}" font-size="8.5" font-weight="bold">KẾT NỐI TRI THỨC</text>
  </svg>`;
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function renderLessonCard(l, index) {
  const mindmapSvg = generateMathSvgMindmap(l, index);

  const pointsList = l.points.map(pt => `<li class="flex items-start gap-2.5 leading-relaxed text-sm text-gray-700 dark:text-gray-300">
    <i class="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0 text-xs"></i>
    <span>${pt}</span>
  </li>`).join('');

  const methodsList = l.methods.map(m => `<li class="flex items-start gap-2.5 leading-relaxed text-sm text-gray-700 dark:text-gray-300">
    <i class="fa-solid fa-arrow-right text-emerald-500 mt-1 shrink-0 text-xs"></i>
    <span>${m}</span>
  </li>`).join('');

  const quizzesHtml = l.quiz.map((q, qIndex) => {
    const qId = `quiz_${l.id}_${qIndex}`;
    const opts = q.options.map((opt, optIndex) => `
      <button onclick="checkMathQuiz('${qId}', ${optIndex}, ${q.answer})" class="w-full text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all font-medium text-xs sm:text-sm text-gray-800 dark:text-gray-200 flex items-center justify-between group">
        <span><strong class="text-blue-600 dark:text-blue-400 mr-2">${String.fromCharCode(65 + optIndex)}.</strong> ${opt}</span>
        <i class="fa-regular fa-circle text-gray-400 group-hover:text-blue-500 transition-colors"></i>
      </button>
    `).join('');

    return `
      <div id="${qId}" class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 shadow-sm space-y-3">
        <div class="flex items-start gap-2">
          <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-black shrink-0">
            ${qIndex + 1}
          </span>
          <p class="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-snug">${q.q}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 options-grid">
          ${opts}
        </div>
        <div class="quiz-feedback hidden p-3 rounded-xl text-xs sm:text-sm font-medium"></div>
        <div class="quiz-explanation hidden p-3 rounded-xl text-xs sm:text-sm bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-950 dark:text-blue-200 leading-relaxed">
          <strong class="font-bold flex items-center gap-1.5 mb-1 text-blue-600 dark:text-blue-400"><i class="fa-solid fa-lightbulb"></i> Giải thích chi tiết:</strong>
          <span>${q.explain}</span>
        </div>
      </div>
    `;
  }).join('');

  return `
    <article id="lesson-${l.id}" class="lesson-card bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl space-y-6" data-chapter="${l.chapter}" data-term="${l.term}">
      <!-- Header bài học -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white shadow-sm">
            ${l.term}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Chương ${l.chapter}. ${l.chapterTitle}
          </span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-gray-400"><i class="fa-regular fa-bookmark mr-1"></i> Trang ${l.pages}</span>
          <button onclick="markLessonComplete(${l.id})" class="px-3 py-1 rounded-lg text-xs font-bold text-gray-500 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all border border-gray-200 dark:border-gray-700 flex items-center gap-1.5" id="btn-check-${l.id}">
            <i class="fa-regular fa-circle-check"></i> Đánh dấu đã học
          </button>
        </div>
      </div>

      <!-- Tiêu đề & Tóm lược -->
      <div>
        <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2.5">
          <i class="fa-solid fa-square-root-variable text-blue-600 dark:text-blue-400"></i> ${l.title}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed"><strong>Mục tiêu:</strong> ${l.summary}</p>
      </div>

      <!-- Sơ đồ tư duy Vector SVG Mindmap -->
      <div class="space-y-2">
        <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-diagram-project text-blue-500"></i> Sơ đồ tư duy vector • Bài ${l.id}
        </div>
        ${mindmapSvg}
      </div>

      <!-- 2 Cột: Khái niệm & Quy trình giải toán -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <!-- Khái niệm & Công thức -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/80 space-y-3">
          <h4 class="text-sm font-black uppercase text-blue-600 dark:text-blue-400 tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Khái niệm &amp; Công thức cốt lõi
          </h4>
          <ul class="space-y-2.5">
            ${pointsList}
          </ul>
        </div>

        <!-- Phương pháp giải toán -->
        <div class="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 space-y-3">
          <h4 class="text-sm font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-calculator"></i> Phương pháp giải &amp; Nhận dạng
          </h4>
          <ul class="space-y-2.5">
            ${methodsList}
          </ul>
        </div>
      </div>

      <!-- Ví dụ mẫu có lời giải chi tiết -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-transparent border border-amber-500/30 space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-black uppercase text-amber-600 dark:text-amber-400 tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-pen-nib"></i> Ví dụ minh họa có lời giải chuẩn
          </h4>
          <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">Mẫu chuẩn SGK</span>
        </div>
        <div class="p-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-amber-200/60 dark:border-amber-900/40 text-sm font-medium text-gray-800 dark:text-gray-200">
          <strong>Đề bài:</strong> ${l.example.problem}
        </div>
        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs sm:text-sm font-mono leading-relaxed border border-slate-800">
          <span class="text-emerald-400 font-bold">// LỜI GIẢI CHI TIẾT:</span><br>
          ${l.example.solution}
        </div>
      </div>

      <!-- Mini-quiz kiểm tra nhanh -->
      <div class="space-y-3 pt-2">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-circle-question"></i> Luyện tập nhanh (Mini-Quiz)
          </h4>
          <span class="text-xs text-gray-500 font-medium">Chọn phương án đúng nhất</span>
        </div>
        <div class="space-y-4">
          ${quizzesHtml}
        </div>
      </div>
    </article>
  `;
}

function buildHtml() {
  const renderedCards = allLessons.map((l, i) => renderLessonCard(l, i)).join('\n');

  // Quick formula handbook list (20 items from p2)
  const formulasHtml = p2.quickFormulas.map(f => `
    <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">${f.topic}</span>
        <span class="text-[10px] text-gray-400 font-mono">${f.note}</span>
      </div>
      <div class="p-2.5 rounded-lg bg-white dark:bg-gray-900 font-mono text-sm font-bold text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800">
        ${f.formula}
      </div>
    </div>
  `).join('');

  // 8 Standard Problem-Solving Workflows from p2
  const workflowsHtml = p2.standardWorkflows.map((w, idx) => `
    <div class="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
      <div class="flex items-center gap-2.5 pb-2 border-b border-gray-100 dark:border-gray-700">
        <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">${idx + 1}</span>
        <h5 class="font-bold text-gray-900 dark:text-white text-sm sm:text-base">${w.name}</h5>
      </div>
      <ol class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        ${w.steps.map(s => `<li class="flex items-start gap-2"><i class="fa-solid fa-angle-right text-blue-500 mt-1"></i><span>${s}</span></li>`).join('')}
      </ol>
      <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-xs font-medium border border-amber-200 dark:border-amber-800">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> <strong>Lưu ý:</strong> ${w.tip}
      </div>
    </div>
  `).join('');

  // Sidebar chapter filter buttons (10 chapters)
  const chapterTitles = [
    'Chương I. Số hữu tỉ',
    'Chương II. Số thực',
    'Chương III. Góc & Đường thẳng song song',
    'Chương IV. Tam giác bằng nhau',
    'Chương V. Dữ liệu & Biểu đồ',
    'Chương VI. Tỉ lệ thức & Đại lượng tỉ lệ',
    'Chương VII. Biểu thức đại số & Đa thức 1 biến',
    'Chương VIII. Biến cố & Xác suất',
    'Chương IX. Quan hệ yếu tố tam giác & 4 đường đồng quy',
    'Chương X. Một số hình khối trong thực tiễn'
  ];

  const chapterFilterButtons = chapterTitles.map((t, idx) => `
    <button onclick="filterByChapter(${idx + 1})" class="chapter-btn w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all flex items-center justify-between" data-chap="${idx + 1}">
      <span class="truncate">${t}</span>
      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">${allLessons.filter(x => x.chapter === (idx + 1)).length}</span>
    </button>
  `).join('');

  // Sidebar lesson items list
  const sidebarLessonItems = allLessons.map(l => `
    <a href="#lesson-${l.id}" class="sidebar-item block p-2.5 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-id="${l.id}" data-chapter="${l.chapter}">
      <div class="flex items-center justify-between">
        <span class="font-bold text-blue-600 dark:text-blue-400">Bài ${l.id}</span>
        <i class="fa-regular fa-circle-check text-gray-300 dark:text-gray-700 status-icon-${l.id}"></i>
      </div>
      <p class="truncate text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">${l.title}</p>
    </a>
  `).join('');

  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kiến Thức Cốt Lõi Toán 7 — Bộ Kết Nối Tri Thức Với Cuộc Sống</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eff6ff',
              100: '#dbeafe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
            }
          }
        }
      }
    }
  </script>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- MathJax for rendering LaTeX math formulas -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
      },
      svg: {
        fontCache: 'global'
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    .lesson-card { scroll-margin-top: 5.5rem; }
  </style>
</head>
<body class="bg-gray-100 dark:bg-slate-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 font-sans antialiased min-h-screen flex flex-col">

  <!-- Header / Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left: Logo & Subject Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all flex items-center gap-1.5 text-xs font-bold" title="Trở về Trang chủ">
          <i class="fa-solid fa-arrow-left"></i> <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <div class="h-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <i class="fa-solid fa-square-root-variable text-lg"></i>
          </div>
          <div>
            <h1 class="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
              Toán 7 <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">Kết nối tri thức</span>
            </h1>
            <p class="text-[11px] text-gray-500 dark:text-gray-400 font-medium">10 Chương • 37 Bài học • 2 Tập</p>
          </div>
        </div>
      </div>

      <!-- Center / Right Actions -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Nút mở Sổ tay công thức -->
        <button onclick="openFormulaModal()" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-all flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid fa-book-bookmark text-amber-500"></i> <span class="hidden md:inline">Sổ tay công thức</span>
        </button>

        <!-- Nút mở Sơ đồ tập hợp & 3D -->
        <button onclick="openSetDiagramModal()" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 transition-all flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid fa-cubes text-purple-500"></i> <span class="hidden md:inline">Tập số &amp; Hình 3D</span>
        </button>

        <!-- Nút Đấu trường Trạng Nguyên -->
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700 transition-all flex items-center gap-1.5 shadow-md shadow-red-500/20">
          <i class="fa-solid fa-trophy"></i> <span>Trạng Nguyên (40 câu)</span>
        </button>

        <!-- Nút Dark / Light Mode -->
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-gray-500 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors" title="Chuyển chế độ Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full flex flex-col lg:flex-row gap-6">

    <!-- Sticky Sidebar bên trái -->
    <aside class="w-full lg:w-80 shrink-0 space-y-4">
      <div class="sticky top-24 space-y-4 max-h-[calc(100vh-7rem)] flex flex-col">
        <!-- Box tìm kiếm & Tiến độ -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
          <!-- Search input -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="lessonSearch" onkeyup="filterLessons()" placeholder="Tìm kiếm bài, công thức..." class="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors">
          </div>

          <!-- Tiến độ học -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-gray-600 dark:text-gray-400">Tiến độ bài học</span>
              <span id="progressText" class="font-black text-blue-600 dark:text-blue-400">0 / 37 bài</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>
        </div>

        <!-- Bộ lọc 10 Chương -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <div class="flex items-center justify-between pb-1 border-b border-gray-100 dark:border-gray-800">
            <span class="text-[11px] font-black uppercase text-gray-400 tracking-wider">Lọc theo Chương</span>
            <button onclick="filterByChapter('all')" class="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline">Tất cả</button>
          </div>
          <div class="space-y-1 max-h-48 overflow-y-auto pr-1">
            ${chapterFilterButtons}
          </div>
        </div>

        <!-- Danh sách 37 Bài học cuộn mượt -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm flex-1 overflow-y-auto space-y-1.5" id="sidebarList">
          <span class="text-[11px] font-black uppercase text-gray-400 tracking-wider block pb-1 border-b border-gray-100 dark:border-gray-800">Mục lục 37 bài</span>
          ${sidebarLessonItems}
        </div>
      </div>
    </aside>

    <!-- Main Content Area: 37 Bài học -->
    <main class="flex-1 space-y-8 min-w-0">

      <!-- Hero Banner giới thiệu -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white border border-blue-700/50 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <i class="fa-solid fa-shapes text-[180px]"></i>
        </div>
        <div class="relative z-10 space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 border border-blue-400/30 text-blue-200">
            <i class="fa-solid fa-graduation-cap"></i> Khung chương trình chuẩn SGK Kết nối tri thức
          </div>
          <h2 class="text-2xl sm:text-3xl font-black tracking-tight">Hệ Thống Kiến Thức Cốt Lõi Toán 7</h2>
          <p class="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Học liệu toàn diện gồm 10 chương và 37 bài học: Số hữu tỉ, Số thực, Hình học trực quan và lập luận phẳng, Thống kê biểu đồ, Tỉ lệ thức, Đa thức một biến, Xác suất và Hình khối không gian.
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium border border-white/10">37 Sơ đồ tư duy Vector</span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium border border-white/10">74+ Mini-Quiz tương tác</span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium border border-white/10">Đấu trường 40 câu trắc nghiệm</span>
          </div>
        </div>
      </div>

      <!-- Render 37 Lesson Cards -->
      <div class="space-y-8" id="lessonContainer">
        ${renderedCards}
      </div>

    </main>
  </div>

  <!-- Modal 1: Sổ tay công thức tra nhanh (20 chủ đề) -->
  <div id="formulaModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-black text-gray-900 dark:text-white text-base sm:text-lg">Sổ Tay Công Thức &amp; Quy Trình Giải Toán 7</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">20 công thức trọng tâm &amp; 8 quy trình mẫu chuẩn</p>
          </div>
        </div>
        <button onclick="closeFormulaModal()" class="w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 flex-1">
        <div>
          <h4 class="text-sm font-black uppercase text-amber-600 dark:text-amber-400 tracking-wider mb-3 flex items-center gap-2">
            <i class="fa-solid fa-calculator"></i> 20 Công thức cốt lõi tra nhanh
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${formulasHtml}
          </div>
        </div>

        <div>
          <h4 class="text-sm font-black uppercase text-blue-600 dark:text-blue-400 tracking-wider mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list-check"></i> 8 Quy trình giải toán chuẩn SGK
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${workflowsHtml}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 2: Sơ đồ Tập hợp số & Hình khối 3D -->
  <div id="setDiagramModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
            <i class="fa-solid fa-cubes"></i>
          </div>
          <div>
            <h3 class="font-black text-gray-900 dark:text-white text-base sm:text-lg">Sơ Đồ Tập Hợp Số &amp; Mô Hình Hình Khối</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ và Lăng trụ đứng</p>
          </div>
        </div>
        <button onclick="closeSetDiagramModal()" class="w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 flex-1">
        <!-- SVG Cấu trúc tập hợp số -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider">1. Sơ đồ lồng nhau của các tập hợp số</h4>
          <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            <svg viewBox="0 0 540 220" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="270" cy="110" rx="260" ry="100" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
              <text x="500" y="55" fill="#a5b4fc" font-size="14" font-weight="bold">R (Số thực)</text>
              <ellipse cx="220" cy="110" rx="200" ry="85" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
              <text x="390" y="70" fill="#7dd3fc" font-size="13" font-weight="bold">Q (Số hữu tỉ)</text>
              <ellipse cx="180" cy="110" rx="150" ry="70" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
              <text x="300" y="85" fill="#86efac" font-size="12" font-weight="bold">Z (Số nguyên)</text>
              <ellipse cx="140" cy="110" rx="100" ry="50" fill="#78350f" stroke="#fbbf24" stroke-width="2"/>
              <text x="140" y="115" text-anchor="middle" fill="#fef08a" font-size="14" font-weight="black">N (Tự nhiên)</text>
              <rect x="430" y="130" width="85" height="50" rx="10" fill="#831843" stroke="#f472b6" stroke-width="1.5"/>
              <text x="472" y="152" text-anchor="middle" fill="#fbcfe8" font-size="11" font-weight="bold">I (Vô tỉ)</text>
              <text x="472" y="170" text-anchor="middle" fill="#fbcfe8" font-size="9">√2, π...</text>
            </svg>
          </div>
        </div>

        <!-- Mô hình hình khối -->
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider">2. Các hình khối thực tiễn Lớp 7</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400">Hình hộp chữ nhật &amp; Lập phương</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">• 6 mặt là hình chữ nhật (hoặc hình vuông)<br>• $S_{xq} = 2(a + b) \\cdot h$<br>• $V = a \\cdot b \\cdot h$ (Lập phương: $V = a^3$)</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">Lăng trụ đứng tam giác / tứ giác</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">• 2 mặt đáy song song và bằng nhau<br>• Các mặt bên là hình chữ nhật vuông góc với đáy<br>• $S_{xq} = C_{đáy} \\cdot h$; $V = S_{đáy} \\cdot h$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 3: Đấu trường Trạng Nguyên Toán 7 (40 câu) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      <!-- Exam Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-500/20">
            <i class="fa-solid fa-trophy text-lg"></i>
          </div>
          <div>
            <h3 class="font-black text-gray-900 dark:text-white text-base sm:text-lg">Đấu Trường Trạng Nguyên Toán 7</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">40 câu hỏi trắc nghiệm bao quát toàn diện 10 chương</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 font-mono text-sm font-black flex items-center gap-1.5" id="timerBadge">
            <i class="fa-regular fa-clock"></i> <span id="timerText">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="p-6 overflow-y-auto space-y-6 flex-1" id="examQuestionsContainer">
        <!-- Render questions dynamically -->
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 rounded-b-3xl">
        <div class="text-xs text-gray-500 dark:text-gray-400 font-medium">
          Đã trả lời: <span id="answeredCount" class="font-bold text-blue-600 dark:text-blue-400">0</span> / 40 câu
        </div>
        <div class="flex items-center gap-2">
          <button onclick="submitExam()" class="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5" id="btnSubmitExam">
            <i class="fa-solid fa-paper-plane"></i> Nộp bài thi
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Modal controllers
    function openFormulaModal() { document.getElementById('formulaModal').classList.remove('hidden'); }
    function closeFormulaModal() { document.getElementById('formulaModal').classList.add('hidden'); }
    function openSetDiagramModal() { document.getElementById('setDiagramModal').classList.remove('hidden'); }
    function closeSetDiagramModal() { document.getElementById('setDiagramModal').classList.add('hidden'); }

    // Mini-quiz interaction
    function checkMathQuiz(qId, selectedIdx, correctIdx) {
      const container = document.getElementById(qId);
      const buttons = container.querySelectorAll('.options-grid button');
      const feedback = container.querySelector('.quiz-feedback');
      const explanation = container.querySelector('.quiz-explanation');

      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-950/30');
        if (idx === correctIdx) {
          btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-700', 'dark:text-emerald-300');
          btn.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-500';
        } else if (idx === selectedIdx) {
          btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-700', 'dark:text-rose-300');
          btn.querySelector('i').className = 'fa-solid fa-circle-xmark text-rose-500';
        }
      });

      feedback.classList.remove('hidden');
      if (selectedIdx === correctIdx) {
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-check text-emerald-500"></i> Chính xác! Bạn đã chọn đúng.';
      } else {
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs sm:text-sm font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-center gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-xmark text-rose-500"></i> Chưa chính xác. Xem lời giải chi tiết bên dưới nhé!';
      }
      explanation.classList.remove('hidden');
      if (window.MathJax) { MathJax.typesetPromise([explanation]); }
    }

    // Learning Progress
    const completedLessons = new Set(JSON.parse(localStorage.getItem('toan7_completed') || '[]'));
    function updateProgress() {
      const total = 37;
      const count = completedLessons.size;
      document.getElementById('progressText').textContent = count + ' / ' + total + ' bài';
      document.getElementById('progressBar').style.width = (count / total * 100) + '%';
      for (let i = 1; i <= 37; i++) {
        const btn = document.getElementById('btn-check-' + i);
        const icon = document.querySelector('.status-icon-' + i);
        if (completedLessons.has(i)) {
          if (btn) {
            btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/30', 'text-emerald-600', 'border-emerald-300');
            btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Đã hoàn thành';
          }
          if (icon) {
            icon.className = 'fa-solid fa-circle-check text-emerald-500 status-icon-' + i;
          }
        } else {
          if (btn) {
            btn.classList.remove('bg-emerald-50', 'dark:bg-emerald-950/30', 'text-emerald-600', 'border-emerald-300');
            btn.innerHTML = '<i class="fa-regular fa-circle-check"></i> Đánh dấu đã học';
          }
          if (icon) {
            icon.className = 'fa-regular fa-circle-check text-gray-300 dark:text-gray-700 status-icon-' + i;
          }
        }
      }
    }
    function markLessonComplete(id) {
      if (completedLessons.has(id)) {
        completedLessons.delete(id);
      } else {
        completedLessons.add(id);
      }
      localStorage.setItem('toan7_completed', JSON.stringify(Array.from(completedLessons)));
      updateProgress();
    }
    updateProgress();

    // Filtering
    function filterLessons() {
      const q = document.getElementById('lessonSearch').value.toLowerCase();
      document.querySelectorAll('.lesson-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'block' : 'none';
      });
    }
    function filterByChapter(chap) {
      document.querySelectorAll('.chapter-btn').forEach(b => {
        b.classList.remove('bg-blue-100', 'dark:bg-blue-900', 'text-blue-700', 'dark:text-blue-300', 'font-bold');
      });
      if (chap === 'all') {
        document.querySelectorAll('.lesson-card').forEach(card => card.style.display = 'block');
      } else {
        const activeBtn = document.querySelector('.chapter-btn[data-chap="' + chap + '"]');
        if (activeBtn) activeBtn.classList.add('bg-blue-100', 'dark:bg-blue-900', 'text-blue-700', 'dark:text-blue-300', 'font-bold');
        document.querySelectorAll('.lesson-card').forEach(card => {
          card.style.display = card.getAttribute('data-chapter') == chap ? 'block' : 'none';
        });
      }
    }

    // Exam Arena Logic
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let userAnswers = {};
    let examTimerInterval = null;
    let timeLeft = 3600; // 60 minutes

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      renderExamQuestions();
      startTimer();
    }
    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }
    function startTimer() {
      if (examTimerInterval) return;
      examTimerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        document.getElementById('timerText').textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function renderExamQuestions() {
      const c = document.getElementById('examQuestionsContainer');
      c.innerHTML = examQuestionsData.map((item, qIdx) => `
        <div class="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-3" id="exam_q_${qIdx}">
          <div class="flex items-start gap-2">
            <span class="px-2 py-0.5 rounded-lg bg-blue-600 text-white text-xs font-bold shrink-0">Câu ${qIdx + 1}</span>
            <p class="font-bold text-gray-900 dark:text-white text-sm sm:text-base">${item.q}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            ${item.options.map((opt, optIdx) => `
              <button onclick="selectExamAnswer(${qIdx}, ${optIdx})" class="exam-opt-${qIdx} text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 bg-white dark:bg-gray-900 text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 transition-all">
                <strong class="text-blue-600 dark:text-blue-400 mr-2">${String.fromCharCode(65 + optIdx)}.</strong> ${opt}
              </button>
            `).join('')}
          </div>
          <div class="exam-explain-${qIdx} hidden p-3 rounded-xl text-xs sm:text-sm bg-blue-50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
            <strong>Lời giải:</strong> ${item.explain}
          </div>
        </div>
      `).join('');
      if (window.MathJax) { MathJax.typesetPromise([c]); }
    }

    function selectExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      document.querySelectorAll('.exam-opt-' + qIdx).forEach((btn, idx) => {
        if (idx === optIdx) {
          btn.classList.add('border-blue-600', 'bg-blue-50', 'dark:bg-blue-950/40', 'font-bold');
        } else {
          btn.classList.remove('border-blue-600', 'bg-blue-50', 'dark:bg-blue-950/40', 'font-bold');
        }
      });
      document.getElementById('answeredCount').textContent = Object.keys(userAnswers).length;
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      examQuestionsData.forEach((item, qIdx) => {
        const isCorrect = userAnswers[qIdx] === item.answer;
        if (isCorrect) score++;
        const card = document.getElementById('exam_q_' + qIdx);
        const explain = card.querySelector('.exam-explain-' + qIdx);
        explain.classList.remove('hidden');

        card.querySelectorAll('.exam-opt-' + qIdx).forEach((btn, optIdx) => {
          btn.disabled = true;
          if (optIdx === item.answer) {
            btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-700', 'dark:text-emerald-300');
          } else if (userAnswers[qIdx] === optIdx) {
            btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-700', 'dark:text-rose-300');
          }
        });
      });

      const mark = (score / 40 * 10).toFixed(1);
      let rank = 'Trạng Nguyên Xuất Sắc';
      if (score < 20) rank = 'Tú Tài Cần Cố Gắng';
      else if (score < 32) rank = 'Cử Nhân Tiến Bộ';
      else if (score < 38) rank = 'Bảng Nhãn Giỏi Giang';

      alert('KẾT QUẢ ĐẤU TRƯỜNG TRẠNG NGUYÊN TOÁN 7:\n- Đúng: ' + score + ' / 40 câu\n- Điểm số: ' + mark + ' / 10.0\n- Danh hiệu: ' + rank + '\n\nXem chi tiết giải thích cho từng câu hỏi bên dưới!');
      document.getElementById('btnSubmitExam').style.display = 'none';
      if (window.MathJax) { MathJax.typesetPromise(); }
    }
  </script>
</body>
</html>`;

  fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', fullHtml, 'utf8');
  console.log('Successfully written courses/toan_7.html (bytes:', fullHtml.length, ')');
}

buildHtml();
