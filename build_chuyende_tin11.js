const fs = require('fs');
const path = require('path');
const lessons = require('./make_chuyende_tin11_data.js');

console.log('Total lessons loaded for Chuyên đề Tin học 11 ICT:', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chuyên đề 1",
    title: "Chuyên đề 1: Thực hành sử dụng phần mềm vẽ trang trí (Inkscape)",
    desc: "Khám phá thế giới đồ họa Vector: Giao diện và công cụ Inkscape; Thao tác hình khối cơ bản; Vẽ và uốn nắn đường cong Bezier qua điểm neo; Các phép toán cắt ghép Boolean (Union, Difference); Uốn chữ nghệ thuật Put on Path và thiết kế sản phẩm trang trí hoàn chỉnh (Logo, nhãn vở, thiệp chúc mừng).",
    icon: "fa-vector-square",
    gradient: "from-purple-700 via-indigo-800 to-slate-900",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
    lessonNums: [1, 2, 3, 4, 5]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chuyên đề 2",
    title: "Chuyên đề 2: Thực hành sử dụng phần mềm làm phim hoạt hình (Toontastic)",
    desc: "Quy trình sản xuất phim hoạt hình chuẩn; Cấu trúc 3 hồi (Beginning - Middle - End); Thiết kế và tạo hình nhân vật độc quyền bằng tính năng 'Draw Your Own'; Đạo diễn diễn xuất tương tác theo thời gian thực; Thu âm lồng tiếng, phối nhạc nền cảm xúc và xuất bản video MP4 chuẩn trình chiếu.",
    icon: "fa-clapperboard",
    gradient: "from-fuchsia-700 via-pink-800 to-slate-900",
    badgeColor: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-300",
    lessonNums: [6, 7, 8, 9, 10]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chuyên đề 3",
    title: "Chuyên đề 3: Thực hành sử dụng phần mềm chỉnh sửa ảnh & Ảnh động (GIMP)",
    desc: "Làm chủ khái niệm Lớp ảnh (Layers) và Mặt nạ lớp (Layer Mask); Nguyên lý tạo ảnh động Frame-by-Frame; Thiết lập thời gian trễ (ms) và chế độ thay thế (replace) / chồng đè (combine); Tự động hóa hiệu ứng với bộ lọc Animation (Blend, Spinning Globe) và tối ưu hóa dung lượng GIF chuẩn web.",
    icon: "fa-photo-film",
    gradient: "from-violet-700 via-purple-900 to-slate-900",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300",
    lessonNums: [11, 12, 13, 14, 15]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Dự án tổng hợp",
    title: "Dự án học tập: Sáng tạo ấn phẩm số & Chiến dịch truyền thông học đường",
    desc: "Dự án tích hợp liên hoàn 3 công cụ: Thiết kế Logo nhận diện vector trên Inkscape, Sản xuất phim hoạt hình giáo dục trên Toontastic, Thiết kế Banner động quảng bá sự kiện trên GIMP; Báo cáo dự án và đánh giá năng lực theo tiêu chuẩn Rubrics.",
    icon: "fa-rocket",
    gradient: "from-indigo-700 via-purple-900 to-slate-900",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
    lessonNums: [16]
  }
];

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderLessonArticle(lesson) {
  const objectivesHtml = lesson.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-check text-purple-500 mt-1 shrink-0"></i>
      <span>${escapeHtml(obj)}</span>
    </li>
  `).join('');

  const letters = ['A', 'B', 'C', 'D'];
  const quizzesHtml = lesson.quizzes.map((q, idx) => {
    const optsHtml = q.options.map((opt, optIdx) => {
      const isCorrect = optIdx === q.correct;
      return `
        <button type="button" 
                onclick="checkSingleQuiz(this, ${isCorrect})"
                class="quiz-btn text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition duration-150 flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[optIdx]}</span>
          <span class="mt-0.5">${escapeHtml(opt)}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm" data-answered="false">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs shrink-0 mt-0.5">Câu ${idx + 1}</span>
          <span>${escapeHtml(q.question)}</span>
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${optsHtml}
        </div>
        <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
        <div class="quiz-explain hidden mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
          💡 <strong>Giải thích chuyên môn:</strong> ${escapeHtml(q.explanation)}
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Lesson ${lesson.lessonNum} -->
    <article id="${lesson.id}" class="lesson-card scroll-mt-24 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Lesson Header -->
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-purple-50/70 to-indigo-50/40 dark:from-gray-800 dark:to-gray-800/60">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-purple-600 text-white font-bold text-xs">
              Bài ${lesson.lessonNum}
            </span>
            <span class="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 text-xs font-semibold">
              ${escapeHtml(lesson.tag)}
            </span>
          </div>
          <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <i class="fa-regular fa-clock"></i> Thời lượng: 45 phút thực hành
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
          ${lesson.title}
        </h3>
        <p class="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <!-- Lesson Body -->
      <div class="p-6 sm:p-8 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <!-- Section 1: Objectives -->
        <div class="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40">
          <h4 class="text-sm font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-purple-600"></i> Mục tiêu cần đạt
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            ${objectivesHtml}
          </ul>
        </div>

        <!-- Section 2: Summary / Theory -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-book-open text-purple-600"></i> 1. Kiến thức trọng tâm & Kỹ thuật cốt lõi
          </h4>
          ${lesson.summary}
        </div>

        <!-- Section 3: Practice Steps -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-laptop-code text-purple-600"></i> 2. Hướng dẫn thực hành từng bước chi tiết
          </h4>
          <div class="space-y-4">
            ${lesson.steps.map((st, sidx) => `
              <div class="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-purple-500 flex flex-col gap-1.5">
                <span class="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wide">
                  ${st.title}
                </span>
                <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  ${st.content}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 4: Self practice challenge -->
        <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
          <h4 class="text-sm font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-fire text-amber-600"></i> 3. Nhiệm vụ tự luyện / Vận dụng sáng tạo
          </h4>
          <p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            ${escapeHtml(lesson.practice)}
          </p>
        </div>

        <!-- Section 5: Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-purple-600"></i> 4. Câu hỏi củng cố & Luyện tập nhanh
            </h4>
            <span class="text-xs text-gray-500 dark:text-gray-400">4 câu trắc nghiệm</span>
          </div>
          <div class="space-y-4">
            ${quizzesHtml}
          </div>
        </div>
      </div>
    </article>
  `;
}

function generateChuyenDeTin11Html() {
  const sidebarNavHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const listItems = topicLessons.map(l => `
      <li>
        <a href="#${l.id}" 
           data-title="${escapeHtml(l.title.toLowerCase())}"
           class="sidebar-link group flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition">
          <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-purple-500 mt-1.5 shrink-0 transition"></span>
          <span class="line-clamp-2 leading-snug">Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="topic-group mb-5">
        <a href="#${topic.id}" class="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 mb-2 px-2.5">
          <span class="flex items-center gap-2">
            <i class="fa-solid ${topic.icon} text-purple-600"></i>
            <span>${topic.shortTitle}</span>
          </span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 font-semibold">${topicLessons.length} bài</span>
        </a>
        <ul class="space-y-0.5 border-l border-gray-200 dark:border-gray-800 ml-4 pl-1">
          ${listItems}
        </ul>
      </div>
    `;
  }).join('');

  const mobileNavHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const listItems = topicLessons.map(l => `
      <li>
        <a href="#${l.id}" class="mobile-nav-link block py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
          Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-4">
        <div class="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid ${topic.icon} text-purple-600"></i>
          <span>${topic.title}</span>
        </div>
        <ul class="space-y-1 pl-3 border-l border-gray-200 dark:border-gray-700">
          ${listItems}
        </ul>
      </div>
    `;
  }).join('');

  const mainTopicsHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const articlesHtml = topicLessons.map(l => renderLessonArticle(l)).join('\n');

    return `
      <!-- TOPIC ${topic.num}: ${escapeHtml(topic.title)} -->
      <section id="${topic.id}" class="scroll-mt-24 space-y-8">
        <!-- Topic Banner Header -->
        <div class="rounded-3xl p-6 sm:p-8 bg-gradient-to-r ${topic.gradient} text-white shadow-lg relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl text-white pointer-events-none">
            <i class="fa-solid ${topic.icon}"></i>
          </div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full ${topic.badgeColor} text-xs font-bold mb-3 shadow-sm">
              <i class="fa-solid ${topic.icon}"></i>
              <span>${topic.shortTitle}</span>
              <span>&bull;</span>
              <span>${topicLessons.length} bài học</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
              ${topic.title}
            </h2>
            <p class="text-sm sm:text-base text-purple-100 max-w-3xl leading-relaxed">
              ${topic.desc}
            </p>
          </div>
        </div>

        <!-- Topic Lessons -->
        <div class="space-y-8">
          ${articlesHtml}
        </div>
      </section>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chuyên Đề Tin Học 11 - Định hướng Tin Học Ứng Dụng (KNTT) | CodeHub</title>
  <meta name="description" content="Chương trình học Chuyên đề Tin học 11 - Định hướng Tin học ứng dụng theo SGK Kết nối tri thức: Đồ họa Vector Inkscape, Làm phim hoạt hình Toontastic, Biên tập ảnh động GIMP và Dự án số học đường.">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#faf5ff',
              100: '#f3e8ff',
              200: '#e9d5ff',
              300: '#d8b4fe',
              400: '#c084fc',
              500: '#a855f7',
              600: '#7c3aed',
              700: '#6d28d9',
              800: '#5b21b6',
              900: '#4c1d95',
            }
          }
        }
      }
    };
  </script>
  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(124, 58, 237, 0.3);
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(124, 58, 237, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 z-50 transition-all duration-150" style="width: 0%;"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 text-sm font-medium transition" title="Trở về trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <span class="text-gray-300 dark:text-gray-700">|</span>
        <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
          <span class="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center text-sm shadow-sm">
            <i class="fa-solid fa-graduation-cap"></i>
          </span>
          <span class="text-base sm:text-lg tracking-tight">Code<span class="text-purple-600">Hub</span></span>
        </div>
        <span class="hidden md:inline px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
          Chuyên Đề Tin Học 11 - Tin Học Ứng Dụng (KNTT)
        </span>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Exam modal launch button -->
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition">
          <i class="fa-solid fa-file-signature"></i>
          <span class="hidden sm:inline">Kiểm tra toàn khóa</span>
          <span>(10 câu)</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button id="themeToggle" class="p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Toggle Theme">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button id="mobileMenuBtn" class="lg:hidden p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <div id="mobileDrawer" class="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden">
    <div class="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white dark:bg-gray-900 p-6 overflow-y-auto shadow-2xl">
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
        <h3 class="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-list-ul text-purple-600"></i> Mục lục bài học
        </h3>
        <button id="closeDrawerBtn" class="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="space-y-4">
        ${mobileNavHtml}
      </div>
    </div>
  </div>

  <!-- Hero Banner Panel -->
  <div class="bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-purple-900/40">
    <div class="max-w-7xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-4 border border-purple-500/30">
        <i class="fa-solid fa-circle-check text-purple-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 &mdash; Sách Chuyên đề học tập Tin học 11 KNTT</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
        Chuyên Đề Tin Học 11 &mdash; Tin Học Ứng Dụng (ICT)
      </h1>
      <p class="text-base sm:text-lg text-purple-200/90 max-w-3xl leading-relaxed mb-6">
        Làm chủ các công cụ đồ họa và hoạt hình số hiện đại: Thiết kế đồ họa vector với <strong>Inkscape</strong>, Sản xuất phim hoạt hình 2D/3D với <strong>Toontastic</strong>, Biên tập ảnh động chuyên sâu với <strong>GIMP</strong> và Tích hợp dự án sáng tạo ấn phẩm số học đường.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-book text-purple-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">16 Bài học</div>
            <div class="text-[11px] text-purple-300">Thực hành chuẩn SGK</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-circle-question text-purple-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">64 Trắc nghiệm</div>
            <div class="text-[11px] text-purple-300">Chấm điểm tức thì</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-shapes text-purple-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">3 Phần mềm</div>
            <div class="text-[11px] text-purple-300">Inkscape, Toon, GIMP</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-diagram-project text-purple-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">1 Capstone Project</div>
            <div class="text-[11px] text-purple-300">Ấn phẩm & Hoạt hình</div>
          </div>
        </div>
      </div>

      <!-- Quick Topic Pills -->
      <div class="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-purple-900/50 text-xs">
        <span class="text-purple-300 font-semibold">Chuyển nhanh đến:</span>
        <a href="#chude-1" class="px-3 py-1 rounded-lg bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 border border-purple-700/50 transition">
          <i class="fa-solid fa-vector-square mr-1"></i> CĐ1: Inkscape (5 bài)
        </a>
        <a href="#chude-2" class="px-3 py-1 rounded-lg bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 border border-purple-700/50 transition">
          <i class="fa-solid fa-clapperboard mr-1"></i> CĐ2: Hoạt hình Toontastic (5 bài)
        </a>
        <a href="#chude-3" class="px-3 py-1 rounded-lg bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 border border-purple-700/50 transition">
          <i class="fa-solid fa-photo-film mr-1"></i> CĐ3: Ảnh động GIMP (5 bài)
        </a>
        <a href="#chude-4" class="px-3 py-1 rounded-lg bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 border border-purple-700/50 transition">
          <i class="fa-solid fa-rocket mr-1"></i> Dự án Capstone (Bài 16)
        </a>
      </div>
    </div>
  </div>

  <!-- Main Content Layout (Sidebar + Articles) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="flex gap-8 items-start">

      <!-- Sticky Left Sidebar -->
      <aside class="hidden lg:block w-72 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 pb-6">
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-4">
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-400 text-xs"></i>
            <input type="text" 
                   id="lessonSearch" 
                   placeholder="Tìm kiếm bài học..." 
                   class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 px-2.5 flex items-center justify-between">
            <span>Danh mục bài học</span>
            <span>16 bài</span>
          </h3>
          <nav id="sidebarNav" class="space-y-4">
            ${sidebarNavHtml}
          </nav>
        </div>

        <!-- Course Quiz Action Card -->
        <div class="mt-4 p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-md">
          <div class="flex items-center gap-2 mb-2 font-bold text-sm">
            <i class="fa-solid fa-medal"></i>
            <span>Đánh giá toàn khóa</span>
          </div>
          <p class="text-xs text-purple-100 mb-3 leading-relaxed">
            10 câu hỏi tổng hợp kiến thức từ 4 chuyên đề thực hành đồ họa số Tin 11.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-white text-purple-700 hover:bg-purple-50 text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play"></i> Bắt đầu thi thử
          </button>
        </div>
      </aside>

      <!-- Main Lesson Articles -->
      <main class="flex-1 min-w-0 space-y-12">
        ${mainTopicsHtml}
      </main>

    </div>
  </div>

  <!-- Course Exam Modal -->
  <div id="courseQuizModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 font-bold text-xs">
            Bài kiểm tra tổng hợp
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Chuyên Đề Tin Học 11 (ICT)
          </h3>
        </div>
        <button onclick="closeCourseQuizModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Exam Form -->
      <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6 text-sm text-gray-700 dark:text-gray-300">
        <!-- Q1 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            1. Đặc điểm cốt lõi nhất của định dạng ảnh đồ họa vector (SVG) trong Inkscape so với ảnh Bitmap là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-purple-600">
              <span>A. Có thể phóng to thu nhỏ ở mọi kích thước mà không bị vỡ hạt hay giảm chất lượng</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-purple-600">
              <span>B. Dung lượng tệp luôn luôn nặng hơn ảnh chụp JPEG hàng chục lần</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-purple-600">
              <span>C. Chỉ hỗ trợ 2 màu đen và trắng</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Trong Inkscape, muốn mở bảng điều khiển quản lý Màu tô và Đường viền (Fill and Stroke), ta dùng tổ hợp phím nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-purple-600">
              <span>A. Ctrl + Shift + F</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-purple-600">
              <span>B. Ctrl + Shift + D</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-purple-600">
              <span>C. Ctrl + Alt + G</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Phép toán Boolean nào dùng đối tượng nằm trên làm khuôn cắt bỏ phần giao nhau khỏi đối tượng nằm dưới?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-purple-600">
              <span>A. Path -> Difference (Ctrl + -)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-purple-600">
              <span>B. Path -> Union (Ctrl + +)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-purple-600">
              <span>C. Path -> Intersection (Ctrl + *)</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Muốn gắn một dòng chữ văn bản uốn lượn chạy cong theo một đường tròn trong Inkscape, ta dùng lệnh gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-purple-600">
              <span>A. Text -> Put on Path</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-purple-600">
              <span>B. Object -> Group</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-purple-600">
              <span>C. Path -> Simplify</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Trong cấu trúc kịch bản 3 hồi kinh điển (Short Story) của Toontastic, thứ tự đúng của 3 phân đoạn là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-purple-600">
              <span>A. Beginning (Mở đầu) -> Middle (Cao trào/Thử thách) -> End (Kết thúc/Giải quyết)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-purple-600">
              <span>B. Climax -> Conflict -> Setup</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-purple-600">
              <span>C. End -> Middle -> Beginning</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Tính năng nào trong Toontastic cho phép học sinh tự vẽ nhân vật hoạt hình bằng tay và tự động biến thành mô hình 3D chuyển động?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-purple-600">
              <span>A. Draw Your Own</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-purple-600">
              <span>B. Import Python</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-purple-600">
              <span>C. Camera Scanner</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Trong phần mềm GIMP, thành phần nào đóng vai trò tương ứng là một khung hình (Frame) của ảnh động?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-purple-600">
              <span>A. Mỗi một Lớp ảnh (Layer)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-purple-600">
              <span>B. Mỗi một thư mục lưu trữ</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-purple-600">
              <span>C. Mỗi một nét cọ vẽ</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Cú pháp nào đặt trong tên lớp của GIMP để quy định khung hình dừng lại 500 mili-giây và xóa sạch trước khi chuyển sang khung tiếp?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-purple-600">
              <span>A. (500ms) (replace)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-purple-600">
              <span>B. [delay: 500]</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-purple-600">
              <span>C. (500) (combine)</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Bộ lọc nào trong menu Filters -> Animation của GIMP giúp giảm mạnh dung lượng tệp GIF bằng cách loại bỏ các pixel trùng lặp?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-purple-600">
              <span>A. Optimize (for GIF)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-purple-600">
              <span>B. Gaussian Blur</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-purple-600">
              <span>C. Pixelize</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Khi kết hợp sản phẩm giữa Inkscape và GIMP, định dạng nào lý tưởng nhất để xuất logo vector có nền trong suốt sang GIMP?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-purple-600">
              <span>A. PNG nền trong suốt (Transparent background)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-purple-600">
              <span>B. JPEG chất lượng thấp</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-purple-600">
              <span>C. BMP không nén</span>
            </label>
          </div>
        </div>

        <div class="pt-4 flex items-center justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Đóng lại
          </button>
          <button type="submit" class="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white"></h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto"></p>
        <button onclick="resetCourseExam()" class="mt-4 px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold transition">
          Làm lại bài kiểm tra
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">
        CodeHub &bull; Chuyên Đề Học Tập Tin Học 11 &mdash; Định Hướng Tin Học Ứng Dụng (ICT)
      </p>
      <p>
        Bản quyền nội dung &copy; 2026. Xây dựng bám sát Chương trình Giáo dục Phổ thông 2018 (SGK Kết nối tri thức với cuộc sống).
      </p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Theme Toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
      htmlEl.classList.toggle('dark');
      localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
    });

    // Mobile Drawer
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');

    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', () => mobileDrawer.classList.remove('hidden'));
    }
    if (closeDrawerBtn && mobileDrawer) {
      closeDrawerBtn.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    }
    if (mobileDrawer) {
      mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) mobileDrawer.classList.add('hidden');
      });
      mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(a => {
        a.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
      });
    }

    // Reading progress bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const pb = document.getElementById('progressBar');
      if (pb) pb.style.width = scrolled + '%';
    });

    // Live Sidebar Search
    const lessonSearch = document.getElementById('lessonSearch');
    if (lessonSearch) {
      lessonSearch.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        const articles = document.querySelectorAll('.lesson-card');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');

        articles.forEach(art => {
          const text = art.innerText.toLowerCase();
          if (!q || text.includes(q)) {
            art.style.display = '';
          } else {
            art.style.display = 'none';
          }
        });

        sidebarLinks.forEach(link => {
          const title = link.getAttribute('data-title') || link.innerText.toLowerCase();
          const parentLi = link.closest('li');
          if (!q || title.includes(q)) {
            if (parentLi) parentLi.style.display = '';
          } else {
            if (parentLi) parentLi.style.display = 'none';
          }
        });
      });
    }

    // Single Question Quiz Checker
    function checkSingleQuiz(btn, isCorrect) {
      const item = btn.closest('.quiz-item');
      if (item.dataset.answered === 'true') return;
      item.dataset.answered = 'true';

      const buttons = item.querySelectorAll('.quiz-btn');
      buttons.forEach(b => {
        b.disabled = true;
        b.classList.add('opacity-60', 'cursor-not-allowed');
      });

      const feedback = item.querySelector('.quiz-feedback');
      const explain = item.querySelector('.quiz-explain');

      feedback.classList.remove('hidden');
      explain.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.remove('opacity-60');
        btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-800', 'dark:bg-emerald-950/60', 'dark:text-emerald-300', 'font-bold');
        feedback.classList.add('bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950/50', 'dark:text-emerald-300', 'border', 'border-emerald-200', 'dark:border-emerald-800');
        feedback.innerHTML = '<strong>🎉 Chính xác!</strong> Bạn đã chọn đáp án hoàn toàn chuẩn xác.';
      } else {
        btn.classList.remove('opacity-60');
        btn.classList.add('bg-red-100', 'border-red-500', 'text-red-800', 'dark:bg-red-950/60', 'dark:text-red-300');
        feedback.classList.add('bg-red-50', 'text-red-800', 'dark:bg-red-950/50', 'dark:text-red-300', 'border', 'border-red-200', 'dark:border-red-800');
        feedback.innerHTML = '<strong>Chưa chính xác!</strong> Hãy xem lại lời giải thích chuyên môn phía dưới nhé.';
      }
    }

    // Modal Course Quiz
    function openCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) modal.classList.remove('hidden');
    }
    function closeCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) modal.classList.add('hidden');
    }

    // Course Exam Submission
    const examAnswers = {
      eq1: 'A',
      eq2: 'A',
      eq3: 'A',
      eq4: 'A',
      eq5: 'A',
      eq6: 'A',
      eq7: 'A',
      eq8: 'A',
      eq9: 'A',
      eq10: 'A'
    };

    function submitCourseExam(e) {
      e.preventDefault();
      const form = document.getElementById('courseExamForm');
      let score = 0;

      for (let i = 1; i <= 10; i++) {
        const val = form['eq' + i]?.value;
        if (val === examAnswers['eq' + i]) {
          score++;
        }
      }

      form.classList.add('hidden');
      const resultBox = document.getElementById('courseExamResult');
      resultBox.classList.remove('hidden');
      document.getElementById('examScoreText').innerText = 'Kết quả của bạn: ' + score + '/10 điểm';

      let comment = '';
      if (score >= 9) {
        comment = 'Xuất sắc! Bạn nắm rất vững bộ kỹ năng đồ họa và hoạt hình số Chuyên đề Tin học 11!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các công cụ Inkscape, Toontastic và GIMP.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy thực hành vẽ vector và làm hoạt hình nhiều hơn để nhuần nhuyễn kỹ năng nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc lại hướng dẫn từng bài học và luyện tập thêm nhé!';
      }
      document.getElementById('examCommentText').innerText = comment;
    }

    function resetCourseExam() {
      const form = document.getElementById('courseExamForm');
      form.reset();
      form.classList.remove('hidden');
      document.getElementById('courseExamResult').classList.add('hidden');
    }
  </script>
</body>
</html>`;
}

console.log('Generating updated full page structure for Chuyên đề Tin học 11 ICT...');
const htmlContent = generateChuyenDeTin11Html();
const targetPath = path.join(__dirname, 'courses', 'chuyende_tinhoc_11_ict.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build chuyende_tinhoc_11_ict.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
