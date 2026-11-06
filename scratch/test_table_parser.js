const testText = `
| Cơ quan/chức danh | Vị trí/chức năng | Nhiệm vụ trọng tâm |
|---|---|---|
| Quốc hội | Cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất; thực hiện quyền lập hiến, lập pháp | Làm/sửa Hiến pháp, luật; quyết định vấn đề quan trọng (mục tiêu phát triển, ngân sách, chính sách, tổ chức, nhân sự theo thẩm quyền); giám sát tối cao việc tuân theo Hiến pháp/pháp luật và hoạt động Nhà nước |
| Chủ tịch nước | Người đứng đầu Nhà nước, đại diện quốc gia về đối nội và đối ngoại | Công bố Hiến pháp/luật/pháp lệnh; thực hiện nhiệm vụ nhân sự theo thẩm quyền/đề nghị; thống lĩnh lực lượng vũ trang, Chủ tịch Hội đồng Quốc phòng và An ninh; tiếp nhận đại sứ, thực hiện một số hoạt động đối ngoại, khen thưởng/quốc tịch theo luật |
| Chính phủ | Cơ quan hành chính nhà nước cao nhất; thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội | Tổ chức thi hành Hiến pháp, luật, nghị quyết; quản lí thống nhất các lĩnh vực; đề xuất chiến lược/chính sách/dự án luật/ngân sách; điều hành nền hành chính từ trung ương đến địa phương; chịu trách nhiệm/báo cáo trước Quốc hội |

Phân biệt: Quốc hội **ban hành luật/quyết định/giám sát**; Chủ tịch nước **đứng đầu Nhà nước, đại diện và thực hiện thẩm quyền hiến định**; Chính phủ **tổ chức thi hành và quản lí hành chính**. Chủ tịch nước không phải cơ quan ban hành luật.
`;

function parseInlineMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 dark:text-white font-bold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
}

function parseMarkdownTable(tableLines) {
  if (tableLines.length < 2) return '';
  const headerCells = tableLines[0].split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  const dataRows = tableLines.slice(2).map(line => {
    return line.split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  });

  return `
    <div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-indigo-50 dark:bg-indigo-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
            ${headerCells.map((h, i) => `<th class="p-3.5 font-extrabold ${i === 0 ? 'w-1/4' : ''}">${parseInlineMarkdown(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
          ${dataRows.map(row => `
            <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
              ${row.map((cell, cIdx) => `
                <td class="p-3.5 align-top ${cIdx === 0 ? 'font-bold text-indigo-700 dark:text-indigo-400' : ''}">
                  ${parseInlineMarkdown(cell)}
                </td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

console.log(parseMarkdownTable(testText.trim().split('\n').slice(0, 5)));
