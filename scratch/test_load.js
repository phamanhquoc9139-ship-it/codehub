const d = require('./scratch/toan11_data.js');
const c = require('./scratch/toan11_core_cards.js');
const cs = require('./scratch/toan11_cases.js');
const s = require('./scratch/toan11_svgs.js');
const r = require('./scratch/toan11_review_arena.js');
console.log('Loaded successfully! Lessons:', d.lessons.length, 'Cards:', Object.keys(c.coreCards).length, 'Cases:', Object.keys(cs.practicalCases).length, 'SVGs:', Object.keys(s.diagramSVGs).length, 'Arena Qs:', r.arenaQuestions.length);
