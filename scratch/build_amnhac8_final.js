// Master builder for Âm Nhạc 8 (KNTT - GDPT 2018)
// Xuất ra 2 tệp: courses/amnhac_8.html và courses/music_8.html

const fs = require('fs');
const path = require('path');

const { topics } = require('./music8_topics.js');
const { lessonsPart1 } = require('./music8_lessons_part1.js');
const { lessonsPart2 } = require('./music8_lessons_part2.js');

const allLessons = [...lessonsPart1, ...lessonsPart2];
console.log(`Loaded ${allLessons.length} lessons and ${topics.length} topics for Âm Nhạc 8.`);

// Helper escape
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 1. Build Sidebar Nav
let sidebarHtml = '';
topics.forEach(t => {
  const tLessons = allLessons.filter(l => l.topicNum === t.num);
  const linksHtml = tLessons.map(l => `
    <a href="#${l.id}" class="lesson-nav-link flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-700 dark:hover:text-purple-300 transition" data-lesson="${l.id}">
      <span class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 flex items-center justify-center text-[10px] font-bold shrink-0">${l.lessonNum}</span>
      <span class="truncate">${l.title.replace(`Bài ${l.lessonNum}: `, '')}</span>
    </a>
  `).join('');

  sidebarHtml += `
    <div class="topic-nav-group mb-3" data-term="${t.num <= 4 ? '1' : '2'}">
      <div class="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-1 px-2">
        <span class="flex items-center gap-1.5 truncate">
          <i class="fa-solid ${t.icon} text-purple-600"></i> ${t.title}
        </span>
        <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">${t.termBadge}</span>
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
  const isHk1 = l.topicNum <= 4;
  const termBadge = isHk1 ? 'HỌC KÌ 1 • CHỦ ĐỀ ' + l.topicNum : 'HỌC KÌ 2 • CHỦ ĐỀ ' + l.topicNum;
  const termBadgeColor = isHk1 ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300';
  const btnNumColor = isHk1 ? 'bg-purple-600' : 'bg-rose-600';

  const objectivesHtml = l.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-circle-check text-purple-500 mt-1 shrink-0 text-xs"></i>
      <span>${escapeHtml(obj)}</span>
    </li>
  `).join('');

  const letters = ['A', 'B', 'C', 'D'];
  const quizzesHtml = l.quizzes.map((q, qIdx) => {
    const optsHtml = q.options.map((opt, optIdx) => {
      const cleanOpt = opt.replace('(Recommended) ', '');
      return `
        <button type="button" onclick="checkSingleQuiz(this, ${l.lessonNum}, ${qIdx}, ${optIdx}, ${q.ans})" class="quiz-opt-btn w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 text-xs sm:text-sm text-gray-800 dark:text-gray-200 transition flex items-center justify-between group">
          <span class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-md bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 text-gray-600 dark:text-gray-300 text-xs font-bold flex items-center justify-center shrink-0">${letters[optIdx]}</span>
            <span>${cleanOpt}</span>
          </span>
          <i class="fa-regular fa-circle text-gray-400 group-hover:text-purple-500 text-xs shrink-0"></i>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-3.5 rounded-xl bg-gray-50/80 dark:bg-gray-850 border border-gray-200/70 dark:border-gray-700/70" data-lesson="${l.lessonNum}" data-q="${qIdx}">
        <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-start gap-2">
          <span class="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-[11px] font-bold shrink-0">Câu ${qIdx + 1}</span>
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
    <article id="${l.id}" class="lesson-card bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-sm transition hover:shadow-md mb-8" data-term="${isHk1 ? '1' : '2'}" data-lesson="${l.lessonNum}">
      <!-- Header bài học -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${termBadgeColor}">
              ${termBadge}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">${l.topicName}</span>
          </div>
          <h2 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg ${btnNumColor} text-white flex items-center justify-center text-xs font-bold">${l.lessonNum}</span>
            ${l.title}
          </h2>
        </div>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">${l.tag}</span>
      </div>

      <!-- Mục tiêu cần đạt -->
      <div class="mb-4 p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
        <h4 class="text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-bullseye text-purple-600"></i> Mục tiêu năng lực âm nhạc cần đạt
        </h4>
        <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
          ${objectivesHtml}
        </ul>
      </div>

      <!-- Sơ đồ trực quan / Trực quan hóa âm nhạc SVG -->
      <div class="mb-5 p-3 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
        <div class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
          <i class="fa-solid fa-shapes text-purple-500"></i> Sơ đồ trực quan bài học
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
            <i class="fa-solid fa-circle-question text-purple-600"></i>
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
  <title>Khóa Học Âm Nhạc 8 (KNTT - GDPT 2018: 8 Chủ Đề • 16 Bài Học • Kiến Thức Nền &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            purple: {
              50: '#faf5ff',
              100: '#f3e8ff',
              200: '#e9d5ff',
              300: '#d8b4fe',
              400: '#c084fc',
              500: '#a855f7',
              600: '#9333ea',
              700: '#7e22ce',
              800: '#6b21a8',
              900: '#581c87',
              950: '#3b0764'
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
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-rose-500 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 glass-header transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-music text-base"></i>
          </div>
          <div>
            <span class="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">CodeHub</span>
            <span class="text-xs text-gray-500 dark:text-gray-400 block -mt-1 font-medium">Âm Nhạc 8 • KNTT</span>
          </div>
        </a>
      </div>

      <!-- Action items -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Nút mở Sổ tay tra cứu kiến thức -->
        <button onclick="toggleSummaryModal()" class="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold transition flex items-center gap-1.5">
          <i class="fa-solid fa-book-bookmark text-purple-600"></i>
          <span class="hidden md:inline">Sổ tay kiến thức cốt lõi</span>
          <span class="md:hidden">Sổ tay</span>
        </button>

        <!-- Nút thi đấu Trạng Nguyên 60:00 -->
        <button onclick="scrollToExam()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5">
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
  <section class="relative bg-gradient-to-b from-purple-900 via-indigo-950 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-5xl mx-auto relative z-10 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold mb-4">
        <i class="fa-solid fa-graduation-cap"></i> CHƯƠNG TRÌNH GDPT 2018 • BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-100 to-rose-200">
        Khóa Học Âm Nhạc Lớp 8
      </h1>
      <p class="text-sm sm:text-base text-purple-200/90 max-w-3xl mx-auto font-normal leading-relaxed mb-6">
        Hệ thống hóa toàn bộ kiến thức cốt lõi theo 8 Chủ đề, 16 Bài học: Thực hành hát, nghe nhạc, nhạc cụ (Recorder, Melodica), lí thuyết âm nhạc (Gam trưởng, Gam thứ, Nhịp 3/8, Nhịp 6/8, Đảo phách), thưởng thức âm nhạc và Đấu trường Trạng Nguyên 60:00.
      </p>

      <!-- Key metric pills -->
      <div class="flex flex-wrap justify-center gap-3 text-xs font-semibold">
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-layer-group text-purple-400"></i> 8 Chủ đề trọng tâm
        </span>
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-music text-indigo-400"></i> 16 Bài học chi tiết
        </span>
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-circle-question text-emerald-400"></i> 64 Câu trắc nghiệm bài học
        </span>
        <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center gap-1.5">
          <i class="fa-solid fa-award text-amber-400"></i> Trạng Nguyên 60 Phút
        </span>
      </div>
    </div>
  </section>

  <!-- BẢNG BẢN ĐỒ CHƯƠNG TRÌNH & NĂNG LỰC ÂM NHẠC XUYÊN SUỐT (MỤC 1 & 2) -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-xl space-y-6">
      
      <!-- Cấu trúc môn học -->
      <div>
        <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fa-solid fa-table-list text-purple-600"></i>
          1. Khung Cấu Trúc Môn Học (8 Chủ Đề • 16 Bài Học SGK Kết Nối Tri Thức)
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border-b border-purple-200 dark:border-purple-800">
                <th class="py-2.5 px-3 font-bold">Chủ đề</th>
                <th class="py-2.5 px-3 font-bold text-center">Bài</th>
                <th class="py-2.5 px-3 font-bold">Mạch học tập trọng tâm</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <td class="py-2 px-3 font-bold text-purple-700 dark:text-purple-400">1. Chào năm học mới</td>
                <td class="py-2 px-3 text-center font-bold">1–2</td>
                <td class="py-2 px-3">Hát tập thể; nghe nhạc; gam/giọng trưởng, Đô trưởng; đọc nhạc số 1</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-red-600 dark:text-red-400">2. Tôi yêu Việt Nam</td>
                <td class="py-2 px-3 text-center font-bold">3–4</td>
                <td class="py-2 px-3">Bài hát về Việt Nam; nhạc cụ recorder/kèn phím; dân ca Quan họ Bắc Ninh</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-blue-600 dark:text-blue-400">3. Hòa ca</td>
                <td class="py-2 px-3 text-center font-bold">5–6</td>
                <td class="py-2 px-3">Hát về ước mơ; thể loại hợp xướng; nhịp 3/8 và so sánh với 3/4</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-teal-600 dark:text-teal-400">4. Biển đảo quê hương</td>
                <td class="py-2 px-3 text-center font-bold">7–8</td>
                <td class="py-2 px-3">Hát về Trường Sa; nghe nhạc về biển đảo; đàn guitar/ukulele; recorder/kèn phím</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-emerald-600 dark:text-emerald-400">5. Chào xuân</td>
                <td class="py-2 px-3 text-center font-bold">9–10</td>
                <td class="py-2 px-3">Bài hát ngày Tết; nhạc sĩ Trần Hoàn; nhịp 6/8; đọc nhạc số 3</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-amber-600 dark:text-amber-400">6. Âm nhạc nước ngoài</td>
                <td class="py-2 px-3 text-center font-bold">11–12</td>
                <td class="py-2 px-3">Bài hát nước ngoài; Trở về Surriento; recorder/kèn phím; gam/giọng thứ, La thứ; đọc nhạc số 4</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-orange-600 dark:text-orange-400">7. Giai điệu quê hương</td>
                <td class="py-2 px-3 text-center font-bold">13–14</td>
                <td class="py-2 px-3">Bài hát dân ca; đàn nguyệt và đàn tính; đảo phách; đọc nhạc số 5</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-bold text-rose-600 dark:text-rose-400">8. Nhịp điệu mùa hè</td>
                <td class="py-2 px-3 text-center font-bold">15–16</td>
                <td class="py-2 px-3">Bài hát mùa hè; Frédéric Chopin và tác phẩm piano; recorder/kèn phím</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 6 Năng lực âm nhạc xuyên suốt -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
        <h4 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          6 Năng Lực Âm Nhạc Cốt Lõi Xuyên Suốt Chương Trình
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
          <div class="p-3 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/60 text-center">
            <i class="fa-solid fa-microphone text-purple-600 text-lg mb-1 block"></i>
            <span class="font-bold text-purple-900 dark:text-purple-300 block">Hát</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Đúng nhịp độ, sắc thái, hòa giọng</span>
          </div>
          <div class="p-3 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/60 text-center">
            <i class="fa-solid fa-headphones text-blue-600 text-lg mb-1 block"></i>
            <span class="font-bold text-blue-900 dark:text-blue-300 block">Nghe nhạc</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Cảm nhận giai điệu &amp; bối cảnh</span>
          </div>
          <div class="p-3 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/60 text-center">
            <i class="fa-solid fa-music text-indigo-600 text-lg mb-1 block"></i>
            <span class="font-bold text-indigo-900 dark:text-indigo-300 block">Đọc nhạc</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Đúng tên nốt, cao độ, gõ phách</span>
          </div>
          <div class="p-3 rounded-2xl bg-teal-50/80 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-800/60 text-center">
            <i class="fa-solid fa-guitar text-teal-600 text-lg mb-1 block"></i>
            <span class="font-bold text-teal-900 dark:text-teal-300 block">Chơi nhạc cụ</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Recorder &amp; Kèn phím Melodica</span>
          </div>
          <div class="p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/60 text-center">
            <i class="fa-solid fa-landmark text-amber-600 text-lg mb-1 block"></i>
            <span class="font-bold text-amber-900 dark:text-amber-300 block">Thưởng thức</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Nhạc sĩ, tác phẩm, văn hóa</span>
          </div>
          <div class="p-3 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-800/60 text-center">
            <i class="fa-solid fa-wand-magic-sparkles text-rose-600 text-lg mb-1 block"></i>
            <span class="font-bold text-rose-900 dark:text-rose-300 block">Sáng tạo</span>
            <span class="text-[11px] text-gray-600 dark:text-gray-400">Đặt lời mới, đệm, biểu diễn</span>
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
            <i class="fa-solid fa-list-check text-purple-600"></i> Mục Lục 16 Bài Học
          </h3>
          <span class="text-xs text-gray-500 font-medium">16 Bài</span>
        </div>

        <!-- Filter Tab Học kì -->
        <div class="grid grid-cols-3 gap-1 p-1 bg-gray-100 dark:bg-gray-900 rounded-xl mb-3 text-xs font-semibold text-center">
          <button onclick="filterTerm('all')" id="tab-all" class="term-tab-btn py-1 px-1.5 rounded-lg bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-sm transition">
            Tất cả (16)
          </button>
          <button onclick="filterTerm('1')" id="tab-hk1" class="term-tab-btn py-1 px-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition">
            Học kì 1
          </button>
          <button onclick="filterTerm('2')" id="tab-hk2" class="term-tab-btn py-1 px-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition">
            Học kì 2
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

  <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN ÂM NHẠC 8 (60:00) -->
  <section id="music-exam-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-purple-500/20">
      <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Exam Intro Banner -->
      <div id="examIntro" class="text-center max-w-2xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider">
          <i class="fa-solid fa-trophy"></i> Đấu Trường Vinh Quang
        </div>
        <h2 class="text-2xl sm:text-3xl font-black tracking-tight">
          Thi Đấu Trạng Nguyên Âm Nhạc 8 (60 Phút)
        </h2>
        <p class="text-purple-200 text-xs sm:text-sm font-normal leading-relaxed">
          Đề thi tổng hợp 20 câu trắc nghiệm bao quát toàn diện kiến thức của cả năm học (8 Chủ đề • 16 Bài học). Hoàn thành đạt từ 16 câu trở lên để đạt danh hiệu <strong>Trạng Nguyên Âm Nhạc</strong>!
        </p>

        <!-- Timer badge -->
        <div class="flex items-center justify-center gap-4 text-xs font-bold pt-2">
          <div class="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex items-center gap-2">
            <i class="fa-solid fa-stopwatch text-amber-400 text-base"></i>
            <span>Thời gian: <span id="examTimer" class="font-mono text-amber-300 text-sm">60:00</span></span>
          </div>
          <div class="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-purple-300 text-base"></i>
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
        <p class="text-purple-200 text-sm">
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

  <!-- SỔ TAY KIẾN THỨC CỐT LÕI MODAL (MỤC 2, 4, 5) -->
  <div id="summaryModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-2xl relative">
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-700">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-book-bookmark text-purple-600"></i>
          Sổ Tay Kiến Thức Cốt Lõi Âm Nhạc 8 (SGK Kết Nối Tri Thức)
        </h3>
        <button onclick="toggleSummaryModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-6 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        
        <!-- Mục 2: Kiến thức nền về đọc nhạc và biểu diễn -->
        <div class="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 text-base flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> 2. Kiến thức nền về đọc nhạc và biểu diễn
          </h4>
          <p>• <strong>Khuông nhạc &amp; Khóa Sol:</strong> Khuông gồm 5 dòng, 4 khe. Khóa Sol xác định nốt Sol ở dòng 2; các nốt: Đô - Rê - Mi - Fa - Sol - La - Si.</p>
          <p>• <strong>Trường độ:</strong> Nốt tròn (4 phách) = 2 nốt trắng = 4 nốt đen = 8 nốt móc đơn = 16 nốt móc kép. Dấu chấm dôi tăng thêm 1/2 giá trị trường độ nốt đứng trước.</p>
          <p>• <strong>Gam trưởng &amp; Đô trưởng (Bài 2):</strong> Cấu trúc <strong>1 – 1 – ½ – 1 – 1 – 1 – ½</strong>. Hóa biểu không có dấu thăng (#) hoặc giáng (b). Âm chủ Đô (C-dur), tính chất tươi sáng.</p>
          <p>• <strong>Gam thứ &amp; La thứ (Bài 12):</strong> Cấu trúc <strong>1 – ½ – 1 – 1 – ½ – 1 – 1</strong>. Hóa biểu không dấu hóa. Âm chủ La (a-moll), tính chất mềm mại, trữ tình.</p>
          <p>• <strong>Nhịp 2/4:</strong> 2 phách đen (1 mạnh, 1 nhẹ). Sơ đồ tay: xuống - lên.</p>
          <p>• <strong>Nhịp 3/8 (Bài 6):</strong> 3 phách móc đơn (1 mạnh, 2-3 nhẹ). Nhanh, linh hoạt hơn 3/4. Sơ đồ: xuống - sang - lên.</p>
          <p>• <strong>Nhịp 6/8 (Bài 10):</strong> 6 phách móc đơn (Phách 1 mạnh, Phách 4 mạnh vừa). Tổ chức thành 2 nhóm ba phách dập dềnh như sóng nước.</p>
          <p>• <strong>Đảo phách (Bài 14):</strong> Âm vang ở phách nhẹ ngân sang phách mạnh tiếp theo, tạo điểm nhấn bất ngờ, tránh đơn điệu.</p>
        </div>

        <!-- Mục 4: Thường thức âm nhạc cần nhớ -->
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 text-base flex items-center gap-2">
            <i class="fa-solid fa-landmark"></i> 4. Thường thức âm nhạc – Tác giả &amp; Tác phẩm
          </h4>
          <p>• <strong>Thể loại Hợp xướng (SATB):</strong> Soprano (Nữ cao), Alto (Nữ trầm), Tenor (Nam cao), Bass (Nam trầm). Hát A cappella là hát không nhạc đệm.</p>
          <p>• <strong>Dân ca Quan họ Bắc Ninh (Bài 4):</strong> Vùng Kinh Bắc; lề lối hát đối đáp; tiêu chuẩn <em>Vang - Rền - Nền - Nảy</em>; UNESCO vinh danh Di sản thế giới 2009.</p>
          <p>• <strong>Đàn Nguyệt &amp; Đàn Tính (Bài 13):</strong> Đàn Nguyệt (thùng tròn trăng rằm, Hát Văn, Tài tử); Đàn Tính (bầu đàn bằng quả bầu khô, Hát Then Tày Nùng, UNESCO 2019).</p>
          <p>• <strong>Nhạc sĩ Trần Hoàn (Bài 9):</strong> Giải thưởng Hồ Chí Minh, tác giả <em>Một mùa xuân nho nhỏ</em> (thơ: Thanh Hải) mang âm hưởng dân ca miền Trung đằm thắm.</p>
          <p>• <strong>Frédéric Chopin (Bài 15):</strong> "Nhà thơ của cây đàn piano" người Ba Lan; kiệt tác <em>Fantaisie-Impromptu in C Sharp Minor</em> (Khúc tùy hứng giọng Đô thăng thứ).</p>
        </div>

        <!-- Mục 5: Thực hành nhạc cụ & An toàn -->
        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 text-base flex items-center gap-2">
            <i class="fa-solid fa-shield-halved"></i> 5. Thực hành nhạc cụ và An toàn
          </h4>
          <p>• <strong>Sáo Recorder:</strong> Tay trái ở trên (ngón 0, 1, 2, 3), tay phải ở dưới (ngón 4, 5, 6, 7). Bịt kín đầu ngón tay, thổi hơi "tu" nhẹ nhàng, tránh thổi gấp rè tiếng.</p>
          <p>• <strong>Kèn phím Melodica:</strong> Ngồi thẳng lưng, tay cong vòm cung tự nhiên, phối hợp hơi và ngón tay; vệ sinh ống thổi sạch sẽ.</p>
          <p>• <strong>An toàn giọng hát:</strong> Khởi động giọng trước khi hát, uống đủ nước ấm, không cố gào thét quá to/quá cao; dừng ngay khi thấy rát họng.</p>
        </div>

      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">CodeHub • Nền Tảng Học Tập Trực Tuyến Toàn Diện</p>
      <p>Học liệu chuẩn hóa SGK Âm nhạc 8 – Bộ sách Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
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
      const sec = document.getElementById('music-exam-section');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }

    // Filter Học kì 1 / Học kì 2
    function filterTerm(term) {
      const tabAll = document.getElementById('tab-all');
      const tab1 = document.getElementById('tab-hk1');
      const tab2 = document.getElementById('tab-hk2');

      tabAll.className = 'term-tab-btn py-1 px-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition';
      tab1.className = 'term-tab-btn py-1 px-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition';
      tab2.className = 'term-tab-btn py-1 px-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition';

      const activeTab = term === 'all' ? tabAll : (term === '1' ? tab1 : tab2);
      activeTab.className = 'term-tab-btn py-1 px-1.5 rounded-lg bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-sm transition font-bold';

      // Sidebar groups
      document.querySelectorAll('.topic-nav-group').forEach(grp => {
        if (term === 'all' || grp.getAttribute('data-term') === term) {
          grp.classList.remove('hidden');
        } else {
          grp.classList.add('hidden');
        }
      });

      // Main cards
      document.querySelectorAll('.lesson-card').forEach(card => {
        if (term === 'all' || card.getAttribute('data-term') === term) {
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
        b.classList.remove('border-purple-400', 'hover:border-purple-400');
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

    // Thi Trạng Nguyên 60:00 Logic
    const examQuestionsData = [
      { q: "Bài hát 'Chào năm học mới' của nhạc sĩ Phạm Tuyên viết ở nhịp nào và mang tính chất gì?", opts: ["Nhịp 2/4 – Vui tươi, rộn ràng, phấn khởi", "Nhịp 3/4 – Du dương, êm ái", "Nhịp 6/8 – Lướt sóng, chậm rãi", "Nhịp 4/4 – Hành khúc trang nghiêm"], ans: 0 },
      { q: "Cấu trúc cung và nửa cung chuẩn mực của Gam trưởng là:", opts: ["1 – 1 – 1/2 – 1 – 1 – 1 – 1/2", "1 – 1/2 – 1 – 1 – 1/2 – 1 – 1", "1 – 1 – 1 – 1/2 – 1 – 1 – 1/2", "1/2 – 1 – 1 – 1 – 1/2 – 1 – 1"], ans: 0 },
      { q: "Giọng Đô trưởng (C-dur) có âm chủ là nốt nào và hóa biểu có bao nhiêu dấu hóa?", opts: ["Âm chủ Đô – Không có dấu thăng (#) hoặc giáng (b)", "Âm chủ Đô – Có 1 dấu thăng (Fa#)", "Âm chủ La – Có 1 dấu giáng (Sib)", "Âm chủ Sol – Có 1 dấu thăng"], ans: 0 },
      { q: "Dân ca Quan họ Bắc Ninh được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại năm nào?", opts: ["Năm 2009", "Năm 2005", "Năm 2012", "Năm 2019"], ans: 0 },
      { q: "Bốn tiêu chuẩn kĩ thuật hát đỉnh cao trong nghệ thuật Quan họ Bắc Ninh là:", opts: ["Vang – Rền – Nền – Nảy", "Trầm – Bổng – Nhanh – Chậm", "Mạnh – Nhẹ – Đều – Rõ", "Luyến – Láy – Ngân – Rung"], ans: 0 },
      { q: "Dàn hợp xướng hỗn hợp 4 bè SATB gồm các loại giọng nào?", opts: ["Soprano (Nữ cao), Alto (Nữ trầm), Tenor (Nam cao), Bass (Nam trầm)", "Soprano, Mezzo-soprano, Baritone, Bass", "Alto, Tenor, Baritone, Contralto", "Nữ cao, Nữ trung, Nam trung, Nam trầm"], ans: 0 },
      { q: "Hình thức hát hợp xướng hoàn toàn không có nhạc cụ đệm được gọi là:", opts: ["Hát A cappella", "Hát Canon", "Hát Unison", "Hát Solo"], ans: 0 },
      { q: "Trong nhịp 3/8, giá trị trường độ của mỗi phách tương đương với hình nốt nào?", opts: ["Một nốt móc đơn", "Một nốt đen", "Một nốt trắng", "Một nốt móc kép"], ans: 0 },
      { q: "Điểm khác biệt cơ bản về đơn vị phách giữa nhịp 3/8 và nhịp 3/4 là:", opts: ["Nhịp 3/4 mỗi phách là 1 nốt đen; Nhịp 3/8 mỗi phách là 1 nốt móc đơn", "Nhịp 3/8 có 4 phách", "Nhịp 3/4 có 6 phách", "Hai nhịp này hoàn toàn giống hệt nhau"], ans: 0 },
      { q: "Ca khúc kinh điển 'Nơi đảo xa' viết về người chiến sĩ hải quân là sáng tác của nhạc sĩ nào?", opts: ["Nhạc sĩ Thế Song", "Nhạc sĩ Kim Long", "Nhạc sĩ Phan Huỳnh Điểu", "Nhạc sĩ An Thuyên"], ans: 0 },
      { q: "Cây đàn Guitar tiêu chuẩn thông thường có bao nhiêu dây đàn?", opts: ["6 dây", "4 dây", "5 dây", "8 dây"], ans: 0 },
      { q: "Cây đàn Ukulele nhỏ nhắn có xuất xứ từ quần đảo Hawaii có bao nhiêu dây đàn?", opts: ["4 dây", "6 dây", "3 dây", "5 dây"], ans: 0 },
      { q: "Ca khúc 'Một mùa xuân nho nhỏ' của nhạc sĩ Trần Hoàn được phổ nhạc từ bài thơ của nhà thơ nào?", opts: ["Nhà thơ Thanh Hải", "Nhà thơ Xuân Diệu", "Nhà thơ Huy Cận", "Nhà thơ Chế Lan Viên"], ans: 0 },
      { q: "Trong ô nhịp 6/8, hai trọng âm rơi vào các phách nào?", opts: ["Phách 1 (mạnh) và Phách 4 (mạnh vừa)", "Phách 1 và Phách 3", "Phách 2 và Phách 5", "Phách 1 và Phách 6"], ans: 0 },
      { q: "Ca khúc 'Trở về Surriento' (Torna a Surriento) là kiệt tác dân ca của đất nước nào?", opts: ["Nước Ý (Italia)", "Nước Pháp", "Nước Nga", "Nước Đức"], ans: 0 },
      { q: "Cấu trúc cung và nửa cung của Gam thứ tự nhiên là:", opts: ["1 – 1/2 – 1 – 1 – 1/2 – 1 – 1", "1 – 1 – 1/2 – 1 – 1 – 1 – 1/2", "1/2 – 1 – 1 – 1/2 – 1 – 1 – 1", "1 – 1 – 1 – 1/2 – 1 – 1 – 1/2"], ans: 0 },
      { q: "Giọng La thứ (a-moll) có âm chủ là nốt nào và mang tính chất cảm xúc chủ đạo gì?", opts: ["Âm chủ La – Tính chất trữ tình, mềm mại, sâu lắng", "Âm chủ Đô – Vui tươi rộn rã", "Âm chủ Sol – Hùng tráng", "Âm chủ Rê – Bí ẩn"], ans: 0 },
      { q: "Cây Đàn Tính (Tính Tẩu) của đồng bào Tày, Nùng, Thái có hộp cộng hưởng làm bằng:", opts: ["Nửa quả bầu khô", "Thùng gỗ tròn", "Ống tre nứa", "Vỏ dừa khô"], ans: 0 },
      { q: "Hiện tượng Đảo phách (Syncopation) trong âm nhạc là:", opts: ["Âm vang ở phách nhẹ và ngân dài qua phách mạnh tiếp theo", "Hát ngắt quãng từng phách", "Đổi giọng bài hát", "Bỏ qua một ô nhịp"], ans: 0 },
      { q: "Nhạc sĩ Frédéric Chopin người Ba Lan được xưng tụng với danh hiệu cao quý nào?", opts: ["Nhà thơ của cây đàn piano", "Vua nhạc kịch Opera", "Người cha của đàn guitar", "Thần đồng violon"], ans: 0 }
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
          '<div class="flex items-center justify-between text-xs text-purple-200 font-semibold">' +
            '<span>Câu ' + (index + 1) + ' / 20</span>' +
            '<span class="text-amber-300">Âm Nhạc 8</span>' +
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
        title = 'Xuất Sắc! Danh Hiệu Trạng Nguyên Âm Nhạc 8 🏆';
        feedback = 'Tuyệt đối 100%! Em đã nắm vững trọn vẹn toàn bộ 8 Chủ đề và 16 Bài học Âm nhạc 8!';
      } else if (score >= 16) {
        title = 'Bảng Nhãn Âm Nhạc 8 🌟';
        feedback = 'Kết quả rất xuất sắc! Em nắm rất chắc cả lí thuyết, nhạc cụ và các tác phẩm thường thức.';
      } else if (score >= 12) {
        title = 'Thám Hoa Âm Nhạc 8 👍';
        feedback = 'Đạt yêu cầu chuẩn! Em hãy ôn lại một số bài đọc nhạc và gam giọng để hoàn thiện hơn nhé.';
      } else {
        title = 'Cần Ôn Tập Thêm 💡';
        feedback = 'Em hãy mở Sổ tay kiến thức cốt lõi phía trên để ôn lại các chủ đề rồi thử sức lại nhé!';
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

// Write to courses/amnhac_8.html
const amnhacPath = path.join(__dirname, '../courses/amnhac_8.html');
fs.writeFileSync(amnhacPath, pageHtml, 'utf8');
console.log(`✅ Successfully written: ${amnhacPath} (${pageHtml.length} bytes)`);

// Write to courses/music_8.html
const musicPath = path.join(__dirname, '../courses/music_8.html');
fs.writeFileSync(musicPath, pageHtml, 'utf8');
console.log(`✅ Successfully written: ${musicPath} (${pageHtml.length} bytes)`);
