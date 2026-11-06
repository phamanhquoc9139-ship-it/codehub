const fs = require('fs');
const path = require('path');

const gdcdPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_7.html');
const civicsPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/civics_7.html');

let content = fs.readFileSync(gdcdPath, 'utf-8');

// Line 2624
content = content.replace(
  'thông báo ngay cho ban giám hiệu, bố mẹ hoặc gọi tổng đài 111.',
  'thông báo ngay cho ban giám hiệu, bố mẹ hoặc liên hệ Tổng đài Quốc gia Bảo vệ Trẻ em.'
);

// examData index 20
content = content.replace(
  '{"q":"Số tổng đài điện thoại Quốc gia Bảo vệ Trẻ em miễn phí tại Việt Nam là:","opts":["111","113","114","115"],"ans":0}',
  '{"q":"Cơ quan, tổ chức nào là đầu mối quốc gia chuyên trách tiếp nhận thông tin, tư vấn và can thiệp bảo vệ trẻ em 24/7 tại Việt Nam?","opts":["Tổng đài Quốc gia Bảo vệ Trẻ em","Lực lượng Cảnh sát Giao thông","Ủy ban Dân số và Gia đình","Trung tâm Trợ giúp Pháp lý thanh thiếu niên"],"ans":0}'
);

fs.writeFileSync(gdcdPath, content, 'utf-8');
fs.writeFileSync(civicsPath, content, 'utf-8');
console.log('Successfully cleaned examData and modal 3 in gdcd_7.html & civics_7.html');
