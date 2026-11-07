// scratch/build_hoahoc11.js
// Trình tạo hoàn chỉnh tệp courses/hoahoc_11.html và courses/hoa_11.html

const fs = require('fs');
const path = require('path');
const data = require('./hoahoc11_data.js');
const svgs = require('./hoahoc11_svgs.js');
const rxnModels = require('./hoahoc11_reaction_models.js');

function formatInline(str) {
  if (!str) return '';
  let s = String(str);

  // Markdown bold, italic, code
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  s = s.replace(/\*(.*?)\*/g, '<em class="italic text-teal-700 dark:text-teal-300 font-medium">$1</em>');
  s = s.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-teal-100/80 dark:bg-slate-700 text-teal-800 dark:text-teal-300 font-mono text-xs font-semibold">$1</code>');

  // Mathematical and chemical arrows
  s = s.replace(/<=>|<==>/g, ' <span class="font-bold text-teal-600 dark:text-teal-400 font-sans">⇌</span> ');
  s = s.replace(/\s->\s/g, ' <span class="font-bold text-teal-600 dark:text-teal-400 font-sans">→</span> ');
  s = s.replace(/\s=>\s/g, ' <span class="font-bold text-teal-600 dark:text-teal-400 font-sans">⇒</span> ');
  s = s.replace(/\s>>\s/g, ' <span class="font-bold font-sans">≫</span> ');
  s = s.replace(/\s<<\s/g, ' <span class="font-bold font-sans">≪</span> ');

  // Symbols & kinetics
  s = s.replace(/\bDelta H\b/g, 'Δ<i>H</i>');
  s = s.replace(/\bvt = vn\b/g, '<i>v</i><sub>t</sub> = <i>v</i><sub>n</sub>');
  s = s.replace(/\bKc\b/g, '<i>K</i><sub>c</sub>');
  s = s.replace(/\bKw\b/g, '<i>K</i><sub>w</sub>');
  s = s.replace(/\bKa\b/g, '<i>K</i><sub>a</sub>');
  s = s.replace(/\bKb\b/g, '<i>K</i><sub>b</sub>');
  s = s.replace(/10\^-14/g, '10<sup>-14</sup>');
  s = s.replace(/10\^-(\d+)/g, '10<sup>-$1</sup>');

  // Common chemical subscripts
  s = s.replace(/\bCaCO3\b/g, 'CaCO<sub>3</sub>');
  s = s.replace(/\bCO2\b/g, 'CO<sub>2</sub>');
  s = s.replace(/\bH2O\b/g, 'H<sub>2</sub>O');
  s = s.replace(/\bSO2\b/g, 'SO<sub>2</sub>');
  s = s.replace(/\bSO3\b/g, 'SO<sub>3</sub>');
  s = s.replace(/\bNO2\b/g, 'NO<sub>2</sub>');
  s = s.replace(/\bN2O4\b/g, 'N<sub>2</sub>O<sub>4</sub>');
  s = s.replace(/\bNH3\b/g, 'NH<sub>3</sub>');
  s = s.replace(/\bCH4\b/g, 'CH<sub>4</sub>');
  s = s.replace(/\bC2H5OH\b/g, 'C<sub>2</sub>H<sub>5</sub>OH');
  s = s.replace(/\bCH3COOH\b/g, 'CH<sub>3</sub>COOH');
  s = s.replace(/\bH2SO4\b/g, 'H<sub>2</sub>SO<sub>4</sub>');
  s = s.replace(/\bHNO3\b/g, 'HNO<sub>3</sub>');
  s = s.replace(/\bBaSO4\b/g, 'BaSO<sub>4</sub>');
  s = s.replace(/\bNa2CO3\b/g, 'Na<sub>2</sub>CO<sub>3</sub>');
  s = s.replace(/\bNaHCO3\b/g, 'NaHCO<sub>3</sub>');
  s = s.replace(/\bNa2SO4\b/g, 'Na<sub>2</sub>SO<sub>4</sub>');
  s = s.replace(/\bK2CO3\b/g, 'K<sub>2</sub>CO<sub>3</sub>');
  s = s.replace(/\bAl\(OH\)3\b/g, 'Al(OH)<sub>3</sub>');
  s = s.replace(/\bFe\(OH\)3\b/g, 'Fe(OH)<sub>3</sub>');
  s = s.replace(/\bBa\(OH\)2\b/g, 'Ba(OH)<sub>2</sub>');
  s = s.replace(/\bCa\(OH\)2\b/g, 'Ca(OH)<sub>2</sub>');
  s = s.replace(/\bN2\b/g, 'N<sub>2</sub>');
  s = s.replace(/\bO2\b/g, 'O<sub>2</sub>');
  s = s.replace(/\bH2\b/g, 'H<sub>2</sub>');
  s = s.replace(/\bCl2\b/g, 'Cl<sub>2</sub>');
  s = s.replace(/\bBr2\b/g, 'Br<sub>2</sub>');
  s = s.replace(/\bI2\b/g, 'I<sub>2</sub>');

  // Ions
  s = s.replace(/\bAl\^3\+/g, 'Al<sup>3+</sup>');
  s = s.replace(/\bBa\^2\+/g, 'Ba<sup>2+</sup>');
  s = s.replace(/\bCa\^2\+/g, 'Ca<sup>2+</sup>');
  s = s.replace(/\bMg\^2\+/g, 'Mg<sup>2+</sup>');
  s = s.replace(/\bCu\^2\+/g, 'Cu<sup>2+</sup>');
  s = s.replace(/\bFe\^2\+/g, 'Fe<sup>2+</sup>');
  s = s.replace(/\bFe\^3\+/g, 'Fe<sup>3+</sup>');
  s = s.replace(/\bNa\+/g, 'Na<sup>+</sup>');
  s = s.replace(/\bK\+/g, 'K<sup>+</sup>');
  s = s.replace(/\bH\+/g, 'H<sup>+</sup>');
  s = s.replace(/\bOH\-/g, 'OH<sup>-</sup>');
  s = s.replace(/\bCl\-/g, 'Cl<sup>-</sup>');
  s = s.replace(/\bSO4\^2\-/g, 'SO<sub>4</sub><sup>2-</sup>');
  s = s.replace(/\bCO3\^2\-/g, 'CO<sub>3</sub><sup>2-</sup>');
  s = s.replace(/\bHCO3\-/g, 'HCO<sub>3</sub><sup>-</sup>');
  s = s.replace(/\bNH4\+/g, 'NH<sub>4</sub><sup>+</sup>');
  s = s.replace(/\bNO3\-/g, 'NO<sub>3</sub><sup>-</sup>');
  s = s.replace(/\bPO4\^3\-/g, 'PO<sub>4</sub><sup>3-</sup>');
  s = s.replace(/\bCH3COO\-/g, 'CH<sub>3</sub>COO<sup>-</sup>');

  return s;
}

function formatDesc(desc) {
  if (!desc) return '';
  if (desc.includes('\n•') || desc.includes('\n- ')) {
    const parts = desc.split('\n');
    const header = parts[0].startsWith('•') || parts[0].startsWith('-') ? '' : parts[0];
    const bulletLines = parts[0].startsWith('•') || parts[0].startsWith('-') ? parts : parts.slice(1);

    let out = header ? `<p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide mb-2.5 font-medium">${formatInline(header)}</p>` : '';
    out += `<div class="space-y-2.5 mt-2">` + bulletLines.map(line => {
      const clean = line.replace(/^[•\-]\s*/, '').trim();
      if (!clean) return '';
      return `
        <div class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
          <span class="w-2.5 h-2.5 rounded-full bg-teal-500 mt-2 shrink-0 shadow-sm"></span>
          <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${formatInline(clean)}</div>
        </div>
      `;
    }).join('') + `</div>`;
    return out;
  }
  return `<p class="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose tracking-wide">${formatInline(desc)}</p>`;
}

function buildHtml() {
  const { chapters, lessons, formulaTable, safetyRules, examQuestions } = data;

  // Build Search Index
  const searchIndex = [];
  for (let i = 1; i <= 25; i++) {
    const l = lessons[i];
    searchIndex.push({
      id: `bai-${i}`,
      badge: `Bài ${i} (Chương ${l.chapter})`,
      title: `Bài ${i}. ${l.title}`,
      subtitle: `${l.chapterTitle} • ${l.summary.slice(0, 110)}...`
    });
    (l.sections || []).forEach(sec => {
      searchIndex.push({
        id: `bai-${i}`,
        badge: `Mục • Bài ${i}`,
        title: `${sec.heading} (${l.title})`,
        subtitle: `Kiến thức trọng tâm Hóa học 11 KNTT`
      });
    });
  }
  formulaTable.forEach(f => {
    searchIndex.push({
      id: `bang-cong-thuc`,
      badge: `Công thức / Quy tắc`,
      title: `${f.topic}: ${f.rule}`,
      subtitle: f.note
    });
  });
  safetyRules.forEach(s => {
    searchIndex.push({
      id: `thi-nghiem-an-toan`,
      badge: `An toàn thí nghiệm`,
      title: s.topic,
      subtitle: s.rules[0]
    });
  });

  // Generate Lessons HTML
  let lessonsHtml = '';
  let currentChapterNum = 0;
  for (let i = 1; i <= 25; i++) {
    const l = lessons[i];
    if (l.chapter !== currentChapterNum) {
      currentChapterNum = l.chapter;
      const ch = chapters[currentChapterNum - 1];
      lessonsHtml += `
        <!-- CHƯƠNG ${currentChapterNum}: ${ch.title} -->
        <div id="chu-de-${currentChapterNum}" class="scroll-mt-24 mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white shadow-md relative overflow-hidden">
          <div class="relative z-10 space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-extrabold uppercase tracking-widest text-teal-100">
              <i class="fa-solid fa-layer-group"></i> Chương ${currentChapterNum}
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">${ch.title}</h2>
            <p class="text-teal-100 text-sm sm:text-base leading-relaxed tracking-wide opacity-95 max-w-3xl">${ch.shortTitle} — SGK Hóa học 11 bộ Kết nối tri thức với cuộc sống (Bài ${ch.lessons.join(', Bài ')}).</p>
          </div>
        </div>
      `;
    }

    // Map lesson to SVG
    let lessonSvgHtml = '';
    const svgMap = {
      1: svgs[1], // Le Chatelier
      5: svgs[2], // Haber-Bosch & Tiếp xúc
      10: svgs[3], // Phổ IR
      11: svgs[4], // 7 phương pháp tách tinh chế
      16: svgs[5], // Markovnikov & Zaitsev
      23: svgs[6], // Bản đồ chuyển hoá
      25: svgs[7]  // Thuốc thử nhận biết
    };
    if (svgMap[i]) {
      const sObj = svgMap[i];
      lessonSvgHtml = `
        <div class="my-6 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
            <div class="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
              <i class="fa-solid fa-diagram-project"></i> ${sObj.title}
            </div>
            <span class="text-[11px] text-slate-500 dark:text-slate-400 italic">Sơ đồ chuẩn SGK Hóa 11</span>
          </div>
          <div class="overflow-x-auto py-2">
            ${sObj.svg}
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
            <strong class="font-semibold text-slate-700 dark:text-slate-300">Ghi chú:</strong> ${sObj.note}
          </p>
        </div>
      `;
    }

    // Reaction mechanism model if available (Bài 1, 5, 16, 24)
    let rxnModelHtml = '';
    if (rxnModels[i]) {
      const rObj = rxnModels[i];
      rxnModelHtml = `
        <div id="mo-hinh-phan-ung-${i}" class="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-teal-50/70 via-slate-50 to-emerald-50/50 dark:from-slate-800/90 dark:via-slate-900/80 dark:to-teal-950/40 border border-teal-200/90 dark:border-teal-800/70 shadow-sm space-y-3.5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-teal-100 dark:border-teal-900/60">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center text-sm shadow-xs">
                <i class="fa-solid fa-atom"></i>
              </span>
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400">${rObj.badge}</span>
                <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">${rObj.title}</h4>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-100 text-teal-800 dark:bg-teal-900/80 dark:text-teal-200 self-start sm:self-auto flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span> Mô hình phân tử CPK
            </span>
          </div>
          <div class="overflow-x-auto py-1">
            ${rObj.svg}
          </div>
          <div class="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-teal-100 dark:border-teal-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong class="font-bold text-teal-900 dark:text-teal-300"><i class="fa-solid fa-circle-nodes mr-1 text-teal-600"></i> Cơ chế bẻ gãy & hình thành liên kết:</strong> ${rObj.note}
          </div>
        </div>
      `;
    }

    // Sections HTML
    const sectionsHtml = (l.sections || []).map((sec, secIdx) => {
      let secBody = '';
      if (sec.type === 'list') {
        secBody = `
          <div class="space-y-3.5">
            ${sec.items.map(it => `
              <div class="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-teal-50/40 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 hover:shadow-sm transition">
                <span class="w-2.5 h-2.5 rounded-full bg-teal-500 mt-2 shrink-0 shadow-sm"></span>
                <div class="space-y-1 flex-1">
                  <h5 class="font-bold text-sm sm:text-base text-teal-900 dark:text-teal-300 leading-snug">${formatInline(it.title)}</h5>
                  ${formatDesc(it.desc)}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (sec.type === 'grid') {
        secBody = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${sec.items.map(it => `
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-teal-400 dark:hover:border-teal-600 transition space-y-3">
                <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700/60">
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200">${it.badge}</span>
                </div>
                <h5 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white">${formatInline(it.title)}</h5>
                <div class="space-y-2.5">
                  ${it.points.map(pt => {
                    const trimmed = pt.trim();
                    if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
                      return `
                        <div class="my-3 p-3.5 sm:p-4 rounded-xl bg-teal-50/80 dark:bg-slate-900/60 border border-teal-200/80 dark:border-teal-800/60 text-center font-mono text-base sm:text-lg font-bold text-teal-900 dark:text-teal-200 shadow-sm overflow-x-auto">
                          ${trimmed}
                        </div>
                      `;
                    }
                    return `
                      <div class="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200">
                        <i class="fa-solid fa-circle-check text-teal-500 text-sm mt-1.5 shrink-0"></i>
                        <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${formatInline(pt)}</div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (sec.type === 'table') {
        secBody = `
          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-sm">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-teal-100/70 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 border-b border-slate-200 dark:border-slate-700">
                  ${sec.headers.map(h => `<th class="p-3.5 sm:p-4 font-bold tracking-wide">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
                ${sec.rows.map(row => `
                  <tr class="hover:bg-teal-50/50 dark:hover:bg-slate-700/40 transition">
                    ${row.map((cell, cIdx) => `
                      <td class="p-3.5 sm:p-4 leading-relaxed sm:leading-loose text-slate-700 dark:text-slate-200 tracking-wide ${cIdx === 0 ? 'font-bold text-teal-900 dark:text-teal-300' : ''}">
                        ${formatInline(cell).replace(/\n/g, '<br/>')}
                      </td>
                    `).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      return `
        <div class="space-y-4">
          <div class="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span class="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold">${secIdx + 1}</span>
            <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">${sec.heading}</h4>
          </div>
          ${secBody}
        </div>
      `;
    }).join('');

    // Lesson Quiz (3 questions)
    const quizItems = l.quiz.map((qObj, qIdx) => {
      const qId = `quiz-${i}-${qIdx}`;
      const optHtml = qObj.options.map((opt, oIdx) => `
        <label class="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-teal-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
          <input type="radio" name="${qId}" value="${oIdx}" class="mt-1 text-teal-600 focus:ring-teal-500 shrink-0">
          <span class="text-sm sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed tracking-wide">${formatInline(opt)}</span>
        </label>
      `).join('');

      return `
        <div id="qbox-${qId}" class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Câu ${qIdx + 1} / 3</span>
            <span id="badge-${qId}" class="text-xs font-semibold hidden"></span>
          </div>
          <p class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed sm:leading-loose tracking-wide">${formatInline(qObj.q)}</p>
          <div class="grid grid-cols-1 gap-2.5">${optHtml}</div>
          <div id="exp-${qId}" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 leading-relaxed sm:leading-loose tracking-wide">
            <strong>Giải thích:</strong> ${formatInline(qObj.explain)}
          </div>
        </div>
      `;
    }).join('');

    lessonsHtml += `
      <!-- BÀI ${i} -->
      <article id="bai-${i}" class="lesson-card scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-8 mb-10">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 uppercase tracking-wide">
                Chương ${l.chapter} • Bài ${i}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                ${l.badge}
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bài ${i}. ${l.title}
            </h3>
          </div>
          <button onclick="checkLessonQuiz(${i})" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition self-start sm:self-auto">
            <i class="fa-solid fa-circle-check"></i> Chấm bài kiểm tra
          </button>
        </div>

        <!-- Tóm tắt & Mục tiêu -->
        <div class="p-5 sm:p-6 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 space-y-3">
          <p class="text-sm sm:text-[15px] font-medium text-teal-950 dark:text-teal-200 leading-relaxed sm:leading-loose tracking-wide">
            <strong>Trọng tâm bài học:</strong> ${formatInline(l.summary)}
          </p>
          <div class="pt-3 border-t border-teal-100 dark:border-teal-900/40">
            <h5 class="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-2.5">Mục tiêu học tập cần đạt:</h5>
            <div class="space-y-2">
              ${l.objectives.map(obj => `
                <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <i class="fa-solid fa-check text-teal-600 dark:text-teal-400 mt-1 shrink-0"></i>
                  <span class="leading-relaxed sm:leading-loose tracking-wide flex-1">${formatInline(obj)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Sơ đồ minh hoạ nếu có -->
        ${lessonSvgHtml}

        <!-- Mô hình phản ứng hoá học phân tử nếu có -->
        ${rxnModelHtml}

        <!-- Nội dung các mục -->
        <div class="space-y-8">
          ${sectionsHtml}
        </div>

        <!-- Trắc nghiệm tự luyện 3 câu -->
        <div class="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-5">
          <div class="flex items-center justify-between">
            <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-clipboard-question text-teal-600"></i>
              3 Câu Hỏi Tự Luyện Bài ${i}
            </h4>
            <span class="text-xs text-slate-500 dark:text-slate-400">Chọn đáp án & ấn Chấm bài</span>
          </div>
          <div class="space-y-4">
            ${quizItems}
          </div>
        </div>
      </article>
    `;
  }

  // HTML Page Assembly
  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hóa Học 11 – Kết Nối Tri Thức Với Cuộc Sống | Học Liệu Đầy Đủ 6 Chương, 25 Bài</title>
  
  <!-- Tailwind CSS & FontAwesome -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- KaTeX CSS & JS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <!-- Google Fonts: Inter & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            brand: {
              50: '#f0fdfa',
              100: '#ccfbf1',
              500: '#14b8a6',
              600: '#0d9488',
              700: '#0f766e',
              800: '#115e59',
              900: '#134e4a',
            }
          }
        }
      }
    };

    // Dark mode init
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>

  <style>
    body {
      font-family: 'Inter', sans-serif;
      letter-spacing: 0.015em;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      letter-spacing: -0.01em;
    }
    .katex { font-size: 1.08em; }
    .katex-display { margin: 0.5em 0 !important; overflow-x: auto; overflow-y: hidden; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- TOP STICKY NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Back Button & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-600 transition" title="Quay lại trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 text-white flex items-center justify-center shadow-sm text-lg">
            <i class="fa-solid fa-flask"></i>
          </span>
          <div>
            <h1 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight flex items-center gap-2">
              Hóa Học 11
              <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">KNTT</span>
            </h1>
            <p class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Chương trình SGK chuẩn • 6 Chương, 25 Bài</p>
          </div>
        </div>
      </div>

      <!-- Right Controls -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Progress Counter -->
        <div class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200/60 dark:border-slate-700">
          <i class="fa-solid fa-book-open"></i>
          <span id="course-progress">25 Bài học</span>
        </div>

        <!-- Search Button (Ctrl K) -->
        <button onclick="openSearchModal()" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold transition" title="Tìm kiếm (Ctrl + K)">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span class="hidden sm:inline">Tìm kiếm...</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 rounded border border-slate-300 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <!-- Đấu trường 45 phút -->
        <button onclick="openArenaModal()" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs font-bold shadow-sm transition">
          <i class="fa-solid fa-stopwatch"></i>
          <span class="hidden sm:inline">Đấu trường 45'</span>
        </button>

        <!-- Theme Toggle -->
        <button id="theme-toggle" onclick="toggleDarkMode()" class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition" title="Chuyển chế độ sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO BANNER -->
  <section class="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl space-y-4">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <a href="../index.html" class="hover:text-teal-600">Trang chủ</a>
          <i class="fa-solid fa-chevron-right text-[10px]"></i>
          <span class="text-slate-700 dark:text-slate-300">Lớp 11</span>
          <i class="fa-solid fa-chevron-right text-[10px]"></i>
          <span class="text-teal-600 dark:text-teal-400 font-bold">Hóa học 11</span>
        </div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 text-xs font-extrabold uppercase tracking-widest">
          <i class="fa-solid fa-atom"></i> Kết nối tri thức với cuộc sống
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          HÓA HỌC 11 – HỌC LIỆU ĐẦY ĐỦ 6 CHƯƠNG, 25 BÀI
        </h2>

        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">
          Hệ thống hóa toàn bộ kiến thức SGK Hóa học 11 (158 trang): Cân bằng hóa học, Nitrogen – Sulfur, Đại cương hóa hữu cơ, Hydrocarbon, Dẫn xuất halogen – Alcohol – Phenol, Hợp chất carbonyl – Carboxylic acid; kèm bảng công thức, phổ IR/MS, quy tắc phản ứng, thí nghiệm và quy tắc an toàn.
        </p>

        <!-- Quick navigation chips -->
        <div class="flex flex-wrap items-center gap-2.5 pt-2">
          <a href="#chu-de-1" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 transition shadow-2xs">
            <i class="fa-solid fa-scale-balanced mr-1.5 text-teal-600"></i> C1. Cân bằng hoá học
          </a>
          <a href="#chu-de-2" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 transition shadow-2xs">
            <i class="fa-solid fa-flask-vial mr-1.5 text-teal-600"></i> C2. Nitrogen – Sulfur
          </a>
          <a href="#chu-de-3" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 transition shadow-2xs">
            <i class="fa-solid fa-atom mr-1.5 text-teal-600"></i> C3. Đại cương hữu cơ
          </a>
          <a href="#chu-de-4" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 transition shadow-2xs">
            <i class="fa-solid fa-fire mr-1.5 text-teal-600"></i> C4. Hydrocarbon
          </a>
          <a href="#chu-de-5" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 transition shadow-2xs">
            <i class="fa-solid fa-wine-bottle mr-1.5 text-teal-600"></i> C5. Halogen – Alcohol – Phenol
          </a>
          <a href="#chu-de-6" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 transition shadow-2xs">
            <i class="fa-solid fa-lemon mr-1.5 text-teal-600"></i> C6. Carbonyl – Acid
          </a>
          <a href="#bang-cong-thuc" class="px-3.5 py-1.5 rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-bold hover:bg-teal-200 transition">
            <i class="fa-solid fa-calculator mr-1.5"></i> Bảng công thức
          </a>
          <a href="#thi-nghiem-an-toan" class="px-3.5 py-1.5 rounded-xl bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold hover:bg-rose-200 transition">
            <i class="fa-solid fa-triangle-exclamation mr-1.5"></i> Thí nghiệm & An toàn
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN CONTAINER (Sidebar + Lessons) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <!-- LEFT SIDEBAR: Nav Sticky (3 Cols) -->
      <aside class="lg:col-span-3 sticky top-24 space-y-4">
        <!-- Sidebar Filter input -->
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div class="relative">
            <i class="fa-solid fa-filter absolute left-3 top-3 text-xs text-slate-400"></i>
            <input type="text" id="sidebar-filter-input" placeholder="Lọc bài học Hóa 11..." oninput="filterSidebarLessons(this.value)" class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500">
          </div>

          <!-- Nav Tree (6 Chương) -->
          <nav id="sidebar-nav" class="space-y-4 text-xs max-h-[calc(100vh-240px)] overflow-y-auto pr-1 custom-scrollbar">
            ${chapters.map(ch => `
              <div class="space-y-1">
                <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400 px-2 py-1">
                  <a href="#chu-de-${ch.num}" class="hover:text-teal-500 transition"><i class="fa-solid ${ch.icon} mr-1"></i> ${ch.shortTitle}</a>
                </div>
                <ul class="space-y-0.5">
                  ${ch.lessons.map(lNum => {
                    const lObj = lessons[lNum];
                    return `
                      <li>
                        <a href="#bai-${lNum}" class="sidebar-lesson-link block px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-700 dark:hover:text-teal-300 transition truncate" title="Bài ${lNum}. ${lObj.title}">
                          <span class="font-bold mr-1">${lNum}.</span> ${lObj.title}
                        </a>
                      </li>
                    `;
                  }).join('')}
                </ul>
              </div>
            `).join('')}

            <!-- Chuyên mục đặc thù -->
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
              <a href="#bang-cong-thuc" class="block px-2.5 py-1.5 rounded-lg font-bold text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-slate-800 transition">
                <i class="fa-solid fa-calculator mr-1.5"></i> Bảng công thức & Quy tắc
              </a>
              <a href="#thi-nghiem-an-toan" class="block px-2.5 py-1.5 rounded-lg font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800 transition">
                <i class="fa-solid fa-triangle-exclamation mr-1.5"></i> Thí nghiệm & An toàn
              </a>
            </div>
          </nav>
        </div>
      </aside>

      <!-- RIGHT MAIN CONTENT (9 Cols) -->
      <main class="lg:col-span-9 space-y-12">
        ${lessonsHtml}

        <!-- PHẦN: BẢNG CÔNG THỨC & QUY TẮC PHẢN ỨNG -->
        <section id="bang-cong-thuc" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-lg shadow-sm">
              <i class="fa-solid fa-calculator"></i>
            </span>
            <div>
              <h3 class="text-2xl font-black text-slate-900 dark:text-white">Bảng Công Thức Tóm Tắt & Quy Tắc Cốt Lõi</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">13 công thức, quy tắc phản ứng quan trọng toàn bộ chương trình Hóa học 11</p>
            </div>
          </div>

          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-teal-100/70 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 border-b border-slate-200 dark:border-slate-700">
                  <th class="p-3.5 sm:p-4 font-bold tracking-wide w-1/4">Chủ đề</th>
                  <th class="p-3.5 sm:p-4 font-bold tracking-wide w-2/5">Công thức / Quy tắc</th>
                  <th class="p-3.5 sm:p-4 font-bold tracking-wide">Ghi chú & Ứng dụng</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60">
                ${formulaTable.map(f => `
                  <tr class="hover:bg-teal-50/50 dark:hover:bg-slate-700/40 transition">
                    <td class="p-3.5 sm:p-4 font-bold text-teal-900 dark:text-teal-300 leading-relaxed">${formatInline(f.topic)}</td>
                    <td class="p-3.5 sm:p-4 font-mono font-semibold text-slate-900 dark:text-white leading-relaxed">${formatInline(f.rule)}</td>
                    <td class="p-3.5 sm:p-4 text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose tracking-wide">${formatInline(f.note)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- PHẦN: THÍ NGHIỆM VÀ AN TOÀN HOÁ CHẤT -->
        <section id="thi-nghiem-an-toan" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center text-lg shadow-sm">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </span>
            <div>
              <h3 class="text-2xl font-black text-slate-900 dark:text-white">Thí Nghiệm Trọng Tâm & An Toàn Hoá Chất</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Các quy tắc an toàn sống còn khi thực hành thí nghiệm và xử lí sự cố hoá chất</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${safetyRules.map(s => `
              <div class="p-5 sm:p-6 rounded-2xl bg-rose-50/30 dark:bg-slate-800/80 border border-rose-100 dark:border-slate-700/80 space-y-3.5">
                <div class="flex items-center gap-2.5 pb-2 border-b border-rose-100 dark:border-slate-700">
                  <i class="fa-solid ${s.icon} text-rose-600 text-base"></i>
                  <h4 class="font-bold text-base text-slate-900 dark:text-white">${formatInline(s.topic)}</h4>
                </div>
                <div class="space-y-2.5">
                  ${s.rules.map(r => `
                    <div class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 mt-2 shrink-0 shadow-sm"></span>
                      <div class="leading-relaxed sm:leading-loose tracking-wide flex-1">${formatInline(r)}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- SEARCH MODAL (Ctrl + K) -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-start justify-center pt-20 px-4">
    <div class="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-teal-600 text-lg"></i>
        <input type="text" id="search-input" placeholder="Tìm kiếm bài học, công thức, khái niệm, thí nghiệm Hóa 11..." oninput="handleSearch(this.value)" class="w-full text-sm sm:text-base bg-transparent text-slate-900 dark:text-white focus:outline-none">
        <button onclick="closeSearchModal()" class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div id="search-results" class="p-4 space-y-2 overflow-y-auto custom-scrollbar flex-1">
        <p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tìm kiếm nhanh bài học, khái niệm...</p>
      </div>
    </div>
  </div>

  <!-- ARENA EXAM MODAL (45 Phút) -->
  <div id="arena-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <!-- Header -->
      <div class="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-teal-50/50 dark:bg-slate-800/50">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-lg shadow-sm">
            <i class="fa-solid fa-stopwatch"></i>
          </span>
          <div>
            <h3 class="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">Đấu Trường Hóa Học 11 – 45 Phút</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Bộ đề 20 câu trắc nghiệm tổng hợp toàn diện 6 chương SGK KNTT</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div id="arena-timer" class="px-3.5 py-1.5 rounded-xl bg-teal-600 text-white font-mono font-bold text-sm shadow-sm">45:00</div>
          <button onclick="closeArenaModal()" class="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Question List Body -->
      <div id="arena-body" class="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1">
        ${examQuestions.map((q, qIdx) => `
          <div id="arena-qbox-${qIdx}" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">Câu ${qIdx + 1} / 20</span>
              <span id="arena-badge-${qIdx}" class="text-xs font-semibold hidden"></span>
            </div>
            <p class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed sm:leading-loose tracking-wide">${formatInline(q.q)}</p>
            <div class="grid grid-cols-1 gap-2">
              ${q.options.map((opt, oIdx) => `
                <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-teal-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
                  <input type="radio" name="arena-q-${qIdx}" value="${oIdx}" class="mt-1 text-teal-600 focus:ring-teal-500 shrink-0">
                  <span class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">${formatInline(opt)}</span>
                </label>
              `).join('')}
            </div>
            <div id="arena-exp-${qIdx}" class="hidden p-3.5 rounded-xl bg-white dark:bg-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 leading-relaxed">
              <strong>Giải thích:</strong> ${formatInline(q.explain)}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Footer Submit -->
      <div class="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/90">
        <div id="arena-score" class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
          Chưa nộp bài
        </div>
        <div class="flex items-center gap-3">
          <button onclick="submitArenaExam()" id="arena-submit-btn" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm shadow-sm transition">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài Thi
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Search Index
    const SEARCH_INDEX = ${JSON.stringify(searchIndex)};

    // Search logic
    function openSearchModal() {
      document.getElementById('search-modal').classList.remove('hidden');
      document.getElementById('search-input').focus();
    }
    function closeSearchModal() {
      document.getElementById('search-modal').classList.add('hidden');
    }
    function handleSearch(query) {
      const q = query.trim().toLowerCase();
      const resultsDiv = document.getElementById('search-results');
      if (!q) {
        resultsDiv.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Nhập từ khoá để tìm kiếm...</p>';
        return;
      }
      const matched = SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.badge.toLowerCase().includes(q) || 
        (item.subtitle && item.subtitle.toLowerCase().includes(q))
      ).slice(0, 15);

      if (matched.length === 0) {
        resultsDiv.innerHTML = '<p class="text-xs text-slate-400 text-center py-4">Không tìm thấy kết quả phù hợp với từ khoá.</p>';
        return;
      }

      resultsDiv.innerHTML = matched.map(m => \`
        <a href="#\${m.id}" onclick="closeSearchModal()" class="block p-3 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 transition border border-transparent hover:border-teal-200 dark:hover:border-slate-700">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">\${m.badge}</span>
          </div>
          <div class="font-bold text-sm text-slate-900 dark:text-white">\${m.title}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">\${m.subtitle || ''}</div>
        </a>
      \`).join('');
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
        closeArenaModal();
      }
    });

    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }
    function updateThemeIcon(isDark) {
      const icon = document.getElementById('theme-icon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    }
    // Sync theme icon on load
    updateThemeIcon(document.documentElement.classList.contains('dark'));

    // Sidebar lesson filtering
    function filterSidebarLessons(query) {
      const q = query.trim().toLowerCase();
      const links = document.querySelectorAll('.sidebar-lesson-link');
      links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.parentElement.style.display = text.includes(q) ? 'block' : 'none';
      });
    }

    // Lesson Quiz Checker
    const LESSONS_DATA = ${JSON.stringify(Object.fromEntries(Object.entries(lessons).map(([k, v]) => [k, v.quiz])))};

    function checkLessonQuiz(lessonNum) {
      const quizzes = LESSONS_DATA[lessonNum] || [];
      let correctCount = 0;

      quizzes.forEach((qObj, idx) => {
        const qId = \`quiz-\${lessonNum}-\${idx}\`;
        const selected = document.querySelector(\`input[name="\${qId}"]:checked\`);
        const badge = document.getElementById(\`badge-\${qId}\`);
        const exp = document.getElementById(\`exp-\${qId}\`);
        const qbox = document.getElementById(\`qbox-\${qId}\`);

        if (badge) badge.classList.remove('hidden');
        if (exp) exp.classList.remove('hidden');

        if (selected) {
          const val = parseInt(selected.value, 10);
          if (val === qObj.ans) {
            correctCount++;
            if (badge) {
              badge.textContent = 'ĐÚNG ✓';
              badge.className = 'text-xs font-bold text-emerald-600 dark:text-emerald-400';
            }
            if (qbox) qbox.className = qbox.className.replace(/border-[a-z]+-\d+/, '') + ' border-emerald-500';
          } else {
            if (badge) {
              badge.textContent = 'SAI ✗';
              badge.className = 'text-xs font-bold text-rose-600 dark:text-rose-400';
            }
            if (qbox) qbox.className = qbox.className.replace(/border-[a-z]+-\d+/, '') + ' border-rose-500';
          }
        } else {
          if (badge) {
            badge.textContent = 'CHƯA TRẢ LỜI';
            badge.className = 'text-xs font-bold text-amber-600 dark:text-amber-400';
          }
        }
      });

      alert(\`Kết quả Bài \${lessonNum}: Bạn đã trả lời đúng \${correctCount}/\${quizzes.length} câu!\`);
    }

    // ĐẤU TRƯỜNG 45 PHÚT LOGIC
    const EXAM_DATA = ${JSON.stringify(examQuestions)};
    let arenaTimerInterval = null;
    let arenaTimeLeft = 45 * 60; // 45 minutes in seconds

    function openArenaModal() {
      document.getElementById('arena-modal').classList.remove('hidden');
      if (!arenaTimerInterval) {
        startArenaTimer();
      }
    }
    function closeArenaModal() {
      document.getElementById('arena-modal').classList.add('hidden');
    }
    function startArenaTimer() {
      const timerDisplay = document.getElementById('arena-timer');
      arenaTimerInterval = setInterval(() => {
        if (arenaTimeLeft <= 0) {
          clearInterval(arenaTimerInterval);
          alert('Đã hết 45 phút thi đấu! Hệ thống tự động nộp bài.');
          submitArenaExam();
          return;
        }
        arenaTimeLeft--;
        const mins = Math.floor(arenaTimeLeft / 60).toString().padStart(2, '0');
        const secs = (arenaTimeLeft % 60).toString().padStart(2, '0');
        if (timerDisplay) timerDisplay.textContent = \`\${mins}:\${secs}\`;
      }, 1000);
    }

    function submitArenaExam() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      let score = 0;

      EXAM_DATA.forEach((qObj, idx) => {
        const selected = document.querySelector(\`input[name="arena-q-\${idx}"]:checked\`);
        const badge = document.getElementById(\`arena-badge-\${idx}\`);
        const exp = document.getElementById(\`arena-exp-\${idx}\`);
        const qbox = document.getElementById(\`arena-qbox-\${idx}\`);

        if (badge) badge.classList.remove('hidden');
        if (exp) exp.classList.remove('hidden');

        if (selected) {
          const val = parseInt(selected.value, 10);
          if (val === qObj.ans) {
            score++;
            if (badge) {
              badge.textContent = 'ĐÚNG ✓';
              badge.className = 'text-xs font-bold text-emerald-600 dark:text-emerald-400';
            }
            if (qbox) qbox.className = qbox.className.replace(/border-[a-z]+-\d+/, '') + ' border-emerald-500';
          } else {
            if (badge) {
              badge.textContent = 'SAI ✗';
              badge.className = 'text-xs font-bold text-rose-600 dark:text-rose-400';
            }
            if (qbox) qbox.className = qbox.className.replace(/border-[a-z]+-\d+/, '') + ' border-rose-500';
          }
        } else {
          if (badge) {
            badge.textContent = 'CHƯA LÀM';
            badge.className = 'text-xs font-bold text-amber-600 dark:text-amber-400';
          }
        }
      });

      const total = EXAM_DATA.length;
      const scoreOn10 = ((score / total) * 10).toFixed(1);
      const scoreDisplay = document.getElementById('arena-score');
      if (scoreDisplay) {
        scoreDisplay.innerHTML = \`<span class="text-teal-600 dark:text-teal-400">Kết quả: \${score}/\${total} câu (\${scoreOn10} / 10 điểm)</span>\`;
      }
      const submitBtn = document.getElementById('arena-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-check-double mr-1.5"></i> Đã Nộp Bài';
        submitBtn.classList.replace('from-teal-600', 'from-slate-500');
        submitBtn.classList.replace('to-emerald-600', 'to-slate-600');
      }
    }

    // KaTeX auto-rendering safely (Only $$ for display math and $ for inline math to prevent conflicting with chemical brackets [A] and states of matter (s), (g))
    function renderMathSafely() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
    document.addEventListener('DOMContentLoaded', renderMathSafely);
    window.addEventListener('load', renderMathSafely);
  </script>
</body>
</html>`;
}

console.log('Compiling courses/hoahoc_11.html & courses/hoa_11.html...');
const fullHtml = buildHtml();

const outPath1 = path.resolve(__dirname, '..', 'courses', 'hoahoc_11.html');
const outPath2 = path.resolve(__dirname, '..', 'courses', 'hoa_11.html');

fs.writeFileSync(outPath1, fullHtml, 'utf8');
console.log(`Successfully wrote ${outPath1} (${fullHtml.length} bytes)`);

fs.writeFileSync(outPath2, fullHtml, 'utf8');
console.log(`Successfully wrote ${outPath2} (${fullHtml.length} bytes)`);
