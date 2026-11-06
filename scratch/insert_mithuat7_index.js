const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const targetMarker = '<!-- Course Card: Hoạt Động Trải Nghiệm, Hướng Nghiệp 7 -->';
const hdtnCardEnd = content.indexOf('<!-- ==================== KHỐI LỚP 8', content.indexOf(targetMarker));

if (hdtnCardEnd === -1) {
  console.error('Marker not found in index.html');
  process.exit(1);
}

const mithuatCard = `<!-- Course Card: Mĩ Thuật 7 -->
                    <div onclick="window.location.href='courses/mithuat_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/60 flex items-center justify-center text-pink-600 dark:text-pink-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-palette"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Mĩ Thuật 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Mĩ thuật 7 (GDPT 2018 - Kết nối tri thức): 8 Chủ đề, 16 bài học và 2 chuyên đề trưng bày đánh giá; Phòng trưng bày ảo 14 kiệt tác; Sổ tay 8 nguyên lí & 7 kĩ thuật thực hành tạo hình; Đấu trường Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 8 Chủ đề, 16 bài học + 2 chuyên đề trưng bày, phòng trưng bày ảo 14 kiệt tác, sổ tay 8 nguyên lí &amp; 7 kĩ thuật tạo hình &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-200 dark:border-pink-800">
                                        <i class="fa-solid fa-shapes text-[10px]"></i> 8 Chủ đề &bull; 16 Bài
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                                        <i class="fa-solid fa-image text-[10px]"></i> Phòng Tranh Ảo (14)
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/mithuat_7.html"
                                    class="text-pink-600 hover:text-pink-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

content = content.slice(0, hdtnCardEnd) + mithuatCard + content.slice(hdtnCardEnd);
fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully inserted Mĩ Thuật 7 card into index.html!');
