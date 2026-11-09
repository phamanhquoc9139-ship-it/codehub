const fs = require('fs');

console.log("=== CHECKING HOA 12 ===");
const hoa = fs.readFileSync('courses/hoa_12.html', 'utf8');
console.log("hoa_12 size:", hoa.length);
console.log("Contains 'Kiến thức trọng tâm phần 2':", hoa.includes('Kiến thức trọng tâm phần 2'));
console.log("Contains '# Chương 2. Carbohydrate':", hoa.includes('# Chương 2. Carbohydrate'));
console.log("Contains undefined:", hoa.includes('undefined'));

console.log("\n=== CHECKING DIA 12 ===");
const dia = fs.readFileSync('courses/dia_12.html', 'utf8');
console.log("dia_12 size:", dia.length);
console.log("Contains empty Hai mặt của đô thị hóa:", dia.includes('Hai mặt của đô thị hóa') && dia.includes('Tác động tích cực:'));
console.log("Contains undefined:", dia.includes('undefined'));
