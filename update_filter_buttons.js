const fs = require('fs');
let content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

// Update filter chips HTML
const oldFilterChips = `<button onclick="filterCoursesBy('all')" id="btn-filter-all" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white text-blue-700 shadow-sm transition">Tất cả (214)</button>
                            <button onclick="filterCoursesBy('grade-10')" id="btn-filter-10" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Lớp 10 (37)</button>
                            <button onclick="filterCoursesBy('grade-11')" id="btn-filter-11" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Lớp 11 (37)</button>
                            <button onclick="filterCoursesBy('grade-12')" id="btn-filter-12" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Lớp 12 (36)</button>
                            <button onclick="filterCoursesBy('grade-thcs')" id="btn-filter-thcs" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">THCS (52)</button>
                            <button onclick="filterCoursesBy('cat-olympic-hsg')" id="btn-filter-olympic" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">HSG & Olympic (10)</button>
                            <button onclick="filterCoursesBy('cat-tinhoc')" id="btn-filter-tinhoc" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Tin & AI (31)</button>
                            <button onclick="filterCoursesBy('cat-thechat')" id="btn-filter-thechat" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Thể chất (16)</button>
                            <span id="filter-result-badge" class="px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur text-blue-100 font-medium">175 / 175</span>`;

const newFilterChips = `<button onclick="filterCoursesBy('all')" id="btn-filter-all" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white text-blue-700 shadow-sm transition">Tất cả (214)</button>
                            <button onclick="filterCoursesBy('grade-tieuhoc')" id="btn-filter-tieuhoc" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Tiểu học 1-5 (68)</button>
                            <button onclick="filterCoursesBy('grade-thcs')" id="btn-filter-thcs" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">THCS 6-9 (9)</button>
                            <button onclick="filterCoursesBy('grade-10')" id="btn-filter-10" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Lớp 10 (37)</button>
                            <button onclick="filterCoursesBy('grade-11')" id="btn-filter-11" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Lớp 11 (37)</button>
                            <button onclick="filterCoursesBy('grade-12')" id="btn-filter-12" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Lớp 12 (36)</button>
                            <button onclick="filterCoursesBy('cat-olympic-hsg')" id="btn-filter-olympic" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">HSG & Olympic (10)</button>
                            <button onclick="filterCoursesBy('cat-tinhoc')" id="btn-filter-tinhoc" class="course-filter-btn px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition">Tin & AI (22)</button>
                            <span id="filter-result-badge" class="px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur text-blue-100 font-medium">214 / 214</span>`;

if (content.includes(oldFilterChips)) {
    content = content.replace(oldFilterChips, newFilterChips);
    console.log('Filter chips updated successfully.');
} else {
    console.log('Old filter chips not found exactly.');
}

// Update filterCoursesBy JS
const oldActiveBtn = `const activeBtn = document.getElementById(
          mode === 'all' ? 'btn-filter-all' :
          mode === 'grade-10' ? 'btn-filter-10' :
          mode === 'grade-11' ? 'btn-filter-11' :
          mode === 'grade-12' ? 'btn-filter-12' :
          mode === 'grade-thcs' ? 'btn-filter-thcs' :
          mode === 'cat-olympic-hsg' ? 'btn-filter-olympic' :
          mode === 'cat-thechat' ? 'btn-filter-thechat' :
          mode === 'cat-tinhoc' ? 'btn-filter-tinhoc' : ''
        );`;

const newActiveBtn = `const activeBtn = document.getElementById(
          mode === 'all' ? 'btn-filter-all' :
          mode === 'grade-tieuhoc' ? 'btn-filter-tieuhoc' :
          mode === 'grade-thcs' ? 'btn-filter-thcs' :
          mode === 'grade-10' ? 'btn-filter-10' :
          mode === 'grade-11' ? 'btn-filter-11' :
          mode === 'grade-12' ? 'btn-filter-12' :
          mode === 'cat-olympic-hsg' ? 'btn-filter-olympic' :
          mode === 'cat-tinhoc' ? 'btn-filter-tinhoc' : ''
        );`;

if (content.includes(oldActiveBtn)) {
    content = content.replace(oldActiveBtn, newActiveBtn);
    console.log('activeBtn logic updated successfully.');
} else {
    console.log('oldActiveBtn logic not found exactly.');
}

// Update applyFiltering JS
const oldGradeThcs = `} else if (currentFilterMode === 'grade-thcs') {
            const isOlympicHsg = title.includes('hsg') || title.includes('olympic') || title.includes('cấp 3');
            const isVeo = title.includes('veo');
            const hasNum = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9'].some(n => title.includes(n));
            const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
            matchesFilter = hasNum && notThpt && !isOlympicHsg && !isVeo;`;

const newGradeThcs = `} else if (currentFilterMode === 'grade-tieuhoc') {
            const isOlympicHsg = title.includes('hsg') || title.includes('olympic') || title.includes('cấp 3');
            const isVeo = title.includes('veo');
            const hasNum = [' 1', ' 2', ' 3', ' 4', ' 5'].some(n => title.includes(n));
            const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
            matchesFilter = hasNum && notThpt && !isOlympicHsg && !isVeo;
          } else if (currentFilterMode === 'grade-thcs') {
            const isOlympicHsg = title.includes('hsg') || title.includes('olympic') || title.includes('cấp 3');
            const hasNum = [' 6', ' 7', ' 8', ' 9'].some(n => title.includes(n));
            const notThpt = !title.includes('10') && !title.includes('11') && !title.includes('12');
            matchesFilter = hasNum && notThpt && !isOlympicHsg;`;

if (content.includes(oldGradeThcs)) {
    content = content.replace(oldGradeThcs, newGradeThcs);
    console.log('grade logic in applyFiltering updated successfully.');
} else {
    console.log('oldGradeThcs not found exactly.');
}

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', content, 'utf8');
console.log('Wrote updated index.html');
