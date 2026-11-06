// build_tiengnhat9_page.js
// Generator script for Tiếng Nhật 9 (SGK Ngoại ngữ 1 - GDPT 2018)
// Generates: courses/tiengnhat_9.html and courses/japanese_9.html (synchronized)

const fs = require('fs');
const path = require('path');

const { lessonsPart1 } = require('./tiengnhat9_data_p1.js');
const { lessonsPart2, grammarSummaryTable, grammarNotesTable, kanjiMatrix } = require('./tiengnhat9_data_p2.js');
const { getMindmapSVG } = require('./tiengnhat9_mindmaps.js');
const { examQuestions } = require('./tiengnhat9_exam.js');

const allLessons = [...lessonsPart1, ...lessonsPart2];

// Collect all vocabulary words across all units for Glossary Modal
const allVocabWords = [];
allLessons.forEach(l => {
  if (l.vocab) {
    l.vocab.forEach(v => {
      allVocabWords.push({
        ...v,
        unit: l.lessonNum,
        unitTitle: l.title,
        badge: l.badge
      });
    });
  }
});

function renderVocabItem(v) {
  const safeJp = (v.jp || v.kana || '').replace(/'/g, "\\'");
  return `
    <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-2 shadow-sm hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-black text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">${v.jp}</span>
            <span class="text-[11px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 font-bold font-mono">${v.kana}</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 italic font-mono">/${v.romaji}/</span>
          </div>
          <div class="text-xs text-rose-700 dark:text-rose-300 font-bold mt-1.5">${v.mean}</div>
        </div>
        <button onclick="speakJapanese('${safeJp}')" title="Nghe phát âm chuẩn (ja-JP)" class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm active:scale-95">
          <i class="fa-solid fa-volume-high text-xs"></i>
        </button>
      </div>
      <div class="text-[10px] text-slate-400 dark:text-slate-500 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span>${v.type || 'Từ vựng'}</span>
        <span class="text-rose-500/70"><i class="fa-solid fa-circle-dot text-[8px]"></i></span>
      </div>
    </div>
  `;
}

function renderKanjiItem(k) {
  return `
    <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 flex items-center gap-3 shadow-sm hover:border-rose-400 transition">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-600 to-red-600 text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0">
        ${k.char}
      </div>
      <div class="space-y-0.5 overflow-hidden text-xs">
        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
          <span>${k.mean}</span>
          <span class="text-[10px] font-normal text-slate-400">(${k.strokes} nét)</span>
        </div>
        <div class="text-[11px] text-rose-600 dark:text-rose-400 font-mono">
          <span class="font-bold">On:</span> ${k.onyomi} | <span class="font-bold">Kun:</span> ${k.kunyomi}
        </div>
        ${k.examples && k.examples.length > 0 ? `
          <div class="text-[10.5px] text-slate-500 dark:text-slate-400 truncate pt-0.5">
            ${k.examples.map(ex => `<span class="mr-2"><strong>${ex.word}</strong> (${ex.reading}): ${ex.mean}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderLessonSection(lesson, index) {
  const isReview = lesson.id.startsWith('on-tap-') || lesson.id === 'bai-12' || lesson.id === 'bai-13';
  const unitId = lesson.id;
  
  let badgeColor = "bg-rose-600";
  let borderTheme = "border-rose-200 dark:border-rose-900/60";
  let textTheme = "text-rose-600 dark:text-rose-400";
  let bgSoft = "bg-rose-50/60 dark:bg-rose-950/20";
  let iconTheme = "fa-torii-gate";

  if (isReview) {
    badgeColor = "bg-indigo-600";
    borderTheme = "border-indigo-200 dark:border-indigo-900/60";
    textTheme = "text-indigo-600 dark:text-indigo-400";
    bgSoft = "bg-indigo-50/60 dark:bg-indigo-950/20";
    iconTheme = "fa-award";
  }

  const mindmapSVG = getMindmapSVG(unitId);

  return `
    <article id="${unitId}" class="lesson-section mb-14 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border ${borderTheme} shadow-sm hover:shadow-md transition">
      <!-- Lesson Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded-full ${badgeColor} text-white text-[11px] font-black tracking-wider uppercase flex items-center gap-1.5">
              <i class="fa-solid ${iconTheme}"></i>
              ${lesson.lessonNum}
            </span>
            <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">${lesson.badge}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 flex-wrap">
            <span>${lesson.title}</span>
            <span class="text-sm font-normal text-slate-400 italic">(${lesson.romaji})</span>
          </h2>
          <div class="text-sm font-bold text-rose-600 dark:text-rose-400 mt-1">${lesson.meaning}</div>
        </div>
        <div class="text-xs font-semibold px-3 py-1.5 rounded-xl ${bgSoft} ${textTheme} self-start sm:self-auto border border-current/20">
          <i class="fa-solid fa-bullseye mr-1"></i>
          Chuẩn SGK Tiếng Nhật 9
        </div>
      </div>

      <!-- Goal Card -->
      <div class="mt-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5">
        <i class="fa-solid fa-compass ${textTheme} mt-1 text-sm shrink-0"></i>
        <div>
          <strong class="font-bold text-slate-800 dark:text-slate-200">Mục tiêu giao tiếp cốt lõi:</strong> ${lesson.goal}
        </div>
      </div>

      <!-- CONCEPT MINDMAP VECTOR -->
      <div class="mt-6 mb-7">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <i class="fa-solid fa-sitemap ${textTheme}"></i>
            Sơ đồ Tư duy Khái niệm (Concept Mindmap)
          </span>
          <span class="text-[11px] font-semibold text-slate-400">Bản vẽ Vector SVG độc quyền</span>
        </div>
        <div class="overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 p-2 sm:p-3 shadow-inner">
          ${mindmapSVG}
        </div>
      </div>

      <!-- 1. VOCABULARY SECTION -->
      <div class="mt-7">
        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-3.5 flex items-center justify-between">
          <span class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg ${badgeColor} text-white flex items-center justify-center text-xs">
              <i class="fa-solid fa-book-bookmark"></i>
            </span>
            1. Từ vựng theo chủ đề (ことばを覚えましょう)
          </span>
          <span class="text-xs font-semibold text-slate-400 font-normal">Nhấn <i class="fa-solid fa-volume-high text-rose-500 mx-0.5"></i> để nghe phát âm</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${(lesson.vocab || []).map(v => renderVocabItem(v)).join('')}
        </div>
      </div>

      <!-- 2. GRAMMAR SECTION -->
      <div class="mt-8">
        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg ${badgeColor} text-white flex items-center justify-center text-xs">
            <i class="fa-solid fa-code-branch"></i>
          </span>
          2. Mẫu câu trọng tâm (文型を覚えましょう)
        </h3>
        <div class="space-y-3.5">
          ${(lesson.grammar || []).map(g => `
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
              <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
                <span class="font-black text-rose-700 dark:text-rose-400 text-sm sm:text-base tracking-tight font-mono">${g.pattern}</span>
                <span class="text-xs px-2.5 py-0.5 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">${g.meaning}</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 whitespace-pre-line">${g.note}</p>
              ${g.examples && g.examples.length > 0 ? `
                <div class="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                  ${g.examples.map(ex => `
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm">
                      <div class="font-bold text-slate-900 dark:text-white">${ex.jp}</div>
                      <div class="text-slate-500 dark:text-slate-400 italic text-[11px] mt-0.5">${ex.vi}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. KANJI SECTION -->
      ${lesson.kanji && lesson.kanji.length > 0 ? `
        <div class="mt-8">
          <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg ${badgeColor} text-white flex items-center justify-center text-xs">
              <i class="fa-solid fa-pen-nib"></i>
            </span>
            3. Chữ Hán cần đọc và viết (漢字を覚えましょう)
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${lesson.kanji.map(k => renderKanjiItem(k)).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 4. DIALOGUE SECTION (HỘI THOẠI) -->
      ${lesson.dialogue ? `
        <div class="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60">
          <h3 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200 mb-2 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
              <i class="fa-solid fa-comments"></i>
            </span>
            4. Hội thoại thực tế (話しましょう・聞いてみましょう): ${lesson.dialogue.title}
          </h3>
          <p class="text-xs text-amber-800/80 dark:text-amber-400 mb-3 italic">Ngữ cảnh: ${lesson.dialogue.situation}</p>
          <div class="space-y-2">
            ${lesson.dialogue.lines.map(line => `
              <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm flex items-start gap-2.5">
                <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 font-bold text-[10px] shrink-0 mt-0.5">${line.speaker}</span>
                <div>
                  <div class="font-bold text-slate-900 dark:text-white">${line.jp}</div>
                  <div class="text-slate-500 dark:text-slate-400 text-xs italic mt-0.5">${line.vi}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 5. CULTURE CORNER (GÓC VĂN HÓA) -->
      ${lesson.culture ? `
        <div class="mt-8 p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60">
          <h3 class="text-sm sm:text-base font-black text-emerald-950 dark:text-emerald-200 mb-2 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">
              <i class="fa-solid fa-mountain-sun"></i>
            </span>
            5. Góc văn hóa & So sánh Nhật — Việt (考えましょう): ${lesson.culture.title}
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
            ${lesson.culture.content}
          </p>
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200/60 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-300 font-medium flex items-start gap-2">
            <i class="fa-solid fa-lightbulb text-amber-500 mt-0.5"></i>
            <div><strong>Đối chiếu với Việt Nam:</strong> ${lesson.culture.comparison}</div>
          </div>
        </div>
      ` : ''}

      <!-- 6. MINI-QUIZ SECTION -->
      <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <h4 class="text-sm font-black text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center text-xs">
            <i class="fa-solid fa-circle-question"></i>
          </span>
          Mini-Quiz Củng Cố Kiến Thức (${lesson.lessonNum})
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${(lesson.quiz || []).map((qItem, qIdx) => `
            <div class="quiz-item p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between" id="quiz-${unitId}-${qIdx}">
              <div>
                <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-2.5 flex items-start gap-2">
                  <span class="w-5 h-5 rounded-md ${badgeColor} text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">${qIdx + 1}</span>
                  <span>${qItem.q}</span>
                </p>
                <div class="space-y-1.5 pl-7">
                  ${qItem.options.map((opt, optIdx) => `
                    <label class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 p-2 rounded-xl hover:bg-white dark:hover:bg-slate-900 cursor-pointer transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                      <input type="radio" name="q-${unitId}-${qIdx}" value="${optIdx}" class="text-rose-600 focus:ring-rose-500">
                      <span>${opt}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <button onclick="checkUnitQuiz('${unitId}', ${qIdx}, ${qItem.answer}, '${qItem.explain.replace(/'/g, "\\'")}')" class="px-3 py-1 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition active:scale-95 shadow-sm">
                  Kiểm tra
                </button>
                <span id="quiz-result-${unitId}-${qIdx}" class="text-xs font-bold hidden"></span>
              </div>
              <div id="quiz-explain-${unitId}-${qIdx}" class="mt-2 text-[11px] p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hidden"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `;
}

console.log('Compiling Tiếng Nhật 9 (Ngoại ngữ 1)...');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Nhật 9 (SGK Ngoại ngữ 1 - GDPT 2018: 11 Bài Chủ Đề • 4 Ôn Tập • 57 Kanji • Audio ja-JP • Đấu Trường Trạng Nguyên 60:00) | CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
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
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen antialiased selection:bg-rose-500 selection:text-white">

  <!-- TOP HEADER & NAVIGATION -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-red-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-torii-gate text-base"></i>
          </div>
          <span class="font-black text-lg text-slate-900 dark:text-white tracking-tight hidden sm:inline">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <a href="../index.html#grade-9" class="text-xs font-bold text-slate-500 hover:text-rose-600 transition">Lớp 9</a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <span class="text-xs font-black text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-2.5 py-1 rounded-lg border border-rose-200/60 dark:border-rose-900/60">
          Tiếng Nhật 9
        </span>
      </div>

      <!-- Right Action Tools -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        <!-- Glossary Modal Button -->
        <button onclick="openGlossaryModal()" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 text-xs font-bold transition flex items-center gap-1.5 active:scale-95 shadow-sm">
          <i class="fa-solid fa-spell-check text-rose-500"></i>
          <span class="hidden md:inline">Tra Từ & Kanji (${allVocabWords.length})</span>
          <span class="md:hidden">Tra Từ</span>
        </button>

        <!-- Handbook Modal Button -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 text-xs font-bold transition flex items-center gap-1.5 active:scale-95 shadow-sm">
          <i class="fa-solid fa-book-open text-emerald-500"></i>
          <span class="hidden md:inline">Sổ Tay Cốt Lõi (18 Mẫu & 57 Kanji)</span>
          <span class="md:hidden">Sổ Tay</span>
        </button>

        <!-- Exam Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-crown text-yellow-200"></i>
          <span class="hidden md:inline">Trạng Nguyên (60:00)</span>
          <span class="md:hidden">Thi 60p</span>
        </button>

        <!-- Dark/Light Mode Toggle -->
        <button id="theme-toggle" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition text-sm" title="Chuyển chế độ Sáng/Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO BANNER -->
  <section class="relative pt-12 pb-16 overflow-hidden bg-gradient-to-b from-rose-50/60 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 text-xs font-black tracking-wider uppercase mb-4 border border-rose-300/60 dark:border-rose-800">
          <i class="fa-solid fa-torii-gate text-rose-600"></i>
          Chương Trình GDPT 2018 &bull; SGK Tiếng Nhật 9 (Ngoại Ngữ 1)
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Tiếng Nhật 9 &mdash; <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-amber-600">日本語９</span>
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Hệ thống hóa toàn bộ kiến thức 11 bài chủ đề, 4 bài ôn tập và bài tổng kết THCS. Tích hợp audio phát âm giọng chuẩn Tokyo (ja-JP), 17 sơ đồ Vector SVG độc quyền, bảng tra cứu 57 Kanji và Đấu trường Trạng Nguyên 60:00.
        </p>

        <!-- 4 Quick Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">11</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Bài Chủ Đề Chuẩn SGK</div>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">57</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Chữ Hán (Kanji) Cốt Lõi</div>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">17</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Sơ đồ Vector SVG</div>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">${allVocabWords.length}+</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase">Từ Vựng Kèm Audio ja-JP</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM MAP -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
      <h2 class="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <i class="fa-solid fa-map-location-dot text-rose-600"></i>
        Bản Đồ Chương Trình Tiếng Nhật 9
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Part 1 -->
        <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
          <div class="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-graduation-cap"></i>
            Ôn tập 1: Bài 1 – 3
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#bai-1" class="hover:text-rose-600 transition">Bài 1: Học ngoại ngữ</a></li>
            <li><a href="#bai-2" class="hover:text-rose-600 transition">Bài 2: Chuẩn bị bài thuyết trình</a></li>
            <li><a href="#bai-3" class="hover:text-rose-600 transition">Bài 3: Miêu tả ảnh</a></li>
            <li><a href="#on-tap-1" class="hover:text-rose-600 font-bold transition">Ôn tập 1 (Bài 1–3)</a></li>
          </ul>
        </div>

        <!-- Part 2 -->
        <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
          <div class="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-utensils"></i>
            Ôn tập 2: Bài 4 – 6
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#bai-4" class="hover:text-amber-600 transition">Bài 4: Việc khó khăn/rắc rối</a></li>
            <li><a href="#bai-5" class="hover:text-amber-600 transition">Bài 5: Cách ăn món ăn</a></li>
            <li><a href="#bai-6" class="hover:text-amber-600 transition">Bài 6: Ngày đặc biệt</a></li>
            <li><a href="#on-tap-2" class="hover:text-amber-600 font-bold transition">Ôn tập 2 (Bài 4–6)</a></li>
          </ul>
        </div>

        <!-- Part 3 -->
        <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
          <div class="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-shield-halved"></i>
            Ôn tập 3: Bài 7 – 9
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#bai-7" class="hover:text-emerald-600 transition">Bài 7: Thiên tai & Cứu trợ</a></li>
            <li><a href="#bai-8" class="hover:text-emerald-600 transition">Bài 8: Rắc rối (Bị động)</a></li>
            <li><a href="#bai-9" class="hover:text-emerald-600 transition">Bài 9: Hẹn gặp & Phỏng đoán</a></li>
            <li><a href="#on-tap-3" class="hover:text-emerald-600 font-bold transition">Ôn tập 3 (Bài 7–9)</a></li>
          </ul>
        </div>

        <!-- Part 4 -->
        <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60">
          <div class="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-black text-xs uppercase tracking-wider">
            <i class="fa-solid fa-flag-checkered"></i>
            Ôn tập 4 & Tổng kết THCS
          </div>
          <ul class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <li><a href="#bai-10" class="hover:text-indigo-600 transition">Bài 10: Tư vấn chọn trường</a></li>
            <li><a href="#bai-11" class="hover:text-indigo-600 transition">Bài 11: Kế hoạch tương lai</a></li>
            <li><a href="#bai-12" class="hover:text-indigo-600 font-bold transition">Bài 12: Ôn tập 1–11</a></li>
            <li><a href="#bai-13" class="hover:text-indigo-600 font-bold transition">Bài 13: Tổng kết THCS</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN TWO-COLUMN CONTENT AREA -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- STICKY LEFT SIDEBAR -->
      <aside class="lg:col-span-1 hidden lg:block">
        <div class="sticky top-24 space-y-4">
          <div class="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm max-h-[calc(100vh-130px)] overflow-y-auto">
            <div class="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 px-2">
              Danh mục 17 Bài học
            </div>
            <nav class="space-y-1 text-xs font-bold">
              ${allLessons.map(l => `
                <a href="#${l.id}" class="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition group">
                  <span class="w-2 h-2 rounded-full ${l.id.startsWith('on-tap-') || l.id === 'bai-12' || l.id === 'bai-13' ? 'bg-indigo-500' : 'bg-rose-500'} group-hover:scale-125 transition shrink-0"></span>
                  <span class="truncate">${l.lessonNum}: ${l.title}</span>
                </a>
              `).join('')}
            </nav>

            <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
              <button onclick="openExamModal()" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 text-white font-black text-xs text-center shadow transition active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-crown text-yellow-200"></i>
                Thi Trạng Nguyên (60p)
              </button>
            </div>
          </div>
        </div>
      </aside>

      <!-- RIGHT LESSON ARTICLES -->
      <section class="lg:col-span-3">
        ${allLessons.map((lesson, idx) => renderLessonSection(lesson, idx)).join('')}
      </section>
    </div>
  </main>

  <!-- ======================================================== -->
  <!-- MODAL 1: GLOSSARY MODAL (TRA TỪ VỰNG & KANJI)            -->
  <!-- ======================================================== -->
  <div id="glossaryModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
        <div>
          <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <i class="fa-solid fa-spell-check text-rose-600"></i>
            Tra Cứu Từ Vựng & Chữ Hán Tiếng Nhật 9
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Tổng hợp ${allVocabWords.length} mục từ chuẩn SGK kèm cách đọc Hiragana, Romaji & Audio ja-JP.</p>
        </div>
        <button onclick="closeGlossaryModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-base"></i>
        </button>
      </div>

      <div class="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
          <input type="text" id="glossarySearch" placeholder="Nhập từ Kanji, Hiragana, Romaji hoặc nghĩa tiếng Việt để tìm..." oninput="filterGlossary()" class="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500">
        </div>
      </div>

      <div class="p-5 overflow-y-auto flex-1 max-h-[55vh]" id="glossaryList">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="glossaryGrid">
          ${allVocabWords.map(v => renderVocabItem(v)).join('')}
        </div>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
        <span>Hiển thị: <strong id="glossaryCount" class="text-rose-600 font-bold">${allVocabWords.length}</strong> từ vựng</span>
        <button onclick="closeGlossaryModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold transition">
          Đóng
        </button>
      </div>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- MODAL 2: HANDBOOK MODAL (SỔ TAY CỐT LÕI)                 -->
  <!-- ======================================================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
        <div>
          <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <i class="fa-solid fa-book-open text-emerald-600"></i>
            Sổ Tay Cốt Lõi: 18 Mẫu Ngữ Pháp & 57 Kanji Lớp 9
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Bảng tra cứu nhanh toàn bộ kiến thức trọng tâm SGK Tiếng Nhật 9</p>
        </div>
        <button onclick="closeHandbookModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-base"></i>
        </button>
      </div>

      <!-- Handbook Tabs -->
      <div class="flex items-center gap-2 px-6 pt-3 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 text-xs font-bold">
        <button onclick="switchHandbookTab('tab-grammar')" id="btn-tab-grammar" class="px-4 py-2.5 border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 transition">
          18 Mẫu Ngữ Pháp
        </button>
        <button onclick="switchHandbookTab('tab-notes')" id="btn-tab-notes" class="px-4 py-2.5 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition">
          7 Lưu Ý Tránh Nhầm Lẫn
        </button>
        <button onclick="switchHandbookTab('tab-kanji')" id="btn-tab-kanji" class="px-4 py-2.5 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition">
          Bảng 57 Kanji Lớp 9
        </button>
      </div>

      <!-- Handbook Content Body -->
      <div class="p-6 overflow-y-auto flex-1 max-h-[60vh]">
        <!-- TAB 1: GRAMMAR MATRIX -->
        <div id="tab-grammar" class="space-y-3">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                  <th class="p-3 rounded-l-xl">Mẫu Ngữ Pháp</th>
                  <th class="p-3">Chức Năng Ý Nghĩa</th>
                  <th class="p-3 rounded-r-xl">Ví Dụ Chuẩn SGK</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${grammarSummaryTable.map(row => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                    <td class="p-3 font-bold text-rose-700 dark:text-rose-400 whitespace-nowrap font-mono">${row.pattern}</td>
                    <td class="p-3 text-slate-700 dark:text-slate-300">${row.functionVi}</td>
                    <td class="p-3 font-mono text-[11px] text-slate-800 dark:text-slate-200">${row.example}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- TAB 2: NOTES -->
        <div id="tab-notes" class="hidden space-y-3">
          <div class="space-y-3">
            ${grammarNotesTable.map(n => `
              <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60">
                <div class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm mb-1">${n.item}</div>
                <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${n.note}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TAB 3: KANJI MATRIX -->
        <div id="tab-kanji" class="hidden space-y-3">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            ${kanjiMatrix.map(k => `
              <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center flex flex-col justify-between">
                <div class="text-2xl font-black text-rose-600 dark:text-rose-400 mb-1">${k.char}</div>
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200">${k.mean}</div>
                <div class="text-[10px] text-slate-400 font-mono mt-1">
                  <div>On: ${k.onyomi}</div>
                  <div>Kun: ${k.kunyomi}</div>
                </div>
                <div class="mt-1 pt-1 border-t border-slate-200/60 dark:border-slate-800 text-[10px] text-rose-500 font-bold">${k.lesson}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- MODAL 3: EXAM MODAL (ĐẤU TRƯỜNG TRẠNG NGUYÊN 60:00)      -->
  <!-- ======================================================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      
      <!-- Exam Header with Timer -->
      <div class="p-5 sm:p-6 bg-gradient-to-r from-amber-500 via-rose-600 to-indigo-700 text-white flex items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-1">
            <i class="fa-solid fa-crown text-yellow-300"></i>
            Đấu Trường Trạng Nguyên Tiếng Nhật 9
          </div>
          <h3 class="text-lg sm:text-xl font-black tracking-tight">Đề Thi Tổng Hợp Ôn Thi Vào Lớp 10 (25 Câu)</h3>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3.5 py-1.5 rounded-2xl bg-black/30 border border-white/20 text-center">
            <div class="text-[10px] font-bold uppercase text-white/80">Thời gian</div>
            <div id="exam-timer" class="font-mono text-lg font-black text-yellow-300">60:00</div>
          </div>
          <button onclick="closeExamModal()" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
            <i class="fa-solid fa-xmark text-base"></i>
          </button>
        </div>
      </div>

      <!-- Exam Question List -->
      <div class="p-6 overflow-y-auto flex-1 max-h-[60vh] space-y-6" id="examQuestionsContainer">
        ${examQuestions.map((eq, qIdx) => `
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
            <p class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-3 leading-relaxed flex items-start gap-2">
              <span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">${qIdx + 1}</span>
              <span>${eq.q}</span>
            </p>
            <div class="space-y-2 pl-8">
              ${eq.options.map((opt, optIdx) => `
                <label class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-900 cursor-pointer transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                  <input type="radio" name="exam-q-${qIdx}" value="${optIdx}" class="text-rose-600 focus:ring-rose-500">
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
            <div id="exam-explain-${qIdx}" class="mt-3 p-3 rounded-xl text-xs hidden"></div>
          </div>
        `).join('')}
      </div>

      <!-- Exam Result Banner & Footer -->
      <div class="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div id="examScoreBanner" class="hidden text-xs font-bold text-slate-800 dark:text-slate-200">
          Kết quả: <span id="examScoreText" class="text-rose-600 dark:text-rose-400 text-sm font-black">0 / 25</span>
          &mdash; <span id="examFeedbackText" class="italic text-slate-500"></span>
        </div>
        <div class="flex items-center gap-2 self-end sm:self-auto">
          <button onclick="submitExam()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-md transition active:scale-95">
            Nộp Bài & Chấm Điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-torii-gate text-rose-600"></i>
        <span class="font-bold text-slate-700 dark:text-slate-300">CodeHub Educational Platform</span>
        <span>&bull;</span>
        <span>Học liệu Tiếng Nhật 9 chuẩn GDPT 2018 (Ngoại ngữ 1)</span>
      </div>
      <p>Bản tổng hợp kiến thức phục vụ tra cứu học tập trực tuyến, kết hợp kĩ năng ngôn ngữ và công nghệ số.</p>
    </div>
  </footer>

  <!-- SCRIPT LOGIC -->
  <script>
    // 1. Audio Pronunciation via Web Speech API (ja-JP)
    function speakJapanese(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }

    // 2. Dark / Light Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // 3. Glossary Modal Logic
    const glossaryModal = document.getElementById('glossaryModal');
    function openGlossaryModal() {
      glossaryModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      document.getElementById('glossarySearch').focus();
    }
    function closeGlossaryModal() {
      glossaryModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    const allVocabData = ${JSON.stringify(allVocabWords)};
    function filterGlossary() {
      const q = document.getElementById('glossarySearch').value.toLowerCase().trim();
      const grid = document.getElementById('glossaryGrid');
      grid.innerHTML = '';
      
      const filtered = allVocabData.filter(v => 
        (v.jp || '').toLowerCase().includes(q) ||
        (v.kana || '').toLowerCase().includes(q) ||
        (v.romaji || '').toLowerCase().includes(q) ||
        (v.mean || '').toLowerCase().includes(q)
      );

      document.getElementById('glossaryCount').textContent = filtered.length;

      if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-2 text-center py-8 text-xs text-slate-400">Không tìm thấy từ vựng phù hợp.</div>';
        return;
      }

      filtered.forEach(v => {
        const safeJp = (v.jp || v.kana || '').replace(/'/g, "\\\\'");
        grid.innerHTML += \`
          <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-2 shadow-sm">
            <div class="flex items-start justify-between gap-2">
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="font-black text-slate-900 dark:text-white text-sm sm:text-base">\${v.jp}</span>
                  <span class="text-[11px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold font-mono">\${v.kana}</span>
                  <span class="text-[10px] text-slate-400 italic font-mono">/\${v.romaji}/</span>
                </div>
                <div class="text-xs text-rose-700 dark:text-rose-300 font-bold mt-1.5">\${v.mean}</div>
              </div>
              <button onclick="speakJapanese('\${safeJp}')" title="Nghe phát âm (ja-JP)" class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
            </div>
            <div class="text-[10px] text-slate-400 dark:text-slate-500 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span>\${v.type || 'Từ vựng'}</span>
              <span class="text-rose-500 font-bold">\${v.unit}</span>
            </div>
          </div>
        \`;
      });
    }

    // 4. Handbook Modal Logic & Tabs
    const handbookModal = document.getElementById('handbookModal');
    function openHandbookModal() {
      handbookModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closeHandbookModal() {
      handbookModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    function switchHandbookTab(tabId) {
      ['tab-grammar', 'tab-notes', 'tab-kanji'].forEach(t => {
        document.getElementById(t).classList.add('hidden');
      });
      ['btn-tab-grammar', 'btn-tab-notes', 'btn-tab-kanji'].forEach(b => {
        document.getElementById(b).classList.remove('border-emerald-600', 'text-emerald-600', 'dark:text-emerald-400');
        document.getElementById(b).classList.add('border-transparent', 'text-slate-500');
      });

      document.getElementById(tabId).classList.remove('hidden');
      const activeBtn = document.getElementById('btn-' + tabId);
      activeBtn.classList.add('border-emerald-600', 'text-emerald-600', 'dark:text-emerald-400');
      activeBtn.classList.remove('border-transparent', 'text-slate-500');
    }

    // 5. Mini-Quiz Check Logic
    function checkUnitQuiz(unitId, qIdx, answer, explain) {
      const radios = document.getElementsByName('q-' + unitId + '-' + qIdx);
      let selectedVal = null;
      for (let r of radios) {
        if (r.checked) {
          selectedVal = parseInt(r.value, 10);
          break;
        }
      }

      const resSpan = document.getElementById('quiz-result-' + unitId + '-' + qIdx);
      const expDiv = document.getElementById('quiz-explain-' + unitId + '-' + qIdx);
      resSpan.classList.remove('hidden', 'text-emerald-600', 'text-rose-600');
      expDiv.classList.remove('hidden');

      if (selectedVal === null) {
        alert('Vui lòng chọn một đáp án trước khi bấm kiểm tra.');
        return;
      }

      if (selectedVal === answer) {
        resSpan.textContent = 'Chính xác! ✓';
        resSpan.classList.add('text-emerald-600');
        expDiv.innerHTML = '<strong class="text-emerald-600 font-bold">Giải thích:</strong> ' + explain;
      } else {
        resSpan.textContent = 'Chưa đúng ✕';
        resSpan.classList.add('text-rose-600');
        expDiv.innerHTML = '<strong class="text-rose-600 font-bold">Giải thích:</strong> ' + explain;
      }
    }

    // 6. Exam Modal & 60:00 Countdown Logic
    const examModal = document.getElementById('examModal');
    let examTimeSeconds = 3600;
    let examInterval = null;
    const examQuestionsData = ${JSON.stringify(examQuestions)};

    function openExamModal() {
      examModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      if (!examInterval) startExamTimer();
    }
    function closeExamModal() {
      examModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    function startExamTimer() {
      if (examInterval) clearInterval(examInterval);
      examInterval = setInterval(() => {
        if (examTimeSeconds <= 0) {
          clearInterval(examInterval);
          alert('Hết giờ làm bài thi Trạng Nguyên! Hệ thống đang tự động chấm điểm.');
          submitExam();
          return;
        }
        examTimeSeconds--;
        const mins = Math.floor(examTimeSeconds / 60);
        const secs = examTimeSeconds % 60;
        document.getElementById('exam-timer').textContent = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }, 1000);
    }

    function submitExam() {
      if (examInterval) clearInterval(examInterval);

      let score = 0;
      examQuestionsData.forEach((eq, idx) => {
        const radios = document.getElementsByName('exam-q-' + idx);
        let selectedVal = null;
        for (let r of radios) {
          if (r.checked) {
            selectedVal = parseInt(r.value, 10);
            break;
          }
        }

        const exp = document.getElementById('exam-explain-' + idx);
        exp.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200', 'bg-rose-50', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');

        if (selectedVal === eq.answer) {
          score++;
          exp.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200');
          exp.innerHTML = '<strong class="font-bold text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong> ' + eq.explain;
        } else {
          exp.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');
          exp.innerHTML = '<strong class="font-bold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa đúng!</strong> Đáp án đúng: <em>' + eq.options[eq.answer] + '</em>. ' + eq.explain;
        }
      });

      const banner = document.getElementById('examScoreBanner');
      const scoreText = document.getElementById('examScoreText');
      const fbText = document.getElementById('examFeedbackText');
      banner.classList.remove('hidden');

      scoreText.textContent = score + ' / 25 Điểm';
      const pct = Math.round((score / 25) * 100);
      if (pct >= 90) {
        fbText.textContent = 'Xuất sắc! Em đạt danh hiệu Trạng Nguyên Tiếng Nhật 9 với vốn Kanji uyên bác và ngữ pháp vững vàng!';
      } else if (pct >= 70) {
        fbText.textContent = 'Khá giỏi! Em nắm rất chắc các chuyên đề mẫu câu và kĩ năng đọc hiểu chuẩn SGK.';
      } else {
        fbText.textContent = 'Em hãy rà soát lại các bài học và luyện tập thêm với Sổ tay cốt lõi nhé!';
      }
    }
  </script>
</body>
</html>
`;

// Save to courses/tiengnhat_9.html
const outTiengnhat9 = path.resolve(__dirname, '../courses/tiengnhat_9.html');
fs.writeFileSync(outTiengnhat9, fullHtml, 'utf8');
console.log('Saved tiengnhat_9.html, size:', fullHtml.length);

// Copy to courses/japanese_9.html
const outJapanese9 = path.resolve(__dirname, '../courses/japanese_9.html');
fs.writeFileSync(outJapanese9, fullHtml, 'utf8');
console.log('Saved japanese_9.html, size:', fullHtml.length);
