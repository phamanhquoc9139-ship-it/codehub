// scratch/build_sinhhoc11.js
const fs = require('fs');
const path = require('path');

const data = require('./sinhhoc11_data.js');
const diagrams = require('./sinhhoc11_diagrams.js');

console.log('Compiling courses/sinhhoc_11.html...');

function formatInline(str) {
  if (!str) return '';
  return String(str)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-emerald-700 dark:text-emerald-300 font-medium">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-emerald-100/80 dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-semibold">$1</code>');
}

// Generate the lessons HTML
function generateLessonsHtml() {
  let html = '';
  for (let num = 1; num <= 29; num++) {
    const l = data.lessons[num];
    if (!l) continue;

    const isPrac = l.isPractical;
    const badgeBg = isPrac ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700' : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700';
    const badgeText = isPrac ? 'THỰC HÀNH & THÍ NGHIỆM' : 'LÍ THUYẾT & CƠ CHẾ';

    const diagObj = diagrams.lessonDiagrams[num];

    html += `
    <!-- BÀI ${num}: ${l.title} -->
    <article id="bai-${num}" class="lesson-article mb-12 scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md">
      <!-- Lesson Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-base shadow-sm">
            ${num}
          </span>
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeBg}">
                ${badgeText}
              </span>
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Chương ${l.chapter}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Bài ${num}. ${l.title}
            </h3>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <label class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer transition text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <input type="checkbox" id="check-bai-${num}" onchange="toggleLessonComplete(${num})" class="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer">
            <span>Đã học xong</span>
          </label>
        </div>
      </div>

      <!-- Subtitle -->
      <p class="mt-4 text-sm font-medium text-emerald-800 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
        <i class="fas fa-compass mr-2"></i><strong>Trọng tâm bài học:</strong> ${l.subtitle}
      </p>

      <!-- Visual SVG Diagram Block -->
      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-850 border border-emerald-200/80 dark:border-slate-700/80 shadow-xs">
        <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-100 dark:border-slate-800">
          <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <i class="fas fa-diagram-project"></i>
            <span>Hình Minh Họa & Sơ Đồ Trọng Tâm Bài ${num}</span>
          </div>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 italic hidden sm:inline">Chuẩn hóa cấu trúc SGK Sinh học 11 Kết nối tri thức</span>
        </div>
        <div class="overflow-x-auto rounded-xl p-2 bg-white dark:bg-slate-900/80 border border-emerald-100/60 dark:border-slate-800">
          ${diagObj ? diagObj.svg : ''}
        </div>
        <div class="mt-3 pt-2.5 border-t border-emerald-100/80 dark:border-slate-800 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
          <i class="fas fa-circle-info text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"></i>
          <span><strong>Hình/sơ đồ cần ghi nhớ:</strong> ${diagObj ? diagObj.note : ''}</span>
        </div>
      </div>

      <!-- 1. Mục tiêu bài học -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-bullseye text-emerald-600"></i> 1. Mục tiêu bài học
        </h4>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            ${l.objectives.map(obj => `<li class="flex items-start gap-2.5"><i class="fas fa-check-circle text-emerald-500 mt-1 shrink-0"></i><span>${formatInline(obj)}</span></li>`).join('\n')}
          </ul>
        </div>
      </div>
    `;

    if (!isPrac) {
      // Theoretical Lesson: Sections 2-6
      html += `
      <!-- 2. Khái niệm trọng tâm -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-book-open text-blue-600"></i> 2. Khái niệm trọng tâm & Bản chất sinh học
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${l.concepts.map(c => `
            <div class="p-4 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700/80">
              <h5 class="text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-300 flex items-center gap-1.5 mb-1.5">
                <i class="fas fa-bookmark text-blue-500 text-xs"></i> ${c.term}
              </h5>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${formatInline(c.def)}</p>
            </div>
          `).join('\n')}
        </div>
      </div>

      <!-- 3. Sơ đồ & Quá trình sinh học -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-diagram-project text-purple-600"></i> 3. Sơ đồ & Quá trình: ${l.process.title}
        </h4>
        <div class="p-4 rounded-xl bg-purple-50/40 dark:bg-slate-800/50 border border-purple-100 dark:border-slate-800">
          <div class="space-y-2.5 mb-4">
            ${l.process.steps.map((step, idx) => `
              <div class="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-purple-100/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs shrink-0">${idx + 1}</span>
                <span class="leading-relaxed">${formatInline(step)}</span>
              </div>
            `).join('\n')}
          </div>
          <div class="p-3 rounded-lg bg-purple-100/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 text-xs font-semibold text-purple-900 dark:text-purple-300">
            <i class="fas fa-arrow-right-arrow-left mr-2"></i><strong>Tóm tắt luân chuyển:</strong> ${formatInline(l.process.flowSummary)}
          </div>
        </div>
      </div>

      <!-- 4. Giải thích cơ chế -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-gears text-amber-600"></i> 4. Giải thích cơ chế phân tử & tế bào
        </h4>
        <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-slate-800/50 border border-amber-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
          <p><i class="fas fa-microscope text-amber-500 mr-2"></i>${formatInline(l.mechanism)}</p>
        </div>
      </div>

      <!-- 5. Vận dụng thực tiễn & Nông nghiệp/Y học -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-seedling text-emerald-600"></i> 5. Vận dụng thực tiễn, Y học & Nông nghiệp
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${l.applications.map(app => `
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300">
              <i class="fas fa-lightbulb text-amber-500 mb-1.5 block text-sm"></i>
              ${formatInline(app)}
            </div>
          `).join('\n')}
        </div>
      </div>

      <!-- 6. Thực hành / Quan sát chuyên sâu -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-vial text-teal-600"></i> 6. Thực hành, Quan sát & Lưu ý thực nghiệm
        </h4>
        <div class="p-4 rounded-xl bg-teal-50/40 dark:bg-slate-800/50 border border-teal-100 dark:border-slate-800 text-xs sm:text-sm text-teal-900 dark:text-teal-200">
          <i class="fas fa-clipboard-check text-teal-600 mr-2"></i>${formatInline(l.experimentsNote)}
        </div>
      </div>
      `;
    } else {
      // Practical Lesson: Detailed Experimental Breakdown
      html += `
      <!-- 2. Giả thuyết khoa học -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-flask text-amber-600"></i> 2. Giả thuyết khoa học (Hypothesis)
        </h4>
        <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-slate-800/50 border border-amber-200/60 dark:border-slate-800 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
          <i class="fas fa-quote-left text-amber-400 mr-2"></i><strong>Giả thuyết:</strong> ${formatInline(l.hypothesis)}
        </div>
      </div>

      <!-- 3. Phân tích hệ thống Biến số -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-sliders text-indigo-600"></i> 3. Phân tích hệ thống biến số (Variables)
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700">
            <span class="block text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider mb-1"><i class="fas fa-toggle-on mr-1 text-indigo-500"></i> Biến độc lập</span>
            <p class="text-xs text-slate-700 dark:text-slate-300">${formatInline(l.variables.independent)}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
            <span class="block text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-1"><i class="fas fa-chart-line mr-1 text-blue-500"></i> Biến phụ thuộc</span>
            <p class="text-xs text-slate-700 dark:text-slate-300">${formatInline(l.variables.dependent)}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <span class="block text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-1"><i class="fas fa-lock mr-1 text-slate-500"></i> Biến kiểm soát</span>
            <p class="text-xs text-slate-700 dark:text-slate-300">${formatInline(l.variables.controlled)}</p>
          </div>
        </div>
      </div>

      <!-- 4. Dụng cụ & Hóa chất -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-toolbox text-slate-600 dark:text-slate-400"></i> 4. Mẫu vật, Dụng cụ & Hóa chất
        </h4>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          ${l.materials.map(m => `<div class="flex items-start gap-2"><i class="fas fa-check text-emerald-500 mt-1 shrink-0"></i><span>${formatInline(m)}</span></div>`).join('\n')}
        </div>
      </div>

      <!-- 5. Quy trình thao tác -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-list-check text-blue-600"></i> 5. Quy trình thao tác chuẩn xác từng bước
        </h4>
        <div class="space-y-3">
          ${l.procedure.map((proc, pIdx) => `
            <div class="p-3.5 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">${pIdx + 1}</span>
              <span class="leading-relaxed">${formatInline(proc)}</span>
            </div>
          `).join('\n')}
        </div>
      </div>

      <!-- 6. Đối chứng & Kết quả thu thập -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-square-poll-vertical text-emerald-600"></i> 6. Bố trí đối chứng & Kết quả ghi nhận
        </h4>
        <div class="p-4 rounded-xl bg-emerald-50/40 dark:bg-slate-800/50 border border-emerald-100 dark:border-slate-800 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          ${l.results.map(r => `<div class="flex items-start gap-2"><i class="fas fa-arrow-right text-emerald-600 mt-1 shrink-0"></i><span>${formatInline(r)}</span></div>`).join('\n')}
        </div>
      </div>

      <!-- 7. Kết luận & An toàn phòng lab -->
      <div class="mt-6">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fas fa-shield-halved text-rose-600"></i> 7. Kết luận khoa học & Quy tắc an toàn bắt buộc
        </h4>
        <div class="p-4 rounded-xl bg-rose-50/40 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2 text-xs sm:text-sm text-rose-950 dark:text-rose-200">
          ${l.conclusionAndSafety.map(c => `<div class="flex items-start gap-2"><i class="fas fa-triangle-exclamation text-rose-500 mt-1 shrink-0"></i><span>${formatInline(c)}</span></div>`).join('\n')}
        </div>
      </div>
      `;
    }

    // Section 7 (or 8 for practicals): Interactive Quiz
    html += `
      <!-- Câu hỏi tự kiểm tra -->
      <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <h4 class="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
          <i class="fas fa-circle-question text-emerald-600"></i> Câu hỏi tự kiểm tra & Đánh giá năng lực (3 câu)
        </h4>
        <div class="space-y-4">
          ${l.quiz.map((q, qIdx) => `
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80" id="quiz-${num}-${qIdx}">
              <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-3">
                <span class="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-bold mr-1">Câu ${qIdx + 1}</span>
                ${formatInline(q.q)}
              </p>
              <div class="space-y-2">
                ${q.options.map((opt, oIdx) => `
                  <button type="button" onclick="checkQuiz(${num}, ${qIdx}, ${oIdx}, ${q.answer})" class="quiz-btn w-full text-left p-3 rounded-lg text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-slate-800 transition flex items-center justify-between group">
                    <span>${formatInline(opt)}</span>
                    <i class="far fa-circle text-slate-400 group-hover:text-emerald-500 shrink-0 ml-2"></i>
                  </button>
                `).join('\n')}
              </div>
              <div id="quiz-explain-${num}-${qIdx}" class="hidden mt-3 p-3 rounded-lg text-xs leading-relaxed border"></div>
            </div>
          `).join('\n')}
        </div>
      </div>
    </article>
    `;
  }
  return html;
}

// Generate the 7 Diagram Groups HTML
function generateDiagramGroupsHtml() {
  let html = `
  <section id="nhom-so-do" class="mb-16 scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
    <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
      <span class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
        <i class="fas fa-layer-group"></i>
      </span>
      <div>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          7 Nhóm Sơ đồ & Hình ảnh Bắt buộc nên giữ khi làm nội dung số
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Hệ thống trực quan hóa toàn bộ chuỗi sinh lí cơ thể thực vật và động vật chuẩn SGK Sinh học 11
        </p>
      </div>
    </div>

    <div class="mt-8 space-y-12">
  `;

  data.diagramGroupsInfo.forEach((grp, idx) => {
    const svgContent = diagrams.masterGroups[grp.id] || '';
    html += `
      <div id="${grp.id}" class="diagram-group-card p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 transition hover:border-purple-300 dark:hover:border-purple-800">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            NHÓM SƠ ĐỒ ${grp.num}
          </span>
          <div class="flex flex-wrap gap-1.5">
            ${grp.keywords.map(kw => `<span class="px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 text-[11px]">${kw}</span>`).join('')}
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
          ${grp.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          ${grp.desc}
        </p>
        <div class="overflow-x-auto rounded-xl p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          ${svgContent}
        </div>
      </div>
    `;
  });

  html += `
    </div>
  </section>
  `;
  return html;
}

// Generate the Lab Checklist HTML
function generateLabChecklistHtml() {
  let html = `
  <section id="checklist-thuc-hanh" class="mb-16 scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
    <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
      <span class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
        <i class="fas fa-clipboard-check"></i>
      </span>
      <div>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Checklist Thí nghiệm, Thực hành và An toàn Sinh học 11
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Bảng kiểm tra 8 bài thực hành chuẩn mực: Thao tác, Bố trí đối chứng, Kiểm soát sai số & An toàn tuyệt đối
        </p>
      </div>
    </div>

    <!-- General Safety Alert Box -->
    <div class="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
      <p class="font-bold flex items-center gap-2 mb-2 text-amber-950 dark:text-amber-300">
        <i class="fas fa-triangle-exclamation text-amber-600"></i> NGUYÊN TẮC CỐT LÕI CHO MỌI BÀI THỰC HÀNH SINH HỌC 11:
      </p>
      <ul class="space-y-1.5 pl-5 list-disc text-slate-700 dark:text-slate-300">
        <li>Mọi thực hành đều phải xác định rõ: <strong>Mục đích, Giả thuyết, Biến độc lập, Biến phụ thuộc, Biến kiểm soát</strong> và <strong>Mẫu đối chứng</strong>.</li>
        <li>Chỉ thay đổi duy nhất một biến độc lập, giữ nguyên mọi điều kiện môi trường khác.</li>
        <li>Đo lặp lại nhiều lần để lấy giá trị trung bình; <strong>Tuyệt đối không kết luận vượt quá dữ liệu thực tế thu thập được</strong>.</li>
        <li>Hóa chất dễ cháy (cồn, benzen) bắt buộc đun cách thủy, tuyệt đối không đun trực tiếp trên ngọn lửa đèn cồn.</li>
        <li>Dao kéo luôn hướng lưỡi ra xa cơ thể; thực nghiệm trên động vật phải tuân thủ nghiêm ngặt nguyên tắc Đạo đức sinh học 3R.</li>
      </ul>
    </div>

    <!-- Table of 8 Practicals -->
    <div class="mt-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table class="w-full text-left text-xs sm:text-sm divide-y divide-slate-200 dark:divide-slate-800">
        <thead class="bg-slate-50 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
          <tr>
            <th class="p-3 w-12 text-center">Bài</th>
            <th class="p-3 w-48">Tên bài thực hành</th>
            <th class="p-3">Thao tác cốt lõi cần đạt</th>
            <th class="p-3 w-56">Mẫu đối chứng & Kiểm soát</th>
            <th class="p-3 w-64">Quy tắc an toàn đặc thù</th>
            <th class="p-3 w-20 text-center">Đạt</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
  `;

  data.labChecklist.forEach(item => {
    html += `
          <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
            <td class="p-3 text-center font-bold text-emerald-600">${item.lessonNum}</td>
            <td class="p-3 font-semibold text-slate-900 dark:text-white">${item.title}</td>
            <td class="p-3 text-xs leading-relaxed">${item.coreSteps}</td>
            <td class="p-3 text-xs text-blue-700 dark:text-blue-300 leading-relaxed">${item.controlSetup}</td>
            <td class="p-3 text-xs text-rose-700 dark:text-rose-300 leading-relaxed">${item.safetyRules}</td>
            <td class="p-3 text-center">
              <input type="checkbox" class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
            </td>
          </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  </section>
  `;
  return html;
}

// Generate the Left Sidebar HTML
function generateSidebarHtml() {
  let html = `
    <!-- Sticky Sidebar -->
    <aside class="w-full lg:w-80 shrink-0">
      <div class="sticky top-20 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm max-h-[calc(100vh-6rem)] flex flex-col">
        <!-- Sidebar Search -->
        <div class="relative mb-4">
          <input type="text" id="sidebar-filter" oninput="filterSidebarLessons(this.value)" placeholder="Lọc nhanh 29 bài học..." class="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <i class="fas fa-search absolute left-3 top-2.5 text-slate-400 text-xs"></i>
        </div>

        <!-- Quick Links -->
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold">
          <a href="#nhom-so-do" class="flex-1 text-center py-1.5 px-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 transition">
            <i class="fas fa-layer-group mr-1"></i>7 Sơ đồ
          </a>
          <a href="#checklist-thuc-hanh" class="flex-1 text-center py-1.5 px-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition">
            <i class="fas fa-list-check mr-1"></i>Checklist
          </a>
        </div>

        <!-- Chapters List -->
        <div class="overflow-y-auto space-y-3 flex-1 pr-1 custom-scrollbar" id="sidebar-chapters">
  `;

  data.chapters.forEach(ch => {
    html += `
          <div class="sidebar-chapter rounded-xl border border-slate-100 dark:border-slate-800/80 overflow-hidden">
            <button type="button" onclick="toggleChapter(${ch.num})" class="w-full text-left p-3 bg-slate-50/70 dark:bg-slate-800/60 hover:bg-emerald-50/60 dark:hover:bg-slate-800 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white transition">
              <span class="flex items-center gap-2 truncate">
                <i class="fas ${ch.icon} text-emerald-600 text-xs shrink-0"></i>
                <span class="truncate">${ch.shortTitle}</span>
              </span>
              <i id="ch-icon-${ch.num}" class="fas fa-chevron-down text-slate-400 text-xs transition-transform duration-200"></i>
            </button>
            <div id="ch-body-${ch.num}" class="p-2 space-y-1 bg-white dark:bg-slate-900">
    `;

    ch.lessons.forEach(lNum => {
      const l = data.lessons[lNum];
      const isPrac = l.isPractical;
      const dotColor = isPrac ? 'text-amber-500' : 'text-emerald-500';
      html += `
              <a href="#bai-${lNum}" id="sidebar-link-${lNum}" class="sidebar-lesson-link block p-2 rounded-lg text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition flex items-center justify-between">
                <span class="truncate flex items-center gap-1.5">
                  <i class="fas fa-circle ${dotColor} text-[8px] shrink-0"></i>
                  <span class="truncate">Bài ${lNum}. ${l.title}</span>
                </span>
                <span id="badge-status-${lNum}" class="hidden text-[10px] text-emerald-600 font-bold shrink-0 ml-1"><i class="fas fa-check"></i></span>
              </a>
      `;
    });

    html += `
            </div>
          </div>
    `;
  });

  html += `
        </div>
      </div>
    </aside>
  `;
  return html;
}

// Assemble Master HTML
const masterHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sinh Học 11 — KẾT NỐI TRI THỨC | Nền tảng Học tập Toàn diện</title>
  
  <!-- Tailwind CSS & FontAwesome -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts: Inter & Outfit -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Outfit', 'sans-serif'],
          }
        }
      }
    };

    // Dark mode init
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>

  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4 { font-family: 'Outfit', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- TOP STICKY NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Back Button & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition" title="Quay lại trang chủ">
          <i class="fas fa-arrow-left"></i>
        </a>
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-sm text-lg">
            <i class="fas fa-dna"></i>
          </span>
          <div>
            <h1 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight flex items-center gap-2">
              Sinh Học 11
              <span class="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                KẾT NỐI TRI THỨC
              </span>
            </h1>
            <p class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Phần 3 – Sinh học cơ thể (5 chương, 29 bài)</p>
          </div>
        </div>
      </div>

      <!-- Center: Progress -->
      <div class="hidden md:flex items-center gap-3 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
        <span class="text-xs font-semibold text-slate-600 dark:text-slate-300">Tiến độ:</span>
        <div class="w-32 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div id="navbar-progress-bar" class="bg-emerald-600 h-full rounded-full transition-all duration-300" style="width: 0%"></div>
        </div>
        <span id="navbar-progress-text" class="text-xs font-bold text-emerald-600 dark:text-emerald-400">0/29 (0%)</span>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openSearchModal()" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition text-sm flex items-center gap-1.5" title="Tìm kiếm bài học (Ctrl K)">
          <i class="fas fa-search"></i>
          <span class="hidden lg:inline text-xs font-medium">Tìm kiếm</span>
          <kbd class="hidden lg:inline px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-mono text-slate-500">Ctrl K</kbd>
        </button>

        <button type="button" onclick="openArenaModal()" class="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5">
          <i class="fas fa-trophy"></i>
          <span>Đấu trường 45'</span>
        </button>

        <!-- Light/Dark Mode Toggle Standard -->
        <button id="theme-toggle" type="button" onclick="toggleDarkMode()" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition text-sm" title="Chuyển chế độ sáng/tối">
          <i id="theme-icon" class="fas fa-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN CONTAINER -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- LEFT SIDEBAR -->
      ${generateSidebarHtml()}

      <!-- RIGHT MAIN CONTENT -->
      <section class="flex-1 min-w-0">
        
        <!-- HERO OVERVIEW CARD -->
        <div class="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white shadow-md relative overflow-hidden">
          <div class="relative z-10">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md mb-3 border border-white/20">
              SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
            </span>
            <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
              SINH HỌC 11 – SINH HỌC CƠ THỂ
            </h2>
            <p class="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed mb-6">
              Hệ thống hóa toàn bộ Phần Ba gồm đủ 5 chương, 29 bài học và 8 bài thực hành chuẩn mực. Cấu trúc học tập chuẩn 7 phần: Mục tiêu – Khái niệm – Sơ đồ/tiến trình – Giải thích cơ chế – Vận dụng – Thực hành – Tự kiểm tra.
            </p>
            <div class="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                <i class="fas fa-book"></i> 5 Chương
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                <i class="fas fa-file-lines"></i> 29 Bài học
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                <i class="fas fa-flask"></i> 8 Bài thực hành
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                <i class="fas fa-layer-group"></i> 7 Nhóm Sơ đồ chuẩn
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                <i class="fas fa-images"></i> 29 Sơ đồ SVG Bài học
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                <i class="fas fa-question-circle"></i> 87 Câu trắc nghiệm bài
              </span>
            </div>
          </div>
          <div class="absolute -right-12 -bottom-12 opacity-10 text-white text-[240px] pointer-events-none">
            <i class="fas fa-dna"></i>
          </div>
        </div>

        <!-- 29 LESSON ARTICLES -->
        <div id="lessons-container">
          ${generateLessonsHtml()}
        </div>

        <!-- 7 DIAGRAM GROUPS SECTION -->
        ${generateDiagramGroupsHtml()}

        <!-- LAB CHECKLIST SECTION -->
        ${generateLabChecklistHtml()}

      </section>
    </div>
  </main>

  <!-- SEARCH MODAL (Ctrl K) -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden flex items-start justify-center pt-20 px-4">
    <div class="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
        <i class="fas fa-search text-emerald-600 text-sm"></i>
        <input type="text" id="modal-search-input" oninput="handleModalSearch(this.value)" placeholder="Tìm kiếm bài học, khái niệm, thực hành (ví dụ: Calvin, C4, Nephron, Synapse, Vòng năm...)" class="w-full bg-transparent text-sm text-slate-800 dark:text-slate-100 focus:outline-none">
        <button type="button" onclick="closeSearchModal()" class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">ESC</button>
      </div>
      <div id="search-results-list" class="max-h-96 overflow-y-auto p-3 space-y-1 custom-scrollbar text-xs">
        <p class="text-slate-400 text-center py-6">Nhập từ khóa để tra cứu tức thời trong toàn bộ 29 bài học</p>
      </div>
    </div>
  </div>

  <!-- 45-MINUTE EXAM ARENA MODAL -->
  <div id="arena-modal" class="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
      <!-- Arena Header -->
      <div class="p-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-lg">
            <i class="fas fa-stopwatch"></i>
          </span>
          <div>
            <h3 class="font-bold text-base sm:text-lg">Đấu Trường Khảo Thí 45 Phút — Sinh Học 11</h3>
            <p class="text-xs text-emerald-100">20 Câu hỏi trắc nghiệm bao quát 5 chương chuẩn cấu trúc khảo thí</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3.5 py-1.5 rounded-xl bg-white/20 backdrop-blur-md font-mono font-bold text-base tracking-wider" id="arena-timer">
            45:00
          </div>
          <button type="button" onclick="closeArenaModal()" class="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition">
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>
      </div>

      <!-- Arena Body -->
      <div class="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar" id="arena-questions-container">
        <!-- Rendered dynamically -->
      </div>

      <!-- Arena Footer -->
      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between">
        <div class="text-xs text-slate-500 dark:text-slate-400">
          Đã làm: <span id="arena-answered-count" class="font-bold text-emerald-600">0</span>/20 câu
        </div>
        <div class="flex items-center gap-3">
          <button type="button" onclick="resetArena()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-300 transition">
            Làm lại
          </button>
          <button type="button" onclick="submitArena()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- CLIENT-SIDE SCRIPT -->
  <script>
    // Theme toggle
    function updateThemeIcon() {
      const isDark = document.documentElement.classList.contains('dark');
      const icon = document.getElementById('theme-icon');
      if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
      }
    }
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateThemeIcon();
    }
    updateThemeIcon();

    // Toggle Chapter Accordion
    function toggleChapter(chNum) {
      const body = document.getElementById('ch-body-' + chNum);
      const icon = document.getElementById('ch-icon-' + chNum);
      if (body) {
        body.classList.toggle('hidden');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      }
    }

    // Filter sidebar lessons
    function filterSidebarLessons(val) {
      const q = val.toLowerCase().trim();
      document.querySelectorAll('.sidebar-lesson-link').forEach(link => {
        const text = link.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    }

    // Progress Tracking
    let completedLessons = JSON.parse(localStorage.getItem('sh11_completed') || '{}');
    function updateOverallProgress() {
      const keys = Object.keys(completedLessons).filter(k => completedLessons[k]);
      const count = keys.length;
      const pct = Math.round((count / 29) * 100);
      
      const bar = document.getElementById('navbar-progress-bar');
      const text = document.getElementById('navbar-progress-text');
      if (bar) bar.style.width = pct + '%';
      if (text) text.innerText = count + '/29 (' + pct + '%)';

      for (let i = 1; i <= 29; i++) {
        const chk = document.getElementById('check-bai-' + i);
        const badge = document.getElementById('badge-status-' + i);
        if (chk) chk.checked = !!completedLessons[i];
        if (badge) {
          if (completedLessons[i]) badge.classList.remove('hidden');
          else badge.classList.add('hidden');
        }
      }
    }
    function toggleLessonComplete(num) {
      completedLessons[num] = !completedLessons[num];
      localStorage.setItem('sh11_completed', JSON.stringify(completedLessons));
      updateOverallProgress();
    }
    updateOverallProgress();

    // Quiz Check
    function checkQuiz(lessonNum, qIdx, selectedOpt, correctOpt) {
      const container = document.getElementById('quiz-' + lessonNum + '-' + qIdx);
      if (!container) return;
      const btns = container.querySelectorAll('.quiz-btn');
      btns.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:border-emerald-500', 'hover:bg-emerald-50/50');
        const icon = btn.querySelector('i');
        if (idx === correctOpt) {
          btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200', 'font-bold');
          if (icon) icon.className = 'fas fa-check-circle text-emerald-600 text-sm';
        } else if (idx === selectedOpt && selectedOpt !== correctOpt) {
          btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200');
          if (icon) icon.className = 'fas fa-times-circle text-rose-600 text-sm';
        }
      });

      const explainBox = document.getElementById('quiz-explain-' + lessonNum + '-' + qIdx);
      if (explainBox) {
        explainBox.classList.remove('hidden');
        if (selectedOpt === correctOpt) {
          explainBox.className = 'mt-3 p-3 rounded-lg text-xs leading-relaxed border bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          explainBox.innerHTML = '<strong class="text-emerald-700 dark:text-emerald-300 font-bold"><i class="fas fa-check mr-1"></i> Chính xác!</strong> Đáp án đúng là <strong>' + String.fromCharCode(65 + correctOpt) + '</strong>.';
        } else {
          explainBox.className = 'mt-3 p-3 rounded-lg text-xs leading-relaxed border bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          explainBox.innerHTML = '<strong class="text-rose-700 dark:text-rose-300 font-bold"><i class="fas fa-times mr-1"></i> Chưa chính xác.</strong> Đáp án đúng là <strong>' + String.fromCharCode(65 + correctOpt) + '</strong>.';
        }
      }
    }

    // Search Modal (Ctrl K)
    const lessonsData = ${JSON.stringify(Object.values(data.lessons).map(l => ({ num: l.num, title: l.title, subtitle: l.subtitle, chapter: l.chapter })))};
    function openSearchModal() {
      const modal = document.getElementById('search-modal');
      const input = document.getElementById('modal-search-input');
      if (modal) {
        modal.classList.remove('hidden');
        if (input) {
          input.value = '';
          input.focus();
          handleModalSearch('');
        }
      }
    }
    function closeSearchModal() {
      const modal = document.getElementById('search-modal');
      if (modal) modal.classList.add('hidden');
    }
    function handleModalSearch(val) {
      const list = document.getElementById('search-results-list');
      if (!list) return;
      const q = val.toLowerCase().trim();
      const filtered = lessonsData.filter(l => !q || l.title.toLowerCase().includes(q) || l.subtitle.toLowerCase().includes(q));
      
      if (filtered.length === 0) {
        list.innerHTML = '<p class="text-slate-400 text-center py-6">Không tìm thấy bài học phù hợp</p>';
        return;
      }
      list.innerHTML = filtered.map(l => \`
        <a href="#bai-\${l.num}" onclick="closeSearchModal()" class="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-between">
          <div>
            <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-5 h-5 rounded bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">\${l.num}</span>
              <span>Bài \${l.num}. \${l.title}</span>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate max-w-md">\${l.subtitle}</p>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">Chương \${l.chapter}</span>
        </a>
      \`).join('');
    }

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
        closeArenaModal();
      }
    });

    // 45-Minute Exam Arena
    const arenaQuestionsList = ${JSON.stringify(data.arenaQuestions)};
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;
    let arenaUserAnswers = {};

    function openArenaModal() {
      const modal = document.getElementById('arena-modal');
      if (modal) {
        modal.classList.remove('hidden');
        renderArenaQuestions();
        startArenaTimer();
      }
    }
    function closeArenaModal() {
      const modal = document.getElementById('arena-modal');
      if (modal) modal.classList.add('hidden');
    }
    function startArenaTimer() {
      if (arenaTimerInterval) return;
      arenaTimerInterval = setInterval(() => {
        if (arenaSecondsLeft > 0) {
          arenaSecondsLeft--;
          const m = String(Math.floor(arenaSecondsLeft / 60)).padStart(2, '0');
          const s = String(arenaSecondsLeft % 60).padStart(2, '0');
          const timerEl = document.getElementById('arena-timer');
          if (timerEl) timerEl.innerText = m + ':' + s;
        } else {
          clearInterval(arenaTimerInterval);
          arenaTimerInterval = null;
          alert('Đã hết 45 phút thi đấu! Hệ thống tự động thu bài.');
          submitArena();
        }
      }, 1000);
    }
    function renderArenaQuestions() {
      const container = document.getElementById('arena-questions-container');
      if (!container) return;
      container.innerHTML = arenaQuestionsList.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800" id="arena-q-\${q.id}">
          <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3">
            <span class="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-xs mr-1.5">Câu \${idx + 1}</span>
            \${q.q}
          </p>
          <div class="space-y-2">
            \${q.options.map((opt, oIdx) => \`
              <label class="arena-opt-label flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 cursor-pointer hover:border-emerald-500 transition text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="flex items-center gap-2">
                  <input type="radio" name="arena-q-\${q.id}" value="\${oIdx}" onchange="selectArenaOpt(\${q.id}, \${oIdx})" class="text-emerald-600 focus:ring-emerald-500">
                  <span>\${opt}</span>
                </span>
              </label>
            \`).join('')}
          </div>
          <div id="arena-explain-\${q.id}" class="hidden mt-3 p-3 rounded-xl text-xs leading-relaxed border"></div>
        </div>
      \`).join('');
    }
    function selectArenaOpt(qId, optIdx) {
      arenaUserAnswers[qId] = optIdx;
      const countEl = document.getElementById('arena-answered-count');
      if (countEl) countEl.innerText = Object.keys(arenaUserAnswers).length;
    }
    function submitArena() {
      let score = 0;
      arenaQuestionsList.forEach(q => {
        const userAns = arenaUserAnswers[q.id];
        const card = document.getElementById('arena-q-' + q.id);
        const explain = document.getElementById('arena-explain-' + q.id);
        if (userAns === q.answer) {
          score++;
          if (explain) {
            explain.className = 'mt-3 p-3 rounded-xl text-xs leading-relaxed border bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 text-emerald-900 dark:text-emerald-200';
            explain.innerHTML = '<strong>Đúng!</strong> ' + q.explain;
            explain.classList.remove('hidden');
          }
        } else {
          if (explain) {
            explain.className = 'mt-3 p-3 rounded-xl text-xs leading-relaxed border bg-rose-50 dark:bg-rose-950/40 border-rose-200 text-rose-900 dark:text-rose-200';
            explain.innerHTML = '<strong>Sai!</strong> Đáp án đúng là <strong>' + String.fromCharCode(65 + q.answer) + '</strong>. ' + q.explain;
            explain.classList.remove('hidden');
          }
        }
      });
      alert('Kết quả bài thi: Bạn đạt ' + score + '/20 câu (' + ((score/20)*10).toFixed(1) + ' điểm)!');
    }
    function resetArena() {
      arenaUserAnswers = {};
      arenaSecondsLeft = 45 * 60;
      const countEl = document.getElementById('arena-answered-count');
      if (countEl) countEl.innerText = '0';
      renderArenaQuestions();
    }
  </script>
</body>
</html>`;

const outPath = path.join(__dirname, '../courses/sinhhoc_11.html');
fs.writeFileSync(outPath, masterHtml, 'utf8');
console.log('Successfully wrote courses/sinhhoc_11.html, size:', fs.statSync(outPath).size, 'bytes');
