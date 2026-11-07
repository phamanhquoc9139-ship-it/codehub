// scratch/build_ktpl12.js
// Script tạo trang HTML hoàn chỉnh cho môn Giáo dục Kinh tế và Pháp luật 12 (KNTT)
// 16 Bài học, Bảng 13 thuật ngữ & công thức, 4 Công cụ tính toán tương tác, Đấu trường 45 phút

const fs = require('fs');
const path = require('path');
const data = require('./ktpl12_data_master.js');

function formatItemContent(item) {
  if (typeof item === 'string') {
    return `
      <div class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0 shadow-sm"></span>
        <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">
          ${item}
        </div>
      </div>
    `;
  }

  if (typeof item === 'object' && item !== null) {
    let innerHtml = '';
    
    if (item.badge) {
      innerHtml += `<span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 uppercase tracking-wider mb-2">${item.badge}</span>`;
    }
    
    if (item.title) {
      innerHtml += `
        <h4 class="font-bold text-sm sm:text-base text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2">
          <i class="fa-solid fa-bookmark text-indigo-500 text-xs"></i>
          <span>${item.title}</span>
        </h4>
      `;
    }

    if (Array.isArray(item.points) && item.points.length > 0) {
      innerHtml += `
        <div class="space-y-2 mt-2">
          ${item.points.map(pt => `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
              <div class="leading-relaxed flex-1">${pt}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (item.desc) {
      const lines = item.desc.split('\n').filter(l => l.trim().length > 0);
      innerHtml += `
        <div class="space-y-2.5 mt-2">
          ${lines.map(line => {
            const cleanLine = line.replace(/^[•\-\*]\s*/, '');
            return `
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                <div class="leading-relaxed flex-1">${cleanLine}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    return `
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-700 transition">
        ${innerHtml}
      </div>
    `;
  }

  return '';
}

function buildHtml() {
  const { lessons, parts, svgMap, glossaryTable, interactiveTools, arenaQuestions, svgs } = data;

  // Search Items indexing
  const searchItems = [];
  for (let i = 1; i <= 16; i++) {
    const l = lessons[i];
    searchItems.push({
      id: `bai-${i}`,
      badge: `Bài ${i}`,
      title: l.title,
      desc: l.summary || ''
    });
  }
  searchItems.push({
    id: 'bang-thuat-ngu',
    badge: 'Tra cứu',
    title: 'Bảng thuật ngữ & Công thức kinh tế pháp luật',
    desc: 'Tra cứu 13 thuật ngữ cốt lõi: GDP, GNI, HDI, Gini, FDI, ODA, CSR, Quyền sở hữu, MFN, NT...'
  });
  searchItems.push({
    id: 'cong-cu-kinh-te',
    badge: 'Công cụ',
    title: 'Công cụ tính toán kinh tế tương tác',
    desc: 'Tính GDP chi tiêu, GDP/người, Kế hoạch tài chính 50/30/20, Tính điểm hòa vốn kinh doanh.'
  });
  searchItems.push({
    id: 'dau-truong-45p',
    badge: 'Kiểm tra',
    title: 'Đấu trường 45 phút KTPL 12',
    desc: '20 câu hỏi trắc nghiệm khách quan chuẩn cấu trúc đề thi THPT Quốc gia.'
  });

  // Sidebar HTML
  let sidebarHtml = `
  <div class="p-4 space-y-4">
    <!-- Search Trigger in Sidebar -->
    <button type="button" onclick="openSearchModal()" class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition border border-slate-200/80 dark:border-slate-700">
      <span class="flex items-center gap-2">
        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
        <span>Tìm bài học, thuật ngữ...</span>
      </span>
      <kbd class="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-[10px] font-mono">Ctrl+K</kbd>
    </button>

    <!-- Progress Indicator -->
    <div class="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60">
      <div class="flex items-center justify-between text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-1.5">
        <span>Tiến độ học tập</span>
        <span id="sidebar-progress-text">0/16 bài</span>
      </div>
      <div class="w-full h-2 rounded-full bg-indigo-200/60 dark:bg-indigo-900 overflow-hidden">
        <div id="sidebar-progress-bar" class="h-full bg-indigo-600 rounded-full transition-all duration-300" style="width: 0%"></div>
      </div>
    </div>

    <!-- Navigation Parts & Lessons List -->
    <div class="space-y-4 text-xs">
      <div class="font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
        Mục lục 16 bài học
      </div>
      <div class="space-y-3">
  `;

  parts.forEach(part => {
    sidebarHtml += `
      <div class="space-y-1">
        <div class="font-bold text-slate-900 dark:text-slate-100 px-2 py-1 flex items-center justify-between text-xs">
          <span class="flex items-center gap-1.5">
            <i class="fa-solid fa-scale-balanced text-indigo-500 text-[11px]"></i>
            <span>${part.title}</span>
          </span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">${part.badge}</span>
        </div>
        <ul class="space-y-0.5 pl-3 border-l-2 border-slate-200 dark:border-slate-800 ml-2">
    `;

    part.lessons.forEach(num => {
      const les = lessons[num];
      sidebarHtml += `
        <li>
          <a href="#bai-${num}" class="nav-link flex items-center justify-between px-2.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition group text-[11px]" id="nav-bai-${num}">
            <span class="truncate pr-1 group-hover:translate-x-0.5 transition-transform">
              <strong class="font-semibold text-slate-900 dark:text-slate-200">Bài ${num}.</strong> ${les.title}
            </span>
            <span id="badge-nav-${num}" class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0"></span>
          </a>
        </li>
      `;
    });

    sidebarHtml += `</ul></div>`;
  });

  sidebarHtml += `
      </div>
    </div>
    <!-- Special Tools & Exam -->
    <div class="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
      <a href="#bang-thuat-ngu" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition">
        <i class="fa-solid fa-book-bookmark text-indigo-500"></i>
        <span>Bảng thuật ngữ &amp; Công thức</span>
      </a>
      <a href="#cong-cu-kinh-te" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition">
        <i class="fa-solid fa-calculator text-teal-500"></i>
        <span>Công cụ tính toán tương tác</span>
      </a>
      <a href="#dau-truong-45p" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800 transition">
        <i class="fa-solid fa-trophy text-amber-500"></i>
        <span>Đấu trường 45 phút</span>
      </a>
    </div>
  </div>`;

  // Lessons HTML
  let lessonsHtml = '';
  for (let i = 1; i <= 16; i++) {
    const l = lessons[i];
    const svgObj = svgMap[i];

    lessonsHtml += `
      <article id="bai-${i}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-8">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 uppercase tracking-wide">
                Bài ${i}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                ${l.part}
              </span>
              ${l.topic ? `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">${l.topic}</span>` : ''}
              ${l.badge ? `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${l.badge}</span>` : ''}
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              ${l.title}
            </h2>
          </div>
          <button type="button" onclick="toggleLessonComplete(${i})" id="btn-read-${i}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-slate-200 dark:border-slate-700 self-start sm:self-auto shrink-0">
            <i id="icon-read-${i}" class="fa-regular fa-circle-check text-slate-400"></i>
            <span id="text-read-${i}">Đánh dấu đã học</span>
          </button>
        </div>

        <!-- Summary -->
        ${l.summary ? `
          <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-indigo-600 dark:text-indigo-400 text-base mt-0.5 shrink-0"></i>
            <div class="leading-relaxed">
              <strong class="font-bold text-indigo-950 dark:text-indigo-200">Trọng tâm bài học:</strong> ${l.summary}
            </div>
          </div>
        ` : ''}

        <!-- Objectives Checklist -->
        ${Array.isArray(l.objectives) && l.objectives.length > 0 ? `
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-bullseye text-indigo-600"></i> Yêu cầu cần đạt chuẩn SGK
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${l.objectives.map(obj => `
                <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <i class="fa-solid fa-check text-indigo-500 mt-1 shrink-0 text-xs"></i>
                  <span>${obj}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- SVG Diagram if assigned -->
        ${svgObj ? `
          <div class="p-5 sm:p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50 space-y-3">
            <h3 class="font-bold text-sm sm:text-base text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
              <i class="fa-solid fa-diagram-project text-indigo-600"></i> ${svgObj.title}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400">${svgObj.caption}</p>
            <div class="p-2 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/40 flex justify-center overflow-x-auto shadow-inner">
              ${svgObj.svg}
            </div>
          </div>
        ` : ''}

        <!-- Content Sections -->
        <div class="space-y-6">
          ${Array.isArray(l.sections) ? l.sections.map(sec => {
            const heading = sec.heading || sec.title || '';
            const items = sec.items || [];
            const isGrid = sec.type === 'grid' || (items.length > 1 && typeof items[0] === 'object');

            return `
              <div class="space-y-3">
                ${heading ? `
                  <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <span>${heading}</span>
                  </h3>
                ` : ''}

                <div class="${isGrid ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-3'}">
                  ${items.map(it => formatItemContent(it)).join('')}
                </div>
              </div>
            `;
          }).join('') : ''}
        </div>

        <!-- 3 Interactive Mini Quiz Questions -->
        ${Array.isArray(l.quiz) && l.quiz.length > 0 ? `
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
              <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-circle-question text-indigo-500"></i> Luyện tập trắc nghiệm nhanh (3 câu)
              </h3>
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Kiểm tra tức thì</span>
            </div>

            <div class="space-y-6">
              ${l.quiz.map((q, qIdx) => `
                <div class="space-y-3" id="quiz-block-${i}-${qIdx}">
                  <p class="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <span class="text-indigo-600 dark:text-indigo-400 font-bold">Câu ${qIdx + 1}:</span> ${q.q}
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${q.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      return `
                        <button type="button" 
                          id="opt-${i}-${qIdx}-${optIdx}"
                          onclick="checkLessonQuiz(${i}, ${qIdx}, ${optIdx}, ${q.ans})" 
                          class="text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition flex items-start gap-2.5 group">
                          <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 text-slate-600 dark:text-slate-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            ${letter}
                          </span>
                          <span class="leading-relaxed flex-1">${opt}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                  <div id="exp-${i}-${qIdx}" class="hidden" data-explain="${(q.explain || '').replace(/"/g, '&quot;')}"></div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </article>
    `;
  }

  // HTML Page Assembly
  const finalHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa học Giáo dục Kinh tế và Pháp luật 12 (KNTT) - Hệ thống 16 bài chuẩn SGK</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- KaTeX for math & formula rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            indigo: {
              50: '#eef2ff',
              100: '#e0e7ff',
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81',
              950: '#1e1b4b',
            }
          }
        }
      }
    }
  </script>
  <style>
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .nav-link.active { background-color: rgba(99, 102, 241, 0.12); color: #4f46e5; font-weight: 700; }
    .dark .nav-link.active { background-color: rgba(99, 102, 241, 0.2); color: #a5b4fc; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 min-h-screen flex flex-col font-sans">

  <!-- Header / Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition">
          <i class="fa-solid fa-arrow-left text-sm"></i>
          <span class="text-xs font-bold hidden sm:inline">Trang chủ</span>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700"></div>
        <div class="flex items-center gap-2.5">
          <span class="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-sm shadow-indigo-500/30">
            12
          </span>
          <div>
            <h1 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">
              Giáo dục Kinh tế và Pháp luật 12
            </h1>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Kết nối tri thức • Đủ 16 bài (7 Kinh tế, 9 Pháp luật)
            </p>
          </div>
        </div>
      </div>

      <!-- Action Controls -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition">
          <i class="fa-solid fa-magnifying-glass text-xs"></i>
          <span class="hidden md:inline">Tìm kiếm</span>
          <kbd class="hidden md:inline-block px-1 rounded bg-white dark:bg-slate-900 text-[10px] font-mono border border-slate-200 dark:border-slate-700">⌘K</kbd>
        </button>

        <button type="button" onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện sáng/tối">
          <i id="theme-toggle-icon" class="fa-solid fa-moon text-xs"></i>
        </button>

        <button type="button" onclick="toggleSidebar()" class="lg:hidden w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
          <i class="fa-solid fa-bars text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1 flex gap-8">
    
    <!-- Sticky Desktop Sidebar -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
        ${sidebarHtml}
      </div>
    </aside>

    <!-- Mobile Drawer Sidebar -->
    <div id="mobile-sidebar" class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm hidden lg:hidden" onclick="toggleSidebar()">
      <div class="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl overflow-y-auto" onclick="event.stopPropagation()">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced text-indigo-600"></i> Mục lục KTPL 12
          </span>
          <button type="button" onclick="toggleSidebar()" class="w-8 h-8 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        ${sidebarHtml}
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 space-y-8">
      
      <!-- Top Hero Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-900 text-white shadow-lg space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md">
          <i class="fa-solid fa-award text-amber-300"></i> SGK Giáo Dục Kinh Tế và Pháp Luật 12 • Kết Nối Tri Thức
        </div>
        <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
          Hệ Thống Kiến Thức Cốt Lõi KTPL 12 — Trọn Vẹn 16 Bài
        </h2>
        <p class="text-xs sm:text-sm text-indigo-100 leading-relaxed max-w-3xl">
          Tài liệu hệ thống hóa toàn diện theo 2 phân hệ rõ ràng: <strong>Phần Một - Giáo dục Kinh tế (Bài 1–7)</strong> và <strong>Phần Hai - Giáo dục Pháp luật (Bài 8–16)</strong>. Tích hợp sơ đồ tư duy vector, bảng 13 thuật ngữ &amp; công thức cốt lõi, 4 công cụ tính toán tương tác và phòng thi Trạng Nguyên 45 phút chuẩn thi tốt nghiệp THPT Quốc gia.
        </p>
      </div>

      <!-- Lessons List -->
      ${lessonsHtml}

      <!-- Special Feature: Bảng Thuật Ngữ & Công Thức Cần Nhớ -->
      <article id="bang-thuat-ngu" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/60 shadow-sm space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-indigo-100 dark:border-indigo-900/40">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 uppercase tracking-wide">
              Tra cứu nhanh
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Bảng Thuật Ngữ và Công Thức Cần Nhớ
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Hệ thống 13 khái niệm, chỉ tiêu vĩ mô và nguyên tắc pháp luật quốc tế cốt lõi
            </p>
          </div>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-extrabold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th class="py-3 px-4 w-44">Thuật ngữ / Công thức</th>
                <th class="py-3 px-4">Nội dung cốt lõi &amp; Ý nghĩa chuẩn SGK</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              ${glossaryTable.map(row => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td class="py-3 px-4 font-bold text-indigo-700 dark:text-indigo-400 whitespace-nowrap align-top">
                    <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50">${row.term}</span>
                  </td>
                  <td class="py-3 px-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                    ${row.content}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </article>

      <!-- Special Feature: Công cụ tính toán tương tác -->
      <article id="cong-cu-kinh-te" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-900/60 shadow-sm space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-teal-100 dark:border-teal-900/40">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 uppercase tracking-wide">
              Công cụ thực hành
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Công Cụ Tính Toán Kinh Tế Tương Tác
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Thực hành tính toán trực tiếp các chỉ tiêu vĩ mô, lập ngân sách gia đình và phân tích hòa vốn kinh doanh
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${interactiveTools.map((tool, tIdx) => `
            <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300">Công cụ ${tIdx + 1}</span>
                  <span class="text-[11px] font-mono text-slate-500">${tool.unit}</span>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white mt-2">${tool.name}</h4>
                <div class="p-2.5 my-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs sm:text-sm font-mono overflow-x-auto text-teal-700 dark:text-teal-300 font-bold">
                  $${tool.formula}$
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">${tool.desc}</p>
                <div class="space-y-2">
                  ${tool.inputs.map(inp => `
                    <div>
                      <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-0.5">${inp.label}</label>
                      <input type="number" step="any" id="${inp.id}" value="${inp.default}" class="w-full px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-teal-500 font-mono">
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
                <button type="button" onclick="runKtplTool('${tool.id}')" class="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition">
                  Tính kết quả
                </button>
                <div id="res-${tool.id}" class="text-xs sm:text-sm font-bold text-teal-800 dark:text-teal-300 font-mono text-right"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </article>

      <!-- Special Feature: Đấu trường 45 phút -->
      <article id="dau-truong-45p" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 shadow-sm space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-100 dark:border-amber-900/40">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase tracking-wide">
              Phòng thi Trạng Nguyên
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Đấu Trường 45 Phút - KTPL 12
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Bài thi tổng hợp 20 câu hỏi trắc nghiệm khách quan chuẩn cấu trúc đề thi tốt nghiệp THPT Quốc gia
            </p>
          </div>
          <div class="flex items-center gap-3">
            <div class="px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-center">
              <span class="block text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">Thời gian còn lại</span>
              <span id="arena-timer" class="text-lg sm:text-xl font-black font-mono">45:00</span>
            </div>
            <button type="button" id="btn-start-arena" onclick="startArenaExam()" class="px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-amber-600/30 transition">
              Bắt đầu làm bài
            </button>
          </div>
        </div>

        <div class="space-y-6">
          ${arenaQuestions.map((q, idx) => `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
              <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-relaxed">
                <span class="text-amber-600 dark:text-amber-400 font-extrabold">Câu ${idx + 1}:</span> ${q.q}
              </p>
              <div class="space-y-2">
                ${q.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  return `
                    <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-600 bg-white dark:bg-slate-900 cursor-pointer transition text-xs sm:text-sm">
                      <input type="radio" name="arena_${idx}" value="${optIdx}" class="mt-0.5 text-amber-600 focus:ring-amber-500">
                      <span class="font-bold text-slate-500 dark:text-slate-400">${letter}.</span>
                      <span class="text-slate-700 dark:text-slate-300 leading-relaxed">${opt}</span>
                    </label>
                  `;
                }).join('')}
              </div>
              <div id="arena-exp-${idx}" class="hidden"></div>
            </div>
          `).join('')}
        </div>

        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button type="button" onclick="submitArenaExam()" class="w-full sm:w-auto px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-600/30 transition">
            Nộp bài &amp; Xem kết quả
          </button>
          <div id="arena-score-box" class="hidden px-5 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold text-sm">
          </div>
        </div>
      </article>

    </main>
  </div>

  <!-- Search Modal -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-start justify-center p-4 pt-16 sm:pt-24" onclick="closeSearchModal()">
    <div class="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden" onclick="event.stopPropagation()">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400 text-sm"></i>
        <input type="text" id="search-input" oninput="handleSearch()" placeholder="Tìm kiếm theo tên bài, thuật ngữ, công thức..." class="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-400">
        <button type="button" onclick="closeSearchModal()" class="w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center">
          <i class="fa-solid fa-xmark text-xs"></i>
        </button>
      </div>
      <div id="search-results" class="p-3 max-h-96 overflow-y-auto space-y-1">
        <p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tìm kiếm 16 bài học KTPL 12...</p>
      </div>
    </div>
  </div>

  <!-- JavaScript Engine -->
  <script>
    const searchData = ${JSON.stringify(searchItems)};
    const arenaQuestions = ${JSON.stringify(arenaQuestions.map((q, idx) => ({ answer: q.ans, explanation: q.explain })))};
    
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;

    // Theme Management
    function initTheme() {
      const isDark = localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle-icon').className = 'fa-solid fa-sun text-xs text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-toggle-icon').className = 'fa-solid fa-moon text-xs';
      }
    }
    initTheme();

    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      document.getElementById('theme-toggle-icon').className = isDark ? 
        'fa-solid fa-sun text-xs text-amber-400' : 'fa-solid fa-moon text-xs';
    }

    function toggleSidebar() {
      const el = document.getElementById('mobile-sidebar');
      el.classList.toggle('hidden');
    }

    // Progress Tracker
    function getCompletedLessons() {
      try {
        return JSON.parse(localStorage.getItem('ktpl12_completed') || '[]');
      } catch (e) {
        return [];
      }
    }

    function updateProgressUI() {
      const done = getCompletedLessons();
      const total = 16;
      const pct = Math.round((done.length / total) * 100);

      const bar = document.getElementById('sidebar-progress-bar');
      const txt = document.getElementById('sidebar-progress-text');
      if (bar) bar.style.width = pct + '%';
      if (txt) txt.innerText = done.length + '/' + total + ' bài (' + pct + '%)';

      for (let i = 1; i <= total; i++) {
        const isDone = done.includes(i);
        const btn = document.getElementById('btn-read-' + i);
        const icon = document.getElementById('icon-read-' + i);
        const text = document.getElementById('text-read-' + i);
        const navBadge = document.getElementById('badge-nav-' + i);

        if (btn) {
          if (isDone) {
            btn.className = 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700 self-start sm:self-auto shrink-0 shadow-sm';
            if (icon) icon.className = 'fa-solid fa-circle-check text-indigo-500';
            if (text) text.innerText = 'Đã hoàn thành';
          } else {
            btn.className = 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-slate-200 dark:border-slate-700 self-start sm:self-auto shrink-0';
            if (icon) icon.className = 'fa-regular fa-circle-check text-slate-400';
            if (text) text.innerText = 'Đánh dấu đã học';
          }
        }

        if (navBadge) {
          navBadge.className = isDone ? 
            'w-2 h-2 rounded-full bg-indigo-500 shrink-0 shadow-sm' : 
            'w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0';
        }
      }
    }

    function toggleLessonComplete(num) {
      let done = getCompletedLessons();
      if (done.includes(num)) {
        done = done.filter(x => x !== num);
      } else {
        done.push(num);
      }
      localStorage.setItem('ktpl12_completed', JSON.stringify(done));
      updateProgressUI();
    }
    document.addEventListener('DOMContentLoaded', updateProgressUI);

    // Mini Quiz Checker
    function checkLessonQuiz(lessonNum, qIdx, chosenIdx, correctIdx) {
      const expDiv = document.getElementById('exp-' + lessonNum + '-' + qIdx);
      const totalOptions = 4;

      for (let i = 0; i < totalOptions; i++) {
        const optBtn = document.getElementById('opt-' + lessonNum + '-' + qIdx + '-' + i);
        if (!optBtn) continue;
        optBtn.disabled = true;
        if (i === correctIdx) {
          optBtn.className = 'text-left px-3.5 py-2.5 rounded-xl border border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold flex items-start gap-2.5';
        } else if (i === chosenIdx && chosenIdx !== correctIdx) {
          optBtn.className = 'text-left px-3.5 py-2.5 rounded-xl border border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 text-xs sm:text-sm flex items-start gap-2.5';
        } else {
          optBtn.className = 'text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 text-xs sm:text-sm flex items-start gap-2.5 opacity-60';
        }
      }

      expDiv.classList.remove('hidden');
      const explainText = expDiv.getAttribute('data-explain') || '';
      if (chosenIdx === correctIdx) {
        expDiv.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-1';
        expDiv.innerHTML = '<div class="font-bold"><i class="fa-solid fa-check text-emerald-600"></i> Chính xác!</div>' + (explainText ? '<div class="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">' + explainText + '</div>' : '');
      } else {
        expDiv.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 space-y-1';
        expDiv.innerHTML = '<div class="font-bold"><i class="fa-solid fa-xmark text-rose-600"></i> Chưa chính xác!</div>' + (explainText ? '<div class="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">' + explainText + '</div>' : '');
      }
    }

    // Interactive KTPL Tools
    function runKtplTool(toolId) {
      const resEl = document.getElementById('res-' + toolId);
      if (!resEl) return;

      if (toolId === 'calc-gdp-expenditure') {
        const c = parseFloat(document.getElementById('gdp_c').value) || 0;
        const i = parseFloat(document.getElementById('gdp_i').value) || 0;
        const g = parseFloat(document.getElementById('gdp_g').value) || 0;
        const x = parseFloat(document.getElementById('gdp_x').value) || 0;
        const m = parseFloat(document.getElementById('gdp_m').value) || 0;
        const gdp = c + i + g + (x - m);
        resEl.innerHTML = '= <strong>' + gdp.toLocaleString('en-US') + '</strong> tỉ USD (NX: ' + (x - m >= 0 ? '+' : '') + (x - m) + ')';
      } else if (toolId === 'calc-gdp-per-capita') {
        const total = parseFloat(document.getElementById('gdp_total_val').value);
        const pop = parseFloat(document.getElementById('gdp_pop_val').value);
        if (!total || !pop || pop <= 0) {
          resEl.innerText = 'Vui lòng nhập số hợp lệ!';
          return;
        }
        const val = Math.round(total / pop);
        resEl.innerHTML = '= <strong>' + val.toLocaleString('en-US') + '</strong> USD/người';
      } else if (toolId === 'calc-family-budget') {
        const inc = parseFloat(document.getElementById('fam_income').value);
        if (!inc || inc <= 0) {
          resEl.innerText = 'Vui lòng nhập số tiền hợp lệ!';
          return;
        }
        const essential = inc * 0.5;
        const flexible = inc * 0.3;
        const savings = inc * 0.2;
        resEl.innerHTML = '<span class="text-indigo-600 font-bold">50%: ' + essential.toLocaleString('vi-VN') + 'đ</span> | 30%: ' + flexible.toLocaleString('vi-VN') + 'đ | <span class="text-emerald-600 font-bold">20%: ' + savings.toLocaleString('vi-VN') + 'đ</span>';
      } else if (toolId === 'calc-break-even') {
        const fc = parseFloat(document.getElementById('be_fc').value);
        const p = parseFloat(document.getElementById('be_price').value);
        const vc = parseFloat(document.getElementById('be_vc').value);
        if (!fc || !p || !vc || (p - vc) <= 0) {
          resEl.innerText = 'Giá bán phải lớn hơn chi phí biến đổi!';
          return;
        }
        const beq = Math.ceil(fc / (p - vc));
        resEl.innerHTML = '= <strong>' + beq.toLocaleString('en-US') + '</strong> sản phẩm (Doanh thu: ' + (beq * p).toLocaleString('vi-VN') + 'đ)';
      }
    }

    // Arena 45-Minute Logic
    function startArenaExam() {
      const btn = document.getElementById('btn-start-arena');
      btn.disabled = true;
      btn.innerText = 'Đang làm bài...';
      btn.classList.add('opacity-50', 'cursor-not-allowed');

      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        arenaSecondsLeft--;
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          submitArenaExam();
          alert('Hết giờ làm bài 45 phút! Hệ thống đã tự động nộp bài.');
        } else {
          const m = Math.floor(arenaSecondsLeft / 60);
          const s = arenaSecondsLeft % 60;
          document.getElementById('arena-timer').innerText = 
            (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        }
      }, 1000);
    }

    function submitArenaExam() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      let score = 0;

      arenaQuestions.forEach((q, idx) => {
        const radios = document.getElementsByName('arena_' + idx);
        let selected = -1;
        for (let r of radios) {
          if (r.checked) {
            selected = parseInt(r.value);
            break;
          }
        }

        const expDiv = document.getElementById('arena-exp-' + idx);
        expDiv.classList.remove('hidden');

        if (selected === q.answer) {
          score++;
          expDiv.className = 'p-3 rounded-xl text-xs sm:text-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expDiv.innerHTML = '<strong>Đúng!</strong> ' + q.explanation;
        } else {
          expDiv.className = 'p-3 rounded-xl text-xs sm:text-sm bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expDiv.innerHTML = '<strong>Chưa đúng!</strong> ' + q.explanation;
        }
      });

      const box = document.getElementById('arena-score-box');
      box.classList.remove('hidden');
      const point = (score / 20) * 10;
      box.innerHTML = '<i class="fa-solid fa-trophy text-amber-500 mr-1.5"></i> Kết quả của bạn: <strong>' + score + '/20 câu</strong> (' + point.toFixed(1) + '/10 điểm)';
      box.scrollIntoView({ behavior: 'smooth' });
    }

    // Modal Search Handlers
    function openSearchModal() {
      document.getElementById('search-modal').classList.remove('hidden');
      document.getElementById('search-input').focus();
    }

    function closeSearchModal() {
      document.getElementById('search-modal').classList.add('hidden');
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
      }
    });

    function handleSearch() {
      const q = document.getElementById('search-input').value.toLowerCase().trim();
      const container = document.getElementById('search-results');
      if (!q) {
        container.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tìm kiếm 16 bài học KTPL 12...</p>';
        return;
      }

      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) || 
        item.badge.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Không tìm thấy nội dung phù hợp với từ khoá.</p>';
        return;
      }

      container.innerHTML = filtered.map(item => \`
        <a href="#\${item.id}" onclick="closeSearchModal()" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">\${item.badge}</span>
            <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">\${item.title}</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">\${item.desc}</p>
        </a>
      \`).join('');
    }

    // Safe KaTeX Rendering
    function renderMathSafely() {
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
    document.addEventListener('DOMContentLoaded', renderMathSafely);
    window.addEventListener('load', renderMathSafely);
  </script>
</body>
</html>`;

  // Write out to all 4 files
  const out1 = path.join(__dirname, '../courses/ktpl_12.html');
  const out2 = path.join(__dirname, '../courses/gdktpl_12.html');
  const out3 = path.join(__dirname, '../courses/ktpl12.html');
  const out4 = path.join(__dirname, '../courses/gdktpl12.html');

  fs.writeFileSync(out1, finalHtml, 'utf8');
  fs.writeFileSync(out2, finalHtml, 'utf8');
  fs.writeFileSync(out3, finalHtml, 'utf8');
  fs.writeFileSync(out4, finalHtml, 'utf8');

  console.log(`Successfully built KTPL 12:`);
  console.log(`- ${out1} (${finalHtml.length.toLocaleString()} bytes)`);
  console.log(`- ${out2} (${finalHtml.length.toLocaleString()} bytes)`);
  console.log(`- ${out3} (${finalHtml.length.toLocaleString()} bytes)`);
  console.log(`- ${out4} (${finalHtml.length.toLocaleString()} bytes)`);
}

buildHtml();
