const fs = require('fs');
const { unitsData } = require('./data_tiengduc6.js');

const filePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html';
const germanPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html';
let html = fs.readFileSync(filePath, 'utf8');

function generateNavItems(isMobile = false) {
  const clickHandler = isMobile ? 'onclick="toggleDrawer()"' : '';
  return `
    <div class="space-y-3">
      <!-- Section Fast Links -->
      <div class="space-y-1 text-xs">
        <a href="#tap-1" ${clickHandler} class="flex items-center justify-between px-3 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-bold transition">
          <span><i class="fa-solid fa-bookmark text-red-500 mr-2"></i>I. Tập 1 (Start - E5)</span>
          <span class="text-[10px] bg-red-200/60 dark:bg-red-900/60 text-red-800 dark:text-red-200 px-1.5 py-0.5 rounded font-black">S. 10-58</span>
        </a>
        <a href="#tap-2" ${clickHandler} class="flex items-center justify-between px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold transition">
          <span><i class="fa-solid fa-book-open text-amber-500 mr-2"></i>II. Tập 2 (E6 - E10)</span>
          <span class="text-[10px] bg-amber-200/60 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 px-1.5 py-0.5 rounded font-black">S. 60-104</span>
        </a>
        <a href="#kien-thuc-bat-buoc" ${clickHandler} class="flex items-center px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-star text-amber-500 mr-2"></i>III. 18 Trọng tâm bắt buộc
        </a>
        <a href="#noi-dung-khong-bo" ${clickHandler} class="flex items-center px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-filter text-emerald-500 mr-2"></i>IV. Tiêu chuẩn học &amp; lọc
        </a>
        <a href="#chi-tiet-lektion" ${clickHandler} class="flex items-center px-3 py-1.5 rounded-lg text-red-600 dark:text-red-400 font-bold transition">
          <i class="fa-solid fa-list-check mr-2"></i>V. Chi tiết 30 Lektionen
        </a>
        <a href="#dinh-huong-kiem-tra" ${clickHandler} class="flex items-center px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-trophy text-amber-500 mr-2"></i>VI. Thi Trạng Nguyên 60:00
        </a>
      </div>

      <!-- Detail unit by unit tree -->
      <div class="pt-2 border-t border-gray-100 dark:border-gray-800">
        <div class="text-[10px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 px-2 mb-2 flex items-center justify-between">
          <span>30 Lektionen SGK Tiếng Đức 6</span>
          <span class="text-[9px] bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 px-1 rounded">100% KNTT</span>
        </div>
        <div class="space-y-2 text-xs">
          ${unitsData.map(u => {
            const isP = u.isStation;
            return `
              <div class="rounded-xl border ${isP ? 'border-amber-200 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/20' : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-dark-card/40'} p-2 space-y-1">
                <a href="#unit-${u.id}" ${clickHandler} class="flex items-center justify-between font-bold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                  <span class="truncate">${isP ? u.titleDe : `${u.number === 'Start' ? 'Start' : 'Einheit ' + u.number}: ${u.titleDe}`}</span>
                  <span class="text-[10px] text-gray-400 shrink-0 ml-1">S.${u.page}</span>
                </a>
                <div class="pl-2 space-y-0.5 border-l border-gray-200 dark:border-gray-700 ml-1">
                  ${u.lektions.map((l, idx) => `
                    <a href="#lektion-${u.id}-${idx}" ${clickHandler} class="flex items-center justify-between text-[11px] text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 py-0.5 truncate transition">
                      <span class="truncate"><span class="font-semibold text-gray-700 dark:text-gray-300">${l.num}:</span> ${l.nameDe}</span>
                      <span class="text-[9px] text-gray-400 shrink-0 ml-1">S.${l.page}</span>
                    </a>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// Update Desktop Aside
const asideStart = html.indexOf('<aside class="hidden lg:block lg:col-span-1">');
const asideEnd = html.indexOf('</aside>');

if (asideStart !== -1 && asideEnd !== -1) {
  const newAside = `<aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 bg-white dark:bg-dark-surface p-4 sm:p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
          <div class="flex items-center gap-2.5 pb-3 border-b border-gray-100 dark:border-gray-800">
            <div class="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center font-bold">
              <i class="fa-solid fa-book-bookmark"></i>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Mục lục chi tiết</h3>
              <p class="text-sm font-black text-gray-900 dark:text-white">Start &amp; 10 Einheiten</p>
            </div>
          </div>

          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
            ${generateNavItems(false)}
          </nav>
        </div>
      </aside>`;

  html = html.substring(0, asideStart) + newAside + html.substring(asideEnd + 8);
  console.log("Desktop aside replaced successfully!");
}

// Update Mobile Drawer
const drawerStart = html.indexOf('id="mobile-drawer"');
const drawerNavStart = html.indexOf('<div class="flex-1 overflow-y-auto sidebar-scroll py-4', drawerStart);
const drawerNavEnd = html.indexOf('<div class="pt-4 border-t border-gray-100 dark:border-gray-800">', drawerNavStart);

if (drawerNavStart !== -1 && drawerNavEnd !== -1) {
  const newDrawerNav = `<div class="flex-1 overflow-y-auto sidebar-scroll py-4 space-y-2 text-xs">
      ${generateNavItems(true)}
    </div>

    `;
  html = html.substring(0, drawerNavStart) + newDrawerNav + html.substring(drawerNavEnd);
  console.log("Mobile drawer navigation replaced successfully!");
}

// Also update page badge to reflect 30 Lektionen
html = html.replace('10 Einheiten &bull; 60 Lektionen', '10 Einheiten &bull; 30 Lektionen &bull; 10 Landeskunde &bull; 10 Projekte &bull; 4 Plattformen');
html = html.replace('Toàn diện 60 Lektionen', 'Toàn diện 30 Lektionen + Landeskunde + Projekt + 4 Plattformen');

fs.writeFileSync(filePath, html, 'utf8');
fs.writeFileSync(germanPath, html, 'utf8');
console.log("Updated both files successfully! Size:", html.length);
