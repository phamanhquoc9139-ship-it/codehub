const path = require('path');
const lessons = require(path.join(__dirname, 'toan11_data.js'));
const coreCards = require(path.join(__dirname, 'toan11_core_cards.js'));
const cases = require(path.join(__dirname, 'toan11_cases.js'));
const svgs = require(path.join(__dirname, 'toan11_svgs.js'));
const reviewArena = require(path.join(__dirname, 'toan11_review_arena.js'));

console.log('Sample lesson 1:', Object.keys(lessons[0]));
console.log('Sample coreCard 1[0]:', Object.keys(coreCards['1'][0]));
console.log('Sample case 1[0]:', Object.keys(cases['1'][0]));
console.log('Sample summaryTable row 0:', Object.keys(reviewArena.summaryTable[0]));
console.log('Sample formulaTable row 0:', Object.keys(reviewArena.formulaTable[0]));
console.log('Sample mistakesAndTips row 0:', Object.keys(reviewArena.mistakesAndTips[0]));
console.log('Sample arenaQuestion 0:', Object.keys(reviewArena.arenaQuestions[0]));
