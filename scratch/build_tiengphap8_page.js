// Generator script for Tiếng Pháp 8 (Kết nối tri thức với cuộc sống - GDPT 2018)
const fs = require('fs');
const path = require('path');

const { unitesPart1 } = require('./tiengphap8_data_p1.js');
const { unitesPart2, grammarSummaryTable, conjugationMatrix, projectsList } = require('./tiengphap8_data_p2.js');
const { getMindmapSVG } = require('./tiengphap8_mindmaps.js');
const { examQuestions } = require('./tiengphap8_exam.js');

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
  const mindmapSVG = getMindmapSVG(uniteId);

  return `
    <section id="${uniteId}" data-sem="${isSem1 ? '1' : '2'}" class="lesson-section scroll-mt-20 rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-850 border-2 border-blue-100 dark:border-gray-800 shadow-lg space-y-6">
      
      <!-- Unité Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div class="flex items-center gap-3">
          <span class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white font-black text-xs uppercase tracking-wider shadow flex items-center gap-1.5">
            <i class="fa-solid fa-graduation-cap"></i> ${unite.uniteNum === 0 ? 'UNITÉ 0' : 'UNITÉ ' + unite.uniteNum}
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

      <!-- Sơ đồ tư duy trực quan (Concept Mindmap) -->
      ${mindmapSVG ? `
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          <span><i class="fa-solid fa-sitemap text-blue-600 mr-1.5"></i> Sơ đồ tư duy trực quan (Concept Mindmap)</span>
          <span class="text-[10px] text-gray-400 font-normal">Trực quan hóa cấu trúc cốt lõi bài học</span>
        </div>
        <div class="rounded-2xl overflow-hidden border border-blue-100 dark:border-gray-800 shadow-sm bg-gray-900">
          ${mindmapSVG}
        </div>
      </div>
      ` : ''}

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
                <span class="text-[11px] text-gray-500 dark:text-gray-400 italic font-medium">${lecon.focus}</span>
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
              <div class="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
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

function generateCompletePage() {
  const contentHTML = allUnites.map((u, i) => renderUniteHTML(u, i)).join('\n');

  return `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Pháp 8 — Kết nối tri thức với cuộc sống (Chương trình GDPT 2018)</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            gray: {
              850: '#141824',
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
    .unite-nav-active {
      background-color: rgb(37 99 235);
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
        <a href="../index.html" class="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 group">
          <div class="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-lg font-black group-hover:scale-105 transition shadow-sm border border-blue-200 dark:border-blue-900">
            <i class="fa-solid fa-flag text-blue-600 dark:text-blue-400"></i>
          </div>
          <div>
            <span class="text-xs uppercase tracking-widest font-extrabold text-blue-700 dark:text-blue-400 block leading-tight">CodeHub Academy</span>
            <span class="text-base sm:text-lg font-black text-gray-900 dark:text-white leading-tight">Tiếng Pháp 8</span>
          </div>
        </a>
        <span class="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
          SGK Kết nối tri thức &bull; GDPT 2018
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        
        <!-- Search bar trigger -->
        <button onclick="toggleModal('search-modal')" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
          <span>Tra cứu từ vựng, ngữ pháp...</span>
          <kbd class="text-[10px] bg-white dark:bg-gray-900 px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-700">⌘K</kbd>
        </button>

        <!-- Sổ tay 16 Điểm Ngữ Pháp -->
        <button onclick="toggleModal('grammar-modal')" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-600 hover:text-white transition flex items-center gap-1.5 border border-blue-200 dark:border-blue-900">
          <i class="fa-solid fa-shapes"></i>
          <span class="hidden md:inline">Sổ tay</span> 16 Ngữ pháp
        </button>

        <!-- Bảng chia Động từ -->
        <button onclick="toggleModal('verbs-modal')" class="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-600 hover:text-white transition flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-900">
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
          <span class="hidden md:inline">Chia</span> Động từ
        </button>

        <!-- Dự án thực hành -->
        <button onclick="toggleModal('projects-modal')" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-600 hover:text-white transition flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-900">
          <i class="fa-solid fa-palette"></i>
          <span class="hidden md:inline">Dự án</span> Projets
        </button>

        <!-- Đấu trường Trạng Nguyên -->
        <button onclick="toggleModal('exam-modal')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 text-white text-xs font-black hover:opacity-90 transition flex items-center gap-1.5 shadow-md">
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
          <h3 class="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">Mục lục Unités</h3>
          <p class="text-xs text-gray-600 dark:text-gray-400">Unité 0 &bull; 6 Đơn vị học &bull; 24 Leçons</p>
        </div>

        <!-- Filter tabs by semester -->
        <div class="grid grid-cols-2 gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl text-[11px] font-bold text-center">
          <button onclick="filterSem(1, this)" class="sem-btn py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400">Học kỳ 1 (U0 - U3)</button>
          <button onclick="filterSem(2, this)" class="sem-btn py-1 rounded-lg hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">Học kỳ 2 (U4 - U6)</button>
        </div>

        <!-- Navigation list -->
        <nav class="space-y-1 text-xs" id="nav-list">
          ${allUnites.map(u => `
            <a href="#${u.id}" 
               data-sem="${u.uniteNum <= 3 ? '1' : '2'}"
               class="nav-link flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/60 transition group text-gray-700 dark:text-gray-300">
              <div class="truncate mr-2">
                <span class="font-bold block truncate">${u.title}</span>
                <span class="text-[10px] text-gray-400 block truncate">${u.theme}</span>
              </div>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0 font-mono">
                ${u.uniteNum === 0 ? 'Intro' : 'U' + u.uniteNum}
              </span>
            </a>
          `).join('')}
        </nav>

        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
          <div class="p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1 text-xs">
            <span class="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
              <i class="fa-solid fa-headphones"></i> Web Speech API (fr-FR)
            </span>
            <p class="text-[11px] text-gray-600 dark:text-gray-400 leading-tight">
              Tích hợp giọng phát âm tiếng Pháp chuẩn xác cho toàn bộ từ vựng, câu ví dụ và đoạn hội thoại giao tiếp!
            </p>
          </div>
        </div>

      </aside>

      <!-- Main Course Content -->
      <main class="flex-1 min-w-0 space-y-8">
        
        <!-- Welcome Hero Banner -->
        <div class="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white shadow-xl relative overflow-hidden">
          <div class="relative z-10 space-y-3 max-w-2xl">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider">
              <i class="fa-solid fa-graduation-cap"></i> Học liệu số hóa chuẩn SGK Kết nối tri thức
            </span>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              KIẾN THỨC CỐT LÕI TIẾNG PHÁP 8
            </h1>
            <p class="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">
              Chương trình chuẩn GDPT 2018 gồm Unité 0 và đủ 6 Đơn vị học (24 Leçons). Tích hợp Audio phát âm fr-FR bản ngữ, 7 SVG Concept Mindmaps, Sổ tay 16 chủ điểm ngữ pháp cốt lõi, Bảng chia động từ toàn diện và Đấu trường Trạng Nguyên Tiếng Pháp 8 (60:00).
            </p>
            <div class="flex flex-wrap items-center gap-2 pt-2">
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-book mr-1"></i> 7 Unités &bull; 24 Leçons
              </span>
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-shapes mr-1"></i> 16 Điểm ngữ pháp
              </span>
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-volume-high mr-1"></i> 180+ Audio fr-FR
              </span>
              <span class="text-xs bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold">
                <i class="fa-solid fa-sitemap mr-1"></i> 7 Concept Mindmaps
              </span>
            </div>
          </div>
          <!-- Decorative Background Icon -->
          <div class="absolute -right-6 -bottom-6 text-white/10 text-9xl pointer-events-none select-none">
            <i class="fa-solid fa-tower-observation"></i>
          </div>
        </div>

        <!-- Render All Unités Content -->
        ${contentHTML}

      </main>

    </div>
  </div>

  <!-- ==================== MODALS ==================== -->

  <!-- 1. MODAL: SỔ TAY 16 ĐIỂM NGỮ PHÁP TIẾNG PHÁP 8 -->
  <div id="grammar-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-5xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-shapes"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Bảng Tổng Hợp 16 Điểm Ngữ Pháp Tiếng Pháp 8</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Trọng tâm toàn bộ chương trình từ Unité 0 đến Unité 6</p>
          </div>
        </div>
        <button onclick="toggleModal('grammar-modal')" class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar">
        <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
          <table class="w-full text-xs text-left">
            <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider">
              <tr>
                <th class="p-3">Unité</th>
                <th class="p-3">Điểm ngữ pháp</th>
                <th class="p-3">Công dụng &amp; Cách tạo</th>
                <th class="p-3">Ví dụ thực tế</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              ${grammarSummaryTable.map(gs => `
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="p-3 font-bold text-blue-700 dark:text-blue-400 whitespace-nowrap">${gs.unité}</td>
                  <td class="p-3 font-bold text-gray-900 dark:text-white">${gs.điểmNgữPháp}</td>
                  <td class="p-3 text-gray-700 dark:text-gray-300 leading-relaxed">${gs.côngDụng}</td>
                  <td class="p-3 text-indigo-600 dark:text-indigo-400 italic">${gs.víDụ}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. MODAL: BẢNG CHIA ĐỘNG TỪ (CONJUGAISON MATRIX) -->
  <div id="verbs-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-5xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Bảng Chia Động Từ Trọng Tâm Tiếng Pháp 8</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Các thì cốt lõi: Présent &bull; Imparfait &bull; Passé composé &bull; Futur simple</p>
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
                <th class="p-3">Động từ nguyên mẫu</th>
                <th class="p-3">Présent (Hiện tại)</th>
                <th class="p-3">Imparfait (Quá khứ tiếp diễn)</th>
                <th class="p-3">Passé composé (Quá khứ kép)</th>
                <th class="p-3">Futur simple (Tương lai đơn)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700 font-medium">
              ${conjugationMatrix.map(cm => `
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="p-3 font-bold text-blue-700 dark:text-blue-400">${cm.verbe}</td>
                  <td class="p-3 text-gray-800 dark:text-gray-200 font-mono">${cm.present}</td>
                  <td class="p-3 text-amber-600 dark:text-amber-400 font-mono">${cm.imparfait}</td>
                  <td class="p-3 text-emerald-600 dark:text-emerald-400 font-mono">${cm.passeCompose}</td>
                  <td class="p-3 text-purple-600 dark:text-purple-400 font-mono">${cm.futurSimple}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. MODAL: DỰ ÁN SÁNG TẠO (PROJETS CRÉATIFS) -->
  <div id="projects-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-palette"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Danh Mục Dự Án Thực Hành Sáng Tạo (Projets)</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Vận dụng kiến thức bài học tạo sản phẩm học tập thực tế</p>
          </div>
        </div>
        <button onclick="toggleModal('projects-modal')" class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto custom-scrollbar space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${projectsList.map(pl => `
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
              <div class="flex items-center justify-between border-b border-gray-200/60 dark:border-gray-700/60 pb-2">
                <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">${pl.unité}</span>
                <span class="text-xs font-black text-gray-900 dark:text-white bg-white dark:bg-gray-900 px-2.5 py-0.5 rounded-lg border border-gray-200 dark:border-gray-700">
                  ${pl.titre}
                </span>
              </div>
              <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${pl.môTả}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- 4. MODAL: ĐẤU TRƯỜNG TRẠNG NGUYÊN TIẾNG PHÁP 8 (40 CÂU - 60:00) -->
  <div id="exam-modal" class="fixed inset-0 z-50 hidden bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-blue-700 via-indigo-700 to-red-600 text-white flex items-center justify-between shadow">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg font-black shadow-inner">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">CONCOURS DE FRANÇAIS 8 — ĐẤU TRƯỜNG TRẠNG NGUYÊN</h3>
            <p class="text-xs text-blue-100 font-medium">40 Câu hỏi &bull; Thời gian 60:00 &bull; Chuẩn kiến thức SGK Kết nối tri thức</p>
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
          <div class="w-20 h-20 mx-auto rounded-3xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-3xl font-black shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 class="text-xl font-black text-gray-900 dark:text-white">Chào mừng tới Đấu Trường Trạng Nguyên Tiếng Pháp 8 !</h4>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Bài thi gồm <strong>40 câu hỏi trắc nghiệm</strong> kiểm tra toàn diện 4 năng lực: Vocabulaire (10 câu), Grammaire &amp; Conjugaison (14 câu), Communication (8 câu), Culture &amp; Francophonie (8 câu).
          </p>
          <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-200 text-left space-y-1">
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>≥ 36 điểm:</strong> Trạng Nguyên Tiếng Pháp 8 (Lauréat d'Excellence)</div>
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>30 - 35 điểm:</strong> Bảng Nhãn Tiếng Pháp 8 (Mention Très Bien)</div>
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>24 - 29 điểm:</strong> Thám Hoa Tiếng Pháp 8 (Mention Bien)</div>
            <div><i class="fa-solid fa-star text-amber-500 mr-1.5"></i> <strong>&lt; 24 điểm:</strong> Cần ôn tập và rèn luyện thêm</div>
          </div>
          <button onclick="startExam()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 hover:opacity-90 text-white font-extrabold text-sm shadow-lg transition">
            BẮT ĐẦU LÀM BÀI THI (60:00)
          </button>
        </div>

        <!-- Questions List (Hidden by default) -->
        <div id="exam-questions-list" class="hidden space-y-6">
          ${examQuestions.map((eq, eqIdx) => `
            <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  Question ${eqIdx + 1} / 40 &bull; ${eq.cat}
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
                <strong>Explication :</strong> ${eq.exp}
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
        <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
        <input id="search-input" oninput="handleSearch(this.value)" type="text" placeholder="Tìm kiếm từ vựng, ngữ pháp tiếng Pháp hoặc tiếng Việt..." class="bg-transparent border-none outline-none w-full text-xs text-gray-900 dark:text-white placeholder-gray-400">
        <button onclick="toggleModal('search-modal')" class="text-xs text-gray-400 hover:text-gray-600"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div id="search-results" class="max-h-72 overflow-y-auto custom-scrollbar space-y-1 text-xs">
        <p class="p-3 text-gray-400 text-center italic">Nhập ít nhất 2 ký tự để tìm kiếm tức thời trong 7 Unités...</p>
      </div>
    </div>
  </div>

  <!-- JavaScript Application Logic -->
  <script>
    // 1. Text-to-Speech (fr-FR)
    function speakFrench(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.95;
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
        ['grammar-modal', 'verbs-modal', 'projects-modal', 'exam-modal', 'search-modal'].forEach(id => {
          const el = document.getElementById(id);
          if (el && !el.classList.contains('hidden')) el.classList.add('hidden');
        });
      }
    });

    // 4. Mini Quiz Checker
    function checkAnswer(uniteId, qIdx, selectedIdx, correctIdx, btn) {
      const container = btn.parentElement;
      const allBtns = container.querySelectorAll('.quiz-btn');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-white', 'dark:hover:bg-gray-700');
      });

      const fb = document.getElementById('quiz-fb-' + uniteId + '-' + qIdx);
      if (selectedIdx === correctIdx) {
        btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
        if (fb) {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 block';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-check text-emerald-600 mr-1\"></i> Bravo ! Très bien.</strong> Bạn đã trả lời chính xác câu hỏi.';
        }
      } else {
        btn.classList.add('bg-rose-500', 'text-white', 'border-rose-600');
        if (allBtns[correctIdx]) {
          allBtns[correctIdx].classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'text-emerald-700', 'dark:text-emerald-300', 'border-emerald-500');
        }
        if (fb) {
          fb.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800 block';
          fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Dommage !</strong> Đáp án chính xác là phương án ' + String.fromCharCode(65 + correctIdx) + '.';
        }
      }
    }

    // 5. Semester Filter on Sidebar
    function filterSem(semNum, btn) {
      document.querySelectorAll('.sem-btn').forEach(b => {
        b.classList.remove('bg-white', 'dark:bg-gray-700', 'shadow-sm', 'text-blue-600', 'dark:text-blue-400');
        b.classList.add('text-gray-600', 'dark:text-gray-300');
      });
      btn.classList.add('bg-white', 'dark:bg-gray-700', 'shadow-sm', 'text-blue-600', 'dark:text-blue-400');

      document.querySelectorAll('.nav-link').forEach(link => {
        const linkSem = parseInt(link.getAttribute('data-sem'));
        link.style.display = (linkSem === semNum) ? 'flex' : 'none';
      });
    }

    // 6. Concours de Français 8 Exam Logic
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
          alert('Le temps est écoulé ! Đã hết 60 phút làm bài, hệ thống tự động nộp bài.');
          submitExam();
        }
      }, 1000);
    }

    function selectExamOption(qIdx, optIdx, btn) {
      examUserAnswers[qIdx] = optIdx;
      const allBtns = document.querySelectorAll('.exam-opt-btn-' + qIdx);
      allBtns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'border-blue-700');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'border-blue-700');
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

      let rankTitle = 'Cần cố gắng ôn luyện thêm';
      let rankColor = 'text-rose-500';
      let rankBadge = 'fa-medal';
      if (score >= 36) {
        rankTitle = 'TRẠNG NGUYÊN TIẾNG PHÁP 8 (Lauréat d\\'Excellence)';
        rankColor = 'text-amber-500';
        rankBadge = 'fa-trophy';
      } else if (score >= 30) {
        rankTitle = 'BẢNG NHÃN TIẾNG PHÁP 8 (Mention Très Bien)';
        rankColor = 'text-blue-500';
        rankBadge = 'fa-award';
      } else if (score >= 24) {
        rankTitle = 'THÁM HOA TIẾNG PHÁP 8 (Mention Bien)';
        rankColor = 'text-emerald-500';
        rankBadge = 'fa-certificate';
      }

      const resEl = document.getElementById('exam-result');
      resEl.classList.remove('hidden');
      resEl.innerHTML = \`
        <div class="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-3">
          <div class="text-4xl \${rankColor}"><i class="fa-solid \${rankBadge}"></i></div>
          <h4 class="text-xl font-black text-gray-900 dark:text-white">RÉSULTAT DU CONCOURS</h4>
          <div class="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">\${score} / 40 POINTS</div>
          <div class="text-sm font-bold \${rankColor}">Danh hiệu: \${rankTitle}</div>
          <p class="text-xs text-gray-600 dark:text-gray-400">Bạn có thể cuộn lên xem giải thích ngữ pháp chi tiết cho từng câu hỏi bên trên.</p>
          <button onclick="startExam()" class="mt-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs">
            <i class="fa-solid fa-rotate-right mr-1"></i> Làm lại bài thi
          </button>
        </div>
      \`;
      resEl.scrollIntoView({ behavior: 'smooth' });
    }

    function closeExamModal() {
      if (confirm('Bạn có muốn đóng giao diện Đấu trường Trạng Nguyên không?')) {
        toggleModal('exam-modal');
      }
    }

    // 7. Interactive Instant Search
    const searchData = [];
    ${JSON.stringify(allUnites)}.forEach(u => {
      (u.lecons || []).forEach(l => {
        (l.vocab || []).forEach(v => {
          searchData.push({
            type: 'Từ vựng',
            unite: u.title,
            uniteId: u.id,
            text: v.fr + ' ' + v.ipa + ' ' + v.vn
          });
        });
      });
      if (u.grammar) {
        searchData.push({
          type: 'Ngữ pháp',
          unite: u.title,
          uniteId: u.id,
          text: u.grammar.title + ' ' + u.grammar.formula
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
        resContainer.innerHTML = '<p class="p-3 text-rose-500 text-center">Aucun résultat trouvé (Không tìm thấy kết quả).</p>';
        return;
      }
      resContainer.innerHTML = matches.map(m => \`
        <a href="#\${m.uniteId}" onclick="toggleModal('search-modal')" class="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950 flex items-center justify-between gap-2 border border-gray-100 dark:border-gray-700 transition">
          <div>
            <span class="font-bold text-gray-900 dark:text-white">\${m.text.slice(0, 60)}...</span>
            <span class="text-[10px] text-gray-400 block">\${m.unite}</span>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 shrink-0">
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

const p1 = path.join(__dirname, '../courses/tiengphap_8.html');
const p2 = path.join(__dirname, '../courses/french_8.html');

fs.writeFileSync(p1, htmlContent, 'utf8');
fs.writeFileSync(p2, htmlContent, 'utf8');

console.log('Successfully generated Tiếng Pháp 8 courses!');
console.log('Output 1:', p1, 'Size:', fs.statSync(p1).size, 'bytes');
console.log('Output 2:', p2, 'Size:', fs.statSync(p2).size, 'bytes');
