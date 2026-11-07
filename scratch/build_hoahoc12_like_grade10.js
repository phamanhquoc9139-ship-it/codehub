// scratch/build_hoahoc12_like_grade10.js
const fs = require('fs');
const path = require('path');

const data = require('./make_hoahoc12_full_dataset.js');
const { chapters, lessons: lessonsObj, quickFormulaTable, safetyGuidelines, diagrams, chapterSvgs, examQuestions } = data;

const lessonsList = Object.keys(lessonsObj)
  .map(k => Number(k))
  .sort((a, b) => a - b)
  .map(k => lessonsObj[k]);

// Color themes matching grade 10 style
const colorThemes = {
  emerald: {
    badgeBg: 'bg-emerald-50 dark:bg-emerald-900/30',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    badgeBorder: 'border-emerald-200 dark:border-emerald-800/60',
    headerGrad: 'from-emerald-700 via-teal-700 to-green-700',
    softBg: 'bg-emerald-50/70 dark:bg-emerald-950/25',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400',
    pillActive: 'bg-emerald-600 text-white',
    dot: 'bg-emerald-500'
  },
  teal: {
    badgeBg: 'bg-teal-50 dark:bg-teal-900/30',
    badgeText: 'text-teal-700 dark:text-teal-300',
    badgeBorder: 'border-teal-200 dark:border-teal-800/60',
    headerGrad: 'from-teal-700 via-cyan-700 to-emerald-700',
    softBg: 'bg-teal-50/70 dark:bg-teal-950/25',
    iconBg: 'bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400',
    pillActive: 'bg-teal-600 text-white',
    dot: 'bg-teal-500'
  },
  indigo: {
    badgeBg: 'bg-indigo-50 dark:bg-indigo-900/30',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    badgeBorder: 'border-indigo-200 dark:border-indigo-800/60',
    headerGrad: 'from-indigo-700 via-blue-700 to-purple-700',
    softBg: 'bg-indigo-50/70 dark:bg-indigo-950/25',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400',
    pillActive: 'bg-indigo-600 text-white',
    dot: 'bg-indigo-500'
  },
  purple: {
    badgeBg: 'bg-purple-50 dark:bg-purple-900/30',
    badgeText: 'text-purple-700 dark:text-purple-300',
    badgeBorder: 'border-purple-200 dark:border-purple-800/60',
    headerGrad: 'from-purple-700 via-fuchsia-700 to-indigo-700',
    softBg: 'bg-purple-50/70 dark:bg-purple-950/25',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
    pillActive: 'bg-purple-600 text-white',
    dot: 'bg-purple-500'
  },
  cyan: {
    badgeBg: 'bg-cyan-50 dark:bg-cyan-900/30',
    badgeText: 'text-cyan-700 dark:text-cyan-300',
    badgeBorder: 'border-cyan-200 dark:border-cyan-800/60',
    headerGrad: 'from-cyan-700 via-sky-700 to-teal-700',
    softBg: 'bg-cyan-50/70 dark:bg-cyan-950/25',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400',
    pillActive: 'bg-cyan-600 text-white',
    dot: 'bg-cyan-500'
  },
  amber: {
    badgeBg: 'bg-amber-50 dark:bg-amber-900/30',
    badgeText: 'text-amber-700 dark:text-amber-300',
    badgeBorder: 'border-amber-200 dark:border-amber-800/60',
    headerGrad: 'from-amber-700 via-orange-700 to-yellow-700',
    softBg: 'bg-amber-50/70 dark:bg-amber-950/25',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400',
    pillActive: 'bg-amber-600 text-white',
    dot: 'bg-amber-500'
  },
  rose: {
    badgeBg: 'bg-rose-50 dark:bg-rose-900/30',
    badgeText: 'text-rose-700 dark:text-rose-300',
    badgeBorder: 'border-rose-200 dark:border-rose-800/60',
    headerGrad: 'from-rose-700 via-red-700 to-pink-700',
    softBg: 'bg-rose-50/70 dark:bg-rose-950/25',
    iconBg: 'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400',
    pillActive: 'bg-rose-600 text-white',
    dot: 'bg-rose-500'
  },
  blue: {
    badgeBg: 'bg-blue-50 dark:bg-blue-900/30',
    badgeText: 'text-blue-700 dark:text-blue-300',
    badgeBorder: 'border-blue-200 dark:border-blue-800/60',
    headerGrad: 'from-blue-700 via-indigo-700 to-sky-700',
    softBg: 'bg-blue-50/70 dark:bg-blue-950/25',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
    pillActive: 'bg-blue-600 text-white',
    dot: 'bg-blue-500'
  }
};

// 1. Render Sidebar matching Grade 10
function renderSidebar() {
  let html = '';
  chapters.forEach(ch => {
    const chLessons = lessonsList.filter(l => l.chapter === ch.num);
    const th = colorThemes[ch.color] || colorThemes.emerald;

    html += `
      <div class="sidebar-chapter-group mb-4" data-chapter="${ch.num}">
        <div class="flex items-center justify-between px-2.5 py-1.5 mb-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 text-xs font-black">
          <span class="truncate">${ch.title}</span>
          <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${th.badgeBg} ${th.badgeText}">${ch.lessons.length} bài</span>
        </div>
        <div class="space-y-1">
    `;

    chLessons.forEach(l => {
      html += `
        <a href="#bai-${l.num}" data-lesson-id="${l.num}" class="sidebar-lesson-link group flex items-start gap-2.5 px-2.5 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800/80 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all border border-transparent">
          <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-0.5 transition-colors">${l.num}</span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-1">
              <span class="font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 leading-snug truncate">${l.title}</span>
              <span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-bold shrink-0">${l.pages}</span>
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
  return html;
}

// 2. Render 8 Chapter Overview Cards
function renderChapterOverviewCards() {
  return chapters.map(ch => {
    const th = colorThemes[ch.color] || colorThemes.emerald;
    return `
      <a href="#chuong-${ch.num}" class="group p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.badgeBg} ${th.badgeText} border ${th.badgeBorder}">Chương ${ch.num} (${ch.pages})</span>
            <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500">Bài ${ch.lessons.join(', ')}</span>
          </div>
          <div class="text-xs font-extrabold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug mb-1">${ch.title}</div>
        </div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">${ch.desc}</div>
      </a>
    `;
  }).join('');
}

// 3. Render Full Table of Contents
function renderFullTableOfContents() {
  let rows = '';
  chapters.forEach(ch => {
    const chLessons = lessonsList.filter(l => l.chapter === ch.num);
    chLessons.forEach((l, idx) => {
      rows += `
        <tr class="hover:bg-emerald-50/50 dark:hover:bg-slate-800/60 transition-colors">
          <td class="py-2 px-3 font-extrabold text-slate-800 dark:text-slate-200">${idx === 0 ? `${ch.num}. ${ch.title.replace(/^Chương \d+\.\s*/, '')}` : ''}</td>
          <td class="py-2 px-3 text-center font-black text-emerald-700 dark:text-emerald-400">${l.num}</td>
          <td class="py-2 px-3">
            <a href="#bai-${l.num}" class="font-bold text-slate-800 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
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

// 4. Render All 30 Lessons (Full 5-Part Standard like Grade 10)
function renderLessons() {
  let html = '';
  let currentChapterNum = null;

  lessonsList.forEach(l => {
    const ch = chapters.find(c => c.num === l.chapter) || chapters[0];
    const th = colorThemes[ch.color] || colorThemes.emerald;

    // Chapter Header with Banner & Vector SVG
    if (l.chapter !== currentChapterNum) {
      currentChapterNum = l.chapter;
      const chLessons = lessonsList.filter(x => x.chapter === ch.num);
      const chSvg = chapterSvgs[ch.num.toString()] || {};
      const svgCode = typeof chSvg === 'string' ? chSvg : (chSvg.svg || '');

      html += `
        <div id="chuong-${ch.num}" class="scroll-mt-24 pt-6 pb-2 space-y-4">
          <div class="rounded-3xl p-6 bg-gradient-to-r ${th.headerGrad} text-white shadow-xl relative overflow-hidden">
            <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="space-y-1.5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-black uppercase tracking-wider">
                  <span>CHƯƠNG ${ch.num} / 8 (${ch.pages})</span>
                  <span>•</span>
                  <span>HÓA HỌC 12 – KẾT NỐI TRI THỨC</span>
                </div>
                <h2 class="text-2xl md:text-3xl font-black tracking-tight">${ch.title}</h2>
                <p class="text-xs md:text-sm text-white/90 leading-relaxed">${ch.desc}</p>
              </div>
              <div class="flex flex-wrap gap-1.5 shrink-0">
                ${chLessons.map(x => `
                  <a href="#bai-${x.num}" class="px-3 py-1.5 rounded-xl ${x.isReview ? 'bg-amber-400/30 border-amber-200/50' : 'bg-white/15 border-white/20'} hover:bg-white/30 text-white text-xs font-bold backdrop-blur-sm border transition">${x.isReview ? 'Ôn tập C' + ch.num : 'Bài ' + x.num}</a>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Chapter Concept SVG Map -->
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div class="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 px-1">
              <span class="flex items-center gap-2"><i class="fa-solid fa-diagram-project text-emerald-600"></i> Sơ đồ tư duy tổng quan Chương ${ch.num}</span>
              <span class="text-[11px] font-normal text-slate-400">Hệ thống hóa toàn bộ các bài học trong chương</span>
            </div>
            <div class="w-full overflow-x-auto rounded-xl bg-slate-50 dark:bg-slate-950 p-3 flex justify-center">
              ${svgCode}
            </div>
          </div>
        </div>
      `;
    }

    // A. Key Formulas & Rules
    const formulasHtml = (l.keyFormulas || []).map(f => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/65 border border-slate-200/80 dark:border-slate-700/70 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors flex items-start gap-2.5">
        <span class="w-5 h-5 rounded-lg ${th.pillActive} flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">∑</span>
        <div class="text-xs md:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed flex-1">${f}</div>
      </div>
    `).join('');

    // B. Detailed Content Sections
    const sectionsHtml = (l.sections || []).map(sec => {
      const itemsHtml = (sec.items || []).map(pt => `
        <li class="flex items-start gap-2.5 text-xs md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 shrink-0">▸</span>
          <div class="flex-1">${pt}</div>
        </li>
      `).join('');

      return `
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
          <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-700/60">
            <span class="w-1.5 h-5 rounded-full ${th.dot} shrink-0"></span>
            ${sec.heading}
          </h4>
          <ul class="space-y-2.5">
            ${itemsHtml}
          </ul>
        </div>
      `;
    }).join('');

    // C. SVG Reaction Model
    const model = l.reactionModel || {};
    const svgModelHtml = model.svg ? `
      <div id="mo-hinh-phan-ung-${l.num}" class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/50 dark:from-slate-800/90 dark:via-slate-900/80 dark:to-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/70 shadow-sm space-y-3.5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-emerald-100 dark:border-emerald-900/60">
          <div class="flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm shadow-xs">
              <i class="fa-solid fa-atom"></i>
            </span>
            <div>
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">${model.tag}</span>
              <h5 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">${model.title}</h5>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 self-start sm:self-auto flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ${model.badge}
          </span>
        </div>
        <div class="overflow-x-auto py-1">
          ${model.svg}
        </div>
        <div class="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-emerald-100 dark:border-emerald-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong class="font-bold text-emerald-900 dark:text-emerald-300"><i class="fa-solid fa-circle-nodes mr-1 text-emerald-600"></i> Cơ chế bẻ gãy &amp; hình thành liên kết:</strong> ${model.mechanism}
        </div>
      </div>
    ` : '';

    // D. Experiments, Safety, Worked Examples & Mistakes
    const expSafe = l.experimentsAndSafety || {};
    const examplesHtml = (l.examplesAndMistakes || []).map(item => `
      <li class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">★</span>
        <div class="flex-1">${item}</div>
      </li>
    `).join('');

    // E. Quizzes
    const lessonQuizzes = l.quizzes || [];
    const quizHtml = lessonQuizzes.map((q, qi) => `
      <div class="quiz-card p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80" data-lesson="${l.num}" data-qindex="${qi}">
        <div class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-2.5 leading-relaxed">
          <span class="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-[10px] font-black mr-1.5">Câu ${qi + 1}</span>
          ${q.q}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          ${q.options.map((opt, oi) => `
            <button type="button" onclick="checkLessonQuiz(${l.num}, ${qi}, ${oi}, ${q.answer})" id="qbtn-${l.num}-${qi}-${oi}" class="quiz-opt-btn text-left px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 text-xs text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
              <span class="font-black text-slate-400 dark:text-slate-500 shrink-0">${String.fromCharCode(65 + oi)}.</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div id="qexp-${l.num}-${qi}" class="hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed border"></div>
      </div>
    `).join('');

    html += `
      <article id="bai-${l.num}" data-lesson-card="${l.num}" data-chapter-id="${l.chapter}" class="lesson-article scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden mb-8">
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
            ${l.title} <span class="text-sm font-bold text-slate-500 dark:text-slate-400">(${l.pages})</span>
          </h3>

          <p class="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Trọng tâm bài học:</strong> ${l.subtitle}
          </p>

          <!-- Quick Activity Jump Pills (5 phần A-B-C-D-E) -->
          <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">Cấu trúc bài:</span>
            <a href="#b${l.num}-cong-thuc" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">A. Công thức &amp; Quy tắc (${l.keyFormulas.length})</a>
            <a href="#b${l.num}-noi-dung" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">B. Nội dung chi tiết (${l.sections.length} mục)</a>
            <a href="#b${l.num}-so-do" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">C. Mô hình phân tử</a>
            <a href="#b${l.num}-thi-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition">D. Thí nghiệm &amp; Ví dụ</a>
            <a href="#b${l.num}-trac-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition">E. Trắc nghiệm (3 câu)</a>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 md:p-6 space-y-6">

          <!-- A. Công thức & Quy tắc cốt lõi -->
          <section id="b${l.num}-cong-thuc" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần A</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Công thức, Định luật &amp; Phương trình cốt lõi</h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${formulasHtml}
            </div>
          </section>

          <!-- B. Nội dung chi tiết bài học -->
          <section id="b${l.num}-noi-dung" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần B</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Nội dung chi tiết trọng tâm theo SGK</h4>
            </div>
            <div class="space-y-4">
              ${sectionsHtml}
            </div>
          </section>

          <!-- C. Sơ đồ trực quan & Mô hình hóa học phân tử -->
          <section id="b${l.num}-so-do" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần C</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Mô hình hóa học &amp; Cơ chế phân tử trực quan</h4>
            </div>
            ${svgModelHtml}
          </section>

          <!-- D. Thí nghiệm, An toàn & Ví dụ - Bẫy lỗi sai cần tránh -->
          <section id="b${l.num}-thi-nghiem" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần D</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Thí nghiệm thực hành &amp; Ví dụ - Bẫy lỗi sai cần tránh</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50">
                <div class="text-xs font-black text-amber-900 dark:text-amber-200 mb-1.5 flex items-center gap-1.5">
                  <span>🧪</span>
                  <span>${expSafe.title || 'Thí nghiệm tiêu biểu & Phân tích hiện tượng'}</span>
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${expSafe.detail || ''}</p>
              </div>
              <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50">
                <div class="text-xs font-black text-rose-900 dark:text-rose-200 mb-1.5 flex items-center gap-1.5">
                  <span>⚠️</span>
                  <span>Ví dụ tính toán &amp; Bẫy đề thi hay gặp</span>
                </div>
                <ul class="space-y-2">
                  ${examplesHtml}
                </ul>
              </div>
            </div>
          </section>

          <!-- E. Luyện tập trắc nghiệm củng cố (3 câu) -->
          <section id="b${l.num}-trac-nghiem" class="scroll-mt-24 pt-2 border-t border-slate-100 dark:border-slate-700/60">
            <div class="flex items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần E</span>
                <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Luyện tập trắc nghiệm củng cố (3 câu)</h4>
              </div>
              <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500">Chấm điểm &amp; giải thích tức thì</span>
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

// 5. Render Summary Tables at page bottom
function renderSummaryTables() {
  const fRows = quickFormulaTable.map(r => `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/60">
      <td class="py-2.5 px-3 font-bold text-slate-900 dark:text-white whitespace-nowrap">${r.topic}</td>
      <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300 font-mono text-[11px]">${r.formula}</td>
      <td class="py-2.5 px-3 text-right font-semibold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">${r.lessonRef}</td>
    </tr>
  `).join('');

  const sCards = safetyGuidelines.map(g => `
    <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
      <div class="font-bold text-xs text-rose-800 dark:text-rose-300 mb-1 flex items-center gap-1.5">
        <span>⚠️</span>
        <span>${g.title}</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${g.detail}</p>
    </div>
  `).join('');

  return { fRows, sCards };
}

// Compile Full HTML
function buildHtml() {
  const sidebarHtml = renderSidebar();
  const overviewCardsHtml = renderChapterOverviewCards();
  const tocRowsHtml = renderFullTableOfContents();
  const lessonsHtml = renderLessons();
  const { fRows, sCards } = renderSummaryTables();

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hóa Học 12 – Kết Nối Tri Thức Với Cuộc Sống | Học Liệu Đầy Đủ 8 Chương, 30 Bài</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          }
        }
      }
    };
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.45); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(5, 150, 105, 0.7); }
    .sidebar-active {
      background: linear-gradient(90deg, rgba(16, 185, 129, 0.16), rgba(5, 150, 105, 0.08));
      border-color: rgba(16, 185, 129, 0.45) !important;
      color: #047857 !important;
    }
    .dark .sidebar-active {
      background: linear-gradient(90deg, rgba(16, 185, 129, 0.22), rgba(5, 150, 105, 0.1));
      border-color: rgba(16, 185, 129, 0.5) !important;
      color: #6ee7b7 !important;
    }
  </style>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">

  <!-- Sticky Top Navigation Bar -->
  <header class="sticky top-0 z-40 h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
    <div class="max-w-[1440px] mx-auto h-full px-4 flex items-center justify-between gap-3">
      <!-- Left: Back & Brand -->
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-slate-700 dark:text-slate-200 flex items-center justify-center transition shrink-0" title="Về trang chủ">
          ←
        </a>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white font-black flex items-center justify-center text-sm shadow-md shrink-0">
          HÓA
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <h1 class="text-sm md:text-base font-black text-slate-900 dark:text-white truncate">Hóa Học 12</h1>
            <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-[10px] font-black uppercase tracking-wider shrink-0">Kết nối tri thức</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Đủ 8 Chương • 30 Bài (gồm 8 bài Ôn tập chương) • Đủ 5 phần A–E mỗi bài</p>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 shrink-0">
        <button type="button" onclick="openModal('search-modal')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 border border-slate-200/80 dark:border-slate-700 transition">
          <span>🔍</span>
          <span class="hidden sm:inline">Tìm kiếm</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600">Ctrl K</kbd>
        </button>

        <button type="button" onclick="openModal('formula-modal')" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs font-bold text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 transition flex items-center gap-1.5">
          <span>📐</span>
          <span class="hidden md:inline">Sổ tay Công thức</span>
        </button>

        <button type="button" onclick="openModal('safety-modal')" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-xs font-bold text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/70 transition flex items-center gap-1.5">
          <span>⚠️</span>
          <span class="hidden md:inline">An toàn Thực hành</span>
        </button>

        <button type="button" onclick="openArenaModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-sm transition flex items-center gap-1.5">
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
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
        <!-- Sidebar Controls Header -->
        <div class="p-4 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-slate-50/70 dark:bg-slate-900/60 shrink-0">
          <div class="flex items-center justify-between gap-2">
            <h2 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <span>Mục lục 30 bài học</span>
              <span class="px-1.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300">8 Chương</span>
            </h2>
            <button type="button" id="bm-filter-btn" onclick="toggleBookmarkFilter()" class="px-2 py-1 rounded-lg text-[11px] font-bold border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition" title="Lọc các bài đã lưu">
              ⭐ Đã lưu (<span id="bm-count">0</span>)
            </button>
          </div>

          <!-- Quick Filter Input -->
          <div class="relative">
            <input type="text" id="sidebar-filter" oninput="filterSidebar(this.value)" placeholder="Lọc nhanh 30 bài học hoặc chương..." class="w-full text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2 pl-8 pr-3 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500">
            <span class="absolute left-2.5 top-2.5 text-xs text-slate-400">🔍</span>
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1">
            <div class="flex items-center justify-between text-[11px]">
              <span class="text-slate-500 dark:text-slate-400 font-semibold">Tiến độ hoàn thành:</span>
              <span id="progress-label" class="font-bold text-emerald-600 dark:text-emerald-400">0/30 bài (0%)</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>
        </div>

        <!-- Sidebar Lessons List -->
        <nav id="sidebar-nav" class="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-2">
          ${sidebarHtml}
        </nav>
      </aside>

      <!-- Main Content Column (8 cols on lg) -->
      <main class="lg:col-span-8 space-y-6 min-w-0">

        <!-- Hero Banner & Course Overview -->
        <section class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
          <div class="p-6 md:p-8 bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800 text-white relative">
            <div class="max-w-3xl space-y-3">
              <div class="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold">
                <span>🧪 BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</span>
                <span>•</span>
                <span>8 CHƯƠNG – 30 BÀI (GỒM 8 BÀI ÔN TẬP CHƯƠNG)</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                KIẾN THỨC ĐẦY ĐỦ THEO BÀI – HÓA HỌC 12
              </h2>
              <p class="text-xs md:text-sm text-emerald-100 leading-relaxed">
                Hệ thống hóa toàn diện đầy đủ 5 phần chuẩn mỗi bài học: <strong>(A)</strong> Công thức, phương trình &amp; định luật cốt lõi; <strong>(B)</strong> Nội dung chi tiết trọng tâm; <strong>(C)</strong> Sơ đồ tư duy &amp; mô hình phân tử trực quan; <strong>(D)</strong> Thí nghiệm thực hành &amp; bẫy lỗi sai đề thi; <strong>(E)</strong> Trắc nghiệm củng cố (3 câu/bài có giải thích).
              </p>
              <div class="flex flex-wrap gap-2 pt-1">
                <a href="#bai-1" class="px-4 py-2 rounded-xl bg-white text-emerald-800 font-black text-xs shadow hover:bg-emerald-50 transition">Bắt đầu từ Bài 1 →</a>
                <a href="#bang-cong-thuc-va-an-toan" class="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/25 transition">📐 Bảng công thức &amp; An toàn</a>
                <button type="button" onclick="openArenaModal()" class="px-4 py-2 rounded-xl bg-emerald-500/30 hover:bg-emerald-500/40 text-white font-bold text-xs border border-emerald-300/40 transition">⚔️ Đấu trường Trạng Nguyên (20 câu)</button>
              </div>
            </div>
          </div>

          <!-- 8 Chapters Grid Overview -->
          <div class="p-5 md:p-6 bg-slate-50/70 dark:bg-slate-900/60 space-y-5">
            <div>
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Khung chương trình 8 Chương – 30 Bài học</h3>
                <span class="text-[11px] text-slate-500 dark:text-slate-400">Nhấn vào chương hoặc bài để chuyển nhanh</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                ${overviewCardsHtml}
              </div>
            </div>

            <!-- Expandable Full Table of Contents Table -->
            <details class="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 overflow-hidden group">
              <summary class="py-3 px-4 text-xs font-black text-slate-800 dark:text-slate-200 cursor-pointer flex items-center justify-between select-none">
                <span class="flex items-center gap-2">
                  <span>📖</span>
                  <span>Mục lục chi tiết 30 bài học (Đối chiếu số trang SGK)</span>
                </span>
                <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div class="p-3 border-t border-slate-100 dark:border-slate-700/60 overflow-x-auto">
                <table class="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-bold">
                      <th class="py-2 px-3">Chương</th>
                      <th class="py-2 px-3 text-center">Bài</th>
                      <th class="py-2 px-3">Tên bài học</th>
                      <th class="py-2 px-3 text-right">Trang SGK</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    ${tocRowsHtml}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        </section>

        <!-- All 30 Lessons Rendered Here -->
        <div id="lessons-container" class="space-y-6">
          ${lessonsHtml}
        </div>

        <!-- Summary Tables & Safety Section -->
        <section id="bang-cong-thuc-va-an-toan" class="scroll-mt-24 space-y-6">
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2.5">
                <span class="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-base">📐</span>
                <div>
                  <h3 class="text-base md:text-lg font-black text-slate-900 dark:text-white">Bảng Công Thức &amp; Phương Trình Trọng Tâm</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">18 phản ứng và định luật cốt lõi ôn thi tốt nghiệp THPT</p>
                </div>
              </div>
            </div>

            <div class="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-700">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-emerald-50/70 dark:bg-emerald-950/30 border-b border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100">
                    <th class="py-2.5 px-3 font-extrabold w-48">Chủ đề phản ứng</th>
                    <th class="py-2.5 px-3 font-extrabold">Công thức / Phương trình hóa học</th>
                    <th class="py-2.5 px-3 text-right font-extrabold w-28">Bài học</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  ${fRows}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Safety Guidelines -->
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2.5">
                <span class="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 flex items-center justify-center font-bold text-base">⚠️</span>
                <div>
                  <h3 class="text-base md:text-lg font-black text-slate-900 dark:text-white">Quy Chuẩn An Toàn Phòng Thí Nghiệm</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">6 nguyên tắc sống còn khi thao tác hóa chất hữu cơ, acid, kiềm và điện phân</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${sCards}
            </div>
          </div>
        </section>

      </main>

    </div>
  </div>

  <!-- Search Modal (Ctrl K) -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden flex items-start justify-center p-4 pt-20">
    <div class="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <span>🔍</span>
        <input type="text" id="global-search-input" oninput="runGlobalSearch(this.value)" placeholder="Tìm kiếm ester, carbohydrate, pin điện, phức chất, bài học..." class="w-full bg-transparent text-sm focus:outline-hidden text-slate-900 dark:text-white">
        <button onclick="closeModal('search-modal')" class="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs">
          <kbd class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">ESC</kbd>
        </button>
      </div>
      <div id="search-results-box" class="p-2 overflow-y-auto space-y-1 divide-y divide-slate-100 dark:divide-slate-800/40 text-xs"></div>
    </div>
  </div>

  <!-- Formula Handbook Modal -->
  <div id="formula-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden flex items-center justify-center p-4">
    <div class="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-emerald-50/70 dark:bg-emerald-950/30">
        <div class="flex items-center gap-2">
          <span>📐</span>
          <h3 class="font-black text-sm text-slate-900 dark:text-white">Sổ Tay Công Thức &amp; Phương Trình Trọng Tâm</h3>
        </div>
        <button onclick="closeModal('formula-modal')" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">✕</button>
      </div>
      <div class="p-4 overflow-y-auto space-y-2 text-xs">
        <table class="w-full text-left border-collapse text-xs">
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            ${fRows}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Safety Guidelines Modal -->
  <div id="safety-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden flex items-center justify-center p-4">
    <div class="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-rose-50/70 dark:bg-rose-950/30">
        <div class="flex items-center gap-2">
          <span>⚠️</span>
          <h3 class="font-black text-sm text-slate-900 dark:text-white">Quy Chuẩn An Toàn Phòng Thí Nghiệm</h3>
        </div>
        <button onclick="closeModal('safety-modal')" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">✕</button>
      </div>
      <div class="p-4 overflow-y-auto space-y-3 text-xs">
        ${sCards}
      </div>
    </div>
  </div>

  <!-- Arena Quiz Modal (45:00 Exam) -->
  <div id="arena-modal" class="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-white">
      <div class="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
        <div class="flex items-center gap-3">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-white shadow-md">⚔️</span>
          <div>
            <h3 class="font-black text-sm sm:text-base text-white">Đấu Trường Hóa Học Trạng Nguyên 12</h3>
            <p class="text-[11px] text-slate-400">20 câu hỏi trắc nghiệm chuẩn ma trận đề thi tốt nghiệp THPT</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1 rounded-xl bg-white/10 border border-white/10 font-mono font-bold text-emerald-400 text-sm" id="arena-timer">45:00</div>
          <button onclick="closeArenaModal()" class="p-1.5 rounded-lg text-slate-400 hover:text-white">✕</button>
        </div>
      </div>

      <div id="arena-body" class="p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs">
        <div id="arena-start-screen" class="text-center py-8 space-y-4">
          <div class="text-4xl">🏆</div>
          <h4 class="text-lg font-black text-white">Chào Mừng Bạn Đến Với Đấu Trường Trạng Nguyên!</h4>
          <p class="text-slate-300 max-w-md mx-auto text-xs leading-relaxed">Đề thi gồm 20 câu hỏi bao quát trọn vẹn 8 chương Hóa học 12. Thời gian làm bài 45 phút. Hãy chuẩn bị giấy nháp và sẵn sàng thử sức!</p>
          <button onclick="startArenaQuiz()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg transition">Bắt Đầu Làm Bài Ngay</button>
        </div>
        <div id="arena-questions-container" class="hidden space-y-4"></div>
      </div>

      <div id="arena-footer" class="p-4 border-t border-slate-800 bg-slate-950 hidden flex items-center justify-between">
        <span class="text-[11px] text-slate-400">Chọn đáp án rồi nhấn Nộp bài</span>
        <button onclick="submitArenaQuiz()" class="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition">Nộp Bài &amp; Xem Kết Quả</button>
      </div>
    </div>
  </div>

  <!-- Client-side Scripts -->
  <script>
    // Lessons index for search
    const LESSONS_INDEX = ${JSON.stringify(lessonsList.map(l => ({
      num: l.num,
      chapter: l.chapter,
      title: l.title,
      subtitle: l.subtitle,
      pages: l.pages
    })))};

    const ARENA_BANK = ${JSON.stringify(examQuestions)};

    // 1. Theme Toggle
    function initTheme() {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
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
    initTheme();

    // 2. Study Progress & Bookmarking (localStorage)
    let doneState = JSON.parse(localStorage.getItem('hoa12_done') || '{}');
    let bmState = JSON.parse(localStorage.getItem('hoa12_bm') || '{}');

    function syncProgressUI() {
      const doneKeys = Object.keys(doneState).filter(k => doneState[k]);
      const total = 30;
      const count = doneKeys.length;
      const pct = Math.round((count / total) * 100);

      const pLabel = document.getElementById('progress-label');
      const pBar = document.getElementById('progress-bar');
      if (pLabel) pLabel.textContent = \`\${count}/\${total} bài (\${pct}%)\`;
      if (pBar) pBar.style.width = pct + '%';

      // Update checks & buttons
      for (let i = 1; i <= total; i++) {
        const chk = document.getElementById(\`sidebar-check-\${i}\`);
        const doneIcon = document.getElementById(\`done-icon-\${i}\`);
        const bmIcon = document.getElementById(\`bm-icon-\${i}\`);

        if (chk) chk.classList.toggle('hidden', !doneState[i]);
        if (doneIcon) doneIcon.textContent = doneState[i] ? '●' : '○';
        if (bmIcon) bmIcon.textContent = bmState[i] ? '★' : '☆';
      }

      const bmCount = Object.keys(bmState).filter(k => bmState[k]).length;
      const bmCountEl = document.getElementById('bm-count');
      if (bmCountEl) bmCountEl.textContent = bmCount;
    }

    function toggleDone(id) {
      doneState[id] = !doneState[id];
      localStorage.setItem('hoa12_done', JSON.stringify(doneState));
      syncProgressUI();
    }

    function toggleBookmark(id) {
      bmState[id] = !bmState[id];
      localStorage.setItem('hoa12_bm', JSON.stringify(bmState));
      syncProgressUI();
    }

    let bmFilterActive = false;
    function toggleBookmarkFilter() {
      bmFilterActive = !bmFilterActive;
      const btn = document.getElementById('bm-filter-btn');
      if (btn) btn.classList.toggle('bg-amber-100', bmFilterActive);

      document.querySelectorAll('.sidebar-lesson-link').forEach(link => {
        const id = link.getAttribute('data-lesson-id');
        if (bmFilterActive) {
          link.style.display = bmState[id] ? 'flex' : 'none';
        } else {
          link.style.display = 'flex';
        }
      });
    }

    // 3. Sidebar Search Filter
    function filterSidebar(query) {
      const q = query.trim().toLowerCase();
      document.querySelectorAll('.sidebar-lesson-link').forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = (!q || text.includes(q)) ? 'flex' : 'none';
      });
      document.querySelectorAll('.sidebar-chapter-group').forEach(grp => {
        const visible = grp.querySelectorAll('.sidebar-lesson-link[style="display: flex;"]');
        grp.style.display = (q && visible.length === 0) ? 'none' : 'block';
      });
    }

    // 4. Mini Quiz Checker
    function checkLessonQuiz(lessonId, qIdx, selectedOpt, correctOpt) {
      const container = document.querySelector(\`[data-lesson="\${lessonId}"][data-qindex="\${qIdx}"]\`);
      if (!container) return;
      const buttons = container.querySelectorAll('.quiz-opt-btn');
      const expBox = document.getElementById(\`qexp-\${lessonId}-\${qIdx}\`);

      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctOpt) {
          btn.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 flex items-start gap-2';
        } else if (idx === selectedOpt && selectedOpt !== correctOpt) {
          btn.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border text-xs font-semibold bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-200 flex items-start gap-2';
        } else {
          btn.className = 'quiz-opt-btn text-left px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-400 opacity-60 flex items-start gap-2';
        }
      });

      if (expBox) {
        expBox.classList.remove('hidden');
        if (selectedOpt === correctOpt) {
          expBox.className = 'mt-2.5 p-3 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expBox.innerHTML = '<strong>Chính xác!</strong> Bạn đã chọn đáp án đúng.';
        } else {
          expBox.className = 'mt-2.5 p-3 rounded-xl text-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expBox.innerHTML = \`<strong>Chưa chính xác!</strong> Đáp án đúng là <strong>\${String.fromCharCode(65 + correctOpt)}</strong>.\`;
        }
      }
    }

    // 5. Modals Management
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.remove('hidden');
      if (id === 'search-modal') {
        const inp = document.getElementById('global-search-input');
        if (inp) { inp.value = ''; inp.focus(); runGlobalSearch(''); }
      }
    }
    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('search-modal');
      }
      if (e.key === 'Escape') {
        closeModal('search-modal');
        closeModal('formula-modal');
        closeModal('safety-modal');
        closeModal('arena-modal');
      }
    });

    // 6. Global Search
    function runGlobalSearch(query) {
      const q = query.trim().toLowerCase();
      const box = document.getElementById('search-results-box');
      if (!box) return;

      if (!q) {
        box.innerHTML = '<div class=\"text-center text-slate-400 py-6\">Nhập từ khóa để tra cứu toàn diện 30 bài học Hóa học 12...</div>';
        return;
      }

      const matches = LESSONS_INDEX.filter(l => 
        l.title.toLowerCase().includes(q) || 
        l.subtitle.toLowerCase().includes(q) ||
        (\`bài \${l.num}\`).includes(q)
      );

      if (matches.length === 0) {
        box.innerHTML = \`<div class="text-center text-slate-400 py-6">Không tìm thấy bài học nào phù hợp với "\${query}"</div>\`;
        return;
      }

      box.innerHTML = matches.map(m => \`
        <a href="#bai-\${m.num}" onclick="closeModal('search-modal')" class="block p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-slate-800 transition">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-[10px]">Bài \${m.num}</span>
            <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">\${m.title}</span>
            <span class="text-[10px] text-slate-400 ml-auto">\${m.pages}</span>
          </div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400 truncate">\${m.subtitle}</div>
        </a>
      \`).join('');
    }

    // 7. Arena Exam Quiz Logic (45:00)
    let arenaTimer = null;
    let arenaSeconds = 45 * 60;
    const arenaAnswers = {};

    function openArenaModal() {
      document.getElementById('arena-modal').classList.remove('hidden');
    }
    function closeArenaModal() {
      document.getElementById('arena-modal').classList.add('hidden');
    }

    function startArenaQuiz() {
      document.getElementById('arena-start-screen').classList.add('hidden');
      document.getElementById('arena-questions-container').classList.remove('hidden');
      document.getElementById('arena-footer').classList.remove('hidden');

      const container = document.getElementById('arena-questions-container');
      container.innerHTML = ARENA_BANK.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <div class="flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-full bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">\${idx + 1}</span>
            <div class="font-bold text-xs sm:text-sm text-slate-100 leading-relaxed">\${q.q}</div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            \${q.options.map((opt, oi) => \`
              <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer text-xs transition">
                <input type="radio" name="arena_q_\${q.id}" value="\${oi}" onchange="selectArenaOption(\${q.id}, \${oi})" class="text-emerald-500 focus:ring-0">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="arena-explain-\${q.id}" class="hidden pt-2 text-xs text-emerald-300 border-t border-white/10">
            <strong>Đáp án:</strong> \${q.options[q.answer]}<br>
            <strong>Giải thích:</strong> \${q.explain}
          </div>
        </div>
      \`).join('');

      arenaSeconds = 45 * 60;
      clearInterval(arenaTimer);
      arenaTimer = setInterval(() => {
        arenaSeconds--;
        const m = Math.floor(arenaSeconds / 60);
        const s = arenaSeconds % 60;
        document.getElementById('arena-timer').textContent = \`\${String(m).padStart(2, '0')}:\${String(s).padStart(2, '0')}\`;
        if (arenaSeconds <= 0) {
          clearInterval(arenaTimer);
          alert('Đã hết thời gian 45 phút!');
          submitArenaQuiz();
        }
      }, 1000);
    }

    function selectArenaOption(qId, optIdx) {
      arenaAnswers[qId] = optIdx;
    }

    function submitArenaQuiz() {
      clearInterval(arenaTimer);
      let score = 0;
      ARENA_BANK.forEach(q => {
        const exp = document.getElementById(\`arena-explain-\${q.id}\`);
        if (exp) exp.classList.remove('hidden');
        if (arenaAnswers[q.id] === q.answer) score++;
      });
      alert(\`Kết quả bài thi: \${score} / \${ARENA_BANK.length} câu đúng (\${(score / ARENA_BANK.length * 10).toFixed(1)} điểm)!\`);
    }

    // 8. Scroll Spy for active lesson link
    function initScrollSpy() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-lesson-card');
            document.querySelectorAll('.sidebar-lesson-link').forEach(link => {
              link.classList.toggle('sidebar-active', link.getAttribute('data-lesson-id') === id);
            });
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px' });

      document.querySelectorAll('.lesson-article').forEach(art => observer.observe(art));
    }

    // Init UI on load
    window.addEventListener('DOMContentLoaded', () => {
      syncProgressUI();
      initScrollSpy();
    });
  </script>
</body>
</html>`;
}

// Generate full HTML
const fullHtml = buildHtml();

// Targets to write (dual-file & platform aliases)
const targetPaths = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoa_12.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoa12.html'
];

targetPaths.forEach(p => {
  fs.writeFileSync(p, fullHtml, 'utf8');
  console.log('Saved:', p, 'Size:', fullHtml.length, 'bytes');
});

console.log('Build complete! Chemistry Grade 12 is now 100% feature-identical to Chemistry Grade 10!');
