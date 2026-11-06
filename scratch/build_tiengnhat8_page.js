// Generator script for Tiếng Nhật 8 (Kết nối tri thức với cuộc sống - GDPT 2018)
const fs = require('fs');
const path = require('path');

const { lessonsPart1 } = require('./tiengnhat8_data_p1.js');
const { lessonsPart2, grammarSummaryTable, verbConjugationTable, kanjiMatrix } = require('./tiengnhat8_data_p2.js');
const { getMindmapSVG } = require('./tiengnhat8_mindmaps.js');
const { examQuestions } = require('./tiengnhat8_exam.js');

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
  if (['bai-5', 'bai-6', 'bai-7', 'on-tap-2'].includes(unitId)) stageNum = 2;
  else if (['bai-8', 'bai-9', 'bai-10', 'on-tap-3'].includes(unitId)) stageNum = 3;
  else if (['bai-11', 'bai-12', 'bai-13', 'on-tap-4', 'bai-14'].includes(unitId)) stageNum = 4;

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
  const mindmapSVG = getMindmapSVG(unitId);

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

      <!-- Sơ đồ tư duy trực quan (Concept Mindmap) -->
      ${mindmapSVG ? `
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          <span><i class="fa-solid fa-sitemap text-rose-500 mr-1.5"></i> Sơ đồ tư duy trực quan (Concept Mindmap)</span>
          <span class="text-[10px] text-gray-400 font-normal">Trực quan hóa cấu trúc cốt lõi</span>
        </div>
        <div class="rounded-2xl overflow-hidden border border-rose-100 dark:border-gray-800 shadow-sm bg-gray-900">
          ${mindmapSVG}
        </div>
      </div>
      ` : ''}

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
          <div class="p-3 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
            ${lesson.culture}
          </div>
        </div>
      </div>

      <!-- Section 6: Mini Quiz củng cố -->
      <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-3">
        <h4 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <i class="fa-solid fa-circle-question text-rose-600"></i> 6. やってみましょう — Bài tập tự đánh giá (Mini-quiz)
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${(lesson.quiz || []).map((qItem, qIdx) => `
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-3">
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

function generateCompletePage() {
  const contentHTML = allLessons.map((l, i) => renderLessonHTML(l, i)).join('\n');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Nhật 8 — Kết nối tri thức với cuộc sống (Chương trình GDPT 2018)</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            gray: {
              850: '#1e2433',
            }
          }
        }
      }
    }
  </script>

  <!-- Font Awesome Free 6.5.1 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts: Plus Jakarta Sans & Noto Sans JP -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans JP', sans-serif;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(244, 63, 94, 0.3);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(244, 63, 94, 0.6);
    }
    .lesson-nav-active {
      background-color: rgb(244 63 94);
      color: white !important;
      font-weight: 700;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">

  <!-- Header Sticky Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 text-rose-600 dark:text-rose-400 group">
          <div class="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950 flex items-center justify-center text-lg font-black group-hover:scale-105 transition shadow-sm border border-rose-200 dark:border-rose-900">
            <i class="fa-solid fa-torii-gate"></i>
          </div>
          <div>
            <span class="text-xs uppercase tracking-widest font-extrabold text-rose-700 dark:text-rose-400 block leading-tight">CodeHub Academy</span>
            <span class="text-base sm:text-lg font-black text-gray-900 dark:text-white leading-tight">Tiếng Nhật 8</span>
          </div>
        </a>
        <span class="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
          SGK Kết nối tri thức &bull; GDPT 2018
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        
        <!-- Search bar trigger -->
        <button onclick="toggleModal('search-modal')" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <i class="fa-solid fa-magnifying-glass text-rose-500"></i>
          <span>Tra cứu nhanh (Từ vựng, Kanji)...</span>
          <kbd class="text-[10px] bg-white dark:bg-gray-900 px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-700">⌘K</kbd>
        </button>

        <!-- Sổ tay Kanji Matrix -->
        <button onclick="toggleModal('kanji-modal')" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-600 hover:text-white transition flex items-center gap-1.5 border border-rose-200 dark:border-rose-900">
          <i class="fa-solid fa-brush"></i>
          <span class="hidden md:inline">Sổ tay</span> Kanji (63 chữ)
        </button>

        <!-- Bảng Động từ -->
        <button onclick="toggleModal('verbs-modal')" class="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-xs font-bold hover:bg-sky-600 hover:text-white transition flex items-center gap-1.5 border border-sky-200 dark:border-sky-900">
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
          <span class="hidden md:inline">Biến đổi</span> Động từ
        </button>

        <!-- Bảng tra nhanh -->
        <button onclick="toggleModal('summary-modal')" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-600 hover:text-white transition flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-900">
          <i class="fa-solid fa-table-list"></i>
          <span class="hidden md:inline">Bảng tra nhanh</span> 14 Bài
        </button>

        <!-- Đấu trường Trạng Nguyên -->
        <button onclick="toggleModal('exam-modal')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-black hover:opacity-90 transition flex items-center gap-1.5 shadow-md">
          <i class="fa-solid fa-trophy"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" onclick="toggleDarkMode()" title="Chuyển chế độ sáng/tối" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition cursor-pointer">
          <i id="theme-toggle-icon" class="fa-solid fa-moon"></i>
        </button>

        <!-- Mobile sidebar toggle -->
        <button onclick="toggleMobileSidebar()" class="lg:hidden w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center text-sm">
          <i class="fa-solid fa-bars"></i>
        </button>

      </div>
    </div>
  </header>

  <!-- Main Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex gap-8 items-start">
      
      <!-- Left Sidebar (Table of Contents) -->
      <aside id="sidebar" class="hidden lg:block w-72 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-4 bg-white dark:bg-gray-850 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
        
        <div class="space-y-1">
          <h3 class="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">Mục lục khóa học</h3>
          <p class="text-xs text-gray-600 dark:text-gray-400">13 Bài học &bull; 4 Bài ôn tập &bull; Bài 14 tổng ôn</p>
        </div>

        <!-- Filter tabs by stages -->
        <div class="grid grid-cols-4 gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl text-[11px] font-bold text-center">
          <button onclick="filterStage(1, this)" class="stage-btn py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-rose-600 dark:text-rose-400">GĐ 1</button>
          <button onclick="filterStage(2, this)" class="stage-btn py-1 rounded-lg hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">GĐ 2</button>
          <button onclick="filterStage(3, this)" class="stage-btn py-1 rounded-lg hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">GĐ 3</button>
          <button onclick="filterStage(4, this)" class="stage-btn py-1 rounded-lg hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">GĐ 4</button>
        </div>

        <!-- Navigation list -->
        <nav class="space-y-1 text-xs" id="nav-list">
          ${allLessons.map(l => `
            <a href="#${l.id}" 
               data-stage="${['bai-1','bai-2','bai-3','bai-4','on-tap-1'].includes(l.id) ? 1 : ['bai-5','bai-6','bai-7','on-tap-2'].includes(l.id) ? 2 : ['bai-8','bai-9','bai-10','on-tap-3'].includes(l.id) ? 3 : 4}"
               class="nav-link flex items-center justify-between p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/60 transition group text-gray-700 dark:text-gray-300">
              <div class="truncate mr-2">
                <span class="font-bold block truncate">${l.lessonNum ? 'Bài ' + l.lessonNum + ': ' + l.title : l.title}</span>
                <span class="text-[10px] text-gray-400 block truncate">${l.meaning}</span>
              </div>
              <span class="text-[10px] px-1.5 py-0.5 rounded ${l.isReview ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400'} shrink-0 font-mono">
                ${l.isReview ? 'Ôn tập' : 'Bài ' + l.lessonNum}
              </span>
            </a>
          `).join('')}
        </nav>

        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
          <div class="p-3 rounded-2xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-1 text-xs">
            <span class="font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
              <i class="fa-solid fa-headphones"></i> Web Speech API
            </span>
            <p class="text-[11px] text-gray-600 dark:text-gray-400 leading-tight">
              Tích hợp giọng đọc ja-JP chuẩn người bản xứ cho toàn bộ từ vựng, mẫu câu và hội thoại!
            </p>
          </div>
        </div>

      </aside>

      <!-- Main Course Content -->
      <main class="flex-1 min-w-0 space-y-8">
        
        <!-- Welcome Hero Banner -->
        <div class="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white shadow-xl relative overflow-hidden">
          <div class="relative z-10 space-y-3 max-w-2xl">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider">
              <i class="fa-solid fa-graduation-cap"></i> Học liệu số hóa chuẩn SGK Kết nối tri thức
            </span>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              KIẾN THỨC CỐT LÕI TIẾNG NHẬT 8
            </h1>
            <p class="text-xs sm:text-sm text-rose-100 leading-relaxed font-medium">
              Chương trình chuẩn GDPT 2018 gồm đủ 13 Bài học giao tiếp, 4 Bài ôn tập và Bài 14 tổng ôn. Tích hợp Audio phát âm ja-JP, 63 Chữ Hán Kanji, 13 SVG Concept Mindmaps, Bảng biến đổi động từ toàn diện và Đấu trường Trạng Nguyên Tiếng Nhật 8 (60:00).
            </p>
            <div class="flex flex-wrap items-center gap-2 pt-2">
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-book mr-1"></i> 14 Bài học &bull; 4 Ôn tập
              </span>
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-brush mr-1"></i> 63 Chữ Hán Kanji
              </span>
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-volume-high mr-1"></i> 150+ Audio ja-JP
              </span>
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-sitemap mr-1"></i> 13 Concept Mindmaps
              </span>
            </div>
          </div>
          <!-- Decorative Background Icon -->
          <div class="absolute -right-6 -bottom-6 text-white/10 text-9xl pointer-events-none select-none">
            <i class="fa-solid fa-torii-gate"></i>
          </div>
        </div>

        <!-- Render All Lessons Content -->
        ${contentHTML}

      </main>

    </div>
  </div>

  <!-- ==================== MODALS ==================== -->

  <!-- 1. MODAL: SỔ TAY KANJI MATRIX (63 CHỮ HÁN) -->
  <div id="kanji-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-brush"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Sổ tay 63 Chữ Hán Kanji Tiếng Nhật 8</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Trọng tâm 13 bài học theo SGK Kết nối tri thức với cuộc sống</p>
          </div>
        </div>
        <button onclick="toggleModal('kanji-modal')" class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${kanjiMatrix.map(km => `
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
              <div class="flex items-center justify-between border-b border-gray-200/60 dark:border-gray-700/60 pb-2">
                <span class="font-bold text-xs text-rose-600 dark:text-rose-400 uppercase tracking-wider">${km.bài}</span>
                <span class="text-xs font-black tracking-widest text-gray-900 dark:text-white bg-white dark:bg-gray-900 px-2 py-0.5 rounded-lg border border-gray-200 dark:border-gray-700">
                  ${km.chữ}
                </span>
              </div>
              <div class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Từ ghép &amp; ví dụ:</strong> ${km.víDụ}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- 2. MODAL: BẢNG BIẾN ĐỔI ĐỘNG TỪ TOÀN DIỆN -->
  <div id="verbs-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Bảng Biến Đổi Động Từ (Động từ Tiếng Nhật 8)</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Hệ thống chuyển đổi: Vます &bull; Vて &bull; Vた &bull; Vない &bull; Thể khả năng</p>
          </div>
        </div>
        <button onclick="toggleModal('verbs-modal')" class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar">
        <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
          <table class="w-full text-xs text-left">
            <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider">
              <tr>
                <th class="p-3">Nhóm động từ</th>
                <th class="p-3">Thể Lịch sự (ます)</th>
                <th class="p-3">Thể て</th>
                <th class="p-3">Thể Quá khứ (た)</th>
                <th class="p-3">Thể Phủ định (ない)</th>
                <th class="p-3">Thể Khả năng</th>
                <th class="p-3">Ý nghĩa</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700 font-medium">
              ${verbConjugationTable.map(vc => `
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">${vc.nhóm}</td>
                  <td class="p-3 font-bold text-gray-900 dark:text-white">${vc.masu}</td>
                  <td class="p-3 text-sky-600 dark:text-sky-400 font-mono">${vc.te}</td>
                  <td class="p-3 text-emerald-600 dark:text-emerald-400 font-mono">${vc.ta}</td>
                  <td class="p-3 text-amber-600 dark:text-amber-400 font-mono">${vc.nai}</td>
                  <td class="p-3 text-purple-600 dark:text-purple-400 font-mono font-bold">${vc.kanou}</td>
                  <td class="p-3 text-gray-600 dark:text-gray-300">${vc.nghĩa}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. MODAL: BẢNG TRA NHANH 14 BÀI -->
  <div id="summary-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-5xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-table-list"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Bảng Tra Cứu Nhanh 14 Bài Học Cốt Lõi Tiếng Nhật 8</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Đối chiếu mẫu câu, chữ Hán và chủ điểm văn hóa từng bài</p>
          </div>
        </div>
        <button onclick="toggleModal('summary-modal')" class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar">
        <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
          <table class="w-full text-xs text-left">
            <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider">
              <tr>
                <th class="p-3">Bài học</th>
                <th class="p-3">Chủ điểm giao tiếp</th>
                <th class="p-3">Mẫu câu trọng tâm</th>
                <th class="p-3">Chữ Hán Kanji</th>
                <th class="p-3">Góc văn hóa đặc sắc</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              ${grammarSummaryTable.map(gs => `
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="p-3 font-bold text-gray-900 dark:text-white whitespace-nowrap">${gs.bài}</td>
                  <td class="p-3 font-medium text-gray-700 dark:text-gray-300">${gs.chủĐiểm}</td>
                  <td class="p-3 text-rose-600 dark:text-rose-400 font-mono font-semibold">${gs.mẫuCâu}</td>
                  <td class="p-3 text-sky-600 dark:text-sky-400 font-bold tracking-wider">${gs.chữHán}</td>
                  <td class="p-3 text-gray-600 dark:text-gray-400">${gs.vănHóa}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. MODAL: ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG NHẬT 8 (40 CÂU - 60:00) -->
  <div id="exam-modal" class="fixed inset-0 z-50 hidden bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white flex items-center justify-between shadow">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg font-black shadow-inner">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG NHẬT 8</h3>
            <p class="text-xs text-amber-100 font-medium">40 Câu hỏi &bull; Thời gian 60:00 &bull; Chuẩn kiến thức SGK Kết nối tri thức</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <!-- Countdown Clock -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 font-mono font-bold text-sm sm:text-base">
            <i class="fa-regular fa-clock text-amber-300"></i>
            <span id="exam-timer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div id="exam-container" class="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
        
        <!-- Welcome Screen -->
        <div id="exam-intro" class="text-center py-8 space-y-4 max-w-lg mx-auto">
          <div class="w-20 h-20 mx-auto rounded-3xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-3xl font-black shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 class="text-xl font-black text-gray-900 dark:text-white">Chào mừng tới Đấu Trường Trạng Nguyên!</h4>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Bài thi gồm <strong>40 câu hỏi trắc nghiệm</strong> kiểm tra toàn diện 4 phân môn: Chữ Hán Kanji (10 câu), Từ vựng (8 câu), Ngữ pháp &amp; Biến đổi thể động từ (14 câu), Đọc hiểu - Ứng xử &amp; Văn hóa Nhật Bản (8 câu).
          </p>
          <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 text-left space-y-1">
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>≥ 36 điểm:</strong> Trạng Nguyên Tiếng Nhật 8 (Xuất sắc)</div>
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>30 - 35 điểm:</strong> Bảng Nhãn Tiếng Nhật 8 (Giỏi)</div>
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>24 - 29 điểm:</strong> Thám Hoa Tiếng Nhật 8 (Khá)</div>
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>&lt; 24 điểm:</strong> Cần rèn luyện thêm</div>
          </div>
          <button onclick="startExam()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-sm shadow-lg transition">
            BẮT ĐẦU LÀM BÀI THI (60:00)
          </button>
        </div>

        <!-- Questions List (Hidden by default) -->
        <div id="exam-questions-list" class="hidden space-y-6">
          ${examQuestions.map((eq, eqIdx) => `
            <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                  Câu ${eqIdx + 1} / 40 &bull; ${eq.cat}
                </span>
                <span id="exam-q-status-${eqIdx}" class="text-[11px] text-gray-400 italic">Chưa trả lời</span>
              </div>
              <p class="font-bold text-sm text-gray-900 dark:text-white leading-relaxed">
                ${eq.q}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${eq.options.map((opt, optIdx) => `
                  <button type="button" 
                          onclick="selectExamOption(${eqIdx}, ${optIdx}, this)"
                          class="exam-opt-btn-${eqIdx} w-full text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 transition cursor-pointer">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <!-- Explanation (Hidden until submitted) -->
              <div id="exam-exp-${eqIdx}" class="hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-700/60 text-xs text-gray-700 dark:text-gray-300">
                <strong>Giải thích:</strong> ${eq.exp}
              </div>
            </div>
          `).join('')}

          <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-3">
            <button onclick="submitExam()" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-lg transition">
              <i class="fa-solid fa-paper-plane mr-1"></i> NỘP BÀI THI &amp; XEM KẾT QUẢ
            </button>
          </div>
        </div>

        <!-- Result View (Hidden until submitted) -->
        <div id="exam-result" class="hidden text-center py-6 space-y-4 max-w-lg mx-auto"></div>

      </div>

    </div>
  </div>

  <!-- 5. MODAL: SEARCH TRA CỨU NHANH -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-20">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-2xl w-full p-4 shadow-2xl border border-gray-200 dark:border-gray-800 space-y-3">
      <div class="flex items-center gap-2 px-3 py-2 rounded-2xl bg-gray-100 dark:bg-gray-800">
        <i class="fa-solid fa-magnifying-glass text-rose-500"></i>
        <input id="search-input" oninput="handleSearch(this.value)" type="text" placeholder="Gõ từ khóa tiếng Nhật, Romaji, Hán Việt hoặc tiếng Việt..." class="bg-transparent border-none outline-none w-full text-xs text-gray-900 dark:text-white placeholder-gray-400">
        <button onclick="toggleModal('search-modal')" class="text-xs text-gray-400 hover:text-gray-600"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div id="search-results" class="max-h-72 overflow-y-auto custom-scrollbar space-y-1 text-xs">
        <p class="p-3 text-gray-400 text-center italic">Nhập ít nhất 2 ký tự để tìm kiếm tức thời trong 14 bài học...</p>
      </div>
    </div>
  </div>

  <!-- JavaScript Application Logic -->
  <script>
    // 1. Text-to-Speech (ja-JP)
    function speakJapanese(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }

    // 2. Dark Mode Toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }
    function updateThemeIcon(isDark) {
      const icon = document.getElementById('theme-toggle-icon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-gray-600';
      }
    }
    // Init theme
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    // 3. Modals toggle
    function toggleModal(modalId) {
      const m = document.getElementById(modalId);
      if (m) {
        m.classList.toggle('hidden');
        if (modalId === 'search-modal' && !m.classList.contains('hidden')) {
          setTimeout(() => document.getElementById('search-input').focus(), 100);
        }
      }
    }

    // Shortcut Ctrl+K / Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleModal('search-modal');
      }
      if (e.key === 'Escape') {
        ['kanji-modal', 'verbs-modal', 'summary-modal', 'exam-modal', 'search-modal'].forEach(id => {
          const el = document.getElementById(id);
          if (el && !el.classList.contains('hidden')) el.classList.add('hidden');
        });
      }
    });

    // 4. Mini Quiz Checker
    function checkAnswer(unitId, qIdx, selectedIdx, correctIdx, btn) {
      const container = btn.parentElement;
      const allBtns = container.querySelectorAll('.quiz-btn');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-white', 'dark:hover:bg-gray-700');
      });

      const fb = document.getElementById('quiz-fb-' + unitId + '-' + qIdx);
      if (selectedIdx === correctIdx) {
        btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
        if (fb) {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 block';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-check text-emerald-600 mr-1\"></i> Chính xác!</strong> Bạn đã nắm vững kiến thức trọng tâm.';
        }
      } else {
        btn.classList.add('bg-rose-500', 'text-white', 'border-rose-600');
        if (allBtns[correctIdx]) {
          allBtns[correctIdx].classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'text-emerald-700', 'dark:text-emerald-300', 'border-emerald-500');
        }
        if (fb) {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800 block';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Chưa chính xác.</strong> Đáp án đúng là phương án ' + String.fromCharCode(65 + correctIdx) + '.';
        }
      }
    }

    // 5. Stage Filter on Sidebar
    function filterStage(stageNum, btn) {
      document.querySelectorAll('.stage-btn').forEach(b => {
        b.classList.remove('bg-white', 'dark:bg-gray-700', 'shadow-sm', 'text-rose-600', 'dark:text-rose-400');
        b.classList.add('text-gray-600', 'dark:text-gray-300');
      });
      btn.classList.add('bg-white', 'dark:bg-gray-700', 'shadow-sm', 'text-rose-600', 'dark:text-rose-400');

      document.querySelectorAll('.nav-link').forEach(link => {
        const linkStage = parseInt(link.getAttribute('data-stage'));
        link.style.display = (linkStage === stageNum) ? 'flex' : 'none';
      });
    }

    // 6. Đấu trường Trạng Nguyên Exam Logic
    const examData = ${JSON.stringify(examQuestions)};
    let examUserAnswers = {};
    let examTimerInterval = null;
    let examSecondsLeft = 3600; // 60 minutes

    function startExam() {
      document.getElementById('exam-intro').classList.add('hidden');
      document.getElementById('exam-questions-list').classList.remove('hidden');
      examSecondsLeft = 3600;
      examUserAnswers = {};
      
      clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examSecondsLeft--;
        const mins = Math.floor(examSecondsLeft / 60);
        const secs = examSecondsLeft % 60;
        document.getElementById('exam-timer').innerText = 
          String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
        if (examSecondsLeft <= 0) {
          clearInterval(examTimerInterval);
          alert('Đã hết 60 phút làm bài! Hệ thống tự động nộp bài.');
          submitExam();
        }
      }, 1000);
    }

    function selectExamOption(qIdx, optIdx, btn) {
      examUserAnswers[qIdx] = optIdx;
      const allBtns = document.querySelectorAll('.exam-opt-btn-' + qIdx);
      allBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-white', 'border-amber-600');
      });
      btn.classList.add('bg-amber-500', 'text-white', 'border-amber-600');
      const st = document.getElementById('exam-q-status-' + qIdx);
      if (st) {
        st.innerText = 'Đã chọn (' + String.fromCharCode(65 + optIdx) + ')';
        st.className = 'text-[11px] text-emerald-600 font-bold';
      }
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      examData.forEach((eq, idx) => {
        const expEl = document.getElementById('exam-exp-' + idx);
        if (expEl) expEl.classList.remove('hidden');
        if (examUserAnswers[idx] === eq.a) {
          score++;
        }
      });

      let rankTitle = 'Cần cố gắng thêm';
      let rankColor = 'text-rose-500';
      let rankBadge = 'fa-medal';
      if (score >= 36) {
        rankTitle = 'TRẠNG NGUYÊN TIẾNG NHẬT 8 (Xuất sắc)';
        rankColor = 'text-amber-500';
        rankBadge = 'fa-trophy';
      } else if (score >= 30) {
        rankTitle = 'BẢNG NHÃN TIẾNG NHẬT 8 (Giỏi)';
        rankColor = 'text-sky-500';
        rankBadge = 'fa-award';
      } else if (score >= 24) {
        rankTitle = 'THÁM HOA TIẾNG NHẬT 8 (Khá)';
        rankColor = 'text-emerald-500';
        rankBadge = 'fa-certificate';
      }

      const resEl = document.getElementById('exam-result');
      resEl.classList.remove('hidden');
      resEl.innerHTML = \`
        <div class="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-3">
          <div class="text-4xl \${rankColor}"><i class="fa-solid \${rankBadge}"></i></div>
          <h4 class="text-xl font-black text-gray-900 dark:text-white">KẾT QUẢ BÀI THI</h4>
          <div class="text-3xl font-extrabold text-rose-600 dark:text-rose-400 font-mono">\${score} / 40 ĐIỂM</div>
          <div class="text-sm font-bold \${rankColor}">Danh hiệu: \${rankTitle}</div>
          <p class="text-xs text-gray-600 dark:text-gray-400">Bạn có thể cuộn lên xem giải thích chi tiết cho từng câu hỏi bên trên.</p>
          <button onclick="startExam()" class="mt-2 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs">
            <i class="fa-solid fa-rotate-right mr-1"></i> Thi lại lần nữa
          </button>
        </div>
      \`;
      resEl.scrollIntoView({ behavior: 'smooth' });
    }

    function closeExamModal() {
      if (confirm('Bạn có muốn đóng giao diện Đấu trường Trạng Nguyên không? Tiến trình hiện tại sẽ được lưu lại.')) {
        toggleModal('exam-modal');
      }
    }

    // 7. Interactive Instant Search
    const searchData = [];
    ${JSON.stringify(allLessons)}.forEach(l => {
      (l.vocab || []).forEach(v => {
        searchData.push({
          type: 'Từ vựng',
          lesson: l.title,
          lessonId: l.id,
          text: v.jp + ' ' + v.kana + ' ' + v.romaji + ' ' + v.mean
        });
      });
      (l.kanji || []).forEach(k => {
        searchData.push({
          type: 'Chữ Hán',
          lesson: l.title,
          lessonId: l.id,
          text: k.char + ' ' + k.mean + ' ' + k.on + ' ' + k.kun + ' ' + k.words
        });
      });
      if (l.grammar) {
        searchData.push({
          type: 'Ngữ pháp',
          lesson: l.title,
          lessonId: l.id,
          text: l.grammar.title + ' ' + l.grammar.formula
        });
      }
    });

    function handleSearch(keyword) {
      const q = keyword.trim().toLowerCase();
      const resContainer = document.getElementById('search-results');
      if (q.length < 2) {
        resContainer.innerHTML = '<p class="p-3 text-gray-400 text-center italic">Nhập ít nhất 2 ký tự để tìm kiếm tức thời...</p>';
        return;
      }
      const matches = searchData.filter(d => d.text.toLowerCase().includes(q)).slice(0, 15);
      if (matches.length === 0) {
        resContainer.innerHTML = '<p class="p-3 text-rose-500 text-center">Không tìm thấy nội dung khớp với từ khóa.</p>';
        return;
      }
      resContainer.innerHTML = matches.map(m => \`
        <a href="#\${m.lessonId}" onclick="toggleModal('search-modal')" class="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-rose-50 dark:hover:bg-rose-950 flex items-center justify-between gap-2 border border-gray-100 dark:border-gray-700 transition">
          <div>
            <span class="font-bold text-gray-900 dark:text-white">\${m.text.slice(0, 60)}...</span>
            <span class="text-[10px] text-gray-400 block">\${m.lesson}</span>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 shrink-0">
            \${m.type}
          </span>
        </a>
      \`).join('');
    }
  </script>

</body>
</html>`;
}

// Build and write out to both files
const htmlContent = generateCompletePage();

const p1 = path.join(__dirname, '../courses/tiengnhat_8.html');
const p2 = path.join(__dirname, '../courses/japanese_8.html');

fs.writeFileSync(p1, htmlContent, 'utf8');
fs.writeFileSync(p2, htmlContent, 'utf8');

console.log('Successfully generated Tiếng Nhật 8 courses!');
console.log('Output 1:', p1, 'Size:', fs.statSync(p1).size, 'bytes');
console.log('Output 2:', p2, 'Size:', fs.statSync(p2).size, 'bytes');
