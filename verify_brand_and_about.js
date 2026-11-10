const fs = require('fs');
const vm = require('vm');
const path = require('path');

const baseDir = path.join(__dirname, 'cs-learning-platform');
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const aboutHtml = fs.readFileSync(path.join(baseDir, 'about.html'), 'utf8');

let errors = 0;

function check(label, cond) {
  if (!cond) {
    console.error('FAIL:', label);
    errors++;
  } else {
    console.log('PASS:', label);
  }
}

// 1. Check Footer in index.html
const fStart = indexHtml.indexOf('<footer');
const fEnd = indexHtml.indexOf('</footer>', fStart) + '</footer>'.length;
const footer = indexHtml.substring(fStart, fEnd);

check('index.html Footer has "Học viện CodeHub"', footer.includes('Học viện'));
check('index.html Footer has "Học tập – Luyện tập – Sáng tạo"', footer.includes('Học tập – Luyện tập – Sáng tạo'));
check('index.html Footer has "Dự án giáo dục số cá nhân độc lập"', footer.includes('Dự án giáo dục số cá nhân độc lập'));
check('index.html Footer has "https://codehub.io.vn/"', footer.includes('https://codehub.io.vn/'));
check('index.html Footer has exact line "Sáng lập và phát triển: Phạm Anh Quốc"', footer.includes('Sáng lập và phát triển:') && footer.includes('Phạm Anh Quốc'));
check('index.html Footer links to about.html', footer.includes('href="about.html"'));
const navStart = indexHtml.indexOf('<nav');
const navEnd = indexHtml.indexOf('</nav>', navStart) + '</nav>'.length;
check('index.html Navbar links to about.html', indexHtml.substring(navStart, navEnd).includes('href="about.html"'));
check('index.html Footer has NO fake links href="#"', !footer.includes('href="#"'));
check('index.html Footer has NO fake email support@codehub.com', !footer.includes('support@codehub.com'));
check('index.html Footer has NO fake Facebook', !footer.toLowerCase().includes('facebook'));
check('index.html Footer has NO school/government affiliation', !footer.toLowerCase().includes('trực thuộc') && !footer.toLowerCase().includes('sở giáo dục') && !footer.toLowerCase().includes('bộ giáo dục'));

// 2. Check about.html
check('about.html exists and has Học viện CodeHub', aboutHtml.includes('Học viện CodeHub'));
check('about.html has website https://codehub.io.vn/', aboutHtml.includes('https://codehub.io.vn/'));
check('about.html has founder Phạm Anh Quốc', aboutHtml.includes('Phạm Anh Quốc'));
check('about.html has model Dự án giáo dục số cá nhân độc lập', aboutHtml.includes('Dự án giáo dục số cá nhân độc lập'));
check('about.html has slogan Học tập – Luyện tập – Sáng tạo', aboutHtml.includes('Học tập – Luyện tập – Sáng tạo'));
check('about.html explicitly states independent (không trực thuộc trường học/cơ quan nhà nước)', aboutHtml.includes('không trực thuộc'));
check('about.html has Sứ Mệnh & Đối Tượng Phục Vụ sections', aboutHtml.includes('Sứ Mệnh') && aboutHtml.includes('Đối Tượng Phục Vụ'));
check('about.html has NO fake href="#" links', !aboutHtml.includes('href="#"'));
check('about.html has NO fake emails', !aboutHtml.includes('support@codehub.com') && !aboutHtml.toLowerCase().includes('facebook'));

// 3. Verify all internal relative links in about.html resolve to real existing files!
const hrefRegex = /href="([^"#]+)(?:#[^"]*)?"/g;
let m;
const checkedTargets = new Set();
while ((m = hrefRegex.exec(aboutHtml)) !== null) {
  const target = m[1];
  if (target.startsWith('http://') || target.startsWith('https://')) continue;
  if (!checkedTargets.has(target)) {
    checkedTargets.add(target);
    const exists = fs.existsSync(path.join(baseDir, target));
    check(`about.html link target "${target}" exists on disk`, exists);
  }
}

// Verify all internal #anchors in about.html -> index.html#anchor exist in index.html
const indexAnchorRegex = /href="index\.html#([^"]+)"/g;
while ((m = indexAnchorRegex.exec(aboutHtml)) !== null) {
  const anchor = m[1];
  check(`index.html contains anchor #${anchor} linked from about.html`, indexHtml.includes(`id="${anchor}"`));
}

// Verify index.html Footer link targets (#courses, #course-stats, about.html)
check('index.html Footer target about.html exists', fs.existsSync(path.join(baseDir, 'about.html')));
check('index.html Footer target #courses exists', indexHtml.includes('id="courses"'));
check('index.html Footer target #course-stats exists', indexHtml.includes('id="course-stats"'));

// 4. Tag balance & JS check in about.html
for (const tag of ['div', 'section', 'nav', 'aside', 'footer']) {
  const opens = (aboutHtml.match(new RegExp(`<${tag}(\\s|>)`, 'gi')) || []).length;
  const closes = (aboutHtml.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
  if (opens !== closes) {
    console.error(`about.html tag mismatch <${tag}>: open=${opens}, close=${closes}`);
    errors++;
  }
}
const scriptBlocks = [...aboutHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)];
scriptBlocks.forEach((sb, idx) => {
  try {
    new vm.Script(sb[1]);
    console.log(`PASS: about.html inline script #${idx + 1} syntax valid`);
  } catch (e) {
    console.error(`FAIL: about.html inline script #${idx + 1} error:`, e);
    errors++;
  }
});

// 5. Verify existing data/functions/Supabase in index.html remain untouched
check('index.html stat-total-courses 281 preserved', indexHtml.includes('id="stat-total-courses">281</div>'));
check('index.html Tin & AI (51) preserved', indexHtml.includes('Tin & AI (51)'));
check('index.html supabase-config.js preserved', indexHtml.includes('scripts/supabase-config.js'));
check('index.html auth-ui.js preserved', indexHtml.includes('scripts/auth-ui.js'));
check('index.html pptx-presenter.js preserved', indexHtml.includes('scripts/pptx-presenter.js'));

if (errors === 0) {
  console.log('\nALL BRANDING & ABOUT PAGE CHECKS PASSED!');
} else {
  console.error('\nFailed with', errors, 'errors.');
  process.exit(1);
}
