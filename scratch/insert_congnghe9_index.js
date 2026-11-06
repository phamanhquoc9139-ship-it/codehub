const fs = require('fs');
const filePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';

let content = fs.readFileSync(filePath, 'utf8');

const targetAnchor = '<!-- Course Card: Tin học 9 -->';
const targetAnchorNormalized = '<!-- Course Card: Tin h';

const newCard = `<!-- Course Card: Công Nghệ 9 -->
                    <div onclick="location.href='courses/congnghe_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-blue-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-blue-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-compass"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Công Nghệ 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 5 bài học về Nghề nghiệp KT-CN, Phân luồng giáo dục, Thị trường lao động, Mật mã Holland RIASEC, Cây nghề nghiệp, Ikigai &amp; Dự án tự đánh giá.">
                                    Kết nối tri thức (GDPT 2018): 5 bài học về Nghề nghiệp KT-CN, Phân luồng giáo dục, Thị trường lao động, Mật mã Holland RIASEC, Cây nghề nghiệp, Ikigai &amp; Dự án tự đánh giá.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/congnghe_9.html"
                                    class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    `;

if (!content.includes('courses/congnghe_9.html')) {
  // Find where Tin học 9 starts
  const idx = content.indexOf('<!-- Course Card: Tin');
  if (idx !== -1) {
    const updated = content.slice(0, idx) + newCard + content.slice(idx);
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Successfully inserted Công Nghệ 9 card into index.html!');
  } else {
    console.error('Could not find Tin học 9 comment');
  }
} else {
  console.log('Công Nghệ 9 card is already present in index.html.');
}
