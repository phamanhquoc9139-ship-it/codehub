const fs = require('fs');

const TEMPLATE = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hóa Học 11 | CodeHub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#3182f6',
            secondary: '#f5f7fb',
            dark: '#0f172a',
            'dark-surface': '#1e293b'
          }
        }
      }
    }
  </script>
  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .smooth-scroll { scroll-behavior: smooth; }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-dark dark:text-gray-100 transition-colors duration-200 smooth-scroll">
  
  <!-- Navigation -->
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
                  <a href="toan_10.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Toán 10</a>
                  <a href="tienganh_11.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Tiếng Anh 11</a>
                  <a href="hoahoc_11.html" class="block px-4 py-2 text-sm text-primary bg-blue-50 dark:bg-blue-900/30">Hóa học 11</a>
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
          <a href="../login.html" class="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
          <i class="fa-solid fa-flask-vial"></i> GDPT 2018 (Sách mới)
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Hóa Học Lớp 11 Toàn Diện</h1>
        <p class="text-lg text-emerald-100 mb-8 leading-relaxed">
          Chinh phục hoàn toàn Cân bằng hóa học, Hóa học vô cơ (Nitrogen, Sulfur) và đặt nền móng vững chắc với Đại cương Hóa Hữu cơ, Hydrocarbon.
        </p>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- Sidebar / Table of Contents -->
      <aside class="lg:w-1/4">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 pb-2 border-b dark:border-gray-700">
            Mục lục khóa học
          </h3>
          <nav class="space-y-4">
            {{SIDEBAR}}
          </nav>
        </div>
      </aside>

      <!-- Content Area -->
      <main class="lg:w-3/4 space-y-12">
        {{CONTENT}}
      </main>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700 mt-12 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2026 CodeHub. Tích hợp chương trình Hóa Học chuẩn mới.
      </div>
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

const chemData11 = [
    {
        id: "chu-de-1", title: "Chủ đề 1: Cân bằng hóa học", icon: "fa-scale-balanced", color: "blue",
        lessons: [
            { name: "Bài 1: Khái niệm về cân bằng hóa học", content: "<strong>Phản ứng một chiều:</strong> Chỉ xảy ra theo 1 hướng.<br/><strong>Phản ứng thuận nghịch:</strong> Xảy ra theo 2 hướng trái ngược nhau trong cùng điều kiện.<br/><strong>Cân bằng hóa học:</strong> Trạng thái khi tốc độ thuận = tốc độ nghịch." },
            { name: "Bài 2: Cân bằng trong dung dịch nước", content: "<strong>Sự điện li:</strong> Quá trình phân li thành ion trong nước.<br/><strong>pH của dung dịch:</strong> pH = -log[H+]. Môi trường axit (pH < 7), trung tính (pH = 7), bazơ (pH > 7)." }
        ]
    },
    {
        id: "chu-de-2", title: "Chủ đề 2: Nitrogen và Sulfur", icon: "fa-cloud", color: "sky",
        lessons: [
            { name: "Bài 3: Đơn chất nitrogen", content: "Khí N2 không màu, không mùi, khá trơ ở nhiệt độ thường do có liên kết ba vững chắc (N≡N). Có tính oxi hóa và tính khử." },
            { name: "Bài 4: Ammonia", content: "NH3 là khí mùi khai. Phân tử phân cực. Tan rất tốt trong nước, có tính bazơ yếu và tính khử." },
            { name: "Bài 5: Hợp chất oxygen của nitrogen", content: "Khí NO, NO2 (Mưa axit). Nitric acid (HNO3) là axit mạnh, có tính oxi hóa rất mạnh." },
            { name: "Bài 6: Sulfur và sulfur dioxide", content: "S (Lưu huỳnh) có tính oxi hóa và tính khử. SO2 là khí độc, tác nhân gây mưa axit, có tính khử và tính oxi hóa." },
            { name: "Bài 7: Sulfuric acid", content: "H2SO4 loãng có tính axit mạnh. H2SO4 đặc có tính axit mạnh, tính oxi hóa mạnh và tính háo nước." }
        ]
    },
    {
        id: "chu-de-3", title: "Chủ đề 3: Đại cương hóa học hữu cơ", icon: "fa-flask-vial", color: "amber",
        lessons: [
            { name: "Bài 8: Hợp chất hữu cơ", content: "Hợp chất hữu cơ là hợp chất của Carbon (trừ CO, CO2, muối carbonate...). Liên kết chủ yếu là cộng hóa trị." },
            { name: "Bài 9: Phương pháp tinh chế", content: "Các phương pháp tách biệt: Chưng cất, chiết, kết tinh, sắc ký cột." },
            { name: "Bài 10: Công thức phân tử", content: "Thiết lập công thức phân tử dựa vào % khối lượng các nguyên tố (C, H, O, N) và khối lượng mol." },
            { name: "Bài 11: Cấu tạo hóa học", content: "Thuyết cấu tạo hóa học. Đồng đẳng (cùng tính chất, hơn kém CH2). Đồng phân (cùng công thức phân tử, khác cấu tạo)." }
        ]
    },
    {
        id: "chu-de-4", title: "Chủ đề 4: Hydrocarbon", icon: "fa-fire", color: "rose",
        lessons: [
            { name: "Bài 12: Alkane", content: "Hydrocarbon no, mạch hở. Công thức: CnH2n+2 (n≥1). Chỉ có liên kết đơn. Phản ứng đặc trưng: Thế halogen." },
            { name: "Bài 13: Hydrocarbon không no", content: "Gồm Alkene (có 1 liên kết đôi C=C, CnH2n) và Alkyne (có 1 liên kết ba C≡C, CnH2n-2). Phản ứng đặc trưng: Cộng." },
            { name: "Bài 14: Arene", content: "Hydrocarbon thơm, chứa vòng benzene. Phản ứng đặc trưng: Thế thế vào vòng thơm (dễ thế, khó cộng)." }
        ]
    },
    {
        id: "chu-de-5", title: "Chủ đề 5: Dẫn xuất Halogen - Alcohol", icon: "fa-vial", color: "purple",
        lessons: [
            { name: "Bài 15: Dẫn xuất halogen", content: "Thay thế H trong hydrocarbon bằng Halogen. Có phản ứng thế nucleophile và phản ứng tách (tạo alkene)." },
            { name: "Bài 16: Alcohol", content: "Chứa nhóm -OH liên kết trực tiếp với nguyên tử C no. Có liên kết hydrogen liên phân tử. Bậc alcohol = Bậc của C gắn với OH." },
            { name: "Bài 17: Phenol", content: "Chứa nhóm -OH liên kết trực tiếp với vòng benzene. Tính axit của Phenol mạnh hơn Alcohol." }
        ]
    },
    {
        id: "chu-de-6", title: "Chủ đề 6: Hợp chất Carbonyl", icon: "fa-droplet", color: "indigo",
        lessons: [
            { name: "Bài 18: Aldehyde - Ketone", content: "Chứa nhóm carbonyl (>C=O). Aldehyde có phản ứng tráng bạc (tác dụng với AgNO3/NH3)." },
            { name: "Bài 19: Carboxylic acid", content: "Chứa nhóm carboxyl (-COOH). Có tính axit (làm quỳ tím hóa đỏ, tác dụng với kim loại, bazơ, muối) và phản ứng ester hóa." }
        ]
    }
];

let sidebarHtml = '';
let contentHtml = '';

chemData11.forEach((topic, idx) => {
    // Generate Sidebar
    const isFirst = idx === 0;
    const parentClass = isFirst ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 font-medium" : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800";
    
    sidebarHtml += `            <div class="sidebar-item">
                <a href="#${topic.id}" class="block px-3 py-2 text-sm rounded-lg transition-colors ${parentClass}">${topic.title}</a>
                <ul class="pl-4 mt-1 space-y-1.5 border-l-2 border-gray-100 dark:border-gray-700 ml-4">
`;
    topic.lessons.forEach(lesson => {
        sidebarHtml += `                    <li><a href="#${topic.id}" class="block text-[13px] text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">${lesson.name}</a></li>\n`;
    });
    sidebarHtml += `                </ul>
            </div>\n`;

    // Generate Content
    contentHtml += `        <!-- ${topic.title} -->
        <section id="${topic.id}" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-${topic.color}-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid ${topic.icon} text-${topic.color}-600"></i> ${topic.title}
                </h2>
            </div>
`;
    
    topic.lessons.forEach((lesson, lIdx) => {
        const badgeColor = topic.color; // use topic color
        contentHtml += `            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-${badgeColor}-100 text-${badgeColor}-700 dark:bg-${badgeColor}-900/50 dark:text-${badgeColor}-300">Bài ${lesson.name.split(':')[0].replace('Bài ', '')}</span>
                        <span>${lesson.name.split(': ')[1]}</span>
                    </h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300">
                        <p>${lesson.content}</p>
                    </div>
                </div>
            </div>\n`;
    });
    
    contentHtml += `        </section>\n`;
});

const finalHtml = TEMPLATE.replace('{{SIDEBAR}}', sidebarHtml).replace('{{CONTENT}}', contentHtml);
fs.writeFileSync('courses/hoahoc_11.html', finalHtml, 'utf8');
console.log('Successfully generated hoahoc_11.html');
