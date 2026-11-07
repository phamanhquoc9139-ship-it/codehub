// scratch/build_su12_complete.js
const fs = require('fs');
const path = require('path');
const svgs = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/su12_svgs.js');
const interactiveData = require('C:/Users/ADMIN/.gemini/antigravity/scratch/su12_interactive_data.js');

const userReqPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_su12.md';
const content = fs.readFileSync(userReqPath, 'utf8');

// 6 Topics metadata
const topics = [
  { id: 1, title: 'Chủ đề 1. Thế giới trong và sau Chiến tranh lạnh', short: 'Thế giới trong & sau Chiến tranh lạnh', lessons: [1, 2, 3] },
  { id: 2, title: 'Chủ đề 2. ASEAN: Những chặng đường lịch sử', short: 'ASEAN: Những chặng đường lịch sử', lessons: [4, 5] },
  { id: 3, title: 'Chủ đề 3. Cách mạng tháng Tám, chiến tranh giải phóng dân tộc và chiến tranh bảo vệ Tổ quốc', short: 'CM Tháng Tám & Chiến tranh bảo vệ Tổ quốc', lessons: [6, 7, 8, 9] },
  { id: 4, title: 'Chủ đề 4. Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay', short: 'Công cuộc Đổi mới (1986 – nay)', lessons: [10, 11] },
  { id: 5, title: 'Chủ đề 5. Lịch sử đối ngoại Việt Nam thời cận – hiện đại', short: 'Lịch sử đối ngoại Việt Nam cận – hiện đại', lessons: [12, 13, 14] },
  { id: 6, title: 'Chủ đề 6. Hồ Chí Minh trong lịch sử Việt Nam', short: 'Hồ Chí Minh trong lịch sử Việt Nam', lessons: [15, 16, 17] }
];

// Helper: Format markdown text into styled HTML
function formatMarkdownToHtml(md) {
  if (!md) return '';
  const lines = md.split('\n');
  let html = '';
  let inUl = false;
  let inOl = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inOl) { html += '</ol>\n'; inOl = false; }
      continue;
    }

    // Bold & italic formatting
    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
    line = line.replace(/\*([^*]+)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');

    // Headers ### (Subsections inside a lesson)
    if (line.startsWith('### ')) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inOl) { html += '</ol>\n'; inOl = false; }
      const headerText = line.replace('### ', '').trim();
      html += `
        <div class="mt-6 mb-3 pb-2 border-b border-amber-200 dark:border-amber-900/40 flex items-center gap-2.5">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
          <h4 class="text-base sm:text-lg font-bold text-amber-950 dark:text-amber-200">${headerText}</h4>
        </div>
      `;
      continue;
    }

    // Numbered list items
    const numMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numMatch) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (!inOl) { html += '<ol class="space-y-3 my-3">\n'; inOl = true; }
      html += `
        <li class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
          <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">${numMatch[1]}</span>
          <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${numMatch[2]}</div>
        </li>
      `;
      continue;
    }

    // Bullet list items
    if (line.startsWith('- ')) {
      if (inOl) { html += '</ol>\n'; inOl = false; }
      if (!inUl) { html += '<ul class="space-y-3 my-3">\n'; inUl = true; }
      const itemText = line.slice(2).trim();
      html += `
        <li class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
          <span class="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0 shadow-2xs"></span>
          <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${itemText}</div>
        </li>
      `;
      continue;
    }

    // Regular paragraph
    if (inUl) { html += '</ul>\n'; inUl = false; }
    if (inOl) { html += '</ol>\n'; inOl = false; }
    html += `<p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide my-2.5">${line}</p>\n`;
  }

  if (inUl) { html += '</ul>\n'; }
  if (inOl) { html += '</ol>\n'; }

  return html;
}

// Parse 17 lessons
const regex = /## (Bài \d+[^\n]+)/g;
let match;
const lessonPositions = [];
while ((match = regex.exec(content)) !== null) {
  lessonPositions.push({ title: match[1], index: match.index });
}

const parsedLessons = [];
for (let i = 0; i < lessonPositions.length; i++) {
  const current = lessonPositions[i];
  const nextIdx = (i + 1 < lessonPositions.length) ? lessonPositions[i+1].index : content.indexOf('# Khung tư duy');
  const rawText = content.slice(current.index, nextIdx).trim();

  const id = i + 1;
  const topic = topics.find(t => t.lessons.includes(id));
  const titleClean = current.title.replace(/^Bài \d+\.\s*/, '').trim();

  // Strip heading line for body
  const bodyText = rawText.slice(rawText.indexOf('\n')).trim();

  parsedLessons.push({
    id,
    title: current.title,
    titleClean,
    topicId: topic.id,
    topicTitle: topic.title,
    theme: interactiveData.lessonThemes[id],
    bodyHtml: formatMarkdownToHtml(bodyText),
    quizzes: interactiveData.lessonQuizzes[id]
  });
}

// Parse Khung tư duy lịch sử và mốc trọng tâm
const khungTuDuyRaw = content.slice(content.indexOf('# Khung tư duy')).trim();
const timelineRaw = khungTuDuyRaw.slice(khungTuDuyRaw.indexOf('## Trục thời gian') + 17, khungTuDuyRaw.indexOf('## Cách phân tích')).trim();
const phanTichRaw = khungTuDuyRaw.slice(khungTuDuyRaw.indexOf('## Cách phân tích') + 33, khungTuDuyRaw.indexOf('## Nguồn và phạm vi')).trim();
const nguonPhamViRaw = khungTuDuyRaw.slice(khungTuDuyRaw.indexOf('## Nguồn và phạm vi') + 19).replace('</USER_REQUEST>', '').trim();

// Parse timeline table
const timelineRows = [];
const tLines = timelineRaw.split('\n').filter(l => l.includes('|') && !l.includes('---') && !l.includes('Mốc'));
tLines.forEach(l => {
  const parts = l.split('|').map(s => s.trim()).filter(Boolean);
  if (parts.length >= 2) {
    timelineRows.push({
      date: parts[0],
      event: parts[1]
    });
  }
});

// Search Index
const searchIndex = [];
parsedLessons.forEach(l => {
  searchIndex.push({
    id: `bai-${l.id}`,
    badge: `Bài ${l.id} (Chủ đề ${l.topicId})`,
    title: l.title,
    subtitle: l.theme
  });
});
timelineRows.forEach(tl => {
  searchIndex.push({
    id: 'truc-thoi-gian',
    badge: `Mốc: ${tl.date}`,
    title: `${tl.date} – ${tl.event}`,
    subtitle: `Trục thời gian lịch sử 12 chuẩn SGK Kết nối tri thức`
  });
});
searchIndex.push({
  id: 'phuong-phap-lich-su',
  badge: 'Phương Pháp',
  title: 'Cách phân tích một sự kiện lịch sử (5 bước)',
  subtitle: 'Bối cảnh, nguyên nhân, diễn biến, kết quả, ý nghĩa và đánh giá tư liệu'
});
searchIndex.push({
  id: 'dau-truong-trang-nguyen',
  badge: 'Thi Thử',
  title: 'Đấu trường Sử học Trạng Nguyên 12',
  subtitle: '20 câu hỏi trắc nghiệm khách quan 45 phút chuẩn ma trận đề thi tốt nghiệp'
});

console.log('Parsed successfully:', parsedLessons.length, 'lessons,', timelineRows.length, 'timeline rows.');

// Generate HTML
function buildHtml() {
  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lịch Sử 12 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 6 Chủ Đề • 17 Bài • Toàn Diện Kiến Thức &amp; Tư Duy)</title>
  <meta name="description" content="Tài liệu số hóa toàn diện Lịch Sử 12 bộ Kết nối tri thức với cuộc sống: Đủ 6 chủ đề, 17 bài học. Đầy đủ bối cảnh, mốc thời gian, diễn biến, kết quả, ý nghĩa, 6 sơ đồ tư duy SVG, trục thời gian và đấu trường 45 phút.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            amber: {
              50: '#fffbeb',
              100: '#fef3c7',
              200: '#fde68a',
              500: '#f59e0b',
              600: '#d97706',
              700: '#b45309',
              800: '#92400e',
              900: '#78350f',
              950: '#451a03',
            }
          }
        }
      }
    }
  </script>
  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    
    .nav-link.active {
      background-color: #fef3c7;
      color: #b45309;
      font-weight: 700;
      border-left: 3px solid #d97706;
    }
    .dark .nav-link.active {
      background-color: rgba(120, 53, 15, 0.4);
      color: #fde68a;
      border-left-color: #f59e0b;
    }

    /* Chuẩn hóa Typography môn Lịch sử */
    body {
      letter-spacing: 0.015em;
      line-height: 1.85;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      word-spacing: 0.03em;
    }

    p, li, .prose {
      letter-spacing: 0.018em;
      line-height: 1.85;
    }

    .lesson-card p, .lesson-card li {
      line-height: 1.85 !important;
      letter-spacing: 0.018em !important;
    }

    h1, h2, h3, h4, h5 {
      letter-spacing: -0.01em;
      line-height: 1.4;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Progress Bar -->
  <div id="read-progress" class="fixed top-0 left-0 h-1 bg-amber-600 dark:bg-amber-400 z-50 transition-all duration-100" style="width: 0%"></div>

  <!-- Header & Navbar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors" title="Về trang chủ">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </a>
        <div>
          <span class="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/80 text-amber-800 dark:text-amber-300">Kết nối tri thức</span>
          <h1 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white truncate">
            Lịch Sử 12 — Trọn Bộ 6 Chủ Đề 17 Bài Học
          </h1>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Mobile Menu Toggle Button -->
        <button onclick="toggleMobileMenu()" class="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <span>Menu Bài</span>
        </button>

        <!-- Search Trigger (Ctrl+K) -->
        <button onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:border-amber-400 transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span class="hidden md:inline">Tìm kiếm...</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded">Ctrl+K</kbd>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-600 transition-colors" title="Đổi giao diện sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Offcanvas Menu Drawer -->
  <div id="mobile-menu-drawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden flex">
    <div class="bg-white dark:bg-slate-900 w-80 max-w-[85vw] h-full shadow-2xl flex flex-col p-4 border-r border-slate-200 dark:border-slate-800">
      <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-600 font-bold">📜</span>
          <span class="font-bold text-sm text-slate-900 dark:text-white">Mục Lục Chọn Bài Học</span>
        </div>
        <button onclick="toggleMobileMenu()" class="p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="py-2.5">
        <input type="text" oninput="filterSidebarLessons(this.value, 'mobile-nav')" placeholder="🔍 Lọc bài học hoặc sự kiện..." class="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500">
      </div>
      <div id="mobile-nav" class="flex-1 overflow-y-auto space-y-4 pr-1 text-xs">
        ${renderSidebarLinks('mobile')}
      </div>
    </div>
    <div class="flex-1" onclick="toggleMobileMenu()"></div>
  </div>

  <!-- Main Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <!-- LEFT SIDEBAR: Nav Sticky (3 Cols) -->
      <aside class="hidden lg:block lg:col-span-3 sticky top-24 space-y-4">
        
        <!-- Header Info Card -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200/50 dark:border-amber-800/50 shadow-xs space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-extrabold text-amber-700 dark:text-amber-300 uppercase tracking-wider">MỤC LỤC CHỌN BÀI</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold">6 Chủ đề • 17 Bài</span>
          </div>
          <div class="text-xs font-bold text-slate-800 dark:text-slate-100">Bấm bài học bất kì để học ngay:</div>
          
          <!-- Instant filter inside sidebar -->
          <div>
            <input type="text" id="desktop-sidebar-filter" oninput="filterSidebarLessons(this.value, 'desktop-nav')" placeholder="🔍 Lọc bài hoặc mốc sự kiện..." class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs">
          </div>
        </div>

        <!-- Full Chapter & Lesson Tree Navigation -->
        <nav id="desktop-nav" class="space-y-4 text-xs font-medium max-h-[calc(100vh-18rem)] overflow-y-auto pr-1">
          ${renderSidebarLinks('desktop')}
        </nav>

        <!-- Exam Arena Card Banner in Sidebar -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-md space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-bold">
              <i class="fa-solid fa-trophy text-yellow-300 text-xs"></i>
            </span>
            <div>
              <h4 class="font-bold text-xs">Đấu Trường Sử Học 12</h4>
              <p class="text-[10px] text-amber-100">20 câu tổng hợp • 45 phút</p>
            </div>
          </div>
          <p class="text-[11px] text-amber-100 leading-normal">Đề thi bao quát 6 chủ đề 17 bài theo cấu trúc chuẩn ma trận đề thi tốt nghiệp THPT Quốc gia.</p>
          <a href="#dau-truong-trang-nguyen" class="block w-full py-1.5 rounded-xl bg-white text-amber-800 font-bold text-xs text-center hover:bg-amber-50 shadow-sm transition">
            Vào Thi Ngay
          </a>
        </div>

      </aside>

      <!-- MAIN CONTENT AREA (9 Cols) -->
      <main class="lg:col-span-9 space-y-12">
        
        <!-- Hero Banner -->
        <div class="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white shadow-xl">
          <div class="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="relative z-10 space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-amber-100">
              <i class="fa-solid fa-landmark"></i> Bộ Sách Kết Nối Tri Thức Với Cuộc Sống
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
              KIẾN THỨC ĐẦY ĐỦ LỊCH SỬ 12
            </h2>
            <p class="text-sm sm:text-base text-amber-100 max-w-2xl leading-relaxed">
              Bản tổng hợp chuẩn mực theo đủ <strong>6 chủ đề, 17 bài học</strong> của sách giáo khoa. Mỗi bài tích hợp đầy đủ bối cảnh, mốc thời gian, sự kiện, nhân vật, diễn biến, kết quả, ý nghĩa, 6 sơ đồ tư duy SVG, trục thời gian và 51 câu hỏi trắc nghiệm củng cố.
            </p>
            
            <!-- Quick Feature Stats Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">6 Chủ Đề</div>
                <div class="text-[11px] text-amber-200">17 Bài trọn vẹn</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">16 Mốc Niên Biểu</div>
                <div class="text-[11px] text-amber-200">Trục thời gian vàng</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">6 Sơ Đồ SVG</div>
                <div class="text-[11px] text-amber-200">Trực quan hóa tư duy</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">71 Câu Trắc Nghiệm</div>
                <div class="text-[11px] text-amber-200">51 Quiz + 20 Đấu trường</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Overview Widget -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
              <i class="fa-solid fa-hourglass-half"></i>
            </span>
            <div>
              <div class="font-bold text-sm text-slate-900 dark:text-white">Tiến Độ Tự Học Lịch Sử 12</div>
              <div id="progress-text" class="text-xs text-slate-500 dark:text-slate-400">Đã hoàn thành 0 / 17 bài học (0%)</div>
            </div>
          </div>
          <div class="w-full sm:w-64 bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div id="progress-bar-fill" class="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- Render 6 Topics and 17 Lessons -->
        ${renderTopicsAndLessonsHtml()}

        <!-- Trục thời gian lịch sử 12 -->
        <section id="truc-thoi-gian" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg shadow-sm">
              <i class="fa-solid fa-timeline"></i>
            </span>
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">Niên biểu trọng tâm</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Trục Thời Gian Lịch Sử 12 (16 Mốc Vàng)</h3>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Hệ thống hóa toàn bộ các mốc thời gian bước ngoặt của lịch sử thế giới và lịch sử Việt Nam giai đoạn 1945 đến 2015 chuẩn SGK Kết nối tri thức.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            ${timelineRows.map((tl, idx) => `
              <div class="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-3 hover:shadow-sm transition">
                <span class="px-2.5 py-1 rounded-xl bg-amber-500 text-white font-mono font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
                  ${tl.date}
                </span>
                <div class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  ${tl.event}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Phương pháp phân tích một sự kiện lịch sử -->
        <section id="phuong-phap-lich-su" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg shadow-sm">
              <i class="fa-solid fa-compass"></i>
            </span>
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Tư duy lịch sử</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Cách Phân Tích Một Sự Kiện Lịch Sử (5 Bước)</h3>
            </div>
          </div>

          <div class="prose max-w-none text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 space-y-4">
            ${formatMarkdownToHtml(phanTichRaw)}
          </div>

          <!-- Nguồn và phạm vi -->
          <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-3">
            <span class="text-amber-600 text-lg mt-0.5"><i class="fa-solid fa-circle-info"></i></span>
            <div class="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
              <strong>Nguồn và phạm vi:</strong> ${nguonPhamViRaw}
            </div>
          </div>
        </section>

        <!-- Đấu trường Sử học Trạng Nguyên 12 -->
        <section id="dau-truong-trang-nguyen" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div class="flex items-center gap-3">
              <span class="w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center text-xl font-black shadow-lg">
                <i class="fa-solid fa-trophy"></i>
              </span>
              <div>
                <span class="text-xs font-extrabold uppercase tracking-wider text-amber-300">Đấu trường thử thách</span>
                <h3 class="text-xl sm:text-2xl font-black text-white">Đấu Trường Sử Học Trạng Nguyên 12</h3>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <i class="fa-regular fa-clock text-amber-300"></i>
                <span id="arena-timer" class="font-mono font-bold text-base text-amber-300">45:00</span>
              </div>
              <button id="start-arena-btn" onclick="startArenaExam()" class="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs shadow-md transition">
                Bắt Đầu Làm Bài
              </button>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Bài thi trắc nghiệm bao quát đủ <strong>6 chủ đề, 17 bài học Lịch sử 12</strong> (20 câu hỏi trắc nghiệm 4 lựa chọn, có bấm giờ 45 phút, chấm điểm tự động và bảng đáp án giải thích chi tiết).
          </p>

          <!-- Arena Container -->
          <div id="arena-container" class="space-y-6 hidden">
            <div id="arena-questions-list" class="space-y-5"></div>
            
            <div class="pt-4 flex items-center justify-between border-t border-white/10">
              <div id="arena-score-badge" class="text-sm font-bold text-amber-300"></div>
              <button onclick="submitArenaExam()" class="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs shadow-lg transition">
                Nộp Bài &amp; Xem Kết Quả
              </button>
            </div>
          </div>
        </section>

      </main>

    </div>
  </div>

  <!-- Search Modal (Ctrl+K) -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden flex items-start justify-center pt-20 p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
        <input type="text" id="modal-search-input" oninput="handleModalSearch(this.value)" placeholder="Tìm bài học, sự kiện, mốc thời gian, nhân vật..." class="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none">
        <button onclick="closeSearchModal()" class="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs">
          <kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">ESC</kbd>
        </button>
      </div>
      <div id="modal-search-results" class="flex-1 overflow-y-auto p-4 space-y-2 text-xs">
        <div class="text-center text-slate-400 py-8">Nhập từ khóa để tra cứu tức thì toàn bộ 17 bài học Lịch sử 12...</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p>Lịch Sử 12 — Bộ Sách Kết Nối Tri Thức Với Cuộc Sống (Đủ 6 Chủ Đề • 17 Bài)</p>
      <p class="text-slate-400">Hệ thống hóa phục vụ học tập, ôn thi tốt nghiệp THPT Quốc gia theo chương trình GDPT 2018.</p>
    </div>
  </footer>

  <!-- Client-side Scripts -->
  <script>
    const SEARCH_INDEX = ${JSON.stringify(searchIndex)};
    const EXAM_BANK = ${JSON.stringify(interactiveData.examQuestions)};

    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-sm';
        localStorage.setItem('theme', 'light');
      }
    }

    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      applyTheme(true);
    } else {
      applyTheme(false);
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        applyTheme(!document.documentElement.classList.contains('dark'));
      });
    }

    // 2. Mobile Menu Toggle
    function toggleMobileMenu() {
      const drawer = document.getElementById('mobile-menu-drawer');
      drawer.classList.toggle('hidden');
    }

    // 3. Reading Progress Tracking
    let readLessons = JSON.parse(localStorage.getItem('lichsu12_read') || '[]');

    function updateProgressUI() {
      const count = readLessons.length;
      const pct = Math.round((count / 17) * 100);
      const textElem = document.getElementById('progress-text');
      const barElem = document.getElementById('progress-bar-fill');
      if (textElem) textElem.textContent = \`Đã hoàn thành \${count} / 17 bài học (\${pct}%)\`;
      if (barElem) barElem.style.width = \`\${pct}%\`;

      for (let i = 1; i <= 17; i++) {
        const isRead = readLessons.includes(i);
        const iconD = document.getElementById(\`check-side-\${i}\`);
        const iconM = document.getElementById(\`check-side-mobile-\${i}\`);
        const btn = document.getElementById(\`mark-btn-\${i}\`);
        if (iconD) iconD.className = isRead ? 'fa-solid fa-circle-check text-amber-600 text-[10px]' : 'fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]';
        if (iconM) iconM.className = isRead ? 'fa-solid fa-circle-check text-amber-600 text-[10px]' : 'fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]';
        if (btn) {
          btn.innerHTML = isRead ? '<i class=\"fa-solid fa-check mr-1.5\"></i> Đã hoàn thành' : '<i class=\"fa-regular fa-circle mr-1.5\"></i> Đánh dấu hoàn thành';
          btn.className = isRead 
            ? 'px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold'
            : 'px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-amber-800 text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-xs font-semibold transition';
        }
      }
    }

    function toggleLessonCompletion(num) {
      if (readLessons.includes(num)) {
        readLessons = readLessons.filter(n => n !== num);
      } else {
        readLessons.push(num);
      }
      localStorage.setItem('lichsu12_read', JSON.stringify(readLessons));
      updateProgressUI();
    }

    // Scroll reading progress
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const bar = document.getElementById('read-progress');
      if (bar) bar.style.width = scrolled + '%';
    });

    // 4. Sidebar Instant Filtering
    function filterSidebarLessons(query, targetNavId = 'desktop-nav') {
      const container = document.getElementById(targetNavId);
      if (!container) return;
      const q = query.trim().toLowerCase();
      const items = container.querySelectorAll('.sidebar-lesson-item');

      items.forEach(item => {
        const title = (item.getAttribute('data-title') || '').toLowerCase();
        const theme = (item.getAttribute('data-theme') || '').toLowerCase();
        if (!q || title.includes(q) || theme.includes(q)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // 5. Interactive Mini-Quiz Checking
    function checkMiniQuiz(lessonId, qIdx, selectedOpt, correctOpt) {
      const container = document.getElementById(\`quiz-box-\${lessonId}-\${qIdx}\`);
      if (!container) return;
      const options = container.querySelectorAll('.quiz-option-btn');
      const explain = document.getElementById(\`quiz-explain-\${lessonId}-\${qIdx}\`);

      options.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctOpt) {
          btn.className = 'quiz-option-btn w-full p-3 rounded-xl border text-left text-xs font-semibold transition bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-800 dark:text-emerald-200';
        } else if (idx === selectedOpt && selectedOpt !== correctOpt) {
          btn.className = 'quiz-option-btn w-full p-3 rounded-xl border text-left text-xs font-semibold transition bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-800 dark:text-rose-200';
        } else {
          btn.className = 'quiz-option-btn w-full p-3 rounded-xl border text-left text-xs text-slate-500 border-slate-200 dark:border-slate-700 opacity-60';
        }
      });

      if (explain) {
        explain.classList.remove('hidden');
      }
    }

    // 6. Search Modal (Ctrl+K)
    function openSearchModal() {
      const modal = document.getElementById('search-modal');
      const input = document.getElementById('modal-search-input');
      modal.classList.remove('hidden');
      if (input) {
        input.value = '';
        input.focus();
        handleModalSearch('');
      }
    }

    function closeSearchModal() {
      document.getElementById('search-modal').classList.add('hidden');
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
      }
    });

    function handleModalSearch(query) {
      const q = query.trim().toLowerCase();
      const resultsContainer = document.getElementById('modal-search-results');
      if (!resultsContainer) return;

      if (!q) {
        resultsContainer.innerHTML = '<div class=\"text-center text-slate-400 py-8\">Nhập từ khóa để tra cứu tức thì toàn bộ 17 bài học Lịch sử 12...</div>';
        return;
      }

      const matches = SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.subtitle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = \`<div class=\"text-center text-slate-400 py-8\">Không tìm thấy kết quả phù hợp với \"\${query}\"</div>\`;
        return;
      }

      resultsContainer.innerHTML = matches.map(m => \`
        <a href=\"#\${m.id}\" onclick=\"closeSearchModal()\" class=\"block p-3 rounded-2xl hover:bg-amber-50 dark:hover:bg-slate-800 border border-transparent hover:border-amber-200 dark:hover:border-slate-700 transition\">
          <div class=\"flex items-center gap-2 mb-1\">
            <span class=\"px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200\">\${m.badge}</span>
            <span class=\"font-bold text-slate-900 dark:text-white text-xs sm:text-sm\">\${m.title}</span>
          </div>
          <p class=\"text-slate-500 dark:text-slate-400 text-xs line-clamp-1\">\${m.subtitle}</p>
        </a>
      \`).join('');
    }

    // 7. Trạng Nguyên 45-Minute Exam Arena
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;
    let userAnswers = {};

    function startArenaExam() {
      document.getElementById('arena-container').classList.remove('hidden');
      document.getElementById('start-arena-btn').style.display = 'none';

      // Render Questions
      const list = document.getElementById('arena-questions-list');
      list.innerHTML = EXAM_BANK.map((q, idx) => \`
        <div class=\"p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3\">
          <div class=\"flex items-start gap-3\">
            <span class=\"w-6 h-6 rounded-full bg-amber-400 text-slate-900 font-black text-xs flex items-center justify-center shrink-0 mt-0.5\">\${idx + 1}</span>
            <div class=\"font-semibold text-xs sm:text-sm text-slate-100 leading-relaxed\">\${q.q}</div>
          </div>
          <div class=\"grid grid-cols-1 gap-2 pt-1\">
            \${q.options.map((opt, oIdx) => \`
              <label class=\"flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer text-xs text-slate-200 transition\">
                <input type=\"radio\" name=\"arena_q_\${q.id}\" value=\"\${oIdx}\" onchange=\"recordArenaAnswer(\${q.id}, \${oIdx})\" class=\"text-amber-500 focus:ring-0\">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id=\"arena-explain-\${q.id}\" class=\"hidden pt-2 text-xs text-amber-200 border-t border-white/10\">
            <strong>Đáp án:</strong> \${q.options[q.answer]}<br>
            <strong>Giải thích:</strong> \${q.explain}
          </div>
        </div>
      \`).join('');

      // Start countdown
      arenaSecondsLeft = 45 * 60;
      clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        arenaSecondsLeft--;
        const m = Math.floor(arenaSecondsLeft / 60);
        const s = arenaSecondsLeft % 60;
        document.getElementById('arena-timer').textContent = 
          \`\${String(m).padStart(2, '0')}:\${String(s).padStart(2, '0')}\`;

        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          alert('Đã hết thời gian 45 phút!');
          submitArenaExam();
        }
      }, 1000);
    }

    function recordArenaAnswer(qId, optIdx) {
      userAnswers[qId] = optIdx;
    }

    function submitArenaExam() {
      clearInterval(arenaTimerInterval);
      let score = 0;
      EXAM_BANK.forEach(q => {
        const explainBox = document.getElementById(\`arena-explain-\${q.id}\`);
        if (explainBox) explainBox.classList.remove('hidden');

        if (userAnswers[q.id] === q.answer) {
          score++;
        }
      });

      const total = EXAM_BANK.length;
      const point = ((score / total) * 10).toFixed(1);
      const scoreBadge = document.getElementById('arena-score-badge');
      scoreBadge.innerHTML = \`🎉 Kết quả: <strong>\${score}/\${total} câu đúng</strong> (\${point} / 10 điểm)\`;
      alert(\`Bạn đã đạt \${point}/10 điểm (\${score}/\${total} câu đúng)!\`);
    }

    // Initialize UI
    document.addEventListener('DOMContentLoaded', () => {
      updateProgressUI();
    });
  </script>
</body>
</html>`;
}

// Helper: Render sidebar tree links
function renderSidebarLinks(mode) {
  const suffix = mode === 'mobile' ? '-mobile' : '';

  let html = '';

  topics.forEach(t => {
    html += `
      <div class="sidebar-topic-group space-y-1 pt-2 first:pt-0">
        <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 px-2 py-1">
          <span class="truncate"><i class="fa-solid fa-landmark mr-1"></i> ${t.short}</span>
          <span class="text-[10px] text-slate-400 shrink-0">${t.lessons.length} Bài</span>
        </div>
        <ul class="space-y-1">
    `;

    t.lessons.forEach(lId => {
      const l = parsedLessons.find(item => item.id === lId);
      html += `
        <li class="sidebar-lesson-item" data-title="${l.title}" data-theme="${l.theme}">
          <a href="#bai-${l.id}" class="nav-link flex flex-col p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800 transition">
            <div class="flex items-center justify-between font-bold text-xs">
              <span class="truncate">Bài ${l.id}. ${l.titleClean}</span>
              <i id="check-side${suffix}-${l.id}" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px] shrink-0 ml-1"></i>
            </div>
            <div class="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
              ${l.theme}
            </div>
          </a>
        </li>
      `;
    });

    html += `
        </ul>
      </div>
    `;
  });

  // Common links
  html += `
    <div class="space-y-1 pt-3 border-t border-slate-100 dark:border-slate-800">
      <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2 py-1">Tư Duy &amp; Tổng Hợp</div>
      <ul class="space-y-1">
        <li>
          <a href="#truc-thoi-gian" class="nav-link flex items-center gap-2 p-2 rounded-xl text-amber-800 dark:text-amber-300 font-bold hover:bg-amber-50 dark:hover:bg-amber-950/40 transition">
            <i class="fa-solid fa-timeline text-xs"></i> Trục Thời Gian 16 Mốc
          </a>
        </li>
        <li>
          <a href="#phuong-phap-lich-su" class="nav-link flex items-center gap-2 p-2 rounded-xl text-indigo-700 dark:text-indigo-400 font-bold hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition">
            <i class="fa-solid fa-compass text-xs"></i> Phương Pháp 5 Bước
          </a>
        </li>
        <li>
          <a href="#dau-truong-trang-nguyen" class="nav-link flex items-center gap-2 p-2 rounded-xl text-orange-700 dark:text-orange-400 font-bold hover:bg-orange-50 dark:hover:bg-orange-950/40 transition">
            <i class="fa-solid fa-trophy text-xs"></i> Đấu Trường Trạng Nguyên
          </a>
        </li>
      </ul>
    </div>
  `;

  return html;
}

// Helper: Render topics, SVG diagrams & 17 Lesson Cards
function renderTopicsAndLessonsHtml() {
  let html = '';

  topics.forEach(t => {
    const svgObj = svgs[t.id];

    html += `
      <!-- TOPIC CONTAINER: ${t.title} -->
      <section id="chu-de-${t.id}" class="space-y-8 pt-4">
        
        <!-- Topic Header Card -->
        <div class="p-6 sm:p-7 rounded-3xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 shadow-xs space-y-3">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white uppercase tracking-wider shadow-2xs">
              Chủ đề ${t.id}
            </span>
            <span class="text-xs font-bold text-amber-800 dark:text-amber-300">
              Gồm ${t.lessons.length} Bài học
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            ${t.title}
          </h3>
          
          <!-- SVG Concept Map for this Topic -->
          ${svgObj ? `
            <div class="mt-4 pt-4 border-t border-amber-200/60 dark:border-amber-900/30 space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-300">
                <span><i class="fa-solid fa-diagram-project mr-1.5"></i> ${svgObj.title}</span>
                <span class="text-[11px] text-slate-400 font-normal">Sơ đồ trực quan</span>
              </div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 italic">${svgObj.note}</p>
              <div class="w-full overflow-x-auto py-1">
                ${svgObj.svg}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Lessons of this Topic -->
        <div class="space-y-8">
          ${t.lessons.map(lId => {
            const l = parsedLessons.find(item => item.id === lId);
            return `
              <article id="bai-${l.id}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                
                <!-- Lesson Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div class="space-y-1.5">
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 uppercase tracking-wider">
                        Chủ đề ${l.topicId} • Bài ${l.id}
                      </span>
                    </div>
                    <h4 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      ${l.title}
                    </h4>
                    <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                      ${l.theme}
                    </p>
                  </div>

                  <button id="mark-btn-${l.id}" onclick="toggleLessonCompletion(${l.id})" class="self-start sm:self-center shrink-0 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-amber-800 text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-xs font-semibold transition">
                    <i class="fa-regular fa-circle mr-1.5"></i> Đánh dấu hoàn thành
                  </button>
                </div>

                <!-- Lesson Core Content -->
                <div class="lesson-body prose max-w-none text-slate-700 dark:text-slate-200">
                  ${l.bodyHtml}
                </div>

                <!-- Mini-Quiz (3 questions) -->
                <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-extrabold text-sm sm:text-base">
                      <i class="fa-solid fa-circle-question"></i>
                      <h5>Trắc Nghiệm Củng Cố Bài ${l.id} (3 Câu)</h5>
                    </div>
                    <span class="text-[11px] text-amber-700 dark:text-amber-300 font-bold bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-full">
                      Tự kiểm tra tức thì
                    </span>
                  </div>

                  <div class="grid grid-cols-1 gap-4">
                    ${l.quizzes.map((q, qIdx) => `
                      <div id="quiz-box-${l.id}-${qIdx}" class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                        <div class="flex items-start gap-2.5">
                          <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            ${qIdx + 1}
                          </span>
                          <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-relaxed">
                            ${q.q}
                          </p>
                        </div>

                        <!-- Options -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          ${q.options.map((opt, oIdx) => `
                            <button type="button" onclick="checkMiniQuiz(${l.id}, ${qIdx}, ${oIdx}, ${q.answer})" class="quiz-option-btn w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-left text-xs text-slate-700 dark:text-slate-200 hover:border-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/30 transition shadow-2xs">
                              <span class="font-bold mr-1">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                            </button>
                          `).join('')}
                        </div>

                        <!-- Explanation Box (Initially Hidden) -->
                        <div id="quiz-explain-${l.id}-${qIdx}" class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5 text-xs">
                          <div class="text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-circle-check"></i> Giải thích chi tiết:
                          </div>
                          <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${q.explanation}</p>
                          <div class="text-[11px] font-bold text-amber-800 dark:text-amber-300 pt-1 border-t border-emerald-200/50 dark:border-emerald-900/40">
                            💡 Ghi nhớ cốt lõi: ${q.takeaway}
                          </div>
                        </div>

                      </div>
                    `).join('')}
                  </div>
                </div>

              </article>
            `;
          }).join('')}
        </div>

      </section>
    `;
  });

  return html;
}

// Generate full HTML
const fullHtml = buildHtml();

// Targets to write (dual-file & platform aliases)
const targetPaths = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lichsu_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lichsu12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/su_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/su12.html'
];

targetPaths.forEach(p => {
  fs.writeFileSync(p, fullHtml, 'utf8');
  console.log('Saved:', p, 'Size:', fullHtml.length, 'bytes');
});

console.log('Build complete for Lịch Sử 12!');
