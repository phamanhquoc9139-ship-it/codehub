const fs = require('fs');
const vm = require('vm');

const base = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const html = fs.readFileSync(base + '/index.html', 'utf8');
const coursesJs = fs.readFileSync(base + '/scripts/courses-data.js', 'utf8');

// Extract the filtering/search script from index.html
const fStart = html.indexOf('<!-- Script: Bộ Lọc, Phân Trang & Tìm Kiếm Môn Học Nhanh -->');
const sOpen = html.indexOf('<script>', fStart) + '<script>'.length;
const sClose = html.indexOf('</script>', sOpen);
const filterCode = html.substring(sOpen, sClose);

// Build mock DOM context to test real search/filter functions!
const domStubs = {};
const ctx = {
  window: { CODEHUB_COURSES: [] },
  document: {
    getElementById: (id) => domStubs[id] || (domStubs[id] = { id, value: '', innerText: '', innerHTML: '', classList: { add(){}, remove(){}, toggle(){} }, setAttribute(){}, addEventListener(){} }),
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  setTimeout,
  clearTimeout,
  console
};
vm.createContext(ctx);
vm.runInContext(coursesJs, ctx);
vm.runInContext(filterCode, ctx);

const courses = ctx.getIndexedCourses();
console.log('Indexed courses:', courses.length);

for (const mode of ['all', 'grade-tieuhoc', 'grade-thcs', 'grade-10', 'grade-11', 'grade-12', 'cat-olympic-hsg', 'cat-tinhoc']) {
  const count = courses.filter(c => ctx.matchesCategory(c.nt, mode)).length;
  console.log(`Filter [${mode}] -> ${count} courses`);
}

for (const q of ['toan 10', 'tieng anh 10', 'dich vu mang', 'ccnp', 'mos excel', 'nga', 'khtn']) {
  const hits = courses
    .map(c => ({ c, r: ctx.scoreCourseItem(c, q) }))
    .filter(x => x.r.match && x.r.score > 0)
    .sort((a, b) => b.r.score - a.r.score);
  console.log(`Search "${q}" -> ${hits.length} matches (top: ${hits[0]?.c.t || 'none'})`);
  if (hits.length === 0) {
    console.error('Search failed for:', q);
    process.exit(1);
  }
}
console.log('ALL SEARCH & FILTER TESTS PASSED!');
