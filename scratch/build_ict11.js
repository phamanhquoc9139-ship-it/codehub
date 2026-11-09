// Builder for Chuyên đề Tin học 11 ICT (Tin học ứng dụng)
const fs = require('fs');
const path = require('path');

const data = require('./ict11_data.js');
const coreCards = require('./ict11_core_cards.js');
const svgs = require('./ict11_svgs.js');
const cases = require('./ict11_cases.js');
const review = require('./ict11_review_arena.js');

function formatItemContent(item) {
  let lines = [];
  if (Array.isArray(item.points) && item.points.length > 0) {
    lines = item.points;
  } else if (item.desc && typeof item.desc === 'string') {
    lines = item.desc.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  } else if (item.text && typeof item.text === 'string') {
    lines = [item.text];
  }
  if (lines.length === 0) {
    return `<div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Nội dung chi tiết theo SGK Chuyên đề Tin học 11 Định hướng Tin học ứng dụng.</div>`;
  }
  return lines.map(line => `
    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
      <div class="leading-relaxed flex-1">${line}</div>
    </div>
  `).join('');
}

function buildLessonHtml(l) {
  const lCore = coreCards[l.num] || [];
  const lSvg = svgs[l.num] || '';
  const lCases = cases[l.num] || [];
  const lQuiz = l.quiz || [];

  return `
    <article id="bai-${l.num}" data-lesson-id="${l.num}" data-chapter="${l.chapter}" class="lesson-article scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8 transition-colors">
      <!-- Card Header -->
      <div class="p-5 md:p-6 border-b border-slate-100 dark:border-slate-700/70 bg-gradient-to-r from-blue-50/80 via-sky-50/60 to-indigo-50/60 dark:from-blue-950/30 dark:via-sky-950/20 dark:to-indigo-950/20">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-blue-700 text-white shadow-sm">BÀI ${l.num} • TIN HỌC ỨNG DỤNG 11</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/90 dark:bg-slate-900/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">${l.topic}</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-100/70 dark:bg-blue-900/40 text-blue-900 dark:text-blue-200">SGK Kết nối tri thức</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="toggleBookmark(${l.num})" id="bm-btn-${l.num}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1" title="Đánh dấu bài học">
              <span id="bm-icon-${l.num}">☆</span> <span class="hidden sm:inline">Lưu</span>
            </button>
            <button type="button" onclick="toggleDone(${l.num})" id="done-btn-${l.num}" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-500 transition flex items-center gap-1">
              <span id="done-icon-${l.num}">○</span> <span>Hoàn thành</span>
            </button>
          </div>
        </div>

        <h3 class="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
          Bài ${l.num}. ${l.title}
        </h3>

        <p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Trọng tâm bài học:</strong> ${l.summary || ''}
        </p>

        <!-- Objectives Checklist -->
        ${l.objectives && l.objectives.length > 0 ? `
          <div class="mt-3.5 p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-blue-100 dark:border-blue-900/40 text-xs">
            <div class="font-bold text-blue-900 dark:text-blue-300 mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-bullseye text-blue-600"></i> Mục tiêu cần đạt theo SGK:
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
              ${l.objectives.map(obj => `
                <div class="flex items-start gap-2">
                  <span class="text-blue-500 font-bold mt-0.5">✓</span>
                  <span>${obj}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Quick Activity Jump Pills (5 phần A-B-C-D-E) -->
        <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">Cấu trúc bài:</span>
          <a href="#b${l.num}-cong-thuc" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition">A. Quy tắc &amp; Công cụ cốt lõi (4)</a>
          <a href="#b${l.num}-noi-dung" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition">B. Nội dung chi tiết SGK</a>
          <a href="#b${l.num}-so-do" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition">C. Sơ đồ trực quan phần mềm</a>
          <a href="#b${l.num}-tinh-huong" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition">D. Tình huống &amp; Thực hành dự án</a>
          <a href="#b${l.num}-trac-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 hover:bg-blue-100 transition">E. Trắc nghiệm (3 câu)</a>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-5 md:p-6 space-y-6">

        <!-- Phần A: Quy tắc & Công cụ cốt lõi (4 cards) -->
        <section id="b${l.num}-cong-thuc" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-blue-700 text-white">Phần A</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Quy tắc &amp; Công cụ cốt lõi</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${lCore.map(c => `
              <div class="p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-700 transition">
                <div class="flex items-center gap-2 text-xs font-black text-blue-800 dark:text-blue-300 mb-1">
                  <span class="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px]">★</span>
                  <span>${c.title}</span>
                </div>
                <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${c.text}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Phần B: Nội dung chi tiết SGK -->
        <section id="b${l.num}-noi-dung" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-blue-700 text-white">Phần B</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nội dung chi tiết trọng tâm theo SGK</h4>
          </div>
          <div class="space-y-4">
            ${(l.sections || []).map(sec => `
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
                <h5 class="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-700/60">
                  <span class="w-1.5 h-5 rounded-full bg-blue-600 shrink-0"></span>
                  <span>${sec.heading}</span>
                </h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  ${(sec.items || []).map(item => `
                    <div class="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-700/50">
                      ${item.badge ? `
                        <div class="inline-block px-2 py-0.5 rounded-md bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-[10px] font-bold mb-1.5">
                          ${item.badge}
                        </div>
                      ` : ''}
                      <h6 class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 mb-2">
                        ${item.title}
                      </h6>
                      <div class="space-y-2 mt-2">
                        ${formatItemContent(item)}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Phần C: Sơ đồ trực quan phần mềm -->
        <section id="b${l.num}-so-do" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-blue-700 text-white">Phần C</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Sơ đồ trực quan thao tác phần mềm</h4>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-inner">
            <div class="w-full overflow-x-auto flex justify-center py-2">
              ${lSvg}
            </div>
          </div>
        </section>

        <!-- Phần D: Tình huống & Thực hành dự án -->
        <section id="b${l.num}-tinh-huong" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-blue-700 text-white">Phần D</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Tình huống thực tế &amp; Kĩ năng dự án sản phẩm số</h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${lCases.map(cs => `
              <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 flex flex-col justify-between">
                <div>
                  <div class="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                    ${cs.type}
                  </div>
                  <h6 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                    <span class="text-amber-600">📌</span>
                    <span>${cs.title}</span>
                  </h6>
                  <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    <strong>Tình huống:</strong> ${cs.content}
                  </p>
                </div>
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/70 border border-amber-200 dark:border-amber-800/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong class="text-amber-800 dark:text-amber-300 flex items-center gap-1 mb-1">
                    <i class="fa-solid fa-lightbulb text-amber-500"></i> Hướng xử lí &amp; Giải pháp phần mềm chuẩn:
                  </strong>
                  ${cs.solution}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Phần E: Trắc nghiệm củng cố 3 câu -->
        <section id="b${l.num}-trac-nghiem" class="scroll-mt-24">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-blue-700 text-white">Phần E</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Luyện tập trắc nghiệm củng cố (3 câu)</h4>
            </div>
            <span class="text-[11px] font-bold text-blue-600 dark:text-blue-400">Kiểm tra tức thì</span>
          </div>

          <div class="space-y-3.5">
            ${lQuiz.map((q, qIdx) => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/60" id="quiz-${l.num}-${qIdx}">
                <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  <span class="text-blue-600 dark:text-blue-400 mr-1">Câu ${qIdx + 1}:</span> ${q.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${q.options.map((opt, oIdx) => `
                    <button type="button" onclick="checkQuizAnswer(this, ${l.num}, ${qIdx}, ${oIdx}, ${q.answer !== undefined ? q.answer : 0})" class="quiz-btn text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700/60 transition flex items-start gap-2">
                      <span class="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">${String.fromCharCode(65 + oIdx)}</span>
                      <span class="flex-1">${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div id="quiz-exp-${l.num}-${qIdx}" class="hidden mt-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                  <strong>Giải thích chuẩn:</strong> ${q.explain}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

      </div>
    </article>
  `;
}

function buildFullPage() {
  const lessonsHtml = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => buildLessonHtml(data[n])).join('\n');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chuyên đề Tin học 11 (Tin học ứng dụng ICT) — Kết nối tri thức</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              900: '#0c4a6e'
            }
          }
        }
      }
    }
  </script>

  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Inter Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #475569;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Top Sticky Header -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Back Link -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg hover:bg-blue-700 transition shadow-sm shadow-blue-500/20" title="Về trang chủ">
          <i class="fa-solid fa-graduation-cap"></i>
        </a>
        <div>
          <div class="flex items-center gap-1.5">
            <span class="text-xs sm:text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase">
              CHUYÊN ĐỀ TIN HỌC 11
            </span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-black bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">ICT</span>
          </div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
            Định hướng Tin học ứng dụng • KNTT
          </div>
        </div>
      </div>

      <!-- Center: Quick Progress Tracker -->
      <div class="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Tiến độ chuyên đề:</span>
        <div class="w-28 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div id="top-progress-bar" class="bg-blue-600 h-full w-0 transition-all duration-500"></div>
        </div>
        <span id="top-progress-text" class="text-xs font-black text-blue-600 dark:text-blue-400">0/15 bài</span>
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

  <!-- Main Hero Banner -->
  <section class="bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-blue-700/60 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      <div class="flex-1 min-w-0">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 border border-white/15 text-xs font-bold mb-3 backdrop-blur-sm">
          <i class="fa-solid fa-book-bookmark text-amber-400"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
          TỔNG HỢP KIẾN THỨC CHUYÊN ĐỀ HỌC TẬP TIN HỌC 11
        </h1>
        <div class="mt-2 text-base sm:text-lg text-sky-300 font-bold">
          Định hướng Tin học ứng dụng (ICT) — 3 Chuyên đề • 15 Bài học
        </div>
        <p class="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
          Ba chuyên đề cốt lõi rèn luyện năng lực sáng tạo sản phẩm số toàn diện: Thiết kế đồ họa vector sắc sảo với Inkscape, sản xuất phim hoạt hình 3D sinh động với Toontastic 3D &amp; VideoPad, và biên tập ảnh động nghệ thuật với GIMP.
        </p>

        <!-- Quick Hero Badges -->
        <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span class="px-3 py-1 rounded-lg bg-blue-800/80 border border-blue-600/60 font-semibold">🎨 CĐ1: Đồ họa Inkscape (5 bài)</span>
          <span class="px-3 py-1 rounded-lg bg-emerald-800/80 border border-emerald-600/60 font-semibold">🎬 CĐ2: Hoạt hình Toontastic (5 bài)</span>
          <span class="px-3 py-1 rounded-lg bg-rose-800/80 border border-rose-600/60 font-semibold">🖼️ CĐ3: Ảnh động GIMP (5 bài)</span>
          <span class="px-3 py-1 rounded-lg bg-amber-500/30 border border-amber-400/50 font-bold text-amber-200">🏆 Đấu trường 20 câu 45 phút</span>
        </div>
      </div>

      <!-- Quick Jump Box -->
      <div class="w-full lg:w-[420px] p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shrink-0">
        <div class="text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-2.5 flex items-center justify-between">
          <span>Chuyển nhanh bài học</span>
          <span class="text-[10px] text-sky-300 font-bold px-2 py-0.5 rounded bg-white/10">15 bài</span>
        </div>
        <div class="grid grid-cols-5 gap-1.5 text-center font-bold text-xs">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => `
            <a href="#bai-${n}" class="p-2 rounded-xl bg-white/15 hover:bg-blue-600 hover:text-white transition border border-white/10">B${n}</a>
          `).join('')}
        </div>
        <div class="mt-3.5 pt-2.5 border-t border-white/15 flex items-center justify-between text-xs font-bold text-blue-100">
          <a href="#review-table" class="hover:text-amber-300 transition flex items-center gap-1.5"><i class="fa-solid fa-table-list text-amber-400"></i> Bảng 15 bài</a>
          <a href="#key-terms" class="hover:text-amber-300 transition flex items-center gap-1.5"><i class="fa-solid fa-spell-check text-emerald-400"></i> 14 Thuật ngữ</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Overarching 3 Topics Overview Card -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 w-full">
    <div class="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 border border-blue-200 dark:border-blue-900/60 shadow-sm">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-blue-200/60 dark:border-blue-900/60">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            <i class="fa-solid fa-cubes"></i>
          </div>
          <div>
            <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-wide">
              HỆ THỐNG 3 CHUYÊN ĐỀ SẢN PHẨM SỐ TIN HỌC ỨNG DỤNG 11
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">Phân tích thành phần, lập kế hoạch, lựa chọn công cụ, lưu/xuất đúng định dạng số</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-blue-900/40">
          <div class="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-bezier-curve"></i> 1. ĐỒ HỌA VECTOR (INKSCAPE)
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Mô tả hình học bằng toán học, không vỡ hạt; làm chủ hình khối tham số, bút Bezier, điểm neo Node, phép toán Boolean, uốn chữ và vẽ tranh Tháp Rùa xuất SVG/PNG 300 DPI.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-emerald-900/40">
          <div class="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-film"></i> 2. PHIM HOẠT HÌNH (TOONTASTIC 3D)
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Dàn dựng kịch bản 3 hồi, tự vẽ nhân vật Draw Your Own &amp; gắn xương Rigging, thu âm lồng tiếng trực tiếp, chỉnh Mood Music và hoàn thiện hậu kỳ đa rãnh với VideoPad.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-rose-100 dark:border-rose-900/40">
          <div class="text-xs font-bold text-rose-700 dark:text-rose-300 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-photo-film"></i> 3. BIÊN TẬP ẢNH ĐỘNG (GIMP)
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Cấu trúc Layer và Layer Mask phi phá hủy, nguyên lý lưu ảnh võng mạc của GIF, điều khiển thời gian trễ (ms), chữ động, hiệu ứng hòa tan Blend, mưa rơi và tối ưu banner web.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Body Content: Sidebar + Main Stream -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- Sticky Left Sidebar -->
      <aside class="hidden lg:block w-72 shrink-0 sticky top-24 self-start space-y-4">
        
        <!-- Sidebar Navigation Card -->
        <div class="p-4 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
            <span class="text-xs font-black uppercase text-slate-400 tracking-wider">Mục lục 15 bài học</span>
            <span id="sidebar-progress" class="text-xs font-bold text-blue-600 dark:text-blue-400">0%</span>
          </div>

          <nav class="space-y-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-xs">
            
            <!-- Group 1 -->
            <div>
              <div class="font-black text-[11px] text-blue-700 dark:text-blue-300 uppercase px-2 mb-1 flex items-center gap-1">
                <i class="fa-solid fa-pen-nib text-[10px]"></i> CĐ1: Đồ họa Inkscape
              </div>
              <div class="space-y-0.5">
                ${[1, 2, 3, 4, 5].map(k => `
                  <a href="#bai-${k}" class="sidebar-link flex items-center justify-between p-1.5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700/60 hover:text-blue-700 dark:hover:text-blue-300 transition group" id="slink-${k}">
                    <div class="flex items-center gap-2 truncate">
                      <span class="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                        ${k}
                      </span>
                      <span class="truncate">${data[k].title}</span>
                    </div>
                    <span id="scheck-${k}" class="text-xs text-slate-300 dark:text-slate-600 font-bold group-hover:text-blue-500">○</span>
                  </a>
                `).join('')}
              </div>
            </div>

            <!-- Group 2 -->
            <div>
              <div class="font-black text-[11px] text-emerald-700 dark:text-emerald-300 uppercase px-2 mb-1 flex items-center gap-1">
                <i class="fa-solid fa-clapperboard text-[10px]"></i> CĐ2: Hoạt hình 3D Toontastic
              </div>
              <div class="space-y-0.5">
                ${[6, 7, 8, 9, 10].map(k => `
                  <a href="#bai-${k}" class="sidebar-link flex items-center justify-between p-1.5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700/60 hover:text-emerald-700 dark:hover:text-emerald-300 transition group" id="slink-${k}">
                    <div class="flex items-center gap-2 truncate">
                      <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                        ${k}
                      </span>
                      <span class="truncate">${data[k].title}</span>
                    </div>
                    <span id="scheck-${k}" class="text-xs text-slate-300 dark:text-slate-600 font-bold group-hover:text-emerald-500">○</span>
                  </a>
                `).join('')}
              </div>
            </div>

            <!-- Group 3 -->
            <div>
              <div class="font-black text-[11px] text-rose-700 dark:text-rose-300 uppercase px-2 mb-1 flex items-center gap-1">
                <i class="fa-solid fa-images text-[10px]"></i> CĐ3: Ảnh động GIMP
              </div>
              <div class="space-y-0.5">
                ${[11, 12, 13, 14, 15].map(k => `
                  <a href="#bai-${k}" class="sidebar-link flex items-center justify-between p-1.5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-slate-700/60 hover:text-rose-700 dark:hover:text-rose-300 transition group" id="slink-${k}">
                    <div class="flex items-center gap-2 truncate">
                      <span class="w-5 h-5 rounded-md bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                        ${k}
                      </span>
                      <span class="truncate">${data[k].title}</span>
                    </div>
                    <span id="scheck-${k}" class="text-xs text-slate-300 dark:text-slate-600 font-bold group-hover:text-rose-500">○</span>
                  </a>
                `).join('')}
              </div>
            </div>

          </nav>
        </div>

        <!-- Course Tip Mini Box -->
        <div class="p-4 rounded-3xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-200 space-y-1.5">
          <div class="font-extrabold flex items-center gap-1.5 text-blue-800 dark:text-blue-300">
            <i class="fa-solid fa-lightbulb text-amber-500"></i> Lời khuyên thiết kế số:
          </div>
          <p class="leading-relaxed text-[11px] text-blue-800/90 dark:text-blue-300/80">
            Luôn giữ file nguồn gốc (SVG trong Inkscape, XCF trong GIMP) để chỉnh sửa không phá hủy, và chỉ xuất ảnh PNG/GIF/MP4 khi hoàn tất sản phẩm.
          </p>
        </div>

      </aside>

      <!-- Main Column -->
      <main class="flex-1 min-w-0 space-y-8">
        
        <!-- 15 Lessons -->
        <div class="space-y-8">
          ${lessonsHtml}
        </div>

        <!-- Summary Table Section -->
        <section id="review-table" class="scroll-mt-24 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">
            <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-table-list"></i>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">BẢNG TỔNG KẾT 15 BÀI HỌC CHUYÊN ĐỀ TIN HỌC 11</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Hệ thống hóa toàn bộ sản phẩm và kĩ năng thực hành cốt lõi theo 3 chuyên đề</p>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-blue-50 dark:bg-slate-900/60 text-blue-900 dark:text-blue-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th class="p-3 w-56">Chuyên đề</th>
                  <th class="p-3 w-16 text-center">Bài</th>
                  <th class="p-3 w-64">Tên bài học</th>
                  <th class="p-3">Sản phẩm / Kĩ năng chính</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
                ${review.summaryTable.map(row => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition">
                    <td class="p-3 font-semibold text-slate-500 dark:text-slate-400">${row.phase}</td>
                    <td class="p-3 text-center font-black text-blue-600 dark:text-blue-400">${row.id}</td>
                    <td class="p-3 font-bold text-slate-800 dark:text-slate-200">${row.title}</td>
                    <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed">${row.product}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- Key Terms Glossary Section (14 terms) -->
        <section id="key-terms" class="scroll-mt-24 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">
            <div class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-spell-check"></i>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">BẢNG THUẬT NGỮ NHANH CHUYÊN ĐỀ TIN HỌC 11</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">14 Khái niệm cốt lõi về đồ họa vector, làm phim hoạt hình và biên tập ảnh động</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${review.keyTerms.map(t => `
              <div class="p-3.5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 text-xs">
                <div class="font-bold text-indigo-900 dark:text-indigo-200 mb-1 flex items-center gap-1.5">
                  <span class="text-indigo-600">❖</span>
                  <span>${t.term}</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">${t.definition}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Quality Evaluation Checklist Section -->
        <section id="quality-checklist" class="scroll-mt-24 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">
            <div class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-clipboard-check"></i>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">TIÊU CHÍ ĐÁNH GIÁ VÀ HOÀN THIỆN SẢN PHẨM SỐ</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Checklist đảm bảo độ chuẩn xác kĩ thuật, thẩm mĩ và khả năng truyền tải thông điệp</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${review.qualityChecklist.map(c => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-700/60 text-xs">
                <div class="font-bold text-slate-900 dark:text-white mb-2.5 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>${c.domain}</span>
                </div>
                <ul class="space-y-2 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  ${c.items.map(it => `
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>${it}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Interactive Trạng Nguyên Arena Exam (20 questions) -->
        <section id="arena-section" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl border border-blue-500/30">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-blue-800/60">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-2">
                <i class="fa-solid fa-trophy"></i> ĐẤU TRƯỜNG TRẠNG NGUYÊN TIN HỌC 11
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white">BÀI THI TỔNG HỢP TOÀN KHÓA (20 CÂU)</h3>
              <p class="text-xs text-blue-200/80 mt-1">Bao quát Inkscape, Toontastic 3D, VideoPad, GIMP • Thời gian 45 phút • Chấm điểm và giải thích tức thì</p>
            </div>

            <!-- Timer & Action Button -->
            <div class="flex items-center gap-3">
              <div class="px-4 py-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <div class="text-[10px] uppercase tracking-wider text-blue-300 font-bold">Thời gian còn lại</div>
                <div id="arena-timer" class="text-lg font-black text-amber-400 font-mono">45:00</div>
              </div>
              <button type="button" id="arena-submit-btn" onclick="submitArenaExam()" class="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-blue-500/30 transition">
                NỘP BÀI THI
              </button>
            </div>
          </div>

          <!-- Arena Score Summary Box (Hidden initially) -->
          <div id="arena-result-box" class="hidden my-6 p-6 rounded-2xl bg-blue-900/50 border border-blue-400 text-center space-y-2">
            <div class="text-xs font-bold uppercase tracking-wider text-blue-300">Kết quả bài thi</div>
            <div class="text-3xl sm:text-4xl font-black text-amber-300" id="arena-score-text">0 / 20</div>
            <div class="text-xs text-blue-100 max-w-md mx-auto" id="arena-feedback-text"></div>
          </div>

          <!-- 20 Arena Questions -->
          <div class="mt-6 space-y-5">
            ${review.arenaQuestions.map((q, idx) => `
              <div class="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition" id="arena-q-${idx}">
                <div class="text-xs sm:text-sm font-bold text-white mb-3 leading-snug">
                  <span class="text-blue-400 font-black mr-1">Câu ${idx + 1}:</span> ${q.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${q.options.map((opt, oIdx) => `
                    <label class="arena-option-label flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400 cursor-pointer transition text-xs text-slate-200">
                      <input type="radio" name="arena-opt-${idx}" value="${oIdx}" class="mt-0.5 text-blue-500 focus:ring-blue-400">
                      <span class="font-bold text-blue-400 mr-1">${String.fromCharCode(65 + oIdx)}.</span>
                      <span class="flex-1">${opt}</span>
                    </label>
                  `).join('')}
                </div>
                <div id="arena-exp-${idx}" class="hidden mt-3 p-3 rounded-xl bg-white/10 border border-blue-500/50 text-xs text-blue-200 leading-relaxed">
                  <strong>Giải thích:</strong> ${q.exp || q.explain}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Submit Button -->
          <div class="mt-8 text-center">
            <button type="button" onclick="submitArenaExam()" class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-black text-sm shadow-xl shadow-blue-500/30 transition">
              HOÀN THÀNH &amp; CHẤM ĐIỂM NGAY
            </button>
          </div>
        </section>

      </main>

    </div>
  </div>

  <!-- Search Modal (Ctrl+K) -->
  <div id="search-modal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl max-w-xl w-full p-5 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
        <div class="flex items-center gap-2 text-sm font-black text-slate-800 dark:text-slate-100">
          <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
          <span>Tra cứu bài học &amp; Kiến thức Tin học 11</span>
        </div>
        <button type="button" onclick="closeSearchModal()" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-slate-800 flex items-center justify-center text-xs">
          ✕
        </button>
      </div>

      <input type="text" id="search-input" oninput="handleSearch(this.value)" placeholder="Gõ tên bài, Inkscape, Toontastic, GIMP, Bezier, Layer Mask..." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500">

      <div id="search-results" class="max-h-80 overflow-y-auto space-y-1.5 custom-scrollbar text-xs">
        <div class="text-slate-400 text-center py-6">Nhập từ khóa để tìm kiếm trong 15 bài học</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
          <i class="fa-solid fa-laptop-code"></i>
        </div>
        <div>
          <div class="font-black text-slate-800 dark:text-slate-200">CHUYÊN ĐỀ HỌC TẬP TIN HỌC 11 — TIN HỌC ỨNG DỤNG</div>
          <div>Bộ sách Kết nối tri thức với cuộc sống • Hệ thống hóa đầy đủ 15 bài học</div>
        </div>
      </div>
      <div class="text-slate-500 text-center md:text-right">
        <div>3 Chuyên đề: Đồ họa Vector (Inkscape) • Phim hoạt hình (Toontastic) • Ảnh động (GIMP)</div>
        <div class="mt-1 text-[11px]">Nền tảng học tập số thông minh • Tự tin làm chủ kĩ năng sáng tạo số</div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Theme toggle
    function toggleTheme() {
      const html = document.documentElement;
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }

    function updateThemeIcon(isDark) {
      const icon = document.getElementById('theme-icon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    }

    // Initialize Theme
    (function initTheme() {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = saved ? saved === 'dark' : prefersDark;
      if (isDark) document.documentElement.classList.add('dark');
      updateThemeIcon(isDark);
    })();

    // Bookmark & Done State Management
    let completedLessons = JSON.parse(localStorage.getItem('ict11_done') || '[]');
    let bookmarkedLessons = JSON.parse(localStorage.getItem('ict11_bm') || '[]');

    function updateProgressUi() {
      const count = completedLessons.length;
      const pct = Math.round((count / 15) * 100);
      const topBar = document.getElementById('top-progress-bar');
      const topText = document.getElementById('top-progress-text');
      const sidePct = document.getElementById('sidebar-progress');
      if (topBar) topBar.style.width = pct + '%';
      if (topText) topText.innerText = count + '/15 bài';
      if (sidePct) sidePct.innerText = pct + '%';

      for (let i = 1; i <= 15; i++) {
        const isDone = completedLessons.includes(i);
        const doneBtn = document.getElementById('done-btn-' + i);
        const doneIcon = document.getElementById('done-icon-' + i);
        const scheck = document.getElementById('scheck-' + i);
        if (doneIcon) doneIcon.innerText = isDone ? '●' : '○';
        if (doneBtn) {
          if (isDone) {
            doneBtn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
            doneBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
          } else {
            doneBtn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
            doneBtn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
          }
        }
        if (scheck) {
          scheck.innerText = isDone ? '✓' : '○';
          scheck.className = isDone ? 'text-xs text-blue-500 font-bold' : 'text-xs text-slate-300 dark:text-slate-600 font-bold';
        }

        const isBm = bookmarkedLessons.includes(i);
        const bmIcon = document.getElementById('bm-icon-' + i);
        const bmBtn = document.getElementById('bm-btn-' + i);
        if (bmIcon) bmIcon.innerText = isBm ? '★' : '☆';
        if (bmBtn) {
          if (isBm) {
            bmBtn.classList.add('text-amber-500', 'border-amber-400');
          } else {
            bmBtn.classList.remove('text-amber-500', 'border-amber-400');
          }
        }
      }
    }

    function toggleDone(id) {
      if (completedLessons.includes(id)) {
        completedLessons = completedLessons.filter(x => x !== id);
      } else {
        completedLessons.push(id);
      }
      localStorage.setItem('ict11_done', JSON.stringify(completedLessons));
      updateProgressUi();
    }

    function toggleBookmark(id) {
      if (bookmarkedLessons.includes(id)) {
        bookmarkedLessons = bookmarkedLessons.filter(x => x !== id);
      } else {
        bookmarkedLessons.push(id);
      }
      localStorage.setItem('ict11_bm', JSON.stringify(bookmarkedLessons));
      updateProgressUi();
    }

    // Inline Quiz Answer Check
    function checkQuizAnswer(btn, lessonId, qIdx, selectedOpt, correctOpt) {
      const parent = document.getElementById('quiz-' + lessonId + '-' + qIdx);
      if (!parent) return;
      const buttons = parent.querySelectorAll('.quiz-btn');
      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-blue-400', 'hover:bg-blue-50/50');
      });

      if (selectedOpt === correctOpt) {
        btn.classList.add('bg-emerald-100', 'dark:bg-emerald-900/60', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200');
      } else {
        btn.classList.add('bg-rose-100', 'dark:bg-rose-900/60', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200');
        if (buttons[correctOpt]) {
          buttons[correctOpt].classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-400');
        }
      }

      const exp = document.getElementById('quiz-exp-' + lessonId + '-' + qIdx);
      if (exp) exp.classList.remove('hidden');
    }

    // Arena Exam Timer (45 minutes)
    let arenaSeconds = 45 * 60;
    let arenaTimerInterval = null;

    function startArenaTimer() {
      if (arenaTimerInterval) return;
      arenaTimerInterval = setInterval(() => {
        if (arenaSeconds <= 0) {
          clearInterval(arenaTimerInterval);
          submitArenaExam();
          return;
        }
        arenaSeconds--;
        const mins = Math.floor(arenaSeconds / 60);
        const secs = arenaSeconds % 60;
        const display = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        const timerEl = document.getElementById('arena-timer');
        if (timerEl) timerEl.innerText = display;
      }, 1000);
    }

    const arenaCorrectAnswers = ${JSON.stringify(review.arenaQuestions.map(q => q.answer))};

    function submitArenaExam() {
      clearInterval(arenaTimerInterval);
      let score = 0;

      for (let i = 0; i < arenaCorrectAnswers.length; i++) {
        const correct = arenaCorrectAnswers[i];
        const selected = document.querySelector('input[name="arena-opt-' + i + '"]:checked');
        const card = document.getElementById('arena-q-' + i);
        const exp = document.getElementById('arena-exp-' + i);

        if (exp) exp.classList.remove('hidden');

        if (selected && parseInt(selected.value) === correct) {
          score++;
          if (card) card.classList.add('border-blue-500', 'bg-blue-950/30');
        } else {
          if (card) card.classList.add('border-rose-500/80', 'bg-rose-950/20');
        }
      }

      const resBox = document.getElementById('arena-result-box');
      const scoreText = document.getElementById('arena-score-text');
      const feedbackText = document.getElementById('arena-feedback-text');
      if (resBox && scoreText && feedbackText) {
        resBox.classList.remove('hidden');
        scoreText.innerText = score + ' / 20';
        if (score >= 18) {
          feedbackText.innerText = 'Xuất sắc! Bạn đã làm chủ toàn diện các kĩ năng đồ họa vector Inkscape, làm phim hoạt hình Toontastic 3D và biên tập ảnh động GIMP!';
        } else if (score >= 14) {
          feedbackText.innerText = 'Khá giỏi! Bạn nắm vững hầu hết các công cụ cốt lõi. Hãy xem lại phần giải thích để đạt điểm tuyệt đối.';
        } else {
          feedbackText.innerText = 'Cần ôn tập thêm! Hãy xem lại 15 bài học chuyên đề và các tình huống thực hành dự án số.';
        }
        resBox.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Search Modal (Ctrl+K)
    const searchData = ${JSON.stringify(Object.values(data).map(l => ({
      id: l.num,
      title: 'Bài ' + l.num + ': ' + l.title,
      summary: l.summary || '',
      topic: l.topic || ''
    })))};

    function openSearchModal() {
      const modal = document.getElementById('search-modal');
      const input = document.getElementById('search-input');
      if (modal) modal.classList.remove('hidden');
      if (input) {
        input.focus();
        input.value = '';
      }
      handleSearch('');
    }

    function closeSearchModal() {
      const modal = document.getElementById('search-modal');
      if (modal) modal.classList.add('hidden');
    }

    function handleSearch(query) {
      const resContainer = document.getElementById('search-results');
      if (!resContainer) return;
      const q = query.trim().toLowerCase();
      if (!q) {
        resContainer.innerHTML = '<div class="text-slate-400 text-center py-6">Nhập từ khóa để tra cứu nhanh kiến thức Chuyên đề Tin học 11</div>';
        return;
      }
      const matches = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.summary.toLowerCase().includes(q) || 
        item.topic.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resContainer.innerHTML = '<div class="text-slate-400 text-center py-6">Không tìm thấy bài học phù hợp</div>';
        return;
      }

      resContainer.innerHTML = matches.map(item => 
        '<a href="#bai-' + item.id + '" onclick="closeSearchModal()" class="block p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-slate-700 transition">' +
          '<div class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">' + item.title + '</div>' +
          '<div class="text-[11px] text-slate-500 dark:text-slate-300 mt-0.5 truncate">' + item.summary + '</div>' +
        '</a>'
      ).join('');
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
      }
    });

    // Initialize UI on load
    window.addEventListener('DOMContentLoaded', () => {
      updateProgressUi();
      startArenaTimer();
    });
  </script>
</body>
</html>`;
}

// Execution
console.log("Generating full HTML for Chuyên đề Tin học 11 ICT...");
const fullHtml = buildFullPage();
console.log("HTML generated. Size:", fullHtml.length, "bytes.");

const targetFiles = [
  'courses/chuyende_tinhoc_11_ict.html',
  'courses/chuyende_tinhoc_11_app.html',
  'courses/chuyende_tin_11.html',
  'courses/chuyende_tinhoc_11.html'
];

targetFiles.forEach(file => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, fullHtml, 'utf8');
  console.log(`Wrote ${fullHtml.length} bytes to ${file}`);
});

console.log("Build Chuyên đề Tin học 11 ICT completed successfully!");
