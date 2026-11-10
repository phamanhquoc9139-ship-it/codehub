const fs = require('fs');
const path = require('path');
const { lessonsData, generateChineseUnitSVG } = require('./generate_tiengtrung6_data.js');

function buildTiengTrung6HTML() {
  const navItems = lessonsData.map(l => `
    <a href="#lesson-${l.id}" class="lesson-nav-link flex items-center justify-between p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-gray-700 dark:text-gray-300 transition group text-xs font-semibold" data-id="${l.id}">
      <span class="truncate flex items-center gap-2">
        <span class="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400 flex items-center justify-center text-[10px] font-bold">${l.id}</span>
        ${l.titleCn}
      </span>
      <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 font-normal">CĐ${l.themeId}</span>
    </a>
  `).join('\n');

  const lessonSections = lessonsData.map(l => {
    const svgCode = generateChineseUnitSVG(l.id);

    // Chuỗi text nghe toàn bộ từ vựng và câu của bài
    const allVocabSpeech = l.vocab.map(v => v.hanzi).join('，');
    const allSentencesSpeech = l.sentences.map(s => s.hanzi).join(' ');
    const fullAudioText = `${allVocabSpeech}。${allSentencesSpeech}`;

    const vocabCards = l.vocab.map(v => `
      <div class="vocab-card p-3 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 hover:border-rose-400 dark:hover:border-rose-500 shadow-sm transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-sm font-black text-rose-600 dark:text-rose-400 font-serif">${v.hanzi}</span>
            <button onclick="playChinese('${v.hanzi.replace(/'/g, "\\'")}')" class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950 dark:hover:bg-rose-900 text-rose-600 dark:text-rose-300 flex items-center justify-center transition shadow-sm" title="Phát âm tiếng Trung">
              <i class="fa-solid fa-volume-high text-xs"></i>
            </button>
          </div>
          <div class="text-xs font-mono text-amber-600 dark:text-amber-400 mb-1">${v.pinyin}</div>
        </div>
        <div class="text-xs text-gray-700 dark:text-gray-300 font-medium pt-1.5 border-t border-gray-100 dark:border-gray-700/60">
          ${v.meaning}
        </div>
      </div>
    `).join('\n');

    const sentenceRows = l.sentences.map(s => `
      <div class="p-3 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 hover:border-rose-300 dark:hover:border-rose-700 transition space-y-1.5">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <button onclick="playChinese('${s.hanzi.replace(/'/g, "\\'")}')" class="px-2 py-0.5 rounded-md bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-semibold transition flex items-center gap-1 shadow-sm" title="Nghe câu mẫu">
              <i class="fa-solid fa-volume-high text-[10px]"></i> <span>Nghe</span>
            </button>
            <span class="text-sm font-bold text-gray-900 dark:text-white font-serif">${s.hanzi}</span>
          </div>
          <span class="text-xs font-mono text-amber-600 dark:text-amber-400">${s.pinyin}</span>
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-300 italic pl-8">
          &rarr; ${s.meaning}
        </div>
      </div>
    `).join('\n');

    const quizCards = l.quizzes.map((q, qIdx) => `
      <div class="quiz-item p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700" data-lesson="${l.id}" data-q="${qIdx}">
        <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 text-xs font-bold">Q${qIdx + 1}</span>
          <span>${q.q}</span>
        </p>
        <div class="space-y-2">
          ${q.options.map((opt, optIdx) => `
            <button onclick="checkChineseQuiz(this, ${l.id}, ${qIdx}, ${optIdx}, ${q.ans})" class="quiz-opt-btn w-full text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:bg-rose-50/50 dark:hover:bg-rose-900/20 text-xs text-gray-700 dark:text-gray-300 transition flex items-center justify-between">
              <span><b>${String.fromCharCode(65 + optIdx)}.</b> ${opt.replace(/^\(Recommended\)\s*/, '')}</span>
              <i class="quiz-feedback-icon fa-regular fa-circle text-gray-300 text-xs"></i>
            </button>
          `).join('\n')}
        </div>
        <div class="quiz-expl hidden mt-3 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
          <div class="font-bold flex items-center gap-1.5 mb-1"><i class="fa-solid fa-circle-check"></i> Lời giải chi tiết:</div>
          <p>${q.expl}</p>
        </div>
      </div>
    `).join('\n');

    return `
      <!-- ==================== ${l.lessonNum}: ${l.titleCn} ==================== -->
      <section id="lesson-${l.id}" class="lesson-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md">
        
        <!-- Header Bài học -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg bg-rose-600 text-white font-black text-xs uppercase tracking-wider">${l.lessonNum}</span>
            <span class="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold text-xs border border-rose-200 dark:border-rose-800">${l.theme}</span>
          </div>
          <span class="text-xs font-bold text-gray-400">${l.titleVn}</span>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2 font-serif">
              <i class="fa-solid fa-book-open text-rose-600"></i> ${l.titleCn}
            </h3>
            <p class="text-xs font-mono text-amber-600 dark:text-amber-400 mt-0.5">${l.titlePy}</p>
          </div>
          <!-- Nút Nghe Toàn Bài -->
          <button onclick="playChinese('${fullAudioText.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold shadow-sm shadow-rose-500/20 transition cursor-pointer w-fit">
            <i class="fa-solid fa-headphones"></i>
            <span>Nghe toàn bài (Từ &amp; Câu)</span>
          </button>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-4 p-4 rounded-xl bg-gradient-to-br from-rose-50/40 via-amber-50/20 to-orange-50/30 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border border-rose-100 dark:border-rose-900/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy cốt lõi • ${l.lessonNum}: ${l.titleCn}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Tiếng Trung 6 • THCS</span>
          </div>
          <div class="w-full overflow-x-auto py-1">
            ${svgCode}
          </div>
        </div>

        <!-- Khối Ngữ Pháp Trọng Điểm -->
        <div class="my-5 p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          <h4 class="text-sm font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cube text-amber-600"></i> Ngữ Pháp Trọng Điểm: ${l.grammar.title}
          </h4>
          <div class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-mono whitespace-pre-line bg-white/80 dark:bg-gray-800/80 p-3 rounded-lg border border-amber-100 dark:border-amber-800/80">${l.grammar.rule}</div>
        </div>

        <!-- Khối Từ Vựng Cốt Lõi -->
        <div class="my-5">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-spell-check text-rose-600"></i> Bảng Từ Vựng Cốt Lõi (Kèm Pinyin &amp; Audio zh-CN)
            </h4>
            <span class="text-[11px] text-gray-400">Bấm 🔊 để nghe phát âm</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
            ${vocabCards}
          </div>
        </div>

        <!-- Khối Câu Mẫu Luyện Nghe -->
        <div class="my-5">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-comments text-blue-600"></i> Câu Mẫu Luyện Nghe Trọng Điểm
          </h4>
          <div class="space-y-2">
            ${sentenceRows}
          </div>
        </div>

        <!-- Khối Trắc Nghiệm Ôn Tập -->
        <div class="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
          <h4 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-clipboard-question text-rose-600"></i> Luyện Tập Củng Cố (Tự Chấm Điểm)
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${quizCards}
          </div>
        </div>

      </section>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="zh-CN" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Trung 6 (Hán Ngữ 6 - CTGDPT 2018: 4 Chủ Điểm • 16 Bài Học • Web Speech API zh-CN &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            rose: {
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              300: '#fda4af',
              400: '#fb7185',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
              950: '#4c0519'
            },
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0a0d14'
            }
          }
        }
      }
    };
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Google Fonts: Inter & Noto Serif SC -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Serif+SC:wght@600;700;900&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .font-hanzi { font-family: 'Noto Serif SC', 'PingFang SC', 'Microsoft YaHei', serif; }
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen antialiased transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-amber-600 to-red-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-dragon text-lg"></i>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block leading-tight">CodeHub THCS</span>
            <h1 class="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white leading-tight">TIẾNG TRUNG 6 (中文 6)</h1>
          </div>
        </a>
        <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
          4 Chủ Điểm • 16 Bài Học • zh-CN
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Nút Bảng Pinyin & 4 Thanh điệu -->
        <button onclick="openPinyinModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-bold transition flex items-center gap-1.5 border border-amber-200 dark:border-amber-800">
          <i class="fa-solid fa-font text-amber-600"></i>
          <span class="hidden md:inline">Bảng Pinyin</span> &amp; 4 Thanh
        </button>

        <!-- Nút Sổ tay Ngữ pháp -->
        <button onclick="openGrammarModal()" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold transition flex items-center gap-1.5 border border-rose-200 dark:border-rose-800">
          <i class="fa-solid fa-cube text-rose-600"></i>
          <span class="hidden md:inline">Sổ Tay</span> Ngữ Pháp
        </button>

        <!-- Nút Trạng Nguyên Hán Ngữ (60:00) -->
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 via-amber-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-rose-500/20">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Dark/Light Mode -->
        <button id="themeToggleBtn" class="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition" title="Đổi giao diện Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline"></i>
        </button>

        <!-- Back to Home -->
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition" title="Trang chủ CodeHub">
          <i class="fa-solid fa-house"></i>
        </a>
      </div>

    </div>
  </header>

  <!-- ==================== BODY WRAPPER ==================== -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-6">

      <!-- ==================== SIDEBAR ==================== -->
      <aside class="w-full lg:w-72 flex-shrink-0">
        <div class="sticky top-20 bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          
          <!-- Search in page -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="lessonSearchInput" placeholder="Tìm chữ Hán, pinyin, ngữ pháp..."
              class="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500">
          </div>

          <!-- Progress Widget -->
          <div class="p-3 rounded-xl bg-gradient-to-br from-rose-50 to-amber-50/50 dark:from-rose-950/40 dark:to-gray-800 border border-rose-100 dark:border-rose-900/40">
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span class="font-bold text-rose-900 dark:text-rose-300">Tiến độ bài học</span>
              <span id="progress-percent" class="font-bold text-rose-600 dark:text-rose-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-rose-600 rounded-full transition-all duration-300" style="width: 0%;"></div>
            </div>
            <div class="mt-2 text-[10px] text-gray-500 dark:text-gray-400 flex justify-between">
              <span>Đã trả lời <b id="answered-count">0</b>/24 câu</span>
              <span>16 Bài học</span>
            </div>
          </div>

          <!-- Speech Speed -->
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-2 text-xs">
            <div class="flex items-center justify-between font-bold text-gray-700 dark:text-gray-300">
              <span><i class="fa-solid fa-volume-high text-rose-500"></i> Tốc độ đọc (zh-CN):</span>
              <span id="rateLabel" class="text-rose-600 font-mono">0.85x</span>
            </div>
            <input type="range" id="speechRateRange" min="0.6" max="1.2" step="0.05" value="0.85" class="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-600">
            <p class="text-[10px] text-gray-400 leading-tight">Tốc độ chuẩn 0.85x rõ ràng, chậm vừa phải cho học sinh lớp 6.</p>
          </div>

          <!-- Navigation Links -->
          <div>
            <div class="flex items-center justify-between mb-2 px-1">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Mục lục 16 bài</span>
              <span class="text-[10px] text-rose-600 font-bold">4 Chủ điểm</span>
            </div>
            <nav id="lesson-nav-list" class="space-y-1 max-h-[360px] overflow-y-auto pr-1">
              ${navItems}
            </nav>
          </div>

        </div>
      </aside>

      <!-- ==================== MAIN CONTENT ==================== -->
      <main class="flex-1 space-y-6">

        <!-- HERO BANNER -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 via-amber-600 to-red-600 p-6 sm:p-8 text-white shadow-xl shadow-rose-500/10">
          <div class="absolute -right-8 -bottom-8 w-60 h-60 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="relative z-10 max-w-2xl">
            <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-rose-100 mb-3">
              <i class="fa-solid fa-graduation-cap"></i> Tiếng Trung 6 • CTGDPT 2018 (Ngoại Ngữ 2 THCS)
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
              TIẾNG TRUNG 6 (中文 6)
            </h2>
            <p class="text-sm sm:text-base text-rose-100 font-medium leading-relaxed mb-4">
              Hệ thống hóa toàn bộ kiến thức cốt lõi qua 4 Chủ điểm lớn (16 bài học): Chữ Hán chuẩn mực, Pinyin phiên âm, Câu mẫu giao tiếp thực tế và chức năng nghe phát âm chuẩn phổ thông Trung Quốc (zh-CN) qua Web Speech API không cần MP3.
            </p>
            <div class="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-md text-white flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group text-amber-300"></i> 4 Chủ Điểm • 16 Bài Học
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-md text-white flex items-center gap-1.5">
                <i class="fa-solid fa-volume-high text-cyan-300"></i> Nghe Chữ Hán &amp; Câu Mẫu
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-md text-white flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-emerald-300"></i> 24 Câu Trắc Nghiệm Tự Chấm
              </span>
            </div>
          </div>
        </div>

        <!-- 16 LESSON SECTIONS -->
        <div class="space-y-6">
          ${lessonSections}
        </div>

      </main>

    </div>
  </div>

  <!-- ==================== MODAL 1: BẢNG PINYIN & 4 THANH ĐIỆU ==================== -->
  <div id="pinyinModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="w-full max-w-4xl max-h-[85vh] bg-white dark:bg-gray-850 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-850">
        <h3 class="text-base sm:text-lg font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
          <i class="fa-solid fa-font text-amber-600"></i> Bảng Pinyin &amp; 4 Thanh Điệu Tiếng Trung
        </h3>
        <button onclick="closePinyinModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-800 dark:hover:text-white flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-3.5 rounded-xl bg-amber-50/50 dark:bg-gray-800 border border-amber-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-amber-800 dark:text-amber-300">Thanh 1 (Âm Bình: ā)</span>
              <button onclick="playChinese('mā, bā, tā, fā')" class="text-xs bg-amber-600 text-white px-2 py-0.5 rounded">🔊 Nghe</button>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-xs">Đọc cao và bằng phẳng (5-5): mā (mẹ), bā (tám), tā (anh ấy/cô ấy).</p>
          </div>

          <div class="p-3.5 rounded-xl bg-orange-50/50 dark:bg-gray-800 border border-orange-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-orange-800 dark:text-orange-300">Thanh 2 (Dương Bình: á)</span>
              <button onclick="playChinese('má, shé, rén, bái')" class="text-xs bg-orange-600 text-white px-2 py-0.5 rounded">🔊 Nghe</button>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-xs">Đi từ trung bình lên cao (3-5, giống dấu sắc tiếng Việt): rén (người), má (gai).</p>
          </div>

          <div class="p-3.5 rounded-xl bg-rose-50/50 dark:bg-gray-800 border border-rose-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-rose-800 dark:text-rose-300">Thanh 3 (Thượng Thanh: ǎ)</span>
              <button onclick="playChinese('mǎ, hǎo, nǐ, xiǎng')" class="text-xs bg-rose-600 text-white px-2 py-0.5 rounded">🔊 Nghe</button>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-xs">Xuống thấp rồi lên cao (2-1-4, giống dấu hỏi/ngã): mǎ (ngựa), hǎo (tốt), nǐ (bạn).</p>
          </div>

          <div class="p-3.5 rounded-xl bg-red-50/50 dark:bg-gray-800 border border-red-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-red-800 dark:text-red-300">Thanh 4 (Khứ Thanh: à)</span>
              <button onclick="playChinese('mà, dà, qù, kàn')" class="text-xs bg-red-600 text-white px-2 py-0.5 rounded">🔊 Nghe</button>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-xs">Rơi mạnh dứt khoát từ cao nhất xuống thấp nhất (5-1): mà (mắng), dà (to), qù (đi).</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 2: SỔ TAY NGỮ PHÁP ==================== -->
  <div id="grammarModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="w-full max-w-4xl max-h-[85vh] bg-white dark:bg-gray-850 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-rose-50 to-amber-50 dark:from-gray-800 dark:to-gray-850">
        <h3 class="text-base sm:text-lg font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
          <i class="fa-solid fa-cube text-rose-600"></i> Sổ Tay Ngữ Pháp Trọng Điểm Tiếng Trung 6
        </h3>
        <button onclick="closeGrammarModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-800 dark:hover:text-white flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto space-y-3 text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-rose-600">1. Từ phương vị &amp; Câu tồn tại:</span> Địa điểm + 有 / 是 / 在 + Đối tượng (墙上有一张地图).
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-blue-600">2. Bổ ngữ kết quả:</span> Động từ + 到 / 完 / 好 (做完, 买到, 准备好). Phủ định dùng '没有'.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-emerald-600">3. Động từ + 上 &amp; Trợ từ 吧:</span> 送上一份爱心, 我们去游泳吧！
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-amber-600">4. Phó từ 一起 &amp; Phó từ 就:</span> A 和/跟 B 一起 + V; 就 biểu thị hành động tiếp nối.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-purple-600">5. Cấu trúc so sánh:</span> A 跟 B 一样 (+ Tính từ) vs A 跟 B 不一样.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-red-600">6. Câu điều kiện:</span> 如果 / 要是 …… 的话，就 …… (Nếu... thì...).
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-teal-600">7. Trợ từ động thái 了 &amp; V1 + 了 …… 就 + V2:</span> 我们吃了饭就一起下棋.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-indigo-600">8. Câu khuyên ngăn &amp; Phó từ 最:</span> 不要/别……了; 最 + Tính từ/Động từ (最喜欢).
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-pink-600">9. Cụm chữ 的 &amp; Động từ lặp lại:</span> 这个房间是我弟弟的; 看看, 听听, 问问.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-orange-600">10. Liên từ tăng tiến &amp; nhượng bộ:</span> 不但……而且……; 虽然……但是…….
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-cyan-600">11. Mức độ cực điểm:</span> Tính từ + 得很 (辛苦得很) &amp; Tính từ + 极了 (好看极了).
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 3: TRẠNG NGUYÊN HÁN NGỮ (60:00) ==================== -->
  <div id="examModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-850 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      
      <!-- Exam Header -->
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-rose-600 via-amber-600 to-red-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            <i class="fa-solid fa-trophy text-amber-300"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black tracking-tight">HỘI THI TRẠNG NGUYÊN HÁN NGỮ 6</h3>
            <p class="text-xs text-rose-100">24 câu trắc nghiệm tổng hợp 16 bài học • Tự động chấm điểm</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/30 backdrop-blur font-mono text-sm font-bold text-amber-300">
            <i class="fa-solid fa-clock"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div id="examBody" class="p-6 overflow-y-auto space-y-6">
        <!-- Render bằng JS -->
      </div>

      <!-- Exam Footer -->
      <div class="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-900">
        <div id="examScoreResult" class="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
          Chưa nộp bài
        </div>
        <button id="submitExamBtn" onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-600/30 transition">
          Nộp bài &amp; Chấm điểm
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Web Speech API cho tiếng Trung phổ thông (zh-CN)
    let currentSpeechRate = 0.85;
    const rateRange = document.getElementById('speechRateRange');
    const rateLabel = document.getElementById('rateLabel');
    rateRange?.addEventListener('input', (e) => {
      currentSpeechRate = parseFloat(e.target.value);
      if (rateLabel) rateLabel.innerText = currentSpeechRate.toFixed(2) + 'x';
    });

    function playChinese(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Ngắt lượt đọc dở
        const cleanText = text.replace(/[\\/\\\\#,+()$~%.'":*?<>{}]/g, ' ');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'zh-CN'; // Ngôn ngữ tiếng Trung phổ thông chuẩn
        utterance.rate = currentSpeechRate; // Tốc độ điều chỉnh
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Trình duyệt hiện tại chưa hỗ trợ phát âm tự động qua Web Speech API.');
      }
    }

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    themeBtn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Modal Helpers
    function openPinyinModal() { document.getElementById('pinyinModal').classList.remove('hidden'); }
    function closePinyinModal() { document.getElementById('pinyinModal').classList.add('hidden'); }
    function openGrammarModal() { document.getElementById('grammarModal').classList.remove('hidden'); }
    function closeGrammarModal() { document.getElementById('grammarModal').classList.add('hidden'); }

    // Quiz Check Logic
    const answeredSet = new Set();
    function checkChineseQuiz(btn, lessonId, qIdx, optIdx, correctIdx) {
      const parent = btn.closest('.quiz-item');
      const allBtns = parent.querySelectorAll('.quiz-opt-btn');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-rose-500', 'bg-rose-50');
      });

      const icon = btn.querySelector('.quiz-feedback-icon');
      if (optIdx === correctIdx) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-800', 'dark:text-emerald-300', 'font-bold');
        icon.className = 'quiz-feedback-icon fa-solid fa-circle-check text-emerald-500';
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-800', 'dark:text-rose-300', 'font-bold');
        icon.className = 'quiz-feedback-icon fa-solid fa-circle-xmark text-rose-500';
        const correctBtn = allBtns[correctIdx];
        if (correctBtn) {
          correctBtn.classList.add('border-emerald-500', 'bg-emerald-50/50', 'dark:bg-emerald-950/20');
          correctBtn.querySelector('.quiz-feedback-icon').className = 'quiz-feedback-icon fa-solid fa-circle-check text-emerald-500';
        }
      }

      parent.querySelector('.quiz-expl')?.classList.remove('hidden');
      answeredSet.add(lessonId + '-' + qIdx);
      updateProgressBar();
    }

    function updateProgressBar() {
      const count = answeredSet.size;
      const total = 24;
      const pct = Math.min(100, Math.round((count / total) * 100));
      document.getElementById('answered-count').innerText = count;
      document.getElementById('progress-percent').innerText = pct + '%';
      document.getElementById('progress-bar').style.width = pct + '%';
    }

    // Live search inside lesson page
    const searchInput = document.getElementById('lessonSearchInput');
    searchInput?.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      const sections = document.querySelectorAll('.lesson-section');
      sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
    });

    // ==================== TRẠNG NGUYÊN (60:00) LOGIC ====================
    let examTimeSeconds = 3600;
    let examInterval = null;

    const examQuestions = [
      { q: "Từ phương vị nào có nghĩa là 'phía sau' ?", opts: ["后面 (hòumian)", "前面 (qiánmian)", "上面 (shàngmian)", "中间 (zhōngjiān)"], ans: 0 },
      { q: "Cấu trúc câu tồn tại đúng trong tiếng Trung là:", opts: ["Địa điểm + 有/在 + Đối tượng", "Đối tượng + 有 + Địa điểm", "Địa điểm + 是 + Có", "Trong + Ở + Đối tượng"], ans: 0 },
      { q: "Bổ ngữ kết quả '做完' có nghĩa là:", opts: ["Làm xong", "Làm tốt", "Làm được", "Đang làm"], ans: 0 },
      { q: "Dạng phủ định của bổ ngữ kết quả dùng từ nào?", opts: ["没有 (méiyǒu)", "不 (bù)", "别 (bié)", "无 (wú)"], ans: 0 },
      { q: "Trợ từ ngữ khí '吧' ở cuối câu biểu thị:", opts: ["Lời đề nghị, rủ rê thân mật", "Hành động quá khứ", "Sự phủ định tuyệt đối", "Sự tức giận"], ans: 0 },
      { q: "'爱心' (àixīn) trong tiếng Trung có nghĩa là:", opts: ["Lòng nhân ái, tình yêu thương", "Trái tim bằng giấy", "Sự quyên góp", "Bơi lội"], ans: 0 },
      { q: "Chọn câu đúng có phó từ '一起':", opts: ["我和同学们一起学习。", "我一起和同学们学习。", "我学习和同学们一起。", "我和同学们学习一起。"], ans: 0 },
      { q: "Ngày Nhà giáo Việt Nam trong tiếng Trung là:", opts: ["越南教师节", "越南妇女节", "越南国庆节", "越南儿童节"], ans: 0 },
      { q: "Cấu trúc so sánh bằng trong tiếng Trung là:", opts: ["A 跟 B 一样 (+ Tính từ)", "A 比 B 一样", "A 和 B 一样的", "A 跟 B 是"], ans: 0 },
      { q: "Đơn vị đo 'ki-lô-mét' (km) trong tiếng Trung là:", opts: ["公里 (gōnglǐ)", "米 (mǐ)", "斤 (jīn)", "块 (kuài)"], ans: 0 },
      { q: "Mẫu câu điều kiện giả thiết là:", opts: ["如果……的话，就……", "虽然……但是……", "因为……所以……", "不但……而且……"], ans: 0 },
      { q: "Hoạt động '包粽子' thường diễn ra vào dịp lễ nào?", opts: ["春节 (Tết Nguyên đán)", "中秋节 (Trung thu)", "教师节 (Ngày Nhà giáo)", "儿童节 (Tết Thiếu nhi)"], ans: 0 },
      { q: "Trong câu '我吃了饭就去学校', hành động nào xảy ra trước?", opts: ["吃饭 (Ăn cơm)", "去学校 (Đến trường)", "Hai hành động cùng lúc", "Không hành động nào"], ans: 0 },
      { q: "'电子游戏' có nghĩa là:", opts: ["Trò chơi điện tử", "Cờ vua", "Thể thao", "Đá bóng"], ans: 0 },
      { q: "Đại từ nghi vấn dùng để hỏi số nhiều 'những cái nào' là:", opts: ["哪些 (nǎxiē)", "哪个 (nǎge)", "什么 (shénme)", "谁 (shéi)"], ans: 0 },
      { q: "'锻炼身体' có nghĩa là:", opts: ["Rèn luyện sức khỏe, tập thể dục", "Đi khám bệnh", "Chơi cờ vua", "Ăn cơm xong"], ans: 0 },
      { q: "Câu chúc cổ vũ nhiệt tình nhất trong tiếng Trung là:", opts: ["加油！(jiāyóu!)", "祝贺！", "再见！", "谢谢！"], ans: 0 },
      { q: "Cấu trúc khuyên ngăn 'Đừng... nữa' là:", opts: ["不要……了 / 别……了", "没有……了", "不可以……", "不准……"], ans: 0 },
      { q: "Động tác lặp lại '听听' mang sắc thái nghĩa:", opts: ["Nghe thử một chút (nhẹ nhàng)", "Bắt buộc phải nghe", "Không được nghe", "Nghe trong mơ"], ans: 0 },
      { q: "Cụm mang trợ từ '的' trong '这个房间是我的' lược bỏ danh từ nào?", opts: ["房间 (căn phòng)", "书 (sách)", "笔 (bút)", "人 (người)"], ans: 0 },
      { q: "Cặp liên từ tăng tiến 'Không những... mà còn...' là:", opts: ["不但……而且……", "虽然……但是……", "因为……所以……", "如果……就……"], ans: 0 },
      { q: "Cặp liên từ nhượng bộ 'Tuy rằng... nhưng mà...' là:", opts: ["虽然……但是……", "不但……而且……", "只有……才……", "只要……就……"], ans: 0 },
      { q: "Hậu tố nào biểu thị mức độ cực điểm: 'Cực kỳ, vô cùng' ?", opts: ["……极了 (jíle)", "……一点儿", "……不太", "……没有"], ans: 0 },
      { q: "Người làm công việc '看病' (khám chữa bệnh) là:", opts: ["医生 (yīshēng)", "老师 (lǎoshī)", "邻居 (línjū)", "学生 (xuéshēng)"], ans: 0 }
    ];

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      renderExamQuestions();
      startExamTimer();
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
      clearInterval(examInterval);
    }

    function renderExamQuestions() {
      const container = document.getElementById('examBody');
      container.innerHTML = examQuestions.map((q, idx) => \`
        <div class="exam-q-box p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700" data-idx="\${idx}">
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
            <span class="text-rose-600 font-extrabold mr-1">Câu \${idx + 1}:</span> \${q.q}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            \${q.opts.map((opt, oIdx) => \`
              <label class="exam-opt flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-rose-50/50 dark:hover:bg-rose-950/30 cursor-pointer text-xs text-gray-700 dark:text-gray-300 transition">
                <input type="radio" name="exam_zh_q_\${idx}" value="\${oIdx}" class="text-rose-600 focus:ring-rose-500">
                <span><b>\${String.fromCharCode(65 + oIdx)}.</b> \${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
    }

    function startExamTimer() {
      clearInterval(examInterval);
      examTimeSeconds = 3600;
      examInterval = setInterval(() => {
        examTimeSeconds--;
        if (examTimeSeconds <= 0) {
          clearInterval(examInterval);
          submitExam();
        }
        const m = Math.floor(examTimeSeconds / 60);
        const s = examTimeSeconds % 60;
        document.getElementById('examTimer').innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
      }, 1000);
    }

    function submitExam() {
      clearInterval(examInterval);
      let score = 0;
      examQuestions.forEach((q, idx) => {
        const checked = document.querySelector(\`input[name="exam_zh_q_\${idx}"]:checked\`);
        const box = document.querySelector(\`.exam-q-box[data-idx="\${idx}"]\`);
        if (checked && parseInt(checked.value) === q.ans) {
          score++;
          box.classList.add('border-emerald-500', 'bg-emerald-50/40', 'dark:bg-emerald-950/20');
        } else {
          box.classList.add('border-rose-500', 'bg-rose-50/40', 'dark:bg-rose-950/20');
        }
      });

      const total = examQuestions.length;
      const pts = (score / total) * 10;
      document.getElementById('examScoreResult').innerHTML = \`
        <span class="text-rose-600 dark:text-rose-400 font-bold">Điểm số: \${score}/\${total} câu (\${pts.toFixed(1)} / 10 điểm)</span>
      \`;
      document.getElementById('submitExamBtn').innerText = 'Đã hoàn thành';
      document.getElementById('submitExamBtn').disabled = true;
    }
  </script>

</body>
</html>
`;
}

const outputPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengtrung_6.html';
const aliasPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chinese_6.html';

const html = buildTiengTrung6HTML();
fs.writeFileSync(outputPath, html, 'utf8');
fs.writeFileSync(aliasPath, html, 'utf8');

console.log('Successfully generated courses/tiengtrung_6.html and courses/chinese_6.html! File size:', html.length, 'bytes');
