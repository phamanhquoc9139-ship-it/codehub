const fs = require('fs');

let content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_gdcd_6.js', 'utf8');

// 1. Add head script for dark mode before </head>
const oldHeadClose = '</head>';
const newHeadClose = `  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</head>`;

if (!content.includes("localStorage.theme === 'dark'")) {
    content = content.replace(oldHeadClose, newHeadClose);
    console.log('Added dark mode script to <head>');
}

// 2. Replace dark mode button in header
const oldBtn = `<button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Chuyển chế độ Sáng / Tối">
          <i id="themeIcon" class="fa-solid fa-moon text-sm"></i>
        </button>`;

const newBtn = `<button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" aria-label="Đổi giao diện Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>`;

content = content.replace(oldBtn, newBtn);
console.log('Replaced dark mode button');

// 3. Replace toggleDarkMode JS logic
const oldJs = `    // Dark mode handler
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('codehub_theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }
    function updateThemeIcon(isDark) {
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun text-sm text-amber-400' : 'fa-solid fa-moon text-sm text-slate-600';
      }
    }
    (function initTheme() {
      const saved = localStorage.getItem('codehub_theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
      } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
      }
    })();`;

const newJs = `    // Dark mode handler
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }`;

content = content.replace(oldJs, newJs);
console.log('Replaced toggleDarkMode function');

// 4. Fix alert newline in callHotline
const oldAlert = `alert('☎️ ĐANG KẾT NỐI TỚI: ' + hotlineData[currentDial].name + ' (' + currentDial + ')\\n\\n' + hotlineData[currentDial].desc + '\\n\\n(Lưu ý: Luôn bình tĩnh, nói rõ họ tên, địa chỉ chính xác và tình trạng sự việc khi gọi thật nhé!)');`;

const newAlert = `const alertMsg = '☎️ ĐANG KẾT NỐI TỚI: ' + hotlineData[currentDial].name + ' (' + currentDial + ')\\\\n\\\\n' + hotlineData[currentDial].desc + '\\\\n\\\\n(Lưu ý: Luôn bình tĩnh, nói rõ họ tên, địa chỉ chính xác và tình trạng sự việc khi gọi thật nhé!)';
        alert(alertMsg);`;

content = content.replace(oldAlert, newAlert);
console.log('Fixed alert newline escaping');

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_gdcd_6.js', content, 'utf8');
console.log('Wrote updated build_gdcd_6.js');
