// update_index_gdcd9.js
const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let idx = fs.readFileSync(indexPath, 'utf8');

const target = `<!-- ==================== KHỐI LỚP 9 ==================== -->
                    <div onclick="location.href='courses/amnhac_9.html'"`;

const replacement = `<!-- ==================== KHỐI LỚP 9 ==================== -->
                    <!-- Course Card: Giáo Dục Công Dân 9 -->
                    <div onclick="location.href='courses/giaoduccongdan_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-600 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-indigo-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-scale-balanced"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Giáo Dục Công Dân 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): Trọn bộ 10 bài học chuẩn SGK gồm Lí tưởng, Khoan dung, Cộng đồng, Khách quan công bằng, Hoà bình, Quản lí thời gian, Thích ứng, Tiêu dùng thông minh, Vi phạm pháp luật &amp; Quyền tự do kinh doanh kèm Sổ tay 12 thuật ngữ &amp; Trạng nguyên 25 câu.">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ 10 bài học chuẩn SGK gồm Lí tưởng, Khoan dung, Cộng đồng, Khách quan công bằng, Hoà bình, Quản lí thời gian, Thích ứng, Tiêu dùng thông minh, Vi phạm pháp luật &amp; Tự do kinh doanh kèm Sổ tay 12 thuật ngữ &amp; Trạng nguyên 25 câu.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/giaoduccongdan_9.html"
                                    class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <!-- Course Card: Âm Nhạc 9 -->
                    <div onclick="location.href='courses/amnhac_9.html'"`;

// Normalize \r\n to \n for replacement then restore if needed
const isCRLF = idx.includes('\r\n');
const normalizedTarget = target.replace(/\r\n/g, '\n');
const normalizedReplacement = replacement.replace(/\r\n/g, '\n');
const normalizedIdx = idx.replace(/\r\n/g, '\n');

if (normalizedIdx.includes(normalizedTarget)) {
  let updated = normalizedIdx.replace(normalizedTarget, normalizedReplacement);
  if (isCRLF) {
    updated = updated.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(indexPath, updated, 'utf8');
  console.log('Successfully updated index.html with GDCD 9 card!');
} else {
  console.error('Target not found in index.html!');
}
