const fs = require('fs');

let content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const target = '<!-- Course Card: Tiếng Anh 7 -->';

const toanCard = `<!-- Course Card: Toán 7 -->
                    <div onclick="window.location.href='courses/toan_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-square-root-variable"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Toán 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức với cuộc sống: 10 Chương, 37 Bài học toàn diện. Tích hợp 37 Sơ đồ tư duy Vector SVG, Sổ tay 20 công thức & 8 quy trình mẫu, Sơ đồ tập số R & Hình khối 3D, Đấu trường Trạng Nguyên 40 câu trắc nghiệm.">
                                    Kết nối tri thức (GDPT 2018): 10 Chương, 37 Bài học toàn diện. 37 Sơ đồ Vector SVG, Sổ tay 20 công thức &amp; 8 quy trình mẫu, Đấu trường Trạng Nguyên 40 câu.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-shapes text-[10px]"></i> 10 Chương &bull; 37 Bài
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                                        <i class="fa-solid fa-diagram-project text-[10px]"></i> 37 Sơ đồ SVG
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (40 câu)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/toan_7.html"
                                    class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (content.includes(target)) {
  content = content.replace(target, toanCard + target);
  fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', content, 'utf8');
  console.log('Successfully inserted Toán 7 course card into index.html');
} else {
  console.error('Target not found in index.html');
}
