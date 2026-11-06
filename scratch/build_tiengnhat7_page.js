// Generator script for Tiếng Nhật 7 (Kết nối tri thức với cuộc sống - GDPT 2018)
const fs = require('fs');

const { lessonsPart1 } = require('./tiengnhat7_data_p1.js');
const { lessonsPart2, grammarSummaryTable, verbConjugationTable, kanjiMatrix } = require('./tiengnhat7_data_p2.js');
const { examQuestions } = require('./tiengnhat7_exam.js');

const allLessons = [...lessonsPart1, ...lessonsPart2];

function renderVocabItem(v) {
  const safeJp = (v.jp || v.kana || '').replace(/'/g, "\\'");
  return `
    <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 flex flex-col justify-between gap-2 shadow-sm hover:shadow transition">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-extrabold text-gray-900 dark:text-white text-sm sm:text-base">${v.jp}</span>
            <span class="text-[11px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 font-medium">${v.kana}</span>
            <span class="text-[10px] text-gray-400 italic">/${v.romaji}/</span>
          </div>
          <div class="text-xs text-rose-700 dark:text-rose-300 font-semibold mt-1">${v.mean}</div>
        </div>
        <button onclick="speakJapanese('${safeJp}')" title="Nghe phát âm chuẩn (ja-JP)" class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm">
          <i class="fa-solid fa-volume-high text-xs"></i>
        </button>
      </div>
      <div class="text-[10px] text-gray-400 dark:text-gray-500 pt-1 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
        <span>${v.type || 'Từ vựng'}</span>
        <span class="text-rose-500/70"><i class="fa-solid fa-circle-dot text-[8px]"></i></span>
      </div>
    </div>
  `;
}

function renderKanjiItem(k) {
  return `
    <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-rose-100 dark:border-gray-700 flex items-center gap-3 shadow-sm hover:border-rose-400 transition">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-600 to-red-600 text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0">
        ${k.char}
      </div>
      <div class="space-y-0.5 overflow-hidden">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-gray-900 dark:text-white">${k.mean}</span>
        </div>
        <div class="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
          <span class="text-rose-600 dark:text-rose-400 font-semibold">On:</span> ${k.on} &bull; <span class="text-sky-600 dark:text-sky-400 font-semibold">Kun:</span> ${k.kun}
        </div>
        <div class="text-[11px] text-gray-700 dark:text-gray-300 truncate">
          <strong>Từ mẫu:</strong> ${k.words}
        </div>
      </div>
    </div>
  `;
}

function renderLessonHTML(lesson, index) {
  const isReview = lesson.isReview;
  const unitId = lesson.id;

  // Segment identification
  let stageNum = 1;
  if (['bai-4', 'bai-5', 'bai-6', 'bai-7', 'on-tap-2'].includes(unitId)) stageNum = 2;
  else if (['bai-8', 'bai-9', 'bai-10', 'on-tap-3'].includes(unitId)) stageNum = 3;
  else if (['bai-11', 'bai-12', 'bai-13', 'bai-14'].includes(unitId)) stageNum = 4;

  if (isReview) {
    return `
      <section id="${unitId}" data-stage="${stageNum}" class="lesson-section scroll-mt-20 rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-850 border-2 border-rose-200 dark:border-rose-900/60 shadow-lg space-y-6">
        <!-- Review Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-3">
            <span class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 text-white font-black text-xs uppercase tracking-wider shadow">
              <i class="fa-solid fa-flag-checkered mr-1"></i> ${lesson.badge}
            </span>
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">${lesson.title}</h2>
              <p class="text-xs text-rose-600 dark:text-rose-400 font-medium italic">${lesson.romaji} &bull; ${lesson.meaning}</p>
            </div>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            Ôn tập tổng kết
          </span>
        </div>

        <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-2">
          <h4 class="font-bold text-sm text-rose-700 dark:text-rose-300 flex items-center gap-2">
            <i class="fa-solid fa-layer-group"></i> Trọng tâm kiến thức củng cố
          </h4>
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${lesson.summary}</p>
        </div>

        <!-- Mini-quiz for Review -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <i class="fa-solid fa-circle-question text-rose-600"></i> Bài tập trắc nghiệm củng cố
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${(lesson.quiz || []).map((qItem, qIdx) => `
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
                <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                  <strong>Câu ${qIdx + 1}:</strong> ${qItem.q}
                </p>
                <div class="space-y-1.5">
                  ${qItem.options.map((opt, optIdx) => `
                    <button onclick="checkAnswer('${unitId}', ${qIdx}, ${optIdx}, ${qItem.a}, this)"
                            class="quiz-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 transition cursor-pointer">
                      <span class="font-bold text-gray-400">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
                    </button>
                  `).join('')}
                </div>
                <div id="quiz-fb-${unitId}-${qIdx}" class="hidden p-3 rounded-xl text-xs leading-relaxed"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  // Standard Lesson
  return `
    <section id="${unitId}" data-stage="${stageNum}" class="lesson-section scroll-mt-20 rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-850 border-2 border-rose-100 dark:border-gray-800 shadow-lg space-y-6">
      
      <!-- Lesson Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1.5 rounded-xl bg-rose-600 text-white font-black text-xs uppercase tracking-wider shadow flex items-center gap-1.5">
            <i class="fa-solid fa-torii-gate"></i> BÀI ${lesson.lessonNum}
          </span>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span>${lesson.title}</span>
              <button onclick="speakJapanese('${lesson.title.replace(/'/g, "\\'")}')" title="Nghe tiêu đề" class="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center text-xs transition cursor-pointer">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400 italic font-medium">
              ${lesson.romaji} &bull; <span class="text-rose-600 dark:text-rose-400 font-semibold">${lesson.meaning}</span>
            </p>
          </div>
        </div>
        <div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-300">
            ${lesson.badge}
          </span>
        </div>
      </div>

      <!-- Mục tiêu năng lực -->
      <div class="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2.5">
        <i class="fa-solid fa-bullseye text-rose-600 dark:text-rose-400 text-sm mt-0.5 shrink-0"></i>
        <div>
          <strong class="text-rose-700 dark:text-rose-300">Mục tiêu giao tiếp:</strong> ${lesson.goal}
        </div>
      </div>

      <!-- Section 1: Từ vựng (ことばをおぼえましょう) -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm sm:text-base font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2 uppercase tracking-wide">
            <i class="fa-solid fa-book-open"></i> 1. ことばをおぼえましょう — Từ vựng cốt lõi (Có âm thanh Audio)
          </h3>
          <span class="text-[11px] text-gray-500 dark:text-gray-400 italic">Nhấn vào loa để nghe phát âm ja-JP</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          ${(lesson.vocab || []).map(v => renderVocabItem(v)).join('')}
        </div>
      </div>

      <!-- Section 2: Mẫu câu (文型をおぼえましょう) -->
      <div class="space-y-3">
        <h3 class="text-sm sm:text-base font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-shapes"></i> 2. 文型をおぼえましょう — Mẫu câu ngữ pháp trọng tâm
        </h3>
        <div class="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-xs">
              <i class="fa-solid fa-feather-pointed"></i>
            </span>
            <h4 class="font-bold text-sm text-gray-900 dark:text-white">${lesson.grammar.title}</h4>
          </div>
          
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-800/60 font-mono text-xs text-rose-900 dark:text-rose-200 font-bold whitespace-pre-line">
            ${lesson.grammar.formula}
          </div>

          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            ${lesson.grammar.usage}
          </p>

          <div class="space-y-1.5 pt-1">
            <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Ví dụ thực tế song ngữ:</span>
            ${(lesson.grammar.examples || []).map(ex => {
              const safeEx = ex.replace(/'/g, "\\'");
              return `
                <div class="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 text-xs text-gray-800 dark:text-gray-200 flex items-start justify-between gap-2">
                  <div class="flex items-start gap-2">
                    <i class="fa-solid fa-circle-check text-rose-500 mt-1 text-[10px]"></i>
                    <span class="font-medium">${ex}</span>
                  </div>
                  <button onclick="speakJapanese('${safeEx}')" class="text-gray-400 hover:text-rose-600 shrink-0 cursor-pointer" title="Nghe ví dụ">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>
              `;
            }).join('')}
          </div>

          ${lesson.grammar.rules ? `
            <div class="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <strong><i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> Lưu ý / Mở rộng:</strong>
              <div class="leading-relaxed">${lesson.grammar.rules}</div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Section 3: Chữ Hán (漢字をおぼえましょう) -->
      ${lesson.kanji && lesson.kanji.length > 0 ? `
      <div class="space-y-3">
        <h3 class="text-sm sm:text-base font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-brush"></i> 3. 漢字をおぼえましょう — Chữ Hán trọng tâm bài học
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${lesson.kanji.map(k => renderKanjiItem(k)).join('')}
        </div>
      </div>
      ` : ''}

      <!-- Section 4: Hội thoại & Văn hóa (話しましょう & 考えましょう) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Dialogue -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2.5 shadow-sm">
          <h4 class="font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
            <i class="fa-solid fa-comments"></i> 4. 話しましょう — Hội thoại mẫu
          </h4>
          <p class="text-xs text-gray-500 dark:text-gray-400 italic">${lesson.dialogue.situation}</p>
          <div class="p-3 rounded-xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-xs text-gray-800 dark:text-gray-200 space-y-2">
            ${lesson.dialogue.lines.map(l => {
              const safeText = l.text.replace(/'/g, "\\'");
              return `
                <div class="flex items-start justify-between gap-1.5">
                  <div>
                    <strong class="text-rose-600 dark:text-rose-400">${l.spk}:</strong>
                    <span>${l.text}</span>
                  </div>
                  <button onclick="speakJapanese('${safeText}')" class="text-gray-400 hover:text-rose-600 shrink-0 cursor-pointer" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-[11px]"></i>
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Culture -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2.5 shadow-sm">
          <h4 class="font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
            <i class="fa-solid fa-earth-asia"></i> 5. 考えましょう — Khám phá văn hóa Nhật - Việt
          </h4>
          <div class="p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            ${lesson.culture}
          </div>
        </div>
      </div>

      <!-- Section 5: Mini-Quiz -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
        <h4 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-rose-600"></i> 6. ふりかえりましょう — Mini-Quiz củng cố (Bài ${lesson.lessonNum})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${(lesson.quiz || []).map((qItem, qIdx) => `
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                <strong>Câu ${qIdx + 1}:</strong> ${qItem.q}
              </p>
              <div class="space-y-1.5">
                ${qItem.options.map((opt, optIdx) => `
                  <button onclick="checkAnswer('${unitId}', ${qIdx}, ${optIdx}, ${qItem.a}, this)"
                          class="quiz-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 transition cursor-pointer">
                    <span class="font-bold text-gray-400">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
                  </button>
                `).join('')}
              </div>
              <div id="quiz-fb-${unitId}-${qIdx}" class="hidden p-3 rounded-xl text-xs leading-relaxed"></div>
            </div>
          `).join('')}
        </div>
      </div>

    </section>
  `;
}

// Generate the whole HTML file
const fullHTML = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Nhật 7 - Kết Nối Tri Thức | Nền Tảng Học Số CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            gray: {
              850: '#141824',
              950: '#070b14'
            },
            rose: {
              550: '#e11d48'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    /* Bulletproof dark mode fallback */
    .dark body { background-color: #0b1120 !important; color: #f1f5f9 !important; }
    .dark .lesson-section { background-color: #111827 !important; color: #f3f4f6 !important; }
    .dark .modal-content-card { background-color: #0f172a !important; color: #f8fafc !important; }
    
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(225, 29, 72, 0.3); border-radius: 9999px; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(244, 63, 94, 0.4); }
  </style>
</head>

<body class="bg-rose-50/30 dark:bg-gray-950 text-slate-800 antialiased font-sans transition-colors duration-300 min-h-screen flex flex-col">

  <!-- ==================== HEADER / NAVBAR ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-rose-100 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Back & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center justify-center transition cursor-pointer shadow-sm" title="Quay lại Trang Chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-red-600 to-pink-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-rose-500/20">
            <i class="fa-solid fa-torii-gate"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-sm sm:text-base font-black tracking-tight text-gray-900 dark:text-white">TIẾNG NHẬT 7</h1>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 uppercase tracking-wider">Kết Nối Tri Thức</span>
            </div>
            <p class="text-[11px] text-gray-500 dark:text-gray-400 hidden sm:block">13 Bài Học &bull; 4 Ôn Tập &bull; 40+ Chữ Hán Kanji &bull; GDPT 2018</p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Kanji Studio Modal Button -->
        <button onclick="openKanjiModal()" class="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300 font-bold text-xs flex items-center gap-1.5 transition border border-rose-200 dark:border-rose-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-brush"></i>
          <span class="hidden md:inline">Kanji Studio</span>
        </button>

        <!-- Verb & Grammar Modal Button -->
        <button onclick="openVerbModal()" class="px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900 text-amber-700 dark:text-amber-300 font-bold text-xs flex items-center gap-1.5 transition border border-amber-200 dark:border-amber-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-table-list"></i>
          <span class="hidden md:inline">Sổ Tay Động Từ &amp; Ngữ Pháp</span>
        </button>

        <!-- Exam Modal Button -->
        <button onclick="openExamModal()" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-rose-600/20 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Dark/Light Mode Toggle -->
        <button onclick="toggleDarkMode()" id="themeToggleBtn" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-amber-400 flex items-center justify-center transition cursor-pointer shadow-sm" title="Chuyển chế độ Sáng / Tối">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== MAIN CONTENT WRAPPER ==================== -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 flex flex-col lg:flex-row gap-6">

    <!-- ==================== LEFT SIDEBAR ==================== -->
    <aside class="w-full lg:w-80 shrink-0 space-y-4">
      
      <!-- Sticky Card -->
      <div class="lg:sticky lg:top-24 space-y-4">
        
        <!-- Search & Filter Card -->
        <div class="p-4 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
          
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-gray-400 text-xs"></i>
            <input type="text" id="lessonSearchInput" onkeyup="filterLessons()" placeholder="Tìm bài học, từ vựng, ngữ pháp, kanji..."
                   class="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500 transition">
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1.5 pt-1">
            <div class="flex items-center justify-between text-[11px] font-bold text-gray-500 dark:text-gray-400">
              <span>Tiến độ học tập</span>
              <span id="progressText">0 / 17 bài</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-rose-500 to-red-600 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
          </div>

          <!-- Stage Filter Chips -->
          <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1.5">
            <div class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Lọc theo Chặng học</div>
            <div class="grid grid-cols-2 gap-1.5">
              <button onclick="filterByStage('all')" class="stage-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-rose-600 text-white text-center transition cursor-pointer" data-stage-btn="all">
                Tất cả (17)
              </button>
              <button onclick="filterByStage('1')" class="stage-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-stage-btn="1">
                Chặng 1 (Bài 1–3)
              </button>
              <button onclick="filterByStage('2')" class="stage-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-stage-btn="2">
                Chặng 2 (Bài 4–7)
              </button>
              <button onclick="filterByStage('3')" class="stage-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-stage-btn="3">
                Chặng 3 (Bài 8–10)
              </button>
              <button onclick="filterByStage('4')" class="stage-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer col-span-2" data-stage-btn="4">
                Chặng 4 (Bài 11–14 &bull; Tổng kết)
              </button>
            </div>
          </div>

        </div>

        <!-- Lesson Navigation List -->
        <div class="p-3 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 shadow-sm space-y-1 max-h-[50vh] overflow-y-auto scrollbar-thin" id="lessonNavList">
          ${allLessons.map((l, i) => {
            let stg = 1;
            if (['bai-4', 'bai-5', 'bai-6', 'bai-7', 'on-tap-2'].includes(l.id)) stg = 2;
            else if (['bai-8', 'bai-9', 'bai-10', 'on-tap-3'].includes(l.id)) stg = 3;
            else if (['bai-11', 'bai-12', 'bai-13', 'bai-14'].includes(l.id)) stg = 4;

            return `
              <a href="#${l.id}" onclick="markLessonVisited(${i})" class="lesson-nav-link flex items-center justify-between p-2 rounded-xl text-xs hover:bg-rose-50 dark:hover:bg-gray-800/80 transition group" data-nav-id="${l.id}" data-stage-nav="${stg}">
                <div class="flex items-center gap-2 overflow-hidden">
                  <span class="w-6 h-6 rounded-lg ${l.isReview ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'} font-bold flex items-center justify-center text-[10px] shrink-0">
                    ${l.isReview ? 'ÔT' : l.lessonNum}
                  </span>
                  <span class="truncate font-semibold text-gray-700 dark:text-gray-300 group-hover:text-rose-600 dark:group-hover:text-rose-400">
                    ${l.title}
                  </span>
                </div>
                <span id="check-icon-${i}" class="text-[10px] text-gray-300 dark:text-gray-600">
                  <i class="fa-regular fa-circle"></i>
                </span>
              </a>
            `;
          }).join('')}
        </div>

      </div>

    </aside>

    <!-- ==================== MAIN CONTENT ==================== -->
    <main class="flex-1 space-y-6">

      <!-- Hero Welcome Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-600 via-red-600 to-pink-700 text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-rose-100">
            <i class="fa-solid fa-torii-gate"></i> CHƯƠNG TRÌNH GDPT 2018 &bull; TIẾNG NHẬT 7
          </div>
          <h2 class="text-2xl sm:text-3xl font-black leading-tight">
            Kiến Thức Cốt Lõi Tiếng Nhật 7
          </h2>
          <p class="text-xs sm:text-sm text-rose-100 leading-relaxed max-w-2xl">
            Bộ học liệu số toàn diện 13 Bài học, 4 Bài Ôn tập và 40+ Chữ Hán Kanji. Tích hợp Audio phát âm chuẩn bản ngữ Web Speech API (ja-JP), sổ tay chia động từ Vます - Vて - Vる, sổ tay ma trận ngữ pháp và đấu trường Trạng Nguyên Tiếng Nhật 60 phút.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">13 Bài</div>
              <div class="text-[10px] text-rose-100 uppercase font-semibold">Chủ điểm cốt lõi</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">40+</div>
              <div class="text-[10px] text-rose-100 uppercase font-semibold">Chữ Hán Kanji</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">150+</div>
              <div class="text-[10px] text-rose-100 uppercase font-semibold">Từ vựng &amp; Audio</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">40 Câu</div>
              <div class="text-[10px] text-rose-100 uppercase font-semibold">Đấu trường 60:00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Render all Lessons -->
      <div class="space-y-8" id="lessonContainer">
        ${allLessons.map((l, i) => renderLessonHTML(l, i)).join('')}
      </div>

    </main>

  </div>

  <!-- ==================== MODAL 1: KANJI STUDIO ==================== -->
  <div id="kanjiModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-rose-900 via-red-900 to-pink-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-brush"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Kanji Studio &bull; Bảng Chữ Hán Trọng Tâm 13 Bài (Tiếng Nhật 7)</h3>
            <p class="text-xs text-rose-200">Hệ thống đầy đủ âm Hán Việt, cách đọc On/Kun và từ ví dụ thực tế</p>
          </div>
        </div>
        <button onclick="closeKanjiModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        
        <!-- Interactive Web Speech Tester for Japanese -->
        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-2">
          <div class="font-bold text-rose-800 dark:text-rose-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-bullhorn"></i> Máy Phát Âm Tiếng Nhật Bản Ngữ (ja-JP)
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-300">Nhập từ hoặc câu tiếng Nhật bất kì rồi nhấn "Phát âm" để nghe ngữ điệu chuẩn:</p>
          <div class="flex gap-2">
            <input type="text" id="customJapaneseSpeechInput" placeholder="Ví dụ: こんにちは！一週間に2回日本語を勉強します。" class="flex-1 p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100">
            <button onclick="speakCustomJapanese()" class="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition cursor-pointer">
              <i class="fa-solid fa-volume-high mr-1"></i> Phát âm
            </button>
          </div>
        </div>

        <!-- Kanji Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border-b border-rose-200 dark:border-rose-800">
                <th class="p-3 font-bold rounded-tl-xl">Bài học</th>
                <th class="p-3 font-bold">Chữ Hán Kanji</th>
                <th class="p-3 font-bold rounded-tr-xl">Từ vựng mẫu &bull; Ý nghĩa tham chiếu</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              ${kanjiMatrix.map(item => `
                <tr class="hover:bg-rose-50/50 dark:hover:bg-gray-800/50 transition">
                  <td class="p-3 font-bold text-rose-600 dark:text-rose-400 whitespace-nowrap">${item.bài}</td>
                  <td class="p-3 font-black text-base text-gray-900 dark:text-white tracking-widest">${item.chữ}</td>
                  <td class="p-3 text-gray-700 dark:text-gray-300">${item.víDụ}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeKanjiModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng Kanji Studio
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: VERB & GRAMMAR HANDBOOK ==================== -->
  <div id="verbModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-amber-800 via-orange-800 to-rose-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-table-list"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Sổ Tay Biến Đổi Động Từ (Vます → Vて → Vる) &amp; Ma Trận Ngữ Pháp</h3>
            <p class="text-xs text-amber-200">15 dạng động từ mẫu biểu trưng và 13 mẫu câu xuyên suốt chương trình</p>
          </div>
        </div>
        <button onclick="closeVerbModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        
        <!-- Table 1: Verb Conjugation -->
        <div class="space-y-2">
          <h4 class="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-rotate text-amber-600"></i> Bảng Biến Đổi Động Từ: Vます &rarr; Vて &rarr; Vる (Từ điển)
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-b border-amber-200 dark:border-amber-800">
                  <th class="p-3 font-bold rounded-tl-xl">Nhóm / Kiểu đổi</th>
                  <th class="p-3 font-bold">Thể Vます</th>
                  <th class="p-3 font-bold">Thể Vて</th>
                  <th class="p-3 font-bold">Thể Vる (Từ điển)</th>
                  <th class="p-3 font-bold rounded-tr-xl">Ý nghĩa</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                ${verbConjugationTable.map(item => `
                  <tr class="hover:bg-amber-50/40 dark:hover:bg-gray-800/50 transition">
                    <td class="p-2.5 font-semibold text-gray-600 dark:text-gray-400">${item.nhóm}</td>
                    <td class="p-2.5 font-bold text-rose-600 dark:text-rose-400">${item.masu}</td>
                    <td class="p-2.5 font-bold text-amber-600 dark:text-amber-400">${item.te}</td>
                    <td class="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">${item.ru}</td>
                    <td class="p-2.5 text-gray-800 dark:text-gray-200">${item.nghĩa}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Table 2: Grammar Summary -->
        <div class="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
          <h4 class="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-check text-rose-600"></i> Bảng Ngữ Pháp Tổng Hợp 13 Bài
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border-b border-rose-200 dark:border-rose-800">
                  <th class="p-3 font-bold rounded-tl-xl">Bài</th>
                  <th class="p-3 font-bold">Mẫu câu cốt lõi</th>
                  <th class="p-3 font-bold">Công dụng giao tiếp</th>
                  <th class="p-3 font-bold rounded-tr-xl">Ví dụ minh họa</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                ${grammarSummaryTable.map(item => `
                  <tr class="hover:bg-rose-50/40 dark:hover:bg-gray-800/50 transition">
                    <td class="p-2.5 font-bold text-rose-600 dark:text-rose-400 whitespace-nowrap">${item.bài}</td>
                    <td class="p-2.5 font-mono text-[11px] font-bold text-gray-900 dark:text-white">${item.mẫu}</td>
                    <td class="p-2.5 text-gray-700 dark:text-gray-300">${item.côngDụng}</td>
                    <td class="p-2.5 text-xs italic text-gray-800 dark:text-gray-200">${item.víDụ}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeVerbModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng Sổ Tay
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: TRẠNG NGUYÊN TIẾNG NHẬT (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <!-- Exam Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-rose-900 via-red-900 to-amber-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-400 text-rose-950 flex items-center justify-center font-black text-lg shadow">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Tiếng Nhật 7</h3>
            <p class="text-xs text-rose-200">Ma trận 40 câu hỏi trắc nghiệm &bull; Thời gian 60:00 &bull; Chuẩn khảo sát chất lượng</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <!-- Countdown Timer -->
          <div class="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/20 text-center">
            <div class="text-[10px] text-gray-300 font-bold uppercase">Thời gian còn lại</div>
            <div id="examTimer" class="text-base sm:text-lg font-black text-amber-300 font-mono tracking-wider">60:00</div>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Questions List -->
      <div id="examQuestionsContainer" class="p-6 overflow-y-auto space-y-6 scrollbar-thin text-xs text-gray-800 dark:text-gray-200">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Footer Controls -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs text-gray-600 dark:text-gray-300">
          Đã hoàn thành: <strong id="answeredCount" class="text-rose-600 dark:text-rose-400 font-mono">0</strong> / 40 câu
        </div>
        <div class="flex items-center gap-2">
          <button onclick="closeExamModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
            Tạm dừng
          </button>
          <button onclick="submitExam()" class="px-6 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs transition shadow-md shadow-rose-600/20 cursor-pointer">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xem Xếp Hạng
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-6 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-md bg-rose-600 text-white font-black text-[10px] flex items-center justify-center">JP</span>
        <span class="font-bold text-gray-800 dark:text-gray-200">Tiếng Nhật 7 &bull; Bộ Giáo Dục &amp; Đào Tạo &bull; Kết Nối Tri Thức</span>
      </div>
      <div>Phát triển học liệu số hóa chất lượng cao &bull; CodeHub THCS</div>
    </div>
  </footer>

  <!-- ==================== JAVASCRIPT LOGIC ==================== -->
  <script>
    // Theme Switcher with bulletproof localStorage
    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      updateThemeIcons();
    }

    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    }

    function updateThemeIcons() {
      const isDark = document.documentElement.classList.contains('dark');
      const icon = document.getElementById('themeIcon');
      if (icon) {
        if (isDark) {
          icon.className = 'fa-solid fa-sun';
        } else {
          icon.className = 'fa-solid fa-moon';
        }
      }
    }

    initTheme();

    // Web Speech API for Japanese Pronunciation
    function speakJapanese(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'ja-JP';
        u.rate = 0.88;
        window.speechSynthesis.speak(u);
      } else {
        alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API.');
      }
    }

    function speakCustomJapanese() {
      const input = document.getElementById('customJapaneseSpeechInput');
      const text = input ? input.value.trim() : '';
      if (!text) {
        speakJapanese('こんにちは！');
        return;
      }
      speakJapanese(text);
    }

    // Progress Tracking
    const visitedLessons = new Set();
    function markLessonVisited(idx) {
      visitedLessons.add(idx);
      updateProgress();
    }

    function updateProgress() {
      const total = 17;
      const count = visitedLessons.size;
      const pct = Math.round((count / total) * 100);
      document.getElementById('progressText').innerText = count + ' / ' + total + ' bài';
      document.getElementById('progressBar').style.width = pct + '%';
      
      visitedLessons.forEach(i => {
        const icon = document.getElementById('check-icon-' + i);
        if (icon) {
          icon.innerHTML = '<i class=\"fa-solid fa-circle-check text-rose-500\"></i>';
        }
      });
    }

    // Search Filtering
    function filterLessons() {
      const query = document.getElementById('lessonSearchInput').value.toLowerCase().trim();
      const sections = document.querySelectorAll('.lesson-section');
      const navLinks = document.querySelectorAll('.lesson-nav-link');

      sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        if (text.includes(query)) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });

      navLinks.forEach(link => {
        const text = link.innerText.toLowerCase();
        if (text.includes(query)) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    }

    // Stage Filtering
    function filterByStage(stage) {
      const buttons = document.querySelectorAll('.stage-filter-btn');
      buttons.forEach(btn => {
        if (btn.getAttribute('data-stage-btn') === stage) {
          btn.className = 'stage-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-rose-600 text-white text-center transition cursor-pointer';
        } else {
          btn.className = 'stage-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer';
        }
      });

      const sections = document.querySelectorAll('.lesson-section');
      const navLinks = document.querySelectorAll('.lesson-nav-link');

      sections.forEach(sec => {
        const secStage = sec.getAttribute('data-stage');
        if (stage === 'all' || secStage === stage) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });

      navLinks.forEach(link => {
        const navStage = link.getAttribute('data-stage-nav');
        if (stage === 'all' || navStage === stage) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    }

    // Mini-Quiz Answer Checker
    function checkAnswer(unitId, qIdx, chosenIdx, correctIdx, btnEl) {
      const parent = btnEl.parentElement;
      const allBtns = parent.querySelectorAll('.quiz-btn');
      allBtns.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) {
          b.className = 'quiz-btn w-full text-left p-2.5 rounded-xl border border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 text-xs font-bold transition';
        } else if (idx === chosenIdx && chosenIdx !== correctIdx) {
          b.className = 'quiz-btn w-full text-left p-2.5 rounded-xl border border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-800 dark:text-rose-200 text-xs font-bold transition';
        } else {
          b.className = 'quiz-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 opacity-50 text-xs transition';
        }
      });

      const fb = document.getElementById('quiz-fb-' + unitId + '-' + qIdx);
      if (fb) {
        fb.classList.remove('hidden');
        if (chosenIdx === correctIdx) {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-check mr-1\"></i> 正解 (Chính xác)!</strong> Bạn đã nắm rất vững kiến thức bài học.';
        } else {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark mr-1\"></i> 不正解 (Chưa chính xác)!</strong> Hãy xem lại ô màu xanh lá để nắm đáp án đúng nhé.';
        }
      }
    }

    // Modal controls
    function openKanjiModal() {
      document.getElementById('kanjiModal').classList.remove('hidden');
    }
    function closeKanjiModal() {
      document.getElementById('kanjiModal').classList.add('hidden');
    }

    function openVerbModal() {
      document.getElementById('verbModal').classList.remove('hidden');
    }
    function closeVerbModal() {
      document.getElementById('verbModal').classList.add('hidden');
    }

    // Exam Modal & Countdown 60:00
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let examTimeRemaining = 3600; // 60 minutes
    let examInterval = null;
    const userExamAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      if (!document.getElementById('examQuestionsContainer').hasChildNodes()) {
        renderExamQuestions();
      }
      if (!examInterval) {
        startExamTimer();
      }
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function startExamTimer() {
      examInterval = setInterval(() => {
        if (examTimeRemaining <= 0) {
          clearInterval(examInterval);
          submitExam();
          return;
        }
        examTimeRemaining--;
        const mins = Math.floor(examTimeRemaining / 60);
        const secs = examTimeRemaining % 60;
        document.getElementById('examTimer').innerText = 
          (mins < 10 ? '0' + mins : mins) + ':' + (secs < 10 ? '0' + secs : secs);
      }, 1000);
    }

    function renderExamQuestions() {
      const container = document.getElementById('examQuestionsContainer');
      container.innerHTML = examQuestionsData.map((item, qIdx) => \`
        <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 space-y-3">
          <div class="flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-lg bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              \${qIdx + 1}
            </span>
            <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-relaxed">
              \${item.q}
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            \${item.options.map((opt, oIdx) => \`
              <label class="exam-opt-label flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 cursor-pointer transition"
                     id="exam-label-\${qIdx}-\${oIdx}">
                <input type="radio" name="exam_q_\${qIdx}" value="\${oIdx}" onchange="selectExamOption(\${qIdx}, \${oIdx})" class="accent-rose-600">
                <span class="leading-snug text-gray-800 dark:text-gray-200">\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="exam-exp-\${qIdx}" class="hidden p-3 rounded-lg text-xs leading-relaxed mt-2"></div>
        </div>
      \`).join('');
    }

    function selectExamOption(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;
      document.getElementById('answeredCount').innerText = Object.keys(userExamAnswers).length;
    }

    function submitExam() {
      clearInterval(examInterval);
      let score = 0;
      examQuestionsData.forEach((item, qIdx) => {
        const chosen = userExamAnswers[qIdx];
        const expBox = document.getElementById('exam-exp-' + qIdx);
        if (expBox) {
          expBox.classList.remove('hidden');
          if (chosen === item.answer) {
            score++;
            expBox.className = 'p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 mt-2';
            expBox.innerHTML = '<strong>✓ Chính xác!</strong> ' + item.explain;
          } else {
            expBox.className = 'p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 mt-2';
            expBox.innerHTML = '<strong>✗ Chưa đúng!</strong> Đáp án đúng là <strong>' + item.options[item.answer] + '</strong>. ' + item.explain;
          }
        }
      });

      // Calculate Rank
      let title = "Tú Tài Tiếng Nhật";
      if (score >= 38) title = "🏆 TRẠNG NGUYÊN TIẾNG NHẬT 7 (Nihongo Meijin)";
      else if (score >= 32) title = "🥈 BẢNG NHÃN TIẾNG NHẬT 7 (Nihongo Master)";
      else if (score >= 26) title = "🥉 THÁM HOA TIẾNG NHẬT 7 (Nihongo Scholar)";

      const resMsg = [
        'KẾT QUẢ ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG NHẬT 7:',
        '--------------------------------------------',
        'Điểm số: ' + score + ' / 40 câu đúng (' + ((score / 40) * 10).toFixed(1) + '/10 điểm)',
        'Danh hiệu: ' + title,
        'Hãy xem lại lời giải chi tiết cho từng câu hỏi bên dưới!'
      ].join('\\n');
      alert(resMsg);
    }
  </script>
</body>
</html>`;

const outPath1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengnhat_7.html';
const outPath2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/japanese_7.html';

fs.writeFileSync(outPath1, fullHTML, 'utf8');
fs.writeFileSync(outPath2, fullHTML, 'utf8');

console.log('Successfully generated tiengnhat_7.html and japanese_7.html!');
