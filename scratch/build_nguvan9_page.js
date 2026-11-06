const fs = require('fs');

const { lessonsData, reviewMilestones } = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/nguvan9_dataset.json', 'utf8'));
const examQuestions = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/nguvan9_exam.json', 'utf8'));
const svgs = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/nguvan9_svgs.json', 'utf8'));

console.log('Compiling nguvan_9.html...');

// Sidebar navigation generation
let sidebarHtml = '';

// Volume 1 in sidebar
sidebarHtml += `
  <div class="mb-4">
    <div class="px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 rounded-lg mb-2 flex items-center justify-between">
      <span>TẬP MỘT (HỌC KÌ I)</span>
      <span class="text-[10px] font-bold">5 Bài</span>
    </div>
    <div class="space-y-1">
`;

lessonsData.filter(l => l.volume === 1).forEach(l => {
  sidebarHtml += `
    <a href="#${l.id}" class="lesson-sub-link flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50/60 dark:hover:bg-rose-950/20 transition group">
      <span class="truncate flex items-center gap-2">
        <span class="w-5 h-5 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 flex items-center justify-center text-[10px] font-black shrink-0">${l.number}</span>
        <span class="truncate">${l.title.replace(`Bài ${l.number}. `, '')}</span>
      </span>
      <i class="fa-solid fa-chevron-right text-[9px] text-slate-400 group-hover:text-rose-500 transition-transform group-hover:translate-x-0.5"></i>
    </a>
  `;
});

sidebarHtml += `
    <a href="#on-tap-hki" class="lesson-sub-link flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-400 hover:bg-amber-50/60 dark:hover:bg-amber-950/20 transition group">
      <span class="truncate flex items-center gap-2">
        <span class="w-5 h-5 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 flex items-center justify-center text-[10px] font-black shrink-0">★</span>
        <span class="truncate">Ôn tập cuối học kì I</span>
      </span>
      <i class="fa-solid fa-chevron-right text-[9px] text-amber-500 transition-transform group-hover:translate-x-0.5"></i>
    </a>
  </div>
</div>
`;

// Volume 2 in sidebar
sidebarHtml += `
  <div class="mb-4">
    <div class="px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-lg mb-2 flex items-center justify-between">
      <span>TẬP HAI (HỌC KÌ II)</span>
      <span class="text-[10px] font-bold">5 Bài</span>
    </div>
    <div class="space-y-1">
`;

lessonsData.filter(l => l.volume === 2).forEach(l => {
  sidebarHtml += `
    <a href="#${l.id}" class="lesson-sub-link flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-blue-950/20 transition group">
      <span class="truncate flex items-center gap-2">
        <span class="w-5 h-5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-black shrink-0">${l.number}</span>
        <span class="truncate">${l.title.replace(`Bài ${l.number}. `, '')}</span>
      </span>
      <i class="fa-solid fa-chevron-right text-[9px] text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5"></i>
    </a>
  `;
});

sidebarHtml += `
    <a href="#on-tap-hkii" class="lesson-sub-link flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs font-bold text-green-700 dark:text-green-400 hover:bg-green-50/60 dark:hover:bg-green-950/20 transition group">
      <span class="truncate flex items-center gap-2">
        <span class="w-5 h-5 rounded-lg bg-green-100 dark:bg-green-900/60 text-green-800 dark:text-green-300 flex items-center justify-center text-[10px] font-black shrink-0">★</span>
        <span class="truncate">Ôn tập cuối năm học</span>
      </span>
      <i class="fa-solid fa-chevron-right text-[9px] text-green-500 transition-transform group-hover:translate-x-0.5"></i>
    </a>
  </div>
</div>
`;

// Helper to render Quiz HTML
function renderQuizBlock(unitId, quizList) {
  let quizHtml = '';
  quizList.forEach((qItem, qIdx) => {
    quizHtml += `
      <div class="quiz-item p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-rose-300 dark:hover:border-rose-700/60" id="quiz-item-${unitId}-${qIdx}">
        <p class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-3 leading-relaxed flex items-start gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">${qIdx + 1}</span>
          <span>${qItem.q}</span>
        </p>
        <div class="space-y-2 pl-8">
    `;

    qItem.options.forEach((opt, optIdx) => {
      quizHtml += `
        <label class="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-750 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 cursor-pointer text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-all">
          <input type="radio" name="quiz-${unitId}-${qIdx}" value="${optIdx}" class="text-rose-600 focus:ring-rose-500 w-4 h-4">
          <span class="flex-1">${opt}</span>
        </label>
      `;
    });

    quizHtml += `
        </div>
        <div class="quiz-feedback hidden mt-3.5 ml-8 p-3 rounded-xl text-xs sm:text-sm leading-relaxed border" id="feedback-${unitId}-${qIdx}"></div>
      </div>
    `;
  });

  return `
    <div class="border-t border-slate-100 dark:border-slate-800 pt-6">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-rose-500"></i> Luyện tập trắc nghiệm bài học (4 câu)
        </h4>
        <button onclick="checkUnitQuiz('${unitId}')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-check-double"></i> Chấm điểm bài tập
        </button>
      </div>

      <div class="space-y-4">
        ${quizHtml}
      </div>

      <div id="quiz-summary-${unitId}" class="hidden mt-4 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-center">
        <p class="text-sm font-black text-rose-700 dark:text-rose-300" id="quiz-score-text-${unitId}">0 / 4 Điểm</p>
      </div>
    </div>
  `;
}

// Generate Lessons and Milestones HTML
let mainContentHtml = '';

// Render 10 Lessons
lessonsData.forEach((l) => {
  const isVol1 = l.volume === 1;
  const svgCode = svgs[l.id] || `<div class="p-8 text-center text-slate-400">Đang cập nhật sơ đồ...</div>`;

  // Render Readings HTML
  let readingsHtml = '';
  (l.readings || []).forEach((r) => {
    readingsHtml += `
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
          <h5 class="text-sm sm:text-base font-black text-rose-700 dark:text-rose-400 flex items-center gap-2">
            <i class="fa-solid fa-book-bookmark text-rose-500"></i> ${r.title}
          </h5>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 italic">${r.author}</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong class="text-slate-900 dark:text-white">Tóm tắt &amp; Định hướng đọc hiểu:</strong> ${r.summary}
        </p>
        <div>
          <strong class="text-xs font-bold text-slate-900 dark:text-white block mb-1">Trọng tâm khám phá:</strong>
          <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-300 pl-4 list-disc">
            ${(r.keyPoints || []).map(kp => `<li>${kp}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });

  mainContentHtml += `
    <!-- LESSON ${l.number}: ${l.title} -->
    <article id="${l.id}" class="scroll-mt-24 bg-white dark:bg-slate-850 rounded-3xl shadow-sm hover:shadow-md border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 transition-all">
      <!-- Lesson Top Meta -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${isVol1 ? 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300'}">
            TẬP ${isVol1 ? 'MỘT' : 'HAI'} • BÀI ${l.number}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
            <i class="fa-regular fa-bookmark text-rose-500"></i> ${l.pages}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            <i class="fa-regular fa-clock mr-1"></i> ${l.time}
          </span>
        </div>
      </div>

      <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 leading-snug">
        ${l.title}
      </h3>
      <p class="text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400 mb-6">
        Thể loại trọng tâm: ${l.genre}
      </p>

      <!-- Objectives -->
      <div class="mb-6 p-4 sm:p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
        <h4 class="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-2.5 flex items-center gap-2">
          <i class="fa-solid fa-bullseye"></i> Mục tiêu cần đạt bài học
        </h4>
        <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          ${(l.objectives || []).map(obj => `
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-check text-rose-500 text-xs mt-1 shrink-0"></i>
              <span>${obj}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Vector SVG Diagram -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <i class="fa-solid fa-diagram-project text-rose-500"></i> Sơ đồ trực quan &amp; Đồ hoạ văn học
          </span>
          <span class="text-[11px] text-slate-400 font-medium">Bản vẽ vector SVG độc quyền</span>
        </div>
        <div class="diagram-viewport p-2 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
          ${svgCode}
        </div>
      </div>

      <!-- 1. Tri thức thể loại -->
      <div class="mb-8">
        <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <i class="fa-solid fa-feather text-rose-500"></i> Tri thức thể loại &amp; Kĩ năng đọc hiểu
        </h4>
        ${l.genreKnowledge}
      </div>

      <!-- 2. Các văn bản đọc -->
      <div class="mb-8 space-y-4">
        <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <i class="fa-solid fa-book-open text-rose-500"></i> Các tác phẩm đọc hiểu trọng tâm
        </h4>
        ${readingsHtml}
      </div>

      <!-- 3. Thực hành Tiếng Việt -->
      <div class="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
        <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
          <i class="fa-solid fa-spell-check text-rose-500"></i> Tri thức Tiếng Việt: ${l.vietnamese.topic}
        </h4>
        ${l.vietnamese.content}
      </div>

      <!-- 4. Viết & Nói-nghe Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <!-- Writing -->
        <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          <h5 class="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-pen-nib text-amber-600"></i> Thực hành Viết: ${l.writing.genre}
          </h5>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Dàn ý tham khảo:</strong> ${l.writing.outline}
          </p>
        </div>

        <!-- Speaking & Listening -->
        <div class="p-4 sm:p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40">
          <h5 class="text-xs font-black uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-microphone-lines text-teal-600"></i> Thực hành Nói và Nghe
          </h5>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-1.5">
            <strong>Nhiệm vụ:</strong> ${l.speaking.task}
          </p>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong>Kĩ năng:</strong> ${l.speaking.tips}
          </p>
        </div>
      </div>

      <!-- 4-question Interactive Quiz -->
      ${renderQuizBlock(l.id, l.quiz)}
    </article>
  `;

  // Insert Review Milestone 1 right after Lesson 5
  if (l.number === 5) {
    const rev1 = reviewMilestones[0];
    const svgRev1 = svgs[rev1.id] || '';
    mainContentHtml += `
      <!-- MILESTONE: REVIEW SEMESTER I -->
      <article id="${rev1.id}" class="scroll-mt-24 bg-gradient-to-br from-rose-50/70 to-pink-50/40 dark:from-slate-850 dark:to-slate-800 rounded-3xl shadow-md border-2 border-rose-300 dark:border-rose-800 p-6 sm:p-8 transition-all">
        <div class="flex items-center gap-2.5 mb-3">
          <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-rose-600 text-white">
            TỔNG KẾT HỌC KÌ I
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${rev1.pages}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-3">
          ${rev1.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
          ${rev1.desc}
        </p>

        <!-- Milestone SVG -->
        <div class="mb-8">
          <div class="diagram-viewport p-2 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
            ${svgRev1}
          </div>
        </div>

        <!-- Quiz -->
        ${renderQuizBlock(rev1.id, rev1.quiz)}
      </article>
    `;
  }
});

// Review Milestone 2 after Lesson 10
const rev2 = reviewMilestones[1];
const svgRev2 = svgs[rev2.id] || '';
mainContentHtml += `
  <!-- MILESTONE: REVIEW SEMESTER II -->
  <article id="${rev2.id}" class="scroll-mt-24 bg-gradient-to-br from-green-50/70 to-emerald-50/40 dark:from-slate-850 dark:to-slate-800 rounded-3xl shadow-md border-2 border-green-300 dark:border-green-800 p-6 sm:p-8 transition-all">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-green-600 text-white">
        TỔNG KẾT TOÀN DIỆN CUỐI NĂM
      </span>
      <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${rev2.pages}</span>
    </div>
    <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-3">
      ${rev2.title}
    </h3>
    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
      ${rev2.desc}
    </p>

    <!-- Milestone SVG -->
    <div class="mb-8">
      <div class="diagram-viewport p-2 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
        ${svgRev2}
      </div>
    </div>

    <!-- Quiz -->
    ${renderQuizBlock(rev2.id, rev2.quiz)}
  </article>
`;

// Trạng Nguyên Exam HTML
let examQuestionsHtml = '';
examQuestions.forEach((eq, idx) => {
  examQuestionsHtml += `
    <div class="bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700/80 transition-all hover:border-amber-400" id="exam-q-${idx}">
      <p class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-3 leading-relaxed flex items-start gap-3">
        <span class="w-7 h-7 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">${idx + 1}</span>
        <span>${eq.q}</span>
      </p>
      <div class="space-y-2.5 pl-10">
  `;

  eq.options.forEach((opt, oIdx) => {
    examQuestionsHtml += `
      <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 cursor-pointer text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-all">
        <input type="radio" name="exam-q-${idx}" value="${oIdx}" class="text-amber-600 focus:ring-amber-500 w-4 h-4">
        <span class="flex-1">${opt}</span>
      </label>
    `;
  });

  examQuestionsHtml += `
      </div>
      <div id="exam-explain-${idx}" class="hidden mt-4 ml-10 p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs sm:text-sm leading-relaxed border-l-4"></div>
    </div>
  `;
});

// Program Map Table rows
let programMapRows = '';
lessonsData.forEach(l => {
  programMapRows += `
    <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-rose-50/30 dark:hover:bg-rose-950/20 transition">
      <td class="py-3 px-3.5 font-bold text-rose-700 dark:text-rose-400 text-xs">Bài ${l.number}</td>
      <td class="py-3 px-3.5 font-semibold text-slate-800 dark:text-slate-200 text-xs">${l.title.replace(`Bài ${l.number}. `, '')}</td>
      <td class="py-3 px-3.5 text-slate-500 dark:text-slate-400 text-xs">${l.pages}</td>
      <td class="py-3 px-3.5 text-slate-600 dark:text-slate-300 text-xs">${l.genre}</td>
      <td class="py-3 px-3.5 text-slate-600 dark:text-slate-300 text-xs truncate max-w-xs">${l.vietnamese.topic}</td>
    </tr>
  `;
});

// Full Page HTML
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Ngữ Văn 9 (SGK Kết Nối Tri Thức: 10 Bài Học • Tập 1 &amp; Tập 2 • Sơ Đồ Vector SVG • Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            literature: {
              red: '#BE123C',
              rose: '#E11D48',
              pink: '#EC4899',
              amber: '#D97706',
              teal: '#0D9488',
              indigo: '#4F46E5',
              dark: '#0F172A'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome 6 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
      letter-spacing: 0.005em !important;
      line-height: 1.7 !important;
    }
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.03);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(225, 29, 72, 0.25);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(225, 29, 72, 0.45);
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200 antialiased selection:bg-rose-500 selection:text-white">

  <!-- TOP STICKY GLASS HEADER -->
  <header class="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 glass-header border-b border-slate-200/80 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left: Logo & Breadcrumbs -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-book-open-reader text-lg"></i>
          </div>
          <span class="font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <div class="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>Lớp 9</span>
          <span class="text-slate-300 dark:text-slate-700">/</span>
          <span class="text-rose-600 dark:text-rose-400 font-bold">Ngữ Văn 9</span>
        </div>
      </div>

      <!-- Right Action Tools -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Anchor to Map -->
        <a href="#ban-do-chuong-trinh" class="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold transition flex items-center gap-1.5 border border-rose-200/60 dark:border-rose-900/60">
          <i class="fa-solid fa-map-location-dot text-rose-500"></i>
          <span class="hidden md:inline">Bản đồ 10 Bài</span>
          <span class="md:hidden">Bản đồ</span>
        </a>

        <!-- Trạng Nguyên Exam Anchor -->
        <a href="#trang-nguyen-exam" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-crown text-yellow-200"></i>
          <span class="hidden md:inline">Trạng Nguyên (60:00)</span>
          <span class="md:hidden">Thi 60p</span>
        </a>

        <!-- Dark/Light Mode Toggle -->
        <button id="theme-toggle" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition text-sm" title="Chuyển chế độ Sáng/Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="relative pt-12 pb-16 overflow-hidden bg-gradient-to-b from-rose-50/70 via-pink-50/30 to-transparent dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900 border-b border-slate-200/60 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-black uppercase tracking-wider mb-4 border border-rose-200 dark:border-rose-900/60">
          <i class="fa-solid fa-award text-rose-600"></i> BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG • NGỮ VĂN 9
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
          Ngữ Văn 9 – Lịch Sử Tâm Hồn &amp; Nghệ Thuật Ngôn Từ
        </h1>
        <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          Hệ thống kiến thức cốt lõi chuẩn SGK: 10 bài học toàn diện (Tập 1 &amp; Tập 2); 4 phân môn Đọc – Thực hành Tiếng Việt – Viết – Nói &amp; Nghe; 12 sơ đồ vector SVG độc quyền cùng Đấu trường Trạng nguyên 60 phút.
        </p>

        <!-- 4 Metric Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400">10</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Bài học chuẩn</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-pink-600 dark:text-pink-400">10</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Thể loại cốt lõi</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">48</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Câu hỏi bài học</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
            <div class="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">25</div>
            <div class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Câu Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- METHODOLOGY: CÁCH ĐỌC VÀ HỌC NGỮ VĂN 9 -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-850 shadow-sm border border-slate-200/80 dark:border-slate-800">
      <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <i class="fa-solid fa-graduation-cap text-rose-500"></i> Phương Pháp Đọc Hiểu &amp; Học Ngữ Văn 9 Theo Thể Loại
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Box 1 -->
        <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
          <div class="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-xs mb-3">01</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Khi đọc Truyện &amp; Kịch</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Theo dõi chuỗi sự kiện, xung đột kịch liệt, nhân vật, điểm nhìn trần thuật, chi tiết then chốt và quan hệ nhân quả.</p>
        </div>
        <!-- Box 2 -->
        <div class="p-4 rounded-2xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-200/60 dark:border-pink-900/40">
          <div class="w-8 h-8 rounded-lg bg-pink-500 text-white flex items-center justify-center font-bold text-xs mb-3">02</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Khi đọc Thơ trữ tình</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Xác định số tiếng, vần lưng/chân, ngắt nhịp, đối thanh, hình ảnh biểu tượng, biện pháp tu từ và mạch vận động cảm xúc.</p>
        </div>
        <!-- Box 3 -->
        <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs mb-3">03</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Khi đọc Nghị luận</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Xác định luận đề, hệ thống luận điểm, lí lẽ sắc sảo, bằng chứng xác thực và nghệ thuật lập luận thuyết phục.</p>
        </div>
        <!-- Box 4 -->
        <div class="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40">
          <div class="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center font-bold text-xs mb-3">04</div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Khi đọc Văn bản thông tin</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Phân biệt thông tin khách quan với nhận định chủ quan, khai thác mối liên hệ giữa chữ viết với ảnh, sơ đồ, bản đồ.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM MAP SECTION -->
  <section id="ban-do-chuong-trinh" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 scroll-mt-24">
    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-850 shadow-sm border border-slate-200/80 dark:border-slate-800">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-map-location-dot text-rose-500"></i> Bản Đồ 10 Bài Học SGK Ngữ Văn 9
        </h3>
        <span class="text-xs text-slate-500 font-medium hidden sm:inline">Bộ sách Kết nối tri thức với cuộc sống</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="border-b-2 border-slate-200 dark:border-slate-700 text-slate-400 font-bold uppercase tracking-wider">
              <th class="py-3 px-3.5">Bài</th>
              <th class="py-3 px-3.5">Tên chủ đề</th>
              <th class="py-3 px-3.5">Trang SGK</th>
              <th class="py-3 px-3.5">Trọng tâm thể loại</th>
              <th class="py-3 px-3.5">Thực hành Tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            ${programMapRows}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- TWO-COLUMN WORKSPACE LAYOUT -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <!-- LEFT SIDEBAR: STICKY NAVIGATION (4 COLS) -->
      <aside class="hidden lg:block lg:col-span-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar p-5 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 dark:border-slate-800">
          <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-bars-staggered text-rose-500"></i> Mục Lục 10 Bài Học
          </h4>
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">Tập 1 &amp; 2</span>
        </div>

        <nav class="space-y-1">
          ${sidebarHtml}
        </nav>

        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <a href="#trang-nguyen-exam" class="block w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-black shadow-sm transition text-center">
            <i class="fa-solid fa-trophy mr-1.5"></i> Đấu Trường Trạng Nguyên (60:00)
          </a>
        </div>
      </aside>

      <!-- RIGHT COLUMN: MAIN CONTENT ARTICLES (8 COLS) -->
      <main class="lg:col-span-8 space-y-12">
        ${mainContentHtml}

        <!-- TRẠNG NGUYÊN EXAM 60:00 SECTION -->
        <section id="trang-nguyen-exam" class="scroll-mt-24 pt-8 border-t-2 border-slate-200 dark:border-slate-800">
          <div class="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-500 via-rose-600 to-purple-800 text-white shadow-2xl relative overflow-hidden mb-8">
            <div class="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider mb-2">
                  <i class="fa-solid fa-crown text-yellow-300"></i> ĐẤU TRƯỜNG TRẠNG NGUYÊN NGỮ VĂN 9
                </div>
                <h3 class="text-2xl sm:text-3xl font-black mb-2">Khảo Sát Toàn Diện 25 Câu Hỏi</h3>
                <p class="text-white/90 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Đánh giá tổng hợp kiến thức cả năm học: Truyền kì kì ảo, Song thất lục bát, Truyện thơ Nôm, Bi kịch, Truyện trinh thám, Thơ hiện đại, Nghị luận xã hội, Thuyết minh di tích và Lịch sử văn học Việt Nam.
                </p>
              </div>

              <!-- Exam Countdown Timer -->
              <div class="text-center bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/20 min-w-[140px]">
                <div class="text-xs uppercase font-bold text-amber-200 mb-1">Thời gian còn lại</div>
                <div id="exam-timer" class="text-3xl sm:text-4xl font-mono font-black text-yellow-300">60:00</div>
              </div>
            </div>
          </div>

          <!-- Score Banner (Hidden initially) -->
          <div id="exam-score-banner" class="hidden mb-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border-4 border-amber-400 text-center animate-bounce-once">
            <div id="exam-score-text" class="text-4xl font-black text-rose-600 dark:text-rose-400 mb-2">0 / 25 Điểm</div>
            <p id="exam-feedback-text" class="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto"></p>
          </div>

          <!-- Exam Questions Container -->
          <div class="space-y-6" id="exam-questions-container">
            ${examQuestionsHtml}
          </div>

          <!-- Submit Button -->
          <div class="mt-8 text-center">
            <button onclick="submitExam()" class="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-black text-base shadow-lg shadow-amber-500/25 transition active:scale-95 flex items-center gap-2 mx-auto">
              <i class="fa-solid fa-paper-plane"></i> Nộp Bài Thi Trạng Nguyên
            </button>
          </div>
        </section>
      </main>
    </div>
  </div>

  <!-- FLOATING BACK-TO-TOP BUTTON -->
  <button id="back-to-top" onclick="window.scrollTo({top:0, behavior:'smooth'})" class="fixed bottom-6 right-6 z-30 hidden w-11 h-11 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 flex items-center justify-center transition active:scale-95">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // 1. DATASETS
    const LESSON_DATA = ${JSON.stringify(lessonsData)};
    const REVIEW_DATA = ${JSON.stringify(reviewMilestones)};
    const EXAM_DATA = ${JSON.stringify(examQuestions)};

    // Combine all quiz units
    const ALL_UNITS = [...LESSON_DATA, ...REVIEW_DATA];

    // 2. THEME TOGGLE (DARK / LIGHT)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElem = document.documentElement;

    function applyTheme(isDark) {
      if (isDark) {
        htmlElem.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        htmlElem.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      applyTheme(true);
    } else {
      applyTheme(false);
    }

    themeToggleBtn.addEventListener('click', () => {
      applyTheme(!htmlElem.classList.contains('dark'));
    });

    // 3. BACK TO TOP
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('back-to-top');
      if (window.scrollY > 400) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });

    // 4. UNIT QUIZ CHECKER
    function checkUnitQuiz(unitId) {
      const unit = ALL_UNITS.find(u => u.id === unitId);
      if (!unit || !unit.quiz) return;

      let score = 0;
      unit.quiz.forEach((qItem, qIdx) => {
        const radios = document.getElementsByName('quiz-' + unitId + '-' + qIdx);
        let selectedVal = null;
        for (let r of radios) {
          if (r.checked) {
            selectedVal = parseInt(r.value, 10);
            break;
          }
        }

        const fb = document.getElementById('feedback-' + unitId + '-' + qIdx);
        fb.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200', 'bg-rose-50', 'border-rose-300', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');

        if (selectedVal === qItem.answer) {
          score++;
          fb.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200');
          fb.innerHTML = '<strong class="font-bold text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong> ' + qItem.explain;
        } else {
          fb.classList.add('bg-rose-50', 'border-rose-300', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');
          fb.innerHTML = '<strong class="font-bold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa đúng!</strong> ' + qItem.explain;
        }
      });

      const summary = document.getElementById('quiz-summary-' + unitId);
      const scoreText = document.getElementById('quiz-score-text-' + unitId);
      summary.classList.remove('hidden');
      scoreText.innerHTML = 'Kết quả: ' + score + ' / ' + unit.quiz.length + ' câu đúng (' + Math.round((score/unit.quiz.length)*100) + '%)';
    }

    // 5. TRẠNG NGUYÊN EXAM TIMER & GRADER
    let examTimeSeconds = 60 * 60; // 60 minutes
    let examInterval = null;

    function startExamTimer() {
      if (examInterval) clearInterval(examInterval);
      examInterval = setInterval(() => {
        if (examTimeSeconds <= 0) {
          clearInterval(examInterval);
          alert('Hết giờ làm bài thi Trạng Nguyên! Hệ thống đang tự động chấm điểm.');
          submitExam();
          return;
        }
        examTimeSeconds--;
        const mins = Math.floor(examTimeSeconds / 60);
        const secs = examTimeSeconds % 60;
        document.getElementById('exam-timer').textContent = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }, 1000);
    }

    startExamTimer();

    function submitExam() {
      if (examInterval) clearInterval(examInterval);

      let score = 0;
      EXAM_DATA.forEach((eq, idx) => {
        const radios = document.getElementsByName('exam-q-' + idx);
        let selectedVal = null;
        for (let r of radios) {
          if (r.checked) {
            selectedVal = parseInt(r.value, 10);
            break;
          }
        }

        const exp = document.getElementById('exam-explain-' + idx);
        exp.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200', 'bg-rose-50', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');

        if (selectedVal === eq.answer) {
          score++;
          exp.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950/40', 'dark:text-emerald-200');
          exp.innerHTML = '<strong class="font-bold text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong> ' + eq.explain;
        } else {
          exp.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950/40', 'dark:text-rose-200');
          exp.innerHTML = '<strong class="font-bold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa đúng!</strong> Đáp án đúng: <em>' + eq.options[eq.answer] + '</em>. ' + eq.explain;
        }
      });

      const banner = document.getElementById('exam-score-banner');
      const scoreText = document.getElementById('exam-score-text');
      const fbText = document.getElementById('exam-feedback-text');
      banner.classList.remove('hidden');

      scoreText.textContent = score + ' / 25 Điểm';
      const pct = Math.round((score / 25) * 100);
      if (pct >= 90) {
        fbText.textContent = 'Xuất sắc! Em đạt danh hiệu Trạng Nguyên Ngữ Văn 9 với cảm thụ văn học sâu sắc và vốn tiếng Việt uyên bác!';
      } else if (pct >= 70) {
        fbText.textContent = 'Khá giỏi! Em nắm rất chắc các thể loại văn học, quy tắc tiếng Việt và phương pháp đọc hiểu.';
      } else {
        fbText.textContent = 'Em hãy rà soát lại các bài học và luyện tập thêm để hoàn thiện kiến thức Ngữ văn nhé!';
      }

      banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  </script>
</body>
</html>
`;

// Save to courses/nguvan_9.html
const outNguvan9 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_9.html';
fs.writeFileSync(outNguvan9, fullHtml, 'utf8');
console.log('Saved nguvan_9.html, size:', fullHtml.length);

// Copy to courses/literature_9.html
const outLit9 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/literature_9.html';
fs.writeFileSync(outLit9, fullHtml, 'utf8');
console.log('Saved literature_9.html, size:', fullHtml.length);
