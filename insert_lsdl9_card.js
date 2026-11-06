const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const target = `                            <div class="mt-4 pt-2">
                                <a href="courses/khtn_9.html" class="text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const lsdlCard = `

                    <!-- Course Card: Lịch Sử và Địa Lí 9 -->
                    <div onclick="location.href='courses/lsdl_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-600 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-earth-asia"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Lịch Sử và Địa Lí 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="SGK Kết nối tri thức (GDPT 2018): Trọn bộ 7 chương Lịch sử (21 bài), 3 chương Địa lí (21 bài) cập nhật số liệu 2024 & địa giới 2025, 3 Chủ đề chung và Kĩ năng thực hành, tích hợp Sơ đồ vector trực quan từng bài & Kỳ thi Trạng Nguyên 60:00.">
                                    SGK Kết nối tri thức (GDPT 2018): Trọn bộ 7 chương Lịch sử (21 bài), 3 chương Địa lí (21 bài) cập nhật số liệu 2024 &amp; địa giới 2025, 3 Chủ đề chung và Kĩ năng thực hành, tích hợp Sơ đồ vector trực quan từng bài &amp; Kỳ thi Trạng Nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/lsdl_9.html" class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!content.includes('courses/lsdl_9.html')) {
  if (content.includes(target)) {
    content = content.replace(target, target + lsdlCard);
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Successfully inserted Lịch Sử và Địa Lí 9 into index.html!');
  } else {
    console.error('Target marker not found in index.html!');
  }
} else {
  console.log('LSDL 9 already in index.html!');
}
