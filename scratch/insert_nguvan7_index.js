const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const nguvan7Card = `<!-- Course Card: Ngữ Văn 7 -->
                    <div onclick="window.location.href='courses/nguvan_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-feather-pointed"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Ngữ Văn 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 10 Bài học (Tập 1 & Tập 2), Tri thức thể loại, Tiếng Việt, Quy trình viết, Nói - nghe & Dự án đọc sách.">
                                    Kết nối tri thức (GDPT 2018): 10 Bài học (Tập 1 &amp; Tập 2), Tri thức thể loại, Tiếng Việt, Quy trình viết, Nói - nghe, 10 Sơ đồ Vector SVG &amp; Dự án đọc sách.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800">
                                        <i class="fa-solid fa-book-open text-[10px]"></i> 10 Bài &bull; 2 Tập
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-200 dark:border-pink-800">
                                        <i class="fa-solid fa-diagram-project text-[10px]"></i> 10 Sơ đồ SVG
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/nguvan_7.html"
                                    class="text-rose-600 hover:text-rose-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>\n\n                    `;

if (!content.includes('courses/nguvan_7.html')) {
  const target = `<!-- ==================== KHỐI LỚP 7 ==================== -->\n                    <div onclick="window.location.href='courses/amnhac_7.html'"`;
  const replacement = `<!-- ==================== KHỐI LỚP 7 ==================== -->\n                    ` + nguvan7Card + `<div onclick="window.location.href='courses/amnhac_7.html'"`;
  
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Successfully inserted Ngữ Văn 7 card into index.html!');
  } else {
    console.log('Could not find target marker in index.html');
  }
} else {
  console.log('Ngữ Văn 7 already exists in index.html');
}
