const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(path, 'utf8');

const target = '<!-- Course Card: Tin học 8 -->';

const tiengPhap8Card = `<!-- Course Card: Tiếng Pháp 8 -->
                    <div onclick="window.location.href='courses/tiengphap_8.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-flag"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Pháp 8</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): Unité 0 & 6 Đơn vị học (24 Leçons). Tích hợp Web Speech Audio phát âm chuẩn fr-FR, 7 Sơ đồ tư duy Vector SVG, Sổ tay 16 điểm ngữ pháp, Bảng chia động từ & Đấu trường Trạng Nguyên.">
                                    Kết nối tri thức (GDPT 2018): Unité 0 &amp; 6 Đơn vị học (24 Leçons). Tích hợp Audio bản ngữ fr-FR, 7 SVG Concept Mindmaps, Sổ tay 16 ngữ pháp, Bảng chia động từ &amp; Đấu trường Trạng Nguyên.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-flag text-[10px]"></i> 7 Unités &bull; Audio fr-FR
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                                        <i class="fa-solid fa-shapes text-[10px]"></i> 16 Điểm ngữ pháp
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengphap_8.html"
                                    class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (content.includes(target) && !content.includes('courses/tiengphap_8.html')) {
  content = content.replace(target, tiengPhap8Card + target);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully inserted Tiếng Pháp 8 card into index.html!');
} else if (content.includes('courses/tiengphap_8.html')) {
  console.log('Tiếng Pháp 8 card already exists in index.html.');
} else {
  console.log('Target "<!-- Course Card: Tin học 8 -->" not found.');
}
