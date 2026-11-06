const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(path, 'utf8');

const target = '<!-- Course Card: Ngữ Văn 7 -->';
const englishCard = `<!-- Course Card: Tiếng Anh 7 -->
                    <div onclick="window.location.href='courses/tienganh_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/60 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-language"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Anh 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Global Success (GDPT 2018): 4 Chủ điểm, 12 Units & 4 Review. Tích hợp Web Speech Audio, 12 Sơ đồ SVG, Sổ tay ma trận ngữ pháp & Đấu trường Trạng Nguyên.">
                                    Global Success (GDPT 2018): 4 Chủ điểm, 12 Units &amp; 4 Review. Tích hợp Web Speech Audio phát âm chuẩn, 12 Sơ đồ Vector SVG, Sổ tay ma trận ngữ pháp &amp; Đấu trường Trạng Nguyên.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                                        <i class="fa-solid fa-headphones text-[10px]"></i> 12 Units &bull; Audio IPA
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-diagram-project text-[10px]"></i> 12 Sơ đồ SVG
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tienganh_7.html"
                                    class="text-sky-600 hover:text-sky-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (content.includes(target) && !content.includes('courses/tienganh_7.html')) {
  content = content.replace(target, englishCard + target);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully inserted Tiếng Anh 7 card into index.html!');
} else {
  console.log('Target not found or already inserted.');
}
