const fs = require('fs');
const path = require('path');
const { topics, lessons, trangNguyenChineseQuizzes } = require('./tiengtrung_data.js');

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

// 7 Quy tắc bút thuận viết chữ Hán
const strokeRules = [
  { rule: "1. Ngang trước sổ sau (先横后竖)", desc: "Khi nét ngang và nét sổ giao nhau, viết nét ngang trước rồi viết nét sổ sau.", ex: "十 (ngang trước, sổ sau), 土, 干" },
  { rule: "2. Phẩy trước mác sau (先撇后捺)", desc: "Khi nét phẩy và nét mác giao nhau, viết nét phẩy sang trái trước, mác sang phải sau.", ex: "八, 人, 木, 天" },
  { rule: "3. Trên trước dưới sau (从上到下)", desc: "Chữ có kết cấu trên dưới thì viết phần trên trước rồi đến phần dưới.", ex: "三, 二, 旦, 早" },
  { rule: "4. Trái trước phải sau (从左到右)", desc: "Chữ có kết cấu trái phải thì viết phần bên trái trước rồi đến phần bên phải.", ex: "你, 他, 明, 好" },
  { rule: "5. Ngoài trước trong sau (从外到内)", desc: "Chữ có khung bao bọc thì viết nét khung bên ngoài trước, viết ruột bên trong sau.", ex: "同, 月, 风, 问" },
  { rule: "6. Vào trước đóng sau (先进入后关门)", desc: "Khung khép kín 4 góc: Viết khung 3 phía trước -> viết bên trong -> đóng đáy sau cùng.", ex: "回, 国, 四, 日, 田" },
  { rule: "7. Giữa trước hai bên sau (先中间后两边)", desc: "Khi chữ đối xứng có trục ở giữa, viết nét giữa trước rồi viết hai bên.", ex: "小, 水, 办, 永" }
];

// 4 Thanh điệu tiếng Trung
const toneRules = [
  { tone: "Thanh 1 (Âm Bình)", mark: "— (mā)", pitch: "Cao - Ngang (55)", desc: "Phát âm cao, phẳng và kéo dài đều hơi." },
  { tone: "Thanh 2 (Dương Bình)", mark: "／ (má)", pitch: "Trung - Lên Cao (35)", desc: "Giống dấu sắc tiếng Việt nhưng lên mượt từ trung bình lên cao." },
  { tone: "Thanh 3 (Thượng Thanh)", mark: "∨ (mǎ)", pitch: "Hạ Thấp - Lên Nhẹ (214)", desc: "Hạ thấp giọng rồi hơi uốn lên nhẹ." },
  { tone: "Thanh 4 (Khứ Thanh)", mark: "＼ (mà)", pitch: "Từ Cực Cao - Rơi Dứt Khoát (51)", desc: "Phát âm dứt khoát, dồn lực từ đỉnh cao rơi nhanh xuống." },
  { tone: "Thanh Nhẹ (Khinh Thanh)", mark: "Không dấu (ma)", pitch: "Ngắn - Nhẹ", desc: "Đọc ngắn và lướt nhẹ (ví dụ: 妈妈 māma, 朋友 péngyou)." }
];

// Văn hóa & Dự án cho 4 Chủ điểm
const topicCultureProjects = {
  1: {
    cultureTitle: "Bốn báu vật phòng văn (文房四宝) & Nghệ thuật Thư pháp Trung Hoa",
    cultureDesc: "Văn phòng tứ bảo gồm: Bút lông (笔), Mực tàu (墨), Giấy xuyến chỉ (纸) và Nghiên mực (砚). Thư pháp chữ Hán không chỉ là chữ viết mà là một môn nghệ thuật đỉnh cao rèn luyện tính kiên nhẫn, sự điềm tĩnh và phong thái trang nhã.",
    projectTitle: "Dự án: Làm Thẻ Kết Bạn Hán Ngữ (我的汉语文具与交友卡)",
    projectDesc: "Tự tay thiết kế một tấm thẻ giới thiệu cá nhân bằng bìa cứng: Viết chữ Hán họ tên, số điện thoại, sở thích cá nhân (看书, 踢足球, 画画儿) và trang trí bằng họa tiết chữ Phúc hoặc hoa mai để trao đổi cùng bạn bè trong lớp."
  },
  2: {
    cultureTitle: "Truyền thống Tôn sư trọng đạo (尊师重道) & Ngày Nhà giáo tại Trung Quốc",
    cultureDesc: "Từ thời Khổng Tử, người Trung Hoa luôn coi trọng đạo làm thầy. Câu ngạn ngữ 'Nhất nhật vi sư, chung thân vi phụ' (一日为师，终身为父 - Một ngày là thầy, cả đời như cha) nhắc nhở học trò luôn kính yêu, biết ơn người đã truyền dạy tri thức cho mình.",
    projectTitle: "Dự án: Kế hoạch Tuần học Tiếng Trung (我的汉语学习周计划)",
    projectDesc: "Lập bảng thời gian biểu học tập tiếng Trung trong tuần, sử dụng cấu trúc '要是……就……' và '正在……呢' để phân công nhiệm vụ luyện viết chữ Hán, nghe bài khóa và giao tiếp hằng ngày."
  },
  3: {
    cultureTitle: "Bữa cơm tất niên sum vầy (年夜饭) & Đơn vị tiền tệ Nhân dân tệ (RMB)",
    cultureDesc: "Bữa cơm đoàn tụ đêm giao thừa là nét văn hóa thiêng liêng nhất của người Trung Quốc, với các món ăn biểu trưng cho tài lộc như sủi cảo (sủi cảo hình thỏi vàng), cá (ngụ ý niên niên hữu dư - năm nào cũng dư dả). Tiền tệ trong khẩu ngữ gọi là '块' (đồng) và '毛' (hào).",
    projectTitle: "Dự án: Phiên chợ Trái cây Hán ngữ (水果超市小买卖)",
    projectDesc: "Mô phỏng gian hàng hoa quả trong lớp: chuẩn bị bảng giá tiền tệ bằng đồng '块', một nhóm đóng vai người mua hỏi '橙子多少钱一盒？', nhóm người bán trả lời và thực hành thương lượng giá với '有点儿贵', '便宜一点儿'."
  },
  4: {
    cultureTitle: "Tàu cao tốc đường sắt hiện đại (中国高铁) & Kỳ quan Vạn Lý Trường Thành",
    cultureDesc: "Trung Quốc sở hữu mạng lưới đường sắt cao tốc (高铁) dài nhất thế giới, kết nối các siêu đô thị chỉ trong vài giờ. Bên cạnh đó, Vạn Lý Trường Thành (万里长城) trải dài ngút ngàn là kỳ quan quân sự cổ đại hùng vĩ bậc nhất thế giới.",
    projectTitle: "Dự án: Bản đồ chỉ đường Hướng dẫn viên tí hon (小小导游指路图)",
    projectDesc: "Vẽ sơ đồ khu phố từ trường học đến Bảo tàng Hồ Chí Minh hoặc siêu thị, sử dụng các mũi tên phương hướng '往前走', '往左拐', '往右拐' và thuyết trình lộ trình bằng tiếng Trung."
  }
};

console.log('Generating Tieng Trung 5 HTML...');

let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Trung Lớp 5 (Trọn Bộ 16 Bài • 4 Chủ Điểm • Bút Thuận Chữ Hán) | CodeHub</title>
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
            china: {
              red: '#DE2910',
              crimson: '#B91C1C',
              gold: '#FFDE00',
              amber: '#D97706'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Tiếng Trung Lớp 5">
  <meta name="description" content="Khóa học Tiếng Trung Quốc Lớp 5 (Tiếng Trung 5) theo chương trình GDPT 2018: Trọn bộ 16 bài học qua 4 Chủ điểm (Tập 1 & Tập 2), phát âm chuẩn Web Speech API (zh-CN), Bảng quy tắc bút thuận viết chữ Hán, Thanh điệu & Ngữ âm Pinyin, Ngữ pháp mẫu câu trọng tâm, 4 kỹ năng Nghe-Nói-Đọc-Viết và Hội thi Trạng Nguyên Hán Ngữ 5 (60:00).">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #dc2626; border-radius: 4px; }
    .chinese-hero-bg {
      background: radial-gradient(circle at 12% 18%, rgba(220, 38, 38, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 88% 82%, rgba(217, 119, 6, 0.12) 0%, transparent 40%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawerBackdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/50 z-40 lg:hidden hidden transition-opacity duration-300"></div>

  <!-- Mobile Drawer Navigation -->
  <aside id="mobileDrawer" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 lg:hidden transform -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col">
    <div class="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white">
      <div class="flex items-center gap-2 font-bold text-sm">
        <i class="fa-solid fa-scroll"></i>
        <span>Mục lục Tiếng Trung 5</span>
      </div>
      <button onclick="toggleDrawer()" class="p-1.5 rounded-lg hover:bg-white/20 text-white transition">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <div class="p-4 overflow-y-auto sidebar-scroll flex-1 text-xs space-y-3">
`;

// Sidebar links by Topics
topics.forEach(t => {
  html += `      <div class="pt-1">
        <a href="#chudiem-${t.id}" onclick="toggleDrawer()" class="block font-black text-red-600 dark:text-red-400 hover:underline uppercase text-[11px] tracking-wide">
          <i class="fa-solid fa-bookmark mr-1 text-amber-500"></i> ${escapeHtml(t.name.split(':')[0])}
        </a>
        <div class="mt-1 ml-2 space-y-1 pl-2 border-l border-gray-200 dark:border-gray-800">
`;
  lessons.filter(l => l.topicId === t.id).forEach(l => {
    html += `          <a href="#bai-${l.num}" onclick="toggleDrawer()" class="block py-1 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-300">
            Bài ${l.num}. ${escapeHtml(l.titleCn)}
          </a>\n`;
  });
  html += `        </div>
      </div>\n`;
});

html += `      <div class="pt-2 border-t border-gray-200 dark:border-gray-800">
        <div class="text-[11px] font-black uppercase text-gray-400 tracking-wider">Tra cứu &amp; Đấu trường</div>
        <a href="#hanzi-stroke-rules" onclick="toggleDrawer()" class="block py-1 pl-2 text-red-600 dark:text-red-400 font-bold">
          <i class="fa-solid fa-pen-fancy mr-1"></i> 7 Quy tắc bút thuận viết chữ Hán
        </a>
        <a href="#pinyin-tones" onclick="toggleDrawer()" class="block py-1 pl-2 text-amber-600 dark:text-amber-400 font-bold">
          <i class="fa-solid fa-music mr-1"></i> Bảng 4 Thanh điệu & Ngữ âm
        </a>
        <button onclick="toggleDrawer(); openTrangNguyenModal();" class="w-full text-left py-2 px-3 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-bold flex items-center gap-2 mt-2">
          <i class="fa-solid fa-award text-yellow-500"></i> Thi Trạng Nguyên Hán Ngữ (60:00)
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
        <a href="../index.html" class="flex items-center gap-2.5 text-red-600 dark:text-red-400 font-extrabold text-lg sm:text-xl tracking-tight">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 via-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-500/20">
            <i class="fa-solid fa-yin-yang text-lg"></i>
          </div>
          <span class="hidden sm:inline text-gray-900 dark:text-white">CodeHub</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/80 text-red-600 dark:text-red-300 font-bold border border-red-200 dark:border-red-800">Tiếng Trung 5</span>
        </a>
      </div>

      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input type="text" id="lessonSearchInput" oninput="filterLessons()" placeholder="Tìm bài học, chữ Hán, Pinyin, ngữ pháp..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-gray-100 dark:bg-dark-card border-none focus:ring-2 focus:ring-red-500 dark:text-white placeholder-gray-400 transition">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="openTrangNguyenModal()" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 text-white font-bold text-xs shadow-md shadow-red-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5">
          <i class="fa-solid fa-award text-yellow-300"></i>
          <span>Trạng Nguyên Hán Ngữ (60:00)</span>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="chinese-hero-bg border-b border-gray-200 dark:border-gray-800 relative overflow-hidden py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-center lg:text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/70 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Chương trình Ngoại Ngữ 1 &bull; GDPT 2018 Tiểu Học</span>
          </div>
          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">Tiếng Trung Lớp 5</span> (汉语 5)
          </h1>
          <p class="text-xs sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Hệ thống hóa toàn diện 16 bài học qua 4 Chủ điểm (Tập 1 &amp; Tập 2): Mục tiêu bài học &bull; Từ vựng chữ Hán &amp; Pinyin kèm âm thanh chuẩn Web Speech API <strong class="text-red-600 dark:text-red-400">zh-CN</strong> &bull; Quy tắc 7 nét bút thuận chữ Hán &bull; Mẫu câu giao tiếp &bull; Hội thoại tình huống &bull; 4 Kỹ năng Nghe-Nói-Đọc-Viết &bull; Chuyên đề Văn hóa Trung Hoa &bull; 4 Bài Ôn tập củng cố &bull; Đấu trường Trạng Nguyên Hán Ngữ 60 phút.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <a href="#tap-1" class="px-3.5 py-1.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-md shadow-red-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Một (Bài 1–8)
            </a>
            <a href="#tap-2" class="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md shadow-rose-600/20 transition">
              <i class="fa-solid fa-book-open mr-1.5"></i> Tập Hai (Bài 9–16)
            </a>
            <a href="#hanzi-stroke-rules" class="px-3.5 py-1.5 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 shadow-md shadow-amber-600/20 transition">
              <i class="fa-solid fa-pen-fancy mr-1.5"></i> Quy Tắc Bút Thuận
            </a>
            <button onclick="openTrangNguyenModal()" class="px-3.5 py-1.5 rounded-xl bg-yellow-500 text-gray-900 font-black text-xs hover:bg-yellow-400 shadow-md shadow-yellow-500/20 transition">
              <i class="fa-solid fa-trophy mr-1.5"></i> Thi Trạng Nguyên 60:00
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto text-center">
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400">4</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Chủ Điểm Lớn</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">16</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Bài Học Chuẩn Hóa</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-amber-500">7</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Quy Tắc Bút Thuận</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">zh-CN</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Audio Web Speech</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">48+</div>
            <div class="text-[11px] font-bold text-gray-500 uppercase mt-0.5">Chữ Hán Tập Viết</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-red-500">25</div>
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
            <h3 class="text-xs font-black uppercase text-red-700 dark:text-red-400 tracking-wider flex items-center gap-2 mb-3">
              <i class="fa-solid fa-list-check"></i>
              <span>Chương trình Tiếng Trung 5</span>
            </h3>
            <div class="space-y-3 overflow-y-auto max-h-[70vh] sidebar-scroll pr-1 text-xs">
`;

topics.forEach(t => {
  html += `              <div class="space-y-1">
                <a href="#chudiem-${t.id}" class="font-bold text-gray-900 dark:text-white hover:text-red-600 flex items-center justify-between">
                  <span>${escapeHtml(t.name.split(':')[0])}</span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold">Tập ${t.book}</span>
                </a>
                <div class="ml-2 pl-2 border-l border-gray-100 dark:border-gray-800 space-y-1">
`;
  lessons.filter(l => l.topicId === t.id).forEach(l => {
    html += `                  <a href="#bai-${l.num}" class="block text-[11px] text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-300 truncate" title="${escapeHtml(l.titleCn)}">
                    Bài ${l.num}. ${escapeHtml(l.titleCn)}
                  </a>\n`;
  });
  html += `                </div>
              </div>\n`;
});

html += `              <div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1">
                <a href="#hanzi-stroke-rules" class="block font-bold text-red-600 dark:text-red-400 hover:underline">
                  <i class="fa-solid fa-pen-fancy mr-1"></i> 7 Quy tắc bút thuận
                </a>
                <a href="#pinyin-tones" class="block font-bold text-amber-600 dark:text-amber-400 hover:underline">
                  <i class="fa-solid fa-music mr-1"></i> Bảng 4 Thanh điệu & Ngữ âm
                </a>
                <button onclick="openTrangNguyenModal()" class="w-full text-left py-2 px-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold flex items-center justify-between shadow-sm">
                  <span>Trạng Nguyên Hán Ngữ</span>
                  <i class="fa-solid fa-trophy text-yellow-300"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Course Units & Lessons Area -->
      <div class="lg:col-span-3 space-y-10">

        <!-- Hanzi Stroke Rules & Pinyin Section -->
        <section id="hanzi-stroke-rules" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md bg-red-50 dark:bg-red-950/80 text-red-700 dark:text-red-300 font-black text-xs border border-red-200 dark:border-red-800">
                  <i class="fa-solid fa-brush mr-1"></i> Nền Tảng Chữ Hán
                </span>
                <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Bút Thuận Viết Chữ Hán &amp; Thanh Điệu Pinyin</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                7 Quy Tắc Bút Thuận Vàng &amp; 4 Thanh Điệu Tiếng Trung
              </h2>
            </div>
            <button onclick="speakChinese('一, 二, 三, 四, 五, 六, 七, 八, 九, 十')" class="px-3.5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-md shadow-red-500/20 transition flex items-center gap-2">
              <i class="fa-solid fa-volume-high"></i> Nghe Đếm Số 1 Đến 10
            </button>
          </div>

          <!-- 7 Stroke Rules Grid -->
          <div class="space-y-3">
            <h3 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <i class="fa-solid fa-pen-nib text-red-500"></i>
              <span>7 Quy Tắc Bút Thuận Cơ Bản (笔顺基本规则)</span>
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
`;

strokeRules.forEach((sr, idx) => {
  html += `              <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-1.5">
                <div class="font-black text-xs text-red-700 dark:text-red-400 flex items-center justify-between">
                  <span>${escapeHtml(sr.rule)}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 font-mono">Quy tắc ${idx + 1}</span>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${escapeHtml(sr.desc)}</p>
                <div class="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  <strong>Ví dụ:</strong> <span class="font-bold text-gray-800 dark:text-gray-200">${escapeHtml(sr.ex)}</span>
                </div>
              </div>\n`;
});

html += `            </div>
          </div>

          <!-- Pinyin & Tones Table -->
          <div id="pinyin-tones" class="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <h3 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <i class="fa-solid fa-music text-amber-500"></i>
              <span>Hệ Thống 4 Thanh Điệu &amp; Biến Điệu Trong Tiếng Trung (声调与变调)</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
`;

toneRules.forEach(tr => {
  html += `              <div class="p-3 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-1 text-center">
                <div class="font-bold text-xs text-amber-700 dark:text-amber-400">${escapeHtml(tr.tone)}</div>
                <div class="text-lg font-black text-red-600 dark:text-red-400 font-mono">${escapeHtml(tr.mark)}</div>
                <div class="text-[10px] font-bold text-gray-400">${escapeHtml(tr.pitch)}</div>
                <div class="text-[11px] text-gray-600 dark:text-gray-300">${escapeHtml(tr.desc)}</div>
                <button onclick="speakChinese('${escapeJs(tr.mark.split(' ')[1] || 'ma')}')" class="mt-1 px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold hover:opacity-80 transition">
                  <i class="fa-solid fa-volume-high"></i> Nghe
                </button>
              </div>\n`;
});

html += `            </div>

            <!-- Tone sandhi notes -->
            <div class="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 space-y-1 leading-relaxed">
              <div class="font-bold flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                <i class="fa-solid fa-circle-exclamation"></i> 3 Quy Tắc Biến Điệu Cần Ghi Nhớ Suốt Chương Trình:
              </div>
              <ul class="list-disc list-inside space-y-0.5 pl-1 text-[11px]">
                <li><strong>Biến điệu thanh 3:</strong> Khi hai thanh 3 đi liền nhau, âm thứ nhất đọc thành thanh 2: <em>nǐ hǎo &rarr; ní hǎo</em>; <em>hěn hǎo &rarr; hén hǎo</em>.</li>
                <li><strong>Biến điệu của "不" (bù):</strong> Đứng trước âm tiết mang thanh 4 thì đọc thành thanh 2 <em>bú</em>: <em>bú tài (不太)</em>; <em>bú duì (不对)</em>.</li>
                <li><strong>Biến điệu của "一" (yī):</strong> Đứng trước thanh 4 đọc thành thanh 2 <em>yí</em> (<em>yí kuài</em>); đứng trước thanh 1, 2, 3 đọc thành thanh 4 <em>yì</em> (<em>yì tiān, yìdiǎnr</em>).</li>
              </ul>
            </div>
          </div>
        </section>\n`;

// Loop through each Topic (Chủ điểm)
topics.forEach(t => {
  const cp = topicCultureProjects[t.id];
  const topicLessons = lessons.filter(l => l.topicId === t.id);

  html += `
        <!-- ==================== CHỦ ĐIỂM ${t.id}: ${escapeHtml(t.name)} ==================== -->
        <section id="chudiem-${t.id}" class="space-y-6">
          <div class="p-6 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-lg space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-wider backdrop-blur-sm">
                Tập ${t.book} • Chủ Điểm ${t.id} • ${topicLessons.length} Bài học
              </span>
              <span class="text-xs font-medium text-red-100">Chương trình Tiếng Trung Lớp 5 GDPT 2018</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">${escapeHtml(t.name)}</h2>
            <p class="text-xs sm:text-sm text-red-100 font-bold">${escapeHtml(t.desc)}</p>
          </div>

          <!-- Lessons of Topic ${t.id} -->
          <div class="space-y-6">
`;

  topicLessons.forEach((l) => {
    html += renderChineseLesson(l, t);
  });

  // Culture & Project block for Topic
  if (cp) {
    html += `
            <!-- Culture & Projet for Topic ${t.id} -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Culture Trung Hoa -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-950/30 dark:to-amber-950/30 border border-red-200 dark:border-red-900/50 space-y-2">
                <div class="font-bold text-xs uppercase text-red-700 dark:text-red-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-landmark text-base"></i>
                  <span>Góc Văn Hóa Trung Hoa (中国文化角)</span>
                </div>
                <h4 class="font-black text-sm text-gray-900 dark:text-white">${escapeHtml(cp.cultureTitle)}</h4>
                <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(cp.cultureDesc)}</p>
              </div>

              <!-- Projet -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
                <div class="font-bold text-xs uppercase text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-paintbrush text-base"></i>
                  <span>Dự Án Thực Hành (实践小项目)</span>
                </div>
                <h4 class="font-black text-sm text-gray-900 dark:text-white">${escapeHtml(cp.projectTitle)}</h4>
                <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(cp.projectDesc)}</p>
              </div>
            </div>\n`;
  }

  html += `          </div>
        </section>\n`;
});

html += `
      </div>
    </div>
  </main>

  <!-- Interactive Modal: Trạng Nguyên Hán Ngữ 5 (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4">
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-inner">
            <i class="fa-solid fa-award text-yellow-300"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Hội Thi Trạng Nguyên Hán Ngữ Lớp 5 (小学五年级汉语状元争霸赛)</h3>
            <p class="text-xs text-red-100">Bộ 25 câu hỏi trắc nghiệm toàn diện 16 bài học GDPT 2018 &bull; Thời gian làm bài: 60 phút</p>
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
        <div class="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-red-900 dark:text-red-200 leading-relaxed">
          <strong><i class="fa-solid fa-circle-info mr-1"></i> Hướng dẫn thí sinh:</strong> Thí sinh chọn 1 đáp án chính xác nhất cho mỗi câu hỏi. Sau khi hoàn thành toàn bộ 25 câu, bấm nút <strong>"Nộp bài &amp; Xem xếp hạng"</strong> ở cuối trang để được chấm điểm tự động, xem giải thích chi tiết và vinh danh danh hiệu Trạng Nguyên, Bảng Nhãn hoặc Thám Hoa!
        </div>

        <form id="trangNguyenForm" class="space-y-5">
`;

trangNguyenChineseQuizzes.forEach((q, idx) => {
  html += `          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-3">
            <div class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-start gap-2">
              <span class="px-2 py-0.5 rounded-md bg-red-600 text-white font-black text-xs shrink-0">Câu ${idx + 1}</span>
              <span>${escapeHtml(q.q)}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;
  q.options.forEach((opt, optI) => {
    html += `              <label class="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-red-400 dark:hover:border-red-600 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-surface transition text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="tn_q_${idx}" value="${optI}" class="text-red-600 focus:ring-red-500">
                <span>${escapeHtml(opt)}</span>
              </label>\n`;
  });
  html += `            </div>
            <div id="tn_exp_${idx}" class="hidden p-3 rounded-xl bg-gray-100 dark:bg-dark-surface text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"></div>
          </div>\n`;
});

html += `        </form>

        <div id="contestResultArea" class="hidden p-6 rounded-2xl bg-white dark:bg-dark-card border border-red-200 dark:border-red-900 shadow-md text-center space-y-4">
          <div id="contestBadge" class="w-16 h-16 mx-auto rounded-3xl bg-yellow-400 text-gray-900 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h4 id="contestRank" class="text-2xl font-black text-gray-900 dark:text-white">Trạng Nguyên Hán Ngữ</h4>
            <p id="contestScore" class="text-sm font-bold text-red-600 dark:text-red-400 mt-1">Đạt 25/25 điểm (100%)</p>
            <p id="contestComment" class="text-xs text-gray-600 dark:text-gray-300 mt-2 max-w-lg mx-auto leading-relaxed">Xuất sắc! Em đã nắm vững toàn bộ kiến thức Tiếng Trung Quốc Lớp 5 theo chương trình GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-gray-100 dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-3">
        <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition">
          Đóng
        </button>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xs shadow-md shadow-red-500/20 hover:opacity-95 transition">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xem Xếp Hạng
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-xs text-gray-500 text-center">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-gray-700 dark:text-gray-300">Khóa Học Tiếng Trung Lớp 5 &bull; CodeHub CS Learning Platform</p>
      <p>Biên soạn bám sát Chương trình Giáo dục Phổ thông 2018 cấp Tiểu học &bull; Tích hợp công nghệ Web Speech API phát âm chuẩn Hán ngữ (zh-CN)</p>
      <p class="text-[11px] text-gray-400">&copy; 2026 CodeHub. Tự hào đồng hành cùng học sinh Việt Nam làm chủ ngoại ngữ.</p>
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

    // Web Speech API for Chinese Pronunciation (zh-CN)
    function speakChinese(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'zh-CN';
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
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-sm"></i><div><strong>Chính xác! 太棒了！</strong> ' + explanation + '</div></div>';
      } else {
        resBox.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40';
        resBox.innerHTML = '<div class="flex items-start gap-2"><i class="fa-solid fa-circle-xmark text-rose-500 mt-0.5 text-sm"></i><div><strong>Chưa đúng rồi! 再试一次！</strong> ' + explanation + '</div></div>';
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

    // Contest Trạng Nguyên Hán Ngữ Logic (60:00)
    let contestInterval = null;
    let contestSeconds = 60 * 60; // 60 minutes
    const contestTotal = 25;
    const contestAnswers = ${JSON.stringify(trangNguyenChineseQuizzes.map(q => q.ans))};
    const contestExplanations = ${JSON.stringify(trangNguyenChineseQuizzes.map(q => q.exp))};

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
        rankEl.innerText = 'Trạng Nguyên Hán Ngữ (状元及第)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-yellow-400 text-gray-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-yellow-200 dark:ring-yellow-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-crown text-yellow-900"></i>';
        commentEl.innerText = '太厉害了！Xuất sắc phi thường! Em xứng đáng nhận danh hiệu Trạng Nguyên Hán Ngữ Lớp 5 danh giá nhất CodeHub!';
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Hán Ngữ (榜眼及第)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-red-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-red-200 dark:ring-red-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-medal text-white"></i>';
        commentEl.innerText = '非常好！Em đạt kết quả rất cao, nắm rất vững chữ Hán, ngữ pháp và phát âm Pinyin!';
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Hán Ngữ (探花及第)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-600 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200 dark:ring-amber-800';
        badgeEl.innerHTML = '<i class="fa-solid fa-award text-white"></i>';
        commentEl.innerText = '很不错！Em đã hoàn thành tốt bài thi và nắm chắc các mẫu câu giao tiếp cơ bản!';
      } else {
        rankEl.innerText = 'Học Sĩ Chăm Chỉ (勤学学士)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-gray-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class="fa-solid fa-book-open-reader text-white"></i>';
        commentEl.innerText = 'Em hãy ôn lại các quy tắc bút thuận, thanh điệu Pinyin và luyện thi lại nhé. Cố lên!';
      }

      resArea.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('btnSubmitContest').classList.add('hidden');
    }
  </script>
</body>
</html>`;

function renderChineseLesson(l, t) {
  let qid = 'l_' + l.num;
  let qz = l.quiz;

  // Build dialogue full text for audio
  let fullDialogueCn = l.dialogue.map(d => d.spk + ': ' + d.cn).join(' ');

  let res = `
          <!-- Lesson Card: Bài ${l.num} -->
          <article id="bai-${l.num}" class="lesson-card p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
            
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-red-50 dark:bg-red-950/80 text-red-700 dark:text-red-300 font-black text-xs border border-red-200 dark:border-red-800">
                    Bài ${l.num} • Tập ${l.book}
                  </span>
                  <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">${escapeHtml(t.name.split(':')[0])}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <span>${escapeHtml(l.titleCn)}</span>
                </h3>
                <p class="text-xs sm:text-sm text-red-600 dark:text-red-400 font-bold font-mono">${escapeHtml(l.pinyin)}</p>
                <p class="text-xs text-gray-600 dark:text-gray-300 font-medium">${escapeHtml(l.titleVi)}</p>
              </div>
              <button onclick="speakChinese('${escapeJs(l.titleCn)}')" class="shrink-0 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-dark-surface hover:bg-red-100 dark:hover:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-bold flex items-center gap-2 border border-red-200 dark:border-red-800 transition">
                <i class="fa-solid fa-volume-high text-red-500"></i> Nghe Tiêu Đề
              </button>
            </div>

            <!-- 1. Mục tiêu bài học (Target) -->
            <div class="p-3.5 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 text-xs text-red-900 dark:text-red-200 space-y-1">
              <div class="font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-bullseye text-red-600 dark:text-red-400"></i> 1. Mục tiêu bài học (学习目标)
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${escapeHtml(l.target)}</p>
            </div>

            <!-- 2. Từ vựng Chữ Hán – Pinyin – Tiếng Việt (Vocab) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-book-open text-red-600 dark:text-red-400"></i> 2. Từ vựng trọng tâm (核心生词)
                </h4>
                <span class="text-[11px] text-gray-400">Bấm loa để nghe phát âm chuẩn Pinyin zh-CN</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
`;

  l.vocab.forEach(v => {
    res += `                <div class="p-3 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2 hover:border-red-200 dark:hover:border-red-800 transition">
                  <div class="space-y-0.5 min-w-0">
                    <div class="font-black text-base text-gray-900 dark:text-white truncate">${escapeHtml(v.cn)}</div>
                    <div class="text-xs font-mono font-bold text-red-600 dark:text-red-400">${escapeHtml(v.py)} • <span class="italic text-[10px] text-gray-500">${escapeHtml(v.type || '')}</span></div>
                    <div class="text-xs text-gray-700 dark:text-gray-300">${escapeHtml(v.vi)}</div>
                  </div>
                  <button onclick="speakChinese('${escapeJs(v.cn)}')" class="shrink-0 p-2 rounded-xl bg-white dark:bg-dark-card hover:bg-red-100 dark:hover:bg-red-950 text-red-600 dark:text-red-400 text-xs shadow-xs transition" title="Nghe phát âm">
                    <i class="fa-solid fa-volume-high"></i>
                  </button>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 3. Ngữ pháp & Cấu trúc câu (Grammar) -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-cube text-amber-600 dark:text-amber-400"></i> 3. Ngữ pháp &amp; Cấu trúc cốt lõi (重点语法)
              </h4>
              <div class="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 space-y-3">
                <div class="font-bold text-xs text-amber-900 dark:text-amber-300">${escapeHtml(l.grammar.title)}</div>
                <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">${escapeHtml(l.grammar.desc)}</p>
                <div class="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-amber-200 dark:border-amber-900 font-mono text-xs text-amber-800 dark:text-amber-300 font-bold">
                  <i class="fa-solid fa-key mr-1.5 text-amber-500"></i> ${escapeHtml(l.grammar.formula)}
                </div>
                <div class="space-y-1.5 pt-1">
                  <div class="text-[11px] font-bold uppercase text-gray-500 tracking-wider">Ví dụ minh họa:</div>
`;

  l.grammar.examples.forEach(ex => {
    res += `                  <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 text-xs">
                    <div>
                      <span class="font-bold text-gray-900 dark:text-white">${escapeHtml(ex.cn)}</span>
                      <span class="font-mono text-red-600 dark:text-red-400 text-[11px] ml-1.5">(${escapeHtml(ex.py)})</span>
                      <div class="text-gray-500 dark:text-gray-400 text-[11px] mt-0.5">&rarr; ${escapeHtml(ex.vi)}</div>
                    </div>
                    <button onclick="speakChinese('${escapeJs(ex.cn)}')" class="shrink-0 p-1.5 text-red-500 hover:text-red-700" title="Nghe câu ví dụ">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>\n`;
  });

  res += `                </div>
              </div>
            </div>

            <!-- 4. Hội thoại tình huống (Dialogue) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-comments text-emerald-600 dark:text-emerald-400"></i> 4. Mẫu hội thoại tình huống (情景对话)
                </h4>
                <button onclick="speakChinese('${escapeJs(fullDialogueCn)}')" class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 transition flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800">
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
                      <span class="font-bold text-sm text-gray-900 dark:text-white">${escapeHtml(dlg.cn)}</span>
                    </div>
                    <div class="text-[11px] font-mono text-red-600 dark:text-red-400 pl-2">${escapeHtml(dlg.py)}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 pl-2">${escapeHtml(dlg.vi)}</div>
                  </div>
                  <button onclick="speakChinese('${escapeJs(dlg.cn)}')" class="shrink-0 p-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-800" title="Nghe câu này">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 5. Luyện viết chữ Hán & Bút thuận (Hanzi Stroke Order Practice) -->
            <div class="space-y-3">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-pen-fancy text-rose-600 dark:text-rose-400"></i> 5. Luyện viết chữ Hán &amp; Bút thuận (汉字笔顺书写)
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
`;

  l.hanziPractice.forEach(hz => {
    res += `                <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-gray-800 space-y-2 hover:border-red-200 transition">
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-black text-gray-900 dark:text-white">${escapeHtml(hz.char)}</span>
                    <button onclick="speakChinese('${escapeJs(hz.char)}')" class="p-1.5 rounded-lg bg-white dark:bg-dark-card text-red-600 text-xs shadow-xs" title="Nghe phát âm">
                      <i class="fa-solid fa-volume-high"></i>
                    </button>
                  </div>
                  <div class="text-xs font-mono font-bold text-red-600 dark:text-red-400">${escapeHtml(hz.pinyin)} • <span class="text-gray-500 font-sans">${escapeHtml(hz.meaning)}</span></div>
                  <div class="text-[11px] text-gray-500 dark:text-gray-400">
                    <div><strong>Bộ thủ:</strong> ${escapeHtml(hz.radical)} | <strong>Số nét:</strong> ${hz.strokes} nét</div>
                    <div class="mt-1 pt-1 border-t border-gray-200 dark:border-gray-700"><strong>Thứ tự nét:</strong> ${escapeHtml(hz.order)}</div>
                  </div>
                </div>\n`;
  });

  res += `              </div>
            </div>

            <!-- 6. Ngữ âm & Biến điệu (Phonetics) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-microphone text-purple-600 dark:text-purple-400"></i> 6. Ngữ âm &amp; Quy tắc biến điệu (语音与变调)
              </h4>
              <div class="p-3.5 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30 text-xs text-purple-950 dark:text-purple-200 flex items-start gap-2">
                <i class="fa-solid fa-lightbulb text-purple-500 mt-0.5"></i>
                <div class="leading-relaxed">${escapeHtml(l.phonetics)}</div>
              </div>
            </div>

            <!-- 7. 4 Kỹ năng thực hành (Compétences) -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-layer-group text-blue-600 dark:text-blue-400"></i> 7. Rèn luyện 4 kỹ năng (听说读写综合训练)
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 space-y-1">
                  <div class="font-black text-red-600 dark:text-red-400"><i class="fa-solid fa-headphones mr-1"></i> 听 (Nghe)</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Nghe từ và đoạn hội thoại ngắn</div>
                </div>
                <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 space-y-1">
                  <div class="font-black text-amber-600 dark:text-amber-400"><i class="fa-solid fa-microphone-lines mr-1"></i> 说 (Nói)</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Đóng vai giao tiếp theo mẫu câu</div>
                </div>
                <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
                  <div class="font-black text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-book-open mr-1"></i> 读 (Đọc)</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Đọc hiểu bài khóa & nhận diện chữ Hán</div>
                </div>
                <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/40 space-y-1">
                  <div class="font-black text-purple-600 dark:text-purple-400"><i class="fa-solid fa-pen-clip mr-1"></i> 写 (Viết)</div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400">Tập viết chữ Hán đúng bút thuận</div>
                </div>
              </div>
            </div>

            <!-- 8. Bài tập tương tác & Tự đánh giá (Quiz) -->
            <div class="space-y-3 pt-2 border-t border-gray-100 dark:border-gray-800">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-question text-red-600 dark:text-red-400"></i> 8. Bài tập vận dụng &amp; Tự đánh giá (自我评价)
                </h4>
                <span class="text-[11px] text-red-600 dark:text-red-400 font-bold">Chuẩn Form CodeHub Lớp 4-5</span>
              </div>
              <div class="p-3.5 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-3">
                <div class="font-bold text-xs text-gray-900 dark:text-white flex items-start gap-1.5">
                  <span class="text-red-600 dark:text-red-400">Câu hỏi kiểm tra:</span>
                  <span>${escapeHtml(qz.q)}</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
`;

  qz.options.forEach((opt, optI) => {
    res += `                  <label class="p-2 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-red-400 dark:hover:border-red-600 cursor-pointer flex items-center gap-2 bg-white dark:bg-dark-card text-xs text-gray-700 dark:text-gray-300 transition">
                    <input type="radio" name="quiz_${qid}" value="${optI}" class="text-red-600 focus:ring-red-500">
                    <span>${escapeHtml(opt)}</span>
                  </label>\n`;
  });

  res += `                </div>
                <div class="flex items-center justify-between pt-1">
                  <button onclick="checkTopicQuiz('${qid}', ${qz.ans}, '${escapeJs(qz.exp)}')" class="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition">
                    Kiểm tra đáp án
                  </button>
                </div>
                <div id="res_${qid}" class="hidden"></div>
              </div>
            </div>

          </article>\n`;

  return res;
}

const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'tiengtrung_5.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'chinese_5.html');

fs.writeFileSync(outPath1, html, 'utf8');
console.log(`Successfully generated ${outPath1} (${html.length} bytes)`);

fs.writeFileSync(outPath2, html, 'utf8');
console.log(`Successfully generated alias ${outPath2}`);
