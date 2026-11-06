const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexPath, 'utf8');

if (content.includes('courses/nguvan_9.html')) {
  console.log('nguvan_9.html already exists in index.html');
  process.exit(0);
}

const target = `                            <div class="mt-4 pt-2">
                                <a href="courses/mithuat_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const nguvan9Card = `                            <div class="mt-4 pt-2">
                                <a href="courses/mithuat_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <!-- Course Card: Ngữ Văn 9 -->
                    <div onclick="location.href='courses/nguvan_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-rose-600 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-tr from-rose-600 to-red-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-book-open"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Ngữ Văn 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="SGK Kết nối tri thức (GDPT 2018): Trọn bộ 10 bài học (Tập 1 &amp; Tập 2) chuẩn SGK gồm Truyện truyền kì (Chuyện người con gái Nam Xương), Thơ song thất lục bát (Cung oán ngâm khúc), Truyện thơ Nôm &amp; Chữ Nôm/Quốc ngữ (Truyện Kiều), Nghị luận văn học &amp; Trích dẫn, Bi kịch &amp; Catharsis (Romeo và Juliet), Truyện trinh thám (Sherlock Holmes), Thơ nhiều khổ &amp; Phát triển từ vựng, Nghị luận xã hội &amp; Tên viết tắt quốc tế, Thuyết minh danh lam thắng cảnh (Yên Tử), Lịch sử tâm hồn văn học dân tộc kèm 12 Sơ đồ SVG &amp; Trạng nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ 10 bài học (Tập 1 &amp; Tập 2) chuẩn SGK gồm Truyện truyền kì, Thơ song thất lục bát, Truyện thơ Nôm, Nghị luận văn học, Bi kịch &amp; Catharsis, Truyện trinh thám suy luận, Thơ nhiều khổ, Nghị luận xã hội, Thuyết minh Yên Tử, Lịch sử tâm hồn văn học dân tộc kèm 12 Sơ đồ SVG &amp; Trạng nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/nguvan_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

if (!content.includes(target)) {
  console.error('Target string not found in index.html!');
  process.exit(1);
}

content = content.replace(target, nguvan9Card);
fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully inserted Ngữ Văn 9 card into index.html');
