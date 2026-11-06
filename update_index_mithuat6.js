const fs = require('fs');

let indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// 1. Update counters
indexHtml = indexHtml.replace('Tất cả (219)', 'Tất cả (220)');
indexHtml = indexHtml.replace('THCS 6-9 (14)', 'THCS 6-9 (15)');
indexHtml = indexHtml.replaceAll('219 / 219', '220 / 220');

// 2. Prepare Mĩ Thuật 6 course card
const mithuatCard = `                    <!-- Course Card: Mĩ Thuật 6 -->
                    <div onclick="window.location.href='courses/mithuat_6.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-palette"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Mĩ Thuật 6</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Mĩ Thuật 6 (GDPT 2018 - Kết nối tri thức): 8 chủ đề, 16 bài học (Hội họa, Điêu khắc, Đồ họa tranh in, Mĩ thuật tiền sử & cổ đại). Tích hợp Bánh xe màu, Thiết kế áo dài di sản & Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 8 chủ đề, 16 bài học chuẩn mực (Tranh Bùi Xuân Phái, in độc bản, giấy bồi, di sản Tràng An &amp; Đông Sơn). Tích hợp Bánh xe màu, Thiết kế áo dài Đông Sơn &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                                        <i class="fa-solid fa-award"></i> Trạng Nguyên Mĩ Thuật (60:00)
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-200 dark:border-pink-800">
                                        <i class="fa-solid fa-vest"></i> Áo Dài Di Sản Đông Sơn
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/mithuat_6.html"
                                    class="text-purple-600 dark:text-purple-400 hover:text-purple-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

`;

// 3. Insert card between Lịch Sử và Địa Lí 6 and Tin học 6
const targetMarker = '<!-- Course Card: Tin học 6 -->';
if (indexHtml.includes(targetMarker)) {
  indexHtml = indexHtml.replace(targetMarker, mithuatCard + targetMarker);
  console.log('Successfully inserted Mĩ Thuật 6 card before Tin học 6');
} else {
  console.error('Target marker not found!');
}

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', indexHtml, 'utf8');
console.log('Successfully updated index.html for mithuat_6');
