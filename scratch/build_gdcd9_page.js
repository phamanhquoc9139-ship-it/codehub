// build_gdcd9_page.js - Trình biên dịch trang học liệu điện tử GDCD 9

const fs = require('fs');
const path = require('path');
const { gdcd9Lessons } = require('./gdcd9_data.js');
const gdcd9Terms = require('./gdcd9_terms.js');
const gdcd9Diagrams = require('./gdcd9_diagrams.js');
const { legalCaseAnalyzerWidget } = require('./gdcd9_widgets.js');
const { gdcd9ExamQuestions } = require('./gdcd9_exam.js');

function generateHTML(lang = 'vi') {
  const isEn = lang === 'en';
  const pageTitle = isEn 
    ? "Civic Education 9 — Core Knowledge | Global Connected Knowledge" 
    : "Giáo Dục Công Dân 9 — Kiến Thức Cốt Lõi | Kết Nối Tri Thức";
  
  const switchUrl = isEn ? "giaoduccongdan_9.html" : "civiceducation_9.html";
  const switchLabel = isEn ? "Tiếng Việt" : "English";

  // Build Sidebar Links
  let sidebarLinks = '';
  gdcd9Lessons.forEach((l, idx) => {
    sidebarLinks += `
      <a href="#${l.id}" class="lesson-nav-link flex items-center justify-between py-2 px-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 text-xs font-medium transition group border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/50" data-id="${l.id}">
        <span class="truncate flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-[10px] group-hover:scale-110 transition flex-shrink-0">${idx + 1}</span>
          <span class="truncate">${l.title}</span>
        </span>
        <i class="fa-solid fa-chevron-right text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-0.5"></i>
      </a>
    `;
  });

  // Build Lessons Content
  let lessonsHtml = '';
  gdcd9Lessons.forEach((lesson, index) => {
    const diagramSvg = gdcd9Diagrams[lesson.diagramKey] || `
      <div class="p-6 text-center text-slate-500 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <i class="fa-solid fa-diagram-project text-3xl mb-2 text-indigo-400"></i>
        <p class="text-sm font-semibold">${lesson.title} - Sơ đồ trực quan</p>
      </div>
    `;

    // Render sections
    let sectionsHtml = '';
    lesson.sections.forEach(sec => {
      sectionsHtml += `
        <div class="mb-5 bg-white/70 dark:bg-slate-900/70 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
            <span class="w-2 h-4 rounded bg-indigo-600 dark:bg-indigo-400 inline-block"></span>
            ${sec.title}
          </h4>
          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            ${sec.content}
          </div>
        </div>
      `;
    });

    // Check if widget should be injected (Lesson 9)
    let widgetHtml = '';
    if (lesson.id === 'bai-9') {
      widgetHtml = legalCaseAnalyzerWidget;
    }

    // Render Quizzes
    let quizzesHtml = '';
    lesson.quizzes.forEach((q, qIdx) => {
      const qText = q.question || q.q || '';
      const correctIdx = (typeof q.correct !== 'undefined') ? q.correct : ((typeof q.answer !== 'undefined') ? q.answer : 0);
      const explainText = (q.explain || '').replace(/"/g, '&quot;');

      let optionsHtml = '';
      q.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <button type="button" 
            onclick="checkQuizAnswer('${lesson.id}', ${qIdx}, ${optIdx}, ${correctIdx})"
            class="quiz-opt-${lesson.id}-${qIdx} w-full text-left p-2.5 sm:p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 transition flex items-start gap-2.5">
            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">${String.fromCharCode(65 + optIdx)}</span>
            <span class="flex-1">${opt}</span>
          </button>
        `;
      });

      quizzesHtml += `
        <div class="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 mb-3.5" id="quiz-${lesson.id}-${qIdx}">
          <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2.5 flex items-start gap-2">
            <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold mt-0.5 flex-shrink-0">Câu ${qIdx + 1}</span>
            <span class="flex-1">${qText}</span>
          </p>
          <div class="space-y-2">
            ${optionsHtml}
          </div>
          <div id="feedback-${lesson.id}-${qIdx}" data-explain="${explainText}" class="hidden mt-3 p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    });

    lessonsHtml += `
      <!-- LESSON ${index + 1}: ${lesson.title} -->
      <section id="${lesson.id}" class="lesson-section scroll-mt-24 mb-10 p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm transition hover:shadow-md">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-sm">${lesson.number}</span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-medium"><i class="fa-regular fa-clock mr-1"></i>${lesson.duration}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              ${lesson.title}
            </h3>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="shareLesson('${lesson.id}')" class="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-1.5" title="Chia sẻ bài học">
              <i class="fa-regular fa-share-from-square"></i>
              <span class="hidden sm:inline">Chia sẻ</span>
            </button>
          </div>
        </div>

        <!-- Subtitle & Quote -->
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed italic bg-slate-50 dark:bg-slate-950/40 p-3 rounded-xl border-l-4 border-indigo-500">
          "${lesson.sub}"
        </p>

        <!-- Objectives -->
        <div class="mb-5 p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <strong class="text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-bullseye text-indigo-500"></i> Mục tiêu bài học:
          </strong>
          <p class="leading-relaxed">${lesson.objectives}</p>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-6">
          <div class="flex items-center justify-between mb-2 px-1">
            <span class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-network-wired text-indigo-500"></i> Sơ đồ trực quan hoá kiến thức
            </span>
            <span class="text-[11px] text-slate-500 dark:text-slate-400">Đồ hoạ vector tương tác SVG</span>
          </div>
          <div class="diagram-viewport p-2 sm:p-4 rounded-xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
            ${diagramSvg}
          </div>
        </div>

        <!-- Sections Content -->
        <div class="space-y-4 mb-6">
          ${sectionsHtml}
        </div>

        <!-- Interactive Widget (Lesson 9) -->
        ${widgetHtml}

        <!-- Quizzes Section -->
        <div class="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-list-check text-indigo-500"></i>
              Bài tập củng cố nhanh (${lesson.quizzes.length} câu)
            </h4>
            <span class="text-xs text-slate-500 dark:text-slate-400">Chọn phương án đúng</span>
          </div>
          <div class="space-y-3">
            ${quizzesHtml}
          </div>
        </div>
      </section>
    `;
  });

  // Terms Modal List HTML
  let termsCardsHtml = '';
  gdcd9Terms.forEach((term, idx) => {
    termsCardsHtml += `
      <div class="term-card p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition" data-keyword="${term.term.toLowerCase()} ${term.badge.toLowerCase()} ${term.desc.toLowerCase()}">
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <h5 class="text-sm font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 text-xs font-bold flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
              <i class="fa-solid ${term.icon || 'fa-bookmark'}"></i>
            </span>
            ${term.term}
          </h5>
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-${term.color || 'indigo'}-100 dark:bg-${term.color || 'indigo'}-950/80 text-${term.color || 'indigo'}-700 dark:text-${term.color || 'indigo'}-300">${term.badge}</span>
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${term.desc}</p>
      </div>
    `;
  });

  // Exam Questions Modal HTML
  let examQuestionsHtml = '';
  gdcd9ExamQuestions.forEach((eq, eqIdx) => {
    let optsHtml = '';
    eq.options.forEach((opt, oIdx) => {
      optsHtml += `
        <label class="exam-option-label flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 cursor-pointer transition">
          <input type="radio" name="exam_q_${eqIdx}" value="${oIdx}" class="mt-1 accent-indigo-600 flex-shrink-0">
          <span>${String.fromCharCode(65 + oIdx)}. ${opt}</span>
        </label>
      `;
    });

    examQuestionsHtml += `
      <div class="exam-question-item p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800" id="exam-item-${eqIdx}">
        <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2.5 flex items-start gap-2">
          <span class="w-6 h-6 rounded bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">${eqIdx + 1}</span>
          <span class="flex-1">${eq.q}</span>
        </p>
        <div class="space-y-2 mb-2">
          ${optsHtml}
        </div>
        <div id="exam-explain-${eqIdx}" class="hidden p-3 rounded-lg text-xs leading-relaxed bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-950 dark:text-indigo-200">
          <strong>Giải thích:</strong> ${eq.explain}
        </div>
      </div>
    `;
  });

  return `<!DOCTYPE html>
<html lang="${lang}" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eef2ff',
              100: '#e0e7ff',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81',
            }
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Merriweather:ital,wght@0,400;0,700;1,300&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    .font-serif {
      font-family: 'Merriweather', serif;
    }
    /* Custom scrollbars */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(99, 102, 241, 0.4);
      border-radius: 999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(99, 102, 241, 0.7);
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- TOP NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
      <!-- Left: Logo & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-600 dark:text-slate-300" title="Quay lại danh mục">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-indigo-500/30">
            <i class="fa-solid fa-scale-balanced"></i>
          </div>
          <div>
            <h1 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight">
              GIÁO DỤC CÔNG DÂN 9
            </h1>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Kết Nối Tri Thức Với Cuộc Sống</p>
          </div>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Handbook Modal Button -->
        <button onclick="toggleModal('handbook-modal', true)" class="px-2.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 text-xs font-bold transition flex items-center gap-1.5">
          <i class="fa-solid fa-book-bookmark text-indigo-500"></i>
          <span class="hidden md:inline">Sổ tay thuật ngữ</span>
          <span class="px-1.5 py-0.2 rounded-full bg-indigo-200 dark:bg-indigo-900 text-[10px]">12</span>
        </button>

        <!-- Trạng Nguyên Exam Button -->
        <button onclick="toggleModal('exam-modal', true)" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm shadow-amber-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-award"></i>
          <span class="hidden sm:inline">Thi Trạng Nguyên</span>
        </button>

        <!-- Language Switch -->
        <a href="${switchUrl}" class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold transition flex items-center gap-1">
          <i class="fa-solid fa-language text-slate-400"></i>
          <span>${switchLabel}</span>
        </a>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" class="w-8 h-8 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>

        <!-- Mobile TOC Toggle -->
        <button onclick="toggleMobileSidebar()" class="lg:hidden w-8 h-8 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN CONTAINER -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- SIDEBAR (TOC) -->
      <aside id="sidebar-toc" class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 space-y-4">
          <!-- Overview Card -->
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span class="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-list-ol text-indigo-500"></i> Danh mục 10 bài
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">KNTT 9</span>
            </div>
            <!-- Search Lesson Input -->
            <div class="relative mb-3">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
              <input type="text" id="lesson-search-input" onkeyup="filterSidebarLessons()" placeholder="Tìm nhanh bài học..." class="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500">
            </div>
            <!-- Links Container -->
            <div class="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1" id="sidebar-links-container">
              ${sidebarLinks}
            </div>
          </div>

          <!-- Quick Stats / Fast Tip -->
          <div class="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-200/50 dark:border-indigo-900/50 text-xs text-slate-700 dark:text-slate-300">
            <div class="flex items-center gap-2 mb-1.5 text-indigo-700 dark:text-indigo-300 font-bold">
              <i class="fa-solid fa-lightbulb"></i>
              <span>Phương châm công dân</span>
            </div>
            <p class="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
              "Sống và làm việc theo Hiến pháp và Pháp luật. Thượng tôn pháp luật là thước đo của văn minh và tiến bộ xã hội."
            </p>
          </div>
        </div>
      </aside>

      <!-- MAIN CONTENT -->
      <main class="lg:col-span-3 space-y-6">
        
        <!-- HERO BANNER -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white shadow-lg relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="relative z-10 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-semibold mb-3 border border-white/10">
              <i class="fa-solid fa-shield-halved text-amber-300"></i> Chuẩn Chương Trình GDPT 2018
            </div>
            <h2 class="text-2xl sm:text-3xl font-black mb-3 leading-tight tracking-tight">
              GIÁO DỤC CÔNG DÂN 9 — KIẾN THỨC CỐT LÕI
            </h2>
            <p class="text-indigo-100 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
              Hệ thống toàn diện 10 bài học chuẩn SGK Kết nối tri thức với cuộc sống. Tích hợp 10 sơ đồ tư duy vector trực quan, 40 câu hỏi củng cố tương tác, mô phỏng vụ án pháp luật 4 cấp độ và đề thi Trạng Nguyên 25 câu có chứng nhận.
            </p>
            <div class="flex flex-wrap items-center gap-4 text-xs font-medium text-indigo-200">
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                <i class="fa-solid fa-book-open text-amber-300"></i> 10 Bài học SGK
              </span>
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                <i class="fa-solid fa-diagram-project text-sky-300"></i> 10 Sơ đồ Vector
              </span>
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                <i class="fa-solid fa-gavel text-rose-300"></i> Xử lí tình huống pháp luật
              </span>
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                <i class="fa-solid fa-trophy text-emerald-300"></i> 25 Câu Trạng Nguyên
              </span>
            </div>
          </div>
        </div>

        <!-- 10 LESSONS CONTAINER -->
        <div class="space-y-8">
          ${lessonsHtml}
        </div>

      </main>

    </div>
  </div>

  <!-- SỔ TAY THUẬT NGỮ MODAL -->
  <div id="handbook-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Sổ Tay 12 Thuật Ngữ & Căn Cứ Pháp Lí</h3>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Định nghĩa chuẩn xác theo SGK GDCD 9 & Pháp luật hiện hành</p>
          </div>
        </div>
        <button onclick="toggleModal('handbook-modal', false)" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>
      <!-- Search Input -->
      <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-slate-400 text-xs"></i>
          <input type="text" id="terms-search" onkeyup="filterTermsModal()" placeholder="Tìm thuật ngữ (VD: Lí tưởng, Khoan dung, Vi phạm hình sự, Thuế...)" class="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500">
        </div>
      </div>
      <!-- Modal Body -->
      <div class="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1" id="terms-list-container">
        ${termsCardsHtml}
      </div>
    </div>
  </div>

  <!-- THI TRẠNG NGUYÊN MODAL -->
  <div id="exam-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-500/10 to-orange-500/10">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">Hội Thi Trạng Nguyên Công Dân & Pháp Luật 9</h3>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Đề thi chuẩn hoá 25 câu trắc nghiệm tổng hợp toàn khoá</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-right">
            <span class="text-[10px] text-slate-400 uppercase font-semibold">Thời gian</span>
            <div id="exam-timer" class="text-sm font-mono font-bold text-amber-600 dark:text-amber-400">25:00</div>
          </div>
          <button onclick="toggleModal('exam-modal', false)" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center">
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
      </div>
      <!-- Exam Body -->
      <div class="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1" id="exam-questions-container">
        ${examQuestionsHtml}
      </div>
      <!-- Modal Footer -->
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs text-slate-500 dark:text-slate-400" id="exam-status-text">
          Đã trả lời: <span id="answered-count" class="font-bold text-indigo-600 dark:text-indigo-400">0</span>/25 câu
        </div>
        <div class="flex items-center gap-2">
          <button onclick="resetExam()" class="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            Làm lại từ đầu
          </button>
          <button onclick="submitExam()" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm transition">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- SCRIPT LOGIC -->
  <script>
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    themeToggle.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    });

    // Modal toggles
    function toggleModal(id, show) {
      const modal = document.getElementById(id);
      if (show) {
        modal.classList.remove('hidden');
        if (id === 'exam-modal' && !examTimerInterval) {
          startExamTimer();
        }
      } else {
        modal.classList.add('hidden');
      }
    }

    // Filter terms modal
    function filterTermsModal() {
      const q = document.getElementById('terms-search').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.term-card');
      cards.forEach(c => {
        const kw = c.getAttribute('data-keyword') || '';
        if (kw.includes(q)) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    }

    // Filter sidebar lessons
    function filterSidebarLessons() {
      const q = document.getElementById('lesson-search-input').value.toLowerCase().trim();
      const links = document.querySelectorAll('.lesson-nav-link');
      links.forEach(l => {
        const text = l.innerText.toLowerCase();
        if (text.includes(q)) {
          l.classList.remove('hidden');
        } else {
          l.classList.add('hidden');
        }
      });
    }

    // Lesson share link
    function shareLesson(id) {
      const url = window.location.origin + window.location.pathname + '#' + id;
      navigator.clipboard.writeText(url).then(() => {
        alert('Đã sao chép liên kết bài học vào bộ nhớ tạm: ' + url);
      }).catch(() => {
        alert('Liên kết bài học: ' + url);
      });
    }

    // Practice Quiz Check
    function checkQuizAnswer(lessonId, qIdx, selectedOpt, correctOpt) {
      const buttons = document.querySelectorAll('.quiz-opt-' + lessonId + '-' + qIdx);
      const feedback = document.getElementById('feedback-' + lessonId + '-' + qIdx);
      
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-50', 'dark:hover:bg-slate-800/80');
        if (idx === correctOpt) {
          btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/50', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200');
        } else if (idx === selectedOpt) {
          btn.classList.add('bg-rose-50', 'dark:bg-rose-950/50', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
        }
      });

      const explainText = feedback.getAttribute('data-explain') || '';
      feedback.classList.remove('hidden');
      if (selectedOpt === correctOpt) {
        feedback.className = "mt-3 p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200";
        feedback.innerHTML = "<strong class='text-emerald-700 dark:text-emerald-300'><i class='fa-solid fa-circle-check mr-1'></i>Chính xác!</strong> " + (explainText ? "<span class='mt-1 block text-slate-700 dark:text-slate-300'>" + explainText + "</span>" : "Bạn đã chọn phương án đúng.");
      } else {
        feedback.className = "mt-3 p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200";
        feedback.innerHTML = "<strong class='text-rose-700 dark:text-rose-300'><i class='fa-solid fa-circle-xmark mr-1'></i>Chưa chính xác!</strong> Đáp án đúng là <strong>" + String.fromCharCode(65 + correctOpt) + "</strong>." + (explainText ? "<span class='mt-1 block text-slate-700 dark:text-slate-300'><strong>Giải thích:</strong> " + explainText + "</span>" : " Hãy đọc kĩ lại phần kiến thức bài học phía trên.");
      }
    }

    // Legal Case Analyzer Logic (Bài 9)
    const legalCases = [
      {
        title: "Tình huống 1: Anh B điều khiển xe máy vượt đèn đỏ tại ngã tư",
        desc: "Anh B (25 tuổi) điều khiển xe máy chở hàng vội vã vượt đèn đỏ ở ngã tư, va quẹt nhẹ làm vỡ gương xe của một người đi đường khác, không gây thương tích cho ai.",
        correctViolation: "hanh_chinh",
        correctLiability: "hanh_chinh",
        violationName: "Vi phạm hành chính",
        liabilityName: "Trách nhiệm hành chính",
        lawDoc: "Nghị định 100/2019/NĐ-CP (sửa đổi bổ sung bởi NĐ 123/2021/NĐ-CP)",
        explanation: "Hành vi vượt đèn đỏ xâm phạm trật tự quản lí hành chính nhà nước về an toàn giao thông đường bộ, chưa đến mức cấu thành tội phạm hình sự. Anh B phải chịu xử phạt tiền và tước quyền sử dụng giấy phép lái xe có thời hạn (trách nhiệm hành chính)."
      },
      {
        title: "Tình huống 2: Đối tượng C (19 tuổi) cạy khoá trộm cắp xe máy SH trị giá 85 triệu đồng",
        desc: "Lợi dụng chủ nhà sơ hở, C (19 tuổi, có đủ năng lực hành vi) đã dùng kìm cộng lực bẻ khoá cổng, dắt trộm chiếc xe máy SH trị giá 85 triệu đồng mang đi tiêu thụ thì bị bắt giữ.",
        correctViolation: "hinh_su",
        correctLiability: "hinh_su",
        violationName: "Vi phạm hình sự (Tội phạm)",
        liabilityName: "Trách nhiệm hình sự",
        lawDoc: "Điều 173 Bộ luật Hình sự 2015 (sửa đổi, bổ sung 2017)",
        explanation: "Hành vi trộm cắp tài sản có giá trị từ 2 triệu đồng trở lên (ở đây là 85 triệu) có tính chất nguy hiểm rất cao cho xã hội, xâm phạm quyền sở hữu tài sản của công dân, cấu thành tội phạm theo Bộ luật Hình sự. C phải chịu trách nhiệm hình sự (phạt tù)."
      },
      {
        title: "Tình huống 3: Ông D vay 50 triệu đồng của bà M có hợp đồng viết tay nhưng đến hạn cố tình không trả",
        desc: "Ông D vay của bà M số tiền 50 triệu đồng để kinh doanh với cam kết trả sau 6 tháng. Đến hạn trả nợ, dù có tiền nhưng ông D cố tình chây ì, tìm mọi lí do thoái thác không chịu thanh toán.",
        correctViolation: "dan_su",
        correctLiability: "dan_su",
        violationName: "Vi phạm dân sự",
        liabilityName: "Trách nhiệm dân sự",
        lawDoc: "Điều 463 & Điều 466 Bộ luật Dân sự 2015",
        explanation: "Đây là hành vi vi phạm nghĩa vụ thực hiện hợp đồng vay tài sản, xâm phạm quan hệ tài sản giữa các chủ thể bình đẳng trong giao lưu dân sự. Ông D phải chịu trách nhiệm dân sự: buộc phải thanh toán toàn bộ nợ gốc, tiền lãi quá hạn và bồi thường thiệt hại (nếu có)."
      },
      {
        title: "Tình huống 4: Anh K (nhân viên bảo vệ cơ quan) tự ý bỏ ca trực đêm để đi chơi game",
        desc: "Anh K là nhân viên hợp đồng bảo vệ tại trường học. Trong ca trực đêm được phân công, K tự ý khoá cổng ngoài rồi bỏ đi chơi game thâu đêm, may mắn không xảy ra mất mát tài sản trường học.",
        correctViolation: "ki_luat",
        correctLiability: "ki_luat",
        violationName: "Vi phạm kỉ luật",
        liabilityName: "Trách nhiệm kỉ luật",
        lawDoc: "Điều 122 & Điều 125 Bộ luật Lao động 2019 và Nội quy cơ quan",
        explanation: "Hành vi tự ý bỏ vị trí trực vi phạm nội quy, quy chế lao động nội bộ của đơn vị. Anh K phải chịu trách nhiệm kỉ luật lao động (như khiển trách, kéo dài thời hạn nâng lương hoặc sa thải theo quy định của đơn vị)."
      }
    ];

    let currentCaseIdx = 0;

    function selectLegalCase(idx) {
      currentCaseIdx = idx;
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('btn-case-' + i);
        if (btn) {
          if (i === idx) {
            btn.className = "p-2 rounded-xl bg-red-600 text-white transition text-center shadow-sm font-semibold";
          } else {
            btn.className = "p-2 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-slate-700 transition text-center border border-gray-200 dark:border-slate-700 font-semibold";
          }
        }
      }

      const c = legalCases[idx];
      document.getElementById('case-title').innerText = c.title;
      document.getElementById('case-desc').innerText = c.desc;
      document.getElementById('user-violation-type').value = 'none';
      document.getElementById('user-liability-type').value = 'none';
      
      const badge = document.getElementById('case-result-badge');
      if (badge) badge.classList.add('hidden');
      const explain = document.getElementById('case-explanation');
      if (explain) explain.classList.add('hidden');
    }

    function checkLegalCaseAnswer() {
      const vType = document.getElementById('user-violation-type').value;
      const lType = document.getElementById('user-liability-type').value;
      const c = legalCases[currentCaseIdx];
      const badge = document.getElementById('case-result-badge');
      const explain = document.getElementById('case-explanation');

      if (vType === 'none' || lType === 'none') {
        alert('Vui lòng chọn cả Loại vi phạm và Trách nhiệm pháp lí tương ứng trước khi kiểm tra!');
        return;
      }

      const isViolationCorrect = (vType === c.correctViolation);
      const isLiabilityCorrect = (lType === c.correctLiability);

      badge.classList.remove('hidden');
      explain.classList.remove('hidden');

      if (isViolationCorrect && isLiabilityCorrect) {
        badge.className = "text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300";
        badge.innerHTML = "<i class='fa-solid fa-circle-check mr-1'></i> Phân tích chuẩn xác 100%!";
        explain.innerHTML = \`
          <div class="space-y-1.5 text-xs text-emerald-900 dark:text-emerald-200">
            <p><strong class="text-emerald-700 dark:text-emerald-300">✔ Loại vi phạm:</strong> \${c.violationName}</p>
            <p><strong class="text-emerald-700 dark:text-emerald-300">✔ Trách nhiệm pháp lí:</strong> \${c.liabilityName}</p>
            <p><strong class="text-emerald-700 dark:text-emerald-300">✔ Căn cứ pháp luật:</strong> \${c.lawDoc}</p>
            <p class="pt-1 text-slate-700 dark:text-slate-300">\${c.explanation}</p>
          </div>
        \`;
      } else {
        badge.className = "text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300";
        badge.innerHTML = "<i class='fa-solid fa-triangle-exclamation mr-1'></i> Chưa chính xác!";
        explain.innerHTML = \`
          <div class="space-y-1.5 text-xs text-rose-900 dark:text-rose-200">
            <p><strong>Đáp án đúng:</strong></p>
            <p>- Loại vi phạm: <span class="font-bold underline">\${c.violationName}</span></p>
            <p>- Trách nhiệm pháp lí: <span class="font-bold underline">\${c.liabilityName}</span></p>
            <p>- Căn cứ pháp luật: \${c.lawDoc}</p>
            <p class="pt-1 text-slate-700 dark:text-slate-300">\${c.explanation}</p>
          </div>
        \`;
      }
    }

    // Exam State & Timer
    const examQuestionsData = ${JSON.stringify(gdcd9ExamQuestions)};
    let examTimerInterval = null;
    let examTimeSeconds = 25 * 60;

    function startExamTimer() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        if (examTimeSeconds <= 0) {
          clearInterval(examTimerInterval);
          alert('Hết giờ làm bài! Hệ thống đang tự động chấm điểm bài thi.');
          submitExam();
          return;
        }
        examTimeSeconds--;
        const mins = Math.floor(examTimeSeconds / 60);
        const secs = examTimeSeconds % 60;
        document.getElementById('exam-timer').innerText = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }, 1000);
    }

    // Track answered questions in exam
    document.addEventListener('change', (e) => {
      if (e.target && e.target.name && e.target.name.startsWith('exam_q_')) {
        let count = 0;
        for (let i = 0; i < examQuestionsData.length; i++) {
          if (document.querySelector('input[name="exam_q_' + i + '"]:checked')) {
            count++;
          }
        }
        document.getElementById('answered-count').innerText = count;
      }
    });

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;
      let unanswered = 0;

      for (let i = 0; i < examQuestionsData.length; i++) {
        const selected = document.querySelector('input[name="exam_q_' + i + '"]:checked');
        const explainBox = document.getElementById('exam-explain-' + i);
        const itemBox = document.getElementById('exam-item-' + i);
        
        if (explainBox) explainBox.classList.remove('hidden');

        if (!selected) {
          unanswered++;
          if (itemBox) itemBox.classList.add('border-amber-400');
        } else {
          const val = parseInt(selected.value);
          if (val === examQuestionsData[i].answer) {
            score++;
            if (itemBox) {
              itemBox.classList.remove('border-amber-400', 'border-rose-300');
              itemBox.classList.add('border-emerald-400', 'bg-emerald-50/30', 'dark:bg-emerald-950/20');
            }
          } else {
            if (itemBox) {
              itemBox.classList.remove('border-amber-400', 'border-emerald-400');
              itemBox.classList.add('border-rose-400', 'bg-rose-50/30', 'dark:bg-rose-950/20');
            }
          }
        }
      }

      const pct = Math.round((score / examQuestionsData.length) * 100);
      let rankTitle = '';
      if (score >= 23) {
        rankTitle = 'TRẠNG NGUYÊN CÔNG DÂN & PHÁP LUẬT XUẤT SẮC 🥇';
      } else if (score >= 18) {
        rankTitle = 'BẢNG NHÃN PHÁP LÝ ƯU TÚ 🥈';
      } else if (score >= 13) {
        rankTitle = 'THÁM HOA CÔNG DÂN VỮNG VÀNG 🥉';
      } else {
        rankTitle = 'TIẾP TỤC RÈN LUYỆN Ý THỨC PHÁP LUẬT 📖';
      }

      alert(\`KẾT QUẢ THI TRẠNG NGUYÊN:\n- Điểm số: \${score}/\${examQuestionsData.length} câu (\${pct}%)\n- Số câu chưa chọn: \${unanswered}\n- Danh hiệu: \${rankTitle}\n\nHãy xem lại đáp án và giải thích chi tiết trong từng câu hỏi!\`);
    }

    function resetExam() {
      if (confirm('Bạn có chắc muốn làm lại bài thi từ đầu?')) {
        for (let i = 0; i < examQuestionsData.length; i++) {
          const radios = document.querySelectorAll('input[name="exam_q_' + i + '"]');
          radios.forEach(r => r.checked = false);
          const explainBox = document.getElementById('exam-explain-' + i);
          if (explainBox) explainBox.classList.add('hidden');
          const itemBox = document.getElementById('exam-item-' + i);
          if (itemBox) {
            itemBox.className = 'exam-question-item p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800';
          }
        }
        document.getElementById('answered-count').innerText = '0';
        examTimeSeconds = 25 * 60;
        startExamTimer();
      }
    }
  </script>
</body>
</html>
  `;
}

// Compile Vietnamese and English mirrored versions
const viHtml = generateHTML('vi');
const enHtml = generateHTML('en');

const outViPath = path.resolve(__dirname, '../courses/giaoduccongdan_9.html');
const outEnPath = path.resolve(__dirname, '../courses/civiceducation_9.html');

fs.writeFileSync(outViPath, viHtml, 'utf8');
fs.writeFileSync(outEnPath, enHtml, 'utf8');

console.log('Successfully generated:');
console.log(' - ' + outViPath + ' (' + viHtml.length + ' bytes)');
console.log(' - ' + outEnPath + ' (' + enHtml.length + ' bytes)');
