// scratch/fix_svg_tags.js
const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <strong> with <tspan font-weight="bold"> and </strong> with </tspan>
  content = content.replace(/<strong>/g, '<tspan font-weight="bold">');
  content = content.replace(/<\/strong>/g, '</tspan>');

  // Also replace any <b> with <tspan font-weight="bold"> and </b> with </tspan>
  content = content.replace(/<b>/g, '<tspan font-weight="bold">');
  content = content.replace(/<\/b>/g, '</tspan>');

  // Specific improvement for Lesson 4 C3-C4-CAM so it fits nicely
  if (filePath.includes('p1')) {
    const l4Old = `<rect x="395" y="20" width="340" height="150" rx="12" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" stroke-width="1.5" />
      <text x="565" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309" class="dark:fill-amber-300">SO SÁNH C3 - C4 - CAM</text>
      <text x="410" y="68" font-size="11" fill="#92400e" class="dark:fill-amber-400"><tspan font-weight="bold">• C3 (Lúa, cam, đậu):</tspan> Cố định tạo 3-PGA, có quang hô hấp khi nóng khô làm giảm 25-50% năng suất.</text>
      <text x="410" y="100" font-size="11" fill="#92400e" class="dark:fill-amber-400"><tspan font-weight="bold">• C4 (Ngô, mía):</tspan> Tách biệt không gian (Mô giậu cố định sơ bộ, Bao bó mạch chạy Calvin) → Không quang hô hấp, năng suất rất cao.</text>
      <text x="410" y="132" font-size="11" fill="#92400e" class="dark:fill-amber-400"><tspan font-weight="bold">• CAM (Xương rồng, dứa):</tspan> Tách biệt thời gian (Mở khí khổng ban đêm nhận CO₂, ban ngày đóng giữ nước) → Tiết kiệm nước cực đại.</text>`;

    const l4New = `<rect x="395" y="20" width="340" height="150" rx="12" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" stroke-width="1.5" />
      <text x="565" y="38" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309" class="dark:fill-amber-300">SO SÁNH C3 - C4 - CAM</text>
      <text x="410" y="58" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• C3 (Lúa, cam, đậu):</text>
      <text x="420" y="73" font-size="10" fill="#92400e" class="dark:fill-amber-400">Cố định 3-PGA, có quang hô hấp khi khô nóng</text>
      <text x="410" y="94" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• C4 (Ngô, mía):</text>
      <text x="420" y="109" font-size="10" fill="#92400e" class="dark:fill-amber-400">Tách biệt không gian (Mô giậu + Bao bó mạch) → Năng suất cao</text>
      <text x="410" y="130" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• CAM (Xương rồng, dứa):</text>
      <text x="420" y="145" font-size="10" fill="#92400e" class="dark:fill-amber-400">Tách biệt thời gian (Mở đêm, đóng ngày) → Chống hạn cực tốt</text>`;

    if (content.includes('SO SÁNH C3 - C4 - CAM')) {
      content = content.replace(l4Old, l4New);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned file:', filePath);
}

cleanFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/sinhhoc11_lesson_diagrams_p1.js');
cleanFile('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/sinhhoc11_lesson_diagrams_p2.js');
