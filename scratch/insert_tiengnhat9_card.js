const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let indexHtml = fs.readFileSync(path, 'utf8');

const targetStr = `<a href="courses/tienganh_9.html" class="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const cardTiengNhat9 = `
                    <!-- Course Card: Tiếng Nhật 9 -->
                    <div onclick="window.location.href='courses/tiengnhat_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-torii-gate"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Nhật 9</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Sách giáo khoa Tiếng Nhật 9 (Ngoại ngữ 1 - GDPT 2018): 11 Bài chủ đề, 4 Ôn tập, 2 Tổng kết THCS. 18 Mẫu câu ngữ pháp cốt lõi, Bảng 57 Kanji, Web Speech Audio giọng Tokyo và Đấu trường Trạng Nguyên 60:00.">
                                    SGK Tiếng Nhật 9 (Ngoại ngữ 1 - GDPT 2018): 11 Bài chủ đề, 4 Ôn tập, 2 Tổng kết. Tích hợp Web Speech Audio giọng Tokyo (ja-JP), 17 Sơ đồ Vector SVG, Bảng 57 Kanji, Sổ tay 18 Mẫu câu &amp; Đấu trường Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-language text-[10px]"></i> 11 Bài &bull; 57 Kanji
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-sitemap text-[10px]"></i> 17 Sơ đồ SVG
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-crown text-[10px]"></i> Trạng Nguyên (60p)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengnhat_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!indexHtml.includes(targetStr)) {
  console.error('Target string not found in index.html!');
  process.exit(1);
}

indexHtml = indexHtml.replace(targetStr, targetStr + '\n' + cardTiengNhat9);
fs.writeFileSync(path, indexHtml, 'utf8');
console.log('Successfully inserted Tiếng Nhật 9 card into index.html');
