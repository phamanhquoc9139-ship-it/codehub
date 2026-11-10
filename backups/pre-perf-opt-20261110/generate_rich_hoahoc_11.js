const fs = require('fs');

const TEMPLATE = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hóa Học 11 (KNTT) | CodeHub</title>
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
          <a href="../login.html" class="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">Đăng nhập</a>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 shadow-inner">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30">
          <i class="fa-solid fa-book-open"></i> Sách: Kết Nối Tri Thức
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">Hóa Học Lớp 11 (KNTT)</h1>
        <p class="text-lg text-blue-100 mb-8 leading-relaxed font-medium">
          Thiết kế thẻ bài học trực quan, màu sắc sinh động, chi tiết đến từng định nghĩa và phương trình. Trải nghiệm học tập thế hệ mới.
        </p>
      </div>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row gap-8">
      <aside class="lg:w-1/4">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 pb-2 border-b dark:border-gray-700">Mục lục khóa học</h3>
          <nav class="space-y-4">
            {{SIDEBAR}}
          </nav>
        </div>
      </aside>
      <main class="lg:w-3/4 space-y-12">
        {{CONTENT}}
      </main>
    </div>
  </div>

  <footer class="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700 mt-12 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; 2026 CodeHub. Tích hợp chương trình Hóa Học chuẩn mới (KNTT).
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
        link.classList.remove('bg-blue-50', 'dark:bg-blue-900/30', 'text-blue-700', 'font-medium');
        link.classList.add('text-gray-700', 'dark:text-gray-300');
        if (link.getAttribute('href') === "#" + current) {
          link.classList.remove('text-gray-700', 'dark:text-gray-300');
          link.classList.add('bg-blue-50', 'dark:bg-blue-900/30', 'text-blue-700', 'font-medium');
        }
      });
    });
  </script>
</body>
</html>`;

const knttData11 = [
    {
        id: "chuong-1", title: "Chương 1: Cân bằng hoá học", icon: "fa-scale-balanced", color: "blue",
        lessons: [
            { 
                name: "Bài 1: Khái niệm về cân bằng hoá học", 
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-2"><i class="fa-solid fa-arrows-turn-right mr-1"></i> 1. Phản ứng một chiều và Thuận nghịch</h4>
                        <ul class="list-disc list-inside space-y-1 ml-2">
                            <li><strong>Phản ứng một chiều:</strong> Chỉ xảy ra theo một chiều từ chất tham gia tạo thành sản phẩm. Vd: Đốt cháy methane (CH4 + 2O2 &rarr; CO2 + 2H2O).</li>
                            <li><strong>Phản ứng thuận nghịch:</strong> Xảy ra theo hai chiều ngược nhau trong cùng điều kiện. Kí hiệu mũi tên hai chiều (&rlarr;).</li>
                        </ul>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800">
                            <h4 class="font-bold text-sky-700 dark:text-sky-400 mb-2">2. Trạng thái cân bằng & Hằng số Kc</h4>
                            <p class="mb-2"><strong>Trạng thái cân bằng</strong> là lúc tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch (v<sub>t</sub> = v<sub>n</sub>).</p>
                            <p class="mb-1"><strong>Hằng số cân bằng Kc:</strong> Đối với phản ứng aA + bB &rlarr; cC + dD.</p>
                            <code class="block bg-white dark:bg-gray-800 p-2 text-center rounded border border-gray-200 dark:border-gray-600 mt-2 font-mono text-sky-600 dark:text-sky-400">
                                Kc = ([C]^c · [D]^d) / ([A]^a · [B]^b)
                            </code>
                            <p class="text-xs mt-2 text-gray-500 italic">*Chất rắn không đưa vào biểu thức tính Kc.</p>
                        </div>
                        <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">3. Nguyên lí Le Chatelier</h4>
                            <p class="mb-2">Khi một hệ đang ở cân bằng chịu tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất), cân bằng sẽ chuyển dịch theo chiều làm <strong>giảm tác động đó</strong>.</p>
                            <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                                <li><strong>Nhiệt độ:</strong> Tăng nhiệt &rarr; Chiều thu nhiệt (∆H > 0). Giảm nhiệt &rarr; Chiều toả nhiệt (∆H < 0).</li>
                                <li><strong>Áp suất:</strong> Tăng P &rarr; Chiều giảm số mol khí.</li>
                                <li><strong>Chất xúc tác:</strong> Không làm chuyển dịch cân bằng.</li>
                            </ul>
                        </div>
                    </div>
                </div>`
            },
            { 
                name: "Bài 2: Cân bằng trong dung dịch nước", 
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
                            <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-2"><i class="fa-solid fa-bolt mr-1"></i> 1. Sự điện li</h4>
                            <p class="mb-2">Quá trình phân li các chất trong nước thành các ion gọi là sự điện li.</p>
                            <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                                <li><strong>Chất điện li mạnh:</strong> Phân li hoàn toàn (Acid mạnh: HCl, HNO3, H2SO4; Base mạnh: NaOH, KOH, Ba(OH)2; Hầu hết các muối).</li>
                                <li><strong>Chất điện li yếu:</strong> Phân li một phần (Acid yếu: CH3COOH, HF; Base yếu: NH3). Biểu diễn bằng mũi tên 2 chiều (&rlarr;).</li>
                            </ul>
                        </div>
                        <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
                            <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">2. Thuyết Acid-Base Brønsted-Lowry</h4>
                            <p class="mb-2">Thuyết tổng quát hơn thuyết Arrhenius, áp dụng được cho mọi dung môi:</p>
                            <ul class="list-disc list-inside space-y-1 ml-2">
                                <li><strong>Acid:</strong> Chất cho proton (H<sup>+</sup>).</li>
                                <li><strong>Base:</strong> Chất nhận proton (H<sup>+</sup>).</li>
                            </ul>
                            <p class="text-xs mt-2 font-mono bg-white dark:bg-gray-800 p-1 rounded">NH3 + H2O &rlarr; NH4+ + OH- (NH3 nhận H+ là base, H2O cho H+ là acid)</p>
                        </div>
                    </div>
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                        <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">3. Khái niệm pH & Chuẩn độ</h4>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div class="flex-1">
                                <p><strong>Tính pH:</strong> <code>pH = -lg[H+]</code> hoặc <code>[H+] = 10^-pH</code></p>
                                <p class="mt-1">Môi trường: Acid (pH < 7), Trung tính (pH = 7), Base (pH > 7).</p>
                                <p class="mt-2 text-xs italic">Sự thuỷ phân của ion: Các muối chứa ion của acid yếu hoặc base yếu sẽ bị thuỷ phân, làm thay đổi pH của dung dịch.</p>
                            </div>
                            <div class="flex-1 border-l-2 border-emerald-200 dark:border-emerald-700 pl-4">
                                <p><strong>Chuẩn độ Acid-Base:</strong> Phương pháp xác định nồng độ chất bằng dung dịch chuẩn đã biết nồng độ.</p>
                                <p class="mt-1 text-xs">Vd: Dùng dung dịch NaOH 0,1M để chuẩn độ dung dịch HCl chưa biết nồng độ, chỉ thị Phenolphthalein.</p>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            {
                name: "Bài 3: Ôn tập chương 1",
                content: `
                <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300">
                    <h4 class="font-bold text-gray-800 dark:text-white mb-3"><i class="fa-solid fa-list-check mr-1"></i> Hệ thống hóa kiến thức Chương 1</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                            <span class="block text-xl mb-1">⚖️</span>
                            <span class="font-semibold text-xs text-blue-600 dark:text-blue-400">Trạng thái Cân Bằng</span>
                        </div>
                        <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                            <span class="block text-xl mb-1">🔢</span>
                            <span class="font-semibold text-xs text-sky-600 dark:text-sky-400">Hằng số Kc</span>
                        </div>
                        <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                            <span class="block text-xl mb-1">⚡</span>
                            <span class="font-semibold text-xs text-rose-600 dark:text-rose-400">Thuyết Acid-Base</span>
                        </div>
                        <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                            <span class="block text-xl mb-1">💧</span>
                            <span class="font-semibold text-xs text-emerald-600 dark:text-emerald-400">pH & Chuẩn độ</span>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
    {
        id: "chuong-2", title: "Chương 2: Nitrogen - Sulfur", icon: "fa-cloud", color: "sky",
        lessons: [
            { 
                name: "Bài 4: Nitrogen", 
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800">
                        <h4 class="font-bold text-sky-700 dark:text-sky-400 mb-2">1. Trạng thái tự nhiên & Cấu tạo</h4>
                        <p class="mb-1">Chiếm ~78% thể tích không khí. Tồn tại chủ yếu ở dạng phân tử N<sub>2</sub>.</p>
                        <p>Cấu tạo: N≡N (1 liên kết sigma, 2 liên kết pi). Năng lượng liên kết cực kỳ lớn (945 kJ/mol) nên ở nhiệt độ thường, N<sub>2</sub> <strong>rất trơ</strong> về mặt hoá học.</p>
                    </div>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h4 class="font-bold text-gray-700 dark:text-gray-300 mb-2">2. Tính chất hoá học</h4>
                        <ul class="list-disc list-inside space-y-1 ml-2">
                            <li><strong>Tính oxi hoá:</strong> (Với H2 tạo NH3, với kim loại mạnh tạo nitride ở nhiệt độ cao). Vd: N2 + 3H2 &rlarr; 2NH3 (to, P, xt Fe).</li>
                            <li><strong>Tính khử:</strong> Tác dụng với Oxygen ở nhiệt độ rất cao (~3000°C) hoặc tia lửa điện. Vd: N2 + O2 &rlarr; 2NO.</li>
                        </ul>
                    </div>
                </div>`
            },
            { 
                name: "Bài 5: Ammonia - Muối ammonium", 
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-2">1. Ammonia (NH3)</h4>
                            <p class="mb-2">Khí không màu, mùi khai và xốc, nhẹ hơn không khí, tan <strong>rất nhiều</strong> trong nước do có liên kết hydrogen.</p>
                            <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                                <li><strong>Tính base yếu:</strong> NH3 + H2O &rlarr; NH4+ + OH- (làm quỳ tím ẩm hoá xanh).</li>
                                <li><strong>Tính khử mạnh:</strong> Cháy trong oxygen tạo N2; khử một số oxide kim loại.</li>
                                <li><strong>Tổng hợp Haber-Bosch:</strong> N2 + 3H2 &rlarr; 2NH3 (∆H < 0).</li>
                            </ul>
                        </div>
                        <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">2. Muối Ammonium (NH4+)</h4>
                            <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                                <li>Tất cả muối ammonium đều tan tốt trong nước, phân li hoàn toàn.</li>
                                <li><strong>Kém bền nhiệt:</strong> Dễ bị nhiệt phân. (Vd: NH4Cl &rarr; NH3 + HCl; NH4NO3 &rarr; N2O + 2H2O).</li>
                                <li><strong>Nhận biết:</strong> Tác dụng với dung dịch kiềm đun nóng sinh ra khí NH3 mùi khai.</li>
                            </ul>
                        </div>
                    </div>
                </div>`
            },
            { 
                name: "Bài 6: Một số hợp chất của nitrogen với oxygen", 
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h4 class="font-bold text-orange-600 dark:text-orange-400 mb-2"><i class="fa-solid fa-cloud-showers-heavy mr-1"></i> Oxide Nitrogen (NOx) & Mưa Acid</h4>
                        <p class="mb-2">Các oxide của nitrogen (NO, NO2, N2O...) chủ yếu phát thải từ giao thông, nhà máy, sấm sét.</p>
                        <p class="text-xs">Hiện tượng mưa acid: SO2 và NOx bị oxi hoá và hoà tan vào nước mưa tạo thành H2SO4 và HNO3 làm giảm pH của nước mưa (< 5.6).</p>
                    </div>
                    <div class="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
                        <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-2">Nitric Acid (HNO3)</h4>
                        <ul class="list-disc list-inside space-y-2 ml-2">
                            <li><strong>Tính acid mạnh:</strong> Điện li hoàn toàn (HNO3 &rarr; H+ + NO3-). Tác dụng với base, oxide base, muối.</li>
                            <li><strong>Tính oxi hoá cực mạnh:</strong> Oxi hoá hầu hết kim loại (trừ Au, Pt), không giải phóng H2 mà tạo sản phẩm khử của N (NO2, NO, N2O, N2, NH4NO3).
                                <br/><span class="text-xs ml-4">Vd: Cu + 4HNO3(đặc) &rarr; Cu(NO3)2 + 2NO2 + 2H2O.</span>
                            </li>
                        </ul>
                    </div>
                </div>`
            },
            {
                name: "Bài 7: Sulfur và sulfur dioxide",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800">
                            <h4 class="font-bold text-yellow-700 dark:text-yellow-400 mb-2">1. Sulfur (S)</h4>
                            <p class="mb-1">Chất rắn, màu vàng, không tan trong nước. Phân tử gồm 8 nguyên tử dạng vòng (S8).</p>
                            <p class="mb-1"><strong>Tính oxi hoá:</strong> Tác dụng H2, kim loại tạo muối sulfide. (Hg phản ứng ngay nhiệt độ thường).</p>
                            <p><strong>Tính khử:</strong> Tác dụng với phi kim mạnh hơn (O2, F2, Cl2). S + O2 &rarr; SO2.</p>
                        </div>
                        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h4 class="font-bold text-purple-700 dark:text-purple-400 mb-2">2. Sulfur dioxide (SO2)</h4>
                            <p class="mb-1">Khí không màu, mùi hắc, độc. Là nguyên nhân chính gây ô nhiễm và mưa acid.</p>
                            <p class="mb-1"><strong>Vừa khử vừa oxi hoá:</strong>
                                <br/>- Tính khử: SO2 + Br2 + 2H2O &rarr; 2HBr + H2SO4 (làm mất màu nước Bromine).
                                <br/>- Tính oxi hoá: SO2 + 2H2S &rarr; 3S + 2H2O.
                            </p>
                        </div>
                    </div>
                </div>`
            },
            {
                name: "Bài 8: Sulfuric acid và muối sulfate",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
                        <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-2">1. Sulfuric Acid (H2SO4)</h4>
                        <ul class="list-disc list-inside space-y-2 ml-2">
                            <li><strong>Tính chất vật lí & Pha loãng:</strong> Chất lỏng sánh như dầu, háo nước. <strong>Nguyên tắc:</strong> Rót từ từ acid vào nước, KHÔNG bao giờ rót nước vào acid.</li>
                            <li><strong>H2SO4 loãng:</strong> Tính acid mạnh thông thường.</li>
                            <li><strong>H2SO4 đặc nóng:</strong> Tính oxi hoá cực mạnh (oxi hoá Cu, C, S, P...) và tính háo nước mạnh (làm đen đường saccharose).
                                <br/><span class="text-xs ml-4">Cu + 2H2SO4(đặc, nóng) &rarr; CuSO4 + SO2 + 2H2O.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800">
                        <h4 class="font-bold text-sky-700 dark:text-sky-400 mb-2">2. Nhận biết ion Sulfate</h4>
                        <p>Dùng thuốc thử là dung dịch chứa ion Ba<sup>2+</sup> (BaCl2, Ba(OH)2). Hiện tượng: Tạo kết tủa trắng BaSO4 không tan trong acid loãng (HCl, HNO3).</p>
                    </div>
                </div>`
            },
            {
                name: "Bài 9: Ôn tập chương 2",
                content: `
                <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300">
                    <h4 class="font-bold text-gray-800 dark:text-white mb-3"><i class="fa-solid fa-code-branch mr-1"></i> Sơ đồ chuyển hoá Nitrogen & Sulfur</h4>
                    <p class="mb-2"><strong>Chuỗi Nitrogen:</strong> N2 &rlarr; NH3 &rarr; NO &rarr; NO2 &rarr; HNO3 &rarr; Muối Nitrate.</p>
                    <p><strong>Chuỗi Sulfur:</strong> FeS2/S &rarr; SO2 &rarr; SO3 &rarr; H2SO4 &rarr; Muối Sulfate.</p>
                </div>`
            }
        ]
    },
    {
        id: "chuong-3", title: "Chương 3: Đại cương về hoá học hữu cơ", icon: "fa-flask-vial", color: "amber",
        lessons: [
            {
                name: "Bài 10: Hợp chất hữu cơ và hoá học hữu cơ",
                content: `
                <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800 text-sm text-gray-700 dark:text-gray-300">
                    <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">Khái quát Hợp chất Hữu cơ</h4>
                    <p class="mb-2">Là hợp chất của carbon (ngoại trừ CO, CO2, muối carbonate, cyanide, carbide...).</p>
                    <ul class="list-disc list-inside space-y-1 ml-2">
                        <li><strong>Thành phần:</strong> Nhất thiết chứa C, thường có H, O, N, Halogen.</li>
                        <li><strong>Đặc điểm cấu tạo:</strong> Liên kết chủ yếu là liên kết cộng hoá trị.</li>
                        <li><strong>Tính chất vật lí:</strong> Thường có nhiệt độ nóng chảy/sôi thấp, kém bền nhiệt, dễ bay hơi, ít tan trong nước, tan tốt trong dung môi hữu cơ.</li>
                        <li><strong>Phân loại:</strong> Hydrocarbon (chỉ có C, H) và Dẫn xuất hydrocarbon (có chứa nguyên tố khác: O, N, Halogen...).</li>
                    </ul>
                </div>`
            },
            {
                name: "Bài 11: Phương pháp tách biệt và tinh chế",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
                            <span class="block text-xl mb-1 text-sky-500"><i class="fa-solid fa-temperature-arrow-up"></i></span>
                            <span class="font-bold text-xs">Chưng cất</span>
                            <p class="text-[10px] mt-1 text-gray-500 dark:text-gray-400">Dựa vào nhiệt độ sôi khác nhau. Vd: Nấu rượu.</p>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
                            <span class="block text-xl mb-1 text-amber-500"><i class="fa-solid fa-flask"></i></span>
                            <span class="font-bold text-xs">Chiết</span>
                            <p class="text-[10px] mt-1 text-gray-500 dark:text-gray-400">Dựa vào độ hoà tan khác nhau trong 2 dung môi. Vd: Ngâm rượu thuốc.</p>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
                            <span class="block text-xl mb-1 text-indigo-500"><i class="fa-solid fa-icicles"></i></span>
                            <span class="font-bold text-xs">Kết tinh</span>
                            <p class="text-[10px] mt-1 text-gray-500 dark:text-gray-400">Dựa vào độ tan thay đổi theo nhiệt độ. Vd: Sản xuất đường.</p>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
                            <span class="block text-xl mb-1 text-emerald-500"><i class="fa-solid fa-bars-staggered"></i></span>
                            <span class="font-bold text-xs">Sắc kí cột</span>
                            <p class="text-[10px] mt-1 text-gray-500 dark:text-gray-400">Khả năng hấp phụ & hoà tan trên pha tĩnh/động.</p>
                        </div>
                    </div>
                </div>`
            },
            {
                name: "Bài 12: Công thức phân tử hợp chất hữu cơ",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-100 dark:border-sky-800">
                        <h4 class="font-bold text-sky-700 dark:text-sky-400 mb-2">Các công thức biểu diễn</h4>
                        <ul class="list-disc list-inside space-y-1 ml-2">
                            <li><strong>Công thức đơn giản nhất:</strong> Tỉ lệ tối giản số nguyên tử C, H, O... (CxHyOz)n.</li>
                            <li><strong>Công thức phân tử (CTPT):</strong> Cho biết số lượng nguyên tử mỗi loại trong 1 phân tử.</li>
                        </ul>
                    </div>
                    <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                        <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">Phổ khối lượng (MS)</h4>
                        <p>Dùng để xác định Phân tử khối (M) của hợp chất hữu cơ. Giá trị <code>m/z</code> của peak ion phân tử (thường là peak lớn nhất bên phải) chính bằng phân tử khối M.</p>
                    </div>
                </div>`
            },
            {
                name: "Bài 13: Cấu tạo hoá học",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                        <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Thuyết cấu tạo hoá học (Butlerov)</h4>
                        <p class="mb-1">Carbon luôn có hoá trị IV. Các nguyên tử liên kết với nhau theo đúng hoá trị và thứ tự xác định tạo mạch carbon (mạch thẳng, mạch nhánh, mạch vòng).</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-gray-700 dark:text-gray-300 mb-2">Đồng phân (Isomer)</h4>
                            <p>Cùng CTPT nhưng cấu tạo hoá học khác nhau &rarr; Tính chất khác nhau. (Gồm đồng phân mạch carbon, loại nhóm chức, vị trí nhóm chức, và đồng phân hình học cis-trans).</p>
                        </div>
                        <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                            <h4 class="font-bold text-gray-700 dark:text-gray-300 mb-2">Đồng đẳng (Homolog)</h4>
                            <p>Tính chất tương tự nhau, nhưng phân tử hơn kém nhau một hoặc nhiều nhóm -CH2-. Lập thành dãy đồng đẳng.</p>
                        </div>
                    </div>
                </div>`
            },
            { name: "Bài 14: Ôn tập chương 3", content: `<div class="p-4 bg-gray-50 dark:bg-gray-700/50 text-center italic text-sm text-gray-500 rounded border border-gray-200">Luyện tập thiết lập công thức phân tử từ kết quả phân tích nguyên tố (%C, %H, %O) và dữ kiện phổ MS. Luyện tập phân loại đồng phân, đồng đẳng.</div>` }
        ]
    },
    {
        id: "chuong-4", title: "Chương 4: Hydrocarbon", icon: "fa-fire", color: "rose",
        lessons: [
            {
                name: "Bài 15: Alkane",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
                        <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-2">Khái niệm & Tính chất</h4>
                        <p class="mb-2">Hydrocarbon no, mạch hở. CTPT chung: <strong>CnH2n+2 (n≥1)</strong>. Trong phân tử chỉ có liên kết đơn (sigma) bền vững.</p>
                        <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                            <li><strong>Phản ứng thế Halogen:</strong> Đặc trưng nhất (Cơ chế gốc tự do). Vd: CH4 + Cl2 &rarr; CH3Cl + HCl (as).</li>
                            <li><strong>Phản ứng Cracking & Reforming:</strong> Bẻ gãy mạch hoặc cấu trúc lại mạch (thường dùng trong lọc hoá dầu tăng chỉ số octane).</li>
                            <li><strong>Phản ứng cháy:</strong> Toả rất nhiều nhiệt (dùng làm nhiên liệu, gas, xăng). n(H2O) > n(CO2).</li>
                        </ul>
                    </div>
                </div>`
            },
            {
                name: "Bài 16: Hydrocarbon không no",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
                            <h4 class="font-bold text-orange-700 dark:text-orange-400 mb-2">Alkene (CnH2n, n≥2)</h4>
                            <p class="text-xs mb-2">Chứa 1 liên kết đôi C=C (gồm 1 liên kết sigma bền và 1 liên kết pi kém bền). Có thể có đồng phân hình học (cis/trans).</p>
                            <p class="text-xs">Phản ứng đặc trưng: <strong>Cộng</strong> (cộng H2, X2, HX) theo quy tắc Markovnikov; Trùng hợp tạo Polymer (như PE, PP); Làm mất màu dung dịch KMnO4.</p>
                        </div>
                        <div class="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-100 dark:border-pink-800">
                            <h4 class="font-bold text-pink-700 dark:text-pink-400 mb-2">Alkyne (CnH2n-2, n≥2)</h4>
                            <p class="text-xs mb-2">Chứa 1 liên kết ba C≡C (gồm 1 sigma và 2 pi). Alk-1-yne (có liên kết ba đầu mạch) có phản ứng đặc trưng: <strong>Thế ion kim loại</strong> với dung dịch AgNO3/NH3 tạo kết tủa vàng.</p>
                        </div>
                    </div>
                </div>`
            },
            {
                name: "Bài 17: Arene (Hydrocarbon thơm)",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800">
                        <h4 class="font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-2">Benzene & Đồng đẳng (CnH2n-6, n≥6)</h4>
                        <p class="mb-2">Chứa vòng benzene bền vững (hệ electron pi liên hợp). Tính chất đặc trưng: <strong>"Dễ thế, khó cộng, bền với chất oxi hoá"</strong>.</p>
                        <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                            <li><strong>Phản ứng thế:</strong> Thế halogen (xt FeBr3/Fe, to), thế nitro (HNO3 đặc, H2SO4 đặc).</li>
                            <li><strong>Quy tắc thế:</strong> Nếu có sẵn nhóm đẩy e (-CH3, -OH) ưu tiên thế vào ortho/para. Nếu nhóm hút e (-NO2) ưu tiên meta.</li>
                            <li><strong>Oxi hoá:</strong> Benzene không làm mất màu KMnO4. Toluene làm mất màu KMnO4 khi đun nóng.</li>
                        </ul>
                    </div>
                </div>`
            },
            { name: "Bài 18: Ôn tập chương 4", content: `<div class="p-4 bg-gray-50 dark:bg-gray-700/50 text-center italic text-sm text-gray-500 rounded border border-gray-200">Sơ đồ tổng hợp nhận biết Alkane, Alkene, Alkyne, Toluene bằng dung dịch Br2, KMnO4, và AgNO3/NH3.</div>` }
        ]
    },
    {
        id: "chuong-5", title: "Chương 5: Dẫn xuất halogen - Alcohol - Phenol", icon: "fa-vial", color: "purple",
        lessons: [
            {
                name: "Bài 19: Dẫn xuất halogen",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h4 class="font-bold text-gray-800 dark:text-white mb-2">Tính chất hoá học cơ bản (R-X)</h4>
                        <ul class="list-disc list-inside space-y-1 ml-2">
                            <li><strong>Phản ứng thế (Thuỷ phân):</strong> Đun với dung dịch NaOH, nhóm -X bị thay bởi nhóm -OH tạo alcohol.<br/><span class="font-mono text-xs">CH3CH2Br + NaOH(aq) &rarr; CH3CH2OH + NaBr</span></li>
                            <li><strong>Phản ứng tách (Quy tắc Zaitsev):</strong> Đun với NaOH trong ethanol (C2H5OH), tách HX tạo alkene. Halogen ưu tiên tách cùng H ở C bậc cao bên cạnh.</li>
                        </ul>
                    </div>
                </div>`
            },
            {
                name: "Bài 20: Alcohol",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h4 class="font-bold text-purple-700 dark:text-purple-400 mb-2">Đặc điểm & Vật lí</h4>
                            <p class="text-xs">Nhóm -OH gắn với Carbon no. Nhiệt độ sôi cao và dễ tan trong nước nhờ tạo được <strong>liên kết hydrogen</strong> với nhau và với nước.</p>
                        </div>
                        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">Tính chất hoá học</h4>
                            <ul class="list-disc list-inside text-xs space-y-1 ml-1">
                                <li><strong>Thế H:</strong> P/ứ với Na, K giải phóng H2.</li>
                                <li><strong>Tách nước:</strong> Tạo alkene (170°C, H2SO4 đặc) hoặc ether (140°C).</li>
                                <li><strong>Oxi hoá không hoàn toàn:</strong> Bậc 1 &rarr; Aldehyde; Bậc 2 &rarr; Ketone; Bậc 3 &rarr; Khó bị oxi hoá.</li>
                            </ul>
                        </div>
                    </div>
                </div>`
            },
            {
                name: "Bài 21: Phenol",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                        <h4 class="font-bold text-indigo-700 dark:text-indigo-400 mb-2">Cấu tạo & Tính chất (C6H5OH)</h4>
                        <p class="mb-2 text-xs">Nhóm -OH gắn trực tiếp vào vòng thơm. Do ảnh hưởng qua lại giữa vòng benzene và nhóm -OH:</p>
                        <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                            <li><strong>Tính acid yếu:</strong> Yếu hơn nấc 1 của H2CO3. Tác dụng với NaOH tạo C6H5ONa nhưng không phản ứng với NaHCO3.</li>
                            <li><strong>Phản ứng thế vòng thơm:</strong> Rất dễ dàng, phản ứng với dung dịch Br2 tạo ngay kết tủa trắng (2,4,6-tribromophenol). Dùng để nhận biết phenol.</li>
                        </ul>
                    </div>
                </div>`
            },
            { name: "Bài 22: Ôn tập chương 5", content: `<div class="p-4 bg-gray-50 dark:bg-gray-700/50 text-center italic text-sm text-gray-500 rounded border border-gray-200">Ôn tập phân biệt Alcohol và Phenol. Sự ảnh hưởng qua lại giữa các nhóm nguyên tử trong phân tử Phenol.</div>` }
        ]
    },
    {
        id: "chuong-6", title: "Chương 6: Hợp chất carbonyl - Carboxylic acid", icon: "fa-droplet", color: "emerald",
        lessons: [
            {
                name: "Bài 23: Hợp chất carbonyl",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Aldehyde (R-CHO)</h4>
                            <p class="text-xs mb-1">Vừa có tính oxi hoá (cộng H2/Ni tạo alcohol bậc 1), vừa có tính khử.</p>
                            <p class="text-xs"><strong>Phản ứng tráng bạc (thuốc thử Tollens):</strong> R-CHO + 2[Ag(NH3)2]OH &rarr; R-COONH4 + 2Ag&darr; + 3NH3 + H2O.</p>
                        </div>
                        <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h4 class="font-bold text-teal-700 dark:text-teal-400 mb-2">Ketone (R-CO-R')</h4>
                            <p class="text-xs mb-1">Tính oxi hoá (cộng H2/Ni tạo alcohol bậc 2).</p>
                            <p class="text-xs"><strong>Không</strong> có phản ứng tráng bạc. Những ketone có chứa nhóm methyl kế bên nhóm carbonyl (CH3-CO-) có <strong>phản ứng tạo iodoform (CHI3)</strong> kết tủa vàng.</p>
                        </div>
                    </div>
                </div>`
            },
            {
                name: "Bài 24: Carboxylic acid",
                content: `
                <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                        <h4 class="font-bold text-green-700 dark:text-green-400 mb-2">Cấu tạo & Tính acid (R-COOH)</h4>
                        <p class="mb-2 text-xs">Liên kết hydrogen liên phân tử rất bền (thường tồn tại dạng dimer) nên nhiệt độ sôi cao hơn cả alcohol tương ứng.</p>
                        <ul class="list-disc list-inside space-y-1 ml-2 text-xs">
                            <li><strong>Tính acid:</strong> Yếu, nhưng làm đỏ quỳ tím. Đầy đủ tính chất: tác dụng kim loại trước H, oxide base, base, muối (giải phóng CO2 từ Na2CO3).</li>
                            <li><strong>Phản ứng ester hoá:</strong> Tác dụng với alcohol tạo ester + H2O (phản ứng thuận nghịch, xúc tác H2SO4 đặc, to). Nhóm -OH của acid tách ra cùng H của alcohol.</li>
                        </ul>
                    </div>
                </div>`
            },
            { name: "Bài 25: Ôn tập chương 6", content: `<div class="p-4 bg-gray-50 dark:bg-gray-700/50 text-center italic text-sm text-gray-500 rounded border border-gray-200">Sơ đồ chuyển hoá tổng hợp hữu cơ từ Hydrocarbon &rarr; Dẫn xuất halogen &rarr; Alcohol &rarr; Aldehyde/Ketone &rarr; Carboxylic acid. Nhận biết các chất hữu cơ có nhóm chức oxygen.</div>` }
        ]
    }
];

let sidebarHtml = '';
let contentHtml = '';

knttData11.forEach((chuong, idx) => {
    // Generate Sidebar
    const isFirst = idx === 0;
    const parentClass = isFirst ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800";
    
    sidebarHtml += '            <div class="sidebar-item">\n' +
                   '                <a href="#' + chuong.id + '" class="block px-3 py-2 text-sm rounded-lg transition-colors ' + parentClass + '">' + chuong.title + '</a>\n' +
                   '                <ul class="pl-4 mt-1 space-y-1.5 border-l-2 border-gray-100 dark:border-gray-700 ml-4">\n';
                   
    chuong.lessons.forEach(lesson => {
        sidebarHtml += '                    <li><a href="#' + chuong.id + '" class="block text-[13px] text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">' + lesson.name + '</a></li>\n';
    });
    sidebarHtml += '                </ul>\n' +
                   '            </div>\n';

    // Generate Content
    contentHtml += '        <!-- ' + chuong.title + ' -->\n' +
                   '        <section id="' + chuong.id + '" class="scroll-mt-24">\n' +
                   '            <div class="mb-6 pb-2 border-b-2 border-' + chuong.color + '-500 inline-block mt-8">\n' +
                   '                <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">\n' +
                   '                    <i class="fa-solid ' + chuong.icon + ' text-' + chuong.color + '-600"></i> ' + chuong.title + '\n' +
                   '                </h2>\n' +
                   '            </div>\n';
    
    chuong.lessons.forEach((lesson, lIdx) => {
        const badgeColor = chuong.color;
        // Parse the lesson name to extract "Bài X" and the actual title
        const match = lesson.name.match(/^(Bài \d+):\s*(.+)$/);
        let badgeHtml = '';
        let titleText = lesson.name;
        if (match) {
            badgeHtml = '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-' + badgeColor + '-100 text-' + badgeColor + '-700 dark:bg-' + badgeColor + '-900/50 dark:text-' + badgeColor + '-300">' + match[1] + '</span>';
            titleText = match[2];
        }

        contentHtml += '            <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden">\n' +
                       '                <div class="px-5 py-6">\n' +
                       '                    <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center flex-wrap gap-2 mb-4">\n' +
                       '                        ' + badgeHtml + '\n' +
                       '                        <span>' + titleText + '</span>\n' +
                       '                    </h3>\n' +
                       '                    ' + lesson.content + '\n' +
                       '                </div>\n' +
                       '            </div>\n';
    });
    
    contentHtml += '        </section>\n';
});

const finalHtml = TEMPLATE.replace('{{SIDEBAR}}', sidebarHtml).replace('{{CONTENT}}', contentHtml);
fs.writeFileSync('courses/hoahoc_11.html', finalHtml, 'utf8');
console.log('Successfully generated rich HTML for hoahoc_11.html');
