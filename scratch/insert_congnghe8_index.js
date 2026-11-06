const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(path, 'utf8');

const congnghe8Card = `
                    <!-- Course Card: Công Nghệ 8 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-cyan-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-cyan-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-gears"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Công Nghệ 8</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 5 chương, 20 bài học chuẩn SGK gồm Bản vẽ kĩ thuật, Cơ khí chế tạo, An toàn điện, Kĩ thuật điện (mạch cảm biến) & Dự án thiết kế tưới tự động.">
                                    Kết nối tri thức (GDPT 2018): 5 chương, 20 bài học chuẩn SGK gồm Bản vẽ kĩ thuật, Cơ khí chế tạo, An toàn điện, Kĩ thuật điện (mạch cảm biến) & Dự án thiết kế tưới tự động.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/congnghe_8.html" class="text-cyan-600 hover:text-cyan-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

const tinHoc8Target = `<!-- Course Card: Tin học 8 -->`;
const idx = content.indexOf(tinHoc8Target);
if (idx !== -1) {
  // Tìm thẻ đóng </div> của Tin Học 8 card
  const closingCardIdx = content.indexOf('</div>\n                    </div>\n', idx);
  if (closingCardIdx !== -1) {
    const insertPos = closingCardIdx + '</div>\n                    </div>\n'.length;
    content = content.slice(0, insertPos) + congnghe8Card + content.slice(insertPos);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully inserted Cong Nghe 8 card into index.html!");
  } else {
    console.log("Could not find closing card tag for Tin hoc 8");
  }
} else {
  console.log("Could not find Tin hoc 8 card in index.html");
}
