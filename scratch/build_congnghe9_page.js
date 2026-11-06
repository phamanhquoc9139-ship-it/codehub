// build_congnghe9_page.js
// Master compiler for Công nghệ 9 Định hướng nghề nghiệp (KNTT - GDPT 2018)
// Xuất ra 2 tệp: courses/congnghe_9.html và courses/technology_9.html

const fs = require('fs');
const path = require('path');

const lessons = require('./congnghe9_data.js');
const terms = require('./congnghe9_terms.js');
const diagrams = require('./congnghe9_diagrams.js');
const examQuestions = require('./congnghe9_exam.js');

console.log(`Loaded ${lessons.length} lessons, ${terms.length} terms, and ${examQuestions.length} exam questions.`);

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  if (typeof str !== 'string') return String(str);
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 1. Sidebar HTML
let sidebarLessonsHtml = lessons.map(l => `
  <a href="#${l.id}" class="lesson-nav-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-700 dark:hover:text-blue-300 transition group" data-lesson="${l.id}">
    <span class="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/60 text-gray-700 dark:text-gray-300 group-hover:text-blue-800 dark:group-hover:text-blue-200 flex items-center justify-center text-xs font-bold shrink-0">${l.num}</span>
    <span class="truncate">${escapeHtml(l.title.replace(/^Bài \d+ — /, ''))}</span>
  </a>
`).join('');

// 2. Terms HTML
let termsHtml = terms.map(tm => `
  <div class="term-card p-3.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition">
    <div class="flex items-center justify-between gap-2 mb-1.5">
      <h4 class="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
        <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs">
          <i class="fa-solid ${tm.icon}"></i>
        </span>
        ${escapeHtml(tm.term)}
      </h4>
      <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
        ${escapeHtml(tm.badge)}
      </span>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(tm.desc)}</p>
  </div>
`).join('');

// 3. Interactive Assessment Tool for Lesson 5
const assessmentToolHtml = `
  <div class="my-6 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-slate-50 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 border border-blue-200 dark:border-blue-800 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-blue-100 dark:border-blue-900/60">
      <div>
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase tracking-wider">
          <i class="fa-solid fa-calculator"></i> Công cụ tương tác dự án
        </span>
        <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white mt-1">
          Bảng Tự Đánh Giá Mức Độ Phù Hợp Nghề Nghiệp (10 Tiêu Chí SGK)
        </h3>
      </div>
      <div class="text-right">
        <div class="text-xs text-gray-500 dark:text-gray-400">Điểm số hiện tại</div>
        <div id="assessmentScoreDisplay" class="text-2xl font-black text-blue-600 dark:text-blue-400">0 / 10</div>
      </div>
    </div>

    <p class="text-xs text-gray-600 dark:text-gray-300 mb-4">
      Em hãy chọn ngành nghề kĩ thuật/công nghệ em quan tâm (ví dụ: <em>Lập trình viên, Kĩ sư ô tô, Quản trị mạng, Kĩ sư xây dựng...</em>) và tích chọn <strong>"Trùng khớp"</strong> cho mỗi tiêu chí mà bản thân em đáp ứng được:
    </p>

    <!-- Assessment Criteria Form -->
    <div class="space-y-2 text-xs sm:text-sm">
      <!-- 1-5: Năng lực -->
      <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
        <div class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-brain"></i> Nhóm Năng lực (5 tiêu chí • Tối đa 5 điểm)
        </div>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">1. Hiểu biết cơ bản về lĩnh vực kĩ thuật, công nghệ quan tâm</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onchange="calculateAssessmentScore()">
        </label>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">2. Kĩ năng chuyên môn nổi trội phù hợp với nghề</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onchange="calculateAssessmentScore()">
        </label>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">3. Khả năng làm việc độc lập và làm việc nhóm</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onchange="calculateAssessmentScore()">
        </label>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">4. Năng lực học tốt các môn liên quan (Toán, Tin, Công nghệ, Ngoại ngữ)</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onchange="calculateAssessmentScore()">
        </label>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">5. Tinh thần tự học, tự nghiên cứu và đổi mới sáng tạo</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onchange="calculateAssessmentScore()">
        </label>
      </div>

      <!-- 6-8: Sở thích -->
      <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
        <div class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-heart"></i> Nhóm Sở thích (3 tiêu chí • Tối đa 3 điểm)
        </div>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-amber-50/50 dark:hover:bg-amber-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">6. Yêu thích loại hình công việc đặc thù của nghề</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-amber-600 rounded focus:ring-amber-500" onchange="calculateAssessmentScore()">
        </label>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-amber-50/50 dark:hover:bg-amber-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">7. Yêu thích đối tượng lao động (máy móc, thiết bị, phần mềm, bản vẽ...)</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-amber-600 rounded focus:ring-amber-500" onchange="calculateAssessmentScore()">
        </label>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-amber-50/50 dark:hover:bg-amber-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">8. Yêu thích môi trường làm việc đặc trưng của nghề</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-amber-600 rounded focus:ring-amber-500" onchange="calculateAssessmentScore()">
        </label>
      </div>

      <!-- 9: Cá tính -->
      <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
        <div class="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-id-card-clip"></i> Nhóm Cá tính &amp; Phẩm chất (1 tiêu chí • Tối đa 1 điểm)
        </div>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-purple-50/50 dark:hover:bg-purple-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">9. Nét tính cách phù hợp phẩm chất nghề (kiên trì, kỉ luật, tỉ mỉ, trách nhiệm cao)</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-purple-600 rounded focus:ring-purple-500" onchange="calculateAssessmentScore()">
        </label>
      </div>

      <!-- 10: Bối cảnh gia đình -->
      <div class="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
        <div class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-house-user"></i> Bối cảnh Gia đình (1 tiêu chí • Tối đa 1 điểm)
        </div>
        
        <label class="flex items-center justify-between p-2 rounded-xl hover:bg-rose-50/50 dark:hover:bg-rose-950/30 cursor-pointer transition">
          <span class="text-gray-800 dark:text-gray-200">10. Điều kiện kinh tế gia đình hỗ trợ được thời gian và kinh phí đào tạo dự kiến</span>
          <input type="checkbox" class="assessment-checkbox w-4 h-4 text-rose-600 rounded focus:ring-rose-500" onchange="calculateAssessmentScore()">
        </label>
      </div>
    </div>

    <!-- Result Banner -->
    <div id="assessmentResultCard" class="mt-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition">
      <div class="flex items-center justify-between gap-2 mb-2">
        <strong id="assessmentResultTitle" class="text-sm font-bold text-gray-700 dark:text-gray-300">
          Chưa thực hiện đánh giá
        </strong>
        <span id="assessmentResultBadge" class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-700">0/10</span>
      </div>
      <p id="assessmentResultDesc" class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
        Hãy đánh dấu vào các ô tiêu chí ở trên để hệ thống tự động tổng hợp và xếp loại mức độ phù hợp nghề nghiệp của em.
      </p>
    </div>

    <div class="mt-4 flex items-center justify-end gap-2">
      <button type="button" onclick="resetAssessment()" class="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition">
        <i class="fa-solid fa-rotate-left mr-1"></i> Làm lại
      </button>
      <button type="button" onclick="window.print()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition">
        <i class="fa-solid fa-print mr-1"></i> In kết quả dự án
      </button>
    </div>
  </div>
`;

// 4. Map diagrams to lessons
const lessonDiagramMap = {
  'bai-2': diagrams.giaoDucPhanLuong,
  'bai-4': diagrams.hollandRIASEC + diagrams.cayNgheNghiep + diagrams.ikigai,
  'bai-5': assessmentToolHtml
};

// 5. Build Lesson Cards HTML
const letters = ['A', 'B', 'C', 'D'];
let lessonsHtml = '';

lessons.forEach((l) => {
  // Sections
  const sectionsHtml = l.sections.map((sec) => `
    <div class="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-700/80">
      <h3 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2.5 flex items-center gap-2">
        <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
          <i class="fa-solid ${sec.icon}"></i>
        </span>
        ${escapeHtml(sec.title)}
      </h3>
      <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        ${sec.content}
      </div>
    </div>
  `).join('');

  // Diagram / Widget
  const diagramHtml = lessonDiagramMap[l.id] || '';

  // Practice HTML
  const practiceHtml = Array.isArray(l.practice)
    ? `<ul class="space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        ${l.practice.map(p => `<li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0 text-xs"></i><span>${escapeHtml(p)}</span></li>`).join('')}
       </ul>`
    : `<p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.practice)}</p>`;

  // Quizzes
  const quizzesHtml = l.quiz.map((q, qIdx) => {
    const optsHtml = q.opts.map((opt, oIdx) => `
      <button type="button" onclick="checkLessonQuiz(this, '${l.id}', ${qIdx}, ${oIdx}, ${q.ans})" class="lesson-quiz-opt w-full text-left p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-gray-800 text-xs sm:text-sm text-gray-800 dark:text-gray-200 transition flex items-center justify-between group">
        <span class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-md bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 text-gray-700 dark:text-gray-300 text-xs font-bold flex items-center justify-center shrink-0">${letters[oIdx]}</span>
          <span>${escapeHtml(opt)}</span>
        </span>
        <i class="fa-regular fa-circle text-gray-400 group-hover:text-blue-500 text-xs shrink-0"></i>
      </button>
    `).join('');

    return `
      <div class="quiz-item p-3.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" data-lesson="${l.id}" data-q="${qIdx}">
        <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-2.5 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-[11px] font-bold shrink-0">Câu ${qIdx + 1}</span>
          <span>${escapeHtml(q.q)}</span>
        </p>
        <div class="space-y-1.5">
          ${optsHtml}
        </div>
        <div class="quiz-feedback hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed"></div>
        <div class="quiz-explain hidden mt-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 text-[11px] border border-gray-100 dark:border-gray-800">
          <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> <strong>Giải thích:</strong> ${escapeHtml(q.explain)}
        </div>
      </div>
    `;
  }).join('');

  lessonsHtml += `
    <article id="${l.id}" class="lesson-card bg-white dark:bg-gray-800 rounded-3xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-sm transition hover:shadow-md mb-8" data-lesson-id="${l.id}">
      <!-- Header bài học -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              CÔNG NGHỆ 9 • BÀI ${l.num}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
              <i class="fa-solid fa-compass text-blue-600"></i> Định Hướng Nghề Nghiệp
            </span>
          </div>
          <h2 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <span class="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">${l.num}</span>
            ${escapeHtml(l.title)}
          </h2>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> ${l.time}
          </span>
        </div>
      </div>

      <!-- Mục tiêu cần đạt -->
      <div class="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/40">
        <h4 class="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-bullseye text-blue-600"></i> Mục tiêu trọng tâm bài học
        </h4>
        <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.target)}</p>
      </div>

      <!-- Dẫn nhập cảm xúc -->
      <div class="mb-4 text-xs sm:text-sm italic text-gray-600 dark:text-gray-400 pl-3 border-l-2 border-blue-500">
        "${escapeHtml(l.intro)}"
      </div>

      <!-- Sơ đồ trực quan / Công cụ tương tác -->
      ${diagramHtml}

      <!-- Các mạch nội dung bài học -->
      <div class="space-y-4 mb-6">
        ${sectionsHtml}
      </div>

      <!-- Luyện tập & Vận dụng sáng tạo -->
      <div class="mb-6 p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60">
        <h4 class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-wand-magic-sparkles text-amber-600"></i> Yêu cầu Luyện tập &amp; Thực hành định hướng
        </h4>
        ${practiceHtml}
      </div>

      <!-- Tóm tắt ghi nhớ cốt lõi -->
      <div class="mb-6 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <i class="fa-solid fa-bookmark text-blue-600"></i> Ghi nhớ cốt lõi
        </h4>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(l.summary)}</p>
      </div>

      <!-- 4 Câu trắc nghiệm củng cố bài học -->
      <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-question text-blue-600"></i>
            Tự kiểm tra kiến thức bài học (4 câu trắc nghiệm)
          </h4>
          <span class="text-xs text-gray-500">Chấm điểm &amp; giải thích tức thì</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${quizzesHtml}
        </div>
      </div>
    </article>
  `;
});

// 6. Modal Trạng Nguyên Công Nghệ 9 (25 câu)
let examModalHtml = examQuestions.map((q, qIdx) => {
  const optsHtml = q.options.map((opt, oIdx) => `
    <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 cursor-pointer transition text-xs sm:text-sm text-gray-800 dark:text-gray-200">
      <input type="radio" name="exam_q_${qIdx}" value="${oIdx}" class="text-blue-600 focus:ring-blue-500 rounded">
      <span class="font-bold text-gray-500">${letters[oIdx]}.</span>
      <span>${escapeHtml(opt)}</span>
    </label>
  `).join('');

  return `
    <div class="exam-item p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4" data-q-idx="${qIdx}">
      <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-2 flex items-start gap-2">
        <span class="px-2 py-0.5 rounded-md bg-blue-600 text-white text-[11px] font-bold shrink-0">Câu ${qIdx + 1}</span>
        <span>${escapeHtml(q.q)}</span>
      </p>
      <div class="space-y-1.5 mb-2">
        ${optsHtml}
      </div>
      <div id="exam_fb_${qIdx}" class="hidden p-2.5 rounded-xl text-xs"></div>
      <div id="exam_exp_${qIdx}" class="hidden mt-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 text-[11px] border border-gray-100 dark:border-gray-800">
        <strong>Giải thích:</strong> ${escapeHtml(q.explain)}
      </div>
    </div>
  `;
}).join('');

// 7. Full Page Template
const fullPageTemplate = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Công Nghệ 9 — Định Hướng Nghề Nghiệp (SGK Kết Nối Tri Thức | GDPT 2018) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <meta name="description" content="Khóa học Công nghệ 9 Định hướng nghề nghiệp chuẩn SGK Kết nối tri thức với cuộc sống (GDPT 2018). Trọn bộ 5 bài học, sơ đồ phân luồng giáo dục, mật mã Holland RIASEC, cây nghề nghiệp, Ikigai, công cụ tự đánh giá dự án và thi Trạng Nguyên 45:00.">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#2563eb',
            'primary-dark': '#1d4ed8',
            tech: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
            }
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    code, pre {
      font-family: 'Fira Code', monospace;
    }
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
      background: #475569;
    }
    .glass-nav {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
  </style>
</head>
<body class="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen">

  <!-- Top Sticky Navigation -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 glass-nav border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left: Logo & Title -->
      <div class="flex items-center gap-3">
        <button id="toggleMobileSidebarBtn" class="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Menu">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-lg tracking-tight hover:opacity-90 transition">
          <span class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-base shadow-sm">
            <i class="fa-solid fa-compass"></i>
          </span>
          <span class="hidden sm:inline">CodeHub • Công Nghệ 9</span>
          <span class="sm:hidden">Công Nghệ 9</span>
        </a>
        <span class="hidden md:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          Định Hướng Nghề Nghiệp (KNTT)
        </span>
      </div>

      <!-- Center: Quick search -->
      <div class="hidden sm:flex items-center flex-1 max-w-xs relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3 text-gray-400 text-xs"></i>
        <input type="text" id="lessonSearchInput" placeholder="Tìm bài học, Holland, Ikigai, nghề..." class="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:outline-none transition">
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-2">
        <button onclick="openTermModal()" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200 dark:border-blue-800 flex items-center gap-1.5 transition">
          <i class="fa-solid fa-book-bookmark"></i>
          <span class="hidden md:inline">Sổ tay</span> Thuật ngữ
        </button>
        <button onclick="openExamModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden md:inline">Hội thi</span> Trạng Nguyên 9
        </button>
        <button id="themeToggleBtn" class="w-9 h-9 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition" aria-label="Toggle Dark Mode">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:block text-amber-400 text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-8">
    
    <!-- Left Sidebar (Desktop) -->
    <aside class="hidden lg:block w-72 shrink-0 sticky top-22 h-[calc(100vh-6.5rem)] overflow-y-auto sidebar-scroll pr-2">
      <div class="p-3 mb-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
        <div class="text-xs font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <i class="fa-solid fa-route"></i> Tiến trình 5 Bài học
        </div>
        <p class="text-[11px] text-gray-600 dark:text-gray-400">Từ hiểu nghề, hiểu hệ thống giáo dục đến thị trường lao động và tự đánh giá lựa chọn nghề.</p>
      </div>

      <!-- Lessons list -->
      <div id="sidebarLessonsContainer" class="space-y-1">
        ${sidebarLessonsHtml}
      </div>

      <!-- Quick Assessment banner -->
      <div class="mt-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md">
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
          <i class="fa-solid fa-clipboard-check"></i> Dự án Bài 5
        </div>
        <p class="text-xs text-blue-100 mb-3">Tự đối chiếu 10 tiêu chí và kiểm tra độ phù hợp với nghề nghiệp mơ ước.</p>
        <a href="#bai-5" class="inline-block w-full py-1.5 text-center rounded-xl bg-white text-blue-700 text-xs font-bold hover:bg-blue-50 transition shadow-sm">
          Làm bài đánh giá ngay
        </a>
      </div>
    </aside>

    <!-- Mobile Drawer Sidebar Backdrop -->
    <div id="mobileSidebarBackdrop" class="fixed inset-0 bg-black/50 z-50 hidden lg:hidden"></div>
    <!-- Mobile Drawer Sidebar -->
    <aside id="mobileSidebar" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 p-4 overflow-y-auto sidebar-scroll transform -translate-x-full transition-transform lg:hidden shadow-2xl">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
          <i class="fa-solid fa-compass"></i> Công Nghệ 9 • 5 Bài Học
        </div>
        <button id="closeMobileSidebarBtn" class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="space-y-1">
        ${sidebarLessonsHtml}
      </div>
    </aside>

    <!-- Center Main Content -->
    <main class="flex-1 min-w-0">
      
      <!-- Hero Banner -->
      <section class="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl">
          <i class="fa-solid fa-compass"></i>
        </div>
        <div class="relative z-10 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-blue-100 text-xs font-semibold mb-3 backdrop-blur-sm">
            <i class="fa-solid fa-sparkles"></i> Chương trình GDPT 2018 — Kết nối tri thức với cuộc sống
          </div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
            CÔNG NGHỆ 9 — ĐỊNH HƯỚNG NGHỀ NGHIỆP
          </h1>
          <p class="text-xs sm:text-sm text-blue-100 leading-relaxed mb-5">
            Hệ thống hóa toàn diện theo đúng <strong>5 bài học SGK</strong>: Khám phá nghề kĩ thuật, cơ cấu giáo dục quốc dân &amp; phân luồng sau THCS, thị trường lao động 4.0, mật mã Holland RIASEC, cây nghề nghiệp, triết lí Ikigai và dự án tự đánh giá mức độ phù hợp bản thân.
          </p>
          <div class="flex flex-wrap gap-2 text-xs font-semibold">
            <span class="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <i class="fa-solid fa-book-open mr-1"></i> 5 Bài học chuẩn
            </span>
            <span class="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <i class="fa-solid fa-shapes mr-1"></i> Mật mã Holland RIASEC
            </span>
            <span class="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <i class="fa-solid fa-tree mr-1"></i> Cây nghề nghiệp &amp; Ikigai
            </span>
            <span class="px-3 py-1 rounded-xl bg-amber-400 text-amber-950 font-bold shadow-sm">
              <i class="fa-solid fa-trophy mr-1"></i> 25 Câu Trạng Nguyên
            </span>
          </div>
        </div>
      </section>

      <!-- Lessons Cards -->
      <section id="lessonsContainer">
        ${lessonsHtml}
      </section>

    </main>
  </div>

  <!-- Modal Sổ tay Thuật ngữ -->
  <div id="termModal" class="fixed inset-0 z-50 bg-black/60 hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center text-sm">
            <i class="fa-solid fa-book-bookmark"></i>
          </span>
          <div>
            <h3 class="font-bold text-base text-gray-900 dark:text-white">Thuật Ngữ Trọng Tâm Hướng Nghiệp</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Các khái niệm then chốt trong chương trình Công nghệ 9</p>
          </div>
        </div>
        <button onclick="closeTermModal()" class="w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3 sidebar-scroll">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${termsHtml}
        </div>
      </div>
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 flex justify-end">
        <button onclick="closeTermModal()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition">
          Đóng Sổ Tay
        </button>
      </div>
    </div>
  </div>

  <!-- Modal Trạng Nguyên Công Nghệ 9 (25 Câu - 45 Phút) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Header with Timer -->
      <div class="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-blue-600 text-white flex items-center justify-center text-base shadow-sm">
            <i class="fa-solid fa-trophy"></i>
          </span>
          <div>
            <h3 class="font-bold text-base text-gray-900 dark:text-white">Hội Thi Trạng Nguyên Công Nghệ 9</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">25 câu trắc nghiệm tổng hợp toàn bộ 5 bài học Định hướng nghề nghiệp</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold flex items-center gap-1.5">
            <i class="fa-regular fa-clock text-amber-600"></i>
            <span id="examTimer">45:00</span>
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Questions List -->
      <div id="examQuestionsScroll" class="p-5 overflow-y-auto sidebar-scroll flex-1">
        <div class="mb-4 p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-xs text-blue-800 dark:text-blue-300">
          <i class="fa-solid fa-circle-info mr-1"></i> Em hãy chọn phương án chính xác nhất cho mỗi câu hỏi. Nhấn "Nộp bài thi" để nhận kết quả chấm điểm tự động và xem giải thích chi tiết.
        </div>
        ${examModalHtml}
      </div>

      <!-- Footer Actions -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 flex items-center justify-between">
        <div id="examScoreDisplay" class="text-xs font-bold text-gray-600 dark:text-gray-300">
          Chưa nộp bài
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="resetExam()" class="px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold transition">
            Làm lại
          </button>
          <button type="button" id="submitExamBtn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition">
            Nộp bài thi
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript logic -->
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

    // Mobile Sidebar Drawer
    const toggleMobileSidebarBtn = document.getElementById('toggleMobileSidebarBtn');
    const closeMobileSidebarBtn = document.getElementById('closeMobileSidebarBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const mobileSidebarBackdrop = document.getElementById('mobileSidebarBackdrop');

    function openMobileSidebar() {
      mobileSidebar.classList.remove('-translate-x-full');
      mobileSidebarBackdrop.classList.remove('hidden');
    }
    function closeMobileSidebar() {
      mobileSidebar.classList.add('-translate-x-full');
      mobileSidebarBackdrop.classList.add('hidden');
    }

    toggleMobileSidebarBtn?.addEventListener('click', openMobileSidebar);
    closeMobileSidebarBtn?.addEventListener('click', closeMobileSidebar);
    mobileSidebarBackdrop?.addEventListener('click', closeMobileSidebar);

    document.querySelectorAll('#mobileSidebar .lesson-nav-link').forEach(link => {
      link.addEventListener('click', closeMobileSidebar);
    });

    // Search lessons
    const lessonSearchInput = document.getElementById('lessonSearchInput');
    lessonSearchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.lesson-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });

    // Check Lesson Quiz
    function checkLessonQuiz(btn, lessonId, qIdx, chosenIdx, correctIdx) {
      const container = btn.closest('.quiz-item');
      if (container.getAttribute('data-answered') === 'true') return;
      container.setAttribute('data-answered', 'true');

      const allBtns = container.querySelectorAll('.lesson-quiz-opt');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.add('opacity-60', 'cursor-not-allowed');
      });

      const feedback = container.querySelector('.quiz-feedback');
      const explain = container.querySelector('.quiz-explain');

      if (chosenIdx === correctIdx) {
        btn.classList.remove('opacity-60', 'bg-white', 'dark:bg-gray-800');
        btn.classList.add('bg-blue-100', 'dark:bg-blue-950/60', 'border-blue-500', 'text-blue-900', 'dark:text-blue-200', 'font-bold');
        feedback.innerHTML = '<span class="text-blue-700 dark:text-blue-300 font-bold"><i class="fa-solid fa-circle-check"></i> Rất chính xác! Em đã nắm vững kiến thức định hướng nghề.</span>';
        feedback.className = 'quiz-feedback mt-2.5 p-2.5 rounded-xl text-xs bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800';
      } else {
        btn.classList.remove('opacity-60', 'bg-white', 'dark:bg-gray-800');
        btn.classList.add('bg-rose-100', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200', 'font-bold');
        const correctBtn = allBtns[correctIdx];
        if (correctBtn) {
          correctBtn.classList.add('border-blue-500', 'bg-blue-50', 'dark:bg-blue-950/30', 'font-bold');
        }
        feedback.innerHTML = '<span class="text-rose-700 dark:text-rose-300 font-bold"><i class="fa-solid fa-circle-xmark"></i> Chưa đúng! Phương án đúng được viền xanh dương.</span>';
        feedback.className = 'quiz-feedback mt-2.5 p-2.5 rounded-xl text-xs bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800';
      }

      feedback.classList.remove('hidden');
      explain.classList.remove('hidden');
    }

    // Modal Sổ tay
    const termModal = document.getElementById('termModal');
    function openTermModal() {
      termModal.classList.remove('hidden');
    }
    function closeTermModal() {
      termModal.classList.add('hidden');
    }

    // Interactive Assessment Tool Logic
    function calculateAssessmentScore() {
      const checkboxes = document.querySelectorAll('.assessment-checkbox');
      let score = 0;
      checkboxes.forEach(cb => {
        if (cb.checked) score++;
      });

      document.getElementById('assessmentScoreDisplay').textContent = score + ' / 10';

      const titleEl = document.getElementById('assessmentResultTitle');
      const badgeEl = document.getElementById('assessmentResultBadge');
      const descEl = document.getElementById('assessmentResultDesc');
      const cardEl = document.getElementById('assessmentResultCard');

      badgeEl.textContent = score + ' / 10 điểm';

      if (score >= 7) {
        titleEl.textContent = 'XẾP LOẠI: PHÙ HỢP HOÀN TOÀN 🎉';
        titleEl.className = 'text-sm font-black text-emerald-700 dark:text-emerald-400';
        badgeEl.className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
        descEl.innerHTML = 'Chúc mừng em! Ngành nghề này rất trùng khớp với năng lực, sở thích, tính cách và hoàn cảnh gia đình em. Hãy kiên định xây dựng kế hoạch ôn tập các môn liên quan và rèn luyện kĩ năng để theo đuổi ước mơ.';
        cardEl.className = 'mt-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 transition';
      } else if (score >= 4) {
        titleEl.textContent = 'XẾP LOẠI: PHÙ HỢP MỘT PHẦN ⚡';
        titleEl.className = 'text-sm font-black text-amber-700 dark:text-amber-400';
        badgeEl.className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
        descEl.innerHTML = 'Em có tiềm năng nhưng còn một số tiêu chí chưa đáp ứng (như môn học còn yếu hoặc chưa rèn được tính kiên trì). Hãy rà soát lại các mục chưa tích để chủ động bồi dưỡng thêm kiến thức và kĩ năng.';
        cardEl.className = 'mt-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 transition';
      } else {
        titleEl.textContent = 'XẾP LOẠI: CHƯA PHÙ HỢP 💡';
        titleEl.className = 'text-sm font-black text-rose-700 dark:text-rose-400';
        badgeEl.className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300';
        descEl.innerHTML = 'Ngành nghề này hiện chưa thực sự phù hợp với sở trường, năng lực hoặc hoàn cảnh của em. Đừng nản lòng! Hãy dùng lí thuyết Mật mã Holland và Ikigai để khám phá các nhóm ngành khác phù hợp hơn.';
        cardEl.className = 'mt-4 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 transition';
      }
    }

    function resetAssessment() {
      document.querySelectorAll('.assessment-checkbox').forEach(cb => cb.checked = false);
      calculateAssessmentScore();
      document.getElementById('assessmentResultTitle').textContent = 'Chưa thực hiện đánh giá';
      document.getElementById('assessmentResultTitle').className = 'text-sm font-bold text-gray-700 dark:text-gray-300';
      document.getElementById('assessmentResultBadge').className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-700';
      document.getElementById('assessmentResultDesc').textContent = 'Hãy đánh dấu vào các ô tiêu chí ở trên để hệ thống tự động tổng hợp và xếp loại mức độ phù hợp nghề nghiệp của em.';
      document.getElementById('assessmentResultCard').className = 'mt-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition';
    }

    // Modal Trạng Nguyên Công Nghệ 9
    const examModal = document.getElementById('examModal');
    const examAnswers = ${JSON.stringify(examQuestions.map(q => q.correct))};
    let examTimerInterval = null;
    let examTimeLeft = 2700; // 45 mins

    function openExamModal() {
      examModal.classList.remove('hidden');
      if (!examTimerInterval) {
        startExamTimer();
      }
    }
    function closeExamModal() {
      examModal.classList.add('hidden');
    }

    function startExamTimer() {
      const timerDisplay = document.getElementById('examTimer');
      examTimerInterval = setInterval(() => {
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
          return;
        }
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        timerDisplay.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }, 1000);
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      const letters = ['A', 'B', 'C', 'D'];

      for (let i = 0; i < examAnswers.length; i++) {
        const checked = document.querySelector('input[name="exam_q_' + i + '"]:checked');
        const fb = document.getElementById('exam_fb_' + i);
        const exp = document.getElementById('exam_exp_' + i);
        fb.classList.remove('hidden');
        exp.classList.remove('hidden');

        if (!checked) {
          fb.className = 'p-2 rounded-xl text-xs bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800';
          fb.innerHTML = '⚠️ Em chưa chọn đáp án. Đáp án đúng là <strong>' + letters[examAnswers[i]] + '</strong>';
        } else if (parseInt(checked.value) === examAnswers[i]) {
          score++;
          fb.className = 'p-2 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
          fb.innerHTML = '✅ Chính xác!';
        } else {
          fb.className = 'p-2 rounded-xl text-xs bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
          fb.innerHTML = '❌ Chưa đúng. Đáp án đúng là <strong>' + letters[examAnswers[i]] + '</strong>';
        }
      }

      const submitBtn = document.getElementById('submitExamBtn');
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

      const scoreDisplay = document.getElementById('examScoreDisplay');
      let rank = 'Cần ôn luyện thêm';
      if (score >= 23) rank = 'Trạng Nguyên Hướng Nghiệp 🏆';
      else if (score >= 19) rank = 'Bảng Nhãn Hướng Nghiệp 🥇';
      else if (score >= 15) rank = 'Thám Hoa Hướng Nghiệp 🥈';

      scoreDisplay.innerHTML = '<span class="text-blue-600 dark:text-blue-400 font-extrabold text-sm sm:text-base">Kết quả: ' + score + '/' + examAnswers.length + ' câu (' + (score * 10 / examAnswers.length).toFixed(1) + 'đ) • ' + rank + '</span>';
      document.getElementById('examQuestionsScroll').scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetExam() {
      clearInterval(examTimerInterval);
      examTimerInterval = null;
      examTimeLeft = 2700;
      document.getElementById('examTimer').textContent = '45:00';
      document.querySelectorAll('#examModal input[type="radio"]').forEach(r => r.checked = false);
      for (let i = 0; i < examAnswers.length; i++) {
        const fb = document.getElementById('exam_fb_' + i);
        const exp = document.getElementById('exam_exp_' + i);
        fb?.classList.add('hidden');
        exp?.classList.add('hidden');
      }
      const submitBtn = document.getElementById('submitExamBtn');
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      document.getElementById('examScoreDisplay').textContent = 'Chưa nộp bài';
      startExamTimer();
    }
  </script>
</body>
</html>
`;

// Output files
const courseDir = path.resolve(__dirname, '../courses');
const congnghe9Path = path.join(courseDir, 'congnghe_9.html');
const technology9Path = path.join(courseDir, 'technology_9.html');

fs.writeFileSync(congnghe9Path, fullPageTemplate, 'utf8');
console.log(`Saved: ${congnghe9Path} (${fullPageTemplate.length} bytes)`);

fs.writeFileSync(technology9Path, fullPageTemplate, 'utf8');
console.log(`Saved: ${technology9Path} (${fullPageTemplate.length} bytes)`);
