const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, '..', 'courses');
const files = fs.readdirSync(coursesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(coursesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Get course id from filename (e.g. grade_3.html -> grade_3)
    const courseId = file.replace('.html', '');

    const insertion = `
                    <!-- Quiz Call to action -->
                    <div class="mt-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 text-center border border-indigo-100 dark:border-indigo-800">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ôn Tập Kiến Thức</h2>
                        <p class="text-gray-600 dark:text-gray-300 mb-6">Hãy thử sức với bài kiểm tra trắc nghiệm để củng cố lại những gì đã học nhé!</p>
                        <a href="../quiz.html?course=${courseId}" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-colors">
                            Làm bài kiểm tra ngay
                        </a>
                    </div>
                </div>
        </main>`;

    // Remove existing if any (for rerunability)
    if (content.includes('<!-- Quiz Call to action -->')) {
        console.log(`Skipping ${file}, already has quiz block.`);
        return;
    }

    // Replace the closing tags
    const target1 = '                </div>\r\n        </main>';
    const target2 = '                </div>\n        </main>';

    if (content.includes(target1)) {
        content = content.replace(target1, insertion);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file} (CRLF)`);
    } else if (content.includes(target2)) {
        content = content.replace(target2, insertion);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file} (LF)`);
    } else {
        console.log(`Could not find anchor in ${file}`);
    }
});
