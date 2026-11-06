const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let html = fs.readFileSync(path, 'utf8');

// Check if already present
if (html.includes('courses/khtn_7.html')) {
  console.log('courses/khtn_7.html already present in index.html');
  process.exit(0);
}

const cardHtml = `
                    <!-- Course Card: Khoa Học Tự Nhiên 7 -->
                    <div onclick="window.location.href='courses/khtn_7.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow-lg rounded-2xl border border-gray-100 dark:border-gray-600 hover:shadow-xl transition flex flex-col justify-between cursor-pointer group">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl font-bold group-hover:scale-105 transition">
                                    <i class="fa-solid fa-flask-vial"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Khoa Học Tự Nhiên 7</h3>
                            </div>
                            <div class="mt-4 flex-1 space-y-2">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Khoa Học Tự Nhiên 7 (GDPT 2018 - Kết nối tri thức): 10 Chương, 42 bài học toàn diện (Vật lý, Hóa học, Sinh học, Kĩ năng). Tích hợp Bảng tuần hoàn 118 nguyên tố, Sổ tra cứu KHTN và Đấu trường Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 10 Chương, 42 bài học chuẩn SGK (Nguyên tử & Bảng tuần hoàn, Tốc độ & Sóng âm, Ánh sáng & Từ trường, Trao đổi chất, Cảm ứng, Sinh trưởng & Sinh sản). Bảng tuần hoàn tương tác &amp; Trạng Nguyên 60:00.
                                </p>
                                <div class="flex flex-wrap items-center gap-1.5 pt-1">
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                                        <i class="fa-solid fa-layer-group text-[10px]"></i> 10 Chương &bull; 42 Bài
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-800">
                                        <i class="fa-solid fa-table-cells text-[10px]"></i> Bảng tuần hoàn
                                    </span>
                                    <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                                        <i class="fa-solid fa-trophy text-[10px]"></i> Trạng Nguyên (60:00)
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/khtn_7.html"
                                    class="text-teal-600 hover:text-teal-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

// Insert right before Course Card: Công Nghệ 7 in Grade 7
const target = '<!-- Course Card: Công Nghệ 7 -->';
if (html.includes(target)) {
  html = html.replace(target, cardHtml + '\n                    ' + target);
  fs.writeFileSync(path, html, 'utf8');
  console.log('Successfully inserted Khoa Học Tự Nhiên 7 card into index.html');
} else {
  console.log('Target marker not found!');
}
