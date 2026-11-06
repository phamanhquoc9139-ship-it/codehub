// update_index_hdtn9.js - Thêm thẻ khóa học HĐTN, HN 9 vào index.html
const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

if (!indexHtml.includes('courses/hdtn_9.html')) {
  const target = `                    <!-- ==================== KHỐI LỚP 10 ==================== -->`;
  const cardHtml = `                    <!-- Course Card: Hoạt Động Trải Nghiệm, Hướng Nghiệp 9 -->
                    <div onclick="location.href='courses/hdtn_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-indigo-600 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-indigo-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-compass"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">HĐ Trải Nghiệm, Hướng Nghiệp 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 4 mạch, 9 chủ đề (23 hoạt động) gồm Tôn trọng sự khác biệt, Bắt nạt học đường, Thích nghi, Quản lí ngân sách, Gia đình & Kinh tế, Khảo sát MXH, Ô nhiễm môi trường, Thế giới nghề nghiệp & Định hướng sau THCS kèm Sổ tay 12 thuật ngữ & Trạng Nguyên 25 câu.">
                                    Kết nối tri thức (GDPT 2018): 4 mạch, 9 chủ đề (23 hoạt động) gồm Tôn trọng sự khác biệt, Bắt nạt học đường, Thích nghi, Quản lí ngân sách, Gia đình &amp; Kinh tế, Khảo sát MXH, Ô nhiễm môi trường, Thế giới nghề nghiệp &amp; Định hướng sau THCS kèm Sổ tay 12 thuật ngữ &amp; Trạng Nguyên 25 câu.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/hdtn_9.html"
                                    class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

`;

  indexHtml = indexHtml.replace(target, cardHtml + target);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Successfully added Hoạt động trải nghiệm, hướng nghiệp 9 course card to index.html!');
} else {
  console.log('index.html already contains hdtn_9.html card.');
}
