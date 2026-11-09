const fs = require('fs');
const path = require('path');

const lessons = require(path.join(__dirname, 'toan11_data.js'));
const coreCards = require(path.join(__dirname, 'toan11_core_cards.js'));
const cases = require(path.join(__dirname, 'toan11_cases.js'));
const svgs = require(path.join(__dirname, 'toan11_svgs.js'));
const reviewArena = require(path.join(__dirname, 'toan11_review_arena.js'));

function formatText(str) {
  if (!str) return '';
  return str.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
}

function renderCardPoints(points) {
  if (!points || !Array.isArray(points)) return '';
  return points.map(p => `
    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 shrink-0"></span>
      <div class="leading-relaxed flex-1">${formatText(p)}</div>
    </div>
  `).join('');
}

function renderCoreCards(cards) {
  if (!cards || !Array.isArray(cards)) return '';
  const cardThemes = [
    { border: 'border-sky-200 dark:border-sky-800', bg: 'bg-sky-50/50 dark:bg-sky-950/20', text: 'text-sky-700 dark:text-sky-300', tag: 'bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200' },
    { border: 'border-blue-200 dark:border-blue-800', bg: 'bg-blue-50/50 dark:bg-blue-950/20', text: 'text-blue-700 dark:text-blue-300', tag: 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200' },
    { border: 'border-indigo-200 dark:border-indigo-800', bg: 'bg-indigo-50/50 dark:bg-indigo-950/20', text: 'text-indigo-700 dark:text-indigo-300', tag: 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200' },
    { border: 'border-teal-200 dark:border-teal-800', bg: 'bg-teal-50/50 dark:bg-teal-950/20', text: 'text-teal-700 dark:text-teal-300', tag: 'bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200' }
  ];

  return cards.map((c, idx) => {
    const t = cardThemes[idx % cardThemes.length];
    return `
      <div class="p-4 sm:p-5 rounded-2xl border ${t.border} ${t.bg} transition-all hover:shadow-sm">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide ${t.tag} border border-current shadow-xs">Trụ cột ${idx + 1}</span>
          <i class="${c.icon || 'fa-solid fa-shapes'} text-base ${t.text} opacity-80"></i>
        </div>
        <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">${formatText(c.title)}</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">${formatText(c.desc)}</p>
        <div class="space-y-2">
          ${renderCardPoints(c.points)}
        </div>
      </div>
    `;
  }).join('');
}

function renderLessonSections(sections) {
  if (!sections || !Array.isArray(sections)) return '';
  return sections.map(sec => {
    const details = Array.isArray(sec.details) ? sec.details : [];
    return `
    <div class="space-y-4">
      <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2.5 pt-2">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
        <span>${formatText(sec.heading)}</span>
      </h3>
      ${sec.summary ? `
        <div class="p-3.5 sm:p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border-l-4 border-blue-600 dark:border-blue-400 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong class="text-slate-900 dark:text-white font-bold">Khái quát:</strong> ${formatText(sec.summary)}
        </div>
      ` : ''}
      ${details.length > 0 ? `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${details.map((detail, dIdx) => `
            <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition shadow-xs space-y-2">
              <div class="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                <i class="fa-solid fa-circle-check text-[11px]"></i>
                <span>Trọng điểm #${dIdx + 1}</span>
              </div>
              <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ${formatText(detail)}
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
    `;
  }).join('');
}

function renderCases(casesList) {
  if (!casesList || !Array.isArray(casesList)) return '';
  return casesList.map((cs, cIdx) => `
    <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs">
      <div class="flex items-center justify-between gap-2">
        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200">${cs.badge || `Tình huống ${cIdx + 1}`}</span>
        <i class="fa-solid fa-lightbulb text-amber-500 text-base"></i>
      </div>
      <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white">${formatText(cs.title)}</h4>
      
      <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800">
        <strong class="text-slate-900 dark:text-white font-bold">Bối cảnh & Bài toán:</strong> ${formatText(cs.scenario)}
      </div>
      
      <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-blue-50/50 dark:bg-blue-950/30 p-3 rounded-xl border border-blue-200/60 dark:border-blue-900/60">
        <strong class="text-blue-900 dark:text-blue-300 font-bold">Mô hình hóa & Phân tích:</strong> ${formatText(cs.analysis)}
      </div>
      
      <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-emerald-50/50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-200/60 dark:border-emerald-900/60">
        <strong class="text-emerald-900 dark:text-emerald-300 font-bold">Giải pháp & Đáp số:</strong> ${formatText(cs.solution)}
      </div>

      <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-amber-50/40 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-200/60 dark:border-amber-900/60">
        <strong class="text-amber-900 dark:text-amber-300 font-bold">Bài học rút ra:</strong> ${formatText(cs.takeaway)}
      </div>
    </div>
  `).join('');
}

function renderQuizzes(quizzes, lessonNum) {
  if (!quizzes || !Array.isArray(quizzes)) return '';
  return quizzes.map((q, qIdx) => `
    <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs" id="quiz-${lessonNum}-${qIdx}">
      <div class="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-start gap-2.5">
        <span class="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">Câu ${qIdx + 1}</span>
        <span class="leading-snug">${formatText(q.q)}</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        ${q.options.map((opt, oIdx) => `
          <button type="button" onclick="checkInlineQuiz(${lessonNum}, ${qIdx}, ${oIdx}, ${q.answer})" class="quiz-btn-${lessonNum}-${qIdx} w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition flex items-center gap-2.5">
            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-[11px] flex items-center justify-center shrink-0">${['A', 'B', 'C', 'D'][oIdx]}</span>
            <span class="flex-1">${formatText(opt)}</span>
          </button>
        `).join('')}
      </div>
      <div id="quiz-exp-${lessonNum}-${qIdx}" class="hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2"></div>
    </div>
  `).join('');
}

function renderLessons() {
  return lessons.map(lesson => {
    const num = lesson.num;
    return `
      <article id="bai-${num}" class="lesson-card bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-12 scroll-mt-24 transition-all">
        <!-- Lesson Header Banner -->
        <div class="p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white relative">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20 backdrop-blur-sm">${lesson.tag}</span>
            <div class="flex items-center gap-3 text-xs text-blue-200 font-medium">
              <span><i class="fa-regular fa-clock mr-1"></i>30 phút tự học</span>
              <span>•</span>
              <span class="text-emerald-300 font-semibold"><i class="fa-solid fa-check-circle mr-1"></i>Đủ 5 phần chuẩn mực</span>
            </div>
          </div>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-snug">${lesson.title}</h2>
          <p class="mt-2 text-sm sm:text-base text-blue-200 font-medium">${lesson.subtitle}</p>
          <p class="mt-3 text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-4xl"><strong class="text-amber-300">Mục tiêu cốt lõi:</strong> ${lesson.desc}</p>
        </div>

        <div class="p-5 sm:p-8 space-y-10">
          <!-- Phần A: 4 Thẻ Kiến thức Cốt lõi -->
          <section class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 class="font-black text-sm sm:text-base uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <i class="fa-solid fa-key"></i>
                <span>Phần A. Kiến thức cốt lõi (4 trụ cột then chốt)</span>
              </h3>
              <span class="text-xs text-slate-500 font-bold">4 Khung kiến thức trọng tâm</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${renderCoreCards(coreCards[String(num)])}
            </div>
          </section>

          <!-- Phần B: Nội dung Chi tiết Trọng tâm -->
          <section class="space-y-6">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 class="font-black text-sm sm:text-base uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <i class="fa-solid fa-book-open"></i>
                <span>Phần B. Lưới phân tích chuyên sâu chi tiết</span>
              </h3>
              <span class="text-xs text-slate-500 font-bold">Phân tích sâu định nghĩa, định lí và tính chất</span>
            </div>
            ${renderLessonSections(lesson.sections)}
          </section>

          <!-- Phần C: Sơ đồ Trực quan Nguyên lí -->
          <section class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 class="font-black text-sm sm:text-base uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <i class="fa-solid fa-bezier-curve"></i>
                <span>Phần C. Sơ đồ tư duy & mô hình trực quan</span>
              </h3>
              <span class="text-xs text-slate-500 font-bold">Vector SVG chất lượng cao</span>
            </div>
            <div class="w-full overflow-x-auto p-1">
              ${svgs[String(num)] || ''}
            </div>
          </section>

          <!-- Phần D: Tình huống Thực tế & Kĩ năng Ứng dụng -->
          <section class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 class="font-black text-sm sm:text-base uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <i class="fa-solid fa-briefcase"></i>
                <span>Phần D. Tình huống thực tế & Kĩ năng ứng dụng (2 tình huống)</span>
              </h3>
              <span class="text-xs text-slate-500 font-bold">Giải quyết bài toán thực tế đời sống & kĩ thuật</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${renderCases(cases[String(num)])}
            </div>
          </section>

          <!-- Phần E: Luyện tập Trắc nghiệm Củng cố -->
          <section class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 class="font-black text-sm sm:text-base uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <i class="fa-solid fa-circle-question"></i>
                <span>Phần E. Luyện tập trắc nghiệm củng cố (3 câu)</span>
              </h3>
              <span class="text-xs text-slate-500 font-bold">Phản hồi tức thì & Giải thích cặn kẽ</span>
            </div>
            <div class="space-y-3">
              ${renderQuizzes(lesson.quizzes, num)}
            </div>
          </section>
        </div>
      </article>
    `;
  }).join('');
}

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chuyên Đề Toán 11 — Kết Nối Tri Thức | CS Platform</title>
  <meta name="description" content="Tổng hợp toàn diện kiến thức Chuyên đề Toán 11 Kết nối tri thức đủ 3 chuyên đề 12 bài học: Phép biến hình, Lí thuyết đồ thị, Bản vẽ kĩ thuật và Đấu trường Trạng Nguyên 20 câu.">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            slate: {
              850: '#151e2e'
            }
          }
        }
      }
    }
  </script>

  <!-- KaTeX for Rich Math Formula Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    .dark ::-webkit-scrollbar-thumb:hover { background: #64748b; }
    .katex { font-size: 1.05em; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 font-sans transition-colors min-h-screen flex flex-col">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-shapes text-lg"></i>
          </div>
          <div>
            <div class="font-black text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>CHUYÊN ĐỀ TOÁN 11</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">KNTT</span>
            </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Phép biến hình • Lí thuyết đồ thị • Bản vẽ kĩ thuật</div>
          </div>
        </a>
      </div>

      <!-- Center: Quick Progress Tracker -->
      <div class="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Tiến độ chuyên đề:</span>
        <div class="w-28 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div id="top-progress-bar" class="bg-blue-600 h-full w-0 transition-all duration-500"></div>
        </div>
        <span id="top-progress-text" class="text-xs font-black text-blue-600 dark:text-blue-400">0/12 bài</span>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium hover:border-blue-400 transition flex items-center gap-2" title="Tìm kiếm nhanh (Ctrl+K)">
          <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
          <span class="hidden sm:inline">Tìm kiếm...</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-[10px] font-mono border border-slate-200 dark:border-slate-600">Ctrl+K</kbd>
        </button>

        <a href="#arena-section" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm shadow-amber-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Đấu trường Trạng Nguyên</span>
        </a>

        <!-- Dark / Light Mode Toggle -->
        <button type="button" onclick="toggleTheme()" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-500 flex items-center justify-center transition" title="Chuyển chế độ sáng / tối">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Main Hero Banner (Broad layout to prevent text squishing) -->
  <section class="bg-gradient-to-b from-blue-900 via-indigo-950 to-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-blue-700/60 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      
      <!-- Left Hero Column (Broad) -->
      <div class="flex-1 min-w-0">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 border border-white/15 text-xs font-bold mb-3 backdrop-blur-sm">
          <i class="fa-solid fa-book-bookmark text-amber-400"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
          KIẾN THỨC ĐẦY ĐỦ – CHUYÊN ĐỀ HỌC TẬP TOÁN 11
        </h1>
        <div class="mt-2 text-base sm:text-lg text-blue-300 font-bold">
          Tổng hợp theo đủ 3 chuyên đề, 12 bài học toàn diện
        </div>
        <p class="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-3xl">
          Hệ thống hóa toàn bộ định nghĩa, tính chất, công thức tọa độ, định lí đồ thị Euler/Hamilton, thuật toán Dijkstra tìm đường đi ngắn nhất và quy chuẩn đọc/vẽ bản vẽ kĩ thuật.
        </p>

        <!-- Quick Hero Badges -->
        <div class="mt-5 flex flex-wrap items-center gap-2.5 text-xs">
          <a href="#chuyende-1" class="px-3 py-1.5 rounded-xl bg-blue-800/80 hover:bg-blue-700 border border-blue-600/60 font-bold text-white transition flex items-center gap-1.5">
            <i class="fa-solid fa-draw-polygon text-sky-300"></i> CĐ1: Phép biến hình (B1–B7)
          </a>
          <a href="#chuyende-2" class="px-3 py-1.5 rounded-xl bg-indigo-800/80 hover:bg-indigo-700 border border-indigo-600/60 font-bold text-white transition flex items-center gap-1.5">
            <i class="fa-solid fa-diagram-project text-indigo-300"></i> CĐ2: Lí thuyết đồ thị (B8–B10)
          </a>
          <a href="#chuyende-3" class="px-3 py-1.5 rounded-xl bg-teal-800/80 hover:bg-teal-700 border border-teal-600/60 font-bold text-white transition flex items-center gap-1.5">
            <i class="fa-solid fa-compass-drafting text-teal-300"></i> CĐ3: Vẽ kĩ thuật (B11–B12)
          </a>
          <a href="#formula-section" class="px-3 py-1.5 rounded-xl bg-amber-500/30 hover:bg-amber-500/40 border border-amber-400/50 font-bold text-amber-200 transition flex items-center gap-1.5">
            <i class="fa-solid fa-calculator text-amber-400"></i> Công thức tra nhanh
          </a>
        </div>
      </div>

      <!-- Right Quick Jump Box (Fixed width, 12 buttons) -->
      <div class="w-full lg:w-[380px] p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shrink-0">
        <div class="text-xs font-extrabold uppercase tracking-wider text-blue-200 mb-3 flex items-center justify-between">
          <span>Chuyển nhanh 12 bài học</span>
          <span class="text-[10px] text-blue-300 font-bold px-2 py-0.5 rounded bg-white/10">3 Chuyên đề</span>
        </div>
        <div class="grid grid-cols-4 gap-2 text-center font-bold text-xs">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => `
            <a href="#bai-${n}" class="p-2 rounded-xl bg-white/15 hover:bg-blue-600 hover:text-white transition border border-white/10">B${n}</a>
          `).join('')}
        </div>
        <div class="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-bold text-blue-100">
          <a href="#summary-table" class="hover:text-amber-300 transition flex items-center gap-1.5"><i class="fa-solid fa-table-list text-amber-400"></i> Bảng 12 bài</a>
          <a href="#notes-section" class="hover:text-amber-300 transition flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-sky-400"></i> Lưu ý & Mẹo</a>
          <a href="#arena-section" class="hover:text-amber-300 transition flex items-center gap-1.5"><i class="fa-solid fa-trophy text-amber-400"></i> Đấu trường</a>
        </div>
      </div>

    </div>
  </section>

  <!-- Main Content Layout (Sidebar + Main Column) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="flex flex-col lg:flex-row items-start gap-8">
      
      <!-- Sticky Sidebar Navigation -->
      <aside class="w-full lg:w-72 shrink-0 lg:sticky lg:top-24 space-y-4">
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="font-black text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
            <span>Mục lục chuyên đề</span>
            <span class="text-blue-600 dark:text-blue-400 font-bold">12 bài</span>
          </div>

          <!-- Chuyên đề 1 -->
          <div class="space-y-1.5" id="chuyende-1">
            <div class="font-extrabold text-xs text-blue-700 dark:text-blue-400 flex items-center gap-1.5 py-1">
              <i class="fa-solid fa-draw-polygon text-xs"></i> CĐ1. PHÉP BIẾN HÌNH
            </div>
            ${[1, 2, 3, 4, 5, 6, 7].map(n => `
              <a href="#bai-${n}" class="sidebar-link flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition" id="side-bai-${n}">
                <span class="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center shrink-0">B${n}</span>
                <span class="truncate">${lessons[n - 1].title.split('.')[1].trim()}</span>
              </a>
            `).join('')}
          </div>

          <!-- Chuyên đề 2 -->
          <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800" id="chuyende-2">
            <div class="font-extrabold text-xs text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5 py-1">
              <i class="fa-solid fa-diagram-project text-xs"></i> CĐ2. LÍ THUYẾT ĐỒ THỊ
            </div>
            ${[8, 9, 10].map(n => `
              <a href="#bai-${n}" class="sidebar-link flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition" id="side-bai-${n}">
                <span class="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center shrink-0">B${n}</span>
                <span class="truncate">${lessons[n - 1].title.split('.')[1].trim()}</span>
              </a>
            `).join('')}
          </div>

          <!-- Chuyên đề 3 -->
          <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800" id="chuyende-3">
            <div class="font-extrabold text-xs text-teal-700 dark:text-teal-400 flex items-center gap-1.5 py-1">
              <i class="fa-solid fa-compass-drafting text-xs"></i> CĐ3. VẼ KĨ THUẬT
            </div>
            ${[11, 12].map(n => `
              <a href="#bai-${n}" class="sidebar-link flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition" id="side-bai-${n}">
                <span class="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center shrink-0">B${n}</span>
                <span class="truncate">${lessons[n - 1].title.split('.')[1].trim()}</span>
              </a>
            `).join('')}
          </div>

          <!-- Special Quick Links -->
          <div class="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs font-bold">
            <a href="#summary-table" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <i class="fa-solid fa-table-list text-amber-500"></i> Bảng tổng kết 12 bài
            </a>
            <a href="#formula-section" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <i class="fa-solid fa-calculator text-blue-500"></i> Công thức & định lí tra nhanh
            </a>
            <a href="#notes-section" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <i class="fa-solid fa-circle-info text-indigo-500"></i> Phân biệt dễ nhầm & mẹo
            </a>
            <a href="#arena-section" class="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-amber-500 text-white font-extrabold hover:bg-amber-600 transition shadow-xs">
              <i class="fa-solid fa-trophy"></i> Đấu trường 20 câu (45p)
            </a>
          </div>
        </div>
      </aside>

      <!-- Main Course Lessons Column -->
      <section class="flex-1 min-w-0 space-y-6">
        
        <!-- Render 12 Lessons -->
        ${renderLessons()}

        <!-- Section: Bảng tổng kết 12 bài học -->
        <section id="summary-table" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                <i class="fa-solid fa-table-list text-amber-500"></i>
                <span>BẢNG TỔNG KẾT TOÀN DIỆN 12 BÀI HỌC</span>
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Đối chiếu kiến thức trọng tâm, công thức cốt lõi và ứng dụng thực tiễn của từng bài</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">12 Bài Học</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full min-w-[980px] text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white">
                  <th class="p-3.5 font-bold w-12 text-center shrink-0">STT</th>
                  <th class="p-3.5 font-bold w-44 min-w-[170px]">Tên bài học</th>
                  <th class="p-3.5 font-bold w-28 min-w-[100px]">Chuyên đề</th>
                  <th class="p-3.5 font-bold min-w-[280px]">Khái niệm & Quy luật cốt lõi</th>
                  <th class="p-3.5 font-bold w-56 min-w-[200px]">Công thức / Định lí</th>
                  <th class="p-3.5 font-bold min-w-[220px]">Kĩ năng & Ứng dụng</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${reviewArena.summaryTable.map(row => `
                  <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                    <td class="p-3 font-black text-center text-blue-600 dark:text-blue-400 align-top">${row.bai}</td>
                    <td class="p-3 font-bold text-slate-900 dark:text-white align-top"><a href="#bai-${row.bai}" class="hover:text-blue-600 dark:hover:text-blue-400 transition">${row.name}</a></td>
                    <td class="p-3 text-slate-500 dark:text-slate-400 text-xs align-top whitespace-nowrap">${row.cd}</td>
                    <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed align-top">${formatText(row.concept)}</td>
                    <td class="p-3 font-mono text-xs text-blue-700 dark:text-blue-300 font-semibold align-top">${row.formula}</td>
                    <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed font-medium align-top">${formatText(row.app)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- Section: Bảng công thức & định lí tra nhanh -->
        <section id="formula-section" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                <i class="fa-solid fa-calculator text-blue-600 dark:text-blue-400"></i>
                <span>BẢNG CÔNG THỨC & ĐỊNH LÍ CỐT LÕI TRA NHANH</span>
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Hệ thống công thức tọa độ phép biến hình, định lí đồ thị và thông số bản vẽ kĩ thuật chuẩn KNTT</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">Chuẩn KNTT</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full min-w-[860px] text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white">
                  <th class="p-3.5 font-bold w-52 min-w-[180px]">Tên công thức / Định lí</th>
                  <th class="p-3.5 font-bold text-blue-700 dark:text-blue-300 min-w-[220px]">Biểu thức / Quy tắc</th>
                  <th class="p-3.5 font-bold w-32 min-w-[110px]">Đơn vị / Điều kiện</th>
                  <th class="p-3.5 font-bold min-w-[250px]">Ghi chú & Ý nghĩa đại lượng</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${reviewArena.formulaTable.map(item => `
                  <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                    <td class="p-3 font-bold text-slate-900 dark:text-white align-top">${formatText(item.name)}</td>
                    <td class="p-3 font-mono font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm align-top">${item.formula}</td>
                    <td class="p-3 text-slate-500 dark:text-slate-400 text-xs align-top">${item.unit}</td>
                    <td class="p-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed align-top">${formatText(item.note)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- Section: Phân biệt dễ nhầm & Mẹo -->
        <section id="notes-section" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                <i class="fa-solid fa-triangle-exclamation text-amber-500"></i>
                <span>PHÂN BIỆT DỄ NHẦM & GỢI Ý VẬN DỤNG</span>
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Các lỗi học sinh thường mắc phải và phương pháp tư duy chính xác</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">Cẩm nang thi</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${reviewArena.mistakesAndTips.map(n => `
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-circle-exclamation text-amber-500"></i>
                  <span>${formatText(n.title)}</span>
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${formatText(n.desc)}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Section: Đấu trường Trạng Nguyên Toán 11 -->
        <section id="arena-section" class="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl border border-blue-500/30 shadow-xl p-6 sm:p-8 space-y-6 scroll-mt-24">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/15 pb-5">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-2">
                <i class="fa-solid fa-trophy text-amber-400"></i> KÌ THI ĐÁNH GIÁ NĂNG LỰC CHUYÊN ĐỀ
              </div>
              <h2 class="text-2xl sm:text-3xl font-black text-white">ĐẤU TRƯỜNG TRẠNG NGUYÊN TOÁN 11</h2>
              <p class="text-xs sm:text-sm text-blue-200/90 mt-1">20 câu hỏi trắc nghiệm toàn diện 3 chuyên đề • Thời gian: 45 phút • Chấm điểm tự động</p>
            </div>
            <!-- Timer & Controls -->
            <div class="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-white/20 backdrop-blur-md">
              <i class="fa-solid fa-stopwatch text-amber-400 text-xl"></i>
              <div>
                <div class="text-[10px] text-blue-200 font-bold uppercase">Thời gian còn lại</div>
                <div id="arena-timer" class="font-mono text-lg font-black text-white">45:00</div>
              </div>
            </div>
          </div>

          <!-- Arena Questions Container -->
          <div id="arena-questions" class="space-y-5">
            ${reviewArena.arenaQuestions.map((q, idx) => `
              <div class="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3" id="arena-box-${idx}">
                <div class="font-bold text-sm sm:text-base text-white flex items-start gap-2.5">
                  <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                  <span class="leading-snug">${formatText(q.q)}</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  ${q.options.map((opt, oIdx) => `
                    <button type="button" onclick="selectArenaOption(${idx}, ${oIdx})" class="arena-opt-${idx} w-full text-left p-3 rounded-xl border border-white/15 hover:border-blue-400 hover:bg-white/10 text-xs sm:text-sm text-slate-200 transition flex items-center gap-2.5">
                      <span class="w-5 h-5 rounded-md bg-white/10 text-white font-bold text-[11px] flex items-center justify-center shrink-0">${['A', 'B', 'C', 'D'][oIdx]}</span>
                      <span class="flex-1">${formatText(opt)}</span>
                    </button>
                  `).join('')}
                </div>
                <div id="arena-exp-${idx}" class="hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2"></div>
              </div>
            `).join('')}
          </div>

          <!-- Arena Submit & Results Box -->
          <div class="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div id="arena-status" class="text-xs text-blue-200 font-medium">Chưa nộp bài (Đã chọn: <span id="arena-answered-count">0</span>/20 câu)</div>
            <button type="button" id="btn-submit-arena" onclick="submitArenaExam()" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-sm shadow-lg shadow-amber-500/20 transition flex items-center gap-2">
              <i class="fa-solid fa-paper-plane"></i>
              <span>Nộp bài & Chấm điểm</span>
            </button>
          </div>

          <!-- Score Card Modal / Banner -->
          <div id="arena-score-banner" class="hidden p-6 rounded-2xl bg-white/10 border border-white/20 text-center space-y-3"></div>
        </section>

      </section>

    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-4 sm:px-6 lg:px-8 mt-12 transition-colors">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
      <div>
        <p class="font-bold text-slate-700 dark:text-slate-300">Học liệu Chuyên đề Toán 11 — Bộ sách Kết nối tri thức với cuộc sống</p>
        <p class="mt-1">Biên soạn đầy đủ 3 chuyên đề • 12 bài học • 12 Sơ đồ SVG vector • 36 Bài tập củng cố • Đấu trường 20 câu</p>
      </div>
      <div class="flex items-center gap-4">
        <a href="../index.html" class="hover:text-blue-600 dark:hover:text-blue-400 font-bold transition">← Trang chủ</a>
        <a href="#bai-1" class="hover:text-blue-600 dark:hover:text-blue-400 font-bold transition">Lên đầu trang ↑</a>
      </div>
    </div>
  </footer>

  <!-- Search Modal (Ctrl+K) -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden flex items-start justify-center pt-20 px-4">
    <div class="bg-white dark:bg-slate-850 w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400 text-lg"></i>
        <input type="text" id="search-input" oninput="handleSearch()" placeholder="Tìm kiếm khái niệm, bài học, định lí (VD: phép quay, vị tự, fractal, Euler, Dijkstra, hình chiếu...)" class="w-full bg-transparent border-0 outline-none text-slate-900 dark:text-white text-sm font-medium placeholder-slate-400">
        <button type="button" onclick="closeSearchModal()" class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 flex items-center justify-center text-xs">Esc</button>
      </div>
      <div id="search-results" class="max-h-80 overflow-y-auto p-3 space-y-2 text-xs sm:text-sm">
        <div class="p-3 text-slate-400 text-center">Gõ từ khóa để bắt đầu tìm kiếm trong 12 bài học...</div>
      </div>
    </div>
  </div>

  <!-- Client-side Interactive JavaScript -->
  <script>
    // KaTeX Auto-Render Trigger
    function renderMathOnPage() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\\\[', right: '\\\\]', display: true },
            { left: '\\\\(', right: '\\\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
    window.addEventListener('DOMContentLoaded', renderMathOnPage);
    window.addEventListener('load', renderMathOnPage);

    // Theme toggle
    function initTheme() {
      if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-sun';
      } else {
        document.documentElement.classList.remove('dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-moon';
      }
    }
    function toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-moon';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-sun';
      }
    }
    initTheme();

    // Inline Quiz checking
    const completedQuizzes = new Set();
    function checkInlineQuiz(lessonNum, qIdx, selectedOpt, correctOpt) {
      const btns = document.querySelectorAll('.quiz-btn-' + lessonNum + '-' + qIdx);
      btns.forEach((b, idx) => {
        b.disabled = true;
        b.classList.remove('hover:border-blue-400', 'hover:bg-blue-50/40');
        if (idx === correctOpt) {
          b.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-300', 'font-bold');
        } else if (idx === selectedOpt && selectedOpt !== correctOpt) {
          b.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-800', 'dark:text-rose-300');
        } else {
          b.classList.add('opacity-50');
        }
      });

      const expBox = document.getElementById('quiz-exp-' + lessonNum + '-' + qIdx);
      if (expBox) {
        expBox.classList.remove('hidden');
        if (selectedOpt === correctOpt) {
          expBox.className = 'p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expBox.innerHTML = '<strong>Chính xác!</strong> ' + (qExplains[lessonNum + '-' + qIdx] || '');
        } else {
          expBox.className = 'p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expBox.innerHTML = '<strong>Chưa chính xác!</strong> Đáp án đúng là <strong>' + ['A', 'B', 'C', 'D'][correctOpt] + '</strong>. ' + (qExplains[lessonNum + '-' + qIdx] || '');
        }
        renderMathOnPage();
      }

      completedQuizzes.add(lessonNum + '-' + qIdx);
      updateProgress();
    }

    const qExplains = ${JSON.stringify(
      lessons.reduce((acc, l) => {
        l.quizzes.forEach((q, i) => {
          acc[l.num + '-' + i] = q.explain;
        });
        return acc;
      }, {})
    )};

    function updateProgress() {
      // 36 total quizzes (3 per lesson across 12 lessons)
      const count = completedQuizzes.size;
      const lessonProgress = Math.min(12, Math.floor(count / 3));
      const percent = Math.min(100, Math.round((count / 36) * 100));
      const bar = document.getElementById('top-progress-bar');
      if (bar) bar.style.width = percent + '%';
      const text = document.getElementById('top-progress-text');
      if (text) text.innerText = lessonProgress + '/12 bài';
    }

    // Search Modal
    const searchData = ${JSON.stringify(
      lessons.map(l => ({
        num: l.num,
        title: l.title,
        desc: l.desc,
        text: l.sections.map(s => s.heading + ' ' + (s.summary || '') + ' ' + (s.details ? s.details.join(' ') : '')).join(' ')
      }))
    )};

    function openSearchModal() {
      const modal = document.getElementById('search-modal');
      if (modal) {
        modal.classList.remove('hidden');
        document.getElementById('search-input').focus();
      }
    }
    function closeSearchModal() {
      const modal = document.getElementById('search-modal');
      if (modal) modal.classList.add('hidden');
    }
    window.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') closeSearchModal();
    });

    function handleSearch() {
      const q = document.getElementById('search-input').value.trim().toLowerCase();
      const resBox = document.getElementById('search-results');
      if (!q) {
        resBox.innerHTML = '<div class="p-3 text-slate-400 text-center">Gõ từ khóa để bắt đầu tìm kiếm trong 12 bài học...</div>';
        return;
      }
      const matches = searchData.filter(item => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.text.toLowerCase().includes(q));
      if (matches.length === 0) {
        resBox.innerHTML = '<div class="p-3 text-slate-400 text-center">Không tìm thấy kết quả nào phù hợp với "' + q + '".</div>';
        return;
      }
      resBox.innerHTML = matches.map(m => \`
        <a href="#bai-\${m.num}" onclick="closeSearchModal()" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <div class="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm">\${m.title}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">\${m.desc}</div>
        </a>
      \`).join('');
    }

    // Arena Exam Engine
    const arenaAnswers = ${JSON.stringify(reviewArena.arenaQuestions.map(q => q.answer))};
    const arenaExplains = ${JSON.stringify(reviewArena.arenaQuestions.map(q => q.explanation))};
    const userArenaChoice = {};
    let arenaSubmitted = false;

    function selectArenaOption(qIdx, oIdx) {
      if (arenaSubmitted) return;
      userArenaChoice[qIdx] = oIdx;
      const btns = document.querySelectorAll('.arena-opt-' + qIdx);
      btns.forEach((b, idx) => {
        if (idx === oIdx) {
          b.classList.add('bg-blue-600', 'text-white', 'border-blue-400', 'font-bold');
          b.classList.remove('text-slate-200');
        } else {
          b.classList.remove('bg-blue-600', 'text-white', 'border-blue-400', 'font-bold');
          b.classList.add('text-slate-200');
        }
      });
      document.getElementById('arena-answered-count').innerText = Object.keys(userArenaChoice).length;
    }

    function submitArenaExam() {
      if (arenaSubmitted) return;
      if (Object.keys(userArenaChoice).length < 20) {
        if (!confirm('Bạn mới làm ' + Object.keys(userArenaChoice).length + '/20 câu. Bạn có chắc chắn muốn nộp bài ngay?')) {
          return;
        }
      }
      arenaSubmitted = true;
      clearInterval(arenaTimerInterval);

      let score = 0;
      for (let i = 0; i < 20; i++) {
        const correct = arenaAnswers[i];
        const user = userArenaChoice[i];
        const btns = document.querySelectorAll('.arena-opt-' + i);
        btns.forEach((b, idx) => {
          b.disabled = true;
          if (idx === correct) {
            b.classList.add('bg-emerald-600', 'text-white', 'border-emerald-400', 'font-bold');
          } else if (idx === user && user !== correct) {
            b.classList.add('bg-rose-600', 'text-white', 'border-rose-400');
          } else {
            b.classList.add('opacity-40');
          }
        });

        const expBox = document.getElementById('arena-exp-' + i);
        if (expBox) {
          expBox.classList.remove('hidden');
          if (user === correct) {
            score++;
            expBox.className = 'p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2 bg-emerald-950/60 border-emerald-500 text-emerald-200';
            expBox.innerHTML = '<strong>Chính xác!</strong> ' + arenaExplains[i];
          } else {
            expBox.className = 'p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2 bg-rose-950/60 border-rose-500 text-rose-200';
            expBox.innerHTML = '<strong>Chưa chính xác!</strong> Đáp án đúng là <strong>' + ['A', 'B', 'C', 'D'][correct] + '</strong>. ' + arenaExplains[i];
          }
        }
      }

      renderMathOnPage();

      // Display Score
      const final10 = (score / 20 * 10).toFixed(1);
      const scoreBanner = document.getElementById('arena-score-banner');
      scoreBanner.classList.remove('hidden');
      scoreBanner.innerHTML = \`
        <div class="text-3xl font-black text-amber-400"><i class="fa-solid fa-trophy mr-2"></i>KẾT QUẢ THI ĐẤU</div>
        <div class="text-xl font-bold text-white">Bạn đạt: <span class="text-emerald-400 text-3xl font-black">\${score}/20</span> câu đúng (\${final10}/10 điểm)</div>
        <p class="text-xs sm:text-sm text-blue-200 max-w-xl mx-auto leading-relaxed">
          \${score >= 18 ? 'Xuất sắc! Bạn xứng đáng nhận danh hiệu Trạng Nguyên Toán học 11!' : score >= 14 ? 'Rất tốt! Bạn nắm vững kiến thức trọng tâm cả 3 chuyên đề.' : 'Cố gắng lên! Hãy xem lại phần giải thích chi tiết và các sơ đồ mô hình ở trên.'}
        </p>
      \`;

      document.getElementById('btn-submit-arena').disabled = true;
      document.getElementById('btn-submit-arena').classList.add('opacity-50', 'cursor-not-allowed');
      document.getElementById('arena-status').innerText = 'Đã hoàn thành kì thi • Kết quả: ' + score + '/20 câu đúng.';
    }

    // Arena 45-minute countdown timer
    let timeLeft = 45 * 60;
    const timerElem = document.getElementById('arena-timer');
    const arenaTimerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(arenaTimerInterval);
        submitArenaExam();
        return;
      }
      timeLeft--;
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      if (timerElem) timerElem.innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    }, 1000);
  </script>
</body>
</html>`;

const targetFiles = [
  path.join(__dirname, '..', 'courses', 'chuyende_toan_11.html'),
  path.join(__dirname, '..', 'courses', 'chuyende_toan11.html')
];

targetFiles.forEach(file => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, fullHtml, 'utf8');
  console.log(`Wrote ${fullHtml.length} bytes to ${file}`);
});

console.log("Build Chuyên đề Toán 11 completed successfully!");
