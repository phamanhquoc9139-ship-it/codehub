const fs = require('fs');
const path = require('path');
const lessons = require('./make_chuyende_tin10_data.js');

console.log('Total lessons loaded for Chuyên đề Tin học 10 ICT:', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chuyên đề 1",
    title: "Chuyên đề 1: Thực hành làm việc với các tệp văn bản (MS Word nâng cao)",
    desc: "Lập dàn ý và phân cấp đề mục với Styles, Headings, Multilevel List; Xử lý hình ảnh nâng cao và Wrap Text; Thiết kế đồ họa thông tin SmartArt & Shapes; Phân vùng Sections, tạo Mục lục tự động (TOC) và xuất bản tệp PDF chuẩn in ấn.",
    icon: "fa-file-word",
    gradient: "from-blue-700 via-indigo-800 to-slate-900",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
    lessonNums: [1, 2, 3, 4]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chuyên đề 2",
    title: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính (MS Excel nâng cao)",
    desc: "Chuẩn hóa kiểu dữ liệu, Flash Fill (Ctrl + E) và Bảng thông minh (Format as Table); Thiết kế biểu mẫu khách hàng với Data Validation & Hộp kiểm (Check Box); Xây dựng dự toán với hàm IF, AND, OR, SUMIF, COUNTIF; Tra cứu dữ liệu tự động với VLOOKUP & XLOOKUP; Tổng hợp số liệu PivotTable và trực quan hóa biểu đồ phân tích.",
    icon: "fa-file-excel",
    gradient: "from-emerald-700 via-teal-800 to-slate-900",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
    lessonNums: [5, 6, 7, 8, 9]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chuyên đề 3",
    title: "Chuyên đề 3: Thực hành sử dụng phần mềm trình chiếu (MS PowerPoint nâng cao)",
    desc: "Xây dựng ý tưởng, quy tắc 6x6, tỷ lệ phối màu 60-30-10 và chuẩn hóa toàn bộ bài thuyết trình với Slide Master; Ứng dụng truyền thông đa phương tiện, hiệu ứng chuyển trang biến hình Morph đỉnh cao; Thiết kế trò chơi tương tác với Hyperlink & Trigger; Kỹ thuật trình diễn chuyên nghiệp với Presenter View và ghi hình E-learning xuất bản video MP4.",
    icon: "fa-file-powerpoint",
    gradient: "from-orange-700 via-rose-800 to-slate-900",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300",
    lessonNums: [10, 11, 12, 13]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Dự án tổng hợp",
    title: "Dự án học tập: Xây dựng bộ ấn phẩm số & Quản lí chiến dịch sự kiện học đường",
    desc: "Dự án tích hợp liên hoàn 3 phần mềm: Soạn thảo Kế hoạch sự kiện trên Word, Lập bảng dự toán kinh phí & quản trị khách mời trên Excel, Thiết kế bài trình chiếu pitching kêu gọi tài trợ trên PowerPoint; Báo cáo dự án và đánh giá năng lực theo tiêu chuẩn Rubrics.",
    icon: "fa-briefcase",
    gradient: "from-indigo-700 via-purple-900 to-slate-900",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
    lessonNums: [14]
  }
];

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderLessonArticle(lesson) {
  const objectivesHtml = lesson.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-check text-blue-500 mt-1 shrink-0"></i>
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
                class="quiz-btn text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition duration-150 flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[optIdx]}</span>
          <span class="mt-0.5">${escapeHtml(opt)}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm" data-answered="false">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs shrink-0 mt-0.5">Câu ${idx + 1}</span>
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
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 dark:from-gray-800 dark:to-gray-800/60">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs">
              Bài ${lesson.lessonNum}
            </span>
            <span class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs font-semibold">
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
        <p class="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <div class="p-6 sm:p-8 space-y-8">
        <!-- Objectives -->
        <div class="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40">
          <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-bullseye"></i> Mục tiêu bài học cần đạt
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-2">
            ${objectivesHtml}
          </ul>
        </div>

        <!-- Theory Content -->
        <div class="theory-content space-y-6">
          ${lesson.content}
        </div>

        <!-- Practice Section -->
        <div class="practice-box">
          ${lesson.practice}
        </div>

        <!-- Lesson Summary -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <h5 class="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-bookmark text-blue-500"></i> Tóm tắt ghi nhớ cốt lõi
          </h5>
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            ${escapeHtml(lesson.summary)}
          </p>
        </div>

        <!-- Interactive Quizzes -->
        <div id="quiz-${lesson.id}" class="pt-6 border-t border-gray-100 dark:border-gray-700 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-5 bg-blue-600 rounded-full inline-block"></span>
              <span>Luyện tập trắc nghiệm củng cố (4 câu)</span>
            </h4>
            <span class="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full font-medium">Tự động chấm</span>
          </div>
          <div class="space-y-4">
            ${quizzesHtml}
          </div>
        </div>
      </div>
    </article>
  `;
}

function generateChuyenDeTin10Html() {
  // Render topics with topic section banner and lessons under each
  const topicSectionsHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const renderedArticles = topicLessons.map(renderLessonArticle).join('\n');

    return `
      <!-- ================= TOPIC BANNER: ${topic.title} ================= -->
      <section id="${topic.id}" class="scroll-mt-24">
        <div class="bg-gradient-to-r ${topic.gradient} text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl">
            <i class="fa-solid ${topic.icon}"></i>
          </div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold mb-3">
              <i class="fa-solid ${topic.icon}"></i>
              <span>${topic.shortTitle}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">
              ${topic.title}
            </h2>
            <p class="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
              ${topic.desc}
            </p>
          </div>
        </div>
      </section>

      <!-- Lessons of Topic ${topic.num} -->
      <div class="space-y-10">
        ${renderedArticles}
      </div>
    `;
  }).join('\n');

  // Sidebar topics list
  const sidebarTopicsHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const lessonsList = topicLessons.map(l => `
      <li>
        <a href="#${l.id}" 
           class="sidebar-link flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
           data-title="${l.title.toLowerCase()}">
          <span class="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
          <span class="truncate">Bài ${l.lessonNum}: ${l.title.replace(/^Bài \d+:\s*/, '')}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-3 topic-group">
        <a href="#${topic.id}" class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span class="flex items-center gap-1.5 truncate">
            <i class="fa-solid ${topic.icon}"></i>
            <span>${topic.shortTitle}</span>
          </span>
          <span class="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0">${topic.lessonNums.length}</span>
        </a>
        <ul class="mt-1 space-y-0.5 pl-2 border-l-2 border-blue-200 dark:border-blue-900/50">
          ${lessonsList}
        </ul>
      </div>
    `;
  }).join('');

  // Hero topic pills
  const heroTopicPills = TOPICS.map(topic => `
    <a href="#${topic.id}" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
      <i class="fa-solid ${topic.icon}"></i>
      <span>${topic.shortTitle}</span>
    </a>
  `).join('');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chuyên Đề Tin Học 10 - Tin Học Ứng Dụng | Kết Nối Tri Thức</title>
  <meta name="description" content="Chuyên đề học tập Tin học 10 Định hướng Tin học ứng dụng (KNTT - GDPT 2018). Làm chủ kỹ năng soạn thảo văn bản Word nâng cao, bảng tính Excel chuyên sâu và bài trình chiếu PowerPoint đa phương tiện.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#2563eb',
            secondary: '#1d4ed8',
            dark: {
              bg: '#0f172a',
              surface: '#1e293b'
            }
          }
        }
      }
    }
  </script>

  <!-- Font Awesome & Google Fonts -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(37, 99, 235, 0.3);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(37, 99, 235, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Top Sticky Navigation (Exact Âm Nhạc 9 style - Blue theme) -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-dark-surface/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Trở về Trang chủ">
          <i class="fa-solid fa-arrow-left text-base"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-lg">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="tracking-tight">CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-gray-300 dark:text-gray-700">|</span>
        <span class="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
          Chuyên Đề Tin Học 10 - Tin Học Ứng Dụng (KNTT)
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Final Quiz Modal Launcher -->
        <button onclick="openCourseQuizModal()" class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-sm">
          <i class="fa-solid fa-award"></i>
          <span>Kiểm tra toàn khóa (10 câu)</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button id="themeToggle" class="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Chuyển chế độ Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:block text-amber-400 text-sm"></i>
        </button>

        <!-- Mobile Menu Drawer Toggle -->
        <button id="mobileMenuBtn" class="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Menu Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm hidden lg:hidden flex justify-end">
    <div class="bg-white dark:bg-dark-surface w-80 max-w-full h-full shadow-2xl p-5 flex flex-col overflow-y-auto">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-4">
        <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-base">
          <i class="fa-solid fa-book-open text-blue-600"></i>
          <span>Mục Lục 14 Bài Học & Dự Án</span>
        </div>
        <button id="closeDrawerBtn" class="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="space-y-4 flex-1">
        ${sidebarTopicsHtml}
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2">
            <i class="fa-solid fa-award"></i>
            <span>Làm Bài Kiểm Tra Toàn Khóa</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Course Hero Banner (Exact Âm Nhạc 9 panel style - Cobalt Blue theme) -->
  <section class="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
    <div class="max-w-7xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-blue-200 border border-white/15">
        <i class="fa-solid fa-circle-check text-blue-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 - Sách giáo khoa Chuyên đề học tập Tin học 10 Kết nối tri thức</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
        Chuyên Đề Tin Học 10 - Tin Học Ứng Dụng (ICT)
      </h1>
      <p class="text-blue-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
        Khóa học trực tuyến chuyên sâu gồm <strong>3 Chuyên đề trọng tâm</strong> và <strong>14 Bài học &amp; Dự án thực tế</strong> theo định hướng Tin học ứng dụng (Applied Informatics). Giúp học sinh làm chủ kỹ năng xử lý văn bản chuyên nghiệp (Word: Styles, Section Breaks, TOC), phân tích và xử lý bảng tính thông minh (Excel: Flash Fill, Data Validation, VLOOKUP/XLOOKUP, PivotTable) và thiết kế bài trình chiếu tương tác hiện đại (PowerPoint: Slide Master, Morph, Trigger, xuất bản video).
      </p>

      <!-- Key Course Stats -->
      <div class="flex flex-wrap gap-4 pt-3 text-xs sm:text-sm font-medium">
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-layer-group text-blue-300"></i>
          <span>3 Chuyên đề &amp; 1 Dự án</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-laptop-code text-indigo-300"></i>
          <span>14 Bài học thực chiến</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-circle-question text-yellow-300"></i>
          <span>56 Câu hỏi trắc nghiệm tương tác</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-certificate text-emerald-300"></i>
          <span>Kỹ năng số văn phòng chuẩn quốc tế</span>
        </div>
      </div>

      <!-- Quick Topic Anchor Pills -->
      <div class="pt-4 flex flex-wrap gap-2">
        ${heroTopicPills}
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Sticky Sidebar: Organized by Topics -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-800">
            <h3 class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <i class="fa-solid fa-list-ul text-blue-500"></i>
              <span>Mục lục Chuyên đề</span>
            </h3>
            <span class="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-bold">14 Bài học</span>
          </div>

          <!-- Quick Search in Sidebar -->
          <div class="relative mb-3">
            <input type="text" id="lessonSearch" placeholder="Tìm kiếm bài học..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-gray-400 text-xs"></i>
          </div>

          <div class="sidebar-scroll max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
            ${sidebarTopicsHtml}
          </div>

          <div class="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
            <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
              <i class="fa-solid fa-award"></i>
              <span>Kiểm Tra Toàn Khóa (10 câu)</span>
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Course Lessons Content -->
      <main class="lg:col-span-3 space-y-16" id="mainContent">
        ${topicSectionsHtml}
      </main>

    </div>
  </div>

  <!-- Final Exam Modal (#courseQuizModal) -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700 mb-6">
        <div>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-award text-blue-500"></i>
            <span>Đề thi trắc nghiệm tổng hợp Chuyên Đề Tin Học 10 (ICT)</span>
          </h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">10 câu hỏi bao quát 3 chuyên đề Word, Excel, PowerPoint và Dự án tích hợp</p>
        </div>
        <button onclick="closeCourseQuizModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-800 dark:hover:text-white flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Exam Questions Container -->
      <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6">
        
        <!-- Q1 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 1: Lợi ích cốt lõi của việc sử dụng các Heading Styles (Heading 1, 2, 3) kết hợp Multilevel List trong tài liệu Word là gì?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Quản lý cấu trúc phân cấp tự động, dễ dàng điều hướng và tạo mục lục tự động (TOC)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Giảm dung lượng tệp tin Word xuống một nửa</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Tự động dịch tài liệu sang tiếng Anh</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Khóa tài liệu chống sao chép</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 2: Muốn một trang tài liệu nằm ngang (Landscape) nằm xen kẽ giữa các trang dọc (Portrait), ta bắt buộc phải sử dụng công cụ ngắt nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Section Break (Next Page)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Page Break thông thường (Ctrl + Enter)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Line Break (Shift + Enter)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Nhấn phím Enter nhiều lần cho tới hết trang</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 3: Chế độ Wrap Text nào cho phép các dòng chữ uốn lượn ôm sát theo đường viền thực tế của bức ảnh đã xóa phông?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Chế độ Tight</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Chế độ In Line with Text</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Chế độ Top and Bottom</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Chế độ Behind Text</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 4: Phím tắt thần thánh trong Microsoft Excel để kích hoạt tính năng Flash Fill (tự động nhận diện quy luật tách hoặc ghép dữ liệu) là gì?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Ctrl + E</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Ctrl + F</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Ctrl + D</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Ctrl + R</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 5: Khi chuyển đổi dải ô thành Bảng dữ liệu thông minh (Format as Table - Ctrl + T), tính năng nào giúp tự động tính toán cho toàn bộ cột?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Calculated Columns (Cột tự tính toán)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. AutoCorrect</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Protect Workbook</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Error Checking</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 6: Trong công thức '=VLOOKUP(A2, $D$2:$F$50, 3, 0)', đối số '0' ở cuối cùng đại diện cho điều gì?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Tìm kiếm chính xác tuyệt đối (FALSE)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Tìm kiếm gần đúng (TRUE)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Bỏ qua các giá trị trùng nhau</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Đếm số lượng ô rỗng</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 7: Công cụ nào trong Excel cho phép kéo thả để tổng hợp và phân tích đa chiều hàng ngàn dòng dữ liệu chỉ trong vài giây?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. PivotTable &amp; PivotChart</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Goal Seek</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Solver</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Data Validation</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 8: Để chèn logo thương hiệu tự động xuất hiện ở góc trên tất cả các slide trong bài thuyết trình PowerPoint, ta vào chế độ nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. View &rarr; Slide Master</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Insert &rarr; Pictures</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Design &rarr; Format Background</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Transitions &rarr; Apply To All</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 9: Hiệu ứng chuyển trang hiện đại nào của PowerPoint tự động tạo chuyển động biến hình mượt mà giữa các đối tượng ở 2 slide liên tiếp?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Morph Transition</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Push Transition</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Wipe Transition</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Split Transition</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 10: Kỹ thuật Trigger trong PowerPoint mang lại khả năng tương tác nào nổi bật trong thiết kế trò chơi học tập?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-blue-600 focus:ring-blue-400">
              <span>A. Chỉ kích hoạt hiệu ứng khi người dùng nhấp chuột đúng vào một đối tượng được chỉ định</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-blue-600 focus:ring-blue-400">
              <span>B. Tự động tăng độ sáng màn hình máy chiếu</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-blue-600 focus:ring-blue-400">
              <span>C. Tự động dịch phụ đề bài giảng</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="D" class="text-blue-600 focus:ring-blue-400">
              <span>D. Đóng băng bài thuyết trình</span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Đóng
          </button>
          <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition shadow-md shadow-blue-600/30">
            Nộp bài kiểm tra
          </button>
        </div>

      </form>

      <!-- Exam Result Box -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center">
        <div class="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-600/30">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 class="text-xl font-black text-gray-900 dark:text-white" id="examScoreText">Kết quả: 10/10 điểm</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-4" id="examCommentText">Xuất sắc! Bạn đã làm chủ trọn vẹn kỹ năng số Chuyên đề Tin học 10 (Tin học ứng dụng)!</p>
        <button onclick="resetCourseExam()" class="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition">
          Làm lại bài thi
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-graduation-cap text-blue-600 text-lg"></i>
        <span class="font-bold text-gray-800 dark:text-white">CodeHub Educational Platform</span>
        <span>• Chuyên đề học tập Tin học 10 (Tin học ứng dụng - KNTT)</span>
      </div>
      <div>
        <span>Phát triển theo định hướng Chương trình GDPT 2018</span>
      </div>
    </div>
  </footer>

  <!-- JavaScript Interactivity -->
  <script>
    // Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
    });

    // Mobile Drawer
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');

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
      // Close drawer on link click
      document.querySelectorAll('#mobileDrawer a').forEach(a => {
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
        comment = 'Xuất sắc! Bạn nắm rất vững bộ kỹ năng số Chuyên đề Tin học 10 (Tin học ứng dụng)!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các công cụ và thao tác thực hành nâng cao.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy thực hành thêm trên máy tính để thành thạo các hàm và phím tắt nhé!';
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

console.log('Generating updated full page structure for Chuyên đề Tin học 10 ICT...');
const htmlContent = generateChuyenDeTin10Html();
const targetPath = path.join(__dirname, 'courses', 'chuyende_tinhoc_10_ict.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build chuyende_tinhoc_10_ict.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
