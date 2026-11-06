const fs = require('fs');
const path = require('path');
const { units, trangNguyenFrenchQuizzes } = require('./tiengphap_data.js');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeJs(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, ' ');
}

// Ensure every unit has culture & project
const unitCultureFallbacks = {
  0: {
    title: "La France et l'espace francophone (Nước Pháp và Không gian Pháp ngữ)",
    content: "Nước Pháp có hình lục lăng (L'Hexagone) tuyệt đẹp tại Tây Âu. Thủ đô Paris được mệnh danh là 'Kinh đô Ánh sáng' (La Ville Lumière) với biểu tượng Tháp Eiffel, Bảo tàng Louvre và Khải Hoàn Môn. Tiếng Pháp là ngôn ngữ chính thức hoặc thông dụng tại hơn 30 quốc gia trên thế giới, từ Pháp, Bỉ, Thụy Sĩ, Canada đến nhiều quốc gia châu Phi giàu bản sắc văn hóa."
  }
};

const unitProjectFallbacks = {
  0: {
    title: "Dự án (Projet): Mon passeport francophone (Hộ chiếu tiếng Pháp cá nhân)",
    content: "Em hãy tự thiết kế một cuốn 'Hộ chiếu tiếng Pháp' nhỏ xinh bằng bìa màu: Dán ảnh thẻ cá nhân, ghi họ tên (Nom, Prénom), tuổi (Âge), quốc tịch (Nationalité: Vietnamienne), sở thích (Goûts) và các câu chào tiếng Pháp em yêu thích nhất để làm quen với bạn bè quốc tế!"
  },
  1: {
    title: "Dự án thực hành (Projet): Ma ville de rêve (Thành phố mơ ước của em)",
    content: "Vẽ sơ đồ hoặc làm mô hình một thành phố trong tương lai, dán nhãn các công trình bằng tiếng Pháp (la cathédrale, le musée, le théâtre, le parc, la station de métro) và thuyết trình ngắn 3-4 câu trước lớp."
  },
  2: {
    title: "Dự án thực hành (Projet): Mon logement idéal (Ngôi nhà mơ ước của em)",
    content: "Vẽ mặt bằng ngôi nhà mơ ước, tô màu các phòng (le salon, la chambre, la cuisine, la salle de bains), vẽ các đồ nội thất và giới thiệu bằng cấu trúc 'Dans ma chambre, il y a un lit confortable et un bureau bleu'."
  },
  3: {
    title: "Dự án thực hành (Projet): Le marché francophone en classe (Phiên chợ Pháp ngữ)",
    content: "Tổ chức phiên chợ mô phỏng trong lớp: các nhóm chuẩn bị tiền giả định bằng Euro (€), đóng vai người bán hàng (vendeur) và người mua (client) thực hành đối thoại mua bánh mì baguette, hoa quả và đồ lưu niệm."
  },
  4: {
    title: "Dự án thực hành (Projet): Le bulletin météo télévisé (Bản tin thời tiết truyền hình)",
    content: "Đóng vai phát thanh viên truyền hình dự báo thời tiết 4 mùa tại Việt Nam hoặc Pháp, sử dụng bản đồ thời tiết tự vẽ và các biểu tượng: Il fait du soleil, Il pleut, Il neige, Il fait beau."
  },
  5: {
    title: "Dự án thực hành (Projet): Mon affiche sportive et artistique (Áp phích thể thao & nghệ thuật)",
    content: "Thiết kế áp phích cổ động môn thể thao hoặc sở thích em đam mê nhất (le football, la natation, la peinture, la musique), kèm khẩu hiệu tích cực bằng tiếng Pháp: 'Le sport, c'est la santé !'"
  },
  6: {
    title: "Dự án thực hành (Projet): Le spectacle de marionnettes (Vở kịch rối tí hon)",
    content: "Làm những con rối que đơn giản bằng giấy và diễn một vở kịch ngắn 5 phút bằng tiếng Pháp về tình bạn hoặc đi xem xiếc kịch cùng các bạn trong lớp."
  }
};

const alphabetData = [
  { letter: "A", sound: "[ɑ]", word: "Avion", vi: "Máy bay" },
  { letter: "B", sound: "[be]", word: "Ballon", vi: "Quả bóng" },
  { letter: "C", sound: "[se]", word: "Château", vi: "Lâu đài" },
  { letter: "D", sound: "[de]", word: "Dauphin", vi: "Cá heo" },
  { letter: "E", sound: "[ə]", word: "École", vi: "Trường học" },
  { letter: "F", sound: "[ɛf]", word: "Fleur", vi: "Bông hoa" },
  { letter: "G", sound: "[ʒe]", word: "Gâteau", vi: "Bánh ngọt" },
  { letter: "H", sound: "[aʃ]", word: "Hôtel", vi: "Khách sạn" },
  { letter: "I", sound: "[i]", word: "Île", vi: "Hòn đảo" },
  { letter: "J", sound: "[ʒi]", word: "Jardin", vi: "Khu vườn" },
  { letter: "K", sound: "[ka]", word: "Koala", vi: "Gấu túi" },
  { letter: "L", sound: "[ɛl]", word: "Livre", vi: "Quyển sách" },
  { letter: "M", sound: "[ɛm]", word: "Maison", vi: "Ngôi nhà" },
  { letter: "N", sound: "[ɛn]", word: "Nuage", vi: "Đám mây" },
  { letter: "O", sound: "[o]", word: "Orange", vi: "Quả cam" },
  { letter: "P", sound: "[pe]", word: "Pomme", vi: "Quả táo" },
  { letter: "Q", sound: "[ky]", word: "Quatre", vi: "Số 4" },
  { letter: "R", sound: "[ɛʁ]", word: "Rose", vi: "Hoa hồng" },
  { letter: "S", sound: "[ɛs]", word: "Soleil", vi: "Mặt trời" },
  { letter: "T", sound: "[te]", word: "Train", vi: "Tàu hỏa" },
  { letter: "U", sound: "[y]", word: "Usine", vi: "Nhà máy" },
  { letter: "V", sound: "[ve]", word: "Vélo", vi: "Xe đạp" },
  { letter: "W", sound: "[dubləve]", word: "Wagon", vi: "Toa tàu" },
  { letter: "X", sound: "[iks]", word: "Xylophone", vi: "Mộc cầm" },
  { letter: "Y", sound: "[igʁɛk]", word: "Yaourt", vi: "Sữa chua" },
  { letter: "Z", sound: "[zɛd]", word: "Zèbre", vi: "Ngựa vằn" }
];

const accentsData = [
  {
    name: "L'accent aigu (´)",
    symbol: "é",
    rule: "Chỉ đặt trên nguyên âm 'e' tạo thành 'é', phát âm âm đóng [e].",
    examples: [
      { fr: "école", vi: "trường học" },
      { fr: "café", vi: "cà phê / quán cà phê" },
      { fr: "cinéma", vi: "rạp chiếu phim" },
      { fr: "été", vi: "mùa hè" }
    ]
  },
  {
    name: "L'accent grave (`)",
    symbol: "è, à, ù",
    rule: "Trên 'e' thành 'è' (phát âm âm mở [ɛ]); trên 'a', 'u' để phân biệt từ đồng âm: à (ở/đến) vs a (có); où (ở đâu) vs ou (hoặc).",
    examples: [
      { fr: "mère / père", vi: "mẹ / bố" },
      { fr: "Où habites-tu ?", vi: "Bạn sống ở đâu?" },
      { fr: "Je vais à l'école.", vi: "Tôi đi đến trường." }
    ]
  },
  {
    name: "L'accent circonflexe (^)",
    symbol: "â, ê, î, ô, û",
    rule: "Thường dùng để ghi dấu vết chữ 's' cổ thời xưa biến mất (hospital -> hôpital; feste -> fête; castel -> château).",
    examples: [
      { fr: "château", vi: "lâu đài" },
      { fr: "fête", vi: "lễ hội / bữa tiệc" },
      { fr: "hôtel", vi: "khách sạn" },
      { fr: "août", vi: "tháng 8" }
    ]
  },
  {
    name: "Le tréma (¨)",
    symbol: "ë, ï, ü",
    rule: "Dấu hai chấm trên nguyên âm đứng sau để tách phát âm riêng hai nguyên âm kế tiếp nhau thay vì ghép đôi âm.",
    examples: [
      { fr: "Noël", vi: "Giáng sinh (đọc No-el)" },
      { fr: "maïs", vi: "ngô, bắp (đọc ma-is)" },
      { fr: "haïr", vi: "ghét, thù ghét" }
    ]
  },
  {
    name: "La cédille (¸)",
    symbol: "ç",
    rule: "Dấu móc nhỏ dưới chữ 'c' đặt trước các nguyên âm 'a', 'o', 'u' để chữ 'c' được phát âm thành [s] thay vì [k].",
    examples: [
      { fr: "français", vi: "tiếng Pháp" },
      { fr: "garçon", vi: "cậu bé, phục vụ" },
      { fr: "leçon", vi: "bài học" }
    ]
  },
  {
    name: "L'apostrophe (')",
    symbol: "'",
    rule: "Dấu lược âm (Élision) xuất hiện khi từ kết thúc bằng nguyên âm gặp từ kế tiếp bắt đầu bằng nguyên âm hoặc h câm.",
    examples: [
      { fr: "l'amie", vi: "người bạn gái (la amie -> l'amie)" },
      { fr: "j'aime", vi: "tôi yêu thích (je aime -> j'aime)" },
      { fr: "c'est", vi: "đó là (ce est -> c'est)" }
    ]
  }
];

console.log('Generating Tieng Phap 5 HTML...');

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Pháp Lớp 5 (Trọn Bộ 7 Đơn Vị • 26 Bài Học • Văn Hóa Francophonie) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            },
            french: {
              blue: '#002654',
              royal: '#1E40AF',
              red: '#ED2939',
              gold: '#D97706'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Tiếng Pháp Lớp 5">
  <meta name="description" content="Khóa học Tiếng Pháp Lớp 5 theo chương trình GDPT 2018: Trọn bộ 7 Đơn vị bài học (Unité 0 đến Unité 6), 26 bài học chi tiết, phát âm chuẩn Web Speech API (fr-FR), Bảng chữ cái L'alphabet & Dấu câu, Ngữ pháp chia động từ, 4 kỹ năng Nghe-Nói-Đọc-Viết, Văn hóa Francophonie và Hội thi Trạng Nguyên Tiếng Pháp 5 (60:00).">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 4px; }
    .french-hero-bg {
      background: radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 85% 80%, rgba(239, 68, 68, 0.12) 0%, transparent 40%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawerBackdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/50 z-40 lg:hidden hidden transition-opacity duration-300"></div>

  <!-- Mobile Drawer Navigation -->
  <aside id="mobileDrawer" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 lg:hidden transform -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col">
    <div class="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-600 text-white">
      <div class="flex items-center gap-2 font-bold text-sm">
        <i class="fa-solid fa-flag"></i>
        <span>Mục lục Tiếng Pháp 5</span>
      </div>
      <button onclick="toggleDrawer()" class="p-1.5 rounded-lg hover:bg-white/20 text-white transition">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <div class="p-4 overflow-y-auto sidebar-scroll flex-1 text-xs space-y-3">
`;

// Sidebar links
units.forEach(u => {
  html += `      <div class="pt-1">
        <a href="#unite-${u.id}" onclick="toggleDrawer()" class="block font-black text-blue-700 dark:text-blue-400 hover:underline uppercase text-[11px] tracking-wide">
          <i class="fa-solid fa-bookmark mr-1 text-rose-500"></i> ${escapeHtml(u.titleFr)}
        </a>
        <div class="mt-1 ml-2 space-y-1 pl-2 border-l border-gray-200 dark:border-gray-800">
`;
  u.lessons.forEach(l => {
    html += `          <a href="#lecon-${l.num}" onclick="toggleDrawer()" class="block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300">
            ${escapeHtml(l.title)}
          </a>\n`;
  });
  html += `        </div>
      </div>\n`;
});

html += `      <div class="pt-2 border-t border-gray-200 dark:border-gray-800">
        <div class="text-[11px] font-black uppercase text-gray-400 tracking-wider">Tra cứu &amp; Đấu trường</div>
        <a href="#alphabet-table" onclick="toggleDrawer()" class="block py-1 pl-2 text-blue-600 dark:text-blue-400 font-bold">
          <i class="fa-solid fa-font mr-1"></i> Bảng chữ cái L'alphabet & Dấu câu
        </a>
        <button onclick="toggleDrawer(); openTrangNguyenModal();" class="w-full text-left py-2 px-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold flex items-center gap-2 mt-2">
          <i class="fa-solid fa-award text-yellow-500"></i> Thi Trạng Nguyên Tiếng Pháp (60:00)
        </button>
      </div>
    </div>
  </aside>

  <!-- Sticky Navbar -->
  <header class="sticky top-0 z-30 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button onclick="toggleDrawer()" class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden" aria-label="Mở mục lục">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-extrabold text-lg sm:text-xl tracking-tight">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-rose-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <i class="fa-solid fa-landmark text-lg"></i>
          </div>
          <span class="hidden sm:inline text-gray-900 dark:text-white">CodeHub</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-800">Tiếng Pháp 5</span>
        </a>
      </div>

      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" oninput="filterLessons()" placeholder="Tìm bài học, từ vựng, ngữ pháp, mẫu câu tiếng Pháp..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-gray-100 dark:bg-dark-card border-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 transition">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="openTrangNguyenModal()" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5">
          <i class="fa-solid fa-award text-yellow-300"></i>
          <span>Trạng Nguyên Tiếng Pháp (60:00)</span>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="french-hero-bg border-b border-gray-200 dark:border-gray-800 relative overflow-hidden py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-center lg:text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Chương trình Ngoại Ngữ 1 &bull; GDPT 2018 Tiểu Học</span>
          </div>
          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-600 bg-clip-text text-transparent">Tiếng Pháp Lớp 5</span> (Français 5)
          </h1>
          <p class="text-xs sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Hệ thống hóa toàn diện 7 đơn vị (Unité 0 đến Unité 6) với 26 bài học chuẩn hóa: Mục tiêu bài học &bull; Từ vựng &amp; Phát âm chuẩn Web Speech API <strong class="text-blue-600 dark:text-blue-400">fr-FR</strong> &bull; Ngữ pháp chia động từ &bull; Hội thoại tình huống &bull; Bảng chữ cái L'alphabet &amp; Dấu câu &bull; 4 Kỹ năng Nghe-Nói-Đọc-Viết &bull; Văn hóa Francophonie &bull; Dự án sáng tạo &bull; Đấu trường Trạng Nguyên 60 phút.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <a href="#unite-0" class="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-md shadow-blue-600/20 transition">
              <i class="fa-solid fa-door-open mr-1.5"></i> Unité 0: Khởi động
            </a>
            <a href="#unite-1" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition">
              <i class="fa-solid fa-city mr-1.5"></i> Unité 1: En ville
            </a>
            <a href="#alphabet-table" class="px-3.5 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 shadow-md shadow-purple-600/20 transition">
              <i class="fa-solid fa-font mr-1.5"></i> Bảng L'alphabet & Dấu
            </a>
            <button onclick="openTrangNguyenModal()" class="px-3.5 py-1.5 rounded-xl bg-yellow-500 text-gray-900 font-black text-xs hover:bg-yellow-400 shadow-md shadow-yellow-500/20 transition">
              <i class="fa-solid fa-trophy mr-1.5"></i> Thi Trạng Nguyên 60:00
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto text-center">
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">7</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Unités Học Tập</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">26</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Bài Học Chi Tiết</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">26</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Chữ Cái Alphabet</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">fr-FR</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Audio Web Speech</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">7</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Dự Án Sáng Tạo</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-amber-500">25</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Câu Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

      <!-- Desktop Sidebar -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 space-y-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 class="text-xs font-black uppercase text-blue-700 dark:text-blue-400 tracking-wider flex items-center gap-2 mb-3">
              <i class="fa-solid fa-list-check"></i>
              <span>Chương trình Tiếng Pháp 5</span>
            </h3>
            <div class="space-y-3 overflow-y-auto max-h-[70vh] sidebar-scroll pr-1 text-xs">
`;

units.forEach(u => {
  html += `              <div class="space-y-1">
                <a href="#unite-${u.id}" class="font-bold text-gray-900 dark:text-white hover:text-blue-600 flex items-center justify-between">
                  <span>${escapeHtml(u.titleFr.split('–')[0].trim())}</span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">${u.lessons.length} bài</span>
                </a>
                <div class="ml-2 pl-2 border-l border-gray-100 dark:border-gray-800 space-y-1">
`;
  u.lessons.forEach(l => {
    html += `                  <a href="#lecon-${l.num}" class="block text-[11px] text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 truncate" title="${escapeHtml(l.title)}">
                    ${escapeHtml(l.title)}
                  </a>\n`;
  });
  html += `                </div>
              </div>\n`;
});

html += `              <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1">
                <a href="#alphabet-table" class="block font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  <i class="fa-solid fa-font mr-1"></i> Bảng L'alphabet & Dấu câu
                </a>
                <button onclick="openTrangNguyenModal()" class="w-full text-left py-2 px-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold flex items-center justify-between shadow-sm">
                  <span>Trạng Nguyên Tiếng Pháp</span>
                  <i class="fa-solid fa-trophy text-yellow-300"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Course Units & Lessons Area -->
      <div class="lg:col-span-3 space-y-10">

        <!-- L'alphabet & Les accents Section -->
        <section id="alphabet-table" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-black text-xs border border-blue-200 dark:border-blue-800">
                  <i class="fa-solid fa-font mr-1"></i> Nền Tảng Ngôn Ngữ
                </span>
                <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">26 Lettres &amp; 6 Signes Orthographiques</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                Bảng Chữ Cái L'alphabet &amp; Dấu Thanh Tiếng Pháp
              </h2>
            </div>
            <button onclick="speakFrench('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z')" class="px-3.5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-md shadow-blue-500/20 transition flex items-center gap-2">
              <i class="fa-solid fa-volume-high"></i> Nghe Toàn Bộ Bảng Chữ Cái
            </button>
          </div>

          <!-- Alphabet Grid (26 letters) -->
          <div class="space-y-3">
            <h3 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <i class="fa-solid fa-table text-blue-500"></i>
              <span>26 Chữ Cái Tiếng Pháp (Bấm từng chữ để nghe phát âm chuẩn fr-FR)</span>
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2.5">
`;

alphabetData.forEach(item => {
  html += `              <button onclick="speakFrench('${item.letter}. ${escapeJs(item.word)}')" class="p-3 rounded-2xl bg-gray-50 dark:bg-dark-surface hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition flex flex-col items-center justify-center text-center group">
                <span class="text-2xl font-black text-blue-700 dark:text-blue-400 group-hover:scale-110 transition transform">${item.letter}</span>
                <span class="text-[11px] font-mono text-gray-500 dark:text-gray-400">${item.sound}</span>
                <span class="text-xs font-bold text-gray-900 dark:text-white mt-1">${item.word}</span>
                <span class="text-[10px] text-gray-500 dark:text-gray-400">${item.vi}</span>
              </button>\n`;
});

html += `            </div>
          </div>

          <!-- Les accents Table -->
          <div class="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <h3 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <i class="fa-solid fa-signature text-rose-500"></i>
              <span>Các Dấu &amp; Ký Tự Đặc Biệt Trong Tiếng Pháp (Les accents et signes orthographiques)</span>
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
`;

accentsData.forEach(acc => {
  html += `              <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="font-bold text-xs text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-black">${acc.symbol}</span>
                    <span>${escapeHtml(acc.name)}</span>
                  </div>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(acc.rule)}</p>
                <div class="flex flex-wrap gap-2 pt-1">
`;
  acc.examples.forEach(ex => {
    html += `                  <button onclick="speakFrench('${escapeJs(ex.fr)}')" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 hover:border-blue-400 transition">
                    <span class="font-bold text-blue-600 dark:text-blue-400">${escapeHtml(ex.fr)}</span>
                    <span class="text-[11px] text-gray-500 dark:text-gray-400">(${escapeHtml(ex.vi)})</span>
                    <i class="fa-solid fa-volume-high text-[10px] text-blue-500"></i>
                  </button>\n`;
  });
  html += `                </div>
              </div>\n`;
});

html += `            </div>
          </div>
        </section>\n`;

// Loop through each Unité and its lessons
units.forEach(u => {
  const cultureObj = u.culture || unitCultureFallbacks[u.id];
  const projectObj = u.project || unitProjectFallbacks[u.id];

  html += `
        <!-- ==================== UNITÉ ${u.id}: ${escapeHtml(u.titleFr)} ==================== -->
        <section id="unite-${u.id}" class="space-y-6">
          <div class="p-6 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white shadow-lg space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-wider backdrop-blur-sm">
                Unité ${u.id} • ${u.lessons.length} Bài học
              </span>
              <span class="text-xs font-medium text-blue-200">Chương trình Tiếng Pháp Lớp 5 GDPT 2018</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">${escapeHtml(u.titleFr)}</h2>
            <p class="text-xs sm:text-sm text-blue-100 font-bold">${escapeHtml(u.titleVi)}</p>
            <p class="text-xs text-blue-200/90 leading-relaxed border-t border-white/10 pt-2">${escapeHtml(u.summary || u.theme)}</p>
          </div>

          <!-- Lessons of Unité ${u.id} -->
          <div class="space-y-6">
`;

  u.lessons.forEach((l, lIdx) => {
    html += renderFrenchLesson(l, u, lIdx);
  });

  // Culture & Project block for Unité
  html += `
            <!-- Culture & Projet for Unité ${u.id} -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Culture Francophonie -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2">
                <div class="font-bold text-xs uppercase text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-earth-europe text-base"></i>
                  <span>Góc Văn Hóa Pháp &amp; Cộng Đồng Pháp Ngữ</span>
                </div>
                <h4 class="font-black text-sm text-gray-900 dark:text-white">${escapeHtml(cultureObj ? cultureObj.title : 'Văn hóa & Đất nước Pháp')}</h4>
                <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(cultureObj ? cultureObj.content : '')}</p>
              </div>

              <!-- Projet -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-900/50 space-y-2">
                <div class="font-bold text-xs uppercase text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-palette text-base"></i>
                  <span>Dự Án Sáng Tạo (Projet de classe)</span>
                </div>
                <h4 class="font-black text-sm text-gray-900 dark:text-white">${escapeHtml(projectObj ? projectObj.title : 'Dự án thực hành')}</h4>
                <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(projectObj ? projectObj.content : '')}</p>
              </div>
            </div>
          </div>
        </section>\n`;
});

html += `
      </div>
    </div>
  </main>

  <!-- Interactive Modal: Trạng Nguyên Tiếng Pháp 5 (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4">
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-blue-700 via-indigo-600 to-rose-600 text-white flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-inner">
            <i class="fa-solid fa-award text-yellow-300"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Hội Thi Trạng Nguyên Tiếng Pháp Lớp 5 (Champion de Français 5)</h3>
            <p class="text-xs text-blue-100">Bộ 25 câu hỏi trắc nghiệm toàn diện 7 Unités GDPT 2018 &bull; Thời gian làm bài: 60 phút</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-black/30 font-mono font-black text-yellow-300 text-sm flex items-center gap-1.5">
            <i class="fa-solid fa-clock"></i>
            <span id="contestTimer">60:00</span>
          </div>
          <button onclick="closeTrangNguyenModal()" class="p-2 rounded-xl hover:bg-white/20 text-white transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body (Questions) -->
      <div id="contestBody" class="p-5 sm:p-7 overflow-y-auto sidebar-scroll flex-1 space-y-6 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-blue-900 dark:text-blue-200 leading-relaxed">
          <strong><i class="fa-solid fa-circle-info mr-1"></i> Hướng dẫn thí sinh:</strong> Thí sinh chọn 1 đáp án chính xác nhất cho mỗi câu hỏi. Sau khi hoàn thành toàn bộ 25 câu, bấm nút <strong>"Nộp bài &amp; Xem xếp hạng"</strong> ở cuối trang để được chấm điểm tự động, xem giải thích chi tiết và vinh danh danh hiệu Trạng Nguyên, Bảng Nhãn hoặc Thám Hoa!
        </div>

        <form id="trangNguyenForm" class="space-y-5">
`;

trangNguyenFrenchQuizzes.forEach((q, idx) => {
  html += `          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-3">
            <div class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-start gap-2">
              <span class="px-2 py-0.5 rounded-md bg-blue-600 text-white font-black text-xs shrink-0">Câu ${idx + 1}</span>
              <span>${escapeHtml(q.q)}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
  q.options.forEach((opt, optI) => {
    html += `              <label class="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-surface transition text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="tn_q_${idx}" value="${optI}" class="text-blue-600 focus:ring-blue-500">
                <span>${escapeHtml(opt)}</span>
              </label>\n`;
  });
  html += `            </div>
            <div id="tn_exp_${idx}" class="hidden p-3 rounded-xl bg-gray-100 dark:bg-dark-surface text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"></div>
          </div>\n`;
});

html += `        </form>

        <div id="contestResultArea" class="hidden p-6 rounded-2xl bg-white dark:bg-dark-card border border-blue-200 dark:border-blue-900 shadow-md text-center space-y-4">
          <div id="contestBadge" class="w-16 h-16 mx-auto rounded-3xl bg-yellow-400 text-gray-900 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h4 id="contestRank" class="text-2xl font-black text-gray-900 dark:text-white">Trạng Nguyên Tiếng Pháp</h4>
            <p id="contestScore" class="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">Đạt 25/25 điểm (100%)</p>
            <p id="contestComment" class="text-xs text-gray-600 dark:text-gray-300 mt-2 max-w-lg mx-auto leading-relaxed">Xuất sắc! Em đã nắm vững toàn bộ kiến thức Tiếng Pháp Lớp 5 theo chương trình GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-gray-100 dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-3">
        <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition">
          Đóng
        </button>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-black text-xs shadow-md shadow-blue-500/20 hover:opacity-95 transition">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xem Xếp Hạng
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-xs text-gray-500 text-center">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">Khóa Học Tiếng Pháp Lớp 5 &bull; CodeHub CS Learning Platform</p>
      <p>Biên soạn bám sát Chương trình Giáo dục Phổ thông 2018 cấp Tiểu học &bull; Tích hợp công nghệ Web Speech API phát âm chuẩn Pháp (fr-FR)</p>
      <p class="text-[11px] text-gray-400">&copy; 2026 CodeHub. Tự hào đồng hành cùng học sinh Việt Nam hội nhập thế giới.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Dark mode toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Mobile drawer toggle
    function toggleDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      const backdrop = document.getElementById('drawerBackdrop');
      if (drawer.classList.contains('-translate-x-full')) {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Web Speech API for French Pronunciation (fr-FR)
    function speakFrench(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'fr-FR';
        u.rate = 0.85; // Tốc độ chuẩn cho học sinh tiểu học
        window.speechSynthesis.speak(u);
      } else {
        alert('Trình duyệt của bạn chưa hỗ trợ phát âm trực tiếp.');
      }
    }

    // Interactive Topic Quiz Function (Chấm điểm từng bài học chuẩn CodeHub Lớp 4-5)
    function checkTopicQuiz(quizId, correctVal, explanation) {
      const radios = document.getElementsByName('quiz_' + quizId);
      let selected = null;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selected = parseInt(radios[i].value, 10);
          break;
        }
      }

      const resBox = document.getElementById('res_' + quizId);
      if (selected === null) {
        resBox.className = 'p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40';
        resBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation mr-1.5"></i> Vui lòng chọn một đáp án trước khi bấm kiểm tra.';
        resBox.classList.remove('hidden');
        return;
      }

      if (selected === correctVal) {
        resBox.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/40';
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-sm"></i><div><strong>Chính xác! Très bien !</strong> ' + explanation + '</div></div>';
      } else {
        resBox.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40';
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-xmark text-rose-500 mt-0.5 text-sm"></i><div><strong>Chưa đúng rồi! Révisez encore !</strong> ' + explanation + '</div></div>';
      }
      resBox.classList.remove('hidden');
    }

    // Filter lessons via search box
    function filterLessons() {
      const query = (document.getElementById('lessonSearchInput')?.value || '').trim().toLowerCase();
      const cards = document.querySelectorAll('.lesson-card');
      cards.forEach(c => {
        const text = c.innerText.toLowerCase();
        if (!query || text.includes(query)) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    }

    // Contest Trạng Nguyên Tiếng Pháp Logic (60:00)
    let contestInterval = null;
    let contestSeconds = 60 * 60; // 60 minutes
    const contestTotal = 25;
    const contestAnswers = ${JSON.stringify(trangNguyenFrenchQuizzes.map(q => q.ans))};
    const contestExplanations = ${JSON.stringify(trangNguyenFrenchQuizzes.map(q => q.exp))};

    function openTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.remove('hidden');
      if (!contestInterval) {
        startContestTimer();
      }
    }

    function closeTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.add('hidden');
    }

    function startContestTimer() {
      const timerEl = document.getElementById('contestTimer');
      contestInterval = setInterval(() => {
        if (contestSeconds <= 0) {
          clearInterval(contestInterval);
          alert('Hết thời gian làm bài 60 phút! Hệ thống đang tự động nộp bài.');
          submitContest();
          return;
        }
        contestSeconds--;
        const m = Math.floor(contestSeconds / 60);
        const s = contestSeconds % 60;
        timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function submitContest() {
      clearInterval(contestInterval);
      let score = 0;
      for (let i = 0; i < contestTotal; i++) {
        const radios = document.getElementsByName('tn_q_' + i);
        let val = null;
        for (let j = 0; j < radios.length; j++) {
          if (radios[j].checked) {
            val = parseInt(radios[j].value, 10);
            break;
          }
        }
        const expEl = document.getElementById('tn_exp_' + i);
        if (expEl) {
          expEl.classList.remove('hidden');
          if (val === contestAnswers[i]) {
            score++;
            expEl.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
            expEl.innerHTML = '<i class="fa-solid fa-check text-emerald-500 mr-1.5"></i><strong>Chính xác!</strong> ' + contestExplanations[i];
          } else {
            expEl.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
            expEl.innerHTML = '<i class="fa-solid fa-xmark text-rose-500 mr-1.5"></i><strong>Đáp án đúng: ' + (contestAnswers[i] + 1) + '.</strong> ' + contestExplanations[i];
          }
        }
      }

      // Show result card
      const resArea = document.getElementById('contestResultArea');
      resArea.classList.remove('hidden');
      const scoreEl = document.getElementById('contestScore');
      const rankEl = document.getElementById('contestRank');
      const badgeEl = document.getElementById('contestBadge');
      const commentEl = document.getElementById('contestComment');

      const pct = Math.round((score / contestTotal) * 100);
      scoreEl.innerText = 'Đạt ' + score + '/' + contestTotal + ' câu (' + pct + '%)';

      if (score >= 23) {
        rankEl.innerText = 'Trạng Nguyên Tiếng Pháp (Lauréat Suprême)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-yellow-400 text-gray-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-yellow-200 dark:ring-yellow-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-crown text-yellow-900"></i>';
        commentEl.innerText = 'Félicitations ! Xuất sắc tuyệt vời! Em xứng đáng nhận danh hiệu Trạng Nguyên Tiếng Pháp Lớp 5 danh giá nhất CodeHub!';
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Tiếng Pháp (Grand Dauphin)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-blue-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-blue-200 dark:ring-blue-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-medal text-white"></i>';
        commentEl.innerText = 'Très bien ! Em đạt kết quả rất cao, chỉ thiếu một chút nữa là đạt điểm tối đa!';
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Tiếng Pháp (Lauréat de Mérite)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-600 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200 dark:ring-amber-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-award text-white"></i>';
        commentEl.innerText = 'Bon travail ! Em đã hoàn thành tốt bài thi và nắm vững các kiến thức trọng tâm cơ bản!';
      } else {
        rankEl.innerText = 'Học Sĩ Chăm Chỉ (Apprenant Courageux)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-gray-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class="fa-solid fa-book-open-reader text-white"></i>';
        commentEl.innerText = 'Em hãy ôn lại từ vựng, ngữ pháp các Unités và luyện thi lại nhé. Cố lên!';
      }

      resArea.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('btnSubmitContest').classList.add('hidden');
    }
  </script>
</body>
</html>`;

function renderFrenchLesson(l, u, lIdx) {
  let qid = l.num.replace('.', '_');
  let qz = l.quiz;

  // Build full dialogue text for listening
  let dialogueFrFull = l.dialogue.map(d => d.spk + ': ' + d.fr).join('. ');

  let res = `
          <!-- Lesson Card: Leçon ${l.num} -->
          <article id="lecon-${l.num}" class="lesson-card p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
            
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-black text-xs border border-blue-200 dark:border-blue-800">
                    Unité ${u.id} • Bài ${l.num}
                  </span>
                  <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">${escapeHtml(u.titleFr.split('–')[0].trim())}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <span>${escapeHtml(l.title)}</span>
                </h3>
              </div>
              <button onclick="speakFrench('${escapeJs(l.title)}')" class="shrink-0 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-dark-surface hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center gap-2 border border-blue-200 dark:border-blue-800 transition">
                <i class="fa-solid fa-volume-high text-blue-500"></i> Nghe Tiêu Đề
              </button>
            </div>

            <!-- 1. Mục tiêu bài học (Objectifs) -->
            <div class="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 space-y-1">
              <div class="font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-bullseye text-blue-600 dark:text-blue-400"></i> 1. Mục tiêu bài học (Objectifs d'apprentissage)
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.target)}</p>
            </div>

            <!-- 2. Từ vựng tiếng Pháp – Phiên âm – Tiếng Việt (Vocabulaire) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-book-open text-blue-600 dark:text-blue-400"></i> 2. Từ vựng trọng tâm (Vocabulaire clé)
                </h4>
                <span class="text-[11px] text-gray-400">Bấm biểu tượng loa để nghe phát âm chuẩn fr-FR</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
`;

  l.vocab.forEach(v => {
    res += `                <div class="p-3 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2 hover:border-blue-200 dark:hover:border-blue-800 transition">
                  <div class="space-y-0.5 min-w-0">
                    <div class="font-bold text-xs text-blue-700 dark:text-blue-400 truncate">${escapeHtml(v.fr)}</div>
                    <div class="text-[11px] font-mono text-gray-400">${escapeHtml(v.pron || '')} • <span class="italic text-gray-500">${escapeHtml(v.type || '')}</span></div>
                    <div class="text-xs text-gray-700 dark:text-gray-300">${escapeHtml(v.vi)}</div>
                  </div>
                  <button onclick="speakFrench('${escapeJs(v.fr)}')" class="shrink-0 p-2 rounded-xl bg-white dark:bg-dark-card hover:bg-blue-100 dark:hover:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs shadow-xs transition" title="Nghe phát âm">
                    <i class="fa-solid fa-volume-high"></i>
                  </button>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 3. Ngữ pháp & Cấu trúc câu (Grammaire & Conjugaison) -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-code text-indigo-600 dark:text-indigo-400"></i> 3. Ngữ pháp &amp; Chia động từ (Grammaire &amp; Conjugaison)
              </h4>
              <div class="p-4 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-3">
                <div class="font-bold text-xs text-indigo-900 dark:text-indigo-300">${escapeHtml(l.grammar.title)}</div>
                <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.grammar.desc)}</p>
                <div class="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-indigo-200 dark:border-indigo-900 font-mono text-xs text-indigo-700 dark:text-indigo-300 font-bold">
                  <i class="fa-solid fa-key mr-1.5 text-indigo-500"></i> ${escapeHtml(l.grammar.formula)}
                </div>
                <div class="space-y-1.5 pt-1">
                  <div class="text-[11px] font-bold uppercase text-gray-500 tracking-wider">Ví dụ minh họa:</div>
`;

  const grammarExamples = l.grammar.examples || [
    { fr: "Je m'appelle Minh et j'ai dix ans.", vi: "Tôi tên là Minh và tôi 10 tuổi." }
  ];
  grammarExamples.forEach(ex => {
    res += `                  <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 text-xs">
                    <div>
                      <span class="font-bold text-gray-900 dark:text-white">${escapeHtml(ex.fr)}</span>
                      <span class="text-gray-500 dark:text-gray-400 ml-1.5">&rarr; ${escapeHtml(ex.vi)}</span>
                    </div>
                    <button onclick="speakFrench('${escapeJs(ex.fr)}')" class="shrink-0 p-1 text-blue-500 hover:text-blue-700" title="Nghe câu ví dụ">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>\n`;
  });

  res += `                </div>
              </div>
            </div>

            <!-- 4. Hội thoại tình huống (Dialogue & Communication) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-comments text-emerald-600 dark:text-emerald-400"></i> 4. Mẫu hội thoại tình huống (Dialogue en situation)
                </h4>
                <button onclick="speakFrench('${escapeJs(dialogueFrFull)}')" class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 transition flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800">
                  <i class="fa-solid fa-play text-[10px]"></i> Nghe toàn bộ hội thoại
                </button>
              </div>
              <div class="space-y-2 p-4 rounded-2xl bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30">
`;

  l.dialogue.forEach(dlg => {
    res += `                <div class="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800">
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black text-[11px]">${escapeHtml(dlg.spk)}</span>
                      <span class="font-bold text-xs text-gray-900 dark:text-white">${escapeHtml(dlg.fr)}</span>
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 pl-2">${escapeHtml(dlg.vi)}</div>
                  </div>
                  <button onclick="speakFrench('${escapeJs(dlg.fr)}')" class="shrink-0 p-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-800" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 5. Phát âm chuẩn & Quy tắc ngữ âm (Phonétique & Liaison) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-microphone text-rose-600 dark:text-rose-400"></i> 5. Phát âm &amp; Quy tắc ngữ âm (Phonétique &amp; Liaison)
              </h4>
              <div class="p-3.5 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-xs text-rose-950 dark:text-rose-200 flex items-start gap-2">
                <i class="fa-solid fa-lightbulb text-rose-500 mt-0.5"></i>
                <div class="leading-relaxed">${escapeHtml(l.phonetics)}</div>
              </div>
            </div>

            <!-- 6. 4 Kỹ năng thực hành (Compétences: Écouter, Parler, Lire, Écrire) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group text-purple-600 dark:text-purple-400"></i> 6. Rèn luyện 4 kỹ năng (Compétences pratiques)
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 space-y-1">
                  <div class="font-black text-blue-600 dark:text-blue-400"><i class="fa-solid fa-headphones mr-1"></i> Écouter</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Nghe đoạn hội thoại, nối hình ảnh</div>
                </div>
                <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
                  <div class="font-black text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-microphone-lines mr-1"></i> Parler</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Đóng vai hỏi đáp cùng bạn học</div>
                </div>
                <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 space-y-1">
                  <div class="font-black text-amber-600 dark:text-amber-400"><i class="fa-solid fa-book-open mr-1"></i> Lire</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Đọc hiểu đoạn văn ngắn & trả lời</div>
                </div>
                <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/40 space-y-1">
                  <div class="font-black text-purple-600 dark:text-purple-400"><i class="fa-solid fa-pen-fancy mr-1"></i> Écrire</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Viết 2-3 câu ứng dụng chủ đề</div>
                </div>
              </div>
            </div>

            <!-- 7 & 8. Bài tập tương tác & Tự đánh giá (Quiz & Auto-évaluation) -->
            <div class="space-y-3 pt-2 border-t border-gray-100 dark:border-gray-800">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-question text-blue-600 dark:text-blue-400"></i> 7. Bài tập vận dụng &amp; Tự đánh giá (Auto-évaluation)
                </h4>
                <span class="text-[11px] text-blue-600 dark:text-blue-400 font-bold">Chuẩn Form CodeHub Lớp 4-5</span>
              </div>
              <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-3">
                <div class="font-bold text-xs text-gray-900 dark:text-white flex items-start gap-1.5">
                  <span class="text-blue-600 dark:text-blue-400">Câu hỏi kiểm tra:</span>
                  <span>${escapeHtml(qz.q)}</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;

  qz.options.forEach((opt, optI) => {
    res += `                  <label class="p-2 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer flex items-center gap-2 bg-white dark:bg-dark-card text-xs text-gray-700 dark:text-gray-300 transition">
                    <input type="radio" name="quiz_${qid}" value="${optI}" class="text-blue-600 focus:ring-blue-500">
                    <span>${escapeHtml(opt)}</span>
                  </label>\n`;
  });

  res += `                </div>
                <div class="flex items-center justify-between pt-1">
                  <button onclick="checkTopicQuiz('${qid}', ${qz.ans}, '${escapeJs(qz.exp)}')" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition">
                    Kiểm tra đáp án
                  </button>
                </div>
                <div id="res_${qid}" class="hidden"></div>
              </div>
            </div>

          </article>\n`;

  return res;
}

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'tiengphap_5.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'french_5.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
