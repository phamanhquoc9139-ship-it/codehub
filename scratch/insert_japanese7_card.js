const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(path, 'utf8');

const target = '<!-- Course Card: Ngữ Văn 7 -->';
const japaneseCard = `<!-- Course Card: Tiếng Nhật 7 -->
                    <div onclick="window.location.href='courses/tiengnhat_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-torii-gate"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Nhật 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 13 Bài học & Bài 14 ôn tập. Tích hợp Audio phát âm chuẩn ja-JP, 40+ Chữ Hán Kanji, Sổ tay biến đổi động từ & Đấu trường Trạng Nguyên.">
                                    Kết nối tri thức (GDPT 2018): 13 Bài học &amp; 4 Bài ôn tập. Tích hợp Audio bản ngữ ja-JP, 40+ Chữ Hán Kanji, Sổ tay biến đổi động từ Vます - Vて - Vる &amp; Đấu trường Trạng Nguyên.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-torii-gate text-[10px]"></i> 13 Bài &bull; Audio ja-JP
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-200 dark:border-pink-800">
                                        <i class="fa-solid fa-brush text-[10px]"></i> 40+ Chữ Hán Kanji
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengnhat_7.html"
                                    class="text-rose-600 hover:text-rose-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (content.includes(target) && !content.includes('courses/tiengnhat_7.html')) {
  content = content.replace(target, japaneseCard + target);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully inserted Tiếng Nhật 7 card into index.html!');
} else {
  console.log('Target not found or already inserted.');
}
