const { chapters } = require('./congnghe_6_data.js');
console.log('Chapters length:', chapters.length);
console.log('Chapter 1 lessons:', chapters[0].lessons.map(l => ({ id: l.id, title: l.title, hasContent: !!l.content, keys: Object.keys(l) })));
