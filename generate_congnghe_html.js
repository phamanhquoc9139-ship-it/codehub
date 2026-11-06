const fs = require('fs');
const path = require('path');
const { chapters, trangNguyenQuestions } = require('./congnghe_6_data.js');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderMarkdown(md) {
  if (!md) return '';

  const rawLines = md.trim().split('\n');
  const blocks = [];
  let currentTable = null;
  let currentUl = null;
  let currentOl = null;
  let currentPara = [];

  function flushPara() {
    if (currentPara.length > 0) {
      const text = currentPara.join(' ').trim();
      if (text) {
        blocks.push(`<p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2">${text}</p>`);
      }
      currentPara = [];
    }
  }

  function flushList() {
    if (currentUl) {
      blocks.push(`<ul class="list-disc pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentUl.join('')}</ul>`);
      currentUl = null;
    }
    if (currentOl) {
      blocks.push(`<ol class="list-decimal pl-5 space-y-1.5 my-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${currentOl.join('')}</ol>`);
      currentOl = null;
    }
  }

  function flushTable() {
    if (currentTable) {
      let tableHtml = '<div class="overflow-x-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><table class="w-full text-left border-collapse text-xs">';
      let isFirstRow = true;
      currentTable.forEach(row => {
        if (row.every(c => /^:?-+:?$/.test(c.trim()))) {
          return;
        }
        tableHtml += '<tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40">';
        row.forEach(cell => {
          if (isFirstRow) {
            tableHtml += `<th class="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">${formatInline(cell)}</th>`;
          } else {
            tableHtml += `<td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">${formatInline(cell)}</td>`;
          }
        });
        tableHtml += '</tr>';
        isFirstRow = false;
      });
      tableHtml += '</table></div>';
      blocks.push(tableHtml);
      currentTable = null;
    }
  }

  function formatInline(str) {
    if (!str) return '';
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  }

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushPara();
      flushList();
      flushTable();
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushPara();
      flushList();
      if (!currentTable) currentTable = [];
      const cells = trimmed.split('|').slice(1, -1);
      currentTable.push(cells);
      continue;
    } else {
      flushTable();
    }

    if (trimmed.startsWith('### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^###\s+/, ''));
      blocks.push(`<h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-5 mb-2.5 flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block shrink-0"></span>${title}</h4>`);
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      flushPara();
      flushList();
      const title = formatInline(trimmed.replace(/^####\s+/, ''));
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 mt-3.5 mb-1.5">${title}</h5>`);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushPara();
      flushList();
      const quote = formatInline(trimmed.replace(/^>\s+/, ''));
      blocks.push(`<blockquote class="p-3 my-2.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border-l-4 border-cyan-500 text-xs sm:text-sm text-cyan-900 dark:text-cyan-200 leading-relaxed">${quote}</blockquote>`);
      continue;
    }

    const ulMatch = line.match(/^(\s*)([-+*])\s+(.*)$/);
    if (ulMatch) {
      flushPara();
      if (currentOl) flushList();
      if (!currentUl) currentUl = [];
      const indent = ulMatch[1].length;
      const content = formatInline(ulMatch[3]);
      if (indent >= 2) {
        currentUl.push(`<li class="ml-4 list-[circle] leading-relaxed">${content}</li>`);
      } else {
        currentUl.push(`<li class="leading-relaxed">${content}</li>`);
      }
      continue;
    }

    const olMatch = line.match(/^(\s*)(\d+)\.\s+(.*)$/);
    if (olMatch) {
      flushPara();
      if (currentUl) flushList();
      if (!currentOl) currentOl = [];
      const content = formatInline(olMatch[3]);
      currentOl.push(`<li class="leading-relaxed">${content}</li>`);
      continue;
    }

    if (/^[a-d]\)\s+/.test(trimmed)) {
      flushPara();
      flushList();
      const content = formatInline(trimmed);
      blocks.push(`<h5 class="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 mt-3.5 mb-1.5">${content}</h5>`);
      continue;
    }

    currentPara.push(formatInline(trimmed));
  }

  flushPara();
  flushList();
  flushTable();

  return blocks.join('\n');
}

console.log("Generating Công nghệ 6 HTML page...");

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Công Nghệ Lớp 6 (KNTT - GDPT 2018: 4 Chương • 14 Bài Học • Dự Án &amp; Trạng Nguyên) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            },
            tech: {
              blue: '#2563EB',
              emerald: '#059669',
              rose: '#E11D48',
              amber: '#D97706',
              cyan: '#0891B2'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <meta name="codehub-activity-name" content="Khóa Học Công Nghệ Lớp 6">
  <meta name="description" content="Chương trình Công nghệ Lớp 6 GDPT 2018 (SGK Kết nối tri thức với cuộc sống): Trọn vẹn 4 Chương, 14 Bài học với đủ 7 phần chuẩn mực; máy tính dinh dưỡng, máy tính tiền điện và Hội thi Trạng Nguyên Công nghệ 60 phút.">

  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #0891B2; border-radius: 9999px; }
    .tech-hero-bg {
      background: radial-gradient(circle at 15% 20%, rgba(8, 145, 178, 0.18) 0%, transparent 45%),
                  radial-gradient(circle at 85% 80%, rgba(217, 119, 6, 0.15) 0%, transparent 45%);
    }
  </style>
</head>

<body class="bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawerBackdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/60 z-40 lg:hidden hidden transition-opacity duration-300"></div>

  <!-- Mobile Drawer Navigation -->
  <aside id="mobileDrawer" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 lg:hidden transform -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col">
    <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 text-white">
      <div class="flex items-center gap-2 font-bold text-sm">
        <i class="fa-solid fa-microchip"></i>
        <span>Mục Lục Công Nghệ 6</span>
      </div>
      <button onclick="toggleDrawer()" class="p-1.5 rounded-lg hover:bg-white/20 text-white transition">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <div class="p-4 overflow-y-auto custom-scrollbar flex-1 text-xs space-y-4">
`;

// Sidebar links
chapters.forEach(ch => {
  html += `      <div>
        <a href="#chuong-${ch.id}" onclick="toggleDrawer()" class="block font-black text-cyan-600 dark:text-cyan-400 hover:underline uppercase text-[11px] tracking-wide mb-1">
          <i class="fa-solid fa-bookmark mr-1 text-indigo-500"></i> ${escapeHtml(ch.name)}
        </a>
        <div class="space-y-1 pl-2 border-l-2 border-slate-200 dark:border-slate-800">
`;
  ch.lessons.forEach(l => {
    html += `          <a href="#bai-${l.id}" onclick="toggleDrawer()" class="block py-1 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 truncate">
            ${escapeHtml(l.title)}
          </a>\n`;
  });
  html += `        </div>
      </div>\n`;
});

html += `      <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
        <a href="#cong-cu-tinh-toan" onclick="toggleDrawer()" class="block p-2 rounded-xl font-bold text-emerald-600 dark:text-emerald-400">
          <i class="fa-solid fa-calculator mr-1.5"></i> Công Cụ Tính Dinh Dưỡng &amp; Tiền Điện
        </a>
        <button onclick="toggleDrawer(); openTrangNguyenModal();" class="w-full text-left py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold flex items-center justify-between shadow-sm">
          <span>Trạng Nguyên Công Nghệ (60:00)</span>
          <i class="fa-solid fa-award"></i>
        </button>
      </div>
    </div>
  </aside>

  <!-- Sticky Navbar -->
  <header class="sticky top-0 z-30 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button onclick="toggleDrawer()" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden" aria-label="Mục lục">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400 font-black text-lg sm:text-xl tracking-tight">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-emerald-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-cyan-600/20">
            <i class="fa-solid fa-microchip text-base"></i>
          </div>
          <span class="text-slate-900 dark:text-white">CodeHub</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-200 dark:border-cyan-800">Công Nghệ 6</span>
        </a>
      </div>

      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" oninput="filterLessons()" placeholder="Tìm kiếm bài học, móng nhà, calo, vải may, đèn LED, bếp..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-dark-card border-none focus:ring-2 focus:ring-cyan-500 dark:text-white placeholder-slate-400 transition">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <a href="#cong-cu-tinh-toan" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition">
          <i class="fa-solid fa-calculator text-emerald-500"></i>
          <span>Máy Tính Dự Án</span>
        </a>
        <button onclick="openTrangNguyenModal()" class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5">
          <i class="fa-solid fa-award text-yellow-200"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="tech-hero-bg border-b border-slate-200 dark:border-slate-800 relative overflow-hidden py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-center lg:text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 text-xs font-bold border border-cyan-200 dark:border-cyan-800">
            <span class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span>Chương trình Giáo dục Phổ thông 2018 &bull; SGK Kết Nối Tri Thức</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-cyan-600 via-emerald-600 to-amber-500 bg-clip-text text-transparent">Công Nghệ Lớp 6</span>
          </h1>
          <p class="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Hệ thống hóa toàn diện <strong>4 Chương</strong> và <strong>14 Bài học</strong> theo cấu trúc 7 phần chuẩn mực: Mục tiêu &bull; Kiến thức cốt lõi &bull; Sơ đồ kỹ thuật SVG &bull; Ghi nhớ &bull; Luyện tập &bull; Vận dụng &bull; Trắc nghiệm tương tác &bull; Máy tính dinh dưỡng bữa ăn &bull; Máy tính điện năng tiêu thụ &bull; Hội thi Trạng Nguyên Công Nghệ 60:00.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <a href="#chuong-1" class="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-md shadow-blue-600/20 transition">
              <i class="fa-solid fa-house mr-1.5"></i> Chương I. Nhà ở
            </a>
            <a href="#chuong-2" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition">
              <i class="fa-solid fa-utensils mr-1.5"></i> Chương II. Thực phẩm
            </a>
            <a href="#chuong-3" class="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md shadow-rose-600/20 transition">
              <i class="fa-solid fa-shirt mr-1.5"></i> Chương III. Trang phục
            </a>
            <a href="#chuong-4" class="px-3.5 py-1.5 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 shadow-md shadow-amber-600/20 transition">
              <i class="fa-solid fa-bolt mr-1.5"></i> Chương IV. Đồ dùng điện
            </a>
            <button onclick="openTrangNguyenModal()" class="px-3.5 py-1.5 rounded-xl bg-yellow-500 text-slate-900 font-black text-xs hover:bg-yellow-400 shadow-md shadow-yellow-500/20 transition">
              <i class="fa-solid fa-trophy mr-1.5"></i> Thi Trạng Nguyên 60:00
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto text-center">
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">4</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Chương Học Tập</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">14</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Bài Học Chuẩn Mực</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-rose-500">2</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Dự Án Thực Tiễn</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400">SVG</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Sơ Đồ Kĩ Thuật</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-purple-500">7</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Phần Chuẩn Mỗi Bài</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-amber-500">25</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Câu Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

      <!-- Desktop Sidebar -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 space-y-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 class="text-xs font-black uppercase text-cyan-700 dark:text-cyan-400 tracking-wider flex items-center gap-2 mb-3">
              <i class="fa-solid fa-list-check"></i>
              <span>Chương Trình Công Nghệ 6</span>
            </h3>
            <div class="space-y-3 overflow-y-auto max-h-[70vh] custom-scrollbar pr-1 text-xs">
`;

chapters.forEach(ch => {
  html += `              <div class="space-y-1">
                <a href="#chuong-${ch.id}" class="font-bold text-slate-900 dark:text-white hover:text-cyan-600 flex items-center justify-between">
                  <span>${escapeHtml(ch.name.split('.')[0])}</span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded bg-cyan-50 dark:bg-cyan-950 text-cyan-600 font-bold">${ch.lessons.length} bài</span>
                </a>
                <div class="ml-2 pl-2 border-l border-slate-100 dark:border-slate-800 space-y-1">
`;
  ch.lessons.forEach(l => {
    html += `                  <a href="#bai-${l.id}" class="block text-[11px] text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 truncate" title="${escapeHtml(l.title)}">
                    ${escapeHtml(l.title)}
                  </a>\n`;
  });
  html += `                </div>
              </div>\n`;
});

html += `              <div class="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <a href="#cong-cu-tinh-toan" class="block font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                  <i class="fa-solid fa-calculator mr-1"></i> Máy tính Dinh dưỡng &amp; Điện năng
                </a>
                <button onclick="openTrangNguyenModal()" class="w-full text-left py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold flex items-center justify-between shadow-sm mt-2">
                  <span>Trạng Nguyên Công Nghệ</span>
                  <i class="fa-solid fa-trophy text-yellow-200"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Units & Lessons Area -->
      <div class="lg:col-span-3 space-y-10">

        <!-- CÔNG CỤ TÍNH TOÁN DỰ ÁN TƯƠNG TÁC (INTERACTIVE TOOLS) -->
        <section id="cong-cu-tinh-toan" class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-black text-xs border border-emerald-500/30">
                <i class="fa-solid fa-calculator mr-1"></i> Tiện Ích Kỹ Thuật Số
              </div>
              <h2 class="text-xl sm:text-2xl font-black mt-1 text-white">
                Công Cụ Tính Dinh Dưỡng Bữa Ăn &amp; Chi Phí Tiêu Thụ Điện Năng
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Tool 1: Máy tính Dinh dưỡng Bữa ăn gia đình (Bài 6) -->
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-emerald-500/30 space-y-4">
              <h4 class="font-bold text-xs sm:text-sm text-emerald-400 flex items-center gap-2">
                <i class="fa-solid fa-utensils"></i>
                <span>1. Máy Tính Năng Lượng Bữa Ăn (Dự án Bài 6)</span>
              </h4>
              <p class="text-xs text-slate-300 leading-relaxed">Chọn các món ăn trong bữa cơm để tự động tính tổng năng lượng (kcal) cho một khẩu phần học sinh Lớp 6:</p>
              
              <div class="space-y-2 text-xs">
                <label class="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-700 cursor-pointer">
                  <span>🍚 Cơm tẻ (1 bát đầy ~ 150g)</span>
                  <span class="text-emerald-400 font-bold">200 kcal</span>
                  <input type="checkbox" class="dish-item" data-cal="200" onchange="calculateMealCalories()" checked>
                </label>
                <label class="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-700 cursor-pointer">
                  <span>🥩 Thịt kho tàu (1 đĩa nhỏ ~ 100g)</span>
                  <span class="text-emerald-400 font-bold">260 kcal</span>
                  <input type="checkbox" class="dish-item" data-cal="260" onchange="calculateMealCalories()" checked>
                </label>
                <label class="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-700 cursor-pointer">
                  <span>🥬 Rau muống luộc (1 đĩa ~ 150g)</span>
                  <span class="text-emerald-400 font-bold">45 kcal</span>
                  <input type="checkbox" class="dish-item" data-cal="45" onchange="calculateMealCalories()" checked>
                </label>
                <label class="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-700 cursor-pointer">
                  <span>🍲 Canh cua mồng tơi (1 bát con)</span>
                  <span class="text-emerald-400 font-bold">65 kcal</span>
                  <input type="checkbox" class="dish-item" data-cal="65" onchange="calculateMealCalories()" checked>
                </label>
                <label class="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-700 cursor-pointer">
                  <span>🍌 Chuối tiêu chín (1 quả vừa)</span>
                  <span class="text-emerald-400 font-bold">90 kcal</span>
                  <input type="checkbox" class="dish-item" data-cal="90" onchange="calculateMealCalories()" checked>
                </label>
              </div>

              <div class="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                <div class="text-xs text-slate-300">Tổng năng lượng bữa ăn:</div>
                <div id="mealCalorieResult" class="text-2xl font-black text-emerald-400 mt-1">660 kcal</div>
                <div id="mealCalorieNote" class="text-[11px] text-emerald-300 mt-1">✓ Rất cân đối! Đạt chuẩn 30–35% nhu cầu năng lượng một ngày của học sinh (2.100 kcal).</div>
              </div>
            </div>

            <!-- Tool 2: Máy tính Điện năng & Tiền điện (Bài 14) -->
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-amber-500/30 space-y-4">
              <h4 class="font-bold text-xs sm:text-sm text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-bolt"></i>
                <span>2. Máy Tính Điện Năng &amp; Tiền Điện (Dự án Bài 14)</span>
              </h4>
              <p class="text-xs text-slate-300 leading-relaxed">Áp dụng công thức <strong>A = P × t</strong> để tính số kWh điện tiêu thụ trong 30 ngày và ước tính tiền điện:</p>

              <div class="space-y-3 text-xs">
                <div>
                  <label class="block text-slate-300 font-bold mb-1">Chọn đồ dùng điện:</label>
                  <select id="calcAppliance" onchange="updatePowerInput()" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-white">
                    <option value="1000">Điều hòa nhiệt độ (1000W)</option>
                    <option value="2000">Bếp hồng ngoại (2000W)</option>
                    <option value="800">Nồi cơm điện (800W)</option>
                    <option value="60">Quạt máy cây (60W)</option>
                    <option value="10">Bóng đèn LED học bài (10W)</option>
                    <option value="120">Tivi thông minh (120W)</option>
                  </select>
                </div>

                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-slate-300 font-bold mb-1">Công suất P (W):</label>
                    <input type="number" id="calcPower" value="1000" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-white" oninput="calculateElectricity()">
                  </div>
                  <div>
                    <label class="block text-slate-300 font-bold mb-1">Thời gian dùng t (h/ngày):</label>
                    <input type="number" id="calcHours" value="8" min="0.5" max="24" step="0.5" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-white" oninput="calculateElectricity()">
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-amber-950/60 border border-amber-500/40 text-center space-y-1">
                  <div class="text-xs text-slate-300">Điện năng tiêu thụ 1 tháng (30 ngày):</div>
                  <div id="calcKwhResult" class="text-xl font-black text-amber-400">240 kWh (240 số điện)</div>
                  <div class="text-[11px] text-slate-300">Tiền điện ước tính (giá 2.000 đ/số):</div>
                  <div id="calcCostResult" class="text-lg font-black text-yellow-300">480.000 VNĐ / tháng</div>
                </div>
              </div>
            </div>

          </div>
        </section>
`;

// Chapters & Lessons Loop
chapters.forEach(ch => {
  html += `
        <!-- ==================== ${escapeHtml(ch.name)} ==================== -->
        <section id="chuong-${ch.id}" class="space-y-6">
          <div class="p-6 rounded-3xl bg-gradient-to-r ${ch.color} text-white shadow-lg space-y-2">
            <div class="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur">${ch.lessons.length} Bài Học</span>
              <span class="text-white/80">Chương trình GDPT 2018</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">${escapeHtml(ch.name)}</h2>
            <p class="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">${escapeHtml(ch.desc)}</p>
          </div>

          <div class="space-y-8">
`;

  ch.lessons.forEach(l => {
    html += `
            <!-- Bài ${l.id}: ${escapeHtml(l.title)} -->
            <article id="bai-${l.id}" class="lesson-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <!-- Header -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 font-black text-xs border border-cyan-200 dark:border-cyan-800">
                      Bài ${l.id} &bull; ${escapeHtml(l.pages)}
                    </span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${escapeHtml(ch.name.split('.')[0])}</span>
                  </div>
                  <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    ${escapeHtml(l.title)}
                  </h3>
                </div>
              </div>

              <!-- 1. Mục tiêu bài học -->
              <div class="space-y-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-bullseye text-cyan-600"></i>
                  <span>1. Mục tiêu cần đạt</span>
                </h4>
                <div class="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <ul class="list-disc pl-5 space-y-1">
                    ${l.objectives.map(obj => `<li>${escapeHtml(obj)}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <!-- 2. Kiến thức đầy đủ -->
              <div class="space-y-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-book-open text-indigo-600"></i>
                  <span>2. Kiến thức trọng tâm bài học</span>
                </h4>
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-slate-800 space-y-3">
                  ${renderMarkdown(l.knowledge)}
                </div>
              </div>

              <!-- 3. Minh họa & Sơ đồ kĩ thuật -->
              ${l.diagramSvg ? `
              <div class="space-y-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-diagram-project text-teal-600"></i>
                  <span>3. Sơ đồ cấu tạo &amp; Minh họa kĩ thuật</span>
                </h4>
                <div class="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  ${l.diagramSvg}
                </div>
              </div>
              ` : ''}

              <!-- 4. Ghi nhớ trọng tâm -->
              <div class="space-y-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-lightbulb text-amber-500"></i>
                  <span>4. Ghi nhớ cốt lõi</span>
                </h4>
                <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-bold">
                  ${escapeHtml(l.memorize)}
                </div>
              </div>

              <!-- 5. Luyện tập -->
              <div class="space-y-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-pen-to-square text-rose-500"></i>
                  <span>5. Câu hỏi luyện tập củng cố</span>
                </h4>
                <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                  ${l.exercises.map(ex => `<p class="font-medium">${escapeHtml(ex)}</p>`).join('')}
                </div>
              </div>

              <!-- 6. Vận dụng thực tế -->
              <div class="space-y-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-earth-americas text-emerald-600"></i>
                  <span>6. Vận dụng đời sống &amp; Thực hành</span>
                </h4>
                <div class="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  ${escapeHtml(l.practical)}
                </div>
              </div>

              <!-- 7. Trắc nghiệm tương tác -->
              <div class="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center justify-between">
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-question text-cyan-600"></i>
                    <span>7. Kiểm tra nhanh kiến thức Bài ${l.id}</span>
                  </h4>
                  <span class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400">Tự động chấm điểm</span>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-slate-800 space-y-3">
                  <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
                    <span class="px-2 py-0.5 rounded-md bg-cyan-600 text-white font-black text-xs shrink-0">Câu hỏi</span>
                    <span>${escapeHtml(l.quiz.q)}</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    ${l.quiz.options.map((opt, optI) => `
                      <label class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-card transition text-xs text-slate-700 dark:text-slate-300">
                        <input type="radio" name="lesson_quiz_${l.id}" value="${optI}" class="text-cyan-600 focus:ring-cyan-500">
                        <span>${escapeHtml(opt)}</span>
                      </label>
                    `).join('')}
                  </div>
                  <div class="flex items-center justify-between pt-1">
                    <button onclick="checkLessonQuiz(${l.id}, ${l.quiz.ans}, '${l.quiz.exp.replace(/'/g, "\\'")}')" class="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-sm transition">
                      Kiểm tra đáp án
                    </button>
                  </div>
                  <div id="lesson_res_${l.id}" class="hidden p-3 rounded-xl text-xs"></div>
                </div>
              </div>

            </article>\n`;
  });

  html += `          </div>
        </section>\n`;
});

html += `
      </div>
    </div>
  </main>

  <!-- Interactive Modal: Trạng Nguyên Công Nghệ 6 (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4">
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-inner">
            <i class="fa-solid fa-award text-yellow-200"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Hội Thi Trạng Nguyên Công Nghệ Lớp 6 (Đấu Trường 60 Phút)</h3>
            <p class="text-xs text-slate-100">Bộ 25 câu hỏi trắc nghiệm toàn diện 4 Chương &bull; Nhà ở, Thực phẩm, Trang phục, Đồ điện</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-black/30 font-mono font-black text-yellow-300 text-sm flex items-center gap-1.5">
            <i class="fa-solid fa-clock"></i>
            <span id="contestTimer">60:00</span>
          </div>
          <button onclick="closeTrangNguyenModal()" class="p-2 rounded-xl hover:bg-white/20 text-white transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body (Questions) -->
      <div id="contestBody" class="p-5 sm:p-7 overflow-y-auto custom-scrollbar flex-1 space-y-6 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/40 text-cyan-900 dark:text-cyan-200 leading-relaxed">
          <strong><i class="fa-solid fa-circle-info mr-1"></i> Quy chế hội thi:</strong> Thí sinh chọn 1 đáp án đúng nhất cho mỗi câu hỏi trong 25 câu. Sau khi hoàn thành toàn bộ, bấm <strong>'Nộp bài &amp; Xem xếp hạng'</strong> để hệ thống tự động chấm điểm và xếp hạng danh hiệu Trạng Nguyên, Bảng Nhãn hoặc Thám Hoa!
        </div>

        <form id="trangNguyenForm" class="space-y-5">
`;

trangNguyenQuestions.forEach((q, idx) => {
  html += `          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
            <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
              <span class="px-2 py-0.5 rounded-md bg-cyan-600 text-white font-black text-xs shrink-0">Câu ${idx + 1}</span>
              <span>${escapeHtml(q.q)}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
  q.options.forEach((opt, optI) => {
    html += `              <label class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-surface transition text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <input type="radio" name="tn_q_${idx}" value="${optI}" class="text-cyan-600 focus:ring-cyan-500">
                <span>${escapeHtml(opt)}</span>
              </label>\n`;
  });
  html += `            </div>
            <div id="tn_exp_${idx}" class="hidden p-3 rounded-xl bg-slate-100 dark:bg-dark-surface text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"></div>
          </div>\n`;
});

html += `        </form>

        <div id="contestResultArea" class="hidden p-6 rounded-2xl bg-white dark:bg-dark-card border border-cyan-200 dark:border-cyan-900 shadow-md text-center space-y-4">
          <div id="contestBadge" class="w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h4 id="contestRank" class="text-2xl font-black text-slate-900 dark:text-white">Trạng Nguyên Công Nghệ</h4>
            <p id="contestScore" class="text-sm font-bold text-cyan-600 dark:text-cyan-400 mt-1">Đạt 25/25 điểm (100%)</p>
            <p id="contestComment" class="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">Xuất sắc tuyệt đỉnh! Em đã làm chủ toàn diện các kiến thức Công nghệ 6 GDPT 2018!</p>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-slate-100 dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
        <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-300 dark:hover:bg-slate-700 transition">
          Đóng
        </button>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white font-black text-xs shadow-md shadow-amber-500/20 hover:opacity-95 transition">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xem Xếp Hạng
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 py-8 text-xs text-slate-500 text-center">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">Khóa Học Công Nghệ Lớp 6 &bull; CodeHub CS Learning Platform</p>
      <p>Biên soạn bám sát Chương trình Giáo dục Phổ thông 2018 &bull; SGK Kết nối tri thức với cuộc sống</p>
      <p class="text-[11px] text-slate-400">&copy; 2026 CodeHub. Vững nền tảng - Sáng tương lai.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Interactive Tool 1: Calorie Calculator
    function calculateMealCalories() {
      const checkboxes = document.querySelectorAll('.dish-item');
      let total = 0;
      checkboxes.forEach(cb => {
        if (cb.checked) {
          total += parseInt(cb.dataset.cal, 10);
        }
      });
      document.getElementById('mealCalorieResult').innerText = total + ' kcal';
      const noteEl = document.getElementById('mealCalorieNote');
      if (total >= 600 && total <= 800) {
        noteEl.innerText = '✓ Rất cân đối! Đạt chuẩn 30–35% nhu cầu năng lượng một ngày của học sinh (2.100 kcal).';
        noteEl.className = 'text-[11px] text-emerald-300 mt-1';
      } else if (total < 600) {
        noteEl.innerText = '⚠️ Hơi ít năng lượng cho bữa chính! Nên bổ sung thêm cơm hoặc hoa quả tráng miệng.';
        noteEl.className = 'text-[11px] text-amber-300 mt-1';
      } else {
        noteEl.innerText = '⚠️ Hơi nhiều năng lượng! Cần giảm bớt món chiên rán nhiều dầu mỡ.';
        noteEl.className = 'text-[11px] text-rose-300 mt-1';
      }
    }

    // Interactive Tool 2: Electricity Cost Calculator
    function updatePowerInput() {
      const select = document.getElementById('calcAppliance');
      document.getElementById('calcPower').value = select.value;
      calculateElectricity();
    }

    function calculateElectricity() {
      const p = parseFloat(document.getElementById('calcPower').value) || 0; // W
      const t = parseFloat(document.getElementById('calcHours').value) || 0; // hours/day
      const kwhDay = (p * t) / 1000;
      const kwhMonth = Math.round(kwhDay * 30 * 10) / 10;
      const cost = Math.round(kwhMonth * 2000); // 2000 VND / kWh

      document.getElementById('calcKwhResult').innerText = kwhMonth + ' kWh (' + kwhMonth + ' số điện)';
      document.getElementById('calcCostResult').innerText = cost.toLocaleString('vi-VN') + ' VNĐ / tháng';
    }

    // Dark Mode Toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Mobile Drawer Toggle
    function toggleDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      const backdrop = document.getElementById('drawerBackdrop');
      if (drawer.classList.contains('-translate-x-full')) {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Single Lesson Quiz Checker
    function checkLessonQuiz(lessonId, correctVal, explanation) {
      const radios = document.getElementsByName('lesson_quiz_' + lessonId);
      let selected = null;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selected = parseInt(radios[i].value, 10);
          break;
        }
      }

      const resBox = document.getElementById('lesson_res_' + lessonId);
      if (selected === null) {
        resBox.className = 'p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40';
        resBox.innerHTML = '<i class=\"fa-solid fa-triangle-exclamation mr-1.5\"></i> Vui lòng chọn một đáp án trước khi bấm kiểm tra.';
        resBox.classList.remove('hidden');
        return;
      }

      if (selected === correctVal) {
        resBox.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
        resBox.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-500 mr-1.5\"></i><strong>Chính xác! Rất giỏi!</strong> ' + explanation;
      } else {
        resBox.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        resBox.innerHTML = '<i class=\"fa-solid fa-circle-xmark text-rose-500 mr-1.5\"></i><strong>Chưa chính xác rồi!</strong> ' + explanation;
      }
      resBox.classList.remove('hidden');
    }

    // Filter lessons via search box
    function filterLessons() {
      const query = (document.getElementById('lessonSearchInput')?.value || '').trim().toLowerCase();
      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(c => {
        const text = c.innerText.toLowerCase();
        if (!query || text.includes(query)) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    }

    // Contest Trạng Nguyên Công Nghệ Logic (60:00)
    let contestInterval = null;
    let contestSeconds = 60 * 60;
    const contestTotal = 25;
    const contestAnswers = ${JSON.stringify(trangNguyenQuestions.map(q => q.ans))};
    const contestExplanations = ${JSON.stringify(trangNguyenQuestions.map(q => q.exp))};

    function openTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.remove('hidden');
      if (!contestInterval) {
        startContestTimer();
      }
    }

    function closeTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.add('hidden');
    }

    function startContestTimer() {
      const timerEl = document.getElementById('contestTimer');
      contestInterval = setInterval(() => {
        if (contestSeconds <= 0) {
          clearInterval(contestInterval);
          alert('Đã hết thời gian 60 phút làm bài! Hệ thống tự động nộp bài.');
          submitContest();
          return;
        }
        contestSeconds--;
        const m = Math.floor(contestSeconds / 60);
        const s = contestSeconds % 60;
        timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function submitContest() {
      clearInterval(contestInterval);
      let score = 0;
      for (let i = 0; i < contestTotal; i++) {
        const radios = document.getElementsByName('tn_q_' + i);
        let val = null;
        for (let j = 0; j < radios.length; j++) {
          if (radios[j].checked) {
            val = parseInt(radios[j].value, 10);
            break;
          }
        }
        const expEl = document.getElementById('tn_exp_' + i);
        if (expEl) {
          expEl.classList.remove('hidden');
          if (val === contestAnswers[i]) {
            score++;
            expEl.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
            expEl.innerHTML = '<i class=\"fa-solid fa-check text-emerald-500 mr-1.5\"></i><strong>Chính xác!</strong> ' + contestExplanations[i];
          } else {
            expEl.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
            expEl.innerHTML = '<i class=\"fa-solid fa-xmark text-rose-500 mr-1.5\"></i><strong>Đáp án đúng: ' + (contestAnswers[i] + 1) + '.</strong> ' + contestExplanations[i];
          }
        }
      }

      const resArea = document.getElementById('contestResultArea');
      resArea.classList.remove('hidden');
      const scoreEl = document.getElementById('contestScore');
      const rankEl = document.getElementById('contestRank');
      const badgeEl = document.getElementById('contestBadge');
      const commentEl = document.getElementById('contestComment');

      const pct = Math.round((score / contestTotal) * 100);
      scoreEl.innerText = 'Đạt ' + score + '/' + contestTotal + ' câu (' + pct + '%)';

      if (score >= 23) {
        rankEl.innerText = 'Trạng Nguyên Công Nghệ (Thủ Khoa Đất Việt)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200 dark:ring-amber-800';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-crown text-amber-900\"></i>';
        commentEl.innerText = 'Xuất sắc tuyệt đỉnh! Em đã nắm vững toàn diện kiến thức Công Nghệ Lớp 6 và ứng dụng thực tiễn rất tài tình!';
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Công Nghệ (Kỹ Sư Tương Lai)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-cyan-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-cyan-200 dark:ring-cyan-800';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-medal text-white\"></i>';
        commentEl.innerText = 'Rất đáng khen ngợi! Em hiểu bài sâu, nhớ công thức tính điện năng và dinh dưỡng chuẩn xác!';
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Công Nghệ (Chăm Chỉ Khéo Tay)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-indigo-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-indigo-200 dark:ring-indigo-800';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-award text-white\"></i>';
        commentEl.innerText = 'Làm tốt lắm! Em đã hoàn thành xuất sắc các câu hỏi cốt lõi của 4 chương học!';
      } else {
        rankEl.innerText = 'Sĩ Tử Cần Cù (Học Hỏi Tiến Bộ)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-slate-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-book-open-reader text-white\"></i>';
        commentEl.innerText = 'Em hãy ôn tập lại các bài học về bảo quản thực phẩm, an toàn điện và thử sức lại nhé. Cố lên!';
      }

      resArea.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('btnSubmitContest').classList.add('hidden');
    }
  </script>
</body>
</html>`;

// Write to courses/congnghe_6.html & courses/technology_6.html
const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'congnghe_6.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'technology_6.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);

// Update index.html
const indexPath = path.join(__dirname, 'cs-learning-platform', 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Check if Cong Nghe 6 card already exists in index.html
if (!indexHtml.includes('courses/congnghe_6.html')) {
  console.log("Adding Course Card for Công Nghệ 6 to index.html...");
  
  const newCard = `
                    <!-- Course Card: Công Nghệ 6 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-emerald-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md p-3 text-white text-xl flex items-center justify-center">
                                    <i class="fa-solid fa-microchip"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Công Nghệ 6</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Công Nghệ 6 (GDPT 2018 - Kết nối tri thức): 4 chương, 14 bài học gồm Nhà ở, Bảo quản &amp; Chế biến thực phẩm, Trang phục &amp; Thời trang, Đồ dùng điện trong gia đình. Tích hợp máy tính dinh dưỡng, máy tính tiền điện, sơ đồ kĩ thuật SVG và Hội thi Trạng Nguyên 25 câu.">
                                    Kết nối tri thức (GDPT 2018): 4 chương, 14 bài học chuẩn mực về Nhà ở, Dinh dưỡng &amp; Chế biến món nộm, Trang phục &amp; Kí hiệu giặt là, Đồ dùng điện (Đèn LED, Nồi cơm, Bếp hồng ngoại). Tích hợp máy tính dinh dưỡng, máy tính tiền điện &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex items-center gap-2">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-award"></i> Trạng Nguyên Công Nghệ 6 (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/congnghe_6.html"
                                    class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

  // Insert right after Course Card: Công Nghệ 5 (around line 4050)
  const targetCard = '<!-- Course Card: Âm Nhạc 5 -->';
  if (indexHtml.includes(targetCard)) {
    indexHtml = indexHtml.replace(targetCard, newCard + '\n                    ' + targetCard);
    // fs.writeFileSync(indexPath, indexHtml, "utf8");
    console.log("Successfully inserted Công Nghệ 6 card before Âm Nhạc 5 in index.html!");
  } else {
    console.log("Could not find target card, inserting after Công Nghệ 5 card...");
    indexHtml = indexHtml.replace('courses/congnghe_5.html"\n                                    class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a>\n                            </div>\n                        </div>\n                    </div>', 'courses/congnghe_5.html"\n                                    class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a>\n                            </div>\n                        </div>\n                    </div>\n' + newCard);
    // fs.writeFileSync(indexPath, indexHtml, "utf8");
    console.log("Successfully appended Công Nghệ 6 card after Công Nghệ 5 in index.html!");
  }
} else {
  console.log("Course card already present in index.html.");
}
