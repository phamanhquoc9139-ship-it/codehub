const fs = require('fs');
const { generateSVG } = require('./lsdl9_svgs.js');

const histData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_history_data.json', 'utf8'));
const geoData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_geo_data.json', 'utf8'));
const topicData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_topic_data.json', 'utf8'));
const examData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_exam_data.json', 'utf8'));

// Build Program Table rows
const programTableRows = [
  // Lịch sử
  { branch: "Lịch sử", color: "text-amber-600", chapter: "Thế giới từ năm 1918 đến năm 1945", units: "1–4", core: "Nước Nga và Liên Xô; Châu Âu và Mỹ; Châu Á giữa hai thế chiến; Chiến tranh thế giới thứ hai" },
  { branch: "Lịch sử", color: "text-amber-600", chapter: "Việt Nam từ năm 1918 đến năm 1945", units: "5–8", core: "Phong trào dân tộc dân chủ; Hoạt động của Nguyễn Ái Quốc và thành lập Đảng; Phong trào 1930–1939; Cách mạng tháng Tám 1945" },
  { branch: "Lịch sử", color: "text-amber-600", chapter: "Thế giới từ năm 1945 đến năm 1991", units: "9–12", core: "Chiến tranh Lạnh; Liên Xô và Đông Âu; Mỹ và Tây Âu; Phong trào giải phóng dân tộc Mỹ La-tinh, châu Á" },
  { branch: "Lịch sử", color: "text-amber-600", chapter: "Việt Nam từ năm 1945 đến năm 1975", units: "13–17", core: "Năm đầu sau CMT8; Kháng chiến chống Pháp 1946–1954; Kháng chiến chống Mỹ cứu nước 1954–1975" },
  { branch: "Lịch sử", color: "text-amber-600", chapter: "Thế giới từ năm 1991 đến nay", units: "18–19", core: "Trật tự thế giới mới đa cực, quan hệ Nga - Mỹ; Sự trỗi dậy kinh tế của châu Á, ASEAN" },
  { branch: "Lịch sử", color: "text-amber-600", chapter: "Việt Nam từ năm 1976 đến nay", units: "20", core: "Thống nhất đất nước về mặt nhà nước; Công cuộc Đổi mới toàn diện và hội nhập quốc tế" },
  { branch: "Lịch sử", color: "text-amber-600", chapter: "Cách mạng KHKT & Toàn cầu hoá", units: "21", core: "Cách mạng công nghiệp lần thứ tư (4.0); Xu thế toàn cầu hoá, cơ hội và thách thức cho Việt Nam" },
  // Địa lí
  { branch: "Địa lí", color: "text-teal-600", chapter: "Địa lí dân cư Việt Nam", units: "1–4", core: "Dân tộc và dân số (vượt 100 triệu); Phân bố dân cư, đô thị hoá; Lao động, việc làm; Thực hành việc làm & thu nhập" },
  { branch: "Địa lí", color: "text-teal-600", chapter: "Địa lí các ngành kinh tế", units: "5–11", core: "Nông nghiệp (trồng trọt, chăn nuôi); Lâm nghiệp & thuỷ sản; Công nghiệp trọng điểm; Dịch vụ, giao thông, du lịch; Thương mại điện tử" },
  { branch: "Địa lí", color: "text-teal-600", chapter: "Địa lí các vùng kinh tế – xã hội", units: "12–21", core: "Trung du & miền núi Bắc Bộ; ĐB sông Hồng; Bắc Trung Bộ; Duyên hải Nam Trung Bộ & Tây Nguyên; Đông Nam Bộ; ĐB sông Cửu Long; Kinh tế biển, đảo (Hoàng Sa, Trường Sa)" },
  // Chủ đề chung
  { branch: "Chủ đề chung", color: "text-indigo-600", chapter: "Đô thị: Lịch sử và hiện tại", units: "1", core: "Quá trình đô thị hoá qua các thời kì; Vai trò của các đô thị Thăng Long, Hội An, TP.HCM; Đô thị thông minh thích ứng BĐKH" },
  { branch: "Chủ đề chung", color: "text-indigo-600", chapter: "Văn minh châu thổ sông Hồng & Cửu Long", units: "2", core: "Trị thủy đê điều sông Hồng và thích ứng 'sống chung với lũ' sông Cửu Long; Bản sắc văn hóa sông nước" },
  { branch: "Chủ đề chung", color: "text-indigo-600", chapter: "Bảo vệ chủ quyền ở Biển Đông", units: "3", core: "Quá trình xác lập và thực thi chủ quyền thời phong kiến và hiện đại; UNCLOS 1982; Trách nhiệm công dân" }
];

// Helper: Escape HTML
function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Generate Sidebar Links
function generateSidebar() {
  let html = '';

  // 1. History Chapters
  const histChapterGroups = [
    { title: "CHƯƠNG 1. THẾ GIỚI TỪ 1918 ĐẾN 1945", range: [1, 4] },
    { title: "CHƯƠNG 2. VIỆT NAM TỪ 1918 ĐẾN 1945", range: [5, 8] },
    { title: "CHƯƠNG 3. THẾ GIỚI TỪ 1945 ĐẾN 1991", range: [9, 12] },
    { title: "CHƯƠNG 4. VIỆT NAM TỪ 1945 ĐẾN 1975", range: [13, 17] },
    { title: "CHƯƠNG 5. THẾ GIỚI TỪ 1991 ĐẾN NAY", range: [18, 19] },
    { title: "CHƯƠNG 6. VIỆT NAM TỪ 1976 ĐẾN NAY", range: [20, 20] },
    { title: "CHƯƠNG 7. CÁCH MẠNG 4.0 & TOÀN CẦU HÓA", range: [21, 21] }
  ];

  histChapterGroups.forEach(grp => {
    const count = grp.range[1] - grp.range[0] + 1;
    html += `
      <div class="mb-3.5 chapter-nav-group" data-branch="history">
        <div class="px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50/80 dark:bg-amber-950/40 rounded-lg mb-1 flex items-center justify-between">
          <span class="truncate">${esc(grp.title)}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono shrink-0">${count}</span>
        </div>
        <div class="pl-1 space-y-0.5">
    `;
    for (let i = grp.range[0]; i <= grp.range[1]; i++) {
      const item = histData[i - 1];
      html += `
        <a href="#unit-ls-${i}" class="unit-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs transition group" data-branch="history" data-id="ls-${i}">
          <span class="truncate flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
            <span class="font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition truncate">Bài ${i}: ${esc(item.title)}</span>
          </span>
          <span class="text-[10px] text-slate-500 font-mono shrink-0">#${i}</span>
        </a>
      `;
    }
    html += `</div></div>`;
  });

  // 2. Geography Chapters
  const geoChapterGroups = [
    { title: "CHƯƠNG 1. ĐỊA LÍ DÂN CƯ VIỆT NAM", range: [1, 4] },
    { title: "CHƯƠNG 2. ĐỊA LÍ CÁC NGÀNH KINH TẾ", range: [5, 11] },
    { title: "CHƯƠNG 3. CÁC VÙNG KINH TẾ – XÃ HỘI", range: [12, 21] }
  ];

  geoChapterGroups.forEach(grp => {
    const count = grp.range[1] - grp.range[0] + 1;
    html += `
      <div class="mb-3.5 chapter-nav-group" data-branch="geography">
        <div class="px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50/80 dark:bg-teal-950/40 rounded-lg mb-1 flex items-center justify-between">
          <span class="truncate">${esc(grp.title)}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono shrink-0">${count}</span>
        </div>
        <div class="pl-1 space-y-0.5">
    `;
    for (let i = grp.range[0]; i <= grp.range[1]; i++) {
      const item = geoData[i - 1];
      html += `
        <a href="#unit-dl-${i}" class="unit-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs transition group" data-branch="geography" data-id="dl-${i}">
          <span class="truncate flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
            <span class="font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition truncate">Bài ${i}: ${esc(item.title)}</span>
          </span>
          <span class="text-[10px] text-slate-500 font-mono shrink-0">#${i + 21}</span>
        </a>
      `;
    }
    html += `</div></div>`;
  });

  // 3. Common Topics
  html += `
    <div class="mb-3.5 chapter-nav-group" data-branch="common">
      <div class="px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/40 rounded-lg mb-1 flex items-center justify-between">
        <span class="truncate">CHỦ ĐỀ CHUNG &amp; KĨ NĂNG</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono shrink-0">3</span>
      </div>
      <div class="pl-1 space-y-0.5">
  `;
  for (let i = 1; i <= 3; i++) {
    const item = topicData[i - 1];
    html += `
      <a href="#unit-cd-${i}" class="unit-nav-link flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs transition group" data-branch="common" data-id="cd-${i}">
        <span class="truncate flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
          <span class="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate">Chủ đề ${i}: ${esc(item.title)}</span>
        </span>
        <span class="text-[10px] text-slate-500 font-mono shrink-0">#${i + 42}</span>
      </a>
    `;
  }
  html += `</div></div>`;

  return html;
}

// Helper: render unit card
function renderUnitCard(type, item, unitIndex) {
  const isHist = type === 'hist';
  const isGeo = type === 'geo';
  const branchKey = isHist ? 'history' : (isGeo ? 'geography' : 'common');
  const unitId = isHist ? `unit-ls-${item.num}` : (isGeo ? `unit-dl-${item.num}` : `unit-cd-${item.num}`);
  
  const borderColor = isHist ? 'border-amber-500/40' : (isGeo ? 'border-teal-500/40' : 'border-indigo-500/40');
  const pillBg = isHist ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300' :
                 (isGeo ? 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-300' :
                 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300');
  const icon = isHist ? 'fa-landmark text-amber-500' : (isGeo ? 'fa-earth-asia text-teal-500' : 'fa-layer-group text-indigo-500');
  const branchName = isHist ? 'Lịch sử' : (isGeo ? 'Địa lí' : 'Chủ đề chung');
  const chapterName = item.chapter || item.badge || 'LỊCH SỬ VÀ ĐỊA LÍ 9';
  const displayTitle = (isHist ? `Bài ${item.num}. ` : (isGeo ? `Bài ${item.num}. ` : `Chủ đề ${item.num}. `)) + item.title;

  const svg = generateSVG(type, item.num, item.title);

  // Objectives
  const objText = isHist ? 
    `Nắm vững bối cảnh, sự kiện bước ngoặt, nguyên nhân - diễn biến - kết quả và ý nghĩa của bài học; vận dụng tư duy phản biện và liên hệ thực tiễn lịch sử dân tộc.` :
    (isGeo ?
    `Khai thác bản đồ, số liệu thống kê năm 2024 và cập nhật địa giới hành chính năm 2025; hiểu rõ đặc điểm tài nguyên, thế mạnh kinh tế và giải pháp phát triển bền vững.` :
    `Tích hợp kiến thức liên môn Lịch sử và Địa lí; nhận thức sâu sắc tiến trình văn minh châu thổ, phát triển đô thị và ý thức bảo vệ chủ quyền biển đảo Tổ quốc.`);

  // Multiple choice quiz
  const qList = item.quiz || [];
  const primaryQ = qList[0] || { q: "Kiến thức trọng tâm của bài học là gì?", options: ["Nắm vững kiến thức SGK", "Bỏ qua các mốc lịch sử", "Không cần liên hệ thực tế", "Chỉ học thuộc lòng"], ans: 0, expl: "Cần nắm chắc kiến thức cốt lõi theo SGK Kết nối tri thức." };

  return `
    <article id="${unitId}" class="unit-card scroll-mt-24 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 ${borderColor} border shadow-md hover:shadow-xl transition-all duration-300 space-y-4" data-branch="${branchKey}" data-title="${esc(displayTitle.toLowerCase())}">
      
      <!-- Card Header -->
      <div class="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3.5">
        <div class="space-y-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${pillBg}">
              <i class="fa-solid ${icon}"></i> ${branchName}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">${esc(chapterName)}</span>
          </div>
          <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
            ${esc(displayTitle)}
          </h3>
        </div>
        <span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold shrink-0">
          Mục #${unitIndex}
        </span>
      </div>

      <!-- Objective Box -->
      <div class="p-3 bg-slate-50/90 dark:bg-slate-800/50 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
        <i class="fa-solid fa-bullseye ${isHist ? 'text-amber-500' : (isGeo ? 'text-teal-500' : 'text-indigo-500')} text-sm mt-0.5 shrink-0"></i>
        <div>
          <strong class="text-slate-900 dark:text-slate-100">Mục tiêu bài học:</strong>
          <p class="mt-0.5 leading-relaxed text-slate-600 dark:text-slate-400">${objText}</p>
        </div>
      </div>

      <!-- Visual Vector SVG -->
      <div class="visual-container my-3 rounded-2xl overflow-hidden shadow-inner flex justify-center bg-slate-950 p-2">
        ${svg}
      </div>

      <!-- Core Knowledge Block -->
      <div class="p-4 bg-gradient-to-br from-slate-50/90 to-slate-100/50 dark:from-slate-800/70 dark:to-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
        <h4 class="font-bold text-slate-900 dark:text-slate-100 mb-2.5 flex items-center gap-2 text-xs sm:text-sm">
          <i class="fa-solid fa-book-bookmark ${isHist ? 'text-amber-500' : (isGeo ? 'text-teal-500' : 'text-indigo-500')}"></i> Kiến thức cốt lõi (Chuẩn SGK Kết nối tri thức)
        </h4>
        
        <div class="space-y-3 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
          ${item.lines.map((line, idx) => `
            <div class="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-md ${isHist ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' : (isGeo ? 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300' : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300')} flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">${idx + 1}</span>
              <p class="flex-1">${esc(line)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Practice Quiz Section -->
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-question ${isHist ? 'text-amber-500' : (isGeo ? 'text-teal-500' : 'text-indigo-500')}"></i>
            Luyện tập &amp; Kiểm tra củng cố
          </h4>
          <span class="text-[11px] text-slate-500">Chọn 1 đáp án đúng</span>
        </div>

        <p class="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2">
          <span class="px-2 py-0.5 rounded ${isHist ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' : (isGeo ? 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300' : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300')} text-[10.5px] font-extrabold shrink-0">Thực hành</span>
          <span>${esc(primaryQ.q)}</span>
        </p>

        <div class="space-y-1.5">
          ${primaryQ.options.map((opt, optIdx) => `
            <label class="flex items-start gap-2.5 p-2 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition text-xs text-slate-800 dark:text-slate-200">
              <input type="radio" name="quiz_${unitId}" value="${optIdx}" class="mt-0.5 ${isHist ? 'text-amber-600' : (isGeo ? 'text-teal-600' : 'text-indigo-600')} focus:ring-0" onchange="checkUnitQuiz('${unitId}', ${optIdx}, ${primaryQ.ans}, '${encodeURIComponent(primaryQ.expl)}')">
              <span><strong class="text-slate-500 mr-1">${['A','B','C','D'][optIdx]}.</strong> ${esc(opt)}</span>
            </label>
          `).join('')}
        </div>

        <div id="feedback-${unitId}" class="hidden mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed transition-all"></div>
      </div>

    </article>
  `;
}

// Generate All Unit Cards
let allCardsHtml = '';
let globalUnitCounter = 1;

histData.forEach(item => {
  allCardsHtml += renderUnitCard('hist', item, globalUnitCounter++);
});
geoData.forEach(item => {
  allCardsHtml += renderUnitCard('geo', item, globalUnitCounter++);
});
topicData.forEach(item => {
  allCardsHtml += renderUnitCard('topic', item, globalUnitCounter++);
});

// Full page HTML string matching lsdl_8.html exact styling & structure
const fullPageHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Lịch Sử và Địa Lí 9 (SGK Kết Nối Tri Thức: 21 Bài Lịch Sử • 21 Bài Địa Lí • 3 Chủ Đề Chung • Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            history: {
              gold: '#D97706',
              amber: '#B45309',
              red: '#B91C1C'
            },
            geo: {
              teal: '#0D9488',
              emerald: '#059669',
              blue: '#0284C7'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
    }
    .glass-header {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    body, p, li, h1, h2, h3, h4, button, span {
      letter-spacing: 0.005em !important;
      line-height: 1.7 !important;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #94a3b8;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #64748b;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">

  <!-- Top Navigation Header -->
  <header class="sticky top-0 z-40 glass-header bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Logo & Back to Grade 9 -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-landmark text-sm"></i>
          </div>
          <span class="font-black text-lg bg-gradient-to-r from-amber-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700 hidden sm:inline">/</span>
        <a href="../index.html" class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition hidden sm:inline">
          Lớp 9
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <span class="text-xs font-bold text-amber-600 dark:text-amber-400 truncate max-w-[180px] sm:max-w-none">
          Lịch Sử &amp; Địa Lí 9
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        
        <!-- Mở Sổ tay Niên biểu Modal -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800 transition flex items-center gap-1.5 shadow-xs">
          <i class="fa-solid fa-book text-amber-600"></i>
          <span class="hidden sm:inline">Sổ tay Niên biểu &amp; Địa lí</span>
        </button>

        <!-- Trạng Nguyên Button -->
        <a href="#exam-section" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-amber-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy"></i>
          <span class="hidden sm:inline">Trạng Nguyên (60p)</span>
        </a>

        <!-- Dark/Light Mode toggle -->
        <button id="themeToggleBtn" onclick="toggleTheme()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition">
          <i id="themeIcon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner matching lsdl_8.html -->
  <section class="relative bg-gradient-to-br from-amber-900 via-slate-900 to-teal-950 text-white overflow-hidden py-10 sm:py-14 border-b border-amber-800/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl space-y-4">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
          <i class="fa-solid fa-graduation-cap"></i> THEO SGK LỊCH SỬ VÀ ĐỊA LÍ 9 – BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>

        <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          KIẾN THỨC CỐT LÕI – LỊCH SỬ VÀ ĐỊA LÍ 9
        </h1>

        <!-- Exact blockquote -->
        <blockquote class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border-l-4 border-amber-500 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
          Tổng hợp theo SGK Lịch sử và Địa lí 9, bộ Kết nối tri thức với cuộc sống. Bố cục giữ đúng 7 chương Lịch sử (21 bài), 3 chương Địa lí (21 bài) và 3 chủ đề chung. Tài liệu dành cho xây dựng nội dung học tập trên web: giữ khái niệm, mốc, nguyên nhân – diễn biến – kết quả – ý nghĩa, đặc điểm địa lí, kĩ năng khai thác bản đồ/số liệu và nhiệm vụ thực hành. Các số liệu địa lí của sách chủ yếu lấy năm 2024; địa giới hành chính được cập nhật theo việc sắp xếp năm 2025.
        </blockquote>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a href="#ban-do-chuong-trinh" class="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition flex items-center gap-2">
            <i class="fa-solid fa-table-list"></i> Bản đồ chương trình
          </a>
          <button onclick="openHandbookModal()" class="px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition flex items-center gap-2">
            <i class="fa-solid fa-timeline"></i> Sổ tay Niên biểu
          </button>
          <a href="#exam-section" class="px-5 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
            <i class="fa-solid fa-trophy"></i> Đấu trường Trạng Nguyên
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- 1. BẢN ĐỒ CHƯƠNG TRÌNH & KĨ NĂNG XUYÊN SUỐT -->
  <section id="ban-do-chuong-trinh" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 mb-8">
    <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
      
      <div>
        <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <i class="fa-solid fa-map-location-dot text-amber-500"></i>
          1. Bản Đồ Chương Trình
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-b border-amber-200 dark:border-amber-800">
                <th class="py-2.5 px-3 font-bold">Phần</th>
                <th class="py-2.5 px-3 font-bold">Chương/chủ đề</th>
                <th class="py-2.5 px-3 font-bold text-center">Bài</th>
                <th class="py-2.5 px-3 font-bold">Nội dung trọng tâm</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              ${programTableRows.map(r => `
                <tr>
                  <td class="py-2 px-3 font-bold ${r.color}">${r.branch}</td>
                  <td class="py-2 px-3">${r.chapter}</td>
                  <td class="py-2 px-3 text-center font-bold">${r.units}</td>
                  <td class="py-2 px-3">${r.core}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Kĩ năng xuyên suốt -->
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
        <h3 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Kĩ năng xuyên suốt môn học
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/60">
            <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-timeline text-amber-600"></i> Kĩ năng Lịch sử Lớp 9
            </h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Khai thác niên biểu, dòng thời gian từ 1918 đến nay; phân biệt nguyên nhân, diễn biến, kết quả và ý nghĩa của các cuộc cách mạng, kháng chiến; nhận xét tư liệu lịch sử theo bối cảnh, tác giả và ý nghĩa thời đại.
            </p>
          </div>
          <div class="p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-800/60">
            <h4 class="font-bold text-teal-900 dark:text-teal-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-compass-drafting text-teal-600"></i> Kĩ năng Địa lí &amp; Quy tắc Số liệu (2024 / Địa giới 2025)
            </h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Đọc bản đồ phân bố dân cư, kinh tế 6 vùng sinh thái; phân tích số liệu thống kê năm 2024 (dân số vượt 100 triệu, xuất nhập khẩu, cơ cấu kinh tế) và địa giới hành chính sắp xếp năm 2025; gắn kết quả học tập với bảo vệ chủ quyền biển đảo.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Filter & Search Bar matching lsdl_8.html -->
  <div class="sticky top-16 z-30 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
      
      <!-- Filter Tabs -->
      <div class="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-xs font-bold overflow-x-auto w-full sm:w-auto">
        <button onclick="filterUnits('all', this)" class="filter-tab-btn active px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs transition">
          Tất cả (45)
        </button>
        <button onclick="filterUnits('history', this)" class="filter-tab-btn px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-amber-600 transition">
          Lịch sử (21)
        </button>
        <button onclick="filterUnits('geography', this)" class="filter-tab-btn px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-teal-600 transition">
          Địa lí (21)
        </button>
        <button onclick="filterUnits('common', this)" class="filter-tab-btn px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition">
          Chủ đề chung (3)
        </button>
      </div>

      <!-- Search Input -->
      <div class="relative w-full sm:w-80">
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input type="text" id="unitSearchInput" onkeyup="searchUnits()" placeholder="Tìm kiếm bài học, mốc sự kiện, số liệu..." class="w-full pl-9 pr-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs transition">
      </div>

    </div>
  </div>

  <!-- Main Content Layout (Sidebar + Units List) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

      <!-- Left Sidebar: Chapter Directory -->
      <aside class="hidden lg:block lg:col-span-1 sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
          <span class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <i class="fa-solid fa-bars-staggered text-amber-500"></i> Mục lục bài học
          </span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
            45 Mục
          </span>
        </div>
        <nav id="sidebarNav" class="space-y-1">
          ${generateSidebar()}
        </nav>
      </aside>

      <!-- Right Column: Units List & Exam -->
      <div class="lg:col-span-3 space-y-8">
        
        <!-- Unit Cards -->
        <div id="unitsContainer" class="space-y-8">
          ${allCardsHtml}
        </div>

        <!-- Exam Section matching lsdl_8.html -->
        <section id="exam-section" class="mt-14 mb-8 rounded-3xl bg-gradient-to-br from-slate-950 via-amber-950/40 to-slate-900 p-6 sm:p-8 text-white border border-amber-800/40 shadow-xl relative overflow-hidden">
          <div class="relative z-10">
            
            <!-- Exam Header -->
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/40 pb-5">
              <div class="space-y-1">
                <span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
                  <i class="fa-solid fa-trophy"></i> HỘI THI TRẠNG NGUYÊN SỬ ĐỊA 9
                </span>
                <h3 class="text-xl sm:text-2xl font-black text-white">
                  Đấu Trường Trạng Nguyên Lịch Sử &amp; Địa Lí 9 (60:00)
                </h3>
                <p class="text-xs text-slate-300">
                  30 câu hỏi trắc nghiệm chuẩn hóa bao quát Lịch sử thế giới, Lịch sử Việt Nam, Địa lí các vùng kinh tế và Chủ đề chung.
                </p>
              </div>

              <!-- Timer Display -->
              <div class="flex items-center gap-3 bg-slate-900/90 border border-amber-500/50 px-4 py-2 rounded-2xl shadow-inner">
                <i class="fa-solid fa-clock text-amber-400 animate-pulse text-lg"></i>
                <div id="examTimer" class="font-mono text-xl sm:text-2xl font-black text-amber-400">60:00</div>
              </div>
            </div>

            <!-- Exam Intro Screen -->
            <div id="examIntro" class="text-center py-8 max-w-xl mx-auto space-y-4">
              <div class="w-16 h-16 rounded-3xl bg-amber-500/20 text-amber-400 text-3xl flex items-center justify-center mx-auto border border-amber-500/30">
                <i class="fa-solid fa-scroll"></i>
              </div>
              <h4 class="text-lg font-black">Sẵn sàng bước vào Đấu trường Trạng Nguyên?</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Đề thi gồm 30 câu hỏi lựa chọn 4 phương án (15 câu Lịch sử + 15 câu Địa lí &amp; Chủ đề chung). Thời gian làm bài 60 phút. Hệ thống tự động chấm điểm, xếp hạng Trạng Nguyên và hiển thị đáp án giải thích chi tiết.
              </p>
              <button onclick="startExam()" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-teal-500 hover:from-amber-500 hover:to-teal-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition transform hover:scale-105">
                BẮT ĐẦU LÀM BÀI THI
              </button>
            </div>

            <!-- Exam Body Screen -->
            <div id="examBody" class="hidden pt-6">
              <div id="examQuestionsList" class="space-y-6 mb-8">
                ${examData.map((item, idx) => `
                  <div class="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 exam-q-block" data-idx="${idx}" data-ans="${item.ans}">
                    <div class="flex items-center justify-between gap-2 mb-2">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold ${item.subject === 'Lịch sử' ? 'bg-amber-900/60 text-amber-300' : 'bg-teal-900/60 text-teal-300'}">
                        ${item.subject} • Câu ${idx + 1}
                      </span>
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-slate-100 mb-3">
                      ${esc(item.q)}
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      ${item.options.map((opt, oIdx) => `
                        <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-700 bg-slate-950/60 hover:bg-slate-800 cursor-pointer transition text-xs text-slate-300">
                          <input type="radio" name="exam_ans_${idx}" value="${oIdx}" onchange="updateAnsweredCount()" class="mt-0.5 text-amber-500 focus:ring-0">
                          <span><strong class="text-amber-400 mr-1">${['A','B','C','D'][oIdx]}.</strong> ${esc(opt)}</span>
                        </label>
                      `).join('')}
                    </div>
                    <div id="exam_expl_${idx}" class="hidden mt-3 p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-300">
                      <strong class="text-amber-400">Giải thích:</strong> ${esc(item.expl)}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="flex items-center justify-between pt-4 border-t border-amber-800/40">
                <span id="answeredCount" class="text-xs text-amber-300 font-bold">Đã làm: 0/30 câu</span>
                <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition flex items-center gap-2">
                  <i class="fa-solid fa-paper-plane"></i> Nộp bài thi
                </button>
              </div>
            </div>

            <!-- Exam Result Screen -->
            <div id="examResult" class="hidden text-center py-6 space-y-4">
              <div id="resultRankBadge" class="text-4xl sm:text-5xl">🏆</div>
              <h4 id="resultTitle" class="text-xl sm:text-2xl font-black text-amber-300">TRẠNG NGUYÊN XUẤT SẮC</h4>
              <div class="text-3xl font-black text-white" id="resultScore">10.0 / 10</div>
              <p id="resultDesc" class="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Bạn đã hoàn thành xuất sắc bài thi với kết quả cao!
              </p>
              <div class="pt-2">
                <button onclick="retakeExam()" class="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition">
                  Làm lại bài thi
                </button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  </main>

  <!-- Modal: Sổ tay Niên biểu & Quy tắc Địa lí 9 matching lsdl_8.html -->
  <div id="handbookModal" class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden">
      
      <!-- Modal Header -->
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-timeline"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Sổ Tay Niên Biểu Lịch Sử &amp; Số Liệu Địa Lí 9</h3>
            <p class="text-[11px] text-slate-500">Tra cứu nhanh các mốc son thời gian và dữ liệu 2024 / địa giới 2025</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 overflow-y-auto space-y-5 text-xs text-slate-700 dark:text-slate-300 custom-scrollbar">
        
        <!-- Bảng 1: Niên biểu Lịch sử thế giới & Việt Nam -->
        <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 text-xs sm:text-sm mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-calendar-check text-amber-500"></i> Bảng Niên biểu Mốc son Lịch sử Trọng tâm Lớp 9
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 font-bold">
                  <th class="py-1 px-2">Năm</th>
                  <th class="py-1 px-2">Sự kiện lịch sử</th>
                  <th class="py-1 px-2">Ý nghĩa bước ngoặt</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-amber-100 dark:divide-amber-900/30">
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">1919</td><td class="py-1 px-2">Bản Yêu sách nhân dân An Nam</td><td class="py-1 px-2">Nguyễn Ái Quốc gửi tới Hội nghị Véc-xai</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">7-1920</td><td class="py-1 px-2">Luận cương của Lê-nin</td><td class="py-1 px-2">Tìm thấy con đường cứu nước theo CM vô sản</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">3-1921</td><td class="py-1 px-2">Chính sách kinh tế mới (NEP)</td><td class="py-1 px-2">Lê-nin đề xướng, phục hồi kinh tế Nga</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">12-1922</td><td class="py-1 px-2">Thành lập Liên bang Xô viết</td><td class="py-1 px-2">Nhà nước liên bang XHCN đầu tiên thế giới</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">1925</td><td class="py-1 px-2">Bãi công Ba Son (Sài Gòn)</td><td class="py-1 px-2">Công nhân bước đầu chuyển sang tự giác</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">10-1929</td><td class="py-1 px-2">Đại suy thoái kinh tế thế giới</td><td class="py-1 px-2">Khủng hoảng sâu sắc thế giới tư bản</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">Đầu 1930</td><td class="py-1 px-2">Thành lập Đảng Cộng sản Việt Nam</td><td class="py-1 px-2">Bước ngoặt lịch sử vĩ đại của cách mạng VN</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">1930–1931</td><td class="py-1 px-2">Phong trào Xô viết Nghệ – Tĩnh</td><td class="py-1 px-2">Cuộc diễn tập đầu tiên cho CMT8 1945</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">1939–1945</td><td class="py-1 px-2">Chiến tranh thế giới thứ hai</td><td class="py-1 px-2">Liên Xô & Đồng minh tiêu diệt phát xít</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">2-9-1945</td><td class="py-1 px-2">Tuyên ngôn Độc lập</td><td class="py-1 px-2">Khai sinh nước Việt Nam Dân chủ Cộng hòa</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">1946–1954</td><td class="py-1 px-2">Kháng chiến chống thực dân Pháp</td><td class="py-1 px-2">Đỉnh cao là chiến thắng Điện Biên Phủ 1954</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">1954–1975</td><td class="py-1 px-2">Kháng chiến chống Mỹ cứu nước</td><td class="py-1 px-2">Đại thắng mùa Xuân 30-4-1975 giải phóng MN</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">12-1986</td><td class="py-1 px-2">Đại hội VI khởi xướng Đổi mới</td><td class="py-1 px-2">Kinh tế thị trường định hướng XHCN</td></tr>
                <tr><td class="py-1 px-2 font-mono font-bold text-amber-700">1995</td><td class="py-1 px-2">Gia nhập ASEAN & bình thường hoá với Mỹ</td><td class="py-1 px-2">Hội nhập quốc tế sâu rộng và toàn diện</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bảng 2: Dữ liệu Địa lí 6 Vùng kinh tế 2024 / Địa giới 2025 -->
        <div class="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40">
          <h4 class="font-bold text-teal-900 dark:text-teal-300 text-xs sm:text-sm mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-chart-pie text-teal-500"></i> Bảng Thống kê 6 Vùng Kinh tế – Xã hội (Số liệu 2024 / Địa giới 2025)
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-300 font-bold">
                  <th class="py-1 px-2">Vùng</th>
                  <th class="py-1 px-2">Thế mạnh tự nhiên &amp; Tài nguyên</th>
                  <th class="py-1 px-2">Ngành kinh tế trọng điểm</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-teal-100 dark:divide-teal-900/30">
                <tr><td class="py-1 px-2 font-bold text-teal-700">Trung du &amp; MN Bắc Bộ</td><td class="py-1 px-2">Khoáng sản (than, kim loại), thủy điện lớn</td><td class="py-1 px-2">Thủy điện, khai khoáng, chè búp, dược liệu</td></tr>
                <tr><td class="py-1 px-2 font-bold text-teal-700">Đồng bằng sông Hồng</td><td class="py-1 px-2">Đất phù sa màu mỡ, vị trí trung tâm</td><td class="py-1 px-2">Thâm canh lúa, vụ đông, công nghiệp chế biến, dịch vụ</td></tr>
                <tr><td class="py-1 px-2 font-bold text-teal-700">Bắc Trung Bộ</td><td class="py-1 px-2">Rừng, biển, di sản thế giới UNESCO</td><td class="py-1 px-2">Lâm nghiệp, kinh tế biển, du lịch văn hóa</td></tr>
                <tr><td class="py-1 px-2 font-bold text-teal-700">Duyên hải NTB &amp; Tây Nguyên</td><td class="py-1 px-2">Cảng biển nước sâu, đất đỏ bazan, bô-xít</td><td class="py-1 px-2">Cà phê, cao su, năng lượng tái tạo, cảng biển</td></tr>
                <tr><td class="py-1 px-2 font-bold text-teal-700">Đông Nam Bộ</td><td class="py-1 px-2">Dầu khí thềm lục địa, địa hình thoải</td><td class="py-1 px-2">Đầu tàu kinh tế, công nghiệp công nghệ cao, tài chính</td></tr>
                <tr><td class="py-1 px-2 font-bold text-teal-700">ĐB sông Cửu Long</td><td class="py-1 px-2">Đất phù sa, mạng lưới sông rạch, thủy sản</td><td class="py-1 px-2">Vựa lúa số 1, cây ăn quả nhiệt đới, nuôi tôm cá tra</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Footer matching lsdl_8.html -->
  <footer class="mt-16 py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">NỀN TẢNG HỌC LIỆU SỐ TRỰC QUAN • LỊCH SỬ VÀ ĐỊA LÍ 9</p>
      <p>Hệ thống hoá theo SGK Kết nối tri thức với cuộc sống • Bộ dữ liệu chuẩn mực cho giáo viên và học sinh ôn thi chuyển cấp.</p>
    </div>
  </footer>

  <!-- Scripts matching lsdl_8.html exact logic -->
  <script>
    // 1. Dark/Light Mode
    function initTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        const icon = document.getElementById('themeIcon');
        if (icon) icon.className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        const icon = document.getElementById('themeIcon');
        if (icon) icon.className = 'fa-solid fa-moon text-sm text-slate-700';
      }
    }
    initTheme();

    function toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        const icon = document.getElementById('themeIcon');
        if (icon) icon.className = 'fa-solid fa-moon text-sm text-slate-700';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        const icon = document.getElementById('themeIcon');
        if (icon) icon.className = 'fa-solid fa-sun text-sm text-amber-400';
      }
    }

    // 2. Filter Units by Branch (All / History / Geography / Common)
    function filterUnits(branch, btn) {
      document.querySelectorAll('.filter-tab-btn').forEach(b => {
        b.classList.remove('active', 'bg-white', 'dark:bg-slate-800', 'text-amber-600', 'dark:text-amber-400', 'shadow-xs');
        b.classList.add('text-slate-600', 'dark:text-slate-400');
      });
      btn.classList.add('active', 'bg-white', 'dark:bg-slate-800', 'text-amber-600', 'dark:text-amber-400', 'shadow-xs');
      btn.classList.remove('text-slate-600', 'dark:text-slate-400');

      const cards = document.querySelectorAll('.unit-card');
      cards.forEach(card => {
        const cardBranch = card.getAttribute('data-branch');
        if (branch === 'all' || cardBranch === branch) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Filter sidebar groups
      const sideGroups = document.querySelectorAll('.chapter-nav-group');
      sideGroups.forEach(grp => {
        const grpBranch = grp.getAttribute('data-branch');
        if (branch === 'all' || grpBranch === branch) {
          grp.classList.remove('hidden');
        } else {
          grp.classList.add('hidden');
        }
      });
    }

    // 3. Search Units
    function searchUnits() {
      const keyword = document.getElementById('unitSearchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.unit-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const text = card.innerText.toLowerCase();
        if (title.includes(keyword) || text.includes(keyword)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // 4. Modal Tra cứu Niên biểu
    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }
    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    // 5. Check Unit Mini Quiz
    function checkUnitQuiz(unitId, selectedIdx, correctIdx, explEncoded) {
      const fb = document.getElementById('feedback-' + unitId);
      const expl = decodeURIComponent(explEncoded);
      fb.classList.remove('hidden');
      
      if (selectedIdx === correctIdx) {
        fb.className = 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed transition-all bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200';
        fb.innerHTML = '<strong><i class=\"fa-solid fa-check-circle text-emerald-600 mr-1\"></i> Chính xác!</strong> ' + expl;
      } else {
        fb.className = 'mt-2.5 p-2.5 rounded-xl text-xs leading-relaxed transition-all bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200';
        fb.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Chưa chính xác.</strong> Đáp án đúng là <strong>' + ['A','B','C','D'][correctIdx] + '</strong>. ' + expl;
      }
    }

    // 6. Trạng Nguyên Exam Logic (60:00)
    let examTime = 60 * 60;
    let examInterval = null;
    let examActive = false;

    function startExam() {
      document.getElementById('examIntro').classList.add('hidden');
      document.getElementById('examBody').classList.remove('hidden');
      examActive = true;
      examInterval = setInterval(() => {
        if (examTime <= 0) {
          clearInterval(examInterval);
          alert('Đã hết thời gian 60 phút! Hệ thống đang tự động nộp bài.');
          submitExam();
          return;
        }
        examTime--;
        const m = Math.floor(examTime / 60);
        const s = examTime % 60;
        document.getElementById('examTimer').innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function updateAnsweredCount() {
      const total = 30;
      let count = 0;
      for (let i = 0; i < total; i++) {
        if (document.querySelector('input[name=\"exam_ans_' + i + '\"]:checked')) {
          count++;
        }
      }
      document.getElementById('answeredCount').innerText = 'Đã làm: ' + count + '/' + total + ' câu';
    }

    function submitExam() {
      if (!examActive) return;
      examActive = false;
      clearInterval(examInterval);

      const blocks = document.querySelectorAll('.exam-q-block');
      let score = 0;
      const total = blocks.length;

      blocks.forEach((block, idx) => {
        const correct = parseInt(block.getAttribute('data-ans'), 10);
        const selected = document.querySelector('input[name=\"exam_ans_' + idx + '\"]:checked');
        const expl = document.getElementById('exam_expl_' + idx);
        if (expl) expl.classList.remove('hidden');

        if (selected && parseInt(selected.value, 10) === correct) {
          score++;
          block.classList.add('border-emerald-500');
        } else {
          block.classList.add('border-rose-500');
        }
      });

      const final10 = ((score / total) * 10).toFixed(1);
      document.getElementById('examBody').classList.add('hidden');
      const res = document.getElementById('examResult');
      res.classList.remove('hidden');
      document.getElementById('resultScore').innerText = final10 + ' / 10 (' + score + '/' + total + ' câu đúng)';

      if (score >= 27) {
        document.getElementById('resultRankBadge').innerText = '🥇';
        document.getElementById('resultTitle').innerText = 'TRẠNG NGUYÊN XUẤT SẮC';
        document.getElementById('resultDesc').innerText = 'Năng lực xuất sắc! Bạn nắm vững toàn diện lịch sử và địa lí 9.';
      } else if (score >= 22) {
        document.getElementById('resultRankBadge').innerText = '🥈';
        document.getElementById('resultTitle').innerText = 'BẢNG NHÃN – GIỎI';
        document.getElementById('resultDesc').innerText = 'Kết quả rất ấn tượng! Bạn đã sẵn sàng tự tin bước vào kì thi vào lớp 10.';
      } else if (score >= 15) {
        document.getElementById('resultRankBadge').innerText = '🥉';
        document.getElementById('resultTitle').innerText = 'THÁM HOA – ĐẠT YÊU CẦU';
        document.getElementById('resultDesc').innerText = 'Bạn đã đạt chuẩn kiến thức cốt lõi. Hãy ôn tập thêm các câu chưa đúng nhé!';
      } else {
        document.getElementById('resultRankBadge').innerText = '📖';
        document.getElementById('resultTitle').innerText = 'CẦN NỖ LỰC HỌC TẬP THÊM';
        document.getElementById('resultDesc').innerText = 'Hãy đọc lại các bài học và làm lại bài thi để củng cố nền tảng vững vàng.';
      }

      document.getElementById('exam-section').scrollIntoView({ behavior: 'smooth' });
    }

    function retakeExam() {
      clearInterval(examInterval);
      examTime = 60 * 60;
      examActive = false;
      document.getElementById('examTimer').innerText = '60:00';
      document.getElementById('examIntro').classList.remove('hidden');
      document.getElementById('examBody').classList.add('hidden');
      document.getElementById('examResult').classList.add('hidden');

      const blocks = document.querySelectorAll('.exam-q-block');
      blocks.forEach((block, idx) => {
        block.classList.remove('border-emerald-500', 'border-rose-500');
        const radios = document.querySelectorAll('input[name=\"exam_ans_' + idx + '\"]');
        radios.forEach(r => r.checked = false);
        const expl = document.getElementById('exam_expl_' + idx);
        if (expl) expl.classList.add('hidden');
      });
      document.getElementById('answeredCount').innerText = 'Đã làm: 0/30 câu';
    }
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_9.html', fullPageHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/history_geography_9.html', fullPageHtml, 'utf8');

console.log('Successfully updated courses/lsdl_9.html and courses/history_geography_9.html to exactly match grade 8 layout! File size:', (fullPageHtml.length / 1024).toFixed(2), 'KB');
