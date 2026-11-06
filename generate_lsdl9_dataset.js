const fs = require('fs');

// Read raw user prompt
const rawContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/user_prompt_lsdl9.txt', 'utf8');

// Helper to extract lesson body
function extractSections(startStr, endStr, regexPattern) {
  const start = rawContent.indexOf(startStr);
  const end = endStr ? rawContent.indexOf(endStr) : rawContent.length;
  const slice = rawContent.substring(start, end);
  const items = [];
  let m;
  while ((m = regexPattern.exec(slice)) !== null) {
    items.push({
      num: parseInt(m[1], 10),
      title: m[2].trim(),
      body: m[3].trim()
    });
  }
  return items;
}

const histLessons = extractSections('# PHẦN LỊCH SỬ', '# PHẦN ĐỊA LÍ', /### BÀI (\d+)\.\s*([^\n\r]+)([\s\S]*?)(?=(?:### BÀI \d+|## CHƯƠNG|# |$))/g);
const geoLessons = extractSections('# PHẦN ĐỊA LÍ', '# CHỦ ĐỀ CHUNG', /### BÀI (\d+)\.\s*([^\n\r]+)([\s\S]*?)(?=(?:### BÀI \d+|## CHƯƠNG|# |$))/g);
const topics = extractSections('# CHỦ ĐỀ CHUNG', '# KĨ NĂNG ĐỊA LÍ VÀ KHAI THÁC TƯ LIỆU LỊCH SỬ', /## CHỦ ĐỀ (\d+)\.\s*([^\n\r]+)([\s\S]*?)(?=(?:## CHỦ ĐỀ \d+|$))/g);

console.log('Parsed: Hist =', histLessons.length, ', Geo =', geoLessons.length, ', Topics =', topics.length);

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/parsed_raw_modules.json', JSON.stringify({ histLessons, geoLessons, topics }, null, 2), 'utf8');
console.log('Saved parsed_raw_modules.json');
