const fs = require('fs');
const path = require('path');

const { generalConventions, chapters, experientialModules, lessons, formulaSummaryTable, commonPitfalls } = require('./toan11_data.js');
const { diagrams } = require('./toan11_diagrams.js');
const { quizzes } = require('./toan11_quizzes.js');

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/50',
    border: 'border-indigo-200 dark:border-indigo-800/80',
    text: 'text-indigo-700 dark:text-indigo-300',
    badge: 'bg-indigo-600 text-white',
    badgeSoft: 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800',
    gradient: 'from-indigo-600 via-blue-600 to-indigo-700',
    hover: 'hover:bg-indigo-50/80 dark:hover:bg-indigo-950/60 hover:text-indigo-700 dark:hover:text-indigo-300',
    dot: 'bg-indigo-500'
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    border: 'border-blue-200 dark:border-blue-800/80',
    text: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-600 text-white',
    badgeSoft: 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
    gradient: 'from-blue-600 via-sky-600 to-blue-700',
    hover: 'hover:bg-blue-50/80 dark:hover:bg-blue-950/60 hover:text-blue-700 dark:hover:text-blue-300',
    dot: 'bg-blue-500'
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-950/50',
    border: 'border-teal-200 dark:border-teal-800/80',
    text: 'text-teal-700 dark:text-teal-300',
    badge: 'bg-teal-600 text-white',
    badgeSoft: 'bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 border-teal-200 dark:border-teal-800',
    gradient: 'from-teal-600 via-emerald-600 to-teal-700',
    hover: 'hover:bg-teal-50/80 dark:hover:bg-teal-950/60 hover:text-teal-700 dark:hover:text-teal-300',
    dot: 'bg-teal-500'
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/50',
    border: 'border-amber-200 dark:border-amber-800/80',
    text: 'text-amber-700 dark:text-amber-300',
    badge: 'bg-amber-600 text-white',
    badgeSoft: 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800',
    gradient: 'from-amber-600 via-orange-600 to-amber-700',
    hover: 'hover:bg-amber-50/80 dark:hover:bg-amber-950/60 hover:text-amber-700 dark:hover:text-amber-300',
    dot: 'bg-amber-500'
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/50',
    border: 'border-rose-200 dark:border-rose-800/80',
    text: 'text-rose-700 dark:text-rose-300',
    badge: 'bg-rose-600 text-white',
    badgeSoft: 'bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800',
    gradient: 'from-rose-600 via-pink-600 to-rose-700',
    hover: 'hover:bg-rose-50/80 dark:hover:bg-rose-950/60 hover:text-rose-700 dark:hover:text-rose-300',
    dot: 'bg-rose-500'
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
    border: 'border-emerald-200 dark:border-emerald-800/80',
    text: 'text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-600 text-white',
    badgeSoft: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
    gradient: 'from-emerald-600 via-green-600 to-teal-700',
    hover: 'hover:bg-emerald-50/80 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300',
    dot: 'bg-emerald-500'
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-950/50',
    border: 'border-cyan-200 dark:border-cyan-800/80',
    text: 'text-cyan-700 dark:text-cyan-300',
    badge: 'bg-cyan-600 text-white',
    badgeSoft: 'bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-200 border-cyan-200 dark:border-cyan-800',
    gradient: 'from-cyan-600 via-sky-600 to-blue-700',
    hover: 'hover:bg-cyan-50/80 dark:hover:bg-cyan-950/60 hover:text-cyan-700 dark:hover:text-cyan-300',
    dot: 'bg-cyan-500'
  }
};

// Format multi-part text so numbered steps (1), (2), (3) or <br>• items display on separate lines
function formatLineByLine(rawText) {
  if (!rawText) return '';

  if (rawText.includes('<br>')) {
    const lines = rawText.split(/<br\s*\/?>/i).map(s => s.trim()).filter(Boolean);
    const header = lines[0];
    const subLines = lines.slice(1);
    const subHtml = subLines.map(sub => {
      const cleaned = sub.replace(/^[•\-]\s*/, '');
      return `<div class="flex items-start gap-2.5 pl-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-[13.5px] text-slate-700 dark:text-slate-200 leading-relaxed">
        <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
        <span class="flex-1">${cleaned}</span>
      </div>`;
    }).join('\n');
    return `<div class="space-y-2">
      <div class="text-slate-800 dark:text-slate-100 leading-relaxed">${header}</div>
      <div class="space-y-1.5 mt-1">${subHtml}</div>
    </div>`;
  }

  if (rawText.includes('(1)') && rawText.includes('(2)')) {
    const idx = rawText.indexOf('(1)');
    const prefix = rawText.slice(0, idx).trim();
    const rest = rawText.slice(idx).trim();
    const parts = rest.split(/(?=\(\d+\))/g).map(s => s.trim().replace(/[;.]$/, '')).filter(Boolean);
    if (parts.length >= 2) {
      const stepsHtml = parts.map(part => {
        const m = part.match(/^\((\d+)\)\s*(.*)$/);
        if (m) {
          return `<div class="flex items-start gap-2.5 pl-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[13.5px] text-slate-700 leading-relaxed">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs shrink-0 mt-0.5">${m[1]}</span>
            <span class="flex-1">${m[2]}</span>
          </div>`;
        }
        return `<div class="pl-3 py-1 text-[13.5px] text-slate-700">${part}</div>`;
      }).join('\n');
      return `<div class="space-y-2">
        ${prefix ? `<div class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">${prefix}</div>` : ''}
        <div class="space-y-1.5 mt-1">${stepsHtml}</div>
      </div>`;
    }
  }

  return `<div class="text-slate-700 dark:text-slate-300 leading-relaxed">${rawText}</div>`;
}

// Build Left Sidebar Navigation
function buildSidebarHtml() {
  return [1, 2].map(vol => {
    const volChapters = chapters.filter(c => c.vol === vol);
    const expMod = experientialModules.find(e => e.vol === vol);
    const chHtml = volChapters.map(ch => {
      const chLessons = lessons.filter(l => l.chapter === ch.num);
      const c = colorMap[ch.color] || colorMap.indigo;
      const lessonsLinks = chLessons.map(l => `
        <div class="lesson-nav-group rounded-xl border border-transparent transition-all" id="nav-group-${l.num}">
          <div class="flex items-center justify-between">
            <a href="#bai-${l.num}" data-lesson="${l.num}" class="sidebar-link flex-1 flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-slate-700 dark:text-slate-300 ${c.hover} transition-all font-medium text-[13px]">
              <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[11px] flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-700 lesson-num-badge">B${l.num}</span>
              <span class="truncate flex-1" title="Bài ${l.num}. ${l.title}">Bài ${l.num}. ${l.title}</span>
            </a>
            <button type="button" onclick="toggleSubmenu(${l.num})" class="p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg" title="Mở mục con Bài ${l.num}">
              <i id="sub-icon-${l.num}" class="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
            </button>
          </div>
          <div id="submenu-${l.num}" class="hidden pl-8 pr-2 pb-2 pt-0.5 space-y-1 text-[12px] border-l-2 border-slate-200 dark:border-slate-700 ml-5 my-0.5">
            <a href="#b${l.num}-khai-niem" class="block py-1 px-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/60 transition">A. Khái niệm & Tính chất</a>
            <a href="#b${l.num}-cong-thuc" class="block py-1 px-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/60 transition">B. Công thức & Điều kiện</a>
            <a href="#b${l.num}-cach-lam" class="block py-1 px-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/60 transition">C. Cách làm & Lỗi thường gặp</a>
            <a href="#b${l.num}-hinh-minh-hoa" class="block py-1 px-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/60 transition">D. Hình minh họa trực quan</a>
            <a href="#b${l.num}-van-dung" class="block py-1 px-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/60 transition">E. Vận dụng & Trắc nghiệm</a>
          </div>
        </div>
      `).join('\n');

      return `
        <div class="chapter-nav-block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
          <button type="button" onclick="toggleChapterMenu(${ch.num})" class="w-full flex items-center justify-between px-3.5 py-2.5 ${c.bg} border-b ${c.border} text-left transition">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="w-7 h-7 rounded-lg ${c.badge} flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">${ch.roman}</span>
              <div class="truncate">
                <div class="font-bold text-slate-800 dark:text-slate-200 text-[13px] truncate">Chương ${ch.roman}. ${ch.title}</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">Tập ${ch.vol} • ${chLessons.length} bài + Ôn tập</div>
              </div>
            </div>
            <i id="ch-icon-${ch.num}" class="fas fa-chevron-down text-xs ${c.text} transition-transform duration-200"></i>
          </button>
          <div id="ch-menu-${ch.num}" class="p-1.5 space-y-0.5">
            ${lessonsLinks}
            <a href="#on-tap-chuong-${ch.num}" class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-[12px] font-bold ${c.text} hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <i class="fas fa-layer-group text-[11px]"></i>
              <span>Ôn tập chương ${ch.roman}</span>
            </a>
          </div>
        </div>`;
    }).join('\n');

    return `
      <div class="space-y-2.5">
        <div class="px-2 pt-1 flex items-center justify-between">
          <span class="text-[11px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400">TẬP ${vol === 1 ? 'MỘT (Chương I – V)' : 'HAI (Chương VI – IX)'}</span>
          <span class="text-[11px] font-semibold text-slate-400 dark:text-slate-500">${vol === 1 ? 'SGK 134 trang' : 'SGK 114 trang'}</span>
        </div>
        ${chHtml}
        ${expMod ? `
          <a href="#${expMod.id}" class="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold text-xs transition">
            <i class="fas fa-compass-drafting text-emerald-600"></i>
            <span class="truncate">Thực hành trải nghiệm Tập ${vol}</span>
          </a>
        ` : ''}
      </div>`;
  }).join('\n');
}

// Build Lesson Card HTML
function buildLessonCardHtml(l, ch, c) {
  const svgDiagram = diagrams[l.num] || '';
  const lessonQuizzes = quizzes[l.num] || [];

  // A. Khái niệm & Tính chất
  const conceptsHtml = l.concepts.map((item, idx) => `
    <li class="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-700 transition text-slate-700 dark:text-slate-200">
      <span class="w-6 h-6 rounded-lg ${c.bg} ${c.text} font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 border ${c.border}">${idx + 1}</span>
      <div class="flex-1 text-[14.5px]">${formatLineByLine(item)}</div>
    </li>
  `).join('\n');

  // B. Công thức & Điều kiện áp dụng
  const formulasHtml = l.formulas.map((f, idx) => `
    <tr class="${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/70 dark:bg-slate-850/60'} hover:bg-indigo-50/40 dark:hover:bg-indigo-950/40 transition">
      <td class="px-4 py-3.5 font-bold text-slate-800 dark:text-slate-200 text-sm border-b border-slate-200/80 dark:border-slate-800 w-1/4 align-top">${f.name}</td>
      <td class="px-4 py-3.5 text-slate-900 dark:text-slate-100 text-[14.5px] border-b border-slate-200/80 dark:border-slate-800 font-medium align-top leading-relaxed">${f.eq}</td>
      <td class="px-4 py-3.5 text-slate-600 dark:text-slate-400 text-xs border-b border-slate-200/80 dark:border-slate-800 w-1/4 align-top leading-relaxed bg-amber-50/30 dark:bg-amber-950/20">${f.note || ''}</td>
    </tr>
  `).join('\n');

  // C. Cách làm, Phương pháp giải & Lỗi dễ mắc
  const methodsHtml = l.methods.map(m => {
    const isWarning = m.toLowerCase().includes('lỗi dễ mắc');
    if (isWarning) {
      return `
        <div class="flex items-start gap-3 p-3.5 rounded-2xl bg-rose-50/90 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-950 dark:text-rose-200">
          <span class="w-7 h-7 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <i class="fas fa-triangle-exclamation text-xs"></i>
          </span>
          <div class="flex-1 text-[14px] leading-relaxed font-medium">${formatLineByLine(m)}</div>
        </div>`;
    }
    return `
      <div class="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs text-slate-700 dark:text-slate-200">
        <span class="w-7 h-7 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
          <i class="fas fa-wand-magic-sparkles"></i>
        </span>
        <div class="flex-1 text-[14px] leading-relaxed">${formatLineByLine(m)}</div>
      </div>`;
  }).join('\n');

  // E. Vận dụng thực tế + 3 câu trắc nghiệm phân bậc
  const appsHtml = l.applications.map(app => `
    <div class="flex items-start gap-3 p-3 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200/80 dark:border-emerald-800/60 text-slate-700 dark:text-slate-200">
      <span class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
        <i class="fas fa-lightbulb text-xs"></i>
      </span>
      <p class="text-[13.5px] text-slate-700 leading-relaxed flex-1">${app}</p>
    </div>
  `).join('\n');

  const levelBadges = [
    '<span class="px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300 text-[11px] font-bold">Mức 1: Nhận biết</span>',
    '<span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 text-[11px] font-bold">Mức 2: Thông hiểu – Áp dụng</span>',
    '<span class="px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 text-[11px] font-bold">Mức 3: Vận dụng & Thực tế</span>'
  ];

  const quizCardsHtml = lessonQuizzes.map((qObj, qIdx) => {
    const optsHtml = qObj.options.map((opt, oIdx) => {
      const letter = ['A', 'B', 'C', 'D'][oIdx];
      return `
        <button type="button"
          onclick="checkLessonQuiz(${l.num}, ${qIdx}, ${oIdx}, ${qObj.ans})"
          id="qbtn-${l.num}-${qIdx}-${oIdx}"
          class="quiz-opt-btn-${l.num}-${qIdx} w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-indigo-300 dark:hover:border-indigo-500 transition text-sm text-slate-700 dark:text-slate-200 cursor-pointer">
          <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${letter}</span>
          <span class="flex-1 leading-relaxed">${opt}</span>
        </button>`;
    }).join('\n');

    return `
      <div class="bg-white dark:bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3.5" id="quiz-card-${l.num}-${qIdx}">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs font-extrabold">Câu ${qIdx + 1} (Bài ${l.num})</span>
          ${levelBadges[qIdx] || ''}
        </div>
        <div class="font-bold text-slate-900 dark:text-slate-100 text-[14.5px] leading-relaxed">${qObj.q}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${optsHtml}
        </div>
        <div id="qexp-${l.num}-${qIdx}" class="hidden p-3.5 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
          <div class="font-bold text-indigo-900 dark:text-indigo-300 mb-1 flex items-center gap-1.5">
            <i class="fas fa-circle-check text-indigo-600"></i> Hướng dẫn giải chi tiết:
          </div>
          <div>${qObj.exp}</div>
        </div>
      </div>`;
  }).join('\n');

  return `
    <!-- BÀI ${l.num} -->
    <article id="bai-${l.num}" data-lesson-card="${l.num}" class="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs overflow-hidden transition hover:shadow-md">
      <!-- Lesson Header -->
      <div class="bg-gradient-to-r ${c.gradient} p-5 sm:p-6 text-white">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white font-black text-xs tracking-wide uppercase">
              Tập ${l.vol} • Chương ${ch.roman} • Bài ${l.num}/33
            </span>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" onclick="toggleDoneLesson(${l.num})" id="done-btn-${l.num}"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 hover:bg-white/25 text-white border border-white/30 transition cursor-pointer">
              <i class="far fa-circle-check"></i> <span>Đánh dấu đã học</span>
            </button>
          </div>
        </div>
        <h3 class="text-xl sm:text-2xl font-black tracking-tight leading-snug">
          Bài ${l.num}. ${l.title}
        </h3>
        <p class="text-white/90 text-sm mt-1.5 leading-relaxed max-w-3xl">
          ${l.subtitle}
        </p>
        <!-- 5 Quick Jump Tabs -->
        <div class="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/15 text-xs">
          <a href="#b${l.num}-khai-niem" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold transition">A. Khái niệm & Tính chất</a>
          <a href="#b${l.num}-cong-thuc" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold transition">B. Công thức & ĐK (${l.formulas.length})</a>
          <a href="#b${l.num}-cach-lam" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold transition">C. Cách làm & Lưu ý</a>
          <a href="#b${l.num}-hinh-minh-hoa" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold transition">D. Hình minh họa</a>
          <a href="#b${l.num}-van-dung" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold transition">E. Vận dụng & Bài tập (3 câu)</a>
        </div>
      </div>

      <!-- Lesson Body -->
      <div class="p-5 sm:p-7 space-y-8">
        <!-- PHẦN A: KHÁI NIỆM, TÍNH CHẤT & ĐỊNH LÍ -->
        <section id="b${l.num}-khai-niem" class="scroll-mt-24 space-y-3.5">
          <div class="flex items-center gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <span class="w-8 h-8 rounded-xl ${c.bg} ${c.text} flex items-center justify-center font-black text-sm border ${c.border}">A</span>
            <h4 class="text-lg font-extrabold text-slate-900 dark:text-slate-100">Khái niệm, Tính chất & Định lí Cốt lõi</h4>
          </div>
          <ul class="space-y-2.5 bg-slate-50/70 dark:bg-slate-850/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            ${conceptsHtml}
          </ul>
        </section>

        <!-- PHẦN B: CÔNG THỨC & ĐIỀU KIỆN ÁP DỤNG -->
        <section id="b${l.num}-cong-thuc" class="scroll-mt-24 space-y-3.5">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-sm border border-indigo-200">B</span>
              <h4 class="text-lg font-extrabold text-slate-900 dark:text-slate-100">Công thức, Định lí & Điều kiện Áp dụng</h4>
            </div>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${l.formulas.length} nhóm công thức</span>
          </div>
          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-800 dark:bg-slate-950 text-white text-xs uppercase tracking-wider">
                  <th class="px-4 py-3 font-bold">Nội dung / Tên công thức</th>
                  <th class="px-4 py-3 font-bold">Biểu thức Toán học</th>
                  <th class="px-4 py-3 font-bold">Điều kiện, Miền & Chú ý</th>
                </tr>
              </thead>
              <tbody>
                ${formulasHtml}
              </tbody>
            </table>
          </div>
        </section>

        <!-- PHẦN C: CÁCH LÀM, HƯỚNG GIẢI & LỖI THƯỜNG GẶP -->
        <section id="b${l.num}-cach-lam" class="scroll-mt-24 space-y-3.5">
          <div class="flex items-center gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <span class="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-black text-sm border border-amber-200">C</span>
            <h4 class="text-lg font-extrabold text-slate-900 dark:text-slate-100">Cách làm, Hướng giải Cốt lõi & Lỗi dễ mắc</h4>
          </div>
          <div class="space-y-2.5 bg-amber-50/40 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200/70 dark:border-amber-900/50">
            ${methodsHtml}
          </div>
        </section>

        <!-- PHẦN D: HÌNH MINH HỌA TRỰC QUAN -->
        <section id="b${l.num}-hinh-minh-hoa" class="scroll-mt-24 space-y-3.5">
          <div class="flex items-center gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <span class="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-black text-sm border border-cyan-200">D</span>
            <h4 class="text-lg font-extrabold text-slate-900 dark:text-slate-100">Hình minh họa, Đồ thị & Sơ đồ Trực quan</h4>
          </div>
          <div class="bg-slate-50 dark:bg-slate-850 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 flex flex-col items-center">
            <div class="w-full max-w-2xl overflow-x-auto flex justify-center">
              ${svgDiagram}
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 font-medium mt-3 text-center italic">
              <i class="fas fa-bezier-curve text-indigo-500 mr-1"></i> Hình minh họa Bài ${l.num}: ${l.diagramCaption}
            </p>
          </div>
        </section>

        <!-- PHẦN E: VẬN DỤNG & TRẮC NGHIỆM PHÂN BẬC -->
        <section id="b${l.num}-van-dung" class="scroll-mt-24 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-sm border border-emerald-200">E</span>
              <h4 class="text-lg font-extrabold text-slate-900 dark:text-slate-100">Vận dụng Thực tiễn & Bài tập Trắc nghiệm Phân bậc</h4>
            </div>
            <button type="button" onclick="resetLessonQuiz(${l.num})" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer">
              <i class="fas fa-rotate-left"></i> Làm lại
            </button>
          </div>

          <div class="bg-gradient-to-br from-emerald-50/80 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl p-4 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2">
            <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1">
              <i class="fas fa-globe mr-1"></i> Mô hình hóa & Vận dụng thực tế:
            </div>
            ${appsHtml}
          </div>

          <div class="space-y-3.5 bg-slate-50/80 dark:bg-slate-850/80 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800">
            ${quizCardsHtml}
          </div>
        </section>
      </div>
    </article>`;
}

// Build Main Content (2 Volumes, 9 Chapters, 33 Lessons, 9 Chapter Reviews, 2 Experiential Modules)
function buildMainContentHtml() {
  return [1, 2].map(vol => {
    const volChapters = chapters.filter(c => c.vol === vol);
    const expMod = experientialModules.find(e => e.vol === vol);

    const chaptersHtml = volChapters.map(ch => {
      const chLessons = lessons.filter(l => l.chapter === ch.num);
      const c = colorMap[ch.color] || colorMap.indigo;
      const lessonsCards = chLessons.map(l => buildLessonCardHtml(l, ch, c)).join('\n\n');

      // Chapter Review Card
      const rev = ch.review;
      const connHtml = rev.connections.map(item => `
        <li class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <i class="fas fa-link text-indigo-500 mt-1 shrink-0 text-xs"></i>
          <span>${item}</span>
        </li>
      `).join('\n');
      const typesHtml = rev.keyTypes.map(item => `
        <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200 leading-relaxed shadow-2xs">
          ${item}
        </div>
      `).join('\n');

      return `
        <!-- CHƯƠNG ${ch.roman} -->
        <section id="chuong-${ch.num}" class="scroll-mt-20 space-y-6">
          <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} text-white flex items-center justify-center text-xl font-black shadow-md shrink-0">
                ${ch.roman}
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${c.badgeSoft} border">TẬP ${ch.vol} • CHƯƠNG ${ch.roman}</span>
                  <span class="text-xs font-semibold text-slate-500">${chLessons.length} bài học (Bài ${ch.lessons[0]} – Bài ${ch.lessons[ch.lessons.length - 1]})</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">Chương ${ch.roman}. ${ch.title}</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">${ch.summary}</p>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            ${lessonsCards}
          </div>

          <!-- ÔN TẬP CHƯƠNG ${ch.roman} -->
          <div id="on-tap-chuong-${ch.num}" class="scroll-mt-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-md space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <i class="fas fa-layer-group"></i>
              </span>
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-300">Tổng kết & Hệ thống hóa</span>
                <h3 class="text-xl font-black">${rev.title}</h3>
              </div>
            </div>
            <div class="bg-white/10 rounded-2xl p-4 border border-white/15 space-y-2">
              <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-200">Mạch liên kết kiến thức trong chương:</div>
              <ul class="space-y-1.5 text-indigo-50 text-sm">
                ${rev.connections.map(item => `<li class="flex items-start gap-2"><span class="text-amber-400 font-bold">•</span><span>${item}</span></li>`).join('\n')}
              </ul>
            </div>
            <div class="space-y-2">
              <div class="text-xs font-extrabold uppercase tracking-wider text-amber-300">Các dạng toán trọng tâm cần nắm vững:</div>
              <div class="grid grid-cols-1 gap-2.5">
                ${typesHtml}
              </div>
            </div>
          </div>
        </section>`;
    }).join('\n\n');

    const expHtml = expMod ? `
      <!-- HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM TẬP ${vol} -->
      <section id="${expMod.id}" class="scroll-mt-24 bg-gradient-to-br from-emerald-50 via-teal-50/70 to-cyan-50/50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-cyan-950/20 rounded-3xl p-6 sm:p-7 border-2 border-emerald-200 dark:border-emerald-800 shadow-xs space-y-5">
        <div class="flex items-center gap-3.5">
          <span class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
            <i class="fas fa-compass-drafting"></i>
          </span>
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-200 text-emerald-900">HOẠT ĐỘNG THỰC HÀNH & TRẢI NGHIỆM</span>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">${expMod.title}</h3>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${expMod.items.map(sub => `
            <div class="bg-white dark:bg-slate-850 rounded-2xl p-5 border border-emerald-200/90 dark:border-emerald-800/60 shadow-2xs space-y-3">
              <h4 class="font-extrabold text-emerald-950 dark:text-emerald-300 text-base flex items-center gap-2">
                <i class="fas fa-circle-nodes text-emerald-600"></i>
                <span>${sub.subtitle}</span>
              </h4>
              <ul class="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                ${sub.bullets.map(b => `<li class="flex items-start gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span><span>${b}</span></li>`).join('\n')}
              </ul>
            </div>
          `).join('\n')}
        </div>
      </section>` : '';

    return `
      <!-- TẬP ${vol} HEADER -->
      <div id="tap-${vol}" class="scroll-mt-20 space-y-10">
        <div class="bg-gradient-to-r ${vol === 1 ? 'from-indigo-900 via-blue-900 to-slate-900' : 'from-emerald-900 via-teal-900 to-slate-900'} rounded-3xl p-5 sm:p-6 text-white flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div class="flex items-center gap-3.5">
            <span class="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center font-black text-xl">T${vol}</span>
            <div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-amber-300">Sách giáo khoa Toán 11 – Kết nối tri thức với cuộc sống</div>
              <h2 class="text-xl sm:text-2xl font-black">${vol === 1 ? 'TẬP MỘT: Chương I – Chương V (Bài 1 – Bài 17)' : 'TẬP HAI: Chương VI – Chương IX (Bài 18 – Bài 33)'}</h2>
            </div>
          </div>
          <span class="px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-bold border border-white/20">
            ${vol === 1 ? '5 Chương • 17 Bài • Bản nguồn 134 trang' : '4 Chương • 16 Bài • Bản nguồn 114 trang'}
          </span>
        </div>

        ${chaptersHtml}
        ${expHtml}
      </div>`;
  }).join('\n\n');
}

// Build Bottom Quick Formula Table & Common Pitfalls
function buildBottomSummaryHtml() {
  const formulaRows = formulaSummaryTable.map((row, idx) => `
    <tr class="${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'} hover:bg-indigo-50/50 transition">
      <td class="px-4 py-3 font-bold text-indigo-900 text-sm border-b border-slate-200 w-1/3">${row.topic}</td>
      <td class="px-4 py-3 text-slate-800 text-[14.5px] border-b border-slate-200">${row.formula}</td>
    </tr>
  `).join('\n');

  const pitfallCards = commonPitfalls.map(rule => `
    <div class="bg-white dark:bg-slate-850 rounded-2xl p-5 border border-rose-200 dark:border-rose-900/60 shadow-2xs flex items-start gap-4">
      <div class="w-11 h-11 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center text-lg shrink-0">
        <i class="fas ${rule.icon}"></i>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 dark:text-slate-100 text-base">${rule.title}</h4>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">${rule.desc}</p>
      </div>
    </div>
  `).join('\n');

  return `
    <!-- BẢNG CÔNG THỨC TRA NHANH & CÁC LỖI DỄ MẮC TOÀN MÔN -->
    <section id="bang-cong-thuc-toan-11" class="scroll-mt-24 space-y-8 pt-4">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-white">
          <div class="flex items-center gap-3">
            <span class="w-11 h-11 rounded-2xl bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center text-lg">
              <i class="fas fa-square-root-variable text-indigo-300"></i>
            </span>
            <div>
              <h2 class="text-xl sm:text-2xl font-black">Bảng Công thức Tra nhanh Toàn môn – Toán 11</h2>
              <p class="text-slate-300 text-sm mt-0.5">Hệ thống hóa 15 nhóm công thức cốt lõi xuyên suốt 9 Chương, 33 Bài (Tập 1 & Tập 2)</p>
            </div>
          </div>
        </div>
        <div class="p-5 sm:p-6 overflow-x-auto">
          <table class="w-full text-left border-collapse rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <thead>
              <tr class="bg-slate-800 text-white text-xs uppercase tracking-wider">
                <th class="px-4 py-3.5 font-bold">Mạch kiến thức / Chương bài</th>
                <th class="px-4 py-3.5 font-bold">Hệ thống công thức cốt lõi</th>
              </tr>
            </thead>
            <tbody>
              ${formulaRows}
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-gradient-to-br from-rose-50 via-orange-50/60 to-amber-50/50 dark:from-rose-950/30 dark:via-orange-950/20 dark:to-amber-950/20 rounded-3xl p-6 sm:p-7 border border-rose-200/90 dark:border-rose-900/60 space-y-5">
        <div class="flex items-center gap-3">
          <span class="w-11 h-11 rounded-2xl bg-rose-600 text-white flex items-center justify-center text-lg shadow-xs">
            <i class="fas fa-triangle-exclamation"></i>
          </span>
          <div>
            <h3 class="text-xl font-black text-slate-900 dark:text-slate-100">4 Nhóm Lỗi Dễ Mắc Cần Đặc Biệt Lưu Ý Khi Làm Bài Toán 11</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Kiểm tra kĩ điều kiện xác định, cơ số mũ/log, chiều cao hình không gian và tính độc lập xác suất</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${pitfallCards}
        </div>
      </div>
    </section>`;
}

// Flatten all 99 questions for the 45-minute Exam Arena
const allArenaQuestions = [];
lessons.forEach(l => {
  const qs = quizzes[l.num] || [];
  qs.forEach(q => {
    allArenaQuestions.push({
      lessonNum: l.num,
      lessonTitle: l.title,
      q: q.q,
      options: q.options,
      ans: q.ans,
      exp: q.exp
    });
  });
});

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Toán 11 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 9 Chương, 33 Bài, Tập 1 & Tập 2)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'] },
          colors: {
            slate: { 850: '#111827', 950: '#090d16' }
          }
        }
      }
    };
  </script>
  <script>
    (function() {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .dark .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
    .sidebar-active {
      background-color: #eef2ff !important;
      color: #4338ca !important;
      font-weight: 700 !important;
      border-color: #c7d2fe !important;
    }
    .dark .sidebar-active {
      background-color: rgba(99, 102, 241, 0.2) !important;
      color: #a5b4fc !important;
      border-color: rgba(99, 102, 241, 0.4) !important;
    }
    .sidebar-active .lesson-num-badge {
      background-color: #4f46e5 !important;
      color: #ffffff !important;
      border-color: #4f46e5 !important;
    }
    .dark .sidebar-active .lesson-num-badge {
      background-color: #6366f1 !important;
      color: #ffffff !important;
      border-color: #6366f1 !important;
    }
    .katex { font-size: 1.03em; }

    /* Dark mode enhancements for SVG diagrams */
    .dark svg rect[fill="#f8fafc"], .dark svg rect[fill="#ffffff"] { fill: #1e293b; }
    .dark svg rect[stroke="#e2e8f0"], .dark svg rect[stroke="#cbd5e1"] { stroke: #334155; }
    .dark svg text[fill="#0f172a"], .dark svg text[fill="#1e293b"] { fill: #f1f5f9; }
    .dark svg text[fill="#334155"], .dark svg text[fill="#475569"] { fill: #cbd5e1; }
    .dark svg text[fill="#64748b"] { fill: #94a3b8; }
  </style>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-indigo-600 selection:text-white">

  <!-- STICKY TOP NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-2xs">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" title="Về trang chủ chính"
          class="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-xs transition shrink-0">
          <i class="fas fa-arrow-left text-sm"></i>
        </a>
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
          <i class="fas fa-square-root-variable text-lg"></i>
        </div>
        <div class="truncate">
          <div class="flex items-center gap-2">
            <h1 class="font-black text-slate-900 dark:text-slate-100 text-base sm:text-lg tracking-tight truncate">Toán 11</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">KẾT NỐI TRI THỨC</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 truncate">Tập 1 & Tập 2 • 9 Chương • 33 Bài học, Ôn tập & Thực hành trải nghiệm</p>
        </div>
      </div>

      <!-- Center Progress -->
      <div class="hidden xl:flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div class="text-xs font-bold text-slate-700 dark:text-slate-300">Tiến độ: <span id="progress-count" class="text-indigo-600 dark:text-indigo-400">0/33</span> bài</div>
        <div class="w-28 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div id="progress-bar" class="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()"
          class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition cursor-pointer">
          <i class="fas fa-magnifying-glass text-indigo-600 dark:text-indigo-400"></i>
          <span class="hidden md:inline">Tìm nhanh</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 bg-white dark:bg-slate-900 rounded text-[10px] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <a href="#bang-cong-thuc-toan-11"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 transition">
          <i class="fas fa-book-bookmark"></i>
          <span>Bảng công thức</span>
        </a>

        <button type="button" onclick="openArenaModal()"
          class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-extrabold shadow-xs transition cursor-pointer">
          <i class="fas fa-trophy"></i>
          <span>Phòng thi 45'</span>
        </button>

        <!-- THEME TOGGLE BUTTON -->
        <button type="button" onclick="toggleDarkMode()" id="theme-toggle"
          class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition border border-slate-200/80 dark:border-slate-700 cursor-pointer"
          title="Chuyển chế độ Sáng / Tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN WORKSPACE GRID -->
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

      <!-- STICKY LEFT SIDEBAR -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden bg-slate-50/95 dark:bg-slate-900/95 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div class="flex items-center gap-2">
            <i class="fas fa-list-ul text-indigo-600"></i>
            <span class="font-black text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">Mục lục Bài học</span>
          </div>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 text-indigo-800">9 Chương • 33 Bài</span>
        </div>

        <div class="pt-3 pb-1 shrink-0">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input id="sidebar-filter" type="text" oninput="filterSidebarLessons(this.value)"
              placeholder="Lọc nhanh bài học (1-33), đạo hàm, logarit..."
              class="w-full pl-8 pr-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500" />
          </div>
        </div>

        <nav id="sidebar-nav" class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 space-y-4 text-sm pb-8 pt-2">
          ${buildSidebarHtml()}
          <a href="#bang-cong-thuc-toan-11" class="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-indigo-950 dark:hover:bg-slate-700 transition shadow-xs">
            <i class="fas fa-table-list text-amber-400"></i>
            <span>Bảng công thức tra nhanh & 4 lỗi dễ mắc</span>
          </a>
        </nav>
      </aside>

      <!-- MAIN CONTENT COLUMN -->
      <main class="lg:col-span-8 space-y-10 min-w-0">
        <!-- Hero Overview & Conventions -->
        <section class="bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-md space-y-5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-300/30 text-indigo-100 text-xs font-extrabold uppercase tracking-wider">
              Bộ sách Kết nối tri thức với cuộc sống
            </span>
            <span class="px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-300/30 text-emerald-100 text-xs font-bold">
              Tập 1 (134 trang) & Tập 2 (114 trang) • 9 Chương • 33 Bài • 99 Câu trắc nghiệm
            </span>
          </div>
          <div>
            <h2 class="text-2xl sm:text-3xl font-black leading-tight">
              Toán 11 — Kiến Thức Trọng Tâm Đầy Đủ Theo Bài
            </h2>
            <p class="text-indigo-100/90 text-sm sm:text-base leading-relaxed mt-2">
              Mỗi bài học được tách rõ 5 phần: <strong>A. Khái niệm & Tính chất</strong> • <strong>B. Công thức & Điều kiện áp dụng</strong> • <strong>C. Cách làm & Lỗi dễ mắc</strong> • <strong>D. Hình minh họa trực quan</strong> • <strong>E. Vận dụng & Trắc nghiệm phân bậc</strong>, kèm đầy đủ 9 mục Ôn tập chương và Thực hành trải nghiệm.
            </p>
          </div>

          <!-- Quy ước chung -->
          <div class="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/15 space-y-2">
            <div class="text-xs font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <i class="fas fa-scale-balanced"></i> Quy ước chung toàn tài liệu:
            </div>
            <ul class="space-y-1.5 text-xs sm:text-sm text-indigo-50">
              ${generalConventions.map(c => `<li class="flex items-start gap-2"><span class="text-amber-300 font-bold">•</span><span>${c}</span></li>`).join('\n')}
            </ul>
          </div>

          <!-- Volume & Chapter Jump Pills -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
            <a href="#chuong-1" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-indigo-200">Chương I (Bài 1–4)</div>
              <div class="font-extrabold text-white truncate">Lượng giác</div>
            </a>
            <a href="#chuong-2" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-blue-200">Chương II (Bài 5–7)</div>
              <div class="font-extrabold text-white truncate">Dãy số, CSC & CSN</div>
            </a>
            <a href="#chuong-3" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-teal-200">Chương III (Bài 8–9)</div>
              <div class="font-extrabold text-white truncate">Thống kê ghép nhóm</div>
            </a>
            <a href="#chuong-4" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-amber-200">Chương IV (Bài 10–14)</div>
              <div class="font-extrabold text-white truncate">Quan hệ song song</div>
            </a>
            <a href="#chuong-5" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-rose-200">Chương V (Bài 15–17)</div>
              <div class="font-extrabold text-white truncate">Giới hạn & Liên tục</div>
            </a>
            <a href="#chuong-6" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-emerald-200">Chương VI (Bài 18–21)</div>
              <div class="font-extrabold text-white truncate">Hàm số Mũ & Lôgarit</div>
            </a>
            <a href="#chuong-7" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-cyan-200">Chương VII (Bài 22–27)</div>
              <div class="font-extrabold text-white truncate">Vuông góc, KC & Thể tích</div>
            </a>
            <a href="#chuong-8" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-amber-200">Chương VIII (Bài 28–30)</div>
              <div class="font-extrabold text-white truncate">Quy tắc tính Xác suất</div>
            </a>
            <a href="#chuong-9" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
              <div class="font-bold text-rose-200">Chương IX (Bài 31–33)</div>
              <div class="font-extrabold text-white truncate">Đạo hàm cấp 1 & 2</div>
            </a>
          </div>
        </section>

        ${buildMainContentHtml()}

        ${buildBottomSummaryHtml()}
      </main>
    </div>
  </div>

  <!-- MODAL 1: QUICK SEARCH (CTRL + K) -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fas fa-magnifying-glass text-indigo-600"></i>
        <input id="global-search-input" type="text" oninput="runGlobalSearch(this.value)"
          placeholder="Nhập tên bài, công thức (lượng giác, cấp số cộng, trung vị, lôgarit, khoảng cách, đạo hàm...)"
          class="w-full text-sm text-slate-800 dark:text-slate-100 bg-transparent focus:outline-none" />
        <button type="button" onclick="closeSearchModal()" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700">ESC</button>
      </div>
      <div id="global-search-results" class="max-h-96 overflow-y-auto p-3 space-y-1.5 custom-scrollbar"></div>
    </div>
  </div>

  <!-- MODAL 2: 45-MINUTE EXAM ARENA (20 RANDOM QUESTIONS) -->
  <div id="arena-modal" class="fixed inset-0 z-50 hidden bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-900 to-slate-900 p-5 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
            <i class="fas fa-trophy"></i>
          </span>
          <div>
            <h3 class="font-black text-lg">Đấu Trường Toán 11 (20 Câu Trắc Nghiệm Tổng Hợp)</h3>
            <p class="text-xs text-slate-300">Đề ngẫu nhiên từ ngân hàng 99 câu hỏi phủ kín 9 Chương (Tập 1 & Tập 2)</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-white/15 font-mono font-bold text-sm text-amber-300">
            <i class="far fa-clock mr-1"></i><span id="arena-timer">45:00</span>
          </div>
          <button type="button" onclick="closeArenaModal()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer">
            <i class="fas fa-xmark"></i>
          </button>
        </div>
      </div>
      <div id="arena-body" class="p-5 overflow-y-auto flex-1 space-y-4 custom-scrollbar bg-slate-50 dark:bg-slate-950"></div>
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0">
        <div id="arena-score-status" class="text-sm font-bold text-slate-700 dark:text-slate-200">Chọn đáp án cho 20 câu hỏi rồi bấm Nộp bài.</div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="startArenaExam()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold cursor-pointer">
            <i class="fas fa-rotate mr-1"></i> Đề mới
          </button>
          <button type="button" id="arena-submit-btn" onclick="submitArenaExam()" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold shadow-xs cursor-pointer">
            <i class="fas fa-paper-plane mr-1"></i> Nộp bài chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    const TOTAL_LESSONS = 33;
    const STORAGE_KEY = 'toan11_kntt_done_lessons_v1';
    const ALL_ARENA_QS = ${JSON.stringify(allArenaQuestions)};
    const SEARCH_INDEX = ${JSON.stringify(lessons.map(l => ({
      num: l.num,
      vol: l.vol,
      chapter: l.chapter,
      title: l.title,
      subtitle: l.subtitle,
      keywords: (l.concepts.join(' ') + ' ' + l.methods.join(' ')).replace(/<[^>]+>/g, ' ').slice(0, 500)
    })))};

    // Fast single-pass KaTeX rendering
    let mathRenderedOnce = false;
    function renderMath(targetEl) {
      if (typeof renderMathInElement !== 'function') return;
      const root = targetEl || document.body;
      if (!targetEl && mathRenderedOnce) return;
      renderMathInElement(root, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\\\[', right: '\\\\]', display: true },
          { left: '\\\\(', right: '\\\\)', display: false },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
      if (!targetEl) mathRenderedOnce = true;
    }

    // Theme Toggle Functionality
    function initTheme() {
      updateThemeIcon();
    }
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon();
    }
    function updateThemeIcon() {
      const icon = document.getElementById('theme-icon');
      if (!icon) return;
      const isDark = document.documentElement.classList.contains('dark');
      icon.className = isDark ? 'fa-solid fa-sun text-sm text-amber-400' : 'fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300';
    }

    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      renderMath();
      loadProgress();
      initScrollSpy();
    });
    window.addEventListener('load', () => {
      if (!mathRenderedOnce) renderMath();
    });

    // Progress Tracking
    function getDoneLessons() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      } catch (e) {
        return [];
      }
    }
    function saveDoneLessons(arr) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      } catch (e) {}
    }
    function loadProgress() {
      const done = getDoneLessons();
      done.forEach(num => updateLessonButtonUI(num, true));
      updateProgressBar(done.length);
    }
    function toggleDoneLesson(num) {
      let done = getDoneLessons();
      const isDone = done.includes(num);
      if (isDone) {
        done = done.filter(x => x !== num);
      } else {
        done.push(num);
      }
      saveDoneLessons(done);
      updateLessonButtonUI(num, !isDone);
      updateProgressBar(done.length);
    }
    function updateLessonButtonUI(num, isDone) {
      const btn = document.getElementById('done-btn-' + num);
      if (!btn) return;
      if (isDone) {
        btn.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-400 text-slate-950 border border-emerald-300 transition cursor-pointer';
        btn.innerHTML = '<i class="fas fa-circle-check"></i> <span>Đã hoàn thành</span>';
      } else {
        btn.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 hover:bg-white/25 text-white border border-white/30 transition cursor-pointer';
        btn.innerHTML = '<i class="far fa-circle-check"></i> <span>Đánh dấu đã học</span>';
      }
    }
    function updateProgressBar(count) {
      const pct = Math.round((count / TOTAL_LESSONS) * 100);
      const cEl = document.getElementById('progress-count');
      const bEl = document.getElementById('progress-bar');
      if (cEl) cEl.textContent = count + '/' + TOTAL_LESSONS;
      if (bEl) bEl.style.width = pct + '%';
    }

    // Sidebar Accordion & Filter
    function toggleChapterMenu(chNum) {
      const menu = document.getElementById('ch-menu-' + chNum);
      const icon = document.getElementById('ch-icon-' + chNum);
      if (!menu) return;
      menu.classList.toggle('hidden');
      if (icon) icon.classList.toggle('rotate-180');
    }
    function toggleSubmenu(lessonNum) {
      const sub = document.getElementById('submenu-' + lessonNum);
      const icon = document.getElementById('sub-icon-' + lessonNum);
      if (!sub) return;
      sub.classList.toggle('hidden');
      if (icon) icon.classList.toggle('rotate-180');
    }
    function filterSidebarLessons(query) {
      const q = (query || '').trim().toLowerCase();
      SEARCH_INDEX.forEach(item => {
        const grp = document.getElementById('nav-group-' + item.num);
        if (!grp) return;
        const match = !q || ('bài ' + item.num + ' ' + item.title + ' ' + item.subtitle).toLowerCase().includes(q);
        grp.style.display = match ? '' : 'none';
      });
    }

    // Per-lesson Interactive Quiz
    function checkLessonQuiz(lessonNum, qIdx, chosenIdx, correctIdx) {
      const btns = document.querySelectorAll('.quiz-opt-btn-' + lessonNum + '-' + qIdx);
      btns.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-50', 'hover:border-indigo-300');
        if (idx === correctIdx) {
          btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border-2 border-emerald-500 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 font-semibold text-sm text-emerald-950 dark:text-emerald-200';
        } else if (idx === chosenIdx && chosenIdx !== correctIdx) {
          btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border-2 border-rose-400 dark:border-rose-500 bg-rose-50 dark:bg-rose-950/80 text-sm text-rose-900 dark:text-rose-200 opacity-90';
        } else {
          btn.classList.add('opacity-60');
        }
      });
      const expEl = document.getElementById('qexp-' + lessonNum + '-' + qIdx);
      if (expEl) {
        expEl.classList.remove('hidden');
        renderMath(expEl);
      }
    }
    function resetLessonQuiz(lessonNum) {
      for (let qIdx = 0; qIdx < 3; qIdx++) {
        const btns = document.querySelectorAll('.quiz-opt-btn-' + lessonNum + '-' + qIdx);
        btns.forEach(btn => {
          btn.disabled = false;
          btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 transition text-sm text-slate-700 cursor-pointer';
        });
        const expEl = document.getElementById('qexp-' + lessonNum + '-' + qIdx);
        if (expEl) expEl.classList.add('hidden');
      }
    }

    // Throttled Scroll Spy
    function initScrollSpy() {
      const cards = Array.from(document.querySelectorAll('[data-lesson-card]'));
      const links = Array.from(document.querySelectorAll('.sidebar-link'));
      let ticking = false;

      function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          let activeNum = 1;
          const offset = 160;
          for (const card of cards) {
            const rect = card.getBoundingClientRect();
            if (rect.top <= offset) {
              activeNum = parseInt(card.getAttribute('data-lesson-card'), 10);
            } else {
              break;
            }
          }
          links.forEach(link => {
            const num = parseInt(link.getAttribute('data-lesson'), 10);
            if (num === activeNum) {
              link.classList.add('sidebar-active');
            } else {
              link.classList.remove('sidebar-active');
            }
          });
          ticking = false;
        });
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Global Search Modal (Ctrl + K)
    function openSearchModal() {
      const m = document.getElementById('search-modal');
      if (!m) return;
      m.classList.remove('hidden');
      const inp = document.getElementById('global-search-input');
      if (inp) {
        inp.value = '';
        inp.focus();
        runGlobalSearch('');
      }
    }
    function closeSearchModal() {
      const m = document.getElementById('search-modal');
      if (m) m.classList.add('hidden');
    }
    function runGlobalSearch(query) {
      const box = document.getElementById('global-search-results');
      if (!box) return;
      const q = (query || '').trim().toLowerCase();
      const matches = SEARCH_INDEX.filter(item => {
        if (!q) return true;
        return ('bài ' + item.num + ' ' + item.title + ' ' + item.subtitle + ' ' + item.keywords).toLowerCase().includes(q);
      }).slice(0, 12);

      if (matches.length === 0) {
        box.innerHTML = '<div class="p-6 text-center text-sm text-slate-500">Không tìm thấy bài học phù hợp.</div>';
        return;
      }
      box.innerHTML = matches.map(item => \`
        <a href="#bai-\${item.num}" onclick="closeSearchModal()" class="flex items-center justify-between p-3 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 transition">
          <div>
            <div class="font-bold text-slate-900 dark:text-slate-100 text-sm">Bài \${item.num}. \${item.title}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">\${item.subtitle}</div>
          </div>
          <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs shrink-0">Tập \${item.vol} • Chương \${item.chapter}</span>
        </a>
      \`).join('');
    }
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === 'Escape') {
        closeSearchModal();
        closeArenaModal();
      }
    });

    // 45-Minute Exam Arena
    let currentArenaSet = [];
    let arenaAnswers = {};
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;

    function openArenaModal() {
      const m = document.getElementById('arena-modal');
      if (!m) return;
      m.classList.remove('hidden');
      startArenaExam();
    }
    function closeArenaModal() {
      const m = document.getElementById('arena-modal');
      if (m) m.classList.add('hidden');
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
    }
    function startArenaExam() {
      arenaAnswers = {};
      arenaSecondsLeft = 45 * 60;
      const shuffled = [...ALL_ARENA_QS].sort(() => Math.random() - 0.5);
      currentArenaSet = shuffled.slice(0, 20);
      const statusEl = document.getElementById('arena-score-status');
      if (statusEl) statusEl.textContent = 'Chọn đáp án cho 20 câu hỏi rồi bấm Nộp bài.';
      const subBtn = document.getElementById('arena-submit-btn');
      if (subBtn) subBtn.disabled = false;

      const body = document.getElementById('arena-body');
      if (body) {
        body.innerHTML = currentArenaSet.map((qObj, idx) => {
          const opts = qObj.options.map((opt, oIdx) => {
            const letter = ['A', 'B', 'C', 'D'][oIdx];
            return \`
              <button type="button" onclick="selectArenaOpt(\${idx}, \${oIdx})" id="arena-opt-\${idx}-\${oIdx}"
                class="arena-opt-group-\${idx} w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-white hover:bg-indigo-50/50 text-sm text-slate-700 transition cursor-pointer">
                <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center shrink-0">\${letter}</span>
                <span class="flex-1">\${opt}</span>
              </button>\`;
          }).join('');
          return \`
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-500">
                <span class="font-extrabold text-indigo-700 uppercase">Câu \${idx + 1}/20</span>
                <span>Bài \${qObj.lessonNum}: \${qObj.lessonTitle}</span>
              </div>
              <div class="font-bold text-slate-900 dark:text-slate-100 text-sm leading-relaxed">\${qObj.q}</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">\${opts}</div>
              <div id="arena-exp-\${idx}" class="hidden p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong>Giải thích:</strong> \${qObj.exp}
              </div>
            </div>\`;
        }).join('');
        renderMath(body);
      }

      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        arenaSecondsLeft--;
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          submitArenaExam();
          return;
        }
        const m = String(Math.floor(arenaSecondsLeft / 60)).padStart(2, '0');
        const s = String(arenaSecondsLeft % 60).padStart(2, '0');
        const tEl = document.getElementById('arena-timer');
        if (tEl) tEl.textContent = m + ':' + s;
      }, 1000);
    }

    function selectArenaOpt(qIdx, oIdx) {
      arenaAnswers[qIdx] = oIdx;
      const btns = document.querySelectorAll('.arena-opt-group-' + qIdx);
      btns.forEach((b, idx) => {
        if (idx === oIdx) {
          b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 font-semibold text-sm text-indigo-950 dark:text-indigo-200';
        } else {
          b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-white hover:bg-indigo-50/50 text-sm text-slate-700 transition cursor-pointer';
        }
      });
    }

    function submitArenaExam() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      let correct = 0;
      currentArenaSet.forEach((qObj, idx) => {
        const chosen = arenaAnswers[idx];
        if (chosen === qObj.ans) correct++;
        const btns = document.querySelectorAll('.arena-opt-group-' + idx);
        btns.forEach((b, oIdx) => {
          b.disabled = true;
          if (oIdx === qObj.ans) {
            b.className = 'arena-opt-group-' + idx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 font-bold text-sm text-emerald-950';
          } else if (oIdx === chosen && chosen !== qObj.ans) {
            b.className = 'arena-opt-group-' + idx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-rose-500 bg-rose-50 text-sm text-rose-900';
          }
        });
        const expEl = document.getElementById('arena-exp-' + idx);
        if (expEl) expEl.classList.remove('hidden');
      });
      const body = document.getElementById('arena-body');
      if (body) renderMath(body);
      const score10 = ((correct / 20) * 10).toFixed(1);
      const statusEl = document.getElementById('arena-score-status');
      if (statusEl) {
        statusEl.innerHTML = \`Kết quả: Đúng <span class="text-emerald-600 font-black">\${correct}/20</span> câu — Điểm quy đổi: <span class="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-black">\${score10}/10 điểm</span>\`;
      }
      const subBtn = document.getElementById('arena-submit-btn');
      if (subBtn) subBtn.disabled = true;
    }
  </script>
</body>
</html>`;

const outPath = path.join(__dirname, '..', 'courses', 'toan_11.html');
fs.writeFileSync(outPath, fullHtml, 'utf8');
console.log('Successfully built courses/toan_11.html!');
console.log('Total size:', (Buffer.byteLength(fullHtml, 'utf8') / 1024).toFixed(1), 'KB');
