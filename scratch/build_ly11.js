const fs = require('fs');

const lessonsData = require('./ly11_data.js');
const coreCardsData = require('./ly11_core_cards.js');
const casesData = require('./ly11_cases.js');
const svgsData = require('./ly11_svgs.js');
const reviewData = require('./ly11_review_arena.js');

function renderMathText(text) {
  if (!text) return '';
  // Preserve $ and $$ for KaTeX auto-render, only parse bold markdown
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
}

function generateHTML() {
  // Hero section
  const heroHtml = `
  <!-- Main Hero Banner -->
  <section class="bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/60 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      
      <!-- Left Column: flex-1 min-w-0 ensures title is never squished -->
      <div class="flex-1 min-w-0">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sky-200 border border-white/15 text-xs font-bold mb-4 backdrop-blur-md">
          <i class="fa-solid fa-atom text-amber-400"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white leading-tight">
          TỔNG HỢP KIẾN THỨC CHUYÊN ĐỀ HỌC TẬP VẬT LÍ 11
        </h1>
        <div class="mt-3 text-base sm:text-lg text-sky-300 font-bold flex flex-wrap items-center gap-2">
          <span>3 Chuyên đề trọng tâm</span>
          <span>•</span>
          <span>Đủ 9 Bài học SGK</span>
          <span>•</span>
          <span>Mở đầu Điện tử học &amp; Vô tuyến</span>
        </div>
        <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
          Tài liệu hệ thống hóa toàn diện: Trường hấp dẫn Newton &amp; Chuyển động vệ tinh quỹ đạo; Truyền thông tin bằng sóng vô tuyến AM/FM; Tín hiệu số PCM; Cảm biến LDR, Thermistor; Bộ khuếch đại thuật toán Op-Amp và Mạch điều khiển tự động.
        </p>

        <!-- Hero Badges -->
        <div class="mt-5 flex flex-wrap items-center gap-2.5 text-xs">
          <span class="px-3 py-1.5 rounded-xl bg-sky-900/70 border border-sky-700/60 font-semibold text-sky-200">
            <i class="fa-solid fa-globe mr-1.5 text-sky-400"></i> CĐ1: Trường hấp dẫn (3 bài)
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-emerald-900/70 border border-emerald-700/60 font-semibold text-emerald-200">
            <i class="fa-solid fa-tower-broadcast mr-1.5 text-emerald-400"></i> CĐ2: Sóng vô tuyến (3 bài)
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-violet-900/70 border border-violet-700/60 font-semibold text-violet-200">
            <i class="fa-solid fa-microchip mr-1.5 text-violet-400"></i> CĐ3: Mở đầu điện tử học (3 bài)
          </span>
          <a href="#arena-section" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 font-bold text-amber-300 transition">
            <i class="fa-solid fa-trophy mr-1.5 text-amber-400"></i> Đấu trường 20 câu 45 phút
          </a>
        </div>
      </div>

      <!-- Right Column: Quick Jump Box (w-full lg:w-[380px] shrink-0) -->
      <div class="w-full lg:w-[380px] p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white shrink-0 shadow-2xl">
        <div class="text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-3 flex items-center justify-between">
          <span class="flex items-center gap-2"><i class="fa-solid fa-bolt text-amber-400"></i> Chuyển nhanh bài học</span>
          <span class="text-[10px] text-sky-300 font-bold px-2 py-0.5 rounded-full bg-white/10 border border-white/10">9 BÀI</span>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center font-bold text-xs">
          ${lessonsData.map(l => `
            <a href="#bai-${l.num}" class="p-2.5 rounded-xl bg-white/10 hover:bg-sky-600 hover:text-white transition border border-white/10 flex flex-col items-center justify-center gap-0.5 group">
              <span class="text-xs font-black text-sky-300 group-hover:text-white">B${l.num}</span>
              <span class="text-[9px] font-normal text-slate-300 group-hover:text-white truncate max-w-full">${l.title.split('. ')[1] || ''}</span>
            </a>
          `).join('')}
        </div>
        <div class="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-slate-300">
          <a href="#summary-table" class="hover:text-sky-300 transition flex items-center gap-1.5">
            <i class="fa-solid fa-table-cells text-sky-400"></i> Bảng 9 bài
          </a>
          <a href="#formula-table" class="hover:text-amber-300 transition flex items-center gap-1.5">
            <i class="fa-solid fa-calculator text-amber-400"></i> Công thức
          </a>
          <a href="#arena-section" class="hover:text-emerald-300 transition flex items-center gap-1.5">
            <i class="fa-solid fa-trophy text-emerald-400"></i> Đấu trường
          </a>
        </div>
      </div>

    </div>
  </section>
  `;

  // Render Lessons HTML
  let lessonsHtml = '';
  lessonsData.forEach((l) => {
    const cards = coreCardsData[l.num] || [];
    const cases = casesData[l.num] || [];
    const svgCode = svgsData[l.num] || '';

    lessonsHtml += `
    <!-- LESSON ${l.num} -->
    <article id="${l.id}" class="lesson-article mb-16 scroll-mt-24 pt-6 border-b border-slate-200 dark:border-slate-800 pb-16">
      
      <!-- Lesson Header Badge & Title -->
      <div class="mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-3">
          <i class="fa-solid fa-bookmark"></i> ${l.chuyende}
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          ${l.title}
        </h2>
        <p class="mt-2 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          ${l.subtitle}
        </p>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400 italic">
          ${l.desc}
        </p>
      </div>

      <!-- PHẦN A: 4 THẺ KIẾN THỨC CỐT LÕI -->
      <div class="mb-8">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-sky-500"></span> Phần A. Kiến thức cốt lõi (4 Trụ cột then chốt)
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${cards.map((c) => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-sky-500/50 transition">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-base">
                  <i class="${c.icon}"></i>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white">${c.title}</h4>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed font-medium">
                ${c.desc}
              </p>
              <ul class="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                ${(c.points || []).map(p => `
                  <li class="flex items-start gap-2">
                    <span class="text-sky-500 mt-1 shrink-0"><i class="fa-solid fa-check text-[10px]"></i></span>
                    <span class="leading-relaxed">${renderMathText(p)}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- PHẦN B: PHÂN TÍCH CHUYÊN SÂU & CÔNG THỨC -->
      <div class="mb-8">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span> Phần B. Phân tích chi tiết &amp; Bản chất vật lí
        </h3>
        <div class="space-y-4">
          ${l.sections.map((s, sIdx) => `
            <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
              <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span class="text-indigo-600 dark:text-indigo-400 font-mono text-sm">${sIdx + 1}.</span>
                <span>${s.heading}</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mb-3 leading-relaxed">
                ${renderMathText(s.summary)}
              </p>
              ${s.details && s.details.length > 0 ? `
                <div class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2 border-l-2 border-indigo-500/30">
                  ${s.details.map(d => `<div class="leading-relaxed">${renderMathText(d)}</div>`).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- PHẦN C: ĐỒ HỌA VECTOR SVG TRỰC QUAN -->
      <div class="mb-8">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Phần C. Đồ họa kĩ thuật trực quan
        </h3>
        <div class="p-2 sm:p-4 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
          ${svgCode}
        </div>
        <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center italic">
          Hình ${l.num}: Sơ đồ nguyên lí và mô hình toán học trực quan Bài ${l.num}.
        </p>
      </div>

      <!-- PHẦN D: 2 TÌNH HUỐNG THỰC TẾ & ỨNG DỤNG KĨ THUẬT -->
      <div class="mb-8">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-amber-500"></span> Phần D. Tình huống thực tế &amp; Kĩ thuật chuyên sâu (2 Tình huống)
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          ${cases.map(cs => `
            <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 via-slate-50 to-slate-50 dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900 border border-amber-200/60 dark:border-amber-900/40 shadow-sm flex flex-col justify-between">
              <div>
                <div class="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700/60 text-[11px] font-bold mb-2.5">
                  ${cs.badge}
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  ${cs.title}
                </h4>
                <div class="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                  <strong class="text-slate-800 dark:text-slate-200">Bối cảnh:</strong> ${renderMathText(cs.scenario)}
                </div>
                <div class="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                  <strong class="text-slate-800 dark:text-slate-200">Phân tích vật lí:</strong> ${renderMathText(cs.analysis)}
                </div>
                <div class="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-900/20 border border-amber-300/40 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 mb-3 leading-relaxed">
                  <strong class="font-bold">Giải pháp / Tính toán:</strong> ${renderMathText(cs.solution)}
                </div>
              </div>
              <div class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <i class="fa-solid fa-lightbulb text-amber-500"></i> Bài học: ${cs.takeaway}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- PHẦN E: 3 CÂU TRẮC NGHIỆM TỨC THÌ -->
      <div class="quiz-container p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
        <div class="flex items-center justify-between mb-5 pb-3 border-b border-slate-800">
          <h3 class="text-sm font-extrabold uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <i class="fa-solid fa-circle-question"></i> Phần E. Trắc nghiệm nhanh củng cố tức thì (3 Câu)
          </h3>
          <span class="text-xs text-slate-400 font-mono">Bấm chọn để kiểm tra ngay</span>
        </div>
        <div class="space-y-6">
          ${l.quizzes.map((q, qIdx) => `
            <div class="quiz-item" data-answered="false" data-correct="${q.answer}">
              <p class="text-sm font-bold text-slate-100 mb-3 leading-relaxed">
                <span class="text-sky-400 mr-1.5">Câu ${qIdx + 1}:</span> ${renderMathText(q.q)}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                ${q.options.map((opt, optIdx) => `
                  <button type="button" 
                    onclick="checkInlineQuiz(this, ${optIdx}, ${q.answer})"
                    class="quiz-btn w-full text-left p-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition flex items-center justify-between group">
                    <span class="group-hover:text-sky-300 font-medium">${renderMathText(opt)}</span>
                    <i class="fa-regular fa-circle text-slate-500 group-hover:text-sky-400"></i>
                  </button>
                `).join('')}
              </div>
              <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs leading-relaxed">
                <div class="feedback-msg font-bold mb-1"></div>
                <div class="feedback-exp text-slate-300">${renderMathText(q.explanation)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </article>
    `;
  });

  // Review & Summary Tables HTML
  const reviewHtml = `
  <!-- BẢNG TỔNG KẾT 9 BÀI HỌC -->
  <section id="summary-table" class="mb-16 scroll-mt-24">
    <div class="mb-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-2">
        <i class="fa-solid fa-table-list"></i> Hệ Thống Hóa Toàn Bộ Khóa Học
      </div>
      <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
        Bảng Tổng Kết 9 Bài Học Chuyên Đề Vật Lí 11
      </h2>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Đối chiếu khái niệm then chốt, công thức cốt lõi và ứng dụng thực tiễn của từng bài học trong 3 chuyên đề.
      </p>
    </div>

    <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
      <table class="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
            <th class="p-3.5 whitespace-nowrap">Bài</th>
            <th class="p-3.5 whitespace-nowrap">Tên Bài Học</th>
            <th class="p-3.5">Khái Niệm Then Chốt</th>
            <th class="p-3.5">Công Thức / Nguyên Lí</th>
            <th class="p-3.5">Ứng Dụng Thực Tiễn</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
          ${reviewData.summaryTable.map((row, idx) => `
            <tr class="${idx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-800/30' : ''} hover:bg-sky-50/50 dark:hover:bg-slate-800/60 transition">
              <td class="p-3.5 font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap">${row.bai}</td>
              <td class="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">${row.name}</td>
              <td class="p-3.5 leading-relaxed">${row.concept}</td>
              <td class="p-3.5 font-mono text-xs text-indigo-600 dark:text-indigo-400">${row.formula}</td>
              <td class="p-3.5 leading-relaxed text-slate-500 dark:text-slate-400">${row.app}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>

  <!-- BẢNG CÔNG THỨC VÀ QUY TẮC NHANH -->
  <section id="formula-table" class="mb-16 scroll-mt-24">
    <div class="mb-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 mb-2">
        <i class="fa-solid fa-calculator"></i> Cẩm Nang Tra Cứu Công Thức
      </div>
      <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
        Bảng Công Thức &amp; Quy Tắc Tính Nhanh
      </h2>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Toàn bộ biểu thức định lượng trọng tâm phục vụ giải toán và thiết kế mạch điện tử.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${reviewData.formulaTable.map((f) => `
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              ${f.name}
            </div>
            <div class="my-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-sky-700 dark:text-sky-300 text-center text-sm sm:text-base border border-slate-200 dark:border-slate-700/60 overflow-x-auto font-bold">
              $$${f.formula}$$
            </div>
          </div>
          <div class="mt-2 text-xs flex items-center justify-between text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>Đơn vị: <strong class="text-slate-700 dark:text-slate-300">${f.unit}</strong></span>
            <span class="truncate ml-2 text-slate-500">${f.note}</span>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 4 SƠ ĐỒ CẦN NHỚ BẰNG LỜI & LƯU Ý AN TOÀN -->
  <section class="mb-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <!-- Left: 4 Verbal Schematics -->
      <div class="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
        <h3 class="text-base font-bold text-sky-400 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-diagram-project"></i> 4 Sơ Đồ Cần Nhớ Bằng Lời
        </h3>
        <div class="space-y-4 text-xs sm:text-sm">
          ${reviewData.verbalSchematics.map(sc => `
            <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
              <h4 class="font-bold text-white mb-1.5 flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center text-xs font-black">${sc.num}</span>
                <span>${sc.title}</span>
              </h4>
              <p class="text-slate-300 leading-relaxed font-medium pl-7">
                ${sc.desc}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Right: Safety Rules -->
      <div class="p-6 rounded-3xl bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-900 text-white border border-rose-900/40 shadow-xl flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-rose-400 mb-4 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation"></i> Quy Tắc An Toàn &amp; Kĩ Thuật Phòng Lab
          </h3>
          <ul class="space-y-3 text-xs sm:text-sm text-slate-300">
            ${reviewData.safetyRules.map(sr => `
              <li class="flex items-start gap-2.5">
                <span class="text-rose-400 mt-1 shrink-0"><i class="fa-solid fa-shield-virus"></i></span>
                <span class="leading-relaxed font-medium">${sr}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="mt-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200 leading-relaxed">
          <strong>Khuyến cáo:</strong> Tuyệt đối không tự ý nối điện 220V vào bo mạch cắm thực hành breadboard. Mọi thí nghiệm liên quan tải lưới điện phải có giáo viên kiểm tra và kí duyệt.
        </div>
      </div>

    </div>
  </section>

  <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN VẬT LÍ 11 (20 CÂU 45 PHÚT) -->
  <section id="arena-section" class="mb-20 scroll-mt-24">
    <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-900/60 shadow-2xl text-white">
      
      <!-- Arena Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold mb-2">
            <i class="fa-solid fa-trophy"></i> BÀI THI TỔNG HỢP TOÀN DIỆN
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white">
            Đấu Trường Trạng Nguyên Vật Lí 11
          </h2>
          <p class="mt-1 text-xs sm:text-sm text-slate-300">
            20 câu hỏi trắc nghiệm chuẩn hóa • Thời gian 45 phút • Chấm điểm và xếp hạng tự động
          </p>
        </div>

        <!-- Timer & Controls -->
        <div class="flex items-center gap-3">
          <div id="arena-timer" class="px-4 py-2.5 rounded-2xl bg-slate-800/90 border border-slate-700 font-mono text-xl sm:text-2xl font-black text-amber-400 flex items-center gap-2">
            <i class="fa-regular fa-clock text-base text-slate-400"></i>
            <span id="timer-display">45:00</span>
          </div>
          <button id="btn-start-arena" onclick="startArenaExam()" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg transition active:scale-95">
            Bắt đầu thi
          </button>
        </div>
      </div>

      <!-- Arena Questions Container -->
      <div id="arena-quiz-body" class="mt-8 space-y-6">
        ${reviewData.arenaQuestions.map((aq, aqIdx) => `
          <div class="arena-question-item p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60" data-correct="${aq.answer}">
            <div class="flex items-start justify-between gap-2 mb-3">
              <p class="text-sm sm:text-base font-bold text-white leading-relaxed">
                ${renderMathText(aq.q)}
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              ${aq.options.map((opt, optIdx) => `
                <label class="arena-opt-label p-3 rounded-xl bg-slate-900/80 hover:bg-slate-700/80 border border-slate-700 transition cursor-pointer flex items-center justify-between group">
                  <div class="flex items-center gap-2.5">
                    <input type="radio" name="arena_q_${aqIdx}" value="${optIdx}" class="text-sky-500 focus:ring-0">
                    <span class="group-hover:text-sky-300 font-medium">${renderMathText(opt)}</span>
                  </div>
                </label>
              `).join('')}
            </div>
            <div class="arena-exp hidden mt-3 p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300">
              <strong class="text-amber-400">Giải thích:</strong> ${renderMathText(aq.explanation)}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Submit & Results -->
      <div class="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button id="btn-submit-arena" onclick="submitArenaExam()" class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm shadow-xl transition active:scale-95">
          <i class="fa-solid fa-paper-plane mr-2"></i> Nộp Bài &amp; Chấm Điểm
        </button>
        <div id="arena-result-box" class="hidden text-sm font-bold text-slate-200">
          <!-- Will show score -->
        </div>
      </div>

    </div>
  </section>
  `;

  // Full HTML assembly
  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chuyên Đề Học Tập Vật Lí 11 — KNTT | CS Learning Platform</title>
  <meta name="description" content="Tổng hợp toàn diện kiến thức Chuyên đề Vật lí 11 Kết nối tri thức đủ 3 chuyên đề 9 bài: Trường hấp dẫn, Vô tuyến, Tín hiệu số, Cảm biến, Op-Amp và Đấu trường Trạng Nguyên.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              900: '#0c4a6e',
            }
          }
        }
      }
    }
  </script>

  <!-- KaTeX for Rich Math Formula Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <!-- FontAwesome & Fonts -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    .katex {
      font-size: 1.05em;
    }
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background-color: rgba(148, 163, 184, 0.4);
      border-radius: 3px;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-white">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Logo & Back to Home -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition font-bold text-sm sm:text-base">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-md">
            <i class="fa-solid fa-atom"></i>
          </div>
          <span class="hidden sm:inline">CS Platform</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">|</span>
        <span class="text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 truncate max-w-[200px] sm:max-w-none">
          Chuyên Đề Vật Lí 11
        </span>
      </div>

      <!-- Center: Reading Progress -->
      <div class="hidden md:flex items-center gap-3">
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Tiến độ 9 bài:</span>
        <div class="w-36 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div id="read-progress-bar" class="h-full bg-gradient-to-r from-sky-500 to-indigo-600 w-0 transition-all duration-300"></div>
        </div>
        <span id="read-progress-text" class="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono">0/9</span>
      </div>

      <!-- Right Controls: Search, Arena, Dark Mode -->
      <div class="flex items-center gap-2.5">
        <button onclick="openSearchModal()" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition">
          <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
          <span class="hidden sm:inline">Tìm kiếm...</span>
          <kbd class="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono">Ctrl+K</kbd>
        </button>

        <a href="#arena-section" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-md transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Đấu trường</span>
        </a>

        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition border border-slate-200 dark:border-slate-700" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Page Scroll Indicator -->
  <div class="fixed top-16 left-0 w-full h-1 bg-slate-200/50 dark:bg-slate-800/50 z-40">
    <div id="page-scroll-bar" class="h-full bg-sky-500 w-0 transition-all duration-150"></div>
  </div>

  ${heroHtml}

  <!-- Main Content Layout (Sidebar + Articles) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- Sticky Sidebar Navigation -->
      <aside class="w-full lg:w-72 shrink-0 lg:sticky lg:top-24 space-y-4">
        
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center justify-between">
            <span>Mục lục 3 Chuyên đề</span>
            <span class="text-[10px] font-bold text-sky-500">9 BÀI</span>
          </div>

          <!-- Chuyên đề 1 -->
          <div class="mb-3">
            <div class="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-globe"></i> CĐ1: Trường Hấp Dẫn
            </div>
            <nav class="space-y-1 pl-2 border-l border-sky-500/30">
              <a href="#bai-1" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white py-1 transition truncate">Bài 1. Trường hấp dẫn</a>
              <a href="#bai-2" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white py-1 transition truncate">Bài 2. Cường độ trường</a>
              <a href="#bai-3" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white py-1 transition truncate">Bài 3. Thế hấp dẫn</a>
            </nav>
          </div>

          <!-- Chuyên đề 2 -->
          <div class="mb-3">
            <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-tower-broadcast"></i> CĐ2: Sóng Vô Tuyến
            </div>
            <nav class="space-y-1 pl-2 border-l border-emerald-500/30">
              <a href="#bai-4" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white py-1 transition truncate">Bài 4. Biến điệu AM/FM</a>
              <a href="#bai-5" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white py-1 transition truncate">Bài 5. Tín hiệu số PCM</a>
              <a href="#bai-6" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white py-1 transition truncate">Bài 6. Suy giảm Decibel</a>
            </nav>
          </div>

          <!-- Chuyên đề 3 -->
          <div class="mb-3">
            <div class="text-[11px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-microchip"></i> CĐ3: Mở Đầu Điện Tử Học
            </div>
            <nav class="space-y-1 pl-2 border-l border-violet-500/30">
              <a href="#bai-7" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white py-1 transition truncate">Bài 7. Cảm biến LDR, NTC</a>
              <a href="#bai-8" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white py-1 transition truncate">Bài 8. Op-Amp so sánh</a>
              <a href="#bai-9" class="nav-item block text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white py-1 transition truncate">Bài 9. Mạch tự động hóa</a>
            </nav>
          </div>

          <!-- Quick Review Links -->
          <div class="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1.5 text-xs font-bold">
            <a href="#summary-table" class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline">
              <i class="fa-solid fa-table-list"></i> Bảng tổng kết 9 bài
            </a>
            <a href="#formula-table" class="flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:underline">
              <i class="fa-solid fa-calculator"></i> Bảng công thức nhanh
            </a>
            <a href="#arena-section" class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline">
              <i class="fa-solid fa-trophy"></i> Đấu trường 20 câu 45p
            </a>
          </div>

        </div>

      </aside>

      <!-- Articles Body -->
      <div class="flex-1 min-w-0">
        ${lessonsHtml}
        ${reviewHtml}
      </div>

    </div>
  </main>

  <!-- Search Modal -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-start justify-center pt-20 px-4">
    <div class="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-scale-up">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
        <input type="text" id="search-input" placeholder="Tìm kiếm khái niệm, bài học, công thức (ví dụ: LDR, Op-Amp, Cavendish, vệ tinh...)" 
          class="w-full bg-transparent border-0 focus:ring-0 text-slate-900 dark:text-white text-sm outline-none placeholder-slate-400">
        <button onclick="closeSearchModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div id="search-results" class="max-h-96 overflow-y-auto p-4 space-y-2 text-xs">
        <div class="text-slate-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu tức thì...</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-slate-900 text-white py-12 border-t border-slate-800 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <div>
        <div class="font-bold text-sm text-sky-400 mb-1">HỌC LIỆU SỐ CHUYÊN ĐỀ VẬT LÍ 11 — KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</div>
        <p class="text-slate-400">Hệ thống hóa toàn bộ 3 Chuyên đề, 9 Bài học, 36 Trụ cột cốt lõi, 18 Tình huống thực tế và Đấu trường Trạng Nguyên.</p>
      </div>
      <div class="text-slate-500">
        &copy; 2026 CS Platform. Bản quyền nội dung thuộc về chương trình giáo dục phổ thông.
      </div>
    </div>
  </footer>

  <!-- Scripts: Interactive Logic & KaTeX Render -->
  <script>
    // KaTeX Math Auto-Render Trigger
    function renderMathOnPage() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
    window.addEventListener('DOMContentLoaded', renderMathOnPage);
    window.addEventListener('load', renderMathOnPage);

    // Dark mode
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Scroll Progress
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('page-scroll-bar').style.width = scrolled + '%';

      // Update active lesson progress
      const articles = document.querySelectorAll('.lesson-article');
      let viewed = 0;
      articles.forEach((art, idx) => {
        const rect = art.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          viewed = idx + 1;
        }
      });
      document.getElementById('read-progress-bar').style.width = (viewed / 9 * 100) + '%';
      document.getElementById('read-progress-text').innerText = viewed + '/9';
    });

    // Inline Quiz Checker
    function checkInlineQuiz(btn, selectedIdx, correctIdx) {
      const item = btn.closest('.quiz-item');
      if (item.getAttribute('data-answered') === 'true') return;
      item.setAttribute('data-answered', 'true');

      const allBtns = item.querySelectorAll('.quiz-btn');
      const feedback = item.querySelector('.quiz-feedback');
      const msg = item.querySelector('.feedback-msg');

      allBtns.forEach((b, idx) => {
        b.disabled = true;
        b.classList.remove('hover:bg-slate-700/90');
        if (idx === correctIdx) {
          b.classList.add('bg-emerald-600/30', 'border-emerald-500', 'text-emerald-300');
          b.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-400';
        } else if (idx === selectedIdx) {
          b.classList.add('bg-rose-600/30', 'border-rose-500', 'text-rose-300');
          b.querySelector('i').className = 'fa-solid fa-circle-xmark text-rose-400';
        }
      });

      feedback.classList.remove('hidden');
      if (selectedIdx === correctIdx) {
        feedback.classList.add('bg-emerald-950/60', 'border', 'border-emerald-800');
        msg.className = 'feedback-msg font-bold text-emerald-400 mb-1';
        msg.innerHTML = '<i class="fa-solid fa-check mr-1.5"></i> Chính xác tuyệt đối!';
      } else {
        feedback.classList.add('bg-rose-950/60', 'border', 'border-rose-800');
        msg.className = 'feedback-msg font-bold text-rose-400 mb-1';
        msg.innerHTML = '<i class="fa-solid fa-xmark mr-1.5"></i> Chưa chính xác. Đáp án đúng được tô xanh.';
      }
      renderMathOnPage();
    }

    // Arena Exam Timer & Scoring
    let arenaTimerInterval = 0;
    let arenaTimeLeft = 45 * 60; // 45 minutes

    function startArenaExam() {
      const btn = document.getElementById('btn-start-arena');
      btn.disabled = true;
      btn.innerText = 'Đang làm bài...';
      btn.classList.add('opacity-60', 'cursor-not-allowed');

      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        arenaTimeLeft--;
        if (arenaTimeLeft <= 0) {
          clearInterval(arenaTimerInterval);
          submitArenaExam();
          return;
        }
        const m = Math.floor(arenaTimeLeft / 60);
        const s = arenaTimeLeft % 60;
        document.getElementById('timer-display').innerText = 
          (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function submitArenaExam() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);

      let correctCount = 0;
      const total = 20;
      const items = document.querySelectorAll('.arena-question-item');

      items.forEach((item, idx) => {
        const correct = parseInt(item.getAttribute('data-correct'), 10);
        const selected = item.querySelector('input[type="radio"]:checked');
        const labels = item.querySelectorAll('.arena-opt-label');
        const exp = item.querySelector('.arena-exp');

        exp.classList.remove('hidden');

        labels.forEach((lbl, optIdx) => {
          if (optIdx === correct) {
            lbl.classList.add('bg-emerald-900/60', 'border-emerald-500', 'text-emerald-200');
          }
        });

        if (selected) {
          const val = parseInt(selected.value, 10);
          if (val === correct) {
            correctCount++;
          } else {
            labels[val].classList.add('bg-rose-900/60', 'border-rose-500', 'text-rose-200');
          }
        }
      });

      const score = (correctCount / total * 10).toFixed(1);
      const resBox = document.getElementById('arena-result-box');
      resBox.classList.remove('hidden');
      resBox.innerHTML = '<span class="text-emerald-400 text-base">Kết quả: ' + correctCount + '/' + total + ' câu (' + score + ' điểm)</span>' +
        (score >= 8 ? ' — Xuất sắc! Trạng Nguyên Vật Lí 11' : (score >= 5 ? ' — Đạt yêu cầu.' : ' — Hãy ôn tập lại các bài học trên!'));

      document.getElementById('btn-submit-arena').disabled = true;
      document.getElementById('btn-submit-arena').classList.add('opacity-60', 'cursor-not-allowed');
      renderMathOnPage();
    }

    // Ctrl+K Search
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
      }
    });

    function openSearchModal() {
      document.getElementById('search-modal').classList.remove('hidden');
      document.getElementById('search-input').focus();
    }
    function closeSearchModal() {
      document.getElementById('search-modal').classList.add('hidden');
    }

    // Search Index
    const searchData = [
      { title: 'Bài 1. Trường hấp dẫn', link: '#bai-1', desc: 'Định luật Newton F = G m₁m₂/r², gia tốc g, vệ tinh LEO/GEO, vận tốc v₁ = 7,9 km/s.' },
      { title: 'Bài 2. Cường độ trường hấp dẫn', link: '#bai-2', desc: 'Vector g = F/m, trường khối cầu, nguyên lí chồng chất, đường sức xuyên tâm.' },
      { title: 'Bài 3. Thế hấp dẫn và thế năng', link: '#bai-3', desc: 'Thế hấp dẫn φ = -GM/r, công lực thế, bảo toàn cơ năng, vận tốc v₂ = 11,2 km/s.' },
      { title: 'Bài 4. Biến điệu sóng vô tuyến', link: '#bai-4', desc: 'Sóng mang cao tần, biến điệu biên độ AM, biến điệu tần số FM, sơ đồ khối thu phát.' },
      { title: 'Bài 5. Tín hiệu tương tự và tín hiệu số', link: '#bai-5', desc: 'Analog vs Digital, quy trình ADC/PCM: Lấy mẫu, Lượng tử hóa, Mã hóa, đĩa CD.' },
      { title: 'Bài 6. Suy giảm tín hiệu', link: '#bai-6', desc: 'Cáp xoắn đôi, cáp đồng trục, sợi quang phản xạ toàn phần, mức suy giảm dB, dB/km, dBm.' },
      { title: 'Bài 7. Cảm biến', link: '#bai-7', desc: 'Điện trở quang LDR, nhiệt điện trở NTC/PTC, mạch cầu phân áp và cầu Wheatstone.' },
      { title: 'Bài 8. Bộ khuếch đại thuật toán Op-Amp', link: '#bai-8', desc: 'Op-Amp so sánh Comparator, relay điện từ cách ly có diode dập xung, điện trở hạn dòng LED.' },
      { title: 'Bài 9. Mạch điện đơn giản ứng dụng', link: '#bai-9', desc: 'Đèn tự bật đêm, còi hú báo rò rỉ khí gas MQ-2, vòi nước cảm ứng hồng ngoại IR.' },
      { title: 'Bảng tổng kết 9 bài học', link: '#summary-table', desc: 'Bảng đối chiếu khái niệm, công thức và ứng dụng của 9 bài học.' },
      { title: 'Bảng công thức và quy tắc nhanh', link: '#formula-table', desc: 'Tra cứu nhanh toàn bộ công thức tính lực, trường, suy giảm dB, phân áp, điện trở LED.' },
      { title: 'Đấu trường Trạng Nguyên Vật lí 11', link: '#arena-section', desc: 'Bài thi trắc nghiệm 20 câu 45 phút có chấm điểm và đồng hồ đếm ngược.' }
    ];

    document.getElementById('search-input').addEventListener('input', function(e) {
      const q = e.target.value.toLowerCase().trim();
      const resContainer = document.getElementById('search-results');
      if (!q) {
        resContainer.innerHTML = '<div class="text-slate-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu tức thì...</div>';
        return;
      }
      const matched = searchData.filter(d => d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q));
      if (matched.length === 0) {
        resContainer.innerHTML = '<div class="text-slate-400 text-center py-6">Không tìm thấy nội dung phù hợp với "' + q + '"</div>';
        return;
      }
      resContainer.innerHTML = matched.map(m => \`
        <a href="\${m.link}" onclick="closeSearchModal()" class="block p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-sky-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition">
          <div class="font-bold text-slate-900 dark:text-white text-sm mb-1">\${m.title}</div>
          <div class="text-slate-500 dark:text-slate-400 text-xs">\${m.desc}</div>
        </a>
      \`).join('');
    });
  </script>

</body>
</html>
`;
}

console.log('Generating full HTML for Chuyên đề Vật lí 11...');
const htmlContent = generateHTML();
console.log('HTML generated successfully. Byte length:', Buffer.byteLength(htmlContent, 'utf8'));

// Target alias files
const targetFiles = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_vatly_11.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_vatli_11.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/chuyende_ly_11.html'
];

targetFiles.forEach(file => {
  fs.writeFileSync(file, htmlContent, 'utf8');
  console.log('Wrote', fs.statSync(file).size, 'bytes to', file);
});

console.log('All 3 alias files updated successfully!');
