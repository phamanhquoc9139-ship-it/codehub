const fs = require('fs');
const path = require('path');

const gdcdPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_7.html');
const civicsPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/civics_7.html');
const indexPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');

let content = fs.readFileSync(gdcdPath, 'utf-8');

// 1. Title
content = content.replace(
  '<title>Khóa Học Giáo Dục Công Dân 7 (GDPT 2018: 4 Mạch • 10 Bài Học • Hotline 111 • Trạng Nguyên 60:00) | CodeHub</title>',
  '<title>Khóa Học Giáo Dục Công Dân 7 (GDPT 2018: 4 Mạch • 10 Bài Học • Trạng Nguyên 60:00) | CodeHub</title>'
);

// 2. Remove Navbar Hotline Button
const navHotlineRegex = /<!-- Hotline Cứu Hộ Modal Button -->\s*<button onclick="openHotlineModal\(\)"[^>]*>[\s\S]*?<\/button>\s*/;
content = content.replace(navHotlineRegex, '');

// 3. Line 1769 in Bài 7: bạo lực học đường
content = content.replace(
  'hoặc gọi đường dây nóng 111;',
  'hoặc liên hệ Tổng đài Quốc gia Bảo vệ Trẻ em, cơ quan chức năng;'
);

// 4. Line 1838: Quiz in Bài 7
content = content.replace(
  '<p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">Số điện thoại của Tổng đài Quốc gia Bảo vệ Trẻ em tại Việt Nam là số nào?</p>',
  '<p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">Cơ quan, tổ chức nào là đầu mối quốc gia chuyên trách tiếp nhận thông tin, tư vấn và can thiệp bảo vệ trẻ em 24/7 tại Việt Nam?</p>'
);

content = content.replace(
  `<button onclick="checkQuizAnswer(13, 0, 0, '111 là đường dây nóng miễn phí tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">A</span>
                <span>111</span>
              </button>
            
              <button onclick="checkQuizAnswer(13, 1, 0, '111 là đường dây nóng miễn phí tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">B</span>
                <span>113</span>
              </button>
            
              <button onclick="checkQuizAnswer(13, 2, 0, '111 là đường dây nóng miễn phí tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">C</span>
                <span>114</span>
              </button>
            
              <button onclick="checkQuizAnswer(13, 3, 0, '111 là đường dây nóng miễn phí tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">D</span>
                <span>115</span>
              </button>`,
  `<button onclick="checkQuizAnswer(13, 0, 0, 'Tổng đài Quốc gia Bảo vệ Trẻ em tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">A</span>
                <span>Tổng đài Quốc gia Bảo vệ Trẻ em</span>
              </button>
            
              <button onclick="checkQuizAnswer(13, 1, 0, 'Tổng đài Quốc gia Bảo vệ Trẻ em tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">B</span>
                <span>Hội Khuyến học Việt Nam</span>
              </button>
            
              <button onclick="checkQuizAnswer(13, 2, 0, 'Tổng đài Quốc gia Bảo vệ Trẻ em tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">C</span>
                <span>Ủy ban Dân số và Gia đình</span>
              </button>
            
              <button onclick="checkQuizAnswer(13, 3, 0, 'Tổng đài Quốc gia Bảo vệ Trẻ em tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7.')" 
                      class="quiz-btn-13 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">D</span>
                <span>Trung tâm Trợ giúp Pháp lý thanh thiếu niên</span>
              </button>`
);

// 5. Line 2070: thay "điện thoại đắt tiền" bằng "đồ dùng công nghệ đắt tiền"
content = content.replace(
  'Vay mượn bạn bè để đua đòi mua điện thoại đắt tiền',
  'Vay mượn bạn bè để đua đòi mua đồ công nghệ đắt tiền'
);

// 6. Line 2433: Bài 10
content = content.replace(
  'hoặc gọi đường dây nóng 111 để bảo vệ quyền học tập của Hải.',
  'hoặc liên hệ Tổng đài Quốc gia Bảo vệ Trẻ em để bảo vệ quyền học tập của Hải.'
);

// 7. Remove Modal 1: Hotline Bảo Vệ Khẩn Cấp
const modal1Regex = /<!-- Modal 1: Hotline Bảo Vệ Khẩn Cấp -->[\s\S]*?<!-- Modal 2: Sổ Tay Pháp Luật GDCD 7 -->/;
content = content.replace(modal1Regex, '<!-- Modal 2: Sổ Tay Pháp Luật GDCD 7 -->');

// 8. Remove Hotline JS functions
const jsHotlineRegex = /function openHotlineModal\(\) \{[\s\S]*?document\.getElementById\('hotlineModal'\)\.classList\.add\('hidden'\);\s*\}\s*/;
content = content.replace(jsHotlineRegex, '');

// 9. Update Trạng Nguyên exam question 37
content = content.replace(
  '"Tổng đài 111 hoặc Công an phường/xã số 113"',
  '"Tổng đài Quốc gia Bảo vệ Trẻ em hoặc Cơ quan Công an gần nhất"'
);

// Write to gdcd_7.html & civics_7.html
fs.writeFileSync(gdcdPath, content, 'utf-8');
fs.writeFileSync(civicsPath, content, 'utf-8');
console.log('Successfully updated gdcd_7.html and civics_7.html');

// 10. Update index.html for GDCD 7
let indexContent = fs.readFileSync(indexPath, 'utf-8');
indexContent = indexContent.replace(
  'title="Chương trình Giáo Dục Công Dân 7 (GDPT 2018 - Kết nối tri thức): 4 Mạch nội dung, 10 bài học chuẩn mực (Đạo đức, Kĩ năng sống, Kinh tế, Pháp luật). Tích hợp Hotline 111, Sổ tay pháp luật & Trạng Nguyên 60:00."',
  'title="Chương trình Giáo Dục Công Dân 7 (GDPT 2018 - Kết nối tri thức): 4 Mạch nội dung, 10 bài học chuẩn mực (Đạo đức, Kĩ năng sống, Kinh tế, Pháp luật). Tích hợp Sổ tay pháp luật & Trạng Nguyên 60:00."'
);

const lines = indexContent.split('\r\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Hotline 111') && i > 2500 && i < 2900) {
    lines[i-1] = lines[i-1].replace('text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60', 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60')
                           .replace('border-rose-200 dark:border-rose-800', 'border-emerald-200 dark:border-emerald-800');
    lines[i] = `                                        <i class="fa-solid fa-gavel text-[10px]"></i> Sổ Tay Pháp Luật`;
    console.log('Updated index.html GDCD 7 badge at line', i + 1);
    break;
  }
}
fs.writeFileSync(indexPath, lines.join('\r\n'), 'utf-8');
console.log('Successfully updated index.html');
