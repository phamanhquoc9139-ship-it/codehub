const path = require('path');
const lessons = require(path.join(__dirname, 'toan11_data.js'));
const coreCards = require(path.join(__dirname, 'toan11_core_cards.js'));
const cases = require(path.join(__dirname, 'toan11_cases.js'));
const svgs = require(path.join(__dirname, 'toan11_svgs.js'));
const reviewArena = require(path.join(__dirname, 'toan11_review_arena.js'));

console.log('lessons length:', lessons.length);
console.log('coreCards keys:', Object.keys(coreCards));
console.log('cases keys:', Object.keys(cases));
console.log('svgs keys:', Object.keys(svgs));
console.log('reviewArena keys:', Object.keys(reviewArena));
