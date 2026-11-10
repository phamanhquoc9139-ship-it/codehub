const fs = require('fs');
const path = require('path');
const lessons = require('./make_music7_data.js');

console.log('Total lessons loaded for Âm nhạc 7:', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chủ đề 1",
    title: "Chủ đề 1: Ngày khai trường",
    desc: "Học hát Khai trường; Lí thuyết âm nhạc: Nhịp lấy đà; Đọc nhạc: Bài đọc nhạc số 1; Thường thức âm nhạc: Nhạc sĩ Trịnh Công Sơn và ca khúc Tuổi đời mênh mông.",
    icon: "fa-school",
    gradient: "from-purple-600 via-violet-700 to-slate-900",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
    lessonNums: [1, 2]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chủ đề 2",
    title: "Chủ đề 2: Môi trường xanh",
    desc: "Học hát Vì cuộc sống tươi đẹp; Cảm thụ Alouette (Tiếng chim sơn ca); Nhạc cụ Recorder / Kèn phím Melodica; Thường thức: Nhạc sĩ Hoàng Việt và tác phẩm Nhạc rừng.",
    icon: "fa-leaf",
    gradient: "from-violet-600 via-purple-700 to-slate-900",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300",
    lessonNums: [3, 4]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chủ đề 3",
    title: "Chủ đề 3: Thầy cô và mái trường",
    desc: "Học hát Nhớ ơn thầy cô (Nguyễn Ngọc Thiện); Thường thức: Nhạc sĩ Đỗ Nhuận và ca khúc Hành quân xa; Lí thuyết: Nhịp 4/4 (Nhịp C); Bài đọc nhạc số 2.",
    icon: "fa-chalkboard-user",
    gradient: "from-fuchsia-600 via-purple-700 to-slate-900",
    badgeColor: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-300",
    lessonNums: [5, 6]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Chủ đề 4",
    title: "Chủ đề 4: Giai điệu quê hương",
    desc: "Học hát dân ca Quan họ Lí cây đa; Kỹ thuật nảy âm, luyến láy; Thường thức âm nhạc: Hát Xoan Phú Thọ (Di sản phi vật thể nhân loại); Thực hành nhạc cụ gõ.",
    icon: "fa-landmark",
    gradient: "from-purple-700 via-indigo-800 to-slate-900",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
    lessonNums: [7, 8]
  },
  {
    num: 5,
    id: "chude-5",
    shortTitle: "Chủ đề 5",
    title: "Chủ đề 5: Chào xuân",
    desc: "Học hát Khúc ca mùa xuân; Thường thức: Nhạc sĩ Văn Cao và ca khúc Làng tôi (nhịp 3/4); Lí thuyết: Quãng 2 (2T, 2t) và Quãng 3 (3T, 3t); Bài đọc nhạc số 3.",
    icon: "fa-seedling",
    gradient: "from-violet-700 via-fuchsia-800 to-slate-900",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300",
    lessonNums: [9, 10]
  },
  {
    num: 6,
    id: "chude-6",
    shortTitle: "Chủ đề 6",
    title: "Chủ đề 6: Âm nhạc nước ngoài",
    desc: "Học hát Đất nước tươi đẹp sao; Kỹ thuật mở vòm họng thanh nhạc; Thường thức: Thần đồng âm nhạc Wolfgang Amadeus Mozart và Eine kleine Nachtmusik; Bài đọc nhạc số 4.",
    icon: "fa-earth-europe",
    gradient: "from-purple-800 via-indigo-900 to-slate-900",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
    lessonNums: [11, 12]
  },
  {
    num: 7,
    id: "chude-7",
    shortTitle: "Chủ đề 7",
    title: "Chủ đề 7: Gia đình yêu thương",
    desc: "Học hát Chỉ có một trên đời (Phạm Tuyên); Lí thuyết: Dấu nhắc lại và Khung thay đổi (khung 1, khung 2); Thực hành hòa tấu nhạc cụ học đường.",
    icon: "fa-heart",
    gradient: "from-pink-700 via-purple-800 to-slate-900",
    badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300",
    lessonNums: [13, 14]
  },
  {
    num: 8,
    id: "chude-8",
    shortTitle: "Chủ đề 8",
    title: "Chủ đề 8: Nhịp điệu mùa hè",
    desc: "Học hát Tiếng ve gọi hè (Trịnh Công Sơn); Kỹ thuật hát bè đuổi Canon; Ôn tập kiến thức tổng kết cả năm và Dự án âm nhạc học đường: Ngày hội âm nhạc Chào hè.",
    icon: "fa-sun",
    gradient: "from-amber-600 via-purple-800 to-slate-900",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
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
          💡 <strong>Giải thích chi tiết:</strong> ${escapeHtml(q.explanation)}
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Lesson ${lesson.lessonNum} -->
    <article id="${lesson.id}" class="lesson-card scroll-mt-24 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Lesson Header -->
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-purple-50/70 to-violet-50/40 dark:from-gray-800 dark:to-gray-800/60">
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
            <i class="fa-regular fa-clock"></i> Thời lượng: 45 phút
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
          ${lesson.title}
        </h3>
        <p class="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <div class="p-6 sm:p-8 space-y-8">
        <!-- Objectives -->
        <div class="p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40">
          <h4 class="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
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
            <i class="fa-solid fa-bookmark text-purple-500"></i> Tóm tắt ghi nhớ cốt lõi
          </h5>
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            ${escapeHtml(lesson.summary)}
          </p>
        </div>

        <!-- Interactive Quizzes -->
        <div id="quiz-${lesson.id}" class="pt-6 border-t border-gray-100 dark:border-gray-700 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-5 bg-purple-600 rounded-full inline-block"></span>
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

function generateAmNhac7Html() {
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
          <span class="w-2 h-2 rounded-full bg-purple-500 shrink-0"></span>
          <span class="truncate">Bài ${l.lessonNum}: ${l.title.replace(/^Bài \d+:\s*/, '')}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-3 topic-group">
        <a href="#${topic.id}" class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span class="flex items-center gap-1.5 truncate">
            <i class="fa-solid ${topic.icon}"></i>
            <span>${topic.shortTitle}</span>
          </span>
          <span class="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0">2</span>
        </a>
        <ul class="mt-1 space-y-0.5 pl-2 border-l-2 border-purple-200 dark:border-purple-900/50">
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
  <title>Âm Nhạc Lớp 7 - Sách Kết nối tri thức với cuộc sống | Học tập trực tuyến</title>
  <meta name="description" content="Khóa học trực tuyến toàn diện gồm 8 Chủ đề và 16 Bài học theo chuẩn chương trình Âm nhạc 7 Kết nối tri thức. 64 câu hỏi trắc nghiệm tương tác và đề thi tổng hợp 10 câu.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#7c3aed',
            secondary: '#6d28d9',
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
      background-color: rgba(124, 58, 237, 0.3);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(124, 58, 237, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-violet-500 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Top Sticky Navigation (Exact Âm Nhạc 9 style) -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-dark-surface/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Trở về Trang chủ">
          <i class="fa-solid fa-arrow-left text-base"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-lg">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="tracking-tight">CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-gray-300 dark:text-gray-700">|</span>
        <span class="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300">
          Âm Nhạc Lớp 7 (KNTT - GDPT 2018)
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Final Quiz Modal Launcher -->
        <button onclick="openCourseQuizModal()" class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-colors shadow-sm">
          <i class="fa-solid fa-award"></i>
          <span>Kiểm tra toàn khóa (10 câu)</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button id="themeToggle" class="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Chuyển chế độ Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:block text-purple-400 text-sm"></i>
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
          <i class="fa-solid fa-book-open text-purple-600"></i>
          <span>Mục Lục 16 Bài Học</span>
        </div>
        <button id="closeDrawerBtn" class="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="space-y-4 flex-1">
        ${sidebarTopicsHtml}
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2">
            <i class="fa-solid fa-award"></i>
            <span>Làm Bài Kiểm Tra Toàn Khóa</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Course Hero Banner (Exact Âm Nhạc 9 panel style) -->
  <section class="bg-gradient-to-br from-purple-800 via-violet-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
    <div class="max-w-7xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-purple-200 border border-white/15">
        <i class="fa-solid fa-circle-check text-purple-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 - Sách giáo khoa Kết nối tri thức với cuộc sống</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
        Âm Nhạc Lớp 7
      </h1>
      <p class="text-purple-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
        Khóa học trực tuyến toàn diện gồm <strong>8 Chủ đề</strong> và <strong>16 Bài học</strong> theo chuẩn chương trình Âm nhạc 7. Nắm vững Nhịp lấy đà, Nhịp 4/4 (Nhịp C), Quãng 2 và Quãng 3, Dấu nhắc lại & Khung thay đổi, Hát Xoan Phú Thọ, Dân ca Quan họ Lí cây đa, Thần đồng Mozart và các tác gia lớn Trịnh Công Sơn, Hoàng Việt, Đỗ Nhuận, Văn Cao.
      </p>

      <!-- Key Course Stats -->
      <div class="flex flex-wrap gap-4 pt-3 text-xs sm:text-sm font-medium">
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-layer-group text-purple-300"></i>
          <span>8 Chủ đề chuẩn mực</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-book-bookmark text-violet-300"></i>
          <span>16 Bài học chuyên sâu</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-circle-question text-fuchsia-300"></i>
          <span>64 Câu hỏi trắc nghiệm tương tác</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-music text-purple-200"></i>
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
              <i class="fa-solid fa-list-ul text-purple-500"></i>
              <span>Mục lục theo Chủ đề</span>
            </h3>
            <span class="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full font-bold">8 C.Đề / 16 Bài</span>
          </div>

          <!-- Quick Search in Sidebar -->
          <div class="relative mb-3">
            <input type="text" id="lessonSearch" placeholder="Tìm kiếm bài học..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-purple-500">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-gray-400 text-xs"></i>
          </div>

          <div class="sidebar-scroll max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
            ${sidebarTopicsHtml}
          </div>

          <div class="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
            <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
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
            <i class="fa-solid fa-award text-purple-500"></i>
            <span>Đề thi trắc nghiệm tổng hợp Âm Nhạc 7</span>
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
            Câu 1: Ô nhịp lấy đà trong bản nhạc có đặc điểm nhận biết đặc trưng gì?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Là ô nhịp đầu tiên không đủ số phách theo quy định của số chỉ nhịp</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Luôn luôn chứa đầy đủ số phách mạnh và phách nhẹ</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Là ô nhịp nằm ở giữa bài hát có chứa dấu lặng đen</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq1" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Là ô nhịp cuối cùng của bài hát</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 2: Số chỉ nhịp 4/4 (kí hiệu chữ C) có bao nhiêu phách trong mỗi ô nhịp và giá trị mỗi phách là gì?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Có 4 phách trong một ô nhịp, mỗi phách có giá trị bằng một nốt đen</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Có 2 phách trong một ô nhịp, mỗi phách bằng một nốt trắng</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Có 3 phách trong một ô nhịp, mỗi phách bằng một nốt móc đơn</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq2" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Có 4 phách, mỗi phách bằng một nốt móc kép</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 3: Khoảng cách âm thanh giữa nốt Đô và nốt Rê (Đô - Rê) thuộc loại quãng nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Quãng 2 trưởng (2T) có độ lớn 1 cung</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Quãng 2 thứ (2t) có độ lớn 1/2 cung</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Quãng 3 trưởng (3T)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq3" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Quãng 1 đúng</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 4: Quãng 3 trưởng (3T) như Đô - Mi có độ lớn khoảng cách cao độ là bao nhiêu?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="A" class="text-purple-600 focus:ring-purple-400">
              <span>A. 1 cung rưỡi (1.5 cung)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="B" required class="text-purple-600 focus:ring-purple-400">
              <span>B. 2 cung</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. 1 cung</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq4" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. 2 cung rưỡi (2.5 cung)</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 5: Trong một bản nhạc có dấu nhắc lại và hai khung thay đổi (khung 1 và khung 2), người biểu diễn sẽ thực hiện như thế nào ở lần hát thứ hai?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="A" class="text-purple-600 focus:ring-purple-400">
              <span>A. Hát lại cả khung 1 rồi mới hát khung 2</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="B" required class="text-purple-600 focus:ring-purple-400">
              <span>B. Bỏ qua khung 1 và nhảy thẳng sang hát ô nhịp ở khung 2</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Dừng lại không hát tiếp sau khi kết thúc khung 1</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq5" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Hát khung 2 trước rồi mới quay lại hát khung 1</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 6: Ai là tác giả của các ca khúc thiếu nhi nổi tiếng "Tuổi đời mênh mông" và "Tiếng ve gọi hè"?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Nhạc sĩ Trịnh Công Sơn</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Nhạc sĩ Văn Cao</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Nhạc sĩ Đỗ Nhuận</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq6" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Nhạc sĩ Hoàng Việt</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 7: Tác phẩm giao hưởng đầu tiên của nền âm nhạc cách mạng Việt Nam là gì và do ai sáng tác?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Giao hưởng Quê hương của nhạc sĩ Hoàng Việt</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Vở nhạc kịch Cô Sao của Đỗ Nhuận</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Trường ca Sông Lô của Văn Cao</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq7" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Bản sonate Ánh trăng của Beethoven</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 8: Di sản Hát Xoan Phú Thọ được UNESCO vinh danh gắn liền với không gian diễn xướng nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Hát trước cửa đình làng (khúc môn đình) và tín ngưỡng thờ cúng Hùng Vương</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Hát trên thuyền rồng sông Hương</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Hát bên bờ biển đảo Phú Quốc</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq8" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Biểu diễn trong rạp xiếc trung tâm</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 9: Ca khúc "Làng tôi" của nhạc sĩ Văn Cao được viết ở số chỉ nhịp nào mang điệu Valse du dương?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Nhịp 3/4</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Nhịp 2/4</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Nhịp 4/4</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq9" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Nhịp 6/8</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <p class="text-sm font-bold text-gray-900 dark:text-white mb-2.5">
            Câu 10: Thần đồng âm nhạc người Áo Wolfgang Amadeus Mozart thuộc trường phái âm nhạc nổi tiếng nào?
          </p>
          <div class="space-y-2 text-xs sm:text-sm">
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-purple-600 focus:ring-purple-400">
              <span>A. Trường phái Cổ điển Vienna</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-purple-600 focus:ring-purple-400">
              <span>B. Trường phái Lãng mạn Pháp</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-purple-600 focus:ring-purple-400">
              <span>C. Trường phái Ấn tượng Nga</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <input type="radio" name="eq10" value="D" class="text-purple-600 focus:ring-purple-400">
              <span>D. Trường phái Hiện đại Hoa Kỳ</span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Đóng
          </button>
          <button type="submit" class="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition shadow-md shadow-purple-600/30">
            Nộp bài kiểm tra
          </button>
        </div>

      </form>

      <!-- Exam Result Box -->
      <div id="courseExamResult" class="hidden mt-6 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-center">
        <div class="w-16 h-16 rounded-full bg-purple-600 text-white text-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-600/30">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 class="text-xl font-black text-gray-900 dark:text-white" id="examScoreText">Kết quả: 10/10 điểm</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-4" id="examCommentText">Xuất sắc! Bạn đã nắm vững toàn bộ kiến thức chương trình Âm nhạc 7!</p>
        <button onclick="resetCourseExam()" class="px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition">
          Làm lại bài thi
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-graduation-cap text-purple-600 text-lg"></i>
        <span class="font-bold text-gray-800 dark:text-white">CodeHub Educational Platform</span>
        <span>• Sách Âm Nhạc 7 Kết nối tri thức với cuộc sống</span>
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
      eq4: 'B',
      eq5: 'B',
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
        comment = 'Xuất sắc! Bạn nắm rất vững toàn bộ chương trình Âm nhạc 7!';
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

console.log('Generating updated full page structure for Âm nhạc 7...');
const htmlContent = generateAmNhac7Html();
const targetPath = path.join(__dirname, 'courses', 'amnhac_7.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build amnhac_7.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
