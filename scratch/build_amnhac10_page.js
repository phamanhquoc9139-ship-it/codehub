// scratch/build_amnhac10_page.js
// Script biên dịch trang học liệu Âm Nhạc 10 hoàn chỉnh

const fs = require('fs');
const path = require('path');

const staves = require('./amnhac10_staves.js');
const {
  part1_general,
  part2_singing,
  part2_guitar,
  musicTerms,
  examQuestions
} = require('./amnhac10_data.js');

function renderQuiz(quizItems, prefix = 'quiz') {
  if (!quizItems || quizItems.length === 0) return '';
  return `
    <div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-xs sm:text-sm font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-2">
          <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố (${quizItems.length} câu)
        </h4>
        <span class="text-[11px] font-semibold text-slate-400">Chọn đáp án đúng nhất</span>
      </div>
      <div class="space-y-4">
        ${quizItems.map((qItem, qIdx) => `
          <div class="p-3.5 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs">
            <p class="font-bold text-slate-900 dark:text-white mb-2.5">
              <span class="text-rose-600 dark:text-rose-400">Câu ${qIdx + 1}:</span> ${qItem.q}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
              ${qItem.options.map((opt, optIdx) => `
                <button onclick="checkLessonQuiz(this, ${qItem.ans === optIdx}, '${qItem.exp.replace(/'/g, "\\'")}')" 
                        class="quiz-btn text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-rose-400 dark:hover:border-rose-500 hover:bg-rose-50/50 dark:hover:bg-rose-950/40 transition flex items-center gap-2">
                  <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-[10px] text-slate-600 dark:text-slate-300 shrink-0">
                    ${String.fromCharCode(65 + optIdx)}
                  </span>
                  <span class="font-medium text-slate-700 dark:text-slate-300">${opt}</span>
                </button>
              `).join('')}
            </div>
            <div class="quiz-feedback hidden p-2.5 rounded-lg text-[11px] mt-2"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render Part 1: General Topics
function renderPart1HTML() {
  return part1_general.map(topic => {
    const strandsHTML = topic.strands.map(strand => {
      const staffHTML1 = strand.staffKey && staves[strand.staffKey] ? staves[strand.staffKey] : '';
      const staffHTML2 = strand.staffKey2 && staves[strand.staffKey2] ? staves[strand.staffKey2] : '';

      return `
        <div class="mb-6 p-5 bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl border border-slate-200/70 dark:border-slate-800">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-sm shrink-0">
              <i class="${strand.icon || 'fa-solid fa-music'}"></i>
            </span>
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">${strand.strandName}</span>
              <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">${strand.heading}</h4>
            </div>
          </div>
          ${staffHTML1}
          ${staffHTML2}
          <div class="mt-3">
            ${strand.content}
          </div>
        </div>
      `;
    }).join('');

    const quizHTML = renderQuiz(topic.quiz, topic.id);

    return `
      <article id="${topic.id}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-12">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-rose-500/20 tracking-wide">
              <i class="fa-solid fa-compact-disc"></i> ${topic.number}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
              ${topic.badge}
            </span>
          </div>
          <button onclick="toggleBookmark('${topic.id}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu chủ đề">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-2 leading-snug tracking-tight">
          <span class="text-rose-600 dark:text-rose-400">${topic.number}:</span> ${topic.title}
        </h3>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          ${topic.intro}
        </p>

        ${strandsHTML}
        ${quizHTML}
      </article>
    `;
  }).join('');
}

// Render Part 2A: Singing Elective
function renderPart2SingingHTML() {
  return part2_singing.map(lesson => {
    const staffHTML = lesson.staffKey && staves[lesson.staffKey] ? staves[lesson.staffKey] : '';
    const quizHTML = renderQuiz(lesson.quiz, lesson.id);

    return `
      <article id="${lesson.id}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-pink-500/20 tracking-wide">
              <i class="fa-solid fa-microphone"></i> ${lesson.number}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
              ${lesson.badge}
            </span>
          </div>
          <button onclick="toggleBookmark('${lesson.id}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-2 leading-snug tracking-tight">
          <span class="text-pink-600 dark:text-pink-400">${lesson.number}:</span> ${lesson.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 italic">
          ${lesson.subtitle}
        </p>

        ${staffHTML}
        ${lesson.content}
        ${quizHTML}
      </article>
    `;
  }).join('');
}

// Render Part 2B: Guitar Elective
function renderPart2GuitarHTML() {
  return part2_guitar.map(lesson => {
    const staffHTML = lesson.staffKey && staves[lesson.staffKey] ? staves[lesson.staffKey] : '';
    const quizHTML = renderQuiz(lesson.quiz, lesson.id);

    return `
      <article id="${lesson.id}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-purple-500/20 tracking-wide">
              <i class="fa-solid fa-guitar"></i> ${lesson.number}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
              ${lesson.badge}
            </span>
          </div>
          <button onclick="toggleBookmark('${lesson.id}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-2 leading-snug tracking-tight">
          <span class="text-purple-600 dark:text-purple-400">${lesson.number}:</span> ${lesson.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 italic">
          ${lesson.subtitle}
        </p>

        ${staffHTML}
        ${lesson.content}
        ${quizHTML}
      </article>
    `;
  }).join('');
}

// Render Terms HTML
function renderTermsHTML() {
  return `
    <div id="thuat-ngu" class="scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-12">
      <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shrink-0">
          <i class="fa-solid fa-book-bookmark"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Học phần tra cứu</span>
          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">18. Thuật ngữ âm nhạc cốt lõi</h3>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${musicTerms.map(t => `
          <div class="p-4 bg-slate-50/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <h5 class="text-sm font-bold text-rose-600 dark:text-rose-400 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-dot text-[9px]"></i> ${t.term}
            </h5>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${t.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render Outcomes Table & Web Guidelines
function renderOutcomesAndGuidesHTML() {
  return `
    <div id="bang-dau-ra" class="scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-12">
      <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0">
          <i class="fa-solid fa-list-check"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Khung chuẩn năng lực</span>
          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">19. Bảng bài học & Đầu ra thực hành</h3>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-xs border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
          <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
            <tr>
              <th class="p-2.5 text-left border-b border-slate-200 dark:border-slate-700">Phần</th>
              <th class="p-2.5 text-left border-b border-slate-200 dark:border-slate-700">Bài / Chủ đề</th>
              <th class="p-2.5 text-left border-b border-slate-200 dark:border-slate-700">Kiến thức – Kỹ năng chính</th>
              <th class="p-2.5 text-left border-b border-slate-200 dark:border-slate-700">Đầu ra thực hành</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            <tr><td class="p-2.5 font-bold text-rose-600">Chung</td><td class="p-2.5 font-semibold">Giai điệu quê hương</td><td class="p-2.5">Quãng, giọng Son trưởng, Đọc nhạc 1, Dân ca Bắc Bộ, Nghe nhạc</td><td class="p-2.5">Đọc/gõ đệm, hát dân ca, nêu cảm nhận tác phẩm</td></tr>
            <tr><td class="p-2.5 font-bold text-rose-600">Chung</td><td class="p-2.5 font-semibold">Cuộc sống mến thương</td><td class="p-2.5">Điệu thức/giọng trưởng-thứ, Đọc nhạc 2, Hát đuổi, Giao hưởng</td><td class="p-2.5">Hát đuổi, hòa tấu, nhận diện nhạc cụ dàn giao hưởng</td></tr>
            <tr><td class="p-2.5 font-bold text-rose-600">Chung</td><td class="p-2.5 font-semibold">Về miền kí ức</td><td class="p-2.5">Nhận diện Son trưởng/Mi thứ, Đọc nhạc 3, Ca khúc kỉ niệm</td><td class="p-2.5">Hát/đọc nhạc, hòa tấu, viết/chia sẻ cảm xúc</td></tr>
            <tr><td class="p-2.5 font-bold text-rose-600">Chung</td><td class="p-2.5 font-semibold">Giai điệu bốn phương</td><td class="p-2.5">Hợp âm ba chính, Đọc nhạc 4 hai bè, Hợp xướng Nga, Lịch sử phương Tây</td><td class="p-2.5">Hát hợp xướng, đệm hòa âm, trình chiếu tác phẩm/nhạc sĩ</td></tr>
            <tr><td class="p-2.5 font-bold text-pink-600">Hát A</td><td class="p-2.5 font-semibold">1. Tư thế & miệng hát</td><td class="p-2.5">Tư thế, khẩu hình nguyên âm ô-a-ê, khởi động</td><td class="p-2.5">Hát mềm mại, rõ và đúng sắc thái</td></tr>
            <tr><td class="p-2.5 font-bold text-pink-600">Hát A</td><td class="p-2.5 font-semibold">2. Làm chủ hơi thở</td><td class="p-2.5">Lấy, giữ, điều tiết hơi thở</td><td class="p-2.5">Hát câu dài, giữ tiếng đều đặn</td></tr>
            <tr><td class="p-2.5 font-bold text-pink-600">Hát A</td><td class="p-2.5 font-semibold">3. Phát âm rõ chữ</td><td class="p-2.5">Khởi chữ, mở chữ, đóng chữ; Thang âm Cò lả</td><td class="p-2.5">Hát tròn vành rõ chữ, dân ca đúng luyến láy</td></tr>
            <tr><td class="p-2.5 font-bold text-pink-600">Hát A</td><td class="p-2.5 font-semibold">4. Hát giọng chuyển</td><td class="p-2.5">Chuyển giọng thật/pha/giả, mở rộng âm vực</td><td class="p-2.5">Trình bày ca khúc qua các âm vực tự nhiên</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">1. Dây 5, 4</td><td class="p-2.5">Cấu tạo, tư thế, ngón tay, thế tay thứ nhất</td><td class="p-2.5">Gảy được nốt và câu nhạc đơn giản</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">2. Dây 3, 2</td><td class="p-2.5">Chỉnh dây phím 5, bảo quản đàn, luyện ngón</td><td class="p-2.5">Gảy đúng nốt, ứng tác đơn giản</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">3. Dây 6, 1</td><td class="p-2.5">Mở rộng nốt, sắc thái p / f</td><td class="p-2.5">Chơi giai điệu Happy Birthday có sắc thái</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">4. Quãng hòa âm</td><td class="p-2.5">Gảy đồng thời hai dây kề / cách xa</td><td class="p-2.5">Tạo quãng hòa âm chuẩn thời điểm</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">5. Điệu Waltz</td><td class="p-2.5">Nhịp 3/4; hợp âm G – C – D</td><td class="p-2.5">Đệm Waltz cho bài “Đếm sao”</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">6. Điệu Fox</td><td class="p-2.5">Nhịp 2/4; hợp âm Em – Am – B7</td><td class="p-2.5">Đệm Fox cho bài “Cachiusa”</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">7. Hòa tấu VN</td><td class="p-2.5">Phân bè, phối hợp nhạc cụ</td><td class="p-2.5">Hòa tấu “Ngày đầu tiên đi học”</td></tr>
            <tr><td class="p-2.5 font-bold text-purple-600">Guitar B</td><td class="p-2.5 font-semibold">8. Hòa tấu Quốc tế</td><td class="p-2.5">Cân bằng cường độ, phối hợp bè</td><td class="p-2.5">Hòa tấu “Lullaby” (Brahms)</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <h4 class="text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <i class="fa-solid fa-globe text-blue-500"></i> 20. Gợi ý đưa thành học liệu Website tương tác
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
          <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <strong>1. Phân nhánh học tập:</strong> Cho phép học sinh chọn giữa 2 phương án thực hành (Thanh nhạc Hát hoặc Nhạc cụ Guitar).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <strong>2. Nốt nhạc tương tác:</strong> Tích hợp bộ phát âm thanh Web Audio API Synth cho phép click nghe thử cao độ từng nốt, gam và hợp âm.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <strong>3. Sơ đồ thế tay Guitar trực quan:</strong> Bản đồ phím đàn và hợp âm 6 dây rõ ràng, kí hiệu ngón bấm $1-2-3-4$ và ngón gảy $p-i-m-a$.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <strong>4. Đánh giá tự động:</strong> Hệ thống trắc nghiệm Mini-quiz từng bài và kỳ thi Trạng Nguyên 25 câu phản hồi kết quả và giải thích tức thì.
          </div>
        </div>
      </div>
    </div>
  `;
}

// Sidebar HTML
function renderSidebarHTML() {
  return `
    <nav class="space-y-6 text-xs">
      <div>
        <div class="text-[11px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 px-3 py-1.5 flex items-center justify-between bg-rose-50 dark:bg-rose-950/60 rounded-xl mb-2">
          <span>Phần 1: Kiến thức chung</span>
          <span class="text-[10px] text-rose-500 font-bold">4 chủ đề</span>
        </div>
        <div class="space-y-1">
          ${part1_general.map(t => `
            <a href="#${t.id}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-rose-200 dark:hover:border-rose-900/60 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50/70 dark:hover:bg-rose-950/50 transition">
              <div class="flex items-center justify-between gap-1.5 mb-0.5">
                <span class="font-bold text-xs text-rose-600 dark:text-rose-400">${t.number}</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0 group-hover:text-rose-500 transition">${t.page || ''}</span>
              </div>
              <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition leading-snug">
                ${t.title}
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="text-[11px] font-black uppercase tracking-wider text-pink-600 dark:text-pink-400 px-3 py-1.5 flex items-center justify-between bg-pink-50 dark:bg-pink-950/60 rounded-xl mb-2">
          <span>Lựa chọn A: Hát</span>
          <span class="text-[10px] text-pink-500 font-bold">4 bài</span>
        </div>
        <div class="space-y-1">
          ${part2_singing.map(l => `
            <a href="#${l.id}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-pink-200 dark:hover:border-pink-900/60 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50/70 dark:hover:bg-pink-950/50 transition">
              <div class="flex items-center justify-between gap-1.5 mb-0.5">
                <span class="font-bold text-xs text-pink-600 dark:text-pink-400">${l.number}</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0 group-hover:text-pink-500 transition">${l.page || ''}</span>
              </div>
              <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition leading-snug">
                ${l.title}
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="text-[11px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400 px-3 py-1.5 flex items-center justify-between bg-purple-50 dark:bg-purple-950/60 rounded-xl mb-2">
          <span>Lựa chọn B: Guitar</span>
          <span class="text-[10px] text-purple-500 font-bold">8 bài</span>
        </div>
        <div class="space-y-1">
          ${part2_guitar.map(l => `
            <a href="#${l.id}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-purple-200 dark:hover:border-purple-900/60 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/70 dark:hover:bg-purple-950/50 transition">
              <div class="flex items-center justify-between gap-1.5 mb-0.5">
                <span class="font-bold text-xs text-purple-600 dark:text-purple-400">${l.number}</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0 group-hover:text-purple-500 transition">${l.page || ''}</span>
              </div>
              <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition leading-snug">
                ${l.title}
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
          <span>Tra cứu & Đầu ra</span>
          <span class="text-[10px] text-amber-500 font-bold">2 mục</span>
        </div>
        <div class="space-y-1">
          <a href="#thuat-ngu" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-900/60 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition">
            <div class="flex items-center justify-between gap-1.5 mb-0.5">
              <span class="font-bold text-xs text-amber-600 dark:text-amber-400">Giải thích thuật ngữ</span>
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Trang 92</span>
            </div>
            <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug">
              18. Tra cứu thuật ngữ âm nhạc SGK
            </div>
          </a>
          <a href="#bang-dau-ra" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/50 transition">
            <div class="flex items-center justify-between gap-1.5 mb-0.5">
              <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400">Chuẩn năng lực</span>
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Đầu ra Web</span>
            </div>
            <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug">
              19. Bảng đầu ra & Gợi ý học liệu Web
            </div>
          </a>
        </div>
      </div>
    </nav>
  `;
}

// Full HTML Template Generator
function generateFullPage() {
  const part1HTML = renderPart1HTML();
  const part2SingingHTML = renderPart2SingingHTML();
  const part2GuitarHTML = renderPart2GuitarHTML();
  const termsHTML = renderTermsHTML();
  const outcomesHTML = renderOutcomesAndGuidesHTML();
  const sidebarHTML = renderSidebarHTML();

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Âm Nhạc 10 — Kiến Thức Cốt Lõi SGK Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Khóa học Âm Nhạc 10 chuẩn SGK Kết nối tri thức. 4 chủ đề kiến thức chung, phương án lựa chọn Hát và Guitar, kèm bản nhạc nốt nhạc mô phỏng SVG và âm thanh trực quan.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#e11d48',
            'primary-dark': '#be123c',
            'slate-850': '#151f32'
          }
        }
      }
    };
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Top Navigation Header -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Logo & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trở về Trang chủ">
          <i class="fa-solid fa-arrow-left text-base"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2 text-rose-600 dark:text-rose-500 font-black text-xl">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>
        <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-bold text-xs">
          <i class="fa-solid fa-music"></i> Âm Nhạc 10 (KNTT)
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <button onclick="openExamModal()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-xs transition shadow-sm shadow-rose-500/20">
          <i class="fa-solid fa-award"></i>
          <span class="hidden md:inline">Thi Trạng Nguyên</span> (25 câu)
        </button>

        <!-- Dark Mode Toggle -->
        <button id="themeToggleBtn" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button onclick="toggleMobileDrawer()" class="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden">
    <div class="fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-y-auto custom-scrollbar">
      <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
        <span class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-list-ul text-rose-500"></i> Mục lục môn học
        </span>
        <button onclick="toggleMobileDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${sidebarHTML}
    </div>
  </div>

  <!-- Main Hero Banner -->
  <div class="bg-gradient-to-b from-rose-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-graduation-cap"></i> CHƯƠNG TRÌNH CHUẨN SGK GDPT 2018
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Âm Nhạc Lớp 10
        </h1>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Hệ thống hóa toàn bộ kiến thức <strong>4 chủ đề cốt lõi</strong>, hai phương án lựa chọn chuyên sâu <strong>Hát (4 bài)</strong> hoặc <strong>Nhạc cụ Guitar (8 bài)</strong>, cùng bộ bản nhạc nốt nhạc mô phỏng SVG và âm thanh trực quan sinh động.
        </p>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-rose-600 dark:text-rose-400">4</span>
            <span class="text-xs text-slate-500 font-medium">Chủ đề chung</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-pink-600 dark:text-pink-400">12</span>
            <span class="text-xs text-slate-500 font-medium">Bài lựa chọn</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-purple-600 dark:text-purple-400">17+</span>
            <span class="text-xs text-slate-500 font-medium">Bản nhạc SVG</span>
          </div>
          <div class="p-3 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm text-center">
            <span class="block text-2xl font-black text-emerald-600 dark:text-emerald-400">25</span>
            <span class="text-xs text-slate-500 font-medium">Câu Trạng Nguyên</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Content Section with Sidebar -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Desktop Sidebar Sticky -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-5 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
            <i class="fa-solid fa-bars-staggered text-rose-500"></i> Mục lục bài học
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Course Articles -->
      <main class="lg:col-span-3 space-y-8">
        
        <!-- Quick Section Jump Navigation -->
        <div class="sticky top-20 z-20 flex flex-wrap items-center gap-2 p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm mb-8">
          <a href="#section-part1" class="quick-nav-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-900/80 transition flex items-center gap-1.5">
            <i class="fa-solid fa-compact-disc"></i> <span>Phần 1: Kiến thức chung</span>
          </a>
          <a href="#section-part2a" class="quick-nav-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 border border-pink-200/80 dark:border-pink-900/50 hover:bg-pink-100 dark:hover:bg-pink-900/80 transition flex items-center gap-1.5">
            <i class="fa-solid fa-microphone"></i> <span>Lựa chọn A: Hát (4 bài)</span>
          </a>
          <a href="#section-part2b" class="quick-nav-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/80 dark:border-purple-900/50 hover:bg-purple-100 dark:hover:bg-purple-900/80 transition flex items-center gap-1.5">
            <i class="fa-solid fa-guitar"></i> <span>Lựa chọn B: Guitar (8 bài)</span>
          </a>
          <a href="#section-terms" class="quick-nav-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/80 dark:border-amber-900/50 hover:bg-amber-100 dark:hover:bg-amber-900/80 transition flex items-center gap-1.5">
            <i class="fa-solid fa-book"></i> <span>Thuật ngữ & Đầu ra</span>
          </a>
        </div>

        <!-- Section 1: General Topics -->
        <section id="section-part1" class="scroll-mt-28 space-y-12">
          <div class="mb-6 pb-2 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              PHẦN MỘT – KIẾN THỨC CHUNG
            </h2>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">4 Chủ đề</span>
          </div>
          ${part1HTML}
        </section>

        <!-- Section 2A: Singing Elective -->
        <section id="section-part2a" class="scroll-mt-28 space-y-12 pt-10 border-t-2 border-slate-200/80 dark:border-slate-800">
          <div class="mb-6 pb-2 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              PHẦN HAI – PHƯƠNG ÁN LỰA CHỌN A: HÁT
            </h2>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300">4 Bài</span>
          </div>
          ${part2SingingHTML}
        </section>

        <!-- Section 2B: Guitar Elective -->
        <section id="section-part2b" class="scroll-mt-28 space-y-12 pt-10 border-t-2 border-slate-200/80 dark:border-slate-800">
          <div class="mb-6 pb-2 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              PHẦN HAI – PHƯƠNG ÁN LỰA CHỌN B: NHẠC CỤ GUITAR
            </h2>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">8 Bài</span>
          </div>
          ${part2GuitarHTML}
        </section>

        <!-- Section 3: Terms & Outcomes -->
        <section id="section-terms" class="scroll-mt-28 space-y-12 pt-10 border-t-2 border-slate-200/80 dark:border-slate-800">
          ${termsHTML}
          ${outcomesHTML}
        </section>

      </main>
    </div>
  </div>

  <!-- Trạng Nguyên Exam Modal (25 câu hỏi) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
      
      <!-- Exam Header -->
      <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Kì Thi Đánh Giá Năng Lực</span>
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Trạng Nguyên Âm Nhạc 10 (25 Câu)</h3>
        </div>
        <button onclick="closeExamModal()" class="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <!-- Exam Body -->
      <div id="examContainer" class="space-y-6">
        <!-- Rendered dynamically -->
      </div>

      <!-- Exam Result Box -->
      <div id="examResultBox" class="hidden mt-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
        <h4 class="text-2xl font-black text-slate-900 dark:text-white mb-2" id="examScoreTitle">Kết quả thi</h4>
        <p class="text-sm text-slate-600 dark:text-slate-300 mb-4" id="examScoreDesc"></p>
        <button onclick="resetExam()" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition">
          Làm lại bài thi
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4">
      <p class="mb-2 font-semibold text-slate-700 dark:text-slate-300">
        Nền tảng Học liệu Số CodeHub — Âm Nhạc Lớp 10 (Chuẩn SGK Kết Nối Tri Thức Với Cuộc Sống)
      </p>
      <p>© 2026 CodeHub. Dữ liệu giáo dục phục vụ học tập, tra cứu trực quan và phát triển năng lực thẩm mĩ âm nhạc.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function applyTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    applyTheme();

    themeToggleBtn?.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });

    // Mobile Drawer
    function toggleMobileDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      drawer.classList.toggle('hidden');
    }

    // Tab / Section Switcher helper
    function switchTab(tabId) {
      const targetSection = document.getElementById('section-' + tabId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

        // Auto scroll to hash and active sidebar highlighting
    function highlightNav(hash) {
      if (!hash) return;
      document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('bg-rose-50/90', 'dark:bg-rose-950/70', 'text-rose-600', 'dark:text-rose-400', 'border-rose-300', 'dark:border-rose-800',
                           'bg-pink-50/90', 'dark:bg-pink-950/70', 'text-pink-600', 'dark:text-pink-400', 'border-pink-300', 'dark:border-pink-800',
                           'bg-purple-50/90', 'dark:bg-purple-950/70', 'text-purple-600', 'dark:text-purple-400', 'border-purple-300', 'dark:border-purple-800',
                           'bg-amber-50/90', 'dark:bg-amber-950/70', 'text-amber-600', 'dark:text-amber-400', 'border-amber-300', 'dark:border-amber-800');
        if (l.getAttribute('href') === hash) {
          if (hash.startsWith('#hat-')) {
            l.classList.add('bg-pink-50/90', 'dark:bg-pink-950/70', 'text-pink-600', 'dark:text-pink-400', 'border-pink-300', 'dark:border-pink-800');
          } else if (hash.startsWith('#gt-')) {
            l.classList.add('bg-purple-50/90', 'dark:bg-purple-950/70', 'text-purple-600', 'dark:text-purple-400', 'border-purple-300', 'dark:border-purple-800');
          } else if (hash.startsWith('#thuat-') || hash.startsWith('#bang-')) {
            l.classList.add('bg-amber-50/90', 'dark:bg-amber-950/70', 'text-amber-600', 'dark:text-amber-400', 'border-amber-300', 'dark:border-amber-800');
          } else {
            l.classList.add('bg-rose-50/90', 'dark:bg-rose-950/70', 'text-rose-600', 'dark:text-rose-400', 'border-rose-300', 'dark:border-rose-800');
          }
          // smooth scroll into view in aside
          l.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    }

    function handleHashScroll() {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
      highlightNav(hash);
    }
    window.addEventListener('load', handleHashScroll);
    window.addEventListener('hashchange', handleHashScroll);

    // Sidebar active link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        highlightNav(href);
      });
    });

    // IntersectionObserver for scrollspy
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          highlightNav('#' + entry.target.id);
        }
      });
    }, { rootMargin: '-80px 0px -60% 0px', threshold: [0.25] });

    document.querySelectorAll('article[id], section[id]').forEach(el => observer.observe(el));

    // Web Audio API Synthesizer for Sheet Music Simulation
    let audioCtx = null;
    function getAudioCtx() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playMelodyNotes(btn, freqs) {
      if (!freqs || !freqs.length) return;
      const ctx = getAudioCtx();
      const startTime = ctx.currentTime + 0.05;
      const noteDuration = 0.45;

      // Animate button
      const oldHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang phát...';
      btn.disabled = true;

      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle'; // Warm acoustic tone
        osc.frequency.setValueAtTime(f, startTime + idx * noteDuration);

        // Attack - Decay envelope
        gain.gain.setValueAtTime(0.001, startTime + idx * noteDuration);
        gain.gain.exponentialRampToValueAtTime(0.3, startTime + idx * noteDuration + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + (idx + 1) * noteDuration - 0.02);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime + idx * noteDuration);
        osc.stop(startTime + (idx + 1) * noteDuration);
      });

      setTimeout(() => {
        btn.innerHTML = oldHtml;
        btn.disabled = false;
      }, (freqs.length * noteDuration + 0.2) * 1000);
    }

    // Mini-Quiz Checker
    function checkLessonQuiz(btn, isCorrect, explanation) {
      const parent = btn.closest('.space-y-4');
      const questionCard = btn.closest('.text-xs');
      const allBtns = questionCard.querySelectorAll('.quiz-btn');
      const feedback = questionCard.querySelector('.quiz-feedback');

      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-rose-400', 'hover:bg-rose-50/50');
      });

      if (isCorrect) {
        btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs mt-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-start gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mt-0.5"></i> <div><strong>Chính xác!</strong> ' + explanation + '</div>';
      } else {
        btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-800', 'dark:text-rose-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs mt-2.5 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-start gap-2';
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mt-0.5"></i> <div><strong>Chưa chính xác!</strong> ' + explanation + '</div>';
      }
      feedback.classList.remove('hidden');
    }

    // Bookmark Toggle
    function toggleBookmark(id) {
      let bookmarks = JSON.parse(localStorage.getItem('amnhac10_bookmarks') || '[]');
      if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter(b => b !== id);
      } else {
        bookmarks.push(id);
      }
      localStorage.setItem('amnhac10_bookmarks', JSON.stringify(bookmarks));
      updateBookmarkIcons();
    }

    function updateBookmarkIcons() {
      const bookmarks = JSON.parse(localStorage.getItem('amnhac10_bookmarks') || '[]');
      document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const article = btn.closest('article');
        if (article) {
          const id = article.id;
          const icon = btn.querySelector('i');
          if (bookmarks.includes(id)) {
            icon.className = 'fa-solid fa-bookmark text-amber-500';
          } else {
            icon.className = 'fa-regular fa-bookmark';
          }
        }
      });
    }
    updateBookmarkIcons();

    // ==========================================
    // EXAM ENGINE (25 CÂU)
    // ==========================================
    const examQuestions = ${JSON.stringify(examQuestions)};
    let userAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      renderExamQuestions();
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function renderExamQuestions() {
      const container = document.getElementById('examContainer');
      document.getElementById('examResultBox').classList.add('hidden');
      userAnswers = {};

      let html = '<div class="space-y-6">';
      examQuestions.forEach((q, idx) => {
        html += \`
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs">
            <p class="font-bold text-slate-900 dark:text-white mb-3 text-sm">
              <span class="text-rose-600 dark:text-rose-400">Câu \${idx + 1}:</span> \${q.q}
            </p>
            <div class="space-y-2">
              \${q.options.map((opt, optIdx) => \`
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700/50 cursor-pointer transition">
                  <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="recordExamAnswer(\${idx}, \${optIdx})" class="text-rose-600 focus:ring-rose-500">
                  <span class="font-medium text-slate-700 dark:text-slate-300">\${opt}</span>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      });
      html += \`
        <div class="text-center pt-4">
          <button onclick="submitExam()" class="px-8 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black text-sm shadow-lg shadow-rose-500/25 transition">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </div>\`;
      container.innerHTML = html;
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
    }

    function submitExam() {
      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) {
          score++;
        }
      });

      const container = document.getElementById('examContainer');
      const resultBox = document.getElementById('examResultBox');
      const scoreTitle = document.getElementById('examScoreTitle');
      const scoreDesc = document.getElementById('examScoreDesc');

      container.classList.add('hidden');
      resultBox.classList.remove('hidden');

      const percent = Math.round((score / examQuestions.length) * 100);
      let rank = 'Cần ôn tập thêm';
      if (percent >= 90) rank = 'Trạng Nguyên Âm Nhạc 10 — Xuất Sắc!';
      else if (percent >= 75) rank = 'Bảng Nhãn Âm Nhạc 10 — Rất Tốt!';
      else if (percent >= 50) rank = 'Đạt Yêu Cầu Chuẩn Năng Lực';

      scoreTitle.innerHTML = \`<span class="text-rose-600">\${score} / \${examQuestions.length}</span> (\${percent}%)\`;
      scoreDesc.innerHTML = \`<strong class="text-base text-slate-900 dark:text-white block mb-1">\${rank}</strong>Bạn đã hoàn thành bài kiểm tra chuẩn 25 câu hỏi môn Âm nhạc lớp 10 SGK Kết nối tri thức.\`;
    }

    function resetExam() {
      document.getElementById('examContainer').classList.remove('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;
}

// Write to courses/amnhac_10.html
const fullHTML = generateFullPage();
const destPath = path.join(__dirname, '../courses/amnhac_10.html');
fs.writeFileSync(destPath, fullHTML, 'utf8');
console.log('Saved amnhac_10.html, size:', fullHTML.length);

// Also mirror to courses/music_10.html if exists or for parity
const mirrorPath = path.join(__dirname, '../courses/music_10.html');
fs.writeFileSync(mirrorPath, fullHTML, 'utf8');
console.log('Saved music_10.html, size:', fullHTML.length);
