const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

// Kiểm tra xem trong toan_7.html hiện tại, bài 15 có các chuỗi từ ảnh 2 không
console.log('Includes "Các trường hợp bằng nhau đặc biệt":', t7.includes('Các trường hợp bằng nhau đặc biệt'));
console.log('Includes "Huyền - Áp dụng trực tiếp":', t7.includes('Huyền - Áp dụng trực tiếp'));
console.log('Includes "c-g-c":', t7.includes('c-g-c'));
console.log('Includes "Py-ta-go":', t7.includes('Py-ta-go'));
