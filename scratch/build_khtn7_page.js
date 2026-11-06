const fs = require('fs');
const path = require('path');

const part1 = require('./khtn7_part1.js');
const part2 = require('./khtn7_part2.js');
const part3 = require('./khtn7_part3.js');
const part4 = require('./khtn7_part4.js');
const reviewData = require('./khtn7_review_and_exam.js');

const allLessons = [...part1, ...part2, ...part3, ...part4];
console.log(`Total lessons assembled: ${allLessons.length}`);
console.log(`Periodic elements: ${reviewData.periodicElements.length}`);
console.log(`Exam questions: ${reviewData.examQuestions.length}`);

// We will construct the complete HTML
const lessonsJson = JSON.stringify(allLessons).replace(/<\/script>/gi, '<\\/script>');
const elementsJson = JSON.stringify(reviewData.periodicElements).replace(/<\/script>/gi, '<\\/script>');
const formulasJson = JSON.stringify(reviewData.formulas).replace(/<\/script>/gi, '<\\/script>');
const examQuestionsJson = JSON.stringify(reviewData.examQuestions).replace(/<\/script>/gi, '<\\/script>');

const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khoa Học Tự Nhiên Lớp 7 | Kết Nối Tri Thức | CodeHub THCS</title>
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
            science: {
              teal: '#0D9488',
              cyan: '#06B6D4',
              emerald: '#059669',
              blue: '#2563EB',
              amber: '#D97706',
              purple: '#7C3AED'
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
    .active-lesson {
      background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(6, 182, 212, 0.1));
      border-left: 4px solid #0D9488;
    }
    .dark .active-lesson {
      background: linear-gradient(135deg, rgba(13, 148, 136, 0.25), rgba(6, 182, 212, 0.15));
      border-left: 4px solid #14B8A6;
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
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-500 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-teal-500/20 font-black text-xs group-hover:scale-105 transition">
            KHTN
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              KHOA HỌC TỰ NHIÊN 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; Natural Sciences 7 &bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Bảng tuần hoàn Modal Button -->
        <button onclick="openPeriodicModal()" class="px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/60 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 transition flex items-center gap-1.5 cursor-pointer" title="Bảng tuần hoàn 118 nguyên tố hóa học">
          <i class="fa-solid fa-table-cells text-teal-600 dark:text-teal-400"></i>
          <span class="hidden md:inline">Bảng tuần hoàn</span>
        </button>

        <!-- Sổ Tra Cứu KHTN Modal Button -->
        <button onclick="openToolsModal()" class="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800 transition flex items-center gap-1.5 cursor-pointer" title="Sổ tay công thức & an toàn phòng thí nghiệm">
          <i class="fa-solid fa-atom text-blue-600 dark:text-blue-400"></i>
          <span class="hidden md:inline">Sổ Tra Cứu KHTN</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-black shadow-md shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer" title="Đấu trường 50 câu trắc nghiệm KHTN 7">
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

  <!-- MAIN WRAPPER -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6">

    <!-- LEFT SIDEBAR -->
    <aside class="lg:col-span-4 xl:col-span-4 space-y-4">
      
      <!-- Search & Progress Card -->
      <div class="bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
        <!-- Search -->
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input type="text" id="lessonSearch" oninput="handleSearch(this.value)" placeholder="Tìm bài học, quang hợp, gương phẳng, v = s/t..." class="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
        </div>

        <!-- Progress -->
        <div>
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-gray-600 dark:text-gray-400">Tiến độ bài học:</span>
            <span id="progressText" class="font-black text-teal-600 dark:text-teal-400">0 / 42 bài</span>
          </div>
          <div class="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div id="progressBar" class="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- Branch Filter Pills -->
        <div class="pt-1">
          <div class="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Phân loại phân môn:</div>
          <div class="grid grid-cols-3 gap-1.5 text-xs">
            <button onclick="filterBranch('all')" id="branchBtn-all" class="branch-pill px-2 py-1.5 rounded-lg bg-teal-600 text-white font-bold text-center transition">Tất cả (42)</button>
            <button onclick="filterBranch('hoa')" id="branchBtn-hoa" class="branch-pill px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-center transition">Hóa học (6)</button>
            <button onclick="filterBranch('ly')" id="branchBtn-ly" class="branch-pill px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-center transition">Vật lý (13)</button>
            <button onclick="filterBranch('sinh')" id="branchBtn-sinh" class="branch-pill px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-center transition">Sinh học (22)</button>
            <button onclick="filterBranch('kn')" id="branchBtn-kn" class="branch-pill px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-center transition">Kĩ năng (1)</button>
          </div>
        </div>
      </div>

      <!-- Lessons Navigation List -->
      <div class="bg-white dark:bg-gray-850 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-3">
        <div class="flex items-center justify-between px-2 py-1.5 border-b border-gray-100 dark:border-gray-800 text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
          <span>DANH MỤC 42 BÀI HỌC</span>
          <span id="shownCount" class="text-teal-600 dark:text-teal-400">42 / 42</span>
        </div>

        <div id="lessonsListContainer" class="max-h-[640px] overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
          <!-- Dynamically populated -->
        </div>
      </div>

    </aside>

    <!-- RIGHT MAIN CONTENT -->
    <main class="lg:col-span-8 xl:col-span-8 space-y-6">

      <!-- LESSON CARD -->
      <article id="lessonCard" class="bg-white dark:bg-gray-850 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8 space-y-6">
        
        <!-- Header & Completion Toggle -->
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-gray-200 dark:border-gray-800">
          <div class="space-y-2">
            <div class="flex flex-wrap items-center gap-2">
              <span id="badgeBranch" class="px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                Hóa học
              </span>
              <span id="badgeChapter" class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                CHƯƠNG I: NGUYÊN TỬ - NGUYÊN TỐ HÓA HỌC
              </span>
              <span id="badgePages" class="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                SGK tr. 14–19
              </span>
            </div>
            <h2 id="lessonTitle" class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-snug">
              Bài 2. Nguyên tử
            </h2>
          </div>

          <button id="btnComplete" onclick="toggleCompleteCurrentLesson()" class="shrink-0 px-4 py-2 rounded-xl border border-teal-300 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950/50 text-teal-700 dark:text-teal-300 text-xs font-bold transition flex items-center gap-2 cursor-pointer">
            <i id="completeIcon" class="fa-regular fa-circle-check text-base"></i>
            <span id="completeText">Đánh dấu đã học</span>
          </button>
        </div>

        <!-- Objective Box -->
        <div class="p-4 rounded-xl bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-transparent border-l-4 border-teal-500 space-y-1">
          <div class="flex items-center gap-2 text-xs font-black text-teal-700 dark:text-teal-300 uppercase tracking-wider">
            <i class="fa-solid fa-bullseye"></i>
            <span>Mục tiêu kiến thức trọng tâm</span>
          </div>
          <p id="lessonObjective" class="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
            <!-- Objective content -->
          </p>
        </div>

        <!-- Visual Diagram / SVG Section -->
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            <i class="fa-solid fa-diagram-project text-teal-600 dark:text-teal-400"></i>
            <span>Trực quan hóa & Sơ đồ kiến thức</span>
          </div>
          <div id="lessonSvgContainer" class="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center overflow-x-auto">
            <!-- SVG rendered here -->
          </div>
        </div>

        <!-- Mindmap / Tóm tắt tư duy -->
        <div id="mindmapBox" class="p-4 rounded-xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-1">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
            <i class="fa-solid fa-lightbulb"></i>
            <span>Sơ đồ tư duy & Ghi nhớ nhanh</span>
          </div>
          <p id="lessonMindmap" class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
            <!-- Mindmap content -->
          </p>
        </div>

        <!-- Sections Content -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            <i class="fa-solid fa-book-open-reader text-teal-600 dark:text-teal-400"></i>
            <span>Nội dung bài học chi tiết</span>
          </div>
          <div id="lessonSectionsContainer" class="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <!-- Sections rendered here -->
          </div>
        </div>

        <!-- Interactive Self-Assessment Checklist -->
        <div class="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs font-black uppercase text-teal-700 dark:text-teal-400">
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
        <div class="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/50 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs font-black uppercase text-teal-800 dark:text-teal-300">
              <i class="fa-solid fa-circle-question text-teal-600 dark:text-teal-400"></i>
              <span>Trắc nghiệm củng cố bài học</span>
            </div>
            <span class="text-xs font-semibold text-teal-600 dark:text-teal-400">Tự chấm điểm tức thì</span>
          </div>
          <div id="quizContainer" class="space-y-4">
            <!-- Quiz questions -->
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
          <button id="btnPrev" onclick="navigateLesson(-1)" class="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-bold text-gray-700 dark:text-gray-200 transition flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
            <span>Bài trước</span>
          </button>
          <button id="btnNext" onclick="navigateLesson(1)" class="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-xs font-bold text-white transition flex items-center gap-2 shadow-md shadow-teal-600/20 cursor-pointer">
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
        <span>CodeHub THCS &bull; Khoa Học Tự Nhiên 7 (Kết Nối Tri Thức)</span>
      </div>
      <div>
        <a href="../index.html" class="hover:text-teal-600 dark:hover:text-teal-400 transition font-medium">← Quay về Trang chủ CodeHub</a>
      </div>
    </div>
  </footer>

  <!-- ================= MODALS ================= -->

  <!-- 1. BẢNG TUẦN HOÀN MODAL -->
  <div id="periodicModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 w-full max-w-4xl max-h-[90vh] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-teal-50/50 dark:bg-teal-950/30">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
            <i class="fa-solid fa-table-cells"></i>
          </div>
          <div>
            <h3 class="font-black text-gray-900 dark:text-white text-base">Bảng Tuần Hoàn 20 Nguyên Tố Hóa Học Đầu Tiên</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Tra cứu nhanh Số hiệu nguyên tử (Z), Nguyên tử khối, Chu kì, Nhóm và Tính chất</p>
          </div>
        </div>
        <button onclick="closePeriodicModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-6">
        <!-- Legend & Filters -->
        <div class="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2">
            <span class="inline-block w-3 h-3 rounded bg-blue-500"></span><span class="font-semibold text-gray-700 dark:text-gray-300">Kim loại</span>
            <span class="inline-block w-3 h-3 rounded bg-amber-500 ml-2"></span><span class="font-semibold text-gray-700 dark:text-gray-300">Phi kim</span>
            <span class="inline-block w-3 h-3 rounded bg-purple-500 ml-2"></span><span class="font-semibold text-gray-700 dark:text-gray-300">Khí hiếm</span>
          </div>
          <div class="text-gray-500">Nhấp vào một nguyên tố để xem thông tin chi tiết</div>
        </div>

        <!-- Elements Grid -->
        <div id="elementsGrid" class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2">
          <!-- Populated dynamically -->
        </div>

        <!-- Element Details Card -->
        <div id="elementDetailCard" class="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-6">
          <div id="detailElementBadge" class="w-24 h-24 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center shadow-lg p-2 shrink-0">
            <span id="detailZ" class="text-xs font-mono font-bold self-start">Z = 1</span>
            <span id="detailSymbol" class="text-3xl font-black">H</span>
            <span id="detailMass" class="text-[11px] font-mono">1.008</span>
          </div>
          <div class="space-y-1.5 flex-1 text-center sm:text-left">
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h4 id="detailName" class="text-lg font-black text-gray-900 dark:text-white">Hydrogen</h4>
              <span id="detailTypeBadge" class="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">Phi kim</span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs py-1">
              <div><span class="text-gray-400">Chu kì:</span> <strong id="detailPeriod" class="text-gray-800 dark:text-gray-200">1</strong></div>
              <div><span class="text-gray-400">Nhóm:</span> <strong id="detailGroup" class="text-gray-800 dark:text-gray-200">IA</strong></div>
            </div>
            <p id="detailDesc" class="text-xs text-gray-600 dark:text-gray-400">Khí nhẹ nhất, chất khử mạnh, thành phần chính của nước và vũ trụ.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. SỔ TAY TRA CỨU KHTN MODAL -->
  <div id="toolsModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 w-full max-w-4xl max-h-[90vh] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-blue-50/50 dark:bg-blue-950/30">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
            <i class="fa-solid fa-atom"></i>
          </div>
          <div>
            <h3 class="font-black text-gray-900 dark:text-white text-base">Sổ Tay Tra Cứu Công Thức & An Toàn KHTN 7</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Tổng hợp toàn bộ công thức tính toán và quy chuẩn thí nghiệm chuẩn GDPT 2018</p>
          </div>
        </div>
        <button onclick="closeToolsModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-6">
        <!-- Formulas Section -->
        <div class="space-y-4">
          <h4 class="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-calculator text-blue-600"></i>
            <span>Bảng Công Thức Trọng Tâm Xuyên Suốt</span>
          </h4>
          <div id="formulaCategoriesContainer" class="space-y-4">
            <!-- Dynamic formula categories -->
          </div>
        </div>

        <!-- Safety Rules Section -->
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-3">
          <h4 class="text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Quy Tắc An Toàn Phòng Thí Nghiệm & Biển Báo Cảnh Báo</span>
          </h4>
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-5">
            <li><strong>Tuyệt đối không:</strong> Tự ý trộn lẫn hóa chất khi chưa có hướng dẫn của giáo viên, không nếm ngửi trực tiếp hoá chất.</li>
            <li><strong>Đun hóa chất trong ống nghiệm:</strong> Dùng kẹp gỗ cặp ở 1/3 miệng ống nghiệm, hướng miệng ống nghiệm về phía không có người.</li>
            <li><strong>Biển báo ngọn lửa:</strong> Chất dễ bắt cháy, cần để xa nguồn lửa và nhiệt độ cao.</li>
            <li><strong>Biển báo chất ăn mòn:</strong> Axit mạnh, bazo mạnh; đeo kính bảo hộ và găng tay cao su.</li>
            <li><strong>Sử dụng điện an toàn:</strong> Không chạm vào dây điện hở, ngắt nguồn trước khi lắp đặt mạch điện thí nghiệm nam châm điện.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. ĐẤU TRƯỜNG TRẠNG NGUYÊN (60:00) MODAL -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4">
    <div class="bg-white dark:bg-gray-850 w-full max-w-4xl max-h-[92vh] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-trophy text-amber-300"></i>
          </div>
          <div>
            <h3 class="font-black text-sm sm:text-base leading-tight">Đấu Trường Trạng Nguyên KHTN 7</h3>
            <p class="text-[11px] text-teal-100">Kì thi thử 50 câu trắc nghiệm tổng hợp (Vật lý, Hóa học, Sinh học)</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Countdown Timer -->
          <div class="px-3 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm font-mono font-black text-sm sm:text-base flex items-center gap-2 text-amber-300">
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
            <span id="rankBadge" class="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-300">
              TRẠNG NGUYÊN KHTN 7
            </span>
            <h4 id="rankTitle" class="text-2xl font-black text-gray-900 dark:text-white">XUẤT SẮC TOÀN DIỆN</h4>
            <p id="examScoreText" class="text-sm text-gray-600 dark:text-gray-300 mt-1">Đúng 48 / 50 câu (96%) &bull; Thời gian làm bài: 32 phút</p>
          </div>
          <div class="flex justify-center gap-3 pt-2">
            <button onclick="restartExam()" class="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition flex items-center gap-2">
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
        <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-black shadow-md shadow-teal-500/20 transition flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-paper-plane"></i>
          <span>Nộp Bài Chấm Điểm</span>
        </button>
      </div>

    </div>
  </div>

  <!-- SCRIPT DATA & APP LOGIC -->
  <script>
    // Injected Data
    const LESSONS = ${lessonsJson};
    const ELEMENTS = ${elementsJson};
    const FORMULAS = ${formulasJson};
    const EXAM_QUESTIONS = ${examQuestionsJson};

    let currentLessonIndex = 0;
    let currentBranchFilter = 'all';
    let searchQuery = '';
    let completedLessons = JSON.parse(localStorage.getItem('khtn7_completed') || '[]');
    let checklistStatus = JSON.parse(localStorage.getItem('khtn7_checklists') || '{}');

    // App Initialization
    document.addEventListener('DOMContentLoaded', () => {
      renderLessonsList();
      loadLesson(0);
      initPeriodicTable();
      initFormulasModal();
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
        btn.classList.remove('bg-teal-600', 'text-white', 'font-bold');
        btn.classList.add('bg-gray-100', 'dark:bg-gray-800', 'font-medium');
      });
      const activeBtn = document.getElementById('branchBtn-' + branch);
      if (activeBtn) {
        activeBtn.classList.add('bg-teal-600', 'text-white', 'font-bold');
        activeBtn.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'font-medium');
      }
      renderLessonsList();
    }

    // Search Handling
    function handleSearch(val) {
      searchQuery = val.trim().toLowerCase();
      renderLessonsList();
    }

    // Render Lessons List in Sidebar
    function renderLessonsList() {
      const container = document.getElementById('lessonsListContainer');
      container.innerHTML = '';

      let count = 0;
      LESSONS.forEach((lesson, index) => {
        // Filter by branch
        let matchBranch = true;
        if (currentBranchFilter === 'hoa') matchBranch = lesson.branch.toLowerCase().includes('hóa');
        else if (currentBranchFilter === 'ly') matchBranch = lesson.branch.toLowerCase().includes('vật lý') || lesson.branch.toLowerCase().includes('lý');
        else if (currentBranchFilter === 'sinh') matchBranch = lesson.branch.toLowerCase().includes('sinh');
        else if (currentBranchFilter === 'kn') matchBranch = lesson.branch.toLowerCase().includes('kĩ năng');

        // Filter by search
        const matchSearch = !searchQuery || 
          lesson.title.toLowerCase().includes(searchQuery) ||
          lesson.chapter.toLowerCase().includes(searchQuery) ||
          (lesson.objective && lesson.objective.toLowerCase().includes(searchQuery));

        if (matchBranch && matchSearch) {
          count++;
          const isCurrent = (index === currentLessonIndex);
          const isDone = completedLessons.includes(lesson.id);

          const item = document.createElement('div');
          item.className = 'p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-teal-300 dark:hover:border-teal-700 cursor-pointer transition flex items-center gap-3 ' + (isCurrent ? 'active-lesson border-teal-500' : 'bg-gray-50/50 dark:bg-gray-900/40');
          item.onclick = () => loadLesson(index);

          // Branch Badge Color
          let badgeBg = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
          if (lesson.branchTag === 'Hóa học') badgeBg = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
          else if (lesson.branchTag === 'Vật lý') badgeBg = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';
          else if (lesson.branchTag === 'Sinh học') badgeBg = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
          else if (lesson.branchTag === 'Kĩ năng') badgeBg = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300';

          item.innerHTML = \`
            <div class="w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 \${isDone ? 'bg-emerald-500 text-white' : 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300'}">
              \${isDone ? '<i class=\"fa-solid fa-check text-[10px]\"></i>' : 'B' + lesson.num}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-1.5 mb-0.5">
                <span class="text-[9px] font-bold px-1.5 py-0.2 rounded \${badgeBg}">\${lesson.branchTag}</span>
                <span class="text-[10px] text-gray-400 font-mono">\${lesson.pages}</span>
              </div>
              <div class="text-xs font-bold text-gray-800 dark:text-gray-100 truncate">\${lesson.title}</div>
            </div>
          \`;

          container.appendChild(item);
        }
      });

      document.getElementById('shownCount').innerText = count + ' / 42';
    }

    // Load Specific Lesson into Main Content
    function loadLesson(index) {
      if (index < 0 || index >= LESSONS.length) return;
      currentLessonIndex = index;
      const lesson = LESSONS[index];

      // Update Header
      document.getElementById('badgeBranch').innerText = lesson.branchTag;
      document.getElementById('badgeChapter').innerText = lesson.chapter;
      document.getElementById('badgePages').innerText = 'SGK tr. ' + lesson.pages;
      document.getElementById('lessonTitle').innerText = lesson.title;
      document.getElementById('lessonObjective').innerText = lesson.objective || 'Nắm vững kiến thức trọng tâm bài học theo chuẩn SGK GDPT 2018.';

      // SVG
      const svgBox = document.getElementById('lessonSvgContainer');
      if (lesson.svg) {
        svgBox.innerHTML = lesson.svg;
        svgBox.parentElement.classList.remove('hidden');
      } else {
        svgBox.parentElement.classList.add('hidden');
      }

      // Mindmap
      const mmBox = document.getElementById('mindmapBox');
      if (lesson.mindmap) {
        document.getElementById('lessonMindmap').innerText = lesson.mindmap;
        mmBox.classList.remove('hidden');
      } else {
        mmBox.classList.add('hidden');
      }

      // Sections
      const secContainer = document.getElementById('lessonSectionsContainer');
      secContainer.innerHTML = '';
      if (lesson.sections && lesson.sections.length > 0) {
        lesson.sections.forEach(sec => {
          const sDiv = document.createElement('div');
          sDiv.className = 'p-4 rounded-xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 space-y-2';
          sDiv.innerHTML = \`
            <h3 class="text-sm font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-teal-500"></span>
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
      renderChecklist(lesson);

      // Quiz
      renderQuiz(lesson);

      // Complete button state
      updateCompleteButtonState();

      // Prev / Next button states
      document.getElementById('btnPrev').disabled = (index === 0);
      document.getElementById('btnPrev').classList.toggle('opacity-50', index === 0);
      document.getElementById('btnNext').disabled = (index === LESSONS.length - 1);
      document.getElementById('btnNext').classList.toggle('opacity-50', index === LESSONS.length - 1);

      // Re-highlight active in list
      renderLessonsList();

      // Scroll to top of lesson
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Toggle Complete Button
    function toggleCompleteCurrentLesson() {
      const lesson = LESSONS[currentLessonIndex];
      const idx = completedLessons.indexOf(lesson.id);
      if (idx > -1) {
        completedLessons.splice(idx, 1);
      } else {
        completedLessons.push(lesson.id);
      }
      localStorage.setItem('khtn7_completed', JSON.stringify(completedLessons));
      updateCompleteButtonState();
      updateGlobalProgress();
      renderLessonsList();
    }

    function updateCompleteButtonState() {
      const lesson = LESSONS[currentLessonIndex];
      const isDone = completedLessons.includes(lesson.id);
      const btn = document.getElementById('btnComplete');
      const icon = document.getElementById('completeIcon');
      const text = document.getElementById('completeText');

      if (isDone) {
        btn.className = 'shrink-0 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20';
        icon.className = 'fa-solid fa-circle-check text-base text-white';
        text.innerText = 'Đã hoàn thành';
      } else {
        btn.className = 'shrink-0 px-4 py-2 rounded-xl border border-teal-300 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950/50 text-teal-700 dark:text-teal-300 text-xs font-bold transition flex items-center gap-2 cursor-pointer';
        icon.className = 'fa-regular fa-circle-check text-base';
        text.innerText = 'Đánh dấu đã học';
      }
    }

    function updateGlobalProgress() {
      const done = completedLessons.length;
      const total = LESSONS.length;
      const pct = Math.round((done / total) * 100);
      document.getElementById('progressText').innerText = done + ' / ' + total + ' bài (' + pct + '%)';
      document.getElementById('progressBar').style.width = pct + '%';
    }

    function navigateLesson(step) {
      loadLesson(currentLessonIndex + step);
    }

    // Render Checklist
    function renderChecklist(lesson) {
      const container = document.getElementById('checklistItemsContainer');
      container.innerHTML = '';
      const items = lesson.checklist || [];
      const lessonKey = lesson.id;
      const saved = checklistStatus[lessonKey] || [];

      let doneCount = 0;
      items.forEach((itemText, i) => {
        const isChecked = saved.includes(i);
        if (isChecked) doneCount++;

        const row = document.createElement('label');
        row.className = 'flex items-start gap-2.5 p-2 rounded-xl hover:bg-white dark:hover:bg-gray-800/80 cursor-pointer transition text-xs text-gray-700 dark:text-gray-300 select-none';
        row.innerHTML = \`
          <input type="checkbox" \${isChecked ? 'checked' : ''} onchange="toggleChecklistItem('\${lessonKey}', \${i})" class="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer">
          <span class="\${isChecked ? 'line-through text-gray-400 dark:text-gray-500' : ''}">\${itemText}</span>
        \`;
        container.appendChild(row);
      });

      document.getElementById('checklistCount').innerText = doneCount + ' / ' + items.length + ' Đạt';
    }

    function toggleChecklistItem(lessonKey, itemIdx) {
      if (!checklistStatus[lessonKey]) checklistStatus[lessonKey] = [];
      const pos = checklistStatus[lessonKey].indexOf(itemIdx);
      if (pos > -1) {
        checklistStatus[lessonKey].splice(pos, 1);
      } else {
        checklistStatus[lessonKey].push(itemIdx);
      }
      localStorage.setItem('khtn7_checklists', JSON.stringify(checklistStatus));
      renderChecklist(LESSONS[currentLessonIndex]);
    }

    // Render Quiz
    function renderQuiz(lesson) {
      const container = document.getElementById('quizContainer');
      container.innerHTML = '';
      const quizList = lesson.quiz || [];

      quizList.forEach((qObj, qIdx) => {
        const qCard = document.createElement('div');
        qCard.className = 'p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-3';
        
        const qTitle = document.createElement('p');
        qTitle.className = 'text-xs sm:text-sm font-bold text-gray-900 dark:text-white';
        qTitle.innerHTML = '<span class=\"text-teal-600 dark:text-teal-400 font-black mr-1\">Câu ' + (qIdx + 1) + ':</span> ' + qObj.question;
        qCard.appendChild(qTitle);

        const optsDiv = document.createElement('div');
        optsDiv.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2';

        const expDiv = document.createElement('div');
        expDiv.className = 'hidden p-3 rounded-lg text-xs leading-relaxed';

        qObj.options.forEach((optText, optIdx) => {
          const btn = document.createElement('button');
          btn.className = 'px-3 py-2 rounded-lg text-left text-xs border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition font-medium cursor-pointer';
          btn.innerText = String.fromCharCode(65 + optIdx) + '. ' + optText;

          btn.onclick = () => {
            // Disable buttons
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

    // Periodic Modal
    function openPeriodicModal() {
      document.getElementById('periodicModal').classList.remove('hidden');
    }
    function closePeriodicModal() {
      document.getElementById('periodicModal').classList.add('hidden');
    }

    function initPeriodicTable() {
      const grid = document.getElementById('elementsGrid');
      grid.innerHTML = '';
      ELEMENTS.forEach(el => {
        let colorClass = 'border-amber-400 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300';
        if (el.type === 'kim-loai') colorClass = 'border-blue-400 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300';
        else if (el.type === 'khi-hiem') colorClass = 'border-purple-400 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300';

        const tile = document.createElement('div');
        tile.className = 'p-2 rounded-xl border cursor-pointer hover:scale-105 transition flex flex-col items-center justify-center ' + colorClass;
        tile.onclick = () => selectElement(el);
        tile.innerHTML = \`
          <span class="text-[9px] font-mono font-bold self-start">\${el.z}</span>
          <span class="text-base font-black my-0.5">\${el.sym}</span>
          <span class="text-[9px] truncate max-w-full font-medium">\${el.name}</span>
        \`;
        grid.appendChild(tile);
      });

      // Default first element
      selectElement(ELEMENTS[0]);
    }

    function selectElement(el) {
      document.getElementById('detailZ').innerText = 'Z = ' + el.z;
      document.getElementById('detailSymbol').innerText = el.sym;
      document.getElementById('detailMass').innerText = el.mass + ' amu';
      document.getElementById('detailName').innerText = el.name;
      document.getElementById('detailPeriod').innerText = el.period;
      document.getElementById('detailGroup').innerText = el.group;
      document.getElementById('detailDesc').innerText = el.desc;

      const badge = document.getElementById('detailTypeBadge');
      const box = document.getElementById('detailElementBadge');
      if (el.type === 'kim-loai') {
        badge.className = 'px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';
        badge.innerText = 'Kim loại';
        box.className = 'w-24 h-24 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center shadow-lg p-2 shrink-0';
      } else if (el.type === 'khi-hiem') {
        badge.className = 'px-2 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300';
        badge.innerText = 'Khí hiếm (Trơ)';
        box.className = 'w-24 h-24 rounded-2xl bg-purple-600 text-white flex flex-col items-center justify-center shadow-lg p-2 shrink-0';
      } else {
        badge.className = 'px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
        badge.innerText = 'Phi kim';
        box.className = 'w-24 h-24 rounded-2xl bg-amber-600 text-white flex flex-col items-center justify-center shadow-lg p-2 shrink-0';
      }
    }

    // Tools & Formulas Modal
    function openToolsModal() {
      document.getElementById('toolsModal').classList.remove('hidden');
    }
    function closeToolsModal() {
      document.getElementById('toolsModal').classList.add('hidden');
    }

    function initFormulasModal() {
      const container = document.getElementById('formulaCategoriesContainer');
      container.innerHTML = '';

      FORMULAS.forEach(cat => {
        const catBox = document.createElement('div');
        catBox.className = 'p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-3';
        
        let catHtml = \`
          <div class="flex items-center gap-2 text-xs font-black uppercase text-teal-700 dark:text-teal-400">
            <i class="fa-solid \${cat.icon}"></i>
            <span>\${cat.category}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        \`;

        cat.items.forEach(it => {
          catHtml += \`
            <div class="p-3 rounded-xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 space-y-1">
              <div class="font-bold text-xs text-gray-900 dark:text-white">\${it.name}</div>
              <div class="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-gray-50 dark:bg-gray-900 p-2 rounded-lg border border-gray-100 dark:border-gray-800">\${it.formula}</div>
              <p class="text-[11px] text-gray-500 dark:text-gray-400 leading-normal">\${it.desc}</p>
            </div>
          \`;
        });

        catHtml += '</div>';
        catBox.innerHTML = catHtml;
        container.appendChild(catBox);
      });
    }

    // Exam Modal Logic
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
            <span class="text-teal-600 dark:text-teal-400 font-black mr-1">Câu \${idx + 1}:</span> \${q.q}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            \${q.options.map((opt, oIdx) => \`
              <button onclick="selectExamAnswer(\${idx}, \${oIdx})" id="examBtn-\${idx}-\${oIdx}" class="exam-opt-btn p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-left font-medium transition hover:border-teal-500 cursor-pointer">
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

      // Update button styles in question
      const parent = document.getElementById('examQ-' + qIdx);
      parent.querySelectorAll('.exam-opt-btn').forEach((btn, bIdx) => {
        if (bIdx === oIdx) {
          btn.className = 'exam-opt-btn p-2.5 rounded-xl border border-teal-500 bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 font-bold text-left transition';
        } else {
          btn.className = 'exam-opt-btn p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-left font-medium transition hover:border-teal-500 cursor-pointer';
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

        // Show explanation and highlight correct/wrong
        const expDiv = document.getElementById('examExp-' + idx);
        expDiv.classList.remove('hidden');
        if (isCorrect) {
          expDiv.className = 'p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
          expDiv.innerHTML = '<strong>Đúng!</strong> ' + q.explain;
        } else {
          expDiv.className = 'p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
          expDiv.innerHTML = '<strong>Chưa chính xác.</strong> ' + q.explain;
        }

        // Color buttons
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
        rankBadge.innerText = 'TRẠNG NGUYÊN KHTN 7';
        rankBadge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300';
        rankTitle.innerText = '🥇 ĐẠT DANH HIỆU TRẠNG NGUYÊN KHOA HỌC';
      } else if (score >= 38) {
        rankBadge.innerText = 'BẢNG NHÃN KHTN 7';
        rankBadge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-300';
        rankTitle.innerText = '🥈 ĐẠT DANH HIỆU BẢNG NHÃN KHOA HỌC';
      } else if (score >= 30) {
        rankBadge.innerText = 'THÁM HOA KHTN 7';
        rankBadge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300';
        rankTitle.innerText = '🥉 ĐẠT DANH HIỆU THÁM HOA KHOA HỌC';
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

const outputPath = path.resolve(__dirname, '../courses/khtn_7.html');
const aliasPath = path.resolve(__dirname, '../courses/science_7.html');

fs.writeFileSync(outputPath, html, 'utf8');
console.log(`Saved khtn_7.html (${html.length} bytes)`);

fs.writeFileSync(aliasPath, html, 'utf8');
console.log(`Saved science_7.html (${html.length} bytes)`);
