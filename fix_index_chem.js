const fs = require('fs');

const indexFile = 'index.html';
let indexContent = fs.readFileSync(indexFile, 'utf8');

const chemCards = `
                    <!-- Course Card: Hóa học 10 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-green-600">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center"><div class="flex-shrink-0 bg-green-600 rounded-md p-3 text-white text-xl">🧪</div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hóa học 10</h3></div>
                            <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Khám phá nguyên tử, bảng tuần hoàn, liên kết hóa học, phản ứng oxi hóa - khử, tốc độ phản ứng (GDPT 2018).</p></div>
                            <div class="mt-4"><a href="courses/hoahoc_10.html" class="text-green-600 hover:text-green-800 font-medium">Xem chi tiết &rarr;</a></div>
                        </div>
                    </div>

                    <!-- Course Card: Hóa học 11 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-emerald-600">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center"><div class="flex-shrink-0 bg-emerald-600 rounded-md p-3 text-white text-xl">🧫</div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hóa học 11</h3></div>
                            <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Tìm hiểu cân bằng hóa học, Nitrogen, Sulfur, và đại cương Hóa học hữu cơ (GDPT 2018).</p></div>
                            <div class="mt-4"><a href="courses/hoahoc_11.html" class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a></div>
                        </div>
                    </div>

                    <!-- Course Card: Hóa học 12 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-teal-600">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center"><div class="flex-shrink-0 bg-teal-600 rounded-md p-3 text-white text-xl">🔬</div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hóa học 12</h3></div>
                            <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Khám phá Ester, Carbohydrate, Polymer, Đại cương kim loại và pin điện hóa (GDPT 2018).</p></div>
                            <div class="mt-4"><a href="courses/hoahoc_12.html" class="text-teal-600 hover:text-teal-800 font-medium">Xem chi tiết &rarr;</a></div>
                        </div>
                    </div>`;

const targetStr = `<!-- Course Card: Tiếng Anh 12 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-600">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center"><div class="flex-shrink-0 bg-indigo-600 rounded-md p-3 text-white text-xl">🇬🇧</div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Anh 12</h3></div>
                            <div class="mt-4"><p class="text-sm text-gray-500 dark:text-gray-300">Chương trình Tiếng Anh lớp 12 – ôn luyện kiến thức, kỹ năng và chuẩn bị cho các bài kiểm tra.</p></div>
                            <div class="mt-4"><a href="courses/tienganh_12.html" class="text-indigo-600 hover:text-indigo-800 font-medium">Xem chi tiết &rarr;</a></div>
                        </div>
                    </div>`;

indexContent = indexContent.replace(targetStr, targetStr + '\n' + chemCards);
fs.writeFileSync(indexFile, indexContent, 'utf8');
console.log('Successfully injected Chemistry cards into index.html');
