const fs = require('fs');
const path = require('path');
const vm = require('vm');

const data = require('./tinhoc10_data.js');
const diagrams = require('./tinhoc10_diagrams.js');
const quizzes = require('./tinhoc10_quizzes.js');

console.log('Building courses/tinhoc_10.html...');

function formatInline(str) {
  if (!str) return '';
  return String(str)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold">$1</code>');
}

// Markdown parser helper for content body
function parseMarkdownToHtml(md) {
  if (!md) return '';
  const sections = md.split(/(?=^###\s+)/m).filter(s => s.trim().length > 0);
  
  let html = '';
  for (const sec of sections) {
    const lines = sec.trim().split('\n');
    let title = '';
    let bodyLines = [];
    
    if (lines[0].startsWith('### ')) {
      title = lines[0].replace(/^###\s+/, '').trim();
      bodyLines = lines.slice(1);
    } else {
      bodyLines = lines;
    }
    
    let contentHtml = '';
    let inCode = false;
    let codeLang = '';
    let codeBuffer = [];
    let inList = false;
    let listBuffer = [];
    let inTable = false;
    let tableBuffer = [];

    function flushList() {
      if (inList && listBuffer.length > 0) {
        contentHtml += `<ul class="space-y-2.5 my-3">\n${listBuffer.join('\n')}\n</ul>\n`;
        listBuffer = [];
        inList = false;
      }
    }

    function flushTable() {
      if (inTable && tableBuffer.length > 0) {
        let tableHtml = '<div class="overflow-x-auto my-4 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs"><table class="w-full text-left text-xs sm:text-sm">\n';
        const headers = tableBuffer[0].split('|').map(c => c.trim()).filter(c => c.length > 0);
        tableHtml += '<thead class="bg-cyan-50 dark:bg-slate-800 text-cyan-900 dark:text-cyan-300 font-bold border-b border-cyan-100 dark:border-slate-700"><tr>';
        for (const h of headers) {
          tableHtml += `<th class="p-3">${formatInline(h)}</th>`;
        }
        tableHtml += '</tr></thead>\n<tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300">\n';
        for (let r = 2; r < tableBuffer.length; r++) {
          const cells = tableBuffer[r].split('|').map(c => c.trim()).filter(c => c.length > 0);
          if (cells.length > 0) {
            tableHtml += '<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">';
            for (const c of cells) {
              tableHtml += `<td class="p-3 leading-relaxed">${formatInline(c)}</td>`;
            }
            tableHtml += '</tr>\n';
          }
        }
        tableHtml += '</tbody></table></div>\n';
        contentHtml += tableHtml;
        tableBuffer = [];
        inTable = false;
      }
    }

    function flushCode() {
      if (inCode) {
        const rawCode = codeBuffer.join('\n');
        const escaped = rawCode
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        contentHtml += `
<div class="my-3.5 rounded-xl overflow-hidden border border-slate-700/90 bg-slate-900 text-slate-100 shadow-sm">
  <div class="flex items-center justify-between px-3.5 py-1.5 bg-slate-800/90 border-b border-slate-700 text-xs font-mono">
    <div class="flex items-center gap-2 text-cyan-400">
      <i class="fa-brands fa-python text-sm"></i>
      <span class="font-bold text-[11px] tracking-wide uppercase">${codeLang || 'PYTHON 3'}</span>
    </div>
    <button onclick="copyCode(this)" class="px-2.5 py-1 rounded bg-slate-700/80 hover:bg-slate-600 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-[11px]" title="Sao chép mã nguồn">
      <i class="fa-regular fa-copy"></i>
      <span>Copy code</span>
    </button>
  </div>
  <pre class="p-3.5 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-emerald-300 font-medium"><code>${escaped}</code></pre>
</div>\n`;
        codeBuffer = [];
        inCode = false;
      }
    }

    for (let i = 0; i < bodyLines.length; i++) {
      const line = bodyLines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith('```')) {
        if (!inCode) {
          flushList();
          flushTable();
          inCode = true;
          codeLang = trimmed.replace(/^```/, '').trim();
          codeBuffer = [];
        } else {
          flushCode();
        }
        continue;
      }

      if (inCode) {
        codeBuffer.push(line);
        continue;
      }

      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList();
        inTable = true;
        tableBuffer.push(trimmed);
        continue;
      } else {
        flushTable();
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true;
        const text = trimmed.slice(2).trim();
        const formatted = formatInline(text);
        listBuffer.push(`  <li class="flex items-start gap-2.5 leading-relaxed text-xs sm:text-sm text-slate-700 dark:text-slate-300">
    <i class="fa-solid fa-circle-check text-cyan-500 text-xs mt-1 shrink-0"></i>
    <span>${formatted}</span>
  </li>`);
        continue;
      } else {
        flushList();
      }

      if (trimmed.startsWith('> ')) {
        const quoteText = formatInline(trimmed.slice(2).trim());
        contentHtml += `
<div class="my-3 p-3.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/30 border-l-4 border-cyan-500 text-slate-800 dark:text-cyan-200 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
  <i class="fa-solid fa-lightbulb text-cyan-500 text-base shrink-0 mt-0.5"></i>
  <div class="font-medium">${quoteText}</div>
</div>\n`;
        continue;
      }

      if (trimmed.length > 0) {
        contentHtml += `<p class="my-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">${formatInline(trimmed)}</p>\n`;
      }
    }

    flushList();
    flushTable();
    flushCode();

    if (title) {
      html += `
<div class="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 shadow-xs mb-4">
  <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
    <i class="fa-solid fa-laptop-code text-cyan-500 text-sm"></i>
    <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${title}</h4>
  </div>
  ${contentHtml}
</div>\n`;
    } else if (contentHtml.trim().length > 0) {
      html += contentHtml;
    }
  }

  return html;
}

// Group lessons by topic for sidebar
const topicLessons = {};
for (const t of data.topics) {
  topicLessons[t.num] = [];
}
for (let i = 1; i <= 34; i++) {
  const lesson = data.lessons[i];
  if (topicLessons[lesson.topic]) {
    topicLessons[lesson.topic].push(lesson);
  }
}

// Generate Sidebar HTML
let sidebarNavHtml = '';
for (const t of data.topics) {
  sidebarNavHtml += `
      <div class="mb-5">
        <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          <i class="fa-solid ${t.icon}"></i>
          <span>${t.title}</span>
        </div>
        <div class="mt-1 space-y-1">
  `;
  for (const l of topicLessons[t.num]) {
    const orientBadge = l.orientation === 'CS' 
      ? '<span class="text-[9px] px-1.5 py-0.2 rounded bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">CS</span>'
      : (l.orientation === 'ICT'
        ? '<span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">ICT</span>'
        : '');

    sidebarNavHtml += `
        <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-cyan-200 dark:hover:border-cyan-800/60 hover:bg-cyan-50/70 dark:hover:bg-cyan-950/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-cyan-600 dark:text-cyan-400">Bài ${l.num}</span>
            <div class="flex items-center gap-1">
              ${orientBadge}
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Chủ đề ${l.topic}</span>
            </div>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 truncate">
            ${l.title}
          </div>
        </a>
    `;
  }
  sidebarNavHtml += `
        </div>
      </div>
  `;
}

// Generate Main Content Lessons HTML
let mainContentHtml = '';
for (let i = 1; i <= 34; i++) {
  const l = data.lessons[i];
  const t = data.topics.find(top => top.num === l.topic);
  const diag = diagrams[i] || '';
  const quizList = quizzes[i] || [];
  const parsedBody = parseMarkdownToHtml(l.body);

  const orientPill = l.orientation === 'CS'
    ? '<span class="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-900/60"><i class="fa-solid fa-code mr-1"></i>Khoa học máy tính</span>'
    : (l.orientation === 'ICT'
      ? '<span class="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60"><i class="fa-solid fa-bezier-curve mr-1"></i>Tin học ứng dụng</span>'
      : '<span class="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200/60 dark:border-cyan-900/60"><i class="fa-solid fa-book-open mr-1"></i>Kiến thức chung</span>');

  // Build Quiz HTML for this lesson
  let quizzesHtml = '';
  if (quizList.length > 0) {
    quizzesHtml += `
      <!-- Review Quizzes Section -->
      <div class="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
        <div class="flex items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm sm:text-base">
            <i class="fa-solid fa-circle-question text-lg"></i>
            <span>Luyện tập củng cố Bài ${l.num} (${quizList.length} câu hỏi)</span>
          </div>
          <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Chọn 1 đáp án đúng</span>
        </div>
        <div class="space-y-4">
    `;

    quizList.forEach((qItem, qIdx) => {
      quizzesHtml += `
          <div class="quiz-item p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs" data-lesson="${l.num}" data-quiz="${qIdx}">
            <p class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-3">
              <span class="text-cyan-600 dark:text-cyan-400 mr-1.5">Câu ${qIdx + 1}:</span>
              ${formatInline(qItem.q)}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
      `;
      qItem.options.forEach((opt, optIdx) => {
        const isCorrect = optIdx === qItem.ans;
        const optLetter = String.fromCharCode(65 + optIdx);
        const escapedExp = (qItem.exp || '').replace(/'/g, "\\'");
        quizzesHtml += `
              <button onclick="checkLessonQuiz(this, ${isCorrect}, '${escapedExp}')" class="quiz-opt text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:border-cyan-300 dark:hover:border-cyan-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
                <span class="font-bold text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">${optLetter}.</span>
                <span class="leading-relaxed">${formatInline(opt)}</span>
              </button>
        `;
      });
      quizzesHtml += `
            </div>
            <div class="quiz-feedback hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
          </div>
      `;
    });

    quizzesHtml += `
        </div>
      </div>
    `;
  }

  mainContentHtml += `
      <!-- Bài ${l.num}: ${l.title} -->
      <article id="bai-${l.num}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition mb-10">
        
        <!-- Header badge & bookmark -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs sm:text-sm shadow-xs shadow-cyan-500/20 tracking-wide">
              <i class="fa-solid fa-microchip"></i> Bài ${l.num}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200/60 dark:border-cyan-900/60">
              ${t.title}
            </span>
            ${orientPill}
          </div>
          <button onclick="toggleBookmark('bai-${l.num}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <!-- Lesson Title -->
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-6 leading-snug tracking-tight">
          <span class="text-cyan-600 dark:text-cyan-400">Bài ${l.num}:</span> ${l.title}
        </h3>

        <!-- Pure SVG Vector Diagram -->
        <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
            <span class="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ trực quan Bài ${l.num}: ${l.title}
            </span>
            <span class="text-slate-400 text-[11px] font-mono">SVG Vector Interactive</span>
          </div>
          <div class="w-full flex items-center justify-center overflow-x-auto">
            ${diag}
          </div>
        </div>

        <!-- Main Body Content -->
        <div class="lesson-body text-slate-700 dark:text-slate-300 leading-[1.85] tracking-[0.015em] text-sm sm:text-base">
          ${parsedBody}
        </div>

        <!-- Quizzes Section -->
        ${quizzesHtml}

      </article>
  `;
}

// Parse cheatsheet tables for modal
const pythonCheatsheetHtml = parseMarkdownToHtml(data.pythonCheatsheet);
const mistakesCheatsheetHtml = parseMarkdownToHtml(data.mistakesCheatsheet);

// Prepare question bank for 45:00 Exam modal
const allQuestionsBank = [];
for (let i = 1; i <= 34; i++) {
  const qList = quizzes[i] || [];
  qList.forEach(q => {
    allQuestionsBank.push({
      lessonNum: i,
      lessonTitle: data.lessons[i].title,
      question: q.q,
      options: q.options,
      answer: q.ans,
      explanation: q.exp
    });
  });
}

console.log(`Total questions in exam bank: ${allQuestionsBank.length}`);

// Full HTML Template
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tin Học 10 - Kết Nối Tri Thức | Học Liệu Số Toàn Diện 34 Bài</title>
  <meta name="description" content="Học liệu số trực tuyến Tin học lớp 10 Kết nối tri thức - 6 Chủ đề, 34 bài học, đồ họa Inkscape ICT và lập trình Python CS, 34 sơ đồ trực quan và 102 câu trắc nghiệm.">
  
  <!-- Font & Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            cyan: {
              50: '#ecfeff',
              100: '#cffafe',
              200: '#a5f3fc',
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
              600: '#0891b2',
              700: '#0e7490',
              800: '#155e75',
              900: '#164e63'
            },
            slate: {
              850: '#151f32',
              950: '#090d16'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    };
  </script>

  <style>
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(6, 182, 212, 0.45) transparent;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(148, 163, 184, 0.08);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(6, 182, 212, 0.45);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(6, 182, 212, 0.75);
    }
    .dark .custom-scrollbar {
      scrollbar-color: rgba(34, 211, 238, 0.45) transparent;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(34, 211, 238, 0.45);
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(34, 211, 238, 0.75);
    }
    .nav-link.active {
      background-color: rgb(6 182 212 / 0.15);
      border-color: rgb(6 182 212);
      color: rgb(8 145 178);
    }
    .dark .nav-link.active {
      background-color: rgb(6 182 212 / 0.2);
      border-color: rgb(34 211 238);
      color: rgb(34 211 238);
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-white min-h-screen">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Back & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-slate-500 hover:text-cyan-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Quay lại trang chủ">
          <i class="fa-solid fa-arrow-left text-lg"></i>
        </a>
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
            <i class="fa-solid fa-microchip text-lg"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">Tin Học 10</h1>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                KẾT NỐI TRI THỨC
              </span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">Trọn bộ 6 Chủ đề • 34 Bài học chuẩn SGK • ICT & CS</p>
          </div>
        </div>
      </div>

      <!-- Center & Right: Action Modals & Tools -->
      <div class="flex items-center gap-2">
        <!-- Quick Search (Ctrl+K) -->
        <button onclick="openModal('modal-search')" class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-100/70 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:border-cyan-300 dark:hover:border-cyan-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition text-xs font-medium">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>Tìm kiếm bài học...</span>
          <kbd class="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-[10px] font-mono shadow-xs border border-slate-200 dark:border-slate-600">Ctrl K</kbd>
        </button>

        <!-- Python Cheatsheet Button -->
        <button onclick="openModal('modal-formulas')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-900/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition text-xs font-bold">
          <i class="fa-brands fa-python text-sm"></i>
          <span class="hidden sm:inline">Lệnh Python & Thuật ngữ</span>
        </button>

        <!-- Mistakes Cheatsheet Button -->
        <button onclick="openModal('modal-mistakes')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/80 dark:border-amber-900/60 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition text-xs font-bold">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span class="hidden sm:inline">10 Sai lầm kinh điển</span>
        </button>

        <!-- Exam Room Button -->
        <button onclick="openModal('modal-exam')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs shadow-xs shadow-cyan-500/20 hover:opacity-95 transition">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Phòng Thi 45:00</span>
        </button>

        <!-- Dark / Light Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>

        <!-- Mobile Menu Toggle -->
        <button onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container Layout: 12 Columns (4-col Sidebar + 8-col Content) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Desktop Sticky Sidebar (4 Columns) -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs p-4 sm:p-5 overflow-hidden">
        
        <div class="shrink-0 flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <i class="fa-solid fa-list-ul text-cyan-600 dark:text-cyan-400"></i>
            <span>MỤC LỤC BÀI HỌC</span>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            34 Bài
          </span>
        </div>

        <!-- Sidebar Filter & Bookmarks -->
        <div class="shrink-0 flex items-center gap-2 mb-3">
          <div class="relative flex-1">
            <i class="fa-solid fa-search absolute left-3 top-2.5 text-xs text-slate-400"></i>
            <input type="text" id="sidebar-filter" oninput="filterSidebar(this.value)" placeholder="Lọc bài học nhanh..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 focus:outline-hidden text-slate-800 dark:text-slate-200">
          </div>
          <button id="bookmark-filter-btn" onclick="toggleBookmarkFilter()" class="p-1.5 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-amber-500 transition text-xs font-medium flex items-center gap-1" title="Chỉ hiện bài đã đánh dấu">
            <i class="fa-solid fa-bookmark text-xs"></i>
          </button>
        </div>

        <!-- Navigation Scrollable Area -->
        <nav class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 space-y-3 text-sm pb-8" id="sidebar-nav">
          ${sidebarNavHtml}
        </nav>
      </aside>

      <!-- Main Content Area (8 Columns) -->
      <main class="lg:col-span-8 min-w-0">
        
        <!-- Welcome Hero Banner -->
        <section class="bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-md mb-8 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3">
              <i class="fa-solid fa-bolt text-yellow-300"></i> Chương trình GDPT 2018
            </div>
            <h2 class="text-2xl sm:text-3xl font-black mb-2 tracking-tight">Học Liệu Số Tin Học Lớp 10</h2>
            <p class="text-cyan-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Hệ thống hóa toàn bộ 6 Chủ đề và 34 Bài học Kết nối tri thức. Tích hợp đầy đủ cả hai định hướng <strong>Tin học ứng dụng (ICT - Thiết kế đồ họa Inkscape)</strong> và <strong>Khoa học máy tính (CS - Lập trình Python 3)</strong>, kèm 34 sơ đồ trực quan và ngân hàng 102 câu trắc nghiệm luyện tập có đáp án giải thích chi tiết.
            </p>
            <div class="flex flex-wrap gap-3 mt-4 text-xs font-bold">
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group text-cyan-300"></i> 6 Chủ đề
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-book-bookmark text-cyan-300"></i> 34 Bài học
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-bezier-curve text-emerald-300"></i> Inkscape (ICT)
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-brands fa-python text-yellow-300"></i> Python 3 (CS)
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-green-300"></i> 102 Câu trắc nghiệm
              </span>
            </div>
          </div>
        </section>

        <!-- Lessons Container -->
        <div id="lessons-container">
          ${mainContentHtml}
        </div>

      </main>

    </div>
  </div>

  <!-- Mobile Drawer Sidebar -->
  <div id="mobile-backdrop" onclick="toggleMobileSidebar()" class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 hidden transition-opacity lg:hidden"></div>
  <div id="mobile-sidebar" class="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 z-50 shadow-2xl transform -translate-x-full transition-transform duration-300 flex flex-col lg:hidden">
    <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
        <i class="fa-solid fa-list-ul text-cyan-600 dark:text-cyan-400"></i>
        <span>MỤC LỤC BÀI HỌC</span>
      </div>
      <button onclick="toggleMobileSidebar()" class="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="p-4 border-b border-slate-100 dark:border-slate-800">
      <input type="text" oninput="filterSidebar(this.value)" placeholder="Tìm bài học..." class="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 text-slate-800 dark:text-slate-200">
    </div>
    <nav class="custom-scrollbar overflow-y-auto p-4 flex-1 min-h-0 space-y-4 text-sm pb-10">
      ${sidebarNavHtml}
    </nav>
  </div>

  <!-- MODAL 1: Python Cheatsheet & Terms (modal-formulas) -->
  <div id="modal-formulas" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center">
            <i class="fa-brands fa-python text-lg"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Bảng Tra Cứu Lệnh Python & Thuật Ngữ</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Tổng hợp cú pháp lệnh, hàm có sẵn, cấu trúc điều khiển và kiểu dữ liệu</p>
          </div>
        </div>
        <button onclick="closeModal('modal-formulas')" class="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-slate-700 dark:text-slate-300">
        ${pythonCheatsheetHtml}
      </div>
    </div>
  </div>

  <!-- MODAL 2: 10 Common Mistakes Cheatsheet (modal-mistakes) -->
  <div id="modal-mistakes" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-amber-50 dark:bg-amber-950/40">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center">
            <i class="fa-solid fa-triangle-exclamation text-lg"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Cẩm Nang 10 Sai Lầm Kinh Điển</h3>
            <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Bẫy lập trình Python, lỗi logic thường gặp và quy tắc an toàn số</p>
          </div>
        </div>
        <button onclick="closeModal('modal-mistakes')" class="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-amber-100/50 dark:hover:bg-amber-900/40">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-slate-700 dark:text-slate-300">
        ${mistakesCheatsheetHtml}
      </div>
    </div>
  </div>

  <!-- MODAL 3: Quick Search (modal-search) -->
  <div id="modal-search" class="fixed inset-0 z-50 hidden flex items-start justify-center p-4 pt-20 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400 text-base"></i>
        <input type="text" id="search-input" oninput="liveSearch(this.value)" placeholder="Gõ tên bài học hoặc từ khóa (ví dụ: Python, Inkscape, vòng lặp, mảng, biến...)..." class="w-full bg-transparent border-0 focus:outline-hidden text-sm sm:text-base text-slate-800 dark:text-slate-100 placeholder-slate-400 font-medium">
        <button onclick="closeModal('modal-search')" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <kbd class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono border border-slate-300 dark:border-slate-700">ESC</kbd>
        </button>
      </div>
      <div id="search-results" class="p-3 max-h-96 overflow-y-auto custom-scrollbar space-y-1">
        <div class="p-4 text-center text-xs text-slate-400 font-medium">Gõ để tìm kiếm bài học trong 34 bài...</div>
      </div>
    </div>
  </div>

  <!-- MODAL 4: Exam Room 45:00 (modal-exam) -->
  <div id="modal-exam" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <i class="fa-solid fa-trophy text-yellow-300"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base">Phòng Thi Trạng Nguyên Tin Học 10</h3>
            <p class="text-xs text-cyan-100 font-medium">Bộ đề 10 câu ngẫu nhiên chọn lọc từ ngân hàng 102 câu</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/30 text-yellow-300 font-mono font-bold text-sm">
            <i class="fa-regular fa-clock"></i>
            <span id="exam-timer">45:00</span>
          </div>
          <button onclick="closeModal('modal-exam')" class="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>
      
      <!-- Exam Body -->
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6" id="exam-container">
        <!-- Injected dynamically via JS -->
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
        <div class="text-xs font-semibold text-slate-500 dark:text-slate-400" id="exam-status">
          Đã hoàn thành: 0 / 10 câu
        </div>
        <button id="exam-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md transition">
          Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- Client-side Interactive JavaScript -->
  <script>
    // Theme Dark / Light toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon text-sm text-slate-500';
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      applyTheme(isDark);
    });

    // Mobile Sidebar Drawer
    function toggleMobileSidebar() {
      const sidebar = document.getElementById('mobile-sidebar');
      const backdrop = document.getElementById('mobile-backdrop');
      const isHidden = sidebar.classList.contains('-translate-x-full');
      if (isHidden) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Modal Control
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        if (id === 'modal-search') {
          setTimeout(() => document.getElementById('search-input')?.focus(), 100);
        } else if (id === 'modal-exam') {
          startExam();
        }
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }

    // Close on backdrop or ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('[id^="modal-"]').forEach(m => m.classList.add('hidden'));
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
    });

    // Active Scroll Spy for Sidebar Links
    window.addEventListener('scroll', () => {
      const lessons = document.querySelectorAll('article.lesson-card');
      const scrollPos = window.scrollY + 160;

      lessons.forEach(lesson => {
        const top = lesson.offsetTop;
        const height = lesson.offsetHeight;
        const id = lesson.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    });

    // Filter Sidebar Lessons
    function filterSidebar(query) {
      const q = query.toLowerCase().trim();
      document.querySelectorAll('#sidebar-nav .nav-link, #mobile-sidebar .nav-link').forEach(link => {
        const text = link.innerText.toLowerCase();
        if (text.includes(q)) {
          link.style.display = '';
        } else {
          link.style.display = 'none';
        }
      });
    }

    // Bookmarking System
    let bookmarks = JSON.parse(localStorage.getItem('tinhoc10_bookmarks') || '[]');
    let bookmarkOnlyMode = false;

    function toggleBookmark(lessonId) {
      const index = bookmarks.indexOf(lessonId);
      if (index === -1) {
        bookmarks.push(lessonId);
      } else {
        bookmarks.splice(index, 1);
      }
      localStorage.setItem('tinhoc10_bookmarks', JSON.stringify(bookmarks));
      updateBookmarkUI();
    }

    function updateBookmarkUI() {
      document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const lesson = btn.closest('article');
        const id = lesson.getAttribute('id');
        const icon = btn.querySelector('i');
        if (bookmarks.includes(id)) {
          icon.className = 'fa-solid fa-bookmark text-amber-500';
          btn.setAttribute('title', 'Bỏ đánh dấu bài này');
        } else {
          icon.className = 'fa-regular fa-bookmark';
          btn.setAttribute('title', 'Lưu bài học');
        }
      });
    }

    function toggleBookmarkFilter() {
      bookmarkOnlyMode = !bookmarkOnlyMode;
      const btn = document.getElementById('bookmark-filter-btn');
      if (bookmarkOnlyMode) {
        btn.classList.add('bg-amber-500', 'text-white', 'border-amber-500');
        btn.classList.remove('text-slate-500');
        document.querySelectorAll('#lessons-container > article').forEach(article => {
          const id = article.getAttribute('id');
          if (bookmarks.includes(id)) {
            article.style.display = '';
          } else {
            article.style.display = 'none';
          }
        });
      } else {
        btn.classList.remove('bg-amber-500', 'text-white', 'border-amber-500');
        btn.classList.add('text-slate-500');
        document.querySelectorAll('#lessons-container > article').forEach(article => {
          article.style.display = '';
        });
      }
    }

    // Copy Python Code Button
    function copyCode(btn) {
      const pre = btn.closest('div.rounded-xl').querySelector('pre code');
      if (pre) {
        navigator.clipboard.writeText(pre.innerText).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check text-green-400"></i><span>Đã chép!</span>';
          btn.classList.add('bg-emerald-600', 'text-white');
          setTimeout(() => {
            btn.innerHTML = original;
            btn.classList.remove('bg-emerald-600', 'text-white');
          }, 2000);
        });
      }
    }

    // Check Lesson Quiz
    function checkLessonQuiz(btn, isCorrect, explanation) {
      const quizItem = btn.closest('.quiz-item');
      const buttons = quizItem.querySelectorAll('.quiz-opt');
      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-cyan-50', 'dark:hover:bg-cyan-950/40', 'hover:border-cyan-300');
      });

      const feedback = quizItem.querySelector('.quiz-feedback');
      feedback.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs sm:text-sm leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200';
        feedback.innerHTML = '<div class="flex items-start gap-2 font-semibold"><i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-base"></i><span>Chính xác! ' + explanation + '</span></div>';
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs sm:text-sm leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-200';
        feedback.innerHTML = '<div class="flex items-start gap-2 font-semibold"><i class="fa-solid fa-circle-xmark text-rose-500 mt-0.5 text-base"></i><span>Chưa đúng! ' + explanation + '</span></div>';
      }
    }

    // Live Search (Ctrl+K)
    const lessonsSearchData = ${JSON.stringify(Object.values(data.lessons).map(l => ({
      num: l.num,
      title: l.title,
      topic: l.topic,
      orientation: l.orientation
    })))};

    function liveSearch(q) {
      const resultsContainer = document.getElementById('search-results');
      const query = q.toLowerCase().trim();
      if (!query) {
        resultsContainer.innerHTML = '<div class="p-4 text-center text-xs text-slate-400 font-medium">Gõ để tìm kiếm bài học trong 34 bài...</div>';
        return;
      }
      const matches = lessonsSearchData.filter(l => 
        l.title.toLowerCase().includes(query) ||
        ('bài ' + l.num).includes(query) ||
        l.orientation.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = '<div class="p-4 text-center text-xs text-slate-400 font-medium">Không tìm thấy bài học nào phù hợp với "' + query + '".</div>';
        return;
      }

      let html = '';
      matches.forEach(m => {
        html += '<a href="#bai-' + m.num + '" onclick="closeModal(\\'modal-search\\')" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-between border border-transparent hover:border-slate-200 dark:hover:border-slate-700">' +
          '<div>' +
            '<div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Bài ' + m.num + ': ' + m.title + '</div>' +
            '<div class="text-[11px] text-slate-400 font-medium">Chủ đề ' + m.topic + ' • Định hướng: ' + m.orientation + '</div>' +
          '</div>' +
          '<i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>' +
        '</a>';
      });
      resultsContainer.innerHTML = html;
    }

    // 45:00 Exam Implementation
    const examBank = ${JSON.stringify(allQuestionsBank)};
    let activeExamQuestions = [];
    let examTimerInterval = null;
    let examTimeLeft = 45 * 60; // 45 minutes
    let userAnswers = {};

    function startExam() {
      if (activeExamQuestions.length > 0) return; // already running
      // Pick 10 random questions
      const shuffled = [...examBank].sort(() => 0.5 - Math.random());
      activeExamQuestions = shuffled.slice(0, 10);
      userAnswers = {};
      examTimeLeft = 45 * 60;

      const container = document.getElementById('exam-container');
      let html = '';
      activeExamQuestions.forEach((q, idx) => {
        html += '<div class="exam-q p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850" data-idx="' + idx + '">' +
          '<div class="flex items-center justify-between text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-2">' +
            '<span>Câu ' + (idx + 1) + ' / 10</span>' +
            '<span class="text-slate-400 font-medium text-[11px]">Nguồn: Bài ' + q.lessonNum + ' - ' + q.lessonTitle + '</span>' +
          '</div>' +
          '<div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-3">' + q.question + '</div>' +
          '<div class="grid grid-cols-1 gap-2">';
        
        q.options.forEach((opt, optIdx) => {
          const letter = String.fromCharCode(65 + optIdx);
          html += '<button onclick="selectExamOpt(this, ' + idx + ', ' + optIdx + ')" class="exam-opt text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-cyan-400 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition flex items-start gap-2.5">' +
            '<span class="font-bold text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">' + letter + '.</span>' +
            '<span>' + opt + '</span>' +
          '</button>';
        });

        html += '</div></div>';
      });

      container.innerHTML = html;
      updateExamStatus();

      // Start Countdown
      clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        document.getElementById('exam-timer').innerText = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function selectExamOpt(btn, qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      const parent = btn.closest('.exam-q');
      parent.querySelectorAll('.exam-opt').forEach(b => {
        b.classList.remove('border-cyan-500', 'bg-cyan-50', 'dark:bg-cyan-950/60', 'font-bold');
      });
      btn.classList.add('border-cyan-500', 'bg-cyan-50', 'dark:bg-cyan-950/60', 'font-bold');
      updateExamStatus();
    }

    function updateExamStatus() {
      const answered = Object.keys(userAnswers).length;
      document.getElementById('exam-status').innerText = 'Đã hoàn thành: ' + answered + ' / 10 câu';
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      activeExamQuestions.forEach((q, idx) => {
        const chosen = userAnswers[idx];
        const isCorrect = chosen === q.answer;
        if (isCorrect) score++;

        const parent = document.querySelector('.exam-q[data-idx="' + idx + '"]');
        if (parent) {
          const opts = parent.querySelectorAll('.exam-opt');
          opts.forEach(b => b.disabled = true);
          if (chosen !== undefined) {
            if (isCorrect) {
              opts[chosen].classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
            } else {
              opts[chosen].classList.add('bg-rose-100', 'dark:bg-rose-950', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
            }
          }
          // Highlight correct answer
          opts[q.answer].classList.add('border-emerald-500', 'font-bold');

          // Append explanation
          const exp = document.createElement('div');
          exp.className = 'mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs leading-relaxed text-slate-700 dark:text-slate-300';
          exp.innerHTML = '<span class="font-bold text-cyan-600 dark:text-cyan-400">Giải thích: </span>' + q.explanation;
          parent.appendChild(exp);
        }
      });

      const container = document.getElementById('exam-container');
      const banner = document.createElement('div');
      banner.className = 'p-6 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center shadow-lg mb-6';
      banner.innerHTML = '<div class="text-3xl font-black mb-1">Kết quả: ' + score + ' / 10 Điểm (' + (score * 10) + '%)</div>' +
        '<p class="text-xs sm:text-sm text-cyan-100">' + (score >= 8 ? 'Xuất sắc! Bạn đã nắm vững lý thuyết và thực hành Tin học 10.' : (score >= 5 ? 'Khá tốt! Hãy ôn lại các câu trả lời sai bên dưới để hoàn thiện kiến thức.' : 'Cần cố gắng thêm! Hãy xem lại tài liệu và làm lại bài kiểm tra.')) + '</p>';
      container.prepend(banner);

      const submitBtn = document.getElementById('exam-submit-btn');
      submitBtn.innerText = 'Làm lại đề mới';
      submitBtn.onclick = () => {
        activeExamQuestions = [];
        startExam();
        submitBtn.innerText = 'Nộp bài chấm điểm';
        submitBtn.onclick = submitExam;
      };
    }

    document.addEventListener("DOMContentLoaded", () => {
      updateBookmarkUI();
    });
  </script>
</body>
</html>`;

// Test JS Syntax with VM before saving
const inlineScripts = fullHtml.match(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
console.log(`Verifying ${inlineScripts.length} inline scripts...`);
inlineScripts.forEach((s, idx) => {
  const code = s.replace(/<\/?script[^>]*>/gi, '');
  try {
    new vm.Script(code);
    console.log(`Script ${idx + 1} syntax: VALID (${code.length} chars)`);
  } catch (err) {
    console.error(`Script ${idx + 1} SYNTAX ERROR:`, err.message);
    process.exit(1);
  }
});

const outputPath = path.join(__dirname, '../courses/tinhoc_10.html');
fs.writeFileSync(outputPath, fullHtml, 'utf8');
console.log(`Successfully generated courses/tinhoc_10.html!`);
console.log(`Output size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
