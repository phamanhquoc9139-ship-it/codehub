const d = require('./tinhoc10_data.js');
console.log('Lesson 1 keys:', Object.keys(d.lessons[1]));
console.log('Lesson 1 details:', {
  id: d.lessons[1].id,
  title: d.lessons[1].title,
  topicId: d.lessons[1].topicId,
  badge: d.lessons[1].badge,
  sectionsCount: d.lessons[1].sections ? d.lessons[1].sections.length : 0
});
console.log('Sample section:', d.lessons[1].sections[0]);
