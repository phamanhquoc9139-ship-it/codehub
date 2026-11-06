const fs = require('fs');
const path = require('path');

const { partsData, topicsData } = require('./gdtc8_data.js');
const gdtc8Exam = require('./gdtc8_exam.js');

function buildHtml() {
  // Sidebar items
  let sidebarHtml = '';
  partsData.forEach((part, pIdx) => {
    sidebarHtml += `
      <div class="mb-4 part-nav-group" data-part="${part.id}">
        <div class="px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl mb-1.5 flex items-center justify-between border border-emerald-100 dark:border-emerald-800/50">
          <span class="truncate">${part.name}</span>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-white dark:bg-gray-800 shadow-sm font-bold text-emerald-600">${part.badge}</span>
        </div>
        <div class="space-y-1 pl-1">
    `;

    const topicsInPart = topicsData.filter(t => t.partId === part.id);
    topicsInPart.forEach((topic, tIdx) => {
      sidebarHtml += `
        <a href="#topic-${topic.id}" class="topic-nav-link flex items-center justify-between py-2 px-2.5 rounded-xl hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30 text-gray-700 dark:text-gray-300 text-xs transition group border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800" data-part="${part.id}" data-id="${topic.id}">
          <span class="truncate flex items-center gap-2">
            <span class="w-5 h-5 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 flex items-center justify-center text-[10px] font-black">${tIdx + 1}</span>
            <span class="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-medium">${topic.title}</span>
          </span>
          <i class="fa-solid fa-chevron-right text-[10px] text-gray-300 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5"></i>
        </a>
      `;
    });

    sidebarHtml += `
        </div>
      </div>
    `;
  });

  // Main Topic Sections
  let mainContentHtml = '';
  topicsData.forEach((topic, idx) => {
    const part = partsData.find(p => p.id === topic.partId) || { name: 'Chương trình GDTC 8', badge: 'Thể chất' };

    // Objectives HTML
    let objHtml = '';
    if (topic.objectives && topic.objectives.length) {
      objHtml = `
        <div class="mb-4 p-3.5 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/40">
          <strong class="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-bullseye text-emerald-600"></i> Mục tiêu &amp; Năng lực đạt được:
          </strong>
          <ul class="space-y-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            ${topic.objectives.map(o => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0 text-xs"></i>
                <span>${o}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    // Topic Quizzes
    let quizHtml = '';
    const quizzes = topic.quiz || [];
    quizzes.forEach((q, qIdx) => {
      const qId = `quiz_${topic.id}_${qIdx}`;
      const opts = q.options.map((opt, optIdx) => {
        const cleanOpt = opt.replace(/^\(Recommended\)\s*/, '');
        return `
          <button onclick="checkTopicQuiz(this, '${qId}', ${optIdx}, ${q.ans})" class="quiz-opt-btn w-full text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 text-xs sm:text-sm text-gray-800 dark:text-gray-200 transition flex items-center justify-between group">
            <span><strong class="text-emerald-600 dark:text-emerald-400 mr-1.5">${String.fromCharCode(65 + optIdx)}.</strong> ${cleanOpt}</span>
            <i class="fa-regular fa-circle text-gray-400 group-hover:text-emerald-500 text-xs"></i>
          </button>
        `;
      }).join('');

      quizHtml += `
        <div id="${qId}" class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 shadow-sm space-y-3 mb-3" data-topic="${topic.id}">
          <div class="flex items-start gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold shrink-0">Câu ${qIdx + 1}</span>
            <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug">${q.q}</p>
          </div>
          <div class="space-y-2">
            ${opts}
          </div>
          <div class="quiz-feedback hidden p-3 rounded-xl text-xs leading-relaxed"></div>
        </div>
      `;
    });

    mainContentHtml += `
      <article id="topic-${topic.id}" class="topic-card scroll-mt-20 mb-10 p-5 sm:p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200/90 dark:border-gray-700/90 shadow-sm hover:shadow-md transition relative overflow-hidden" data-part="${topic.partId}">
        <!-- Header Chủ đề -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-100 dark:border-gray-700">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                ${part.name}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">${part.badge}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center text-sm font-black shadow-md shadow-emerald-500/20">
                ${idx + 1}
              </span>
              ${topic.title}
            </h3>
          </div>
          <span class="text-xs text-gray-500 dark:text-gray-400 italic max-w-sm text-right hidden sm:block">${topic.desc}</span>
        </div>

        <!-- Sơ đồ trực quan đầu bài -->
        <div class="mb-6 p-4 rounded-2xl bg-gray-50/90 dark:bg-gray-900/50 border border-gray-200/70 dark:border-gray-700/70 overflow-hidden shadow-inner">
          <div class="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-diagram-project"></i> Sơ đồ trực quan &amp; Tiến trình kĩ thuật chủ đề
          </div>
          ${topic.svgHeader}
        </div>

        <!-- Mục tiêu bài học -->
        ${objHtml}

        <!-- Nội dung kĩ thuật, bài tập & hình minh họa từng bài -->
        <div class="mb-6 space-y-4">
          <div class="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-list-check text-emerald-500"></i> Nội dung kĩ thuật &amp; Bài tập chuẩn SGK
          </div>
          ${topic.content}
        </div>

        <!-- Bộ câu hỏi mini quiz -->
        <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-sm sm:text-base font-black text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-emerald-500"></i>
              Trắc nghiệm kiểm tra &amp; Đánh giá năng lực (${quizzes.length} câu)
            </h4>
            <span class="text-[11px] text-gray-400 italic hidden sm:inline">Chọn câu trả lời đúng nhất</span>
          </div>
          ${quizHtml}
        </div>
      </article>
    `;
  });

  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Giáo Dục Thể Chất 8 (GDTC 8 - 3 Phần, 8 Chủ Đề Chuẩn SGK Kết Nối Tri Thức • Sơ Đồ Động Tác SVG &amp; Trạng Nguyên Thể Thao 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            sport: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              300: '#6ee7b7',
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6.5.1 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    body, p, span, li, h1, h2, h3, h4, button, strong {
      letter-spacing: 0.01em !important;
      word-spacing: normal !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .topic-card p, .topic-card li {
      line-height: 1.65 !important;
    }
    svg text {
      letter-spacing: 0px !important;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      user-select: none;
    }
  </style>
</head>
<body class="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 glass-header border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-lg shadow-md group-hover:scale-105 transition-transform">
            CH
          </div>
          <div>
            <span class="font-black text-lg text-gray-900 dark:text-white tracking-tight flex items-center gap-1.5">
              CodeHub <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold">GDTC 8</span>
            </span>
            <p class="text-[10px] text-gray-500 dark:text-gray-400">Kết nối tri thức • Kế thừa GDPT 2018</p>
          </div>
        </a>
      </div>

      <!-- Quick Nav Filter -->
      <div class="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300">
        <button onclick="filterPart('ALL')" class="part-btn px-3 py-1.5 rounded-lg bg-white dark:bg-gray-700 text-emerald-600 dark:text-emerald-400 shadow-sm transition">Tất Cả 3 Phần</button>
        <button onclick="filterPart('KTC')" class="part-btn px-3 py-1.5 rounded-lg hover:text-emerald-600 transition">Kiến Thức Chung</button>
        <button onclick="filterPart('VDCB')" class="part-btn px-3 py-1.5 rounded-lg hover:text-emerald-600 transition">Vận Động Cơ Bản</button>
        <button onclick="filterPart('TTTC')" class="part-btn px-3 py-1.5 rounded-lg hover:text-emerald-600 transition">Thể Thao Tự Chọn</button>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Handbook Modal Trigger -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition border border-emerald-200 dark:border-emerald-800">
          <i class="fa-solid fa-book-medical text-emerald-600"></i>
          <span class="hidden sm:inline">Sổ Tay Thể Dục &amp; Dinh Dưỡng</span>
          <span class="sm:hidden">Sổ tay</span>
        </button>

        <!-- Exam anchor link -->
        <a href="#exam-arena" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition transform hover:scale-105">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên 60:00</span>
        </a>

        <!-- Dark mode toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:block text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden py-10 sm:py-14">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold mb-3 border border-white/30">
          <i class="fa-solid fa-medal text-amber-300"></i> Sách Giáo Khoa Kết Nối Tri Thức Với Cuộc Sống
        </div>
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
          Kiến Thức Cốt Lõi – Giáo Dục Thể Chất 8
        </h1>
        <p class="text-sm sm:text-base text-emerald-100 leading-relaxed font-normal mb-6">
          Hệ thống hóa toàn bộ 3 Phần lớn, 8 Chủ đề với 22 bài học/nội dung kĩ thuật điền kinh, thể dục nhịp điệu và thể thao tự chọn (Cầu lông, Bóng đá, Bóng rổ). Tích hợp sơ đồ vector trực quan từng động tác, bài tập bổ trợ, bảng sai lầm thường mắc và Đấu trường Trạng Nguyên Thể Thao 60 phút.
        </p>

        <!-- Metrics pill -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <span class="text-xl sm:text-2xl font-black text-white">3</span>
            <p class="text-[11px] text-emerald-100 font-medium">Phần Môn Học</p>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <span class="text-xl sm:text-2xl font-black text-white">8</span>
            <p class="text-[11px] text-emerald-100 font-medium">Chủ Đề Trọng Tâm</p>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <span class="text-xl sm:text-2xl font-black text-white">22+</span>
            <p class="text-[11px] text-emerald-100 font-medium">Kĩ Thuật &amp; Sơ Đồ SVG</p>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <span class="text-xl sm:text-2xl font-black text-white">60:00</span>
            <p class="text-[11px] text-emerald-100 font-medium">Trạng Nguyên Thể Thao</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Left Sidebar Nav -->
      <aside class="lg:w-80 shrink-0">
        <div class="sticky top-20 bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700 shadow-sm max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
            <h3 class="font-black text-sm text-gray-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-list-ol text-emerald-600"></i> Mục Lục 8 Chủ Đề
            </h3>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">SGK Lớp 8</span>
          </div>

          <!-- Sidebar Topics -->
          ${sidebarHtml}
        </div>
      </aside>

      <!-- Right Main Content -->
      <main class="flex-1 min-w-0">
        ${mainContentHtml}

        <!-- ==================== ĐẤU TRƯỜNG TRẠNG NGUYÊN THỂ THAO 8 ==================== -->
        <section id="exam-arena" class="mt-14 scroll-mt-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-950 to-gray-900 text-white shadow-xl relative overflow-hidden border border-emerald-700/50">
          <div class="relative z-10">
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-emerald-800/80">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2 border border-amber-400/30">
                  <i class="fa-solid fa-crown"></i> Kì Thi Trắc Nghiệm Tổng Hợp GDTC 8
                </div>
                <h3 class="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Đấu Trường Trạng Nguyên Thể Thao 8
                </h3>
                <p class="text-xs sm:text-sm text-emerald-200 mt-1">
                  Thử thách 20 câu hỏi trắc nghiệm bao quát trọn vẹn cả 3 phần: Dinh dưỡng, Chạy 100m, Nhảy cao, Chạy trung bình, Thể dục nhịp điệu và Thể thao tự chọn.
                </p>
              </div>

              <!-- Exam Timer -->
              <div class="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                <i class="fa-solid fa-stopwatch text-2xl text-amber-300"></i>
                <div>
                  <span class="text-[10px] uppercase font-bold text-emerald-200 block">Thời gian làm bài</span>
                  <span id="examTimer" class="text-2xl font-black font-mono tracking-wider text-white">60:00</span>
                </div>
              </div>
            </div>

            <!-- Exam Intro Card -->
            <div id="examIntro" class="text-center py-8">
              <div class="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-300 mx-auto flex items-center justify-center text-3xl mb-4 border border-amber-400/30">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <h4 class="text-lg font-bold mb-2">Sẵn sàng chinh phục Danh hiệu Trạng Nguyên Thể Thao 8?</h4>
              <p class="text-xs sm:text-sm text-emerald-200 max-w-md mx-auto mb-6">
                Bài thi gồm 20 câu trắc nghiệm khách quan trong 60 phút. Khi hoàn thành bạn sẽ được hệ thống chấm điểm và vinh danh bảng vàng!
              </p>
              <button onclick="startExam()" class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-black text-sm shadow-lg shadow-amber-500/20 transition transform hover:scale-105">
                <i class="fa-solid fa-play mr-2"></i> Bắt đầu làm bài thi
              </button>
            </div>

            <!-- Questions container -->
            <div id="examQuestions" class="hidden space-y-6"></div>

            <!-- Result Box -->
            <div id="examResult" class="hidden text-center py-8">
              <div class="w-20 h-20 rounded-3xl bg-amber-400/20 text-amber-300 mx-auto flex items-center justify-center text-4xl mb-4 border border-amber-400/30">
                <i class="fa-solid fa-award"></i>
              </div>
              <h4 id="resultTitle" class="text-xl sm:text-2xl font-black text-white mb-2"></h4>
              <p id="resultScore" class="text-3xl font-black text-amber-300 mb-3 font-mono"></p>
              <p id="resultFeedback" class="text-xs sm:text-sm text-emerald-200 max-w-lg mx-auto mb-6"></p>
              <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition border border-white/30">
                <i class="fa-solid fa-rotate-right mr-1.5"></i> Làm lại bài thi
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>

  <!-- SỔ TAY THỂ DỤC & DINH DƯỠNG MODAL -->
  <div id="handbookModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-gray-200 dark:border-gray-700 shadow-2xl p-6 sm:p-8">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700 mb-4">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-lg font-bold">
            <i class="fa-solid fa-book-medical"></i>
          </div>
          <div>
            <h3 class="font-black text-lg text-gray-900 dark:text-white">Sổ Tay Thể Dục &amp; Dinh Dưỡng Lớp 8</h3>
            <p class="text-xs text-gray-500">Quy tắc vàng luyện tập, dinh dưỡng và sơ cứu R.I.C.E</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        <!-- Card 1 -->
        <div class="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-utensils text-emerald-600"></i> 1. Tỉ lệ năng lượng dinh dưỡng thể thao chuẩn
          </h4>
          <p class="leading-relaxed">
            • <strong>Phân bổ calo các bữa ăn:</strong> Bữa sáng (30%), Bữa trưa (40% - 45%), Bữa tối (25% - 30%).<br>
            • <strong>Cơ cấu chất dinh dưỡng:</strong> Carbohydrate chiếm 56% - 68% (nguồn năng lượng chính), Protein 12% - 14% (xây dựng cơ bắp), Lipid 20% - 30% (dự trữ và hòa tan vitamin).
          </p>
        </div>

        <!-- Card 2 -->
        <div class="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-bottle-water text-blue-600"></i> 2. Quy tắc bù nước khoa học trong luyện tập
          </h4>
          <p class="leading-relaxed">
            • <strong>Trước tập 20-30 phút:</strong> Uống 150 – 250 ml nước lọc từng ngụm nhỏ.<br>
            • <strong>Trong khi tập:</strong> Sau mỗi 15-20 phút, bổ sung 100 – 150 ml nước; tránh uống một lúc quá nhiều.<br>
            • <strong>Sau khi tập:</strong> Uống bù nước từ từ theo lượng mồ hôi đã mất; có thể uống nước khoáng hoặc nước chanh muối loãng.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-kit-medical text-amber-600"></i> 3. Nguyên tắc sơ cứu chấn thương kín R.I.C.E
          </h4>
          <p class="leading-relaxed">
            • <strong>R (Rest - Nghỉ ngơi):</strong> Dừng ngay hoạt động, tránh tạo áp lực lên vùng chấn thương.<br>
            • <strong>I (Ice - Chườm đá):</strong> Chườm túi đá 15-20 phút/lần (cách nhau 2-3 giờ) để co mạch, giảm sưng phù. <em>(Tuyệt đối không bôi dầu nóng!)</em><br>
            • <strong>C (Compression - Băng ép):</strong> Dùng băng thun quấn ép nhẹ nhàng vùng khớp bị tổn thương.<br>
            • <strong>E (Elevation - Nâng cao):</strong> Kê cao vùng chi bị đau hơn tầm tim để máu trở về tim dễ dàng, giảm ứ huyết sưng tím.
          </p>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 text-right">
        <button onclick="closeHandbookModal()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition">
          Đã hiểu &amp; Đóng
        </button>
      </div>
    </div>
  </div>

  <!-- JavaScript Application -->
  <script>
    // Dark mode
    function toggleDarkMode() {
      const html = document.documentElement;
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Modal
    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }
    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    // Filter Part
    function filterPart(partId) {
      document.querySelectorAll('.part-btn').forEach(b => {
        b.classList.remove('bg-white', 'dark:bg-gray-700', 'text-emerald-600', 'dark:text-emerald-400', 'shadow-sm');
      });
      event.target.classList.add('bg-white', 'dark:bg-gray-700', 'text-emerald-600', 'dark:text-emerald-400', 'shadow-sm');

      const cards = document.querySelectorAll('.topic-card');
      const navGroups = document.querySelectorAll('.part-nav-group');

      if (partId === 'ALL') {
        cards.forEach(c => c.classList.remove('hidden'));
        navGroups.forEach(g => g.classList.remove('hidden'));
      } else {
        cards.forEach(c => {
          if (c.getAttribute('data-part') === partId) {
            c.classList.remove('hidden');
          } else {
            c.classList.add('hidden');
          }
        });
        navGroups.forEach(g => {
          if (g.getAttribute('data-part') === partId) {
            g.classList.remove('hidden');
          } else {
            g.classList.add('hidden');
          }
        });
      }
    }

    // Check Topic Mini Quiz
    function checkTopicQuiz(btn, qId, selectedIdx, correctIdx) {
      const container = document.getElementById(qId);
      const buttons = container.querySelectorAll('.quiz-opt-btn');
      const feedback = container.querySelector('.quiz-feedback');

      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-emerald-400', 'dark:hover:border-emerald-500');
      });

      if (selectedIdx === correctIdx) {
        btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-300');
        btn.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-600 text-xs';
        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-check text-sm"></i> <span><strong>Chính xác!</strong> Bạn đã chọn đáp án đúng theo quy chuẩn SGK.</span>';
      } else {
        btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-800', 'dark:text-rose-300');
        btn.querySelector('i').className = 'fa-solid fa-circle-xmark text-rose-600 text-xs';
        
        // Highlight correct
        buttons[correctIdx].classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-400', 'text-emerald-700', 'dark:text-emerald-300');
        buttons[correctIdx].querySelector('i').className = 'fa-solid fa-circle-check text-emerald-600 text-xs';

        feedback.className = 'quiz-feedback mt-2.5 p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-center gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-sm"></i> <span><strong>Chưa chính xác!</strong> Hãy xem lại động tác mẫu và đáp án đúng được đánh dấu màu xanh.</span>';
      }
      feedback.classList.remove('hidden');
    }

    // Exam Arena
    const examQuestions = ${JSON.stringify(gdtc8Exam)};
    let examTimerInterval = null;
    let examTimeLeft = 60 * 60;
    let userAnswers = {};

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      const qContainer = document.getElementById('examQuestions');
      qContainer.classList.remove('hidden');

      let html = '';
      examQuestions.forEach((q, idx) => {
        let optsHtml = '';
        q.options.forEach((opt, optIdx) => {
          const cleanOpt = opt.replace(/^\(Recommended\)\s*/, '');
          optsHtml += \`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-emerald-800/60 hover:bg-emerald-800/30 cursor-pointer transition">
              <input type="radio" name="q_\${idx}" value="\${optIdx}" onchange="recordExamAnswer(\${idx}, \${optIdx})" class="mt-1 text-emerald-500 focus:ring-emerald-400">
              <span class="text-xs sm:text-sm text-emerald-100"><strong class="text-amber-300 mr-1">\${String.fromCharCode(65 + optIdx)}.</strong> \${cleanOpt}</span>
            </label>
          \`;
        });

        html += \`
          <div class="p-5 rounded-2xl bg-white/5 border border-emerald-800/50 space-y-3">
            <div class="flex items-start gap-2">
              <span class="px-2 py-0.5 rounded bg-emerald-700 text-white text-xs font-bold shrink-0">Câu \${idx + 1}</span>
              <p class="text-xs sm:text-sm font-bold text-white leading-relaxed">\${q.q}</p>
            </div>
            <div class="space-y-2">
              \${optsHtml}
            </div>
          </div>
        \`;
      });

      html += \`
        <div class="text-center pt-4">
          <button onclick="submitExam()" class="px-10 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-black text-sm shadow-lg transition transform hover:scale-105">
            <i class="fa-solid fa-paper-plane mr-2"></i> Nộp Bài Thi Trạng Nguyên
          </button>
        </div>
      \`;

      qContainer.innerHTML = html;

      // Start timer
      clearInterval(examTimerInterval);
      examTimeLeft = 60 * 60;
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        document.getElementById('examTimer').innerText = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;

        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) {
          score++;
        }
      });

      document.getElementById('examQuestions').classList.add('hidden');
      const resContainer = document.getElementById('examResult');
      resContainer.classList.remove('hidden');

      document.getElementById('resultScore').innerText = score + ' / ' + examQuestions.length;
      let title = '';
      let feedback = '';

      if (score === 20) {
        title = 'Xuất Sắc! Danh Hiệu Trạng Nguyên Thể Thao 8 🏆';
        feedback = 'Tuyệt đối 100%! Bạn nắm vững trọn vẹn toàn bộ 3 Phần môn GDTC 8 cả về kĩ thuật, luật thi đấu và dinh dưỡng!';
      } else if (score >= 16) {
        title = 'Bảng Nhãn Thể Thao 8 🌟';
        feedback = 'Kết quả rất ấn tượng! Bạn nắm rất chắc kĩ thuật động tác và phương pháp tập luyện.';
      } else if (score >= 12) {
        title = 'Thám Hoa Thể Thao 8 👍';
        feedback = 'Đạt yêu cầu chuẩn kiến thức thể chất! Hãy rèn luyện thêm để đạt điểm tuyệt đối nhé.';
      } else {
        title = 'Cần Ôn Luyện Thêm 💡';
        feedback = 'Hãy xem lại các sơ đồ động tác và quy tắc luật thi đấu ở các chủ đề phía trên rồi thử sức lại nhé!';
      }

      document.getElementById('resultTitle').innerText = title;
      document.getElementById('resultFeedback').innerText = feedback;
    }

    function resetExam() {
      userAnswers = {};
      document.getElementById('examResult').classList.add('hidden');
      document.getElementById('examIntro').classList.remove('hidden');
      document.getElementById('examTimer').innerText = '60:00';
    }
  </script>
</body>
</html>
  `;

  return fullHtml;
}

const html = buildHtml();

const out1 = path.join('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_8.html');
const out2 = path.join('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/pe_8.html');

fs.writeFileSync(out1, html, 'utf8');
fs.writeFileSync(out2, html, 'utf8');

console.log('Build completed!');
console.log('Saved to:', out1, 'Size:', fs.statSync(out1).size, 'bytes');
console.log('Saved to:', out2, 'Size:', fs.statSync(out2).size, 'bytes');
