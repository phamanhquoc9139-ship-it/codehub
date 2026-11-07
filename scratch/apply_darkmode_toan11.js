const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build_toan11.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. ColorMap with dark classes
const oldColorMap = `const colorMap = {
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-700',
    badge: 'bg-indigo-600 text-white',
    badgeSoft: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    gradient: 'from-indigo-600 via-blue-600 to-indigo-700',
    hover: 'hover:bg-indigo-50/80 hover:text-indigo-700',
    dot: 'bg-indigo-500'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-600 text-white',
    badgeSoft: 'bg-blue-100 text-blue-800 border-blue-200',
    gradient: 'from-blue-600 via-sky-600 to-blue-700',
    hover: 'hover:bg-blue-50/80 hover:text-blue-700',
    dot: 'bg-blue-500'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    badge: 'bg-teal-600 text-white',
    badgeSoft: 'bg-teal-100 text-teal-800 border-teal-200',
    gradient: 'from-teal-600 via-emerald-600 to-teal-700',
    hover: 'hover:bg-teal-50/80 hover:text-teal-700',
    dot: 'bg-teal-500'
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    badge: 'bg-amber-600 text-white',
    badgeSoft: 'bg-amber-100 text-amber-800 border-amber-200',
    gradient: 'from-amber-600 via-orange-600 to-amber-700',
    hover: 'hover:bg-amber-50/80 hover:text-amber-700',
    dot: 'bg-amber-500'
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    badge: 'bg-rose-600 text-white',
    badgeSoft: 'bg-rose-100 text-rose-800 border-rose-200',
    gradient: 'from-rose-600 via-pink-600 to-rose-700',
    hover: 'hover:bg-rose-50/80 hover:text-rose-700',
    dot: 'bg-rose-500'
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-600 text-white',
    badgeSoft: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    gradient: 'from-emerald-600 via-green-600 to-teal-700',
    hover: 'hover:bg-emerald-50/80 hover:text-emerald-700',
    dot: 'bg-emerald-500'
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    badge: 'bg-cyan-600 text-white',
    badgeSoft: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    gradient: 'from-cyan-600 via-sky-600 to-blue-700',
    hover: 'hover:bg-cyan-50/80 hover:text-cyan-700',
    dot: 'bg-cyan-500'
  }
};`;

const newColorMap = `const colorMap = {
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
};`;

if (!code.includes(oldColorMap)) {
  console.error('Could not find oldColorMap in toan11');
  process.exit(1);
}
code = code.replace(oldColorMap, newColorMap);

// 2. formatLineByLine
code = code.replace(
  `pl-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[13.5px] text-slate-700 leading-relaxed`,
  `pl-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-[13.5px] text-slate-700 dark:text-slate-200 leading-relaxed`
);
code = code.replace(
  `w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs shrink-0 mt-0.5`,
  `w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs shrink-0 mt-0.5`
);
code = code.replace(
  `<div class="text-slate-800 leading-relaxed">\${header}</div>`,
  `<div class="text-slate-800 dark:text-slate-100 leading-relaxed">\${header}</div>`
);
code = code.replace(
  `<div class="text-slate-800 font-medium leading-relaxed">\${prefix}</div>`,
  `<div class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">\${prefix}</div>`
);
code = code.replace(
  `<div class="text-slate-700 leading-relaxed">\${rawText}</div>`,
  `<div class="text-slate-700 dark:text-slate-300 leading-relaxed">\${rawText}</div>`
);

// 3. Sidebar HTML
code = code.replace(
  `sidebar-link flex-1 flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-slate-700 \${c.hover} transition-all font-medium text-[13px]`,
  `sidebar-link flex-1 flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-slate-700 dark:text-slate-300 \${c.hover} transition-all font-medium text-[13px]`
);
code = code.replace(
  `w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0 border border-slate-200/80 lesson-num-badge`,
  `w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[11px] flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-700 lesson-num-badge`
);
code = code.replace(
  `class="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"`,
  `class="p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"`
);
code = code.replace(
  `border-l-2 border-slate-200 ml-5 my-0.5`,
  `border-l-2 border-slate-200 dark:border-slate-700 ml-5 my-0.5`
);
code = code.replace(
  /text-slate-600 hover:text-indigo-700 hover:bg-indigo-50\/70 transition/g,
  `text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/60 transition`
);
code = code.replace(
  `chapter-nav-block bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden`,
  `chapter-nav-block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden`
);
code = code.replace(
  `font-bold text-slate-800 text-[13px] truncate`,
  `font-bold text-slate-800 dark:text-slate-200 text-[13px] truncate`
);
code = code.replace(
  `text-[11px] text-slate-500">Tập \${ch.vol}`,
  `text-[11px] text-slate-500 dark:text-slate-400">Tập \${ch.vol}`
);
code = code.replace(
  `hover:bg-slate-100 transition">\n              <i class="fas fa-layer-group text-[11px]"></i>\n              <span>Ôn tập chương \${ch.roman}</span>`,
  `hover:bg-slate-100 dark:hover:bg-slate-800 transition">\n              <i class="fas fa-layer-group text-[11px]"></i>\n              <span>Ôn tập chương \${ch.roman}</span>`
);
code = code.replace(
  `text-[11px] font-black uppercase tracking-wider text-indigo-700`,
  `text-[11px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400`
);
code = code.replace(
  `text-[11px] font-semibold text-slate-400`,
  `text-[11px] font-semibold text-slate-400 dark:text-slate-500`
);
code = code.replace(
  `bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs transition`,
  `bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold text-xs transition`
);

// 4. Lesson Card Sections
// Section A: Concepts
code = code.replace(
  `p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-indigo-200 transition`,
  `p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-700 transition text-slate-700 dark:text-slate-200`
);
code = code.replace(
  `space-y-2.5 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80`,
  `space-y-2.5 bg-slate-50/70 dark:bg-slate-850/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800`
);

// Section B: Formulas
code = code.replace(
  `<tr class="\${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'} hover:bg-indigo-50/40 transition">
      <td class="px-4 py-3.5 font-bold text-slate-800 text-sm border-b border-slate-200/80 w-1/4 align-top">\${f.name}</td>
      <td class="px-4 py-3.5 text-slate-900 text-[14.5px] border-b border-slate-200/80 font-medium align-top leading-relaxed">\${f.eq}</td>
      <td class="px-4 py-3.5 text-slate-600 text-xs border-b border-slate-200/80 w-1/4 align-top leading-relaxed bg-amber-50/30">\${f.note || ''}</td>
    </tr>`,
  `<tr class="\${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/70 dark:bg-slate-850/60'} hover:bg-indigo-50/40 dark:hover:bg-indigo-950/40 transition">
      <td class="px-4 py-3.5 font-bold text-slate-800 dark:text-slate-200 text-sm border-b border-slate-200/80 dark:border-slate-800 w-1/4 align-top">\${f.name}</td>
      <td class="px-4 py-3.5 text-slate-900 dark:text-slate-100 text-[14.5px] border-b border-slate-200/80 dark:border-slate-800 font-medium align-top leading-relaxed">\${f.eq}</td>
      <td class="px-4 py-3.5 text-slate-600 dark:text-slate-400 text-xs border-b border-slate-200/80 dark:border-slate-800 w-1/4 align-top leading-relaxed bg-amber-50/30 dark:bg-amber-950/20">\${f.note || ''}</td>
    </tr>`
);

// Section C: Methods
code = code.replace(
  `bg-rose-50/90 border border-rose-200 text-rose-950`,
  `bg-rose-50/90 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-950 dark:text-rose-200`
);
code = code.replace(
  `p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs`,
  `p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs text-slate-700 dark:text-slate-200`
);
code = code.replace(
  `bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs`,
  `bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs`
);
code = code.replace(
  `space-y-2.5 bg-amber-50/40 p-4 rounded-2xl border border-amber-200/70`,
  `space-y-2.5 bg-amber-50/40 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200/70 dark:border-amber-900/50`
);

// Section D: Visuals
code = code.replace(
  `bg-slate-50 rounded-2xl p-4 border border-slate-200/90 flex flex-col items-center`,
  `bg-slate-50 dark:bg-slate-850 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 flex flex-col items-center`
);
code = code.replace(
  `text-xs text-slate-600 font-medium mt-3 text-center italic`,
  `text-xs text-slate-600 dark:text-slate-400 font-medium mt-3 text-center italic`
);

// Section E: Applications & Quizzes
code = code.replace(
  `p-3 rounded-xl bg-white/90 border border-emerald-200/80`,
  `p-3 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200/80 dark:border-emerald-800/60 text-slate-700 dark:text-slate-200`
);
code = code.replace(
  `bg-gradient-to-br from-emerald-50/80 to-teal-50/50 rounded-2xl p-4 border border-emerald-200/80 space-y-2`,
  `bg-gradient-to-br from-emerald-50/80 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl p-4 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2`
);
code = code.replace(
  `text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1`,
  `text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1`
);
code = code.replace(
  `class="quiz-opt-btn-\${l.num}-\${qIdx} w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 transition text-sm text-slate-700 cursor-pointer"`,
  `class="quiz-opt-btn-\${l.num}-\${qIdx} w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-indigo-300 dark:hover:border-indigo-500 transition text-sm text-slate-700 dark:text-slate-200 cursor-pointer"`
);
code = code.replace(
  `w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5`,
  `w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5`
);
code = code.replace(
  `bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3.5`,
  `bg-white dark:bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3.5`
);
code = code.replace(
  `font-bold text-slate-900 text-[14.5px] leading-relaxed`,
  `font-bold text-slate-900 dark:text-slate-100 text-[14.5px] leading-relaxed`
);
code = code.replace(
  `bg-indigo-100 text-indigo-800 text-xs font-extrabold`,
  `bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs font-extrabold`
);
code = code.replace(
  `bg-indigo-50/90 border border-indigo-200 text-sm text-slate-800 leading-relaxed`,
  `bg-indigo-50/90 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-sm text-slate-800 dark:text-slate-200 leading-relaxed`
);
code = code.replace(
  `font-bold text-indigo-900 mb-1 flex items-center gap-1.5`,
  `font-bold text-indigo-900 dark:text-indigo-300 mb-1 flex items-center gap-1.5`
);
code = code.replace(
  `space-y-3.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/90`,
  `space-y-3.5 bg-slate-50/80 dark:bg-slate-850/80 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800`
);
code = code.replace(
  `text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer`,
  `text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer`
);

// Level Badges in dark mode
code = code.replace(
  `bg-sky-100 text-sky-800`,
  `bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300`
);
code = code.replace(
  `bg-amber-100 text-amber-800`,
  `bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300`
);
code = code.replace(
  `bg-rose-100 text-rose-800`,
  `bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300`
);

// Article Wrapper & Section Headers
code = code.replace(
  `class="scroll-mt-24 bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden transition hover:shadow-md"`,
  `class="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs overflow-hidden transition hover:shadow-md"`
);
code = code.replace(
  /border-b border-slate-200 pb-2\.5/g,
  `border-b border-slate-200 dark:border-slate-800 pb-2.5`
);
code = code.replace(
  /text-lg font-extrabold text-slate-900/g,
  `text-lg font-extrabold text-slate-900 dark:text-slate-100`
);
code = code.replace(
  `overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs`,
  `overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs`
);
code = code.replace(
  `<tr class="bg-slate-800 text-white text-xs uppercase tracking-wider">`,
  `<tr class="bg-slate-800 dark:bg-slate-950 text-white text-xs uppercase tracking-wider">`
);
code = code.replace(
  `text-xs font-semibold text-slate-500`,
  `text-xs font-semibold text-slate-500 dark:text-slate-400`
);

// Chapter Cards and Reviews
code = code.replace(
  `bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs`,
  `bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs`
);
code = code.replace(
  `text-2xl sm:text-3xl font-black text-slate-900 mt-1`,
  `text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1`
);
code = code.replace(
  `text-slate-600 text-sm mt-1 leading-relaxed`,
  `text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed`
);
code = code.replace(
  `p-3 rounded-xl bg-white border border-slate-200/90 text-sm text-slate-800 leading-relaxed shadow-2xs`,
  `p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200 leading-relaxed shadow-2xs`
);
code = code.replace(
  `text-sm text-slate-700 leading-relaxed`,
  `text-sm text-slate-700 dark:text-slate-300 leading-relaxed`
);

// Experiential modules
code = code.replace(
  `bg-gradient-to-br from-emerald-50 via-teal-50/70 to-cyan-50/50 rounded-3xl p-6 sm:p-7 border-2 border-emerald-200 shadow-xs space-y-5`,
  `bg-gradient-to-br from-emerald-50 via-teal-50/70 to-cyan-50/50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-cyan-950/20 rounded-3xl p-6 sm:p-7 border-2 border-emerald-200 dark:border-emerald-800 shadow-xs space-y-5`
);
code = code.replace(
  `bg-white rounded-2xl p-5 border border-emerald-200/90 shadow-2xs space-y-3`,
  `bg-white dark:bg-slate-850 rounded-2xl p-5 border border-emerald-200/90 dark:border-emerald-800/60 shadow-2xs space-y-3`
);
code = code.replace(
  `font-extrabold text-emerald-950 text-base flex items-center gap-2`,
  `font-extrabold text-emerald-950 dark:text-emerald-300 text-base flex items-center gap-2`
);
code = code.replace(
  `text-xl sm:text-2xl font-black text-slate-900 mt-1`,
  `text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1`
);

// 5. Bottom Summary
code = code.replace(
  `<tr class="\${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'} hover:bg-indigo-50/50 transition">
      <td class="px-4 py-3.5 font-bold text-indigo-900 text-sm border-b border-slate-200 w-1/4 align-top">\${row.topic}</td>
      <td class="px-4 py-3.5 text-slate-800 text-[14.5px] border-b border-slate-200 font-medium align-top leading-relaxed">\${row.formula}</td>
      <td class="px-4 py-3.5 text-slate-600 text-xs border-b border-slate-200 w-1/4 align-top leading-relaxed">\${row.note}</td>
    </tr>`,
  `<tr class="\${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/80 dark:bg-slate-850/60'} hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition">
      <td class="px-4 py-3.5 font-bold text-indigo-900 dark:text-indigo-300 text-sm border-b border-slate-200 dark:border-slate-800 w-1/4 align-top">\${row.topic}</td>
      <td class="px-4 py-3.5 text-slate-800 dark:text-slate-200 text-[14.5px] border-b border-slate-200 dark:border-slate-800 font-medium align-top leading-relaxed">\${row.formula}</td>
      <td class="px-4 py-3.5 text-slate-600 dark:text-slate-400 text-xs border-b border-slate-200 dark:border-slate-800 w-1/4 align-top leading-relaxed">\${row.note}</td>
    </tr>`
);
code = code.replace(
  `bg-white rounded-2xl p-5 border border-rose-200 shadow-2xs flex items-start gap-4`,
  `bg-white dark:bg-slate-850 rounded-2xl p-5 border border-rose-200 dark:border-rose-900/60 shadow-2xs flex items-start gap-4`
);
code = code.replace(
  `bg-rose-100 text-rose-600 flex items-center justify-center text-lg shrink-0`,
  `bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center text-lg shrink-0`
);
code = code.replace(
  `font-bold text-slate-900 text-base`,
  `font-bold text-slate-900 dark:text-slate-100 text-base`
);
code = code.replace(
  `text-sm text-slate-600 leading-relaxed mt-1`,
  `text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1`
);
code = code.replace(
  `bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden`,
  `bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden`
);
code = code.replace(
  `border-collapse rounded-xl overflow-hidden border border-slate-200`,
  `border-collapse rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800`
);
code = code.replace(
  `bg-gradient-to-br from-rose-50 via-orange-50/60 to-amber-50/50 rounded-3xl p-6 sm:p-7 border border-rose-200/90 space-y-5`,
  `bg-gradient-to-br from-rose-50 via-orange-50/60 to-amber-50/50 dark:from-rose-950/30 dark:via-orange-950/20 dark:to-amber-950/20 rounded-3xl p-6 sm:p-7 border border-rose-200/90 dark:border-rose-900/60 space-y-5`
);
code = code.replace(
  `text-xl font-black text-slate-900`,
  `text-xl font-black text-slate-900 dark:text-slate-100`
);
code = code.replace(
  `text-sm text-slate-600">Kiểm tra kĩ điều kiện`,
  `text-sm text-slate-600 dark:text-slate-400">Kiểm tra kĩ điều kiện`
);

// 6. Head & Tailwind
const oldHead = `  <title>Toán 11 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 9 Chương, 33 Bài, Tập 1 & Tập 2)</title>
  <script src="https://cdn.tailwindcss.com"></script>
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
    .sidebar-active {
      background-color: #eef2ff !important;
      color: #4338ca !important;
      font-weight: 700 !important;
      border-color: #c7d2fe !important;
    }
    .sidebar-active .lesson-num-badge {
      background-color: #4f46e5 !important;
      color: #ffffff !important;
      border-color: #4f46e5 !important;
    }
    .katex { font-size: 1.03em; }
  </style>
</head>
<body class="bg-slate-100 text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">`;

const newHead = `  <title>Toán 11 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 9 Chương, 33 Bài, Tập 1 & Tập 2)</title>
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
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-indigo-600 selection:text-white">`;

if (!code.includes(oldHead)) {
  console.error('Could not find oldHead in toan11');
  process.exit(1);
}
code = code.replace(oldHead, newHead);

// 7. Sticky Header with Theme Toggle Button
const oldHeader = `<header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
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
            <h1 class="font-black text-slate-900 text-base sm:text-lg tracking-tight truncate">Toán 11</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">KẾT NỐI TRI THỨC</span>
          </div>
          <p class="text-xs text-slate-500 truncate">Tập 1 & Tập 2 • 9 Chương • 33 Bài học, Ôn tập & Thực hành trải nghiệm</p>
        </div>
      </div>

      <!-- Center Progress -->
      <div class="hidden xl:flex items-center gap-3 bg-slate-100 px-3.5 py-1.5 rounded-2xl border border-slate-200">
        <div class="text-xs font-bold text-slate-700">Tiến độ: <span id="progress-count" class="text-indigo-600">0/33</span> bài</div>
        <div class="w-28 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div id="progress-bar" class="h-full bg-indigo-600 transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()"
          class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition cursor-pointer">
          <i class="fas fa-magnifying-glass text-indigo-600"></i>
          <span class="hidden md:inline">Tìm nhanh</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 bg-white rounded text-[10px] text-slate-500 border border-slate-200">Ctrl K</kbd>
        </button>

        <a href="#bang-cong-thuc-toan-11"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition">
          <i class="fas fa-book-bookmark"></i>
          <span>Bảng công thức</span>
        </a>

        <button type="button" onclick="openArenaModal()"
          class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-extrabold shadow-xs transition cursor-pointer">
          <i class="fas fa-trophy"></i>
          <span>Phòng thi 45'</span>
        </button>
      </div>
    </div>
  </header>`;

const newHeader = `<header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-2xs">
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
  </header>`;

if (!code.includes(oldHeader)) {
  console.error('Could not find oldHeader in toan11');
  process.exit(1);
}
code = code.replace(oldHeader, newHeader);

// 8. Aside Sidebar
code = code.replace(
  `aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden bg-slate-50/95 rounded-3xl border border-slate-200/90 shadow-xs p-4"`,
  `aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden bg-slate-50/95 dark:bg-slate-900/95 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-4"`
);
code = code.replace(
  `flex items-center justify-between pb-3 border-b border-slate-200 shrink-0`,
  `flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0`
);
code = code.replace(
  `font-black text-slate-900 text-sm uppercase tracking-wider`,
  `font-black text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider`
);
code = code.replace(
  `class="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigo-500"`,
  `class="w-full pl-8 pr-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"`
);
code = code.replace(
  `class="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900 text-white font-bold text-xs hover:bg-indigo-950 transition shadow-xs"`,
  `class="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-indigo-950 dark:hover:bg-slate-700 transition shadow-xs"`
);

// 9. Modals
code = code.replace(
  `bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden`,
  `bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden`
);
code = code.replace(
  `p-4 border-b border-slate-200 flex items-center gap-3`,
  `p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3`
);
code = code.replace(
  `class="w-full text-sm text-slate-800 focus:outline-none"`,
  `class="w-full text-sm text-slate-800 dark:text-slate-100 bg-transparent focus:outline-none"`
);
code = code.replace(
  `class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200"`,
  `class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700"`
);
code = code.replace(
  `bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden`,
  `bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden`
);
code = code.replace(
  `id="arena-body" class="p-5 overflow-y-auto flex-1 space-y-4 custom-scrollbar bg-slate-50"`,
  `id="arena-body" class="p-5 overflow-y-auto flex-1 space-y-4 custom-scrollbar bg-slate-50 dark:bg-slate-950"`
);
code = code.replace(
  `class="p-4 border-t border-slate-200 bg-white flex items-center justify-between shrink-0"`,
  `class="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0"`
);
code = code.replace(
  `id="arena-score-status" class="text-sm font-bold text-slate-700"`,
  `id="arena-score-status" class="text-sm font-bold text-slate-700 dark:text-slate-200"`
);
code = code.replace(
  `class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"`,
  `class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold cursor-pointer"`
);

// Search modal JS results
code = code.replace(
  `hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition`,
  `hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 transition`
);
code = code.replace(
  `font-bold text-slate-900 text-sm`,
  `font-bold text-slate-900 dark:text-slate-100 text-sm`
);
code = code.replace(
  `text-xs text-slate-500 mt-0.5 line-clamp-1`,
  `text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1`
);
code = code.replace(
  `bg-slate-100 text-slate-700 font-bold text-xs shrink-0`,
  `bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs shrink-0`
);

// 10. JS Theme Toggle Logic and DOMContentLoaded
const oldDOMInit = `    document.addEventListener('DOMContentLoaded', () => {
      renderMath();
      loadProgress();
      initScrollSpy();
    });`;

const newDOMInit = `    // Theme Toggle Functionality
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
    });`;

if (!code.includes(oldDOMInit)) {
  console.error('Could not find oldDOMInit in toan11');
  process.exit(1);
}
code = code.replace(oldDOMInit, newDOMInit);

// Arena dynamic JS cards
code = code.replace(
  `class="arena-opt-group-\${idx} w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-white hover:bg-indigo-50/50 text-sm text-slate-700 transition"`,
  `class="arena-opt-group-\${idx} w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-indigo-50/50 dark:hover:bg-slate-750 text-sm text-slate-700 dark:text-slate-200 transition"`
);
code = code.replace(
  `w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0`,
  `w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center shrink-0`
);
code = code.replace(
  `<div class="bg-white rounded-2xl p-4 border border-slate-200 space-y-3">`,
  `<div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">`
);
code = code.replace(
  `font-bold text-slate-900 text-sm leading-relaxed`,
  `font-bold text-slate-900 dark:text-slate-100 text-sm leading-relaxed`
);
code = code.replace(
  `bg-indigo-50 border border-indigo-200 text-xs text-slate-800 leading-relaxed`,
  `bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed`
);

// Arena selectArenaOpt
code = code.replace(
  `b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-indigo-600 bg-indigo-50 font-semibold text-sm text-indigo-950';`,
  `b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 font-semibold text-sm text-indigo-950 dark:text-indigo-200';`
);
code = code.replace(
  `b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-white hover:bg-indigo-50/50 text-sm text-slate-700 transition';`,
  `b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-indigo-50/50 dark:hover:bg-slate-750 text-sm text-slate-700 dark:text-slate-200 transition';`
);

// Quiz checkLessonQuiz styles
code = code.replace(
  `btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 font-semibold text-sm text-emerald-950';`,
  `btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border-2 border-emerald-500 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 font-semibold text-sm text-emerald-950 dark:text-emerald-200';`
);
code = code.replace(
  `btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border-2 border-rose-400 bg-rose-50 text-sm text-rose-900 opacity-90';`,
  `btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border-2 border-rose-400 dark:border-rose-500 bg-rose-50 dark:bg-rose-950/80 text-sm text-rose-900 dark:text-rose-200 opacity-90';`
);
code = code.replace(
  `btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 transition text-sm text-slate-700';`,
  `btn.className = 'quiz-opt-btn-' + lessonNum + '-' + qIdx + ' w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-indigo-300 dark:hover:border-indigo-500 transition text-sm text-slate-700 dark:text-slate-200';`
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated build_toan11.js with dark mode!');
