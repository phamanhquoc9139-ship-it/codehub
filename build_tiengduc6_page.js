const fs = require('fs');
const path = require('path');
const { unitsData } = require('./data_tiengduc6.js');

console.log("Generating full tiengduc_6.html...");

// Generate Sidebar Links
function renderSidebar() {
  return `
    <div class="space-y-4">
      <div class="px-3 py-2 bg-gradient-to-r from-red-600/10 via-amber-500/10 to-transparent dark:from-red-950/40 rounded-xl border border-red-500/20">
        <span class="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block mb-1">Mục Lục SGK Tiếng Đức 6</span>
        <p class="text-xs text-gray-600 dark:text-gray-300">Bộ sách Kết nối tri thức với cuộc sống</p>
      </div>

      <!-- Quick Section Jump -->
      <div class="space-y-1 text-xs">
        <a href="#tap-1" class="flex items-center justify-between px-3 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <span><i class="fa-solid fa-book-bookmark text-red-500 mr-2"></i>I. Tập 1: Tổng quan</span>
          <span class="text-[10px] bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded font-bold">E1-E5</span>
        </a>
        <a href="#tap-2" class="flex items-center justify-between px-3 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <span><i class="fa-solid fa-book-open-reader text-red-500 mr-2"></i>II. Tập 2: Tổng quan</span>
          <span class="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded font-bold">E6-E10</span>
        </a>
        <a href="#kien-thuc-bat-buoc" class="flex items-center px-3 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-star text-amber-500 mr-2"></i>III. 18 Trọng tâm bắt buộc
        </a>
        <a href="#noi-dung-khong-bo" class="flex items-center px-3 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-filter-circle-dollar text-emerald-500 mr-2"></i>IV. Tiêu chuẩn học &amp; lọc
        </a>
        <a href="#chi-tiet-lektion" class="flex items-center px-3 py-2 rounded-xl text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/50 font-bold transition">
          <i class="fa-solid fa-list-check mr-2"></i>V. Chi tiết từng Lektion
        </a>
        <a href="#dinh-huong-kiem-tra" class="flex items-center px-3 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-trophy text-amber-500 mr-2"></i>VI. Thi Trạng Nguyên 60:00
        </a>
      </div>

      <!-- Unit By Unit Links -->
      <div class="pt-2 border-t border-gray-100 dark:border-gray-800">
        <div class="text-[10px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 px-3 mb-2">Chi tiết từng bài học</div>
        <div class="space-y-1 text-xs">
          ${unitsData.map(u => {
            const isP = u.isStation;
            return `
              <div class="space-y-0.5">
                <a href="#unit-${u.id}" class="flex items-center justify-between px-3 py-1.5 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-950/40 font-bold transition">
                  <span class="truncate">${isP ? u.titleDe : `${u.number === 'Start' ? 'Start' : 'Einheit ' + u.number}: ${u.titleDe}`}</span>
                  <span class="text-[10px] text-gray-400 shrink-0 ml-1">S. ${u.page}</span>
                </a>
                <div class="pl-4 space-y-0.5 border-l-2 border-gray-100 dark:border-gray-800 ml-3">
                  ${u.lektions.map((l, idx) => `
                    <a href="#lektion-${u.id}-${idx}" class="block py-0.5 px-2 text-[11px] text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 truncate transition">
                      ${l.num}: ${l.nameDe} (S.${l.page})
                    </a>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render Table for Tap 1 & Tap 2
function renderOverviewTable(part) {
  const unitsInPart = unitsData.filter(u => u.bookPart === part);
  return `
    <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
      <table class="w-full text-left text-xs sm:text-sm">
        <thead class="bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-950/40 dark:to-amber-950/20 text-gray-900 dark:text-white font-bold border-b border-gray-200 dark:border-gray-800">
          <tr>
            <th class="py-3 px-3 text-center whitespace-nowrap">Bài / Trạm</th>
            <th class="py-3 px-4">Chủ đề chính (Themen)</th>
            <th class="py-3 px-4">Các Lektionen &amp; Dự án</th>
            <th class="py-3 px-3 text-center">Trang</th>
            <th class="py-3 px-3 text-center">Âm thanh</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          ${unitsInPart.map(u => `
            <tr class="hover:bg-red-50/30 dark:hover:bg-red-950/20 transition">
              <td class="py-3 px-3 font-bold text-red-600 dark:text-red-400 text-center whitespace-nowrap">
                ${u.number === 'Start' ? 'Start' : u.isStation ? u.number : 'Einheit ' + u.number}
              </td>
              <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">
                <div>${u.titleDe}</div>
                <div class="text-xs font-normal text-gray-500 dark:text-gray-400">${u.titleVi}</div>
              </td>
              <td class="py-3 px-4">
                <div class="space-y-1 text-xs">
                  ${u.lektions.map(l => `
                    <div class="flex items-center gap-1.5">
                      <span class="font-semibold text-gray-700 dark:text-gray-300">${l.num}:</span>
                      <span class="text-gray-600 dark:text-gray-400">${l.nameDe}</span>
                      <span class="text-[10px] text-gray-400">(S. ${l.page})</span>
                    </div>
                  `).join('')}
                </div>
              </td>
              <td class="py-3 px-3 text-center font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap">
                S. ${u.page}
              </td>
              <td class="py-3 px-3 text-center">
                <button onclick="speakGerman('${u.titleDe.replace(/'/g, "\\'")}')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                  <i class="fa-solid fa-volume-high text-xs"></i>
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Render Section V Detailed Lektions
function renderDetailedUnits() {
  return unitsData.map(u => {
    const isStation = u.isStation;
    return `
      <!-- ==================== ${u.number}: ${u.titleDe} ==================== -->
      <article id="unit-${u.id}" class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border ${isStation ? 'border-amber-300 dark:border-amber-700 shadow-amber-500/10' : 'border-gray-100 dark:border-gray-800'} shadow-sm space-y-6 scroll-mt-24">
        <!-- Einheit Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl ${isStation ? 'bg-gradient-to-br from-amber-500 to-red-600' : 'german-flag-gradient'} text-white flex items-center justify-center font-black text-lg shadow-md shadow-red-500/20">
              ${u.number === 'Start' ? '0' : u.number}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full ${isStation ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'} font-bold text-[10px] uppercase tracking-wider">
                  ${u.bookPart} &bull; ${isStation ? 'Trạm ôn tập &amp; Luyện đề' : u.number === 'Start' ? 'Khởi động' : 'Einheit ' + u.number}
                </span>
                <span class="text-[11px] font-semibold text-gray-400">Seite ${u.page}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white mt-0.5">${u.titleDe} – ${u.titleVi}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${u.desc}</p>
            </div>
          </div>
          <button onclick="speakGerman('${u.titleDe.replace(/'/g, "\\'")}. ${u.desc.replace(/'/g, "\\'")}')"
            class="px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-600 dark:text-gray-300 hover:text-red-600 text-xs font-semibold flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 transition">
            <i class="fa-solid fa-volume-high text-red-500"></i> <span>Nghe toàn bài</span>
          </button>
        </div>

        <!-- Render Each Lektion inside the Einheit -->
        <div class="space-y-8">
          ${u.lektions.map((lek, lIdx) => {
            const isProj = lek.num === 'Projekt';
            const isLand = lek.num === 'Landeskunde';
            const badgeColor = isProj ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200' :
                              isLand ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200' :
                              'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200';
            const icon = isProj ? 'fa-puzzle-piece' : isLand ? 'fa-earth-europe' : 'fa-book-open';

            return `
              <div id="lektion-${u.id}-${lIdx}" class="p-5 sm:p-6 rounded-2xl bg-gray-50/70 dark:bg-dark-card/60 border border-gray-200 dark:border-gray-800 space-y-5 scroll-mt-24">
                <!-- Lektion Title & Subheader -->
                <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-200/80 dark:border-gray-700/80">
                  <div class="flex items-center gap-2.5">
                    <span class="p-2 rounded-xl ${badgeColor} text-xs font-bold border flex items-center gap-1.5">
                      <i class="fa-solid ${icon}"></i>
                      <span>${lek.num}</span>
                    </span>
                    <div>
                      <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                        ${lek.nameDe}
                      </h4>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        ${lek.nameVi} &bull; <span class="font-semibold text-red-600 dark:text-red-400">Seite ${lek.page}</span>
                      </div>
                    </div>
                  </div>
                  <button onclick="speakGerman('${lek.nameDe.replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded-lg bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-red-600 hover:border-red-400 transition flex items-center gap-1.5 shadow-sm">
                    <i class="fa-solid fa-volume-high text-red-500"></i> Nghe đọc bài
                  </button>
                </div>

                <!-- 1. Vocabulary Chips -->
                <div class="space-y-2.5">
                  <h5 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-spell-check text-red-500"></i> Từ vựng cốt lõi (Bấm vào thẻ để nghe phát âm)
                  </h5>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    ${lek.vocab.map(v => `
                      <div onclick="speakGerman('${v.de.replace(/'/g, "\\'")}')" class="vocab-chip p-2.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-red-400 hover:bg-red-50/50 dark:hover:bg-red-950/30 cursor-pointer flex items-center justify-between gap-2 group transition shadow-sm">
                        <div>
                          <span class="font-bold text-gray-900 dark:text-white text-xs sm:text-sm group-hover:text-red-600 dark:group-hover:text-red-400 transition">${v.de}</span>
                          <span class="block text-[10px] text-gray-400 dark:text-gray-500 italic">${v.gender} &bull; ${v.vi}</span>
                        </div>
                        <i class="fa-solid fa-volume-high text-xs text-gray-300 group-hover:text-red-500 transition shrink-0"></i>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- 2. Grammar & Communication Patterns -->
                <div class="space-y-2.5">
                  <h5 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-comments text-amber-500"></i> ${lek.grammarTitle}
                  </h5>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-2">
                    ${lek.grammarContent.map(g => `
                      <div class="flex items-start justify-between gap-3 text-xs sm:text-sm py-1 border-b border-gray-100 dark:border-gray-800/80 last:border-none">
                        <div>
                          <div class="font-bold text-gray-900 dark:text-white">${g.pattern}</div>
                          <div class="text-xs text-gray-500 dark:text-gray-400">${g.vi}</div>
                        </div>
                        <button onclick="speakGerman('${g.pattern.replace(/'/g, "\\'")}')" class="p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950 text-gray-400 hover:text-red-500 transition shrink-0">
                          <i class="fa-solid fa-volume-high text-xs"></i>
                        </button>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- 3. Phonetik & Dialogue -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Phonetik -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-1.5">
                    <h5 class="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                      <i class="fa-solid fa-headphones text-blue-500"></i> Ngữ âm (Phonetik)
                    </h5>
                    <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">${lek.phonetik}</p>
                  </div>

                  <!-- Dialogue -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <h5 class="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-comment-dots text-emerald-500"></i> Hội thoại mẫu (Dialog)
                      </h5>
                      <button onclick="speakGerman('${lek.dialogue.map(d => d.speaker + ': ' + d.text).join('. ').replace(/'/g, "\\'")}')" class="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                        <i class="fa-solid fa-play text-[10px]"></i> Nghe hội thoại
                      </button>
                    </div>
                    <div class="space-y-1.5 text-xs">
                      ${lek.dialogue.map(d => `
                        <div class="flex items-start gap-2">
                          <span class="font-bold text-gray-800 dark:text-gray-200 shrink-0">${d.speaker}:</span>
                          <span class="text-gray-600 dark:text-gray-300 italic">"${d.text}"</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Quick Quiz -->
                <div class="p-4 rounded-xl bg-gradient-to-r from-red-500/5 via-amber-500/5 to-transparent border border-red-500/20 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <i class="fa-solid fa-circle-question"></i> Kiểm tra nhanh Lektion (Click để chọn đáp án)
                    </span>
                    <span class="text-[10px] font-semibold text-gray-400">1 câu trắc nghiệm</span>
                  </div>
                  <p class="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">${lek.quiz.q}</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    ${lek.quiz.options.map((opt, oIdx) => `
                      <button onclick="checkAnswer(this, ${oIdx === lek.quiz.ans}, '${lek.quiz.explain.replace(/'/g, "\\'")}')"
                        class="p-2.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 text-left hover:border-red-400 transition font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                        <span class="font-bold mr-1.5 text-red-500">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                      </button>
                    `).join('')}
                  </div>
                  <div class="quiz-feedback hidden text-xs p-2.5 rounded-lg font-medium"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </article>
    `;
  }).join('');
}

console.log("Reading base HTML template...");
let templateHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'utf8');

// Replace the sidebar contents
const sidebarStartMarker = '<!-- Dynamic Curriculum Links (Generated) -->';
const sidebarEndMarker = '<!-- Quick Tools in Sidebar -->';
const newSidebar = renderSidebar();

const sidebarIdx1 = templateHtml.indexOf(sidebarStartMarker);
const sidebarIdx2 = templateHtml.indexOf(sidebarEndMarker);
if (sidebarIdx1 !== -1 && sidebarIdx2 !== -1) {
  templateHtml = templateHtml.substring(0, sidebarIdx1 + sidebarStartMarker.length) +
                 '\n' + newSidebar + '\n' +
                 templateHtml.substring(sidebarIdx2);
  console.log("Successfully replaced sidebar!");
} else {
  console.log("Could not find sidebar markers, skipping replacement of sidebar.");
}

// Replace Section I Table
const tap1Table = renderOverviewTable("Tập 1");
const tap1HeaderIdx = templateHtml.indexOf('id="tap-1"');
const tap2HeaderIdx = templateHtml.indexOf('id="tap-2"');
const kienThucIdx = templateHtml.indexOf('id="kien-thuc-bat-buoc"');

if (tap1HeaderIdx !== -1 && tap2HeaderIdx !== -1) {
  const tap1Content = templateHtml.substring(tap1HeaderIdx, tap2HeaderIdx);
  const tableStart = tap1Content.indexOf('<div class="overflow-x-auto');
  if (tableStart !== -1) {
    const updatedTap1Content = tap1Content.substring(0, tableStart) + tap1Table + '\n        </section>\n\n        <section ';
    
    const tap2Content = templateHtml.substring(tap2HeaderIdx, kienThucIdx);
    const tableStart2 = tap2Content.indexOf('<div class="overflow-x-auto');
    const updatedTap2Content = tap2Content.substring(0, tableStart2) + renderOverviewTable("Tập 2") + '\n        </section>\n\n        <section ';

    templateHtml = templateHtml.substring(0, tap1HeaderIdx) + updatedTap1Content + updatedTap2Content + templateHtml.substring(kienThucIdx);
    console.log("Successfully replaced Tap 1 and Tap 2 overview tables!");
  }
}

// Now Replace Section V (Chi tiết từng Lektion)
const secVStart = templateHtml.indexOf('id="chi-tiet-lektion"');
const secVIStart = templateHtml.indexOf('id="dinh-huong-kiem-tra"');

if (secVStart !== -1 && secVIStart !== -1) {
  const detailedUnitsHtml = renderDetailedUnits();
  const secVHeader = `id="chi-tiet-lektion" class="space-y-8 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-red-500">Chi tiết từng bài học</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">V. Bản chi tiết theo từng Lektion (Start, 10 Einheiten &amp; 4 Plattformen)</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800">
              Đầy đủ 30 Lektionen + Landeskunde + Projekt
            </span>
          </div>

          ${detailedUnitsHtml}
        </section>

        <!-- ==================== VI. ĐỊNH HƯỚNG KIỂM TRA & THI TRẠNG NGUYÊN ==================== -->
        <section `;

  templateHtml = templateHtml.substring(0, secVStart) + secVHeader + templateHtml.substring(secVIStart + '<section '.length);
  console.log("Successfully updated Section V with all 30 Lektions, Landeskunde, Projekt, and Plattformen!");
}

// Write to C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html and C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', templateHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html', templateHtml, 'utf8');

console.log("Generated C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html and C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html successfully! Length:", templateHtml.length);
