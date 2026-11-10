const fs = require('fs');
const path = require('path');
const lessons = require('./make_chuyende_toan12_data.js');

console.log('Total lessons loaded for Chuyên Đề Toán 12:', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chuyên đề 1",
    title: "Chuyên đề 1: Ứng dụng toán học giải quyết bài toán tối ưu",
    desc: "Quy hoạch tuyến tính hai ẩn và phương pháp đỉnh đa giác lồi; Vận dụng đạo hàm tối ưu hóa lợi nhuận, chi phí biên và doanh thu biên trong kinh tế; Tối ưu hóa kích thước bao bì hình học không gian (vỏ lon, hộp tôn thể tích cực đại) và nguyên lý Fermat.",
    icon: "fa-chart-pie",
    gradient: "from-teal-800 via-teal-900 to-slate-900",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300",
    lessonNums: [1, 2, 3]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chuyên đề 2",
    title: "Chuyên đề 2: Ứng dụng toán học trong tài chính",
    desc: "Lãi suất đơn, lãi kép, quy tắc 72 và giá trị thời gian của tiền (TVM); Niên kim tích lũy định kỳ (Annuity); Bài toán vay vốn trả góp niên kim và bảng phân bổ nợ vay; Thẩm định dự án đầu tư tài chính với chỉ số NPV và tỷ suất hoàn vốn nội bộ IRR.",
    icon: "fa-hand-holding-dollar",
    gradient: "from-emerald-800 via-teal-900 to-slate-900",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
    lessonNums: [4, 5, 6, 7]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chuyên đề 3",
    title: "Chuyên đề 3: Biến ngẫu nhiên rời rạc & Phân bố xác suất",
    desc: "Biến ngẫu nhiên rời rạc và bảng phân bố xác suất; Các số đặc trưng: Kỳ vọng toán học E(X), Phương sai V(X) và Độ lệch chuẩn; Dãy phép thử Bernoulli và phân bố nhị thức; Ứng dụng định phí bảo hiểm thuần, luật số lớn và quản trị rủi ro.",
    icon: "fa-dice",
    gradient: "from-cyan-800 via-teal-900 to-slate-900",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300",
    lessonNums: [8, 9, 10, 11]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Dự án tổng hợp",
    title: "Chuyên đề 4: Dự án Capstone Mô hình hóa toán học",
    desc: "Mô hình hóa tài chính định lượng tích hợp: Tối ưu hóa phân bổ danh mục đầu tư 2 tài sản cân bằng lợi nhuận kỳ vọng và rủi ro phương sai (Mô hình Markowitz đơn giản hóa) kết hợp thẩm định dòng tiền khởi nghiệp Startup.",
    icon: "fa-briefcase",
    gradient: "from-teal-800 via-emerald-900 to-slate-900",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300",
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
      <i class="fa-solid fa-check text-teal-500 mt-1 shrink-0"></i>
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
                class="quiz-btn text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition duration-150 flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[optIdx]}</span>
          <span class="mt-0.5">${opt}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm" data-answered="false">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold text-xs shrink-0 mt-0.5">Câu ${idx + 1}</span>
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
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-teal-50/70 to-emerald-50/40 dark:from-gray-800 dark:to-gray-800/60">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-teal-600 text-white font-bold text-xs">
              Bài ${lesson.lessonNum}
            </span>
            <span class="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 text-xs font-semibold">
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
        <p class="text-xs text-teal-600 dark:text-teal-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <!-- Lesson Body -->
      <div class="p-6 sm:p-8 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <!-- Section 1: Objectives -->
        <div class="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40">
          <h4 class="text-sm font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-teal-600"></i> Mục tiêu cần đạt
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            ${objectivesHtml}
          </ul>
        </div>

        <!-- Section 2: Summary / Theory -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-book-open text-teal-600"></i> 1. Kiến thức trọng tâm & Định lý toán học
          </h4>
          ${lesson.summary}
        </div>

        <!-- Section 3: Practical Steps -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-square-root-variable text-teal-600"></i> 2. Phương pháp giải toán từng bước chi tiết
          </h4>
          <div class="space-y-4">
            ${lesson.steps.map((st, sidx) => `
              <div class="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-teal-500 flex flex-col gap-1.5">
                <span class="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wide">
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
        <div class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
          <h4 class="text-sm font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-pen-ruler text-emerald-600"></i> 3. Bài tập tự luyện & Vận dụng thực tế
          </h4>
          <div class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            ${lesson.practice.replace(/\n/g, '<br>')}
          </div>
        </div>

        <!-- Section 5: Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-teal-600"></i> 4. Câu hỏi củng cố & Luyện tập nhanh
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

function generateChuyenDeToan12Html() {
  const sidebarNavHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const listItems = topicLessons.map(l => `
      <li>
        <a href="#${l.id}" 
           data-title="${escapeHtml(l.title.toLowerCase())}"
           class="sidebar-link group flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg text-xs text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition">
          <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-teal-500 mt-1.5 shrink-0 transition"></span>
          <span class="line-clamp-2 leading-snug">Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="topic-group mb-5">
        <a href="#${topic.id}" class="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 mb-2 px-2.5">
          <span class="flex items-center gap-2">
            <i class="fa-solid ${topic.icon} text-teal-600"></i>
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
        <a href="#${l.id}" class="mobile-nav-link block py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
          Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-4">
        <div class="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid ${topic.icon} text-teal-600"></i>
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
            <p class="text-sm sm:text-base text-teal-100 max-w-3xl leading-relaxed">
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
  <title>Chuyên Đề Học Tập Toán 12 (KNTT) - Chuẩn GDPT 2018 | CodeHub</title>
  <meta name="description" content="Chuyên đề học tập Toán 12 theo SGK Kết nối tri thức: Bài toán tối ưu hóa, Quy hoạch tuyến tính, Toán tài chính (Lãi kép, Niên kim, Vay trả góp, NPV/IRR) và Biến ngẫu nhiên rời rạc.">
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
              50: '#f0fdfa',
              100: '#ccfbf1',
              200: '#99f6e4',
              300: '#5eead4',
              400: '#2dd4bf',
              500: '#14b8a6',
              600: '#0d9488',
              700: '#0f766e',
              800: '#115e59',
              900: '#134e4a',
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
      background: rgba(13, 148, 136, 0.3);
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(13, 148, 136, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 z-50 transition-all duration-150" style="width: 0%;"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 text-sm font-medium transition" title="Trở về trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <span class="text-gray-300 dark:text-gray-700">|</span>
        <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
          <span class="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center text-sm shadow-sm">
            <i class="fa-solid fa-chart-line"></i>
          </span>
          <span class="text-base sm:text-lg tracking-tight">Code<span class="text-teal-600">Hub</span></span>
        </div>
        <span class="hidden md:inline px-2.5 py-0.5 text-xs font-semibold rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950/70 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
          Chuyên Đề Học Tập Toán 12 (KNTT)
        </span>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Exam modal launch button -->
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition">
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
          <i class="fa-solid fa-list-ul text-teal-600"></i> Mục lục bài học
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
  <div class="bg-gradient-to-br from-teal-950 via-slate-950 to-emerald-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-teal-900/40">
    <div class="max-w-7xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-4 border border-teal-500/30">
        <i class="fa-solid fa-circle-check text-teal-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 &mdash; Sách Chuyên đề học tập Toán 12 KNTT</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
        Chuyên Đề Học Tập Toán 12
      </h1>
      <p class="text-base sm:text-lg text-teal-200/90 max-w-3xl leading-relaxed mb-6">
        Toán học ứng dụng & Tài chính định lượng hiện đại: <strong>Bài toán tối ưu hóa & Quy hoạch tuyến tính</strong> (Phương pháp hình học, đạo hàm kinh tế biên), <strong>Toán tài chính</strong> (Lãi kép, Niên kim, Vay trả góp, NPV và IRR), <strong>Biến ngẫu nhiên rời rạc & Phân bố nhị thức</strong> (Kỳ vọng, phương sai, quản trị rủi ro) và <strong>Dự án Capstone danh mục đầu tư</strong>.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-teal-900/30 border border-teal-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-book text-teal-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">12 Bài học</div>
            <div class="text-[11px] text-teal-300">Chuẩn SGK Chuyên đề</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-teal-900/30 border border-teal-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-circle-question text-teal-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">48 Trắc nghiệm</div>
            <div class="text-[11px] text-teal-300">Lời giải chi tiết</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-teal-900/30 border border-teal-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-scale-balanced text-teal-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">Toán Tài Chính</div>
            <div class="text-[11px] text-teal-300">NPV, IRR, Niên kim</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-teal-900/30 border border-teal-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-briefcase text-teal-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">1 Capstone Project</div>
            <div class="text-[11px] text-teal-300">Danh mục đầu tư & Rủi ro</div>
          </div>
        </div>
      </div>

      <!-- Quick Topic Pills -->
      <div class="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-teal-900/50 text-xs">
        <span class="text-teal-300 font-semibold">Chuyển nhanh đến:</span>
        <a href="#chude-1" class="px-3 py-1 rounded-lg bg-teal-900/50 hover:bg-teal-800/60 text-teal-200 border border-teal-700/50 transition">
          <i class="fa-solid fa-chart-pie mr-1"></i> CĐ1: Tối ưu hóa (Bài 1-3)
        </a>
        <a href="#chude-2" class="px-3 py-1 rounded-lg bg-teal-900/50 hover:bg-teal-800/60 text-teal-200 border border-teal-700/50 transition">
          <i class="fa-solid fa-hand-holding-dollar mr-1"></i> CĐ2: Toán tài chính (Bài 4-7)
        </a>
        <a href="#chude-3" class="px-3 py-1 rounded-lg bg-teal-900/50 hover:bg-teal-800/60 text-teal-200 border border-teal-700/50 transition">
          <i class="fa-solid fa-dice mr-1"></i> CĐ3: Biến ngẫu nhiên (Bài 8-11)
        </a>
        <a href="#chude-4" class="px-3 py-1 rounded-lg bg-teal-900/50 hover:bg-teal-800/60 text-teal-200 border border-teal-700/50 transition">
          <i class="fa-solid fa-briefcase mr-1"></i> CĐ4: Dự án Capstone (Bài 12)
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
                   class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
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
        <div class="mt-4 p-4 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white shadow-md">
          <div class="flex items-center gap-2 mb-2 font-bold text-sm">
            <i class="fa-solid fa-medal"></i>
            <span>Đánh giá toàn khóa</span>
          </div>
          <p class="text-xs text-teal-100 mb-3 leading-relaxed">
            10 câu hỏi tổng hợp kiến thức cả 3 chuyên đề Toán 12 KNTT.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-white text-teal-700 hover:bg-teal-50 text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5">
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
          <span class="px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 font-bold text-xs">
            Bài kiểm tra tổng hợp
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Chuyên Đề Học Tập Toán 12
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
            1. Trong bài toán quy hoạch tuyến tính hai ẩn, nếu miền chấp nhận được là một đa giác lồi đóng, thì giá trị lớn nhất của hàm mục tiêu tuyến tính F(x, y) luôn đạt được tại:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-teal-600">
              <span>A. Ít nhất một trong các đỉnh của đa giác</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-teal-600">
              <span>B. Trọng tâm của đa giác</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-teal-600">
              <span>C. Điểm bất kì trên trục tung</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Trong kinh tế học vi mô, hàm lợi nhuận $P(x) = R(x) - C(x)$ của doanh nghiệp đạt giá trị cực đại khi thỏa mãn điều kiện nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-teal-600">
              <span>A. Doanh thu biên bằng Chi phí biên ($R'(x) = C'(x)$)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-teal-600">
              <span>B. Doanh thu biên bằng 0</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-teal-600">
              <span>C. Chi phí biên bằng 0</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Để một lon nước ngọt hình trụ kín có thể tích cố định $V_0$ có diện tích toàn phần nhỏ nhất (tiết kiệm vật liệu vỏ lon nhất) thì kích thước chiều cao h và bán kính r thỏa mãn:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-teal-600">
              <span>A. $h = 2r$ (chiều cao bằng đường kính đáy)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-teal-600">
              <span>B. $h = r$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-teal-600">
              <span>C. $h = 4r$</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Theo Quy tắc 72 trong tài chính, với mức lãi suất kép 8%/năm, sau khoảng bao nhiêu năm thì số tiền tiết kiệm ban đầu sẽ tăng gấp đôi?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-teal-600">
              <span>A. Khoảng 9 năm</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-teal-600">
              <span>B. Khoảng 12 năm</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-teal-600">
              <span>C. Khoảng 6 năm</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Công thức tính giá trị tương lai FV của một chuỗi niên kim gửi cố định A đồng vào cuối mỗi kỳ trong n kỳ với lãi suất r là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-teal-600">
              <span>A. $FV = A \\cdot \\frac{(1 + r)^n - 1}{r}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-teal-600">
              <span>B. $FV = A \\cdot (1 + r)^n$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-teal-600">
              <span>C. $FV = A \\cdot \\frac{1 - (1 + r)^{-n}}{r}$</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Trong phương thức vay vốn trả góp niên kim cố định hàng tháng theo dư nợ giảm dần, diễn biến của tiền lãi và tiền gốc trả hàng tháng là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-teal-600">
              <span>A. Tiền lãi giảm dần, tiền trả nợ gốc tăng dần</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-teal-600">
              <span>B. Tiền lãi tăng dần, tiền trả nợ gốc giảm dần</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-teal-600">
              <span>C. Cả tiền lãi và gốc đều không đổi</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Một dự án đầu tư được đánh giá là sinh lời hiệu quả và chấp nhận đầu tư khi thỏa mãn tiêu chí tài chính nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-teal-600">
              <span>A. Giá trị hiện tại ròng $NPV > 0$ và $IRR > \\text{Chi phí sử dụng vốn}$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-teal-600">
              <span>B. $NPV < 0$ và $IRR > 0$</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-teal-600">
              <span>C. $NPV = 0$ và $IRR = 0$</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Biến ngẫu nhiên X có kỳ vọng $E(X) = 6$ và phương sai $V(X) = 4$. Độ lệch chuẩn $\\sigma(X)$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-teal-600">
              <span>A. 2</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-teal-600">
              <span>B. 16</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-teal-600">
              <span>C. 4</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Biến ngẫu nhiên X tuân theo phân bố nhị thức $\\mathcal{B}(50; 0.4)$. Kỳ vọng toán học $E(X)$ bằng:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-teal-600">
              <span>A. 20</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-teal-600">
              <span>B. 30</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-teal-600">
              <span>C. 12</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Nguyên lý toán học quan trọng nhất giúp các công ty bảo hiểm kiểm soát rủi ro chi trả khi số lượng hợp đồng tham gia đủ lớn là:
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-teal-600">
              <span>A. Luật số lớn (Law of Large Numbers)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-teal-600">
              <span>B. Bổ đề bắt tay</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-teal-600">
              <span>C. Quy tắc 72</span>
            </label>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 transition">
            Đóng
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white">
          Kết quả của bạn: 0/10 điểm
        </h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          Đang tải đánh giá năng lực...
        </p>
        <button onclick="resetCourseExam()" class="mt-4 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition">
          <i class="fa-solid fa-rotate-right mr-1"></i> Làm lại bài thi
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2 font-bold text-gray-700 dark:text-gray-300 text-sm">
        <i class="fa-solid fa-chart-line text-teal-600"></i>
        <span>CodeHub &mdash; Nền tảng học tập Toán học & Khoa học máy tính</span>
      </div>
      <p>Chuyên đề học tập Toán 12 &mdash; Bộ sách Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
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
        b.classList.remove('hover:bg-teal-50', 'dark:hover:bg-teal-950/40');
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
        comment = 'Xuất sắc! Bạn nắm rất vững các kỹ năng quy hoạch tuyến tính, toán tài chính và biến ngẫu nhiên!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các bài toán tối ưu hóa lợi nhuận, niên kim và quản trị rủi ro.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy thực hành thêm các bài tập tính NPV/IRR và phân bố nhị thức nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc lại lý thuyết từng bài học và rèn luyện thêm bài tập nhé!';
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

console.log('Generating full page structure for Chuyên Đề Toán 12...');
const htmlContent = generateChuyenDeToan12Html();
const targetPath = path.join(__dirname, 'courses', 'chuyende_toan_12.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build chuyende_toan_12.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
