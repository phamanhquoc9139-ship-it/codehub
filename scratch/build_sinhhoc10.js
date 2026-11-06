// scratch/build_sinhhoc10.js
const fs = require('fs');
const vm = require('vm');

const data = require('./sinhhoc10_data.js');
const diagrams = require('./sinhhoc10_diagrams.js');
const quizzes = require('./sinhhoc10_quizzes.js');

console.log('Building courses/sinhhoc_10.html...');

function formatInline(str) {
  if (!str) return '';
  return String(str)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-emerald-700 dark:text-emerald-300 font-medium">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-emerald-100/80 dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-semibold">$1</code>');
}

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
    let inList = false;
    let listBuffer = [];
    let inNumList = false;
    let numListBuffer = [];
    let inTable = false;
    let tableBuffer = [];

    function flushList() {
      if (inList && listBuffer.length > 0) {
        contentHtml += `<ul class="space-y-2.5 my-3">\n${listBuffer.join('\n')}\n</ul>\n`;
        listBuffer = [];
        inList = false;
      }
    }

    function flushNumList() {
      if (inNumList && numListBuffer.length > 0) {
        contentHtml += `<ol class="space-y-2.5 my-3">\n${numListBuffer.join('\n')}\n</ol>\n`;
        numListBuffer = [];
        inNumList = false;
      }
    }

    function flushTable() {
      if (inTable && tableBuffer.length > 0) {
        let tableHtml = '<div class="overflow-x-auto my-4 rounded-xl border border-emerald-200/80 dark:border-slate-700 shadow-xs"><table class="w-full text-left text-xs sm:text-sm">\n';
        const headers = tableBuffer[0].split('|').map(c => c.trim()).filter(c => c.length > 0);
        tableHtml += '<thead class="bg-emerald-50 dark:bg-slate-800 text-emerald-900 dark:text-emerald-300 font-bold border-b border-emerald-200 dark:border-slate-700"><tr>';
        for (const h of headers) {
          tableHtml += `<th class="p-3">${formatInline(h)}</th>`;
        }
        tableHtml += '</tr></thead>\n<tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300">\n';
        for (let r = 2; r < tableBuffer.length; r++) {
          const cells = tableBuffer[r].split('|').map(c => c.trim()).filter(c => c.length > 0);
          if (cells.length > 0) {
            tableHtml += '<tr class="hover:bg-emerald-50/40 dark:hover:bg-slate-800/40 transition">';
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

    for (let i = 0; i < bodyLines.length; i++) {
      const line = bodyLines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        flushNumList();
        flushTable();
        continue;
      }

      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList();
        flushNumList();
        inTable = true;
        tableBuffer.push(trimmed);
        continue;
      } else {
        flushTable();
      }

      if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
        flushList();
        flushNumList();
        contentHtml += `<div class="my-3.5 p-3.5 rounded-xl bg-emerald-50/80 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700 text-center font-semibold text-slate-900 dark:text-emerald-100 overflow-x-auto">${trimmed}</div>\n`;
        continue;
      }

      const numMatch = /^(\d+)\.\s+(.*)$/.exec(trimmed);
      if (numMatch) {
        flushList();
        inNumList = true;
        const stepNum = numMatch[1];
        const stepText = formatInline(numMatch[2]);
        numListBuffer.push(`  <li class="flex items-start gap-2.5 leading-relaxed text-xs sm:text-sm text-slate-700 dark:text-slate-300">
    <span class="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">${stepNum}</span>
    <span>${stepText}</span>
  </li>`);
        continue;
      } else {
        flushNumList();
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true;
        const text = trimmed.slice(2).trim();
        const isSubItem = line.startsWith('  - ') || line.startsWith('  * ');
        const formatted = formatInline(text);
        listBuffer.push(`  <li class="flex items-start gap-2.5 leading-relaxed text-xs sm:text-sm text-slate-700 dark:text-slate-300 ${isSubItem ? 'pl-5' : ''}">
    <i class="fa-solid ${isSubItem ? 'fa-angle-right text-teal-500' : 'fa-circle-check text-emerald-500'} text-xs mt-1 shrink-0"></i>
    <span>${formatted}</span>
  </li>`);
        continue;
      } else {
        flushList();
      }

      if (trimmed.startsWith('> ')) {
        const quoteText = formatInline(trimmed.slice(2).trim());
        contentHtml += `
<div class="my-3 p-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/30 border-l-4 border-emerald-500 text-slate-800 dark:text-emerald-200 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
  <i class="fa-solid fa-dna text-emerald-600 dark:text-emerald-400 text-base shrink-0 mt-0.5"></i>
  <div class="font-medium">${quoteText}</div>
</div>\n`;
        continue;
      }

      contentHtml += `<p class="my-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${formatInline(trimmed)}</p>\n`;
    }

    flushList();
    flushNumList();
    flushTable();

    if (title) {
      html += `
<div class="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 shadow-xs mb-4">
  <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
    <i class="fa-solid fa-leaf text-emerald-600 dark:text-emerald-400 text-sm"></i>
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

// Generate Sidebar Navigation HTML
let sidebarNavHtml = '';
for (const ch of data.chapters) {
  sidebarNavHtml += `
      <div class="mb-4">
        <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-lg">
          <i class="fa-solid ${ch.icon}"></i>
          <span>${ch.shortTitle}</span>
        </div>
        <div class="text-[10px] text-slate-400 dark:text-slate-500 px-3 pt-1 font-semibold">${ch.part}</div>
        <div class="mt-1 space-y-1">
  `;
  for (const lNum of ch.lessons) {
    const l = data.lessons[lNum];
    const pracBadge = l.isPractical
      ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold shrink-0">Thực hành</span>'
      : `<span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">${ch.num === 0 ? 'Mở đầu' : 'Chương ' + ch.num}</span>`;

    sidebarNavHtml += `
        <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800/60 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/50 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400">Bài ${l.num}</span>
            ${pracBadge}
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 truncate">
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

// Add link to Bảng ôn tập liên kết toàn môn at the bottom of sidebar
sidebarNavHtml += `
      <div class="mb-4 pt-2 border-t border-slate-200 dark:border-slate-800">
        <a href="#bang-on-tap-toan-mon" class="nav-link group block px-3 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-between hover:bg-emerald-100 transition">
          <span><i class="fa-solid fa-table-list mr-1.5"></i>Bảng Ôn tập Liên kết Toàn môn</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-600 text-white">Tổng kết</span>
        </a>
      </div>
`;

// Generate Main Content Lessons HTML
let mainContentHtml = '';
for (let i = 1; i <= 26; i++) {
  const l = data.lessons[i];
  const ch = data.chapters.find(c => c.num === l.chapter);
  const bodyHtml = parseMarkdownToHtml(l.content);
  const svgDiagram = diagrams[i] || '';
  const lessonQuizzes = quizzes[i] || [];

  const pracHeaderBadge = l.isPractical
    ? `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1"><i class="fa-solid fa-flask-vial"></i> Bài Thực hành</span>`
    : `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800"><i class="fa-solid fa-book-medical mr-1"></i>Lí thuyết trọng tâm</span>`;

  let quizHtml = '';
  if (lessonQuizzes.length > 0) {
    quizHtml = `
      <div class="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <i class="fa-solid fa-clipboard-question text-sm"></i>
            </span>
            <div>
              <h4 class="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">Câu hỏi Ôn tập &amp; Củng cố Bài ${l.num}</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Chọn đáp án đúng để kiểm tra mức độ nắm vững kiến thức và xem giải thích chi tiết</p>
            </div>
          </div>
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">${lessonQuizzes.length} Câu hỏi</span>
        </div>
        <div class="space-y-4">
          ${lessonQuizzes.map((qObj, qIdx) => {
            const letters = ['A', 'B', 'C', 'D'];
            const safeExp = qObj.exp.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            return `
            <div class="quiz-item p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50">
              <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-3">
                <span class="text-emerald-600 dark:text-emerald-400 mr-1">Câu ${qIdx + 1}:</span> ${formatInline(qObj.q)}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${qObj.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === qObj.ans;
                  return `
                  <button type="button" onclick="checkBioQuiz(this, ${isCorrect}, '${safeExp}')" class="quiz-btn text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/30 transition flex items-start gap-2.5 text-xs sm:text-sm">
                    <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center shrink-0 text-xs">${letters[oIdx]}</span>
                    <span class="text-slate-700 dark:text-slate-200 leading-snug">${formatInline(opt)}</span>
                  </button>`;
                }).join('')}
              </div>
              <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs leading-relaxed"></div>
            </div>`;
          }).join('')}
        </div>
      </div>
    `;
  }

  mainContentHtml += `
    <article id="bai-${l.num}" class="lesson-card bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs p-5 sm:p-7 mb-8 scroll-mt-24">
      <!-- Lesson Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-2xs">
            BÀI ${l.num}
          </span>
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <i class="fa-solid ${ch.icon} mr-1"></i>${ch.shortTitle}
          </span>
          ${pracHeaderBadge}
        </div>
        <button onclick="toggleBookmark('bai-${l.num}')" class="bookmark-btn p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 hover:border-amber-300 transition text-sm" title="Đánh dấu bài học quan trọng">
          <i class="fa-solid fa-bookmark"></i>
        </button>
      </div>

      <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-1.5 tracking-tight">
        Bài ${l.num}. ${l.title}
      </h3>
      <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium">
        ${l.subtitle}
      </p>

      <!-- Visual SVG Diagram Block -->
      <div class="my-5 p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-850 border border-emerald-200/80 dark:border-slate-700/80 shadow-2xs">
        <div class="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-emerald-100 dark:border-slate-800">
          <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <i class="fa-solid fa-diagram-project"></i>
            <span>Sơ đồ Trực quan Trọng tâm Bài ${l.num}</span>
          </div>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 italic hidden sm:inline">Bám sát cấu trúc – cơ chế SGK Kết nối tri thức</span>
        </div>
        <div class="overflow-x-auto">
          ${svgDiagram}
        </div>
        <div class="mt-2.5 pt-2 border-t border-emerald-100/80 dark:border-slate-800 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
          <i class="fa-solid fa-circle-info text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"></i>
          <span><strong>Hình/sơ đồ cần giữ:</strong> ${l.diagramNote}</span>
        </div>
      </div>

      <!-- Structured Knowledge Content -->
      <div class="lesson-body space-y-4">
        ${bodyHtml}
      </div>

      <!-- End of Lesson Review Quiz -->
      ${quizHtml}
    </article>
  `;
}

// Append "BẢNG ÔN TẬP LIÊN KẾT TOÀN MÔN" Section at the bottom of Main Content
const reviewTableRowsHtml = data.reviewTable.map(row => `
  <tr class="hover:bg-emerald-50/40 dark:hover:bg-slate-800/50 transition">
    <td class="p-3.5 font-extrabold text-emerald-800 dark:text-emerald-300 align-top w-1/4">${row.topic}</td>
    <td class="p-3.5 text-slate-700 dark:text-slate-300 align-top w-1/3 leading-relaxed">${row.questions}</td>
    <td class="p-3.5 text-slate-800 dark:text-slate-200 align-top leading-relaxed font-medium">${row.keyConnections}</td>
  </tr>
`).join('');

mainContentHtml += `
  <section id="bang-on-tap-toan-mon" class="bg-white dark:bg-slate-850 rounded-3xl border-2 border-emerald-500/40 dark:border-emerald-700/50 shadow-sm p-5 sm:p-7 mb-8 scroll-mt-24">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
        <i class="fa-solid fa-network-wired text-lg"></i>
      </div>
      <div>
        <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">BẢNG ÔN TẬP LIÊN KẾT TOÀN MÔN SINH HỌC 10</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">Tổng hợp trọng tâm 7 chủ đề lớn theo trục: Cấu trúc → Chức năng → Cơ chế → Ứng dụng</p>
      </div>
    </div>

    <div class="overflow-x-auto rounded-2xl border border-emerald-200 dark:border-slate-700 mb-5">
      <table class="w-full text-left text-xs sm:text-sm">
        <thead class="bg-emerald-600 text-white font-bold">
          <tr>
            <th class="p-3.5">Chủ đề trọng tâm</th>
            <th class="p-3.5">Câu hỏi định hướng cốt lõi</th>
            <th class="p-3.5">Mạch kiến thức &amp; Liên kết hệ thống</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
          ${reviewTableRowsHtml}
        </tbody>
      </table>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
      <div class="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
        <div class="font-extrabold text-emerald-800 dark:text-emerald-300 mb-1.5 flex items-center gap-2">
          <i class="fa-solid fa-sitemap"></i> Trục tư duy bài học Lí thuyết
        </div>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
          Luôn kết nối kiến thức theo mạch: <strong>Cấu trúc phân tử/bào quan → Chức năng sinh học → Cơ chế vận hành → Ứng dụng thực tiễn &amp; Đạo đức sinh học</strong>.
        </p>
      </div>
      <div class="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
        <div class="font-extrabold text-amber-800 dark:text-amber-300 mb-1.5 flex items-center gap-2">
          <i class="fa-solid fa-flask"></i> Trục tư duy bài học Thực hành – Thí nghiệm
        </div>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
          Luôn tuân thủ tiến trình: <strong>Câu hỏi nghiên cứu → Giả thuyết → Biến số &amp; Lô đối chứng → Quy trình &amp; An toàn → Quan sát hiện tượng → Giải thích &amp; Kết luận</strong>.
        </p>
      </div>
    </div>
  </section>
`;

// Prepare Exam Question Bank (flatten all 78 questions)
const examQuestionBank = [];
for (let i = 1; i <= 26; i++) {
  const qs = quizzes[i] || [];
  qs.forEach(item => {
    examQuestionBank.push({
      lesson: i,
      lessonTitle: data.lessons[i].title,
      q: item.q,
      options: item.options,
      ans: item.ans,
      exp: item.exp
    });
  });
}

// Lab Safety Modal Rows
const labRowsHtml = data.labSafetyHandbook.map(item => `
  <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40">
    <div class="flex items-center justify-between mb-1.5">
      <span class="font-extrabold text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm">${item.bai}: ${item.title}</span>
      <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">Thực hành</span>
    </div>
    <p class="text-xs text-slate-700 dark:text-slate-300 mb-1.5"><strong>• Nguyên lí &amp; Thuốc thử:</strong> ${item.reagents}</p>
    <p class="text-xs text-rose-600 dark:text-rose-400 font-medium"><strong>• An toàn phòng thí nghiệm:</strong> ${item.safety}</p>
  </div>
`).join('');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sinh Học 10 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 7 Chương, 26 Bài &amp; Sơ Đồ Trực Quan) | CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <!-- KaTeX CSS & JS Auto-render -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'] },
          colors: {
            slate: { 850: '#111827', 950: '#090d16' }
          }
        }
      }
    }
  </script>

  <style>
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(16, 185, 129, 0.45) transparent;
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
      background: rgba(16, 185, 129, 0.45);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(16, 185, 129, 0.75);
    }
    .dark .custom-scrollbar {
      scrollbar-color: rgba(52, 211, 153, 0.45) transparent;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(52, 211, 153, 0.45);
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(52, 211, 153, 0.75);
    }
    .nav-link.active {
      background-color: rgba(16, 185, 129, 0.12) !important;
      border-color: #10b981 !important;
      color: #047857 !important;
    }
    .dark .nav-link.active {
      background-color: rgba(16, 185, 129, 0.2) !important;
      color: #34d399 !important;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans antialiased selection:bg-emerald-500 selection:text-white">

  <!-- Sticky Top Header -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
      
      <!-- Left: Back & Course Title -->
      <div class="flex items-center gap-3 min-w-0">
        <button onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-500 hover:text-white transition">
          <i class="fa-solid fa-bars"></i>
        </button>
        <a href="../index.html" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition flex items-center justify-center shrink-0" title="Về trang chủ chính">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-sm shrink-0">
          <i class="fa-solid fa-dna text-lg"></i>
        </div>
        <div class="truncate">
          <div class="flex items-center gap-2">
            <h1 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">Sinh Học 10</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">Kết nối tri thức</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">3 Phần • 7 Chương • 26 Bài học &amp; Thực hành chuẩn GDPT 2018</p>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 shrink-0">
        <button onclick="openModal('modal-search')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition">
          <i class="fa-solid fa-magnifying-glass text-emerald-600 dark:text-emerald-400"></i>
          <span class="hidden md:inline">Tìm kiếm</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <button onclick="openModal('modal-review')" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800 transition">
          <i class="fa-solid fa-table-list"></i>
          <span class="hidden sm:inline">Bảng Ôn tập</span>
        </button>

        <button onclick="openModal('modal-lab')" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center gap-1.5 border border-amber-200 dark:border-amber-800 transition">
          <i class="fa-solid fa-flask-vial"></i>
          <span class="hidden sm:inline">Thực hành &amp; Thuốc thử</span>
        </button>

        <button onclick="openModal('modal-exam')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition">
          <i class="fa-solid fa-stopwatch"></i>
          <span class="hidden sm:inline">Thi Đấu 45:00</span>
        </button>

        <button id="theme-toggle" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Chuyển chế độ Sáng / Tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Main Container Layout: 12 Columns (4-col Sticky Sidebar + 8-col Content) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Desktop Sticky Sidebar (4 Columns) with Fixed Flexbox Scroll -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs p-4 sm:p-5 overflow-hidden">
        
        <div class="shrink-0 flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <i class="fa-solid fa-list-ul text-emerald-600 dark:text-emerald-400"></i>
            <span>MỤC LỤC BÀI HỌC</span>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
            7 Chương • 26 Bài
          </span>
        </div>

        <!-- Sidebar Filter & Bookmarks -->
        <div class="shrink-0 flex items-center gap-2 mb-3">
          <div class="relative flex-1">
            <i class="fa-solid fa-search absolute left-3 top-2.5 text-xs text-slate-400"></i>
            <input type="text" id="sidebar-filter" oninput="filterSidebar(this.value)" placeholder="Lọc nhanh bài học (1-26)..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-emerald-500 focus:outline-hidden text-slate-800 dark:text-slate-200">
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
        <section class="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-6 sm:p-8 text-white shadow-md mb-8 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3">
              <i class="fa-solid fa-microscope text-emerald-200"></i> Học liệu Chuẩn SGK Kết nối tri thức với cuộc sống
            </div>
            <h2 class="text-2xl sm:text-3xl font-black mb-2 tracking-tight">Hệ Thống Kiến Thức Sinh Học 10 Toàn Diện</h2>
            <p class="text-emerald-50 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Tổng hợp trọn vẹn <strong>3 Phần, 7 Chương và 26 Bài học</strong> (bao gồm Sinh học Tế bào, Vi sinh vật và Virus). Giữ đầy đủ khái niệm, cấu trúc, cơ chế sinh hoá, quy trình thực hành an toàn, 26 sơ đồ SVG trực quan, 78 câu hỏi trắc nghiệm và bảng ôn tập liên kết toàn môn.
            </p>
            <div class="flex flex-wrap gap-2.5 mt-4 text-xs font-bold">
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group text-emerald-300"></i> 3 Phần • 7 Chương
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-book-open text-amber-300"></i> 26 Bài (20 Lí thuyết • 6 Thực hành)
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-diagram-project text-cyan-300"></i> 26 Sơ đồ SVG Cơ chế
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-lime-300"></i> 78 Câu hỏi Ôn tập
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
    <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
      <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
        <i class="fa-solid fa-list-ul text-emerald-600 dark:text-emerald-400"></i>
        <span>MỤC LỤC SINH HỌC 10</span>
      </div>
      <button onclick="toggleMobileSidebar()" class="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="p-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
      <input type="text" oninput="filterSidebar(this.value)" placeholder="Tìm bài học..." class="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-emerald-500 text-slate-800 dark:text-slate-200">
    </div>
    <nav class="custom-scrollbar overflow-y-auto p-4 flex-1 min-h-0 space-y-4 text-sm pb-10">
      ${sidebarNavHtml}
    </nav>
  </div>

  <!-- MODAL 1: Bảng Ôn tập Liên kết Toàn môn -->
  <div id="modal-review" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40 shrink-0">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <i class="fa-solid fa-table-list text-lg"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-base">Bảng Ôn Tập Liên Kết Toàn Môn Sinh Học 10</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Hệ thống hoá 7 chủ đề lớn từ Tế bào đến Vi sinh vật &amp; Virus</p>
          </div>
        </div>
        <button onclick="closeModal('modal-review')" class="p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-5 overflow-y-auto custom-scrollbar space-y-4 text-xs sm:text-sm">
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table class="w-full text-left">
            <thead class="bg-emerald-600 text-white font-bold">
              <tr>
                <th class="p-3">Chủ đề</th>
                <th class="p-3">Câu hỏi trọng tâm</th>
                <th class="p-3">Kiến thức cốt lõi &amp; Liên kết</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              ${reviewTableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 2: Sổ tay Thực hành & Thuốc thử -->
  <div id="modal-lab" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-amber-50 dark:bg-amber-950/40 shrink-0">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center">
            <i class="fa-solid fa-flask-vial text-lg"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-base">Sổ Tay Thực Hành, Thuốc Thử &amp; An Toàn Phòng Thí Nghiệm</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Tra cứu nhanh nguyên lí và hiện tượng của toàn bộ các bài thực hành Sinh học 10</p>
          </div>
        </div>
        <button onclick="closeModal('modal-lab')" class="p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-5 overflow-y-auto custom-scrollbar space-y-3">
        ${labRowsHtml}
      </div>
    </div>
  </div>

  <!-- MODAL 3: Tìm kiếm nhanh (Ctrl + K) -->
  <div id="modal-search" class="fixed inset-0 z-50 hidden flex items-start justify-center pt-16 p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-2xl w-full overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-emerald-600 text-lg"></i>
        <input type="text" id="search-input" oninput="handleModalSearch(this.value)" placeholder="Nhập tên bài học, khái niệm (VD: ti thể, quang hợp, giảm phân, virus, sữa chua...)" class="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-hidden">
        <button onclick="closeModal('modal-search')" class="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-500">ESC</button>
      </div>
      <div id="search-results" class="p-4 max-h-96 overflow-y-auto custom-scrollbar space-y-2">
        <p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tra cứu nhanh trong 26 bài học Sinh học 10...</p>
      </div>
    </div>
  </div>

  <!-- MODAL 4: Đấu trường Sinh học 10 (45:00) -->
  <div id="modal-exam" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40 shrink-0">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <i class="fa-solid fa-trophy text-lg"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-base">Đấu Trường Sinh Học 10 – Đề Luyện Ngẫu Nhiên</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">10 câu hỏi trích xuất ngẫu nhiên từ ngân hàng 78 câu hỏi toàn khoá</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span id="exam-timer" class="px-3 py-1 rounded-full bg-emerald-600 text-white font-mono font-bold text-xs">45:00</span>
          <span id="exam-score" class="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold text-xs">0 / 10</span>
          <button onclick="closeModal('modal-exam')" class="p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>
      <div id="exam-questions-list" class="p-5 overflow-y-auto custom-scrollbar space-y-4 flex-1"></div>
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900 shrink-0">
        <button onclick="resetExam()" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-rotate-right mr-1"></i> Đề mới
        </button>
        <button onclick="submitExam()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition">
          <i class="fa-solid fa-paper-plane mr-1"></i> Nộp bài &amp; Chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- Main Interactive Logic & KaTeX Renderer -->
  <script>
    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon text-sm text-slate-600';
      }
    }
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      applyTheme(isDark);
    });

    // 2. Mobile Sidebar Drawer
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

    // 3. Modal Controls
    function openModal(id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.remove('hidden');
      if (id === 'modal-search') {
        setTimeout(() => document.getElementById('search-input')?.focus(), 80);
      } else if (id === 'modal-exam') {
        startExam();
      }
      renderMath();
    }
    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('[id^="modal-"]').forEach(m => m.classList.add('hidden'));
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
    });

    // 4. Scroll Spy for Sidebar Links
    const navLinks = document.querySelectorAll('#sidebar-nav .nav-link');
    const lessonArticles = document.querySelectorAll('article.lesson-card, section#bang-on-tap-toan-mon');
    window.addEventListener('scroll', () => {
      let currentId = 'bai-1';
      lessonArticles.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 150) {
          currentId = sec.id;
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        }
      });
    });

    // 5. Sidebar Filter & Bookmarks
    let bookmarks = JSON.parse(localStorage.getItem('sinhhoc10_bookmarks') || '[]');
    let bookmarkOnlyMode = false;

    function filterSidebar(query) {
      const q = query.toLowerCase().trim();
      document.querySelectorAll('#sidebar-nav .nav-link, #mobile-sidebar .nav-link').forEach(link => {
        const text = link.innerText.toLowerCase();
        const href = (link.getAttribute('href') || '').replace('#', '');
        const matchQuery = !q || text.includes(q);
        const matchBookmark = !bookmarkOnlyMode || bookmarks.includes(href);
        link.style.display = (matchQuery && matchBookmark) ? '' : 'none';
      });
    }

    function toggleBookmark(id) {
      const idx = bookmarks.indexOf(id);
      if (idx === -1) bookmarks.push(id);
      else bookmarks.splice(idx, 1);
      localStorage.setItem('sinhhoc10_bookmarks', JSON.stringify(bookmarks));
      updateBookmarkUI();
    }

    function toggleBookmarkFilter() {
      bookmarkOnlyMode = !bookmarkOnlyMode;
      const btn = document.getElementById('bookmark-filter-btn');
      if (bookmarkOnlyMode) {
        btn.classList.add('bg-amber-100', 'dark:bg-amber-950', 'text-amber-600', 'border-amber-300');
      } else {
        btn.classList.remove('bg-amber-100', 'dark:bg-amber-950', 'text-amber-600', 'border-amber-300');
      }
      filterSidebar(document.getElementById('sidebar-filter')?.value || '');
    }

    function updateBookmarkUI() {
      document.querySelectorAll('article.lesson-card').forEach(card => {
        const btn = card.querySelector('.bookmark-btn');
        if (!btn) return;
        if (bookmarks.includes(card.id)) {
          btn.classList.add('text-amber-500', 'border-amber-300');
          btn.classList.remove('text-slate-400');
        } else {
          btn.classList.remove('text-amber-500', 'border-amber-300');
          btn.classList.add('text-slate-400');
        }
      });
    }

    // 6. Lesson Quiz Check
    function checkBioQuiz(btn, isCorrect, exp) {
      const parent = btn.closest('.quiz-item');
      const feedback = parent.querySelector('.quiz-feedback');
      const allBtns = parent.querySelectorAll('.quiz-btn');

      allBtns.forEach(b => {
        b.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
      });

      if (isCorrect) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40');
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 block';
        feedback.innerHTML = '<strong class="text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-circle-check mr-1"></i>Chính xác!</strong> ' + exp;
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800 block';
        feedback.innerHTML = '<strong class="text-rose-600 dark:text-rose-400"><i class="fa-solid fa-circle-xmark mr-1"></i>Chưa đúng!</strong> Gợi ý: ' + exp;
      }
      renderMath();
    }

    // 7. Search Modal Index
    const searchIndex = ${JSON.stringify(Object.values(data.lessons).map(l => ({
      num: l.num,
      title: l.title,
      subtitle: l.subtitle,
      part: l.part
    })))};

    function handleModalSearch(query) {
      const q = query.toLowerCase().trim();
      const box = document.getElementById('search-results');
      if (!q) {
        box.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tra cứu nhanh trong 26 bài học Sinh học 10...</p>';
        return;
      }
      const matches = searchIndex.filter(item =>
        ('bài ' + item.num).includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
      );
      if (matches.length === 0) {
        box.innerHTML = '<p class="text-xs text-rose-500 text-center py-4">Không tìm thấy bài học phù hợp với từ khoá.</p>';
        return;
      }
      box.innerHTML = matches.map(m => \`
        <a href="#bai-\${m.num}" onclick="closeModal('modal-search')" class="block p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800 transition">
          <div class="flex items-center justify-between text-xs mb-0.5">
            <span class="font-extrabold text-emerald-600 dark:text-emerald-400">Bài \${m.num}: \${m.title}</span>
            <span class="text-[10px] text-slate-400">\${m.part}</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400">\${m.subtitle}</p>
        </a>
      \`).join('');
    }

    // 8. 45-Minute Exam System
    const examPool = ${JSON.stringify(examQuestionBank)};
    let currentExamQuestions = [];
    let examAnswers = {};
    let examTimeLeft = 45 * 60;
    let examTimerInterval = null;

    function startExam() {
      if (currentExamQuestions.length === 0) {
        const shuffled = [...examPool].sort(() => 0.5 - Math.random());
        currentExamQuestions = shuffled.slice(0, 10);
      }
      renderExamQuestions();
      if (!examTimerInterval) {
        examTimerInterval = setInterval(() => {
          if (examTimeLeft <= 0) {
            clearInterval(examTimerInterval);
            submitExam();
          } else {
            examTimeLeft--;
            const m = Math.floor(examTimeLeft / 60);
            const s = examTimeLeft % 60;
            document.getElementById('exam-timer').innerText =
              (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
          }
        }, 1000);
      }
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-questions-list');
      container.innerHTML = currentExamQuestions.map((q, idx) => \`
        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <div class="flex items-center justify-between mb-2">
            <span class="font-extrabold text-xs text-emerald-600 dark:text-emerald-400">Câu \${idx + 1} / 10 (Bài \${q.lesson}: \${q.lessonTitle})</span>
          </div>
          <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-3">\${q.q}</p>
          <div class="space-y-2">
            \${q.options.map((opt, oIdx) => \`
              <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50/50 dark:hover:bg-slate-800 cursor-pointer text-xs sm:text-sm">
                <input type="radio" name="exam-q-\${idx}" value="\${oIdx}" onchange="examAnswers[\${idx}] = \${oIdx}" class="text-emerald-600 focus:ring-emerald-500">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
      renderMath();
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;
      currentExamQuestions.forEach((q, idx) => {
        if (examAnswers[idx] === q.ans) score++;
      });
      document.getElementById('exam-score').innerText = score + ' / 10';
      alert('Bạn đã hoàn thành Đấu Trường Sinh Học 10!\\nĐiểm số đạt được: ' + score + ' / 10');
    }

    function resetExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = null;
      examTimeLeft = 45 * 60;
      examAnswers = {};
      currentExamQuestions = [];
      document.getElementById('exam-timer').innerText = '45:00';
      document.getElementById('exam-score').innerText = '0 / 10';
      startExam();
    }

    // 9. KaTeX Auto-Render with Polling
    function renderMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '\\\\(', right: '\\\\)', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function ensureMathRendered() {
      renderMath();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (typeof renderMathInElement === 'function') {
          renderMath();
          if (attempts > 5) clearInterval(interval);
        }
        if (attempts > 30) clearInterval(interval);
      }, 200);
    }

    document.addEventListener('DOMContentLoaded', () => {
      updateBookmarkUI();
      ensureMathRendered();
    });
    window.addEventListener('load', ensureMathRendered);
    setTimeout(ensureMathRendered, 300);
    setTimeout(ensureMathRendered, 800);
    setTimeout(ensureMathRendered, 2000);
  </script>
</body>
</html>`;

// Validate all inline scripts before writing
const scriptMatches = fullHtml.match(/<script[\s\S]*?<\/script>/g) || [];
let inlineCount = 0;
for (const s of scriptMatches) {
  if (s.includes('src=')) continue;
  inlineCount++;
  const code = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  new vm.Script(code);
  console.log(`Inline script ${inlineCount}: VALID (${code.length} chars)`);
}

fs.writeFileSync('courses/sinhhoc_10.html', fullHtml, 'utf8');
const stat = fs.statSync('courses/sinhhoc_10.html');
console.log(`Successfully generated courses/sinhhoc_10.html! Size: ${(stat.size / 1024).toFixed(1)} KB`);
