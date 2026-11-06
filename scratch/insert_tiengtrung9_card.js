const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

if (html.includes('courses/tiengtrung_9.html')) {
  console.log('index.html already contains tiengtrung_9.html');
  process.exit(0);
}

const target = '<!-- Course Card: Chuyên Đề Hóa Học 10 -->';
if (!html.includes(target)) {
  console.error('Target comment for insertion not found in index.html!');
  process.exit(1);
}

const tiengTrungCard = `<!-- Course Card: Tiếng Trung Quốc 9 -->
                    <div onclick="window.location.href='courses/tiengtrung_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/70 flex items-center justify-center text-red-600 dark:text-red-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-dragon"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Trung Quốc 9</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="SGK Ngoại ngữ 1 - Tiếng Trung Quốc 9 (GDPT 2018): 4 Chủ điểm (社团, 文化遗产, 世界, 未来), 12 Bài học &amp; 4 Bài ôn tập. Tích hợp Web Speech Audio phát âm chuẩn Bắc Kinh (zh-CN), 12 Bản vẽ Vector SVG độc quyền, Sổ tay 14 điểm ngữ pháp &amp; Phân biệt 的、地、得, Đấu trường Trạng Nguyên (60p).">
                                    SGK Ngoại ngữ 1 - Tiếng Trung Quốc 9 (GDPT 2018): 4 Chủ điểm (社团, 文化遗产, 世界, 未来), 12 Bài học &amp; 4 Bài ôn tập. Tích hợp Web Speech Audio giọng Bắc Kinh (zh-CN), 12 Bản vẽ Vector SVG, Sổ tay 14 điểm ngữ pháp &amp; Phân biệt 的、地、得, Đấu trường Trạng Nguyên (60p).
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded-md border border-red-200/50 dark:border-red-800/40">
                                        <i class="fa-solid fa-book text-[10px]"></i> 16 Bài &amp; Ôn tập
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200/50 dark:border-amber-800/40">
                                        <i class="fa-solid fa-volume-high text-[10px]"></i> Audio zh-CN
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/40">
                                        <i class="fa-solid fa-brain text-[10px]"></i> 14 Điểm Ngữ Pháp
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-200/50 dark:border-purple-800/40">
                                        <i class="fa-solid fa-crown text-[10px]"></i> Trạng Nguyên (25 câu)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-6 flex items-center justify-between text-sm text-red-600 dark:text-red-400 font-medium">
                                <span>Khám phá ngay</span>
                                <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition duration-200"></i>
                            </div>
                        </div>
                    </div>

                    `;

html = html.replace(target, tiengTrungCard + target);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully inserted Tieng Trung Quoc 9 card into index.html!');
