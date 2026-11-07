// scratch/build_van12_complete.js
const fs = require('fs');
const path = require('path');
const svgs = require('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/van12_svgs.js');
const interactiveData = require('C:/Users/ADMIN/.gemini/antigravity/scratch/van12_interactive_data.js');

const userReqPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_van12.md';
const content = fs.readFileSync(userReqPath, 'utf8');

// Unit titles in user request
const unitHeaders = [
  { id: 1, title: 'Bài 1. Khả năng lớn lao của tiểu thuyết', short: 'Khả năng lớn lao của tiểu thuyết', vol: 1, texts: ['Xuân Tóc Đỏ cứu quốc', 'Mùa lá rụng trong vườn', 'Trên xuồng cứu nạn'] },
  { id: 2, title: 'Bài 2. Những thế giới thơ', short: 'Những thế giới thơ', vol: 1, texts: ['Cảm hoài', 'Tây Tiến', 'Đàn ghi ta của Lor-ca', 'Bài thơ số 28'] },
  { id: 3, title: 'Bài 3. Lập luận trong văn bản nghị luận', short: 'Lập luận trong văn bản nghị luận', vol: 1, texts: ['Nhìn về vốn văn hóa dân tộc', 'Năng lực sáng tạo', 'Mấy ý nghĩ về thơ', 'Cảm hứng và sáng tạo'] },
  { id: 4, title: 'Bài 4. Yếu tố kì ảo trong truyện kể', short: 'Yếu tố kì ảo trong truyện kể', vol: 1, texts: ['Hải khẩu linh từ', 'Muối của rừng', 'Bến trần gian'] },
  { id: 5, title: 'Bài 5. Tiếng cười của hài kịch', short: 'Tiếng cười của hài kịch', vol: 1, texts: ['Nhân vật quan trọng', 'Giấu của', 'Cẩn thận hão'] },
  { id: 6, title: 'Bài 6. Hồ Chí Minh – “Văn hóa phải soi đường cho quốc dân đi”', short: 'Hồ Chí Minh – Văn hóa soi đường', vol: 2, texts: ['Tuyên ngôn Độc lập', 'Mộ', 'Nguyên tiêu', 'Va-ren và Phan Bội Châu', 'Vọng nguyệt', 'Cảnh khuya'] },
  { id: 7, title: 'Bài 7. Sự thật trong tác phẩm kí', short: 'Sự thật trong tác phẩm kí', vol: 2, texts: ['Nghệ thuật băm thịt gà', 'Bước vào đời', 'Vĩ tuyến 17'] },
  { id: 8, title: 'Bài 8. Dữ liệu trong văn bản thông tin', short: 'Dữ liệu trong văn bản thông tin', vol: 2, texts: ['Pa-ra-na', 'Khai phóng Đông Kinh Nghĩa Thục', 'Đời muối', 'Sách thay đổi lịch sử'] },
  { id: 9, title: 'Bài 9. Văn học và cuộc đời', short: 'Văn học và cuộc đời', vol: 2, texts: ['Vội vàng', 'Trở về (Ông già và biển cả)', 'Hồn Trương Ba, da hàng thịt', 'Khúc đồng quê'] }
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

    // Headers #### (Sub-work or Language practice)
    if (line.startsWith('#### ')) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inOl) { html += '</ol>\n'; inOl = false; }
      const headerText = line.replace('#### ', '').trim();
      
      let badge = 'fa-file-lines';
      let badgeBg = 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300';
      if (headerText.includes('Thực hành tiếng Việt')) {
        badge = 'fa-spell-check';
        badgeBg = 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300';
      }

      html += `
        <div class="mt-6 mb-3 pb-2 border-b border-rose-100 dark:border-rose-900/40 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="w-7 h-7 rounded-lg ${badgeBg} flex items-center justify-center text-xs shrink-0 shadow-2xs">
              <i class="fa-solid ${badge}"></i>
            </span>
            <h5 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">${headerText}</h5>
          </div>
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
          <span class="w-6 h-6 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">${numMatch[1]}</span>
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
          <span class="w-2 h-2 rounded-full bg-rose-500 mt-2.5 shrink-0 shadow-2xs"></span>
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

// Parse each unit from content
const parsedUnits = [];
for (let i = 0; i < unitHeaders.length; i++) {
  const current = unitHeaders[i];
  const startIdx = content.indexOf('## ' + current.title.split(' – ')[0]);
  const endIdx = (i + 1 < unitHeaders.length)
    ? content.indexOf('## ' + unitHeaders[i+1].title.split(' – ')[0])
    : content.indexOf('# Khung kĩ năng');
  
  const rawBlock = content.slice(startIdx, endIdx).trim();

  // Extract sections
  let triThuc = '';
  let docHieu = '';
  let vietNoiNghe = '';
  let thucHanhDoc = '';

  const ttIdx = rawBlock.indexOf('### Tri thức ngữ văn');
  const vbIdx = rawBlock.indexOf('### Văn bản đọc');
  const vnnIdx = rawBlock.indexOf('### Viết và nói-nghe');
  const thdIdx = rawBlock.indexOf('### Thực hành đọc:');

  if (ttIdx !== -1 && vbIdx !== -1) {
    triThuc = rawBlock.slice(ttIdx + 20, vbIdx).trim();
  }
  if (vbIdx !== -1 && vnnIdx !== -1) {
    docHieu = rawBlock.slice(vbIdx + 15, vnnIdx).trim();
  }
  if (vnnIdx !== -1 && thdIdx !== -1) {
    vietNoiNghe = rawBlock.slice(vnnIdx + 20, thdIdx).trim();
  }
  if (thdIdx !== -1) {
    thucHanhDoc = rawBlock.slice(thdIdx).trim();
  }

  parsedUnits.push({
    ...current,
    theme: interactiveData.unitThemes[current.id],
    triThuc,
    docHieu,
    vietNoiNghe,
    thucHanhDoc,
    svg: svgs[current.id],
    quizzes: interactiveData.unitQuizzes[current.id]
  });
}

// Parse Khung kĩ năng tổng hợp
const khungKiNangRaw = content.slice(content.indexOf('# Khung kĩ năng')).trim();
const docHieuKnRaw = khungKiNangRaw.slice(khungKiNangRaw.indexOf('## Đọc hiểu tác phẩm văn học') + 28, khungKiNangRaw.indexOf('## Viết nghị luận văn học')).trim();
const vietNlvhRaw = khungKiNangRaw.slice(khungKiNangRaw.indexOf('## Viết nghị luận văn học') + 25, khungKiNangRaw.indexOf('## Nghị luận xã hội')).trim();
const nlxhRaw = khungKiNangRaw.slice(khungKiNangRaw.indexOf('## Nghị luận xã hội') + 33, khungKiNangRaw.indexOf('## Nói, nghe và tranh biện')).trim();
const noiNgheRaw = khungKiNangRaw.slice(khungKiNangRaw.indexOf('## Nói, nghe và tranh biện') + 26, khungKiNangRaw.indexOf('## Danh mục đủ văn bản')).trim();
const danhMucRaw = khungKiNangRaw.slice(khungKiNangRaw.indexOf('## Danh mục đủ văn bản') + 22, khungKiNangRaw.indexOf('## Nguồn và phạm vi')).trim();
const nguonPhamViRaw = khungKiNangRaw.slice(khungKiNangRaw.indexOf('## Nguồn và phạm vi') + 19).replace('</USER_REQUEST>', '').trim();

// Search index builder
const searchIndex = [];
parsedUnits.forEach(u => {
  searchIndex.push({
    id: `bai-${u.id}`,
    badge: `Bài ${u.id} (Tập ${u.vol})`,
    title: u.title,
    subtitle: u.theme
  });
  u.texts.forEach(t => {
    searchIndex.push({
      id: `bai-${u.id}`,
      badge: `Tác phẩm • Bài ${u.id}`,
      title: t,
      subtitle: `${u.title} • Bộ sách Kết nối tri thức với cuộc sống 12`
    });
  });
});
searchIndex.push({
  id: 'khung-ki-nang',
  badge: 'Kĩ Năng',
  title: 'Khung kĩ năng tổng hợp (Đọc hiểu, Viết, Nói & Nghe)',
  subtitle: 'Tiêu chuẩn 4 kĩ năng chuẩn mực chương trình GDPT 2018 Ngữ văn 12'
});
searchIndex.push({
  id: 'danh-muc-van-ban',
  badge: 'Mục Lục',
  title: 'Danh mục đủ 34 văn bản đọc trong hai tập',
  subtitle: 'Hệ thống hóa toàn bộ 34 tác phẩm văn học, nghị luận và thông tin'
});
searchIndex.push({
  id: 'dau-truong-trang-nguyen',
  badge: 'Thi Thử',
  title: 'Đấu trường Văn học Trạng Nguyên 12',
  subtitle: '20 câu hỏi tổng hợp 45 phút chuẩn ma trận đề thi tốt nghiệp THPT'
});

console.log('Parsed', parsedUnits.length, 'units successfully!');

// Generate HTML
function buildHtml() {
  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ngữ Văn 12 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 2 Tập • 9 Bài Lớn • Toàn Diện Kiến Thức &amp; Kĩ Năng)</title>
  <meta name="description" content="Tài liệu số hóa toàn diện Ngữ Văn 12 bộ Kết nối tri thức với cuộc sống: Đủ 2 tập, 9 bài học. Đầy đủ Tri thức ngữ văn, Đọc hiểu văn bản, Thực hành tiếng Việt, Viết, Nói và nghe, Sơ đồ tư duy SVG, Ôn tập và Đấu trường trắc nghiệm.">
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
            brand: {
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
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
      background-color: #ffe4e6;
      color: #be123c;
      font-weight: 700;
      border-left: 3px solid #e11d48;
    }
    .dark .nav-link.active {
      background-color: rgba(136, 19, 55, 0.4);
      color: #fecdd3;
      border-left-color: #f43f5e;
    }

    /* Chuẩn hóa Typography môn Ngữ văn: Giãn dòng, thưa chữ, êm mắt khi đọc */
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
  <div id="read-progress" class="fixed top-0 left-0 h-1 bg-rose-600 dark:bg-rose-400 z-50 transition-all duration-100" style="width: 0%"></div>

  <!-- Header & Navbar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors" title="Về trang chủ">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </a>
        <div>
          <span class="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/80 text-rose-700 dark:text-rose-300">Kết nối tri thức</span>
          <h1 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white truncate">
            Ngữ Văn 12 — Trọn Bộ 9 Bài Học 2 Tập
          </h1>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Mobile Menu Toggle Button -->
        <button onclick="toggleMobileMenu()" class="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <span>Menu Bài</span>
        </button>

        <!-- Search Trigger (Ctrl+K) -->
        <button onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:border-rose-400 transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span class="hidden md:inline">Tìm kiếm...</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded">Ctrl+K</kbd>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 transition-colors" title="Đổi giao diện sáng/tối">
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
          <span class="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-900 text-rose-600 font-bold">📚</span>
          <span class="font-bold text-sm text-slate-900 dark:text-white">Mục Lục Chọn Bài</span>
        </div>
        <button onclick="toggleMobileMenu()" class="p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="py-2.5">
        <input type="text" oninput="filterSidebarLessons(this.value, 'mobile-nav')" placeholder="🔍 Lọc bài học hoặc tác phẩm..." class="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500">
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
        <div class="p-4 rounded-2xl bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-transparent border border-rose-200/50 dark:border-rose-800/50 shadow-xs space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-extrabold text-rose-700 dark:text-rose-300 uppercase tracking-wider">MỤC LỤC CHỌN BÀI</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300 font-bold">9 Bài • 34 Văn bản</span>
          </div>
          <div class="text-xs font-bold text-slate-800 dark:text-slate-100">Bấm bài học bất kì để học ngay:</div>
          
          <!-- Instant filter inside sidebar -->
          <div>
            <input type="text" id="desktop-sidebar-filter" oninput="filterSidebarLessons(this.value, 'desktop-nav')" placeholder="🔍 Lọc bài hoặc tác phẩm..." class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-2xs">
          </div>
        </div>

        <!-- Full Chapter & Lesson Tree Navigation -->
        <nav id="desktop-nav" class="space-y-4 text-xs font-medium max-h-[calc(100vh-18rem)] overflow-y-auto pr-1">
          ${renderSidebarLinks('desktop')}
        </nav>

        <!-- Exam Arena Card Banner in Sidebar -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-md space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-bold">
              <i class="fa-solid fa-trophy text-amber-300 text-xs"></i>
            </span>
            <div>
              <h4 class="font-bold text-xs">Đấu Trường Trạng Nguyên 12</h4>
              <p class="text-[10px] text-rose-100">20 câu tổng hợp • 45 phút</p>
            </div>
          </div>
          <p class="text-[11px] text-rose-100 leading-normal">Đề thi trắc nghiệm bao quát trọn bộ 9 bài học theo chuẩn đề thi tốt nghiệp THPT Quốc gia.</p>
          <a href="#dau-truong-trang-nguyen" class="block w-full py-1.5 rounded-xl bg-white text-rose-700 font-bold text-xs text-center hover:bg-rose-50 shadow-sm transition">
            Vào Thi Ngay
          </a>
        </div>

      </aside>

      <!-- MAIN CONTENT AREA (9 Cols) -->
      <main class="lg:col-span-9 space-y-12">
        
        <!-- Hero Banner -->
        <div class="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-600 via-pink-600 to-red-700 text-white shadow-xl">
          <div class="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="relative z-10 space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-rose-100">
              <i class="fa-solid fa-graduation-cap"></i> Bộ Sách Kết Nối Tri Thức Với Cuộc Sống
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
              KIẾN THỨC ĐẦY ĐỦ NGỮ VĂN 12
            </h2>
            <p class="text-sm sm:text-base text-rose-100 max-w-2xl leading-relaxed">
              Hệ thống hóa toàn diện đủ <strong>9 bài học lớn</strong> của hai tập (Tập một và Tập hai). Mỗi bài tích hợp đầy đủ Tri thức ngữ văn, Đọc hiểu văn bản, Thực hành tiếng Việt, Kĩ năng Viết và Nói-nghe, Thực hành đọc, Sơ đồ tư duy SVG và Trắc nghiệm củng cố.
            </p>
            
            <!-- Quick Feature Stats Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">9 Bài</div>
                <div class="text-[11px] text-rose-200">2 Tập trọn vẹn</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">34 Văn Bản</div>
                <div class="text-[11px] text-rose-200">Phân tích sâu sắc</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">9 Sơ Đồ SVG</div>
                <div class="text-[11px] text-rose-200">Trực quan hóa tư duy</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div class="text-xl font-black">47 Câu Hỏi</div>
                <div class="text-[11px] text-rose-200">27 Quiz + 20 Đấu trường</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Overview Widget -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg">
              <i class="fa-solid fa-chart-line"></i>
            </span>
            <div>
              <div class="font-bold text-sm text-slate-900 dark:text-white">Tiến Độ Tự Học Của Bạn</div>
              <div id="progress-text" class="text-xs text-slate-500 dark:text-slate-400">Đã hoàn thành 0 / 9 bài học (0%)</div>
            </div>
          </div>
          <div class="w-full sm:w-64 bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div id="progress-bar-fill" class="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- Render 9 Lessons -->
        ${renderLessonsHtml()}

        <!-- Khung Kĩ Năng Tổng Hợp -->
        <section id="khung-ki-nang" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg shadow-sm">
              <i class="fa-solid fa-compass"></i>
            </span>
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Chuyên mục xuyên suốt</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Khung Kĩ Năng Tổng Hợp</h3>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Đọc hiểu tác phẩm văn học -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <h4 class="font-bold text-base text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                <i class="fa-solid fa-book-reader text-sm"></i> 1. Đọc hiểu tác phẩm văn học
              </h4>
              ${formatMarkdownToHtml(docHieuKnRaw)}
            </div>

            <!-- Viết nghị luận văn học -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <h4 class="font-bold text-base text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                <i class="fa-solid fa-pen-nib text-sm"></i> 2. Viết nghị luận văn học
              </h4>
              ${formatMarkdownToHtml(vietNlvhRaw)}
            </div>

            <!-- Nghị luận xã hội, thư và báo cáo -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <h4 class="font-bold text-base text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                <i class="fa-solid fa-envelope-open-text text-sm"></i> 3. Nghị luận xã hội, thư và báo cáo
              </h4>
              ${formatMarkdownToHtml(nlxhRaw)}
            </div>

            <!-- Nói, nghe và tranh biện -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <h4 class="font-bold text-base text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                <i class="fa-solid fa-comments text-sm"></i> 4. Nói, nghe và tranh biện
              </h4>
              ${formatMarkdownToHtml(noiNgheRaw)}
            </div>

          </div>
        </section>

        <!-- Danh mục đủ văn bản đọc trong 2 tập -->
        <section id="danh-muc-van-ban" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center text-lg shadow-sm">
              <i class="fa-solid fa-list-check"></i>
            </span>
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400">Danh mục đầy đủ</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Danh Mục Đủ 34 Văn Bản Đọc Trong Hai Tập</h3>
            </div>
          </div>

          <div class="prose max-w-none text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 space-y-4">
            ${formatMarkdownToHtml(danhMucRaw)}
          </div>

          <!-- Nguồn và phạm vi -->
          <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 flex items-start gap-3">
            <span class="text-rose-600 text-lg mt-0.5"><i class="fa-solid fa-circle-info"></i></span>
            <div class="text-xs sm:text-sm text-rose-900 dark:text-rose-200 leading-relaxed">
              <strong>Nguồn và phạm vi:</strong> ${nguonPhamViRaw}
            </div>
          </div>
        </section>

        <!-- Đấu trường Văn học Trạng Nguyên 12 -->
        <section id="dau-truong-trang-nguyen" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div class="flex items-center gap-3">
              <span class="w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center text-xl font-black shadow-lg">
                <i class="fa-solid fa-trophy"></i>
              </span>
              <div>
                <span class="text-xs font-extrabold uppercase tracking-wider text-amber-300">Đấu trường thử thách</span>
                <h3 class="text-xl sm:text-2xl font-black text-white">Đấu Trường Văn Học Trạng Nguyên 12</h3>
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
            Bài kiểm tra tổng hợp gồm <strong>20 câu hỏi trắc nghiệm khách quan</strong> bao quát toàn bộ 9 bài học Ngữ văn 12. Bài làm có bấm giờ 45 phút, chấm điểm tự động và giải thích chi tiết từng câu.
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
        <input type="text" id="modal-search-input" oninput="handleModalSearch(this.value)" placeholder="Tìm bài học, tác giả, tác phẩm, thuật ngữ..." class="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none">
        <button onclick="closeSearchModal()" class="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs">
          <kbd class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">ESC</kbd>
        </button>
      </div>
      <div id="modal-search-results" class="flex-1 overflow-y-auto p-4 space-y-2 text-xs">
        <div class="text-center text-slate-400 py-8">Nhập từ khóa để tra cứu tức thì toàn bộ 9 bài học Ngữ văn 12...</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p>Ngữ Văn 12 — Bộ Sách Kết Nối Tri Thức Với Cuộc Sống (Tập Một &amp; Tập Hai)</p>
      <p class="text-slate-400">Hệ thống hóa phục vụ học tập, ôn thi tốt nghiệp THPT Quốc gia theo chương trình GDPT 2018.</p>
    </div>
  </footer>

  <!-- Scripts -->
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
    let readLessons = JSON.parse(localStorage.getItem('nguvan12_read') || '[]');

    function updateProgressUI() {
      const count = readLessons.length;
      const pct = Math.round((count / 9) * 100);
      const textElem = document.getElementById('progress-text');
      const barElem = document.getElementById('progress-bar-fill');
      if (textElem) textElem.textContent = \`Đã hoàn thành \${count} / 9 bài học (\${pct}%)\`;
      if (barElem) barElem.style.width = \`\${pct}%\`;

      for (let i = 1; i <= 9; i++) {
        const isRead = readLessons.includes(i);
        const iconD = document.getElementById(\`check-side-\${i}\`);
        const iconM = document.getElementById(\`check-side-mobile-\${i}\`);
        const btn = document.getElementById(\`mark-btn-\${i}\`);
        if (iconD) iconD.className = isRead ? 'fa-solid fa-circle-check text-rose-500 text-[10px]' : 'fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]';
        if (iconM) iconM.className = isRead ? 'fa-solid fa-circle-check text-rose-500 text-[10px]' : 'fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]';
        if (btn) {
          btn.innerHTML = isRead ? '<i class=\"fa-solid fa-check mr-1.5\"></i> Đã hoàn thành' : '<i class=\"fa-regular fa-circle mr-1.5\"></i> Đánh dấu hoàn thành';
          btn.className = isRead 
            ? 'px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold'
            : 'px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-xs font-semibold transition';
        }
      }
    }

    function toggleLessonCompletion(num) {
      if (readLessons.includes(num)) {
        readLessons = readLessons.filter(n => n !== num);
      } else {
        readLessons.push(num);
      }
      localStorage.setItem('nguvan12_read', JSON.stringify(readLessons));
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
        const texts = (item.getAttribute('data-texts') || '').toLowerCase();
        if (!q || title.includes(q) || texts.includes(q)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // 5. Interactive Mini-Quiz Checking
    function checkMiniQuiz(unitId, qIdx, selectedOpt, correctOpt) {
      const container = document.getElementById(\`quiz-box-\${unitId}-\${qIdx}\`);
      if (!container) return;
      const options = container.querySelectorAll('.quiz-option-btn');
      const explain = document.getElementById(\`quiz-explain-\${unitId}-\${qIdx}\`);

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
        resultsContainer.innerHTML = '<div class=\"text-center text-slate-400 py-8\">Nhập từ khóa để tra cứu tức thì toàn bộ 9 bài học Ngữ văn 12...</div>';
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
        <a href=\"#\${m.id}\" onclick=\"closeSearchModal()\" class=\"block p-3 rounded-2xl hover:bg-rose-50 dark:hover:bg-slate-800 border border-transparent hover:border-rose-200 dark:hover:border-slate-700 transition\">
          <div class=\"flex items-center gap-2 mb-1\">
            <span class=\"px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300\">\${m.badge}</span>
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
                <input type=\"radio\" name=\"arena_q_\${q.id}\" value=\"\${oIdx}\" onchange=\"recordArenaAnswer(\${q.id}, \${oIdx})\" class=\"text-rose-500 focus:ring-0\">
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

// Helper: Render sidebar tree items
function renderSidebarLinks(mode) {
  const suffix = mode === 'mobile' ? '-mobile' : '';

  let html = `
    <!-- Tập Một -->
    <div class="sidebar-volume-group space-y-1">
      <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-2 py-1">
        <span><i class="fa-solid fa-book-open mr-1"></i> Tập Một (Bài 1 - 5)</span>
        <span class="text-[10px] text-slate-400">5 Bài lớn</span>
      </div>
      <ul class="space-y-1">
  `;

  for (let i = 1; i <= 5; i++) {
    const u = parsedUnits.find(unit => unit.id === i);
    html += `
      <li class="sidebar-lesson-item" data-title="${u.title}" data-texts="${u.texts.join(' ')}">
        <a href="#bai-${i}" class="nav-link flex flex-col p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-slate-800 transition">
          <div class="flex items-center justify-between font-bold text-xs">
            <span>Bài ${i}. ${u.short}</span>
            <i id="check-side${suffix}-${i}" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i>
          </div>
          <div class="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
            ${u.texts.join(' • ')}
          </div>
        </a>
      </li>
    `;
  }

  html += `
      </ul>
    </div>

    <!-- Tập Hai -->
    <div class="sidebar-volume-group space-y-1 pt-3 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-2 py-1">
        <span><i class="fa-solid fa-feather-pointed mr-1"></i> Tập Hai (Bài 6 - 9)</span>
        <span class="text-[10px] text-slate-400">4 Bài lớn</span>
      </div>
      <ul class="space-y-1">
  `;

  for (let i = 6; i <= 9; i++) {
    const u = parsedUnits.find(unit => unit.id === i);
    html += `
      <li class="sidebar-lesson-item" data-title="${u.title}" data-texts="${u.texts.join(' ')}">
        <a href="#bai-${i}" class="nav-link flex flex-col p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-slate-800 transition">
          <div class="flex items-center justify-between font-bold text-xs">
            <span>Bài ${i}. ${u.short}</span>
            <i id="check-side${suffix}-${i}" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i>
          </div>
          <div class="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
            ${u.texts.join(' • ')}
          </div>
        </a>
      </li>
    `;
  }

  html += `
      </ul>
    </div>

    <!-- Tổng hợp & Kĩ năng -->
    <div class="space-y-1 pt-3 border-t border-slate-100 dark:border-slate-800">
      <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2 py-1">Kĩ Năng &amp; Tổng Hợp</div>
      <ul class="space-y-1">
        <li>
          <a href="#khung-ki-nang" class="nav-link flex items-center gap-2 p-2 rounded-xl text-indigo-700 dark:text-indigo-400 font-bold hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition">
            <i class="fa-solid fa-compass text-xs"></i> Khung Kĩ Năng Xuyên Suốt
          </a>
        </li>
        <li>
          <a href="#danh-muc-van-ban" class="nav-link flex items-center gap-2 p-2 rounded-xl text-rose-700 dark:text-rose-400 font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition">
            <i class="fa-solid fa-list-check text-xs"></i> Đủ 34 Văn Bản Hai Tập
          </a>
        </li>
        <li>
          <a href="#dau-truong-trang-nguyen" class="nav-link flex items-center gap-2 p-2 rounded-xl text-amber-700 dark:text-amber-400 font-bold hover:bg-amber-50 dark:hover:bg-amber-950/40 transition">
            <i class="fa-solid fa-trophy text-xs"></i> Đấu Trường Trạng Nguyên
          </a>
        </li>
      </ul>
    </div>
  `;

  return html;
}

// Helper: Render all 9 Lesson Cards HTML
function renderLessonsHtml() {
  return parsedUnits.map(u => `
    <article id="bai-${u.id}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
      
      <!-- Lesson Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div class="space-y-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 uppercase tracking-wider">
              Tập ${u.vol} • Bài ${u.id}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              ${u.texts.length} Văn bản đọc
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            ${u.title}
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            ${u.theme}
          </p>
        </div>

        <button id="mark-btn-${u.id}" onclick="toggleLessonCompletion(${u.id})" class="self-start sm:self-center shrink-0 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 dark:bg-slate-800 dark:text-slate-300 text-xs font-semibold transition">
          <i class="fa-regular fa-circle mr-1.5"></i> Đánh dấu hoàn thành
        </button>
      </div>

      <!-- Section 1: Tri thức ngữ văn -->
      <div class="space-y-3">
        <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold text-sm sm:text-base">
          <i class="fa-solid fa-bookmark"></i>
          <h4>Tri Thức Ngữ Văn Trọng Tâm</h4>
        </div>
        <div class="p-5 sm:p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
          ${formatMarkdownToHtml(u.triThuc)}
        </div>
      </div>

      <!-- Section 2: Văn bản đọc chính & Thực hành tiếng Việt -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold text-sm sm:text-base">
          <i class="fa-solid fa-book-open-reader"></i>
          <h4>Đọc Hiểu Tác Phẩm &amp; Thực Hành Tiếng Việt</h4>
        </div>
        <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
          ${formatMarkdownToHtml(u.docHieu)}
        </div>
      </div>

      <!-- Section 3: Viết và nói-nghe -->
      <div class="space-y-3">
        <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold text-sm sm:text-base">
          <i class="fa-solid fa-pen-ruler"></i>
          <h4>Kĩ Năng Viết Và Nói - Nghe</h4>
        </div>
        <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
          ${formatMarkdownToHtml(u.vietNoiNghe)}
        </div>
      </div>

      <!-- Section 4: Thực hành đọc -->
      <div class="space-y-3">
        <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold text-sm sm:text-base">
          <i class="fa-solid fa-compass"></i>
          <h4>Thực Hành Đọc Mở Rộng</h4>
        </div>
        <div class="p-5 sm:p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          ${formatMarkdownToHtml(u.thucHanhDoc)}
        </div>
      </div>

      <!-- Section 5: Sơ đồ tư duy trực quan SVG -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold text-sm sm:text-base">
            <i class="fa-solid fa-diagram-project"></i>
            <h4>Sơ Đồ Tư Duy Trực Quan</h4>
          </div>
          <span class="text-[11px] text-slate-400 font-medium">SVG Vector Minh Họa</span>
        </div>
        <div class="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-3">
          <p class="text-xs text-slate-500 dark:text-slate-400 italic">
            <i class="fa-solid fa-circle-info mr-1"></i> ${u.svg.note}
          </p>
          <div class="w-full overflow-x-auto py-2">
            ${u.svg.svg}
          </div>
        </div>
      </div>

      <!-- Section 6: Mini-Quiz Củng cố (3 câu) -->
      <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold text-sm sm:text-base">
            <i class="fa-solid fa-circle-question"></i>
            <h4>Trắc Nghiệm Củng Cố Bài ${u.id} (3 Câu)</h4>
          </div>
          <span class="text-[11px] text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-950/40 px-2.5 py-0.5 rounded-full">
            Tự kiểm tra tức thì
          </span>
        </div>

        <div class="grid grid-cols-1 gap-4">
          ${u.quizzes.map((q, qIdx) => `
            <div id="quiz-box-${u.id}-${qIdx}" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div class="flex items-start gap-2.5">
                <span class="w-5 h-5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ${qIdx + 1}
                </span>
                <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-relaxed">
                  ${q.q}
                </p>
              </div>

              <!-- Options -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                ${q.options.map((opt, oIdx) => `
                  <button type="button" onclick="checkMiniQuiz(${u.id}, ${qIdx}, ${oIdx}, ${q.answer})" class="quiz-option-btn w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-left text-xs text-slate-700 dark:text-slate-200 hover:border-rose-400 hover:bg-rose-50/50 dark:hover:bg-rose-950/30 transition shadow-2xs">
                    <span class="font-bold mr-1">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                  </button>
                `).join('')}
              </div>

              <!-- Explanation Box (Initially Hidden) -->
              <div id="quiz-explain-${u.id}-${qIdx}" class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5 text-xs">
                <div class="text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-check"></i> Giải thích chi tiết:
                </div>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${q.explanation}</p>
                <div class="text-[11px] font-bold text-rose-700 dark:text-rose-300 pt-1 border-t border-emerald-200/50 dark:border-emerald-900/40">
                  💡 Điểm cốt lõi: ${q.takeaway}
                </div>
              </div>

            </div>
          `).join('')}
        </div>
      </div>

    </article>
  `).join('');
}

// Generate full HTML
const fullHtml = buildHtml();

// Targets to write (dual-file & platform aliases)
const targetPaths = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/van_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/van12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan12.html'
];

targetPaths.forEach(p => {
  fs.writeFileSync(p, fullHtml, 'utf8');
  console.log('Saved:', p, 'Size:', fullHtml.length, 'bytes');
});

console.log('Build complete!');
