// scratch/build_van10.js
// Builder for courses/van_10.html (and courses/nguvan_10.html)
// Ngữ Văn 10 – Bộ Kết nối tri thức với cuộc sống (Đủ 2 Tập, 9 Bài lớn + Kiến thức dùng chung)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const data = require('./van10_data.js');
const diagrams = require('./van10_diagrams.js');
const quizzes = require('./van10_quizzes.js');

console.log('Building courses/van_10.html...');

// 1. Build Sidebar Navigation HTML
let sidebarNavHtml = '';
for (const vol of data.volumes) {
  sidebarNavHtml += `
    <div class="mb-4">
      <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50/80 dark:bg-rose-950/40 rounded-lg border border-rose-200/60 dark:border-rose-800/50">
        <i class="fa-solid ${vol.icon}"></i>
        <span>${vol.title}</span>
      </div>
      <div class="text-[10px] text-slate-400 dark:text-slate-500 px-3 pt-1 font-semibold">${vol.subtitle}</div>
      <div class="mt-1.5 space-y-1">
  `;
  for (const lNum of vol.lessons) {
    const l = data.lessons[lNum];
    const mainTextsCount = l.vanBanDoc.filter(t => !t.isPracticeReading).length;
    sidebarNavHtml += `
        <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-rose-200 dark:hover:border-rose-800/60 hover:bg-rose-50/70 dark:hover:bg-rose-950/50 text-slate-700 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-400 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-rose-600 dark:text-rose-400">Bài ${l.num}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-semibold shrink-0">${mainTextsCount} VB + Đọc thêm</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-rose-700 dark:group-hover:text-rose-400 truncate">
            ${l.title}
          </div>
          <div class="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
            ${l.vietnameseFocus}
          </div>
        </a>
    `;
  }
  sidebarNavHtml += `
      </div>
    </div>
  `;
}

// Add Shared Knowledge & Genre Map link at the bottom of sidebar
sidebarNavHtml += `
    <div class="mb-4 pt-2 border-t border-slate-200 dark:border-slate-800">
      <a href="#kien-thuc-dung-chung" class="nav-link group block px-3 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800/60 bg-rose-50/70 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-bold text-xs flex items-center justify-between hover:bg-rose-100 transition">
        <span><i class="fa-solid fa-compass-drafting mr-1.5"></i>Kiến thức chung &amp; Bản đồ 9 bài</span>
        <span class="text-[10px] px-1.5 py-0.5 rounded bg-rose-600 text-white">Tổng hợp</span>
      </a>
    </div>
`;

// 2. Build Main Lesson Articles HTML (Bài 1 -> Bài 9)
let mainLessonsHtml = '';

for (let i = 1; i <= 9; i++) {
  const l = data.lessons[i];
  const vol = data.volumes.find(v => v.num === l.volume);
  const svgDiagram = diagrams[i] || '';
  const lessonQuizzes = quizzes[i] || [];

  // Volume separator banner at Lesson 1 and Lesson 6
  if (i === 1 || i === 6) {
    mainLessonsHtml += `
      <div class="p-5 sm:p-6 rounded-3xl bg-gradient-to-r ${i === 1 ? 'from-rose-700 via-red-700 to-amber-600' : 'from-amber-700 via-rose-700 to-indigo-800'} text-white shadow-md">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="inline-block px-3 py-0.5 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-1.5">Sách giáo khoa Ngữ Văn 10 • Kết nối tri thức</span>
            <h2 class="text-xl sm:text-2xl font-black tracking-tight">${vol.title}: ${vol.subtitle}</h2>
          </div>
          <div class="px-3.5 py-2 rounded-2xl bg-black/20 backdrop-blur-xs text-xs font-bold">
            Bài ${vol.lessons[0]} – Bài ${vol.lessons[vol.lessons.length - 1]}
          </div>
        </div>
      </div>
    `;
  }

  // Build A. Tri thức ngữ văn HTML
  let triThucHtml = l.triThucNguVan.map((item, idx) => `
    <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-800/60 border border-rose-200/70 dark:border-slate-700/80">
      <div class="flex items-center gap-2 mb-1.5">
        <span class="w-6 h-6 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center shrink-0">${idx + 1}</span>
        <h5 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${item.term}</h5>
      </div>
      <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-8">${item.definition}</p>
    </div>
  `).join('\n');

  // Build B. Văn bản đọc & Thực hành đọc HTML
  let vanBanHtml = l.vanBanDoc.map((vb) => {
    const badgeColor = vb.isPracticeReading
      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
      : 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800';
    const cardBorder = vb.isPracticeReading
      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20'
      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60';

    const summaryBullets = vb.summary.map(s => `<li class="leading-relaxed">${s}</li>`).join('');
    const analysisBullets = vb.analysis.map(a => `<li class="leading-relaxed">${a}</li>`).join('');

    return `
      <div class="p-4 sm:p-5 rounded-2xl border ${cardBorder} shadow-2xs space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-200/70 dark:border-slate-800">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase border ${badgeColor}">
              ${vb.isPracticeReading ? '<i class="fa-solid fa-book-reader mr-1"></i>' : '<i class="fa-solid fa-star mr-1"></i>'}${vb.order}
            </span>
            <h5 class="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">“${vb.title}”</h5>
          </div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
            <i class="fa-solid fa-feather mr-1 text-rose-500"></i>${vb.author} • <span class="text-rose-600 dark:text-rose-400">${vb.genre}</span>
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <div class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-list-check text-amber-600"></i> Tóm lược mạch văn bản &amp; Nội dung chính
            </div>
            <ul class="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              ${summaryBullets}
            </ul>
          </div>

          <div class="p-3.5 rounded-xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
            <div class="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-wand-magic-sparkles text-rose-600"></i> Chủ đề, Nghệ thuật &amp; Hướng phân tích
            </div>
            <ul class="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              ${analysisBullets}
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('\n');

  // Build C. Thực hành Tiếng Việt HTML
  const tvConceptsHtml = l.thucHanhTiengViet.concepts.map(c => `<li class="leading-relaxed">${c}</li>`).join('');
  const tvExamplesHtml = l.thucHanhTiengViet.examples.map(ex => `
    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 space-y-1.5 text-xs sm:text-sm">
      <div class="flex items-start gap-2 text-rose-700 dark:text-rose-400">
        <i class="fa-solid fa-circle-xmark mt-1 shrink-0"></i>
        <span><strong>Cách dùng sai / cần tránh:</strong> ${ex.wrong}</span>
      </div>
      <div class="flex items-start gap-2 text-emerald-700 dark:text-emerald-400">
        <i class="fa-solid fa-circle-check mt-1 shrink-0"></i>
        <span><strong>Cách sửa chuẩn mực:</strong> ${ex.right}</span>
      </div>
      <div class="text-[11px] text-slate-500 dark:text-slate-400 pl-6 italic">
        <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i>${ex.note}
      </div>
    </div>
  `).join('\n');

  // Build D. Viết HTML
  const vietReqsHtml = l.viet.requirements.map(r => `<li class="leading-relaxed">${r}</li>`).join('');
  const vietStepsHtml = l.viet.steps.map((st, idx) => `
    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200/70 dark:border-indigo-900/50 flex items-start gap-3">
      <span class="w-7 h-7 rounded-xl bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
      <div>
        <div class="font-bold text-indigo-900 dark:text-indigo-300 text-xs sm:text-sm">${st.step}</div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">${st.detail}</p>
      </div>
    </div>
  `).join('\n');

  // Build E. Nói và nghe HTML
  const speakerTasksHtml = l.noiVaNghe.speakerTasks.map(t => `<li class="leading-relaxed">${t}</li>`).join('');
  const listenerTasksHtml = l.noiVaNghe.listenerTasks.map(t => `<li class="leading-relaxed">${t}</li>`).join('');

  // Build F. Củng cố & Mở rộng HTML
  const cungCoHtml = l.cungCoMoRong.map(c => `<li class="leading-relaxed">${c}</li>`).join('');

  // Build G. Quizzes HTML
  const quizHtml = lessonQuizzes.map((qObj, qIdx) => {
    const optsHtml = qObj.options.map((opt, oIdx) => {
      const letter = String.fromCharCode(65 + oIdx);
      return `
        <button type="button" onclick="checkLessonQuiz(${i}, ${qIdx}, ${oIdx}, ${qObj.ans})"
          id="qbtn-${i}-${qIdx}-${oIdx}"
          class="quiz-opt-btn w-full text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-rose-400 dark:hover:border-rose-500 text-xs sm:text-sm text-slate-700 dark:text-slate-200 transition flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${letter}</span>
          <span class="flex-1 leading-relaxed">${opt}</span>
        </button>
      `;
    }).join('\n');

    return `
      <div class="quiz-item p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/70">
        <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-3">
          <span class="inline-block px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-xs font-black mr-1.5">Câu ${qIdx + 1}</span>
          ${qObj.q}
        </p>
        <div class="grid grid-cols-1 gap-2">
          ${optsHtml}
        </div>
        <div id="qexp-${i}-${qIdx}" class="hidden mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
          <i class="fa-solid fa-circle-info mr-1 text-emerald-600"></i><strong>Giải thích:</strong> ${qObj.exp}
        </div>
      </div>
    `;
  }).join('\n');

  mainLessonsHtml += `
    <!-- ==================== BÀI ${l.num}: ${l.title.toUpperCase()} ==================== -->
    <article id="bai-${l.num}" class="lesson-card scroll-mt-24 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden">
      <!-- Lesson Header Banner -->
      <div class="p-5 sm:p-6 bg-gradient-to-r from-rose-50 via-amber-50/60 to-white dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-600 text-white shadow-2xs">
              Bài ${l.num} • Tập ${l.volume}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              ${l.genreFocus}
            </span>
          </div>
          <button onclick="markLessonRead(${l.num})" id="read-btn-${l.num}" class="px-3 py-1 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 transition flex items-center gap-1.5">
            <i class="fa-regular fa-circle-check"></i><span>Đánh dấu đã học</span>
          </button>
        </div>

        <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Bài ${l.num}. ${l.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">${l.subtitle}</p>

        <!-- Quick Activity Jump Pills (Giữ riêng từng hoạt động trong bài) -->
        <div class="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
          <span class="text-slate-400 dark:text-slate-500 mr-1"><i class="fa-solid fa-layer-group mr-1"></i>Các hoạt động:</span>
          <a href="#bai-${l.num}-trithuc" class="px-2.5 py-1 rounded-lg bg-rose-100/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-200 transition">A. Tri thức ngữ văn</a>
          <a href="#bai-${l.num}-vanban" class="px-2.5 py-1 rounded-lg bg-amber-100/80 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-200 transition">B. Văn bản đọc &amp; Thực hành đọc</a>
          <a href="#bai-${l.num}-tiengviet" class="px-2.5 py-1 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 transition">C. Thực hành Tiếng Việt</a>
          <a href="#bai-${l.num}-viet" class="px-2.5 py-1 rounded-lg bg-indigo-100/80 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 transition">D. Viết</a>
          <a href="#bai-${l.num}-noinghe" class="px-2.5 py-1 rounded-lg bg-sky-100/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 hover:bg-sky-200 transition">E. Nói và nghe</a>
          <a href="#bai-${l.num}-sodo" class="px-2.5 py-1 rounded-lg bg-purple-100/80 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 hover:bg-purple-200 transition">F. Sơ đồ &amp; Củng cố</a>
          <a href="#bai-${l.num}-tracnghiem" class="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition">G. Trắc nghiệm (5 câu)</a>
        </div>
      </div>

      <!-- Lesson Content Body -->
      <div class="p-5 sm:p-6 space-y-8">

        <!-- HOẠT ĐỘNG A: TRI THỨC NGỮ VĂN -->
        <section id="bai-${l.num}-trithuc" class="scroll-mt-24 space-y-3">
          <div class="flex items-center gap-2.5 pb-2 border-b border-rose-200/80 dark:border-rose-900/50">
            <span class="w-8 h-8 rounded-xl bg-rose-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">A</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Tri thức ngữ văn cần nắm</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Hệ thống khái niệm thể loại, cấu trúc văn bản và lí luận văn học trọng tâm</p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-3">
            ${triThucHtml}
          </div>
        </section>

        <!-- HOẠT ĐỘNG B: VĂN BẢN ĐỌC CHÍNH & THỰC HÀNH ĐỌC -->
        <section id="bai-${l.num}-vanban" class="scroll-mt-24 space-y-4">
          <div class="flex items-center gap-2.5 pb-2 border-b border-amber-200/80 dark:border-amber-900/50">
            <span class="w-8 h-8 rounded-xl bg-amber-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">B</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Văn bản đọc &amp; Hướng phân tích (Kèm Thực hành đọc)</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Tóm lược mạch sự kiện/cảm xúc, chủ đề tư tưởng, đặc sắc nghệ thuật và hướng đọc hiểu từng tác phẩm</p>
            </div>
          </div>
          <div class="space-y-4">
            ${vanBanHtml}
          </div>
        </section>

        <!-- HOẠT ĐỘNG C: THỰC HÀNH TIẾNG VIỆT -->
        <section id="bai-${l.num}-tiengviet" class="scroll-mt-24 space-y-3">
          <div class="flex items-center gap-2.5 pb-2 border-b border-emerald-200/80 dark:border-emerald-900/50">
            <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">C</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Thực hành Tiếng Việt: ${l.thucHanhTiengViet.title}</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Quy tắc sử dụng tiếng Việt, nhận diện lỗi sai phổ biến và cách khắc phục trong đọc – viết</p>
            </div>
          </div>
          <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/50 space-y-4">
            <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              ${tvConceptsHtml}
            </ul>
            <div class="space-y-2 pt-2 border-t border-emerald-200/60 dark:border-emerald-800/50">
              <div class="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <i class="fa-solid fa-spell-check mr-1"></i>Ví dụ phân tích &amp; Sửa lỗi thực tế:
              </div>
              ${tvExamplesHtml}
            </div>
          </div>
        </section>

        <!-- HOẠT ĐỘNG D: VIẾT (YÊU CẦU & QUY TRÌNH) -->
        <section id="bai-${l.num}-viet" class="scroll-mt-24 space-y-3">
          <div class="flex items-center gap-2.5 pb-2 border-b border-indigo-200/80 dark:border-indigo-900/50">
            <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">D</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Viết: ${l.viet.title}</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Yêu cầu cốt lõi của kiểu bài và quy trình 4 bước rèn luyện kĩ năng viết</p>
            </div>
          </div>
          <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/50 space-y-4">
            <div>
              <div class="text-xs font-black uppercase tracking-wider text-indigo-800 dark:text-indigo-300 mb-2">
                <i class="fa-solid fa-bullseye mr-1.5"></i>Yêu cầu đối với kiểu bài:
              </div>
              <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                ${vietReqsHtml}
              </ul>
            </div>
            <div>
              <div class="text-xs font-black uppercase tracking-wider text-indigo-800 dark:text-indigo-300 mb-2.5">
                <i class="fa-solid fa-shoe-prints mr-1.5"></i>Quy trình thực hiện từng bước:
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${vietStepsHtml}
              </div>
            </div>
          </div>
        </section>

        <!-- HOẠT ĐỘNG E: NÓI VÀ NGHE -->
        <section id="bai-${l.num}-noinghe" class="scroll-mt-24 space-y-3">
          <div class="flex items-center gap-2.5 pb-2 border-b border-sky-200/80 dark:border-sky-900/50">
            <span class="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">E</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Nói và nghe: ${l.noiVaNghe.title}</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Kĩ năng thuyết trình, thảo luận và tương tác văn hoá giữa người nói – người nghe</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/70 dark:border-sky-900/50">
              <div class="text-xs font-black uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-microphone-lines text-sky-600"></i> Vai trò &amp; Nhiệm vụ Người nói
              </div>
              <ul class="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                ${speakerTasksHtml}
              </ul>
            </div>
            <div class="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900/50">
              <div class="text-xs font-black uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-ear-listen text-teal-600"></i> Vai trò &amp; Nhiệm vụ Người nghe
              </div>
              <ul class="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                ${listenerTasksHtml}
              </ul>
            </div>
          </div>
        </section>

        <!-- HOẠT ĐỘNG F: SƠ ĐỒ TƯ DUY SVG & CỦNG CỐ / MỞ RỘNG -->
        <section id="bai-${l.num}-sodo" class="scroll-mt-24 space-y-3">
          <div class="flex items-center gap-2.5 pb-2 border-b border-purple-200/80 dark:border-purple-900/50">
            <span class="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-2xs">F</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Sơ đồ cấu trúc bài học &amp; Củng cố, Mở rộng</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">${l.diagramCaption}</p>
            </div>
          </div>

          <div class="p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-x-auto">
            ${svgDiagram}
          </div>

          <div class="p-4 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-900/50">
            <div class="text-xs font-black uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-2">
              <i class="fa-solid fa-compass mr-1.5"></i>Định hướng Củng cố &amp; Mở rộng:
            </div>
            <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              ${cungCoHtml}
            </ul>
          </div>
        </section>

        <!-- HOẠT ĐỘNG G: CÂU HỎI TRẮC NGHIỆM ÔN TẬP BÀI -->
        <section id="bai-${l.num}-tracnghiem" class="scroll-mt-24 space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-slate-800 dark:bg-slate-700 text-white font-black text-sm flex items-center justify-center shadow-2xs">G</span>
              <div>
                <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Trắc nghiệm củng cố Bài ${l.num}</h4>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">Chọn phương án đúng để kiểm tra mức độ nắm vững Tri thức ngữ văn, Văn bản đọc, Tiếng Việt và Viết</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-3">
            ${quizHtml}
          </div>
        </section>

      </div>
    </article>
  `;
}

// 3. Build Shared Knowledge & Genre Map Section (#kien-thuc-dung-chung)
const sk = data.sharedKnowledge;
const analysisStepsHtml = sk.literaryAnalysisSteps.map(s => `
  <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200/70 dark:border-slate-800 flex items-start gap-3">
    <span class="w-8 h-8 rounded-xl bg-rose-600 text-white font-black text-sm flex items-center justify-center shrink-0">${s.step}</span>
    <div>
      <h5 class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">${s.title}</h5>
      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">${s.desc}</p>
    </div>
  </div>
`).join('\n');

const writingRulesHtml = sk.writingAndResearchRules.map(w => `
  <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-900 border border-amber-200/70 dark:border-slate-800 space-y-1.5">
    <div class="font-bold text-amber-900 dark:text-amber-300 text-xs sm:text-sm flex items-center gap-2">
      <i class="fa-solid fa-pen-fancy text-amber-600"></i>
      <span>${w.title}</span>
    </div>
    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${w.content}</p>
  </div>
`).join('\n');

const speakingRulesHtml = sk.speakingAndListeningRules.map(sp => `
  <div class="p-4 rounded-2xl bg-sky-50/50 dark:bg-slate-900 border border-sky-200/70 dark:border-slate-800 space-y-2">
    <div class="font-bold text-sky-900 dark:text-sky-300 text-xs sm:text-sm flex items-center gap-2">
      <i class="fa-solid ${sp.icon} text-sky-600"></i>
      <span>${sp.role}</span>
    </div>
    <ul class="list-disc pl-4 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
      ${sp.points.map(p => `<li class="leading-relaxed">${p}</li>`).join('')}
    </ul>
  </div>
`).join('\n');

const mapRowsHtml = sk.curriculumMap.map(row => `
  <tr class="border-t border-slate-200 dark:border-slate-800 hover:bg-rose-50/40 dark:hover:bg-slate-800/60 transition">
    <td class="px-3 py-3 font-black text-rose-600 dark:text-rose-400 whitespace-nowrap">
      <a href="#bai-${row.bai}" class="hover:underline">Bài ${row.bai}</a>
      <div class="text-[10px] font-semibold text-slate-400">${row.tap}</div>
    </td>
    <td class="px-3 py-3 font-bold text-slate-900 dark:text-white">${row.title}</td>
    <td class="px-3 py-3 text-slate-700 dark:text-slate-300">${row.readingFocus}</td>
    <td class="px-3 py-3 text-emerald-700 dark:text-emerald-400 font-medium">${row.vietnameseFocus}</td>
    <td class="px-3 py-3 text-indigo-700 dark:text-indigo-400 font-medium">${row.writingProduct}</td>
    <td class="px-3 py-3 text-sky-700 dark:text-sky-400">${row.speakingListening}</td>
  </tr>
`).join('\n');

const sharedSectionHtml = `
  <!-- ==================== KIẾN THỨC DÙNG CHUNG CHO CẢ HAI TẬP & BẢN ĐỒ 9 BÀI ==================== -->
  <section id="kien-thuc-dung-chung" class="scroll-mt-24 bg-white dark:bg-slate-850 rounded-3xl border-2 border-rose-500/40 dark:border-rose-500/30 shadow-md overflow-hidden">
    <div class="p-5 sm:p-6 bg-gradient-to-r from-rose-700 via-red-700 to-amber-700 text-white">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-2">
        <i class="fa-solid fa-compass-drafting"></i> Hệ thống phương pháp cốt lõi
      </div>
      <h3 class="text-xl sm:text-2xl font-black">KIẾN THỨC DÙNG CHUNG CHO CẢ HAI TẬP &amp; BẢN ĐỒ THỂ LOẠI</h3>
      <p class="text-xs sm:text-sm text-rose-100 mt-1">Tổng hợp quy trình Phân tích văn bản văn học, Viết nghị luận – nghiên cứu, Nói – nghe và Bản đồ thể loại – sản phẩm học tập toàn chương trình Ngữ Văn 10</p>
    </div>

    <div class="p-5 sm:p-6 space-y-8">
      <!-- Overview SVG -->
      <div class="p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
        ${diagrams.shared}
      </div>

      <!-- 1. Phân tích văn bản văn học -->
      <div class="space-y-3">
        <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">1</span>
          <span>Phương pháp phân tích văn bản văn học (5 bước chuẩn)</span>
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${analysisStepsHtml}
        </div>
      </div>

      <!-- 2. Viết nghị luận và nghiên cứu -->
      <div class="space-y-3">
        <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-amber-600 text-white text-xs font-black flex items-center justify-center">2</span>
          <span>Viết nghị luận và báo cáo nghiên cứu</span>
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${writingRulesHtml}
        </div>
      </div>

      <!-- 3. Nói, nghe và trao đổi -->
      <div class="space-y-3">
        <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-sky-600 text-white text-xs font-black flex items-center justify-center">3</span>
          <span>Kĩ năng Nói, nghe và trao đổi học thuật</span>
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${speakingRulesHtml}
        </div>
      </div>

      <!-- 4. Bản đồ thể loại – sản phẩm học tập -->
      <div class="space-y-3">
        <h4 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs font-black flex items-center justify-center">4</span>
          <span>Bản đồ thể loại – sản phẩm học tập (Đủ 9 bài Tập 1 &amp; Tập 2)</span>
        </h4>
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
                <th class="px-3 py-3 border-b border-slate-200 dark:border-slate-700">Bài</th>
                <th class="px-3 py-3 border-b border-slate-200 dark:border-slate-700">Tên bài học</th>
                <th class="px-3 py-3 border-b border-slate-200 dark:border-slate-700">Trọng tâm đọc</th>
                <th class="px-3 py-3 border-b border-slate-200 dark:border-slate-700">Tiếng Việt / Tri thức</th>
                <th class="px-3 py-3 border-b border-slate-200 dark:border-slate-700">Sản phẩm viết</th>
                <th class="px-3 py-3 border-b border-slate-200 dark:border-slate-700">Nói và nghe</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
              ${mapRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
`;

// 4. Flatten all 45 questions for the 45-minute Exam Arena
const allExamQuestions = [];
for (let i = 1; i <= 9; i++) {
  for (const q of (quizzes[i] || [])) {
    allExamQuestions.push({
      lesson: i,
      lessonTitle: data.lessons[i].title,
      ...q
    });
  }
}

// Build Search Index for Ctrl+K Modal
const searchIndex = [];
for (let i = 1; i <= 9; i++) {
  const l = data.lessons[i];
  searchIndex.push({
    id: `bai-${i}`,
    badge: `Bài ${i} (Tập ${l.volume})`,
    title: `Bài ${i}. ${l.title}`,
    subtitle: `${l.genreFocus} • Tiếng Việt: ${l.vietnameseFocus} • Viết: ${l.writingFocus}`
  });
  for (const vb of l.vanBanDoc) {
    searchIndex.push({
      id: `bai-${i}-vanban`,
      badge: `${vb.order} • Bài ${i}`,
      title: `${vb.title} (${vb.author})`,
      subtitle: `${vb.genre} – ${vb.summary[0].replace(/<[^>]+>/g, '').slice(0, 120)}...`
    });
  }
  searchIndex.push({
    id: `bai-${i}-tiengviet`,
    badge: `Tiếng Việt • Bài ${i}`,
    title: l.thucHanhTiengViet.title,
    subtitle: l.thucHanhTiengViet.concepts[0].replace(/<[^>]+>/g, '').slice(0, 120)
  });
}

// 5. Assemble Full HTML Document
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ngữ Văn 10 – Kết Nối Tri Thức Với Cuộc Sống (Đủ 2 Tập • 9 Bài Lớn • 33 Văn Bản • Sơ Đồ SVG)</title>
  <meta name="description" content="Học liệu Ngữ Văn 10 bộ Kết nối tri thức với cuộc sống: Đủ 2 tập, 9 bài học lớn. Tách riêng từng hoạt động: Tri thức ngữ văn, Văn bản đọc, Thực hành Tiếng Việt, Viết, Nói và nghe, Củng cố mở rộng, Sơ đồ SVG và 45 câu trắc nghiệm.">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            slate: {
              850: '#151f32'
            }
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif']
          }
        }
      }
    }
  </script>

  <!-- Google Fonts & FontAwesome 6 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(225, 29, 72, 0.45) transparent;
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
      background: rgba(225, 29, 72, 0.45);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(225, 29, 72, 0.75);
    }
    .dark .custom-scrollbar {
      scrollbar-color: rgba(251, 113, 133, 0.45) transparent;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(251, 113, 133, 0.45);
    }
    .nav-link.active {
      background-color: rgba(225, 29, 72, 0.12) !important;
      border-color: #e11d48 !important;
      color: #be123c !important;
    }
    .dark .nav-link.active {
      background-color: rgba(225, 29, 72, 0.22) !important;
      color: #fb7185 !important;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans antialiased selection:bg-rose-600 selection:text-white">

  <!-- Sticky Top Header -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
      <!-- Left: Back & Course Brand -->
      <div class="flex items-center gap-3 min-w-0">
        <button onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition" title="Mở mục lục">
          <i class="fa-solid fa-bars"></i>
        </button>
        <a href="../index.html#courses" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition shrink-0" title="Quay lại Trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-600 to-amber-600 text-white flex items-center justify-center shadow-sm shrink-0">
          <i class="fa-solid fa-book-open-reader text-lg"></i>
        </div>
        <div class="truncate">
          <div class="flex items-center gap-2">
            <h1 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">Ngữ Văn 10</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">Kết nối tri thức</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Đủ 2 Tập • 9 Bài lớn • Tách biệt Đọc – Tiếng Việt – Viết – Nói &amp; Nghe</p>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 shrink-0">
        <button onclick="openModal('modal-search')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition">
          <i class="fa-solid fa-magnifying-glass text-rose-600 dark:text-rose-400"></i>
          <span class="hidden md:inline">Tìm văn bản / bài</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <button onclick="openModal('modal-map')" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center gap-1.5 border border-rose-200 dark:border-rose-800 transition">
          <i class="fa-solid fa-table-list"></i>
          <span class="hidden sm:inline">Bản đồ 9 Bài</span>
        </button>

        <button onclick="openModal('modal-handbook')" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 text-amber-800 dark:text-amber-300 text-xs font-bold flex items-center gap-1.5 border border-amber-200 dark:border-amber-800 transition">
          <i class="fa-solid fa-spell-check"></i>
          <span class="hidden sm:inline">Sổ tay Tiếng Việt &amp; Viết</span>
        </button>

        <button onclick="openModal('modal-exam')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Thi Đấu 45:00</span>
        </button>

        <button id="theme-toggle" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Chuyển chế độ Sáng / Tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main 12-Col Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <!-- Desktop Sticky Sidebar (4 Columns) with Flexbox Scroll -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs p-4 sm:p-5 overflow-hidden">
        <div class="shrink-0 flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-list-ul text-rose-600 dark:text-rose-400"></i>
            <h2 class="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-800 dark:text-white">MỤC LỤC BÀI HỌC</h2>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            2 Tập • 9 Bài lớn
          </span>
        </div>

        <!-- Progress bar -->
        <div class="shrink-0 mb-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
          <div class="flex items-center justify-between text-[11px] font-bold mb-1">
            <span class="text-slate-600 dark:text-slate-400">Tiến độ hoàn thành</span>
            <span id="progress-text" class="text-rose-600 dark:text-rose-400">0 / 9 bài (0%)</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div id="progress-bar" class="h-full bg-gradient-to-r from-rose-600 to-amber-500 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- Filter input -->
        <div class="shrink-0 relative mb-3">
          <i class="fa-solid fa-filter absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input id="sidebar-filter" type="text" placeholder="Lọc bài học, tác phẩm, tiếng Việt..."
            class="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:border-rose-500">
        </div>

        <!-- Scrollable Lesson List -->
        <nav id="sidebar-nav" class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 space-y-3 text-sm pb-8">
          ${sidebarNavHtml}
        </nav>
      </aside>

      <!-- Mobile Sidebar Drawer -->
      <div id="mobile-sidebar" class="fixed inset-0 z-50 hidden lg:hidden">
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onclick="toggleMobileSidebar()"></div>
        <div class="fixed inset-y-0 left-0 w-80 max-w-[88vw] bg-white dark:bg-slate-900 shadow-2xl p-4 flex flex-col">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            <span class="font-extrabold text-sm text-rose-600 dark:text-rose-400"><i class="fa-solid fa-book-open mr-1.5"></i>Mục lục Ngữ Văn 10</span>
            <button onclick="toggleMobileSidebar()" class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="custom-scrollbar overflow-y-auto flex-1 min-h-0 space-y-2 pr-1">
            ${sidebarNavHtml}
          </div>
        </div>
      </div>

      <!-- Main Content Column (8 Columns) -->
      <main class="lg:col-span-8 space-y-10 min-w-0">
        <!-- Course Intro Hero Card -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-900 via-red-800 to-amber-800 text-white shadow-lg relative overflow-hidden">
          <div class="relative z-10 space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-bold tracking-wide uppercase">
              <i class="fa-solid fa-sparkles text-amber-300"></i> Bộ sách Kết nối tri thức với cuộc sống • GDPT 2018
            </div>
            <h2 class="text-2xl sm:text-3xl font-black leading-tight">
              HỌC LIỆU NGỮ VĂN 10 TOÀN DIỆN (TẬP 1 &amp; TẬP 2)
            </h2>
            <p class="text-xs sm:text-sm text-rose-100 leading-relaxed max-w-3xl">
              Tổng hợp đầy đủ <strong>9 bài học lớn</strong> qua hai tập sách. Mỗi bài học được thiết kế tách biệt rõ ràng từng hoạt động:
              <strong>A. Tri thức ngữ văn → B. Văn bản đọc chính &amp; Thực hành đọc → C. Thực hành Tiếng Việt → D. Quy trình Viết → E. Nói và Nghe → F. Sơ đồ tư duy SVG &amp; Củng cố → G. Trắc nghiệm ôn tập</strong>.
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-lg sm:text-xl font-black text-amber-300">9 Bài lớn</div>
                <div class="text-[11px] text-rose-100">Đủ Tập 1 (1–5) &amp; Tập 2 (6–9)</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-lg sm:text-xl font-black text-emerald-300">33 Văn bản</div>
                <div class="text-[11px] text-rose-100">Đọc chính &amp; Thực hành đọc</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-lg sm:text-xl font-black text-sky-300">10 Sơ đồ SVG</div>
                <div class="text-[11px] text-rose-100">Cấu trúc thể loại &amp; lập luận</div>
              </div>
              <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div class="text-lg sm:text-xl font-black text-pink-300">45 Câu hỏi</div>
                <div class="text-[11px] text-rose-100">Trắc nghiệm có giải thích</div>
              </div>
            </div>
          </div>
        </div>

        ${mainLessonsHtml}

        ${sharedSectionHtml}
      </main>

    </div>
  </div>

  <!-- ==================== MODAL 1: SEARCH (Ctrl+K) ==================== -->
  <div id="modal-search" class="fixed inset-0 z-50 hidden items-start justify-center pt-16 px-4">
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onclick="closeModal('modal-search')"></div>
    <div class="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-rose-600 text-lg"></i>
        <input id="modal-search-input" type="text" placeholder="Nhập tên tác phẩm (vd: Chữ người tử tù, Thu hứng, Bình Ngô đại cáo, Đăm Săn...)"
          class="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white focus:outline-none">
        <button onclick="closeModal('modal-search')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">ESC</button>
      </div>
      <div id="modal-search-results" class="custom-scrollbar max-h-96 overflow-y-auto p-3 space-y-2"></div>
    </div>
  </div>

  <!-- ==================== MODAL 2: BẢN ĐỒ 9 BÀI HỌC ==================== -->
  <div id="modal-map" class="fixed inset-0 z-50 hidden items-center justify-center p-4">
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onclick="closeModal('modal-map')"></div>
    <div class="relative w-full max-w-5xl max-h-[88vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10">
      <div class="p-4 sm:p-5 bg-gradient-to-r from-rose-600 to-amber-600 text-white flex items-center justify-between">
        <div>
          <h3 class="font-black text-base sm:text-lg"><i class="fa-solid fa-table-list mr-2"></i>Bản đồ Thể loại – Sản phẩm học tập Ngữ Văn 10 (Tập 1 &amp; Tập 2)</h3>
          <p class="text-xs text-rose-100">Nhấn vào từng bài để chuyển nhanh đến nội dung chi tiết</p>
        </div>
        <button onclick="closeModal('modal-map')" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="custom-scrollbar overflow-y-auto p-4 sm:p-6">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
              <th class="px-3 py-2.5">Bài</th>
              <th class="px-3 py-2.5">Chủ đề bài học</th>
              <th class="px-3 py-2.5">Trọng tâm đọc</th>
              <th class="px-3 py-2.5">Thực hành Tiếng Việt</th>
              <th class="px-3 py-2.5">Sản phẩm Viết</th>
              <th class="px-3 py-2.5">Nói và nghe</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
            ${mapRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 3: SỔ TAY TIẾNG VIỆT & QUY TRÌNH VIẾT ==================== -->
  <div id="modal-handbook" class="fixed inset-0 z-50 hidden items-center justify-center p-4">
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onclick="closeModal('modal-handbook')"></div>
    <div class="relative w-full max-w-4xl max-h-[88vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10">
      <div class="p-4 sm:p-5 bg-gradient-to-r from-amber-600 to-emerald-600 text-white flex items-center justify-between">
        <div>
          <h3 class="font-black text-base sm:text-lg"><i class="fa-solid fa-spell-check mr-2"></i>Sổ tay Tiếng Việt &amp; Quy trình Đọc – Viết Ngữ Văn 10</h3>
          <p class="text-xs text-amber-100">Tổng hợp nhanh kiến thức Tiếng Việt 9 bài và 5 bước phân tích văn bản văn học</p>
        </div>
        <button onclick="closeModal('modal-handbook')" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="custom-scrollbar overflow-y-auto p-5 space-y-6 text-xs sm:text-sm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-rose-50/60 dark:bg-slate-800 border border-rose-200 dark:border-slate-700">
            <h4 class="font-extrabold text-rose-700 dark:text-rose-400 mb-1.5">1. Từ Hán Việt (Bài 1 &amp; Bài 6)</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Hiểu đúng nghĩa từng yếu tố trong ngữ cảnh; tránh nhầm từ gần âm (<em>yếu điểm ≠ điểm yếu, tri thức ≠ trí thức</em>); tránh lạm dụng gây mất tự nhiên.</p>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
            <h4 class="font-extrabold text-emerald-700 dark:text-emerald-400 mb-1.5">2. Lỗi dùng từ &amp; Trật tự từ (Bài 2)</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Tránh lặp từ thừa, dùng từ sai nghĩa, sai khả năng kết hợp, sai phong cách; sắp xếp cụm từ đúng quan hệ ngữ pháp và mục đích nhấn mạnh.</p>
          </div>
          <div class="p-4 rounded-2xl bg-blue-50/60 dark:bg-slate-800 border border-blue-200 dark:border-slate-700">
            <h4 class="font-extrabold text-blue-700 dark:text-blue-400 mb-1.5">3. Mạch lạc &amp; Liên kết (Bài 3)</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Mạch lạc: các đoạn thống nhất hướng về luận đề. Liên kết: dùng phép lặp, thế, nối, đồng nghĩa/liên tưởng hợp logic.</p>
          </div>
          <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
            <h4 class="font-extrabold text-amber-700 dark:text-amber-400 mb-1.5">4. Trích dẫn, Cước chú &amp; Tỉnh lược (Bài 4)</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Trích nguyên văn đặt trong <code>“...”</code>; dùng <code>[...]</code> khi lược bớt từ/câu mà không làm sai ý nguồn; ghi nguồn minh bạch để chống đạo văn.</p>
          </div>
          <div class="p-4 rounded-2xl bg-purple-50/60 dark:bg-slate-800 border border-purple-200 dark:border-slate-700">
            <h4 class="font-extrabold text-purple-700 dark:text-purple-400 mb-1.5">5. Chêm xen &amp; Liệt kê (Bài 7)</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Chêm xen (giữa dấu phẩy, gạch ngang, ngoặc đơn) bổ sung chú thích/cảm xúc. Liệt kê nối tiếp các thành phần đồng loại để diễn tả toàn diện.</p>
          </div>
          <div class="p-4 rounded-2xl bg-teal-50/60 dark:bg-slate-800 border border-teal-200 dark:border-slate-700">
            <h4 class="font-extrabold text-teal-700 dark:text-teal-400 mb-1.5">6. Phương tiện phi ngôn ngữ &amp; Biểu đồ (Bài 8 &amp; 9)</h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Biểu đồ tròn (cơ cấu %), Sơ đồ Venn (so sánh giao nhau), Biểu đồ thời gian (diễn biến), Sơ đồ cây (phân cấp thứ bậc).</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL 4: ĐẤU TRƯỜNG VĂN HỌC 10 (45:00) ==================== -->
  <div id="modal-exam" class="fixed inset-0 z-50 hidden items-center justify-center p-4">
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onclick="closeModal('modal-exam')"></div>
    <div class="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10">
      <div class="p-4 sm:p-5 bg-gradient-to-r from-rose-700 via-red-700 to-amber-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
            <i class="fa-solid fa-trophy text-lg"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Đấu Trường Văn Học 10 – Kiểm Tra Tổng Hợp</h3>
            <p class="text-xs text-rose-100">Đề thi 25 câu trắc nghiệm ngẫu nhiên từ 9 bài Tập 1 &amp; Tập 2 • Thời gian 45 phút</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div id="exam-timer" class="px-3 py-1 rounded-xl bg-black/25 font-mono font-black text-sm">45:00</div>
          <button onclick="closeModal('modal-exam')" class="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <div id="exam-body" class="custom-scrollbar overflow-y-auto p-5 space-y-4 flex-1"></div>

      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
        <div id="exam-score-banner" class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
          Hãy chọn đáp án cho các câu hỏi rồi nhấn “Nộp bài &amp; Chấm điểm”.
        </div>
        <div class="flex items-center gap-2">
          <button onclick="startNewExam()" class="px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-300 transition">
            <i class="fa-solid fa-rotate mr-1"></i>Đề mới
          </button>
          <button onclick="submitExam()" id="exam-submit-btn" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs transition">
            <i class="fa-solid fa-check-double mr-1"></i>Nộp bài &amp; Chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Interactive Script -->
  <script>
    const SEARCH_INDEX = ${JSON.stringify(searchIndex)};
    const EXAM_BANK = ${JSON.stringify(allExamQuestions)};

    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
    }
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeIcon.className = isDark ? 'fa-solid fa-sun text-sm text-amber-400' : 'fa-solid fa-moon text-sm';
    });

    // 2. Mobile Sidebar
    function toggleMobileSidebar() {
      const el = document.getElementById('mobile-sidebar');
      el.classList.toggle('hidden');
    }

    // 3. Sidebar Filter
    document.getElementById('sidebar-filter').addEventListener('input', function(e) {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('#sidebar-nav a.nav-link').forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(q) ? '' : 'none';
      });
    });

    // 4. Progress Tracking (9 Lessons)
    let completedLessons = JSON.parse(localStorage.getItem('van10_completed') || '[]');
    function updateProgressUI() {
      const count = completedLessons.length;
      const pct = Math.round((count / 9) * 100);
      document.getElementById('progress-text').textContent = count + ' / 9 bài (' + pct + '%)';
      document.getElementById('progress-bar').style.width = pct + '%';
      for (let i = 1; i <= 9; i++) {
        const btn = document.getElementById('read-btn-' + i);
        if (!btn) continue;
        if (completedLessons.includes(i)) {
          btn.className = 'px-3 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition';
          btn.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>Đã hoàn thành</span>';
        } else {
          btn.className = 'px-3 py-1 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 transition flex items-center gap-1.5';
          btn.innerHTML = '<i class="fa-regular fa-circle-check"></i><span>Đánh dấu đã học</span>';
        }
      }
    }
    function markLessonRead(num) {
      const idx = completedLessons.indexOf(num);
      if (idx === -1) completedLessons.push(num);
      else completedLessons.splice(idx, 1);
      localStorage.setItem('van10_completed', JSON.stringify(completedLessons));
      updateProgressUI();
    }
    updateProgressUI();

    // 5. In-lesson Quiz Checker
    function checkLessonQuiz(lessonNum, qIdx, selectedIdx, correctIdx) {
      for (let o = 0; o < 4; o++) {
        const btn = document.getElementById('qbtn-' + lessonNum + '-' + qIdx + '-' + o);
        if (!btn) continue;
        btn.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/60', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/60');
        if (o === correctIdx) {
          btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/60');
        } else if (o === selectedIdx && selectedIdx !== correctIdx) {
          btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/60');
        }
      }
      const expEl = document.getElementById('qexp-' + lessonNum + '-' + qIdx);
      if (expEl) expEl.classList.remove('hidden');
    }

    // 6. Modals & Search (Ctrl+K)
    function openModal(id) {
      const m = document.getElementById(id);
      if (!m) return;
      m.classList.remove('hidden');
      m.classList.add('flex');
      if (id === 'modal-search') {
        const inp = document.getElementById('modal-search-input');
        inp.value = '';
        renderSearchResults('');
        setTimeout(() => inp.focus(), 50);
      } else if (id === 'modal-exam' && currentExamQuestions.length === 0) {
        startNewExam();
      }
    }
    function closeModal(id) {
      const m = document.getElementById(id);
      if (!m) return;
      m.classList.add('hidden');
      m.classList.remove('flex');
    }
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('modal-search');
      } else if (e.key === 'Escape') {
        ['modal-search', 'modal-map', 'modal-handbook', 'modal-exam'].forEach(closeModal);
      }
    });

    function renderSearchResults(query) {
      const container = document.getElementById('modal-search-results');
      const q = query.toLowerCase().trim();
      const matches = SEARCH_INDEX.filter(item =>
        !q || item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.badge.toLowerCase().includes(q)
      ).slice(0, 20);

      if (matches.length === 0) {
        container.innerHTML = '<div class="p-6 text-center text-xs text-slate-400">Không tìm thấy kết quả phù hợp.</div>';
        return;
      }
      container.innerHTML = matches.map(item => \`
        <a href="#\${item.id}" onclick="closeModal('modal-search')" class="block p-3 rounded-2xl border border-slate-200/70 dark:border-slate-800 hover:border-rose-400 hover:bg-rose-50/40 dark:hover:bg-slate-800 transition">
          <div class="flex items-center justify-between gap-2 mb-0.5">
            <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">\${item.title}</span>
            <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-[10px] font-bold shrink-0">\${item.badge}</span>
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">\${item.subtitle}</div>
        </a>
      \`).join('');
    }
    document.getElementById('modal-search-input').addEventListener('input', (e) => renderSearchResults(e.target.value));

    // 7. Exam Arena (25 Questions / 45 Minutes)
    let currentExamQuestions = [];
    let userExamAnswers = {};
    let examTimerInterval = null;
    let examSecondsRemaining = 45 * 60;

    function startNewExam() {
      const shuffled = [...EXAM_BANK].sort(() => Math.random() - 0.5);
      currentExamQuestions = shuffled.slice(0, 25);
      userExamAnswers = {};
      examSecondsRemaining = 45 * 60;
      document.getElementById('exam-score-banner').textContent = 'Hãy chọn đáp án cho 25 câu hỏi rồi nhấn “Nộp bài & Chấm điểm”.';
      document.getElementById('exam-submit-btn').disabled = false;

      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examSecondsRemaining--;
        if (examSecondsRemaining <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
          return;
        }
        const m = String(Math.floor(examSecondsRemaining / 60)).padStart(2, '0');
        const s = String(examSecondsRemaining % 60).padStart(2, '0');
        document.getElementById('exam-timer').textContent = m + ':' + s;
      }, 1000);

      renderExamQuestions(false);
    }

    function selectExamOption(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;
      for (let o = 0; o < 4; o++) {
        const btn = document.getElementById('exam-opt-' + qIdx + '-' + o);
        if (!btn) continue;
        if (o === oIdx) {
          btn.className = 'w-full text-left px-3.5 py-2 rounded-xl border-2 border-rose-600 bg-rose-50 dark:bg-rose-950/60 text-xs sm:text-sm font-semibold text-rose-900 dark:text-rose-200 flex items-start gap-2.5';
        } else {
          btn.className = 'w-full text-left px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5';
        }
      }
    }

    function renderExamQuestions(isSubmitted) {
      const container = document.getElementById('exam-body');
      container.innerHTML = currentExamQuestions.map((qObj, idx) => {
        const chosen = userExamAnswers[idx];
        const opts = qObj.options.map((opt, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          let cls = 'w-full text-left px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5';
          if (!isSubmitted && chosen === oIdx) {
            cls = 'w-full text-left px-3.5 py-2 rounded-xl border-2 border-rose-600 bg-rose-50 dark:bg-rose-950/60 text-xs sm:text-sm font-semibold text-rose-900 dark:text-rose-200 flex items-start gap-2.5';
          } else if (isSubmitted) {
            if (oIdx === qObj.ans) {
              cls = 'w-full text-left px-3.5 py-2 rounded-xl border-2 border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5';
            } else if (chosen === oIdx && chosen !== qObj.ans) {
              cls = 'w-full text-left px-3.5 py-2 rounded-xl border-2 border-rose-600 bg-rose-50 dark:bg-rose-950/60 text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200 flex items-start gap-2.5';
            }
          }
          return \`
            <button type="button" id="exam-opt-\${idx}-\${oIdx}" \${isSubmitted ? 'disabled' : \`onclick="selectExamOption(\${idx}, \${oIdx})"\`} class="\${cls}">
              <span class="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">\${letter}</span>
              <span class="flex-1">\${opt}</span>
            </button>
          \`;
        }).join('');

        return \`
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2.5">
            <div class="flex items-center justify-between text-[11px] font-bold text-rose-600 dark:text-rose-400">
              <span>Câu \${idx + 1} / \${currentExamQuestions.length}</span>
              <span>Bài \${qObj.lesson}: \${qObj.lessonTitle}</span>
            </div>
            <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">\${qObj.q}</p>
            <div class="grid grid-cols-1 gap-2">\${opts}</div>
            \${isSubmitted ? \`<div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200"><strong>Giải thích:</strong> \${qObj.exp}</div>\` : ''}
          </div>
        \`;
      }).join('');
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let correct = 0;
      currentExamQuestions.forEach((qObj, idx) => {
        if (userExamAnswers[idx] === qObj.ans) correct++;
      });
      const score10 = ((correct / currentExamQuestions.length) * 10).toFixed(1);
      document.getElementById('exam-score-banner').innerHTML =
        \`Kết quả: <span class="text-emerald-600 dark:text-emerald-400 font-black">\${correct} / \${currentExamQuestions.length} câu đúng (\${score10} / 10 điểm)</span>\`;
      document.getElementById('exam-submit-btn').disabled = true;
      renderExamQuestions(true);
    }

    // 8. ScrollSpy for Sidebar Navigation
    const articles = document.querySelectorAll('article.lesson-card, section#kien-thuc-dung-chung');
    const navLinks = document.querySelectorAll('#sidebar-nav a.nav-link');
    window.addEventListener('scroll', () => {
      let currentId = '';
      articles.forEach(art => {
        const rect = art.getBoundingClientRect();
        if (rect.top <= 160) currentId = art.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
      });
    }, { passive: true });
  </script>
</body>
</html>
`;

// Validate inline scripts before writing
const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let idx = 0;
while ((match = scriptRegex.exec(fullHtml)) !== null) {
  idx++;
  new vm.Script(match[1]);
  console.log(`Inline script ${idx}: VALID (${match[1].length} chars)`);
}

const van10Path = path.join(__dirname, '..', 'courses', 'van_10.html');
const nguvan10Path = path.join(__dirname, '..', 'courses', 'nguvan_10.html');

fs.writeFileSync(van10Path, fullHtml, 'utf8');
fs.writeFileSync(nguvan10Path, fullHtml, 'utf8');

console.log(`Successfully generated courses/van_10.html and courses/nguvan_10.html! Size: ${(fullHtml.length / 1024).toFixed(1)} KB`);
