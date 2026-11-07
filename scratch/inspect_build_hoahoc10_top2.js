const fs = require('fs');
const s = fs.readFileSync('scratch/build_hoahoc10.js', 'utf8');

const htmlStart = s.indexOf('<!DOCTYPE html>');
console.log(s.slice(htmlStart + 2500, htmlStart + 6000));
