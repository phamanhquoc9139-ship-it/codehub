const fs = require('fs');
const { getCards } = require('./parse_helper.js');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

const newCardHtml = `<!-- Course Card: Giáo Dục Công Dân 6 -->
                    <div onclick="window.location.href='courses/gdcd_6.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-scale-balanced"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Giáo Dục Công Dân 6</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Giáo Dục Công Dân 6 (GDPT 2018 - Kết nối tri thức): 12 bài học Đạo đức & Pháp luật. Tích hợp giả lập Bàn phím số cứu hộ Hotline 111-115, Sổ tay quyền trẻ em và Hội thi Trạng Nguyên 25 câu.">
                                    Kết nối tri thức (GDPT 2018): 12 bài học đạo đức &amp; pháp luật (Tự lập, Yêu thương, Tôn trọng sự thật, Hotline 111-115, 4 nhóm quyền trẻ em). Tích hợp Bàn phím số cứu hộ &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-award"></i> Trạng Nguyên GDCD 6 (60:00)
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-phone-volume"></i> Hotline Cứu Hộ 111-115
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/gdcd_6.html"
                                    class="text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

// Insert the new card if not already there
if (!html.includes('Giáo Dục Công Dân 6')) {
    const targetTag = '<!-- Course Card: Tin Học 6 -->';
    if (html.includes(targetTag)) {
        html = html.replace(targetTag, newCardHtml + '\n\n                    ' + targetTag);
        console.log('Inserted GDCD 6 card before Tin Học 6 in index.html');
    } else {
        const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
        html = html.replace(gridStartTag, gridStartTag + '\n' + newCardHtml);
        console.log('Inserted GDCD 6 card at start of courses-grid');
    }
    fs.writeFileSync(indexPath, html, 'utf8');
}

// Now re-read and parse all cards
const cards = getCards();
console.log('Total cards extracted:', cards.length);

// Sort cards
cards.sort((a, b) => {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  }
  return a.cleanSubject.localeCompare(b.cleanSubject, 'vi', { sensitivity: 'base' });
});

// Construct sorted grid HTML
let sortedGridHtml = '\n';
let currentGroup = null;

cards.forEach(c => {
  if (c.groupOrder !== currentGroup) {
    currentGroup = c.groupOrder;
    const groupComment = currentGroup <= 12 ? `<!-- ==================== KHỐI LỚP ${currentGroup} ==================== -->` :
                         currentGroup === 70 ? `<!-- ==================== LẬP TRÌNH NỀN TẢNG ==================== -->` :
                         currentGroup === 80 ? `<!-- ==================== CÔNG CỤ AI & TRỢ LÝ HỌC TẬP ==================== -->` :
                         currentGroup === 90 ? `<!-- ==================== LUYỆN THI HSG & OLYMPIC ==================== -->` :
                         `<!-- ==================== KỸ NĂNG & NĂNG KHIẾU ==================== -->`;
    sortedGridHtml += `                    ${groupComment}\n`;
  }
  sortedGridHtml += `                    ${c.html}\n\n`;
});

// Find grid boundaries in index.html
const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
const gridStartIndex = html.indexOf(gridStartTag);
const gridEndIndex = html.indexOf('<div id="no-courses-found"');

if (gridStartIndex === -1 || gridEndIndex === -1) {
  console.error("Could not find grid boundaries in index.html");
  process.exit(1);
}

const beforeGrid = html.substring(0, gridStartIndex + gridStartTag.length);
const afterGrid = html.substring(gridEndIndex);

let updatedHtml = beforeGrid + sortedGridHtml + '                </div>\n\n                ' + afterGrid;

// Update filter buttons
updatedHtml = updatedHtml.replace(/id="btn-filter-all"[^>]*>Tất cả \(\d+\)<\/button>/, 'id="btn-filter-all" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white text-blue-700 shadow-sm transition">Tất cả (' + cards.length + ')</button>');
updatedHtml = updatedHtml.replace(/id="btn-filter-thcs"[^>]*>THCS 6-9 \(\d+\)<\/button>/, 'id="btn-filter-thcs" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">THCS 6-9 (10)</button>');
updatedHtml = updatedHtml.replace(/<span id="filter-result-badge"[^>]*>\d+ \/ \d+<\/span>/, '<span id="filter-result-badge" class="px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur text-blue-100 font-medium">' + cards.length + ' / ' + cards.length + '</span>');

fs.writeFileSync(indexPath, updatedHtml, 'utf8');
console.log(`Successfully updated ${indexPath} with ${cards.length} courses in ASCENDING ORDER!`);
