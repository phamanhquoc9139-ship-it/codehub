// Master builder for Công Nghệ 8 (KNTT - GDPT 2018)
// Xuất ra 2 tệp: courses/congnghe_8.html và courses/technology_8.html

const fs = require('fs');
const path = require('path');

const { chapters, lessonsPart1 } = require('./congnghe8_data_p1.js');
const { lessonsPart2 } = require('./congnghe8_data_p2.js');

const allLessons = [...lessonsPart1, ...lessonsPart2];
console.log(`Loaded ${allLessons.length} lessons and ${chapters.length} chapters for Công Nghệ 8.`);

// Helper escape
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 1. Build Sidebar Nav
let sidebarHtml = '';
chapters.forEach(c => {
  const cLessons = allLessons.filter(l => l.chapterNum === c.num);
  const linksHtml = cLessons.map(l => `
    <a href="#${l.id}" class="lesson-nav-link flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-700 dark:hover:text-blue-300 transition" data-lesson="${l.id}">
      <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold shrink-0">${l.lessonNum}</span>
      <span class="truncate">${l.title.replace(`Bài ${l.lessonNum}: `, '')}</span>
    </a>
  `).join('');

  sidebarHtml += `
    <div class="chapter-nav-group mb-3" data-chap="${c.num}">
      <div class="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-1 px-2">
        <span class="flex items-center gap-1.5 truncate">
          <i class="fa-solid ${c.icon} text-blue-600"></i> ${c.title}
        </span>
        <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">Chương ${c.num}</span>
      </div>
      <div class="space-y-0.5 pl-1">
        ${linksHtml}
      </div>
    </div>
  `;
});

// 2. Build Lesson Cards
let lessonsHtml = '';
allLessons.forEach(l => {
  const objectivesHtml = l.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0 text-xs"></i>
      <span>${escapeHtml(obj)}</span>
    </li>
  `).join('');

  const letters = ['A', 'B', 'C', 'D'];
  const quizzesHtml = l.quizzes.map((q, qIdx) => {
    const optsHtml = q.options.map((opt, optIdx) => {
      const cleanOpt = opt.replace('(Recommended) ', '');
      return `
        <button type="button" onclick="checkSingleQuiz(this, ${l.lessonNum}, ${qIdx}, ${optIdx}, ${q.ans})" class="quiz-opt-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 text-xs sm:text-sm text-gray-800 dark:text-gray-200 transition flex items-center justify-between group">
          <span class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-md bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 text-gray-600 dark:text-gray-300 text-xs font-bold flex items-center justify-center shrink-0">${letters[optIdx]}</span>
            <span>${cleanOpt}</span>
          </span>
          <i class="fa-regular fa-circle text-gray-400 group-hover:text-blue-500 text-xs shrink-0"></i>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-3.5 rounded-xl bg-gray-50/80 dark:bg-gray-850 border border-gray-200/70 dark:border-gray-700/70" data-lesson="${l.lessonNum}" data-q="${qIdx}">
        <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-start gap-2">
          <span class="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[11px] font-bold shrink-0">Câu ${qIdx + 1}</span>
          <span>${q.q}</span>
        </p>
        <div class="space-y-1.5">
          ${optsHtml}
        </div>
        <div class="quiz-feedback hidden mt-2.5 p-2 rounded-lg text-xs leading-relaxed"></div>
      </div>
    `;
  }).join('');

  lessonsHtml += `
    <article id="${l.id}" class="lesson-card bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-sm transition hover:shadow-md mb-8" data-chap="${l.chapterNum}" data-lesson="${l.lessonNum}">
      <!-- Header bài học -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
              CÔNG NGHỆ 8 • ${l.chapterName}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">Bài ${l.lessonNum}</span>
          </div>
          <h2 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">${l.lessonNum}</span>
            ${l.title}
          </h2>
        </div>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">${l.tag}</span>
      </div>

      <!-- Mục tiêu cần đạt -->
      <div class="mb-4 p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
        <h4 class="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-bullseye text-blue-600"></i> Mục tiêu năng lực học tập cần đạt
        </h4>
        <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
          ${objectivesHtml}
        </ul>
      </div>

      <!-- Sơ đồ trực quan bài học SVG -->
      <div class="mb-5 p-3 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
        <div class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
          <i class="fa-solid fa-draw-polygon text-blue-500"></i> Sơ đồ trực quan bài học
        </div>
        ${l.svgIllustration}
      </div>

      <!-- Nội dung kiến thức cốt lõi -->
      <div class="mb-6 space-y-4">
        ${l.content}
      </div>

      <!-- Thực hành trắc nghiệm tự đánh giá (4 câu) -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-question text-blue-600"></i>
            Tự đánh giá năng lực bài học (4 câu trắc nghiệm)
          </h4>
          <span class="text-xs text-gray-500">Nhận xét &amp; Giải thích tức thì</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${quizzesHtml}
        </div>
      </div>
    </article>
  `;
});

// Full Page Builder Template
const pageHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Công Nghệ 8 (KNTT - GDPT 2018: 5 Chương • 20 Bài Học • Vẽ Kĩ Thuật, Cơ Khí, Điện &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            tech: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
            },
            gray: {
              750: '#262f3f',
              850: '#151b28'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
  </style>
</head>
<body class="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 glass-header transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-screwdriver-wrench text-base"></i>
          </div>
          <div>
            <span class="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">CodeHub</span>
            <span class="text-xs text-gray-500 dark:text-gray-400 block -mt-1 font-medium">Công Nghệ 8 • KNTT</span>
          </div>
        </a>
      </div>

      <!-- Action items -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Nút mở Sổ tay tra cứu kiến thức -->
        <button onclick="toggleSummaryModal()" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold transition flex items-center gap-1.5">
          <i class="fa-solid fa-book-bookmark text-blue-600"></i>
          <span class="hidden md:inline">Sổ tay kiến thức cốt lõi</span>
          <span class="md:hidden">Sổ tay</span>
        </button>

        <!-- Nút thi đấu Trạng Nguyên 60:00 -->
        <button onclick="scrollToExam()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Nút đổi theme Sáng/Tối -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition" title="Đổi giao diện">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="relative bg-gradient-to-b from-blue-900 via-indigo-950 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-5xl mx-auto relative z-10 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-4">
        <i class="fa-solid fa-graduation-cap"></i> CHƯƠNG TRÌNH GDPT 2018 • BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-indigo-100 to-amber-200">
        Khóa Học Công Nghệ Lớp 8
      </h1>
      <p class="text-sm sm:text-base text-blue-200/90 max-w-3xl mx-auto font-normal leading-relaxed mb-6">
        Hệ thống hóa toàn bộ kiến thức cốt lõi theo 5 Chương, 20 Bài học: Vẽ kĩ thuật (Hình chiếu, Bản vẽ chi tiết, Bản vẽ lắp, Bản vẽ nhà), Cơ khí (Vật liệu, Bộ truyền động, Gia công bằng tay), An toàn điện, Kĩ thuật điện (Mô đun cảm biến), Thiết kế kĩ thuật (Dự án tưới cây tự động) và Đấu trường Trạng Nguyên 60:00.
      </p>

      <!-- Key metric pills -->
      <div class="flex flex-wrap justify-center gap-3 text-xs font-semibold">
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-layer-group text-blue-400"></i> 5 Chương kiến thức
        </span>
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-book-open text-indigo-400"></i> 20 Bài học chi tiết
        </span>
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-circle-question text-emerald-400"></i> 80 Câu trắc nghiệm bài học
        </span>
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-award text-amber-400"></i> Trạng Nguyên 60 Phút
        </span>
      </div>
    </div>
  </section>

  <!-- BẢNG BẢN ĐỒ CHƯƠNG TRÌNH & NĂNG LỰC XUYÊN SUỐT -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-xl space-y-6">
      
      <!-- Cấu trúc môn học -->
      <div>
        <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fa-solid fa-table-list text-blue-600"></i>
          1. Bản Đồ Chương Trình (5 Chương • 20 Bài Học SGK Kết Nối Tri Thức)
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-b border-blue-200 dark:border-blue-800">
                <th class="py-2.5 px-3 font-bold">Chương</th>
                <th class="py-2.5 px-3 font-bold">Nội dung</th>
                <th class="py-2.5 px-3 font-bold text-center">Bài</th>
                <th class="py-2.5 px-3 font-bold">Trọng tâm kiến thức</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <td class="py-2 px-3 font-bold text-blue-700 dark:text-blue-400">I. Vẽ kĩ thuật</td>
                <td class="py-2 px-3 font-medium">Đọc và trình bày bản vẽ</td>
                <td class="py-2 px-3 text-center font-bold">1–5</td>
                <td class="py-2 px-3">Tiêu chuẩn bản vẽ, hình chiếu vuông góc, bản vẽ chi tiết / lắp / nhà</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-amber-600 dark:text-amber-400">II. Cơ khí</td>
                <td class="py-2 px-3 font-medium">Vật liệu, truyền động, gia công</td>
                <td class="py-2 px-3 text-center font-bold">6–10</td>
                <td class="py-2 px-3">Vật liệu cơ khí, truyền và biến đổi chuyển động, dụng cụ cầm tay, nghề cơ khí, dự án gia công</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-red-600 dark:text-red-400">III. An toàn điện</td>
                <td class="py-2 px-3 font-medium">Phòng tránh và ứng phó tai nạn</td>
                <td class="py-2 px-3 text-center font-bold">11–13</td>
                <td class="py-2 px-3">Nguyên nhân tai nạn, biện pháp an toàn, sơ cứu người bị tai nạn điện</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-emerald-600 dark:text-emerald-400">IV. Kĩ thuật điện</td>
                <td class="py-2 px-3 font-medium">Mạch điện và nghề nghiệp</td>
                <td class="py-2 px-3 text-center font-bold">14–17</td>
                <td class="py-2 px-3">Cấu trúc mạch, cảm biến / mô đun, lắp mạch điều khiển, nghề điện</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-purple-600 dark:text-purple-400">V. Thiết kế kĩ thuật</td>
                <td class="py-2 px-3 font-medium">Thiết kế và dự án STEM</td>
                <td class="py-2 px-3 text-center font-bold">18–20</td>
                <td class="py-2 px-3">Vai trò thiết kế, quy trình thiết kế 5 bước, dự án hệ thống tưới cây tự động</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Năng lực xuyên suốt -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
        <h4 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          6 Năng Lực Công Nghệ Cốt Lõi Xuyên Suốt Môn Học
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
          <div class="p-3 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/60 text-center">
            <i class="fa-solid fa-compass-drafting text-blue-600 text-lg mb-1 block"></i>
            <span class="font-bold text-blue-900 dark:text-blue-300 block">Đọc bản vẽ</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Hiểu hình chiếu, kích thước &amp; kí hiệu</span>
          </div>
          <div class="p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/60 text-center">
            <i class="fa-solid fa-gears text-amber-600 text-lg mb-1 block"></i>
            <span class="font-bold text-amber-900 dark:text-amber-300 block">Cơ khí chế tạo</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Vật liệu, bộ truyền &amp; gia công nguội</span>
          </div>
          <div class="p-3 rounded-2xl bg-red-50/80 dark:bg-red-950/30 border border-red-200/60 dark:border-red-800/60 text-center">
            <i class="fa-solid fa-shield-halved text-red-600 text-lg mb-1 block"></i>
            <span class="font-bold text-red-900 dark:text-red-300 block">An toàn điện</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Phòng ngừa rò điện &amp; sơ cấp cứu</span>
          </div>
          <div class="p-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/60 text-center">
            <i class="fa-solid fa-microchip text-emerald-600 text-lg mb-1 block"></i>
            <span class="font-bold text-emerald-900 dark:text-emerald-300 block">Mạch điều khiển</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Lắp ráp mô đun cảm biến tự động</span>
          </div>
          <div class="p-3 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/60 text-center">
            <i class="fa-solid fa-lightbulb text-purple-600 text-lg mb-1 block"></i>
            <span class="font-bold text-purple-900 dark:text-purple-300 block">Thiết kế kĩ thuật</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Quy trình 5 bước &amp; thử nguyên mẫu</span>
          </div>
          <div class="p-3 rounded-2xl bg-teal-50/80 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-800/60 text-center">
            <i class="fa-solid fa-user-tie text-teal-600 text-lg mb-1 block"></i>
            <span class="font-bold text-teal-900 dark:text-teal-300 block">Định hướng nghề</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Kĩ sư, kĩ thuật viên &amp; thợ lành nghề</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN CONTAINER (SIDEBAR & LESSON CONTENT) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Sticky Sidebar Navigation (4 cols) -->
      <aside class="lg:col-span-4 sticky top-20 bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm max-h-[85vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
          <h3 class="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-list-check text-blue-600"></i> Mục Lục 20 Bài Học
          </h3>
          <span class="text-xs text-gray-500 font-medium">20 Bài</span>
        </div>

        <!-- Filter Tab Chương -->
        <div class="grid grid-cols-3 gap-1 p-1 bg-gray-100 dark:bg-gray-900 rounded-xl mb-3 text-[11px] font-semibold text-center">
          <button onclick="filterChap('all')" id="tab-all" class="chap-tab-btn py-1 px-1 rounded-lg bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm transition">
            Tất cả (20)
          </button>
          <button onclick="filterChap('I')" id="tab-c1" class="chap-tab-btn py-1 px-1 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition">
            Chương I
          </button>
          <button onclick="filterChap('II')" id="tab-c2" class="chap-tab-btn py-1 px-1 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition">
            Chương II
          </button>
          <button onclick="filterChap('III')" id="tab-c3" class="chap-tab-btn py-1 px-1 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition">
            Chương III
          </button>
          <button onclick="filterChap('IV')" id="tab-c4" class="chap-tab-btn py-1 px-1 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition">
            Chương IV
          </button>
          <button onclick="filterChap('V')" id="tab-c5" class="chap-tab-btn py-1 px-1 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition">
            Chương V
          </button>
        </div>

        <div id="sidebarList">
          ${sidebarHtml}
        </div>
      </aside>

      <!-- Main Lesson Cards (8 cols) -->
      <div class="lg:col-span-8">
        ${lessonsHtml}
      </div>

    </div>
  </main>

  <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN CÔNG NGHỆ 8 (60:00) -->
  <section id="tech-exam-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-blue-500/20">
      <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Exam Intro Banner -->
      <div id="examIntro" class="text-center max-w-2xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider">
          <i class="fa-solid fa-trophy"></i> Đấu Trường Kĩ Thuật
        </div>
        <h2 class="text-2xl sm:text-3xl font-black tracking-tight">
          Thi Đấu Trạng Nguyên Công Nghệ 8 (60 Phút)
        </h2>
        <p class="text-blue-200 text-xs sm:text-sm font-normal leading-relaxed">
          Đề thi tổng hợp 20 câu trắc nghiệm bao quát toàn diện kiến thức của cả năm học (5 Chương • 20 Bài học). Hoàn thành đạt từ 16 câu trở lên để đạt danh hiệu <strong>Trạng Nguyên Kĩ Thuật</strong>!
        </p>

        <!-- Timer badge -->
        <div class="flex items-center justify-center gap-4 text-xs font-bold pt-2">
          <div class="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex items-center gap-2">
            <i class="fa-solid fa-stopwatch text-amber-400 text-base"></i>
            <span>Thời gian: <span id="examTimer" class="font-mono text-amber-300 text-sm">60:00</span></span>
          </div>
          <div class="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-blue-300 text-base"></i>
            <span>Số lượng: 20 câu hỏi</span>
          </div>
        </div>

        <div class="pt-4">
          <button onclick="startExam()" class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm sm:text-base shadow-lg shadow-amber-500/30 transition transform hover:scale-105 inline-flex items-center gap-2">
            <i class="fa-solid fa-play"></i> Bắt đầu thi ngay
          </button>
        </div>
      </div>

      <!-- Exam Questions Container (Hidden initially) -->
      <div id="examQuestions" class="hidden space-y-6"></div>

      <!-- Exam Result Modal (Hidden initially) -->
      <div id="examResult" class="hidden text-center max-w-xl mx-auto space-y-4 py-6">
        <div class="w-20 h-20 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-3xl mx-auto shadow-inner">
          <i class="fa-solid fa-crown"></i>
        </div>
        <h3 id="resultTitle" class="text-2xl font-black text-white">Kết Quả Thi Đấu</h3>
        <p class="text-blue-200 text-sm">
          Điểm số của bạn: <span id="resultScore" class="font-black text-amber-300 text-xl font-mono">0 / 20</span>
        </p>
        <p id="resultFeedback" class="text-xs sm:text-sm text-gray-300 italic max-w-md mx-auto"></p>
        <div class="pt-3">
          <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition border border-white/20">
            <i class="fa-solid fa-rotate-left mr-1.5"></i> Thử sức lại
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- SỔ TAY KIẾN THỨC CỐT LÕI MODAL -->
  <div id="summaryModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-2xl relative">
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-700">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-book-bookmark text-blue-600"></i>
          Sổ Tay Kiến Thức Cốt Lõi Công Nghệ 8 (SGK Kết Nối Tri Thức)
        </h3>
        <button onclick="toggleSummaryModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-6 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        
        <!-- Vẽ kĩ thuật -->
        <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 text-base flex items-center gap-2">
            <i class="fa-solid fa-compass-drafting"></i> 1. Trọng tâm Vẽ kĩ thuật (Chương I)
          </h4>
          <p>• <strong>Khổ giấy &amp; Tỉ lệ:</strong> A4 (297 × 210 mm). Tỉ lệ 1:1 (nguyên hình), 1:n (thu nhỏ), n:1 (phóng to). Con số ghi luôn là kích thước thật.</p>
          <p>• <strong>Nét vẽ:</strong> Nét liền đậm (bao thấy), nét đứt mảnh (bao khuất), nét gạch dài chấm mảnh (trục tâm), nét liền mảnh (kích thước).</p>
          <p>• <strong>Hình chiếu vuông góc:</strong> Đứng (P1 - nhìn trước), Bằng (P2 - nhìn trên, đặt dưới hình đứng), Cạnh (P3 - nhìn trái, đặt bên phải hình đứng).</p>
          <p>• <strong>Bản vẽ chi tiết:</strong> 4 phần (Khung tên &rarr; Hình biểu diễn &rarr; Kích thước &rarr; Yêu cầu kĩ thuật).</p>
          <p>• <strong>Bản vẽ lắp:</strong> Có thêm <em>Bảng kê</em> ghi rõ số lượng và tên chi tiết cấu thành.</p>
          <p>• <strong>Bản vẽ nhà:</strong> Mặt bằng (cắt bằng - quan trọng nhất), Mặt đứng (ngoại cảnh), Mặt cắt (kết cấu tầng).</p>
        </div>

        <!-- Cơ khí -->
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 text-base flex items-center gap-2">
            <i class="fa-solid fa-gears"></i> 2. Trọng tâm Cơ khí (Chương II)
          </h4>
          <p>• <strong>Kim loại:</strong> Kim loại đen (Thép dẻo dai; Gang cứng giòn dễ đúc); Kim loại màu (Nhôm, Đồng dẫn nhiệt/điện tốt, nhẹ, chống gỉ).</p>
          <p>• <strong>Phi kim:</strong> Chất dẻo nhiệt (tái sinh được), chất dẻo nhiệt rắn (không nóng chảy lại), cao su đàn hồi giảm chấn.</p>
          <p>• <strong>Công thức tỉ số truyền:</strong> Truyền đai <code>i = n1/n2 = D2/D1</code>; Bánh răng/xích <code>i = n1/n2 = z2/z1</code>.</p>
          <p>• <strong>Biến đổi chuyển động:</strong> Cơ cấu tay quay - con trượt (quay tròn &harr; tịnh tiến); Cơ cấu cam - cần.</p>
          <p>• <strong>Gia công nguội bằng tay:</strong> Cưa tay (ấn khi đẩy), đục, dũa làm nhẵn, thước cặp đo chính xác.</p>
        </div>

        <!-- An toàn điện & Kĩ thuật điện -->
        <div class="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-2">
          <h4 class="font-bold text-red-900 dark:text-red-300 text-base flex items-center gap-2">
            <i class="fa-solid fa-bolt"></i> 3. An toàn điện &amp; Kĩ thuật điện (Chương III &amp; IV)
          </h4>
          <p>• <strong>Tai nạn điện:</strong> Chạm trực tiếp, phóng điện cao áp qua không khí, điện áp bước do dây đứt chạm đất.</p>
          <p>• <strong>Sơ cứu tai nạn:</strong> <em>Tuyệt đối không chạm tay không vào nạn nhân</em> &rarr; Ngắt nguồn điện hoặc dùng gậy gỗ khô gạt dây &rarr; Gọi 115 &rarr; Tư thế nằm hồi phục / CPR.</p>
          <p>• <strong>Mô đun cảm biến:</strong> Ánh sáng (LDR), nhiệt độ (NTC), độ ẩm đất. Rơ le đóng vai trò công tắc đóng cắt phụ tải tự động.</p>
        </div>

        <!-- Thiết kế kĩ thuật -->
        <div class="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 text-base flex items-center gap-2">
            <i class="fa-solid fa-lightbulb"></i> 4. Thiết kế kĩ thuật (Chương V)
          </h4>
          <p>• <strong>Quy trình 5 bước:</strong> Xác định vấn đề/tiêu chí &rarr; Đề xuất giải pháp &rarr; Chế tạo nguyên mẫu &rarr; Thử nghiệm/đánh giá (vòng lặp cải tiến) &rarr; Lập hồ sơ kĩ thuật.</p>
          <p>• <strong>Hệ thống tưới tự động:</strong> Cảm biến độ ẩm đất &rarr; Bo mạch so sánh vi sai &rarr; Rơ le kích máy bơm 12VDC &rarr; Tưới nước.</p>
        </div>

      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">CodeHub • Nền Tảng Học Tập Trực Tuyến Toàn Diện</p>
      <p>Học liệu chuẩn hóa SGK Công Nghệ 8 – Bộ sách Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
    </div>
  </footer>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }
    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    }
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    // Reading progress bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const pb = document.getElementById('progressBar');
      if (pb) pb.style.width = scrolled + '%';
    });

    // Modal Sổ tay
    function toggleSummaryModal() {
      const modal = document.getElementById('summaryModal');
      modal.classList.toggle('hidden');
    }

    // Scroll to Exam
    function scrollToExam() {
      const sec = document.getElementById('tech-exam-section');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }

    // Filter theo Chương
    function filterChap(chap) {
      const allBtns = document.querySelectorAll('.chap-tab-btn');
      allBtns.forEach(b => {
        b.className = 'chap-tab-btn py-1 px-1 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition';
      });

      const activeBtn = document.getElementById(chap === 'all' ? 'tab-all' : ('tab-c' + (chap === 'I' ? '1' : chap === 'II' ? '2' : chap === 'III' ? '3' : chap === 'IV' ? '4' : '5')));
      if (activeBtn) {
        activeBtn.className = 'chap-tab-btn py-1 px-1 rounded-lg bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm transition font-bold';
      }

      // Sidebar groups
      document.querySelectorAll('.chapter-nav-group').forEach(grp => {
        if (chap === 'all' || grp.getAttribute('data-chap') === chap) {
          grp.classList.remove('hidden');
        } else {
          grp.classList.add('hidden');
        }
      });

      // Main cards
      document.querySelectorAll('.lesson-card').forEach(card => {
        if (chap === 'all' || card.getAttribute('data-chap') === chap) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // Check Single Quiz in Lesson Card
    function checkSingleQuiz(btn, lessonNum, qIdx, optIdx, correctIdx) {
      const card = btn.closest('.quiz-item');
      const allBtns = card.querySelectorAll('.quiz-opt-btn');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-blue-400', 'hover:border-blue-400');
      });

      const feedback = card.querySelector('.quiz-feedback');
      if (optIdx === correctIdx) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        const icon = btn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-500 text-xs shrink-0';
        feedback.className = 'quiz-feedback mt-2.5 p-2 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 block';
        feedback.innerHTML = '<i class="fa-solid fa-check mr-1 text-emerald-600"></i> <strong>Chính xác!</strong> Em đã trả lời đúng.';
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        const icon = btn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-circle-xmark text-rose-500 text-xs shrink-0';

        // Highlight correct option
        allBtns[correctIdx].classList.add('bg-emerald-50/70', 'dark:bg-emerald-950/30', 'border-emerald-400', 'text-emerald-700', 'dark:text-emerald-300');
        feedback.className = 'quiz-feedback mt-2.5 p-2 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 block';
        feedback.innerHTML = '<i class="fa-solid fa-xmark mr-1 text-rose-600"></i> <strong>Chưa chính xác!</strong> Hãy xem lại phần kiến thức bài học phía trên nhé.';
      }
    }

    // Thi Trạng Nguyên 60:00 Logic (20 câu tổng hợp từ 20 bài)
    const examQuestionsData = [
      { q: "Kích thước tiêu chuẩn của khổ giấy A4 là:", opts: ["297 × 210 mm", "420 × 297 mm", "594 × 420 mm", "841 × 594 mm"], ans: 0 },
      { q: "Loại nét vẽ nào dùng để thể hiện đường bao thấy và cạnh thấy trên bản vẽ kĩ thuật?", opts: ["Nét liền đậm", "Nét đứt mảnh", "Nét liền mảnh", "Nét gạch dài chấm mảnh"], ans: 0 },
      { q: "Hình chiếu bằng được đặt ở vị trí nào so với hình chiếu đứng trên bản vẽ?", opts: ["Ở phía dưới hình chiếu đứng", "Ở bên phải hình chiếu đứng", "Ở phía trên hình chiếu đứng", "Ở bên trái hình chiếu đứng"], ans: 0 },
      { q: "Nội dung nào sau đây có trên Bản vẽ lắp mà KHÔNG có trên Bản vẽ chi tiết?", opts: ["Bảng kê", "Khung tên", "Hình biểu diễn", "Kích thước"], ans: 0 },
      { q: "Hình biểu diễn quan trọng nhất trong một bản vẽ nhà thể hiện vị trí các phòng và cửa đi là:", opts: ["Mặt bằng", "Mặt đứng", "Mặt cắt", "Phối cảnh"], ans: 0 },
      { q: "Hợp kim của sắt với carbon có hàm lượng Carbon C ≤ 2,14% được gọi là:", opts: ["Thép", "Gang", "Đồng thau", "Nhôm dẻo"], ans: 0 },
      { q: "Bộ truyền đai có đường kính bánh dẫn D1 = 120 mm, bánh bị dẫn D2 = 240 mm. Khi bánh dẫn quay 600 vòng/phút thì bánh bị dẫn quay với tốc độ:", opts: ["300 vòng/phút", "1200 vòng/phút", "600 vòng/phút", "150 vòng/phút"], ans: 0 },
      { q: "Cơ cấu nào sau đây biến đổi chuyển động quay tròn thành chuyển động tịnh tiến qua lại?", opts: ["Cơ cấu tay quay – con trượt", "Bộ truyền bánh răng", "Bộ truyền xích", "Bộ truyền đai"], ans: 0 },
      { q: "Khi cưa kim loại bằng cưa tay, thao tác tác dụng lực ấn chuẩn xác là:", opts: ["Ấn lực khi đẩy cưa đi và thả lỏng khi kéo cưa về", "Ấn lực khi kéo về", "Ấn mạnh cả hai chiều", "Không ấn lực"], ans: 0 },
      { q: "Hiện tượng 'Điện áp bước' nguy hiểm xuất hiện trong trường hợp nào?", opts: ["Khi dây điện cao áp bị đứt rơi xuống đất và người đi bộ trong vùng nhiễm điện", "Khi sạc điện thoại", "Khi bật bóng đèn", "Khi dùng bút thử điện"], ans: 0 },
      { q: "Để bảo vệ con người khi vỏ kim loại của thiết bị điện bị rò điện, người ta sử dụng biện pháp:", opts: ["Nối đất an toàn cho vỏ thiết bị kim loại", "Sơn màu đỏ lên vỏ máy", "Bọc giấy báo quanh máy", "Tăng điện áp nguồn"], ans: 0 },
      { q: "Khi thấy người bị điện giật dính vào dây điện, thao tác đầu tiên tuyệt đối KHÔNG được làm là:", opts: ["Dùng tay trần trực tiếp kéo nạn nhân ra", "Ngắt cầu dao điện gần nhất", "Dùng gậy gỗ khô gạt dây điện", "Hô hoán gọi người lớn"], ans: 0 },
      { q: "Số điện thoại khẩn cấp quốc gia để gọi xe cứu thương y tế là:", opts: ["115", "113", "114", "111"], ans: 0 },
      { q: "Thành phần nào sau đây là 'Phụ tải tiêu thụ điện' trong mạch điện?", opts: ["Bóng đèn sợi đốt, quạt điện, máy bơm", "Pin và ắc quy", "Dây dẫn đồng", "Cầu dao và công tắc"], ans: 0 },
      { q: "Linh kiện điện tử có điện trở thay đổi mạnh theo cường độ ánh sáng chiếu vào gọi là:", opts: ["Quang điện trở (LDR)", "Nhiệt điện trở", "Biến trở", "Cuộn cảm"], ans: 0 },
      { q: "Trong mô đun cảm biến, linh kiện 'Rơ le' (Relay) có chức năng:", opts: ["Đóng / cắt mạch điện cấp cho phụ tải theo tín hiệu điều khiển", "Đo nhiệt độ", "Phát ra tia laser", "Tạo ra điện áp 220V"], ans: 0 },
      { q: "Khi lắp ráp mạch điều khiển, thao tác đấu nối dây dẫn PHẢI được tiến hành khi:", opts: ["Nguồn điện đã được ngắt hoàn toàn", "Mạch đang bật công tắc nguồn", "Máy bơm đang chạy", "Đang cắm điện lưới"], ans: 0 },
      { q: "Thiết kế kĩ thuật là hoạt động:", opts: ["Sáng tạo giải quyết vấn đề thực tiễn bằng sản phẩm và giải pháp kĩ thuật", "Chỉ vẽ tranh giải trí", "Lắp ráp theo hướng dẫn có sẵn", "Mua bán thiết bị điện"], ans: 0 },
      { q: "Bước đầu tiên trong quy trình thiết kế kĩ thuật 5 bước là:", opts: ["Xác định vấn đề và xây dựng tiêu chí sản phẩm", "Chế tạo nguyên mẫu", "Lập hồ sơ kĩ thuật", "Bán thử nghiệm"], ans: 0 },
      { q: "Hệ thống tưới cây tự động hoạt động dựa trên tín hiệu thu được từ loại cảm biến nào?", opts: ["Cảm biến độ ẩm đất", "Cảm biến hồng ngoại", "Cảm biến âm thanh", "Cảm biến khói"], ans: 0 }
    ];

    let examTimeLeft = 60 * 60;
    let examTimerInterval = null;
    let userAnswers = {};

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      const qContainer = document.getElementById('examQuestions');
      qContainer.classList.remove('hidden');

      let html = '';
      examQuestionsData.forEach((q, index) => {
        html += '<div class="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-left space-y-3">' +
          '<div class="flex items-center justify-between text-xs text-blue-200 font-semibold">' +
            '<span>Câu ' + (index + 1) + ' / 20</span>' +
            '<span class="text-amber-300">Công Nghệ 8</span>' +
          '</div>' +
          '<p class="text-sm font-bold text-white">' + q.q + '</p>' +
          '<div class="space-y-2">' +
            q.opts.map((opt, optIdx) => 
              '<label class="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition text-xs sm:text-sm">' +
                '<input type="radio" name="exam_q_' + index + '" value="' + optIdx + '" onchange="recordExamAnswer(' + index + ', ' + optIdx + ')" class="text-amber-500 focus:ring-amber-400">' +
                '<span>' + opt + '</span>' +
              '</label>'
            ).join('') +
          '</div>' +
        '</div>';
      });

      html += '<div class="text-center pt-4">' +
        '<button onclick="submitExam()" class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-sm shadow-lg transition transform hover:scale-105 inline-flex items-center gap-2">' +
          '<i class="fa-solid fa-paper-plane"></i> Nộp bài thi Trạng Nguyên' +
        '</button>' +
      '</div>';

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
      examQuestionsData.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) score++;
      });

      document.getElementById('examQuestions').classList.add('hidden');
      const resContainer = document.getElementById('examResult');
      resContainer.classList.remove('hidden');

      document.getElementById('resultScore').innerText = score + ' / ' + examQuestionsData.length;
      let title = '';
      let feedback = '';

      if (score === 20) {
        title = 'Xuất Sắc! Danh Hiệu Trạng Nguyên Kĩ Thuật 🏆';
        feedback = 'Tuyệt đối 100%! Em đã nắm vững trọn vẹn toàn bộ 5 Chương và 20 Bài học Công nghệ 8!';
      } else if (score >= 16) {
        title = 'Bảng Nhãn Kĩ Thuật 🌟';
        feedback = 'Kết quả rất xuất sắc! Em nắm rất chắc cả vẽ kĩ thuật, cơ khí, an toàn điện và thiết kế STEM.';
      } else if (score >= 12) {
        title = 'Thám Hoa Kĩ Thuật 👍';
        feedback = 'Đạt yêu cầu chuẩn! Em hãy ôn lại một số bài học về mô đun cảm biến và bản vẽ lắp nhé.';
      } else {
        title = 'Cần Ôn Tập Thêm 💡';
        feedback = 'Em hãy mở Sổ tay kiến thức cốt lõi phía trên để ôn lại các chương rồi thử sức lại nhé!';
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
</html>`;

// Write to courses/congnghe_8.html
const cnPath = path.join(__dirname, '../courses/congnghe_8.html');
fs.writeFileSync(cnPath, pageHtml, 'utf8');
console.log(`✅ Successfully written: ${cnPath} (${pageHtml.length} bytes)`);

// Write to courses/technology_8.html
const techPath = path.join(__dirname, '../courses/technology_8.html');
fs.writeFileSync(techPath, pageHtml, 'utf8');
console.log(`✅ Successfully written: ${techPath} (${pageHtml.length} bytes)`);
