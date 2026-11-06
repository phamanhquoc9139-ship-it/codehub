const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

if (html.includes('courses/toan_9.html')) {
  console.log('index.html already contains toan_9.html');
  process.exit(0);
}

const target = '<!-- Course Card: Giáo Dục Thể Chất 9 -->';
if (!html.includes(target)) {
  console.error('Target comment for insertion not found in index.html!');
  process.exit(1);
}

const toan9Card = `<!-- Course Card: Toán 9 -->
                    <div onclick="window.location.href='courses/toan_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-square-root-variable"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Toán 9</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="SGK Toán 9 (Kết nối tri thức với cuộc sống - Trọn bộ Tập 1 &amp; Tập 2): 10 Chương, 32 Bài học &amp; Hoạt động thực hành trải nghiệm. Tích hợp KaTeX hiển thị công thức sắc nét, 14+ Bản vẽ Vector SVG hình học trực quan, Sổ tay 20 công thức &amp; Đấu trường Trạng Nguyên Toán 9 (60p).">
                                    SGK Toán 9 (Kết nối tri thức - Trọn bộ 2 tập): 10 Chương, 32 Bài học &amp; Thực hành trải nghiệm. Tích hợp KaTeX công thức sắc nét, 14+ Sơ đồ hình học Vector SVG, Sổ tay 20 công thức cốt lõi &amp; Đấu trường Trạng Nguyên (60p).
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-200/50 dark:border-blue-800/40">
                                        <i class="fa-solid fa-book-open text-[10px]"></i> 10 Chương • 32 Bài
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/40">
                                        <i class="fa-solid fa-chart-line text-[10px]"></i> 14+ SVG Trực Quan
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-200/50 dark:border-purple-800/40">
                                        <i class="fa-solid fa-calculator text-[10px]"></i> KaTeX Math
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200/50 dark:border-amber-800/40">
                                        <i class="fa-solid fa-crown text-[10px]"></i> Trạng Nguyên (25 câu)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-6 flex items-center justify-between text-sm text-blue-600 dark:text-blue-400 font-medium">
                                <span>Khám phá ngay</span>
                                <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition duration-200"></i>
                            </div>
                        </div>
                    </div>

                    `;

html = html.replace(target, toan9Card + target);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully inserted Toan 9 card into index.html!');
