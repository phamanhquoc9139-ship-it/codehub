const fs = require('fs');
const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(path, 'utf8');

const gdcd8Card = `
                    <!-- Course Card: Giáo Dục Công Dân 8 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-blue-600 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-blue-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-scale-balanced"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Giáo Dục Công Dân 8</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 4 mạch, 10 bài học chuẩn SGK gồm Giáo dục đạo đức, Kĩ năng sống (Mục tiêu SMART, Phòng chống bạo lực gia đình), Kinh tế (Kế hoạch chi tiêu) & Pháp luật (An toàn PCCC, Quyền lao động).">
                                    Kết nối tri thức (GDPT 2018): 4 mạch, 10 bài học chuẩn SGK gồm Giáo dục đạo đức, Kĩ năng sống (Mục tiêu SMART, Phòng chống bạo lực gia đình), Kinh tế (Kế hoạch chi tiêu) & Pháp luật (An toàn PCCC, Quyền lao động).
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/gdcd_8.html" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

if (!content.includes('courses/gdcd_8.html')) {
  const cn8Target = `<!-- Course Card: Công Nghệ 8 -->`;
  const idx = content.indexOf(cn8Target);
  if (idx !== -1) {
    const closingCardIdx = content.indexOf('</div>\n                    </div>\n', idx);
    if (closingCardIdx !== -1) {
      const insertPos = closingCardIdx + '</div>\n                    </div>\n'.length;
      content = content.slice(0, insertPos) + gdcd8Card + content.slice(insertPos);
      fs.writeFileSync(path, content, 'utf8');
      console.log("Successfully inserted GDCD 8 card into index.html!");
    } else {
      console.log("Could not find closing card tag for Công Nghệ 8");
    }
  } else {
    console.log("Could not find Công Nghệ 8 card in index.html");
  }
} else {
  console.log("index.html already has GDCD 8!");
}
