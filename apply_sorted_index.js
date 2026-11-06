const fs = require('fs');
const { getCards } = require('./parse_helper.js');

const indexPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html';
let html = fs.readFileSync(indexPath, 'utf8');

const cards = getCards();
console.log('Total cards extracted:', cards.length);

// Sort cards
cards.sort((a, b) => {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  }
  return a.cleanSubject.localeCompare(b.cleanSubject, 'vi', { sensitivity: 'base' });
});

// Construct sorted grid HTML
let sortedGridHtml = '\n';
let currentGroup = null;

cards.forEach(c => {
  if (c.groupOrder !== currentGroup) {
    currentGroup = c.groupOrder;
    const groupComment = currentGroup <= 12 ? `<!-- ==================== KHỐI LỚP ${currentGroup} ==================== -->` :
                         currentGroup === 70 ? `<!-- ==================== LẬP TRÌNH NỀN TẢNG ==================== -->` :
                         currentGroup === 80 ? `<!-- ==================== CÔNG CỤ AI & TRỢ LÝ HỌC TẬP ==================== -->` :
                         currentGroup === 90 ? `<!-- ==================== LUYỆN THI HSG & OLYMPIC ==================== -->` :
                         `<!-- ==================== KỸ NĂNG & NĂNG KHIẾU ==================== -->`;
    sortedGridHtml += `                    ${groupComment}\n`;
  }
  sortedGridHtml += `                    ${c.html}\n\n`;
});

// Find grid boundaries in index.html
const gridStartTag = '<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="courses-grid">';
const gridStartIndex = html.indexOf(gridStartTag);
const gridEndIndex = html.indexOf('<div id="no-courses-found"');

if (gridStartIndex === -1 || gridEndIndex === -1) {
  console.error("Could not find grid boundaries in index.html");
  process.exit(1);
}

const beforeGrid = html.substring(0, gridStartIndex + gridStartTag.length);
const afterGrid = html.substring(gridEndIndex);

const updatedHtml = beforeGrid + sortedGridHtml + '                </div>\n\n                ' + afterGrid;

// Update filter button for "Tất cả" count to 214
let finalHtml = updatedHtml.replace(/id="btn-filter-all"[^>]*>Tất cả \(\d+\)<\/button>/, 'id="btn-filter-all" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white text-blue-700 shadow-sm transition">Tất cả (' + cards.length + ')</button>');

// If filter for Tiểu học doesn't exist, we can add it or make sure grade-thcs, grade-10, 11, 12, etc. work nicely
fs.writeFileSync(indexPath, finalHtml, 'utf8');
console.log(`Successfully updated ${indexPath} with ${cards.length} courses in ASCENDING ORDER!`);
