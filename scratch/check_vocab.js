const { unite0, unites } = require('./tiengphap10_data.js');
console.log('Unite 0 vocab length:', unite0.vocabulary.length);
unites.forEach(u => {
  console.log(`Unite ${u.id}: title=${u.title}, lessons=${u.lessons.length}`);
});
