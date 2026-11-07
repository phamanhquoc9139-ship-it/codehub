// scratch/build_diali12.js
// Build script for Geography Grade 12 (Kết Nối Tri Thức)
const fs = require('fs');
const path = require('path');

const data = require('./diali12_data.js');
const svgs = require('./diali12_svgs.js');

console.log('Compiling Geography Grade 12 course files...');

function formatInline(str) {
  if (!str) return '';
  return String(str)
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic text-teal-700 dark:text-teal-300 font-medium">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-teal-100/80 dark:bg-slate-700 text-teal-700 dark:text-teal-300 font-mono text-xs font-semibold">$1</code>');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 1. Sidebar HTML
const sidebarPartsHtml = data.parts.map(part => {
  const lessonLinks = part.lessons.map(num => {
    const l = data.lessons[num];
    if (!l) return '';
    return `
      <div class="sidebar-lesson-item flex items-center justify-between py-1 px-2 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition" data-lesson="${num}">
        <a href="#bai-${num}" class="sidebar-lesson-link flex items-center gap-2 truncate text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400">
          <span class="font-bold text-[11px] shrink-0 ${l.isPractical ? 'text-amber-600 dark:text-amber-400' : 'text-teal-600 dark:text-teal-400'}">B${num}.</span>
          <span class="truncate">${escapeHtml(l.title)}</span>
        </a>
        <input type="checkbox" id="sidebar-check-${num}" onchange="toggleDone(${num})" class="rounded text-teal-600 focus:ring-0 cursor-pointer ml-1.5 shrink-0" title="Đánh dấu đã học">
      </div>
    `;
  }).join('');

  return `
    <div class="sidebar-part-group mb-3">
      <div class="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100 py-1.5 px-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/70 mb-1 text-xs">
        <span class="flex items-center gap-2 truncate">
          <i class="fa-solid ${part.icon} text-teal-500 text-[11px]"></i>
          <span class="truncate">${escapeHtml(part.shortTitle)}</span>
        </span>
        <span class="text-[10px] text-slate-500 font-semibold shrink-0 ml-1">${part.lessons.length} bài</span>
      </div>
      <div class="pl-1.5 space-y-0.5 border-l-2 border-teal-300 dark:border-teal-800/60 ml-2">
        ${lessonLinks}
      </div>
    </div>
  `;
}).join('\n');

// 2. Part Overview Cards
const partCardsHtml = data.parts.map(part => `
  <a href="#phan-${part.id}" class="p-4 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-500 transition shadow-xs group">
    <div class="flex items-center gap-2.5 mb-2">
      <span class="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center text-sm group-hover:scale-110 transition">
        <i class="fa-solid ${part.icon}"></i>
      </span>
      <div>
        <h4 class="font-bold text-xs text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">${escapeHtml(part.shortTitle)}</h4>
        <span class="text-[10px] text-slate-400">${part.lessons.length} bài học</span>
      </div>
    </div>
    <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">${escapeHtml(part.desc)}</p>
  </a>
`).join('\n');

// 3. Render 35 Lessons
const lessonsHtml = [];
for (let num = 1; num <= 35; num++) {
  const l = data.lessons[num];
  if (!l) continue;

  const isPrac = l.isPractical;
  const badgeColor = isPrac ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800' : 'bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-800';
  const badgeText = isPrac ? 'THỰC HÀNH KĨ NĂNG' : 'LÍ THUYẾT CỐT LÕI';

  // Specific Diagram
  let diagramHtml = '';
  if (l.diagramKey && svgs[l.diagramKey]) {
    diagramHtml = `
      <div class="p-3 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 my-4 shadow-inner">
        <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
          <span class="font-bold text-teal-400 flex items-center gap-1.5">
            <i class="fa-solid fa-map-location-dot"></i> Lược đồ / Sơ đồ tư duy trực quan
          </span>
          <span>Địa lí 12 – Kết nối tri thức</span>
        </div>
        ${svgs[l.diagramKey]}
      </div>
    `;
  }

  // Bullet items rendering
  const bulletsHtml = l.bullets.map(b => {
    let cleanB = formatInline(b);
    return `
      <li class="flex items-start gap-3 text-xs sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose">
        <span class="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></span>
        <div class="flex-1">${cleanB}</div>
      </li>
    `;
  }).join('\n');

  // Quizzes HTML
  const lQuizzes = data.quizzes[num] || [];
  const quizHtml = lQuizzes.map((q, qi) => `
    <div class="quiz-card p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800" data-lesson="${num}" data-qindex="${qi}">
      <div class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-2.5 leading-relaxed">
        <span class="inline-block px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-[10px] font-black mr-1.5">Câu ${qi + 1}</span>
        ${escapeHtml(q.q)}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        ${q.options.map((opt, oi) => `
          <button type="button" onclick="checkLessonQuiz(${num}, ${qi}, ${oi}, ${q.answer})" id="qbtn-${num}-${qi}-${oi}" class="quiz-opt-btn text-left px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-400 dark:hover:border-teal-500 text-xs text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
            <span class="font-black text-slate-400 dark:text-slate-500 shrink-0">${String.fromCharCode(65 + oi)}.</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `).join('')}
      </div>
      <div id="qexp-${num}-${qi}" class="hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed border"></div>
    </div>
  `).join('\n');

  lessonsHtml.push(`
    <article id="bai-${num}" data-lesson-card="${num}" class="lesson-article scroll-mt-24 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
      <!-- Lesson Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-md text-[11px] font-black bg-teal-600 text-white shadow-2xs">BÀI ${num}</span>
            <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${badgeColor}">${badgeText}</span>
            <span class="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Phần ${l.partId}</span>
          </div>
          <h3 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            ${l.fullTitle}
          </h3>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button type="button" onclick="toggleBookmark(${num})" id="bm-btn-${num}" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1.5" title="Đánh dấu lưu bài">
            <span id="bm-icon-${num}">☆</span> <span class="hidden sm:inline">Lưu</span>
          </button>
          <button type="button" onclick="toggleDone(${num})" id="done-btn-${num}" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-teal-500 transition flex items-center gap-1.5">
            <span id="done-icon-${num}">○</span> <span>Đã học</span>
          </button>
        </div>
      </div>

      <!-- Diagram (if any) -->
      ${diagramHtml}

      <!-- Detailed Content Section -->
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
        <div class="flex items-center gap-2 text-xs font-bold text-teal-800 dark:text-teal-300 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <i class="fa-solid fa-book-open-reader"></i>
          <span>Hệ thống kiến thức trọng tâm bài học</span>
        </div>
        <ul class="space-y-2.5">
          ${bulletsHtml}
        </ul>
      </div>

      <!-- Interactive Mini Quiz -->
      <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-question text-teal-500"></i>
            <span>Luyện tập trắc nghiệm củng cố (3 câu)</span>
          </span>
          <span class="text-[11px] text-slate-400">Chọn đáp án đúng để kiểm tra kiến thức</span>
        </div>
        <div class="space-y-2.5">
          ${quizHtml}
        </div>
      </div>
    </article>
  `);
}

// 4. Build Complete Page HTML
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Địa Lí 12 – Tổng Hợp Đủ 35 Bài | Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Tài liệu số hóa trọn vẹn Địa lí 12 Kết nối tri thức với cuộc sống: Đủ 5 phần, 35 bài học, sơ đồ trực quan, máy tính công thức địa lí tương tác và đấu trường trắc nghiệm 45 phút." />

  <!-- Tailwind CSS & FontAwesome -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            teal: {
              50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
              400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
              800: '#115e59', 900: '#134e4a', 950: '#042f2e'
            },
            slate: {
              850: '#151f32',
              900: '#0f172a'
            }
          }
        }
      }
    };
  </script>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.4); border-radius: 9999px; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">

  <!-- TOP STICKY NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Back -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trở về trang chủ">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="diali_12.html" class="flex items-center gap-2.5">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-400 text-white flex items-center justify-center font-black text-sm shadow-sm">
            <i class="fa-solid fa-earth-asia"></i>
          </span>
          <div>
            <h1 class="text-sm font-black text-slate-900 dark:text-white leading-tight">ĐỊA LÍ 12</h1>
            <span class="text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider">Kết Nối Tri Thức</span>
          </div>
        </a>
      </div>

      <!-- Center: Search bar shortcut -->
      <div class="hidden md:flex flex-1 max-w-md mx-4">
        <button type="button" onclick="openModal('search-modal')" class="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700 transition">
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Tra cứu 35 bài học Địa lí 12...</span>
          </span>
          <kbd class="px-2 py-0.5 rounded bg-white dark:bg-slate-700 text-[10px] font-mono border border-slate-200 dark:border-slate-600">Ctrl K</kbd>
        </button>
      </div>

      <!-- Right: Action Tools & Theme Toggle -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <button type="button" onclick="openModal('formula-modal')" class="px-3 py-2 rounded-xl text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 transition flex items-center gap-1.5" title="Máy tính công thức địa lí">
          <i class="fa-solid fa-calculator"></i>
          <span class="hidden sm:inline">Công cụ tính</span>
        </button>
        <button type="button" onclick="openArenaModal()" class="px-3 py-2 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition flex items-center gap-1.5" title="Đấu trường trắc nghiệm 45 phút">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Đấu trường 45p</span>
        </button>
        <button type="button" id="theme-toggle" class="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Chuyển chế độ sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- BODY 12-COLUMN WRAPPER -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full flex gap-8 items-start">

    <!-- LEFT STICKY SIDEBAR (lg:w-80) -->
    <aside class="hidden lg:block w-80 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar pr-1">
      <div class="space-y-4">
        
        <!-- Progress Tracker Card -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-chart-line text-teal-500"></i> Tiến độ khóa học
            </span>
            <span id="progress-label" class="font-mono font-bold text-teal-600 dark:text-teal-400">0/35 bài (0%)</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
            <div id="progress-bar" class="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300" style="width: 0%;"></div>
          </div>
          <div class="flex items-center justify-between pt-1">
            <input type="text" id="sidebar-search" oninput="filterSidebar(this.value)" placeholder="Lọc bài học nhanh..." class="w-full text-xs px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-teal-500 text-slate-800 dark:text-slate-200" />
            <button type="button" onclick="toggleFilterSaved()" id="bm-filter-btn" class="ml-1.5 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 hover:bg-slate-50 dark:hover:bg-slate-800 shrink-0 transition" title="Lọc các bài đã lưu">
              <i class="fa-regular fa-star text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 5 Parts Accordion -->
        <nav class="space-y-2">
          ${sidebarPartsHtml}
        </nav>

        <!-- Sidebar Footer Quick Links -->
        <div class="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2 text-xs">
          <a href="#khai-thac-so-lieu" class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 font-semibold transition">
            <i class="fa-solid fa-compass text-teal-500"></i> Cách khai thác kiến thức & số liệu
          </a>
          <a href="#cong-thuc-dia-li" class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 font-semibold transition">
            <i class="fa-solid fa-calculator text-teal-500"></i> Bảng công thức & Thuật ngữ
          </a>
          <a href="#luu-y-so-lieu" class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 font-semibold transition">
            <i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Lưu ý cập nhật số liệu
          </a>
        </div>

      </div>
    </aside>

    <!-- RIGHT MAIN CONTENT (flex-1) -->
    <main class="flex-1 min-w-0 space-y-8">

      <!-- HERO OVERVIEW BANNER -->
      <section class="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white shadow-md relative overflow-hidden space-y-4">
        <div class="relative z-10 max-w-3xl space-y-3">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-black bg-white/20 text-teal-100 backdrop-blur-xs">
            BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
          </span>
          <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            ĐỊA LÍ 12 — TỔNG HỢP ĐỦ 35 BÀI THEO SGK
          </h2>
          <p class="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
            Hệ thống hóa toàn diện theo bản scan 179 trang: <strong>5 Phần • 35 Bài học • 8 Lược đồ vector SVG • Máy tính công thức địa lí • Đấu trường trắc nghiệm 45 phút</strong>. Trình bày giãn cách khoa học, rõ ràng từng ý, phục vụ học tập và ôn thi tốt nghiệp THPT.
          </p>
          <div class="flex flex-wrap gap-2 pt-2 text-xs font-bold">
            <span class="px-3 py-1 rounded-lg bg-black/30 backdrop-blur-xs"><i class="fa-solid fa-check text-emerald-400 mr-1.5"></i>Đủ 35 Bài học</span>
            <span class="px-3 py-1 rounded-lg bg-black/30 backdrop-blur-xs"><i class="fa-solid fa-check text-emerald-400 mr-1.5"></i>8 Sơ đồ SVG</span>
            <span class="px-3 py-1 rounded-lg bg-black/30 backdrop-blur-xs"><i class="fa-solid fa-check text-emerald-400 mr-1.5"></i>105 Câu hỏi trắc nghiệm</span>
            <span class="px-3 py-1 rounded-lg bg-black/30 backdrop-blur-xs"><i class="fa-solid fa-check text-emerald-400 mr-1.5"></i>Đấu trường 45 phút</span>
          </div>
        </div>

        <!-- 5 Parts Quick Cards Grid -->
        <div class="relative z-10 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${partCardsHtml}
        </div>
      </section>

      <!-- GUIDE: CÁCH KHAI THÁC KIẾN THỨC VÀ SỐ LIỆU -->
      <section id="khai-thac-so-lieu" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center text-sm">
            <i class="fa-solid fa-compass"></i>
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">CÁCH KHAI THÁC KIẾN THỨC VÀ SỐ LIỆU ĐỊA LÍ 12</h3>
            <span class="text-xs text-slate-400">4 nguyên tắc vàng khi làm bài thực hành, nhận xét biểu đồ và bảng số liệu</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div class="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/80 dark:border-teal-900/40 space-y-2">
            <div class="font-bold text-xs text-teal-900 dark:text-teal-200 flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px]">1</span>
              <span>Kĩ năng đọc bản đồ địa lí</span>
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Xác định tên bản đồ, phạm vi, chú giải, phương hướng và tỉ lệ; sau đó mới mô tả vị trí, phân bố, hướng tuyến hoặc mức độ tập trung. <strong>Luôn gắn phân bố với điều kiện tự nhiên, dân cư, hạ tầng và thị trường.</strong>
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-900/40 space-y-2">
            <div class="font-bold text-xs text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px]">2</span>
              <span>Kĩ năng nhận xét bảng &amp; biểu đồ</span>
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Nêu xu hướng chung trước; so sánh mốc đầu – cuối, cao – thấp, tăng – giảm, cơ cấu và chênh lệch; dẫn số liệu chứng minh. <strong>Giải thích bằng nguyên nhân thích hợp, không chỉ chép lại số liệu thuần túy.</strong>
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <div class="font-bold text-xs text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px]">3</span>
              <span>Lựa chọn dạng biểu đồ thích hợp</span>
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Cơ cấu:</strong> Dùng biểu đồ tròn (1–3 thời điểm), biểu đồ miền (chuỗi thời gian dài &gt; 4 năm), cột chồng; <strong>Quy mô &amp; Tốc độ:</strong> Dùng biểu đồ cột hoặc đường. Chọn đúng loại theo từ khóa đề bài.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-2">
            <div class="font-bold text-xs text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">4</span>
              <span>Tư duy phân tích địa lí sắc sảo</span>
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Phân biệt <strong>tăng quy mô</strong> với <strong>chuyển dịch cơ cấu</strong>; phân biệt <strong>tập trung</strong> với <strong>phân bố đồng đều</strong>; một thế mạnh chỉ trở thành lợi thế phát triển khi có tổ chức sản xuất, công nghệ và thị trường.
            </p>
          </div>

        </div>
      </section>

      <!-- 35 LESSON ARTICLES -->
      <section class="space-y-8">
        ${lessonsHtml.join('\n')}
      </section>

      <!-- FORMULAS & INTERACTIVE CALCULATOR -->
      <section id="cong-thuc-dia-li" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
        <div class="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center text-sm">
            <i class="fa-solid fa-calculator"></i>
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">THUẬT NGỮ &amp; CÔNG THỨC ĐỊA LÍ CẦN NHỚ</h3>
            <span class="text-xs text-slate-400">Các công thức tính toán địa lí kinh tế - xã hội phổ biến trong đề thi</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 class="font-bold text-xs text-teal-700 dark:text-teal-300">1. Mật độ dân số (người/km²)</h4>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800">
              Mật độ = Số dân / Diện tích (người/km²)
            </div>
            <div class="grid grid-cols-2 gap-2 pt-1 text-xs">
              <input type="number" id="calc-pop" placeholder="Số dân (người)" class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
              <input type="number" id="calc-area" placeholder="Diện tích (km²)" class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
            </div>
            <button type="button" onclick="calculateDensity()" class="w-full py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition">Tính mật độ dân số</button>
            <div id="res-density" class="text-xs font-bold text-teal-600 dark:text-teal-400"></div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 class="font-bold text-xs text-sky-700 dark:text-sky-300">2. Tỉ trọng cơ cấu (%)</h4>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800">
              Tỉ trọng = (Giá trị bộ phận / Tổng giá trị) × 100%
            </div>
            <div class="grid grid-cols-2 gap-2 pt-1 text-xs">
              <input type="number" id="calc-part" placeholder="Giá trị thành phần" class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
              <input type="number" id="calc-total" placeholder="Tổng giá trị" class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
            </div>
            <button type="button" onclick="calculateShare()" class="w-full py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition">Tính tỉ trọng (%)</button>
            <div id="res-share" class="text-xs font-bold text-sky-600 dark:text-sky-400"></div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 class="font-bold text-xs text-amber-700 dark:text-amber-300">3. Tốc độ tăng trưởng (%) (Năm gốc = 100%)</h4>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800">
              Tốc độ tăng = (Giá trị năm tính / Giá trị năm gốc) × 100%
            </div>
            <div class="grid grid-cols-2 gap-2 pt-1 text-xs">
              <input type="number" id="calc-val-cur" placeholder="Giá trị năm tính" class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
              <input type="number" id="calc-val-base" placeholder="Giá trị năm gốc" class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs" />
            </div>
            <button type="button" onclick="calculateGrowthRate()" class="w-full py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition">Tính tốc độ tăng trưởng (%)</button>
            <div id="res-growth" class="text-xs font-bold text-amber-600 dark:text-amber-400"></div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 class="font-bold text-xs text-indigo-700 dark:text-indigo-300">4. Mức tăng tuyệt đối &amp; Phát triển bền vững</h4>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800">
              Mức tăng tuyệt đối = Giá trị cuối kỳ – Giá trị đầu kỳ
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              <strong>Phát triển bền vững:</strong> Đáp ứng nhu cầu hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai; phối hợp hài hòa 3 trụ cột: <em>Kinh tế – Xã hội – Môi trường</em>.
            </p>
          </div>

        </div>
      </section>

      <!-- GUIDELINES & WEBSITE NOTES -->
      <section id="luu-y-so-lieu" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 shadow-sm space-y-3">
        <div class="flex items-center gap-2.5 text-amber-900 dark:text-amber-200 font-black text-sm sm:text-base">
          <i class="fa-solid fa-triangle-exclamation text-amber-500"></i>
          <span>LƯU Ý KHI ĐƯA NỘI DUNG LÊN WEBSITE &amp; CẬP NHẬT SỐ LIỆU</span>
        </div>
        <ul class="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          <li class="flex items-start gap-2">
            <span class="text-amber-500 font-bold">•</span>
            <span>Mỗi mục “Bài” trên trang đóng vai trò như một bài học hoàn chỉnh; các bài thực hành đã có đủ mục tiêu, nhiệm vụ, dữ liệu khai thác và sản phẩm đầu ra.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-amber-500 font-bold">•</span>
            <span>Số liệu trong SGK gắn liền với năm thống kê cụ thể (nhiều bảng và hình cập nhật đến <strong>năm 2024</strong>). Khi cập nhật năm mới, cần thay thế số liệu nhưng giữ nguyên phương pháp phân tích bản chất nhân - quả.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-amber-500 font-bold">•</span>
            <span>Bản tổng hợp là tài liệu học tập viết lại, không thay thế cho bản đồ, ảnh và bảng thống kê chi tiết trong SGK; đối với bài thực hành địa lí địa phương (Bài 35), người học chủ động thay số liệu tại tỉnh/thành phố mình sinh sống.</span>
          </li>
        </ul>
      </section>

    </main>

  </div>

  <!-- FOOTER -->
  <footer class="mt-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">ĐỊA LÍ 12 – KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</p>
      <p>Bản tổng hợp chuẩn 5 phần, 35 bài học • Hệ thống học liệu số hóa CodeHub Platform</p>
    </div>
  </footer>

  <!-- MODAL: TÌM KIẾM NHANH (Ctrl + K) -->
  <div id="search-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
    <div class="w-full max-w-xl bg-white dark:bg-slate-850 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
        <input type="text" id="global-search-input" oninput="runGlobalSearch(this.value)" placeholder="Nhập tên bài học, khái niệm địa lí (vùng biển, gió mùa, ĐBSCL...)..." class="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none" />
        <button type="button" onclick="closeModal('search-modal')" class="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500">ESC</button>
      </div>
      <div id="search-results-box" class="max-h-96 overflow-y-auto p-3 space-y-2 text-xs">
        <div class="text-center text-slate-400 py-6">Nhập từ khóa để tra cứu toàn diện 35 bài học Địa lí 12...</div>
      </div>
    </div>
  </div>

  <!-- MODAL: CÔNG CỤ TÍNH ĐỊA LÍ -->
  <div id="formula-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
    <div class="w-full max-w-2xl bg-white dark:bg-slate-850 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden max-h-[90vh] flex flex-col">
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div class="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
          <i class="fa-solid fa-calculator text-teal-500"></i> Sổ tay công thức &amp; Máy tính địa lí
        </div>
        <button type="button" onclick="closeModal('formula-modal')" class="text-slate-400 hover:text-slate-600 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto space-y-4 text-xs">
        <div class="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-1">
          <div class="font-bold text-teal-800 dark:text-teal-200">Mật độ dân số = Số dân / Diện tích (người/km²)</div>
          <div class="text-slate-600 dark:text-slate-400">Phản ánh mật độ phân bố dân cư. Chú ý đổi cùng đơn vị diện tích (km²).</div>
        </div>
        <div class="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 space-y-1">
          <div class="font-bold text-sky-800 dark:text-sky-200">Tỉ trọng (%) = (Giá trị bộ phận / Tổng giá trị) × 100%</div>
          <div class="text-slate-600 dark:text-slate-400">Tổng các tỉ trọng thành phần luôn phải bằng đúng 100,0%.</div>
        </div>
        <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1">
          <div class="font-bold text-amber-800 dark:text-amber-200">Tốc độ tăng trưởng (%) = (Năm sau / Năm gốc) × 100%</div>
          <div class="text-slate-600 dark:text-slate-400">Năm gốc luôn quy ước bằng 100,0%. Dùng để vẽ biểu đồ đường tốc độ.</div>
        </div>
        <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1">
          <div class="font-bold text-indigo-800 dark:text-indigo-200">Cán cân thương mại = Kim ngạch xuất khẩu – Kim ngạch nhập khẩu</div>
          <div class="text-slate-600 dark:text-slate-400">Dương: Xuất siêu; Âm: Nhập siêu.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: ĐẤU TRƯỜNG TRẠNG NGUYÊN (45 PHÚT) -->
  <div id="arena-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-sm">
    <div class="w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-950/40 to-slate-900">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center text-sm font-black shadow-sm">
            <i class="fa-solid fa-trophy"></i>
          </span>
          <div>
            <h3 class="font-black text-sm sm:text-base text-white">ĐẤU TRƯỜNG TRẠNG NGUYÊN ĐỊA LÍ 12</h3>
            <span class="text-[11px] text-amber-400 font-semibold">Bộ đề 20 câu tổng hợp • Thời gian 45:00</span>
          </div>
        </div>
        <button type="button" onclick="closeArenaModal()" class="text-slate-400 hover:text-white transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Start Screen -->
      <div id="arena-start-screen" class="p-8 text-center space-y-4 my-auto">
        <div class="w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl mx-auto border border-amber-500/20">
          <i class="fa-solid fa-stopwatch"></i>
        </div>
        <h4 class="text-lg font-bold text-white">Sẵn sàng kiểm tra năng lực Địa lí 12?</h4>
        <p class="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
          Đề thi gồm 20 câu hỏi trắc nghiệm bao quát đủ 5 phần (Tự nhiên, Dân cư, Các ngành, Các vùng kinh tế và Biển đảo). Hệ thống tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.
        </p>
        <button type="button" onclick="startArenaQuiz()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 transition">
          Bắt đầu thi ngay (45:00)
        </button>
      </div>

      <!-- Questions List Container (Scrollable) -->
      <div id="arena-questions-container" class="hidden flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 custom-scrollbar">
        <!-- Rendered by JS -->
      </div>

      <!-- Arena Footer with Timer & Submit -->
      <div id="arena-footer" class="hidden p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
        <div class="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
          <i class="fa-solid fa-clock"></i>
          <span>Thời gian còn lại:</span>
          <span id="arena-timer-display" class="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800 text-amber-300">45:00</span>
        </div>
        <button type="button" onclick="submitArenaExam()" id="arena-submit-btn" class="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs transition">
          Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- CLIENT-SIDE SCRIPTS -->
  <script>
    // 1. Lessons Index Data
    const LESSONS_INDEX = ${JSON.stringify(Object.values(data.lessons).map(l => ({ num: l.num, title: l.title, fullTitle: l.fullTitle, partId: l.partId })))};
    const ARENA_BANK = ${JSON.stringify(data.examQuestions)};

    // 2. Progress & Bookmark Tracking (localStorage)
    const STORAGE_KEY_DONE = 'diali12_done_lessons';
    const STORAGE_KEY_SAVED = 'diali12_saved_lessons';

    function getDoneLessons() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY_DONE)) || []; } catch(e) { return []; }
    }
    function getSavedLessons() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY_SAVED)) || []; } catch(e) { return []; }
    }

    function syncProgressUI() {
      const done = getDoneLessons();
      const saved = getSavedLessons();
      const total = 35;
      const pct = Math.round((done.length / total) * 100);

      const pBar = document.getElementById('progress-bar');
      const pLabel = document.getElementById('progress-label');
      if (pBar) pBar.style.width = pct + '%';
      if (pLabel) pLabel.textContent = done.length + '/' + total + ' bài (' + pct + '%)';

      // Update checkboxes & buttons
      for (let i = 1; i <= total; i++) {
        const isDone = done.includes(i);
        const isSaved = saved.includes(i);

        const sCheck = document.getElementById('sidebar-check-' + i);
        if (sCheck) sCheck.checked = isDone;

        const dBtn = document.getElementById('done-btn-' + i);
        const dIcon = document.getElementById('done-icon-' + i);
        if (dBtn && dIcon) {
          if (isDone) {
            dBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 transition flex items-center gap-1.5';
            dIcon.textContent = '✓';
          } else {
            dBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-teal-500 transition flex items-center gap-1.5';
            dIcon.textContent = '○';
          }
        }

        const bBtn = document.getElementById('bm-btn-' + i);
        const bIcon = document.getElementById('bm-icon-' + i);
        if (bBtn && bIcon) {
          if (isSaved) {
            bBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-400 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 transition flex items-center gap-1.5';
            bIcon.textContent = '★';
          } else {
            bBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1.5';
            bIcon.textContent = '☆';
          }
        }
      }
    }

    function toggleDone(num) {
      let done = getDoneLessons();
      if (done.includes(num)) {
        done = done.filter(x => x !== num);
      } else {
        done.push(num);
      }
      localStorage.setItem(STORAGE_KEY_DONE, JSON.stringify(done));
      syncProgressUI();
    }

    function toggleBookmark(num) {
      let saved = getSavedLessons();
      if (saved.includes(num)) {
        saved = saved.filter(x => x !== num);
      } else {
        saved.push(num);
      }
      localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(saved));
      syncProgressUI();
    }

    // 3. Filter Bookmarked Lessons
    let filterSavedActive = false;
    function toggleFilterSaved() {
      filterSavedActive = !filterSavedActive;
      const btn = document.getElementById('bm-filter-btn');
      if (btn) {
        if (filterSavedActive) {
          btn.className = 'ml-1.5 p-1.5 rounded-lg border border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-500 shrink-0 transition';
        } else {
          btn.className = 'ml-1.5 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 hover:bg-slate-50 dark:hover:bg-slate-800 shrink-0 transition';
        }
      }
      const saved = getSavedLessons();
      document.querySelectorAll('.sidebar-lesson-item').forEach(el => {
        const id = parseInt(el.getAttribute('data-lesson'));
        if (filterSavedActive && !saved.includes(id)) {
          el.style.display = 'none';
        } else {
          el.style.display = 'flex';
        }
      });
    }

    // 4. Sidebar Instant Search
    function filterSidebar(query) {
      const q = query.trim().toLowerCase();
      document.querySelectorAll('.sidebar-lesson-item').forEach(el => {
        const text = el.textContent.toLowerCase();
        el.style.display = (!q || text.includes(q)) ? 'flex' : 'none';
      });
    }

    // 5. Mini Quiz Checker
    function checkLessonQuiz(lessonNum, qIdx, selectedOpt, correctOpt) {
      const card = document.querySelector(\`[data-lesson="\${lessonNum}"][data-qindex="\${qIdx}"]\`);
      if (!card) return;
      const btns = card.querySelectorAll('.quiz-opt-btn');
      const exp = document.getElementById(\`qexp-\${lessonNum}-\${qIdx}\`);

      btns.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctOpt) {
          b.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 flex items-start gap-2';
        } else if (idx === selectedOpt && selectedOpt !== correctOpt) {
          b.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border text-xs font-semibold bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-200 flex items-start gap-2';
        } else {
          b.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-400 opacity-60 flex items-start gap-2';
        }
      });

      if (exp) {
        exp.classList.remove('hidden');
        if (selectedOpt === correctOpt) {
          exp.className = 'mt-2.5 p-2.5 rounded-lg text-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          exp.innerHTML = '<strong>Chính xác!</strong> Bạn đã chọn đúng.';
        } else {
          exp.className = 'mt-2.5 p-2.5 rounded-lg text-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          exp.innerHTML = \`<strong>Chưa chính xác!</strong> Đáp án đúng là <strong>\${String.fromCharCode(65 + correctOpt)}</strong>.\`;
        }
      }
    }

    // 6. Modals
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.remove('hidden');
      if (id === 'search-modal') {
        const inp = document.getElementById('global-search-input');
        if (inp) { inp.value = ''; inp.focus(); runGlobalSearch(''); }
      }
    }
    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('search-modal');
      }
      if (e.key === 'Escape') {
        closeModal('search-modal');
        closeModal('formula-modal');
        closeArenaModal();
      }
    });

    // 7. Global Search (Ctrl + K)
    function runGlobalSearch(query) {
      const q = query.trim().toLowerCase();
      const box = document.getElementById('search-results-box');
      if (!box) return;

      if (!q) {
        box.innerHTML = '<div class="text-center text-slate-400 py-6">Nhập từ khóa để tra cứu 35 bài học Địa lí 12...</div>';
        return;
      }

      const matches = LESSONS_INDEX.filter(l => 
        l.title.toLowerCase().includes(q) || 
        l.fullTitle.toLowerCase().includes(q) ||
        (\`bài \${l.num}\`).includes(q)
      );

      if (matches.length === 0) {
        box.innerHTML = \`<div class="text-center text-slate-400 py-6">Không tìm thấy bài học nào phù hợp với "\${query}"</div>\`;
        return;
      }

      box.innerHTML = matches.map(m => \`
        <a href="#bai-\${m.num}" onclick="closeModal('search-modal')" class="block p-3 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 transition">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 font-bold text-[10px]">Bài \${m.num}</span>
            <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">\${m.fullTitle}</span>
          </div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400">Phần \${m.partId} • Bấm để xem chi tiết</div>
        </a>
      \`).join('');
    }

    // 8. Interactive Geography Calculators
    function calculateDensity() {
      const pop = parseFloat(document.getElementById('calc-pop').value);
      const area = parseFloat(document.getElementById('calc-area').value);
      const res = document.getElementById('res-density');
      if (!pop || !area || area <= 0) {
        res.textContent = 'Vui lòng nhập số dân và diện tích hợp lệ (&gt; 0).';
        return;
      }
      const val = (pop / area).toFixed(1);
      res.textContent = \`Kết quả: \${val} người/km²\`;
    }

    function calculateShare() {
      const part = parseFloat(document.getElementById('calc-part').value);
      const total = parseFloat(document.getElementById('calc-total').value);
      const res = document.getElementById('res-share');
      if (isNaN(part) || !total || total <= 0) {
        res.textContent = 'Vui lòng nhập giá trị thành phần và tổng hợp lệ.';
        return;
      }
      const val = ((part / total) * 100).toFixed(2);
      res.textContent = \`Kết quả: \${val}%\`;
    }

    function calculateGrowthRate() {
      const cur = parseFloat(document.getElementById('calc-val-cur').value);
      const base = parseFloat(document.getElementById('calc-val-base').value);
      const res = document.getElementById('res-growth');
      if (isNaN(cur) || !base || base <= 0) {
        res.textContent = 'Vui lòng nhập giá trị năm tính và năm gốc hợp lệ.';
        return;
      }
      const val = ((cur / base) * 100).toFixed(1);
      res.textContent = \`Kết quả: \${val}% (Năm gốc = 100%)\`;
    }

    // 9. Arena Exam (45:00)
    let arenaTimer = null;
    let arenaSeconds = 45 * 60;
    const arenaAnswers = {};

    function openArenaModal() {
      document.getElementById('arena-modal').classList.remove('hidden');
    }
    function closeArenaModal() {
      document.getElementById('arena-modal').classList.add('hidden');
    }

    function startArenaQuiz() {
      document.getElementById('arena-start-screen').classList.add('hidden');
      document.getElementById('arena-questions-container').classList.remove('hidden');
      document.getElementById('arena-footer').classList.remove('hidden');

      const container = document.getElementById('arena-questions-container');
      container.innerHTML = ARENA_BANK.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <div class="flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">\${idx + 1}</span>
            <div class="font-bold text-xs sm:text-sm text-slate-100 leading-relaxed">\${q.q}</div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            \${q.options.map((opt, oi) => \`
              <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer text-xs transition text-slate-200">
                <input type="radio" name="arena_q_\${q.id}" value="\${oi}" onchange="selectArenaOption(\${q.id}, \${oi})" class="text-teal-500 focus:ring-0">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="arena-explain-\${q.id}" class="hidden pt-2 text-xs text-amber-300 border-t border-white/10">
            <strong>Đáp án:</strong> \${q.options[q.answer]}<br>
            <strong>Giải thích:</strong> \${q.explain}
          </div>
        </div>
      \`).join('');

      arenaSeconds = 45 * 60;
      clearInterval(arenaTimer);
      arenaTimer = setInterval(() => {
        arenaSeconds--;
        const mins = String(Math.floor(arenaSeconds / 60)).padStart(2, '0');
        const secs = String(arenaSeconds % 60).padStart(2, '0');
        const disp = document.getElementById('arena-timer-display');
        if (disp) disp.textContent = \`\${mins}:\${secs}\`;
        if (arenaSeconds <= 0) {
          clearInterval(arenaTimer);
          submitArenaExam();
        }
      }, 1000);
    }

    function selectArenaOption(qId, optIdx) {
      arenaAnswers[qId] = optIdx;
    }

    function submitArenaExam() {
      clearInterval(arenaTimer);
      let correctCount = 0;
      ARENA_BANK.forEach(q => {
        const chosen = arenaAnswers[q.id];
        if (chosen === q.answer) correctCount++;
        const exp = document.getElementById(\`arena-explain-\${q.id}\`);
        if (exp) exp.classList.remove('hidden');
      });

      const score = (correctCount / ARENA_BANK.length * 10).toFixed(1);
      const btn = document.getElementById('arena-submit-btn');
      if (btn) {
        btn.disabled = true;
        btn.textContent = \`Điểm của bạn: \${score}/10 (\${correctCount}/\${ARENA_BANK.length} câu đúng)\`;
        btn.className = 'px-5 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-lg';
      }
    }

    // 10. Dark Mode
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-sm text-slate-500';
      }
    }
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        applyTheme(isDark);
      });
    }

    // Init
    document.addEventListener('DOMContentLoaded', () => {
      syncProgressUI();
    });
  </script>
</body>
</html>
`;

// Save to all 4 aliases
const baseDir = path.resolve(__dirname, '..');
const targetFiles = [
  path.join(baseDir, 'courses/diali_12.html'),
  path.join(baseDir, 'courses/diali12.html'),
  path.join(baseDir, 'courses/dia_12.html'),
  path.join(baseDir, 'courses/dia12.html')
];

targetFiles.forEach(file => {
  fs.writeFileSync(file, fullHtml, 'utf8');
  console.log(`Saved: ${file} Size: ${Buffer.byteLength(fullHtml, 'utf8')} bytes`);
});

console.log('Build complete! Geography Grade 12 compiled successfully across all 4 alias paths!');
