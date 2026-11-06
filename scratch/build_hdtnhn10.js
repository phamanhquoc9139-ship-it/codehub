const fs = require('fs');
const path = require('path');
const { streams, topics: topicsObj, productMapTable, glossaryTerms } = require('./hdtnhn10_data.js');
const topics = Array.isArray(topicsObj) ? topicsObj : Object.keys(topicsObj).map(k => topicsObj[k]);
const { diagrams } = require('./hdtnhn10_diagrams.js');
const { quizzes } = require('./hdtnhn10_quizzes.js');

const colorMap = {
  rose: {
    bgLight: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'border-rose-200 dark:border-rose-800/60',
    text: 'text-rose-700 dark:text-rose-300',
    badge: 'bg-rose-600 text-white',
    pill: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300',
    btn: 'bg-rose-600 hover:bg-rose-700 text-white'
  },
  indigo: {
    bgLight: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-200 dark:border-indigo-800/60',
    text: 'text-indigo-700 dark:text-indigo-300',
    badge: 'bg-indigo-600 text-white',
    pill: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300',
    btn: 'bg-indigo-600 hover:bg-indigo-700 text-white'
  },
  violet: {
    bgLight: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-200 dark:border-violet-800/60',
    text: 'text-violet-700 dark:text-violet-300',
    badge: 'bg-violet-600 text-white',
    pill: 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300',
    btn: 'bg-violet-600 hover:bg-violet-700 text-white'
  },
  sky: {
    bgLight: 'bg-sky-50 dark:bg-sky-950/30',
    border: 'border-sky-200 dark:border-sky-800/60',
    text: 'text-sky-700 dark:text-sky-300',
    badge: 'bg-sky-600 text-white',
    pill: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300',
    btn: 'bg-sky-600 hover:bg-sky-700 text-white'
  },
  amber: {
    bgLight: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800/60',
    text: 'text-amber-700 dark:text-amber-300',
    badge: 'bg-amber-600 text-white',
    pill: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
    btn: 'bg-amber-600 hover:bg-amber-700 text-white'
  },
  orange: {
    bgLight: 'bg-orange-50 dark:bg-orange-950/30',
    border: 'border-orange-200 dark:border-orange-800/60',
    text: 'text-orange-700 dark:text-orange-300',
    badge: 'bg-orange-600 text-white',
    pill: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
    btn: 'bg-orange-600 hover:bg-orange-700 text-white'
  },
  emerald: {
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/60',
    text: 'text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-600 text-white',
    pill: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300',
    btn: 'bg-emerald-600 hover:bg-emerald-700 text-white'
  },
  teal: {
    bgLight: 'bg-teal-50 dark:bg-teal-950/30',
    border: 'border-teal-200 dark:border-teal-800/60',
    text: 'text-teal-700 dark:text-teal-300',
    badge: 'bg-teal-600 text-white',
    pill: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300',
    btn: 'bg-teal-600 hover:bg-teal-700 text-white'
  },
  blue: {
    bgLight: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800/60',
    text: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-600 text-white',
    pill: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    btn: 'bg-blue-600 hover:bg-blue-700 text-white'
  }
};

const streamIcons = { 'xa-hoi': 'fa-users', 'ban-than': 'fa-user-gear', 'tu-nhien': 'fa-leaf', 'huong-nghiep': 'fa-compass' };
function renderSidebar() {
  return streams.map(s => {
    const streamTopics = topics.filter(t => s.topics.includes(t.num));
    const icon = s.icon || streamIcons[s.id] || 'fa-layer-group';
    return `
      <div class="mb-4">
        <div class="px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <i class="fa-solid ${icon} text-indigo-500"></i>
          <span>${s.name}</span>
        </div>
        <div class="space-y-1 mt-1">
          ${streamTopics.map(t => `
            <a href="#chude-${t.num}" data-nav-topic="${t.num}" class="sidebar-topic-link group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800/80 transition-all">
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">${t.num}</span>
                <span class="truncate" title="Chủ đề ${t.num}. ${t.title}">${t.title}</span>
              </div>
              <span id="sidebar-badge-${t.num}" class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">${t.pages.replace('Trang ', 'tr.')}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }).join('') + `
    <div class="pt-2 border-t border-slate-200 dark:border-slate-800">
      <a href="#ban-do-san-pham-va-thuat-ngu" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/40 hover:bg-indigo-100 transition-all">
        <i class="fa-solid fa-map-location-dot text-sm"></i>
        <span>Bản đồ Sản phẩm &amp; Từ điển Thuật ngữ</span>
      </a>
    </div>
  `;
}

function formatProcessItem(p) {
  let s = p;
  // Convert inline (1) ...; (2) ... into separate lines
  s = s.replace(/:\s*\(1\)\s*/g, ':<div class="mt-1.5 space-y-1.5 pl-3 border-l-2 border-indigo-200 dark:border-indigo-800/70"><div class="flex items-start gap-2"><span class="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">(1)</span><span>');
  if (s.includes('<div class="mt-1.5 space-y-1.5 pl-3')) {
    s = s.replace(/;\s*\((\d+)\)\s*/g, '</span></div><div class="flex items-start gap-2"><span class="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">($1)</span><span>');
    s += '</span></div></div>';
  }
  // Convert <br>• or <br>1. into clean spaced sub-blocks
  if (s.includes('<br>')) {
    const parts = s.split('<br>');
    const head = parts[0];
    const rest = parts.slice(1).map(line => `<div class="py-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">${line.trim()}</div>`).join('');
    s = `<div>${head}</div><div class="mt-1.5 space-y-1">${rest}</div>`;
  }
  // If a plain long sentence has multiple semicolons outside HTML tags and no sub-blocks yet, split each clause onto its own line
  if (!s.includes('<div') && (s.match(/;\s+/g) || []).length >= 2) {
    const colonIdx = s.indexOf('</strong>');
    if (colonIdx !== -1 && s.slice(0, colonIdx).includes(':')) {
      const prefix = s.slice(0, colonIdx + 9);
      const body = s.slice(colonIdx + 9).trim();
      const items = body.split(/;\s+/).map(x => x.trim()).filter(Boolean);
      s = `<div>${prefix}</div><div class="mt-1.5 space-y-1 pl-3 border-l-2 border-slate-200 dark:border-slate-700">${items.map(it => `<div class="py-0.5">• ${it.charAt(0).toUpperCase() + it.slice(1)}</div>`).join('')}</div>`;
    } else {
      const items = s.split(/;\s+/).map(x => x.trim()).filter(Boolean);
      s = `<div class="space-y-1">${items.map(it => `<div class="py-0.5">• ${it.charAt(0).toUpperCase() + it.slice(1)}</div>`).join('')}</div>`;
    }
  }
  return s;
}

function renderTopicCard(t) {
  const c = colorMap[t.color] || colorMap.indigo;
  const qs = quizzes[t.num] || [];
  const svg = diagrams[t.num] || '';

  return `
    <article id="chude-${t.num}" data-topic-card="${t.num}" class="topic-card bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden scroll-mt-24 transition-all">
      <!-- Header -->
      <div class="p-6 sm:p-8 ${c.bgLight} border-b ${c.border}">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${c.badge}">Chủ đề ${t.num}</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold ${c.pill}">${t.stream}</span>
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"><i class="fa-regular fa-file-lines mr-1"></i>SGK ${t.pages}</span>
          </div>
          <button onclick="markTopicCompleted(${t.num})" id="btn-complete-${t.num}" class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 transition-all flex items-center gap-1.5">
            <i class="fa-regular fa-circle-check text-emerald-500"></i>
            <span>Đánh dấu hoàn thành</span>
          </button>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Chủ đề ${t.num}. ${t.title}</h2>
        <p class="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">${t.subtitle}</p>
        <!-- Quick Jump Sub-nav -->
        <div class="mt-5 flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs font-bold">
          <a href="#cd${t.num}-muc-tieu" class="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 shadow-2xs">A. Mục tiêu cốt lõi</a>
          <a href="#cd${t.num}-hoat-dong" class="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 shadow-2xs">B. Chuỗi hoạt động (${t.activities.length})</a>
          <a href="#cd${t.num}-so-do" class="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 shadow-2xs">C. Sơ đồ quy trình</a>
          <a href="#cd${t.num}-san-pham" class="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 shadow-2xs">D. Hồ sơ sản phẩm &amp; Đánh giá</a>
          <a href="#cd${t.num}-trac-nghiem" class="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 shadow-2xs">E. Trắc nghiệm tình huống (${qs.length} câu)</a>
        </div>
      </div>

      <div class="p-6 sm:p-8 space-y-10">
        <!-- Phần A: Mục tiêu & Nội dung cốt lõi -->
        <section id="cd${t.num}-muc-tieu" class="scroll-mt-24">
          <div class="flex items-center gap-2.5 mb-4">
            <span class="w-8 h-8 rounded-xl ${c.badge} flex items-center justify-center font-bold text-sm">A</span>
            <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">Mục tiêu &amp; Nội dung cốt lõi</h3>
          </div>
          <div class="grid sm:grid-cols-1 gap-3">
            ${t.objectives.map((obj, idx) => `
              <div class="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70">
                <span class="w-6 h-6 rounded-full ${c.pill} font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">${obj}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Phần B: Các hoạt động và cách tiến hành -->
        <section id="cd${t.num}-hoat-dong" class="scroll-mt-24">
          <div class="flex items-center justify-between gap-2 mb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl ${c.badge} flex items-center justify-center font-bold text-sm">B</span>
              <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">Các hoạt động theo quy trình Khám phá – Rèn luyện – Vận dụng</h3>
            </div>
            <span class="text-xs font-semibold text-slate-500">${t.activities.length} hoạt động chuẩn SGK</span>
          </div>
          <div class="space-y-4">
            ${t.activities.map(act => {
              let phaseBadge = 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300';
              if (act.step.includes('Rèn luyện')) phaseBadge = 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300';
              if (act.step.includes('Vận dụng')) phaseBadge = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300';
              return `
                <div class="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40 overflow-hidden shadow-2xs">
                  <div class="px-5 py-3.5 bg-slate-50 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-2">
                    <h4 class="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">${act.name}</h4>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold ${phaseBadge}">${act.step}</span>
                  </div>
                  <div class="p-5 space-y-3 text-sm">
                    <div class="flex items-start gap-2.5">
                      <span class="font-bold text-indigo-600 dark:text-indigo-400 shrink-0"><i class="fa-solid fa-bullseye mr-1.5"></i>Mục tiêu:</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">${act.goal}</span>
                    </div>
                    <div>
                      <div class="font-bold text-slate-800 dark:text-slate-200 mb-2"><i class="fa-solid fa-list-check mr-1.5 text-amber-500"></i>Cách tiến hành &amp; Nhiệm vụ trọng tâm:</div>
                      <ul class="space-y-2.5 pl-5 list-disc text-slate-600 dark:text-slate-300">
                        ${act.process.map(p => `<li class="leading-relaxed">${formatProcessItem(p)}</li>`).join('')}
                      </ul>
                    </div>
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-start gap-2">
                      <span class="font-bold text-emerald-600 dark:text-emerald-400 shrink-0"><i class="fa-solid fa-box-archive mr-1.5"></i>Sản phẩm cần đạt:</span>
                      <span class="text-slate-800 dark:text-slate-100 font-semibold">${act.product}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Phần C: Sơ đồ quy trình trực quan -->
        <section id="cd${t.num}-so-do" class="scroll-mt-24">
          <div class="flex items-center gap-2.5 mb-4">
            <span class="w-8 h-8 rounded-xl ${c.badge} flex items-center justify-center font-bold text-sm">C</span>
            <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">Sơ đồ hóa quy trình &amp; Nội dung trọng tâm</h3>
          </div>
          <div class="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            ${svg}
            <p class="mt-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 italic"><i class="fa-solid fa-diagram-project mr-1"></i>${t.diagramCaption}</p>
          </div>
        </section>

        <!-- Phần D: Hồ sơ Sản phẩm thực hành, Vận dụng & Tự đánh giá Đạt/Chưa đạt -->
        <section id="cd${t.num}-san-pham" class="scroll-mt-24 space-y-6">
          <div class="flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-xl ${c.badge} flex items-center justify-center font-bold text-sm">D</span>
            <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">Hồ sơ Sản phẩm thực hành, Vận dụng &amp; Tiêu chí đánh giá</h3>
          </div>

          <!-- Interactive Portfolio Form -->
          <div class="rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/40 dark:bg-indigo-950/20 p-5 sm:p-6">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Hồ sơ học tập cá nhân (Lưu trên trình duyệt)</span>
                <h4 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5"><i class="fa-solid fa-pen-to-square mr-1.5 text-indigo-600"></i>${t.interactiveTemplate.title}</h4>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="savePortfolio(${t.num})" class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all">
                  <i class="fa-solid fa-floppy-disk mr-1"></i>Lưu hồ sơ Chủ đề ${t.num}
                </button>
                <span id="save-status-${t.num}" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hidden"><i class="fa-solid fa-check mr-1"></i>Đã lưu!</span>
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              ${t.interactiveTemplate.fields.map((f, fIdx) => `
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">${f.label}</label>
                  <textarea id="portfolio-${t.num}-${fIdx}" rows="2" placeholder="${f.placeholder}" class="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Vận dụng sau giờ học -->
          <div class="rounded-2xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20 p-5">
            <h4 class="font-extrabold text-emerald-900 dark:text-emerald-300 text-sm sm:text-base mb-2.5 flex items-center gap-2">
              <i class="fa-solid fa-seedling text-emerald-600"></i>
              <span>Hoạt động Vận dụng vào thực tiễn cuộc sống</span>
            </h4>
            <ul class="space-y-2 pl-5 list-disc text-sm text-slate-700 dark:text-slate-200">
              ${t.application.map(app => `<li class="leading-relaxed">${app}</li>`).join('')}
            </ul>
          </div>

          <!-- Bảng Tự đánh giá Đạt / Chưa đạt -->
          <div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden">
            <div class="px-5 py-3.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2">
              <h4 class="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                <i class="fa-solid fa-clipboard-check mr-1.5 text-indigo-600"></i>Bảng tiêu chí tự đánh giá cuối Chủ đề ${t.num} (Mức Đạt / Chưa đạt)
              </h4>
              <span id="eval-summary-${t.num}" class="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">0/${t.evaluationCriteria.length} tiêu chí Đạt</span>
            </div>
            <div class="divide-y divide-slate-200 dark:divide-slate-700/70">
              ${t.evaluationCriteria.map((crit, cIdx) => `
                <div class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                    <span class="font-bold text-slate-400">${cIdx + 1}.</span>
                    <span>${crit}</span>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <button type="button" onclick="setCriterionStatus(${t.num}, ${cIdx}, 'dat')" id="crit-dat-${t.num}-${cIdx}" class="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-emerald-500 transition-all">
                      <i class="fa-solid fa-check mr-1"></i>Đạt
                    </button>
                    <button type="button" onclick="setCriterionStatus(${t.num}, ${cIdx}, 'chuadat')" id="crit-chuadat-${t.num}-${cIdx}" class="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-rose-500 transition-all">
                      <i class="fa-solid fa-rotate mr-1"></i>Cần rèn thêm
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Phần E: Trắc nghiệm xử lý tình huống -->
        <section id="cd${t.num}-trac-nghiem" class="scroll-mt-24">
          <div class="flex items-center justify-between gap-2 mb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl ${c.badge} flex items-center justify-center font-bold text-sm">E</span>
              <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">Câu hỏi trắc nghiệm xử lý tình huống Chủ đề ${t.num}</h3>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${qs.length} câu hỏi</span>
          </div>
          <div class="grid gap-4">
            ${qs.map((item, qIdx) => `
              <div class="quiz-card p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/60 dark:bg-slate-800/40" data-quiz-id="cd${t.num}-q${qIdx}">
                <p class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-3">
                  <span class="text-indigo-600 dark:text-indigo-400 mr-1">Câu ${qIdx + 1}:</span>${item.q}
                </p>
                <div class="grid gap-2">
                  ${item.options.map((opt, oIdx) => `
                    <button type="button" onclick="checkTopicQuiz(${t.num}, ${qIdx}, ${oIdx}, ${item.ans})" id="btn-opt-${t.num}-${qIdx}-${oIdx}" class="text-left px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-all">
                      ${opt}
                    </button>
                  `).join('')}
                </div>
                <div id="exp-${t.num}-${qIdx}" class="hidden mt-3 p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <span class="font-extrabold text-indigo-700 dark:text-indigo-300"><i class="fa-solid fa-lightbulb mr-1"></i>Giải thích &amp; Định hướng hành vi:</span> ${item.exp}
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    </article>
  `;
}

// Flatten all 44 questions for the Arena Mode (select 20 random or sequential)
const allArenaQuestions = [];
Object.keys(quizzes).forEach(cd => {
  quizzes[cd].forEach((qObj, idx) => {
    allArenaQuestions.push({
      topic: Number(cd),
      q: `[Chủ đề ${cd}] ${qObj.q}`,
      options: qObj.options,
      ans: qObj.ans,
      exp: qObj.exp
    });
  });
});

const htmlContent = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hoạt động trải nghiệm, hướng nghiệp 10 – Kết nối tri thức với cuộc sống</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
          }
        }
      }
    };
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.45); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(99, 102, 241, 0.7); }
  </style>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">

  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors shrink-0" title="Quay lại Trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0">
          <i class="fa-solid fa-compass"></i>
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <h1 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">Hoạt động trải nghiệm, hướng nghiệp 10</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">KẾT NỐI TRI THỨC</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 truncate">4 Mạch nội dung • Đủ 11 Chủ đề • Hồ sơ sản phẩm &amp; Từ điển thuật ngữ (Tr. 4–73 SGK)</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <button onclick="openSearchModal()" class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 transition-colors">
          <i class="fa-solid fa-magnifying-glass text-indigo-500"></i>
          <span class="hidden md:inline">Tìm kiếm</span>
          <kbd class="hidden md:inline px-1.5 py-0.5 text-[10px] rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700">Ctrl K</kbd>
        </button>
        <button onclick="openProductMapModal()" class="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-briefcase"></i>
          <span class="hidden sm:inline">Bản đồ Sản phẩm</span>
        </button>
        <button onclick="openGlossaryModal()" class="px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-book-bookmark"></i>
          <span class="hidden sm:inline">Thuật ngữ (Tr.73)</span>
        </button>
        <button onclick="openArenaModal()" class="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-all">
          <i class="fa-solid fa-stopwatch"></i>
          <span>Thi Đấu 45:00</span>
        </button>
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors" title="Đổi giao diện Sáng/Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

      <!-- Left Sticky Sidebar (4 cols on lg) -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs p-4">
        <div class="flex items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-list-ul text-indigo-600"></i>
            <h2 class="font-extrabold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-100">Mục lục 11 Chủ đề</h2>
          </div>
          <span id="overall-progress-badge" class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">0/11 Hoàn thành</span>
        </div>

        <!-- Filter Input -->
        <div class="mt-3 shrink-0">
          <div class="relative">
            <i class="fa-solid fa-filter absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
            <input id="sidebar-filter-input" oninput="filterSidebarTopics(this.value)" type="text" placeholder="Lọc nhanh chủ đề (VD: tài chính, nghề...)" class="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>

        <!-- Scrollable Topic List -->
        <nav id="sidebar-nav" class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 space-y-3 text-sm pb-8 pt-3">
          ${renderSidebar()}
        </nav>
      </aside>

      <!-- Right Main Content (8 cols on lg) -->
      <main class="lg:col-span-8 space-y-8 min-w-0">

        <!-- Hero Overview Banner -->
        <section class="rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-800 text-white p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-bold mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Bộ sách Kết nối tri thức với cuộc sống • Trọn bộ 11 Chủ đề</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">HỆ THỐNG HỌC LIỆU HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP 10</h2>
            <p class="mt-2 text-sm sm:text-base text-indigo-100 leading-relaxed max-w-3xl">
              Tài liệu giữ nguyên trình tự <strong>11 chủ đề</strong> thuộc <strong>4 mạch nội dung</strong> trong SGK (trang 4–73), tích hợp đầy đủ mục tiêu, quy trình <em>Khám phá – Kết nối → Rèn luyện → Vận dụng</em>, hồ sơ sản phẩm thực hành lưu trực tiếp trên web và bảng tự đánh giá theo mức <strong>Đạt / Chưa đạt</strong>.
            </p>

            <!-- 4 Streams Overview Cards -->
            <div class="grid sm:grid-cols-2 gap-3 mt-6">
              ${streams.map(s => `
                <div class="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                  <div class="flex items-center justify-between">
                    <span class="font-extrabold text-sm text-white"><i class="fa-solid ${s.icon || streamIcons[s.id] || 'fa-layer-group'} mr-1.5 text-emerald-300"></i>${s.name}</span>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-white/20">Chủ đề ${s.topics.join(', ')}</span>
                  </div>
                  <p class="mt-1 text-xs text-indigo-100">${s.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- 3 Types of Organization & 4 Learning Steps -->
            <div class="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-indigo-100">
              <div><strong>3 loại hình tổ chức:</strong> Sinh hoạt dưới cờ • Hoạt động giáo dục theo chủ đề • Sinh hoạt lớp</div>
              <div><strong>Quy trình 4 bước:</strong> Khám phá – Kết nối → Rèn luyện → Vận dụng → Đánh giá (Đạt / Chưa đạt)</div>
            </div>
          </div>
        </section>

        <!-- All 11 Topic Cards -->
        <div id="topics-container" class="space-y-10">
          ${topics.map(t => renderTopicCard(t)).join('\n')}
        </div>

        <!-- Final Summary Section: Product Map & Glossary (tr. 73) -->
        <section id="ban-do-san-pham-va-thuat-ngu" class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 scroll-mt-24 shadow-xs">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">Tổng hợp toàn chương trình</span>
            <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">Bản đồ Sản phẩm học tập 11 Chủ đề &amp; Giải thích thuật ngữ (Trang 73 SGK)</h2>
          </div>

          <!-- Product Map Table -->
          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-extrabold">
                  <th class="p-3.5 border-b border-slate-200 dark:border-slate-700">Chủ đề</th>
                  <th class="p-3.5 border-b border-slate-200 dark:border-slate-700">Mạch nội dung</th>
                  <th class="p-3.5 border-b border-slate-200 dark:border-slate-700">Sản phẩm học tập cốt lõi cần lưu giữ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-700/70">
                ${productMapTable.map(row => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3.5 font-bold text-indigo-700 dark:text-indigo-300 whitespace-nowrap"><a href="#chude-${row.topicNum}" class="hover:underline">Chủ đề ${row.topicNum}. ${row.title}</a></td>
                    <td class="p-3.5 text-slate-600 dark:text-slate-300">${row.focus}</td>
                    <td class="p-3.5 text-slate-700 dark:text-slate-200 font-medium">${row.deliverables}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- Glossary Terms -->
          <div>
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white mb-4"><i class="fa-solid fa-spell-check mr-2 text-amber-500"></i>Từ điển Giải thích thuật ngữ chính trong sách (Trang 73)</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              ${glossaryTerms.map(g => `
                <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60">
                  <h4 class="font-extrabold text-amber-900 dark:text-amber-300 text-sm">${g.term}</h4>
                  <p class="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">${g.def}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- Search Modal -->
  <div id="search-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-indigo-600"></i>
        <input id="global-search-input" oninput="runGlobalSearch(this.value)" type="text" placeholder="Nhập từ khóa tìm kiếm (VD: tôn sư trọng đạo, tài chính, phản biện, cảnh quan, chọn nghề...)" class="w-full bg-transparent text-sm focus:outline-none text-slate-800 dark:text-slate-100" />
        <button onclick="closeSearchModal()" class="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">ESC</button>
      </div>
      <div id="global-search-results" class="max-h-96 overflow-y-auto p-4 space-y-2 custom-scrollbar"></div>
    </div>
  </div>

  <!-- Product Map Modal -->
  <div id="product-map-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-6 py-4 bg-emerald-600 text-white flex items-center justify-between">
        <h3 class="font-extrabold text-base"><i class="fa-solid fa-briefcase mr-2"></i>Bản đồ Sản phẩm học tập 11 Chủ đề – HĐTN, HN 10</h3>
        <button onclick="closeProductMapModal()" class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-3">
        ${productMapTable.map(r => `
          <div class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">Chủ đề ${r.topicNum} (${r.focus})</span>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">${r.title}</h4>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Sản phẩm: ${r.deliverables}</p>
            </div>
            <a href="#cd${r.topicNum}-san-pham" onclick="closeProductMapModal()" class="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shrink-0 text-center">Mở hồ sơ CĐ ${r.topicNum}</a>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- Glossary Modal -->
  <div id="glossary-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-6 py-4 bg-amber-600 text-white flex items-center justify-between">
        <h3 class="font-extrabold text-base"><i class="fa-solid fa-book-bookmark mr-2"></i>Giải thích thuật ngữ chính trong sách (Trang 73 SGK)</h3>
        <button onclick="closeGlossaryModal()" class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar grid sm:grid-cols-2 gap-4">
        ${glossaryTerms.map(g => `
          <div class="p-4 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <h4 class="font-extrabold text-amber-800 dark:text-amber-300 text-sm">${g.term}</h4>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 leading-relaxed">${g.def}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- Arena Exam Modal (45:00) -->
  <div id="arena-modal" class="fixed inset-0 z-50 hidden bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
      <div class="px-6 py-4 bg-indigo-600 text-white flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 class="font-extrabold text-base"><i class="fa-solid fa-trophy mr-2 text-amber-300"></i>Đấu trường Trắc nghiệm Tình huống Tổng hợp (11 Chủ đề)</h3>
          <p class="text-xs text-indigo-100">20 câu hỏi tình huống đại diện cho 4 mạch nội dung</p>
        </div>
        <div class="flex items-center gap-3">
          <span id="arena-timer" class="px-3 py-1 rounded-xl bg-white/20 font-mono font-extrabold text-sm">45:00</span>
          <button onclick="submitArenaQuiz()" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold">Nộp bài</button>
          <button onclick="closeArenaModal()" class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
      <div id="arena-score-banner" class="hidden px-6 py-3 bg-emerald-50 dark:bg-emerald-950/60 border-b border-emerald-200 dark:border-emerald-800 text-sm font-bold text-emerald-800 dark:text-emerald-200"></div>
      <div id="arena-questions-body" class="p-6 overflow-y-auto custom-scrollbar space-y-4"></div>
    </div>
  </div>

  <script>
    const TOPICS_META = ${JSON.stringify(topics.map(t => ({ num: t.num, title: t.title, stream: t.stream, subtitle: t.subtitle, criteriaCount: t.evaluationCriteria.length, fieldsCount: t.interactiveTemplate.fields.length })))};
    const ARENA_POOL = ${JSON.stringify(allArenaQuestions)};

    // Dark Mode
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('hdtnhn10_theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('hdtnhn10_theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }

    // Sidebar filter
    function filterSidebarTopics(query) {
      const q = (query || '').toLowerCase().trim();
      document.querySelectorAll('.sidebar-topic-link').forEach(link => {
        const txt = link.textContent.toLowerCase();
        link.style.display = (!q || txt.includes(q)) ? '' : 'none';
      });
    }

    // Check individual topic quiz
    function checkTopicQuiz(topicNum, qIdx, chosenIdx, correctIdx) {
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('btn-opt-' + topicNum + '-' + qIdx + '-' + i);
        if (!btn) continue;
        btn.classList.remove('border-emerald-500', 'bg-emerald-50', 'text-emerald-900', 'border-rose-500', 'bg-rose-50', 'text-rose-900');
        if (i === correctIdx) {
          btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/50', 'font-bold');
        } else if (i === chosenIdx && chosenIdx !== correctIdx) {
          btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/50');
        }
      }
      const expEl = document.getElementById('exp-' + topicNum + '-' + qIdx);
      if (expEl) expEl.classList.remove('hidden');
    }

    // Save & Load Portfolio fields in LocalStorage
    function savePortfolio(topicNum) {
      const meta = TOPICS_META.find(m => m.num === topicNum);
      if (!meta) return;
      const values = [];
      for (let i = 0; i < meta.fieldsCount; i++) {
        const el = document.getElementById('portfolio-' + topicNum + '-' + i);
        values.push(el ? el.value : '');
      }
      localStorage.setItem('hdtnhn10_portfolio_' + topicNum, JSON.stringify(values));
      const st = document.getElementById('save-status-' + topicNum);
      if (st) {
        st.classList.remove('hidden');
        setTimeout(() => st.classList.add('hidden'), 2500);
      }
    }

    function loadAllPortfolios() {
      TOPICS_META.forEach(m => {
        try {
          const raw = localStorage.getItem('hdtnhn10_portfolio_' + m.num);
          if (!raw) return;
          const arr = JSON.parse(raw);
          arr.forEach((val, idx) => {
            const el = document.getElementById('portfolio-' + m.num + '-' + idx);
            if (el) el.value = val || '';
          });
        } catch (e) {}
      });
    }

    // Self-evaluation Đạt / Chưa đạt
    function setCriterionStatus(topicNum, cIdx, status) {
      const key = 'hdtnhn10_eval_' + topicNum;
      let state = {};
      try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) {}
      state[cIdx] = status;
      localStorage.setItem(key, JSON.stringify(state));
      renderCriterionButtons(topicNum);
    }

    function renderCriterionButtons(topicNum) {
      const meta = TOPICS_META.find(m => m.num === topicNum);
      if (!meta) return;
      let state = {};
      try { state = JSON.parse(localStorage.getItem('hdtnhn10_eval_' + topicNum) || '{}'); } catch (e) {}
      let datCount = 0;
      for (let i = 0; i < meta.criteriaCount; i++) {
        const btnDat = document.getElementById('crit-dat-' + topicNum + '-' + i);
        const btnChua = document.getElementById('crit-chuadat-' + topicNum + '-' + i);
        if (!btnDat || !btnChua) continue;
        btnDat.className = 'px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ';
        btnChua.className = 'px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ';
        if (state[i] === 'dat') {
          datCount++;
          btnDat.className += 'bg-emerald-600 text-white border-emerald-600';
          btnChua.className += 'border-slate-300 dark:border-slate-600 text-slate-500';
        } else if (state[i] === 'chuadat') {
          btnDat.className += 'border-slate-300 dark:border-slate-600 text-slate-500';
          btnChua.className += 'bg-amber-500 text-white border-amber-500';
        } else {
          btnDat.className += 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300';
          btnChua.className += 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300';
        }
      }
      const sumEl = document.getElementById('eval-summary-' + topicNum);
      if (sumEl) sumEl.textContent = datCount + '/' + meta.criteriaCount + ' tiêu chí Đạt';
    }

    // Topic completion tracking
    function markTopicCompleted(topicNum) {
      let done = [];
      try { done = JSON.parse(localStorage.getItem('hdtnhn10_completed') || '[]'); } catch (e) {}
      if (done.includes(topicNum)) {
        done = done.filter(n => n !== topicNum);
      } else {
        done.push(topicNum);
      }
      localStorage.setItem('hdtnhn10_completed', JSON.stringify(done));
      renderCompletionState();
    }

    function renderCompletionState() {
      let done = [];
      try { done = JSON.parse(localStorage.getItem('hdtnhn10_completed') || '[]'); } catch (e) {}
      TOPICS_META.forEach(m => {
        const btn = document.getElementById('btn-complete-' + m.num);
        const badge = document.getElementById('sidebar-badge-' + m.num);
        const isDone = done.includes(m.num);
        if (btn) {
          btn.innerHTML = isDone
            ? '<i class="fa-solid fa-circle-check text-emerald-600"></i><span class="text-emerald-700 dark:text-emerald-400">Đã hoàn thành</span>'
            : '<i class="fa-regular fa-circle-check text-emerald-500"></i><span>Đánh dấu hoàn thành</span>';
        }
        if (badge && isDone) {
          badge.textContent = '✓ Đạt';
          badge.className = 'text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 font-bold shrink-0';
        }
      });
      const overall = document.getElementById('overall-progress-badge');
      if (overall) overall.textContent = done.length + '/11 Hoàn thành';
    }

    // Modals
    function openSearchModal() {
      document.getElementById('search-modal').classList.remove('hidden');
      const inp = document.getElementById('global-search-input');
      inp.focus();
      runGlobalSearch(inp.value);
    }
    function closeSearchModal() { document.getElementById('search-modal').classList.add('hidden'); }
    function openProductMapModal() { document.getElementById('product-map-modal').classList.remove('hidden'); }
    function closeProductMapModal() { document.getElementById('product-map-modal').classList.add('hidden'); }
    function openGlossaryModal() { document.getElementById('glossary-modal').classList.remove('hidden'); }
    function closeGlossaryModal() { document.getElementById('glossary-modal').classList.add('hidden'); }

    function runGlobalSearch(q) {
      const box = document.getElementById('global-search-results');
      const kw = (q || '').toLowerCase().trim();
      const matched = TOPICS_META.filter(m => !kw || (m.title + ' ' + m.subtitle + ' ' + m.stream).toLowerCase().includes(kw));
      box.innerHTML = matched.map(m => \`
        <a href="#chude-\${m.num}" onclick="closeSearchModal()" class="block p-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all">
          <div class="text-xs font-bold text-indigo-600 dark:text-indigo-400">Chủ đề \${m.num} • \${m.stream}</div>
          <div class="font-extrabold text-sm text-slate-900 dark:text-white">\${m.title}</div>
          <div class="text-xs text-slate-500 mt-0.5">\${m.subtitle}</div>
        </a>
      \`).join('');
    }

    // Arena Exam (20 questions)
    let arenaQuestions = [];
    let arenaAnswers = {};
    let arenaInterval = null;
    let arenaSeconds = 45 * 60;

    function openArenaModal() {
      document.getElementById('arena-modal').classList.remove('hidden');
      document.getElementById('arena-score-banner').classList.add('hidden');
      arenaAnswers = {};
      arenaQuestions = ARENA_POOL.slice(0, 20);
      const body = document.getElementById('arena-questions-body');
      body.innerHTML = arenaQuestions.map((item, idx) => \`
        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
          <p class="font-bold text-sm text-slate-900 dark:text-white mb-2.5"><span class="text-indigo-600 mr-1">Câu \${idx + 1}:</span>\${item.q}</p>
          <div class="grid gap-2">
            \${item.options.map((opt, oIdx) => \`
              <button type="button" onclick="selectArenaAnswer(\${idx}, \${oIdx})" id="arena-opt-\${idx}-\${oIdx}" class="text-left px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                \${opt}
              </button>
            \`).join('')}
          </div>
          <div id="arena-exp-\${idx}" class="hidden mt-2.5 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-xs text-slate-700 dark:text-slate-200">
            <strong>Giải thích:</strong> \${item.exp}
          </div>
        </div>
      \`).join('');
      arenaSeconds = 45 * 60;
      if (arenaInterval) clearInterval(arenaInterval);
      arenaInterval = setInterval(() => {
        if (arenaSeconds > 0) arenaSeconds--;
        const m = String(Math.floor(arenaSeconds / 60)).padStart(2, '0');
        const s = String(arenaSeconds % 60).padStart(2, '0');
        document.getElementById('arena-timer').textContent = m + ':' + s;
      }, 1000);
    }

    function selectArenaAnswer(qIdx, oIdx) {
      arenaAnswers[qIdx] = oIdx;
      for (let i = 0; i < 4; i++) {
        const b = document.getElementById('arena-opt-' + qIdx + '-' + i);
        if (!b) continue;
        b.className = 'text-left px-3.5 py-2 rounded-xl border text-xs sm:text-sm ' +
          (i === oIdx ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 font-bold text-indigo-900 dark:text-indigo-200' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200');
      }
    }

    function submitArenaQuiz() {
      if (arenaInterval) clearInterval(arenaInterval);
      let correct = 0;
      arenaQuestions.forEach((item, idx) => {
        if (arenaAnswers[idx] === item.ans) correct++;
        const exp = document.getElementById('arena-exp-' + idx);
        if (exp) exp.classList.remove('hidden');
      });
      const banner = document.getElementById('arena-score-banner');
      banner.classList.remove('hidden');
      banner.innerHTML = '<i class="fa-solid fa-award mr-1.5"></i>Kết quả: Đúng <strong>' + correct + '/' + arenaQuestions.length + '</strong> câu (' + ((correct / arenaQuestions.length) * 10).toFixed(1) + ' điểm) – Mức đánh giá: <strong>' + (correct >= 10 ? 'ĐẠT' : 'CẦN RÈN LUYỆN THÊM') + '</strong>';
    }

    function closeArenaModal() {
      if (arenaInterval) clearInterval(arenaInterval);
      document.getElementById('arena-modal').classList.add('hidden');
    }

    // Keyboard shortcut Ctrl+K / ESC
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === 'Escape') {
        closeSearchModal();
        closeProductMapModal();
        closeGlossaryModal();
        closeArenaModal();
      }
    });

    // Init
    window.addEventListener('DOMContentLoaded', () => {
      loadAllPortfolios();
      TOPICS_META.forEach(m => renderCriterionButtons(m.num));
      renderCompletionState();
    });
  </script>
</body>
</html>`;

const out1 = path.join(__dirname, '..', 'courses', 'hdtnhn_10.html');
const out2 = path.join(__dirname, '..', 'courses', 'hdtn_10.html');
fs.writeFileSync(out1, htmlContent, 'utf8');
fs.writeFileSync(out2, htmlContent, 'utf8');
console.log('Built courses/hdtnhn_10.html and courses/hdtn_10.html successfully! Size:', (Buffer.byteLength(htmlContent, 'utf8') / 1024).toFixed(1), 'KB');
