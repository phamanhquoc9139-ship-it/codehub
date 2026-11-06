const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(path, 'utf8');

const target = '<!-- Course Card: Ngữ Văn 7 -->';
const frenchCard = `<!-- Course Card: Tiếng Pháp 7 -->
                    <div onclick="window.location.href='courses/tiengphap_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-700 dark:text-blue-300 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-flag"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Pháp 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): Unité 0 & 6 Đơn vị bài học (24 Leçons). Tích hợp Audio bản ngữ fr-FR, Sổ tay chia động từ Futur simple & Imparfait, 6 Dự án sáng tạo & Đấu trường Le Lauréat.">
                                    Kết nối tri thức (GDPT 2018): Unité 0 &amp; 6 Đơn vị (24 Leçons). Tích hợp Audio bản ngữ fr-FR, Sổ tay chia động từ Futur simple &amp; Imparfait, 6 Dự án sáng tạo &amp; Đấu trường Le Lauréat.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-graduation-cap text-[10px]"></i> 7 Unités &bull; Audio fr-FR
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                                        <i class="fa-solid fa-book text-[10px]"></i> Futur &amp; Imparfait
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Le Lauréat (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengphap_7.html"
                                    class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (content.includes(target) && !content.includes('courses/tiengphap_7.html')) {
  content = content.replace(target, frenchCard + target);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully inserted Tiếng Pháp 7 card into index.html!');
} else {
  console.log('Target not found or already inserted.');
}
