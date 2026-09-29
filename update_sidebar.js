const fs = require('fs');

const path = 'courses/hoahoc_10.html';
let content = fs.readFileSync(path, 'utf8');

const chemData = [
    {"id": "chu-de-1", "title": "Chủ đề 1: Cấu tạo nguyên tử", "lessons": ["Bài 1: Thành phần của nguyên tử", "Bài 2: Nguyên tố hóa học", "Bài 3: Cấu trúc vỏ electron"]},
    {"id": "chu-de-2", "title": "Chủ đề 2: Bảng tuần hoàn", "lessons": ["Bài 4: Cấu tạo bảng", "Bài 5: Xu hướng biến đổi", "Bài 6: Định luật tuần hoàn"]},
    {"id": "chu-de-3", "title": "Chủ đề 3: Liên kết hóa học", "lessons": ["Bài 7: Quy tắc Octet", "Bài 8: Liên kết Ion", "Bài 9: Liên kết CHT", "Bài 10: Tương tác Van der Waals"]},
    {"id": "chu-de-4", "title": "Chủ đề 4: Phản ứng oxi hóa khử", "lessons": ["Bài 11: Phản ứng oxi hóa - khử", "Bài tập nâng cao"]},
    {"id": "chu-de-5", "title": "Chủ đề 5: Năng lượng hóa học", "lessons": ["Bài 12: Enthalpy tạo thành", "Bài 13: Biến thiên enthalpy"]},
    {"id": "chu-de-6", "title": "Chủ đề 6: Tốc độ phản ứng", "lessons": ["Bài 14: Khái niệm tốc độ", "Bài 15: Các yếu tố ảnh hưởng"]},
    {"id": "chu-de-7", "title": "Chủ đề 7: Nhóm Halogen", "lessons": ["Bài 16: Đặc điểm tính chất Halogen", "Bài 17: Hydrogen halide"]}
];

let newNav = '<nav class="space-y-4">\n';

chemData.forEach((topic, idx) => {
    const isFirst = idx === 0;
    const parentClass = isFirst ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 font-medium" : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800";
    
    newNav += `            <div class="sidebar-item">
                <a href="#${topic.id}" class="block px-3 py-2 text-sm rounded-lg transition-colors ${parentClass}">${topic.title}</a>
                <ul class="pl-4 mt-1 space-y-1.5 border-l-2 border-gray-100 dark:border-gray-700 ml-4">
`;
    topic.lessons.forEach(lesson => {
        newNav += `                    <li><a href="#${topic.id}" class="block text-[13px] text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">${lesson}</a></li>\n`;
    });
    newNav += `                </ul>
            </div>\n`;
});

newNav += '          </nav>';

// Regex to find the <nav class="space-y-1"> block
const navRegex = /<nav class="space-y-1">[\s\S]*?<\/nav>/;
if (navRegex.test(content)) {
    content = content.replace(navRegex, newNav);
    
    // update script for scroll spy
    const oldSpy = `navLinks.forEach(link => {
        link.classList.remove('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        link.classList.add('text-gray-700', 'dark:text-gray-300');
        if (link.getAttribute('href') === "#" + current) {
          link.classList.remove('text-gray-700', 'dark:text-gray-300');
          link.classList.add('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        }
      });`;
      
    const newSpy = `const sidebarItems = document.querySelectorAll('.sidebar-item > a');
      sidebarItems.forEach(link => {
        link.classList.remove('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        link.classList.add('text-gray-700', 'dark:text-gray-300');
        if (link.getAttribute('href') === "#" + current) {
          link.classList.remove('text-gray-700', 'dark:text-gray-300');
          link.classList.add('bg-emerald-50', 'dark:bg-emerald-900/30', 'text-emerald-700', 'font-medium');
        }
      });`;
      
    content = content.replace(oldSpy, newSpy);
    
    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully updated sidebar with nested lessons');
} else {
    console.log('Could not find nav block');
}
