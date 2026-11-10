const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const sinhCards = `
                    <!-- Course Card: Sinh học 10 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-emerald-500">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-seedling"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Sinh Học 10</h3>
                            </div>
                            <div class="mt-4">
                                <p class="text-sm text-gray-500 dark:text-gray-300">
                                    GDPT 2018: Thế giới sống, Sinh học tế bào, Trao đổi chất, Phân bào, Vi sinh vật & Virus.
                                </p>
                            </div>
                            <div class="mt-4">
                                <a href="courses/sinhhoc_10.html" class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <!-- Course Card: Sinh học 11 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-teal-600">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-teal-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-leaf"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Sinh Học 11</h3>
                            </div>
                            <div class="mt-4">
                                <p class="text-sm text-gray-500 dark:text-gray-300">
                                    GDPT 2018: Sinh lý học Thực vật & Động vật: Chuyển hoá năng lượng, Cảm ứng, Sinh trưởng & Sinh sản.
                                </p>
                            </div>
                            <div class="mt-4">
                                <a href="courses/sinhhoc_11.html" class="text-teal-600 hover:text-teal-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <!-- Course Card: Sinh học 12 -->
                    <div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-green-600">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-green-600 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-dna"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Sinh Học 12</h3>
                            </div>
                            <div class="mt-4">
                                <p class="text-sm text-gray-500 dark:text-gray-300">
                                    GDPT 2018: Di truyền phân tử & tế bào, Các quy luật Mendel, Tiến hóa & Sinh thái học THPT.
                                </p>
                            </div>
                            <div class="mt-4">
                                <a href="courses/sinhhoc_12.html" class="text-green-600 hover:text-green-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>
`;

if (!content.includes('<!-- Course Card: Sinh học 10 -->')) {
    content = content.replace('<!-- Course Card 8 (Piano) -->', sinhCards + '\n                    <!-- Course Card 8 (Piano) -->');
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Added Sinh học 10, 11, 12 cards to index.html');
} else {
    console.log('Sinh học cards already exist in index.html');
}
