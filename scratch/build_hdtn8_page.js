const fs = require('fs');
const path = require('path');

const { topicsData, lessonsData } = require('./hdtn8_data.js');
const examQuestions = require('./hdtn8_exam.js');

function buildPage() {
  console.log('Building Hoạt Động Trải Nghiệm 8 page...');

  // Map topic pills for sidebar
  const topicFilterPills = `
    <button onclick="filterTopic('all')" class="topic-filter-btn px-2.5 py-1 text-xs rounded-lg font-bold bg-rose-600 text-white shadow-sm transition" data-topic="all">Tất cả (19)</button>
    ${topicsData.map(t => `
      <button onclick="filterTopic(${t.id})" class="topic-filter-btn px-2 py-1 text-[11px] rounded-lg font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600 transition" data-topic="${t.id}">CĐ ${t.id}</button>
    `).join('')}
  `;

  // Sidebar topics list
  const sidebarContent = topicsData.map(t => {
    const tLessons = lessonsData.filter(l => l.topicId === t.id);
    return `
      <div class="mb-4 topic-nav-group" data-topic="${t.id}">
        <div class="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50/70 dark:bg-rose-950/30 rounded-lg mb-1.5 flex items-center justify-between">
          <span class="truncate flex items-center gap-1.5">
            <i class="fa-solid ${t.icon} text-rose-500"></i> ${t.title}
          </span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-white dark:bg-gray-800 text-rose-600 font-mono shadow-xs shrink-0">${tLessons.length}</span>
        </div>
        <div class="pl-1.5 space-y-1">
          ${tLessons.map(l => `
            <a href="#lesson-${l.id}" class="lesson-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 text-gray-700 dark:text-gray-300 text-xs transition group" data-topic="${t.id}" data-id="${l.id}">
              <span class="truncate flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 flex items-center justify-center text-[9px] font-bold shrink-0">${l.num}</span>
                <span class="group-hover:text-rose-600 dark:group-hover:text-rose-400 transition truncate">${l.title}</span>
              </span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // 19 Lesson cards
  const lessonCards = lessonsData.map((l, lIdx) => {
    const topic = topicsData.find(t => t.id === l.topicId);
    const q = l.quiz;

    const quizOptions = q.options.map((opt, oIdx) => `
      <button onclick="checkQuizAnswer('${l.id}', 0, ${oIdx}, ${q.ans}, '${q.expl.replace(/'/g, "\\'")}')" class="quiz-btn-${l.id}-0 w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-400 dark:hover:border-rose-500 text-xs text-gray-800 dark:text-gray-200 transition flex items-center justify-between group bg-white dark:bg-gray-800/80">
        <span class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold flex items-center justify-center group-hover:bg-rose-100 group-hover:text-rose-700 transition">${String.fromCharCode(65 + oIdx)}</span>
          <span>${opt.replace(/^\(Recommended\)\s*/, '')}</span>
        </span>
        <i class="fa-regular fa-circle text-gray-400 group-hover:text-rose-500 text-xs"></i>
      </button>
    `).join('');

    return `
      <article id="lesson-${l.id}" class="lesson-card bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-sm transition hover:shadow-md mb-8" data-topic="${l.topicId}" data-id="${l.id}">
        <!-- Header bài học -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xs">
                HĐTN, HN 8 • ${topic.title}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">Nội dung ${l.num}/19</span>
            </div>
            <h2 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
              <span class="w-7 h-7 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">${l.num}</span>
              ${l.title}
            </h2>
          </div>
          <span class="text-xs text-gray-500 italic max-w-sm text-right hidden sm:block">${l.desc}</span>
        </div>

        <!-- Hình vẽ & Sơ đồ trực quan bài học -->
        <div class="mb-5 p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-gray-50/90 to-gray-100/50 dark:from-gray-900/60 dark:to-gray-900/30 border border-gray-200/80 dark:border-gray-700/80 overflow-hidden">
          <div class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-shapes text-rose-500"></i> Sơ đồ trực quan &amp; Quy trình hoạt động
          </div>
          ${l.svg}
        </div>

        <!-- 3 Khối nội dung cốt lõi -->
        <div class="space-y-3.5 mb-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <!-- Khối 1: Kiến thức cốt lõi -->
          <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 rounded-2xl border border-rose-200/70 dark:border-rose-900/50">
            <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-book-bookmark text-rose-600"></i> 1. Kiến thức cốt lõi &amp; Nhận diện
            </h4>
            <ul class="space-y-1.5 text-xs leading-relaxed text-gray-800 dark:text-gray-200">
              ${l.keyPoints.map(kp => `<li class="flex items-start gap-2"><span class="text-rose-500 font-bold mt-0.5">•</span><span>${kp}</span></li>`).join('')}
            </ul>
          </div>

          <!-- Khối 2: Kĩ năng thực hiện từng bước -->
          <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200/70 dark:border-emerald-900/50">
            <h4 class="font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-list-check text-emerald-600"></i> 2. Kĩ năng &amp; Quy trình từng bước
            </h4>
            <ul class="space-y-1.5 text-xs leading-relaxed text-gray-800 dark:text-gray-200">
              ${l.skills.map(sk => `<li class="flex items-start gap-2"><span class="text-emerald-500 font-bold mt-0.5">✓</span><span>${sk}</span></li>`).join('')}
            </ul>
          </div>

          <!-- Khối 3: Thực hành & Tiêu chí tự đánh giá -->
          <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border border-amber-200/70 dark:border-amber-900/50">
            <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2 text-xs sm:text-sm">
              <i class="fa-solid fa-bullseye text-amber-600"></i> 3. Thực hành trải nghiệm &amp; Tiêu chí tự đánh giá
            </h4>
            <div class="space-y-2 text-xs leading-relaxed text-gray-800 dark:text-gray-200">
              <p><strong class="text-amber-800 dark:text-amber-400">Gợi ý hoạt động:</strong> ${l.practice}</p>
              <p><strong class="text-amber-800 dark:text-amber-400">Tiêu chí đánh giá:</strong> ${l.evaluation}</p>
            </div>
          </div>
        </div>

        <!-- Khối Thực hành Mini Quiz -->
        <div class="quiz-item p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700" data-id="${l.id}">
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 mb-2.5 flex items-start gap-2">
            <span class="px-2 py-0.5 rounded-md bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[11px] font-extrabold shrink-0">Thực hành</span>
            <span>${q.q}</span>
          </p>
          <div class="space-y-1.5">
            ${quizOptions}
          </div>
          <div id="feedback-${l.id}-0" class="hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed transition-all"></div>
        </div>
      </article>
    `;
  }).join('');

  // Full HTML Document
  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Hoạt Động Trải Nghiệm, Hướng Nghiệp 8 (HĐTN, HN 8 - SGK Kết Nối Tri Thức: 9 Chủ Đề • 19 Bài Học • Hình Vẽ Vector Minh Họa &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#fdf2f8',
              100: '#fce7f3',
              200: '#fbcfe8',
              300: '#f9a8d4',
              400: '#f472b6',
              500: '#ec4899',
              600: '#db2777',
              700: '#be185d',
              800: '#9d174d',
              900: '#831843'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
    }
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    /* Chống dính chữ tuyệt đối & hiển thị sắc nét tiếng Việt */
    body, p, li, h1, h2, h3, h4, button, span {
      letter-spacing: 0.005em !important;
      word-spacing: normal !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .lesson-card p, .lesson-card li {
      line-height: 1.7 !important;
    }
    svg text {
      letter-spacing: normal !important;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
      user-select: none;
    }
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    .lesson-card { scroll-margin-top: 5rem; }
  </style>
</head>
<body class="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 glass-header transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-600 via-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-compass text-sm"></i>
          </div>
          <div>
            <span class="font-extrabold text-base tracking-tight bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">CodeHub</span>
            <span class="hidden sm:inline-block text-[11px] font-semibold text-gray-400 dark:text-gray-500 ml-1.5 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">Lớp 8</span>
          </div>
        </a>
        <div class="h-4 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
        <div class="hidden sm:flex items-center gap-1.5">
          <span class="text-xs font-bold text-gray-700 dark:text-gray-300">Hoạt Động Trải Nghiệm, Hướng Nghiệp 8</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300">9 Chủ đề • 19 Bài</span>
        </div>
      </div>

      <!-- Quick Search & Actions -->
      <div class="flex items-center gap-2">
        <div class="relative hidden md:block w-48 lg:w-64">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-xs text-gray-400"></i>
          <input type="text" id="lessonSearch" onkeyup="searchLessons()" placeholder="Tìm kiếm bài học..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-rose-400 transition">
        </div>

        <!-- Mở Modal Sổ tay Kĩ năng -->
        <button onclick="openSkillsModal()" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-200 dark:border-rose-800 transition flex items-center gap-1.5 shadow-xs">
          <i class="fa-solid fa-book-open-reader text-rose-600"></i>
          <span class="hidden sm:inline">Sổ tay Kĩ năng 8</span>
        </button>

        <!-- Nút Trạng Nguyên 60:00 -->
        <a href="#exam-section" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-bold shadow-md shadow-rose-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60p)</span>
        </a>

        <!-- Dark/Light Mode -->
        <button onclick="toggleDarkMode()" class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs transition" title="Đổi giao diện sáng/tối">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Sidebar Left Navigation -->
      <aside class="lg:w-80 shrink-0">
        <div class="sticky top-20 bg-white dark:bg-gray-800 rounded-3xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
          
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
            <h3 class="font-extrabold text-sm text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-bars-staggered text-rose-500"></i> Mục Lục 9 Chủ Đề
            </h3>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">19 Bài học</span>
          </div>

          <!-- Lọc nhanh theo Chủ đề -->
          <div class="mb-3">
            <div class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Lọc nhanh theo chủ đề:</div>
            <div class="flex flex-wrap gap-1">
              ${topicFilterPills}
            </div>
          </div>

          <!-- Danh sách bài học theo 9 Chủ đề -->
          <div id="sidebarLessonList" class="max-h-[calc(100vh-22rem)] overflow-y-auto pr-1">
            ${sidebarContent}
          </div>

          <!-- Banner mini hướng dẫn -->
          <div class="mt-4 p-3 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border border-rose-200/60 dark:border-rose-900/60 text-xs">
            <div class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5 mb-1">
              <i class="fa-solid fa-lightbulb text-amber-500"></i> Trải nghiệm 3 nhịp:
            </div>
            <p class="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong>Khám phá – Kết nối</strong> ➔ <strong>Thực hành rèn luyện</strong> ➔ <strong>Vận dụng thực tế</strong> vào nhà trường, gia đình và cộng đồng!
            </p>
          </div>

        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 min-w-0">

        <!-- Hero Banner -->
        <div class="mb-8 rounded-3xl bg-gradient-to-r from-fuchsia-600 via-rose-600 to-amber-500 p-6 sm:p-8 text-white shadow-xl shadow-rose-600/15 relative overflow-hidden">
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-rose-100 mb-3">
              <i class="fa-solid fa-sparkles text-amber-300"></i> SGK Kết Nối Tri Thức Với Cuộc Sống
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
              HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP 8
            </h1>
            <p class="text-sm sm:text-base text-rose-100 max-w-2xl font-medium leading-relaxed mb-6">
              Hệ thống học liệu nền tảng trọn bộ <strong>9 Chủ đề</strong> &amp; <strong>19 Bài học</strong> chuẩn SGK: Phát triển tình bạn, điều chỉnh cảm xúc, rèn luyện sự tự chủ, kĩ năng tiêu dùng, trách nhiệm gia đình, phụng sự cộng đồng và định hướng nghề nghiệp tương lai.
            </p>

            <div class="flex flex-wrap items-center gap-3">
              <a href="#lesson-hdtn-1-1" class="px-5 py-2.5 rounded-2xl bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                <i class="fa-solid fa-play text-rose-600"></i> Bắt đầu học ngay
              </a>
              <button onclick="openSkillsModal()" class="px-5 py-2.5 rounded-2xl bg-rose-700/60 hover:bg-rose-700 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition flex items-center gap-2">
                <i class="fa-solid fa-book-open"></i> Sổ tay Kĩ năng sống
              </button>
              <a href="#exam-section" class="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                <i class="fa-solid fa-trophy"></i> Thi Trạng Nguyên 60:00
              </a>
            </div>
          </div>

          <!-- Decorative vector background -->
          <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="absolute right-10 top-6 text-white/15 text-8xl pointer-events-none hidden sm:block">
            <i class="fa-solid fa-compass"></i>
          </div>
        </div>

        <!-- 19 Bài học chi tiết -->
        <div id="lessonsContainer">
          ${lessonCards}
        </div>

        <!-- Section: Đấu trường Trạng Nguyên HĐTN 8 (60:00) -->
        <section id="exam-section" class="mt-12 mb-8 rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 p-6 sm:p-8 text-white border border-rose-800/40 shadow-xl relative overflow-hidden">
          
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
                <i class="fa-solid fa-crown text-amber-400"></i> Đấu Trường Vinh Danh Lớp 8
              </div>
              <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                ĐẤU TRƯỜNG TRẠNG NGUYÊN HOẠT ĐỘNG TRẢI NGHIỆM 8
              </h2>
              <p class="text-xs sm:text-sm text-gray-300 mt-1">20 câu hỏi trắc nghiệm tình huống kĩ năng sống, gia đình, cộng đồng &amp; hướng nghiệp (Thời gian: 60:00).</p>
            </div>

            <!-- Timer Display -->
            <div class="flex items-center gap-3">
              <div class="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <div class="text-[10px] uppercase font-bold text-gray-400">Thời gian làm bài</div>
                <div id="examTimer" class="font-mono text-xl sm:text-2xl font-black text-amber-400">60:00</div>
              </div>
            </div>
          </div>

          <!-- Intro Screen -->
          <div id="examIntro" class="text-center py-8 max-w-xl mx-auto">
            <div class="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-rose-500 text-slate-950 text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
              <i class="fa-solid fa-award"></i>
            </div>
            <h3 class="text-lg font-bold mb-2">Sẵn sàng thử thách năng lực thực tế?</h3>
            <p class="text-xs text-gray-300 mb-6 leading-relaxed">
              Bộ đề tổng hợp 20 câu hỏi tình huống từ 9 chủ đề SGK HĐTN, HN 8. Sau khi hoàn thành, hệ thống sẽ tự động chấm điểm, xếp hạng bảng vàng Trạng Nguyên và đưa ra đáp án giải thích chi tiết.
            </p>
            <button onclick="startExam()" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition transform hover:scale-105">
              Bắt Đầu Làm Bài (60 Phút)
            </button>
          </div>

          <!-- Exam Body Screen -->
          <div id="examBody" class="hidden">
            <div id="examQuestionsList" class="space-y-6 mb-8">
              <!-- Rendered via JS -->
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-white/10">
              <span id="answeredCount" class="text-xs text-gray-300">Đã trả lời: 0/20 câu</span>
              <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                <i class="fa-solid fa-paper-plane"></i> Nộp Bài Thi
              </button>
            </div>
          </div>

          <!-- Exam Result Screen -->
          <div id="examResult" class="hidden text-center py-6">
            <div id="resultBadge" class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 text-slate-950 text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <h3 id="resultTitle" class="text-2xl font-black mb-1 text-amber-400">DANH HIỆU TRẠNG NGUYÊN</h3>
            <p id="resultScore" class="text-lg font-bold text-white mb-2">Điểm số: 20/20 (100%)</p>
            <p id="resultMessage" class="text-xs text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
              Xuất sắc! Em đã nắm vững toàn bộ kiến thức kĩ năng sống, giải quyết tình huống văn minh và định hướng nghề nghiệp tương lai rõ ràng.
            </p>

            <div class="flex justify-center gap-3">
              <button onclick="reviewExamAnswers()" class="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition">
                Xem Bảng Đáp Án Chi Tiết
              </button>
              <button onclick="resetExam()" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition">
                Làm Lại Đề Thi
              </button>
            </div>

            <!-- Detailed Answers Review -->
            <div id="examReviewContainer" class="hidden mt-8 text-left space-y-4 max-w-3xl mx-auto">
              <!-- Rendered via JS -->
            </div>
          </div>

        </section>

      </main>
    </div>
  </div>

  <!-- Modal: Sổ tay Kĩ năng sống & Hướng nghiệp 8 -->
  <div id="skillsModal" class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/40">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white">Sổ Tay Kĩ Năng Sống &amp; Trải Nghiệm 8</h3>
            <p class="text-[11px] text-gray-500 dark:text-gray-400">Các quy trình hành động chuẩn mực trong SGK Kết nối tri thức</p>
          </div>
        </div>
        <button onclick="closeSkillsModal()" class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        
        <!-- Quy trình 1: Điều chỉnh cảm xúc -->
        <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-black">1</span>
            Quy trình 5 bước điều chỉnh cảm xúc tích cực
          </h4>
          <ol class="list-decimal pl-4 space-y-1 text-xs">
            <li><strong>Nhận diện &amp; Gọi tên cảm xúc:</strong> Tự hỏi mình đang tức giận, thất vọng, buồn rầu hay lo lắng?</li>
            <li><strong>Dừng lại và tạo khoảng cách:</strong> Hít thở sâu 3 - 5 nhịp, đếm từ 1 đến 10 trước khi phát ngôn.</li>
            <li><strong>Xem xét lại góc nhìn:</strong> Đặt mình vào vị trí của người khác, tìm nguyên nhân sâu xa.</li>
            <li><strong>Chọn cách giải tỏa an toàn:</strong> Vận động nhẹ, nghe nhạc, viết nhật kí hoặc tâm sự với người tin cậy.</li>
            <li><strong>Trao đổi giải quyết nguyên nhân:</strong> Khi đã hoàn toàn bình tĩnh, gặp đối phương để nói rõ cảm xúc và tìm giải pháp.</li>
          </ol>
        </div>

        <!-- Quy trình 2: Kĩ năng từ chối an toàn -->
        <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-black">2</span>
            Kĩ năng 4 bước từ chối an toàn &amp; dứt khoát
          </h4>
          <ol class="list-decimal pl-4 space-y-1 text-xs">
            <li><strong>Nói "Không" ngắn gọn &amp; dứt khoát:</strong> Thể hiện rõ lập trường, giữ ánh mắt kiên định.</li>
            <li><strong>Nêu lí do chính đáng:</strong> Trình bày lí do thật gọn gàng, không cần biện minh quanh co.</li>
            <li><strong>Đề xuất giải pháp thay thế tích cực:</strong> Nếu muốn duy trì quan hệ bạn bè (Ví dụ: "Chiều nay mình phải học bài, cuối tuần mình cùng đi đá bóng nhé").</li>
            <li><strong>Rời khỏi tình huống &amp; tìm trợ giúp:</strong> Nếu đối phương tiếp tục gây sức ép hoặc đe dọa, lập tức rời đi và báo người lớn.</li>
          </ol>
        </div>

        <!-- Quy trình 3: Kế hoạch kinh doanh nhỏ học sinh -->
        <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">3</span>
            7 bước lập kế hoạch "Nhà kinh doanh nhỏ"
          </h4>
          <ol class="list-decimal pl-4 space-y-1 text-xs">
            <li>Hình thành ý tưởng (sản phẩm làm thủ công, thiệp, đồ tái chế phù hợp lứa tuổi).</li>
            <li>Khảo sát nhu cầu thực tế của thầy cô, bạn bè trong trường.</li>
            <li>Lập bảng tính chi phí nguyên liệu và vốn ban đầu.</li>
            <li>Xin ý kiến và sự đồng ý của cha mẹ, thầy cô phụ trách.</li>
            <li>Thử nghiệm sản xuất và bán thử quy mô nhỏ, an toàn.</li>
            <li>Ghi chép thu chi minh bạch: <code>Lợi nhuận = Doanh thu - Chi phí</code>.</li>
            <li>Lắng nghe phản hồi của người mua để cải tiến chất lượng.</li>
          </ol>
        </div>

        <!-- Quy trình 4: Kế hoạch thiện nguyện nhân ái -->
        <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">4</span>
            6 bước tổ chức hoạt động thiện nguyện thiết thực
          </h4>
          <ol class="list-decimal pl-4 space-y-1 text-xs">
            <li>Xác định đúng nhu cầu thật của nơi cần trợ giúp (tránh ủng hộ hình thức).</li>
            <li>Chọn mục tiêu vừa sức học sinh (sách vở, đồ dùng học tập, áo ấm sạch đẹp).</li>
            <li>Lập kế hoạch phân công thời gian, địa điểm, phân loại đồ quyên góp.</li>
            <li>Báo cáo giáo viên chủ nhiệm / Đoàn Đội để được hướng dẫn an toàn.</li>
            <li>Trao gửi tận tay với thái độ trân trọng, nâng niu, tôn trọng sự riêng tư.</li>
            <li>Tổng kết, công khai minh bạch số lượng và cảm ơn các bạn tham gia.</li>
          </ol>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-end">
        <button onclick="closeSkillsModal()" class="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition">
          Đã Hiểu &amp; Áp Dụng
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">Khóa Học Hoạt Động Trải Nghiệm, Hướng Nghiệp Lớp 8 • SGK Kết Nối Tri Thức Với Cuộc Sống</p>
      <p>Nền tảng học tập CodeHub © 2026 • Đầy đủ 9 Chủ đề, 19 Bài học, 19 Sơ đồ SVG &amp; Đấu trường Trạng Nguyên 60:00</p>
    </div>
  </footer>

  <!-- Script Logic -->
  <script>
    // 1. Dark Mode Toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }

    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    // 2. Filter by Topic
    function filterTopic(topicId) {
      const buttons = document.querySelectorAll('.topic-filter-btn');
      buttons.forEach(btn => {
        const val = btn.getAttribute('data-topic');
        if (val == topicId) {
          btn.className = 'topic-filter-btn px-2.5 py-1 text-xs rounded-lg font-bold bg-rose-600 text-white shadow-sm transition';
        } else {
          btn.className = 'topic-filter-btn px-2 py-1 text-[11px] rounded-lg font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600 transition';
        }
      });

      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(card => {
        if (topicId === 'all' || card.getAttribute('data-topic') == topicId) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      const navGroups = document.querySelectorAll('.topic-nav-group');
      navGroups.forEach(g => {
        if (topicId === 'all' || g.getAttribute('data-topic') == topicId) {
          g.classList.remove('hidden');
        } else {
          g.classList.add('hidden');
        }
      });
    }

    // 3. Search Lessons
    function searchLessons() {
      const val = document.getElementById('lessonSearch').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(val)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // 4. Modal Sổ tay Kĩ năng
    function openSkillsModal() {
      document.getElementById('skillsModal').classList.remove('hidden');
    }
    function closeSkillsModal() {
      document.getElementById('skillsModal').classList.add('hidden');
    }

    // 5. Mini Quiz Handler
    function checkQuizAnswer(lessonId, questionIdx, selectedIdx, correctIdx, explanation) {
      const btns = document.querySelectorAll('.quiz-btn-' + lessonId + '-' + questionIdx);
      btns.forEach((btn, idx) => {
        btn.disabled = true;
        const icon = btn.querySelector('i');
        if (idx === correctIdx) {
          btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200');
          if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-600';
        } else if (idx === selectedIdx) {
          btn.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
          if (icon) icon.className = 'fa-solid fa-circle-xmark text-rose-600';
        }
      });

      const fb = document.getElementById('feedback-' + lessonId + '-' + questionIdx);
      if (fb) {
        fb.classList.remove('hidden');
        const isRight = selectedIdx === correctIdx;
        fb.className = isRight 
          ? 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
          : 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        fb.innerHTML = (isRight ? '<strong><i class=\"fa-solid fa-circle-check text-emerald-600\"></i> Chính xác!</strong> ' : '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600\"></i> Chưa chính xác!</strong> ') + explanation;
      }
    }

    // 6. Đấu trường Trạng Nguyên Exam Logic (20 Questions - 60:00)
    const examQuestions = ${JSON.stringify(examQuestions)};
    let examTimeSeconds = 60 * 60;
    let examTimerInterval = null;
    let userExamAnswers = {};

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      document.getElementById('examBody').classList.remove('hidden');
      document.getElementById('examResult').classList.add('hidden');
      userExamAnswers = {};

      // Render Questions
      const listEl = document.getElementById('examQuestionsList');
      listEl.innerHTML = examQuestions.map((q, idx) => {
        const opts = q.options.map((opt, oIdx) => \`
          <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer text-xs transition">
            <input type="radio" name="exam_q_\${idx}" value="\${oIdx}" onchange="selectExamAns(\${idx}, \${oIdx})" class="text-rose-500 focus:ring-0">
            <span>\${opt.replace(/^\\(Recommended\\)\\s*/, '')}</span>
          </label>
        \`).join('');

        return \`
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p class="text-xs sm:text-sm font-bold text-white mb-3">
              <span class="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-black mr-2">Câu \${idx + 1}</span>
              \${q.q}
            </p>
            <div class="space-y-2">
              \${opts}
            </div>
          </div>
        \`;
      }).join('');

      // Start countdown
      examTimeSeconds = 60 * 60;
      updateTimerDisplay();
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeSeconds--;
        updateTimerDisplay();
        if (examTimeSeconds <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const m = Math.floor(examTimeSeconds / 60);
      const s = examTimeSeconds % 60;
      const el = document.getElementById('examTimer');
      if (el) el.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function selectExamAns(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;
      const count = Object.keys(userExamAnswers).length;
      document.getElementById('answeredCount').innerText = 'Đã trả lời: ' + count + '/' + examQuestions.length + ' câu';
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);

      let correct = 0;
      examQuestions.forEach((q, idx) => {
        if (userExamAnswers[idx] === q.ans) correct++;
      });

      const total = examQuestions.length;
      const pct = Math.round((correct / total) * 100);

      document.getElementById('examBody').classList.add('hidden');
      document.getElementById('examResult').classList.remove('hidden');

      const titleEl = document.getElementById('resultTitle');
      const scoreEl = document.getElementById('resultScore');
      const msgEl = document.getElementById('resultMessage');
      const badgeEl = document.getElementById('resultBadge');

      scoreEl.innerText = 'Điểm số: ' + correct + '/' + total + ' (' + pct + '%)';

      if (correct >= 19) {
        titleEl.innerText = 'DANH HIỆU TRẠNG NGUYÊN HOẠT ĐỘNG TRẢI NGHIỆM 8 🏆';
        msgEl.innerText = 'Tuyệt đối xuất sắc! Em làm chủ kĩ năng sống, giải quyết tình huống văn minh, tự chủ và có định hướng nghề nghiệp rất vững vàng.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-amber-300 to-amber-500 text-slate-950 text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-crown\"></i>';
      } else if (correct >= 16) {
        titleEl.innerText = 'DANH HIỆU BẢNG NHÃN (XUẤT SẮC) 🥈';
        msgEl.innerText = 'Rất tốt! Em có nền tảng trải nghiệm vững vàng, biết quản lí cảm xúc và ứng xử có trách nhiệm.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-950 text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-medal\"></i>';
      } else if (correct >= 13) {
        titleEl.innerText = 'DANH HIỆU THÁM HOA (KHÁ GIỎI) 🥉';
        msgEl.innerText = 'Khá tốt! Em đã nắm được nhiều kĩ năng thiết yếu, hãy tiếp tục thực hành thêm ở trường và gia đình.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 to-amber-800 text-white text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-award\"></i>';
      } else {
        titleEl.innerText = 'HOÀN THÀNH BÀI THI - CẦN CỐ GẮNG HƠN 🌱';
        msgEl.innerText = 'Em hãy mở lại các bài học và sổ tay kĩ năng để rèn luyện thêm cách giải quyết tình huống thực tế nhé.';
        badgeEl.className = 'w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-pink-600 text-white text-3xl flex items-center justify-center mx-auto mb-3 shadow-xl';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-book-reader\"></i>';
      }
    }

    function reviewExamAnswers() {
      const c = document.getElementById('examReviewContainer');
      c.classList.remove('hidden');
      c.innerHTML = examQuestions.map((q, idx) => {
        const userA = userExamAnswers[idx];
        const isRight = userA === q.ans;
        return \`
          <div class="p-4 rounded-xl border \${isRight ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-rose-500/40 bg-rose-950/20'} text-xs">
            <p class="font-bold text-white mb-1.5">
              <span class="mr-1.5 px-1.5 py-0.5 rounded \${isRight ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'} font-black">Câu \${idx + 1}</span>
              \${q.q}
            </p>
            <p class="\${isRight ? 'text-emerald-300' : 'text-rose-300'} mb-1">
              <strong>Lựa chọn của em:</strong> \${userA !== undefined ? q.options[userA].replace(/^\\(Recommended\\)\\s*/, '') : 'Chưa chọn'}
              \${isRight ? ' ✓ (Đúng)' : ' ✗ (Sai)'}
            </p>
            <p class="text-amber-300 mb-1"><strong>Đáp án đúng:</strong> \${q.options[q.ans].replace(/^\\(Recommended\\)\\s*/, '')}</p>
            <p class="text-gray-300 italic">💡 \${q.expl}</p>
          </div>
        \`;
      }).join('');
    }

    function resetExam() {
      startExam();
    }
  </script>
</body>
</html>
  `;

  // Output to both files
  const p1 = path.join(__dirname, '../courses/hdtn_8.html');
  const p2 = path.join(__dirname, '../courses/hdtnhn_8.html');

  fs.writeFileSync(p1, fullHtml, 'utf8');
  console.log('Saved:', p1, '(size:', fullHtml.length, ')');

  fs.writeFileSync(p2, fullHtml, 'utf8');
  console.log('Saved:', p2, '(size:', fullHtml.length, ')');
}

buildPage();
