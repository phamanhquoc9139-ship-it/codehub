// build_tiengphap9_page.js
// Generator script for Tiếng Pháp 9 (SGK GDPT 2018: Unité 0 đến Unité 6)
// Generates: courses/tiengphap_9.html and courses/french_9.html (synchronized)

const fs = require('fs');
const path = require('path');

const { unitsData } = require('./tiengphap9_data.js');
const { getUnitSVG } = require('./tiengphap9_svgs.js');
const { examQuestions } = require('./tiengphap9_exam.js');

// Collect all vocabulary words across all units for Glossary Modal
const allVocabWords = [];
unitsData.forEach(u => {
  if (u.vocab) {
    u.vocab.forEach(v => {
      allVocabWords.push({
        ...v,
        unit: u.unitNum,
        unitTitle: u.title,
        badge: u.badge
      });
    });
  }
});

function renderVocabCard(v) {
  const safeFr = (v.fr || '').replace(/'/g, "\\'");
  const safeEx = (v.ex || '').replace(/'/g, "\\'");
  return `
    <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-2 shadow-sm hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-black text-slate-900 dark:text-white text-base tracking-tight">${v.fr}</span>
            <span class="text-[11px] px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold border border-blue-200/60 dark:border-blue-900">${v.pos}</span>
            <span class="text-xs font-mono text-slate-400 dark:text-slate-500">${v.ipa}</span>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">${v.vi}</p>
        </div>
        <button onclick="speakFrench('${safeFr}')" class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white flex items-center justify-center text-xs transition shrink-0 shadow-sm" title="Nghe phát âm chuẩn Pháp">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
      ${v.ex ? `
      <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs text-blue-700 dark:text-blue-300 font-medium italic">« ${v.ex} »</p>
          <button onclick="speakFrench('${safeEx}')" class="text-[11px] text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition" title="Nghe cả câu">
            <i class="fa-solid fa-play text-[10px]"></i>
          </button>
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${v.viEx || ''}</p>
      </div>` : ''}
    </div>
  `;
}

function renderDialogueCard(d) {
  return `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
      <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Hội thoại thực tế: ${d.speakerA} & ${d.speakerB}</span>
        </div>
      </div>
      <div class="space-y-2">
        ${d.lines.map(line => {
          const safeText = (line.fr || '').replace(/'/g, "\\'");
          return `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm">
              <span class="font-black text-blue-700 dark:text-blue-400 shrink-0 w-24">${line.speaker}:</span>
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="font-medium text-slate-900 dark:text-slate-100">« ${line.fr} »</span>
                  <button onclick="speakFrench('${safeText}')" class="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition" title="Nghe câu này">
                    <i class="fa-solid fa-volume-low text-[11px]"></i>
                  </button>
                </div>
                <span class="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">${line.vi}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderQuiz(unitId, quizList) {
  return `
    <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-200/70 dark:border-slate-700">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
            <i class="fa-solid fa-clipboard-check"></i>
          </div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Mini-Quiz Luyện Tập Nhanh (4 câu)</h4>
        </div>
        <span class="text-xs text-blue-600 dark:text-blue-400 font-semibold" id="${unitId}-quiz-score">Chưa làm</span>
      </div>

      <div class="space-y-4">
        ${quizList.map((q, qIdx) => `
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">${qIdx + 1}. ${q.q}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              ${q.options.map((opt, oIdx) => `
                <button onclick="checkUnitQuiz('${unitId}', ${qIdx}, ${oIdx}, ${q.ans}, this)" class="unit-quiz-btn-${unitId}-${qIdx} text-left px-3 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 transition flex items-center justify-between">
                  <span>${String.fromCharCode(65 + oIdx)}. ${opt}</span>
                  <i class="fa-regular fa-circle text-[10px] text-slate-400 check-icon"></i>
                </button>
              `).join('')}
            </div>
            <div id="${unitId}-exp-${qIdx}" class="hidden p-2.5 rounded-lg text-xs mt-2 font-medium"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderUnitSection(unit) {
  const mindmapSvg = getUnitSVG(unit.id);
  return `
    <section id="${unit.id}" class="unit-section scroll-mt-24 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      
      <!-- Unit Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              ${unit.unitNum} &bull; ${unit.badge}
            </span>
            <span class="text-xs text-slate-400 font-semibold">• SGK Tiếng Pháp 9</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>${unit.title}</span>
            <button onclick="speakFrench('${(unit.title || '').replace(/'/g, "\\'")}')" class="text-sm text-slate-400 hover:text-blue-600 transition" title="Nghe tiêu đề">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">${unit.vietTitle}</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open text-blue-500"></i> ${unit.vocab ? unit.vocab.length : 0} Từ vựng
          </span>
        </div>
      </div>

      <!-- Core Objective Banner -->
      <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-sky-50/80 dark:from-slate-800/80 dark:via-blue-950/30 dark:to-slate-800/80 border border-blue-100 dark:border-blue-900 flex items-start gap-3">
        <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">
          <i class="fa-solid fa-bullseye"></i>
        </div>
        <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong class="font-extrabold text-blue-900 dark:text-blue-300">Yêu cầu cần đạt:</strong> ${unit.target}
        </div>
      </div>

      <!-- Bespoke Vector SVG Infographic -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <i class="fa-solid fa-sitemap text-blue-500"></i> Sơ đồ Tư duy Trực quan (Concept Mindmap)
          </h3>
          <span class="text-[11px] text-slate-400">Vector SVG Responsive</span>
        </div>
        <div class="w-full overflow-hidden">
          ${mindmapSvg}
        </div>
      </div>

      <!-- Section 1: Vocabulaire -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-spell-check text-blue-600"></i> 1. Vocabulaire & Mots-clés (Từ vựng trọng tâm)
          </h3>
          <span class="text-xs text-slate-400">${unit.vocab ? unit.vocab.length : 0} thuật ngữ chuẩn</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${unit.vocab ? unit.vocab.map(v => renderVocabCard(v)).join('') : ''}
        </div>
      </div>

      <!-- Section 2: Actes de communication & Dialogues -->
      ${unit.dialogues && unit.dialogues.length > 0 ? `
      <div class="space-y-3">
        <h3 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <i class="fa-solid fa-comments text-emerald-600"></i> 2. Actes de communication (Tình huống giao tiếp)
        </h3>
        <div class="space-y-3">
          ${unit.dialogues.map(d => renderDialogueCard(d)).join('')}
        </div>
      </div>` : ''}

      <!-- Section 3: Grammaire & Règles -->
      ${unit.grammar ? `
      <div class="space-y-3">
        <h3 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-indigo-600"></i> 3. Grammaire & Précis grammatical (Ngữ pháp cốt lõi)
        </h3>
        <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/40 dark:bg-slate-800/60 border border-indigo-100 dark:border-indigo-900/60 space-y-4">
          <div class="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-extrabold text-sm sm:text-base">
            <i class="fa-solid fa-brain"></i>
            <span>${unit.grammar.title}</span>
          </div>
          
          <div class="space-y-3">
            ${unit.grammar.rules.map(r => `
              <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 space-y-1.5 shadow-sm">
                <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  ${r.name}
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400">${r.usage}</p>
                <div class="p-2 rounded-lg bg-indigo-50/80 dark:bg-slate-800 font-mono text-xs text-indigo-800 dark:text-indigo-300 font-bold">
                  ${r.formula}
                </div>
                <div class="space-y-1 pt-1">
                  ${r.examples.map(ex => `
                    <div class="flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
                      <span>&bull; ${ex}</span>
                      <button onclick="speakFrench('${ex.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 ml-2" title="Nghe ví dụ">
                        <i class="fa-solid fa-volume-low text-[10px]"></i>
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>

          ${unit.grammar.comparisonTable ? `
          <div class="overflow-x-auto pt-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-indigo-100/70 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200">
                  <th class="p-2 rounded-l-lg font-bold">Tiêu chí</th>
                  <th class="p-2 font-bold">Passé composé / Dạng 1</th>
                  <th class="p-2 ${unit.grammar.comparisonTable[0].extra ? '' : 'rounded-r-lg'} font-bold">Imparfait / Dạng 2</th>
                  ${unit.grammar.comparisonTable[0].extra ? '<th class="p-2 rounded-r-lg font-bold">Dạng 3 / Lưu ý</th>' : ''}
                </tr>
              </thead>
              <tbody class="divide-y divide-indigo-100 dark:divide-slate-800">
                ${unit.grammar.comparisonTable.map(row => `
                  <tr class="hover:bg-white/60 dark:hover:bg-slate-900/60 transition">
                    <td class="p-2 font-semibold text-slate-800 dark:text-slate-200">${row.criteria}</td>
                    <td class="p-2 text-slate-700 dark:text-slate-300">${row.passeCompose}</td>
                    <td class="p-2 text-slate-700 dark:text-slate-300">${row.imparfait}</td>
                    ${row.extra ? `<td class="p-2 text-slate-700 dark:text-slate-300">${row.extra}</td>` : ''}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>` : ''}
        </div>
      </div>` : ''}

      <!-- Section 4: Phonétique -->
      ${unit.phonetics ? `
      <div class="space-y-3">
        <h3 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <i class="fa-solid fa-microphone-lines text-sky-600"></i> 4. Phonétique & Prononciation (Ngữ âm & Phát âm)
        </h3>
        <div class="p-4 rounded-2xl bg-sky-50/40 dark:bg-slate-800/50 border border-sky-100 dark:border-sky-900/60 space-y-2.5">
          <div class="font-bold text-xs sm:text-sm text-sky-900 dark:text-sky-300">${unit.phonetics.title}</div>
          <p class="text-xs text-slate-600 dark:text-slate-300">${unit.phonetics.content}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            ${unit.phonetics.examples.map(pe => `
              <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-sky-700 dark:text-sky-400 font-mono">${pe.sound}</span>
                  <p class="text-xs text-slate-700 dark:text-slate-300">${pe.words}</p>
                </div>
                <button onclick="speakFrench('${pe.words.replace(/'/g, "\\'")}')" class="w-7 h-7 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 hover:bg-sky-600 hover:text-white flex items-center justify-center text-xs transition" title="Nghe âm mẫu">
                  <i class="fa-solid fa-volume-high"></i>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>` : ''}

      <!-- Section 5: Culture & Projet -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        ${unit.culture ? `
        <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-800/50 border border-amber-200/70 dark:border-amber-900/60 space-y-2">
          <div class="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
            <i class="fa-solid fa-earth-europe text-amber-600"></i> Văn hóa & Xã hội Pháp: ${unit.culture.title}
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${unit.culture.desc}</p>
        </div>` : ''}

        ${unit.project ? `
        <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-800/50 border border-rose-200/70 dark:border-rose-900/60 space-y-2">
          <div class="flex items-center gap-2 text-rose-900 dark:text-rose-300 font-bold text-xs uppercase tracking-wider">
            <i class="fa-solid fa-puzzle-piece text-rose-600"></i> Dự án học tập: ${unit.project.title}
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${unit.project.desc}</p>
        </div>` : ''}
      </div>

      <!-- Section 6: Mini-Quiz -->
      ${unit.quiz && unit.quiz.length > 0 ? renderQuiz(unit.id, unit.quiz) : ''}

    </section>
  `;
}

// Assemble full HTML document
const fullHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Pháp 9 (Unité 0 đến Unité 6 &bull; SGK GDPT 2018 &bull; CodeHub)</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            blue: {
              850: '#172554',
            }
          }
        }
      }
    }
  </script>

  <!-- Font Awesome Free 6.5.1 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(37, 99, 235, 0.3);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(37, 99, 235, 0.6);
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 group">
          <div class="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-lg font-black group-hover:scale-105 transition shadow-sm border border-blue-200 dark:border-blue-900">
            <i class="fa-solid fa-flag text-blue-600 dark:text-blue-400"></i>
          </div>
          <div>
            <span class="text-xs uppercase tracking-widest font-extrabold text-blue-700 dark:text-blue-400 block leading-tight">CodeHub Academy</span>
            <span class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">Tiếng Pháp 9</span>
          </div>
        </a>
        <span class="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
          SGK GDPT 2018 &bull; Unité 0 - Unité 6
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Search trigger -->
        <button onclick="openSearchModal()" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
          <span class="hidden sm:inline">Tra cứu từ vựng</span>
        </button>

        <!-- Grammar Modal trigger -->
        <button onclick="openGrammarModal()" class="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 text-xs font-bold transition flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300">
          <i class="fa-solid fa-book text-indigo-500"></i>
          <span class="hidden md:inline">Sổ tay ngữ pháp</span>
        </button>

        <!-- Communication Modal trigger -->
        <button onclick="openVerbsModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 text-xs font-bold transition flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
          <i class="fa-solid fa-comments text-emerald-500"></i>
          <span class="hidden lg:inline">Mẫu giao tiếp</span>
        </button>

        <!-- Exam Modal trigger -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5">
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
  <section class="relative bg-gradient-to-b from-blue-600/10 via-indigo-500/5 to-transparent border-b border-slate-200/80 dark:border-slate-800/80 pt-8 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
        <a href="../index.html" class="hover:text-blue-600 transition flex items-center gap-1">
          <i class="fa-solid fa-house"></i>
          <span>Học liệu điện tử</span>
        </a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span>Khối Lớp 9</span>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span class="font-bold text-blue-700 dark:text-blue-300">Tiếng Pháp 9 (Unité 0 &bull; Unité 1 - 6)</span>
      </nav>

      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-2 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <i class="fa-solid fa-certificate text-blue-600"></i> CHƯƠNG TRÌNH NGOẠI NGỮ THCS &bull; GDPT 2018
          </div>
          <h1 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Khóa Học Toàn Diện Tiếng Pháp 9
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hệ thống hóa toàn bộ kiến thức Unité 0 đến Unité 6 theo chuẩn SGK Tiếng Pháp 9: phát triển 4 kỹ năng Nghe &bull; Nói &bull; Đọc &bull; Viết. Tích hợp âm thanh phát âm chuẩn Pháp (Web Speech API <code>fr-FR</code>), 7 Sơ đồ tư duy Vector SVG, Sổ tay tra cứu 13 chuyên đề ngữ pháp và Đấu trường Trạng Nguyên 60:00.
          </p>
        </div>

        <!-- Stat Badges Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto shrink-0">
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span class="block text-xl font-black text-blue-600 dark:text-blue-400">7</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Unités (0 - 6)</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span class="block text-xl font-black text-emerald-600 dark:text-emerald-400">7</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sơ đồ Vector</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span class="block text-xl font-black text-indigo-600 dark:text-indigo-400">13</span>
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
            <i class="fa-solid fa-list-check text-blue-600"></i>
            <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">Mục Lục Bài Học</h3>
          </div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">7 Đơn vị</span>
        </div>

        <!-- Quick filter in sidebar -->
        <div class="relative">
          <input type="text" id="sidebarSearch" onkeyup="filterSidebar()" placeholder="Tìm nhanh Unité..." class="w-full text-xs pl-8 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-slate-200">
          <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-xs text-slate-400"></i>
        </div>

        <nav class="space-y-1.5" id="sidebarNav">
          ${unitsData.map((u, i) => `
            <a href="#${u.id}" class="sidebar-link flex items-center justify-between p-2.5 rounded-2xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800/80 transition group border border-transparent hover:border-blue-100 dark:hover:border-slate-700">
              <div class="flex items-center gap-2 truncate">
                <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center text-[10px] font-black shrink-0 transition">
                  ${i === 0 ? '0' : i}
                </span>
                <span class="truncate">${u.title}</span>
              </div>
              <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 text-blue-500 transition"></i>
            </a>
          `).join('')}
        </nav>

        <!-- Quick Links in Sidebar -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
          <button onclick="openGrammarModal()" class="w-full py-2 px-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 dark:hover:bg-indigo-950/80 transition flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-book"></i> Sổ tay 13 quy tắc</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </button>
          <button onclick="openProjectsModal()" class="w-full py-2 px-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-bold hover:bg-purple-100 dark:hover:bg-purple-950/80 transition flex items-center justify-between">
            <span class="flex items-center gap-2"><i class="fa-solid fa-tasks"></i> Kỹ năng &amp; Dự án</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </button>
          <button onclick="openExamModal()" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 text-white font-black text-xs text-center shadow transition active:scale-95 flex items-center justify-center gap-2">
            <i class="fa-solid fa-crown text-amber-200"></i> Đấu Trường Trạng Nguyên
          </button>
        </div>

      </aside>

      <!-- UNITS ARTICLES (Col 9) -->
      <div class="lg:col-span-9 space-y-8">
        ${unitsData.map(u => renderUnitSection(u)).join('')}
      </div>

    </div>
  </main>

  <!-- ==================== MODAL 1: SEARCH & GLOSSARY ==================== -->
  <div id="searchModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Tra Cứu Từ Vựng &amp; Thuật Ngữ Tiếng Pháp 9</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Tổng hợp ${allVocabWords.length} từ vựng chuẩn SGK kèm Audio giọng Pháp</p>
          </div>
        </div>
        <button onclick="closeSearchModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div class="relative">
          <input type="text" id="glossarySearchInput" onkeyup="filterGlossary()" placeholder="Gõ từ tiếng Pháp, nghĩa tiếng Việt, hoặc Unité..." class="w-full text-sm pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-slate-100">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400"></i>
        </div>
      </div>

      <div class="p-4 overflow-y-auto custom-scrollbar flex-1 space-y-2.5" id="glossaryListContainer">
        ${allVocabWords.map(v => {
          const safeFr = (v.fr || '').replace(/'/g, "\\'");
          return `
            <div class="glossary-item p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-3" data-search="${(v.fr + ' ' + v.vi + ' ' + v.unit).toLowerCase()}">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-black text-sm text-slate-900 dark:text-white">${v.fr}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">${v.pos}</span>
                  <span class="text-xs font-mono text-slate-400">${v.ipa}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold">${v.unit}</span>
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 mt-1">${v.vi}</p>
                ${v.ex ? `<p class="text-[11px] text-blue-600 dark:text-blue-400 italic mt-0.5">« ${v.ex} » - ${v.viEx || ''}</p>` : ''}
              </div>
              <button onclick="speakFrench('${safeFr}')" class="w-8 h-8 rounded-xl bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 hover:bg-blue-600 hover:text-white flex items-center justify-center text-xs shrink-0 shadow-sm transition">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right">
        <button onclick="closeSearchModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition">
          Đóng cửa sổ
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: PRÉCIS GRAMMATICAL (13 RULES) ==================== -->
  <div id="grammarModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
      
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-book-open"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Bảng Tra Cứu Nhanh Ngữ Pháp &amp; Chức Năng (13 Điểm Cốt Lõi)</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Trích xuất trực tiếp từ Phụ lục Précis grammatical SGK Tiếng Pháp 9</p>
          </div>
        </div>
        <button onclick="closeGrammarModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar flex-1">
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="bg-indigo-50 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border-b border-indigo-200 dark:border-indigo-900">
                <th class="p-3 rounded-l-xl font-bold">Nội dung / Điểm ngữ pháp</th>
                <th class="p-3 font-bold">Dùng để</th>
                <th class="p-3 rounded-r-xl font-bold">Công thức / Quy tắc ghi nhớ &amp; Ví dụ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-blue-700 dark:text-blue-400">pour / afin de</td>
                <td class="p-3">Nêu mục đích (cùng chủ ngữ)</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">pour/afin de + infinitif &bull; <em>Elle étudie pour soigner les gens.</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-blue-700 dark:text-blue-400">depuis</td>
                <td class="p-3">Hành động bắt đầu trước đây và còn tiếp tục đến hiện tại</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">depuis + mốc/khoảng thời gian &bull; <em>Depuis 2020, il étudie...</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-blue-700 dark:text-blue-400">pendant</td>
                <td class="p-3">Thời lượng có giới hạn, đã hoàn thành</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">pendant + khoảng thời gian &bull; <em>Elle a travaillé pendant 2 heures.</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-blue-700 dark:text-blue-400">il y a</td>
                <td class="p-3">Mốc thời điểm cách hiện tại trong quá khứ</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">il y a + khoảng thời gian &bull; <em>J’ai lu cette histoire il y a 2 jours.</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-indigo-700 dark:text-indigo-400">Conditionnel présent</td>
                <td class="p-3">Lịch sự, mong muốn, lời khuyên, khả năng hoặc giả định tương lai</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">Gốc futur + -ais, -ais, -ait, -ions, -iez, -aient &bull; <em>Je voudrais... / Tu devrais...</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-indigo-700 dark:text-indigo-400">Đại từ Y (bổ nghĩa à)</td>
                <td class="p-3">Thay tên sự vật đi với 'à'; hoặc nơi chốn đi với 'à, au, en, dans'</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">Đại từ đặt trước động từ chia &bull; <em>Nous y pensons. / J’y vais.</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-indigo-700 dark:text-indigo-400">Đại từ EN (bổ nghĩa de)</td>
                <td class="p-3">Thay tên sự vật đi với 'de'; hoặc nơi chốn xuất phát đi với 'de'</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">Đại từ đặt trước động từ chia &bull; <em>Elle en parle. / J’en reviens.</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-amber-700 dark:text-amber-400">-able / -ible</td>
                <td class="p-3">Tạo tính từ chỉ khả năng, tính chất có thể làm được</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">Hòa hợp giống/số &bull; <em>lire &rarr; lisible; admirer &rarr; admirable</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-amber-700 dark:text-amber-400">in- / im-</td>
                <td class="p-3">Tạo nghĩa phủ định ở một số tính từ (im- trước p, b, m)</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300"><em>possible &rarr; impossible; patient &rarr; impatient; connu &rarr; inconnu</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-rose-700 dark:text-rose-400">Câu cảm thán (!)</td>
                <td class="p-3">Bộc lộ cảm xúc khen ngợi, ngạc nhiên, thán phục</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">Comme... ! / Que... ! / Quel(le)(s)... ! &bull; <em>Quel voyage magnifique !</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-purple-700 dark:text-purple-400">Vô nhân xưng khuyến nghị</td>
                <td class="p-3">Nêu lời khuyên, cảnh báo, quy tắc ứng xử chung</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">Il est recommandé/important/interdit de + infinitif &bull; <em>Il faut...</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-purple-700 dark:text-purple-400">Đại từ sở hữu</td>
                <td class="p-3">Thay danh từ đã biết, chỉ quyền sở hữu, hòa hợp vật sở hữu</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">le/la/les + mien, tien, sien, nôtre, vôtre, leur &bull; <em>C'est le mien.</em></td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-emerald-700 dark:text-emerald-400">Từ nối logic</td>
                <td class="p-3">Liên kết trình tự thời gian và giải thích nguyên nhân</td>
                <td class="p-3 font-mono text-slate-700 dark:text-slate-300">et, d’abord, ensuite, alors, parce que &bull; <em>D'abord... Ensuite... Enfin...</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right">
        <button onclick="closeGrammarModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition">
          Đóng lại
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: ACTES DE COMMUNICATION (MẪU GIAO TIẾP XUYÊN SUỐT) ==================== -->
  <div id="verbsModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-comments"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Mẫu Ngôn Ngữ &amp; Diễn Đạt Dùng Xuyên Suốt (Section 11)</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Các mẫu câu nêu ý kiến, sắp xếp bài nói/viết và hỏi - đáp làm rõ thông tin</p>
          </div>
        </div>
        <button onclick="closeVerbsModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-4">
        
        <!-- Nhóm 1: Nêu ý kiến & giải thích -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
          <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-blue-700 dark:text-blue-400">
            <i class="fa-solid fa-lightbulb"></i> 1. Nêu ý kiến và giải thích nguyên nhân
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">À mon avis...</span>
                <p class="text-slate-500">Theo ý kiến của tôi...</p>
              </div>
              <button onclick="speakFrench('À mon avis...')" class="text-slate-400 hover:text-blue-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">Je pense que...</span>
                <p class="text-slate-500">Tôi nghĩ rằng...</p>
              </div>
              <button onclick="speakFrench('Je pense que...')" class="text-slate-400 hover:text-blue-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">Je trouve que...</span>
                <p class="text-slate-500">Tôi thấy rằng / nhận thấy...</p>
              </div>
              <button onclick="speakFrench('Je trouve que...')" class="text-slate-400 hover:text-blue-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">J'aime... parce que...</span>
                <p class="text-slate-500">Tôi thích... bởi vì...</p>
              </div>
              <button onclick="speakFrench('J\\'aime parce que')" class="text-slate-400 hover:text-blue-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
          </div>
        </div>

        <!-- Nhóm 2: Sắp xếp bài nói/viết -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
          <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <i class="fa-solid fa-arrow-down-1-9"></i> 2. Sắp xếp thứ tự bài nói / bài viết
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="font-bold text-slate-900 dark:text-white">D'abord...</span>
              <p class="text-slate-500">Trước hết, đầu tiên...</p>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="font-bold text-slate-900 dark:text-white">Ensuite...</span>
              <p class="text-slate-500">Tiếp theo, kế đó...</p>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span class="font-bold text-slate-900 dark:text-white">Enfin...</span>
              <p class="text-slate-500">Cuối cùng...</p>
            </div>
          </div>
        </div>

        <!-- Nhóm 3: Hỏi lại và đáp lại -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
          <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-purple-700 dark:text-purple-400">
            <i class="fa-solid fa-circle-question"></i> 3. Hỏi lại, làm rõ và đáp lại sự giúp đỡ
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">Tu peux préciser ?</span>
                <p class="text-slate-500">Bạn có thể nói rõ hơn không?</p>
              </div>
              <button onclick="speakFrench('Tu peux préciser ?')" class="text-slate-400 hover:text-purple-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">Qu’est-ce que tu veux dire ?</span>
                <p class="text-slate-500">Ý bạn muốn nói là gì?</p>
              </div>
              <button onclick="speakFrench('Qu’est-ce que tu veux dire ?')" class="text-slate-400 hover:text-purple-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">C’est-à-dire que...</span>
                <p class="text-slate-500">Tức là / Ý là vì...</p>
              </div>
              <button onclick="speakFrench('C’est-à-dire que...')" class="text-slate-400 hover:text-purple-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 dark:text-white">Bien sûr / Avec plaisir !</span>
                <p class="text-slate-500">Tất nhiên rồi / Rất sẵn lòng!</p>
              </div>
              <button onclick="speakFrench('Bien sûr, avec plaisir !')" class="text-slate-400 hover:text-purple-600"><i class="fa-solid fa-volume-high"></i></button>
            </div>
          </div>
        </div>

      </div>

      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right">
        <button onclick="closeVerbsModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition">
          Đóng lại
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 4: PROJECTS & EVALUATION TABLE ==================== -->
  <div id="projectsModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Bảng Kỹ Năng, Sản Phẩm &amp; Tự Đánh Giá (Section 10)</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Mục tiêu đầu ra và nhiệm vụ tiêu biểu theo từng Unité</p>
          </div>
        </div>
        <button onclick="closeProjectsModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar flex-1">
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="bg-purple-50 dark:bg-purple-950/80 text-purple-900 dark:text-purple-300 border-b border-purple-200 dark:border-purple-900">
                <th class="p-3 rounded-l-xl font-bold">Đơn vị</th>
                <th class="p-3 font-bold">Năng lực đạt được sau bài học</th>
                <th class="p-3 rounded-r-xl font-bold">Sản phẩm / Nhiệm vụ tiêu biểu</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-blue-600 dark:text-blue-400">Unité 0</td>
                <td class="p-3">Kể lại hoạt động và cảm nhận trong kỳ nghỉ; nhận biết thì quá khứ và các âm đã học</td>
                <td class="p-3 font-semibold text-slate-700 dark:text-slate-300">Hỏi – đáp về kỳ nghỉ hè</td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-sky-600 dark:text-sky-400">Unité 1</td>
                <td class="p-3">Kể thay đổi trong sự nghiệp; nêu mục đích hành động; giới thiệu tiểu sử nhà khoa học</td>
                <td class="p-3 font-semibold text-slate-700 dark:text-slate-300">Phiếu thông tin (Fiche signalétique) &amp; thuyết trình</td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">Unité 2</td>
                <td class="p-3">Nói về môn thể thao, phẩm chất, luật chơi; đề nghị và đáp lại sự giúp đỡ bằng Conditionnel</td>
                <td class="p-3 font-semibold text-slate-700 dark:text-slate-300">Áp phích Ngày hội thể thao (Affiche sportive)</td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-amber-600 dark:text-amber-400">Unité 3</td>
                <td class="p-3">Hỏi/chỉ đường, mua vé tàu tại quầy; kể chuyến đi và biểu đạt cảm xúc cảm thán</td>
                <td class="p-3 font-semibold text-slate-700 dark:text-slate-300">Kế hoạch chuyến đi (Carnet de voyage)</td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-rose-600 dark:text-rose-400">Unité 4</td>
                <td class="p-3">Bày tỏ cảm xúc/đánh giá; nói về phim và các vai trò trong đoàn làm phim</td>
                <td class="p-3 font-semibold text-slate-700 dark:text-slate-300">Chân dung nhân vật phim (Portrait de personnage)</td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-purple-600 dark:text-purple-400">Unité 5</td>
                <td class="p-3">Nêu nhận xét, khuyến nghị/cảnh báo vô nhân xưng; hình dung Internet trong tương lai</td>
                <td class="p-3 font-semibold text-slate-700 dark:text-slate-300">Tờ gấp Internet an toàn (Dépliant de sécurité)</td>
              </tr>
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">Unité 6</td>
                <td class="p-3">Hỏi thông tin, yêu cầu giải thích làm rõ; thảo luận mạng xã hội; dùng đại từ sở hữu</td>
                <td class="p-3 font-semibold text-slate-700 dark:text-slate-300">Bộ 10 quy tắc vàng (10 règles d'or) trên mạng xã hội</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right">
        <button onclick="closeProjectsModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition">
          Đóng lại
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 5: ĐẤU TRƯỜNG TRẠNG NGUYÊN (60:00 TIMER) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-5 bg-gradient-to-r from-amber-500 via-rose-600 to-indigo-700 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
            <i class="fa-solid fa-crown text-amber-300"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Tiếng Pháp 9</h3>
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
        <div id="examScoreBanner" class="hidden p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-indigo-500/10 border-2 border-amber-400 dark:border-amber-600 text-center space-y-2">
          <div class="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl mx-auto shadow-md">
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
                  <label class="exam-option-label-${idx} flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 transition cursor-pointer text-xs font-medium">
                    <input type="radio" name="exam_q_${idx}" value="${oIdx}" class="text-blue-600 focus:ring-blue-500">
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
          <button onclick="submitExam()" id="btnSubmitExam" class="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs shadow-md active:scale-95 transition">
            Nộp Bài Thi
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">Khóa Học Tiếng Pháp 9 &bull; Nền Tảng Học Liệu Điện Tử CodeHub</p>
      <p>Biên soạn đối chiếu chuẩn SGK Tiếng Pháp 9 (Ngoại ngữ THCS - GDPT 2018). Tích hợp phát âm Web Speech API, Bản vẽ Vector SVG độc quyền và Đấu trường Trạng Nguyên.</p>
    </div>
  </footer>

  <!-- ==================== CORE JAVASCRIPT ==================== -->
  <script>
    // 1. Audio Speech Synthesis (French standard: fr-FR)
    function speakFrench(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.9;
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
    function openSearchModal() { document.getElementById('searchModal').classList.remove('hidden'); }
    function closeSearchModal() { document.getElementById('searchModal').classList.add('hidden'); }

    function openGrammarModal() { document.getElementById('grammarModal').classList.remove('hidden'); }
    function closeGrammarModal() { document.getElementById('grammarModal').classList.add('hidden'); }

    function openVerbsModal() { document.getElementById('verbsModal').classList.remove('hidden'); }
    function closeVerbsModal() { document.getElementById('verbsModal').classList.add('hidden'); }

    function openProjectsModal() { document.getElementById('projectsModal').classList.remove('hidden'); }
    function closeProjectsModal() { document.getElementById('projectsModal').classList.add('hidden'); }

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
    const unitQuizState = {};
    function checkUnitQuiz(unitId, qIdx, selectedOpt, correctOpt, btnElem) {
      const allBtns = document.querySelectorAll('.unit-quiz-btn-' + unitId + '-' + qIdx);
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-slate-800');
      });

      const expBox = document.getElementById(unitId + '-exp-' + qIdx);
      expBox.classList.remove('hidden');

      if (!unitQuizState[unitId]) unitQuizState[unitId] = { correct: 0, totalAnswered: 0 };
      unitQuizState[unitId].totalAnswered++;

      if (selectedOpt === correctOpt) {
        btnElem.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        btnElem.querySelector('.check-icon').className = 'fa-solid fa-circle-check text-emerald-600';
        expBox.className = 'p-2.5 rounded-lg text-xs mt-2 font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
        expBox.innerHTML = '<strong class="font-bold"><i class="fa-solid fa-check mr-1"></i> Chính xác!</strong> Très bien ! Em đã chọn đúng.';
        unitQuizState[unitId].correct++;
      } else {
        btnElem.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-700', 'dark:bg-rose-950/40', 'dark:text-rose-300');
        btnElem.querySelector('.check-icon').className = 'fa-solid fa-circle-xmark text-rose-600';
        expBox.className = 'p-2.5 rounded-lg text-xs mt-2 font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        expBox.innerHTML = '<strong class="font-bold"><i class="fa-solid fa-xmark mr-1"></i> Chưa đúng!</strong> Đáp án đúng là đáp án ' + String.fromCharCode(65 + correctOpt) + '.';
        
        // Highlight correct button
        if (allBtns[correctOpt]) {
          allBtns[correctOpt].classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
          allBtns[correctOpt].querySelector('.check-icon').className = 'fa-solid fa-circle-check text-emerald-600';
        }
      }

      const scoreBadge = document.getElementById(unitId + '-quiz-score');
      if (scoreBadge) {
        scoreBadge.textContent = 'Đã làm: ' + unitQuizState[unitId].correct + '/4 đúng';
      }
    }

    // 7. Exam Master & 60:00 Countdown Logic
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let examTimeSeconds = 3600; // 60 minutes
    let examInterval = null;
    let examSubmitted = false;

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      if (!examInterval && !examSubmitted) {
        startExamTimer();
      }
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
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
          expBox.innerHTML = '<strong class="font-bold text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong> ' + eq.explain;
        } else {
          expBox.className = 'p-3 rounded-xl text-xs mt-2 border bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-500';
          expBox.innerHTML = '<strong class="font-bold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa đúng!</strong> Đáp án đúng là <em>' + String.fromCharCode(65 + eq.answer) + '. ' + eq.options[eq.answer] + '</em>. ' + eq.explain;
        }
      });

      const banner = document.getElementById('examScoreBanner');
      const scoreText = document.getElementById('examScoreText');
      const feedbackText = document.getElementById('examFeedbackText');
      banner.classList.remove('hidden');

      scoreText.textContent = score + ' / 25 Điểm';
      const pct = Math.round((score / 25) * 100);
      if (pct >= 90) {
        feedbackText.textContent = 'Félicitations ! Xuất sắc! Em đạt danh hiệu Trạng Nguyên Tiếng Pháp 9 với năng lực ngữ pháp và giao tiếp toàn diện!';
      } else if (pct >= 70) {
        feedbackText.textContent = 'Très bien ! Em nắm rất vững các chuyên đề ngữ pháp và từ vựng cốt lõi của SGK Tiếng Pháp 9.';
      } else {
        feedbackText.textContent = 'Em hãy rà soát lại các bài học, tham khảo Sổ tay ngữ pháp và luyện tập thêm nhé!';
      }

      document.getElementById('btnSubmitExam').disabled = true;
      document.getElementById('btnSubmitExam').classList.add('opacity-50', 'cursor-not-allowed');
      banner.scrollIntoView({ behavior: 'smooth' });
    }
  </script>
</body>
</html>
`;

// Output files
const outTiengphap9 = path.resolve(__dirname, '../courses/tiengphap_9.html');
fs.writeFileSync(outTiengphap9, fullHtml, 'utf8');
console.log('Saved tiengphap_9.html, size:', fullHtml.length);

const outFrench9 = path.resolve(__dirname, '../courses/french_9.html');
fs.writeFileSync(outFrench9, fullHtml, 'utf8');
console.log('Saved french_9.html, size:', fullHtml.length);
