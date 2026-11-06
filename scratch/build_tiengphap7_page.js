// Generator script for Tiếng Pháp 7 (Kết nối tri thức với cuộc sống - GDPT 2018)
const fs = require('fs');

const { unitesPart1 } = require('./tiengphap7_data_p1.js');
const { unitesPart2, grammarMatrix, conjugationMatrix, projectsList } = require('./tiengphap7_data_p2.js');
const { examQuestions } = require('./tiengphap7_exam.js');

const allUnites = [...unitesPart1, ...unitesPart2];

function renderVocabItem(v) {
  const safeFr = (v.fr || '').replace(/'/g, "\\'");
  return `
    <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 flex flex-col justify-between gap-2 shadow-sm hover:shadow transition">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-extrabold text-gray-900 dark:text-white text-sm sm:text-base">${v.fr}</span>
            <span class="text-[11px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 font-mono font-medium">${v.ipa}</span>
            <span class="text-[10px] px-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 italic">${v.type || 'n.'}</span>
          </div>
          <div class="text-xs text-blue-700 dark:text-blue-300 font-semibold mt-1">${v.vn}</div>
        </div>
        <button onclick="speakFrench('${safeFr}')" title="Écouter la prononciation (fr-FR)" class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm">
          <i class="fa-solid fa-volume-high text-xs"></i>
        </button>
      </div>
    </div>
  `;
}

function renderUniteHTML(unite, index) {
  const uniteId = unite.id;
  const isSem1 = unite.uniteNum <= 3;

  return `
    <section id="${uniteId}" data-sem="${isSem1 ? '1' : '2'}" class="lesson-section scroll-mt-20 rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-850 border-2 border-blue-100 dark:border-gray-800 shadow-lg space-y-6">
      
      <!-- Unité Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div class="flex items-center gap-3">
          <span class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white font-black text-xs uppercase tracking-wider shadow flex items-center gap-1.5">
            <i class="fa-solid fa-graduation-cap"></i> UNITÉ ${unite.uniteNum}
          </span>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span>${unite.title}</span>
              <button onclick="speakFrench('${unite.title.replace(/'/g, "\\'")}')" title="Écouter le titre" class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center text-xs transition cursor-pointer">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
              ${unite.subtitle} &bull; <span class="text-blue-600 dark:text-blue-400 font-semibold">${unite.theme}</span>
            </p>
          </div>
        </div>
        <div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
            ${unite.badge}
          </span>
        </div>
      </div>

      <!-- Objectif / Mục tiêu năng lực -->
      <div class="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2.5">
        <i class="fa-solid fa-bullseye text-blue-600 dark:text-blue-400 text-base mt-0.5 shrink-0"></i>
        <div>
          <strong class="text-blue-800 dark:text-blue-300">Mục tiêu giao tiếp cốt lõi:</strong> ${unite.goal}
        </div>
      </div>

      <!-- Section 1: Danh sách các Leçon & Từ vựng -->
      <div class="space-y-4">
        <h3 class="text-sm sm:text-base font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-book-open"></i> 1. Vocabulaire &amp; Les Leçons (Từ vựng &amp; Bài học)
        </h3>
        
        <div class="space-y-4">
          ${unite.lecons.map(lecon => `
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/80 dark:border-gray-700/80 pb-2">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    L${lecon.num}
                  </span>
                  <span class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">${lecon.title}</span>
                </div>
                <span class="text-[11px] text-gray-500 dark:text-gray-400 italic">${lecon.focus}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                ${lecon.vocab.map(v => renderVocabItem(v)).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 2: Ngữ pháp trọng tâm (Grammaire) -->
      <div class="space-y-3">
        <h3 class="text-sm sm:text-base font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2 uppercase tracking-wide">
          <i class="fa-solid fa-shapes"></i> 2. Grammaire — Ngữ pháp trọng tâm bài học
        </h3>
        <div class="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              <i class="fa-solid fa-feather-pointed"></i>
            </span>
            <h4 class="font-bold text-sm text-gray-900 dark:text-white">${unite.grammar.title}</h4>
          </div>
          
          <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 font-mono text-xs text-blue-900 dark:text-blue-200 font-bold whitespace-pre-line">
            ${unite.grammar.formula}
          </div>

          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            ${unite.grammar.usage}
          </p>

          <div class="space-y-1.5 pt-1">
            <span class="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Ví dụ thực tế song ngữ:</span>
            ${(unite.grammar.examples || []).map(ex => {
              const safeEx = ex.replace(/'/g, "\\'");
              return `
                <div class="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 text-xs text-gray-800 dark:text-gray-200 flex items-start justify-between gap-2">
                  <div class="flex items-start gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500 mt-1 text-[10px]"></i>
                    <span class="font-medium">${ex}</span>
                  </div>
                  <button onclick="speakFrench('${safeEx}')" class="text-gray-400 hover:text-blue-600 shrink-0 cursor-pointer" title="Écouter l'exemple">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Section 3: Hội thoại & Văn hóa (Communication & Culture) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Communication -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2.5 shadow-sm">
          <h4 class="font-bold text-xs uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
            <i class="fa-solid fa-comments"></i> 3. Communication &amp; Dialogue (Hội thoại mẫu)
          </h4>
          <p class="text-xs text-gray-500 dark:text-gray-400 italic">${unite.dialogue.situation}</p>
          <div class="p-3 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-xs text-gray-800 dark:text-gray-200 space-y-2">
            ${unite.dialogue.lines.map(l => {
              const safeText = l.text.replace(/'/g, "\\'");
              return `
                <div class="flex items-start justify-between gap-1.5">
                  <div>
                    <strong class="text-blue-700 dark:text-blue-300">${l.spk} :</strong>
                    <span>${l.text}</span>
                  </div>
                  <button onclick="speakFrench('${safeText}')" class="text-gray-400 hover:text-blue-600 shrink-0 cursor-pointer" title="Écouter la réplique">
                    <i class="fa-solid fa-volume-high text-[11px]"></i>
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Culture & Projet -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3 shadow-sm">
          <div>
            <h4 class="font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-1.5">
              <i class="fa-solid fa-earth-europe"></i> 4. Culture &amp; Francophonie
            </h4>
            <div class="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              ${unite.culture}
            </div>
          </div>

          ${unite.projet ? `
            <div>
              <h4 class="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1.5">
                <i class="fa-solid fa-palette"></i> 5. Projet créatif (Dự án thực hành)
              </h4>
              <div class="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200">
                ${unite.projet}
              </div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Section 4: Mini-Quiz -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
        <h4 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-blue-600"></i> 6. Auto-évaluation — Mini-Quiz (${unite.title})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${(unite.quiz || []).map((qItem, qIdx) => `
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                <strong>Question ${qIdx + 1} :</strong> ${qItem.q}
              </p>
              <div class="space-y-1.5">
                ${qItem.options.map((opt, optIdx) => `
                  <button onclick="checkAnswer('${uniteId}', ${qIdx}, ${optIdx}, ${qItem.a}, this)"
                          class="quiz-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 transition cursor-pointer">
                    <span class="font-bold text-gray-400">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
                  </button>
                `).join('')}
              </div>
              <div id="quiz-fb-${uniteId}-${qIdx}" class="hidden p-3 rounded-xl text-xs leading-relaxed"></div>
            </div>
          `).join('')}
        </div>
      </div>

    </section>
  `;
}

// Generate the whole HTML file
const fullHTML = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Pháp 7 - Français 7 | Nền Tảng Học Số CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
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
            france: {
              blue: '#002654',
              white: '#FFFFFF',
              red: '#CE1126'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
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
    .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(37, 99, 235, 0.3); border-radius: 9999px; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(96, 165, 250, 0.4); }
  </style>
</head>

<body class="bg-blue-50/30 dark:bg-gray-950 text-slate-800 antialiased font-sans transition-colors duration-300 min-h-screen flex flex-col">

  <!-- ==================== HEADER / NAVBAR ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-blue-100 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Back & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center justify-center transition cursor-pointer shadow-sm" title="Quay lại Trang Chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-700 to-rose-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20">
            FR
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-sm sm:text-base font-black tracking-tight text-gray-900 dark:text-white">TIẾNG PHÁP 7</h1>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">Kết Nối Tri Thức</span>
            </div>
            <p class="text-[11px] text-gray-500 dark:text-gray-400 hidden sm:block">Unité 0 – 6 &bull; 24 Leçons &bull; Futur simple &amp; Imparfait &bull; GDPT 2018</p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Audio Studio Modal Button -->
        <button onclick="openAudioModal()" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center gap-1.5 transition border border-blue-200 dark:border-blue-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-headphones"></i>
          <span class="hidden md:inline">Phonétique Studio</span>
        </button>

        <!-- Conjugation Handbook Button -->
        <button onclick="openConjugationModal()" class="px-3 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center gap-1.5 transition border border-indigo-200 dark:border-indigo-800 cursor-pointer shadow-sm">
          <i class="fa-solid fa-book"></i>
          <span class="hidden md:inline">Sổ Tay Chia Động Từ</span>
        </button>

        <!-- Exam Modal Button -->
        <button onclick="openExamModal()" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-600 hover:from-blue-600 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-blue-600/20 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Le Lauréat (60:00)</span>
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
            <input type="text" id="lessonSearchInput" onkeyup="filterLessons()" placeholder="Tìm bài học, futur simple, musique, mode..."
                   class="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1.5 pt-1">
            <div class="flex items-center justify-between text-[11px] font-bold text-gray-500 dark:text-gray-400">
              <span>Tiến độ học tập</span>
              <span id="progressText">0 / 7 đơn vị bài</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
          </div>

          <!-- Semester Filter Chips -->
          <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1.5">
            <div class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Lọc theo Học kỳ</div>
            <div class="grid grid-cols-2 gap-1.5">
              <button onclick="filterBySem('all')" class="sem-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-blue-600 text-white text-center transition cursor-pointer" data-sem-btn="all">
                Tất cả (7 Unités)
              </button>
              <button onclick="filterBySem('1')" class="sem-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer" data-sem-btn="1">
                Học kỳ I (Unité 0–3)
              </button>
              <button onclick="filterBySem('2')" class="sem-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer col-span-2" data-sem-btn="2">
                Học kỳ II (Unité 4–6)
              </button>
            </div>
          </div>

        </div>

        <!-- Lesson Navigation List -->
        <div class="p-3 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 shadow-sm space-y-1 max-h-[50vh] overflow-y-auto scrollbar-thin" id="lessonNavList">
          ${allUnites.map((u, i) => `
            <a href="#${u.id}" onclick="markLessonVisited(${i})" class="lesson-nav-link flex items-center justify-between p-2 rounded-xl text-xs hover:bg-blue-50 dark:hover:bg-gray-800/80 transition group" data-nav-id="${u.id}" data-sem-nav="${u.uniteNum <= 3 ? '1' : '2'}">
              <div class="flex items-center gap-2 overflow-hidden">
                <span class="w-6 h-6 rounded-lg ${u.uniteNum === 0 ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'} font-bold flex items-center justify-center text-[10px] shrink-0">
                  U${u.uniteNum}
                </span>
                <span class="truncate font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  ${u.title}
                </span>
              </div>
              <span id="check-icon-${i}" class="text-[10px] text-gray-300 dark:text-gray-600">
                <i class="fa-regular fa-circle"></i>
              </span>
            </a>
          `).join('')}
        </div>

      </div>

    </aside>

    <!-- ==================== MAIN CONTENT ==================== -->
    <main class="flex-1 space-y-6">

      <!-- Hero Welcome Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-800 to-rose-700 text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-blue-100">
            <i class="fa-solid fa-flag"></i> CHƯƠNG TRÌNH GDPT 2018 &bull; TIẾNG PHÁP 7
          </div>
          <h2 class="text-2xl sm:text-3xl font-black leading-tight">
            Kiến Thức Cốt Lõi Tiếng Pháp 7
          </h2>
          <p class="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
            Tài liệu số hóa toàn diện gồm Unité 0 và 6 Đơn vị bài học (24 Leçons chính). Tích hợp phát âm chuẩn giọng Pháp bản ngữ Web Speech API (fr-FR), sổ tay chia động từ Futur simple &amp; Imparfait, 6 Dự án sáng tạo và đấu trường Trạng Nguyên Le Lauréat 60 phút.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">7 Unités</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">24 Leçons chính</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">200+</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">Từ vựng &amp; Audio</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">6 Dự án</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">Sản phẩm thực hành</div>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
              <div class="text-lg sm:text-xl font-black text-amber-300">40 Câu</div>
              <div class="text-[10px] text-blue-200 uppercase font-semibold">Le Lauréat 60:00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Render all Unités -->
      <div class="space-y-8" id="lessonContainer">
        ${allUnites.map((u, i) => renderUniteHTML(u, i)).join('')}
      </div>

    </main>

  </div>

  <!-- ==================== MODAL 1: AUDIO & PHONÉTIQUE STUDIO ==================== -->
  <div id="audioStudioModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-900 via-indigo-900 to-rose-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-headphones"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Phonétique Studio &bull; Máy Phát Âm Tiếng Pháp Bản Ngữ (fr-FR)</h3>
            <p class="text-xs text-blue-200">Luyện nghe phát âm chuẩn ngữ điệu Pháp từ cơ bản đến nâng cao</p>
          </div>
        </div>
        <button onclick="closeAudioModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        
        <!-- Interactive Web Speech Tester for French -->
        <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
          <div class="font-bold text-blue-800 dark:text-blue-300 text-sm flex items-center gap-2">
            <i class="fa-solid fa-bullhorn"></i> Máy Phát Âm Tiếng Pháp Trực Quan (Text-to-Speech)
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-300">Gõ bất kì từ hoặc câu tiếng Pháp nào để nghe giọng chuẩn:</p>
          <div class="flex gap-2">
            <input type="text" id="customFrenchSpeechInput" placeholder="Ví dụ: Bonjour ! Je finirai bientôt mon exposé de français." class="flex-1 p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100">
            <button onclick="speakCustomFrench()" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition cursor-pointer">
              <i class="fa-solid fa-volume-high mr-1"></i> Écouter
            </button>
          </div>
        </div>

        <!-- 6 Thematic Vocabulary Clusters -->
        <div class="space-y-3">
          <h4 class="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-check text-blue-600"></i> Các Nhóm Từ Vựng &amp; Phát Âm Trọng Tâm Lớp 7
          </h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-blue-700 dark:text-blue-400">1. Không gian &amp; Tương lai</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 font-bold">Unité 1</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">
                <button onclick="speakFrench('la Terre')" class="underline hover:text-blue-500 font-bold">la Terre</button>, 
                <button onclick="speakFrench('la planète')" class="underline hover:text-blue-500 font-bold">la planète</button>, 
                <button onclick="speakFrench('le vaisseau spatial')" class="underline hover:text-blue-500 font-bold">le vaisseau spatial</button>, 
                <button onclick="speakFrench('l\'astronaute')" class="underline hover:text-blue-500 font-bold">l'astronaute</button>
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-blue-700 dark:text-blue-400">2. Nhạc cụ &amp; Âm nhạc</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 font-bold">Unité 2</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">
                <button onclick="speakFrench('le violon')" class="underline hover:text-blue-500 font-bold">le violon</button>, 
                <button onclick="speakFrench('la guitare')" class="underline hover:text-blue-500 font-bold">la guitare</button>, 
                <button onclick="speakFrench('la batterie')" class="underline hover:text-blue-500 font-bold">la batterie</button>, 
                <button onclick="speakFrench('le concert')" class="underline hover:text-blue-500 font-bold">le concert</button>
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-blue-700 dark:text-blue-400">3. Thời trang &amp; Phong cách</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 font-bold">Unité 3</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">
                <button onclick="speakFrench('le manteau')" class="underline hover:text-blue-500 font-bold">le manteau</button>, 
                <button onclick="speakFrench('la pointure')" class="underline hover:text-blue-500 font-bold">la pointure</button>, 
                <button onclick="speakFrench('la taille')" class="underline hover:text-blue-500 font-bold">la taille</button>, 
                <button onclick="speakFrench('élégant')" class="underline hover:text-blue-500 font-bold">élégant</button>
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-blue-700 dark:text-blue-400">4. Môi trường &amp; Tái chế</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 font-bold">Unité 4</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">
                <button onclick="speakFrench('trier les déchets')" class="underline hover:text-blue-500 font-bold">trier les déchets</button>, 
                <button onclick="speakFrench('recycler')" class="underline hover:text-blue-500 font-bold">recycler</button>, 
                <button onclick="speakFrench('économiser l\'eau')" class="underline hover:text-blue-500 font-bold">économiser l'eau</button>
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-blue-700 dark:text-blue-400">5. Thể thao &amp; Năng lượng</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 font-bold">Unité 5</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">
                <button onclick="speakFrench('faire du sport')" class="underline hover:text-blue-500 font-bold">faire du sport</button>, 
                <button onclick="speakFrench('le champion')" class="underline hover:text-blue-500 font-bold">le champion</button>, 
                <button onclick="speakFrench('le match')" class="underline hover:text-blue-500 font-bold">le match</button>, 
                <button onclick="speakFrench('s\'entraîner')" class="underline hover:text-blue-500 font-bold">s'entraîner</button>
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-blue-700 dark:text-blue-400">6. Dinh dưỡng &amp; Sức khỏe</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 font-bold">Unité 6</span>
              </div>
              <p class="text-[11px] text-gray-600 dark:text-gray-300">
                <button onclick="speakFrench('l\'alimentation équilibrée')" class="underline hover:text-blue-500 font-bold">l'alimentation équilibrée</button>, 
                <button onclick="speakFrench('le sommeil')" class="underline hover:text-blue-500 font-bold">le sommeil</button>, 
                <button onclick="speakFrench('se détendre')" class="underline hover:text-blue-500 font-bold">se détendre</button>
              </p>
            </div>

          </div>
        </div>

      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeAudioModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Fermer Studio
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: SỔ TAY CHIA ĐỘNG TỪ & NGỮ PHÁP ==================== -->
  <div id="conjugationModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-book"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black">Sổ Tay Chia Động Từ (Futur simple &amp; Imparfait) &amp; Ma Trận Ngữ Pháp</h3>
            <p class="text-xs text-indigo-200">Hệ thống hóa toàn diện các thì và cấu trúc cốt lõi Tiếng Pháp 7</p>
          </div>
        </div>
        <button onclick="closeConjugationModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        
        <!-- Table 1: Conjugation Matrix -->
        <div class="space-y-2">
          <h4 class="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-rotate text-indigo-600"></i> Bảng Chia Động Từ Mẫu: Futur simple &amp; Imparfait
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 border-b border-indigo-200 dark:border-indigo-800">
                  <th class="p-3 font-bold rounded-tl-xl">Động từ (Verbe)</th>
                  <th class="p-3 font-bold">Thì Futur simple</th>
                  <th class="p-3 font-bold rounded-tr-xl">Thì Imparfait</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800 font-mono text-[11px]">
                ${conjugationMatrix.map(item => `
                  <tr class="hover:bg-indigo-50/40 dark:hover:bg-gray-800/50 transition">
                    <td class="p-2.5 font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap">${item.verbe}</td>
                    <td class="p-2.5 text-gray-800 dark:text-gray-200">${item.futur}</td>
                    <td class="p-2.5 text-gray-800 dark:text-gray-200">${item.imparfait}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Table 2: Grammar Matrix -->
        <div class="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
          <h4 class="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-table-list text-blue-600"></i> Bảng Ngữ Pháp Trọng Tâm 7 Unités
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200 border-b border-blue-200 dark:border-blue-800">
                  <th class="p-3 font-bold rounded-tl-xl">Đơn vị bài</th>
                  <th class="p-3 font-bold">Cấu trúc cốt lõi</th>
                  <th class="p-3 font-bold rounded-tr-xl">Chức năng &amp; Công dụng giao tiếp</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                ${grammarMatrix.map(item => `
                  <tr class="hover:bg-blue-50/40 dark:hover:bg-gray-800/50 transition">
                    <td class="p-2.5 font-bold text-blue-700 dark:text-blue-400 whitespace-nowrap">${item.unité}</td>
                    <td class="p-2.5 font-mono text-[11px] font-bold text-gray-900 dark:text-white">${item.cấuTrúc}</td>
                    <td class="p-2.5 text-gray-700 dark:text-gray-300">${item.côngDụng}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeConjugationModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Fermer Sổ Tay
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: LE LAURÉAT (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <!-- Exam Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-900 via-indigo-900 to-rose-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center font-black text-lg shadow">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Tiếng Pháp 7 &bull; Le Lauréat</h3>
            <p class="text-xs text-blue-200">Ma trận 40 câu hỏi trắc nghiệm &bull; Thời gian 60:00 &bull; Khảo sát chất lượng</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <!-- Countdown Timer -->
          <div class="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/20 text-center">
            <div class="text-[10px] text-gray-300 font-bold uppercase">Temps restant</div>
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
          Questions répondues: <strong id="answeredCount" class="text-blue-600 dark:text-blue-400 font-mono">0</strong> / 40
        </div>
        <div class="flex items-center gap-2">
          <button onclick="closeExamModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
            Pause
          </button>
          <button onclick="submitExam()" class="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-600 hover:from-blue-600 hover:to-rose-500 text-white font-bold text-xs transition shadow-md shadow-blue-600/20 cursor-pointer">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xếp Hạng Le Lauréat
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-6 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-md bg-blue-700 text-white font-black text-[10px] flex items-center justify-center">FR</span>
        <span class="font-bold text-gray-800 dark:text-gray-200">Tiếng Pháp 7 &bull; Bộ Giáo Dục &amp; Đào Tạo &bull; Kết Nối Tri Thức</span>
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

    // Web Speech API for French Pronunciation
    function speakFrench(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'fr-FR';
        u.rate = 0.88;
        window.speechSynthesis.speak(u);
      } else {
        alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API.');
      }
    }

    function speakCustomFrench() {
      const input = document.getElementById('customFrenchSpeechInput');
      const text = input ? input.value.trim() : '';
      if (!text) {
        speakFrench('Bonjour à tous !');
        return;
      }
      speakFrench(text);
    }

    // Progress Tracking
    const visitedLessons = new Set();
    function markLessonVisited(idx) {
      visitedLessons.add(idx);
      updateProgress();
    }

    function updateProgress() {
      const total = 7;
      const count = visitedLessons.size;
      const pct = Math.round((count / total) * 100);
      document.getElementById('progressText').innerText = count + ' / ' + total + ' đơn vị bài';
      document.getElementById('progressBar').style.width = pct + '%';
      
      visitedLessons.forEach(i => {
        const icon = document.getElementById('check-icon-' + i);
        if (icon) {
          icon.innerHTML = '<i class=\"fa-solid fa-circle-check text-blue-500\"></i>';
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

    // Semester Filtering
    function filterBySem(sem) {
      const buttons = document.querySelectorAll('.sem-filter-btn');
      buttons.forEach(btn => {
        if (btn.getAttribute('data-sem-btn') === sem) {
          btn.className = 'sem-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-blue-600 text-white text-center transition cursor-pointer';
        } else {
          btn.className = 'sem-filter-btn px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-center transition cursor-pointer';
        }
      });

      const sections = document.querySelectorAll('.lesson-section');
      const navLinks = document.querySelectorAll('.lesson-nav-link');

      sections.forEach(sec => {
        const secSem = sec.getAttribute('data-sem');
        if (sem === 'all' || secSem === sem) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });

      navLinks.forEach(link => {
        const navSem = link.getAttribute('data-sem-nav');
        if (sem === 'all' || navSem === sem) {
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
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-check mr-1\"></i> Bravo ! C\\\'est exact !</strong> Bạn đã nắm rất vững kiến thức bài học.';
        } else {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark mr-1\"></i> Ce n\\\'est pas tout à fait ça.</strong> Hãy xem lại ô màu xanh lá để nắm đáp án đúng nhé.';
        }
      }
    }

    // Modal controls
    function openAudioModal() {
      document.getElementById('audioStudioModal').classList.remove('hidden');
    }
    function closeAudioModal() {
      document.getElementById('audioStudioModal').classList.add('hidden');
    }

    function openConjugationModal() {
      document.getElementById('conjugationModal').classList.remove('hidden');
    }
    function closeConjugationModal() {
      document.getElementById('conjugationModal').classList.add('hidden');
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
            <span class="w-6 h-6 rounded-lg bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
                <input type="radio" name="exam_q_\${qIdx}" value="\${oIdx}" onchange="selectExamOption(\${qIdx}, \${oIdx})" class="accent-blue-600">
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
            expBox.innerHTML = '<strong>✓ Chính xác !</strong> ' + item.explain;
          } else {
            expBox.className = 'p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 mt-2';
            expBox.innerHTML = '<strong>✗ Chưa đúng !</strong> Đáp án đúng là <strong>' + item.options[item.answer] + '</strong>. ' + item.explain;
          }
        }
      });

      // Calculate Title
      let title = "Bachelier de français (Tú Tài Tiếng Pháp)";
      if (score >= 38) title = "🏆 LE LAURÉAT D'OR (Trạng Nguyên Tiếng Pháp)";
      else if (score >= 32) title = "🥈 LE LAURÉAT D'ARGENT (Bảng Nhãn Tiếng Pháp)";
      else if (score >= 26) title = "🥉 LE LAURÉAT DE BRONZE (Thám Hoa Tiếng Pháp)";

      const resMsg = [
        'RÉSULTAT DU CONCOURS LE LAURÉAT - TIẾNG PHÁP 7:',
        '--------------------------------------------',
        'Điểm số: ' + score + ' / 40 câu đúng (' + ((score / 40) * 10).toFixed(1) + '/10 điểm)',
        'Danh hiệu đạt được: ' + title,
        'Hãy cuộn xuống để xem lời giải chi tiết cho từng câu hỏi!'
      ].join('\\n');
      alert(resMsg);
    }
  </script>
</body>
</html>`;

const outPath1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengphap_7.html';
const outPath2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/french_7.html';

fs.writeFileSync(outPath1, fullHTML, 'utf8');
fs.writeFileSync(outPath2, fullHTML, 'utf8');

console.log('Successfully generated tiengphap_7.html and french_7.html!');
