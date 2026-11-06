const fs = require('fs');
const toan9 = fs.readFileSync('courses/toan_9.html', 'utf8');

const mIdx = toan9.indexOf('<!-- ==================== MODALS ==================== -->');
const fIdx = toan9.indexOf('<!-- ==================== FOOTER ==================== -->');
const modalsContent = toan9.substring(mIdx, fIdx);

console.log('Modals content size:', modalsContent.length);
// List modal IDs
const modalIds = modalsContent.match(/id="modal-[^"]+"/g);
console.log('Modal IDs found:', modalIds);

// Inspect modal-mistakes
const misIdx = modalsContent.indexOf('id="modal-mistakes"');
console.log('modal-mistakes preview:');
console.log(modalsContent.substring(misIdx, misIdx + 1500));
