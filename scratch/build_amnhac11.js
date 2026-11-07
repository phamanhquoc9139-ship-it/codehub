// scratch/build_amnhac11.js
// Script biên dịch trang học liệu Âm Nhạc 11 chuẩn Kết nối tri thức với cuộc sống
// Xuất đồng thời courses/amnhac_11.html và courses/nhac_11.html

const fs = require('fs');
const path = require('path');
const data = require('./amnhac11_data.js');

function formatItemContent(item) {
  if (typeof item === 'string') {
    return `
      <div class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <span class="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0 shadow-sm"></span>
        <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">
          ${item}
        </div>
      </div>
    `;
  }

  if (typeof item === 'object' && item !== null) {
    let innerHtml = '';
    
    if (item.badge) {
      innerHtml += `<span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 uppercase tracking-wider mb-2">${item.badge}</span>`;
    }
    
    if (item.title) {
      innerHtml += `
        <h4 class="font-bold text-sm sm:text-base text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-2">
          <i class="fa-solid fa-music text-rose-500 text-xs"></i>
          <span>${item.title}</span>
        </h4>
      `;
    }

    if (Array.isArray(item.points)) {
      innerHtml += `
        <div class="space-y-2 mt-2">
          ${item.points.map(pt => `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
              <span class="leading-relaxed sm:leading-loose tracking-wide flex-1">${pt}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (item.desc) {
      if (item.desc.includes('•')) {
        const parts = item.desc.split(/\n•|•/g).map(s => s.trim()).filter(Boolean);
        innerHtml += `
          <div class="space-y-2 mt-2">
            ${parts.map(pt => `
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                <span class="leading-relaxed sm:leading-loose tracking-wide flex-1">${pt}</span>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        innerHtml += `
          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">
            ${item.desc}
          </div>
        `;
      }
    }

    return `
      <div class="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/70 space-y-1 hover:border-rose-300 dark:hover:border-rose-600 transition">
        ${innerHtml}
      </div>
    `;
  }

  return '';
}

function buildLessonArticle(l, options = {}) {
  const { themeName, svgObj } = options;
  const lessonKey = l.id;

  return `
    <article id="${l.id}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-8">
      <!-- Lesson Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 uppercase tracking-wide">
              Bài ${l.num}
            </span>
            ${themeName ? `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">${themeName}</span>` : ''}
            ${l.badge ? `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">${l.badge}</span>` : ''}
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ${l.title}
          </h2>
        </div>
        <button type="button" onclick="toggleLessonComplete('${lessonKey}')" id="btn-read-${lessonKey}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/50 border border-slate-200 dark:border-slate-700 self-start sm:self-auto shrink-0">
          <i id="icon-read-${lessonKey}" class="fa-regular fa-circle-check text-slate-400"></i>
          <span id="text-read-${lessonKey}">Đánh dấu đã học</span>
        </button>
      </div>

      <!-- Objectives -->
      <div class="p-5 sm:p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 space-y-3">
        <h4 class="font-bold text-sm sm:text-base text-rose-900 dark:text-rose-200 flex items-center gap-2">
          <i class="fa-solid fa-bullseye text-rose-600 dark:text-rose-400"></i> Mục tiêu bài học cần đạt
        </h4>
        <div class="space-y-2">
          ${l.objectives.map(obj => `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <i class="fa-solid fa-check text-rose-500 text-xs mt-1 shrink-0"></i>
              <span class="leading-relaxed sm:leading-loose">${obj}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- SVG Visual Diagram (if any) -->
      ${svgObj ? `
        <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700/60">
            <span class="text-xs sm:text-sm font-bold text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <i class="fa-solid fa-music"></i> ${svgObj.title}
            </span>
            <span class="text-[11px] text-slate-500 dark:text-slate-400">${svgObj.caption}</span>
          </div>
          <div class="p-2 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex justify-center overflow-x-auto shadow-inner">
            ${svgObj.svg}
          </div>
        </div>
      ` : ''}

      <!-- Sections Content -->
      <div class="space-y-6">
        ${l.sections.map(sec => {
          const secHeading = sec.title || sec.heading || '';
          const isGrid = sec.type === 'grid';
          return `
            <div class="space-y-3">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span>${secHeading}</span>
              </h3>

              ${isGrid ? `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  ${sec.items.map(item => formatItemContent(item)).join('')}
                </div>
              ` : `
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3.5">
                  ${sec.items.map(item => formatItemContent(item)).join('')}
                </div>
              `}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Lesson Quiz (3 Questions) -->
      <div class="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-question text-rose-500"></i>
            <span>Luyện tập nhanh (${l.quiz.length} câu trắc nghiệm)</span>
          </h4>
          <span class="text-xs text-slate-500 dark:text-slate-400">Chọn phương án đúng</span>
        </div>

        <div class="space-y-4">
          ${l.quiz.map((qObj, qIdx) => {
            const correctAns = qObj.answer !== undefined ? qObj.answer : qObj.ans;
            const explainText = (qObj.explanation || qObj.explain || '').replace(/"/g, '&quot;');
            return `
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-3" id="quiz-${lessonKey}-${qIdx}">
                <p class="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  <strong>Câu ${qIdx + 1}:</strong> ${qObj.q}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${qObj.options.map((opt, optIdx) => `
                    <button type="button" onclick="checkLessonQuiz('${lessonKey}', ${qIdx}, ${optIdx}, ${correctAns})" id="opt-${lessonKey}-${qIdx}-${optIdx}" class="text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-rose-400 transition flex items-start gap-2.5">
                      <span class="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ${String.fromCharCode(65 + optIdx)}
                      </span>
                      <span class="leading-relaxed">${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div id="exp-${lessonKey}-${qIdx}" class="hidden p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed transition" data-explain="${explainText}"></div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </article>
  `;
}

function buildHtml() {
  const {
    general_themes,
    vocal_options,
    guitar_options,
    musicTerms,
    practiceProcess,
    arenaQuestions,
    svgs
  } = data;

  // SVG associations
  const generalSvgMap = {
    c1_b1: svgs.svg_f_major,
    c2_b1: svgs.svg_chords_f,
    c3_b1: svgs.svg_d_minor
  };

  // Build Sidebar HTML
  let sidebarHtml = `
    <div class="space-y-4">
      <!-- Tab Switcher or Section Headers -->
      <div>
        <div class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 rounded-lg mb-2">
          Phần Kiến Thức Chung (16 bài)
        </div>
        <div class="space-y-3">
  `;

  general_themes.forEach(th => {
    sidebarHtml += `
      <div>
        <div class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase px-3 py-1 tracking-wider">${th.themeTitle}</div>
        <ul class="space-y-0.5">
    `;
    th.lessons.forEach(l => {
      sidebarHtml += `
        <li>
          <a href="#${l.id}" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-slate-800 transition">
            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold text-[11px] shrink-0">${l.num}</span>
            <span class="truncate">${l.title.replace(/^Bài \d+\.\s*/, '')}</span>
          </a>
        </li>
      `;
    });
    sidebarHtml += `</ul></div>`;
  });

  sidebarHtml += `
        </div>
      </div>

      <!-- Section Lựa Chọn A: Hát -->
      <div class="pt-2 border-t border-slate-200 dark:border-slate-800">
        <div class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 rounded-lg mb-2">
          Lựa Chọn A — Hát (4 bài)
        </div>
        <ul class="space-y-0.5">
  `;
  vocal_options.forEach(l => {
    sidebarHtml += `
      <li>
        <a href="#${l.id}" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 transition">
          <span class="w-5 h-5 rounded-md bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-[11px] shrink-0">${l.num}</span>
          <span class="truncate">${l.title.replace(/^Bài \d+\.\s*/, '')}</span>
        </a>
      </li>
    `;
  });
  sidebarHtml += `</ul></div>`;

  // Section Lựa Chọn B: Guitar
  sidebarHtml += `
      <div class="pt-2 border-t border-slate-200 dark:border-slate-800">
        <div class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 rounded-lg mb-2">
          Lựa Chọn B — Guitar (6 bài)
        </div>
        <ul class="space-y-0.5">
  `;
  guitar_options.forEach(l => {
    sidebarHtml += `
      <li>
        <a href="#${l.id}" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800 transition">
          <span class="w-5 h-5 rounded-md bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-[11px] shrink-0">${l.num}</span>
          <span class="truncate">${l.title.replace(/^Bài \d+\.\s*/, '')}</span>
        </a>
      </li>
    `;
  });
  sidebarHtml += `</ul></div>`;

  // Special Tools & Exam
  sidebarHtml += `
      <div class="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <a href="#thuat-ngu-ky-nang" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-book-open text-indigo-500"></i>
          <span>Bảng thuật ngữ & Kỹ năng</span>
        </a>
        <a href="#dau-truong-45p" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-trophy text-rose-500"></i>
          <span>Đấu trường 45 phút</span>
        </a>
      </div>
    </div>
  `;

  // Build General Lessons Articles
  let generalLessonsHtml = '';
  general_themes.forEach(th => {
    generalLessonsHtml += `
      <div class="pt-4 pb-2">
        <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-transparent border-l-4 border-rose-500">
          <h3 class="text-lg sm:text-xl font-black text-rose-950 dark:text-rose-200">${th.themeTitle}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">${th.themeDesc}</p>
        </div>
      </div>
    `;
    th.lessons.forEach(l => {
      generalLessonsHtml += buildLessonArticle(l, {
        themeName: th.themeTitle.split('.')[1]?.trim() || th.themeTitle,
        svgObj: generalSvgMap[l.id]
      });
    });
  });

  // Build Vocal Lessons Articles
  let vocalLessonsHtml = `
    <div class="pt-6 pb-2">
      <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-transparent border-l-4 border-teal-500">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 uppercase">Lộ trình lựa chọn</span>
          <h3 class="text-lg sm:text-xl font-black text-teal-950 dark:text-teal-200">Phần Lựa Chọn A — Hát (4 bài)</h3>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Chuyên sâu 4 kĩ thuật thanh nhạc nền tảng: Legato, Passage, Staccato và Luyến âm</p>
      </div>
    </div>
    <!-- SVG Vocal Techniques Comparison -->
    <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
      <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700/60">
        <span class="text-xs sm:text-sm font-bold text-teal-700 dark:text-teal-300 flex items-center gap-2">
          <i class="fa-solid fa-microphone-lines"></i> ${svgs.svg_vocal_techniques.title}
        </span>
        <span class="text-[11px] text-slate-500 dark:text-slate-400">${svgs.svg_vocal_techniques.caption}</span>
      </div>
      <div class="p-2 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex justify-center overflow-x-auto shadow-inner">
        ${svgs.svg_vocal_techniques.svg}
      </div>
    </div>
  `;
  vocal_options.forEach(l => {
    vocalLessonsHtml += buildLessonArticle(l, { themeName: "Lựa chọn A — Hát" });
  });

  // Build Guitar Lessons Articles
  let guitarLessonsHtml = `
    <div class="pt-6 pb-2">
      <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border-l-4 border-amber-500">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase">Lộ trình lựa chọn</span>
          <h3 class="text-lg sm:text-xl font-black text-amber-950 dark:text-amber-200">Phần Lựa Chọn B — Nhạc cụ: Guitar (6 bài)</h3>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Kĩ thuật guitar cổ điển: liền tiếng, rời tiếng, luân phiên i-m, Barre chord, đệm Slow và hoà tấu</p>
      </div>
    </div>
    <!-- SVGs Guitar -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
        <div class="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-300 flex items-center gap-2">
          <i class="fa-solid fa-guitar"></i> ${svgs.svg_guitar_hands.title}
        </div>
        <div class="p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
          ${svgs.svg_guitar_hands.svg}
        </div>
      </div>
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
        <div class="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-300 flex items-center gap-2">
          <i class="fa-solid fa-sliders"></i> ${svgs.svg_guitar_slow.title}
        </div>
        <div class="p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
          ${svgs.svg_guitar_slow.svg}
        </div>
      </div>
    </div>
  `;
  guitar_options.forEach(l => {
    guitarLessonsHtml += buildLessonArticle(l, { themeName: "Lựa chọn B — Guitar" });
  });

  // Build Terms & Skills Article
  let termsHtml = `
    <article id="thuat-ngu-ky-nang" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/60 shadow-sm space-y-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-indigo-100 dark:border-indigo-900/40">
        <div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 uppercase tracking-wide">
            Cẩm nang dùng xuyên suốt
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Bảng thuật ngữ và kỹ năng dùng xuyên suốt
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Hệ thống 12 thuật ngữ âm nhạc then chốt và quy trình 5 bước luyện tập chuẩn mực
          </p>
        </div>
      </div>

      <!-- 12 Thuật ngữ dạng lưới thẻ card -->
      <div class="space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-spell-check text-indigo-500"></i>
          <span>1. Bảng 12 thuật ngữ âm nhạc cốt lõi</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${musicTerms.map(t => `
            <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/40 border border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-300 transition space-y-2">
              <h4 class="font-bold text-sm sm:text-base text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                <i class="fa-solid fa-tag text-indigo-500 text-xs"></i>
                <span>${t.term}</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose">
                ${t.def}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Quy trình 5 bước luyện tập -->
      <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-list-check text-emerald-500"></i>
          <span>2. Quy trình 5 bước luyện tập âm nhạc tiêu chuẩn</span>
        </h3>
        <div class="space-y-3.5">
          ${practiceProcess.map((step, idx) => `
            <div class="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80">
              <span class="w-7 h-7 rounded-xl bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                ${idx + 1}
              </span>
              <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide flex-1">
                ${step}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `;

  // Build Arena Exam Article
  let arenaHtml = `
    <article id="dau-truong-45p" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 shadow-sm space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-rose-100 dark:border-rose-900/40">
        <div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 uppercase tracking-wide">
            Đánh giá toàn diện
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Đấu trường Âm nhạc 11 (20 câu • 45 phút)
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Đề thi trắc nghiệm chuẩn cấu trúc bao quát toàn bộ 4 Chủ đề kiến thức chung, kĩ thuật Hát & Guitar
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 font-mono font-bold text-sm sm:text-base">
            <i class="fa-regular fa-clock text-rose-600"></i>
            <span id="arena-timer">45:00</span>
          </div>
          <button type="button" onclick="startArenaExam()" id="btn-start-arena" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm transition shadow-sm">
            Bắt đầu làm bài
          </button>
        </div>
      </div>

      <!-- Arena Questions Container -->
      <div id="arena-container" class="space-y-5">
        ${arenaQuestions.map((qObj, idx) => `
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-3" id="arena-q-${idx}">
            <div class="flex items-start justify-between gap-3">
              <p class="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white leading-relaxed">
                <span class="inline-block w-6 h-6 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300 text-center font-bold text-xs leading-6 mr-1.5">${idx + 1}</span>
                ${qObj.q}
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              ${qObj.options.map((opt, optIdx) => `
                <label class="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer">
                  <input type="radio" name="arena_${idx}" value="${optIdx}" class="mt-1 text-rose-600 focus:ring-rose-500">
                  <span class="leading-relaxed"><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}</span>
                </label>
              `).join('')}
            </div>
            <div id="arena-exp-${idx}" class="hidden p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed transition"></div>
          </div>
        `).join('')}
      </div>

      <!-- Submit and Results -->
      <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button type="button" onclick="submitArenaExam()" id="btn-submit-arena" class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm sm:text-base transition shadow-md flex items-center justify-center gap-2">
          <i class="fa-solid fa-paper-plane"></i> Nộp bài & Chấm điểm
        </button>
        <div id="arena-result" class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200"></div>
      </div>
    </article>
  `;

  // Search Index Generation
  const searchIndex = [];
  general_themes.forEach(th => {
    th.lessons.forEach(l => {
      searchIndex.push({
        id: l.id,
        badge: `Chung • Bài ${l.num}`,
        title: l.title,
        desc: l.objectives.join(' • ')
      });
    });
  });
  vocal_options.forEach(l => {
    searchIndex.push({
      id: l.id,
      badge: `Hát • Bài ${l.num}`,
      title: l.title,
      desc: l.objectives.join(' • ')
    });
  });
  guitar_options.forEach(l => {
    searchIndex.push({
      id: l.id,
      badge: `Guitar • Bài ${l.num}`,
      title: l.title,
      desc: l.objectives.join(' • ')
    });
  });
  searchIndex.push({
    id: "thuat-ngu-ky-nang",
    badge: "Thuật ngữ",
    title: "Bảng thuật ngữ & Kỹ năng âm nhạc",
    desc: "12 thuật ngữ âm nhạc và quy trình 5 bước luyện tập chuẩn."
  });
  searchIndex.push({
    id: "dau-truong-45p",
    badge: "Đấu trường",
    title: "Đấu trường Âm nhạc 11 (20 câu • 45 phút)",
    desc: "Đề thi thử trắc nghiệm tổng hợp toàn diện chương trình Âm nhạc 11."
  });

  // Full HTML Template
  const finalHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Âm Nhạc 11 — Hệ Thống Kiến Thức Đầy Đủ Theo Bài (Bộ Kết Nối Tri Thức Với Cuộc Sống)</title>
  <meta name="description" content="Tài liệu số hoá toàn diện Âm nhạc 11 Kết nối tri thức với cuộc sống: Đủ 4 chủ đề kiến thức chung (16 bài), 2 lộ trình lựa chọn Hát (4 bài) và Guitar (6 bài), thuật ngữ và đấu trường trắc nghiệm.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts: Inter & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              50: '#fff1f2',
              100: '#ffe4e6',
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
    ::-webkit-scrollbar-thumb { background: #fda4af; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #4c0519; }
    ::-webkit-scrollbar-thumb:hover { background: #fb7185; }

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

    body {
      letter-spacing: 0.012em;
      line-height: 1.8;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- TOP HEADER / NAVBAR -->
  <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button type="button" onclick="toggleSidebar()" class="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none" aria-label="Toggle Sidebar">
          <i class="fa-solid fa-bars-staggered text-lg"></i>
        </button>
        <a href="amnhac_11.html" class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white font-black text-lg shadow-md shadow-rose-500/20">
            <i class="fa-solid fa-music"></i>
          </div>
          <div>
            <h1 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
              Âm Nhạc 11 <span class="hidden sm:inline text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 ml-1">KNTT</span>
            </h1>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-none">Kiến thức chung (16 bài) & Hát (4 bài) / Guitar (6 bài)</p>
          </div>
        </a>
      </div>

      <!-- Quick Actions -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button type="button" onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs sm:text-sm font-medium transition">
          <i class="fa-solid fa-magnifying-glass text-xs"></i>
          <span class="hidden md:inline">Tìm kiếm...</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded shadow-sm text-slate-500">Ctrl K</kbd>
        </button>

        <button type="button" onclick="toggleDarkMode()" class="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm transition" title="Chuyển đổi giao diện Sáng / Tối">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>

        <a href="../index.html" class="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm transition shadow-sm shadow-rose-600/30">
          <i class="fa-solid fa-house text-xs"></i>
          <span>Trang chủ</span>
        </a>
      </div>
    </div>
  </header>

  <!-- MAIN WRAPPER -->
  <div class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex gap-8">
    
    <!-- DESKTOP SIDEBAR -->
    <aside id="sidebar" class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 space-y-4">
        ${sidebarHtml}
      </div>
    </aside>

    <!-- MOBILE SIDEBAR DRAWER -->
    <div id="mobile-sidebar" class="fixed inset-0 z-50 lg:hidden hidden">
      <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="toggleSidebar()"></div>
      <div class="fixed top-0 bottom-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-y-auto z-10 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <span class="font-extrabold text-base text-slate-900 dark:text-white">Mục Lục Âm Nhạc 11</span>
          <button type="button" onclick="toggleSidebar()" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
        ${sidebarHtml}
      </div>
    </div>

    <!-- MAIN CONTENT AREA -->
    <main class="flex-1 min-w-0 space-y-8">
      
      <!-- HERO BANNER -->
      <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 via-rose-700 to-pink-800 text-white p-6 sm:p-10 shadow-lg shadow-rose-900/20">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold tracking-wide">
            <i class="fa-solid fa-award text-amber-300"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
          </div>
          <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            ÂM NHẠC 11 — HỆ THỐNG KIẾN THỨC ĐẦY ĐỦ THEO BÀI
          </h2>
          <p class="text-xs sm:text-sm text-rose-100 leading-relaxed font-normal">
            Bản số hóa học liệu chuyên sâu: <strong>Phần chung (4 Chủ đề • 16 Bài)</strong> và hai lộ trình lựa chọn độc lập: <strong>Hát (4 Bài)</strong> hoặc <strong>Nhạc cụ: Guitar (6 Bài)</strong>. Trình bày tách dòng khoa học, đầy đủ 6 sơ đồ tư duy vector SVG, 12 thuật ngữ và Đấu trường trắc nghiệm 45 phút.
          </p>
          <div class="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 16 Bài Chung</span>
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-teal-400 mr-1"></i> 4 Bài Hát</span>
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-amber-400 mr-1"></i> 6 Bài Guitar</span>
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-rose-300 mr-1"></i> 6 Sơ đồ SVG</span>
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-indigo-300 mr-1"></i> 20 Câu Đấu trường 45p</span>
          </div>
        </div>
        <!-- Decorative SVG Music Clef -->
        <div class="absolute -right-6 -bottom-6 opacity-10 pointer-events-none w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center font-serif text-[180px]">
          𝄞
        </div>
      </section>

      <!-- PHẦN KIẾN THỨC CHUNG -->
      <section class="space-y-8">
        ${generalLessonsHtml}
      </section>

      <!-- PHẦN LỰA CHỌN A: HÁT -->
      <section class="space-y-8">
        ${vocalLessonsHtml}
      </section>

      <!-- PHẦN LỰA CHỌN B: GUITAR -->
      <section class="space-y-8">
        ${guitarLessonsHtml}
      </section>

      <!-- THUẬT NGỮ VÀ KỸ NĂNG -->
      <section class="space-y-8">
        ${termsHtml}
      </section>

      <!-- ĐẤU TRƯỜNG 45 PHÚT -->
      <section class="space-y-8">
        ${arenaHtml}
      </section>
    </main>
  </div>

  <!-- SEARCH MODAL (Ctrl + K) -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden">
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeSearchModal()"></div>
    <div class="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-10">
      <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <i class="fa-solid fa-magnifying-glass text-slate-400 text-base"></i>
          <input type="text" id="search-input" oninput="handleSearch()" placeholder="Tìm kiếm bài hát, hợp âm, tác giả (VD: Pha trưởng, Mozart, Legato, Guitar, Slow)..." class="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none">
          <button type="button" onclick="closeSearchModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <kbd class="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">ESC</kbd>
          </button>
        </div>
        <div id="search-results" class="max-h-96 overflow-y-auto p-4 space-y-2">
          <!-- Dynamic Results -->
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 transition-colors">
    <div class="max-w-7xl mx-auto px-4 text-center space-y-3">
      <div class="flex items-center justify-center gap-2">
        <div class="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold">
          <i class="fa-solid fa-music"></i>
        </div>
        <span class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">Âm Nhạc 11 – Kết Nối Tri Thức Với Cuộc Sống</span>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        Tài liệu học tập trực tuyến chuẩn hoá theo cấu trúc SGK Kết nối tri thức. Giữ riêng hai lộ trình Hát và Nhạc cụ guitar linh hoạt.
      </p>
      <div class="text-[11px] text-slate-400 pt-2">
        © 2026 CS-Learning Platform • Phiên bản số hoá hoàn thiện
      </div>
    </div>
  </footer>

  <!-- DATA & SCRIPTS -->
  <script>
    // Search Index
    const searchData = ${JSON.stringify(searchIndex)};
    const arenaQuestions = ${JSON.stringify(arenaQuestions)};

    // Dark Mode Toggle
    function initTheme() {
      if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-icon').className = 'fa-solid fa-sun text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-icon').className = 'fa-solid fa-moon text-slate-600';
      }
    }
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-icon').className = 'fa-solid fa-moon text-slate-600';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-icon').className = 'fa-solid fa-sun text-amber-400';
      }
    }
    initTheme();

    // Mobile Sidebar Drawer
    function toggleSidebar() {
      const mb = document.getElementById('mobile-sidebar');
      mb.classList.toggle('hidden');
    }

    // Scrollspy for Active Sidebar Link
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      let current = '';
      const articles = document.querySelectorAll('article[id]');
      articles.forEach(article => {
        const top = article.offsetTop - 120;
        if (window.scrollY >= top) {
          current = article.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });

    // Mark Lesson Read / Completed
    function toggleLessonComplete(lessonKey) {
      const btn = document.getElementById('btn-read-' + lessonKey);
      const icon = document.getElementById('icon-read-' + lessonKey);
      const text = document.getElementById('text-read-' + lessonKey);
      const isDone = btn.getAttribute('data-done') === 'true';

      if (!isDone) {
        btn.setAttribute('data-done', 'true');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-700', 'dark:text-emerald-300', 'border-emerald-300');
        icon.className = 'fa-solid fa-circle-check text-emerald-500';
        text.innerText = 'Đã hoàn thành';
      } else {
        btn.setAttribute('data-done', 'false');
        btn.classList.remove('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-700', 'dark:text-emerald-300', 'border-emerald-300');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        icon.className = 'fa-regular fa-circle-check text-slate-400';
        text.innerText = 'Đánh dấu đã học';
      }
    }

    // Lesson Quiz Checker
    function checkLessonQuiz(lessonKey, qIdx, chosenIdx, correctIdx) {
      const expDiv = document.getElementById('exp-' + lessonKey + '-' + qIdx);
      const totalOptions = 4;

      for (let i = 0; i < totalOptions; i++) {
        const optBtn = document.getElementById('opt-' + lessonKey + '-' + qIdx + '-' + i);
        if (!optBtn) continue;
        optBtn.disabled = true;
        if (i === correctIdx) {
          optBtn.className = 'text-left px-3.5 py-2.5 rounded-xl border border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold flex items-start gap-2.5';
        } else if (i === chosenIdx && chosenIdx !== correctIdx) {
          optBtn.className = 'text-left px-3.5 py-2.5 rounded-xl border border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 text-xs sm:text-sm flex items-start gap-2.5';
        } else {
          optBtn.className = 'text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 text-xs sm:text-sm flex items-start gap-2.5 opacity-60';
        }
      }

      expDiv.classList.remove('hidden');
      const explainText = expDiv.getAttribute('data-explain') || '';
      if (chosenIdx === correctIdx) {
        expDiv.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-1';
        expDiv.innerHTML = '<div class="font-bold"><i class="fa-solid fa-check text-emerald-600"></i> Chính xác!</div>' + (explainText ? '<div class="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">' + explainText + '</div>' : '');
      } else {
        expDiv.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 space-y-1';
        expDiv.innerHTML = '<div class="font-bold"><i class="fa-solid fa-xmark text-rose-600"></i> Chưa chính xác. (Đáp án đúng: ' + String.fromCharCode(65 + correctIdx) + ')</div>' + (explainText ? '<div class="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">' + explainText + '</div>' : '');
      }
    }

    // Arena Exam Timer & Submitter
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;

    function startArenaExam() {
      const btn = document.getElementById('btn-start-arena');
      btn.disabled = true;
      btn.innerText = 'Đang làm bài...';
      btn.classList.add('opacity-50', 'cursor-not-allowed');

      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        arenaSecondsLeft--;
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          submitArenaExam();
          alert('Hết giờ làm bài 45 phút! Hệ thống đã tự động nộp bài.');
        } else {
          const m = Math.floor(arenaSecondsLeft / 60);
          const s = arenaSecondsLeft % 60;
          document.getElementById('arena-timer').innerText = 
            (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        }
      }, 1000);
    }

    function submitArenaExam() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      let score = 0;

      arenaQuestions.forEach((q, idx) => {
        const radios = document.getElementsByName('arena_' + idx);
        let selected = -1;
        for (let r of radios) {
          if (r.checked) {
            selected = parseInt(r.value);
            break;
          }
        }

        const expDiv = document.getElementById('arena-exp-' + idx);
        expDiv.classList.remove('hidden');

        if (selected === q.ans) {
          score++;
          expDiv.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expDiv.innerHTML = '<strong>Đúng!</strong> ' + q.exp;
        } else {
          expDiv.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expDiv.innerHTML = '<strong>Sai (Đáp án đúng: ' + String.fromCharCode(65 + q.ans) + ')</strong>: ' + q.exp;
        }
      });

      const resBox = document.getElementById('arena-result');
      const percentage = Math.round((score / arenaQuestions.length) * 100);
      resBox.innerHTML = '<span class="text-emerald-600 dark:text-emerald-400 font-extrabold text-lg sm:text-xl">Kết quả: ' + score + '/' + arenaQuestions.length + ' câu (' + percentage + '%)</span>';
      resBox.scrollIntoView({ behavior: 'smooth' });
    }

    // Search Modal Functions
    function openSearchModal() {
      document.getElementById('search-modal').classList.remove('hidden');
      document.getElementById('search-input').focus();
    }
    function closeSearchModal() {
      document.getElementById('search-modal').classList.add('hidden');
    }
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
      }
    });

    function handleSearch() {
      const q = document.getElementById('search-input').value.toLowerCase().trim();
      const container = document.getElementById('search-results');
      if (!q) {
        container.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tìm kiếm bài học, tác phẩm hoặc kĩ thuật (VD: Pha trưởng, Mozart, Legato, Guitar)...</p>';
        return;
      }

      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) || 
        item.badge.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Không tìm thấy nội dung phù hợp với từ khoá.</p>';
        return;
      }

      container.innerHTML = filtered.map(item => \`
        <a href="#\${item.id}" onclick="closeSearchModal()" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">\${item.badge}</span>
            <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">\${item.title}</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">\${item.desc}</p>
        </a>
      \`).join('');
    }
  </script>
</body>
</html>`;

  // Write to courses/amnhac_11.html and courses/nhac_11.html
  const path1 = path.join(__dirname, '../courses/amnhac_11.html');
  const path2 = path.join(__dirname, '../courses/nhac_11.html');

  fs.writeFileSync(path1, finalHtml, 'utf8');
  fs.writeFileSync(path2, finalHtml, 'utf8');

  console.log(`Successfully built:`);
  console.log(`- ${path1} (${finalHtml.length.toLocaleString()} bytes)`);
  console.log(`- ${path2} (${finalHtml.length.toLocaleString()} bytes)`);
}

buildHtml();
