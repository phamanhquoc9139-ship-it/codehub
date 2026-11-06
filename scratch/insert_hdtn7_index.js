const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';

let content = fs.readFileSync(path, 'utf8');

// Check if already inserted
if (content.includes('courses/hdtn_7.html')) {
  console.log('Already in index.html');
  process.exit(0);
}

const targetStr = `                    <!-- ==================== KHỐI LỚP 8 ==================== -->`;

const newCard = `                    <!-- Course Card: Hoạt Động Trải Nghiệm, Hướng Nghiệp 7 -->
                    <div onclick="window.location.href='courses/hdtn_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-compass"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hoạt Động Trải Nghiệm 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Hoạt động trải nghiệm, hướng nghiệp 7 (GDPT 2018 - Kết nối tri thức, mã SGK G3HH7Q001a26): 4 Mạch nội dung, 9 chủ đề rèn luyện, 105 tiết thực hành, sơ đồ tư duy & minh họa SVG, phiếu trải nghiệm 8 mục và Đấu trường Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 4 Mạch nội dung, 9 chủ đề rèn luyện, 105 tiết, sơ đồ tư duy &amp; hình minh họa SVG, cẩm nang 10 phẩm chất, phiếu trải nghiệm 8 mục &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-layer-group text-[10px]"></i> 9 Chủ đề &bull; 105 Tiết
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-pen-nib text-[10px]"></i> Phiếu Trải Nghiệm
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/hdtn_7.html"
                                    class="text-rose-600 hover:text-rose-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

`;

if (!content.includes(targetStr)) {
  console.error('Target string not found in index.html');
  process.exit(1);
}

content = content.replace(targetStr, newCard + targetStr);
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully inserted Course Card into index.html!');
