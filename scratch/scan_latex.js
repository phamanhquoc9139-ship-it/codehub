const fs = require('fs');
const path = require('path');

const dataP1 = require('./toan9_data_p1.js');
const dataP2 = require('./toan9_data_p2.js');

function scanObject(obj, path = '') {
  if (typeof obj === 'string') {
    // Check for LaTeX commands like \begin, \quad, \neq, \frac, \sqrt, \alpha, \pm, \iff, \ge, \le, \in
    // that are NOT surrounded by $ or $$
    const lines = obj.split('\n');
    lines.forEach((line, idx) => {
      // Find if line has \something
      if (line.includes('\\') && !line.includes('<') && !line.includes('$')) {
        console.log(`Potential raw LaTeX at ${path} (line ${idx}):\n  ${line.trim()}`);
      }
    });
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => scanObject(item, `${path}[${i}]`));
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      scanObject(obj[key], `${path}.${key}`);
    }
  }
}

console.log('--- SCANNING P1 ---');
scanObject(dataP1, 'P1');

console.log('--- SCANNING P2 ---');
scanObject(dataP2, 'P2');
