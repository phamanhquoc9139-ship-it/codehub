const fs = require('fs');
const path = require('path');
const { lessons, trangNguyenJapaneseQuizzes } = require('./tiengnhat_data.js');

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

console.log('Building Tieng Nhat 5 HTML...');

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Nhật Lớp 5 (Trọn Bộ 16 Bài • 6 Ôn Tập • 40 Chữ Hán) | CodeHub</title>
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
            japan: {
              red: '#BC002D',
              darkred: '#990024',
              sakura: '#FFB7C5',
              fuji: '#2C3E50'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Tiếng Nhật Lớp 5">
  <meta name="description" content="Khóa học Tiếng Nhật Lớp 5 theo chương trình GDPT 2018: Trọn bộ 16 bài học qua 2 tập, 6 bài ôn tập củng cố, 40 chữ Hán Kanji cơ bản, phát âm chuẩn Web Speech API (ja-JP), 8 mục học tập chuẩn hóa mỗi bài, câu hỏi kiểm tra chuẩn form lớp 4-5 và Hội thi Trạng Nguyên Tiếng Nhật 5 (60:00).">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #e11d48; border-radius: 4px; }
    .japanese-hero-bg {
      background: radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.12) 0%, transparent 40%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawerBackdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/50 z-40 lg:hidden hidden transition-opacity duration-300"></div>

  <!-- Mobile Drawer Navigation -->
  <aside id="mobileDrawer" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 lg:hidden transform -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col">
    <div class="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-rose-600 via-red-600 to-pink-700 text-white">
      <div class="flex items-center gap-2 font-bold text-sm">
        <i class="fa-solid fa-torii-gate"></i>
        <span>Mục lục Tiếng Nhật 5</span>
      </div>
      <button onclick="toggleDrawer()" class="p-1.5 rounded-lg hover:bg-white/20 text-white transition">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <div class="p-4 overflow-y-auto sidebar-scroll flex-1 text-xs space-y-2">
      <div class="text-[11px] font-black uppercase text-gray-400 tracking-wider">Tập 1 (Bài 1 – Bài 8)</div>
`;

lessons.filter(l => l.book === 1).forEach(l => {
  if (l.isReview) {
    html += `      <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1.5 pl-3 text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-950/40 rounded-lg">
        <i class="fa-solid fa-bookmark mr-1"></i> ${escapeHtml(l.titleJp)}
      </a>\n`;
  } else {
    html += `      <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-rose-600">
        Bài ${l.num}. ${escapeHtml(l.titleJp)}
      </a>\n`;
  }
});

html += `      <div class="pt-2 text-[11px] font-black uppercase text-gray-400 tracking-wider">Tập 2 (Bài 9 – Bài 16)</div>
`;

lessons.filter(l => l.book === 2).forEach(l => {
  if (l.isReview) {
    html += `      <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1.5 pl-3 text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-950/40 rounded-lg">
        <i class="fa-solid fa-bookmark mr-1"></i> ${escapeHtml(l.titleJp)}
      </a>\n`;
  } else if (l.isFinalReview) {
    html += `      <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1.5 pl-3 text-red-600 dark:text-red-400 font-black bg-red-100 dark:bg-red-950/60 rounded-lg">
        <i class="fa-solid fa-star mr-1"></i> Bài 16. ${escapeHtml(l.titleJp)}
      </a>\n`;
  } else {
    html += `      <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-rose-600">
        Bài ${l.num}. ${escapeHtml(l.titleJp)}
      </a>\n`;
  }
});

html += `      <div class="pt-2 text-[11px] font-black uppercase text-gray-400 tracking-wider">Tra cứu &amp; Đấu trường</div>
      <a href="#kana-tables" onclick="toggleDrawer()" class="block py-1 pl-3 text-blue-600 dark:text-blue-400 font-bold">
        <i class="fa-solid fa-table mr-1"></i> Bảng chữ cái Hiragana & Katakana
      </a>
      <a href="#kanji-summary" onclick="toggleDrawer()" class="block py-1 pl-3 text-emerald-600 dark:text-emerald-400 font-bold">
        <i class="fa-solid fa-pen-nib mr-1"></i> Bảng tổng hợp 40 chữ Hán Kanji
      </a>
      <button onclick="toggleDrawer(); openTrangNguyenModal();" class="w-full text-left py-2 px-3 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold flex items-center gap-2 mt-2">
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
        <a href="../index.html" class="flex items-center gap-2.5 text-rose-600 dark:text-rose-400 font-extrabold text-lg sm:text-xl tracking-tight">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-red-600 to-pink-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
            <i class="fa-solid fa-torii-gate text-lg"></i>
          </div>
          <span class="hidden sm:inline text-gray-900 dark:text-white">CodeHub</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800">Tiếng Nhật 5</span>
        </a>
      </div>

      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" oninput="filterLessons()" placeholder="Tìm bài học, từ vựng, mẫu câu, chữ Hán..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-gray-100 dark:bg-dark-card border-none focus:ring-2 focus:ring-rose-500 dark:text-white placeholder-gray-400 transition">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="openTrangNguyenModal()" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs shadow-md shadow-rose-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5">
          <i class="fa-solid fa-award text-yellow-300"></i>
          <span>Trạng Nguyên Tiếng Nhật (60:00)</span>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="japanese-hero-bg border-b border-gray-200 dark:border-gray-800 relative overflow-hidden py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-center lg:text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-200 dark:border-rose-800">
            <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>Chương trình Ngoại Ngữ 1 &bull; GDPT 2018 Tiểu Học</span>
          </div>
          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 bg-clip-text text-transparent">Tiếng Nhật Lớp 5</span> (にほんご 5)
          </h1>
          <p class="text-xs sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Hệ thống hóa toàn diện 16 bài học qua 2 tập: Mục tiêu bài học &bull; Từ vựng &amp; Phát âm Web Speech API <strong class="text-rose-600 dark:text-rose-400">ja-JP</strong> &bull; Mẫu câu giao tiếp &bull; Hội thoại tình huống &bull; 40 Chữ Hán (Kanji) có nét viết &bull; 4 kỹ năng Nghe-Nói-Đọc-Viết &bull; Chuyên đề Văn hóa Nhật Bản &bull; 6 Bài Ôn tập củng cố &bull; Đấu trường Trạng Nguyên 60 phút.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <a href="#tap-1" class="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md shadow-rose-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Một (Bài 1–8)
            </a>
            <a href="#tap-2" class="px-3.5 py-1.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-md shadow-red-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Hai (Bài 9–16)
            </a>
            <a href="#kana-tables" class="px-3.5 py-1.5 rounded-xl bg-pink-600 text-white font-bold text-xs hover:bg-pink-700 shadow-md shadow-pink-600/20 transition">
              <i class="fa-solid fa-table mr-1.5"></i> Bảng Hiragana &amp; Katakana
            </a>
            <button onclick="openTrangNguyenModal()" class="px-3.5 py-1.5 rounded-xl bg-yellow-500 text-gray-900 font-black text-xs hover:bg-yellow-400 shadow-md shadow-yellow-500/20 transition">
              <i class="fa-solid fa-trophy mr-1.5"></i> Thi Trạng Nguyên 60:00
            </button>
          </div>
        </div>

        <!-- Japanese Aesthetic Card (SVG / Styled UI, NO SGK Scan) -->
        <div class="w-full max-w-sm shrink-0">
          <div class="p-5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-xl space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div class="flex items-center gap-2 font-bold text-xs text-gray-700 dark:text-gray-200">
                <i class="fa-solid fa-compass text-rose-500"></i> Trọng tâm khóa học
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">16 Bài + 6 Ôn Tập</span>
            </div>
            <div class="grid grid-cols-2 gap-2.5 text-center text-xs">
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-rose-600 dark:text-rose-400">16</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Chủ đề bài học</div>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-red-600 dark:text-red-400">40</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Chữ Hán Kanji</div>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-pink-600 dark:text-pink-400">6 + 1</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Bài Ôn tập &amp; Tổng ôn</div>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80">
                <div class="text-lg font-black text-emerald-600 dark:text-emerald-400">Web Speech</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Phát âm ja-JP</div>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 text-[11px] text-rose-800 dark:text-rose-200 flex items-center gap-2">
              <i class="fa-solid fa-volume-high text-rose-500 shrink-0 text-sm"></i>
              <span>Bấm vào từ vựng hoặc câu hội thoại để nghe phát âm tiếng Nhật chuẩn Tokyo!</span>
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
              <i class="fa-solid fa-list-ul text-rose-500"></i>
            </div>
            
            <div class="space-y-1 text-xs max-h-[70vh] overflow-y-auto sidebar-scroll pr-1">
              <div class="pt-1 pb-1 font-bold text-rose-600 dark:text-rose-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-bookmark"></i> Tập 1: Bài 1 – Bài 8
              </div>
`;

lessons.filter(l => l.book === 1).forEach(l => {
  if (l.isReview) {
    html += `              <a href="#bai-${l.num}" class="block py-1.5 px-2.5 rounded-lg text-rose-600 dark:text-rose-400 font-bold bg-rose-50/70 dark:bg-rose-950/40 hover:bg-rose-100 transition truncate">
                <i class="fa-solid fa-bookmark mr-1"></i> ${escapeHtml(l.titleJp)}
              </a>\n`;
  } else {
    html += `              <a href="#bai-${l.num}" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-rose-600 hover:bg-rose-50/50 dark:hover:bg-dark-surface transition truncate" title="Bài ${l.num}. ${escapeHtml(l.titleVi)}">
                <span class="font-bold text-gray-400">B${l.num}.</span> ${escapeHtml(l.titleJp)}
              </a>\n`;
  }
});

html += `              <div class="pt-3 pb-1 font-bold text-red-600 dark:text-red-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-bookmark"></i> Tập 2: Bài 9 – Bài 16
              </div>
`;

lessons.filter(l => l.book === 2).forEach(l => {
  if (l.isReview) {
    html += `              <a href="#bai-${l.num}" class="block py-1.5 px-2.5 rounded-lg text-rose-600 dark:text-rose-400 font-bold bg-rose-50/70 dark:bg-rose-950/40 hover:bg-rose-100 transition truncate">
                <i class="fa-solid fa-bookmark mr-1"></i> ${escapeHtml(l.titleJp)}
              </a>\n`;
  } else if (l.isFinalReview) {
    html += `              <a href="#bai-${l.num}" class="block py-1.5 px-2.5 rounded-lg text-red-600 dark:text-red-400 font-black bg-red-100 dark:bg-red-950/60 hover:bg-red-200 transition truncate">
                <i class="fa-solid fa-star mr-1"></i> Bài 16. Tổng ôn toàn khóa
              </a>\n`;
  } else {
    html += `              <a href="#bai-${l.num}" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-red-600 hover:bg-red-50/50 dark:hover:bg-dark-surface transition truncate" title="Bài ${l.num}. ${escapeHtml(l.titleVi)}">
                <span class="font-bold text-gray-400">B${l.num}.</span> ${escapeHtml(l.titleJp)}
              </a>\n`;
  }
});

html += `              <div class="pt-3 pb-1 font-bold text-emerald-600 dark:text-emerald-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-star"></i> Tra cứu & Ôn luyện
              </div>
              <a href="#kana-tables" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-dark-surface transition font-medium">
                <i class="fa-solid fa-table mr-1 text-emerald-500"></i> Bảng chữ Hiragana & Katakana
              </a>
              <a href="#kanji-summary" class="block py-1.5 px-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-dark-surface transition font-medium">
                <i class="fa-solid fa-pen-nib mr-1 text-rose-500"></i> Bảng 40 Chữ Hán Kanji
              </a>
            </div>

            <button onclick="openTrangNguyenModal()" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-black text-xs shadow-md shadow-rose-600/20 hover:opacity-95 transition flex items-center justify-center gap-2">
              <i class="fa-solid fa-award text-yellow-300"></i>
              <span>Vào Thi Trạng Nguyên (60:00)</span>
            </button>
          </div>
        </div>
      </aside>

      <!-- Right Main Content Area -->
      <div class="flex-1 space-y-12 min-w-0">

        <!-- ============================================== -->
        <!-- TẬP MỘT: BÀI 1 - BÀI 8 + ÔN TẬP 1, 2, 3 -->
        <!-- ============================================== -->
        <section id="tap-1" class="space-y-8">
          <div class="flex items-center justify-between pb-3 border-b-2 border-rose-600">
            <div>
              <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">Phần 1 • Giáo trình Học kỳ I</span>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-book-open text-rose-600"></i>
                <span>Tập Một: Bài 1 đến Bài 8 (Trang 5–110)</span>
              </h2>
            </div>
            <span class="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-bold text-xs border border-rose-200 dark:border-rose-800">
              8 Bài Học + 3 Bài Ôn Tập
            </span>
          </div>
`;

lessons.filter(l => l.book === 1).forEach(l => {
  if (l.isReview) {
    html += renderReview(l);
  } else {
    html += renderLesson(l);
  }
});

html += `        </section>

        <!-- ============================================== -->
        <!-- TẬP HAI: BÀI 9 - BÀI 16 + ÔN TẬP 4, 5, 6 + TỔNG ÔN -->
        <!-- ============================================== -->
        <section id="tap-2" class="space-y-8 pt-8">
          <div class="flex items-center justify-between pb-3 border-b-2 border-red-600">
            <div>
              <span class="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">Phần 2 • Giáo trình Học kỳ II</span>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-book-open text-red-600"></i>
                <span>Tập Hai: Bài 9 đến Bài 16 (Trang 111–222)</span>
              </h2>
            </div>
            <span class="px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/80 text-red-700 dark:text-red-300 font-bold text-xs border border-red-200 dark:border-red-800">
              8 Bài Học + 3 Bài Ôn Tập + 1 Tổng Ôn
            </span>
          </div>
`;

lessons.filter(l => l.book === 2).forEach(l => {
  if (l.isReview || l.isFinalReview) {
    html += renderReview(l);
  } else {
    html += renderLesson(l);
  }
});

html += `        </section>

        <!-- ============================================== -->
        <!-- BẢNG TRA CỨU: HIRAGANA & KATAKANA -->
        <!-- ============================================== -->
        <section id="kana-tables" class="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-[11px] font-black uppercase text-rose-600 tracking-wider">Cẩm Nang Ngữ Âm</span>
              <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-table text-rose-600"></i>
                <span>Bảng Chữ Cái Tiếng Nhật Hiragana &amp; Katakana</span>
              </h3>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">Bấm vào từng chữ để nghe phát âm</span>
          </div>

          <!-- Bảng Hiragana 5 hàng nguyên âm cơ bản -->
          <div class="space-y-3">
            <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-font text-rose-500"></i> 1. Bảng chữ mềm Hiragana (ひらがな)
            </h4>
            <div class="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center text-xs">
              <div onclick="speakJapanese('あ')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">あ</span>
                <span class="text-[10px] text-gray-400">a</span>
              </div>
              <div onclick="speakJapanese('い')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">い</span>
                <span class="text-[10px] text-gray-400">i</span>
              </div>
              <div onclick="speakJapanese('う')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">う</span>
                <span class="text-[10px] text-gray-400">u</span>
              </div>
              <div onclick="speakJapanese('え')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">え</span>
                <span class="text-[10px] text-gray-400">e</span>
              </div>
              <div onclick="speakJapanese('お')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">お</span>
                <span class="text-[10px] text-gray-400">o</span>
              </div>
              <div onclick="speakJapanese('か')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">か</span>
                <span class="text-[10px] text-gray-400">ka</span>
              </div>
              <div onclick="speakJapanese('き')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">き</span>
                <span class="text-[10px] text-gray-400">ki</span>
              </div>
              <div onclick="speakJapanese('く')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">く</span>
                <span class="text-[10px] text-gray-400">ku</span>
              </div>
              <div onclick="speakJapanese('け')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">け</span>
                <span class="text-[10px] text-gray-400">ke</span>
              </div>
              <div onclick="speakJapanese('こ')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition">
                <span class="block text-base font-black text-rose-600 dark:text-rose-400">こ</span>
                <span class="text-[10px] text-gray-400">ko</span>
              </div>
            </div>
          </div>

          <!-- Bảng Katakana từ mượn -->
          <div class="space-y-3 pt-2">
            <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-font text-blue-500"></i> 2. Bảng chữ cứng Katakana (カタカナ) thường gặp ở Lớp 5
            </h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-xs">
              <div onclick="speakJapanese('サッカー')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-blue-400 cursor-pointer transition">
                <span class="font-bold text-blue-600 dark:text-blue-400">サッカー</span>
                <span class="text-[10px] text-gray-400 block">sakkaa (bóng đá)</span>
              </div>
              <div onclick="speakJapanese('ピアノ')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-blue-400 cursor-pointer transition">
                <span class="font-bold text-blue-600 dark:text-blue-400">ピアノ</span>
                <span class="text-[10px] text-gray-400 block">piano</span>
              </div>
              <div onclick="speakJapanese('テレビ')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-blue-400 cursor-pointer transition">
                <span class="font-bold text-blue-600 dark:text-blue-400">テレビ</span>
                <span class="text-[10px] text-gray-400 block">terebi (tivi)</span>
              </div>
              <div onclick="speakJapanese('ボール')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-blue-400 cursor-pointer transition">
                <span class="font-bold text-blue-600 dark:text-blue-400">ボール</span>
                <span class="text-[10px] text-gray-400 block">booru (quả bóng)</span>
              </div>
              <div onclick="speakJapanese('カメラ')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-blue-400 cursor-pointer transition">
                <span class="font-bold text-blue-600 dark:text-blue-400">カメラ</span>
                <span class="text-[10px] text-gray-400 block">kamera (máy ảnh)</span>
              </div>
              <div onclick="speakJapanese('バス')" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-blue-400 cursor-pointer transition">
                <span class="font-bold text-blue-600 dark:text-blue-400">バス</span>
                <span class="text-[10px] text-gray-400 block">basu (xe buýt)</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ============================================== -->
        <!-- BẢNG TỔNG HỢP 40 CHỮ HÁN KANJI LỚP 5 -->
        <!-- ============================================== -->
        <section id="kanji-summary" class="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-[11px] font-black uppercase text-emerald-600 tracking-wider">Hệ Thống 40 Chữ Hán Cốt Lõi</span>
              <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                <i class="fa-solid fa-pen-nib text-emerald-600"></i>
                <span>Bảng Tổng Hợp Chữ Hán Kanji Lớp 5 (Âm Hán Việt, Âm On/Kun &amp; Từ Ghép)</span>
              </h3>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs">Trọng Tâm Lớp 5</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
`;

// Collect all kanji across lessons
const allKanji = [];
lessons.forEach(l => {
  if (l.kanjiList && !l.isFinalReview) {
    l.kanjiList.forEach(k => allKanji.push({ ...k, lessonNum: l.num }));
  }
});

allKanji.forEach(k => {
  html += `            <div onclick="speakJapanese('${escapeJs(k.char)}')" class="p-3 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition flex flex-col justify-between group">
              <div class="flex items-center justify-between">
                <span class="text-2xl font-black text-rose-600 dark:text-rose-400 group-hover:scale-110 transition transform">${escapeHtml(k.char)}</span>
                <span class="text-[10px] text-gray-400 font-mono">${k.strokes} nét</span>
              </div>
              <div class="mt-2 space-y-0.5 text-xs">
                <div class="font-bold text-gray-900 dark:text-white text-[11px]">${escapeHtml(k.mean)}</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400">On: ${escapeHtml(k.on)}</div>
                <div class="text-[10px] text-gray-500 dark:text-gray-400">Kun: ${escapeHtml(k.kun)}</div>
                <div class="text-[10px] text-rose-600 dark:text-rose-400 truncate pt-1 border-t border-gray-100 dark:border-gray-800">${escapeHtml(k.word)}</div>
              </div>
            </div>\n`;
});

html += `          </div>
        </section>

      </div>
    </div>
  </main>

  <!-- ============================================== -->
  <!-- MODAL: HỘI THI TRẠNG NGUYÊN TIẾNG NHẬT 5 (60:00) -->
  <!-- ============================================== -->
  <div id="trangNguyenModal" class="fixed inset-0 bg-black/70 z-50 hidden flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
    <div class="bg-white dark:bg-dark-surface rounded-3xl max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-rose-600 via-red-600 to-pink-700 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-yellow-300 text-xl backdrop-blur-sm">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-rose-200">Đấu Trường Học Đường CodeHub</span>
            <h3 class="text-base sm:text-lg font-black leading-tight">Hội Thi Trạng Nguyên Tiếng Nhật Lớp 5</h3>
          </div>
        </div>
        <button onclick="closeTrangNguyenModal()" class="p-2 rounded-xl hover:bg-white/20 text-white transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 overflow-y-auto sidebar-scroll flex-1 space-y-5 text-xs sm:text-sm">
        
        <!-- Timer & Score Bar -->
        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-dark-card border border-rose-100 dark:border-rose-900/40 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <i class="fa-regular fa-clock text-rose-600 dark:text-rose-400 text-base"></i>
            <span class="text-xs text-gray-500 dark:text-gray-400">Thời gian còn lại:</span>
            <span id="contestTimer" class="text-sm font-black text-rose-600 dark:text-rose-400 font-mono">60:00</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-500 dark:text-gray-400">Tiến độ:</span>
            <span id="contestProgress" class="font-bold text-gray-900 dark:text-white">0 / ${trangNguyenJapaneseQuizzes.length}</span>
          </div>
        </div>

        <!-- Questions List Container -->
        <div id="contestQuestionsContainer" class="space-y-5">
`;

trangNguyenJapaneseQuizzes.forEach((q, idx) => {
  html += `          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2.5">
            <div class="font-bold text-gray-900 dark:text-white flex items-start gap-2">
              <span class="px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-xs font-black shrink-0">Câu ${idx + 1}</span>
              <span>${escapeHtml(q.q)}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
  q.options.forEach((opt, optIdx) => {
    html += `              <label class="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-surface transition">
                <input type="radio" name="contest_q_${idx}" value="${optIdx}" class="text-rose-600 focus:ring-rose-500">
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
        <button id="submitContestBtn" onclick="submitContest()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs shadow-md shadow-rose-600/20 hover:opacity-95 transition">
          Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400 space-y-2">
    <div class="flex items-center justify-center gap-2 font-bold text-rose-600 dark:text-rose-400">
      <i class="fa-solid fa-torii-gate"></i> CodeHub Tiếng Nhật 5 &bull; GDPT 2018
    </div>
    <p>Trọn bộ 16 bài học, 6 bài ôn tập, 40 chữ Hán Kanji, Bảng chữ cái Hiragana & Katakana, Web Speech API phát âm chuẩn Tokyo.</p>
    <p class="text-[11px] text-gray-400">Thiết kế bài giảng trực tuyến chuẩn hóa &bull; Không sử dụng hình ảnh scan SGK &bull; Bản quyền CodeHub.</p>
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

    // Web Speech API for Japanese Pronunciation (ja-JP)
    function speakJapanese(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'ja-JP';
        u.rate = 0.85; // Tốc độ chuẩn cho học sinh tiểu học
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

    // Contest Trạng Nguyên Tiếng Nhật Logic (60:00)
    let contestInterval = null;
    let contestSeconds = 60 * 60; // 60 minutes
    const contestTotal = ${trangNguyenJapaneseQuizzes.length};
    const contestAnswers = ${JSON.stringify(trangNguyenJapaneseQuizzes.map(q => q.ans))};

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

      let rank = 'Tiến Sĩ Tiếng Nhật';
      if (score >= 90) rank = 'Trạng Nguyên Tiếng Nhật 5';
      else if (score >= 75) rank = 'Bảng Nhãn Tiếng Nhật 5';
      else if (score >= 60) rank = 'Thám Hoa Tiếng Nhật 5';

      rankTitle.innerText = rank.toUpperCase();
      badge.innerText = rank + ' • Điểm số: ' + score + '/100 (' + correct + '/' + contestTotal + ' câu đúng)';
      scoreText.innerText = 'Chúc mừng bạn đã hoàn thành xuất sắc Hội thi Trạng Nguyên Tiếng Nhật Lớp 5!';
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
  let fullDialogueText = l.dialogue.lines.map(ln => ln.jp).join(' ');

  let res = `
          <!-- Lesson Card: Bài ${l.num} -->
          <article id="bai-${l.num}" class="lesson-card p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
            
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-black text-xs border border-rose-200 dark:border-rose-800">
                    Bài ${l.num} • Tập ${l.book}
                  </span>
                  <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">${escapeHtml(l.topic)}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <span>${escapeHtml(l.titleJp)}</span>
                </h3>
                <p class="text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-bold">${escapeHtml(l.titleVi)} (${escapeHtml(l.titleRomaji)})</p>
              </div>
              <button onclick="speakJapanese('${escapeJs(l.titleJp)}')" class="shrink-0 px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-dark-surface hover:bg-rose-100 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center gap-2 border border-rose-200 dark:border-rose-800 transition">
                <i class="fa-solid fa-volume-high text-rose-500"></i> Nghe Tiêu Đề
              </button>
            </div>

            <!-- 1. Mục tiêu bài học (Target) -->
            <div class="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-xs text-rose-900 dark:text-rose-200 space-y-1">
              <div class="font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-bullseye text-rose-500"></i> 1. Mục tiêu bài học (Target)
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.target)}</p>
            </div>

            <!-- 2. Từ vựng tiếng Nhật – cách đọc – nghĩa tiếng Việt -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-spell-check text-rose-500"></i> 2. Từ vựng trọng tâm (語彙) - Bấm thẻ để nghe đọc
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
`;

  l.vocab.forEach(v => {
    res += `                <div onclick="speakJapanese('${escapeJs(v.jp)}')" class="p-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 hover:bg-rose-50/40 cursor-pointer transition flex items-center justify-between gap-2 group shadow-2xs">
                  <div>
                    <div class="font-bold text-gray-900 dark:text-white text-xs sm:text-sm group-hover:text-rose-600 flex items-center gap-1">
                      <span>${escapeHtml(v.jp)}</span>
                      ${v.kanji ? `<span class="text-[10px] text-gray-400 font-normal">(${escapeHtml(v.kanji)})</span>` : ''}
                    </div>
                    <span class="block text-[10px] text-gray-400 font-mono">${escapeHtml(v.romaji)}</span>
                    <span class="block text-[11px] text-gray-600 dark:text-gray-400 font-medium">${escapeHtml(v.vi)}</span>
                  </div>
                  <i class="fa-solid fa-volume-low text-gray-300 group-hover:text-rose-500 text-xs shrink-0"></i>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 3. Mẫu câu và giải thích cách sử dụng -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-book-open text-emerald-500"></i> 3. Mẫu câu &amp; Ngữ pháp cốt lõi (文法)
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
`;

  l.grammarNotes.forEach(g => {
    res += `                <div class="p-4 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 space-y-2">
                  <div class="font-bold text-rose-900 dark:text-rose-200 text-xs sm:text-sm flex items-center gap-1.5">
                    <i class="fa-solid fa-circle-dot text-rose-500 text-[10px]"></i> ${escapeHtml(g.title)}
                  </div>
                  <p class="text-xs text-gray-600 dark:text-gray-300">${escapeHtml(g.desc)}</p>
                  <div class="p-2.5 rounded-lg bg-white dark:bg-dark-surface font-mono text-[11px] font-bold text-rose-700 dark:text-rose-300 border border-rose-100 dark:border-rose-900/30 whitespace-pre-line">
                    ${escapeHtml(g.formula)}
                  </div>
                  <div class="space-y-1 text-xs">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Ví dụ câu:</span>
`;
    g.examples.forEach(ex => {
      res += `                    <div class="cursor-pointer hover:text-rose-600 flex items-start gap-1" onclick="speakJapanese('${escapeJs(ex.jp)}')">
                      <i class="fa-solid fa-volume-high text-[10px] text-rose-400 mt-1"></i>
                      <div>
                        <strong>${escapeHtml(ex.jp)}</strong>
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

            <!-- 4. Hội thoại và tình huống giao tiếp -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-comments text-indigo-500"></i> 4. Hội thoại &amp; Tình huống giao tiếp (会話)
                </h4>
                <button onclick="speakJapanese('${escapeJs(fullDialogueText)}')" class="text-xs text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 font-semibold">
                  <i class="fa-solid fa-play text-[10px]"></i> Nghe toàn bộ hội thoại
                </button>
              </div>

              <div class="space-y-2.5">
`;

  l.dialogue.lines.forEach((ln, idx) => {
    const isEven = idx % 2 === 1;
    res += `                <div class="p-3 rounded-2xl ${isEven ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/40' : 'bg-gray-50 dark:bg-dark-surface border-gray-100 dark:border-gray-800/80'} border flex items-start justify-between gap-3 group hover:border-rose-300 transition">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-bold ${isEven ? 'text-rose-600 dark:text-rose-400' : 'text-blue-600 dark:text-blue-400'} block">${escapeHtml(ln.spk)}:</span>
                    <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${escapeHtml(ln.jp)}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${escapeHtml(ln.vi)}</p>
                  </div>
                  <button onclick="speakJapanese('${escapeJs(ln.jp)}')" class="p-2 rounded-xl bg-white dark:bg-dark-card hover:bg-rose-50 text-gray-400 hover:text-rose-600 shadow-2xs transition shrink-0" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 5. Chữ Hán và luyện viết (Kanji Clinic) -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-pen-nib text-red-500"></i> 5. Chữ Hán &amp; Luyện viết nét bút (漢字)
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
`;

  l.kanjiList.forEach(k => {
    res += `                <div onclick="speakJapanese('${escapeJs(k.char)}')" class="p-3 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer transition flex flex-col justify-between group">
                  <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                    <span class="text-2xl font-black text-rose-600 dark:text-rose-400 group-hover:scale-110 transition transform">${escapeHtml(k.char)}</span>
                    <span class="text-[10px] text-gray-400 font-mono">${k.strokes} nét</span>
                  </div>
                  <div class="mt-2 space-y-1">
                    <div class="font-bold text-gray-900 dark:text-white text-xs">${escapeHtml(k.mean)}</div>
                    <div class="text-[11px] text-gray-500 dark:text-gray-400">Âm On: ${escapeHtml(k.on)}</div>
                    <div class="text-[11px] text-gray-500 dark:text-gray-400">Âm Kun: ${escapeHtml(k.kun)}</div>
                    <div class="text-[11px] text-rose-600 dark:text-rose-400 font-medium pt-1">${escapeHtml(k.word)}</div>
                  </div>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 6. Luyện nghe - nói - đọc - viết (Skills Training) -->
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800/80 space-y-3 text-xs">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-graduation-cap text-blue-500"></i> 6. Luyện tập 4 kỹ năng (Nghe • Nói • Đọc • Viết)
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                <div class="p-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-1">
                  <strong class="text-gray-900 dark:text-white flex items-center gap-1.5"><i class="fa-solid fa-headphones text-rose-500"></i> Nghe &amp; Nói:</strong>
                  <p>${escapeHtml(l.skills.listening)}</p>
                  <p class="text-rose-600 dark:text-rose-400 font-medium">${escapeHtml(l.skills.speaking)}</p>
                </div>
                <div class="p-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-1">
                  <strong class="text-gray-900 dark:text-white flex items-center gap-1.5"><i class="fa-solid fa-book-reader text-blue-500"></i> Đọc &amp; Viết:</strong>
                  <p>${escapeHtml(l.skills.reading)}</p>
                  <p class="text-indigo-600 dark:text-indigo-400 font-medium">${escapeHtml(l.skills.writing)}</p>
                </div>
              </div>
            </div>

            <!-- 7. Kiến thức văn hóa Nhật Bản -->
            <div class="p-4 rounded-2xl bg-rose-50/30 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 space-y-2 text-xs">
              <div class="font-bold text-rose-900 dark:text-rose-200 text-xs sm:text-sm flex items-center gap-2">
                <i class="fa-solid fa-landmark text-rose-600"></i> 7. Góc Văn Hóa Nhật Bản: ${escapeHtml(l.culture.title)}
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.culture.content)}</p>
            </div>

            <!-- 8. Bài tập tự luyện và đánh giá (4 câu trắc nghiệm chuẩn form Lớp 4-5) -->
            <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/40 dark:bg-dark-surface border border-rose-100 dark:border-rose-900/40 space-y-4">
              <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-circle-check text-rose-600"></i> 8. Bài tập tự luyện &amp; Đánh giá năng lực (練習問題)
                </h4>
                <span class="text-[11px] font-semibold text-gray-400">Chọn đáp án &amp; Bấm kiểm tra</span>
              </div>

              <div class="space-y-4">
`;

  l.quizzes.forEach((qz, qIdx) => {
    const qid = `${l.num}_${qIdx}`;
    res += `                <div class="p-3.5 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
                  <div class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-start gap-1.5">
                    <span class="text-rose-600 dark:text-rose-400">Câu ${qIdx + 1}:</span>
                    <span>${escapeHtml(qz.q)}</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
    qz.options.forEach((opt, optI) => {
      res += `                    <label class="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer flex items-center gap-2 bg-gray-50 dark:bg-dark-surface text-xs text-gray-700 dark:text-gray-300 transition">
                      <input type="radio" name="quiz_${qid}" value="${optI}" class="text-rose-600 focus:ring-rose-500">
                      <span>${escapeHtml(opt)}</span>
                    </label>\n`;
    });
    res += `                  </div>
                  <div class="flex items-center justify-between pt-1">
                    <button onclick="checkTopicQuiz('${qid}', ${qz.ans}, '${escapeJs(qz.exp)}')" class="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition">
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

function renderReview(r) {
  let res = `
          <!-- Review Card: ${escapeHtml(r.titleJp)} -->
          <article id="bai-${r.num}" class="lesson-card p-6 rounded-3xl ${r.isFinalReview ? 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/40 dark:to-rose-950/30 border-2 border-red-400 dark:border-red-700' : 'bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 border border-rose-200 dark:border-rose-900/60'} shadow-md space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-rose-200 dark:border-rose-800">
              <div>
                <span class="text-[11px] font-black uppercase text-rose-600 tracking-wider">Củng cố &amp; Hệ thống hóa</span>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                  <i class="fa-solid ${r.isFinalReview ? 'fa-star text-yellow-500' : 'fa-bookmark text-rose-600'}"></i>
                  <span>${escapeHtml(r.titleJp)}: ${escapeHtml(r.titleVi)}</span>
                </h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-white dark:bg-dark-card text-xs font-bold text-rose-700 dark:text-rose-300 shadow-2xs">
                ${r.isFinalReview ? 'Tổng Ôn Toàn Khóa' : 'Bài Ôn Tập'}
              </span>
            </div>

            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(r.summary)}</p>

            <div class="space-y-4 pt-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-list-check text-rose-600"></i> Bài tập trắc nghiệm củng cố (4 câu hỏi):
              </h4>
              <div class="space-y-3">
`;

  r.quizzes.forEach((qz, qIdx) => {
    const qid = `${r.num}_${qIdx}`;
    res += `                <div class="p-3.5 rounded-xl bg-white dark:bg-dark-card border border-rose-100 dark:border-rose-900/40 space-y-2">
                  <div class="font-bold text-xs text-gray-900 dark:text-white flex items-start gap-1.5">
                    <span class="text-rose-600 dark:text-rose-400">Câu ${qIdx + 1}:</span>
                    <span>${escapeHtml(qz.q)}</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
    qz.options.forEach((opt, optI) => {
      res += `                    <label class="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-rose-400 cursor-pointer flex items-center gap-2 bg-gray-50 dark:bg-dark-surface text-xs text-gray-700 dark:text-gray-300 transition">
                      <input type="radio" name="quiz_${qid}" value="${optI}" class="text-rose-600 focus:ring-rose-500">
                      <span>${escapeHtml(opt)}</span>
                    </label>\n`;
    });
    res += `                  </div>
                  <div class="flex items-center justify-between pt-1">
                    <button onclick="checkTopicQuiz('${qid}', ${qz.ans}, '${escapeJs(qz.exp)}')" class="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition">
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

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'tiengnhat_5.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'japanese_5.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
