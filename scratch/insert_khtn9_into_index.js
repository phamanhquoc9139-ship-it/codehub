// insert_khtn9_into_index.js - Thêm thẻ môn Khoa Học Tự Nhiên 9 vào index.html
const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

if (indexHtml.includes('courses/khtn_9.html')) {
  console.log('index.html already contains courses/khtn_9.html');
  process.exit(0);
}

const khtn9Card = `
                    <!-- Course Card: Khoa Học Tự Nhiên 9 -->
                    <div onclick="location.href='courses/khtn_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-teal-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-tr from-teal-500 via-blue-600 to-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-atom"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Khoa Học Tự Nhiên 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="SGK Kết nối tri thức (GDPT 2018): Trọn bộ 14 chương (51 bài học) chuẩn SGK gồm Vật lí (Cơ học, Ánh sáng, Điện, Điện từ, Năng lượng), Hóa học (Kim loại, Hợp chất hữu cơ, Alkane, Alkene, Rượu, Acid, Lipid, Polymer, Vỏ Trái Đất) và Sinh học (Di truyền Mendel, DNA/RNA, Nguyên phân/Giảm phân, Di truyền người, Tiến hóa) kèm Bản vẽ SVG, Widget tính toán & Trạng Nguyên 60:00.">
                                    SGK Kết nối tri thức (GDPT 2018): Trọn bộ 14 chương (51 bài học) chuẩn SGK gồm Vật lí (Cơ học, Ánh sáng, Điện, Điện từ, Năng lượng), Hóa học (Kim loại, Hợp chất hữu cơ, Alkane, Alkene, Rượu, Acid, Lipid, Polymer, Vỏ Trái Đất) và Sinh học (Di truyền Mendel, DNA/RNA, Nguyên phân/Giảm phân, Di truyền người, Tiến hóa) kèm Bản vẽ SVG, Widget tính toán &amp; Trạng Nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/khtn_9.html" class="text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

// Insert right after hdtn_9.html card
const targetRegex = /(<a\s+href="courses\/hdtn_9\.html"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/;
if (targetRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(targetRegex, `$1\n${khtn9Card}`);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Successfully inserted Khoa Học Tự Nhiên 9 after hdtn_9 card in index.html');
} else {
  console.error('Could not find hdtn_9 target regex in index.html');
  process.exit(1);
}
