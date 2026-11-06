const fs = require('fs');
const path = require('path');

const { themes, lessonsData, glossary } = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_dataset.json', 'utf8'));
const examQuestions = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_exam.json', 'utf8'));
const svgs = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_svgs.json', 'utf8'));

console.log('Compiling mithuat_9.html...');

// Sidebar navigation generation
let sidebarNavHtml = '';
themes.forEach((t) => {
  sidebarNavHtml += `
    <div class="topic-nav-wrapper mb-2">
      <a href="#theme-${t.id}" class="topic-nav-link flex items-center justify-between py-1.5 px-2.5 rounded-xl hover:bg-rose-50/80 dark:hover:bg-rose-950/30 text-slate-800 dark:text-slate-200 text-xs font-bold transition group border border-transparent hover:border-rose-200 dark:hover:border-rose-800" data-theme="${t.id}">
        <span class="truncate flex items-center gap-2">
          <span class="w-5 h-5 rounded-lg bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300 flex items-center justify-center text-[10px] font-black shrink-0">${t.id}</span>
          <span class="truncate group-hover:text-rose-600 dark:group-hover:text-rose-400">${t.title.replace(`Chủ đề ${t.id}. `, '')}</span>
        </span>
        <i class="fa-solid fa-chevron-right text-[9px] text-slate-400 group-hover:text-rose-500 transition-transform group-hover:translate-x-0.5"></i>
      </a>
      <div class="ml-4 pl-2 border-l border-rose-200/70 dark:border-rose-900/60 space-y-0.5 mt-1">
  `;

  t.lessons.forEach((l) => {
    sidebarNavHtml += `
      <a href="#${l.id}" class="lesson-sub-link flex items-center gap-1.5 py-1 px-2 rounded-lg text-[11px] text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-rose-50/60 dark:hover:bg-rose-950/20 transition truncate" title="${l.title}">
        <span class="w-1.5 h-1.5 rounded-full ${l.isExhibition ? 'bg-amber-500' : 'bg-rose-400'} shrink-0"></span>
        <span class="truncate">${l.isExhibition ? '★ ' + l.title : l.title}</span>
      </a>
    `;
  });

  sidebarNavHtml += `
      </div>
    </div>
  `;
});

// Main content generation
let mainContentHtml = '';

themes.forEach((t) => {
  mainContentHtml += `
    <!-- THEME ${t.id} SECTION -->
    <section id="theme-${t.id}" class="scroll-mt-24 mb-14">
      <!-- Theme Header Banner -->
      <div class="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r ${t.color} text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black tracking-wider uppercase mb-3">
            <i class="fa-solid fa-palette text-yellow-300"></i> ${t.badge}
          </div>
          <h2 class="text-2xl sm:text-3xl font-black mb-3 tracking-tight">${t.title}</h2>
          <p class="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl">${t.desc}</p>
        </div>
      </div>

      <!-- Lessons Container -->
      <div class="space-y-10">
  `;

  t.lessons.forEach((l) => {
    const isEx = !!l.isExhibition;
    const svgCode = svgs[l.id] || `<div class="p-8 text-center text-slate-400">Đang cập nhật sơ đồ...</div>`;

    // Quiz HTML for this lesson
    let quizHtml = '';
    (l.quiz || []).forEach((qItem, qIdx) => {
      quizHtml += `
        <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-rose-300 dark:hover:border-rose-700/60" id="quiz-item-${l.id}-${qIdx}">
          <p class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-3 leading-relaxed flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">${qIdx + 1}</span>
            <span>${qItem.q}</span>
          </p>
          <div class="space-y-2 pl-8">
      `;

      qItem.options.forEach((opt, optIdx) => {
        quizHtml += `
          <label class="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-750 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 cursor-pointer text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-all">
            <input type="radio" name="quiz-${l.id}-${qIdx}" value="${optIdx}" class="text-rose-600 focus:ring-rose-500 w-4 h-4">
            <span class="flex-1">${opt}</span>
          </label>
        `;
      });

      quizHtml += `
          </div>
          <div class="quiz-feedback hidden mt-3.5 ml-8 p-3 rounded-xl text-xs sm:text-sm leading-relaxed border" id="feedback-${l.id}-${qIdx}"></div>
        </div>
      `;
    });

    mainContentHtml += `
      <!-- LESSON ${l.number}: ${l.title} -->
      <article id="${l.id}" class="scroll-mt-24 bg-white dark:bg-slate-850 rounded-3xl shadow-sm hover:shadow-md border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 transition-all">
        <!-- Lesson Top Badge & Title -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${isEx ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300'}">
              ${isEx ? 'HOẠT ĐỘNG TRƯNG BÀY' : `BÀI ${l.number}`}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
              <i class="fa-regular fa-bookmark text-rose-500"></i> ${l.pages}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">SGK Kết nối tri thức</span>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 leading-snug">
          ${l.title}
        </h3>

        <!-- Objectives & Competencies -->
        <div class="mb-6 p-4 sm:p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
          <h4 class="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-bullseye"></i> Mục tiêu &amp; Năng lực đạt được
          </h4>
          <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            ${(l.objectives || []).map(obj => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-rose-500 text-xs mt-1 shrink-0"></i>
                <span>${obj}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Keywords Tags -->
        <div class="mb-6 flex flex-wrap items-center gap-2">
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1"><i class="fa-solid fa-tags text-rose-500"></i> Từ khoá:</span>
          ${(l.keywords || []).map(kw => `
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-rose-100 dark:hover:bg-rose-900/40 transition">#${kw}</span>
          `).join('')}
        </div>

        <!-- Visual Vector Graphic (SVG) -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <i class="fa-solid fa-compass-drafting text-rose-500"></i> Đồ hoạ mĩ thuật &amp; Sơ đồ trực quan
            </span>
            <span class="text-[11px] text-slate-400 font-medium">Bản vẽ vector SVG độc quyền</span>
          </div>
          <div class="diagram-viewport p-2 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
            ${svgCode}
          </div>
        </div>

        <!-- Core Knowledge Section -->
        <div class="mb-8">
          <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <i class="fa-solid fa-book-open text-rose-500"></i> Kiến thức trọng tâm &amp; Khái niệm tạo hình
          </h4>
          ${l.coreKnowledge}
        </div>

        <!-- 4-step Process -->
        <div class="mb-8">
          <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-3.5 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <i class="fa-solid fa-list-check text-rose-500"></i> Quy trình thực hành chuẩn SGK
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            ${(l.process || []).map(pItem => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between">
                <div class="font-bold text-xs sm:text-sm text-rose-700 dark:text-rose-400 mb-1.5 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                  ${pItem.step}
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${pItem.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Self-evaluation & Application Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <!-- Evaluation -->
          <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
            <h5 class="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2.5 flex items-center gap-2">
              <i class="fa-solid fa-clipboard-check text-amber-600"></i> Tiêu chí tự đánh giá sản phẩm
            </h5>
            <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              ${(l.evaluation || []).map(ev => `
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-amber-500 text-xs mt-0.5 shrink-0"></i>
                  <span>${ev}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Application -->
          <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
            <h5 class="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2.5 flex items-center gap-2">
              <i class="fa-solid fa-seedling text-emerald-600"></i> Thảo luận &amp; Vận dụng đời sống
            </h5>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              ${l.application}
            </p>
          </div>
        </div>

        <!-- 4-question Interactive Quiz -->
        <div class="border-t border-slate-100 dark:border-slate-800 pt-6">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-rose-500"></i> Luyện tập nhanh bài học (4 câu trắc nghiệm)
            </h4>
            <button onclick="checkLessonQuiz('${l.id}')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition active:scale-95 flex items-center gap-1.5">
              <i class="fa-solid fa-check-double"></i> Chấm điểm bài tập
            </button>
          </div>

          <div class="space-y-4">
            ${quizHtml}
          </div>

          <div id="quiz-summary-${l.id}" class="hidden mt-4 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-center">
            <p class="text-sm font-black text-rose-700 dark:text-rose-300" id="quiz-score-text-${l.id}">0 / 4 Điểm</p>
          </div>
        </div>
      </article>
    `;
  });

  mainContentHtml += `
      </div>
    </section>
  `;
});

// Trạng Nguyên Exam Questions HTML
let examQuestionsHtml = '';
examQuestions.forEach((eq, idx) => {
  examQuestionsHtml += `
    <div class="bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700/80 transition-all hover:border-amber-400" id="exam-q-${idx}">
      <p class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-3 leading-relaxed flex items-start gap-3">
        <span class="w-7 h-7 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">${idx + 1}</span>
        <span>${eq.q}</span>
      </p>
      <div class="space-y-2.5 pl-10">
  `;

  eq.options.forEach((opt, oIdx) => {
    examQuestionsHtml += `
      <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 cursor-pointer text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-all">
        <input type="radio" name="exam-q-${idx}" value="${oIdx}" class="text-amber-600 focus:ring-amber-500 w-4 h-4">
        <span class="flex-1">${opt}</span>
      </label>
    `;
  });

  examQuestionsHtml += `
      </div>
      <div id="exam-explain-${idx}" class="hidden mt-4 ml-10 p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs sm:text-sm leading-relaxed border-l-4"></div>
    </div>
  `;
});

// Glossary Modal Grid HTML
let glossaryGridHtml = '';
glossary.forEach((g, gIdx) => {
  glossaryGridHtml += `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-rose-300 dark:hover:border-rose-700 transition">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-6 h-6 rounded-lg bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300 flex items-center justify-center text-xs font-black shrink-0">${gIdx + 1}</span>
        <h4 class="text-sm font-black text-rose-700 dark:text-rose-400">${g.term}</h4>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${g.definition}</p>
    </div>
  `;
});

// Program Map Table rows
let programMapRows = '';
themes.forEach(t => {
  t.lessons.forEach(l => {
    programMapRows += `
      <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-rose-50/30 dark:hover:bg-rose-950/20 transition">
        <td class="py-3 px-3.5 font-bold text-rose-700 dark:text-rose-400 text-xs">${t.id}</td>
        <td class="py-3 px-3.5 font-semibold text-slate-800 dark:text-slate-200 text-xs">${l.isExhibition ? '★ ' + l.title : l.title}</td>
        <td class="py-3 px-3.5 text-slate-500 dark:text-slate-400 text-xs">${l.pages}</td>
        <td class="py-3 px-3.5 text-slate-600 dark:text-slate-300 text-xs truncate max-w-xs">${(l.keywords || []).slice(0, 3).join(', ')}</td>
      </tr>
    `;
  });
});

// Full HTML Template
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Mĩ Thuật 9 (SGK Kết Nối Tri Thức: 8 Chủ Đề • 16 Bài Học • 10 Thuật Ngữ • Đấu Trường Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            art: {
              rose: '#E11D48',
              pink: '#EC4899',
              amber: '#D97706',
              teal: '#0D9488',
              indigo: '#4F46E5',
              dark: '#0F172A'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome 6 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
      letter-spacing: 0.005em !important;
      line-height: 1.7 !important;
    }
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.03);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(225, 29, 72, 0.25);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(225, 29, 72, 0.45);
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200 antialiased selection:bg-rose-500 selection:text-white">

  <!-- TOP STICKY GLASS HEADER -->
  <header class="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 glass-header border-b border-slate-200/80 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-palette text-lg"></i>
          </div>
          <span class="font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <div class="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>Lớp 9</span>
          <span class="text-slate-300 dark:text-slate-700">/</span>
          <span class="text-rose-600 dark:text-rose-400 font-bold">Mĩ Thuật 9</span>
        </div>
      </div>

      <!-- Right Action Tools -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Glossary Modal Trigger -->
        <button onclick="toggleGlossaryModal(true)" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold transition flex items-center gap-1.5 border border-rose-200/60 dark:border-rose-900/60">
          <i class="fa-solid fa-spell-check text-rose-500"></i>
          <span class="hidden md:inline">10 Thuật Ngữ</span>
          <span class="md:hidden">Thuật ngữ</span>
        </button>

        <!-- Trạng Nguyên Exam Anchor -->
        <a href="#trang-nguyen-exam" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-crown text-yellow-200"></i>
          <span class="hidden md:inline">Trạng Nguyên (60:00)</span>
          <span class="md:hidden">Thi 60p</span>
        </a>

        <!-- Dark/Light Mode Toggle -->
        <button id="theme-toggle" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition text-sm" title="Chuyển chế độ Sáng/Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="relative pt-12 pb-16 overflow-hidden bg-gradient-to-b from-rose-50/70 via-pink-50/30 to-transparent dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900 border-b border-slate-200/60 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-black uppercase tracking-wider mb-4 border border-rose-200 dark:border-rose-900/60">
          <i class="fa-solid fa-award text-rose-600"></i> SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG • MĨ THUẬT 9
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
          Mĩ Thuật 9 – Sáng Tạo Nghệ Thuật &amp; Định Hướng Nghề Nghiệp
        </h1>
        <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          Tài liệu học tập toàn diện bám sát chuẩn SGK: 8 chủ đề, 16 bài học, 2 đợt kiểm tra trưng bày; tiến trình chuẩn 4 bước (Quan sát – Thể hiện – Thảo luận – Vận dụng); 64 câu hỏi trắc nghiệm tương tác và Đấu trường Trạng nguyên 60 phút.
        </p>

        <!-- 4 Metric Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400">8</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Chủ đề chuẩn</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-pink-600 dark:text-pink-400">16</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Bài học SGK</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">10</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Thuật ngữ cốt lõi</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">25</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Câu Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOUNDATION SECTION: MẠCH KIẾN THỨC NỀN TẢNG -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-850 shadow-sm border border-slate-200/80 dark:border-slate-800">
      <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <i class="fa-solid fa-shapes text-rose-500"></i> Mạch Kiến Thức Nền Tảng Môn Mĩ Thuật 9
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Card 1 -->
        <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
          <div class="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-xs mb-3">01</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Mĩ thuật Tạo hình &amp; Ứng dụng</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Song hành giữa nghệ thuật thuần tuý (Hội hoạ, Điêu khắc) và thiết kế thực tế (Thời trang, Công nghiệp, Đồ hoạ, UI/UX).</p>
        </div>
        <!-- Card 2 -->
        <div class="p-4 rounded-2xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-200/60 dark:border-pink-900/40">
          <div class="w-8 h-8 rounded-lg bg-pink-500 text-white flex items-center justify-center font-bold text-xs mb-3">02</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Ngôn ngữ &amp; Yếu tố Tạo hình</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Vận dụng chuẩn xác: Điểm, Nét, Hình mảng, Khối 3D, Không gian, Sắc độ, Màu sắc và Chất cảm bề mặt vật liệu.</p>
        </div>
        <!-- Card 3 -->
        <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs mb-3">03</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Tiến trình 4 Bước Trải nghiệm</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Tuân thủ chu trình sư phạm: 1. Quan sát → 2. Thể hiện → 3. Thảo luận → 4. Vận dụng sáng tạo vào đời sống.</p>
        </div>
        <!-- Card 4 -->
        <div class="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40">
          <div class="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center font-bold text-xs mb-3">04</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">An toàn, Tái chế &amp; Bản quyền</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Thiết kế xanh Upcycling bảo vệ môi trường, sử dụng vật liệu an toàn và tôn trọng tuyệt đối quyền sở hữu trí tuệ.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM MAP TABLE -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-850 shadow-sm border border-slate-200/80 dark:border-slate-800">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-map-location-dot text-rose-500"></i> Bản Đồ Chương Trình SGK Mĩ Thuật 9
        </h3>
        <span class="text-xs text-slate-500 font-medium hidden sm:inline">Bộ sách Kết nối tri thức với cuộc sống</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="border-b-2 border-slate-200 dark:border-slate-700 text-slate-400 font-bold uppercase tracking-wider">
              <th class="py-3 px-3.5">Chủ đề</th>
              <th class="py-3 px-3.5">Tên bài học</th>
              <th class="py-3 px-3.5">Trang SGK</th>
              <th class="py-3 px-3.5">Từ khoá trọng tâm</th>
            </tr>
          </thead>
          <tbody>
            ${programMapRows}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- TWO-COLUMN WORKSPACE LAYOUT -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <!-- LEFT SIDEBAR: STICKY NAVIGATION (4 COLS) -->
      <aside class="hidden lg:block lg:col-span-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar p-5 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 dark:border-slate-800">
          <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-bars-staggered text-rose-500"></i> Mục Lục 8 Chủ Đề
          </h4>
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">16 Bài</span>
        </div>

        <nav class="space-y-1">
          ${sidebarNavHtml}
        </nav>

        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <button onclick="toggleGlossaryModal(true)" class="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center justify-between border border-slate-200 dark:border-slate-700">
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-book-bookmark text-rose-500"></i> Sổ tay 10 Thuật ngữ
            </span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
          </button>
          <a href="#trang-nguyen-exam" class="block w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-black shadow-sm transition text-center">
            <i class="fa-solid fa-trophy mr-1.5"></i> Đấu Trường Trạng Nguyên
          </a>
        </div>
      </aside>

      <!-- RIGHT COLUMN: MAIN CONTENT ARTICLES (8 COLS) -->
      <main class="lg:col-span-8 space-y-12">
        ${mainContentHtml}

        <!-- TRẠNG NGUYÊN EXAM 60:00 SECTION -->
        <section id="trang-nguyen-exam" class="scroll-mt-24 pt-8 border-t-2 border-slate-200 dark:border-slate-800">
          <div class="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-600 to-rose-700 text-white shadow-2xl relative overflow-hidden mb-8">
            <div class="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider mb-2">
                  <i class="fa-solid fa-crown text-yellow-300"></i> ĐẤU TRƯỜNG TRẠNG NGUYÊN MĨ THUẬT 9
                </div>
                <h3 class="text-2xl sm:text-3xl font-black mb-2">Khảo Sát Toàn Diện 25 Câu Hỏi</h3>
                <p class="text-white/90 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Đánh giá tổng hợp kiến thức từ Chủ đề 1 đến Chủ đề 8: Hội hoạ, Thời trang, Nghệ thuật đương đại, Thiết kế bìa sách, Phù điêu, Rối nước và Hướng nghiệp.
                </p>
              </div>

              <!-- Exam Countdown Timer -->
              <div class="text-center bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/20 min-w-[140px]">
                <div class="text-xs uppercase font-bold text-amber-200 mb-1">Thời gian còn lại</div>
                <div id="exam-timer" class="text-3xl sm:text-4xl font-mono font-black text-yellow-300">60:00</div>
              </div>
            </div>
          </div>

          <!-- Score Banner (Hidden initially) -->
          <div id="exam-score-banner" class="hidden mb-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border-4 border-amber-400 text-center animate-bounce-once">
            <div id="exam-score-text" class="text-4xl font-black text-rose-600 dark:text-rose-400 mb-2">0 / 25 Điểm</div>
            <p id="exam-feedback-text" class="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto"></p>
          </div>

          <!-- Exam Questions Container -->
          <div class="space-y-6" id="exam-questions-container">
            ${examQuestionsHtml}
          </div>

          <!-- Submit Button -->
          <div class="mt-8 text-center">
            <button onclick="submitExam()" class="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-black text-base shadow-lg shadow-amber-500/25 transition active:scale-95 flex items-center gap-2 mx-auto">
              <i class="fa-solid fa-paper-plane"></i> Nộp Bài Thi Trạng Nguyên
            </button>
          </div>
        </section>
      </main>
    </div>
  </div>

  <!-- GLOSSARY MODAL (10 CORE ART TERMS) -->
  <div id="glossary-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
      <!-- Modal Header -->
      <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 flex items-center justify-center font-black">
            <i class="fa-solid fa-spell-check text-lg"></i>
          </div>
          <div>
            <h3 class="text-lg font-black text-slate-900 dark:text-white">10 Từ Khoá Mĩ Thuật Cốt Lõi Lớp 9</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Bảng tra cứu thuật ngữ chuẩn SGK Kết nối tri thức</p>
          </div>
        </div>
        <button onclick="toggleGlossaryModal(false)" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-base"></i>
        </button>
      </div>

      <!-- Modal Body (Grid of Terms) -->
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${glossaryGridHtml}
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-right">
        <button onclick="toggleGlossaryModal(false)" class="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs transition">
          Đóng cửa sổ
        </button>
      </div>
    </div>
  </div>

  <!-- FLOATING BACK-TO-TOP BUTTON -->
  <button id="back-to-top" onclick="window.scrollTo({top:0, behavior:'smooth'})" class="fixed bottom-6 right-6 z-30 hidden w-11 h-11 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 flex items-center justify-center transition active:scale-95">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // 1. DATASETS
    const LESSON_DATA = ${JSON.stringify(lessonsData)};
    const EXAM_DATA = ${JSON.stringify(examQuestions)};

    // 2. THEME TOGGLE (DARK / LIGHT)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElem = document.documentElement;

    function applyTheme(isDark) {
      if (isDark) {
        htmlElem.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        htmlElem.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      applyTheme(true);
    } else {
      applyTheme(false);
    }

    themeToggleBtn.addEventListener('click', () => {
      applyTheme(!htmlElem.classList.contains('dark'));
    });

    // 3. GLOSSARY MODAL TOGGLE
    function toggleGlossaryModal(show) {
      const modal = document.getElementById('glossary-modal');
      if (show) {
        modal.classList.remove('hidden');
      } else {
        modal.classList.add('hidden');
      }
    }

    document.getElementById('glossary-modal').addEventListener('click', (e) => {
      if (e.target.id === 'glossary-modal') {
        toggleGlossaryModal(false);
      }
    });

    // 4. BACK TO TOP
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('back-to-top');
      if (window.scrollY > 400) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });

    // 5. LESSON QUIZ CHECKER
    function checkLessonQuiz(lessonId) {
      const lesson = LESSON_DATA.find(l => l.id === lessonId);
      if (!lesson || !lesson.quiz) return;

      let score = 0;
      lesson.quiz.forEach((qItem, qIdx) => {
        const radios = document.getElementsByName('quiz-' + lessonId + '-' + qIdx);
        let selectedVal = null;
        for (let r of radios) {
          if (r.checked) {
            selectedVal = parseInt(r.value, 10);
            break;
          }
        }

        const fb = document.getElementById('feedback-' + lessonId + '-' + qIdx);
        fb.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200', 'bg-rose-50', 'border-rose-300', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');

        if (selectedVal === qItem.answer) {
          score++;
          fb.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200');
          fb.innerHTML = '<strong class="font-bold text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong> ' + qItem.explain;
        } else {
          fb.classList.add('bg-rose-50', 'border-rose-300', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');
          fb.innerHTML = '<strong class="font-bold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa đúng!</strong> ' + qItem.explain;
        }
      });

      const summary = document.getElementById('quiz-summary-' + lessonId);
      const scoreText = document.getElementById('quiz-score-text-' + lessonId);
      summary.classList.remove('hidden');
      scoreText.innerHTML = 'Kết quả: ' + score + ' / ' + lesson.quiz.length + ' câu đúng (' + Math.round((score/lesson.quiz.length)*100) + '%)';
    }

    // 6. TRẠNG NGUYÊN EXAM TIMER & GRADER
    let examTimeSeconds = 60 * 60; // 60 minutes
    let examInterval = null;

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

    startExamTimer();

    function submitExam() {
      if (examInterval) clearInterval(examInterval);

      let score = 0;
      EXAM_DATA.forEach((eq, idx) => {
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

      const banner = document.getElementById('exam-score-banner');
      const scoreText = document.getElementById('exam-score-text');
      const fbText = document.getElementById('exam-feedback-text');
      banner.classList.remove('hidden');

      scoreText.textContent = score + ' / 25 Điểm';
      const pct = Math.round((score / 25) * 100);
      if (pct >= 90) {
        fbText.textContent = 'Xuất sắc! Em đạt danh hiệu Trạng Nguyên Mĩ Thuật 9 với tư duy tạo hình và thiết kế xuất chúng!';
      } else if (pct >= 70) {
        fbText.textContent = 'Khá giỏi! Em nắm rất chắc các nguyên lí bố cục, màu sắc và lịch sử nghệ thuật.';
      } else {
        fbText.textContent = 'Em hãy rà soát lại các chủ đề kiến thức và thử sức lại để đạt điểm tuyệt đối nhé!';
      }

      banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  </script>
</body>
</html>
`;

// Write to courses/mithuat_9.html
const outMithuat9 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_9.html';
fs.writeFileSync(outMithuat9, fullHtml, 'utf8');
console.log('Saved mithuat_9.html, size:', fullHtml.length);

// Copy to courses/art_9.html
const outArt9 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/art_9.html';
fs.writeFileSync(outArt9, fullHtml, 'utf8');
console.log('Saved art_9.html, size:', fullHtml.length);
