const fs = require('fs');
const filePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let content = fs.readFileSync(filePath, 'utf8');

const target = `<div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-emerald-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-compact-disc"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Âm Nhạc 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 8 chủ đề, 16 bài học về Quãng, Dịch giọng, Hợp âm ba, Kèn Oboe & Cor, Lí ngựa ô, Nhã nhạc Cung đình Huế, Schubert & Donna Donna.">
                                    Kết nối tri thức (GDPT 2018): 8 chủ đề, 16 bài học về Quãng, Dịch giọng, Hợp âm ba, Kèn Oboe & Cor, Lí ngựa ô, Nhã nhạc Cung đình Huế, Schubert & Donna Donna.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/amnhac_9.html"
                                    class="text-emerald-600 hover:text-emerald-800 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

const replacement = `<div onclick="location.href='courses/amnhac_9.html'" class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-emerald-500 flex flex-col h-full">
                        <div class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 bg-emerald-500 rounded-md p-3 text-white text-xl">
                                    <i class="fa-solid fa-compact-disc"></i>
                                </div>
                                <h3 class="ml-3 text-lg font-medium text-gray-900 dark:text-white">Âm Nhạc 9</h3>
                            </div>
                            <div class="mt-4 flex-1">
                                <p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title="Kết nối tri thức (GDPT 2018): 8 chủ đề, 16 bài học về Quãng, Dịch giọng, Hợp âm ba, Kèn Oboe & Cor, Lí ngựa ô, Nhã nhạc Cung đình Huế, Schubert & Donna Donna kèm Sổ tay thuật ngữ & Trạng Nguyên 60:00.">
                                    Kết nối tri thức (GDPT 2018): 8 chủ đề, 16 bài học về Quãng, Dịch giọng, Hợp âm ba, Kèn Oboe & Cor, Lí ngựa ô, Nhã nhạc Cung đình Huế, Schubert & Donna Donna kèm Sổ tay thuật ngữ & Trạng Nguyên 60:00.
                                </p>
                            </div>
                            <div class="mt-4 pt-2">
                                <a href="courses/amnhac_9.html"
                                    class="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium">Xem chi tiết &rarr;</a>
                            </div>
                        </div>
                    </div>`;

// Normalize CRLF to LF for comparison
const normalizedContent = content.replace(/\r\n/g, '\n');
const normalizedTarget = target.replace(/\r\n/g, '\n');
const normalizedReplacement = replacement.replace(/\r\n/g, '\n');

if (normalizedContent.includes(normalizedTarget)) {
  const updated = normalizedContent.replace(normalizedTarget, normalizedReplacement);
  // Restore CRLF if original had it
  const finalContent = content.includes('\r\n') ? updated.replace(/\n/g, '\r\n') : updated;
  fs.writeFileSync(filePath, finalContent, 'utf8');
  console.log('Successfully updated Âm Nhạc 9 card in index.html!');
} else {
  console.error('Target card not found in index.html');
}
