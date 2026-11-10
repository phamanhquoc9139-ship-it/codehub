const fs = require('fs');
const lhr = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/perf-reports/baseline-mobile.json', 'utf8'));
const a = lhr.audits;

console.log('=== MAINTHREAD WORK BREAKDOWN ===');
(a['mainthread-work-breakdown']?.details?.items || []).forEach(it => {
  console.log(`  ${it.groupLabel}: ${Math.round(it.duration)} ms`);
});

console.log('\n=== TOP 12 NETWORK REQUESTS BY TRANSFER SIZE ===');
const reqs = (a['network-requests']?.details?.items || []).sort((x, y) => (y.transferSize || 0) - (x.transferSize || 0));
reqs.slice(0, 12).forEach(r => {
  console.log(`  ${(r.transferSize/1024).toFixed(1)} KiB (res ${(r.resourceSize/1024).toFixed(1)} KiB) [${r.statusCode}] ${r.url}`);
});

console.log('\n=== RENDER-BLOCKING RESOURCES ===');
(a['render-blocking-resources']?.details?.items || []).forEach(r => {
  console.log(`  ${Math.round(r.wastedMs)}ms -> ${r.url}`);
});

console.log('\n=== UNUSED CSS / JS ===');
(a['unused-css-rules']?.details?.items || []).forEach(r => {
  console.log(`  CSS wasted ${(r.wastedBytes/1024).toFixed(1)} KiB / ${(r.totalBytes/1024).toFixed(1)} KiB -> ${r.url}`);
});
(a['unused-javascript']?.details?.items || []).forEach(r => {
  console.log(`  JS wasted ${(r.wastedBytes/1024).toFixed(1)} KiB / ${(r.totalBytes/1024).toFixed(1)} KiB -> ${r.url}`);
});

console.log('\n=== ARIA PROHIBITED ATTR ===');
console.log(JSON.stringify(a['aria-prohibited-attr']?.details?.items, null, 2));

console.log('\n=== COLOR CONTRAST DISTINCT SELECTORS ===');
const contrastMap = new Map();
(a['color-contrast']?.details?.items || []).forEach(it => {
  const sel = it.node?.selector || 'unknown';
  const exp = it.node?.explanation || '';
  if (!contrastMap.has(sel)) contrastMap.set(sel, { count: 0, snippet: it.node?.snippet, exp });
  contrastMap.get(sel).count++;
});
for (const [sel, info] of contrastMap.entries()) {
  console.log(`  (${info.count}x) ${sel}`);
  console.log(`     snippet: ${info.snippet?.substring(0, 120)}`);
  console.log(`     ${info.exp?.split('\n')[0]}`);
}
