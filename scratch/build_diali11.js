// scratch/build_diali11.js
// Script tạo trang HTML hoàn chỉnh cho môn Địa lí 11 (KNTT)
// Đảm bảo không rò rỉ undefined, [object Object], không dính chùm bullet

const fs = require('fs');
const path = require('path');
const data = require('./diali11_data.js');

function formatItemContent(item) {
  if (typeof item === 'string') {
    return `
      <div class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <span class="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0 shadow-sm"></span>
        <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">
          ${item}
        </div>
      </div>
    `;
  }

  if (typeof item === 'object' && item !== null) {
    let innerHtml = '';
    
    if (item.badge) {
      innerHtml += `<span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 uppercase tracking-wider mb-2">${item.badge}</span>`;
    }
    
    if (item.title) {
      innerHtml += `
        <h4 class="font-bold text-sm sm:text-base text-sky-900 dark:text-sky-200 mb-2 flex items-center gap-2">
          <i class="fa-solid fa-bookmark text-sky-500 text-xs"></i>
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
      // Split on bullets if multiple points are listed
      if (item.desc.includes('•')) {
        const parts = item.desc.split(/\n•|•/g).map(s => s.trim()).filter(Boolean);
        innerHtml += `
          <div class="space-y-2 mt-2">
            ${parts.map(pt => `
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></span>
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
      <div class="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/70 space-y-1 hover:border-sky-300 dark:hover:border-sky-600 transition">
        ${innerHtml}
      </div>
    `;
  }

  return '';
}

function buildHtml() {
  const { lessons, toolsAndSkills, arena_exam, svgs, meta } = data;

  // Build SVG map associative lookup
  const svgMap = {
    1: svgs.svg1_nhomnuoc,
    6: svgs.svg2_mylatinh,
    9: svgs.svg3_eu,
    13: svgs.svg4_asean,
    15: svgs.svg5_taynama,
    19: svgs.svg6_hoaky,
    26: svgs.svg7_trungquoc
  };

  // Build Sidebar Links
  let sidebarHtml = `
    <div class="space-y-4">
      <div>
        <div class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 rounded-lg mb-2">
          Phần I. Kinh tế - Xã hội thế giới
        </div>
        <ul class="space-y-1">
  `;

  for (let i = 1; i <= 5; i++) {
    const l = lessons[i];
    sidebarHtml += `
      <li>
        <a href="#bai-${i}" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 transition">
          <span class="w-6 h-6 rounded-lg bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold text-xs shrink-0">${i}</span>
          <span class="truncate">${l.title.replace(/^Bài \d+\.\s*/, '')}</span>
        </a>
      </li>
    `;
  }
  sidebarHtml += `</ul></div>`;

  // Part II
  sidebarHtml += `
    <div>
      <div class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 rounded-lg mb-2">
        Phần II. Địa lí khu vực & quốc gia
      </div>
      <div class="space-y-3">
  `;

  const part2Sub = meta.parts[1].subsections;
  part2Sub.forEach(sub => {
    sidebarHtml += `
      <div>
        <div class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase px-3 py-1 tracking-wider">${sub.name}</div>
        <ul class="space-y-0.5">
    `;
    sub.lessons.forEach(num => {
      const l = lessons[num];
      sidebarHtml += `
        <li>
          <a href="#bai-${num}" class="nav-link flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 transition">
            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold text-[11px] shrink-0">${num}</span>
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
    <!-- Special Tools & Exam -->
    <div class="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
      <a href="#cong-cu-ky-nang" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition">
        <i class="fa-solid fa-compass text-teal-500"></i>
        <span>Công cụ & Kỹ năng địa lí</span>
      </a>
      <a href="#dau-truong-45p" class="nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800 transition">
        <i class="fa-solid fa-trophy text-amber-500"></i>
        <span>Đấu trường 45 phút</span>
      </a>
    </div>
  </div>`;

  // Build Lessons Content HTML
  let lessonsHtml = '';
  for (let i = 1; i <= 31; i++) {
    const l = lessons[i];
    const svgObj = svgMap[i];

    lessonsHtml += `
      <article id="bai-${i}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-8">
        <!-- Lesson Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 uppercase tracking-wide">
                Bài ${i}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                ${l.part || (i <= 5 ? 'Phần I' : 'Phần II')}
              </span>
              ${l.topic ? `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">${l.topic}</span>` : ''}
              ${l.badge ? `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${l.badge}</span>` : ''}
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              ${l.title}
            </h2>
          </div>
          <button type="button" onclick="toggleLessonComplete(${i})" id="btn-read-${i}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/50 border border-slate-200 dark:border-slate-700 self-start sm:self-auto shrink-0">
            <i id="icon-read-${i}" class="fa-regular fa-circle-check text-slate-400"></i>
            <span id="text-read-${i}">Đánh dấu đã học</span>
          </button>
        </div>

        <!-- Objectives -->
        <div class="p-5 sm:p-6 rounded-2xl bg-sky-50/70 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40 space-y-3">
          <h4 class="font-bold text-sm sm:text-base text-sky-900 dark:text-sky-200 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-sky-600 dark:text-sky-400"></i> Mục tiêu bài học cần đạt
          </h4>
          <div class="space-y-2">
            ${l.objectives.map(obj => `
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <i class="fa-solid fa-check text-sky-500 text-xs mt-1 shrink-0"></i>
                <span class="leading-relaxed sm:leading-loose">${obj}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- SVG Visual Diagram (if any) -->
        ${svgObj ? `
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700/60">
              <span class="text-xs sm:text-sm font-bold text-sky-700 dark:text-sky-300 flex items-center gap-2">
                <i class="fa-solid fa-map-location-dot"></i> ${svgObj.title}
              </span>
              <span class="text-[11px] text-slate-500 dark:text-slate-400">${svgObj.caption}</span>
            </div>
            <div class="p-2 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex justify-center overflow-x-auto shadow-inner">
              ${svgObj.svg}
            </div>
          </div>
        ` : ''}

        <!-- Sections Content (Handled flexibly for strings and objects) -->
        <div class="space-y-6">
          ${l.sections.map(sec => {
            const secHeading = sec.title || sec.heading || '';
            const isGrid = sec.type === 'grid';
            return `
              <div class="space-y-3">
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
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
              <i class="fa-solid fa-circle-question text-emerald-500"></i>
              <span>Luyện tập nhanh Bài ${i} (3 câu trắc nghiệm)</span>
            </h4>
            <span class="text-xs text-slate-500 dark:text-slate-400">Chọn phương án đúng</span>
          </div>

          <div class="space-y-4">
            ${l.quiz.map((qObj, qIdx) => {
              const correctAns = qObj.answer !== undefined ? qObj.answer : qObj.ans;
              return `
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-3" id="quiz-${i}-${qIdx}">
                <p class="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  <strong>Câu ${qIdx + 1}:</strong> ${qObj.q}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${qObj.options.map((opt, optIdx) => `
                    <button type="button" onclick="checkLessonQuiz(${i}, ${qIdx}, ${optIdx}, ${correctAns})" id="opt-${i}-${qIdx}-${optIdx}" class="text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-sky-400 transition flex items-start gap-2.5">
                      <span class="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ${String.fromCharCode(65 + optIdx)}
                      </span>
                      <span class="leading-relaxed">${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div id="exp-${i}-${qIdx}" class="hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed transition" data-explain="${(qObj.explanation || qObj.explain || '').replace(/"/g, '&quot;')}"></div>
              </div>
            `;}).join('')}
          </div>
        </div>
      </article>
    `;
  }

  // Build Tools & Skills Section HTML
  let toolsHtml = `
    <article id="cong-cu-ky-nang" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-900/60 shadow-sm space-y-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-teal-100 dark:border-teal-900/40">
        <div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 uppercase tracking-wide">
            Cẩm nang thực hành
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Công cụ và kỹ năng địa lí
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Đọc bản đồ • Sơ đồ chọn dạng biểu đồ • Công cụ tính toán tương tác 5 công thức • Viết báo cáo địa lí
          </p>
        </div>
      </div>

      <!-- Sơ đồ tư duy chọn biểu đồ (SVG 8) -->
      <div class="p-5 sm:p-6 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/50 space-y-3">
        <h3 class="font-bold text-sm sm:text-base text-teal-900 dark:text-teal-200 flex items-center gap-2">
          <i class="fa-solid fa-chart-pie text-teal-600"></i> ${svgs.svg8_bieudo.title}
        </h3>
        <p class="text-xs text-slate-600 dark:text-slate-400">${svgs.svg8_bieudo.caption}</p>
        <div class="p-2 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/40 flex justify-center overflow-x-auto shadow-inner">
          ${svgs.svg8_bieudo.svg}
        </div>
      </div>

      <!-- Sections in Tools -->
      <div class="space-y-6">
        ${toolsAndSkills.sections.map(sec => {
          const secTitle = sec.title || sec.heading || '';
          return `
            <div class="space-y-3">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                <span>${secTitle}</span>
              </h3>

              ${sec.type === 'formulas' ? `
                <!-- Formula Cards with Interactive Calculators -->
                <div class="space-y-5">
                  ${sec.items.map((f, fIdx) => `
                    <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-4">
                      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
                        <div>
                          <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300">Công thức ${fIdx + 1}</span>
                          <h4 class="text-base font-bold text-slate-900 dark:text-white mt-1">${f.name} (Đơn vị: ${f.unit})</h4>
                        </div>
                        <span class="text-xs text-slate-500 dark:text-slate-400 italic">${f.desc}</span>
                      </div>

                      <!-- LaTeX Display Box -->
                      <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-teal-200/80 dark:border-teal-800/60 text-center font-mono text-sm sm:text-base font-bold text-teal-900 dark:text-teal-200 shadow-sm overflow-x-auto">
                        $$${f.formula}$$
                      </div>

                      <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-sky-50/50 dark:bg-sky-950/20 p-3 rounded-xl border border-sky-100 dark:border-sky-900/40">
                        <strong>Ví dụ SGK:</strong> ${f.example}
                      </div>

                      <!-- Interactive Calculator Widget -->
                      <div class="p-4 rounded-xl bg-teal-50/70 dark:bg-slate-900/70 border border-teal-200 dark:border-teal-900/60 space-y-3">
                        <div class="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wide flex items-center gap-1.5">
                          <i class="fa-solid fa-calculator text-teal-600"></i> Công cụ tính nhanh trực tiếp:
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          ${f.inputs.map(inp => `
                            <div>
                              <label class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">${inp.label}:</label>
                              <input type="number" id="${inp.id}" value="${inp.default}" class="w-full px-3 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                            </div>
                          `).join('')}
                        </div>
                        <div class="flex items-center gap-3 pt-1">
                          <button type="button" onclick="runCalculator('${f.id}')" class="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5 shadow-sm">
                            <i class="fa-solid fa-play text-xs"></i> Tính kết quả
                          </button>
                          <div id="res-${f.id}" class="text-xs sm:text-sm font-bold text-teal-900 dark:text-teal-200"></div>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : sec.type === 'grid' ? `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  ${sec.items.map(card => `
                    <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/70 hover:border-teal-300 transition space-y-2">
                      <h4 class="font-bold text-sm text-teal-800 dark:text-teal-300">${card.title}</h4>
                      <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        ${card.desc}
                      </div>
                    </div>
                  `).join('')}
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
    </article>
  `;

  // Build Arena Exam HTML
  let arenaHtml = `
    <article id="dau-truong-45p" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 shadow-sm space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-100 dark:border-amber-900/40">
        <div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase tracking-wide">
            Đánh giá toàn diện
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Đấu trường Địa lí 11 (20 câu • 45 phút)
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Đề thi trắc nghiệm chuẩn cấu trúc bao quát toàn bộ 2 Phần, 31 Bài học và Kỹ năng tính toán địa lí
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-mono font-bold text-sm sm:text-base">
            <i class="fa-regular fa-clock text-amber-600"></i>
            <span id="arena-timer">45:00</span>
          </div>
          <button type="button" onclick="startArenaExam()" id="btn-start-arena" class="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition shadow-sm">
            Bắt đầu làm bài
          </button>
        </div>
      </div>

      <!-- Arena Questions Container -->
      <div id="arena-container" class="space-y-5">
        ${arena_exam.map((qObj, idx) => `
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-3" id="arena-q-${idx}">
            <div class="flex items-start justify-between gap-3">
              <p class="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white leading-relaxed">
                <span class="inline-block w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-center font-bold text-xs leading-6 mr-1.5">${idx + 1}</span>
                ${qObj.q}
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              ${qObj.options.map((opt, optIdx) => `
                <label class="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer">
                  <input type="radio" name="arena_${idx}" value="${optIdx}" class="mt-1 text-amber-600 focus:ring-amber-500">
                  <span class="leading-relaxed"><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}</span>
                </label>
              `).join('')}
            </div>
            <div id="arena-exp-${idx}" class="hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed transition"></div>
          </div>
        `).join('')}
      </div>

      <!-- Submit and Results -->
      <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button type="button" onclick="submitArenaExam()" id="btn-submit-arena" class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base transition shadow-md flex items-center justify-center gap-2">
          <i class="fa-solid fa-paper-plane"></i> Nộp bài & Chấm điểm
        </button>
        <div id="arena-result" class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200"></div>
      </div>
    </article>
  `;

  // Search Index Generation
  const searchIndex = [];
  for (let i = 1; i <= 31; i++) {
    const l = lessons[i];
    searchIndex.push({
      id: `bai-${i}`,
      badge: `Bài ${i}`,
      title: l.title,
      desc: l.objectives.join(' • ')
    });
  }
  searchIndex.push({
    id: "cong-cu-ky-nang",
    badge: "Kỹ năng",
    title: "Công cụ và kỹ năng địa lí",
    desc: "Đọc bản đồ, sơ đồ chọn dạng biểu đồ, 5 công thức tính toán và viết báo cáo địa lí."
  });
  searchIndex.push({
    id: "dau-truong-45p",
    badge: "Đấu trường",
    title: "Đấu trường Địa lí 11 (20 câu • 45 phút)",
    desc: "Đề thi thử trắc nghiệm tổng hợp toàn diện chương trình Địa lí 11."
  });

  // Full HTML Template
  const finalHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Địa Lí 11 – Hệ Thống Kiến Thức Đầy Đủ Theo Bài (Bộ Kết Nối Tri Thức Với Cuộc Sống)</title>
  <meta name="description" content="Tài liệu số hoá toàn diện Địa lí 11 Kết nối tri thức với cuộc sống: Đủ 2 phần, 31 bài học, công cụ kỹ năng, công thức tính toán tương tác, 8 sơ đồ SVG và đấu trường trắc nghiệm.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- KaTeX CSS & JS (Safe auto-render limited strictly to $$ and $) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

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
              50: '#f0f9ff',
              100: '#e0f2fe',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
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
    ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    ::-webkit-scrollbar-thumb:hover { background: #64748b; }

    .nav-link.active {
      background-color: #e0f2fe;
      color: #0369a1;
      font-weight: 700;
      border-left: 3px solid #0284c7;
    }
    .dark .nav-link.active {
      background-color: rgba(12, 74, 110, 0.4);
      color: #7dd3fc;
      border-left-color: #38bdf8;
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
        <a href="diali_11.html" class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-teal-400 flex items-center justify-center text-white font-black text-lg shadow-md shadow-sky-500/20">
            <i class="fa-solid fa-earth-americas"></i>
          </div>
          <div>
            <h1 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
              Địa Lí 11 <span class="hidden sm:inline text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 ml-1">KNTT</span>
            </h1>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-none">Hệ thống kiến thức đủ 31 bài & kỹ năng</p>
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

        <a href="../index.html" class="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition shadow-sm shadow-sky-600/30">
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
          <span class="font-extrabold text-base text-slate-900 dark:text-white">Mục Lục Địa Lí 11</span>
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
      <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-teal-800 text-white p-6 sm:p-10 shadow-lg shadow-sky-900/20">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold tracking-wide">
            <i class="fa-solid fa-award text-amber-300"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
          </div>
          <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            ĐỊA LÍ 11 — HỆ THỐNG KIẾN THỨC ĐẦY ĐỦ THEO BÀI
          </h2>
          <p class="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
            Bản số hóa học liệu chuyên sâu: <strong>2 Phần • 31 Bài học • 8 Lược đồ vector SVG • 5 Công thức tính toán tương tác • Đấu trường trắc nghiệm 45 phút</strong>. Trình bày giãn cách khoa học, rõ ràng từng ý, tránh tuyệt đối lỗi dính chùm văn bản.
          </p>
          <div class="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> Đủ 31 Bài học</span>
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 8 Sơ đồ SVG</span>
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 93 Câu trắc nghiệm bài</span>
            <span class="px-3 py-1 rounded-lg bg-black/25 backdrop-blur-sm"><i class="fa-solid fa-check text-emerald-400 mr-1"></i> 20 Câu Đấu trường 45p</span>
          </div>
        </div>
        <!-- Decorative SVG World Globe -->
        <div class="absolute -right-10 -bottom-10 opacity-10 pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0 A 100 100 0 1 0 100 200 A 100 100 0 1 0 100 0 Z M 100 20 A 80 80 0 1 1 100 180 A 80 80 0 1 1 100 20 Z"/>
          </svg>
        </div>
      </section>

      <!-- 31 LESSONS CONTAINER -->
      <section class="space-y-8">
        ${lessonsHtml}
      </section>

      <!-- TOOLS AND SKILLS SECTION -->
      <section class="space-y-8">
        ${toolsHtml}
      </section>

      <!-- ARENA EXAM 45 MIN -->
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
          <input type="text" id="search-input" oninput="handleSearch()" placeholder="Tìm kiếm bài học, quốc gia, khái niệm (VD: ASEAN, Nga, biểu đồ, GNI)..." class="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none">
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
        <div class="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
          <i class="fa-solid fa-earth-americas"></i>
        </div>
        <span class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">Địa Lí 11 – Kết Nối Tri Thức Với Cuộc Sống</span>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        Tài liệu học tập trực tuyến bám sát chuẩn kiến thức, kỹ năng SGK Kết nối tri thức. 
        Tối ưu hoá giao diện thoáng đãng, thân thiện với học sinh và giáo viên.
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
    const arenaQuestions = ${JSON.stringify(arena_exam)};

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
    function toggleLessonComplete(num) {
      const btn = document.getElementById('btn-read-' + num);
      const icon = document.getElementById('icon-read-' + num);
      const text = document.getElementById('text-read-' + num);
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

    // Lesson 3-Question Quiz Checker
    function checkLessonQuiz(lessonNum, qIdx, chosenIdx, correctIdx) {
      const expDiv = document.getElementById('exp-' + lessonNum + '-' + qIdx);
      const totalOptions = 4;

      for (let i = 0; i < totalOptions; i++) {
        const optBtn = document.getElementById('opt-' + lessonNum + '-' + qIdx + '-' + i);
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

    // Interactive Formula Calculator
    function runCalculator(formulaId) {
      const resEl = document.getElementById('res-' + formulaId);
      if (!resEl) return;

      if (formulaId === 'formula-density') {
        const pop = parseFloat(document.getElementById('calc_pop').value);
        const area = parseFloat(document.getElementById('calc_area').value);
        if (!pop || !area || area <= 0) {
          resEl.innerText = 'Vui lòng nhập số hợp lệ!';
          return;
        }
        resEl.innerText = '= ' + (pop / area).toFixed(1) + ' người/km²';
      } else if (formulaId === 'formula-gdp-capita') {
        const gdp = parseFloat(document.getElementById('calc_gdp').value);
        const pop = parseFloat(document.getElementById('calc_gdp_pop').value);
        if (!gdp || !pop || pop <= 0) {
          resEl.innerText = 'Vui lòng nhập số hợp lệ!';
          return;
        }
        resEl.innerText = '= ' + Math.round(gdp / pop).toLocaleString('en-US') + ' USD/người';
      } else if (formulaId === 'formula-share') {
        const part = parseFloat(document.getElementById('calc_part').value);
        const total = parseFloat(document.getElementById('calc_total').value);
        if (isNaN(part) || !total || total <= 0) {
          resEl.innerText = 'Vui lòng nhập số hợp lệ!';
          return;
        }
        resEl.innerText = '= ' + ((part / total) * 100).toFixed(2) + ' %';
      } else if (formulaId === 'formula-trade-balance') {
        const exp = parseFloat(document.getElementById('calc_exp').value);
        const imp = parseFloat(document.getElementById('calc_imp').value);
        if (isNaN(exp) || isNaN(imp)) {
          resEl.innerText = 'Vui lòng nhập số hợp lệ!';
          return;
        }
        const diff = exp - imp;
        resEl.innerText = '= ' + (diff >= 0 ? '+' : '') + diff.toFixed(1) + ' tỉ USD (' + (diff >= 0 ? 'Xuất siêu' : 'Nhập siêu') + ')';
      } else if (formulaId === 'formula-growth-rate') {
        const yN = parseFloat(document.getElementById('calc_year_n').value);
        const y0 = parseFloat(document.getElementById('calc_year_0').value);
        if (!yN || !y0 || y0 <= 0) {
          resEl.innerText = 'Vui lòng nhập số hợp lệ!';
          return;
        }
        const rate = ((yN / y0) * 100).toFixed(1);
        const delta = (rate - 100).toFixed(1);
        resEl.innerText = '= ' + rate + ' % (Tăng ' + (delta >= 0 ? '+' : '') + delta + '% so với năm gốc)';
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

        if (selected === q.answer) {
          score++;
          expDiv.className = 'p-3 rounded-xl text-xs sm:text-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expDiv.innerHTML = '<strong>Đúng!</strong> ' + q.explanation;
        } else {
          expDiv.className = 'p-3 rounded-xl text-xs sm:text-sm bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expDiv.innerHTML = '<strong>Sai (Đáp án đúng: ' + String.fromCharCode(65 + q.answer) + ')</strong>: ' + q.explanation;
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
        container.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tìm kiếm bài học, quốc gia hoặc kỹ năng...</p>';
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
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">\${item.badge}</span>
            <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">\${item.title}</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">\${item.desc}</p>
        </a>
      \`).join('');
    }

    // Safe KaTeX Auto-render (Only triggers on $$ and $)
    function renderMathSafely() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
    document.addEventListener('DOMContentLoaded', renderMathSafely);
    window.addEventListener('load', renderMathSafely);
  </script>
</body>
</html>`;

  // Write to both courses/diali_11.html and courses/dia_11.html
  const path1 = path.join(__dirname, '../courses/diali_11.html');
  const path2 = path.join(__dirname, '../courses/dia_11.html');

  fs.writeFileSync(path1, finalHtml, 'utf8');
  fs.writeFileSync(path2, finalHtml, 'utf8');

  console.log(`Successfully built:`);
  console.log(`- ${path1} (${finalHtml.length.toLocaleString()} bytes)`);
  console.log(`- ${path2} (${finalHtml.length.toLocaleString()} bytes)`);
}

buildHtml();
