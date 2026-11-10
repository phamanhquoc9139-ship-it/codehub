const fs = require('fs');
const path = require('path');
const lessons = require('./make_chuyende_toan11_data.js');

console.log('Total lessons loaded for Chuyên Đề Toán 11:', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chuyên đề 1",
    title: "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    desc: "Khám phá thế giới hình học biến hình: Phép tịnh tiến, đối xứng trục, đối xứng tâm, phép quay, phép vị tự và phép đồng dạng; Ứng dụng toán học trong nghệ thuật dải hoa văn viền (Frieze groups), thổ cẩm Tây Bắc, gốm Bát Tràng và lát phẳng Escher.",
    icon: "fa-shapes",
    gradient: "from-indigo-800 via-indigo-900 to-slate-900",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
    lessonNums: [1, 2, 3, 4]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chuyên đề 2",
    title: "Chuyên đề 2: Khái niệm cơ bản của lý thuyết đồ thị",
    desc: "Nhập môn Lý thuyết đồ thị hiện đại: Đồ thị vô hướng, có hướng, bậc của đỉnh, Bổ đề bắt tay; Biểu diễn ma trận kề; Đồ thị Euler và bài toán 7 cây cầu Königsberg (1736); Đồ thị Hamilton và bài toán Người bán hàng (TSP).",
    icon: "fa-project-diagram",
    gradient: "from-violet-800 via-purple-900 to-slate-900",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300",
    lessonNums: [5, 6, 7]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chuyên đề 3",
    title: "Chuyên đề 3: Thuật toán đồ thị & Vẽ kỹ thuật",
    desc: "Cây và Cây khung nhỏ nhất với thuật toán Kruskal; Thuật toán tìm đường đi ngắn nhất Dijkstra; Bản chất phép chiếu vuông góc (hình chiếu đứng, bằng, cạnh) theo chuẩn TCVN & ISO; Hình chiếu trục đo vuông góc đều và Mặt cắt - Hình cắt.",
    icon: "fa-drafting-compass",
    gradient: "from-blue-800 via-indigo-900 to-slate-900",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
    lessonNums: [8, 9, 10, 11]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Dự án tổng hợp",
    title: "Chuyên đề 4: Dự án Capstone Mô hình hóa toán học",
    desc: "Dự án thực tế liên môn tích hợp: Tối ưu mạng lưới giao thông thông minh đô thị bằng đồ thị trọng số (Dijkstra, Kruskal, Euler) kết hợp thiết kế bản vẽ kỹ thuật 3D trạm dừng xe buýt thông minh.",
    icon: "fa-city",
    gradient: "from-purple-800 via-pink-900 to-slate-900",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
    lessonNums: [12]
  }
];

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderLessonArticle(lesson) {
  const objectivesHtml = lesson.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-check text-indigo-500 mt-1 shrink-0"></i>
      <span>${obj}</span>
    </li>
  `).join('');

  const letters = ['A', 'B', 'C', 'D'];
  const quizzesHtml = lesson.quizzes.map((q, idx) => {
    const optsHtml = q.options.map((opt, optIdx) => {
      const isCorrect = optIdx === q.correct;
      return `
        <button type="button" 
                onclick="checkSingleQuiz(this, ${isCorrect})"
                class="quiz-btn text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition duration-150 flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[optIdx]}</span>
          <span class="mt-0.5">${opt}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm" data-answered="false">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs shrink-0 mt-0.5">Câu ${idx + 1}</span>
          <span>${q.question}</span>
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${optsHtml}
        </div>
        <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
        <div class="quiz-explain hidden mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
          💡 <strong>Giải thích chuyên môn:</strong> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Lesson ${lesson.lessonNum} -->
    <article id="${lesson.id}" class="lesson-card scroll-mt-24 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Lesson Header -->
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-indigo-50/70 to-purple-50/40 dark:from-gray-800 dark:to-gray-800/60">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-bold text-xs">
              Bài ${lesson.lessonNum}
            </span>
            <span class="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300 text-xs font-semibold">
              ${escapeHtml(lesson.tag)}
            </span>
          </div>
          <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <i class="fa-regular fa-clock"></i> Thời lượng: 45 phút học tập
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
          ${lesson.title}
        </h3>
        <p class="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <!-- Lesson Body -->
      <div class="p-6 sm:p-8 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <!-- Section 1: Objectives -->
        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
          <h4 class="text-sm font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-indigo-600"></i> Mục tiêu cần đạt
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            ${objectivesHtml}
          </ul>
        </div>

        <!-- Section 2: Summary / Theory -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-book-open text-indigo-600"></i> 1. Kiến thức trọng tâm & Định lý toán học
          </h4>
          ${lesson.summary}
        </div>

        <!-- Section 3: Practical Steps -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-square-root-variable text-indigo-600"></i> 2. Phương pháp giải toán từng bước chi tiết
          </h4>
          <div class="space-y-4">
            ${lesson.steps.map((st, sidx) => `
              <div class="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-indigo-500 flex flex-col gap-1.5">
                <span class="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide">
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
        <div class="p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60">
          <h4 class="text-sm font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-pen-ruler text-purple-600"></i> 3. Bài tập tự luyện & Vận dụng thực tế
          </h4>
          <div class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            ${lesson.practice.replace(/\n/g, '<br>')}
          </div>
        </div>

        <!-- Section 5: Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-indigo-600"></i> 4. Câu hỏi củng cố & Luyện tập nhanh
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

function generateChuyenDeToan11Html() {
  const sidebarNavHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const listItems = topicLessons.map(l => `
      <li>
        <a href="#${l.id}" 
           data-title="${escapeHtml(l.title.toLowerCase())}"
           class="sidebar-link group flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition">
          <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-indigo-500 mt-1.5 shrink-0 transition"></span>
          <span class="line-clamp-2 leading-snug">Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="topic-group mb-5">
        <a href="#${topic.id}" class="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 mb-2 px-2.5">
          <span class="flex items-center gap-2">
            <i class="fa-solid ${topic.icon} text-indigo-600"></i>
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
        <a href="#${l.id}" class="mobile-nav-link block py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
          Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-4">
        <div class="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid ${topic.icon} text-indigo-600"></i>
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
            <p class="text-sm sm:text-base text-indigo-100 max-w-3xl leading-relaxed">
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
  <title>Chuyên Đề Học Tập Toán 11 (KNTT) - Chuẩn GDPT 2018 | CodeHub</title>
  <meta name="description" content="Chuyên đề học tập Toán 11 theo SGK Kết nối tri thức: Phép biến hình trong mặt phẳng, Lý thuyết đồ thị (Euler, Hamilton, Dijkstra, Kruskal), Vẽ kĩ thuật và Dự án Capstone thực tế.">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- KaTeX for beautiful Math Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
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
              900: '#312e81',
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
      background: rgba(79, 70, 229, 0.3);
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(79, 70, 229, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 transition-all duration-150" style="width: 0%;"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-sm font-medium transition" title="Trở về trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <span class="text-gray-300 dark:text-gray-700">|</span>
        <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
          <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm shadow-sm">
            <i class="fa-solid fa-project-diagram"></i>
          </span>
          <span class="text-base sm:text-lg tracking-tight">Code<span class="text-indigo-600">Hub</span></span>
        </div>
        <span class="hidden md:inline px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          Chuyên Đề Học Tập Toán 11 (KNTT)
        </span>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Exam modal launch button -->
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition">
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
          <i class="fa-solid fa-list-ul text-indigo-600"></i> Mục lục bài học
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
  <div class="bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/40">
    <div class="max-w-7xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4 border border-indigo-500/30">
        <i class="fa-solid fa-circle-check text-indigo-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 &mdash; Sách Chuyên đề học tập Toán 11 KNTT</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
        Chuyên Đề Học Tập Toán 11
      </h1>
      <p class="text-base sm:text-lg text-indigo-200/90 max-w-3xl leading-relaxed mb-6">
        Nâng cao tư duy không gian và tối ưu thuật toán: <strong>Phép biến hình trong mặt phẳng</strong> (Tịnh tiến, đối xứng trục/tâm, phép quay, vị tự & hoa văn Escher), <strong>Lý thuyết đồ thị hiện đại</strong> (Bậc đỉnh, ma trận kề, đồ thị Euler, Hamilton, Dijkstra & Kruskal), <strong>Vẽ kỹ thuật</strong> (Hình chiếu vuông góc, hình chiếu trục đo) và <strong>Dự án Capstone mạng lưới thông minh</strong>.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-indigo-900/30 border border-indigo-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-book text-indigo-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">12 Bài học</div>
            <div class="text-[11px] text-indigo-300">Chuẩn SGK Chuyên đề</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-indigo-900/30 border border-indigo-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-circle-question text-indigo-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">48 Trắc nghiệm</div>
            <div class="text-[11px] text-indigo-300">Lời giải chi tiết</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-indigo-900/30 border border-indigo-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-project-diagram text-indigo-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">Lý thuyết đồ thị</div>
            <div class="text-[11px] text-indigo-300">Euler, Hamilton, Dijkstra</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-indigo-900/30 border border-indigo-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-city text-indigo-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">1 Capstone Project</div>
            <div class="text-[11px] text-indigo-300">Giao thông thông minh & 3D</div>
          </div>
        </div>
      </div>

      <!-- Quick Topic Pills -->
      <div class="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-indigo-900/50 text-xs">
        <span class="text-indigo-300 font-semibold">Chuyển nhanh đến:</span>
        <a href="#chude-1" class="px-3 py-1 rounded-lg bg-indigo-900/50 hover:bg-indigo-800/60 text-indigo-200 border border-indigo-700/50 transition">
          <i class="fa-solid fa-shapes mr-1"></i> CĐ1: Phép biến hình (Bài 1-4)
        </a>
        <a href="#chude-2" class="px-3 py-1 rounded-lg bg-indigo-900/50 hover:bg-indigo-800/60 text-indigo-200 border border-indigo-700/50 transition">
          <i class="fa-solid fa-project-diagram mr-1"></i> CĐ2: Lý thuyết đồ thị (Bài 5-7)
        </a>
        <a href="#chude-3" class="px-3 py-1 rounded-lg bg-indigo-900/50 hover:bg-indigo-800/60 text-indigo-200 border border-indigo-700/50 transition">
          <i class="fa-solid fa-drafting-compass mr-1"></i> CĐ3: Thuật toán & Bản vẽ (Bài 8-11)
        </a>
        <a href="#chude-4" class="px-3 py-1 rounded-lg bg-indigo-900/50 hover:bg-indigo-800/60 text-indigo-200 border border-indigo-700/50 transition">
          <i class="fa-solid fa-city mr-1"></i> CĐ4: Dự án Capstone (Bài 12)
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
                   placeholder="Tìm kiếm bài học toán..." 
                   class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 px-2.5 flex items-center justify-between">
            <span>Danh mục chuyên đề</span>
            <span>12 bài</span>
          </h3>
          <nav id="sidebarNav" class="space-y-4">
            ${sidebarNavHtml}
          </nav>
        </div>

        <!-- Course Quiz Action Card -->
        <div class="mt-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-md">
          <div class="flex items-center gap-2 mb-2 font-bold text-sm">
            <i class="fa-solid fa-medal"></i>
            <span>Đánh giá toàn khóa</span>
          </div>
          <p class="text-xs text-indigo-100 mb-3 leading-relaxed">
            10 câu hỏi tổng hợp kiến thức cả 3 chuyên đề Toán 11 KNTT.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5">
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
          <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-bold text-xs">
            Bài kiểm tra tổng hợp
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Chuyên Đề Học Tập Toán 11
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
            1. Trong mặt phẳng tọa độ Oxy, phép tịnh tiến theo vectơ $\\vec{v} = (2; 5)$ biến điểm $M(1; -3)$ thành điểm $M'$ có tọa độ nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-indigo-600">
              <span>A. $M'(3; 2)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-indigo-600">
              <span>B. $M'(-1; -8)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-indigo-600">
              <span>C. $M'(2; -15)$</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Trong mặt phẳng Oxy, phép quay quanh gốc tọa độ O góc quay $90^\\circ$ biến điểm $A(3; 4)$ thành điểm có tọa độ:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-indigo-600">
              <span>A. $A'(-4; 3)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-indigo-600">
              <span>B. $A'(4; -3)$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-indigo-600">
              <span>C. $A'(-3; -4)$</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Cho tam giác ABC có diện tích $S = 12\\text{ cm}^2$. Ảnh của tam giác qua phép vị tự tỉ số $k = -2$ có diện tích bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-indigo-600">
              <span>A. $48\\text{ cm}^2$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-indigo-600">
              <span>B. $-24\\text{ cm}^2$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-indigo-600">
              <span>C. $24\\text{ cm}^2$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Bổ đề bắt tay (Handshaking Lemma) trong lý thuyết đồ thị khẳng định rằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-indigo-600">
              <span>A. Tổng các bậc của tất cả các đỉnh bằng hai lần số cạnh ($\\sum \\text{deg}(v) = 2|E|$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-indigo-600">
              <span>B. Số đỉnh luôn bằng số cạnh</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-indigo-600">
              <span>C. Đồ thị luôn có ít nhất một đỉnh bậc 0</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Một đồ thị liên thông chứa chu trình Euler khi và chỉ khi:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-indigo-600">
              <span>A. Mọi đỉnh của đồ thị đều có bậc chẵn</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-indigo-600">
              <span>B. Đồ thị có đúng 2 đỉnh bậc lẻ</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-indigo-600">
              <span>C. Đồ thị là đồ thị phẳng</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Sự khác biệt bản chất giữa chu trình Euler và chu trình Hamilton là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-indigo-600">
              <span>A. Chu trình Euler đi qua mọi cạnh đúng một lần; Chu trình Hamilton đi qua mọi đỉnh đúng một lần</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-indigo-600">
              <span>B. Chu trình Euler chỉ áp dụng cho đồ thị có hướng</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-indigo-600">
              <span>C. Chu trình Hamilton luôn có ít cạnh hơn chu trình Euler</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Một đồ thị dạng cây có 15 đỉnh thì có chính xác bao nhiêu cạnh?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-indigo-600">
              <span>A. 14 cạnh</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-indigo-600">
              <span>B. 15 cạnh</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-indigo-600">
              <span>C. 16 cạnh</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Trong thuật toán Kruskal tìm cây khung nhỏ nhất (MST), nguyên tắc lựa chọn cạnh là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-indigo-600">
              <span>A. Lần lượt chọn cạnh có trọng số nhỏ nhất trong các cạnh chưa xét sao cho không tạo thành chu trình</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-indigo-600">
              <span>B. Chọn các cạnh có độ dài lớn nhất</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-indigo-600">
              <span>C. Bắt buộc phải đi qua gốc tọa độ</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Theo tiêu chuẩn vẽ kỹ thuật Việt Nam (TCVN), vị trí của Hình chiếu bằng được bố trí ở đâu?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-indigo-600">
              <span>A. Nằm ngay phía dưới hình chiếu đứng</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-indigo-600">
              <span>B. Nằm ngay phía trên hình chiếu đứng</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-indigo-600">
              <span>C. Nằm ở bên phải hình chiếu đứng</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Trong hình chiếu trục đo vuông góc đều, góc giữa ba trục đo O'x', O'y', O'z' bằng bao nhiêu?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-indigo-600">
              <span>A. Mỗi góc đều bằng $120^\\circ$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-indigo-600">
              <span>B. Mỗi góc đều bằng $90^\\circ$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-indigo-600">
              <span>C. Một góc $90^\\circ$ và hai góc $135^\\circ$</span>
            </label>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 transition">
            Đóng
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white">
          Kết quả của bạn: 0/10 điểm
        </h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          Đang tải đánh giá năng lực...
        </p>
        <button onclick="resetCourseExam()" class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition">
          <i class="fa-solid fa-rotate-right mr-1"></i> Làm lại bài thi
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2 font-bold text-gray-700 dark:text-gray-300 text-sm">
        <i class="fa-solid fa-project-diagram text-indigo-600"></i>
        <span>CodeHub &mdash; Nền tảng học tập Toán học & Khoa học máy tính</span>
      </div>
      <p>Chuyên đề học tập Toán 11 &mdash; Bộ sách Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
      <p class="text-[11px] text-gray-400">&copy; 2026 CodeHub Learning Platform. All rights reserved.</p>
    </div>
  </footer>

  <!-- Client-side Scripts -->
  <script>
    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    themeToggleBtn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // Mobile Drawer
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    mobileMenuBtn?.addEventListener('click', () => mobileDrawer?.classList.remove('hidden'));
    closeDrawerBtn?.addEventListener('click', () => mobileDrawer?.classList.add('hidden'));
    mobileDrawer?.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) mobileDrawer.classList.add('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => mobileDrawer?.classList.add('hidden'));
    });

    // Reading Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = scrolled + '%';
    });

    // Search lessons in sidebar
    const searchInput = document.getElementById('lessonSearch');
    searchInput?.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const links = document.querySelectorAll('.sidebar-link');
      links.forEach(link => {
        const title = link.getAttribute('data-title') || '';
        if (title.includes(query)) {
          link.parentElement.style.display = '';
        } else {
          link.parentElement.style.display = 'none';
        }
      });
    });

    // Single Quiz Evaluation
    function checkSingleQuiz(btn, isCorrect) {
      const container = btn.closest('.quiz-item');
      if (!container) return;

      const buttons = container.querySelectorAll('.quiz-btn');
      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-indigo-50', 'dark:hover:bg-indigo-950/40');
      });

      const feedback = container.querySelector('.quiz-feedback');
      const explain = container.querySelector('.quiz-explain');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200');
        if (feedback) {
          feedback.innerHTML = '<span class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check"></i> Chính xác!</span> Bạn đã chọn đáp án đúng.';
          feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs sm:text-sm leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800';
          feedback.classList.remove('hidden');
        }
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
        if (feedback) {
          feedback.innerHTML = '<span class="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-xmark"></i> Chưa chính xác.</span> Hãy xem phần giải thích bên dưới để nắm vững phương pháp giải nhé!';
          feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs sm:text-sm leading-relaxed bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800';
          feedback.classList.remove('hidden');
        }
      }

      if (explain) {
        explain.classList.remove('hidden');
      }

      if (typeof renderMathInElement === 'function') {
        renderMathInElement(container, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    // Initialize KaTeX on page load
    document.addEventListener('DOMContentLoaded', function() {
      renderAllMath();
    });

    function renderAllMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    // Modal Course Quiz
    function openCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) modal.classList.remove('hidden');
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(modal, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
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
        comment = 'Xuất sắc! Bạn nắm rất vững kiến thức và kỹ năng giải toán Chuyên đề Toán 11!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các phép biến hình, lý thuyết đồ thị và vẽ kỹ thuật.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy luyện tập thêm các bài toán ứng dụng thực tế để nâng cao phản xạ nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc lại hướng dẫn từng bài học và rèn luyện thêm nhé!';
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

console.log('Generating full page structure for Chuyên Đề Toán 11...');
const htmlContent = generateChuyenDeToan11Html();
const targetPath = path.join(__dirname, 'courses', 'chuyende_toan_11.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build chuyende_toan_11.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
