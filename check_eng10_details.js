const fs = require('fs');
const dir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';

const t10 = fs.readFileSync(dir + '/tienganh10.html', 'utf8');
const t_10 = fs.readFileSync(dir + '/tienganh_10.html', 'utf8');
console.log('tienganh10 vs tienganh_10 identical:', t10 === t_10);

const cd10 = fs.readFileSync(dir + '/chuyende_tienganh_10.html', 'utf8');
console.log('chuyende_tienganh_10 has mobileMenuBtn:', cd10.includes('mobileMenuBtn'));
const btnIdx = cd10.indexOf('mobileMenuBtn');
if (btnIdx !== -1) console.log(cd10.substring(btnIdx - 100, btnIdx + 250));

// Check header in tienganh_10.html
const hIdx = t_10.indexOf('<header');
console.log('\n--- tienganh_10.html header ---');
console.log(t_10.substring(hIdx, hIdx + 900));

// Check end of tienganh_10.html script
console.log('\n--- tienganh_10.html tail ---');
console.log(t_10.substring(t_10.length - 800));
