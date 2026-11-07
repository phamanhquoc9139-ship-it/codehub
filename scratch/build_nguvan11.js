const fs = require('fs');
const path = require('path');
const data = require('./nguvan11_data.js');
const svgs = require('./nguvan11_svgs.js');

function buildHtml() {
  const { volumes, lessons, skillsFramework, digitalContentSuggestions, examQuestions } = data;

  // Build Search Index
  const searchIndex = [];
  for (let i = 1; i <= 9; i++) {
    const l = lessons[i];
    searchIndex.push({
      id: `bai-${i}`,
      badge: `Bài ${i} (Tập ${l.volNum})`,
      title: `Bài ${i}. ${l.title}`,
      subtitle: `${l.theme} • Tiếng Việt: ${l.tiengViet.topic} • Viết: ${l.viet.topic}`
    });
    l.docHieu.forEach((vb, vIdx) => {
      searchIndex.push({
        id: `bai-${i}`,
        badge: `Văn bản • Bài ${i}`,
        title: vb.title,
        subtitle: `${vb.genre} – ${vb.origin} • ${(vb.coreAnalysis && vb.coreAnalysis[0]) ? vb.coreAnalysis[0].slice(0, 100) : ''}...`
      });
    });
    searchIndex.push({
      id: `bai-${i}`,
      badge: `Tiếng Việt • Bài ${i}`,
      title: l.tiengViet.topic,
      subtitle: Array.isArray(l.tiengViet.knowledge) ? l.tiengViet.knowledge.join(' | ').slice(0, 120) + '...' : ''
    });
  }

  // Helper to format Tri thức Ngữ văn with clean separate bullet items
  function formatTriThucContent(text) {
    if (!text) return '';
    let lines = [];
    if (text.includes('•') && text.split('•').filter(s => s.trim()).length > 1) {
      lines = text.split('•').map(s => s.trim()).filter(Boolean);
    } else {
      lines = text.split('\n').map(s => s.trim()).filter(Boolean);
    }

    if (lines.length > 1 || lines.some(l => l.startsWith('-'))) {
      return `<div class="space-y-3.5 mt-2">` + lines.map(line => {
        const cleanLine = line.replace(/^[•\-]\s*/, '').trim();
        const colonIdx = cleanLine.indexOf(':');
        if (colonIdx > 0 && colonIdx < 50) {
          const title = cleanLine.slice(0, colonIdx).trim();
          const body = cleanLine.slice(colonIdx + 1).trim();
          return `
            <div class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
              <span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0 shadow-sm"></span>
              <div class="leading-relaxed sm:leading-loose tracking-wide">
                <strong class="text-rose-900 dark:text-rose-200 font-bold">${title}:</strong> ${body}
              </div>
            </div>
          `;
        }
        return `
          <div class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
            <span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0 shadow-sm"></span>
            <div class="leading-relaxed sm:leading-loose tracking-wide">${cleanLine}</div>
          </div>
        `;
      }).join('') + `</div>`;
    }

    return `<p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide">${text}</p>`;
  }

  // Generate Lessons HTML
  let lessonsHtml = '';
  for (let i = 1; i <= 9; i++) {
    const l = lessons[i];
    const svgObj = svgs[i] || { note: '', svg: '' };

    // Tri thức Ngữ văn cards
    const triThucCards = l.triThucNguVan.map(tt => `
      <div class="p-5 sm:p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 hover:shadow-md transition space-y-2">
        <h5 class="font-bold text-sm sm:text-base text-rose-800 dark:text-rose-300 flex items-center gap-2 pb-1 border-b border-rose-100 dark:border-rose-900/30">
          <i class="fa-solid fa-bookmark text-rose-500 text-xs"></i> ${tt.term}
        </h5>
        ${formatTriThucContent(tt.content || tt.def || tt.desc)}
      </div>
    `).join('');

    // Đọc hiểu văn bản cards
    const docHieuCards = l.docHieu.map((vb, idx) => `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-rose-400 dark:hover:border-rose-600 transition space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-1 border-b border-slate-100 dark:border-slate-700/60">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200">
              <i class="fa-solid fa-file-lines text-[10px]"></i> Văn bản ${idx + 1}
            </span>
            <h5 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1.5">${vb.title}</h5>
          </div>
          <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 sm:text-right space-y-1">
            <p><strong class="text-slate-700 dark:text-slate-300">Thể loại:</strong> ${vb.genre}</p>
            <p><strong class="text-slate-700 dark:text-slate-300">Xuất xứ:</strong> ${vb.origin}</p>
          </div>
        </div>
        <div class="space-y-3.5">
          ${(vb.coreAnalysis || []).map(pt => {
            const isSub = pt.startsWith('•') || pt.startsWith('-');
            const clean = pt.replace(/^[•\-]\s*/, '').trim();
            const colonIdx = clean.indexOf(':');
            let contentHtml = clean;
            if (colonIdx > 0 && colonIdx < 50) {
              const head = clean.slice(0, colonIdx).trim();
              const rest = clean.slice(colonIdx + 1).trim();
              contentHtml = `<strong class="text-slate-900 dark:text-white font-bold">${head}:</strong> ${rest}`;
            }
            return `
              <div class="flex items-start gap-3.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 ${isSub ? 'ml-4 sm:ml-7' : ''}">
                <i class="${isSub ? 'fa-solid fa-chevron-right text-rose-400 text-xs mt-2' : 'fa-solid fa-circle-check text-rose-500 text-sm mt-1.5'} shrink-0"></i>
                <div class="leading-relaxed sm:leading-loose tracking-wide">${contentHtml}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');

    // Tiếng Việt knowledge
    const tiengVietRules = (Array.isArray(l.tiengViet.knowledge) ? l.tiengViet.knowledge : [l.tiengViet.knowledge]).map(r => `
      <li class="flex items-start gap-3.5 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
        <i class="fa-solid fa-spell-check text-amber-500 text-sm mt-1.5 shrink-0"></i>
        <span class="leading-relaxed sm:leading-loose tracking-wide">${r}</span>
      </li>
    `).join('');

    // Viết guide
    const vietGuideLines = typeof l.viet.guide === 'string' ? l.viet.guide.split('; ') : l.viet.guide;
    const vietGuideHtml = vietGuideLines.map(g => `
      <li class="flex items-start gap-3.5 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
        <i class="fa-solid fa-pen-nib text-indigo-500 text-sm mt-1.5 shrink-0"></i>
        <span class="leading-relaxed sm:leading-loose tracking-wide">${g}</span>
      </li>
    `).join('');

    // Nói và nghe guide
    const noiNgheLines = typeof l.noiVaNghe.guide === 'string' ? l.noiVaNghe.guide.split('; ') : l.noiVaNghe.guide;
    const noiNgheGuideHtml = noiNgheLines.map(ng => `
      <li class="flex items-start gap-3.5 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
        <i class="fa-solid fa-microphone-lines text-emerald-500 text-sm mt-1.5 shrink-0"></i>
        <span class="leading-relaxed sm:leading-loose tracking-wide">${ng}</span>
      </li>
    `).join('');

    // Lesson Quiz (3 questions)
    const quizItems = l.quiz.map((qObj, qIdx) => {
      const qId = `quiz-${i}-${qIdx}`;
      const optHtml = qObj.options.map((opt, oIdx) => `
        <label class="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-rose-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
          <input type="radio" name="${qId}" value="${oIdx}" class="mt-1 text-rose-600 focus:ring-rose-500 shrink-0">
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
      <article id="bai-${i}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-8">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 uppercase tracking-wide">
                Tập ${l.volNum} • Bài ${i}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                ${l.theme}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bài ${i}. ${l.title}
            </h2>
          </div>
          <button type="button" onclick="markLessonRead(${i})" id="btn-read-${i}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/50 border border-slate-200 dark:border-slate-700">
            <i id="icon-read-${i}" class="fa-regular fa-circle-check text-slate-400"></i>
            <span id="text-read-${i}">Đánh dấu hoàn thành</span>
          </button>
        </div>

        <!-- Sơ đồ tư duy trực quan (SVG) -->
        <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm">
                <i class="fa-solid fa-diagram-project"></i>
              </span>
              <div>
                <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">HÌNH MINH HỌA & SƠ ĐỒ TRỌNG TÂM BÀI ${i}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">${svgObj.note}</p>
              </div>
            </div>
            <span class="text-[11px] font-semibold text-rose-600 dark:text-rose-400">Chuẩn hóa cấu trúc SGK Ngữ văn 11 Kết nối tri thức</span>
          </div>
          <div class="w-full overflow-x-auto rounded-xl bg-white dark:bg-slate-900/80 p-2 sm:p-4 border border-slate-200 dark:border-slate-800 flex justify-center">
            ${svgObj.svg}
          </div>
        </div>

        <!-- MỤC 1: TRI THỨC NGỮ VĂN -->
        <div class="space-y-4">
          <div class="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span class="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold">1</span>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Tri thức Ngữ văn</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${triThucCards}
          </div>
        </div>

        <!-- MỤC 2: ĐỌC HIỂU VĂN BẢN -->
        <div class="space-y-4">
          <div class="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span class="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold">2</span>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Đọc hiểu văn bản trọng tâm</h3>
          </div>
          <div class="space-y-4">
            ${docHieuCards}
          </div>
        </div>

        <!-- MỤC 3: THỰC HÀNH TIẾNG VIỆT -->
        <div class="space-y-4">
          <div class="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span class="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold">3</span>
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Thực hành Tiếng Việt</h3>
              <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">${l.tiengViet.topic}</p>
            </div>
          </div>
          <div class="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/50">
            <ul class="space-y-2.5">
              ${tiengVietRules}
            </ul>
          </div>
        </div>

        <!-- MỤC 4 & 5: VIẾT & NÓI VÀ NGHE (2-COL) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Viết -->
          <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/50 space-y-3">
            <div class="flex items-center gap-2 pb-2 border-b border-indigo-200 dark:border-indigo-900/40">
              <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">4</span>
              <div>
                <h4 class="font-bold text-base text-slate-900 dark:text-white">Viết</h4>
                <p class="text-xs text-indigo-700 dark:text-indigo-400 font-medium">${l.viet.topic}</p>
              </div>
            </div>
            <ul class="space-y-2">
              ${vietGuideHtml}
            </ul>
          </div>

          <!-- Nói và nghe -->
          <div class="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/50 space-y-3">
            <div class="flex items-center gap-2 pb-2 border-b border-emerald-200 dark:border-emerald-900/40">
              <span class="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">5</span>
              <div>
                <h4 class="font-bold text-base text-slate-900 dark:text-white">Nói và nghe</h4>
                <p class="text-xs text-emerald-700 dark:text-emerald-400 font-medium">${l.noiVaNghe.topic}</p>
              </div>
            </div>
            <ul class="space-y-2">
              ${noiNgheGuideHtml}
            </ul>
          </div>
        </div>

        <!-- MỤC 6: CỦNG CỐ & BÀI TẬP TỰ ĐÁNH GIÁ (QUIZ) -->
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
            <div>
              <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-list-check text-rose-600"></i> Củng Cố & Luyện Tập Tự Đánh Giá (Bài ${i})
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">Chọn phương án đúng nhất và nhấn Kiểm tra để nhận phản hồi phân tích chi tiết.</p>
            </div>
            <button type="button" onclick="checkLessonQuiz(${i})" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-sm transition shrink-0">
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

  // Digital content suggestions cards
  const digitalSuggestionsHtml = digitalContentSuggestions.map(ds => `
    <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 hover:shadow-sm transition">
      <div class="flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">${ds.lesson}</span>
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Gợi ý số hoá</span>
      </div>
      <p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose font-medium tracking-wide">${ds.suggestion}</p>
    </div>
  `).join('');

  // Full page HTML string
  const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ngữ Văn 11 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 2 Tập • 9 Bài Lớn • Toàn Diện Kiến Thức & Kĩ Năng)</title>
  <meta name="description" content="Tài liệu số hóa toàn diện Ngữ Văn 11 bộ Kết nối tri thức với cuộc sống: Đủ 2 tập, 9 bài học. Đầy đủ Tri thức ngữ văn, Đọc hiểu văn bản, Thực hành tiếng Việt, Viết, Nói và nghe, Sơ đồ tư duy SVG, Ôn tập và Đấu trường trắc nghiệm.">
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
            brand: {
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
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
      background-color: #ffe4e6;
      color: #be123c;
      font-weight: 700;
      border-left: 3px solid #e11d48;
    }
    .dark .nav-link.active {
      background-color: rgba(136, 19, 55, 0.4);
      color: #fecdd3;
      border-left-color: #f43f5e;
    }

    /* Chuẩn hóa Typography môn Ngữ văn: Giãn dòng, thưa chữ, êm mắt khi đọc */
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

    /* Tiêu đề thoáng, mạch lạc */
    h1, h2, h3, h4, h5 {
      letter-spacing: -0.01em;
      line-height: 1.4;
    }

    /* Chữ trong SVG giữ nguyên không bị giãn lệch */
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
        <a href="../index.html" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/50 hover:text-rose-600 transition" title="Về trang chủ">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <div class="flex items-center gap-2.5">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center font-black shadow-sm">
            <i class="fa-solid fa-book-bookmark text-sm"></i>
          </span>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">Ngữ Văn 11</h1>
              <span class="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">SGK Kết Nối Tri Thức</span>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Đủ 2 Tập • 9 Bài • Chuẩn Hoá Toàn Diện</p>
          </div>
        </div>
      </div>

      <!-- Center: Course Progress Counter -->
      <div class="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs">
        <i class="fa-solid fa-graduation-cap text-rose-500"></i>
        <span class="font-medium text-slate-600 dark:text-slate-300">Tiến độ bài học:</span>
        <span id="progress-text" class="font-bold text-rose-600 dark:text-rose-400">0 / 9 Bài</span>
        <div class="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div id="progress-bar-fill" class="h-full bg-rose-600 transition-all duration-300" style="width: 0%"></div>
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
        <button type="button" onclick="openModal('arena-modal')" class="px-3 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5">
          <i class="fa-solid fa-fire text-amber-300 animate-pulse"></i>
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
            <input type="text" id="sidebar-filter-input" placeholder="Lọc bài học theo tên..." oninput="filterSidebarLessons(this.value)" class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-rose-500">
          </div>

          <!-- Nav Tree -->
          <nav id="sidebar-nav" class="space-y-4 text-xs max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            
            <!-- Tập Một -->
            <div class="space-y-1">
              <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-2 py-1">
                <span><i class="fa-solid fa-book-open mr-1"></i> Tập Một (Bài 1 - 5)</span>
                <span class="text-[10px] text-slate-400">166 trang</span>
              </div>
              <ul class="space-y-0.5">
                <li><a href="#bai-1" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>1. Câu chuyện & điểm nhìn</span><i id="check-side-1" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#bai-2" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>2. Cấu tứ & hình ảnh thơ</span><i id="check-side-2" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#bai-3" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>3. Cấu trúc & lập luận</span><i id="check-side-3" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#bai-4" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>4. Tự sự trong thơ trữ tình</span><i id="check-side-4" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#bai-5" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>5. Nhân vật & bi kịch</span><i id="check-side-5" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#on-tap-hk1" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-xl text-amber-700 dark:text-amber-400 font-semibold hover:bg-amber-50 dark:hover:bg-amber-950/40 transition"><i class="fa-solid fa-clock-rotate-left text-[11px]"></i> Ôn tập Học kì I</a></li>
              </ul>
            </div>

            <!-- Tập Hai -->
            <div class="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-2 py-1">
                <span><i class="fa-solid fa-feather-pointed mr-1"></i> Tập Hai (Bài 6 - 9)</span>
                <span class="text-[10px] text-slate-400">134 trang</span>
              </div>
              <ul class="space-y-0.5">
                <li><a href="#bai-6" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>6. Nguyễn Du – Tiếp biến</span><i id="check-side-6" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#bai-7" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>7. Ghi chép & tưởng tượng</span><i id="check-side-7" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#bai-8" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>8. Cấu trúc VB thông tin</span><i id="check-side-8" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#bai-9" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><span>9. Lựa chọn và hành động</span><i id="check-side-9" class="fa-regular fa-circle text-slate-300 dark:text-slate-600 text-[10px]"></i></a></li>
                <li><a href="#on-tap-hk2" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-xl text-amber-700 dark:text-amber-400 font-semibold hover:bg-amber-50 dark:hover:bg-amber-950/40 transition"><i class="fa-solid fa-clock-rotate-left text-[11px]"></i> Ôn tập Học kì II</a></li>
              </ul>
            </div>

            <!-- Chuyên Mục Dùng Chung -->
            <div class="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2 py-1">Kĩ Năng & Số Hóa</div>
              <ul class="space-y-0.5">
                <li><a href="#khung-ki-nang" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-xl text-indigo-700 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition"><i class="fa-solid fa-compass text-[11px]"></i> Khung Kĩ Năng Xuyên Suốt</a></li>
                <li><a href="#so-hoa-noi-dung" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-xl text-emerald-700 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition"><i class="fa-solid fa-lightbulb text-[11px]"></i> Gợi Ý Nội Dung Số 9 Bài</a></li>
              </ul>
            </div>

          </nav>
        </div>

        <!-- Exam Arena Card Banner in Sidebar -->
        <div class="p-5 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-md space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-bold">
              <i class="fa-solid fa-trophy text-amber-300"></i>
            </span>
            <div>
              <h4 class="font-bold text-sm">Đấu Trường Văn Học 11</h4>
              <p class="text-[11px] text-rose-100">20 câu tổng hợp • 45 phút</p>
            </div>
          </div>
          <p class="text-xs text-rose-100 leading-relaxed">Kiểm tra năng lực đọc hiểu tác phẩm, tiếng Việt và phương pháp viết theo cấu trúc đề thi chuẩn Bộ GD&ĐT.</p>
          <button type="button" onclick="openModal('arena-modal')" class="w-full py-2 rounded-xl bg-white text-rose-700 font-bold text-xs hover:bg-rose-50 shadow-sm transition">
            Vào Thi Ngay
          </button>
        </div>
      </aside>

      <!-- MAIN CONTENT (9 Cols) -->
      <main class="lg:col-span-9 space-y-10">

        <!-- HERO BANNER -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-700 via-rose-800 to-pink-900 text-white shadow-lg relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 opacity-10 text-[200px] pointer-events-none">
            <i class="fa-solid fa-feather"></i>
          </div>
          <div class="max-w-2xl space-y-3 relative z-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-rose-100 border border-white/20">
              <i class="fa-solid fa-sparkles text-amber-300"></i> Chương Trình GDPT 2018 Mới Nhất
            </span>
            <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              NGỮ VĂN 11 – HỆ THỐNG KIẾN THỨC ĐỦ BÀI, ĐỦ MẠCH
            </h2>
            <p class="text-xs sm:text-sm text-rose-100 leading-relaxed">
              Bộ sách <strong>Kết nối tri thức với cuộc sống</strong> (Tập một: 166 trang, Tập hai: 134 trang). Hệ thống hóa trọn vẹn 9 bài học lớn theo chuẩn cấu trúc: <strong>Tri thức Ngữ văn – Đọc hiểu văn bản – Thực hành Tiếng Việt – Viết – Nói và nghe – Sơ đồ tư duy trực quan (SVG) – Luyện tập tự đánh giá</strong>.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 9 Bài lớn 2 tập</span>
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 27+ Văn bản đọc hiểu</span>
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 9 Sơ đồ SVG chuẩn XML</span>
              <span class="px-3 py-1 rounded-lg bg-black/20"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 20 Câu hỏi đấu trường 45p</span>
            </div>
          </div>
        </div>

        <!-- 9 LESSON CARDS -->
        ${lessonsHtml}

        <!-- PHẦN ÔN TẬP HỌC KÌ I & II -->
        <section id="on-tap-hk1" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <i class="fa-solid fa-clock-rotate-left"></i>
            </span>
            <div>
              <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">Trọng Tâm Kiểm Tra Học Kì</span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Ôn Tập Học Kì I (Bài 1 – Bài 5)</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-[15px]">
            <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3.5 leading-relaxed sm:leading-loose">
              <h4 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 pb-1 border-b border-slate-200/60 dark:border-slate-700/60"><i class="fa-solid fa-book text-rose-500"></i> Các Thể Loại Trọng Tâm HK I</h4>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Truyện ngắn hiện đại:</strong> Tình huống éo le, điểm nhìn luân phiên, dòng ý thức (Vợ nhặt, Chí Phèo).</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Thơ trữ tình / Thơ mới:</strong> Cấu tứ độc đáo, biểu tượng thẩm mĩ, nhịp điệu (Nhớ đồng, Tràng giang).</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Văn bản nghị luận:</strong> Luận đề, luận điểm, thao tác bác bỏ - chứng minh (Cầu hiền chiếu, Tôi có một ước mơ).</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Truyện thơ dân gian:</strong> Cốt truyện dân tộc, ước vọng tự do yêu đương (Lời tiễn dặn).</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Bi kịch cổ điển & hiện đại:</strong> Xung đột gay gắt, mâu thuẫn lí tưởng và hiện thực (Hamlet, Vũ Như Tô).</p></div>
            </div>
            <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3.5 leading-relaxed sm:leading-loose">
              <h4 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 pb-1 border-b border-slate-200/60 dark:border-slate-700/60"><i class="fa-solid fa-pen-ruler text-indigo-500"></i> Tiếng Việt & Kiểu Bài Viết HK I</h4>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Tiếng Việt:</strong> Đặc điểm ngôn ngữ trang trọng / thân mật; lỗi dùng từ; liên kết văn bản; biện pháp tu từ lặp cấu trúc, đối.</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Viết văn bản nghị luận văn học:</strong> Phân tích đánh giá một tác phẩm truyện, thơ hoặc trích đoạn kịch bản kịch.</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Nói và nghe:</strong> Thuyết trình về một vấn đề xã hội có ý kiến trái chiều; tranh biện văn học.</p></div>
            </div>
          </div>
        </section>

        <section id="on-tap-hk2" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <i class="fa-solid fa-graduation-cap"></i>
            </span>
            <div>
              <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide">Trọng Tâm Đánh Giá Cuối Năm</span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Ôn Tập Học Kì II (Bài 6 – Bài 9)</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-[15px]">
            <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3.5 leading-relaxed sm:leading-loose">
              <h4 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 pb-1 border-b border-slate-200/60 dark:border-slate-700/60"><i class="fa-solid fa-feather-pointed text-rose-500"></i> Tác gia & Thể Loại HK II</h4>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Tác gia Nguyễn Du:</strong> Thiên tài ngôn ngữ lục bát, triết lí nhân sinh vượt thời đại (Trao duyên, Độc Tiểu Thanh kí).</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Thể loại Kí / Tùy bút / Bút kí:</strong> Cái tôi uyên bác, chất thơ hòa quyện hiện thực (Ai đã đặt tên cho dòng sông?).</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Văn bản thông tin hiện đại:</strong> Dữ liệu số, cấu trúc hình tháp ngược, tính khách quan và đạo đức AI.</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Thơ văn chí sĩ trung đại:</strong> Khí phách ngất ngưởng, tinh thần xả thân vì độc lập dân tộc (Bài ca ngất ngưởng, Văn tế nghĩa sĩ Cần Giuộc).</p></div>
            </div>
            <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3.5 leading-relaxed sm:leading-loose">
              <h4 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 pb-1 border-b border-slate-200/60 dark:border-slate-700/60"><i class="fa-solid fa-file-invoice text-emerald-500"></i> Nghiên Cứu & Trình Bày HK II</h4>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Phương tiện phi ngôn ngữ:</strong> Trực quan hóa số liệu qua biểu đồ, sơ đồ, infographic.</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Viết báo cáo nghiên cứu:</strong> Phương pháp nghiên cứu khoa học, trích dẫn chuẩn APA, lập luận logic và trung thực học thuật.</p></div>
              <div class="flex items-start gap-3"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span><p class="text-slate-700 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Nói và nghe:</strong> Trình bày kết quả nghiên cứu khoa học, thuyết trình đa phương tiện.</p></div>
            </div>
          </div>
        </section>

        <!-- ĐẶC BIỆT: KHUNG KĨ NĂNG DÙNG XUYÊN SUỐT HAI TẬP -->
        <section id="khung-ki-nang" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <i class="fa-solid fa-compass"></i>
            </span>
            <div>
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Phương Pháp Luận Chuẩn</span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Khung Kĩ Năng Dùng Xuyên Suốt Hai Tập</h3>
            </div>
          </div>

          <!-- 3 Blocks -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- 1. Đọc hiểu -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
              <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-book-reader text-rose-500"></i> Quy trình 5 bước Đọc hiểu tác phẩm
              </h4>
              <div class="space-y-2.5">
                ${skillsFramework.docHieu.map((s, idx) => `
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
                    <span class="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">${s.replace(/^[0-9]+\.\s*/, '')}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 2. Tạo lập văn bản -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
              <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-pen-nib text-indigo-500"></i> Kĩ năng Tạo lập văn bản
              </h4>
              <div class="space-y-2.5">
                ${skillsFramework.taoLapVanBan.map(t => `
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                    <p class="font-bold text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5"><i class="fa-solid fa-file-lines text-xs"></i> ${t.type}</p>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">${t.steps}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 3. Nói và nghe -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
              <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-microphone text-emerald-500"></i> Kĩ năng Nói và Nghe
              </h4>
              <div class="space-y-2.5">
                ${skillsFramework.noiVaNghe.map((ns, idx) => `
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
                    <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">${ns}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- ĐẶC BIỆT: GỢI Ý NỘI DUNG SỐ THEO TỪNG BÀI -->
        <section id="so-hoa-noi-dung" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <i class="fa-solid fa-lightbulb"></i>
            </span>
            <div>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Chuyển Đổi Số Giáo Dục</span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Gợi Ý Xây Dựng Nội Dung Số Hóa (9 Bài Học)</h3>
            </div>
          </div>
          <p class="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">
            Định hướng thiết kế học liệu tương tác, infographic, podcast, video bài giảng và hoạt động dự án học tập thực tế trên nền tảng web:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${digitalSuggestionsHtml}
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
        <input type="text" id="modal-search-input" placeholder="Tìm kiếm tác phẩm, tác giả, bài học, ngữ pháp tiếng Việt..." oninput="handleModalSearch(this.value)" class="flex-1 text-sm bg-transparent border-0 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400">
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
      <div class="p-5 sm:p-6 bg-gradient-to-r from-rose-700 to-pink-800 text-white flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-lg font-bold">
            <i class="fa-solid fa-stopwatch text-amber-300"></i>
          </span>
          <div>
            <h3 class="font-extrabold text-base sm:text-lg">Đấu Trường Ngữ Văn 11 – Bài Thi 45 Phút</h3>
            <p class="text-xs text-rose-100">20 câu hỏi trắc nghiệm khách quan đa mạch kiến thức</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-4 py-1.5 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 font-mono text-base sm:text-lg font-black text-amber-300" id="exam-timer">
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
        <span id="exam-answered-counter" class="text-rose-600 dark:text-rose-400 font-bold">Đã làm: 0 / 20 câu</span>
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
        <button type="button" id="exam-submit-btn" onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs sm:text-sm font-bold shadow-md transition">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài & Xem Điểm
        </button>
      </div>
    </div>
  </div>

  <!-- FLOATING BUTTONS -->
  <button type="button" id="scroll-top-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="fixed bottom-6 right-6 z-30 p-3 rounded-2xl bg-rose-600 text-white shadow-lg hover:bg-rose-700 transition opacity-0 pointer-events-none transition-all duration-200">
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
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
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
    let readLessons = JSON.parse(localStorage.getItem('nguvan11_read') || '[]');

    function updateProgressUI() {
      const count = readLessons.length;
      const pct = Math.round((count / 9) * 100);
      const textElem = document.getElementById('progress-text');
      const barElem = document.getElementById('progress-bar-fill');
      if (textElem) textElem.textContent = count + ' / 9 Bài';
      if (barElem) barElem.style.width = pct + '%';

      for (let i = 1; i <= 9; i++) {
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
            btn.className = 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/50 border border-slate-200 dark:border-slate-700';
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
      localStorage.setItem('nguvan11_read', JSON.stringify(readLessons));
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
            qBox.classList.remove('border-rose-400', 'dark:border-rose-600');
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
        container.innerHTML = '<p class="text-slate-400 text-center py-6">Nhập từ khóa để tìm nhanh tác phẩm, tác giả, bài học, ngữ pháp tiếng Việt...</p>';
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
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">\${m.badge}</span>
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
          <span id="exam-answered-counter" class="text-rose-600 dark:text-rose-400 font-bold">Đã làm: 0 / 20 câu</span>
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
      if (confirm('Bạn có chắc muốn bắt đầu lại đề thi mới?')) {
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
              ? 'border-rose-600 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-bold'
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
            <div class="flex items-center justify-between text-xs text-rose-600 dark:text-rose-400 font-bold">
              <span>Câu \${idx + 1} / \${currentExamQuestions.length}</span>
              <span>Bài \${qObj.lessonNum || qObj.lesson || ''}</span>
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
  const outPathVan11 = path.join(__dirname, '..', 'courses', 'van_11.html');
  const outPathNguvan11 = path.join(__dirname, '..', 'courses', 'nguvan_11.html');

  fs.writeFileSync(outPathVan11, fullHtml, 'utf8');
  console.log('Successfully wrote courses/van_11.html (' + fullHtml.length + ' bytes)');

  fs.writeFileSync(outPathNguvan11, fullHtml, 'utf8');
  console.log('Successfully wrote courses/nguvan_11.html (' + fullHtml.length + ' bytes)');
}

buildHtml();
