const fs = require('fs');
const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let index = fs.readFileSync(indexPath, 'utf8');

if (index.includes('courses/khtn_8.html')) {
  console.log('Already has khtn_8.html');
  process.exit(0);
}

const target = 'href="courses/hdtn_8.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>\n                            </div>\n                        </div>\n                    </div>';

const khtnCard = `

                    <!-- Khoa Học Tự Nhiên 8 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-teal-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-tr from-teal-500 via-blue-600 to-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-flask-vial"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Khoa Học Tự Nhiên 8</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): Trọn bộ Bài mở đầu và 8 chương (47 bài học) chuẩn SGK gồm Hóa học (Phản ứng, mol, acid, base, oxide, muối, phân bón), Vật lí (Khối lượng riêng, áp suất, moment lực, đòn bẩy, điện, nhiệt) và Sinh học (Cơ thể người, sinh vật và môi trường) kèm Sơ đồ SVG & Trạng nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ Bài mở đầu và 8 chương (47 bài học) chuẩn SGK gồm Hóa học (Phản ứng, mol, acid, base, oxide, muối, phân bón), Vật lí (Khối lượng riêng, áp suất, moment lực, đòn bẩy, điện, nhiệt) và Sinh học (Cơ thể người, sinh vật và môi trường) kèm Sơ đồ SVG &amp; Trạng nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/khtn_8.html" class="text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!index.includes(target)) {
  console.log('Target string not found with exact newlines, trying flexible regex replace...');
  const flexRegex = /(<a\s+href="courses\/hdtn_8\.html"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/;
  index = index.replace(flexRegex, `$1${khtnCard}`);
} else {
  index = index.replace(target, `${target}${khtnCard}`);
}

fs.writeFileSync(indexPath, index, 'utf8');
console.log('Successfully inserted Khoa Học Tự Nhiên 8 into index.html');
