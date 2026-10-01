const fs = require('fs');

const ALL_LESSONS = require('./make_music12_data.js');

console.log('Total lessons loaded:', ALL_LESSONS.length);
if (ALL_LESSONS.length !== 16) {
  throw new Error(`Expected 16 lessons, got ${ALL_LESSONS.length}`);
}

// Topic configurations for Âm nhạc 12
const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    title: "Chủ đề 1: Sắc màu âm nhạc & Quãng ghép (Compound Intervals)",
    shortTitle: "Chủ đề 1: Quãng ghép & Hành khúc",
    icon: "fa-palette",
    gradient: "from-sky-600 via-blue-700 to-indigo-900",
    textColor: "text-sky-600 dark:text-sky-400",
    borderLeftColor: "border-sky-200 dark:border-sky-900/50",
    badgeColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
    dotColor: "bg-sky-500",
    desc: "Khám phá thế giới quãng ghép (lớn hơn quãng 8 đúng), quy tắc tính nhanh, tính chất thuận nghịch; Thể loại Hành khúc và tinh thần hào hùng của 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh'.",
    lessonNums: [1, 2]
  },
  {
    num: 2,
    id: "chude-2",
    title: "Chủ đề 2: Giọng Son trưởng (G major) & Thể loại Nhạc nhẹ",
    shortTitle: "Chủ đề 2: Son trưởng & Nhạc nhẹ",
    icon: "fa-guitar",
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
    textColor: "text-emerald-600 dark:text-emerald-400",
    borderLeftColor: "border-emerald-200 dark:border-emerald-900/50",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    desc: "Cấu tạo thang âm giọng Son trưởng (G major) với hóa biểu một dấu Fa thăng (F#) ở dòng 5 khóa Sol; Sơ lược các phong cách nhạc nhẹ hiện đại (Pop, Rock, Jazz, Blues, R&B) và biên chế ban nhạc nhẹ.",
    lessonNums: [3, 4]
  },
  {
    num: 3,
    id: "chude-3",
    title: "Chủ đề 3: Giọng Mi thứ (E minor) & Giai điệu bốn phương",
    shortTitle: "Chủ đề 3: Mi thứ & Giai điệu bốn phương",
    icon: "fa-globe",
    gradient: "from-purple-600 via-indigo-700 to-slate-900",
    textColor: "text-purple-600 dark:text-purple-400",
    borderLeftColor: "border-purple-200 dark:border-purple-900/50",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    desc: "Tìm hiểu giọng Mi thứ (E minor) song song với Son trưởng, thang âm thứ hòa âm (nốt D#); Khám phá kiệt tác dân ca Nga 'Chiều hải cảng' và nghệ thuật xử lý giọng hát phong cách thính phòng.",
    lessonNums: [5, 6]
  },
  {
    num: 4,
    id: "chude-4",
    title: "Chủ đề 4: Hòa âm giọng Son trưởng và Mi thứ",
    shortTitle: "Chủ đề 4: Hòa âm G/Em & Nhạc cụ",
    icon: "fa-sliders",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    textColor: "text-blue-600 dark:text-blue-400",
    borderLeftColor: "border-blue-200 dark:border-blue-900/50",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    desc: "Cấu tạo các hợp âm ba và hợp âm 7 át của Son trưởng (G, C, D7, Em) và Mi thứ (Em, Am, B7); Thực hành diễn tấu nốt F# trên Recorder Baroque, kèn phím và đệm đàn Guitar/Keyboard.",
    lessonNums: [7, 8]
  },
  {
    num: 5,
    id: "chude-5",
    title: "Chủ đề 5: Sân khấu ca kịch truyền thống Việt Nam",
    shortTitle: "Chủ đề 5: Chèo, Tuồng & Cải lương",
    icon: "fa-masks-theater",
    gradient: "from-amber-600 via-yellow-700 to-stone-900",
    textColor: "text-amber-600 dark:text-amber-400",
    borderLeftColor: "border-amber-200 dark:border-amber-900/50",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    desc: "Khám phá 3 trụ cột sân khấu kịch hát truyền thống dân tộc: Nghệ thuật Chèo Bắc Bộ với vai Hề chèo; Nghệ thuật Tuồng bác học với mặt nạ biểu trưng; Di sản Đờn ca tài tử và Sân khấu Cải lương Nam Bộ với 'Dạ cổ hoài lang'.",
    lessonNums: [9, 10]
  },
  {
    num: 6,
    id: "chude-6",
    title: "Chủ đề 6: Khí nhạc Việt Nam & Kỹ thuật thanh nhạc hiện đại",
    shortTitle: "Chủ đề 6: Khí nhạc VN & Riff-Run",
    icon: "fa-music",
    gradient: "from-pink-600 via-rose-700 to-purple-950",
    textColor: "text-pink-600 dark:text-pink-400",
    borderLeftColor: "border-pink-200 dark:border-pink-900/50",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    desc: "Phân tích tác phẩm khí nhạc giao hưởng 'Kể chuyện ngày mùa' của nhạc sĩ Trọng Bằng; Làm chủ kỹ thuật hát nốt hoa mỹ (Grace notes) và kỹ thuật chạy nốt lướt nhanh Riff & Run trong nhạc Pop/R&B.",
    lessonNums: [11, 12]
  },
  {
    num: 7,
    id: "chude-7",
    title: "Chủ đề 7: Công nghệ âm nhạc và Phần mềm sản xuất số",
    shortTitle: "Chủ đề 7: Ký âm MuseScore & Audacity",
    icon: "fa-laptop-code",
    gradient: "from-cyan-600 via-teal-700 to-slate-900",
    textColor: "text-cyan-600 dark:text-cyan-400",
    borderLeftColor: "border-cyan-200 dark:border-cyan-900/50",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    desc: "Quy trình chép nhạc số và xuất bản tổng phổ với MuseScore; Kỹ thuật thu âm, khử ồn Noise Reduction, thêm vang Reverb với Audacity; Tạo nhạc đệm tự động với phần mềm JJazzLab.",
    lessonNums: [13, 14]
  },
  {
    num: "chuyende",
    id: "chuyende",
    title: "Chuyên đề học tập: Công nghệ âm nhạc ứng dụng",
    shortTitle: "Chuyên đề Âm nhạc 12",
    icon: "fa-compact-disc",
    gradient: "from-violet-600 via-purple-700 to-slate-900",
    textColor: "text-violet-600 dark:text-violet-400",
    borderLeftColor: "border-violet-200 dark:border-violet-900/50",
    badgeColor: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
    dotColor: "bg-violet-500",
    desc: "Chuyên đề nâng cao định hướng công nghệ âm thanh: Làm chủ phần mềm chép nhạc MuseScore & Sibelius; Kỹ thuật thu âm, xử lý âm thanh số Audacity & DAW; Hòa âm tự động hóa thông minh với JJazzLab.",
    isChuyenDe: true
  },
  {
    num: 8,
    id: "chude-8",
    title: "Chủ đề 8: Hướng nghiệp thời đại 4.0 & Âm nhạc với Trí tuệ nhân tạo (AI)",
    shortTitle: "Chủ đề 8: Hướng nghiệp 4.0 & AI Music",
    icon: "fa-robot",
    gradient: "from-orange-600 via-amber-700 to-slate-900",
    textColor: "text-orange-600 dark:text-orange-400",
    borderLeftColor: "border-orange-200 dark:border-orange-900/50",
    badgeColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    dotColor: "bg-orange-500",
    desc: "Khám phá các ngành nghề âm nhạc thời 4.0 (Music Producer, Audio Engineer, Sound Designer); Ứng dụng đột phá của Trí tuệ nhân tạo (AI Music), đạo đức bản quyền và giá trị nhân văn của cảm xúc con người.",
    lessonNums: [15, 16]
  }
];

// Function to escape text tags
function escapeTextTags(str) {
  if (!str) return '';
  return str.replace(/`?<(\/?(?:[a-zA-Z0-9_\-]+)(\s+[^>]*)?)>`?/g, (m, tag) => `<code>&lt;${tag}&gt;</code>`);
}

// Function to sanitize theory content
function sanitizeTheoryContent(html) {
  if (!html) return '';
  const tagsToEscape = ['html', 'head', 'body', 'header', 'nav', 'main', 'section', 'article', 'aside', 'footer', 'form', 'textarea', 'select', 'option', 'label'];
  const regex = new RegExp(`<(\\/?(${tagsToEscape.join('|')})\\b([^>]*)>)`, 'gi');
  let result = html.replace(regex, (m, full, tag, attrs) => {
    return `&lt;${full.startsWith('</') ? '/' : ''}${tag}${attrs || ''}&gt;`;
  });

  result = result.replace(/`<div>`/gi, '<code>&lt;div&gt;</code>');
  result = result.replace(/`<\/div>`/gi, '<code>&lt;/div&gt;</code>');
  result = result.replace(/thẻ <div>/gi, 'thẻ <code>&lt;div&gt;</code>');
  result = result.replace(/thẻ <\/div>/gi, 'thẻ <code>&lt;/div&gt;</code>');
  return result;
}

// Helper to render a lesson article
function renderLesson(lesson) {
  const cleanTarget = escapeTextTags(lesson.target);
  const cleanIntro = escapeTextTags(lesson.intro);
  const practiceHtml = lesson.practice.map(p => `<li>${escapeTextTags(p)}</li>`).join('');
  const cleanSummary = escapeTextTags(lesson.summary);

  const sectionsHtml = lesson.sections.map(sec => `
                <div class="space-y-2">
                  <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-5 bg-sky-500 rounded-full inline-block"></span>
                    <span>${sec.title}</span>
                  </h4>
                  <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-3.5 border-l border-gray-200 dark:border-gray-700 space-y-3">
${sanitizeTheoryContent(sec.content)}
                  </div>
                </div>`).join('\n');

  const letters = ['A', 'B', 'C', 'D'];
  const quizzesHtml = lesson.quizzes.map((q, qIdx) => {
    const optionsHtml = q.options.map((opt, oIdx) => {
      const isCorrect = oIdx === q.correctIndex;
      return `
                      <button type="button" 
                              onclick="checkQuiz(this, ${isCorrect})"
                              class="quiz-btn text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors flex items-start gap-2">
                        <span class="font-bold text-gray-400 shrink-0">${letters[oIdx]}.</span>
                        <span>${escapeTextTags(opt)}</span>
                      </button>`;
    }).join('');

    return `
                  <div class="quiz-item p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700" data-answered="false">
                    <p class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      <span class="text-sky-600 dark:text-sky-400 font-bold">Câu ${qIdx + 1}:</span> ${escapeTextTags(q.q)}
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
${optionsHtml}
                    </div>
                    <div class="quiz-feedback hidden mt-3 p-3 rounded-lg text-xs leading-relaxed"></div>
                    <div class="quiz-explain hidden mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
                      💡 <strong>Giải thích:</strong> ${escapeTextTags(q.explain)}
                    </div>
                  </div>`;
  }).join('\n');

  return `
          <!-- ${lesson.title} -->
          <article id="bai-${lesson.num}" class="scroll-mt-24 bg-white dark:bg-dark-surface rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            
            <!-- Lesson Header -->
            <div class="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
              <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-lg ${lesson.badgeColor} text-xs font-bold">
                    Bài ${lesson.num}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <i class="fa-regular fa-clock"></i> ${lesson.time}
                  </span>
                </div>
                <a href="#quiz-bai-${lesson.num}" class="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                  <i class="fa-solid fa-circle-question"></i> Làm trắc nghiệm bài này
                </a>
              </div>
              <h3 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                ${lesson.title}
              </h3>
            </div>

            <div class="p-6 sm:p-8 space-y-8">
              
              <!-- Target & Intro -->
              <div class="p-4 rounded-xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/50 space-y-2">
                <div class="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-compass"></i> Mục tiêu cần đạt:
                </div>
                <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  ${cleanTarget}
                </p>
                <div class="pt-2 border-t border-sky-200/50 dark:border-sky-900/40 text-xs text-sky-800 dark:text-sky-300/90 italic">
                  💡 <strong>Khởi động & Cảm thụ:</strong> ${cleanIntro}
                </div>
              </div>

              <!-- Detailed Theory Sections -->
              <div class="space-y-6">
${sectionsHtml}
              </div>

              <!-- Practice Section -->
              <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 space-y-2">
                <div class="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-music text-sky-500"></i> Nhiệm vụ thực hành & Vận dụng sáng tạo:
                </div>
                <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  ${practiceHtml}
                </ul>
              </div>

              <!-- Summary Box -->
              <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                <i class="fa-solid fa-lightbulb text-amber-500 text-lg shrink-0 mt-0.5"></i>
                <div class="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                  <strong class="font-bold">Ghi nhớ trọng tâm:</strong> ${cleanSummary}
                </div>
              </div>

              <!-- Interactive Quiz Section for each lesson -->
              <div id="quiz-bai-${lesson.num}" class="pt-6 border-t border-gray-100 dark:border-gray-800">
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-question text-sky-500"></i>
                    <span>Trắc nghiệm củng cố Bài ${lesson.num} (4 câu)</span>
                  </h4>
                  <span class="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full font-medium">Tự động chấm</span>
                </div>

                <div class="space-y-4">
${quizzesHtml}
                </div>
              </div>

            </div>
          </article>`;
}

// Generate topic section HTML
function generateTopicSection(topic) {
  if (topic.isChuyenDe) {
    return `
        <!-- ================= TOPIC BANNER: CHUYÊN ĐỀ NÂNG CAO ================= -->
        <section id="chuyende" class="scroll-mt-24">
          <div class="bg-gradient-to-r ${topic.gradient} text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl">
              <i class="fa-solid ${topic.icon}"></i>
            </div>
            <div class="relative z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold mb-3">
                <i class="fa-solid ${topic.icon}"></i>
                <span>Chuyên đề học tập Âm nhạc 12</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">
                ${topic.title}
              </h2>
              <p class="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
                ${topic.desc}
              </p>
            </div>
          </div>
        </section>

        <!-- Chuyên đề Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
            <span class="px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold">CHUYÊN ĐỀ 12.1</span>
            <h4 class="font-bold text-base text-gray-900 dark:text-white">Phần mềm chép nhạc số (MuseScore)</h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Nhập nốt bàn phím, chèn lời ca, ký hiệu hợp âm, phối bè tổng phổ nhạc cụ và xuất bản in ấn chất lượng cao định dạng PDF/MusicXML.</p>
          </div>
          <div class="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
            <span class="px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold">CHUYÊN ĐỀ 12.2</span>
            <h4 class="font-bold text-base text-gray-900 dark:text-white">Biên tập âm thanh & Thu âm (Audacity)</h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Thu âm giọng hát qua micro, cắt dán track đa luồng, khử tạp âm Noise Reduction và thêm hiệu ứng không gian Reverb ấm áp chuẩn studio.</p>
          </div>
          <div class="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
            <span class="px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold">CHUYÊN ĐỀ 12.3</span>
            <h4 class="font-bold text-base text-gray-900 dark:text-white">Phần mềm hòa âm tự động (JJazzLab)</h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Nhập chuỗi hợp âm, chọn điệu nhạc (Style) Pop, Rock, Jazz; phần mềm tự động chỉ huy dàn nhạc ảo sinh ra track Drum, Bass, Piano đệm hát hoàn hảo.</p>
          </div>
        </div>`;
  }

  const lessonsInTopic = ALL_LESSONS.filter(l => topic.lessonNums.includes(l.num));
  const renderedArticles = lessonsInTopic.map(l => renderLesson(l)).join('\n');

  return `
        <!-- ================= TOPIC BANNER: ${topic.title} ================= -->
        <section id="${topic.id}" class="scroll-mt-24">
          <div class="bg-gradient-to-r ${topic.gradient} text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl">
              <i class="fa-solid ${topic.icon}"></i>
            </div>
            <div class="relative z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold mb-3">
                <i class="fa-solid ${topic.icon}"></i>
                <span>Chủ đề trọng tâm ${topic.num}</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold mb-2">
                ${topic.title}
              </h2>
              <p class="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
                ${topic.desc}
              </p>
            </div>
          </div>
        </section>

        <!-- Lessons of Topic ${topic.num} -->
        <div class="space-y-10">
${renderedArticles}
        </div>`;
}

// Generate Left Sidebar Topic Group
function generateSidebarTopicGroup(topic) {
  if (topic.isChuyenDe) {
    return `
            <div class="mb-3 topic-group">
              <a href="#chuyende" class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 px-2 py-1.5 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors">
                <span class="flex items-center gap-1.5 truncate">
                  <i class="fa-solid fa-compact-disc"></i>
                  <span>Chuyên đề Âm nhạc 12</span>
                </span>
                <span class="bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0">3</span>
              </a>
            </div>`;
  }

  const items = topic.lessonNums.map(n => {
    const l = ALL_LESSONS.find(item => item.num === n);
    return `
                <li>
                  <a href="#bai-${n}" class="sidebar-link flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" data-title="${l.title.toLowerCase()}">
                    <span class="w-2 h-2 rounded-full ${l.dotColor} shrink-0"></span>
                    <span class="truncate">${l.title}</span>
                  </a>
                </li>`;
  }).join('');

  return `
            <!-- ${topic.shortTitle} -->
            <div class="mb-3 topic-group">
              <a href="#${topic.id}" class="flex items-center justify-between text-xs font-bold uppercase tracking-wider ${topic.textColor} px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span class="flex items-center gap-1.5 truncate">
                  <i class="fa-solid ${topic.icon}"></i>
                  <span>${topic.shortTitle}</span>
                </span>
                <span class="${topic.badgeColor} px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0">${topic.lessonNums.length}</span>
              </a>
              <ul class="mt-1 space-y-0.5 pl-2 border-l-2 ${topic.borderLeftColor}">
${items}
              </ul>
            </div>`;
}

// Generate Mobile Drawer Topic Group
function generateDrawerTopicGroup(topic) {
  if (topic.isChuyenDe) {
    return `
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-compact-disc"></i>
            <span>Chuyên đề Âm nhạc 12</span>
          </h4>
          <ul class="space-y-1 pl-2 border-l border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
            <li><a href="#chuyende" class="drawer-link block py-1 hover:text-violet-600">Chuyên đề 12.1: Phần mềm chép nhạc MuseScore</a></li>
            <li><a href="#chuyende" class="drawer-link block py-1 hover:text-violet-600">Chuyên đề 12.2: Thu âm & Xử lý Audacity</a></li>
            <li><a href="#chuyende" class="drawer-link block py-1 hover:text-violet-600">Chuyên đề 12.3: Hòa âm tự động JJazzLab</a></li>
          </ul>
        </div>`;
  }

  const items = topic.lessonNums.map(n => {
    const l = ALL_LESSONS.find(item => item.num === n);
    return `
            <li>
              <a href="#bai-${n}" class="drawer-link block py-1 text-xs text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400">
                ${l.title}
              </a>
            </li>`;
  }).join('');

  return `
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider ${topic.textColor} mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid ${topic.icon}"></i>
            <span>${topic.shortTitle}</span>
          </h4>
          <ul class="space-y-1 pl-2 border-l border-gray-200 dark:border-gray-700">
${items}
          </ul>
        </div>`;
}

console.log('Generating full page structure...');
const allTopicSectionsHtml = TOPICS.map(t => generateTopicSection(t)).join('\n\n');
const allSidebarGroupsHtml = TOPICS.map(t => generateSidebarTopicGroup(t)).join('\n');
const allDrawerGroupsHtml = TOPICS.map(t => generateDrawerTopicGroup(t)).join('\n');

// 10 Comprehensive Course Final Questions for Âm nhạc 12
const FINAL_QUIZ_QUESTIONS = [
  {
    q: "Quãng ghép (Compound Interval) trong lý thuyết âm nhạc được định nghĩa như thế nào?",
    options: [
      "Là quãng nhỏ hơn quãng 2 thứ",
      "Là quãng có độ rộng lớn hơn một quãng 8 đúng (lớn hơn 6 cung)",
      "Là quãng chỉ gồm 2 nốt nhạc cùng cao độ",
      "Là quãng không thể xướng âm được"
    ],
    correctIndex: 1
  },
  {
    q: "Theo công thức quy đổi nhanh giữa quãng đơn và quãng ghép, Quãng 12 tương ứng với quãng đơn nào?",
    options: ["Quãng 3", "Quãng 4", "Quãng 5", "Quãng 6"],
    correctIndex: 2
  },
  {
    q: "Bài hát 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh' do nhạc sĩ nào sáng tác?",
    options: ["Văn Cao", "Hoàng Vân", "Văn Dung", "Doãn Nho"],
    correctIndex: 2
  },
  {
    q: "Hóa biểu của giọng Son trưởng (G major) và giọng Mi thứ (E minor) có đặc điểm chung nào?",
    options: [
      "Đều có duy nhất 1 dấu thăng là Fa thăng (F#) ở dòng 5 khóa Sol",
      "Đều có 1 dấu giáng là Si giáng (Bb)",
      "Đều có 2 dấu thăng là Fa thăng và Đô thăng",
      "Đều không có bất kỳ dấu hóa nào"
    ],
    correctIndex: 0
  },
  {
    q: "Đặc trưng nghệ thuật nổi bật nhất của dòng nhạc Jazz là gì?",
    options: [
      "Tính chất ngẫu hứng (Improvisation) thăng hoa và tiết tấu đảo phách (Syncopation)",
      "Chỉ sử dụng nhạc cụ dây không có nhạc cụ gõ",
      "Giai điệu lặp đi lặp lại một nốt duy nhất",
      "Chỉ được sáng tác bởi người châu Á"
    ],
    correctIndex: 0
  },
  {
    q: "Trong thang âm giọng Mi thứ hòa âm, nốt nhạc nào được nâng cao nửa cung bằng dấu thăng bất thường?",
    options: ["Nốt Đô (C)", "Nốt Rê (D biến thành D#)", "Nốt Sol (G)", "Nốt La (A)"],
    correctIndex: 1
  },
  {
    q: "Nhân vật nào trong nghệ thuật sân khấu Chèo truyền thống giữ vai trò tạo tiếng cười châm biếm sâu cay và đối thoại trực tiếp với công chúng?",
    options: ["Nhân vật Hề chèo", "Vai Đào thương", "Vai Kép chính", "Thầy bói"],
    correctIndex: 0
  },
  {
    q: "Kiệt tác âm nhạc bất hủ 'Dạ cổ hoài lang' do nhạc sĩ Cao Văn Lầu sáng tác năm 1919 tại Bạc Liêu là tiền thân phát triển thành bản nhạc nào?",
    options: ["Bản Hát xoan", "Bản Vọng cổ Nam Bộ", "Điệu Hát xẩm", "Điệu Quan họ"],
    correctIndex: 1
  },
  {
    q: "Trong phần mềm chép nhạc MuseScore, phím tắt nào trên bàn phím máy tính dùng để kích hoạt chế độ ghi chép nốt nhạc?",
    options: ["Phím Space", "Phím N", "Phím Enter", "Phím F5"],
    correctIndex: 1
  },
  {
    q: "Vì sao dù Trí tuệ nhân tạo (AI) có thể tạo nhạc trong vài giây, các tác phẩm do con người sáng tạo vẫn luôn giữ vị trí độc bản và không thể bị thay thế hoàn toàn?",
    options: [
      "Vì máy tính chạy tốn điện hơn con người",
      "Vì tác phẩm của con người chứa đựng cảm xúc chân thật, tình yêu thương, tư tưởng nhân văn sâu sắc và những trải nghiệm sống độc nhất",
      "Vì AI không biết chơi đàn piano",
      "Vì pháp luật cấm hoàn toàn máy tính phát ra âm thanh"
    ],
    correctIndex: 1
  }
];

const modalQuestionsHtml = FINAL_QUIZ_QUESTIONS.map((q, idx) => {
  const letters = ['A', 'B', 'C', 'D'];
  const opts = q.options.map((opt, oIdx) => `
          <label class="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer text-xs sm:text-sm">
            <input type="radio" name="modal_q_${idx}" value="${oIdx}" class="text-sky-600 focus:ring-sky-500">
            <span><strong>${letters[oIdx]}.</strong> ${opt}</span>
          </label>`).join('');

  return `
        <!-- Câu ${idx + 1} -->
        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
          <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-2">
            Câu ${idx + 1}: ${q.q}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
${opts}
          </div>
          <div id="modal_feedback_${idx}" class="hidden mt-2 text-xs"></div>
        </div>`;
}).join('\n');

const correctAnswersArray = JSON.stringify(FINAL_QUIZ_QUESTIONS.map(q => q.correctIndex));

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Âm Nhạc Lớp 12 - Chương Trình Chuẩn SGK Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Khóa học Âm nhạc 12 chuẩn SGK Kết nối tri thức (GDPT 2018). 8 chủ đề, 16 bài học đầy đủ về Quãng ghép, Hành khúc, giọng Son trưởng, giọng Mi thứ, Nhạc nhẹ, Sân khấu Chèo Tuồng Cải lương, ký âm MuseScore, thu âm Audacity & Trí tuệ nhân tạo AI.">

  <!-- Tailwind CSS CDN with Plugins -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#0ea5e9', // Sky/Cyan primary for Music Grade 12
            'primary-dark': '#0284c7',
            'dark-bg': '#0f172a',
            'dark-surface': '#1e293b'
          }
        }
      }
    };
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Google Fonts: Inter & Fira Code -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    code, pre {
      font-family: 'Fira Code', monospace;
    }
    /* Custom Scrollbar for sidebar */
    .sidebar-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .sidebar-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .sidebar-scroll::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    .dark .sidebar-scroll::-webkit-scrollbar-thumb {
      background: #334155;
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Top Sticky Navigation -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-dark-surface/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Trở về Trang chủ">
          <i class="fa-solid fa-arrow-left text-base"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-lg">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="tracking-tight">CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-gray-300 dark:text-gray-700">|</span>
        <span class="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300">
          Âm Nhạc Lớp 12 (KNTT - GDPT 2018)
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        
        <!-- Final Quiz Modal Launcher -->
        <button onclick="openCourseQuiz()" class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shadow-sm">
          <i class="fa-solid fa-award"></i>
          <span>Kiểm tra toàn khóa (10 câu)</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button id="themeToggle" class="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Chuyển chế độ Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:block text-amber-400 text-sm"></i>
        </button>

        <!-- Mobile Menu Drawer Toggle -->
        <button id="mobileMenuBtn" class="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm hidden lg:hidden flex justify-end">
    <div class="bg-white dark:bg-dark-surface w-80 max-w-full h-full shadow-2xl p-5 flex flex-col overflow-y-auto">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-4">
        <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-base">
          <i class="fa-solid fa-book-open text-sky-600"></i>
          <span>Mục Lục 16 Bài Học</span>
        </div>
        <button id="closeDrawerBtn" class="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="space-y-4 flex-1">
${allDrawerGroupsHtml}
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
          <button onclick="openCourseQuiz()" class="w-full py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-2">
            <i class="fa-solid fa-award"></i>
            <span>Làm Bài Kiểm Tra Toàn Khóa</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Course Hero Banner -->
  <section class="bg-gradient-to-br from-sky-700 via-blue-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
    <div class="max-w-7xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-sky-200 border border-white/15">
        <i class="fa-solid fa-circle-check text-sky-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 - Sách giáo khoa Kết nối tri thức với cuộc sống</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
        Âm Nhạc Lớp 12
      </h1>
      <p class="text-sky-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
        Khóa học trực tuyến toàn diện gồm <strong>8 Chủ đề</strong> và <strong>16 Bài học</strong> theo chuẩn chương trình Âm nhạc 12. Trang bị kiến thức nâng cao về Quãng ghép, thể loại Hành khúc, giọng Son trưởng & Mi thứ, các dòng nhạc nhẹ, nghệ thuật sân khấu Chèo, Tuồng, Cải lương Nam Bộ, kỹ năng chép nhạc MuseScore, thu âm Audacity và định hướng nghề nghiệp thời đại trí tuệ nhân tạo (AI).
      </p>

      <!-- Key Course Stats -->
      <div class="flex flex-wrap gap-4 pt-3 text-xs sm:text-sm font-medium">
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-layer-group text-sky-300"></i>
          <span>8 Chủ đề chuẩn mực</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-book-bookmark text-blue-300"></i>
          <span>16 Bài học chuyên sâu</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-circle-question text-amber-300"></i>
          <span>64 Câu hỏi trắc nghiệm tương tác</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-laptop-code text-teal-300"></i>
          <span>MuseScore, Audacity & AI Music</span>
        </div>
      </div>

      <!-- Quick Topic Anchor Pills -->
      <div class="pt-4 flex flex-wrap gap-2">
        <a href="#chude-1" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-palette"></i>
          <span>Chủ đề 1</span>
        </a>
        <a href="#chude-2" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-guitar"></i>
          <span>Chủ đề 2</span>
        </a>
        <a href="#chude-3" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-globe"></i>
          <span>Chủ đề 3</span>
        </a>
        <a href="#chude-4" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-sliders"></i>
          <span>Chủ đề 4</span>
        </a>
        <a href="#chude-5" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-masks-theater"></i>
          <span>Chủ đề 5</span>
        </a>
        <a href="#chude-6" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-music"></i>
          <span>Chủ đề 6</span>
        </a>
        <a href="#chude-7" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-laptop-code"></i>
          <span>Chủ đề 7</span>
        </a>
        <a href="#chuyende" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-compact-disc"></i>
          <span>Chuyên đề Âm nhạc</span>
        </a>
        <a href="#chude-8" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-robot"></i>
          <span>Chủ đề 8</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Sticky Sidebar: Organized by Topics -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-800">
            <h3 class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <i class="fa-solid fa-list-ul text-sky-500"></i>
              <span>Mục lục theo Chủ đề</span>
            </h3>
            <span class="text-xs bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded-full font-bold">8 C.Đề / 16 Bài</span>
          </div>

          <!-- Quick Search in Sidebar -->
          <div class="relative mb-3">
            <input type="text" id="lessonSearch" placeholder="Tìm kiếm bài học..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-sky-500">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-gray-400 text-xs"></i>
          </div>

          <div class="sidebar-scroll max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
${allSidebarGroupsHtml}
          </div>

          <!-- Comprehensive Quiz Button in Sidebar -->
          <div class="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
            <button onclick="openCourseQuiz()" class="w-full py-2 px-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/50 text-xs font-bold flex items-center justify-center gap-2 transition-colors">
              <i class="fa-solid fa-award"></i>
              <span>Kiểm Tra Toàn Khóa (10 câu)</span>
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Course Lessons Content -->
      <main class="lg:col-span-3 space-y-16">
${allTopicSectionsHtml}
      </main>
    </div>
  </div>

  <!-- Course Comprehensive Quiz Modal -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-dark-surface rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 p-6 flex flex-col">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-4">
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-award text-sky-500"></i>
            <span>Bài Kiểm Tra Tổng Hợp Toàn Khóa Âm Nhạc 12</span>
          </h3>
          <p class="text-xs text-gray-500 dark:text-gray-400">10 câu hỏi bao quát 8 chủ đề chuẩn GDPT 2018</p>
        </div>
        <button onclick="closeCourseQuiz()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl p-1">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <form id="courseQuizForm" class="space-y-4 flex-1">
${modalQuestionsHtml}
      </form>

      <div class="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4 flex items-center justify-between">
        <div id="quizScoreText" class="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300"></div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="closeCourseQuiz()" class="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Đóng
          </button>
          <button type="button" id="submitCourseQuizBtn" class="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors">
            Nộp bài chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6 lg:px-8 mt-16 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto space-y-2">
      <div class="flex items-center justify-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-base">
        <i class="fa-solid fa-graduation-cap"></i>
        <span>CodeHub - Nền Tảng Học Tập Số</span>
      </div>
      <p>Chương trình môn Âm nhạc Lớp 12 biên soạn chuẩn sách giáo khoa Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
      <p>&copy; 2026 CodeHub. Bảo lưu mọi quyền.</p>
    </div>
  </footer>

  <!-- Client-side Scripts -->
  <script>
    // Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    });

    // Mobile drawer toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');

    mobileMenuBtn?.addEventListener('click', () => mobileDrawer.classList.remove('hidden'));
    closeDrawerBtn?.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    mobileDrawer?.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) mobileDrawer.classList.add('hidden');
    });

    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    });

    // Live Sidebar Search Filter
    const lessonSearch = document.getElementById('lessonSearch');
    lessonSearch?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.sidebar-link').forEach(a => {
        const title = a.getAttribute('data-title') || '';
        const li = a.closest('li');
        if (!q || title.includes(q)) {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      });

      document.querySelectorAll('.topic-group').forEach(group => {
        const visibleItems = group.querySelectorAll('li:not([style*="display: none"])');
        group.style.display = visibleItems.length === 0 && q ? 'none' : '';
      });
    });

    // Interactive Quiz Handler for Per-lesson Quizzes
    function checkQuiz(btn, isCorrect) {
      const container = btn.closest('.quiz-item');
      if (container.getAttribute('data-answered') === 'true') return;
      container.setAttribute('data-answered', 'true');

      const allBtns = container.querySelectorAll('.quiz-btn');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.add('opacity-60', 'cursor-not-allowed');
      });

      const feedback = container.querySelector('.quiz-feedback');
      const explain = container.querySelector('.quiz-explain');

      if (isCorrect) {
        btn.classList.remove('opacity-60', 'bg-white', 'dark:bg-gray-800');
        btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200', 'font-bold');
        feedback.innerHTML = '<span class="text-emerald-700 dark:text-emerald-300 font-bold"><i class="fa-solid fa-circle-check"></i> Chính xác! Chúc mừng em đã nắm vững kiến thức bài học.</span>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800';
      } else {
        btn.classList.remove('opacity-60', 'bg-white', 'dark:bg-gray-800');
        btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200', 'font-bold');
        feedback.innerHTML = '<span class="text-rose-700 dark:text-rose-300 font-bold"><i class="fa-solid fa-circle-xmark"></i> Chưa chính xác! Em hãy xem giải thích chi tiết bên dưới nhé.</span>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800';
      }

      feedback.classList.remove('hidden');
      explain.classList.remove('hidden');
    }

    // Modal Comprehensive Quiz
    const courseQuizModal = document.getElementById('courseQuizModal');
    const submitCourseQuizBtn = document.getElementById('submitCourseQuizBtn');
    const quizScoreText = document.getElementById('quizScoreText');

    function openCourseQuiz() {
      courseQuizModal.classList.remove('hidden');
    }

    function closeCourseQuiz() {
      courseQuizModal.classList.add('hidden');
    }

    const quizCorrectAnswers = ${correctAnswersArray};

    submitCourseQuizBtn?.addEventListener('click', () => {
      let score = 0;
      for (let idx = 0; idx < quizCorrectAnswers.length; idx++) {
        const selected = document.querySelector('input[name="modal_q_' + idx + '"]:checked');
        const fb = document.getElementById('modal_feedback_' + idx);
        fb.classList.remove('hidden');

        if (!selected) {
          fb.className = 'text-xs font-semibold p-2 rounded mt-2 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300';
          fb.innerHTML = '⚠️ Em chưa chọn đáp án cho câu này.';
        } else if (parseInt(selected.value) === quizCorrectAnswers[idx]) {
          score++;
          fb.className = 'text-xs font-semibold p-2 rounded mt-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300';
          fb.innerHTML = '✅ Chính xác!';
        } else {
          fb.className = 'text-xs font-semibold p-2 rounded mt-2 bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300';
          fb.innerHTML = '❌ Chưa đúng. Đáp án đúng là ' + ['A', 'B', 'C', 'D'][quizCorrectAnswers[idx]];
        }
      }

      submitCourseQuizBtn.disabled = true;
      submitCourseQuizBtn.classList.add('opacity-50');

      if (score >= 8) {
        quizScoreText.innerHTML = '<span class="text-emerald-600 dark:text-emerald-400 font-bold">Xuất sắc! Đạt ' + score + '/10 điểm 🎉</span>';
      } else {
        quizScoreText.innerHTML = '<span class="text-amber-600 dark:text-amber-400 font-bold">Đạt ' + score + '/10 điểm. Em hãy ôn lại bài học nhé!</span>';
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('courses/amnhac_12.html', fullHtml, 'utf8');

console.log('Build amnhac_12.html completed successfully!');
console.log('Output file size:', fullHtml.length, 'bytes');
