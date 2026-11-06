// build_gdtc9_page.js - Trình biên dịch trang học liệu điện tử môn Giáo dục thể chất 9

const fs = require('fs');
const path = require('path');
const { partsData, topicsData } = require('./gdtc9_data.js');
const gdtc9Terms = require('./gdtc9_terms.js');
const gdtc9Diagrams = require('./gdtc9_diagrams.js');
const { sportsNutritionCalculatorWidget } = require('./gdtc9_widgets.js');
const gdtc9ExamQuestions = require('./gdtc9_exam.js');
const lessonIllustrations = require('./gdtc9_lesson_illustrations.js');

function generateHTML(lang = 'vi') {
  const isEn = lang === 'en';
  const pageTitle = isEn 
    ? "Physical Education 9 — Core Knowledge | Global Connected Knowledge" 
    : "Giáo Dục Thể Chất 9 — Kiến Thức Cốt Lõi | Kết Nối Tri Thức Với Cuộc Sống";
  
  const switchUrl = isEn ? "gdtc_9.html" : "physical_education_9.html";
  const switchLabel = isEn ? "Tiếng Việt" : "English";

  // Build Sidebar Links grouped by 3 Parts & All 19 Lessons
  let sidebarLinks = '';
  partsData.forEach(part => {
    const topicsInPart = topicsData.filter(t => t.partId === part.id);
    let topicLinks = '';
    topicsInPart.forEach((t, tIdx) => {
      const lessonItems = t.lessons.map((l, lIdx) => {
        const lid = l.id || `lesson-${t.id}-${lIdx + 1}`;
        return `
          <a href="#${lid}" class="lesson-sub-link flex items-center gap-1.5 py-1 px-2 rounded-lg text-[11px] text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/20 transition truncate" title="${l.lessonTitle}">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span class="truncate">${l.lessonTitle}</span>
          </a>
        `;
      }).join('');

      topicLinks += `
        <div class="topic-nav-wrapper mb-2">
          <a href="#${t.id}" class="topic-nav-link flex items-center justify-between py-1.5 px-2.5 rounded-xl hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30 text-slate-800 dark:text-slate-200 text-xs font-bold transition group border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800" data-part="${part.id}" data-id="${t.id}">
            <span class="truncate flex items-center gap-2">
              <span class="w-5 h-5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 flex items-center justify-center text-[10px] font-black shrink-0">${tIdx + 1}</span>
              <span class="truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400">${t.title}</span>
            </span>
            <i class="fa-solid fa-chevron-right text-[9px] text-slate-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5"></i>
          </a>
          <div class="ml-4 pl-2 border-l border-emerald-200/70 dark:border-emerald-900/60 space-y-0.5 mt-1">
            ${lessonItems}
          </div>
        </div>
      `;
    });

    sidebarLinks += `
      <div class="mb-3.5 part-nav-group" data-part="${part.id}">
        <div class="px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl mb-1 flex items-center justify-between border border-emerald-100 dark:border-emerald-900/50">
          <span class="truncate">${part.name}</span>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-white dark:bg-slate-800 shadow-sm font-bold text-emerald-600">${part.topicsCount}</span>
        </div>
        <div class="space-y-0.5 pl-1">
          ${topicLinks}
        </div>
      </div>
    `;
  });

  // Build Topics Content
  let topicsContentHtml = '';
  topicsData.forEach((topic, idx) => {
    const part = partsData.find(p => p.id === topic.partId) || { name: 'Giáo dục thể chất 9', badge: 'Thể chất' };
    const diagramSvg = gdtc9Diagrams[topic.diagramKey] || `
      <div class="p-6 text-center text-slate-500 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <i class="fa-solid fa-person-running text-3xl mb-2 text-emerald-500"></i>
        <p class="text-sm font-semibold">${topic.title} - Sơ đồ trực quan</p>
      </div>
    `;

    // Objectives HTML
    let objectivesHtml = '';
    if (topic.objectives && topic.objectives.length) {
      objectivesHtml = `
        <div class="mb-5 p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <strong class="text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 mb-2 font-bold uppercase tracking-wide text-xs">
            <i class="fa-solid fa-bullseye text-emerald-600"></i> Mục tiêu &amp; Năng lực đạt được:
          </strong>
          <ul class="space-y-1.5">
            ${topic.objectives.map(o => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0 text-xs"></i>
                <span class="leading-relaxed">${o}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    // Lessons HTML
    let lessonsCardsHtml = '';
    topic.lessons.forEach((l, lIdx) => {
      const lid = l.id || `lesson-${topic.id}-${lIdx + 1}`;
      const illuSvg = lessonIllustrations[lid] || '';
      lessonsCardsHtml += `
        <div id="${lid}" class="lesson-card scroll-mt-24 mb-5 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm transition hover:border-emerald-300 dark:hover:border-emerald-700">
          <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
            <span class="w-2.5 h-4 rounded bg-emerald-500 inline-block"></span>
            ${l.lessonTitle}
          </h4>
          ${illuSvg ? `
          <div class="lesson-simulation-box my-3 p-3 sm:p-4 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80 overflow-x-auto">
            <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-shapes text-emerald-600"></i> Mô phỏng kĩ thuật &amp; Nguyên lí thực hành
            </div>
            ${illuSvg}
          </div>
          ` : ''}
          <div>
            ${l.content}
          </div>
        </div>
      `;
    });

    // Check widget injection (Topic 0 has nutrition calculator)
    let widgetHtml = '';
    if (topic.id === 'topic-ktc') {
      widgetHtml = sportsNutritionCalculatorWidget;
    }

    // Quizzes HTML
    let quizzesHtml = '';
    const quizzes = topic.quiz || [];
    quizzes.forEach((q, qIdx) => {
      const qText = q.question || q.q || '';
      const correctIdx = (typeof q.correct !== 'undefined') ? q.correct : ((typeof q.answer !== 'undefined') ? q.answer : 0);
      const explainText = (q.explain || '').replace(/"/g, '&quot;');

      let optionsHtml = '';
      q.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <button type="button" 
            onclick="checkTopicQuiz('${topic.id}', ${qIdx}, ${optIdx}, ${correctIdx})"
            class="quiz-opt-${topic.id}-${qIdx} w-full text-left p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 transition flex items-start gap-2.5">
            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">${String.fromCharCode(65 + optIdx)}</span>
            <span class="flex-1">${opt}</span>
          </button>
        `;
      });

      quizzesHtml += `
        <div class="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 mb-3" id="quiz-${topic.id}-${qIdx}">
          <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2.5 flex items-start gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold mt-0.5 shrink-0">Câu ${qIdx + 1}</span>
            <span class="flex-1">${qText}</span>
          </p>
          <div class="space-y-2">
            ${optionsHtml}
          </div>
          <div id="feedback-${topic.id}-${qIdx}" data-explain="${explainText}" class="hidden mt-3 p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    });

    topicsContentHtml += `
      <!-- TOPIC: ${topic.title} -->
      <section id="${topic.id}" class="topic-section scroll-mt-24 mb-10 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm transition hover:shadow-md">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm">${topic.number}</span>
              <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">${part.name}</span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-medium"><i class="fa-regular fa-clock mr-1"></i>${topic.duration}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              ${topic.title}
            </h3>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="shareTopic('${topic.id}')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-1.5" title="Chia sẻ chủ đề">
              <i class="fa-regular fa-share-from-square"></i>
              <span class="hidden sm:inline">Chia sẻ</span>
            </button>
          </div>
        </div>

        <!-- Subtitle -->
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed italic bg-slate-50 dark:bg-slate-950/40 p-3.5 rounded-2xl border-l-4 border-emerald-500">
          "${topic.sub}"
        </p>

        <!-- Objectives -->
        ${objectivesHtml}

        <!-- Vector SVG Diagram Viewport -->
        <div class="my-6">
          <div class="flex items-center justify-between mb-2 px-1">
            <span class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-person-running text-emerald-600"></i> Đồ họa động lực học &amp; Kĩ thuật trực quan
            </span>
            <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Bản vẽ vector SVG độc quyền</span>
          </div>
          <div class="diagram-viewport p-2 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
            ${diagramSvg}
          </div>
        </div>

        <!-- Interactive Widget (Topic 0) -->
        ${widgetHtml}

        <!-- Lesson Breakdown Cards -->
        <div class="space-y-4 mb-6">
          ${lessonsCardsHtml}
        </div>

        <!-- Quizzes Section -->
        <div class="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-list-check text-emerald-600"></i>
              Bài tập củng cố nhanh (${topic.quiz.length} câu)
            </h4>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Chọn phương án đúng</span>
          </div>
          <div class="space-y-3">
            ${quizzesHtml}
          </div>
        </div>
      </section>
    `;
  });

  // Terms Modal Cards HTML
  let termsCardsHtml = '';
  gdtc9Terms.forEach((term, idx) => {
    termsCardsHtml += `
      <div class="term-card p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition" data-keyword="${term.term.toLowerCase()} ${term.badge.toLowerCase()} ${term.desc.toLowerCase()}">
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <h5 class="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 text-xs font-bold flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
              <i class="fa-solid ${term.icon || 'fa-medal'}"></i>
            </span>
            ${term.term}
          </h5>
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-${term.color || 'emerald'}-100 dark:bg-${term.color || 'emerald'}-950/80 text-${term.color || 'emerald'}-700 dark:text-${term.color || 'emerald'}-300">${term.badge}</span>
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${term.desc}</p>
      </div>
    `;
  });

  // Exam Questions Modal HTML
  let examQuestionsHtml = '';
  gdtc9ExamQuestions.forEach((eq, eqIdx) => {
    let optsHtml = '';
    eq.options.forEach((opt, oIdx) => {
      optsHtml += `
        <label class="exam-option-label flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 cursor-pointer transition">
          <input type="radio" name="exam_q_${eqIdx}" value="${oIdx}" class="mt-1 accent-emerald-600 shrink-0">
          <span><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}</span>
        </label>
      `;
    });

    examQuestionsHtml += `
      <div class="exam-question-item p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800" id="exam-item-${eqIdx}">
        <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2.5 flex items-start gap-2">
          <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">${eqIdx + 1}</span>
          <span class="flex-1">${eq.q}</span>
        </p>
        <div class="space-y-2 mb-2">
          ${optsHtml}
        </div>
        <div id="exam-explain-${eqIdx}" class="hidden p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200">
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
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
            }
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(16, 185, 129, 0.4);
      border-radius: 999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(16, 185, 129, 0.7);
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
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-emerald-500/30">
            <i class="fa-solid fa-person-running"></i>
          </div>
          <div>
            <h1 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight">
              GIÁO DỤC THỂ CHẤT 9
            </h1>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Kết Nối Tri Thức Với Cuộc Sống</p>
          </div>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Handbook Modal Button -->
        <button onclick="toggleModal('handbook-modal', true)" class="px-2.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 text-xs font-bold transition flex items-center gap-1.5">
          <i class="fa-solid fa-book-bookmark text-emerald-600"></i>
          <span class="hidden md:inline">Sổ tay thuật ngữ</span>
          <span class="px-1.5 py-0.2 rounded-full bg-emerald-200 dark:bg-emerald-900 text-[10px]">12</span>
        </button>

        <!-- Trạng Nguyên Exam Button -->
        <button onclick="toggleModal('exam-modal', true)" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm shadow-amber-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
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
          <div class="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span class="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-list-ol text-emerald-600"></i> Mục lục 8 chủ đề
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">KNTT 9</span>
            </div>
            <!-- Search Lesson Input -->
            <div class="relative mb-3">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
              <input type="text" id="topic-search-input" onkeyup="filterSidebarTopics()" placeholder="Tìm nhanh chủ đề / môn thể thao..." class="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500">
            </div>
            <!-- Links Container -->
            <div class="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1" id="sidebar-links-container">
              ${sidebarLinks}
            </div>
          </div>

          <!-- Quick Sports Safety Tip -->
          <div class="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 dark:border-emerald-900/50 text-xs text-slate-700 dark:text-slate-300">
            <div class="flex items-center gap-2 mb-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
              <i class="fa-solid fa-shield-heart text-emerald-600"></i>
              <span>Nguyên tắc vàng luyện tập</span>
            </div>
            <p class="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
              "Khởi động kĩ trước khi tập, thả lỏng sau khi tập. Tăng dần khối lượng từ thấp đến cao và luôn kiểm tra độ an toàn của sân bãi, dụng cụ."
            </p>
          </div>
        </div>
      </aside>

      <!-- MAIN CONTENT -->
      <main class="lg:col-span-3 space-y-6">
        
        <!-- HERO BANNER -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-lg relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="relative z-10 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-semibold mb-3 border border-white/10">
              <i class="fa-solid fa-medal text-amber-300"></i> Chương trình Giáo dục Phổ thông 2018
            </div>
            <h2 class="text-2xl sm:text-3xl font-black mb-3 leading-tight tracking-tight">
              GIÁO DỤC THỂ CHẤT 9 — KIẾN THỨC CỐT LÕI
            </h2>
            <p class="text-emerald-100 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
              Hệ thống toàn diện 3 Phần &amp; 8 Chủ đề (trọn vẹn 18 bài học) chuẩn SGK Kết nối tri thức với cuộc sống. Tích hợp 8 sơ đồ động lực học vector, máy tính dinh dưỡng thể thao tự động, 32 câu hỏi củng cố và hội thi Trạng Nguyên Thể Thao 25 câu.
            </p>
            <div class="flex flex-wrap items-center gap-3 text-xs font-medium text-emerald-200">
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <i class="fa-solid fa-layer-group text-amber-300"></i> 3 Phần &amp; 18 Bài học
              </span>
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <i class="fa-solid fa-diagram-project text-sky-300"></i> 8 Sơ đồ Vector
              </span>
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <i class="fa-solid fa-calculator text-teal-300"></i> Máy tính Dinh dưỡng
              </span>
              <span class="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <i class="fa-solid fa-award text-amber-300"></i> 25 Câu Trạng Nguyên
              </span>
            </div>
          </div>
        </div>

        <!-- 8 TOPICS CONTAINER -->
        <div class="space-y-8">
          ${topicsContentHtml}
        </div>

      </main>

    </div>
  </div>

  <!-- SỔ TAY THUẬT NGỮ MODAL -->
  <div id="handbook-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/20">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Sổ Tay 12 Thuật Ngữ Thể Thao &amp; Vận Động 9</h3>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Khái niệm chuẩn xác theo SGK Giáo dục thể chất 9 KNTT</p>
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
          <input type="text" id="terms-search" onkeyup="filterTermsModal()" placeholder="Tìm thuật ngữ (VD: Tắm không khí, Cực điểm, Nhảy cao nằm nghiêng, Bước chéo, Smash...)" class="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500">
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
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-500/10 to-orange-500/10">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">Đấu Trường Trạng Nguyên Thể Thao 9</h3>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Đề thi chuẩn hoá 25 câu trắc nghiệm tổng hợp toàn bộ 3 Phần</p>
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
          Đã hoàn thành: <span id="answered-count" class="font-bold text-emerald-600 dark:text-emerald-400">0</span>/25 câu
        </div>
        <div class="flex items-center gap-2">
          <button onclick="resetExam()" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            Làm lại từ đầu
          </button>
          <button onclick="submitExam()" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm transition">
            Nộp bài &amp; Chấm điểm
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

    // Filter sidebar topics & lessons
    function filterSidebarTopics() {
      const q = document.getElementById('topic-search-input').value.toLowerCase().trim();
      const wrappers = document.querySelectorAll('.topic-nav-wrapper');
      wrappers.forEach(w => {
        const text = w.innerText.toLowerCase();
        if (text.includes(q)) {
          w.classList.remove('hidden');
        } else {
          w.classList.add('hidden');
        }
      });
    }

    // Topic share link
    function shareTopic(id) {
      const url = window.location.origin + window.location.pathname + '#' + id;
      navigator.clipboard.writeText(url).then(() => {
        alert('Đã sao chép liên kết chủ đề vào bộ nhớ tạm: ' + url);
      }).catch(() => {
        alert('Liên kết chủ đề: ' + url);
      });
    }

    // Practice Quiz Check Logic
    function checkTopicQuiz(topicId, qIdx, selectedOpt, correctOpt) {
      const buttons = document.querySelectorAll('.quiz-opt-' + topicId + '-' + qIdx);
      const feedback = document.getElementById('feedback-' + topicId + '-' + qIdx);
      
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
        feedback.className = "mt-3 p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200";
        feedback.innerHTML = "<strong class='text-emerald-700 dark:text-emerald-300'><i class='fa-solid fa-circle-check mr-1'></i>Chính xác!</strong> " + (explainText ? "<span class='mt-1 block text-slate-700 dark:text-slate-300'>" + explainText + "</span>" : "Bạn đã chọn phương án đúng.");
      } else {
        feedback.className = "mt-3 p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200";
        feedback.innerHTML = "<strong class='text-rose-700 dark:text-rose-300'><i class='fa-solid fa-circle-xmark mr-1'></i>Chưa chính xác!</strong> Đáp án đúng là <strong>" + String.fromCharCode(65 + correctOpt) + "</strong>." + (explainText ? "<span class='mt-1 block text-slate-700 dark:text-slate-300'><strong>Giải thích:</strong> " + explainText + "</span>" : " Hãy đọc kĩ lại kiến thức chủ đề phía trên.");
      }
    }

    // Nutrition Calculator Logic
    function calculateNutritionPlan() {
      const type = document.getElementById('calc-sport-type').value;
      const weight = parseFloat(document.getElementById('calc-weight').value) || 48;
      const duration = parseFloat(document.getElementById('calc-duration').value) || 45;

      let carbsPct = 58, proteinGpk = 1.8, lipidPct = 24;
      let advice = "";

      if (type === 'speed') {
        carbsPct = 58; proteinGpk = 1.8; lipidPct = 24;
        advice = "<strong>Lời khuyên tốc độ (100m):</strong> Ưu tiên thực phẩm giàu carbohydrate giải phóng nhanh (yến mạch, chuối, mật ong, bánh mì nguyên cám) cách giờ thi đấu 1,5–2 tiếng; bổ sung vitamin C và phốt pho giúp dẫn truyền thần kinh nhanh nhạy.";
      } else if (type === 'endurance') {
        carbsPct = 52; proteinGpk = 1.6; lipidPct = 30;
        advice = "<strong>Lời khuyên sức bền (Chạy trung bình):</strong> Khẩu phần lipid khoảng 30% giúp cơ thể có nguồn năng lượng dẻo dai kéo dài; bổ sung các vitamin nhóm B và C hỗ trợ chuyển hóa năng lượng hiếu khí; tránh ăn mỡ động vật khó tiêu.";
      } else if (type === 'strength') {
        carbsPct = 50; proteinGpk = 2.2; lipidPct = 28;
        advice = "<strong>Lời khuyên sức mạnh (Nhảy cao):</strong> Lượng protein cần trên 2 g/kg cân nặng (>18% tổng năng lượng) từ ức gà, trứng, sữa, cá; bổ sung khoáng chất Kali, Natri, Magie, Sắt để tăng cường co bóp cơ bắp và bật nhảy.";
      } else { // balls
        carbsPct = 55; proteinGpk = 1.9; lipidPct = 25;
        advice = "<strong>Lời khuyên môn bóng (Đá, Rổ, Lông):</strong> Đòi hỏi kết hợp hoàn hảo giữa Nhanh – Mạnh – Bền; ăn cân đối đa dạng, bổ sung đầy đủ nước và chất điện giải từng ngụm nhỏ 15 phút/lần trong suốt quá trình tập.";
      }

      // Calculations based on daily reference ~ 2200 kcal for active teen
      const totalKcal = 2200;
      const carbsGram = Math.round((totalKcal * (carbsPct / 100)) / 4);
      const proteinGram = Math.round(weight * proteinGpk);
      const lipidGram = Math.round((totalKcal * (lipidPct / 100)) / 9);
      const waterMl = Math.round(duration * 12 + weight * 5);

      document.getElementById('calc-res-carbs').innerText = "~" + carbsPct + "% (" + carbsGram + "g)";
      document.getElementById('calc-res-protein').innerText = "~" + proteinGpk + "g/kg (" + proteinGram + "g)";
      document.getElementById('calc-res-lipid').innerText = "~" + lipidPct + "% (" + lipidGram + "g)";
      document.getElementById('calc-res-water').innerText = "~" + (waterMl - 100) + " - " + (waterMl + 100) + " ml";
      document.getElementById('calc-sport-advice').innerHTML = advice;
    }

    // Exam State & Timer
    const examQuestionsData = ${JSON.stringify(gdtc9ExamQuestions)};
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
        rankTitle = 'TRẠNG NGUYÊN THỂ THAO XUẤT SẮC 🥇';
      } else if (score >= 18) {
        rankTitle = 'BẢNG NHÃN THỂ CHẤT ƯU TÚ 🥈';
      } else if (score >= 13) {
        rankTitle = 'THÁM HOA VẬN ĐỘNG VỮNG VÀNG 🥉';
      } else {
        rankTitle = 'HỌC ĐI ĐÔI VỚI HÀNH — CỐ GẮNG RÈN LUYỆN THÊM! 📖';
      }

      alert("KẾT QUẢ THI TRẠNG NGUYÊN THỂ THAO 9:\\n" +
            "- Điểm số: " + score + "/" + examQuestionsData.length + " câu (" + pct + "%)\\n" +
            "- Số câu chưa chọn: " + unanswered + "\\n" +
            "- Danh hiệu: " + rankTitle + "\\n\\n" +
            "Hãy xem lại đáp án và giải thích chi tiết trong từng câu hỏi!");
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
            itemBox.className = 'exam-question-item p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800';
          }
        }
        document.getElementById('answered-count').innerText = '0';
        examTimeSeconds = 25 * 60;
        startExamTimer();
      }
    }

    // Initialize calculator on page load
    document.addEventListener('DOMContentLoaded', () => {
      calculateNutritionPlan();
    });
  </script>
</body>
</html>
  `;
}

// Compile Vietnamese and English mirrored versions
const viHtml = generateHTML('vi');
const enHtml = generateHTML('en');

const outViPath = path.resolve(__dirname, '../courses/gdtc_9.html');
const outEnPath = path.resolve(__dirname, '../courses/physical_education_9.html');

fs.writeFileSync(outViPath, viHtml, 'utf8');
fs.writeFileSync(outEnPath, enHtml, 'utf8');

console.log('Successfully generated GDTC 9:');
console.log(' - ' + outViPath + ' (' + viHtml.length + ' bytes)');
console.log(' - ' + outEnPath + ' (' + enHtml.length + ' bytes)');
