const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let content = fs.readFileSync(indexPath, 'utf8');

if (content.includes('courses/tiengtrung_8.html')) {
  console.log('Tiếng Trung 8 card already exists in index.html');
  process.exit(0);
}

const targetMarker = '<!-- Course Card: Tin học 8 -->';
const cardHtml = `<!-- Course Card: Tiếng Trung 8 -->
                    <div onclick="window.location.href='courses/tiengtrung_8.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/60 flex items-center justify-center text-red-600 dark:text-red-400 text-xl font-bold group-hover:scale-105 transition font-serif">
                                    中
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Trung 8</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 4 Chủ điểm, 15 Bài học & 4 Bài Ôn tập. Tích hợp Web Speech Audio zh-CN, 12 Sơ đồ Vector SVG, Sổ tay Chiết tự Chữ Hán, Bảng 17 Ngữ pháp & Đấu trường Trạng Nguyên.">
                                    Kết nối tri thức (GDPT 2018): 4 Chủ điểm, 15 Bài học &amp; 4 Bài Ôn tập. Tích hợp Audio chuẩn zh-CN, 12 SVG Concept Mindmaps, Sổ tay Chiết tự Chữ Hán, 17 Ngữ pháp &amp; Đấu trường Trạng Nguyên.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800">
                                        <i class="fa-solid fa-volume-high text-[10px]"></i> 19 Bài &bull; Audio zh-CN
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-brush text-[10px]"></i> Chiết tự Chữ Hán
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengtrung_8.html"
                                    class="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (!content.includes(targetMarker)) {
  console.error('Marker not found:', targetMarker);
  process.exit(1);
}

content = content.replace(targetMarker, cardHtml + targetMarker);
fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully inserted Tiếng Trung 8 card into index.html');
