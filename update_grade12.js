const fs = require('fs');
let content = fs.readFileSync('courses/grade_12.html', 'utf8');

// 1. Update Title and Heading
content = content.replace(/<title>Tin Học 12 - Chân Trời Sáng Tạo<\/title>/g, '<title>Tin Học 12 - Kết nối tri thức<\/title>');
content = content.replace(/Tin Học 12: Chân Trời Sáng Tạo/g, 'Tin Học 12: Kết nối tri thức với cuộc sống');
content = content.replace(/Định hướng Khoa học Máy tính \(CS\)/g, 'Định hướng Tin học ứng dụng (ICT)');

// 2. Update Sidebar Navigation
content = content.replace(/Chủ đề A: Trí tuệ nhân tạo \(AI\)/g, 'Chủ đề A: Máy tính và Xã hội tri thức');
content = content.replace(
    /<span class="truncate">Chủ đề B: Mạng máy tính<\/span>/g, 
    '<span class="truncate">Chủ đề B: Mạng máy tính và Internet</span>'
);
content = content.replace(
    /<span class="truncate">Chủ đề G: Hướng nghiệp CNTT<\/span>/g, 
    '<span class="truncate">Chủ đề G: Hướng nghiệp với Tin học</span>'
);
// Remove Topic F from sidebar
content = content.replace(/<a href="#topicF"[\s\S]*?<span class="truncate">Chủ đề F: HTML & Thiết kế Web<\/span>\s*<\/a>/g, '');

// 3. Update Section Headers
content = content.replace(
    /<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Chủ đề A: Trí tuệ nhân tạo\s*\(AI\)<\/h2>/g,
    '<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Chủ đề A: Máy tính và Xã hội tri thức</h2>'
);
content = content.replace(
    /<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Chủ đề B: Mạng máy tính\s*<\/h2>/g,
    '<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Chủ đề B: Mạng máy tính và Internet</h2>'
);
content = content.replace(
    /<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Chủ đề G: Hướng nghiệp CNTT\s*<\/h2>/g,
    '<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Chủ đề G: Hướng nghiệp với Tin học</h2>'
);

// 4. Remove Bài 7, 8, 9 from Topic B
// They are between: <!-- Bài 7: HTML/CSS --> and <!-- Topic D -->
content = content.replace(/<!-- Bài 7: HTML\/CSS -->[\s\S]*?(?=<!-- Topic D -->)/g, '\n                        ');

// 5. Remove Topic F section entirely
// It is between: <!-- Topic F --> and <!-- Topic G -->
content = content.replace(/<!-- Topic F -->[\s\S]*?(?=<!-- Topic G -->)/g, '\n                    ');

// 6. Update Footer
content = content.replace(/Chương trình Chân Trời Sáng Tạo\./g, 'Chương trình Kết nối tri thức với cuộc sống.');

fs.writeFileSync('courses/grade_12.html', content);
console.log('Update completed!');
