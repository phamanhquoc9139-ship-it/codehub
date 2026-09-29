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
          <i class="fa-solid fa-book-open"></i> Sách: Kết Nối Tri Thức
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Hóa Học Lớp 11 (KNTT)</h1>
        <p class="text-lg text-emerald-100 mb-8 leading-relaxed">
          Bám sát cấu trúc SGK Hóa Học 11 - Kết Nối Tri Thức. Tích hợp trọn bộ 6 chương, 25 bài học từ Cân bằng hóa học đến Đại cương Hữu cơ và các hợp chất quan trọng.
        </p>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- Sidebar / Table of Contents -->
      <aside class="lg:w-1/4">
        <div class="sticky top-24 bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
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
          &copy; 2026 CodeHub. Tích hợp chương trình Hóa Học chuẩn mới (KNTT).
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

const knttData11 = [
    {
        id: "chuong-1", title: "Chương 1: Cân bằng hoá học", icon: "fa-scale-balanced", color: "blue",
        lessons: [
            { name: "Bài 1: Khái niệm về cân bằng hoá học", content: "<strong>Phản ứng thuận nghịch:</strong> Là phản ứng xảy ra theo hai chiều ngược nhau trong cùng một điều kiện.<br/><strong>Cân bằng hoá học:</strong> Trạng thái của phản ứng thuận nghịch khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch (vt = vn).<br/><strong>Nguyên lí chuyển dịch cân bằng Le Chatelier:</strong> Một hệ đang ở trạng thái cân bằng, nếu chịu tác động từ bên ngoài (nồng độ, áp suất, nhiệt độ) thì cân bằng sẽ chuyển dịch theo chiều làm giảm tác động đó." },
            { name: "Bài 2: Cân bằng trong dung dịch nước", content: "<strong>Sự điện li:</strong> Quá trình chất tan trong nước phân li thành các ion (Cation và Anion).<br/><strong>Thuyết acid-base của Brønsted - Lowry:</strong> Acid là chất cho proton (H+), base là chất nhận proton.<br/><strong>pH:</strong> pH = -log[H+]. Môi trường acid (pH < 7), trung tính (pH = 7), base (pH > 7)." },
            { name: "Bài 3: Ôn tập chương 1", content: "Hệ thống hoá lại các kiến thức về phản ứng thuận nghịch, cân bằng hoá học, hằng số cân bằng (Kc), và sự chuyển dịch cân bằng. Ôn tập cách tính pH, xác định tính acid/base của dung dịch muối, và phương trình ion rút gọn." }
        ]
    },
    {
        id: "chuong-2", title: "Chương 2: Nitrogen - Sulfur", icon: "fa-cloud", color: "sky",
        lessons: [
            { name: "Bài 4: Nitrogen", content: "<strong>Tính chất:</strong> Khí không màu, không mùi, không vị. Phân tử N2 có liên kết ba (N≡N) rất bền nên ở nhiệt độ thường nitrogen khá trơ về mặt hoá học.<br/><strong>Ứng dụng:</strong> Môi trường trơ trong luyện kim, thực phẩm; nitrogen lỏng để bảo quản mẫu vật." },
            { name: "Bài 5: Ammonia - Muối ammonium", content: "<strong>Ammonia (NH3):</strong> Khí mùi khai và xốc, tan rất nhiều trong nước tạo dung dịch có tính base yếu. Ammonia có tính khử mạnh.<br/><strong>Muối ammonium (NH4+):</strong> Dễ tan trong nước, kém bền với nhiệt (dễ bị nhiệt phân), tác dụng với kiềm giải phóng khí NH3." },
            { name: "Bài 6: Một số hợp chất của nitrogen với oxygen", content: "<strong>Các oxide của nitrogen (NOx):</strong> Thường sinh ra từ núi lửa, cháy rừng, động cơ đốt trong. Nguyên nhân chính gây mưa acid và khói mù quang hoá.<br/><strong>Nitric acid (HNO3):</strong> Acid rất mạnh, có tính oxi hoá rất mạnh (oxi hoá được hầu hết kim loại trừ Au, Pt)." },
            { name: "Bài 7: Sulfur và sulfur dioxide", content: "<strong>Sulfur (S):</strong> Có tính oxi hoá (khi tác dụng với kim loại, H2) và tính khử (khi tác dụng với O2, chất oxi hoá mạnh).<br/><strong>Sulfur dioxide (SO2):</strong> Khí mùi hắc, độc. Thể hiện tính oxi hoá và tính khử. Gây mưa acid nhưng cũng có ứng dụng tẩy trắng, diệt khuẩn." },
            { name: "Bài 8: Sulfuric acid và muối sulfate", content: "<strong>H2SO4 loãng:</strong> Có tính acid mạnh.<br/><strong>H2SO4 đặc:</strong> Có tính acid mạnh, tính oxi hoá mạnh (oxi hoá nhiều kim loại, phi kim) và tính háo nước mạnh.<br/><strong>Nhận biết ion sulfate (SO4 2-):</strong> Dùng ion Ba2+ tạo kết tủa trắng BaSO4 không tan trong acid." },
            { name: "Bài 9: Ôn tập chương 2", content: "Hệ thống hoá kiến thức về tính chất hoá học của N2, NH3, HNO3, S, SO2, H2SO4. Mối liên hệ giữa các hợp chất và các phản ứng đặc trưng. Ứng dụng thực tiễn và vấn đề môi trường (mưa acid)." }
        ]
    },
    {
        id: "chuong-3", title: "Chương 3: Đại cương về hoá học hữu cơ", icon: "fa-flask-vial", color: "amber",
        lessons: [
            { name: "Bài 10: Hợp chất hữu cơ và hoá học hữu cơ", content: "Hợp chất hữu cơ là hợp chất của carbon (trừ các carbide, carbonate, cyanide, CO, CO2...). Đặc điểm chung: Liên kết chủ yếu là cộng hoá trị, nhiệt độ nóng chảy/sôi thấp, dễ bay hơi, dễ cháy." },
            { name: "Bài 11: Phương pháp tách biệt và tinh chế hợp chất hữu cơ", content: "<strong>Chưng cất:</strong> Tách các chất lỏng có nhiệt độ sôi khác nhau.<br/><strong>Chiết:</strong> Dựa vào độ hòa tan khác nhau trong 2 dung môi không đồng nhất.<br/><strong>Kết tinh:</strong> Dựa vào sự thay đổi độ tan theo nhiệt độ.<br/><strong>Sắc kí cột:</strong> Dựa vào khả năng hấp phụ và hoà tan khác nhau." },
            { name: "Bài 12: Công thức phân tử hợp chất hữu cơ", content: "Phân tích nguyên tố (Định tính và Định lượng). Sử dụng phổ khối lượng (MS) để xác định phân tử khối. Lập công thức phân tử từ công thức đơn giản nhất và phân tử khối." },
            { name: "Bài 13: Cấu tạo hoá học hợp chất hữu cơ", content: "<strong>Thuyết cấu tạo hoá học:</strong> Các nguyên tử liên kết với nhau theo đúng hoá trị và theo một thứ tự nhất định.<br/><strong>Đồng đẳng:</strong> Tính chất tương tự nhau nhưng hơn kém nhau một hay nhiều nhóm -CH2-. <br/><strong>Đồng phân:</strong> Cùng công thức phân tử nhưng cấu tạo khác nhau." },
            { name: "Bài 14: Ôn tập chương 3", content: "Luyện tập lập công thức phân tử, viết công thức cấu tạo các đồng phân, gọi tên và nhận biết các loại đồng phân (mạch carbon, loại nhóm chức, vị trí nhóm chức)." }
        ]
    },
    {
        id: "chuong-4", title: "Chương 4: Hydrocarbon", icon: "fa-fire", color: "rose",
        lessons: [
            { name: "Bài 15: Alkane", content: "Hydrocarbon no, mạch hở (CnH2n+2, n≥1). Có các phản ứng đặc trưng: Phản ứng thế halogen (cơ chế gốc tự do), phản ứng cracking, phản ứng reforming và phản ứng cháy." },
            { name: "Bài 16: Hydrocarbon không no", content: "<strong>Alkene (CnH2n, n≥2):</strong> Có 1 liên kết đôi C=C. <br/><strong>Alkyne (CnH2n-2, n≥2):</strong> Có 1 liên kết ba C≡C.<br/>Phản ứng đặc trưng là phản ứng cộng (H2, X2, HX) tuân theo quy tắc Markovnikov, phản ứng trùng hợp (với alkene), và phản ứng oxi hoá." },
            { name: "Bài 17: Arene (Hydrocarbon thơm)", content: "Hydrocarbon chứa vòng benzene (CnH2n-6, n≥6). Phản ứng đặc trưng: Dễ thế, khó cộng, bền với tác nhân oxi hoá. Quy tắc thế vào vòng benzene phụ thuộc vào nhóm thế có sẵn (nhóm đẩy e định hướng ortho/para, nhóm hút e định hướng meta)." },
            { name: "Bài 18: Ôn tập chương 4", content: "Hệ thống hoá tính chất vật lí và hoá học của alkane, alkene, alkyne, và arene. Phân biệt các hydrocarbon bằng phương pháp hoá học. Sơ đồ chuyển hoá giữa các hydrocarbon." }
        ]
    },
    {
        id: "chuong-5", title: "Chương 5: Dẫn xuất halogen - Alcohol - Phenol", icon: "fa-vial", color: "purple",
        lessons: [
            { name: "Bài 19: Dẫn xuất halogen", content: "Khi thay thế nguyên tử hydrogen trong phân tử hydrocarbon bằng nguyên tử halogen (F, Cl, Br, I). Phản ứng hóa học đặc trưng: Phản ứng thế nguyên tử halogen bằng nhóm -OH (phản ứng thuỷ phân) và phản ứng tách hydrogen halide (theo quy tắc Zaitsev)." },
            { name: "Bài 20: Alcohol", content: "Hợp chất hữu cơ có chứa nhóm hydroxy (-OH) liên kết trực tiếp với nguyên tử carbon no (CnH2n+1OH đối với alcohol no, đơn chức). Có liên kết hydrogen nên nhiệt độ sôi cao hơn dẫn xuất halogen tương ứng. Phản ứng: thế nguyên tử H, phản ứng tạo ether, phản ứng tạo alkene (tách nước), oxi hoá." },
            { name: "Bài 21: Phenol", content: "Hợp chất hữu cơ có nhóm -OH liên kết trực tiếp với nguyên tử carbon của vòng benzene. Có tính acid yếu (làm đổi màu quỳ tím, tác dụng với NaOH nhưng không tác dụng với NaHCO3). Phản ứng thế ở vòng thơm dễ dàng hơn benzene (tạo kết tủa trắng với nước brom)." },
            { name: "Bài 22: Ôn tập chương 5", content: "So sánh cấu tạo, tính chất hoá học của dẫn xuất halogen, alcohol và phenol. Sơ đồ chuyển hoá từ alkane → dẫn xuất halogen → alcohol." }
        ]
    },
    {
        id: "chuong-6", title: "Chương 6: Hợp chất carbonyl - Carboxylic acid", icon: "fa-droplet", color: "indigo",
        lessons: [
            { name: "Bài 23: Hợp chất carbonyl", content: "Gồm Aldehyde (R-CHO) và Ketone (R-CO-R'). Chứa nhóm carbonyl >C=O phân cực.<br/>Tính chất: Phản ứng cộng khử (tạo alcohol), phản ứng oxi hoá (Aldehyde tráng bạc với thuốc thử Tollens sinh Ag; Ketone không có phản ứng này). Phản ứng tạo iodoform với hợp chất có nhóm CH3-CO-." },
            { name: "Bài 24: Carboxylic acid", content: "Hợp chất chứa nhóm carboxyl (-COOH). Phân tử phân cực mạnh, tạo liên kết hydrogen bền vững nên nhiệt độ sôi cao.<br/>Thể hiện tính acid (đổi màu quỳ tím, tác dụng kim loại, oxide base, base, muối). Phản ứng ester hoá với alcohol (xúc tác H2SO4 đặc, đun nóng)." },
            { name: "Bài 25: Ôn tập chương 6", content: "Hệ thống hoá tính chất của aldehyde, ketone, carboxylic acid. Phân biệt aldehyde và ketone bằng phản ứng tráng bạc. Luyện tập chuỗi phản ứng hoá học liên quan đến các hợp chất chứa oxygen." }
        ]
    }
];

let sidebarHtml = '';
let contentHtml = '';

knttData11.forEach((chuong, idx) => {
    // Generate Sidebar
    const isFirst = idx === 0;
    const parentClass = isFirst ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 font-medium" : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800";
    
    sidebarHtml += '            <div class="sidebar-item">\n' +
                   '                <a href="#' + chuong.id + '" class="block px-3 py-2 text-sm rounded-lg transition-colors ' + parentClass + '">' + chuong.title + '</a>\n' +
                   '                <ul class="pl-4 mt-1 space-y-1.5 border-l-2 border-gray-100 dark:border-gray-700 ml-4">\n';
                   
    chuong.lessons.forEach(lesson => {
        sidebarHtml += '                    <li><a href="#' + chuong.id + '" class="block text-[13px] text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">' + lesson.name + '</a></li>\n';
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
                       '                    <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">\n' +
                       '                        <p>' + lesson.content + '</p>\n' +
                       '                    </div>\n' +
                       '                </div>\n' +
                       '            </div>\n';
    });
    
    contentHtml += '        </section>\n';
});

const finalHtml = TEMPLATE.replace('{{SIDEBAR}}', sidebarHtml).replace('{{CONTENT}}', contentHtml);
fs.writeFileSync('courses/hoahoc_11.html', finalHtml, 'utf8');
console.log('Successfully updated hoahoc_11.html to match KNTT textbook structure.');
