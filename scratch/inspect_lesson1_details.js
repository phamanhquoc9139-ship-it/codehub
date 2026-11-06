const d = require('./tinhoc10_data.js');
console.log('Lesson 1 keys and types:');
for (const k of Object.keys(d.lessons[1])) {
  console.log(k, typeof d.lessons[1][k], Array.isArray(d.lessons[1][k]) ? 'array length ' + d.lessons[1][k].length : '');
}
console.log('num:', d.lessons[1].num);
console.log('topic:', d.lessons[1].topic);
console.log('title:', d.lessons[1].title);
console.log('orientation:', d.lessons[1].orientation);
console.log('body isArray?:', Array.isArray(d.lessons[1].body));
console.log('body sample first 3 items:', d.lessons[1].body.slice(0, 3));
