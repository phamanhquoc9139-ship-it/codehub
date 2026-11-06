// scratch/insert_lsdl8_into_index.js
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const targetStr = `                    <!-- ==================== KHỐI LỚP 9 ==================== -->`;

const cardHtml = `                    <!-- Lịch Sử và Địa Lí 8 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-amber-600 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-tr from-amber-600 via-orange-500 to-teal-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-landmark"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Lịch Sử &amp; Địa Lí 8</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): Trọn bộ 19 bài Lịch sử (Châu Âu, Bắc Mỹ, Việt Nam từ TK XVI đến đầu TK XX), 12 bài Địa lí (Tự nhiên, khoáng sản, khí hậu, sông ngòi, thổ nhưỡng, biển đảo) và 2 Chủ đề chung (Văn minh sông Hồng - Cửu Long, Bảo vệ chủ quyền Biển Đông) kèm 33 Sơ đồ SVG & Trạng nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ 19 bài Lịch sử, 12 bài Địa lí và 2 Chủ đề chung (Văn minh sông Hồng - Cửu Long, Chủ quyền Biển Đông) kèm 33 Sơ đồ SVG, Sổ tay Niên biểu &amp; Trạng nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/lsdl_8.html" class="text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

`;

if (indexHtml.includes('courses/lsdl_8.html')) {
  console.log('Card already exists in index.html!');
} else {
  indexHtml = indexHtml.replace(targetStr, cardHtml + targetStr);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Successfully inserted Lịch Sử và Địa Lí 8 course card into index.html!');
}
