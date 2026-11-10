const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';

const t10 = fs.readFileSync(path.join(dir, 'tienganh_10.html'), 'utf8');
const t10Alt = fs.readFileSync(path.join(dir, 'tienganh10.html'), 'utf8');
const cd10 = fs.readFileSync(path.join(dir, 'chuyende_tienganh_10.html'), 'utf8');

console.log('tienganh_10 === tienganh10:', t10 === t10Alt);
console.log('tienganh_10 uses lg:sticky:', t10.includes('lg:col-span-4 lg:sticky lg:top-24'));
console.log('tienganh_10 has unprefixed sticky aside:', /<aside[^>]*\bsticky\b/.test(t10) && !t10.includes('lg:sticky'));
console.log('tienganh_10 has mobileTocToggleBtn:', t10.includes('id="mobileTocToggleBtn"'));
console.log('tienganh_10 has toggleMobileToc():', t10.includes('function toggleMobileToc()'));
console.log('chuyende_tienganh_10 aside hidden on mobile:', cd10.includes('<aside class="hidden lg:block lg:w-1/4">'));

const openAside1 = (t10.match(/<aside/gi) || []).length;
const closeAside1 = (t10.match(/<\/aside>/gi) || []).length;
console.log('tienganh_10 aside balance:', openAside1, closeAside1);
