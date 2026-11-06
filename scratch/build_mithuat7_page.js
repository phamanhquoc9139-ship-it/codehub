const fs = require('fs');
const path = require('path');

const p1 = require('./mithuat7_part1.js');
const p2 = require('./mithuat7_part2.js');
const tools = require('./mithuat7_tools.js');
const { lessonIllustrations } = require('./mithuat7_illustrations.js');

const allLessons = [...p1, ...p2];
console.log('Total lessons loaded:', allLessons.length);

// 8 Safety rules
const safetyRules = [
  "Sắp xếp góc thực hành gọn gàng, có đủ ánh sáng tự nhiên và thông thoáng gió.",
  "Sử dụng kéo, dao trổ cẩn thận trên tấm lót cắt (cutting mat), luôn hướng mũi lưỡi ra xa cơ thể.",
  "Dùng keo dán, hồ dán, sơn xịt đúng hướng dẫn; tuyệt đối không ngậm hoặc nếm thử màu vẽ/keo.",
  "Ưu tiên tái chế các vật liệu sạch, khô ráo, không mốc, không dính tạp chất hoặc hóa chất độc hại.",
  "Rửa sạch cọ vẽ, bảng pha màu (palette) và công cụ in ngay sau khi hoàn thành buổi học.",
  "Không đổ trực tiếp cặn sơn, màu vẽ, keo hóa chất xuống cống thoát nước sinh hoạt.",
  "Bảo quản dao kéo, vật sắc nhọn trong hộp an toàn ngay sau khi sử dụng xong.",
  "Luôn rửa tay sạch bằng xà phòng sau khi thực hành nặn đất sét, in độc bản hoặc pha màu."
];

// Generate HTML
function buildPage() {
  const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Mĩ Thuật Lớp 7 (KNTT - GDPT 2018: 8 Chủ Đề • 16 Bài Học • Sổ Tay Kĩ Thuật &amp; Nguyên Lí • Đấu Trường Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0b0f19'
            },
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            },
            art: {
              rose: '#E11D48',
              pink: '#EC4899',
              fuchsia: '#C026D3',
              purple: '#9333EA',
              indigo: '#4F46E5',
              amber: '#D97706'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb { background: #334155; }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>

  <!-- Theme Init immediately to prevent flash -->
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen transition-colors">

  <!-- ==================== HEADER (STICKY) ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chủ CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chủ CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-pink-500/20 font-black text-sm group-hover:scale-105 transition">
            MT
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              MĨ THUẬT 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; Tạo Hình &amp; Ứng Dụng &bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Phòng Trưng Bày Ảo Button -->
        <button onclick="openGalleryModal()" class="px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 dark:bg-pink-950/60 dark:hover:bg-pink-900/60 text-pink-700 dark:text-pink-300 text-xs font-bold border border-pink-200 dark:border-pink-800 transition flex items-center gap-1.5 cursor-pointer" title="Phòng Trưng Bày Ảo 14 kiệt tác mĩ thuật">
          <i class="fa-solid fa-palette text-pink-600 dark:text-pink-400"></i>
          <span class="hidden md:inline">Phòng Trưng Bày Ảo (14)</span>
        </button>

        <!-- Sổ Tay Kĩ Thuật & Nguyên Lí Button -->
        <button onclick="openTechniquesModal()" class="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800 transition flex items-center gap-1.5 cursor-pointer" title="8 Nguyên lí tạo hình &amp; 7 Kĩ thuật thực hành mĩ thuật">
          <i class="fa-solid fa-shapes text-purple-600 dark:text-purple-400"></i>
          <span class="hidden md:inline">Sổ Tay Kĩ Thuật &amp; Nguyên Lí</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-bold shadow-md shadow-rose-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-purple-950 text-white py-10 sm:py-14 border-b border-rose-900/40">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold">
            <i class="fa-solid fa-paintbrush"></i> Bộ sách Kết nối tri thức với cuộc sống &bull; GDPT 2018
          </div>
          <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">Mĩ Thuật Lớp 7</span>
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Hệ thống hóa toàn diện <strong>8 chủ đề &bull; 16 bài học</strong> và <strong>2 chuyên đề trưng bày – đánh giá</strong>. Toàn diện kiến thức cốt lõi, chu trình sáng tạo 8 bước, 8 nguyên lí tạo hình, kĩ thuật in độc bản Monoprint, tĩnh vật chì/màu và Đấu trường Trạng Nguyên 60:00.
          </p>
          <div class="flex flex-wrap gap-2 pt-1 text-xs">
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-book-open text-amber-400 mr-1.5"></i> Chuẩn 100% SGK Kết Nối Tri Thức
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-brush text-pink-400 mr-1.5"></i> Mĩ thuật tạo hình: 8 bài
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-compass-drafting text-purple-400 mr-1.5"></i> Mĩ thuật ứng dụng: 8 bài
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-landmark text-emerald-400 mr-1.5"></i> Di sản Việt Nam &amp; Thế Giới
            </span>
          </div>
        </div>

        <!-- Quick Stat Pills -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-rose-400">18</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Bài &amp; Trưng Bày</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-pink-400">14</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Tác Phẩm Di Sản</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-purple-400">8 + 7</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Nguyên Lí &amp; Kĩ Thuật</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-xl sm:text-2xl font-black text-amber-400">40</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Câu Hỏi Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN LAYOUT ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ==================== SIDEBAR ==================== -->
      <aside class="w-full lg:w-80 shrink-0 lg:sticky lg:top-20 space-y-5">
        
        <!-- Search & Filter Card -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-3">
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-xs text-gray-400"></i>
            <input type="text" id="lessonSearchInput" onkeyup="filterLessons()" placeholder="Tìm bài học, in độc bản, logo, di tích..." 
                   class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500">
          </div>

          <!-- Progress Bar -->
          <div>
            <div class="flex items-center justify-between text-xs font-bold mb-1.5">
              <span class="text-gray-500 dark:text-gray-400">Tiến độ hoàn thành:</span>
              <span id="progressText" class="text-rose-600 dark:text-rose-400 font-black">0 / 18</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progressBar" class="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Quick Filters: Branches -->
          <div class="pt-2 border-t border-gray-100 dark:border-gray-800">
            <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Phân loại mạch kiến thức:</span>
            <div class="grid grid-cols-2 gap-1.5 text-xs font-semibold">
              <button onclick="setBranchFilter('ALL')" id="filter-btn-ALL" class="filter-branch-btn active col-span-2 py-1.5 px-3 rounded-lg bg-rose-600 text-white transition text-center">Tất Cả (18 Mục)</button>
              <button onclick="setBranchFilter('taohinh')" id="filter-btn-taohinh" class="filter-branch-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">🎨 Tạo Hình (8)</button>
              <button onclick="setBranchFilter('ungdung')" id="filter-btn-ungdung" class="filter-branch-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">📐 Ứng Dụng (8)</button>
              <button onclick="setBranchFilter('trungbay')" id="filter-btn-trungbay" class="filter-branch-btn col-span-2 py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">🏛️ Trưng Bày &amp; Đánh Giá (2)</button>
            </div>
          </div>
        </div>

        <!-- Lessons Navigation List -->
        <div class="p-3 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm max-h-[500px] overflow-y-auto scrollbar-thin space-y-1">
          <div class="px-2 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-between">
            <span>Danh mục bài học</span>
            <span class="text-rose-600 dark:text-rose-400 font-black">18 Mục</span>
          </div>
          ${allLessons.map((l) => `
    <a href="#${l.id}" 
       class="nav-lesson-item flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group"
       data-branch="${l.branchTag}">
      <span class="flex items-center gap-2 truncate">
        <span class="w-6 h-6 rounded-lg ${l.branchColor} text-white text-[10px] font-black flex items-center justify-center shrink-0">${l.num}</span>
        <span class="truncate group-hover:text-rose-600 dark:group-hover:text-rose-400 transition">${l.title}</span>
      </span>
      <i class="fa-solid fa-angle-right text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition"></i>
    </a>
  `).join('')}
        </div>

        <!-- Trạng Nguyên CTA Box -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white shadow-lg space-y-2">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-black text-amber-300 text-base shadow-sm">
              <i class="fa-solid fa-trophy"></i>
            </span>
            <span class="text-xs font-black uppercase tracking-wider">Đấu Trường Trạng Nguyên</span>
          </div>
          <p class="text-xs text-white/90 leading-snug">
            40 câu hỏi trắc nghiệm toàn diện 8 chủ đề &bull; Thời gian 60:00 &bull; Nhận bảng vàng vinh danh Trạng Nguyên Mĩ Thuật 7!
          </p>
          <button onclick="openExamModal()" class="w-full py-2 rounded-xl bg-white text-rose-800 font-black text-xs hover:bg-amber-100 transition shadow-sm cursor-pointer mt-1">
            Vào Thi Ngay &rarr;
          </button>
        </div>

      </aside>

      <!-- ==================== MAIN LESSONS COLUMN ==================== -->
      <div class="flex-1 min-w-0 w-full space-y-6">
        ${allLessons.map((l, index) => renderLessonSection(l, index)).join('\n')}
      </div>

    </div>
  </main>

  <!-- ==================== MODALS ==================== -->
  
  <!-- 1. PHÒNG TRƯNG BÀY ẢO MODAL (14 TÁC PHẨM MINH HỌA RIÊNG BIỆT) -->
  <div id="galleryModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Modal Header -->
      <div class="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-pink-500/20">
            <i class="fa-solid fa-palette"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white">Phòng Trưng Bày Ảo (Art Gallery 7)</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Chiêm ngưỡng và phân tích 14 kiệt tác mĩ thuật thế giới và di sản Việt Nam</p>
          </div>
        </div>
        <button onclick="closeGalleryModal()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 transition cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Filter Categories -->
      <div class="px-6 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 flex flex-wrap gap-2 text-xs">
        <button onclick="filterGallery('ALL')" class="gallery-filter-btn active px-3 py-1.5 rounded-lg bg-rose-600 text-white font-bold transition">Tất cả (${tools.galleryArtworks.length})</button>
        <button onclick="filterGallery('thegioi')" class="gallery-filter-btn px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-300 transition">Thế giới (5)</button>
        <button onclick="filterGallery('vietnam')" class="gallery-filter-btn px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-300 transition">Việt Nam (9)</button>
      </div>

      <!-- Gallery Grid -->
      <div class="p-6 overflow-y-auto scrollbar-thin grid grid-cols-1 md:grid-cols-2 gap-5">
        ${tools.galleryArtworks.map((art, aIdx) => {
          const isVN = art.artist.includes('Việt') || art.artist.includes('Nguyễn') || art.artist.includes('Bùi') || art.artist.includes('Vũ') || art.artist.includes('Lê') || art.artist.includes('Trần') || art.artist.includes('Mạc');
          const origin = isVN ? 'vietnam' : 'thegioi';

          return `
          <div class="gallery-card p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 space-y-3 flex flex-col justify-between" data-origin="${origin}">
            <div class="space-y-3">
              <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                <span class="text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow ${origin === 'thegioi' ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'}">
                  ${origin === 'thegioi' ? 'Mĩ thuật Thế giới' : 'Mĩ thuật Việt Nam'}
                </span>
                <span class="text-xs text-rose-600 dark:text-rose-400 font-bold">${art.year}</span>
              </div>

              <div>
                <h4 class="text-sm font-black text-gray-900 dark:text-white">${art.title}</h4>
                <p class="text-xs text-rose-600 dark:text-rose-400 font-bold">${art.artist}</p>
                <span class="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold">${art.material}</span>
              </div>

              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-900/60 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                ${art.desc}
              </p>
            </div>

            <div class="text-[11px] text-gray-500 dark:text-gray-400 flex items-center justify-between pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
              <span class="text-rose-600 dark:text-rose-400 font-bold"><i class="fa-solid fa-paintbrush mr-1"></i> Bộ Kết nối tri thức</span>
              <span class="text-amber-500 font-bold"><i class="fa-solid fa-star"></i> Tác phẩm tiêu biểu</span>
            </div>
          </div>
        `}).join('')}
      </div>
    </div>
  </div>

  <!-- 2. SỔ TAY KĨ THUẬT & NGUYÊN LÍ MODAL -->
  <div id="techniquesModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Modal Header -->
      <div class="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-purple-500/20">
            <i class="fa-solid fa-shapes"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white">Sổ Tay Kĩ Thuật &amp; Nguyên Lí Mĩ Thuật 7</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">8 Nguyên lí tạo hình, 7 Kĩ thuật thực hành, Thuật ngữ &amp; Quy tắc an toàn</p>
          </div>
        </div>
        <button onclick="closeTechniquesModal()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 transition cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Tabs -->
      <div class="px-6 py-2.5 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex gap-2 text-xs">
        <button onclick="switchTechTab('principles')" id="tab-btn-principles" class="tech-tab-btn active px-3.5 py-1.5 rounded-lg bg-purple-600 text-white font-bold transition">8 Nguyên Lí Tạo Hình</button>
        <button onclick="switchTechTab('techniques')" id="tab-btn-techniques" class="tech-tab-btn px-3.5 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-300 transition">7 Kĩ Thuật Thực Hành</button>
        <button onclick="switchTechTab('glossary')" id="tab-btn-glossary" class="tech-tab-btn px-3.5 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-300 transition">Thuật Ngữ &amp; Kĩ Năng An Toàn</button>
      </div>

      <!-- Tab Content Area -->
      <div class="p-6 overflow-y-auto scrollbar-thin">
        
        <!-- Tab 1: Principles -->
        <div id="tech-content-principles" class="tech-tab-content space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            ${tools.principlesAndTechniques.principles.map((p) => `
              <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-black flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <h4 class="text-xs font-black text-gray-900 dark:text-white uppercase">${p.name}</h4>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab 2: Techniques -->
        <div id="tech-content-techniques" class="tech-tab-content hidden space-y-4">
          <div class="space-y-3.5">
            ${tools.principlesAndTechniques.techniques.map((t, idx) => `
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 space-y-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-xs sm:text-sm font-black text-gray-900 dark:text-white flex items-center gap-2">
                    <span class="w-5 h-5 rounded-md bg-rose-600 text-white text-[10px] font-black flex items-center justify-center">${idx + 1}</span>
                    ${t.name}
                  </h4>
                </div>
                <div class="space-y-1 text-xs text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/60 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                  <p class="font-bold text-rose-600 dark:text-rose-400">Quy trình thực hiện chuẩn:</p>
                  <p class="leading-relaxed">${t.steps}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab 3: Glossary & Safety -->
        <div id="tech-content-glossary" class="tech-tab-content hidden space-y-5">
          <div>
            <h4 class="text-xs font-black uppercase text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-book-bookmark"></i> Thuật Ngữ Mĩ Thuật 7 Cốt Lõi (SGK)
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${tools.glossary.map(item => `
                <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 space-y-1">
                  <h5 class="text-xs font-bold text-gray-900 dark:text-white">${item.term}</h5>
                  <p class="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="pt-3 border-t border-gray-200 dark:border-gray-800">
            <h4 class="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-shield-halved"></i> 8 Quy Tắc An Toàn &amp; Kĩ Năng Thực Hành
            </h4>
            <div class="space-y-2">
              ${safetyRules.map((rule, idx) => `
                <div class="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                  <span class="w-5 h-5 rounded-full bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                  <p class="leading-relaxed">${rule}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- 3. ĐẤU TRƯỜNG TRẠNG NGUYÊN (60:00) MODAL -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Exam Header -->
      <div class="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-rose-50 to-amber-50 dark:from-gray-900 dark:to-gray-850">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-rose-500/20">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white">Đấu Trường Trạng Nguyên Mĩ Thuật 7</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">40 câu hỏi trắc nghiệm toàn diện &bull; Thời gian 60:00</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <!-- Timer Display -->
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-600 text-white font-black text-sm shadow-sm" id="examTimerBadge">
            <i class="fa-solid fa-stopwatch"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 transition cursor-pointer">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div id="examQuestionsContainer" class="p-6 overflow-y-auto scrollbar-thin space-y-6">
        ${tools.examQuestions.map((q, idx) => `
          <div class="exam-question-card p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 space-y-3" id="exam-q-${idx}">
            <div class="flex items-start justify-between gap-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-relaxed">
                <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-black text-xs mr-1.5">Câu ${idx + 1}</span>
                ${q.q}
              </h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              ${q.options.map((opt, optIdx) => `
                <label class="exam-option-label p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-rose-400 flex items-center gap-2.5 cursor-pointer transition">
                  <input type="radio" name="exam_ans_${idx}" value="${optIdx}" class="text-rose-600 focus:ring-rose-500">
                  <span class="text-gray-800 dark:text-gray-200">${opt}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Exam Result / Certificate View (Hidden initially) -->
      <div id="examResultView" class="p-6 overflow-y-auto scrollbar-thin hidden space-y-6 text-center">
        <div class="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-purple-500/10 border-2 border-amber-400/40 space-y-4 max-w-lg mx-auto">
          <div class="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center text-3xl mx-auto shadow-lg shadow-amber-500/30">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">BẢNG VÀNG DANH DỰ</span>
            <h4 class="text-2xl font-black text-gray-900 dark:text-white mt-1" id="examRankTitle">Trạng Nguyên Mĩ Thuật 7</h4>
          </div>
          <div class="py-3 px-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 inline-block">
            <span class="text-3xl font-black text-rose-600 dark:text-rose-400" id="examScoreText">40 / 40</span>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Điểm trắc nghiệm chính xác</p>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto" id="examFeedbackText">
            Chúc mừng bạn đã hoàn thành xuất sắc thử thách Trạng Nguyên Mĩ Thuật Lớp 7! Nắm vững hoàn hảo 8 chủ đề kiến thức tạo hình và ứng dụng.
          </p>
          <div class="pt-2 flex justify-center gap-3">
            <button onclick="retakeExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 text-xs font-bold text-gray-800 dark:text-gray-200 transition cursor-pointer">
              <i class="fa-solid fa-rotate-right mr-1.5"></i> Làm Lại Đề Thi
            </button>
            <button onclick="closeExamModal()" class="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs font-bold text-white transition shadow-md shadow-rose-600/30 cursor-pointer">
              Đóng Cửa Sổ
            </button>
          </div>
        </div>
      </div>

      <!-- Exam Footer -->
      <div id="examFooter" class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-between">
        <span class="text-xs text-gray-500 dark:text-gray-400">Đã trả lời: <strong id="examAnsweredCount" class="text-rose-600 dark:text-rose-400">0</strong> / 40</span>
        <button onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white font-black text-xs shadow-md shadow-rose-500/20 transition cursor-pointer">
          Nộp Bài Thi &rarr;
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    // Branch Filtering
    function setBranchFilter(branchTag) {
      document.querySelectorAll('.filter-branch-btn').forEach(btn => btn.classList.remove('active', 'bg-rose-600', 'text-white'));
      const activeBtn = document.getElementById('filter-btn-' + branchTag);
      if (activeBtn) {
        activeBtn.classList.add('active', 'bg-rose-600', 'text-white');
      }

      const sections = document.querySelectorAll('.lesson-section');
      const navItems = document.querySelectorAll('.nav-lesson-item');

      sections.forEach(sec => {
        if (branchTag === 'ALL' || sec.getAttribute('data-branch') === branchTag) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });

      navItems.forEach(item => {
        if (branchTag === 'ALL' || item.getAttribute('data-branch') === branchTag) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Keyword Search
    function filterLessons() {
      const q = document.getElementById('lessonSearchInput').value.toLowerCase().trim();
      const sections = document.querySelectorAll('.lesson-section');
      const navItems = document.querySelectorAll('.nav-lesson-item');

      sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        if (text.includes(q)) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });

      navItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Checklist & Progress Tracking
    function onChecklistChange(lessonId) {
      const checkboxes = document.querySelectorAll('.checklist-' + lessonId);
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      localStorage.setItem('mt7_check_' + lessonId, JSON.stringify(Array.from(checkboxes).map(c => c.checked)));
      updateTotalProgress();
    }

    function updateTotalProgress() {
      const allLessonIds = ${JSON.stringify(allLessons.map(l => l.id))};
      let completedCount = 0;
      allLessonIds.forEach(id => {
        const saved = localStorage.getItem('mt7_check_' + id);
        if (saved) {
          try {
            const arr = JSON.parse(saved);
            if (arr.length > 0 && arr.every(Boolean)) completedCount++;
          } catch (e) {}
        }
      });
      document.getElementById('progressText').innerText = completedCount + ' / ' + allLessonIds.length;
      const pct = Math.round((completedCount / allLessonIds.length) * 100);
      document.getElementById('progressBar').style.width = pct + '%';
    }

    // Quick Lesson Quiz Checker
    function checkLessonQuiz(lessonId, qIdx, optIdx, correctIdx) {
      const container = document.getElementById('quiz-q-' + lessonId + '-' + qIdx);
      const buttons = container.querySelectorAll('.quiz-opt-btn');
      const feedback = container.querySelector('.quiz-feedback');

      buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('opacity-70', 'cursor-not-allowed');
      });

      if (optIdx === correctIdx) {
        buttons[optIdx].classList.remove('bg-white', 'dark:bg-gray-850', 'border-gray-200', 'dark:border-gray-700');
        buttons[optIdx].classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
        feedback.innerHTML = '<span class="text-emerald-600 dark:text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Chính xác!</span> Bạn đã nắm rất vững kiến thức này.';
      } else {
        buttons[optIdx].classList.remove('bg-white', 'dark:bg-gray-850', 'border-gray-200', 'dark:border-gray-700');
        buttons[optIdx].classList.add('bg-rose-500', 'text-white', 'border-rose-600');
        buttons[correctIdx].classList.remove('bg-white', 'dark:bg-gray-850', 'border-gray-200', 'dark:border-gray-700');
        buttons[correctIdx].classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
        feedback.innerHTML = '<span class="text-rose-600 dark:text-rose-400 font-bold"><i class="fa-solid fa-circle-xmark"></i> Chưa đúng!</span> Đáp án đúng đã được đánh dấu màu xanh.';
      }
      feedback.classList.remove('hidden');
    }

    // Modals Handling
    function openGalleryModal() {
      document.getElementById('galleryModal').classList.remove('hidden');
      document.getElementById('galleryModal').classList.add('flex');
    }
    function closeGalleryModal() {
      document.getElementById('galleryModal').classList.add('hidden');
      document.getElementById('galleryModal').classList.remove('flex');
    }
    function filterGallery(origin) {
      document.querySelectorAll('.gallery-filter-btn').forEach(btn => btn.classList.remove('active', 'bg-rose-600', 'text-white'));
      event.target.classList.add('active', 'bg-rose-600', 'text-white');
      document.querySelectorAll('.gallery-card').forEach(card => {
        if (origin === 'ALL' || card.getAttribute('data-origin') === origin) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function openTechniquesModal() {
      document.getElementById('techniquesModal').classList.remove('hidden');
      document.getElementById('techniquesModal').classList.add('flex');
    }
    function closeTechniquesModal() {
      document.getElementById('techniquesModal').classList.add('hidden');
      document.getElementById('techniquesModal').classList.remove('flex');
    }
    function switchTechTab(tabId) {
      document.querySelectorAll('.tech-tab-btn').forEach(b => {
        b.classList.remove('active', 'bg-purple-600', 'text-white');
        b.classList.add('bg-gray-200', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
      });
      const activeBtn = document.getElementById('tab-btn-' + tabId);
      activeBtn.classList.add('active', 'bg-purple-600', 'text-white');
      activeBtn.classList.remove('bg-gray-200', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');

      document.querySelectorAll('.tech-tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById('tech-content-' + tabId).classList.remove('hidden');
    }

    // Exam System 60:00
    let examTimerInterval = null;
    let examTimeRemaining = 3600; // 60 minutes
    const examQuestions = ${JSON.stringify(tools.examQuestions)};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      document.getElementById('examModal').classList.add('flex');
      if (!examTimerInterval) {
        startExamTimer();
      }
    }
    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
      document.getElementById('examModal').classList.remove('flex');
    }
    function startExamTimer() {
      examTimeRemaining = 3600;
      updateTimerDisplay();
      examTimerInterval = setInterval(() => {
        examTimeRemaining--;
        updateTimerDisplay();
        if (examTimeRemaining <= 0) {
          clearInterval(examTimerInterval);
          alert('Đã hết giờ thi! Hệ thống sẽ tự động chấm điểm bài làm của bạn.');
          submitExam();
        }
      }, 1000);
    }
    function updateTimerDisplay() {
      const mins = Math.floor(examTimeRemaining / 60);
      const secs = examTimeRemaining % 60;
      document.getElementById('examTimer').innerText = 
        (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    // Track answered questions
    document.addEventListener('change', (e) => {
      if (e.target && e.target.name && e.target.name.startsWith('exam_ans_')) {
        const answered = document.querySelectorAll('input[name^="exam_ans_"]:checked').length;
        document.getElementById('examAnsweredCount').innerText = answered;
      }
    });

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;
      examQuestions.forEach((q, idx) => {
        const checked = document.querySelector('input[name="exam_ans_' + idx + '"]:checked');
        if (checked && parseInt(checked.value) === q.answer) {
          score++;
        }
      });

      document.getElementById('examQuestionsContainer').classList.add('hidden');
      document.getElementById('examFooter').classList.add('hidden');
      document.getElementById('examResultView').classList.remove('hidden');
      document.getElementById('examScoreText').innerText = score + ' / ' + examQuestions.length;

      let rank = 'Học Sinh Đạt Chuẩn';
      let feedback = 'Bạn đã hoàn thành bài thi mĩ thuật và hiểu các khái niệm cơ bản!';
      if (score >= 38) {
        rank = 'Trạng Nguyên Mĩ Thuật 7';
        feedback = 'Tuyệt đỉnh! Bạn xuất sắc nắm vững toàn bộ 8 chủ đề, các nguyên lí tạo hình và di sản mĩ thuật Việt Nam!';
      } else if (score >= 32) {
        rank = 'Bảng Nhãn Mĩ Thuật 7';
        feedback = 'Rất tốt! Khả năng quan sát, tư duy thị giác và ứng dụng của bạn đạt trình độ xuất sắc!';
      } else if (score >= 26) {
        rank = 'Thám Hoa Mĩ Thuật 7';
        feedback = 'Khá tốt! Bạn đã nắm chắc phần lớn các quy trình thực hành mĩ thuật.';
      }
      document.getElementById('examRankTitle').innerText = rank;
      document.getElementById('examFeedbackText').innerText = feedback;
    }

    function retakeExam() {
      document.querySelectorAll('input[name^="exam_ans_"]').forEach(inp => inp.checked = false);
      document.getElementById('examAnsweredCount').innerText = '0';
      document.getElementById('examQuestionsContainer').classList.remove('hidden');
      document.getElementById('examFooter').classList.remove('hidden');
      document.getElementById('examResultView').classList.add('hidden');
      startExamTimer();
    }

    // Init state on load
    window.addEventListener('DOMContentLoaded', () => {
      // Restore checklists
      ${JSON.stringify(allLessons.map(l => l.id))}.forEach(id => {
        const saved = localStorage.getItem('mt7_check_' + id);
        if (saved) {
          try {
            const arr = JSON.parse(saved);
            const cbs = document.querySelectorAll('.checklist-' + id);
            arr.forEach((val, i) => {
              if (cbs[i]) cbs[i].checked = val;
            });
          } catch(e) {}
        }
      });
      updateTotalProgress();
    });
  </script>
</body>
</html>`;
  return html;
}

// Render individual lesson section
function renderLessonSection(l, index) {
  const prevLesson = index > 0 ? allLessons[index - 1] : null;
  const nextLesson = index < allLessons.length - 1 ? allLessons[index + 1] : null;

  const mindmapNodes = typeof l.mindmap === 'string' ? l.mindmap.split('→').map(s => s.trim()).filter(Boolean) : [];
  const ill = lessonIllustrations[l.id];

  return `
      <!-- ==================== ${l.title} ==================== -->
      <section id="${l.id}" class="lesson-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md mb-8" data-branch="${l.branchTag}">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg ${l.branchColor} text-white font-black text-xs uppercase tracking-wider">${l.branch}</span>
            <span class="px-2.5 py-1 rounded-lg bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 font-semibold text-xs border border-pink-200 dark:border-pink-800">
              ${l.chapter}
            </span>
          </div>
          <span class="text-xs font-bold text-gray-400">${l.pages}</span>
        </div>

        <div class="mb-3">
          <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-paintbrush text-rose-600 dark:text-rose-400"></i> ${l.title}
          </h3>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed"><strong>Mục tiêu:</strong> ${l.objective}</p>
        </div>

        <!-- Khung Trưng Bày Tác Phẩm / Di Sản Mĩ Thuật Trọng Tâm (Mô tả bằng lời theo chuẩn SGK) -->
        ${ill ? `
        <div class="my-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 border border-rose-500/30 text-white space-y-4 shadow-md">
          <div class="flex items-center justify-between pb-2 border-b border-rose-500/20">
            <span class="text-xs font-black uppercase text-rose-400 flex items-center gap-1.5 tracking-wider">
              <i class="fa-solid fa-palette"></i> ${ill.badge}
            </span>
            <span class="text-[10px] text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              <i class="fa-solid fa-certificate mr-1"></i> Tác phẩm &amp; Di sản trọng tâm
            </span>
          </div>

          <!-- Chú giải & Phân tích thị giác chi tiết -->
          <div class="space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
              <h4 class="text-base sm:text-lg font-black text-white leading-snug">${ill.title}</h4>
              <div class="flex flex-wrap items-center gap-3 text-xs">
                <span class="text-rose-300 font-medium">
                  <i class="fa-solid fa-paint-roller mr-1 text-[10px]"></i> <strong>Chất liệu:</strong> ${ill.medium}
                </span>
                <span class="text-gray-300">
                  <i class="fa-solid fa-user-pen mr-1 text-[10px]"></i> <strong>Tác giả / Nghệ nhân:</strong> ${ill.artist}
                </span>
              </div>
            </div>

            <div class="space-y-1.5 text-xs text-gray-200 bg-white/5 p-4 rounded-xl border border-white/10 leading-relaxed">
              <p class="text-[11px] font-black uppercase text-amber-300 tracking-wider mb-1.5 flex items-center gap-1">
                <i class="fa-solid fa-magnifying-glass-chart"></i> Phân tích ngôn ngữ tạo hình &amp; thông điệp:
              </p>
              <ul class="list-disc pl-5 space-y-1">
                ${ill.analysis.map(a => `<li>${a}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- Sơ đồ tư duy trực quan Mindmap -->
        <div class="my-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 space-y-2">
          <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-sitemap text-rose-500"></i> Sơ Đồ Khái Niệm Trọng Tâm
          </div>
          <div class="flex flex-wrap items-center gap-2 pt-1">
            ${mindmapNodes.map((node, nIdx, arr) => `
              <div class="flex items-center gap-2">
                <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-sm">
                  ${node}
                </span>
                ${nIdx < arr.length - 1 ? '<i class="fa-solid fa-arrow-right text-[10px] text-rose-500 shrink-0"></i>' : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Nội dung kiến thức chi tiết -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-book-open-reader text-rose-600"></i> Nội Dung Kiến Thức Trọng Tâm
          </h4>
          ${l.sections.map(sec => `
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/80 space-y-2">
              <h5 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                ${sec.title}
              </h5>
              <div class="space-y-1.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                ${sec.content}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Checklist tự đánh giá năng lực -->
        <div class="my-5 p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-2.5">
          <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-list-check"></i> Checklist Tự Đánh Giá Năng Lực (Đạt / Chưa Đạt)
            </h4>
            <span class="text-[10px] text-gray-400">Lưu tự động vào trình duyệt</span>
          </div>
          <div class="space-y-2 text-xs">
            ${l.checklist.map((item, chkIdx) => `
              <label class="flex items-start gap-2.5 text-gray-700 dark:text-gray-300 cursor-pointer">
                <input type="checkbox" onchange="onChecklistChange('${l.id}')" class="checklist-${l.id} mt-0.5 rounded text-rose-600 focus:ring-rose-500">
                <span class="leading-relaxed">${item}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- Trắc nghiệm củng cố bài học -->
        <div class="my-5 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question text-rose-600"></i> Bài Tập Củng Cố Nhanh (${l.quiz.length} Câu)
            </h4>
            <span class="text-[10px] text-gray-400 font-medium">Chấm điểm &amp; giải thích tức thì</span>
          </div>
          <div class="space-y-3">
            ${l.quiz.map((q, qIdx) => `
              <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 space-y-2" id="quiz-q-${l.id}-${qIdx}">
                <p class="text-xs font-bold text-gray-900 dark:text-white">
                  <span class="text-rose-600 dark:text-rose-400 mr-1">Q${qIdx + 1}.</span> ${q.question}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  ${q.options.map((opt, optIdx) => `
                    <button onclick="checkLessonQuiz('${l.id}', ${qIdx}, ${optIdx}, ${q.answer})"
                            class="quiz-opt-btn text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-rose-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2 cursor-pointer">
                      <span class="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 text-[10px] flex items-center justify-center shrink-0 font-bold">${String.fromCharCode(65 + optIdx)}</span>
                      <span>${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="quiz-feedback hidden text-[11px] p-2 rounded-lg bg-gray-100 dark:bg-gray-900 leading-snug"></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Pagination (Prev / Next Lesson) -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2 text-xs">
          ${prevLesson ? `
            <a href="#${prevLesson.id}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold transition">
              &larr; ${prevLesson.num}: ${prevLesson.title.split('.')[1] || prevLesson.title}
            </a>
          ` : `<span></span>`}
          ${nextLesson ? `
            <a href="#${nextLesson.id}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800 transition">
              ${nextLesson.num}: ${nextLesson.title.split('.')[1] || nextLesson.title} &rarr;
            </a>
          ` : `<span></span>`}
        </div>

      </section>
  `;
}

// Write files
const outputHtml = buildPage();
const target1 = path.join(__dirname, '../courses/mithuat_7.html');
const target2 = path.join(__dirname, '../courses/art_7.html');

fs.writeFileSync(target1, outputHtml, 'utf8');
fs.writeFileSync(target2, outputHtml, 'utf8');

console.log('Successfully wrote courses/mithuat_7.html, size:', outputHtml.length);
console.log('Successfully wrote courses/art_7.html, size:', outputHtml.length);
