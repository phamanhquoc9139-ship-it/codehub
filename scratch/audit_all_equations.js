const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch/vatly10_parsed_raw.json', 'utf8'));

const { parseBlocksFixed } = require('./test_equation_parser.js');

let totalEqs = 0;
let badEqs = 0;

for (let i = 1; i <= 34; i++) {
  const blocks = parseBlocksFixed(data.lessonsData[i].body);
  const eqBlocks = blocks.filter(b => b.type === 'equation');
  totalEqs += eqBlocks.length;
  eqBlocks.forEach(eq => {
    const hasOpen = eq.math.startsWith('\\[') || eq.math.startsWith('$$');
    const hasClose = eq.math.endsWith('\\]') || eq.math.endsWith('$$');
    if (!hasOpen || !hasClose) {
      console.error(`Lesson ${i} has incomplete equation:`, eq.math);
      badEqs++;
    }
  });
}

console.log('Total equations parsed:', totalEqs);
console.log('Incomplete/broken equations:', badEqs);
