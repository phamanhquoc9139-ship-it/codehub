// build_trongcayanqua9_page.js - Trình tạo trang học tập Công nghệ 9 Mô đun Trồng cây ăn quả

const fs = require('fs');
const path = require('path');

const { trongCayLessons } = require('./trongcayanqua9_data.js');
const trongCayTerms = require('./trongcayanqua9_terms.js');
const trongCayDiagrams = require('./trongcayanqua9_diagrams.js');
const { orchardCalculatorWidget } = require('./trongcayanqua9_calculator.js');
const { trongCayExamQuestions } = require('./trongcayanqua9_exam.js');

function generateHtml(titleLang = 'vi') {
  const isEn = titleLang === 'en';
  const pageTitle = isEn
    ? "Grade 9 Technology: Fruit Tree Cultivation Module | KNTT System"
    : "Công Nghệ 9 — Mô đun: Trồng Cây Ăn Quả | Hệ Thống Kết Nối Tri Thức";

  const bannerTitle = isEn
    ? "TECHNOLOGY 9 — FRUIT TREE CULTIVATION"
    : "CÔNG NGHỆ 9 — TRẢI NGHIỆM NGHỀ NGHIỆP";
  
  const bannerSub = isEn
    ? "Module: Fruit Tree Cultivation • 7 Lessons & 1 Comprehensive Project according to KNTT textbook"
    : "Mô đun: Trồng Cây Ăn Quả • 7 Bài học & 1 Dự án lớn toàn diện chuẩn SGK Kết nối tri thức";

  // Build Table of Contents list for sidebar
  let tocHtml = `
    <div class="mb-4">
      <div class="text-[11px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg mb-1.5 flex items-center justify-between">
        <span>Danh mục bài học</span>
        <span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200">8 Bài &amp; Dự án</span>
      </div>
      <ul class="space-y-0.5 text-xs">
  `;

  trongCayLessons.forEach(l => {
    tocHtml += `
      <li>
        <a href="#${l.id}" class="toc-link block px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800 transition flex items-center justify-between group">
          <span class="truncate font-medium">${l.number}: ${l.title}</span>
          <span class="text-[10px] text-gray-400 dark:text-gray-500 font-normal shrink-0 ml-1">${l.duration}</span>
        </a>
      </li>
    `;
  });
  tocHtml += `
      <li>
        <a href="#quick-review-table" class="toc-link block px-3 py-1.5 rounded-lg text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition font-bold">
          <i class="fa-solid fa-table-list mr-1"></i> Bảng Ôn Tập Nhanh 5 Cây
        </a>
      </li>
      <li>
        <a href="#safety-guidelines" class="toc-link block px-3 py-1.5 rounded-lg text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800 transition font-bold">
          <i class="fa-solid fa-shield-halved mr-1"></i> An Toàn &amp; 4 Đúng BVTV
        </a>
      </li>
    </ul></div>
  `;

  // Build main content for all 8 lessons
  let mainContentHtml = '<div class="space-y-8">';
  trongCayLessons.forEach(l => {
    mainContentHtml += `
      <article id="${l.id}" class="lesson-card p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-emerald-100 dark:border-slate-700 shadow-sm transition hover:shadow-md">
        <!-- Lesson Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-slate-700">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              ${l.number}
            </span>
            <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white mt-1">
              ${l.title}
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              ${l.sub}
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
              <i class="fa-regular fa-clock"></i> ${l.duration}
            </span>
          </div>
        </div>

        <!-- Mục tiêu cần đạt -->
        <div class="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-100 dark:border-emerald-900/40">
          <h4 class="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-bullseye text-emerald-600"></i> Mục tiêu trọng tâm bài học
          </h4>
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${l.objectives}</p>
        </div>

        <!-- Dẫn nhập cảm xúc -->
        <div class="mb-4 text-xs sm:text-sm italic text-gray-600 dark:text-gray-400 pl-3 border-l-2 border-emerald-500">
          "${l.quote}"
        </div>
    `;

    // Embed SVG diagram if available
    if (l.diagramKey && trongCayDiagrams[l.diagramKey]) {
      mainContentHtml += trongCayDiagrams[l.diagramKey];
    }

    // If Lesson 8, embed interactive Project Economics Calculator Widget!
    if (l.id === 'bai-8') {
      mainContentHtml += orchardCalculatorWidget;
    }

    // Embed theoretical sections
    mainContentHtml += `<div class="space-y-4 mb-6">`;
    l.sections.forEach(sec => {
      mainContentHtml += `
        <div class="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-700/80">
          <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0">
              <i class="fa-solid fa-book-open"></i>
            </span>
            ${sec.title}
          </h4>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            ${sec.content}
          </div>
        </div>
      `;
    });
    mainContentHtml += `</div>`;

    // Practice list
    mainContentHtml += `
      <div class="mb-6 p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60">
        <h4 class="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-seedling text-amber-600"></i> Yêu cầu Luyện tập &amp; Thực hành canh tác
        </h4>
        <ul class="space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
    `;
    l.practiceList.forEach(pr => {
      mainContentHtml += `
        <li class="flex items-start gap-2">
          <i class="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0 text-xs"></i>
          <span>${pr}</span>
        </li>
      `;
    });
    mainContentHtml += `</ul></div>`;

    // 4 Quizzes per lesson
    mainContentHtml += `
      <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/40 dark:bg-slate-900/60 border border-emerald-200/70 dark:border-slate-700">
        <h4 class="text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider mb-3 flex items-center justify-between">
          <span class="flex items-center gap-1.5">
            <i class="fa-solid fa-clipboard-question text-emerald-600"></i> Câu hỏi củng cố nhanh (${l.quizzes.length} câu)
          </span>
          <span class="text-[10px] text-gray-500 font-normal">Tự chấm điểm ngay</span>
        </h4>
        <div class="space-y-4">
    `;

    l.quizzes.forEach((quiz, qIdx) => {
      const quizId = `${l.id}-q${qIdx}`;
      mainContentHtml += `
        <div class="quiz-item p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-200/80 dark:border-slate-700 text-xs" data-correct="${quiz.correct}">
          <p class="font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-1.5">
            <span class="text-emerald-600 font-black">C${qIdx + 1}.</span>
            <span>${quiz.question}</span>
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
      `;

      quiz.options.forEach((opt, oIdx) => {
        mainContentHtml += `
          <label class="quiz-option-label flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-emerald-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
            <input type="radio" name="${quizId}" value="${oIdx}" onchange="checkQuizAnswer(this, '${quizId}')" class="text-emerald-600 focus:ring-emerald-500">
            <span class="text-gray-700 dark:text-gray-300 font-medium">${opt}</span>
          </label>
        `;
      });

      mainContentHtml += `
          </div>
          <div id="${quizId}-fb" class="hidden p-2.5 rounded-lg text-xs mt-2">
            <span class="quiz-fb-text block font-semibold mb-0.5"></span>
            <p class="text-gray-600 dark:text-gray-400"><i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> <strong>Giải thích:</strong> ${quiz.explain}</p>
          </div>
        </div>
      `;
    });

    mainContentHtml += `</div></div></article>`;
  });

  mainContentHtml += '</div>';

  // Build Quick Review Table for 5 fruit trees
  const quickReviewTableHtml = `
    <div id="quick-review-table" class="my-8 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 shadow-sm">
      <div class="flex items-center gap-2.5 mb-3 pb-2 border-b border-gray-100 dark:border-slate-700">
        <span class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
          <i class="fa-solid fa-table-list"></i>
        </span>
        <div>
          <h3 class="text-base font-bold text-gray-900 dark:text-white">BẢNG ÔN TẬP NHANH 5 LOẠI CÂY ĂN QUẢ TRỌNG TÂM</h3>
          <p class="text-xs text-gray-500">So sánh điểm ngoại cảnh và kĩ thuật then chốt</p>
        </div>
      </div>
      <div class="overflow-x-auto text-xs">
        <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 text-left">
          <thead class="bg-emerald-50 dark:bg-slate-700 text-emerald-950 dark:text-emerald-200 font-bold">
            <tr>
              <th class="p-2.5 border">Loại cây</th>
              <th class="p-2.5 border">Nhiệt độ &amp; Ngoại cảnh đặc trưng</th>
              <th class="p-2.5 border">Kĩ thuật canh tác &amp; Xử lí ra hoa</th>
              <th class="p-2.5 border">Dịch hại then chốt</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td class="p-2.5 border font-bold text-emerald-700 dark:text-emerald-400">Cây có múi (Cam, bưởi)</td>
              <td class="p-2.5 border">23–29 °C; ẩm 70–80%; đất thoát nước pH 5,5–6,4; ưa ánh sáng tán xạ 10–15k lux.</td>
              <td class="p-2.5 border">Rễ bên ăn nông 10–30 cm; bón phân theo tán; tỉa tán 3 cấp; tạo hạn tháng 11–12 kích mầm hoa.</td>
              <td class="p-2.5 border text-rose-600 dark:text-rose-400">Vàng lá Greening (rầy chổng cánh), Loét, Ghẻ lồi, Sâu vẽ bùa.</td>
            </tr>
            <tr>
              <td class="p-2.5 border font-bold text-amber-700 dark:text-amber-400">Cây nhãn</td>
              <td class="p-2.5 border">21–27 °C; ưa sáng; giống miền Bắc cần lạnh ~10 °C tháng 12–1 để phân hoá hoa; giống Nam cần đông ngắn.</td>
              <td class="p-2.5 border">Rễ tơ dưới hình chiếu tán; khoanh vỏ tháng 12 rộng 0,3–0,5 cm; hạn chế nước khi phân hoá hoa.</td>
              <td class="p-2.5 border text-rose-600 dark:text-rose-400">Bọ xít nâu (chích rụng hoa/quả), Bệnh chổi rồng (nhện lông nhung).</td>
            </tr>
            <tr>
              <td class="p-2.5 border font-bold text-yellow-700 dark:text-yellow-400">Cây xoài</td>
              <td class="p-2.5 border">24–27 °C; chịu nóng rất tốt (40–45 °C), sợ rét lạnh; ưa sáng trực tiếp; pH 5,5–7,0.</td>
              <td class="p-2.5 border">Bấm ngọn 1–1,2 m giữ thân lùn 0,6–0,8 m; xử lí Paclobutrazol + KNO3 kích hoa trái vụ; bao quả bằng túi.</td>
              <td class="p-2.5 border text-rose-600 dark:text-rose-400">Thán thư đốm đen, Ruồi đục quả, Bọ trĩ làm sần vỏ quả.</td>
            </tr>
            <tr>
              <td class="p-2.5 border font-bold text-lime-700 dark:text-lime-400">Cây sầu riêng</td>
              <td class="p-2.5 border">24–30 °C; ẩm 75–80%; cần nhiều nước nhưng bắt buộc thoát nước nhanh, không chịu ngập úng.</td>
              <td class="p-2.5 border">Đắp mô liếp cao; tán tháp nhiều tầng (cành dưới cách đất 1m); hoa nở ban đêm, thụ phấn bổ sung lúc 19h–21h.</td>
              <td class="p-2.5 border text-rose-600 dark:text-rose-400">Xì mủ thối rễ (Phytophthora), Sâu đục quả, Sâu đục thân.</td>
            </tr>
            <tr>
              <td class="p-2.5 border font-bold text-teal-700 dark:text-teal-400">Cây chuối</td>
              <td class="p-2.5 border">25–35 °C; ẩm 1200–2400 mm; cần nhiều nước; phiến lá rộng rất sợ gió quật rách gãy thân.</td>
              <td class="p-2.5 border">Rễ chùm nông; thân thật là củ ngầm; lấp đất cao hơn bầu 5 cm; cọc tre chống buồng; tỉa chồi con.</td>
              <td class="p-2.5 border text-rose-600 dark:text-rose-400">Đốm lá Sigatoka, Héo vàng Fusarium, Chùn đọt virus (BBTV).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Build Safety Guidelines Card
  const safetyCardHtml = `
    <div id="safety-guidelines" class="my-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-amber-950/40 border border-amber-200 dark:border-amber-800 shadow-sm">
      <div class="flex items-center gap-2.5 mb-3 pb-2 border-b border-amber-200 dark:border-amber-800">
        <span class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
          <i class="fa-solid fa-shield-halved"></i>
        </span>
        <div>
          <h3 class="text-base font-bold text-gray-900 dark:text-white">QUY TẮC AN TOÀN LAO ĐỘNG &amp; BẢO VỆ MÔI TRƯỜNG</h3>
          <p class="text-xs text-amber-800 dark:text-amber-300">Bốn nguyên tắc vàng (4 Đúng) trong sử dụng thuốc bảo vệ thực vật</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700">
          <strong class="text-emerald-700 dark:text-emerald-400 font-bold block mb-1">1. ĐÚNG THUỐC</strong>
          <p class="text-gray-600 dark:text-gray-300">Chỉ dùng thuốc trong danh mục được phép, đúng loại đặc trị cho đối tượng sâu/bệnh đang gây hại.</p>
        </div>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700">
          <strong class="text-blue-700 dark:text-blue-400 font-bold block mb-1">2. ĐÚNG LÚC</strong>
          <p class="text-gray-600 dark:text-gray-300">Phun khi sâu non mới nở hoặc bệnh chớm xuất hiện; tránh phun khi trời nắng gắt hoặc sắp mưa to.</p>
        </div>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700">
          <strong class="text-orange-700 dark:text-orange-400 font-bold block mb-1">3. ĐÚNG LIỀU LƯỢNG</strong>
          <p class="text-gray-600 dark:text-gray-300">Pha đúng nồng độ theo nhãn mác; không tự ý tăng liều gây kháng thuốc hoặc làm cháy lá, cháy hoa.</p>
        </div>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700">
          <strong class="text-purple-700 dark:text-purple-400 font-bold block mb-1">4. ĐÚNG CÁCH</strong>
          <p class="text-gray-600 dark:text-gray-300">Phun đều tán lá, đúng vị trí trú ẩn của sâu bệnh; mang đủ bảo hộ và tuân thủ thời gian cách li.</p>
        </div>
      </div>
      <div class="mt-3 p-3 bg-amber-100/70 dark:bg-amber-950/60 rounded-xl text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2">
        <i class="fa-solid fa-triangle-exclamation text-amber-600 mt-0.5"></i>
        <span><strong>Lưu ý quan trọng:</strong> Học sinh không tự ý pha hay phun xịt thuốc BVTV; thu gom bao bì chai lọ đúng nơi quy định, không vứt bừa bãi xuống mương nước ao hồ.</span>
      </div>
    </div>
  `;

  // Build Terms List for Modal
  let termsListHtml = '';
  trongCayTerms.forEach(t => {
    termsListHtml += `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
        <div class="flex items-center justify-between gap-2">
          <strong class="text-gray-900 dark:text-white font-bold flex items-center gap-1.5">
            <i class="fa-solid ${t.icon} text-${t.color}-500"></i> ${t.term}
          </strong>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-${t.color}-100 dark:bg-${t.color}-950/60 text-${t.color}-800 dark:text-${t.color}-300 font-semibold shrink-0">
            ${t.badge}
          </span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${t.desc}</p>
      </div>
    `;
  });

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- KaTeX for math formulas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body);"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b'
            }
          }
        }
      }
    }
  </script>
  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; }
  </style>
</head>
<body class="bg-emerald-50/20 dark:bg-slate-950 text-gray-800 dark:text-gray-200 font-sans antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-200">

  <!-- Header Sticky Navigation -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-emerald-200/80 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Left Branding -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-800 dark:text-emerald-300 transition" title="Về trang chủ">
          <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center text-lg font-bold shadow-sm shrink-0">
          <i class="fa-solid fa-tree"></i>
        </div>
        <div>
          <span class="text-[10px] uppercase font-black tracking-widest text-emerald-700 dark:text-emerald-400 block">Lớp 9 • Trải Nghiệm Nghề Nghiệp</span>
          <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white truncate">Trồng Cây Ăn Quả (KNTT)</h1>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Handbook Modal Trigger -->
        <button type="button" onclick="openModal('terms-modal')" class="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-emerald-200 dark:border-slate-700 text-xs font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 transition">
          <i class="fa-solid fa-book-bookmark text-emerald-600"></i>
          <span class="hidden sm:inline">Sổ tay</span> 12 Thuật ngữ
        </button>

        <!-- Exam Modal Trigger -->
        <button type="button" onclick="openExamModal()" class="px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition">
          <i class="fa-solid fa-trophy"></i>
          <span>Trạng Nguyên (25C)</span>
        </button>

        <!-- Dark mode toggle -->
        <button type="button" onclick="toggleDarkMode()" class="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>

        <!-- Mobile TOC toggle -->
        <button type="button" onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl bg-emerald-100 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Header Banner -->
  <section class="bg-gradient-to-b from-emerald-100/50 via-teal-50/20 to-transparent dark:from-slate-900/80 dark:to-transparent border-b border-emerald-200/50 dark:border-slate-800 py-6 sm:py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/60 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold mb-2">
            <i class="fa-solid fa-seedling"></i> SGK Kết nối tri thức với cuộc sống • GDPT 2018
          </div>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            ${bannerTitle}
          </h2>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl leading-relaxed">
            ${bannerSub}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-emerald-600 dark:text-emerald-400">7 + 1</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Bài &amp; Dự án</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-teal-600 dark:text-teal-400">8</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Sơ đồ SVG</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-amber-600 dark:text-amber-400">32</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Câu củng cố</span>
          </div>
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <span class="block text-lg font-black text-blue-600 dark:text-blue-400">R</span>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Nhóm Holland</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Layout Container: Left Sidebar TOC + Right Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- Left Sticky Sidebar: Navigation TOC -->
      <aside id="sidebar-toc" class="hidden lg:block w-72 shrink-0">
        <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar p-4 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-emerald-100 dark:border-slate-800 shadow-sm">
          <div class="text-xs font-black uppercase tracking-wider text-gray-400 mb-3 flex items-center justify-between">
            <span><i class="fa-solid fa-list-ul text-emerald-600 mr-1.5"></i> Mục lục bài học</span>
            <span class="text-[10px] font-normal text-emerald-600">8 Phần</span>
          </div>
          ${tocHtml}

          <!-- Career Holland Quick Card -->
          <div class="mt-4 p-3 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs">
            <strong class="text-emerald-800 dark:text-emerald-300 font-bold block mb-1">
              <i class="fa-solid fa-person-digging"></i> Nhóm Nghề Holland R
            </strong>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              • Thợ làm vườn &amp; nhân giống<br/>
              • Kĩ thuật viên bảo vệ thực vật<br/>
              • Quản lí trang trại cây ăn quả<br/>
              • Chăm sóc cây giống lâu năm
            </p>
          </div>
        </div>
      </aside>

      <!-- Right Main Content -->
      <main class="flex-1 min-w-0">
        ${mainContentHtml}
        ${quickReviewTableHtml}
        ${safetyCardHtml}
      </main>
    </div>
  </div>

  <!-- Mobile Drawer TOC -->
  <div id="mobile-sidebar" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden" onclick="toggleMobileSidebar()">
    <div class="fixed top-0 bottom-0 left-0 w-80 max-w-[85%] bg-white dark:bg-slate-900 p-5 overflow-y-auto custom-scrollbar shadow-2xl" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-slate-800 mb-4">
        <span class="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-tree text-emerald-600"></i> Mục lục Trồng Cây Ăn Quả
        </span>
        <button type="button" onclick="toggleMobileSidebar()" class="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${tocHtml}
    </div>
  </div>

  <!-- Modal 1: Sổ tay 12 Thuật ngữ & Quy tắc cốt lõi -->
  <div id="terms-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4" onclick="closeModal('terms-modal')">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-emerald-200 dark:border-slate-800 overflow-hidden" onclick="event.stopPropagation()">
      <div class="p-4 sm:p-5 border-b border-emerald-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-base font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Sổ Tay 12 Thuật Ngữ &amp; Quy Tắc Vàng</h3>
            <p class="text-xs text-gray-500">Mô đun Trồng Cây Ăn Quả — Công nghệ 9</p>
          </div>
        </div>
        <button type="button" onclick="closeModal('terms-modal')" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-4 sm:p-5 overflow-y-auto custom-scrollbar space-y-3">
        ${termsListHtml}
      </div>
      <div class="p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 flex justify-end">
        <button type="button" onclick="closeModal('terms-modal')" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition">
          Đóng Sổ Tay
        </button>
      </div>
    </div>
  </div>

  <!-- Modal 2: Trạng Nguyên Trồng Cây Ăn Quả (25 Câu hỏi) -->
  <div id="exam-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4" onclick="closeModal('exam-modal')">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-emerald-200 dark:border-slate-800 overflow-hidden" onclick="event.stopPropagation()">
      <div class="p-4 sm:p-5 border-b border-emerald-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold">Hội Thi Trạng Nguyên Nông Nghiệp &amp; Cây Ăn Quả 9</h3>
            <p class="text-xs text-emerald-100">Đề thi trắc nghiệm toàn diện 25 câu hỏi chuẩn SGK Kết nối tri thức</p>
          </div>
        </div>
        <button type="button" onclick="closeModal('exam-modal')" class="p-2 text-white/80 hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Exam Body -->
      <div class="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1" id="exam-container">
        <!-- Questions rendered dynamically -->
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs font-semibold text-gray-600 dark:text-gray-300" id="exam-status">
          Đã trả lời: <span id="answered-count" class="text-emerald-600 font-bold">0</span>/25 câu
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="resetExam()" class="px-3.5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 text-xs font-semibold transition">
            Làm lại từ đầu
          </button>
          <button type="button" onclick="submitExam()" id="submit-exam-btn" class="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold transition shadow-sm">
            Nộp Bài Chấm Điểm
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Theme toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Modal controls
    function openModal(id) {
      document.getElementById(id).classList.remove('hidden');
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }
    function toggleMobileSidebar() {
      document.getElementById('mobile-sidebar').classList.toggle('hidden');
    }

    // Interactive Quiz Answer Checker
    function checkQuizAnswer(radioInput, quizId) {
      const parentItem = radioInput.closest('.quiz-item');
      const correctIdx = parseInt(parentItem.dataset.correct);
      const chosenIdx = parseInt(radioInput.value);
      const fbBox = document.getElementById(quizId + '-fb');
      const fbText = fbBox.querySelector('.quiz-fb-text');

      fbBox.classList.remove('hidden', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-200', 'text-emerald-800', 'dark:text-emerald-300', 'bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-200', 'text-rose-800', 'dark:text-rose-300');

      if (chosenIdx === correctIdx) {
        fbBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border', 'border-emerald-200', 'dark:border-emerald-800', 'text-emerald-800', 'dark:text-emerald-300');
        fbText.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-600 mr-1\"></i> Chính xác! Chúc mừng bạn.';
      } else {
        fbBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border', 'border-rose-200', 'dark:border-rose-800', 'text-rose-800', 'dark:text-rose-300');
        fbText.innerHTML = '<i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Chưa chính xác. Hãy xem lại lời giải thích bên dưới nhé!';
      }
    }

    // Orchard Economic Calculator Engine (Lesson 8)
    let currentOrchardMode = 'perennial'; // 'perennial' or 'annual'

    function setOrchardMode(mode) {
      currentOrchardMode = mode;
      const btnPer = document.getElementById('calc-mode-perennial');
      const btnAnn = document.getElementById('calc-mode-annual');
      const groupB = document.getElementById('group-cost-b');
      const lblStage1 = document.getElementById('lbl-cost-stage1');
      const lblRev = document.getElementById('lbl-total-revenue');
      const lblTitle = document.getElementById('lbl-profit-title');
      const yieldUnit = document.getElementById('orchard-yield-unit');

      if (mode === 'perennial') {
        btnPer.className = 'px-2.5 py-1 rounded-lg bg-emerald-600 text-white transition';
        btnAnn.className = 'px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition';
        groupB.style.display = 'block';
        lblStage1.textContent = 'Chi phí thời kì Kiến thiết cơ bản (A₂ - Cây giống, đào hố, bón lót, cọc chống):';
        lblRev.textContent = 'Tổng nguồn thu (3 năm đầu KD):';
        lblTitle.textContent = 'LÃI THUẦN DỰ ÁN 3 NĂM ĐẦU KINH DOANH (D = C₂ − (A₂ + B₂))';
        yieldUnit.textContent = 'kg/cây/năm';
        document.getElementById('orchard-cost-a').value = 25000000;
        document.getElementById('orchard-cost-b').value = 30000000;
        document.getElementById('orchard-trees').value = 100;
        document.getElementById('orchard-yield-tree').value = 35;
        document.getElementById('orchard-price-kg').value = 25000;
      } else {
        btnAnn.className = 'px-2.5 py-1 rounded-lg bg-emerald-600 text-white transition';
        btnPer.className = 'px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition';
        groupB.style.display = 'none';
        lblStage1.textContent = 'Tổng chi phí đầu tư trong vụ (A₁ - Giống, phân bón, thuốc BVTV, tưới, thu hái):';
        lblRev.textContent = 'Tổng nguồn thu một vụ (B₁):';
        lblTitle.textContent = 'LÃI THUẦN DỰ ÁN MỘT VỤ MÙA (C₁ = B₁ − A₁)';
        yieldUnit.textContent = 'kg/khóm/vụ';
        document.getElementById('orchard-cost-a').value = 18000000;
        document.getElementById('orchard-cost-b').value = 0;
        document.getElementById('orchard-trees').value = 150;
        document.getElementById('orchard-yield-tree').value = 20;
        document.getElementById('orchard-price-kg').value = 12000;
      }
      calculateOrchardEconomics();
    }

    function calculateOrchardEconomics() {
      const costA = parseFloat(document.getElementById('orchard-cost-a').value) || 0;
      const costB = currentOrchardMode === 'perennial' ? (parseFloat(document.getElementById('orchard-cost-b').value) || 0) : 0;
      const trees = parseFloat(document.getElementById('orchard-trees').value) || 0;
      const yieldPerTree = parseFloat(document.getElementById('orchard-yield-tree').value) || 0;
      const priceKg = parseFloat(document.getElementById('orchard-price-kg').value) || 0;

      const totalCost = costA + costB;
      document.getElementById('orchard-total-cost').textContent = Math.round(totalCost).toLocaleString('vi-VN') + ' VNĐ';

      let totalRevenue = 0;
      if (currentOrchardMode === 'perennial') {
        // 3 years of commercial production
        totalRevenue = trees * yieldPerTree * 3 * priceKg;
      } else {
        // 1 season production
        totalRevenue = trees * yieldPerTree * priceKg;
      }
      document.getElementById('orchard-total-revenue').textContent = Math.round(totalRevenue).toLocaleString('vi-VN') + ' VNĐ';

      const netProfit = totalRevenue - totalCost;
      const sign = netProfit >= 0 ? '+' : '';
      const profitEl = document.getElementById('orchard-net-profit');
      profitEl.textContent = sign + Math.round(netProfit).toLocaleString('vi-VN') + ' VNĐ';
      profitEl.className = netProfit >= 0 ? 'text-2xl font-black tracking-tight text-white' : 'text-2xl font-black tracking-tight text-rose-300';

      const roi = totalCost > 0 ? (netProfit / totalCost) * 100 : 0;
      document.getElementById('orchard-roi').textContent = (roi >= 0 ? '+' : '') + roi.toFixed(1) + '%';

      const evalEl = document.getElementById('orchard-eval');
      if (roi >= 100) {
        evalEl.textContent = 'Rất hiệu quả ⭐⭐⭐';
        evalEl.className = 'text-sm font-black text-yellow-300';
      } else if (roi >= 30) {
        evalEl.textContent = 'Khá tốt ⭐⭐';
        evalEl.className = 'text-sm font-black text-emerald-200';
      } else if (roi > 0) {
        evalEl.textContent = 'Hoà vốn / Lãi nhẹ ⭐';
        evalEl.className = 'text-sm font-black text-blue-200';
      } else {
        evalEl.textContent = 'Cần tối ưu chi phí ⚠️';
        evalEl.className = 'text-sm font-black text-rose-300';
      }
    }

    // 25 Questions Trạng Nguyên Exam Engine
    const examQuestions = ${JSON.stringify(trongCayExamQuestions)};
    let userAnswers = {};

    function openExamModal() {
      renderExamQuestions();
      openModal('exam-modal');
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-container');
      let html = '<div class="space-y-5">';

      examQuestions.forEach((item, idx) => {
        html += \`
          <div class="exam-card p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs transition" id="exam-q-\${idx}">
            <div class="font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
              <span class="w-5 h-5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">\${idx + 1}</span>
              <p class="leading-relaxed">\${item.q}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        \`;

        item.options.forEach((opt, optIdx) => {
          const checked = userAnswers[idx] === optIdx ? 'checked' : '';
          html += \`
            <label class="exam-opt flex items-center gap-2 p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50/50 dark:hover:bg-slate-700/50 cursor-pointer transition">
              <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" \${checked} onchange="recordExamAnswer(\${idx}, \${optIdx})" class="text-emerald-600 focus:ring-emerald-500">
              <span class="text-gray-700 dark:text-gray-300">\${opt}</span>
            </label>
          \`;
        });

        html += \`
            </div>
            <div id="exam-fb-\${idx}" class="hidden p-3 rounded-xl mt-3 text-xs"></div>
          </div>
        \`;
      });

      html += '</div>';
      container.innerHTML = html;
      updateAnsweredCount();
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      updateAnsweredCount();
    }

    function updateAnsweredCount() {
      const count = Object.keys(userAnswers).length;
      document.getElementById('answered-count').textContent = count;
    }

    function resetExam() {
      if (confirm('Em có chắc chắn muốn làm lại bài thi từ đầu không?')) {
        userAnswers = {};
        renderExamQuestions();
      }
    }

    function submitExam() {
      const answeredCount = Object.keys(userAnswers).length;
      if (answeredCount < examQuestions.length) {
        if (!confirm(\`Em mới hoàn thành \${answeredCount}/\${examQuestions.length} câu. Em có muốn nộp bài luôn không?\`)) {
          return;
        }
      }

      let score = 0;
      examQuestions.forEach((item, idx) => {
        const userOpt = userAnswers[idx];
        const isCorrect = userOpt === item.answer;
        if (isCorrect) score++;

        const fbBox = document.getElementById(\`exam-fb-\${idx}\`);
        fbBox.classList.remove('hidden', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-200', 'text-emerald-800', 'bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-200', 'text-rose-800');

        if (isCorrect) {
          fbBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border', 'border-emerald-200', 'dark:border-emerald-800', 'text-emerald-800', 'dark:text-emerald-300');
          fbBox.innerHTML = \`<i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> <strong>Đúng!</strong> \${item.explain}\`;
        } else {
          fbBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border', 'border-rose-200', 'dark:border-rose-800', 'text-rose-800', 'dark:text-rose-300');
          const correctText = item.options[item.answer];
          fbBox.innerHTML = \`<i class="fa-solid fa-circle-xmark text-rose-600 mr-1"></i> <strong>Sai!</strong> Đáp án đúng là: <strong>\${correctText}</strong>. <br/>\${item.explain}\`;
        }
      });

      const pct = Math.round((score / examQuestions.length) * 100);
      let title = '';
      if (score >= 23) {
        title = 'Trạng Nguyên Nông Nghiệp Xuất Sắc 🏆';
      } else if (score >= 18) {
        title = 'Bảng Nhãn Trồng Cây Tài Ba 🥈';
      } else if (score >= 13) {
        title = 'Thám Hoa Làm Vườn Vững Vàng 🥉';
      } else {
        title = 'Học Đi Đôi Với Hành — Cố Lên Nhé! 📖';
      }

      alert(\`KẾT QUẢ THI TRẠNG NGUYÊN:\\n- Điểm số: \${score}/\${examQuestions.length} câu (\${pct}%)\\n- Danh hiệu: \${title}\\n\\nHãy xem lại đáp án và giải thích chi tiết trong đề thi!\`);
    }

    // Initialize calculator on load
    document.addEventListener('DOMContentLoaded', () => {
      calculateOrchardEconomics();
    });
  </script>
</body>
</html>
  `;
}

// Generate files
const outDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';
const files = [
  { p: path.join(outDir, 'congnghe_trongcayanqua_9.html'), lang: 'vi' },
  { p: path.join(outDir, 'technology_fruitcultivation_9.html'), lang: 'vi' }
];

files.forEach(f => {
  const html = generateHtml(f.lang);
  fs.writeFileSync(f.p, html, 'utf8');
  console.log(`Generated: ${f.p} (${html.length} bytes)`);
});

console.log('Build completed successfully!');
