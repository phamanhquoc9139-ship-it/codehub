const fs = require('fs');
const path = require('path');
const { topics, mathFormulas, trangNguyenMathQuizzes } = require('./toan_data.js');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeJs(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, ' ');
}

console.log('Generating Toan 5 HTML...');

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Toán Lớp 5 (Trọn Bộ 12 Chủ Đề • 75 Bài Học • Sổ Tay Công Thức) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS via CDN -->
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
            math: {
              blue: '#2563EB',
              indigo: '#4F46E5',
              cyan: '#0891B2',
              emerald: '#059669',
              amber: '#D97706'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- KaTeX CSS & JS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <meta name="codehub-activity-name" content="Khóa Học Toán Lớp 5">
  <meta name="description" content="Khóa học Toán Lớp 5 theo chương trình GDPT 2018: Trọn bộ 12 Chủ đề qua 2 tập (75 bài học), chuẩn hóa 5 phần mỗi bài (Kiến thức mới, Quy tắc công thức, Ví dụ minh họa, Dạng bài luyện tập, Vận dụng thực tế), Sổ tay Công thức Toán học và Hội thi Trạng Nguyên Toán Học 5 (60:00).">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 4px; }
    .math-hero-bg {
      background: radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 85% 80%, rgba(79, 70, 229, 0.12) 0%, transparent 40%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawerBackdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/50 z-40 lg:hidden hidden transition-opacity duration-300"></div>

  <!-- Mobile Drawer Navigation -->
  <aside id="mobileDrawer" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 lg:hidden transform -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col">
    <div class="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white">
      <div class="flex items-center gap-2 font-bold text-sm">
        <i class="fa-solid fa-calculator"></i>
        <span>Mục lục Toán 5</span>
      </div>
      <button onclick="toggleDrawer()" class="p-1.5 rounded-lg hover:bg-white/20 text-white transition">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <div class="p-4 overflow-y-auto sidebar-scroll flex-1 text-xs space-y-3">
`;

// Sidebar links by Topics
topics.forEach(t => {
  html += `      <div class="pt-1">
        <a href="#chude-${t.id}" onclick="toggleDrawer()" class="block font-black text-blue-600 dark:text-blue-400 hover:underline uppercase text-[11px] tracking-wide">
          <i class="fa-solid fa-bookmark mr-1 text-indigo-500"></i> ${escapeHtml(t.name.split('.')[0])}
        </a>
        <div class="mt-1 ml-2 space-y-1 pl-2 border-l border-gray-200 dark:border-gray-800">
`;
  t.lessons.forEach(l => {
    html += `          <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300">
            ${escapeHtml(l.title)}
          </a>\n`;
  });
  html += `        </div>
      </div>\n`;
});

html += `      <div class="pt-2 border-t border-gray-200 dark:border-gray-800">
        <div class="text-[11px] font-black uppercase text-gray-400 tracking-wider">Tra cứu &amp; Đấu trường</div>
        <a href="#handbook-formulas" onclick="toggleDrawer()" class="block py-1 pl-2 text-blue-600 dark:text-blue-400 font-bold">
          <i class="fa-solid fa-square-root-variable mr-1"></i> Sổ tay Công thức Toán 5
        </a>
        <button onclick="toggleDrawer(); openTrangNguyenModal();" class="w-full text-left py-2 px-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold flex items-center gap-2 mt-2">
          <i class="fa-solid fa-award text-yellow-500"></i> Thi Trạng Nguyên Toán Học (60:00)
        </button>
      </div>
    </div>
  </aside>

  <!-- Sticky Navbar -->
  <header class="sticky top-0 z-30 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button onclick="toggleDrawer()" class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden" aria-label="Mở mục lục">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-extrabold text-lg sm:text-xl tracking-tight">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <i class="fa-solid fa-infinity text-lg"></i>
          </div>
          <span class="hidden sm:inline text-gray-900 dark:text-white">CodeHub</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-800">Toán 5</span>
        </a>
      </div>

      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" oninput="filterLessons()" placeholder="Tìm bài học, công thức diện tích, thể tích, tỉ số %..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-gray-100 dark:bg-dark-card border-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 transition">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="openTrangNguyenModal()" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5">
          <i class="fa-solid fa-award text-yellow-300"></i>
          <span>Trạng Nguyên Toán Học (60:00)</span>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="math-hero-bg border-b border-gray-200 dark:border-gray-800 relative overflow-hidden py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-center lg:text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Chương trình Giáo Dục Phổ Thông 2018 &bull; Cấp Tiểu Học</span>
          </div>
          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Toán Lớp 5</span> (Toán 5)
          </h1>
          <p class="text-xs sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Hệ thống hóa toàn diện 12 Chủ đề qua 2 tập (75 bài học) với đủ 5 phần chuẩn mực: Kiến thức mới &bull; Quy tắc &amp; Công thức toán học KaTeX &bull; Ví dụ minh họa từng bước &bull; Các dạng bài luyện tập trọng tâm &bull; Bài toán thực tế &bull; Sổ tay Công thức Tra cứu &bull; Đấu trường Trạng Nguyên Toán Học 60 phút.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <a href="#tap-1" class="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-md shadow-blue-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Một (Bài 1–35)
            </a>
            <a href="#tap-2" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Hai (Bài 36–75)
            </a>
            <a href="#handbook-formulas" class="px-3.5 py-1.5 rounded-xl bg-cyan-600 text-white font-bold text-xs hover:bg-cyan-700 shadow-md shadow-cyan-600/20 transition">
              <i class="fa-solid fa-square-root-variable mr-1.5"></i> Sổ Tay Công Thức
            </a>
            <button onclick="openTrangNguyenModal()" class="px-3.5 py-1.5 rounded-xl bg-yellow-500 text-gray-900 font-black text-xs hover:bg-yellow-400 shadow-md shadow-yellow-500/20 transition">
              <i class="fa-solid fa-trophy mr-1.5"></i> Thi Trạng Nguyên 60:00
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto text-center">
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">12</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Chủ Đề Toán Học</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">75</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Bài Học Hai Tập</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400">8</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Mảng Cốt Lõi (A-H)</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">KaTeX</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Công Thức Chuẩn</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-amber-500">5</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Mục Chuẩn Mỗi Bài</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-red-500">25</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Câu Trạng Nguyên</div>
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
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 class="text-xs font-black uppercase text-blue-700 dark:text-blue-400 tracking-wider flex items-center gap-2 mb-3">
              <i class="fa-solid fa-list-check"></i>
              <span>Chương trình Toán 5</span>
            </h3>
            <div class="space-y-3 overflow-y-auto max-h-[70vh] sidebar-scroll pr-1 text-xs">
`;

topics.forEach(t => {
  html += `              <div class="space-y-1">
                <a href="#chude-${t.id}" class="font-bold text-gray-900 dark:text-white hover:text-blue-600 flex items-center justify-between">
                  <span>${escapeHtml(t.name.split('.')[0])}</span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">Tập ${t.book}</span>
                </a>
                <div class="ml-2 pl-2 border-l border-gray-100 dark:border-gray-800 space-y-1">
`;
  t.lessons.forEach(l => {
    html += `                  <a href="#bai-${l.num}" class="block text-[11px] text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 truncate" title="${escapeHtml(l.title)}">
                    ${escapeHtml(l.title)}
                  </a>\n`;
  });
  html += `                </div>
              </div>\n`;
});

html += `              <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1">
                <a href="#handbook-formulas" class="block font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  <i class="fa-solid fa-square-root-variable mr-1"></i> Sổ tay Công thức Toán 5
                </a>
                <button onclick="openTrangNguyenModal()" class="w-full text-left py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-between shadow-sm">
                  <span>Trạng Nguyên Toán Học</span>
                  <i class="fa-solid fa-trophy text-yellow-300"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Course Units & Lessons Area -->
      <div class="lg:col-span-3 space-y-10">

        <!-- Sổ tay Công thức Toán Học Lớp 5 Tra cứu nhanh -->
        <section id="handbook-formulas" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-black text-xs border border-blue-200 dark:border-blue-800">
                  <i class="fa-solid fa-square-root-variable mr-1"></i> Bảng Tra Cứu Nhanh
                </span>
                <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">4 Nhóm Công Thức Cốt Lõi Toán 5</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                Sổ Tay Công Thức Toán Học Lớp 5 Toàn Diện
              </h2>
            </div>
          </div>

          <!-- Formula Groups Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
`;

mathFormulas.forEach(mf => {
  html += `            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-2.5">
              <div class="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
                <i class="fa-solid fa-shapes text-blue-600 dark:text-blue-400"></i>
                <h4 class="font-black text-xs sm:text-sm text-gray-900 dark:text-white">${escapeHtml(mf.category)}</h4>
              </div>
              <div class="space-y-2 text-xs">
`;
  mf.items.forEach(item => {
    html += `                <div class="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-1">
                  <div class="font-bold text-gray-900 dark:text-white flex items-center justify-between">
                    <span>${escapeHtml(item.name)}</span>
                    <span class="text-[10px] text-gray-400 italic font-normal">${escapeHtml(item.note)}</span>
                  </div>
                  <div class="font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-50/50 dark:bg-blue-950/30 p-1.5 rounded-lg text-xs">
                    ${escapeHtml(item.formula)}
                  </div>
                </div>\n`;
  });
  html += `              </div>
            </div>\n`;
});

html += `          </div>
        </section>\n`;

// Loop through each Topic (Chủ đề)
topics.forEach(t => {
  html += `
        <!-- ==================== CHỦ ĐỀ ${t.id}: ${escapeHtml(t.name)} ==================== -->
        <section id="chude-${t.id}" class="space-y-6">
          <div class="p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-lg space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-wider backdrop-blur-sm">
                Tập ${t.book} &bull; Chủ Đề ${t.id}
              </span>
              <span class="text-xs font-medium text-blue-100">Chương trình Toán Lớp 5 GDPT 2018</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">${escapeHtml(t.name)}</h2>
            <p class="text-xs sm:text-sm text-blue-100 font-bold">${escapeHtml(t.desc)}</p>
          </div>

          <!-- Lessons of Topic ${t.id} -->
          <div class="space-y-6">
`;

  t.lessons.forEach((l) => {
    html += renderMathLesson(l, t);
  });

  html += `          </div>
        </section>\n`;
});

html += `
      </div>
    </div>
  </main>

  <!-- Interactive Modal: Trạng Nguyên Toán Học 5 (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4">
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-inner">
            <i class="fa-solid fa-award text-yellow-300"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Hội Thi Trạng Nguyên Toán Học Lớp 5 (Đấu Trường 60 Phút)</h3>
            <p class="text-xs text-blue-100">Bộ 25 câu hỏi trắc nghiệm toàn diện 12 Chủ đề GDPT 2018 &bull; Thời gian làm bài: 60 phút</p>
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
      <div id="contestBody" class="p-5 sm:p-7 overflow-y-auto sidebar-scroll flex-1 space-y-6 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-blue-900 dark:text-blue-200 leading-relaxed">
          <strong><i class="fa-solid fa-circle-info mr-1"></i> Hướng dẫn thí sinh:</strong> Thí sinh chọn 1 đáp án chính xác nhất cho mỗi câu hỏi. Sau khi hoàn thành toàn bộ 25 câu, bấm nút <strong>"Nộp bài &amp; Xem xếp hạng"</strong> ở cuối trang để được chấm điểm tự động, xem giải thích chi tiết và vinh danh danh hiệu Trạng Nguyên, Bảng Nhãn hoặc Thám Hoa!
        </div>

        <form id="trangNguyenForm" class="space-y-5">
`;

trangNguyenMathQuizzes.forEach((q, idx) => {
  html += `          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-3">
            <div class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-start gap-2">
              <span class="px-2 py-0.5 rounded-md bg-blue-600 text-white font-black text-xs shrink-0">Câu ${idx + 1}</span>
              <span>${escapeHtml(q.q)}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
  q.options.forEach((opt, optI) => {
    html += `              <label class="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-surface transition text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="tn_q_${idx}" value="${optI}" class="text-blue-600 focus:ring-blue-500">
                <span>${escapeHtml(opt)}</span>
              </label>\n`;
  });
  html += `            </div>
            <div id="tn_exp_${idx}" class="hidden p-3 rounded-xl bg-gray-100 dark:bg-dark-surface text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"></div>
          </div>\n`;
});

html += `        </form>

        <div id="contestResultArea" class="hidden p-6 rounded-2xl bg-white dark:bg-dark-card border border-blue-200 dark:border-blue-900 shadow-md text-center space-y-4">
          <div id="contestBadge" class="w-16 h-16 mx-auto rounded-3xl bg-yellow-400 text-gray-900 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h4 id="contestRank" class="text-2xl font-black text-gray-900 dark:text-white">Trạng Nguyên Toán Học</h4>
            <p id="contestScore" class="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">Đạt 25/25 điểm (100%)</p>
            <p id="contestComment" class="text-xs text-gray-600 dark:text-gray-300 mt-2 max-w-lg mx-auto leading-relaxed">Xuất sắc tuyệt đỉnh! Em đã nắm vững toàn bộ kiến thức Toán Lớp 5 theo chương trình GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-gray-100 dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-3">
        <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition">
          Đóng
        </button>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs shadow-md shadow-blue-500/20 hover:opacity-95 transition">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xem Xếp Hạng
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-xs text-gray-500 text-center">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">Khóa Học Toán Lớp 5 &bull; CodeHub CS Learning Platform</p>
      <p>Biên soạn bám sát Chương trình Giáo dục Phổ thông 2018 cấp Tiểu học &bull; Tích hợp công thức Toán học chuẩn KaTeX</p>
      <p class="text-[11px] text-gray-400">&copy; 2026 CodeHub. Vững nền tảng - Sáng tương lai.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Dark mode toggle
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

    // Mobile drawer toggle
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

    // Interactive Topic Quiz Function (Chấm điểm từng bài học chuẩn CodeHub Lớp 4-5)
    function checkTopicQuiz(quizId, correctVal, explanation) {
      const radios = document.getElementsByName('quiz_' + quizId);
      let selected = null;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selected = parseInt(radios[i].value, 10);
          break;
        }
      }

      const resBox = document.getElementById('res_' + quizId);
      if (selected === null) {
        resBox.className = 'p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40';
        resBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation mr-1.5"></i> Vui lòng chọn một đáp án trước khi bấm kiểm tra.';
        resBox.classList.remove('hidden');
        return;
      }

      if (selected === correctVal) {
        resBox.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/40';
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-sm"></i><div><strong>Chính xác! Rất xuất sắc!</strong> ' + explanation + '</div></div>';
      } else {
        resBox.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40';
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-xmark text-rose-500 mt-0.5 text-sm"></i><div><strong>Chưa chính xác rồi!</strong> ' + explanation + '</div></div>';
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

    // Contest Trạng Nguyên Toán Học Logic (60:00)
    let contestInterval = null;
    let contestSeconds = 60 * 60; // 60 minutes
    const contestTotal = 25;
    const contestAnswers = ${JSON.stringify(trangNguyenMathQuizzes.map(q => q.ans))};
    const contestExplanations = ${JSON.stringify(trangNguyenMathQuizzes.map(q => q.exp))};

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
          alert('Hết thời gian làm bài 60 phút! Hệ thống đang tự động nộp bài.');
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
            expEl.innerHTML = '<i class="fa-solid fa-check text-emerald-500 mr-1.5"></i><strong>Chính xác!</strong> ' + contestExplanations[i];
          } else {
            expEl.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
            expEl.innerHTML = '<i class="fa-solid fa-xmark text-rose-500 mr-1.5"></i><strong>Đáp án đúng: ' + (contestAnswers[i] + 1) + '.</strong> ' + contestExplanations[i];
          }
        }
      }

      // Show result card
      const resArea = document.getElementById('contestResultArea');
      resArea.classList.remove('hidden');
      const scoreEl = document.getElementById('contestScore');
      const rankEl = document.getElementById('contestRank');
      const badgeEl = document.getElementById('contestBadge');
      const commentEl = document.getElementById('contestComment');

      const pct = Math.round((score / contestTotal) * 100);
      scoreEl.innerText = 'Đạt ' + score + '/' + contestTotal + ' câu (' + pct + '%)';

      if (score >= 23) {
        rankEl.innerText = 'Trạng Nguyên Toán Học (Thủ Khoa Đất Việt)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-yellow-400 text-gray-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-yellow-200 dark:ring-yellow-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-crown text-yellow-900"></i>';
        commentEl.innerText = 'Xuất sắc tuyệt đỉnh! Em đã làm chủ toàn diện các kiến thức Toán học Lớp 5!';
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Toán Học (Tài Năng Rực Rỡ)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-blue-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-blue-200 dark:ring-blue-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-medal text-white"></i>';
        commentEl.innerText = 'Rất đáng khen ngợi! Em giải toán rất nhanh, nắm vững công thức và tư duy logic chặt chẽ!';
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Toán Học (Chăm Chỉ Hiếu Học)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-600 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200 dark:ring-amber-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-award text-white"></i>';
        commentEl.innerText = 'Làm tốt lắm! Em đã hoàn thành tốt bài thi và giải đúng các bài toán trọng tâm!';
      } else {
        rankEl.innerText = 'Sĩ Tử Cần Cù (Học Hỏi Tiến Bộ)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-gray-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class="fa-solid fa-book-open-reader text-white"></i>';
        commentEl.innerText = 'Em hãy ôn lại Sổ tay công thức và luyện tập thêm các bài toán thực tế nhé. Cố lên!';
      }

      resArea.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('btnSubmitContest').classList.add('hidden');
    }

    // Auto-render KaTeX if available
    document.addEventListener("DOMContentLoaded", function() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '\\\\(', right: '\\\\)', display: false}
          ],
          throwOnError: false
        });
      }
    });
  </script>
</body>
</html>`;

function renderMathLesson(l, t) {
  let qid = 'l_' + l.num;
  let qz = l.quiz;

  let res = `
          <!-- Lesson Card: ${escapeHtml(l.title)} -->
          <article id="bai-${l.num}" class="lesson-card p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
            
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-black text-xs border border-blue-200 dark:border-blue-800">
                    Tập ${t.book} &bull; Bài ${l.num}
                  </span>
                  <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">${escapeHtml(t.name.split('.')[0])}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <span>${escapeHtml(l.title)}</span>
                </h3>
              </div>
            </div>

            <!-- 1. Kiến thức mới (New Knowledge) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-lightbulb text-amber-500"></i> 1. Kiến thức mới (Khái niệm nền tảng)
              </h4>
              <div class="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                ${escapeHtml(l.newKnowledge)}
              </div>
            </div>

            <!-- 2. Quy tắc hoặc Công thức (Formula) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-square-root-variable text-blue-600 dark:text-blue-400"></i> 2. Quy tắc hoặc Công thức ghi nhớ
              </h4>
              <div class="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 font-mono text-xs text-blue-800 dark:text-blue-300 leading-relaxed font-bold whitespace-pre-line">
                ${escapeHtml(l.formula)}
              </div>
            </div>

            <!-- 3. Ví dụ minh họa (Example) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-list-check text-indigo-600 dark:text-indigo-400"></i> 3. Ví dụ minh họa từng bước giải
              </h4>
              <div class="p-4 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                ${escapeHtml(l.example)}
              </div>
            </div>

            <!-- 4. Dạng bài luyện tập (Exercises) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-pen-to-square text-cyan-600 dark:text-cyan-400"></i> 4. Các dạng bài luyện tập trọng tâm
              </h4>
              <div class="p-4 rounded-2xl bg-cyan-50/40 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/40 text-xs text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                ${escapeHtml(l.exercise)}
              </div>
            </div>

            <!-- 5. Bài toán vận dụng thực tế (Practical App) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-earth-americas text-emerald-600 dark:text-emerald-400"></i> 5. Bài toán vận dụng thực tế đời sống
              </h4>
              <div class="p-4 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                ${escapeHtml(l.practicalApp)}
              </div>
            </div>

            <!-- 6. Bài tập trắc nghiệm tự đánh giá (Quiz) -->
            <div class="space-y-3 pt-2 border-t border-gray-100 dark:border-gray-800">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-question text-blue-600 dark:text-blue-400"></i> Kiểm tra nhanh kiến thức bài học
                </h4>
                <span class="text-[11px] text-blue-600 dark:text-blue-400 font-bold">Chuẩn Form CodeHub Lớp 4-5</span>
              </div>
              <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-3">
                <div class="font-bold text-xs text-gray-900 dark:text-white flex items-start gap-1.5">
                  <span class="text-blue-600 dark:text-blue-400">Câu hỏi kiểm tra:</span>
                  <span>${escapeHtml(qz.q)}</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;

  qz.options.forEach((opt, optI) => {
    res += `                  <label class="p-2 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer flex items-center gap-2 bg-white dark:bg-dark-card text-xs text-gray-700 dark:text-gray-300 transition">
                    <input type="radio" name="quiz_${qid}" value="${optI}" class="text-blue-600 focus:ring-blue-500">
                    <span>${escapeHtml(opt)}</span>
                  </label>\n`;
  });

  res += `                </div>
                <div class="flex items-center justify-between pt-1">
                  <button onclick="checkTopicQuiz('${qid}', ${qz.ans}, '${escapeJs(qz.exp)}')" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition">
                    Kiểm tra đáp án
                  </button>
                </div>
                <div id="res_${qid}" class="hidden"></div>
              </div>
            </div>

          </article>\n`;

  return res;
}

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'toan_5.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'math_5.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
