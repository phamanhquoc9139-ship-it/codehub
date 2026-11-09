// scratch/build_ktpl11.js
// Script build trang KTPL 11 hoàn chỉnh chuẩn Kết nối tri thức đủ 21 bài
// Đồng bộ 4 đường dẫn:
// courses/ktpl_11.html, courses/ktpl11.html, courses/gdktpl_11.html, courses/gdktpl11.html

const fs = require('fs');
const path = require('path');

const master = require('./ktpl11_data_master.js');
const coreCardsData = require('./ktpl11_core_cards.js');
const practicalCasesData = require('./ktpl11_cases.js');

function formatItemContent(item) {
  if (typeof item === 'string') {
    return `
      <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
        <div class="leading-relaxed flex-1">${item}</div>
      </div>
    `;
  }

  if (typeof item === 'object' && item !== null) {
    let innerHtml = '';
    
    if (item.badge) {
      innerHtml += `<span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 uppercase tracking-wider mb-2 border border-indigo-200 dark:border-indigo-800">${item.badge}</span>`;
    }
    
    if (item.title) {
      innerHtml += `
        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <i class="fa-solid fa-scale-balanced text-indigo-500 text-xs"></i>
          <span>${item.title}</span>
        </h4>
      `;
    }

    if (Array.isArray(item.points) && item.points.length > 0) {
      innerHtml += `
        <div class="space-y-2 mt-2">
          ${item.points.map(pt => `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
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
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                <div class="leading-relaxed flex-1">${cleanLine}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    return `
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 shadow-sm transition hover:shadow-md">
        ${innerHtml}
      </div>
    `;
  }

  return '';
}

function renderLessonCard(id) {
  const les = master.lessons[id];
  const core = coreCardsData[id] || [];
  const svgInfo = master.svgMap[id];
  const practicals = practicalCasesData[id] || [];
  const quiz = les.quiz || [];

  return `
    <article id="bai-${id}" data-lesson-card="${id}" class="lesson-article scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8">
      <!-- Card Header -->
      <div class="p-5 md:p-6 border-b border-slate-100 dark:border-slate-700/70 bg-indigo-50/70 dark:bg-indigo-950/25">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-600 text-white shadow-sm">BÀI ${id} • KTPL 11</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">${les.chapter}</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700">📖 SGK KNTT</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="toggleBookmark(${id})" id="bm-btn-${id}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1" title="Đánh dấu bài học">
              <span id="bm-icon-${id}">☆</span> <span class="hidden sm:inline">Lưu</span>
            </button>
            <button type="button" onclick="toggleDone(${id})" id="done-btn-${id}" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-indigo-500 transition flex items-center gap-1">
              <span id="done-icon-${id}">○</span> <span>Hoàn thành</span>
            </button>
          </div>
        </div>

        <h3 class="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
          Bài ${id}. ${les.title}
        </h3>

        <p class="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Trọng tâm bài học:</strong> ${les.objectives ? les.objectives.join('; ') : ''}
        </p>

        <!-- Quick Activity Jump Pills -->
        <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">Cấu trúc bài:</span>
          <a href="#b${id}-cong-thuc" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">A. Quy tắc cốt lõi (4)</a>
          <a href="#b${id}-noi-dung" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">B. Nội dung chi tiết (${les.sections ? les.sections.length : 0} mục)</a>
          <a href="#b${id}-mo-hinh" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">C. Sơ đồ tư duy</a>
          <a href="#b${id}-thuc-hanh" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">D. Tình huống & Thực hành</a>
          <a href="#b${id}-trac-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-600 hover:text-white transition">E. Trắc nghiệm (3 câu)</a>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-5 md:p-6 space-y-8">
        
        <!-- PHẦN A: CÔNG THỨC, ĐỊNH LUẬT & NGUYÊN TẮC CỐT LÕI -->
        <section id="b${id}-cong-thuc" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-600 text-white">Phần A</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nguyên tắc, Quy định & Khái niệm cốt lõi</h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${core.map(c => `
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">⚖</span>
                <div>
                  <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug">${c.title}</div>
                  <div class="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">${c.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- PHẦN B: NỘI DUNG CHI TIẾT TRỌNG TÂM THEO SGK -->
        <section id="b${id}-noi-dung" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-600 text-white">Phần B</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nội dung chi tiết trọng tâm theo SGK</h4>
          </div>
          <div class="space-y-4">
            ${les.sections.map(sec => `
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
                <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-700/60">
                  <span class="w-1.5 h-5 rounded-full bg-indigo-500 shrink-0"></span>
                  ${sec.heading}
                </h4>
                <div class="grid grid-cols-1 ${sec.items && sec.items.length > 1 ? 'md:grid-cols-2' : ''} gap-3 mt-3">
                  ${sec.items.map(it => formatItemContent(it)).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- PHẦN C: MÔ HÌNH TRỰC QUAN / SƠ ĐỒ TƯ DUY -->
        <section id="b${id}-mo-hinh" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-600 text-white">Phần C</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Sơ đồ tư duy & Trực quan hóa kinh tế – pháp luật</h4>
          </div>
          <div class="p-4 md:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <div class="text-xs font-bold text-slate-400 mb-2.5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <span>${svgInfo.title}</span>
            </div>
            ${master.svgs[svgInfo.key] || ''}
          </div>
        </section>

        <!-- PHẦN D: TÌNH HUỐNG & THỰC HÀNH VẬN DỤNG -->
        <section id="b${id}-thuc-hanh" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-600 text-white">Phần D</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Tình huống đời sống & Thực hành vận dụng</h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${practicals.map(p => `
              <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/50">
                <div class="flex items-center gap-2 text-xs md:text-sm font-bold text-amber-900 dark:text-amber-200 mb-1.5">
                  <span class="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-800/80 text-amber-900 dark:text-amber-200 flex items-center justify-center text-[10px] font-black shrink-0">!</span>
                  <span>${p.title}</span>
                </div>
                <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">${p.desc}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- PHẦN E: LUYỆN TẬP TRẮC NGHIỆM (3 CÂU) -->
        <section id="b${id}-trac-nghiem" class="scroll-mt-24">
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-600 text-white">Phần E</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Luyện tập trắc nghiệm nhanh (3 câu)</h4>
            </div>
            <span class="text-[11px] font-bold text-slate-400">Kiểm tra tức thì</span>
          </div>
          <div class="space-y-3.5">
            ${quiz.map((q, qIdx) => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-2 leading-relaxed">
                  <span class="text-indigo-600 dark:text-indigo-400 font-bold">Câu ${qIdx + 1}:</span> ${q.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  ${q.options.map((opt, optIdx) => `
                    <button type="button" onclick="checkQuizAnswer(${id}, ${qIdx}, ${optIdx}, ${q.answer !== undefined ? q.answer : 0})" id="q-btn-${id}-${qIdx}-${optIdx}" class="quiz-btn-${id}-${qIdx} p-2.5 rounded-xl text-left text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-slate-700/60 transition flex items-start gap-2">
                      <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center shrink-0 text-[10px]">${['A', 'B', 'C', 'D'][optIdx]}</span>
                      <span class="flex-1">${opt.replace(/^[A-D]\.\s*/, '')}</span>
                    </button>
                  `).join('')}
                </div>
                <div id="q-feedback-${id}-${qIdx}" class="hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed"></div>
              </div>
            `).join('')}
          </div>
        </section>

      </div>
    </article>
  `;
}

function buildPageHtml() {
  const allArticlesHtml = [];
  for (let i = 1; i <= 21; i++) {
    allArticlesHtml.push(renderLessonCard(i));
  }

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giáo dục Kinh tế và Pháp luật 11 — Trọn bộ 9 chủ đề, 21 bài chuẩn Kết nối tri thức</title>
  <meta name="description" content="Tổng hợp toàn diện kiến thức Giáo dục Kinh tế và Pháp luật lớp 11 chương trình Kết nối tri thức với cuộc sống. Đầy đủ 9 chủ đề, 21 bài học, 8 sơ đồ tư duy vector, 3 công cụ tính toán mô phỏng, bảng ôn tập nhanh và Đấu trường Trạng Nguyên 20 câu 45 phút.">
  
  <!-- Tailwind CSS & FontAwesome -->
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
              800: '#3730a3',
              900: '#312e81'
            }
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    
    /* Smooth focus rings */
    *:focus-visible {
      outline: 2px solid #4f46e5;
      outline-offset: 2px;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 min-h-screen font-sans antialiased transition-colors duration-200">

  <!-- TOP APP BAR -->
  <header class="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Quay về trang chủ">
          <div class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black shadow-sm">
            <i class="fa-solid fa-scale-balanced text-sm"></i>
          </div>
          <span class="hidden sm:inline font-black text-slate-900 dark:text-white tracking-tight text-sm">Học Liệu Số</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <div class="flex items-center gap-1.5">
          <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">Lớp 11</span>
          <h1 class="text-sm font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px] md:max-w-xs">Kinh tế & Pháp luật 11</h1>
        </div>
      </div>

      <!-- Right: Search, Stats & Theme Toggle -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button type="button" onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Tìm kiếm bài học (Ctrl+K)">
          <i class="fa-solid fa-magnifying-glass text-[11px]"></i>
          <span class="hidden md:inline">Tìm nhanh...</span>
          <kbd class="hidden md:inline px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-[10px] border border-slate-300 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <a href="#dau-truong-arena" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition">
          <i class="fa-solid fa-trophy text-[11px]"></i>
          <span>Đấu trường 20 câu</span>
        </a>

        <!-- Dark mode toggle -->
        <button type="button" id="theme-toggle" class="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Chuyển chế độ sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- MAIN CONTAINER WITH SIDEBAR -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-8">
    
    <!-- LEFT STICKY SIDEBAR -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 space-y-4">
        
        <!-- Progress Box -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center justify-between text-xs font-bold mb-2">
            <span class="text-slate-600 dark:text-slate-300">Tiến độ 21 bài học</span>
            <span id="progress-text" class="text-indigo-600 dark:text-indigo-400">0/21 hoàn thành</span>
          </div>
          <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div id="progress-bar" class="bg-indigo-500 h-full w-0 transition-all duration-300"></div>
          </div>
        </div>

        <!-- Lessons Index Navigation -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm max-h-[calc(100vh-16rem)] overflow-y-auto">
          
          <!-- Phần 1 -->
          <div class="mb-3">
            <div class="flex items-center justify-between px-2 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 text-xs font-black mb-1.5">
              <span>Phần I. Giáo dục kinh tế</span>
              <span class="text-[10px] font-bold">Bài 1–8</span>
            </div>
            <nav class="space-y-0.5">
              ${[1, 2, 3, 4, 5, 6, 7, 8].map(id => `
                <a href="#bai-${id}" id="nav-item-${id}" class="sidebar-item flex items-center justify-between p-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  <span class="truncate">Bài ${id}. ${master.lessons[id].title}</span>
                  <span id="nav-check-${id}" class="text-indigo-500 text-xs hidden">✓</span>
                </a>
              `).join('')}
            </nav>
          </div>

          <!-- Phần 2 -->
          <div class="mb-3">
            <div class="flex items-center justify-between px-2 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs font-black mb-1.5">
              <span>Phần II. Giáo dục pháp luật</span>
              <span class="text-[10px] font-bold">Bài 9–21</span>
            </div>
            <nav class="space-y-0.5">
              ${[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map(id => `
                <a href="#bai-${id}" id="nav-item-${id}" class="sidebar-item flex items-center justify-between p-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  <span class="truncate">Bài ${id}. ${master.lessons[id].title}</span>
                  <span id="nav-check-${id}" class="text-emerald-500 text-xs hidden">✓</span>
                </a>
              `).join('')}
            </nav>
          </div>

          <div class="pt-2 mt-2 border-t border-slate-100 dark:border-slate-700 space-y-1">
            <a href="#cong-cu-tinh-toan" class="sidebar-item flex items-center gap-2 p-1.5 rounded-lg text-xs font-bold text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700/60 transition">
              <i class="fa-solid fa-calculator text-xs"></i>
              <span>3 Công cụ tính toán</span>
            </a>
            <a href="#bang-on-tap-nhanh" class="sidebar-item flex items-center gap-2 p-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition">
              <i class="fa-solid fa-list-check text-indigo-500 text-xs"></i>
              <span>Bảng ôn tập nhanh</span>
            </a>
            <a href="#dau-truong-arena" class="sidebar-item flex items-center gap-2 p-1.5 rounded-lg text-xs font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700/60 transition">
              <i class="fa-solid fa-trophy text-amber-500 text-xs"></i>
              <span>Đấu trường Trạng Nguyên</span>
            </a>
          </div>

        </div>

      </div>
    </aside>

    <!-- MAIN ARTICLES CONTENT -->
    <main class="flex-1 min-w-0">
      
      <!-- HERO BANNER -->
      <section class="mb-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
        <div class="relative z-10 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur border border-white/20 text-indigo-200 mb-3">
            <i class="fa-solid fa-book-bookmark"></i>
            <span>Bộ sách Kết nối tri thức với cuộc sống</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Giáo dục Kinh tế và Pháp luật 11
          </h2>
          <p class="mt-3 text-xs sm:text-sm text-indigo-100 leading-relaxed">
            Hệ thống hóa toàn bộ 9 chủ đề, 21 bài học theo mục lục chuẩn: Cạnh tranh, cung – cầu, lạm phát, thất nghiệp, thị trường lao động, ý tưởng kinh doanh, đạo đức kinh doanh, văn hóa tiêu dùng và hệ thống quyền bình đẳng, quyền dân chủ, quyền tự do cơ bản của công dân theo Hiến pháp.
          </p>
          <div class="mt-5 flex flex-wrap gap-2 text-xs font-bold">
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">📚 21 Bài học SGK</span>
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">⚖️ 9 Chủ đề cốt lõi</span>
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">📊 8 Sơ đồ tư duy SVG</span>
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">🧮 3 Công cụ mô phỏng</span>
            <span class="px-3 py-1 rounded-xl bg-white/10 border border-white/15">⏱️ Đấu trường 45 phút</span>
          </div>
        </div>
      </section>

      <!-- 21 LESSON ARTICLES -->
      ${allArticlesHtml.join('\n')}

      <!-- 3 CÔNG CỤ TÍNH TOÁN & MÔ PHỎNG TƯƠNG TÁC -->
      <section id="cong-cu-tinh-toan" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8 p-5 md:p-8">
        <div class="flex items-center gap-2 mb-4">
          <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-sky-600 text-white shadow-sm">CÔNG CỤ TƯƠNG TÁC</span>
          <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">3 Công cụ tính toán & Mô phỏng kinh tế KTPL 11</h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Tool 1: CPI Inflation Calculator -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
                <i class="fa-solid fa-chart-line text-sky-500"></i>
                <span>1. Máy tính Tỉ lệ Lạm phát CPI</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">Tính tỉ lệ lạm phát (%) từ chỉ số CPI kì gốc và kì hiện tại.</p>
              
              <div class="space-y-2.5">
                <div>
                  <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">Chỉ số CPI kì gốc (CPI₀):</label>
                  <input type="number" id="calc-cpi0" value="100" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">Chỉ số CPI kì hiện tại (CPI₁):</label>
                  <input type="number" id="calc-cpi1" value="108" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                </div>
              </div>
            </div>

            <div class="mt-4">
              <button type="button" onclick="calculateInflation()" class="w-full py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition">
                Tính tỉ lệ lạm phát
              </button>
              <div id="calc-inflation-result" class="mt-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs">
                Kết quả: <strong>8.00%</strong> (Lạm phát vừa phải)
              </div>
            </div>
          </div>

          <!-- Tool 2: Supply Demand Simulator -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
                <i class="fa-solid fa-balance-scale text-indigo-500"></i>
                <span>2. Mô phỏng Cân bằng Cung – Cầu</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">Nhập số lượng Cung và Cầu để phân tích xu hướng giá.</p>
              
              <div class="space-y-2.5">
                <div>
                  <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">Lượng Cung (S - Sản phẩm):</label>
                  <input type="number" id="sim-supply" value="500" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">Lượng Cầu (D - Sản phẩm):</label>
                  <input type="number" id="sim-demand" value="800" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                </div>
              </div>
            </div>

            <div class="mt-4">
              <button type="button" onclick="simulateSupplyDemand()" class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition">
                Phân tích thị trường
              </button>
              <div id="sim-sd-result" class="mt-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs">
                Trạng thái: <strong>Cung &lt; Cầu (Thiếu 300 sp)</strong> ➔ Giá có xu hướng tăng!
              </div>
            </div>
          </div>

          <!-- Tool 3: Quick SWOT Advisor -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
                <i class="fa-solid fa-lightbulb text-amber-500"></i>
                <span>3. Trợ lí Đánh giá SWOT Nhanh</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">Chọn trạng thái để nhận khuyến nghị chiến lược kinh doanh.</p>
              
              <div class="space-y-2">
                <div>
                  <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">Lợi thế nội tại chủ yếu:</label>
                  <select id="swot-internal" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                    <option value="S">Điểm mạnh vượt trội (S: Vốn tốt, công nghệ cao)</option>
                    <option value="W">Điểm yếu hạn chế (W: Thiếu vốn, chưa kinh nghiệm)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">Bối cảnh thị trường bên ngoài:</label>
                  <select id="swot-external" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                    <option value="O">Cơ hội thuận lợi (O: Nhu cầu mới, ít đối thủ)</option>
                    <option value="T">Thách thức gay gắt (T: Đối thủ mạnh, giá tăng)</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <button type="button" onclick="analyzeSwotStrategy()" class="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-sm transition">
                Nhận định chiến lược
              </button>
              <div id="swot-strategy-result" class="mt-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs">
                Chiến lược: <strong>SO (Tấn công)</strong> ➔ Tận dụng tối đa điểm mạnh để bứt phá!
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- BẢNG ÔN TẬP NHANH & CÔNG THỨC TRỌNG TÂM -->
      <section id="bang-on-tap-nhanh" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8 p-5 md:p-8">
        <div class="flex items-center gap-2 mb-4">
          <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-600 text-white shadow-sm">BẢNG ÔN TẬP NHANH</span>
          <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Tổng hợp 7 mạch kiến thức & Công thức cốt lõi</h3>
        </div>

        <!-- Review Table -->
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 mb-8">
          <table class="w-full text-left text-xs md:text-sm">
            <thead class="bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th class="p-3.5">Mạch kiến thức</th>
                <th class="p-3.5">Bài</th>
                <th class="p-3.5">Nội dung cốt lõi điều cần nắm</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
              ${master.reviewTable.map(r => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td class="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                    <span class="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 mb-1">${r.badge}</span><br>
                    ${r.topic}
                  </td>
                  <td class="p-3.5 font-semibold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">${r.lessons}</td>
                  <td class="p-3.5 text-slate-600 dark:text-slate-300 leading-relaxed">${r.content}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Core Formulas and Principles -->
        <div>
          <h4 class="text-base md:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
            <i class="fa-solid fa-square-root-variable text-indigo-500"></i>
            <span>Công thức và mối quan hệ kinh tế – pháp luật nên nhớ</span>
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            ${master.coreFormulas.map(f => `
              <div class="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/60">
                <div class="text-xs md:text-sm font-bold text-indigo-900 dark:text-indigo-200 mb-1">${f.name}</div>
                <div class="p-2 rounded-xl bg-white dark:bg-slate-900 font-mono text-xs text-indigo-700 dark:text-indigo-300 my-1.5 border border-indigo-100 dark:border-indigo-800/70">${f.formula}</div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">${f.note}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN KTPL 11 (20 CÂU, 45 PHÚT) -->
      <section id="dau-truong-arena" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-12 p-5 md:p-8">
        
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-amber-500 text-white shadow-sm">ĐẤU TRƯỜNG TRẠNG NGUYÊN</span>
              <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Kiểm tra tổng hợp 20 câu</h3>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Đề thi bao quát toàn bộ 9 chủ đề, 21 bài học KTPL 11; thời gian làm bài chuẩn 45 phút.</p>
          </div>
          
          <!-- Timer and Control -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono font-bold text-sm">
              <i class="fa-regular fa-clock text-amber-500"></i>
              <span id="arena-timer">45:00</span>
            </div>
            <button type="button" onclick="startArenaExam()" id="arena-start-btn" class="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm">
              Bắt đầu làm bài
            </button>
            <button type="button" onclick="submitArenaExam()" id="arena-submit-btn" class="hidden px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition shadow-sm">
              Nộp bài chấm điểm
            </button>
          </div>
        </div>

        <!-- Result Box -->
        <div id="arena-result-box" class="hidden mb-6 p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 id="arena-result-title" class="font-black text-lg text-indigo-900 dark:text-indigo-200">Kết quả bài thi: 20/20 câu (10.0 điểm)</h4>
              <p id="arena-result-msg" class="text-xs text-indigo-700 dark:text-indigo-300 mt-0.5">Xuất sắc! Bạn đã nắm vững toàn diện kiến thức Giáo dục Kinh tế và Pháp luật 11.</p>
            </div>
            <button type="button" onclick="resetArenaExam()" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-indigo-800 dark:text-indigo-200 font-bold text-xs border border-indigo-300 dark:border-indigo-700 hover:bg-indigo-100 transition">
              Làm lại bài thi
            </button>
          </div>
        </div>

        <!-- 20 Arena Questions List -->
        <div class="space-y-4">
          ${master.arenaQuestions.map((q, idx) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-2 leading-relaxed">
                <span class="text-indigo-600 dark:text-indigo-400 font-black">Câu ${idx + 1}:</span> ${q.q}
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                ${q.options.map((opt, oIdx) => `
                  <label class="arena-opt-label-${idx} flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-indigo-400 transition text-xs text-slate-700 dark:text-slate-300">
                    <input type="radio" name="arena-q-${idx}" value="${oIdx}" class="mt-0.5 text-indigo-600 focus:ring-indigo-500">
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
              <div id="arena-explain-${idx}" class="hidden mt-2.5 p-3 rounded-xl text-xs leading-relaxed"></div>
            </div>
          `).join('')}
        </div>

      </section>

    </main>

  </div>

  <!-- SEARCH MODAL (Ctrl+K) -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 pt-20">
    <div class="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      <div class="p-3 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
        <i class="fa-solid fa-magnifying-glass text-slate-400 ml-2"></i>
        <input type="text" id="search-input" placeholder="Tìm kiếm bài học, lạm phát, cung cầu, quyền bầu cử, thư tín..." class="w-full bg-transparent border-0 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none">
        <button type="button" onclick="closeSearchModal()" class="px-2 py-1 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">ESC</button>
      </div>
      <div id="search-results" class="max-h-80 overflow-y-auto p-2 space-y-1">
        <!-- Results dynamically inserted here -->
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // 1. Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(!isDark);
    });

    // 2. Lesson Done & Bookmark State
    const PROGRESS_KEY = 'ktpl11_progress';
    let progressState = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{"done":[],"bookmarks":[]}');

    function updateProgressUi() {
      const doneCount = progressState.done.length;
      document.getElementById('progress-text').innerText = doneCount + '/21 hoàn thành';
      document.getElementById('progress-bar').style.width = (doneCount / 21 * 100) + '%';

      for (let i = 1; i <= 21; i++) {
        const isDone = progressState.done.includes(i);
        const doneBtn = document.getElementById('done-btn-' + i);
        const doneIcon = document.getElementById('done-icon-' + i);
        const navCheck = document.getElementById('nav-check-' + i);

        if (doneBtn && doneIcon) {
          if (isDone) {
            doneBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-indigo-500 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 transition flex items-center gap-1';
            doneIcon.innerText = '●';
          } else {
            doneBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-indigo-500 transition flex items-center gap-1';
            doneIcon.innerText = '○';
          }
        }
        if (navCheck) {
          navCheck.style.display = isDone ? 'inline' : 'none';
        }

        const isBm = progressState.bookmarks.includes(i);
        const bmIcon = document.getElementById('bm-icon-' + i);
        if (bmIcon) {
          bmIcon.innerText = isBm ? '★' : '☆';
          bmIcon.className = isBm ? 'text-amber-500' : '';
        }
      }
    }

    function toggleDone(id) {
      const idx = progressState.done.indexOf(id);
      if (idx >= 0) progressState.done.splice(idx, 1);
      else progressState.done.push(id);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressState));
      updateProgressUi();
    }

    function toggleBookmark(id) {
      const idx = progressState.bookmarks.indexOf(id);
      if (idx >= 0) progressState.bookmarks.splice(idx, 1);
      else progressState.bookmarks.push(id);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressState));
      updateProgressUi();
    }

    updateProgressUi();

    // 3. Inline 3-Question Quiz Checking
    function checkQuizAnswer(lessonId, questionIdx, selectedOption, correctOption) {
      const allBtns = document.querySelectorAll('.quiz-btn-' + lessonId + '-' + questionIdx);
      allBtns.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:border-indigo-400', 'hover:bg-indigo-50/50');
        if (idx === correctOption) {
          btn.className = 'p-2.5 rounded-xl text-left text-xs bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold flex items-start gap-2';
        } else if (idx === selectedOption) {
          btn.className = 'p-2.5 rounded-xl text-left text-xs bg-rose-50 dark:bg-rose-950/80 border-2 border-rose-500 text-rose-800 dark:text-rose-200 font-bold flex items-start gap-2';
        } else {
          btn.className = 'p-2.5 rounded-xl text-left text-xs opacity-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 flex items-start gap-2';
        }
      });

      const feedback = document.getElementById('q-feedback-' + lessonId + '-' + questionIdx);
      if (feedback) {
        feedback.classList.remove('hidden');
        if (selectedOption === correctOption) {
          feedback.className = 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800';
          feedback.innerHTML = '<strong>Chính xác!</strong> Bạn đã chọn đúng đáp án chuẩn theo giáo trình KTPL 11.';
        } else {
          feedback.className = 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-rose-100/70 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border border-rose-300 dark:border-rose-800';
          feedback.innerHTML = '<strong>Chưa chính xác!</strong> Hãy xem lại phần lí thuyết trong bài để nắm vững đáp án đúng là đáp án <strong>' + ['A', 'B', 'C', 'D'][correctOption] + '</strong>.';
        }
      }
    }

    // 4. Interactive Calculator Functions
    function calculateInflation() {
      const cpi0 = parseFloat(document.getElementById('calc-cpi0').value);
      const cpi1 = parseFloat(document.getElementById('calc-cpi1').value);
      const resDiv = document.getElementById('calc-inflation-result');
      
      if (isNaN(cpi0) || isNaN(cpi1) || cpi0 <= 0) {
        resDiv.innerHTML = '<span class="text-rose-600">Vui lòng nhập chỉ số CPI kì gốc hợp lệ (&gt; 0).</span>';
        return;
      }
      const rate = ((cpi1 - cpi0) / cpi0 * 100).toFixed(2);
      let level = '';
      let badgeClass = '';
      if (rate < 0) {
        level = 'Giảm phát (Mức giá chung giảm)';
        badgeClass = 'text-sky-600 font-bold';
      } else if (rate < 10) {
        level = 'Lạm phát vừa phải (An toàn kích thích sản xuất)';
        badgeClass = 'text-emerald-600 font-bold';
      } else if (rate < 1000) {
        level = 'Lạm phát phi mã (Bất ổn nghiêm trọng)';
        badgeClass = 'text-amber-600 font-bold';
      } else {
        level = 'Siêu lạm phát (Khủng hoảng tiền tệ sụp đổ)';
        badgeClass = 'text-rose-600 font-bold';
      }
      resDiv.innerHTML = 'Tỉ lệ lạm phát: <strong class="text-indigo-600">' + rate + '%</strong> ➔ <span class="' + badgeClass + '">' + level + '</span>';
    }

    function simulateSupplyDemand() {
      const s = parseFloat(document.getElementById('sim-supply').value) || 0;
      const d = parseFloat(document.getElementById('sim-demand').value) || 0;
      const resDiv = document.getElementById('sim-sd-result');
      
      if (s < d) {
        const diff = d - s;
        resDiv.innerHTML = 'Trạng thái: <strong class="text-rose-600">Cung &lt; Cầu (Hàng khan hiếm, thiếu ' + diff + ' sp)</strong> ➔ <span class="text-indigo-600 font-bold">Giá cả thị trường có xu hướng TĂNG LÊN</span>!';
      } else if (s > d) {
        const diff = s - d;
        resDiv.innerHTML = 'Trạng thái: <strong class="text-amber-600">Cung &gt; Cầu (Hàng dư thừa ' + diff + ' sp)</strong> ➔ <span class="text-emerald-600 font-bold">Giá cả thị trường có xu hướng GIẢM XUỐNG</span>!';
      } else {
        resDiv.innerHTML = 'Trạng thái: <strong class="text-emerald-600">Cung = Cầu (Thị trường đạt điểm cân bằng)</strong> ➔ <span class="text-sky-600 font-bold">Giá cả thị trường ỔN ĐỊNH</span>!';
      }
    }

    function analyzeSwotStrategy() {
      const internal = document.getElementById('swot-internal').value;
      const external = document.getElementById('swot-external').value;
      const resDiv = document.getElementById('swot-strategy-result');
      
      if (internal === 'S' && external === 'O') {
        resDiv.innerHTML = 'Chiến lược: <strong class="text-emerald-600">SO (Tấn công mở rộng)</strong> ➔ Tận dụng tối đa điểm mạnh nội tại để đón đầu cơ hội bứt phá thị trường!';
      } else if (internal === 'W' && external === 'O') {
        resDiv.innerHTML = 'Chiến lược: <strong class="text-sky-600">WO (Khắc phục đổi mới)</strong> ➔ Tranh thủ cơ hội thị trường để thu hút vốn, bù đắp và khắc phục các điểm yếu!';
      } else if (internal === 'S' && external === 'T') {
        resDiv.innerHTML = 'Chiến lược: <strong class="text-amber-600">ST (Đa dạng hóa phòng thủ)</strong> ➔ Dùng điểm mạnh về công nghệ, vốn để đương đầu và vô hiệu hóa thách thức cạnh tranh!';
      } else {
        resDiv.innerHTML = 'Chiến lược: <strong class="text-rose-600">WT (Thu hẹp phòng ngừa)</strong> ➔ Giảm thiểu tối đa điểm yếu và phòng thủ rủi ro để bảo toàn nguồn vốn!';
      }
    }

    // 5. Arena Exam (20 Questions, 45 Minutes)
    const arenaQuestions = ${JSON.stringify(master.arenaQuestions)};
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;
    let arenaStarted = false;

    function startArenaExam() {
      arenaStarted = true;
      document.getElementById('arena-start-btn').classList.add('hidden');
      document.getElementById('arena-submit-btn').classList.remove('hidden');
      
      clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          submitArenaExam();
          return;
        }
        arenaSecondsLeft--;
        const m = String(Math.floor(arenaSecondsLeft / 60)).padStart(2, '0');
        const s = String(arenaSecondsLeft % 60).padStart(2, '0');
        document.getElementById('arena-timer').innerText = m + ':' + s;
      }, 1000);
    }

    function submitArenaExam() {
      clearInterval(arenaTimerInterval);
      document.getElementById('arena-submit-btn').classList.add('hidden');
      
      let score = 0;
      arenaQuestions.forEach((q, idx) => {
        const radios = document.getElementsByName('arena-q-' + idx);
        let userAns = -1;
        radios.forEach(r => {
          if (r.checked) userAns = parseInt(r.value);
          r.disabled = true;
        });

        const labels = document.querySelectorAll('.arena-opt-label-' + idx);
        labels.forEach((label, oIdx) => {
          if (oIdx === q.answer) {
            label.className = 'flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 font-bold text-xs text-emerald-800 dark:text-emerald-200';
          } else if (oIdx === userAns) {
            label.className = 'flex items-start gap-2.5 p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-500 font-bold text-xs text-rose-800 dark:text-rose-200';
          } else {
            label.className = 'flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 opacity-60 text-xs text-slate-500';
          }
        });

        const explain = document.getElementById('arena-explain-' + idx);
        if (explain) {
          explain.classList.remove('hidden');
          if (userAns === q.answer) {
            score++;
            explain.className = 'mt-2.5 p-3 rounded-xl text-xs leading-relaxed bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800';
            explain.innerHTML = '<strong>Đúng!</strong> ' + q.explain;
          } else {
            explain.className = 'mt-2.5 p-3 rounded-xl text-xs leading-relaxed bg-amber-100/60 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800';
            explain.innerHTML = '<strong>Đáp án đúng: ' + ['A', 'B', 'C', 'D'][q.answer] + '.</strong> ' + q.explain;
          }
        }
      });

      const resultBox = document.getElementById('arena-result-box');
      resultBox.classList.remove('hidden');
      const grade = (score / arenaQuestions.length * 10).toFixed(1);
      document.getElementById('arena-result-title').innerText = 'Kết quả bài thi: ' + score + '/20 câu (' + grade + ' điểm)';
      
      let msg = '';
      if (score >= 18) msg = 'Xuất sắc! Bạn nắm rất vững kiến thức Giáo dục Kinh tế và Pháp luật lớp 11!';
      else if (score >= 14) msg = 'Khá giỏi! Hãy ôn lại các câu trả lời sai để đạt điểm tối đa.';
      else msg = 'Bạn cần ôn luyện kĩ hơn lí thuyết các bài cung - cầu, lạm phát và các quyền tự do dân chủ.';
      document.getElementById('arena-result-msg').innerText = msg;

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function resetArenaExam() {
      arenaSecondsLeft = 45 * 60;
      document.getElementById('arena-timer').innerText = '45:00';
      document.getElementById('arena-result-box').classList.add('hidden');
      document.getElementById('arena-start-btn').classList.remove('hidden');
      document.getElementById('arena-submit-btn').classList.add('hidden');

      arenaQuestions.forEach((q, idx) => {
        const radios = document.getElementsByName('arena-q-' + idx);
        radios.forEach(r => {
          r.checked = false;
          r.disabled = false;
        });
        const labels = document.querySelectorAll('.arena-opt-label-' + idx);
        labels.forEach(label => {
          label.className = 'arena-opt-label-' + idx + ' flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-indigo-400 transition text-xs text-slate-700 dark:text-slate-300';
        });
        const explain = document.getElementById('arena-explain-' + idx);
        if (explain) explain.classList.add('hidden');
      });
    }

    // 6. Search Modal Logic (Ctrl+K)
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const searchIndex = [
      { id: 1, title: 'Bài 1. Cạnh tranh trong nền kinh tế thị trường', kw: 'cạnh tranh lành mạnh không lành mạnh ưu thế thị phần tối đa hóa lợi nhuận' },
      { id: 2, title: 'Bài 2. Cung – cầu trong nền kinh tế thị trường', kw: 'cung cầu giá cả khan hiếm dư thừa cân bằng thị trường' },
      { id: 3, title: 'Bài 3. Lạm phát', kw: 'chỉ số cpi công thức tính lạm phát vừa phải phi mã siêu lạm phát' },
      { id: 4, title: 'Bài 4. Thất nghiệp', kw: 'thất nghiệp cơ cấu chu kì tự nguyện không tự nguyện an sinh' },
      { id: 5, title: 'Bài 5. Thị trường lao động và việc làm', kw: 'tiền lương sàn việc làm xu hướng tuyển dụng kĩ năng số phi chính thức' },
      { id: 6, title: 'Bài 6. Ý tưởng, cơ hội kinh doanh và các năng lực cần thiết', kw: 'khởi nghiệp ý tưởng cơ hội ma trận swot năng lực lãnh đạo quản trị' },
      { id: 7, title: 'Bài 7. Đạo đức kinh doanh', kw: 'chữ tín trung thực trách nhiệm xã hội tôn trọng con người hàng giả' },
      { id: 8, title: 'Bài 8. Văn hoá tiêu dùng', kw: 'tiêu dùng xanh tiết kiệm hàng việt nam trách nhiệm môi trường' },
      { id: 9, title: 'Bài 9. Quyền bình đẳng của công dân trước pháp luật', kw: 'bình đẳng quyền nghĩa vụ trách nhiệm pháp lí không phân biệt' },
      { id: 10, title: 'Bài 10. Bình đẳng giới trong các lĩnh vực', kw: 'bình đẳng giới nam nữ chính trị kinh tế lao động gia đình' },
      { id: 11, title: 'Bài 11. Quyền bình đẳng giữa các dân tộc', kw: 'đại đoàn kết dân tộc thiểu số tiếng nói chữ viết văn hóa cử tuyển' },
      { id: 12, title: 'Bài 12. Quyền bình đẳng giữa các tôn giáo', kw: 'tự do tín ngưỡng tôn giáo nơi thờ tự cấm kì thị lương giáo' },
      { id: 13, title: 'Bài 13. Quyền và nghĩa vụ tham gia quản lí nhà nước và xã hội', kw: 'dân biết dân bàn dân làm dân kiểm tra cơ sở cả nước biểu quyết kiến nghị' },
      { id: 14, title: 'Bài 14. Quyền và nghĩa vụ về bầu cử, ứng cử', kw: '18 tuổi bầu cử 21 tuổi ứng cử phổ thông bình đẳng trực tiếp bỏ phiếu kín' },
      { id: 15, title: 'Bài 15. Quyền và nghĩa vụ về khiếu nại, tố cáo', kw: 'khiếu nại tố cáo khôi phục quyền lợi bảo vệ người tố cáo vu khống' },
      { id: 16, title: 'Bài 16. Quyền và nghĩa vụ về bảo vệ Tổ quốc', kw: 'nghĩa vụ quân sự 17 tuổi quốc phòng toàn dân an ninh trật tự trung thành' },
      { id: 17, title: 'Bài 17. Quyền bất khả xâm phạm về thân thể, tính mạng, danh dự', kw: 'bắt người phê chuẩn viện kiểm sát phạm tội quả tang bạo lực học đường nhân phẩm' },
      { id: 18, title: 'Bài 18. Quyền bất khả xâm phạm về chỗ ở', kw: 'chỗ ở hợp pháp lệnh khám xét người chứng kiến ban ngày thuê nhà' },
      { id: 19, title: 'Bài 19. Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại', kw: 'bí mật đời tư đọc trộm tin nhắn nghe lén bưu phẩm dữ liệu số' },
      { id: 20, title: 'Bài 20. Quyền và nghĩa vụ về tự do ngôn luận, báo chí, thông tin', kw: 'tự do ngôn luận báo chí tiếp cận thông tin fake news an ninh mạng kiểm chứng' },
      { id: 21, title: 'Bài 21. Quyền và nghĩa vụ về tự do tín ngưỡng, tôn giáo', kw: 'tự do tín ngưỡng tôn giáo cấm mê tín dị đoan bói toán tà đạo' }
    ];

    function openSearchModal() {
      searchModal.classList.remove('hidden');
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
    }

    function closeSearchModal() {
      searchModal.classList.add('hidden');
    }

    function renderSearchResults(query) {
      const q = query.toLowerCase().trim();
      const filtered = searchIndex.filter(item => {
        if (!q) return true;
        return item.title.toLowerCase().includes(q) || item.kw.toLowerCase().includes(q);
      });

      if (filtered.length === 0) {
        searchResults.innerHTML = '<div class="p-4 text-center text-xs text-slate-400">Không tìm thấy kết quả phù hợp.</div>';
        return;
      }

      searchResults.innerHTML = filtered.map(item => 
        '<a href="#bai-' + item.id + '" onclick="closeSearchModal()" class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition text-xs">' +
          '<span class="font-bold text-slate-800 dark:text-slate-200">' + item.title + '</span>' +
          '<span class="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">Xem ngay →</span>' +
        '</a>'
      ).join('');
    }

    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
        closeSearchModal();
      }
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  </script>
</body>
</html>
  `;
}

// Write to all 4 target files
const targetFiles = [
  'courses/ktpl_11.html',
  'courses/ktpl11.html',
  'courses/gdktpl_11.html',
  'courses/gdktpl11.html'
];

const fullHtml = buildPageHtml();
const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';

targetFiles.forEach(relPath => {
  const fullPath = path.join(baseDir, relPath);
  fs.writeFileSync(fullPath, fullHtml, 'utf8');
  console.log(`[OK] Generated: ${relPath} (${fullHtml.length} bytes)`);
});
