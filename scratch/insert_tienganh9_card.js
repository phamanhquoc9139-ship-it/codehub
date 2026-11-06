const fs = require('fs');
const path = require('path');

const indexPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');
let content = fs.readFileSync(indexPath, 'utf8');

if (content.includes('courses/tienganh_9.html')) {
  console.log('tienganh_9.html already exists in index.html');
  process.exit(0);
}

const target = `                            <div class="mt-4 pt-2">
                                <a href="courses/nguvan_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const tienganh9Card = `                            <div class="mt-4 pt-2">
                                <a href="courses/nguvan_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <!-- Course Card: Tiếng Anh 9 -->
                    <div onclick="window.location.href='courses/tienganh_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/60 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-language"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Anh 9</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Global Success (GDPT 2018): 4 Chủ điểm, 12 Units &amp; 4 Review. Tích hợp Web Speech Audio phát âm chuẩn US, 16 Sơ đồ Vector SVG, Sổ tay tra từ vựng &amp; Đấu trường Trạng Nguyên 60:00.">
                                    Global Success (GDPT 2018): 4 Chủ điểm (Our Communities, Our Heritage, Our World, Visions of the Future), 12 Units &amp; 4 Review. Tích hợp Audio phát âm chuẩn, 16 Sơ đồ Vector SVG, Sổ tay ngữ pháp &amp; Đấu trường Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                                        <i class="fa-solid fa-headphones text-[10px]"></i> 12 Units &bull; Audio IPA
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-sitemap text-[10px]"></i> 16 Sơ đồ SVG
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-crown text-[10px]"></i> Trạng Nguyên (60p)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tienganh_9.html" class="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!content.includes(target)) {
  console.error('Target string not found in index.html!');
  process.exit(1);
}

content = content.replace(target, tienganh9Card);
fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully inserted Tiếng Anh 9 card into index.html');
