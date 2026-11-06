const fs = require('fs');

const builderPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/build_gdtc_7_page.js';
const illustrationsModule = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/generate_all_illustrations.js', 'utf8');

let builder = fs.readFileSync(builderPath, 'utf8');

// Insert getTopicIllustration function right before renderTopics()
const targetInsertFunc = 'function renderTopics() {';
const illustrationsCode = `
// ==================== HÌNH MINH HỌA KĨ THUẬT & SÂN BÃI THỂ THAO ====================
` + illustrationsModule.replace('module.exports = { getTopicIllustration };', '') + `

function renderTopics() {`;

builder = builder.replace(targetInsertFunc, illustrationsCode);

// Insert call inside renderTopics right after generateMindmapSvg
const targetCall = '${generateMindmapSvg(t)}\n          </div>\n        </div>';

const callCode = '${generateMindmapSvg(t)}\n          </div>\n        </div>\n\n        <!-- HÌNH MINH HỌA KĨ THUẬT ĐỘNG TÁC & SÂN BÃI TRỰC QUAN -->\n        ${getTopicIllustration(t.id)}';

if (builder.includes(targetCall)) {
  builder = builder.replace(targetCall, callCode);
  console.log('Replaced targetCall with callCode');
} else {
  console.log('targetCall not found, searching alternative...');
  const idx = builder.indexOf('${generateMindmapSvg(t)}');
  if (idx !== -1) {
    console.log('Context around generateMindmapSvg:', builder.substring(idx - 50, idx + 100));
  }
}

fs.writeFileSync(builderPath, builder, 'utf8');
console.log('Successfully updated build_gdtc_7_page.js with technical illustrations!');
