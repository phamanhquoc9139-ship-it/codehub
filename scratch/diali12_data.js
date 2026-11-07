// scratch/diali12_data.js
// Data processing and curriculum metadata for Geography Grade 12 (Kết Nối Tri Thức)
const fs = require('fs');

const rawContent = fs.readFileSync('scratch/user_request_diali12.md', 'utf8');

const parts = [
  {
    id: 1,
    title: 'Phần I. Địa lí tự nhiên',
    shortTitle: 'Địa lí tự nhiên',
    desc: 'Vị trí địa lí, phạm vi lãnh thổ, thiên nhiên nhiệt đới ẩm gió mùa, sự phân hóa đa dạng và bảo vệ tài nguyên môi trường.',
    lessons: [1, 2, 3, 4, 5, 6],
    icon: 'fa-mountain-sun',
    color: 'emerald'
  },
  {
    id: 2,
    title: 'Phần II. Địa lí dân cư',
    shortTitle: 'Địa lí dân cư',
    desc: 'Quy mô và cơ cấu dân số, lao động và việc làm, quá trình đô thị hóa và chính sách phân bố dân cư hợp lí.',
    lessons: [7, 8, 9, 10],
    icon: 'fa-users',
    color: 'cyan'
  },
  {
    id: 3,
    title: 'Phần III. Địa lí các ngành kinh tế',
    shortTitle: 'Địa lí các ngành kinh tế',
    desc: 'Chuyển dịch cơ cấu kinh tế, vấn đề phát triển nông – lâm – thủy sản, công nghiệp, dịch vụ, giao thông và du lịch.',
    lessons: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    icon: 'fa-industry',
    color: 'indigo'
  },
  {
    id: 4,
    title: 'Phần IV. Địa lí các vùng kinh tế – xã hội',
    shortTitle: 'Các vùng kinh tế – xã hội',
    desc: 'Khai thác thế mạnh và liên kết phát triển ở 6 vùng kinh tế - xã hội, biển đảo và đảm bảo quốc phòng an ninh.',
    lessons: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    icon: 'fa-map-location-dot',
    color: 'amber'
  },
  {
    id: 5,
    title: 'Phần V. Địa lí địa phương',
    shortTitle: 'Địa lí địa phương',
    desc: 'Phương pháp khảo sát, thu thập số liệu, viết báo cáo nghiên cứu và đánh giá tiềm năng địa phương.',
    lessons: [35],
    icon: 'fa-house-flag',
    color: 'rose'
  }
];

// Helper to determine practical lesson
const practicalLessons = [4, 6, 10, 15, 19, 23, 26, 29, 32, 34, 35];

// Map SVG diagrams to lessons
const diagramMap = {
  1: 'territorySeaZones',
  2: 'monsoonMechanism',
  3: 'threeNaturalRegions',
  7: 'populationStructure',
  11: 'economicRestructuring',
  16: 'industryStructure',
  21: 'transportNetwork',
  33: 'marineEconomy'
};

// Parse raw lessons text
const regex = /## (Bài \d+[^\n]+)/g;
let match;
const lessonPositions = [];
while ((match = regex.exec(rawContent)) !== null) {
  lessonPositions.push({ title: match[1], index: match.index });
}

const lessons = {};

for (let i = 0; i < lessonPositions.length; i++) {
  const current = lessonPositions[i];
  const nextIdx = (i + 1 < lessonPositions.length) ? lessonPositions[i+1].index : rawContent.indexOf('## Thuật ngữ và công thức');
  const rawText = rawContent.slice(current.index, nextIdx).trim();

  const id = i + 1;
  const part = parts.find(p => p.lessons.includes(id));
  const titleClean = current.title.replace(/^Bài \d+\.\s*/, '').trim();
  const bodyText = rawText.slice(rawText.indexOf('\n')).trim();

  // Extract bullets from body text
  const bullets = bodyText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('- ') || line.startsWith('* '))
    .map(line => line.replace(/^[-*]\s*/, '').trim());

  lessons[id] = {
    num: id,
    partId: part.id,
    title: titleClean,
    fullTitle: current.title,
    isPractical: practicalLessons.includes(id),
    diagramKey: diagramMap[id] || null,
    bodyText,
    bullets: bullets.length > 0 ? bullets : [bodyText]
  };
}

// 3 Multiple-choice questions for each of the 35 lessons
const quizzes = {
  1: [
    {
      q: 'Theo quy định của Công ước Luật biển năm 1982 và Luật biển Việt Nam, vùng biển thuộc chủ quyền hoàn toàn của nước ta như trên lãnh thổ đất liền là gì?',
      options: ['Vùng tiếp giáp lãnh hải', 'Lãnh hải (rộng 12 hải lí)', 'Vùng đặc quyền kinh tế', 'Thềm lục địa'],
      answer: 1,
      explain: 'Lãnh hải là vùng biển có chiều rộng 12 hải lí tính từ đường cơ sở ra phía biển, là ranh giới quốc gia trên biển; nhà nước ta có chủ quyền hoàn toàn và đầy đủ đối với lãnh hải.'
    },
    {
      q: 'Đặc điểm nào sau đây của vị trí địa lí quy định tính chất nhiệt đới ẩm gió mùa của thiên nhiên Việt Nam?',
      options: ['Nằm hoàn toàn trong vùng nội chí tuyến Bắc bán cầu và tiếp giáp Biển Đông rộng lớn', 'Nằm ở rìa phía tây của bán đảo Đông Dương', 'Nằm trong khu vực cận cực và ôn đới gió mùa', 'Nằm sâu trong lục địa châu Á'],
      answer: 0,
      explain: 'Vị trí nội chí tuyến (bức xạ dồi dào, góc nhập xạ lớn) kết hợp với tiếp giáp Biển Đông và nằm trong khu vực hoạt động của gió mùa châu Á đã tạo nên thiên nhiên nhiệt đới ẩm gió mùa.'
    },
    {
      q: 'Ý nghĩa kinh tế - xã hội quan trọng nhất từ vị trí địa lí của nước ta là gì?',
      options: ['Là trung tâm sản xuất lúa gạo lớn nhất thế giới', 'Thuận lợi giao lưu quốc tế bằng đường biển, đường hàng không và mở rộng thị trường hội nhập', 'Ít chịu tác động của thiên tai và biến đổi khí hậu toàn cầu', 'Độc quyền khai thác khoáng sản trên Biển Đông'],
      answer: 1,
      explain: 'Vị trí ngã tư đường hàng hải và hàng không quốc tế, cửa ngõ ra biển của Lào và Đông Bắc Thái Lan giúp Việt Nam kết nối thuận lợi với các nước ASEAN và toàn cầu.'
    }
  ],

  2: [
    {
      q: 'Đặc điểm thời tiết nổi bật của miền Bắc nước ta vào nửa cuối mùa đông là gì?',
      options: ['Khô hanh, ngày nắng chói chang', 'Lạnh ẩm, trời nhiều mây và có mưa phùn ven biển', 'Nóng ẩm, mưa rào và dông ngập lụt', 'Khô nóng do ảnh hưởng của gió phơn'],
      answer: 1,
      explain: 'Nửa cuối mùa đông, khối khí lạnh từ cao áp Xibia đi qua biển hấp thụ nhiều hơi nước gây nên thời tiết lạnh ẩm và mưa phùn đặc trưng ở đồng bằng Bắc Bộ và ven biển.'
    },
    {
      q: 'Gió mùa Tây Nam thổi vào đầu mùa hạ gây mưa lớn cho vùng nào sau đây?',
      options: ['Đồng bằng sông Hồng và Tây Bắc', 'Nam Bộ và Tây Nguyên', 'Bắc Trung Bộ và Duyên hải Nam Trung Bộ', 'Trung du miền núi phía Bắc'],
      answer: 1,
      explain: 'Khối khí nhiệt đới ẩm từ vịnh Bengan thổi theo hướng Tây Nam đem lại lượng mưa cực lớn cho đón gió ở Nam Bộ và sườn tây Tây Nguyên; sau khi vượt Trường Sơn gây gió phơn khô nóng ở Trung Bộ.'
    },
    {
      q: 'Quá trình hình thành đất đặc trưng cho vùng đồi núi nhiệt đới ẩm gió mùa ở Việt Nam là gì?',
      options: ['Quá trình feralit tích tụ oxit sắt và nhôm', 'Quá trình tích tụ mùn thô ôn đới', 'Quá trình mặn hóa đất ven biển', 'Quá trình phèn hóa do ngập triều'],
      answer: 0,
      explain: 'Khí hậu nóng ẩm mưa nhiều thúc đẩy phong hóa hóa học mãnh liệt, rửa trôi các chất kiềm và tích tụ oxit sắt, oxit nhôm tạo nên đất feralit màu đỏ vàng phổ biến ở đồi núi thấp.'
    }
  ],

  3: [
    {
      q: 'Ranh giới tự nhiên ngăn cách giữa miền khí hậu phía Bắc (có mùa đông lạnh) và phía Nam (nóng quanh năm) là gì?',
      options: ['Dãy Hoàng Liên Sơn', 'Dãy Hoành Sơn', 'Dãy Bạch Mã (16°B)', 'Dãy Trường Sơn Nam'],
      answer: 2,
      explain: 'Dãy Bạch Mã đâm ngang ra biển ở vĩ độ 16°B ngăn chặn gió mùa Đông Bắc di chuyển sâu xuống phía Nam, tạo thành ranh giới phân hóa khí hậu và cảnh quan Bắc – Nam.'
    },
    {
      q: 'Đai cao nào sau đây ở nước ta có nhiệt độ mát mẻ quanh năm, mưa nhiều, rừng cận nhiệt lá rộng và lá kim phát triển?',
      options: ['Đai nhiệt đới gió mùa chân núi', 'Đai cận nhiệt đới gió mùa trên núi', 'Đai ôn đới gió mùa trên núi', 'Đai xích đạo ẩm'],
      answer: 1,
      explain: 'Đai cận nhiệt đới gió mùa trên núi (từ 600-700m đến 2600m ở miền Bắc) có nhiệt độ mát mẻ, đất mùn feralit và hệ sinh thái rừng cận nhiệt đới.'
    },
    {
      q: 'Đặc điểm tự nhiên nổi bật của miền Nam Trung Bộ và Nam Bộ là gì?',
      options: ['Khí hậu có mùa đông lạnh buốt, có tuyết rơi trên núi cao', 'Địa hình có các cao nguyên badan xếp tầng màu mỡ và đồng bằng châu thổ rộng lớn', 'Mạng lưới sông ngòi có hướng vòng cung đổ ra biển Bắc', 'Than đá chiếm trữ lượng lớn nhất cả nước'],
      answer: 1,
      explain: 'Miền Nam Trung Bộ và Nam Bộ đặc trưng bởi các cao nguyên badan xếp tầng rộng lớn ở Tây Nguyên và đồng bằng châu thổ phì nhiêu ở Nam Bộ, khí hậu cận xích đạo phân mùa mưa - khô.'
    }
  ],

  4: [
    {
      q: 'Khi viết báo cáo địa lí về sự phân hóa tự nhiên, bước đầu tiên cần thực hiện là gì?',
      options: ['Vẽ ngay biểu đồ phân tích cơ cấu', 'Xác định trục phân hóa (bắc–nam, đông–tây hay đai cao) và tiêu chí so sánh', 'Thu thập kết luận của các địa phương khác', 'In ấn và phát hành tài liệu'],
      answer: 1,
      explain: 'Bước đầu tiên là xác định rõ trục phân hóa muốn nghiên cứu và các tiêu chí cụ thể (địa hình, khí hậu, thủy văn, sinh vật).'
    },
    {
      q: 'Yếu tố địa hình nào quy định sự phân hóa thiên nhiên theo chiều đông - tây ở Trung Bộ?',
      options: ['Độ cao của dãy Hoàng Liên Sơn', 'Dãy Trường Sơn chắn gió tạo sườn đón gió mưa nhiều và sườn khuất gió khô nóng', 'Các cánh cung sông Gâm, Ngân Sơn', 'Độ dốc của các cao nguyên Lâm Viên'],
      answer: 1,
      explain: 'Dãy Trường Sơn tạo nên sự bất đối xứng sườn đông và tây: sườn đón gió gây mưa bão lớn, trong khi sườn khuất gió chịu hiệu ứng phơn khô nóng.'
    },
    {
      q: 'Nguồn tư liệu căn bản và chính xác nhất để viết báo cáo phân hóa tự nhiên là gì?',
      options: ['Bản đồ địa lí tự nhiên, Atlas Địa lí Việt Nam và Niên giám thống kê chính thống', 'Các bài viết bình luận không rõ tác giả trên mạng xã hội', 'Ước lượng cảm tính của cá nhân', 'Hình ảnh chụp không rõ địa điểm'],
      answer: 0,
      explain: 'Bản đồ địa lí tự nhiên, Atlas Địa lí và số liệu thống kê chính thống là cơ sở khoa học để mô tả vị trí, địa hình, khí hậu và sinh vật.'
    }
  ],

  5: [
    {
      q: 'Nguyên tắc vàng trong sử dụng hợp lí tài nguyên thiên nhiên là gì?',
      options: ['Khai thác tối đa để thu lợi nhuận nhanh nhất', 'Khai thác đi đôi với phục hồi, bảo vệ và tái sử dụng tiết kiệm', 'Chỉ bảo vệ rừng, không khai thác khoáng sản', 'Chuyển toàn bộ tài nguyên cho nước ngoài quản lí'],
      answer: 1,
      explain: 'Sử dụng hợp lí tài nguyên đòi hỏi khai thác dựa trên sức chịu tải, đi đôi với phục hồi, chống lãng phí và bảo vệ môi trường lâu dài.'
    },
    {
      q: 'Vấn đề môi trường nổi cộm nhất tại các khu vực ven biển và đồng bằng nước ta hiện nay là gì?',
      options: ['Nạn cát bay, xâm nhập mặn, xói lở bờ biển và rác thải nhựa đại dương', 'Động đất và núi lửa hoạt động mạnh', 'Mưa tuyết kéo dài làm chết hoa màu', 'Bụi phóng xạ rò rỉ diện rộng'],
      answer: 0,
      explain: 'Các vùng ven biển đang chịu áp lực lớn từ sạt lở bờ biển, nước biển dâng, xâm nhập mặn vào mùa khô và ô nhiễm rác thải nhựa.'
    },
    {
      q: 'Biện pháp quan trọng hàng đầu để bảo vệ tài nguyên rừng đầu nguồn là gì?',
      options: ['Chuyển đổi thành đất trồng cao su lấy gỗ', 'Giao đất giao rừng, khoanh nuôi tái sinh và cấm khai thác trái phép', 'Đốt rừng làm nương rẫy luân canh', 'Xây dựng nhiều khu du lịch nghỉ dưỡng trên núi cao'],
      answer: 1,
      explain: 'Rừng phòng hộ đầu nguồn có vai trò giữ nước, chống xói mòn và điều tiết dòng chảy; bảo vệ nghiêm ngặt và giao rừng cho cộng đồng là giải pháp cốt lõi.'
    }
  ]
};

// Generate quizzes for lessons 6 to 35
for (let i = 6; i <= 35; i++) {
  if (!quizzes[i]) {
    const l = lessons[i] || { title: `Bài ${i}` };
    quizzes[i] = [
      {
        q: `Trọng tâm kiến thức cốt lõi cần nắm vững trong ${l.title} là gì?`,
        options: [
          `Nắm vững khái niệm, đặc điểm phân bố, mối liên hệ nhân - quả và giải pháp phát triển bền vững trong ${l.title}`,
          `Chỉ cần ghi nhớ một số liệu duy nhất mà không cần giải thích nguyên nhân`,
          `Sao chép nguyên văn bảng số liệu mà không phân tích xu hướng`,
          `Bỏ qua các yếu tố tự nhiên và kinh tế xã hội liên quan`
        ],
        answer: 0,
        explain: `Học tập Địa lí 12 đòi hỏi phân tích tổng hợp các nhân tố tự nhiên, kinh tế - xã hội và rút ra định hướng phát triển theo đúng tinh thần SGK Kết nối tri thức.`
      },
      {
        q: `Phương pháp rèn luyện kỹ năng thực hành địa lí hiệu quả đối với bài học này là gì?`,
        options: [
          `Kết hợp đọc bản đồ, xử lí số liệu thống kê chuẩn xác và lập luận có dẫn chứng thực tiễn`,
          `Đoán mò kết quả mà không cần tính toán công thức`,
          `Vẽ biểu đồ tùy ý không có chú giải và đơn vị`,
          `Học thuộc lòng số liệu không gắn với bối cảnh năm thống kê`
        ],
        answer: 0,
        explain: `Kĩ năng địa lí yêu cầu: đọc bản đồ đúng phương hướng/chú giải, tính tỉ trọng/tốc độ chuẩn xác và giải thích nguyên nhân có cơ sở khoa học.`
      },
      {
        q: `Ý nghĩa thực tiễn nổi bật nhất gắn liền với nội dung của ${l.title} là gì?`,
        options: [
          `Góp phần định hướng quy hoạch lãnh thổ, khai thác hợp lí tiềm năng và bảo vệ môi trường, quốc phòng`,
          `Chỉ phục vụ mục đích kiểm tra lý thuyết đơn thuần`,
          `Không có tính ứng dụng trong phát triển kinh tế địa phương`,
          `Thay thế hoàn toàn cho sách giáo khoa và bản đồ Atlat`
        ],
        answer: 0,
        explain: `Kiến thức địa lí kinh tế - xã hội và vùng lãnh thổ là nền tảng quy hoạch, liên kết vùng và gắn liền nhiệm vụ bảo vệ an ninh, chủ quyền Tổ quốc.`
      }
    ];
  }
}

// 20 Exam Arena Questions for 45-minute Trạng Nguyên test
const examQuestions = [
  { id: 1, q: 'Nước ta nằm hoàn toàn trong vùng nội chí tuyến Bắc bán cầu nên có đặc điểm nào sau đây?', options: ['Góc nhập xạ quanh năm lớn và bức xạ mặt trời dồi dào', 'Nhiệt độ trung bình năm luôn dưới 18°C', 'Mùa đông có tuyết rơi trên diện rộng khắp cả nước', 'Lượng mưa hàng năm rất nhỏ như vùng sa mạc'], answer: 0, explain: 'Vị trí nội chí tuyến quy định lượng bức xạ lớn, cân bằng bức xạ luôn dương và nhiệt độ trung bình năm cao.' },
  { id: 2, q: 'Ranh giới ngoài của vùng lãnh hải nước ta được xem là gì?', options: ['Đường bờ biển quốc gia', 'Đường biên giới quốc gia trên biển', 'Ranh giới thềm lục địa', 'Đường nội thủy'], answer: 1, explain: 'Ranh giới ngoài của lãnh hải (cách đường cơ sở 12 hải lí) chính là đường biên giới quốc gia trên biển của Việt Nam.' },
  { id: 3, q: 'Gió mùa Đông Bắc khi thổi qua vịnh Bắc Bộ vào cuối mùa đông đã gây ra hiện tượng thời tiết nào?', options: ['Thời tiết khô hanh, độ ẩm giảm sâu', 'Mưa phùn ẩm ướt ở đồng bằng và ven biển Bắc Bộ', 'Khô nóng gay gắt do hiệu ứng phơn', 'Bão tuyết diện rộng'], answer: 1, explain: 'Khối khí lạnh đi lệch đông qua biển hút ẩm sinh ra mưa phùn cuối mùa đông.' },
  { id: 4, q: 'Địa hình vùng núi Đông Bắc có đặc điểm nổi bật nào sau đây?', options: ['Có các cánh cung núi mở rộng về phía bắc và đông', 'Có các dãy núi cao đồ sộ nhất nước hướng tây bắc - đông nam', 'Có các cao nguyên badan xếp tầng lượn sóng', 'Hoàn toàn là đồi núi thấp dưới 200m'], answer: 0, explain: 'Vùng Đông Bắc nổi bật với 4 cánh cung: Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều.' },
  { id: 5, q: 'Đai ôn đới gió mùa trên núi ở nước ta chỉ xuất hiện ở khu vực nào?', options: ['Dãy Hoàng Liên Sơn ở độ cao trên 2600m', 'Đỉnh núi Ngọc Linh ở Tây Nguyên', 'Đỉnh núi Bạch Mã ở Thừa Thiên Huế', 'Các cao nguyên đá Đồng Văn'], answer: 0, explain: 'Chỉ có dãy Hoàng Liên Sơn có độ cao trên 2600m mới hội tụ đủ điều kiện nhiệt độ của đai ôn đới gió mùa.' },
  { id: 6, q: 'Hiện nay, dân số nước ta đang trong thời kì có lợi thế lớn nào sau đây?', options: ['Cơ cấu dân số vàng với lực lượng lao động dồi dào', 'Gia tăng dân số tự nhiên ở mức rất cao trên 3%', 'Dân cư phân bố rất đồng đều giữa các vùng', 'Tỉ lệ dân nông thôn chiếm hơn 90%'], answer: 0, explain: 'Tỉ lệ người trong độ tuổi lao động (15-64 tuổi) chiếm hơn 65%, tạo nguồn lao động vàng thúc đẩy kinh tế.' },
  { id: 7, q: 'Đô thị hóa ở nước ta hiện nay có đặc điểm nào sau đây?', options: ['Tỉ lệ dân thành thị tăng nhanh nhưng vẫn còn thấp so với thế giới', 'Phân bố rất đều khắp ở miền núi và đồng bằng', 'Không tác động đến cơ cấu kinh tế địa phương', 'Đã hoàn tất quá trình hiện đại hóa hoàn toàn'], answer: 0, explain: 'Tỉ lệ dân đô thị năm 2024 đạt khoảng 38,5%, tốc độ tăng nhanh nhưng quy mô còn chênh lệch giữa các vùng.' },
  { id: 8, q: 'Trong cơ cấu ngành kinh tế của nước ta hiện nay, xu hướng chuyển dịch chủ đạo là gì?', options: ['Tăng tỉ trọng công nghiệp - xây dựng và dịch vụ, giảm tỉ trọng nông - lâm - thủy sản', 'Tăng tỉ trọng nông nghiệp thuần túy, giảm dịch vụ', 'Giảm mạnh công nghiệp chế biến, tăng khai khoáng thô', 'Duy trì cơ cấu không đổi qua các năm'], answer: 0, explain: 'Công nghiệp hóa hiện đại hóa làm giảm tương đối nông nghiệp và tăng nhanh công nghiệp - dịch vụ.' },
  { id: 9, q: 'Vùng sản xuất lúa gạo hàng hóa lớn nhất nước ta hiện nay là vùng nào?', options: ['Đồng bằng sông Cửu Long', 'Đồng bằng sông Hồng', 'Duyên hải Nam Trung Bộ', 'Trung du và miền núi Bắc Bộ'], answer: 0, explain: 'Đồng bằng sông Cửu Long là vựa lúa và xuất khẩu gạo lớn nhất cả nước nhờ diện tích đất phù sa rộng lớn.' },
  { id: 10, q: 'Cây công nghiệp lâu năm quan trọng số một của vùng Tây Nguyên là cây gì?', options: ['Cà phê', 'Chè', 'Hồi', 'Mía đường'], answer: 0, explain: 'Tây Nguyên là thủ phủ cà phê của cả nước nhờ đất đỏ badan màu mỡ và khí hậu cao nguyên phân mùa.' },
  { id: 11, q: 'Ngành công nghiệp khai thác than đá lớn nhất nước ta tập trung ở tỉnh nào?', options: ['Quảng Ninh', 'Thái Nguyên', 'Lạng Sơn', 'Bình Thuận'], answer: 0, explain: 'Bể than Quảng Ninh có trữ lượng than antraxit lớn và chất lượng hàng đầu Đông Nam Á.' },
  { id: 12, q: 'Nhà máy thủy điện lớn nhất Đông Nam Á hiện đang vận hành tại Việt Nam là nhà máy nào?', options: ['Thủy điện Sơn La (2400 MW)', 'Thủy điện Hòa Bình (1920 MW)', 'Thủy điện Lai Châu (1200 MW)', 'Thủy điện Yaly (720 MW)'], answer: 0, explain: 'Thủy điện Sơn La trên sông Đà với công suất 2.400 MW là công trình thủy điện lớn nhất khu vực.' },
  { id: 13, q: 'Tuyến đường bộ có ý nghĩa xương sống kết nối giao lưu kinh tế - xã hội Bắc – Nam là gì?', options: ['Quốc lộ 1A và Đường cao tốc Bắc – Nam', 'Quốc lộ 14 (đường Hồ Chí Minh Tây Nguyên)', 'Quốc lộ 5 Hà Nội – Hải Phòng', 'Quốc lộ 22 TP.HCM – Mộc Bài'], answer: 0, explain: 'Quốc lộ 1A và trục cao tốc Bắc – Nam xuyên suốt chiều dài đất nước từ Lạng Sơn đến Cà Mau.' },
  { id: 14, q: 'Cụm cảng biển nước sâu có khả năng tiếp nhận tàu container mẹ đi thẳng bờ Tây Hoa Kỳ và châu Âu là gì?', options: ['Cảng Cái Mép – Thị Vải (Bà Rịa – Vũng Tàu)', 'Cảng sông Hàn Đà Nẵng', 'Cảng Cửa Lò Nghệ An', 'Cảng Thuận An Huế'], answer: 0, explain: 'Cụm cảng Cái Mép – Thị Vải là một trong những cảng nước sâu hiện đại nhất khu vực đón tàu siêu trọng.' },
  { id: 15, q: 'Thế mạnh tự nhiên nổi bật hàng đầu của vùng Trung du và miền núi Bắc Bộ là gì?', options: ['Tài nguyên khoáng sản đa dạng và tiềm năng thủy điện lớn nhất nước', 'Diện tích đất badan rộng nhất nước', 'Bờ biển dài có nhiều vũng vịnh nước sâu nhất', 'Nguồn nước ngọt dồi dào quanh năm không cạn'], answer: 0, explain: 'Vùng giàu khoáng sản nhất nước (than, sắt, đồng, apatit) và có hệ thống sông Hồng - sông Đà giàu tiềm năng thủy điện.' },
  { id: 16, q: 'Vấn đề môi trường nan giải nhất trong mùa khô ở Đồng bằng sông Cửu Long là gì?', options: ['Hiện tượng xâm nhập mặn sâu vào đất liền và thiếu nước ngọt sinh hoạt, sản xuất', 'Lũ quét và sạt lở núi', 'Gió Lào khô nóng thổi liên tục', 'Sương muối và đóng băng'], answer: 0, explain: 'Vào mùa khô, dòng chảy sông Mekong giảm khiến nước mặn lấn sâu vào các cửa sông từ 50-70 km.' },
  { id: 17, q: 'Vùng kinh tế dẫn đầu cả nước về quy mô GDP, giá trị sản xuất công nghiệp và thu hút vốn FDI là gì?', options: ['Vùng Đông Nam Bộ', 'Đồng bằng sông Hồng', 'Bắc Trung Bộ', 'Tây Nguyên'], answer: 0, explain: 'Đông Nam Bộ với hạt nhân TP. Hồ Chí Minh là vùng kinh tế năng động và đóng góp ngân sách lớn nhất nước.' },
  { id: 18, q: 'Hai quần đảo xa bờ có ý nghĩa chiến lược đặc biệt về chủ quyền biển đảo của nước ta trên Biển Đông là gì?', options: ['Quần đảo Hoàng Sa và quần đảo Trường Sa', 'Quần đảo Côn Đảo và đảo Phú Quốc', 'Quần đảo Cô Tô và đảo Cát Bà', 'Quần đảo Nam Du và Thổ Chu'], answer: 0, explain: 'Quần đảo Hoàng Sa (TP. Đà Nẵng) và Quần đảo Trường Sa (tỉnh Khánh Hòa) là cương vực chủ quyền thiêng liêng của Việt Nam.' },
  { id: 19, q: 'Để thể hiện cơ cấu kinh tế theo ngành của nước ta trong 1 năm hoặc 2-3 năm so sánh, dạng biểu đồ thích hợp nhất là gì?', options: ['Biểu đồ tròn (hoặc biểu đồ cột chồng)', 'Biểu đồ đường biểu diễn', 'Biểu đồ miền qua 10 năm', 'Biểu đồ tán xạ điểm'], answer: 0, explain: 'Cơ cấu ở 1 đến 3 mốc năm thường được thể hiện tối ưu nhất bằng biểu đồ hình tròn có bán kính thể hiện quy mô.' },
  { id: 20, q: 'Công thức tính mật độ dân số của một lãnh thổ là gì?', options: ['Số dân / Diện tích lãnh thổ (đơn vị: người/km²)', 'Diện tích / Số dân (km²/người)', 'Số dân × Diện tích', 'Số dân sinh ra / Tổng số dân × 100%'], answer: 0, explain: 'Mật độ dân số = Số dân / Diện tích, phản ánh mức độ tập trung dân cư trên một đơn vị diện tích (người/km²).' }
];

module.exports = {
  parts,
  lessons,
  quizzes,
  examQuestions
};
