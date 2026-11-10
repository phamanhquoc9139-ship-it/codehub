const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const backupPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/backups/pre-perf-opt-20261110/index.html';
const initial12Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/initial_12_cards.html';

let html = fs.readFileSync(backupPath, 'utf8');
const initial12Cards = fs.readFileSync(initial12Path, 'utf8');

// 1. Optimize <head>: meta description, canonical, svg favicon, preconnect, home.min.css, async fonts/FA, remove Pyodide & Tailwind CDN & 404 index.css
const oldHeadTarget = `<!-- Tailwind CSS via CDN -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- Custom Config for Tailwind -->
<script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#3b82f6',
                        secondary: '#10b981',
                        dark: '#1f2937',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
<link href="styles/index.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"></script>`;

const newHeadBlock = `<meta name="description" content="Học viện CodeHub (https://codehub.io.vn/) - Nền tảng học tập số tích hợp AI dành cho học sinh từ lớp 1 đến lớp 12. Học tập – Luyện tập – Sáng tạo."/>
<link rel="canonical" href="https://codehub.io.vn/"/>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'/%3E%3C/svg%3E"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin=""/>
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin=""/>
<link rel="stylesheet" href="styles/home.min.css?v=1"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" media="print" onload="this.media='all'"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" media="print" onload="this.media='all'"/>
<noscript>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
</noscript>`;

if (!html.includes(oldHeadTarget)) {
  console.error('Could not find oldHeadTarget!');
  process.exit(1);
}
html = html.replace(oldHeadTarget, newHeadBlock);

// 2. Fix Navbar & Login contrast & Main landmark opening
html = html.replace(
  '<a class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out" href="login.html">',
  '<a class="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out" href="login.html">'
);
html = html.replace(
  '</nav>\n<!-- Hero Section: balanced two-column layout -->',
  '</nav>\n<main id="main-content">\n<!-- Hero Section: balanced two-column layout -->'
);

// 3. Fix aria-prohibited-attr on decorative 3D canvas container
html = html.replace(
  '<div aria-label="Mạng neuron CodeHub chuyển động 3D" class="codehub-neural-panel">',
  '<div aria-hidden="true" class="codehub-neural-panel">'
);

// 4. Fix search input & clear button accessibility
html = html.replace(
  '<input autocomplete="off" class="w-full pl-10 pr-10 py-4 rounded-2xl text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 shadow-inner" aria-controls="liveSearchResults" aria-label="Tìm kiếm môn học" id="courseSearchInput"',
  '<input autocomplete="off" role="combobox" aria-expanded="false" aria-autocomplete="list" class="w-full pl-10 pr-10 py-4 rounded-2xl text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 shadow-inner" aria-controls="liveSearchResults" aria-label="Tìm kiếm môn học" id="courseSearchInput"'
);
html = html.replace(
  '<button class="hidden absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-sm" id="clearSearchBtn">',
  '<button type="button" aria-label="Xóa từ khóa tìm kiếm" class="hidden absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm" id="clearSearchBtn">'
);

// 5. Fix Courses heading contrast
html = html.replace(
  '<h2 class="text-base text-primary font-semibold tracking-wide uppercase">Khóa Học Nổi Bật</h2>',
  '<h2 class="text-base text-blue-700 dark:text-blue-400 font-semibold tracking-wide uppercase">Khóa Học Nổi Bật</h2>'
);

// 6. Replace 281 inline cards inside #courses-grid with first 12 cards + pagination container
const gridIdIdx = html.indexOf('id="courses-grid"');
const gridOpenEnd = html.indexOf('>', gridIdIdx) + 1;
const noCoursesIdx = html.indexOf('<div class="hidden text-center py-16', gridOpenEnd);

const newGridSection = `\n${initial12Cards}\n</div>\n<div id="courses-pagination" class="mt-8 flex flex-wrap items-center justify-center gap-3"></div>\n`;
html = html.substring(0, gridOpenEnd) + newGridSection + html.substring(noCoursesIdx);

// Fix #no-courses-found button contrast & count label
html = html.replace(
  '<button class="px-5 py-2.5 bg-primary hover:bg-blue-600 text-white rounded-xl text-sm font-semibold transition shadow-sm" onclick="filterCoursesBy(\'all\')">',
  '<button type="button" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-semibold transition shadow-sm" onclick="filterCoursesBy(\'all\')">'
);
html = html.replace('Xem tất cả 132 môn học', 'Xem tất cả 281 môn học');

// 7. Fix Playground accessibility & contrast
html = html.replace(
  '<h2 class="text-base text-secondary font-semibold tracking-wide uppercase">Code Playground</h2>',
  '<h2 class="text-base text-emerald-700 dark:text-emerald-400 font-semibold tracking-wide uppercase">Code Playground</h2>'
);
html = html.replace(
  '<button class="px-4 py-2 text-sm font-medium border-b-2 border-primary text-primary active" id="tab-python">Python',
  '<button type="button" class="px-4 py-2 text-sm font-medium border-b-2 border-blue-700 text-blue-700 dark:text-blue-400 active" id="tab-python">Python'
);
html = html.replace(
  '<button class="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" id="tab-web">Web',
  '<button type="button" class="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" id="tab-web">Web'
);
html = html.replace(
  'id="code-editor"',
  'id="code-editor" role="textbox" aria-multiline="true" aria-label="Trình soạn thảo mã Python"'
);
html = html.replace(
  'id="web-editor"',
  'id="web-editor" role="textbox" aria-multiline="true" aria-label="Trình soạn thảo mã HTML và CSS"'
);
html = html.replace(
  '<div class="mb-2 text-gray-500 uppercase text-xs tracking-wider">Output</div>',
  '<div class="mb-2 text-gray-300 uppercase text-xs tracking-wider">Output</div>'
);
html = html.replace(
  '<button class="bg-secondary hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition transform hover:scale-105" id="run-button">',
  '<button type="button" class="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg font-medium shadow-md transition transform hover:scale-105" id="run-button">'
);

// 8. Fix PPTX Studio contrast & icon button aria-labels + close </main> before <!-- Footer -->
html = html.replace(
  'class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"',
  'class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"'
);
html = html.replace(
  'onclick="window.pptResetTimer()" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs transition" title="Đặt lại đồng hồ"',
  'onclick="window.pptResetTimer()" aria-label="Đặt lại đồng hồ" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition" title="Đặt lại đồng hồ"'
);
html = html.replace(
  'onclick="window.pptCloseStage()" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white text-xs font-bold transition" title="Đóng trình chiếu"',
  'onclick="window.pptCloseStage()" aria-label="Đóng trình chiếu" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white text-xs font-bold transition" title="Đóng trình chiếu"'
);
html = html.replace(
  '</section>\n<!-- Footer -->',
  '</section>\n</main>\n<!-- Footer -->'
);

// 9. Fix broken privacy.html & terms.html links in Footer (keep guide.html real link)
html = html.replace(
  `<li class="text-sm"><a class="inline-flex items-center gap-2 text-slate-200 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href="privacy.html"><i aria-hidden="true" class="fa-solid fa-shield-halved text-cyan-400"></i><span>Chính sách bảo mật</span></a></li>
<li class="text-sm"><a class="inline-flex items-center gap-2 text-slate-200 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href="terms.html"><i aria-hidden="true" class="fa-solid fa-file-contract text-cyan-400"></i><span>Điều khoản sử dụng</span></a></li>`,
  `<li class="flex items-center justify-between gap-2 text-slate-300"><span class="inline-flex items-center gap-2"><i aria-hidden="true" class="fa-solid fa-shield-halved text-xs text-cyan-400/60"></i><span>Chính sách bảo mật</span></span><span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/80 shrink-0">Đang cập nhật</span></li>
<li class="flex items-center justify-between gap-2 text-slate-300"><span class="inline-flex items-center gap-2"><i aria-hidden="true" class="fa-solid fa-file-contract text-xs text-cyan-400/60"></i><span>Điều khoản sử dụng</span></span><span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/80 shrink-0">Đang cập nhật</span></li>`
);

// 10. Add defer to Supabase / Auth / App / CoursesData scripts, remove eager JSZip, fix role menu contrast
html = html.replace(
  `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="scripts/supabase-config.js"></script>
<script src="scripts/auth-ui.js"></script>`,
  `<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script defer src="scripts/supabase-config.js"></script>
<script defer src="scripts/auth-ui.js"></script>
<script defer src="scripts/courses-data.js?v=1"></script>`
);

html = html.replace(
  'class="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition"',
  'class="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-lg text-sm font-medium transition"'
);

html = html.replace(
  '<script src="scripts/app.js?v=7"></script>',
  '<script defer src="scripts/app.js?v=8"></script>'
);

// 11. Replace the DOM-scanning filtering & search script with fast data-driven paginated filtering + search
const filterScriptStart = '<!-- Script: Bộ Lọc & Tìm Kiếm Môn Học Trực Tiếp -->';
const canvasScriptStart = '<script>\n/* Lightweight canvas animation;';
const fsIdx = html.indexOf(filterScriptStart);
const csIdx = html.indexOf(canvasScriptStart);

if (fsIdx === -1 || csIdx === -1) {
  console.error('Could not find filter/canvas script boundaries!');
  process.exit(1);
}

const newFilterAndSearchScript = `<!-- Script: Bộ Lọc, Phân Trang & Tìm Kiếm Môn Học Nhanh -->
<script>
      let currentFilterMode = 'all';
      let currentPageLimit = 12;
      const PAGE_STEP = 24;

      function removeVietnameseTones(str) {
        if (!str) return '';
        return str
          .normalize('NFD')
          .replace(/[\\u0300-\\u036f]/g, '')
          .replace(/[đĐ]/g, 'd')
          .toLowerCase()
          .trim();
      }

      const SEARCH_ALIASES = {
        'nga': ['tieng nga', 'russian', 'tieng nga 6', 'nga 6'],
        'tiengnga': ['tieng nga', 'russian', 'tieng nga 6', 'nga 6'],
        'russian': ['tieng nga', 'russian', 'tieng nga 6'],
        'duc': ['tieng duc', 'german', 'deutsch', 'tieng duc 6', 'duc 6', 'deutsch 6'],
        'tiengduc': ['tieng duc', 'german', 'deutsch', 'tieng duc 6', 'duc 6'],
        'german': ['tieng duc', 'german', 'deutsch', 'tieng duc 6'],
        'deutsch': ['tieng duc', 'german', 'deutsch', 'tieng duc 6'],
        'khtn': ['khoa hoc tu nhien', 'khtn'],
        'lsdl': ['lich su va dia li', 'lich su dia li', 'lich su', 'dia li', 'lsdl'],
        'gdcd': ['giao duc cong dan', 'gdcd'],
        'gdtc': ['giao duc the chat', 'the chat', 'the duc', 'gdtc'],
        'hdtn': ['hoat dong trai nghiem', 'hdtn'],
        'tnxh': ['tu nhien va xa hoi', 'tu nhien xa hoi', 'tnxh'],
        'hsg': ['hoc sinh gioi', 'olympic', 'hsg'],
        'cntt': ['cong nghe thong tin', 'tin hoc', 'cntt'],
        'tin': ['tin hoc', 'tin'],
        'toan': ['toan', 'toan hoc', 'toan 6', 'toan6', 'math 6'],
        'toan6': ['toan 6', 'toan6', 'toan', 'math 6'],
        'math6': ['toan 6', 'math 6', 'toan'],
        'van': ['ngu van', 'tieng viet', 'van', 'ngu van 6', 'van 6'],
        'nguvan': ['ngu van', 'ngu van 6', 'van 6', 'nguvan'],
        'anh': ['tieng anh', 'english', 'anh', 'tieng anh 6', 'english 6'],
        'tienganh': ['tieng anh', 'english', 'tienganh 6', 'tieng anh 6', 'english 6'],
        'english': ['tieng anh', 'english', 'tieng anh 6'],
        'phap': ['tieng phap', 'french', 'tieng phap 6', 'phap 6'],
        'tiengphap': ['tieng phap', 'french', 'tieng phap 6'],
        'french': ['tieng phap', 'french', 'tieng phap 6'],
        'trung': ['tieng trung', 'chinese', 'tieng trung 6', 'trung 6', 'han ngu 6'],
        'tiengtrung': ['tieng trung', 'chinese', 'tieng trung 6', 'trung 6', 'han ngu 6'],
        'chinese': ['tieng trung', 'chinese', 'tieng trung 6', 'trung 6', 'han ngu 6'],
        'hanngu': ['tieng trung', 'chinese', 'tieng trung 6', 'han ngu 6']
      };

      function getIndexedCourses() {
        if (!window._CODEHUB_INDEX && Array.isArray(window.CODEHUB_COURSES)) {
          window._CODEHUB_INDEX = window.CODEHUB_COURSES.map((c, idx) => ({
            ...c,
            idx,
            nt: removeVietnameseTones(c.t),
            nd: removeVietnameseTones(c.d),
            nl: removeVietnameseTones(c.l)
          }));
        }
        return window._CODEHUB_INDEX || [];
      }

      function scoreCourseItem(course, query) {
        const normQ = removeVietnameseTones(query);
        if (!normQ) return { match: true, score: 0 };
        const normTitle = course.nt;
        const normDesc = course.nd;
        const normLink = course.nl;

        if (normTitle === normQ) return { match: true, score: 1000 };
        if (normTitle.includes(normQ)) return { match: true, score: 900 };

        for (const [abbr, phrases] of Object.entries(SEARCH_ALIASES)) {
          if (normQ === abbr || normQ.startsWith(abbr + ' ') || normQ.endsWith(' ' + abbr) || normQ.includes(' ' + abbr + ' ')) {
            for (const phrase of phrases) {
              const expandedQ = normQ.replace(new RegExp('\\\\b' + abbr + '\\\\b', 'g'), phrase);
              if (normTitle.includes(expandedQ)) return { match: true, score: 850 };
            }
          }
        }

        const tokens = normQ.split(/\\s+/).filter(Boolean);
        const gradeNumber = tokens.find(t => /^(?:[1-9]|1[0-2])$/.test(t));
        if (gradeNumber) {
          const titleHasGrade = new RegExp('\\\\b' + gradeNumber + '\\\\b').test(normTitle);
          const linkHasGrade = normLink.includes('_' + gradeNumber) || normLink.includes('-' + gradeNumber);
          if (!titleHasGrade && !linkHasGrade) return { match: false, score: 0 };
        }

        const allInTitle = tokens.every(tok => {
          if (normTitle.includes(tok)) return true;
          if (SEARCH_ALIASES[tok]) return SEARCH_ALIASES[tok].some(p => normTitle.includes(p));
          return false;
        });
        if (allInTitle) return { match: true, score: 750 };

        const fullText = normTitle + ' ' + normDesc + ' ' + normLink;
        const allInFull = tokens.every(tok => {
          if (fullText.includes(tok)) return true;
          if (SEARCH_ALIASES[tok]) return SEARCH_ALIASES[tok].some(p => fullText.includes(p));
          return false;
        });

        if (allInFull) {
          const firstTok = tokens[0];
          const isFirstInTitle = normTitle.includes(firstTok) || (SEARCH_ALIASES[firstTok] && SEARCH_ALIASES[firstTok].some(p => normTitle.includes(p)));
          return { match: true, score: isFirstInTitle ? 550 : 350 };
        }
        return { match: false, score: 0 };
      }

      function matchesCategory(normTitle, mode) {
        if (mode === 'all') return true;
        if (mode === 'grade-10') return (normTitle.includes(' 10') || normTitle.includes('(10)')) && !normTitle.includes('tri tue nhan tao');
        if (mode === 'grade-11') return normTitle.includes(' 11') || normTitle.includes('(11)');
        if (mode === 'grade-12') return normTitle.includes(' 12') || normTitle.includes('(12)');
        if (mode === 'grade-tieuhoc' || mode === 'grade-thcs') {
          const normalized = normTitle.toLowerCase().trim();
          const isSubject = /^(tin hoc|tri tue nhan tao|ai|toan|toan hoc|vat li|hoa hoc|tieng anh|tieng han|tieng nhat|tieng phap|tieng duc|tieng trung|tieng nga|tieng viet|ngu van|lich su|dia li|dia ly|dao duc|giao duc cong dan|giao duc kinh te|hoat dong trai nghiem|mi thuat|my thuat|giao duc the chat|am nhac|tu nhien va xa hoi|khoa hoc|cong nghe|sinh hoc|giao duc quoc phong)\\s/.test(normalized);
          const gradeMatch = normalized.match(/(?:^|\\s)(1[0-2]|[1-9])(?=\\s|\\(|$)/);
          const grade = gradeMatch ? Number(gradeMatch[1]) : 0;
          return isSubject && (mode === 'grade-tieuhoc' ? grade >= 1 && grade <= 5 : grade >= 6 && grade <= 9);
        }
        if (mode === 'cat-olympic-hsg') return normTitle.includes('hsg') || normTitle.includes('olympic');
        if (mode === 'cat-tinhoc') {
          return normTitle.includes('tin hoc') || normTitle.includes('ai') || normTitle.includes('tri tue nhan tao') || normTitle.includes('lap trinh') || normTitle.includes('python') || normTitle.includes('flow') || normTitle.includes('notebook') || normTitle.includes('gemini') || normTitle.includes('aistudio') || normTitle.includes('ai studio') || normTitle.includes('chatgpt') || normTitle.includes('claude') || normTitle.includes('antigravity') || normTitle.includes('agy') || normTitle.includes('veo') || normTitle.includes('canva') || normTitle.includes('codex') || normTitle.includes('ic3') || normTitle.includes('mos') || normTitle.includes('ccna') || normTitle.includes('ccnp') || normTitle.includes('cisco') || normTitle.includes('dich vu mang') || normTitle.includes('network services');
        }
        return false;
      }

      function filterCoursesBy(mode, smoothScroll = true) {
        currentFilterMode = mode;
        currentPageLimit = mode === 'all' ? 12 : 24;
        const searchInput = document.getElementById('courseSearchInput');
        if (searchInput) searchInput.value = '';
        const clearBtn = document.getElementById('clearSearchBtn');
        if (clearBtn) clearBtn.classList.add('hidden');
        hideLiveResults();
        updateFilterButtonUI(mode);
        applyFiltering();
        if (smoothScroll && mode !== 'all') {
          document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
        }
      }

      function updateFilterButtonUI(mode) {
        document.querySelectorAll('.course-filter-btn').forEach(btn => {
          btn.className = 'course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition';
        });
        const activeBtn = document.getElementById(
          mode === 'all' ? 'btn-filter-all' :
          mode === 'grade-tieuhoc' ? 'btn-filter-tieuhoc' :
          mode === 'grade-thcs' ? 'btn-filter-thcs' :
          mode === 'grade-10' ? 'btn-filter-10' :
          mode === 'grade-11' ? 'btn-filter-11' :
          mode === 'grade-12' ? 'btn-filter-12' :
          mode === 'cat-olympic-hsg' ? 'btn-filter-olympic' :
          mode === 'cat-tinhoc' ? 'btn-filter-tinhoc' : ''
        );
        if (activeBtn) {
          activeBtn.className = 'course-filter-btn px-3 py-1.5 rounded-lg bg-white text-blue-700 shadow-sm transition font-bold';
        }
      }

      function loadMoreCourses(step) {
        currentPageLimit += step;
        applyFiltering();
      }

      function showAllFilteredCourses() {
        currentPageLimit = 1000;
        applyFiltering();
      }

      function renderPaginationControls(shown, totalMatches) {
        const pager = document.getElementById('courses-pagination');
        if (!pager) return;
        if (totalMatches === 0 || shown >= totalMatches) {
          pager.innerHTML = totalMatches > 12
            ? '<span class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Đang hiển thị toàn bộ ' + totalMatches + ' môn học</span>'
            : '';
          return;
        }
        const remaining = totalMatches - shown;
        const nextStep = Math.min(PAGE_STEP, remaining);
        pager.innerHTML =
          '<span class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium mr-2">Đang hiển thị ' + shown + ' / ' + totalMatches + ' môn học</span>' +
          '<button type="button" onclick="loadMoreCourses(' + PAGE_STEP + ')" class="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm transition">Xem thêm ' + nextStep + ' môn</button>' +
          '<button type="button" onclick="showAllFilteredCourses()" class="px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold transition">Xem tất cả (' + totalMatches + ')</button>';
      }

      function applyFiltering() {
        const allCourses = getIndexedCourses();
        const grid = document.getElementById('courses-grid');
        if (!grid || !allCourses.length) return;

        const query = (document.getElementById('courseSearchInput')?.value || '').trim();
        const effectiveFilterMode = query ? 'all' : currentFilterMode;
        if (query) updateFilterButtonUI('all');

        let visibleItems = [];
        for (let i = 0; i < allCourses.length; i++) {
          const course = allCourses[i];
          if (!matchesCategory(course.nt, effectiveFilterMode)) continue;
          if (!query) {
            visibleItems.push({ course, score: 0 });
          } else {
            const scoreRes = scoreCourseItem(course, query);
            if (scoreRes.match && scoreRes.score > 0) {
              visibleItems.push({ course, score: scoreRes.score });
            }
          }
        }

        if (query && visibleItems.length > 0) {
          const maxScore = Math.max(...visibleItems.map(v => v.score));
          if (maxScore >= 750) visibleItems = visibleItems.filter(v => v.score >= 500);
          visibleItems.sort((a, b) => b.score - a.score);
          renderLiveSearchResults(visibleItems.slice(0, 8), query, visibleItems.length);
        } else {
          hideLiveResults();
        }

        const sliceToShow = query ? visibleItems.slice(0, Math.max(24, currentPageLimit)) : visibleItems.slice(0, currentPageLimit);
        grid.innerHTML = sliceToShow.map(item => window.renderCodeHubCard(item.course)).join('');

        renderPaginationControls(sliceToShow.length, visibleItems.length);

        const badge = document.getElementById('filter-result-badge');
        if (badge) badge.innerText = visibleItems.length + ' / ' + allCourses.length;

        const noFound = document.getElementById('no-courses-found');
        if (noFound) {
          if (visibleItems.length === 0) {
            noFound.classList.remove('hidden');
            const desc = document.getElementById('no-courses-desc');
            if (desc) desc.innerText = query ? 'Không tìm thấy môn học nào khớp với từ khóa "' + query + '".' : 'Không có môn học nào thuộc nhóm đã chọn.';
          } else {
            noFound.classList.add('hidden');
          }
        }
      }

      function renderLiveSearchResults(topItems, query, totalCount) {
        const drop = document.getElementById('liveSearchResults');
        const input = document.getElementById('courseSearchInput');
        if (!drop) return;

        if (topItems.length === 0) {
          drop.innerHTML = '<div role="option" class="p-3 text-center text-xs text-gray-600 dark:text-gray-300">Không tìm thấy môn học phù hợp.</div>';
          drop.classList.remove('hidden');
          if (input) input.setAttribute('aria-expanded', 'true');
          return;
        }

        const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
        let html = '';
        topItems.forEach(item => {
          const c = item.course;
          html += \`
            <a role="option" href="\${escapeHTML(c.l)}" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700/60 transition group text-left">
              <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center flex-shrink-0 text-sm">
                <i class="\${escapeHTML(c.i)}"></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 truncate">
                  \${escapeHTML(c.t)}
                </div>
                <div class="text-[11px] text-gray-600 dark:text-gray-400 line-clamp-1">
                  \${escapeHTML(c.d)}
                </div>
              </div>
              <i aria-hidden="true" class="fa-solid fa-chevron-right text-xs text-gray-500 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all"></i>
            </a>
          \`;
        });

        html += \`
          <div class="pt-2 mt-1 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between px-2 text-xs">
            <span class="text-gray-600 dark:text-gray-400 font-medium">Tìm thấy <b class="text-blue-700 dark:text-blue-400">\${totalCount}</b> kết quả</span>
            <button type="button" onclick="scrollToCoursesList()" class="text-blue-700 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1">
              Xem tất cả ở dưới <i aria-hidden="true" class="fa-solid fa-arrow-down text-[10px]"></i>
            </button>
          </div>
        \`;

        drop.innerHTML = html;
        drop.classList.remove('hidden');
        if (input) input.setAttribute('aria-expanded', 'true');
      }

      function hideLiveResults() {
        const drop = document.getElementById('liveSearchResults');
        const input = document.getElementById('courseSearchInput');
        if (drop) drop.classList.add('hidden');
        if (input) input.setAttribute('aria-expanded', 'false');
      }

      function scrollToCoursesList() {
        hideLiveResults();
        document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
      }

      function initCourseStats() {
        const allCourses = getIndexedCourses();
        const total = allCourses.length || document.querySelectorAll('#courses-grid > div').length;
        if (!total) return;

        const statTotal = document.getElementById('stat-total-courses');
        if (statTotal) statTotal.innerText = total;

        const btnAll = document.getElementById('btn-filter-all');
        if (btnAll) btnAll.innerText = 'Tất cả (' + total + ')';

        const badge = document.getElementById('filter-result-badge');
        if (badge && currentFilterMode === 'all') {
          badge.innerText = total + ' / ' + total;
        }

        renderPaginationControls(Math.min(currentPageLimit, total), total);
      }
      document.addEventListener('DOMContentLoaded', initCourseStats);

      const searchInputEl = document.getElementById('courseSearchInput');
      const clearSearchBtnEl = document.getElementById('clearSearchBtn');

      if (searchInputEl) {
        let searchTimer = null;
        searchInputEl.addEventListener('input', () => {
          if (clearSearchBtnEl) {
            clearSearchBtnEl.classList.toggle('hidden', !searchInputEl.value);
          }
          clearTimeout(searchTimer);
          searchTimer = setTimeout(applyFiltering, 80);
        });

        searchInputEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            scrollToCoursesList();
          } else if (e.key === 'Escape') {
            hideLiveResults();
          }
        });

        searchInputEl.addEventListener('focus', () => {
          if (searchInputEl.value.trim()) applyFiltering();
        });
      }

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#courseSearchInput') && !e.target.closest('#liveSearchResults')) {
          hideLiveResults();
        }
      });

      if (clearSearchBtnEl) {
        clearSearchBtnEl.addEventListener('click', () => {
          if (searchInputEl) {
            searchInputEl.value = '';
            clearSearchBtnEl.classList.add('hidden');
            hideLiveResults();
            applyFiltering();
            searchInputEl.focus();
          }
        });
      }

      document.addEventListener('DOMContentLoaded', () => {
        const grid = document.getElementById('courses-grid');
        if (!grid) return;
        grid.addEventListener('click', (e) => {
          if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input')) return;
          const card = e.target.closest('#courses-grid > div');
          if (!card) return;
          const link = card.querySelector('a[href]');
          if (link && link.getAttribute('href')) {
            window.location.href = link.getAttribute('href');
          }
        });
      });
    </script>\n`;

html = html.substring(0, fsIdx) + newFilterAndSearchScript + html.substring(csIdx);

// 12. Optimize 3D Neural Network Canvas (FPS cap 30fps, IntersectionObserver pause, zero per-frame shadowBlur, deferred start)
const neuralStart = html.indexOf('/* Lightweight canvas animation;');
const neuralEnd = html.indexOf('</script>', neuralStart);
const optimizedNeural = `/* Optimized 3D neural canvas: 30fps cap, IntersectionObserver offscreen pause, no per-frame shadowBlur */
(function(){
  const canvas=document.getElementById('codehub-neural-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');if(!ctx)return;
  const panel=canvas.parentElement;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const nodes=[]; const edges=[];
  const layers=[[-1.25,5],[-.43,6],[.43,6],[1.25,5]];
  layers.forEach(([x,n],li)=>{for(let i=0;i<n;i++){
    const angle=i*Math.PI*2/n+(li%2)*.25;
    nodes.push({x:x*.95,y:Math.cos(angle)*.98,z:Math.sin(angle)*.9,layer:li});
  }});
  nodes.forEach((a,i)=>nodes.forEach((b,j)=>{if(j>i&&b.layer===a.layer+1&&(i+j)%3!==0)edges.push([i,j]);}));
  let w=0,h=0,dpr=1,mouseX=0,mouseY=0,raf=0,visible=true,inView=true,lastFrame=0;
  const FRAME_INTERVAL=33.3;

  function resize(){const r=panel.getBoundingClientRect();w=r.width;h=r.height;dpr=Math.min(window.devicePixelRatio||1,1.5);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}

  function draw(t){
    if(!visible||!inView){raf=0;return;}
    if(!reduced.matches && lastFrame && (t-lastFrame)<FRAME_INTERVAL){
      raf=requestAnimationFrame(draw);
      return;
    }
    lastFrame=t;
    ctx.clearRect(0,0,w,h);
    const time=reduced.matches?0:t*.00025;
    const ay=time+mouseX*.36, ax=-.17+Math.sin(time*.65)*.18+mouseY*.28;
    const scale=Math.min(w*.205,h*.31);
    const projected=nodes.map(p=>{
      let x=p.x*Math.cos(ay)-p.z*Math.sin(ay), z=p.x*Math.sin(ay)+p.z*Math.cos(ay);
      let y=p.y*Math.cos(ax)-z*Math.sin(ax);z=p.y*Math.sin(ax)+z*Math.cos(ax);
      const persp=3.8/(3.8+z*.30);
      return {x:w*.5+x*scale*persp,y:h*.5+y*scale*persp,z,r:(4.5+(z+2)*1.2)*Math.max(.8,Math.min(1.2,persp))};
    });
    ctx.fillStyle='rgba(161,191,255,.28)';
    for(let i=0;i<28;i++){let sx=((i*137.31)%101)/101*w,sy=((i*79.71)%97)/97*h;ctx.beginPath();ctx.arc(sx,sy,i%5===0?1.3:.7,0,Math.PI*2);ctx.fill();}
    edges.forEach(([a,b],idx)=>{const A=projected[a],B=projected[b];ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.strokeStyle=idx%3===0?'rgba(44,224,248,.31)':'rgba(166,121,255,.30)';ctx.lineWidth=1.25;ctx.stroke();
      if(!reduced.matches){const f=(time*1.3+idx*.173)%1;const x=A.x+(B.x-A.x)*f,y=A.y+(B.y-A.y)*f;ctx.beginPath();ctx.fillStyle='rgba(46,234,255,.28)';ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.fillStyle='#9afaff';ctx.arc(x,y,1.7,0,Math.PI*2);ctx.fill();}
    });
    projected.forEach((p,i)=>{const cyan=i%4===0||i%4===3;ctx.beginPath();ctx.fillStyle=cyan?'rgba(23,223,255,.20)':'rgba(141,85,255,.20)';ctx.arc(p.x,p.y,p.r*1.85,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.fillStyle=cyan?'#50eaff':'#b18aff';ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.fillStyle='rgba(255,255,255,.7)';ctx.arc(p.x-p.r*.2,p.y-p.r*.2,p.r*.33,0,Math.PI*2);ctx.fill();});
    if(!reduced.matches){raf=requestAnimationFrame(draw);}else{raf=0;}
  }

  function start(){cancelAnimationFrame(raf);lastFrame=0;resize();if(visible&&inView)raf=requestAnimationFrame(draw);}
  panel.addEventListener('pointermove',e=>{const r=panel.getBoundingClientRect();mouseX=(e.clientX-r.left)/r.width-.5;mouseY=(e.clientY-r.top)/r.height-.5;},{passive:true});
  panel.addEventListener('pointerleave',()=>{mouseX=0;mouseY=0;});
  if('IntersectionObserver' in window){
    new IntersectionObserver(entries=>{inView=entries[0]?.isIntersecting!==false;if(inView&&visible&&!raf)start();else if(!inView){cancelAnimationFrame(raf);raf=0;}},{threshold:0.05}).observe(panel);
  }
  if('ResizeObserver'in window)new ResizeObserver(start).observe(panel);else window.addEventListener('resize',start);
  document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible&&inView)start();else{cancelAnimationFrame(raf);raf=0;}});
  reduced.addEventListener?.('change',start);
  setTimeout(start, 120);
})();\n`;

html = html.substring(0, neuralStart) + optimizedNeural + html.substring(neuralEnd);

// 13. Remove eager JSZip script tag and add defer to pptx-presenter.js
html = html.replace(
  `<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>\n<script src="scripts/pptx-presenter.js"></script>`,
  `<script defer src="scripts/pptx-presenter.js?v=2"></script>`
);

fs.writeFileSync(path.join(baseDir, 'index.html'), html, 'utf8');
console.log('Successfully wrote optimized index.html:', (html.length / 1024).toFixed(1), 'KiB');
