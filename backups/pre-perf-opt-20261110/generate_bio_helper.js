const fs = require('fs');
const path = require('path');

// Helper to build a standard course HTML string
function renderCoursePage(config) {
    const {
        grade,
        title,
        subtitle,
        gradientFrom,
        gradientTo,
        chapters,
        badgeText = "CHƯƠNG TRÌNH GDPT 2018 - KẾT NỐI TRI THỨC & PHÁT TRIỂN NĂNG LỰC"
    } = config;

    let sidebarHtml = '';
    let contentHtml = '';

    chapters.forEach((chap, cIdx) => {
        const isFirst = cIdx === 0;
        const activeClass = isFirst
            ? `bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 font-medium`
            : `text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800`;

        sidebarHtml += `            <div class="sidebar-item">
                <a href="#${chap.id}" class="block px-3 py-2 text-sm rounded-lg transition-colors ${activeClass}">${chap.title}</a>
                <ul class="pl-4 mt-1 space-y-1.5 border-l-2 border-gray-100 dark:border-gray-700 ml-4">
`;
        chap.lessons.forEach(lesson => {
            sidebarHtml += `                    <li><a href="#${chap.id}" class="block text-[13px] text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">${lesson.name}</a></li>\n`;
        });
        sidebarHtml += `                </ul>
            </div>\n`;

        contentHtml += `        <!-- ${chap.title} -->
        <section id="${chap.id}" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-${chap.color || 'emerald'}-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid ${chap.icon || 'fa-dna'} text-${chap.color || 'emerald'}-600"></i> ${chap.title}
                </h2>
            </div>
`;
        chap.lessons.forEach(lesson => {
            const badgeColor = chap.color || 'emerald';
            const match = lesson.name.match(/^(Bài [0-9]+(?:\s*-\s*[0-9]+)?):\s*(.+)$/);
            let badgeHtml = '';
            let titleText = lesson.name;
            if (match) {
                badgeHtml = `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-${badgeColor}-100 text-${badgeColor}-700 dark:bg-${badgeColor}-900/50 dark:text-${badgeColor}-300">${match[1]}</span>`;
                titleText = match[2];
            }

            contentHtml += `            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        ${badgeHtml}
                        <span>${titleText}</span>
                    </h3>
                    ${lesson.content}
                </div>
            </div>\n`;
        });
        contentHtml += `        </section>\n`;
    });

    const linksHtml = chapters.map((chap, idx) => {
        const isLast = idx === chapters.length - 1;
        const btnClass = isLast
            ? 'px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 border border-orange-400 transition-all font-medium text-sm flex items-center gap-2 shadow-sm text-white'
            : 'px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium text-sm flex items-center gap-2 text-white';

        let shortTitle = chap.title.split(': ')[1] || chap.title.split('. ')[1] || chap.title;
        if (shortTitle.length > 22) shortTitle = shortTitle.substring(0, 22) + '...';

        return `          <a href="#${chap.id}" class="${btnClass}">
            <i class="fa-solid ${chap.icon || 'fa-dna'} text-white/80"></i> Chương ${idx + 1}: ${shortTitle}
          </a>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#10b981',
            secondary: '#ecfdf5',
            dark: '#0f172a',
            'dark-surface': '#1e293b'
          }
        }
      }
    }
  </script>
  <style>
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .smooth-scroll { scroll-behavior: smooth; }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-dark dark:text-gray-100 transition-colors duration-200 smooth-scroll">
  
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="../index.html" class="flex items-center gap-2">
            <i class="fa-solid fa-code text-primary text-2xl"></i>
            <span class="font-bold text-xl tracking-tight">CodeHub</span>
          </a>
          <div class="hidden md:flex ml-10 space-x-8">
            <a href="../index.html" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Trang chủ</a>
            <div class="relative group">
              <button class="text-primary dark:text-primary px-3 py-2 text-sm font-medium flex items-center gap-1">
                Khóa học <i class="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-surface ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-1">
                  <a href="sinhhoc_10.html" class="block px-4 py-2 text-sm ${grade === 10 ? 'text-primary bg-emerald-50 dark:bg-emerald-900/30' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">Sinh học 10</a>
                  <a href="sinhhoc_11.html" class="block px-4 py-2 text-sm ${grade === 11 ? 'text-primary bg-emerald-50 dark:bg-emerald-900/30' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">Sinh học 11</a>
                  <a href="sinhhoc_12.html" class="block px-4 py-2 text-sm ${grade === 12 ? 'text-primary bg-emerald-50 dark:bg-emerald-900/30' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">Sinh học 12</a>
                  <div class="border-t border-gray-100 dark:border-gray-700 my-1"></div>
                  <a href="hoahoc_10.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Hóa học 10</a>
                  <a href="toan_10.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Toán 10</a>
                </div>
              </div>
            </div>
            <a href="../quizzes.html" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Luyện tập</a>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button id="themeToggle" class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
            <i class="fa-solid fa-moon text-lg dark:hidden"></i>
            <i class="fa-solid fa-sun text-lg hidden dark:block"></i>
          </button>
          <a href="../login.html" class="bg-primary hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">Đăng nhập</a>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white py-20 shadow-inner text-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30 text-white">
        <i class="fa-solid fa-dna"></i> ${badgeText}
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md text-white">${title}</h1>
      <p class="text-lg text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
        ${subtitle}
      </p>
      <div class="flex flex-wrap justify-center gap-3">
${linksHtml}
      </div>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row gap-8">
      <aside class="lg:w-1/4">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 pb-2 border-b dark:border-gray-700">Mục lục khóa học</h3>
          <nav class="space-y-4">
${sidebarHtml}
          </nav>
        </div>
      </aside>
      <main class="lg:w-3/4 space-y-12">
${contentHtml}
      </main>
    </div>
  </div>

  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700 mt-12 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; 2026 CodeHub. Tích hợp chương trình Sinh học ${grade} (KNTT - GDPT 2018).
    </div>
  </footer>

  <script>
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }
    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    const sections = document.querySelectorAll('section[id]');
    const sidebarItems = document.querySelectorAll('.sidebar-item > a');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      sidebarItems.forEach(link => {
        link.classList.remove('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        link.classList.add('text-gray-700', 'dark:text-gray-300');
        if (link.getAttribute('href') === "#" + current) {
          link.classList.remove('text-gray-700', 'dark:text-gray-300');
          link.classList.add('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        }
      });
    });
  </script>
</body>
</html>`;
}

module.exports = { renderCoursePage };
