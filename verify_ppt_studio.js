const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'cs-learning-platform');
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const pptJs = fs.readFileSync(path.join(baseDir, 'scripts', 'pptx-presenter.js'), 'utf8');

const requiredIds = [
  'presentation-studio',
  'ppt-locked-view',
  'ppt-unlocked-view',
  'ppt-user-badge',
  'ppt-dropzone',
  'ppt-file-input',
  'ppt-status-msg',
  'ppt-deck-list',
  'ppt-stage-wrapper',
  'ppt-active-deck-title',
  'ppt-timer-btn',
  'ppt-timer-display',
  'ppt-laser-btn',
  'ppt-pptx-viewer',
  'ppt-slide-stage',
  'ppt-slide-canvas',
  'ppt-laser-dot',
  'ppt-prev-btn',
  'ppt-slide-counter',
  'ppt-next-btn',
  'ppt-notes-panel',
  'ppt-notes-content',
  'ppt-thumbnails',
  'ppt-pdf-frame'
];

let errors = 0;
for (const id of requiredIds) {
  if (!indexHtml.includes('id="' + id + '"')) {
    console.error('Missing ID in index.html:', id);
    errors++;
  }
}

// Check div balance inside #presentation-studio
const startIdx = indexHtml.indexOf('<section class="py-14');
const endIdx = indexHtml.indexOf('</section>', startIdx) + '</section>'.length;
const studioBlock = indexHtml.substring(startIdx, endIdx);
const openDivs = (studioBlock.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (studioBlock.match(/<\/div>/gi) || []).length;
console.log('#presentation-studio div balance: open=' + openDivs + ', close=' + closeDivs);
if (openDivs !== closeDivs) {
  console.error('Div mismatch inside #presentation-studio!');
  errors++;
}

// Check script includes
if (!indexHtml.includes('jszip.min.js') || !indexHtml.includes('scripts/pptx-presenter.js')) {
  console.error('Missing script tags for JSZip or pptx-presenter.js!');
  errors++;
}

// Check exposed functions in pptx-presenter.js match HTML onclicks
const exposedFns = [
  'pptGoToSlide',
  'pptNextSlide',
  'pptPrevSlide',
  'pptLaunchDeck',
  'pptDeleteDeck',
  'pptToggleFullscreen',
  'pptToggleLaser',
  'pptToggleNotes',
  'pptToggleTimer',
  'pptResetTimer',
  'pptCloseStage'
];
for (const fn of exposedFns) {
  if (!pptJs.includes('window.' + fn)) {
    console.error('Missing window.' + fn + ' in pptx-presenter.js');
    errors++;
  }
}

// Ensure counters on index.html are still intact
console.log('Total courses stat 281 intact:', indexHtml.includes('id="stat-total-courses">281</div>'));
console.log('Tin & AI (51) intact:', indexHtml.includes('Tin & AI (51)'));

if (errors === 0) {
  console.log('ALL TESTS PASSED! PowerPoint Presentation Studio is properly integrated into index.html.');
} else {
  console.error('Errors found:', errors);
  process.exit(1);
}
