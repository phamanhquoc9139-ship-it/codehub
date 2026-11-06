const fs = require('fs');

let f = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/build_congnghe_7_main.js', 'utf8');

const oldFunc = `    function renderExamQuestions() {
      const container = document.getElementById('examQuestionsContainer');
      container.innerHTML = examQuestions.map((q, idx) => \`
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Câu \\\${idx + 1} / 40</span>
            <span class="text-[10px] text-gray-400">1 điểm</span>
          </div>
          <p class="font-bold text-gray-900 dark:text-white leading-snug">\\\${q.q}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            \\\${q.opts.map((opt, oIdx) => \`
              <label class="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-emerald-400 cursor-pointer flex items-center gap-2 transition">
                <input type="radio" name="exam_q_\\\${idx}" value="\\\${oIdx}" onchange="recordExamAnswer(\\\${idx}, \\\${oIdx})" class="text-emerald-600 focus:ring-emerald-500">
                <span class="text-xs text-gray-800 dark:text-gray-200">\\\${String.fromCharCode(65 + oIdx)}. \\\${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
    }`;

const newFunc = `    function renderExamQuestions() {
      var container = document.getElementById('examQuestionsContainer');
      var html = '';
      for (var idx = 0; idx < examQuestions.length; idx++) {
        var q = examQuestions[idx];
        html += '<div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2.5">';
        html += '  <div class="flex items-center justify-between">';
        html += '    <span class="font-bold text-emerald-600 dark:text-emerald-400">Câu ' + (idx + 1) + ' / 40</span>';
        html += '    <span class="text-[10px] text-gray-400">1 điểm</span>';
        html += '  </div>';
        html += '  <p class="font-bold text-gray-900 dark:text-white leading-snug">' + q.q + '</p>';
        html += '  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">';
        for (var oIdx = 0; oIdx < q.opts.length; oIdx++) {
          var opt = q.opts[oIdx];
          var letter = String.fromCharCode(65 + oIdx);
          html += '    <label class="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-emerald-400 cursor-pointer flex items-center gap-2 transition">';
          html += '      <input type="radio" name="exam_q_' + idx + '" value="' + oIdx + '" onchange="recordExamAnswer(' + idx + ', ' + oIdx + ')" class="text-emerald-600 focus:ring-emerald-500">';
          html += '      <span class="text-xs text-gray-800 dark:text-gray-200">' + letter + '. ' + opt + '</span>';
          html += '    </label>';
        }
        html += '  </div>';
        html += '</div>';
      }
      container.innerHTML = html;
    }`;

if (f.includes('function renderExamQuestions() {')) {
  const start = f.indexOf('function renderExamQuestions() {');
  const end = f.indexOf('function recordExamAnswer(qIdx, oIdx) {', start);
  f = f.substring(0, start) + newFunc + '\n\n    ' + f.substring(end);
  fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/build_congnghe_7_main.js', f, 'utf8');
  console.log('Successfully replaced renderExamQuestions with string concatenation!');
} else {
  console.log('Target function not found');
}
