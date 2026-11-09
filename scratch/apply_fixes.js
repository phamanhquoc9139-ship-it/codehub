const fs = require('fs');
const path = require('path');
const vm = require('vm');

const coursesDir = path.join(__dirname, '../courses');

// ==========================================
// 1. FIX CHUYÊN ĐỀ VẬT LÍ 11
// ==========================================
const vatliFiles = ['chuyende_vatli_11.html', 'chuyende_vatly_11.html', 'chuyende_ly_11.html'];

const brokenDelimiter = `delimiters: [
            { left: '$', right: '$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
            { left: '`;

const fixedKaTeXBlock = `delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }`;

for (const f of vatliFiles) {
  const p = path.join(coursesDir, f);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');
  if (content.includes(brokenDelimiter)) {
    content = content.replace(brokenDelimiter, fixedKaTeXBlock);
    fs.writeFileSync(p, content, 'utf8');
    console.log(`[FIXED] KaTeX syntax in ${f}`);
  } else {
    // Check if there's any other variant
    const idx = content.indexOf('function renderMathOnPage()');
    if (idx !== -1) {
      console.log(`[INFO] Checked ${f}, checking scripts for syntax validity...`);
    }
  }

  // Verify JS syntax
  const scripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
  scripts.forEach((s, i) => {
    const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new vm.Script(code);
      console.log(`  ${f} Script ${i + 1}: OK`);
    } catch (e) {
      console.error(`  ${f} Script ${i + 1} ERROR:`, e.message);
    }
  });
}

// ==========================================
// 2. FIX CHUYÊN ĐỀ TOÁN 10 TABLE
// ==========================================
const toanFiles = ['chuyende_toan_10.html', 'chuyende_toan10.html'];

for (const f of toanFiles) {
  const p = path.join(coursesDir, f);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');

  // Replace table header and table tag to ensure fixed layout with colgroup
  const oldTablePattern = /<table class="w-full min-w-\[980px\] text-left text-xs sm:text-sm border-collapse">[\s\S]*?<thead>[\s\S]*?<\/thead>/;
  
  const newTableStructure = `<table class="w-full min-w-[980px] table-fixed text-left text-xs sm:text-sm border-collapse" style="table-layout: fixed; min-width: 980px;">
              <colgroup>
                <col style="width: 50px;">
                <col style="width: 175px;">
                <col style="width: 105px;">
                <col style="width: 290px;">
                <col style="width: 180px;">
                <col style="width: 180px;">
              </colgroup>
              <thead>
                <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white">
                  <th class="p-3.5 font-bold text-center">STT</th>
                  <th class="p-3.5 font-bold">Tên bài học</th>
                  <th class="p-3.5 font-bold">Chuyên đề</th>
                  <th class="p-3.5 font-bold">Khái niệm & Quy luật cốt lõi</th>
                  <th class="p-3.5 font-bold">Công thức / Định lí</th>
                  <th class="p-3.5 font-bold">Kĩ năng & Ứng dụng</th>
                </tr>
              </thead>`;

  if (oldTablePattern.test(content)) {
    content = content.replace(oldTablePattern, newTableStructure);
    // Also make sure table cells in tbody have break-words
    content = content.replace(/class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed align-top"/g, 
                              'class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed align-top break-words"');
    content = content.replace(/class="p-3 font-mono text-xs text-amber-700 dark:text-amber-300 font-semibold align-top"/g,
                              'class="p-3 font-mono text-xs text-amber-700 dark:text-amber-300 font-semibold align-top break-words"');
    content = content.replace(/class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed font-medium align-top"/g,
                              'class="p-3 text-slate-600 dark:text-slate-300 leading-relaxed font-medium align-top break-words"');
    fs.writeFileSync(p, content, 'utf8');
    console.log(`[FIXED] Table layout in ${f}`);
  } else {
    console.log(`[INFO] Table pattern not matched in ${f}`);
  }
}

// Make sure chuyende_toan10.html is identical to chuyende_toan_10.html
const toan10Main = fs.readFileSync(path.join(coursesDir, 'chuyende_toan_10.html'));
fs.writeFileSync(path.join(coursesDir, 'chuyende_toan10.html'), toan10Main);
console.log('[SYNC] chuyende_toan10.html synced with chuyende_toan_10.html');

// ==========================================
// 3. FIX CHUYÊN ĐỀ HÓA HỌC 10
// ==========================================
const hoaFiles = ['chuyende_hoahoc_10.html', 'chuyende_hoahoc10.html', 'chuyende_hoa_10.html'];

for (const f of hoaFiles) {
  const p = path.join(coursesDir, f);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');

  // Fix unanchored degree $^\circ$
  if (content.includes('$^\\circ$)')) {
    content = content.replace(/\$\^\\circ\$\)/g, '${}^\\circ$)');
    console.log(`[FIXED] Degree caret in ${f}`);
  }

  // Ensure all isotope expressions in the text are properly anchored
  // e.g. $^{A}_{Z} -> ${}^{A}_{Z}
  content = content.replace(/\$\^\{([0-9A-Za-z]+)\}_\{([0-9A-Za-z]+)\}/g, '${}^{$1}_{$2}');
  content = content.replace(/\$\^\{([0-9A-Za-z]+)\}([A-Za-z]+)\$/g, '${}^{$1}\\text{$2}$');

  fs.writeFileSync(p, content, 'utf8');
}

// Sync all hoahoc 10 aliases
const hoa10Main = fs.readFileSync(path.join(coursesDir, 'chuyende_hoahoc_10.html'));
fs.writeFileSync(path.join(coursesDir, 'chuyende_hoahoc10.html'), hoa10Main);
fs.writeFileSync(path.join(coursesDir, 'chuyende_hoa_10.html'), hoa10Main);
console.log('[SYNC] chuyende_hoahoc10.html and chuyende_hoa_10.html synced');
