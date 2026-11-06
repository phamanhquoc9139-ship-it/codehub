const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const target = '<!-- Course Card: Giáo Dục Công Dân 8 -->';
const targetEnd = content.indexOf('<!-- ==================== KHỐI LỚP 9 ==================== -->');

const gdtcCard = `
                    <!-- Course Card: Giáo Dục Thể Chất 8 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-emerald-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-person-running"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Giáo Dục Thể Chất 8</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): Trọn bộ 3 phần, 8 chủ đề (22 bài học/chuyên đề) chuẩn SGK gồm Dinh dưỡng thể thao, Chạy ngắn 100m, Nhảy cao bước qua, Chạy cự li trung bình, Thể dục nhịp điệu, Cầu lông, Bóng đá, Bóng rổ & Đấu trường Trạng nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ 3 phần, 8 chủ đề (22 bài học/kĩ thuật) chuẩn SGK gồm Dinh dưỡng thể thao, Chạy ngắn 100m, Nhảy cao bước qua, Chạy trung bình, Thể dục nhịp điệu, Cầu lông, Bóng đá, Bóng rổ &amp; Trạng nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/gdtc_8.html" class="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

if (!content.includes('courses/gdtc_8.html')) {
  content = content.substring(0, targetEnd) + gdtcCard + '\n                    ' + content.substring(targetEnd);
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('Successfully inserted Giáo Dục Thể Chất 8 into index.html!');
} else {
  console.log('Already exists in index.html!');
}
