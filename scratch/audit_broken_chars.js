const fs = require('fs');

const files = [
  'courses/vatly_10.html',
  'courses/toan_10.html',
  'courses/tinhoc_10.html',
  'courses/grade_10.html'
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const regexBroken = /[≡\u20D7\u20D6\u20D0-\u20FF]/g;
    const matches = content.match(regexBroken);
    if (matches) {
      console.log(`[!] ${f} has ${matches.length} broken/combining characters! Samples:`, matches.slice(0, 10));
    } else {
      console.log(`[✓] ${f} has NO broken/combining characters.`);
    }

    // Check for 2^10
    const powMatches = content.match(/\d+\^\d+/g);
    if (powMatches) {
      console.log(`[!] ${f} has raw power notation:`, powMatches);
    } else {
      console.log(`[✓] ${f} has no raw power notation.`);
    }
  }
}
