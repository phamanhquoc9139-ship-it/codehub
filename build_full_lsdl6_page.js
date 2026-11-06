const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_parsed_data.json', 'utf8'));

console.log('Generating lsdl_6.html with', data.allLessons.length, 'lessons...');

// Helper to sanitize text for HTML
function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
}

// Generate Questions for each lesson
function generateQuestionsForLesson(lesson, idx) {
  const isHistory = lesson.part === 'history';
  if (isHistory) {
    if (lesson.title.includes('Bài 1 ')) {
      return [
        {
          q: 'Khái niệm Lịch sử bao gồm những nội dung nào sau đây?',
          options: [
            'Tất cả những gì đã xảy ra trong quá khứ và khoa học nghiên cứu, phục dựng quá khứ',
            'Chỉ những câu chuyện thần thoại kì ảo do người xưa truyền lại',
            'Dự đoán những sự kiện chưa xảy ra trong tương lai của loài người',
            'Chỉ các cuộc chiến tranh và xung đột vũ trang thời cổ đại'
          ],
          ans: 0,
          exp: 'Lịch sử là tất cả những gì đã xảy ra trong quá khứ; đồng thời còn chỉ khoa học nghiên cứu và phục dựng quá khứ.'
        },
        {
          q: 'Mục đích quan trọng nhất của việc học Lịch sử là gì?',
          options: [
            'Hiểu cội nguồn bản thân, dân tộc, rút bài học quá khứ để xây dựng hiện tại và tương lai',
            'Chỉ để ghi nhớ các con số năm tháng cho các bài kiểm tra',
            'Phê phán tất cả những sai lầm của thế hệ đi trước',
            'Sưu tầm đồ cổ để trao đổi buôn bán thương mại'
          ],
          ans: 0,
          exp: 'Học lịch sử giúp hiểu cội nguồn, biết ơn người đi trước và rút kinh nghiệm cho tương lai.'
        }
      ];
    } else if (lesson.title.includes('Bài 2 ')) {
      return [
        {
          q: 'Tư liệu nào cung cấp thông tin đầu tiên, trực tiếp về sự kiện lịch sử?',
          options: ['Tư liệu gốc', 'Tư liệu truyền miệng', 'Tư liệu thứ cấp', 'Sách tham khảo hiện đại'],
          ans: 0,
          exp: 'Tư liệu gốc cung cấp thông tin đầu tiên, trực tiếp về sự kiện hoặc thời kì, có giá trị đặc biệt khi phục dựng lịch sử.'
        },
        {
          q: 'Trống đồng Đông Sơn và các công cụ đá khảo cổ thuộc loại tư liệu nào?',
          options: ['Tư liệu hiện vật', 'Tư liệu chữ viết', 'Tư liệu truyền miệng', 'Tư liệu văn bản'],
          ans: 0,
          exp: 'Trống đồng, công cụ lao động là di tích, hiện vật người xưa để lại, thuộc tư liệu hiện vật.'
        }
      ];
    } else if (lesson.title.includes('Bài 3 ')) {
      return [
        {
          q: 'Trong Công lịch, năm 1 trước Công nguyên (TCN) liền kề với năm nào?',
          options: ['Năm 1 Công nguyên (không có năm 0)', 'Năm 0 Công nguyên', 'Năm 2 Công nguyên', 'Năm 10 Công nguyên'],
          ans: 0,
          exp: 'Quy ước Công lịch: năm 1 TCN liền trước năm 1 Công nguyên, không có năm 0.'
        },
        {
          q: 'Một thiên niên kỉ tương ứng với khoảng thời gian bao nhiêu năm?',
          options: ['1 000 năm', '100 năm', '10 năm', '10 000 năm'],
          ans: 0,
          exp: '1 thập kỉ = 10 năm; 1 thế kỉ = 100 năm; 1 thiên niên kỉ = 1 000 năm.'
        }
      ];
    } else if (lesson.title.includes('Bài 14 ')) {
      return [
        {
          q: 'Đứng đầu Nhà nước Văn Lang thời các vua Hùng là ai?',
          options: ['Hùng Vương', 'An Dương Vương', 'Lạc Tướng', 'Bồ Chính'],
          ans: 0,
          exp: 'Đứng đầu Nhà nước Văn Lang là Hùng Vương, nắm mọi quyền hành tối cao.'
        },
        {
          q: 'Người đứng đầu các bộ trong bộ máy nhà nước Văn Lang là ai?',
          options: ['Lạc tướng', 'Lạc hầu', 'Bồ chính', 'Quan lang'],
          ans: 0,
          exp: 'Hùng Vương chia nước thành 15 bộ, đứng đầu mỗi bộ là Lạc tướng.'
        }
      ];
    } else if (lesson.title.includes('Bài 18 ')) {
      return [
        {
          q: 'Kế sách độc đáo mang tính quyết định của Ngô Quyền trong trận Bạch Đằng năm 938 là gì?',
          options: [
            'Bố trí trận địa cọc ngầm ở cửa sông Bạch Đằng kết hợp quy luật lên xuống của thuỷ triều',
            'Đào hào luỹ kiên cố quanh thành Đại La để cố thủ',
            'Dùng hoả công đốt cháy doanh trại địch trên bộ',
            'Cầu viện quân các nước lân bang để hiệp đồng tác chiến'
          ],
          ans: 0,
          exp: 'Ngô Quyền đã đóng cọc vạt nhọn bọc sắt dưới lòng sông Bạch Đằng, nhử thuyền giặc vào lúc triều lên và phản công khi triều rút.'
        },
        {
          q: 'Chiến thắng Bạch Đằng năm 938 có ý nghĩa lịch sử vĩ đại như thế nào?',
          options: [
            'Chấm dứt hơn một nghìn năm Bắc thuộc, mở ra kỉ nguyên độc lập tự chủ lâu dài cho dân tộc',
            'Mở đầu thời kì Bắc thuộc của các triều đại phong kiến phương Bắc',
            'Thành lập nhà nước Vạn Xuân đầu tiên',
            'Giành được quyền tự chủ ngắn ngủi trong vài tháng'
          ],
          ans: 0,
          exp: 'Chiến thắng Bạch Đằng 938 chấm dứt cơ bản hơn một nghìn năm Bắc thuộc, mở ra thời kì độc lập lâu dài.'
        }
      ];
    }
  } else {
    // Geo questions
    if (lesson.id === 'geo_intro' || lesson.title.includes('Bài mở đầu')) {
      return [
        {
          q: 'Phương pháp nào sau đây là quan trọng nhất để học tốt môn Địa lí 6?',
          options: [
            'Khai thác thông tin từ bản đồ, biểu đồ kết hợp quan sát hiện tượng ngoài thực tế',
            'Chỉ học thuộc lòng các con số trong sách giáo khoa',
            'Vẽ bản đồ mà không cần xem bảng chú giải',
            'Chỉ đọc truyện kể lịch sử'
          ],
          ans: 0,
          exp: 'Địa lí cần kết hợp đọc bản đồ, biểu đồ, tranh ảnh và quan sát thực tiễn xung quanh.'
        },
        {
          q: 'Môn Địa lí lớp 6 giúp học sinh hiểu rõ điều gì?',
          options: [
            'Các thành phần tự nhiên của Trái Đất và mối quan hệ tương tác giữa con người với môi trường',
            'Cách chế tạo các công cụ kim khí thời nguyên thuỷ',
            'Cấu trúc ngữ pháp tiếng Việt',
            'Công thức giải phương trình toán học'
          ],
          ans: 0,
          exp: 'Địa lí 6 nghiên cứu Trái Đất, các quyển tự nhiên và sự tương tác giữa con người và thiên nhiên.'
        }
      ];
    } else if (lesson.title.includes('Bài 1 ')) {
      return [
        {
          q: 'Đường kinh tuyến gốc 0° đi qua địa danh nổi tiếng nào?',
          options: [
            'Đài thiên văn Greenwich (Luân Đôn, Vương quốc Anh)',
            'Tháp Eiffel (Pa-ri, Pháp)',
            'Quảng trường Đỏ (Mát-xcơ-va, Nga)',
            'Tượng Nữ thần Tự do (Niu Oóc, Hoa Kỳ)'
          ],
          ans: 0,
          exp: 'Quy ước quốc tế lấy kinh tuyến đi qua đài thiên văn Greenwich ở Luân Đôn làm kinh tuyến gốc 0°.'
        },
        {
          q: 'Toạ độ địa lí của một điểm trên bản đồ được xác định bởi yếu tố nào?',
          options: [
            'Vĩ độ và kinh độ của điểm đó',
            'Độ cao và nhiệt độ không khí',
            'Khoảng cách đến xích đạo bằng đơn vị km',
            'Hướng gió và lượng mưa trung bình'
          ],
          ans: 0,
          exp: 'Toạ độ địa lí của một điểm là kinh độ và vĩ độ của điểm đó trên bản đồ.'
        }
      ];
    } else if (lesson.title.includes('Bài 3 ')) {
      return [
        {
          q: 'Nếu khoảng cách trên bản đồ tỉ lệ 1 : 100 000 đo được 5 cm thì khoảng cách thực tế là bao nhiêu?',
          options: ['5 km', '500 m', '50 km', '0,5 km'],
          ans: 0,
          exp: 'Khoảng cách thực tế D = 5 cm × 100 000 = 500 000 cm = 5 000 m = 5 km.'
        },
        {
          q: 'Tỉ lệ bản đồ 1 : 2 000 000 cho biết điều gì?',
          options: [
            '1 cm trên bản đồ tương ứng với 2 000 000 cm (20 km) ngoài thực địa',
            'Bản đồ đã phóng to thực địa lên 2 triệu lần',
            'Bản đồ này chỉ có thể đo bằng đơn vị dặm',
            'Diện tích bản đồ gấp 2 triệu lần diện tích thật'
          ],
          ans: 0,
          exp: 'Tỉ lệ 1 : 2 000 000 nghĩa là 1 cm trên bản đồ bằng 2 000 000 cm (tức 20 km) ngoài thực tế.'
        }
      ];
    } else if (lesson.title.includes('Bài 8 ')) {
      return [
        {
          q: 'Trái Đất chuyển động quanh Mặt Trời theo quỹ đạo hình gì và trục Trái Đất có đặc điểm gì?',
          options: [
            'Quỹ đạo elip gần tròn, trục nghiêng 66°33’ không đổi hướng trong suốt quá trình chuyển động',
            'Quỹ đạo tròn hoàn hảo, trục thẳng đứng vuông góc mặt phẳng quỹ đạo',
            'Quỹ đạo hình bầu dục, trục liên tục đổi hướng quay',
            'Quỹ đạo xoắn ốc quanh Mặt Trời'
          ],
          ans: 0,
          exp: 'Trái Đất chuyển động quanh Mặt Trời trên quỹ đạo elip gần tròn; trục nghiêng 66°33’ so với mặt phẳng quỹ đạo và không đổi phương.'
        },
        {
          q: 'Khi Bán cầu Bắc ngả về phía Mặt Trời (ngày 22/6 - Hạ chí), thời tiết và ngày đêm ở Bán cầu Bắc ra sao?',
          options: [
            'Là mùa nóng, ngày dài hơn đêm',
            'Là mùa lạnh, đêm dài hơn ngày',
            'Ngày và đêm dài bằng nhau ở khắp mọi nơi',
            'Bán cầu Bắc hoàn toàn là đêm địa cực'
          ],
          ans: 0,
          exp: 'Khi bán cầu nào ngả về phía Mặt Trời thì nhận được nhiều ánh sáng và nhiệt, là mùa nóng, ngày dài hơn đêm.'
        }
      ];
    } else if (lesson.title.includes('Bài 10 ')) {
      return [
        {
          q: 'Cấu tạo bên trong của Trái Đất gồm những lớp nào từ ngoài vào trong?',
          options: [
            'Vỏ Trái Đất → Man-ti (manti) → Nhân (lõi)',
            'Nhân → Man-ti → Khí quyển',
            'Thạch quyển → Thuỷ quyển → Khí quyển',
            'Vỏ lục địa → Đáy đại dương → Vỏ bazan'
          ],
          ans: 0,
          exp: 'Cấu tạo bên trong Trái Đất gồm 3 lớp: Vỏ Trái Đất, lớp Man-ti và lớp Nhân (Lõi).'
        },
        {
          q: 'Lớp nào của Trái Đất có trạng thái quánh dẻo đến rắn và là nơi diễn ra các dòng đối lưu vật chất?',
          options: ['Lớp Man-ti (manti)', 'Lớp vỏ Trái Đất', 'Nhân trong', 'Tầng đất mặt'],
          ans: 0,
          exp: 'Lớp Man-ti có độ dày khoảng 2 900 km, vật chất quánh dẻo tới rắn, phát sinh các dòng đối lưu.'
        }
      ];
    }
  }

  // Generic well-formulated questions for other lessons based on section title
  const title = lesson.title;
  return [
    {
      q: `Nội dung cốt lõi của "${title}" yêu cầu học sinh nắm vững vấn đề nào?`,
      options: [
        'Nắm vững khái niệm, quy luật bản chất, mối quan hệ nhân quả và biết vận dụng thực tiễn',
        'Chỉ cần học thuộc từng câu chữ trong sách mà không cần hiểu bản chất',
        'Bỏ qua các hình ảnh và bản đồ minh hoạ trong bài học',
        'Chỉ tập trung vào các câu hỏi phụ không liên quan'
      ],
      ans: 0,
      exp: `Bài học ${title} rèn luyện tư duy khoa học, nắm bắt sự kiện/hiện tượng và kĩ năng đọc tư liệu, bản đồ thực tế.`
    },
    {
      q: `Khi tìm hiểu "${title}", việc liên hệ với thực tiễn đời sống giúp học sinh:`,
      options: [
        'Hiểu sâu sắc hơn kiến thức, biết giải thích hiện tượng và có hành động bảo vệ môi trường, yêu quý lịch sử',
        'Làm phức tạp hoá các nội dung học tập',
        'Không có ý nghĩa gì đối với môn học',
        'Chỉ phục vụ cho việc thi cử lí thuyết'
      ],
      ans: 0,
      exp: 'Gắn kiến thức với cuộc sống là mục tiêu cốt lõi của bộ sách Kết nối tri thức với cuộc sống.'
    }
  ];
}

// Generate SVG concept mindmap for each lesson
function generateLessonSVG(lesson) {
  const isHistory = lesson.part === 'history';
  const color1 = isHistory ? '#b45309' : '#047857'; // amber-700 / emerald-700
  const color2 = isHistory ? '#f59e0b' : '#10b981'; // amber-500 / emerald-500
  const bg = isHistory ? '#fffbeb' : '#ecfdf5';
  const border = isHistory ? '#fcd34d' : '#a7f3d0';
  const darkBg = '#1f2937';

  // Short label from title
  const cleanTitle = lesson.title.replace(/^Bài \d+\s*/, '').replace(/^Bài mở đầu:?\s*/, '');
  const shortTitle = cleanTitle.length > 32 ? cleanTitle.substring(0, 30) + '...' : cleanTitle;

  return `
  <div class="my-6 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-amber-50/30 dark:from-gray-800/60 dark:to-gray-900/60 border border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full ${isHistory ? 'bg-amber-500' : 'bg-emerald-500'}"></span>
        <span class="text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400">Sơ Đồ Tư Duy Khái Niệm</span>
      </div>
      <span class="text-xs px-2.5 py-0.5 rounded-full font-medium ${isHistory ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'}">
        ${isHistory ? 'Lịch Sử 6' : 'Địa Lí 6'}
      </span>
    </div>
    <div class="w-full overflow-x-auto py-2">
      <svg class="mx-auto w-full max-w-2xl h-auto" viewBox="0 0 680 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Node 1: Nguồn gốc / Khái niệm -->
        <rect x="20" y="30" width="180" height="80" rx="12" fill="${bg}" stroke="${color2}" stroke-width="2" class="dark:fill-gray-800 dark:stroke-${isHistory ? 'amber-500' : 'emerald-500'}"/>
        <text x="110" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="${color1}" class="dark:fill-${isHistory ? 'amber-400' : 'emerald-400'}">1. NỀN TẢNG CỐT LÕI</text>
        <text x="110" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#4b5563" class="dark:fill-gray-300">Khái niệm & Tư liệu gốc</text>

        <!-- Arrow 1 -->
        <g stroke="${color2}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="205" y1="70" x2="245" y2="70"/>
          <polyline points="240,64 248,70 240,76" fill="none"/>
        </g>

        <!-- Node 2: Trọng tâm bài học -->
        <rect x="250" y="20" width="200" height="100" rx="14" fill="${isHistory ? '#fef3c7' : '#d1fae5'}" stroke="${color1}" stroke-width="2.5" class="dark:fill-gray-800 dark:stroke-${isHistory ? 'amber-400' : 'emerald-400'}"/>
        <text x="350" y="55" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#6b7280" class="dark:fill-gray-400">TRỌNG TÂM KIẾN THỨC</text>
        <text x="350" y="78" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#111827" class="dark:fill-white">${shortTitle}</text>
        <text x="350" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#4b5563" class="dark:fill-gray-300">Quy luật & Diễn biến chính</text>

        <!-- Arrow 2 -->
        <g stroke="${color2}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="455" y1="70" x2="495" y2="70"/>
          <polyline points="490,64 498,70 490,76" fill="none"/>
        </g>

        <!-- Node 3: Vận dụng & Ý nghĩa -->
        <rect x="500" y="30" width="160" height="80" rx="12" fill="${bg}" stroke="${color2}" stroke-width="2" class="dark:fill-gray-800 dark:stroke-${isHistory ? 'amber-500' : 'emerald-500'}"/>
        <text x="580" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="${color1}" class="dark:fill-${isHistory ? 'amber-400' : 'emerald-400'}">3. VẬN DỤNG</text>
        <text x="580" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#4b5563" class="dark:fill-gray-300">Thực tiễn & Đời sống</text>
      </svg>
    </div>
  </div>`;
}

// 30 Question Exam for Trạng Nguyên Sử - Địa 6
const trangNguyenQuestions = [
  // Lịch sử 15 câu
  {
    q: "Lịch sử là gì?",
    options: [
      "Tất cả những gì đã xảy ra trong quá khứ và khoa học tìm hiểu, phục dựng quá khứ",
      "Những dự đoán về tương lai của nhân loại",
      "Những câu chuyện hư cấu truyền miệng hoàn toàn kì ảo",
      "Chỉ là các cuộc chiến tranh giữa các quốc gia"
    ],
    ans: 0,
    exp: "Lịch sử là tất cả những gì đã diễn ra trong quá khứ, đồng thời là khoa học nghiên cứu và phục dựng lại quá khứ."
  },
  {
    q: "Tư liệu nào cung cấp thông tin trực tiếp, ban đầu về một sự kiện lịch sử?",
    options: ["Tư liệu gốc", "Tư liệu truyền miệng", "Tư liệu thứ cấp", "Sách giáo khoa tái bản"],
    ans: 0,
    exp: "Tư liệu gốc gắn liền trực tiếp với sự kiện, mang lại giá trị chân xác cao nhất."
  },
  {
    q: "Trong Công lịch, năm 1 trước Công nguyên (TCN) liền trước năm nào?",
    options: ["Năm 1 Công nguyên", "Năm 0", "Năm 2 Công nguyên", "Năm 100 Công nguyên"],
    ans: 0,
    exp: "Trong lịch Công lịch không có năm 0; năm 1 TCN liền trước năm 1 Công nguyên."
  },
  {
    q: "Dấu tích Người tối cổ với các công cụ đá ghè đẽo thô sơ có niên đại khoảng 80 vạn năm ở Việt Nam được tìm thấy tại đâu?",
    options: ["An Khê (Gia Lai)", "Núi Đọ (Thanh Hoá)", "Thẩm Khuyên (Lạng Sơn)", "Đông Sơn (Thanh Hoá)"],
    ans: 0,
    exp: "Rìu tay và công cụ ghè đẽo ở An Khê (Gia Lai) có niên đại rất sớm, khoảng 80 vạn năm trước."
  },
  {
    q: "Nhà nước Văn Lang - nhà nước đầu tiên trong lịch sử Việt Nam được hình thành vào khoảng thời gian nào?",
    options: ["Khoảng thế kỉ VII TCN", "Khoảng năm 208 TCN", "Năm 179 TCN", "Năm 40 Công nguyên"],
    ans: 0,
    exp: "Khoảng thế kỉ VII TCN, thủ lĩnh bộ lạc Văn Lang thống nhất các bộ lạc thành lập nhà nước Văn Lang."
  },
  {
    q: "Kinh đô của nhà nước Âu Lạc thời An Dương Vương đóng tại đâu?",
    options: ["Phong Khê (Cổ Loa, Đông Anh, Hà Nội)", "Bạch Hạc (Việt Trì, Phú Thọ)", "Mê Linh (Hà Nội)", "Hoa Lư (Ninh Bình)"],
    ans: 0,
    exp: "An Dương Vương định đô tại Phong Khê (nay là Cổ Loa, Đông Anh, Hà Nội) và cho xây thành Cổ Loa."
  },
  {
    q: "Cuộc khởi nghĩa của Hai Bà Trưng bùng nổ vào năm nào để chống lại ách đô hộ của nhà Đông Hán?",
    options: ["Mùa xuân năm 40", "Năm 248", "Năm 542", "Năm 938"],
    ans: 0,
    exp: "Mùa xuân năm 40, Hai Bà Trưng phất cờ khởi nghĩa tại Hát Môn (Hà Nội), lật đổ chính quyền đô hộ của Tô Định."
  },
  {
    q: "Nhà nước Vạn Xuân được thành lập sau thắng lợi của cuộc khởi nghĩa nào?",
    options: ["Khởi nghĩa Lý Bí (542 - 544)", "Khởi nghĩa Bà Triệu (248)", "Khởi nghĩa Mai Thúc Loan (713)", "Khởi nghĩa Phùng Hưng (cuối thế kỉ VIII)"],
    ans: 0,
    exp: "Năm 544, Lý Bí lên ngôi Hoàng đế (Lý Nam Đế), đặt tên nước là Vạn Xuân với mong muốn đất nước trường tồn."
  },
  {
    q: "Ai là người đã xưng Tiết độ sứ năm 905, đặt nền móng độc lập tự chủ đầu tiên sau thời kì dài Bắc thuộc?",
    options: ["Khúc Thừa Dụ", "Khúc Hạo", "Dương Đình Nghệ", "Ngô Quyền"],
    ans: 0,
    exp: "Năm 905, nhân lúc nhà Đường suy yếu, Khúc Thừa Dụ đánh chiếm Tống Bình, xưng Tiết độ sứ giành quyền tự chủ."
  },
  {
    q: "Chiến thắng lịch sử trên sông Bạch Đằng năm 938 gắn liền với vị anh hùng dân tộc nào?",
    options: ["Ngô Quyền", "Trần Hưng Đạo", "Lê Hoàn", "Lý Thường Kiệt"],
    ans: 0,
    exp: "Ngô Quyền lãnh đạo nhân dân đánh tan quân Nam Hán trên sông Bạch Đằng năm 938."
  },
  {
    q: "Vương quốc cổ Chăm-pa được hình thành trên cơ sở văn hoá nào?",
    options: ["Văn hoá Sa Huỳnh", "Văn hoá Đông Sơn", "Văn hoá Óc Eo", "Văn hoá Hoà Bình"],
    ans: 0,
    exp: "Vương quốc Chăm-pa hình thành ở duyên hải miền Trung Việt Nam trên nền tảng văn hoá Sa Huỳnh."
  },
  {
    q: "Cảng thị nổi tiếng của vương quốc Phù Nam từng là trung tâm thương mại quốc tế sầm uất ở Nam Bộ là gì?",
    options: ["Óc Eo (An Giang)", "Hội An (Quảng Nam)", "Vân Đồn (Quảng Ninh)", "Phố Hiến (Hưng Yên)"],
    ans: 0,
    exp: "Cảng thị Óc Eo thuộc vương quốc Phù Nam là đô thị - thương cảng quốc tế sầm uất bậc nhất."
  },
  {
    q: "Kim tự tháp Kê-ốp là thành tựu kiến trúc kì vĩ của nền văn minh cổ đại nào?",
    options: ["Ai Cập cổ đại", "Lưỡng Hà cổ đại", "Ấn Độ cổ đại", "Hi Lạp cổ đại"],
    ans: 0,
    exp: "Kim tự tháp Kê-ốp là kì quan kiến trúc nổi tiếng của nền văn minh Ai Cập bên bờ sông Nin."
  },
  {
    q: "Chữ viết tượng hình khắc trên mai rùa và xương thú (chữ Giáp cốt) thuộc nền văn minh nào?",
    options: ["Trung Quốc cổ đại", "Ấn Độ cổ đại", "La Mã cổ đại", "Lưỡng Hà cổ đại"],
    ans: 0,
    exp: "Chữ Giáp cốt là hệ thống chữ viết cổ nhất của Trung Quốc thời nhà Thương."
  },
  {
    q: "Đại hội Ô-lim-pích (Olympic) cổ đại có nguồn gốc từ nền văn minh nào?",
    options: ["Hi Lạp cổ đại", "La Mã cổ đại", "Ai Cập cổ đại", "Ba Tư cổ đại"],
    ans: 0,
    exp: "Đại hội Ô-lim-pích được tổ chức 4 năm một lần tại đền thờ thần Dớt ở thung lũng Ô-lim-pi-a (Hi Lạp)."
  },

  // Địa lí 15 câu
  {
    q: "Đường vĩ tuyến lớn nhất chia quả Địa Cầu thành hai nửa Bán cầu Bắc và Bán cầu Nam là đường nào?",
    options: ["Xích đạo (vĩ tuyến 0°)", "Chí tuyến Bắc (23°27'B)", "Chí tuyến Nam (23°27'N)", "Vòng cực Bắc (66°33'B)"],
    ans: 0,
    exp: "Xích đạo là đường vĩ tuyến 0°, vĩ tuyến tròn dài nhất chia Trái Đất thành Bán cầu Bắc và Bán cầu Nam."
  },
  {
    q: "Một bản đồ có tỉ lệ 1 : 200 000. Khoảng cách đo được giữa hai điểm trên bản đồ là 4 cm. Khoảng cách thực địa là bao nhiêu?",
    options: ["8 km", "80 km", "800 m", "0,8 km"],
    ans: 0,
    exp: "Khoảng cách thực địa D = 4 cm × 200 000 = 800 000 cm = 8 000 m = 8 km."
  },
  {
    q: "Trái Đất tự quay quanh trục theo hướng nào và thời gian hoàn thành một vòng là bao lâu?",
    options: ["Từ Tây sang Đông, khoảng 24 giờ (1 ngày đêm)", "Từ Đông sang Tây, khoảng 12 giờ", "Từ Bắc xuống Nam, khoảng 365 ngày", "Từ Nam lên Bắc, khoảng 30 ngày"],
    ans: 0,
    exp: "Trái Đất tự quay quanh trục theo hướng từ Tây sang Đông, chu kì một vòng là 24 giờ."
  },
  {
    q: "Việt Nam nằm ở khu vực giờ (múi giờ) số mấy trên bản đồ giờ thế giới?",
    options: ["Múi giờ số 7 (UTC+7)", "Múi giờ số 0 (UTC+0)", "Múi giờ số 8 (UTC+8)", "Múi giờ số 9 (UTC+9)"],
    ans: 0,
    exp: "Việt Nam nằm trọn vẹn trong múi giờ thứ 7 (UTC+7)."
  },
  {
    q: "Lớp vỏ Trái Đất có đặc điểm cơ bản nào sau đây?",
    options: [
      "Độ dày từ 5 km đến 70 km, trạng thái rắn chắc, là nơi sinh sống của con người",
      "Dày 2 900 km, vật chất quánh dẻo chịu nhiệt độ hàng nghìn độ",
      "Nằm ở tâm Trái Đất, hoàn toàn là chất lỏng sôi sục",
      "Chỉ tồn tại ở đáy các đại dương sâu thẳm"
    ],
    ans: 0,
    exp: "Vỏ Trái Đất là lớp ngoài cùng mỏng nhất (5-70 km), thể rắn chắc, cấu tạo nên lục địa và đáy biển."
  },
  {
    q: "Quá trình nội sinh trong lòng đất là nguyên nhân trực tiếp dẫn tới hiện tượng nào?",
    options: ["Núi lửa phun trào và động đất", "Xâm thực và bào mòn của gió", "Bồi tụ phù sa cửa sông", "Nước chảy đá mòn"],
    ans: 0,
    exp: "Nội sinh là nguồn năng lượng từ lòng đất, sinh ra các uốn nếp, đứt gãy, động đất và núi lửa."
  },
  {
    q: "Trên bản đồ địa hình, các đường đồng mức càng nằm sát gần nhau thì sườn núi đó có đặc điểm gì?",
    options: ["Càng dốc", "Càng thoải", "Càng bằng phẳng", "Càng thấp"],
    ans: 0,
    exp: "Đường đồng mức càng mau (gần nhau) thì sườn càng dốc; đường đồng mức càng thưa thì sườn càng thoải."
  },
  {
    q: "Tầng đối lưu của khí quyển có đặc điểm gì đặc biệt quan trọng đối với đời sống sinh vật?",
    options: [
      "Chiếm tới 80% khối lượng không khí, là nơi sinh ra mọi hiện tượng mây, mưa, sấm chớp, bão",
      "Nhiệt độ tăng dần theo độ cao và không có hơi nước",
      "Có tầng ô-dôn ngăn chặn tia tử ngoại",
      "Không khí cực kì loãng và lạnh âm hàng trăm độ"
    ],
    ans: 0,
    exp: "Tầng đối lưu là tầng sát mặt đất (đến 16 km), chứa hầu hết hơi nước và sinh ra mọi hiện tượng thời tiết."
  },
  {
    q: "Gió Tín phong (Thương mại) là loại gió thổi thường xuyên từ khu vực nào về khu vực nào?",
    options: [
      "Từ các đai áp cao chí tuyến về đai áp thấp xích đạo",
      "Từ đai áp cao cực về áp thấp ôn đới",
      "Từ đất liền ra biển vào ban đêm",
      "Từ chân núi lên đỉnh núi vào buổi trưa"
    ],
    ans: 0,
    exp: "Gió Tín phong thổi quanh năm từ 2 đai áp cao cận chí tuyến (khoảng 30°B và 30°N) về đai áp thấp Xích đạo."
  },
  {
    q: "Công thức tính biên độ nhiệt độ năm của một địa phương là gì?",
    options: [
      "Nhiệt độ tháng cao nhất trừ đi nhiệt độ tháng thấp nhất",
      "Tổng nhiệt độ 12 tháng chia cho 12",
      "Nhiệt độ ngày cao nhất cộng nhiệt độ ngày thấp nhất",
      "Nhiệt độ trung bình nhân với lượng mưa"
    ],
    ans: 0,
    exp: "Biên độ nhiệt năm = Nhiệt độ trung bình tháng cao nhất − Nhiệt độ trung bình tháng thấp nhất (°C)."
  },
  {
    q: "Động lực chính thúc đẩy vòng tuần hoàn lớn của nước trên Trái Đất là gì?",
    options: [
      "Năng lượng bức xạ Mặt Trời và trọng lực Trái Đất",
      "Thuỷ triều của Mặt Trăng",
      "Sức gió của các cơn bão nhiệt đới",
      "Hoạt động phun trào của núi lửa dưới biển"
    ],
    ans: 0,
    exp: "Năng lượng Mặt Trời làm nước bốc hơi tạo thành mây, trọng lực khiến hạt mưa rơi xuống bề mặt và chảy về đại dương."
  },
  {
    q: "Độ muối trung bình của nước biển và đại dương trên thế giới là khoảng bao nhiêu?",
    options: ["35‰ (khoảng 35 gam muối trong 1 lít nước biển)", "3,5‰", "35%", "0,35‰"],
    ans: 0,
    exp: "Độ muối trung bình của nước biển đại dương là 35 phần nghìn (35‰), tức là 35 g muối trên 1 000 g (1 kg) nước biển."
  },
  {
    q: "Thành phần quan trọng nhất quyết định độ phì nhiêu (độ màu mỡ) của lớp đất là tầng nào?",
    options: ["Tầng chứa mùn hữu cơ", "Tầng tích tụ khoáng sét", "Tầng đá mẹ rắn", "Lớp đá gốc sâu dưới lòng đất"],
    ans: 0,
    exp: "Tầng chứa mùn nằm sát mặt đất, giàu chất dinh dưỡng hữu cơ quyết định trực tiếp đến độ phì của đất."
  },
  {
    q: "Rừng mưa nhiệt đới thường phân bố chủ yếu ở khu vực nào trên Trái Đất?",
    options: [
      "Vùng xích đạo và nhiệt đới có khí hậu nóng ẩm, mưa nhiều quanh năm",
      "Khu vực hàn đới gần vòng cực Bắc lạnh giá",
      "Vùng ôn đới có 4 mùa rõ rệt",
      "Khu vực hoang mạc khô cằn ít mưa"
    ],
    ans: 0,
    exp: "Rừng mưa nhiệt đới hình thành ở đới nóng (vùng xích đạo và lân cận), nơi có nhiệt độ cao và độ ẩm mưa dồi dào."
  },
  {
    q: "Công thức chuẩn để tính mật độ dân số của một vùng lãnh thổ là gì?",
    options: [
      "Số dân chia cho Diện tích đất (người/km²)",
      "Diện tích chia cho Số dân",
      "Số trẻ em sinh ra nhân với Diện tích",
      "Tổng số hộ gia đình chia cho 100"
    ],
    ans: 0,
    exp: "Mật độ dân số = Số dân / Diện tích (đơn vị: người/km²)."
  }
];

// Now let's assemble the whole HTML file
const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lịch Sử và Địa Lí Lớp 6 | CodeHub - Nền Tảng Học Tập Trực Tuyến</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#fffbeb',
              100: '#fef3c7',
              200: '#fde68a',
              300: '#fcd34d',
              400: '#fbbf24',
              500: '#f59e0b',
              600: '#d97706',
              700: '#b45309',
              800: '#92400e',
              900: '#78350f',
              950: '#451a03'
            },
            geo: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              300: '#6ee7b7',
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b'
            },
            gray: {
              850: '#1f2937',
              900: '#111827'
            }
          }
        }
      }
    };
  </script>
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Canvas Confetti -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <!-- Dark Mode Init -->
  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
  
  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    
    .tab-active {
      border-bottom: 3px solid #d97706;
      color: #b45309;
      font-weight: 700;
    }
    .dark .tab-active {
      border-bottom: 3px solid #f59e0b;
      color: #fbbf24;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
      
      <!-- Logo & Breadcrumb -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group" title="Về trang chủ CodeHub">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-earth-asia text-lg"></i>
          </div>
          <span class="font-bold text-xl tracking-tight hidden sm:inline bg-gradient-to-r from-amber-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">CodeHub</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <div class="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200 dark:border-amber-800/60">
          <i class="fa-solid fa-landmark text-amber-600"></i>
          <span>Lịch Sử & Địa Lí 6</span>
        </div>
      </div>

      <!-- Quick Search Bar -->
      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
          <input type="text" id="globalSearch" placeholder="Tìm bài học, Văn Lang, Bạch Đằng, toạ độ, khí áp, tỉ lệ..." 
                 class="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-400/50">
        </div>
      </div>

      <!-- Header Tools & Modals -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <!-- Interactive Tools Modal Triggers -->
        <button onclick="openModal('modalCompass')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="La Bàn & Máy Tính Tỉ Lệ Bản Đồ">
          <i class="fa-solid fa-compass text-emerald-500"></i>
          <span class="hidden lg:inline">La Bàn & Tỉ Lệ</span>
        </button>

        <button onclick="openModal('modalWorldClock')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="Đồng Hồ Múi Giờ Quốc Tế UTC">
          <i class="fa-solid fa-clock text-blue-500"></i>
          <span class="hidden lg:inline">Múi Giờ UTC</span>
        </button>

        <button onclick="openModal('modalBachDang')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="Sa Bàn Chiến Thắng Bạch Đằng 938">
          <i class="fa-solid fa-shield-halved text-red-500"></i>
          <span class="hidden lg:inline">Bạch Đằng 938</span>
        </button>

        <button onclick="openModal('modalGallery')" class="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="Thư Viện 12 Sơ Đồ & Bản Đồ SGK">
          <i class="fa-solid fa-images text-indigo-500"></i>
          <span class="hidden lg:inline">12 Bản Đồ SGK</span>
        </button>

        <!-- Trạng Nguyên Arena CTA -->
        <button onclick="openModal('modalExam')" class="px-3 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-sm transition flex items-center gap-1.5">
          <i class="fa-solid fa-award"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Hero Banner -->
  <section class="bg-gradient-to-b from-amber-100/50 via-slate-50 to-white dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 sm:py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-600 text-white">Chương Trình Chuẩn 2018</span>
            <span class="text-xs text-slate-500 dark:text-slate-400">Bộ Sách: Kết Nối Tri Thức Với Cuộc Sống</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Lịch Sử và Địa Lí Lớp 6
          </h1>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            Tài liệu học tập toàn diện gồm 20 bài Lịch sử (5 chương), 31 bài Địa lí (7 chương), Bảng niên đại 12 mốc, 8 công thức Địa lí và 12 sơ đồ bản đồ trọng tâm SGK.
          </p>
        </div>

        <!-- Quick Summary Stats -->
        <div class="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1">
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-amber-600 dark:text-amber-400">20 Bài</div>
            <div class="text-[11px] text-slate-500">Phần Lịch Sử</div>
          </div>
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-emerald-600 dark:text-emerald-400">31 Bài</div>
            <div class="text-[11px] text-slate-500">Phần Địa Lí</div>
          </div>
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-blue-600 dark:text-blue-400">12 Mốc</div>
            <div class="text-[11px] text-slate-500">Niên Đại Sử</div>
          </div>
          <div class="bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center min-w-[90px]">
            <div class="text-lg font-black text-purple-600 dark:text-purple-400">12 Hình</div>
            <div class="text-[11px] text-slate-500">Bản Đồ SGK</div>
          </div>
        </div>
      </div>

      <!-- Quick Navigation Tabs -->
      <div class="flex items-center gap-2 mt-6 border-b border-slate-200 dark:border-slate-800 text-sm overflow-x-auto">
        <button onclick="switchView('tab-all')" id="btn-tab-all" class="px-4 py-2.5 font-bold transition whitespace-nowrap tab-active">
          <i class="fa-solid fa-list-check mr-1.5"></i>Tất Cả 51 Bài Học
        </button>
        <button onclick="switchView('tab-history')" id="btn-tab-history" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition whitespace-nowrap">
          <i class="fa-solid fa-landmark mr-1.5 text-amber-500"></i>Phần Lịch Sử (20 Bài)
        </button>
        <button onclick="switchView('tab-geo')" id="btn-tab-geo" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition whitespace-nowrap">
          <i class="fa-solid fa-earth-americas mr-1.5 text-emerald-500"></i>Phần Địa Lí (31 Bài)
        </button>
        <button onclick="switchView('tab-timeline')" id="btn-tab-timeline" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition whitespace-nowrap">
          <i class="fa-solid fa-timeline mr-1.5 text-blue-500"></i>Bảng Niên Đại (12 Mốc)
        </button>
        <button onclick="switchView('tab-formulas')" id="btn-tab-formulas" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition whitespace-nowrap">
          <i class="fa-solid fa-calculator mr-1.5 text-indigo-500"></i>Công Thức Địa Lí (8 Quy Tắc)
        </button>
        <button onclick="switchView('tab-local')" id="btn-tab-local" class="px-4 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition whitespace-nowrap">
          <i class="fa-solid fa-clipboard-question mr-1.5 text-teal-500"></i>Khung Báo Cáo Địa Phương
        </button>
      </div>

    </div>
  </section>

  <!-- Main App Layout -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Sidebar: Chapter List (lg:col-span-4) -->
      <aside class="lg:col-span-4">
        <div class="sticky top-24 space-y-6">
          
          <!-- Search in Sidebar for mobile/desktop -->
          <div class="relative block md:hidden">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input type="text" id="mobileSearch" placeholder="Tìm kiếm nhanh bài học..." 
                   class="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500">
          </div>

          <!-- Quick Navigation Panel -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-4 shadow-sm">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
              <h3 class="font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <i class="fa-solid fa-bars-staggered text-amber-500"></i>
                <span>Mục Lục 51 Bài Học</span>
              </h3>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300" id="lessonCountBadge">51 Bài</span>
            </div>

            <!-- Scrollable Lesson List -->
            <div class="mt-3 max-h-[65vh] overflow-y-auto space-y-4 pr-1 text-sm" id="sidebarList">
              
              <!-- History Block -->
              <div class="sidebar-section-history">
                <div class="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1.5 rounded-lg mb-2 flex items-center justify-between">
                  <span>PHẦN LỊCH SỬ (5 Chương - 20 Bài)</span>
                  <i class="fa-solid fa-landmark"></i>
                </div>
                <div class="space-y-1">
                  ${data.allLessons.filter(l => l.part === 'history').map(l => `
                    <a href="#${l.id}" class="sidebar-item flex items-center justify-between px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-700 dark:hover:text-amber-300 transition group text-xs">
                      <span class="truncate">${esc(l.title)}</span>
                      ${l.images.length ? `<span class="ml-1 text-[10px] bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 px-1.5 py-0.2 rounded font-bold">Hình</span>` : ''}
                    </a>
                  `).join('')}
                </div>
              </div>

              <!-- Geo Block -->
              <div class="sidebar-section-geo pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <div class="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1.5 rounded-lg mb-2 flex items-center justify-between">
                  <span>PHẦN ĐỊA LÍ (8 Chương - 31 Bài)</span>
                  <i class="fa-solid fa-earth-asia"></i>
                </div>
                <div class="space-y-1">
                  ${data.allLessons.filter(l => l.part === 'geo').map(l => `
                    <a href="#${l.id}" class="sidebar-item flex items-center justify-between px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-700 dark:hover:text-emerald-300 transition group text-xs">
                      <span class="truncate">${esc(l.title)}</span>
                      ${l.images.length ? `<span class="ml-1 text-[10px] bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 px-1.5 py-0.2 rounded font-bold">Hình</span>` : ''}
                    </a>
                  `).join('')}
                </div>
              </div>

            </div>
          </div>

          <!-- Progress Widget -->
          <div class="bg-gradient-to-br from-amber-500/10 to-emerald-500/10 dark:from-amber-950/30 dark:to-emerald-950/30 p-4 rounded-2xl border border-amber-200/50 dark:border-emerald-800/40">
            <div class="flex items-center justify-between text-xs font-bold mb-2">
              <span class="text-slate-700 dark:text-slate-300">Tiến Độ Tự Học</span>
              <span class="text-amber-600 dark:text-amber-400" id="progressPercent">0%</span>
            </div>
            <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-amber-500 to-emerald-500 h-2 rounded-full transition-all duration-300" id="progressBar" style="width: 0%"></div>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Hoàn thành các câu hỏi trắc nghiệm dưới mỗi bài để nâng cao điểm số và tích luỹ huy hiệu!
            </p>
          </div>

        </div>
      </aside>

      <!-- Right Main Content: Lessons & Dedicated Views (lg:col-span-8) -->
      <section class="lg:col-span-8 space-y-10" id="contentArea">
        
        <!-- View 1: Timeline Section (Controlled by tabs) -->
        <div id="viewTimeline" class="hidden bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
            <div>
              <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Lịch Sử Việt Nam</span>
              <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
                <i class="fa-solid fa-timeline text-amber-500"></i>
                Bảng Niên Đại Cần Nhớ (12 Mốc Trọng Tâm)
              </h2>
            </div>
            <span class="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 font-semibold">
              TK VII TCN → Năm 938
            </span>
          </div>

          <div class="relative border-l-2 border-amber-400 dark:border-amber-600 ml-4 space-y-6">
            ${data.timeline.map((item, idx) => `
              <div class="relative pl-6 group">
                <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white dark:border-slate-800 group-hover:scale-125 transition-transform"></div>
                <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="font-black text-amber-600 dark:text-amber-400 text-sm tracking-wide">${esc(item.time)}</span>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200">Mốc ${idx + 1}</span>
                  </div>
                  <h4 class="font-bold text-slate-800 dark:text-slate-100 text-base mb-1">${esc(item.event)}</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${esc(item.meaning)}</p>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div class="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
            <i class="fa-solid fa-circle-info mr-1"></i>
            <strong>Lưu ý học tập:</strong> Không chỉ học số năm! Với mỗi sự kiện, cần trả lời rõ bối cảnh, người lãnh đạo, địa bàn, diễn biến chính, kết quả và ý nghĩa. Mốc Chăm-pa và Phù Nam diễn ra song song với lịch sử cư dân phía bắc.
          </div>
        </div>

        <!-- View 2: Formulas Section (Controlled by tabs) -->
        <div id="viewFormulas" class="hidden bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <div class="border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
            <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Kĩ Năng Địa Lí 6</span>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
              <i class="fa-solid fa-calculator text-emerald-500"></i>
              Bảng Công Thức và Quy Tắc Địa Lí Cần Nắm (8 Quy Tắc)
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${data.formulas.map((item, idx) => `
              <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-[10px] font-black">${idx + 1}</span>
                    ${esc(item.name)}
                  </span>
                </div>
                <div class="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-xs font-bold text-slate-800 dark:text-slate-100 mb-2">
                  ${esc(item.calc)}
                </div>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i>Lưu ý: ${esc(item.note)}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- View 3: Local Study Framework Section -->
        <div id="viewLocal" class="hidden bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <div class="border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
            <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Thực Hành & Trải Nghiệm</span>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
              <i class="fa-solid fa-clipboard-question text-teal-500"></i>
              Khung Báo Cáo Tìm Hiểu Địa Phương (Bài 26 & Bài 30)
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Hướng dẫn học sinh thực hiện nghiên cứu, khảo sát thực tế môi trường tự nhiên và mối quan hệ con người - tự nhiên tại địa phương.
            </p>
          </div>

          <div class="space-y-4">
            ${data.localStudy.map((item, idx) => `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-teal-400 mb-1">
                  <span class="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 flex items-center justify-center text-xs">${idx + 1}</span>
                  ${esc(item.heading)}
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                  ${esc(item.content)}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- View 4: ALL LESSONS LIST -->
        <div id="viewLessons" class="space-y-12">
          ${data.allLessons.map((lesson, lessonIndex) => {
            const isHistory = lesson.part === 'history';
            const questions = generateQuestionsForLesson(lesson, lessonIndex);
            return `
            <!-- Lesson Card: ${esc(lesson.title)} -->
            <article id="${lesson.id}" class="lesson-card bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-sm p-6 sm:p-8 transition-all hover:shadow-md ${isHistory ? 'lesson-history border-l-4 border-l-amber-500' : 'lesson-geo border-l-4 border-l-emerald-500'}">
              
              <!-- Lesson Header -->
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/80 pb-4 mb-4">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold uppercase tracking-wider ${isHistory ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">
                      <i class="${isHistory ? 'fa-solid fa-landmark' : 'fa-solid fa-earth-americas'} mr-1"></i>
                      ${esc(lesson.chapter)}
                    </span>
                    <span class="text-slate-300 dark:text-slate-700">•</span>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      ${esc(lesson.sgk || 'SGK Kết Nối Tri Thức')}
                    </span>
                  </div>
                  <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    ${esc(lesson.title)}
                  </h2>
                </div>

                <div class="flex items-center gap-2">
                  <button onclick="bookmarkLesson('${lesson.id}')" class="text-slate-400 hover:text-amber-500 transition p-2 rounded-lg" title="Lưu bài học">
                    <i class="fa-regular fa-bookmark"></i>
                  </button>
                </div>
              </div>

              <!-- SVG Concept Mindmap -->
              ${generateLessonSVG(lesson)}

              <!-- Embedded SGK Scanned Images (if any) -->
              ${lesson.images.map(img => `
                <div class="my-6 p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/60 shadow-sm">
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <i class="fa-solid fa-image"></i>
                      Hình Ảnh Trọng Tâm SGK (${esc(img.page)})
                    </span>
                    <button onclick="openImageModal('../assets/img/lsdl6/${img.img}', '${esc(img.title)}')" class="text-xs text-amber-600 hover:underline flex items-center gap-1">
                      <i class="fa-solid fa-expand"></i> Phóng to ảnh
                    </button>
                  </div>
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800" onclick="openImageModal('../assets/img/lsdl6/${img.img}', '${esc(img.title)}')">
                    <img src="../assets/img/lsdl6/${img.img}" alt="${esc(img.title)}" class="w-full max-h-96 object-contain mx-auto group-hover:scale-102 transition duration-200">
                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition text-white font-medium text-xs gap-2">
                      <i class="fa-solid fa-magnifying-glass-plus text-base"></i> Nhấp để xem ảnh đầy đủ
                    </div>
                  </div>
                  <div class="mt-3">
                    <h4 class="font-bold text-sm text-slate-800 dark:text-slate-100">${esc(img.title)}</h4>
                    <p class="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed bg-white/60 dark:bg-slate-800/60 p-2.5 rounded-lg border border-amber-100 dark:border-slate-700">
                      <strong>Kĩ năng đọc sơ đồ/bản đồ:</strong> ${esc(img.note)}
                    </p>
                  </div>
                </div>
              `).join('')}

              <!-- Content Sub-sections -->
              <div class="space-y-4 my-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                ${lesson.sections.map(sec => {
                  const parts = sec.split('. ');
                  const heading = parts.length > 1 ? parts[0] : '';
                  const body = parts.length > 1 ? parts.slice(1).join('. ') : sec;
                  return `
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                      ${heading ? `
                        <h4 class="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                          <span class="w-2 h-2 rounded-full ${isHistory ? 'bg-amber-500' : 'bg-emerald-500'}"></span>
                          ${esc(heading)}
                        </h4>
                      ` : ''}
                      <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        ${esc(body)}
                      </p>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Interactive Mini Self-Test for this lesson -->
              <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                <div class="flex items-center justify-between mb-4">
                  <h4 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-question ${isHistory ? 'text-amber-500' : 'text-emerald-500'}"></i>
                    <span>Tự Kiểm Tra Nhanh Sau Bài Học</span>
                  </h4>
                  <span class="text-xs text-slate-500 dark:text-slate-400">2 câu trắc nghiệm</span>
                </div>

                <div class="space-y-4">
                  ${questions.map((qObj, qIdx) => `
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700" id="q_box_${lesson.id}_${qIdx}">
                      <p class="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 mb-3">
                        <span class="font-bold text-amber-600 dark:text-amber-400">Câu ${qIdx + 1}:</span> ${esc(qObj.q)}
                      </p>
                      <div class="grid grid-cols-1 gap-2">
                        ${qObj.options.map((opt, oIdx) => `
                          <button onclick="checkQuickAnswer('${lesson.id}', ${qIdx}, ${oIdx}, ${qObj.ans})" 
                                  id="btn_opt_${lesson.id}_${qIdx}_${oIdx}"
                                  class="text-left px-3.5 py-2 rounded-lg text-xs border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-between">
                            <span><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${esc(opt)}</span>
                            <i class="fa-regular fa-circle text-slate-300 dark:text-slate-600"></i>
                          </button>
                        `).join('')}
                      </div>
                      <div id="exp_${lesson.id}_${qIdx}" class="hidden mt-3 p-2.5 rounded-lg text-xs leading-relaxed"></div>
                    </div>
                  `).join('')}
                </div>
              </div>

            </article>
            `;
          }).join('')}
        </div>

      </section>

    </div>
  </main>

  <!-- MODAL 1: Trạng Nguyên Sử - Địa 6 Exam Arena (60:00) -->
  <div id="modalExam" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-6 bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 class="font-black text-lg sm:text-xl tracking-tight">Đấu Trường Trạng Nguyên Sử – Địa 6</h3>
            <p class="text-xs text-amber-100">30 câu hỏi trắc nghiệm tổng hợp Kết nối tri thức • Tính giờ làm bài</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Timer Display -->
          <div class="bg-black/30 px-3.5 py-1.5 rounded-xl flex items-center gap-2 font-mono text-sm font-bold">
            <i class="fa-solid fa-stopwatch text-amber-300"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeModal('modalExam')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6" id="examQuestionsContainer">
        <!-- Question Palette Navigator -->
        <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
            <span>BẢNG ĐIỀU HƯỚNG CÂU HỎI (30 CÂU)</span>
            <span id="answeredCountBadge">0 / 30 Đã làm</span>
          </div>
          <div class="grid grid-cols-10 sm:grid-cols-15 gap-1.5" id="questionPalette">
            <!-- Render 30 buttons -->
          </div>
        </div>

        <!-- Questions List -->
        <div class="space-y-6" id="examQuestionsList">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div class="text-xs text-slate-500">
          Chấm điểm tức thì & hiển thị giải thích chi tiết khi nộp bài.
        </div>
        <div class="flex items-center gap-2">
          <button onclick="resetExam()" class="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
            Làm lại
          </button>
          <button onclick="submitExam()" id="btnSubmitExam" class="px-5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600 text-white shadow-md transition">
            Nộp Bài & Xem Điểm
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- MODAL 2: Interactive Compass & Scale Calculator -->
  <div id="modalCompass" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-compass text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">La Bàn & Máy Tính Tỉ Lệ Bản Đồ</h3>
            <p class="text-xs text-emerald-100">Kĩ năng thực hành Bài 1, 2, 3 môn Địa lí 6</p>
          </div>
        </div>
        <button onclick="closeModal('modalCompass')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 text-sm">
        <!-- Scale Calculator -->
        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
          <h4 class="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-ruler-combined"></i> Máy Tính Khoảng Cách Tỉ Lệ Bản Đồ: D = d × n
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Khoảng cách trên bản đồ d (cm):</label>
              <input type="number" id="calc_d" value="5" step="0.1" class="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm">
            </div>
            <div>
              <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Mẫu số tỉ lệ n (Ví dụ: 100 000):</label>
              <input type="number" id="calc_n" value="100000" class="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm">
            </div>
          </div>
          <button onclick="computeScale()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition">
            Tính Khoảng Cách Thực Địa D
          </button>
          <div id="calc_res" class="mt-3 p-3 rounded-lg bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 font-bold text-emerald-700 dark:text-emerald-300 text-xs">
            Kết quả: 5 cm × 100 000 = 500 000 cm = 5 km ngoài thực địa.
          </div>
        </div>

        <!-- Compass Visual -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-6">
          <div class="w-40 h-40 relative flex items-center justify-center">
            <!-- SVG Compass -->
            <svg class="w-36 h-36" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="2 2"/>
              <circle cx="50" cy="50" r="3" fill="#10b981"/>
              <!-- Needle -->
              <polygon points="50,10 46,50 50,47 54,50" fill="#ef4444"/>
              <polygon points="50,90 46,50 50,47 54,50" fill="#3b82f6"/>
              <!-- Labels -->
              <text x="50" y="8" text-anchor="middle" font-size="8" font-weight="bold" fill="#ef4444">BẮC (N)</text>
              <text x="50" y="98" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b82f6">NAM (S)</text>
              <text x="96" y="53" text-anchor="end" font-size="8" font-weight="bold" fill="#10b981">ĐÔNG (E)</text>
              <text x="4" y="53" text-anchor="start" font-size="8" font-weight="bold" fill="#10b981">TÂY (W)</text>
            </svg>
          </div>
          <div class="flex-1 space-y-2 text-xs">
            <h5 class="font-bold text-slate-800 dark:text-slate-100">Xác định 8 hướng chính:</h5>
            <ul class="space-y-1 text-slate-600 dark:text-slate-300">
              <li>• <strong>4 hướng chính:</strong> Bắc (B), Nam (N), Đông (Đ), Tây (T).</li>
              <li>• <strong>4 hướng phụ:</strong> Đông Bắc (ĐB), Đông Nam (ĐN), Tây Bắc (TB), Tây Nam (TN).</li>
              <li>• <strong>Quy ước bản đồ:</strong> Đầu kinh tuyến chỉ hướng Bắc, đuôi chỉ hướng Nam; bên phải vĩ tuyến là hướng Đông, bên trái là hướng Tây.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 3: World Timezone Clock (UTC) -->
  <div id="modalWorldClock" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-earth-americas text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">Đồng Hồ Múi Giờ Thế Giới UTC</h3>
            <p class="text-xs text-blue-100">Kĩ năng tính giờ múi Bài 7 môn Địa lí 6</p>
          </div>
        </div>
        <button onclick="closeModal('modalWorldClock')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 text-sm">
        <!-- Live Clocks -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3" id="clockGrid">
          <!-- Populated by JS -->
        </div>

        <!-- Time Calculator -->
        <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 space-y-3">
          <h4 class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2 text-xs uppercase tracking-wider">
            <i class="fa-solid fa-calculator"></i> Máy Tính Giờ Quốc Tế (Từ giờ Việt Nam UTC+7)
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Giờ tại Hà Nội (UTC+7):</label>
              <input type="time" id="calc_vn_time" value="12:00" class="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm">
            </div>
            <div>
              <label class="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Múi giờ cần quy đổi:</label>
              <select id="calc_target_zone" class="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm">
                <option value="0">UTC+0 (Luân Đôn - Anh)</option>
                <option value="1">UTC+1 (Pa-ri - Pháp)</option>
                <option value="3">UTC+3 (Mát-xcơ-va - Nga)</option>
                <option value="8">UTC+8 (Bắc Kinh, Xin-ga-po)</option>
                <option value="9">UTC+9 (Tô-ki-ô - Nhật Bản)</option>
                <option value="-5">UTC-5 (Niu Oóc - Hoa Kỳ)</option>
                <option value="-8">UTC-8 (Lốt An-giơ-lét - Hoa Kỳ)</option>
                <option value="10">UTC+10 (Xit-ni - Úc)</option>
              </select>
            </div>
          </div>
          <button onclick="computeTimezone()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition">
            Tính Giờ Quy Đổi
          </button>
          <div id="tz_calc_res" class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 font-bold text-blue-700 dark:text-blue-300 text-xs">
            Khi Hà Nội 12:00 trưa thì tại Luân Đôn (UTC+0) là 05:00 sáng cùng ngày (chậm hơn 7 giờ).
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 4: Interactive Bach Dang 938 Battle Simulator -->
  <div id="modalBachDang" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-shield-halved text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">Sa Bàn Tương Tác: Trận Bạch Đằng Năm 938</h3>
            <p class="text-xs text-amber-100">Kế sách cắm cọc vạt nhọn bọc sắt và quy luật thuỷ triều</p>
          </div>
        </div>
        <button onclick="closeModal('modalBachDang')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4 text-sm">
        <!-- Interactive Step Selector -->
        <div class="grid grid-cols-4 gap-2 text-xs font-bold text-center">
          <button onclick="setBachDangStep(1)" id="bd_step_1" class="p-2.5 rounded-xl bg-amber-500 text-white shadow">
            1. Bố trí bãi cọc
          </button>
          <button onclick="setBachDangStep(2)" id="bd_step_2" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
            2. Triều lên & Nhử địch
          </button>
          <button onclick="setBachDangStep(3)" id="bd_step_3" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
            3. Triều rút & Phản công
          </button>
          <button onclick="setBachDangStep(4)" id="bd_step_4" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
            4. Đại thắng 938
          </button>
        </div>

        <!-- Visual Canvas/Map -->
        <div class="p-4 rounded-2xl bg-slate-900 border border-slate-700 relative overflow-hidden h-64 flex items-center justify-center" id="bd_canvas">
          <!-- Populated by JS -->
        </div>

        <!-- Description Box -->
        <div id="bd_desc" class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
          <!-- Step text -->
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL 5: 12 SGK Diagrams Gallery -->
  <div id="modalGallery" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="p-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-images text-2xl"></i>
          <div>
            <h3 class="font-bold text-lg">Thư Viện 12 Sơ Đồ & Bản Đồ Trọng Tâm SGK</h3>
            <p class="text-xs text-indigo-100">Trích từ sách giáo khoa Kết nối tri thức Lớp 6</p>
          </div>
        </div>
        <button onclick="closeModal('modalGallery')" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${data.diagrams.map((d, i) => `
          <div class="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden group cursor-pointer hover:border-indigo-400 transition" onclick="openImageModal('../assets/img/lsdl6/${d.img}', '${esc(d.title)}')">
            <div class="h-40 bg-slate-200 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
              <img src="../assets/img/lsdl6/${d.img}" alt="${esc(d.title)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-200">
            </div>
            <div class="p-3">
              <div class="flex items-center justify-between text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                <span>HÌNH ${i + 1} (${d.part === 'history' ? 'LỊCH SỬ' : 'ĐỊA LÍ'})</span>
                <span>${esc(d.page)}</span>
              </div>
              <h5 class="font-bold text-xs text-slate-800 dark:text-slate-100 truncate">${esc(d.title)}</h5>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- LIGHTBOX IMAGE MODAL -->
  <div id="modalImageLightbox" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-md flex items-center justify-center p-4" onclick="closeModal('modalImageLightbox')">
    <div class="max-w-4xl max-h-[95vh] flex flex-col items-center" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between w-full text-white mb-2">
        <h4 id="lightboxTitle" class="font-bold text-sm"></h4>
        <button onclick="closeModal('modalImageLightbox')" class="text-white hover:text-amber-400 text-xl font-bold">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <img id="lightboxImg" src="" alt="" class="max-w-full max-h-[85vh] rounded-xl object-contain bg-slate-900 border border-slate-700">
    </div>
  </div>

  <!-- JavaScript Application Logic -->
  <script>
    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
    }

    // Modal helpers
    function openModal(id) {
      document.getElementById(id).classList.remove('hidden');
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }
    function openImageModal(src, title) {
      document.getElementById('lightboxImg').src = src;
      document.getElementById('lightboxTitle').textContent = title;
      openModal('modalImageLightbox');
    }

    // Switch view tabs
    function switchView(tabId) {
      // Buttons
      ['btn-tab-all', 'btn-tab-history', 'btn-tab-geo', 'btn-tab-timeline', 'btn-tab-formulas', 'btn-tab-local'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.remove('tab-active');
      });

      // Hide all specialized views
      document.getElementById('viewTimeline').classList.add('hidden');
      document.getElementById('viewFormulas').classList.add('hidden');
      document.getElementById('viewLocal').classList.add('hidden');
      document.getElementById('viewLessons').classList.remove('hidden');

      // Filter lesson cards
      const historyCards = document.querySelectorAll('.lesson-history');
      const geoCards = document.querySelectorAll('.lesson-geo');

      if (tabId === 'tab-all') {
        document.getElementById('btn-tab-all').classList.add('tab-active');
        historyCards.forEach(c => c.classList.remove('hidden'));
        geoCards.forEach(c => c.classList.remove('hidden'));
      } else if (tabId === 'tab-history') {
        document.getElementById('btn-tab-history').classList.add('tab-active');
        historyCards.forEach(c => c.classList.remove('hidden'));
        geoCards.forEach(c => c.classList.add('hidden'));
      } else if (tabId === 'tab-geo') {
        document.getElementById('btn-tab-geo').classList.add('tab-active');
        historyCards.forEach(c => c.classList.add('hidden'));
        geoCards.forEach(c => c.classList.remove('hidden'));
      } else if (tabId === 'tab-timeline') {
        document.getElementById('btn-tab-timeline').classList.add('tab-active');
        document.getElementById('viewLessons').classList.add('hidden');
        document.getElementById('viewTimeline').classList.remove('hidden');
      } else if (tabId === 'tab-formulas') {
        document.getElementById('btn-tab-formulas').classList.add('tab-active');
        document.getElementById('viewLessons').classList.add('hidden');
        document.getElementById('viewFormulas').classList.remove('hidden');
      } else if (tabId === 'tab-local') {
        document.getElementById('btn-tab-local').classList.add('tab-active');
        document.getElementById('viewLessons').classList.add('hidden');
        document.getElementById('viewLocal').classList.remove('hidden');
      }
    }

    // Search function
    function handleSearch(term) {
      term = term.toLowerCase().trim();
      const cards = document.querySelectorAll('.lesson-card');
      let count = 0;
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!term || text.includes(term)) {
          card.classList.remove('hidden');
          count++;
        } else {
          card.classList.add('hidden');
        }
      });
      document.getElementById('lessonCountBadge').textContent = count + ' Bài';
    }

    document.getElementById('globalSearch')?.addEventListener('input', e => handleSearch(e.target.value));
    document.getElementById('mobileSearch')?.addEventListener('input', e => handleSearch(e.target.value));

    // Quick quiz check
    const answeredQuizzes = new Set();
    function checkQuickAnswer(lessonId, qIdx, selectedOpt, correctAns) {
      const isCorrect = selectedOpt === correctAns;
      const expBox = document.getElementById(\`exp_\${lessonId}_\${qIdx}\`);
      
      // Update buttons
      for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(\`btn_opt_\${lessonId}_\${qIdx}_\${i}\`);
        if (!btn) continue;
        btn.classList.remove('bg-emerald-100', 'border-emerald-500', 'bg-rose-100', 'border-rose-500', 'dark:bg-emerald-950', 'dark:bg-rose-950');
        if (i === correctAns) {
          btn.classList.add('bg-emerald-100', 'border-emerald-500', 'dark:bg-emerald-950/60');
        } else if (i === selectedOpt && !isCorrect) {
          btn.classList.add('bg-rose-100', 'border-rose-500', 'dark:bg-rose-950/60');
        }
      }

      expBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950', 'dark:text-emerald-300', 'bg-rose-50', 'text-rose-800', 'dark:bg-rose-950', 'dark:text-rose-300');
      if (isCorrect) {
        expBox.classList.add('bg-emerald-50', 'text-emerald-800', 'dark:bg-emerald-950/40', 'dark:text-emerald-300');
        expBox.innerHTML = '<strong><i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> Chính xác!</strong> ' + (qIdx === 0 ? 'Bạn đã nắm vững kiến thức trọng tâm!' : 'Khả năng vận dụng rất tốt!');
      } else {
        expBox.classList.add('bg-rose-50', 'text-rose-800', 'dark:bg-rose-950/40', 'dark:text-rose-300');
        expBox.innerHTML = '<strong><i class="fa-solid fa-circle-xmark text-rose-500 mr-1"></i> Chưa chính xác.</strong> Hãy xem lại các mục kiến thức cốt lõi phía trên!';
      }

      // Track progress
      answeredQuizzes.add(\`\${lessonId}_\${qIdx}\`);
      updateProgressBar();
    }

    function updateProgressBar() {
      const totalQuizzes = 51 * 2;
      const count = answeredQuizzes.size;
      const percent = Math.min(100, Math.round((count / totalQuizzes) * 100));
      document.getElementById('progressPercent').textContent = percent + '%';
      document.getElementById('progressBar').style.width = percent + '%';
    }

    // Scale Calculator Logic
    function computeScale() {
      const d = parseFloat(document.getElementById('calc_d').value);
      const n = parseFloat(document.getElementById('calc_n').value);
      if (isNaN(d) || isNaN(n) || d <= 0 || n <= 0) {
        document.getElementById('calc_res').textContent = 'Vui lòng nhập giá trị hợp lệ!';
        return;
      }
      const D_cm = d * n;
      const D_m = D_cm / 100;
      const D_km = D_m / 1000;
      document.getElementById('calc_res').innerHTML = 
        \`Kết quả: \${d} cm × \${n.toLocaleString('vi-VN')} = <strong>\${D_cm.toLocaleString('vi-VN')} cm</strong> = <strong>\${D_m.toLocaleString('vi-VN')} m</strong> = <span class="text-base text-emerald-600 dark:text-emerald-400 font-black">\${D_km.toLocaleString('vi-VN')} km</span> ngoài thực địa.\`;
    }

    // World Clock & Timezone Calculator
    const timezones = [
      { name: 'Hà Nội (Việt Nam)', offset: 7, flag: '🇻🇳' },
      { name: 'Luân Đôn (Anh - UTC)', offset: 0, flag: '🇬🇧' },
      { name: 'Tô-ki-ô (Nhật Bản)', offset: 9, flag: '🇯🇵' },
      { name: 'Niu Oóc (Mỹ)', offset: -5, flag: '🇺🇸' },
      { name: 'Pa-ri (Pháp)', offset: 1, flag: '🇫🇷' },
      { name: 'Bắc Kinh (Trung Quốc)', offset: 8, flag: '🇨🇳' }
    ];

    function updateWorldClocks() {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const grid = document.getElementById('clockGrid');
      if (!grid) return;

      grid.innerHTML = timezones.map(tz => {
        const d = new Date(utc + (3600000 * tz.offset));
        const timeStr = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        return \`
          <div class="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
            <div class="text-xs font-semibold text-slate-500 flex items-center justify-center gap-1">
              <span>\${tz.flag}</span> \${tz.name}
            </div>
            <div class="font-mono text-base font-bold text-blue-600 dark:text-blue-400 mt-1">\${timeStr}</div>
            <div class="text-[10px] text-slate-400">UTC\${tz.offset >= 0 ? '+' + tz.offset : tz.offset}</div>
          </div>
        \`;
      }).join('');
    }
    setInterval(updateWorldClocks, 1000);
    updateWorldClocks();

    function computeTimezone() {
      const timeVal = document.getElementById('calc_vn_time').value;
      const targetOffset = parseInt(document.getElementById('calc_target_zone').value);
      if (!timeVal) return;
      const [h, m] = timeVal.split(':').map(Number);
      
      const diff = targetOffset - 7;
      let targetH = h + diff;
      let dayNote = 'cùng ngày';
      if (targetH >= 24) {
        targetH -= 24;
        dayNote = 'ngày hôm sau';
      } else if (targetH < 0) {
        targetH += 24;
        dayNote = 'ngày hôm trước';
      }
      const pad = n => String(n).padStart(2, '0');
      document.getElementById('tz_calc_res').innerHTML = 
        \`Khi Hà Nội (UTC+7) là <strong>\${timeVal}</strong> thì múi giờ đích (UTC\${targetOffset >= 0 ? '+' + targetOffset : targetOffset}) là <strong>\${pad(targetH)}:\${pad(m)}</strong> (\${dayNote}, chênh lệch \${Math.abs(diff)} giờ).\`;
    }

    // Bach Dang 938 Battle Simulator Logic
    const bdSteps = {
      1: {
        title: "Bước 1: Bố trí bãi cọc ngầm",
        desc: "Ngô Quyền cho quân đẵn gỗ rừng, vót nhọn, bịt sắt rồi đóng cọc chìm ở nơi hiểm yếu gần cửa biển sông Bạch Đằng, tạo nên trận địa cọc ngầm độc nhất vô nhị.",
        svg: \`
          <svg viewBox="0 0 500 200" class="w-full h-full">
            <rect width="500" height="200" fill="#0f172a"/>
            <!-- River -->
            <path d="M0,60 Q250,90 500,60 L500,160 Q250,190 0,160 Z" fill="#1e3a5f"/>
            <!-- Stakes placed -->
            <g fill="#b45309">
              <polygon points="200,110 205,140 195,140"/>
              <polygon points="230,120 235,150 225,150"/>
              <polygon points="260,105 265,135 255,135"/>
              <polygon points="290,115 295,145 285,145"/>
            </g>
            <text x="250" y="45" fill="#f59e0b" font-weight="bold" font-size="14" text-anchor="middle">SÔNG BẠCH ĐẰNG: ĐÓNG CỌC GỖ VẠT NHỌN BỌC SẮT</text>
            <text x="250" y="180" fill="#94a3b8" font-size="12" text-anchor="middle">Bãi cọc được bố trí dày đặc tại nơi dòng nước hiểm yếu</text>
          </svg>
        \`
      },
      2: {
        title: "Bước 2: Thuỷ triều dâng & Thuyền nhẹ nhử giặc",
        desc: "Lúc triều lên, mặt nước dâng cao che khuất hoàn toàn bãi cọc nhọn. Ngô Quyền cử các chiến thuyền nhẹ ra khiêu chiến, vừa đánh vừa giả vờ thua rút lui để nhử hạm đội Hoằng Tháo vượt qua bãi cọc.",
        svg: \`
          <svg viewBox="0 0 500 200" class="w-full h-full">
            <rect width="500" height="200" fill="#0f172a"/>
            <!-- High Water Level -->
            <path d="M0,40 Q250,70 500,40 L500,180 Q250,200 0,180 Z" fill="#2563eb" opacity="0.8"/>
            <!-- Submerged stakes -->
            <g fill="#92400e" opacity="0.4">
              <polygon points="200,120 205,150 195,150"/>
              <polygon points="230,130 235,160 225,160"/>
              <polygon points="260,115 265,145 255,145"/>
              <polygon points="290,125 295,155 285,155"/>
            </g>
            <!-- Ships -->
            <text x="140" y="110" font-size="20">🛶</text>
            <text x="100" y="80" fill="#10b981" font-weight="bold" font-size="11">Thuyền ta nhử địch →</text>
            <text x="350" y="110" font-size="26">⛵⛵⛵</text>
            <text x="360" y="80" fill="#ef4444" font-weight="bold" font-size="11">← Quân Nam Hán đuổi theo</text>
            <text x="250" y="30" fill="#38bdf8" font-weight="bold" font-size="13" text-anchor="middle">TRIỀU DÂNG CAO CHE KHUẤT BÃI CỌC</text>
          </svg>
        \`
      },
      3: {
        title: "Bước 3: Thuỷ triều rút & Phản công dữ dội",
        desc: "Đúng lúc nước thuỷ triều rút cực nhanh, cọc nhọn nhô lên. Ngô Quyền hạ lệnh toàn quân ta quay đầu phản công quyết liệt. Thuyền chiến lớn của quân Nam Hán tháo chạy va phải cọc, bị thủng vỡ chìm đắm la liệt.",
        svg: \`
          <svg viewBox="0 0 500 200" class="w-full h-full">
            <rect width="500" height="200" fill="#0f172a"/>
            <!-- Low Water -->
            <path d="M0,80 Q250,110 500,80 L500,160 Q250,190 0,160 Z" fill="#1e3a5f"/>
            <!-- Sharp exposed stakes -->
            <g fill="#f59e0b" stroke="#fff" stroke-width="1">
              <polygon points="200,90 206,140 194,140"/>
              <polygon points="230,85 236,145 224,145"/>
              <polygon points="260,80 266,135 254,135"/>
              <polygon points="290,88 296,140 284,140"/>
            </g>
            <!-- Wrecked Enemy Ships -->
            <text x="240" y="95" font-size="24" transform="rotate(25, 240, 95)">💥⛵</text>
            <!-- Ambush Attack -->
            <text x="100" y="115" font-size="22">🛶🛶</text>
            <text x="100" y="70" fill="#34d399" font-weight="bold" font-size="13">QUÂN TA TỔNG PHẢN CÔNG!</text>
            <text x="250" y="30" fill="#ef4444" font-weight="bold" font-size="14" text-anchor="middle">TRIỀU RÚT: THUYỀN GIẶC ĐÂM VÀO CỌC VỠ NÁT</text>
          </svg>
        \`
      },
      4: {
        title: "Bước 4: Toàn thắng lịch sử năm 938",
        desc: "Chủ tướng giặc Lưu Hoằng Tháo bị tiêu diệt tại trận. Vua Nam Hán hốt hoảng hạ lệnh rút quân. Thắng lợi Bạch Đằng 938 chấm dứt hơn một nghìn năm Bắc thuộc, mở ra thời kì độc lập lâu dài của dân tộc Việt Nam.",
        svg: \`
          <svg viewBox="0 0 500 200" class="w-full h-full">
            <rect width="500" height="200" fill="#0f172a"/>
            <text x="250" y="80" font-size="40" text-anchor="middle">🏆🇻🇳👑</text>
            <text x="250" y="130" fill="#fbbf24" font-weight="black" font-size="18" text-anchor="middle">CHIẾN THẮNG BẠCH ĐẰNG NĂM 938</text>
            <text x="250" y="160" fill="#e2e8f0" font-size="12" text-anchor="middle">Chấm dứt hơn 1 000 năm Bắc thuộc - Mở kỉ nguyên độc lập tự chủ</text>
          </svg>
        \`
      }
    };

    function setBachDangStep(step) {
      for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(\`bd_step_\${i}\`);
        if (i === step) {
          btn.className = "p-2.5 rounded-xl bg-amber-500 text-white shadow";
        } else {
          btn.className = "p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
        }
      }
      const data = bdSteps[step];
      document.getElementById('bd_canvas').innerHTML = data.svg;
      document.getElementById('bd_desc').innerHTML = \`<strong>\${data.title}:</strong> \${data.desc}\`;
    }
    setBachDangStep(1);

    // Trạng Nguyên Exam Logic (30 Questions)
    const examQuestions = ${JSON.stringify(trangNguyenQuestions)};
    const userExamAnswers = {};
    let examTimerInterval = null;
    let examTimeLeft = 3600; // 60 minutes in seconds

    function initExam() {
      // Build palette
      const palette = document.getElementById('questionPalette');
      palette.innerHTML = examQuestions.map((_, i) => \`
        <button onclick="scrollToQuestion(\${i})" id="palette_btn_\${i}" class="w-7 h-7 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-600 hover:bg-amber-100 dark:hover:bg-amber-950 flex items-center justify-center transition">
          \${i + 1}
        </button>
      \`).join('');

      // Build question list
      const list = document.getElementById('examQuestionsList');
      list.innerHTML = examQuestions.map((q, i) => \`
        <div id="exam_q_\${i}" class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200">
              Câu \${i + 1} / 30
            </span>
            <span class="text-[11px] text-slate-400">\${i < 15 ? 'Lịch Sử' : 'Địa Lí'}</span>
          </div>
          <p class="font-bold text-sm text-slate-800 dark:text-slate-100 mb-3">\${q.q}</p>
          <div class="space-y-2">
            \${q.options.map((opt, optIdx) => \`
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 cursor-pointer transition text-xs">
                <input type="radio" name="exam_q_opt_\${i}" value="\${optIdx}" onchange="selectExamAnswer(\${i}, \${optIdx})" class="text-amber-600 focus:ring-amber-500">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
          <div id="exam_exp_\${i}" class="hidden mt-3 p-3 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"></div>
        </div>
      \`).join('');

      startExamTimer();
    }

    function scrollToQuestion(i) {
      document.getElementById(\`exam_q_\${i}\`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function selectExamAnswer(qIdx, optIdx) {
      userExamAnswers[qIdx] = optIdx;
      const paletteBtn = document.getElementById(\`palette_btn_\${qIdx}\`);
      if (paletteBtn) {
        paletteBtn.classList.add('bg-amber-500', 'text-white', 'border-amber-500');
      }
      document.getElementById('answeredCountBadge').textContent = \`\${Object.keys(userExamAnswers).length} / 30 Đã làm\`;
    }

    function startExamTimer() {
      clearInterval(examTimerInterval);
      examTimeLeft = 3600;
      examTimerInterval = setInterval(() => {
        if (examTimeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
          return;
        }
        examTimeLeft--;
        const m = Math.floor(examTimeLeft / 60);
        const s = examTimeLeft % 60;
        document.getElementById('examTimer').textContent = \`\${String(m).padStart(2, '0')}:\${String(s).padStart(2, '0')}\`;
      }, 1000);
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      examQuestions.forEach((q, i) => {
        const userAns = userExamAnswers[i];
        const isCorrect = userAns === q.ans;
        if (isCorrect) score++;

        const expBox = document.getElementById(\`exam_exp_\${i}\`);
        expBox.classList.remove('hidden');
        if (isCorrect) {
          expBox.innerHTML = \`<span class="text-emerald-600 font-bold"><i class="fa-solid fa-check"></i> Đúng!</span> \${q.exp}\`;
        } else {
          expBox.innerHTML = \`<span class="text-rose-600 font-bold"><i class="fa-solid fa-xmark"></i> Sai!</span> Đáp án đúng: <strong>\${q.options[q.ans]}</strong>. Giải thích: \${q.exp}\`;
        }
      });

      // Confetti celebration
      if (score >= 20) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }

      alert(\`🎉 Bạn đạt được \${score} / 30 câu đúng (\${Math.round((score/30)*10) / 10 * 10} điểm)!\\nHãy cuộn xem phần giải thích chi tiết cho từng câu bên dưới.\`);
    }

    function resetExam() {
      for (const k in userExamAnswers) delete userExamAnswers[k];
      document.querySelectorAll('#examQuestionsContainer input[type="radio"]').forEach(r => r.checked = false);
      document.querySelectorAll('#examQuestionsContainer [id^="exam_exp_"]').forEach(e => e.classList.add('hidden'));
      document.querySelectorAll('#questionPalette button').forEach(b => {
        b.className = "w-7 h-7 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-600 hover:bg-amber-100 dark:hover:bg-amber-950 flex items-center justify-center transition";
      });
      document.getElementById('answeredCountBadge').textContent = "0 / 30 Đã làm";
      startExamTimer();
    }

    // Initialize exam on page load
    initExam();
  </script>
</body>
</html>`;

// Write to courses/lsdl_6.html
const outPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_6.html';
fs.writeFileSync(outPath, html, 'utf8');
console.log('Successfully wrote courses/lsdl_6.html, size:', html.length, 'bytes');

// Also write to alias history_geo_6.html
const aliasPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/history_geo_6.html';
fs.writeFileSync(aliasPath, html, 'utf8');
console.log('Successfully wrote alias courses/history_geo_6.html');
