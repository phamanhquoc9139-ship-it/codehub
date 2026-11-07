const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build_vatly11.js');
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
    ring: 'ring-indigo-500/20',
    hover: 'hover:bg-indigo-50/80 hover:text-indigo-700',
    dot: 'bg-indigo-500'
  },
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    badge: 'bg-sky-600 text-white',
    badgeSoft: 'bg-sky-100 text-sky-800 border-sky-200',
    gradient: 'from-sky-600 via-teal-600 to-cyan-700',
    ring: 'ring-sky-500/20',
    hover: 'hover:bg-sky-50/80 hover:text-sky-700',
    dot: 'bg-sky-500'
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-600 text-white',
    badgeSoft: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    gradient: 'from-emerald-600 via-teal-600 to-emerald-700',
    ring: 'ring-emerald-500/20',
    hover: 'hover:bg-emerald-50/80 hover:text-emerald-700',
    dot: 'bg-emerald-500'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-600 text-white',
    badgeSoft: 'bg-blue-100 text-blue-800 border-blue-200',
    gradient: 'from-blue-600 via-indigo-600 to-blue-700',
    ring: 'ring-blue-500/20',
    hover: 'hover:bg-blue-50/80 hover:text-blue-700',
    dot: 'bg-blue-500'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    badge: 'bg-teal-600 text-white',
    badgeSoft: 'bg-teal-100 text-teal-800 border-teal-200',
    gradient: 'from-teal-600 via-cyan-600 to-teal-700',
    ring: 'ring-teal-500/20',
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
    ring: 'ring-amber-500/20',
    hover: 'hover:bg-amber-50/80 hover:text-amber-700',
    dot: 'bg-amber-500'
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    badge: 'bg-rose-600 text-white',
    badgeSoft: 'bg-rose-100 text-rose-800 border-rose-200',
    gradient: 'from-rose-600 via-red-600 to-rose-700',
    ring: 'ring-rose-500/20',
    hover: 'hover:bg-rose-50/80 hover:text-rose-700',
    dot: 'bg-rose-500'
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
    ring: 'ring-indigo-500/20',
    hover: 'hover:bg-indigo-50/80 dark:hover:bg-indigo-950/60 hover:text-indigo-700 dark:hover:text-indigo-300',
    dot: 'bg-indigo-500'
  },
  sky: {
    bg: 'bg-sky-50 dark:bg-sky-950/50',
    border: 'border-sky-200 dark:border-sky-800/80',
    text: 'text-sky-700 dark:text-sky-300',
    badge: 'bg-sky-600 text-white',
    badgeSoft: 'bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200 border-sky-200 dark:border-sky-800',
    gradient: 'from-sky-600 via-teal-600 to-cyan-700',
    ring: 'ring-sky-500/20',
    hover: 'hover:bg-sky-50/80 dark:hover:bg-sky-950/60 hover:text-sky-700 dark:hover:text-sky-300',
    dot: 'bg-sky-500'
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
    border: 'border-emerald-200 dark:border-emerald-800/80',
    text: 'text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-600 text-white',
    badgeSoft: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
    gradient: 'from-emerald-600 via-teal-600 to-emerald-700',
    ring: 'ring-emerald-500/20',
    hover: 'hover:bg-emerald-50/80 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300',
    dot: 'bg-emerald-500'
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    border: 'border-blue-200 dark:border-blue-800/80',
    text: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-600 text-white',
    badgeSoft: 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
    gradient: 'from-blue-600 via-indigo-600 to-blue-700',
    ring: 'ring-blue-500/20',
    hover: 'hover:bg-blue-50/80 dark:hover:bg-blue-950/60 hover:text-blue-700 dark:hover:text-blue-300',
    dot: 'bg-blue-500'
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-950/50',
    border: 'border-teal-200 dark:border-teal-800/80',
    text: 'text-teal-700 dark:text-teal-300',
    badge: 'bg-teal-600 text-white',
    badgeSoft: 'bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 border-teal-200 dark:border-teal-800',
    gradient: 'from-teal-600 via-cyan-600 to-teal-700',
    ring: 'ring-teal-500/20',
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
    ring: 'ring-amber-500/20',
    hover: 'hover:bg-amber-50/80 dark:hover:bg-amber-950/60 hover:text-amber-700 dark:hover:text-amber-300',
    dot: 'bg-amber-500'
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/50',
    border: 'border-rose-200 dark:border-rose-800/80',
    text: 'text-rose-700 dark:text-rose-300',
    badge: 'bg-rose-600 text-white',
    badgeSoft: 'bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800',
    gradient: 'from-rose-600 via-red-600 to-rose-700',
    ring: 'ring-rose-500/20',
    hover: 'hover:bg-rose-50/80 dark:hover:bg-rose-950/60 hover:text-rose-700 dark:hover:text-rose-300',
    dot: 'bg-rose-500'
  }
};`;

if (!code.includes(oldColorMap)) {
  console.error('Could not find oldColorMap');
  process.exit(1);
}
code = code.replace(oldColorMap, newColorMap);

// 2. getTypeBadge
const oldTypeBadge = `function getTypeBadge(type) {
  if (type === 'Thực hành') {
    return \`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs"><i class="fas fa-flask text-[11px]"></i> Thực hành thí nghiệm</span>\`;
  }
  if (type === 'Bài tập') {
    return \`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 shadow-xs"><i class="fas fa-pen-ruler text-[11px]"></i> Phương pháp & Bài tập</span>\`;
  }
  return \`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shadow-xs"><i class="fas fa-book-open text-[11px]"></i> Kiến thức cốt lõi</span>\`;
}`;

const newTypeBadge = `function getTypeBadge(type) {
  if (type === 'Thực hành') {
    return \`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 shadow-xs"><i class="fas fa-flask text-[11px]"></i> Thực hành thí nghiệm</span>\`;
  }
  if (type === 'Bài tập') {
    return \`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700 shadow-xs"><i class="fas fa-pen-ruler text-[11px]"></i> Phương pháp & Bài tập</span>\`;
  }
  return \`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700 shadow-xs"><i class="fas fa-book-open text-[11px]"></i> Kiến thức cốt lõi</span>\`;
}`;
code = code.replace(oldTypeBadge, newTypeBadge);

// 3. formatItemContent
code = code.replace(/pl-3 py-1\.5 rounded-lg bg-slate-50\/90 border border-slate-200\/70 text-\[13\.5px\] text-slate-700/g,
  'pl-3 py-1.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 text-[13.5px] text-slate-700 dark:text-slate-200');
code = code.replace(/min-w-\[22px\] h-\[22px\] px-1 rounded-md bg-indigo-100 text-indigo-700/g,
  'min-w-[22px] h-[22px] px-1 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300');
code = code.replace(/w-5 h-5 rounded-md bg-indigo-100 text-indigo-700/g,
  'w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300');
code = code.replace(/<div class="text-slate-800 leading-relaxed">/g,
  '<div class="text-slate-800 dark:text-slate-100 leading-relaxed">');
code = code.replace(/<div class="text-slate-700 leading-relaxed">\${rawText}<\/div>/g,
  '<div class="text-slate-700 dark:text-slate-300 leading-relaxed">${rawText}</div>');

// 4. Sidebar HTML
code = code.replace(
  `text-slate-700 \${c.hover} transition-all font-medium text-[13px]`,
  `text-slate-700 dark:text-slate-300 \${c.hover} transition-all font-medium text-[13px]`
);
code = code.replace(
  `bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0 border border-slate-200/80 lesson-num-badge`,
  `bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[11px] flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-700 lesson-num-badge`
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
  `text-[11px] text-slate-500`,
  `text-[11px] text-slate-500 dark:text-slate-400`
);

// 5. Main Content HTML
// Section A items
code = code.replace(
  `p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-indigo-200 transition`,
  `p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-700 transition text-slate-700 dark:text-slate-200`
);
code = code.replace(
  `bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 space-y-3`,
  `bg-slate-50/70 dark:bg-slate-850/80 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 space-y-3`
);
code = code.replace(
  `font-bold text-slate-900 text-[15.5px] flex items-center gap-2.5`,
  `font-bold text-slate-900 dark:text-slate-100 text-[15.5px] flex items-center gap-2.5`
);

// Section B Formulas rows
code = code.replace(
  `<tr class="\${fIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'} hover:bg-indigo-50/40 transition">
          <td class="px-4 py-3 font-semibold text-slate-800 text-sm border-b border-slate-200/80 w-2/5">\${f.name}</td>
          <td class="px-4 py-3 text-slate-900 text-[15px] border-b border-slate-200/80 font-medium">\${f.eq}</td>
        </tr>`,
  `<tr class="\${fIdx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/70 dark:bg-slate-850/60'} hover:bg-indigo-50/40 dark:hover:bg-indigo-950/40 transition">
          <td class="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200 text-sm border-b border-slate-200/80 dark:border-slate-800 w-2/5">\${f.name}</td>
          <td class="px-4 py-3 text-slate-900 dark:text-slate-100 text-[15px] border-b border-slate-200/80 dark:border-slate-800 font-medium">\${f.eq}</td>
        </tr>`
);

// Section D Applications
code = code.replace(
  `p-3.5 rounded-xl bg-white/90 border border-emerald-200/80 shadow-2xs`,
  `p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs`
);
code = code.replace(
  `bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5`,
  `bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 mt-0.5`
);
code = code.replace(
  `text-[14px] text-slate-700 leading-relaxed flex-1`,
  `text-[14px] text-slate-700 dark:text-slate-200 leading-relaxed flex-1`
);

// Section E Quizzes
code = code.replace(
  `class="quiz-opt-btn-\${l.num}-\${qIdx} w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 transition text-sm text-slate-700"`,
  `class="quiz-opt-btn-\${l.num}-\${qIdx} w-full text-left flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-indigo-300 dark:hover:border-indigo-500 transition text-sm text-slate-700 dark:text-slate-200"`
);
code = code.replace(
  `w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 opt-badge`,
  `w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 opt-badge`
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
  `bg-indigo-100 text-indigo-800 text-xs font-extrabold mr-1.5`,
  `bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs font-extrabold mr-1.5`
);
code = code.replace(
  `bg-indigo-50/90 border border-indigo-200 text-sm text-slate-800 leading-relaxed`,
  `bg-indigo-50/90 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-sm text-slate-800 dark:text-slate-200 leading-relaxed`
);
code = code.replace(
  `font-bold text-indigo-900 mb-1 flex items-center gap-1.5`,
  `font-bold text-indigo-900 dark:text-indigo-300 mb-1 flex items-center gap-1.5`
);

// Article header and body
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
  `bg-slate-50 rounded-2xl p-4 border border-slate-200/90 flex flex-col items-center`,
  `bg-slate-50 dark:bg-slate-850 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 flex flex-col items-center`
);
code = code.replace(
  `text-xs text-slate-600 font-medium mt-3 text-center italic`,
  `text-xs text-slate-600 dark:text-slate-400 font-medium mt-3 text-center italic`
);
code = code.replace(
  `bg-gradient-to-br from-emerald-50/80 to-teal-50/60 rounded-2xl p-4 border border-emerald-200/80 space-y-2.5`,
  `bg-gradient-to-br from-emerald-50/80 to-teal-50/60 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl p-4 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2.5`
);
code = code.replace(
  `text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer`,
  `text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer`
);
code = code.replace(
  `space-y-3.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/90`,
  `space-y-3.5 bg-slate-50/80 dark:bg-slate-850/80 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800`
);
code = code.replace(
  `bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs relative overflow-hidden`,
  `bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs relative overflow-hidden`
);
code = code.replace(
  `text-2xl sm:text-3xl font-black text-slate-900 mt-1`,
  `text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 mt-1`
);
code = code.replace(
  `text-slate-600 text-sm mt-1`,
  `text-slate-600 dark:text-slate-400 text-sm mt-1`
);
code = code.replace(
  `text-xs font-semibold text-slate-500`,
  `text-xs font-semibold text-slate-500 dark:text-slate-400`
);

// 6. Bottom Summary
code = code.replace(
  `<tr class="\${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'} hover:bg-indigo-50/50 transition">
      <td class="px-4 py-3 font-bold text-indigo-900 text-sm border-b border-slate-200 w-1/3">\${row.topic}</td>
      <td class="px-4 py-3 text-slate-800 text-[14.5px] border-b border-slate-200">\${row.formula}</td>
    </tr>`,
  `<tr class="\${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/80 dark:bg-slate-850/60'} hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition">
      <td class="px-4 py-3 font-bold text-indigo-900 dark:text-indigo-300 text-sm border-b border-slate-200 dark:border-slate-800 w-1/3">\${row.topic}</td>
      <td class="px-4 py-3 text-slate-800 dark:text-slate-200 text-[14.5px] border-b border-slate-200 dark:border-slate-800">\${row.formula}</td>
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
  `text-sm text-slate-600">Bắt buộc tuân thủ`,
  `text-sm text-slate-600 dark:text-slate-400">Bắt buộc tuân thủ`
);

// 7. Head & Tailwind config
const oldHead = `  <title>Vật Lí 11 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 4 Chương, 26 Bài)</title>
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

const newHead = `  <title>Vật Lí 11 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 4 Chương, 26 Bài)</title>
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
  console.error('Could not find oldHead');
  process.exit(1);
}
code = code.replace(oldHead, newHead);

// 8. Sticky Header with Theme Toggle Button
const oldHeader = `<header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
      <!-- Left: Back to Main Index + Course Title -->
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" title="Về trang chủ chính"
          class="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-xs transition shrink-0">
          <i class="fas fa-arrow-left text-sm"></i>
        </a>
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white flex items-center justify-center shadow-xs shrink-0">
          <i class="fas fa-atom text-lg"></i>
        </div>
        <div class="truncate">
          <div class="flex items-center gap-2">
            <h1 class="font-black text-slate-900 text-base sm:text-lg tracking-tight truncate">Vật Lí 11</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">KẾT NỐI TRI THỨC</span>
          </div>
          <p class="text-xs text-slate-500 truncate">4 Chương • 26 Bài học, Bài tập & Thực hành chuẩn SGK (tr. 5–114)</p>
        </div>
      </div>

      <!-- Center: Progress bar -->
      <div class="hidden xl:flex items-center gap-3 bg-slate-100 px-3.5 py-1.5 rounded-2xl border border-slate-200">
        <div class="text-xs font-bold text-slate-700">Tiến độ: <span id="progress-count" class="text-indigo-600">0/26</span> bài</div>
        <div class="w-28 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div id="progress-bar" class="h-full bg-indigo-600 transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <!-- Right Action Buttons -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()"
          class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition cursor-pointer">
          <i class="fas fa-magnifying-glass text-indigo-600"></i>
          <span class="hidden md:inline">Tìm nhanh</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 bg-white rounded text-[10px] text-slate-500 border border-slate-200">Ctrl K</kbd>
        </button>

        <a href="#bang-cong-thuc-va-an-toan"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition">
          <i class="fas fa-square-root-variable"></i>
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
      <!-- Left: Back to Main Index + Course Title -->
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" title="Về trang chủ chính"
          class="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-xs transition shrink-0">
          <i class="fas fa-arrow-left text-sm"></i>
        </a>
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white flex items-center justify-center shadow-xs shrink-0">
          <i class="fas fa-atom text-lg"></i>
        </div>
        <div class="truncate">
          <div class="flex items-center gap-2">
            <h1 class="font-black text-slate-900 dark:text-slate-100 text-base sm:text-lg tracking-tight truncate">Vật Lí 11</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">KẾT NỐI TRI THỨC</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 truncate">4 Chương • 26 Bài học, Bài tập & Thực hành chuẩn SGK (tr. 5–114)</p>
        </div>
      </div>

      <!-- Center: Progress bar -->
      <div class="hidden xl:flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div class="text-xs font-bold text-slate-700 dark:text-slate-300">Tiến độ: <span id="progress-count" class="text-indigo-600 dark:text-indigo-400">0/26</span> bài</div>
        <div class="w-28 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div id="progress-bar" class="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <!-- Right Action Buttons -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()"
          class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition cursor-pointer">
          <i class="fas fa-magnifying-glass text-indigo-600 dark:text-indigo-400"></i>
          <span class="hidden md:inline">Tìm nhanh</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 bg-white dark:bg-slate-900 rounded text-[10px] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <a href="#bang-cong-thuc-va-an-toan"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 transition">
          <i class="fas fa-square-root-variable"></i>
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
  console.error('Could not find oldHeader');
  process.exit(1);
}
code = code.replace(oldHeader, newHeader);

// 9. Aside Sidebar wrapper
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

// 10. Modals
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

// 11. JS Theme Toggle Logic and DOMContentLoaded
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
  console.error('Could not find oldDOMInit');
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
console.log('Successfully updated build_vatly11.js with dark mode!');
