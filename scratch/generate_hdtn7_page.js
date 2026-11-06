const fs = require('fs');
const path = require('path');

const topicsP1 = require('./hdtn7_topics_1_5.js');
const topicsP2 = require('./hdtn7_topics_6_10.js');
const examQuestions = require('./hdtn7_exam_questions.js');

const allTopics = [...topicsP1, ...topicsP2];
console.log(`Loaded ${allTopics.length} topics and ${examQuestions.length} exam questions.`);

function buildHtml() {
  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hoạt Động Trải Nghiệm, Hướng Nghiệp Lớp 7 | Kết Nối Tri Thức | CodeHub THCS</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: { 50: '#fdf2f8', 100: '#fce7f3', 500: '#ec4899', 600: '#db2777', 700: '#be185d' },
            secondary: { 50: '#fff7ed', 100: '#ffedd5', 500: '#f97316', 600: '#ea580c', 700: '#c2410c' }
          }
        }
      }
    }
  </script>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    body { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; }
    @media print {
      body * { visibility: hidden; }
      #printableJournalArea, #printableJournalArea * { visibility: visible; }
      #printableJournalArea { position: absolute; left: 0; top: 0; width: 100%; }
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-200">

  <!-- ==================== HEADER (STICKY) ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 font-black text-sm group-hover:scale-105 transition">
            TN
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400 uppercase">CodeHub THCS</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">KNTT</span>
            </div>
            <div class="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
              TRẢI NGHIỆM & HƯỚNG NGHIỆP 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">• GDPT 2018</span>
            </div>
          </div>
        </a>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold flex items-center gap-1.5 transition">
          <i class="fa-solid fa-book-bookmark text-rose-500"></i>
          <span class="hidden md:inline">Sổ Tay 10 Phẩm Chất</span>
        </button>

        <button onclick="openJournalModal()" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center gap-1.5 transition">
          <i class="fa-solid fa-pen-nib text-blue-500"></i>
          <span class="hidden md:inline">Phiếu Trải Nghiệm</span>
        </button>

        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-bold shadow-md shadow-rose-500/20 flex items-center gap-1.5 transition">
          <i class="fa-solid fa-trophy"></i>
          <span>Trạng Nguyên 60:00</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="themeToggleBtn" onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition" title="Đổi giao diện sáng/tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- ==================== HERO SECTION ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 text-white py-12 px-4 sm:px-6">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3">
            <i class="fa-solid fa-compass"></i>
            <span>Chương trình GDPT 2018 • SGK Kết nối tri thức với cuộc sống (Mã G3HH7Q001a26)</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-black tracking-tight mb-3">
            Hoạt Động Trải Nghiệm, Hướng Nghiệp Lớp 7
          </h1>
          <p class="text-sm sm:text-base text-rose-100 leading-relaxed mb-4">
            Khóa học trực tuyến chuẩn kiến thức cốt lõi qua 9 chủ đề rèn luyện: Hướng vào bản thân, Hướng đến xã hội, Hướng đến tự nhiên và Hướng nghiệp. Tích hợp sơ đồ tư duy SVG, hình minh họa tình huống, phiếu trải nghiệm 8 mục và Đấu trường Trạng Nguyên 60:00.
          </p>
          <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold">
            <span class="px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-layer-group text-amber-300"></i> 9 Chủ đề rèn luyện
            </span>
            <span class="px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-hourglass-half text-amber-300"></i> 105 Tiết thực hành
            </span>
            <span class="px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project text-amber-300"></i> 4 Mạch nội dung
            </span>
            <span class="px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-list-check text-amber-300"></i> Đạt / Chưa đạt chuẩn
            </span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto">
          <a href="#chu-de-1" class="px-5 py-2.5 rounded-xl bg-white text-rose-600 hover:bg-rose-50 font-bold text-xs shadow-lg text-center transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-play"></i> Bắt đầu học ngay
          </a>
          <button onclick="openJournalModal()" class="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur-md border border-white/20 text-center transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-pen-to-square"></i> Mẫu phiếu trải nghiệm
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTAINER ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

      <!-- ==================== SIDEBAR ==================== -->
      <aside class="lg:col-span-1 lg:sticky lg:top-20 space-y-4">
        <!-- Search & Filter Card -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div class="relative mb-3">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-xs text-gray-400"></i>
            <input type="text" id="topicSearchInput" oninput="filterTopics()" placeholder="Tìm kiếm bài học, từ khóa..." class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs focus:outline-none focus:border-rose-500 dark:focus:border-rose-400 transition">
          </div>

          <!-- Progress -->
          <div class="mb-4">
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="font-bold text-gray-700 dark:text-gray-300">Tiến độ hoàn thành:</span>
              <span id="progressText" class="font-extrabold text-rose-600 dark:text-rose-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Circuit Filters -->
          <div class="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Lọc theo mạch nội dung:</div>
          <div class="flex flex-wrap gap-1.5 mb-2">
            <button onclick="setCircuitFilter('all')" class="circuit-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-600 text-white transition" data-filter="all">Tất cả</button>
            <button onclick="setCircuitFilter('BẢN THÂN')" class="circuit-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition" data-filter="BẢN THÂN">Bản thân</button>
            <button onclick="setCircuitFilter('XÃ HỘI')" class="circuit-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition" data-filter="XÃ HỘI">Xã hội</button>
            <button onclick="setCircuitFilter('TỰ NHIÊN')" class="circuit-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition" data-filter="TỰ NHIÊN">Tự nhiên</button>
            <button onclick="setCircuitFilter('HƯỚNG NGHIỆP')" class="circuit-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition" data-filter="HƯỚNG NGHIỆP">Hướng nghiệp</button>
          </div>
        </div>

        <!-- Topic Navigation Links -->
        <div class="p-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm max-h-[50vh] overflow-y-auto custom-scrollbar">
          <nav class="space-y-1" id="topicNavList">
            ${allTopics.map(t => `
              <a href="#${t.id}" class="nav-topic-link flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition group" data-topic-id="${t.id}" data-circuit="${t.circuitTag}">
                <div class="flex items-center gap-2 truncate">
                  <span class="w-1.5 h-1.5 rounded-full ${t.circuitColor}"></span>
                  <span class="truncate group-hover:text-rose-600 dark:group-hover:text-rose-400">${t.num}: ${t.title.split('. ')[1] || t.title}</span>
                </div>
                <i class="fa-regular fa-circle-check text-gray-300 dark:text-gray-600 topic-check-icon text-xs"></i>
              </a>
            `).join('')}
          </nav>
        </div>

        <!-- Trạng Nguyên Exam CTA Box -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-rose-300 dark:border-rose-900/50 shadow-sm text-center">
          <i class="fa-solid fa-award text-2xl text-amber-500 mb-2"></i>
          <h4 class="font-black text-sm text-gray-900 dark:text-white mb-1">Đấu Trường Trạng Nguyên</h4>
          <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">40 câu hỏi trắc nghiệm thử thách bao quát 9 chủ đề • 60 phút</p>
          <button onclick="openExamModal()" class="w-full py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold text-xs shadow-md transition">
            Vào thi ngay
          </button>
        </div>
      </aside>

      <!-- ==================== MAIN CONTENT ==================== -->
      <div class="lg:col-span-3 space-y-8" id="topicCardsContainer">
        ${allTopics.map((t, idx) => `
          <!-- CARD: ${t.title} -->
          <article id="${t.id}" class="topic-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm transition-all" data-circuit="${t.circuitTag}" data-title="${t.title.toLowerCase()}">
            <!-- Badge & Pages Header -->
            <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-lg text-[11px] font-black text-white ${t.circuitColor} uppercase tracking-wider">
                  Mạch: ${t.circuit}
                </span>
                <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  <i class="fa-solid fa-book-open mr-1"></i>${t.pages}
                </span>
              </div>
              <span class="text-xs font-bold text-gray-400">Chủ đề 0${idx + 1}/10</span>
            </div>

            <!-- Topic Heading & Objective -->
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
              ${t.title}
            </h2>
            <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-300 mb-6 flex items-start gap-2.5">
              <i class="fa-solid fa-bullseye text-amber-600 mt-0.5"></i>
              <div>
                <strong>Mục tiêu yêu cầu cần đạt:</strong> ${t.objective}
              </div>
            </div>

            <!-- Mindmap Nodes -->
            <div class="mb-6">
              <div class="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-sitemap"></i> Sơ đồ tư duy kiến thức cốt lõi
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                ${t.mindmap.nodes.map(n => `
                  <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:border-rose-400 dark:hover:border-rose-500 transition">
                    <div class="text-xs font-black uppercase mb-1" style="color: ${n.color}">${n.title}</div>
                    <div class="text-[11.5px] text-gray-600 dark:text-gray-400 leading-relaxed">${n.desc}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- SVG Illustration -->
            ${t.illustration}

            <!-- Topic Content Sections -->
            <div class="space-y-6 my-6">
              ${t.sections.map(s => `
                <div class="topic-section">
                  <h3 class="text-base font-extrabold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                    ${s.title}
                  </h3>
                  <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-100 dark:border-gray-800">
                    ${s.content}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Quiz Section -->
            <div class="my-6 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800">
              <div class="text-xs font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2">
                <i class="fa-solid fa-circle-question"></i> Thử thách trắc nghiệm nhanh (Tự chấm điểm)
              </div>
              <div class="space-y-4">
                ${t.quiz.map((q, qIdx) => `
                  <div class="quiz-item" data-answered="false">
                    <p class="text-xs font-bold text-gray-800 dark:text-gray-200 mb-2">
                      Câu ${qIdx + 1}: ${q.question}
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      ${q.options.map((opt, optIdx) => `
                        <button onclick="checkTopicQuiz(this, ${optIdx}, ${q.answer}, '${q.explain.replace(/'/g, "\\'")}')" class="quiz-opt-btn p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-left hover:border-rose-400 dark:hover:border-rose-500 text-gray-700 dark:text-gray-300 transition">
                          <span class="font-bold text-gray-400 mr-1.5">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
                        </button>
                      `).join('')}
                    </div>
                    <div class="quiz-feedback hidden mt-2 p-2.5 rounded-xl text-xs"></div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Self-Assessment Checklist -->
            <div class="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
              <div class="flex items-center justify-between mb-2">
                <div class="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-clipboard-check"></i> Tiêu chí Tự Đánh Giá (Mức Đạt / Chưa Đạt)
                </div>
                <span class="text-[10px] text-gray-500 dark:text-gray-400 italic">Tích chọn để ghi nhận tiến độ</span>
              </div>
              <div class="space-y-2 mt-2">
                ${t.checklist.map((item, chkIdx) => `
                  <label class="flex items-start gap-2.5 p-2 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-rose-50/30 transition">
                    <input type="checkbox" onchange="toggleCheckItem('${t.id}', ${chkIdx})" id="chk_${t.id}_${chkIdx}" class="mt-0.5 rounded text-rose-600 focus:ring-rose-500">
                    <span class="leading-tight">${item}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </article>
        `).join('')}
      </div>

    </div>
  </main>

  <!-- ==================== MODAL 1: SỔ TAY 10 PHẨM CHẤT CỐT LÕI ==================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-rose-50/50 dark:bg-rose-950/20">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-xs">
            <i class="fa-solid fa-gem"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-sm text-gray-900 dark:text-white">Cẩm Nang 10 Phẩm Chất Cốt Lõi Của Học Sinh THCS</h3>
            <span class="text-[11px] text-gray-500 dark:text-gray-400">Chuẩn mực đạo đức & định hướng nghề tương lai</span>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-500 dark:text-gray-300 flex items-center justify-center">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto custom-scrollbar space-y-3 text-xs text-gray-700 dark:text-gray-300">
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">1. Trung thực</strong>
          Tôn trọng sự thật, không gian dối trong học tập (không quay cóp, không nhận bài của người khác); dũng cảm nhận lỗi khi làm sai.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">2. Tự trọng</strong>
          Giữ gìn phẩm giá, danh dự bản thân; cư xử đúng mực, giữ đúng lời hứa; không làm điều khuất tất để vụ lợi cá nhân.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">3. Tự lực</strong>
          Chủ động suy nghĩ, tìm tòi và tự hoàn thành công việc của mình; không trông chờ, ỷ lại vào cha mẹ hoặc bạn bè.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">4. Tự chủ</strong>
          Làm chủ suy nghĩ, cảm xúc và hành vi của bản thân trong mọi tình huống; ứng xử hòa nhã, lịch sự, không bốc đồng.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">5. Cẩn thận</strong>
          Làm việc chu đáo, tỉ mỉ, kiểm tra kĩ lưỡng các khâu trước khi hoàn tất nhằm đảm bảo tính chính xác và an toàn tuyệt đối.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">6. Chăm chỉ, vượt khó</strong>
          Siêng năng, kiên trì theo đuổi mục tiêu đến cùng; không nản lòng trước thất bại tạm thời; nỗ lực vươn lên trong cuộc sống.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">7. Tự hoàn thiện</strong>
          Ý thức rõ ưu điểm và khuyết điểm; khiêm tốn lắng nghe góp ý và có kế hoạch tự rèn luyện để bản thân ngày càng tiến bộ.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">8. Tự nguyện</strong>
          Chủ động, tích cực tham gia các phong trào vì cộng đồng, giúp đỡ người hoạn nạn với tinh thần vui vẻ, không vụ lợi.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">9. Chấp hành kỉ luật</strong>
          Hiểu rõ và nghiêm túc tuân theo nội quy lớp học, quy định của nhà trường và nền nếp kỷ cương của tập thể.
        </div>
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border">
          <strong class="text-rose-600 dark:text-rose-400 text-sm block mb-1">10. Tuân thủ pháp luật</strong>
          Sống và làm việc theo Hiến pháp và pháp luật; tích cực đấu tranh ngăn ngừa các hành vi vi phạm pháp luật xã hội.
        </div>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end bg-gray-50 dark:bg-gray-950">
        <button onclick="closeHandbookModal()" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs">
          Đã hiểu & Đóng lại
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 2: PHIẾU GHI NHẬN HOẠT ĐỘNG TRẢI NGHIỆM ==================== -->
  <div id="journalModal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-blue-50/50 dark:bg-blue-950/20">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            <i class="fa-solid fa-pen"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-sm text-gray-900 dark:text-white">Phiếu Ghi Nhận Hoạt Động Trải Nghiệm (8 Mục Chuẩn SGK)</h3>
            <span class="text-[11px] text-gray-500 dark:text-gray-400">Lưu trữ minh chứng & bài học sau mỗi buổi trải nghiệm</span>
          </div>
        </div>
        <button onclick="closeJournalModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-500 dark:text-gray-300 flex items-center justify-center">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto custom-scrollbar space-y-4 text-xs" id="printableJournalArea">
        <div class="text-center pb-2 border-b">
          <h2 class="text-base font-black uppercase text-gray-900 dark:text-white">PHIẾU BÁO CÁO KẾT QUẢ HOẠT ĐỘNG TRẢI NGHIỆM</h2>
          <p class="text-gray-500 text-[11px]">Học sinh: ............................................ Lớp: 7...... Trường: ............................................</p>
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">1. Chủ đề / Tình huống trải nghiệm:</label>
          <input type="text" id="j_theme" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Ví dụ: Dự án chăm sóc người thân ốm hoặc Chiến dịch truyền thông xanh...">
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">2. Mục tiêu của em:</label>
          <input type="text" id="j_goal" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Mục tiêu cụ thể muốn đạt được...">
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">3. Việc em đã làm:</label>
          <textarea id="j_actions" rows="2" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Các thao tác, hành động cụ thể đã tiến hành..."></textarea>
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">4. Người em đã phối hợp / tìm kiếm hỗ trợ:</label>
          <input type="text" id="j_helpers" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Thầy cô, cha mẹ, các bạn trong nhóm...">
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">5. Kết quả / Minh chứng đạt được:</label>
          <input type="text" id="j_results" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Sản phẩm, bức ảnh, phiếu điểm hoặc lời cảm ơn...">
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">6. Khó khăn gặp phải & Cách điều chỉnh:</label>
          <textarea id="j_issues" rows="2" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Khó khăn nảy sinh và cách giải quyết..."></textarea>
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">7. Điều em rút ra (Bài học kinh nghiệm):</label>
          <textarea id="j_lessons" rows="2" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Điều tâm đắc nhất em học được..."></textarea>
        </div>

        <div>
          <label class="font-bold text-gray-800 dark:text-gray-200 block mb-1">8. Việc em sẽ tiếp tục rèn luyện:</label>
          <input type="text" id="j_next" class="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs" placeholder="Hành động cụ thể cam kết duy trì trong thời gian tới...">
        </div>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-950">
        <button onclick="saveJournalDraft()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5">
          <i class="fa-solid fa-floppy-disk"></i> Lưu bản nháp
        </button>
        <div class="flex items-center gap-2">
          <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5">
            <i class="fa-solid fa-print"></i> In phiếu
          </button>
          <button onclick="closeJournalModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 text-gray-700 dark:text-gray-200 font-bold text-xs">
            Đóng
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 3: ĐẤU TRƯỜNG TRẠNG NGUYÊN 60:00 ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 hidden bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Exam Header -->
      <div class="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-amber-500/10 to-rose-500/10">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 text-white flex items-center justify-center font-bold text-sm shadow">
            <i class="fa-solid fa-crown"></i>
          </div>
          <div>
            <h3 class="font-black text-sm sm:text-base text-gray-900 dark:text-white">Đấu Trường Trạng Nguyên Trải Nghiệm 7</h3>
            <span class="text-[11px] text-gray-500 dark:text-gray-400">40 câu hỏi trắc nghiệm khách quan • 60:00 phút</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-rose-600 text-white font-mono font-black text-xs sm:text-sm flex items-center gap-2 shadow">
            <i class="fa-solid fa-clock"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-500 dark:text-gray-300 flex items-center justify-center">
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6" id="examQuestionsContainer">
        <!-- Rendered via JS -->
      </div>

      <!-- Exam Result Banner (Hidden initially) -->
      <div id="examResultBanner" class="hidden p-6 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-800 dark:to-gray-900 border-t border-rose-200 dark:border-rose-900">
        <div class="text-center space-y-2">
          <div id="examBadgeIcon" class="text-4xl text-amber-500">🏆</div>
          <h4 id="examResultTitle" class="text-lg font-black text-gray-900 dark:text-white">Chúc mừng Trạng Nguyên!</h4>
          <p id="examScoreDetail" class="text-sm font-bold text-rose-600 dark:text-rose-400"></p>
          <p id="examFeedbackText" class="text-xs text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed"></p>
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-950">
        <span class="text-xs text-gray-500" id="examAnsweredCount">Đã làm: 0/40 câu</span>
        <div class="flex items-center gap-2">
          <button id="examSubmitBtn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold text-xs shadow transition">
            Nộp bài thi
          </button>
          <button id="examResetBtn" onclick="resetExam()" class="hidden px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 text-gray-800 dark:text-gray-200 font-bold text-xs transition">
            Thi lại
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6 transition-colors">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-200 hover:text-rose-600 transition">
          <div class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center text-[10px] font-black">TN</div>
          <span>CodeHub THCS • Nền Tảng Học Tập Trực Tuyến</span>
        </a>
      </div>
      <div class="text-center md:text-right">
        Hoạt động trải nghiệm, hướng nghiệp 7 • Kết nối tri thức với cuộc sống (Mã SGK G3HH7Q001a26) • GDPT 2018
      </div>
    </div>
  </footer>

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Dark mode state
    function initTheme() {
      if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    initTheme();

    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    // Mini Quiz Handler
    function checkTopicQuiz(btn, chosenIdx, correctIdx, explanation) {
      const parent = btn.closest('.quiz-item');
      if (parent.getAttribute('data-answered') === 'true') return;
      parent.setAttribute('data-answered', 'true');

      const buttons = parent.querySelectorAll('.quiz-opt-btn');
      buttons.forEach((b, idx) => {
        if (idx === correctIdx) {
          b.classList.add('bg-emerald-100', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200', 'font-bold');
        } else if (idx === chosenIdx && chosenIdx !== correctIdx) {
          b.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200');
        }
      });

      const feedback = parent.querySelector('.quiz-feedback');
      feedback.classList.remove('hidden');
      if (chosenIdx === correctIdx) {
        feedback.classList.add('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-800', 'dark:text-emerald-200', 'border', 'border-emerald-200');
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i><strong>Chính xác!</strong> ' + explanation;
      } else {
        feedback.classList.add('bg-rose-50', 'dark:bg-rose-900/30', 'text-rose-800', 'dark:text-rose-200', 'border', 'border-rose-200');
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mr-1.5"></i><strong>Chưa chính xác!</strong> ' + explanation;
      }
    }

    // Checklist Progress Handler
    function toggleCheckItem(topicId, itemIdx) {
      const key = 'hdtn7_chk_' + topicId + '_' + itemIdx;
      const isChecked = document.getElementById('chk_' + topicId + '_' + itemIdx).checked;
      localStorage.setItem(key, isChecked ? '1' : '0');
      updateProgress();
    }

    function loadChecklistState() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="chk_"]');
      checkboxes.forEach(chk => {
        const key = 'hdtn7_' + chk.id;
        if (localStorage.getItem(key) === '1') {
          chk.checked = true;
        }
      });
      updateProgress();
    }

    function updateProgress() {
      const total = document.querySelectorAll('input[type="checkbox"][id^="chk_"]').length;
      if (total === 0) return;
      const checked = document.querySelectorAll('input[type="checkbox"][id^="chk_"]:checked').length;
      const percent = Math.round((checked / total) * 100);

      document.getElementById('progressText').textContent = percent + '%';
      document.getElementById('progressBar').style.width = percent + '%';

      // Update topic check icons
      const topics = document.querySelectorAll('.topic-card');
      topics.forEach(t => {
        const tid = t.id;
        const topicChecks = t.querySelectorAll('input[type="checkbox"]');
        const topicDone = Array.from(topicChecks).every(c => c.checked);
        const navLink = document.querySelector('.nav-topic-link[data-topic-id="' + tid + '"]');
        if (navLink) {
          const icon = navLink.querySelector('.topic-check-icon');
          if (topicDone && topicChecks.length > 0) {
            icon.classList.remove('fa-regular', 'fa-circle-check', 'text-gray-300', 'dark:text-gray-600');
            icon.classList.add('fa-solid', 'fa-circle-check', 'text-emerald-500');
          } else {
            icon.classList.remove('fa-solid', 'text-emerald-500');
            icon.classList.add('fa-regular', 'fa-circle-check', 'text-gray-300', 'dark:text-gray-600');
          }
        }
      });
    }

    // Filter Topics Handler
    function filterTopics() {
      const query = document.getElementById('topicSearchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.topic-card');
      cards.forEach(c => {
        const title = c.getAttribute('data-title') || '';
        const text = c.innerText.toLowerCase();
        if (title.includes(query) || text.includes(query)) {
          c.style.display = 'block';
        } else {
          c.style.display = 'none';
        }
      });
    }

    function setCircuitFilter(circuit) {
      document.querySelectorAll('.circuit-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === circuit) {
          btn.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-400');
          btn.classList.add('bg-rose-600', 'text-white');
        } else {
          btn.classList.remove('bg-rose-600', 'text-white');
          btn.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-400');
        }
      });

      const cards = document.querySelectorAll('.topic-card');
      cards.forEach(c => {
        const cardCircuit = c.getAttribute('data-circuit');
        if (circuit === 'all' || cardCircuit === circuit) {
          c.style.display = 'block';
        } else {
          c.style.display = 'none';
        }
      });
    }

    // Modal Handlers
    function openHandbookModal() { document.getElementById('handbookModal').classList.remove('hidden'); }
    function closeHandbookModal() { document.getElementById('handbookModal').classList.add('hidden'); }

    function openJournalModal() {
      loadJournalDraft();
      document.getElementById('journalModal').classList.remove('hidden');
    }
    function closeJournalModal() { document.getElementById('journalModal').classList.add('hidden'); }

    function saveJournalDraft() {
      const fields = ['j_theme', 'j_goal', 'j_actions', 'j_helpers', 'j_results', 'j_issues', 'j_lessons', 'j_next'];
      fields.forEach(f => {
        const val = document.getElementById(f).value;
        localStorage.setItem('hdtn7_draft_' + f, val);
      });
      alert('Đã lưu bản nháp phiếu trải nghiệm thành công!');
    }

    function loadJournalDraft() {
      const fields = ['j_theme', 'j_goal', 'j_actions', 'j_helpers', 'j_results', 'j_issues', 'j_lessons', 'j_next'];
      fields.forEach(f => {
        const saved = localStorage.getItem('hdtn7_draft_' + f);
        if (saved) document.getElementById(f).value = saved;
      });
    }

    // ==================== EXAM LOGIC ====================
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let examTimerInterval = null;
    let examTimeLeft = 3600; // 60 minutes
    let userExamAnswers = {};

    function openExamModal() {
      renderExamQuestions();
      document.getElementById('examModal').classList.remove('hidden');
      startExamTimer();
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function renderExamQuestions() {
      const container = document.getElementById('examQuestionsContainer');
      let html = '';
      for (let i = 0; i < examQuestionsData.length; i++) {
        const q = examQuestionsData[i];
        html += '<div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-xs exam-card" id="exam_card_' + i + '">';
        html += '<div class="font-bold text-gray-900 dark:text-white mb-2 leading-relaxed">';
        html += '<span class="text-rose-600 mr-1.5 font-extrabold">Câu ' + (i + 1) + ':</span>' + q.q;
        html += '</div>';
        html += '<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">';
        for (let j = 0; j < q.options.length; j++) {
          const letter = String.fromCharCode(65 + j);
          html += '<button type="button" onclick="selectExamOption(' + i + ', ' + j + ')" class="exam-opt-btn text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-amber-400 transition" id="exam_opt_' + i + '_' + j + '">';
          html += '<span class="font-bold text-gray-400 mr-1">' + letter + '.</span> ' + q.options[j];
          html += '</button>';
        }
        html += '</div>';
        html += '<div class="exam-explain hidden mt-2.5 p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800" id="exam_exp_' + i + '"></div>';
        html += '</div>';
      }
      container.innerHTML = html;
      updateAnsweredCount();
    }

    function selectExamOption(qIdx, optIdx) {
      userExamAnswers[qIdx] = optIdx;
      for (let j = 0; j < 4; j++) {
        const btn = document.getElementById('exam_opt_' + qIdx + '_' + j);
        if (btn) {
          if (j === optIdx) {
            btn.className = 'exam-opt-btn text-left p-2.5 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/40 font-bold text-amber-900 dark:text-amber-200';
          } else {
            btn.className = 'exam-opt-btn text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-amber-400 transition';
          }
        }
      }
      updateAnsweredCount();
    }

    function updateAnsweredCount() {
      const count = Object.keys(userExamAnswers).length;
      document.getElementById('examAnsweredCount').textContent = 'Đã làm: ' + count + '/40 câu';
    }

    function startExamTimer() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimeLeft = 3600;
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
        const m = Math.floor(examTimeLeft / 60);
        const s = examTimeLeft % 60;
        document.getElementById('examTimer').textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);

      let score = 0;
      for (let i = 0; i < examQuestionsData.length; i++) {
        const q = examQuestionsData[i];
        const userAns = userExamAnswers[i];
        const isCorrect = (userAns === q.ans);
        if (isCorrect) score++;

        const expBox = document.getElementById('exam_exp_' + i);
        if (expBox) {
          expBox.classList.remove('hidden');
          expBox.innerHTML = '<strong>Giải thích:</strong> ' + q.explain;
        }

        // Color options
        for (let j = 0; j < q.options.length; j++) {
          const btn = document.getElementById('exam_opt_' + i + '_' + j);
          if (btn) {
            if (j === q.ans) {
              btn.className = 'exam-opt-btn text-left p-2.5 rounded-xl border border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 font-bold';
            } else if (j === userAns && !isCorrect) {
              btn.className = 'exam-opt-btn text-left p-2.5 rounded-xl border border-rose-500 bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-100';
            }
          }
        }
      }

      // Display Results Banner
      const banner = document.getElementById('examResultBanner');
      banner.classList.remove('hidden');

      const title = document.getElementById('examResultTitle');
      const scoreDetail = document.getElementById('examScoreDetail');
      const feedback = document.getElementById('examFeedbackText');
      const icon = document.getElementById('examBadgeIcon');

      scoreDetail.textContent = 'Kết quả: ' + score + '/40 Điểm (' + Math.round((score / 40) * 10) + '/10) • Số câu đúng: ' + score + ' câu';

      if (score >= 36) {
        icon.textContent = '🥇';
        title.textContent = 'XUẤT SẮC: TRẠNG NGUYÊN TRẢI NGHIỆM LỚP 7!';
        feedback.textContent = 'Em đã nắm vững toàn diện kiến thức 9 chủ đề cốt lõi, thấu suốt 4 mạch nội dung và có kĩ năng phản xạ tình huống cực kì xuất sắc!';
      } else if (score >= 30) {
        icon.textContent = '🥈';
        title.textContent = 'GIỎI: BẢNG NHÃN TRẢI NGHIỆM!';
        feedback.textContent = 'Thành tích rất đáng khen! Em có tư duy ứng xử chuẩn mực và hiểu biết sâu sắc về các quy tắc an toàn, phẩm chất nghề nghiệp.';
      } else if (score >= 20) {
        icon.textContent = '🥉';
        title.textContent = 'ĐẠT YÊU CẦU: THÁM HOA TRẢI NGHIỆM!';
        feedback.textContent = 'Em đã vượt qua kỳ thi đạt chuẩn. Hãy xem lại các câu giải thích chi tiết phía dưới để hoàn thiện thêm những kĩ năng còn thiếu sót nhé.';
      } else {
        icon.textContent = '📚';
        title.textContent = 'CẦN CỐ GẮNG HƠN!';
        feedback.textContent = 'Em hãy dành thêm thời gian đọc lại các chủ đề về kiểm soát cảm xúc, an toàn thân thể và quy trình chọn nghề để củng cố kiến thức nhé.';
      }

      document.getElementById('examSubmitBtn').classList.add('hidden');
      document.getElementById('examResetBtn').classList.remove('hidden');
    }

    function resetExam() {
      userExamAnswers = {};
      document.getElementById('examResultBanner').classList.add('hidden');
      document.getElementById('examSubmitBtn').classList.remove('hidden');
      document.getElementById('examResetBtn').classList.add('hidden');
      renderExamQuestions();
      startExamTimer();
    }

    // Window onload init
    window.addEventListener('DOMContentLoaded', () => {
      loadChecklistState();
    });
  </script>
</body>
</html>`;
}

// Generate files
const htmlContent = buildHtml();
const targetHdtn = path.join(__dirname, '../courses/hdtn_7.html');
const targetExp = path.join(__dirname, '../courses/experience_7.html');

fs.writeFileSync(targetHdtn, htmlContent, 'utf8');
fs.writeFileSync(targetExp, htmlContent, 'utf8');

console.log(`Generated successfully:`);
console.log(`- ${targetHdtn} (${Buffer.byteLength(htmlContent, 'utf8')} bytes)`);
console.log(`- ${targetExp} (${Buffer.byteLength(htmlContent, 'utf8')} bytes)`);
