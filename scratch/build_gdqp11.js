// Builder for GDQP 11 - Grade 11 National Defense & Security Education
const fs = require('fs');
const path = require('path');

const data = require('./gdqp11_data.js');
const coreCards = require('./gdqp11_core_cards.js');
const svgs = require('./gdqp11_svgs.js');
const cases = require('./gdqp11_cases.js');
const review = require('./gdqp11_review_arena.js');

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
    return `<div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Nội dung chi tiết theo SGK GDQP&amp;AN 11.</div>`;
  }
  return lines.map(line => `
    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
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
    <article id="bai-${l.num}" data-lesson-id="${l.num}" class="lesson-article scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8 transition-colors">
      <!-- Card Header -->
      <div class="p-5 md:p-6 border-b border-slate-100 dark:border-slate-700/70 bg-gradient-to-r from-emerald-50/80 to-teal-50/60 dark:from-emerald-950/30 dark:to-teal-950/20">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-700 text-white shadow-sm">BÀI ${l.num} • GDQP-AN 11</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/90 dark:bg-slate-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">${l.topic || 'Giáo dục Quốc phòng và An ninh'}</span>
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-200">SGK Kết nối tri thức</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="toggleBookmark(${l.num})" id="bm-btn-${l.num}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1" title="Đánh dấu bài học">
              <span id="bm-icon-${l.num}">☆</span> <span class="hidden sm:inline">Lưu</span>
            </button>
            <button type="button" onclick="toggleDone(${l.num})" id="done-btn-${l.num}" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500 transition flex items-center gap-1">
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
          <div class="mt-3.5 p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-emerald-100 dark:border-emerald-900/40 text-xs">
            <div class="font-bold text-emerald-900 dark:text-emerald-300 mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-bullseye text-emerald-600"></i> Mục tiêu cần đạt theo SGK:
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
              ${l.objectives.map(obj => `
                <div class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>${obj}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Quick Activity Jump Pills (5 phần A-B-C-D-E) -->
        <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">Cấu trúc bài:</span>
          <a href="#b${l.num}-cong-thuc" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">A. Quy tắc cốt lõi (4)</a>
          <a href="#b${l.num}-noi-dung" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">B. Nội dung chi tiết SGK</a>
          <a href="#b${l.num}-so-do" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">C. Sơ đồ tư duy trực quan</a>
          <a href="#b${l.num}-tinh-huong" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">D. Tình huống &amp; Thực hành</a>
          <a href="#b${l.num}-trac-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition">E. Trắc nghiệm (3 câu)</a>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-5 md:p-6 space-y-6">

        <!-- Phần A: Quy tắc cốt lõi (4 cards) -->
        <section id="b${l.num}-cong-thuc" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-700 text-white">Phần A</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Quy tắc &amp; Khái niệm cốt lõi</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${lCore.map(c => `
              <div class="p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-300 dark:hover:border-emerald-700 transition">
                <div class="flex items-center gap-2 text-xs font-black text-emerald-800 dark:text-emerald-300 mb-1">
                  <span class="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px]">★</span>
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
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-700 text-white">Phần B</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nội dung chi tiết trọng tâm theo SGK</h4>
          </div>
          <div class="space-y-4">
            ${(l.sections || []).map((sec, sIdx) => `
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
                <h5 class="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-700/60">
                  <span class="w-1.5 h-5 rounded-full bg-emerald-600 shrink-0"></span>
                  <span>${sec.heading}</span>
                </h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  ${(sec.items || []).map(item => `
                    <div class="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-700/50">
                      ${item.badge ? `
                        <div class="inline-block px-2 py-0.5 rounded-md bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold mb-1.5">
                          ${item.badge}
                        </div>
                      ` : ''}
                      <h6 class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 mb-2">
                        ${item.title}
                      </h6>
                      <div class="space-y-2 mt-1">
                        ${formatItemContent(item)}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Phần C: Sơ đồ tư duy trực quan -->
        <section id="b${l.num}-so-do" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-700 text-white">Phần C</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Sơ đồ tư duy &amp; Minh họa kỹ chiến thuật</h4>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-inner">
            <div class="w-full overflow-x-auto flex justify-center py-2">
              ${lSvg}
            </div>
          </div>
        </section>

        <!-- Phần D: Tình huống & Thực hành -->
        <section id="b${l.num}-tinh-huong" class="scroll-mt-24">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-700 text-white">Phần D</span>
            <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Tình huống huấn luyện &amp; Rèn luyện thực tiễn</h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${lCases.map((cs, cIdx) => `
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
                    <i class="fa-solid fa-lightbulb text-amber-500"></i> Hướng xử lí &amp; Giải thích chuẩn:
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
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-700 text-white">Phần E</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Luyện tập trắc nghiệm củng cố (3 câu)</h4>
            </div>
            <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Kiểm tra tức thì</span>
          </div>

          <div class="space-y-3.5">
            ${lQuiz.map((q, qIdx) => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/60" id="quiz-${l.num}-${qIdx}">
                <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  <span class="text-emerald-600 dark:text-emerald-400 mr-1">Câu ${qIdx + 1}:</span> ${q.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${q.options.map((opt, oIdx) => `
                    <button type="button" onclick="checkQuizAnswer(this, ${l.num}, ${qIdx}, ${oIdx}, ${q.answer !== undefined ? q.answer : 0})" class="quiz-btn text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700/60 transition flex items-start gap-2">
                      <span class="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">${String.fromCharCode(65 + oIdx)}</span>
                      <span class="flex-1">${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div id="quiz-exp-${l.num}-${qIdx}" class="hidden mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
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
  const lessonKeys = Object.keys(data).sort((a, b) => parseInt(a) - parseInt(b));
  const lessonsHtml = lessonKeys.map(k => buildLessonHtml(data[k])).join('\n');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giáo dục Quốc phòng và An ninh 11 — SGK Kết nối tri thức | CS Platform</title>
  <meta name="description" content="Tổng hợp toàn diện kiến thức Giáo dục Quốc phòng và An ninh lớp 11 Kết nối tri thức đủ 10 bài, sơ đồ kỹ chiến thuật, câu hỏi tình huống thực tế và đấu trường 20 câu.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
            }
          }
        }
      }
    }
  </script>
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    .dark ::-webkit-scrollbar-thumb:hover { background: #64748b; }
    
    @keyframes pulseGlow {
      0%, 100% { transform: scale(1); opacity: 0.9; }
      50% { transform: scale(1.03); opacity: 1; }
    }
    .pulse-glow { animation: pulseGlow 3s infinite ease-in-out; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 font-sans transition-colors min-h-screen flex flex-col">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-shield-halved text-lg"></i>
          </div>
          <div>
            <div class="font-black text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>GDQP &amp; AN 11</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">KNTT</span>
            </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Hệ thống 10 bài học chuẩn SGK</div>
          </div>
        </a>
      </div>

      <!-- Center: Quick Progress Tracker -->
      <div class="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Tiến độ môn học:</span>
        <div class="w-28 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div id="top-progress-bar" class="bg-emerald-500 h-full w-0 transition-all duration-500"></div>
        </div>
        <span id="top-progress-text" class="text-xs font-black text-emerald-600 dark:text-emerald-400">0/10 bài</span>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium hover:border-emerald-400 transition flex items-center gap-2" title="Tìm kiếm nhanh (Ctrl+K)">
          <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
          <span class="hidden sm:inline">Tìm kiếm...</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-[10px] font-mono border border-slate-200 dark:border-slate-600">Ctrl+K</kbd>
        </button>

        <a href="#arena-section" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm shadow-amber-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Đấu trường Trạng Nguyên</span>
        </a>

        <!-- Dark / Light Mode Toggle -->
        <button type="button" onclick="toggleTheme()" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 flex items-center justify-center transition" title="Chuyển chế độ sáng / tối">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Main Hero Banner -->
  <section class="bg-gradient-to-b from-emerald-900 via-emerald-800 to-teal-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-emerald-700/60 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 border border-white/15 text-xs font-bold mb-3 backdrop-blur-sm">
          <i class="fa-solid fa-medal text-amber-400"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
          TỔNG HỢP KIẾN THỨC GIÁO DỤC QUỐC PHÒNG VÀ AN NINH 11
        </h1>
        <p class="mt-3 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
          Đầy đủ 10 bài theo mục lục SGK: Hệ thống hoá khái niệm, chiến lược bảo vệ Tổ quốc, Luật Nghĩa vụ quân sự, an ninh môi trường, phòng chống tệ nạn xã hội, phòng không nhân dân, kỹ chiến thuật bộ binh và kỹ thuật lựu đạn.
        </p>

        <!-- Quick Hero Badges -->
        <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span class="px-3 py-1 rounded-lg bg-emerald-800/80 border border-emerald-600/60 font-semibold">🛡️ Đủ 10 bài học chuẩn</span>
          <span class="px-3 py-1 rounded-lg bg-emerald-800/80 border border-emerald-600/60 font-semibold">📐 10 Sơ đồ kỹ chiến thuật SVG</span>
          <span class="px-3 py-1 rounded-lg bg-emerald-800/80 border border-emerald-600/60 font-semibold">🎯 30 Câu trắc nghiệm củng cố</span>
          <span class="px-3 py-1 rounded-lg bg-amber-500/30 border border-amber-400/50 font-bold text-amber-200">🏆 Đấu trường 20 câu 45 phút</span>
        </div>
      </div>

      <!-- Quick Jump Box -->
      <div class="w-full md:w-80 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shrink-0">
        <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-200 mb-2 flex items-center justify-between">
          <span>Chuyển nhanh bài học</span>
          <span class="text-[10px] text-emerald-300">10 bài</span>
        </div>
        <div class="grid grid-cols-5 gap-1.5 text-center font-bold text-xs">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `
            <a href="#bai-${n}" class="p-2 rounded-xl bg-white/15 hover:bg-emerald-500 hover:text-white transition border border-white/10">B${n}</a>
          `).join('')}
        </div>
        <div class="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-xs font-bold text-emerald-100">
          <a href="#review-table" class="hover:text-amber-300 transition"><i class="fa-solid fa-table-list mr-1"></i> Bảng tổng kết</a>
          <a href="#safety-rules" class="hover:text-amber-300 transition"><i class="fa-solid fa-triangle-exclamation mr-1"></i> 5 An toàn</a>
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
            <span class="text-xs font-black uppercase text-slate-400 tracking-wider">Mục lục 10 bài học</span>
            <span id="sidebar-progress" class="text-xs font-bold text-emerald-600 dark:text-emerald-400">0%</span>
          </div>

          <nav class="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            ${lessonKeys.map(k => {
              const item = data[k];
              return `
                <a href="#bai-${item.num}" class="sidebar-link flex items-center justify-between p-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700/60 hover:text-emerald-700 dark:hover:text-emerald-300 transition group" id="slink-${item.num}">
                  <div class="flex items-center gap-2 truncate">
                    <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-[10px] font-bold shrink-0 transition">
                      ${item.num}
                    </span>
                    <span class="truncate">${item.title}</span>
                  </div>
                  <span id="scheck-${item.num}" class="text-xs text-slate-300 dark:text-slate-600 font-bold group-hover:text-emerald-500">○</span>
                </a>
              `;
            }).join('')}
          </nav>
        </div>

        <!-- Safety Warning Mini Banner -->
        <div class="p-4 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
          <div class="font-extrabold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
            <i class="fa-solid fa-triangle-exclamation text-amber-600"></i> Kỉ luật quân trường:
          </div>
          <p class="leading-relaxed text-[11px] text-amber-800/90 dark:text-amber-300/80">
            Tuyệt đối không chạm vào vật nghi đạn nổ. Chỉ thực hành với súng mô hình dưới lệnh trực tiếp của giáo viên.
          </p>
        </div>

      </aside>

      <!-- Main Column -->
      <main class="flex-1 min-w-0 space-y-8">
        
        <!-- 10 Lessons -->
        <div class="space-y-8">
          ${lessonsHtml}
        </div>

        <!-- Course Summary Table Section -->
        <section id="review-table" class="scroll-mt-24 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">
            <div class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-table-list"></i>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">BẢNG TỔNG KẾT TOÀN MÔN GDQP &amp; AN 11</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Hệ thống hóa nội dung cốt lõi của 10 bài học</p>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-emerald-50 dark:bg-slate-900/60 text-emerald-900 dark:text-emerald-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th class="p-3 w-16 text-center">Bài</th>
                  <th class="p-3 w-64">Tên bài học</th>
                  <th class="p-3">Nội dung cốt lõi cần nhớ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
                ${review.summaryTable.map(row => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition">
                    <td class="p-3 text-center font-black text-emerald-600">${row.id}</td>
                    <td class="p-3 font-bold text-slate-800 dark:text-slate-200">${row.title}</td>
                    <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed">${row.core}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- Diagram & Figures Checklist Section -->
        <section id="diagram-checklist" class="scroll-mt-24 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">
            <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-images"></i>
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">DANH MỤC SƠ ĐỒ, BẢN ĐỒ &amp; HÌNH ẢNH SGK CẦN XEM LẠI</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Các hình ảnh trực quan bắt buộc ôn tập theo từng bài</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${review.diagramChecklist.map(d => `
              <div class="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 text-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-extrabold text-[10px]">${d.lesson}</span>
                  <span class="font-bold text-blue-900 dark:text-blue-200">${d.title}</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">${d.note}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 5 Safety Rules Section -->
        <section id="safety-rules" class="scroll-mt-24 p-6 rounded-3xl bg-gradient-to-r from-amber-50 to-rose-50 dark:from-amber-950/30 dark:to-rose-950/20 border border-amber-200 dark:border-amber-900/60 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-amber-200/60 dark:border-amber-900/60">
            <div class="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-shield-cat"></i>
            </div>
            <div>
              <h3 class="text-lg font-black text-amber-900 dark:text-amber-200">5 NGUYÊN TẮC AN TOÀN KỶ LUẬT QUÂN TRƯỜNG XUYÊN SUỐT</h3>
              <p class="text-xs text-amber-800/80 dark:text-amber-300/80">Quy tắc sinh tử bảo đảm an toàn cho học sinh và cộng đồng</p>
            </div>
          </div>

          <div class="space-y-3">
            ${review.safetyRules.map(r => `
              <div class="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-amber-200/80 dark:border-amber-900/50 text-xs flex items-start gap-3">
                <span class="w-7 h-7 rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-xs shrink-0">${r.num}</span>
                <div class="flex-1">
                  <div class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1">${r.title}</div>
                  <div class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">${r.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Interactive Trạng Nguyên Arena Exam (20 questions) -->
        <section id="arena-section" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-xl border border-emerald-500/30">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-emerald-800/60">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-2">
                <i class="fa-solid fa-trophy"></i> ĐẤU TRƯỜNG TRẠNG NGUYÊN GDQP-AN 11
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white">BÀI THI TỔNG HỢP TOÀN KHÓA (20 CÂU)</h3>
              <p class="text-xs text-emerald-200/80 mt-1">Bao quát toàn bộ 10 bài học • Thời gian làm bài 45 phút • Chấm điểm và phân tích đáp án tức thì</p>
            </div>

            <!-- Timer & Action Button -->
            <div class="flex items-center gap-3">
              <div class="px-4 py-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <div class="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">Thời gian còn lại</div>
                <div id="arena-timer" class="text-lg font-black text-amber-400 font-mono">45:00</div>
              </div>
              <button type="button" id="arena-submit-btn" onclick="submitArenaExam()" class="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition">
                NỘP BÀI THI
              </button>
            </div>
          </div>

          <!-- Arena Score Summary Box (Hidden initially) -->
          <div id="arena-result-box" class="hidden my-6 p-6 rounded-2xl bg-emerald-900/50 border border-emerald-400 text-center space-y-2">
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-300">Kết quả bài thi</div>
            <div class="text-3xl sm:text-4xl font-black text-amber-300" id="arena-score-text">0 / 20</div>
            <div class="text-xs text-emerald-100 max-w-md mx-auto" id="arena-feedback-text"></div>
          </div>

          <!-- 20 Arena Questions -->
          <div class="mt-6 space-y-5">
            ${review.arenaQuestions.map((q, idx) => `
              <div class="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition" id="arena-q-${idx}">
                <div class="text-xs sm:text-sm font-bold text-white mb-3 leading-snug">
                  <span class="text-emerald-400 font-black mr-1">Câu ${idx + 1}:</span> ${q.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${q.options.map((opt, oIdx) => `
                    <label class="arena-option-label flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-400 cursor-pointer transition text-xs text-slate-200">
                      <input type="radio" name="arena-opt-${idx}" value="${oIdx}" class="mt-0.5 text-emerald-500 focus:ring-emerald-400">
                      <span class="font-bold text-emerald-400 mr-1">${String.fromCharCode(65 + oIdx)}.</span>
                      <span class="flex-1">${opt}</span>
                    </label>
                  `).join('')}
                </div>
                <div id="arena-exp-${idx}" class="hidden mt-3 p-3 rounded-xl bg-white/10 border border-emerald-500/50 text-xs text-emerald-200 leading-relaxed">
                  <strong>Giải thích:</strong> ${q.explain}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Submit Button -->
          <div class="mt-8 text-center">
            <button type="button" onclick="submitArenaExam()" class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm shadow-xl shadow-emerald-500/30 transition">
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
        <div class="flex items-center gap-2 flex-1">
          <i class="fa-solid fa-magnifying-glass text-emerald-600"></i>
          <input type="text" id="search-input" oninput="handleSearch(this.value)" placeholder="Tìm bài học, súng AK, lựu đạn, vùng biển, NVQS..." class="w-full bg-transparent border-none text-sm text-slate-800 dark:text-slate-100 focus:outline-none">
        </div>
        <button type="button" onclick="closeSearchModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold px-2 py-1 rounded-lg">ESC</button>
      </div>
      <div id="search-results" class="max-h-80 overflow-y-auto space-y-2 text-xs">
        <div class="text-slate-400 text-center py-6">Nhập từ khóa để tra cứu nhanh kiến thức GDQP-AN 11</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div class="font-bold text-white">Nền tảng Giáo dục Trực tuyến CS Platform</div>
        <div class="text-slate-500 mt-1">Chương trình Giáo dục Quốc phòng và An ninh 11 — SGK Kết nối tri thức với cuộc sống</div>
      </div>
      <div class="text-slate-500 text-center md:text-right">
        <div>Tài liệu học tập &amp; ôn thi học sinh giỏi, tốt nghiệp</div>
        <div class="mt-1 text-[11px]">Nghiêm cấm sao chép trái phép • Tuân thủ kỷ luật quân sự</div>
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
    let completedLessons = JSON.parse(localStorage.getItem('gdqp11_done') || '[]');
    let bookmarkedLessons = JSON.parse(localStorage.getItem('gdqp11_bm') || '[]');

    function updateProgressUi() {
      const count = completedLessons.length;
      const pct = Math.round((count / 10) * 100);
      const topBar = document.getElementById('top-progress-bar');
      const topText = document.getElementById('top-progress-text');
      const sidePct = document.getElementById('sidebar-progress');
      if (topBar) topBar.style.width = pct + '%';
      if (topText) topText.innerText = count + '/10 bài';
      if (sidePct) sidePct.innerText = pct + '%';

      for (let i = 1; i <= 10; i++) {
        const isDone = completedLessons.includes(i);
        const doneBtn = document.getElementById('done-btn-' + i);
        const doneIcon = document.getElementById('done-icon-' + i);
        const scheck = document.getElementById('scheck-' + i);
        if (doneIcon) doneIcon.innerText = isDone ? '●' : '○';
        if (doneBtn) {
          if (isDone) {
            doneBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-600');
            doneBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
          } else {
            doneBtn.classList.remove('bg-emerald-600', 'text-white', 'border-emerald-600');
            doneBtn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
          }
        }
        if (scheck) {
          scheck.innerText = isDone ? '✓' : '○';
          scheck.className = isDone ? 'text-xs text-emerald-500 font-bold' : 'text-xs text-slate-300 dark:text-slate-600 font-bold';
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
      localStorage.setItem('gdqp11_done', JSON.stringify(completedLessons));
      updateProgressUi();
    }

    function toggleBookmark(id) {
      if (bookmarkedLessons.includes(id)) {
        bookmarkedLessons = bookmarkedLessons.filter(x => x !== id);
      } else {
        bookmarkedLessons.push(id);
      }
      localStorage.setItem('gdqp11_bm', JSON.stringify(bookmarkedLessons));
      updateProgressUi();
    }

    // Inline Quiz Answer Check
    function checkQuizAnswer(btn, lessonId, qIdx, selectedOpt, correctOpt) {
      const parent = document.getElementById('quiz-' + lessonId + '-' + qIdx);
      if (!parent) return;
      const buttons = parent.querySelectorAll('.quiz-btn');
      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-emerald-400', 'hover:bg-emerald-50/50');
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
          if (card) card.classList.add('border-emerald-500', 'bg-emerald-950/30');
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
          feedbackText.innerText = 'Xuất sắc! Bạn nắm vững toàn diện kiến thức chiến lược và kỹ thuật Giáo dục Quốc phòng và An ninh 11!';
        } else if (score >= 14) {
          feedbackText.innerText = 'Khá giỏi! Bạn đã hiểu hầu hết các kiến thức trọng tâm. Hãy xem lại các giải thích để đạt điểm tuyệt đối.';
        } else {
          feedbackText.innerText = 'Cần ôn tập thêm! Hãy xem lại 10 bài học và 5 nguyên tắc an toàn kỷ luật quân trường.';
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
        resContainer.innerHTML = '<div class="text-slate-400 text-center py-6">Nhập từ khóa để tra cứu nhanh kiến thức GDQP-AN 11</div>';
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
        '<a href="#bai-' + item.id + '" onclick="closeSearchModal()" class="block p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-emerald-50 dark:hover:bg-slate-700 transition">' +
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

// Main execution
console.log("Generating full HTML for GDQP 11...");
const fullHtml = buildFullPage();
console.log("HTML generated. Size:", fullHtml.length, "bytes.");

const targetFiles = [
  'courses/gdqp_11.html',
  'courses/quocphong_11.html',
  'courses/gdqp11.html',
  'courses/quocphong11.html'
];

targetFiles.forEach(file => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, fullHtml, 'utf8');
  console.log(`Wrote ${fullHtml.length} bytes to ${file}`);
});

console.log("Build GDQP 11 completed successfully!");
