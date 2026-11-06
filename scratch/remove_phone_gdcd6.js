const fs = require('fs');
const path = require('path');

const gdcdPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html');
const civicsPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/civics_6.html');
const indexPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');

let content = fs.readFileSync(gdcdPath, 'utf-8');

// 1. Title & Meta
content = content.replace(
  '<title>Khóa Học Giáo Dục Công Dân Lớp 6 (GDPT 2018: 12 Bài Học Đạo Đức &amp; Pháp Luật • Hotline 111-115 • Trạng Nguyên 60:00) | CodeHub</title>',
  '<title>Khóa Học Giáo Dục Công Dân Lớp 6 (GDPT 2018: 12 Bài Học Đạo Đức &amp; Pháp Luật • Trạng Nguyên 60:00) | CodeHub</title>'
);

content = content.replace(
  'Chương trình GDCD Lớp 6 GDPT 2018 (SGK Kết nối tri thức với cuộc sống): Trọn vẹn 12 Bài học Đạo đức & Pháp luật chuẩn mực 6 phần; Giả lập Hotline cứu hộ 111-115 và Hội thi Trạng Nguyên 60 phút.',
  'Chương trình GDCD Lớp 6 GDPT 2018 (SGK Kết nối tri thức với cuộc sống): Trọn vẹn 12 Bài học Đạo đức & Pháp luật chuẩn mực 6 phần, Sổ tay phẩm chất & pháp luật và Hội thi Trạng Nguyên 60 phút.'
);

// 2. CSS .phone-btn
content = content.replace('.phone-btn:active { transform: scale(0.92); }', '');

// 3. Search placeholder
content = content.replace(
  'placeholder="Tìm bài học (vd: Tự lập, 111, Quyền trẻ em, Tiết kiệm...)"',
  'placeholder="Tìm bài học (vd: Tự lập, Quyền trẻ em, Tiết kiệm...)"'
);

// 4. Navbar Hotline button
const navHotlineRegex = /<button onclick="openHotlineModal\(\)"[^>]*>[\s\S]*?<\/button>\s*/;
content = content.replace(navHotlineRegex, '');

// 5. Hero Hotline button -> replace with Handbook button
const heroHotlineRegex = /<button onclick="openHotlineModal\(\)"[^>]*>[\s\S]*?<\/button>/;
const heroHandbookBtn = `<button onclick="openHandbookModal()" class="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur transition flex items-center gap-2">
              <i class="fa-solid fa-book-bookmark text-blue-200"></i>
              <span>Tra Cứu Sổ Tay GDCD</span>
            </button>`;
content = content.replace(heroHotlineRegex, heroHandbookBtn);

// 6. Bài 10 Content changes
// Line 1178 (Mục tiêu)
content = content.replace(
  '<li>Ghi nhớ và biết sử dụng chính xác các số điện thoại khẩn cấp quốc gia (111, 112, 113, 114, 115).</li>',
  '<li>Nắm vững phương thức liên hệ và tìm kiếm sự trợ giúp khẩn cấp từ các cơ quan chức năng, lực lượng cứu hộ cứu nạn.</li>'
);

// Line 1197 (Hỏa hoạn)
content = content.replace(
  'báo động và lập tức gọi <strong class="font-bold text-slate-900 dark:text-slate-100">114</strong>.',
  'báo động và lập tức báo tin cho <strong class="font-bold text-slate-900 dark:text-slate-100">Lực lượng Cứu hỏa và Cứu nạn cứu hộ</strong>.'
);

// Line 1201 (Giông sét sạc)
content = content.replace(
  'tránh dùng điện thoại cắm sạc',
  'tránh dùng các thiết bị điện tử đang cắm sạc'
);

// Line 1202 & 1203 (Bảng số điện thoại -> Bảng cơ quan cứu hộ)
const tableOldRegex = /<div><p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2"><strong class="font-bold text-slate-900 dark:text-slate-100">3\. Bảng các số điện thoại khẩn cấp quốc gia bắt buộc phải ghi nhớ:<\/strong><\/p>[\s\S]*?<\/table><\/div><\/div>/;
const tableNew = `<div><p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2"><strong class="font-bold text-slate-900 dark:text-slate-100">3. Danh mục các cơ quan chức năng cứu hộ, cứu nạn khẩn cấp quốc gia:</strong></p>
<div class="overflow-x-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><table class="w-full text-left border-collapse text-xs"><tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40"><th class="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"> Cơ quan tiếp nhận </th><th class="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"> Chức năng &amp; Nhiệm vụ khẩn cấp </th><th class="py-2.5 px-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"> Hướng dẫn phối hợp khi báo tin </th></tr><tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40"><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-bold text-slate-900 dark:text-white"> Tổng đài Quốc gia Bảo vệ Trẻ em </td><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300"> Tiếp nhận phản ánh, tư vấn, can thiệp khẩn cấp bảo vệ quyền trẻ em, chống bạo hành &amp; xâm hại trẻ em 24/7. </td><td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400"> Hoàn toàn miễn phí cước, bảo mật thông tin người cung cấp tin. </td></tr><tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40"><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-bold text-slate-900 dark:text-white"> Cơ quan Cứu nạn, Cứu hộ Quốc gia </td><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300"> Yêu cầu trợ giúp tìm kiếm cứu nạn trên phạm vi toàn quốc trong bối cảnh thiên tai bão lũ, sạt lở, tai nạn tàu thuyền. </td><td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400"> Báo rõ tọa độ/địa danh bị cô lập và số lượng nạn nhân gặp nạn. </td></tr><tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40"><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-bold text-slate-900 dark:text-white"> Lực lượng Công an / Cảnh sát </td><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300"> Khẩn cấp can thiệp các vụ việc đe dọa an ninh trật tự, trộm cắp, cướp giật, tội phạm, bắt cóc, bạo lực học đường. </td><td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400"> Cung cấp đặc điểm nhận dạng kẻ gian và hiện trường vụ việc. </td></tr><tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40"><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-bold text-slate-900 dark:text-white"> Lực lượng Cứu hỏa &amp; Cứu nạn </td><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300"> Tiếp nhận tin báo cháy, dập tắt đám cháy, giải cứu người mắc kẹt trong đám cháy, đổ sập nhà, sập hầm lò. </td><td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400"> Báo chính xác địa chỉ ngõ phố, chất gây cháy và người mắc kẹt. </td></tr><tr class="border-b border-slate-200 dark:border-slate-700/60 transition hover:bg-slate-50/50 dark:hover:bg-slate-800/40"><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-bold text-slate-900 dark:text-white"> Đội Cấp cứu Y tế </td><td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300"> Điều động xe cứu thương khẩn cấp đưa nạn nhân tai nạn nặng, người bị đột quỵ, ngộ độc, nguy kịch đến bệnh viện. </td><td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400"> Miêu tả triệu chứng nguy kịch và sơ cứu ban đầu theo chỉ dẫn y tế. </td></tr></table></div></div>`;
content = content.replace(tableOldRegex, tableNew);

// Line 1214 (Ghi nhớ cốt lõi)
content = content.replace(
  'Khi gặp tình huống nguy hiểm: Bình tĩnh là chìa khóa sống còn. Ghi nhớ 5 số hotline khẩn cấp: 111 (Bảo vệ trẻ em), 112 (Cứu nạn), 113 (Công an), 114 (Cứu hỏa), 115 (Cấp cứu y tế) để nhận sự trợ giúp kịp thời.',
  'Khi gặp tình huống nguy hiểm: Bình tĩnh là chìa khóa sống còn. Hãy liên hệ ngay với các cơ quan chức năng: Tổng đài Bảo vệ trẻ em, Đội Cứu nạn cứu hộ quốc gia, Lực lượng Công an, Đội Cảnh sát Cứu hỏa và Đội Cấp cứu Y tế để nhận sự trợ giúp kịp thời.'
);

// 7. Remove Hotline Modal
const modalHotlineRegex = /<!-- MODAL: HOTLINE SIMULATOR \(111 - 115\) -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/;
content = content.replace(modalHotlineRegex, '');

// 8. Update Trắc nghiệm: Câu 13 (Quyền trẻ em) & Câu 25 (Hỏa hoạn)
content = content.replace(
  '<span class="leading-relaxed">Số điện thoại nào là Tổng đài Quốc gia Bảo vệ Trẻ em tại Việt Nam?</span>',
  '<span class="leading-relaxed">Cơ quan, tổ chức nào là đầu mối quốc gia chuyên trách tiếp nhận phản ánh, tư vấn và can thiệp bảo vệ quyền trẻ em tại Việt Nam?</span>'
);
content = content.replace(
  '<span class="text-slate-800 dark:text-slate-200">A. 113</span>',
  '<span class="text-slate-800 dark:text-slate-200">A. Hội Bảo trợ Trẻ em Việt Nam</span>'
);
content = content.replace(
  '<span class="text-slate-800 dark:text-slate-200">B. 115</span>',
  '<span class="text-slate-800 dark:text-slate-200">B. Ủy ban Dân số và Gia đình</span>'
);
content = content.replace(
  '<span class="text-slate-800 dark:text-slate-200">C. 111</span>',
  '<span class="text-slate-800 dark:text-slate-200">C. Tổng đài Quốc gia Bảo vệ Trẻ em</span>'
);
content = content.replace(
  '<span class="text-slate-800 dark:text-slate-200">D. 114</span>',
  '<span class="text-slate-800 dark:text-slate-200">D. Lực lượng Cảnh sát Giao thông</span>'
);

content = content.replace(
  '<span class="leading-relaxed">Số điện thoại khẩn cấp 114 dùng để liên hệ với cơ quan nào?</span>',
  '<span class="leading-relaxed">Khi xảy ra hỏa hoạn, cháy nổ nguy hiểm hoặc sập công trình, chúng ta cần khẩn cấp báo tin cho cơ quan nào?</span>'
);
content = content.replace(
  '<span class="text-slate-800 dark:text-slate-200">B. Cứu hỏa và cứu nạn cứu hộ</span>',
  '<span class="text-slate-800 dark:text-slate-200">B. Lực lượng Cảnh sát Phòng cháy, Chữa cháy &amp; Cứu nạn cứu hộ</span>'
);

content = content.replace(
  'Báo ngay cho giáo viên chủ nhiệm, giám thị hoặc tổng đài 111 để được hỗ trợ',
  'Báo ngay cho giáo viên chủ nhiệm, giám thị hoặc Tổng đài Quốc gia Bảo vệ Trẻ em để được hỗ trợ'
);

// 9. Remove Hotline JS logic
const jsHotlineRegex = /\/\/ HOTLINE MODAL & DIALER LOGIC[\s\S]*?\/\/ HANDBOOK MODAL/;
content = content.replace(jsHotlineRegex, '// HANDBOOK MODAL');

// 10. Update contest explanation keys
content = content.replace(
  '"Tổng đài 111 là đường dây nóng miễn phí 24/7 bảo vệ quyền trẻ em Việt Nam."',
  '"Tổng đài Quốc gia Bảo vệ Trẻ em là cơ quan chuyên trách tiếp nhận phản ánh và bảo vệ quyền trẻ em 24/7 tại Việt Nam."'
);
content = content.replace(
  '"114 là số điện thoại khẩn cấp gọi lực lượng Cảnh sát phòng cháy chữa cháy và cứu nạn cứu hộ."',
  '"Lực lượng Cảnh sát phòng cháy chữa cháy và cứu nạn cứu hộ là cơ quan chuyên trách dập tắt hỏa hoạn và giải cứu người mắc kẹt."'
);

content = content.replace(
  'nhớ chính xác các số hotline cứu trợ!',
  'nắm chắc các kĩ năng tự bảo vệ bản thân và kiến thức pháp luật!'
);
content = content.replace(
  'Em hãy ôn lại bài học về 4 nhóm quyền trẻ em và hotline khẩn cấp rồi thử sức lại nhé. Cố lên!',
  'Em hãy ôn lại bài học về 4 nhóm quyền trẻ em và kĩ năng ứng phó tình huống nguy hiểm rồi thử sức lại nhé. Cố lên!'
);

// Write to gdcd_6.html and civics_6.html
fs.writeFileSync(gdcdPath, content, 'utf-8');
fs.writeFileSync(civicsPath, content, 'utf-8');
console.log('Successfully updated gdcd_6.html and civics_6.html');

// 11. Update index.html
let indexContent = fs.readFileSync(indexPath, 'utf-8');
indexContent = indexContent.replace(
  'title="Chương trình Giáo Dục Công Dân 6 (GDPT 2018 - Kết nối tri thức): 12 bài học Đạo đức & Pháp luật. Tích hợp giả lập Bàn phím số cứu hộ Hotline 111-115, Sổ tay quyền trẻ em và Hội thi Trạng Nguyên 25 câu."',
  'title="Chương trình Giáo Dục Công Dân 6 (GDPT 2018 - Kết nối tri thức): 12 bài học Đạo đức & Pháp luật. Tích hợp Sổ tay phẩm chất & pháp luật, 4 nhóm quyền trẻ em và Hội thi Trạng Nguyên 25 câu."'
);
indexContent = indexContent.replace(
  'Kết nối tri thức (GDPT 2018): 12 bài học đạo đức &amp; pháp luật (Tự lập, Yêu thương, Tôn trọng sự thật, Hotline 111-115, 4 nhóm quyền trẻ em). Tích hợp Bàn phím số cứu hộ &amp; Trạng Nguyên 60:00.',
  'Kết nối tri thức (GDPT 2018): 12 bài học đạo đức &amp; pháp luật (Tự lập, Yêu thương, Tôn trọng sự thật, Kĩ năng an toàn, 4 nhóm quyền trẻ em). Tích hợp Sổ tay phẩm chất &amp; Trạng Nguyên 60:00.'
);
fs.writeFileSync(indexPath, indexContent, 'utf-8');
console.log('Successfully updated index.html');
