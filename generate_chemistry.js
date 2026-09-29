const fs = require('fs');

const TEMPLATE = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hóa Học {{grade}} | CodeHub</title>
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
                  <a href="tienganh_10.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Tiếng Anh 10</a>
                  <a href="hoahoc_{{grade}}.html" class="block px-4 py-2 text-sm text-primary bg-blue-50 dark:bg-blue-900/30">Hóa học {{grade}}</a>
                </div>
              </div>
            </div>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Luyện tập</a>
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
  <header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
          <i class="fa-solid fa-flask"></i> GDPT 2018 (Sách mới)
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Khám phá Hóa Học Lớp {{grade}}</h1>
        <p class="text-lg text-blue-100 mb-8 leading-relaxed">
          Chương trình giáo dục phổ thông 2018. Khám phá các nguyên lý hóa học từ cơ bản đến nâng cao thông qua các bài học trực quan, bài tập thực hành và thí nghiệm sinh động.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#chu-de-1" class="bg-white text-blue-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
            Bắt đầu học ngay <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- Sidebar / Table of Contents -->
      <aside class="lg:w-1/4">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
            <i class="fa-solid fa-list-ul text-primary"></i> Mục lục khóa học
          </h3>
          <nav class="space-y-1">
            {{sidebar_links}}
          </nav>
        </div>
      </aside>

      <!-- Content Area -->
      <main class="lg:w-3/4 space-y-10">
        {{content_sections}}
      </main>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700 mt-12 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <a href="../index.html" class="flex items-center gap-2 mb-4">
            <i class="fa-solid fa-code text-primary text-2xl"></i>
            <span class="font-bold text-xl">CodeHub</span>
          </a>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
            Nền tảng học tập trực tuyến hàng đầu, cung cấp các khóa học chất lượng cao theo chương trình GDPT 2018.
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-4">Khóa học</h4>
          <ul class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="toan_10.html" class="hover:text-primary transition-colors">Toán học</a></li>
            <li><a href="hoahoc_{{grade}}.html" class="hover:text-primary transition-colors">Hóa học</a></li>
            <li><a href="tienganh_10.html" class="hover:text-primary transition-colors">Tiếng Anh</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Hỗ trợ</h4>
          <ul class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#" class="hover:text-primary transition-colors">Trung tâm trợ giúp</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Liên hệ</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Điều khoản & Bảo mật</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2026 CodeHub. All rights reserved.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-primary transition-colors"><i class="fa-brands fa-facebook text-xl"></i></a>
          <a href="#" class="text-gray-400 hover:text-primary transition-colors"><i class="fa-brands fa-youtube text-xl"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }

    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // Active sidebar link tracking
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('aside nav a');

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

      navLinks.forEach(link => {
        link.classList.remove('bg-blue-50', 'dark:bg-blue-900/30', 'text-primary', 'font-medium', 'border-l-4', 'border-primary');
        link.classList.add('text-gray-600', 'dark:text-gray-400', 'hover:bg-gray-50', 'dark:hover:bg-gray-800');
        
        if (link.getAttribute('href') === "#" + current) {
          link.classList.remove('text-gray-600', 'dark:text-gray-400', 'hover:bg-gray-50', 'dark:hover:bg-gray-800');
          link.classList.add('bg-blue-50', 'dark:bg-blue-900/30', 'text-primary', 'font-medium', 'border-l-4', 'border-primary', 'pl-3');
        }
      });
    });
  </script>
</body>
</html>`;

const chemData = {
    "10": [
        {"id": "chu-de-1", "title": "Chủ đề 1: Cấu tạo nguyên tử", "lessons": [
            "Bài 1: Thành phần của nguyên tử",
            "Bài 2: Nguyên tố hóa học",
            "Bài 3: Cấu trúc lớp vỏ electron nguyên tử"
        ]},
        {"id": "chu-de-2", "title": "Chủ đề 2: Bảng tuần hoàn", "lessons": [
            "Bài 4: Cấu tạo bảng tuần hoàn các nguyên tố hóa học",
            "Bài 5: Xu hướng biến đổi một số tính chất",
            "Bài 6: Định luật tuần hoàn, ý nghĩa của bảng tuần hoàn"
        ]},
        {"id": "chu-de-3", "title": "Chủ đề 3: Liên kết hóa học", "lessons": [
            "Bài 7: Quy tắc octet",
            "Bài 8: Liên kết ion",
            "Bài 9: Liên kết cộng hóa trị",
            "Bài 10: Liên kết hydrogen và tương tác van der Waals"
        ]},
        {"id": "chu-de-4", "title": "Chủ đề 4: Phản ứng oxi hóa - khử", "lessons": [
            "Bài 11: Phản ứng oxi hóa - khử",
            "Bài tập chủ đề 4"
        ]},
        {"id": "chu-de-5", "title": "Chủ đề 5: Năng lượng hóa học", "lessons": [
            "Bài 12: Enthalpy tạo thành và biến thiên enthalpy",
            "Bài 13: Tính biến thiên enthalpy của phản ứng"
        ]},
        {"id": "chu-de-6", "title": "Chủ đề 6: Tốc độ phản ứng hóa học", "lessons": [
            "Bài 14: Khái niệm tốc độ phản ứng hóa học",
            "Bài 15: Các yếu tố ảnh hưởng đến tốc độ phản ứng"
        ]},
        {"id": "chu-de-7", "title": "Chủ đề 7: Nguyên tố nhóm VIIA", "lessons": [
            "Bài 16: Đặc điểm và tính chất của các halogen",
            "Bài 17: Hydrogen halide và một số phản ứng"
        ]}
    ],
    "11": [
        {"id": "chu-de-1", "title": "Chủ đề 1: Cân bằng hóa học", "lessons": [
            "Bài 1: Khái niệm về cân bằng hóa học",
            "Bài 2: Cân bằng trong dung dịch nước"
        ]},
        {"id": "chu-de-2", "title": "Chủ đề 2: Nitrogen và Sulfur", "lessons": [
            "Bài 3: Đơn chất nitrogen",
            "Bài 4: Ammonia và một số hợp chất ammonium",
            "Bài 5: Một số hợp chất với oxygen của nitrogen",
            "Bài 6: Sulfur và sulfur dioxide",
            "Bài 7: Sulfuric acid và muối sulfate"
        ]},
        {"id": "chu-de-3", "title": "Chủ đề 3: Đại cương hóa học hữu cơ", "lessons": [
            "Bài 8: Hợp chất hữu cơ và hóa học hữu cơ",
            "Bài 9: Phương pháp tách biệt và tinh chế",
            "Bài 10: Công thức phân tử hợp chất hữu cơ",
            "Bài 11: Cấu tạo hóa học hợp chất hữu cơ"
        ]},
        {"id": "chu-de-4", "title": "Chủ đề 4: Hydrocarbon", "lessons": [
            "Bài 12: Alkane",
            "Bài 13: Hydrocarbon không no",
            "Bài 14: Arene (Hydrocarbon thơm)"
        ]},
        {"id": "chu-de-5", "title": "Chủ đề 5: Dẫn xuất Halogen - Alcohol", "lessons": [
            "Bài 15: Dẫn xuất halogen",
            "Bài 16: Alcohol",
            "Bài 17: Phenol"
        ]},
        {"id": "chu-de-6", "title": "Chủ đề 6: Hợp chất Carbonyl", "lessons": [
            "Bài 18: Hợp chất carbonyl (Aldehyde - Ketone)",
            "Bài 19: Carboxylic acid"
        ]}
    ],
    "12": [
        {"id": "chu-de-1", "title": "Chủ đề 1: Ester - Lipid", "lessons": [
            "Bài 1: Ester - Lipid",
            "Bài 2: Xà phòng và chất giặt rửa"
        ]},
        {"id": "chu-de-2", "title": "Chủ đề 2: Carbohydrate", "lessons": [
            "Bài 3: Glucose và Fructose",
            "Bài 4: Saccharose",
            "Bài 5: Tinh bột và Cellulose"
        ]},
        {"id": "chu-de-3", "title": "Chủ đề 3: Hợp chất chứa Nitrogen", "lessons": [
            "Bài 6: Amine",
            "Bài 7: Amino acid và Peptide",
            "Bài 8: Protein và Enzyme"
        ]},
        {"id": "chu-de-4", "title": "Chủ đề 4: Polymer", "lessons": [
            "Bài 9: Đại cương về polymer",
            "Bài 10: Vật liệu polymer"
        ]},
        {"id": "chu-de-5", "title": "Chủ đề 5: Pin điện và Điện phân", "lessons": [
            "Bài 11: Pin điện hóa",
            "Bài 12: Điện phân"
        ]},
        {"id": "chu-de-6", "title": "Chủ đề 6: Đại cương kim loại", "lessons": [
            "Bài 13: Cấu tạo và tính chất vật lí",
            "Bài 14: Tính chất hóa học của kim loại",
            "Bài 15: Dãy điện hóa của kim loại",
            "Bài 16: Sự ăn mòn kim loại"
        ]},
        {"id": "chu-de-7", "title": "Chủ đề 7: Các nhóm kim loại", "lessons": [
            "Bài 17: Kim loại kiềm và kiềm thổ",
            "Bài 18: Nhôm (Aluminum)",
            "Bài 19: Sắt (Iron) và hợp chất",
            "Bài 20: Đồng (Copper) và hợp chất"
        ]}
    ]
};

for (const grade in chemData) {
    const topics = chemData[grade];
    let sidebar_links = "";
    let content_sections = "";
    
    topics.forEach((topic, idx) => {
        const is_first = idx === 0;
        const active_classes = is_first ? "bg-blue-50 dark:bg-blue-900/30 text-primary font-medium border-l-4 border-primary pl-3" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800";
        const padding = !is_first ? "pl-4" : "";
        
        sidebar_links += '<a href="#' + topic.id + '" class="block px-3 py-2 text-sm rounded-r-md transition-colors ' + active_classes + ' ' + padding + '">' + topic.title + '</a>\n            ';
        
        let lessons_html = "";
        topic.lessons.forEach(lesson => {
            lessons_html += '              <div class="p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow">\n                <div class="flex justify-between items-start">\n                  <div>\n                    <h5 class="font-semibold text-gray-900 dark:text-white mb-1">' + lesson + '</h5>\n                    <p class="text-sm text-gray-500 dark:text-gray-400">Video bài giảng • Tài liệu LT • Bài tập thực hành</p>\n                  </div>\n                  <button class="text-primary hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium">Học ngay <i class="fa-solid fa-angle-right ml-1"></i></button>\n                </div>\n              </div>\n';
        });
              
        content_sections += '        <section id="' + topic.id + '" class="bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8 scroll-mt-24">\n          <div class="flex items-center gap-3 mb-6">\n            <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary">\n              <i class="fa-solid fa-flask-vial"></i>\n            </div>\n            <h2 class="text-2xl font-bold">' + topic.title + '</h2>\n          </div>\n          <div class="space-y-4">\n            ' + lessons_html + '          </div>\n        </section>\n';
    });
        
    const finalHtml = TEMPLATE.replace(/\{\{grade\}\}/g, grade)
                              .replace('{{sidebar_links}}', sidebar_links)
                              .replace('{{content_sections}}', content_sections);
    
    fs.writeFileSync(`courses/hoahoc_${grade}.html`, finalHtml, 'utf8');
}
console.log("Successfully generated Chemistry files.");
