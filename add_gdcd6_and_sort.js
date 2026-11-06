const fs = require('fs');
const { getCards } = require('./parse_helper.js');

let content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const newCard = `
                    <!-- Course Card: Giáo Dục Công Dân 6 -->
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

// Insert after Công Nghệ 6 card
const targetCard = '<!-- Course Card: Tin Học 6 -->';
if (content.includes('Giáo Dục Công Dân 6')) {
    console.log('GDCD 6 card already present in index.html');
} else {
    // We can insert inside the courses-grid directly
    const gridStart = content.indexOf('id="courses-grid"');
    const firstCardIdx = content.indexOf('<div', gridStart + 20);
    content = content.slice(0, firstCardIdx) + newCard + '\n' + content.slice(firstCardIdx);
    console.log('Inserted GDCD 6 card into courses-grid');
}

// Now extract all cards and sort them
const cards = getCards(content);
console.log('Total cards extracted:', cards.length);

cards.sort((a, b) => {
    if (a.grade !== b.grade) {
        return a.grade - b.grade;
    }
    return a.title.localeCompare(b.title, 'vi');
});

// Rebuild grid HTML
const sortedCardsHtml = '\n' + cards.map(c => '                    ' + c.html.trim()).join('\n\n') + '\n                ';

const gridRegex = /(<div[^>]*id="courses-grid"[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>|<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!--)/;

// Let's replace the grid content cleanly
const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
const gridEndMarker = '<!-- No courses found state -->';

const startPos = content.indexOf(gridStartTag);
const endPos = content.indexOf(gridEndMarker, startPos);

if (startPos !== -1 && endPos !== -1) {
    const beforeGrid = content.slice(0, startPos + gridStartTag.length);
    const afterGrid = content.slice(endPos);
    content = beforeGrid + sortedCardsHtml + afterGrid;
    console.log('Successfully sorted grid with', cards.length, 'cards');
} else {
    console.log('Could not find grid delimiters:', startPos, endPos);
}

// Update filter chips counts
content = content.replace('Tất cả (214)', 'Tất cả (215)');
content = content.replace('THCS 6-9 (9)', 'THCS 6-9 (10)');
content = content.replace('214 / 214', '215 / 215');

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', content, 'utf8');
console.log('Updated index.html successfully!');
