// Update build_tienganh11.js with 4-Skills Solutions & Dual File Sync
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'build_tienganh11.js');
let content = fs.readFileSync(srcPath, 'utf8');

// 1. Add skillsSolutions11 require and helpers at top
if (!content.includes('skillsSolutions11')) {
  content = content.replace(
    "const diagrams = require(path.join(__dirname, 'tienganh11_diagrams.js'));",
    "const diagrams = require(path.join(__dirname, 'tienganh11_diagrams.js'));\nconst skillsSolutions11 = require(path.join(__dirname, 'tienganh11_skills_solutions.js'));\n\nfunction formatMd(text) {\n  if (!text) return '';\n  let s = String(text);\n  s = s.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class=\"font-bold text-slate-900 dark:text-white\">$1</strong>');\n  s = s.replace(/\\*(.*?)\\*/g, '<em class=\"italic text-slate-800 dark:text-slate-200\">$1</em>');\n  return s;\n}\n\nfunction escapeForJs(str) {\n  if (!str) return '';\n  return String(str)\n    .replace(/\\\\/g, '\\\\\\\\')\n    .replace(/'/g, \"\\\\'\")\n    .replace(/\\n/g, ' ')\n    .trim();\n}"
  );
}

// 2. Change outputPath to dual paths
content = content.replace(
  "const outputPath = path.resolve(__dirname, '../courses/tienganh_11.html');",
  "const outputPath1 = path.resolve(__dirname, '../courses/tienganh_11.html');\nconst outputPath2 = path.resolve(__dirname, '../courses/tienganh11.html');"
);

// 3. Inject skillsSolutionsHtml generator right after skillsSection
const skillsGenCode = `
  // Render Detailed 4-Skills Solutions (Reading, Speaking, Listening, Writing)
  let skillsSolutionsHtml = '';
  const sol11 = skillsSolutions11[k];
  if (sol11) {
    const rQ = sol11.reading.questions.map((q, idx) => \`
      <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2.5" id="skill-read-q-11-\${k}-\${idx}">
        <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2">
          <span class="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold mr-1.5">Q\${idx + 1}</span>
          \${escapeHtml(q.q)}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          \${q.options.map((opt, oIdx) => \`
            <button type="button" onclick="checkSkillReadingQuiz11('\${k}', \${idx}, \${oIdx}, \${q.ans})" class="skill-read-btn-11 text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-750 hover:bg-blue-50 dark:hover:bg-slate-700 transition cursor-pointer">
              \${escapeHtml(opt)}
            </button>
          \`).join('')}
        </div>
        <div id="skill-read-exp-11-\${k}-\${idx}" class="hidden p-2.5 rounded-lg text-xs leading-relaxed"></div>
      </div>
    \`).join('');

    const spkSpeechClean = escapeForJs(sol11.speaking.modelSpeech);
    const lisTapescriptClean = escapeForJs(sol11.listening.tapescript);

    const lisQ = sol11.listening.questions.map((q, idx) => \`
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2">
        <div class="font-semibold text-xs text-slate-900 dark:text-white mb-1"><strong class="text-amber-600">Câu \${idx + 1}:</strong> \${escapeHtml(q.q)}</div>
        <div class="text-xs text-emerald-700 dark:text-emerald-400 font-bold mb-1">✔ Đáp án: \${escapeHtml(q.ans)}</div>
        <div class="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2 rounded border border-slate-100 dark:border-slate-800">
          💡 <strong>Phân tích dẫn chứng:</strong> \${escapeHtml(q.explain)}
        </div>
      </div>
    \`).join('');

    const wrOutline = sol11.writing.outline.map(ol => \`<div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-1">• \${formatMd(ol)}</div>\`).join('');
    const wrVocab = sol11.writing.vocabHighlights.map(vh => \`<div class="text-xs text-indigo-700 dark:text-indigo-400">\${formatMd(vh)}</div>\`).join('');

    skillsSolutionsHtml = \`
      <!-- DETAILED 4-SKILLS SOLUTIONS ACCORDION -->
      <details class="group mb-6 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-purple-50/50 dark:from-slate-850 dark:to-indigo-950/40 overflow-hidden shadow-sm" open>
        <summary class="p-4 sm:p-5 flex items-center justify-between cursor-pointer list-none hover:bg-white/60 dark:hover:bg-slate-800/80 transition select-none border-b border-indigo-100 dark:border-indigo-900/40">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow-sm">💡</span>
            <div>
              <div class="font-black text-sm sm:text-base text-indigo-950 dark:text-indigo-200 uppercase tracking-tight">HỆ THỐNG GIẢI CHI TIẾT BÀI TẬP 4 KỸ NĂNG (READING • SPEAKING • LISTENING • WRITING)</div>
              <div class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Trọn bộ văn bản đọc hiểu, câu hỏi & dẫn chứng, bài nói mẫu có giọng đọc, tapescript nghe và bài viết mẫu 150–180 từ</div>
            </div>
          </div>
          <span class="px-3 py-1 rounded-xl text-xs font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 group-open:bg-indigo-600 group-open:text-white transition shrink-0 ml-2">
            Thu gọn ▴
          </span>
        </summary>

        <div class="p-4 sm:p-6 space-y-6">
          
          <!-- 1. READING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-indigo-100 dark:border-indigo-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                <i class="fa-solid fa-book-open text-indigo-500"></i>
                1. Reading: \${escapeHtml(sol11.reading.title)}
              </div>
              <button type="button" onclick="speakWord('\${escapeForJs(sol11.reading.passage.slice(0, 300))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold transition cursor-pointer flex items-center gap-1">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe đoạn văn
              </button>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-serif mb-4 shadow-inner">
              \${escapeHtml(sol11.reading.passage)}
            </div>
            <div class="space-y-3">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Câu hỏi đọc hiểu & Lời giải phân tích chi tiết:</div>
              \${rQ}
            </div>
          </div>

          <!-- 2. SPEAKING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-emerald-100 dark:border-emerald-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                <i class="fa-solid fa-comments text-emerald-500"></i>
                2. Speaking: \${escapeHtml(sol11.speaking.title)}
              </div>
              <button type="button" onclick="speakWord('\${spkSpeechClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe bài nói mẫu (Audio)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Nhiệm vụ:</strong> \${escapeHtml(sol11.speaking.task)}
            </div>
            <div class="p-4 rounded-xl bg-emerald-50/60 dark:bg-slate-800/80 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3">
              <div class="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1.5 flex items-center gap-1">
                <span>🎤 Bài nói mẫu chuẩn bản ngữ (Band cao):</span>
              </div>
              \${escapeHtml(sol11.speaking.modelSpeech)}
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs text-slate-700 dark:text-slate-300 mb-1">Cụm từ ghi điểm dùng trong bài nói:</div>
              <div class="space-y-1 text-xs text-emerald-700 dark:text-emerald-400">
                \${sol11.speaking.usefulPhrases.map(p => \`<div>\${formatMd(p)}</div>\`).join('')}
              </div>
            </div>
          </div>

          <!-- 3. LISTENING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-100 dark:border-amber-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                <i class="fa-solid fa-headphones text-amber-500"></i>
                3. Listening: \${escapeHtml(sol11.listening.title)}
              </div>
              <button type="button" onclick="speakWord('\${lisTapescriptClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/80 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe đoạn băng (Audio Script)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Yêu cầu bài nghe:</strong> \${escapeHtml(sol11.listening.task)}
            </div>
            <div class="p-3.5 rounded-xl bg-amber-50/50 dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono mb-3">
              <div class="font-bold text-[11px] uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1 flex items-center justify-between">
                <span>📝 TAPESCRIPT (Nội dung bản ghi âm):</span>
                <span class="text-[10px] text-slate-500">Giọng chuẩn Anh - Mỹ</span>
              </div>
              \${escapeHtml(sol11.listening.tapescript)}
            </div>
            <div class="space-y-2">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Đáp án & Phân tích bẫy nghe:</div>
              \${lisQ}
            </div>
          </div>

          <!-- 4. WRITING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-purple-100 dark:border-purple-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                <i class="fa-solid fa-pen-nib text-purple-500"></i>
                4. Writing: \${escapeHtml(sol11.writing.title)}
              </div>
              <button type="button" onclick="speakWord('\${escapeForJs(sol11.writing.modelEssay.slice(0, 350))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/80 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold transition cursor-pointer flex items-center gap-1">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe bài viết mẫu
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
              📝 <strong>Đề bài viết:</strong> \${escapeHtml(sol11.writing.prompt)}
            </div>
            <div class="mb-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">Dàn ý gợi ý (Detailed Essay Outline):</div>
              \${wrOutline}
            </div>
            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-slate-800/80 border border-purple-200 dark:border-purple-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3 font-serif">
              <div class="font-bold text-xs font-sans uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-1.5 flex items-center justify-between">
                <span>🌟 Bài viết mẫu hoàn chỉnh (150–180 từ):</span>
                <span class="text-[10px] text-slate-500 font-sans">Chuẩn cấu trúc & Ngữ pháp</span>
              </div>
              \${escapeHtml(sol11.writing.modelEssay)}
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs text-slate-700 dark:text-slate-300 mb-1">Từ vựng & Cấu trúc nâng cao trong bài viết:</div>
              <div class="space-y-0.5">
                \${wrVocab}
              </div>
            </div>
          </div>

        </div>
      </details>
    \`;
  }
`;

// Insert skillsGenCode right after skillsSection definition
const targetSkillsSection = `      </div>
    \`;
  }`;

const replacementWithGen = `      </div>
    \`;
  }

${skillsGenCode}`;

content = content.replace(targetSkillsSection, replacementWithGen);

// 4. In article template, add ${skillsSolutionsHtml} right after ${skillsSection}
content = content.replace(
  '${skillsSection}\n      ${commSection}',
  '${skillsSection}\n      ${skillsSolutionsHtml}\n      ${commSection}'
);

// 5. Add readingExplanations11 definition before fullHtml
const readingExplanationsBuildCode = `
// Build Reading Explanations Map for Grade 11
const readingExplanations11 = {};
unitKeys.forEach(k => {
  if (skillsSolutions11[k] && skillsSolutions11[k].reading) {
    readingExplanations11[k] = skillsSolutions11[k].reading.questions.map(q => q.explain);
  }
});
`;

content = content.replace('const fullHtml = `<!DOCTYPE html>', readingExplanationsBuildCode + '\nconst fullHtml = `<!DOCTYPE html>');

// 6. In client-side script, add checkSkillReadingQuiz11 right after checkQuiz function
const clientQuizCode = `
    // 4-Skills Reading Quiz Checker
    const skillReadingExplanations11 = \${JSON.stringify(readingExplanations11)};

    function checkSkillReadingQuiz11(unitKey, qIdx, optIdx, correctIdx) {
      const card = document.getElementById('skill-read-q-11-' + unitKey + '-' + qIdx);
      const expEl = document.getElementById('skill-read-exp-11-' + unitKey + '-' + qIdx);
      if (!card) return;
      const btns = card.querySelectorAll('.skill-read-btn-11');
      const isCorrect = (optIdx === correctIdx);

      btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.className = 'skill-read-btn-11 text-left text-xs p-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 font-bold';
        } else if (idx === optIdx && !isCorrect) {
          btn.className = 'skill-read-btn-11 text-left text-xs p-2 rounded-lg border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200';
        } else {
          btn.className = 'skill-read-btn-11 text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 opacity-60';
        }
      });

      if (expEl) {
        expEl.classList.remove('hidden');
        const expText = (skillReadingExplanations11[unitKey] && skillReadingExplanations11[unitKey][qIdx]) || '';
        if (isCorrect) {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-medium';
          expEl.innerHTML = '🎉 <strong>Chính xác!</strong> ' + expText;
        } else {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expEl.innerHTML = '❌ <strong>Chưa chính xác!</strong> ' + expText;
        }
      }
    }
`;

content = content.replace(
  "card.classList.remove('border-slate-200/70', 'dark:border-slate-800');",
  "card.classList.remove('border-slate-200/70', 'dark:border-slate-800');\n" + clientQuizCode
);

// 7. Update file write to both outputPath1 and outputPath2
content = content.replace(
  "fs.writeFileSync(outputPath, fullHtml, 'utf8');\nconsole.log('Successfully generated courses/tienganh_11.html!');",
  "fs.writeFileSync(outputPath1, fullHtml, 'utf8');\nfs.writeFileSync(outputPath2, fullHtml, 'utf8');\nconsole.log('Successfully generated courses/tienganh_11.html & courses/tienganh11.html!');"
);

fs.writeFileSync(srcPath, content, 'utf8');
console.log('Successfully updated scratch/build_tienganh11.js!');
