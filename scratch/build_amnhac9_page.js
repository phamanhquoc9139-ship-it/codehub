const fs = require('fs');
const path = require('path');

const topics = require('./amnhac9_data.js');
const terms = require('./amnhac9_terms.js');
const diagrams = require('./amnhac9_diagrams.js');
const examQuestions = require('./amnhac9_exam.js');
const staves = require('./amnhac9_staves.js');

console.log(`Loaded ${topics.length} topics, ${terms.length} terms, ${Object.keys(staves).length} music staves, and ${examQuestions.length} exam questions.`);

// Map diagrams to lessons
const lessonDiagramMap = {
  'bai-2': diagrams.quang,
  'bai-4': diagrams.oboeCor,
  'bai-6': diagrams.dichGiong,
  'bai-8': diagrams.nhaNhac + diagrams.theBamBbFsharp,
  'bai-10': diagrams.hopAmBa,
  'bai-12': diagrams.danDaDanDay,
  'bai-14': diagrams.hopAmBa
};

// Flatten all lessons
const allLessons = [];
topics.forEach(t => {
  t.lessons.forEach(l => {
    allLessons.push({
      ...l,
      topicId: t.topicId,
      topicTitle: t.topicTitle,
      topicDesc: t.topicDesc,
      topicColor: t.color,
      topicIcon: t.icon
    });
  });
});

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  if (typeof str !== 'string') return String(str);
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 1. Sidebar HTML
let sidebarTopicsHtml = '';
topics.forEach((t, tIdx) => {
  const isHk1 = tIdx < 4;
  const termBadge = isHk1 ? 'Học kì 1' : 'Học kì 2';
  const termBadgeClass = isHk1 ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300' : 'bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300';
  
  const lessonLinks = t.lessons.map(l => `
    <a href="#${l.id}" class="lesson-nav-link flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition group" data-lesson="${l.id}">
      <span class="w-5 h-5 rounded-md bg-gray-100 dark:bg-gray-800 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/60 text-gray-700 dark:text-gray-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-200 flex items-center justify-center text-[10px] font-bold shrink-0">${l.num}</span>
      <span class="truncate">${escapeHtml(l.title.replace(/^Bài \d+ — /, ''))}</span>
    </a>
  `).join('');

  sidebarTopicsHtml += `
    <div class="topic-group mb-3 pb-2 border-b border-gray-100 dark:border-gray-800" data-term="${isHk1 ? '1' : '2'}">
      <div class="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-1 px-2">
        <span class="flex items-center gap-1.5 truncate">
          <i class="fa-solid ${t.icon} text-emerald-600"></i> ${escapeHtml(t.topicTitle)}
        </span>
        <span class="text-[9px] px-1.5 py-0.5 rounded-full ${termBadgeClass}">${termBadge}</span>
      </div>
      <div class="space-y-0.5 pl-1">
        ${lessonLinks}
      </div>
    </div>
  `;
});

// 2. Terms HTML
let termsHtml = terms.map(tm => `
  <div class="term-card p-3.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md transition">
    <div class="flex items-center justify-between gap-2 mb-1.5">
      <h4 class="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
        <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs">
          <i class="fa-solid ${tm.icon}"></i>
        </span>
        ${escapeHtml(tm.term)}
      </h4>
      <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
        ${escapeHtml(tm.badge)}
      </span>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(tm.desc)}</p>
  </div>
`).join('');

// 3. Lessons HTML
const letters = ['A', 'B', 'C', 'D'];
let lessonsHtml = '';

allLessons.forEach((l, lIdx) => {
  const isHk1 = l.num <= 8;
  const termBadge = isHk1 ? 'Học kì 1 • Chủ đề ' + Math.ceil(l.num / 2) : 'Học kì 2 • Chủ đề ' + Math.ceil(l.num / 2);
  const termBadgeColor = isHk1 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800';

  // Sections
  const sectionsHtml = l.sections.map((sec, sIdx) => `
    <div class="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-700/80">
      <h3 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2.5 flex items-center gap-2">
        <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0">
          <i class="fa-solid ${sec.icon}"></i>
        </span>
        ${escapeHtml(sec.title)}
      </h3>
      <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        ${sec.content}
      </div>
    </div>
  `).join('');

  // Diagram if any
  const diagramHtml = lessonDiagramMap[l.id] || '';

  // Sheet music staff if any (Bài 1 to Bài 16)
  const staffKey = 'bai' + l.num;
  const staffHtml = staves[staffKey] || '';

  // Practice HTML
  const practiceHtml = Array.isArray(l.practice)
    ? `<ul class="space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        ${l.practice.map(p => `<li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-amber-500 mt-1 shrink-0 text-xs"></i><span>${escapeHtml(p)}</span></li>`).join('')}
       </ul>`
    : `<p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.practice)}</p>`;

  // Quizzes
  const quizzesHtml = l.quiz.map((q, qIdx) => {
    const optsHtml = q.opts.map((opt, oIdx) => `
      <button type="button" onclick="checkLessonQuiz(this, '${l.id}', ${qIdx}, ${oIdx}, ${q.ans})" class="lesson-quiz-opt w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 bg-white dark:bg-gray-800 text-xs sm:text-sm text-gray-800 dark:text-gray-200 transition flex items-center justify-between group">
        <span class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-md bg-gray-100 dark:bg-gray-700 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 text-gray-700 dark:text-gray-300 text-xs font-bold flex items-center justify-center shrink-0">${letters[oIdx]}</span>
          <span>${escapeHtml(opt)}</span>
        </span>
        <i class="fa-regular fa-circle text-gray-400 group-hover:text-emerald-500 text-xs shrink-0"></i>
      </button>
    `).join('');

    return `
      <div class="quiz-item p-3.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" data-lesson="${l.id}" data-q="${qIdx}">
        <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-2.5 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold shrink-0">Câu ${qIdx + 1}</span>
          <span>${escapeHtml(q.q)}</span>
        </p>
        <div class="space-y-1.5">
          ${optsHtml}
        </div>
        <div class="quiz-feedback hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed"></div>
        <div class="quiz-explain hidden mt-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 text-[11px] border border-gray-100 dark:border-gray-800">
          <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> <strong>Giải thích:</strong> ${escapeHtml(q.explain)}
        </div>
      </div>
    `;
  }).join('');

  lessonsHtml += `
    <article id="${l.id}" class="lesson-card bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-sm transition hover:shadow-md mb-8" data-term="${isHk1 ? '1' : '2'}" data-lesson-id="${l.id}">
      <!-- Header bài học -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${termBadgeColor}">
              ${termBadge}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
              <i class="fa-solid ${l.topicIcon} text-emerald-600"></i> ${escapeHtml(l.topicTitle)}
            </span>
          </div>
          <h2 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <span class="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">${l.num}</span>
            ${escapeHtml(l.title)}
          </h2>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> ${l.time}
          </span>
          <button type="button" onclick="playLessonMelody('${l.id}')" class="px-2.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium flex items-center gap-1 transition shadow-sm" title="Nghe hợp âm mô phỏng">
            <i class="fa-solid fa-play"></i> Giai điệu mẫu
          </button>
        </div>
      </div>

      <!-- Mục tiêu cần đạt -->
      <div class="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-100 dark:border-emerald-900/40">
        <h4 class="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-bullseye text-emerald-600"></i> Mục tiêu trọng tâm bài học
        </h4>
        <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.target)}</p>
      </div>

      <!-- Dẫn nhập cảm xúc -->
      <div class="mb-4 text-xs sm:text-sm italic text-gray-600 dark:text-gray-400 pl-3 border-l-2 border-emerald-500">
        "${escapeHtml(l.intro)}"
      </div>

      <!-- Bản nhạc khuông nhạc chuẩn (Sheet Music Staves & Notes) -->
      ${staffHtml}

      <!-- Sơ đồ trực quan nhạc cụ / lí thuyết -->
      ${diagramHtml}

      <!-- Các mạch nội dung bài học -->
      <div class="space-y-4 mb-6">
        ${sectionsHtml}
      </div>

      <!-- Luyện tập & Vận dụng sáng tạo -->
      <div class="mb-6 p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60">
        <h4 class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-wand-magic-sparkles text-amber-600"></i> Yêu cầu Luyện tập &amp; Trình diễn sáng tạo
        </h4>
        ${practiceHtml}
      </div>

      <!-- Tóm tắt ghi nhớ cốt lõi -->
      <div class="mb-6 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <i class="fa-solid fa-bookmark text-emerald-600"></i> Ghi nhớ cốt lõi
        </h4>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(l.summary)}</p>
      </div>

      <!-- 4 Câu trắc nghiệm củng cố bài học -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-question text-emerald-600"></i>
            Tự kiểm tra kiến thức bài học (4 câu trắc nghiệm)
          </h4>
          <span class="text-xs text-gray-500">Chấm điểm &amp; giải thích tức thì</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${quizzesHtml}
        </div>
      </div>
    </article>
  `;
});

// 4. Modal Trạng Nguyên Âm Nhạc 9 (30 câu)
let examModalHtml = examQuestions.map((q, qIdx) => {
  const optsHtml = q.options.map((opt, oIdx) => `
    <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 cursor-pointer transition text-xs sm:text-sm text-gray-800 dark:text-gray-200">
      <input type="radio" name="exam_q_${qIdx}" value="${oIdx}" class="text-emerald-600 focus:ring-emerald-500 rounded">
      <span class="font-bold text-gray-500">${letters[oIdx]}.</span>
      <span>${escapeHtml(opt)}</span>
    </label>
  `).join('');

  return `
    <div class="exam-item p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4" data-q-idx="${qIdx}">
      <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-2 flex items-start gap-2">
        <span class="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[11px] font-bold shrink-0">Câu ${qIdx + 1}</span>
        <span>${escapeHtml(q.q)}</span>
      </p>
      <div class="space-y-1.5 mb-2">
        ${optsHtml}
      </div>
      <div id="exam_fb_${qIdx}" class="hidden p-2.5 rounded-xl text-xs"></div>
      <div id="exam_exp_${qIdx}" class="hidden mt-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 text-[11px] border border-gray-100 dark:border-gray-800">
        <strong>Giải thích:</strong> ${escapeHtml(q.explain)}
      </div>
    </div>
  `;
}).join('');

// 5. Complete Template
const fullPageTemplate = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Âm Nhạc 9 (KNTT - GDPT 2018: 8 Chủ Đề • 16 Bài Học • Khuông Nhạc Chuẩn &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <meta name="description" content="Khóa học Âm nhạc 9 chuẩn SGK Kết nối tri thức với cuộc sống (GDPT 2018). Trọn bộ 8 chủ đề, 16 bài học có đầy đủ khuông nhạc, nốt nhạc, khóa Sol, hợp âm, thế bấm và bài thi Trạng Nguyên Âm Nhạc 9.">

  <!-- Tailwind CSS CDN with custom Emerald palette -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#059669',
            'primary-dark': '#047857',
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              300: '#6ee7b7',
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
              950: '#022c22'
            }
          }
        }
      }
    };
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Google Fonts: Inter & Fira Code -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    code, pre {
      font-family: 'Fira Code', monospace;
    }
    .sidebar-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .sidebar-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .sidebar-scroll::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    .dark .sidebar-scroll::-webkit-scrollbar-thumb {
      background: #475569;
    }
    .glass-nav {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
  </style>
</head>
<body class="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen">

  <!-- Top Sticky Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 glass-nav border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left: Logo & Title -->
      <div class="flex items-center gap-3">
        <button id="toggleMobileSidebarBtn" class="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Menu">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-black text-lg tracking-tight hover:opacity-90 transition">
          <span class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-base shadow-sm">
            <i class="fa-solid fa-music"></i>
          </span>
          <span class="hidden sm:inline">CodeHub • Âm Nhạc 9</span>
          <span class="sm:hidden">Âm Nhạc 9</span>
        </a>
        <span class="hidden md:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          SGK Kết Nối Tri Thức
        </span>
      </div>

      <!-- Center: Quick search -->
      <div class="hidden sm:flex items-center flex-1 max-w-xs relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3 text-gray-400 text-xs"></i>
        <input type="text" id="lessonSearchInput" placeholder="Tìm bài hát, tác giả, nốt nhạc..." class="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-900 focus:outline-none transition">
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-2">
        <button onclick="openTermModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5 transition">
          <i class="fa-solid fa-book-bookmark"></i>
          <span class="hidden md:inline">Sổ tay</span> Thuật ngữ
        </button>
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden md:inline">Hội thi</span> Trạng Nguyên 9
        </button>
        <button id="themeToggleBtn" class="w-9 h-9 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition" aria-label="Toggle Dark Mode">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:block text-amber-400 text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-8">
    
    <!-- Left Sidebar (Desktop) -->
    <aside class="hidden lg:block w-72 shrink-0 sticky top-22 h-[calc(100vh-6.5rem)] overflow-y-auto sidebar-scroll pr-2">
      <!-- Semester Filter Buttons -->
      <div class="p-1 rounded-2xl bg-gray-200/70 dark:bg-gray-800 flex gap-1 mb-4">
        <button type="button" onclick="filterTerm('all')" class="term-tab-btn flex-1 py-1 text-[11px] font-bold rounded-xl transition bg-white dark:bg-gray-700 text-emerald-700 dark:text-emerald-300 shadow-sm" data-term="all">
          Tất cả (16)
        </button>
        <button type="button" onclick="filterTerm('1')" class="term-tab-btn flex-1 py-1 text-[11px] font-bold rounded-xl transition text-gray-600 dark:text-gray-400 hover:text-emerald-600" data-term="1">
          Học kì 1 (1–8)
        </button>
        <button type="button" onclick="filterTerm('2')" class="term-tab-btn flex-1 py-1 text-[11px] font-bold rounded-xl transition text-gray-600 dark:text-gray-400 hover:text-emerald-600" data-term="2">
          Học kì 2 (9–16)
        </button>
      </div>

      <!-- Topics & Lessons list -->
      <div id="sidebarTopicsContainer">
        ${sidebarTopicsHtml}
      </div>
    </aside>

    <!-- Mobile Drawer Sidebar Backdrop -->
    <div id="mobileSidebarBackdrop" class="fixed inset-0 bg-black/50 z-50 hidden lg:hidden"></div>
    <!-- Mobile Drawer Sidebar -->
    <aside id="mobileSidebar" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 p-4 overflow-y-auto sidebar-scroll transform -translate-x-full transition-transform lg:hidden shadow-2xl">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
          <i class="fa-solid fa-music"></i> 8 Chủ Đề • 16 Bài Học
        </div>
        <button id="closeMobileSidebarBtn" class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div>
        ${sidebarTopicsHtml}
      </div>
    </aside>

    <!-- Center Main Content -->
    <main class="flex-1 min-w-0">
      
      <!-- Hero Banner -->
      <section class="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl">
          <i class="fa-solid fa-guitar"></i>
        </div>
        <div class="relative z-10 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-xs font-semibold mb-3 backdrop-blur-sm">
            <i class="fa-solid fa-sparkles"></i> Chương trình GDPT 2018 — Kết nối tri thức với cuộc sống
          </div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
            KIẾN THỨC CỐT LÕI ÂM NHẠC 9
          </h1>
          <p class="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-5">
            Hệ thống hóa toàn diện theo <strong>8 Chủ đề, 16 Bài học</strong> có đầy đủ <strong>Khuông nhạc chuẩn, Nốt nhạc, Khóa Sol, Hợp âm ba, Dịch giọng và Thế bấm nhạc cụ</strong>. Tích hợp âm thanh Web Audio API và hội thi Trạng Nguyên 60:00.
          </p>
          <div class="flex flex-wrap gap-2 text-xs font-semibold">
            <span class="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <i class="fa-solid fa-file-audio mr-1"></i> 16 Bản nhạc khuông SVG
            </span>
            <span class="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <i class="fa-solid fa-music mr-1"></i> 16 Bài học chuẩn
            </span>
            <span class="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <i class="fa-solid fa-circle-question mr-1"></i> 64 Câu hỏi bài học
            </span>
            <span class="px-3 py-1 rounded-xl bg-amber-400 text-amber-950 font-bold shadow-sm">
              <i class="fa-solid fa-trophy mr-1"></i> 30 Câu Trạng Nguyên
            </span>
          </div>
        </div>
      </section>

      <!-- Grid 8 Chủ đề Tổng quan -->
      <section class="mb-8 p-5 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-map-location-dot text-emerald-600"></i> Bản đồ 8 Chủ đề SGK Âm nhạc 9
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          ${topics.map((t, idx) => `
            <a href="#${t.lessons[0].id}" class="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-gray-200/70 dark:border-gray-700/70 hover:border-emerald-400 transition group">
              <div class="flex items-center justify-between text-[10px] text-gray-500 mb-1">
                <span class="font-bold text-emerald-600">CĐ ${idx + 1}</span>
                <span>Bài ${idx * 2 + 1}–${idx * 2 + 2}</span>
              </div>
              <h4 class="font-bold text-xs text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate">
                ${escapeHtml(t.topicTitle.replace(/^Chủ đề \d+: /, ''))}
              </h4>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Lessons Cards -->
      <section id="lessonsContainer">
        ${lessonsHtml}
      </section>

    </main>
  </div>

  <!-- Modal Sổ tay Thuật ngữ & Quy ước cần nhớ -->
  <div id="termModal" class="fixed inset-0 z-50 bg-black/60 hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm">
            <i class="fa-solid fa-book-bookmark"></i>
          </span>
          <div>
            <h3 class="font-bold text-base text-gray-900 dark:text-white">Từ ngữ, Kí hiệu &amp; Quy ước Cần Nhớ</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Tóm tắt các khái niệm nền tảng xuyên suốt chương trình Âm nhạc 9</p>
          </div>
        </div>
        <button onclick="closeTermModal()" class="w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3 sidebar-scroll">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${termsHtml}
        </div>
      </div>
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 flex justify-end">
        <button onclick="closeTermModal()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">
          Đóng Sổ Tay
        </button>
      </div>
    </div>
  </div>

  <!-- Modal Trạng Nguyên Âm Nhạc 9 (30 Câu - 60 Phút) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Header with Timer -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-500 text-white flex items-center justify-center text-base shadow-sm">
            <i class="fa-solid fa-trophy"></i>
          </span>
          <div>
            <h3 class="font-bold text-base text-gray-900 dark:text-white">Hội Thi Trạng Nguyên Âm Nhạc 9</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">30 câu trắc nghiệm tổng hợp toàn bộ 8 Chủ đề SGK</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold flex items-center gap-1.5">
            <i class="fa-regular fa-clock text-amber-600"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Questions List -->
      <div id="examQuestionsScroll" class="p-5 overflow-y-auto sidebar-scroll flex-1">
        <div class="mb-4 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
          <i class="fa-solid fa-circle-info mr-1"></i> Em hãy chọn một phương án đúng nhất cho mỗi câu hỏi. Nhấn "Nộp bài thi" để xem điểm số, xếp loại Trạng Nguyên và lời giải chi tiết.
        </div>
        ${examModalHtml}
      </div>

      <!-- Footer Actions -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 flex items-center justify-between">
        <div id="examScoreDisplay" class="text-xs font-bold text-gray-600 dark:text-gray-300">
          Chưa nộp bài
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="resetExam()" class="px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold transition">
            Làm lại
          </button>
          <button type="button" id="submitExamBtn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition">
            Nộp bài thi
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript logic -->
  <script>
    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function applyTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    applyTheme();

    themeToggleBtn?.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });

    // Mobile Sidebar Drawer
    const toggleMobileSidebarBtn = document.getElementById('toggleMobileSidebarBtn');
    const closeMobileSidebarBtn = document.getElementById('closeMobileSidebarBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const mobileSidebarBackdrop = document.getElementById('mobileSidebarBackdrop');

    function openMobileSidebar() {
      mobileSidebar.classList.remove('-translate-x-full');
      mobileSidebarBackdrop.classList.remove('hidden');
    }
    function closeMobileSidebar() {
      mobileSidebar.classList.add('-translate-x-full');
      mobileSidebarBackdrop.classList.add('hidden');
    }

    toggleMobileSidebarBtn?.addEventListener('click', openMobileSidebar);
    closeMobileSidebarBtn?.addEventListener('click', closeMobileSidebar);
    mobileSidebarBackdrop?.addEventListener('click', closeMobileSidebar);

    document.querySelectorAll('#mobileSidebar .lesson-nav-link').forEach(link => {
      link.addEventListener('click', closeMobileSidebar);
    });

    // Term Filter (Học kì 1 vs Học kì 2)
    function filterTerm(term) {
      document.querySelectorAll('.term-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-term') === term) {
          btn.classList.add('bg-white', 'dark:bg-gray-700', 'text-emerald-700', 'dark:text-emerald-300', 'shadow-sm');
          btn.classList.remove('text-gray-600', 'dark:text-gray-400');
        } else {
          btn.classList.remove('bg-white', 'dark:bg-gray-700', 'text-emerald-700', 'dark:text-emerald-300', 'shadow-sm');
          btn.classList.add('text-gray-600', 'dark:text-gray-400');
        }
      });

      document.querySelectorAll('.lesson-card').forEach(card => {
        if (term === 'all' || card.getAttribute('data-term') === term) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      document.querySelectorAll('.topic-group').forEach(grp => {
        if (term === 'all' || grp.getAttribute('data-term') === term) {
          grp.classList.remove('hidden');
        } else {
          grp.classList.add('hidden');
        }
      });
    }

    // Search lessons
    const lessonSearchInput = document.getElementById('lessonSearchInput');
    lessonSearchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.lesson-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });

    // Check Lesson Quiz
    function checkLessonQuiz(btn, lessonId, qIdx, chosenIdx, correctIdx) {
      const container = btn.closest('.quiz-item');
      if (container.getAttribute('data-answered') === 'true') return;
      container.setAttribute('data-answered', 'true');

      const allBtns = container.querySelectorAll('.lesson-quiz-opt');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.add('opacity-60', 'cursor-not-allowed');
      });

      const feedback = container.querySelector('.quiz-feedback');
      const explain = container.querySelector('.quiz-explain');

      if (chosenIdx === correctIdx) {
        btn.classList.remove('opacity-60', 'bg-white', 'dark:bg-gray-800');
        btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200', 'font-bold');
        feedback.innerHTML = '<span class="text-emerald-700 dark:text-emerald-300 font-bold"><i class="fa-solid fa-circle-check"></i> Rất chính xác! Em đã hiểu bài học rất tốt.</span>';
        feedback.className = 'quiz-feedback mt-2.5 p-2.5 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800';
      } else {
        btn.classList.remove('opacity-60', 'bg-white', 'dark:bg-gray-800');
        btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200', 'font-bold');
        const correctBtn = allBtns[correctIdx];
        if (correctBtn) {
          correctBtn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30', 'font-bold');
        }
        feedback.innerHTML = '<span class="text-rose-700 dark:text-rose-300 font-bold"><i class="fa-solid fa-circle-xmark"></i> Chưa đúng! Phương án đúng được viền xanh lá.</span>';
        feedback.className = 'quiz-feedback mt-2.5 p-2.5 rounded-xl text-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800';
      }

      feedback.classList.remove('hidden');
      explain.classList.remove('hidden');
    }

    // Modal Sổ tay
    const termModal = document.getElementById('termModal');
    function openTermModal() {
      termModal.classList.remove('hidden');
    }
    function closeTermModal() {
      termModal.classList.add('hidden');
    }

    // Modal Trạng Nguyên Âm Nhạc 9
    const examModal = document.getElementById('examModal');
    const examAnswers = ${JSON.stringify(examQuestions.map(q => q.correct))};
    let examTimerInterval = null;
    let examTimeLeft = 3600; // 60 mins

    function openExamModal() {
      examModal.classList.remove('hidden');
      if (!examTimerInterval) {
        startExamTimer();
      }
    }
    function closeExamModal() {
      examModal.classList.add('hidden');
    }

    function startExamTimer() {
      const timerDisplay = document.getElementById('examTimer');
      examTimerInterval = setInterval(() => {
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
          return;
        }
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        timerDisplay.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }, 1000);
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      const letters = ['A', 'B', 'C', 'D'];

      for (let i = 0; i < examAnswers.length; i++) {
        const checked = document.querySelector('input[name="exam_q_' + i + '"]:checked');
        const fb = document.getElementById('exam_fb_' + i);
        const exp = document.getElementById('exam_exp_' + i);
        fb.classList.remove('hidden');
        exp.classList.remove('hidden');

        if (!checked) {
          fb.className = 'p-2 rounded-xl text-xs bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800';
          fb.innerHTML = '⚠️ Em chưa chọn đáp án. Đáp án đúng là <strong>' + letters[examAnswers[i]] + '</strong>';
        } else if (parseInt(checked.value) === examAnswers[i]) {
          score++;
          fb.className = 'p-2 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
          fb.innerHTML = '✅ Chính xác!';
        } else {
          fb.className = 'p-2 rounded-xl text-xs bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
          fb.innerHTML = '❌ Chưa đúng. Đáp án đúng là <strong>' + letters[examAnswers[i]] + '</strong>';
        }
      }

      const submitBtn = document.getElementById('submitExamBtn');
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

      const scoreDisplay = document.getElementById('examScoreDisplay');
      let rank = 'Cần ôn luyện thêm';
      if (score >= 27) rank = 'Trạng Nguyên Âm Nhạc 🏆';
      else if (score >= 23) rank = 'Bảng Nhãn Âm Nhạc 🥇';
      else if (score >= 18) rank = 'Thám Hoa Âm Nhạc 🥈';

      scoreDisplay.innerHTML = '<span class="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm sm:text-base">Kết quả: ' + score + '/' + examAnswers.length + ' câu (' + (score * 10 / examAnswers.length).toFixed(1) + 'đ) • ' + rank + '</span>';
      document.getElementById('examQuestionsScroll').scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetExam() {
      clearInterval(examTimerInterval);
      examTimerInterval = null;
      examTimeLeft = 3600;
      document.getElementById('examTimer').textContent = '60:00';
      document.querySelectorAll('#examModal input[type="radio"]').forEach(r => r.checked = false);
      for (let i = 0; i < examAnswers.length; i++) {
        const fb = document.getElementById('exam_fb_' + i);
        const exp = document.getElementById('exam_exp_' + i);
        fb?.classList.add('hidden');
        exp?.classList.add('hidden');
      }
      const submitBtn = document.getElementById('submitExamBtn');
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      document.getElementById('examScoreDisplay').textContent = 'Chưa nộp bài';
      startExamTimer();
    }

    // Web Audio API Melody & Staff Audio Synthesizer
    let audioCtx = null;
    function getAudioCtx() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playLessonMelody(lessonId) {
      const ctx = getAudioCtx();
      const freqs = lessonId.includes('1') || lessonId.includes('3') || lessonId.includes('5')
        ? [261.63, 329.63, 392.00, 523.25] // C - E - G - C
        : [220.00, 261.63, 329.63, 440.00]; // A - C - E - A

      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.25);
        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.25);
        gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + i * 0.25 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.25 + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.25);
        osc.stop(ctx.currentTime + i * 0.25 + 0.8);
      });
    }

    // Sheet Music Staves audio dictionary
    const staffMelodies = {
      'staff-bai1': [
        { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 349.23, d: 0.25 },
        { f: 329.63, d: 0.25 }, { f: 349.23, d: 0.25 }, { f: 392.00, d: 0.5 },
        { f: 293.66, d: 0.25 }, { f: 329.63, d: 0.25 }, { f: 349.23, d: 0.5 },
        { f: 329.63, d: 0.25 }, { f: 349.23, d: 0.25 }, { f: 392.00, d: 0.5 },
        { f: 293.66, d: 0.4 }, { f: 392.00, d: 0.4 }, { f: 261.63, d: 0.8 }
      ],
      'staff-bai2': [
        { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 },
        { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.35 },
        { f: 261.63, d: 0.35 }, { f: 329.63, d: 0.35 },
        { f: 261.63, d: 0.35 }, { f: 349.23, d: 0.35 },
        { f: 261.63, d: 0.35 }, { f: 392.00, d: 0.35 },
        { f: 261.63, d: 0.35 }, { f: 440.00, d: 0.35 },
        { f: 261.63, d: 0.35 }, { f: 523.25, d: 0.7 }
      ],
      'staff-bai3': [
        { f: 392.00, d: 0.35 }, { f: 392.00, d: 0.35 }, { f: 523.25, d: 0.35 }, { f: 523.25, d: 0.35 },
        { f: 440.00, d: 0.25 }, { f: 493.88, d: 0.25 }, { f: 523.25, d: 0.5 }, { f: 392.00, d: 0.8 }
      ],
      'staff-bai4': [
        { f: 392.00, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 329.63, d: 0.25 }, { f: 349.23, d: 0.25 },
        { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 392.00, d: 0.5 },
        { f: 349.23, d: 0.25 }, { f: 349.23, d: 0.25 }, { f: 293.66, d: 0.25 }, { f: 329.63, d: 0.25 },
        { f: 349.23, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 261.63, d: 0.8 }
      ],
      'staff-bai5': [
        { f: 329.63, d: 0.3 }, { f: 392.00, d: 0.3 }, { f: 440.00, d: 0.3 }, { f: 523.25, d: 0.5 },
        { f: 493.88, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 329.63, d: 0.25 },
        { f: 440.00, d: 0.8 }
      ],
      'staff-bai6': [
        { f: 261.63, d: 0.35 }, { f: 329.63, d: 0.35 }, { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 },
        { f: 392.00, d: 0.35 }, { f: 329.63, d: 0.35 }, { f: 261.63, d: 0.7 }
      ],
      'staff-bai7': [
        { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 523.25, d: 0.25 }, { f: 587.33, d: 0.25 },
        { f: 523.25, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 392.00, d: 0.4 }, { f: 261.63, d: 0.7 }
      ],
      'staff-bai8': [
        { f: 261.63, d: 0.25 }, { f: 293.66, d: 0.25 }, { f: 349.23, d: 0.25 }, { f: 392.00, d: 0.25 },
        { f: 466.16, d: 0.25 }, { f: 523.25, d: 0.25 }, { f: 466.16, d: 0.25 }, { f: 392.00, d: 0.25 },
        { f: 261.63, d: 0.7 }
      ],
      'staff-bai9': [
        { f: 392.00, d: 0.2 }, { f: 392.00, d: 0.2 }, { f: 392.00, d: 0.2 }, { f: 392.00, d: 0.2 },
        { f: 329.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 392.00, d: 0.6 }
      ],
      'staff-bai10': [
        { f: 261.63, d: 0.45 }, { f: 329.63, d: 0.45 }, { f: 392.00, d: 0.45 },
        { f: 349.23, d: 0.45 }, { f: 440.00, d: 0.45 }, { f: 523.25, d: 0.45 },
        { f: 392.00, d: 0.45 }, { f: 493.88, d: 0.45 }, { f: 587.33, d: 0.45 }
      ],
      'staff-bai11': [
        { f: 261.63, d: 0.25 }, { f: 329.63, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 },
        { f: 392.00, d: 0.25 }, { f: 329.63, d: 0.25 }, { f: 261.63, d: 0.4 }, { f: 523.25, d: 0.8 }
      ],
      'staff-bai12': [
        { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 493.88, d: 0.25 }, { f: 523.25, d: 0.25 },
        { f: 587.33, d: 0.25 }, { f: 659.25, d: 0.25 }, { f: 739.99, d: 0.35 }, { f: 783.99, d: 0.7 }
      ],
      'staff-bai13': [
        { f: 293.66, d: 0.35 }, { f: 349.23, d: 0.35 }, { f: 440.00, d: 0.35 },
        { f: 587.33, d: 0.4 }, { f: 554.37, d: 0.25 }, { f: 587.33, d: 0.25 },
        { f: 466.16, d: 0.35 }, { f: 440.00, d: 0.35 }, { f: 392.00, d: 0.35 }, { f: 293.66, d: 0.8 }
      ],
      'staff-bai14': [
        { f: 440.00, d: 0.25 }, { f: 523.25, d: 0.25 }, { f: 493.88, d: 0.25 }, { f: 440.00, d: 0.25 },
        { f: 415.30, d: 0.35 }, { f: 440.00, d: 0.25 }, { f: 493.88, d: 0.25 },
        { f: 329.63, d: 0.35 }, { f: 440.00, d: 0.8 }
      ],
      'staff-bai15': [
        { f: 261.63, d: 0.25 }, { f: 329.63, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 },
        { f: 392.00, d: 0.25 }, { f: 329.63, d: 0.25 }, { f: 293.66, d: 0.25 }, { f: 261.63, d: 0.25 },
        { f: 523.25, d: 0.8 }
      ],
      'staff-bai16': [
        { f: 392.00, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 523.25, d: 0.5 },
        { f: 493.88, d: 0.25 }, { f: 440.00, d: 0.25 }, { f: 392.00, d: 0.5 }, { f: 523.25, d: 0.8 }
      ]
    };

    function playStaffAudio(audioId) {
      const notes = staffMelodies[audioId];
      if (!notes || !notes.length) return;
      const ctx = getAudioCtx();

      let currentTime = ctx.currentTime;
      notes.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, currentTime);
        gain.gain.setValueAtTime(0, currentTime);
        gain.gain.linearRampToValueAtTime(0.25, currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, currentTime + n.d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(currentTime);
        osc.stop(currentTime + n.d);
        currentTime += n.d + 0.06;
      });
    }
  </script>
</body>
</html>
`;

// Output files
const courseDir = path.resolve(__dirname, '../courses');
const amnhac9Path = path.join(courseDir, 'amnhac_9.html');
const music9Path = path.join(courseDir, 'music_9.html');

fs.writeFileSync(amnhac9Path, fullPageTemplate, 'utf8');
console.log(`Saved: ${amnhac9Path} (${fullPageTemplate.length} bytes)`);

fs.writeFileSync(music9Path, fullPageTemplate, 'utf8');
console.log(`Saved: ${music9Path} (${fullPageTemplate.length} bytes)`);
