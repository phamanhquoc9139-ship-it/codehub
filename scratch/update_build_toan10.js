// scratch/update_build_toan10.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build_toan10.js');
let code = fs.readFileSync(filePath, 'utf8');

const oldQuizBlockStart = '<!-- Lesson Mini-Quiz -->';
const oldQuizBlockEnd = '</article>';

const idxStart = code.indexOf(oldQuizBlockStart);
const idxEnd = code.indexOf(oldQuizBlockEnd, idxStart);

if (idxStart !== -1 && idxEnd !== -1) {
  const newQuizBlock = `<!-- Lesson Mini-Quiz Review (3 câu hỏi ôn tập cuối mỗi bài) -->
        \${lessonQuizzes && lessonQuizzes.length > 0 ? \`
          <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
            <div class="p-5 sm:p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
              <div class="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-blue-200/50 dark:border-blue-800/50">
                <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <i class="fa-solid fa-circle-question"></i> Câu hỏi ôn tập củng cố cuối bài (\${lessonQuizzes.length} câu)
                </h4>
                <span class="text-[11px] font-semibold text-slate-400">Chọn đáp án đúng nhất</span>
              </div>
              <div class="space-y-4">
                \${lessonQuizzes.map((qItem, qIdx) => \`
                  <div class="quiz-item p-3.5 sm:p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm">
                    <p class="font-bold text-slate-900 dark:text-white mb-2.5">
                      <span class="text-blue-600 dark:text-blue-400">Câu \${qIdx + 1}:</span> \${parseInline(qItem.q)}
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
                      \${qItem.options.map((opt, oIdx) => {
                        const optLetter = ['A', 'B', 'C', 'D'][oIdx];
                        const isCorrect = oIdx === qItem.ans;
                        const expEscaped = escapeHtml(qItem.exp).replace(/'/g, "\\\\'");
                        return \`
                          <button onclick="checkLessonQuiz(this, \${isCorrect}, '\${expEscaped}')" 
                                  class="quiz-btn text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition flex items-center gap-2">
                            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-[10px] text-slate-600 dark:text-slate-300 shrink-0">
                              \${optLetter}
                            </span>
                            <span class="font-medium text-slate-700 dark:text-slate-300">\${parseInline(opt)}</span>
                          </button>
                        \`;
                      }).join('')}
                    </div>
                    <div class="quiz-feedback hidden p-2.5 rounded-lg text-xs mt-2"></div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>
        \` : ''}
      </article>`;

  code = code.slice(0, idxStart) + newQuizBlock + code.slice(idxEnd + oldQuizBlockEnd.length);
  console.log('Successfully replaced quiz block in build_toan10.js!');
} else {
  console.log('Could not find slice markers!');
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('Saved build_toan10.js!');
