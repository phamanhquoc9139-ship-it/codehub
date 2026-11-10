const fs = require('fs');
const path = require('path');

const coursesDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';

// 1. Fix tienganh_10.html and tienganh10.html
const t10Path = path.join(coursesDir, 'tienganh_10.html');
const t10AltPath = path.join(coursesDir, 'tienganh10.html');
let t10 = fs.readFileSync(t10Path, 'utf8');

const oldAsideBlock = `      <!-- Sticky Sidebar Navigation (Col 4) -->
      <aside class="lg:col-span-4 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div class="px-3 py-2 mb-2 font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span><i class="fa-solid fa-list-check mr-1.5 text-blue-500"></i> Mục Lục Bài Học</span>
          <span class="text-[10px] font-mono">14 Bài</span>
        </div>
        <nav class="space-y-1">`;

const newAsideBlock = `      <!-- Sticky Sidebar Navigation (Col 4 - Static & Collapsible on Mobile, Sticky on Desktop lg+) -->
      <aside class="lg:col-span-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto custom-scrollbar p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <button type="button" id="mobileTocToggleBtn" onclick="toggleMobileToc()" class="w-full px-3 py-2 font-bold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300 lg:text-slate-400 lg:dark:text-slate-500 lg:border-b border-slate-100 dark:border-slate-800 lg:mb-2 flex items-center justify-between lg:cursor-default">
          <span><i class="fa-solid fa-list-check mr-1.5 text-blue-500"></i> Mục Lục Bài Học</span>
          <span class="flex items-center gap-2 text-[10px] font-mono">
            <span>14 Bài</span>
            <i id="mobileTocChevron" class="fa-solid fa-chevron-down lg:hidden transition-transform duration-200"></i>
          </span>
        </button>
        <nav id="sidebarTocNav" class="space-y-1 hidden lg:block mt-2 lg:mt-0 max-h-[60vh] overflow-y-auto lg:max-h-none lg:overflow-visible">`;

if (!t10.includes(oldAsideBlock)) {
  console.error('Could not find oldAsideBlock in tienganh_10.html!');
  process.exit(1);
}
t10 = t10.replace(oldAsideBlock, newAsideBlock);

// Add toggleMobileToc JS before </body>
const mobileTocScript = `
    // Mobile Collapsible TOC (prevents TOC from covering lesson on small screens)
    function toggleMobileToc() {
      if (window.innerWidth >= 1024) return;
      const nav = document.getElementById('sidebarTocNav');
      const chev = document.getElementById('mobileTocChevron');
      if (!nav) return;
      const isHidden = nav.classList.toggle('hidden');
      if (chev) chev.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
    }

    document.addEventListener('DOMContentLoaded', function() {
      const tocNav = document.getElementById('sidebarTocNav');
      const chev = document.getElementById('mobileTocChevron');
      if (tocNav) {
        tocNav.querySelectorAll('a.nav-item').forEach(function(link) {
          link.addEventListener('click', function() {
            if (window.innerWidth < 1024) {
              tocNav.classList.add('hidden');
              if (chev) chev.style.transform = 'rotate(0deg)';
            }
          });
        });
      }
    });
  </script>
</body>`;

t10 = t10.replace('  </script>\n</body>', mobileTocScript);

fs.writeFileSync(t10Path, t10, 'utf8');
fs.writeFileSync(t10AltPath, t10, 'utf8');
console.log('Fixed tienganh_10.html and tienganh10.html!');

// 2. Fix chuyende_tienganh_10.html
const cd10Path = path.join(coursesDir, 'chuyende_tienganh_10.html');
let cd10 = fs.readFileSync(cd10Path, 'utf8');

const oldCdAside = '<aside class="lg:w-1/4">';
const newCdAside = '<aside class="hidden lg:block lg:w-1/4">';

if (!cd10.includes(oldCdAside)) {
  console.error('Could not find oldCdAside in chuyende_tienganh_10.html!');
  process.exit(1);
}
cd10 = cd10.replace(oldCdAside, newCdAside);
fs.writeFileSync(cd10Path, cd10, 'utf8');
console.log('Fixed chuyende_tienganh_10.html!');
