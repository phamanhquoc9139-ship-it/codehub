const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(path, 'utf8');

const target = '<!-- Course Card: Tin học 8 -->';

const tiengNhat8Card = `<!-- Course Card: Tiếng Nhật 8 -->
                    <div onclick="window.location.href='courses/tiengnhat_8.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-torii-gate"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Nhật 8</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 13 Bài học, 4 Bài ôn tập & Bài 14 tổng ôn. Tích hợp Web Speech Audio phát âm chuẩn ja-JP, 63 Chữ Hán Kanji, 13 Sơ đồ tư duy Vector SVG, Sổ tay biến đổi động từ & Đấu trường Trạng Nguyên.">
                                    Kết nối tri thức (GDPT 2018): 13 Bài học &amp; 4 Bài ôn tập, Bài 14 tổng ôn. Tích hợp Audio bản ngữ ja-JP, 63 Chữ Hán Kanji, 13 SVG Concept Mindmaps, Sổ tay động từ &amp; Đấu trường Trạng Nguyên.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-torii-gate text-[10px]"></i> 14 Bài &bull; Audio ja-JP
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-200 dark:border-pink-800">
                                        <i class="fa-solid fa-brush text-[10px]"></i> 63 Chữ Hán Kanji
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengnhat_8.html"
                                    class="text-rose-600 hover:text-rose-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (content.includes(target) && !content.includes('courses/tiengnhat_8.html')) {
  content = content.replace(target, tiengNhat8Card + target);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully inserted Tiếng Nhật 8 card into index.html!');
} else if (content.includes('courses/tiengnhat_8.html')) {
  console.log('Tiếng Nhật 8 card already exists in index.html.');
} else {
  console.log('Target "<!-- Course Card: Tin học 8 -->" not found.');
}
