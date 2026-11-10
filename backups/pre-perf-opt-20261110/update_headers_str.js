const fs = require('fs');

const fileData = {
    '10': [
        { id: 'chuong-1', title: 'Cấu tạo nguyên tử', icon: 'fa-atom' },
        { id: 'chuong-2', title: 'Bảng tuần hoàn', icon: 'fa-table-cells' },
        { id: 'chuong-3', title: 'Liên kết hoá học', icon: 'fa-link' },
        { id: 'chuong-4', title: 'Phản ứng oxi hoá - khử', icon: 'fa-fire' },
        { id: 'chuong-5', title: 'Năng lượng hoá học', icon: 'fa-bolt' },
        { id: 'chuong-6', title: 'Tốc độ phản ứng', icon: 'fa-stopwatch' },
        { id: 'chuong-7', title: 'Nhóm halogen', icon: 'fa-vial-virus' }
    ],
    '11': [
        { id: 'chuong-1', title: 'Cân bằng hoá học', icon: 'fa-scale-balanced' },
        { id: 'chuong-2', title: 'Nitrogen - Sulfur', icon: 'fa-cloud' },
        { id: 'chuong-3', title: 'Đại cương hoá hữu cơ', icon: 'fa-flask-vial' },
        { id: 'chuong-4', title: 'Hydrocarbon', icon: 'fa-fire' },
        { id: 'chuong-5', title: 'Alcohol - Phenol', icon: 'fa-vial' },
        { id: 'chuong-6', title: 'Carbonyl - Carboxylic', icon: 'fa-droplet' }
    ],
    '12': [
        { id: 'chu-de-1', title: 'Ester - Lipid', icon: 'fa-bottle-droplet' },
        { id: 'chu-de-2', title: 'Carbohydrate', icon: 'fa-cubes' },
        { id: 'chu-de-3', title: 'Hợp chất chứa Nitrogen', icon: 'fa-dna' },
        { id: 'chu-de-4', title: 'Polymer', icon: 'fa-recycle' },
        { id: 'chu-de-5', title: 'Pin điện và Điện phân', icon: 'fa-battery-full' },
        { id: 'chu-de-6', title: 'Đại cương kim loại', icon: 'fa-gem' },
        { id: 'chu-de-7', title: 'Các nhóm kim loại', icon: 'fa-shield-halved' }
    ]
};

function getBetween(str, start, end) {
    const s = str.indexOf(start);
    if (s === -1) return '';
    const e = str.indexOf(end, s + start.length);
    if (e === -1) return '';
    return str.substring(s + start.length, e).trim();
}

for (const grade in fileData) {
    const filePath = 'courses/hoahoc_' + grade + '.html';
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    const headerStart = content.indexOf('<header');
    const headerEnd = content.indexOf('</header>') + 9;
    if (headerStart === -1 || headerEnd < 9) continue;
    
    const oldHeader = content.substring(headerStart, headerEnd);
    
    let bgClasses = 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20 shadow-inner text-center';
    if (grade === '11') bgClasses = 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 shadow-inner text-center';
    if (grade === '12') bgClasses = 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20 shadow-inner text-center'; // 12 was emerald too

    let title = getBetween(oldHeader, '<h1', '</h1>');
    title = title.substring(title.indexOf('>') + 1).trim();
    if (!title) title = 'Hóa Học Lớp ' + grade;

    let desc = getBetween(oldHeader, '<p', '</p>');
    desc = desc.substring(desc.indexOf('>') + 1).trim();

    const linksHtml = fileData[grade].map((chap, idx) => {
        const isLast = idx === fileData[grade].length - 1;
        const btnClass = isLast 
            ? 'px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 border border-orange-400 transition-all font-medium text-sm flex items-center gap-2 shadow-sm text-white' 
            : 'px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium text-sm flex items-center gap-2 text-white';
        
        const prefix = grade === '12' ? 'Chủ đề' : 'Chương';
        return '          <a href="#' + chap.id + '" class="' + btnClass + '">\n' +
               '            <i class="fa-solid ' + chap.icon + ' text-white/80"></i> ' + prefix + ' ' + (idx + 1) + ': ' + chap.title + '\n' +
               '          </a>';
    }).join('\n');

    const newHeader = '<header class="' + bgClasses + '">\n' +
    '    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n' +
    '      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30 text-white">\n' +
    '        <i class="fa-solid fa-book-open"></i> CHƯƠNG TRÌNH GDPT 2018 - KẾT NỐI TRI THỨC & PHÁT TRIỂN NĂNG LỰC\n' +
    '      </div>\n' +
    '      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md text-white">' + title + '</h1>\n' +
    '      <p class="text-lg text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">\n' +
    '        ' + desc + '\n' +
    '      </p>\n' +
    '      <div class="flex flex-wrap justify-center gap-3">\n' +
    linksHtml + '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </header>';

    content = content.replace(oldHeader, newHeader);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated header for hoahoc_' + grade + '.html');
}
