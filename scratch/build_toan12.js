// build_toan12.js - Builds both courses/toan_12.html and courses/toan12.html
const fs = require('fs');
const path = require('path');

const tap1 = require('./toan12_data_tap1.js');
const tap2 = require('./toan12_data_tap2.js');
const svgs = require('./toan12_svgs.js');
const lessonDiagrams = require('./toan12_lesson_diagrams.js');
const { renderInteractiveTools } = require('./toan12_interactive.js');

function renderPoint(point) {
  let cleanPoint = point.trim();
  let isSubBullet = cleanPoint.startsWith('•');
  if (isSubBullet) {
    cleanPoint = cleanPoint.replace(/^•\s*/, '');
  }
  
  return `
    <div class="flex items-start gap-3 leading-relaxed sm:leading-loose text-xs sm:text-sm text-slate-700 dark:text-slate-300 ${isSubBullet ? 'pl-4 sm:pl-6' : ''}">
      <span class="inline-flex items-center justify-center w-5 h-5 rounded-full ${isSubBullet ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' : 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300'} font-bold text-[10px] shrink-0 mt-0.5">
        ${isSubBullet ? '▸' : '✓'}
      </span>
      <div class="flex-1">${cleanPoint}</div>
    </div>
  `;
}

function renderLesson(lesson, badgeColor) {
  const diagramKey = `diagram_${lesson.id.replace('-', '')}`;
  const diagramHtml = lessonDiagrams[diagramKey] || '';

  const quizHtml = lesson.quizzes && lesson.quizzes.length > 0 ? `
    <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>📝</span> Luyện tập nhanh: 3 câu trắc nghiệm trọng tâm (${lesson.num})
        </h4>
        <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">Chấm điểm tức thì</span>
      </div>
      <div class="space-y-4">
        ${lesson.quizzes.map((qz, idx) => `
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40" id="quiz-${lesson.id}-${idx}">
            <div class="font-medium text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-3">
              <span class="font-bold text-indigo-600 dark:text-indigo-400">Câu ${idx + 1}:</span> ${qz.q}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              ${qz.options.map((opt, oIdx) => `
                <button type="button" onclick="checkMiniQuiz('${lesson.id}', ${idx}, ${oIdx}, ${qz.correct})" 
                  class="mini-opt-${lesson.id}-${idx} text-left px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all text-slate-700 dark:text-slate-300">
                  ${opt}
                </button>
              `).join('')}
            </div>
            <div id="explain-${lesson.id}-${idx}" class="hidden mt-2 p-3 rounded-lg text-xs leading-relaxed bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span class="font-bold text-emerald-600 dark:text-emerald-400">💡 Giải thích chi tiết:</span> ${qz.explain}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  return `
    <article id="${lesson.id}" class="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 transition-all hover:shadow-md">
      <!-- Header Lesson -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800 mb-6">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm shadow-sm">
            ${lesson.num}
          </span>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            ${lesson.title}
          </h3>
        </div>
        <div class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>⏱ ${lesson.duration}</span>
        </div>
      </div>

      <!-- Objective -->
      <div class="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 mb-6">
        <div class="flex items-start gap-2.5 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200">
          <span class="text-indigo-600 dark:text-indigo-400 font-bold">🎯 Mục tiêu cốt lõi:</span>
          <span>${lesson.objective}</span>
        </div>
      </div>

      <!-- Theory Sections -->
      <div class="space-y-6">
        ${lesson.theorySections.map(sec => `
          <div class="p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30">
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                ${sec.title}
              </h4>
              <span class="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 font-medium">
                ${sec.badge}
              </span>
            </div>
            <div class="space-y-2.5 mt-2">
              ${sec.points.map(p => renderPoint(p)).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Dedicated Lesson Mathematical Diagram -->
      ${diagramHtml}

      <!-- Mini Quiz -->
      ${quizHtml}
    </article>
  `;
}

function renderChapter(ch) {
  return `
    <section id="${ch.id}" class="scroll-mt-20 mb-14">
      <div class="flex items-center gap-3.5 mb-6">
        <span class="px-3.5 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-xs sm:text-sm tracking-wide">
          ${ch.code}
        </span>
        <div>
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            ${ch.title}
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            ${ch.desc}
          </p>
        </div>
      </div>
      <div>
        ${ch.lessons.map(l => renderLesson(l, ch.badgeColor)).join('')}
      </div>
    </section>
  `;
}

// Function to generate the full lesson navigation items
function renderSidebarChapter(ch, badgeColorClass, borderClass) {
  return `
    <div class="sidebar-chapter-group mb-4">
      <div class="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100 py-1.5 px-2 rounded-lg bg-slate-100/80 dark:bg-slate-800/60 mb-1.5 text-xs">
        <a href="#${ch.id}" class="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 truncate">
          <span class="w-2 h-2 rounded-full ${badgeColorClass}"></span>
          <span class="truncate">${ch.code}: ${ch.title.split('—')[0].replace('Ứng dụng đạo hàm để ', '')}</span>
        </a>
        <span class="text-[10px] text-slate-500 dark:text-slate-400 shrink-0 font-semibold">${ch.lessons.length} mục</span>
      </div>
      <div class="pl-2 ml-2 border-l-2 ${borderClass} space-y-1">
        ${ch.lessons.map(l => `
          <a href="#${l.id}" 
             data-lesson-title="${l.num} ${l.title}"
             class="sidebar-lesson-link flex items-center gap-2 py-1 px-2 rounded-md hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xs leading-normal">
            <span class="font-bold text-[11px] shrink-0 text-slate-700 dark:text-slate-200">${l.num}:</span>
            <span class="truncate">${l.title}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

// Function to generate the Quick Lesson Picker Grid for the top hero area
function renderQuickLessonPicker(allChapters) {
  return `
    <section class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-12">
      <div class="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div class="flex items-center gap-2.5">
          <span class="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-base">📚</span>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Mục Lục 19 Bài Học — Nhấp Chọn Để Học Ngay</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Chọn trực tiếp bất kỳ bài học nào để cuộn nhanh đến nội dung kiến thức.</p>
          </div>
        </div>
        <span class="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Đủ 6 Chương</span>
      </div>

      <div class="space-y-5">
        ${allChapters.map(ch => `
          <div>
            <div class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-extrabold uppercase">${ch.code}</span>
              <span>${ch.title}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              ${ch.lessons.map(l => `
                <a href="#${l.id}" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all group flex items-start gap-2">
                  <span class="px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-[10px] shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    ${l.num}
                  </span>
                  <div class="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1">
                    ${l.title}
                  </div>
                </a>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function buildHTML() {
  const chaptersTap1 = [tap1.chuong1, tap1.chuong2, tap1.chuong3];
  const chaptersTap2 = [tap2.chuong4, tap2.chuong5, tap2.chuong6];
  const allChapters = [...chaptersTap1, ...chaptersTap2];

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toán 12 — Tổng Hợp Kiến Thức Đủ Bài, Đủ Nội Dung (Kết Nối Tri Thức)</title>
  <meta name="description" content="Tài liệu số hóa toàn diện môn Toán 12 theo chương trình Kết nối tri thức với cuộc sống. 6 chương, 19 bài học đầy đủ trong menu chọn bài, 19 sơ đồ hình vẽ toán học từng bài, 8 sơ đồ tổng hợp, 5 công cụ tính toán và đấu trường 45 phút.">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eef2ff',
              100: '#e0e7ff',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              900: '#312e81',
            }
          }
        }
      }
    }
  </script>

  <!-- KaTeX CSS & JS for safe mathematical rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"
    onload="initKaTeX();"></script>

  <style>
    /* Custom scrollbars */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    
    /* KaTeX display styling */
    .katex-display { margin: 0.75em 0; overflow-x: auto; overflow-y: hidden; padding: 0.2em 0; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Progress Bar -->
  <div id="read-progress" class="fixed top-0 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 z-50 transition-all duration-100" style="width: 0%"></div>

  <!-- Header & Navbar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors" title="Về trang chủ">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </a>
        <div>
          <span class="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300">Kết nối tri thức</span>
          <h1 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white truncate">
            Toán 12 — Kiến Thức Cốt Lõi 2 Tập
          </h1>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Mobile Menu Toggle Button -->
        <button onclick="toggleMobileMenu()" class="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <span>Menu Bài</span>
        </button>

        <!-- Search Trigger (Ctrl+K) -->
        <button onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:border-indigo-400 transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span class="hidden md:inline">Tìm kiếm...</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded">Ctrl+K</kbd>
        </button>

        <!-- Dark Mode Toggle -->
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors" title="Đổi giao diện sáng/tối">
          <svg id="theme-icon-dark" class="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          <svg id="theme-icon-light" class="w-4 h-4 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Offcanvas Menu Drawer -->
  <div id="mobile-menu-drawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden flex">
    <div class="bg-white dark:bg-slate-900 w-80 max-w-[85vw] h-full shadow-2xl flex flex-col p-4 border-r border-slate-200 dark:border-slate-800">
      <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 font-bold">📑</span>
          <span class="font-bold text-sm text-slate-900 dark:text-white">Mục Lục Bài Học</span>
        </div>
        <button onclick="toggleMobileMenu()" class="p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="py-2.5">
        <input type="text" oninput="filterSidebar(this.value, 'mobile-nav')" placeholder="Lọc nhanh bài học..." class="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
      </div>
      <div id="mobile-nav" class="flex-1 overflow-y-auto space-y-4 pr-1 text-xs">
        <div>
          <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">TẬP MỘT</div>
          ${renderSidebarChapter(tap1.chuong1, 'bg-indigo-500', 'border-indigo-300 dark:border-indigo-800')}
          ${renderSidebarChapter(tap1.chuong2, 'bg-emerald-500', 'border-emerald-300 dark:border-emerald-800')}
          ${renderSidebarChapter(tap1.chuong3, 'bg-amber-500', 'border-amber-300 dark:border-amber-800')}
        </div>
        <div>
          <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">TẬP HAI</div>
          ${renderSidebarChapter(tap2.chuong4, 'bg-cyan-500', 'border-cyan-300 dark:border-cyan-800')}
          ${renderSidebarChapter(tap2.chuong5, 'bg-rose-500', 'border-rose-300 dark:border-rose-800')}
          ${renderSidebarChapter(tap2.chuong6, 'bg-purple-500', 'border-purple-300 dark:border-purple-800')}
        </div>
      </div>
    </div>
    <div class="flex-1" onclick="toggleMobileMenu()"></div>
  </div>

  <!-- Main Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8">
    
    <!-- Left Navigation Sidebar (Sticky) -->
    <aside class="hidden lg:block w-80 shrink-0">
      <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 space-y-5">
        
        <!-- Header Info Card -->
        <div class="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-indigo-200/50 dark:border-indigo-800/50">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[10px] font-extrabold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">MỤC LỤC CHỌN BÀI</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300 font-bold">19 Bài • 6 Chương</span>
          </div>
          <div class="text-xs font-bold text-slate-800 dark:text-slate-100">Bấm bài học bất kỳ để học ngay</div>
          
          <!-- Instant filter inside sidebar -->
          <div class="mt-2.5">
            <input type="text" oninput="filterSidebar(this.value, 'desktop-nav')" placeholder="🔍 Lọc bài học..." class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs">
          </div>
        </div>

        <!-- Full Chapter & Lesson Tree Navigation -->
        <nav id="desktop-nav" class="space-y-4 text-xs font-medium">
          
          <!-- TẬP MỘT -->
          <div>
            <div class="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 mb-2 flex items-center justify-between">
              <span>TẬP MỘT (10 BÀI)</span>
              <span class="text-[10px] text-indigo-500 font-semibold">Chương I - III</span>
            </div>
            ${renderSidebarChapter(tap1.chuong1, 'bg-indigo-500', 'border-indigo-300 dark:border-indigo-800')}
            ${renderSidebarChapter(tap1.chuong2, 'bg-emerald-500', 'border-emerald-300 dark:border-emerald-800')}
            ${renderSidebarChapter(tap1.chuong3, 'bg-amber-500', 'border-amber-300 dark:border-amber-800')}
          </div>

          <!-- TẬP HAI -->
          <div>
            <div class="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 mb-2 flex items-center justify-between">
              <span>TẬP HAI (9 BÀI)</span>
              <span class="text-[10px] text-purple-500 font-semibold">Chương IV - VI</span>
            </div>
            ${renderSidebarChapter(tap2.chuong4, 'bg-cyan-500', 'border-cyan-300 dark:border-cyan-800')}
            ${renderSidebarChapter(tap2.chuong5, 'bg-rose-500', 'border-rose-300 dark:border-rose-800')}
            ${renderSidebarChapter(tap2.chuong6, 'bg-purple-500', 'border-purple-300 dark:border-purple-800')}
          </div>

          <!-- Special Sections -->
          <div class="pt-2 border-t border-slate-200 dark:border-slate-800">
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">TIỆN ÍCH & THI THỬ</div>
            <div class="space-y-1">
              <a href="#so-do-truc-quan" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors">
                <span>🎨 8 Sơ đồ SVG tổng hợp</span>
              </a>
              <a href="#interactive-tools" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors">
                <span>🧮 5 Công cụ tính toán tương tác</span>
              </a>
              <a href="#bang-cong-thuc" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors">
                <span>📑 Bảng công thức tổng hợp</span>
              </a>
              <a href="#dau-truong-toan-12" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-rose-600 dark:text-rose-400 font-bold hover:bg-rose-50 dark:hover:bg-rose-950/60 transition-colors">
                <span>🏆 Đấu trường 20 câu 45 phút</span>
              </a>
            </div>
          </div>

        </nav>

      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 max-w-4xl">
      
      <!-- HERO BANNER -->
      <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-xl mb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-indigo-200 border border-white/10 mb-4">
          <span>📚 Sách giáo khoa Kết nối tri thức với cuộc sống</span>
        </div>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          TOÁN 12 — TỔNG HỢP KIẾN THỨC ĐỦ BÀI, ĐỦ NỘI DUNG
        </h1>
        <p class="text-xs sm:text-sm text-indigo-100 leading-relaxed max-w-3xl mb-6">
          Hệ thống học liệu số hóa toàn diện hai tập SGK Toán 12 (6 Chương, 19 Bài học). Menu hiển thị đầy đủ từng bài học để chọn trực tiếp, đi kèm 19 hình minh họa toán học theo bài, 8 sơ đồ tổng hợp, 5 công cụ tính toán và đấu trường trắc nghiệm 45 phút.
        </p>

        <!-- Highlights Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div class="text-xl sm:text-2xl font-black text-white">19</div>
            <div class="text-[11px] text-indigo-200 mt-0.5">Bài học chuẩn hóa</div>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div class="text-xl sm:text-2xl font-black text-indigo-300">19+8</div>
            <div class="text-[11px] text-indigo-200 mt-0.5">Hình vẽ & Sơ đồ SVG</div>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div class="text-xl sm:text-2xl font-black text-emerald-300">5</div>
            <div class="text-[11px] text-indigo-200 mt-0.5">Tiện ích tính toán</div>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div class="text-xl sm:text-2xl font-black text-rose-300">77+</div>
            <div class="text-[11px] text-indigo-200 mt-0.5">Câu hỏi trắc nghiệm</div>
          </div>
        </div>
      </section>

      <!-- QUICK LESSON PICKER GRID (19 BÀI HỌC) -->
      ${renderQuickLessonPicker(allChapters)}

      <!-- TẬP MỘT -->
      <div class="mb-16">
        <div class="flex items-center gap-3 pb-3 border-b-2 border-indigo-600 mb-8">
          <span class="text-sm font-extrabold tracking-wider uppercase px-3 py-1 rounded-lg bg-indigo-600 text-white">PHẦN 1</span>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white">TẬP MỘT — ĐẠO HÀM, VECTƠ OXYZ & THỐNG KÊ</h2>
        </div>
        ${chaptersTap1.map(renderChapter).join('')}
      </div>

      <!-- TẬP HAI -->
      <div class="mb-16">
        <div class="flex items-center gap-3 pb-3 border-b-2 border-purple-600 mb-8">
          <span class="text-sm font-extrabold tracking-wider uppercase px-3 py-1 rounded-lg bg-purple-600 text-white">PHẦN 2</span>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white">TẬP HAI — TÍCH PHÂN, HÌNH TỌA ĐỘ 3D & XÁC SUẤT BAYES</h2>
        </div>
        ${chaptersTap2.map(renderChapter).join('')}
      </div>

      <!-- 8 SƠ ĐỒ VECTOR SVG TRỰC QUAN -->
      <section id="so-do-truc-quan" class="scroll-mt-24 mb-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-3 mb-6">
          <span class="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-lg">🎨</span>
          <div>
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">8 Sơ Đồ & Mô Hình Trực Quan Vector SVG Tổng Hợp</h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Dựng trực quan các cấu trúc toán học trọng tâm: bảng biến thiên, hình hộp, Oxyz, tứ phân vị, tích phân, tích có hướng, góc và cây Bayes.</p>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Sơ đồ 1 -->
          <div>
            ${svgs.svg1_variation_and_graph}
          </div>

          <!-- Sơ đồ 2 -->
          <div>
            ${svgs.svg2_box_vector_rule}
          </div>

          <!-- Sơ đồ 3 -->
          <div>
            ${svgs.svg3_oxyz_coordinate_system}
          </div>

          <!-- Sơ đồ 4 -->
          <div>
            ${svgs.svg4_grouped_data_quartiles}
          </div>

          <!-- Sơ đồ 5 -->
          <div>
            ${svgs.svg5_integral_area_and_revolution}
          </div>

          <!-- Sơ đồ 6 -->
          <div>
            ${svgs.svg6_cross_product_and_distance}
          </div>

          <!-- Sơ đồ 7 -->
          <div>
            ${svgs.svg7_spatial_angles}
          </div>

          <!-- Sơ đồ 8 -->
          <div>
            ${svgs.svg8_bayes_probability_tree}
          </div>
        </div>
      </section>

      <!-- 5 CÔNG CỤ TÍNH TOÁN TƯƠNG TÁC -->
      ${renderInteractiveTools()}

      <!-- BẢNG CÔNG THỨC TỔNG HỢP -->
      <section id="bang-cong-thuc" class="scroll-mt-24 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-3 mb-6">
          <span class="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 font-bold text-lg">📑</span>
          <div>
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Bảng Công Thức Tổng Hợp Toán 12</h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Tra cứu nhanh toàn bộ công thức cốt lõi phân theo 3 nhóm chuyên đề.</p>
          </div>
        </div>

        <div class="space-y-8">
          ${tap2.formulaSummaryTable.map(grp => `
            <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
              <div class="px-5 py-3.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                ${grp.group}
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs sm:text-sm">
                  <thead class="bg-slate-50 dark:bg-slate-800/40 text-slate-500 border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase tracking-wider">
                    <tr>
                      <th class="px-4 py-3 font-semibold w-1/4">Chuyên đề / Nội dung</th>
                      <th class="px-4 py-3 font-semibold w-2/5">Công thức / Biểu thức</th>
                      <th class="px-4 py-3 font-semibold">Ghi chú & Điều kiện áp dụng</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    ${grp.items.map(it => `
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td class="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">${it.name}</td>
                        <td class="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400 text-xs">${it.formula}</td>
                        <td class="px-4 py-3 text-slate-500 dark:text-slate-400 text-xs leading-relaxed">${it.note}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ĐẤU TRƯỜNG THI THỬ 20 CÂU 45 PHÚT -->
      <section id="dau-truong-toan-12" class="scroll-mt-24 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          
          <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span class="text-xs font-bold text-rose-600 dark:text-rose-400 tracking-wider uppercase">Đề thi chuẩn hóa</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                ${tap2.arenaExam.title}
              </h2>
              <p class="text-xs text-slate-500 mt-1">${tap2.arenaExam.description}</p>
            </div>
            
            <!-- Timer Display -->
            <div class="flex items-center gap-3">
              <div class="px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-mono font-bold text-lg" id="arena-timer">
                45:00
              </div>
              <button onclick="startArenaExam()" id="btn-start-arena" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all">
                Bắt đầu làm bài
              </button>
            </div>
          </div>

          <!-- Questions Container -->
          <div id="arena-container" class="mt-8 space-y-6">
            ${tap2.arenaExam.questions.map((q, idx) => `
              <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 arena-q-card" id="arena-card-${idx}">
                <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-3">
                  <span class="text-rose-600">Câu ${idx + 1}:</span> ${q.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
                  ${q.options.map((opt, oIdx) => `
                    <label class="arena-opt flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:bg-rose-50 dark:hover:bg-slate-700 transition-all text-xs text-slate-700 dark:text-slate-300">
                      <input type="radio" name="arena_q_${idx}" value="${oIdx}" class="text-rose-600 focus:ring-rose-500">
                      <span>${opt}</span>
                    </label>
                  `).join('')}
                </div>
                <div id="arena-explain-${idx}" class="hidden mt-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs leading-relaxed">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 mb-1">✓ Lời giải chi tiết:</div>
                  <div class="text-slate-600 dark:text-slate-300">${q.explain}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Submit Bar -->
          <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div id="arena-score-box" class="font-bold text-sm text-slate-700 dark:text-slate-300">
              Chưa nộp bài
            </div>
            <button onclick="submitArenaExam()" id="btn-submit-arena" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all">
              Nộp bài thi & Chấm điểm
            </button>
          </div>

        </div>
      </section>

    </main>
  </div>

  <!-- Footer -->
  <footer class="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div>Học liệu số hóa môn <b>Toán 12 — Bộ Sách Kết Nối Tri Thức Với Cuộc Sống</b>.</div>
      <div>Bảo đảm 100% không dính dòng bullet, KaTeX an toàn, menu chọn bài thông minh & hình vẽ toán học SVG chuẩn xác.</div>
    </div>
  </footer>

  <!-- Search Modal (Ctrl+K) -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden flex items-start justify-center pt-20 px-4">
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-xl w-full p-4 overflow-hidden">
      <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" id="search-input" oninput="handleSearch()" placeholder="Tìm kiếm bài học, định lý, công thức Toán 12..." class="flex-1 bg-transparent text-sm text-slate-800 dark:text-slate-100 focus:outline-none">
        <button onclick="closeSearchModal()" class="text-xs text-slate-400 hover:text-slate-600">Đóng [Esc]</button>
      </div>
      <div id="search-results" class="max-h-72 overflow-y-auto mt-3 space-y-1.5 text-xs">
        <div class="text-slate-400 text-center py-6">Nhập từ khóa để tra cứu bài học...</div>
      </div>
    </div>
  </div>

  <!-- Global Scripts -->
  <script>
    // KaTeX safe render init (Strictly delimiters $$ and $)
    function initKaTeX() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    // Reading progress bar
    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.pageYOffset / totalScroll) * 100 : 0;
      document.getElementById('read-progress').style.width = progress + '%';
    });

    // Dark mode toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Mobile menu drawer toggle
    function toggleMobileMenu() {
      const drawer = document.getElementById('mobile-menu-drawer');
      if (drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
      } else {
        drawer.classList.add('hidden');
      }
    }

    // Sidebar lesson filter
    function filterSidebar(query, navId) {
      const q = query.toLowerCase().trim();
      const nav = document.getElementById(navId);
      if (!nav) return;
      const chapters = nav.querySelectorAll('.sidebar-chapter-group');
      chapters.forEach(chap => {
        let hasMatch = false;
        const links = chap.querySelectorAll('.sidebar-lesson-link');
        links.forEach(link => {
          const title = (link.getAttribute('data-lesson-title') || link.innerText).toLowerCase();
          if (!q || title.includes(q)) {
            link.style.display = 'flex';
            hasMatch = true;
          } else {
            link.style.display = 'none';
          }
        });
        chap.style.display = (!q || hasMatch) ? 'block' : 'none';
      });
    }

    // Mini Quiz check
    function checkMiniQuiz(lessonId, qIdx, chosenIdx, correctIdx) {
      const container = document.getElementById('quiz-' + lessonId + '-' + qIdx);
      const buttons = container.querySelectorAll('button');
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.classList.remove('border-slate-200', 'dark:border-slate-700', 'bg-white', 'dark:bg-slate-800');
          btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200', 'font-bold');
        } else if (idx === chosenIdx && chosenIdx !== correctIdx) {
          btn.classList.remove('border-slate-200', 'dark:border-slate-700', 'bg-white', 'dark:bg-slate-800');
          btn.classList.add('bg-rose-100', 'dark:bg-rose-950', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
        }
      });
      document.getElementById('explain-' + lessonId + '-' + qIdx).classList.remove('hidden');
    }

    // Arena Exam Timer & Scoring
    const arenaCorrectAnswers = ${JSON.stringify(tap2.arenaExam.questions.map(q => q.correct))};
    let arenaTimer = null;
    let arenaSecondsLeft = 45 * 60;

    function startArenaExam() {
      document.getElementById('btn-start-arena').disabled = true;
      document.getElementById('btn-start-arena').classList.add('opacity-50', 'cursor-not-allowed');
      if (arenaTimer) clearInterval(arenaTimer);
      arenaTimer = setInterval(() => {
        arenaSecondsLeft--;
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimer);
          submitArenaExam();
        }
        const m = Math.floor(arenaSecondsLeft / 60);
        const s = arenaSecondsLeft % 60;
        document.getElementById('arena-timer').innerText = 
          (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
      }, 1000);
    }

    function submitArenaExam() {
      if (arenaTimer) clearInterval(arenaTimer);
      let score = 0;
      arenaCorrectAnswers.forEach((ans, idx) => {
        const radios = document.getElementsByName('arena_q_' + idx);
        let userAns = -1;
        radios.forEach(r => {
          if (r.checked) userAns = parseInt(r.value);
        });
        const card = document.getElementById('arena-card-' + idx);
        if (userAns === ans) {
          score++;
          card.classList.add('border-emerald-500', 'bg-emerald-50/40', 'dark:bg-emerald-950/20');
        } else {
          card.classList.add('border-rose-500', 'bg-rose-50/40', 'dark:bg-rose-950/20');
        }
        document.getElementById('arena-explain-' + idx).classList.remove('hidden');
      });
      
      const pct = ((score / arenaCorrectAnswers.length) * 10).toFixed(1);
      document.getElementById('arena-score-box').innerHTML = 
        \`<span class="text-rose-600 dark:text-rose-400 font-extrabold text-base">Kết quả: \${score}/20 câu (\${pct} điểm)</span>\`;
      document.getElementById('btn-submit-arena').disabled = true;
      document.getElementById('btn-submit-arena').classList.add('opacity-50');
    }

    // Search Modal
    const searchLessons = [
      { id: 'bai-1', title: 'Bài 1. Tính đơn điệu và cực trị của hàm số', ch: 'Chương I' },
      { id: 'bai-2', title: 'Bài 2. Giá trị lớn nhất và nhỏ nhất của hàm số', ch: 'Chương I' },
      { id: 'bai-3', title: 'Bài 3. Đường tiệm cận của đồ thị hàm số', ch: 'Chương I' },
      { id: 'bai-4', title: 'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị hàm số', ch: 'Chương I' },
      { id: 'bai-5', title: 'Bài 5. Ứng dụng đạo hàm giải quyết thực tiễn', ch: 'Chương I' },
      { id: 'bai-6', title: 'Bài 6. Vectơ trong không gian', ch: 'Chương II' },
      { id: 'bai-7', title: 'Bài 7. Hệ trục tọa độ trong không gian', ch: 'Chương II' },
      { id: 'bai-8', title: 'Bài 8. Biểu thức tọa độ các phép toán vectơ', ch: 'Chương II' },
      { id: 'bai-9', title: 'Bài 9. Khoảng biến thiên và khoảng tứ phân vị', ch: 'Chương III' },
      { id: 'bai-10', title: 'Bài 10. Phương sai và độ lệch chuẩn', ch: 'Chương III' },
      { id: 'bai-11', title: 'Bài 11. Nguyên hàm', ch: 'Chương IV' },
      { id: 'bai-12', title: 'Bài 12. Tích phân', ch: 'Chương IV' },
      { id: 'bai-13', title: 'Bài 13. Ứng dụng hình học của tích phân', ch: 'Chương IV' },
      { id: 'bai-14', title: 'Bài 14. Phương trình mặt phẳng', ch: 'Chương V' },
      { id: 'bai-15', title: 'Bài 15. Phương trình đường thẳng trong không gian', ch: 'Chương V' },
      { id: 'bai-16', title: 'Bài 16. Công thức tính góc trong không gian', ch: 'Chương V' },
      { id: 'bai-17', title: 'Bài 17. Phương trình mặt cầu', ch: 'Chương V' },
      { id: 'bai-18', title: 'Bài 18. Xác suất có điều kiện', ch: 'Chương VI' },
      { id: 'bai-19', title: 'Bài 19. Xác suất toàn phần và công thức Bayes', ch: 'Chương VI' }
    ];

    function openSearchModal() {
      document.getElementById('search-modal').classList.remove('hidden');
      document.getElementById('search-input').focus();
    }
    function closeSearchModal() {
      document.getElementById('search-modal').classList.add('hidden');
    }
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') closeSearchModal();
    });

    function handleSearch() {
      const q = document.getElementById('search-input').value.toLowerCase().trim();
      const resultsDiv = document.getElementById('search-results');
      if (!q) {
        resultsDiv.innerHTML = '<div class="text-slate-400 text-center py-6">Nhập từ khóa để tra cứu bài học...</div>';
        return;
      }
      const matched = searchLessons.filter(l => l.title.toLowerCase().includes(q) || l.ch.toLowerCase().includes(q));
      if (matched.length === 0) {
        resultsDiv.innerHTML = '<div class="text-slate-400 text-center py-6">Không tìm thấy bài học phù hợp.</div>';
        return;
      }
      resultsDiv.innerHTML = matched.map(m => \`
        <a href="#\${m.id}" onclick="closeSearchModal()" class="block p-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors">
          <div class="font-bold text-slate-800 dark:text-slate-200">\${m.title}</div>
          <div class="text-[10px] text-indigo-500 font-semibold">\${m.ch}</div>
        </a>
      \`).join('');
    }
  </script>

</body>
</html>
`;
}

const htmlOutput = buildHTML();
const outPath1 = path.join(__dirname, '../courses/toan_12.html');
const outPath2 = path.join(__dirname, '../courses/toan12.html');

fs.writeFileSync(outPath1, htmlOutput, 'utf8');
fs.writeFileSync(outPath2, htmlOutput, 'utf8');

console.log('Successfully updated Toán 12 with full interactive lesson menu in sidebar!');
console.log('File 1:', outPath1, 'Size:', fs.statSync(outPath1).size, 'bytes');
console.log('File 2:', outPath2, 'Size:', fs.statSync(outPath2).size, 'bytes');
