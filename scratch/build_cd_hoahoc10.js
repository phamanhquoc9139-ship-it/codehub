// scratch/build_cd_hoahoc10.js
// Master build script for Chuyên đề Hóa học 10 (KNTT) - 3 Chuyên đề & 11 Bài học

const fs = require('fs');
const path = require('path');

const lessons = require('./cd_hoahoc10_data.js');
const svgs = require('./cd_hoahoc10_svgs.js');
const reviewArena = require('./cd_hoahoc10_review_arena.js');

function formatText(text) {
  if (!text) return '';
  return text;
}

function renderLessons() {
  return lessons.map(lesson => `
    <article id="bai-${lesson.id}" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24 transition-all">
      <!-- Lesson Header -->
      <div class="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            ${lesson.cdTitle}
          </span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            Bài ${lesson.id} / 11
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Bài ${lesson.id}. ${lesson.name}
        </h2>
        <p class="text-slate-600 dark:text-slate-300 mt-2 text-sm sm:text-base leading-relaxed font-medium">
          ${lesson.subtitle}
        </p>
      </div>

      <!-- Phần A: 4 Trụ cột then chốt -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <i class="fa-solid fa-cube"></i>
          <span>Phần A. Kiến thức cốt lõi (4 trụ cột then chốt)</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${lesson.pillars.map((p, pIdx) => `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-3 hover:border-emerald-500/50 transition">
              <div>
                <div class="flex items-center gap-2.5 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                    <i class="fa-solid ${p.icon || 'fa-atom'}"></i>
                  </div>
                  <h3 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                    ${p.title}
                  </h3>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-2.5">
                  ${p.desc}
                </p>
                <ul class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  ${p.points.map(pt => `
                    <li class="flex items-start gap-2">
                      <i class="fa-solid fa-circle-check text-emerald-600 dark:text-emerald-400 text-[11px] mt-0.5 shrink-0"></i>
                      <span class="leading-relaxed">${formatText(pt)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="pt-2 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-400 font-semibold flex items-center justify-between">
                <span>Trụ cột ${pIdx + 1} / 4</span>
                <span class="text-emerald-700 dark:text-emerald-300">Chuẩn KNTT</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Phần B: Sơ đồ tư duy / Mô hình trực quan (SVG) -->
      <div class="space-y-3">
        <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <i class="fa-solid fa-project-diagram"></i>
          <span>Phần B. Sơ đồ tư duy & Mô hình trực quan</span>
        </div>
        <div class="p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          ${svgs[lesson.id] || '<div class="p-8 text-center text-slate-400">Đang cập nhật mô hình SVG...</div>'}
        </div>
      </div>

      <!-- Phần C: Tình huống thực nghiệm & Bài toán vận dụng -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <i class="fa-solid fa-flask-vial"></i>
          <span>Phần C. Tình huống thực nghiệm & Bài toán vận dụng (2 Cases)</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${lesson.cases.map((c, cIdx) => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  Case Study 0${cIdx + 1}
                </span>
                <span class="text-xs text-slate-600 dark:text-slate-400 font-bold">Vận dụng thực tiễn</span>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                ${c.title}
              </h4>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong class="text-slate-900 dark:text-white">Đặt vấn đề:</strong> ${formatText(c.scenario)}
              </div>
              <div class="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed whitespace-pre-line font-mono">
                ${formatText(c.solution)}
              </div>
              <div class="flex items-start gap-2 text-[11px] text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800/40">
                <i class="fa-solid fa-lightbulb text-amber-500 mt-0.5 shrink-0"></i>
                <span><strong>Bí quyết:</strong> ${formatText(c.tip)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Phần D: Luyện tập tương tác (3 Quizzes) -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <i class="fa-solid fa-circle-question"></i>
          <span>Phần D. Luyện tập tương tác (3 câu hỏi củng cố tại chỗ)</span>
        </div>
        <div class="space-y-4">
          ${lesson.quizzes.map((q, qIdx) => `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3" id="quiz-${lesson.id}-${qIdx}">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-400">Câu hỏi ${qIdx + 1} / 3</span>
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">Tự động chấm điểm</span>
              </div>
              <p class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                ${formatText(q.question)}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                ${q.options.map((opt, optIdx) => `
                  <button type="button" onclick="checkInlineQuiz(${lesson.id}, ${qIdx}, ${optIdx}, ${q.correct})" class="quiz-opt-${lesson.id}-${qIdx} p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-left text-xs text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-slate-700 transition flex items-start gap-2.5 cursor-pointer">
                    <span class="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      ${['A', 'B', 'C', 'D'][optIdx]}
                    </span>
                    <span class="leading-relaxed">${formatText(opt)}</span>
                  </button>
                `).join('')}
              </div>
              <div id="quiz-explain-${lesson.id}-${qIdx}" class="hidden p-3.5 rounded-xl text-xs leading-relaxed border mt-2"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function buildHtml() {
  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chuyên Đề Học Tập Hóa Học 10 (KNTT) - Chuẩn GDPT 2018 | CodeHub</title>
  <meta name="description" content="Chuyên đề học tập Hóa học 10 bộ sách Kết nối tri thức với cuộc sống. Hệ thống hóa đầy đủ 3 chuyên đề, 11 bài học: Cơ sở hóa học, Hóa học phòng chống cháy nổ và Công nghệ thông tin phân tử.">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            slate: {
              850: '#111827',
            }
          }
        }
      }
    }
  </script>

  <!-- KaTeX for Rich Chemistry Math Formula Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <!-- FontAwesome & Google Fonts -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    code, pre {
      font-family: 'JetBrains Mono', monospace;
    }
    .katex {
      font-size: 1.05em;
    }
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-track {
      background: transparent;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb {
      background: #334155;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- Top Global Header -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-black text-lg group">
          <span class="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition">
            <i class="fa-solid fa-atom"></i>
          </span>
          <span class="tracking-tight text-slate-900 dark:text-white">Hóa Học 10</span>
        </a>
        <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
          KNTT
        </span>
      </div>

      <!-- Live Search Box -->
      <div class="flex-1 max-w-md hidden md:block relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input type="text" id="course-search" oninput="filterLessons(this.value)" placeholder="Tìm kiếm khái niệm, Lewis, VSEPR, phân hạch, tam giác cháy, ChemSketch..." class="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-transparent focus:border-emerald-500 focus:outline-none transition">
      </div>

      <!-- Action buttons -->
      <div class="flex items-center gap-2">
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Chuyển chế độ sáng/tối">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
        <a href="#arena-section" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Đấu trường 20 câu</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Reading Progress Bar -->
  <div id="read-progress" class="fixed top-16 left-0 h-1 bg-emerald-500 z-50 transition-all duration-150" style="width: 0%;"></div>

  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white p-6 sm:p-10 shadow-lg">
      <div class="relative z-10 max-w-3xl space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-md text-emerald-100 border border-white/20">
          <i class="fa-solid fa-certificate text-emerald-300"></i>
          <span>BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</span>
        </div>
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          KIẾN THỨC ĐẦY ĐỦ – CHUYÊN ĐỀ HỌC TẬP HÓA HỌC 10
        </h1>
        <p class="text-emerald-100 text-sm sm:text-base leading-relaxed font-medium">
          Hệ thống hóa toàn diện theo đủ <strong>3 Chuyên đề & 11 Bài học</strong>: Cơ sở hóa học hiện đại (Liên kết, VSEPR, Phản ứng hạt nhân, Năng lượng hoạt hóa, Gibbs), Hóa học trong phòng chống cháy nổ (Tam giác cháy, Điểm chớp cháy, Chữa cháy) và Thực hành công nghệ thông tin (ChemSketch 3D, Yenka ảo, MOPAC lượng tử).
        </p>

        <!-- 4 Badges metrics -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div class="text-xl sm:text-2xl font-black text-white">11</div>
            <div class="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Bài học cốt lõi</div>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div class="text-xl sm:text-2xl font-black text-emerald-300">44</div>
            <div class="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Trụ cột kiến thức</div>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div class="text-xl sm:text-2xl font-black text-teal-300">22</div>
            <div class="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Tình huống thực tế</div>
          </div>
          <div class="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
            <div class="text-xl sm:text-2xl font-black text-amber-300">33+20</div>
            <div class="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Câu hỏi trắc nghiệm</div>
          </div>
        </div>
      </div>

      <!-- Background decorative circle -->
      <div class="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>
    </div>
  </section>

  <!-- Main Container: Sidebar + Lessons Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col lg:flex-row gap-8 items-start">
    
    <!-- Left Sticky Sidebar (Navigation) -->
    <aside class="w-full lg:w-72 shrink-0 lg:sticky lg:top-20 z-30">
      <div class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-5">
        
        <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <span class="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">Mục lục chuyên đề</span>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">11 Bài</span>
        </div>

        <!-- Navigation Links -->
        <nav class="space-y-4 max-h-[calc(100vh-14rem)] overflow-y-auto scrollbar-thin pr-1 text-xs sm:text-sm">
          
          <!-- Chuyên đề 1 -->
          <div class="space-y-1.5">
            <div class="font-extrabold text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-atom text-[11px]"></i>
              <span>CĐ1. Cơ sở hóa học</span>
            </div>
            ${lessons.filter(l => l.cd === 1).map(l => `
              <a href="#bai-${l.id}" class="block px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium text-xs">
                <span class="font-bold text-slate-400 dark:text-slate-500 mr-1">B${l.id}.</span>${l.name}
              </a>
            `).join('')}
          </div>

          <!-- Chuyên đề 2 -->
          <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div class="font-extrabold text-teal-700 dark:text-teal-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-fire text-[11px]"></i>
              <span>CĐ2. Phòng chống cháy nổ</span>
            </div>
            ${lessons.filter(l => l.cd === 2).map(l => `
              <a href="#bai-${l.id}" class="block px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition font-medium text-xs">
                <span class="font-bold text-slate-400 dark:text-slate-500 mr-1">B${l.id}.</span>${l.name}
              </a>
            `).join('')}
          </div>

          <!-- Chuyên đề 3 -->
          <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div class="font-extrabold text-cyan-700 dark:text-cyan-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-laptop-code text-[11px]"></i>
              <span>CĐ3. Hóa học & CNTT</span>
            </div>
            ${lessons.filter(l => l.cd === 3).map(l => `
              <a href="#bai-${l.id}" class="block px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium text-xs">
                <span class="font-bold text-slate-400 dark:text-slate-500 mr-1">B${l.id}.</span>${l.name}
              </a>
            `).join('')}
          </div>

          <!-- Special Quick Links -->
          <div class="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs font-bold">
            <a href="#summary-table" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <i class="fa-solid fa-table-list text-emerald-500"></i> Bảng tổng kết 11 bài
            </a>
            <a href="#formula-section" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <i class="fa-solid fa-calculator text-teal-500"></i> Công thức cốt lõi tra nhanh
            </a>
            <a href="#notes-section" class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Phân biệt dễ nhầm & mẹo
            </a>
            <a href="#arena-section" class="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700 transition shadow-xs">
              <i class="fa-solid fa-trophy"></i> Đấu trường 20 câu (45p)
            </a>
          </div>
        </nav>
      </div>
    </aside>

    <!-- Main Course Lessons Column -->
    <section class="flex-1 min-w-0 space-y-8">
      
      <!-- Render 11 Lessons -->
      ${renderLessons()}

      <!-- Section: Bảng tổng kết 11 bài học -->
      <section id="summary-table" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-table-list text-emerald-600 dark:text-emerald-400"></i>
              <span>BẢNG TỔNG KẾT TOÀN DIỆN 11 BÀI HỌC</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Đối chiếu kiến thức trọng tâm, công thức cốt lõi và ứng dụng thực tiễn của từng bài</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">11 Bài Học</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[980px] text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white">
                <th class="p-3.5 font-bold w-12 text-center shrink-0">STT</th>
                <th class="p-3.5 font-bold w-44 min-w-[170px]">Tên bài học</th>
                <th class="p-3.5 font-bold w-28 min-w-[100px]">Chuyên đề</th>
                <th class="p-3.5 font-bold min-w-[280px]">Khái niệm & Quy luật cốt lõi</th>
                <th class="p-3.5 font-bold w-56 min-w-[200px]">Công thức / Cơ chế</th>
                <th class="p-3.5 font-bold min-w-[220px]">Kĩ năng & Ứng dụng</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              ${reviewArena.summaryTable.map(row => `
                <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                  <td class="p-3 font-black text-center text-emerald-600 dark:text-emerald-400 align-top">${row.bai}</td>
                  <td class="p-3 font-bold text-slate-900 dark:text-white align-top"><a href="#bai-${row.bai}" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition">${row.name}</a></td>
                  <td class="p-3 text-slate-500 dark:text-slate-400 text-xs align-top whitespace-nowrap">${row.cd}</td>
                  <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed align-top">${formatText(row.concept)}</td>
                  <td class="p-3 font-mono text-xs text-emerald-700 dark:text-emerald-300 font-semibold align-top">${row.formula}</td>
                  <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed font-medium align-top">${formatText(row.app)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section: Bảng công thức tra nhanh -->
      <section id="formula-section" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-calculator text-emerald-600 dark:text-emerald-400"></i>
              <span>BẢNG CÔNG THỨC & QUY TẮC CỐT LÕI TRA NHANH</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Hệ thống công thức bảo toàn hạt nhân, Arrhenius, Gibbs, Enthalpy cháy và các ngưỡng quy chuẩn</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">Chuẩn KNTT</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[860px] text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white">
                <th class="p-3.5 font-bold w-52 min-w-[180px]">Tên công thức / Quy tắc</th>
                <th class="p-3.5 font-bold text-emerald-700 dark:text-emerald-300 min-w-[220px]">Biểu thức / Quy tắc</th>
                <th class="p-3.5 font-bold w-32 min-w-[110px]">Đơn vị / Điều kiện</th>
                <th class="p-3.5 font-bold min-w-[250px]">Ghi chú & Ý nghĩa đại lượng</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              ${reviewArena.formulaTable.map(item => `
                <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                  <td class="p-3 font-bold text-slate-900 dark:text-white align-top">${formatText(item.name)}</td>
                  <td class="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm align-top">${item.formula}</td>
                  <td class="p-3 text-slate-500 dark:text-slate-400 text-xs align-top">${item.unit}</td>
                  <td class="p-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed align-top">${formatText(item.note)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section: Phân biệt dễ nhầm & Mẹo -->
      <section id="notes-section" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <i class="fa-solid fa-triangle-exclamation text-amber-500"></i>
              <span>PHÂN BIỆT DỄ NHẦM & GỢI Ý VẬN DỤNG</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Các lỗi học sinh thường mắc phải và phương pháp tư duy chính xác trong đề thi</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">Cẩm nang thi</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${reviewArena.mistakesAndTips.map(n => `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
              <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-circle-exclamation text-amber-500"></i>
                <span>${formatText(n.title)}</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${formatText(n.desc)}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section: Đấu trường Trạng Nguyên 20 câu -->
      <section id="arena-section" class="bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-8 scroll-mt-24 border border-emerald-800/50">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-800/60 pb-6">
          <div class="space-y-1">
            <div class="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950">
              <i class="fa-solid fa-trophy"></i> ĐẤU TRƯỜNG TRẠNG NGUYÊN
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-white">Đấu Trường 20 Câu Tổng Hợp</h2>
            <p class="text-emerald-200 text-xs sm:text-sm">Bộ đề khảo sát kiến thức toàn diện 3 chuyên đề Hóa học 10 chuẩn GDPT 2018 (Thời gian: 45 phút)</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="px-4 py-2 rounded-2xl bg-black/40 border border-emerald-700 text-center">
              <div class="text-[10px] uppercase font-bold text-emerald-300">Thời gian</div>
              <div id="arena-timer" class="text-xl font-black font-mono text-amber-400">45:00</div>
            </div>
          </div>
        </div>

        <!-- 20 Arena Questions -->
        <div class="space-y-6">
          ${reviewArena.arenaQuestions.map((q, idx) => `
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4" id="arena-q-${idx}">
              <div class="flex items-center justify-between text-xs text-emerald-300 font-bold">
                <span>Câu ${idx + 1} / 20</span>
                <span>0,5 điểm</span>
              </div>
              <p class="text-sm sm:text-base font-bold text-white leading-relaxed">
                ${formatText(q.q)}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${q.options.map((opt, optIdx) => `
                  <button type="button" onclick="selectArenaOpt(${idx}, ${optIdx})" class="arena-btn-${idx} p-3 rounded-xl border border-white/15 bg-white/5 text-left text-xs sm:text-sm text-slate-200 hover:bg-emerald-500/20 hover:border-emerald-400 transition flex items-start gap-2.5 cursor-pointer">
                    <span class="w-5 h-5 rounded-full bg-white/10 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                      ${['A', 'B', 'C', 'D'][optIdx]}
                    </span>
                    <span class="leading-relaxed">${formatText(opt)}</span>
                  </button>
                `).join('')}
              </div>
              <div id="arena-explain-${idx}" class="hidden p-4 rounded-xl text-xs sm:text-sm leading-relaxed border mt-3"></div>
            </div>
          `).join('')}
        </div>

        <!-- Submit Button & Score Display -->
        <div class="pt-6 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button id="arena-submit-btn" onclick="submitArenaExam()" class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition flex items-center justify-center gap-2 cursor-pointer">
            <i class="fa-solid fa-paper-plane"></i>
            <span>Nộp bài & Chấm điểm</span>
          </button>
          <div id="arena-score-banner" class="hidden text-center sm:text-right space-y-1"></div>
        </div>
      </section>

    </section>
  </main>

  <!-- Global Footer -->
  <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-10 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
      <div class="flex items-center gap-2">
        <span class="font-bold text-slate-700 dark:text-slate-300">CodeHub Educational Platform</span>
        <span>•</span>
        <span>Chuyên đề Hóa học 10 Kết nối tri thức</span>
      </div>
      <div>Hệ thống hóa đầy đủ 3 chuyên đề & 11 bài học chuẩn GDPT 2018</div>
    </div>
  </footer>

  <!-- Client-side Interactive JavaScript -->
  <script>
    // KaTeX Math Auto-Render Trigger with Retry
    let mathRetryCount = 0;
    function renderMathOnPage() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\\\[', right: '\\\\]', display: true },
            { left: '\\\\(', right: '\\\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } else if (mathRetryCount++ < 50) {
        setTimeout(renderMathOnPage, 100);
      }
    }
    window.addEventListener('DOMContentLoaded', renderMathOnPage);
    window.addEventListener('load', renderMathOnPage);

    // Theme toggle
    function initTheme() {
      if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-sun';
      } else {
        document.documentElement.classList.remove('dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-moon';
      }
    }
    initTheme();

    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-moon';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = 'fa-solid fa-sun';
      }
    }

    // Scroll progress bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const bar = document.getElementById('read-progress');
      if (bar) bar.style.width = scrolled + '%';
    });

    // Inline Quiz Interactive Logic
    const completedQuizzes = new Set();
    function checkInlineQuiz(lessonNum, qIdx, selectedOpt, correctOpt) {
      const buttons = document.querySelectorAll('.quiz-opt-' + lessonNum + '-' + qIdx);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:border-emerald-500', 'hover:bg-emerald-50/50', 'dark:hover:bg-slate-700');
        if (idx === correctOpt) {
          btn.className = 'p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-left text-xs text-emerald-900 dark:text-emerald-200 font-bold flex items-start gap-2.5';
        } else if (idx === selectedOpt && selectedOpt !== correctOpt) {
          btn.className = 'p-3 rounded-xl border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-left text-xs text-rose-900 dark:text-rose-200 font-bold flex items-start gap-2.5';
        } else {
          btn.className = 'p-3 rounded-xl border border-slate-200 dark:border-slate-800 opacity-50 text-left text-xs text-slate-500 flex items-start gap-2.5';
        }
      });

      const expBox = document.getElementById('quiz-explain-' + lessonNum + '-' + qIdx);
      if (expBox) {
        expBox.classList.remove('hidden');
        if (selectedOpt === correctOpt) {
          expBox.className = 'p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expBox.innerHTML = '<strong>Chính xác!</strong> ' + (qExplains[lessonNum + '-' + qIdx] || '');
        } else {
          expBox.className = 'p-3 rounded-xl text-xs sm:text-sm leading-relaxed border mt-2 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expBox.innerHTML = '<strong>Chưa chính xác!</strong> Đáp án đúng là <strong>' + ['A', 'B', 'C', 'D'][correctOpt] + '</strong>. ' + (qExplains[lessonNum + '-' + qIdx] || '');
        }
        renderMathOnPage();
      }

      completedQuizzes.add(lessonNum + '-' + qIdx);
    }

    const qExplains = ${JSON.stringify(
      lessons.reduce((acc, l) => {
        l.quizzes.forEach((q, idx) => {
          acc[`${l.id}-${idx}`] = q.explanation;
        });
        return acc;
      }, {})
    )};

    // Arena Exam Countdown & Scoring Logic
    let arenaTimeRemaining = 45 * 60; // 45 mins
    let arenaTimerInterval = null;
    let arenaSubmitted = false;
    const arenaAnswers = {};

    function startArenaTimer() {
      const timerEl = document.getElementById('arena-timer');
      arenaTimerInterval = setInterval(() => {
        if (arenaTimeRemaining <= 0) {
          clearInterval(arenaTimerInterval);
          if (!arenaSubmitted) submitArenaExam();
          return;
        }
        arenaTimeRemaining--;
        const mins = Math.floor(arenaTimeRemaining / 60);
        const secs = arenaTimeRemaining % 60;
        if (timerEl) {
          timerEl.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        }
      }, 1000);
    }
    startArenaTimer();

    function selectArenaOpt(qIdx, optIdx) {
      if (arenaSubmitted) return;
      arenaAnswers[qIdx] = optIdx;
      const buttons = document.querySelectorAll('.arena-btn-' + qIdx);
      buttons.forEach((btn, idx) => {
        if (idx === optIdx) {
          btn.className = 'arena-btn-' + qIdx + ' p-3 rounded-xl border-2 border-amber-400 bg-amber-400/20 text-left text-xs sm:text-sm text-white font-bold flex items-start gap-2.5 cursor-pointer';
        } else {
          btn.className = 'arena-btn-' + qIdx + ' p-3 rounded-xl border border-white/15 bg-white/5 text-left text-xs sm:text-sm text-slate-200 hover:bg-emerald-500/20 transition flex items-start gap-2.5 cursor-pointer';
        }
      });
    }

    const arenaCorrectAnswers = ${JSON.stringify(reviewArena.arenaQuestions.map(q => q.correct))};
    const arenaExplains = ${JSON.stringify(reviewArena.arenaQuestions.map(q => q.explain))};

    function submitArenaExam() {
      if (arenaSubmitted) return;
      arenaSubmitted = true;
      clearInterval(arenaTimerInterval);

      let score = 0;
      for (let i = 0; i < arenaCorrectAnswers.length; i++) {
        const correct = arenaCorrectAnswers[i];
        const userChoice = arenaAnswers[i];
        if (userChoice === correct) score++;

        const buttons = document.querySelectorAll('.arena-btn-' + i);
        buttons.forEach((btn, idx) => {
          btn.disabled = true;
          if (idx === correct) {
            btn.className = 'p-3 rounded-xl border-2 border-emerald-400 bg-emerald-500/30 text-white font-bold text-xs sm:text-sm flex items-start gap-2.5';
          } else if (idx === userChoice && userChoice !== correct) {
            btn.className = 'p-3 rounded-xl border-2 border-rose-500 bg-rose-500/30 text-rose-200 font-bold text-xs sm:text-sm flex items-start gap-2.5';
          } else {
            btn.className = 'p-3 rounded-xl border border-white/10 opacity-40 text-slate-400 text-xs sm:text-sm flex items-start gap-2.5';
          }
        });

        const expBox = document.getElementById('arena-explain-' + i);
        if (expBox) {
          expBox.classList.remove('hidden');
          if (userChoice === correct) {
            expBox.className = 'p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed border mt-3 bg-emerald-950/60 border-emerald-500/60 text-emerald-200';
            expBox.innerHTML = '<strong>Chính xác! (+0,5đ)</strong> ' + arenaExplains[i];
          } else {
            expBox.className = 'p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed border mt-3 bg-rose-950/60 border-rose-500/60 text-rose-200';
            expBox.innerHTML = '<strong>Chưa chính xác!</strong> Đáp án đúng là <strong>' + ['A', 'B', 'C', 'D'][correct] + '</strong>. ' + arenaExplains[i];
          }
        }
      }

      renderMathOnPage();

      // Display Score
      const final10 = (score / 20 * 10).toFixed(1);
      const scoreBanner = document.getElementById('arena-score-banner');
      scoreBanner.classList.remove('hidden');
      scoreBanner.innerHTML = \`
        <div class="text-3xl font-black text-amber-400"><i class="fa-solid fa-trophy mr-2"></i>KẾT QUẢ THI ĐẤU</div>
        <div class="text-xl font-bold text-white">Bạn đạt: <span class="text-emerald-400 text-3xl font-black">\${score}/20</span> câu đúng (\${final10}/10 điểm)</div>
        <p class="text-xs sm:text-sm text-emerald-200 max-w-xl mx-auto leading-relaxed">
          \${score >= 18 ? 'Xuất sắc! Bạn xứng đáng nhận danh hiệu Trạng Nguyên Hóa học 10!' : score >= 14 ? 'Rất tốt! Bạn nắm vững kiến thức trọng tâm cả 3 chuyên đề.' : 'Cố gắng lên! Hãy xem lại phần giải thích chi tiết và các sơ đồ mô hình ở trên.'}
        </p>
      \`;

      const submitBtn = document.getElementById('arena-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.className = 'px-8 py-3.5 rounded-2xl bg-slate-700 text-slate-400 font-bold text-base cursor-not-allowed';
        submitBtn.innerHTML = '<i class="fa-solid fa-check-double mr-2"></i>Đã nộp bài';
      }
    }

    // Search filter
    function filterLessons(query) {
      const q = query.trim().toLowerCase();
      lessonsData.forEach(l => {
        const el = document.getElementById('bai-' + l.id);
        if (!el) return;
        if (!q) {
          el.style.display = '';
          return;
        }
        const text = (l.name + ' ' + l.subtitle + ' ' + l.cdTitle + ' ' + l.pillars.map(p => p.title + ' ' + p.points.join(' ')).join(' ')).toLowerCase();
        if (text.includes(q)) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    }
    const lessonsData = ${JSON.stringify(lessons.map(l => ({ id: l.id, name: l.name, subtitle: l.subtitle, cdTitle: l.cdTitle, pillars: l.pillars })))};
  </script>
</body>
</html>
`;
}

const html = buildHtml();
const targetFiles = [
  path.join(__dirname, '../courses/chuyende_hoahoc_10.html'),
  path.join(__dirname, '../courses/chuyende_hoa_10.html'),
  path.join(__dirname, '../courses/chuyende_hoahoc10.html')
];

targetFiles.forEach(file => {
  fs.writeFileSync(file, html, 'utf8');
  console.log('Wrote ' + Buffer.byteLength(html, 'utf8') + ' bytes to ' + file);
});

console.log('Build Chuyên đề Hóa học 10 completed successfully!');
