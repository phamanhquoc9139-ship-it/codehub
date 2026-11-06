const fs = require('fs');
const path = require('path');

const data = require('./hoahoc10_data.js');
const diagrams = require('./hoahoc10_diagrams.js');
const quizzes = require('./hoahoc10_quizzes.js');

const { chapters, lessons: lessonsObj, quickFormulaTable, safetyGuidelines } = data;
const lessonsList = Object.keys(lessonsObj)
  .map(k => Number(k))
  .sort((a, b) => a - b)
  .map(k => lessonsObj[k]);

const colorThemes = {
  cyan: {
    badgeBg: 'bg-cyan-50 dark:bg-cyan-900/30',
    badgeText: 'text-cyan-700 dark:text-cyan-300',
    badgeBorder: 'border-cyan-200 dark:border-cyan-800/60',
    headerGrad: 'from-cyan-600 via-sky-600 to-blue-600',
    softBg: 'bg-cyan-50/70 dark:bg-cyan-950/25',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400',
    pillActive: 'bg-cyan-600 text-white',
    dot: 'bg-cyan-500'
  },
  emerald: {
    badgeBg: 'bg-emerald-50 dark:bg-emerald-900/30',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    badgeBorder: 'border-emerald-200 dark:border-emerald-800/60',
    headerGrad: 'from-emerald-600 via-teal-600 to-green-600',
    softBg: 'bg-emerald-50/70 dark:bg-emerald-950/25',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400',
    pillActive: 'bg-emerald-600 text-white',
    dot: 'bg-emerald-500'
  },
  indigo: {
    badgeBg: 'bg-indigo-50 dark:bg-indigo-900/30',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    badgeBorder: 'border-indigo-200 dark:border-indigo-800/60',
    headerGrad: 'from-indigo-600 via-blue-600 to-violet-600',
    softBg: 'bg-indigo-50/70 dark:bg-indigo-950/25',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400',
    pillActive: 'bg-indigo-600 text-white',
    dot: 'bg-indigo-500'
  },
  amber: {
    badgeBg: 'bg-amber-50 dark:bg-amber-900/30',
    badgeText: 'text-amber-700 dark:text-amber-300',
    badgeBorder: 'border-amber-200 dark:border-amber-800/60',
    headerGrad: 'from-amber-600 via-orange-600 to-yellow-600',
    softBg: 'bg-amber-50/70 dark:bg-amber-950/25',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400',
    pillActive: 'bg-amber-600 text-white',
    dot: 'bg-amber-500'
  },
  rose: {
    badgeBg: 'bg-rose-50 dark:bg-rose-900/30',
    badgeText: 'text-rose-700 dark:text-rose-300',
    badgeBorder: 'border-rose-200 dark:border-rose-800/60',
    headerGrad: 'from-rose-600 via-red-600 to-orange-600',
    softBg: 'bg-rose-50/70 dark:bg-rose-950/25',
    iconBg: 'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400',
    pillActive: 'bg-rose-600 text-white',
    dot: 'bg-rose-500'
  },
  purple: {
    badgeBg: 'bg-purple-50 dark:bg-purple-900/30',
    badgeText: 'text-purple-700 dark:text-purple-300',
    badgeBorder: 'border-purple-200 dark:border-purple-800/60',
    headerGrad: 'from-purple-600 via-fuchsia-600 to-indigo-600',
    softBg: 'bg-purple-50/70 dark:bg-purple-950/25',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
    pillActive: 'bg-purple-600 text-white',
    dot: 'bg-purple-500'
  },
  teal: {
    badgeBg: 'bg-teal-50 dark:bg-teal-900/30',
    badgeText: 'text-teal-700 dark:text-teal-300',
    badgeBorder: 'border-teal-200 dark:border-teal-800/60',
    headerGrad: 'from-teal-600 via-emerald-600 to-cyan-600',
    softBg: 'bg-teal-50/70 dark:bg-teal-950/25',
    iconBg: 'bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400',
    pillActive: 'bg-teal-600 text-white',
    dot: 'bg-teal-500'
  }
};

function renderSidebar() {
  let html = '';
  chapters.forEach(ch => {
    const th = colorThemes[ch.color] || colorThemes.teal;
    const chLessons = lessonsList.filter(l => l.chapter === ch.num);

    html += `
      <div class="mb-3 chapter-nav-block" data-chapter="${ch.num}">
        <div class="px-2.5 py-1.5 rounded-lg ${th.softBg} border ${th.badgeBorder} mb-1.5 flex items-center justify-between">
          <span class="text-[11px] font-black uppercase tracking-wider ${th.badgeText} truncate">${ch.shortTitle}</span>
          <span class="text-[10px] font-bold ${th.badgeText} opacity-80 shrink-0 ml-1">${ch.pages}</span>
        </div>
        <div class="space-y-1 pl-1">
    `;

    chLessons.forEach(l => {
      const badgeHtml = l.isReview
        ? `<span class="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-[9px] font-black uppercase shrink-0">Ôn tập</span>`
        : `<span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-bold shrink-0">${l.pages}</span>`;

      html += `
        <a href="#bai-${l.num}" data-lesson-id="${l.num}" class="sidebar-lesson-link group flex items-start gap-2.5 px-2.5 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800/80 hover:text-teal-700 dark:hover:text-teal-300 transition-all border border-transparent">
          <span class="w-6 h-6 rounded-lg ${l.isReview ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'} group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-0.5 transition-colors">${l.num}</span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-1">
              <span class="font-bold text-slate-800 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 leading-snug truncate">Bài ${l.num}. ${l.title}</span>
              ${badgeHtml}
            </div>
            <div class="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">${l.subtitle}</div>
          </div>
          <span id="sidebar-check-${l.num}" class="hidden text-emerald-500 text-xs shrink-0 mt-1" title="Đã hoàn thành">✓</span>
        </a>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
    <div class="pt-2 border-t border-slate-200 dark:border-slate-800">
      <a href="#bang-cong-thuc-va-an-toan" class="sidebar-lesson-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500/10 to-emerald-500/10 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 hover:from-teal-500/20 hover:to-emerald-500/20 transition-all">
        <span class="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs shrink-0">★</span>
        <div>
          <div>Bảng công thức &amp; An toàn thực hành</div>
          <div class="text-[10px] font-normal text-slate-500 dark:text-slate-400">14 công thức tra nhanh • 6 quy tắc an toàn</div>
        </div>
      </a>
    </div>
  `;

  return html;
}

function renderChapterOverviewCards() {
  return chapters.map(ch => {
    const th = colorThemes[ch.color] || colorThemes.teal;
    return `
      <a href="#chuong-${ch.num}" class="group p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 hover:border-teal-400 dark:hover:border-teal-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.badgeBg} ${th.badgeText} border ${th.badgeBorder}">Chương ${ch.num} (${ch.pages})</span>
            <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500">Bài ${ch.lessons.join(', ')}</span>
          </div>
          <div class="text-xs font-extrabold text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug mb-1">${ch.title}</div>
        </div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">${ch.desc}</div>
      </a>
    `;
  }).join('');
}

function renderFullTableOfContents() {
  let rows = '';
  chapters.forEach(ch => {
    const chLessons = lessonsList.filter(l => l.chapter === ch.num);
    chLessons.forEach((l, idx) => {
      rows += `
        <tr class="hover:bg-teal-50/50 dark:hover:bg-slate-800/60 transition-colors">
          <td class="py-2 px-3 font-extrabold text-slate-800 dark:text-slate-200">${idx === 0 ? `${ch.num}. ${ch.title.replace(/^Chương \d+\.\s*/, '')}` : ''}</td>
          <td class="py-2 px-3 text-center font-black text-teal-700 dark:text-teal-400">${l.num}</td>
          <td class="py-2 px-3">
            <a href="#bai-${l.num}" class="font-bold text-slate-800 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400 transition">
              ${l.title}
            </a>
            ${l.isReview ? '<span class="ml-1.5 px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[10px] font-black">Ôn tập chương</span>' : ''}
          </td>
          <td class="py-2 px-3 text-right text-slate-500 dark:text-slate-400 whitespace-nowrap font-semibold">${l.pages}</td>
        </tr>
      `;
    });
  });
  return rows;
}

function renderLessons() {
  let html = '';
  let currentChapterNum = null;

  lessonsList.forEach(l => {
    const ch = chapters.find(c => c.num === l.chapter) || chapters[0];
    const th = colorThemes[ch.color] || colorThemes.teal;

    if (l.chapter !== currentChapterNum) {
      currentChapterNum = l.chapter;
      const chLessons = lessonsList.filter(x => x.chapter === ch.num);
      html += `
        <div id="chuong-${ch.num}" class="scroll-mt-24 pt-4 pb-1">
          <div class="rounded-2xl p-5 bg-gradient-to-r ${th.headerGrad} text-white shadow-lg relative overflow-hidden">
            <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-black uppercase tracking-wider mb-1.5">
                  <span>CHƯƠNG ${ch.num} / 7 (${ch.pages})</span>
                  <span>•</span>
                  <span>HÓA HỌC 10 – KẾT NỐI TRI THỨC</span>
                </div>
                <h2 class="text-xl md:text-2xl font-black tracking-tight">${ch.title}</h2>
                <p class="text-xs md:text-sm text-white/90 mt-1">${ch.desc}</p>
              </div>
              <div class="flex flex-wrap gap-1.5 shrink-0">
                ${chLessons.map(x => `
                  <a href="#bai-${x.num}" class="px-3 py-1.5 rounded-xl ${x.isReview ? 'bg-amber-400/30 border-amber-200/50' : 'bg-white/15 border-white/20'} hover:bg-white/30 text-white text-xs font-bold backdrop-blur-sm border transition">${x.isReview ? 'Ôn tập C' + ch.num : 'Bài ' + x.num}</a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // A. Key Formulas & Rules
    const formulasHtml = (l.keyFormulas || []).map(f => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/65 border border-slate-200/80 dark:border-slate-700/70 hover:border-teal-400 dark:hover:border-teal-600 transition-colors flex items-start gap-2.5">
        <span class="w-5 h-5 rounded-lg ${th.pillActive} flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">∑</span>
        <div class="text-xs md:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed flex-1">${f}</div>
      </div>
    `).join('');

    // B. Detailed Content Sections & Tables
    const sectionsHtml = (l.sections || []).map(sec => {
      const itemsHtml = (sec.items || []).map(pt => `
        <li class="flex items-start gap-2.5 text-xs md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
          <span class="text-teal-600 dark:text-teal-400 font-bold mt-0.5 shrink-0">▸</span>
          <div class="flex-1">${pt}</div>
        </li>
      `).join('');

      let tableHtml = '';
      if (sec.table) {
        const tb = sec.table;
        tableHtml = `
          <div class="mt-3.5 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="${th.softBg} border-b border-slate-200 dark:border-slate-700">
                  ${tb.headers.map(h => `<th class="py-2.5 px-3 font-extrabold text-slate-800 dark:text-slate-100">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200/70 dark:divide-slate-700/60 bg-white dark:bg-slate-900/40">
                ${tb.rows.map(r => `
                  <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50">
                    ${r.map((cell, ci) => `<td class="py-2.5 px-3 ${ci === 0 ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'} leading-relaxed">${cell}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      return `
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
          <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-700/60">
            <span class="w-1.5 h-5 rounded-full ${th.dot} shrink-0"></span>
            ${sec.heading}
          </h4>
          <ul class="space-y-2.5">
            ${itemsHtml}
          </ul>
          ${tableHtml}
        </div>
      `;
    }).join('');

    // C. SVG Diagram
    const svgHtml = diagrams[l.num] || '';

    // D. Experiments, Safety, Worked Examples & Mistakes
    const expSafe = l.experimentsAndSafety || {};
    const examplesHtml = (l.examplesAndMistakes || []).map(item => `
      <li class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">★</span>
        <div class="flex-1">${item}</div>
      </li>
    `).join('');

    // E. Quizzes
    const lessonQuizzes = quizzes[l.num] || [];
    const quizHtml = lessonQuizzes.map((q, qi) => `
      <div class="quiz-card p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80" data-lesson="${l.num}" data-qindex="${qi}">
        <div class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-2.5 leading-relaxed">
          <span class="inline-block px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-[10px] font-black mr-1.5">Câu ${qi + 1}</span>
          ${q.q}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          ${q.options.map((opt, oi) => {
            const letter = ['A', 'B', 'C', 'D'][oi];
            return `
              <button type="button" onclick="checkLessonQuiz(${l.num}, ${qi}, ${oi}, ${q.ans})" id="qbtn-${l.num}-${qi}-${oi}" class="quiz-opt-btn text-left px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-400 dark:hover:border-teal-500 text-xs text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
                <span class="font-black text-slate-400 dark:text-slate-500 shrink-0">${letter}.</span>
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div id="qexp-${l.num}-${qi}" class="hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed border"></div>
      </div>
    `).join('');

    html += `
      <article id="bai-${l.num}" data-lesson-card="${l.num}" data-chapter-id="${l.chapter}" class="lesson-article scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden">
        <!-- Card Header -->
        <div class="p-5 md:p-6 border-b border-slate-100 dark:border-slate-700/70 ${th.softBg}">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 rounded-lg text-xs font-black ${l.isReview ? 'bg-amber-600 text-white' : th.pillActive} shadow-sm">${l.isReview ? 'BÀI ' + l.num + ' • ÔN TẬP CHƯƠNG ' + l.chapter : 'BÀI ' + l.num}</span>
              <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${th.badgeBg} ${th.badgeText} border ${th.badgeBorder}">${ch.shortTitle}</span>
              <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700">📖 SGK ${l.pages}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button type="button" onclick="toggleBookmark(${l.num})" id="bm-btn-${l.num}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1" title="Đánh dấu bài học">
                <span id="bm-icon-${l.num}">☆</span> <span class="hidden sm:inline">Lưu</span>
              </button>
              <button type="button" onclick="toggleDone(${l.num})" id="done-btn-${l.num}" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500 transition flex items-center gap-1">
                <span id="done-icon-${l.num}">○</span> <span>Hoàn thành</span>
              </button>
            </div>
          </div>

          <h3 class="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            Bài ${l.num}. ${l.title} <span class="text-sm font-bold text-slate-500 dark:text-slate-400">(${l.pages})</span>
          </h3>

          <p class="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Trọng tâm bài học:</strong> ${l.subtitle}
          </p>

          <!-- Quick Activity Jump Pills -->
          <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">Cấu trúc bài:</span>
            <a href="#b${l.num}-cong-thuc" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-teal-400 transition">A. Công thức &amp; Quy tắc (${(l.keyFormulas || []).length})</a>
            <a href="#b${l.num}-noi-dung" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-teal-400 transition">B. Nội dung chi tiết (${(l.sections || []).length} mục)</a>
            <a href="#b${l.num}-so-do" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-teal-400 transition">C. Sơ đồ trực quan</a>
            <a href="#b${l.num}-thi-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-teal-400 transition">D. Thí nghiệm, An toàn &amp; Ví dụ</a>
            <a href="#b${l.num}-trac-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 hover:bg-teal-100 transition">E. Trắc nghiệm (${lessonQuizzes.length} câu)</a>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 md:p-6 space-y-6">
          <!-- A. Công thức & Quy tắc cốt lõi -->
          <section id="b${l.num}-cong-thuc" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần A</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Công thức, Định luật &amp; Quy tắc cốt lõi</h4>
            </div>
            <div class="grid grid-cols-1 gap-2.5">
              ${formulasHtml}
            </div>
          </section>

          <!-- B. Nội dung kiến thức theo mục sách -->
          <section id="b${l.num}-noi-dung" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần B</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nội dung kiến thức đầy đủ theo bài học SGK</h4>
            </div>
            <div class="space-y-4">
              ${sectionsHtml}
            </div>
          </section>

          <!-- C. Sơ đồ trực quan SVG -->
          <section id="b${l.num}-so-do" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-600 text-white">Phần C</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Sơ đồ &amp; Hình minh họa trọng tâm</h4>
            </div>
            <div class="p-3 md:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/80 overflow-x-auto">
              ${svgHtml}
              <div class="text-[11px] text-center font-semibold text-slate-500 dark:text-slate-400 mt-2">▲ ${l.diagramCaption || ''}</div>
            </div>
          </section>

          <!-- D. Thí nghiệm, An toàn, Ví dụ & Lỗi cần tránh -->
          <section id="b${l.num}-thi-nghiem" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-amber-600 text-white">Phần D</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Thí nghiệm, Lưu ý An toàn, Ví dụ mẫu &amp; Lỗi cần tránh</h4>
            </div>
            <div class="space-y-3.5">
              <div class="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/25 border border-teal-200/80 dark:border-teal-800/60">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="px-2 py-0.5 rounded bg-teal-600 text-white text-[10px] font-black uppercase">Thực hành &amp; Phương pháp</span>
                  <h5 class="text-xs md:text-sm font-extrabold text-teal-950 dark:text-teal-200">${expSafe.title || ''}</h5>
                </div>
                <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${expSafe.detail || ''}</div>
              </div>

              <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60">
                <h5 class="text-xs md:text-sm font-black text-amber-900 dark:text-amber-300 uppercase tracking-wide mb-2">Ví dụ minh họa &amp; Lỗi sai cần tránh:</h5>
                <ul class="space-y-2">
                  ${examplesHtml}
                </ul>
              </div>
            </div>
          </section>

          <!-- E. Trắc nghiệm củng cố tại bài -->
          <section id="b${l.num}-trac-nghiem" class="scroll-mt-24 pt-2 border-t border-slate-200/80 dark:border-slate-700/70">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-600 text-white">Phần E</span>
                <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Câu hỏi trắc nghiệm củng cố Bài ${l.num} (${lessonQuizzes.length} câu)</h4>
              </div>
              <span id="lesson-quiz-score-${l.num}" class="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800/60">Đã trả lời: 0/${lessonQuizzes.length}</span>
            </div>
            <div class="space-y-3">
              ${quizHtml}
            </div>
          </section>
        </div>
      </article>
    `;
  });

  return html;
}

function renderSummaryTables() {
  const formulaRowsHtml = quickFormulaTable.map(row => {
    const firstMatch = (row.lessonRef || '').match(/\d+/);
    const targetLesson = firstMatch ? firstMatch[0] : 1;
    return `
      <tr class="hover:bg-teal-50/50 dark:hover:bg-slate-800/60 transition-colors">
        <td class="py-3 px-3.5 font-extrabold text-slate-900 dark:text-white">${row.topic}</td>
        <td class="py-3 px-3.5 text-slate-700 dark:text-slate-300 leading-relaxed">${row.formula}</td>
        <td class="py-3 px-3.5 whitespace-nowrap">
          <a href="#bai-${targetLesson}" class="px-2.5 py-1 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-bold text-[11px] hover:bg-teal-200 transition">${row.lessonRef}</a>
        </td>
      </tr>
    `;
  }).join('');

  const safetyCardsHtml = safetyGuidelines.map(sf => `
    <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-900/70 border border-rose-200/80 dark:border-slate-700/80 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-xl bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0">⚠️</span>
          <h4 class="text-xs md:text-sm font-black text-slate-900 dark:text-white leading-snug">${sf.num}. ${sf.title}</h4>
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mt-1.5">${sf.desc}</p>
      </div>
    </div>
  `).join('');

  return { formulaRowsHtml, safetyCardsHtml };
}

const { formulaRowsHtml, safetyCardsHtml } = renderSummaryTables();

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hóa Học 10 – Kết Nối Tri Thức Với Cuộc Sống | Học Liệu Đầy Đủ 7 Chương, 23 Bài</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
          }
        }
      }
    };
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.45); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(13, 148, 136, 0.7); }
    .sidebar-active {
      background: linear-gradient(90deg, rgba(20, 184, 166, 0.16), rgba(16, 185, 129, 0.08));
      border-color: rgba(20, 184, 166, 0.45) !important;
      color: #0f766e !important;
    }
    .dark .sidebar-active {
      background: linear-gradient(90deg, rgba(20, 184, 166, 0.22), rgba(16, 185, 129, 0.1));
      border-color: rgba(20, 184, 166, 0.5) !important;
      color: #5eead4 !important;
    }
  </style>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-white">

  <!-- Sticky Top Navigation Bar -->
  <header class="sticky top-0 z-40 h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
    <div class="max-w-[1440px] mx-auto h-full px-4 flex items-center justify-between gap-3">
      <!-- Left: Back & Brand -->
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 text-slate-700 dark:text-slate-200 flex items-center justify-center transition shrink-0" title="Về trang chủ">
          ←
        </a>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white font-black flex items-center justify-center text-sm shadow-md shrink-0">
          HÓA
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <h1 class="text-sm md:text-base font-black text-slate-900 dark:text-white truncate">Hóa Học 10</h1>
            <span class="px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-[10px] font-black uppercase tracking-wider shrink-0">Kết nối tri thức</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Đủ 7 Chương • 23 Bài (gồm 7 bài Ôn tập chương) • SGK 122 trang</p>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 shrink-0">
        <button type="button" onclick="openModal('search-modal')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 border border-slate-200/80 dark:border-slate-700 transition">
          <span>🔍</span>
          <span class="hidden sm:inline">Tìm kiếm</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600">Ctrl K</kbd>
        </button>

        <button type="button" onclick="openModal('formula-modal')" class="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-xs font-bold text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/70 transition flex items-center gap-1.5">
          <span>📐</span>
          <span class="hidden md:inline">Sổ tay Công thức</span>
        </button>

        <button type="button" onclick="openModal('safety-modal')" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-xs font-bold text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/70 transition flex items-center gap-1.5">
          <span>⚠️</span>
          <span class="hidden md:inline">An toàn Thực hành</span>
        </button>

        <button type="button" onclick="openArenaModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-black shadow-sm transition flex items-center gap-1.5">
          <span>⚔️</span>
          <span>Thi Đấu</span>
          <span class="hidden sm:inline px-1.5 py-0.5 rounded bg-white/20 text-[10px]">45:00</span>
        </button>

        <button type="button" onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition border border-slate-200/80 dark:border-slate-700" title="Đổi giao diện Sáng/Tối">
          <span id="theme-icon">🌙</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Main 12-Column Container -->
  <div class="max-w-[1440px] mx-auto px-4 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

      <!-- Left Sticky Sidebar (4 cols on lg) -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm p-4">
        <!-- Sidebar Header & Progress -->
        <div class="shrink-0 space-y-3 pb-3 border-b border-slate-200/80 dark:border-slate-800">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-teal-600 dark:text-teal-400 font-black">☰</span>
              <h2 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Mục lục bài học</h2>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-[11px] font-extrabold">7 Chương • 23 Bài</span>
          </div>

          <!-- Progress Bar -->
          <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/60">
            <div class="flex items-center justify-between text-[11px] font-bold mb-1.5">
              <span class="text-slate-600 dark:text-slate-300">Tiến độ hoàn thành:</span>
              <span id="progress-label" class="text-teal-600 dark:text-teal-400 font-black">0 / 23 bài (0%)</span>
            </div>
            <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Sidebar Filter & Bookmark Filter -->
          <div class="flex items-center gap-1.5">
            <div class="relative flex-1">
              <input id="sidebar-filter" type="text" oninput="filterSidebar()" placeholder="Lọc theo tên bài, chương..." class="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-teal-500 text-slate-800 dark:text-slate-100" />
              <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">🔍</span>
            </div>
            <button type="button" id="bm-filter-btn" onclick="toggleBookmarkFilter()" class="px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-teal-500 transition shrink-0" title="Chỉ hiện bài đã lưu">
              ☆ Đã lưu
            </button>
          </div>
        </div>

        <!-- Scrollable Lesson List -->
        <nav id="sidebar-nav" class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 space-y-3 text-sm pb-8 pt-3">
          ${renderSidebar()}
        </nav>
      </aside>

      <!-- Main Content Column (8 cols on lg) -->
      <main class="lg:col-span-8 space-y-6 min-w-0">

        <!-- Hero Banner & Course Overview -->
        <section class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
          <div class="p-6 md:p-8 bg-gradient-to-br from-teal-700 via-emerald-700 to-cyan-800 text-white relative">
            <div class="max-w-3xl space-y-3">
              <div class="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold">
                <span>🧪 BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</span>
                <span>•</span>
                <span>7 CHƯƠNG – 23 BÀI (GỒM 7 BÀI ÔN TẬP CHƯƠNG)</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                KIẾN THỨC ĐẦY ĐỦ THEO BÀI – HÓA HỌC 10
              </h2>
              <p class="text-xs md:text-sm text-teal-100 leading-relaxed">
                Hệ thống hóa đầy đủ khái niệm, quy tắc, công thức, ví dụ tính toán, thí nghiệm, ứng dụng thực tiễn và ghi chú an toàn hóa chất theo đúng mục lục 7 chương, 23 bài (trang 12–118 SGK Hóa học 10).
              </p>
              <div class="flex flex-wrap gap-2 pt-1">
                <a href="#bai-1" class="px-4 py-2 rounded-xl bg-white text-teal-800 font-black text-xs shadow hover:bg-teal-50 transition">Bắt đầu từ Bài 1 →</a>
                <a href="#bang-cong-thuc-va-an-toan" class="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/25 transition">📐 Bảng công thức &amp; An toàn</a>
                <button type="button" onclick="openArenaModal()" class="px-4 py-2 rounded-xl bg-emerald-500/30 hover:bg-emerald-500/40 text-white font-bold text-xs border border-emerald-300/40 transition">⚔️ Làm đề tổng hợp 69 câu</button>
              </div>
            </div>
          </div>

          <!-- 7 Chapters Grid Overview -->
          <div class="p-5 md:p-6 bg-slate-50/70 dark:bg-slate-900/60 space-y-5">
            <div>
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Khung chương trình 7 Chương – 23 Bài học</h3>
                <span class="text-[11px] text-slate-500 dark:text-slate-400">Nhấn vào chương hoặc bài để chuyển nhanh</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                ${renderChapterOverviewCards()}
              </div>
            </div>

            <!-- Collapsible Full Table of Contents matching SGK pages 4-5 -->
            <details class="group rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 overflow-hidden">
              <summary class="cursor-pointer px-4 py-3 flex items-center justify-between text-xs font-extrabold text-slate-800 dark:text-slate-100 hover:bg-teal-50/50 dark:hover:bg-slate-800 transition">
                <span>📋 Xem Bảng Mục Lục Chi Tiết 7 Chương – 23 Bài Theo Đúng Số Trang SGK (tr. 4–5)</span>
                <span class="text-teal-600 dark:text-teal-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div class="overflow-x-auto border-t border-slate-200 dark:border-slate-700">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                      <th class="py-2.5 px-3 font-black">Chương</th>
                      <th class="py-2.5 px-3 text-center font-black">Bài</th>
                      <th class="py-2.5 px-3 font-black">Tên bài học</th>
                      <th class="py-2.5 px-3 text-right font-black">Trang SGK</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200/60 dark:divide-slate-700/60">
                    ${renderFullTableOfContents()}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        </section>

        <!-- All 23 Lessons -->
        <div id="lessons-container" class="space-y-6">
          ${renderLessons()}
        </div>

        <!-- Final Summary Section: Bảng công thức tra nhanh & Ghi chú an toàn thực hành -->
        <section id="bang-cong-thuc-va-an-toan" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
          <div class="p-6 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white">
            <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-1.5">
              ★ TỔNG KẾT TOÀN MÔN HÓA HỌC 10
            </div>
            <h2 class="text-xl md:text-2xl font-black">Bảng Công Thức – Quy Tắc Tra Nhanh &amp; Ghi Chú An Toàn Thực Hành</h2>
            <p class="text-xs md:text-sm text-white/90 mt-1">Hệ thống hóa 14 công thức cốt lõi xuyên suốt 7 chương và 6 nguyên tắc an toàn phòng thí nghiệm (đối chiếu SGK trang 4–119).</p>
          </div>

          <div class="p-5 md:p-6 space-y-8">
            <!-- 1. Bảng công thức và quy tắc tra nhanh -->
            <div>
              <h3 class="text-base md:text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span class="w-7 h-7 rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 flex items-center justify-center text-sm">📐</span>
                1. Bảng công thức và quy tắc tra nhanh Hóa học 10
              </h3>
              <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-teal-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Nội dung kiến thức</th>
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Công thức / Quy tắc trọng tâm</th>
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Bài học</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200/70 dark:divide-slate-700/60">
                    ${formulaRowsHtml}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 2. Ghi chú an toàn thực hành -->
            <div>
              <h3 class="text-base md:text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span class="w-7 h-7 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 flex items-center justify-center text-sm">⚠️</span>
                2. Ghi chú an toàn thực hành Hóa học 10
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${safetyCardsHtml}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- MODAL 1: Search Modal (Ctrl + K) -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-16 px-4">
    <div class="w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <span class="text-lg">🔍</span>
        <input id="global-search-input" type="text" oninput="runGlobalSearch()" placeholder="Nhập từ khóa hóa học (VD: đồng vị, orbital, độ âm điện, octet, enthalpy, Van't Hoff, Javel, AgNO3...)" class="w-full bg-transparent text-sm font-medium text-slate-900 dark:text-white focus:outline-none" />
        <button type="button" onclick="closeModal('search-modal')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white">ESC</button>
      </div>
      <div id="global-search-results" class="max-h-[65vh] overflow-y-auto p-4 space-y-2 custom-scrollbar">
        <div class="text-xs text-slate-400 text-center py-6">Nhập từ khóa bất kì để tìm nhanh trong 23 bài học, công thức, phương trình và thí nghiệm.</div>
      </div>
    </div>
  </div>

  <!-- MODAL 2: Formula Cheat Sheet Modal -->
  <div id="formula-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-4xl max-h-[85vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
      <div class="p-4 md:p-5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white flex items-center justify-between shrink-0">
        <div>
          <h3 class="text-base md:text-lg font-black">📐 Sổ Tay Công Thức &amp; Quy Tắc Tra Nhanh Hóa Học 10</h3>
          <p class="text-xs text-teal-100">Tra cứu nhanh 14 công thức và quy luật trọng tâm xuyên suốt 7 chương</p>
        </div>
        <button type="button" onclick="closeModal('formula-modal')" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white font-black flex items-center justify-center">✕</button>
      </div>
      <div class="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1">
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-teal-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <th class="py-3 px-3.5 font-black">Nội dung</th>
                <th class="py-3 px-3.5 font-black">Công thức / Quy tắc</th>
                <th class="py-3 px-3.5 font-black">Bài</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200/70 dark:divide-slate-700/60">
              ${formulaRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 3: Safety Guidelines Modal -->
  <div id="safety-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-4xl max-h-[85vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
      <div class="p-4 md:p-5 bg-gradient-to-r from-rose-600 to-orange-600 text-white flex items-center justify-between shrink-0">
        <div>
          <h3 class="text-base md:text-lg font-black">⚠️ Sổ Tay An Toàn Thực Hành Phòng Thí Nghiệm Hóa Học 10</h3>
          <p class="text-xs text-rose-100">Quy tắc an toàn bắt buộc khi thao tác với Na, Cl2, Br2, HF, H2SO4 đặc, SO2 và Nước Javel</p>
        </div>
        <button type="button" onclick="closeModal('safety-modal')" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white font-black flex items-center justify-center">✕</button>
      </div>
      <div class="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${safetyCardsHtml}
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 4: Arena Quiz Modal (Đấu trường Hóa Học 10) -->
  <div id="arena-modal" class="fixed inset-0 z-50 hidden bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-3xl max-h-[88vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
      <div class="p-4 md:p-5 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white flex items-center justify-between shrink-0">
        <div>
          <h3 class="text-base md:text-lg font-black">⚔️ Đấu Trường Trắc Nghiệm Hóa Học 10</h3>
          <p class="text-xs text-teal-100">Đề ngẫu nhiên 20 câu từ ngân hàng 69 câu phủ kín 23 bài học</p>
        </div>
        <div class="flex items-center gap-3">
          <span id="arena-timer" class="px-3 py-1 rounded-xl bg-white/20 font-mono text-xs font-black">45:00</span>
          <button type="button" onclick="closeArenaModal()" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white font-black flex items-center justify-center">✕</button>
        </div>
      </div>
      <div id="arena-body" class="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4"></div>
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between shrink-0">
        <div id="arena-status" class="text-xs font-bold text-slate-600 dark:text-slate-300">Chưa nộp bài</div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="startArenaQuiz()" class="px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-xs font-bold text-slate-700 dark:text-slate-200 transition">🔄 Đổi đề mới</button>
          <button type="button" id="arena-submit-btn" onclick="submitArenaQuiz()" class="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-black shadow transition">Nộp bài &amp; Chấm điểm</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Embedded Data & Interactive Script -->
  <script>
    const QUIZZES_DB = ${JSON.stringify(quizzes)};
    const SEARCH_INDEX = ${JSON.stringify(
      lessonsList.map(l => ({
        id: l.num,
        chapterId: l.chapter,
        pages: l.pages,
        title: l.title,
        subtitle: l.subtitle,
        formulas: (l.keyFormulas || []).join(' | '),
        headings: (l.sections || []).map(s => s.heading).join(' • ')
      }))
    )};

    const STORAGE_DONE_KEY = 'hoahoc10_done_lessons';
    const STORAGE_BM_KEY = 'hoahoc10_bookmarked_lessons';
    let doneLessons = JSON.parse(localStorage.getItem(STORAGE_DONE_KEY) || '[]');
    let bookmarkedLessons = JSON.parse(localStorage.getItem(STORAGE_BM_KEY) || '[]');
    let bookmarkFilterActive = false;
    const lessonAnsweredState = {};

    function initTheme() {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
      updateThemeIcon();
    }
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      updateThemeIcon();
    }
    function updateThemeIcon() {
      const icon = document.getElementById('theme-icon');
      if (icon) icon.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
    }

    function syncProgressUI() {
      const total = 23;
      const count = doneLessons.length;
      const pct = Math.round((count / total) * 100);
      const label = document.getElementById('progress-label');
      const bar = document.getElementById('progress-bar');
      if (label) label.textContent = count + ' / ' + total + ' bài (' + pct + '%)';
      if (bar) bar.style.width = pct + '%';

      for (let i = 1; i <= total; i++) {
        const isDone = doneLessons.includes(i);
        const btn = document.getElementById('done-btn-' + i);
        const icon = document.getElementById('done-icon-' + i);
        const check = document.getElementById('sidebar-check-' + i);
        if (btn && icon) {
          if (isDone) {
            btn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-emerald-500 bg-emerald-600 text-white transition flex items-center gap-1';
            icon.textContent = '✓';
          } else {
            btn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500 transition flex items-center gap-1';
            icon.textContent = '○';
          }
        }
        if (check) check.classList.toggle('hidden', !isDone);

        const isBm = bookmarkedLessons.includes(i);
        const bmBtn = document.getElementById('bm-btn-' + i);
        const bmIcon = document.getElementById('bm-icon-' + i);
        if (bmBtn && bmIcon) {
          if (isBm) {
            bmBtn.className = 'px-2.5 py-1.5 rounded-xl text-xs font-bold border border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 transition flex items-center gap-1';
            bmIcon.textContent = '★';
          } else {
            bmBtn.className = 'px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400 transition flex items-center gap-1';
            bmIcon.textContent = '☆';
          }
        }
      }
    }

    function toggleDone(id) {
      if (doneLessons.includes(id)) {
        doneLessons = doneLessons.filter(x => x !== id);
      } else {
        doneLessons.push(id);
      }
      localStorage.setItem(STORAGE_DONE_KEY, JSON.stringify(doneLessons));
      syncProgressUI();
    }

    function toggleBookmark(id) {
      if (bookmarkedLessons.includes(id)) {
        bookmarkedLessons = bookmarkedLessons.filter(x => x !== id);
      } else {
        bookmarkedLessons.push(id);
      }
      localStorage.setItem(STORAGE_BM_KEY, JSON.stringify(bookmarkedLessons));
      syncProgressUI();
      if (bookmarkFilterActive) filterSidebar();
    }

    function toggleBookmarkFilter() {
      bookmarkFilterActive = !bookmarkFilterActive;
      const btn = document.getElementById('bm-filter-btn');
      if (btn) {
        btn.className = bookmarkFilterActive
          ? 'px-2.5 py-1.5 rounded-xl text-xs font-bold border border-amber-500 bg-amber-600 text-white transition shrink-0'
          : 'px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-teal-500 transition shrink-0';
        btn.textContent = bookmarkFilterActive ? '★ Đã lưu' : '☆ Đã lưu';
      }
      filterSidebar();
    }

    function filterSidebar() {
      const q = (document.getElementById('sidebar-filter')?.value || '').toLowerCase().trim();
      document.querySelectorAll('.sidebar-lesson-link[data-lesson-id]').forEach(link => {
        const lid = Number(link.getAttribute('data-lesson-id'));
        const text = link.textContent.toLowerCase();
        const matchText = !q || text.includes(q);
        const matchBm = !bookmarkFilterActive || bookmarkedLessons.includes(lid);
        link.style.display = (matchText && matchBm) ? '' : 'none';
      });
    }

    function checkLessonQuiz(lessonId, qIndex, chosenIdx, correctIdx) {
      const qData = (QUIZZES_DB[lessonId] || [])[qIndex];
      if (!qData) return;

      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('qbtn-' + lessonId + '-' + qIndex + '-' + i);
        if (!btn) continue;
        btn.disabled = true;
        if (i === correctIdx) {
          btn.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-start gap-2';
        } else if (i === chosenIdx && chosenIdx !== correctIdx) {
          btn.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-xs font-bold text-rose-900 dark:text-rose-200 flex items-start gap-2';
        } else {
          btn.classList.add('opacity-60');
        }
      }

      const expBox = document.getElementById('qexp-' + lessonId + '-' + qIndex);
      if (expBox) {
        const isCorrect = chosenIdx === correctIdx;
        expBox.classList.remove('hidden');
        expBox.className = 'mt-2.5 p-3 rounded-xl text-xs leading-relaxed border ' + (
          isCorrect
            ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
            : 'bg-rose-50/90 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
        );
        expBox.innerHTML = '<strong>' + (isCorrect ? '✓ Chính xác! ' : '✕ Chưa đúng! ') + '</strong>' + qData.exp;
      }

      if (!lessonAnsweredState[lessonId]) lessonAnsweredState[lessonId] = {};
      lessonAnsweredState[lessonId][qIndex] = (chosenIdx === correctIdx);

      const totalQ = (QUIZZES_DB[lessonId] || []).length;
      const answeredCount = Object.keys(lessonAnsweredState[lessonId]).length;
      const correctCount = Object.values(lessonAnsweredState[lessonId]).filter(Boolean).length;
      const scoreEl = document.getElementById('lesson-quiz-score-' + lessonId);
      if (scoreEl) {
        scoreEl.textContent = 'Đúng ' + correctCount + '/' + answeredCount + ' (Tổng ' + totalQ + ' câu)';
      }
      if (answeredCount === totalQ && !doneLessons.includes(lessonId)) {
        toggleDone(lessonId);
      }
    }

    function openModal(id) {
      const m = document.getElementById(id);
      if (!m) return;
      m.classList.remove('hidden');
      if (id === 'search-modal') {
        setTimeout(() => document.getElementById('global-search-input')?.focus(), 50);
      }
    }
    function closeModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.add('hidden');
    }

    function runGlobalSearch() {
      const q = (document.getElementById('global-search-input')?.value || '').toLowerCase().trim();
      const box = document.getElementById('global-search-results');
      if (!box) return;
      if (!q) {
        box.innerHTML = '<div class="text-xs text-slate-400 text-center py-6">Nhập từ khóa bất kì để tìm nhanh trong 23 bài học, công thức, phương trình và thí nghiệm.</div>';
        return;
      }
      const hits = SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.formulas.toLowerCase().includes(q) ||
        item.headings.toLowerCase().includes(q)
      );

      if (!hits.length) {
        box.innerHTML = '<div class="text-xs text-slate-400 text-center py-6">Không tìm thấy kết quả phù hợp cho từ khóa này.</div>';
        return;
      }

      box.innerHTML = hits.map(item => \`
        <a href="#bai-\${item.id}" onclick="closeModal('search-modal')" class="block p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-teal-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition">
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="text-xs font-black text-teal-600 dark:text-teal-400">Bài \${item.id}. \${item.title} (\${item.pages})</span>
            <span class="text-[10px] font-bold text-slate-400">Chương \${item.chapterId}</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">\${item.subtitle}</p>
          <div class="text-[11px] text-slate-400 dark:text-slate-500 mt-1 truncate">Mục: \${item.headings}</div>
        </a>
      \`).join('');
    }

    let arenaQuestions = [];
    let arenaChoices = {};
    let arenaTimerInterval = null;
    let arenaRemainingSec = 45 * 60;

    function openArenaModal() {
      openModal('arena-modal');
      if (!arenaQuestions.length) startArenaQuiz();
    }
    function closeArenaModal() {
      closeModal('arena-modal');
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
    }

    function startArenaQuiz() {
      const pool = [];
      Object.keys(QUIZZES_DB).forEach(lid => {
        (QUIZZES_DB[lid] || []).forEach(q => {
          pool.push({ lessonId: lid, ...q });
        });
      });
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      arenaQuestions = pool.slice(0, 20);
      arenaChoices = {};
      arenaRemainingSec = 45 * 60;

      const submitBtn = document.getElementById('arena-submit-btn');
      if (submitBtn) submitBtn.disabled = false;
      const status = document.getElementById('arena-status');
      if (status) status.textContent = 'Đã chọn: 0 / ' + arenaQuestions.length + ' câu';

      renderArenaQuestions();
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        if (arenaRemainingSec > 0) {
          arenaRemainingSec--;
          const m = String(Math.floor(arenaRemainingSec / 60)).padStart(2, '0');
          const s = String(arenaRemainingSec % 60).padStart(2, '0');
          const tEl = document.getElementById('arena-timer');
          if (tEl) tEl.textContent = m + ':' + s;
        } else {
          submitArenaQuiz();
        }
      }, 1000);
    }

    function renderArenaQuestions() {
      const body = document.getElementById('arena-body');
      if (!body) return;
      body.innerHTML = arenaQuestions.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2 py-0.5 rounded bg-teal-600 text-white text-[10px] font-black">Câu \${idx + 1} / \${arenaQuestions.length}</span>
            <span class="text-[11px] font-bold text-slate-400">Bài \${q.lessonId}</span>
          </div>
          <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-3">\${q.q}</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            \${q.options.map((opt, oi) => \`
              <button type="button" onclick="selectArenaOption(\${idx}, \${oi})" id="arena-opt-\${idx}-\${oi}" class="text-left px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 hover:border-teal-500 transition flex items-start gap-2">
                <span class="font-black text-slate-400">\${['A','B','C','D'][oi]}.</span>
                <span>\${opt}</span>
              </button>
            \`).join('')}
          </div>
          <div id="arena-exp-\${idx}" class="hidden mt-2.5 p-2.5 rounded-xl text-xs"></div>
        </div>
      \`).join('');
    }

    function selectArenaOption(qIdx, optIdx) {
      arenaChoices[qIdx] = optIdx;
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('arena-opt-' + qIdx + '-' + i);
        if (!btn) continue;
        btn.className = (i === optIdx)
          ? 'text-left px-3 py-2 rounded-xl border-2 border-teal-500 bg-teal-50 dark:bg-teal-950/50 text-xs font-bold text-teal-900 dark:text-teal-200 flex items-start gap-2'
          : 'text-left px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 hover:border-teal-500 transition flex items-start gap-2';
      }
      const status = document.getElementById('arena-status');
      if (status) status.textContent = 'Đã chọn: ' + Object.keys(arenaChoices).length + ' / ' + arenaQuestions.length + ' câu';
    }

    function submitArenaQuiz() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      let correct = 0;
      arenaQuestions.forEach((q, idx) => {
        const chosen = arenaChoices[idx];
        if (chosen === q.ans) correct++;
        for (let i = 0; i < 4; i++) {
          const btn = document.getElementById('arena-opt-' + idx + '-' + i);
          if (!btn) continue;
          btn.disabled = true;
          if (i === q.ans) {
            btn.className = 'text-left px-3 py-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-start gap-2';
          } else if (i === chosen && chosen !== q.ans) {
            btn.className = 'text-left px-3 py-2 rounded-xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-xs font-bold text-rose-900 dark:text-rose-200 flex items-start gap-2';
          }
        }
        const exp = document.getElementById('arena-exp-' + idx);
        if (exp) {
          exp.classList.remove('hidden');
          exp.className = 'mt-2.5 p-2.5 rounded-xl text-xs border ' + (chosen === q.ans ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-900 dark:text-rose-200');
          exp.innerHTML = '<strong>Giải thích:</strong> ' + q.exp;
        }
      });
      const score10 = ((correct / arenaQuestions.length) * 10).toFixed(1);
      const status = document.getElementById('arena-status');
      if (status) status.innerHTML = '🎯 Kết quả: <strong class="text-emerald-600 dark:text-emerald-400">' + correct + '/' + arenaQuestions.length + ' câu (' + score10 + ' điểm)</strong>';
    }

    function initScrollSpy() {
      const articles = document.querySelectorAll('.lesson-article');
      const navLinks = document.querySelectorAll('.sidebar-lesson-link[data-lesson-id]');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-lesson-card');
            navLinks.forEach(link => {
              const match = link.getAttribute('data-lesson-id') === id;
              link.classList.toggle('sidebar-active', match);
            });
          }
        });
      }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
      articles.forEach(a => observer.observe(a));
    }

    window.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('search-modal');
      } else if (e.key === 'Escape') {
        ['search-modal', 'formula-modal', 'safety-modal'].forEach(closeModal);
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      syncProgressUI();
      initScrollSpy();
    });
  </script>
</body>
</html>
`;

const outPath = path.join(__dirname, '..', 'courses', 'hoahoc_10.html');
fs.writeFileSync(outPath, fullHtml, 'utf8');
console.log('Built courses/hoahoc_10.html successfully! Size:', (Buffer.byteLength(fullHtml, 'utf8') / 1024).toFixed(1), 'KB');
