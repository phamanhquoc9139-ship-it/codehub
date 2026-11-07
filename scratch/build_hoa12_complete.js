// scratch/build_hoa12_complete.js
const fs = require('fs');
const path = require('path');
const svgs = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hoa12_svgs.js');
const interactiveData = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hoa12_interactive_data.js');
const reactionModels = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/hoa12_all_30_models.js');

const userReqPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/user_request_hoa12.md';
const content = fs.readFileSync(userReqPath, 'utf8');

// 8 Chapters metadata
const chapters = [
  { id: 1, title: 'Chương 1. Ester – Lipid', short: 'Ester – Lipid', lessons: [1, 2, 3] },
  { id: 2, title: 'Chương 2. Carbohydrate', short: 'Carbohydrate', lessons: [4, 5, 6, 7] },
  { id: 3, title: 'Chương 3. Hợp chất chứa nitrogen', short: 'Hợp chất chứa nitrogen', lessons: [8, 9, 10, 11] },
  { id: 4, title: 'Chương 4. Polymer', short: 'Polymer', lessons: [12, 13, 14] },
  { id: 5, title: 'Chương 5. Pin điện và điện phân', short: 'Pin điện và điện phân', lessons: [15, 16, 17] },
  { id: 6, title: 'Chương 6. Đại cương về kim loại', short: 'Đại cương về kim loại', lessons: [18, 19, 20, 21, 22, 23] },
  { id: 7, title: 'Chương 7. Nguyên tố nhóm IA và nhóm IIA', short: 'Nguyên tố nhóm IA & IIA', lessons: [24, 25, 26] },
  { id: 8, title: 'Chương 8. Sơ lược về dãy kim loại chuyển tiếp thứ nhất và phức chất', short: 'Kim loại chuyển tiếp & Phức chất', lessons: [27, 28, 29, 30] }
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
    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-emerald-300">$1</strong>');
    line = line.replace(/\*([^*]+)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');

    // Headers ### (Subsections inside a lesson)
    if (line.startsWith('### ')) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inOl) { html += '</ol>\n'; inOl = false; }
      const headerText = line.replace('### ', '').trim();
      html += `
        <div class="mt-6 mb-3 pb-2 border-b border-emerald-200 dark:border-emerald-900/40 flex items-center gap-2.5">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
          <h4 class="text-base sm:text-lg font-bold text-emerald-950 dark:text-emerald-200">${headerText}</h4>
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
          <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">${numMatch[1]}</span>
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
          <span class="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0 shadow-2xs"></span>
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

// Parse 30 lessons
const regex = /## (Bài \d+[^\n]+)/g;
let match;
const lessonPositions = [];
while ((match = regex.exec(content)) !== null) {
  lessonPositions.push({ title: match[1], index: match.index });
}

const parsedLessons = [];
for (let i = 0; i < lessonPositions.length; i++) {
  const current = lessonPositions[i];
  const nextIdx = (i + 1 < lessonPositions.length) ? lessonPositions[i+1].index : content.indexOf('# Bảng phương trình');
  const rawText = content.slice(current.index, nextIdx).trim();

  const id = i + 1;
  const chapter = chapters.find(c => c.lessons.includes(id));
  const titleClean = current.title.replace(/^Bài \d+\.\s*/, '').trim();

  // Strip heading line for body
  const bodyText = rawText.slice(rawText.indexOf('\n')).trim();

  parsedLessons.push({
    id,
    title: current.title,
    titleClean,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    theme: interactiveData.lessonThemes[id],
    bodyHtml: formatMarkdownToHtml(bodyText),
    quizzes: interactiveData.lessonQuizzes[id]
  });
}

// Parse Bảng phương trình và công thức trọng tâm
const bangPhuongTrinhIdx = content.indexOf('# Bảng phương trình');
const anToanIdx = content.indexOf('# An toàn thực hành');
const nguonPhamViIdx = content.indexOf('## Nguồn và phạm vi');

const bangPhuongTrinhRaw = content.slice(bangPhuongTrinhIdx, anToanIdx).trim();
const anToanRaw = content.slice(anToanIdx, nguonPhamViIdx).trim();
const nguonPhamViRaw = content.slice(nguonPhamViIdx).replace('</USER_REQUEST>', '').trim();

// Parse equations table rows
const equationRows = [];
const eqLines = bangPhuongTrinhRaw.split('\n').filter(l => l.includes('|') && !l.includes('---|---') && !l.includes('Nội dung'));
eqLines.forEach((line, idx) => {
  const parts = line.split('|').map(p => p.trim()).filter(Boolean);
  if (parts.length >= 2) {
    equationRows.push({
      id: idx + 1,
      name: parts[0],
      formula: parts[1]
    });
  }
});

// Parse safety rules
const safetyItems = [];
const safetyLines = anToanRaw.split('\n').filter(l => l.trim().startsWith('- '));
const safetyIcons = [
  'fa-glasses',
  'fa-triangle-exclamation',
  'fa-fire-flame-curved',
  'fa-hand-dots',
  'fa-wind',
  'fa-recycle'
];
safetyLines.forEach((line, idx) => {
  safetyItems.push({
    id: idx + 1,
    icon: safetyIcons[idx % safetyIcons.length],
    text: line.trim().slice(2)
  });
});

// Search Index for Ctrl+K modal
const SEARCH_INDEX = [];
parsedLessons.forEach(l => {
  SEARCH_INDEX.push({
    anchor: `bai-${l.id}`,
    badge: `Bài ${l.id}`,
    title: l.titleClean,
    subtitle: `${l.chapterTitle} • ${l.theme}`
  });
});
SEARCH_INDEX.push({
  anchor: 'bang-phuong-trinh',
  badge: 'Phương Trình',
  title: 'Bảng Phương Trình & Công Thức Trọng Tâm',
  subtitle: '18 phản ứng ester hóa, tráng bạc, điện phân, nhiệt phân, phức chất'
});
Object.values(reactionModels).forEach(m => {
  SEARCH_INDEX.push({
    anchor: `mo-hinh-phan-ung-${m.lessonId}`,
    badge: `Mô Hình B${m.lessonId}`,
    title: m.title,
    subtitle: `${m.tag} • ${m.badge}`
  });
});
SEARCH_INDEX.push({
  anchor: 'an-toan-thuc-hanh',
  badge: 'An Toàn',
  title: 'An Toàn Thực Hành Phòng Thí Nghiệm',
  subtitle: '6 nguyên tắc cốt lõi về bảo hộ, hóa chất đậm đặc, kim loại kiềm, điện phân và xử lý chất thải'
});
SEARCH_INDEX.push({
  anchor: 'dau-truong-trang-nguyen',
  badge: 'Thi Thử',
  title: 'Đấu trường Hóa Học Trạng Nguyên 12',
  subtitle: '20 câu hỏi trắc nghiệm khách quan 45 phút chuẩn ma trận đề thi tốt nghiệp'
});

console.log('Parsed successfully:', parsedLessons.length, 'lessons,', equationRows.length, 'equations,', safetyItems.length, 'safety rules.');

// Generate HTML
function buildHtml() {
  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hóa Học 12 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 8 Chương • 30 Bài • Trọn Vẹn Lý Thuyết, Phương Trình &amp; Đấu Trường)</title>
  <meta name="description" content="Tài liệu số hóa toàn diện Hóa Học 12 bộ Kết nối tri thức với cuộc sống: Đủ 8 chương, 30 bài học. Bao gồm khái niệm, cấu tạo, tính chất, phương trình, 8 sơ đồ tư duy SVG, bảng phản ứng cốt lõi và đấu trường 45 phút.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
              950: '#022c22',
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
      background-color: #ecfdf5;
      color: #047857;
      font-weight: 700;
      border-left: 3px solid #059669;
    }
    .dark .nav-link.active {
      background-color: rgba(6, 78, 59, 0.4);
      color: #a7f3d0;
      border-left-color: #10b981;
    }

    /* Chuẩn hóa Typography môn Hóa Học */
    body {
      letter-spacing: -0.011em;
    }
    .chem-formula {
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.02em;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-white">

  <!-- Reading Progress Bar -->
  <div id="reading-progress-bar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Main Top Navbar -->
  <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back -->
      <div class="flex items-center gap-3">
        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Mở menu">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-flask-vial text-lg"></i>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block leading-none">Hóa Học 12</span>
            <span class="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">Kết Nối Tri Thức</span>
          </div>
        </a>
      </div>

      <!-- Quick Jump Pill Links (Desktop) -->
      <nav class="hidden md:flex items-center gap-1.5 text-xs font-semibold">
        <a href="#chuong-1" class="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition">Ester - Lipid</a>
        <a href="#chuong-2" class="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition">Carbohydrate</a>
        <a href="#chuong-3" class="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition">N-Hợp chất</a>
        <a href="#chuong-5" class="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition">Pin &amp; Điện phân</a>
        <a href="#chuong-6" class="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition">Kim loại</a>
        <a href="#chuong-8" class="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition">Phức chất</a>
        <a href="#mo-hinh-phan-ung-1" class="px-3 py-1.5 rounded-lg text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold hover:bg-emerald-100 transition">
          <i class="fa-solid fa-atom mr-1 text-emerald-500"></i>Mô hình phản ứng
        </a>
        <a href="#bang-phuong-trinh" class="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/70 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-950/40 transition">Công thức</a>
        <a href="#dau-truong-trang-nguyen" class="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 hover:bg-emerald-200 transition font-bold">
          <i class="fa-solid fa-award mr-1"></i>Đấu Trường
        </a>
      </nav>

      <!-- Search & Dark Mode Controls -->
      <div class="flex items-center gap-2">
        <!-- Quick Search (Ctrl+K) -->
        <button onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span class="hidden sm:inline">Tìm kiếm bài học...</span>
          <kbd class="hidden sm:inline px-1.5 py-0.5 text-[10px] rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-mono">Ctrl K</kbd>
        </button>

        <!-- Dark/Light Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Chuyển chế độ giao diện">
          <i class="fa-solid fa-moon dark:hidden text-base"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-base text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Sidebar Drawer Backdrop -->
  <div id="mobile-backdrop" class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs hidden transition-opacity"></div>

  <!-- Body Container with Sidebar and Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1 flex gap-8">
    
    <!-- Left Navigation Sidebar -->
    <aside id="sidebar-drawer" class="fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-5 overflow-y-auto transform -translate-x-full lg:translate-x-0 lg:static lg:w-72 xl:w-80 lg:p-0 lg:bg-transparent lg:dark:bg-transparent lg:border-none shrink-0 transition-transform duration-300 ease-in-out">
      
      <!-- Mobile Drawer Header -->
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 lg:hidden">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-book-open text-emerald-600"></i>
          <span class="font-bold text-sm">Danh Mục Bài Học (30 Bài)</span>
        </div>
        <button id="close-drawer-btn" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Sticky Sidebar Wrapper -->
      <div class="sticky top-24 space-y-4">
        
        <!-- Quick Filter Input (User requirement: Menu hiện bài ra để người ta chọn bài học) -->
        <div class="relative">
          <input 
            type="text" 
            id="sidebar-filter-input" 
            oninput="filterSidebarLessons(this.value)" 
            placeholder="Lọc nhanh 30 bài học..." 
            class="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 dark:text-slate-200 shadow-2xs"
          >
          <i class="fa-solid fa-filter absolute left-3 top-2.5 text-xs text-slate-400"></i>
        </div>

        <!-- Lessons Tree Navigation -->
        <div class="rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 p-3 max-h-[calc(100vh-12rem)] overflow-y-auto space-y-3 shadow-2xs">
          
          <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 flex items-center justify-between">
            <span>MỤC LỤC CHI TIẾT</span>
            <span class="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px]">30 Bài</span>
          </div>

          <div id="sidebar-lesson-list" class="space-y-3">
            ${chapters.map(c => `
              <div class="sidebar-chapter-group">
                <a href="#chuong-${c.id}" class="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-emerald-950 dark:text-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-100/60 dark:hover:bg-emerald-900/40 transition">
                  <span class="truncate">${c.short}</span>
                  <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">${c.lessons.length} bài</span>
                </a>
                <div class="mt-1 ml-2 pl-2 border-l border-emerald-200 dark:border-emerald-900/50 space-y-1">
                  ${c.lessons.map(lId => {
                    const l = parsedLessons.find(item => item.id === lId);
                    return `
                      <a href="#bai-${l.id}" class="sidebar-lesson-item group flex items-start gap-2 px-2 py-1.5 rounded-lg text-[12px] text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition leading-snug">
                        <span class="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">B${l.id}.</span>
                        <span class="truncate group-hover:underline">${l.titleClean}</span>
                      </a>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}

            <!-- Special Sections in Sidebar -->
            <div class="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
              
              <!-- Mô hình phản ứng hóa học phân tử (Đủ 30 bài học) -->
              <div class="pt-1 space-y-1">
                <div class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 flex items-center justify-between">
                  <span>MÔ HÌNH HÓA HỌC</span>
                  <span class="px-1.5 py-0.2 rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-[9px] font-bold">30 Mô hình</span>
                </div>
                <div class="max-h-56 overflow-y-auto space-y-0.5 pr-1">
                  ${Object.values(reactionModels).map(m => `
                    <a href="#mo-hinh-phan-ung-${m.lessonId}" class="sidebar-model-item flex items-center gap-2 px-2 py-1 rounded-lg text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 transition">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span class="truncate">B${m.lessonId}: ${m.title.replace(/^Mô hình [^:]*:\s*/, '').slice(0, 30)}...</span>
                    </a>
                  `).join('')}
                </div>
              </div>

              <a href="#bang-phuong-trinh" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 transition">
                <i class="fa-solid fa-atom text-emerald-500 w-4"></i>
                <span>Bảng phương trình trọng tâm</span>
              </a>
              <a href="#an-toan-thuc-hanh" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 transition">
                <i class="fa-solid fa-shield-halved text-emerald-500 w-4"></i>
                <span>An toàn thực hành (6 quy chuẩn)</span>
              </a>
              <a href="#dau-truong-trang-nguyen" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition">
                <i class="fa-solid fa-trophy text-amber-500 w-4"></i>
                <span>Đấu trường Trạng Nguyên (45')</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 space-y-10">

      <!-- Hero Header Banner -->
      <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-800/40">
        <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-10 -top-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 space-y-4 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-extrabold uppercase tracking-wider">
            <i class="fa-solid fa-atom"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            KIẾN THỨC ĐẦY ĐỦ <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">HÓA HỌC 12</span>
          </h1>
          <p class="text-slate-200 text-sm sm:text-base leading-relaxed">
            Hệ thống hóa toàn diện đủ <strong>8 chương, 30 bài học</strong> theo chuẩn mục lục chương trình mới. Đầy đủ khái niệm, cấu tạo phân tử, phương trình phản ứng, sơ đồ tư duy SVG, câu hỏi trắc nghiệm tương tác và đấu trường Trạng Nguyên 45 phút.
          </p>

          <!-- Core Stat Counters -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span class="block text-2xl font-black text-emerald-300">8</span>
              <span class="text-xs text-slate-300">Chương Trọng Tâm</span>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span class="block text-2xl font-black text-teal-300">30</span>
              <span class="text-xs text-slate-300">Bài Học Toàn Diện</span>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span class="block text-2xl font-black text-emerald-400">30</span>
              <span class="text-xs text-slate-300">Mô Hình Phân Tử (Đủ 30 Bài)</span>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span class="block text-2xl font-black text-cyan-300">90</span>
              <span class="text-xs text-slate-300">Câu Hỏi Tương Tác</span>
            </div>
            <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span class="block text-2xl font-black text-amber-300">18+</span>
              <span class="text-xs text-slate-300">Phương Trình Cốt Lõi</span>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a href="#chuong-1" class="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/25 transition flex items-center gap-2">
              <i class="fa-solid fa-play"></i> Bắt Đầu Học Ngay
            </a>
            <a href="#mo-hinh-phan-ung-1" class="px-5 py-2.5 rounded-xl bg-teal-600/80 hover:bg-teal-600 text-white font-bold text-xs backdrop-blur-md border border-teal-400/40 transition flex items-center gap-2">
              <i class="fa-solid fa-atom"></i> 30 Mô Hình Phản Ứng (Đủ 30 Bài)
            </a>
            <a href="#bang-phuong-trinh" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-md border border-white/20 transition flex items-center gap-2">
              <i class="fa-solid fa-table-list"></i> Tra Cứu Phương Trình
            </a>
            <a href="#dau-truong-trang-nguyen" class="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-md transition flex items-center gap-2">
              <i class="fa-solid fa-trophy"></i> Đấu Trường Trạng Nguyên
            </a>
          </div>

        </div>
      </section>

      <!-- 8 Chapters Loop -->
      ${renderChaptersHtml()}

      <!-- Special Section 1: Bảng Phương Trình và Công Thức Trọng Tâm -->
      <section id="bang-phuong-trinh" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center text-lg font-black shadow-xs">
              <i class="fa-solid fa-atom"></i>
            </span>
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">TỔNG HỢP CỐT LÕI</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Bảng Phương Trình &amp; Công Thức Trọng Tâm</h2>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 w-fit">
            18 Phản ứng &amp; Định luật quan trọng
          </span>
        </div>

        <!-- Equations Table -->
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 uppercase font-extrabold text-[11px] tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th class="py-3 px-4 w-12 text-center">STT</th>
                <th class="py-3 px-4 w-52 sm:w-64">Nội Dung Phản Ứng / Định Luật</th>
                <th class="py-3 px-4">Phương Trình Hóa Học &amp; Công Thức</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              ${equationRows.map((r, rIdx) => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td class="py-3 px-4 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">${r.id}</td>
                  <td class="py-3 px-4 font-bold text-slate-900 dark:text-white">${r.name}</td>
                  <td class="py-3 px-4 chem-formula font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50/30 dark:bg-emerald-950/20">${r.formula}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Special Section 2: An Toàn Thực Hành -->
      <section id="an-toan-thuc-hanh" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <span class="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center text-lg font-black shadow-xs">
            <i class="fa-solid fa-shield-halved"></i>
          </span>
          <div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">PHÒNG THÍ NGHIỆM</span>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">An Toàn Thực Hành Hóa Học</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${safetyItems.map(item => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3.5 hover:border-emerald-300 transition">
              <span class="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-sm shadow-2xs">
                <i class="fa-solid ${item.icon}"></i>
              </span>
              <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                ${item.text}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Special Section 3: Nguồn và Phạm Vi -->
      <section class="rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 p-6 sm:p-8 space-y-3">
        <div class="flex items-center gap-2.5 text-emerald-900 dark:text-emerald-200 font-extrabold text-sm">
          <i class="fa-solid fa-circle-info text-emerald-600"></i>
          <span>Nguồn Và Phạm Vi Tài Liệu</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          ${nguonPhamViRaw.replace('## Nguồn và phạm vi', '').trim()}
        </p>
      </section>

      <!-- Special Section 4: Đấu Trường Hóa Học Trạng Nguyên 12 -->
      <section id="dau-truong-trang-nguyen" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-xl space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-emerald-400 text-slate-900 flex items-center justify-center text-xl font-black shadow-lg">
              <i class="fa-solid fa-trophy"></i>
            </span>
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-300">Đấu trường thử thách</span>
              <h3 class="text-xl sm:text-2xl font-black text-white">Đấu Trường Hóa Học Trạng Nguyên 12</h3>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
              <i class="fa-regular fa-clock text-emerald-300"></i>
              <span id="arena-timer" class="font-mono font-bold text-base text-emerald-300">45:00</span>
            </div>
            <button id="start-arena-btn" onclick="startArenaExam()" class="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-extrabold text-xs shadow-md transition">
              Bắt Đầu Làm Bài
            </button>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Đề thi 20 câu hỏi trắc nghiệm khách quan chuẩn cấu trúc đề thi Tốt nghiệp THPT Quốc Gia môn Hóa Học. Phủ đều 8 chương: Ester-Lipid, Carbohydrate, Amine-Amino acid-Protein, Polymer, Pin điện và Điện phân, Đại cương kim loại, Kiềm &amp; Kiềm thổ, Kim loại chuyển tiếp và Phức chất.
        </p>

        <!-- Arena Questions Container (Hidden Until Start) -->
        <div id="arena-container" class="hidden space-y-6 pt-4">
          <div id="arena-questions-list" class="space-y-4"></div>

          <div class="flex items-center justify-between pt-6 border-t border-white/10">
            <span class="text-xs text-slate-400">Chọn đầy đủ đáp án trước khi bấm Nộp bài.</span>
            <button onclick="submitArenaExam()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition">
              <i class="fa-solid fa-paper-plane mr-2"></i>Nộp Bài &amp; Xem Kết Quả
            </button>
          </div>

          <!-- Arena Result Card (Hidden Until Submit) -->
          <div id="arena-result" class="hidden p-6 rounded-2xl bg-white/10 border border-white/20 text-center space-y-3">
            <span id="arena-rank-badge" class="inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-400 text-slate-900"></span>
            <h4 id="arena-score-title" class="text-3xl font-black text-white"></h4>
            <p id="arena-score-desc" class="text-xs sm:text-sm text-slate-300"></p>
          </div>
        </div>
      </section>

    </main>

  </div>

  <!-- Search Modal (Ctrl+K) -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden flex items-start justify-center p-4 pt-20">
    <div class="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-emerald-600"></i>
        <input 
          type="text" 
          id="modal-search-input" 
          oninput="handleModalSearch(this.value)" 
          placeholder="Tìm bài học, ester, carbohydrate, pin điện, phức chất..." 
          class="w-full bg-transparent text-sm focus:outline-hidden text-slate-900 dark:text-white"
        >
        <button onclick="closeSearchModal()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs">
          <kbd class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">ESC</kbd>
        </button>
      </div>
      <div id="modal-search-results" class="p-2 overflow-y-auto space-y-1 divide-y divide-slate-100 dark:divide-slate-800/40 text-xs"></div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p>Học liệu Số Hóa Học Lớp 12 – Bộ Kết Nối Tri Thức Với Cuộc Sống (Chuẩn Chương Trình GDPT 2018)</p>
      <p>© 2026 CodeHub Platform. Hệ thống tra cứu và ôn thi tốt nghiệp toàn diện.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Search Index Data
    const SEARCH_INDEX = ${JSON.stringify(SEARCH_INDEX)};
    const EXAM_BANK = ${JSON.stringify(interactiveData.examQuestions)};

    // 1. Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      applyTheme(true);
    } else {
      applyTheme(false);
    }
    themeBtn.addEventListener('click', () => {
      applyTheme(!document.documentElement.classList.contains('dark'));
    });

    // 2. Reading Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('reading-progress-bar').style.width = scrolled + '%';
    });

    // 3. Mobile Sidebar Drawer
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('sidebar-drawer');
    const backdrop = document.getElementById('mobile-backdrop');

    function openDrawer() {
      drawer.classList.remove('-translate-x-full');
      backdrop.classList.remove('hidden');
    }
    function closeDrawer() {
      drawer.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
    }
    if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // 4. Sidebar Dynamic Filtering (user requirement: Menu hiện bài ra để người ta chọn bài học)
    function filterSidebarLessons(keyword) {
      const q = keyword.trim().toLowerCase();
      const items = document.querySelectorAll('.sidebar-lesson-item');
      const groups = document.querySelectorAll('.sidebar-chapter-group');
      const models = document.querySelectorAll('.sidebar-model-item');

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });

      models.forEach(m => {
        const text = m.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          m.style.display = 'flex';
        } else {
          m.style.display = 'none';
        }
      });

      groups.forEach(g => {
        const visibleItems = g.querySelectorAll('.sidebar-lesson-item[style="display: flex;"]');
        if (q && visibleItems.length === 0 && !g.querySelector('a').textContent.toLowerCase().includes(q)) {
          g.style.display = 'none';
        } else {
          g.style.display = 'block';
        }
      });
    }

    // 5. Interactive Mini-Quiz Checker
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
        resultsContainer.innerHTML = '<div class=\"text-center text-slate-400 py-8\">Nhập từ khóa để tra cứu tức thì toàn bộ 30 bài học Hóa học 12...</div>';
        return;
      }

      const matches = SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.subtitle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = '<div class=\"text-center text-slate-400 py-6\">Không tìm thấy kết quả phù hợp với \"' + query + '\"</div>';
        return;
      }

      resultsContainer.innerHTML = matches.map(m => \`
        <a href=\"#\${m.anchor}\" onclick=\"closeSearchModal()\" class=\"block p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-slate-800 transition\">
          <div class=\"flex items-center gap-2 mb-1\">
            <span class=\"px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-[10px]\">\${m.badge}</span>
            <span class=\"font-bold text-slate-900 dark:text-white text-xs sm:text-sm\">\${m.title}</span>
          </div>
          <div class=\"text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed truncate\">\${m.subtitle}</div>
        </a>
      \`).join('');
    }

    // 7. Đấu trường Trạng Nguyên Exam Logic
    let arenaSecondsLeft = 45 * 60;
    let arenaTimerInterval = null;
    const userAnswers = {};

    function startArenaExam() {
      document.getElementById('arena-container').classList.remove('hidden');
      document.getElementById('start-arena-btn').style.display = 'none';

      // Render Questions
      const list = document.getElementById('arena-questions-list');
      list.innerHTML = EXAM_BANK.map((q, idx) => \`
        <div class=\"p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3\">
          <div class=\"flex items-start gap-3\">
            <span class=\"w-6 h-6 rounded-full bg-emerald-400 text-slate-900 font-black text-xs flex items-center justify-center shrink-0 mt-0.5\">\${idx + 1}</span>
            <div class=\"font-semibold text-xs sm:text-sm text-slate-100 leading-relaxed\">\${q.q}</div>
          </div>
          <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1\">
            \${q.options.map((opt, oIdx) => \`
              <label class=\"flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer text-xs text-slate-200 transition\">
                <input type=\"radio\" name=\"arena_q_\${q.id}\" value=\"\${oIdx}\" onchange=\"recordArenaAnswer(\${q.id}, \${oIdx})\" class=\"text-emerald-500 focus:ring-0\">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id=\"arena-explain-\${q.id}\" class=\"hidden pt-2 text-xs text-emerald-200 border-t border-white/10\">
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

      const resultBox = document.getElementById('arena-result');
      const rankBadge = document.getElementById('arena-rank-badge');
      const scoreTitle = document.getElementById('arena-score-title');
      const scoreDesc = document.getElementById('arena-score-desc');

      resultBox.classList.remove('hidden');
      scoreTitle.textContent = \`\${score} / \${EXAM_BANK.length} Câu Đúng (\${(score / EXAM_BANK.length * 10).toFixed(1)} Điểm)\`;

      if (score >= 18) {
        rankBadge.textContent = 'Trạng Nguyên Hóa Học Xuất Sắc';
        rankBadge.className = 'inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-400 text-slate-900';
        scoreDesc.textContent = 'Xuất sắc! Bạn nắm vững toàn diện lý thuyết, bản chất phân tử, các phản ứng ester, carbohydrate, kim loại, điện phân và phức chất.';
      } else if (score >= 14) {
        rankBadge.textContent = 'Bảng Nhãn Hóa Học Khá Giỏi';
        rankBadge.className = 'inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-400 text-slate-900';
        scoreDesc.textContent = 'Rất tốt! Bạn có nền tảng vững vàng, hãy xem lại các câu giải thích chi tiết bên dưới để đạt điểm tối đa.';
      } else {
        rankBadge.textContent = 'Tiến Sĩ Hóa Học Cần Cố Gắng';
        rankBadge.className = 'inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-900';
        scoreDesc.textContent = 'Hãy ôn lại các kiến thức trọng tâm của 8 chương phía trên và thử sức lại nhé!';
      }

      resultBox.scrollIntoView({ behavior: 'smooth' });
    }
  </script>

</body>
</html>`;
}

// Render 8 Chapters and their 30 lessons
function renderChaptersHtml() {
  let html = '';

  chapters.forEach(c => {
    const chapterLessons = parsedLessons.filter(l => l.chapterId === c.id);
    const svgEntry = svgs[c.id.toString()] || {};
    const svgCode = typeof svgEntry === 'string' ? svgEntry : (svgEntry.svg || '');
    const svgNote = svgEntry.note || '';

    html += `
      <section id="chuong-${c.id}" class="scroll-mt-24 space-y-6">
        
        <!-- Chapter Header Card -->
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-black text-sm flex items-center justify-center shadow-xs">
                C${c.id}
              </span>
              <div>
                <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">CHƯƠNG ${c.id}</span>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">${c.title}</h2>
              </div>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 w-fit">
              ${chapterLessons.length} Bài học
            </span>
          </div>

          <!-- Vector Concept Diagram (SVG) -->
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-diagram-project text-emerald-500"></i>
                <span>Sơ đồ tư duy trực quan – Chương ${c.id}</span>
              </div>
              ${svgNote ? `<span class="hidden sm:inline text-[11px] font-normal text-slate-400 dark:text-slate-500 italic">${svgNote}</span>` : ''}
            </div>
            <div class="w-full overflow-x-auto rounded-2xl bg-slate-50 dark:bg-slate-950 p-3 sm:p-4 border border-slate-200 dark:border-slate-800 flex justify-center">
              ${svgCode}
            </div>
          </div>
        </div>

        <!-- Lessons in this Chapter -->
        <div class="space-y-6">
          ${chapterLessons.map(l => {
            return `
              <article id="bai-${l.id}" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                
                <!-- Lesson Header -->
                <div class="pb-4 border-b border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono font-bold text-xs">
                      Bài ${l.id}
                    </span>
                    <span class="text-xs font-bold text-slate-400 dark:text-slate-500">Kết Nối Tri Thức 12</span>
                  </div>
                  <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    ${l.title}
                  </h3>
                  <div class="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-xs sm:text-[13px] text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5">
                    <i class="fa-solid fa-lightbulb text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"></i>
                    <span><strong>Trọng tâm bài học:</strong> ${l.theme}</span>
                  </div>
                </div>

                ${reactionModels[l.id] ? `
                  <!-- Mô hình phản ứng hoá học phân tử (giống lớp 11) -->
                  <div id="mo-hinh-phan-ung-${l.id}" class="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/50 dark:from-slate-800/90 dark:via-slate-900/80 dark:to-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/70 shadow-sm space-y-3.5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-emerald-100 dark:border-emerald-900/60">
                      <div class="flex items-center gap-2.5">
                        <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm shadow-xs">
                          <i class="fa-solid fa-atom"></i>
                        </span>
                        <div>
                          <span class="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">${reactionModels[l.id].tag}</span>
                          <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">${reactionModels[l.id].title}</h4>
                        </div>
                      </div>
                      <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 self-start sm:self-auto flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ${reactionModels[l.id].badge}
                      </span>
                    </div>
                    <div class="overflow-x-auto py-1">
                      ${reactionModels[l.id].svg}
                    </div>
                    <div class="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-emerald-100 dark:border-emerald-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong class="font-bold text-emerald-900 dark:text-emerald-300"><i class="fa-solid fa-circle-nodes mr-1 text-emerald-600"></i> Cơ chế bẻ gãy &amp; hình thành liên kết:</strong> ${reactionModels[l.id].mechanism}
                    </div>
                  </div>
                ` : ''}

                <!-- Lesson Core Content -->
                <div class="lesson-content space-y-4">
                  ${l.bodyHtml}
                </div>

                <!-- Interactive Mini-Quiz for this Lesson -->
                <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center text-xs font-black">
                        <i class="fa-solid fa-circle-question"></i>
                      </span>
                      <h4 class="text-sm font-bold text-slate-900 dark:text-white">Luyện tập nhanh – Bài ${l.id}</h4>
                    </div>
                    <span class="text-[11px] text-slate-400">3 câu hỏi trắc nghiệm tương tác</span>
                  </div>

                  <div class="space-y-4">
                    ${l.quizzes.map((q, qIdx) => `
                      <div id="quiz-box-${l.id}-${qIdx}" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-3">
                        <div class="flex items-start gap-2.5">
                          <span class="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 dark:bg-emerald-800 dark:text-emerald-100 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                            ${qIdx + 1}
                          </span>
                          <p class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                            ${q.q || q.question}
                          </p>
                        </div>

                        <!-- 4 Options -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          ${q.options.map((opt, oIdx) => `
                            <button type="button" onclick="checkMiniQuiz(${l.id}, ${qIdx}, ${oIdx}, ${q.answer})" class="quiz-option-btn w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-left text-xs text-slate-700 dark:text-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition shadow-2xs">
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
                          <div class="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 pt-1 border-t border-emerald-200/50 dark:border-emerald-900/40">
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
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoa_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoa12.html'
];

targetPaths.forEach(p => {
  fs.writeFileSync(p, fullHtml, 'utf8');
  console.log('Saved:', p, 'Size:', fullHtml.length, 'bytes');
});

console.log('Build complete for Hóa Học 12!');
