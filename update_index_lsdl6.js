const fs = require('fs');

let indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// 1. Update counters
indexHtml = indexHtml.replace('Tất cả (218)', 'Tất cả (219)');
indexHtml = indexHtml.replace('THCS 6-9 (13)', 'THCS 6-9 (14)');
indexHtml = indexHtml.replaceAll('218 / 218', '219 / 219');

// 2. Prepare course card
const lsdlCard = `                    <!-- Course Card: Lịch Sử và Địa Lí 6 -->
                    <div onclick="window.location.href='courses/lsdl_6.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-earth-asia"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Lịch Sử và Địa Lí 6</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Lịch Sử và Địa Lí 6 (GDPT 2018 - Kết nối tri thức): 20 bài Lịch sử (5 chương), 31 bài Địa lí (7 chương), Bảng niên đại 12 mốc, 8 quy tắc công thức Địa lí, Sa bàn Bạch Đằng 938 & Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 20 bài Lịch sử (Văn Lang, Âu Lạc, Bạch Đằng 938), 31 bài Địa lí (Bản đồ, Trái Đất, Khí quyển, Thủy quyển). Tích hợp Sa bàn Bạch Đằng 938, Múi giờ UTC &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-award"></i> Trạng Nguyên Sử – Địa (60:00)
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-compass"></i> La Bàn &amp; Múi Giờ UTC
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/lsdl_6.html"
                                    class="text-amber-600 dark:text-amber-400 hover:text-amber-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

`;

// 3. Insert card between Khoa Học Tự Nhiên 6 and Tin học 6
const targetMarker = '<!-- Course Card: Tin học 6 -->';
if (indexHtml.includes(targetMarker)) {
  indexHtml = indexHtml.replace(targetMarker, lsdlCard + targetMarker);
  console.log('Successfully inserted Lịch Sử và Địa Lí 6 card before Tin học 6');
} else {
  console.error('Target marker not found!');
}

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', indexHtml, 'utf8');
console.log('Successfully updated index.html');
