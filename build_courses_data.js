const fs = require('fs');

const backupHtmlPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/backups/pre-perf-opt-20261110/index.html';
const outJsPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scripts/courses-data.js';
const previewHtmlPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/initial_12_cards.html';

const html = fs.readFileSync(backupHtmlPath, 'utf8');

const gridIdIdx = html.indexOf('id="courses-grid"');
const gridOpenEnd = html.indexOf('>', gridIdIdx) + 1;
const noCoursesIdx = html.indexOf('<div class="hidden text-center py-16', gridOpenEnd);
const gridContent = html.substring(gridOpenEnd, noCoursesIdx).replace(/<\/div>\s*$/, '').trim();

const rawCards = [];
let depth = 0;
let start = -1;
const tagRegex = /<\/?div\b[^>]*>/gi;
let m;
while ((m = tagRegex.exec(gridContent)) !== null) {
  const tag = m[0];
  if (tag.startsWith('</')) {
    depth--;
    if (depth === 0 && start !== -1) {
      rawCards.push(gridContent.substring(start, m.index + tag.length));
      start = -1;
    }
  } else {
    if (depth === 0) start = m.index;
    depth++;
  }
}

function fixCardA11yAndContrast(cardHtml) {
  let out = cardHtml;
  const onclickMatch = out.match(/onclick="(?:window\.)?location\.href='([^']+)'"/);
  const onclickHref = onclickMatch ? onclickMatch[1] : null;
  out = out.replace(/\s*onclick="(?:window\.)?location\.href='[^']*'"/g, '');

  // If card had no <a href>, convert <span>Khám phá ngay</span> into an accessible <a>
  if (onclickHref && !/<a[^>]*href="/i.test(out)) {
    if (out.includes('<span>Khám phá ngay</span>')) {
      out = out.replace('<span>Khám phá ngay</span>', `<a href="${onclickHref}" class="hover:underline">Khám phá ngay</a>`);
    }
  }

  const replacements = [
    [/(?<!dark:)\btext-emerald-600\b/g, 'text-emerald-800'],
    [/(?<!dark:)\btext-teal-600\b/g, 'text-teal-800'],
    [/(?<!dark:)\btext-amber-600\b/g, 'text-amber-800'],
    [/(?<!dark:)\btext-orange-600\b/g, 'text-orange-800'],
    [/(?<!dark:)\btext-sky-600\b/g, 'text-sky-800'],
    [/(?<!dark:)\btext-cyan-600\b/g, 'text-cyan-800'],
    [/(?<!dark:)\btext-green-600\b/g, 'text-green-800'],
    [/(?<!dark:)\btext-yellow-600\b/g, 'text-yellow-800'],
    [/(?<!dark:)\btext-indigo-600\b/g, 'text-indigo-700'],
    [/(?<!dark:)\btext-violet-600\b/g, 'text-violet-700'],
    [/(?<!dark:)\btext-purple-600\b/g, 'text-purple-700'],
    [/(?<!dark:)\btext-blue-600\b/g, 'text-blue-700'],
    [/(?<!dark:)\btext-rose-500\b/g, 'text-rose-700'],
    [/(?<!dark:)\btext-rose-600\b/g, 'text-rose-700'],
    [/(?<!dark:)\btext-red-500\b/g, 'text-red-700'],
    [/(?<!dark:)\btext-red-600\b/g, 'text-red-700'],
    [/(?<!dark:)\btext-pink-600\b/g, 'text-pink-700'],
    [/(?<!dark:)\btext-primary\b/g, 'text-blue-700'],
    [/(?<!dark:)\btext-gray-400\b/g, 'text-gray-600'],
    [/(?<!dark:)\btext-gray-500\b/g, 'text-gray-600'],
    [/(?<!dark:)\btext-teal-500\b/g, 'text-teal-700'],
    [/(?<!dark:)\btext-emerald-500\b/g, 'text-emerald-700'],
    [/(?<!dark:)\btext-amber-500\b/g, 'text-amber-700'],
    [/(?<!dark:)\btext-sky-500\b/g, 'text-sky-700'],
    [/(?<!dark:)\btext-cyan-500\b/g, 'text-cyan-700']
  ];
  for (const [regex, rep] of replacements) out = out.replace(regex, rep);
  return out;
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const TOKENS = [
  'bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4',
  'px-4 py-5 sm:p-6 flex flex-col justify-between h-full flex-1',
  'flex-shrink-0 bg-gradient-to-br',
  'rounded-md p-3 text-white text-xl flex items-center justify-center',
  'ml-3 text-lg font-medium text-gray-900 dark:text-white',
  'text-sm text-gray-600 dark:text-gray-300 line-clamp-3',
  'inline-flex items-center gap-1 text-[11px] font-semibold',
  'px-2 py-0.5 rounded-full'
];

const coursesData = rawCards.map((raw) => {
  const cleanHtml = fixCardA11yAndContrast(raw).replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
  const titleMatch = cleanHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const descMatch = cleanHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const linkMatch = cleanHtml.match(/<a[^>]*href="([^"]+)"/i);
  const iconMatch = cleanHtml.match(/<i[^>]*class="([^"]*(?:fa-solid|fa-regular|fa-brands)[^"]*)"/i);

  let compactHtml = cleanHtml;
  TOKENS.forEach((tok, idx) => {
    compactHtml = compactHtml.split(tok).join(`~${idx}~`);
  });

  return {
    t: decodeHtmlEntities(titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '') : ''),
    d: decodeHtmlEntities(descMatch ? descMatch[1].replace(/<[^>]+>/g, '') : ''),
    l: linkMatch ? linkMatch[1] : '#',
    i: iconMatch ? iconMatch[1] : 'fa-solid fa-graduation-cap',
    h: compactHtml
  };
});

const jsOutput = `// Compact catalog of all ${coursesData.length} CodeHub courses (order preserved 100%)
(function(){
  const T = ${JSON.stringify(TOKENS)};
  window.CODEHUB_COURSES = ${JSON.stringify(coursesData)};
  window.renderCodeHubCard = function(c) {
    return c.h.replace(/~(\\d+)~/g, function(_, idx) { return T[idx] || ''; });
  };
})();
`;

fs.writeFileSync(outJsPath, jsOutput, 'utf8');

const initialCardsHtml = coursesData.slice(0, 12).map((c) => {
  return c.h.replace(/~(\d+)~/g, (_, idx) => TOKENS[idx] || '');
}).join('\n');
fs.writeFileSync(previewHtmlPath, initialCardsHtml, 'utf8');

console.log('Rebuilt scripts/courses-data.js:', coursesData.length, 'courses');
