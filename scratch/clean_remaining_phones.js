const fs = require('fs');
const path = require('path');

const gdcdPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html');
const civicsPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/civics_6.html');

let content = fs.readFileSync(gdcdPath, 'utf-8');

// Line 1282
content = content.replace(
  'Viết ra giấy dán tủ lạnh 5 số điện thoại khẩn cấp (111, 112, 113, 114, 115) và thực hành diễn tập tình huống thoát hiểm khi nhà có chuông báo cháy cùng cả gia đình.',
  'Viết ra giấy dán tủ lạnh danh bạ các cơ quan chức năng cứu hộ khẩn cấp cần liên hệ và thực hành diễn tập tình huống thoát hiểm khi có hỏa hoạn cùng cả gia đình.'
);

// Line 1919
content = content.replace(
  '<strong class="font-bold text-slate-900 dark:text-slate-100">Bước 4: Gọi điện tới Tổng đài Quốc gia 111:</strong> Gọi tổng đài bảo vệ trẻ em <strong class="font-bold text-slate-900 dark:text-slate-100">111</strong> (miễn phí mọi mạng viễn thông) để được các chuyên gia pháp lý và tâm lý can thiệp giải cứu khẩn cấp.',
  '<strong class="font-bold text-slate-900 dark:text-slate-100">Bước 4: Liên hệ Tổng đài Quốc gia Bảo vệ Trẻ em:</strong> Liên hệ Tổng đài Quốc gia Bảo vệ Trẻ em (hoạt động 24/7 hoàn toàn miễn phí) để được các chuyên gia pháp lý và tâm lý can thiệp hỗ trợ khẩn cấp.'
);

// Line 1932
content = content.replace(
  'Học sinh cần hiểu quyền, làm tròn bổn phận và luôn nhớ số 111 để tìm sự can thiệp, bảo vệ khi cần thiết.',
  'Học sinh cần hiểu quyền, làm tròn bổn phận và chủ động liên hệ Tổng đài Quốc gia Bảo vệ Trẻ em để tìm sự can thiệp, bảo vệ khi cần thiết.'
);

fs.writeFileSync(gdcdPath, content, 'utf-8');
fs.writeFileSync(civicsPath, content, 'utf-8');
console.log('Successfully cleaned all remaining phone numbers from gdcd_6.html and civics_6.html');
