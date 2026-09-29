const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const toan10Card = `
                    <!-- Course Card: Toán 10 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-red-500">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-red-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-square-root-variable"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Toán Học 10</h3>
                            </div>
                            <div class="mt-4">
                                <p class="text-sm text-gray-500 dark:text-gray-300">
                                    Chương trình GDPT 2018 (Kết nối tri thức): Đại số, Hệ thức lượng, Vectơ, Thống kê & Xác suất.
                                </p>
                            </div>
                            <div class="mt-4">
                                <a href="courses/toan_10.html" class="text-red-600 hover:text-red-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

// Inject before Piano card
if (!content.includes('<!-- Course Card: Toán 10 -->')) {
    content = content.replace('<!-- Course Card 8 (Piano) -->', toan10Card + '\n                    <!-- Course Card 8 (Piano) -->');
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Added Toán 10 card to index.html');
} else {
    console.log('Toán 10 card already exists');
}
