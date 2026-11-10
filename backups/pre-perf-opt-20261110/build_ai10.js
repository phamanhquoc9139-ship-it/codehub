const fs = require('fs');
const path = require('path');
const lessons = require('./make_ai10_data.js');

console.log('Total lessons loaded for Trí Tuệ Nhân Tạo 10 (12 Tiết):', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chủ đề 1",
    title: "Chủ đề 1: Nhập môn AI & Tư duy lấy con người làm trung tâm (Tiết 1 - 3)",
    desc: "Khám phá bản chất của Trí tuệ nhân tạo: AI là gì? Lịch sử phát triển và phân loại Narrow AI vs General AI; Cách AI học từ dữ liệu (Học có giám sát, không giám sát, học tăng cường); Đạo đức AI, phòng ngừa cạm bẫy Deepfake và 5 nguyên tắc trách nhiệm số trong học đường.",
    icon: "fa-brain",
    gradient: "from-cyan-700 via-blue-800 to-slate-900",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300",
    lessonNums: [1, 2, 3]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chủ đề 2",
    title: "Chủ đề 2: Các kỹ thuật & Lĩnh vực cốt lõi của AI (Tiết 4 - 6)",
    desc: "Tìm hiểu các nhánh công nghệ tiên phong: Thị giác máy tính (Computer Vision) - cách máy tính nhìn và phát hiện vật thể; Xử lý ngôn ngữ tự nhiên (NLP) - cách máy tính đọc hiểu ngữ nghĩa con người; AI tạo sinh (Generative AI) & Mô hình ngôn ngữ lớn (LLM như ChatGPT, Gemini) và hiện tượng ảo giác AI.",
    icon: "fa-microchip",
    gradient: "from-blue-700 via-indigo-800 to-slate-900",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
    lessonNums: [4, 5, 6]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chủ đề 3",
    title: "Chủ đề 3: Kỹ nghệ nhắc lệnh & Huấn luyện AI No-Code (Tiết 7 - 9)",
    desc: "Nâng cao năng lực thực hành công nghệ: Kỹ nghệ nhắc lệnh (Prompt Engineering) với cấu trúc R-T-C-F và chuỗi tư duy CoT; Tự tay huấn luyện mô hình thị giác nhận diện hình ảnh trên Google Teachable Machine; Huấn luyện mô hình âm thanh và tư thế cơ thể PoseNet cảnh báo gù lưng.",
    icon: "fa-laptop-code",
    gradient: "from-teal-700 via-cyan-800 to-slate-900",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300",
    lessonNums: [7, 8, 9]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Chủ đề 4",
    title: "Chủ đề 4: Thiết kế hệ thống AI, Nghề nghiệp tương lai & Dự án số (Tiết 10 - 12)",
    desc: "Vận dụng và định hướng tương lai: Quy trình thiết kế giải pháp AI lấy con người làm trung tâm (Problem Framing); Bức tranh việc làm và 4 kỹ năng vàng không thể bị AI thay thế; Dự án Capstone: Xây dựng giải pháp AI vì cộng đồng (AI for Social Good) và đánh giá Rubrics chuẩn Bộ GD&ĐT.",
    icon: "fa-rocket",
    gradient: "from-indigo-700 via-purple-900 to-slate-900",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
    lessonNums: [10, 11, 12]
  }
];

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderLessonArticle(lesson) {
  const objectivesHtml = lesson.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-check text-cyan-500 mt-1 shrink-0"></i>
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
                class="quiz-btn text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition duration-150 flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[optIdx]}</span>
          <span class="mt-0.5">${escapeHtml(opt)}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm" data-answered="false">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 font-bold text-xs shrink-0 mt-0.5">Câu ${idx + 1}</span>
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
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-cyan-50/70 to-blue-50/40 dark:from-gray-800 dark:to-gray-800/60">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-cyan-600 text-white font-bold text-xs">
              Tiết ${lesson.lessonNum}
            </span>
            <span class="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/70 text-cyan-800 dark:text-cyan-300 text-xs font-semibold">
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
        <p class="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <!-- Lesson Body -->
      <div class="p-6 sm:p-8 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <!-- Section 1: Objectives -->
        <div class="p-5 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/40">
          <h4 class="text-sm font-bold text-cyan-900 dark:text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-cyan-600"></i> Mục tiêu cần đạt
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            ${objectivesHtml}
          </ul>
        </div>

        <!-- Section 2: Summary / Theory -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-book-open text-cyan-600"></i> 1. Kiến thức cốt lõi & Tư duy công nghệ
          </h4>
          ${lesson.summary}
        </div>

        <!-- Section 3: Practical Steps -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-laptop-code text-cyan-600"></i> 2. Hướng dẫn trải nghiệm & Thực hành từng bước
          </h4>
          <div class="space-y-4">
            ${lesson.steps.map((st, sidx) => `
              <div class="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-cyan-500 flex flex-col gap-1.5">
                <span class="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide">
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
            <i class="fa-solid fa-lightbulb text-amber-600"></i> 3. Thử thách tư duy / Vận dụng thực tế
          </h4>
          <p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            ${escapeHtml(lesson.practice)}
          </p>
        </div>

        <!-- Section 5: Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-cyan-600"></i> 4. Câu hỏi củng cố & Luyện tập nhanh
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

function generateAi10Html() {
  const sidebarNavHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const listItems = topicLessons.map(l => `
      <li>
        <a href="#${l.id}" 
           data-title="${escapeHtml(l.title.toLowerCase())}"
           class="sidebar-link group flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg text-xs text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition">
          <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-cyan-500 mt-1.5 shrink-0 transition"></span>
          <span class="line-clamp-2 leading-snug">Tiết ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="topic-group mb-5">
        <a href="#${topic.id}" class="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 mb-2 px-2.5">
          <span class="flex items-center gap-2">
            <i class="fa-solid ${topic.icon} text-cyan-600"></i>
            <span>${topic.shortTitle}</span>
          </span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 font-semibold">${topicLessons.length} tiết</span>
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
        <a href="#${l.id}" class="mobile-nav-link block py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400">
          Tiết ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-4">
        <div class="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid ${topic.icon} text-cyan-600"></i>
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
              <span>${topicLessons.length} tiết học</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
              ${topic.title}
            </h2>
            <p class="text-sm sm:text-base text-cyan-100 max-w-3xl leading-relaxed">
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
  <title>Trí Tuệ Nhân Tạo (AI) 10 - Khung 12 Tiết Chuẩn Bộ GD&ĐT | CodeHub</title>
  <meta name="description" content="Chương trình học Trí tuệ nhân tạo (AI) Lớp 10 gồm 12 tiết chuẩn hóa theo Quyết định 2422/QĐ-BGDĐT: Tư duy lấy con người làm trung tâm, Đạo đức số, Machine Learning, Computer Vision, NLP, Generative AI, Prompt Engineering và Teachable Machine.">
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
              50: '#ecfeff',
              100: '#cffafe',
              200: '#a5f3fc',
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
              600: '#0891b2',
              700: '#0e7490',
              800: '#155e75',
              900: '#164e63',
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
      background: rgba(8, 145, 178, 0.3);
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(8, 145, 178, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 z-50 transition-all duration-150" style="width: 0%;"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 text-gray-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm font-medium transition" title="Trở về trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <span class="text-gray-300 dark:text-gray-700">|</span>
        <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
          <span class="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center text-sm shadow-sm">
            <i class="fa-solid fa-brain"></i>
          </span>
          <span class="text-base sm:text-lg tracking-tight">Code<span class="text-cyan-600">Hub</span></span>
        </div>
        <span class="hidden md:inline px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950/70 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
          Trí Tuệ Nhân Tạo (AI) 10 — Khung 12 Tiết (QĐ 2422/BGDĐT)
        </span>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Exam modal launch button -->
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition">
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
          <i class="fa-solid fa-list-ul text-cyan-600"></i> Danh mục 12 tiết học
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
  <div class="bg-gradient-to-br from-cyan-950 via-slate-950 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-cyan-900/40">
    <div class="max-w-7xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4 border border-cyan-500/30">
        <i class="fa-solid fa-circle-check text-cyan-400"></i>
        <span>Chuẩn Quyết định số 2422/QĐ-BGDĐT &mdash; Khung giáo dục Trí tuệ nhân tạo cấp THPT</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
        Trí Tuệ Nhân Tạo (AI) 10 &mdash; Khung 12 Tiết Học Cốt Lõi
      </h1>
      <p class="text-base sm:text-lg text-cyan-200/90 max-w-3xl leading-relaxed mb-6">
        Khóa học trang bị toàn diện 4 miền năng lực AI của Bộ Giáo dục & Đào tạo: <strong>Tư duy lấy con người làm trung tâm</strong>, <strong>Đạo đức & Trách nhiệm số</strong>, <strong>Kỹ thuật cốt lõi (Machine Learning, Thị giác máy tính, NLP, Generative AI & Prompt Engineering)</strong> và <strong>Dự án thiết kế AI vì cộng đồng (AI for Social Good)</strong>.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-cyan-900/30 border border-cyan-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-book-open text-cyan-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">12 Tiết học</div>
            <div class="text-[11px] text-cyan-300">Chuẩn Bộ GD&ĐT</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-cyan-900/30 border border-cyan-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-circle-question text-cyan-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">48 Trắc nghiệm</div>
            <div class="text-[11px] text-cyan-300">Chấm điểm tức thì</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-cyan-900/30 border border-cyan-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-network-wired text-cyan-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">4 Miền năng lực</div>
            <div class="text-[11px] text-cyan-300">Đạo đức, Kỹ thuật, Design</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-cyan-900/30 border border-cyan-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-hands-holding-circle text-cyan-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">1 Capstone Project</div>
            <div class="text-[11px] text-cyan-300">AI for Social Good</div>
          </div>
        </div>
      </div>

      <!-- Quick Topic Pills -->
      <div class="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-cyan-900/50 text-xs">
        <span class="text-cyan-300 font-semibold">Chuyển nhanh đến:</span>
        <a href="#chude-1" class="px-3 py-1 rounded-lg bg-cyan-900/50 hover:bg-cyan-800/60 text-cyan-200 border border-cyan-700/50 transition">
          <i class="fa-solid fa-brain mr-1"></i> CĐ1: Nhập môn & Đạo đức (Tiết 1-3)
        </a>
        <a href="#chude-2" class="px-3 py-1 rounded-lg bg-cyan-900/50 hover:bg-cyan-800/60 text-cyan-200 border border-cyan-700/50 transition">
          <i class="fa-solid fa-microchip mr-1"></i> CĐ2: Vision, NLP & GenAI (Tiết 4-6)
        </a>
        <a href="#chude-3" class="px-3 py-1 rounded-lg bg-cyan-900/50 hover:bg-cyan-800/60 text-cyan-200 border border-cyan-700/50 transition">
          <i class="fa-solid fa-laptop-code mr-1"></i> CĐ3: Prompt & Teachable (Tiết 7-9)
        </a>
        <a href="#chude-4" class="px-3 py-1 rounded-lg bg-cyan-900/50 hover:bg-cyan-800/60 text-cyan-200 border border-cyan-700/50 transition">
          <i class="fa-solid fa-rocket mr-1"></i> CĐ4: Tương lai & Capstone (Tiết 10-12)
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
                   placeholder="Tìm kiếm tiết học..." 
                   class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 px-2.5 flex items-center justify-between">
            <span>Khung 12 tiết học</span>
            <span>12 tiết</span>
          </h3>
          <nav id="sidebarNav" class="space-y-4">
            ${sidebarNavHtml}
          </nav>
        </div>

        <!-- Course Quiz Action Card -->
        <div class="mt-4 p-4 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 text-white shadow-md">
          <div class="flex items-center gap-2 mb-2 font-bold text-sm">
            <i class="fa-solid fa-medal"></i>
            <span>Đánh giá năng lực AI 10</span>
          </div>
          <p class="text-xs text-cyan-100 mb-3 leading-relaxed">
            10 câu hỏi tổng hợp bao quát 4 miền năng lực AI theo chuẩn Bộ GD&ĐT.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-white text-cyan-700 hover:bg-cyan-50 text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5">
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
          <span class="px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 font-bold text-xs">
            Bài kiểm tra tổng hợp
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Trí Tuệ Nhân Tạo (AI) Lớp 10
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
            1. Toàn bộ các hệ thống AI đang hiện hữu và hoạt động trong thực tế hiện nay (FaceID, ChatGPT, xe tự lái) đều thuộc phân loại nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-cyan-600">
              <span>A. AI hẹp / AI chuyên biệt (Narrow AI)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-cyan-600">
              <span>B. AI tổng quát có nhận thức hoàn toàn (AGI)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-cyan-600">
              <span>C. Siêu trí tuệ nhân tạo (Super AI)</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Điểm khác biệt mấu chốt giữa Học máy (Machine Learning) và Lập trình truyền thống là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-cyan-600">
              <span>A. Học máy cho phép thuật toán tự tìm ra các quy luật từ dữ liệu mẫu thay vì con người phải lập trình từng quy tắc tĩnh IF/ELSE</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-cyan-600">
              <span>B. Học máy không sử dụng máy tính</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-cyan-600">
              <span>C. Lập trình truyền thống luôn chính xác hơn học máy</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Công nghệ AI dùng mạng học sâu để làm giả video, hình ảnh và giọng nói của người thật với độ tinh vi khó phân biệt được gọi là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-cyan-600">
              <span>A. Deepfake</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-cyan-600">
              <span>B. Bluetooth</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-cyan-600">
              <span>C. Firewall</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Dưới góc nhìn xử lý của máy tính, một bức ảnh kỹ thuật số thực chất được lưu trữ dưới dạng cấu trúc dữ liệu nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-cyan-600">
              <span>A. Một ma trận lưới các con số biểu thị cường độ sáng của từng điểm ảnh (Pixels) theo các kênh màu RGB</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-cyan-600">
              <span>B. Một tệp văn bản bài thơ chữ viết</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-cyan-600">
              <span>C. Một đoạn sóng radio FM</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Lĩnh vực nào của AI chuyên nghiên cứu cách giúp máy tính hiểu, dịch thuật và giao tiếp bằng ngôn ngữ tự nhiên của con người?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-cyan-600">
              <span>A. Xử lý ngôn ngữ tự nhiên (NLP)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-cyan-600">
              <span>B. Thị giác máy tính (Computer Vision)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-cyan-600">
              <span>C. Viễn thông vệ tinh</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Hiện tượng 'Ảo giác AI' (Hallucination) trong các Mô hình ngôn ngữ lớn (LLM như ChatGPT) là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-cyan-600">
              <span>A. Mô hình tự tin bịa đặt ra những thông tin hoàn toàn sai sự thật nhưng diễn đạt trôi chảy, thuyết phục</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-cyan-600">
              <span>B. Máy tính bị chập điện phát ra tiếng nổ</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-cyan-600">
              <span>C. Máy tính tự động tắt màn hình khi người dùng nhìn vào</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Trong kỹ thuật Kỹ nghệ nhắc lệnh (Prompt Engineering), công thức chuẩn R-T-C-F gồm 4 thành phần nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-cyan-600">
              <span>A. Role (Vai trò) - Task (Nhiệm vụ) - Context (Ngữ cảnh) - Format (Định dạng kết quả)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-cyan-600">
              <span>B. Read - Type - Copy - Format</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-cyan-600">
              <span>C. Run - Test - Check - Finish</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Công cụ trực quan nổi tiếng của Google giúp học sinh tự tay huấn luyện các mô hình Machine Learning mà không cần viết mã (No-Code) là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-cyan-600">
              <span>A. Google Teachable Machine</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-cyan-600">
              <span>B. Google Translate</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-cyan-600">
              <span>C. Google Earth</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Mô hình ước lượng tư thế cơ thể PoseNet hoạt động dựa trên nguyên tắc trích xuất dữ liệu nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-cyan-600">
              <span>A. Xác định tọa độ vị trí của các điểm mốc khớp xương chính trên cơ thể người</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-cyan-600">
              <span>B. Quét mã vạch trên quần áo</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-cyan-600">
              <span>C. Đo chiều dài chiếc bàn học</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Khái niệm 'Tư duy lấy con người làm trung tâm' (Human-Centered AI) được Bộ GD&ĐT nhấn mạnh nhằm khẳng định điều gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-cyan-600">
              <span>A. AI được tạo ra để phục vụ, hỗ trợ con người và con người luôn giữ quyền quyết định, kiểm soát tối thượng</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-cyan-600">
              <span>B. Con người phải hoàn toàn nghe theo mọi chỉ thị của robot</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-cyan-600">
              <span>C. Học sinh không cần tư duy học tập nữa vì đã có AI làm thay</span>
            </label>
          </div>
        </div>

        <div class="pt-4 flex items-center justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Đóng lại
          </button>
          <button type="submit" class="px-6 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden p-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-cyan-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white"></h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto"></p>
        <button onclick="resetCourseExam()" class="mt-4 px-6 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold transition">
          Làm lại bài kiểm tra
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">
        CodeHub &bull; Trí Tuệ Nhân Tạo (AI) 10 &mdash; Khung Giáo Dục AI Cốt Lõi 12 Tiết
      </p>
      <p>
        Bản quyền nội dung &copy; 2026. Xây dựng bám sát Quyết định số 2422/QĐ-BGDĐT của Bộ Giáo dục và Đào tạo.
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
        comment = 'Xuất sắc! Bạn nắm rất vững nền tảng tư duy và kỹ năng Trí tuệ nhân tạo (AI) Lớp 10!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các khái niệm Machine Learning, Prompt Engineering và Đạo đức AI.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy thực hành thêm với Teachable Machine và trải nghiệm các công cụ GenAI nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc lại nội dung các tiết học và làm lại bài kiểm tra nhé!';
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

console.log('Generating updated full page structure for AI 10...');
const htmlContent = generateAi10Html();
const targetPath = path.join(__dirname, 'courses', 'ai_10.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build ai_10.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
