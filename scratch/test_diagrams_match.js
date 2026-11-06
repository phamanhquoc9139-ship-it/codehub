const { chebienChapters } = require('./chebienthucpham9_data.js');
const chebienDiagrams = require('./chebienthucpham9_diagrams.js');

let ok = true;
chebienChapters.forEach(chap => {
  chap.lessons.forEach(l => {
    const key = l.diagramKey;
    const hasDiagram = chebienDiagrams[key] !== undefined;
    console.log(`${l.number} (${l.title.substring(0, 30)}...): key = "${key}", found = ${hasDiagram}`);
    if (!hasDiagram) ok = false;
  });
});

if (ok) {
  console.log('\nAll 7 lessons have UNIQUE, VALID diagrams in chebienDiagrams!');
} else {
  console.error('\nSome diagrams are missing!');
  process.exit(1);
}
