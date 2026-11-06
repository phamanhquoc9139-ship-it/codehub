const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn_6_full_data.json', 'utf8'));
const parts = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/partial_components.json', 'utf8'));

// Format Trang Nguyen questions for JS injection safely
const tqJson = JSON.stringify(data.trangNguyenQuestions);

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khoa Học Tự Nhiên Lớp 6 | CodeHub - Nền Tảng Học Tập Trực Tuyến</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              300: '#6ee7b7',
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
              950: '#022c22'
            },
            gray: {
              850: '#1f2937',
              900: '#111827'
            }
          }
        }
      }
    };
  </script>
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Canvas Confetti -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <!-- Dark Mode Init -->
  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
  
  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    .dark ::-webkit-scrollbar-thumb {
      background: #475569;
    }
    .dark ::-webkit-scrollbar-thumb:hover {
      background: #64748b;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-850/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Logo & Course Name -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition">
            <i class="fa-solid fa-atom"></i>
          </div>
          <div>
            <span class="text-xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent block leading-tight">CodeHub</span>
            <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase block">Khoa Học Tự Nhiên 6</span>
          </div>
        </a>
      </div>

      <!-- Search Input -->
      <div class="flex-1 max-w-md hidden md:block relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
        <input type="text" 
               id="lessonSearch" 
               oninput="filterLessons()" 
               placeholder="Tìm bài học (tế bào, lực, năng lượng, Mặt Trăng, kính hiển vi...)" 
               class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition">
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Virtual Microscope Button -->
        <button type="button" 
                onclick="openMicroscopeModal()" 
                class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition shadow-sm">
          <i class="fa-solid fa-microscope text-emerald-500"></i> Kính Hiển Vi Ảo
        </button>

        <!-- Planets & Gravity Button -->
        <button type="button" 
                onclick="openPlanetsModal()" 
                class="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition shadow-sm">
          <i class="fa-solid fa-globe text-indigo-500"></i> 8 Hành Tinh &amp; Trọng Lực
        </button>

        <!-- Spring Simulator Button -->
        <button type="button" 
                onclick="openSpringModal()" 
                class="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 transition shadow-sm">
          <i class="fa-solid fa-weight-hanging text-teal-500"></i> Lò Xo &amp; Đo Lực
        </button>

        <!-- Trang Nguyen Exam Button -->
        <button type="button" 
                onclick="openTrangNguyenModal()" 
                class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition">
          <i class="fa-solid fa-award"></i> Trạng Nguyên (60:00)
        </button>

        <!-- Dark/Light Mode Button -->
        <button type="button" 
                onclick="toggleDarkMode()" 
                title="Chuyển chế độ Sáng / Tối"
                class="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition shadow-sm">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Search Bar -->
  <div class="md:hidden px-4 py-2.5 bg-white dark:bg-gray-850 border-b border-gray-200 dark:border-gray-700">
    <div class="relative">
      <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
      <input type="text" 
             id="lessonSearchMobile" 
             oninput="filterLessonsMobile()" 
             placeholder="Tìm bài học KHTN 6..." 
             class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500">
    </div>
  </div>

  <!-- Page Layout: Sidebar & Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8">
    
    <!-- Left Sidebar (TOC) -->
    <aside class="w-80 flex-shrink-0 hidden lg:block">
      <div class="sticky top-24 bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm max-h-[calc(100vh-8rem)] flex flex-col">
        
        <div class="flex items-center justify-between pb-3 mb-2 border-b border-gray-100 dark:border-gray-700">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-list-check"></i>
            </span>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Mục Lục 55 Bài Học</h3>
          </div>
          <span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold px-2 py-0.5 rounded-full">10 Chương</span>
        </div>

        <!-- Quick Section Links -->
        <div class="py-2 grid grid-cols-2 gap-1.5 border-b border-gray-100 dark:border-gray-700 text-xs">
          <a href="#figures-gallery" class="px-2 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-gray-700 dark:text-gray-300 font-medium flex items-center gap-1.5 transition">
            <i class="fa-solid fa-images text-emerald-500"></i> 11 Sơ đồ SGK
          </a>
          <a href="#formulas-table" class="px-2 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-gray-700 dark:text-gray-300 font-medium flex items-center gap-1.5 transition">
            <i class="fa-solid fa-square-root-variable text-blue-500"></i> Bảng công thức
          </a>
          <a href="#concepts-table" class="px-2 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-gray-700 dark:text-gray-300 font-medium flex items-center gap-1.5 transition">
            <i class="fa-solid fa-arrows-split-up-and-left text-indigo-500"></i> Phân biệt dễ nhầm
          </a>
          <a href="#planets-table" class="px-2 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-gray-700 dark:text-gray-300 font-medium flex items-center gap-1.5 transition">
            <i class="fa-solid fa-ring text-purple-500"></i> 8 Hành tinh
          </a>
        </div>

        <!-- Scrollable Lesson List -->
        <div class="overflow-y-auto flex-1 pr-1 space-y-0.5 mt-2" id="sidebar-lessons-list">
          ${parts.sidebarHtml}
        </div>

        <!-- Sidebar Footer Tools -->
        <div class="pt-4 mt-3 border-t border-gray-100 dark:border-gray-700 space-y-2">
          <button type="button" onclick="openMicroscopeModal()" class="w-full py-2 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between transition">
            <span class="flex items-center gap-2"><i class="fa-solid fa-microscope text-emerald-500"></i> Kính hiển vi quang học ảo</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </button>
          <button type="button" onclick="openTrangNguyenModal()" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 text-white text-xs font-bold flex items-center justify-between transition shadow-sm">
            <span class="flex items-center gap-2"><i class="fa-solid fa-trophy"></i> Thi Trạng Nguyên KHTN (60:00)</span>
            <i class="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>

      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 min-w-0">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-6">
        <a href="../index.html" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Trang chủ</a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span>Lớp 6</span>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Khoa Học Tự Nhiên 6</span>
      </nav>

      <!-- Course Hero Banner -->
      <section class="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-10 relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-flask-vial"></i> GDPT 2018 &bull; Kết nối tri thức với cuộc sống
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Khoa Học Tự Nhiên Lớp 6
          </h1>
          <p class="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
            Hệ thống toàn diện 10 chương, 55 bài học chuẩn SGK: từ tế bào, thế giới sống đến cấu trúc chất, chuyển động, lực, năng lượng và thiên văn học Trái Đất &amp; Bầu trời. Tích hợp phòng thí nghiệm quang học ảo, mô phỏng hệ mặt trời và ngân hàng đề thi Trạng Nguyên 60:00.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/20 text-center">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <span class="block text-2xl font-black">10</span>
              <span class="text-xs text-emerald-100 font-medium">Chương kiến thức</span>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <span class="block text-2xl font-black">55</span>
              <span class="text-xs text-emerald-100 font-medium">Bài học cốt lõi</span>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <span class="block text-2xl font-black">11</span>
              <span class="text-xs text-emerald-100 font-medium">Sơ đồ SGK gốc</span>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <span class="block text-2xl font-black">30</span>
              <span class="text-xs text-emerald-100 font-medium">Đề Trạng Nguyên</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Lessons Container -->
      <section id="lessons-container">
        ${parts.lessonsHtml}
      </section>

      <!-- Sơ Đồ & Hình Ảnh Trọng Tâm Gallery -->
      <section id="figures-gallery" class="my-16 scroll-mt-24">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Hình ảnh SGK</span>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-images text-emerald-500"></i>
              Thư Viện 11 Sơ Đồ &amp; Hình Ảnh Trọng Tâm
            </h2>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
            Trích từ SGK Kết Nối Tri Thức
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${parts.galleryHtml}
        </div>
      </section>

      <!-- Bảng Công Thức và Quy Đổi Đơn Vị (Table 2) -->
      <section id="formulas-table" class="my-16 scroll-mt-24">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Công cụ tính toán</span>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-square-root-variable text-blue-500"></i>
              Bảng Công Thức và Quy Đổi Đơn Vị KHTN 6
            </h2>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200 dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th class="py-3 px-4">Nội dung</th>
                <th class="py-3 px-4">Công thức hoặc quy đổi</th>
                <th class="py-3 px-4">Điều kiện và lưu ý</th>
              </tr>
            </thead>
            <tbody>
              ${parts.formulasRows}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Phân Biệt Các Khái Niệm Dễ Nhầm (Table 3) -->
      <section id="concepts-table" class="my-16 scroll-mt-24">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Tránh bẫy đề thi</span>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-arrows-split-up-and-left text-indigo-500"></i>
              Bảng Phân Biệt Các Khái Niệm Dễ Nhầm Lẫn
            </h2>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200 dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th class="py-3 px-4">Cặp khái niệm</th>
                <th class="py-3 px-4">Điểm phân biệt cốt lõi</th>
              </tr>
            </thead>
            <tbody>
              ${parts.conceptsRows}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Bảng Tra Cứu Các Hành Tinh (Table 4) & Máy Tính Trọng Lực -->
      <section id="planets-table" class="my-16 scroll-mt-24">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Thiên văn học</span>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-ring text-purple-500"></i>
              Bảng Tra Cứu Số Liệu 8 Hành Tinh Hệ Mặt Trời
            </h2>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 overflow-x-auto mb-6">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200 dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th class="py-3 px-4">Hành tinh</th>
                <th class="py-3 px-4">Khoảng cách AU</th>
                <th class="py-3 px-4">Tự quay quanh trục (ngày)</th>
                <th class="py-3 px-4">Quay quanh Mặt Trời (ngày)</th>
              </tr>
            </thead>
            <tbody>
              ${parts.planetsRows}
            </tbody>
          </table>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
            * Số liệu gần đúng theo SGK KHTN 6 trang 188–189. 1 AU ≈ 150 triệu km.
          </p>
        </div>
      </section>

      <!-- Mẫu Báo Cáo Thực Hành & Tiêu Chí Tự Kiểm Tra -->
      <section id="report-template" class="my-16 scroll-mt-24">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Thực hành thí nghiệm</span>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-clipboard-check text-emerald-500"></i>
              Mẫu Báo Cáo Thực Hành &amp; Tiêu Chí Tự Kiểm Tra
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Mẫu Báo Cáo -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
            <h3 class="font-bold text-gray-900 dark:text-white text-base mb-4 flex items-center gap-2">
              <i class="fa-solid fa-file-pen text-emerald-500"></i> Khung Báo Cáo Thực Hành SGK
            </h3>
            <div class="space-y-3 text-xs text-gray-700 dark:text-gray-300">
              <div class="p-3 bg-gray-50 dark:bg-gray-850 rounded-xl">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">1. Tên bài và mục tiêu cần kiểm tra:</span>
                <span class="text-gray-500 dark:text-gray-400">Ghi rõ mục đích thí nghiệm, câu hỏi khoa học cần trả lời.</span>
              </div>
              <div class="p-3 bg-gray-50 dark:bg-gray-850 rounded-xl">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">2. Dự đoán và căn cứ dự đoán:</span>
                <span class="text-gray-500 dark:text-gray-400">Dự đoán kết quả dựa trên kiến thức lí thuyết đã học.</span>
              </div>
              <div class="p-3 bg-gray-50 dark:bg-gray-850 rounded-xl">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">3. Dụng cụ, mẫu vật, GHĐ &amp; ĐCNN:</span>
                <span class="text-gray-500 dark:text-gray-400">Liệt kê đầy đủ thông số thiết bị đo và mẫu vật thử nghiệm.</span>
              </div>
              <div class="p-3 bg-gray-50 dark:bg-gray-850 rounded-xl">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">4. Các bước tiến hành &amp; yếu tố giữ không đổi:</span>
                <span class="text-gray-500 dark:text-gray-400">Xác định biến số thay đổi và các biến số cần cố định khi so sánh.</span>
              </div>
              <div class="p-3 bg-gray-50 dark:bg-gray-850 rounded-xl">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">5. Kết quả thực tế &amp; Nhận xét kết luận:</span>
                <span class="text-gray-500 dark:text-gray-400">Bảng số liệu, hình vẽ có chú thích; đối chiếu với dự đoán ban đầu.</span>
              </div>
              <div class="p-3 bg-gray-50 dark:bg-gray-850 rounded-xl">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">6. Phân tích sai lệch &amp; An toàn:</span>
                <span class="text-gray-500 dark:text-gray-400">Chỉ ra nguyên nhân sai số, đề xuất cải tiến và quy tắc an toàn.</span>
              </div>
            </div>
          </div>

          <!-- Bộ Tiêu Chí Tự Đánh Giá -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white text-base mb-4 flex items-center gap-2">
                <i class="fa-solid fa-check-double text-teal-500"></i> Bộ Câu Hỏi Tự Kiểm Tra Sau Mỗi Bài
              </h3>
              <p class="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Để chắc chắn đã nắm vững kiến thức trọng tâm của mỗi bài học, hãy tự trả lời 7 câu hỏi then chốt sau:
              </p>
              <ul class="space-y-2.5 text-xs text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                  <span>1. Em có thể nêu khái niệm trọng tâm bằng lời của chính mình mà không cần nhìn sách?</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                  <span>2. Em có thể lấy được ít nhất 1 ví dụ và 1 phản ví dụ minh hoạ rõ ràng?</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                  <span>3. Em có thể đọc và giải thích được sơ đồ / hình vẽ trong bài học?</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                  <span>4. Em có thể nêu đúng trình tự các bước làm thí nghiệm và kết luận rút ra?</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                  <span>5. Em có dùng đúng công thức tính toán và đơn vị đo tương ứng?</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                  <span>6. Em có thể giải thích được 1 ứng dụng thực tế của kiến thức bài học trong đời sống?</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
                  <span>7. Em có chỉ ra được quy tắc an toàn và cách phòng ngừa rủi ro liên quan?</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
              <button type="button" onclick="openTrangNguyenModal()" class="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2">
                <i class="fa-solid fa-trophy"></i> Tự kiểm tra với Hội thi Trạng Nguyên 60:00
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>

  <!-- Footer -->
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-850 py-8 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500 dark:text-gray-400 space-y-2">
      <p class="font-semibold text-gray-700 dark:text-gray-300">
        Khóa học Khoa Học Tự Nhiên Lớp 6 &bull; Bộ sách Kết nối tri thức với cuộc sống
      </p>
      <p>
        Nền tảng CodeHub &copy; 2026. Tích hợp đầy đủ 10 chương, 55 bài học, thí nghiệm ảo và phòng luyện thi Trạng Nguyên.
      </p>
    </div>
  </footer>

  <!-- ==================== MODAL 1: KÍNH HIỂN VI QUANG HỌC ẢO ==================== -->
  <div id="microscope-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-3xl w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
      
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700">
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-microscope"></i>
          </span>
          <div>
            <h3 class="font-extrabold text-gray-900 dark:text-white text-lg">Mô Phỏng Kính Hiển Vi Quang Học Ảo</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Thực hành quan sát tế bào chuẩn SGK Bài 4 &amp; Bài 21</p>
          </div>
        </div>
        <button type="button" onclick="closeMicroscopeModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        
        <!-- Thị Kính Tròn Mô Phỏng -->
        <div class="flex flex-col items-center">
          <div class="relative w-64 h-64 rounded-full border-8 border-gray-800 dark:border-gray-700 bg-black overflow-hidden shadow-inner flex items-center justify-center">
            
            <!-- Ánh sáng trường kính -->
            <div id="microscope-light" class="absolute inset-0 bg-amber-100/90 dark:bg-amber-100/90 transition duration-300"></div>
            
            <!-- Mẫu vật đang soi -->
            <div id="sample-view" class="relative z-10 transition duration-300 text-center select-none" style="filter: blur(10px); transform: scale(1);">
              <div id="sample-graphic" class="text-gray-800 font-mono text-xs">
                <!-- Graphic inserted via JS -->
              </div>
            </div>

            <!-- Thước vạch tâm thị kính -->
            <div class="absolute inset-0 pointer-events-none border border-emerald-500/20 rounded-full flex items-center justify-center">
              <div class="w-full h-[1px] bg-emerald-500/20"></div>
              <div class="h-full w-[1px] bg-emerald-500/20 absolute"></div>
            </div>

          </div>

          <div class="mt-3 text-center">
            <span class="text-xs font-bold text-gray-700 dark:text-gray-300" id="total-magnification-label">
              Độ phóng đại: Thị kính 10x × Vật kính 10x = 100 lần
            </span>
          </div>
        </div>

        <!-- Bảng Điều Khiển -->
        <div class="space-y-4 text-xs">
          
          <!-- Chọn mẫu vật -->
          <div>
            <label class="font-bold text-gray-900 dark:text-white block mb-1.5">1. Chọn mẫu tiêu bản:</label>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" onclick="selectSample('onion')" id="btn-sample-onion" class="sample-btn px-2.5 py-1.5 rounded-lg border border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 font-semibold text-emerald-700 dark:text-emerald-300 text-left">
                Tế bào hành tây
              </button>
              <button type="button" onclick="selectSample('fish')" id="btn-sample-fish" class="sample-btn px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-left">
                Trứng cá
              </button>
              <button type="button" onclick="selectSample('euglena')" id="btn-sample-euglena" class="sample-btn px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-left">
                Trùng roi xanh
              </button>
              <button type="button" onclick="selectSample('bacteria')" id="btn-sample-bacteria" class="sample-btn px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-left">
                Vi khuẩn sữa chua
              </button>
            </div>
          </div>

          <!-- Chọn vật kính -->
          <div>
            <label class="font-bold text-gray-900 dark:text-white block mb-1.5">2. Chọn vật kính (Ống quay):</label>
            <div class="flex gap-2">
              <button type="button" onclick="selectObjective(10)" id="btn-obj-10" class="obj-btn flex-1 py-1.5 rounded-lg border border-emerald-500 bg-emerald-50 dark:bg-emerald-950 font-bold text-emerald-700">10x (Thấp)</button>
              <button type="button" onclick="selectObjective(40)" id="btn-obj-40" class="obj-btn flex-1 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 font-bold">40x (Vừa)</button>
              <button type="button" onclick="selectObjective(100)" id="btn-obj-100" class="obj-btn flex-1 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 font-bold">100x (Cao)</button>
            </div>
          </div>

          <!-- Lấy nét (Ốc to / Ốc nhỏ) -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="font-bold text-gray-900 dark:text-white">3. Lấy nét (Ốc to / Ốc nhỏ):</label>
              <span id="focus-label" class="text-emerald-600 dark:text-emerald-400 font-bold">Chưa lấy nét</span>
            </div>
            <input type="range" id="focusSlider" min="0" max="100" value="20" oninput="updateFocus(this.value)" class="w-full accent-emerald-500 cursor-pointer">
            <span class="text-[10px] text-gray-500">Kéo thanh trượt đến khoảng 80% để ảnh đạt độ sắc nét tối ưu.</span>
          </div>

          <!-- Nguồn sáng -->
          <div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
            <label class="font-bold text-gray-900 dark:text-white">Bật đèn chiếu sáng:</label>
            <button type="button" onclick="toggleScopeLight()" id="btn-scope-light" class="px-3 py-1 rounded-lg bg-emerald-500 text-white font-bold">Bật</button>
          </div>

        </div>
      </div>

      <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">
        <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i>
        <strong>Quy tắc quan sát SGK:</strong> Bắt đầu với vật kính phóng đại thấp (10x), chỉnh ốc to đưa vật kính lên từ từ đến khi thấy mẫu, sau đó chỉnh ốc nhỏ để ảnh sắc nét. Không để đầu vật kính va chạm vào tiêu bản!
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: HỆ MẶT TRỜI & MÁY TÍNH TRỌNG LỰC ==================== -->
  <div id="planets-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-3xl w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
      
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700">
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-globe"></i>
          </span>
          <div>
            <h3 class="font-extrabold text-gray-900 dark:text-white text-lg">Khám Phá 8 Hành Tinh &amp; Trọng Lực Vũ Trụ</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Bài 43 (Trọng Lực) &amp; Bài 54 (Hệ Mặt Trời)</p>
          </div>
        </div>
        <button type="button" onclick="closePlanetsModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Trọng Lực Calculator -->
      <div class="my-5 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
        <label class="block text-xs font-bold text-purple-900 dark:text-purple-200 mb-2">
          Nhập khối lượng của em trên Trái Đất (kg):
        </label>
        <div class="flex gap-3 items-center">
          <input type="number" id="userMassInput" value="45" min="1" max="200" oninput="calculatePlanetaryWeights()" class="w-32 px-3 py-2 rounded-xl text-sm font-bold border border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <span class="text-xs font-semibold text-purple-700 dark:text-purple-300">kg</span>
          <button type="button" onclick="calculatePlanetaryWeights()" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs transition">
            Tính trọng lượng
          </button>
        </div>
      </div>

      <!-- Danh Sách 8 Hành Tinh & Mặt Trăng -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs" id="planets-weight-cards">
        <!-- Injected via JS -->
      </div>

      <div class="mt-6 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
        <strong>Ghi nhớ cốt lõi SGK:</strong> Khối lượng $m$ (kg) đo lượng chất của vật không đổi khi đi khắp vũ trụ. Tuy nhiên, trọng lượng $P$ (N) là độ lớn lực hút của thiên thể sẽ thay đổi tuỳ theo thiên thể em đang đứng!
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: MÔ PHỎNG LÒ XO & LỰC KẾ ==================== -->
  <div id="spring-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
      
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700">
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-weight-hanging"></i>
          </span>
          <div>
            <h3 class="font-extrabold text-gray-900 dark:text-white text-lg">Mô Phỏng Độ Dãn Lò Xo &amp; Lực Kế</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Thực hành định luật đàn hồi SGK Bài 41 &amp; Bài 42</p>
          </div>
        </div>
        <button type="button" onclick="closeSpringModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 items-center">
        <!-- Visual Lò Xo -->
        <div class="flex justify-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 relative">
          <!-- Giá treo -->
          <div class="w-24 h-2 bg-gray-600 rounded-full absolute top-6"></div>
          
          <div class="pt-8 flex flex-col items-center">
            <!-- Lò xo vẽ bằng SVG -->
            <svg id="spring-svg" width="40" height="100" class="transition-all duration-300">
              <path d="M 20 0 L 20 10 L 30 15 L 10 25 L 30 35 L 10 45 L 30 55 L 10 65 L 30 75 L 10 85 L 20 90 L 20 100" fill="none" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
            </svg>
            
            <!-- Quả nặng -->
            <div id="spring-weight" class="w-16 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-md transition-all duration-300 mt-1">
              0 g
            </div>
          </div>

          <!-- Thước đo bên cạnh -->
          <div class="absolute right-6 top-8 bottom-8 w-8 border-l border-gray-400 flex flex-col justify-between text-[10px] text-gray-400 pl-1 font-mono">
            <span>0 cm</span>
            <span>5 cm</span>
            <span>10 cm</span>
            <span>15 cm</span>
            <span>20 cm</span>
          </div>
        </div>

        <!-- Điều Khiển Quả Nặng -->
        <div class="space-y-4 text-xs">
          <div>
            <label class="font-bold text-gray-900 dark:text-white block mb-2">Chọn quả cân treo vào lò xo:</label>
            <div class="grid grid-cols-3 gap-2">
              <button type="button" onclick="setSpringMass(0)" class="mass-btn py-2 rounded-xl border border-gray-200 dark:border-gray-700 font-bold hover:bg-teal-50">0 g</button>
              <button type="button" onclick="setSpringMass(50)" class="mass-btn py-2 rounded-xl border border-gray-200 dark:border-gray-700 font-bold hover:bg-teal-50">50 g</button>
              <button type="button" onclick="setSpringMass(100)" class="mass-btn py-2 rounded-xl border border-gray-200 dark:border-gray-700 font-bold hover:bg-teal-50">100 g</button>
              <button type="button" onclick="setSpringMass(200)" class="mass-btn py-2 rounded-xl border border-gray-200 dark:border-gray-700 font-bold hover:bg-teal-50">200 g</button>
              <button type="button" onclick="setSpringMass(300)" class="mass-btn py-2 rounded-xl border border-gray-200 dark:border-gray-700 font-bold hover:bg-teal-50">300 g</button>
              <button type="button" onclick="setSpringMass(500)" class="mass-btn py-2 rounded-xl border border-rose-300 text-rose-600 font-bold hover:bg-rose-50">500 g (!)</button>
            </div>
          </div>

          <!-- Thông Số Kết Quả -->
          <div class="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-300">Chiều dài tự nhiên $l_0$:</span>
              <span class="font-bold font-mono">10.0 cm</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-300">Chiều dài lúc treo $l$:</span>
              <span class="font-bold font-mono" id="spring-len-val">10.0 cm</span>
            </div>
            <div class="flex justify-between border-t border-teal-200 dark:border-teal-800 pt-1.5">
              <span class="font-bold text-teal-800 dark:text-teal-200">Độ dãn $\\Delta l = l - l_0$:</span>
              <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono" id="spring-delta-val">0.0 cm</span>
            </div>
            <div class="flex justify-between border-t border-teal-200 dark:border-teal-800 pt-1.5">
              <span class="font-bold text-teal-800 dark:text-teal-200">Lực kéo $P \\approx 10m$:</span>
              <span class="font-bold text-teal-700 dark:text-teal-300 font-mono" id="spring-force-val">0.0 N</span>
            </div>
          </div>

          <div id="spring-warning" class="hidden p-2 rounded-lg bg-rose-100 text-rose-700 text-[11px] font-semibold">
            <i class="fa-solid fa-triangle-exclamation mr-1"></i> Cảnh báo: Vượt quá giới hạn đàn hồi! Lò xo có thể bị biến dạng vĩnh viễn.
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 4: HỘI THI TRẠNG NGUYÊN (60:00) ==================== -->
  <div id="trangnguyen-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
    <div class="bg-white dark:bg-gray-850 rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[92vh] flex flex-col">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-gray-900 dark:text-white text-lg">Đấu Trường Trạng Nguyên KHTN 6</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Bộ đề chuẩn 30 câu hỏi bao quát 10 chương &bull; Thời gian: 60:00</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <!-- Countdown Timer -->
          <div class="px-3.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 font-mono font-bold text-sm flex items-center gap-2">
            <i class="fa-solid fa-stopwatch animate-pulse"></i>
            <span id="exam-timer">60:00</span>
          </div>
          <button type="button" onclick="closeTrangNguyenModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-700 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Quick Question Navigator Grid -->
      <div class="py-3 border-b border-gray-100 dark:border-gray-700 overflow-x-auto">
        <div class="flex items-center gap-1.5 min-w-max" id="exam-question-nav">
          <!-- 30 bubbles inserted via JS -->
        </div>
      </div>

      <!-- Exam Questions Body -->
      <div class="overflow-y-auto flex-1 py-4 pr-1 space-y-6" id="exam-questions-container">
        <!-- Injected via JS -->
      </div>

      <!-- Exam Footer -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <div class="text-xs text-gray-500 dark:text-gray-400" id="exam-progress-text">
          Đã trả lời: <span id="answered-count" class="font-bold text-emerald-600 dark:text-emerald-400">0</span> / 30 câu
        </div>
        <div class="flex items-center gap-3">
          <button type="button" onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Tạm dừng
          </button>
          <button type="button" onclick="submitTrangNguyenExam()" class="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md transition flex items-center gap-2">
            <i class="fa-solid fa-paper-plane"></i> Nộp Bài Chấm Điểm
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Client-side Scripting -->
  <script>
    // 1. Dark Mode Toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }

    // 2. TOC Highlight
    function highlightToc(id) {
      document.querySelectorAll('.toc-item').forEach(el => el.classList.remove('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-600', 'dark:text-emerald-400', 'font-bold'));
      const active = document.getElementById(id);
      if (active) {
        active.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-600', 'dark:text-emerald-400', 'font-bold');
      }
    }

    // 3. Search Filtering
    function filterLessons() {
      const q = (document.getElementById('lessonSearch')?.value || '').trim().toLowerCase();
      applyLessonFilter(q);
    }
    function filterLessonsMobile() {
      const q = (document.getElementById('lessonSearchMobile')?.value || '').trim().toLowerCase();
      applyLessonFilter(q);
    }
    function applyLessonFilter(query) {
      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (!query || text.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // 4. Quick Lesson Quiz Check
    function checkLessonQuiz(lessonId, qIdx, chosenOpt, correctAns) {
      const expEl = document.getElementById('exp-' + lessonId + '-' + qIdx);
      const isCorrect = (chosenOpt === correctAns);
      
      // Update option styles
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('opt-' + lessonId + '-' + qIdx + '-' + i);
        if (!btn) continue;
        btn.classList.remove('bg-emerald-100', 'border-emerald-500', 'text-emerald-800', 'bg-rose-100', 'border-rose-500', 'text-rose-800');
        if (i === correctAns) {
          btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200');
        } else if (i === chosenOpt && !isCorrect) {
          btn.classList.add('bg-rose-100', 'dark:bg-rose-950', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
        }
      }

      if (expEl) {
        expEl.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950/60', 'dark:text-emerald-200', 'bg-rose-50', 'text-rose-800', 'dark:bg-rose-950/60', 'dark:text-rose-200');
        if (isCorrect) {
          expEl.classList.add('bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950/60', 'dark:text-emerald-200');
          expEl.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i> <strong>Chính xác!</strong> Bạn đã nắm vững kiến thức bài học.';
        } else {
          expEl.classList.add('bg-rose-50', 'text-rose-800', 'dark:bg-rose-950/60', 'dark:text-rose-200');
          expEl.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-500 mr-1.5"></i> <strong>Chưa chính xác!</strong> Hãy xem lại phần kiến thức trọng tâm phía trên.';
        }
      }
    }

    // 5. Virtual Microscope Logic
    let currentSample = 'onion';
    let currentObj = 10;
    let scopeLightOn = true;

    function openMicroscopeModal() {
      document.getElementById('microscope-modal').classList.remove('hidden');
      renderScopeView();
    }
    function closeMicroscopeModal() {
      document.getElementById('microscope-modal').classList.add('hidden');
    }

    function selectSample(sampleKey) {
      currentSample = sampleKey;
      document.querySelectorAll('.sample-btn').forEach(b => b.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-700', 'font-semibold'));
      const active = document.getElementById('btn-sample-' + sampleKey);
      if (active) active.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-700', 'font-semibold');
      renderScopeView();
    }

    function selectObjective(objVal) {
      currentObj = objVal;
      document.querySelectorAll('.obj-btn').forEach(b => b.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950', 'text-emerald-700'));
      const active = document.getElementById('btn-obj-' + objVal);
      if (active) active.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950', 'text-emerald-700');
      
      const total = 10 * currentObj;
      document.getElementById('total-magnification-label').innerText = 'Độ phóng đại: Thị kính 10x × Vật kính ' + currentObj + 'x = ' + total + ' lần';
      
      const sampleView = document.getElementById('sample-view');
      const scale = currentObj === 10 ? 1 : (currentObj === 40 ? 1.8 : 2.8);
      sampleView.style.transform = 'scale(' + scale + ')';
    }

    function updateFocus(val) {
      const dist = Math.abs(val - 80);
      const blurPx = (dist * 0.25).toFixed(1);
      document.getElementById('sample-view').style.filter = 'blur(' + blurPx + 'px)';
      const label = document.getElementById('focus-label');
      if (dist <= 5) {
        label.innerText = 'Rõ nét hoàn hảo (100%)';
        label.className = 'text-emerald-600 dark:text-emerald-400 font-bold';
      } else if (dist <= 20) {
        label.innerText = 'Khá rõ nét (75%)';
        label.className = 'text-teal-600 font-bold';
      } else {
        label.innerText = 'Mờ nhòe (chưa lấy nét)';
        label.className = 'text-rose-500 font-bold';
      }
    }

    function toggleScopeLight() {
      scopeLightOn = !scopeLightOn;
      const lightEl = document.getElementById('microscope-light');
      const btn = document.getElementById('btn-scope-light');
      if (scopeLightOn) {
        lightEl.classList.remove('opacity-0');
        btn.innerText = 'Bật';
        btn.className = 'px-3 py-1 rounded-lg bg-emerald-500 text-white font-bold';
      } else {
        lightEl.classList.add('opacity-0');
        btn.innerText = 'Tắt';
        btn.className = 'px-3 py-1 rounded-lg bg-gray-500 text-white font-bold';
      }
    }

    function renderScopeView() {
      const g = document.getElementById('sample-graphic');
      if (currentSample === 'onion') {
        g.innerHTML = '<div class="space-y-1"><div class="border border-emerald-700/60 p-1 rounded bg-emerald-200/40 text-[10px]">Tế bào biểu bì vảy hành<br>• Thành cellulose rõ<br>• Nhân tế bào sẫm màu</div><div class="border border-emerald-700/60 p-1 rounded bg-emerald-200/40 text-[10px]">Các tế bào xếp sát nhau dạng đa giác</div></div>';
      } else if (currentSample === 'fish') {
        g.innerHTML = '<div class="w-24 h-24 rounded-full border-2 border-amber-600 bg-amber-200/60 flex items-center justify-center font-bold text-amber-900 text-xs shadow">Trứng cá<br>(Tế bào hình cầu lớn)</div>';
      } else if (currentSample === 'euglena') {
        g.innerHTML = '<div class="w-20 h-10 rounded-full border-2 border-green-600 bg-green-200/70 flex items-center justify-center text-[10px] text-green-900 font-semibold relative">Trùng roi xanh<div class="absolute -right-6 top-4 w-6 h-[2px] bg-green-800 rotate-12"></div></div>';
      } else if (currentSample === 'bacteria') {
        g.innerHTML = '<div class="flex gap-1.5 flex-wrap w-28 justify-center"><div class="w-6 h-2 rounded-full bg-blue-600/80"></div><div class="w-6 h-2 rounded-full bg-blue-600/80"></div><div class="w-6 h-2 rounded-full bg-blue-600/80"></div><div class="w-6 h-2 rounded-full bg-blue-600/80"></div><span class="text-[9px] text-blue-900 font-bold block w-full">Trực khuẩn Lactobacillus</span></div>';
      }
      updateFocus(document.getElementById('focusSlider')?.value || 20);
    }

    // 6. Planets & Planetary Gravity Logic
    const planetGravityFactors = [
      { name: 'Thủy tinh', factor: 0.38, type: 'Đá kim loại', au: '0,39 AU', icon: 'fa-solid fa-circle text-gray-400' },
      { name: 'Kim tinh', factor: 0.91, type: 'Đá kim loại', au: '0,72 AU', icon: 'fa-solid fa-circle text-amber-400' },
      { name: 'Trái Đất', factor: 1.00, type: 'Đá kim loại', au: '1,00 AU', icon: 'fa-solid fa-earth-americas text-blue-500' },
      { name: 'Mặt Trăng', factor: 0.17, type: 'Vệ tinh tự nhiên', au: '384.000 km', icon: 'fa-solid fa-moon text-slate-300' },
      { name: 'Hỏa tinh', factor: 0.38, type: 'Đá kim loại', au: '1,52 AU', icon: 'fa-solid fa-circle text-rose-500' },
      { name: 'Mộc tinh', factor: 2.53, type: 'Khí khổng lồ', au: '5,20 AU', icon: 'fa-solid fa-circle text-amber-600' },
      { name: 'Thổ tinh', factor: 1.06, type: 'Khí khổng lồ', au: '9,54 AU', icon: 'fa-solid fa-ring text-yellow-500' },
      { name: 'Thiên Vương tinh', factor: 0.89, type: 'Băng khí', au: '19,2 AU', icon: 'fa-solid fa-circle text-cyan-400' },
      { name: 'Hải Vương tinh', factor: 1.14, type: 'Băng khí', au: '30,07 AU', icon: 'fa-solid fa-circle text-blue-600' }
    ];

    function openPlanetsModal() {
      document.getElementById('planets-modal').classList.remove('hidden');
      calculatePlanetaryWeights();
    }
    function closePlanetsModal() {
      document.getElementById('planets-modal').classList.add('hidden');
    }

    function calculatePlanetaryWeights() {
      const mass = parseFloat(document.getElementById('userMassInput')?.value || 45);
      const container = document.getElementById('planets-weight-cards');
      if (!container) return;

      let html = '';
      planetGravityFactors.forEach(p => {
        const weightN = (mass * 9.8 * p.factor).toFixed(1);
        const equivalentKg = (mass * p.factor).toFixed(1);
        html += \`
          <div class="bg-gray-50 dark:bg-gray-800 p-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="\${p.icon}"></i> \${p.name}
              </span>
              <span class="text-[10px] text-gray-400 font-mono">\${p.au}</span>
            </div>
            <div class="space-y-1 text-xs">
              <div class="text-gray-500 dark:text-gray-400">Trọng lượng P:</div>
              <div class="text-base font-black text-purple-700 dark:text-purple-300 font-mono">\${weightN} N</div>
              <div class="text-[11px] text-gray-500">(Tương đương cảm giác \${equivalentKg} kg)</div>
            </div>
          </div>
        \`;
      });
      container.innerHTML = html;
    }

    // 7. Spring Scale Simulator Logic
    function openSpringModal() {
      document.getElementById('spring-modal').classList.remove('hidden');
      setSpringMass(100);
    }
    function closeSpringModal() {
      document.getElementById('spring-modal').classList.add('hidden');
    }

    function setSpringMass(massGrams) {
      const springSvg = document.getElementById('spring-svg');
      const springWeight = document.getElementById('spring-weight');
      const lenVal = document.getElementById('spring-len-val');
      const deltaVal = document.getElementById('spring-delta-val');
      const forceVal = document.getElementById('spring-force-val');
      const warning = document.getElementById('spring-warning');

      // delta L = mass / 100 * 2 cm (100g -> 2cm)
      const deltaCm = (massGrams / 50); // 100g = 2cm, 200g = 4cm, etc.
      const currentLen = 10 + deltaCm;
      const forceN = (massGrams * 0.01).toFixed(2);

      const heightPx = 100 + (deltaCm * 6);
      springSvg.setAttribute('height', heightPx);
      springWeight.innerText = massGrams + ' g';
      lenVal.innerText = currentLen.toFixed(1) + ' cm';
      deltaVal.innerText = deltaCm.toFixed(1) + ' cm';
      forceVal.innerText = forceN + ' N';

      if (massGrams >= 500) {
        warning.classList.remove('hidden');
      } else {
        warning.classList.add('hidden');
      }
    }

    // 8. Trang Nguyen Exam Logic (30 questions)
    const examQuestions = ${tqJson};
    let userAnswers = new Array(examQuestions.length).fill(-1);
    let examTimeSeconds = 60 * 60; // 60:00
    let examTimerInterval = null;

    function openTrangNguyenModal() {
      document.getElementById('trangnguyen-modal').classList.remove('hidden');
      renderTrangNguyenExam();
      if (!examTimerInterval) {
        examTimerInterval = setInterval(updateExamTimer, 1000);
      }
    }
    function closeTrangNguyenModal() {
      document.getElementById('trangnguyen-modal').classList.add('hidden');
    }

    function updateExamTimer() {
      if (examTimeSeconds > 0) {
        examTimeSeconds--;
        const m = Math.floor(examTimeSeconds / 60);
        const s = examTimeSeconds % 60;
        const formatted = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        const timerEl = document.getElementById('exam-timer');
        if (timerEl) timerEl.innerText = formatted;
      } else {
        clearInterval(examTimerInterval);
        alert('Hết giờ làm bài! Hệ thống tự động thu bài và chấm điểm.');
        submitTrangNguyenExam();
      }
    }

    function renderTrangNguyenExam() {
      const nav = document.getElementById('exam-question-nav');
      const container = document.getElementById('exam-questions-container');
      if (!container || container.innerHTML.trim() !== '') return;

      let navHtml = '';
      let qHtml = '';

      examQuestions.forEach((q, idx) => {
        navHtml += \`
          <a href="#exam-q-\${idx}" id="exam-nav-\${idx}" class="w-7 h-7 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold text-xs flex items-center justify-center hover:bg-emerald-50 transition">
            \${idx + 1}
          </a>
        \`;

        qHtml += \`
          <div id="exam-q-\${idx}" class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 scroll-mt-20">
            <p class="font-bold text-sm text-gray-900 dark:text-white mb-3 leading-relaxed">
              \${q.q}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        \`;

        const letters = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, optIdx) => {
          qHtml += \`
            <button type="button" 
                    onclick="pickExamAnswer(\${idx}, \${optIdx})" 
                    id="exam-opt-\${idx}-\${optIdx}"
                    class="exam-opt-\${idx} text-left px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-gray-800 dark:text-gray-200 transition flex items-start gap-2">
              <span class="font-bold text-gray-400 min-w-[18px]">\${letters[optIdx]}.</span>
              <span>\${opt}</span>
            </button>
          \`;
        });

        qHtml += \`
            </div>
            <div id="exam-exp-\${idx}" class="hidden mt-3 p-3 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200">
              <i class="fa-solid fa-circle-info mr-1 text-emerald-600"></i> \${q.exp}
            </div>
          </div>
        \`;
      });

      nav.innerHTML = navHtml;
      container.innerHTML = qHtml;
    }

    function pickExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      
      // Update nav button
      const navBtn = document.getElementById('exam-nav-' + qIdx);
      if (navBtn) {
        navBtn.classList.remove('bg-gray-50', 'text-gray-600');
        navBtn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
      }

      // Update option styles
      document.querySelectorAll('.exam-opt-' + qIdx).forEach((btn, idx) => {
        btn.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950', 'text-emerald-700', 'font-semibold');
        if (idx === optIdx) {
          btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950', 'text-emerald-700', 'font-semibold');
        }
      });

      // Update answered count
      const answered = userAnswers.filter(a => a !== -1).length;
      document.getElementById('answered-count').innerText = answered;
    }

    function submitTrangNguyenExam() {
      let score = 0;
      examQuestions.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        const isCorrect = (userChoice === q.ans);
        if (isCorrect) score++;

        const expEl = document.getElementById('exam-exp-' + idx);
        if (expEl) expEl.classList.remove('hidden');

        // Style the buttons to show correct/wrong
        q.options.forEach((opt, optIdx) => {
          const btn = document.getElementById('exam-opt-' + idx + '-' + optIdx);
          if (!btn) return;
          if (optIdx === q.ans) {
            btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200', 'font-bold');
          } else if (optIdx === userChoice && !isCorrect) {
            btn.classList.add('bg-rose-100', 'dark:bg-rose-950', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
          }
        });
      });

      clearInterval(examTimerInterval);

      // Trigger Confetti if good score
      if (score >= 20 && typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      let rank = 'Cần cố gắng thêm';
      if (score >= 28) rank = 'Trạng Nguyên Xuất Sắc (Thủ Khoa)';
      else if (score >= 24) rank = 'Bảng Nhãn (Học lực Giỏi)';
      else if (score >= 18) rank = 'Thám Hoa (Học lực Khá)';

      alert('KẾT QUẢ THI TRẠNG NGUYÊN KHTN 6:\\n\\n' +
            'Điểm số: ' + score + ' / 30 câu (' + ((score / 30) * 10).toFixed(1) + ' điểm)\\n' +
            'Danh hiệu: ' + rank + '\\n\\n' +
            'Mời em kéo xuống từng câu để xem đáp án đúng và lời giải chi tiết!');
    }
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_6.html', fullHtml, 'utf8');
console.log('Successfully generated courses/khtn_6.html (' + fullHtml.length + ' bytes)');

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/science_6.html', fullHtml, 'utf8');
console.log('Successfully generated alias courses/science_6.html');
