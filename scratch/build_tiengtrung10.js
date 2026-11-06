// Master builder for courses/tiengtrung_10.html
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const data = require('./tiengtrung10_data.js');
const diagrams = require('./tiengtrung10_diagrams.js');

console.log('Building courses/tiengtrung_10.html...');

// Sidebar navigation grouping
const topicLessons = {};
for (const t of data.topics) {
  topicLessons[t.id] = [];
}

const orderedLessonKeys = ['1', '2', '3', 'r1', '4', '5', 'r2', '6', '7', '8', 'r3', '9', '10', 'r4'];
for (const key of orderedLessonKeys) {
  const l = data.lessons[key];
  if (topicLessons[l.topicId]) {
    topicLessons[l.topicId].push(l);
  }
}

// Generate Sidebar Navigation Links
let sidebarNavHtml = '';
for (const t of data.topics) {
  sidebarNavHtml += `
      <div class="mb-5">
        <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400">
          <i class="fa-solid ${t.icon}"></i>
          <span>${t.badge}: ${t.title_cn}</span>
        </div>
        <div class="text-[11px] text-slate-400 dark:text-slate-500 px-3 pb-1 font-medium">${t.title_vi}</div>
        <div class="mt-1 space-y-1">
  `;
  for (const l of topicLessons[t.id]) {
    const isReview = !!l.isReview;
    const badgeColor = isReview 
      ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-300' 
      : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200';
    const numLabel = isReview ? 'Ôn tập' : `Bài ${l.num}`;

    sidebarNavHtml += `
        <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-red-200 dark:hover:border-red-800/60 hover:bg-red-50/70 dark:hover:bg-red-950/50 text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-red-600 dark:text-red-400 font-serif">${l.title_cn}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded-md ${badgeColor} font-semibold shrink-0">${numLabel}</span>
          </div>
          <div class="font-medium text-xs text-slate-500 dark:text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 truncate">
            ${l.title_vi}
          </div>
        </a>
    `;
  }
  sidebarNavHtml += `
        </div>
      </div>
  `;
}

// Generate Main Content Units
let mainContentHtml = '';
const allExamQuestions = [];

for (const key of orderedLessonKeys) {
  const l = data.lessons[key];
  const t = data.topics.find(top => top.id === l.topicId);
  const diag = diagrams[l.num] || '';
  const isReview = !!l.isReview;

  // Collect quiz questions for exam room
  if (l.quiz && Array.isArray(l.quiz)) {
    l.quiz.forEach(q => {
      allExamQuestions.push({
        unitTitle: `${isReview ? '' : 'Bài ' + l.num + ': '}${l.title_cn} (${l.title_vi})`,
        q: q.q,
        options: q.options,
        ans: q.ans,
        exp: q.exp
      });
    });
  }

  if (isReview) {
    // Review Unit Template
    let quizHtml = '';
    l.quiz.forEach((qItem, qIdx) => {
      quizHtml += `
        <div class="quiz-item p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs mb-3" data-quiz="${qIdx}">
          <p class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-3">
            <span class="text-amber-600 dark:text-amber-400 mr-1.5">Câu ${qIdx + 1}:</span>
            ${qItem.q}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
      `;
      qItem.options.forEach((opt, optIdx) => {
        const isCorrect = optIdx === qItem.ans;
        const letter = String.fromCharCode(65 + optIdx);
        const expEscaped = (qItem.exp || '').replace(/'/g, "\\'");
        quizHtml += `
            <button onclick="checkLessonQuiz(this, ${isCorrect}, '${expEscaped}')" class="quiz-opt text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:border-amber-300 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
              <span class="font-bold text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">${letter}.</span>
              <span class="leading-relaxed">${opt}</span>
            </button>
        `;
      });
      quizHtml += `
          </div>
          <div class="quiz-feedback hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
        </div>
      `;
    });

    mainContentHtml += `
      <!-- Review Unit ${l.num}: ${l.title_cn} -->
      <article id="bai-${l.num}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-amber-900/60 shadow-xs hover:shadow-md transition mb-10">
        
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-amber-100 dark:border-slate-800">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-xs sm:text-sm shadow-xs shadow-amber-500/20 tracking-wide">
              <i class="fa-solid fa-graduation-cap"></i> ${l.title_cn}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/60">
              ${l.title_vi}
            </span>
            <span class="text-xs text-slate-400 font-mono">${l.title_pinyin}</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="speakChinese('${l.title_cn}')" class="p-2 rounded-xl text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950 transition" title="Nghe phát âm">
              <i class="fa-solid fa-volume-high text-base"></i>
            </button>
            <button onclick="toggleBookmark('bai-${l.num}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white mt-2 mb-2 leading-snug">
          ${l.title_cn} <span class="text-base sm:text-lg font-sans font-bold text-amber-600 dark:text-amber-400">(${l.title_vi})</span>
        </h3>
        <p class="text-xs sm:text-sm font-mono text-amber-600 dark:text-amber-400 mb-6 pinyin-text">${l.title_pinyin}</p>

        <!-- Concept Mindmap SVG -->
        <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
            <span class="font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ ôn tập hệ thống hóa kiến thức
            </span>
            <span class="text-slate-400 text-[11px] font-mono">SVG Vector Interactive</span>
          </div>
          <div class="w-full flex items-center justify-center overflow-x-auto">
            ${diag}
          </div>
        </div>

        <!-- Summary Content -->
        <div class="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 mb-6">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-amber-200/50 dark:border-amber-900/50 text-amber-800 dark:text-amber-300 font-bold text-sm">
            <i class="fa-solid fa-book-bookmark text-base"></i>
            <span>Nội dung ôn tập & Mục tiêu tích hợp</span>
          </div>
          <ul class="space-y-2 mb-4">
            ${l.goals.map(g => `
              <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <i class="fa-solid fa-circle-check text-amber-500 mt-1 shrink-0 text-xs"></i>
                <span>${g}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Quizzes -->
        <div class="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          <div class="flex items-center justify-between gap-3 mb-4">
            <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm sm:text-base">
              <i class="fa-solid fa-circle-question text-lg"></i>
              <span>Bài tập củng cố tổng hợp (${l.quiz.length} câu)</span>
            </div>
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Chọn 1 đáp án đúng</span>
          </div>
          ${quizHtml}
        </div>

      </article>
    `;
    continue;
  }

  // Regular Lesson Template
  // 1. Vocabulary Table & Cards
  let vocabHtml = `
    <div class="my-6">
      <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
        <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
          <i class="fa-solid fa-spell-check text-red-600 dark:text-red-400"></i>
          <span>1. 生词 • Từ vựng trọng tâm</span>
        </h4>
        <span class="text-xs text-slate-400 font-medium">Bấm loa để nghe giọng chuẩn</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
  `;
  l.vocab.forEach(v => {
    vocabHtml += `
        <div class="p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:border-red-300 dark:hover:border-red-700 transition">
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <div class="flex items-baseline gap-2">
                <span class="font-serif font-black text-xl text-slate-900 dark:text-white tracking-wide">${v.hz}</span>
                <span class="text-xs font-mono font-bold text-red-600 dark:text-red-400 pinyin-text">${v.py}</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300">${v.type}</span>
              </div>
              <div class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">${v.vn}</div>
            </div>
            <button onclick="speakChinese('${v.hz}')" class="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/60 transition" title="Nghe từ: ${v.hz}">
              <i class="fa-solid fa-volume-high text-sm"></i>
            </button>
          </div>
          <div class="mt-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 text-xs text-slate-600 dark:text-slate-400">
            <div class="flex items-start gap-1.5">
              <button onclick="speakChinese('${v.eg.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-red-500 mt-0.5 shrink-0" title="Nghe câu ví dụ">
                <i class="fa-solid fa-volume-low text-[11px]"></i>
              </button>
              <div>
                <span class="font-serif text-slate-800 dark:text-slate-200 font-medium">${v.eg}</span>
                <div class="font-mono text-[11px] text-red-500 dark:text-red-400 pinyin-text">${v.eg_py}</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 italic">${v.eg_vn}</div>
              </div>
            </div>
          </div>
        </div>
    `;
  });
  vocabHtml += `
      </div>
    </div>
  `;

  // 2. Dialogue Section
  let dialogueHtml = `
    <div class="my-6 p-5 sm:p-6 rounded-2xl border border-red-200/80 dark:border-red-900/60 bg-red-50/30 dark:bg-red-950/20">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-2 border-b border-red-200/50 dark:border-red-900/40">
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <i class="fa-solid fa-comments text-red-600 dark:text-red-400"></i>
            <span>2. 情景对话 • Hội thoại giao tiếp: ${l.dialogue.title}</span>
          </h4>
          <span class="text-xs text-slate-500 dark:text-slate-400">Nhân vật: ${l.dialogue.roles.join(' & ')}</span>
        </div>
        <button onclick="speakChinese('${l.dialogue.lines.map(x => x.hz).join('。').replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition">
          <i class="fa-solid fa-play text-xs"></i>
          <span>Nghe toàn bộ hội thoại</span>
        </button>
      </div>

      <div class="space-y-3.5 mb-5">
  `;
  l.dialogue.lines.forEach(line => {
    dialogueHtml += `
        <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start gap-3">
          <div class="w-16 shrink-0 font-bold text-xs text-red-600 dark:text-red-400 pt-1 font-serif">${line.role}:</div>
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <span class="font-serif font-bold text-slate-900 dark:text-white text-sm sm:text-base">${line.hz}</span>
              <button onclick="speakChinese('${line.hz.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-red-500 transition" title="Nghe câu này">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
            </div>
            <div class="font-mono text-xs text-red-500 dark:text-red-400 mt-0.5 pinyin-text">${line.py}</div>
            <div class="text-xs text-slate-600 dark:text-slate-400 mt-1 italic">${line.vn}</div>
          </div>
        </div>
    `;
  });

  // Dialogue check question
  const checkQ = l.dialogue.checkQuestion;
  const checkEscapedExp = (checkQ.exp || '').replace(/'/g, "\\'");
  dialogueHtml += `
      </div>
      
      <!-- Dialogue Check Question -->
      <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div class="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-circle-question"></i> Kiểm tra hiểu bài hội thoại:
        </div>
        <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2.5 font-serif">${checkQ.q}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
  `;
  checkQ.options.forEach((opt, optIdx) => {
    const isCorrect = optIdx === checkQ.ans;
    const letter = String.fromCharCode(65 + optIdx);
    dialogueHtml += `
          <button onclick="checkLessonQuiz(this, ${isCorrect}, '${checkEscapedExp}')" class="quiz-opt text-left px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-red-50 text-xs text-slate-700 dark:text-slate-300 transition flex items-start gap-1.5">
            <span class="font-bold text-red-600 dark:text-red-400 shrink-0">${letter}.</span>
            <span>${opt}</span>
          </button>
    `;
  });
  dialogueHtml += `
        </div>
        <div class="quiz-feedback hidden p-2.5 rounded-xl text-xs leading-relaxed"></div>
      </div>
    </div>
  `;

  // 3. Grammar Section
  let grammarHtml = `
    <div class="my-6">
      <div class="mb-4 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
        <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
          <i class="fa-solid fa-shapes text-red-600 dark:text-red-400"></i>
          <span>3. 语法重点 • Điểm ngữ pháp & Cấu trúc</span>
        </h4>
      </div>
      <div class="space-y-4">
  `;
  l.grammar.forEach((g, gIdx) => {
    grammarHtml += `
        <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30">
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
            <span class="w-6 h-6 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs flex items-center justify-center font-bold">${gIdx + 1}</span>
            <span>${g.name}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">${g.desc}</p>
          
          <div class="my-2.5 p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-700">
            <div class="text-amber-400 text-[11px] font-bold uppercase tracking-wide mb-1">Cấu trúc công thức:</div>
            <pre class="font-mono text-emerald-300 whitespace-pre-wrap">${g.formula}</pre>
          </div>

          <div class="mt-3 space-y-2">
            <div class="text-xs font-bold text-slate-600 dark:text-slate-400">Ví dụ minh họa:</div>
    `;
    g.examples.forEach(ex => {
      grammarHtml += `
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs flex items-start gap-2">
              <button onclick="speakChinese('${ex.hz.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-red-500 mt-0.5 shrink-0" title="Nghe câu ví dụ">
                <i class="fa-solid fa-volume-high text-xs"></i>
              </button>
              <div>
                <span class="font-serif font-bold text-slate-900 dark:text-white text-xs sm:text-sm">${ex.hz}</span>
                <div class="font-mono text-red-500 dark:text-red-400 text-[11px] pinyin-text">${ex.py}</div>
                <div class="text-slate-600 dark:text-slate-400 text-[11px] italic">${ex.vn}</div>
              </div>
            </div>
      `;
    });

    if (g.mistakeCheck) {
      grammarHtml += `
            <div class="mt-2.5 p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-900 dark:text-rose-200">
              <div class="font-bold flex items-center gap-1.5 mb-1 text-rose-600 dark:text-rose-400">
                <i class="fa-solid fa-triangle-exclamation"></i> Chú ý lỗi sai thường gặp (Bẫy ngữ pháp):
              </div>
              <div class="line-through text-slate-500 mb-0.5">✗ ${g.mistakeCheck.wrong}</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mb-1">✓ ${g.mistakeCheck.right}</div>
              <div class="text-[11px] text-slate-600 dark:text-slate-400">${g.mistakeCheck.note}</div>
            </div>
      `;
    }

    grammarHtml += `
          </div>
        </div>
    `;
  });
  grammarHtml += `
      </div>
    </div>
  `;

  // 4. Four Skills Section
  const skillsHtml = `
    <div class="my-6 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
      <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
        <i class="fa-solid fa-brain text-red-600 dark:text-red-400"></i>
        <span>4. 四项技能训练 • Nhiệm vụ 4 kĩ năng & Vận dụng thực tế</span>
      </h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-headphones"></i> 听力任务 (Luyện nghe):
          </div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${l.skills.listening}</p>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-comments"></i> 口语表达 (Luyện nói):
          </div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${l.skills.speaking}</p>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-book-open"></i> 阅读理解 (Luyện đọc):
          </div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${l.skills.reading}</p>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-pen-nib"></i> 写作与表达 (Luyện viết):
          </div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${l.skills.writing}</p>
        </div>
      </div>
    </div>
  `;

  // 5. Culture Station Section
  const cultureHtml = `
    <div class="my-6 p-5 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/60 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20">
      <div class="flex items-center justify-between mb-2 pb-2 border-b border-amber-200/50 dark:border-amber-900/40">
        <h4 class="font-bold text-amber-900 dark:text-amber-300 text-sm sm:text-base flex items-center gap-2">
          <i class="fa-solid fa-landmark text-amber-600 dark:text-amber-400"></i>
          <span>${l.culture.title}</span>
        </h4>
        <button onclick="speakChinese('${l.culture.title.replace(/'/g, "\\'")}')" class="text-amber-600 dark:text-amber-400 hover:text-amber-700" title="Phát âm">
          <i class="fa-solid fa-volume-high text-sm"></i>
        </button>
      </div>
      <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">${l.culture.content}</p>
    </div>
  `;

  // 6. Review Quizzes (3 questions)
  let quizHtml = '';
  l.quiz.forEach((qItem, qIdx) => {
    quizHtml += `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs mb-3" data-quiz="${qIdx}">
        <p class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-3">
          <span class="text-red-600 dark:text-red-400 mr-1.5">Câu ${qIdx + 1}:</span>
          ${qItem.q}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
    `;
    qItem.options.forEach((opt, optIdx) => {
      const isCorrect = optIdx === qItem.ans;
      const letter = String.fromCharCode(65 + optIdx);
      const expEscaped = (qItem.exp || '').replace(/'/g, "\\'");
      quizHtml += `
          <button onclick="checkLessonQuiz(this, ${isCorrect}, '${expEscaped}')" class="quiz-opt text-left px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-red-50 dark:hover:bg-red-950/40 hover:border-red-300 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition flex items-start gap-2">
            <span class="font-bold text-red-600 dark:text-red-400 shrink-0 mt-0.5">${letter}.</span>
            <span class="leading-relaxed">${opt}</span>
          </button>
      `;
    });
    quizHtml += `
        </div>
        <div class="quiz-feedback hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
      </div>
    `;
  });

  mainContentHtml += `
      <!-- Bài ${l.num}: ${l.title_cn} -->
      <article id="bai-${l.num}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition mb-10">
        
        <!-- Header badge & bookmark -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black text-xs sm:text-sm shadow-xs shadow-red-500/20 tracking-wide font-serif">
              <i class="fa-solid fa-book"></i> Bài ${l.num}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/60 font-serif">
              ${t.badge}: ${t.title_cn}
            </span>
            <span class="text-xs text-slate-400 font-mono pinyin-text">${l.title_pinyin}</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="speakChinese('${l.title_cn}')" class="p-2 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition" title="Nghe tiêu đề">
              <i class="fa-solid fa-volume-high text-base"></i>
            </button>
            <button onclick="toggleBookmark('bai-${l.num}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>
        </div>

        <!-- Lesson Title -->
        <h3 class="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white mt-2 mb-1 leading-snug tracking-tight">
          <span class="text-red-600 dark:text-red-400">第${l.num}课:</span> ${l.title_cn}
          <span class="text-base sm:text-xl font-sans font-bold text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2">(${l.title_vi})</span>
        </h3>
        <p class="text-xs sm:text-sm font-mono text-red-500 dark:text-red-400 mb-6 font-semibold pinyin-text">${l.title_pinyin}</p>

        <!-- Communication Goals Box -->
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 mb-6">
          <div class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
            <i class="fa-solid fa-bullseye text-red-600 dark:text-red-400"></i>
            <span>交际目标 • Mục tiêu giao tiếp bài học:</span>
          </div>
          <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            ${l.goals.map(g => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-red-500 mt-1 shrink-0 text-xs"></i>
                <span>${g}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Pure SVG Vector Concept Diagram -->
        <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
            <span class="font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ trực quan Bài ${l.num}: ${l.title_cn}
            </span>
            <span class="text-slate-400 text-[11px] font-mono">SVG Vector Interactive</span>
          </div>
          <div class="w-full flex items-center justify-center overflow-x-auto">
            ${diag}
          </div>
        </div>

        <!-- 1. Vocabulary -->
        ${vocabHtml}

        <!-- 2. Dialogue -->
        ${dialogueHtml}

        <!-- 3. Grammar Points -->
        ${grammarHtml}

        <!-- 4. Four Skills Practice -->
        ${skillsHtml}

        <!-- 5. Culture Station -->
        ${cultureHtml}

        <!-- 6. Review Quizzes Section -->
        <div class="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          <div class="flex items-center justify-between gap-3 mb-4">
            <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm sm:text-base">
              <i class="fa-solid fa-circle-question text-lg"></i>
              <span>Luyện tập củng cố Bài ${l.num} (${l.quiz.length} câu)</span>
            </div>
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Chọn 1 đáp án đúng</span>
          </div>
          ${quizHtml}
        </div>

      </article>
  `;
}

// Generate Grammar Cheatsheet Rows for Modal
let grammarRowsHtml = '';
data.grammarCheatsheet.forEach((item, idx) => {
  grammarRowsHtml += `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
      <td class="p-3 font-mono font-bold text-red-600 dark:text-red-400 text-xs sm:text-sm whitespace-nowrap">${item.structure}</td>
      <td class="p-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${item.function}</td>
      <td class="p-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
        <div class="flex items-center gap-1.5">
          <span class="font-serif font-semibold">${item.example}</span>
          <button onclick="speakChinese('${item.example.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-red-500 shrink-0" title="Nghe ví dụ">
            <i class="fa-solid fa-volume-high text-xs"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
});

console.log(`Total exam questions available: ${allExamQuestions.length}`);

// Full HTML Template
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Trung Quốc 10 - Ngoại Ngữ 1 | Học Liệu Số Kết Nối Tri Thức</title>
  <meta name="description" content="Học liệu số trực tuyến Tiếng Trung Quốc lớp 10 Kết nối tri thức - 4 Chủ điểm, 10 bài học, 4 bài ôn tập, phát âm chuẩn Pinyin, sơ đồ SVG và phòng thi thử HSK.">
  
  <!-- Font & Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Serif+SC:wght@500;700;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            red: {
              50: '#fef2f2',
              100: '#fee2e2',
              200: '#fecaca',
              300: '#fca5a5',
              400: '#f87171',
              500: '#ef4444',
              600: '#dc2626',
              700: '#b91c1c',
              800: '#991b1b',
              900: '#7f1d1d'
            },
            slate: {
              850: '#151f32',
              950: '#090d16'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            serif: ['"Noto Serif SC"', 'serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    };
  </script>

  <style>
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(220, 38, 38, 0.45) transparent;
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
      background: rgba(220, 38, 38, 0.45);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(220, 38, 38, 0.75);
    }
    .dark .custom-scrollbar {
      scrollbar-color: rgba(248, 113, 113, 0.45) transparent;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(248, 113, 113, 0.45);
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(248, 113, 113, 0.75);
    }
    .nav-link.active {
      background-color: rgba(220, 38, 38, 0.12) !important;
      border-color: #dc2626 !important;
      color: #dc2626 !important;
    }
    .dark .nav-link.active {
      background-color: rgba(220, 38, 38, 0.22) !important;
      border-color: #f87171 !important;
      color: #f87171 !important;
    }
    body.hide-pinyin .pinyin-text {
      display: none !important;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-red-500 selection:text-white min-h-screen">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Back & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Quay lại trang chủ">
          <i class="fa-solid fa-arrow-left text-lg"></i>
        </a>
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-amber-600 flex items-center justify-center text-white shadow-md shadow-red-500/20 font-serif font-black text-xl">
            中
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">Tiếng Trung Quốc 10</h1>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800">
                KẾT NỐI TRI THỨC
              </span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">4 Chủ điểm • 10 Bài học • 4 Bài Ôn tập chuẩn SGK GDPT 2018</p>
          </div>
        </div>
      </div>

      <!-- Center & Right: Action Modals & Tools -->
      <div class="flex items-center gap-2">
        
        <!-- Pinyin Switch Button -->
        <button id="pinyin-toggle-btn" onclick="togglePinyin()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-red-400 text-xs font-semibold transition" title="Ẩn hoặc hiện phiên âm Pinyin để luyện đọc">
          <i class="fa-solid fa-language text-red-600"></i>
          <span id="pinyin-btn-text">Pinyin: Bật</span>
        </button>

        <!-- Grammar Cheatsheet Button -->
        <button onclick="openModal('modal-grammar')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-900/60 hover:bg-red-100 dark:hover:bg-red-900/50 transition text-xs font-bold">
          <i class="fa-solid fa-shapes text-sm"></i>
          <span class="hidden sm:inline">29 Mẫu Ngữ Pháp</span>
        </button>

        <!-- Hanzi Stroke Rules Button -->
        <button onclick="openModal('modal-hanzi')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/80 dark:border-amber-900/60 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition text-xs font-bold">
          <i class="fa-solid fa-pen-nib"></i>
          <span class="hidden sm:inline">Bút Thuận & Chữ Hán</span>
        </button>

        <!-- Exam Room Button -->
        <button onclick="openModal('modal-exam')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs shadow-xs shadow-red-500/20 hover:opacity-95 transition">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Phòng Thi 45:00</span>
        </button>

        <!-- Dark / Light Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>

        <!-- Mobile Menu Toggle -->
        <button onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container Layout: 12 Columns (4-col Sidebar + 8-col Content) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Desktop Sticky Sidebar (4 Columns) -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs p-4 sm:p-5 overflow-hidden">
        
        <div class="shrink-0 flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm font-serif">
            <i class="fa-solid fa-list-ul text-red-600 dark:text-red-400"></i>
            <span>MỤC LỤC BÀI HỌC</span>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            14 Đơn vị
          </span>
        </div>

        <!-- Sidebar Filter & Bookmarks -->
        <div class="shrink-0 flex items-center gap-2 mb-3">
          <div class="relative flex-1">
            <i class="fa-solid fa-search absolute left-3 top-2.5 text-xs text-slate-400"></i>
            <input type="text" id="sidebar-filter" oninput="filterSidebar(this.value)" placeholder="Lọc bài học theo tên..." class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-red-500 focus:outline-hidden text-slate-800 dark:text-slate-200">
          </div>
          <button id="bookmark-filter-btn" onclick="toggleBookmarkFilter()" class="p-1.5 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-amber-500 transition text-xs font-medium flex items-center gap-1" title="Chỉ hiện bài đã đánh dấu">
            <i class="fa-solid fa-bookmark text-xs"></i>
          </button>
        </div>

        <!-- Navigation Scrollable Area -->
        <nav class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 space-y-3 text-sm pb-8" id="sidebar-nav">
          ${sidebarNavHtml}
        </nav>
      </aside>

      <!-- Main Content Area (8 Columns) -->
      <main class="lg:col-span-8 min-w-0">
        
        <!-- Welcome Hero Banner -->
        <section class="bg-gradient-to-br from-red-600 via-rose-700 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-md mb-8 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3">
              <i class="fa-solid fa-certificate text-yellow-300"></i> Ngoại ngữ 1 • GDPT 2018
            </div>
            <h2 class="text-2xl sm:text-3xl font-black mb-2 tracking-tight font-serif">Học Liệu Tiếng Trung Quốc 10</h2>
            <p class="text-red-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Chương trình bám sát 4 Chủ điểm và 10 Bài học SGK <strong>Kết nối tri thức với cuộc sống</strong>. Tích hợp âm thanh phát âm giọng chuẩn bản xứ trên từng chữ Hán và đoạn hội thoại, sơ đồ tư duy trực quan, rèn luyện toàn diện 4 kĩ năng (Nghe, Nói, Đọc, Viết) và trạm văn hóa Trung Hoa sâu sắc.
            </p>
            <div class="flex flex-wrap gap-2.5 mt-4 text-xs font-bold">
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group text-yellow-300"></i> 4 Chủ điểm
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-book-open text-yellow-300"></i> 10 Bài &bull; 4 Ôn tập
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-volume-high text-green-300"></i> Âm thanh Web Speech
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-xs flex items-center gap-1.5">
                <i class="fa-solid fa-shapes text-cyan-300"></i> 29 Cấu trúc ngữ pháp
              </span>
            </div>
          </div>
        </section>

        <!-- Lessons Container -->
        <div id="lessons-container">
          ${mainContentHtml}
        </div>

      </main>

    </div>
  </div>

  <!-- Mobile Drawer Sidebar -->
  <div id="mobile-backdrop" onclick="toggleMobileSidebar()" class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 hidden transition-opacity lg:hidden"></div>
  <div id="mobile-sidebar" class="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 z-50 shadow-2xl transform -translate-x-full transition-transform duration-300 flex flex-col lg:hidden">
    <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm font-serif">
        <i class="fa-solid fa-list-ul text-red-600 dark:text-red-400"></i>
        <span>MỤC LỤC BÀI HỌC</span>
      </div>
      <button onclick="toggleMobileSidebar()" class="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="p-4 border-b border-slate-100 dark:border-slate-800">
      <input type="text" oninput="filterSidebar(this.value)" placeholder="Tìm bài học..." class="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-red-500 text-slate-800 dark:text-slate-200">
    </div>
    <nav class="custom-scrollbar overflow-y-auto p-4 flex-1 min-h-0 space-y-4 text-sm pb-10">
      ${sidebarNavHtml}
    </nav>
  </div>

  <!-- MODAL 1: 29 Grammar Structures Cheatsheet (modal-grammar) -->
  <div id="modal-grammar" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-red-50 dark:bg-red-950/40">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center">
            <i class="fa-solid fa-shapes text-lg"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Bảng Tra Cứu 29 Cấu Trúc Ngữ Pháp Tiếng Trung 10</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Tổng hợp toàn bộ cấu trúc, chức năng và ví dụ mẫu chuẩn SGK</p>
          </div>
        </div>
        <button onclick="closeModal('modal-grammar')" class="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-red-100/50">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-slate-700 dark:text-slate-300">
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-red-50 dark:bg-slate-800 text-red-900 dark:text-red-300 font-bold border-b border-red-100 dark:border-slate-700">
              <tr>
                <th class="p-3">Cấu trúc</th>
                <th class="p-3">Chức năng ngữ pháp</th>
                <th class="p-3">Ví dụ minh họa</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/60">
              ${grammarRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 2: Hanzi Stroke & Pinyin Guide (modal-hanzi) -->
  <div id="modal-hanzi" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-amber-50 dark:bg-amber-950/40">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center">
            <i class="fa-solid fa-pen-nib text-lg"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Quy Tắc Bút Thuận & Chiến Lược Học Chữ Hán</h3>
            <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Bí quyết nhớ mặt chữ Hán, thanh điệu Pinyin và phương pháp học theo cụm</p>
          </div>
        </div>
        <button onclick="closeModal('modal-hanzi')" class="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-slate-700 dark:text-slate-300 space-y-5 text-xs sm:text-sm leading-relaxed">
        
        <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-slate-800/50 border border-amber-200 dark:border-slate-700">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-list-ol"></i> 7 Quy tắc bút thuận viết chữ Hán cơ bản:
          </h4>
          <ol class="space-y-1.5 list-decimal pl-5 text-slate-700 dark:text-slate-300">
            <li><strong>Ngang trước sổ sau (先横后竖):</strong> Ví dụ chữ 十 (ngang trước, sổ sau).</li>
            <li><strong>Phẩy trước mác sau (先撇后捺):</strong> Ví dụ chữ 八, 人.</li>
            <li><strong>Trên trước dưới sau (从上到下):</strong> Ví dụ chữ 三, 言.</li>
            <li><strong>Trái trước phải sau (从左到右):</strong> Ví dụ chữ 你, 他, 假.</li>
            <li><strong>Ngoài trước trong sau (从外到内):</strong> Ví dụ chữ 月, 同.</li>
            <li><strong>Vào trước đóng sau (先进入后关门):</strong> Ví dụ chữ 回, 国, 四.</li>
            <li><strong>Giữa trước hai bên sau (先中间后两边):</strong> Ví dụ chữ 小, 水.</li>
          </ol>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-lightbulb text-yellow-500"></i> Chiến lược ghi nhớ chữ Hán hiệu quả:
          </h4>
          <ul class="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• <strong>Học theo bộ thủ:</strong> Hơn 80% chữ Hán là chữ hình thanh (hình biểu thị ý nghĩa, thanh biểu thị âm đọc). Ví dụ: bộ Thủy (氵) liên quan đến nước (海, 浪, 游); bộ Ngôn (讠) liên quan đến lời nói (语, 谈, 说).</li>
            <li>• <strong>Học theo cụm từ và ngữ cảnh:</strong> Không học rời rạc từng chữ đơn lẻ mà học theo từ ghép và câu hoàn chỉnh (VD: 假期 -> 度假 -> 度假村).</li>
            <li>• <strong>Luyện nghe và nhắc lại (Shadowing):</strong> Nghe phát âm mẫu chuẩn rồi lặp lại để nắm vững biến điệu thanh 3 và thanh nhẹ.</li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  <!-- MODAL 3: Exam Room 45:00 (modal-exam) -->
  <div id="modal-exam" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <i class="fa-solid fa-trophy text-yellow-300"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base font-serif">Phòng Thi Trạng Nguyên Tiếng Trung 10</h3>
            <p class="text-xs text-red-100 font-medium">Bộ đề 10 câu ngẫu nhiên chọn lọc từ ngân hàng câu hỏi chuẩn SGK</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/30 text-yellow-300 font-mono font-bold text-sm">
            <i class="fa-regular fa-clock"></i>
            <span id="exam-timer">45:00</span>
          </div>
          <button onclick="closeModal('modal-exam')" class="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>
      
      <!-- Exam Body -->
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6" id="exam-container">
        <!-- Injected dynamically via JS -->
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
        <div class="text-xs font-semibold text-slate-500 dark:text-slate-400" id="exam-status">
          Đã hoàn thành: 0 / 10 câu
        </div>
        <button id="exam-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition">
          Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- Client-side Interactive JavaScript -->
  <script>
    // Audio Speech Synthesis for Chinese Pronunciation
    function speakChinese(text) {
      if (!window.speechSynthesis) {
        alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85; // Speed suitable for learners
      window.speechSynthesis.speak(utterance);
    }

    // Pinyin Toggle
    let pinyinVisible = true;
    function togglePinyin() {
      pinyinVisible = !pinyinVisible;
      if (pinyinVisible) {
        document.body.classList.remove('hide-pinyin');
        document.getElementById('pinyin-btn-text').innerText = 'Pinyin: Bật';
      } else {
        document.body.classList.add('hide-pinyin');
        document.getElementById('pinyin-btn-text').innerText = 'Pinyin: Tắt';
      }
    }

    // Theme Dark / Light toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon text-sm text-slate-500';
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      applyTheme(isDark);
    });

    // Mobile Sidebar Drawer
    function toggleMobileSidebar() {
      const sidebar = document.getElementById('mobile-sidebar');
      const backdrop = document.getElementById('mobile-backdrop');
      const isHidden = sidebar.classList.contains('-translate-x-full');
      if (isHidden) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Modal Control
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        if (id === 'modal-exam') {
          startExam();
        }
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('[id^="modal-"]').forEach(m => m.classList.add('hidden'));
      }
    });

    // Active Scroll Spy for Sidebar Links
    window.addEventListener('scroll', () => {
      const lessons = document.querySelectorAll('article.lesson-card');
      const navLinks = document.querySelectorAll('.nav-link');
      let currentId = '';

      lessons.forEach(lesson => {
        const top = lesson.getBoundingClientRect().top;
        if (top <= 140) {
          currentId = lesson.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        }
      });
    });

    // Filter Sidebar Lessons
    function filterSidebar(query) {
      const q = query.toLowerCase().trim();
      document.querySelectorAll('#sidebar-nav .nav-link, #mobile-sidebar .nav-link').forEach(link => {
        const text = link.innerText.toLowerCase();
        if (text.includes(q)) {
          link.style.display = '';
        } else {
          link.style.display = 'none';
        }
      });
    }

    // Bookmarking System
    let bookmarks = JSON.parse(localStorage.getItem('tiengtrung10_bookmarks') || '[]');
    let bookmarkOnlyMode = false;

    function toggleBookmark(lessonId) {
      const index = bookmarks.indexOf(lessonId);
      if (index === -1) {
        bookmarks.push(lessonId);
      } else {
        bookmarks.splice(index, 1);
      }
      localStorage.setItem('tiengtrung10_bookmarks', JSON.stringify(bookmarks));
      updateBookmarkUI();
    }

    function updateBookmarkUI() {
      document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const lesson = btn.closest('article');
        const id = lesson.getAttribute('id');
        const icon = btn.querySelector('i');
        if (bookmarks.includes(id)) {
          icon.className = 'fa-solid fa-bookmark text-amber-500';
          btn.setAttribute('title', 'Bỏ đánh dấu bài này');
        } else {
          icon.className = 'fa-regular fa-bookmark';
          btn.setAttribute('title', 'Lưu bài học');
        }
      });
    }

    function toggleBookmarkFilter() {
      bookmarkOnlyMode = !bookmarkOnlyMode;
      const btn = document.getElementById('bookmark-filter-btn');
      if (bookmarkOnlyMode) {
        btn.classList.add('bg-amber-500', 'text-white', 'border-amber-500');
        btn.classList.remove('text-slate-500');
        document.querySelectorAll('#lessons-container > article').forEach(article => {
          const id = article.getAttribute('id');
          if (bookmarks.includes(id)) {
            article.style.display = '';
          } else {
            article.style.display = 'none';
          }
        });
      } else {
        btn.classList.remove('bg-amber-500', 'text-white', 'border-amber-500');
        btn.classList.add('text-slate-500');
        document.querySelectorAll('#lessons-container > article').forEach(article => {
          article.style.display = '';
        });
      }
    }

    // Check Lesson Quiz
    function checkLessonQuiz(btn, isCorrect, explanation) {
      const quizItem = btn.closest('.quiz-item, div.p-4');
      const buttons = quizItem.querySelectorAll('.quiz-opt');
      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-red-50', 'hover:border-red-300');
      });

      const feedback = quizItem.querySelector('.quiz-feedback');
      feedback.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs sm:text-sm leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200';
        feedback.innerHTML = '<div class="flex items-start gap-2 font-semibold"><i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-base"></i><span>Chính xác! ' + explanation + '</span></div>';
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        feedback.className = 'quiz-feedback p-3 rounded-xl text-xs sm:text-sm leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-200';
        feedback.innerHTML = '<div class="flex items-start gap-2 font-semibold"><i class="fa-solid fa-circle-xmark text-rose-500 mt-0.5 text-base"></i><span>Chưa đúng! ' + explanation + '</span></div>';
      }
    }

    // 45:00 Exam Room Implementation
    const examQuestionsBank = ${JSON.stringify(allExamQuestions)};
    let activeExamQuestions = [];
    let examTimerInterval = null;
    let examTimeLeft = 45 * 60;
    let userExamAnswers = {};

    function startExam() {
      if (activeExamQuestions.length > 0) return;
      const shuffled = [...examQuestionsBank].sort(() => 0.5 - Math.random());
      activeExamQuestions = shuffled.slice(0, 10);
      userExamAnswers = {};
      examTimeLeft = 45 * 60;

      const container = document.getElementById('exam-container');
      let html = '';
      activeExamQuestions.forEach((q, idx) => {
        html += '<div class="exam-q p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850" data-idx="' + idx + '">' +
          '<div class="flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400 mb-2">' +
            '<span>Câu ' + (idx + 1) + ' / 10</span>' +
            '<span class="text-slate-400 font-medium text-[11px]">' + q.unitTitle + '</span>' +
          '</div>' +
          '<div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-3 font-serif">' + q.q + '</div>' +
          '<div class="grid grid-cols-1 gap-2">';
        
        q.options.forEach((opt, optIdx) => {
          const letter = String.fromCharCode(65 + optIdx);
          html += '<button onclick="selectExamOpt(this, ' + idx + ', ' + optIdx + ')" class="exam-opt text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-red-400 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition flex items-start gap-2.5">' +
            '<span class="font-bold text-red-600 dark:text-red-400 shrink-0 mt-0.5">' + letter + '.</span>' +
            '<span>' + opt + '</span>' +
          '</button>';
        });

        html += '</div></div>';
      });

      container.innerHTML = html;
      updateExamStatus();

      clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        document.getElementById('exam-timer').innerText = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function selectExamOpt(btn, qIdx, optIdx) {
      userExamAnswers[qIdx] = optIdx;
      const parent = btn.closest('.exam-q');
      parent.querySelectorAll('.exam-opt').forEach(b => {
        b.classList.remove('border-red-500', 'bg-red-50', 'dark:bg-red-950/60', 'font-bold');
      });
      btn.classList.add('border-red-500', 'bg-red-50', 'dark:bg-red-950/60', 'font-bold');
      updateExamStatus();
    }

    function updateExamStatus() {
      const answered = Object.keys(userExamAnswers).length;
      document.getElementById('exam-status').innerText = 'Đã hoàn thành: ' + answered + ' / 10 câu';
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      activeExamQuestions.forEach((q, idx) => {
        const chosen = userExamAnswers[idx];
        const isCorrect = chosen === q.ans;
        if (isCorrect) score++;

        const parent = document.querySelector('.exam-q[data-idx="' + idx + '"]');
        if (parent) {
          const opts = parent.querySelectorAll('.exam-opt');
          opts.forEach(b => b.disabled = true);
          if (chosen !== undefined) {
            if (isCorrect) {
              opts[chosen].classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
            } else {
              opts[chosen].classList.add('bg-rose-100', 'dark:bg-rose-950', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
            }
          }
          opts[q.ans].classList.add('border-emerald-500', 'font-bold');

          const exp = document.createElement('div');
          exp.className = 'mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs leading-relaxed text-slate-700 dark:text-slate-300';
          exp.innerHTML = '<span class="font-bold text-red-600 dark:text-red-400">Giải thích: </span>' + q.exp;
          parent.appendChild(exp);
        }
      });

      const container = document.getElementById('exam-container');
      const banner = document.createElement('div');
      banner.className = 'p-6 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-center shadow-lg mb-6';
      banner.innerHTML = '<div class="text-3xl font-black mb-1">Kết quả: ' + score + ' / 10 Điểm (' + (score * 10) + '%)</div>' +
        '<p class="text-xs sm:text-sm text-red-100">' + (score >= 8 ? '太棒了！Xuất sắc! Bạn đã nắm rất vững kiến thức Tiếng Trung 10.' : (score >= 5 ? '不错！Khá tốt! Hãy ôn lại các câu chưa đúng để hoàn thiện hơn nhé.' : '加油！Cần cố gắng thêm! Hãy xem lại ngữ pháp và luyện tập lại.')) + '</p>';
      container.prepend(banner);

      const submitBtn = document.getElementById('exam-submit-btn');
      submitBtn.innerText = 'Làm lại đề mới';
      submitBtn.onclick = () => {
        activeExamQuestions = [];
        startExam();
        submitBtn.innerText = 'Nộp bài chấm điểm';
        submitBtn.onclick = submitExam;
      };
    }

    document.addEventListener("DOMContentLoaded", () => {
      updateBookmarkUI();
    });
  </script>
</body>
</html>`;

// Verify JS Syntax with VM before writing to disk
const inlineScripts = fullHtml.match(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
console.log(`Verifying ${inlineScripts.length} inline scripts...`);
inlineScripts.forEach((s, idx) => {
  const code = s.replace(/<\/?script[^>]*>/gi, '');
  try {
    new vm.Script(code);
    console.log(`Script ${idx + 1} syntax: VALID (${code.length} chars)`);
  } catch (err) {
    console.error(`Script ${idx + 1} SYNTAX ERROR:`, err.message);
    process.exit(1);
  }
});

const outputPath = path.join(__dirname, '../courses/tiengtrung_10.html');
fs.writeFileSync(outputPath, fullHtml, 'utf8');
console.log(`Successfully generated courses/tiengtrung_10.html!`);
console.log(`Output size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
