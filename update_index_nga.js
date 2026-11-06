const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Insert course card before Tiếng Pháp 6
const phapMarker = '<!-- Course Card: Tiếng Pháp 6 -->';
const ngaCard = `<!-- Course Card: Tiếng Nga 6 -->
                    <div onclick="window.location.href='courses/tiengnga_6.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-flag"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Nga 6</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Tiếng Nga 6 (Русский язык 6 - GDPT 2018): 2 Tập & 5 Chủ đề gồm 16 Bài học (Уроки), phát âm chuẩn ru-RU qua Web Speech API, cẩm nang 5 kiểu ngữ điệu ИК-1 đến 5 & Trạng Nguyên 60:00.">
                                    Ngoại ngữ 1 &amp; 2 THCS (GDPT 2018): Trọn bộ 2 Tập gồm 5 Chủ đề lớn &amp; 16 Bài học (Уроки), phát âm chuẩn ru-RU qua Web Speech API, sổ tay 6 cách Kasus, động từ chuyển động &amp; Trạng Nguyên Nga Ngữ 60:00.
                                </p>
                            </div>
                            <div class="mt-6 flex items-center justify-between">
                                <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                                    16 Bài học &bull; 5 Chủ đề
                                </span>
                                <a href="courses/tiengnga_6.html" class="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 flex items-center gap-1">Vào học &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (html.includes(phapMarker) && !html.includes('courses/tiengnga_6.html')) {
  html = html.replace(phapMarker, ngaCard + phapMarker);
  console.log("Successfully inserted Tiếng Nga 6 card!");
} else {
  console.log("Card already exists or marker not found.");
}

// 2. Add aliases in SEARCH_ALIASES
const aliasMarker = "'duc': ['tieng duc', 'german', 'deutsch', 'tieng duc 6', 'duc 6', 'deutsch 6'],";
const ngaAliases = `'nga': ['tieng nga', 'russian', 'tieng nga 6', 'nga 6'],
        'tiengnga': ['tieng nga', 'russian', 'tieng nga 6', 'nga 6'],
        'russian': ['tieng nga', 'russian', 'tieng nga 6'],
        ` + aliasMarker;

if (html.includes(aliasMarker) && !html.includes("'nga': [")) {
  html = html.replace(aliasMarker, ngaAliases);
  console.log("Successfully added SEARCH_ALIASES for Russian!");
}

// 3. Update total unique courses count if present
const totalMatches = html.match(/(\d+)\s*(môn học|khóa học)/gi);
console.log("Total courses matches:", totalMatches);

fs.writeFileSync(indexPath, html, 'utf8');
console.log("Updated index.html successfully!");
