// Build Tiếng Anh 12 - Global Success (courses/tienganh_12.html & courses/tienganh12.html)
// Featuring Interactive Text-to-Speech & Complete 4-Skills Solutions (Reading, Speaking, Listening, Writing)
const fs = require('fs');
const path = require('path');

const data = require(path.join(__dirname, 'tienganh12_data.js'));
const diagrams = require(path.join(__dirname, 'tienganh12_diagrams.js'));
const skillsSolutions = require(path.join(__dirname, 'tienganh12_skills_solutions.js'));

const outPath1 = path.resolve(__dirname, '../courses/tienganh_12.html');
const outPath2 = path.resolve(__dirname, '../courses/tienganh12.html');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeForJs(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, ' ')
    .trim();
}

function formatMd(text) {
  if (!text) return '';
  let s = String(text);
  // Replace bold
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  // Replace italic English words/phrases: make them clickable audio chips!
  s = s.replace(/\*([A-Za-z0-9\s/.,'’\-]+?)\*/g, (match, word) => {
    const clean = word.replace(/['’]/g, "\\'").trim();
    // if clean is letters and spaces, allow speakWord
    if (/^[a-zA-Z\s\-]+$/.test(clean) && clean.length > 1 && !clean.includes('quá') && !clean.includes('khứ')) {
      return `<button type="button" onclick="speakWord('${clean}')" class="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50/70 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/60 px-1.5 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-900/60 transition cursor-pointer group/audio" title="Nhấn để nghe phát âm: '${clean}'"><em class="italic">${word}</em><svg class="w-3 h-3 text-blue-500 opacity-70 group-hover/audio:opacity-100 group-hover/audio:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg></button>`;
    }
    return `<em class="italic text-slate-800 dark:text-slate-200">${word}</em>`;
  });
  return s;
}

const unitKeys = [
  'unit1', 'unit2', 'unit3', 'review1',
  'unit4', 'unit5', 'review2',
  'unit6', 'unit7', 'unit8', 'review3',
  'unit9', 'unit10', 'review4'
];

// 1. Sidebar Nav
const sidebarItems = unitKeys.map(k => {
  const u = data.units[k];
  const isRev = k.startsWith('review');
  const badge = u.num;
  const badgeCls = isRev
    ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700'
    : 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-700';

  return `
    <a href="#${u.id}" class="nav-item block p-3 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900/60 hover:bg-blue-50/70 dark:hover:bg-slate-800/80 transition group" data-title="${escapeHtml(u.title.toLowerCase())} ${escapeHtml(u.num.toLowerCase())}">
      <div class="flex items-center justify-between gap-1 mb-1">
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-md border ${badgeCls}">${badge}</span>
        <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Global Success</span>
      </div>
      <div class="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1 transition">
        ${escapeHtml(u.title)}
      </div>
      <div class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
        ${escapeHtml(u.theme)}
      </div>
    </a>`;
}).join('\n');

// 2. Quick Picker Grid (Top of page)
const quickPickerGrid = unitKeys.map(k => {
  const u = data.units[k];
  const isRev = k.startsWith('review');
  const btnCls = isRev
    ? 'bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200'
    : 'bg-white hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-blue-950/50 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';
  return `
    <a href="#${u.id}" class="flex flex-col items-center justify-center p-2 rounded-xl border ${btnCls} transition shadow-2xs hover:scale-[1.02]">
      <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${u.num}</span>
      <span class="text-xs font-semibold text-center line-clamp-1 mt-0.5">${escapeHtml(u.title.split(':')[0])}</span>
    </a>
  `;
}).join('\n');

// 3. Render Units Content
const renderedUnits = unitKeys.map(k => {
  const u = data.units[k];
  const isRev = k.startsWith('review');
  const badgeCls = isRev
    ? 'bg-amber-500 text-white'
    : 'bg-blue-600 text-white';

  const svgDiagram = diagrams[k] || '';

  // Pronunciation
  const pronRules = u.pronunciation.rules.map(r => `
    <div class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 py-1">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
      <div class="flex-1 leading-relaxed">${formatMd(r)}</div>
    </div>
  `).join('\n');

  // Vocabulary with Interactive Click-to-Speak
  const vocabCards = u.vocabulary.map(v => {
    const wordClean = escapeForJs(v.word);
    const exClean = escapeForJs(v.example);
    return `
    <div class="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-850 hover:border-blue-400 dark:hover:border-blue-500 transition shadow-2xs group">
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="flex items-center gap-1.5 flex-wrap">
          <button type="button" onclick="speakWord('${wordClean}')" class="text-left font-bold text-sm text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 hover:underline flex items-center gap-1.5 cursor-pointer group/btn" title="Nhấn vào từ để nghe phát âm tiếng Anh">
            <span>${escapeHtml(v.word)}</span>
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 group-hover/btn:bg-blue-600 group-hover/btn:text-white transition">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            </span>
          </button>
          <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${escapeHtml(v.pos)}</span>
        </div>
        <button type="button" onclick="speakWord('${wordClean}')" class="text-[11px] px-2 py-0.5 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/70 dark:hover:bg-blue-900/90 text-blue-700 dark:text-blue-300 font-semibold transition cursor-pointer flex items-center gap-1 shrink-0" title="Phát âm từ này">
          <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4V5z"></path></svg>
          <span>Nghe</span>
        </button>
      </div>
      <div class="text-xs font-medium text-slate-800 dark:text-slate-200 mb-2">
        👉 ${escapeHtml(v.meaning)}
      </div>
      <div class="flex items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
        <span class="flex-1">"${escapeHtml(v.example)}"</span>
        <button type="button" onclick="speakWord('${exClean}')" class="p-1 rounded text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 shrink-0 transition cursor-pointer" title="Nghe câu ví dụ">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
        </button>
      </div>
    </div>`;
  }).join('\n');

  // Grammar
  const gramRules = u.grammar.rules.map(r => `
    <div class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 py-1.5">
      <span class="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
      <div class="flex-1 leading-relaxed">${formatMd(r)}</div>
    </div>
  `).join('\n');

  // Overview Skills Cards
  const s = u.skills;
  const skillsOverviewCards = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3">
      <!-- Reading -->
      <div class="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-2xs">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          1. Reading (Đọc hiểu)
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${formatMd(s.reading)}</p>
      </div>

      <!-- Speaking -->
      <div class="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-2xs">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          2. Speaking (Nói & Tranh biện)
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${formatMd(s.speaking)}</p>
      </div>

      <!-- Listening -->
      <div class="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-2xs">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
          3. Listening (Nghe hiểu)
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${formatMd(s.listening)}</p>
      </div>

      <!-- Writing -->
      <div class="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-2xs">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          4. Writing (Viết học thuật)
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${formatMd(s.writing)}</p>
      </div>

      <!-- Everyday English -->
      <div class="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-2xs">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
          Everyday English (Giao tiếp thực tế)
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${formatMd(s.everydayEnglish)}</p>
      </div>

      <!-- Culture & CLIL + Project -->
      <div class="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-2xs">
        <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Culture / CLIL & Project
        </div>
        <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-1.5">
          <div><strong class="font-semibold text-purple-700 dark:text-purple-300">CLIL:</strong> ${formatMd(s.cultureClil)}</div>
          <div><strong class="font-semibold text-purple-700 dark:text-purple-300">Project:</strong> ${formatMd(s.project)}</div>
        </div>
      </div>
    </div>
  `;

  // Detailed Solved Skills (Reading questions, Speaking model, Listening tapescript, Writing model essay)
  let skillsSolutionsHtml = '';
  const sol = skillsSolutions[k];
  if (sol) {
    // Reading
    const rQ = sol.reading.questions.map((q, idx) => `
      <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2.5">
        <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-2">
          <span class="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold mr-1.5">Q${idx + 1}</span>
          ${escapeHtml(q.q)}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          ${q.options.map((opt, oIdx) => `
            <button type="button" onclick="checkSkillReadingQuiz('${u.id}', ${idx}, ${oIdx}, ${q.ans})" class="skill-read-btn-${u.id}-${idx} text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-750 hover:bg-blue-50 dark:hover:bg-slate-700 transition cursor-pointer">
              ${escapeHtml(opt)}
            </button>
          `).join('')}
        </div>
        <div id="skill-read-exp-${u.id}-${idx}" class="hidden p-2.5 rounded-lg text-xs leading-relaxed"></div>
      </div>
    `).join('');

    // Speaking
    const spkSpeechClean = escapeForJs(sol.speaking.modelSpeech);

    // Listening
    const lisTapescriptClean = escapeForJs(sol.listening.tapescript);
    const lisQ = sol.listening.questions.map((q, idx) => `
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 mb-2">
        <div class="font-semibold text-xs text-slate-900 dark:text-white mb-1"><strong class="text-amber-600">Câu ${idx + 1}:</strong> ${escapeHtml(q.q)}</div>
        <div class="text-xs text-emerald-700 dark:text-emerald-400 font-bold mb-1">✔ Đáp án: ${escapeHtml(q.ans)}</div>
        <div class="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2 rounded border border-slate-100 dark:border-slate-800">
          💡 <strong>Phân tích dẫn chứng:</strong> ${escapeHtml(q.explain)}
        </div>
      </div>
    `).join('');

    // Writing
    const wrOutline = sol.writing.outline.map(ol => `<div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-1">• ${formatMd(ol)}</div>`).join('');
    const wrVocab = sol.writing.vocabHighlights.map(vh => `<div class="text-xs text-indigo-700 dark:text-indigo-400">${formatMd(vh)}</div>`).join('');

    skillsSolutionsHtml = `
      <!-- DETAILED SKILLS SOLUTIONS ACCORDION -->
      <details class="group mt-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-purple-50/50 dark:from-slate-850 dark:to-indigo-950/40 overflow-hidden shadow-sm" open>
        <summary class="p-4 sm:p-5 flex items-center justify-between cursor-pointer list-none hover:bg-white/60 dark:hover:bg-slate-800/80 transition select-none border-b border-indigo-100 dark:border-indigo-900/40">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow-sm">💡</span>
            <div>
              <div class="font-black text-sm sm:text-base text-indigo-950 dark:text-indigo-200 uppercase tracking-tight">HỆ THỐNG GIẢI CHI TIẾT BÀI TẬP 4 KỸ NĂNG (READING • SPEAKING • LISTENING • WRITING)</div>
              <div class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Trọn bộ văn bản đọc hiểu, câu hỏi & dẫn chứng, bài nói mẫu có giọng đọc, tapescript nghe và bài viết mẫu 180–220 từ</div>
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
                <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                1. Reading: ${escapeHtml(sol.reading.title)}
              </div>
              <button type="button" onclick="speakWord('${escapeForJs(sol.reading.passage.slice(0, 300))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold transition cursor-pointer flex items-center gap-1">
                🔊 Nghe đoạn văn
              </button>
            </div>
            <!-- Reading Passage Box -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-serif mb-4 shadow-inner">
              ${escapeHtml(sol.reading.passage)}
            </div>
            <!-- Reading Questions & Solutions -->
            <div class="space-y-3">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Câu hỏi đọc hiểu & Lời giải phân tích chi tiết:</div>
              ${rQ}
            </div>
          </div>

          <!-- 2. SPEAKING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-teal-100 dark:border-teal-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                2. Speaking: ${escapeHtml(sol.speaking.title)}
              </div>
              <button type="button" onclick="speakWord('${spkSpeechClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/80 dark:hover:bg-teal-900 text-teal-700 dark:text-teal-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                🔊 Nghe bài nói mẫu (Audio)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Nhiệm vụ:</strong> ${escapeHtml(sol.speaking.task)}
            </div>
            <!-- Model Speech Box -->
            <div class="p-4 rounded-xl bg-teal-50/60 dark:bg-slate-800/80 border border-teal-200 dark:border-teal-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3">
              <div class="font-bold text-xs uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-1.5 flex items-center gap-1">
                <span>🎤 Bài nói mẫu chuẩn bản ngữ (Band cao):</span>
              </div>
              ${escapeHtml(sol.speaking.modelSpeech)}
            </div>
            <!-- Useful Phrases -->
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs text-slate-700 dark:text-slate-300 mb-1">Cụm từ ghi điểm dùng trong bài nói:</div>
              <div class="space-y-1 text-xs text-teal-700 dark:text-teal-400">
                ${sol.speaking.usefulPhrases.map(p => `<div>${formatMd(p)}</div>`).join('')}
              </div>
            </div>
          </div>

          <!-- 3. LISTENING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-100 dark:border-amber-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                3. Listening: ${escapeHtml(sol.listening.title)}
              </div>
              <button type="button" onclick="speakWord('${lisTapescriptClean}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/80 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-300 font-bold transition cursor-pointer flex items-center gap-1 shadow-2xs">
                🔊 Nghe đoạn băng (Audio Script)
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              📌 <strong>Yêu cầu bài nghe:</strong> ${escapeHtml(sol.listening.task)}
            </div>
            <!-- Tapescript Collapsible Box -->
            <div class="p-3.5 rounded-xl bg-amber-50/50 dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono mb-3">
              <div class="font-bold text-[11px] uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1 flex items-center justify-between">
                <span>📝 TAPESCRIPT (Nội dung bản ghi âm):</span>
                <span class="text-[10px] text-slate-500">Giọng chuẩn Anh - Mỹ</span>
              </div>
              ${escapeHtml(sol.listening.tapescript)}
            </div>
            <!-- Listening Questions & Detailed Answers -->
            <div class="space-y-2">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Đáp án & Phân tích bẫy nghe:</div>
              ${lisQ}
            </div>
          </div>

          <!-- 4. WRITING SOLUTION -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-850 border border-rose-100 dark:border-rose-900/60 shadow-2xs">
            <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2 font-black text-sm text-rose-700 dark:text-rose-300 uppercase tracking-wider">
                <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                4. Writing: ${escapeHtml(sol.writing.title)}
              </div>
              <button type="button" onclick="speakWord('${escapeForJs(sol.writing.modelEssay.slice(0, 350))}')" class="text-[11px] px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/80 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300 font-bold transition cursor-pointer flex items-center gap-1">
                🔊 Nghe bài viết mẫu
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
              📝 <strong>Đề bài viết:</strong> ${escapeHtml(sol.writing.prompt)}
            </div>
            <!-- Outline -->
            <div class="mb-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">Dàn ý gợi ý (Detailed Essay Outline):</div>
              ${wrOutline}
            </div>
            <!-- Model Essay -->
            <div class="p-4 rounded-xl bg-rose-50/50 dark:bg-slate-800/80 border border-rose-200 dark:border-rose-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line mb-3 font-serif">
              <div class="font-bold text-xs font-sans uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-1.5 flex items-center justify-between">
                <span>🌟 Bài viết mẫu hoàn chỉnh (180–220 từ):</span>
                <span class="text-[10px] text-slate-500 font-sans">Chuẩn cấu trúc & Ngữ pháp</span>
              </div>
              ${escapeHtml(sol.writing.modelEssay)}
            </div>
            <!-- Vocab Highlights -->
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

  // Mini-Quizzes
  const quizzesHtml = u.quizzes.map((qObj, qIdx) => `
    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 mb-3" id="quiz-${u.id}-${qIdx}">
      <div class="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white mb-2.5">
        <span class="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold mr-1.5">Câu ${qIdx + 1}</span>
        ${formatMd(qObj.q)}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${qObj.options.map((opt, optIdx) => `
          <button type="button" onclick="checkUnitQuiz('${u.id}', ${qIdx}, ${optIdx}, ${qObj.correct})" class="quiz-btn-${u.id}-${qIdx} text-left text-xs sm:text-sm p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition cursor-pointer">
            ${escapeHtml(opt)}
          </button>
        `).join('\n')}
      </div>
      <div id="quiz-exp-${u.id}-${qIdx}" class="hidden mt-3 p-3 rounded-lg text-xs leading-relaxed"></div>
    </div>
  `).join('\n');

  return `
    <!-- UNIT CONTAINER: ${u.id} -->
    <section id="${u.id}" class="scroll-mt-24 p-5 sm:p-7 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-sm transition">
      <!-- Unit Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl font-bold text-xs tracking-wider uppercase ${badgeCls}">${u.num}</span>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">${escapeHtml(u.title)}</h2>
        </div>
        <span class="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          Chủ điểm: ${escapeHtml(u.theme)}
        </span>
      </div>

      <!-- Sơ đồ minh họa vector trực quan SVG -->
      ${svgDiagram}

      <!-- Pronunciation Section -->
      <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/50 dark:from-slate-800/80 dark:to-indigo-950/30 border border-blue-200/70 dark:border-blue-900/50">
        <div class="flex items-center gap-2 font-black text-sm text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-2">
          <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"></path></svg>
          Phát âm (Pronunciation): ${escapeHtml(u.pronunciation.title)}
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">${escapeHtml(u.pronunciation.desc)} <span class="italic text-blue-600 dark:text-blue-400 font-semibold">(Bấm vào các từ tiếng Anh in nghiêng để nghe phát âm trực tiếp)</span></p>
        <div class="space-y-1">
          ${pronRules}
        </div>
      </div>

      <!-- Vocabulary Section -->
      <div class="mt-6">
        <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div class="flex items-center gap-2 font-black text-sm text-slate-900 dark:text-white uppercase tracking-wider">
            <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            Từ vựng trọng tâm (Vocabulary)
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-medium">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Bấm vào từ hoặc nút 🔊 để nghe phát âm
            </span>
            <span class="text-slate-500 font-mono">${u.vocabulary.length} cụm từ</span>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${vocabCards}
        </div>
      </div>

      <!-- Grammar Section -->
      <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50/70 to-pink-50/50 dark:from-slate-800/80 dark:to-purple-950/30 border border-purple-200/70 dark:border-purple-900/50">
        <div class="flex items-center gap-2 font-black text-sm text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-2">
          <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Ngữ pháp trọng tâm (Grammar): ${escapeHtml(u.grammar.title)}
        </div>
        <div class="space-y-1">
          ${gramRules}
        </div>
      </div>

      <!-- Skills Section Overview -->
      <div class="mt-6">
        <div class="font-black text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">
          Hệ thống kỹ năng ngôn ngữ & Dự án (Language Skills & Projects)
        </div>
        ${skillsOverviewCards}
      </div>

      <!-- GIẢI CHI TIẾT BÀI TẬP 4 KỸ NĂNG -->
      ${skillsSolutionsHtml}

      <!-- Mini-Quizzes Section -->
      <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
        <div class="flex items-center justify-between mb-3">
          <div class="font-black text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Luyện tập nhanh (Mini-Quizzes) — ${u.quizzes.length} câu
          </div>
          <span class="text-xs text-slate-500">Bấm đáp án để kiểm tra kết quả ngay</span>
        </div>
        ${quizzesHtml}
      </div>
    </section>
  `;
}).join('\n\n');

// 4. Render Communication Bank
const commDiscussionHtml = data.communicationBank.discussionFramework.map(df => `
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850">
    <div class="font-bold text-xs sm:text-sm text-indigo-700 dark:text-indigo-400 mb-2">${escapeHtml(df.stage)}</div>
    <div class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
      ${df.phrases.map(p => `<div>${formatMd(p)}</div>`).join('')}
    </div>
  </div>
`).join('\n');

const commWritingTableRows = data.communicationBank.writingProducts.map(wp => `
  <tr class="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
    <td class="p-3 font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">${escapeHtml(wp.unit)}</td>
    <td class="p-3 font-semibold text-slate-800 dark:text-slate-200">${escapeHtml(wp.type)}</td>
    <td class="p-3 font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">${escapeHtml(wp.target)}</td>
    <td class="p-3 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">${formatMd(wp.keyPoints)}</td>
  </tr>
`).join('\n');

const commSkillsProceduresHtml = data.communicationBank.skillsProcedures.map(sp => `
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850">
    <div class="font-bold text-xs sm:text-sm text-teal-700 dark:text-teal-400 mb-2">${escapeHtml(sp.skill)}</div>
    <div class="space-y-1 text-xs text-slate-700 dark:text-slate-300">
      ${sp.steps.map(st => `<div class="leading-relaxed">${formatMd(st)}</div>`).join('')}
    </div>
  </div>
`).join('\n');

// 5. Render Grammar Quick Reference Table
const grammarQuickRows = data.grammarQuickRef.map((g, idx) => `
  <tr class="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
    <td class="p-3 font-bold text-purple-700 dark:text-purple-400 whitespace-nowrap">${escapeHtml(g.topic)}</td>
    <td class="p-3 font-mono text-xs text-blue-600 dark:text-blue-300 whitespace-pre-line leading-relaxed">${escapeHtml(g.formula)}</td>
    <td class="p-3 text-xs text-slate-700 dark:text-slate-300">${formatMd(g.usage)}</td>
    <td class="p-3 text-xs italic text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">${formatMd(g.example)}</td>
  </tr>
`).join('\n');

// 6. Render Arena Exam
const examQuestionsHtml = data.arenaExam.questions.map((qObj, idx) => `
  <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-2xs mb-4" id="arena-card-${idx}">
    <div class="flex items-start justify-between gap-3 mb-3">
      <div class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-black text-xs mr-2">Câu ${qObj.id}</span>
        ${formatMd(qObj.q)}
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      ${qObj.options.map((opt, oIdx) => `
        <button type="button" onclick="selectArenaAnswer(${idx}, ${oIdx})" class="arena-opt-${idx} text-left text-xs sm:text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-between">
          <span>${escapeHtml(opt)}</span>
          <span class="arena-check-${idx}-${oIdx} w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shrink-0 ml-2"></span>
        </button>
      `).join('\n')}
    </div>
    <div id="arena-exp-${idx}" class="hidden mt-3 p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
  </div>
`).join('\n');

// Build Reading Skills Explanations Map
const readingSkillExplanations = {};
unitKeys.forEach(k => {
  if (skillsSolutions[k] && skillsSolutions[k].reading) {
    readingSkillExplanations[data.units[k].id] = skillsSolutions[k].reading.questions.map(q => q.explain);
  }
});

// Full HTML Template
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Anh 12 — Global Success | Hệ Thống Kiến Thức Cốt Lõi Đầy Đủ Theo Unit</title>
  <meta name="description" content="Trọn bộ kiến thức Tiếng Anh 12 sách Global Success đủ 10 Unit, 4 Review, giải chi tiết 4 kỹ năng Reading, Speaking, Listening, Writing, phát âm Web Speech API, sơ đồ SVG vector và đề thi thử 45 phút chuẩn ma trận mới.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            slate: {
              750: '#293548',
              850: '#172033',
            }
          }
        }
      }
    }
  </script>

  <!-- KaTeX CSS & JS for safe mathematical/formula rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }

    /* Floating navigation */
    .sticky-nav {
      position: sticky;
      top: 1rem;
      max-height: calc(100vh - 2rem);
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white transition-colors duration-200">

  <!-- Reading Progress Bar -->
  <div id="read-progress" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 z-50 transition-all duration-150" style="width: 0%"></div>

  <!-- Audio Toast Notification -->
  <div id="audio-toast" class="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 shadow-2xl border border-slate-700/50 backdrop-blur-md text-xs font-bold">
    <span class="flex h-3 w-3 relative">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
    </span>
    <span id="audio-toast-msg">🔊 Đang phát âm...</span>
  </div>

  <!-- Header / Topbar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left: Logo & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm" title="Về trang chủ">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        </a>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 uppercase tracking-wider">GLOBAL SUCCESS</span>
            <span class="text-xs text-slate-400">|</span>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">LỚP 12</span>
            <span class="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              💡 Có giải chi tiết 4 kỹ năng
            </span>
          </div>
          <h1 class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-tight">TIẾNG ANH 12 — HỆ THỐNG KIẾN THỨC ĐẦY ĐỦ THEO UNIT</h1>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Mobile Drawer Toggle -->
        <button type="button" onclick="toggleMobileMenu()" class="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <span>Menu Bài</span>
        </button>

        <!-- Dark mode toggle -->
        <button type="button" onclick="toggleDarkMode()" class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition" title="Chuyển chế độ sáng/tối">
          <svg id="sun-icon" class="w-5 h-5 hidden dark:block text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg id="moon-icon" class="w-5 h-5 block dark:hidden text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <div class="flex gap-8">
      
      <!-- DESKTOP SIDEBAR -->
      <aside class="hidden lg:block w-72 shrink-0">
        <div class="sticky-nav flex flex-col p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          
          <!-- Search box inside sidebar -->
          <div class="mb-3">
            <div class="relative">
              <input type="text" id="unit-search" oninput="filterUnits(this.value)" placeholder="🔍 Lọc bài học..." class="w-full px-3 py-2 pl-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <svg class="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <!-- Unit Navigation Links -->
          <div class="flex-1 overflow-y-auto space-y-1.5 pr-1" id="sidebar-unit-list">
            ${sidebarItems}

            <div class="pt-3 border-t border-slate-200 dark:border-slate-800 mt-2 space-y-1">
              <a href="#comm-bank" class="block p-2.5 rounded-xl border border-transparent hover:border-indigo-200 dark:hover:border-indigo-900/60 hover:bg-indigo-50/70 dark:hover:bg-slate-800 text-xs font-bold text-indigo-700 dark:text-indigo-400 transition">
                💬 Ngân hàng giao tiếp & Kỹ năng viết
              </a>
              <a href="#grammar-ref" class="block p-2.5 rounded-xl border border-transparent hover:border-purple-200 dark:hover:border-purple-900/60 hover:bg-purple-50/70 dark:hover:bg-slate-800 text-xs font-bold text-purple-700 dark:text-purple-400 transition">
                ⚡ Bảng ngữ pháp tra nhanh (10 chuyên đề)
              </a>
              <a href="#arena-exam" class="block p-2.5 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-900/60 hover:bg-amber-50/70 dark:hover:bg-slate-800 text-xs font-bold text-amber-700 dark:text-amber-400 transition">
                🏆 Đấu trường 20 câu 45 phút
              </a>
            </div>
          </div>
        </div>
      </aside>

      <!-- MOBILE OFF-CANVAS DRAWER -->
      <div id="mobile-drawer" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm hidden lg:hidden" onclick="toggleMobileMenu()">
        <div class="w-80 max-w-[85vw] h-full bg-white dark:bg-slate-900 p-5 overflow-y-auto shadow-2xl flex flex-col" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
            <span class="font-bold text-sm text-slate-900 dark:text-white">📑 Danh Sách Bài Học Tiếng Anh 12</span>
            <button type="button" onclick="toggleMobileMenu()" class="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div class="space-y-1.5 overflow-y-auto flex-1">
            ${sidebarItems}
          </div>
        </div>
      </div>

      <!-- MAIN CONTENT AREA -->
      <main class="flex-1 min-w-0 space-y-8">
        
        <!-- Welcome Hero Banner -->
        <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white shadow-xl relative overflow-hidden">
          <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-wider uppercase mb-3">
              <span>GDPT 2018</span> • <span>GLOBAL SUCCESS 12</span>
            </div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2">TIẾNG ANH 12 — GLOBAL SUCCESS</h1>
            <p class="text-blue-100 text-xs sm:text-sm font-medium mb-4 max-w-2xl leading-relaxed">
              Tổng hợp kiến thức đầy đủ theo Unit: Sách học sinh Global Success, đủ 10 Unit và 4 Review. Tích hợp trọn bộ giải chi tiết 4 kỹ năng (Reading, Speaking, Listening, Writing), phát âm bản ngữ bấm là nói, sơ đồ SVG và đề thi thử 45 phút.
            </p>
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">💡 Giải chi tiết 4 kỹ năng</span>
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">🔊 Bấm từ để nghe phát âm</span>
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">📚 10 Units & 4 Reviews</span>
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">🎨 10 Sơ đồ SVG Vector</span>
              <span class="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">📝 10 Dạng bài viết học thuật</span>
            </div>
          </div>
        </section>

        <!-- Quick Unit Picker Grid -->
        <section class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Chọn Nhanh Bài Học (Quick Picker)</span>
            <span class="text-[11px] text-blue-600 dark:text-blue-400 font-medium">Bấm để chuyển tới bài ngay ⬇</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            ${quickPickerGrid}
          </div>
        </section>

        <!-- RENDERED UNITS -->
        ${renderedUnits}

        <!-- COMMUNICATION & WRITING BANK -->
        <section id="comm-bank" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
            <span class="p-2.5 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </span>
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">NGÂN HÀNG GIAO TIẾP VÀ KỸ NĂNG VIẾT</h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Khung thảo luận 5 bước + Bảng tổng hợp 10 thể loại bài viết + Quy trình 5 kỹ năng làm bài thi</p>
            </div>
          </div>

          <!-- Part 1: Discussion Framework -->
          <div class="mb-8">
            <h3 class="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
              A. Khung thảo luận và điều phối đối thoại (5 Giai đoạn chuẩn — Nhấn vào câu mẫu tiếng Anh để nghe phát âm)
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${commDiscussionHtml}
            </div>
          </div>

          <!-- Part 2: Writing Products Table -->
          <div class="mb-8">
            <h3 class="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              B. Bảng tổng hợp 10 dạng sản phẩm viết học thuật theo Unit
            </h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table class="w-full text-left text-xs sm:text-sm">
                <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase font-bold text-[11px]">
                  <tr>
                    <th class="p-3">Unit</th>
                    <th class="p-3">Thể loại bài viết</th>
                    <th class="p-3">Dung lượng</th>
                    <th class="p-3">Yêu cầu nội dung & Kỹ thuật viết</th>
                  </tr>
                </thead>
                <tbody>
                  ${commWritingTableRows}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Part 3: Skills Procedures -->
          <div>
            <h3 class="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-teal-500"></span>
              C. Quy trình chuẩn 5 kỹ năng ngôn ngữ trong học tập và thi cử
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              ${commSkillsProceduresHtml}
            </div>
          </div>
        </section>

        <!-- GRAMMAR QUICK REFERENCE TABLE -->
        <section id="grammar-ref" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
            <span class="p-2.5 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </span>
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">BẢNG NGỮ PHÁP TRA NHANH — 10 CHUYÊN ĐỀ CỐT LÕI</h2>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Công thức tổng quát, cách sử dụng và câu ví dụ minh họa tra cứu nhanh trước kỳ thi</p>
            </div>
          </div>

          <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase font-bold text-[11px]">
                <tr>
                  <th class="p-3">Chuyên đề</th>
                  <th class="p-3">Công thức trọng tâm</th>
                  <th class="p-3">Nguyên tắc & Điều kiện dùng</th>
                  <th class="p-3">Ví dụ SGK Global Success</th>
                </tr>
              </thead>
              <tbody>
                ${grammarQuickRows}
              </tbody>
            </table>
          </div>
        </section>

        <!-- ARENA EXAM: 20 QUESTIONS 45 MINUTES -->
        <section id="arena-exam" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl border border-indigo-900/60">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-indigo-900/60 mb-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                🏆 ĐẤU TRƯỜNG THI THỬ 12
              </div>
              <h2 class="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">${escapeHtml(data.arenaExam.title)}</h2>
              <p class="text-xs sm:text-sm text-slate-300 mt-1">${escapeHtml(data.arenaExam.meta)}</p>
            </div>

            <!-- Timer Card -->
            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <svg class="w-6 h-6 text-amber-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <div class="text-[10px] font-bold uppercase text-slate-400 tracking-wider">THỜI GIAN CÒN LẠI</div>
                <div id="exam-timer" class="font-mono text-xl sm:text-2xl font-black text-amber-300">45:00</div>
              </div>
            </div>
          </div>

          <!-- Exam Questions List -->
          <div class="space-y-4">
            ${examQuestionsHtml}
          </div>

          <!-- Exam Controls -->
          <div class="mt-8 pt-6 border-t border-indigo-900/60 flex flex-wrap items-center justify-between gap-4">
            <button type="button" id="submit-exam-btn" onclick="submitArenaExam()" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:scale-[1.02] transition cursor-pointer">
              🚀 NỘP BÀI VÀ XEM ĐIỂM CHI TIẾT
            </button>
            <div id="exam-result-banner" class="hidden text-sm sm:text-base font-bold text-emerald-400"></div>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4">
      <p class="font-semibold text-slate-700 dark:text-slate-300 mb-1">Hệ Thống Học Tập Trực Tuyến — Tiếng Anh Lớp 12 Global Success</p>
      <p>Nội dung được cấu trúc sư phạm theo chuẩn Chương trình GDPT 2018. Tích hợp giải chi tiết 4 kỹ năng và tính năng đọc phát âm tự động Web Speech API.</p>
    </div>
  </footer>

  <!-- SCRIPT LOGIC -->
  <script>
    // 0. Interactive Speech Synthesis (Phát âm bản ngữ khi bấm vào từ)
    let audioToastTimeout = null;

    function showAudioToast(text) {
      const toast = document.getElementById('audio-toast');
      const msg = document.getElementById('audio-toast-msg');
      if (!toast || !msg) return;

      const displayTxt = text.length > 28 ? text.slice(0, 28) + '...' : text;
      msg.textContent = '🔊 Đang phát âm: "' + displayTxt + '"';
      toast.classList.remove('translate-y-20', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      if (audioToastTimeout) clearTimeout(audioToastTimeout);
      audioToastTimeout = setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 2200);
    }

    function speakWord(text) {
      if (!text) return;
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn hiện chưa hỗ trợ tính năng Text-to-Speech (Web Speech API). Hãy thử trên Chrome, Edge, Safari hoặc Firefox.');
        return;
      }

      // Cancel previous speech to play new word immediately
      window.speechSynthesis.cancel();

      // Clean text
      const clean = text.replace(/[*_#\`]/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'en-US';
      utterance.rate = 0.88; // Crisp, educational cadence
      utterance.pitch = 1.0;

      // Select high quality English voice if available
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith('en') && (
        v.name.includes('Natural') || 
        v.name.includes('Google') || 
        v.name.includes('Samantha') || 
        v.name.includes('US') || 
        v.name.includes('Jenny') || 
        v.name.includes('Guy')
      ));
      if (enVoice) {
        utterance.voice = enVoice;
      }

      window.speechSynthesis.speak(utterance);
      showAudioToast(clean);
    }

    // Preload voices
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    // 1. Reading Progress
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('read-progress');
      if (bar) bar.style.width = scrolled + '%';
    });

    // 2. Dark Mode Toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // 3. Mobile Drawer Toggle
    function toggleMobileMenu() {
      const drawer = document.getElementById('mobile-drawer');
      if (drawer) {
        drawer.classList.toggle('hidden');
      }
    }

    // 4. Sidebar Unit Filter
    function filterUnits(query) {
      const q = (query || '').toLowerCase().trim();
      const items = document.querySelectorAll('#sidebar-unit-list .nav-item');
      items.forEach(el => {
        const title = el.getAttribute('data-title') || '';
        if (!q || title.includes(q)) {
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      });
    }

    // 5. Mini-Quiz Checker
    function checkUnitQuiz(unitId, qIdx, optIdx, correctIdx) {
      const btns = document.querySelectorAll('.quiz-btn-' + unitId + '-' + qIdx);
      const expEl = document.getElementById('quiz-exp-' + unitId + '-' + qIdx);
      const isCorrect = (optIdx === correctIdx);

      btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.className = 'quiz-btn-' + unitId + '-' + qIdx + ' text-left text-xs sm:text-sm p-2.5 rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 font-bold';
        } else if (idx === optIdx && !isCorrect) {
          btn.className = 'quiz-btn-' + unitId + '-' + qIdx + ' text-left text-xs sm:text-sm p-2.5 rounded-lg border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200';
        } else {
          btn.className = 'quiz-btn-' + unitId + '-' + qIdx + ' text-left text-xs sm:text-sm p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 opacity-60';
        }
      });

      if (expEl) {
        expEl.classList.remove('hidden');
        if (isCorrect) {
          expEl.className = 'mt-3 p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-medium';
          expEl.innerHTML = '🎉 <strong>Chính xác!</strong> Phân tích: ' + (getQuizExplain(unitId, qIdx) || 'Lựa chọn hoàn toàn chuẩn xác.');
        } else {
          expEl.className = 'mt-3 p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expEl.innerHTML = '❌ <strong>Chưa chính xác!</strong> Giải thích: ' + (getQuizExplain(unitId, qIdx) || 'Xem lại kiến thức trong bài.');
        }
      }
    }

    // Mini-quiz explanation lookup table
    const quizExplanations = ${JSON.stringify(
      unitKeys.reduce((acc, k) => {
        acc[data.units[k].id] = data.units[k].quizzes.map(q => q.explain);
        return acc;
      }, {})
    )};

    function getQuizExplain(unitId, qIdx) {
      if (quizExplanations[unitId] && quizExplanations[unitId][qIdx]) {
        return quizExplanations[unitId][qIdx];
      }
      return '';
    }

    // 6. Skills Reading Quiz Checker
    const skillReadingExplanations = ${JSON.stringify(readingSkillExplanations)};

    function checkSkillReadingQuiz(unitId, qIdx, optIdx, correctIdx) {
      const btns = document.querySelectorAll('.skill-read-btn-' + unitId + '-' + qIdx);
      const expEl = document.getElementById('skill-read-exp-' + unitId + '-' + qIdx);
      const isCorrect = (optIdx === correctIdx);

      btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.className = 'skill-read-btn-' + unitId + '-' + qIdx + ' text-left text-xs p-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 font-bold';
        } else if (idx === optIdx && !isCorrect) {
          btn.className = 'skill-read-btn-' + unitId + '-' + qIdx + ' text-left text-xs p-2 rounded-lg border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200';
        } else {
          btn.className = 'skill-read-btn-' + unitId + '-' + qIdx + ' text-left text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 opacity-60';
        }
      });

      if (expEl) {
        expEl.classList.remove('hidden');
        const expText = (skillReadingExplanations[unitId] && skillReadingExplanations[unitId][qIdx]) || '';
        if (isCorrect) {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-medium';
          expEl.innerHTML = '🎉 <strong>Chính xác!</strong> ' + expText;
        } else {
          expEl.className = 'mt-2 p-2.5 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expEl.innerHTML = '❌ <strong>Chưa chính xác!</strong> ' + expText;
        }
      }
    }

    // 7. Arena Exam Timer & Checker
    const examQuestionsData = ${JSON.stringify(data.arenaExam.questions)};
    const userExamAnswers = {};
    let examTimeRemaining = 45 * 60; // 45 minutes
    let examTimerInterval = null;

    function startExamTimer() {
      const timerEl = document.getElementById('exam-timer');
      examTimerInterval = setInterval(() => {
        if (examTimeRemaining <= 0) {
          clearInterval(examTimerInterval);
          submitArenaExam();
          return;
        }
        examTimeRemaining--;
        const mins = Math.floor(examTimeRemaining / 60);
        const secs = examTimeRemaining % 60;
        if (timerEl) {
          timerEl.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        }
      }, 1000);
    }

    function selectArenaAnswer(qIdx, oIdx) {
      userExamAnswers[qIdx] = oIdx;
      const btns = document.querySelectorAll('.arena-opt-' + qIdx);
      btns.forEach((b, idx) => {
        const checkSpan = b.querySelector('.arena-check-' + qIdx + '-' + idx);
        if (idx === oIdx) {
          b.className = 'arena-opt-' + qIdx + ' text-left text-xs sm:text-sm p-3 rounded-xl border-2 border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 font-bold text-indigo-950 dark:text-indigo-200 flex items-center justify-between';
          if (checkSpan) checkSpan.className = 'arena-check-' + qIdx + '-' + idx + ' w-4 h-4 rounded-full border-4 border-indigo-600 bg-white shrink-0 ml-2';
        } else {
          b.className = 'arena-opt-' + qIdx + ' text-left text-xs sm:text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 transition flex items-center justify-between text-slate-700 dark:text-slate-300';
          if (checkSpan) checkSpan.className = 'arena-check-' + qIdx + '-' + idx + ' w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shrink-0 ml-2';
        }
      });
    }

    function submitArenaExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let correct = 0;

      examQuestionsData.forEach((qObj, idx) => {
        const chosen = userExamAnswers[idx];
        const isRight = (chosen === qObj.correct);
        if (isRight) correct++;

        const btns = document.querySelectorAll('.arena-opt-' + idx);
        btns.forEach((b, oIdx) => {
          b.disabled = true;
          if (oIdx === qObj.correct) {
            b.className = 'arena-opt-' + idx + ' text-left text-xs sm:text-sm p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 font-bold text-emerald-950 dark:text-emerald-200 flex items-center justify-between';
          } else if (oIdx === chosen && !isRight) {
            b.className = 'arena-opt-' + idx + ' text-left text-xs sm:text-sm p-3 rounded-xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 flex items-center justify-between';
          }
        });

        const expEl = document.getElementById('arena-exp-' + idx);
        if (expEl) {
          expEl.classList.remove('hidden');
          expEl.className = 'mt-3 p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ' + (isRight ? 'bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200');
          expEl.innerHTML = (isRight ? '✅ <strong>Đúng!</strong> ' : '❌ <strong>Sai!</strong> ') + 'Giải thích: ' + qObj.explain;
        }
      });

      const score10 = ((correct / examQuestionsData.length) * 10).toFixed(1);
      const resBanner = document.getElementById('exam-result-banner');
      if (resBanner) {
        resBanner.classList.remove('hidden');
        resBanner.innerHTML = '🎯 Kết quả: Đúng <span class="text-emerald-400 font-black">' + correct + '/' + examQuestionsData.length + '</span> câu — Điểm số: <span class="px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-black">' + score10 + '/10 điểm</span>';
      }

      const subBtn = document.getElementById('submit-exam-btn');
      if (subBtn) {
        subBtn.disabled = true;
        subBtn.textContent = 'ĐÃ NỘP BÀI';
        subBtn.className = 'px-6 py-3 rounded-2xl bg-slate-700 text-slate-400 font-bold text-sm cursor-not-allowed';
      }
    }

    // Auto-render KaTeX safely on page load
    document.addEventListener('DOMContentLoaded', () => {
      startExamTimer();
      if (window.renderMathInElement) {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outPath1, fullHtml, 'utf8');
fs.writeFileSync(outPath2, fullHtml, 'utf8');

const s1 = fs.statSync(outPath1);
const s2 = fs.statSync(outPath2);

console.log('Successfully updated Tiếng Anh 12 courses with 4-Skills Solutions & Speech Synthesis:');
console.log('1. courses/tienganh_12.html:', s1.size, 'bytes');
console.log('2. courses/tienganh12.html:', s2.size, 'bytes');
console.log('Byte-for-byte identical:', s1.size === s2.size && fs.readFileSync(outPath1).equals(fs.readFileSync(outPath2)));
