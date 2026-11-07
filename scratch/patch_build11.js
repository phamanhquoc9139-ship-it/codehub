const fs = require('fs');
let s = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_tienganh11.js', 'utf8');

const target = '    // Text-to-Speech Engine';
const addition = `    // 6. Skills Reading Quiz Checker for Grade 11
    const skillReadingExplanations11 = \${JSON.stringify(readingExplanations11)};
    function checkSkillReadingQuiz11(unitId, qIdx, optIdx, correctIdx) {
      const container = document.getElementById('skill-read-q-11-' + unitId + '-' + qIdx);
      if (!container) return;
      const btns = container.querySelectorAll('.skill-read-btn-11');
      const expEl = document.getElementById('skill-read-exp-11-' + unitId + '-' + qIdx);
      const isCorrect = (optIdx === correctIdx);

      btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.className = 'skill-read-btn-11 text-left text-xs p-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 font-bold';
        } else if (idx === optIdx && !isCorrect) {
          btn.className = 'skill-read-btn-11 text-left text-xs p-2 rounded-lg border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200';
        } else {
          btn.className = 'skill-read-btn-11 text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400 opacity-60';
        }
      });

      if (expEl) {
        expEl.classList.remove('hidden');
        const expText = (skillReadingExplanations11[unitId] && skillReadingExplanations11[unitId][qIdx]) || '';
        if (isCorrect) {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expEl.innerHTML = '<span class="font-bold text-emerald-700 dark:text-emerald-300">✔ Chính xác!</span> ' + expText;
        } else {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expEl.innerHTML = '<span class="font-bold text-rose-700 dark:text-rose-300">✘ Chưa chính xác.</span> ' + expText;
        }
      }
    }

`;

if (!s.includes('function checkSkillReadingQuiz11(')) {
  s = s.replace(target, addition + target);
  fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_tienganh11.js', s, 'utf8');
  console.log('build_tienganh11.js updated successfully!');
} else {
  console.log('Already includes checkSkillReadingQuiz11');
}
