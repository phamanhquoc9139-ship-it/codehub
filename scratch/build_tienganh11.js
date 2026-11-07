const fs = require('fs');
const path = require('path');

const data = require(path.join(__dirname, 'tienganh11_data.js'));
const diagrams = require(path.join(__dirname, 'tienganh11_diagrams.js'));
const skillsSolutions11 = require(path.join(__dirname, 'tienganh11_skills_solutions.js'));

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

const outputPath1 = path.resolve(__dirname, '../courses/tienganh_11.html');
const outputPath2 = path.resolve(__dirname, '../courses/tienganh11.html');

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
        <span class="text-[10px] text-slate-400 dark:text-slate-500 font-mono">SGK tr.${u.pages}</span>
      </div>
      <div class="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1 transition">
        ${escapeHtml(u.title)}
      </div>
      <div class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
        ${escapeHtml(u.subtitle)}
      </div>
    </a>`;
}).join('\n');

// Build Main Content Units
const contentUnits = unitKeys.map(k => {
  const u = data.units[k];
  const isReview = k.startsWith('review');
  const badge = isReview ? `Review ${u.num} – Tổng Hợp Chủ Điểm` : `Unit ${u.num}`;
  const themeObj = data.themes.find(t => t.id === u.themeId) || { name: 'English 11 Global Success' };
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
          <button type="button" onclick="speakWord('${v.word.replace(/'/g, "\\'")}')" class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 text-blue-600 dark:text-blue-400 flex items-center justify-center transition cursor-pointer" title="Nghe phát âm">
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


  // Render Detailed 4-Skills Solutions (Reading, Speaking, Listening, Writing)
  let skillsSolutionsHtml = '';
  const sol11 = skillsSolutions11[k];
  if (sol11) {
    const rQ = sol11.reading.questions.map((q, idx) => `
      <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2.5" id="skill-read-q-11-${k}-${idx}">
        <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2">
          <span class="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold mr-1.5">Q${idx + 1}</span>
          ${escapeHtml(q.q)}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          ${q.options.map((opt, oIdx) => `
            <button type="button" onclick="checkSkillReadingQuiz11('${k}', ${idx}, ${oIdx}, ${q.ans})" class="skill-read-btn-11 text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-750 hover:bg-blue-50 dark:hover:bg-slate-700 transition cursor-pointer">
              ${escapeHtml(opt)}
            </button>
          `).join('')}
        </div>
        <div id="skill-read-exp-11-${k}-${idx}" class="hidden p-2.5 rounded-lg text-xs leading-relaxed"></div>
      </div>
    `).join('');

    const spkSpeechClean = escapeForJs(sol11.speaking.modelSpeech);
    const lisTapescriptClean = escapeForJs(sol11.listening.tapescript);

    const lisQ = sol11.listening.questions.map((q, idx) => `
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2">
        <div class="font-semibold text-xs text-slate-900 dark:text-white mb-1"><strong class="text-amber-600">Câu ${idx + 1}:</strong> ${escapeHtml(q.q)}</div>
        <div class="text-xs text-emerald-700 dark:text-emerald-400 font-bold mb-1">✔ Đáp án: ${escapeHtml(q.ans)}</div>
        <div class="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2 rounded border border-slate-100 dark:border-slate-800">
          💡 <strong>Phân tích dẫn chứng:</strong> ${escapeHtml(q.explain)}
        </div>
      </div>
    `).join('');

    const wrOutline = sol11.writing.outline.map(ol => `<div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-1">• ${formatMd(ol)}</div>`).join('');
    const wrVocab = sol11.writing.vocabHighlights.map(vh => `<div class="text-xs text-indigo-700 dark:text-indigo-400">${formatMd(vh)}</div>`).join('');

    skillsSolutionsHtml = `
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
                1. Reading: ${escapeHtml(sol11.reading.title)}
              </div>
              <button type="button" onclick="speakWord('${escapeForJs(sol11.reading.passage.slice(0, 300))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold transition cursor-pointer flex items-center gap-1">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe đoạn văn
              </button>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-serif mb-4 shadow-inner">
              ${escapeHtml(sol11.reading.passage)}
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
                2. Speaking: ${escapeHtml(sol11.speaking.title)}
              </div>
              <button type="button" onclick="speakWord('${spkSpeechClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe bài nói mẫu (Audio)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Nhiệm vụ:</strong> ${escapeHtml(sol11.speaking.task)}
            </div>
            <div class="p-4 rounded-xl bg-emerald-50/60 dark:bg-slate-800/80 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3">
              <div class="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1.5 flex items-center gap-1">
                <span>🎤 Bài nói mẫu chuẩn bản ngữ (Band cao):</span>
              </div>
              ${escapeHtml(sol11.speaking.modelSpeech)}
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs text-slate-700 dark:text-slate-300 mb-1">Cụm từ ghi điểm dùng trong bài nói:</div>
              <div class="space-y-1 text-xs text-emerald-700 dark:text-emerald-400">
                ${sol11.speaking.usefulPhrases.map(p => `<div>${formatMd(p)}</div>`).join('')}
              </div>
            </div>
          </div>

          <!-- 3. LISTENING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-100 dark:border-amber-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                <i class="fa-solid fa-headphones text-amber-500"></i>
                3. Listening: ${escapeHtml(sol11.listening.title)}
              </div>
              <button type="button" onclick="speakWord('${lisTapescriptClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/80 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe đoạn băng (Audio Script)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Yêu cầu bài nghe:</strong> ${escapeHtml(sol11.listening.task)}
            </div>
            <div class="p-3.5 rounded-xl bg-amber-50/50 dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono mb-3">
              <div class="font-bold text-[11px] uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1 flex items-center justify-between">
                <span>📝 TAPESCRIPT (Nội dung bản ghi âm):</span>
                <span class="text-[10px] text-slate-500">Giọng chuẩn Anh - Mỹ</span>
              </div>
              ${escapeHtml(sol11.listening.tapescript)}
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
                4. Writing: ${escapeHtml(sol11.writing.title)}
              </div>
              <button type="button" onclick="speakWord('${escapeForJs(sol11.writing.modelEssay.slice(0, 350))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/80 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold transition cursor-pointer flex items-center gap-1">
                <i class="fa-solid fa-volume-high text-xs"></i> Nghe bài viết mẫu
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
              📝 <strong>Đề bài viết:</strong> ${escapeHtml(sol11.writing.prompt)}
            </div>
            <div class="mb-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">Dàn ý gợi ý (Detailed Essay Outline):</div>
              ${wrOutline}
            </div>
            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-slate-800/80 border border-purple-200 dark:border-purple-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3 font-serif">
              <div class="font-bold text-xs font-sans uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-1.5 flex items-center justify-between">
                <span>🌟 Bài viết mẫu hoàn chỉnh (150–180 từ):</span>
                <span class="text-[10px] text-slate-500 font-sans">Chuẩn cấu trúc & Ngữ pháp</span>
              </div>
              ${escapeHtml(sol11.writing.modelEssay)}
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


  // Render Grammar Cards (for regular units)
  let grammarSection = '';
  if (u.grammar && u.grammar.length > 0) {
    const grammarCards = u.grammar.map(g => {
      const examplesHtml = (g.examples || []).map(ex => `
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs">
          <div class="text-slate-800 dark:text-slate-200 font-medium mb-0.5 flex items-center justify-between">
            <span>${escapeHtml(ex.en)}</span>
            <button type="button" onclick="speakWord('${ex.en.replace(/'/g, "\\'")}')" class="text-blue-500 hover:text-blue-600 ml-2 cursor-pointer" title="Nghe"><i class="fa-solid fa-volume-high text-[11px]"></i></button>
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
            <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-comments"></i> Speaking Task
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(u.skills.speaking || '')}</div>
          </div>
          <div class="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850">
            <div class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase mb-1 flex items-center gap-1.5">
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

  // Render Communication & Culture
  let commSection = '';
  if (u.everydayEnglish || (u.skills && u.skills.cultureClil)) {
    let dialogHtml = '';
    if (u.everydayEnglish && u.everydayEnglish.dialogues) {
      dialogHtml = u.everydayEnglish.dialogues.map(d => `
        <div class="text-xs text-slate-700 dark:text-slate-300 mb-1">
          <strong class="text-blue-600 dark:text-blue-400">${escapeHtml(d.speaker)}:</strong> "${escapeHtml(d.text)}"
        </div>
      `).join('');
    }

    let phrasesHtml = '';
    if (u.everydayEnglish && u.everydayEnglish.usefulPhrases) {
      phrasesHtml = u.everydayEnglish.usefulPhrases.map(p => `
        <li class="text-[11px] text-slate-600 dark:text-slate-300">• ${escapeHtml(p)}</li>
      `).join('');
    }

    commSection = `
      <div class="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${u.everydayEnglish ? `
          <div class="p-4 rounded-xl border border-sky-200/70 dark:border-sky-900/50 bg-sky-50/20 dark:bg-sky-950/15">
            <div class="font-bold text-xs uppercase text-sky-800 dark:text-sky-300 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-bullhorn text-sky-500"></i> Everyday English: ${escapeHtml(u.everydayEnglish.function || '')}
            </div>
            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-sky-100 dark:border-sky-900/60 mb-2.5 space-y-1">
              ${dialogHtml}
            </div>
            <div class="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Mẫu câu thường dùng:</div>
            <ul class="space-y-0.5">${phrasesHtml}</ul>
          </div>
        ` : ''}

        ${(u.skills && u.skills.cultureClil) ? `
          <div class="p-4 rounded-xl border border-teal-200/70 dark:border-teal-900/50 bg-teal-50/20 dark:bg-teal-950/15">
            <div class="font-bold text-xs uppercase text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-globe text-teal-500"></i> Culture & CLIL Insight
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              ${escapeHtml(u.skills.cultureClil)}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Render Project Card
  let projectSection = '';
  if (u.project) {
    projectSection = `
      <div class="mb-6 p-4 rounded-xl border border-rose-200/70 dark:border-rose-900/50 bg-rose-50/20 dark:bg-rose-950/15">
        <div class="font-bold text-xs uppercase text-rose-800 dark:text-rose-300 mb-1.5 flex items-center gap-2">
          <i class="fa-solid fa-diagram-project text-rose-500"></i> Project Work: ${escapeHtml(u.project.title)}
        </div>
        <div class="text-xs text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
          <strong>Hướng dẫn:</strong> ${escapeHtml(u.project.guidance)}
        </div>
        <div class="text-xs text-slate-600 dark:text-slate-400 mb-1">
          <strong>Sản phẩm cần nộp:</strong> ${escapeHtml(u.project.deliverables)}
        </div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400">
          <strong>Tiêu chí đánh giá (Rubric):</strong> ${escapeHtml(u.project.rubric)}
        </div>
      </div>
    `;
  }

  // Render Mindmap Visualization
  let diagramSection = '';
  if (svgDiagram) {
    diagramSection = `
      <div class="mb-6">
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <i class="fa-solid fa-diagram-project text-cyan-500"></i> Mindmap & Visual Knowledge Infographic
        </h3>
        <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex justify-center overflow-x-auto">
          ${svgDiagram}
        </div>
      </div>
    `;
  }

  // Render Quiz Section
  let quizSection = '';
  if (u.quiz && u.quiz.length > 0) {
    const quizItems = u.quiz.map((q, qIdx) => {
      const opts = q.options.map((opt, oIdx) => {
        const letters = ['A', 'B', 'C', 'D'];
        return `
          <button type="button" onclick="checkQuiz(this, '${k}', ${qIdx}, ${oIdx}, ${q.ans}, '${q.exp.replace(/'/g, "\\'")}')"
            class="quiz-opt w-full text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 text-xs text-slate-800 dark:text-slate-200 transition flex items-center gap-2 cursor-pointer bg-white dark:bg-slate-800">
            <span class="w-5 h-5 rounded font-bold text-[11px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">${letters[oIdx]}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      }).join('');

      return `
        <div class="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-850 mb-3" id="quiz-${k}-${qIdx}">
          <div class="text-xs font-bold text-slate-900 dark:text-white mb-2">
            Câu ${qIdx + 1}: ${escapeHtml(q.q)}
          </div>
          <div class="space-y-1.5 mb-2">
            ${opts}
          </div>
          <div class="quiz-feedback hidden text-xs p-2 rounded-lg leading-relaxed"></div>
        </div>
      `;
    }).join('');

    quizSection = `
      <div>
        <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-amber-500"></i> Unit Practice & Checkpoint (${u.quiz.length} câu trắc nghiệm)
        </h3>
        ${quizItems}
      </div>
    `;
  }

  return `
    <article id="unit-${k}" class="unit-card scroll-mt-20 p-5 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs mb-8 transition">
      <!-- Card Header -->
      <div class="border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${isReview ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800' : 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'}">
              ${badge}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">SGK Tiếng Anh 11 tr. ${u.pages}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              ${escapeHtml(themeObj.name)}
            </span>
            <button type="button" onclick="toggleDoneUnit('${k}')" id="btn-done-${k}"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer">
              <i class="far fa-circle-check"></i> <span>Đánh dấu đã học</span>
            </button>
          </div>
        </div>

        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
          ${isReview ? `Review ${u.num}. ${escapeHtml(u.title)}` : `Unit ${u.num}. ${escapeHtml(u.title)}`}
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          ${escapeHtml(u.subtitle)}
        </p>

        <!-- Goals -->
        <div class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong class="text-blue-600 dark:text-blue-400">Mục tiêu cốt lõi:</strong> ${escapeHtml(u.goals)}
        </div>

        <!-- Pronunciation if present -->
        ${u.pronunciation ? `
          <div class="mt-2.5 p-3 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/50 text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed">
            <strong class="text-indigo-600 dark:text-indigo-400"><i class="fa-solid fa-headphones mr-1"></i>Pronunciation: ${escapeHtml(u.pronunciation.title)}</strong>
            <p class="mt-1 text-slate-600 dark:text-slate-300">${escapeHtml(u.pronunciation.rule)}</p>
          </div>
        ` : ''}
      </div>

      <!-- Sections -->
      ${reviewSummarySection}
      ${vocabSection}
      ${grammarSection}
      ${skillsSection}
      ${skillsSolutionsHtml}
      ${commSection}
      ${projectSection}
      ${diagramSection}
      ${quizSection}
    </article>
  `;
}).join('\n');

// Build Master Glossary rows
const glossaryRows = data.masterGlossary.map((v, idx) => `
  <tr class="glossary-row ${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/70 dark:bg-slate-850/60'} hover:bg-blue-50/40 dark:hover:bg-blue-950/30 border-b border-slate-200/80 dark:border-slate-800 transition">
    <td class="px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-white">
      <div class="flex items-center gap-1.5">
        <span>${escapeHtml(v.word)}</span>
        <button type="button" onclick="speakWord('${v.word.replace(/'/g, "\\'")}')" class="text-blue-500 hover:text-blue-600 cursor-pointer" title="Phát âm"><i class="fa-solid fa-volume-high text-[10px]"></i></button>
      </div>
    </td>
    <td class="px-3.5 py-2.5 text-xs text-blue-600 dark:text-blue-400 font-mono">${escapeHtml(v.ipa)}</td>
    <td class="px-3.5 py-2.5 text-[11px] text-slate-500 dark:text-slate-400 uppercase font-semibold">${escapeHtml(v.type)}</td>
    <td class="px-3.5 py-2.5 text-xs text-slate-800 dark:text-slate-200">${escapeHtml(v.meaning)}</td>
    <td class="px-3.5 py-2.5 text-xs text-slate-500 dark:text-slate-400 italic">"${escapeHtml(v.eg)}"</td>
    <td class="px-3.5 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300">U${v.unitNum}</td>
  </tr>
`).join('');

// Build Grammar Cheatsheet Cards
const grammarCardsHtml = data.grammarCheatsheet.map(g => `
  <div class="p-4 rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-white dark:bg-slate-850 shadow-2xs space-y-2">
    <div class="flex items-center justify-between gap-2">
      <span class="font-black text-sm text-indigo-950 dark:text-indigo-200">#${g.num}. ${escapeHtml(g.title)}</span>
      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">${escapeHtml(g.unit)}</span>
    </div>
    <div class="p-2.5 rounded-xl bg-slate-900 text-amber-300 font-mono text-xs font-bold whitespace-pre-wrap">
${escapeHtml(g.formula)}
    </div>
    <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
      ${escapeHtml(g.usage)}
    </div>
    <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-[11.5px] text-amber-900 dark:text-amber-300">
      <strong>⚠️ Lỗi thường gặp:</strong> ${escapeHtml(g.warning)}
    </div>
  </div>
`).join('\n');

// Build Communication Handbook Cards
const commCardsHtml = data.communicationHandbook.map(c => `
  <div class="p-4 rounded-2xl border border-sky-200/80 dark:border-sky-900/60 bg-white dark:bg-slate-850 shadow-2xs space-y-2.5">
    <div class="flex items-center justify-between gap-2">
      <span class="font-black text-sm text-sky-950 dark:text-sky-200">#${c.id}. ${escapeHtml(c.function)}</span>
      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">${escapeHtml(c.unit)}</span>
    </div>
    <div class="text-xs text-slate-700 dark:text-slate-300 space-y-1">
      <div class="font-bold text-sky-700 dark:text-sky-400">Mẫu câu mở đầu / Diễn đạt:</div>
      ${c.phrases.map(p => `<div class="pl-2 border-l-2 border-sky-400 text-[11.5px] italic">"${escapeHtml(p)}"</div>`).join('')}
    </div>
    <div class="text-xs text-slate-700 dark:text-slate-300 space-y-1">
      <div class="font-bold text-emerald-700 dark:text-emerald-400">Cách đáp lại lịch thiệp:</div>
      ${c.responses.map(r => `<div class="pl-2 border-l-2 border-emerald-400 text-[11.5px] italic">"${escapeHtml(r)}"</div>`).join('')}
    </div>
  </div>
`).join('\n');

// Build Writing Genres Cards
const writingCardsHtml = data.writingGenres.map(w => `
  <div class="p-3.5 rounded-xl border border-purple-200/80 dark:border-purple-900/60 bg-white dark:bg-slate-850">
    <div class="flex items-center justify-between gap-2 mb-1">
      <span class="font-bold text-sm text-purple-950 dark:text-purple-200">${escapeHtml(w.genre)}</span>
      <span class="text-xs text-purple-600 dark:text-purple-400 font-bold">${escapeHtml(w.unit)} (${escapeHtml(w.length)})</span>
    </div>
    <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(w.keyPoints)}</div>
  </div>
`).join('\n');


// Build Reading Explanations Map for Grade 11
const readingExplanations11 = {};
unitKeys.forEach(k => {
  if (skillsSolutions11[k] && skillsSolutions11[k].reading) {
    readingExplanations11[k] = skillsSolutions11[k].reading.questions.map(q => q.explain);
  }
});

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tiếng Anh 11 – Global Success (Đầy đủ 10 Units & 4 Reviews)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'] },
          colors: {
            slate: { 850: '#111827', 950: '#090d16' }
          }
        }
      }
    };
  </script>
  <script>
    (function() {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .dark .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }

    /* SVG Dark Mode Inversions */
    .dark svg rect[fill="#f8fafc"], .dark svg rect[fill="#ffffff"] { fill: #1e293b; }
    .dark svg rect[stroke="#e2e8f0"], .dark svg rect[stroke="#cbd5e1"] { stroke: #334155; }
    .dark svg text[fill="#0f172a"], .dark svg text[fill="#1e293b"] { fill: #f1f5f9; }
    .dark svg text[fill="#334155"], .dark svg text[fill="#475569"] { fill: #cbd5e1; }
    .dark svg text[fill="#64748b"] { fill: #94a3b8; }
  </style>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white">

  <!-- STICKY TOP NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-2xs">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
      <!-- Left: Back to Main Index + Course Title -->
      <div class="flex items-center gap-3 min-w-0">
        <a href="../index.html" title="Về trang chủ chính"
          class="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xs transition shrink-0">
          <i class="fas fa-arrow-left text-sm"></i>
        </a>
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
          <i class="fa-solid fa-language text-lg"></i>
        </div>
        <div class="truncate">
          <div class="flex items-center gap-2">
            <h1 class="font-black text-slate-900 dark:text-slate-100 text-base sm:text-lg tracking-tight truncate">Tiếng Anh 11</h1>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">GLOBAL SUCCESS</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 truncate">10 Units • 4 Reviews • 120 Từ vựng • Cẩm nang Ngữ pháp & Giao tiếp (tr. 8–131)</p>
        </div>
      </div>

      <!-- Center: Progress bar -->
      <div class="hidden xl:flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div class="text-xs font-bold text-slate-700 dark:text-slate-300">Tiến độ: <span id="progress-count" class="text-blue-600 dark:text-blue-400">0/14</span> bài</div>
        <div class="w-28 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div id="progress-bar" class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <!-- Right Action Buttons -->
      <div class="flex items-center gap-2">
        <button type="button" onclick="openModal('searchModal')"
          class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition cursor-pointer">
          <i class="fas fa-magnifying-glass text-blue-600 dark:text-blue-400"></i>
          <span class="hidden md:inline">Tìm nhanh</span>
          <kbd class="hidden sm:inline-block px-1.5 py-0.5 bg-white dark:bg-slate-900 rounded text-[10px] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">Ctrl K</kbd>
        </button>

        <a href="#tong-hop-ngu-phap"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 transition">
          <i class="fa-solid fa-code"></i>
          <span>Ngữ pháp</span>
        </a>

        <a href="#tu-dien-glossary"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/60 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 text-xs font-bold border border-sky-200 dark:border-sky-800 transition">
          <i class="fa-solid fa-book-bookmark"></i>
          <span>Glossary</span>
        </a>

        <button type="button" onclick="openModal('examModal'); startExam();"
          class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-extrabold shadow-xs transition cursor-pointer">
          <i class="fas fa-trophy"></i>
          <span>Phòng thi 45'</span>
        </button>

        <!-- THEME TOGGLE BUTTON -->
        <button type="button" onclick="toggleDarkMode()" id="theme-toggle"
          class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition border border-slate-200/80 dark:border-slate-700 cursor-pointer"
          title="Chuyển chế độ Sáng / Tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN WORKSPACE GRID -->
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

      <!-- STICKY LEFT SIDEBAR (MỤC LỤC & ĐIỀU HƯỚNG) -->
      <aside class="hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden bg-slate-50/95 dark:bg-slate-900/95 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div class="flex items-center gap-2">
            <i class="fas fa-list-ul text-blue-600 dark:text-blue-400"></i>
            <span class="font-black text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">Book Map Tiếng Anh 11</span>
          </div>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300">10 Units • 4 Reviews</span>
        </div>

        <!-- Sidebar Filter Input -->
        <div class="pt-3 pb-1 shrink-0">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input id="sidebar-filter" type="text" oninput="filterSidebar(this.value)"
              placeholder="Lọc Unit (1-10), chủ đề, ngữ pháp..."
              class="w-full pl-8 pr-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <!-- Scrollable Units List -->
        <nav id="sidebar-nav" class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 space-y-1.5 text-sm pb-6 pt-2">
          ${sidebarItems}

          <div class="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
            <a href="#tong-hop-ngu-phap" class="flex items-center gap-2.5 p-2.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold text-xs hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition">
              <i class="fa-solid fa-code text-indigo-600 dark:text-indigo-400"></i>
              <span>Tổng hợp 11 Chủ điểm Ngữ pháp</span>
            </a>
            <a href="#so-tay-giao-tiep" class="flex items-center gap-2.5 p-2.5 rounded-xl bg-sky-50/80 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 font-bold text-xs hover:bg-sky-100 dark:hover:bg-sky-900/60 transition">
              <i class="fa-solid fa-bullhorn text-sky-600 dark:text-sky-400"></i>
              <span>Sổ tay 10 Chức năng Giao tiếp</span>
            </a>
            <a href="#tu-dien-glossary" class="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-blue-950 dark:hover:bg-slate-700 transition shadow-xs">
              <i class="fa-solid fa-book-bookmark text-amber-400"></i>
              <span>Tra cứu Glossary toàn bộ sách</span>
            </a>
          </div>
        </nav>
      </aside>

      <!-- MAIN CONTENT COLUMN -->
      <main class="lg:col-span-8 space-y-8 min-w-0">
        <!-- Hero Overview Banner -->
        <section class="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
          <div class="relative z-10 space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-blue-500/30 border border-blue-300/30 text-blue-100 text-xs font-extrabold uppercase tracking-wider">
                Bộ sách Kết Nối Tri Thức Với Cuộc Sống
              </span>
              <span class="px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-300/30 text-emerald-100 text-xs font-bold">
                10 Units • 4 Reviews • Glossary Toàn Sách (135 trang SGK)
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black leading-tight">
              Hệ Thống Kiến Thức Trọng Tâm Đầy Đủ – Tiếng Anh 11
            </h2>
            <p class="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
              Tích hợp chuẩn mực Language (Pronunciation, Vocabulary, Grammar), 4 Kỹ năng (Reading, Speaking, Listening, Writing), Giao tiếp (Everyday English), Culture/CLIL và Dự án học tập (Project) theo đúng Book Map của Nhà xuất bản Giáo dục Việt Nam.
            </p>
            <!-- 4 Themes Quick Jump Cards -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <a href="#unit-1" class="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
                <div class="text-[11px] font-bold text-blue-300">Theme 1 (Units 1–3)</div>
                <div class="font-extrabold text-xs sm:text-sm mt-0.5">Our Lives</div>
              </a>
              <a href="#unit-4" class="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
                <div class="text-[11px] font-bold text-teal-300">Theme 2 (Units 4–5)</div>
                <div class="font-extrabold text-xs sm:text-sm mt-0.5">Community & Env</div>
              </a>
              <a href="#unit-6" class="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
                <div class="text-[11px] font-bold text-amber-300">Theme 3 (Units 6–8)</div>
                <div class="font-extrabold text-xs sm:text-sm mt-0.5">Heritage & Pathways</div>
              </a>
              <a href="#unit-9" class="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition">
                <div class="text-[11px] font-bold text-rose-300">Theme 4 (Units 9–10)</div>
                <div class="font-extrabold text-xs sm:text-sm mt-0.5">Society & Planet</div>
              </a>
            </div>
          </div>
        </section>

        <!-- 14 Units and Reviews Articles -->
        ${contentUnits}

        <!-- SPECIAL SECTION 1: TỔNG HỢP 11 ĐIỂM NGỮ PHÁP -->
        <section id="tong-hop-ngu-phap" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl border border-indigo-200/90 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/40 dark:from-indigo-950/30 dark:via-slate-900 dark:to-slate-900 shadow-xs space-y-5">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              <i class="fa-solid fa-code"></i>
            </span>
            <div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">CẨM NANG NGỮ PHÁP TIẾNG ANH 11</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">Tổng Hợp 11 Điểm Ngữ Pháp Cốt Lõi Toàn Bộ Sách</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${grammarCardsHtml}
          </div>
        </section>

        <!-- SPECIAL SECTION 2: SỔ TAY 10 CHỨC NĂNG GIAO TIẾP -->
        <section id="so-tay-giao-tiep" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl border border-sky-200/90 dark:border-sky-900/60 bg-gradient-to-br from-sky-50/50 via-white to-teal-50/40 dark:from-sky-950/30 dark:via-slate-900 dark:to-slate-900 shadow-xs space-y-5">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              <i class="fa-solid fa-bullhorn"></i>
            </span>
            <div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">EVERYDAY ENGLISH HANDBOOK</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">Sổ Tay 10 Chức Năng Giao Tiếp Thường Ngày</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${commCardsHtml}
          </div>
        </section>

        <!-- SPECIAL SECTION 3: 6 THỂ LOẠI BÀI VIẾT -->
        <section id="the-loai-bai-viet" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl border border-purple-200/90 dark:border-purple-900/60 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/40 dark:from-purple-950/30 dark:via-slate-900 dark:to-slate-900 shadow-xs space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              <i class="fa-solid fa-pen-fancy"></i>
            </span>
            <div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300">WRITING GENRES & RUBRICS</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">6 Thể Loại Bài Viết & Tiêu Chí Dự Án (Project)</h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            ${writingCardsHtml}
          </div>
        </section>

        <!-- SPECIAL SECTION 4: MASTER GLOSSARY TOÀN SÁCH -->
        <section id="tu-dien-glossary" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <span class="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-800 text-amber-400 flex items-center justify-center text-xl shadow-xs shrink-0">
                <i class="fa-solid fa-book-bookmark"></i>
              </span>
              <div>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">SGK TRANG 124–131</span>
                <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">Từ Điển Thu Nhỏ (Glossary Tra Cứu Toàn Bộ Sách)</h3>
              </div>
            </div>
            <div class="w-full sm:w-72">
              <div class="relative">
                <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="glossary-search" type="text" oninput="filterGlossary(this.value)"
                  placeholder="Tra cứu từ vựng, nghĩa tiếng Việt..."
                  class="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>

          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-800 dark:bg-slate-950 text-white text-[11px] uppercase tracking-wider">
                  <th class="px-3.5 py-3 font-bold">Từ / Cụm từ</th>
                  <th class="px-3.5 py-3 font-bold">Phiên âm IPA</th>
                  <th class="px-3.5 py-3 font-bold">Từ loại</th>
                  <th class="px-3.5 py-3 font-bold">Ý nghĩa tiếng Việt</th>
                  <th class="px-3.5 py-3 font-bold">Ví dụ thực tế</th>
                  <th class="px-3.5 py-3 font-bold">Unit</th>
                </tr>
              </thead>
              <tbody id="glossary-tbody">
                ${glossaryRows}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- MODAL 1: QUICK SEARCH MODAL (CTRL + K) -->
  <div id="searchModal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <i class="fas fa-magnifying-glass text-blue-600 dark:text-blue-400"></i>
        <input id="global-search-input" type="text" oninput="runGlobalSearch(this.value)"
          placeholder="Nhập tên Unit, từ vựng (nutrient, peer pressure), ngữ pháp (cleft sentence, gerund)..."
          class="w-full text-sm text-slate-800 dark:text-slate-100 bg-transparent focus:outline-none" />
        <button type="button" onclick="closeModal('searchModal')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">ESC</button>
      </div>
      <div id="global-search-results" class="max-h-96 overflow-y-auto p-3 space-y-1.5 custom-scrollbar"></div>
    </div>
  </div>

  <!-- MODAL 2: 45-MINUTE EXAM ARENA (20 RANDOM QUESTIONS) -->
  <div id="examModal" class="fixed inset-0 z-50 hidden bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
      <div class="bg-gradient-to-r from-blue-900 to-slate-900 p-5 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
            <i class="fas fa-trophy"></i>
          </span>
          <div>
            <h3 class="font-black text-lg">Đấu Trường Tiếng Anh 11 (20 Câu Trắc Nghiệm Tổng Hợp)</h3>
            <p class="text-xs text-slate-300">Đề ngẫu nhiên từ ngân hàng 46 câu hỏi phủ kín 10 Units và 4 Reviews</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-white/15 font-mono font-bold text-sm text-amber-300">
            <i class="far fa-clock mr-1"></i><span id="arena-timer">45:00</span>
          </div>
          <button type="button" onclick="closeModal('examModal')" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer">
            <i class="fas fa-xmark"></i>
          </button>
        </div>
      </div>
      <div id="arena-body" class="p-5 overflow-y-auto flex-1 space-y-4 custom-scrollbar bg-slate-50 dark:bg-slate-950"></div>
      <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0">
        <div id="arena-score-status" class="text-sm font-bold text-slate-700 dark:text-slate-200">Chọn đáp án cho 20 câu hỏi rồi bấm Nộp bài.</div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="startExam()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold cursor-pointer">
            <i class="fas fa-rotate mr-1"></i> Đề mới
          </button>
          <button type="button" id="arena-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold shadow-xs cursor-pointer">
            <i class="fas fa-paper-plane mr-1"></i> Nộp bài chấm điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT CONTROLLERS -->
  <script>
    const STORAGE_KEY = 'tienganh11_done_units_v1';
    const ALL_ARENA_QS = ${JSON.stringify(data.allExamQuestions)};
    const SEARCH_INDEX = ${JSON.stringify(unitKeys.map(k => {
      const u = data.units[k];
      return {
        key: k,
        num: u.num,
        title: u.title,
        subtitle: u.subtitle,
        pages: u.pages,
        keywords: (u.vocab ? u.vocab.map(v => v.word + ' ' + v.meaning).join(' ') : '') + ' ' + (u.grammar ? u.grammar.map(g => g.title).join(' ') : '')
      };
    }))};

    // 6. Skills Reading Quiz Checker for Grade 11
    const skillReadingExplanations11 = ${JSON.stringify(readingExplanations11)};
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

    // Text-to-Speech Engine
    function speakWord(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng Text-to-Speech.');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }

    // Theme Toggle Functionality
    function initTheme() {
      updateThemeIcon();
    }
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon();
    }
    function updateThemeIcon() {
      const icon = document.getElementById('theme-icon');
      if (!icon) return;
      const isDark = document.documentElement.classList.contains('dark');
      icon.className = isDark ? 'fa-solid fa-sun text-sm text-amber-400' : 'fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300';
    }

    // Modal helpers
    function openModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.remove('hidden');
    }
    function closeModal(id) {
      const m = document.getElementById(id);
      if (m) m.classList.add('hidden');
    }

    // Progress Tracking with localStorage
    function getDoneUnits() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      } catch (e) {
        return [];
      }
    }
    function saveDoneUnits(arr) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      } catch (e) {}
    }
    function loadProgress() {
      const done = getDoneUnits();
      done.forEach(k => updateUnitButtonUI(k, true));
      updateProgressBar(done.length);
    }
    function toggleDoneUnit(k) {
      let done = getDoneUnits();
      const isDone = done.includes(k);
      if (isDone) {
        done = done.filter(item => item !== k);
      } else {
        done.push(k);
      }
      saveDoneUnits(done);
      updateUnitButtonUI(k, !isDone);
      updateProgressBar(done.length);
    }
    function updateUnitButtonUI(k, isDone) {
      const btn = document.getElementById('btn-done-' + k);
      if (!btn) return;
      if (isDone) {
        btn.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white border border-emerald-600 shadow-xs transition cursor-pointer';
        btn.innerHTML = '<i class="fas fa-circle-check"></i> <span>Đã hoàn thành</span>';
      } else {
        btn.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer';
        btn.innerHTML = '<i class="far fa-circle-check"></i> <span>Đánh dấu đã học</span>';
      }
    }
    function updateProgressBar(count) {
      const total = 14;
      const pct = Math.min(100, Math.round((count / total) * 100));
      const pCount = document.getElementById('progress-count');
      const pBar = document.getElementById('progress-bar');
      if (pCount) pCount.textContent = count + '/' + total;
      if (pBar) pBar.style.width = pct + '%';
    }

    // Sidebar and Glossary Filters
    function filterSidebar(query) {
      const q = (query || '').toLowerCase().trim();
      const items = document.querySelectorAll('#sidebar-nav .nav-item');
      items.forEach(el => {
        const text = el.textContent.toLowerCase();
        el.style.display = text.includes(q) ? 'block' : 'none';
      });
    }
    function filterGlossary(query) {
      const q = (query || '').toLowerCase().trim();
      const rows = document.querySelectorAll('#glossary-tbody tr');
      rows.forEach(tr => {
        const text = tr.textContent.toLowerCase();
        tr.style.display = text.includes(q) ? '' : 'none';
      });
    }

    // Quick Unit Quiz checking
    function checkQuiz(btn, unitKey, qIdx, optIdx, correctIdx, exp) {
      const card = document.getElementById('quiz-' + unitKey + '-' + qIdx);
      if (!card) return;
      const opts = card.querySelectorAll('.quiz-opt');
      opts.forEach(o => {
        o.disabled = true;
        o.classList.remove('hover:border-blue-400', 'dark:hover:border-blue-600');
      });

      const isCorrect = (optIdx === correctIdx);
      if (isCorrect) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-950', 'dark:text-emerald-200', 'font-bold');
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/60', 'text-rose-900', 'dark:text-rose-200');
        if (opts[correctIdx]) {
          opts[correctIdx].classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/60', 'text-emerald-950', 'dark:text-emerald-200', 'font-bold');
        }
      }

      const fb = card.querySelector('.quiz-feedback');
      if (fb) {
        fb.classList.remove('hidden');
        fb.className = 'quiz-feedback text-xs p-2.5 rounded-lg leading-relaxed mt-2 ' +
          (isCorrect ? 'bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800' :
                       'bg-rose-100/80 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 border border-rose-300 dark:border-rose-800');
        fb.innerHTML = (isCorrect ? '<strong class="flex items-center gap-1 mb-0.5"><i class="fa-solid fa-circle-check text-emerald-600"></i> Chính xác!</strong> ' :
                                    '<strong class="flex items-center gap-1 mb-0.5"><i class="fa-solid fa-circle-xmark text-rose-600"></i> Chưa đúng!</strong> ') + exp;
      }
    }

    // Global Search (Ctrl K)
    function runGlobalSearch(query) {
      const box = document.getElementById('global-search-results');
      if (!box) return;
      const q = (query || '').trim().toLowerCase();
      const matches = SEARCH_INDEX.filter(item => {
        if (!q) return true;
        return ('unit ' + item.num + ' ' + item.title + ' ' + item.subtitle + ' ' + item.keywords).toLowerCase().includes(q);
      }).slice(0, 10);

      if (matches.length === 0) {
        box.innerHTML = '<div class="p-6 text-center text-sm text-slate-500">Không tìm thấy bài học phù hợp.</div>';
        return;
      }
      box.innerHTML = matches.map(item => \`
        <a href="#unit-\${item.key}" onclick="closeModal('searchModal')" class="flex items-center justify-between p-3 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition">
          <div>
            <div class="font-bold text-slate-900 dark:text-slate-100 text-sm">\${item.title}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">\${item.subtitle}</div>
          </div>
          <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs shrink-0">SGK tr.\${item.pages}</span>
        </a>
      \`).join('');
    }
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('searchModal');
      } else if (e.key === 'Escape') {
        closeModal('searchModal');
        closeModal('examModal');
      }
    });

    // 45-Minute Exam Arena
    let currentArenaSet = [];
    let arenaAnswers = {};
    let arenaTimerInterval = null;
    let arenaSecondsLeft = 45 * 60;

    function startExam() {
      arenaAnswers = {};
      arenaSecondsLeft = 45 * 60;
      const shuffled = [...ALL_ARENA_QS].sort(() => Math.random() - 0.5);
      currentArenaSet = shuffled.slice(0, 20);
      const statusEl = document.getElementById('arena-score-status');
      if (statusEl) statusEl.textContent = 'Chọn đáp án cho 20 câu hỏi rồi bấm Nộp bài.';
      const subBtn = document.getElementById('arena-submit-btn');
      if (subBtn) subBtn.disabled = false;

      const body = document.getElementById('arena-body');
      if (body) {
        body.innerHTML = currentArenaSet.map((qObj, idx) => {
          const opts = qObj.options.map((opt, oIdx) => {
            const letter = ['A', 'B', 'C', 'D'][oIdx];
            return \`
              <button type="button" onclick="selectArenaOpt(\${idx}, \${oIdx})" id="arena-opt-\${idx}-\${oIdx}"
                class="arena-opt-group-\${idx} w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-blue-50/50 dark:hover:bg-slate-750 text-sm text-slate-700 dark:text-slate-200 transition cursor-pointer">
                <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center shrink-0">\${letter}</span>
                <span class="flex-1">\${escapeHtml(opt)}</span>
              </button>\`;
          }).join('');
          return \`
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span class="font-extrabold text-blue-700 dark:text-blue-400 uppercase">Câu \${idx + 1}/20</span>
                <span>Unit \${qObj.unitNum}: \${escapeHtml(qObj.unitTitle)}</span>
              </div>
              <div class="font-bold text-slate-900 dark:text-slate-100 text-sm leading-relaxed">\${escapeHtml(qObj.q)}</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">\${opts}</div>
              <div id="arena-exp-\${idx}" class="hidden p-3 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong>Giải thích:</strong> \${escapeHtml(qObj.exp)}
              </div>
            </div>\`;
        }).join('');
      }

      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      arenaTimerInterval = setInterval(() => {
        arenaSecondsLeft--;
        if (arenaSecondsLeft <= 0) {
          clearInterval(arenaTimerInterval);
          submitExam();
          return;
        }
        const m = String(Math.floor(arenaSecondsLeft / 60)).padStart(2, '0');
        const s = String(arenaSecondsLeft % 60).padStart(2, '0');
        const tEl = document.getElementById('arena-timer');
        if (tEl) tEl.textContent = m + ':' + s;
      }, 1000);
    }

    function selectArenaOpt(qIdx, oIdx) {
      arenaAnswers[qIdx] = oIdx;
      const btns = document.querySelectorAll('.arena-opt-group-' + qIdx);
      btns.forEach((b, idx) => {
        if (idx === oIdx) {
          b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/80 font-semibold text-sm text-blue-950 dark:text-blue-200';
        } else {
          b.className = 'arena-opt-group-' + qIdx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-blue-50/50 dark:hover:bg-slate-750 text-sm text-slate-700 dark:text-slate-200 transition';
        }
      });
    }

    function submitExam() {
      if (arenaTimerInterval) clearInterval(arenaTimerInterval);
      let correct = 0;
      currentArenaSet.forEach((qObj, idx) => {
        const chosen = arenaAnswers[idx];
        if (chosen === qObj.ans) correct++;
        const btns = document.querySelectorAll('.arena-opt-group-' + idx);
        btns.forEach((b, oIdx) => {
          b.disabled = true;
          if (oIdx === qObj.ans) {
            b.className = 'arena-opt-group-' + idx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 font-bold text-sm text-emerald-950 dark:text-emerald-200';
          } else if (oIdx === chosen && chosen !== qObj.ans) {
            b.className = 'arena-opt-group-' + idx + ' w-full text-left flex items-start gap-2.5 p-3 rounded-xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/80 text-sm text-rose-900 dark:text-rose-200';
          }
        });
        const expEl = document.getElementById('arena-exp-' + idx);
        if (expEl) expEl.classList.remove('hidden');
      });

      const score10 = ((correct / 20) * 10).toFixed(1);
      const statusEl = document.getElementById('arena-score-status');
      if (statusEl) {
        statusEl.innerHTML = \`Kết quả: Đúng <span class="text-emerald-600 font-black">\${correct}/20</span> câu — Điểm quy đổi: <span class="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-black">\${score10}/10 điểm</span>\`;
      }
      const subBtn = document.getElementById('arena-submit-btn');
      if (subBtn) subBtn.disabled = true;
    }

    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      loadProgress();
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outputPath1, fullHtml, 'utf8');
fs.writeFileSync(outputPath2, fullHtml, 'utf8');
console.log('Successfully generated courses/tienganh_11.html & courses/tienganh11.html!');
console.log('Total file size:', (Buffer.byteLength(fullHtml, 'utf8') / 1024).toFixed(1), 'KB');
