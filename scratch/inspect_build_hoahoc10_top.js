const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

console.log('Top HTML structure of build_hoahoc10.js:');
const htmlStart = s.indexOf('<!DOCTYPE html>');
console.log(s.slice(htmlStart, htmlStart + 2500));
