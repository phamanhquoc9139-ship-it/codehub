const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/document.xml', 'utf8');

function getNodeText(xmlSnippet) {
  return [...xmlSnippet.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('').trim();
}

function extractCleanTables(xml) {
  const tblMatches = [...xml.matchAll(/<w:tbl\b[\s\S]*?<\/w:tbl>/g)];
  return tblMatches.map(tbl => {
    const rowMatches = [...tbl[0].matchAll(/<w:tr\b[\s\S]*?<\/w:tr>/g)];
    return rowMatches.map(row => {
      const cellMatches = [...row[0].matchAll(/<w:tc\b[\s\S]*?<\/w:tc>/g)];
      return cellMatches.map(c => getNodeText(c[0]));
    });
  });
}

const tables = extractCleanTables(docXml);

// Extract paragraphs
const pMatches = [...docXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)];
const paragraphs = pMatches.map(p => getNodeText(p[0])).filter(t => t.length > 0);

// Figure mapping to lessons:
const lessonFigures = {
  10: [{ id: 1, file: 'image1.png', title: 'Mô hình hạt và chuyển thể', note: 'Chỉ đúng chiều nóng chảy, đông đặc, hoá hơi và ngưng tụ. SGK trang 34.' }],
  19: [
    { id: 2, file: 'image2.png', title: 'Hình 19.2 Tế bào nhân sơ và nhân thực', note: 'Tìm vùng nhân ở nhân sơ và nhân có màng bao ở nhân thực. SGK trang 67.' },
    { id: 3, file: 'image3.png', title: 'Hình 19.3 Cấu tạo tế bào động vật và tế bào thực vật', note: 'Chỉ màng, tế bào chất, nhân, thành tế bào, không bào và lục lạp. SGK trang 68.' }
  ],
  23: [{ id: 4, file: 'image4.png', title: 'Hình 23.1 Các cấp tổ chức cơ thể', note: 'Đọc thứ tự tế bào → mô → cơ quan → hệ cơ quan → cơ thể. SGK trang 79.' }],
  34: [{ id: 5, file: 'image5.png', title: 'Sơ đồ các nhóm thực vật', note: 'Theo lần lượt tiêu chí mạch dẫn, hạt, vị trí hạt. SGK trang 117.' }],
  41: [{ id: 6, file: 'image6.png', title: 'Hình 41.6 Biểu diễn lực', note: 'Đọc điểm đặt, phương, chiều, độ lớn và tỉ xích 10 N cho mỗi đoạn quy ước. SGK trang 149.' }],
  42: [{ id: 7, file: 'image7.png', title: 'Hình 42.2 Độ dãn của lò xo', note: 'Phân biệt chiều dài tự nhiên l₀, chiều dài l và độ dãn Δl. SGK trang 152.' }],
  48: [{ id: 8, file: 'image8.png', title: 'Hình 48.5 Truyền và bảo toàn năng lượng', note: 'Quan sát hai quả cầu, độ cao thả và độ cao sau va chạm; xét cả năng lượng truyền ra môi trường. SGK trang 169.' }],
  53: [{ id: 9, file: 'image9.png', title: 'Hình 53.2 Các pha của Mặt Trăng', note: 'Phân biệt phần Mặt Trăng được chiếu sáng với phần nhìn thấy từ Trái Đất. SGK trang 184.' }],
  54: [{ id: 10, file: 'image10.png', title: 'Hình 54.1 Hệ Mặt Trời', note: 'Đọc thứ tự tám hành tinh và vành đai tiểu hành tinh; hình không đúng tỉ lệ. SGK trang 187.' }],
  55: [{ id: 11, file: 'image11.png', title: 'Hình 55.3 Hệ Mặt Trời trong Ngân Hà', note: 'Hệ Mặt Trời chỉ là phần rất nhỏ của Ngân Hà. SGK trang 191.' }]
};

// All 11 figures list for gallery
const allFigures = [
  { id: 1, file: 'image1.png', title: 'Mô hình hạt và sự chuyển thể', sgk: 'SGK trang 34', lessonId: 10, desc: 'Mô hình biểu diễn khoảng cách và chuyển động của các hạt ở 3 thể Rắn, Lỏng, Khí cùng 4 quá trình chuyển thể: Nóng chảy, Hoá hơi, Ngưng tụ, Đông đặc.' },
  { id: 2, file: 'image2.png', title: 'Hình 19.2 Tế bào nhân sơ và nhân thực', sgk: 'SGK trang 67', lessonId: 19, desc: 'Phân biệt vùng nhân (chưa có màng nhân bao bọc) ở tế bào nhân sơ (vi khuẩn) và nhân hoàn chỉnh (có màng nhân) ở tế bào nhân thực.' },
  { id: 3, file: 'image3.png', title: 'Hình 19.3 Cấu tạo tế bào động vật và tế bào thực vật', sgk: 'SGK trang 68', lessonId: 19, desc: 'So sánh tế bào động vật và tế bào thực vật: Thực vật có thêm thành tế bào (cell wall), lục lạp (chloroplast) quang hợp và không bào trung tâm lớn.' },
  { id: 4, file: 'image4.png', title: 'Hình 23.1 Các cấp tổ chức cơ thể', sgk: 'SGK trang 79', lessonId: 23, desc: 'Sơ đồ 5 cấp độ tổ chức của cơ thể đa bào: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.' },
  { id: 5, file: 'image5.png', title: 'Sơ đồ phân loại các nhóm thực vật', sgk: 'SGK trang 117', lessonId: 34, desc: 'Khóa phân chia 4 nhóm thực vật chính theo tiêu chí: Mạch dẫn (Rêu không mạch vs Có mạch) → Hạt (Dương xỉ không hạt vs Có hạt) → Vị trí hạt (Hạt trần hạt lộ vs Hạt kín trong quả).' },
  { id: 6, file: 'image6.png', title: 'Hình 41.6 Biểu diễn lực', sgk: 'SGK trang 149', lessonId: 41, desc: 'Mũi tên biểu diễn lực tác dụng gồm 4 yếu tố: Gốc (điểm đặt), Hướng (phương & chiều), Chiều dài biểu diễn độ lớn theo tỉ xích quy ước (10 N cho mỗi đoạn).' },
  { id: 7, file: 'image7.png', title: 'Hình 42.2 Độ dãn của lò xo', sgk: 'SGK trang 152', lessonId: 42, desc: 'Phân biệt chiều dài tự nhiên l₀, chiều dài l khi treo vật và độ dãn Δl = l - l₀ tỉ lệ thuận với khối lượng vật treo trong giới hạn đàn hồi.' },
  { id: 8, file: 'image8.png', title: 'Hình 48.5 Truyền và bảo toàn năng lượng', sgk: 'SGK trang 169', lessonId: 48, desc: 'Thí nghiệm hai quả cầu va chạm minh họa sự truyền và chuyển hóa năng lượng (Thế năng ⇄ Động năng), bảo toàn năng lượng toàn phần.' },
  { id: 9, file: 'image9.png', title: 'Hình 53.2 Các hình dạng nhìn thấy của Mặt Trăng', sgk: 'SGK trang 184', lessonId: 53, desc: 'Chu kì các pha của Mặt Trăng trong tháng (Không trăng → Trăng lưỡi liềm → Bán nguyệt → Trăng tròn → ...) do góc nhìn phần được chiếu sáng thay đổi.' },
  { id: 10, file: 'image10.png', title: 'Hình 54.1 Hệ Mặt Trời', sgk: 'SGK trang 187', lessonId: 54, desc: 'Cấu trúc Hệ Mặt Trời: Mặt Trời ở trung tâm và 8 hành tinh theo thứ tự xa dần: Thủy, Kim, Trái Đất, Hỏa, Mộc, Thổ, Thiên Vương, Hải Vương.' },
  { id: 11, file: 'image11.png', title: 'Hình 55.3 Hệ Mặt Trời trong Ngân Hà', sgk: 'SGK trang 191', lessonId: 55, desc: 'Ngân Hà (Milky Way) dạng đĩa xoắn ốc khổng lồ; Hệ Mặt Trời nằm ở một nhánh xoắn cách tâm thiên hà khoảng 26.000 năm ánh sáng.' }
];

// Parse chapters and lessons
const chapters = [];
let currentChapter = null;
let currentLesson = null;
const lessons = [];

for (let i = 0; i < paragraphs.length; i++) {
  const p = paragraphs[i];

  const chapMatch = p.match(/^Chương\s+([IVXLCDM]+)\s+(.*)$/i);
  if (chapMatch) {
    currentChapter = {
      num: chapMatch[1],
      title: chapMatch[2],
      fullTitle: p
    };
    chapters.push(currentChapter);
    continue;
  }

  const lessonMatch = p.match(/^Bài\s+(\d+)\s+(.*)$/i);
  if (lessonMatch) {
    const lessonNum = parseInt(lessonMatch[1], 10);
    currentLesson = {
      id: lessonNum,
      title: lessonMatch[2],
      chapter: currentChapter ? currentChapter.fullTitle : '',
      chapterNum: currentChapter ? currentChapter.num : '',
      pages: '',
      sections: [],
      figures: lessonFigures[lessonNum] || []
    };
    lessons.push(currentLesson);
    continue;
  }

  if (currentLesson) {
    if (p.startsWith('SGK trang') || p.startsWith('Trang SGK')) {
      currentLesson.pages = p;
      continue;
    }

    if (p.includes('Hình và sơ đồ quan trọng')) {
      currentLesson = null;
      continue;
    }

    const dotIdx = p.indexOf('.');
    let heading = '';
    let content = p;
    if (dotIdx > 0 && dotIdx < 45) {
      heading = p.substring(0, dotIdx).trim();
      content = p.substring(dotIdx + 1).trim();
    }
    currentLesson.sections.push({
      heading: heading || 'Kiến thức cốt lõi',
      text: content,
      fullText: p
    });
  }
}

// Generate 2 quick quizzes for each lesson based on key knowledge
lessons.forEach(l => {
  l.quizzes = generateLessonQuizzes(l);
});

function generateLessonQuizzes(lesson) {
  // Customized question bank based on each lesson's core concept
  const id = lesson.id;
  const t = lesson.title.toLowerCase();

  if (id === 1) {
    return [
      {
        q: "Khoa học tự nhiên nghiên cứu những đối tượng nào sau đây?",
        options: ["Các hiện tượng tự nhiên để tìm ra tính chất và quy luật của chúng", "Chỉ nghiên cứu những vật nhân tạo do con người tạo ra", "Các hiện tượng xã hội và tâm lý con người", "Chỉ nghiên cứu các loài động vật quý hiếm"],
        ans: 0,
        exp: "Khoa học tự nhiên nghiên cứu các hiện tượng tự nhiên nhằm tìm ra bản chất, tính chất và quy luật vận động của chúng."
      },
      {
        q: "Dấu hiệu nào sau đây KHÔNG đủ để kết luận một vật là vật sống?",
        options: ["Vật có sự trao đổi chất với môi trường", "Vật có khả năng lớn lên và sinh sản", "Chỉ dựa vào dấu hiệu vật có thể chuyển động", "Vật có phản ứng cảm ứng với môi trường"],
        ans: 2,
        exp: "Vật sống phải có đầy đủ các hoạt động sống (trao đổi chất, lớn lên, sinh sản...). Xe cộ hay nước chảy chuyển động nhưng không phải là vật sống."
      }
    ];
  } else if (id === 2) {
    return [
      {
        q: "Hành động nào sau đây là ĐÚNG khi làm việc trong phòng thực hành?",
        options: ["Dùng tay trần nếm hoặc trực tiếp ngửi hóa chất để kiểm tra", "Chỉ làm thí nghiệm khi có sự hướng dẫn và giám sát của giáo viên", "Đổ lẫn các hóa chất thừa vào bồn rửa tay", "Tự ý bật các nguồn nhiệt và thử độ nóng bằng tay"],
        ans: 1,
        exp: "Trong phòng thực hành, tuyệt đối tuân thủ hướng dẫn của giáo viên, không nếm, ngửi trực tiếp hóa chất."
      },
      {
        q: "Khi xảy ra sự cố vỡ ống nghiệm hoặc tràn đổ hóa chất, em cần làm gì đầu tiên?",
        options: ["Tự lấy chổi quét và giấu đi", "Báo ngay cho giáo viên phụ trách phòng thực hành", "Dùng tay không bốc các mảnh vỡ", "Bỏ chạy ra khỏi phòng và không nói gì"],
        ans: 1,
        exp: "Khi có sự cố hỏng vỡ hay tràn hóa chất, học sinh phải báo ngay cho giáo viên để xử lý đúng quy trình an toàn."
      }
    ];
  } else if (id === 3) {
    return [
      {
        q: "Kính lúp đơn giản thường có khả năng phóng to ảnh khoảng bao nhiêu lần?",
        options: ["Khoảng 3 – 20 lần", "Khoảng 40 – 3000 lần", "Khoảng 10 000 lần trở lên", "Chỉ phóng to đúng 2 lần"],
        ans: 0,
        exp: "Kính lúp đơn giản phóng to ảnh khoảng 3 – 20 lần, dùng quan sát gân lá, côn trùng nhỏ, chữ nhỏ..."
      },
      {
        q: "Điều gì TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM khi sử dụng kính lúp?",
        options: ["Quan sát gân lá cây dưới ánh sáng dịu", "Dùng kính lúp để nhìn trực tiếp vào Mặt Trời", "Lau mặt kính bằng khăn mềm", "Điều chỉnh khoảng cách để thấy ảnh rõ nét"],
        ans: 1,
        exp: "Kính lúp hội tụ ánh sáng mặt trời cực mạnh, nhìn trực tiếp sẽ gây bỏng và tổn thương vĩnh viễn võng mạc mắt."
      }
    ];
  } else if (id === 4) {
    return [
      {
        q: "Độ phóng đại toàn bộ của kính hiển vi quang học được tính bằng công thức nào?",
        options: ["Độ phóng đại thị kính + Độ phóng đại vật kính", "Độ phóng đại thị kính × Độ phóng đại vật kính", "Độ phóng đại thị kính / Độ phóng đại vật kính", "Chỉ phụ thuộc vào độ phóng đại của thị kính"],
        ans: 1,
        exp: "Độ phóng đại toàn bộ = Độ phóng đại của thị kính nhân với độ phóng đại của vật kính (ví dụ: thị kính 10x, vật kính 40x thì phóng to 400 lần)."
      },
      {
        q: "Khi hạ vật kính xuống gần tiêu bản, ta phải thực hiện thao tác như thế nào?",
        options: ["Mắt nhìn vào thị kính và vặn thật nhanh ốc to", "Mắt nhìn từ bên ngoài lam kính, hạ từ từ để vật kính không chạm vào lamen", "Mắt nhắm lại và vặn ốc nhỏ", "Dùng tay ấn thẳng vật kính xuống tiêu bản"],
        ans: 1,
        exp: "Phải nhìn từ bên ngoài để kiểm soát khoảng cách, tránh để đầu vật kính va đập làm vỡ lam kính và hỏng thấu kính."
      }
    ];
  } else if (id === 5) {
    return [
      {
        q: "Giới hạn đo (GHĐ) của một chiếc thước là gì?",
        options: ["Độ dài giữa hai vạch chia liên tiếp trên thước", "Độ dài lớn nhất ghi trên thước", "Độ dài nhỏ nhất mà thước có thể đo được", "Chiều rộng của chiếc thước"],
        ans: 1,
        exp: "Giới hạn đo (GHĐ) là độ dài lớn nhất ghi trên thước. Độ chia nhỏ nhất (ĐCNN) là độ dài giữa hai vạch chia liên tiếp."
      },
      {
        q: "Khi đo thể tích vật rắn không thấm nước và chìm bằng bình chia độ, công thức tính là:",
        options: ["V = V_sau + V_trước", "V = V_sau − V_trước", "V = V_sau × V_trước", "V = V_sau / V_trước"],
        ans: 1,
        exp: "Thể tích vật rắn chìm bằng thể tích nước dâng lên: V = V_sau - V_trước."
      }
    ];
  } else if (id === 6) {
    return [
      {
        q: "Đơn vị đo khối lượng cơ bản trong hệ thống đo lường chính thức của nước ta là gì?",
        options: ["Gam (g)", "Miligam (mg)", "Kilôgam (kg)", "Tấn"],
        ans: 2,
        exp: "Kilôgam (kg) là đơn vị đo khối lượng cơ bản trong hệ đơn vị đo lường quốc tế (SI) và pháp định Việt Nam."
      },
      {
        q: "Chức năng TARE trên cân điện tử có tác dụng gì?",
        options: ["Tắt nguồn cân", "Trừ bì (trừ khối lượng của đĩa hoặc cốc chứa mẫu)", "Chuyển đổi sang đơn vị ounce", "Tăng độ chính xác lên 10 lần"],
        ans: 1,
        exp: "Phím TARE dùng để trừ bì, đưa số hiển thị về 0 khi đã đặt vật chứa, giúp đo chính xác khối lượng mẫu chất bên trong."
      }
    ];
  } else if (id === 7) {
    return [
      {
        q: "Để đo thời gian của một vận động viên chạy 100 m, dụng cụ đo thích hợp nhất là:",
        options: ["Đồng hồ cát", "Đồng hồ mặt trời", "Đồng hồ bấm giây", "Đồng hồ quả lắc treo tường"],
        ans: 2,
        exp: "Đồng hồ bấm giây có ĐCNN nhỏ (0,01s hoặc 0,1s) và thao tác nhanh, rất phù hợp đo khoảng thời gian ngắn trong thể thao."
      },
      {
        q: "Khoảng thời gian diễn ra một sự việc được xác định bằng cách:",
        options: ["Lấy thời điểm kết thúc trừ thời điểm bắt đầu", "Lấy thời điểm kết thúc cộng thời điểm bắt đầu", "Nhìn vị trí kim giờ của đồng hồ", "Chỉ cần ghi thời điểm bắt đầu"],
        ans: 0,
        exp: "Khoảng thời gian = Thời điểm kết thúc - Thời điểm bắt đầu (khi cùng đơn vị đo)."
      }
    ];
  } else if (id === 8) {
    return [
      {
        q: "Nhiệt kế chất lỏng hoạt động dựa trên hiện tượng vật lí nào?",
        options: ["Sự dẫn điện của chất lỏng", "Sự nở vì nhiệt của chất lỏng", "Sự bay hơi của nước", "Sự ngưng tụ của hơi nước"],
        ans: 1,
        exp: "Chất lỏng (thủy ngân, rượu màu...) nở ra khi nóng lên và co lại khi lạnh đi, mực chất lỏng thay đổi chỉ nhiệt độ tương ứng."
      },
      {
        q: "Nhiệt độ của nước đá đang tan và nước đang sôi ở điều kiện tiêu chuẩn trong thang Celsius lần lượt là:",
        options: ["0 °C và 100 °C", "32 °C và 212 °C", "-10 °C và 100 °C", "0 °C và 80 °C"],
        ans: 0,
        exp: "Thang Celsius lấy nhiệt độ nước đá đang tan là 0 °C và nước sôi ở điều kiện tiêu chuẩn là 100 °C."
      }
    ];
  } else if (id === 10) {
    return [
      {
        q: "Quá trình chất chuyển từ thể lỏng sang thể hơi (khí) được gọi là gì?",
        options: ["Nóng chảy", "Đông đặc", "Hoá hơi", "Ngưng tụ"],
        ans: 2,
        exp: "Quá trình chất chuyển từ thể lỏng sang thể hơi gọi là hoá hơi (bao gồm bay hơi và sôi)."
      },
      {
        q: "So sánh các thể của chất, chất ở thể nào dễ bị nén nhất?",
        options: ["Thể rắn", "Thể lỏng", "Thể khí", "Cả ba thể đều nén dễ như nhau"],
        ans: 2,
        exp: "Ở thể khí, các hạt chuyển động tự do và ở rất xa nhau nên thể tích khí rất dễ bị nén."
      }
    ];
  } else if (id === 19) {
    return [
      {
        q: "Điểm khác biệt cơ bản nhất giữa tế bào nhân sơ và tế bào nhân thực là gì?",
        options: ["Tế bào nhân sơ không có màng tế bào", "Tế bào nhân sơ chưa có màng nhân bao bọc vật chất di truyền (chỉ có vùng nhân)", "Tế bào nhân thực không có tế bào chất", "Tế bào nhân thực không có ribosome"],
        ans: 1,
        exp: "Tế bào nhân sơ (như vi khuẩn) chỉ có vùng nhân chưa có màng bao bọc; tế bào nhân thực có nhân hoàn chỉnh được màng nhân bao bọc."
      },
      {
        q: "Cấu trúc nào sau đây có ở tế bào thực vật quang hợp mà KHÔNG có ở tế bào động vật?",
        options: ["Nhân tế bào và màng tế bào", "Lục lạp và thành tế bào cellulose", "Ti thể và ribosome", "Tế bào chất"],
        ans: 1,
        exp: "Tế bào thực vật có thành tế bào giúp định hình tế bào và lục lạp chứa diệp lục để quang hợp."
      }
    ];
  } else if (id === 41) {
    return [
      {
        q: "Mỗi lực được biểu diễn bằng một mũi tên gồm 4 yếu tố nào sau đây?",
        options: ["Gốc (điểm đặt), phương, chiều, độ lớn", "Khối lượng, thể tích, nhiệt độ, chiều cao", "Đơn vị đo, dụng cụ đo, người kéo, thời gian", "Vận tốc, quãng đường, gia tốc, lực kế"],
        ans: 0,
        exp: "Lực là một đại lượng vectơ, được biểu diễn bằng mũi tên gồm: gốc (điểm đặt), phương, chiều và độ dài biểu thị độ lớn theo tỉ xích."
      },
      {
        q: "Một lực đẩy nằm ngang hướng sang phải có độ lớn 20 N. Với tỉ xích 1 cm ứng với 10 N, mũi tên được vẽ dài:",
        options: ["1 cm", "2 cm", "10 cm", "20 cm"],
        ans: 1,
        exp: "Chiều dài mũi tên = 20 N / (10 N/cm) = 2 cm hướng sang phải."
      }
    ];
  } else if (id === 42) {
    return [
      {
        q: "Trong giới hạn đàn hồi, độ dãn của lò xo treo thẳng đứng có mối quan hệ như thế nào với khối lượng quả nặng?",
        options: ["Tỉ lệ nghịch với khối lượng quả nặng", "Tỉ lệ thuận với khối lượng quả nặng (Δl₂/Δl₁ = m₂/m₁)", "Không phụ thuộc vào khối lượng", "Luôn bằng 2 lần chiều dài ban đầu"],
        ans: 1,
        exp: "Trong giới hạn đàn hồi, độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo: treo khối lượng gấp đôi thì độ dãn gấp đôi."
      },
      {
        q: "Lò xo có chiều dài tự nhiên l₀ = 10 cm. Khi treo quả cân 100 g thì dài 12 cm. Độ dãn Δl bằng bao nhiêu?",
        options: ["10 cm", "12 cm", "2 cm", "22 cm"],
        ans: 2,
        exp: "Độ dãn Δl = l - l₀ = 12 cm - 10 cm = 2 cm."
      }
    ];
  } else if (id === 43) {
    return [
      {
        q: "Gần mặt đất, mối liên hệ xấp xỉ giữa trọng lượng P (đơn vị N) và khối lượng m (đơn vị kg) là:",
        options: ["P ≈ m", "P ≈ 10 × m", "P ≈ m / 10", "P ≈ 100 × m"],
        ans: 1,
        exp: "Gần bề mặt Trái Đất, công thức tính trọng lượng xấp xỉ là P ≈ 10m (với m tính bằng kg, P tính bằng N)."
      },
      {
        q: "Một túi gạo có khối lượng 5 kg thì có trọng lượng gần bằng bao nhiêu niutơn?",
        options: ["5 N", "0,5 N", "50 N", "500 N"],
        ans: 2,
        exp: "P ≈ 10 × m = 10 × 5 = 50 N."
      }
    ];
  } else if (id === 48) {
    return [
      {
        q: "Định luật bảo toàn năng lượng khẳng định điều gì?",
        options: ["Năng lượng có thể tự sinh ra từ hư vô", "Năng lượng có thể tự biến mất sau một thời gian", "Năng lượng không tự sinh ra cũng không tự mất đi, chỉ chuyển hoá từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác", "Tổng năng lượng trong vũ trụ luôn giảm dần"],
        ans: 2,
        exp: "Năng lượng không tự nhiên sinh ra hay mất đi, chỉ biến đổi từ dạng này sang dạng khác hoặc truyền giữa các vật."
      },
      {
        q: "Khi bật một chiếc quạt điện, năng lượng điện chủ yếu chuyển hóa thành dạng năng lượng hữu ích nào?",
        options: ["Nhiệt năng làm nóng quạt", "Động năng của cánh quạt quay tạo gió", "Năng lượng âm thanh tiếng vo ve", "Quang năng phát sáng"],
        ans: 1,
        exp: "Mục đích sử dụng quạt là tạo gió mát, do đó điện năng biến thành cơ năng (động năng) của cánh quạt là năng lượng hữu ích."
      }
    ];
  } else if (id === 53) {
    return [
      {
        q: "Nguyên nhân chính dẫn đến hiện tượng ta nhìn thấy các hình dạng khác nhau của Mặt Trăng (các pha) trong tháng là gì?",
        options: ["Mặt Trăng bị bóng Trái Đất che lấp mỗi đêm", "Mặt Trăng thay đổi hình dạng thật từ tròn sang lưỡi liềm", "Góc nhìn phần bề mặt Mặt Trăng được Mặt Trời chiếu sáng thay đổi khi Mặt Trăng quay quanh Trái Đất", "Mặt Trời lúc chiếu mạnh lúc chiếu yếu"],
        ans: 2,
        exp: "Mặt Trăng luôn được Mặt Trời chiếu sáng 1 nửa, nhưng do góc nhìn từ Trái Đất thay đổi nên ta thấy phần sáng biến đổi theo chu kì các pha."
      },
      {
        q: "Chu kì lặp lại các pha của Mặt Trăng (tháng giao hội) kéo dài khoảng bao lâu?",
        options: ["Khoảng 24 giờ", "Khoảng 7 ngày", "Khoảng 29,5 ngày", "Khoảng 365 ngày"],
        ans: 2,
        exp: "Chu kì lặp lại các pha từ trăng tròn đến trăng tròn tiếp theo kéo dài khoảng 29,5 ngày (ứng với một tháng âm lịch)."
      }
    ];
  } else if (id === 54) {
    return [
      {
        q: "Trong Hệ Mặt Trời, Trái Đất nằm ở vị trí thứ mấy theo thứ tự khoảng cách xa dần Mặt Trời?",
        options: ["Vị trí thứ nhất", "Vị trí thứ hai", "Vị trí thứ ba", "Vị trí thứ tư"],
        ans: 2,
        exp: "Thứ tự 8 hành tinh từ gần đến xa: Thủy tinh (1), Kim tinh (2), Trái Đất (3), Hỏa tinh (4), Mộc tinh (5), Thổ tinh (6), Thiên Vương tinh (7), Hải Vương tinh (8)."
      },
      {
        q: "Đơn vị thiên văn (AU) là gì và xấp xỉ bằng bao nhiêu km?",
        options: ["Quãng đường ánh sáng đi trong 1 năm, xấp xỉ 9,5 nghìn tỉ km", "Khoảng cách trung bình từ Trái Đất đến Mặt Trời, xấp xỉ 150 triệu km", "Khoảng cách từ Trái Đất đến Mặt Trăng, xấp xỉ 384 000 km", "Bán kính của Trái Đất, xấp xỉ 6 400 km"],
        ans: 1,
        exp: "1 AU (Astronomical Unit) là khoảng cách trung bình từ Trái Đất tới Mặt Trời, xấp xỉ 150 triệu km."
      }
    ];
  } else if (id === 55) {
    return [
      {
        q: "Hệ Mặt Trời của chúng ta nằm ở đâu trong Ngân Hà (Milky Way)?",
        options: ["Nằm ngay tại tâm của Ngân Hà", "Nằm ở một nhánh xoắn ốc cách tâm Ngân Hà khoảng 26 000 năm ánh sáng", "Nằm hoàn toàn bên ngoài Ngân Hà", "Ngân Hà nằm bên trong Trái Đất"],
        ans: 1,
        exp: "Ngân Hà có dạng xoắn ốc khổng lồ; Hệ Mặt Trời nằm ở một nhánh xoắn ốc cách tâm thiên hà khoảng 26.000 năm ánh sáng."
      },
      {
        q: "Năm ánh sáng là đơn vị đo của đại lượng nào?",
        options: ["Độ dài (khoảng cách thiên văn)", "Thời gian", "Độ sáng của ngôi sao", "Khối lượng thiên thể"],
        ans: 0,
        exp: "Năm ánh sáng là đơn vị đo độ dài, bằng quãng đường ánh sáng truyền trong chân không suốt một năm (xấp xỉ 9,5 nghìn tỉ km)."
      }
    ];
  } else {
    // General structured generator for any other lesson based on its sections
    const s1 = lesson.sections[0] ? lesson.sections[0].heading : 'Kiến thức bài học';
    const s2 = lesson.sections[1] ? lesson.sections[1].heading : 'Ứng dụng thực tế';
    return [
      {
        q: `Nội dung trọng tâm liên quan đến "${lesson.title}" được giải thích đúng là:`,
        options: [
          lesson.sections[0] ? lesson.sections[0].text.substring(0, 80) + '...' : 'Kiến thức cốt lõi đúng quy chuẩn SGK KHTN 6',
          'Hiện tượng không tuân theo các quy luật tự nhiên đã biết',
          'Không thể quan sát hay kiểm chứng bằng thí nghiệm khoa học',
          'Chỉ áp dụng trong phòng thí nghiệm, không có ý nghĩa thực tiễn'
        ],
        ans: 0,
        exp: `Khái niệm và quy luật được nêu rõ trong bài học: ${lesson.sections[0] ? lesson.sections[0].heading : lesson.title}.`
      },
      {
        q: `Ứng dụng hoặc lưu ý an toàn quan trọng của bài học "${lesson.title}" là:`,
        options: [
          'Tuân thủ đúng quy trình thực nghiệm, quan sát và ghi chép trung thực',
          'Tự do thao tác mà không cần đồ bảo hộ hay hướng dẫn',
          'Chỉ cần dựa vào cảm giác của tay để đánh giá số liệu đo',
          'Không cần ghi đơn vị đo sau mỗi kết quả thực tế'
        ],
        ans: 0,
        exp: 'Mọi thao tác khoa học đều đòi hỏi quy trình chuẩn xác, sử dụng đúng dụng cụ và ghi chép kèm đơn vị đo.'
      }
    ];
  }
}

// 30 Trạng Nguyên Exam Questions covering all 10 chapters
const trangNguyenQuestions = [
  {
    q: "Câu 1: Lĩnh vực nào sau đây của Khoa học tự nhiên chuyên nghiên cứu về vật sống, các hoạt động sống và sự đa dạng sinh học?",
    options: ["Vật lí học", "Hoá học", "Sinh học", "Thiên văn học"],
    ans: 2,
    exp: "Sinh học là lĩnh vực chuyên nghiên cứu về vật sống, cấu tạo và các quá trình sống của sinh vật."
  },
  {
    q: "Câu 2: Biển báo có hình tam giác viền vàng, bên trong có hình ngọn lửa mang ý nghĩa cảnh báo điều gì?",
    options: ["Chất ăn mòn", "Chất dễ cháy", "Chất độc hại", "Điện cao thế nguy hiểm"],
    ans: 1,
    exp: "Hình ngọn lửa là kí hiệu cảnh báo chất dễ cháy, cần tránh xa nguồn nhiệt và tia lửa."
  },
  {
    q: "Câu 3: Để quan sát cấu tạo của tế bào biểu bì vảy hành tây, ta cần sử dụng thiết bị quang học nào?",
    options: ["Kính râm", "Kính lúp cầm tay", "Kính hiển vi quang học", "Ống nhòm"],
    ans: 2,
    exp: "Tế bào có kích thước hiển vi (vài chục micromet), kính lúp không đủ độ phóng đại, phải dùng kính hiển vi quang học."
  },
  {
    q: "Câu 4: Khi dùng thước có ĐCNN là 0,1 cm để đo chiều dài một chiếc bút chì, cách ghi kết quả nào sau đây là ĐÚNG?",
    options: ["15 cm", "15,2 cm", "15,25 cm", "15,235 cm"],
    ans: 1,
    exp: "Kết quả đo phải được ghi theo ĐCNN của thước (ở đây là một chữ số phần mười sau dấu phẩy: 15,2 cm)."
  },
  {
    q: "Câu 5: Một người có khối lượng 45 kg thì có trọng lượng ở gần mặt đất xấp xỉ là bao nhiêu?",
    options: ["45 N", "4,5 N", "450 N", "4500 N"],
    ans: 2,
    exp: "Trọng lượng gần mặt đất P ≈ 10 × m = 10 × 45 = 450 N."
  },
  {
    q: "Câu 6: Quá trình hơi nước trong không khí gặp lạnh chuyển thành các giọt nước nhỏ li ti tạo thành mây hoặc sương là hiện tượng gì?",
    options: ["Nóng chảy", "Đông đặc", "Hoá hơi", "Ngưng tụ"],
    ans: 3,
    exp: "Hơi nước (chất khí) gặp lạnh chuyển thành giọt nước (chất lỏng) là sự ngưng tụ."
  },
  {
    q: "Câu 7: Khí nào chiếm thể tích lớn nhất trong thành phần không khí khô ở tầng đối lưu?",
    options: ["Oxygen (khoảng 21%)", "Nitrogen (khoảng 78%)", "Carbon dioxide (khoảng 0,04%)", "Hơi nước"],
    ans: 1,
    exp: "Không khí gồm khoảng 78% Nitrogen, 21% Oxygen và 1% các khí khác."
  },
  {
    q: "Câu 8: Tính chất nào sau đây là tính chất hoá học của đường saccarozơ?",
    options: ["Là chất rắn, màu trắng", "Tan tốt trong nước tạo dung dịch không màu", "Khi đun nóng mạnh bị hoá than đen và có khói mùi khét", "Không có mùi ở nhiệt độ thường"],
    ans: 2,
    exp: "Bị biến đổi tạo thành chất mới (than đen và hơi nước) là biểu hiện của tính chất hoá học."
  },
  {
    q: "Câu 9: Để làm giảm nguy cơ ngộ độc và bảo vệ sức khoẻ, hành động nào sau đây là ĐÚNG?",
    options: ["Cắt bỏ phần nấm mốc trên bánh mì rồi ăn phần còn lại", "Ăn củ khoai tây đã mọc nhiều mầm xanh", "Không ăn thực phẩm đã hết hạn, bị ôi thiu hoặc nổi nấm mốc", "Dùng chai nhựa dùng 1 lần đựng nước sôi 100 °C"],
    ans: 2,
    exp: "Thực phẩm mốc chứa độc tố vi nấm ngấm sâu vào bên trong, tuyệt đối không được ăn."
  },
  {
    q: "Câu 10: Nước muối sinh lý 0,9% là ví dụ của loại hỗn hợp nào?",
    options: ["Huyền phù", "Nhũ tương", "Dung dịch đồng nhất", "Hỗn hợp không đồng nhất"],
    ans: 2,
    exp: "Dung dịch là hỗn hợp đồng nhất giữa dung môi (nước) và chất tan (muối NaCl)."
  },
  {
    q: "Câu 11: Để tách hỗn hợp gồm dầu ăn và nước ra khỏi nhau, phương pháp thích hợp nhất là:",
    options: ["Cô cạn bằng ngọn lửa đèn cồn", "Lọc qua giấy lọc thông thường", "Chiết bằng phễu chiết", "Dùng nam châm hút"],
    ans: 2,
    exp: "Dầu ăn không tan trong nước và nhẹ hơn nước nên nổi thành lớp phía trên, dùng phễu chiết tách lớp nước ở dưới."
  },
  {
    q: "Câu 12: Đơn vị cấu trúc và chức năng cơ bản của mọi cơ thể sinh vật là:",
    options: ["Nguyên tử", "Tế bào", "Mô", "Cơ quan"],
    ans: 1,
    exp: "Tế bào là đơn vị cơ bản cấu tạo nên mọi cơ thể sống và thực hiện các chức năng sống."
  },
  {
    q: "Câu 13: Thành phần nào của tế bào chứa vật chất di truyền và đóng vai trò điều khiển mọi hoạt động sống?",
    options: ["Màng tế bào", "Tế bào chất", "Nhân (hoặc vùng nhân)", "Không bào"],
    ans: 2,
    exp: "Nhân tế bào (hoặc vùng nhân ở nhân sơ) chứa DNA điều khiển mọi hoạt động sống của tế bào."
  },
  {
    q: "Câu 14: Từ 1 tế bào ban đầu, sau 4 lần phân chia liên tiếp sẽ tạo ra bao nhiêu tế bào con?",
    options: ["4 tế bào", "8 tế bào", "16 tế bào", "32 tế bào"],
    ans: 2,
    exp: "Số tế bào con tạo thành N = 2^n = 2^4 = 16 tế bào."
  },
  {
    q: "Câu 15: Thứ tự sắp xếp các cấp tổ chức cấu tạo cơ thể người từ thấp đến cao là:",
    options: ["Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể", "Cơ quan → Tế bào → Mô → Hệ cơ quan → Cơ thể", "Tế bào → Cơ quan → Mô → Cơ thể → Hệ cơ quan", "Mô → Tế bào → Cơ quan → Hệ cơ quan → Cơ thể"],
    ans: 0,
    exp: "Các cấp độ tổ chức cơ thể: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể."
  },
  {
    q: "Câu 16: Sinh vật nào sau đây là cơ thể đơn bào?",
    options: ["Cây lúa nước", "Trùng giày (Paramecium)", "Con giun đất", "Cây nấm rơm"],
    ans: 1,
    exp: "Trùng giày là sinh vật đơn bào, toàn bộ cơ thể chỉ gồm một tế bào nhân thực."
  },
  {
    q: "Câu 17: Trong hệ thống phân loại 5 giới, giới nào gồm các sinh vật nhân sơ?",
    options: ["Giới Khởi sinh (Monera)", "Giới Nguyên sinh (Protista)", "Giới Nấm (Fungi)", "Giới Thực vật (Plantae)"],
    ans: 0,
    exp: "Giới Khởi sinh gồm các sinh vật đơn bào có cấu tạo tế bào nhân sơ (như vi khuẩn)."
  },
  {
    q: "Câu 18: Virus khác với vi khuẩn ở điểm cốt lõi nào sau đây?",
    options: ["Virus có kích thước lớn hơn vi khuẩn", "Virus chưa có cấu tạo tế bào, sống ký sinh nội bào bắt buộc", "Virus có thể tự tổng hợp chất dinh dưỡng ngoài môi trường", "Virus có thể bị tiêu diệt dễ dàng bằng thuốc kháng sinh thông thường"],
    ans: 1,
    exp: "Virus chưa có cấu tạo tế bào (chỉ gồm vỏ protein và lõi acid nucleic), chỉ nhân lên được khi ở trong tế bào chủ."
  },
  {
    q: "Câu 19: Bệnh sốt rét ở người do tác nhân nào sau đây gây ra và truyền qua sinh vật trung gian nào?",
    options: ["Do virus Dengue, truyền qua muỗi vằn Aedes", "Do trùng sốt rét Plasmodium, truyền qua muỗi Anopheles", "Do vi khuẩn tả, truyền qua ruồi nhà", "Do giun chỉ, truyền qua bọ chét"],
    ans: 1,
    exp: "Sốt rét do nguyên sinh vật Plasmodium gây ra, lây truyền qua muỗi cái Anopheles khi hút máu."
  },
  {
    q: "Câu 20: Nhóm thực vật nào sau đây đã có mạch dẫn nhưng sinh sản bằng bào tử và CHƯA CÓ hạt?",
    options: ["Ngành Rêu", "Ngành Dương xỉ", "Ngành Hạt trần", "Ngành Hạt kín"],
    ans: 1,
    exp: "Dương xỉ đã có rễ, thân, lá thật và hệ mạch dẫn, sinh sản bằng bào tử (chưa có hạt)."
  },
  {
    q: "Câu 21: Động vật nào sau đây thuộc lớp Thú (Động vật có vú) mặc dù sống hoàn toàn dưới nước?",
    options: ["Cá mập", "Cá chép", "Cá voi xanh", "Cá sấu"],
    ans: 2,
    exp: "Cá voi và cá heo là động vật có xương sống thuộc lớp Thú: đẻ con, nuôi con bằng sữa mẹ và hô hấp bằng phổi."
  },
  {
    q: "Câu 22: Khi nén hoặc kéo dãn một chiếc lò xo trong giới hạn đàn hồi, lực xuất hiện chống lại sự biến dạng là:",
    options: ["Lực ma sát trượt", "Lực đàn hồi", "Lực hấp dẫn", "Lực cản của không khí"],
    ans: 1,
    exp: "Lực đàn hồi xuất hiện khi vật bị biến dạng đàn hồi, có xu hướng đưa vật trở về hình dạng ban đầu."
  },
  {
    q: "Câu 23: Treo thẳng đứng một lò xo dài tự nhiên 12 cm. Treo quả cân 100 g thì lò xo dài 14 cm. Nếu treo quả cân 200 g (trong giới hạn đàn hồi) thì chiều dài lò xo là:",
    options: ["14 cm", "16 cm", "18 cm", "20 cm"],
    ans: 1,
    exp: "Treo 100g thì dãn Δl = 14 - 12 = 2 cm. Treo 200g gấp đôi nên dãn Δl = 4 cm. Chiều dài mới l = 12 + 4 = 16 cm."
  },
  {
    q: "Câu 24: Khi một vận động viên đẩy tạ bước đi trên mặt sân, lực ma sát giữa đế giày và mặt sân là lực có tác dụng gì?",
    options: ["Cản trở chuyển động của vận động viên", "Giúp chân bám vào mặt sân để đẩy người tiến về phía trước (ma sát có lợi)", "Làm vận động viên trượt ngã", "Không có tác dụng gì"],
    ans: 1,
    exp: "Ma sát nghỉ giữa đế giày và mặt đất đóng vai trò đẩy người tiến lên, là lực có lợi."
  },
  {
    q: "Câu 25: Dạng năng lượng dự trữ trong thức ăn, xăng dầu và pin được gọi là gì?",
    options: ["Động năng", "Thế năng hấp dẫn", "Hoá năng", "Năng lượng âm"],
    ans: 2,
    exp: "Hoá năng là năng lượng lưu trữ trong liên kết hoá học của các chất dinh dưỡng, nhiên liệu, pin..."
  },
  {
    q: "Câu 26: Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo?",
    options: ["Than đá", "Dầu mỏ", "Khí thiên nhiên", "Năng lượng gió và ánh sáng mặt trời"],
    ans: 3,
    exp: "Năng lượng gió và năng lượng mặt trời là nguồn năng lượng tái tạo, liên tục được tự nhiên bù đắp."
  },
  {
    q: "Câu 27: Hiện tượng ngày và đêm luân phiên nhau trên Trái Đất là do nguyên nhân chính nào?",
    options: ["Trái Đất có dạng hình cầu và tự quay quanh trục từ Tây sang Đông", "Mặt Trời chuyển động quanh Trái Đất một vòng mất 24 giờ", "Mặt Trăng che khuất Mặt Trời", "Trái Đất ngừng quay vào ban đêm"],
    ans: 0,
    exp: "Trái Đất hình cầu được Mặt Trời chiếu sáng 1 nửa, sự tự quay quanh trục làm các vùng lần lượt ra sáng và vào tối."
  },
  {
    q: "Câu 28: Pha Mặt Trăng nào xuất hiện khi vị trí của Mặt Trăng nằm giữa Mặt Trời và Trái Đất (phần được chiếu sáng quay lưng về phía Trái Đất)?",
    options: ["Trăng tròn (Full Moon)", "Không trăng / Trăng mới (New Moon)", "Trăng bán nguyệt đầu tháng", "Trăng khuyết cuối tháng"],
    ans: 1,
    exp: "Pha Không trăng (Trăng mới) xảy ra khi phần sáng của Mặt Trăng quay về phía Mặt Trời, hướng tối quay về Trái Đất."
  },
  {
    q: "Câu 29: Hành tinh nào lớn nhất trong 8 hành tinh của Hệ Mặt Trời?",
    options: ["Trái Đất", "Hỏa tinh", "Mộc tinh (Sao Mộc)", "Hải Vương tinh"],
    ans: 2,
    exp: "Mộc tinh (Jupiter) là hành tinh lớn nhất trong Hệ Mặt Trời, thuộc nhóm hành tinh khí khổng lồ."
  },
  {
    q: "Câu 30: Một năm ánh sáng tương đương với khoảng cách xấp xỉ bao nhiêu nghìn tỉ kilômét?",
    options: ["150 triệu km", "384 nghìn km", "9,5 nghìn tỉ km", "100 nghìn km"],
    ans: 2,
    exp: "1 năm ánh sáng (light-year) xấp xỉ bằng 9,5 nghìn tỉ kilômét."
  }
];

// Combine into complete dataset
const khtnData = {
  chapters: chapters,
  lessons: lessons,
  allFigures: allFigures,
  tables: {
    formulas: tables[1].slice(1).map(r => ({ topic: r[0], formula: r[1], note: r[2] })),
    concepts: tables[2].slice(1).map(r => ({ pair: r[0], diff: r[1] })),
    planets: tables[3].slice(1).map(r => ({ name: r[0], au: r[1], rotationDay: r[2], orbitDay: r[3] }))
  },
  trangNguyenQuestions: trangNguyenQuestions
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn_6_full_data.json', JSON.stringify(khtnData, null, 2), 'utf8');
console.log('Saved khtn_6_full_data.json successfully!');
console.log(`Summary: ${chapters.length} chapters, ${lessons.length} lessons, ${allFigures.length} figures, ${trangNguyenQuestions.length} Trang Nguyen questions.`);
