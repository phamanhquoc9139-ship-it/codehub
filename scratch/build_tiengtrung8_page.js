// Builder script for Tiếng Trung Quốc 8 (tiengtrung_8.html & chinese_8.html)
const fs = require('fs');
const path = require('path');

const dataP1 = require('./tiengtrung8_data_p1.js');
const dataP2 = require('./tiengtrung8_data_p2.js');
const mindmaps = require('./tiengtrung8_mindmaps.js');
const examQuestions = require('./tiengtrung8_exam.js');

const themes = [dataP1.theme1, dataP1.theme2, dataP2.theme3, dataP2.theme4];
const hanziManual = dataP2.hanziManual;
const grammarSummary = dataP2.grammarSummary;

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
}

function renderLesson(lesson, theme) {
  const isReview = Boolean(lesson.summary);
  
  if (isReview) {
    return `
    <article id="${lesson.id}" class="bg-white dark:bg-gray-850 rounded-2xl shadow-sm border border-gray-200/80 dark:border-gray-800 p-6 md:p-8 mb-12 transition-all hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200">
              <i class="fa-solid fa-flag-checkered"></i> ${lesson.unit}
            </span>
            <span class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">${theme.title}</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 flex items-center gap-3">
            <span class="font-serif tracking-wide text-china-red dark:text-red-400">${escapeHtml(lesson.title)}</span>
            <button onclick="speakChinese('${escapeHtml(lesson.title)}')" class="w-9 h-9 rounded-full bg-${theme.color}-50 dark:bg-${theme.color}-900/30 text-${theme.color}-600 dark:text-${theme.color}-400 hover:scale-110 flex items-center justify-center transition-all shadow-sm" title="Phát âm">
              <i class="fa-solid fa-volume-high text-sm"></i>
            </button>
          </h3>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
            <span class="font-mono text-${theme.color}-600 dark:text-${theme.color}-400">${escapeHtml(lesson.pinyin)}</span> • ${escapeHtml(lesson.meaning)}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="markLessonComplete('${lesson.id}')" id="btn-comp-${lesson.id}" class="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300 transition-all flex items-center gap-1.5">
            <i class="fa-regular fa-circle-check"></i> Đánh dấu đã học
          </button>
        </div>
      </div>

      <div class="mt-6 space-y-6">
        <!-- Goals Banner -->
        <div class="p-4 bg-${theme.color}-50/60 dark:bg-${theme.color}-950/20 rounded-xl border border-${theme.color}-100 dark:border-${theme.color}-900/40 flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-${theme.color}-500/10 text-${theme.color}-600 flex items-center justify-center shrink-0 mt-0.5">
            <i class="fa-solid fa-bullseye"></i>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 dark:text-white text-sm">Mục tiêu ôn tập trọng tâm</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300 mt-0.5 leading-relaxed">${escapeHtml(lesson.goals)}</p>
          </div>
        </div>

        <!-- Summary Points -->
        <div>
          <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-${theme.color}-600"></i> Hệ thống hóa kiến thức chủ điểm
          </h4>
          <div class="grid md:grid-cols-2 gap-4">
            ${lesson.summary.map(item => `
              <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200/60 dark:border-gray-700/60 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                ${item}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tasks & Projects -->
        <div>
          <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <i class="fa-solid fa-pen-ruler text-${theme.color}-600"></i> Nhiệm vụ vận dụng & Dự án nhóm
          </h4>
          <ul class="space-y-2.5">
            ${lesson.tasks.map(task => `
              <li class="flex items-start gap-3 p-3.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm text-sm text-gray-700 dark:text-gray-300">
                <i class="fa-solid fa-circle-check text-${theme.color}-500 mt-1"></i>
                <span>${escapeHtml(task)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </article>
    `;
  }

  // Regular Lesson
  return `
  <article id="${lesson.id}" class="bg-white dark:bg-gray-850 rounded-2xl shadow-sm border border-gray-200/80 dark:border-gray-800 p-6 md:p-8 mb-12 transition-all hover:shadow-md">
    <!-- Header -->
    <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
      <div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-${theme.color}-100 dark:bg-${theme.color}-900/40 text-${theme.color}-700 dark:text-${theme.color}-300">
            <i class="fa-solid fa-bookmark"></i> ${lesson.unit}
          </span>
          <span class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">${theme.title}</span>
        </div>
        <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 flex items-center gap-3">
          <span class="font-serif tracking-wide text-china-red dark:text-red-400">${escapeHtml(lesson.title)}</span>
          <button onclick="speakChinese('${escapeHtml(lesson.title)}')" class="w-9 h-9 rounded-full bg-${theme.color}-50 dark:bg-${theme.color}-900/30 text-${theme.color}-600 dark:text-${theme.color}-400 hover:scale-110 flex items-center justify-center transition-all shadow-sm" title="Nghe phát âm chuẩn">
            <i class="fa-solid fa-volume-high text-sm"></i>
          </button>
        </h3>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
          <span class="font-mono text-${theme.color}-600 dark:text-${theme.color}-400">${escapeHtml(lesson.pinyin)}</span> • ${escapeHtml(lesson.meaning)}
        </p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="markLessonComplete('${lesson.id}')" id="btn-comp-${lesson.id}" class="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300 transition-all flex items-center gap-1.5">
          <i class="fa-regular fa-circle-check"></i> Đánh dấu đã học
        </button>
      </div>
    </div>

    <!-- Goals Banner -->
    <div class="my-6 p-4 bg-${theme.color}-50/60 dark:bg-${theme.color}-950/20 rounded-xl border border-${theme.color}-100 dark:border-${theme.color}-900/40 flex items-start gap-3">
      <div class="w-8 h-8 rounded-lg bg-${theme.color}-500/10 text-${theme.color}-600 flex items-center justify-center shrink-0 mt-0.5">
        <i class="fa-solid fa-compass"></i>
      </div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-sm">Mục tiêu giao tiếp & Tri thức bài học:</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">${escapeHtml(lesson.goals)}</p>
      </div>
    </div>

    <!-- Section 1: Vocabulary -->
    <div class="mb-10">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <span class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-black">1</span>
          <span>生词 Từ vựng trọng tâm</span>
        </h4>
        <span class="text-xs text-gray-400">${lesson.vocab.length} từ mới</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        ${lesson.vocab.map(v => `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-${theme.color}-300 dark:hover:border-${theme.color}-700 transition-all group flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2">
                <div>
                  <span class="text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-wide group-hover:text-china-red dark:group-hover:text-red-400 transition-colors">${escapeHtml(v.hanzi)}</span>
                  <span class="block text-xs font-mono font-semibold text-${theme.color}-600 dark:text-${theme.color}-400">${escapeHtml(v.pinyin)}</span>
                </div>
                <button onclick="speakChinese('${escapeHtml(v.hanzi)}')" class="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-china-red hover:bg-red-50 dark:hover:bg-gray-600 flex items-center justify-center shadow-xs transition-all" title="Nghe từ">
                  <i class="fa-solid fa-volume-high text-xs"></i>
                </button>
              </div>
              <div class="mt-2 text-xs">
                <span class="text-gray-400 dark:text-gray-500 font-medium">[${escapeHtml(v.hv)}]</span>
                <p class="font-semibold text-gray-800 dark:text-gray-200 text-sm mt-0.5">${escapeHtml(v.meaning)}</p>
              </div>
            </div>
            ${v.eg ? `
              <div class="mt-3 pt-2.5 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span class="truncate font-sans italic" title="${escapeHtml(v.eg)}">VD: ${escapeHtml(v.eg)}</span>
                <button onclick="speakChinese('${escapeHtml(v.eg)}')" class="shrink-0 text-gray-400 hover:text-${theme.color}-600 ml-1">
                  <i class="fa-solid fa-play text-[10px]"></i>
                </button>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Section 2: Grammar & Mindmap -->
    <div class="mb-10">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <span class="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-black">2</span>
          <span>语法 Điểm ngữ pháp cốt lõi</span>
        </h4>
      </div>

      <div class="space-y-6">
        ${lesson.grammar.map(g => `
          <div class="bg-gray-50/70 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-200/70 dark:border-gray-700/70">
            <h5 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 text-china-red dark:text-red-400">
              <i class="fa-solid fa-cube text-sm"></i> ${escapeHtml(g.title)}
            </h5>
            
            <div class="my-3 px-3.5 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs md:text-sm font-mono font-semibold text-emerald-700 dark:text-emerald-300">
              Cấu trúc: ${escapeHtml(g.structure)}
            </div>

            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">${g.content}</p>

            <ul class="space-y-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
              ${g.rules.map(r => `
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-angle-right text-${theme.color}-500 mt-1 text-xs"></i>
                  <span>${r}</span>
                </li>
              `).join('')}
            </ul>

            <!-- Mindmap Embedding -->
            ${g.mindmapRef && mindmaps[g.mindmapRef] ? `
              <div class="my-5 p-3 rounded-xl bg-white dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-700/70 shadow-xs">
                <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <i class="fa-solid fa-diagram-project text-${theme.color}-500"></i> Sơ đồ trực quan ngữ pháp (Concept Mindmap)
                </div>
                ${mindmaps[g.mindmapRef]}
              </div>
            ` : ''}

            <!-- Examples -->
            <div class="mt-4">
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Câu ví dụ ngữ cảnh:</span>
              <div class="space-y-2">
                ${g.examples.map(ex => `
                  <div class="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 flex items-start justify-between gap-3">
                    <div>
                      <p class="text-sm font-serif font-bold text-gray-900 dark:text-white">${escapeHtml(ex.zh)}</p>
                      <p class="text-xs font-mono text-${theme.color}-600 dark:text-${theme.color}-400">${escapeHtml(ex.py)}</p>
                      <p class="text-xs text-gray-600 dark:text-gray-300 mt-0.5">${escapeHtml(ex.vi)}</p>
                    </div>
                    <button onclick="speakChinese('${escapeHtml(ex.zh)}')" class="shrink-0 w-7 h-7 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-${theme.color}-600 flex items-center justify-center transition-all" title="Nghe câu mẫu">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Section 3: Dialogue -->
    <div class="mb-10">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-black">3</span>
          <span>情景对话 Hội thoại tình huống</span>
        </h4>
        <button onclick="playFullDialogue('dialogue-${lesson.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-play"></i> Nghe toàn bài hội thoại
        </button>
      </div>

      <div id="dialogue-${lesson.id}" class="space-y-3 bg-gray-50/70 dark:bg-gray-800/40 p-5 rounded-xl border border-gray-200/70 dark:border-gray-700/70">
        ${lesson.dialogue.map((d, dIdx) => `
          <div class="dialogue-line p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 flex items-start gap-3.5 shadow-xs" data-zh="${escapeHtml(d.zh)}">
            <div class="w-9 h-9 rounded-full bg-${theme.color}-100 dark:bg-${theme.color}-900/50 text-${theme.color}-700 dark:text-${theme.color}-300 font-bold text-xs flex items-center justify-center shrink-0">
              ${dIdx % 2 === 0 ? '<i class=\"fa-solid fa-user\"></i>' : '<i class=\"fa-solid fa-user-tie\"></i>'}
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="font-bold text-xs text-gray-900 dark:text-white">${escapeHtml(d.speaker)}</span>
                <span class="text-[11px] text-gray-400">(${escapeHtml(d.role)})</span>
              </div>
              <p class="text-base font-serif font-bold text-gray-900 dark:text-white mt-1">${escapeHtml(d.zh)}</p>
              <p class="text-xs font-mono text-${theme.color}-600 dark:text-${theme.color}-400">${escapeHtml(d.py)}</p>
              <p class="text-xs text-gray-600 dark:text-gray-300 mt-0.5">${escapeHtml(d.vi)}</p>
            </div>
            <button onclick="speakChinese('${escapeHtml(d.zh)}')" class="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-emerald-600 flex items-center justify-center transition-all shrink-0" title="Nghe câu này">
              <i class="fa-solid fa-volume-high text-xs"></i>
            </button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Section 4: Interactive Practice -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <span class="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs font-black">4</span>
          <span>课堂练习 Luyện tập củng cố</span>
        </h4>
      </div>

      <div class="space-y-4">
        ${lesson.practice.map((p, pIdx) => `
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200/70 dark:border-gray-700/70">
            <p class="font-bold text-sm text-gray-900 dark:text-white mb-3">
              <span class="text-${theme.color}-600 font-mono">Câu ${pIdx + 1}:</span> ${escapeHtml(p.q)}
            </p>
            <div class="grid sm:grid-cols-2 gap-2" id="quiz-${lesson.id}-${pIdx}">
              ${p.opts.map((opt, optIdx) => `
                <button onclick="checkLessonQuiz('${lesson.id}', ${pIdx}, ${optIdx}, ${p.ans})" class="quiz-opt text-left px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-${theme.color}-400 text-xs font-medium text-gray-800 dark:text-gray-200 transition-all flex items-center justify-between">
                  <span>${String.fromCharCode(65 + optIdx)}. ${escapeHtml(opt)}</span>
                  <i class="quiz-icon fa-regular fa-circle text-gray-300"></i>
                </button>
              `).join('')}
            </div>
            <div id="quiz-exp-${lesson.id}-${pIdx}" class="hidden mt-3 p-3 bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 text-xs rounded-lg border border-blue-200 dark:border-blue-800/50">
              <i class="fa-solid fa-circle-info mr-1"></i> <strong>Giải thích:</strong> ${escapeHtml(p.explain)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </article>
  `;
}

function buildHtml() {
  const content = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Trung Quốc 8 — Sách Kết Nối Tri Thức | CodeHub Learning</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            gray: {
              850: '#151c2c',
              950: '#070b14'
            },
            china: {
              red: '#dc2626',
              gold: '#eab308'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Noto Serif SC"', 'serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-serif { font-family: 'Noto Serif SC', serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
  </style>
</head>
<body class="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col">

  <!-- Top Sticky Navbar -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Logo & Breadcrumb -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-all">
            <span class="font-serif font-black text-lg">中</span>
          </div>
          <div>
            <h1 class="text-base font-extrabold text-gray-900 dark:text-white flex items-center gap-1.5 leading-none">
              Tiếng Trung Quốc 8
              <span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300">Ngoại ngữ 1</span>
            </h1>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Kết nối tri thức với cuộc sống (16 Bài học)</p>
          </div>
        </a>
      </div>

      <!-- Quick Action Badges -->
      <div class="hidden md:flex items-center gap-3">
        <button onclick="openModal('modal-hanzi')" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold hover:bg-amber-100 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-book-open"></i> Sổ tay Chữ Hán
        </button>
        <button onclick="openModal('modal-grammar')" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold hover:bg-blue-100 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-table-list"></i> 17 Điểm Ngữ Pháp
        </button>
        <button onclick="openModal('modal-exam')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-bold shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-graduation-cap"></i> Trạng Nguyên (60:00)
        </button>
      </div>

      <!-- Search & Controls -->
      <div class="flex items-center gap-2">
        <button onclick="openModal('modal-search')" class="p-2 w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all" title="Tìm kiếm nhanh (⌘K)">
          <i class="fa-solid fa-magnifying-glass text-sm"></i>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all" title="Chuyển chế độ sáng/tối">
          <i id="themeIcon" class="fa-solid fa-moon text-sm"></i>
        </button>
        <a href="../index.html" class="p-2 w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all" title="Trang chủ">
          <i class="fa-solid fa-house text-sm"></i>
        </a>
      </div>
    </div>
  </header>

  <!-- Main Container with Sidebar & Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Left Navigation Sidebar -->
      <aside class="w-full lg:w-72 shrink-0">
        <div class="sticky top-24 bg-white dark:bg-gray-850 rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-6">
          <div>
            <div class="flex items-center justify-between text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
              <span>Mục lục 16 bài học</span>
              <span id="progress-text" class="text-china-red">0 / 16</span>
            </div>
            <!-- Progress Bar -->
            <div class="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Nav Items -->
          <nav class="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
            ${themes.map(t => `
              <div>
                <a href="#${t.id}" class="flex items-center justify-between py-1.5 px-2 rounded-lg font-bold text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-${t.color}-600 dark:hover:text-${t.color}-400">
                  <span class="flex items-center gap-2">
                    <i class="fa-solid ${t.icon} text-${t.color}-500"></i> ${t.code}
                  </span>
                  <i class="fa-solid fa-chevron-down text-[10px]"></i>
                </a>
                <ul class="mt-1 space-y-1 pl-3 border-l-2 border-gray-100 dark:border-gray-800">
                  ${t.lessons.map(l => `
                    <li>
                      <a href="#${l.id}" class="group flex items-center justify-between py-1 px-2 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-china-red transition-all">
                        <span class="truncate font-semibold">${l.unit}: ${l.title}</span>
                        <i id="nav-chk-${l.id}" class="fa-regular fa-circle text-[10px] text-gray-300 dark:text-gray-600 group-hover:text-china-red"></i>
                      </a>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </nav>

          <!-- Quick Sidebar Tools -->
          <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
            <button onclick="openModal('modal-hanzi')" class="w-full py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-left text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between">
              <span class="flex items-center gap-2"><i class="fa-solid fa-font text-amber-500"></i> Sổ tay Chiết tự Chữ Hán</span>
              <i class="fa-solid fa-arrow-right text-[10px] text-gray-400"></i>
            </button>
            <button onclick="openModal('modal-grammar')" class="w-full py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-left text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between">
              <span class="flex items-center gap-2"><i class="fa-solid fa-table-list text-blue-500"></i> Bảng 17 Ngữ pháp</span>
              <i class="fa-solid fa-arrow-right text-[10px] text-gray-400"></i>
            </button>
            <button onclick="openModal('modal-exam')" class="w-full py-2 px-3 rounded-xl bg-red-50 dark:bg-red-950/40 text-left text-xs font-bold text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 flex items-center justify-between">
              <span class="flex items-center gap-2"><i class="fa-solid fa-award text-china-red"></i> Đấu trường Trạng Nguyên</span>
              <i class="fa-solid fa-play text-[10px]"></i>
            </button>
          </div>
        </div>
      </aside>

      <!-- Right Main Content Area -->
      <main class="flex-1 min-w-0">
        <!-- Hero Banner -->
        <section class="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 rounded-3xl p-6 md:p-10 text-white shadow-xl shadow-red-600/10 mb-10 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 opacity-10 select-none pointer-events-none text-white text-[160px] font-serif">
            华
          </div>
          <div class="relative z-10 max-w-2xl">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md mb-4">
              <i class="fa-solid fa-award"></i> Học liệu số chuẩn Bộ Giáo dục & Đào tạo
            </span>
            <h2 class="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Khám Phá Tiếng Trung 8
            </h2>
            <p class="text-sm md:text-base text-red-100 mt-2 font-medium leading-relaxed">
              Trọn bộ 4 Chủ điểm • Đủ 16 Bài học (Bài 1 đến Bài 16) • 12 Bản đồ tư duy trực quan • 410+ Audio phát âm giọng đọc chuẩn Bắc Kinh • Bộ đề thi Trạng Nguyên 40 câu có bấm giờ 60:00.
            </p>

            <div class="flex flex-wrap items-center gap-3 mt-6">
              <button onclick="document.getElementById('theme-1').scrollIntoView({behavior: 'smooth'})" class="px-5 py-2.5 rounded-xl bg-white text-china-red font-bold text-sm shadow-md hover:bg-red-50 hover:scale-105 transition-all flex items-center gap-2">
                <i class="fa-solid fa-book-open"></i> Bắt đầu học ngay
              </button>
              <button onclick="openModal('modal-exam')" class="px-5 py-2.5 rounded-xl bg-red-950/40 border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all flex items-center gap-2">
                <i class="fa-solid fa-clock"></i> Thi Trạng Nguyên 60:00
              </button>
            </div>
          </div>
        </section>

        <!-- Dynamic Theme Content -->
        ${themes.map(t => `
          <section id="${t.id}" class="mb-14 scroll-mt-24">
            <!-- Theme Header -->
            <div class="flex items-center gap-3 mb-6 pb-3 border-b-2 border-gray-200 dark:border-gray-800">
              <div class="w-12 h-12 rounded-2xl bg-${t.color}-100 dark:bg-${t.color}-950/60 text-${t.color}-600 dark:text-${t.color}-400 flex items-center justify-center text-xl shadow-sm">
                <i class="fa-solid ${t.icon}"></i>
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-${t.color}-600 dark:text-${t.color}-400">${t.code}</span>
                <h3 class="text-xl md:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2.5">
                  <span class="font-serif text-china-red dark:text-red-400">${t.chinese}</span>
                  <span class="text-gray-400 font-light">|</span>
                  <span>${t.title}</span>
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${t.desc}</p>
              </div>
            </div>

            <!-- Lessons in Theme -->
            <div class="space-y-4">
              ${t.lessons.map(l => renderLesson(l, t)).join('')}
            </div>
          </section>
        `).join('')}

      </main>
    </div>
  </div>

  <!-- SỔ TAY CHỮ HÁN MODAL -->
  <div id="modal-hanzi" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-lg">
            <i class="fa-solid fa-brush"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Sổ Tay Chiết Tự & Nguồn Gốc Chữ Hán</h3>
            <p class="text-xs text-gray-400">Quy luật tạo chữ tượng hình & hội ý trong SGK Tiếng Trung 8</p>
          </div>
        </div>
        <button onclick="closeModal('modal-hanzi')" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="mt-6 space-y-6">
        ${hanziManual.map(h => `
          <div class="p-5 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl border border-amber-200/60 dark:border-amber-800/60">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-4">
                <span class="text-5xl font-serif font-black text-china-red dark:text-red-400">${h.char}</span>
                <div>
                  <h4 class="text-lg font-bold text-gray-900 dark:text-white">${h.char} [${h.pinyin}] — Âm Hán Việt: ${h.hv.toUpperCase()}</h4>
                  <p class="text-xs font-semibold text-amber-700 dark:text-amber-400">Nghĩa gốc: ${h.meaning}</p>
                </div>
              </div>
              <button onclick="speakChinese('${h.char}')" class="w-9 h-9 rounded-xl bg-white dark:bg-gray-800 text-amber-600 shadow-sm flex items-center justify-center">
                <i class="fa-solid fa-volume-high text-sm"></i>
              </button>
            </div>
            
            <p class="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-white/70 dark:bg-gray-900/60 p-3 rounded-lg border border-amber-100 dark:border-amber-900/40">
              <i class="fa-solid fa-lightbulb text-amber-500 mr-1.5"></i> <strong>Nguồn gốc cấu tạo:</strong> ${h.origin}
            </p>

            <div class="mt-4 space-y-2">
              <span class="text-xs font-bold text-gray-400 uppercase tracking-wider block">Các chữ phát triển liên quan:</span>
              ${h.derivations.map(d => `
                <div class="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 flex items-start gap-3">
                  <span class="text-2xl font-serif font-bold text-china-red dark:text-red-400 shrink-0">${d.char}</span>
                  <div class="flex-1">
                    <span class="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">${d.pinyin}</span>
                    <p class="text-xs text-gray-700 dark:text-gray-300 mt-0.5 leading-relaxed">${d.explain}</p>
                  </div>
                  <button onclick="speakChinese('${d.char}')" class="text-gray-400 hover:text-china-red text-xs p-1">
                    <i class="fa-solid fa-volume-high"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- BẢNG 17 ĐIỂM NGỮ PHÁP MODAL -->
  <div id="modal-grammar" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center text-lg">
            <i class="fa-solid fa-table-list"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Bảng Tổng Hợp 17 Trọng Điểm Ngữ Pháp</h3>
            <p class="text-xs text-gray-400">Tra cứu nhanh cấu trúc, ví dụ minh họa và bài học tương ứng (Bài 1 — 16)</p>
          </div>
        </div>
        <button onclick="closeModal('modal-grammar')" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="mt-6 overflow-x-auto">
        <table class="w-full text-left text-xs text-gray-600 dark:text-gray-300">
          <thead class="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 uppercase font-bold text-[11px] border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th class="p-3 w-12 text-center">STT</th>
              <th class="p-3">Điểm Ngôn Ngữ</th>
              <th class="p-3">Công Thức / Bản Chất Ngữ Pháp</th>
              <th class="p-3 w-28 text-center">Bài</th>
              <th class="p-3">Ví Dụ Mẫu</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
            ${grammarSummary.map(g => `
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="p-3 font-mono text-center font-bold text-blue-600">${g.no}</td>
                <td class="p-3 font-bold text-gray-900 dark:text-white">${g.point}</td>
                <td class="p-3 font-mono text-xs text-gray-700 dark:text-gray-300">${g.formula}</td>
                <td class="p-3 text-center"><span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold">${g.lesson}</span></td>
                <td class="p-3 italic text-gray-600 dark:text-gray-400">${g.eg}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ĐẤU TRƯỜNG TRẠNG NGUYÊN 40 CÂU (60:00) MODAL -->
  <div id="modal-exam" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 shrink-0">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 dark:bg-red-950/60 text-china-red dark:text-red-400">
            <i class="fa-solid fa-trophy"></i> Đấu Trường Trạng Nguyên Tiếng Trung 8
          </span>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1">Đề Thi Trắc Nghiệm Toàn Diện 40 Câu</h3>
          <p class="text-xs text-gray-400">Bao quát toàn bộ 16 bài học • Bấm giờ chuẩn 60 phút • Chấm điểm & giải thích cặn kẽ</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-4 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-china-red font-mono font-bold text-lg flex items-center gap-2">
            <i class="fa-solid fa-stopwatch animate-pulse"></i>
            <span id="exam-timer">60:00</span>
          </div>
          <button onclick="closeModal('modal-exam')" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div id="exam-content" class="mt-6 space-y-6 flex-1 overflow-y-auto pr-2">
        ${examQuestions.map((eq, qIdx) => `
          <div class="p-5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200/70 dark:border-gray-700/70" id="exam-card-${qIdx}">
            <div class="flex items-center justify-between text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">
              <span>${eq.part}</span>
              <span>Câu ${qIdx + 1} / 40</span>
            </div>
            <p class="text-base font-bold text-gray-900 dark:text-white mb-4 whitespace-pre-line">${escapeHtml(eq.q)}</p>
            <div class="grid sm:grid-cols-2 gap-2.5">
              ${eq.opts.map((opt, oIdx) => `
                <label class="exam-option-label flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-china-red cursor-pointer transition-all">
                  <input type="radio" name="exam_q_${qIdx}" value="${oIdx}" class="mt-1 text-china-red focus:ring-china-red">
                  <span class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-relaxed">${String.fromCharCode(65 + oIdx)}. ${escapeHtml(opt)}</span>
                </label>
              `).join('')}
            </div>
            <div id="exam-explain-${qIdx}" class="hidden mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200">
              <strong>Giải thích:</strong> ${escapeHtml(eq.explain)}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Exam Result Banner (Hidden initially) -->
      <div id="exam-result-banner" class="hidden p-6 mt-6 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-xl shadow-lg text-center">
        <h4 class="text-2xl font-black">KẾT QUẢ BÀI THI</h4>
        <p class="text-base mt-1" id="exam-score-text">Bạn đạt: 0 / 40 câu đúng</p>
        <p class="text-xs text-red-100 mt-0.5" id="exam-rank-text">Danh hiệu: Trạng Nguyên Tiếng Trung 8</p>
      </div>

      <!-- Exam Footer Controls -->
      <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
        <button onclick="resetExam()" class="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100">
          Làm lại từ đầu
        </button>
        <button id="btn-submit-exam" onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-bold shadow-md hover:opacity-95 transition-all">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <!-- TÌM KIẾM NHANH MODAL (⌘K) -->
  <div id="modal-search" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
      <div class="relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3.5 text-gray-400"></i>
        <input id="searchInput" type="text" placeholder="Tìm kiếm trong 16 bài học (từ vựng, ngữ pháp, chữ Hán)..." oninput="performSearch()" class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:border-china-red">
      </div>
      <div id="searchResults" class="mt-4 max-h-72 overflow-y-auto space-y-2 text-xs">
        <p class="text-gray-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu nhanh...</p>
      </div>
      <div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-400 flex items-center justify-between">
        <span>Nhấn Esc để đóng</span>
        <button onclick="closeModal('modal-search')" class="text-china-red font-bold">Đóng</button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white font-serif font-black">
          中
        </div>
        <div>
          <p class="text-sm font-bold text-gray-900 dark:text-white">Nền tảng Học số Tiếng Trung Quốc 8</p>
          <p class="text-xs text-gray-400">Bộ Kết nối tri thức với cuộc sống • Trọn bộ 16 Bài học (Bài 1 — Bài 16)</p>
        </div>
      </div>
      <p class="text-xs text-gray-400 text-center md:text-right">
        CodeHub Learning Platform © 2026. Thiết kế bài giảng số tương tác cao.
      </p>
    </div>
  </footer>

  <!-- Client-side Logic Script -->
  <script>
    // 1. Dark Mode
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }
    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun text-amber-400 text-sm' : 'fa-solid fa-moon text-sm';
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }

    // 2. Web Speech API (zh-CN)
    function speakChinese(text) {
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ chức năng phát âm Web Speech API.');
        return;
      }
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'zh-CN';
      utter.rate = 0.88; // Tốc độ chuẩn cho học sinh lớp 8
      window.speechSynthesis.speak(utter);
    }

    // 3. Dialogue Sequential Audio
    function playFullDialogue(dialogueContainerId) {
      const container = document.getElementById(dialogueContainerId);
      if (!container) return;
      const lines = Array.from(container.querySelectorAll('.dialogue-line'));
      if (!lines.length) return;

      window.speechSynthesis.cancel();
      let idx = 0;
      function speakNext() {
        if (idx >= lines.length) {
          lines.forEach(l => l.classList.remove('ring-2', 'ring-emerald-500'));
          return;
        }
        lines.forEach(l => l.classList.remove('ring-2', 'ring-emerald-500'));
        lines[idx].classList.add('ring-2', 'ring-emerald-500');
        lines[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        const text = lines[idx].getAttribute('data-zh');
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'zh-CN';
        utter.rate = 0.85;
        utter.onend = () => {
          idx++;
          setTimeout(speakNext, 300);
        };
        utter.onerror = () => {
          idx++;
          setTimeout(speakNext, 300);
        };
        window.speechSynthesis.speak(utter);
      }
      speakNext();
    }

    // 4. Modals
    function openModal(id) {
      const m = document.getElementById(id);
      if (m) {
        m.classList.remove('hidden');
        m.classList.add('flex');
        if (id === 'modal-search') {
          setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
        }
        if (id === 'modal-exam' && !examTimerInterval) {
          startExamTimer();
        }
      }
    }
    function closeModal(id) {
      const m = document.getElementById(id);
      if (m) {
        m.classList.add('hidden');
        m.classList.remove('flex');
      }
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ['modal-hanzi', 'modal-grammar', 'modal-exam', 'modal-search'].forEach(closeModal);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
    });

    // 5. Interactive Practice Check
    function checkLessonQuiz(lessonId, pIdx, chosenIdx, correctIdx) {
      const container = document.getElementById(\`quiz-\${lessonId}-\${pIdx}\`);
      if (!container) return;
      const buttons = container.querySelectorAll('.quiz-opt');
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        const icon = btn.querySelector('.quiz-icon');
        if (idx === correctIdx) {
          btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
          if (icon) icon.className = 'quiz-icon fa-solid fa-circle-check text-emerald-500';
        } else if (idx === chosenIdx) {
          btn.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-700', 'dark:bg-rose-950/40', 'dark:text-rose-300');
          if (icon) icon.className = 'quiz-icon fa-solid fa-circle-xmark text-rose-500';
        }
      });
      const exp = document.getElementById(\`quiz-exp-\${lessonId}-\${pIdx}\`);
      if (exp) exp.classList.remove('hidden');
    }

    // 6. Progress Tracking (Total 16 lessons: Bài 1 to Bài 16)
    const completedLessons = new Set(JSON.parse(localStorage.getItem('tt8_completed') || '[]'));
    function markLessonComplete(lessonId) {
      if (completedLessons.has(lessonId)) {
        completedLessons.delete(lessonId);
      } else {
        completedLessons.add(lessonId);
      }
      localStorage.setItem('tt8_completed', JSON.stringify([...completedLessons]));
      updateProgressUI();
    }
    function updateProgressUI() {
      const totalLessons = 16;
      const count = completedLessons.size;
      const pct = Math.round((count / totalLessons) * 100);
      const bar = document.getElementById('progress-bar');
      const text = document.getElementById('progress-text');
      if (bar) bar.style.width = pct + '%';
      if (text) text.innerText = \`\${count} / \${totalLessons}\`;

      document.querySelectorAll('[id^=\"btn-comp-\"]').forEach(btn => {
        const id = btn.id.replace('btn-comp-', '');
        if (completedLessons.has(id)) {
          btn.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-500\"></i> Đã hoàn thành';
          btn.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-300', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        } else {
          btn.innerHTML = '<i class=\"fa-regular fa-circle-check\"></i> Đánh dấu đã học';
          btn.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-300', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        }
      });

      document.querySelectorAll('[id^=\"nav-chk-\"]').forEach(icon => {
        const id = icon.id.replace('nav-chk-', '');
        if (completedLessons.has(id)) {
          icon.className = 'fa-solid fa-circle-check text-xs text-emerald-500';
        } else {
          icon.className = 'fa-regular fa-circle text-[10px] text-gray-300 dark:text-gray-600';
        }
      });
    }
    updateProgressUI();

    // 7. Exam Logic (40 questions, 60 mins)
    const examQuestionsData = ${JSON.stringify(examQuestions)};
    let examTimeLeft = 60 * 60; // 3600 seconds
    let examTimerInterval = null;

    function startExamTimer() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        examTimeLeft--;
        const mins = Math.floor(examTimeLeft / 60);
        const secs = examTimeLeft % 60;
        const display = \`\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;
        const timerEl = document.getElementById('exam-timer');
        if (timerEl) timerEl.innerText = display;

        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          alert('Đã hết 60 phút làm bài! Hệ thống tự động nộp bài.');
          submitExam();
        }
      }, 1000);
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;

      examQuestionsData.forEach((q, idx) => {
        const radios = document.getElementsByName(\`exam_q_\${idx}\`);
        let selectedVal = null;
        for (const r of radios) {
          if (r.checked) {
            selectedVal = parseInt(r.value, 10);
            break;
          }
        }
        
        // Show explanation
        const exp = document.getElementById(\`exam-explain-\${idx}\`);
        if (exp) exp.classList.remove('hidden');

        // Color labels
        const card = document.getElementById(\`exam-card-\${idx}\`);
        const labels = card ? card.querySelectorAll('.exam-option-label') : [];
        labels.forEach((lbl, oIdx) => {
          if (oIdx === q.ans) {
            lbl.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-200');
          } else if (oIdx === selectedVal && selectedVal !== q.ans) {
            lbl.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-200');
          }
        });

        if (selectedVal === q.ans) {
          score++;
        }
      });

      // Show Banner
      const banner = document.getElementById('exam-result-banner');
      const scoreText = document.getElementById('exam-score-text');
      const rankText = document.getElementById('exam-rank-text');
      if (banner && scoreText && rankText) {
        banner.classList.remove('hidden');
        scoreText.innerText = \`Bạn đạt: \${score} / 40 câu đúng (\${Math.round((score / 40) * 100)}%)\`;
        let rank = 'Cần cố gắng thêm';
        if (score >= 36) rank = 'Xuất sắc — Trạng Nguyên Tiếng Trung 8!';
        else if (score >= 30) rank = 'Giỏi — Bảng Nhãn Tiếng Trung 8';
        else if (score >= 24) rank = 'Khá — Thám Hoa Tiếng Trung 8';
        rankText.innerText = \`Danh hiệu: \${rank}\`;
        banner.scrollIntoView({ behavior: 'smooth' });
      }

      const submitBtn = document.getElementById('btn-submit-exam');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }
    }

    function resetExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimeLeft = 60 * 60;
      examQuestionsData.forEach((q, idx) => {
        const radios = document.getElementsByName(\`exam_q_\${idx}\`);
        for (const r of radios) r.checked = false;
        const exp = document.getElementById(\`exam-explain-\${idx}\`);
        if (exp) exp.classList.add('hidden');
        const card = document.getElementById(\`exam-card-\${idx}\`);
        const labels = card ? card.querySelectorAll('.exam-option-label') : [];
        labels.forEach(lbl => {
          lbl.classList.remove('bg-emerald-50', 'border-emerald-500', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-200', 'bg-rose-50', 'border-rose-500', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-200');
        });
      });
      const banner = document.getElementById('exam-result-banner');
      if (banner) banner.classList.add('hidden');
      const submitBtn = document.getElementById('btn-submit-exam');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      startExamTimer();
    }

    // 8. Search Engine
    const searchData = [
      ${themes.flatMap(t => t.lessons.flatMap(l => [
        { type: 'Bài học', title: `${l.unit} — ${l.title} (${l.meaning})`, url: `#${l.id}`, sub: l.goals },
        ...(l.vocab || []).map(v => ({ type: 'Từ vựng', title: `${v.hanzi} [${v.pinyin}]`, url: `#${l.id}`, sub: `${v.meaning} (Hán Việt: ${v.hv})` })),
        ...(l.grammar || []).map(g => ({ type: 'Ngữ pháp', title: g.title, url: `#${l.id}`, sub: g.structure }))
      ])).map(item => JSON.stringify(item)).join(',\n      ')}
    ];

    function performSearch() {
      const q = document.getElementById('searchInput').value.trim().toLowerCase();
      const resContainer = document.getElementById('searchResults');
      if (!resContainer) return;

      if (!q) {
        resContainer.innerHTML = '<p class="text-gray-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu nhanh...</p>';
        return;
      }

      const matches = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        (item.sub && item.sub.toLowerCase().includes(q))
      ).slice(0, 15);

      if (!matches.length) {
        resContainer.innerHTML = '<p class="text-gray-400 text-center py-6">Không tìm thấy kết quả nào phù hợp.</p>';
        return;
      }

      resContainer.innerHTML = matches.map(m => \`
        <a href="\${m.url}" onclick="closeModal('modal-search')" class="block p-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 hover:bg-red-50 dark:hover:bg-red-950/40 border border-gray-100 dark:border-gray-700/60 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-bold text-gray-900 dark:text-white text-xs">\${m.title}</span>
            <span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">\${m.type}</span>
          </div>
          <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 truncate">\${m.sub || ''}</p>
        </a>
      \`).join('');
    }
  </script>
</body>
</html>`;

  const outPath1 = path.resolve(__dirname, '../courses/tiengtrung_8.html');
  const outPath2 = path.resolve(__dirname, '../courses/chinese_8.html');

  fs.writeFileSync(outPath1, content, 'utf8');
  fs.writeFileSync(outPath2, content, 'utf8');

  console.log('Successfully generated with full 16 lessons (Bài 1 — Bài 16):');
  console.log('1.', outPath1, 'Size:', (fs.statSync(outPath1).size / 1024).toFixed(2), 'KB');
  console.log('2.', outPath2, 'Size:', (fs.statSync(outPath2).size / 1024).toFixed(2), 'KB');
}

buildHtml();
