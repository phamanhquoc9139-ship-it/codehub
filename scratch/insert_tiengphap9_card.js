const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let indexHtml = fs.readFileSync(path, 'utf8');

const targetStr = `<a href="courses/tiengnhat_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const cardTiengPhap9 = `
                    <!-- Course Card: Tiếng Pháp 9 -->
                    <div onclick="window.location.href='courses/tiengphap_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-flag"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Pháp 9</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="SGK Tiếng Pháp 9 (Ngoại ngữ THCS - GDPT 2018): Unité 0 đến Unité 6 &amp; các phụ lục. Tích hợp Web Speech Audio phát âm giọng Pháp (fr-FR), 7 Sơ đồ Vector SVG, Sổ tay 13 chuyên đề ngữ pháp &amp; Đấu trường Trạng Nguyên (60p).">
                                    SGK Tiếng Pháp 9 (Ngoại ngữ THCS - GDPT 2018): Unité 0 đến Unité 6 &amp; phụ lục. Tích hợp Web Speech Audio phát âm giọng Pháp (fr-FR), 7 Sơ đồ Vector SVG, Sổ tay 13 chuyên đề ngữ pháp &amp; Đấu trường Trạng Nguyên (60p).
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-book text-[10px]"></i> Unité 0 - 6 &bull; Audio fr-FR
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-sitemap text-[10px]"></i> 7 Sơ đồ SVG
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-crown text-[10px]"></i> Trạng Nguyên (60p)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengphap_9.html" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!indexHtml.includes(targetStr)) {
  console.error('Target string for tiengnhat_9 not found in index.html!');
  process.exit(1);
}

indexHtml = indexHtml.replace(targetStr, targetStr + '\n' + cardTiengPhap9);
fs.writeFileSync(path, indexHtml, 'utf8');
console.log('Successfully inserted Tiếng Pháp 9 card into index.html');
