const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const targetStr = `                            <div class="mt-4 pt-2">
                                <a href="courses/gdtc_7.html"
                                    class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const cardHtml = `

                    <!-- Course Card: Công Nghệ 7 -->
                    <div onclick="window.location.href='courses/congnghe_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-seedling"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Công Nghệ 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Công Nghệ 7 (GDPT 2018 - Kết nối tri thức): 4 Chương toàn diện (Trồng trọt, Lâm nghiệp, Chăn nuôi, Thủy sản), 16 bài học, 17 sơ đồ tư duy & hình minh họa SVG, AgriTools Studio và Đấu trường Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 4 Chương (Trồng trọt, Lâm nghiệp, Chăn nuôi, Thủy sản), 16 bài học, 2 dự án thực hành, 17 hình minh họa SVG kĩ thuật, AgriTools Studio &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                                        <i class="fa-solid fa-layer-group text-[10px]"></i> 4 Chương &bull; 16 Bài
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                                        <i class="fa-solid fa-calculator text-[10px]"></i> AgriTools Studio
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/congnghe_7.html"
                                    class="text-teal-600 hover:text-teal-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!content.includes('courses/congnghe_7.html')) {
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, targetStr + cardHtml);
    console.log('Successfully inserted Cong Nghe 7 card into index.html');
  } else {
    console.log('Target string for GDTC 7 not found');
  }

  // Update search index keywords
  if (content.includes("'congnghe':")) {
    content = content.replace("'congnghe': [", "'congnghe': ['cong nghe 7', 'congnghe 7', 'technology 7', 'trong trot', 'lam nghiep', 'thuy san', ");
    console.log('Updated search index for congnghe');
  }

  fs.writeFileSync(indexPath, content, 'utf8');
} else {
  console.log('courses/congnghe_7.html already in index.html');
}
