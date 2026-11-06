const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scratch').filter(f => f.includes('tiengtrung'));
console.log('Tiengtrung files in scratch:', files);
