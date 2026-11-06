// build_tiengtrung9_page.js
// Generator script for Tiếng Trung Quốc 9 (SGK GDPT 2018: 4 Chủ điểm &bull; 12 Bài &bull; 4 Ôn tập)
// Generates: courses/tiengtrung_9.html and courses/chinese_9.html (synchronized)

const fs = require('fs');
const path = require('path');

const { themesPart1 } = require('./tiengtrung9_data_p1.js');
const { themesPart2, grammarSummary14, deDiDeTable, communicationPhrases } = require('./tiengtrung9_data_p2.js');
const { getChineseLessonSVG } = require('./tiengtrung9_svgs.js');
const { examQuestions } = require('./tiengtrung9_exam.js');

const allThemes = [...themesPart1, ...themesPart2];

// Collect all vocabulary words across all lessons for Glossary Modal
const allVocabWords = [];
allThemes.forEach(t => {
  t.lessons.forEach(l => {
    if (l.vocab) {
      l.vocab.forEach(v => {
        allVocabWords.push({
          ...v,
          lesson: l.lessonNum,
          lessonTitle: l.title,
          themeNum: t.themeNum
        });
      });
    }
  });
});

function renderVocabCard(v) {
  const safeCn = (v.cn || '').replace(/'/g, "\\'");
  const safeEx = (v.ex || '').replace(/'/g, "\\'");
  return `
    <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-2 shadow-sm hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="flex items-baseline gap-2 flex-wrap">
            <span class="font-serif font-black text-slate-900 dark:text-white text-lg tracking-tight">${v.cn}</span>
            <span class="text-xs font-mono font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/80 px-2 py-0.5 rounded-md border border-red-200/60 dark:border-red-900">${v.py}</span>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">${v.vi}</p>
        </div>
        <button onclick="speakChinese('${safeCn}')" class="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/80 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white flex items-center justify-center text-xs transition shrink-0 shadow-sm" title="Nghe phát âm chuẩn Bắc Kinh">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
      ${v.ex ? `
      <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs text-red-700 dark:text-red-300 font-medium font-serif">例：${v.ex}</p>
          <button onclick="speakChinese('${safeEx}')" class="text-[11px] text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition" title="Nghe câu ví dụ">
            <i class="fa-solid fa-play text-[10px]"></i>
          </button>
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${v.viEx || ''}</p>
      </div>` : ''}
    </div>
  `;
}

function renderDialogue(dialogueList) {
  return `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
      <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Hội thoại thực tế (情景对话)</span>
        </div>
      </div>
      <div class="space-y-2">
        ${dialogueList.map(line => {
          const safeCn = (line.cn || '').replace(/'/g, "\\'");
          return `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm">
              <span class="font-black text-red-700 dark:text-red-400 shrink-0 w-16">${line.speaker}:</span>
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="font-serif font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">${line.cn}</span>
                  <button onclick="speakChinese('${safeCn}')" class="text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition" title="Nghe câu này">
                    <i class="fa-solid fa-volume-low text-[11px]"></i>
                  </button>
                </div>
                <div class="text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">${line.py}</div>
                <div class="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">${line.vi}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderQuiz(lessonId, quizList) {
  return `
    <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-red-50/40 dark:bg-slate-800/60 border border-red-200/60 dark:border-slate-700">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold">
            <i class="fa-solid fa-clipboard-check"></i>
          </div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Mini-Quiz Luyện Tập Nhanh (4 câu)</h4>
        </div>
        <span class="text-xs text-red-600 dark:text-red-400 font-semibold" id="${lessonId}-quiz-score">Chưa làm</span>
      </div>

      <div class="space-y-3.5">
        ${quizList.map((q, qIdx) => `
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">${qIdx + 1}. ${q.q}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              ${q.options.map((opt, oIdx) => `
                <button onclick="checkLessonQuiz('${lessonId}', ${qIdx}, ${oIdx}, ${q.ans}, this)" class="lesson-quiz-btn-${lessonId}-${qIdx} text-left px-3 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-red-50 dark:hover:bg-slate-800 transition flex items-center justify-between">
                  <span>${String.fromCharCode(65 + oIdx)}. ${opt}</span>
                  <i class="fa-regular fa-circle text-[10px] text-slate-400 check-icon"></i>
                </button>
              `).join('')}
            </div>
            <div id="${lessonId}-exp-${qIdx}" class="hidden p-2.5 rounded-lg text-xs mt-2 font-medium"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLessonSection(l) {
  const mindmapSvg = getChineseLessonSVG(l.id);
  const isReview = l.id.startsWith('on-tap-');

  return `
    <article id="${l.id}" class="lesson-article scroll-mt-24 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      
      <!-- Lesson Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900">
              ${l.lessonNum} &bull; SGK Tiếng Trung Quốc 9
            </span>
            <span class="text-xs font-mono text-red-500 font-semibold">• ${l.pinyin}</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-serif font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>${l.title}</span>
            <button onclick="speakChinese('${(l.title || '').replace(/'/g, "\\'")}')" class="text-sm text-slate-400 hover:text-red-600 transition" title="Nghe tiêu đề">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">${l.vietTitle}</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open text-red-500"></i> ${l.vocab ? l.vocab.length : 0} Từ vựng
          </span>
        </div>
      </div>

      <!-- Core Objective Banner -->
      <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-red-50/80 via-rose-50/60 to-amber-50/80 dark:from-slate-800/80 dark:via-red-950/30 dark:to-slate-800/80 border border-red-100 dark:border-red-900 flex items-start gap-3">
        <div class="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">
          <i class="fa-solid fa-bullseye"></i>
        </div>
        <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong class="font-extrabold text-red-900 dark:text-red-300">Năng lực cần đạt:</strong> ${l.target}
        </div>
      </div>

      <!-- Bespoke Vector SVG Infographic (for standard lessons) -->
      ${mindmapSvg ? `
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <i class="fa-solid fa-sitemap text-red-500"></i> Sơ đồ Tư duy Trực quan (Concept Mindmap)
          </h4>
          <span class="text-[11px] text-slate-400">Vector SVG Responsive</span>
        </div>
        <div class="w-full overflow-hidden">
          ${mindmapSvg}
        </div>
      </div>` : ''}

      <!-- Vocabulary Grid -->
      ${l.vocab && l.vocab.length > 0 ? `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-spell-check text-red-600"></i> 1. 生词 &bull; Từ vựng &amp; Thuật ngữ cốt lõi
          </h4>
          <span class="text-xs text-slate-400">${l.vocab.length} mục từ</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${l.vocab.map(v => renderVocabCard(v)).join('')}
        </div>
      </div>` : ''}

      <!-- Dialogue Section -->
      ${l.dialogue && l.dialogue.length > 0 ? `
      <div class="space-y-3">
        <h4 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <i class="fa-solid fa-comments text-amber-600"></i> 2. 情景对话 &bull; Hội thoại tình huống
        </h4>
        ${renderDialogue(l.dialogue)}
      </div>` : ''}

      <!-- Grammar Section -->
      ${l.grammar ? `
      <div class="space-y-3">
        <h4 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-indigo-600"></i> 3. 语法重点 &bull; Ngữ pháp trọng điểm
        </h4>
        <div class="p-4 sm:p-5 rounded-2xl bg-red-50/40 dark:bg-slate-800/60 border border-red-100 dark:border-red-900/60 space-y-3.5">
          <div class="flex items-center gap-2 text-red-900 dark:text-red-300 font-extrabold text-sm sm:text-base">
            <i class="fa-solid fa-brain"></i>
            <span>${l.grammar.title}</span>
          </div>
          <div class="space-y-3">
            ${l.grammar.rules.map(r => `
              <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-red-100 dark:border-slate-800 space-y-1.5 shadow-sm">
                <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  ${r.pattern}
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400">${r.desc}</p>
                <div class="p-2.5 rounded-lg bg-red-50/70 dark:bg-slate-800/80 font-serif text-xs text-red-800 dark:text-red-300 font-semibold flex items-center justify-between">
                  <span>例：${r.example}</span>
                  <button onclick="speakChinese('${r.example.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-red-600 ml-2" title="Nghe câu mẫu">
                    <i class="fa-solid fa-volume-low text-[10px]"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>` : ''}

      <!-- Culture Section -->
      ${l.culture ? `
      <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-slate-800/50 border border-amber-200/70 dark:border-amber-900/60 space-y-2">
        <div class="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
          <i class="fa-solid fa-earth-asia text-amber-600"></i> 文化角 &bull; Góc văn hóa &amp; So sánh Trung - Việt
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${l.culture}</p>
      </div>` : ''}

      <!-- Review Summary (for Review lessons) -->
      ${l.summary ? `
      <div class="p-4 rounded-2xl bg-indigo-50/60 dark:bg-slate-800/50 border border-indigo-200/70 dark:border-indigo-900/60 space-y-2">
        <div class="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
          <i class="fa-solid fa-list-check text-indigo-600"></i> Trọng tâm kiến thức ôn tập
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${l.summary}</p>
      </div>` : ''}

      <!-- Mini-Quiz -->
      ${l.quiz && l.quiz.length > 0 ? renderQuiz(l.id, l.quiz) : ''}

    </article>
  `;
}

function renderThemeSection(theme) {
  return `
    <section id="${theme.themeId}" class="theme-wrapper space-y-6 pt-4">
      <!-- Theme Header Banner -->
      <div class="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-md space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-sm border border-white/20">
            ${theme.themeNum}
          </span>
          <span class="text-xs text-amber-100 font-semibold">• 4 Bài học &amp; Ôn tập</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-serif font-black tracking-tight flex items-baseline gap-3">
          <span>${theme.chineseTitle}</span>
          <span class="text-base sm:text-lg font-sans font-normal opacity-90">${theme.vietTitle}</span>
        </h2>
        <p class="text-xs sm:text-sm text-red-50/90 leading-relaxed max-w-4xl">${theme.themeDesc}</p>
      </div>

      <!-- Lessons Container -->
      <div class="space-y-6">
        ${theme.lessons.map(l => renderLessonSection(l)).join('')}
      </div>
    </section>
  `;
}

// Assemble full HTML document
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Trung Quốc 9 (4 Chủ Điểm &bull; 12 Bài &bull; 4 Ôn Tập &bull; SGK GDPT 2018)</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            china: {
              red: '#dc2626',
              gold: '#eab308'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Noto Serif SC"', 'serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    }
  </script>

  <!-- Font Awesome Free 6.5.1 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts: Plus Jakarta Sans, Noto Serif SC, JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Noto+Serif+SC:wght@500;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-serif { font-family: 'Noto Serif SC', serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(220, 38, 38, 0.3);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(220, 38, 38, 0.6);
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-red-600 selection:text-white transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 text-red-600 dark:text-red-400 group">
          <div class="w-10 h-10 rounded-2xl bg-red-50 dark:bg-red-950 flex items-center justify-center text-lg font-black group-hover:scale-105 transition shadow-sm border border-red-200 dark:border-red-900">
            <i class="fa-solid fa-dragon text-red-600 dark:text-red-400"></i>
          </div>
          <div>
            <span class="text-xs uppercase tracking-widest font-extrabold text-red-700 dark:text-red-400 block leading-tight">CodeHub Academy</span>
            <span class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">Tiếng Trung Quốc 9</span>
          </div>
        </a>
        <span class="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900">
          SGK GDPT 2018 &bull; 4 Chủ điểm &bull; 12 Bài &bull; 4 Ôn tập
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Search trigger -->
        <button onclick="openHanziModal()" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <i class="fa-solid fa-magnifying-glass text-red-500"></i>
          <span class="hidden sm:inline">Tra cứu Chữ Hán &amp; Từ vựng</span>
        </button>

        <!-- Grammar Modal trigger -->
        <button onclick="openGrammarModal()" class="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 text-xs font-bold transition flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300">
          <i class="fa-solid fa-book-bookmark text-indigo-500"></i>
          <span class="hidden md:inline">Sổ tay 14 ngữ pháp</span>
        </button>

        <!-- Communication Modal trigger -->
        <button onclick="openCommunicationModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 text-xs font-bold transition flex items-center gap-1.5 text-amber-700 dark:text-amber-300">
          <i class="fa-solid fa-comments text-amber-500"></i>
          <span class="hidden lg:inline">Mẫu câu xuyên suốt</span>
        </button>

        <!-- Exam Modal trigger -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-crown text-amber-200"></i>
          <span>Trạng Nguyên (60p)</span>
        </button>

        <!-- Dark mode toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 transition" title="Đổi giao diện Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO SECTION ==================== -->
  <section class="relative bg-gradient-to-b from-red-600/10 via-amber-500/5 to-transparent border-b border-slate-200/80 dark:border-slate-800/80 pt-8 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
        <a href="../index.html" class="hover:text-red-600 transition flex items-center gap-1">
          <i class="fa-solid fa-house"></i>
          <span>Học liệu điện tử</span>
        </a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span>Khối Lớp 9</span>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span class="font-bold text-red-700 dark:text-red-300">Tiếng Trung Quốc 9 (4 Chủ điểm &bull; 12 Bài &bull; 4 Ôn tập)</span>
      </nav>

      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-2 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800">
            <i class="fa-solid fa-certificate text-red-600"></i> CHƯƠNG TRÌNH NGOẠI NGỮ 1 &bull; GDPT 2018
          </div>
          <h1 class="text-2xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-tight">
            Khóa Học Toàn Diện Tiếng Trung Quốc 9
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hệ thống hóa toàn bộ kiến thức 4 Chủ điểm theo SGK Tiếng Trung Quốc 9: phát triển 4 kỹ năng Nghe &bull; Nói &bull; Đọc &bull; Viết. Tích hợp âm thanh phát âm chuẩn Bắc Kinh (Web Speech API <code>zh-CN</code>), 12 Sơ đồ tư duy Vector SVG, Sổ tay tra cứu 14 chuyên đề ngữ pháp, Bảng phân biệt trợ từ kết cấu 的、地、得 và Đấu trường Trạng Nguyên 60:00.
          </p>
        </div>

        <!-- Stat Badges Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto shrink-0">
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span class="block text-xl font-black text-red-600 dark:text-red-400">4</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Chủ điểm (16 Bài)</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span class="block text-xl font-black text-amber-600 dark:text-amber-400">12</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sơ đồ Vector</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span class="block text-xl font-black text-indigo-600 dark:text-indigo-400">14</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Ngữ pháp cốt lõi</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span class="block text-xl font-black text-rose-600 dark:text-rose-400">25</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Trạng Nguyên (60p)</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================== MAIN CONTENT ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- STICKY SIDEBAR NAVIGATION (Col 3) -->
      <aside class="lg:col-span-3 sticky top-24 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
        
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-list-check text-red-600"></i>
            <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">Mục Lục Bài Học</h3>
          </div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">16 Phần</span>
        </div>

        <!-- Quick filter in sidebar -->
        <div class="relative">
          <input type="text" id="sidebarSearch" onkeyup="filterSidebar()" placeholder="Tìm nhanh bài học, chủ đề..." class="w-full text-xs pl-8 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 dark:text-slate-200">
          <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-xs text-slate-400"></i>
        </div>

        <nav class="space-y-1.5" id="sidebarNav">
          ${allThemes.map(t => `
            <div class="pt-2 pb-1 border-t border-slate-100 dark:border-slate-800/80 first:border-0 first:pt-0">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-red-700 dark:text-red-400 block mb-1">
                ${t.themeNum}: ${t.chineseTitle}
              </span>
              <div class="space-y-1">
                ${t.lessons.map(l => `
                  <a href="#${l.id}" class="sidebar-link flex items-center justify-between p-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-slate-800/80 transition group border border-transparent hover:border-red-100 dark:hover:border-slate-700">
                    <div class="flex items-center gap-2 truncate">
                      <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 group-hover:bg-red-600 group-hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center text-[10px] font-black shrink-0 transition">
                        ${l.lessonNum.replace(/Bài |Ôn tập /g, '')}
                      </span>
                      <span class="truncate font-serif">${l.title}</span>
                    </div>
                    <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 text-red-500 transition"></i>
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </nav>

        <!-- Quick Links in Sidebar -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
          <button onclick="openGrammarModal()" class="w-full py-2 px-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 dark:hover:bg-indigo-950/80 transition flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-book"></i> Sổ tay 14 quy tắc &amp; 的地得</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </button>
          <button onclick="openCommunicationModal()" class="w-full py-2 px-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold hover:bg-amber-100 dark:hover:bg-amber-950/80 transition flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-comments"></i> Mẫu câu xuyên suốt</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </button>
          <button onclick="openExamModal()" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black text-xs text-center shadow transition active:scale-95 flex items-center justify-center gap-2">
            <i class="fa-solid fa-crown text-amber-200"></i> Đấu Trường Trạng Nguyên
          </button>
        </div>

      </aside>

      <!-- THEMES & LESSONS (Col 9) -->
      <div class="lg:col-span-9 space-y-10">
        ${allThemes.map(t => renderThemeSection(t)).join('')}
      </div>

    </div>
  </main>

  <!-- ==================== MODAL 1: HANZI & VOCABULARY SEARCH ==================== -->
  <div id="modal-hanzi" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Tra Cứu Chữ Hán &amp; Từ Vựng Tiếng Trung Quốc 9</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Tổng hợp ${allVocabWords.length} mục từ chuẩn SGK kèm Audio giọng Bắc Kinh (zh-CN)</p>
          </div>
        </div>
        <button onclick="closeHanziModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div class="relative">
          <input type="text" id="glossarySearchInput" onkeyup="filterGlossary()" placeholder="Gõ chữ Hán, pinyin hoặc nghĩa tiếng Việt..." class="w-full text-sm pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 dark:text-slate-100">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400"></i>
        </div>
      </div>

      <div class="p-4 overflow-y-auto custom-scrollbar flex-1 space-y-2.5" id="glossaryListContainer">
        ${allVocabWords.map(v => {
          const safeCn = (v.cn || '').replace(/'/g, "\\'");
          return `
            <div class="glossary-item p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-3" data-search="${(v.cn + ' ' + v.py + ' ' + v.vi + ' ' + v.lesson).toLowerCase()}">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-serif font-black text-base text-slate-900 dark:text-white">${v.cn}</span>
                  <span class="text-xs font-mono font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 px-2 py-0.5 rounded">${v.py}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold">${v.lesson}</span>
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 mt-1">${v.vi}</p>
                ${v.ex ? `<p class="text-[11px] text-red-700 dark:text-red-400 font-serif italic mt-0.5">例：${v.ex} - ${v.viEx || ''}</p>` : ''}
              </div>
              <button onclick="speakChinese('${safeCn}')" class="w-8 h-8 rounded-xl bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs shrink-0 shadow-sm transition">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right">
        <button onclick="closeHanziModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition">
          Đóng cửa sổ
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: GRAMMAR SUMMARY (14 POINTS & 的地得) ==================== -->
  <div id="modal-grammar" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
      
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-book-open"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Bảng Tra Cứu 14 Trọng Điểm Ngữ Pháp &amp; Bảng Phân Biệt 的、地、得</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Trích xuất trực tiếp từ Mục 6 SGK Tiếng Trung Quốc 9</p>
          </div>
        </div>
        <button onclick="closeGrammarModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-6">
        
        <!-- Bảng 14 điểm ngữ pháp -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-2.5 flex items-center gap-1.5">
            <i class="fa-solid fa-table-list"></i> 14 Điểm Ngữ Pháp Cốt Lõi Lớp 9
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-red-50 dark:bg-red-950/80 text-red-900 dark:text-red-300 border-b border-red-200 dark:border-red-900">
                  <th class="p-2.5 rounded-l-xl font-bold">Điểm ngữ pháp</th>
                  <th class="p-2.5 font-bold">Công thức</th>
                  <th class="p-2.5 font-bold">Chức năng</th>
                  <th class="p-2.5 rounded-r-xl font-bold">Ví dụ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${grammarSummary14.map(g => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2.5 font-bold text-red-700 dark:text-red-400 whitespace-nowrap">${g.pt}</td>
                    <td class="p-2.5 font-mono text-slate-700 dark:text-slate-300">${g.formula}</td>
                    <td class="p-2.5 text-slate-600 dark:text-slate-400">${g.func}</td>
                    <td class="p-2.5 font-serif text-slate-800 dark:text-slate-200">${g.ex}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bảng phân biệt 的、地、得 -->
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2.5 flex items-center gap-1.5">
            <i class="fa-solid fa-check-double"></i> Phân Biệt Ba Trợ Từ Kết Cấu 的、地、得
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-indigo-50 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border-b border-indigo-200 dark:border-indigo-900">
                  <th class="p-2.5 rounded-l-xl font-bold">Trợ từ</th>
                  <th class="p-2.5 font-bold">Vị trí trong câu</th>
                  <th class="p-2.5 font-bold">Công dụng</th>
                  <th class="p-2.5 rounded-r-xl font-bold">Mẫu ví dụ đối chiếu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${deDiDeTable.map(d => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2.5 font-serif font-black text-sm text-indigo-700 dark:text-indigo-400">${d.particle}</td>
                    <td class="p-2.5 text-slate-700 dark:text-slate-300">${d.pos}</td>
                    <td class="p-2.5 text-slate-600 dark:text-slate-400">${d.func}</td>
                    <td class="p-2.5 font-serif text-slate-800 dark:text-slate-200">${d.ex}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right">
        <button onclick="closeGrammarModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition">
          Đóng lại
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: COMMUNICATION PHRASES ==================== -->
  <div id="modal-communication" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-comments"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Mẫu Câu Giao Tiếp Dùng Xuyên Suốt (Mục 8)</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Các mẫu câu hỏi trải nghiệm, nguyên nhân/kết quả, lựa chọn và trình bày</p>
          </div>
        </div>
        <button onclick="closeCommunicationModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-4">
        ${communicationPhrases.map(cp => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <i class="fa-solid fa-circle-dot"></i> ${cp.cat}
            </div>
            <div class="grid grid-cols-1 gap-2 text-xs">
              ${cp.list.map(it => {
                const safeCn = (it.cn || '').replace(/'/g, "\\'");
                return `
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div>
                      <div class="flex items-baseline gap-2">
                        <span class="font-serif font-bold text-slate-900 dark:text-white text-sm">${it.cn}</span>
                        <span class="text-xs font-mono text-amber-600 dark:text-amber-400">${it.py}</span>
                      </div>
                      <p class="text-slate-500 dark:text-slate-400 mt-0.5">${it.vi}</p>
                    </div>
                    <button onclick="speakChinese('${safeCn}')" class="text-slate-400 hover:text-amber-600 transition shrink-0">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right">
        <button onclick="closeCommunicationModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition">
          Đóng lại
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 4: ĐẤU TRƯỜNG TRẠNG NGUYÊN (60:00 TIMER) ==================== -->
  <div id="modal-exam" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
            <i class="fa-solid fa-crown text-amber-300"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Tiếng Trung Quốc 9</h3>
            <p class="text-xs text-amber-100">25 Câu Hỏi Tổng Hợp Toàn Cấp &bull; Thời gian 60:00 &bull; Vinh Danh Trạng Nguyên</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Countdown Timer -->
          <div class="px-3.5 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 text-white font-mono font-black text-sm flex items-center gap-2">
            <i class="fa-regular fa-clock text-amber-300"></i>
            <span id="examTimer">60:00</span>
          </div>

          <button onclick="closeExamModal()" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="p-5 sm:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6" id="examQuestionsContainer">
        
        <!-- Score Banner (hidden initially) -->
        <div id="examScoreBanner" class="hidden p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-rose-500/10 to-amber-500/10 border-2 border-red-400 dark:border-red-600 text-center space-y-2">
          <div class="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl mx-auto shadow-md">
            <i class="fa-solid fa-award"></i>
          </div>
          <h4 class="text-lg font-black text-slate-900 dark:text-white" id="examScoreText">0 / 25 Điểm</h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300" id="examFeedbackText"></p>
        </div>

        <div class="space-y-4">
          ${examQuestions.map((eq, idx) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <div class="flex items-start justify-between gap-2">
                <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">${eq.q}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                ${eq.options.map((opt, oIdx) => `
                  <label class="exam-option-label-${idx} flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-red-50 dark:hover:bg-slate-800 transition cursor-pointer text-xs font-medium font-serif">
                    <input type="radio" name="exam_q_${idx}" value="${oIdx}" class="text-red-600 focus:ring-red-500">
                    <span>${String.fromCharCode(65 + oIdx)}. ${opt}</span>
                  </label>
                `).join('')}
              </div>
              <div id="exam_exp_${idx}" class="hidden p-3 rounded-xl text-xs mt-2 border"></div>
            </div>
          `).join('')}
        </div>

      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
        <span class="text-xs text-slate-500 font-semibold" id="examProgressCount">Đã làm: 0/25 câu</span>
        <div class="flex items-center gap-2">
          <button onclick="closeExamModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition">
            Tạm dừng
          </button>
          <button onclick="submitExam()" id="btnSubmitExam" class="px-6 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-black text-xs shadow-md active:scale-95 transition">
            Nộp Bài Thi
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">Khóa Học Tiếng Trung Quốc 9 &bull; Nền Tảng Học Liệu Điện Tử CodeHub</p>
      <p>Biên soạn đối chiếu chuẩn SGK Tiếng Trung Quốc 9 (Ngoại ngữ 1 THCS - GDPT 2018). Tích hợp phát âm Web Speech API Bắc Kinh (zh-CN), Bản vẽ Vector SVG độc quyền và Đấu trường Trạng Nguyên.</p>
    </div>
  </footer>

  <!-- ==================== CORE JAVASCRIPT ==================== -->
  <script>
    // 1. Audio Speech Synthesis (Mandarin Chinese: zh-CN)
    function speakChinese(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }

    // 2. Dark / Light Mode Toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // 3. Modals Management
    function openHanziModal() { document.getElementById('modal-hanzi').classList.remove('hidden'); }
    function closeHanziModal() { document.getElementById('modal-hanzi').classList.add('hidden'); }

    function openGrammarModal() { document.getElementById('modal-grammar').classList.remove('hidden'); }
    function closeGrammarModal() { document.getElementById('modal-grammar').classList.add('hidden'); }

    function openCommunicationModal() { document.getElementById('modal-communication').classList.remove('hidden'); }
    function closeCommunicationModal() { document.getElementById('modal-communication').classList.add('hidden'); }

    // 4. Sidebar Search Filter
    function filterSidebar() {
      const q = document.getElementById('sidebarSearch').value.toLowerCase();
      const links = document.querySelectorAll('#sidebarNav .sidebar-link');
      links.forEach(l => {
        const text = l.textContent.toLowerCase();
        l.style.display = text.includes(q) ? 'flex' : 'none';
      });
    }

    // 5. Glossary Modal Search Filter
    function filterGlossary() {
      const q = document.getElementById('glossarySearchInput').value.toLowerCase();
      const items = document.querySelectorAll('.glossary-item');
      items.forEach(it => {
        const s = it.getAttribute('data-search') || '';
        it.style.display = s.includes(q) ? 'flex' : 'none';
      });
    }

    // 6. Mini-Quiz Interaction
    const lessonQuizState = {};
    function checkLessonQuiz(lessonId, qIdx, selectedOpt, correctOpt, btnElem) {
      const allBtns = document.querySelectorAll('.lesson-quiz-btn-' + lessonId + '-' + qIdx);
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-red-500', 'bg-red-50', 'dark:bg-slate-800');
      });

      const expBox = document.getElementById(lessonId + '-exp-' + qIdx);
      expBox.classList.remove('hidden');

      if (!lessonQuizState[lessonId]) lessonQuizState[lessonId] = { correct: 0, totalAnswered: 0 };
      lessonQuizState[lessonId].totalAnswered++;

      if (selectedOpt === correctOpt) {
        btnElem.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        btnElem.querySelector('.check-icon').className = 'fa-solid fa-circle-check text-emerald-600';
        expBox.className = 'p-2.5 rounded-lg text-xs mt-2 font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
        expBox.innerHTML = '<strong class="font-bold"><i class="fa-solid fa-check mr-1"></i> 正确 (Chính xác)!</strong> Rất tốt, em đã chọn đúng.';
        lessonQuizState[lessonId].correct++;
      } else {
        btnElem.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-700', 'dark:bg-rose-950/40', 'dark:text-rose-300');
        btnElem.querySelector('.check-icon').className = 'fa-solid fa-circle-xmark text-rose-600';
        expBox.className = 'p-2.5 rounded-lg text-xs mt-2 font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        expBox.innerHTML = '<strong class="font-bold"><i class="fa-solid fa-xmark mr-1"></i> 未正确 (Chưa đúng)!</strong> Đáp án đúng là ' + String.fromCharCode(65 + correctOpt) + '.';
        
        // Highlight correct button
        if (allBtns[correctOpt]) {
          allBtns[correctOpt].classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
          allBtns[correctOpt].querySelector('.check-icon').className = 'fa-solid fa-circle-check text-emerald-600';
        }
      }

      const scoreBadge = document.getElementById(lessonId + '-quiz-score');
      if (scoreBadge) {
        scoreBadge.textContent = 'Đã làm: ' + lessonQuizState[lessonId].correct + '/4 đúng';
      }
    }

    // 7. Exam Master & 60:00 Countdown Logic
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let examTimeSeconds = 3600; // 60 minutes
    let examInterval = null;
    let examSubmitted = false;

    function openExamModal() {
      document.getElementById('modal-exam').classList.remove('hidden');
      if (!examInterval && !examSubmitted) {
        startExamTimer();
      }
    }

    function closeExamModal() {
      document.getElementById('modal-exam').classList.add('hidden');
    }

    function startExamTimer() {
      const timerDisplay = document.getElementById('examTimer');
      examInterval = setInterval(() => {
        if (examTimeSeconds <= 0) {
          clearInterval(examInterval);
          submitExam();
          alert('Đã hết 60 phút làm bài! Hệ thống tự động nộp bài thi của bạn.');
          return;
        }
        examTimeSeconds--;
        const mins = Math.floor(examTimeSeconds / 60);
        const secs = examTimeSeconds % 60;
        timerDisplay.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }, 1000);
    }

    // Listen to radio changes to update progress count
    document.addEventListener('change', (e) => {
      if (e.target.name && e.target.name.startsWith('exam_q_')) {
        const answered = document.querySelectorAll('input[type="radio"]:checked').length;
        const progressElem = document.getElementById('examProgressCount');
        if (progressElem) {
          progressElem.textContent = 'Đã làm: ' + answered + '/25 câu';
        }
      }
    });

    function submitExam() {
      if (examSubmitted) return;
      examSubmitted = true;
      if (examInterval) clearInterval(examInterval);

      let score = 0;
      examQuestionsData.forEach((eq, idx) => {
        const selected = document.querySelector('input[name="exam_q_' + idx + '"]:checked');
        const expBox = document.getElementById('exam_exp_' + idx);
        expBox.classList.remove('hidden');

        const selectedVal = selected ? parseInt(selected.value) : -1;
        if (selectedVal === eq.answer) {
          score++;
          expBox.className = 'p-3 rounded-xl text-xs mt-2 border bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-500';
          expBox.innerHTML = '<strong class="font-bold text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-circle-check mr-1"></i> 正确 (Chính xác)!</strong> ' + eq.explain;
        } else {
          expBox.className = 'p-3 rounded-xl text-xs mt-2 border bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-500';
          expBox.innerHTML = '<strong class="font-bold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mr-1"></i> 未正确 (Chưa đúng)!</strong> Đáp án đúng là <em>' + String.fromCharCode(65 + eq.answer) + '. ' + eq.options[eq.answer] + '</em>. ' + eq.explain;
        }
      });

      const banner = document.getElementById('examScoreBanner');
      const scoreText = document.getElementById('examScoreText');
      const feedbackText = document.getElementById('examFeedbackText');
      banner.classList.remove('hidden');

      scoreText.textContent = score + ' / 25 Điểm';
      const pct = Math.round((score / 25) * 100);
      if (pct >= 90) {
        feedbackText.textContent = '太棒了！Xuất sắc! Em đạt danh hiệu Trạng Nguyên Tiếng Trung Quốc 9 với vốn chữ Hán uyên thâm và năng lực ngữ pháp vững vàng!';
      } else if (pct >= 70) {
        feedbackText.textContent = '很好！Em nắm rất chắc các chuyên đề mẫu câu chữ 把, trợ từ động thái và kỹ năng đọc hiểu chuẩn SGK.';
      } else {
        feedbackText.textContent = 'Em hãy rà soát lại các bài học, tham khảo Sổ tay 14 điểm ngữ pháp và luyện tập thêm nhé!';
      }

      document.getElementById('btnSubmitExam').disabled = true;
      document.getElementById('btnSubmitExam').classList.add('opacity-50', 'cursor-not-allowed');
      banner.scrollIntoView({ behavior: 'smooth' });
    }
  </script>
</body>
</html>
`;

// Save to courses/tiengtrung_9.html
const outTiengtrung9 = path.resolve(__dirname, '../courses/tiengtrung_9.html');
fs.writeFileSync(outTiengtrung9, fullHtml, 'utf8');
console.log('Saved tiengtrung_9.html, size:', fullHtml.length);

// Copy to courses/chinese_9.html
const outChinese9 = path.resolve(__dirname, '../courses/chinese_9.html');
fs.writeFileSync(outChinese9, fullHtml, 'utf8');
console.log('Saved chinese_9.html, size:', fullHtml.length);
