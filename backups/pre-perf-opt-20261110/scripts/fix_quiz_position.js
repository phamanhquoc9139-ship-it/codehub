const fs = require('fs');
const path = require('path');

const d = path.join(__dirname, '..', 'courses');
const files = fs.readdirSync(d).filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(path.join(d, f), 'utf8');

    // 1. Loại bỏ hoàn toàn khối Quiz cũ (dù nằm ở đâu)
    const oldStartString = '<!-- Quiz Call to action -->';
    const oldEndStrings = [
        'Làm bài kiểm tra ngay\n                        </a>\n                    </div>',
        'Làm bài kiểm tra ngay\r\n                        </a>\r\n                    </div>',
        'Làm bài kiểm tra ngay\n                        </a>\r\n                    </div>',
        'Làm bài kiểm tra ngay\r\n                        </a>\n                    </div>'
    ];

    while (c.includes(oldStartString)) {
        let startIdx = c.indexOf(oldStartString);
        let endIdx = -1;
        let matchLen = 0;

        for (const es of oldEndStrings) {
            let idx = c.indexOf(es, startIdx);
            if (idx !== -1) {
                endIdx = idx;
                matchLen = es.length;
                break;
            }
        }

        if (endIdx !== -1) {
            // Cắt phần từ ngay trước comment đến hết thẻ div đóng
            // Lùi thêm tí khoảng trắng nếu có
            let actualStart = startIdx;
            while (actualStart > 0 && (c[actualStart - 1] === ' ' || c[actualStart - 1] === '\t' || c[actualStart - 1] === '\n' || c[actualStart - 1] === '\r')) {
                actualStart--;
            }
            c = c.substring(0, actualStart) + c.substring(endIdx + matchLen);
        } else {
            console.error('Không tìm thấy kết thúc của block cũ trong ' + f);
            break; // Tránh loop vô hạn
        }
    }

    // 2. Chèn khối Quiz mới nằm sau <section> cuối cùng
    const id = f.replace('.html', '');
    const insertion = `
                    <!-- Quiz Call to action -->
                    <div class="col-span-12 lg:col-span-9 lg:col-start-4 mt-12 mb-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 text-center border border-indigo-100 dark:border-indigo-800">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ôn Tập Kiến Thức</h2>
                        <p class="text-gray-600 dark:text-gray-300 mb-6">Hãy thử sức với bài kiểm tra trắc nghiệm để củng cố lại những gì đã học nhé!</p>
                        <a href="../quiz.html?course=${id}" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-colors">
                            Làm bài kiểm tra ngay
                        </a>
                    </div>
    `;

    // Tìm dấu </section> cuối cùng trong thẻ main, vì ta muốn nó nằm ngay dưới các topic
    const lastSectionIdx = c.lastIndexOf('</section>');
    if (lastSectionIdx !== -1) {
        c = c.substring(0, lastSectionIdx + 10) + insertion + c.substring(lastSectionIdx + 10);
        fs.writeFileSync(path.join(d, f), c, 'utf8');
        console.log('Đã di chuyển block xuống cuối cùng trong ' + f);
    } else {
        console.log('Không tìm thấy section trong ' + f + ', fallback sang main');
        const lastMain = c.lastIndexOf('</main>');
        if (lastMain !== -1) {
            c = c.substring(0, lastMain) + insertion + c.substring(lastMain);
            fs.writeFileSync(path.join(d, f), c, 'utf8');
            console.log('Đã di chuyển block (fallback) trong ' + f);
        }
    }
});
