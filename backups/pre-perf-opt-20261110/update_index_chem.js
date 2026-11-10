const fs = require('fs');

const indexFile = 'index.html';
let indexContent = fs.readFileSync(indexFile, 'utf8');

const chemCards = `
          <!-- Course Card: Hóa học 10 -->
          <div class="bg-white dark:bg-dark-surface overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div class="p-5">
              <div class="flex items-center"><div class="flex-shrink-0 bg-green-500 rounded-md p-3 text-white text-xl"><i class="fa-solid fa-flask"></i></div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hóa học 10</h3></div>
              <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Khám phá nguyên tử, bảng tuần hoàn, liên kết hóa học, phản ứng oxi hóa - khử, tốc độ phản ứng (GDPT 2018).</p></div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 px-5 py-3"><div class="text-sm"><a href="courses/hoahoc_10.html" class="font-medium text-primary hover:text-blue-700 dark:hover:text-blue-400">Khám phá <i class="fa-solid fa-arrow-right text-xs ml-1"></i></a></div></div>
          </div>
          <!-- Course Card: Hóa học 11 -->
          <div class="bg-white dark:bg-dark-surface overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div class="p-5">
              <div class="flex items-center"><div class="flex-shrink-0 bg-emerald-500 rounded-md p-3 text-white text-xl"><i class="fa-solid fa-flask-vial"></i></div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hóa học 11</h3></div>
              <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Tìm hiểu cân bằng hóa học, Nitrogen, Sulfur, và đại cương Hóa học hữu cơ (GDPT 2018).</p></div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 px-5 py-3"><div class="text-sm"><a href="courses/hoahoc_11.html" class="font-medium text-primary hover:text-blue-700 dark:hover:text-blue-400">Khám phá <i class="fa-solid fa-arrow-right text-xs ml-1"></i></a></div></div>
          </div>
          <!-- Course Card: Hóa học 12 -->
          <div class="bg-white dark:bg-dark-surface overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div class="p-5">
              <div class="flex items-center"><div class="flex-shrink-0 bg-teal-600 rounded-md p-3 text-white text-xl"><i class="fa-solid fa-vial-circle-check"></i></div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hóa học 12</h3></div>
              <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Khám phá Ester, Carbohydrate, Polymer, Đại cương kim loại và pin điện hóa (GDPT 2018).</p></div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 px-5 py-3"><div class="text-sm"><a href="courses/hoahoc_12.html" class="font-medium text-primary hover:text-blue-700 dark:hover:text-blue-400">Khám phá <i class="fa-solid fa-arrow-right text-xs ml-1"></i></a></div></div>
          </div>`;

// Find where Tiếng Anh 12 card ends
const targetStr = `<!-- Course Card: Tiếng Anh 12 -->
          <div class="bg-white dark:bg-dark-surface overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div class="p-5">
              <div class="flex items-center"><div class="flex-shrink-0 bg-indigo-600 rounded-md p-3 text-white text-xl">🇬🇧</div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Anh 12</h3></div>
              <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Chương trình Tiếng Anh lớp 12 – ôn luyện kiến thức, kỹ năng và chuẩn bị cho các bài kiểm tra.</p></div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 px-5 py-3"><div class="text-sm"><a href="courses/tienganh_12.html" class="font-medium text-primary hover:text-blue-700 dark:hover:text-blue-400">Khám phá <i class="fa-solid fa-arrow-right text-xs ml-1"></i></a></div></div>
          </div>`;

indexContent = indexContent.replace(targetStr, targetStr + '\n' + chemCards);
fs.writeFileSync(indexFile, indexContent, 'utf8');
console.log('Successfully injected Chemistry cards into index.html');
