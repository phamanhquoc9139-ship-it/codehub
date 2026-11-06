// update_index_gdtc9.js
const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let idx = fs.readFileSync(indexPath, 'utf8');

const target = `<!-- Course Card: Giáo Dục Công Dân 9 -->`;

const replacement = `<!-- Course Card: Giáo Dục Thể Chất 9 -->
                    <div onclick="location.href='courses/gdtc_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-emerald-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-person-running"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Giáo Dục Thể Chất 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 3 phần, 8 chủ đề (18 bài học) gồm Dinh dưỡng thể thao, Chạy 100m, Nhảy cao nằm nghiêng, Chạy trung bình, Thể dục nhịp điệu, Cầu lông, Bóng đá 7 người &amp; Bóng rổ kèm Máy tính dinh dưỡng, 8 sơ đồ vector &amp; Trạng nguyên 25 câu.">
                                    Kết nối tri thức (GDPT 2018): 3 phần, 8 chủ đề (18 bài học) gồm Dinh dưỡng thể thao, Chạy 100m, Nhảy cao nằm nghiêng, Chạy trung bình, Thể dục nhịp điệu, Cầu lông, Bóng đá 7 người &amp; Bóng rổ kèm Máy tính dinh dưỡng, 8 sơ đồ vector &amp; Trạng nguyên 25 câu.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/gdtc_9.html"
                                    class="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <!-- Course Card: Giáo Dục Công Dân 9 -->`;

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
  console.log('Successfully updated index.html with GDTC 9 card!');
} else {
  console.error('Target not found in index.html!');
}
