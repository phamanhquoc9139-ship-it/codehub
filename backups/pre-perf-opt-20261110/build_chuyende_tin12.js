const fs = require('fs');
const path = require('path');
const lessons = require('./make_chuyende_tin12_data.js');

console.log('Total lessons loaded for Chuyên đề Tin học 12 ICT:', lessons.length);

const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    shortTitle: "Chuyên đề 1",
    title: "Chuyên đề 1: Thực hành sử dụng phần mềm quản lý dự án (GanttProject)",
    desc: "Làm chủ phương pháp quản trị dự án hiện đại: Khởi tạo dự án, thiết lập cơ cấu phân rã công việc WBS, quản lý tiến độ và mối quan hệ phụ thuộc (FS, SS, FF), phân bổ nguồn lực nhân sự - kinh phí, kiểm soát đường găng Critical Path và xuất báo cáo dự án chuyên nghiệp.",
    icon: "fa-diagram-project",
    gradient: "from-rose-700 via-pink-800 to-slate-900",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
    lessonNums: [1, 2, 3, 4, 5]
  },
  {
    num: 2,
    id: "chude-2",
    shortTitle: "Chuyên đề 2",
    title: "Chuyên đề 2: Thực hành cài đặt, gỡ bỏ phần mềm và bảo vệ dữ liệu",
    desc: "Quản trị hệ thống máy tính an toàn: Phân loại và gỡ bỏ sạch sẽ phần mềm, tạo USB Boot cài đặt hệ điều hành chuẩn UEFI/GPT (Rufus), phòng chống mã độc tống tiền Ransomware, thực thi nguyên tắc sao lưu vàng 3-2-1 và mã hóa bảo mật cấp cao với BitLocker & 7-Zip AES-256.",
    icon: "fa-shield-halved",
    gradient: "from-pink-700 via-rose-800 to-slate-900",
    badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300",
    lessonNums: [6, 7, 8, 9]
  },
  {
    num: 3,
    id: "chude-3",
    shortTitle: "Chuyên đề 3",
    title: "Chuyên đề 3: Thực hành phân tích dữ liệu với phần mềm bảng tính (Excel Analytics)",
    desc: "Khai phá dữ liệu định lượng và trí tuệ kinh doanh (Business Intelligence): Chọn mẫu ngẫu nhiên và tính xác suất, xác định các đặc trưng đo xu thế trung tâm và độ phân tán, tổng hợp số liệu đa chiều với PivotTable & Slicer, mô tả thống kê bằng Histogram & Box Plot, phân tích tương quan Pearson và kiểm định giả thuyết T-Test.",
    icon: "fa-chart-pie",
    gradient: "from-amber-700 via-rose-800 to-slate-900",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
    lessonNums: [10, 11, 12, 13, 14, 15]
  },
  {
    num: 4,
    id: "chude-4",
    shortTitle: "Dự án tổng hợp",
    title: "Dự án học tập: Quản trị dự án & Phân tích số liệu kinh doanh học đường",
    desc: "Dự án tích hợp liên hoàn 2 trụ cột công nghệ: Lập kế hoạch kinh doanh và kiểm soát tiến độ trên GanttProject kết hợp Xử lý số liệu khảo sát thị trường trên Excel; Báo cáo dự án số và đánh giá năng lực theo chuẩn Rubrics.",
    icon: "fa-briefcase",
    gradient: "from-purple-700 via-rose-900 to-slate-900",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
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
      <i class="fa-solid fa-check text-rose-500 mt-1 shrink-0"></i>
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
                class="quiz-btn text-left p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition duration-150 flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[optIdx]}</span>
          <span class="mt-0.5">${escapeHtml(opt)}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm" data-answered="false">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 font-bold text-xs shrink-0 mt-0.5">Câu ${idx + 1}</span>
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
      <div class="p-6 border-b border-gray-100 dark:border-gray-700/80 bg-gradient-to-r from-rose-50/70 to-pink-50/40 dark:from-gray-800 dark:to-gray-800/60">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-rose-600 text-white font-bold text-xs">
              Bài ${lesson.lessonNum}
            </span>
            <span class="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 text-xs font-semibold">
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
        <p class="text-xs text-rose-600 dark:text-rose-400 font-medium mt-1">
          ${lesson.topicName}
        </p>
      </div>

      <!-- Lesson Body -->
      <div class="p-6 sm:p-8 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <!-- Section 1: Objectives -->
        <div class="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40">
          <h4 class="text-sm font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-rose-600"></i> Mục tiêu cần đạt
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            ${objectivesHtml}
          </ul>
        </div>

        <!-- Section 2: Summary / Theory -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-book-open text-rose-600"></i> 1. Kiến thức trọng tâm & Kỹ thuật cốt lõi
          </h4>
          ${lesson.summary}
        </div>

        <!-- Section 3: Practice Steps -->
        <div>
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <i class="fa-solid fa-laptop-code text-rose-600"></i> 2. Hướng dẫn thực hành từng bước chi tiết
          </h4>
          <div class="space-y-4">
            ${lesson.steps.map((st, sidx) => `
              <div class="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-rose-500 flex flex-col gap-1.5">
                <span class="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wide">
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
              <i class="fa-solid fa-circle-question text-rose-600"></i> 4. Câu hỏi củng cố & Luyện tập nhanh
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

function generateChuyenDeTin12Html() {
  const sidebarNavHtml = TOPICS.map(topic => {
    const topicLessons = lessons.filter(l => topic.lessonNums.includes(l.lessonNum));
    const listItems = topicLessons.map(l => `
      <li>
        <a href="#${l.id}" 
           data-title="${escapeHtml(l.title.toLowerCase())}"
           class="sidebar-link group flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg text-xs text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition">
          <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-rose-500 mt-1.5 shrink-0 transition"></span>
          <span class="line-clamp-2 leading-snug">Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}</span>
        </a>
      </li>
    `).join('');

    return `
      <div class="topic-group mb-5">
        <a href="#${topic.id}" class="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-rose-600 dark:hover:text-rose-400 mb-2 px-2.5">
          <span class="flex items-center gap-2">
            <i class="fa-solid ${topic.icon} text-rose-600"></i>
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
        <a href="#${l.id}" class="mobile-nav-link block py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400">
          Bài ${l.lessonNum}: ${escapeHtml(l.title.split(': ')[1] || l.title)}
        </a>
      </li>
    `).join('');

    return `
      <div class="mb-4">
        <div class="font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid ${topic.icon} text-rose-600"></i>
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
            <p class="text-sm sm:text-base text-rose-100 max-w-3xl leading-relaxed">
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
  <title>Chuyên Đề Tin Học 12 - Định hướng Tin Học Ứng Dụng (KNTT) | CodeHub</title>
  <meta name="description" content="Chương trình học Chuyên đề Tin học 12 - Định hướng Tin học ứng dụng theo SGK Kết nối tri thức: Quản lý dự án GanttProject, Quản trị hệ thống & Bảo vệ dữ liệu, Phân tích dữ liệu thống kê Excel và Dự án số.">
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
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              300: '#fda4af',
              400: '#fb7185',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
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
      background: rgba(225, 29, 72, 0.3);
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(225, 29, 72, 0.6);
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="progressBar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 z-50 transition-all duration-150" style="width: 0%;"></div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 text-gray-500 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-400 text-sm font-medium transition" title="Trở về trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <span class="text-gray-300 dark:text-gray-700">|</span>
        <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
          <span class="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center text-sm shadow-sm">
            <i class="fa-solid fa-graduation-cap"></i>
          </span>
          <span class="text-base sm:text-lg tracking-tight">Code<span class="text-rose-600">Hub</span></span>
        </div>
        <span class="hidden md:inline px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
          Chuyên Đề Tin Học 12 - Tin Học Ứng Dụng (KNTT)
        </span>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Exam modal launch button -->
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition">
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
          <i class="fa-solid fa-list-ul text-rose-600"></i> Mục lục bài học
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
  <div class="bg-gradient-to-br from-rose-950 via-slate-950 to-pink-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-rose-900/40">
    <div class="max-w-7xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-4 border border-rose-500/30">
        <i class="fa-solid fa-circle-check text-rose-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 &mdash; Sách Chuyên đề học tập Tin học 12 KNTT</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
        Chuyên Đề Tin Học 12 &mdash; Tin Học Ứng Dụng (ICT)
      </h1>
      <p class="text-base sm:text-lg text-rose-200/90 max-w-3xl leading-relaxed mb-6">
        Làm chủ các năng lực số đỉnh cao chuẩn bị cho bậc Đại học và nghề nghiệp: Quản trị dự án khoa học với <strong>GanttProject</strong>, Quản trị hệ thống máy tính & Bảo đảm an toàn dữ liệu số (BitLocker, 3-2-1), Khai phá phân tích số liệu thống kê chuyên sâu với <strong>Excel Analytics</strong>.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-rose-900/30 border border-rose-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-book text-rose-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">16 Bài học</div>
            <div class="text-[11px] text-rose-300">Thực hành chuẩn SGK</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-rose-900/30 border border-rose-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-circle-question text-rose-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">64 Trắc nghiệm</div>
            <div class="text-[11px] text-rose-300">Chấm điểm tức thì</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-rose-900/30 border border-rose-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-chart-line text-rose-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">3 Mảng công nghệ</div>
            <div class="text-[11px] text-rose-300">PM, OS, Data Analytics</div>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-rose-900/30 border border-rose-800/40 flex items-center gap-2.5">
          <i class="fa-solid fa-briefcase text-rose-400 text-lg"></i>
          <div>
            <div class="font-bold text-white">1 Capstone Project</div>
            <div class="text-[11px] text-rose-300">Kế hoạch kinh doanh số</div>
          </div>
        </div>
      </div>

      <!-- Quick Topic Pills -->
      <div class="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-rose-900/50 text-xs">
        <span class="text-rose-300 font-semibold">Chuyển nhanh đến:</span>
        <a href="#chude-1" class="px-3 py-1 rounded-lg bg-rose-900/50 hover:bg-rose-800/60 text-rose-200 border border-rose-700/50 transition">
          <i class="fa-solid fa-diagram-project mr-1"></i> CĐ1: GanttProject (5 bài)
        </a>
        <a href="#chude-2" class="px-3 py-1 rounded-lg bg-rose-900/50 hover:bg-rose-800/60 text-rose-200 border border-rose-700/50 transition">
          <i class="fa-solid fa-shield-halved mr-1"></i> CĐ2: Hệ điều hành & Bảo vệ dữ liệu (4 bài)
        </a>
        <a href="#chude-3" class="px-3 py-1 rounded-lg bg-rose-900/50 hover:bg-rose-800/60 text-rose-200 border border-rose-700/50 transition">
          <i class="fa-solid fa-chart-pie mr-1"></i> CĐ3: Phân tích dữ liệu Excel (6 bài)
        </a>
        <a href="#chude-4" class="px-3 py-1 rounded-lg bg-rose-900/50 hover:bg-rose-800/60 text-rose-200 border border-rose-700/50 transition">
          <i class="fa-solid fa-briefcase mr-1"></i> Dự án Capstone (Bài 16)
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
                   class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-gray-100 placeholder-gray-400">
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
        <div class="mt-4 p-4 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-md">
          <div class="flex items-center gap-2 mb-2 font-bold text-sm">
            <i class="fa-solid fa-medal"></i>
            <span>Đánh giá toàn khóa</span>
          </div>
          <p class="text-xs text-rose-100 mb-3 leading-relaxed">
            10 câu hỏi tổng hợp kiến thức từ 4 chuyên đề thực hành số Tin học 12.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2 px-3 rounded-xl bg-white text-rose-700 hover:bg-rose-50 text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5">
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
          <span class="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 font-bold text-xs">
            Bài kiểm tra tổng hợp
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
            Đánh Giá Toàn Khóa: Chuyên Đề Tin Học 12 (ICT)
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
            1. Ba yếu tố ràng buộc cốt lõi cấu thành Tam giác Quản trị dự án (Project Management Triangle) là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="A" required class="text-rose-600">
              <span>A. Phạm vi (Scope), Thời gian (Time) và Chi phí (Cost)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="B" class="text-rose-600">
              <span>B. Bàn phím, Màn hình và Con chuột</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq1" value="C" class="text-rose-600">
              <span>C. Windows, Linux và macOS</span>
            </label>
          </div>
        </div>

        <!-- Q2 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            2. Trong phần mềm GanttProject, một Cột mốc (Milestone) có thời lượng thực thi bằng bao nhiêu?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="A" required class="text-rose-600">
              <span>A. Bằng 0 ngày (đánh dấu hoàn thành một mốc then chốt)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="B" class="text-rose-600">
              <span>B. Bắt buộc phải là 30 ngày</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq2" value="C" class="text-rose-600">
              <span>C. Bằng tổng thời gian của toàn dự án</span>
            </label>
          </div>
        </div>

        <!-- Q3 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            3. Đặc điểm sống còn của Đường găng (Critical Path) trong quản lý dự án là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="A" required class="text-rose-600">
              <span>A. Là chuỗi các công việc không có thời gian dự trữ; chậm bất kỳ công việc nào trên đường găng thì cả dự án bị chậm hạn tương ứng</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="B" class="text-rose-600">
              <span>B. Là đường đi ngắn nhất để xóa bỏ dự án</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq3" value="C" class="text-rose-600">
              <span>C. Chỉ gồm những công việc làm trong 1 giờ</span>
            </label>
          </div>
        </div>

        <!-- Q4 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            4. Chuẩn giao diện khởi động máy tính hiện đại thay thế BIOS, tương thích định dạng ổ đĩa GPT trên 2TB và có Secure Boot là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="A" required class="text-rose-600">
              <span>A. UEFI</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="B" class="text-rose-600">
              <span>B. MS-DOS</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq4" value="C" class="text-rose-600">
              <span>C. FAT32</span>
            </label>
          </div>
        </div>

        <!-- Q5 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            5. Quy tắc vàng sao lưu dữ liệu '3-2-1' chuẩn quốc tế quy định những điều kiện nào?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="A" required class="text-rose-600">
              <span>A. Giữ ít nhất 3 bản sao, trên 2 loại phương tiện lưu trữ vật lý khác nhau, và ít nhất 1 bản lưu tại địa điểm khác (Off-site/Cloud)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="B" class="text-rose-600">
              <span>B. Sao lưu 3 lần mỗi ngày, dùng 2 con chuột và 1 màn hình</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq5" value="C" class="text-rose-600">
              <span>C. Chỉ cần 3 người cùng nhớ 1 mật khẩu máy tính</span>
            </label>
          </div>
        </div>

        <!-- Q6 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            6. Công nghệ bảo mật tích hợp sẵn trong Windows giúp mã hóa toàn bộ ổ đĩa chống đọc trộm khi bị mất cắp vật lý là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="A" required class="text-rose-600">
              <span>A. BitLocker Drive Encryption</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="B" class="text-rose-600">
              <span>B. Windows Disk Defragmenter</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq6" value="C" class="text-rose-600">
              <span>C. Paint 3D</span>
            </label>
          </div>
        </div>

        <!-- Q7 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            7. Trong thống kê mô tả, khi tập dữ liệu xuất hiện các giá trị cực lớn đột biến (Outliers), đại lượng đo xu thế trung tâm nào phản ánh trung thực và khách quan nhất?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="A" required class="text-rose-600">
              <span>A. Số trung vị (Median)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="B" class="text-rose-600">
              <span>B. Số trung bình cộng (Mean)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq7" value="C" class="text-rose-600">
              <span>C. Giá trị lớn nhất (Max)</span>
            </label>
          </div>
        </div>

        <!-- Q8 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            8. Biểu đồ nào hiển thị trực quan 5 số tóm tắt (Min, Q1, Median, Q3, Max) và giúp phát hiện các điểm ngoại lai Outliers?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="A" required class="text-rose-600">
              <span>A. Biểu đồ Hộp và Râu (Box and Whisker)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="B" class="text-rose-600">
              <span>B. Biểu đồ hình tròn Pie Chart</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq8" value="C" class="text-rose-600">
              <span>C. Biểu đồ đường thẳng Line Chart</span>
            </label>
          </div>
        </div>

        <!-- Q9 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            9. Khi hệ số tương quan Pearson giữa hai biến số đạt giá trị r = -0.85, ta kết luận điều gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="A" required class="text-rose-600">
              <span>A. Có mối quan hệ tương quan nghịch tuyến tính rất mạnh (biến X tăng thì biến Y giảm rõ rệt)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="B" class="text-rose-600">
              <span>B. Hai biến hoàn toàn độc lập không liên quan gì nhau</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq9" value="C" class="text-rose-600">
              <span>C. Mối quan hệ tương quan thuận hoàn hảo</span>
            </label>
          </div>
        </div>

        <!-- Q10 -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
          <p class="font-bold text-gray-900 dark:text-white mb-2">
            10. Trong kiểm định T-Test so sánh 2 mẫu trong Excel, nếu tính ra giá trị P-value = 0.015 (< 0.05), quyết định khoa học đúng đắn là gì?
          </p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="A" required class="text-rose-600">
              <span>A. Bác bỏ giả thuyết không H₀ và kết luận có sự khác biệt có ý nghĩa thống kê giữa 2 nhóm</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="B" class="text-rose-600">
              <span>B. Chấp nhận H₀ vì P-value quá nhỏ</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="eq10" value="C" class="text-rose-600">
              <span>C. Phép tính bị sai do P-value không thể nhỏ hơn 1</span>
            </label>
          </div>
        </div>

        <div class="pt-4 flex items-center justify-end gap-3">
          <button type="button" onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Đóng lại
          </button>
          <button type="submit" class="px-6 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold transition shadow-sm">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </form>

      <!-- Exam Result Panel -->
      <div id="courseExamResult" class="hidden p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-rose-600 text-white flex items-center justify-center text-2xl shadow-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <h4 id="examScoreText" class="text-2xl font-black text-gray-900 dark:text-white"></h4>
        <p id="examCommentText" class="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto"></p>
        <button onclick="resetCourseExam()" class="mt-4 px-6 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold transition">
          Làm lại bài kiểm tra
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">
        CodeHub &bull; Chuyên Đề Học Tập Tin Học 12 &mdash; Định Hướng Tin Học Ứng Dụng (ICT)
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
        comment = 'Xuất sắc! Bạn nắm rất vững bộ kỹ năng quản trị dự án, an toàn hệ thống và phân tích số liệu Chuyên đề Tin học 12!';
      } else if (score >= 7) {
        comment = 'Rất tốt! Bạn hiểu sâu sắc các công cụ GanttProject, BitLocker và Excel Analytics.';
      } else if (score >= 5) {
        comment = 'Đạt yêu cầu. Hãy thực hành lập tiến độ và phân tích thống kê nhiều hơn để làm chủ kỹ năng nhé!';
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

console.log('Generating updated full page structure for Chuyên đề Tin học 12 ICT...');
const htmlContent = generateChuyenDeTin12Html();
const targetPath = path.join(__dirname, 'courses', 'chuyende_tinhoc_12_ict.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');

console.log('Build chuyende_tinhoc_12_ict.html completed successfully!');
console.log('Output file size:', fs.statSync(targetPath).size, 'bytes');
