// build_hdtn9_page.js - Trình biên dịch trang học liệu Hoạt động trải nghiệm, hướng nghiệp 9
const fs = require('fs');
const path = require('path');
const { topicsData } = require('./hdtn9_data.js');
const hdtn9Terms = require('./hdtn9_terms.js');
const hdtn9Diagrams = require('./hdtn9_diagrams.js');
const hdtn9Illustrations = require('./hdtn9_illustrations.js');
const { personalBudgetPlannerWidget, careerDecisionGuideWidget } = require('./hdtn9_widgets.js');
const hdtn9ExamQuestions = require('./hdtn9_exam.js');

function generateHTML(lang = 'vi') {
  const isEn = lang === 'en';
  const pageTitle = isEn
    ? "Career Orientation & Experiential Activities 9 — Core Knowledge | Global Connected Knowledge"
    : "Hoạt Động Trải Nghiệm, Hướng Nghiệp 9 — Kiến Thức Cốt Lõi | Kết Nối Tri Thức Với Cuộc Sống";

  const switchUrl = isEn ? "hdtn_9.html" : "career_experience_9.html";
  const switchLabel = isEn ? "Tiếng Việt" : "English";

  // Build Sidebar Links sequentially matching the exact SGK Table of Contents
  let sidebarLinks = '';
  topicsData.forEach((t, tIdx) => {
    const lessonItems = t.lessons.map((l, lIdx) => {
      const lid = l.id || `lesson-${t.id}-${lIdx + 1}`;
      return `
        <a href="#${lid}" class="lesson-sub-link flex items-center justify-between py-1.5 px-2 rounded-lg text-[11px] text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/20 transition group truncate" title="${l.lessonTitle}">
          <span class="truncate flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
            <span class="truncate">${l.lessonTitle}</span>
          </span>
          <span class="text-[9.5px] px-1 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-indigo-600 shrink-0 font-semibold ml-1">${l.page}</span>
        </a>
      `;
    }).join('');

    sidebarLinks += `
      <div class="topic-nav-wrapper mb-2.5">
        <a href="#${t.id}" class="topic-nav-link flex items-center justify-between py-2 px-2.5 rounded-xl hover:bg-indigo-50/80 dark:hover:bg-indigo-950/30 text-slate-800 dark:text-slate-200 text-xs font-bold transition group border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 bg-white/70 dark:bg-slate-900/70" data-id="${t.id}">
          <span class="truncate flex items-center gap-2">
            <span class="w-5 h-5 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-[10px] font-black shrink-0">${t.topicNumber}</span>
            <span class="truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-extrabold">${t.title}</span>
          </span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold shrink-0 ml-1.5">${t.page}</span>
        </a>
        <div class="ml-4 pl-2 border-l border-indigo-200/70 dark:border-indigo-900/60 space-y-0.5 mt-1">
          ${lessonItems}
        </div>
      </div>
    `;
  });

  // Appendix: Một số thuật ngữ dùng trong sách (Trang 61)
  sidebarLinks += `
    <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
      <button onclick="openHandbookModal()" class="w-full text-left py-2 px-2.5 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/30 text-amber-900 dark:text-amber-300 text-xs font-bold transition flex items-center justify-between border border-amber-200/70 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20">
        <span class="flex items-center gap-2 truncate">
          <i class="fa-solid fa-book-bookmark text-amber-600"></i>
          <span class="truncate">MỘT SỐ THUẬT NGỮ DÙNG TRONG SÁCH</span>
        </span>
        <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 font-bold shrink-0">Trang 61</span>
      </button>
    </div>
  `;

  // Build Topics Content strictly matching the SGK Order (Chủ đề 1 -> Chủ đề 9)
  let topicsContentHtml = '';
  topicsData.forEach((topic, idx) => {
    const diagramSvg = hdtn9Diagrams[topic.diagramKey] || `
      <div class="p-6 text-center text-slate-500 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <i class="fa-solid fa-chart-diagram text-3xl mb-2 text-indigo-500"></i>
        <p class="text-sm font-semibold">${topic.title} - Sơ đồ trực quan</p>
      </div>
    `;

    // Objectives HTML
    let objectivesHtml = '';
    if (topic.objectives && topic.objectives.length) {
      objectivesHtml = `
        <div class="mb-5 p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <strong class="text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 mb-2 font-bold uppercase tracking-wide text-xs">
            <i class="fa-solid fa-bullseye text-indigo-600"></i> Mục tiêu &amp; Phẩm chất, Năng lực đạt được:
          </strong>
          <ul class="space-y-1.5">
            ${topic.objectives.map(o => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-indigo-500 mt-1 shrink-0 text-xs"></i>
                <span class="leading-relaxed">${o}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    // Lessons HTML with SVG illustrations
    let lessonsCardsHtml = '';
    topic.lessons.forEach((l, lIdx) => {
      const lid = l.id || `lesson-${topic.id}-${lIdx + 1}`;
      const illuSvg = hdtn9Illustrations[lid] || '';
      lessonsCardsHtml += `
        <div id="${lid}" class="lesson-card scroll-mt-24 mb-5 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm transition hover:border-indigo-300 dark:hover:border-indigo-700">
          <div class="flex items-start justify-between gap-3 mb-2.5">
            <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-2.5 h-4 rounded bg-indigo-500 inline-block"></span>
              ${l.lessonTitle}
            </h4>
            ${l.page ? `<span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold shrink-0 border border-indigo-200/50 dark:border-indigo-800/40">${l.page}</span>` : ''}
          </div>
          ${illuSvg ? `
          <div class="lesson-simulation-box my-3 p-3 sm:p-4 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80 overflow-x-auto">
            <div class="text-[11px] font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-shapes text-indigo-600"></i> Mô phỏng kĩ năng &amp; Nguyên lí thực hành
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

    // Specific Widgets injection
    let widgetHtml = '';
    if (topic.id === 'topic-cd4') {
      widgetHtml = personalBudgetPlannerWidget;
    } else if (topic.id === 'topic-cd9') {
      widgetHtml = careerDecisionGuideWidget;
    }

    // Topic Quizzes
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
            <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-[11px] font-bold mt-0.5 shrink-0">Câu ${qIdx + 1}</span>
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
      <section id="${topic.id}" class="topic-section scroll-mt-20 mb-10 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <!-- Topic Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-lg shadow-sm shrink-0">
              <i class="fa-solid ${topic.icon}"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-0.5">
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300 text-[10px] font-extrabold uppercase tracking-wider">${topic.badge}</span>
                <span class="text-[11px] text-slate-400 font-semibold">• ${topic.page}</span>
              </div>
              <h3 class="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">${topic.title}</h3>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="readAloudSection('${topic.id}')" class="px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 text-xs font-bold transition flex items-center gap-1.5">
              <i class="fa-solid fa-volume-high"></i> <span>Đọc bài</span>
            </button>
          </div>
        </div>

        <!-- Objectives -->
        ${objectivesHtml}

        <!-- Vector Diagram Overview -->
        <div class="mb-6 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 overflow-x-auto">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center justify-between">
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-diagram-project text-indigo-500"></i> Sơ đồ động lực &amp; Tiến trình trải nghiệm trực quan</span>
            <span class="text-[10px] text-slate-400">Bản vẽ vector SVG độc quyền</span>
          </div>
          ${diagramSvg}
        </div>

        <!-- Lessons / Activities Cards -->
        <div class="mb-6">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-book-open-reader text-indigo-500"></i> Các hoạt động trải nghiệm trọng tâm:
          </h4>
          ${lessonsCardsHtml}
        </div>

        <!-- Interactive Widget Injection -->
        ${widgetHtml}

        <!-- Quick Quizzes -->
        <div class="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-list-check text-indigo-500"></i> Bài tập củng cố nhanh (${quizzes.length} câu)
            </h4>
            <span class="text-[11px] text-slate-400">Bấm chọn đáp án để xem giải thích</span>
          </div>
          ${quizzesHtml}
        </div>
      </section>
    `;
  });

  // Terms Cards in Handbook Modal
  let termCardsHtml = '';
  hdtn9Terms.forEach((t, tIdx) => {
    termCardsHtml += `
      <div class="term-card p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-400 transition" data-term="${t.term.toLowerCase()}">
        <div class="flex items-start justify-between gap-2 mb-2">
          <span class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs shrink-0 font-bold">${tIdx + 1}</span>
            ${t.term}
          </span>
          <span class="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold shrink-0">${t.badge}</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">${t.desc}</p>
        <div class="p-2 rounded-lg bg-indigo-50/60 dark:bg-slate-900/70 border border-indigo-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
          <strong class="text-indigo-700 dark:text-indigo-300 font-semibold">Ví dụ / Áp dụng:</strong> ${t.example}
        </div>
      </div>
    `;
  });

  // Trạng Nguyên Exam Questions in Modal
  let examItemsHtml = '';
  hdtn9ExamQuestions.forEach((eq, eqIdx) => {
    let opts = '';
    eq.options.forEach((opt, oIdx) => {
      opts += `
        <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30 cursor-pointer text-xs sm:text-sm transition">
          <input type="radio" name="exam_q_${eqIdx}" value="${oIdx}" class="mt-1 text-indigo-600 focus:ring-indigo-500">
          <span class="text-slate-700 dark:text-slate-300 flex-1">${String.fromCharCode(65 + oIdx)}. ${opt}</span>
        </label>
      `;
    });

    examItemsHtml += `
      <div class="exam-question-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-4 shadow-sm" id="exam-item-${eqIdx}">
        <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
          <span class="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">${eqIdx + 1}</span>
          <span>${eq.q}</span>
        </p>
        <div class="space-y-2">
          ${opts}
        </div>
        <div id="exam-feedback-${eqIdx}" class="hidden mt-3 p-3 rounded-xl text-xs leading-relaxed"></div>
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
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eef2ff',
              100: '#e0e7ff',
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81'
            }
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen antialiased">

  <!-- Scroll Progress Bar -->
  <div id="scroll-progress" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" title="Về trang chủ">
          <span class="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <span class="hidden sm:inline text-xs font-bold uppercase tracking-wider">Trang Chủ</span>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black shadow-sm">9</span>
          <h1 class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-md">
            HĐ Trải Nghiệm, Hướng Nghiệp 9
          </h1>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <!-- Bilingual Switch -->
        <a href="${switchUrl}" class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[11px] font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center gap-1.5 text-slate-700 dark:text-slate-200" title="Chuyển đổi ngôn ngữ">
          <i class="fa-solid fa-language text-indigo-500"></i>
          <span>${switchLabel}</span>
        </a>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" type="button" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-center text-sm" title="Bật/Tắt chế độ tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>

        <!-- Trạng Nguyên Exam Button -->
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden md:inline">Thi Trạng Nguyên (25 câu)</span>
          <span class="md:hidden">Thi</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs & Quick Banner -->
  <div class="bg-indigo-50/60 dark:bg-slate-900/50 border-b border-indigo-100 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
      <nav class="flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <a href="../index.html" class="hover:text-indigo-600 transition">Học liệu điện tử</a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span>Khối Lớp 9</span>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span class="font-bold text-indigo-700 dark:text-indigo-300">Hoạt động trải nghiệm, hướng nghiệp 9</span>
      </nav>
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-bold text-[10px]">
          SGK Kết Nối Tri Thức
        </span>
        <span class="text-slate-400 text-[11px]">• 9 Chủ đề • 23 Hoạt động • 12 Thuật ngữ</span>
      </div>
    </div>
  </div>

  <!-- Hero Banner -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
    <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white relative overflow-hidden shadow-lg border border-indigo-800/50">
      <div class="absolute -right-10 -bottom-10 opacity-10 text-[220px] select-none pointer-events-none">
        <i class="fa-solid fa-compass"></i>
      </div>
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-bold mb-3 border border-white/15">
          <i class="fa-solid fa-award text-amber-400"></i> Nền Tảng Học Liệu Điện Tử Toàn Diện
        </div>
        <h2 class="text-xl sm:text-3xl font-black tracking-tight mb-2.5">
          HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP 9
        </h2>
        <p class="text-xs sm:text-sm text-indigo-100/90 leading-relaxed mb-5 font-normal">
          Hệ thống hóa toàn bộ 9 chủ đề và 23 hoạt động trọng tâm theo SGK Kết nối tri thức: thấu hiểu bản thân, sống hài hòa học đường, quản lí ngân sách cá nhân, giải tỏa căng thẳng áp lực, bảo vệ môi trường, tìm hiểu thế giới nghề nghiệp và lựa chọn sáng suốt các hướng đi sau khi tốt nghiệp THCS.
        </p>
        <div class="flex flex-wrap items-center gap-2.5">
          <button onclick="openHandbookModal()" class="px-3.5 py-2 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 text-xs font-extrabold shadow-sm transition flex items-center gap-2">
            <i class="fa-solid fa-book-bookmark text-indigo-600"></i>
            <span>Sổ tay 12 thuật ngữ</span>
          </button>
          <a href="#topic-cd4" class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-md border border-white/20 transition flex items-center gap-2">
            <i class="fa-solid fa-wallet text-emerald-400"></i>
            <span>Quản lí ngân sách</span>
          </a>
          <a href="#topic-cd9" class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-md border border-white/20 transition flex items-center gap-2">
            <i class="fa-solid fa-route text-amber-400"></i>
            <span>Chọn hướng sau THCS</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Container with Sidebar + Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <!-- Left Sidebar (TOC) -->
      <aside class="lg:col-span-4 xl:col-span-3 sticky top-20 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-bars-staggered text-indigo-500"></i> Mục Lục 9 Chủ Đề
          </h3>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">23 Hoạt động</span>
        </div>

        <!-- Search Filter -->
        <div class="relative mb-3">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
          <input type="text" id="sidebar-search" placeholder="Tìm chủ đề, hoạt động..." oninput="filterSidebarTopics()"
            class="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        </div>

        <!-- Links Container -->
        <div id="sidebar-links-container" class="space-y-1">
          ${sidebarLinks}
        </div>
      </aside>

      <!-- Right Main Content -->
      <div class="lg:col-span-8 xl:col-span-9 space-y-6">
        ${topicsContentHtml}
      </div>

    </div>
  </main>

  <!-- Modal: Sổ tay 12 Thuật Ngữ -->
  <div id="handbook-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[88vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-scale-up">
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg shadow-sm">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">Sổ Tay 12 Thuật Ngữ Cốt Lõi</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Định nghĩa chuẩn hóa theo SGK Hoạt động trải nghiệm, hướng nghiệp 9</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center justify-center text-sm">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Search in Terms -->
      <div class="px-6 py-3 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400 text-xs"></i>
          <input type="text" id="terms-search-input" placeholder="Tìm kiếm thuật ngữ (ví dụ: căng thẳng, động lực, thích nghi, ngân sách...)" oninput="filterTermsList()"
            class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
        </div>
      </div>

      <!-- Terms Grid -->
      <div class="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4" id="terms-container">
        ${termCardsHtml}
      </div>
    </div>
  </div>

  <!-- Modal: Thi Trạng Nguyên (25 Câu) -->
  <div id="exam-modal" class="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-scale-up">
      <!-- Exam Header -->
      <div class="px-6 py-4 bg-gradient-to-r from-indigo-700 to-purple-800 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shadow-sm">
            <i class="fa-solid fa-trophy text-amber-300"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black tracking-tight">Kỳ Thi Trạng Nguyên Trải Nghiệm &amp; Hướng Nghiệp</h3>
            <p class="text-xs text-indigo-200">Đề thi 25 câu hỏi tổng hợp kiến thức toàn diện 9 chủ đề lớp 9</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-black/30 border border-white/20 text-xs font-mono font-bold flex items-center gap-2">
            <i class="fa-regular fa-clock text-amber-300"></i>
            <span id="exam-timer">15:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white transition flex items-center justify-center text-sm">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Result Summary Box (Hidden initially) -->
      <div id="exam-result-box" class="hidden p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 border-b border-amber-200 dark:border-slate-700">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div id="exam-result-icon" class="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-md">
              <i class="fa-solid fa-crown"></i>
            </div>
            <div>
              <h4 id="exam-result-title" class="text-base sm:text-lg font-black text-slate-900 dark:text-white">Chúc mừng bạn đạt danh hiệu: Trạng Nguyên</h4>
              <p id="exam-result-score" class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Điểm số: 25/25 câu đúng (100%)</p>
            </div>
          </div>
          <button onclick="resetExam()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition">
            <i class="fa-solid fa-rotate-right mr-1.5"></i> Thi lại
          </button>
        </div>
      </div>

      <!-- Exam Content -->
      <div class="p-6 overflow-y-auto space-y-4" id="exam-questions-list">
        ${examItemsHtml}
      </div>

      <!-- Exam Footer -->
      <div class="px-6 py-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span class="text-xs text-slate-500 dark:text-slate-400">Hãy kiểm tra kĩ trước khi bấm nộp bài</span>
        <button id="btn-submit-exam" onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-extrabold shadow-md transition flex items-center gap-2">
          <i class="fa-solid fa-paper-plane"></i>
          <span>Nộp Bài &amp; Xếp Hạng</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script>
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // Scroll progress bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('scroll-progress').style.width = scrolled + '%';
    });

    // Topic Quiz Checker
    function checkTopicQuiz(topicId, qIdx, selectedOpt, correctOpt) {
      const buttons = document.querySelectorAll('.quiz-opt-' + topicId + '-' + qIdx);
      buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-50', 'dark:hover:bg-slate-800/80');
      });

      const selectedBtn = buttons[selectedOpt];
      const correctBtn = buttons[correctOpt];
      const feedbackDiv = document.getElementById('feedback-' + topicId + '-' + qIdx);
      const explainText = feedbackDiv.getAttribute('data-explain') || '';

      if (selectedOpt === correctOpt) {
        selectedBtn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        feedbackDiv.innerHTML = '<span class="font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</span> ' + explainText;
        feedbackDiv.className = 'mt-3 p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs block';
      } else {
        selectedBtn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        correctBtn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        feedbackDiv.innerHTML = '<span class="font-bold text-rose-600 dark:text-rose-400"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa đúng!</span> Đáp án đúng là <strong>' + String.fromCharCode(65 + correctOpt) + '</strong>. ' + explainText;
        feedbackDiv.className = 'mt-3 p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 text-xs block';
      }
    }

    // Personal Budget Calculator logic
    function calculatePersonalBudget() {
      const income = Math.max(0, parseFloat(document.getElementById('budget-income').value) || 0);
      const essential = Math.max(0, parseFloat(document.getElementById('budget-essential').value) || 0);
      const hobby = Math.max(0, parseFloat(document.getElementById('budget-hobby').value) || 0);
      const savings = Math.max(0, parseFloat(document.getElementById('budget-savings').value) || 0);

      const totalOut = essential + hobby + savings;
      const diff = income - totalOut;

      const formatVND = num => num.toLocaleString('vi-VN') + ' đ';

      document.getElementById('budget-res-income').innerText = formatVND(income);
      document.getElementById('budget-res-total-out').innerText = formatVND(totalOut);

      const diffEl = document.getElementById('budget-res-diff');
      if (diff === 0) {
        diffEl.innerText = '0 đ (Cân bằng hoàn hảo)';
        diffEl.className = 'font-bold text-emerald-600 dark:text-emerald-400';
      } else if (diff > 0) {
        diffEl.innerText = '+' + formatVND(diff) + ' (Thặng dư tích lũy)';
        diffEl.className = 'font-bold text-teal-600 dark:text-teal-400';
      } else {
        diffEl.innerText = formatVND(diff) + ' (Bội chi - Cần cắt giảm)';
        diffEl.className = 'font-bold text-rose-600 dark:text-rose-400';
      }

      const totalCalc = totalOut > 0 ? totalOut : (income > 0 ? income : 1);
      const pctEss = Math.round((essential / totalCalc) * 100);
      const pctHob = Math.round((hobby / totalCalc) * 100);
      const pctSav = Math.round((savings / totalCalc) * 100);

      document.getElementById('budget-pct-essential').innerText = pctEss + '%';
      document.getElementById('budget-pct-hobby').innerText = pctHob + '%';
      document.getElementById('budget-pct-savings').innerText = pctSav + '%';

      document.getElementById('bar-essential').style.width = Math.min(100, pctEss) + '%';
      document.getElementById('bar-hobby').style.width = Math.min(100, pctHob) + '%';
      document.getElementById('bar-savings').style.width = Math.min(100, pctSav) + '%';

      const fb = document.getElementById('budget-feedback');
      if (diff < 0) {
        fb.className = 'mt-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 text-xs leading-relaxed border border-rose-200 dark:border-rose-800/50';
        fb.innerHTML = '<i class=\"fa-solid fa-triangle-exclamation text-rose-600 mr-1.5\"></i> Cảnh báo bội chi ' + formatVND(Math.abs(diff)) + '! Bạn nên cân nhắc cắt giảm bớt các khoản chi sở thích hoặc tìm cách gia tăng nguồn thu hợp lí.';
      } else if (pctSav < 10 && income > 0) {
        fb.className = 'mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs leading-relaxed border border-amber-200 dark:border-amber-800/50';
        fb.innerHTML = '<i class=\"fa-solid fa-lightbulb text-amber-600 mr-1.5\"></i> Lời khuyên: Tỉ lệ tiết kiệm của bạn hiện tại (' + pctSav + '%) hơi thấp. Nên dành khoảng 15-20% thu nhập để bỏ heo đất dự phòng.';
      } else {
        fb.className = 'mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs leading-relaxed border border-emerald-200 dark:border-emerald-800/50';
        fb.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-600 mr-1.5\"></i> Kế hoạch ngân sách của bạn rất cân đối và thông minh! Bạn đang làm chủ tài chính cá nhân rất tốt.';
      }
    }

    // Modal Handlers
    function openHandbookModal() {
      document.getElementById('handbook-modal').classList.remove('hidden');
      document.getElementById('handbook-modal').classList.add('flex');
    }
    function closeHandbookModal() {
      document.getElementById('handbook-modal').classList.add('hidden');
      document.getElementById('handbook-modal').classList.remove('flex');
    }

    let examTimerInterval = null;
    let examTimeLeft = 900; // 15 mins

    function openExamModal() {
      document.getElementById('exam-modal').classList.remove('hidden');
      document.getElementById('exam-modal').classList.add('flex');
      if (!examTimerInterval) {
        examTimeLeft = 900;
        examTimerInterval = setInterval(() => {
          examTimeLeft--;
          const mins = Math.floor(examTimeLeft / 60);
          const secs = examTimeLeft % 60;
          document.getElementById('exam-timer').innerText = 
            (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
          if (examTimeLeft <= 0) {
            clearInterval(examTimerInterval);
            submitExam();
          }
        }, 1000);
      }
    }

    function closeExamModal() {
      document.getElementById('exam-modal').classList.add('hidden');
      document.getElementById('exam-modal').classList.remove('flex');
    }

    const examQuestionsData = ${JSON.stringify(hdtn9ExamQuestions)};

    function submitExam() {
      if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
      }
      let score = 0;
      examQuestionsData.forEach((eq, idx) => {
        const radios = document.getElementsByName('exam_q_' + idx);
        let selectedVal = -1;
        radios.forEach(r => {
          if (r.checked) selectedVal = parseInt(r.value);
          r.disabled = true;
        });

        const feedbackDiv = document.getElementById('exam-feedback-' + idx);
        feedbackDiv.classList.remove('hidden');

        if (selectedVal === eq.correct) {
          score++;
          feedbackDiv.className = 'mt-3 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs';
          feedbackDiv.innerHTML = '<i class=\"fa-solid fa-check text-emerald-600 mr-1\"></i> Đúng! ' + (eq.explain || '');
        } else {
          feedbackDiv.className = 'mt-3 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs';
          feedbackDiv.innerHTML = '<i class=\"fa-solid fa-xmark text-rose-600 mr-1\"></i> Chưa chính xác. Đáp án đúng là ' + String.fromCharCode(65 + eq.correct) + '. ' + (eq.explain || '');
        }
      });

      const resBox = document.getElementById('exam-result-box');
      resBox.classList.remove('hidden');

      const titleEl = document.getElementById('exam-result-title');
      const scoreEl = document.getElementById('exam-result-score');
      const iconEl = document.getElementById('exam-result-icon');

      const pct = Math.round((score / examQuestionsData.length) * 100);
      scoreEl.innerText = 'Kết quả: ' + score + '/' + examQuestionsData.length + ' câu đúng (' + pct + '%)';

      if (score >= 23) {
        titleEl.innerText = 'Vinh danh: TRẠNG NGUYÊN HƯỚNG NGHIỆP';
        iconEl.innerHTML = '<i class=\"fa-solid fa-crown text-amber-300\"></i>';
      } else if (score >= 19) {
        titleEl.innerText = 'Vinh danh: BẢNG NHÃN TÀI NĂNG';
        iconEl.innerHTML = '<i class=\"fa-solid fa-medal text-slate-200\"></i>';
      } else if (score >= 15) {
        titleEl.innerText = 'Vinh danh: THÁM HOA TRẢI NGHIỆM';
        iconEl.innerHTML = '<i class=\"fa-solid fa-award text-amber-700\"></i>';
      } else {
        titleEl.innerText = 'Cần rèn luyện thêm để vững bước vào tương lai';
        iconEl.innerHTML = '<i class=\"fa-solid fa-book-open text-blue-300\"></i>';
      }

      document.getElementById('btn-submit-exam').disabled = true;
      document.getElementById('btn-submit-exam').classList.add('opacity-50', 'cursor-not-allowed');
      resBox.scrollIntoView({ behavior: 'smooth' });
    }

    function resetExam() {
      examQuestionsData.forEach((eq, idx) => {
        const radios = document.getElementsByName('exam_q_' + idx);
        radios.forEach(r => {
          r.checked = false;
          r.disabled = false;
        });
        const feedbackDiv = document.getElementById('exam-feedback-' + idx);
        feedbackDiv.classList.add('hidden');
        feedbackDiv.innerHTML = '';
      });
      document.getElementById('exam-result-box').classList.add('hidden');
      document.getElementById('btn-submit-exam').disabled = false;
      document.getElementById('btn-submit-exam').classList.remove('opacity-50', 'cursor-not-allowed');
      examTimeLeft = 900;
      openExamModal();
    }

    // Audio text-to-speech reader
    function readAloudSection(sectionId) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng đọc văn bản tự động.');
        return;
      }
      window.speechSynthesis.cancel();
      const sec = document.getElementById(sectionId);
      if (!sec) return;
      const textToRead = sec.innerText.replace(/\\s+/g, ' ').trim();
      const utterance = new SpeechSynthesisUtterance(textToRead.substring(0, 800));
      utterance.lang = '${isEn ? 'en-US' : 'vi-VN'}';
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    }

    // Filter Terms in Handbook
    function filterTermsList() {
      const query = document.getElementById('terms-search-input').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.term-card');
      cards.forEach(card => {
        const termName = card.getAttribute('data-term') || '';
        const text = card.innerText.toLowerCase();
        if (termName.includes(query) || text.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // Filter Sidebar Topics
    function filterSidebarTopics() {
      const query = document.getElementById('sidebar-search').value.toLowerCase().trim();
      const wrappers = document.querySelectorAll('.topic-nav-wrapper');
      wrappers.forEach(w => {
        const text = w.innerText.toLowerCase();
        if (text.includes(query)) {
          w.classList.remove('hidden');
        } else {
          w.classList.add('hidden');
        }
      });
    }
  </script>
</body>
</html>
`;
}

// Compile Vietnamese and English HTML files
const distDir = path.resolve(__dirname, '../courses');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const viHtml = generateHTML('vi');
const enHtml = generateHTML('en');

const viPath = path.join(distDir, 'hdtn_9.html');
const viAliasPath = path.join(distDir, 'hdtnhn_9.html');
const enPath = path.join(distDir, 'career_experience_9.html');

fs.writeFileSync(viPath, viHtml, 'utf8');
fs.writeFileSync(viAliasPath, viHtml, 'utf8');
fs.writeFileSync(enPath, enHtml, 'utf8');

console.log('Successfully compiled Hoạt động trải nghiệm, hướng nghiệp 9:');
console.log(' - ' + viPath + ' (' + viHtml.length + ' bytes)');
console.log(' - ' + viAliasPath + ' (' + viHtml.length + ' bytes)');
console.log(' - ' + enPath + ' (' + enHtml.length + ' bytes)');
