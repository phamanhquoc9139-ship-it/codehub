const fs = require('fs');
const path = require('path');

const indexPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

if (content.includes('courses/toan_8.html')) {
  console.log('Toán 8 card already exists in index.html');
  process.exit(0);
}

const needle = '<!-- Ngữ Văn 8 -->';
const idx = content.indexOf(needle);
if (idx === -1) {
  console.error('Target <!-- Ngữ Văn 8 --> not found!');
  process.exit(1);
}

const card = `<!-- Course Card: Toán 8 -->
                    <div onclick="window.location.href='courses/toan_8.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
                                    <i class="fa-solid fa-square-root-variable"></i>
                                </div>
                                <div class="ml-3">
                                    <span class="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Khoa học tự nhiên &bull; KNTT</span>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Toán 8</h3>
                                </div>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức với cuộc sống (GDPT 2018): Trọn bộ 10 Chương, 39 Bài học (Tập 1 & Tập 2). Tích hợp sơ đồ hình học SVG, Sổ tay 18 công thức trọng tâm, Bảng cảnh giác lỗi sai và Đấu trường Trạng Nguyên Toán 8 (40 câu trắc nghiệm).">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ 10 Chương, 39 Bài học (Tập 1 &amp; Tập 2). KaTeX công thức toán học, Sơ đồ SVG tương tác, Sổ tay 18 công thức &amp; Đấu trường Trạng Nguyên 40 câu.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        <i class="fa-solid fa-shapes text-[10px]"></i> 10 Chương &bull; 39 Bài
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                                        <i class="fa-solid fa-calculator text-[10px]"></i> KaTeX &amp; SVG
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên 40 câu
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-600 flex items-center justify-between">
                                <a href="courses/toan_8.html" class="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                                    Vào học ngay <i class="fa-solid fa-arrow-right text-xs"></i>
                                </a>
                                <span class="text-xs text-gray-400 dark:text-gray-500 font-medium">Song ngữ (Toán &bull; Math)</span>
                            </div>
                        </div>
                    </div>\r\n\r\n                    `;

content = content.slice(0, idx) + card + content.slice(idx);
fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Successfully inserted Toán 8 card into index.html');
