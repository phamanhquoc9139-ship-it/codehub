const fs = require('fs');
const path = require('path');
const { lessons, pronunciations, cultures, trangNguyenQuizzes } = require('./tienghan_data.js');

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

console.log('Building HTML...');

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Hàn Lớp 5 (Trọn Bộ 16 Bài • Phát Âm • Văn Hóa) | CodeHub</title>
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
            korean: {
              blue: '#0F4C81',
              red: '#C62828',
              accent: '#3F51B5'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Tiếng Hàn Lớp 5">
  <meta name="description" content="Khóa học Tiếng Hàn Lớp 5 theo chương trình GDPT 2018: Trọn bộ 16 bài học qua 2 tập, 4 phần phát âm nối âm mũi hóa, 4 chuyên đề văn hóa Hàn Quốc, bảng chữ cái Hangeul & số đếm tương tác, phát âm chuẩn Web Speech API, câu hỏi kiểm tra chuẩn form lớp 4-5 và Hội thi Trạng Nguyên Tiếng Hàn 5 (60:00).">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 4px; }
    .korean-hero-bg {
      background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 90% 80%, rgba(239, 68, 68, 0.12) 0%, transparent 40%);
    }
    .badge-taegeuk {
      background: linear-gradient(135deg, #ef4444 50%, #3b82f6 50%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawerBackdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/50 z-40 lg:hidden hidden transition-opacity duration-300"></div>

  <!-- Mobile Drawer Navigation -->
  <aside id="mobileDrawer" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 lg:hidden transform -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col">
    <div class="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-indigo-700 via-blue-700 to-rose-700 text-white">
      <div class="flex items-center gap-2 font-bold text-sm">
        <i class="fa-solid fa-language"></i>
        <span>Mục lục Tiếng Hàn 5</span>
      </div>
      <button onclick="toggleDrawer()" class="p-1.5 rounded-lg hover:bg-white/20 text-white transition">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <div class="p-4 overflow-y-auto sidebar-scroll flex-1 text-xs space-y-2">
      <div class="text-[11px] font-black uppercase text-gray-400 tracking-wider">Tập 1 (Bài 1 – Bài 8)</div>
`;

lessons.filter(l => l.book === 1).forEach(l => {
  html += `      <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600">
        Bài ${l.num}. ${escapeHtml(l.titleKr)}
      </a>\n`;
});

html += `      <a href="#phat-am-tap1" onclick="toggleDrawer()" class="block py-1 pl-3 text-indigo-600 dark:text-indigo-400 font-bold">
        <i class="fa-solid fa-ear-listen mr-1"></i> Phát âm 1 & 2
      </a>
      <a href="#van-hoa-tap1" onclick="toggleDrawer()" class="block py-1 pl-3 text-rose-600 dark:text-rose-400 font-bold">
        <i class="fa-solid fa-landmark mr-1"></i> Văn hóa 1 & 2
      </a>

      <div class="pt-2 text-[11px] font-black uppercase text-gray-400 tracking-wider">Tập 2 (Bài 9 – Bài 16)</div>
`;

lessons.filter(l => l.book === 2).forEach(l => {
  html += `      <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600">
        Bài ${l.num}. ${escapeHtml(l.titleKr)}
      </a>\n`;
});

html += `      <a href="#phat-am-tap2" onclick="toggleDrawer()" class="block py-1 pl-3 text-indigo-600 dark:text-indigo-400 font-bold">
        <i class="fa-solid fa-ear-listen mr-1"></i> Phát âm 3 & 4
      </a>
      <a href="#van-hoa-tap2" onclick="toggleDrawer()" class="block py-1 pl-3 text-rose-600 dark:text-rose-400 font-bold">
        <i class="fa-solid fa-landmark mr-1"></i> Văn hóa 3 & 4
      </a>

      <div class="pt-2 text-[11px] font-black uppercase text-gray-400 tracking-wider">Tra cứu &amp; Đấu trường</div>
      <a href="#hangeul-numbers" onclick="toggleDrawer()" class="block py-1 pl-3 text-blue-600 dark:text-blue-400 font-bold">
        <i class="fa-solid fa-table mr-1"></i> Bảng chữ Hangeul & Số đếm
      </a>
      <a href="#grammar-summary" onclick="toggleDrawer()" class="block py-1 pl-3 text-emerald-600 dark:text-emerald-400 font-bold">
        <i class="fa-solid fa-book mr-1"></i> Bảng tổng hợp ngữ pháp
      </a>
      <button onclick="toggleDrawer(); openTrangNguyenModal();" class="w-full text-left py-2 px-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold flex items-center gap-2 mt-2">
        <i class="fa-solid fa-award text-yellow-500"></i> Thi Trạng Nguyên 60:00
      </button>
    </div>
  </aside>

  <!-- Sticky Navbar -->
  <header class="sticky top-0 z-30 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button onclick="toggleDrawer()" class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden" aria-label="Mở mục lục">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 font-extrabold text-lg sm:text-xl tracking-tight">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-rose-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <i class="fa-solid fa-language text-lg"></i>
          </div>
          <span class="hidden sm:inline text-gray-900 dark:text-white">CodeHub</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800">Tiếng Hàn 5</span>
        </a>
      </div>

      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" oninput="filterLessons()" placeholder="Tìm kiếm bài học, từ vựng, ngữ pháp tiếng Hàn..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-gray-100 dark:bg-dark-card border-none focus:ring-2 focus:ring-indigo-500 dark:text-white placeholder-gray-400 transition">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="openTrangNguyenModal()" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-600 text-white font-bold text-xs shadow-md shadow-indigo-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5">
          <i class="fa-solid fa-award text-yellow-300"></i>
          <span>Trạng Nguyên Tiếng Hàn (60:00)</span>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="korean-hero-bg border-b border-gray-200 dark:border-gray-800 relative overflow-hidden py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-center lg:text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Chương trình Ngoại Ngữ 2 / GDPT 2018 Tiểu Học</span>
          </div>
          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-indigo-600 via-blue-600 to-rose-600 bg-clip-text text-transparent">Tiếng Hàn Lớp 5</span> (한국어 5)
          </h1>
          <p class="text-xs sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Hệ thống kiến thức chuẩn 16 bài học qua 2 tập: Hội thoại tương tác &bull; Từ vựng sinh động &bull; Ngữ pháp cốt lõi &bull; Luyện nghe – nói phát âm chuẩn bản ngữ với <strong class="text-indigo-600 dark:text-indigo-400">Web Speech API</strong> &bull; Luyện đọc – viết &bull; Bài tập trắc nghiệm tương tác chuẩn form &bull; 4 Phần Phát âm &bull; 4 Chuyên đề Văn hóa Hàn Quốc &bull; Hội thi Trạng Nguyên Tiếng Hàn 60 phút.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <a href="#tap-1" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Một (Bài 1–8)
            </a>
            <a href="#tap-2" class="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-md shadow-blue-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Hai (Bài 9–16)
            </a>
            <a href="#hangeul-numbers" class="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md shadow-rose-600/20 transition">
              <i class="fa-solid fa-table mr-1.5"></i> Hangeul & Số đếm
            </a>
            <button onclick="openTrangNguyenModal()" class="px-3.5 py-1.5 rounded-xl bg-yellow-500 text-gray-900 font-black text-xs hover:bg-yellow-400 shadow-md shadow-yellow-500/20 transition">
              <i class="fa-solid fa-trophy mr-1.5"></i> Thi Trạng Nguyên 60:00
            </button>
          </div>
        </div>

        <!-- Korean Aesthetic Vector Card (SVG, NO SGK scan) -->
        <div class="w-full max-w-sm shrink-0">
          <div class="p-5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-xl space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div class="flex items-center gap-2 font-bold text-xs text-gray-700 dark:text-gray-200">
                <i class="fa-solid fa-compass text-indigo-500"></i> Trọng tâm khóa học
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">16 Bài Học</span>
            </div>
            <div class="grid grid-cols-2 gap-2.5 text-center text-xs">
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-indigo-600 dark:text-indigo-400">16</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Chủ đề bài học</div>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-blue-600 dark:text-blue-400">4 + 4</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Phát âm &amp; Văn hóa</div>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-rose-600 dark:text-rose-400">64+</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Câu hỏi tương tác</div>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-emerald-600 dark:text-emerald-400">Web Speech</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Phát âm ko-KR</div>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-[11px] text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
              <i class="fa-solid fa-volume-high text-indigo-500 shrink-0 text-sm"></i>
              <span>Bấm vào bất kỳ từ vựng hoặc câu hội thoại để nghe người bản xứ đọc chuẩn!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Container: Sidebar + Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- Left Desktop Sticky Sidebar -->
      <aside class="hidden lg:block w-72 shrink-0">
        <div class="sticky top-24 space-y-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <div class="font-extrabold text-xs uppercase tracking-wider text-gray-400 flex items-center justify-between">
              <span>Mục Lục Khóa Học</span>
              <i class="fa-solid fa-list-ul text-indigo-500"></i>
            </div>
            
            <div class="space-y-1 text-xs max-h-[70vh] overflow-y-auto sidebar-scroll pr-1">
              <div class="pt-1 pb-1 font-bold text-indigo-600 dark:text-indigo-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-bookmark"></i> Tập 1: Bài 1 – Bài 8
              </div>
`;

lessons.filter(l => l.book === 1).forEach(l => {
  html += `              <a href="#bai-${l.num}" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-dark-surface transition truncate" title="Bài ${l.num}. ${escapeHtml(l.titleVi)}">
                <span class="font-bold text-gray-400">B${l.num}.</span> ${escapeHtml(l.titleKr)}
              </a>\n`;
});

html += `              <a href="#phat-am-tap1" class="block py-1.5 px-2.5 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-dark-surface font-semibold text-[11px]">
                <i class="fa-solid fa-ear-listen mr-1"></i> Phát âm 1 & 2
              </a>
              <a href="#van-hoa-tap1" class="block py-1.5 px-2.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-dark-surface font-semibold text-[11px]">
                <i class="fa-solid fa-landmark mr-1"></i> Văn hóa 1 & 2
              </a>

              <div class="pt-3 pb-1 font-bold text-blue-600 dark:text-blue-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-bookmark"></i> Tập 2: Bài 9 – Bài 16
              </div>
`;

lessons.filter(l => l.book === 2).forEach(l => {
  html += `              <a href="#bai-${l.num}" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-dark-surface transition truncate" title="Bài ${l.num}. ${escapeHtml(l.titleVi)}">
                <span class="font-bold text-gray-400">B${l.num}.</span> ${escapeHtml(l.titleKr)}
              </a>\n`;
});

html += `              <a href="#phat-am-tap2" class="block py-1.5 px-2.5 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-dark-surface font-semibold text-[11px]">
                <i class="fa-solid fa-ear-listen mr-1"></i> Phát âm 3 & 4
              </a>
              <a href="#van-hoa-tap2" class="block py-1.5 px-2.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-dark-surface font-semibold text-[11px]">
                <i class="fa-solid fa-landmark mr-1"></i> Văn hóa 3 & 4
              </a>

              <div class="pt-3 pb-1 font-bold text-emerald-600 dark:text-emerald-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-star"></i> Tra cứu & Ôn luyện
              </div>
              <a href="#hangeul-numbers" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-dark-surface transition font-medium">
                <i class="fa-solid fa-table mr-1 text-emerald-500"></i> Hangeul & Số đếm
              </a>
              <a href="#grammar-summary" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-dark-surface transition font-medium">
                <i class="fa-solid fa-book-bookmark mr-1 text-indigo-500"></i> Tổng hợp ngữ pháp
              </a>
            </div>

            <button onclick="openTrangNguyenModal()" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-600 text-white font-black text-xs shadow-md shadow-indigo-600/20 hover:opacity-95 transition flex items-center justify-center gap-2">
              <i class="fa-solid fa-award text-yellow-300"></i>
              <span>Vào Thi Trạng Nguyên (60:00)</span>
            </button>
          </div>
        </div>
      </aside>

      <!-- Right Main Content Area -->
      <div class="flex-1 space-y-12 min-w-0">

        <!-- ============================================== -->
        <!-- TẬP MỘT: BÀI 1 - BÀI 8 -->
        <!-- ============================================== -->
        <section id="tap-1" class="space-y-8">
          <div class="flex items-center justify-between pb-3 border-b-2 border-indigo-600">
            <div>
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Phần 1 • Giáo trình Học kỳ I</span>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-book-open text-indigo-600"></i>
                <span>Tập Một: Bài 1 đến Bài 8 (Trang 5–85)</span>
              </h2>
            </div>
            <span class="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold text-xs border border-indigo-200 dark:border-indigo-800">
              8 Bài Học + 2 Phát Âm + 2 Văn Hóa
            </span>
          </div>
`;

// Render Lessons 1 to 8
lessons.filter(l => l.book === 1).forEach(l => {
  html += renderLesson(l);
});

// Render Pronunciation 1 & 2
html += `          <!-- Section: Phát âm 1 & 2 -->
          <div id="phat-am-tap1" class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/30 border border-indigo-200 dark:border-indigo-900/60 shadow-md space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[11px] font-black uppercase text-indigo-600 tracking-wider">Chuyên đề Luyện Âm Tập 1</span>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                  <i class="fa-solid fa-ear-listen text-indigo-600"></i>
                  <span>Phát Âm 1 &amp; Phát Âm 2 (발음 클리닉)</span>
                </h3>
              </div>
              <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-dark-card text-xs font-bold text-indigo-700 dark:text-indigo-300 shadow-2xs">Chuẩn Ngữ Âm</span>
            </div>
`;

pronunciations.filter(p => p.book === 1).forEach(p => {
  html += renderPronunciation(p);
});

html += `          </div>\n`;

// Render Culture 1 & 2
html += `          <!-- Section: Văn hóa 1 & 2 -->
          <div id="van-hoa-tap1" class="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/40 dark:to-orange-950/30 border border-rose-200 dark:border-rose-900/60 shadow-md space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[11px] font-black uppercase text-rose-600 tracking-wider">Khám phá Văn hóa Xứ Kim Chi Tập 1</span>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                  <i class="fa-solid fa-landmark text-rose-600"></i>
                  <span>Văn Hóa 1 &amp; Văn Hóa 2 (한국 문화 탐방)</span>
                </h3>
              </div>
              <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-dark-card text-xs font-bold text-rose-700 dark:text-rose-300 shadow-2xs">Đời Sống & Lễ Hội</span>
            </div>
`;

cultures.filter(c => c.book === 1).forEach(c => {
  html += renderCulture(c);
});

html += `          </div>
        </section>

        <!-- ============================================== -->
        <!-- TẬP HAI: BÀI 9 - BÀI 16 -->
        <!-- ============================================== -->
        <section id="tap-2" class="space-y-8 pt-8">
          <div class="flex items-center justify-between pb-3 border-b-2 border-blue-600">
            <div>
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Phần 2 • Giáo trình Học kỳ II</span>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-book-open text-blue-600"></i>
                <span>Tập Hai: Bài 9 đến Bài 16 (Trang 86–167)</span>
              </h2>
            </div>
            <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold text-xs border border-blue-200 dark:border-blue-800">
              8 Bài Học + 2 Phát Âm + 2 Văn Hóa
            </span>
          </div>
`;

// Render Lessons 9 to 16
lessons.filter(l => l.book === 2).forEach(l => {
  html += renderLesson(l);
});

// Render Pronunciation 3 & 4
html += `          <!-- Section: Phát âm 3 & 4 -->
          <div id="phat-am-tap2" class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/30 border border-indigo-200 dark:border-indigo-900/60 shadow-md space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[11px] font-black uppercase text-indigo-600 tracking-wider">Chuyên đề Luyện Âm Tập 2</span>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                  <i class="fa-solid fa-ear-listen text-indigo-600"></i>
                  <span>Phát Âm 3 &amp; Phát Âm 4 (Mũi hóa &amp; Nhũ âm hóa)</span>
                </h3>
              </div>
              <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-dark-card text-xs font-bold text-indigo-700 dark:text-indigo-300 shadow-2xs">Biến Âm Tự Nhiên</span>
            </div>
`;

pronunciations.filter(p => p.book === 2).forEach(p => {
  html += renderPronunciation(p);
});

html += `          </div>\n`;

// Render Culture 3 & 4
html += `          <!-- Section: Văn hóa 3 & 4 -->
          <div id="van-hoa-tap2" class="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/40 dark:to-orange-950/30 border border-rose-200 dark:border-rose-900/60 shadow-md space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[11px] font-black uppercase text-rose-600 tracking-wider">Khám phá Văn hóa Xứ Kim Chi Tập 2</span>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                  <i class="fa-solid fa-utensils text-rose-600"></i>
                  <span>Văn Hóa 3 &amp; Văn Hóa 4 (Ẩm Thực, Trò Chơi &amp; Trường Học)</span>
                </h3>
              </div>
              <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-dark-card text-xs font-bold text-rose-700 dark:text-rose-300 shadow-2xs">Trải Nghiệm Độc Đáo</span>
            </div>
`;

cultures.filter(c => c.book === 2).forEach(c => {
  html += renderCulture(c);
});

html += `          </div>
        </section>

        <!-- ============================================== -->
        <!-- TRA CỨU: BẢNG CHỮ CÁI HANGEUL & BẢNG SỐ ĐẾM -->
        <!-- ============================================== -->
        <section id="hangeul-numbers" class="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-[11px] font-black uppercase text-blue-600 tracking-wider">Cẩm Nang Tra Cứu Toàn Diện</span>
              <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-table text-blue-600"></i>
                <span>Bảng Chữ Cái Hangeul (한글) &amp; Hệ Thống Số Đếm Tiếng Hàn</span>
              </h3>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">Bấm vào ô để nghe phát âm</span>
          </div>

          <!-- Bảng nguyên âm & phụ âm cơ bản -->
          <div class="space-y-3">
            <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-font text-indigo-500"></i> 1. Bảng Chữ Cái Hangeul Cơ Bản
            </h4>
            <div class="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center text-xs">
              <div onclick="speakKorean('아')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅏ</span>
                <span class="text-[10px] text-gray-400">a</span>
              </div>
              <div onclick="speakKorean('야')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅑ</span>
                <span class="text-[10px] text-gray-400">ya</span>
              </div>
              <div onclick="speakKorean('어')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅓ</span>
                <span class="text-[10px] text-gray-400">eo</span>
              </div>
              <div onclick="speakKorean('여')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅕ</span>
                <span class="text-[10px] text-gray-400">yeo</span>
              </div>
              <div onclick="speakKorean('오')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅗ</span>
                <span class="text-[10px] text-gray-400">o</span>
              </div>
              <div onclick="speakKorean('요')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅛ</span>
                <span class="text-[10px] text-gray-400">yo</span>
              </div>
              <div onclick="speakKorean('우')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅜ</span>
                <span class="text-[10px] text-gray-400">u</span>
              </div>
              <div onclick="speakKorean('유')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅠ</span>
                <span class="text-[10px] text-gray-400">yu</span>
              </div>
              <div onclick="speakKorean('으')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅡ</span>
                <span class="text-[10px] text-gray-400">eu</span>
              </div>
              <div onclick="speakKorean('이')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition">
                <span class="block text-base font-black text-indigo-600 dark:text-indigo-400">ㅣ</span>
                <span class="text-[10px] text-gray-400">i</span>
              </div>
            </div>
          </div>

          <!-- Bảng so sánh 2 hệ số đếm -->
          <div class="space-y-3 pt-2">
            <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-arrow-down-1-9 text-rose-500"></i> 2. Phân Biệt Số Thuần Hàn và Số Hán Hàn
            </h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="bg-gray-100 dark:bg-dark-surface border-b border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                    <th class="p-2.5 font-bold">Số</th>
                    <th class="p-2.5 font-bold text-indigo-600 dark:text-indigo-400">Số Thuần Hàn (Đếm giờ, đồ vật, tuổi)</th>
                    <th class="p-2.5 font-bold text-rose-600 dark:text-rose-400">Số Hán Hàn (Đếm phút, ngày tháng, tiền)</th>
                    <th class="p-2.5 font-bold">Đơn vị đếm tương ứng</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800 text-gray-600 dark:text-gray-300">
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">1</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('하나, 한')">하나 (한)</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('일')">일</td>
                    <td class="p-2 text-[11px]">한 개, 한 명, 한 시 / 1분, 1일, 1월</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">2</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('둘, 두')">둘 (두)</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('이')">이</td>
                    <td class="p-2 text-[11px]">두 병, 두 잔, 두 시 / 2분, 2일, 2층</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">3</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('셋, 세')">셋 (세)</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('삼')">삼</td>
                    <td class="p-2 text-[11px]">세 권, 세 마리, 세 시 / 3분, 3월, 3번</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">4</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('넷, 네')">넷 (네)</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('사')">사</td>
                    <td class="p-2 text-[11px]">네 명, 네 시 / 4분, 4월, 4층</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">5</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('다섯')">다섯</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('오')">오</td>
                    <td class="p-2 text-[11px]">다섯 개, 다섯 시 / 5분, 5일, 5,000원</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">6</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('여섯')">여섯</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('육, 유')">육 (유월)</td>
                    <td class="p-2 text-[11px]">여섯 시 / 6월 [유월], 6분</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">7</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('일곱')">일곱</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('칠')">칠</td>
                    <td class="p-2 text-[11px]">일곱 시 / 7월, 7일, 7분</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">8</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('여덟')">여덟 [여덜]</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('팔')">팔</td>
                    <td class="p-2 text-[11px]">여덟 시 / 8월, 8일, 8분</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">9</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('아홉')">아홉</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('구')">구</td>
                    <td class="p-2 text-[11px]">아홉 시 / 9월, 9일, 9분</td>
                  </tr>
                  <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                    <td class="p-2 font-bold">10</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-indigo-600" onclick="speakKorean('열')">열</td>
                    <td class="p-2 font-bold cursor-pointer hover:text-rose-600" onclick="speakKorean('십, 시')">십 (시월)</td>
                    <td class="p-2 text-[11px]">열 시, 열 명 / 10월 [시월], 10분, 10,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ============================================== -->
        <!-- BẢNG TỔNG HỢP CÁC CẤU TRÚC NGỮ PHÁP TIẾNG HÀN 5 -->
        <!-- ============================================== -->
        <section id="grammar-summary" class="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-[11px] font-black uppercase text-emerald-600 tracking-wider">Hệ Thống Hóa Kiến Thức</span>
              <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-book-bookmark text-emerald-600"></i>
                <span>Các Cấu Trúc Ngữ Pháp Cốt Lõi Tiếng Hàn Lớp 5</span>
              </h3>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs">Trọng Tâm Bắt Buộc</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-gray-100 dark:bg-dark-surface border-b border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                  <th class="p-3 font-bold w-1/4">Cấu trúc ngữ pháp</th>
                  <th class="p-3 font-bold w-1/3">Công dụng &amp; Ý nghĩa</th>
                  <th class="p-3 font-bold">Ví dụ chuẩn (Bấm để nghe)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800 text-gray-600 dark:text-gray-300">
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">Danh từ + 에</td>
                  <td class="p-3">Chỉ thời điểm diễn ra hành động ("vào lúc...")</td>
                  <td class="p-3 cursor-pointer hover:text-indigo-600" onclick="speakKorean('아침 8시에 일어나요.')">
                    <strong>아침 8시에 일어나요.</strong> <span class="text-gray-400 text-[11px] block">(Thức dậy lúc 8 giờ sáng.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">Danh từ + 도</td>
                  <td class="p-3">Thay thế cho 은/는, 이/가, 을/를 mang nghĩa "cũng"</td>
                  <td class="p-3 cursor-pointer hover:text-indigo-600" onclick="speakKorean('김밥도 좋아해요.')">
                    <strong>김밥도 좋아해요.</strong> <span class="text-gray-400 text-[11px] block">(Mình cũng thích cả cơm cuộn.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">-았/었/였어요</td>
                  <td class="p-3">Thì quá khứ, nói về việc đã làm</td>
                  <td class="p-3 cursor-pointer hover:text-indigo-600" onclick="speakKorean('어제 도서관에서 공부했어요.')">
                    <strong>어제 도서관에서 공부했어요.</strong> <span class="text-gray-400 text-[11px] block">(Hôm qua mình đã học ở thư viện.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">Danh từ + 하고</td>
                  <td class="p-3">Nối hai hay nhiều danh từ ("và", "cùng với")</td>
                  <td class="p-3 cursor-pointer hover:text-indigo-600" onclick="speakKorean('침대하고 책상이 있어요.')">
                    <strong>침대하고 책상이 있어요.</strong> <span class="text-gray-400 text-[11px] block">(Có giường và bàn học.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">-(으)로</td>
                  <td class="p-3">Chỉ phương tiện di chuyển hoặc phương hướng</td>
                  <td class="p-3 cursor-pointer hover:text-indigo-600" onclick="speakKorean('자전거로 와요. 오른쪽으로 가세요.')">
                    <strong>자전거로 와요. / 오른쪽으로 가세요.</strong> <span class="text-gray-400 text-[11px] block">(Đến bằng xe đạp / Hãy rẽ sang phải.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-blue-600 dark:text-blue-400">부터 ... 까지</td>
                  <td class="p-3">Chỉ mốc thời gian từ ... đến ...</td>
                  <td class="p-3 cursor-pointer hover:text-blue-600" onclick="speakKorean('7시부터 8시 30분까지 공부해요.')">
                    <strong>7시부터 8시 30분까지 공부해요.</strong> <span class="text-gray-400 text-[11px] block">(Học từ 7 giờ đến 8 giờ 30 phút.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-blue-600 dark:text-blue-400">-아/어야 하다</td>
                  <td class="p-3">Nghĩa vụ, bổn phận phải làm gì ("phải...")</td>
                  <td class="p-3 cursor-pointer hover:text-blue-600" onclick="speakKorean('열심히 공부해야 해요.')">
                    <strong>열심히 공부해야 해요.</strong> <span class="text-gray-400 text-[11px] block">(Phải học tập chăm chỉ.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-blue-600 dark:text-blue-400">-기 전에</td>
                  <td class="p-3">Trình tự trước: Trước khi làm việc gì đó</td>
                  <td class="p-3 cursor-pointer hover:text-blue-600" onclick="speakKorean('밥을 먹기 전에 손을 씻어요.')">
                    <strong>밥을 먹기 전에 손을 씻어요.</strong> <span class="text-gray-400 text-[11px] block">(Trước khi ăn cơm thì rửa tay.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-blue-600 dark:text-blue-400">-(으)ㅂ시다</td>
                  <td class="p-3">Câu đề nghị, rủ rê ("Chúng ta hãy cùng...")</td>
                  <td class="p-3 cursor-pointer hover:text-blue-600" onclick="speakKorean('영어를 같이 배웁시다.')">
                    <strong>영어를 같이 배웁시다.</strong> <span class="text-gray-400 text-[11px] block">(Cùng học tiếng Anh nhé!)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-blue-600 dark:text-blue-400">-고</td>
                  <td class="p-3">Nối hai động từ hoặc tính từ ("và, vừa... vừa...")</td>
                  <td class="p-3 cursor-pointer hover:text-blue-600" onclick="speakKorean('오늘 날씨가 좋고 따뜻해요.')">
                    <strong>오늘 날씨가 좋고 따뜻해요.</strong> <span class="text-gray-400 text-[11px] block">(Hôm nay thời tiết tốt và ấm áp.)</span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                  <td class="p-3 font-bold text-blue-600 dark:text-blue-400">-(으)ㄴ 후에</td>
                  <td class="p-3">Trình tự sau: Sau khi hoàn thành hành động nào đó</td>
                  <td class="p-3 cursor-pointer hover:text-blue-600" onclick="speakKorean('수영한 후에 해산물을 먹었어요.')">
                    <strong>수영한 후에 해산물을 먹었어요.</strong> <span class="text-gray-400 text-[11px] block">(Sau khi bơi đã ăn hải sản.)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  </main>

  <!-- ============================================== -->
  <!-- MODAL: HỘI THI TRẠNG NGUYÊN TIẾNG HÀN 5 (60:00) -->
  <!-- ============================================== -->
  <div id="trangNguyenModal" class="fixed inset-0 bg-black/70 z-50 hidden flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
    <div class="bg-white dark:bg-dark-surface rounded-3xl max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-indigo-700 via-blue-700 to-rose-700 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-yellow-300 text-xl backdrop-blur-sm">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-indigo-200">Đấu Trường Học Đường CodeHub</span>
            <h3 class="text-base sm:text-lg font-black leading-tight">Hội Thi Trạng Nguyên Tiếng Hàn Lớp 5</h3>
          </div>
        </div>
        <button onclick="closeTrangNguyenModal()" class="p-2 rounded-xl hover:bg-white/20 text-white transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 overflow-y-auto sidebar-scroll flex-1 space-y-5 text-xs sm:text-sm">
        
        <!-- Timer & Score Bar -->
        <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-dark-card border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <i class="fa-regular fa-clock text-indigo-600 dark:text-indigo-400 text-base"></i>
            <span class="text-xs text-gray-500 dark:text-gray-400">Thời gian còn lại:</span>
            <span id="contestTimer" class="text-sm font-black text-indigo-600 dark:text-indigo-400 font-mono">60:00</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-500 dark:text-gray-400">Tiến độ:</span>
            <span id="contestProgress" class="font-bold text-gray-900 dark:text-white">0 / ${trangNguyenQuizzes.length}</span>
          </div>
        </div>

        <!-- Questions List Container -->
        <div id="contestQuestionsContainer" class="space-y-5">
`;

trangNguyenQuizzes.forEach((q, idx) => {
  html += `          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2.5">
            <div class="font-bold text-gray-900 dark:text-white flex items-start gap-2">
              <span class="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-black shrink-0">Câu ${idx + 1}</span>
              <span>${escapeHtml(q.q)}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
  q.options.forEach((opt, optIdx) => {
    html += `              <label class="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-surface transition">
                <input type="radio" name="contest_q_${idx}" value="${optIdx}" class="text-indigo-600 focus:ring-indigo-500">
                <span class="text-xs text-gray-700 dark:text-gray-300 font-medium">${escapeHtml(opt)}</span>
              </label>\n`;
  });
  html += `            </div>
            <div id="contest_exp_${idx}" class="hidden p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40">
              <strong>Giải thích:</strong> ${escapeHtml(q.exp)}
            </div>
          </div>\n`;
});

html += `        </div>

        <!-- Contest Result Box -->
        <div id="contestResultBox" class="hidden p-6 rounded-3xl bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/20 border-2 border-yellow-300 dark:border-yellow-700 text-center space-y-3">
          <div class="w-16 h-16 rounded-3xl bg-yellow-400 text-white flex items-center justify-center text-3xl mx-auto shadow-lg shadow-yellow-500/30">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 id="contestRankTitle" class="text-xl font-black text-gray-900 dark:text-white">BẢNG VÀNG TRẠNG NGUYÊN</h4>
          <p id="contestScoreText" class="text-sm text-gray-700 dark:text-gray-200">Bạn đã hoàn thành bài thi với kết quả xuất sắc!</p>
          <div class="inline-block px-4 py-1.5 rounded-full bg-yellow-400 text-gray-950 font-black text-xs" id="contestBadge">
            Trạng Nguyên Xuất Sắc
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition">
          Đóng lại
        </button>
        <button id="submitContestBtn" onclick="submitContest()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20 hover:opacity-95 transition">
          Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400 space-y-2">
    <div class="flex items-center justify-center gap-2 font-bold text-indigo-600 dark:text-indigo-400">
      <i class="fa-solid fa-language"></i> CodeHub Tiếng Hàn 5 &bull; GDPT 2018
    </div>
    <p>Trọn bộ 16 bài học, 4 chuyên đề Phát âm, 4 góc Văn hóa Hàn Quốc, Bảng chữ cái Hangeul & Số đếm tương tác âm thanh Web Speech API.</p>
    <p class="text-[11px] text-gray-400">Thiết kế chuẩn hóa giao diện trực tuyến &bull; Không sử dụng hình ảnh scan SGK &bull; Bảo vệ bản quyền giáo dục.</p>
  </footer>

  <!-- Core JavaScript -->
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

    // Web Speech API for Korean Pronunciation
    function speakKorean(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'ko-KR';
        u.rate = 0.85; // tốc độ chuẩn cho học sinh tiểu học
        window.speechSynthesis.speak(u);
      } else {
        alert('Trình duyệt của bạn chưa hỗ trợ phát âm trực tiếp.');
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
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-sm"></i><div><strong>Chính xác!</strong> ' + explanation + '</div></div>';
      } else {
        resBox.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40';
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-xmark text-rose-500 mt-0.5 text-sm"></i><div><strong>Chưa đúng rồi!</strong> ' + explanation + '</div></div>';
      }
      resBox.classList.remove('hidden');
    }

    // Toggle reading translation or answer
    function toggleSection(elementId) {
      const el = document.getElementById(elementId);
      if (el) {
        el.classList.toggle('hidden');
      }
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

    // Contest Trạng Nguyên Logic (60:00)
    let contestInterval = null;
    let contestSeconds = 60 * 60; // 60 minutes
    const contestTotal = ${trangNguyenQuizzes.length};
    const contestAnswers = ${JSON.stringify(trangNguyenQuizzes.map(q => q.ans))};

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
      let correct = 0;
      for (let i = 0; i < contestTotal; i++) {
        const radios = document.getElementsByName('contest_q_' + i);
        let selected = -1;
        for (let r = 0; r < radios.length; r++) {
          if (radios[r].checked) {
            selected = parseInt(radios[r].value, 10);
            break;
          }
        }
        const expBox = document.getElementById('contest_exp_' + i);
        if (expBox) expBox.classList.remove('hidden');
        if (selected === contestAnswers[i]) {
          correct++;
        }
      }

      const score = Math.round((correct / contestTotal) * 100);
      const resBox = document.getElementById('contestResultBox');
      const scoreText = document.getElementById('contestScoreText');
      const rankTitle = document.getElementById('contestRankTitle');
      const badge = document.getElementById('contestBadge');

      let rank = 'Tiến Sĩ Tiếng Hàn';
      if (score >= 90) rank = 'Trạng Nguyên Tiếng Hàn 5';
      else if (score >= 75) rank = 'Bảng Nhãn Tiếng Hàn 5';
      else if (score >= 60) rank = 'Thám Hoa Tiếng Hàn 5';

      rankTitle.innerText = rank.toUpperCase();
      badge.innerText = rank + ' • Điểm số: ' + score + '/100 (' + correct + '/' + contestTotal + ' câu đúng)';
      scoreText.innerText = 'Chúc mừng bạn đã hoàn thành xuất sắc Hội thi Trạng Nguyên Tiếng Hàn Lớp 5!';
      resBox.classList.remove('hidden');
      resBox.scrollIntoView({ behavior: 'smooth' });

      const btn = document.getElementById('submitContestBtn');
      if (btn) {
        btn.innerText = 'Đã Chấm Điểm';
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
      }
    }
  </script>
</body>
</html>`;

function renderLesson(l) {
  const d = l.dialogues[0];
  let res = `
          <!-- Lesson Card: Bài ${l.num} -->
          <article id="bai-${l.num}" class="lesson-card p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
            
            <!-- Lesson Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-black text-xs border border-indigo-200 dark:border-indigo-800">
                    Bài ${l.num} • Tập ${l.book}
                  </span>
                  <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">${escapeHtml(l.topic)}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <span>${escapeHtml(l.titleKr)}</span>
                </h3>
                <p class="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-bold">${escapeHtml(l.titleVi)}</p>
              </div>
              <button onclick="speakKorean('${escapeJs(l.titleKr + '. ' + d.kr1 + ' ' + d.kr2)}')" class="shrink-0 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-dark-surface hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center gap-2 border border-indigo-200 dark:border-indigo-800 transition">
                <i class="fa-solid fa-volume-high text-indigo-500"></i> Nghe Tiêu Đề
              </button>
            </div>

            <!-- 1. Hội thoại và mẫu câu (대화 & 핵심 문장) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-comments text-indigo-500"></i> 1. Hội thoại &amp; Mẫu câu giao tiếp (대화)
                </h4>
                <button onclick="speakKorean('${escapeJs(d.kr1 + ' ' + d.kr2 + ' ' + d.kr3 + ' ' + d.kr4)}')" class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-semibold">
                  <i class="fa-solid fa-play text-[10px]"></i> Nghe toàn bộ hội thoại
                </button>
              </div>

              <div class="space-y-2.5">
                <!-- Turn 1 -->
                <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80 flex items-start justify-between gap-3 group hover:border-indigo-300 transition">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 block">${escapeHtml(d.speaker1)}:</span>
                    <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${escapeHtml(d.kr1)}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${escapeHtml(d.vi1)}</p>
                  </div>
                  <button onclick="speakKorean('${escapeJs(d.kr1)}')" class="p-2 rounded-xl bg-white dark:bg-dark-card hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 shadow-2xs transition shrink-0" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>

                <!-- Turn 2 -->
                <div class="p-3.5 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 flex items-start justify-between gap-3 group hover:border-indigo-400 transition">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-bold text-blue-600 dark:text-blue-400 block">${escapeHtml(d.speaker2)}:</span>
                    <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${escapeHtml(d.kr2)}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${escapeHtml(d.vi2)}</p>
                  </div>
                  <button onclick="speakKorean('${escapeJs(d.kr2)}')" class="p-2 rounded-xl bg-white dark:bg-dark-card hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 shadow-2xs transition shrink-0" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>

                <!-- Turn 3 -->
                <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80 flex items-start justify-between gap-3 group hover:border-indigo-300 transition">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 block">${escapeHtml(d.speaker1)}:</span>
                    <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${escapeHtml(d.kr3)}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${escapeHtml(d.vi3)}</p>
                  </div>
                  <button onclick="speakKorean('${escapeJs(d.kr3)}')" class="p-2 rounded-xl bg-white dark:bg-dark-card hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 shadow-2xs transition shrink-0" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>

                <!-- Turn 4 -->
                <div class="p-3.5 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 flex items-start justify-between gap-3 group hover:border-indigo-400 transition">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-bold text-blue-600 dark:text-blue-400 block">${escapeHtml(d.speaker2)}:</span>
                    <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${escapeHtml(d.kr4)}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${escapeHtml(d.vi4)}</p>
                  </div>
                  <button onclick="speakKorean('${escapeJs(d.kr4)}')" class="p-2 rounded-xl bg-white dark:bg-dark-card hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 shadow-2xs transition shrink-0" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- 2. Từ vựng kèm nghĩa tiếng Việt (어휘) -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-spell-check text-blue-500"></i> 2. Từ vựng trọng tâm (어휘) - Bấm vào thẻ để nghe đọc
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
`;

  l.vocab.forEach(v => {
    res += `                <div onclick="speakKorean('${escapeJs(v.kr)}')" class="p-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition flex items-center justify-between gap-2 group shadow-2xs">
                  <div>
                    <span class="font-bold text-gray-900 dark:text-white text-xs sm:text-sm group-hover:text-indigo-600">${escapeHtml(v.kr)}</span>
                    <span class="block text-[10px] text-gray-400 font-mono">${escapeHtml(v.pron)}</span>
                    <span class="block text-[11px] text-gray-600 dark:text-gray-400 font-medium">${escapeHtml(v.vi)}</span>
                  </div>
                  <i class="fa-solid fa-volume-low text-gray-300 group-hover:text-indigo-500 text-xs shrink-0"></i>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 3. Ngữ pháp kèm ví dụ chi tiết (문법) -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-book text-emerald-500"></i> 3. Ngữ pháp &amp; Cấu trúc cốt lõi (문법)
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
`;

  l.grammarNotes.forEach(g => {
    res += `                <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-2">
                  <div class="font-bold text-indigo-900 dark:text-indigo-200 text-xs sm:text-sm flex items-center gap-1.5">
                    <i class="fa-solid fa-circle-dot text-indigo-500 text-[10px]"></i> ${escapeHtml(g.title)}
                  </div>
                  <p class="text-xs text-gray-600 dark:text-gray-300">${escapeHtml(g.desc)}</p>
                  <div class="p-2 rounded-lg bg-white dark:bg-dark-surface font-mono text-[11px] font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/30">
                    ${escapeHtml(g.formula)}
                  </div>
                  <div class="space-y-1 text-xs">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Ví dụ:</span>
`;
    g.examples.forEach(ex => {
      res += `                    <div class="cursor-pointer hover:text-indigo-600 flex items-start gap-1" onclick="speakKorean('${escapeJs(ex.kr)}')">
                      <i class="fa-solid fa-volume-high text-[10px] text-indigo-400 mt-1"></i>
                      <div>
                        <strong>${escapeHtml(ex.kr)}</strong>
                        <span class="text-gray-400 text-[11px] block">${escapeHtml(ex.vi)}</span>
                      </div>
                    </div>\n`;
    });
    res += `                  </div>
                  ${g.tip ? `<div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/30 text-[11px] text-amber-800 dark:text-amber-200">
                    <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> ${escapeHtml(g.tip)}
                  </div>` : ''}
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 4. Luyện nghe - nói (듣기 & 말하기) -->
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80 space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-headphones text-blue-500"></i> 4. Luyện nghe – nói tương tác (듣기 &amp; 말하기)
              </h4>
              <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800">
                <div class="space-y-0.5 text-xs text-gray-600 dark:text-gray-300">
                  <span class="font-bold text-gray-900 dark:text-white">Nhiệm vụ giao tiếp:</span>
                  <p>Luyện tập đối thoại theo mẫu câu bài ${l.num}. Lắng nghe phát âm chuẩn và luyện phản xạ nói lại to rõ ràng.</p>
                </div>
                <button onclick="speakKorean('${escapeJs(d.kr1 + ' ' + d.kr2)}')" class="shrink-0 px-3 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 flex items-center gap-1.5 transition">
                  <i class="fa-solid fa-volume-high"></i> Bấm để luyện nghe
                </button>
              </div>
            </div>

            <!-- 5. Luyện đọc - viết (읽기 & 쓰기) -->
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80 space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-pen-nib text-rose-500"></i> 5. Luyện đọc – viết hiểu (읽기 &amp; 쓰기)
                </h4>
                <button onclick="toggleSection('trans_${l.num}')" class="text-xs text-rose-600 dark:text-rose-400 font-semibold hover:underline">
                  Xem dịch nghĩa tiếng Việt &darr;
                </button>
              </div>
              <div class="p-3.5 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-xs text-indigo-600 dark:text-indigo-400">${escapeHtml(l.reading.title)}</span>
                  <button onclick="speakKorean('${escapeJs(l.reading.contentKr)}')" class="text-xs text-indigo-500 hover:underline flex items-center gap-1 font-semibold">
                    <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc đoạn văn
                  </button>
                </div>
                <p class="text-xs sm:text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-medium">${escapeHtml(l.reading.contentKr)}</p>
                <div id="trans_${l.num}" class="hidden p-2.5 rounded-lg bg-gray-50 dark:bg-dark-surface text-xs text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                  ${escapeHtml(l.reading.contentVi)}
                </div>
                <div class="pt-2 border-t border-gray-100 dark:border-gray-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div class="font-bold text-gray-700 dark:text-gray-300">
                    <i class="fa-solid fa-circle-question text-indigo-500 mr-1"></i> ${escapeHtml(l.reading.question)}
                  </div>
                  <button onclick="toggleSection('ans_read_${l.num}')" class="text-indigo-600 dark:text-indigo-400 font-semibold text-xs text-left">
                    Xem đáp án mẫu
                  </button>
                </div>
                <div id="ans_read_${l.num}" class="hidden text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
                  Đáp án: ${escapeHtml(l.reading.answer)}
                </div>
              </div>
            </div>

            <!-- 6. Bài tập củng cố (연습 문제) - Form chuẩn Lớp 4-5 tương tác tức thì -->
            <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/30 dark:bg-dark-surface border border-indigo-100 dark:border-indigo-900/40 space-y-4">
              <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-circle-check text-indigo-600"></i> 6. Bài tập củng cố trắc nghiệm (연습 문제)
                </h4>
                <span class="text-[11px] font-semibold text-gray-400">Chọn đáp án &amp; Bấm kiểm tra</span>
              </div>

              <div class="space-y-4">
`;

  l.quizzes.forEach((qz, qIdx) => {
    const qid = `${l.num}_${qIdx}`;
    res += `                <div class="p-3.5 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
                  <div class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-start gap-1.5">
                    <span class="text-indigo-600 dark:text-indigo-400">Câu ${qIdx + 1}:</span>
                    <span>${escapeHtml(qz.q)}</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
    qz.options.forEach((opt, optI) => {
      res += `                    <label class="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer flex items-center gap-2 bg-gray-50 dark:bg-dark-surface text-xs text-gray-700 dark:text-gray-300 transition">
                      <input type="radio" name="quiz_${qid}" value="${optI}" class="text-indigo-600 focus:ring-indigo-500">
                      <span>${escapeHtml(opt)}</span>
                    </label>\n`;
    });
    res += `                  </div>
                  <div class="flex items-center justify-between pt-1">
                    <button onclick="checkTopicQuiz('${qid}', ${qz.ans}, '${escapeJs(qz.exp)}')" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition">
                      Kiểm tra đáp án
                    </button>
                  </div>
                  <div id="res_${qid}" class="hidden"></div>
                </div>\n`;
  });

  res += `              </div>
            </div>

          </article>\n`;

  return res;
}

function renderPronunciation(p) {
  let res = `
            <div class="p-4 rounded-xl bg-white dark:bg-dark-card border border-indigo-100 dark:border-indigo-900/40 space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                  <i class="fa-solid fa-microphone text-indigo-500"></i> ${escapeHtml(p.title)}
                </h4>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300">${escapeHtml(p.desc)}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
`;
  p.rules.forEach(r => {
    res += `                <div onclick="speakKorean('${escapeJs(r.kr)}')" class="p-2.5 rounded-lg bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-indigo-400 cursor-pointer transition flex items-center justify-between">
                  <div>
                    <span class="font-bold text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm">${escapeHtml(r.kr)}</span>
                    <span class="text-gray-500 dark:text-gray-400 font-mono ml-2 font-bold">${escapeHtml(r.pron)}</span>
                    <span class="block text-[11px] text-gray-400">${escapeHtml(r.explain)}</span>
                  </div>
                  <i class="fa-solid fa-volume-high text-gray-300 text-xs"></i>
                </div>\n`;
  });
  res += `              </div>
              <div class="p-2.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/30 text-[11px] text-indigo-700 dark:text-indigo-300">
                <i class="fa-solid fa-circle-info mr-1"></i> ${escapeHtml(p.tip)}
              </div>
            </div>\n`;
  return res;
}

function renderCulture(c) {
  let res = `
            <div class="p-4 rounded-xl bg-white dark:bg-dark-card border border-rose-100 dark:border-rose-900/40 space-y-3">
              <h4 class="font-bold text-sm text-rose-900 dark:text-rose-200 flex items-center gap-2">
                <i class="fa-solid fa-feather text-rose-500"></i> ${escapeHtml(c.title)}
              </h4>
              <p class="text-xs text-gray-600 dark:text-gray-300">${escapeHtml(c.desc)}</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
`;
  c.sections.forEach(s => {
    res += `                <div class="p-3 rounded-lg bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 space-y-1">
                  <div class="font-bold text-rose-800 dark:text-rose-300 text-xs">${escapeHtml(s.heading)}</div>
                  <p class="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">${escapeHtml(s.content)}</p>
                </div>\n`;
  });
  res += `              </div>
            </div>\n`;
  return res;
}

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'tienghan_5.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'korean_5.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
