const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const target = `<!-- Course Card: Tin học 10 -->`;
const newCard = `<!-- Course Card: Tiếng Trung Quốc 10 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-red-600 flex flex-col h-full" onclick="window.location.href='courses/tiengtrung_10.html'">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center"><div class="flex-shrink-0 bg-red-600 rounded-md p-3 text-white text-xl font-serif">🇨🇳</div><h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Tiếng Trung Quốc 10</h3></div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Chương trình Tiếng Trung Quốc 10 Kết nối tri thức - 4 Chủ điểm, 10 bài học, 4 bài ôn tập, phát âm chuẩn Pinyin, sơ đồ SVG và phòng thi HSK.">
                                    Chương trình Tiếng Trung Quốc 10 Kết nối tri thức - 4 Chủ điểm, 10 bài học, 4 bài ôn tập, phát âm chuẩn Pinyin, sơ đồ SVG và phòng thi HSK.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/tiengtrung_10.html" class="text-red-600 hover:text-red-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <!-- Course Card: Tin học 10 -->`;

if (!content.includes('courses/tiengtrung_10.html') && content.includes(target)) {
  content = content.replace(target, newCard);
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('Successfully added Tiếng Trung Quốc 10 card to index.html!');
} else {
  console.log('Already exists or target not found.');
}
