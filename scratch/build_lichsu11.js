const fs = require('fs');
const path = require('path');
const data = require('./lichsu11_data.js');
const svgs = require('./lichsu11_svgs.js');

function buildHtml() {
  const { topics, lessons, timelineTable, terms, mapDiagramNotes, examQuestions } = data;

  // Build Search Index
  const searchIndex = [];
  for (let i = 1; i <= 13; i++) {
    const l = lessons[i];
    searchIndex.push({
      id: `bai-${i}`,
      badge: `Bài ${i} (Chủ đề ${l.topicNum})`,
      title: `Bài ${i}. ${l.title}`,
      subtitle: `${l.topicTitle} • ${l.summary.slice(0, 100)}...`
    });
    (l.sections || []).forEach(sec => {
      searchIndex.push({
        id: `bai-${i}`,
        badge: `Mục • Bài ${i}`,
        title: `${sec.heading} (${l.title})`,
        subtitle: `Nội dung trọng tâm bài học lịch sử 11`
      });
    });
  }
  terms.forEach(t => {
    searchIndex.push({
      id: `thuat-ngu-can-nam`,
      badge: `Thuật ngữ Lịch sử`,
      title: t.term,
      subtitle: t.def.slice(0, 110) + '...'
    });
  });
  timelineTable.forEach(tl => {
    searchIndex.push({
      id: `bang-moc-thoi-gian`,
      badge: `Mốc sự kiện ${tl.year}`,
      title: `${tl.year}: ${tl.event}`,
      subtitle: `Sự kiện lịch sử trọng tâm SGK Lịch sử 11`
    });
  });

  // Generate Lessons HTML
  let lessonsHtml = '';
  let currentTopicNum = 0;
  for (let i = 1; i <= 13; i++) {
    const l = lessons[i];
    if (l.topicNum !== currentTopicNum) {
      currentTopicNum = l.topicNum;
      const tp = topics[currentTopicNum - 1];
      lessonsHtml += `
        <!-- CHỦ ĐỀ ${currentTopicNum}: ${tp.title} -->
        <div id="chu-de-${currentTopicNum}" class="scroll-mt-24 mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white shadow-md relative overflow-hidden">
          <div class="relative z-10 space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-extrabold uppercase tracking-widest text-amber-100">
              <i class="fa-solid fa-layer-group"></i> Chủ đề ${currentTopicNum}
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">${tp.title}</h2>
            <p class="text-amber-100 text-sm sm:text-base leading-relaxed tracking-wide opacity-95 max-w-3xl">${tp.shortTitle} — Phân phối chương trình SGK Lịch sử 11 Kết nối tri thức với cuộc sống (Bài ${tp.lessons.join(', Bài ')}).</p>
          </div>
        </div>
      `;
    }
    const svgObj = svgs[i] || { note: '', svg: '' };

    // Generate Sections HTML
    const sectionsHtml = (l.sections || []).map((sec, secIdx) => {
      let secBody = '';

      if (sec.type === 'list') {
        secBody = `
          <div class="space-y-3.5">
            ${sec.items.map(it => {
              let descContent = '';
              if (it.desc && (it.desc.includes('\n•') || it.desc.includes('\n- '))) {
                const parts = it.desc.split('\n');
                const header = parts[0].startsWith('•') ? '' : parts[0];
                const bulletLines = parts[0].startsWith('•') ? parts : parts.slice(1);
                let out = header ? `<p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide mb-2.5 font-medium">${header}</p>` : '';
                out += `<div class="space-y-2 mt-1.5">` + bulletLines.map(line => {
                  const clean = line.replace(/^[•\-]\s*/, '').trim();
                  if (!clean) return '';
                  return `
                    <div class="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
                      <span class="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0 shadow-sm"></span>
                      <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${clean}</div>
                    </div>
                  `;
                }).join('') + `</div>`;
                descContent = out;
              } else {
                descContent = `<p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide">${it.desc}</p>`;
              }

              return `
              <div class="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 hover:shadow-sm transition">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2 shrink-0 shadow-sm"></span>
                <div class="space-y-1 flex-1">
                  <h5 class="font-bold text-sm sm:text-base text-amber-900 dark:text-amber-300 leading-snug">${it.title}</h5>
                  ${descContent}
                </div>
              </div>
            `}).join('')}
          </div>
        `;
      } else if (sec.type === 'grid') {
        secBody = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${sec.items.map(it => `
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-amber-400 dark:hover:border-amber-600 transition space-y-3">
                <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700/60">
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200">${it.badge}</span>
                </div>
                <h5 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white">${it.title}</h5>
                <div class="space-y-2.5">
                  ${it.points.map(pt => `
                    <div class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
                      <i class="fa-solid fa-circle-check text-amber-500 text-sm mt-1.5 shrink-0"></i>
                      <div class="leading-relaxed sm:leading-loose tracking-wide">${pt}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (sec.type === 'table') {
        secBody = `
          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-sm">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-amber-100/70 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-b border-slate-200 dark:border-slate-700">
                  ${sec.headers.map(h => `<th class="p-3.5 sm:p-4 font-bold tracking-wide">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
                ${sec.rows.map(row => `
                  <tr class="hover:bg-amber-50/50 dark:hover:bg-slate-700/40 transition">
                    ${row.map((cell, cIdx) => `
                      <td class="p-3.5 sm:p-4 leading-relaxed sm:leading-loose text-slate-700 dark:text-slate-200 tracking-wide ${cIdx === 0 ? 'font-bold text-amber-900 dark:text-amber-300' : ''}">
                        ${cell.replace(/\n/g, '<br/>')}
                      </td>
                    `).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      return `
        <div class="space-y-4">
          <div class="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span class="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold">${secIdx + 1}</span>
            <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">${sec.heading}</h4>
          </div>
          ${secBody}
        </div>
      `;
    }).join('');

    // Lesson Quiz (3 questions)
    const quizItems = l.quiz.map((qObj, qIdx) => {
      const qId = `quiz-${i}-${qIdx}`;
      const optHtml = qObj.options.map((opt, oIdx) => `
        <label class="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
          <input type="radio" name="${qId}" value="${oIdx}" class="mt-1 text-amber-600 focus:ring-amber-500 shrink-0">
          <span class="text-sm sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed tracking-wide">${opt}</span>
        </label>
      `).join('');

      return `
        <div id="qbox-${qId}" class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Câu ${qIdx + 1} / 3</span>
            <span id="badge-${qId}" class="text-xs font-semibold hidden"></span>
          </div>
          <p class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed sm:leading-loose tracking-wide">${qObj.q}</p>
          <div class="grid grid-cols-1 gap-2.5">${optHtml}</div>
          <div id="exp-${qId}" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 leading-relaxed sm:leading-loose tracking-wide">
            <strong>Giải thích:</strong> ${qObj.explain}
          </div>
        </div>
      `;
    }).join('');

    lessonsHtml += `
      <!-- BÀI ${i} -->
      <article id="bai-${i}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-8 mb-10">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase tracking-wide">
                Chủ đề ${l.topicNum} • Bài ${i}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                ${l.topicTitle}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bài ${i}. ${l.title}
            </h2>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">${l.summary}</p>
          </div>
          <button type="button" onclick="markLessonRead(${i})" id="btn-read-${i}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/50 border border-slate-200 dark:border-slate-700 shrink-0">
            <i id="icon-read-${i}" class="fa-regular fa-circle-check text-slate-400"></i>
            <span id="text-read-${i}">Đánh dấu hoàn thành</span>
          </button>
        </div>

        <!-- Sơ đồ tư duy trực quan (SVG) -->
        <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                <i class="fa-solid fa-diagram-project"></i>
              </span>
              <div>
                <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">HÌNH MINH HỌA & SƠ ĐỒ TRỌNG TÂM BÀI ${i}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">${svgObj.note}</p>
              </div>
            </div>
            <span class="text-[11px] font-semibold text-amber-600 dark:text-amber-400">Chuẩn hóa cấu trúc SGK Lịch sử 11 Kết nối tri thức</span>
          </div>
          <div class="w-full overflow-x-auto rounded-xl bg-white dark:bg-slate-900/80 p-2 sm:p-4 border border-slate-200 dark:border-slate-800 flex justify-center">
            ${svgObj.svg}
          </div>
        </div>

        <!-- MỤC KIẾN THỨC THEO BÀI -->
        <div class="space-y-8">
          ${sectionsHtml}
        </div>

        <!-- CỦNG CỐ & BÀI TẬP TỰ ĐÁNH GIÁ (QUIZ) -->
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
            <div>
              <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-list-check text-amber-600"></i> Củng Cố & Luyện Tập Tự Đánh Giá (Bài ${i})
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">Chọn phương án đúng nhất và nhấn Kiểm tra để nhận phản hồi giải thích chi tiết.</p>
            </div>
            <button type="button" onclick="checkLessonQuiz(${i})" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-sm transition shrink-0">
              <i class="fa-solid fa-check-double mr-1.5"></i> Kiểm Tra Kết Quả
            </button>
          </div>
          <div class="space-y-4">
            ${quizItems}
          </div>
        </div>
      </article>
    `;
  }

  // Full page HTML
  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lịch Sử 11 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 6 Chủ Đề • 13 Bài • Chuẩn Hoá Toàn Diện)</title>
  <meta name="description" content="Tài liệu số hóa toàn diện Lịch Sử 11 bộ Kết nối tri thức với cuộc sống: Đủ 6 chủ đề, 13 bài học. Đầy đủ khái niệm, mốc lịch sử, nguyên nhân - diễn biến - kết quả - ý nghĩa, sơ đồ tư duy SVG, bảng niên biểu và đấu trường 45 phút.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            amber: {
              50: '#fffbeb',
              100: '#fef3c7',
              200: '#fde68a',
              500: '#f59e0b',
              600: '#d97706',
              700: '#b45309',
              800: '#92400e',
              900: '#78350f',
              950: '#451a03',
            }
          }
        }
      }
    }
  </script>
  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    
    .nav-link.active {
      background-color: #fef3c7;
      color: #b45309;
      font-weight: 700;
      border-left: 3px solid #d97706;
    }
    .dark .nav-link.active {
      background-color: rgba(146, 64, 14, 0.4);
      color: #fde68a;
      border-left-color: #f59e0b;
    }

    /* Chuẩn hóa Typography môn Lịch sử: Giãn dòng, thưa chữ, rõ nét sự kiện */
    body {
      letter-spacing: 0.015em;
      line-height: 1.85;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      word-spacing: 0.03em;
    }

    p, li, .prose {
      letter-spacing: 0.018em;
      line-height: 1.85;
    }

    .lesson-card p, .lesson-card li {
      line-height: 1.85 !important;
      letter-spacing: 0.018em !important;
    }

    /* Tiêu đề rõ ràng, mạnh mẽ */
    h1, h2, h3, h4, h5 {
      letter-spacing: -0.01em;
      line-height: 1.4;
    }

    /* Giữ nguyên chữ trong SVG */
    svg text {
      letter-spacing: normal !important;
      word-spacing: normal !important;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen font-sans antialiased transition-colors duration-200">

  <!-- Sticky Top Navbar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Back & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/50 hover:text-amber-600 transition" title="Về trang chủ">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <div class="flex items-center gap-2.5">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center font-black shadow-sm">
            <i class="fa-solid fa-landmark text-sm"></i>
          </span>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">Lịch Sử 11</h1>
              <span class="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">SGK Kết Nối Tri Thức</span>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Đủ 6 Chủ Đề • 13 Bài • Chuẩn Hoá Toàn Diện</p>
          </div>
        </div>
      </div>

      <!-- Center: Course Progress Counter -->
      <div class="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs">
        <i class="fa-solid fa-graduation-cap text-amber-500"></i>
        <span class="font-medium text-slate-600 dark:text-slate-300">Tiến độ bài học:</span>
        <span id="progress-text" class="font-bold text-amber-600 dark:text-amber-400">0 / 13 Bài</span>
        <div class="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div id="progress-bar-fill" class="h-full bg-amber-600 transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <!-- Search Trigger (Ctrl K) -->
        <button type="button" onclick="openModal('search-modal')" class="p-2 sm:px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center gap-2" title="Tìm kiếm nhanh (Ctrl + K)">
          <i class="fa-solid fa-magnifying-glass text-xs sm:text-sm"></i>
          <span class="hidden sm:inline text-xs font-semibold">Tìm kiếm</span>
          <kbd class="hidden lg:inline px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-500">Ctrl K</kbd>
        </button>

        <!-- Exam Arena Trigger -->
        <button type="button" onclick="openModal('arena-modal')" class="px-3 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5">
          <i class="fa-solid fa-fire text-yellow-300 animate-pulse"></i>
          <span class="hidden sm:inline">Đấu Trường 45:00</span>
          <span class="sm:hidden">Thi 45p</span>
        </button>

        <!-- Light/Dark Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Chuyển chế độ Sáng / Tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container: Sidebar + Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <!-- LEFT SIDEBAR: Nav Sticky (3 Cols) -->
      <aside class="lg:col-span-3 sticky top-24 space-y-4">
        <!-- Sidebar Filter / Search input -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div class="relative">
            <i class="fa-solid fa-filter absolute left-3 top-3 text-xs text-slate-400"></i>
            <input type="text" id="sidebar-filter-input" placeholder="Lọc bài học Lịch sử 11..." oninput="filterSidebarLessons(this.value)" class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500">
          </div>

          <!-- Nav Tree (6 Chủ đề) -->
          <nav id="sidebar-nav" class="space-y-4 text-xs max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            ${topics.map(tp => `
              <div class="space-y-1">
                <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 px-2 py-1">
                  <a href="#chu-de-${tp.num}" class="hover:text-amber-500 transition"><i class="fa-solid ${tp.icon} mr-1"></i> ${tp.shortTitle}</a>
                </div>
                <ul class="space-y-0.5">
                  ${tp.lessons.map(lNum => {
                    const lObj = lessons[lNum];
                    return `
                      <li>
                        <a href="#bai-${lNum}" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                          <span class="truncate">${lNum}. ${lObj.title}</span>
                          <i id="check-side-${lNum}" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px] shrink-0 ml-1"></i>
                        </a>
                      </li>
                    `;
                  }).join('')}
                </ul>
              </div>
            `).join('')}

            <!-- Chuyên mục tổng hợp -->
            <div class="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2 py-1">TỔNG HỢP KIẾN THỨC</div>
              <ul class="space-y-0.5">
                <li><a href="#bang-moc-thoi-gian" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-xl text-amber-700 dark:text-amber-400 font-semibold hover:bg-amber-50 dark:hover:bg-amber-950/40 transition"><i class="fa-solid fa-timeline text-[11px]"></i> Bảng Mốc Thời Gian</a></li>
                <li><a href="#thuat-ngu-can-nam" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-xl text-indigo-700 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition"><i class="fa-solid fa-spell-check text-[11px]"></i> Thuật Ngữ Cần Nắm</a></li>
                <li><a href="#khai-thac-hinh-anh" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-xl text-emerald-700 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition"><i class="fa-solid fa-map-location-dot text-[11px]"></i> Khai Thác Bản Đồ / Sơ Đồ</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- Exam Arena Card Banner in Sidebar -->
        <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 text-white shadow-md space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-bold">
              <i class="fa-solid fa-trophy text-yellow-300"></i>
            </span>
            <div>
              <h4 class="font-bold text-sm">Đấu Trường Lịch Sử 11</h4>
              <p class="text-[11px] text-amber-100">20 câu tổng hợp • 45 phút</p>
            </div>
          </div>
          <p class="text-xs text-amber-100 leading-relaxed">Bộ đề trắc nghiệm chuẩn cấu trúc ma trận kiểm tra của Bộ GD&ĐT, bao quát toàn bộ 6 chủ đề 13 bài học.</p>
          <button type="button" onclick="openModal('arena-modal')" class="w-full py-2 rounded-xl bg-white text-amber-800 font-bold text-xs hover:bg-amber-50 shadow-sm transition">
            Vào Thi Ngay
          </button>
        </div>
      </aside>

      <!-- MAIN CONTENT (9 Cols) -->
      <main class="lg:col-span-9 space-y-10">

        <!-- HERO BANNER -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-700 via-amber-800 to-orange-900 text-white shadow-lg relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 opacity-10 text-[200px] pointer-events-none">
            <i class="fa-solid fa-landmark"></i>
          </div>
          <div class="max-w-2xl space-y-3 relative z-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-amber-100 border border-white/20">
              <i class="fa-solid fa-sparkles text-yellow-300"></i> Chương Trình GDPT 2018 Mới Nhất
            </span>
            <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              KIẾN THỨC ĐẦY ĐỦ THEO BÀI – LỊCH SỬ 11
            </h2>
            <p class="text-xs sm:text-sm text-amber-100 leading-relaxed">
              Bộ sách <strong>Kết nối tri thức với cuộc sống</strong> (SGK 98 trang). Hệ thống hóa trọn vẹn <strong>6 chủ đề, 13 bài học</strong> theo cấu trúc sư phạm chuẩn: <strong>Khái niệm – Tiền đề – Diễn biến – Kết quả – Ý nghĩa – Sơ đồ tư duy trực quan (SVG) – Luyện tập tự đánh giá</strong>.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 6 Chủ đề lớn</span>
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 13 Bài chuẩn SGK</span>
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 13 Sơ đồ SVG chuẩn XML</span>
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 20 Câu hỏi đấu trường 45p</span>
            </div>
          </div>
        </div>

        <!-- 13 LESSON CARDS -->
        ${lessonsHtml}

        <!-- CHUYÊN MỤC 1: BẢNG MỐC THỜI GIAN TRỌNG TÂM -->
        <section id="bang-moc-thoi-gian" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <i class="fa-solid fa-timeline"></i>
            </span>
            <div>
              <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">Niên Biểu Toàn Diện</span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Bảng Mốc Thời Gian Trọng Tâm Toàn Khóa</h3>
            </div>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">
            Tổng hợp các mốc niên đại mang tính bước ngoặt từ thế kỉ XVI đến đầu thế kỉ XXI được trích xuất từ 13 bài học SGK Lịch sử 11 Kết nối tri thức:
          </p>
          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-sm">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-amber-100/70 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-b border-slate-200 dark:border-slate-700">
                  <th class="p-3.5 sm:p-4 font-bold tracking-wide w-36">Mốc thời gian</th>
                  <th class="p-3.5 sm:p-4 font-bold tracking-wide">Sự kiện lịch sử trọng đại</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
                ${timelineTable.map(tl => `
                  <tr class="hover:bg-amber-50/50 dark:hover:bg-slate-700/40 transition">
                    <td class="p-3.5 sm:p-4 font-bold text-amber-700 dark:text-amber-400 whitespace-nowrap">${tl.year}</td>
                    <td class="p-3.5 sm:p-4 text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide">${tl.event}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- CHUYÊN MỤC 2: THUẬT NGỮ CẦN NẮM -->
        <section id="thuat-ngu-can-nam" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <i class="fa-solid fa-spell-check"></i>
            </span>
            <div>
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Từ Điển Lịch Sử Cốt Lõi</span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Thuật Ngữ & Khái Niệm Cần Nắm</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${terms.map(tm => `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 hover:shadow-sm transition">
                <h5 class="font-bold text-sm sm:text-base text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <i class="fa-solid fa-tag text-xs text-indigo-500"></i> ${tm.term}
                </h5>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">${tm.def}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- CHUYÊN MỤC 3: GỢI Ý KHAI THÁC BẢN ĐỒ / SƠ ĐỒ -->
        <section id="khai-thac-hinh-anh" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <i class="fa-solid fa-map-location-dot"></i>
            </span>
            <div>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Phương Pháp Học Liệu Trực Quan</span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Gợi Ý Khai Thác Bản Đồ, Tranh Ảnh & Sơ Đồ</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${mapDiagramNotes.map(md => `
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 hover:shadow-sm transition">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">${md.lesson}</span>
                  <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Kĩ năng khai thác</span>
                </div>
                <h5 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">${md.title}</h5>
                <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">${md.guide}</p>
              </div>
            `).join('')}
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- MODAL 1: SEARCH MODAL (Ctrl K) -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4">
    <div class="w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400 text-sm"></i>
        <input type="text" id="modal-search-input" placeholder="Tìm kiếm sự kiện, nhân vật, trận đánh, thuật ngữ lịch sử..." oninput="handleModalSearch(this.value)" class="flex-1 text-sm bg-transparent border-0 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400">
        <button type="button" onclick="closeModal('search-modal')" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs">
          <kbd class="px-1.5 py-0.5 rounded font-mono bg-slate-100 dark:bg-slate-800 text-[10px]">ESC</kbd>
        </button>
      </div>
      <div id="modal-search-results" class="p-4 overflow-y-auto space-y-2 text-xs divide-y divide-slate-100 dark:divide-slate-800">
        <!-- Results rendered dynamically -->
      </div>
    </div>
  </div>

  <!-- MODAL 2: EXAM ARENA (45:00) -->
  <div id="arena-modal" class="fixed inset-0 z-50 hidden bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <!-- Arena Header -->
      <div class="p-5 sm:p-6 bg-gradient-to-r from-amber-700 to-orange-800 text-white flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-lg font-bold">
            <i class="fa-solid fa-stopwatch text-yellow-300"></i>
          </span>
          <div>
            <h3 class="font-extrabold text-base sm:text-lg">Đấu Trường Lịch Sử 11 – Bài Thi 45 Phút</h3>
            <p class="text-xs text-amber-100">20 câu hỏi trắc nghiệm khách quan đa mạch kiến thức</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-4 py-1.5 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 font-mono text-base sm:text-lg font-black text-yellow-300" id="exam-timer">
            45:00
          </div>
          <button type="button" onclick="closeModal('arena-modal')" class="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition text-sm">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Score Banner -->
      <div id="exam-score-banner" class="px-6 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
        <span>Chọn phương án đúng nhất và hoàn thành trước khi hết thời gian.</span>
        <span id="exam-answered-counter" class="text-amber-600 dark:text-amber-400 font-bold">Đã làm: 0 / 20 câu</span>
      </div>

      <!-- Arena Questions Container -->
      <div id="exam-questions-container" class="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
        <!-- Questions rendered dynamically -->
      </div>

      <!-- Arena Footer -->
      <div class="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between gap-4">
        <button type="button" onclick="resetExam()" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-rotate-left mr-1"></i> Làm Lại Đề Mới
        </button>
        <button type="button" id="exam-submit-btn" onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs sm:text-sm font-bold shadow-md transition">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài & Xem Điểm
        </button>
      </div>
    </div>
  </div>

  <!-- FLOATING BUTTONS -->
  <button type="button" id="scroll-top-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="fixed bottom-6 right-6 z-30 p-3 rounded-2xl bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition opacity-0 pointer-events-none transition-all duration-200">
    <i class="fa-solid fa-arrow-up text-sm"></i>
  </button>

  <!-- CLIENT-SIDE SCRIPT -->
  <script>
    const SEARCH_INDEX = ${JSON.stringify(searchIndex)};
    const EXAM_BANK = ${JSON.stringify(examQuestions)};

    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-sm text-yellow-400';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-sm';
        localStorage.setItem('theme', 'light');
      }
    }

    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      applyTheme(true);
    } else {
      applyTheme(false);
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        applyTheme(!document.documentElement.classList.contains('dark'));
      });
    }

    // 2. Reading Progress & Completion Tracking
    let readLessons = JSON.parse(localStorage.getItem('lichsu11_read') || '[]');

    function updateProgressUI() {
      const count = readLessons.length;
      const pct = Math.round((count / 13) * 100);
      const textElem = document.getElementById('progress-text');
      const barElem = document.getElementById('progress-bar-fill');
      if (textElem) textElem.textContent = count + ' / 13 Bài';
      if (barElem) barElem.style.width = pct + '%';

      for (let i = 1; i <= 13; i++) {
        const isRead = readLessons.includes(i);
        const btn = document.getElementById('btn-read-' + i);
        const icon = document.getElementById('icon-read-' + i);
        const text = document.getElementById('text-read-' + i);
        const sideIcon = document.getElementById('check-side-' + i);

        if (isRead) {
          if (btn) {
            btn.className = 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700';
          }
          if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-600';
          if (text) text.textContent = 'Đã hoàn thành';
          if (sideIcon) sideIcon.className = 'fa-solid fa-circle-check text-emerald-500 text-[10px]';
        } else {
          if (btn) {
            btn.className = 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/50 border border-slate-200 dark:border-slate-700';
          }
          if (icon) icon.className = 'fa-regular fa-circle-check text-slate-400';
          if (text) text.textContent = 'Đánh dấu hoàn thành';
          if (sideIcon) sideIcon.className = 'fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]';
        }
      }
    }

    function markLessonRead(num) {
      if (readLessons.includes(num)) {
        readLessons = readLessons.filter(x => x !== num);
      } else {
        readLessons.push(num);
      }
      localStorage.setItem('lichsu11_read', JSON.stringify(readLessons));
      updateProgressUI();
    }

    // 3. Check Lesson Quiz (3 Questions per lesson)
    const LESSON_QUIZ_KEYS = ${JSON.stringify(
      Object.fromEntries(Object.entries(lessons).map(([num, l]) => [num, l.quiz.map(q => q.answer)]))
    )};

    function checkLessonQuiz(lessonNum) {
      const answers = LESSON_QUIZ_KEYS[lessonNum];
      if (!answers) return;
      let score = 0;

      answers.forEach((ans, qIdx) => {
        const qId = 'quiz-' + lessonNum + '-' + qIdx;
        const checked = document.querySelector('input[name="' + qId + '"]:checked');
        const badge = document.getElementById('badge-' + qId);
        const exp = document.getElementById('exp-' + qId);
        const qBox = document.getElementById('qbox-' + qId);

        if (exp) exp.classList.remove('hidden');

        if (checked && parseInt(checked.value, 10) === ans) {
          score++;
          if (badge) {
            badge.textContent = 'Chính xác';
            badge.className = 'text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-block';
          }
          if (qBox) {
            qBox.classList.remove('border-amber-400', 'dark:border-amber-600');
            qBox.classList.add('border-emerald-400', 'dark:border-emerald-600');
          }
        } else {
          if (badge) {
            badge.textContent = 'Chưa đúng';
            badge.className = 'text-xs font-bold text-rose-600 dark:text-rose-400 inline-block';
          }
          if (qBox) {
            qBox.classList.remove('border-emerald-400', 'dark:border-emerald-600');
            qBox.classList.add('border-rose-400', 'dark:border-rose-600');
          }
        }
      });

      if (score === answers.length && !readLessons.includes(lessonNum)) {
        markLessonRead(lessonNum);
      }
    }

    // 4. Modal Open & Close
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        if (id === 'search-modal') {
          setTimeout(() => {
            const inp = document.getElementById('modal-search-input');
            if (inp) { inp.focus(); inp.value = ''; handleModalSearch(''); }
          }, 50);
        } else if (id === 'arena-modal') {
          if (!currentExamQuestions.length) startNewExam();
        }
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }

    // Keyboard Shortcuts (Ctrl+K & ESC)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('search-modal');
      } else if (e.key === 'Escape') {
        closeModal('search-modal');
        closeModal('arena-modal');
      }
    });

    // 5. Search Modal Filtering
    function handleModalSearch(query) {
      const q = (query || '').trim().toLowerCase();
      const container = document.getElementById('modal-search-results');
      if (!container) return;

      if (!q) {
        container.innerHTML = '<p class="text-slate-400 text-center py-6">Nhập từ khóa để tìm nhanh trận đánh, mốc thời gian, nhân vật, cải cách, thuật ngữ...</p>';
        return;
      }

      const matched = SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      ).slice(0, 15);

      if (!matched.length) {
        container.innerHTML = '<p class="text-slate-400 text-center py-6">Không tìm thấy nội dung phù hợp với "' + query + '".</p>';
        return;
      }

      container.innerHTML = matched.map(m => \`
        <a href="#\${m.id}" onclick="closeModal('search-modal')" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">\${m.badge}</span>
            <h5 class="font-bold text-slate-900 dark:text-white">\${m.title}</h5>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">\${m.subtitle}</p>
        </a>
      \`).join('');
    }

    // Sidebar filter
    function filterSidebarLessons(val) {
      const v = (val || '').toLowerCase().trim();
      const links = document.querySelectorAll('#sidebar-nav a.nav-link');
      links.forEach(l => {
        const text = l.textContent.toLowerCase();
        l.closest('li').style.display = text.includes(v) ? '' : 'none';
      });
    }

    // 6. Exam Arena Logic (20 Questions • 45 Minutes)
    let currentExamQuestions = [];
    let userExamAnswers = {};
    let examTimeRemaining = 45 * 60; // 45 minutes
    let examTimerInterval = null;

    function startNewExam() {
      currentExamQuestions = [...EXAM_BANK].sort(() => 0.5 - Math.random()).slice(0, 20);
      userExamAnswers = {};
      examTimeRemaining = 45 * 60;

      const submitBtn = document.getElementById('exam-submit-btn');
      if (submitBtn) submitBtn.disabled = false;

      const scoreBanner = document.getElementById('exam-score-banner');
      if (scoreBanner) {
        scoreBanner.innerHTML = \`
          <span>Chọn phương án đúng nhất và hoàn thành trước khi hết thời gian.</span>
          <span id="exam-answered-counter" class="text-amber-600 dark:text-amber-400 font-bold">Đã làm: 0 / 20 câu</span>
        \`;
      }

      renderExamQuestions(false);

      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeRemaining--;
        const mins = Math.floor(examTimeRemaining / 60);
        const secs = examTimeRemaining % 60;
        const timerElem = document.getElementById('exam-timer');
        if (timerElem) {
          timerElem.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        }
        if (examTimeRemaining <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function resetExam() {
      if (confirm('Bạn có chắc muốn bắt đầu lại đề thi Lịch sử mới?')) {
        startNewExam();
      }
    }

    function selectExamOption(qIdx, optIdx) {
      userExamAnswers[qIdx] = optIdx;
      const counter = document.getElementById('exam-answered-counter');
      if (counter) {
        counter.textContent = 'Đã làm: ' + Object.keys(userExamAnswers).length + ' / ' + currentExamQuestions.length + ' câu';
      }
      renderExamQuestions(false);
    }

    function renderExamQuestions(isSubmitted) {
      const container = document.getElementById('exam-questions-container');
      if (!container) return;

      container.innerHTML = currentExamQuestions.map((qObj, idx) => {
        const letters = ['A', 'B', 'C', 'D'];
        const chosen = userExamAnswers[idx];

        const opts = qObj.options.map((opt, oIdx) => {
          const letter = letters[oIdx];
          const cleanOpt = opt.replace(/^[A-D]\.\s*/, '');
          let cls = 'w-full text-left px-3.5 py-2.5 rounded-xl border transition text-xs sm:text-sm flex items-start gap-2.5 ';
          if (!isSubmitted) {
            cls += chosen === oIdx
              ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-bold'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700';
          } else {
            if (oIdx === qObj.answer) {
              cls += 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 font-bold text-emerald-900 dark:text-emerald-200';
            } else if (chosen === oIdx && chosen !== qObj.answer) {
              cls += 'border-rose-600 bg-rose-50 dark:bg-rose-950/60 font-bold text-rose-900 dark:text-rose-200';
            } else {
              cls += 'border-slate-200 dark:border-slate-700 opacity-60 text-slate-500';
            }
          }

          return \`
            <button type="button" \${isSubmitted ? 'disabled' : 'onclick="selectExamOption(' + idx + ', ' + oIdx + ')"'} class="\${cls}">
              <span class="w-5 h-5 rounded bg-slate-100 dark:bg-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">\${letter}</span>
              <span class="flex-1">\${cleanOpt}</span>
            </button>
          \`;
        }).join('');

        return \`
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
            <div class="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-bold">
              <span>Câu \${idx + 1} / \${currentExamQuestions.length}</span>
              <span>Bài \${qObj.lessonNum || qObj.lesson || ''}: \${qObj.lessonTitle || ''}</span>
            </div>
            <p class="font-bold text-slate-900 dark:text-white leading-relaxed">\${qObj.q}</p>
            <div class="grid grid-cols-1 gap-2">\${opts}</div>
            \${isSubmitted ? \`
              <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200">
                <strong>Giải thích:</strong> \${qObj.explain}
              </div>
            \` : ''}
          </div>
        \`;
      }).join('');
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let correct = 0;
      currentExamQuestions.forEach((qObj, idx) => {
        if (userExamAnswers[idx] === qObj.answer) correct++;
      });
      const score10 = ((correct / currentExamQuestions.length) * 10).toFixed(1);
      const scoreBanner = document.getElementById('exam-score-banner');
      if (scoreBanner) {
        scoreBanner.innerHTML = \`
          <span>Kết quả bài thi:</span>
          <span class="text-emerald-600 dark:text-emerald-400 font-black text-sm sm:text-base">
            \${correct} / \${currentExamQuestions.length} câu đúng (\${score10} / 10 điểm)
          </span>
        \`;
      }
      const submitBtn = document.getElementById('exam-submit-btn');
      if (submitBtn) submitBtn.disabled = true;
      renderExamQuestions(true);
    }

    // 7. ScrollSpy & Scroll-to-Top Button
    const articles = document.querySelectorAll('article.lesson-card, section');
    const navLinks = document.querySelectorAll('#sidebar-nav a.nav-link');
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    window.addEventListener('scroll', () => {
      // Scroll to Top visibility
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }

      // ScrollSpy
      let currentId = '';
      articles.forEach(art => {
        const rect = art.getBoundingClientRect();
        if (rect.top <= 160) currentId = art.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
      });
    }, { passive: true });

    // Initial load UI update
    updateProgressUI();
  </script>
</body>
</html>`;

  // Output paths
  const outPathLichsu11 = path.join(__dirname, '..', 'courses', 'lichsu_11.html');
  const outPathSu11 = path.join(__dirname, '..', 'courses', 'su_11.html');

  fs.writeFileSync(outPathLichsu11, fullHtml, 'utf8');
  console.log('Successfully wrote courses/lichsu_11.html (' + fullHtml.length + ' bytes)');

  fs.writeFileSync(outPathSu11, fullHtml, 'utf8');
  console.log('Successfully wrote courses/su_11.html (' + fullHtml.length + ' bytes)');
}

buildHtml();
