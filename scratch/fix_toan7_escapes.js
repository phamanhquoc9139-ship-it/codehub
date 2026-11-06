const fs = require('fs');
const filePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_perfect_katex.js';
let code = fs.readFileSync(filePath, 'utf8');

// Thay thế nội dung Bài 15 bằng bản hoàn hảo có double escape
const badLesson15Pattern = /15:\s*\{[\s\S]*?expl:\s*"Theo định lí Py-ta-go[^"]*"\s*\n\s*\},/;

const perfectLesson15 = `15: {
    cleanTitle: "Các trường hợp bằng nhau của tam giác vuông",
    cleanChap: "Tam giác bằng nhau",
    desc: "Các trường hợp cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông.",
    content: \`
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Tóm tắt lý thuyết bài học:</strong></p>
        <p class="leading-relaxed">Tam giác vuông có một góc vuông (\\\\(90^\\\\circ\\\\)). Vì thế, các trường hợp bằng nhau tổng quát của tam giác (c-c-c, c-g-c, g-c-g) được suy ra thành các quy tắc ngắn gọn hơn:</p>
        <div class="space-y-1.5 pl-2 text-xs">
          <p>• <strong>Hai cạnh góc vuông:</strong> Nếu hai cạnh góc vuông của tam giác vuông này bằng hai cạnh góc vuông của tam giác vuông kia thì hai tam giác đó bằng nhau (trường hợp c-g-c).</p>
          <p>• <strong>Cạnh góc vuông - Góc nhọn kề:</strong> Nếu một cạnh góc vuông và góc nhọn kề cạnh ấy của tam giác vuông này bằng một cạnh góc vuông và góc nhọn kề cạnh ấy của tam giác vuông kia thì hai tam giác đó bằng nhau (trường hợp g-c-g).</p>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-2">
          <h4 class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5"><i class="fa-solid fa-shapes text-blue-600"></i> Công thức &amp; Tính chất đặc biệt:</h4>
          <p>• <strong>Trường hợp Cạnh huyền - Góc nhọn:</strong> Nếu cạnh huyền và một góc nhọn của tam giác vuông này bằng cạnh huyền và một góc nhọn của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.</p>
          <p>• <strong>Trường hợp Cạnh huyền - Cạnh góc vuông:</strong> Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này bằng cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau (hệ quả định lí Py-ta-go: \\\\[c^2 = a^2 + b^2 \\\\implies b = \\\\sqrt{c^2 - a^2}\\\\] khi cạnh huyền và 1 cạnh góc vuông bằng nhau thì cạnh còn lại cũng tự động bằng nhau).</p>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
          <h4 class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-600"></i> Phương pháp giải toán:</h4>
          <p class="leading-relaxed">Để chứng minh hai tam giác vuông bằng nhau, ưu tiên kiểm tra xem đã có yếu tố <strong>cạnh huyền</strong> bằng nhau hay chưa:</p>
          <p>• Nếu có <em>cạnh huyền</em> + <em>góc nhọn</em> bằng nhau \\\\(\\\\rightarrow\\\\) Áp dụng trường hợp <strong>Cạnh huyền - Góc nhọn</strong>.</p>
          <p>• Nếu có <em>cạnh huyền</em> + <em>cạnh góc vuông</em> bằng nhau \\\\(\\\\rightarrow\\\\) Áp dụng trường hợp <strong>Cạnh huyền - Cạnh góc vuông</strong>.</p>
        </div>

        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <h4 class="font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center gap-1.5"><i class="fa-solid fa-bookmark text-amber-600"></i> Ví dụ minh họa chuẩn:</h4>
          <p class="font-medium"><strong>Đề bài:</strong> Cho tam giác \\\\(ABC\\\\) cân tại \\\\(A\\\\). Kẻ đường cao \\\\(AH \\\\perp BC\\\\) (với \\\\(H \\\\in BC\\\\)). Chứng minh rằng: \\\\[\\\\triangle ABH = \\\\triangle ACH\\\\]</p>
          <p class="mt-1.5 text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Lời giải:</strong> Xét hai tam giác vuông \\\\(\\\\triangle ABH\\\\) và \\\\(\\\\triangle ACH\\\\) (vuông tại \\\\(H\\\\) do \\\\(AH \\\\perp BC\\\\)):<br>
          • Cạnh huyền \\\\(AB = AC\\\\) (do \\\\(\\\\triangle ABC\\\\) cân tại \\\\(A\\\\)).<br>
          • Cạnh góc vuông \\\\(AH\\\\) là cạnh chung.<br>
          \\\\(\\\\implies \\\\triangle ABH = \\\\triangle ACH\\\\) (theo trường hợp <em>cạnh huyền - cạnh góc vuông</em>). Suy ra \\\\(HB = HC\\\\) và \\\\(\\\\widehat{BAH} = \\\\widehat{CAH}\\\\).</p>
        </div>
      </div>
    \`,
    quiz: {
      q: "Hai tam giác vuông bằng nhau theo trường hợp \\"Cạnh huyền - Cạnh góc vuông\\" là do hệ quả của định lí nào?",
      options: [
        "(Recommended) Định lí Py-ta-go",
        "Định lí Ta-lét",
        "Định lí Euclid",
        "Bất đẳng thức tam giác"
      ],
      ans: 0,
      expl: "Theo định lí Py-ta-go, khi cạnh huyền và 1 cạnh góc vuông bằng nhau thì cạnh góc vuông còn lại cũng bằng nhau, đưa về trường hợp c-c-c."
    }
  },`;

if (badLesson15Pattern.test(code)) {
  code = code.replace(badLesson15Pattern, perfectLesson15);
  fs.writeFileSync(filePath, code, 'utf8');
  console.log("Successfully fixed Lesson 15 in build_toan7_perfect_katex.js!");
} else {
  console.log("Pattern for lesson 15 did not match!");
}
