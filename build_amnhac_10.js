const fs = require('fs');

const ALL_LESSONS = require('./make_music10_data.js');

console.log('Total lessons loaded:', ALL_LESSONS.length);
if (ALL_LESSONS.length !== 16) {
  throw new Error(`Expected 16 lessons, got ${ALL_LESSONS.length}`);
}

// Topic configurations for Âm nhạc 10
const TOPICS = [
  {
    num: 1,
    id: "chude-1",
    title: "Chủ đề 1: Tuổi trẻ và Tình yêu quê hương (Hát & Nhạc lý cơ bản)",
    shortTitle: "Chủ đề 1: Tuổi trẻ & Quê hương",
    icon: "fa-microphone-lines",
    gradient: "from-rose-600 via-rose-700 to-red-900",
    textColor: "text-rose-600 dark:text-rose-400",
    borderLeftColor: "border-rose-200 dark:border-rose-900/50",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    desc: "Rèn luyện tư thế ca hát, cơ chế hơi thở cơ hoành (thở bụng), kỹ thuật phát thanh Legato và Staccato; Ôn tập củng cố hệ thống quãng, gam và các giọng cơ bản.",
    lessonNums: [1, 2]
  },
  {
    num: 2,
    id: "chude-2",
    title: "Chủ đề 2: Âm nhạc cổ điển phương Tây",
    shortTitle: "Chủ đề 2: Cổ điển phương Tây",
    icon: "fa-landmark",
    gradient: "from-amber-600 via-yellow-700 to-stone-900",
    textColor: "text-amber-600 dark:text-amber-400",
    borderLeftColor: "border-amber-200 dark:border-amber-900/50",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    desc: "Khám phá thời kỳ Cổ điển Vienna rực rỡ với ba bậc thầy vĩ đại Joseph Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven và các thể loại khí nhạc mẫu mực: Sonata, Giao hưởng (Symphony) và Concerto.",
    lessonNums: [3, 4]
  },
  {
    num: 3,
    id: "chude-3",
    title: "Chủ đề 3: Di sản âm nhạc truyền thống Việt Nam",
    shortTitle: "Chủ đề 3: Di sản dân tộc",
    icon: "fa-fan",
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
    textColor: "text-emerald-600 dark:text-emerald-400",
    borderLeftColor: "border-emerald-200 dark:border-emerald-900/50",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    desc: "Tự hào tìm hiểu các di sản âm nhạc truyền thống được UNESCO vinh danh: Dân ca Quan họ Bắc Ninh, Ca trù, Hát Xoan Phú Thọ, Không gian văn hóa Cồng chiêng Tây Nguyên và Đờn ca tài tử Nam Bộ.",
    lessonNums: [5, 6]
  },
  {
    num: 4,
    id: "chude-4",
    title: "Chủ đề 4: Nhạc lý nâng cao và Hợp âm",
    shortTitle: "Chủ đề 4: Nhạc lý nâng cao & Hợp âm",
    icon: "fa-music",
    gradient: "from-purple-600 via-indigo-700 to-slate-900",
    textColor: "text-purple-600 dark:text-purple-400",
    borderLeftColor: "border-purple-200 dark:border-purple-900/50",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    desc: "Làm chủ quy luật các Giọng cùng tên, Giọng song song, Hóa biểu vòng tròn bậc năm; Nắm vững cấu tạo Hợp âm ba (Trưởng, Thứ, Tăng, Giảm) và Hợp âm bảy át (V7).",
    lessonNums: [7, 8]
  },
  {
    num: 5,
    id: "chude-5",
    title: "Chủ đề 5: Nhạc cụ giai điệu và Hòa âm",
    shortTitle: "Chủ đề 5: Thực hành nhạc cụ",
    icon: "fa-guitar",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    textColor: "text-blue-600 dark:text-blue-400",
    borderLeftColor: "border-blue-200 dark:border-blue-900/50",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    desc: "Thực hành diễn tấu nhạc cụ giai điệu (Sáo Recorder Soprano, Kèn phím Melodica) và nhạc cụ đệm hòa âm phổ thông (Đàn Guitar Acoustic, Đàn phím điện tử Keyboard).",
    lessonNums: [9, 10]
  },
  {
    num: 6,
    id: "chude-6",
    title: "Chủ đề 6: Âm nhạc Lãng mạn và Nhạc kịch Opera",
    shortTitle: "Chủ đề 6: Lãng mạn & Opera",
    icon: "fa-masks-theater",
    gradient: "from-pink-600 via-rose-700 to-purple-950",
    textColor: "text-pink-600 dark:text-pink-400",
    borderLeftColor: "border-pink-200 dark:border-pink-900/50",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    desc: "Khám phá thế giới biểu cảm tinh tế thời kỳ Lãng mạn với Chopin, Tchaikovsky, Schubert và nghệ thuật sân khấu âm nhạc đỉnh cao: Nhạc kịch Opera, Aria, Recitative và Hợp xướng.",
    lessonNums: [11, 12]
  },
  {
    num: 7,
    id: "chude-7",
    title: "Chủ đề 7: Âm nhạc đương đại và Công nghệ số",
    shortTitle: "Chủ đề 7: Đương đại & Công nghệ DAW",
    icon: "fa-headphones",
    gradient: "from-cyan-600 via-teal-700 to-slate-900",
    textColor: "text-cyan-600 dark:text-cyan-400",
    borderLeftColor: "border-cyan-200 dark:border-cyan-900/50",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    desc: "Tìm hiểu đặc trưng các dòng nhạc đại chúng (Pop, Rock, Jazz, EDM, Hip-hop) và ứng dụng công nghệ phòng thu số: Phần mềm làm nhạc DAW, chuẩn giao tiếp MIDI và quy trình sản xuất âm nhạc.",
    lessonNums: [13, 14]
  },
  {
    num: "chuyende",
    id: "chuyende",
    title: "Chuyên đề học tập: Âm nhạc ứng dụng & Biểu diễn học đường",
    shortTitle: "Chuyên đề Âm nhạc 10",
    icon: "fa-compact-disc",
    gradient: "from-violet-600 via-purple-700 to-slate-900",
    textColor: "text-violet-600 dark:text-violet-400",
    borderLeftColor: "border-violet-200 dark:border-violet-900/50",
    badgeColor: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
    dotColor: "bg-violet-500",
    desc: "Chuyên đề mở rộng: Phương pháp xây dựng chương trình biểu diễn nghệ thuật học đường, nghệ thuật hòa thanh đệm hát cơ bản và sáng tác giai điệu ca khúc tuổi học trò.",
    isChuyenDe: true
  },
  {
    num: 8,
    id: "chude-8",
    title: "Chủ đề 8: Hướng nghiệp và Đạo đức âm nhạc",
    shortTitle: "Chủ đề 8: Hướng nghiệp & Bản quyền",
    icon: "fa-scale-balanced",
    gradient: "from-orange-600 via-amber-700 to-slate-900",
    textColor: "text-orange-600 dark:text-orange-400",
    borderLeftColor: "border-orange-200 dark:border-orange-900/50",
    badgeColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    dotColor: "bg-orange-500",
    desc: "Khám phá bức tranh việc làm đa dạng trong ngành công nghiệp âm nhạc hiện đại, thực thi Luật Sở hữu trí tuệ, tôn trọng bản quyền tác giả và ứng xử văn hóa của người làm nghệ thuật.",
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
                    <span class="w-1.5 h-5 bg-rose-500 rounded-full inline-block"></span>
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
                              class="quiz-btn text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors flex items-start gap-2">
                        <span class="font-bold text-gray-400 shrink-0">${letters[oIdx]}.</span>
                        <span>${escapeTextTags(opt)}</span>
                      </button>`;
    }).join('');

    return `
                  <div class="quiz-item p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700" data-answered="false">
                    <p class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      <span class="text-rose-600 dark:text-rose-400 font-bold">Câu ${qIdx + 1}:</span> ${escapeTextTags(q.q)}
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
                <a href="#quiz-bai-${lesson.num}" class="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1">
                  <i class="fa-solid fa-circle-question"></i> Làm trắc nghiệm bài này
                </a>
              </div>
              <h3 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                ${lesson.title}
              </h3>
            </div>

            <div class="p-6 sm:p-8 space-y-8">
              
              <!-- Target & Intro -->
              <div class="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50 space-y-2">
                <div class="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-compass"></i> Mục tiêu cần đạt:
                </div>
                <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  ${cleanTarget}
                </p>
                <div class="pt-2 border-t border-rose-200/50 dark:border-rose-900/40 text-xs text-rose-800 dark:text-rose-300/90 italic">
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
                  <i class="fa-solid fa-music text-rose-500"></i> Nhiệm vụ thực hành & Vận dụng sáng tạo:
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
                    <i class="fa-solid fa-circle-question text-rose-500"></i>
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
                <span>Chuyên đề học tập Âm nhạc 10</span>
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
            <span class="px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold">CHUYÊN ĐỀ 10.1</span>
            <h4 class="font-bold text-base text-gray-900 dark:text-white">Xây dựng chương trình biểu diễn</h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Lên ý tưởng chủ đề, xây dựng kịch bản biểu diễn văn nghệ học đường, dàn dựng tiết mục đơn ca, tốp ca, múa phụ họa và dẫn chương trình (MC).</p>
          </div>
          <div class="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
            <span class="px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold">CHUYÊN ĐỀ 10.2</span>
            <h4 class="font-bold text-base text-gray-900 dark:text-white">Hòa thanh & Nghệ thuật đệm hát</h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Phương pháp đặt hợp âm cho bài hát (I - IV - V7), các mẫu tiết tấu đệm đàn Guitar và Keyboard cơ bản theo nhịp 2/4, 3/4, 4/4 và 6/8.</p>
          </div>
          <div class="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
            <span class="px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold">CHUYÊN ĐỀ 10.3</span>
            <h4 class="font-bold text-base text-gray-900 dark:text-white">Sáng tác ca khúc & Ký âm số</h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Quy trình phát triển câu nhạc, mô phỏng tiết tấu lời thơ và sử dụng phần mềm ký âm chuyên nghiệp (MuseScore, Sibelius) để in tổng phổ bản nhạc chuẩn mực.</p>
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
                  <span>Chuyên đề Âm nhạc 10</span>
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
            <span>Chuyên đề Âm nhạc 10</span>
          </h4>
          <ul class="space-y-1 pl-2 border-l border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
            <li><a href="#chuyende" class="drawer-link block py-1 hover:text-violet-600">Chuyên đề 10.1: Xây dựng CT Biểu diễn</a></li>
            <li><a href="#chuyende" class="drawer-link block py-1 hover:text-violet-600">Chuyên đề 10.2: Hòa thanh & Đệm hát</a></li>
            <li><a href="#chuyende" class="drawer-link block py-1 hover:text-violet-600">Chuyên đề 10.3: Sáng tác & Ký âm MuseScore</a></li>
          </ul>
        </div>`;
  }

  const items = topic.lessonNums.map(n => {
    const l = ALL_LESSONS.find(item => item.num === n);
    return `
            <li>
              <a href="#bai-${n}" class="drawer-link block py-1 text-xs text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400">
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

// 10 Comprehensive Course Final Questions for Âm nhạc 10
const FINAL_QUIZ_QUESTIONS = [
  {
    q: "Trong kỹ thuật ca hát chuyên nghiệp, việc hạ cơ hoành khi hít vào (thở bụng) mang lại tác dụng cốt lõi nào?",
    options: [
      "Giúp khoang ngực mở rộng tối đa xuống phía dưới và kiểm soát luồng hơi thở ra đều đặn, ổn định",
      "Làm nhấc cao hai bả vai để đón nhận luồng không khí nhanh nhất",
      "Làm hẹp khoang miệng để nốt cao sắc bén hơn",
      "Tập trung toàn bộ hơi thở ở lồng ngực trên mà không cần dùng cơ bụng"
    ],
    correctIndex: 0
  },
  {
    q: "Kỹ thuật thanh nhạc diễn tả âm thanh ngắt rời, nảy, dứt khoát và sắc nét giữa các nốt nhạc gọi là gì?",
    options: ["Legato", "Staccato", "Falsetto", "Vibrato"],
    correctIndex: 1
  },
  {
    q: "Ba nhạc sĩ đại diện tiêu biểu nhất cấu thành trường phái Âm nhạc Cổ điển Vienna là những ai?",
    options: [
      "J.S. Bach, G.F. Handel, A. Vivaldi",
      "Joseph Haydn, W.A. Mozart, Ludwig van Beethoven",
      "Frédéric Chopin, Franz Liszt, Franz Schubert",
      "P.I. Tchaikovsky, Claude Debussy, Maurice Ravel"
    ],
    correctIndex: 1
  },
  {
    q: "Thể loại khí nhạc cổ điển viết cho một hay một vài nhạc cụ độc tấu hòa tấu cùng dàn nhạc giao hưởng gọi là gì?",
    options: ["Sonata", "Concerto", "Symphony (Giao hưởng)", "Tứ tấu dây (String Quartet)"],
    correctIndex: 1
  },
  {
    q: "Di sản âm nhạc dân tộc nào của vùng đồng bằng Bắc Bộ nổi bật với phong cách hát đối đáp nam nữ (liền anh, liền chị) không nhạc đệm?",
    options: ["Dân ca Quan họ Bắc Ninh", "Nghệ thuật Ca trù", "Hát Xoan Phú Thọ", "Đờn ca tài tử Nam Bộ"],
    correctIndex: 0
  },
  {
    q: "Hai giọng có cùng một âm chủ (nốt bắt đầu) nhưng khác nhau về hóa biểu và tính chất gọi là gì?",
    options: ["Giọng song song", "Giọng cùng tên", "Giọng đồng âm", "Giọng chuyển điệu"],
    correctIndex: 1
  },
  {
    q: "Hợp âm ba Trưởng (Major Triad) được cấu tạo từ các quãng nào tính liên tiếp từ âm gốc?",
    options: [
      "Quãng 3 thứ + Quãng 3 trưởng",
      "Quãng 3 trưởng + Quãng 3 thứ",
      "Quãng 3 thứ + Quãng 3 thứ",
      "Quãng 3 trưởng + Quãng 3 trưởng"
    ],
    correctIndex: 1
  },
  {
    q: "Nhà soạn nhạc người Ba Lan thời kỳ Lãng mạn nổi tiếng với các tác phẩm viết riêng cho đàn Piano (Nocturne, Polonaise, Ballade) là ai?",
    options: ["Franz Schubert", "Frédéric Chopin", "P.I. Tchaikovsky", "Robert Schumann"],
    correctIndex: 1
  },
  {
    q: "Trong sản xuất âm nhạc kỹ thuật số hiện đại, viết tắt DAW (ví dụ Logic Pro, Ableton Live, FL Studio) có nghĩa là gì?",
    options: [
      "Digital Audio Workstation (Trạm làm việc âm thanh số)",
      "Dynamic Audio Waveform",
      "Direct Acoustic Wave",
      "Digital Art Workflow"
    ],
    correctIndex: 0
  },
  {
    q: "Theo Luật Sở hữu trí tuệ, hành vi sử dụng nhạc có bản quyền của tác giả làm nhạc nền video thương mại mà chưa xin phép được coi là gì?",
    options: [
      "Sử dụng hợp pháp theo quy tắc trích dẫn tự do",
      "Hành vi xâm phạm quyền tác giả và quyền liên quan",
      "Được phép nếu video đăng trên mạng xã hội cá nhân",
      "Hành vi quảng bá miễn phí được pháp luật khuyến khích"
    ],
    correctIndex: 1
  }
];

const modalQuestionsHtml = FINAL_QUIZ_QUESTIONS.map((q, idx) => {
  const letters = ['A', 'B', 'C', 'D'];
  const opts = q.options.map((opt, oIdx) => `
          <label class="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer text-xs sm:text-sm">
            <input type="radio" name="modal_q_${idx}" value="${oIdx}" class="text-rose-600 focus:ring-rose-500">
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
  <title>Âm Nhạc Lớp 10 - Chương Trình Chuẩn SGK Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Khóa học Âm nhạc 10 chuẩn SGK Kết nối tri thức (GDPT 2018). 8 chủ đề, 16 bài học đầy đủ kỹ thuật thanh nhạc, nhạc lý nâng cao, âm nhạc cổ điển phương Tây, di sản dân tộc, thực hành nhạc cụ, công nghệ DAW & bản quyền âm nhạc.">

  <!-- Tailwind CSS CDN with Plugins -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#e11d48', // Rose primary for Music Grade 10
            'primary-dark': '#be123c',
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
        <a href="../index.html" class="flex items-center gap-2 text-rose-600 dark:text-rose-500 font-bold text-lg">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="tracking-tight">CodeHub</span>
        </a>
        <span class="hidden sm:inline-block text-gray-300 dark:text-gray-700">|</span>
        <span class="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300">
          Âm Nhạc Lớp 10 (KNTT - GDPT 2018)
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        
        <!-- Final Quiz Modal Launcher -->
        <button onclick="openCourseQuiz()" class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-colors shadow-sm">
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
          <i class="fa-solid fa-book-open text-rose-600"></i>
          <span>Mục Lục 16 Bài Học</span>
        </div>
        <button id="closeDrawerBtn" class="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="space-y-4 flex-1">
${allDrawerGroupsHtml}
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
          <button onclick="openCourseQuiz()" class="w-full py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2">
            <i class="fa-solid fa-award"></i>
            <span>Làm Bài Kiểm Tra Toàn Khóa</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Course Hero Banner -->
  <section class="bg-gradient-to-br from-rose-700 via-purple-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
    <div class="max-w-7xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold text-rose-200 border border-white/15">
        <i class="fa-solid fa-circle-check text-rose-400"></i>
        <span>Chuẩn Chương trình GDPT 2018 - Sách giáo khoa Kết nối tri thức với cuộc sống</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
        Âm Nhạc Lớp 10
      </h1>
      <p class="text-rose-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
        Khóa học trực tuyến toàn diện gồm <strong>8 Chủ đề</strong> và <strong>16 Bài học</strong> theo chuẩn chương trình Âm nhạc 10. Giúp học sinh nắm vững kỹ thuật thanh nhạc cơ bản, nhạc lý nâng cao và hợp âm, khám phá di sản âm nhạc phương Tây và dân tộc Việt Nam, thực hành nhạc cụ (Recorder, Melodica, Guitar, Keyboard), tiếp cận công nghệ làm nhạc số (DAW & MIDI) cùng định hướng nghề nghiệp và đạo đức bản quyền âm nhạc.
      </p>

      <!-- Key Course Stats -->
      <div class="flex flex-wrap gap-4 pt-3 text-xs sm:text-sm font-medium">
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-layer-group text-rose-300"></i>
          <span>8 Chủ đề chuẩn mực</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-book-bookmark text-purple-300"></i>
          <span>16 Bài học chuyên sâu</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-circle-question text-amber-300"></i>
          <span>64 Câu hỏi trắc nghiệm tương tác</span>
        </div>
        <div class="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
          <i class="fa-solid fa-music text-teal-300"></i>
          <span>Thanh nhạc, Nhạc cụ & Công nghệ DAW</span>
        </div>
      </div>

      <!-- Quick Topic Anchor Pills -->
      <div class="pt-4 flex flex-wrap gap-2">
        <a href="#chude-1" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-microphone-lines"></i>
          <span>Chủ đề 1</span>
        </a>
        <a href="#chude-2" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-landmark"></i>
          <span>Chủ đề 2</span>
        </a>
        <a href="#chude-3" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-fan"></i>
          <span>Chủ đề 3</span>
        </a>
        <a href="#chude-4" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-music"></i>
          <span>Chủ đề 4</span>
        </a>
        <a href="#chude-5" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-guitar"></i>
          <span>Chủ đề 5</span>
        </a>
        <a href="#chude-6" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-masks-theater"></i>
          <span>Chủ đề 6</span>
        </a>
        <a href="#chude-7" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-headphones"></i>
          <span>Chủ đề 7</span>
        </a>
        <a href="#chuyende" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-compact-disc"></i>
          <span>Chuyên đề Âm nhạc</span>
        </a>
        <a href="#chude-8" class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-scale-balanced"></i>
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
              <i class="fa-solid fa-list-ul text-rose-500"></i>
              <span>Mục lục theo Chủ đề</span>
            </h3>
            <span class="text-xs bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded-full font-bold">8 C.Đề / 16 Bài</span>
          </div>

          <!-- Quick Search in Sidebar -->
          <div class="relative mb-3">
            <input type="text" id="lessonSearch" placeholder="Tìm kiếm bài học..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-rose-500">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-gray-400 text-xs"></i>
          </div>

          <div class="sidebar-scroll max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
${allSidebarGroupsHtml}
          </div>

          <!-- Comprehensive Quiz Button in Sidebar -->
          <div class="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
            <button onclick="openCourseQuiz()" class="w-full py-2 px-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-xs font-bold flex items-center justify-center gap-2 transition-colors">
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
            <i class="fa-solid fa-award text-rose-500"></i>
            <span>Bài Kiểm Tra Tổng Hợp Toàn Khóa Âm Nhạc 10</span>
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
          <button type="button" id="submitCourseQuizBtn" class="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors">
            Nộp bài chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6 lg:px-8 mt-16 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto space-y-2">
      <div class="flex items-center justify-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-base">
        <i class="fa-solid fa-graduation-cap"></i>
        <span>CodeHub - Nền Tảng Học Tập Số</span>
      </div>
      <p>Chương trình môn Âm nhạc Lớp 10 biên soạn chuẩn sách giáo khoa Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
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

fs.writeFileSync('courses/amnhac_10.html', fullHtml, 'utf8');

console.log('Build amnhac_10.html completed successfully!');
console.log('Output file size:', fullHtml.length, 'bytes');
