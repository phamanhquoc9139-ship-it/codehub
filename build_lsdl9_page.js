const fs = require('fs');
const { generateSVG } = require('./lsdl9_svgs.js');

const histData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_history_data.json', 'utf8'));
const geoData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_geo_data.json', 'utf8'));
const topicData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_topic_data.json', 'utf8'));
const examData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_exam_data.json', 'utf8'));

// Skills data from prompt
const skillsContent = `
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 flex items-center justify-center font-bold text-lg mb-3">🗺️</div>
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Đọc bản đồ / lược đồ Địa lí</h3>
    <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
      <li>Xác định mục đích: xem tên bản đồ, tỉ lệ, hướng Bắc, năm xuất bản.</li>
      <li>Tra cứu bảng chú giải: nhận diện kí hiệu điểm, đường, diện tích và quy ước màu sắc.</li>
      <li>Khai thác thông tin: đọc ranh giới vùng, hướng dòng chảy, mật độ phân bố dân cư, khoáng sản.</li>
      <li>Kết hợp so sánh: đối chiếu lược đồ tự nhiên với kinh tế để giải thích nguyên nhân phân bố.</li>
    </ul>
  </div>
  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center font-bold text-lg mb-3">📊</div>
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Phân tích bảng số liệu & biểu đồ</h3>
    <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
      <li>Đọc tiêu đề, đơn vị đo (triệu người, %, nghìn tấn, tỉ USD) và mốc thời gian.</li>
      <li>Phân tích độ lớn: tìm giá trị cao nhất, thấp nhất, tính khoảng chênh lệch hoặc gấp bao nhiêu lần.</li>
      <li>Phân tích xu hướng: xác định tăng liên tục, giảm hay biến động qua các năm.</li>
      <li>Nhận xét cơ cấu: tỉ trọng từng ngành/vùng trong tổng số và hướng chuyển dịch.</li>
    </ul>
  </div>
  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 flex items-center justify-center font-bold text-lg mb-3">📜</div>
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Khai thác tư liệu Lịch sử</h3>
    <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
      <li>Xác thực nguồn: tác giả, hoàn cảnh ra đời, loại hình tư liệu (gốc, chữ viết, hình ảnh, hồi kí).</li>
      <li>Hiểu nội dung: bối cảnh lịch sử, từ ngữ mang tính thời đại và mục đích của tư liệu.</li>
      <li>Rút ra thông điệp: tư liệu chứng minh cho sự kiện, đường lối hay ý nghĩa lịch sử nào.</li>
      <li>Đánh giá khách quan: đặt sự kiện trong không gian - thời gian cụ thể của thời đại.</li>
    </ul>
  </div>
</div>
`;

// Helper to render quick quiz for lesson
function renderLessonQuiz(lessonId, quizList) {
  if (!quizList || quizList.length === 0) return '';
  
  return `
    <div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
          <span>📝</span> BÀI TẬP CỦNG CỐ NHANH (${quizList.length} CÂU)
        </h4>
        <span class="text-[11px] text-slate-500 font-medium">Bấm chọn đáp án để kiểm tra kết quả ngay</span>
      </div>
      <div class="space-y-4">
        ${quizList.map((qItem, qIdx) => `
          <div class="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80" id="quiz-${lessonId}-${qIdx}">
            <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2.5 flex items-start gap-2">
              <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold mt-0.5 flex-shrink-0">Câu ${qIdx + 1}</span>
              <span class="flex-1">${escapeHtml(qItem.q)}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${qItem.options.map((opt, optIdx) => `
                <button type="button" 
                  onclick="checkLessonQuiz('${lessonId}', ${qIdx}, ${optIdx}, ${qItem.ans})"
                  class="quiz-btn-${lessonId}-${qIdx} text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 transition flex items-start gap-2">
                  <span class="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">${['A','B','C','D'][optIdx]}</span>
                  <span class="flex-1">${escapeHtml(opt)}</span>
                </button>
              `).join('')}
            </div>
            <div id="expl-${lessonId}-${qIdx}" class="hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Generate History Lessons HTML
const histCardsHtml = histData.map(l => {
  const svg = generateSVG('hist', l.num, l.title);
  return `
    <article class="lesson-card filter-hist rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-md transition scroll-mt-24" id="${l.id}" data-category="hist" data-search="${escapeHtml(l.title)} ${escapeHtml(l.chapter)}">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
          ${escapeHtml(l.chapter)}
        </span>
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
          Bài ${l.num} • Lịch sử 9
        </span>
      </div>
      
      <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
        Bài ${l.num}. ${escapeHtml(l.title)}
      </h3>

      <!-- Vector SVG Diagram -->
      <div class="my-3">
        ${svg}
      </div>

      <!-- Core Knowledge -->
      <div class="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        ${l.lines.map(line => `
          <div class="flex items-start gap-2.5">
            <span class="text-blue-500 font-bold mt-0.5">•</span>
            <div class="flex-1">${escapeHtml(line)}</div>
          </div>
        `).join('')}
      </div>

      <!-- Lesson Quiz -->
      ${renderLessonQuiz(l.id, l.quiz)}
    </article>
  `;
}).join('\n');

// Generate Geography Lessons HTML
const geoCardsHtml = geoData.map(l => {
  const svg = generateSVG('geo', l.num, l.title);
  return `
    <article class="lesson-card filter-geo rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-md transition scroll-mt-24" id="${l.id}" data-category="geo" data-search="${escapeHtml(l.title)} ${escapeHtml(l.chapter)}">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
          ${escapeHtml(l.chapter)}
        </span>
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
          Bài ${l.num} • Địa lí 9 (${l.dataYear})
        </span>
      </div>
      
      <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
        Bài ${l.num}. ${escapeHtml(l.title)}
      </h3>

      <!-- Vector SVG Diagram -->
      <div class="my-3">
        ${svg}
      </div>

      <!-- Core Knowledge -->
      <div class="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        ${l.lines.map(line => `
          <div class="flex items-start gap-2.5">
            <span class="text-emerald-500 font-bold mt-0.5">•</span>
            <div class="flex-1">${escapeHtml(line)}</div>
          </div>
        `).join('')}
      </div>

      <!-- Lesson Quiz -->
      ${renderLessonQuiz(l.id, l.quiz)}
    </article>
  `;
}).join('\n');

// Generate Topics HTML
const topicCardsHtml = topicData.map(l => {
  const svg = generateSVG('topic', l.num, l.title);
  return `
    <article class="lesson-card filter-topic rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-md transition scroll-mt-24" id="${l.id}" data-category="topic" data-search="${escapeHtml(l.title)} ${escapeHtml(l.badge)}">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
          ${escapeHtml(l.badge)}
        </span>
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
          Chủ đề liên môn Sử - Địa
        </span>
      </div>
      
      <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
        Chủ đề ${l.num}. ${escapeHtml(l.title)}
      </h3>

      <!-- Vector SVG Diagram -->
      <div class="my-3">
        ${svg}
      </div>

      <!-- Core Knowledge -->
      <div class="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        ${l.lines.map(line => `
          <div class="flex items-start gap-2.5">
            <span class="text-purple-500 font-bold mt-0.5">•</span>
            <div class="flex-1">${escapeHtml(line)}</div>
          </div>
        `).join('')}
      </div>

      <!-- Lesson Quiz -->
      ${renderLessonQuiz(l.id, l.quiz)}
    </article>
  `;
}).join('\n');

// Build Full HTML
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lịch sử và Địa lí 9 | SGK Kết nối tri thức với cuộc sống</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eef2ff',
              100: '#e0e7ff',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca'
            }
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    h1, h2, h3, h4, .font-heading {
      font-family: 'Space Grotesk', sans-serif;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- TOP NAV BAR -->
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          <span class="text-xs sm:text-sm font-semibold hidden sm:inline">Trang chủ</span>
        </a>
        <div class="h-5 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">9</span>
          <span class="text-sm font-bold tracking-tight text-slate-900 dark:text-white">Lịch sử &amp; Địa lí 9</span>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button onclick="toggleAudio()" id="audioBtn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
          <span id="audioIcon">🔊</span>
          <span class="hidden md:inline" id="audioLabel">Nghe trợ giảng</span>
        </button>

        <a href="#trang-nguyen-exam" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-sm shadow-indigo-500/20">
          <span>🏆</span>
          <span class="hidden sm:inline">Thi Trạng Nguyên (60p)</span>
        </a>

        <button onclick="toggleDarkMode()" class="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện">
          <svg id="themeIconSun" class="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          <svg id="themeIconMoon" class="w-4 h-4 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="relative overflow-hidden pt-8 pb-10 bg-gradient-to-b from-indigo-500/10 via-emerald-500/5 to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="max-w-3xl">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Bộ sách Kết nối tri thức với cuộc sống</span>
            <span class="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Cập nhật số liệu 2024 & Địa giới 2025</span>
            <span class="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">45 Mô-đun Kiến thức & Học liệu số</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            LỊCH SỬ VÀ ĐỊA LÍ 9
          </h1>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Hệ thống hóa toàn bộ 7 chương Lịch sử (21 bài), 3 chương Địa lí (21 bài) và 3 Chủ đề chung theo Chương trình GDPT 2018. Tích hợp sơ đồ vector độc quyền từng bài, bài tập củng cố tương tác tức thì và kỳ thi Trạng Nguyên 60:00 sẵn sàng chuyển cấp vào lớp 10.
          </p>
        </div>

        <!-- Quick Summary Cards -->
        <div class="grid grid-cols-3 gap-3 w-full lg:w-auto flex-shrink-0">
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div class="text-xl font-extrabold text-blue-600 dark:text-blue-400">21</div>
            <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Bài Lịch sử</div>
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div class="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">21</div>
            <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Bài Địa lí</div>
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div class="text-xl font-extrabold text-purple-600 dark:text-purple-400">3</div>
            <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Chủ đề chung</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STICKY FILTER & SEARCH TOOLBAR -->
  <section class="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <!-- Tabs -->
        <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1 sm:pb-0">
          <button onclick="setFilter('all')" id="tab-all" class="filter-tab px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition bg-slate-900 text-white dark:bg-white dark:text-slate-900">
            Tất cả (45)
          </button>
          <button onclick="setFilter('hist')" id="tab-hist" class="filter-tab px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
            Lịch sử 9 (21 bài)
          </button>
          <button onclick="setFilter('geo')" id="tab-geo" class="filter-tab px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
            Địa lí 9 (21 bài)
          </button>
          <button onclick="setFilter('topic')" id="tab-topic" class="filter-tab px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
            Chủ đề chung &amp; Kĩ năng (3)
          </button>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full sm:w-72 flex-shrink-0">
          <input type="text" id="searchInput" oninput="handleSearch()" placeholder="Tìm kiếm bài học, mốc sự kiện..." class="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <svg class="w-4 h-4 absolute left-3 top-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN LESSON LIST -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    
    <!-- Lịch sử section -->
    <div id="section-hist" class="space-y-6">
      <div class="flex items-center gap-3">
        <div class="h-6 w-2 rounded-full bg-blue-600"></div>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">PHẦN I. LỊCH SỬ THẾ GIỚI &amp; VIỆT NAM (21 BÀI)</h2>
      </div>
      <div class="grid grid-cols-1 gap-6">
        ${histCardsHtml}
      </div>
    </div>

    <!-- Địa lí section -->
    <div id="section-geo" class="space-y-6 pt-6">
      <div class="flex items-center gap-3">
        <div class="h-6 w-2 rounded-full bg-emerald-600"></div>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">PHẦN II. ĐỊA LÍ DÂN CƯ, KINH TẾ &amp; VÙNG KINH TẾ VIỆT NAM (21 BÀI)</h2>
      </div>
      <div class="grid grid-cols-1 gap-6">
        ${geoCardsHtml}
      </div>
    </div>

    <!-- Chủ đề chung section -->
    <div id="section-topic" class="space-y-6 pt-6">
      <div class="flex items-center gap-3">
        <div class="h-6 w-2 rounded-full bg-purple-600"></div>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">PHẦN III. CHỦ ĐỀ CHUNG &amp; KĨ NĂNG THỰC HÀNH</h2>
      </div>
      <div class="grid grid-cols-1 gap-6">
        ${topicCardsHtml}
      </div>

      <!-- Kĩ năng Địa lí và Lịch sử -->
      <div class="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span>🛠️</span> KĨ NĂNG ĐỊA LÍ VÀ KHAI THÁC TƯ LIỆU LỊCH SỬ
        </h3>
        ${skillsContent}
      </div>
    </div>

    <!-- TRẠNG NGUYÊN EXAM SECTION -->
    <section id="trang-nguyen-exam" class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 scroll-mt-24">
      <div class="rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white p-6 sm:p-10 shadow-xl border border-indigo-500/30">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 mb-3">
              <span>🏆</span> KỲ THI TRẠNG NGUYÊN LỊCH SỬ &amp; ĐỊA LÍ 9
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white">ĐỀ THI TỔNG HỢP KIẾN THỨC CỐT LÕI (30 CÂU)</h2>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Cấu trúc 15 câu Lịch sử + 15 câu Địa lí &amp; Chủ đề chung • Thời gian làm bài: 60 phút</p>
          </div>

          <!-- Timer & Action -->
          <div class="flex items-center gap-4 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
            <div class="text-center px-2">
              <div class="text-[11px] font-bold text-slate-400 uppercase">Thời gian</div>
              <div id="examTimer" class="text-2xl font-black font-mono text-amber-400 tracking-wider">60:00</div>
            </div>
            <button onclick="startExam()" id="btnStartExam" class="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wide transition shadow-md shadow-amber-400/20">
              Bắt đầu làm bài
            </button>
            <button onclick="submitExam()" id="btnSubmitExam" class="hidden px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wide transition">
              Nộp bài
            </button>
          </div>
        </div>

        <!-- Exam Result Dashboard (hidden initially) -->
        <div id="examScoreboard" class="hidden my-6 p-6 rounded-2xl bg-slate-800/90 border border-slate-700 text-center space-y-3">
          <div class="text-3xl font-black text-amber-400" id="finalScoreText">10.0 / 10</div>
          <div class="text-sm font-semibold text-slate-200" id="finalRatingText">XUẤT SẮC - ĐẠT DANH HIỆU TRẠNG NGUYÊN</div>
          <p class="text-xs text-slate-400 max-w-md mx-auto" id="finalFeedbackText"></p>
          <button onclick="resetExam()" class="mt-3 px-4 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white transition">
            Làm lại bài thi
          </button>
        </div>

        <!-- Questions List Container -->
        <div id="examContainer" class="mt-8 space-y-6">
          ${examData.map((item, idx) => `
            <div class="exam-question-item p-4 sm:p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80" data-idx="${idx}" data-ans="${item.ans}">
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="px-2.5 py-0.5 rounded text-[11px] font-bold ${item.subject === 'Lịch sử' ? 'bg-blue-900 text-blue-300' : 'bg-emerald-900 text-emerald-300'}">
                  ${item.subject} • Câu ${idx + 1}
                </span>
              </div>
              <p class="text-sm sm:text-base font-semibold text-white mb-3">
                ${escapeHtml(item.q)}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${item.options.map((opt, oIdx) => `
                  <label class="exam-option flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 cursor-pointer transition">
                    <input type="radio" name="exam_q_${idx}" value="${oIdx}" class="mt-1 text-indigo-500 focus:ring-0">
                    <span class="text-xs sm:text-sm text-slate-300 leading-relaxed"><strong class="text-amber-400 mr-1">${['A','B','C','D'][oIdx]}.</strong> ${escapeHtml(opt)}</span>
                  </label>
                `).join('')}
              </div>
              <div id="exam-expl-${idx}" class="hidden mt-3 p-3 rounded-xl text-xs leading-relaxed bg-slate-900/90 border border-slate-700 text-slate-300">
                <strong class="text-amber-400">Giải thích:</strong> ${escapeHtml(item.expl)}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="mt-16 py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">NỀN TẢNG HỌC LIỆU SỐ TRỰC QUAN • LỊCH SỬ VÀ ĐỊA LÍ 9</p>
      <p>Hệ thống hoá theo SGK Kết nối tri thức với cuộc sống • Bộ dữ liệu chuẩn mực cho giáo viên và học sinh ôn thi chuyển cấp.</p>
    </div>
  </footer>

  <!-- SCRIPT -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Filter tabs
    function setFilter(cat) {
      document.querySelectorAll('.filter-tab').forEach(b => {
        b.className = 'filter-tab px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300';
      });
      const activeBtn = document.getElementById('tab-' + cat);
      if (activeBtn) {
        activeBtn.className = 'filter-tab px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition bg-slate-900 text-white dark:bg-white dark:text-slate-900';
      }

      const secHist = document.getElementById('section-hist');
      const secGeo = document.getElementById('section-geo');
      const secTopic = document.getElementById('section-topic');

      if (cat === 'all') {
        secHist.style.display = 'block';
        secGeo.style.display = 'block';
        secTopic.style.display = 'block';
      } else if (cat === 'hist') {
        secHist.style.display = 'block';
        secGeo.style.display = 'none';
        secTopic.style.display = 'none';
      } else if (cat === 'geo') {
        secHist.style.display = 'none';
        secGeo.style.display = 'block';
        secTopic.style.display = 'none';
      } else if (cat === 'topic') {
        secHist.style.display = 'none';
        secGeo.style.display = 'none';
        secTopic.style.display = 'block';
      }
    }

    // Search function
    function handleSearch() {
      const q = document.getElementById('searchInput').value.toLowerCase().trim();
      document.querySelectorAll('.lesson-card').forEach(card => {
        const text = (card.getAttribute('data-search') + ' ' + card.innerText).toLowerCase();
        if (!q || text.includes(q)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Quick quiz checker for each lesson
    function checkLessonQuiz(lessonId, qIdx, selectedOpt, correctOpt) {
      const parent = document.getElementById('quiz-' + lessonId + '-' + qIdx);
      const buttons = parent.querySelectorAll('.quiz-btn-' + lessonId + '-' + qIdx);
      const explBox = document.getElementById('expl-' + lessonId + '-' + qIdx);

      // Disable buttons
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-100', 'dark:hover:bg-slate-800');
        if (idx === correctOpt) {
          btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950/70', 'dark:text-emerald-200');
        } else if (idx === selectedOpt && selectedOpt !== correctOpt) {
          btn.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950/70', 'dark:text-rose-200');
        }
      });

      // Show explanation
      explBox.classList.remove('hidden');
      if (selectedOpt === correctOpt) {
        explBox.className = 'mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200';
        explBox.innerHTML = '<strong>Chính xác!</strong> Phản hồi chuẩn mực theo SGK.';
      } else {
        explBox.className = 'mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200';
        explBox.innerHTML = '<strong>Chưa chính xác!</strong> Đáp án đúng là <strong>' + ['A','B','C','D'][correctOpt] + '</strong>.';
      }
    }

    // TTS Audio Narration
    let isSpeaking = false;
    function toggleAudio() {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng đọc tự động.');
        return;
      }
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        document.getElementById('audioLabel').innerText = 'Nghe trợ giảng';
        document.getElementById('audioIcon').innerText = '🔊';
      } else {
        const text = 'Chào mừng bạn đến với khóa học Lịch sử và Địa lí lớp 9 theo chương trình sách Kết nối tri thức với cuộc sống. Khóa học gồm 21 bài Lịch sử, 21 bài Địa lí và 3 Chủ đề chung, tích hợp sơ đồ tư duy vector trực quan và đề thi Trạng Nguyên 60 phút.';
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'vi-VN';
        utterance.rate = 1.0;
        utterance.onend = () => {
          isSpeaking = false;
          document.getElementById('audioLabel').innerText = 'Nghe trợ giảng';
          document.getElementById('audioIcon').innerText = '🔊';
        };
        window.speechSynthesis.speak(utterance);
        isSpeaking = true;
        document.getElementById('audioLabel').innerText = 'Dừng đọc';
        document.getElementById('audioIcon').innerText = '⏹️';
      }
    }

    // Trạng Nguyên Grand Exam Logic (60:00 countdown)
    let examTime = 60 * 60;
    let examTimerInterval = null;
    let examActive = false;

    function startExam() {
      if (examActive) return;
      examActive = true;
      document.getElementById('btnStartExam').classList.add('hidden');
      document.getElementById('btnSubmitExam').classList.remove('hidden');

      examTimerInterval = setInterval(() => {
        if (examTime <= 0) {
          clearInterval(examTimerInterval);
          alert('Đã hết thời gian 60 phút! Hệ thống đang tự động nộp bài.');
          submitExam();
          return;
        }
        examTime--;
        const m = Math.floor(examTime / 60);
        const s = examTime % 60;
        document.getElementById('examTimer').innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function submitExam() {
      if (!examActive) return;
      examActive = false;
      clearInterval(examTimerInterval);
      document.getElementById('btnSubmitExam').classList.add('hidden');

      const items = document.querySelectorAll('.exam-question-item');
      let score = 0;
      const total = items.length;

      items.forEach((item, idx) => {
        const correctAns = parseInt(item.getAttribute('data-ans'), 10);
        const selected = item.querySelector('input[name="exam_q_' + idx + '"]:checked');
        const expl = document.getElementById('exam-expl-' + idx);
        expl.classList.remove('hidden');

        if (selected && parseInt(selected.value, 10) === correctAns) {
          score++;
          item.classList.add('border-emerald-500');
        } else {
          item.classList.add('border-rose-500');
        }
      });

      const final10 = ((score / total) * 10).toFixed(1);
      const scoreBoard = document.getElementById('examScoreboard');
      scoreBoard.classList.remove('hidden');
      document.getElementById('finalScoreText').innerText = final10 + ' / 10 (' + score + '/' + total + ' câu đúng)';
      
      let rating = '';
      let feedback = '';
      if (score >= 27) {
        rating = 'XUẤT SẮC - BẢNG VÀNG TRẠNG NGUYÊN LỊCH SỬ & ĐỊA LÍ 9';
        feedback = 'Năng lực xuất sắc! Bạn đã làm chủ toàn diện các mốc lịch sử, sự kiện bước ngoặt và dữ liệu kinh tế xã hội của các vùng.';
      } else if (score >= 22) {
        rating = 'GIỎI - NẮM CHẮC KIẾN THỨC CỐT LÕI VÀ KĨ NĂNG ĐỊA LÍ';
        feedback = 'Kết quả rất ấn tượng! Bạn đã sẵn sàng tự tin bước vào kì thi tuyển sinh vào lớp 10.';
      } else if (score >= 15) {
        rating = 'ĐẠT YÊU CẦU - CẦN ÔN TẬP THÊM CÁC VÙNG KINH TẾ VÀ CHIẾN DỊCH LỊCH SỬ';
        feedback = 'Bạn đã nắm được các nét khái quát, hãy xem lại lời giải chi tiết bên dưới các câu chưa đúng nhé.';
      } else {
        rating = 'CẦN NỖ LỰC HỌC TẬP THÊM';
        feedback = 'Hãy dành thời gian đọc lại các bài học và làm lại bài thi để củng cố nền tảng vững vàng.';
      }
      document.getElementById('finalRatingText').innerText = rating;
      document.getElementById('finalFeedbackText').innerText = feedback;
      scoreBoard.scrollIntoView({ behavior: 'smooth' });
    }

    function resetExam() {
      clearInterval(examTimerInterval);
      examTime = 60 * 60;
      examActive = false;
      document.getElementById('examTimer').innerText = '60:00';
      document.getElementById('btnStartExam').classList.remove('hidden');
      document.getElementById('btnSubmitExam').classList.add('hidden');
      document.getElementById('examScoreboard').classList.add('hidden');

      const items = document.querySelectorAll('.exam-question-item');
      items.forEach((item, idx) => {
        item.classList.remove('border-emerald-500', 'border-rose-500');
        const radios = item.querySelectorAll('input[type="radio"]');
        radios.forEach(r => r.checked = false);
        const expl = document.getElementById('exam-expl-' + idx);
        expl.classList.add('hidden');
      });
    }
  </script>
</body>
</html>
`;

// Write to courses/lsdl_9.html and courses/history_geography_9.html
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_9.html', fullHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/history_geography_9.html', fullHtml, 'utf8');

console.log('Successfully written courses/lsdl_9.html and courses/history_geography_9.html! File size:', (fullHtml.length / 1024).toFixed(2), 'KB');
