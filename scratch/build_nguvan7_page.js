const fs = require('fs');
const { tap1Data } = require('./nguvan7_data_tap1.js');
const { tap2Data, summaryTable } = require('./nguvan7_data_tap2.js');
const { getMindmapSVG } = require('./nguvan7_mindmaps.js');
const { examQuestions } = require('./nguvan7_exam.js');

const allLessons = [...tap1Data, ...tap2Data];

function renderLessonHTML(lesson, index) {
  const isTap1 = lesson.volume === "TẬP MỘT";
  const volBadge = isTap1 ? "bg-rose-600 text-white" : "bg-cyan-600 text-white";
  const borderCol = isTap1 ? "border-rose-200 dark:border-rose-900/60" : "border-cyan-200 dark:border-cyan-900/60";
  const textCol = isTap1 ? "text-rose-600 dark:text-rose-400" : "text-cyan-600 dark:text-cyan-400";
  const bgSoft = isTap1 ? "bg-rose-50/50 dark:bg-rose-950/20" : "bg-cyan-50/50 dark:bg-cyan-950/20";

  // Texts list
  const textsHTML = lesson.readTheory.texts.map(t => `
    <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 space-y-2">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-700/80 pb-2">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-black">
            <i class="fa-solid fa-book-open"></i>
          </span>
          <span class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${t.name}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">${t.author}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">${t.type}</span>
        </div>
      </div>
      <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic">
        "${t.summary}"
      </p>
      <div class="space-y-1 pt-1 border-t border-gray-100/80 dark:border-gray-700/60">
        <span class="text-[11px] font-bold text-gray-500 dark:text-gray-400">Trọng tâm phân tích &amp; bằng chứng nghệ thuật:</span>
        <ul class="list-disc pl-5 text-xs text-gray-600 dark:text-gray-400 space-y-1">
          ${t.keyPoints.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  // Concepts
  const conceptsHTML = lesson.readTheory.concepts.map(c => `
    <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60">
      <span class="text-xs font-bold ${textCol} block mb-1">
        <i class="fa-solid fa-bookmark mr-1"></i> ${c.term}:
      </span>
      <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${c.desc}</p>
    </div>
  `).join('');

  // Vietnamese Language
  const langExamplesHTML = lesson.vietnameseLang.examples.map(ex => `
    <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 space-y-1.5 text-xs">
      <div class="text-gray-500 dark:text-gray-400 font-medium">Ngữ cảnh ban đầu: <span class="italic text-gray-700 dark:text-gray-300">${ex.original}</span></div>
      <div class="text-emerald-700 dark:text-emerald-400 font-semibold">Phân tích / Vận dụng: <span class="text-gray-800 dark:text-gray-200 font-bold">${ex.expanded}</span></div>
      <div class="text-[11px] text-gray-500 dark:text-gray-400">Ghi chú: ${ex.note}</div>
    </div>
  `).join('');

  // Quiz HTML
  const quizHTML = lesson.quiz.map((q, qIdx) => `
    <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
      <div class="flex items-start gap-2">
        <span class="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[11px] shrink-0 mt-0.5">Câu ${qIdx + 1}</span>
        <p class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">${q.question}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        ${q.options.map((opt, oIdx) => `
          <button onclick="checkLessonQuiz(${index}, ${qIdx}, ${oIdx}, ${q.answer})"
                  id="quiz-btn-${index}-${qIdx}-${oIdx}"
                  class="quiz-btn-${index}-${qIdx} text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-rose-400 bg-gray-50/70 dark:bg-gray-800/80 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2 cursor-pointer">
            <span class="w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold text-[10px] flex items-center justify-center shrink-0">
              ${String.fromCharCode(65 + oIdx)}
            </span>
            <span class="leading-snug">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="quiz-feedback-${index}-${qIdx}" class="hidden p-3 rounded-lg text-xs leading-relaxed"></div>
    </div>
  `).join('');

  return `
    <section id="${lesson.id}" 
             class="lesson-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md mb-8"
             data-volume="${lesson.volume}">
      
      <!-- Lesson Header Top -->
      <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-lg ${volBadge} font-black text-xs uppercase tracking-wider">${lesson.volume}</span>
          <span class="px-2.5 py-1 rounded-lg ${bgSoft} ${textCol} font-semibold text-xs border ${borderCol}">
            ${lesson.unit}: ${lesson.title}
          </span>
        </div>
        <span class="text-xs font-bold text-gray-400 flex items-center gap-1.5">
          <i class="fa-solid fa-book-bookmark text-rose-500"></i> KNTT &bull; GDPT 2018
        </span>
      </div>

      <!-- Title & Theme -->
      <div class="mb-4">
        <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2.5">
          <i class="fa-solid fa-feather-pointed ${textCol}"></i>
          <span>${lesson.unit}. ${lesson.title}</span>
        </h3>
        <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">
          <strong>Thông điệp chủ đề:</strong> ${lesson.theme}
        </p>
      </div>

      <!-- Sơ đồ tư duy Vector SVG -->
      <div class="my-5 p-3 sm:p-4 rounded-xl bg-slate-900 border border-rose-500/30 text-white">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-rose-500/20">
          <span class="text-xs font-bold text-rose-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy cốt lõi &bull; ${lesson.unit}
          </span>
          <span class="text-[10px] text-gray-400 font-medium">Bản quyền CodeHub THCS</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          ${getMindmapSVG(lesson.id)}
        </div>
      </div>

      <!-- 1. Trọng tâm đọc hiểu & Tri thức Ngữ Văn -->
      <div class="my-6 space-y-4">
        <div class="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
          <span class="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs font-bold">1</span>
          <h4 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Trọng Tâm Đọc &amp; Tri Thức Thể Loại</h4>
        </div>
        
        <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic bg-gray-50 dark:bg-gray-800/40 p-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
          ${lesson.readTheory.intro}
        </p>

        <!-- Danh sách văn bản tác phẩm -->
        <div class="space-y-3">
          <div class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Hệ thống tác phẩm đọc hiểu cốt lõi:</div>
          <div class="space-y-3">
            ${textsHTML}
          </div>
        </div>

        <!-- Khái niệm tri thức ngữ văn then chốt -->
        <div class="space-y-2 pt-2">
          <div class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tri thức văn học cần nắm vững:</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${conceptsHTML}
          </div>
        </div>
      </div>

      <!-- 2. Thực hành Tiếng Việt -->
      <div class="my-6 space-y-4">
        <div class="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
          <span class="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">2</span>
          <h4 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Thực Hành Tiếng Việt: ${lesson.vietnameseLang.topic}</h4>
        </div>

        <div class="p-4 rounded-xl ${bgSoft} border ${borderCol} space-y-3">
          <p class="text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
            ${lesson.vietnameseLang.content}
          </p>

          <div class="space-y-2">
            <span class="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Ví dụ đối chiếu &amp; Vận dụng:</span>
            <div class="space-y-2">
              ${langExamplesHTML}
            </div>
          </div>

          <div class="pt-2 border-t border-gray-200/60 dark:border-gray-700/60 text-xs text-rose-700 dark:text-rose-300">
            <strong><i class="fa-solid fa-triangle-exclamation mr-1"></i> Lưu ý kĩ năng:</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              ${lesson.vietnameseLang.rules.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- 3. Rèn luyện kĩ năng Viết & Nói - Nghe -->
      <div class="my-6 space-y-4">
        <div class="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
          <span class="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">3</span>
          <h4 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Kĩ Năng Viết &amp; Nói - Nghe</h4>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Viết -->
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
              <i class="fa-solid fa-pen-nib"></i>
              <span>VIẾT: ${lesson.writing.type}</span>
            </div>
            <ul class="space-y-1.5 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              ${lesson.writing.steps.map(s => `<li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-blue-500 text-[10px] mt-1 shrink-0"></i> <span>${s}</span></li>`).join('')}
            </ul>
          </div>

          <!-- Nói và nghe -->
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
              <i class="fa-solid fa-microphone-lines"></i>
              <span>NÓI &amp; NGHE: ${lesson.speakingListening.topic}</span>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              ${lesson.speakingListening.guide}
            </p>
            <div class="p-2.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 text-[11px] text-amber-800 dark:text-amber-300 space-y-1 border border-amber-200/50 dark:border-amber-800/40">
              <div class="font-bold"><i class="fa-solid fa-lightbulb mr-1"></i> Mẹo phản hồi xây dựng:</div>
              <div>Tóm lược lại luận điểm của bạn trước khi đưa ra ý kiến phản biện; phân biệt bất đồng ý kiến với đánh giá con người.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Câu hỏi trắc nghiệm kiểm tra nhanh -->
      <div class="my-6 space-y-3 pt-3 border-t border-gray-100 dark:border-gray-800">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-circle-question text-rose-500"></i> Kiểm Tra Tri Thức Bài Học
          </h4>
          <span class="text-[11px] text-gray-400">2 Câu hỏi củng cố</span>
        </div>
        <div class="space-y-3">
          ${quizHTML}
        </div>
      </div>

    </section>
  `;
}

console.log('Rendering Ngữ Văn 7 page...');
const lessonsHTML = allLessons.map((l, i) => renderLessonHTML(l, i)).join('\n');

// Summary table rows
const summaryRowsHTML = summaryTable.map((row, idx) => `
  <tr class="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
    <td class="p-3 font-bold text-xs text-rose-600 dark:text-rose-400 whitespace-nowrap">${row.bài}</td>
    <td class="p-3 text-xs text-gray-700 dark:text-gray-300">${row.mạch}</td>
    <td class="p-3 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">${row.tiếngViệt}</td>
    <td class="p-3 text-xs text-blue-700 dark:text-blue-400">${row.viết}</td>
    <td class="p-3 text-xs text-amber-700 dark:text-amber-400">${row.nóiNghe}</td>
  </tr>
`).join('');

const fullPageHTML = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Ngữ Văn Lớp 7 (KNTT - GDPT 2018: 10 Bài Học • Tập 1 &amp; Tập 2 • Tri Thức Ngữ Văn • Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            rose: {
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              300: '#fda4af',
              400: '#fb7185',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
              950: '#4c0519'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb { background: #334155; }

    /* Bulletproof Dark/Light Mode Fallbacks */
    html.dark {
      color-scheme: dark;
    }
    html.dark body {
      background-color: #0b0f19 !important;
      color: #f1f5f9 !important;
    }
    html.dark .lesson-section,
    html.dark .sidebar-card,
    html.dark .modal-content-card {
      background-color: #111827 !important;
      border-color: #1e293b !important;
      color: #f1f5f9 !important;
    }
    html.dark .bg-white {
      background-color: #111827 !important;
      border-color: #1e293b !important;
      color: #f1f5f9;
    }
    html.dark .bg-slate-50,
    html.dark .bg-gray-50:not(svg) {
      background-color: #1e293b !important;
      border-color: #334155 !important;
    }
    html.dark .text-gray-900 {
      color: #f8fafc !important;
    }
    html.dark .text-gray-800 {
      color: #f1f5f9 !important;
    }
    html.dark .text-gray-700 {
      color: #cbd5e1 !important;
    }
    html.dark .text-gray-600 {
      color: #94a3b8 !important;
    }

    /* Light Mode Clean Contrasts */
    html:not(.dark) body {
      background-color: #f8fafc !important;
      color: #0f172a !important;
    }
    html:not(.dark) .lesson-section {
      background-color: #ffffff !important;
      border-color: #e2e8f0 !important;
      color: #0f172a !important;
    }
  </style>

  <!-- Prevent FOUC Theme Init -->
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen transition-colors">

  <!-- ==================== HEADER (STICKY) ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-rose-500/20 font-black text-sm group-hover:scale-105 transition">
            NV
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              NGỮ VĂN 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; Tập 1 &amp; Tập 2 &bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Sổ Tay Ngữ Văn Modal Button -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-200 dark:border-rose-800 transition flex items-center gap-1.5 cursor-pointer" title="Cẩm nang lí luận, thể loại và từ điển Hán Việt">
          <i class="fa-solid fa-book-bookmark text-rose-600 dark:text-rose-400"></i>
          <span class="hidden md:inline">Sổ Tay Ngữ Văn</span>
        </button>

        <!-- Nhật Kí Đọc Sách & Dự Án Modal Button -->
        <button onclick="openProjectModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800 transition flex items-center gap-1.5 cursor-pointer" title="Mẫu ghi chép dự án đọc sách &amp; Dàn ý phân tích">
          <i class="fa-solid fa-pen-fancy text-amber-600 dark:text-amber-400"></i>
          <span class="hidden md:inline">Nhật Kí Đọc Sách</span>
        </button>

        <!-- Trạng Nguyên Ngữ Văn 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-black shadow-md shadow-rose-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition cursor-pointer" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon theme-icon-moon text-sm"></i>
          <i class="fa-solid fa-sun theme-icon-sun text-sm text-amber-400 hidden"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-pink-950 text-white py-10 sm:py-14 border-b border-rose-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold tracking-wide">
            <i class="fa-solid fa-feather"></i> KHỐI THCS &bull; NGỮ VĂN LỚP 7 (GDPT 2018)
          </div>
          <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Khám Phá Thế Giới Ngôn Từ, Cảm Xúc &amp; Trải Nghiệm Văn Học
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Chương trình Ngữ Văn Lớp 7 (Bộ Kết nối tri thức với cuộc sống): Trọn vẹn <strong>10 Bài học / Chủ đề (Tập 1 &amp; Tập 2) &bull; Dự án đọc sách &bull; Phụ lục phương pháp</strong>. Tích hợp 10 Sơ đồ tư duy Vector SVG trực quan, Sổ tay Ngữ văn &amp; Từ điển Hán Việt, Nhật kí đọc sách sáng tạo và Đấu trường Trạng Nguyên Ngữ Văn 60:00.
          </p>
          <div class="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-book text-rose-400 mr-1.5"></i> Tập Một: Bài 1 &rarr; Bài 5 (Tuổi thơ, Khúc nhạc, Cội nguồn, Giai điệu, Trăm miền)
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-compass text-cyan-400 mr-1.5"></i> Tập Hai: Bài 6 &rarr; Bài 10 (Bài học sống, Viễn tưởng, Trưởng thành, Tự nhiên, Dự án đọc)
            </span>
          </div>
        </div>

        <!-- Quick Stat Badges -->
        <div class="grid grid-cols-2 gap-3 w-full lg:w-auto">
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-rose-400">10</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Bài học cốt lõi</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-pink-400">10</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Sơ đồ Vector SVG</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-amber-400">60+</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Trắc nghiệm &amp; Bài tập</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-cyan-400">60:00</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Trạng Nguyên Văn</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTENT WRAPPER ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ==================== SIDEBAR (STICKY) ==================== -->
      <aside class="w-full lg:w-80 shrink-0 lg:sticky lg:top-20 space-y-5">
        
        <!-- Search & Filter Card -->
        <div class="sidebar-card p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-3">
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-xs text-gray-400"></i>
            <input type="text" id="lessonSearchInput" onkeyup="filterLessons()" placeholder="Tìm bài học, tác giả, biện pháp tu từ..." 
                   class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500">
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1.5 pt-1 border-t border-gray-100 dark:border-gray-800">
            <div class="flex justify-between text-xs font-bold">
              <span class="text-gray-600 dark:text-gray-400">Tiến độ hoàn thành:</span>
              <span id="progressText" class="text-rose-600 dark:text-rose-400">0 / 10</span>
            </div>
            <div class="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-rose-500 to-pink-500 w-0 transition-all duration-300"></div>
            </div>
          </div>

          <!-- Volume Filter Tabs -->
          <div class="space-y-1 pt-1 border-t border-gray-100 dark:border-gray-800">
            <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">Lọc theo phân phối tập:</span>
            <div class="grid grid-cols-2 gap-1 text-[11px] font-semibold">
              <button onclick="setVolumeFilter('ALL')" id="filter-btn-ALL" class="filter-vol-btn active py-1.5 px-2 rounded-lg bg-rose-600 text-white transition text-center col-span-2">Tất Cả 10 Bài Học</button>
              <button onclick="setVolumeFilter('TẬP MỘT')" id="filter-btn-TẬP-MỘT" class="filter-vol-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Tập 1 (Bài 1–5)</button>
              <button onclick="setVolumeFilter('TẬP HAI')" id="filter-btn-TẬP-HAI" class="filter-vol-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Tập 2 (Bài 6–10)</button>
            </div>
          </div>
        </div>

        <!-- Lessons Navigation List -->
        <div class="sidebar-card p-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm max-h-[480px] overflow-y-auto scrollbar-thin space-y-1">
          <div class="px-2 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-between">
            <span>Danh mục bài học</span>
            <span class="text-rose-600 dark:text-rose-400 font-black">10 Bài</span>
          </div>
          
          ${allLessons.map((l, i) => `
            <a href="#${l.id}" 
               class="nav-lesson-item flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group"
               data-volume="${l.volume}">
              <span class="flex items-center gap-2 truncate">
                <span class="w-6 h-6 rounded-lg ${l.volume === 'TẬP MỘT' ? 'bg-rose-600' : 'bg-cyan-600'} text-white text-[10px] font-black flex items-center justify-center shrink-0">B${i+1}</span>
                <span class="truncate group-hover:text-rose-600 dark:group-hover:text-rose-400">${l.title}</span>
              </span>
              <i class="fa-solid fa-chevron-right text-[10px] text-gray-300 group-hover:translate-x-0.5 transition"></i>
            </a>
          `).join('')}

          <a href="#bang-tra-cuu" 
             class="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 transition group mt-2 border-t border-gray-100 dark:border-gray-800">
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-table-list"></i> Bảng Hệ Thống 10 Bài
            </span>
            <i class="fa-solid fa-arrow-down text-[10px]"></i>
          </a>

          <a href="#phu-luc-phuong-phap" 
             class="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold text-amber-600 dark:text-amber-400 transition group">
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-lightbulb"></i> Phụ Lục &amp; Tiêu Chí
            </span>
            <i class="fa-solid fa-arrow-down text-[10px]"></i>
          </a>
        </div>

        <!-- Quick Info Card -->
        <div class="sidebar-card p-4 rounded-2xl bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-amber-500/10 border border-rose-500/20 text-xs space-y-2">
          <div class="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
            <i class="fa-solid fa-award"></i> Đấu trường Trạng Nguyên
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Thử thách 40 câu hỏi trắc nghiệm ma trận ngữ văn 7 chuẩn GDPT 2018 trong 60 phút. Bấm nút <strong>Trạng Nguyên (60:00)</strong> ở thanh tiêu đề để thi tài!
          </p>
        </div>

      </aside>

      <!-- ==================== MAIN CONTENT ==================== -->
      <div class="flex-1 w-full min-w-0">
        
        <!-- 10 Bài Học -->
        ${lessonsHTML}

        <!-- ==================== BẢNG HỆ THỐNG 10 BÀI ==================== -->
        <section id="bang-tra-cuu" class="lesson-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm mb-8">
          <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                <i class="fa-solid fa-table-list"></i>
              </span>
              <div>
                <h3 class="text-base sm:text-xl font-black text-gray-900 dark:text-white">BẢNG HỆ THỐNG 10 BÀI HỌC NGỮ VĂN 7</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">Kiểu văn bản, Tri thức đọc, Tiếng Việt trọng tâm &amp; Sản phẩm Viết, Nói - Nghe</p>
              </div>
            </div>
            <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800">Tra cứu nhanh</span>
          </div>

          <div class="w-full overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr class="bg-gray-100/80 dark:bg-gray-800 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                  <th class="p-3">Bài học / Chủ đề</th>
                  <th class="p-3">Mạch đọc &amp; Tri thức thể loại</th>
                  <th class="p-3">Tiếng Việt trọng tâm</th>
                  <th class="p-3">Sản phẩm Viết</th>
                  <th class="p-3">Nói và Nghe</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                ${summaryRowsHTML}
              </tbody>
            </table>
          </div>
        </section>

        <!-- ==================== PHỤ LỤC & TIÊU CHÍ DÙNG CHUNG ==================== -->
        <section id="phu-luc-phuong-phap" class="lesson-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm mb-8 space-y-6">
          <div class="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
            <span class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm">
              <i class="fa-solid fa-lightbulb"></i>
            </span>
            <div>
              <h3 class="text-base sm:text-xl font-black text-gray-900 dark:text-white">PHỤ LỤC: QUY TRÌNH &amp; TIÊU CHÍ DÙNG CHUNG</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">Phương pháp rèn luyện Viết - Nói - Nghe và Phân biệt các khái niệm then chốt</p>
            </div>
          </div>

          <!-- 1. Quy trình Viết & Nói nghe -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700 space-y-2">
              <h4 class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-pen-nib"></i> Quy Trình Viết Cơ Bản 5 Bước
              </h4>
              <ol class="list-decimal pl-5 text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
                <li><strong>Đọc đúng yêu cầu:</strong> Xác định kiểu bài, đề tài, dung lượng, đối tượng người đọc và mục đích viết.</li>
                <li><strong>Tìm ý:</strong> Thu thập chất liệu từ văn bản, quan sát đời sống, tư liệu sách báo; phân biệt bằng chứng với suy nghĩ cá nhân.</li>
                <li><strong>Lập dàn ý:</strong> Sắp xếp ý theo trật tự mở bài - thân bài - kết bài mạch lạc; mỗi đoạn phục vụ một luận điểm.</li>
                <li><strong>Viết bản nháp:</strong> Dùng từ chính xác, câu rõ nghĩa, dẫn chứng chuẩn xác, giữ đúng đặc trưng thể loại.</li>
                <li><strong>Chỉnh sửa &amp; Hoàn thiện:</strong> Rà soát liên kết câu, chính tả, dấu câu, trích dẫn; tự đọc lại dưới góc nhìn người đọc.</li>
              </ol>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700 space-y-2">
              <h4 class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-microphone-lines"></i> Quy Trình Nói &amp; Nghe Chuẩn Mực
              </h4>
              <ul class="list-disc pl-5 text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
                <li><strong>Chuẩn bị bài nói:</strong> Xác định mục tiêu, người nghe, hệ thống ý chính; chuẩn bị phương tiện trực quan (tranh ảnh, slide, sơ đồ).</li>
                <li><strong>Trình bày:</strong> Giọng nói to, rõ ràng, tốc độ vừa phải; tương tác ánh mắt tự nhiên; không đọc nguyên văn giấy.</li>
                <li><strong>Lắng nghe chủ động:</strong> Ghi chép từ khóa, luận điểm; đặt câu hỏi để hiểu rõ; tóm lược ý người khác trước khi phản hồi.</li>
                <li><strong>Trao đổi tôn trọng:</strong> Tranh luận trên tinh thần học hỏi; phân biệt bất đồng quan điểm với đánh giá phẩm chất cá nhân.</li>
              </ul>
            </div>
          </div>

          <!-- 2. Phân biệt các khái niệm dễ nhầm lẫn -->
          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-circle-exclamation"></i> Bảng Phân Biệt Các Khái Niệm Dễ Nhầm Lẫn
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              
              <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1">
                <div class="font-bold text-rose-600 dark:text-rose-400">Đề tài vs Chủ đề vs Thông điệp</div>
                <div class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Đề tài:</strong> Phạm vi đời sống được phản ánh (tuổi thơ, chiến tranh).<br>
                  <strong>Chủ đề:</strong> Vấn đề tư tưởng trọng tâm tác phẩm đặt ra.<br>
                  <strong>Thông điệp:</strong> Lời nhắn nhủ, bài học nhân sinh gửi tới người đọc.
                </div>
              </div>

              <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1">
                <div class="font-bold text-blue-600 dark:text-blue-400">Tóm tắt vs Phân tích vs Cảm nhận</div>
                <div class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Tóm tắt:</strong> Ghi lại chuỗi sự việc chính trung thành với văn bản.<br>
                  <strong>Phân tích:</strong> Dùng lí lẽ và bằng chứng mổ xẻ nội dung &amp; nghệ thuật.<br>
                  <strong>Cảm nhận:</strong> Bày tỏ rung động cảm xúc cá nhân có căn cứ văn bản.
                </div>
              </div>

              <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1">
                <div class="font-bold text-emerald-600 dark:text-emerald-400">Mạch lạc vs Liên kết</div>
                <div class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Mạch lạc:</strong> Sự thống nhất chủ đề và logic phát triển nội dung.<br>
                  <strong>Liên kết:</strong> Các phương tiện hình thức ngôn ngữ kết nối câu/đoạn (phép lặp, phép thế, phép nối).
                </div>
              </div>

              <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1">
                <div class="font-bold text-purple-600 dark:text-purple-400">Tùy bút vs Tản văn</div>
                <div class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Tùy bút:</strong> Đậm chất trữ tình, cấu tứ tự do quanh cái tôi suy tưởng.<br>
                  <strong>Tản văn:</strong> Văn xuôi ngắn, cô đọng, mượn lát cắt đời thường để triết lí, kết hợp kể, tả, nghị luận.
                </div>
              </div>

              <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1">
                <div class="font-bold text-amber-600 dark:text-amber-400">Tục ngữ vs Thành ngữ</div>
                <div class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Tục ngữ:</strong> Câu nói hoàn chỉnh đúc kết kinh nghiệm sống/tự nhiên.<br>
                  <strong>Thành ngữ:</strong> Cụm từ cố định mang nghĩa bóng bẩy, dùng làm thành phần trong câu (chưa thành câu hoàn chỉnh).
                </div>
              </div>

              <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-1">
                <div class="font-bold text-cyan-600 dark:text-cyan-400">Nói quá vs Nói khoác</div>
                <div class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Nói quá:</strong> Phóng đại nghệ thuật nhằm nhấn mạnh, tăng biểu cảm tích cực.<br>
                  <strong>Nói khoác:</strong> Bịa đặt sai sự thật để khoe khoang, lừa dối người nghe.
                </div>
              </div>

            </div>
          </div>

          <!-- 3. Tiêu chí tự kiểm tra 5 mạch -->
          <div class="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/60 space-y-2 text-xs">
            <h4 class="font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-list-check"></i> Bộ Tiêu Chí Tự Đánh Giá Năng Lực Học Sinh
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
              <div class="space-y-1">
                <div class="font-bold text-gray-900 dark:text-white">1. Đọc hiểu:</div>
                <div class="text-gray-600 dark:text-gray-400">Nêu đúng đề tài, thể loại? Chỉ ra chi tiết tiêu biểu và tác dụng nghệ thuật?</div>
              </div>
              <div class="space-y-1">
                <div class="font-bold text-gray-900 dark:text-white">2. Tiếng Việt:</div>
                <div class="text-gray-600 dark:text-gray-400">Hiểu nghĩa theo ngữ cảnh? Nhận biết và sửa lỗi câu, dùng từ phù hợp?</div>
              </div>
              <div class="space-y-1">
                <div class="font-bold text-gray-900 dark:text-white">3. Viết:</div>
                <div class="text-gray-600 dark:text-gray-400">Đúng cấu trúc kiểu bài? Luận điểm - lí lẽ - bằng chứng gắn kết chặt chẽ?</div>
              </div>
              <div class="space-y-1">
                <div class="font-bold text-gray-900 dark:text-white">4. Nói &amp; Nghe:</div>
                <div class="text-gray-600 dark:text-gray-400">Tự tin, rõ ràng, đúng thời lượng? Lắng nghe và phản hồi tôn trọng?</div>
              </div>
              <div class="space-y-1">
                <div class="font-bold text-gray-900 dark:text-white">5. Đọc mở rộng:</div>
                <div class="text-gray-600 dark:text-gray-400">Tự chọn sách phù hợp, ghi nhật kí đọc và liên hệ sâu sắc với đời sống?</div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  </main>

  <!-- ==================== MODAL 1: SỔ TAY NGỮ VĂN & TỪ ĐIỂN HÁN VIỆT ==================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Sổ Tay Ngữ Văn 7 &bull; Cẩm Nang Tra Cứu</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Từ điển Hán Việt, Biện pháp tu từ &amp; Thuật ngữ thể loại cốt lõi</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-5 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        <!-- Section 1: Bảng yếu tố Hán Việt thường gặp -->
        <div class="space-y-2">
          <h4 class="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-language"></i> Bảng Yếu Tố Hán Việt Thường Gặp Trong Ngữ Văn 7
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 dark:text-rose-400">Thủy (水):</span> Nước (Thủy tiên, Thủy điện, Thủy triều, Thủy phi cơ)
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 dark:text-rose-400">Tiên (先):</span> Trước (Tiên tiến, Tiên phong, Tiên sinh, Tiên tri)
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 dark:text-rose-400">Hải (海):</span> Biển cả (Hải đăng, Hải quân, Hải cảng, Hải đồ)
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 dark:text-rose-400">Bản (本):</span> Gốc rễ, cội nguồn (Bản sắc, Bản đồ, Bản năng, Bản địa)
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 dark:text-rose-400">Đồng (同):</span> Cùng nhau (Đồng dao, Đồng hành, Đồng điệu, Đồng cảm)
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 dark:text-rose-400">Kí (記):</span> Ghi chép (Hồi kí, Du kí, Tùy bút, Nhật kí)
            </div>
          </div>
        </div>

        <!-- Section 2: Biện pháp tu từ -->
        <div class="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
          <h4 class="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-wand-magic-sparkles"></i> 4 Biện Pháp Tu Từ Trọng Tâm Lớp 7
          </h4>
          <div class="space-y-2">
            <div class="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/40">
              <strong>1. Nói giảm nói tránh:</strong> Diễn đạt tế nhị, khéo léo để giảm cảm giác bi thương, đau buồn, ghê sợ hoặc thô tục ('Anh không về nữa', 'Bác đã đi xa').
            </div>
            <div class="p-3 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/40">
              <strong>2. Nói quá (Phóng đại):</strong> Phóng đại quy mô, mức độ của sự vật để nhấn mạnh, tăng tính biểu cảm ('sỏi đá cũng thành cơm', 'ngáy như sấm').
            </div>
            <div class="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/40">
              <strong>3. Điệp ngữ (Điệp từ/cấu trúc):</strong> Lặp lại từ ngữ, cụm từ hoặc cấu trúc câu có chủ đích để tạo nhịp điệu và nhấn mạnh cảm xúc dâng trào.
            </div>
            <div class="p-3 rounded-lg bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-800/40">
              <strong>4. Ẩn dụ chuyển đổi cảm giác:</strong> Cảm nhận sự vật hiện tượng bằng một giác quan khác (Thính giác &rarr; Thị giác/Xúc giác: 'Từng giọt long lanh rơi / Tôi đưa tay tôi hứng').
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeHandbookModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng Sổ Tay
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 2: NHẬT KÍ ĐỌC SÁCH & DỰ ÁN ==================== -->
  <div id="projectModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <i class="fa-solid fa-pen-fancy"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-gray-900 dark:text-white">Nhật Kí Đọc Sách &amp; Dự Án Sáng Tạo (Bài 10)</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Biểu mẫu ghi chép tương tác và 7 bước hiện thực hóa ý tưởng</p>
          </div>
        </div>
        <button onclick="closeProjectModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 scrollbar-thin text-xs text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 space-y-2">
          <h4 class="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-list-ol"></i> 7 Bước Triển Khai Dự Án Đọc Sách
          </h4>
          <ol class="list-decimal pl-5 space-y-1">
            <li><strong>Chọn sách &amp; Xác định mục tiêu:</strong> Chọn tác phẩm văn học phù hợp lứa tuổi, đề ra câu hỏi đọc tò mò.</li>
            <li><strong>Lập kế hoạch đọc:</strong> Phân bổ số trang đọc mỗi ngày, chuẩn bị sổ ghi chép hoặc nhật kí điện tử.</li>
            <li><strong>Đọc chủ động:</strong> Ghi lại các chi tiết, câu trích dẫn đắt giá, đánh dấu nhân vật ấn tượng.</li>
            <li><strong>Lựa chọn sản phẩm sáng tạo:</strong> Poster tóm tắt, mô hình không gian truyện, video giới thiệu sách, kịch bản sân khấu hóa.</li>
            <li><strong>Chế tác &amp; Hoàn thiện:</strong> Lập dàn ý, vẽ tranh, biên tập nội dung đảm bảo đúng thông điệp tác phẩm.</li>
            <li><strong>Ngày hội sách:</strong> Thuyết trình trước lớp/trường, chia sẻ cảm xúc và lan tỏa niềm đam mê đọc sách.</li>
            <li><strong>Tự đánh giá:</strong> Tổng kết bài học rút ra, những thay đổi trong nhận thức và kế hoạch đọc sách tiếp theo.</li>
          </ol>
        </div>

        <!-- Mẫu biểu ghi chép nhật kí đọc sách trực tiếp -->
        <div class="space-y-3 pt-2">
          <h4 class="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-file-pen"></i> Biểu Mẫu Nhật Kí Đọc Sách (Thực Hành Trực Tiếp)
          </h4>
          <div class="space-y-2">
            <div>
              <label class="block font-bold text-gray-700 dark:text-gray-300 mb-1">Tên cuốn sách &amp; Tác giả:</label>
              <input type="text" id="journalBookTitle" placeholder="Ví dụ: Đất rừng phương Nam - Đoàn Giỏi" class="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100">
            </div>
            <div>
              <label class="block font-bold text-gray-700 dark:text-gray-300 mb-1">Nhân vật em ấn tượng nhất &amp; Lí do:</label>
              <textarea id="journalCharacter" rows="2" placeholder="Ví dụ: Thằng Cò nhanh nhẹn tháo vát, am hiểu từng ngọn cây rừng tràm..." class="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100"></textarea>
            </div>
            <div>
              <label class="block font-bold text-gray-700 dark:text-gray-300 mb-1">Câu văn / Đoạn trích đắt giá nhất:</label>
              <textarea id="journalQuote" rows="2" placeholder="Trích dẫn câu văn làm em xúc động..." class="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100"></textarea>
            </div>
            <div>
              <label class="block font-bold text-gray-700 dark:text-gray-300 mb-1">Bài học cuộc sống rút ra:</label>
              <input type="text" id="journalLesson" placeholder="Bài học về lòng yêu thương loài vật, sự hòa hợp với thiên nhiên..." class="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100">
            </div>
            <button onclick="saveReadingJournal()" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs hover:from-rose-500 hover:to-pink-500 transition shadow-md shadow-rose-500/20 cursor-pointer">
              <i class="fa-solid fa-bookmark mr-1"></i> Lưu Vào Nhật Kí Đọc Sách
            </button>
            <div id="journalAlert" class="hidden p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold text-center"></div>
          </div>
        </div>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button onclick="closeProjectModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
          Đóng
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 3: ĐẤU TRƯỜNG TRẠNG NGUYÊN (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="modal-content-card bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800">
      
      <!-- Exam Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-rose-900 via-pink-900 to-amber-900 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-400 text-rose-950 flex items-center justify-center font-black text-lg shadow">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Ngữ Văn 7</h3>
            <p class="text-xs text-rose-200">Ma trận chuẩn 40 câu hỏi trắc nghiệm &bull; Thời gian 60:00</p>
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

      <!-- Exam Body Questions -->
      <div id="examQuestionsContainer" class="p-6 overflow-y-auto space-y-6 scrollbar-thin text-xs text-gray-800 dark:text-gray-200">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Footer Controls -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs text-gray-500 dark:text-gray-400 font-semibold">
          Đã trả lời: <span id="answeredCount" class="font-black text-rose-600 dark:text-rose-400">0</span> / 40 câu
        </div>
        <div class="flex items-center gap-2">
          <button onclick="closeExamModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer">
            Tạm dừng
          </button>
          <button onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-black text-xs shadow-md shadow-rose-500/20 transition cursor-pointer">
            Nộp Bài Thi
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    }
    function updateThemeIcons() {
      const isDark = document.documentElement.classList.contains('dark');
      document.querySelectorAll('.theme-icon-sun').forEach(el => el.classList.toggle('hidden', !isDark));
      document.querySelectorAll('.theme-icon-moon').forEach(el => el.classList.toggle('hidden', isDark));
    }
    updateThemeIcons();
    document.addEventListener('DOMContentLoaded', updateThemeIcons);

    // Filter by Volume (Tập 1 / Tập 2 / All)
    function setVolumeFilter(volTag) {
      document.querySelectorAll('.filter-vol-btn').forEach(btn => btn.classList.remove('active', 'bg-rose-600', 'text-white'));
      const activeBtn = document.getElementById('filter-btn-' + volTag.replace(/\\s+/g, '-'));
      if (activeBtn) {
        activeBtn.classList.add('active', 'bg-rose-600', 'text-white');
      }

      const sections = document.querySelectorAll('.lesson-section[data-volume]');
      const navItems = document.querySelectorAll('.nav-lesson-item[data-volume]');

      sections.forEach(sec => {
        if (volTag === 'ALL' || sec.getAttribute('data-volume') === volTag) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });

      navItems.forEach(item => {
        if (volTag === 'ALL' || item.getAttribute('data-volume') === volTag) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Search filter
    function filterLessons() {
      const q = (document.getElementById('lessonSearchInput').value || '').toLowerCase().trim();
      const sections = document.querySelectorAll('.lesson-section');
      const navItems = document.querySelectorAll('.nav-lesson-item');

      sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });

      navItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Interactive Quiz in Lesson
    const lessonAnswers = {};
    function checkLessonQuiz(lessonIdx, qIdx, chosenIdx, correctIdx) {
      const key = lessonIdx + '-' + qIdx;
      lessonAnswers[key] = true;

      // Update progress
      const totalQuizzes = 20; // 10 lessons * 2
      const completed = Object.keys(lessonAnswers).length;
      const progressPercent = Math.min(100, Math.round((completed / totalQuizzes) * 100));
      document.getElementById('progressBar').style.width = progressPercent + '%';
      document.getElementById('progressText').innerText = Math.round(completed / 2) + ' / 10';

      const buttons = document.querySelectorAll('.quiz-btn-' + lessonIdx + '-' + qIdx);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('border-rose-400', 'hover:border-rose-400');
        if (idx === correctIdx) {
          btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/80', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-300');
        } else if (idx === chosenIdx) {
          btn.classList.add('bg-rose-100', 'dark:bg-rose-950/80', 'border-rose-500', 'text-rose-800', 'dark:text-rose-300');
        }
      });

      const feedback = document.getElementById('quiz-feedback-' + lessonIdx + '-' + qIdx);
      feedback.classList.remove('hidden');
      if (chosenIdx === correctIdx) {
        feedback.className = 'p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300';
        feedback.innerHTML = '<strong><i class=\"fa-solid fa-circle-check mr-1\"></i> Chính xác!</strong> Bạn đã nắm vững tri thức của bài học.';
      } else {
        feedback.className = 'p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300';
        feedback.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark mr-1\"></i> Chưa chính xác!</strong> Hãy xem lại đáp án đúng (ô màu xanh lá) để củng cố kiến thức.';
      }
    }

    // Modal controls
    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }
    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    function openProjectModal() {
      document.getElementById('projectModal').classList.remove('hidden');
    }
    function closeProjectModal() {
      document.getElementById('projectModal').classList.add('hidden');
    }

    function saveReadingJournal() {
      const title = document.getElementById('journalBookTitle').value.trim();
      const alertBox = document.getElementById('journalAlert');
      if (!title) {
        alertBox.className = 'p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-semibold text-center';
        alertBox.innerText = 'Vui lòng nhập tên cuốn sách trước khi lưu!';
        alertBox.classList.remove('hidden');
        return;
      }
      alertBox.className = 'p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold text-center';
      alertBox.innerText = '✓ Đã lưu thành công nhật kí đọc sách \"' + title + '\" vào kho lưu trữ!';
      alertBox.classList.remove('hidden');
      setTimeout(() => alertBox.classList.add('hidden'), 4000);
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
                <span class="font-bold text-gray-500">\${String.fromCharCode(65 + oIdx)}.</span>
                <span class="leading-snug">\${opt}</span>
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
          if (chosen === item.a) {
            score++;
            expBox.className = 'p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 mt-2';
            expBox.innerHTML = '<strong>✓ Đúng!</strong> ' + item.exp;
          } else {
            expBox.className = 'p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 mt-2';
            expBox.innerHTML = '<strong>✗ Chưa đúng!</strong> Đáp án đúng là <strong>' + String.fromCharCode(65 + item.a) + '</strong>. ' + item.exp;
          }
        }
      });

      // Calculate title
      let title = "Đồng Bảng Tú Tài";
      if (score >= 38) title = "🏆 TRẠNG NGUYÊN NGỮ VĂN";
      else if (score >= 32) title = "🥈 BẢNG NHÃN NGỮ VĂN";
      else if (score >= 26) title = "🥉 THÁM HOA NGỮ VĂN";

      const resMsg = [
        'KẾT QUẢ THI ĐẤU TRƯỜNG TRẠNG NGUYÊN:',
        '------------------------------------',
        'Điểm số: ' + score + ' / 40 câu đúng (' + Math.round((score / 40) * 10) + '/10 điểm)',
        'Danh hiệu đạt được: ' + title,
        'Hãy cuộn xem lời giải chi tiết cho từng câu hỏi bên dưới!'
      ].join('\\n');
      alert(resMsg);
    }
  </script>
</body>
</html>`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_7.html', fullPageHTML, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/literature_7.html', fullPageHTML, 'utf8');

console.log('Successfully generated nguvan_7.html and literature_7.html!');
