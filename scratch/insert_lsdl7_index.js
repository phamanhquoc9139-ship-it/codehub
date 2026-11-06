const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let html = fs.readFileSync(path, 'utf8');

if (html.includes('courses/lichsu_diali_7.html')) {
  console.log('courses/lichsu_diali_7.html already present in index.html');
  process.exit(0);
}

const cardHtml = `
                    <!-- Course Card: Lịch Sử và Địa Lí 7 -->
                    <div onclick="window.location.href='courses/lichsu_diali_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-landmark-dome"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Lịch Sử và Địa Lí 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Lịch Sử và Địa Lí 7 (GDPT 2018 - Kết nối tri thức): 39 bài học & chủ đề toàn diện (Tây Âu, Trung Quốc, Ấn Độ, Đông Nam Á, Đại Việt từ thế kỉ X đến XVI; 5 Châu lục; 2 Chủ đề chung). Tích hợp Niên biểu & Atlas số, Sổ tay thuật ngữ và Đấu trường Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 18 bài Lịch sử (Tây Âu, Đông Nam Á, Đại Việt qua các triều đại), 19 bài Địa lí (Châu Âu, Á, Phi, Mỹ, Đại Dương, Nam Cực) và 2 Chủ đề chung. Niên biểu, Atlas số &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-layer-group text-[10px]"></i> 39 Bài &bull; 2 Mạch
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-earth-americas text-[10px]"></i> Niên biểu &amp; Atlas
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/60 px-2 py-0.5 rounded-full border border-yellow-200 dark:border-yellow-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/lichsu_diali_7.html"
                                    class="text-amber-600 hover:text-amber-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

const target = '<!-- Course Card: Khoa Học Tự Nhiên 7 -->';
if (html.includes(target)) {
  html = html.replace(target, cardHtml + '\n                    ' + target);
  fs.writeFileSync(path, html, 'utf8');
  console.log('Successfully inserted Lịch Sử và Địa Lí 7 card into index.html');
} else {
  console.log('Target marker not found!');
}
