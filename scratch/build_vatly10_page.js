// scratch/build_vatly10_page.js
const fs = require('fs');
const path = require('path');
const diagrams = require('./vatly10_diagrams.js');
const {
  parseInlineMarkdown,
  parseMarkdownTable,
  parseLessonBlocks,
  renderBlocksToHTML
} = require('./vatly10_parser_helper.js');

const rawData = JSON.parse(fs.readFileSync('scratch/vatly10_parsed_raw.json', 'utf8'));
const { chapters, lessonsData, formulaTableText, termsText } = rawData;

// Chapter badges and icons
const chapterMeta = {
  1: { badge: 'Chương I: Mở đầu', icon: 'fa-compass' },
  2: { badge: 'Chương II: Động học', icon: 'fa-gauge-high' },
  3: { badge: 'Chương III: Động lực học', icon: 'fa-apple-whole' },
  4: { badge: 'Chương IV: Năng lượng', icon: 'fa-bolt' },
  5: { badge: 'Chương V: Động lượng', icon: 'fa-meteor' },
  6: { badge: 'Chương VI: Tròn đều', icon: 'fa-arrows-spin' },
  7: { badge: 'Chương VII: Biến dạng & Áp suất', icon: 'fa-water' }
};

// 34-lesson Mini-Quizzes
const lessonQuizzes = {
  1: [
    {
      q: "Đối tượng nghiên cứu chính của Vật lí học là gì?",
      options: [
        "Các dạng vận động của vật chất và năng lượng từ vi mô đến vĩ mô",
        "Sự hình thành và biến đổi của các chất hóa học",
        "Quy luật sinh trưởng và tiến hóa của các loài sinh vật",
        "Cấu tạo và lịch sử hình thành vỏ Trái Đất"
      ],
      ans: 0,
      exp: "Vật lí là khoa học nghiên cứu các dạng vận động của vật chất và năng lượng, tìm hiểu quy luật tự nhiên từ hạt vi mô đến vũ trụ vĩ mô."
    }
  ],
  2: [
    {
      q: "Khi xảy ra sự cố có người bị điện giật trong phòng thực hành, hành động đầu tiên cần làm là:",
      options: [
        "Ngắt nguồn điện ngay lập tức hoặc dùng vật cách điện khô để tách nạn nhân ra",
        "Dùng tay không kéo ngay nạn nhân ra khỏi nguồn điện",
        "Đổ nước sạch lên người nạn nhân để làm mát",
        "Chạy đi gọi bảo vệ mà không ngắt điện"
      ],
      ans: 0,
      exp: "Nguyên tắc sinh tử: Tuyệt đối không chạm trực tiếp vào nạn nhân khi chưa ngắt nguồn; ngắt cầu dao hoặc dùng que gỗ khô tách dây điện."
    }
  ],
  3: [
    {
      q: "Trong phép đo đại lượng A, sai số tuyệt đối của phép đo được xác định bằng công thức:",
      options: [
        "ΔA = ΔA_tb + ΔA_dc (Sai số ngẫu nhiên trung bình + Sai số dụng cụ)",
        "ΔA = ΔA_tb − ΔA_dc",
        "ΔA = (ΔA_tb / A_tb) × 100%",
        "ΔA = A_tb + ΔA_dc"
      ],
      ans: 0,
      exp: "Sai số tuyệt đối của phép đo trực tiếp gồm sai số ngẫu nhiên trung bình cộng với sai số dụng cụ."
    }
  ],
  4: [
    {
      q: "Mối quan hệ giữa độ lớn độ dịch chuyển |d| và quãng đường đi được s của một vật luôn thỏa mãn:",
      options: [
        "|d| ≤ s (độ dịch chuyển không vượt quá quãng đường)",
        "|d| ≥ s",
        "|d| luôn luôn bằng s",
        "|d| > s khi vật đổi chiều chuyển động"
      ],
      ans: 0,
      exp: "Quãng đường s là chiều dài quỹ đạo thực tế (luôn ≥ 0). Độ dịch chuyển d là vectơ nối vị trí đầu và cuối, nên |d| ≤ s; dấu bằng xảy ra khi đi thẳng 1 chiều."
    }
  ],
  5: [
    {
      q: "Công thức cộng vận tốc tương đối giữa ba vật (1, 2, 3) có dạng vectơ là:",
      options: [
        "v⃗₁₃ = v⃗₁₂ + v⃗₂₃",
        "v⃗₁₃ = v⃗₁₂ − v⃗₂₃",
        "v₁₃ = v₁₂ + v₂₃ trong mọi trường hợp",
        "v⃗₁₃ = v⃗₂₃ − v⃗₁₂"
      ],
      ans: 0,
      exp: "Vận tốc tuyệt đối bằng tổng vectơ của vận tốc tương đối và vận tốc kéo theo: v⃗₁₃ = v⃗₁₂ + v⃗₂₃."
    }
  ],
  6: [
    {
      q: "Ưu điểm nổi bật của việc đo tốc độ bằng cổng quang điện và đồng hồ đo thời gian hiện số là:",
      options: [
        "Giảm thiểu sai số chủ quan do thao tác bấm tay của người đo",
        "Không cần đo quãng đường di chuyển",
        "Có thể đo được tốc độ mà không cần cấp điện",
        "Chỉ đo được vật chuyển động thẳng đều"
      ],
      ans: 0,
      exp: "Cổng quang điện kích hoạt và ngắt tự động bằng chùm sáng giúp loại bỏ hoàn toàn sai số phản xạ bấm tay của con người."
    }
  ],
  7: [
    {
      q: "Trên đồ thị độ dịch chuyển – thời gian (d – t), độ dốc (hệ số góc) của đoạn thẳng biểu thị đại lượng nào?",
      options: [
        "Vận tốc của chuyển động (v = Δd / Δt)",
        "Gia tốc của chuyển động",
        "Quãng đường đi được của vật",
        "Lực tác dụng lên vật"
      ],
      ans: 0,
      exp: "Độ dốc của đồ thị d - t chính là vận tốc v = Δd / Δt. Độ dốc nằm ngang nghĩa là vật đứng yên."
    }
  ],
  8: [
    {
      q: "Chuyển động thẳng có vận tốc v và gia tốc a được gọi là nhanh dần đều khi:",
      options: [
        "a cùng dấu với v (a · v > 0)",
        "a ngược dấu với v (a · v < 0)",
        "a luôn luôn dương",
        "a luôn luôn âm"
      ],
      ans: 0,
      exp: "Nhanh dần đều: vectơ gia tốc cùng hướng với vận tốc (a · v > 0). Chậm dần đều: a · v < 0."
    }
  ],
  9: [
    {
      q: "Hệ thức độc lập với thời gian liên hệ giữa vận tốc, gia tốc và độ dịch chuyển trong chuyển động thẳng biến đổi đều là:",
      options: [
        "v² − v₀² = 2ad",
        "v² + v₀² = 2ad",
        "v − v₀ = 2ad",
        "v² − v₀² = ad"
      ],
      ans: 0,
      exp: "Công thức độc lập thời gian kinh điển: v² − v₀² = 2ad."
    }
  ],
  10: [
    {
      q: "Sự rơi tự do là chuyển động của một vật:",
      options: [
        "Chỉ chịu tác dụng của trọng lực (bỏ qua lực cản không khí)",
        "Dưới tác dụng của lực cản không khí rất lớn",
        "Có gia tốc thay đổi liên tục theo thời gian",
        "Với vận tốc ban đầu rất lớn hướng lên"
      ],
      ans: 0,
      exp: "Sự rơi tự do là chuyển động chỉ dưới tác dụng của trọng lực; gần mặt đất có gia tốc g ≈ 9.8 m/s²."
    }
  ],
  11: [
    {
      q: "Từ công thức rơi tự do không vận tốc đầu h = ½gt², gia tốc rơi tự do g được tính từ kết quả đo h và t là:",
      options: [
        "g = 2h / t²",
        "g = h / (2t²)",
        "g = √(2h / t)",
        "g = 2h · t²"
      ],
      ans: 0,
      exp: "Từ h = ½gt² biến đổi ta được g = 2h / t²."
    }
  ],
  12: [
    {
      q: "Trong chuyển động ném ngang từ độ cao H với vận tốc ban đầu v₀, thời gian rơi của vật phụ thuộc vào:",
      options: [
        "Độ cao H và gia tốc trọng trường g (t = √(2H / g))",
        "Vận tốc ném ban đầu v₀",
        "Khối lượng m của vật ném",
        "Hình dạng và chất liệu của vật"
      ],
      ans: 0,
      exp: "Thời gian rơi của ném ngang chỉ phụ thuộc độ cao H và g: t = √(2H / g), hoàn toàn độc lập với v₀."
    }
  ],
  13: [
    {
      q: "Hai lực đồng quy F₁ và F₂ vuông góc với nhau thì độ lớn hợp lực F được tính bằng:",
      options: [
        "F = √(F₁² + F₂²)",
        "F = F₁ + F₂",
        "F = |F₁ − F₂|",
        "F = (F₁ + F₂) / 2"
      ],
      ans: 0,
      exp: "Theo định lí Pythagore trong quy tắc hình bình hành: khi hai lực vuông góc thì F = √(F₁² + F₂²)."
    }
  ],
  14: [
    {
      q: "Theo Định luật 1 Newton, nếu một vật không chịu tác dụng của lực nào hoặc chịu các lực có hợp lực bằng 0 thì:",
      options: [
        "Vật đang đứng yên tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều",
        "Vật sẽ chuyển động nhanh dần đều",
        "Vật lập tức dừng lại ngay",
        "Vật sẽ chuyển động tròn đều"
      ],
      ans: 0,
      exp: "Định luật 1 Newton (quán tính): Vật bảo toàn trạng thái đứng yên hoặc chuyển động thẳng đều khi hợp lực bằng 0."
    }
  ],
  15: [
    {
      q: "Biểu thức của Định luật 2 Newton viết dưới dạng vectơ là:",
      options: [
        "F⃗ = m · a⃗  (hay a⃗ = F⃗ / m)",
        "F⃗ = m / a⃗",
        "a⃗ = m · F⃗",
        "F = m · v"
      ],
      ans: 0,
      exp: "Định luật 2 Newton: Gia tốc cùng hướng với hợp lực, tỉ lệ thuận với lực và tỉ lệ nghịch với khối lượng: F⃗ = ma⃗."
    }
  ],
  16: [
    {
      q: "Cặp lực và phản lực trong Định luật 3 Newton có đặc điểm nào sau đây?",
      options: [
        "Cùng độ lớn, ngược chiều, cùng giá nhưng tác dụng vào HAI VẬT KHÁC NHAU",
        "Cùng tác dụng vào một vật nên triệt tiêu lẫn nhau",
        "Xuất hiện trước sau chứ không đồng thời",
        "Khác nhau về bản chất lực"
      ],
      ans: 0,
      exp: "Lực và phản lực xuất hiện đồng thời, cùng bản chất, cùng giá, ngược chiều nhưng đặt lên 2 vật khác nhau nên không triệt tiêu nhau."
    }
  ],
  17: [
    {
      q: "Trọng lượng P của một vật khối lượng m gần mặt đất được xác định bởi:",
      options: [
        "P = m · g (đơn vị newton, N)",
        "P = m / g",
        "P = g / m",
        "P = ½ · m · g²"
      ],
      ans: 0,
      exp: "Trọng lượng là độ lớn của trọng lực tác dụng lên vật: P = mg (N)."
    }
  ],
  18: [
    {
      q: "Độ lớn của lực ma sát trượt tỉ lệ với đại lượng nào sau đây?",
      options: [
        "Áp lực N của vật lên mặt tiếp xúc (F_mst = μ · N)",
        "Diện tích bề mặt tiếp xúc của vật",
        "Vận tốc chuyển động của vật",
        "Thời gian vật trượt trên mặt sàn"
      ],
      ans: 0,
      exp: "Lực ma sát trượt F_mst = μ · N, tỉ lệ thuận với áp lực N và không phụ thuộc diện tích tiếp xúc biểu kiến."
    }
  ],
  19: [
    {
      q: "Lực đẩy Archimedes tác dụng lên vật nhúng trong chất lỏng có độ lớn tính bằng:",
      options: [
        "F_A = ρ_lỏng · g · V_chìm",
        "F_A = m_vật · g",
        "F_A = ρ_vật · g · V_toàn_phần",
        "F_A = p · S"
      ],
      ans: 0,
      exp: "Lực đẩy Archimedes bằng trọng lượng khối chất lỏng bị vật chiếm chỗ: F_A = ρ · g · V_chìm."
    }
  ],
  20: [
    {
      q: "Một vật trượt xuống mặt phẳng nghiêng góc α không ma sát có gia tốc là:",
      options: [
        "a = g · sinα",
        "a = g · cosα",
        "a = g / sinα",
        "a = g"
      ],
      ans: 0,
      exp: "Thành phần trọng lực dọc mặt dốc kéo vật trượt là P_x = mg·sinα, do đó a = P_x / m = g·sinα."
    }
  ],
  21: [
    {
      q: "Moment lực đối với một trục quay là đại lượng đặc trưng cho tác dụng làm quay của lực, được tính bằng:",
      options: [
        "M = F · d (d là khoảng cách vuông góc từ trục quay đến giá của lực)",
        "M = F / d",
        "M = F · s",
        "M = F · v"
      ],
      ans: 0,
      exp: "Moment lực M = F · d (N·m), với d là cánh tay đòn (khoảng cách vuông góc từ trục quay đến giá của lực)."
    }
  ],
  22: [
    {
      q: "Khi làm thí nghiệm tổng hợp hai lực đồng quy bằng lực kế, lực cân bằng có đặc điểm gì so với hợp lực?",
      options: [
        "Cùng độ lớn, cùng phương nhưng ngược chiều với hợp lực",
        "Cùng độ lớn và cùng chiều với hợp lực",
        "Vuông góc với hợp lực",
        "Có độ lớn gấp đôi hợp lực"
      ],
      ans: 0,
      exp: "Lực cân bằng có độ lớn bằng hợp lực nhưng ngược chiều, giữ cho điểm đồng quy đứng yên."
    }
  ],
  23: [
    {
      q: "Công cơ học của lực không đổi F làm vật dịch chuyển một đoạn s theo góc α là:",
      options: [
        "A = F · s · cosα (đơn vị joule, J)",
        "A = F · s · sinα",
        "A = F / s",
        "A = F · s · tanα"
      ],
      ans: 0,
      exp: "Công thức tính công: A = F·s·cosα. Khi α < 90° công phát động; α = 90° công bằng 0; α > 90° công cản."
    }
  ],
  24: [
    {
      q: "Công suất P là đại lượng đặc trưng cho tốc độ thực hiện công, tính bằng:",
      options: [
        "P = A / t = F · v · cosα (đơn vị watt, W)",
        "P = A · t",
        "P = F / t",
        "P = A / v"
      ],
      ans: 0,
      exp: "Công suất P = A / t (W). Khi lực cùng hướng vận tốc: P = F·v."
    }
  ],
  25: [
    {
      q: "Định lí động năng phát biểu rằng độ biến thiên động năng của một vật bằng:",
      options: [
        "Tổng công của các lực tác dụng lên vật (ΔW_đ = A_hợp)",
        "Công của trọng lực sinh ra",
        "Thế năng cực đại của vật",
        "Động lượng của vật"
      ],
      ans: 0,
      exp: "Định lí động năng: W_đ2 − W_đ1 = A_hợp. Công dương làm động năng tăng, công âm làm động năng giảm."
    }
  ],
  26: [
    {
      q: "Cơ năng của một vật chuyển động trong trọng trường được bảo toàn khi nào?",
      options: [
        "Khi vật chỉ chịu tác dụng của trọng lực (hoặc lực thế, bỏ qua ma sát và lực cản)",
        "Khi vật chuyển động có ma sát rất lớn",
        "Trong mọi trường hợp chuyển động",
        "Chỉ khi vật đứng yên"
      ],
      ans: 0,
      exp: "Cơ năng bảo toàn khi hệ chỉ chịu tác dụng của lực thế (trọng lực, lực đàn hồi) và không có ma sát, lực cản hao phí."
    }
  ],
  27: [
    {
      q: "Hiệu suất η của một động cơ được tính bằng tỉ số giữa:",
      options: [
        "Năng lượng (hoặc công) có ích và năng lượng toàn phần cung cấp: η = (A_ích / A_toàn_phần) × 100%",
        "Năng lượng hao phí và năng lượng toàn phần",
        "Công suất toàn phần và công suất có ích",
        "Nhiệt lượng tỏa ra và công cơ học"
      ],
      ans: 0,
      exp: "Hiệu suất η = (A_ích / A_toàn_phần) × 100%, luôn nhỏ hơn 100% trong thực tế do có ma sát và hao phí."
    }
  ],
  28: [
    {
      q: "Động lượng p⃗ của một vật khối lượng m đang chuyển động với vận tốc v⃗ được tính bằng:",
      options: [
        "p⃗ = m · v⃗ (đơn vị kg·m/s hoặc N·s)",
        "p⃗ = ½ · m · v⃗²",
        "p⃗ = m / v⃗",
        "p⃗ = m · a⃗"
      ],
      ans: 0,
      exp: "Động lượng là đại lượng vectơ cùng hướng với vận tốc: p⃗ = mv⃗."
    }
  ],
  29: [
    {
      q: "Định luật bảo toàn động lượng được áp dụng cho hệ nào sau đây?",
      options: [
        "Hệ kín (hệ cô lập không có ngoại lực tác dụng hoặc tổng ngoại lực bằng 0)",
        "Mọi hệ vật có ma sát lớn",
        "Hệ chỉ gồm một vật chuyển động có gia tốc",
        "Hệ có ngoại lực rất lớn tác dụng lâu dài"
      ],
      ans: 0,
      exp: "Định luật bảo toàn động lượng: Tổng động lượng của hệ kín không đổi: p⃗_trước = p⃗_sau."
    }
  ],
  30: [
    {
      q: "Trong va chạm mềm giữa hai vật trong hệ kín, đại lượng nào sau đây KHÔNG được bảo toàn?",
      options: [
        "Động năng của hệ (một phần cơ năng chuyển thành nhiệt và biến dạng)",
        "Tổng động lượng của hệ",
        "Tổng khối lượng của hệ",
        "Vectơ động lượng theo phương va chạm"
      ],
      ans: 0,
      exp: "Trong va chạm mềm: Động lượng luôn bảo toàn nhưng động năng không bảo toàn do hao phí biến dạng và nhiệt."
    }
  ],
  31: [
    {
      q: "Mối liên hệ giữa tốc độ dài v, tốc độ góc ω và bán kính r trong chuyển động tròn đều là:",
      options: [
        "v = ω · r",
        "v = ω / r",
        "ω = v · r",
        "v = 2π · ω · r"
      ],
      ans: 0,
      exp: "Công thức liên hệ tốc độ dài và tốc độ góc: v = ω · r."
    }
  ],
  32: [
    {
      q: "Gia tốc hướng tâm trong chuyển động tròn đều có độ lớn tính bằng công thức:",
      options: [
        "a_ht = v² / r = ω² · r",
        "a_ht = v · r",
        "a_ht = v / r²",
        "a_ht = ω / r"
      ],
      ans: 0,
      exp: "Gia tốc hướng tâm a_ht = v² / r = ω²r, luôn hướng vào tâm quỹ đạo tròn."
    }
  ],
  33: [
    {
      q: "Theo Định luật Hooke, trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo:",
      options: [
        "Tỉ lệ thuận với độ biến dạng của lò xo: F_đh = k · |Δl|",
        "Tỉ lệ nghịch với độ dãn của lò xo",
        "Tỉ lệ với bình phương độ dãn",
        "Không phụ thuộc vào độ cứng k"
      ],
      ans: 0,
      exp: "Định luật Hooke: F_đh = k · |Δl|, trong đó k là độ cứng của lò xo (N/m)."
    }
  ],
  34: [
    {
      q: "Áp suất chất lỏng ở độ sâu h dưới mặt thoáng có khối lượng riêng ρ được tính bằng:",
      options: [
        "p_lỏng = ρ · g · h",
        "p_lỏng = m · g · h",
        "p_lỏng = ρ · g / h",
        "p_lỏng = ½ · ρ · h²"
      ],
      ans: 0,
      exp: "Áp suất thủy tĩnh do cột chất lỏng gây ra: p_lỏng = ρ·g·h. Áp suất tuyệt đối: p = p₀ + ρgh."
    }
  ]
};

// 25 Exam questions for Trạng Nguyên modal
const examQuestions = [
  {
    q: "Đơn vị đo của gia tốc trong hệ đơn vị SI là:",
    options: ["m/s²", "m/s", "km/h", "N/kg"],
    ans: 0,
    exp: "Gia tốc là tốc độ thay đổi của vận tốc, đơn vị là m/s²."
  },
  {
    q: "Một xe ô tô tăng tốc từ 10 m/s lên 20 m/s trong thời gian 5 s. Gia tốc của xe là:",
    options: ["2 m/s²", "4 m/s²", "1 m/s²", "5 m/s²"],
    ans: 0,
    exp: "a = (v − v₀) / t = (20 − 10) / 5 = 2 m/s²."
  },
  {
    q: "Thả một vật rơi tự do từ độ cao h = 20 m (lấy g = 10 m/s²). Thời gian vật chạm đất là:",
    options: ["2 s", "1 s", "4 s", "3 s"],
    ans: 0,
    exp: "t = √(2h / g) = √(2 × 20 / 10) = √4 = 2 s."
  },
  {
    q: "Một vật ném ngang từ độ cao 45 m với v₀ = 15 m/s (g = 10 m/s²). Tầm xa của vật là:",
    options: ["45 m", "30 m", "60 m", "15 m"],
    ans: 0,
    exp: "t = √(2 × 45 / 10) = 3 s. Tầm xa L = v₀ · t = 15 × 3 = 45 m."
  },
  {
    q: "Một lực 20 N tác dụng vào vật khối lượng 4 kg làm vật thu gia tốc bằng:",
    options: ["5 m/s²", "80 m/s²", "0.2 m/s²", "10 m/s²"],
    ans: 0,
    exp: "Theo Newton II: a = F / m = 20 / 4 = 5 m/s²."
  },
  {
    q: "Hai người kéo co dùng lực 200 N cân bằng. Lực căng của sợi dây ở giữa là:",
    options: ["200 N", "400 N", "0 N", "100 N"],
    ans: 0,
    exp: "Dây truyền lực căng; khi hai đầu chịu 2 lực 200 N cân bằng thì lực căng dây là 200 N."
  },
  {
    q: "Hệ số ma sát trượt μ là đại lượng:",
    options: ["Không có đơn vị, phụ thuộc vật liệu và tình trạng hai mặt tiếp xúc", "Có đơn vị là newton (N)", "Có đơn vị là m/s", "Tỉ lệ với diện tích tiếp xúc"],
    ans: 0,
    exp: "Hệ số ma sát trượt μ là đại lượng không thứ nguyên, phụ thuộc vật liệu bề mặt."
  },
  {
    q: "Một vật khối lượng 2 kg đặt trên sàn ngang có μ = 0.2, g = 10 m/s². Lực ma sát trượt là:",
    options: ["4 N", "20 N", "2 N", "40 N"],
    ans: 0,
    exp: "N = mg = 20 N. F_mst = μ · N = 0.2 × 20 = 4 N."
  },
  {
    q: "Tác dụng làm quay của lực đối với một trục quay phụ thuộc vào:",
    options: ["Độ lớn của lực và cánh tay đòn của lực (M = F · d)", "Chỉ độ lớn của lực", "Chỉ hướng của lực", "Vận tốc của vật quay"],
    ans: 0,
    exp: "Moment lực M = F · d phụ thuộc độ lớn lực F và cánh tay đòn d."
  },
  {
    q: "Một lực 50 N tác dụng vuông góc vào cờ-lê dài 0.2 m để vặn ốc. Moment lực sinh ra là:",
    options: ["10 N·m", "250 N·m", "5 N·m", "100 N·m"],
    ans: 0,
    exp: "M = F · d = 50 × 0.2 = 10 N·m."
  },
  {
    q: "Một lực 100 N kéo vật dịch chuyển 10 m theo phương của lực. Công sinh ra là:",
    options: ["1000 J", "10 J", "100 J", "500 J"],
    ans: 0,
    exp: "A = F · s · cos(0°) = 100 × 10 = 1000 J."
  },
  {
    q: "Một cần cẩu nâng vật nặng 5000 N lên cao 10 m trong 20 s. Công suất của cần cẩu là:",
    options: ["2500 W", "50000 W", "1000 W", "250 W"],
    ans: 0,
    exp: "A = 5000 × 10 = 50000 J. P = A / t = 50000 / 20 = 2500 W."
  },
  {
    q: "Đơn vị đo kilowatt-giờ (kWh) thường dùng trong hoá đơn tiền điện là đơn vị của:",
    options: ["Năng lượng (công)", "Công suất", "Lực", "Cường độ dòng điện"],
    ans: 0,
    exp: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J, là đơn vị năng lượng."
  },
  {
    q: "Một ô tô 1000 kg chuyển động với tốc độ 20 m/s có động năng bằng:",
    options: ["200 000 J (200 kJ)", "400 000 J", "20 000 J", "10 000 J"],
    ans: 0,
    exp: "W_đ = ½ · m · v² = 0.5 × 1000 × 20² = 200 000 J = 200 kJ."
  },
  {
    q: "Một vật 2 kg có thế năng trọng trường 100 J (chọn mốc tại mặt đất, g = 10 m/s²). Độ cao của vật là:",
    options: ["5 m", "10 m", "50 m", "2 m"],
    ans: 0,
    exp: "h = W_t / (mg) = 100 / (2 × 10) = 5 m."
  },
  {
    q: "Động lượng của một quả bóng khối lượng 0.5 kg bay với vận tốc 10 m/s là:",
    options: ["5 kg·m/s", "50 kg·m/s", "25 kg·m/s", "0.05 kg·m/s"],
    ans: 0,
    exp: "p = m · v = 0.5 × 10 = 5 kg·m/s."
  },
  {
    q: "Khi súng bắn ra một viên đạn về phía trước, khẩu súng bị giật lùi về phía sau là hiện tượng giải thích bằng:",
    options: ["Định luật bảo toàn động lượng (chuyển động bằng phản lực)", "Định luật bảo toàn cơ năng", "Định luật Hooke", "Sự rơi tự do"],
    ans: 0,
    exp: "Hệ súng + đạn ban đầu đứng yên (p = 0), khi đạn bắn tới thì súng giật lùi để tổng động lượng bằng 0."
  },
  {
    q: "Một cánh quạt quay đều 300 vòng/phút. Tần số quay f của quạt là:",
    options: ["5 Hz", "300 Hz", "50 Hz", "10 Hz"],
    ans: 0,
    exp: "f = 300 vòng / 60 s = 5 Hz (vòng/giây)."
  },
  {
    q: "Một chất điểm chuyển động tròn đều bán kính 0.5 m với tốc độ góc 4 rad/s. Tốc độ dài v là:",
    options: ["2 m/s", "8 m/s", "0.5 m/s", "1 m/s"],
    ans: 0,
    exp: "v = ω · r = 4 × 0.5 = 2 m/s."
  },
  {
    q: "Gia tốc hướng tâm của một vật chuyển động tròn bán kính 2 m với tốc độ 4 m/s là:",
    options: ["8 m/s²", "2 m/s²", "16 m/s²", "4 m/s²"],
    ans: 0,
    exp: "a_ht = v² / r = 4² / 2 = 16 / 2 = 8 m/s²."
  },
  {
    q: "Một lò xo có độ cứng k = 100 N/m bị dãn một đoạn 0.05 m (5 cm). Lực đàn hồi sinh ra là:",
    options: ["5 N", "500 N", "20 N", "0.5 N"],
    ans: 0,
    exp: "F_đh = k · |Δl| = 100 × 0.05 = 5 N."
  },
  {
    q: "Khối lượng riêng của nước là 1000 kg/m³. Khối lượng của 2 m³ nước là:",
    options: ["2000 kg", "500 kg", "1000 kg", "200 kg"],
    ans: 0,
    exp: "m = ρ · V = 1000 × 2 = 2000 kg."
  },
  {
    q: "Một người nặng 600 N đứng trên mặt sàn với diện tích tiếp xúc 2 bàn chân là 0.03 m². Áp suất tác dụng lên sàn là:",
    options: ["20 000 Pa", "18 Pa", "2 000 Pa", "180 000 Pa"],
    ans: 0,
    exp: "p = F / S = 600 / 0.03 = 20 000 Pa (20 kPa)."
  },
  {
    q: "Ở độ sâu 10 m dưới mặt nước (ρ = 1000 kg/m³, g = 10 m/s²), áp suất do cột nước gây ra là:",
    options: ["100 000 Pa (100 kPa)", "10 000 Pa", "1 000 000 Pa", "50 000 Pa"],
    ans: 0,
    exp: "p_lỏng = ρ · g · h = 1000 × 10 × 10 = 100 000 Pa = 100 kPa (tương đương 1 atm)."
  },
  {
    q: "Nguyên nhân giúp túi khí ô tô giảm thiểu chấn thương cho tài xế khi xảy ra va chạm là:",
    options: ["Kéo dài thời gian va chạm Δt làm giảm lực trung bình tác dụng lên người", "Làm giảm động lượng ban đầu của xe", "Tăng gia tốc dừng của người", "Làm tăng độ cứng của vô lăng"],
    ans: 0,
    exp: "Từ F_tb · Δt = Δp: độ biến thiên động lượng không đổi, túi khí tăng thời gian dừng Δt nên lực tác dụng F_tb giảm mạnh."
  }
];

// Sidebar HTML with 2-line layout, NO truncation!
function renderSidebarHTML() {
  let html = '<nav class="space-y-6 text-xs">';

  chapters.forEach(chap => {
    const meta = chapterMeta[chap.num];
    html += `
      <div>
        <div class="text-[11px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-400 px-3 py-1.5 flex items-center justify-between bg-sky-50 dark:bg-sky-950/60 rounded-xl mb-2">
          <span>${chap.title}</span>
          <span class="text-[10px] text-sky-600 font-bold">${chap.lessons.length} bài</span>
        </div>
        <div class="space-y-1">
    `;

    chap.lessons.forEach(lessonNum => {
      const lesson = lessonsData[lessonNum];
      if (!lesson) return;
      html += `
        <a href="#bai-${lesson.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-sky-200 dark:hover:border-sky-800/60 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-sky-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-sky-600 dark:text-sky-400">Bài ${lesson.num}</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0 group-hover:text-sky-500 transition">Chương ${chap.num}</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition leading-snug">
            ${lesson.title}
          </div>
        </a>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
        <span>Tra cứu & Thuật ngữ</span>
        <span class="text-[10px] text-amber-600 font-bold">2 mục</span>
      </div>
      <div class="space-y-1">
        <a href="#bang-cong-thuc" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">Bảng công thức</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Tổng hợp</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug">
            Bảng công thức tra cứu Vật lí 10
          </div>
        </a>
        <a href="#thuat-ngu-cot-loi" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">Đơn vị & Thuật ngữ</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Cốt lõi</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug">
            Đơn vị SI và Các phân biệt cần nhớ
          </div>
        </a>
      </div>
    </div>
  </nav>`;

  return html;
}

// Main Articles HTML generator
function renderMainArticlesHTML() {
  let html = '';

  chapters.forEach(chap => {
    const meta = chapterMeta[chap.num];
    html += `
      <div id="chuong-${chap.num}" class="mb-12">
        <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-sky-900 to-slate-900 rounded-2xl text-white shadow-sm mb-8">
          <span class="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-lg text-sky-300">
            <i class="fa-solid ${meta.icon}"></i>
          </span>
          <div>
            <span class="text-[11px] font-bold text-sky-300 uppercase tracking-wider block">CHƯƠNG ${chap.num}</span>
            <h2 class="text-xl sm:text-2xl font-black">${chap.title.replace(/^Chương\s+[IVXLCDM]+\s*[–-]\s*/i, '')}</h2>
          </div>
        </div>
    `;

    chap.lessons.forEach(lessonNum => {
      const lesson = lessonsData[lessonNum];
      if (!lesson) return;

      const blocks = parseLessonBlocks(lesson.body);
      const lessonContentHTML = renderBlocksToHTML(blocks, lessonNum);
      const quizList = lessonQuizzes[lessonNum] || [];

      // Diagram insertion
      let diagramSVG = '';
      if (lessonNum === 7 || lessonNum === 9) diagramSVG = diagrams.motionGraphSVG;
      else if (lessonNum === 12) diagramSVG = diagrams.projectileSVG;
      else if (lessonNum === 13 || lessonNum === 20) diagramSVG = diagrams.inclinedPlaneSVG;
      else if (lessonNum === 21) diagramSVG = diagrams.momentLeverSVG;
      else if (lessonNum === 26) diagramSVG = diagrams.conservationEnergySVG;
      else if (lessonNum === 31 || lessonNum === 32) diagramSVG = diagrams.circularMotionSVG;
      else if (lessonNum === 33 || lessonNum === 34) diagramSVG = diagrams.hookePressureSVG;

      html += `
        <article id="bai-${lesson.num}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
          <!-- Lesson Header Badge -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2.5">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-sky-500/20 tracking-wide">
                <i class="fa-solid fa-atom"></i> Bài ${lesson.num}
              </span>
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-900/60">
                Chương ${chap.num}
              </span>
            </div>
            <button onclick="toggleBookmark('bai-${lesson.num}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>

          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-snug tracking-tight">
            <span class="text-sky-600 dark:text-sky-400">Bài ${lesson.num}:</span> ${lesson.title}
          </h3>

          <!-- Render Diagram if applicable -->
          ${diagramSVG}

          <!-- Render Content Blocks -->
          ${lessonContentHTML}

          <!-- Mini-Quiz for Lesson -->
          ${quizList.length > 0 ? `
            <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-xs sm:text-sm font-black uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-2">
                  <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố Bài ${lesson.num}
                </h4>
                <span class="text-[11px] font-semibold text-slate-400">Chọn đáp án đúng</span>
              </div>
              <div class="space-y-4">
                ${quizList.map((qItem, qIdx) => `
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm">
                    <p class="font-bold text-slate-900 dark:text-white mb-3">
                      <span class="text-sky-600 dark:text-sky-400">Câu ${qIdx + 1}:</span> ${qItem.q}
                    </p>
                    <div class="space-y-2">
                      ${qItem.options.map((opt, optIdx) => `
                        <button type="button" 
                          onclick="checkLessonQuiz(this, ${optIdx === qItem.ans}, '${qItem.exp.replace(/'/g, "\\'")}')"
                          class="quiz-btn w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/70 text-slate-700 dark:text-slate-300 font-medium transition flex items-center justify-between gap-2">
                          <span>${opt}</span>
                          <span class="quiz-indicator hidden text-sm font-bold"></span>
                        </button>
                      `).join('')}
                    </div>
                    <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs font-medium"></div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </article>
      `;
    });

    html += `</div>`;
  });

  // Appendix: Formula Table & Terms
  const formulaTableLines = formulaTableText.split('\n').filter(l => l.trim().startsWith('|'));
  const formulaTableHTML = parseMarkdownTable(formulaTableLines);

  html += `
    <div id="section-tra-cuu" class="space-y-10 mb-12">
      <!-- 1. Bảng công thức tra cứu -->
      <article id="bang-cong-thuc" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-black text-xs uppercase tracking-wider">
            Tra cứu nhanh
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Bảng công thức Vật lí 10 toàn diện
          </h3>
        </div>
        ${formulaTableHTML}
      </article>

      <!-- 2. Đơn vị và thuật ngữ cốt lõi -->
      <article id="thuat-ngu-cot-loi" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-black text-xs uppercase tracking-wider">
            Thuật ngữ & Quy chuẩn
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Đơn vị SI và Các phân biệt cần nhớ
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-sky-600 dark:text-sky-400 font-bold block mb-1.5 text-sm">Quãng đường vs Độ dịch chuyển</strong>
            <p class="text-slate-600 dark:text-slate-400">Quãng đường s là đại lượng vô hướng (luôn ≥ 0). Độ dịch chuyển d⃗ là vectơ nối vị trí đầu và cuối; |d⃗| ≤ s, bằng nhau khi đi thẳng một chiều.</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-sky-600 dark:text-sky-400 font-bold block mb-1.5 text-sm">Khối lượng vs Trọng lượng</strong>
            <p class="text-slate-600 dark:text-slate-400">Khối lượng m đặc trưng cho mức quán tính của vật (đơn vị kg, không đổi). Trọng lượng P = mg là độ lớn của lực hấp dẫn tác dụng lên vật (đơn vị newton, N, thay đổi theo g).</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-sky-600 dark:text-sky-400 font-bold block mb-1.5 text-sm">Cặp lực Newton III vs Lực cân bằng</strong>
            <p class="text-slate-600 dark:text-slate-400">Cặp lực và phản lực Newton III tác dụng lên HAI VẬT KHÁC NHAU (không triệt tiêu nhau). Hai lực cân bằng cùng tác dụng lên CÙNG MỘT VẬT (triệt tiêu nhau).</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-sky-600 dark:text-sky-400 font-bold block mb-1.5 text-sm">Bản chất của Lực hướng tâm</strong>
            <p class="text-slate-600 dark:text-slate-400">Lực hướng tâm KHÔNG phải là một loại lực mới; nó là hợp lực của các lực thực tế (lực căng, ma sát, trọng lực, phản lực) tác dụng theo phương bán kính hướng vào tâm.</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-sky-600 dark:text-sky-400 font-bold block mb-1.5 text-sm">Công suất vs Năng lượng (kWh)</strong>
            <p class="text-slate-600 dark:text-slate-400">Công suất P là tốc độ thực hiện công (đơn vị watt, W = J/s). Kilowatt-giờ (1 kWh = 3.6 × 10⁶ J) là đơn vị đo năng lượng (tiêu thụ điện), không phải công suất.</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-sky-600 dark:text-sky-400 font-bold block mb-1.5 text-sm">Áp suất chất lỏng vs Áp suất tuyệt đối</strong>
            <p class="text-slate-600 dark:text-slate-400">Áp suất thủy tĩnh p_lỏng = ρgh là áp suất do riêng cột chất lỏng sinh ra. Áp suất tuyệt đối p = p₀ + ρgh phải cộng thêm áp suất khí quyển p₀ trên mặt thoáng.</p>
          </div>
        </div>
      </article>
    </div>
  `;

  return html;
}

// Master HTML Builder
function buildPage() {
  const sidebarHTML = renderSidebarHTML();
  const mainArticlesHTML = renderMainArticlesHTML();

  const fullHTML = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vật Lí 10 — CodeHub Học Liệu Số (Kết Nối Tri Thức)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- KaTeX for formula rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '\\\\[', right: '\\\\]', display: true}, {left: '$', right: '$', display: false}, {left: '\\\\(', right: '\\\\)', display: false}]});"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            slate: {
              850: '#0f172a',
              900: '#0b1120',
            }
          }
        }
      }
    }
  </script>
  <style>
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #334155;
    }
    .lesson-card {
      transition: all 0.2s ease-in-out;
    }
    .katex-display {
      margin: 0.5em 0;
      overflow-x: auto;
      overflow-y: hidden;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen selection:bg-sky-500 selection:text-white">

  <!-- Top Sticky Header -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-slate-500 hover:text-sky-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2 text-sm font-semibold">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="flex items-center gap-2.5">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 text-white flex items-center justify-center text-base shadow-sm shadow-sky-500/20">
            <i class="fa-solid fa-atom"></i>
          </span>
          <div>
            <h1 class="text-sm font-black text-slate-900 dark:text-white tracking-tight leading-none">
              CodeHub <span class="text-sky-600 dark:text-sky-400">Vật Lí 10</span>
            </h1>
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Kết nối tri thức • 7 chương, 34 bài</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <button onclick="openExamModal()" class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white text-xs sm:text-sm font-bold shadow-sm shadow-sky-500/20 hover:brightness-110 active:scale-95 transition">
          <i class="fa-solid fa-award"></i>
          <span>Thi Trạng Nguyên (25 câu)</span>
        </button>

        <!-- Theme Toggle -->
        <button id="themeToggleBtn" onclick="toggleDarkMode()" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-amber-400"></i>
        </button>

        <!-- Mobile Drawer -->
        <button onclick="toggleMobileDrawer()" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden transition" title="Mục lục bài học">
          <i class="fa-solid fa-bars-staggered text-sm"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden">
    <div class="fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-y-auto custom-scrollbar">
      <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
        <span class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-atom text-sky-500"></i> Mục lục Vật lí 10
        </span>
        <button onclick="toggleMobileDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${sidebarHTML}
    </div>
  </div>

  <!-- Hero Header -->
  <div class="bg-gradient-to-b from-sky-50/80 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 font-bold text-xs uppercase tracking-wider mb-4 border border-sky-200/60 dark:border-sky-900/60">
          <i class="fa-solid fa-award"></i> Chương trình Giáo dục Phổ thông 2018
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Học liệu Vật lí 10
        </h2>
        <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Hệ thống hóa toàn diện <strong>7 chương, 34 bài</strong> theo sách giáo khoa <em>Kết nối tri thức với cuộc sống</em>. Trình bày khoa học các khái niệm, định luật cơ học, nhiệt, năng lượng, chuyển động tròn, biến dạng đàn hồi và áp suất chất lỏng kèm đồ họa vector mô phỏng.
        </p>

        <!-- Chapter quick chips -->
        <div class="flex flex-wrap items-center gap-2.5 mt-6 text-xs">
          <a href="#chuong-1" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 hover:text-sky-600 transition shadow-xs">
            Chương I: Mở đầu
          </a>
          <a href="#chuong-2" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 hover:text-sky-600 transition shadow-xs">
            Chương II: Động học
          </a>
          <a href="#chuong-3" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 hover:text-sky-600 transition shadow-xs">
            Chương III: Động lực học
          </a>
          <a href="#chuong-4" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 hover:text-sky-600 transition shadow-xs">
            Chương IV: Năng lượng
          </a>
          <a href="#chuong-5" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 hover:text-sky-600 transition shadow-xs">
            Chương V: Động lượng
          </a>
          <a href="#chuong-6" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 hover:text-sky-600 transition shadow-xs">
            Chương VI: Tròn đều
          </a>
          <a href="#chuong-7" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 hover:text-sky-600 transition shadow-xs">
            Chương VII: Áp suất
          </a>
          <a href="#bang-cong-thuc" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 font-semibold border border-amber-200/80 dark:border-amber-900/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition shadow-xs">
            <i class="fa-solid fa-table mr-1.5"></i> Bảng công thức
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Grid -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Sticky Sidebar -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-5 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
            <i class="fa-solid fa-bars-staggered text-sky-500"></i> Mục lục 34 bài học
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Articles -->
      <section class="lg:col-span-3">
        ${mainArticlesHTML}
      </section>

    </div>
  </main>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-10 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">CodeHub • Nền tảng Học liệu Số Vật Lí 10</p>
      <p>Sách giáo khoa <em>Vật lí 10 – Kết nối tri thức với cuộc sống</em>, 34 bài, 7 chương.</p>
    </div>
  </footer>

  <!-- Modal Thi Trạng Nguyên (25 câu) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-base">
            <i class="fa-solid fa-award"></i>
          </span>
          <div>
            <h3 class="font-black text-base">Thi Trạng Nguyên Vật Lí 10</h3>
            <span class="text-[11px] text-sky-100">25 câu trắc nghiệm bao quát 7 chương kiến thức</span>
          </div>
        </div>
        <button onclick="closeExamModal()" class="p-1 rounded-lg hover:bg-white/20 transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div id="examModalBody" class="p-6 overflow-y-auto custom-scrollbar flex-1 text-xs sm:text-sm">
        <div id="examContainer" class="space-y-6"></div>

        <div id="examResultBox" class="hidden text-center py-8">
          <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-sky-500 text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-sky-500/20">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 id="examScoreTitle" class="text-xl font-black text-slate-900 dark:text-white mb-2"></h4>
          <p id="examScoreDesc" class="text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 text-sm"></p>
          <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 transition">
            Làm lại bài thi
          </button>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
        <span id="examCounter" class="text-slate-500 dark:text-slate-400 text-xs font-semibold">Đã hoàn thành: 0 / 25 câu</span>
        <button id="submitExamBtn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition">
          Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <script>
    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Mobile drawer toggle
    function toggleMobileDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      drawer.classList.toggle('hidden');
    }

    // Bookmark toggle
    function toggleBookmark(lessonId) {
      let bookmarks = JSON.parse(localStorage.getItem('vatly10_bookmarks') || '[]');
      const btn = document.querySelector(\`#\${lessonId} .bookmark-btn\`);
      const icon = btn.querySelector('i');
      if (bookmarks.includes(lessonId)) {
        bookmarks = bookmarks.filter(id => id !== lessonId);
        icon.className = 'fa-regular fa-bookmark';
      } else {
        bookmarks.push(lessonId);
        icon.className = 'fa-solid fa-bookmark text-amber-500';
      }
      localStorage.setItem('vatly10_bookmarks', JSON.stringify(bookmarks));
    }

    // Mini-Quiz logic
    function checkLessonQuiz(btn, isCorrect, exp) {
      const parent = btn.closest('.p-4');
      const allBtns = parent.querySelectorAll('.quiz-btn');
      const feedback = parent.querySelector('.quiz-feedback');

      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-slate-100', 'dark:hover:bg-slate-700/70');
      });

      const indicator = btn.querySelector('.quiz-indicator');
      indicator.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        indicator.innerHTML = '<i class="fa-solid fa-check text-emerald-600"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
        feedback.innerHTML = '<strong class="block mb-0.5"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong>' + exp;
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        indicator.innerHTML = '<i class="fa-solid fa-xmark text-rose-600"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        feedback.innerHTML = '<strong class="block mb-0.5"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa chính xác!</strong>' + exp;
      }
      feedback.classList.remove('hidden');
    }

    // Exam Modal Logic
    const questions = ${JSON.stringify(examQuestions)};
    let userAnswers = {};

    function openExamModal() {
      const modal = document.getElementById('examModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      renderExamQuestions();
    }

    function closeExamModal() {
      const modal = document.getElementById('examModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function renderExamQuestions() {
      const container = document.getElementById('examContainer');
      container.innerHTML = questions.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
          <p class="font-bold text-slate-900 dark:text-white mb-3">
            <span class="text-sky-600 dark:text-sky-400">Câu \${idx + 1}:</span> \${q.q}
          </p>
          <div class="space-y-2">
            \${q.options.map((opt, optIdx) => \`
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 cursor-pointer transition">
                <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="selectExamOption(\${idx}, \${optIdx})" \${userAnswers[idx] === optIdx ? 'checked' : ''} class="w-4 h-4 text-sky-600 focus:ring-sky-500">
                <span class="text-slate-700 dark:text-slate-300 font-medium">\${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
      updateExamCounter();
    }

    function selectExamOption(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      updateExamCounter();
    }

    function updateExamCounter() {
      const count = Object.keys(userAnswers).length;
      document.getElementById('examCounter').innerText = \`Đã hoàn thành: \${count} / \${questions.length} câu\`;
    }

    function submitExam() {
      let correct = 0;
      questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) correct++;
      });

      document.getElementById('examContainer').classList.add('hidden');
      document.getElementById('submitExamBtn').classList.add('hidden');
      const resultBox = document.getElementById('examResultBox');
      resultBox.classList.remove('hidden');

      const title = document.getElementById('examScoreTitle');
      const desc = document.getElementById('examScoreDesc');

      const score = (correct / questions.length) * 10;
      title.innerText = \`Kết quả: \${correct} / \${questions.length} câu (\${score.toFixed(1)} điểm)\`;
      
      if (score >= 9) {
        desc.innerText = 'Xuất sắc! Bạn nắm vững toàn diện kiến thức Vật lí 10!';
      } else if (score >= 7) {
        desc.innerText = 'Khá giỏi! Bạn đã hiểu sâu các định luật và công thức cốt lõi!';
      } else if (score >= 5) {
        desc.innerText = 'Đạt yêu cầu! Hãy ôn tập lại các bài tập tính toán và điều kiện áp dụng!';
      } else {
        desc.innerText = 'Chưa đạt! Hãy xem lại các công thức trong Bảng tra cứu và thử sức lại nhé!';
      }
    }

    function resetExam() {
      userAnswers = {};
      document.getElementById('examContainer').classList.remove('hidden');
      document.getElementById('submitExamBtn').classList.remove('hidden');
      document.getElementById('examResultBox').classList.add('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;

  fs.writeFileSync('courses/vatly_10.html', fullHTML, 'utf8');
  console.log('Successfully compiled courses/vatly_10.html, size:', fullHTML.length);
}

buildPage();
