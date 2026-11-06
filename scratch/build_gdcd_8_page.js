const fs = require('fs');
const path = require('path');
const { machData, lessonsData } = require('./gdcd8_data.js');
const { examQuestions } = require('./gdcd8_exam.js');

function buildGdcd8Page() {
  console.log(`Building GDCD 8 Page: ${lessonsData.length} lessons, ${machData.length} machs, ${examQuestions.length} exam questions.`);

  // 1. Sidebar Nav HTML
  let sidebarLinks = '';
  machData.forEach(m => {
    const machLessons = lessonsData.filter(l => l.machId === m.id);
    let links = '';
    machLessons.forEach(l => {
      links += `
        <a href="#bai-${l.id}" class="lesson-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 text-gray-700 dark:text-gray-300 text-xs transition group" data-mach="${m.id}" data-id="${l.id}">
          <span class="truncate flex items-center gap-1.5">
            <span class="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[9px] font-bold">${l.id}</span>
            <span class="group-hover:text-blue-600 dark:group-hover:text-blue-400">${l.title.replace(/^Bài\s+\d+\.\s*/i, '')}</span>
          </span>
        </a>
      `;
    });

    sidebarLinks += `
      <div class="mb-3 mach-nav-group" data-mach="${m.id}">
        <div class="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/30 rounded-md mb-1 flex items-center justify-between">
          <span class="truncate">${m.name}</span>
          <span class="text-[9px] px-1 py-0.2 rounded bg-white dark:bg-gray-800 shrink-0 font-mono text-gray-500">${m.lessons}</span>
        </div>
        <div class="pl-1 space-y-0.5">
          ${links}
        </div>
      </div>
    `;
  });

  // 2. Lesson Cards HTML
  let lessonsHtml = '';
  lessonsData.forEach(l => {
    const mach = machData.find(m => m.id === l.machId);

    // Objectives list
    const objList = l.objectives.map(o => `<li>${o}</li>`).join('');

    // Mini Quiz HTML (4 câu/bài)
    const quizItemsHtml = l.quiz.map((q, qIdx) => {
      const optsHtml = q.options.map((opt, optIdx) => `
        <button onclick="checkQuizAnswer(${l.id}, ${qIdx}, ${optIdx}, ${q.ans}, '${q.expl.replace(/'/g, "\\'")}')" 
                class="quiz-btn-${l.id}-${qIdx} w-full text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 text-xs text-gray-800 dark:text-gray-200 transition flex items-center justify-between group">
          <span><strong class="text-blue-600 dark:text-blue-400 mr-1.5">${String.fromCharCode(65 + optIdx)}.</strong> ${opt.replace('(Recommended) ', '')}</span>
          <i class="fa-regular fa-circle text-gray-400 group-hover:text-blue-500 text-xs"></i>
        </button>
      `).join('');

      return `
        <div class="p-3.5 rounded-xl bg-gray-50/70 dark:bg-gray-900/40 border border-gray-200/70 dark:border-gray-700/60 mb-2.5">
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-1.5">
            <span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-[10px] font-bold">Câu ${qIdx + 1}</span>
            <span>${q.q}</span>
          </p>
          <div class="space-y-1.5">
            ${optsHtml}
          </div>
          <div id="feedback-${l.id}-${qIdx}" class="hidden mt-2 p-2 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    }).join('');

    lessonsHtml += `
      <!-- ==================== BÀI ${l.id} ==================== -->
      <section id="bai-${l.id}" class="lesson-section scroll-mt-24 p-5 sm:p-7 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 shadow-sm transition hover:shadow-md mb-8" data-mach="${l.machId}">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-700">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-black text-xs uppercase tracking-wider">${mach ? mach.badge : 'GDCD 8'}</span>
            <span class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold text-xs border border-blue-200 dark:border-blue-800">
              ${l.machName}
            </span>
          </div>
          <span class="text-xs font-bold text-gray-400">Bài ${l.id} / 10 &bull; SGK KNTT</span>
        </div>

        <div class="mb-4">
          <h2 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">${l.id}</span>
            ${l.title}
          </h2>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">${l.desc}</p>
        </div>

        <!-- Khối Mục tiêu bài học -->
        <div class="mb-4 p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs">
          <span class="font-bold text-blue-800 dark:text-blue-300 block mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-bullseye text-blue-600"></i> Mục tiêu cần đạt bài học:
          </span>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            ${objList}
          </ul>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG đầu bài -->
        <div class="mb-5 p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
          <div class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <i class="fa-solid fa-diagram-project text-blue-500"></i> Sơ đồ trực quan tổng quan bài học
          </div>
          ${l.svgHeader}
        </div>

        <!-- Nội dung lý thuyết chuyên sâu kèm HÌNH MINH HỌA TỪNG NỘI DUNG -->
        <div class="mb-6">
          ${l.content}
        </div>

        <!-- Khối Thực hành & Tự đánh giá (4 câu trắc nghiệm) -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question text-blue-600"></i>
              Luyện tập &amp; Tự đánh giá năng lực &bull; Bài ${l.id}
            </h4>
            <span class="text-[11px] text-gray-500">4 câu hỏi trắc nghiệm</span>
          </div>
          <div>
            ${quizItemsHtml}
          </div>
        </div>

      </section>
    `;
  });

  // 3. Exam Questions JSON for frontend
  const examQuestionsJson = JSON.stringify(examQuestions);

  // 4. Assemble Full Page
  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Giáo Dục Công Dân 8 (GDCD Lớp 8 - SGK Kết Nối Tri Thức: 4 Mạch • 10 Bài Học • Hình Minh Họa Từng Nội Dung &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    .dark ::-webkit-scrollbar-thumb {
      background: #475569;
    }
  </style>
</head>

<body class="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="glass-header sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-graduation-cap text-base"></i>
          </div>
          <span class="font-black text-lg text-gray-900 dark:text-white tracking-tight hidden sm:inline">CodeHub</span>
        </a>
        <span class="text-gray-300 dark:text-gray-700 hidden sm:inline">/</span>
        <div class="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400">
          <i class="fa-solid fa-scale-balanced"></i>
          <span>GDCD 8 (Kết Nối Tri Thức)</span>
        </div>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Hotline Khẩn cấp badge -->
        <div class="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/50 text-xs font-bold">
          <i class="fa-solid fa-phone-volume text-red-500 animate-pulse"></i>
          <span>Hotline: 111 &bull; 113 &bull; 114</span>
        </div>

        <!-- Sổ tay kiến thức modal btn -->
        <button onclick="toggleHandbookModal(true)" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold transition flex items-center gap-1.5">
          <i class="fa-solid fa-book-bookmark text-blue-600"></i>
          <span class="hidden sm:inline">Sổ tay GDCD 8</span>
        </button>

        <!-- Đấu trường Trạng Nguyên btn -->
        <a href="#section-exam" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span class="hidden sm:inline">Trạng Nguyên</span>
        </a>

        <!-- Dark Mode Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i id="themeIcon" class="fa-solid fa-moon"></i>
        </button>

        <!-- Mobile Menu Toggle -->
        <button onclick="toggleMobileSidebar()" class="lg:hidden w-9 h-9 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 transition">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- ==================== MAIN LAYOUT ==================== -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex gap-8 items-start">

      <!-- ==================== SIDEBAR (DESKTOP) ==================== -->
      <aside id="desktopSidebar" class="w-72 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto hidden lg:block bg-white dark:bg-gray-800 rounded-3xl p-4 border border-gray-200/80 dark:border-gray-700 shadow-sm">
        <div class="pb-3 mb-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <span class="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">Mục lục 10 Bài Học</span>
          <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">4 Mạch</span>
        </div>

        <!-- Filter theo Mạch -->
        <div class="grid grid-cols-2 gap-1 mb-3 text-[10px] font-bold">
          <button onclick="filterMach('all')" class="mach-filter-btn px-2 py-1 rounded-lg bg-blue-600 text-white text-center transition" data-mach="all">Tất cả</button>
          <button onclick="filterMach('dao-duc')" class="mach-filter-btn px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center hover:bg-gray-200 transition" data-mach="dao-duc">Đạo đức</button>
          <button onclick="filterMach('ky-nang')" class="mach-filter-btn px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center hover:bg-gray-200 transition" data-mach="ky-nang">Kĩ năng</button>
          <button onclick="filterMach('phap-luat')" class="mach-filter-btn px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center hover:bg-gray-200 transition" data-mach="phap-luat">Pháp luật</button>
        </div>

        <nav class="space-y-1">
          ${sidebarLinks}
        </nav>
      </aside>

      <!-- ==================== CONTENT AREA ==================== -->
      <main class="flex-1 min-w-0">

        <!-- HERO BANNER -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white p-6 sm:p-8 mb-8 shadow-md">
          <div class="relative z-10 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold text-blue-200 mb-3">
              <i class="fa-solid fa-award text-amber-300"></i>
              GDPT 2018 &bull; Kết Nối Tri Thức Với Cuộc Sống
            </div>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-2">
              Giáo Dục Công Dân 8
            </h1>
            <p class="text-sm text-blue-100/90 leading-relaxed mb-4">
              Khung kiến thức chuẩn 10 bài học thuộc 4 mạch: <strong>Giáo dục đạo đức, Kĩ năng sống, Kinh tế và Pháp luật</strong>. Tích hợp đầy đủ sơ đồ tư duy trực quan, hình minh họa từng nội dung, 40 câu hỏi tự đánh giá và Đấu trường Trạng Nguyên Công Dân 60:00!
            </p>
            <div class="flex flex-wrap gap-2 text-xs font-semibold">
              <span class="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur flex items-center gap-1.5"><i class="fa-solid fa-layer-group text-blue-300"></i> 4 Mạch nội dung</span>
              <span class="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur flex items-center gap-1.5"><i class="fa-solid fa-book-open text-blue-300"></i> 10 Bài học chuẩn SGK</span>
              <span class="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur flex items-center gap-1.5"><i class="fa-solid fa-palette text-blue-300"></i> 22+ Hình minh họa SVG</span>
              <span class="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur flex items-center gap-1.5"><i class="fa-solid fa-list-check text-blue-300"></i> 40 Trắc nghiệm tự đánh giá</span>
            </div>
          </div>
          <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none"></div>
        </div>

        <!-- BẢN ĐỒ CHƯƠNG TRÌNH 4 MẠCH NỘI DUNG -->
        <div class="mb-8 p-5 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-map-location-dot text-blue-600"></i>
              Bản đồ 4 Mạch chương trình Giáo Dục Công Dân 8
            </h3>
            <span class="text-xs text-gray-400">10 bài học</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-black text-blue-700 dark:text-blue-300 uppercase">Mạch 1: Đạo đức</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-600 text-white font-bold">Bài 1–5</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">Truyền thống dân tộc; đa dạng dân tộc; cần cù, sáng tạo; bảo vệ lẽ phải; bảo vệ môi trường và tài nguyên.</p>
            </div>

            <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-black text-emerald-700 dark:text-emerald-300 uppercase">Mạch 2: Kĩ năng</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold">Bài 6–7</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">Xác định mục tiêu cá nhân theo tiêu chí SMART; phòng ngừa và ứng phó bạo lực gia đình (Hotline 111).</p>
            </div>

            <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-black text-amber-700 dark:text-amber-300 uppercase">Mạch 3: Kinh tế</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-600 text-white font-bold">Bài 8</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">Lập kế hoạch chi tiêu, phân biệt nhu cầu thiết yếu vs mong muốn, quy tắc phân bổ ngân sách 50/30/20.</p>
            </div>

            <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/50">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-black text-rose-700 dark:text-rose-300 uppercase">Mạch 4: Pháp luật</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-rose-600 text-white font-bold">Bài 9–10</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">Phòng ngừa tai nạn vũ khí, cháy nổ, chất độc hại; quyền và nghĩa vụ lao động, bảo vệ lao động trẻ em.</p>
            </div>
          </div>
        </div>

        <!-- DANH SÁCH 10 BÀI HỌC -->
        <div id="lessonsContainer">
          ${lessonsHtml}
        </div>

        <!-- ==================== ĐẤU TRƯỜNG TRẠNG NGUYÊN 60:00 ==================== -->
        <section id="section-exam" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl mb-12">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black mb-1">
                <i class="fa-solid fa-crown"></i> KÌ THI SÁT HẠCH NĂNG LỰC
              </div>
              <h2 class="text-xl sm:text-2xl font-black tracking-tight">Đấu Trường Trạng Nguyên Công Dân 8</h2>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
                <i class="fa-solid fa-stopwatch text-amber-400 text-base"></i>
                <span class="text-xs font-bold">Thời gian:</span>
                <span id="examTimer" class="font-mono text-base font-black text-amber-300">60:00</span>
              </div>
            </div>
          </div>

          <!-- Exam Intro Screen -->
          <div id="examIntro" class="text-center py-6 max-w-lg mx-auto">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 text-2xl shadow-lg">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <h3 class="text-lg font-black mb-2">Thử Thách 20 Câu Hỏi Tổng Hợp Toàn Môn</h3>
            <p class="text-xs text-blue-200 leading-relaxed mb-6">
              Bộ đề kiểm tra tổng hợp kiến thức cả 4 mạch: Đạo đức, Kĩ năng sống, Kinh tế và Pháp luật. Thời gian làm bài 60 phút. Tự động chấm điểm và vinh danh danh hiệu Trạng Nguyên!
            </p>
            <button onclick="startExam()" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition transform hover:scale-105">
              <i class="fa-solid fa-play mr-2"></i> Bắt đầu thi ngay
            </button>
          </div>

          <!-- Exam Questions Container -->
          <div id="examBody" class="hidden space-y-5">
            <div id="examQuestionsList" class="space-y-4"></div>
            <div class="text-center pt-4 border-t border-white/10">
              <button onclick="submitExam()" class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm shadow-lg shadow-emerald-500/20 transition transform hover:scale-105">
                <i class="fa-solid fa-check-circle mr-2"></i> Nộp bài &amp; Xem kết quả
              </button>
            </div>
          </div>

          <!-- Exam Result Screen -->
          <div id="examResult" class="hidden text-center py-8 max-w-md mx-auto">
            <div id="resultIcon" class="w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center text-4xl shadow-xl"></div>
            <h3 id="resultTitle" class="text-2xl font-black mb-2"></h3>
            <p id="resultScore" class="text-3xl font-black text-amber-300 font-mono mb-2"></p>
            <p id="resultRank" class="text-sm font-bold text-blue-200 mb-6"></p>
            <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition">
              <i class="fa-solid fa-rotate-right mr-1.5"></i> Làm lại bài thi
            </button>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- ==================== SỔ TAY HANDBOOK MODAL ==================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-gray-900 dark:text-white">Sổ Tay Cốt Lõi Giáo Dục Công Dân 8</h3>
            <span class="text-xs text-gray-400">Tra cứu nhanh nguyên tắc, định lí &amp; đường dây nóng khẩn cấp</span>
          </div>
        </div>
        <button onclick="toggleHandbookModal(false)" class="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        <!-- Hotline khẩn cấp -->
        <div class="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-800 dark:text-red-300 text-xs uppercase mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-phone-volume text-red-600"></i> Bảng các đường dây nóng quốc gia khẩn cấp (Miễn phí 24/7)
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-red-100 dark:border-red-900">
              <strong class="text-red-600 text-sm block">111</strong>
              <span class="text-[11px] text-gray-500">Bảo vệ trẻ em</span>
            </div>
            <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-red-100 dark:border-red-900">
              <strong class="text-blue-600 text-sm block">113</strong>
              <span class="text-[11px] text-gray-500">Cảnh sát khẩn cấp</span>
            </div>
            <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-red-100 dark:border-red-900">
              <strong class="text-amber-600 text-sm block">114</strong>
              <span class="text-[11px] text-gray-500">Cứu hỏa PCCC</span>
            </div>
            <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-red-100 dark:border-red-900">
              <strong class="text-emerald-600 text-sm block">115</strong>
              <span class="text-[11px] text-gray-500">Cấp cứu y tế</span>
            </div>
          </div>
        </div>

        <!-- Nguyên tắc SMART -->
        <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-800 dark:text-blue-300 text-xs uppercase mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-bullseye text-blue-600"></i> Nguyên tắc xác định mục tiêu SMART
          </h4>
          <p class="leading-relaxed"><strong>S</strong> (Cụ thể) &bull; <strong>M</strong> (Đo lường được) &bull; <strong>A</strong> (Khả thi vừa sức) &bull; <strong>R</strong> (Phù hợp thực tế) &bull; <strong>T</strong> (Thời hạn chót rõ ràng).</p>
        </div>

        <!-- 4 Hình thức bạo lực gia đình -->
        <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-800 dark:text-rose-300 text-xs uppercase mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-hand-fist text-rose-600"></i> 4 Hình thức bạo lực gia đình
          </h4>
          <p>1. <strong>Thể chất:</strong> Đánh đập, ngược đãi &bull; 2. <strong>Tinh thần:</strong> Lăng mạ, sỉ nhục, cô lập &bull; 3. <strong>Kinh tế:</strong> Tước đoạt tài sản, ép buộc lệ thuộc &bull; 4. <strong>Tình dục:</strong> Cưỡng ép trái ý muốn.</p>
        </div>

        <!-- Quy tắc chi tiêu 50/30/20 -->
        <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-800 dark:text-amber-300 text-xs uppercase mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-wallet text-amber-600"></i> Quy tắc tài chính 50/30/20
          </h4>
          <p><strong>50%</strong> Nhu cầu thiết yếu (ăn uống, học tập bắt buộc) &bull; <strong>30%</strong> Mong muốn sở thích (giải trí, quà vặt) &bull; <strong>20%</strong> Tiết kiệm và quỹ dự phòng phát sinh.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== FRONTEND JAVASCRIPT ==================== -->
  <script>
    // 1. Dark Mode
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }

    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    }

    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    // 2. Filter theo Mạch
    function filterMach(machId) {
      const buttons = document.querySelectorAll('.mach-filter-btn');
      buttons.forEach(btn => {
        if (btn.getAttribute('data-mach') === machId) {
          btn.className = 'mach-filter-btn px-2 py-1 rounded-lg bg-blue-600 text-white text-center transition';
        } else {
          btn.className = 'mach-filter-btn px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center hover:bg-gray-200 transition';
        }
      });

      const sections = document.querySelectorAll('.lesson-section');
      sections.forEach(sec => {
        if (machId === 'all' || sec.getAttribute('data-mach') === machId) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
    }

    // 3. Mini Quiz Check
    function checkQuizAnswer(lessonId, questionIdx, selectedIdx, correctIdx, explanation) {
      const btns = document.querySelectorAll('.quiz-btn-' + lessonId + '-' + questionIdx);
      btns.forEach((btn, idx) => {
        btn.disabled = true;
        const icon = btn.querySelector('i');
        if (idx === correctIdx) {
          btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-200');
          if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-600';
        } else if (idx === selectedIdx) {
          btn.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-800', 'dark:text-rose-200');
          if (icon) icon.className = 'fa-solid fa-circle-xmark text-rose-600';
        }
      });

      const fb = document.getElementById('feedback-' + lessonId + '-' + questionIdx);
      if (fb) {
        fb.classList.remove('hidden');
        const isRight = selectedIdx === correctIdx;
        fb.className = isRight 
          ? 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
          : 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        fb.innerHTML = (isRight ? '<strong><i class="fa-solid fa-check mr-1"></i>Chính xác!</strong> ' : '<strong><i class="fa-solid fa-xmark mr-1"></i>Chưa đúng!</strong> ') + explanation;
      }
    }

    // 4. Sổ tay Handbook Modal
    function toggleHandbookModal(show) {
      const modal = document.getElementById('handbookModal');
      if (modal) {
        if (show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
      }
    }

    // 5. Đấu trường Trạng Nguyên Exam
    const examQuestions = ${examQuestionsJson};
    let examAnswers = {};
    let examTimerInterval = null;
    let timeLeft = 3600; // 60 phút

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      document.getElementById('examBody').classList.remove('hidden');
      document.getElementById('examResult').classList.add('hidden');

      // Render Questions
      const listEl = document.getElementById('examQuestionsList');
      listEl.innerHTML = examQuestions.map((q, idx) => {
        const opts = q.options.map((opt, oIdx) => \`
          <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer text-xs transition">
            <input type="radio" name="exam_q_\${idx}" value="\${oIdx}" onchange="selectExamAns(\${idx}, \${oIdx})" class="text-blue-500 focus:ring-0">
            <span>\${opt}</span>
          </label>
        \`).join('');

        return \`
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p class="text-xs sm:text-sm font-bold text-white mb-3">
              <span class="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-black mr-2">Câu \${idx + 1}</span>
              \${q.q}
            </p>
            <div class="space-y-2">
              \${opts}
            </div>
          </div>
        \`;
      }).join('');

      // Start Countdown
      timeLeft = 3600;
      updateTimerDisplay();
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function selectExamAns(qIdx, oIdx) {
      examAnswers[qIdx] = oIdx;
    }

    function updateTimerDisplay() {
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      document.getElementById('examTimer').innerText = 
        String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);

      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (examAnswers[idx] === q.ans) {
          score++;
        }
      });

      document.getElementById('examBody').classList.add('hidden');
      document.getElementById('examResult').classList.remove('hidden');

      const iconEl = document.getElementById('resultIcon');
      const titleEl = document.getElementById('resultTitle');
      const scoreEl = document.getElementById('resultScore');
      const rankEl = document.getElementById('resultRank');

      scoreEl.innerText = score + ' / ' + examQuestions.length + ' Điểm';

      if (score >= 18) {
        iconEl.className = 'w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-4xl text-amber-300 shadow-xl';
        iconEl.innerHTML = '<i class="fa-solid fa-crown"></i>';
        titleEl.innerText = 'Xuất Sắc! Danh Hiệu TRẠNG NGUYÊN';
        rankEl.innerText = 'Bạn có hiểu biết sâu sắc và toàn diện về Đạo đức, Kĩ năng sống và Pháp luật lớp 8!';
      } else if (score >= 14) {
        iconEl.className = 'w-20 h-20 mx-auto mb-4 rounded-3xl bg-blue-400/20 border border-blue-400/40 flex items-center justify-center text-4xl text-blue-300 shadow-xl';
        iconEl.innerHTML = '<i class="fa-solid fa-award"></i>';
        titleEl.innerText = 'Giỏi! Danh Hiệu BẢNG NHÃN';
        rankEl.innerText = 'Kết quả rất tốt! Nắm vững hầu hết các chuẩn mực đạo đức và quy định pháp luật.';
      } else if (score >= 10) {
        iconEl.className = 'w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center text-4xl text-emerald-300 shadow-xl';
        iconEl.innerHTML = '<i class="fa-solid fa-medal"></i>';
        titleEl.innerText = 'Khá! Danh Hiệu THÁM HOA';
        rankEl.innerText = 'Bạn đã đạt yêu cầu cơ bản, hãy ôn tập thêm các kĩ năng ứng phó và tình huống pháp luật nhé!';
      } else {
        iconEl.className = 'w-20 h-20 mx-auto mb-4 rounded-3xl bg-rose-400/20 border border-rose-400/40 flex items-center justify-center text-4xl text-rose-300 shadow-xl';
        iconEl.innerHTML = '<i class="fa-solid fa-book"></i>';
        titleEl.innerText = 'Cố Gắng Lên! Cần Ôn Tập Thêm';
        rankEl.innerText = 'Hãy đọc kĩ lại bài học và sổ tay kiến thức để làm tốt hơn ở lần sau!';
      }
    }

    function resetExam() {
      examAnswers = {};
      document.getElementById('examResult').classList.add('hidden');
      document.getElementById('examIntro').classList.remove('hidden');
      document.getElementById('examTimer').innerText = '60:00';
    }
  </script>

</body>
</html>`;

  // Write files
  const p1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_8.html';
  const p2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/civics_8.html';

  fs.writeFileSync(p1, fullHtml, 'utf8');
  fs.writeFileSync(p2, fullHtml, 'utf8');

  console.log(`✅ Successfully written: ${p1} (${fullHtml.length} bytes)`);
  console.log(`✅ Successfully written: ${p2} (${fullHtml.length} bytes)`);
}

buildGdcd8Page();
