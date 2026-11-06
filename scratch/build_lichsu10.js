const fs = require('fs');
const path = require('path');

const data = require('./lichsu10_data.js');
const diagrams = require('./lichsu10_diagrams.js');
const quizzes = require('./lichsu10_quizzes.js');

const { topics, lessons: lessonsObj, timelineTable, historicalSkills } = data;
const lessonsList = Object.keys(lessonsObj)
  .map(k => Number(k))
  .sort((a, b) => a - b)
  .map(k => lessonsObj[k]);

const topicColors = {
  1: 'amber',
  2: 'emerald',
  3: 'purple',
  4: 'blue',
  5: 'teal',
  6: 'rose',
  7: 'orange'
};

const colorThemes = {
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
  purple: {
    badgeBg: 'bg-purple-50 dark:bg-purple-900/30',
    badgeText: 'text-purple-700 dark:text-purple-300',
    badgeBorder: 'border-purple-200 dark:border-purple-800/60',
    headerGrad: 'from-purple-600 via-indigo-600 to-violet-600',
    softBg: 'bg-purple-50/70 dark:bg-purple-950/25',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
    pillActive: 'bg-purple-600 text-white',
    dot: 'bg-purple-500'
  },
  blue: {
    badgeBg: 'bg-blue-50 dark:bg-blue-900/30',
    badgeText: 'text-blue-700 dark:text-blue-300',
    badgeBorder: 'border-blue-200 dark:border-blue-800/60',
    headerGrad: 'from-blue-600 via-indigo-600 to-cyan-600',
    softBg: 'bg-blue-50/70 dark:bg-blue-950/25',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
    pillActive: 'bg-blue-600 text-white',
    dot: 'bg-blue-500'
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
  orange: {
    badgeBg: 'bg-orange-50 dark:bg-orange-900/30',
    badgeText: 'text-orange-700 dark:text-orange-300',
    badgeBorder: 'border-orange-200 dark:border-orange-800/60',
    headerGrad: 'from-orange-600 via-amber-600 to-red-600',
    softBg: 'bg-orange-50/70 dark:bg-orange-950/25',
    iconBg: 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400',
    pillActive: 'bg-orange-600 text-white',
    dot: 'bg-orange-500'
  }
};

function formatText(str) {
  if (!str) return '';
  return String(str)
    .replace(/\$\\pi \\approx 3,16\$/g, '<strong>π ≈ 3,16</strong>')
    .replace(/\$\\pi \\approx 3,1416\$/g, '<strong>π ≈ 3,1416</strong>')
    .replace(/\$\\pi\$/g, '<strong>π</strong>')
    .replace(/\$360\^\\circ\$/g, '<strong>360°</strong>')
    .replace(/\$10\^\{-9\}\\text\{ m\}\$/g, '<strong>10<sup>-9</sup> m</strong>');
}

function renderSidebar() {
  let html = '';
  topics.forEach(t => {
    const colorKey = topicColors[t.num] || 'amber';
    const th = colorThemes[colorKey];
    const topicLessons = lessonsList.filter(l => l.topic === t.num);

    html += `
      <div class="mb-3 topic-nav-block" data-topic="${t.num}">
        <div class="px-2.5 py-1.5 rounded-lg ${th.softBg} border ${th.badgeBorder} mb-1.5 flex items-center justify-between">
          <span class="text-[11px] font-black uppercase tracking-wider ${th.badgeText}">${t.shortTitle}</span>
          <span class="text-[10px] font-bold ${th.badgeText} opacity-80">${topicLessons.length} bài</span>
        </div>
        <div class="space-y-1 pl-1">
    `;

    topicLessons.forEach(l => {
      html += `
        <a href="#bai-${l.num}" data-lesson-id="${l.num}" class="sidebar-lesson-link group flex items-start gap-2.5 px-2.5 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800/80 hover:text-amber-700 dark:hover:text-amber-300 transition-all border border-transparent">
          <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-0.5 transition-colors">${l.num}</span>
          <div class="min-w-0 flex-1">
            <div class="font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 leading-snug">Bài ${l.num}. ${l.title}</div>
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
      <a href="#he-thong-moc-va-ki-nang" class="sidebar-lesson-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:from-amber-500/20 hover:to-orange-500/20 transition-all">
        <span class="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs shrink-0">★</span>
        <div>
          <div>Hệ thống mốc & Kĩ năng lịch sử</div>
          <div class="text-[10px] font-normal text-slate-500 dark:text-slate-400">Niên biểu 13 bài • 54 dân tộc • 6 kĩ năng</div>
        </div>
      </a>
    </div>
  `;

  return html;
}

function renderTopicOverviewCards() {
  return topics.map(t => {
    const colorKey = topicColors[t.num] || 'amber';
    const th = colorThemes[colorKey];
    const topicLessons = lessonsList.filter(l => l.topic === t.num);
    return `
      <a href="#chude-${t.num}" class="group p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 hover:border-amber-400 dark:hover:border-amber-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.badgeBg} ${th.badgeText} border ${th.badgeBorder}">Chủ đề ${t.num}</span>
            <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500">Bài ${topicLessons.map(l => l.num).join(', ')}</span>
          </div>
          <div class="text-xs font-extrabold text-slate-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug mb-1">${t.title}</div>
        </div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">${topicLessons.map(l => 'Bài ' + l.num + ': ' + l.title).join(' • ')}</div>
      </a>
    `;
  }).join('');
}

function renderLessons() {
  let html = '';
  let currentTopicNum = null;

  lessonsList.forEach(l => {
    const topic = topics.find(t => t.num === l.topic) || topics[0];
    const colorKey = topicColors[topic.num] || 'amber';
    const th = colorThemes[colorKey];

    if (l.topic !== currentTopicNum) {
      currentTopicNum = l.topic;
      const topicLessons = lessonsList.filter(x => x.topic === topic.num);
      html += `
        <div id="chude-${topic.num}" class="scroll-mt-24 pt-4 pb-1">
          <div class="rounded-2xl p-5 bg-gradient-to-r ${th.headerGrad} text-white shadow-lg relative overflow-hidden">
            <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-black uppercase tracking-wider mb-1.5">
                  <span>CHỦ ĐỀ ${topic.num} / 7</span>
                  <span>•</span>
                  <span>LỊCH SỬ 10 – KẾT NỐI TRI THỨC</span>
                </div>
                <h2 class="text-xl md:text-2xl font-black tracking-tight">${topic.title}</h2>
                <p class="text-xs md:text-sm text-white/90 mt-1">Gồm ${topicLessons.length} bài học: ${topicLessons.map(x => 'Bài ' + x.num + ' (' + x.title + ')').join(' • ')}</p>
              </div>
              <div class="flex flex-wrap gap-1.5 shrink-0">
                ${topicLessons.map(x => `
                  <a href="#bai-${x.num}" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold backdrop-blur-sm border border-white/20 transition">Bài ${x.num}</a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // A. Concepts
    const conceptsHtml = (l.concepts || []).map(c => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/70 hover:border-amber-300 dark:hover:border-amber-700 transition-colors">
        <div class="flex items-start gap-2.5">
          <span class="w-2 h-2 rounded-full ${th.dot} mt-1.5 shrink-0"></span>
          <div class="text-xs leading-relaxed">
            <div class="font-extrabold text-slate-900 dark:text-white mb-1">${formatText(c.term)}</div>
            <div class="text-slate-700 dark:text-slate-300">${formatText(c.definition)}</div>
          </div>
        </div>
      </div>
    `).join('');

    // B. Sections
    const sectionsHtml = (l.sections || []).map(sec => {
      const itemsHtml = (sec.items || []).map(pt => `
        <li class="flex items-start gap-2.5 text-xs md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
          <span class="text-amber-600 dark:text-amber-400 font-bold mt-0.5 shrink-0">▸</span>
          <div class="flex-1">${formatText(pt)}</div>
        </li>
      `).join('');

      return `
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/70 shadow-sm">
          <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-700/60">
            <span class="w-1.5 h-5 rounded-full ${th.dot} shrink-0"></span>
            ${formatText(sec.heading)}
          </h4>
          <ul class="space-y-2.5">
            ${itemsHtml}
          </ul>
        </div>
      `;
    }).join('');

    // C. Source Analysis
    const sa = l.sourceAnalysis || {};
    const casesHtml = (sa.cases || []).map(cs => `
      <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/75 border-l-4 border-amber-500 shadow-sm">
        <div class="text-xs font-extrabold text-amber-900 dark:text-amber-300 mb-1 flex items-center gap-1.5">
          <span>📜</span>
          <span>${formatText(cs.name)}</span>
        </div>
        <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${formatText(cs.detail)}</div>
      </div>
    `).join('');

    const sourceAnalysisHtml = `
      <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider">Khai thác Sử liệu & Tình huống</span>
            <h4 class="text-xs md:text-sm font-extrabold text-amber-950 dark:text-amber-200">${formatText(sa.title || '')}</h4>
          </div>
          <span class="text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-white/80 dark:bg-slate-900/60 px-2.5 py-0.5 rounded-lg border border-amber-200 dark:border-amber-800">${(sa.cases || []).length} tình huống sử liệu</span>
        </div>
        <div class="space-y-2.5">
          ${casesHtml}
        </div>
      </div>
    `;

    // D. SVG Diagram + Significance & Connection
    const svgHtml = diagrams[l.num] || '';
    const sigHtml = (l.significanceAndConnection || []).map(item => `
      <li class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">★</span>
        <div class="flex-1">${formatText(item)}</div>
      </li>
    `).join('');

    // E. Quizzes
    const lessonQuizzes = quizzes[l.num] || [];
    const quizHtml = lessonQuizzes.map((q, qi) => `
      <div class="quiz-card p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80" data-lesson="${l.num}" data-qindex="${qi}">
        <div class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-2.5 leading-relaxed">
          <span class="inline-block px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-[10px] font-black mr-1.5">Câu ${qi + 1}</span>
          ${formatText(q.q)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          ${q.options.map((opt, oi) => {
            const letter = ['A', 'B', 'C', 'D'][oi];
            return `
              <button type="button" onclick="checkLessonQuiz(${l.num}, ${qi}, ${oi}, ${q.ans})" id="qbtn-${l.num}-${qi}-${oi}" class="quiz-opt-btn text-left px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-400 dark:hover:border-amber-500 text-xs text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
                <span class="font-black text-slate-400 dark:text-slate-500 shrink-0">${letter}.</span>
                <span>${formatText(opt)}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div id="qexp-${l.num}-${qi}" class="hidden mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed border"></div>
      </div>
    `).join('');

    html += `
      <article id="bai-${l.num}" data-lesson-card="${l.num}" data-topic-id="${l.topic}" class="lesson-article scroll-mt-24 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm overflow-hidden">
        <!-- Card Header -->
        <div class="p-5 md:p-6 border-b border-slate-100 dark:border-slate-700/70 ${th.softBg}">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 rounded-lg text-xs font-black ${th.pillActive} shadow-sm">BÀI ${l.num}</span>
              <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${th.badgeBg} ${th.badgeText} border ${th.badgeBorder}">${topic.shortTitle}</span>
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
            Bài ${l.num}. ${l.title}
          </h3>

          <p class="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Trọng tâm bài học:</strong> ${formatText(l.subtitle)}
          </p>

          <!-- Opening Question Box -->
          <div class="mt-3.5 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
            <span class="w-7 h-7 rounded-xl ${th.iconBg} flex items-center justify-center text-sm font-black shrink-0 mt-0.5">?</span>
            <div class="text-xs leading-relaxed">
              <div class="font-extrabold text-slate-900 dark:text-white">Câu hỏi mở đầu định hướng nhận thức:</div>
              <div class="text-slate-600 dark:text-slate-300 mt-0.5">${formatText(l.openingQuestion)}</div>
            </div>
          </div>

          <!-- Quick Activity Jump Pills -->
          <div class="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">Cấu trúc bài:</span>
            <a href="#b${l.num}-khai-niem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition">A. Khái niệm & Thuật ngữ (${(l.concepts || []).length})</a>
            <a href="#b${l.num}-noi-dung" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition">B. Nội dung trọng tâm (${(l.sections || []).length} mục)</a>
            <a href="#b${l.num}-su-lieu" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition">C. Khai thác sử liệu</a>
            <a href="#b${l.num}-so-do" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition">D. Sơ đồ & Ý nghĩa</a>
            <a href="#b${l.num}-trac-nghiem" class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 transition">E. Trắc nghiệm (${lessonQuizzes.length} câu)</a>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 md:p-6 space-y-6">
          <!-- A. Khái niệm & Thuật ngữ cốt lõi -->
          <section id="b${l.num}-khai-niem" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần A</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Khái niệm & Thuật ngữ lịch sử cốt lõi</h4>
            </div>
            <div class="grid grid-cols-1 gap-2.5">
              ${conceptsHtml}
            </div>
          </section>

          <!-- B. Nội dung trọng tâm theo mục sách -->
          <section id="b${l.num}-noi-dung" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${th.pillActive}">Phần B</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Diễn biến, Thành tựu & Nội dung trọng tâm theo mục sách</h4>
            </div>
            <div class="space-y-4">
              ${sectionsHtml}
            </div>
          </section>

          <!-- C. Khai thác sử liệu / Tư liệu -->
          <section id="b${l.num}-su-lieu" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-amber-600 text-white">Phần C</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Khai thác Sử liệu & Tình huống nhận thức</h4>
            </div>
            ${sourceAnalysisHtml}
          </section>

          <!-- D. Sơ đồ trực quan & Ý nghĩa - Liên hệ thực tiễn -->
          <section id="b${l.num}-so-do" class="scroll-mt-24">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-600 text-white">Phần D</span>
              <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Sơ đồ hóa kiến thức & Ý nghĩa – Liên hệ thực tiễn</h4>
            </div>
            <div class="p-3 md:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/80 mb-4 overflow-x-auto">
              ${svgHtml}
              <div class="text-[11px] text-center font-semibold text-slate-500 dark:text-slate-400 mt-2">▲ ${formatText(l.diagramCaption || '')}</div>
            </div>
            <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60">
              <h5 class="text-xs md:text-sm font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-wide mb-2.5">Kết quả – Ý nghĩa lịch sử & Liên hệ thực tiễn hiện nay:</h5>
              <ul class="space-y-2">
                ${sigHtml}
              </ul>
            </div>
          </section>

          <!-- E. Trắc nghiệm củng cố tại bài -->
          <section id="b${l.num}-trac-nghiem" class="scroll-mt-24 pt-2 border-t border-slate-200/80 dark:border-slate-700/70">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-600 text-white">Phần E</span>
                <h4 class="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Câu hỏi trắc nghiệm ôn tập Bài ${l.num} (${lessonQuizzes.length} câu)</h4>
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

function renderTimelineAndSkillsSection() {
  const timelineRowsHtml = timelineTable.map((row, idx) => {
    const firstLessonMatch = (row.lessonRef || '').match(/\d+/);
    const targetLessonId = firstLessonMatch ? firstLessonMatch[0] : 1;
    return `
      <tr class="hover:bg-amber-50/50 dark:hover:bg-slate-800/60 transition-colors">
        <td class="py-3 px-3.5 font-extrabold text-amber-700 dark:text-amber-400 whitespace-nowrap">${idx + 1}. ${row.milestone}</td>
        <td class="py-3 px-3.5 text-slate-700 dark:text-slate-300 leading-relaxed">${row.event}</td>
        <td class="py-3 px-3.5 whitespace-nowrap">
          <a href="#bai-${targetLessonId}" class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-bold text-[11px] hover:bg-amber-200 transition">${row.lessonRef}</a>
        </td>
      </tr>
    `;
  }).join('');

  const langRowsHtml = (historicalSkills.languageFamiliesTable || []).map(r => `
    <tr class="hover:bg-orange-50/40 dark:hover:bg-slate-800/60">
      <td class="py-2.5 px-3.5 font-extrabold text-orange-700 dark:text-orange-400">${r.family}</td>
      <td class="py-2.5 px-3.5 font-semibold text-slate-800 dark:text-slate-200">${r.group}</td>
      <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 leading-relaxed">${r.examples}</td>
    </tr>
  `).join('');

  const skillsCardsHtml = (historicalSkills.coreSkills || []).map(sk => `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-xl bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0">${sk.num}</span>
          <h4 class="text-xs md:text-sm font-black text-slate-900 dark:text-white leading-snug">${sk.title}</h4>
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mt-1.5">${sk.desc}</p>
      </div>
    </div>
  `).join('');

  return {
    timelineRowsHtml,
    langRowsHtml,
    skillsCardsHtml
  };
}

const { timelineRowsHtml, langRowsHtml, skillsCardsHtml } = renderTimelineAndSkillsSection();

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lịch Sử 10 – Kết Nối Tri Thức Với Cuộc Sống | Học Liệu Đầy Đủ 7 Chủ Đề, 13 Bài</title>
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
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(217, 119, 6, 0.7); }
    .sidebar-active {
      background: linear-gradient(90deg, rgba(245, 158, 11, 0.16), rgba(249, 115, 22, 0.08));
      border-color: rgba(245, 158, 11, 0.45) !important;
      color: #b45309 !important;
    }
    .dark .sidebar-active {
      background: linear-gradient(90deg, rgba(245, 158, 11, 0.22), rgba(249, 115, 22, 0.1));
      border-color: rgba(245, 158, 11, 0.5) !important;
      color: #fcd34d !important;
    }
  </style>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-white">

  <!-- Sticky Top Navigation Bar -->
  <header class="sticky top-0 z-40 h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
    <div class="max-w-[1440px] mx-auto h-full px-4 flex items-center justify-between gap-3">
      <!-- Left: Back & Brand -->
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-slate-700 dark:text-slate-200 flex items-center justify-center transition shrink-0" title="Về trang chủ">
          ←
        </a>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 text-white font-black flex items-center justify-center text-base shadow-md shrink-0">
          SỬ
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <h1 class="text-sm md:text-base font-black text-slate-900 dark:text-white truncate">Lịch Sử 10</h1>
            <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-[10px] font-black uppercase tracking-wider shrink-0">Kết nối tri thức</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Đủ 7 Chủ đề • 13 Bài học • Niên biểu & Kĩ năng khai thác sử liệu</p>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 shrink-0">
        <button type="button" onclick="openModal('search-modal')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 border border-slate-200/80 dark:border-slate-700 transition">
          <span>🔍</span>
          <span class="hidden sm:inline">Tìm kiếm</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600">Ctrl K</kbd>
        </button>

        <button type="button" onclick="openModal('timeline-modal')" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-xs font-bold text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/70 transition flex items-center gap-1.5">
          <span>⏳</span>
          <span class="hidden md:inline">Niên biểu & Mốc chính</span>
        </button>

        <button type="button" onclick="openModal('skills-modal')" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs font-bold text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 transition flex items-center gap-1.5">
          <span>🧭</span>
          <span class="hidden md:inline">Kĩ năng & 54 Dân tộc</span>
        </button>

        <button type="button" onclick="openArenaModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-black shadow-sm transition flex items-center gap-1.5">
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
              <span class="text-amber-600 dark:text-amber-400 font-black">☰</span>
              <h2 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Mục lục bài học</h2>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[11px] font-extrabold">7 Chủ đề • 13 Bài</span>
          </div>

          <!-- Progress Bar -->
          <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/60">
            <div class="flex items-center justify-between text-[11px] font-bold mb-1.5">
              <span class="text-slate-600 dark:text-slate-300">Tiến độ hoàn thành:</span>
              <span id="progress-label" class="text-amber-600 dark:text-amber-400 font-black">0 / 13 bài (0%)</span>
            </div>
            <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Sidebar Filter & Bookmark Filter -->
          <div class="flex items-center gap-1.5">
            <div class="relative flex-1">
              <input id="sidebar-filter" type="text" oninput="filterSidebar()" placeholder="Lọc theo tên bài, chủ đề..." class="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-500 text-slate-800 dark:text-slate-100" />
              <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">🔍</span>
            </div>
            <button type="button" id="bm-filter-btn" onclick="toggleBookmarkFilter()" class="px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-500 transition shrink-0" title="Chỉ hiện bài đã lưu">
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
          <div class="p-6 md:p-8 bg-gradient-to-br from-amber-700 via-orange-700 to-rose-800 text-white relative">
            <div class="max-w-3xl space-y-3">
              <div class="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold">
                <span>📚 BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</span>
                <span>•</span>
                <span>7 CHỦ ĐỀ – 13 BÀI HỌC</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                KIẾN THỨC ĐẦY ĐỦ THEO BÀI – LỊCH SỬ 10
              </h2>
              <p class="text-xs md:text-sm text-amber-100 leading-relaxed">
                Hệ thống hóa đầy đủ khái niệm, thuật ngữ, diễn biến, mốc sự kiện tiêu biểu, thành tựu văn minh, nguyên nhân – kết quả – ý nghĩa, hướng dẫn khai thác sử liệu (hiện vật, chữ viết, truyền khẩu) và liên hệ thực tiễn của trọn bộ 7 chủ đề, 13 bài Lịch sử 10.
              </p>
              <div class="flex flex-wrap gap-2 pt-1">
                <a href="#bai-1" class="px-4 py-2 rounded-xl bg-white text-amber-800 font-black text-xs shadow hover:bg-amber-50 transition">Bắt đầu từ Bài 1 →</a>
                <a href="#he-thong-moc-va-ki-nang" class="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/25 transition">⏳ Bảng hệ thống mốc & 6 Kĩ năng</a>
                <button type="button" onclick="openArenaModal()" class="px-4 py-2 rounded-xl bg-amber-500/30 hover:bg-amber-500/40 text-white font-bold text-xs border border-amber-300/40 transition">⚔️ Làm đề tổng hợp 65 câu</button>
              </div>
            </div>
          </div>

          <!-- 7 Topics Grid Overview -->
          <div class="p-5 md:p-6 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Khung chương trình 7 Chủ đề – 13 Bài học</h3>
              <span class="text-[11px] text-slate-500 dark:text-slate-400">Nhấn vào chủ đề để chuyển nhanh</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${renderTopicOverviewCards()}
            </div>
          </div>
        </section>

        <!-- All 13 Lessons -->
        <div id="lessons-container" class="space-y-6">
          ${renderLessons()}
        </div>

        <!-- Final Summary Section: Bảng hệ thống mốc, 54 Dân tộc & 6 Kĩ năng lịch sử -->
        <section id="he-thong-moc-va-ki-nang" class="scroll-mt-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
          <div class="p-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
            <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-1.5">
              ★ TỔNG KẾT TOÀN MÔN LỊCH SỬ 10
            </div>
            <h2 class="text-xl md:text-2xl font-black">Bảng Hệ Thống Mốc Chính, 54 Dân Tộc & Kĩ Năng Lịch Sử Toàn Sách</h2>
            <p class="text-xs md:text-sm text-white/90 mt-1">Tổng hợp đối chiếu xuyên suốt 13 bài học giúp tra cứu nhanh niên biểu, thành tựu văn minh và phương pháp làm bài.</p>
          </div>

          <div class="p-5 md:p-6 space-y-8">
            <!-- 1. Bảng hệ thống mốc và ý chính -->
            <div>
              <h3 class="text-base md:text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span class="w-7 h-7 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 flex items-center justify-center text-sm">⏳</span>
                1. Bảng hệ thống mốc thời gian và ý chính xuyên suốt 13 bài
              </h3>
              <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-amber-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Mốc / Thời kì</th>
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Sự kiện, thành tựu & ý chính cốt lõi</th>
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Bài liên quan</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200/70 dark:divide-slate-700/60">
                    ${timelineRowsHtml}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 2. Bảng phân loại 54 dân tộc Việt Nam theo 5 ngữ hệ, 8 nhóm ngôn ngữ -->
            <div>
              <h3 class="text-base md:text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span class="w-7 h-7 rounded-xl bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 flex items-center justify-center text-sm">🤝</span>
                2. Bảng phân loại 54 dân tộc Việt Nam theo 5 Ngữ hệ và 8 Nhóm ngôn ngữ (Bài 11)
              </h3>
              <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-orange-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Ngữ hệ (5 ngữ hệ)</th>
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Nhóm ngôn ngữ (8 nhóm)</th>
                      <th class="py-3 px-3.5 font-black text-slate-800 dark:text-slate-100">Các dân tộc tiêu biểu</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200/70 dark:divide-slate-700/60">
                    ${langRowsHtml}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 3. 6 Kĩ năng lịch sử dùng trong toàn sách -->
            <div>
              <h3 class="text-base md:text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span class="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm">🧭</span>
                3. Sáu kĩ năng lịch sử cốt lõi dùng trong toàn sách Lịch sử 10
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${skillsCardsHtml}
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
        <input id="global-search-input" type="text" oninput="runGlobalSearch()" placeholder="Nhập từ khóa lịch sử (VD: hiện vật, Kim tự tháp, Phục hưng, hơi nước, Angkor, Đại Việt, 54 dân tộc...)" class="w-full bg-transparent text-sm font-medium text-slate-900 dark:text-white focus:outline-none" />
        <button type="button" onclick="closeModal('search-modal')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white">ESC</button>
      </div>
      <div id="global-search-results" class="max-h-[65vh] overflow-y-auto p-4 space-y-2 custom-scrollbar">
        <div class="text-xs text-slate-400 text-center py-6">Nhập từ khóa bất kì để tìm nhanh trong 13 bài học, khái niệm, thành tựu văn minh và sử liệu.</div>
      </div>
    </div>
  </div>

  <!-- MODAL 2: Timeline Modal -->
  <div id="timeline-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-4xl max-h-[85vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
      <div class="p-4 md:p-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-between shrink-0">
        <div>
          <h3 class="text-base md:text-lg font-black">⏳ Bảng Hệ Thống Mốc Thời Gian & Ý Chính Lịch Sử 10</h3>
          <p class="text-xs text-amber-100">Tra cứu nhanh 13 mốc thời kì, nền văn minh và thành tựu tiêu biểu</p>
        </div>
        <button type="button" onclick="closeModal('timeline-modal')" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white font-black flex items-center justify-center">✕</button>
      </div>
      <div class="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1">
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-amber-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <th class="py-3 px-3.5 font-black">Mốc / Thời kì</th>
                <th class="py-3 px-3.5 font-black">Sự kiện & Thành tựu cốt lõi</th>
                <th class="py-3 px-3.5 font-black">Bài</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200/70 dark:divide-slate-700/60">
              ${timelineRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 3: Skills & 54 Ethnic Groups Modal -->
  <div id="skills-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-4xl max-h-[85vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
      <div class="p-4 md:p-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between shrink-0">
        <div>
          <h3 class="text-base md:text-lg font-black">🧭 Sổ Tay 6 Kĩ Năng Sử Học & Phân Loại 54 Dân Tộc Việt Nam</h3>
          <p class="text-xs text-emerald-100">Phương pháp khai thác sử liệu, phân tích thành tựu văn minh và bảng 5 ngữ hệ – 8 nhóm ngôn ngữ</p>
        </div>
        <button type="button" onclick="closeModal('skills-modal')" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white font-black flex items-center justify-center">✕</button>
      </div>
      <div class="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
        <div>
          <h4 class="text-sm font-black text-slate-900 dark:text-white mb-3">1. Sáu kĩ năng lịch sử cốt lõi dùng trong toàn sách</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            ${skillsCardsHtml}
          </div>
        </div>
        <div>
          <h4 class="text-sm font-black text-slate-900 dark:text-white mb-3">2. Phân chia 54 dân tộc Việt Nam theo 5 Ngữ hệ và 8 Nhóm ngôn ngữ</h4>
          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-orange-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th class="py-2.5 px-3.5 font-black">Ngữ hệ</th>
                  <th class="py-2.5 px-3.5 font-black">Nhóm ngôn ngữ</th>
                  <th class="py-2.5 px-3.5 font-black">Dân tộc tiêu biểu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200/70 dark:divide-slate-700/60">
                ${langRowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 4: Arena Quiz Modal (Đấu trường Lịch Sử 10) -->
  <div id="arena-modal" class="fixed inset-0 z-50 hidden bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="w-full max-w-3xl max-h-[88vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
      <div class="p-4 md:p-5 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white flex items-center justify-between shrink-0">
        <div>
          <h3 class="text-base md:text-lg font-black">⚔️ Đấu Trường Trắc Nghiệm Lịch Sử 10</h3>
          <p class="text-xs text-amber-100">Đề ngẫu nhiên 20 câu từ ngân hàng 65 câu phủ kín 13 bài học</p>
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
          <button type="button" id="arena-submit-btn" onclick="submitArenaQuiz()" class="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-black shadow transition">Nộp bài & Chấm điểm</button>
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
        topicId: l.topic,
        title: l.title,
        subtitle: l.subtitle,
        concepts: (l.concepts || []).map(c => c.term + ': ' + c.definition).join(' | '),
        headings: (l.sections || []).map(s => s.heading).join(' • ')
      }))
    )};

    const STORAGE_DONE_KEY = 'lichsu10_done_lessons';
    const STORAGE_BM_KEY = 'lichsu10_bookmarked_lessons';
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
      const total = 13;
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
          : 'px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-500 transition shrink-0';
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
        box.innerHTML = '<div class="text-xs text-slate-400 text-center py-6">Nhập từ khóa bất kì để tìm nhanh trong 13 bài học, khái niệm, thành tựu văn minh và sử liệu.</div>';
        return;
      }
      const hits = SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.concepts.toLowerCase().includes(q) ||
        item.headings.toLowerCase().includes(q)
      );

      if (!hits.length) {
        box.innerHTML = '<div class="text-xs text-slate-400 text-center py-6">Không tìm thấy kết quả phù hợp cho từ khóa này.</div>';
        return;
      }

      box.innerHTML = hits.map(item => \`
        <a href="#bai-\${item.id}" onclick="closeModal('search-modal')" class="block p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-amber-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition">
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="text-xs font-black text-amber-600 dark:text-amber-400">Bài \${item.id}. \${item.title}</span>
            <span class="text-[10px] font-bold text-slate-400">Chủ đề \${item.topicId}</span>
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
            <span class="px-2 py-0.5 rounded bg-amber-600 text-white text-[10px] font-black">Câu \${idx + 1} / \${arenaQuestions.length}</span>
            <span class="text-[11px] font-bold text-slate-400">Bài \${q.lessonId}</span>
          </div>
          <div class="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-3">\${q.q}</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            \${q.options.map((opt, oi) => \`
              <button type="button" onclick="selectArenaOption(\${idx}, \${oi})" id="arena-opt-\${idx}-\${oi}" class="text-left px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 hover:border-amber-500 transition flex items-start gap-2">
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
          ? 'text-left px-3 py-2 rounded-xl border-2 border-amber-500 bg-amber-50 dark:bg-amber-950/50 text-xs font-bold text-amber-900 dark:text-amber-200 flex items-start gap-2'
          : 'text-left px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 hover:border-amber-500 transition flex items-start gap-2';
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
        ['search-modal', 'timeline-modal', 'skills-modal'].forEach(closeModal);
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

const outPath = path.join(__dirname, '..', 'courses', 'lichsu_10.html');
fs.writeFileSync(outPath, fullHtml, 'utf8');
console.log('Built courses/lichsu_10.html successfully! Size:', (Buffer.byteLength(fullHtml, 'utf8') / 1024).toFixed(1), 'KB');
