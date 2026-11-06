const fs = require('fs');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(indexPath, 'utf8');

const targetStr = `                    <!-- ==================== KHỐI LỚP 10 ==================== -->`;

const cardHtml = `                    <!-- Course Card: Mĩ Thuật 9 -->
                    <div onclick="location.href='courses/mithuat_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-rose-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-gradient-to-tr from-rose-500 to-pink-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-palette"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Mĩ Thuật 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="SGK Kết nối tri thức (GDPT 2018): Trọn bộ 8 chủ đề, 16 bài học chuẩn SGK gồm Vẻ đẹp cuộc sống, Thiết kế phụ kiện thời trang, Nghệ thuật đương đại (Pop Art, Ý niệm, Sắp đặt, Trình diễn), Thiết kế giá đỡ công nghệ, Thiết kế bìa sách &amp; Tranh minh hoạ, Nhận diện thương hiệu (Logo), Phù điêu tĩnh vật, Rối que &amp; Múa rối nước Chú Tễu, Đồ gia dụng Upcycling &amp; Hướng nghiệp Mĩ thuật ứng dụng (UI/UX, Đồ hoạ, Nội thất) kèm 10 Thuật ngữ &amp; Trạng nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): Trọn bộ 8 chủ đề, 16 bài học chuẩn SGK gồm Vẻ đẹp cuộc sống, Phụ kiện thời trang, Nghệ thuật đương đại (Pop Art, Sắp đặt, Ý niệm), Giá đỡ công nghệ, Bìa sách &amp; Tranh minh hoạ, Logo nhận diện thương hiệu, Phù điêu, Rối nước Thủy đình, Đồ gia dụng Upcycling &amp; Hướng nghiệp mĩ thuật ứng dụng (UI/UX, Đồ hoạ) kèm 10 Thuật ngữ &amp; Trạng nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/mithuat_9.html" class="text-rose-600 hover:text-rose-800 dark:text-rose-400 dark:hover:text-rose-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

`;

if (!content.includes('courses/mithuat_9.html')) {
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, cardHtml + targetStr);
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Successfully inserted Mĩ Thuật 9 card into index.html');
  } else {
    console.error('Target string not found in index.html!');
  }
} else {
  console.log('Mĩ Thuật 9 card already exists in index.html');
}
