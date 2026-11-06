const fs = require('fs');
const path = require('path');
const data = require('./hdtn_6_data.js');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderMarkdown(md) {
  if (!md) return '';

  const rawLines = md.trim().split('\n');
  const blocks = [];
  let currentTable = null;
  let currentUl = null;
  let currentOl = null;
  let currentPara = [];

  function flushPara() {
    if (currentPara.length > 0) {
      const text = currentPara.join(' ').trim();
      if (text) {
        blocks.push(`<p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2">${text}</p>`);
      }
      currentPara = [];
    }
  }

  function flushList() {
    if (currentUl) {
      blocks.push(`<ul class="list-disc pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentUl.join('')}</ul>`);
      currentUl = null;
    }
    if (currentOl) {
      blocks.push(`<ol class="list-decimal pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentOl.join('')}</ol>`);
      currentOl = null;
    }
  }

  function flushTable() {
    if (currentTable) {
      let tableHtml = '<div class="overflow-x-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><table class="w-full text-left border-collapse text-xs">';
      let isFirstRow = true;
      currentTable.forEach(row => {
        if (row.every(c => /^:?-+:?$/.test(c.trim()))) {
          return;
        }
        tableHtml += '<tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40">';
        row.forEach(cell => {
          if (isFirstRow) {
            tableHtml += `<th class="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">${formatInline(cell)}</th>`;
          } else {
            tableHtml += `<td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">${formatInline(cell)}</td>`;
          }
        });
        tableHtml += '</tr>';
        isFirstRow = false;
      });
      tableHtml += '</table></div>';
      blocks.push(tableHtml);
      currentTable = null;
    }
  }

  function formatInline(str) {
    if (!str) return '';
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  }

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushPara();
      flushList();
      flushTable();
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushPara();
      flushList();
      if (!currentTable) currentTable = [];
      const cells = trimmed.split('|').slice(1, -1);
      currentTable.push(cells);
      continue;
    } else {
      flushTable();
    }

    if (trimmed.startsWith('### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^###\s+/, ''));
      blocks.push(`<h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-5 mb-2.5 flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shrink-0"></span>${title}</h4>`);
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^####\s+/, ''));
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-400 mt-3.5 mb-1.5">${title}</h5>`);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushPara();
      flushList();
      const quote = formatInline(trimmed.replace(/^>\s+/, ''));
      blocks.push(`<blockquote class="p-3 my-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed italic">${quote}</blockquote>`);
      continue;
    }

    const ulMatch = line.match(/^(\s*)([-+*])\s+(.*)$/);
    if (ulMatch) {
      flushPara();
      if (currentOl) flushList();
      if (!currentUl) currentUl = [];
      const indent = ulMatch[1].length;
      const content = formatInline(ulMatch[3]);
      if (indent >= 2) {
        currentUl.push(`<li class="ml-4 list-[circle] leading-relaxed">${content}</li>`);
      } else {
        currentUl.push(`<li class="leading-relaxed">${content}</li>`);
      }
      continue;
    }

    const olMatch = line.match(/^(\s*)(\d+)\.\s+(.*)$/);
    if (olMatch) {
      flushPara();
      if (currentUl) flushList();
      if (!currentOl) currentOl = [];
      const content = formatInline(olMatch[3]);
      currentOl.push(`<li class="leading-relaxed">${content}</li>`);
      continue;
    }

    if (/^[a-d]\)\s+/.test(trimmed)) {
      flushPara();
      flushList();
      const content = formatInline(trimmed);
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-400 mt-3.5 mb-1.5">${content}</h5>`);
      continue;
    }

    currentPara.push(formatInline(trimmed));
  }

  flushPara();
  flushList();
  flushTable();

  return blocks.join('\n');
}

// Flatten all lessons
const allLessons = [];
data.topics.forEach(t => {
  t.lessons.forEach(l => {
    allLessons.push({ ...l, topicName: t.name, topicBadge: t.badge });
  });
});

console.log(`Total lessons in HDTN 6: ${allLessons.length}`);

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Hoạt Động Trải Nghiệm, Hướng Nghiệp Lớp 6 (GDPT 2018: 9 Chủ Đề • 30 Hoạt Động • Cây Giá Trị &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            },
            exp: {
              amber: '#D97706',
              orange: '#EA580C',
              emerald: '#059669',
              blue: '#2563EB',
              purple: '#9333EA'
            }
          }
        }
      }
    };
  </script>

  <!-- Immediate Dark Mode Init in Head -->
  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>

  <!-- FontAwesome 6 & Canvas Confetti -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <meta name="codehub-activity-name" content="Khóa Học Hoạt Động Trải Nghiệm, Hướng Nghiệp Lớp 6">
  <meta name="description" content="Chương trình HĐTN, HN Lớp 6 GDPT 2018 (SGK Kết nối tri thức với cuộc sống): Trọn vẹn 9 Chủ đề, 30 Hoạt động chuẩn mực; Cây giá trị bản thân, Trò chơi quản lý ngân sách 500k và Hội thi Trạng Nguyên 60 phút.">

  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(217,119,6,0.3); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(217,119,6,0.6); }
    .lesson-content { scroll-margin-top: 85px; }
  </style>
</head>
<body class="bg-slate-100 dark:bg-dark-bg text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">

  <!-- TOP NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-2 rounded-xl text-slate-500 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trở về Trang Chủ CodeHub">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 font-black text-lg">
            <i class="fa-solid fa-compass"></i>
          </div>
          <span class="font-black text-lg tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hidden sm:inline">
            CodeHub
          </span>
        </a>
        <span class="text-xs px-2.5 py-1 rounded-full font-bold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
          HĐTN 6
        </span>
      </div>

      <!-- Quick Search Bar -->
      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" onkeyup="filterLessons(this.value)" placeholder="Tìm bài học (vd: Lớp mới, Giá trị bản thân, Góc học tập, Nghề truyền thống...)"
            class="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition">
        </div>
      </div>

      <!-- Actions: Tools & DarkMode -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button onclick="openTreeModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs border border-emerald-200 dark:border-emerald-900/50 transition" title="Cây Giá Trị Bản Thân Tương Tác">
          <i class="fa-solid fa-tree text-emerald-500"></i>
          <span class="hidden sm:inline">Cây Giá Trị</span>
        </button>

        <button onclick="openBudgetModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-200 dark:border-blue-900/50 transition" title="Trò chơi Quản lý Ngân sách 500k">
          <i class="fa-solid fa-wallet text-blue-500"></i>
          <span class="hidden sm:inline">Ngân Sách 500k</span>
        </button>

        <button onclick="openTrangNguyenModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 hover:opacity-95 transition" title="Tham gia Hội thi Trạng Nguyên 60 phút">
          <i class="fa-solid fa-award"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60:00)</span>
        </button>

        <!-- Standard CodeHub Dark Mode Button -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" aria-label="Đổi giao diện Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- MAIN WRAPPER -->
  <div class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">

    <!-- SIDEBAR NAVIGATION -->
    <aside class="w-full lg:w-80 shrink-0 space-y-4">
      
      <!-- Progress Card -->
      <div class="p-4 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Hành Trình Trải Nghiệm</span>
          <span id="progressText" class="text-xs font-black text-amber-600 dark:text-amber-400">0 / 30 Hoạt động</span>
        </div>
        <div class="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div id="progressBar" class="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500 rounded-full" style="width: 0%"></div>
        </div>
        <div class="flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>Bắt đầu</span>
          <span id="percentBadge">0%</span>
          <span>Trưởng thành</span>
        </div>
      </div>

      <!-- Table of Contents -->
      <nav class="p-4 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
          <h2 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-check text-amber-600"></i>
            <span>9 Chủ Đề • 30 Bài</span>
          </h2>
          <span class="text-[11px] px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            KNTT
          </span>
        </div>

        <div id="sidebarLessonList" class="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 custom-scrollbar text-xs">
          ${data.topics.map(t => `
            <div class="space-y-1">
              <div class="px-2 py-1 font-black text-[11px] text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center justify-between">
                <span>${escapeHtml(t.name)}</span>
                <span class="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-1.5 py-0.2 rounded font-bold">${t.lessons.length} bài</span>
              </div>
              ${t.lessons.map(l => `
                <a href="#lesson-${l.id}" onclick="selectLesson(${l.id})" id="nav-item-${l.id}"
                  class="lesson-nav-btn block p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 dark:hover:text-amber-400 transition font-medium flex items-center justify-between group">
                  <span class="truncate">${escapeHtml(l.title)}</span>
                  <i id="check-icon-${l.id}" class="fa-regular fa-circle-check text-slate-300 dark:text-slate-700 text-xs shrink-0 group-hover:text-amber-500"></i>
                </a>
              `).join('')}
            </div>
          `).join('')}
        </div>

        <!-- Banner thi thử Trạng Nguyên -->
        <div class="pt-2">
          <div onclick="openTrangNguyenModal()" class="cursor-pointer p-3 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center shadow-md shadow-amber-500/20 hover:brightness-105 transition">
            <div class="text-[10px] uppercase font-bold tracking-widest text-amber-200">Đấu Trường Kĩ Năng Sống</div>
            <div class="font-black text-xs flex items-center justify-center gap-1.5 mt-0.5">
              <i class="fa-solid fa-trophy text-yellow-300"></i>
              <span>Trạng Nguyên Trải Nghiệm 6</span>
            </div>
          </div>
        </div>

      </nav>
    </aside>

    <!-- MAIN LESSON CONTENT AREA -->
    <main class="flex-1 min-w-0 space-y-8">
      
      <!-- HERO HEADER -->
      <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 text-white shadow-xl shadow-amber-500/10 relative overflow-hidden">
        <div class="relative z-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold text-white">
            <i class="fa-solid fa-seedling"></i>
            <span>GDPT 2018 • Bộ Sách Kết Nối Tri Thức Với Cuộc Sống</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
            Khóa Học Hoạt Động Trải Nghiệm, Hướng Nghiệp Lớp 6
          </h1>
          <p class="text-xs sm:text-sm text-amber-100 max-w-2xl leading-relaxed">
            Khám phá trọn vẹn 9 Chủ đề, 30 Hoạt động: Thích nghi môi trường THCS mới, Khám phá và rèn luyện bản thân, San sẻ yêu thương với gia đình và cộng đồng, Bảo tồn thiên nhiên, Khám phá thế giới nghề nghiệp và định hướng nghề truyền thống tương lai.
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button onclick="scrollToFirstLesson()" class="px-4 py-2 rounded-xl bg-white text-amber-700 font-bold text-xs shadow-md hover:bg-amber-50 transition flex items-center gap-2">
              <i class="fa-solid fa-play text-amber-600"></i>
              <span>Bắt Đầu Hành Trình</span>
            </button>
            <button onclick="openTreeModal()" class="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur transition flex items-center gap-2">
              <i class="fa-solid fa-tree text-emerald-200"></i>
              <span>Tạo Cây Giá Trị Bản Thân</span>
            </button>
          </div>
        </div>
        <div class="absolute -right-6 -bottom-6 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      <!-- 30 LESSONS LIST -->
      <div class="space-y-10" id="allLessonsContainer">
        ${allLessons.map(l => `
          <article id="lesson-${l.id}" class="lesson-content p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition hover:shadow-md">
            
            <!-- Lesson Header Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    Bài ${l.id} / 30
                  </span>
                  <span class="text-xs px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    ${escapeHtml(l.topicName)}
                  </span>
                  <span class="text-xs text-slate-500 font-medium">
                    <i class="fa-solid fa-book-open text-slate-400 mr-1"></i>${escapeHtml(l.pages)}
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  ${escapeHtml(l.title)}
                </h3>
              </div>
              <button onclick="toggleLessonComplete(${l.id})" id="btnComplete-${l.id}"
                class="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 hover:border-amber-300 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                <i class="fa-regular fa-circle-check"></i>
                <span>Đánh dấu đã trải nghiệm</span>
              </button>
            </div>

            <!-- 1. Mục tiêu hoạt động -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-bullseye text-amber-600"></i>
                <span>1. Mục tiêu cần đạt</span>
              </h4>
              <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <ul class="list-disc pl-5 space-y-1">
                  ${l.objectives.map(obj => `<li>${escapeHtml(obj)}</li>`).join('')}
                </ul>
              </div>
            </div>

            <!-- 2. Khám phá – Kết nối -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-lightbulb text-orange-500"></i>
                <span>2. Khám phá – Kết nối kiến thức trọng tâm</span>
              </h4>
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
                ${renderMarkdown(l.knowledge)}
              </div>
            </div>

            <!-- 3. Thực hành trải nghiệm -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-people-arrows text-indigo-600"></i>
                <span>3. Hoạt động thực hành &amp; Xử lí tình huống</span>
              </h4>
              <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                ${renderMarkdown(l.practice)}
              </div>
            </div>

            <!-- 4. Vận dụng sau giờ học -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-house-chimney text-emerald-600"></i>
                <span>4. Vận dụng – Hoạt động sau giờ học</span>
              </h4>
              <div class="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
                <i class="fa-solid fa-hand-holding-heart text-emerald-600 mt-0.5"></i>
                <div>
                  <p class="font-bold text-emerald-900 dark:text-emerald-300">Nhiệm vụ rèn luyện thực tế:</p>
                  <p class="mt-1">${escapeHtml(l.application)}</p>
                </div>
              </div>
            </div>

            <!-- 5. Sản phẩm học tập & Đánh giá -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                <span class="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-box-archive"></i>
                  <span>5. Sản phẩm học tập mong đợi:</span>
                </span>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${escapeHtml(l.product)}</p>
              </div>
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                <span class="font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-clipboard-check"></i>
                  <span>6. Tiêu chí tự đánh giá:</span>
                </span>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${escapeHtml(l.evaluation)}</p>
              </div>
            </div>

            <!-- 7. Luyện tập tương tác -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-circle-question text-rose-500"></i>
                <span>7. Câu hỏi củng cố tương tác</span>
              </h4>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
                <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(l.quiz.q)}</p>
                <div class="space-y-2" id="quiz-opt-group-${l.id}">
                  ${l.quiz.options.map((opt, oIdx) => `
                    <label class="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-surface hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition text-xs">
                      <input type="radio" name="lessonQuiz-${l.id}" value="${oIdx}" class="text-amber-600 focus:ring-amber-500">
                      <span class="text-slate-800 dark:text-slate-200">${escapeHtml(opt)}</span>
                    </label>
                  `).join('')}
                </div>
                <div class="flex items-center gap-3 pt-2">
                  <button onclick="checkPracticeQuiz(${l.id}, ${l.quiz.ans}, '${escapeHtml(l.quiz.exp).replace(/'/g, "\\'")}')" class="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition">
                    Kiểm tra nhận thức
                  </button>
                  <span id="quiz-feedback-${l.id}" class="text-xs font-bold hidden"></span>
                </div>
                <div id="quiz-explanation-${l.id}" class="hidden p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 leading-relaxed"></div>
              </div>
            </div>

          </article>
        `).join('')}
      </div>

    </main>
  </div>

  <!-- MODAL: CÂY GIÁ TRỊ BẢN THÂN -->
  <div id="treeModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-xl bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <div class="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-tree text-lg"></i>
          <div>
            <h3 class="font-black text-sm">Cây Giá Trị Bản Thân</h3>
            <p class="text-[10px] text-emerald-100">Khám Phá &amp; Cam Kết Rèn Luyện Nhân Cách</p>
          </div>
        </div>
        <button onclick="closeTreeModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar space-y-4 text-xs">
        <div class="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-200">
          Hãy chọn các giá trị đạo đức cốt lõi mà em muốn nuôi dưỡng trên 'Cây Giá Trị' của cuộc đời mình:
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2" id="valuesCheckList">
          ${[
            { name: "Trung thực", icon: "fa-certificate", color: "text-amber-500" },
            { name: "Nhân ái", icon: "fa-heart", color: "text-rose-500" },
            { name: "Trách nhiệm", icon: "fa-shield-halved", color: "text-blue-500" },
            { name: "Chăm chỉ", icon: "fa-seedling", color: "text-emerald-500" },
            { name: "Tự lập", icon: "fa-person-walking-arrow-right", color: "text-purple-500" },
            { name: "Kiên trì", icon: "fa-mountain", color: "text-indigo-500" },
            { name: "Biết ơn", icon: "fa-hands-holding-child", color: "text-pink-500" },
            { name: "Tôn trọng", icon: "fa-handshake", color: "text-teal-500" },
            { name: "Khiêm tốn", icon: "fa-feather", color: "text-sky-500" }
          ].map((v, i) => `
            <button onclick="toggleValueItem(${i}, '${v.name}')" id="valBtn_${i}"
              class="val-item-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-card hover:border-emerald-400 flex items-center gap-2 transition text-left">
              <i class="fa-solid ${v.icon} ${v.color} text-sm"></i>
              <span class="font-bold text-slate-800 dark:text-slate-200 truncate">${v.name}</span>
            </button>
          `).join('')}
        </div>

        <div class="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
          <div class="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">Cây Giá Trị Đang Nở Hoa:</div>
          <div id="treeSelectedValues" class="flex flex-wrap gap-1.5 min-h-[2rem]">
            <span class="text-xs text-slate-400 italic">Chưa chọn giá trị nào. Bấm vào các ô phía trên để gắn hoa lên cây nhé!</span>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="font-bold text-slate-800 dark:text-slate-200">Cam kết hành động của em trong tuần này:</label>
          <textarea id="valueCommitmentText" rows="2" placeholder="Ví dụ: Em sẽ luôn nói thật với bố mẹ, tự giác gấp chăn màn mỗi sáng..."
            class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-card text-xs focus:ring-2 focus:ring-emerald-500"></textarea>
        </div>

        <div class="flex items-center justify-end gap-2 pt-2">
          <button onclick="saveTreeCommitment()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition">
            Lưu Cam Kết Hành Động
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: TRÒ CHƠI QUẢN LÝ NGÂN SÁCH 500K -->
  <div id="budgetModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-lg bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
      <div class="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-wallet text-lg"></i>
          <div>
            <h3 class="font-black text-sm">Thử Thách Quản Lý Ngân Sách 500.000đ</h3>
            <p class="text-[10px] text-blue-100">Bài Toán Chi Tiêu Hợp Lý Của Bạn Hương (SGK)</p>
          </div>
        </div>
        <button onclick="closeBudgetModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 space-y-4 text-xs">
        <div class="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-blue-950 dark:text-blue-200">
          Hương có **500.000đ**. Hãy chọn các khoản chi để vừa đáp ứng nhu cầu học tập, vừa có tiền tiết kiệm mà **không bị vượt quá ngân sách**!
        </div>

        <!-- Budget Items Checkboxes -->
        <div class="space-y-2">
          ${[
            { id: "b1", name: "Sách bài tập & Vở viết nâng cao", cost: 120000, tag: "Cần thiết (Học tập)", type: "need" },
            { id: "b2", name: "Quà sinh nhật tặng bạn thân", cost: 80000, tag: "Tình bạn (Ý nghĩa)", type: "need" },
            { id: "b3", name: "Bỏ ống heo tiết kiệm dự phòng", cost: 150000, tag: "Tiết kiệm", type: "save" },
            { id: "b4", name: "Bộ truyện tranh hot trend mới ra", cost: 180000, tag: "Giải trí (Mong muốn)", type: "want" },
            { id: "b5", name: "Chiếc váy thời trang đắt tiền", cost: 350000, tag: "Mong muốn (Quá đắt)", type: "want" },
            { id: "b6", name: "Trà sữa và đồ ăn vặt cùng bạn", cost: 50000, tag: "Giải trí", type: "want" }
          ].map(item => `
            <label class="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-card hover:bg-slate-50 cursor-pointer transition">
              <div class="flex items-center gap-2.5">
                <input type="checkbox" onchange="calculateBudget()" class="budget-chk rounded text-blue-600 focus:ring-blue-500" data-cost="${item.cost}" data-type="${item.type}">
                <span class="font-bold text-slate-800 dark:text-slate-200">${item.name}</span>
              </div>
              <div class="text-right">
                <span class="font-mono font-black text-blue-600 dark:text-blue-400">${item.cost.toLocaleString('vi-VN')} đ</span>
                <span class="block text-[10px] text-slate-400">${item.tag}</span>
              </div>
            </label>
          `).join('')}
        </div>

        <!-- Budget Summary -->
        <div class="p-3.5 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div class="text-[10px] text-slate-400 uppercase tracking-widest">Tổng chi tiêu:</div>
            <div id="budgetTotalCost" class="text-xl font-mono font-black text-amber-400">0 đ</div>
          </div>
          <div class="text-right">
            <div class="text-[10px] text-slate-400 uppercase tracking-widest">Số dư còn lại:</div>
            <div id="budgetRemaining" class="text-xl font-mono font-black text-emerald-400">500.000 đ</div>
          </div>
        </div>

        <!-- Evaluation message -->
        <div id="budgetResultFeedback" class="p-3 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 min-h-[3rem] flex items-center">
          Hãy tích chọn các khoản chi để xem đánh giá thông minh tài chính!
        </div>

      </div>
    </div>
  </div>

  <!-- MODAL: HỘI THI TRẠNG NGUYÊN HĐTN (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-3xl bg-white dark:bg-dark-surface rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
      
      <!-- Contest Header -->
      <div class="p-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg font-black">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="font-black text-sm">Hội Thi Trạng Nguyên Hoạt Động Trải Nghiệm 6</h3>
            <p class="text-[10px] text-amber-100">Thời gian làm bài: 60:00 • 25 Câu Trắc Nghiệm Kĩ Năng Sống &amp; Nghề Nghiệp</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1 rounded-full bg-white/20 font-mono font-black text-sm flex items-center gap-1.5" id="contestTimer">
            <i class="fa-solid fa-stopwatch text-amber-200"></i>
            <span>60:00</span>
          </div>
          <button onclick="closeTrangNguyenModal()" class="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-sm transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Contest Content -->
      <div class="p-5 overflow-y-auto custom-scrollbar space-y-6 text-xs flex-1" id="contestQuizBody">
        <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-amber-950 dark:text-amber-200 flex items-center gap-3">
          <i class="fa-solid fa-compass text-amber-600 text-xl"></i>
          <p class="leading-relaxed font-medium">Chào mừng Sĩ tử đến với Hội thi Trạng Nguyên Trải Nghiệm 6! Hãy vận dụng vốn sống, kỹ năng thích nghi và định hướng tương lai để chinh phục 25 câu hỏi nhé!</p>
        </div>

        <div class="space-y-6" id="contestQuestionsList">
          ${data.trangNguyenQuestions.map((tq, qIdx) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3" id="contest-q-card-${qIdx}">
              <div class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-start gap-2">
                <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-xs shrink-0 font-black">Câu ${qIdx + 1}</span>
                <span class="leading-relaxed">${escapeHtml(tq.q)}</span>
              </div>
              <div class="space-y-2">
                ${tq.options.map((opt, oIdx) => `
                  <label class="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-surface hover:bg-amber-50/50 dark:hover:bg-slate-800 cursor-pointer transition">
                    <input type="radio" name="contestAns_${qIdx}" value="${oIdx}" class="text-amber-500 focus:ring-amber-400">
                    <span class="text-slate-800 dark:text-slate-200">${escapeHtml(opt)}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Contest Result Box -->
        <div id="contestResultArea" class="hidden p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-dark-card dark:to-dark-surface border-2 border-amber-400 text-center space-y-4">
          <div id="contestBadge" class="w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200">
            <i class="fa-solid fa-crown"></i>
          </div>
          <div>
            <h4 id="contestRank" class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Đang chấm bài...</h4>
            <p id="contestScore" class="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1">Đạt 0/25 câu (0%)</p>
          </div>
          <p id="contestComment" class="text-xs text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed"></p>
          <div class="flex items-center justify-center gap-3 pt-2">
            <button onclick="resetContest()" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition">
              <i class="fa-solid fa-rotate-right mr-1.5"></i>Làm Lại Bài Thi
            </button>
            <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition">
              Đóng Bảng Điểm
            </button>
          </div>
        </div>

      </div>

      <!-- Contest Footer Submit Bar -->
      <div class="p-4 bg-slate-50 dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span class="text-[11px] text-slate-500 font-medium">Hệ thống chấm điểm tự động &amp; Xếp hạng tức thì</span>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-md transition flex items-center gap-2">
          <i class="fa-solid fa-paper-plane"></i>
          <span>Nộp Bài Thi Trạng Nguyên</span>
        </button>
      </div>

    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Standard Dark mode toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }

    // Scroll to first lesson
    function scrollToFirstLesson() {
      const el = document.getElementById('lesson-1');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // Active lesson selection
    function selectLesson(id) {
      document.querySelectorAll('.lesson-nav-btn').forEach(btn => {
        btn.classList.remove('bg-amber-50', 'dark:bg-amber-950/60', 'text-amber-600', 'font-black');
      });
      const activeBtn = document.getElementById('nav-item-' + id);
      if (activeBtn) {
        activeBtn.classList.add('bg-amber-50', 'dark:bg-amber-950/60', 'text-amber-600', 'font-black');
      }
    }

    // Filter lessons in sidebar & page
    function filterLessons(q) {
      q = (q || '').toLowerCase().trim();
      document.querySelectorAll('.lesson-content').forEach(card => {
        const title = (card.querySelector('h3')?.innerText || '').toLowerCase();
        const text = card.innerText.toLowerCase();
        if (!q || title.includes(q) || text.includes(q)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // Progress Tracking
    const completedLessons = new Set(JSON.parse(localStorage.getItem('codehub_hdtn6_completed') || '[]'));
    function updateProgressUI() {
      const total = 30;
      const count = completedLessons.size;
      const pct = Math.round((count / total) * 100);

      const bar = document.getElementById('progressBar');
      const text = document.getElementById('progressText');
      const badge = document.getElementById('percentBadge');

      if (bar) bar.style.width = pct + '%';
      if (text) text.innerText = count + ' / ' + total + ' Hoạt động';
      if (badge) badge.innerText = pct + '%';

      for (let i = 1; i <= total; i++) {
        const icon = document.getElementById('check-icon-' + i);
        const btn = document.getElementById('btnComplete-' + i);
        if (completedLessons.has(i)) {
          if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-500 text-xs shrink-0';
          if (btn) {
            btn.className = 'px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs font-bold text-emerald-600 dark:text-emerald-400 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0';
            btn.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>Đã trải nghiệm</span>';
          }
        } else {
          if (icon) icon.className = 'fa-regular fa-circle-check text-slate-300 dark:text-slate-700 text-xs shrink-0';
          if (btn) {
            btn.className = 'px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 hover:border-amber-300 transition flex items-center gap-1.5 self-start sm:self-auto shrink-0';
            btn.innerHTML = '<i class="fa-regular fa-circle-check"></i><span>Đánh dấu đã trải nghiệm</span>';
          }
        }
      }
    }
    function toggleLessonComplete(id) {
      if (completedLessons.has(id)) {
        completedLessons.delete(id);
      } else {
        completedLessons.add(id);
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
      }
      localStorage.setItem('codehub_hdtn6_completed', JSON.stringify(Array.from(completedLessons)));
      updateProgressUI();
    }
    setTimeout(updateProgressUI, 50);

    // Check practice quiz in lesson
    function checkPracticeQuiz(lessonId, correctAns, explanation) {
      const selected = document.querySelector('input[name="lessonQuiz-' + lessonId + '"]:checked');
      const fb = document.getElementById('quiz-feedback-' + lessonId);
      const expBox = document.getElementById('quiz-explanation-' + lessonId);

      if (!selected) {
        fb.classList.remove('hidden');
        fb.className = 'text-xs font-bold text-amber-500';
        fb.innerText = 'Vui lòng chọn 1 đáp án!';
        return;
      }

      fb.classList.remove('hidden');
      expBox.classList.remove('hidden');
      const val = parseInt(selected.value, 10);

      if (val === correctAns) {
        fb.className = 'text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1';
        fb.innerHTML = '<i class="fa-solid fa-circle-check"></i> Chính xác tuyệt vời!';
        expBox.innerHTML = '<strong>Ý nghĩa:</strong> ' + explanation;
        confetti({ particleCount: 20, spread: 50, origin: { y: 0.7 } });
      } else {
        fb.className = 'text-xs font-bold text-rose-500 flex items-center gap-1';
        fb.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Chưa đúng rồi, em hãy thử lại nhé!';
        expBox.innerHTML = '<strong>Gợi ý:</strong> ' + explanation;
      }
    }

    // MODAL CÂY GIÁ TRỊ BẢN THÂN LOGIC
    let selectedValues = JSON.parse(localStorage.getItem('codehub_hdtn6_tree_values') || '["Trung thực", "Chăm chỉ"]');
    function openTreeModal() {
      document.getElementById('treeModal').classList.remove('hidden');
      renderTreeDisplay();
      const savedCommit = localStorage.getItem('codehub_hdtn6_tree_commit') || '';
      document.getElementById('valueCommitmentText').value = savedCommit;
    }
    function closeTreeModal() {
      document.getElementById('treeModal').classList.add('hidden');
    }
    function toggleValueItem(idx, valName) {
      const pos = selectedValues.indexOf(valName);
      if (pos > -1) {
        selectedValues.splice(pos, 1);
      } else {
        if (selectedValues.length >= 6) {
          alert('Em nên chọn tối đa 6 giá trị cốt lõi để tập trung rèn luyện tốt nhất nhé!');
          return;
        }
        selectedValues.push(valName);
        confetti({ particleCount: 15, spread: 40, origin: { y: 0.7 } });
      }
      renderTreeDisplay();
    }
    function renderTreeDisplay() {
      const box = document.getElementById('treeSelectedValues');
      if (selectedValues.length === 0) {
        box.innerHTML = '<span class="text-xs text-slate-400 italic">Chưa chọn giá trị nào. Bấm vào các ô phía trên để gắn hoa lên cây nhé!</span>';
      } else {
        box.innerHTML = selectedValues.map(v => '<span class="px-2.5 py-1 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm"><i class="fa-solid fa-spa"></i> ' + v + '</span>').join('');
      }

      // Update button styles
      document.querySelectorAll('.val-item-btn').forEach(btn => {
        const spanText = btn.querySelector('span').innerText;
        if (selectedValues.includes(spanText)) {
          btn.className = 'val-item-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 flex items-center gap-2 transition text-left shadow-sm';
        } else {
          btn.className = 'val-item-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-card hover:border-emerald-400 flex items-center gap-2 transition text-left';
        }
      });
    }
    function saveTreeCommitment() {
      const text = document.getElementById('valueCommitmentText').value;
      localStorage.setItem('codehub_hdtn6_tree_values', JSON.stringify(selectedValues));
      localStorage.setItem('codehub_hdtn6_tree_commit', text);
      alert('Đã lưu Cây Giá Trị và Cam Kết Hành Động của em thành công!');
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      closeTreeModal();
    }

    // MODAL NGÂN SÁCH 500K LOGIC
    function openBudgetModal() {
      document.getElementById('budgetModal').classList.remove('hidden');
    }
    function closeBudgetModal() {
      document.getElementById('budgetModal').classList.add('hidden');
    }
    function calculateBudget() {
      const maxBudget = 500000;
      let total = 0;
      let hasNeed = false;
      let hasSave = false;
      let hasWant = false;

      document.querySelectorAll('.budget-chk:checked').forEach(chk => {
        const cost = parseInt(chk.getAttribute('data-cost'), 10);
        const type = chk.getAttribute('data-type');
        total += cost;
        if (type === 'need') hasNeed = true;
        if (type === 'save') hasSave = true;
        if (type === 'want') hasWant = true;
      });

      const remain = maxBudget - total;
      document.getElementById('budgetTotalCost').innerText = total.toLocaleString('vi-VN') + ' đ';
      const remEl = document.getElementById('budgetRemaining');
      remEl.innerText = remain.toLocaleString('vi-VN') + ' đ';

      const fb = document.getElementById('budgetResultFeedback');

      if (total === 0) {
        remEl.className = 'text-xl font-mono font-black text-emerald-400';
        fb.className = 'p-3 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 min-h-[3rem] flex items-center';
        fb.innerText = 'Hãy tích chọn các khoản chi để xem đánh giá thông minh tài chính!';
      } else if (remain < 0) {
        remEl.className = 'text-xl font-mono font-black text-rose-500';
        fb.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900 text-rose-800 dark:text-rose-200 font-bold';
        fb.innerHTML = '<i class="fa-solid fa-triangle-exclamation mr-1 text-rose-500"></i> Báo động: Đã chi tiêu vượt quá 500.000đ (' + Math.abs(remain).toLocaleString('vi-VN') + 'đ)! Hãy bỏ bớt các món đồ xa xỉ không thực sự cần thiết!';
      } else if (hasNeed && hasSave && remain >= 0) {
        remEl.className = 'text-xl font-mono font-black text-emerald-400';
        fb.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold';
        fb.innerHTML = '<i class="fa-solid fa-circle-check mr-1 text-emerald-500"></i> Xuất sắc! Kế hoạch chi tiêu rất thông minh: Vừa đảm bảo sách vở học tập, tình bạn, vừa có quỹ tiết kiệm dự phòng (' + remain.toLocaleString('vi-VN') + 'đ còn lại)!';
        confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
      } else {
        remEl.className = 'text-xl font-mono font-black text-amber-400';
        fb.className = 'p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900 text-amber-800 dark:text-amber-200 font-medium';
        fb.innerHTML = '<i class="fa-solid fa-circle-info mr-1 text-amber-500"></i> Chưa tối ưu: Em nên ưu tiên mua sách vở học tập và dành một khoản bỏ heo đất tiết kiệm nhé!';
      }
    }

    // TRẠNG NGUYÊN CONTEST LOGIC
    let contestTimerInterval = null;
    let contestSecondsLeft = 60 * 60; // 60 minutes
    const contestTotal = ${data.trangNguyenQuestions.length};
    const contestAnsKeys = ${JSON.stringify(data.trangNguyenQuestions.map(q => q.ans))};

    function openTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.remove('hidden');
      if (!contestTimerInterval) {
        startContestTimer();
      }
    }
    function closeTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.add('hidden');
    }
    function startContestTimer() {
      const timerEl = document.getElementById('contestTimer');
      contestTimerInterval = setInterval(() => {
        if (contestSecondsLeft <= 0) {
          clearInterval(contestTimerInterval);
          alert('Đã hết 60 phút làm bài! Hệ thống sẽ tự động nộp bài thi của em.');
          submitContest();
          return;
        }
        contestSecondsLeft--;
        const m = Math.floor(contestSecondsLeft / 60);
        const s = contestSecondsLeft % 60;
        if (timerEl) {
          timerEl.innerHTML = '<i class="fa-solid fa-stopwatch text-amber-200"></i> <span>' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + '</span>';
        }
      }, 1000);
    }

    function submitContest() {
      let score = 0;
      for (let i = 0; i < contestTotal; i++) {
        const sel = document.querySelector('input[name="contestAns_' + i + '"]:checked');
        const card = document.getElementById('contest-q-card-' + i);
        if (sel) {
          const val = parseInt(sel.value, 10);
          if (val === contestAnsKeys[i]) {
            score++;
            if (card) {
              card.classList.remove('border-slate-200', 'dark:border-slate-800');
              card.classList.add('border-emerald-400', 'bg-emerald-50/20');
            }
          } else {
            if (card) {
              card.classList.remove('border-slate-200', 'dark:border-slate-800');
              card.classList.add('border-rose-400', 'bg-rose-50/20');
            }
          }
        }
      }

      clearInterval(contestTimerInterval);

      // Result calculation
      const resArea = document.getElementById('contestResultArea');
      resArea.classList.remove('hidden');
      const scoreEl = document.getElementById('contestScore');
      const rankEl = document.getElementById('contestRank');
      const badgeEl = document.getElementById('contestBadge');
      const commentEl = document.getElementById('contestComment');

      const pct = Math.round((score / contestTotal) * 100);
      scoreEl.innerText = 'Đạt ' + score + '/' + contestTotal + ' câu (' + pct + '%)';

      if (score >= 23) {
        rankEl.innerText = 'Trạng Nguyên Trải Nghiệm 6 (Bậc Thầy Kĩ Năng Sống)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-crown text-amber-900"></i>';
        commentEl.innerText = 'Xuất sắc tuyệt đỉnh! Em đã nắm vững toàn diện kĩ năng thích nghi môi trường mới, quản lý tài chính, ứng phó thiên tai và định hướng nghề nghiệp tương lai!';
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Trải Nghiệm (Học Sinh Năng Động & Bản Lĩnh)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-medal text-white"></i>';
        commentEl.innerText = 'Rất đáng khen ngợi! Em xử lý tình huống thông minh, có trách nhiệm với bản thân, gia đình và cộng đồng!';
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Trải Nghiệm (Tự Lập & Chăm Ngoan)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-orange-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-orange-200';
        badgeEl.innerHTML = '<i class="fa-solid fa-award text-white"></i>';
        commentEl.innerText = 'Làm tốt lắm! Em đã hoàn thành xuất sắc các tình huống thực tế cốt lõi của chương trình HĐTN 6!';
      } else {
        rankEl.innerText = 'Sĩ Tử Trải Nghiệm (Học Hỏi & Rèn Luyện)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-slate-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class="fa-solid fa-compass text-white"></i>';
        commentEl.innerText = 'Em hãy ôn lại bài học về quản lý chi tiêu và văn hóa nơi công cộng rồi thử sức lại nhé. Cố lên!';
      }

      resArea.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('btnSubmitContest').classList.add('hidden');
    }

    function resetContest() {
      document.querySelectorAll('#contestQuestionsList input[type="radio"]').forEach(r => r.checked = false);
      document.querySelectorAll('#contestQuestionsList > div').forEach(c => {
        c.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3';
      });
      document.getElementById('contestResultArea').classList.add('hidden');
      document.getElementById('btnSubmitContest').classList.remove('hidden');
      contestSecondsLeft = 60 * 60;
      clearInterval(contestTimerInterval);
      startContestTimer();
    }
  </script>
</body>
</html>`;

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'hdtn_6.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'experience_6.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
