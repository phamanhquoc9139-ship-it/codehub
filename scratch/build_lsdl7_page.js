const fs = require('fs');
const path = require('path');

const historyLessons = require('./lsdl7_history.js');
const geographyLessons = require('./lsdl7_geography.js');
const { commonTopics, glossary, examQuestions, atlasData } = require('./lsdl7_common_and_tools.js');

const allUnits = [...historyLessons, ...geographyLessons, ...commonTopics];
console.log(`Total units: ${allUnits.length}`);

const unitsJson = JSON.stringify(allUnits).replace(/<\/script>/gi, '<\\/script>');
const glossaryJson = JSON.stringify(glossary).replace(/<\/script>/gi, '<\\/script>');
const examQuestionsJson = JSON.stringify(examQuestions).replace(/<\/script>/gi, '<\\/script>');
const atlasDataJson = JSON.stringify(atlasData).replace(/<\/script>/gi, '<\\/script>');

const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lịch Sử và Địa Lí Lớp 7 | Kết Nối Tri Thức | CodeHub THCS</title>
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
            history: {
              amber: '#D97706',
              orange: '#EA580C',
              yellow: '#CA8A04'
            },
            geography: {
              emerald: '#059669',
              teal: '#0D9488',
              cyan: '#0891B2'
            }
          }
        }
      }
    };
  </script>

  <!-- Prevent FOUC Theme Init -->
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    code, pre { font-family: 'JetBrains Mono', monospace; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.4); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.7); }
    .active-unit {
      background: linear-gradient(135deg, rgba(217, 119, 6, 0.15), rgba(5, 150, 105, 0.1));
      border-left: 4px solid #D97706;
    }
    .dark .active-unit {
      background: linear-gradient(135deg, rgba(217, 119, 6, 0.25), rgba(5, 150, 105, 0.15));
      border-left: 4px solid #F59E0B;
    }
  </style>
</head>

<body class="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col transition-colors">

  <!-- TOP HEADER -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button (Về trang chính CodeHub) -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-emerald-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 font-black text-xs group-hover:scale-105 transition">
            SỬ-ĐỊA
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              LỊCH SỬ & ĐỊA LÍ 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; History & Geography 7 &bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Niên Biểu & Atlas Modal Button -->
        <button onclick="openAtlasModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800 transition flex items-center gap-1.5 cursor-pointer" title="Niên biểu lịch sử và bản đồ các châu lục">
          <i class="fa-solid fa-earth-americas text-amber-600 dark:text-amber-400"></i>
          <span class="hidden md:inline">Niên Biểu & Atlas</span>
        </button>

        <!-- Sổ Tay Thuật Ngữ Modal Button -->
        <button onclick="openGlossaryModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800 transition flex items-center gap-1.5 cursor-pointer" title="Sổ tay tra cứu thuật ngữ Lịch sử & Địa lí">
          <i class="fa-solid fa-book-bookmark text-emerald-600 dark:text-emerald-400"></i>
          <span class="hidden md:inline">Sổ Tay Thuật Ngữ</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600 hover:opacity-90 text-white text-xs font-black shadow-md shadow-amber-500/20 transition flex items-center gap-1.5 cursor-pointer" title="Đấu trường 50 câu trắc nghiệm Sử - Địa 7">
          <i class="fa-solid fa-trophy text-yellow-300"></i>
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

  <!-- MAIN WRAPPER -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6">

    <!-- LEFT SIDEBAR -->
    <aside class="lg:col-span-4 xl:col-span-4 space-y-4">
      
      <!-- Search & Progress Card -->
      <div class="bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
        <!-- Search -->
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input type="text" id="lessonSearch" oninput="handleSearch(this.value)" placeholder="Tìm bài học, Bạch Đằng, Lam Sơn, A-ma-dôn..." class="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500">
        </div>

        <!-- Progress -->
        <div>
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-gray-600 dark:text-gray-400">Tiến độ bài học:</span>
            <span id="progressText" class="font-black text-amber-600 dark:text-amber-400">0 / 39 bài</span>
          </div>
          <div class="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div id="progressBar" class="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- Branch Filter Pills -->
        <div class="pt-1">
          <div class="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Phân loại phân môn:</div>
          <div class="grid grid-cols-2 gap-1.5 text-xs">
            <button onclick="filterBranch('all')" id="branchBtn-all" class="branch-pill px-2 py-1.5 rounded-lg bg-amber-600 text-white font-bold text-center transition">Tất cả (39)</button>
            <button onclick="filterBranch('su')" id="branchBtn-su" class="branch-pill px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-center transition">Lịch sử (18)</button>
            <button onclick="filterBranch('dia')" id="branchBtn-dia" class="branch-pill px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-center transition">Địa lí (19)</button>
            <button onclick="filterBranch('chung')" id="branchBtn-chung" class="branch-pill px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-center transition">Chủ đề chung (2)</button>
          </div>
        </div>
      </div>

      <!-- Navigation List -->
      <div class="bg-white dark:bg-gray-850 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-3">
        <div class="flex items-center justify-between px-2 py-1.5 border-b border-gray-100 dark:border-gray-800 text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
          <span>DANH MỤC 39 BÀI HỌC</span>
          <span id="shownCount" class="text-amber-600 dark:text-amber-400">39 / 39</span>
        </div>

        <div id="unitsListContainer" class="max-h-[640px] overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
          <!-- Dynamically populated -->
        </div>
      </div>

    </aside>

    <!-- RIGHT MAIN CONTENT -->
    <main class="lg:col-span-8 xl:col-span-8 space-y-6">

      <!-- UNIT CARD -->
      <article id="unitCard" class="bg-white dark:bg-gray-850 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8 space-y-6">
        
        <!-- Header & Completion Toggle -->
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-gray-200 dark:border-gray-800">
          <div class="space-y-2">
            <div class="flex flex-wrap items-center gap-2">
              <span id="badgeBranch" class="px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                Lịch sử
              </span>
              <span id="badgeChapter" class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Chương 1. Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI
              </span>
              <span id="badgePages" class="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                SGK tr. 8–13
              </span>
            </div>
            <h2 id="unitTitle" class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-snug">
              Bài 1. Quá trình hình thành và phát triển chế độ phong kiến ở Tây Âu
            </h2>
          </div>

          <button id="btnComplete" onclick="toggleCompleteCurrentUnit()" class="shrink-0 px-4 py-2 rounded-xl border border-amber-300 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-xs font-bold transition flex items-center gap-2 cursor-pointer">
            <i id="completeIcon" class="fa-regular fa-circle-check text-base"></i>
            <span id="completeText">Đánh dấu đã học</span>
          </button>
        </div>

        <!-- Objective Box -->
        <div class="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border-l-4 border-amber-500 space-y-1">
          <div class="flex items-center gap-2 text-xs font-black text-amber-700 dark:text-amber-300 uppercase tracking-wider">
            <i class="fa-solid fa-bullseye"></i>
            <span>Mục tiêu bài học trọng tâm</span>
          </div>
          <p id="unitObjective" class="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
            <!-- Objective content -->
          </p>
        </div>

        <!-- Visual Diagram / SVG Section -->
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            <i class="fa-solid fa-diagram-project text-amber-600 dark:text-amber-400"></i>
            <span>Sơ đồ & Trực quan hóa kiến thức</span>
          </div>
          <div id="unitSvgContainer" class="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center overflow-x-auto">
            <!-- SVG rendered here -->
          </div>
        </div>

        <!-- Mindmap / Tóm tắt tư duy -->
        <div id="mindmapBox" class="p-4 rounded-xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-1">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
            <i class="fa-solid fa-lightbulb"></i>
            <span>Sơ đồ tư duy & Ghi nhớ nhanh</span>
          </div>
          <p id="unitMindmap" class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
            <!-- Mindmap content -->
          </p>
        </div>

        <!-- Sections Content -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            <i class="fa-solid fa-book-open-reader text-amber-600 dark:text-amber-400"></i>
            <span>Nội dung bài học chi tiết</span>
          </div>
          <div id="unitSectionsContainer" class="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <!-- Sections rendered here -->
          </div>
        </div>

        <!-- Interactive Self-Assessment Checklist -->
        <div class="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs font-black uppercase text-amber-700 dark:text-amber-400">
              <i class="fa-solid fa-list-check"></i>
              <span>Tiêu chí tự đánh giá năng lực (Đạt / Chưa đạt)</span>
            </div>
            <span id="checklistCount" class="text-xs font-mono font-bold text-gray-500">0/0 Đạt</span>
          </div>
          <div id="checklistItemsContainer" class="space-y-2">
            <!-- Dynamic checklist -->
          </div>
        </div>

        <!-- Practice & Quiz -->
        <div class="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs font-black uppercase text-amber-800 dark:text-amber-300">
              <i class="fa-solid fa-circle-question text-amber-600 dark:text-amber-400"></i>
              <span>Trắc nghiệm củng cố bài học</span>
            </div>
            <span class="text-xs font-semibold text-amber-600 dark:text-amber-400">Tự chấm điểm tức thì</span>
          </div>
          <div id="quizContainer" class="space-y-4">
            <!-- Quiz questions -->
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
          <button id="btnPrev" onclick="navigateUnit(-1)" class="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-bold text-gray-700 dark:text-gray-200 transition flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
            <span>Bài trước</span>
          </button>
          <button id="btnNext" onclick="navigateUnit(1)" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-xs font-bold text-white transition flex items-center gap-2 shadow-md shadow-amber-600/20 cursor-pointer">
            <span>Bài tiếp theo</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </article>

    </main>

  </div>

  <!-- FOOTER -->
  <footer class="mt-auto py-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-2 font-semibold">
        <span>CodeHub THCS &bull; Lịch Sử và Địa Lí 7 (Kết Nối Tri Thức)</span>
      </div>
      <div>
        <a href="../index.html" class="hover:text-amber-600 dark:hover:text-amber-400 transition font-medium">← Quay về Trang chủ CodeHub</a>
      </div>
    </div>
  </footer>

  <!-- ================= MODALS ================= -->

  <!-- 1. NIÊN BIỂU & ATLAS MODAL -->
  <div id="atlasModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 w-full max-w-4xl max-h-[90vh] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-amber-50/50 dark:bg-amber-950/30">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
            <i class="fa-solid fa-earth-americas"></i>
          </div>
          <div>
            <h3 class="font-black text-gray-900 dark:text-white text-base">Niên Biểu Lịch Sử & Atlas Các Châu Lục</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Tra cứu các mốc vàng lịch sử thế giới - Việt Nam và thông số các châu lục</p>
          </div>
        </div>
        <button onclick="closeAtlasModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Tabs -->
      <div class="flex border-b border-gray-200 dark:border-gray-800 px-6 pt-3 gap-4 text-xs font-bold">
        <button onclick="switchAtlasTab('timelines')" id="tabBtnTimelines" class="pb-2.5 border-b-2 border-amber-600 text-amber-600 dark:text-amber-400">Niên Biểu Lịch Sử</button>
        <button onclick="switchAtlasTab('continents')" id="tabBtnContinents" class="pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">Bản Đồ Các Châu Lục</button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4">
        <!-- Timelines Tab -->
        <div id="atlasTimelinesPanel" class="space-y-3">
          <!-- Populated by JS -->
        </div>

        <!-- Continents Tab -->
        <div id="atlasContinentsPanel" class="hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  </div>

  <!-- 2. SỔ TAY THUẬT NGỮ MODAL -->
  <div id="glossaryModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 w-full max-w-4xl max-h-[90vh] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/30">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-black text-gray-900 dark:text-white text-base">Sổ Tay Tra Cứu Thuật Ngữ & Kĩ Năng Sử – Địa 7</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Hệ thống hóa định nghĩa chuẩn mực từ SGK Kết Nối Tri Thức</p>
          </div>
        </div>
        <button onclick="closeGlossaryModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Tabs -->
      <div class="flex border-b border-gray-200 dark:border-gray-800 px-6 pt-3 gap-4 text-xs font-bold">
        <button onclick="switchGlossaryTab('history')" id="tabBtnHistory" class="pb-2.5 border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400">Thuật Ngữ Lịch Sử</button>
        <button onclick="switchGlossaryTab('geography')" id="tabBtnGeography" class="pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">Thuật Ngữ Địa Lí</button>
        <button onclick="switchGlossaryTab('skills')" id="tabBtnSkills" class="pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">Quy Trình Bản Đồ & Tư Liệu</button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4">
        <div id="glossaryListContainer" class="space-y-3">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  </div>

  <!-- 3. ĐẤU TRƯỜNG TRẠNG NGUYÊN (60:00) MODAL -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4">
    <div class="bg-white dark:bg-gray-850 w-full max-w-4xl max-h-[92vh] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-trophy text-yellow-300"></i>
          </div>
          <div>
            <h3 class="font-black text-sm sm:text-base leading-tight">Đấu Trường Trạng Nguyên Sử – Địa 7</h3>
            <p class="text-[11px] text-amber-100">Kì thi thử 50 câu trắc nghiệm bao quát trọn vẹn Lịch sử & Địa lí</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Countdown Timer -->
          <div class="px-3 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm font-mono font-black text-sm sm:text-base flex items-center gap-2 text-yellow-300">
            <i class="fa-regular fa-clock"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body Container -->
      <div id="examBody" class="p-5 sm:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
        
        <!-- Questions List Container -->
        <div id="examQuestionsContainer" class="space-y-6">
          <!-- Populated by JS -->
        </div>

        <!-- Exam Result Panel (Hidden by default) -->
        <div id="examResultPanel" class="hidden text-center py-8 space-y-6">
          <div class="w-20 h-20 rounded-full mx-auto bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-4xl shadow-lg">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span id="rankBadge" class="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300">
              TRẠNG NGUYÊN SỬ – ĐỊA 7
            </span>
            <h4 id="rankTitle" class="text-2xl font-black text-gray-900 dark:text-white">XUẤT SẮC TOÀN DIỆN</h4>
            <p id="examScoreText" class="text-sm text-gray-600 dark:text-gray-300 mt-1">Đúng 48 / 50 câu (96%) &bull; Thời gian làm bài: 35 phút</p>
          </div>
          <div class="flex justify-center gap-3 pt-2">
            <button onclick="restartExam()" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md transition flex items-center gap-2">
              <i class="fa-solid fa-rotate-right"></i>
              <span>Làm lại đề thi</span>
            </button>
            <button onclick="closeExamModal()" class="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs transition">
              Đóng cửa sổ
            </button>
          </div>
        </div>

      </div>

      <!-- Exam Footer -->
      <div id="examFooter" class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-between">
        <div class="text-xs font-bold text-gray-600 dark:text-gray-400">
          <span id="examAnsweredCount">Đã làm: 0 / 50 câu</span>
        </div>
        <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600 hover:opacity-90 text-white text-xs font-black shadow-md shadow-amber-500/20 transition flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-paper-plane"></i>
          <span>Nộp Bài Chấm Điểm</span>
        </button>
      </div>

    </div>
  </div>

  <!-- SCRIPT DATA & APP LOGIC -->
  <script>
    // Injected Data
    const UNITS = ${unitsJson};
    const GLOSSARY = ${glossaryJson};
    const EXAM_QUESTIONS = ${examQuestionsJson};
    const ATLAS_DATA = ${atlasDataJson};

    let currentUnitIndex = 0;
    let currentBranchFilter = 'all';
    let searchQuery = '';
    let completedUnits = JSON.parse(localStorage.getItem('lsdl7_completed') || '[]');
    let checklistStatus = JSON.parse(localStorage.getItem('lsdl7_checklists') || '{}');

    // App Initialization
    document.addEventListener('DOMContentLoaded', () => {
      renderUnitsList();
      loadUnit(0);
      initAtlasModal();
      initGlossaryModal();
      updateGlobalProgress();
    });

    // Dark Mode Toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Branch Filtering
    function filterBranch(branch) {
      currentBranchFilter = branch;
      document.querySelectorAll('.branch-pill').forEach(btn => {
        btn.classList.remove('bg-amber-600', 'text-white', 'font-bold');
        btn.classList.add('bg-gray-100', 'dark:bg-gray-800', 'font-medium');
      });
      const activeBtn = document.getElementById('branchBtn-' + branch);
      if (activeBtn) {
        activeBtn.classList.add('bg-amber-600', 'text-white', 'font-bold');
        activeBtn.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'font-medium');
      }
      renderUnitsList();
    }

    // Search Handling
    function handleSearch(val) {
      searchQuery = val.trim().toLowerCase();
      renderUnitsList();
    }

    // Render Units List in Sidebar
    function renderUnitsList() {
      const container = document.getElementById('unitsListContainer');
      container.innerHTML = '';

      let count = 0;
      UNITS.forEach((unit, index) => {
        // Filter by branch
        let matchBranch = true;
        if (currentBranchFilter === 'su') matchBranch = unit.branch.toLowerCase().includes('lịch sử');
        else if (currentBranchFilter === 'dia') matchBranch = unit.branch.toLowerCase().includes('địa lí');
        else if (currentBranchFilter === 'chung') matchBranch = unit.branch.toLowerCase().includes('chủ đề chung');

        // Filter by search
        const matchSearch = !searchQuery || 
          unit.title.toLowerCase().includes(searchQuery) ||
          unit.chapter.toLowerCase().includes(searchQuery) ||
          (unit.objective && unit.objective.toLowerCase().includes(searchQuery));

        if (matchBranch && matchSearch) {
          count++;
          const isCurrent = (index === currentUnitIndex);
          const isDone = completedUnits.includes(unit.id);

          const item = document.createElement('div');
          item.className = 'p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-amber-300 dark:hover:border-amber-700 cursor-pointer transition flex items-center gap-3 ' + (isCurrent ? 'active-unit border-amber-500' : 'bg-gray-50/50 dark:bg-gray-900/40');
          item.onclick = () => loadUnit(index);

          // Branch Badge Color
          let badgeBg = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
          let numPrefix = 'B';
          if (unit.branchTag === 'Lịch sử') {
            badgeBg = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
            numPrefix = 'LS';
          } else if (unit.branchTag === 'Địa lí') {
            badgeBg = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
            numPrefix = 'ĐL';
          } else if (unit.branchTag === 'Chủ đề chung') {
            badgeBg = 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300';
            numPrefix = 'CĐ';
          }

          item.innerHTML = \`
            <div class="w-8 h-8 rounded-lg font-bold text-[11px] flex items-center justify-center shrink-0 \${isDone ? 'bg-emerald-500 text-white' : 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300'}">
              \${isDone ? '<i class=\"fa-solid fa-check text-xs\"></i>' : numPrefix + unit.num}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-1.5 mb-0.5">
                <span class="text-[9px] font-bold px-1.5 py-0.2 rounded \${badgeBg}">\${unit.branchTag}</span>
                <span class="text-[10px] text-gray-400 font-mono">\${unit.pages}</span>
              </div>
              <div class="text-xs font-bold text-gray-800 dark:text-gray-100 truncate">\${unit.title}</div>
            </div>
          \`;

          container.appendChild(item);
        }
      });

      document.getElementById('shownCount').innerText = count + ' / 39';
    }

    // Load Specific Unit into Main Content
    function loadUnit(index) {
      if (index < 0 || index >= UNITS.length) return;
      currentUnitIndex = index;
      const unit = UNITS[index];

      // Update Header
      document.getElementById('badgeBranch').innerText = unit.branchTag;
      document.getElementById('badgeChapter').innerText = unit.chapter;
      document.getElementById('badgePages').innerText = 'SGK ' + unit.pages;
      document.getElementById('unitTitle').innerText = unit.title;
      document.getElementById('unitObjective').innerText = unit.objective || 'Nắm vững kiến thức cốt lõi bài học theo chuẩn SGK GDPT 2018.';

      // SVG
      const svgBox = document.getElementById('unitSvgContainer');
      if (unit.svg) {
        svgBox.innerHTML = unit.svg;
        svgBox.parentElement.classList.remove('hidden');
      } else {
        svgBox.parentElement.classList.add('hidden');
      }

      // Mindmap
      const mmBox = document.getElementById('mindmapBox');
      if (unit.mindmap) {
        document.getElementById('unitMindmap').innerText = unit.mindmap;
        mmBox.classList.remove('hidden');
      } else {
        mmBox.classList.add('hidden');
      }

      // Sections
      const secContainer = document.getElementById('unitSectionsContainer');
      secContainer.innerHTML = '';
      if (unit.sections && unit.sections.length > 0) {
        unit.sections.forEach(sec => {
          const sDiv = document.createElement('div');
          sDiv.className = 'p-4 rounded-xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 space-y-2';
          sDiv.innerHTML = \`
            <h3 class="text-sm font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span>
              \${sec.title}
            </h3>
            <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              \${sec.content}
            </div>
          \`;
          secContainer.appendChild(sDiv);
        });
      }

      // Checklist
      renderChecklist(unit);

      // Quiz
      renderQuiz(unit);

      // Complete button state
      updateCompleteButtonState();

      // Prev / Next button states
      document.getElementById('btnPrev').disabled = (index === 0);
      document.getElementById('btnPrev').classList.toggle('opacity-50', index === 0);
      document.getElementById('btnNext').disabled = (index === UNITS.length - 1);
      document.getElementById('btnNext').classList.toggle('opacity-50', index === UNITS.length - 1);

      // Re-highlight active in list
      renderUnitsList();

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Toggle Complete Button
    function toggleCompleteCurrentUnit() {
      const unit = UNITS[currentUnitIndex];
      const idx = completedUnits.indexOf(unit.id);
      if (idx > -1) {
        completedUnits.splice(idx, 1);
      } else {
        completedUnits.push(unit.id);
      }
      localStorage.setItem('lsdl7_completed', JSON.stringify(completedUnits));
      updateCompleteButtonState();
      updateGlobalProgress();
      renderUnitsList();
    }

    function updateCompleteButtonState() {
      const unit = UNITS[currentUnitIndex];
      const isDone = completedUnits.includes(unit.id);
      const btn = document.getElementById('btnComplete');
      const icon = document.getElementById('completeIcon');
      const text = document.getElementById('completeText');

      if (isDone) {
        btn.className = 'shrink-0 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20';
        icon.className = 'fa-solid fa-circle-check text-base text-white';
        text.innerText = 'Đã hoàn thành';
      } else {
        btn.className = 'shrink-0 px-4 py-2 rounded-xl border border-amber-300 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-xs font-bold transition flex items-center gap-2 cursor-pointer';
        icon.className = 'fa-regular fa-circle-check text-base';
        text.innerText = 'Đánh dấu đã học';
      }
    }

    function updateGlobalProgress() {
      const done = completedUnits.length;
      const total = UNITS.length;
      const pct = Math.round((done / total) * 100);
      document.getElementById('progressText').innerText = done + ' / ' + total + ' bài (' + pct + '%)';
      document.getElementById('progressBar').style.width = pct + '%';
    }

    function navigateUnit(step) {
      loadUnit(currentUnitIndex + step);
    }

    // Render Checklist
    function renderChecklist(unit) {
      const container = document.getElementById('checklistItemsContainer');
      container.innerHTML = '';
      const items = unit.checklist || [];
      const unitKey = unit.id;
      const saved = checklistStatus[unitKey] || [];

      let doneCount = 0;
      items.forEach((itemText, i) => {
        const isChecked = saved.includes(i);
        if (isChecked) doneCount++;

        const row = document.createElement('label');
        row.className = 'flex items-start gap-2.5 p-2 rounded-xl hover:bg-white dark:hover:bg-gray-800/80 cursor-pointer transition text-xs text-gray-700 dark:text-gray-300 select-none';
        row.innerHTML = \`
          <input type="checkbox" \${isChecked ? 'checked' : ''} onchange="toggleChecklistItem('\${unitKey}', \${i})" class="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer">
          <span class="\${isChecked ? 'line-through text-gray-400 dark:text-gray-500' : ''}">\${itemText}</span>
        \`;
        container.appendChild(row);
      });

      document.getElementById('checklistCount').innerText = doneCount + ' / ' + items.length + ' Đạt';
    }

    function toggleChecklistItem(unitKey, itemIdx) {
      if (!checklistStatus[unitKey]) checklistStatus[unitKey] = [];
      const pos = checklistStatus[unitKey].indexOf(itemIdx);
      if (pos > -1) {
        checklistStatus[unitKey].splice(pos, 1);
      } else {
        checklistStatus[unitKey].push(itemIdx);
      }
      localStorage.setItem('lsdl7_checklists', JSON.stringify(checklistStatus));
      renderChecklist(UNITS[currentUnitIndex]);
    }

    // Render Quiz
    function renderQuiz(unit) {
      const container = document.getElementById('quizContainer');
      container.innerHTML = '';
      const quizList = unit.quiz || [];

      quizList.forEach((qObj, qIdx) => {
        const qCard = document.createElement('div');
        qCard.className = 'p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-3';
        
        const qTitle = document.createElement('p');
        qTitle.className = 'text-xs sm:text-sm font-bold text-gray-900 dark:text-white';
        qTitle.innerHTML = '<span class=\"text-amber-600 dark:text-amber-400 font-black mr-1\">Câu ' + (qIdx + 1) + ':</span> ' + qObj.question;
        qCard.appendChild(qTitle);

        const optsDiv = document.createElement('div');
        optsDiv.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2';

        const expDiv = document.createElement('div');
        expDiv.className = 'hidden p-3 rounded-lg text-xs leading-relaxed';

        qObj.options.forEach((optText, optIdx) => {
          const btn = document.createElement('button');
          btn.className = 'px-3 py-2 rounded-lg text-left text-xs border border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition font-medium cursor-pointer';
          btn.innerText = String.fromCharCode(65 + optIdx) + '. ' + optText;

          btn.onclick = () => {
            const allBtns = optsDiv.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);

            if (optIdx === qObj.answer) {
              btn.className = 'px-3 py-2 rounded-lg text-left text-xs bg-emerald-600 text-white font-bold transition';
              expDiv.className = 'p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
              expDiv.innerHTML = '<strong>Chính xác!</strong> ' + qObj.explanation;
            } else {
              btn.className = 'px-3 py-2 rounded-lg text-left text-xs bg-rose-600 text-white font-bold transition';
              allBtns[qObj.answer].className = 'px-3 py-2 rounded-lg text-left text-xs bg-emerald-600 text-white font-bold transition';
              expDiv.className = 'p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
              expDiv.innerHTML = '<strong>Chưa chính xác!</strong> ' + qObj.explanation;
            }
            expDiv.classList.remove('hidden');
          };

          optsDiv.appendChild(btn);
        });

        qCard.appendChild(optsDiv);
        qCard.appendChild(expDiv);
        container.appendChild(qCard);
      });
    }

    // ================= MODAL LOGIC =================

    // 1. Atlas Modal
    function openAtlasModal() {
      document.getElementById('atlasModal').classList.remove('hidden');
    }
    function closeAtlasModal() {
      document.getElementById('atlasModal').classList.add('hidden');
    }

    function switchAtlasTab(tab) {
      const panelTimelines = document.getElementById('atlasTimelinesPanel');
      const panelContinents = document.getElementById('atlasContinentsPanel');
      const btnT = document.getElementById('tabBtnTimelines');
      const btnC = document.getElementById('tabBtnContinents');

      if (tab === 'timelines') {
        panelTimelines.classList.remove('hidden');
        panelContinents.classList.add('hidden');
        btnT.className = 'pb-2.5 border-b-2 border-amber-600 text-amber-600 dark:text-amber-400';
        btnC.className = 'pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200';
      } else {
        panelTimelines.classList.add('hidden');
        panelContinents.classList.remove('hidden');
        btnC.className = 'pb-2.5 border-b-2 border-amber-600 text-amber-600 dark:text-amber-400';
        btnT.className = 'pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200';
      }
    }

    function initAtlasModal() {
      // Render Timelines
      const tContainer = document.getElementById('atlasTimelinesPanel');
      tContainer.innerHTML = '';
      ATLAS_DATA.timelines.forEach(item => {
        const row = document.createElement('div');
        row.className = 'p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-start gap-4';
        row.innerHTML = \`
          <span class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-black text-xs font-mono shrink-0">\${item.year}</span>
          <div>
            <h4 class="text-xs sm:text-sm font-black text-gray-900 dark:text-white">\${item.title}</h4>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">\${item.desc}</p>
          </div>
        \`;
        tContainer.appendChild(row);
      });

      // Render Continents
      const cContainer = document.getElementById('atlasContinentsPanel');
      cContainer.innerHTML = '';
      ATLAS_DATA.continents.forEach(c => {
        const cCard = document.createElement('div');
        cCard.className = 'p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-2';
        cCard.innerHTML = \`
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-black text-emerald-600 dark:text-emerald-400">\${c.name}</h4>
            <span class="text-[11px] font-mono font-bold text-gray-500">\${c.area}</span>
          </div>
          <div class="text-xs text-gray-500">Dân số: <strong class="text-gray-800 dark:text-gray-200">\${c.pop}</strong></div>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">\${c.feature}</p>
        \`;
        cContainer.appendChild(cCard);
      });
    }

    // 2. Glossary Modal
    let currentGlossaryTab = 'history';

    function openGlossaryModal() {
      document.getElementById('glossaryModal').classList.remove('hidden');
    }
    function closeGlossaryModal() {
      document.getElementById('glossaryModal').classList.add('hidden');
    }

    function switchGlossaryTab(tab) {
      currentGlossaryTab = tab;
      const btnH = document.getElementById('tabBtnHistory');
      const btnG = document.getElementById('tabBtnGeography');
      const btnS = document.getElementById('tabBtnSkills');

      [btnH, btnG, btnS].forEach(b => b.className = 'pb-2.5 border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200');

      if (tab === 'history') {
        btnH.className = 'pb-2.5 border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400';
      } else if (tab === 'geography') {
        btnG.className = 'pb-2.5 border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400';
      } else {
        btnS.className = 'pb-2.5 border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400';
      }

      renderGlossaryContent();
    }

    function initGlossaryModal() {
      renderGlossaryContent();
    }

    function renderGlossaryContent() {
      const container = document.getElementById('glossaryListContainer');
      container.innerHTML = '';

      if (currentGlossaryTab === 'history') {
        GLOSSARY.history.forEach(item => {
          const card = document.createElement('div');
          card.className = 'p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-1';
          card.innerHTML = \`
            <h4 class="text-xs sm:text-sm font-black text-amber-700 dark:text-amber-400">• \${item.term}</h4>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-normal">\${item.desc}</p>
          \`;
          container.appendChild(card);
        });
      } else if (currentGlossaryTab === 'geography') {
        GLOSSARY.geography.forEach(item => {
          const card = document.createElement('div');
          card.className = 'p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-1';
          card.innerHTML = \`
            <h4 class="text-xs sm:text-sm font-black text-emerald-700 dark:text-emerald-400">• \${item.term}</h4>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-normal">\${item.desc}</p>
          \`;
          container.appendChild(card);
        });
      } else {
        GLOSSARY.skills.forEach((skill, idx) => {
          const card = document.createElement('div');
          card.className = 'p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-start gap-3';
          card.innerHTML = \`
            <div class="w-6 h-6 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">\${idx + 1}</div>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-normal">\${skill}</p>
          \`;
          container.appendChild(card);
        });
      }
    }

    // 3. Exam Modal Logic
    let examTimerInterval = null;
    let examTimeRemaining = 3600; // 60 minutes
    let userExamAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      if (!examTimerInterval) {
        startExam();
      }
    }
    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function startExam() {
      examTimeRemaining = 3600;
      userExamAnswers = {};
      document.getElementById('examResultPanel').classList.add('hidden');
      document.getElementById('examQuestionsContainer').classList.remove('hidden');
      document.getElementById('examFooter').classList.remove('hidden');

      renderExamQuestions();

      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeRemaining--;
        if (examTimeRemaining <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        } else {
          updateTimerDisplay();
        }
      }, 1000);
      updateTimerDisplay();
    }

    function updateTimerDisplay() {
      const mins = Math.floor(examTimeRemaining / 60);
      const secs = examTimeRemaining % 60;
      document.getElementById('examTimer').innerText = 
        (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function renderExamQuestions() {
      const container = document.getElementById('examQuestionsContainer');
      container.innerHTML = '';

      EXAM_QUESTIONS.forEach((q, idx) => {
        const qCard = document.createElement('div');
        qCard.className = 'p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 space-y-3';
        qCard.id = 'examQ-' + idx;

        qCard.innerHTML = \`
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-relaxed">
            <span class="text-amber-600 dark:text-amber-400 font-black mr-1">Câu \${idx + 1}:</span> \${q.q}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            \${q.options.map((opt, oIdx) => \`
              <button onclick="selectExamAnswer(\${idx}, \${oIdx})" id="examBtn-\${idx}-\${oIdx}" class="exam-opt-btn p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-left font-medium transition hover:border-amber-500 cursor-pointer">
                <span class="font-bold mr-1">\${String.fromCharCode(65 + oIdx)}.</span> \${opt}
              </button>
            \`).join('')}
          </div>
          <div id="examExp-\${idx}" class="hidden p-3 rounded-xl text-xs leading-relaxed"></div>
        \`;

        container.appendChild(qCard);
      });

      updateExamAnsweredCount();
    }

    function selectExamAnswer(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;

      const parent = document.getElementById('examQ-' + qIdx);
      parent.querySelectorAll('.exam-opt-btn').forEach((btn, bIdx) => {
        if (bIdx === oIdx) {
          btn.className = 'exam-opt-btn p-2.5 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold text-left transition';
        } else {
          btn.className = 'exam-opt-btn p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-left font-medium transition hover:border-amber-500 cursor-pointer';
        }
      });

      updateExamAnsweredCount();
    }

    function updateExamAnsweredCount() {
      const answered = Object.keys(userExamAnswers).length;
      document.getElementById('examAnsweredCount').innerText = 'Đã làm: ' + answered + ' / ' + EXAM_QUESTIONS.length + ' câu';
    }

    function submitExam() {
      if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
      }

      let score = 0;
      EXAM_QUESTIONS.forEach((q, idx) => {
        const userChoice = userExamAnswers[idx];
        const isCorrect = (userChoice === q.answer);
        if (isCorrect) score++;

        const expDiv = document.getElementById('examExp-' + idx);
        expDiv.classList.remove('hidden');
        if (isCorrect) {
          expDiv.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
          expDiv.innerHTML = '<strong>Đúng!</strong> ' + q.explain;
        } else {
          expDiv.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
          expDiv.innerHTML = '<strong>Chưa chính xác.</strong> ' + q.explain;
        }

        const parent = document.getElementById('examQ-' + idx);
        parent.querySelectorAll('.exam-opt-btn').forEach((btn, bIdx) => {
          btn.disabled = true;
          if (bIdx === q.answer) {
            btn.className = 'exam-opt-btn p-2.5 rounded-xl bg-emerald-600 text-white font-bold text-left';
          } else if (bIdx === userChoice) {
            btn.className = 'exam-opt-btn p-2.5 rounded-xl bg-rose-600 text-white font-bold text-left';
          }
        });
      });

      // Show Result Panel
      document.getElementById('examQuestionsContainer').classList.add('hidden');
      document.getElementById('examFooter').classList.add('hidden');
      document.getElementById('examResultPanel').classList.remove('hidden');

      const pct = Math.round((score / EXAM_QUESTIONS.length) * 100);
      const timeSpentSecs = 3600 - examTimeRemaining;
      const spentMins = Math.floor(timeSpentSecs / 60);

      document.getElementById('examScoreText').innerText = 
        'Đúng ' + score + ' / ' + EXAM_QUESTIONS.length + ' câu (' + pct + '%) • Thời gian hoàn thành: ' + spentMins + ' phút';

      const rankBadge = document.getElementById('rankBadge');
      const rankTitle = document.getElementById('rankTitle');

      if (score >= 45) {
        rankBadge.innerText = 'TRẠNG NGUYÊN SỬ – ĐỊA 7';
        rankBadge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300';
        rankTitle.innerText = '🥇 ĐẠT DANH HIỆU TRẠNG NGUYÊN SỬ – ĐỊA';
      } else if (score >= 38) {
        rankBadge.innerText = 'BẢNG NHÃN SỬ – ĐỊA 7';
        rankBadge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300';
        rankTitle.innerText = '🥈 ĐẠT DANH HIỆU BẢNG NHÃN SỬ – ĐỊA';
      } else if (score >= 30) {
        rankBadge.innerText = 'THÁM HOA SỬ – ĐỊA 7';
        rankBadge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300';
        rankTitle.innerText = '🥉 ĐẠT DANH HIỆU THÁM HOA SỬ – ĐỊA';
      } else {
        rankBadge.innerText = 'CẦN ÔN TẬP THÊM';
        rankBadge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border border-gray-300';
        rankTitle.innerText = 'HÃY ĐỌC KĨ LẠI KIẾN THỨC VÀ LÀM LẠI ĐỀ NHÉ!';
      }
    }

    function restartExam() {
      startExam();
    }
  </script>

</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../courses/lichsu_diali_7.html');
const aliasPath = path.resolve(__dirname, '../courses/history_geography_7.html');

fs.writeFileSync(outputPath, html, 'utf8');
console.log(`Saved lichsu_diali_7.html (${html.length} bytes)`);

fs.writeFileSync(aliasPath, html, 'utf8');
console.log(`Saved history_geography_7.html (${html.length} bytes)`);
