const fs = require('fs');

const TEMPLATE = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hóa Học 10 | CodeHub</title>
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
                  <a href="hoahoc_10.html" class="block px-4 py-2 text-sm text-primary bg-blue-50 dark:bg-blue-900/30">Hóa học 10</a>
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
          <i class="fa-solid fa-flask"></i> GDPT 2018 (Sách mới)
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Hóa Học Lớp 10 Toàn Diện</h1>
        <p class="text-lg text-emerald-100 mb-8 leading-relaxed">
          Hệ thống hóa toàn bộ lý thuyết Cấu tạo nguyên tử, Bảng tuần hoàn, Liên kết hóa học và Phản ứng oxi hóa - khử theo chương trình chuẩn mới nhất.
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
          <nav class="space-y-1">
            <a href="#chu-de-1" class="block px-3 py-2 text-sm rounded-lg transition-colors bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 font-medium">Chủ đề 1: Cấu tạo nguyên tử</a>
            <a href="#chu-de-2" class="block px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Chủ đề 2: Bảng tuần hoàn</a>
            <a href="#chu-de-3" class="block px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Chủ đề 3: Liên kết hóa học</a>
            <a href="#chu-de-4" class="block px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Chủ đề 4: Phản ứng oxi hóa khử</a>
            <a href="#chu-de-5" class="block px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Chủ đề 5: Năng lượng hóa học</a>
            <a href="#chu-de-6" class="block px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Chủ đề 6: Tốc độ phản ứng</a>
            <a href="#chu-de-7" class="block px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Chủ đề 7: Nhóm Halogen</a>
          </nav>
        </div>
      </aside>

      <!-- Content Area -->
      <main class="lg:w-3/4 space-y-12">
        
        <!-- Chu de 1 -->
        <section id="chu-de-1" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-emerald-500 inline-block">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-atom text-emerald-600"></i> Chủ đề 1: Cấu tạo nguyên tử
                </h2>
            </div>
            
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Bài 1</span>
                        <span>Thành phần của nguyên tử</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2">1. Thành phần cấu tạo nguyên tử</h4>
                            <ul class="list-disc list-inside space-y-1 ml-2">
                                <li>Nguyên tử gồm hạt nhân nằm ở tâm và lớp vỏ electron chuyển động xung quanh.</li>
                                <li><strong>Hạt nhân</strong> chứa các proton (mang điện dương) và neutron (không mang điện).</li>
                                <li><strong>Lớp vỏ</strong> chứa các electron (mang điện âm).</li>
                            </ul>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                                <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">2. Điện tích và khối lượng</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Điện tích Proton = +1 (e)</li>
                                    <li>Điện tích Electron = -1 (e)</li>
                                    <li>Khối lượng nguyên tử tập trung hầu hết ở hạt nhân (vì khối lượng e rất nhỏ).</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
                                <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">3. Kích thước</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Kích thước nguyên tử lớn hơn hạt nhân khoảng 10.000 lần.</li>
                                    <li>Nếu xem nguyên tử như sân vận động thì hạt nhân chỉ bằng quả bóng bàn ở giữa sân.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300">Bài 2</span>
                        <span>Nguyên tố hóa học & Đồng vị</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-sky-600 dark:text-sky-400 mb-2">1. Khái niệm và kí hiệu</h4>
                            <ul class="list-disc list-inside space-y-2 ml-2">
                                <li><strong>Nguyên tố hóa học:</strong> Là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (Z).</li>
                                <li><strong>Số khối (A):</strong> Bằng tổng số hạt proton (Z) và neutron (N). <code>A = Z + N</code></li>
                                <li><strong>Kí hiệu nguyên tử:</strong> <code>^A_Z X</code> (VD: <code>^12_6 C</code>)</li>
                            </ul>
                        </div>
                        
                        <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">2. Đồng vị (Isotope)</h4>
                            <p class="mb-2">Đồng vị là các nguyên tử có cùng số proton (Z) nhưng khác nhau về số neutron (N) &rarr; khác nhau về số khối (A).</p>
                            <p><strong>Công thức tính Nguyên tử khối trung bình:</strong> <code>A_tb = (a*A + b*B) / 100</code></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">Bài 3</span>
                        <span>Cấu trúc lớp vỏ electron</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                                <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-2">1. Lớp và phân lớp</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Có 7 lớp electron (K, L, M, N, O, P, Q). Lớp K (n=1) gần hạt nhân nhất.</li>
                                    <li>Mỗi lớp có n phân lớp: s, p, d, f. Lớp 1 chỉ có phân lớp 1s. Lớp 2 có 2s, 2p.</li>
                                    <li>Phân lớp s tối đa 2e, p tối đa 6e, d tối đa 10e, f tối đa 14e.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                                <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-2">2. Cấu hình electron</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Thứ tự năng lượng: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d...</li>
                                    <li>Nguyên lý Pauli, Nguyên lý Vững bền, Quy tắc Hund.</li>
                                    <li>Dựa vào số e lớp ngoài cùng để xác định: kim loại (1-3e), phi kim (5-7e), khí hiếm (8e).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chu de 2 -->
        <section id="chu-de-2" class="scroll-mt-24">
            <div class="mb-6 pb-2 border-b-2 border-emerald-500 inline-block mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-table-cells text-emerald-600"></i> Chủ đề 2: Bảng tuần hoàn các nguyên tố
                </h2>
            </div>
            
            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="px-5 py-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">Bài 4-6</span>
                        <span>Cấu tạo, Xu hướng biến đổi & Định luật tuần hoàn</span>
                    </h3>
                    
                    <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-teal-600 dark:text-teal-400 mb-2">1. Cấu tạo Bảng Tuần Hoàn</h4>
                            <ul class="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Ô nguyên tố:</strong> Số thứ tự ô = số hiệu nguyên tử Z = số p = số e.</li>
                                <li><strong>Chu kì:</strong> Hàng ngang. Số thứ tự chu kì = số lớp electron.</li>
                                <li><strong>Nhóm:</strong> Cột dọc. Có nhóm A và nhóm B. Số thứ tự nhóm A = số electron hóa trị (số e lớp ngoài cùng).</li>
                            </ul>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
                                <h4 class="font-bold text-orange-700 dark:text-orange-400 mb-2">2. Trong một chu kì (từ trái qua phải)</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Bán kính nguyên tử: giảm dần.</li>
                                    <li>Độ âm điện: tăng dần.</li>
                                    <li>Tính kim loại giảm dần, tính phi kim tăng dần.</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                                <h4 class="font-bold text-purple-700 dark:text-purple-400 mb-2">3. Trong một nhóm A (từ trên xuống)</h4>
                                <ul class="list-disc list-inside space-y-1 ml-2">
                                    <li>Bán kính nguyên tử: tăng dần.</li>
                                    <li>Độ âm điện: giảm dần.</li>
                                    <li>Tính kim loại tăng dần, tính phi kim giảm dần.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
</html>
`
fs.writeFileSync('courses/hoahoc_10.html', TEMPLATE, 'utf8');
console.log('Done rewriting hoahoc_10.html');
