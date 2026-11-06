const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const targetStr = `                            <div class="mt-4 pt-2">
                                <a href="courses/gdcd_7.html"
                                    class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const gdtcCard = `

                    <!-- Course Card: Giáo Dục Thể Chất 7 -->
                    <div onclick="window.location.href='courses/gdtc_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-person-running"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Giáo Dục Thể Chất 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Giáo Dục Thể Chất 7 (GDPT 2018 - Kết nối tri thức): 3 Phần toàn diện (Kiến thức môi trường, Vận động cơ bản: Chạy 60m, Nhảy xa kiểu ngồi, Cự li trung bình, Bài thể dục 30 nhịp; Thể thao tự chọn: Cầu lông, Bóng đá, Bóng rổ).">
                                    Kết nối tri thức (GDPT 2018): 3 Phần (Môi trường tự nhiên; Chạy 60m, Nhảy xa kiểu ngồi, Cự li trung bình, Bài thể dục 30 nhịp; Cầu lông, Bóng đá, Bóng rổ). Tích hợp Bấm giờ thể thao, Đếm nhịp &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-layer-group text-[10px]"></i> 3 Phần &bull; 8 Chủ đề
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                                        <i class="fa-solid fa-stopwatch text-[10px]"></i> Bấm giờ &bull; Đếm nhịp
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/gdtc_7.html"
                                    class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!content.includes('courses/gdtc_7.html')) {
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, targetStr + gdtcCard);
    console.log('Successfully inserted GDTC 7 card into index.html');
  } else {
    console.log('Target string not found in index.html');
  }

  // Update search index keywords if exists
  if (content.includes("'gdtc':")) {
    console.log('gdtc keyword already in search index');
  } else if (content.includes("'gdcd':")) {
    content = content.replace("'gdcd':", "'gdtc': ['giao duc the chat', 'the chat', 'the duc', 'gdtc', 'gdtc 7', 'pe 7'],\n                    'gdcd':");
    console.log('Added gdtc to search index');
  }

  fs.writeFileSync(indexPath, content, 'utf8');
} else {
  console.log('courses/gdtc_7.html already present in index.html');
}
