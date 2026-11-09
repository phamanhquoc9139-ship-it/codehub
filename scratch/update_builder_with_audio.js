const fs = require('fs');
const path = require('path');

const { unite0, unites } = require('./tiengphap10_data.js');
const svgs = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiengphap10_svgs.json'), 'utf8'));
const reviewArena = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiengphap10_review_arena.json'), 'utf8'));
const vocabAudio = JSON.parse(fs.readFileSync(path.join(__dirname, 'tiengphap10_vocab_audio.json'), 'utf8'));

console.log('Building courses/tiengphap_10.html with comprehensive vocabulary audio & speech synthesis...');

// Helper to escape text for JavaScript onclick single quotes
function escJs(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ').trim();
}

function renderVocabGrid(list) {
  return `
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
    ${list.map(v => `
    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-2xs hover:border-blue-400 dark:hover:border-blue-500 transition group">
      <div>
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-black text-slate-900 dark:text-white text-sm sm:text-base tracking-tight truncate">${v.fr}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold border border-blue-200/60 dark:border-blue-900">${v.type}</span>
            </div>
            <span class="text-[11px] font-mono text-slate-400 dark:text-slate-500 block mt-0.5">${v.ipa}</span>
          </div>
          
          <button type="button" onclick="speakFrench('${escJs(v.fr)}')" class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white flex items-center justify-center text-xs transition shrink-0 shadow-sm cursor-pointer" title="Nghe phát âm chuẩn Pháp">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-snug">${v.vn}</p>
      </div>

      <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div class="flex items-start justify-between gap-2">
          <p class="text-[11px] text-blue-700 dark:text-blue-300 font-medium italic leading-relaxed flex-1">« ${v.ex} »</p>
          <button type="button" onclick="speakFrench('${escJs(v.ex)}')" class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center transition shrink-0 cursor-pointer" title="Nghe cả câu">
            <i class="fa-solid fa-play text-[9px]"></i>
          </button>
        </div>
        <p class="text-[10.5px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">${v.exVn}</p>
      </div>
    </div>
    `).join('')}
  </div>`;
}

const htmlContent = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Pháp 10 – Kết nối tri thức với cuộc sống &bull; Phát âm Audio fr-FR & Đấu trường Trạng Nguyên</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eff6ff',
              100: '#dbeafe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554'
            }
          }
        }
      }
    }
  </script>

  <!-- Font Awesome Free 6.5.1 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- KaTeX -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(37, 99, 235, 0.3);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(37, 99, 235, 0.6);
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">

  <!-- Top Scroll Progress Bar -->
  <div id="page-scroll-bar" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 z-50 transition-all duration-75" style="width: 0%;"></div>

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 group">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-rose-600 flex items-center justify-center text-white text-lg font-black group-hover:scale-105 transition shadow-sm">
            <i class="fa-solid fa-flag"></i>
          </div>
          <div>
            <span class="text-[10px] uppercase tracking-widest font-extrabold text-blue-700 dark:text-blue-400 block leading-tight">CodeHub Academy</span>
            <span class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">Tiếng Pháp 10</span>
          </div>
        </a>
        <span class="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
          Kết nối tri thức &bull; Audio fr-FR &bull; Unité 0 - 6
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2">
        <button onclick="openSearchModal()" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer">
          <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
          <span class="hidden sm:inline">Tra cứu</span>
        </button>

        <a href="#grammar-summary" class="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 text-xs font-bold transition flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300">
          <i class="fa-solid fa-book-bookmark text-indigo-500"></i>
          <span class="hidden md:inline">Ngữ pháp</span>
        </a>

        <a href="#comm-summary" class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 text-xs font-bold transition flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
          <i class="fa-solid fa-comments text-emerald-500"></i>
          <span class="hidden lg:inline">Giao tiếp</span>
        </a>

        <a href="#arena-section" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-crown text-amber-200"></i>
          <span>Trạng Nguyên (45p)</span>
        </a>

        <!-- Dark mode toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition cursor-pointer">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative bg-gradient-to-b from-blue-900 via-indigo-950 to-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-wrap items-center gap-2 mb-4">
        <span class="px-3 py-1 rounded-full text-xs font-black bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-widest flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Bộ Sách Kết Nối Tri Thức Với Cuộc Sống
        </span>
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
          <i class="fa-solid fa-volume-high text-emerald-400"></i>
          Tích hợp âm thanh phát âm giọng chuẩn Pháp (Web Speech API fr-FR)
        </span>
      </div>

      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
        KIẾN THỨC ĐẦY ĐỦ &bull; TIẾNG PHÁP 10
      </h1>

      <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6 font-medium">
        Hệ thống hóa toàn bộ kiến thức Unité 0 đến Unité 6 theo chuẩn SGK Tiếng Pháp 10: phát triển 4 kĩ năng Nghe &bull; Nói &bull; Đọc &bull; Viết. Tích hợp nút phát âm giọng đọc bản xứ Pháp (<code class="text-emerald-400">fr-FR</code>) cho từng từ vựng và câu đàm thoại mẫu, 7 Sơ đồ Vector SVG, Bảng 12 chuyên đề ngữ pháp, Bảng 19 mẫu giao tiếp và Đấu trường Trạng Nguyên 45 phút.
      </p>

      <!-- Stat Badges -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
        <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div class="text-2xl font-black text-blue-400">7</div>
          <div class="text-xs text-slate-300 font-semibold">Đơn vị học (Unité 0-6)</div>
        </div>
        <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div class="text-2xl font-black text-indigo-400">56+</div>
          <div class="text-xs text-slate-300 font-semibold">Thẻ từ vựng có Audio</div>
        </div>
        <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div class="text-2xl font-black text-emerald-400">19</div>
          <div class="text-xs text-slate-300 font-semibold">Mẫu câu có giọng đọc</div>
        </div>
        <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div class="text-2xl font-black text-amber-400">20</div>
          <div class="text-xs text-slate-300 font-semibold">Câu hỏi Trạng Nguyên</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Container -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
    
    <!-- Sidebar Navigation -->
    <aside class="lg:col-span-1">
      <div class="sticky top-20 space-y-4">
        
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 class="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
            <span>MỤC LỤC CHUYÊN ĐỀ</span>
            <span class="text-blue-600 dark:text-blue-400 font-bold">7 Unités</span>
          </h2>

          <nav class="space-y-1 text-xs font-medium">
            <a href="#unite-0" class="block p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition">
              <span class="font-bold text-blue-600 dark:text-blue-400">U0:</span> Bienvenue au lycée !
            </a>
            <a href="#unite-1" class="block p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition">
              <span class="font-bold text-rose-600 dark:text-rose-400">U1:</span> Un look qui marque !
            </a>
            <a href="#unite-2" class="block p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition">
              <span class="font-bold text-blue-600 dark:text-blue-400">U2:</span> Le quotidien au lycée
            </a>
            <a href="#unite-3" class="block p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition">
              <span class="font-bold text-cyan-600 dark:text-cyan-400">U3:</span> Le monde des médias
            </a>
            <a href="#unite-4" class="block p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition">
              <span class="font-bold text-emerald-600 dark:text-emerald-400">U4:</span> Voyage et découverte
            </a>
            <a href="#unite-5" class="block p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition">
              <span class="font-bold text-pink-600 dark:text-pink-400">U5:</span> Loisirs et distractions
            </a>
            <a href="#unite-6" class="block p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition">
              <span class="font-bold text-amber-600 dark:text-amber-400">U6:</span> En famille
            </a>
          </nav>

          <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs font-semibold">
            <a href="#grammar-summary" class="flex items-center gap-2 p-2 rounded-xl text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition">
              <i class="fa-solid fa-table-list"></i>
              <span>Bảng tổng hợp ngữ pháp</span>
            </a>
            <a href="#comm-summary" class="flex items-center gap-2 p-2 rounded-xl text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition">
              <i class="fa-solid fa-comments"></i>
              <span>19 Chức năng giao tiếp</span>
            </a>
            <a href="#mistakes-summary" class="flex items-center gap-2 p-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <span>8 Lỗi sai hay gặp & Mẹo</span>
            </a>
            <a href="#arena-section" class="flex items-center gap-2 p-2 rounded-xl text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition">
              <i class="fa-solid fa-trophy"></i>
              <span>Đấu trường Trạng Nguyên</span>
            </a>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border border-blue-200 dark:border-slate-700 text-xs">
          <div class="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300 mb-1.5">
            <i class="fa-solid fa-headphones text-blue-600"></i>
            <span>Hướng dẫn phát âm</span>
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Nhấp vào biểu tượng chiếc loa <i class="fa-solid fa-volume-high text-blue-500"></i> để nghe từ vựng hoặc nút <i class="fa-solid fa-play text-blue-500 text-[10px]"></i> để nghe phát âm toàn bộ câu đàm thoại chuẩn giọng Pháp bản xứ.
          </p>
        </div>

      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="lg:col-span-3 space-y-12">
      
      <!-- ==================== UNITÉ 0 ==================== -->
      <section id="unite-0" class="scroll-mt-20 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              Khởi đầu năm học
            </span>
            <div class="flex items-center gap-3 mt-1">
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                ${unite0.title}
              </h2>
              <button onclick="speakFrench('Bienvenue au lycée !')" class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition flex items-center justify-center text-xs cursor-pointer shadow-xs" title="Nghe tiêu đề">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              ${unite0.subtitle}
            </p>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            A1+/A2.1
          </span>
        </div>

        <!-- SVG Banner -->
        <div class="my-4">
          ${svgs.u0}
        </div>

        <!-- Description & Key Points -->
        <div class="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 text-xs sm:text-sm space-y-3">
          <p class="font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            ${unite0.description}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            ${unite0.keyPoints.map(kp => `
            <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-blue-200/50 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 mb-1">
                  <strong class="text-blue-600 dark:text-blue-400 block font-bold">${kp.title}</strong>
                  <button type="button" onclick="speakFrench('${escJs(kp.french)}')" class="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition" title="Nghe câu mẫu">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 italic mb-1.5 font-medium">${kp.french}</div>
                <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">${kp.content}</p>
              </div>
            </div>
            `).join('')}
          </div>
        </div>

        <!-- Vocabulary Grid with Audio -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <i class="fa-solid fa-headphones text-blue-500"></i>
              <span>Thư viện từ vựng & Phát âm Audio fr-FR (Unité 0)</span>
            </h3>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">${vocabAudio.u0.length} từ vựng</span>
          </div>

          ${renderVocabGrid(vocabAudio.u0)}
        </div>
      </section>

      <!-- ==================== UNITÉ 1 TO 6 ==================== -->
      ${unites.map(u => `
      <section id="unite-${u.id}" class="scroll-mt-20 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
        
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                Unité ${u.id}
              </span>
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">4 Leçons &bull; Văn hóa & Dự án</span>
            </div>
            <div class="flex items-center gap-3 mt-1">
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                ${u.title}
              </h2>
              <button onclick="speakFrench('${escJs(u.title.split('–')[1] || u.title)}')" class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition flex items-center justify-center text-xs cursor-pointer shadow-xs" title="Nghe tiêu đề bài">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Chủ đề: ${u.theme}
            </p>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            Niveau A2
          </span>
        </div>

        <!-- SVG Banner -->
        <div class="my-2">
          ${svgs['u' + u.id] || ''}
        </div>

        <!-- 4 Leçons Grid -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <i class="fa-solid fa-layer-group text-blue-500"></i>
            <span>Nội dung 4 bài học cốt lõi</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${u.lessons.map(l => `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 space-y-3 hover:border-blue-400/50 transition">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-blue-600 dark:text-blue-400">
                  Leçon ${l.num}
                </span>
                <button type="button" onclick="speakFrench('${escJs(l.title)}')" class="text-xs text-slate-400 hover:text-blue-600 transition flex items-center gap-1 cursor-pointer">
                  <i class="fa-solid fa-volume-high"></i>
                  <span>Nghe tiêu đề</span>
                </button>
              </div>
              <h3 class="text-base font-bold text-slate-900 dark:text-white leading-snug">
                ${l.title}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 italic font-medium">
                ${l.focus}
              </p>
              
              <!-- Points -->
              <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-0.5"><i class="fa-solid fa-book text-[10px]"></i></span>
                  <span><strong class="text-slate-900 dark:text-white">Từ vựng:</strong> ${l.vocab}</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 mt-0.5"><i class="fa-solid fa-code text-[10px]"></i></span>
                  <span><strong class="text-slate-900 dark:text-white">Ngữ pháp:</strong> ${l.grammar}</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 mt-0.5"><i class="fa-solid fa-comments text-[10px]"></i></span>
                  <span><strong class="text-slate-900 dark:text-white">Giao tiếp:</strong> ${l.communication}</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-500 mt-0.5"><i class="fa-solid fa-volume-high text-[10px]"></i></span>
                  <span><strong class="text-slate-900 dark:text-white">Phát âm:</strong> ${l.phonetics}</span>
                </li>
              </ul>
            </div>
            `).join('')}
          </div>
        </div>

        <!-- Vocabulary Grid with Audio fr-FR -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <i class="fa-solid fa-headphones text-blue-500"></i>
              <span>Thư viện từ vựng & Phát âm Audio fr-FR (Unité ${u.id})</span>
            </h3>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">${(vocabAudio['u' + u.id] || []).length} từ vựng</span>
          </div>

          ${renderVocabGrid(vocabAudio['u' + u.id] || [])}
        </div>

        <!-- Culture & Project -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 space-y-2 text-xs sm:text-sm">
            <div class="flex items-center gap-2 font-black text-indigo-900 dark:text-indigo-300">
              <i class="fa-solid fa-earth-europe text-indigo-600"></i>
              <span>VĂN HÓA & KHÔNG GIAN PHÁP NGỮ</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              ${u.culture}
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-2 text-xs sm:text-sm">
            <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-300">
              <i class="fa-solid fa-diagram-project text-rose-600"></i>
              <span>DỰ ÁN HỌC TẬP (PROJET)</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              ${u.project}
            </p>
          </div>
        </div>

        <!-- 2 Case Studies with Audio for Dialogue -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <i class="fa-solid fa-flask text-teal-500"></i>
            <span>Tình huống thực hành & Vận dụng (2 Case Studies)</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${u.cases.map(c => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                  Case Study
                </span>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-bold">Thực hành đàm thoại</span>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                ${c.title}
              </h4>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong class="text-slate-900 dark:text-white">Đặt vấn đề:</strong> ${c.scenario}
              </div>
              <div class="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-950 dark:text-blue-200 leading-relaxed font-mono whitespace-pre-line relative group">
                ${c.solution}
              </div>
            </div>
            `).join('')}
          </div>
        </div>

        <!-- 3 Inline Quizzes -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <i class="fa-solid fa-circle-question text-emerald-500"></i>
            <span>Luyện tập tương tác (3 câu củng cố tại chỗ)</span>
          </div>

          <div class="space-y-4">
            ${u.quizzes.map((q, qIdx) => `
            <div class="quiz-item p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3" id="quiz-${u.id}-${qIdx}" data-correct="${q.correct}">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Câu hỏi ${qIdx + 1} / 3</span>
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">Tự động chấm điểm</span>
              </div>
              <p class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                ${q.question}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                ${q.options.map((opt, oIdx) => `
                <button type="button" onclick="checkInlineQuiz(this, ${oIdx}, ${q.correct})" class="quiz-btn p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-left text-xs text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-700 transition flex items-start gap-2.5 cursor-pointer">
                  <span class="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    ${String.fromCharCode(65 + oIdx)}
                  </span>
                  <span class="leading-relaxed">${opt}</span>
                </button>
                `).join('')}
              </div>
              <div class="quiz-feedback hidden p-3 rounded-xl text-xs font-medium leading-relaxed"></div>
            </div>
            `).join('')}
          </div>
        </div>

      </section>
      `).join('')}

      <!-- ==================== TỔNG HỢP NGỮ PHÁP TRỌNG TÂM ==================== -->
      <section id="grammar-summary" class="scroll-mt-20 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                Tra cứu ngữ pháp
              </span>
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">12 Điểm trọng tâm toàn khóa</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              TỔNG HỢP NGỮ PHÁP TRỌNG TÂM
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Bảng đối chiếu quy tắc, công thức tổng quát và câu ví dụ minh họa chuẩn mực từ Unité 1 đến Unité 6
            </p>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            12 Chuyên đề
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[980px] table-fixed text-left text-xs sm:text-sm border-collapse" style="table-layout: fixed; min-width: 980px;">
            <colgroup>
              <col style="width: 50px;">
              <col style="width: 175px;">
              <col style="width: 95px;">
              <col style="width: 280px;">
              <col style="width: 190px;">
              <col style="width: 190px;">
            </colgroup>
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white">
                <th class="p-3.5 font-bold text-center">STT</th>
                <th class="p-3.5 font-bold">Chuyên đề ngữ pháp</th>
                <th class="p-3.5 font-bold">Đơn vị</th>
                <th class="p-3.5 font-bold">Quy tắc & Định nghĩa cốt lõi</th>
                <th class="p-3.5 font-bold">Công thức / Cấu trúc</th>
                <th class="p-3.5 font-bold">Ví dụ thực tế</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              ${reviewArena.grammarTable.map(item => `
              <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                <td class="p-3 font-black text-center text-indigo-600 dark:text-indigo-400 align-top">${item.stt}</td>
                <td class="p-3 font-bold text-slate-900 dark:text-white align-top break-words">${item.topic}</td>
                <td class="p-3 text-slate-500 dark:text-slate-400 text-xs align-top whitespace-nowrap">${item.unite}</td>
                <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed align-top break-words">${item.rule}</td>
                <td class="p-3 font-mono text-xs text-indigo-700 dark:text-indigo-300 font-semibold align-top break-words">${item.formula}</td>
                <td class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed font-medium align-top break-words">
                  <div class="flex items-start justify-between gap-1.5">
                    <span>${item.example}</span>
                    <button type="button" onclick="speakFrench('${escJs(item.example)}')" class="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 shrink-0 mt-0.5" title="Nghe câu ví dụ">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>
                </td>
              </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== BẢNG CHỨC NĂNG GIAO TIẾP VỚI AUDIO ==================== -->
      <section id="comm-summary" class="scroll-mt-20 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                Thực hành giao tiếp
              </span>
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">19 Tình huống đời sống thực &bull; Tích hợp Audio</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              BẢNG CHỨC NĂNG GIAO TIẾP (19 MẪU CÂU)
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Hệ thống mẫu câu giao tiếp tự nhiên phục vụ kiểm tra vấn đáp, thuyết trình và đối thoại thường nhật (bấm loa để nghe phát âm)
            </p>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            19 Tình huống có Audio
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[860px] table-fixed text-left text-xs sm:text-sm border-collapse" style="table-layout: fixed; min-width: 860px;">
            <colgroup>
              <col style="width: 50px;">
              <col style="width: 310px;">
              <col style="width: 500px;">
            </colgroup>
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white">
                <th class="p-3.5 font-bold text-center">STT</th>
                <th class="p-3.5 font-bold">Chức năng giao tiếp (Fonction de communication)</th>
                <th class="p-3.5 font-bold">Mẫu câu diễn đạt chuẩn mực & Ngữ cảnh (Audio fr-FR)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              ${reviewArena.communicationTable.map(item => `
              <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                <td class="p-3 font-black text-center text-emerald-600 dark:text-emerald-400 align-top">${item.stt}</td>
                <td class="p-3 font-bold text-slate-900 dark:text-white align-top break-words">${item.fn}</td>
                <td class="p-3 font-medium text-slate-700 dark:text-slate-200 leading-relaxed align-top break-words">
                  <div class="flex items-start justify-between gap-2">
                    <span class="text-blue-700 dark:text-blue-300 font-semibold">${item.phrase}</span>
                    <button type="button" onclick="speakFrench('${escJs(item.phrase)}')" class="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white flex items-center justify-center transition shrink-0 cursor-pointer shadow-xs" title="Nghe phát âm">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>
                </td>
              </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- ==================== 8 LỖI SAI HAY GẶP & MẸO ==================== -->
      <section id="mistakes-summary" class="scroll-mt-20 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 uppercase tracking-wider">
                Chiến thuật tránh bẫy
              </span>
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">8 Bẫy điểm số hay mắc</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              8 LỖI SAI HAY GẶP & MẸO ĐẠT ĐIỂM 10
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Phân tích các lỗi chuyển dịch ngôn ngữ mẹ đẻ sang tiếng Pháp và bí kíp làm bài thi tuyệt đối chính xác
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${reviewArena.mistakesAndTips.map(item => `
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 class="font-bold text-slate-900 dark:text-white text-sm">
              ${item.title}
            </h3>
            <div class="space-y-1.5 text-xs">
              <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200/80 dark:border-rose-900/50 font-mono">
                ${item.mistake}
              </div>
              <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-900/50 font-mono flex items-center justify-between gap-2">
                <span>${item.correct}</span>
                <button type="button" onclick="speakFrench('${escJs(item.correct.replace(' (ĐÚNG)', '').replace(' (ĐÚNG chuẩn mực)', '').replace(' (ĐÚNG bị động)', ''))}')" class="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 shrink-0" title="Nghe câu chuẩn">
                  <i class="fa-solid fa-volume-high text-xs"></i>
                </button>
              </div>
            </div>
            <div class="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
              <i class="fa-solid fa-lightbulb text-amber-500 mt-0.5 shrink-0"></i>
              <span class="leading-relaxed font-medium">${item.tip}</span>
            </div>
          </div>
          `).join('')}
        </div>
      </section>

      <!-- ==================== ĐẤU TRƯỜNG TRẠNG NGUYÊN ==================== -->
      <section id="arena-section" class="scroll-mt-20 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white border border-indigo-900/60 shadow-xl space-y-8">
        
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-800/60 pb-6">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-widest flex items-center gap-1.5">
                <i class="fa-solid fa-crown text-amber-400"></i>
                Đấu trường Khảo thí THPT
              </span>
              <span class="text-xs font-semibold text-slate-300">Chuẩn cấu trúc Đề thi Học kì & Olympic</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-white">
              ĐẤU TRƯỜNG TRẠNG NGUYÊN (20 CÂU &bull; 45 PHÚT)
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Bài thi tổng hợp kiểm tra năng lực ngữ pháp, từ vựng, chức năng giao tiếp và kĩ năng đọc hiểu. Hệ thống tự động đếm ngược, chấm điểm chuẩn hóa và hiển thị lời giải chi tiết sau khi nộp bài.
            </p>
          </div>

          <!-- Timer & Action -->
          <div class="flex items-center gap-3">
            <div class="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-2.5">
              <i class="fa-solid fa-clock text-amber-400 text-lg animate-pulse"></i>
              <div>
                <div class="text-[10px] uppercase font-bold text-slate-300">Thời gian còn lại</div>
                <div id="arena-timer" class="text-lg font-black text-amber-300 font-mono">45:00</div>
              </div>
            </div>

            <button id="arena-submit-btn" onclick="submitArenaExam()" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-black text-xs sm:text-sm shadow-lg transition active:scale-95 cursor-pointer">
              Nộp bài thi
            </button>
          </div>
        </div>

        <!-- 20 Arena Questions -->
        <div class="space-y-6" id="arena-questions-container">
          ${reviewArena.arenaQuestions.map((q, idx) => `
          <div class="arena-card p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-indigo-500/40 transition" id="arena-q-${idx}" data-correct="${q.correct}">
            <div class="flex items-start justify-between gap-3">
              <span class="text-sm sm:text-base font-bold text-white leading-relaxed">
                ${q.q}
              </span>
              <span class="shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                0.5 điểm
              </span>
            </div>

            <!-- Radio Options -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${q.options.map((opt, oIdx) => `
              <label class="arena-opt-label p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm text-slate-200 transition flex items-start gap-3 cursor-pointer">
                <input type="radio" name="arena_q_${idx}" value="${oIdx}" class="mt-0.5 text-blue-600 focus:ring-0">
                <span class="leading-relaxed">${opt}</span>
              </label>
              `).join('')}
            </div>

            <!-- Explanation Hidden until submit -->
            <div class="arena-explain hidden p-4 rounded-xl text-xs sm:text-sm leading-relaxed border font-medium"></div>
          </div>
          `).join('')}
        </div>

        <!-- Bottom Submit Button -->
        <div class="text-center pt-4">
          <button onclick="submitArenaExam()" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-600 to-indigo-600 hover:opacity-95 text-white font-black text-sm shadow-xl transition active:scale-95 cursor-pointer">
            <i class="fa-solid fa-paper-plane mr-2"></i>
            Hoàn tất và nộp bài thi
          </button>
        </div>

      </section>

    </div>
  </main>

  <!-- Search Modal -->
  <div id="search-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4 max-h-[85vh] flex flex-col">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <h3 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-magnifying-glass text-blue-600"></i>
          Tra cứu nhanh từ vựng & Ngữ pháp Tiếng Pháp 10
        </h3>
        <button onclick="closeSearchModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      
      <div class="relative">
        <input type="text" id="search-input" oninput="handleSearch()" placeholder="Nhập từ vựng tiếng Pháp hoặc tiếng Việt (vd: vêtement, QUI, futur simple...)" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white">
      </div>

      <div id="search-results" class="overflow-y-auto space-y-2 flex-1 pr-1 custom-scrollbar text-xs">
        <p class="text-slate-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu tức thì...</p>
      </div>
    </div>
  </div>

  <!-- Arena Score Result Modal -->
  <div id="result-modal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-center space-y-5">
      <div class="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-500 text-4xl shadow-inner">
        <i class="fa-solid fa-award"></i>
      </div>
      
      <div>
        <h3 class="text-2xl font-black text-slate-900 dark:text-white">Kết quả thi Trạng Nguyên</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Đấu trường Khảo thí Tiếng Pháp 10</p>
      </div>

      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-3">
        <div>
          <div class="text-xs text-slate-500 dark:text-slate-400 font-bold">Số câu đúng</div>
          <div id="result-correct-count" class="text-2xl font-black text-emerald-600 dark:text-emerald-400">0 / 20</div>
        </div>
        <div>
          <div class="text-xs text-slate-500 dark:text-slate-400 font-bold">Điểm số (Thang 10)</div>
          <div id="result-score" class="text-2xl font-black text-blue-600 dark:text-blue-400">0.0 / 10</div>
        </div>
      </div>

      <p id="result-feedback" class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium"></p>

      <button onclick="closeResultModal()" class="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider transition cursor-pointer">
        Xem lại đáp án và lời giải chi tiết
      </button>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
    <p class="font-bold text-slate-700 dark:text-slate-300">
      Khóa Học Tiếng Pháp 10 &bull; Bộ Sách Kết Nối Tri Thức Với Cuộc Sống &bull; CodeHub Academy
    </p>
    <p>Hệ thống học liệu kĩ thuật số chất lượng cao dành cho học sinh THPT chuyên ban và hệ 10 năm GDPT 2018.</p>
  </footer>

  <!-- Scripts -->
  <script>
    // 1. Web Speech API Speech Synthesis for French (fr-FR)
    function speakFrench(text) {
      if (!text) return;
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng Web Speech API.');
        return;
      }
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.88;
        utterance.pitch = 1.0;
        
        // Find French voice if available
        const voices = window.speechSynthesis.getVoices();
        const frenchVoice = voices.find(v => v.lang.startsWith('fr') || v.lang.includes('FR'));
        if (frenchVoice) {
          utterance.voice = frenchVoice;
        }
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn('Speech error:', err);
      }
    }
    // Initialize voices
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    // 2. KaTeX Auto-Render Trigger
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
      }
    }
    window.addEventListener('DOMContentLoaded', renderMathOnPage);
    window.addEventListener('load', renderMathOnPage);

    // 3. Dark Mode Toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // 4. Scroll Progress
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('page-scroll-bar');
      if (bar) bar.style.width = scrolled + '%';
    });

    // 5. Inline Quiz Checker
    function checkInlineQuiz(btn, selectedIdx, correctIdx) {
      const item = btn.closest('.quiz-item');
      if (item.getAttribute('data-answered') === 'true') return;
      item.setAttribute('data-answered', 'true');

      const allBtns = item.querySelectorAll('.quiz-btn');
      const feedback = item.querySelector('.quiz-feedback');

      allBtns.forEach((b, idx) => {
        b.classList.remove('hover:border-blue-500', 'hover:bg-blue-50/50');
        b.style.pointerEvents = 'none';
        if (idx === correctIdx) {
          b.classList.add('bg-emerald-100', 'dark:bg-emerald-950/80', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200');
        } else if (idx === selectedIdx) {
          b.classList.add('bg-rose-100', 'dark:bg-rose-950/80', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200');
        }
      });

      feedback.classList.remove('hidden');
      if (selectedIdx === correctIdx) {
        feedback.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border', 'border-emerald-200', 'text-emerald-800', 'dark:text-emerald-300');
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i><strong>Chính xác!</strong> Bạn đã chọn đáp án đúng chuẩn ngữ pháp.';
      } else {
        feedback.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border', 'border-rose-200', 'text-rose-800', 'dark:text-rose-300');
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-500 mr-1.5"></i><strong>Chưa chính xác!</strong> Hãy xem lại quy tắc ngữ pháp hoặc xem đáp án màu xanh lá.';
      }
    }

    // 6. Arena Countdown Timer (45 minutes)
    let arenaSeconds = 45 * 60;
    let arenaTimerInterval = setInterval(() => {
      if (arenaSeconds <= 0) {
        clearInterval(arenaTimerInterval);
        submitArenaExam();
        return;
      }
      arenaSeconds--;
      const mins = Math.floor(arenaSeconds / 60);
      const secs = arenaSeconds % 60;
      const el = document.getElementById('arena-timer');
      if (el) el.innerText = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }, 1000);

    const arenaExplanations = ${JSON.stringify(reviewArena.arenaQuestions.map(q => q.explain))};

    // 7. Arena Submit & Grading
    let arenaSubmitted = false;
    function submitArenaExam() {
      if (arenaSubmitted) return;
      arenaSubmitted = true;
      clearInterval(arenaTimerInterval);

      let correctCount = 0;
      const total = 20;

      for (let i = 0; i < total; i++) {
        const card = document.getElementById('arena-q-' + i);
        if (!card) continue;
        const correct = parseInt(card.getAttribute('data-correct'), 10);
        const radios = card.querySelectorAll('input[type="radio"]');
        let selected = -1;
        radios.forEach(r => {
          if (r.checked) selected = parseInt(r.value, 10);
          r.disabled = true;
        });

        const labels = card.querySelectorAll('.arena-opt-label');
        labels.forEach((lbl, oIdx) => {
          lbl.classList.remove('hover:bg-white/10');
          if (oIdx === correct) {
            lbl.classList.add('bg-emerald-600/30', 'border-emerald-500', 'text-emerald-200');
          } else if (oIdx === selected) {
            lbl.classList.add('bg-rose-600/30', 'border-rose-500', 'text-rose-200');
          }
        });

        const explainBox = card.querySelector('.arena-explain');
        explainBox.classList.remove('hidden');
        if (selected === correct) {
          correctCount++;
          explainBox.classList.add('bg-emerald-950/40', 'border-emerald-600/50', 'text-emerald-200');
          explainBox.innerHTML = '<strong class="text-emerald-400"><i class="fa-solid fa-circle-check mr-1"></i>ĐÚNG (+0.5đ):</strong> ' + arenaExplanations[i];
        } else {
          explainBox.classList.add('bg-rose-950/40', 'border-rose-600/50', 'text-rose-200');
          explainBox.innerHTML = '<strong class="text-rose-400"><i class="fa-solid fa-circle-xmark mr-1"></i>SAI:</strong> ' + arenaExplanations[i];
        }
      }

      const score = (correctCount * 0.5).toFixed(1);
      document.getElementById('result-correct-count').innerText = correctCount + ' / ' + total;
      document.getElementById('result-score').innerText = score + ' / 10';

      let fb = '';
      if (score >= 9.0) {
        fb = '🎉 Xuất sắc! Bạn nắm vững toàn diện ngữ pháp và giao tiếp Tiếng Pháp 10 bậc THPT!';
      } else if (score >= 7.0) {
        fb = '👏 Khá tốt! Bạn đã nắm vững các điểm ngữ pháp nền tảng. Hãy rà soát thêm các bẫy hay sai để đạt điểm tối đa.';
      } else {
        fb = '💪 Cố gắng lên! Hãy xem lại bảng tổng hợp ngữ pháp 12 chuyên đề và làm lại để cải thiện kết quả.';
      }
      document.getElementById('result-feedback').innerText = fb;
      document.getElementById('result-modal').classList.remove('hidden');
    }

    function closeResultModal() {
      document.getElementById('result-modal').classList.add('hidden');
    }

    // 8. Search Logic
    const searchData = ${JSON.stringify([
      ...reviewArena.grammarTable.map(g => ({ title: g.topic, detail: g.rule + ' ' + g.formula, link: '#grammar-summary' })),
      ...reviewArena.communicationTable.map(c => ({ title: c.fn, detail: c.phrase, link: '#comm-summary' })),
      ...reviewArena.mistakesAndTips.map(m => ({ title: m.title, detail: m.tip, link: '#mistakes-summary' })),
      ...Object.values(vocabAudio).flat().map(v => ({ title: v.fr + ' (' + v.type + ')', detail: v.vn + ' • ' + v.ex, link: '#unite-0' })),
      ...unites.flatMap(u => u.lessons.map(l => ({ title: 'Leçon ' + l.num + ': ' + l.title, detail: l.vocab + ' • ' + l.grammar, link: '#unite-' + u.id })))
    ])};

    function openSearchModal() {
      document.getElementById('search-modal').classList.remove('hidden');
      setTimeout(() => document.getElementById('search-input').focus(), 100);
    }
    function closeSearchModal() {
      document.getElementById('search-modal').classList.add('hidden');
    }
    function handleSearch() {
      const q = document.getElementById('search-input').value.toLowerCase().trim();
      const container = document.getElementById('search-results');
      if (!q) {
        container.innerHTML = '<p class="text-slate-400 text-center py-6">Nhập từ khóa để bắt đầu tra cứu tức thì...</p>';
        return;
      }
      const matches = searchData.filter(d => d.title.toLowerCase().includes(q) || d.detail.toLowerCase().includes(q));
      if (matches.length === 0) {
        container.innerHTML = '<p class="text-slate-400 text-center py-6">Không tìm thấy kết quả phù hợp với "' + q + '"</p>';
        return;
      }
      container.innerHTML = matches.slice(0, 8).map(m => \`
        <a href="\${m.link}" onclick="closeSearchModal()" class="block p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 transition">
          <div class="font-bold text-blue-600 dark:text-blue-400">\${m.title}</div>
          <div class="text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">\${m.detail}</div>
        </a>
      \`).join('');
    }
  </script>
</body>
</html>`;

const coursesDir = path.join(__dirname, '../courses');
const outMain = path.join(coursesDir, 'tiengphap_10.html');
const outAlias = path.join(coursesDir, 'tiengphap10.html');

fs.writeFileSync(outMain, htmlContent, 'utf8');
fs.writeFileSync(outAlias, htmlContent, 'utf8');

console.log('Successfully written both:');
console.log(' - ' + outMain);
console.log(' - ' + outAlias);
