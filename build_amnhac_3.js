const fs = require('fs');
const path = require('path');
const lessons = require('./make_music3_data.js');

console.log('Total lessons loaded for Âm nhạc 3:', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chủ đề 1",
    title: "Chủ đề 1: Chào năm học mới",
    desc: "Học hát Bài ca đi học rộn ràng, phấn khởi chào năm học mới; Lí thuyết: Nốt đen, Nốt trắng và Bài đọc nhạc số 1 (Đô - Rê - Mi); Thực hành gõ đệm thanh phách, trống nhỏ.",
    icon: "fa-bell",
    gradient: "from-red-600 via-rose-700 to-slate-900",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300",
    lessonNums: [1, 2]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chủ đề 2",
    title: "Chủ đề 2: Khúc hát đồng dao",
    desc: "Học hát bài đồng dao thiếu nhi Tập tầm vông (Lê Hữu Lộc); Lí thuyết: Nốt móc đơn; Bài đọc nhạc số 2; Giới thiệu nhạc cụ gõ Trống nhỏ và Triangle (thanh tam giác).",
    icon: "fa-gamepad",
    gradient: "from-rose-600 via-red-700 to-slate-900",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
    lessonNums: [3, 4]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chủ đề 3",
    title: "Chủ đề 3: Mái trường mến yêu",
    desc: "Học hát Em yêu trường em (Hoàng Vân); Ký hiệu bàn tay Curwen (Đô - Rê - Mi - Son - La); Bài đọc nhạc số 3; Giới thiệu cuộc đời và sự nghiệp Nhạc sĩ Phan Huỳnh Điểu.",
    icon: "fa-school",
    gradient: "from-red-700 via-pink-700 to-slate-900",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300",
    lessonNums: [5, 6]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Chủ đề 4",
    title: "Chủ đề 4: Em yêu dân ca",
    desc: "Học hát Dân ca Thái Xòe hoa (Lời mới: Phan Duy); Lí thuyết âm nhạc: Phách mạnh - Phách nhẹ trong nhịp 2/4; Khám phá nhạc cụ dân tộc Đàn Nhị (Đàn Cò).",
    icon: "fa-fan",
    gradient: "from-rose-700 via-red-800 to-slate-900",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
    lessonNums: [7, 8]
  },
  {
    num: 5,
    id: "chude-5",
    shortTitle: "Chủ đề 5",
    title: "Chủ đề 5: Mừng xuân mới",
    desc: "Học hát Cùng múa hát dưới trăng (Hoàng Lân) rộn rã, chan hòa; Lí thuyết: Dấu lặng đen (nghỉ 1 phách); Bài đọc nhạc số 5; Vận động cơ thể nhịp nhàng.",
    icon: "fa-moon",
    gradient: "from-red-800 via-rose-800 to-slate-900",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300",
    lessonNums: [9, 10]
  },
  {
    num: 6,
    id: "chude-6",
    shortTitle: "Chủ đề 6",
    title: "Chủ đề 6: Động vật dễ thương",
    desc: "Học hát Chị ong nâu và em bé (Tân Huyền) vui tươi, chăm chỉ; Cảm thụ cao độ âm thanh Cao - Thấp, Dài - Ngắn; Khám phá Cây Sáo trúc Việt Nam.",
    icon: "fa-feather",
    gradient: "from-rose-800 via-red-700 to-slate-900",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
    lessonNums: [11, 12]
  },
  {
    num: 7,
    id: "chude-7",
    shortTitle: "Chủ đề 7",
    title: "Chủ đề 7: Gia đình thân thương",
    desc: "Học hát ca khúc Ngày đầu tiên đi học (Nguyễn Ngọc Thiện - Viễn Phương) chan chứa yêu thương; Ký hiệu âm nhạc: Dấu nhắc lại; Tìm hiểu cây Đàn Guitar.",
    icon: "fa-heart",
    gradient: "from-red-700 via-rose-900 to-slate-900",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300",
    lessonNums: [13, 14]
  },
  {
    num: 8,
    id: "chude-8",
    shortTitle: "Chủ đề 8",
    title: "Chủ đề 8: Vui đón hè sang",
    desc: "Học hát Mùa hè đến (Nguyễn Thị Nhung) hân hoan, rộn rã; Ôn tập hệ thống hóa toàn bộ kiến thức cả năm Lớp 3; Dự án âm nhạc học đường: Ngày hội âm nhạc Tuổi thơ.",
    icon: "fa-sun",
    gradient: "from-rose-600 via-red-900 to-slate-900",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
    lessonNums: [15, 16]
  }
];

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderLessonArticle(lesson) {
  const objectivesHtml = lesson.objectives.map(obj => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-check text-red-500 mt-1 shrink-0"></i>
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
                class="quiz-btn text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition duration-150 flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[optIdx]}</span>
          <span class="mt-0.5">${escapeHtml(opt)}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm" data-answered="false">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 font-bold text-xs shrink-0 mt-0.5">Câu ${idx + 1}</span>
          <span>${escapeHtml(q.question)}</span>
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${optsHtml}
        </div>
        <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
        <div class="quiz-explain hidden mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
          💡 <strong>Giải thích chi tiết:</strong> ${escapeHtml(q.explanation)}
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Lesson ${lesson.lessonNum} -->
    <article id="${lesson.id}" class="lesson-card scroll-mt-24 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Lesson Header -->
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-red-50/70 to-rose-50/40 dark:from-gray-800 dark:to-gray-800/60">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs">
              Bài ${lesson.lessonNum}
            </span>
            <span class="px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/70 text-red-800 dark:text-red-300 text-xs font-semibold">
              ${escapeHtml(lesson.tag)}
            </span>
          </div>
          <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <i class="fa-regular fa-clock"></i> Thời lượng: 45 phút
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
          ${lesson.title}
        </h3>
        <p class="text-xs text-red-600 dark:text-red-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <div class="p-6 sm:p-8 space-y-8">
        <!-- Objectives -->
        <div class="p-5 rounded-2xl bg-red-50/60 dark:bg-red-950/30 border border-red-200/60 dark:border-red-800/40">
          <h4 class="text-xs font-bold uppercase tracking-wider text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
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
            <i class="fa-solid fa-bookmark text-red-500"></i> Tóm tắt ghi nhớ cốt lõi
          </h5>
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            ${escapeHtml(lesson.summary)}
          </p>
        </div>

        <!-- Interactive Quizzes -->
        <div id="quiz-${lesson.id}" class="pt-6 border-t border-gray-100 dark:border-gray-700 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-5 bg-red-600 rounded-full inline-block"></span>
              <span>Luyện tập trắc nghiệm cuối bài (4 câu)</span>
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

function generateAmNhac3Html() {
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
              <span>Chủ đề trọng tâm ${topic.num}</span>
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
          <span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
          <span class="truncate">Bài ${l.lessonNum}: ${l.title.replace(/^Bài \d+:\s*/, '')}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-3 topic-group">
        <a href="#${topic.id}" class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span class="flex items-center gap-1.5 truncate">
            <i class="fa-solid ${topic.icon}"></i>
            <span>${topic.shortTitle}</span>
          </span>
          <span class="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0">2</span>
        </a>
        <ul class="mt-1 space-y-0.5 pl-2 border-l-2 border-red-200 dark:border-red-900/50">
          ${lessonsList}
        </ul>
      </div>
    `;
  }).join('');

  // Hero topic pills
  const heroTopicPills = TOPICS.map(topic => `
    <a href="#${topic.id}" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
      <i class="fa-solid ${topic.icon}"></i>
      <span>Chủ đề ${topic.num}</span>
    </a>
  `).join('');

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Âm Nhạc Lớp 3 - Sách Kết nối tri thức với cuộc sống | Học tập trực tuyến</title>
  <meta name="description" content="Khóa học trực tuyến toàn diện gồm 8 Chủ đề và 16 Bài học theo chuẩn chương trình Âm nhạc 3 Kết nối tri thức. 64 câu hỏi trắc nghiệm tương tác và đề thi tổng hợp 10 câu.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#dc2626',
            secondary: '#b91c1c',
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
      background-color: rgba(220, 38, 38, 0.3);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(220, 38, 38, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-rose-600 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Top Sticky Navigation (Exact Âm Nhạc 9 style - Red theme) -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-dark-surface/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Trở về Trang chủ">
          <i class="fa-solid fa-arrow-left text-base"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-lg">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="tracking-tight">CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-gray-300 dark:text-gray-700">|</span>
        <span class="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300">
          Âm Nhạc Lớp 3 (KNTT - GDPT 2018)
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Final Quiz Modal Launcher -->
        <button onclick="openCourseQuizModal()" class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors shadow-sm">
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
          <i class="fa-solid fa-book-open text-red-600"></i>
          <span>Mục Lục 16 Bài Học</span>
        </div>
        <button id="closeDrawerBtn" class="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="space-y-4 flex-1">
        ${sidebarTopicsHtml}
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-2">
            <i class="fa-solid fa-award"></i>
            <span>Làm Bài Kiểm Tra Toàn Khóa</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Course Hero Banner (Exact Âm Nhạc 9 panel style - Red Crimson theme) -->
  <section class="bg-gradient-to-br from-red-800 via-rose-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
    <div class="max-w-7xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-red-200 border border-white/15">
        <i class="fa-solid fa-circle-check text-red-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 - Sách giáo khoa Kết nối tri thức với cuộc sống</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
        Âm Nhạc Lớp 3
      </h1>
      <p class="text-red-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
        Khóa học trực tuyến toàn diện gồm <strong>8 Chủ đề</strong> và <strong>16 Bài học</strong> theo chuẩn chương trình Âm nhạc 3 Kết nối tri thức. Giúp học sinh nắm vững các hình nốt cơ bản (nốt đen, nốt trắng, nốt móc đơn), Ký hiệu bàn tay Curwen (Đô - Rê - Mi - Son - La), Phách mạnh - phách nhẹ trong nhịp 2/4, Dấu lặng đen, Dấu nhắc lại; làm quen Trống nhỏ, Triangle, Đàn Nhị, Sáo trúc, Đàn Guitar và các bài hát tuổi thơ kinh điển của Phan Huỳnh Điểu, Hoàng Vân, Hoàng Lân, Tân Huyền, Phan Trần Bảng.
      </p>

      <!-- Key Course Stats -->
      <div class="flex flex-wrap gap-4 pt-3 text-xs sm:text-sm font-medium">
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-layer-group text-red-300"></i>
          <span>8 Chủ đề chuẩn mực</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-book-bookmark text-rose-300"></i>
          <span>16 Bài học chuyên sâu</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-circle-question text-yellow-300"></i>
          <span>64 Câu hỏi trắc nghiệm tương tác</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-music text-red-200"></i>
          <span>Thanh nhạc, Nhạc cụ & Dự án biểu diễn</span>
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
              <i class="fa-solid fa-list-ul text-red-500"></i>
              <span>Mục lục theo Chủ đề</span>
            </h3>
            <span class="text-xs bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-2 py-0.5 rounded-full font-bold">8 C.Đề / 16 Bài</span>
          </div>

          <!-- Quick Search in Sidebar -->
          <div class="relative mb-3">
            <input type="text" id="lessonSearch" placeholder="Tìm kiếm bài học..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-red-500">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-gray-400 text-xs"></i>
          </div>

          <div class="sidebar-scroll max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
            ${sidebarTopicsHtml}
          </div>

          <div class="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
            <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
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
            <i class="fa-solid fa-award text-red-500"></i>
            <span>Đề thi trắc nghiệm tổng hợp Âm Nhạc 3</span>
          </h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">10 câu hỏi bao quát 8 chủ đề toàn bộ chương trình GDPT 2018</p>
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
            Câu 1: Bài hát "Bài ca đi học" rộn ràng trong ngày khai trường do nhạc sĩ nào sáng tác?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Nhạc sĩ Phan Trần Bảng</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Nhạc sĩ Văn Cao</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Nhạc sĩ Lưu Hữu Phước</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Nhạc sĩ Đỗ Nhuận</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 2: Một nốt trắng có trường độ ngân bằng bao nhiêu nốt đen?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. 2 nốt đen</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. 4 nốt đen</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. 1 nốt đen</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. 8 nốt đen</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 3: Bài hát đồng dao "Tập tầm vông" rất quen thuộc với tuổi thơ do nhạc sĩ nào phổ nhạc?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Nhạc sĩ Lê Hữu Lộc</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Nhạc sĩ Hoàng Long</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Nhạc sĩ Phạm Tuyên</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Nhạc sĩ Phong Nhã</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 4: Nhạc cụ Triangle (thanh tam giác) được làm bằng chất liệu gì và phát ra âm thanh như thế nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Làm bằng kim loại, âm thanh leng keng trong trẻo</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Làm bằng gỗ, âm thanh trầm ấm</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Làm bằng da thú, âm thanh bập bùng</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Làm bằng tre nứa, âm thanh xào xạc</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 5: Bài hát "Em yêu trường em" với câu hát "Em yêu trường em với bao bạn thân và cô giáo hiền..." là sáng tác của nhạc sĩ nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Nhạc sĩ Hoàng Vân</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Nhạc sĩ Bùi Đình Thảo</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Nhạc sĩ Phan Huỳnh Điểu</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Nhạc sĩ Văn Cao</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 6: Bài hát múa xòe rộn rã "Xòe hoa" là làn điệu dân ca của đồng bào dân tộc nào ở vùng Tây Bắc?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Dân ca dân tộc Thái</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Dân ca dân tộc Mường</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Dân ca dân tộc Ê-đê</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Dân ca dân tộc Chăm</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 7: Đàn Nhị (còn được gọi là Đàn Cò ở miền Nam) của dân tộc Việt Nam có bao nhiêu dây đàn?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. 2 dây đàn</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. 1 dây đàn</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. 4 dây đàn</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. 16 dây đàn</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 8: Dấu lặng đen trong bản nhạc biểu thị khoảng thời gian tạm ngừng nghỉ âm thanh bằng bao nhiêu?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Tạm nghỉ 1 phách (bằng giá trị trường độ 1 nốt đen)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Tạm nghỉ 2 phách (bằng giá trị trường độ 1 nốt trắng)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Tạm nghỉ 4 phách (bằng giá trị trường độ 1 nốt tròn)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Tạm nghỉ nửa phách (bằng giá trị trường độ 1 nốt móc đơn)</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 9: Cây Sáo trúc của Việt Nam thuộc họ nhạc cụ nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Nhạc cụ hơi (bộ hơi, dùng luồng hơi thổi)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Nhạc cụ gõ</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Nhạc cụ dây</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Nhạc cụ phím điện tử</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 10: Dấu nhắc lại trong bản nhạc hướng dẫn người biểu diễn thực hiện điều gì?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-red-600 focus:ring-red-400">
              <span>A. Lặp lại đoạn nhạc vừa hát hoặc chơi thêm một lần nữa</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-red-600 focus:ring-red-400">
              <span>B. Kết thúc toàn bộ bài hát ngay lập tức</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-red-600 focus:ring-red-400">
              <span>C. Chuyển sang đọc bài thơ khác</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="D" class="text-red-600 focus:ring-red-400">
              <span>D. Đổi nhịp độ bài hát thành thật nhanh</span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Đóng
          </button>
          <button type="submit" class="px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition shadow-md shadow-red-600/30">
            Nộp bài kiểm tra
          </button>
        </div>

      </form>

      <!-- Exam Result Box -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-center">
        <div class="w-16 h-16 rounded-full bg-red-600 text-white text-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-red-600/30">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 class="text-xl font-black text-gray-900 dark:text-white" id="examScoreText">Kết quả: 10/10 điểm</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-4" id="examCommentText">Xuất sắc! Bạn đã nắm vững toàn bộ kiến thức chương trình Âm nhạc 3!</p>
        <button onclick="resetCourseExam()" class="px-5 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition">
          Làm lại bài thi
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-graduation-cap text-red-600 text-lg"></i>
        <span class="font-bold text-gray-800 dark:text-white">CodeHub Educational Platform</span>
        <span>• Sách Âm Nhạc 3 Kết nối tri thức với cuộc sống</span>
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
        feedback.innerHTML = '<strong>🎉 Chính xác!</strong> Bạn đã chọn đáp án hoàn toàn đúng.';
      } else {
        btn.classList.remove('opacity-60');
        btn.classList.add('bg-red-100', 'border-red-500', 'text-red-800', 'dark:bg-red-950/60', 'dark:text-red-300');
        feedback.classList.add('bg-red-50', 'text-red-800', 'dark:bg-red-950/50', 'dark:text-red-300', 'border', 'border-red-200', 'dark:border-red-800');
        feedback.innerHTML = '<strong>Chưa chính xác!</strong> Hãy xem lại lời giải thích chi tiết phía dưới nhé.';
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
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ chương trình Âm nhạc 3!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu bài và cảm thụ âm nhạc rất tốt.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy ôn lại các bài học nhạc lí để nhớ sâu hơn nhé!';
      } else {
        comment = 'Cần cố gắng hơn. Hãy đọc lại kiến thức các chủ đề và luyện tập thêm nhé!';
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

console.log('Generating updated full page structure for Âm nhạc 3...');
const htmlContent = generateAmNhac3Html();
const targetPath = path.join(__dirname, 'courses', 'amnhac_3.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build amnhac_3.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
