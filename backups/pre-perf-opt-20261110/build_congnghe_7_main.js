// Main builder for Cong Nghe 7
const fs = require('fs');
const path = require('path');

const { lessonsDataP2 } = require('./scratch/build_congnghe_7_p2');

const { lessonsDataP1 } = require('./scratch/build_congnghe_7_p1');

const allLessons = [...lessonsDataP1, ...lessonsDataP2];
console.log('Total combined lessons:', allLessons.length);

// Generate 40 Exam Questions covering all 4 chapters
const examQuestions = [
  { q: "Phương thức trồng trọt nào cho phép người sản xuất chủ động kiểm soát vi khí hậu và sản xuất trái vụ?", opts: ["Trồng trọt trong nhà có mái che", "Trồng trọt ngoài tự nhiên", "Trồng trọt quảng canh", "Du canh du cư"], ans: 0 },
  { q: "Cây trồng nào sau đây thuộc nhóm cây lương thực chính ở Việt Nam?", opts: ["Lúa nước, ngô, sắn", "Mía, cao su, cà phê", "Cam, xoài, bưởi", "Gừng, tỏi, ớt"], ans: 0 },
  { q: "Đất trồng bao gồm ba thành phần chính nào?", opts: ["Phần rắn, phần lỏng và phần khí", "Đá sỏi, cát và sét", "Phân đạm, lân và kali", "Nước ngọt, nước lợ và nước mặn"], ans: 0 },
  { q: "Độ sâu tiêu chuẩn khi tiến hành cày lật lớp đất mặt là bao nhiêu?", opts: ["Khoảng 20–30 cm", "Khoảng 5–10 cm", "Khoảng 50–70 cm", "Khoảng 1–2 mét"], ans: 0 },
  { q: "Bón phân lót là công đoạn bón phân vào đất ở thời điểm nào?", opts: ["Trước khi gieo trồng", "Khi cây đang nuôi quả", "Ngay trước khi thu hoạch", "Khi cây bị úng nước"], ans: 0 },
  { q: "Loại phân bón nào thường được ưu tiên sử dụng để bón lót cải tạo đất?", opts: ["Phân hữu cơ hoai mục và phân lân", "Phân đạm ure đậm đặc", "Phân kali nguyên chất", "Thuốc bảo vệ thực vật"], ans: 0 },
  { q: "Độ sâu gieo hạt thích hợp đối với các hạt có kích thước lớn như hạt ngô, lạc là:", opts: ["Gấp 2–3 lần đường kính hạt", "Gieo nông ngay trên mặt đất", "Vùi sâu 20 cm", "Càng sâu càng tốt"], ans: 0 },
  { q: "Thời vụ gieo trồng vụ đông đặc trưng ở các tỉnh miền Bắc nước ta diễn ra vào tháng nào?", opts: ["Khoảng tháng 10 đến tháng 12", "Khoảng tháng 5 đến tháng 7", "Khoảng tháng 1 đến tháng 3", "Khoảng tháng 7 đến tháng 9"], ans: 0 },
  { q: "Nguyên tắc vàng hàng đầu trong công tác phòng trừ sâu, bệnh hại cây trồng là gì?", opts: ["Phòng là chính", "Đợi sâu bùng phát mới phun thuốc", "Lạm dụng tối đa thuốc hóa học", "Bắt sâu vào buổi trưa"], ans: 0 },
  { q: "Biện pháp phòng trừ sâu bệnh nào sử dụng các loài thiên địch như bọ rùa ăn rệp, ong mắt đỏ?", opts: ["Biện pháp sinh học", "Biện pháp hóa học", "Biện pháp kiểm dịch", "Biện pháp cơ giới"], ans: 0 },
  { q: "Nguyên tắc 4 đúng trong sử dụng thuốc bảo vệ thực vật bao gồm:", opts: ["Đúng thuốc, đúng nồng độ liều lượng, đúng lúc, đúng cách", "Đúng thuốc, đúng giờ, đúng ruộng, đúng giá", "Đúng thuốc, đúng màu, đúng mùi, đúng vị", "Đúng người, đúng nơi, đúng lúc, đúng thuốc"], ans: 0 },
  { q: "Phương pháp thu hoạch thích hợp nhất đối với khoai tây và khoai lang là gì?", opts: ["Đào", "Hái", "Nhổ", "Cắt"], ans: 0 },
  { q: "Phương pháp thu hoạch thích hợp nhất đối với lúa và hoa tươi cắt cành là gì?", opts: ["Cắt", "Nhổ", "Đào", "Rung cây cho rụng"], ans: 0 },
  { q: "Bộ phận nào của cây mẹ được sử dụng để nhân giống vô tính?", opts: ["Bộ phận sinh dưỡng (thân, cành, lá, rễ)", "Hạt giống khô", "Phấn hoa", "Nhụy hoa"], ans: 0 },
  { q: "Trong quy trình giâm cành, loại cành được chọn tốt nhất để làm cành giâm là:", opts: ["Cành bánh tẻ khỏe mạnh, không sâu bệnh", "Cành non mới nhú lá đầu tiên", "Cành già cỗi gần gốc", "Cành bị sâu ăn cụt ngọn"], ans: 0 },
  { q: "Góc cắt vát và độ dài tiêu chuẩn của một đoạn cành giâm bánh tẻ là:", opts: ["Cắt vát chéo, dài 10–15 cm, có 2–4 lá", "Cắt ngang bằng, dài 50 cm", "Cắt vát, dài 2 cm", "Cắt xước vỏ, dài 1 mét"], ans: 0 },
  { q: "Khi trồng rau an toàn trong thùng xốp tại nhà, lớp đất cách miệng thùng khoảng bao nhiêu là hợp lí?", opts: ["Cách miệng khoảng 5–7 cm", "Ngang bằng mép miệng thùng", "Cách miệng 1 mm", "Đổ tràn ra ngoài"], ans: 0 },
  { q: "Theo mục đích sử dụng chủ yếu tại Việt Nam, rừng được phân chia thành 3 loại nào?", opts: ["Rừng phòng hộ, rừng sản xuất, rừng đặc dụng", "Rừng lá kim, rừng rậm nhiệt đới, rừng ngập mặn", "Rừng tự nhiên, rừng nhân tạo, rừng ven biển", "Rừng quốc gia, rừng tỉnh, rừng huyện"], ans: 0 },
  { q: "Rừng phòng hộ chắn gió, chắn cát bay có vai trò nổi bật nhất ở vùng nào của nước ta?", opts: ["Dải ven biển miền Trung", "Vùng núi cao Tây Bắc", "Vùng đồng bằng sông Cửu Long", "Khu vực đô thị lớn"], ans: 0 },
  { q: "Vườn quốc gia Cúc Phương và Khu bảo tồn thiên nhiên thuộc nhóm rừng nào?", opts: ["Rừng đặc dụng", "Rừng sản xuất", "Rừng phòng hộ", "Rừng kinh tế lấy gỗ"], ans: 0 },
  { q: "Phương pháp trồng rừng bằng cây con có bầu đất có ưu điểm vượt trội nào?", opts: ["Bộ rễ được bảo vệ nguyên vẹn, tỉ lệ cây sống rất cao", "Giá thành mua cây con bằng 0", "Không cần phải đào hố khi trồng", "Cây lớn ngay thành cổ thụ sau 1 tuần"], ans: 0 },
  { q: "Thao tác kĩ thuật then chốt khi đặt cây con có bầu vào hố trồng là:", opts: ["Rạch bỏ vỏ bao nilon và giữ nguyên vẹn bầu đất", "Dùng búa đập nát bầu đất", "Chôn cả bao nilon dày không rạch", "Rũ sạch đất khỏi rễ"], ans: 0 },
  { q: "Giống lợn cỏ có đặc điểm tầm vóc nhỏ, dễ nuôi và thích nghi tốt là đặc sản của vùng nào?", opts: ["Một số tỉnh miền Trung", "Vùng núi cao Hà Giang", "Vùng đồng bằng sông Hồng", "Đảo Phú Quốc"], ans: 0 },
  { q: "Giống chó bản địa nổi tiếng của Việt Nam có dải xoáy lông trên lưng và chân có màng bơi là:", opts: ["Chó Phú Quốc", "Chó H'Mông cộc đuôi", "Chó Bắc Hà", "Chó cỏ"], ans: 0 },
  { q: "Mô hình xử lí chất thải chăn nuôi bằng hầm khí sinh học Biogas tạo ra loại khí đốt nào?", opts: ["Khí Methane (CH₄)", "Khí Oxygen (O₂)", "Khí Nitrogen (N₂)", "Khí độc Carbon Monoxide (CO)"], ans: 0 },
  { q: "Vì sao vật nuôi non sơ sinh cần được cho bú sữa đầu của mẹ càng sớm càng tốt?", opts: ["Vì sữa đầu chứa hàm lượng kháng thể tự nhiên rất cao", "Vì sữa đầu có vị béo ngọt giúp con ngủ ngon", "Vì sữa đầu rẻ tiền", "Để con mẹ không bị đau vú"], ans: 0 },
  { q: "Đối với vật nuôi cái sinh sản, giai đoạn nào cần khẩu phần dinh dưỡng cao nhất để tạo sữa?", opts: ["Giai đoạn đẻ và nuôi con (tiết sữa)", "Giai đoạn hậu bị", "Giai đoạn mới cai sữa", "Giai đoạn nghỉ ngơi"], ans: 0 },
  { q: "Chế phẩm sinh học chứa mầm bệnh đã suy yếu dùng để tiêm phòng chủ động cho vật nuôi là gì?", opts: ["Vaccine", "Kháng sinh liều cao", "Thuốc bổ trợ tim", "Men tiêu hóa"], ans: 0 },
  { q: "Khi phát hiện vật nuôi ốm có dấu hiệu truyền nhiễm, việc làm đầu tiên cần thực hiện là:", opts: ["Cách li con ốm và báo ngay cho cán bộ thú y", "Bán tháo nhanh ra chợ", "Giết mổ làm tiệc liên hoan", "Vứt xác ra sông suối"], ans: 0 },
  { q: "Nhiệt độ thích hợp khi úm gà con dưới bóng đèn được nhận biết qua hành vi nào của đàn gà?", opts: ["Gà con phân bố tản đều khắp quây, đi lại ăn uống hoạt bát", "Gà tụ thành đống đè lên nhau dưới đèn", "Gà tản xa đèn, há mỏ thở dốc", "Gà đứng im nhắm mắt"], ans: 0 },
  { q: "Nguyên tắc 'Ba sạch' trong kĩ thuật nuôi gà thịt nông hộ bao gồm:", opts: ["Ăn sạch, ở sạch, uống sạch", "Tắm sạch, lau sạch, phơi sạch", "Rửa sạch, gọt sạch, nấu sạch", "Nhìn sạch, ngửi sạch, sờ sạch"], ans: 0 },
  { q: "Bệnh dịch truyền nhiễm ở gia cầm có khả năng lây sang người gây nguy hiểm tính mạng là:", opts: ["Bệnh cúm gia cầm (H5N1, H5N6)", "Bệnh tiêu chảy do thức ăn", "Bệnh rụng lông", "Bệnh thiếu vitamin D"], ans: 0 },
  { q: "Công thức dự toán tổng chi phí nuôi một vật nuôi trong năm đầu tiên là:", opts: ["Chi phí mua sắm ban đầu + Tổng chi phí chăm sóc định kì cả năm", "Chỉ tính tiền mua con giống ban đầu", "Chỉ tính tiền thức ăn một tháng", "Chi phí mua thuốc chữa bệnh"], ans: 0 },
  { q: "Loài thủy sản nước ngọt nào của Việt Nam là mặt hàng xuất khẩu tỉ USD nổi tiếng thế giới?", opts: ["Cá tra và cá basa", "Cá chép giòn", "Cá trắm đen", "Cá mè hoa"], ans: 0 },
  { q: "Liều lượng vôi bột tiêu chuẩn rắc khử trùng đáy ao nuôi cá trước vụ nuôi là bao nhiêu?", opts: ["7–10 kg cho mỗi 100 m² đáy ao", "1–2 kg cho mỗi 100 m² đáy ao", "50–100 kg cho mỗi 100 m² đáy ao", "Rắc vài gam tượng trưng"], ans: 0 },
  { q: "Thời gian phơi đáy ao nuôi cá dưới ánh nắng mặt trời tiêu chuẩn là bao lâu?", opts: ["Từ 3 đến 5 ngày", "Từ 1 đến 2 tháng", "Chỉ cần 30 phút", "Không cần phơi"], ans: 0 },
  { q: "Khoảng nhiệt độ nước tối ưu cho hầu hết các loài cá nuôi ao nước ngọt sinh trưởng tốt là:", opts: ["25–28 °C", "10–15 °C", "35–40 °C", "0–5 °C"], ans: 0 },
  { q: "Khoảng độ trong của nước ao đo bằng đĩa Secchi thích hợp nhất cho cá nuôi ao là:", opts: ["20–30 cm", "5–10 cm", "70–100 cm", "Trong vắt nhìn thấy đáy 3 mét"], ans: 0 },
  { q: "Khi tiến hành thay nước cho bể cá cảnh tại nhà, tỉ lệ thay nước an toàn nhất mỗi lần là:", opts: ["Thay khoảng 20–30% lượng nước trong bể", "Thay toàn bộ 100% nước", "Thay 90% nước", "Không bao giờ thay"], ans: 0 },
  { q: "Vì sao pháp luật nghiêm cấm thả các loài cá cảnh ngoại lai xâm lấn ra ao hồ sông suối tự nhiên?", opts: ["Vì chúng có thể phá vỡ cân bằng sinh thái và tiêu diệt các loài bản địa", "Vì cá cảnh sẽ biến thành quái vật", "Vì nước sông không có thức ăn", "Vì cá cảnh sẽ bơi ra biển"], ans: 0 }
];

console.log('Exam questions generated:', examQuestions.length);

// Generate Mindmap SVG
function generateMindmapSvg(l) {
  const nodes = l.mindmap.nodes;
  const colors = [nodes[0].color, nodes[1].color, nodes[2].color];

  return `
    <svg viewBox="0 0 820 170" class="w-full min-w-[700px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="core_${l.id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#065f46"/>
        </linearGradient>
      </defs>

      <!-- Center node -->
      <rect x="20" y="45" width="200" height="80" rx="12" fill="url(#core_${l.id})" stroke="#34d399" stroke-width="2"/>
      <text x="120" y="78" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="900" letter-spacing="0.5">${l.lessonNum.toUpperCase()}</text>
      <text x="120" y="98" text-anchor="middle" fill="#a7f3d0" font-size="9.5" font-weight="700">${l.title.replace(/Bài \d+\. /, '').substring(0, 24)}...</text>

      <!-- Connectors -->
      <path d="M 220 65 L 290 35" stroke="${colors[0]}" stroke-width="2" stroke-dasharray="3,3"/>
      <path d="M 220 85 L 290 85" stroke="${colors[1]}" stroke-width="2" stroke-dasharray="3,3"/>
      <path d="M 220 105 L 290 135" stroke="${colors[2]}" stroke-width="2" stroke-dasharray="3,3"/>

      <!-- 3 Branch Nodes -->
      <g transform="translate(290, 10)">
        <rect width="500" height="42" rx="8" fill="#1e293b" stroke="${colors[0]}" stroke-width="1.5"/>
        <circle cx="20" cy="21" r="10" fill="${colors[0]}"/>
        <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="900">1</text>
        <text x="40" y="20" fill="#f8fafc" font-size="10.5" font-weight="800">${nodes[0].title}</text>
        <text x="40" y="34" fill="#94a3b8" font-size="8.5">${nodes[0].desc}</text>
      </g>

      <g transform="translate(290, 64)">
        <rect width="500" height="42" rx="8" fill="#1e293b" stroke="${colors[1]}" stroke-width="1.5"/>
        <circle cx="20" cy="21" r="10" fill="${colors[1]}"/>
        <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="900">2</text>
        <text x="40" y="20" fill="#f8fafc" font-size="10.5" font-weight="800">${nodes[1].title}</text>
        <text x="40" y="34" fill="#94a3b8" font-size="8.5">${nodes[1].desc}</text>
      </g>

      <g transform="translate(290, 118)">
        <rect width="500" height="42" rx="8" fill="#1e293b" stroke="${colors[2]}" stroke-width="1.5"/>
        <circle cx="20" cy="21" r="10" fill="${colors[2]}"/>
        <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="900">3</text>
        <text x="40" y="20" fill="#f8fafc" font-size="10.5" font-weight="800">${nodes[2].title}</text>
        <text x="40" y="34" fill="#94a3b8" font-size="8.5">${nodes[2].desc}</text>
      </g>
    </svg>
  `;
}

// Render All Lessons HTML
function renderLessons() {
  let quizGlobalIdx = 0;

  return allLessons.map(l => {
    // Sections HTML
    const sectionsHtml = l.sections.map(s => `
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/80 space-y-2">
        <h5 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          ${s.heading}
        </h5>
        <div class="space-y-1.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
          ${s.content}
        </div>
      </div>
    `).join('');

    // Quizzes HTML
    const quizzesHtml = l.quizzes.map(q => {
      const qId = quizGlobalIdx++;
      return `
        <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-900/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question text-amber-500"></i> Câu hỏi củng cố nhận thức
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Tự chấm điểm</span>
          </div>
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">${q.q}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="quiz-options-${qId}">
            ${q.opts.map((opt, oIdx) => `
              <button onclick="checkQuizAnswer(${qId}, ${oIdx}, ${q.ans}, '${q.explain.replace(/'/g, "\\'")}')" 
                      class="quiz-btn-${qId} text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-emerald-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">${String.fromCharCode(65 + oIdx)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="quiz-feedback-${qId}" class="hidden p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    }).join('');

    return `
      <!-- ==================== ${l.title} ==================== -->
      <section id="${l.id}" class="lesson-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md mb-8" data-chapter="${l.chapterTag}">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg ${l.chapterColor} text-white font-black text-xs uppercase tracking-wider">${l.chapterTag}</span>
            <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-xs border border-emerald-200 dark:border-emerald-800">
              ${l.chapter}
            </span>
          </div>
          <span class="text-xs font-bold text-gray-400">${l.pages}</span>
        </div>

        <div class="mb-3">
          <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-leaf text-emerald-600 dark:text-emerald-400"></i> ${l.title}
          </h3>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed"><strong>Mục tiêu:</strong> ${l.objective}</p>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-4 p-4 rounded-xl bg-gradient-to-br from-emerald-50/40 via-teal-50/20 to-cyan-50/30 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border border-emerald-100 dark:border-emerald-900/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy kiến thức &bull; ${l.lessonNum}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Công Nghệ 7 &bull; KNTT</span>
          </div>
          <div class="w-full overflow-x-auto py-1">
            ${generateMindmapSvg(l)}
          </div>
        </div>

        <!-- HÌNH MINH HỌA KĨ THUẬT NÔNG - LÂM - THỦY SẢN TRỰC QUAN -->
        ${l.illustration}

        <!-- Nội dung kiến thức chi tiết -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-book-open-reader text-emerald-600"></i> Nội Dung Kiến Thức Trọng Tâm
          </h4>
          ${sectionsHtml}
        </div>

        <!-- Vận dụng thực tế -->
        <div class="my-5 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60">
          <h5 class="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
            <i class="fa-solid fa-lightbulb text-amber-500"></i> Vận Dụng &amp; Liên Hệ Thực Tiễn
          </h5>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${l.application}</p>
        </div>

        <!-- Trắc nghiệm củng cố -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-circle-check text-emerald-500"></i> Bài Tập Củng Cố Nhận Thức
          </h4>
          ${quizzesHtml}
        </div>

      </section>
    `;
  }).join('');
}

// Sidebar Navigation
function renderSidebarNav() {
  return allLessons.map(l => `
    <a href="#${l.id}" 
       class="nav-lesson-item flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group"
       data-chapter="${l.chapterTag}">
      <span class="flex items-center gap-2 truncate">
        <span class="w-6 h-6 rounded-lg ${l.chapterColor} text-white text-[10px] font-black flex items-center justify-center shrink-0">${l.lessonNum.replace('Bài ', 'B')}</span>
        <span class="truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">${l.title.replace(/Bài \d+\. /, '')}</span>
      </span>
      <i class="fa-solid fa-angle-right text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition"></i>
    </a>
  `).join('');
}

// Generate the entire HTML page
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Công Nghệ Lớp 7 (KNTT - GDPT 2018: 4 Chương &bull; 16 Bài Học &bull; Nông - Lâm - Thủy Sản &bull; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            },
            tech: {
              emerald: '#059669',
              teal: '#0D9488',
              amber: '#D97706',
              blue: '#2563EB',
              rose: '#E11D48'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb { background: #334155; }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors">

  <!-- ==================== HEADER (STICKY) ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button (Về trang chính ../index.html) -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 font-black text-sm group-hover:scale-105 transition">
            CN
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              CÔNG NGHỆ 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; Nông - Lâm - Thủy Sản &bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Bộ công cụ nông nghiệp Studio Modal Button -->
        <button onclick="openToolModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800 transition flex items-center gap-1.5 cursor-pointer" title="Máy tính vôi bột ao, độ trong đĩa Secchi &amp; Dự toán">
          <i class="fa-solid fa-calculator text-emerald-600 dark:text-emerald-400"></i>
          <span class="hidden md:inline">AgriTools Studio</span>
        </button>

        <!-- Sổ Tay Kĩ Thuật Modal Button -->
        <button onclick="openHandbookModal()" class="px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/60 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 transition flex items-center gap-1.5 cursor-pointer" title="Cẩm nang tóm tắt 16 bài học">
          <i class="fa-solid fa-book-bookmark text-teal-600 dark:text-teal-400"></i>
          <span class="hidden md:inline">Sổ Tay Kĩ Thuật</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-md shadow-emerald-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white py-10 sm:py-14 border-b border-emerald-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
            <i class="fa-solid fa-seedling"></i> KHỐI THCS &bull; CÔNG NGHỆ LỚP 7 (GDPT 2018)
          </div>
          <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Nông Nghiệp, Lâm Nghiệp, Chăn Nuôi &amp; Thủy Sản Bền Vững
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Chương trình Công nghệ Lớp 7 (Kết nối tri thức với cuộc sống): Trọn vẹn <strong>4 Chương &bull; 16 Bài học &bull; 2 Dự án thực hành</strong>. Tích hợp 17 Sơ đồ tư duy SVG, 17 Bộ đồ họa minh họa kĩ thuật trực quan, Máy tính dự toán AgriTools Studio và Đấu trường Trạng Nguyên Công Nghệ 60:00.
          </p>
          <div class="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-wheat-awn text-emerald-400 mr-1.5"></i> Chương I: Trồng trọt (Bài 1–6)
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-tree text-teal-400 mr-1.5"></i> Chương II: Lâm nghiệp (Bài 7–8)
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-cow text-amber-400 mr-1.5"></i> Chương III: Chăn nuôi (Bài 9–13)
            </span>
            <span class="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 font-medium">
              <i class="fa-solid fa-fish text-blue-400 mr-1.5"></i> Chương IV: Thủy sản (Bài 14–16)
            </span>
          </div>
        </div>

        <!-- Quick Stat Badges -->
        <div class="grid grid-cols-2 gap-3 w-full lg:w-auto">
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-emerald-400">16</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Bài học cốt lõi</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-teal-400">17</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Minh họa SVG</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-amber-400">34+</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Trắc nghiệm</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <div class="text-2xl font-black text-blue-400">60:00</div>
            <div class="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTENT WRAPPER ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ==================== SIDEBAR (STICKY) ==================== -->
      <aside class="w-full lg:w-80 shrink-0 lg:sticky lg:top-20 space-y-5">
        
        <!-- Search & Filter Card -->
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-3">
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-xs text-gray-400"></i>
            <input type="text" id="lessonSearchInput" onkeyup="filterLessons()" placeholder="Tìm bài học, giâm cành, đĩa Secchi..." 
                   class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500">
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1.5 pt-1 border-t border-gray-100 dark:border-gray-800">
            <div class="flex justify-between text-xs font-bold">
              <span class="text-gray-600 dark:text-gray-400">Tiến độ hoàn thành:</span>
              <span id="progressText" class="text-emerald-600 dark:text-emerald-400">0 / 17</span>
            </div>
            <div class="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-0 transition-all duration-300"></div>
            </div>
          </div>

          <!-- Chapter Filter Tabs -->
          <div class="space-y-1 pt-1 border-t border-gray-100 dark:border-gray-800">
            <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">Lọc theo chương:</span>
            <div class="grid grid-cols-2 gap-1 text-[11px] font-semibold">
              <button onclick="setChapterFilter('ALL')" id="filter-btn-ALL" class="filter-chapter-btn active py-1.5 px-2 rounded-lg bg-emerald-600 text-white transition text-center col-span-2">Tất Cả 4 Chương</button>
              <button onclick="setChapterFilter('CHƯƠNG 1')" id="filter-btn-CHƯƠNG-1" class="filter-chapter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Chương I: Trồng trọt</button>
              <button onclick="setChapterFilter('CHƯƠNG 2')" id="filter-btn-CHƯƠNG-2" class="filter-chapter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Chương II: Lâm nghiệp</button>
              <button onclick="setChapterFilter('CHƯƠNG 3')" id="filter-btn-CHƯƠNG-3" class="filter-chapter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Chương III: Chăn nuôi</button>
              <button onclick="setChapterFilter('CHƯƠNG 4')" id="filter-btn-CHƯƠNG-4" class="filter-chapter-btn py-1.5 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center truncate">Chương IV: Thủy sản</button>
            </div>
          </div>
        </div>

        <!-- Lessons Navigation List -->
        <div class="p-3 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm max-h-[500px] overflow-y-auto scrollbar-thin space-y-1">
          <div class="px-2 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-between">
            <span>Danh mục bài học</span>
            <span class="text-emerald-600 dark:text-emerald-400 font-black">17 Mục</span>
          </div>
          ${renderSidebarNav()}
        </div>

        <!-- Trạng Nguyên CTA Box -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-lg space-y-2">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-black text-amber-300 text-base shadow-sm">
              <i class="fa-solid fa-trophy"></i>
            </span>
            <span class="text-xs font-black uppercase tracking-wider">Đấu Trường Trạng Nguyên</span>
          </div>
          <p class="text-xs text-white/90 leading-snug">
            40 câu hỏi trắc nghiệm toàn diện 4 Chương &bull; Thời gian 60:00 &bull; Nhận bảng vàng vinh danh Trạng Nguyên Công Nghệ 7!
          </p>
          <button onclick="openExamModal()" class="w-full py-2 rounded-xl bg-white text-emerald-800 font-black text-xs hover:bg-amber-100 transition shadow-sm cursor-pointer mt-1">
            Vào Thi Ngay &rarr;
          </button>
        </div>

      </aside>

      <!-- ==================== MAIN LESSONS COLUMN ==================== -->
      <div class="flex-1 min-w-0 w-full space-y-6">
        ${renderLessons()}
      </div>

    </div>
  </main>

  <!-- ==================== MODAL 1: BỘ CÔNG CỤ NÔNG NGHIỆP (AGRITOOLS STUDIO) ==================== -->
  <div id="toolModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="w-full max-w-2xl max-h-[90vh] bg-white dark:bg-gray-850 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
            <i class="fa-solid fa-calculator"></i>
          </div>
          <div>
            <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">AgriTools Studio &bull; Bộ Công Cụ Nông Nghiệp &amp; Thủy Sản 7</h4>
            <p class="text-[11px] text-gray-500">Tính vôi bột ao cá, đánh giá đĩa Secchi và dự toán chi phí nuôi/trồng</p>
          </div>
        </div>
        <button onclick="closeToolModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-4 sm:p-5 overflow-y-auto scrollbar-thin space-y-5 text-xs">
        
        <!-- Tool 1: Tính vôi bột khử trùng ao cá -->
        <div class="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
          <div class="flex items-center justify-between">
            <span class="font-bold text-emerald-800 dark:text-emerald-300 text-xs uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-water"></i> 1. Máy Tính Lượng Vôi Bột Khử Trùng Đáy Ao Nuôi Cá
            </span>
            <span class="text-[10px] text-gray-500 font-medium">Tiêu chuẩn: 7–10 kg / 100 m²</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
            <div>
              <label class="block text-[11px] text-gray-600 dark:text-gray-400 font-medium mb-1">Nhập diện tích đáy ao (m²):</label>
              <input type="number" id="pondAreaInput" value="500" min="10" step="10" oninput="calculateLime()"
                     class="w-full p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-xs">
            </div>
            <div class="p-2.5 rounded-lg bg-emerald-600 text-white text-center font-bold">
              <div class="text-[10px] uppercase text-emerald-200">Lượng vôi bột cần dùng:</div>
              <div id="limeResult" class="text-base font-black">35 &ndash; 50 kg vôi bột</div>
            </div>
          </div>
        </div>

        <!-- Tool 2: Đánh giá độ trong đĩa Secchi -->
        <div class="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 space-y-3">
          <div class="flex items-center justify-between">
            <span class="font-bold text-blue-800 dark:text-blue-300 text-xs uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-compass"></i> 2. Đánh Giá Độ Trong Nước Ao Qua Đĩa Secchi
            </span>
            <span class="text-[10px] text-gray-500 font-medium">Khoảng thích hợp: 20–30 cm</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-end">
            <div>
              <label class="block text-[11px] text-gray-600 dark:text-gray-400 font-medium mb-1">Độ sâu lặn mất h₁ (cm):</label>
              <input type="number" id="secchiH1" value="26" min="5" max="100" oninput="evaluateSecchi()"
                     class="w-full p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-xs">
            </div>
            <div>
              <label class="block text-[11px] text-gray-600 dark:text-gray-400 font-medium mb-1">Độ sâu hiện lại h₂ (cm):</label>
              <input type="number" id="secchiH2" value="24" min="5" max="100" oninput="evaluateSecchi()"
                     class="w-full p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-xs">
            </div>
            <div class="p-2.5 rounded-lg bg-blue-600 text-white text-center font-bold">
              <div class="text-[10px] uppercase text-blue-200">Độ trong trung bình:</div>
              <div id="secchiResult" class="text-sm font-black">25 cm (ĐẠT CHUẨN ✅)</div>
            </div>
          </div>
          <div id="secchiComment" class="p-2 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-[11px] leading-relaxed">
            Nước có màu xanh nõn chuối hoặc vàng nâu nhạt, lượng tảo phù du vừa phải, cung cấp đủ oxy và thức ăn tự nhiên cho cá ao.
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-3 sm:p-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
        <button onclick="closeToolModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          Đóng
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 2: SỔ TAY KĨ THUẬT (HANDBOOK) ==================== -->
  <div id="handbookModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-gray-850 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Sổ Tay Kĩ Thuật Nông - Lâm - Thủy Sản 7</h4>
            <p class="text-[11px] text-gray-500">Cẩm nang tra cứu nhanh các thông số kĩ thuật chuẩn SGK KNTT</p>
          </div>
        </div>
        <button onclick="closeHandbookModal()" class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-4 sm:p-5 overflow-y-auto scrollbar-thin space-y-4 text-xs">
        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-1.5">
          <span class="font-bold text-emerald-600 block text-sm">Chương I &bull; Trồng Trọt</span>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            &bull; Độ sâu cày lật đất mặt: <strong>20 &ndash; 30 cm</strong>.<br>
            &bull; Bón phân lót: Dùng phân chuồng hoai mục và phân lân bón trước khi gieo trồng.<br>
            &bull; Hạt giống lớn: Vùi sâu gấp <strong>2 &ndash; 3 lần đường kính hạt</strong>.<br>
            &bull; Giâm cành: Chọn cành bánh tẻ, cắt vát <strong>10 &ndash; 15 cm</strong> (có 2 &ndash; 4 lá), nhúng kích rễ 1&ndash;2cm trong <strong>5 &ndash; 10 giây</strong>, cắm sâu 3&ndash;5cm.<br>
            &bull; Trồng rau thùng xốp: Đục lỗ thoát nước, đổ đất cách miệng <strong>5 &ndash; 7 cm</strong>.
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-1.5">
          <span class="font-bold text-teal-600 block text-sm">Chương II &bull; Lâm Nghiệp</span>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            &bull; 3 Loại rừng: Rừng phòng hộ (bảo vệ đất, nước, đê biển), Rừng sản xuất (lấy gỗ, giấy), Rừng đặc dụng (Vườn quốc gia, bảo tồn gen).<br>
            &bull; Thời vụ trồng rừng miền Bắc: Mùa xuân (tháng 2&ndash;4) và mùa thu (tháng 8&ndash;10); miền Nam: Đầu mùa mưa (tháng 5&ndash;8).<br>
            &bull; Trồng cây con có bầu: Phải rạch bỏ vỏ nilon và <strong>giữ nguyên vẹn bầu đất</strong>.
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-1.5">
          <span class="font-bold text-amber-600 block text-sm">Chương III &bull; Chăn Nuôi</span>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            &bull; Vật nuôi non: Giữ ấm, cho bú <strong>sữa đầu</strong> của mẹ càng sớm càng tốt vì chứa nhiều kháng thể miễn dịch.<br>
            &bull; Đệm lót chuồng gà: Dày <strong>10 &ndash; 15 cm</strong> bằng trấu, mùn cưa.<br>
            &bull; Nguyên tắc Ba sạch: <strong>Ăn sạch, ở sạch, uống sạch</strong>.<br>
            &bull; Công thức dự toán: <strong>Tổng chi phí = Mua sắm ban đầu + Định kì năm đầu</strong>.
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-1.5">
          <span class="font-bold text-blue-600 block text-sm">Chương IV &bull; Thủy Sản</span>
          <p class="leading-relaxed text-gray-700 dark:text-gray-300">
            &bull; Vôi bột khử trùng ao cá: <strong>7 &ndash; 10 kg / 100 m²</strong> đáy ao.<br>
            &bull; Phơi đáy ao: Từ <strong>3 &ndash; 5 ngày</strong>.<br>
            &bull; Nhiệt độ nước tối ưu cho cá ao: <strong>25 &ndash; 28 °C</strong>.<br>
            &bull; Độ trong đĩa Secchi thích hợp: <strong>20 &ndash; 30 cm</strong>.<br>
            &bull; Thay nước bể cá cảnh: Chỉ thay <strong>20 &ndash; 30%</strong> nước mỗi lần; tuyệt đối không thả cá ngoại lai ra môi trường tự nhiên.
          </p>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-3 sm:p-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
        <button onclick="closeHandbookModal()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          Đóng
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== MODAL 3: ĐẤU TRƯỜNG TRẠNG NGUYÊN (60:00) ==================== -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-gray-850 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-black text-amber-300 text-lg shadow">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h4 class="text-sm sm:text-base font-black uppercase tracking-wide">Đấu Trường Trạng Nguyên Công Nghệ 7</h4>
            <p class="text-[11px] text-white/80">Bộ 40 câu hỏi trắc nghiệm chuẩn &bull; Thời gian 60 phút</p>
          </div>
        </div>
        
        <!-- Timer -->
        <div class="flex items-center gap-3">
          <div class="px-3.5 py-1.5 rounded-xl bg-black/30 border border-white/20 text-center font-mono font-black text-sm text-amber-300" id="examTimerDisplay">
            60:00
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body / Questions Container -->
      <div id="examQuestionsContainer" class="p-5 overflow-y-auto scrollbar-thin space-y-6 text-xs flex-1">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Result Panel (hidden by default) -->
      <div id="examResultPanel" class="hidden p-6 text-center space-y-4 overflow-y-auto flex-1">
        <div class="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-500 mx-auto flex items-center justify-center text-3xl shadow-lg">
          <i class="fa-solid fa-award"></i>
        </div>
        <h3 id="examRankTitle" class="text-xl font-black text-gray-900 dark:text-white">KẾT QUẢ THI ĐẤU</h3>
        <p id="examScoreText" class="text-sm text-gray-600 dark:text-gray-300 font-bold"></p>
        <div id="examBadge" class="inline-block px-4 py-1.5 rounded-full text-xs font-black"></div>
        <p id="examFeedback" class="text-xs text-gray-500 max-w-md mx-auto"></p>
        <button onclick="restartExam()" class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition shadow">
          Làm Lại Bài Thi
        </button>
      </div>

      <!-- Exam Footer -->
      <div id="examFooter" class="p-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
        <span class="text-xs text-gray-500" id="examAnsweredCount">Đã làm: 0 / 40 câu</span>
        <div class="flex items-center gap-2">
          <button onclick="closeExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Tạm dừng
          </button>
          <button onclick="submitExam()" class="px-5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs hover:from-emerald-500 hover:to-teal-500 transition shadow">
            Nộp Bài
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Filter by Chapter
    function setChapterFilter(chapterTag) {
      document.querySelectorAll('.filter-chapter-btn').forEach(btn => btn.classList.remove('active', 'bg-emerald-600', 'text-white'));
      const activeBtn = document.getElementById('filter-btn-' + chapterTag.replace(' ', '-'));
      if (activeBtn) {
        activeBtn.classList.add('active', 'bg-emerald-600', 'text-white');
      }

      const sections = document.querySelectorAll('.lesson-section');
      const navItems = document.querySelectorAll('.nav-lesson-item');

      sections.forEach(sec => {
        if (chapterTag === 'ALL' || sec.getAttribute('data-chapter') === chapterTag) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });

      navItems.forEach(item => {
        if (chapterTag === 'ALL' || item.getAttribute('data-chapter') === chapterTag) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    // Search Lessons
    function filterLessons() {
      const q = document.getElementById('lessonSearchInput').value.toLowerCase();
      const sections = document.querySelectorAll('.lesson-section');
      const navItems = document.querySelectorAll('.nav-lesson-item');

      sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        sec.classList.toggle('hidden', !text.includes(q));
      });

      navItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.classList.toggle('hidden', !text.includes(q));
      });
    }

    // Interactive Quizzes Checking
    const userAnswers = {};
    function checkQuizAnswer(qId, selectedIdx, correctAns, explain) {
      userAnswers[qId] = selectedIdx;
      const buttons = document.querySelectorAll('.quiz-btn-' + qId);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('hover:border-emerald-400');
        if (idx === correctAns) {
          btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'border-emerald-500', 'text-emerald-800', 'dark:text-emerald-300', 'font-bold');
        } else if (idx === selectedIdx && idx !== correctAns) {
          btn.classList.add('bg-red-100', 'dark:bg-red-950', 'border-red-500', 'text-red-800', 'dark:text-red-300');
        }
      });

      const feedback = document.getElementById('quiz-feedback-' + qId);
      feedback.classList.remove('hidden');
      if (selectedIdx === correctAns) {
        feedback.className = 'p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-600"></i> CHÍNH XÁC!</span> ' + explain;
      } else {
        feedback.className = 'p-3 rounded-lg text-xs leading-relaxed bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300';
        feedback.innerHTML = '<span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-xmark text-rose-600"></i> CHƯA ĐÚNG!</span> ' + explain;
      }

      updateProgress();
    }

    function updateProgress() {
      const totalQuizzes = document.querySelectorAll('[id^="quiz-options-"]').length;
      const answered = Object.keys(userAnswers).length;
      const percent = totalQuizzes > 0 ? Math.round((answered / totalQuizzes) * 100) : 0;
      document.getElementById('progressBar').style.width = percent + '%';
      document.getElementById('progressText').innerText = answered + ' / ' + totalQuizzes + ' (' + percent + '%)';
    }

    // AgriTools Modal Logic
    function openToolModal() {
      document.getElementById('toolModal').classList.remove('hidden');
      calculateLime();
      evaluateSecchi();
    }
    function closeToolModal() {
      document.getElementById('toolModal').classList.add('hidden');
    }

    function calculateLime() {
      const area = parseFloat(document.getElementById('pondAreaInput').value) || 0;
      const minLime = Math.round(area * 7 / 100);
      const maxLime = Math.round(area * 10 / 100);
      document.getElementById('limeResult').innerText = minLime + ' – ' + maxLime + ' kg vôi bột';
    }

    function evaluateSecchi() {
      const h1 = parseFloat(document.getElementById('secchiH1').value) || 0;
      const h2 = parseFloat(document.getElementById('secchiH2').value) || 0;
      const avg = Math.round(((h1 + h2) / 2) * 10) / 10;
      const resEl = document.getElementById('secchiResult');
      const comEl = document.getElementById('secchiComment');

      if (avg >= 20 && avg <= 30) {
        resEl.innerHTML = avg + ' cm <span class="text-emerald-300 font-bold">(ĐẠT CHUẨN ✅)</span>';
        comEl.innerHTML = 'Nước có màu xanh nõn chuối hoặc vàng nâu nhạt, lượng tảo phù du vừa phải, cung cấp đủ oxy và thức ăn tự nhiên cho cá ao.';
      } else if (avg < 20) {
        resEl.innerHTML = avg + ' cm <span class="text-amber-300 font-bold">(NƯỚC QUÁ ĐỤC ⚠️)</span>';
        comEl.innerHTML = 'Nước nhiều mùn bã hoặc tảo phát triển quá dày, nguy cơ thiếu oxy về đêm và sáng sớm. Cần cấp thêm nước sạch và hạn chế phân bón.';
      } else {
        resEl.innerHTML = avg + ' cm <span class="text-sky-300 font-bold">(NƯỚC QUÁ TRONG ℹ️)</span>';
        comEl.innerHTML = 'Nước quá trong, nghèo dinh dưỡng và sinh vật phù du làm thức ăn cho cá. Cần bón thêm phân chuồng hoai mục hoặc phân lân để gây màu nước.';
      }
    }

    // Handbook Modal Logic
    function openHandbookModal() {
      document.getElementById('handbookModal').classList.remove('hidden');
    }
    function closeHandbookModal() {
      document.getElementById('handbookModal').classList.add('hidden');
    }

    // Exam Modal Logic
    const examQuestions = ${JSON.stringify(examQuestions)};
    let examTimer = null;
    let timeLeft = 3600; // 60 minutes
    const examUserAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      if (!examTimer && timeLeft === 3600) {
        renderExamQuestions();
        startExamTimer();
      }
    }
    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

        function renderExamQuestions() {
      var container = document.getElementById('examQuestionsContainer');
      var html = '';
      for (var idx = 0; idx < examQuestions.length; idx++) {
        var q = examQuestions[idx];
        html += '<div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2.5">';
        html += '  <div class="flex items-center justify-between">';
        html += '    <span class="font-bold text-emerald-600 dark:text-emerald-400">Câu ' + (idx + 1) + ' / 40</span>';
        html += '    <span class="text-[10px] text-gray-400">1 điểm</span>';
        html += '  </div>';
        html += '  <p class="font-bold text-gray-900 dark:text-white leading-snug">' + q.q + '</p>';
        html += '  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">';
        for (var oIdx = 0; oIdx < q.opts.length; oIdx++) {
          var opt = q.opts[oIdx];
          var letter = String.fromCharCode(65 + oIdx);
          html += '    <label class="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-emerald-400 cursor-pointer flex items-center gap-2 transition">';
          html += '      <input type="radio" name="exam_q_' + idx + '" value="' + oIdx + '" onchange="recordExamAnswer(' + idx + ', ' + oIdx + ')" class="text-emerald-600 focus:ring-emerald-500">';
          html += '      <span class="text-xs text-gray-800 dark:text-gray-200">' + letter + '. ' + opt + '</span>';
          html += '    </label>';
        }
        html += '  </div>';
        html += '</div>';
      }
      container.innerHTML = html;
    }

    function recordExamAnswer(qIdx, oIdx) {
      examUserAnswers[qIdx] = oIdx;
      document.getElementById('examAnsweredCount').innerText = 'Đã làm: ' + Object.keys(examUserAnswers).length + ' / 40 câu';
    }

    function startExamTimer() {
      examTimer = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        document.getElementById('examTimerDisplay').innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        if (timeLeft <= 0) {
          clearInterval(examTimer);
          submitExam();
        }
      }, 1000);
    }

    function submitExam() {
      clearInterval(examTimer);
      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (examUserAnswers[idx] === q.ans) {
          score++;
        }
      });

      document.getElementById('examQuestionsContainer').classList.add('hidden');
      document.getElementById('examFooter').classList.add('hidden');
      document.getElementById('examResultPanel').classList.remove('hidden');

      const scoreEl = document.getElementById('examScoreText');
      const rankTitle = document.getElementById('examRankTitle');
      const badge = document.getElementById('examBadge');
      const feedback = document.getElementById('examFeedback');

      scoreEl.innerText = 'Đạt: ' + score + ' / 40 câu (' + Math.round((score / 40) * 100) + '%)';

      if (score >= 36) {
        rankTitle.innerText = '👑 DANH HIỆU: TRẠNG NGUYÊN CÔNG NGHỆ 7';
        badge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300';
        badge.innerText = 'XUẤT SẮC &bull; THỦ KHOA';
        feedback.innerText = 'Chúc mừng em đã xuất sắc trả lời đúng hầu hết các câu hỏi của cả 4 Chương, nắm vững kĩ thuật nông - lâm - thủy sản!';
      } else if (score >= 30) {
        rankTitle.innerText = '🥈 DANH HIỆU: BẢNG NHÃN CÔNG NGHỆ 7';
        badge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300';
        badge.innerText = 'GIỎI &bull; KĨ THUẬT VỮNG VÀNG';
        feedback.innerText = 'Kết quả rất tốt! Em đã nắm chắc kiến thức căn bản của các bài học.';
      } else if (score >= 20) {
        rankTitle.innerText = '🥉 DANH HIỆU: THÁM HOA CÔNG NGHỆ 7';
        badge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300';
        badge.innerText = 'KHÁ &bull; ĐẠT CHUẨN';
        feedback.innerText = 'Em đã hoàn thành tốt, hãy ôn lại sổ tay kĩ thuật để củng cố các câu còn phân vân.';
      } else {
        rankTitle.innerText = 'CẦN CỐ GẮNG ÔN TẬP THÊM';
        badge.className = 'inline-block px-4 py-1.5 rounded-full text-xs font-black bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        badge.innerText = 'CẦN RÈN LUYỆN LẠI';
        feedback.innerText = 'Hãy đọc kĩ lại các bài học và sử dụng sổ tay kĩ thuật trước khi thi lại nhé!';
      }
    }

    function restartExam() {
      timeLeft = 3600;
      for (const k in examUserAnswers) delete examUserAnswers[k];
      document.getElementById('examResultPanel').classList.add('hidden');
      document.getElementById('examQuestionsContainer').classList.remove('hidden');
      document.getElementById('examFooter').classList.remove('hidden');
      document.getElementById('examAnsweredCount').innerText = 'Đã làm: 0 / 40 câu';
      renderExamQuestions();
      startExamTimer();
    }
  </script>

</body>
</html>`;

// Write to courses/congnghe_7.html & courses/technology_7.html
const out1 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html';
const out2 = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_7.html';

fs.writeFileSync(out1, fullHtml, 'utf8');
fs.writeFileSync(out2, fullHtml, 'utf8');

console.log('Successfully created courses/congnghe_7.html & courses/technology_7.html!');
console.log('File size:', fullHtml.length, 'bytes');
