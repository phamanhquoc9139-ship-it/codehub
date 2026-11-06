// Script sinh trang HTML Tiếng Trung 7 (courses/tiengtrung_7.html & courses/chinese_7.html)
const fs = require('fs');
const path = require('path');

const p1 = require('./tiengtrung7_data_p1.js');
const p2 = require('./tiengtrung7_data_p2.js');
const { tiengTrung7ExamQuestions } = require('./tiengtrung7_exam.js');

const allThemes = [...p1.themesPart1, ...p2.themesPart2];
const grammarMatrix = p2.grammarMatrix;
const particlesAndMeasureWords = p2.particlesAndMeasureWords;
const pinyinRules = p2.pinyinRules;

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeForJsSingleQuote(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '');
}

console.log('Generating HTML for Tiếng Trung 7...');

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Trung Quốc 7 — Sách Kết Nối Tri Thức Với Cuộc Sống | Nền Tảng Học Tập Số</title>
  <meta name="description" content="Khóa học toàn diện Tiếng Trung 7 theo chương trình GDPT 2018 - SGK Kết nối tri thức. Đầy đủ 4 chủ điểm, 15 bài học, 4 bài ôn tập, phát âm chuẩn Bắc Kinh Web Speech API, ma trận ngữ pháp và đấu trường 40 câu hỏi trắc nghiệm.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            china: {
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
              950: '#4c0519'
            },
            orient: {
              gold: '#d97706',
              jade: '#059669',
              ink: '#0f172a'
            }
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .font-han {
      font-family: 'Noto Serif SC', 'PingFang SC', 'Microsoft YaHei', serif;
    }
    /* Fallback bulletproof dark mode */
    .dark body {
      background-color: #0b0f19;
      color: #f1f5f9;
    }
    .dark .bg-white-card {
      background-color: #111827;
      border-color: #1f2937;
    }
    .dark .bg-subtle {
      background-color: #1e293b;
    }
    .pinyin-tag {
      font-feature-settings: "pnum" on, "lnum" on;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-[#0b0f19] dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- ==================== TOP NAVIGATION ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border-b border-rose-100 dark:border-rose-950/50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-extrabold hover:opacity-80 transition">
          <i class="fa-solid fa-graduation-cap text-2xl"></i>
          <span class="text-sm font-bold tracking-tight uppercase hidden sm:inline">Học Liệu Số</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <a href="grade_7.html" class="text-xs font-semibold text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition">Khối Lớp 7</a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <span class="text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800 flex items-center gap-1">
          <i class="fa-solid fa-book-bookmark text-[11px]"></i> Tiếng Trung 7
        </span>
      </div>

      <div class="flex items-center gap-2">
        <!-- Nút mở Ma trận Ngữ pháp -->
        <button onclick="openModal('grammarModal')" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 transition flex items-center gap-1.5 shadow-sm" title="Tra cứu 12 bài ngữ pháp và trợ từ">
          <i class="fa-solid fa-network-wired text-rose-500"></i>
          <span class="hidden md:inline">Ma Trận Ngữ Pháp</span>
        </button>

        <!-- Nút mở Bảng Pinyin & Biến điệu -->
        <button onclick="openModal('pinyinModal')" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-800 transition flex items-center gap-1.5 shadow-sm" title="Quy tắc biến điệu Pinyin & thanh điệu">
          <i class="fa-solid fa-volume-high text-amber-500"></i>
          <span class="hidden md:inline">Pinyin & Biến Điệu</span>
        </button>

        <!-- Nút Đấu trường Trạng Nguyên -->
        <button onclick="openModal('examModal')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700 transition flex items-center gap-1.5 shadow-md shadow-rose-500/20 active:scale-95">
          <i class="fa-solid fa-award"></i>
          <span>Thi Trạng Nguyên (40 câu)</span>
        </button>

        <!-- Toggle Theme -->
        <button id="themeToggleBtn" onclick="toggleTheme()" class="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition ml-1" title="Chuyển chế độ Sáng / Tối">
          <i class="fa-solid fa-moon text-sm dark:hidden"></i>
          <i class="fa-solid fa-sun text-sm hidden dark:block text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-rose-900 via-red-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-rose-950">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:24px_24px]"></div>
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-rose-700/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-rose-500/30">
            <i class="fa-solid fa-certificate"></i> BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG — GDPT 2018
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight flex items-baseline gap-3">
            <span>TIẾNG TRUNG QUỐC 7</span>
            <span class="font-han text-2xl sm:text-3xl lg:text-4xl text-amber-300 font-bold opacity-90">七年级中文</span>
          </h1>
          <p class="text-sm sm:text-base text-rose-100/90 leading-relaxed max-w-2xl">
            Tài liệu số hóa toàn diện gồm <strong>4 Chủ điểm lớn, 15 bài học và 4 bài ôn tập</strong>. Trang bị đầy đủ từ vựng chữ Hán giản thể, pinyin chuẩn, ngữ pháp đối chiếu, đoạn thoại thực tế tích hợp Audio Studio Web Speech API giọng chuẩn bản xứ và đấu trường trắc nghiệm 40 câu hỏi.
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
            <span class="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-layer-group text-amber-400"></i> 4 Chủ điểm trọng tâm
            </span>
            <span class="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-book-open text-amber-400"></i> 15 Bài học + 4 Ôn tập
            </span>
            <span class="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-headphones text-amber-400"></i> Phát âm Web Speech API zh-CN
            </span>
            <span class="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-stopwatch text-amber-400"></i> Đấu trường 40 câu (60:00)
            </span>
          </div>
        </div>

        <!-- Quick navigation to themes -->
        <div class="bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-full md:w-auto shrink-0 space-y-2">
          <div class="text-xs uppercase tracking-wider font-extrabold text-amber-300 flex items-center gap-1.5">
            <i class="fa-solid fa-compass"></i> Mục lục chủ điểm
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <a href="#chudiem-1" class="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium flex flex-col">
              <span class="text-amber-200 text-[10px] font-bold">Chủ điểm 1</span>
              <span class="font-han font-bold">我们的社团</span>
            </a>
            <a href="#chudiem-2" class="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium flex flex-col">
              <span class="text-amber-200 text-[10px] font-bold">Chủ điểm 2</span>
              <span class="font-han font-bold">我们的文化遗产</span>
            </a>
            <a href="#chudiem-3" class="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium flex flex-col">
              <span class="text-amber-200 text-[10px] font-bold">Chủ điểm 3</span>
              <span class="font-han font-bold">我们的世界</span>
            </a>
            <a href="#chudiem-4" class="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium flex flex-col">
              <span class="text-amber-200 text-[10px] font-bold">Chủ điểm 4</span>
              <span class="font-han font-bold">我们的未来</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTENT ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
`;

// Render 4 Themes
allThemes.forEach((theme, tIdx) => {
  const themeNum = tIdx + 1;
  html += `
    <!-- THEME ${themeNum}: ${escapeHtml(theme.title)} -->
    <section id="chudiem-${themeNum}" class="scroll-mt-24 space-y-8">
      <!-- Theme Header Banner -->
      <div class="p-6 rounded-2xl bg-gradient-to-r from-rose-900/90 via-red-900 to-slate-900 text-white border-l-8 border-rose-500 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="text-xs uppercase tracking-widest font-black text-amber-400">CHỦ ĐIỂM ${themeNum} / 4</div>
          <h2 class="text-2xl sm:text-3xl font-black mt-1 flex items-center gap-2">
            <span>${escapeHtml(theme.title)}</span>
          </h2>
          <p class="text-sm text-rose-200 mt-1">${escapeHtml(theme.desc)}</p>
        </div>
        <div class="shrink-0 flex items-center gap-2">
          <span class="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-amber-300 border border-white/10">
            ${theme.lessons.length} Bài học & Ôn tập
          </span>
        </div>
      </div>

      <!-- Lessons Container -->
      <div class="space-y-10">
  `;

  theme.lessons.forEach((lesson, lIdx) => {
    const isReview = lesson.isReview;
    const cardBorderColor = isReview ? 'border-amber-400 dark:border-amber-600' : 'border-rose-100 dark:border-slate-800';
    const cardBgColor = isReview ? 'bg-amber-50/40 dark:bg-amber-950/20' : 'bg-white dark:bg-[#111827]';

    html += `
      <!-- LESSON: ${escapeHtml(lesson.title)} -->
      <article class="rounded-2xl border ${cardBorderColor} ${cardBgColor} p-5 sm:p-7 shadow-sm transition hover:shadow-md space-y-6">
        <!-- Lesson Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wide ${isReview ? 'bg-amber-500 text-white' : 'bg-rose-600 text-white'}">
                ${isReview ? 'Ôn Tập' : 'Bài Học'}
              </span>
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                ${escapeHtml(theme.title)}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5 flex items-baseline gap-2 flex-wrap">
              <span>${escapeHtml(lesson.title)}</span>
              ${lesson.chineseTitle ? `<span class="font-han text-lg sm:text-xl font-bold text-rose-600 dark:text-rose-400">(${escapeHtml(lesson.chineseTitle)})</span>` : ''}
              ${lesson.chineseTitle ? `
                <button onclick="speakZh('${escapeForJsSingleQuote(lesson.chineseTitle)}')" class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 hover:scale-110 transition" title="Nghe tiêu đề tiếng Trung">
                  <i class="fa-solid fa-volume-high text-xs"></i>
                </button>
              ` : ''}
            </h3>
            ${lesson.goals ? `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1"><i class="fa-solid fa-bullseye text-rose-500 mr-1.5"></i><strong>Mục tiêu:</strong> ${escapeHtml(lesson.goals)}</p>` : ''}
          </div>
        </div>
    `;

    // 1. Vocabulary Section (跟我学 - Từ mới)
    if (lesson.vocab && lesson.vocab.length > 0) {
      html += `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
              <i class="fa-solid fa-book-bookmark"></i>
              <span>跟我学 · Từ Mới Trọng Tâm (${lesson.vocab.length} từ)</span>
            </h4>
            <span class="text-[11px] text-slate-400 dark:text-slate-500 italic hidden sm:inline">Bấm vào biểu tượng loa để nghe giọng đọc chuẩn bản ngữ</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      `;
      lesson.vocab.forEach(v => {
        html += `
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-rose-300 dark:hover:border-rose-800 transition flex items-start justify-between gap-3 group">
              <div class="space-y-0.5">
                <div class="flex items-baseline gap-2">
                  <span class="font-han text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition">${escapeHtml(v.hanzi)}</span>
                  <span class="pinyin-tag text-xs font-semibold text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 px-1.5 py-0.5 rounded">${escapeHtml(v.pinyin)}</span>
                </div>
                <div class="text-xs text-slate-600 dark:text-slate-300">
                  ${v.type ? `<span class="italic text-[11px] text-slate-400 dark:text-slate-400 font-medium">(${escapeHtml(v.type)})</span> ` : ''}
                  <span>${escapeHtml(v.meaning)}</span>
                </div>
                ${v.example ? `
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 font-han mt-1 border-t border-slate-200 dark:border-slate-700 pt-1">
                    Ví dụ: ${escapeHtml(v.example)}
                  </div>
                ` : ''}
              </div>
              <button onclick="speakZh('${escapeForJsSingleQuote(v.hanzi)}')" class="shrink-0 w-8 h-8 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 transition flex items-center justify-center shadow-sm" title="Phát âm: ${escapeHtml(v.hanzi)}">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
            </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }

    // 2. Grammar Section (跟我学 - Điểm ngữ pháp)
    if (lesson.grammar && lesson.grammar.length > 0) {
      html += `
        <div class="space-y-3 pt-2">
          <h4 class="text-sm font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
            <i class="fa-solid fa-shapes"></i>
            <span>跟我学 · Điểm Ngữ Pháp Then Chốt</span>
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      `;
      lesson.grammar.forEach((g, gIdx) => {
        html += `
            <div class="p-4 rounded-xl bg-gradient-to-br from-rose-50/50 to-orange-50/30 dark:from-slate-800/80 dark:to-slate-900 border border-rose-200/70 dark:border-rose-900/50 space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-rose-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">${gIdx + 1}</span>
                <span class="font-extrabold text-sm text-slate-900 dark:text-rose-200">${escapeHtml(g.title)}</span>
              </div>
              ${g.structure ? `
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900/90 border border-rose-100 dark:border-slate-700 text-xs font-mono font-bold text-rose-700 dark:text-rose-300">
                  <i class="fa-solid fa-code text-[10px] mr-1 text-slate-400"></i>${escapeHtml(g.structure)}
                </div>
              ` : ''}
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(g.explanation)}</p>
              ${g.example ? `
                <div class="mt-2 p-2.5 rounded-lg bg-rose-100/50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start justify-between gap-2">
                  <div class="space-y-0.5">
                    <div class="font-han font-bold text-xs text-slate-900 dark:text-white">${escapeHtml(g.example.hanzi || '')}</div>
                    <div class="text-[11px] text-rose-600 dark:text-rose-300">${escapeHtml(g.example.pinyin || '')}</div>
                    <div class="text-[11px] text-slate-600 dark:text-slate-300 italic">${escapeHtml(g.example.vietnamese || '')}</div>
                  </div>
                  ${g.example.hanzi ? `
                    <button onclick="speakZh('${escapeForJsSingleQuote(g.example.hanzi)}')" class="shrink-0 w-7 h-7 rounded-lg bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 hover:scale-105 transition flex items-center justify-center shadow-sm" title="Nghe câu ví dụ">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  ` : ''}
                </div>
              ` : ''}
            </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }

    // 3. Dialogue / Sample Conversation (跟我学 - Bài khóa/Hội thoại mẫu)
    if (lesson.dialogue && lesson.dialogue.length > 0) {
      html += `
        <div class="space-y-3 pt-2">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
              <i class="fa-solid fa-comments"></i>
              <span>跟我学 · Hội Thoại Mẫu Thực Tế</span>
            </h4>
            <button onclick="playFullDialogue('dlg_${tIdx}_${lIdx}')" class="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1">
              <i class="fa-solid fa-play text-[10px]"></i> Nghe toàn bộ đoạn thoại
            </button>
          </div>

          <div id="dlg_${tIdx}_${lIdx}" class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
      `;
      lesson.dialogue.forEach((d, dIdx) => {
        html += `
            <div class="flex items-start gap-3 dlg-row" data-zh="${escapeHtml(d.hanzi)}">
              <span class="shrink-0 w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center">${escapeHtml(d.speaker || 'A')}</span>
              <div class="grow space-y-0.5">
                <div class="font-han text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(d.hanzi)}</div>
                <div class="text-xs text-rose-600 dark:text-rose-300 font-medium">${escapeHtml(d.pinyin)}</div>
                <div class="text-xs text-slate-600 dark:text-slate-400 italic">${escapeHtml(d.vietnamese)}</div>
              </div>
              <button onclick="speakZh('${escapeForJsSingleQuote(d.hanzi)}')" class="shrink-0 w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-500 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 transition flex items-center justify-center shadow-sm" title="Nghe câu này">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
            </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }

    // 4. Culture & Interactive Section (一起互动 & Góc văn hóa)
    if (lesson.culture || lesson.interactive) {
      html += `
        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
          <i class="fa-solid fa-landmark text-amber-500 text-base shrink-0 mt-0.5"></i>
          <div class="space-y-1">
            <span class="font-bold uppercase tracking-wider text-[11px] text-amber-600 dark:text-amber-400">Góc Văn Hóa & Tương Tác:</span>
            <p class="leading-relaxed">${escapeHtml(lesson.culture || lesson.interactive || '')}</p>
          </div>
        </div>
      `;
    }

    // 5. Mini-Quiz (跟我练)
    if (lesson.quiz && lesson.quiz.length > 0) {
      html += `
        <div class="space-y-3 pt-2">
          <h4 class="text-sm font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-question"></i>
            <span>跟我练 · Luyện Tập Nhanh Tại Lớp</span>
          </h4>
          <div class="space-y-3">
      `;
      lesson.quiz.forEach((q, qIdx) => {
        const quizId = `quiz_${tIdx}_${lIdx}_${qIdx}`;
        html += `
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
                <span class="text-rose-600 dark:text-rose-400">Câu ${qIdx + 1}:</span>
                <span>${escapeHtml(q.q)}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        `;
        q.options.forEach((opt, oIdx) => {
          html += `
                <button onclick="checkMiniQuiz('${quizId}', ${oIdx}, ${q.answer})" class="quiz-btn text-left px-3 py-2 rounded-lg text-xs font-medium bg-white dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-rose-400 dark:hover:border-rose-500 transition shadow-sm flex items-center justify-between group">
                  <span><strong class="text-slate-400 mr-1.5">${String.fromCharCode(65 + oIdx)}.</strong> ${escapeHtml(opt)}</span>
                  <i class="fa-regular fa-circle text-slate-300 dark:text-slate-500 group-hover:text-rose-500 text-[11px]"></i>
                </button>
          `;
        });
        html += `
              </div>
              <div id="${quizId}_feedback" class="hidden text-xs p-2.5 rounded-lg font-medium leading-relaxed mt-2"></div>
            </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }

    html += `
      </article>
    `;
  });

  html += `
      </div>
    </section>
  `;
});

html += `
  </main>

  <!-- ==================== MODAL 1: PINYIN & RULES ==================== -->
  <div id="pinyinModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-[#111827] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-300 dark:border-amber-800 shadow-2xl space-y-6 p-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400">
          <i class="fa-solid fa-volume-high text-xl"></i>
          <h3 class="text-lg sm:text-xl font-black">Sổ Tay Ngữ Âm, Thanh Điệu & Biến Điệu Pinyin</h3>
        </div>
        <button onclick="closeModal('pinyinModal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-rose-600 transition flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Tone introduction -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
          <div class="text-xs font-bold text-amber-600">Thanh 1 (阴平 - Cao bằng)</div>
          <div class="font-han text-xl font-extrabold text-slate-900 dark:text-white mt-1">mā (妈)</div>
          <div class="text-[11px] text-slate-500 mt-0.5">55: Đều, cao và ngân dài</div>
          <button onclick="speakZh('mā')" class="mt-2 px-2 py-1 bg-amber-500 text-white text-[11px] font-bold rounded hover:bg-amber-600 transition">Nghe mẫu</button>
        </div>
        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
          <div class="text-xs font-bold text-amber-600">Thanh 2 (阳平 - Đi lên)</div>
          <div class="font-han text-xl font-extrabold text-slate-900 dark:text-white mt-1">má (麻)</div>
          <div class="text-[11px] text-slate-500 mt-0.5">35: Vút lên giống dấu sắc</div>
          <button onclick="speakZh('má')" class="mt-2 px-2 py-1 bg-amber-500 text-white text-[11px] font-bold rounded hover:bg-amber-600 transition">Nghe mẫu</button>
        </div>
        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
          <div class="text-xs font-bold text-amber-600">Thanh 3 (上声 - Xuống lên)</div>
          <div class="font-han text-xl font-extrabold text-slate-900 dark:text-white mt-1">mǎ (马)</div>
          <div class="text-[11px] text-slate-500 mt-0.5">214: Trầm xuống rồi lên</div>
          <button onclick="speakZh('mǎ')" class="mt-2 px-2 py-1 bg-amber-500 text-white text-[11px] font-bold rounded hover:bg-amber-600 transition">Nghe mẫu</button>
        </div>
        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
          <div class="text-xs font-bold text-amber-600">Thanh 4 (去声 - Rơi mạnh)</div>
          <div class="font-han text-xl font-extrabold text-slate-900 dark:text-white mt-1">mà (骂)</div>
          <div class="text-[11px] text-slate-500 mt-0.5">51: Từ cao rơi dứt khoát</div>
          <button onclick="speakZh('mà')" class="mt-2 px-2 py-1 bg-amber-500 text-white text-[11px] font-bold rounded hover:bg-amber-600 transition">Nghe mẫu</button>
        </div>
      </div>

      <!-- Biến điệu chi tiết -->
      <div class="space-y-4">
        <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-list-check text-amber-500"></i> Các Quy Tắc Biến Điệu Cốt Lõi
        </h4>
        <div class="space-y-3">
`;

pinyinRules.forEach(r => {
  html += `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div class="font-bold text-sm text-amber-700 dark:text-amber-400">${escapeHtml(r.quyTắc || r.title || '')}</div>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(r.giảiThích || r.rule || '')}</p>
            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs flex items-center justify-between shadow-sm">
              <span class="font-han font-medium text-slate-800 dark:text-slate-200">${escapeHtml(r.víDụ || '')}</span>
              <button onclick="speakZh('${escapeForJsSingleQuote(r.víDụ ? r.víDụ.split(' ')[0] : '')}')" class="text-slate-400 hover:text-amber-600 transition" title="Nghe"><i class="fa-solid fa-volume-high text-xs"></i></button>
            </div>
          </div>
  `;
});

html += `
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
        <button onclick="closeModal('pinyinModal')" class="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg transition">Đóng sổ tay</button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 2: GRAMMAR MATRIX & PARTICLES ==================== -->
  <div id="grammarModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-[#111827] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-rose-300 dark:border-rose-900 shadow-2xl space-y-6 p-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400">
          <i class="fa-solid fa-network-wired text-xl"></i>
          <h3 class="text-lg sm:text-xl font-black">Ma Trận Ngữ Pháp & Bảng Trợ Từ, Lượng Từ Toàn Sách</h3>
        </div>
        <button onclick="closeModal('grammarModal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-rose-600 transition flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Ma trận 12 bài -->
      <div class="space-y-3">
        <h4 class="text-sm font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
          <i class="fa-solid fa-table-list"></i> Bảng Hệ Thống 12 Bài Học Ngữ Pháp Toàn Sách
        </h4>
        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
              <tr>
                <th class="p-3">Bài Học</th>
                <th class="p-3">Trọng Điểm Ngữ Pháp</th>
                <th class="p-3">Ý Nghĩa &amp; Cách Dùng</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
`;

grammarMatrix.forEach(gm => {
  html += `
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td class="p-3 font-bold text-rose-600 whitespace-nowrap">${escapeHtml(gm.bài || gm.lesson || '')}</td>
                <td class="p-3 font-semibold text-slate-900 dark:text-white">${escapeHtml(gm.trọngĐiểm || gm.point || '')}</td>
                <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(gm.cáchDùng || gm.explanation || '')}</td>
              </tr>
  `;
});

html += `
            </tbody>
          </table>
        </div>
      </div>

      <!-- Bảng Trợ từ & Lượng từ -->
      <div class="space-y-3 pt-2">
        <h4 class="text-sm font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
          <i class="fa-solid fa-puzzle-piece"></i> Bảng Trợ Từ &amp; Lượng Từ Cốt Lõi
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
`;

particlesAndMeasureWords.forEach(item => {
  html += `
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="font-han text-lg font-black text-rose-600 dark:text-rose-400">${escapeHtml(item.từ || item.char || '')}</span>
              <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">${escapeHtml(item.loại || item.name || '')}</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(item.cáchDùng || item.usage || '')}</p>
          </div>
  `;
});

html += `
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
        <button onclick="closeModal('grammarModal')" class="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg transition">Đóng ma trận</button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 3: EXAM 40 QUESTIONS (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-[#111827] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-red-500 shadow-2xl flex flex-col">
      <!-- Exam Sticky Header -->
      <div class="sticky top-0 z-10 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div>
          <span class="text-[11px] uppercase tracking-wider font-extrabold text-red-600 flex items-center gap-1">
            <i class="fa-solid fa-trophy"></i> Đấu Trường Trạng Nguyên Hán Ngữ 7
          </span>
          <h3 class="text-lg font-black text-slate-900 dark:text-white">Bài Thi Toàn Diện Học Kì (40 Câu)</h3>
        </div>

        <div class="flex items-center gap-3">
          <!-- Countdown Timer -->
          <div id="examTimerBadge" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 font-mono text-sm font-black text-red-600 dark:text-red-400">
            <i class="fa-regular fa-clock text-xs"></i>
            <span id="examTimerDisplay">60:00</span>
          </div>

          <button onclick="closeModal('examModal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-600 transition flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="p-6 space-y-6">
        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-info text-amber-500"></i>
            <span>Thời gian làm bài: <strong>60 phút</strong>. Gồm 4 khối kiến thức: Ngữ âm biến điệu, Ngữ pháp, Trợ từ & Lượng từ, Đọc hiểu văn hóa.</span>
          </div>
          <span class="font-bold">Tổng 40 câu / 10 điểm</span>
        </div>

        <!-- Questions List -->
        <form id="examForm" class="space-y-6" onsubmit="event.preventDefault(); submitExam();">
`;

tiengTrung7ExamQuestions.forEach((q, idx) => {
  html += `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-3 exam-q-card" data-idx="${idx}">
            <div class="flex items-start justify-between gap-3">
              <span class="font-extrabold text-sm text-slate-900 dark:text-white leading-relaxed">
                <span class="text-rose-600 dark:text-rose-400">Câu ${idx + 1}:</span> ${escapeHtml(q.q)}
              </span>
              <span class="text-[11px] font-bold text-slate-400 shrink-0">0,25 đ</span>
            </div>

            <div class="space-y-2 pt-1">
  `;
  q.options.forEach((opt, oIdx) => {
    html += `
              <label class="flex items-center gap-3 p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-rose-400 dark:hover:border-rose-500 transition cursor-pointer text-xs">
                <input type="radio" name="q_${idx}" value="${oIdx}" class="text-rose-600 focus:ring-rose-500">
                <span class="font-bold text-slate-400">${String.fromCharCode(65 + oIdx)}.</span>
                <span class="text-slate-700 dark:text-slate-200 font-medium">${escapeHtml(opt)}</span>
              </label>
    `;
  });
  html += `
            </div>
            <div id="exam_explain_${idx}" class="hidden p-3 rounded-lg text-xs leading-relaxed mt-2 border"></div>
          </div>
  `;
});

html += `
          <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span class="text-xs text-slate-500 dark:text-slate-400">Kiểm tra kĩ tất cả các câu trước khi bấm nộp bài.</span>
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-extrabold text-xs shadow-lg shadow-rose-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
              <i class="fa-solid fa-paper-plane"></i> Nộp Bài & Xem Điểm
            </button>
          </div>
        </form>

        <!-- Exam Result Modal Card -->
        <div id="examResultBox" class="hidden p-6 rounded-2xl bg-gradient-to-br from-rose-900 to-red-950 text-white border border-rose-500/40 space-y-4 text-center">
          <div class="text-4xl" id="examResultIcon">🏆</div>
          <h4 class="text-2xl font-black" id="examResultTitle">Chúc mừng bạn đã hoàn thành bài thi!</h4>
          <div class="flex items-center justify-center gap-6 py-2">
            <div>
              <div class="text-3xl font-black text-amber-300" id="examScoreText">0.0 / 10</div>
              <div class="text-xs text-rose-200 font-semibold uppercase mt-0.5">Điểm Số Đạt Được</div>
            </div>
            <div class="h-10 w-px bg-white/20"></div>
            <div>
              <div class="text-3xl font-black text-amber-300" id="examCorrectCount">0 / 40</div>
              <div class="text-xs text-rose-200 font-semibold uppercase mt-0.5">Số Câu Trả Lời Đúng</div>
            </div>
          </div>
          <p class="text-xs text-rose-100/90 max-w-md mx-auto leading-relaxed" id="examFeedbackText"></p>
          <div class="pt-2 flex justify-center gap-3">
            <button onclick="reviewExamAnswers()" class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition">Xem Lời Giải Chi Tiết</button>
            <button onclick="restartExam()" class="px-4 py-2 rounded-lg bg-amber-500 text-slate-900 hover:bg-amber-400 text-xs font-extrabold transition">Thi Lại Lần Nữa</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] py-10 px-4 text-center text-xs text-slate-500 space-y-2">
    <div class="flex items-center justify-center gap-2 text-rose-600 font-bold text-sm">
      <i class="fa-solid fa-graduation-cap"></i> Học Liệu Số GDPT 2018 — Tiếng Trung Quốc 7
    </div>
    <p>Nội dung biên soạn dựa trên sách giáo khoa Tiếng Trung Quốc 7 — Kết nối tri thức với cuộc sống.</p>
    <p class="text-[11px] text-slate-400">Tích hợp Web Speech API công nghệ tổng hợp giọng nói Quan thoại (zh-CN) chuẩn bản ngữ.</p>
  </footer>

  <!-- ==================== JAVASCRIPT LOGIC ==================== -->
  <script>
    // 1. Web Speech API (zh-CN)
    function speakZh(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.88; // Tốc độ hơi chậm cho học sinh lớp 7 dễ nghe
      u.pitch = 1.0;
      window.speechSynthesis.speak(u);
    }

    // Play dialogue sequence
    function playFullDialogue(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const rows = container.querySelectorAll('.dlg-row');
      if (!rows || rows.length === 0) return;

      window.speechSynthesis.cancel();
      let currentIndex = 0;

      function speakNext() {
        if (currentIndex >= rows.length) return;
        const row = rows[currentIndex];
        const zh = row.getAttribute('data-zh');
        const u = new SpeechSynthesisUtterance(zh);
        u.lang = 'zh-CN';
        u.rate = 0.88;
        row.classList.add('bg-rose-100', 'dark:bg-rose-950/70');
        u.onend = function() {
          row.classList.remove('bg-rose-100', 'dark:bg-rose-950/70');
          currentIndex++;
          setTimeout(speakNext, 400);
        };
        u.onerror = function() {
          row.classList.remove('bg-rose-100', 'dark:bg-rose-950/70');
          currentIndex++;
          speakNext();
        };
        window.speechSynthesis.speak(u);
      }

      speakNext();
    }

    // 2. Modals Control
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        if (id === 'examModal' && !examTimerInterval) {
          startExamTimer();
        }
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    // 3. Mini-quiz in lessons
    function checkMiniQuiz(quizId, chosenIdx, correctIdx) {
      const feedback = document.getElementById(quizId + '_feedback');
      if (!feedback) return;

      if (chosenIdx === correctIdx) {
        feedback.className = 'text-xs p-2.5 rounded-lg font-medium leading-relaxed mt-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 block';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i><strong>Chính xác!</strong> Bạn đã chọn đúng đáp án rồi.';
      } else {
        feedback.className = 'text-xs p-2.5 rounded-lg font-medium leading-relaxed mt-2 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800 block';
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mr-1.5"></i><strong>Chưa chính xác!</strong> Hãy xem lại phần từ vựng và ngữ pháp ở trên để thử lại nhé.';
      }
    }

    // 4. Dark / Light Mode Toggle
    function toggleTheme() {
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

    // 5. Exam 40 Questions Data & Logic
    const examQuestionsData = ${JSON.stringify(tiengTrung7ExamQuestions)};
    let examTimeRemaining = 3600; // 60:00
    let examTimerInterval = null;

    function startExamTimer() {
      const timerDisplay = document.getElementById('examTimerDisplay');
      if (!timerDisplay) return;

      examTimerInterval = setInterval(() => {
        if (examTimeRemaining <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
          alert('Hết thời gian 60 phút! Hệ thống đã tự động nộp bài.');
          return;
        }
        examTimeRemaining--;
        const m = Math.floor(examTimeRemaining / 60);
        const s = examTimeRemaining % 60;
        timerDisplay.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);

        const badge = document.getElementById('examTimerBadge');
        if (examTimeRemaining < 300) {
          badge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-600 text-white font-mono text-sm font-black animate-pulse';
        } else if (examTimeRemaining < 900) {
          badge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 text-amber-600 font-mono text-sm font-black';
        }
      }, 1000);
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);

      let correctCount = 0;
      examQuestionsData.forEach((q, idx) => {
        const radios = document.getElementsByName('q_' + idx);
        let selected = -1;
        for (let r of radios) {
          if (r.checked) {
            selected = parseInt(r.value);
            break;
          }
        }
        if (selected === q.answer) {
          correctCount++;
        }
      });

      const score = (correctCount * 0.25).toFixed(2);
      document.getElementById('examScoreText').textContent = score + ' / 10';
      document.getElementById('examCorrectCount').textContent = correctCount + ' / 40';

      let title = '';
      let icon = '🏆';
      let feedback = '';

      if (correctCount >= 36) {
        icon = '👑';
        title = 'Xuất Sắc! Đạt Danh Hiệu: TRẠNG NGUYÊN HÁN NGỮ 7';
        feedback = 'Bạn nắm vững toàn bộ kiến thức ngữ âm biến điệu, 12 bài học ngữ pháp và các chủ đề giao tiếp! Chúc mừng bạn đã hoàn thành xuất sắc.';
      } else if (correctCount >= 30) {
        icon = '🥈';
        title = 'Giỏi! Đạt Danh Hiệu: BẢNG NHÃN HÁN HỌC';
        feedback = 'Kiến thức ngữ pháp và từ vựng rất vững chắc. Ôn luyện thêm một vài quy tắc trợ từ và biến điệu để đạt điểm tuyệt đối nhé!';
      } else if (correctCount >= 20) {
        icon = '🥉';
        title = 'Khá! Đạt Danh Hiệu: THÁM HOA HỌC SĨ';
        feedback = 'Bạn đã nắm được các điểm cơ bản của chương trình lớp 7. Hãy xem lại phần giải thích chi tiết để củng cố các câu còn nhầm lẫn.';
      } else {
        icon = '📖';
        title = 'Cần Ôn Luyện Thêm!';
        feedback = 'Hãy mở Ma Trận Ngữ Pháp và Sổ Tay Pinyin để ôn tập lại kiến thức trước khi thử sức lần sau nhé.';
      }

      document.getElementById('examResultIcon').textContent = icon;
      document.getElementById('examResultTitle').textContent = title;
      document.getElementById('examFeedbackText').textContent = feedback;

      document.getElementById('examForm').classList.add('hidden');
      document.getElementById('examResultBox').classList.remove('hidden');
    }

    function reviewExamAnswers() {
      document.getElementById('examResultBox').classList.add('hidden');
      document.getElementById('examForm').classList.remove('hidden');

      examQuestionsData.forEach((q, idx) => {
        const explainBox = document.getElementById('exam_explain_' + idx);
        if (explainBox) {
          explainBox.classList.remove('hidden');
          const radios = document.getElementsByName('q_' + idx);
          let selected = -1;
          for (let r of radios) {
            if (r.checked) {
              selected = parseInt(r.value);
              break;
            }
          }

          if (selected === q.answer) {
            explainBox.className = 'p-3 rounded-lg text-xs leading-relaxed mt-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 block';
            explainBox.innerHTML = '<span class="font-bold text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-check mr-1"></i>Đáp án đúng: ' + String.fromCharCode(65 + q.answer) + '.</span> ' + q.explain;
          } else {
            explainBox.className = 'p-3 rounded-lg text-xs leading-relaxed mt-2 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800 block';
            explainBox.innerHTML = '<span class="font-bold text-rose-700 dark:text-rose-400"><i class="fa-solid fa-xmark mr-1"></i>Đáp án đúng: ' + String.fromCharCode(65 + q.answer) + ' (Bạn chọn ' + (selected >= 0 ? String.fromCharCode(65 + selected) : 'chưa chọn') + ').</span> ' + q.explain;
          }
        }
      });
    }

    function restartExam() {
      document.getElementById('examForm').reset();
      examQuestionsData.forEach((q, idx) => {
        const explainBox = document.getElementById('exam_explain_' + idx);
        if (explainBox) explainBox.classList.add('hidden');
      });
      document.getElementById('examResultBox').classList.add('hidden');
      document.getElementById('examForm').classList.remove('hidden');
      examTimeRemaining = 3600;
      startExamTimer();
    }
  </script>
</body>
</html>
`;

const outputPath1 = path.join(__dirname, '../courses/tiengtrung_7.html');
const outputPath2 = path.join(__dirname, '../courses/chinese_7.html');

fs.writeFileSync(outputPath1, html, 'utf8');
fs.writeFileSync(outputPath2, html, 'utf8');

console.log('Successfully written to:');
console.log('-', outputPath1, '(' + html.length + ' bytes)');
console.log('-', outputPath2, '(' + html.length + ' bytes)');
