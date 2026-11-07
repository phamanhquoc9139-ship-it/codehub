const fs = require('fs');
const path = require('path');

const data = require(path.join(__dirname, 'tienganh10_data.js'));
const diagrams = require(path.join(__dirname, 'tienganh10_diagrams.js'));
const skillsSolutions10 = require(path.join(__dirname, 'tienganh10_skills_solutions.js'));

function formatMd(text) {
  if (!text) return '';
  let s = String(text);
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  s = s.replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  return s;
}

function escapeForJs(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, ' ')
    .trim();
}

const outputPath1 = path.resolve(__dirname, '../courses/tienganh_10.html');
const outputPath2 = path.resolve(__dirname, '../courses/tienganh10.html');

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
}

const unitKeys = ['1', '2', '3', 'review-1', '4', '5', 'review-2', '6', '7', '8', 'review-3', '9', '10', 'review-4'];

// Build Sidebar Navigation items
const sidebarItems = unitKeys.map(k => {
  const u = data.units[k];
  const isReview = k.startsWith('review');
  const badge = isReview ? `Review ${u.num}` : `Unit ${u.num}`;
  const badgeColor = isReview ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300';
  return `
    <a href="#unit-${k}" class="nav-item group block p-2.5 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900/60 hover:bg-blue-50/70 dark:hover:bg-blue-950/40 transition">
      <div class="flex items-center justify-between gap-1 mb-1">
        <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${badgeColor}">${badge}</span>
        <span class="text-[10px] text-slate-400 dark:text-slate-500 font-mono">SGK 10</span>
      </div>
      <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1 transition leading-snug">
        ${escapeHtml(u.title)}
      </div>
      <div class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
        ${escapeHtml(u.subtitle || '')}
      </div>
    </a>`;
}).join('\n');

// Build Main Content Units
const contentUnits = unitKeys.map(k => {
  const u = data.units[k];
  const isReview = k.startsWith('review');
  const badge = isReview ? `Review ${u.num} – Tổng Hợp Chủ Điểm` : `Unit ${u.num}`;
  const themeObj = data.themes.find(t => t.id === u.themeId) || { name: 'English 10 Global Success' };
  const svgDiagram = diagrams[k] || '';

  // Render Vocab Cards (for regular units)
  let vocabSection = '';
  if (u.vocab && u.vocab.length > 0) {
    const vocabCards = u.vocab.map(v => `
      <div class="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-blue-300 dark:hover:border-blue-700/60 transition shadow-2xs">
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <div>
            <span class="font-bold text-sm text-slate-900 dark:text-white">${escapeHtml(v.word)}</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-mono ml-1">${escapeHtml(v.ipa)}</span>
            <span class="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 ml-1">${escapeHtml(v.type || '')}</span>
          </div>
          <button onclick="speakWord('${v.word.replace(/'/g, "\\'")}')" class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 text-blue-600 dark:text-blue-400 flex items-center justify-center transition" title="Nghe phát âm">
            <i class="fa-solid fa-volume-high text-xs"></i>
          </button>
        </div>
        <div class="text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">${escapeHtml(v.meaning)}</div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400 italic">"${escapeHtml(v.eg)}"</div>
      </div>
    `).join('\n');

    vocabSection = `
      <div class="mb-6">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <i class="fa-solid fa-spell-check text-blue-500"></i> Core Vocabulary (Từ Vựng Trọng Tâm)
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${vocabCards}
        </div>
      </div>
    `;
  }

  // Render Grammar Cards (for regular units)
  let grammarSection = '';
  if (u.grammar && u.grammar.length > 0) {
    const grammarCards = u.grammar.map(g => {
      const examplesHtml = (g.examples || []).map(ex => `
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs">
          <div class="text-slate-800 dark:text-slate-200 font-medium mb-0.5 flex items-center justify-between">
            <span>${escapeHtml(ex.en)}</span>
            <button onclick="speakWord('${ex.en.replace(/'/g, "\\'")}')" class="text-blue-500 hover:text-blue-600 ml-2" title="Nghe"><i class="fa-solid fa-volume-high text-[11px]"></i></button>
          </div>
          <div class="text-slate-500 dark:text-slate-400 text-[11px] italic">${escapeHtml(ex.vi)}</div>
        </div>
      `).join('\n');

      return `
        <div class="p-4 rounded-xl border border-indigo-200/70 dark:border-indigo-900/50 bg-indigo-50/20 dark:bg-indigo-950/15 mb-3">
          <div class="font-bold text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-code text-indigo-500"></i> ${escapeHtml(g.title)}
          </div>
          <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/60 font-mono text-xs text-indigo-600 dark:text-indigo-300 font-bold mb-2 overflow-x-auto whitespace-pre-wrap">
${escapeHtml(g.formula)}
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${escapeHtml(g.desc)}</div>
          ${g.notes ? `<div class="p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-300 text-xs mb-3"><strong>Lưu ý:</strong> ${escapeHtml(g.notes)}</div>` : ''}
          <div class="space-y-2">
            ${examplesHtml}
          </div>
        </div>
      `;
    }).join('\n');

    grammarSection = `
      <div class="mb-6">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <i class="fa-solid fa-graduation-cap text-indigo-500"></i> Grammar Breakdown (Ngữ Pháp Trọng Điểm)
        </h3>
        ${grammarCards}
      </div>
    `;
  }

  // Render Review Content Summary (for review units)
  let reviewSummarySection = '';
  if (isReview && u.contentSummary) {
    reviewSummarySection = `
      <div class="mb-6 p-5 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/50">
        <div class="font-bold text-sm text-amber-900 dark:text-amber-200 uppercase mb-2 flex items-center gap-2">
          <i class="fa-solid fa-bolt text-amber-500"></i> Trọng Tâm Kiến Thức Cần Ôn Tập
        </div>
        <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line font-sans">
          ${escapeHtml(u.contentSummary.trim())}
        </div>
      </div>
    `;
  }

  // Render 4 Skills Solutions
  let skillsSolutionsHtml = '';
  const sol10 = skillsSolutions10[k];
  if (sol10) {
    const rQ = sol10.reading.questions.map((q, idx) => `
      <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2.5" id="skill-read-q-10-${k}-${idx}">
        <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2">
          <span class="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold mr-1.5">Q${idx + 1}</span>
          ${escapeHtml(q.q)}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          ${q.options.map((opt, oIdx) => `
            <button type="button" onclick="checkSkillReadingQuiz10('${k}', ${idx}, ${oIdx}, ${q.ans})" class="skill-read-btn-10 text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-750 hover:bg-blue-50 dark:hover:bg-slate-700 transition cursor-pointer">
              ${escapeHtml(opt)}
            </button>
          `).join('')}
        </div>
        <div id="skill-read-exp-10-${k}-${idx}" class="hidden p-2.5 rounded-lg text-xs leading-relaxed"></div>
      </div>
    `).join('');

    const spkSpeechClean = escapeForJs(sol10.speaking.modelSpeech);
    const lisTapescriptClean = escapeForJs(sol10.listening.tapescript);

    const lisQ = sol10.listening.questions.map((q, idx) => `
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2">
        <div class="font-semibold text-xs text-slate-900 dark:text-white mb-1"><strong class="text-amber-600">Câu ${idx + 1}:</strong> ${escapeHtml(q.q)}</div>
        <div class="text-xs text-emerald-700 dark:text-emerald-400 font-bold mb-1">✔ Đáp án: ${escapeHtml(q.ans)}</div>
        <div class="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2 rounded border border-slate-100 dark:border-slate-800">
          💡 <strong>Phân tích dẫn chứng:</strong> ${escapeHtml(q.explain)}
        </div>
      </div>
    `).join('');

    const wrOutline = sol10.writing.outline.map(ol => `<div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-1">• ${formatMd(ol)}</div>`).join('');
    const wrVocab = sol10.writing.vocabHighlights.map(vh => `<div class="text-xs text-indigo-700 dark:text-indigo-400">${formatMd(vh)}</div>`).join('');

    skillsSolutionsHtml = `
      <!-- DETAILED 4-SKILLS SOLUTIONS ACCORDION -->
      <details class="group mb-6 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-purple-50/50 dark:from-slate-850 dark:to-indigo-950/40 overflow-hidden shadow-sm" open>
        <summary class="p-4 sm:p-5 flex items-center justify-between cursor-pointer list-none hover:bg-white/60 dark:hover:bg-slate-800/80 transition select-none border-b border-indigo-100 dark:border-indigo-900/40">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow-sm">💡</span>
            <div>
              <div class="font-black text-sm sm:text-base text-indigo-950 dark:text-indigo-200 uppercase tracking-tight">HỆ THỐNG GIẢI CHI TIẾT BÀI TẬP 4 KỸ NĂNG (READING • SPEAKING • LISTENING • WRITING)</div>
              <div class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Trọn bộ văn bản đọc hiểu & câu hỏi dẫn chứng, bài nói mẫu có audio, tapescript nghe và bài viết mẫu 120–150 từ</div>
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
                1. Reading: ${escapeHtml(sol10.reading.title)}
              </div>
              <button type="button" onclick="speakWord('${escapeForJs(sol10.reading.passage.slice(0, 350))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe đoạn văn (Audio)
              </button>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-serif mb-4 shadow-inner">
              ${escapeHtml(sol10.reading.passage)}
            </div>
            <div class="space-y-3">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Câu hỏi đọc hiểu & Lời giải phân tích chi tiết:</div>
              ${rQ}
            </div>
          </div>

          <!-- 2. SPEAKING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-emerald-100 dark:border-emerald-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                <i class="fa-solid fa-comments text-emerald-500"></i>
                2. Speaking: ${escapeHtml(sol10.speaking.title)}
              </div>
              <button type="button" onclick="speakWord('${spkSpeechClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe bài nói mẫu (Audio)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Nhiệm vụ:</strong> ${escapeHtml(sol10.speaking.task)}
            </div>
            <div class="p-4 rounded-xl bg-emerald-50/60 dark:bg-slate-800/80 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3">
              <div class="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1.5 flex items-center gap-1">
                <span>🎤 Bài nói mẫu chuẩn bản ngữ (Band cao):</span>
              </div>
              ${escapeHtml(sol10.speaking.modelSpeech)}
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs text-slate-700 dark:text-slate-300 mb-1">Cụm từ ghi điểm dùng trong bài nói:</div>
              <div class="space-y-1 text-xs text-emerald-700 dark:text-emerald-400">
                ${sol10.speaking.usefulPhrases.map(p => `<div>${formatMd(p)}</div>`).join('')}
              </div>
            </div>
          </div>

          <!-- 3. LISTENING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-100 dark:border-amber-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                <i class="fa-solid fa-headphones text-amber-500"></i>
                3. Listening: ${escapeHtml(sol10.listening.title)}
              </div>
              <button type="button" onclick="speakWord('${lisTapescriptClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/80 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe đoạn băng (Audio Script)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Yêu cầu bài nghe:</strong> ${escapeHtml(sol10.listening.task)}
            </div>
            <div class="p-3.5 rounded-xl bg-amber-50/50 dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono mb-3">
              <div class="font-bold text-[11px] uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1 flex items-center justify-between">
                <span>📝 TAPESCRIPT (Nội dung bản ghi âm):</span>
                <span class="text-[10px] text-slate-500">Giọng chuẩn Anh - Mỹ</span>
              </div>
              ${escapeHtml(sol10.listening.tapescript)}
            </div>
            <div class="space-y-2">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Đáp án & Phân tích bẫy nghe:</div>
              ${lisQ}
            </div>
          </div>

          <!-- 4. WRITING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-purple-100 dark:border-purple-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                <i class="fa-solid fa-pen-nib text-purple-500"></i>
                4. Writing: ${escapeHtml(sol10.writing.title)}
              </div>
              <button type="button" onclick="speakWord('${escapeForJs(sol10.writing.modelEssay.slice(0, 350))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/80 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold transition cursor-pointer flex items-center gap-1">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe bài viết mẫu
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
              📝 <strong>Đề bài viết:</strong> ${escapeHtml(sol10.writing.prompt)}
            </div>
            <div class="mb-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">Dàn ý gợi ý (Detailed Essay Outline):</div>
              ${wrOutline}
            </div>
            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-slate-800/80 border border-purple-200 dark:border-purple-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3 font-serif">
              <div class="font-bold text-xs font-sans uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-1.5 flex items-center justify-between">
                <span>🌟 Bài viết mẫu hoàn chỉnh (120–150 từ):</span>
                <span class="text-[10px] text-slate-500 font-sans">Chuẩn cấu trúc & Ngữ pháp</span>
              </div>
              ${escapeHtml(sol10.writing.modelEssay)}
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs text-slate-700 dark:text-slate-300 mb-1">Từ vựng & Cấu trúc nâng cao trong bài viết:</div>
              <div class="space-y-0.5">
                ${wrVocab}
              </div>
            </div>
          </div>

        </div>
      </details>
    `;
  }

  // Render 4 Skills
  let skillsSection = '';
  if (u.skills) {
    skillsSection = `
      <div class="mb-6">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-emerald-500"></i> Four Skills Practice (4 Kĩ Năng Toàn Diện)
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850">
            <div class="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-book-open"></i> Reading Task
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(u.skills.reading || '')}</div>
          </div>
          <div class="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850">
            <div class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-comments"></i> Speaking Task
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(u.skills.speaking || '')}</div>
          </div>
          <div class="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850">
            <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-headphones"></i> Listening Task
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(u.skills.listening || '')}</div>
          </div>
          <div class="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850">
            <div class="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-pen-nib"></i> Writing Task
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(u.skills.writing || '')}</div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Quizzes (3 questions per unit)
  const quizzesHtml = (u.quiz || []).map((q, qIdx) => {
    const opts = (q.options || []).map((opt, optIdx) => `
      <button onclick="checkQuiz(this, '${k}', ${qIdx}, ${optIdx}, ${q.ans}, '${q.exp.replace(/'/g, "\\'")}')" 
              class="quiz-opt text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition text-xs flex items-center gap-2">
        <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0">${String.fromCharCode(65 + optIdx)}</span>
        <span class="text-slate-700 dark:text-slate-200">${escapeHtml(opt)}</span>
      </button>
    `).join('\n');

    return `
      <div class="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-2xs mb-3">
        <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2.5">
          <span class="text-blue-600 dark:text-blue-400">Câu ${qIdx + 1}:</span> ${escapeHtml(q.q)}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          ${opts}
        </div>
        <div class="quiz-feedback hidden text-xs p-2.5 rounded-lg"></div>
      </div>
    `;
  }).join('\n');

  return `
    <article id="unit-${k}" class="lesson-card scroll-mt-20 p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-8 transition">
      <!-- Unit Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${badge}</span>
            <span class="text-xs text-slate-400">• ${escapeHtml(themeObj.name)}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            ${escapeHtml(u.title)}
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            ${escapeHtml(u.subtitle || '')}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="speakWord('${u.title.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-volume-high text-blue-500"></i> Nghe Tiêu Đề
          </button>
        </div>
      </div>

      <!-- SVG Diagram Box -->
      <div class="my-5 p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-inner overflow-x-auto">
        <div class="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono border-b border-slate-800 pb-2">
          <span class="text-sky-400 font-bold uppercase"><i class="fa-solid fa-network-wired mr-1.5"></i> Concept Vector Architecture</span>
          <span>${badge} • Global Success</span>
        </div>
        <div class="w-full flex justify-center">
          ${svgDiagram}
        </div>
      </div>

      <!-- Learning Goals / Situations -->
      <div class="p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 mb-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <strong class="text-blue-600 dark:text-blue-400 block mb-1">🌟 Mục Tiêu &amp; Tình Huống Bài Học:</strong>
        ${escapeHtml(u.goals || '')}
      </div>

      <!-- Pronunciation Section -->
      ${u.pronunciation ? `
        <div class="mb-6 p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-1.5">
            <i class="fa-solid fa-waveform-lines text-amber-500"></i> Pronunciation: ${escapeHtml(u.pronunciation.focus || '')}
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300 mb-2">${escapeHtml(u.pronunciation.rule || '')}</div>
          <div class="flex flex-wrap gap-2">
            ${(u.pronunciation.examples || []).map(ex => {
              const wordStr = typeof ex === 'string' ? ex : (ex.word || '');
              const ipaStr = typeof ex === 'object' && ex.ipa ? ex.ipa : '';
              return `
                <button onclick="speakWord('${wordStr.replace(/'/g, "\\'")}')" class="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-850 border border-amber-200 dark:border-amber-800/60 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-amber-400 transition flex items-center gap-1.5 shadow-2xs">
                  <span class="font-bold">${escapeHtml(wordStr)}</span>
                  ${ipaStr ? `<span class="text-[11px] text-amber-700 dark:text-amber-400 font-mono">${escapeHtml(ipaStr)}</span>` : ''}
                  <i class="fa-solid fa-volume-high text-[10px] text-amber-500 ml-0.5"></i>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Vocabulary Grid -->
      ${vocabSection}

      <!-- Grammar Section -->
      ${grammarSection}

      <!-- Review Content Summary -->
      ${reviewSummarySection}

      <!-- 4 Skills Section -->
      ${skillsSection}

      <!-- Detailed 4-Skills Solutions Accordion -->
      ${skillsSolutionsHtml}

      <!-- Everyday English -->
      ${u.everydayEnglish ? `
        <div class="p-4 rounded-xl border border-sky-200/80 dark:border-sky-900/50 bg-sky-50/30 dark:bg-sky-950/20 mb-6">
          <div class="text-xs font-bold text-sky-700 dark:text-sky-300 uppercase mb-1 flex items-center gap-2">
            <i class="fa-solid fa-bullhorn text-sky-500"></i> Everyday English: ${escapeHtml(u.everydayEnglish.function || '')}
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300 mb-2">${escapeHtml(u.everydayEnglish.phrases || '')}</div>
          <div class="p-2.5 rounded bg-white dark:bg-slate-850 border border-sky-100 dark:border-sky-900/40 text-xs italic text-slate-600 dark:text-slate-300">
            "${escapeHtml(u.everydayEnglish.model || '')}"
          </div>
        </div>
      ` : ''}

      <!-- Project -->
      ${u.project ? `
        <div class="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850/50 mb-6">
          <div class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase mb-1 flex items-center gap-2">
            <i class="fa-solid fa-diagram-project text-blue-500"></i> Unit Project: ${escapeHtml(u.project.title || '')}
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-400 mb-1.5">${escapeHtml(u.project.desc || '')}</div>
          <div class="text-xs text-blue-600 dark:text-blue-400 font-medium">${escapeHtml(u.project.steps || '')}</div>
        </div>
      ` : ''}

      <!-- Mini-Quiz Review (3 Questions per Unit) -->
      <div class="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800">
        <div class="flex items-center justify-between gap-2 mb-3">
          <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-clipboard-question text-amber-500"></i> Review Quiz (Luyện Tập 3 Câu)
          </h3>
          <span class="text-[11px] text-slate-400">Tự động chấm điểm &amp; giải thích</span>
        </div>
        ${quizzesHtml}
      </div>
    </article>
  `;
}).join('\n');

// Build Grammar Cheatsheet Rows for Modal
const grammarTableRows = (data.grammarCheatsheet || []).map((row, idx) => `
  <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
    <td class="p-3 text-xs font-bold text-slate-900 dark:text-white">${idx + 1}. ${escapeHtml(row.topic)}</td>
    <td class="p-3 text-xs font-mono text-indigo-600 dark:text-indigo-300 font-semibold">${escapeHtml(row.structure)}</td>
    <td class="p-3 text-xs text-slate-600 dark:text-slate-300">${escapeHtml(row.usage)}</td>
    <td class="p-3 text-xs italic text-slate-500 dark:text-slate-400">${escapeHtml(row.example)}</td>
  </tr>
`).join('\n');

// Build Reading Explanations Map for Grade 10
const readingExplanations10 = {};
unitKeys.forEach(k => {
  if (skillsSolutions10[k] && skillsSolutions10[k].reading) {
    readingExplanations10[k] = skillsSolutions10[k].reading.questions.map(q => q.explain);
  }
});

const examPoolJson = JSON.stringify(data.examPool || []).replace(/</g, '\\u003c');

// Build Full HTML
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Anh 10 Global Success (Trọn Bộ 10 Units & 4 Reviews • Sơ Đồ Vector SVG & Trạng Nguyên 45:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              500: '#0284c7',
              600: '#0369a1',
              700: '#075985'
            },
            slate: {
              850: '#151f32',
              950: '#090d16'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & Font Awesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <style>
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #334155;
    }
    .nav-item.active {
      border-color: #0284c7 !important;
      background-color: rgba(2, 132, 199, 0.12) !important;
      color: #0284c7 !important;
    }
    .dark .nav-item.active {
      background-color: rgba(2, 132, 199, 0.22) !important;
      color: #38bdf8 !important;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      <!-- Left: Logo & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-graduation-cap text-base"></i>
          </div>
          <div>
            <div class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-tight flex items-center gap-1.5">
              CodeHub <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">Tiếng Anh 10</span>
            </div>
            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Global Success • 10 Units + 4 Reviews</div>
          </div>
        </a>
      </div>

      <!-- Center / Right Actions -->
      <div class="flex items-center gap-2">
        <!-- Handbook Modal Button -->
        <button onclick="openModal('handbookModal')" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 transition">
          <i class="fa-solid fa-book-bookmark text-indigo-500"></i> Sổ Tay Ngữ Pháp
        </button>

        <!-- Trạng Nguyên Exam Button -->
        <button onclick="openModal('examModal'); startExam();" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition">
          <i class="fa-solid fa-trophy"></i> Trạng Nguyên (45:00)
        </button>

        <!-- Dark Mode Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition shadow-2xs">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:block text-sm text-amber-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <div class="bg-gradient-to-b from-blue-50/80 to-transparent dark:from-blue-950/20 dark:to-transparent border-b border-slate-200/50 dark:border-slate-800/50 py-8 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3">
          <i class="fa-solid fa-award"></i> Chương Trình GDPT 2018 Chuẩn Quốc Gia
        </div>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
          Học Liệu Tiếng Anh 10 – Global Success
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Tổng hợp chuẩn hóa toàn diện 10 Units và 4 Reviews. Tích hợp mô hình trực quan pure SVG, phát âm Web Speech API, ngữ pháp 3 bước, 4 kĩ năng (Listening, Speaking, Reading, Writing) và 42 câu hỏi ôn tập.
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center min-w-[100px]">
          <div class="text-xl font-extrabold text-blue-600 dark:text-blue-400">14</div>
          <div class="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">Units &amp; Reviews</div>
        </div>
        <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center min-w-[100px]">
          <div class="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">14</div>
          <div class="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">Sơ Đồ SVG</div>
        </div>
        <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center min-w-[100px]">
          <div class="text-xl font-extrabold text-amber-500">42</div>
          <div class="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">Quiz Ôn Tập</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Container: 12-col Layout (Sidebar + Content) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Sticky Sidebar Navigation (Col 4) -->
      <aside class="lg:col-span-4 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div class="px-3 py-2 mb-2 font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span><i class="fa-solid fa-list-check mr-1.5 text-blue-500"></i> Mục Lục Bài Học</span>
          <span class="text-[10px] font-mono">14 Bài</span>
        </div>
        <nav class="space-y-1">
          ${sidebarItems}
        </nav>
      </aside>

      <!-- Main Units Area (Col 8) -->
      <section class="lg:col-span-8 space-y-2">
        ${contentUnits}
      </section>

    </div>
  </main>

  <!-- Handbook Modal -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 hidden">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <i class="fa-solid fa-book-bookmark text-sm"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Sổ Tay Ngữ Pháp &amp; Giao Tiếp Tiếng Anh 10</h3>
            <p class="text-xs text-slate-500">Tra cứu nhanh toàn bộ 21 cấu trúc ngữ pháp và 9 chức năng đàm thoại</p>
          </div>
        </div>
        <button onclick="closeModal('handbookModal')" class="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-6">
        <div>
          <h4 class="font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
            Bảng 21 Cấu Trúc Ngữ Pháp Toàn Khóa
          </h4>
          <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-100 dark:bg-slate-800/60 text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase">
                  <th class="p-3">Cấu trúc</th>
                  <th class="p-3">Công thức</th>
                  <th class="p-3">Cách dùng chính</th>
                  <th class="p-3">Ví dụ SGK</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${grammarTableRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Exam Modal: Trạng Nguyên Tiếng Anh 10 (45:00) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 hidden">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
      <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md">
            <i class="fa-solid fa-trophy text-lg"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg text-slate-900 dark:text-white">Trường Thi Đấu Trạng Nguyên Tiếng Anh 10</h3>
            <p class="text-xs text-slate-500">Đề thi tổng hợp 15 câu trắc nghiệm ngẫu nhiên • Thời gian: 45 phút</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-right">
            <div class="text-[10px] uppercase font-bold text-slate-400">Thời Gian Còn Lại</div>
            <div id="examTimer" class="font-mono text-lg font-black text-amber-600 dark:text-amber-400">45:00</div>
          </div>
          <button onclick="closeModal('examModal')" class="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div id="examContent" class="p-6 overflow-y-auto custom-scrollbar space-y-5 flex-1">
        <!-- Rendered dynamically -->
      </div>
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex items-center justify-between">
        <div id="examScoreText" class="text-xs font-semibold text-slate-600 dark:text-slate-300">
          Chưa nộp bài
        </div>
        <div class="flex items-center gap-2">
          <button onclick="resetExam()" class="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-xs font-semibold text-slate-700 dark:text-slate-200 transition">
            Làm lại đề mới
          </button>
          <button onclick="submitExam()" class="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow transition">
            Nộp Bài Chấm Điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-4 text-center text-xs text-slate-500">
    <p class="mb-1">Học Liệu Tiếng Anh 10 Global Success • Hệ thống số hóa CodeHub Platform</p>
    <p>Biên soạn theo chương trình GDPT 2018 Kết Nối Tri Thức Với Cuộc Sống</p>
  </footer>

  <!-- Script logic -->
  <script>
    // 6. Skills Reading Quiz Checker for Grade 10
    const skillReadingExplanations10 = ${JSON.stringify(readingExplanations10)};
    function checkSkillReadingQuiz10(unitId, qIdx, optIdx, correctIdx) {
      const container = document.getElementById('skill-read-q-10-' + unitId + '-' + qIdx);
      if (!container) return;
      const btns = container.querySelectorAll('.skill-read-btn-10');
      const expEl = document.getElementById('skill-read-exp-10-' + unitId + '-' + qIdx);
      const isCorrect = (optIdx === correctIdx);

      btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.className = 'skill-read-btn-10 text-left text-xs p-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 font-bold';
        } else if (idx === optIdx && !isCorrect) {
          btn.className = 'skill-read-btn-10 text-left text-xs p-2 rounded-lg border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200';
        } else {
          btn.className = 'skill-read-btn-10 text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400 opacity-60';
        }
      });

      if (expEl) {
        expEl.classList.remove('hidden');
        const expText = (skillReadingExplanations10[unitId] && skillReadingExplanations10[unitId][qIdx]) || '';
        if (isCorrect) {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expEl.innerHTML = '<span class="font-bold text-emerald-700 dark:text-emerald-300">✔ Chính xác!</span> ' + expText;
        } else {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expEl.innerHTML = '<span class="font-bold text-rose-700 dark:text-rose-300">✘ Chưa chính xác.</span> ' + expText;
        }
      }
    }

    // Web Speech API
    function speakWord(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }

    // Dark Mode Toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Modal Manager
    function openModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.remove('hidden');
    }
    function closeModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.add('hidden');
    }

    // In-Lesson Quiz Logic
    function checkQuiz(btn, unitKey, qIdx, optIdx, correctIdx, exp) {
      const card = btn.closest('.mb-3');
      const buttons = card.querySelectorAll('.quiz-opt');
      const feedback = card.querySelector('.quiz-feedback');

      buttons.forEach(function(b, idx) {
        b.disabled = true;
        b.classList.remove('border-blue-400', 'bg-blue-50/40');
        if (idx === correctIdx) {
          b.classList.add('border-emerald-500', 'bg-emerald-50/50', 'dark:bg-emerald-950/40', 'text-emerald-700', 'dark:text-emerald-300');
        } else if (idx === optIdx && optIdx !== correctIdx) {
          b.classList.add('border-rose-500', 'bg-rose-50/50', 'dark:bg-rose-950/40', 'text-rose-700', 'dark:text-rose-300');
        }
      });

      feedback.classList.remove('hidden');
      if (optIdx === correctIdx) {
        feedback.className = 'quiz-feedback text-xs p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check mr-1.5 text-emerald-500"></i><strong>Chính xác!</strong> ' + exp;
      } else {
        feedback.className = 'quiz-feedback text-xs p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-800 dark:text-rose-300';
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark mr-1.5 text-rose-500"></i><strong>Chưa chính xác:</strong> ' + exp;
      }
    }

    // Trạng Nguyên Exam Logic
    const examQuestionsPool = ${examPoolJson};
    let currentExamQuestions = [];
    let examUserAnswers = {};
    let examTimerInterval = null;
    let examSecondsLeft = 45 * 60;

    function startExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examSecondsLeft = 45 * 60;
      examUserAnswers = {};
      document.getElementById('examScoreText').innerText = 'Đang làm bài...';

      // Pick 15 random questions
      const shuffled = examQuestionsPool.slice().sort(function() { return 0.5 - Math.random(); });
      currentExamQuestions = shuffled.slice(0, 15);

      renderExamQuestions();

      examTimerInterval = setInterval(function() {
        examSecondsLeft--;
        const mins = Math.floor(examSecondsLeft / 60);
        const secs = examSecondsLeft % 60;
        document.getElementById('examTimer').innerText = 
          (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;

        if (examSecondsLeft <= 0) {
          clearInterval(examTimerInterval);
          alert('Đã hết 45 phút! Hệ thống sẽ tự động nộp bài.');
          submitExam();
        }
      }, 1000);
    }

    function renderExamQuestions() {
      const container = document.getElementById('examContent');
      let html = '';
      for (let qIdx = 0; qIdx < currentExamQuestions.length; qIdx++) {
        const q = currentExamQuestions[qIdx];
        html += '<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 mb-4">';
        html += '<div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2.5"><span class="text-blue-600 dark:text-blue-400">Câu ' + (qIdx + 1) + ':</span> ' + q.question + '</div>';
        html += '<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">';
        for (let optIdx = 0; optIdx < q.options.length; optIdx++) {
          const opt = q.options[optIdx];
          html += '<label class="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-400 cursor-pointer flex items-center gap-2 text-xs">';
          html += '<input type="radio" name="exam_q_' + qIdx + '" value="' + optIdx + '" onchange="examUserAnswers[' + qIdx + '] = ' + optIdx + '" class="text-blue-600">';
          html += '<span class="text-slate-700 dark:text-slate-300">' + opt + '</span>';
          html += '</label>';
        }
        html += '</div></div>';
      }
      container.innerHTML = html;
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;
      for (let idx = 0; idx < currentExamQuestions.length; idx++) {
        if (examUserAnswers[idx] === currentExamQuestions[idx].ans) score++;
      }
      const pct = Math.round((score / currentExamQuestions.length) * 100);
      document.getElementById('examScoreText').innerHTML = 
        '<strong>Kết quả: ' + score + '/' + currentExamQuestions.length + ' câu (' + pct + '%)</strong> - ' +
        (pct >= 80 ? '🎉 Xuất sắc! Vinh danh Trạng Nguyên Tiếng Anh 10!' : 'Cần cố gắng ôn tập thêm các bài học!');
      alert('Bạn đạt ' + score + '/' + currentExamQuestions.length + ' điểm (' + pct + '%).');
    }

    function resetExam() {
      startExam();
    }

    // Scroll Spy for Sidebar
    window.addEventListener('scroll', function() {
      const articles = document.querySelectorAll('article.lesson-card');
      const navItems = document.querySelectorAll('.nav-item');
      let currentId = '';

      articles.forEach(function(article) {
        const top = article.getBoundingClientRect().top;
        if (top <= 120) {
          currentId = article.id;
        }
      });

      navItems.forEach(function(item) {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + currentId) {
          item.classList.add('active');
        }
      });
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(outputPath1, fullHtml, 'utf8');
fs.writeFileSync(outputPath2, fullHtml, 'utf8');
console.log('Successfully generated courses/tienganh_10.html and courses/tienganh10.html!');
console.log('Output size:', fs.statSync(outputPath1).size, 'bytes');
