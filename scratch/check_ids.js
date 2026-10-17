const fs = require('fs');
const c = fs.readFileSync('courses/olympic_vatly_thpt.html', 'utf8');
const checks = ['examTimer', 'courseExamForm', 'examResultBox', 'examSolutionsReview', 'theme-toggle', 'mobile-drawer', 'drawer-backdrop'];
checks.forEach(id => {
  console.log(id, c.includes('id="' + id + '"'));
});
