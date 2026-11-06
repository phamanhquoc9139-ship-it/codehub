const fs = require('fs');
const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let index = fs.readFileSync(indexPath, 'utf8');

if (index.includes('courses/hdtn_8.html')) {
  console.log('Already has hdtn_8.html');
  process.exit(0);
}

const target = 'href="courses/gdtc_8.html" class="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium">Xem chi tiết &rarr;</a>\n                            </div>\n                        </div>\n                    </div>';

const hdtnCard = `

                    <!-- Hoạt Động Trải Nghiệm, Hướng Nghiệp 8 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-rose-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-tr from-fuchsia-600 via-rose-600 to-amber-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-compass"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Hoạt Động Trải Nghiệm 8</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): Trọn bộ 9 chủ đề, 19 bài học chuẩn SGK gồm Tình bạn, Phòng tránh bắt nạt, Khám phá bản thân, Tự chủ, Kinh doanh nhỏ, Trách nhiệm gia đình, Thiện nguyện & Định hướng nghề nghiệp tương lai kèm Sơ đồ SVG & Trạng nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ 9 chủ đề, 19 bài học chuẩn SGK gồm Tình bạn, Phòng tránh bắt nạt, Khám phá bản thân, Tự chủ, Kinh doanh nhỏ, Trách nhiệm gia đình, Thiện nguyện &amp; Định hướng nghề nghiệp tương lai kèm Sơ đồ SVG &amp; Trạng nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/hdtn_8.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!index.includes(target)) {
  console.log('Target string not found with exact newlines, trying flexible regex replace...');
  const flexRegex = /(<a\s+href="courses\/gdtc_8\.html"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/;
  index = index.replace(flexRegex, `$1${hdtnCard}`);
} else {
  index = index.replace(target, `${target}${hdtnCard}`);
}

fs.writeFileSync(indexPath, index, 'utf8');
console.log('Successfully inserted Hoạt Động Trải Nghiệm 8 into index.html');
