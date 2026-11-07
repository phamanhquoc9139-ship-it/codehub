const svgs = require('./toan12_svgs.js');
console.log('keys in svgs:', Object.keys(svgs));
console.log('svg3 length:', svgs.svg3_oxyz_coordinate_system ? svgs.svg3_oxyz_coordinate_system.length : 0);
const lessonDiagrams = require('./toan12_lesson_diagrams.js');
console.log('diagram_bai7 contains <svg?:', lessonDiagrams.diagram_bai7 ? lessonDiagrams.diagram_bai7.includes('<svg') : false);
