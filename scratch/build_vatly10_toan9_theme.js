// scratch/build_vatly10_toan9_theme.js
const fs = require('fs');
const path = require('path');
const diagrams = require('./vatly10_diagrams.js');

const rawData = JSON.parse(fs.readFileSync('scratch/vatly10_parsed_raw.json', 'utf8'));
const { chapters, lessonsData, formulaTableText, termsText } = rawData;

// Chapter badges and metadata matching toan_9
const chapterMeta = {
  1: { badge: 'Mở đầu & Đo lường', icon: 'fa-compass', desc: 'Làm quen, an toàn và sai số phép đo' },
  2: { badge: 'Động học chất điểm', icon: 'fa-gauge-high', desc: 'Độ dịch chuyển, vận tốc, gia tốc, rơi tự do và ném ngang' },
  3: { badge: 'Động lực học chất điểm', icon: 'fa-apple-whole', desc: 'Ba định luật Newton, các lực cơ học, moment lực và cân bằng' },
  4: { badge: 'Năng lượng & Công', icon: 'fa-bolt', desc: 'Công, công suất, động năng, thế năng và bảo toàn cơ năng' },
  5: { badge: 'Động lượng & Va chạm', icon: 'fa-meteor', desc: 'Động lượng, xung lượng, bảo toàn động lượng và các loại va chạm' },
  6: { badge: 'Chuyển động tròn đều', icon: 'fa-arrows-spin', desc: 'Tốc độ góc, gia tốc hướng tâm và lực hướng tâm' },
  7: { badge: 'Biến dạng & Áp suất', icon: 'fa-water', desc: 'Định luật Hooke, đàn hồi lò xo và áp suất thủy tĩnh' }
};

// 34-lesson Mini-Quizzes
const lessonQuizzes = {
  1: [
    {
      q: "Đối tượng nghiên cứu chính của Vật lí học là gì?",
      options: [
        "Các dạng vận động của vật chất và năng lượng từ vi mô đến vĩ mô",
        "Sự hình thành và biến đổi của các chất hóa học trong tự nhiên",
        "Quy luật sinh trưởng và tiến hóa của các loài sinh vật",
        "Cấu tạo và lịch sử hình thành vỏ Trái Đất"
      ],
      ans: 0,
      exp: "Vật lí nghiên cứu các dạng vận động của vật chất và năng lượng; tìm hiểu quy luật của tự nhiên từ vi mô đến vĩ mô."
    }
  ],
  2: [
    {
      q: "Hành động nào sau đây đảm bảo an toàn trong phòng thực hành Vật lí?",
      options: [
        "Đọc kĩ hướng dẫn và kiểm tra thiết bị trước khi cắm điện",
        "Tự ý đổi sơ đồ mạch điện khi nguồn điện vẫn đang bật",
        "Đổ hóa chất trực tiếp vào bồn rửa sau khi làm xong",
        "Dùng tay ướt để bật/tắt công tắc nguồn điện"
      ],
      ans: 0,
      exp: "Luôn đọc kĩ hướng dẫn, kiểm tra thiết bị trước khi bật nguồn và chỉ cắm điện khi có hướng dẫn của giáo viên."
    }
  ],
  3: [
    {
      q: "Sai số dụng cụ đo thông thường được lấy bằng:",
      options: [
        "Một nửa hoặc một độ chia nhỏ nhất của dụng cụ đo",
        "Luôn bằng 0 nếu dụng cụ mới sản xuất",
        "Gấp đôi độ chia nhỏ nhất của dụng cụ",
        "Bằng trung bình cộng các lần đo"
      ],
      ans: 0,
      exp: "Sai số dụng cụ thường được lấy bằng một độ chia nhỏ nhất hoặc một nửa độ chia nhỏ nhất trên dụng cụ."
    }
  ],
  4: [
    {
      q: "Độ dịch chuyển khác với quãng đường đi được ở điểm nào?",
      options: [
        "Độ dịch chuyển là đại lượng vectơ, có thể âm, dương hoặc bằng 0",
        "Độ dịch chuyển luôn lớn hơn quãng đường đi được",
        "Độ dịch chuyển luôn luôn mang giá trị dương",
        "Độ dịch chuyển là vô hướng, không có hướng"
      ],
      ans: 0,
      exp: "Độ dịch chuyển d là vectơ nối điểm đầu và điểm cuối, có phương chiều và giá trị đại số có thể âm, dương hoặc 0."
    }
  ],
  5: [
    {
      q: "Công thức tính tốc độ trung bình của một chuyển động là:",
      options: [
        "v_tb = s / t",
        "v_tb = d / t",
        "v_tb = a · t",
        "v_tb = 1/2 · a · t²"
      ],
      ans: 0,
      exp: "Tốc độ trung bình bằng tổng quãng đường chia cho tổng thời gian: v_tb = s / t."
    }
  ],
  7: [
    {
      q: "Độ dốc (hệ số góc) của đồ thị vận tốc – thời gian (v - t) biểu diễn đại lượng nào?",
      options: ["Gia tốc a", "Độ dịch chuyển d", "Vận tốc v", "Quãng đường s"],
      ans: 0,
      exp: "Độ dốc của đồ thị (v - t) chính là gia tốc: a = Δv / Δt."
    }
  ],
  8: [
    {
      q: "Gia tốc trong chuyển động thẳng biến đổi đều đặc trưng cho:",
      options: [
        "Tốc độ thay đổi của vận tốc theo thời gian",
        "Mức độ nhanh hay chậm của chuyển động",
        "Độ dài quãng đường vật đi được trong 1 giây",
        "Vị trí của vật so với mốc tọa độ"
      ],
      ans: 0,
      exp: "Gia tốc a = Δv / Δt đặc trưng cho sự biến thiên nhanh hay chậm của vận tốc theo thời gian."
    }
  ],
  9: [
    {
      q: "Công thức liên hệ giữa gia tốc, vận tốc và độ dịch chuyển trong chuyển động thẳng biến đổi đều là:",
      options: [
        "v² − v₀² = 2ad",
        "v − v₀ = 2ad",
        "v² + v₀² = 2ad",
        "v² − v₀² = ad"
      ],
      ans: 0,
      exp: "Công thức độc lập thời gian là v² − v₀² = 2ad."
    }
  ],
  10: [
    {
      q: "Gia tốc rơi tự do tại cùng một nơi trên Trái Đất có đặc điểm:",
      options: [
        "Như nhau đối với mọi vật không phụ thuộc khối lượng",
        "Vật nặng hơn sẽ rơi với gia tốc lớn hơn",
        "Vật nhẹ hơn sẽ rơi với gia tốc lớn hơn",
        "Phụ thuộc vào hình dạng và màu sắc của vật"
      ],
      ans: 0,
      exp: "Ở cùng một nơi trên Trái Đất và gần mặt đất, mọi vật rơi tự do với cùng gia tốc g."
    }
  ],
  12: [
    {
      q: "Chuyển động ném ngang là sự kết hợp của hai chuyển động thành phần:",
      options: [
        "Thẳng đều theo Ox và rơi tự do theo Oy",
        "Thẳng đều theo cả hai trục Ox và Oy",
        "Rơi tự do theo Ox và thẳng đều theo Oy",
        "Biến đổi đều theo cả Ox và Oy với cùng gia tốc g"
      ],
      ans: 0,
      exp: "Ném ngang tách thành chuyển động thẳng đều theo phương ngang Ox (ax = 0) và rơi tự do theo phương thẳng đứng Oy (ay = g)."
    }
  ],
  14: [
    {
      q: "Định luật I Newton khẳng định rằng một vật sẽ đứng yên hoặc chuyển động thẳng đều khi:",
      options: [
        "Không chịu lực nào tác dụng hoặc hợp lực tác dụng bằng không",
        "Chỉ chịu tác dụng của một lực duy nhất",
        "Có khối lượng vô cùng nhỏ",
        "Được cung cấp năng lượng liên tục"
      ],
      ans: 0,
      exp: "Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng 0 thì vật đứng yên sẽ tiếp tục đứng yên, vật đang chuyển động sẽ tiếp tục chuyển động thẳng đều."
    }
  ],
  15: [
    {
      q: "Theo Định luật II Newton, gia tốc của một vật tỉ lệ thuận với:",
      options: [
        "Lực tác dụng lên vật và tỉ lệ nghịch với khối lượng của vật",
        "Khối lượng của vật và tỉ lệ nghịch với lực tác dụng",
        "Vận tốc ban đầu của vật",
        "Quãng đường vật chuyển động"
      ],
      ans: 0,
      exp: "Gia tốc a = F / m: tỉ lệ thuận với hợp lực tác dụng và tỉ lệ nghịch với khối lượng vật."
    }
  ],
  16: [
    {
      q: "Đặc điểm của cặp lực và phản lực trong Định luật III Newton là:",
      options: [
        "Cùng độ lớn, ngược chiều, cùng phương nhưng đặt vào hai vật khác nhau",
        "Cùng độ lớn, cùng chiều và đặt vào cùng một vật",
        "Ngược chiều và luôn triệt tiêu lẫn nhau",
        "Có độ lớn khác nhau tùy theo vật nào nặng hơn"
      ],
      ans: 0,
      exp: "Lực và phản lực luôn xuất hiện đồng thời, cùng phương, ngược chiều, cùng độ lớn và đặt vào hai vật khác nhau nên KHÔNG triệt tiêu nhau."
    }
  ],
  17: [
    {
      q: "Trọng lực là lực hút của Trái Đất tác dụng lên vật, có điểm đặt tại:",
      options: [
        "Trọng tâm của vật, phương thẳng đứng, chiều hướng về tâm Trái Đất",
        "Bề mặt tiếp xúc giữa vật và sàn",
        "Đỉnh cao nhất của vật",
        "Tâm của mặt phẳng đỡ"
      ],
      ans: 0,
      exp: "Trọng lực có điểm đặt tại trọng tâm của vật, phương thẳng đứng, chiều hướng về phía tâm Trái Đất."
    }
  ],
  18: [
    {
      q: "Lực ma sát trượt xuất hiện khi nào?",
      options: [
        "Khi một vật trượt trên bề mặt của một vật khác, cản trở chuyển động trượt",
        "Khi vật nằm yên trên mặt phẳng nằm ngang không có lực kéo",
        "Khi vật lăn êm không có trượt",
        "Chỉ khi vật rơi tự do trong không khí"
      ],
      ans: 0,
      exp: "Lực ma sát trượt xuất hiện ở mặt tiếp xúc khi một vật trượt trên bề mặt vật khác và có hướng ngược với hướng vận tốc tương đối."
    }
  ],
  21: [
    {
      q: "Moment lực đối với một trục quay là đại lượng đặc trưng cho:",
      options: [
        "Tác dụng làm quay của lực và được tính bằng M = F · d",
        "Khả năng làm vật chuyển động tịnh tiến",
        "Tốc độ tiêu hao năng lượng của trục quay",
        "Gia tốc tức thời của vật"
      ],
      ans: 0,
      exp: "Moment lực M = F · d đặc trưng cho tác dụng làm quay của lực quanh trục, trong đó d là cánh tay đòn."
    }
  ],
  23: [
    {
      q: "Công cơ học của lực F thực hiện trên quãng đường s khi hướng lực hợp với hướng chuyển dời góc α là:",
      options: [
        "A = F · s · cos(α)",
        "A = F · s · sin(α)",
        "A = F · s · tan(α)",
        "A = F / (s · cos(α))"
      ],
      ans: 0,
      exp: "Công thức tính công là A = F · s · cos(α)."
    }
  ],
  24: [
    {
      q: "Công suất P là đại lượng đặc trưng cho:",
      options: [
        "Tốc độ thực hiện công: P = A / t, đơn vị Watt (W)",
        "Tổng công sinh ra trong suốt quá trình chuyển động",
        "Khả năng tích trữ năng lượng của vật",
        "Độ lớn của lực tác dụng"
      ],
      ans: 0,
      exp: "Công suất là công thực hiện được trong một đơn vị thời gian: P = A / t."
    }
  ],
  25: [
    {
      q: "Động năng của một vật khối lượng m đang chuyển động với vận tốc v là:",
      options: [
        "W_đ = 1/2 · m · v²",
        "W_đ = m · v",
        "W_đ = m · g · h",
        "W_đ = 1/2 · m · v"
      ],
      ans: 0,
      exp: "Động năng W_đ = 1/2 · m · v², tỉ lệ thuận với khối lượng và bình phương vận tốc."
    }
  ],
  26: [
    {
      q: "Khi một vật chỉ chịu tác dụng của trọng lực, cơ năng của vật:",
      options: [
        "Được bảo toàn: W = W_đ + W_t = không đổi",
        "Luôn luôn tăng dần theo thời gian",
        "Bị tiêu hao dần thành nhiệt lượng",
        "Luôn bằng 0 tại mọi vị trí"
      ],
      ans: 0,
      exp: "Khi vật chỉ chịu tác dụng của lực thế (như trọng lực), cơ năng của vật là một đại lượng bảo toàn."
    }
  ],
  28: [
    {
      q: "Động lượng của một vật khối lượng m chuyển động với vận tốc v là vectơ được xác định bởi:",
      options: [
        "p = m · v, cùng hướng với vectơ vận tốc v",
        "p = 1/2 · m · v²",
        "p = m · a",
        "p = F · Δt"
      ],
      ans: 0,
      exp: "Động lượng p = m · v là một đại lượng vectơ có cùng hướng với vận tốc v, đơn vị kg·m/s."
    }
  ],
  31: [
    {
      q: "Trong chuyển động tròn đều bán kính r với tốc độ góc ω, gia tốc hướng tâm có độ lớn:",
      options: [
        "a_ht = v² / r = ω² · r",
        "a_ht = v · r",
        "a_ht = ω / r",
        "a_ht = v² · r"
      ],
      ans: 0,
      exp: "Gia tốc hướng tâm có độ lớn a_ht = v² / r = ω² · r."
    }
  ],
  33: [
    {
      q: "Trong giới hạn đàn hồi, độ lớn của lực đàn hồi lò xo tỉ lệ thuận với:",
      options: [
        "Độ biến dạng |Δl| của lò xo theo công thức F_đh = k · |Δl|",
        "Khối lượng của vật treo",
        "Chiều dài tự nhiên l₀ của lò xo",
        "Bình phương độ biến dạng (Δl)²"
      ],
      ans: 0,
      exp: "Định luật Hooke: Trong giới hạn đàn hồi, lực đàn hồi tỉ lệ thuận với độ biến dạng F_đh = k·|Δl|."
    }
  ],
  34: [
    {
      q: "Độ chênh lệch áp suất chất lỏng giữa hai điểm có độ sâu chênh lệch h là:",
      options: [
        "Δp = ρ · g · h",
        "Δp = ρ · g / h",
        "Δp = m · g · h",
        "Δp = 1/2 · ρ · v²"
      ],
      ans: 0,
      exp: "Áp suất chất lỏng tăng đều theo độ sâu: Δp = ρ·g·h."
    }
  ]
};

// 25 Curated Exam Questions for Modal Đấu Trường Trạng Nguyên
const examQuestions = [
  {
    q: "Đơn vị đo của gia tốc trong hệ đơn vị SI là:",
    options: ["m/s²", "m/s", "km/h", "N/kg"],
    ans: 0,
    exp: "Gia tốc là tốc độ thay đổi của vận tốc theo thời gian, đơn vị chuẩn SI là m/s²."
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
    options: ["5 m/s²", "80 m/s²", "0,2 m/s²", "16 m/s²"],
    ans: 0,
    exp: "a = F / m = 20 / 4 = 5 m/s²."
  },
  {
    q: "Cặp lực và phản lực trong Định luật III Newton có đặc điểm nào sau đây?",
    options: [
      "Đặt vào hai vật khác nhau, cùng độ lớn, ngược chiều",
      "Đặt vào cùng một vật, cùng độ lớn, ngược chiều",
      "Luôn luôn triệt tiêu lẫn nhau",
      "Xuất hiện độc lập tại các thời điểm khác nhau"
    ],
    ans: 0,
    exp: "Lực và phản lực cùng bản chất, xuất hiện đồng thời, ngược chiều, cùng độ lớn nhưng đặt vào 2 vật khác nhau nên không triệt tiêu nhau."
  },
  {
    q: "Lực ma sát trượt tác dụng lên vật tỉ lệ thuận với:",
    options: [
      "Áp lực N giữa hai bề mặt tiếp xúc",
      "Diện tích tiếp xúc giữa hai bề mặt",
      "Vận tốc trượt của vật",
      "Thể tích của vật trượt"
    ],
    ans: 0,
    exp: "F_mst = μ_t · N: tỉ lệ thuận với áp lực N, không phụ thuộc diện tích tiếp xúc và tốc độ trượt."
  },
  {
    q: "Quy tắc moment lực dùng để xác định điều kiện cân bằng của:",
    options: [
      "Vật có trục quay cố định",
      "Chất điểm chuyển động thẳng đều",
      "Vật rơi tự do không trọng lượng",
      "Chất lỏng trong bình thông nhau"
    ],
    ans: 0,
    exp: "Điều kiện cân bằng của vật có trục quay: Tổng moment lực có xu hướng làm quay theo chiều KĐH bằng tổng moment lực làm quay ngược chiều KĐH."
  },
  {
    q: "Một lực 50 N tác dụng vuông góc vào cờ-lê có cánh tay đòn dài 0,2 m. Moment lực là:",
    options: ["10 N·m", "250 N·m", "50 N·m", "2,5 N·m"],
    ans: 0,
    exp: "M = F · d = 50 × 0,2 = 10 N·m."
  },
  {
    q: "Một vật chịu lực kéo F = 100 N theo phương ngang làm vật dịch chuyển 5 m. Công thực hiện là:",
    options: ["500 J", "20 J", "100 J", "250 J"],
    ans: 0,
    exp: "A = F · s · cos(0°) = 100 × 5 × 1 = 500 J."
  },
  {
    q: "Cần cẩu nâng vật nặng 500 kg lên cao 10 m trong 10 s (g = 10 m/s²). Công suất trung bình là:",
    options: ["5 000 W", "50 000 W", "500 W", "10 000 W"],
    ans: 0,
    exp: "A = mgh = 500 × 10 × 10 = 50 000 J. P = A / t = 50 000 / 10 = 5 000 W = 5 kW."
  },
  {
    q: "Vật khối lượng 2 kg chuyển động với tốc độ 6 m/s. Động năng của vật là:",
    options: ["36 J", "12 J", "72 J", "18 J"],
    ans: 0,
    exp: "W_đ = 1/2 · m · v² = 1/2 × 2 × 6² = 36 J."
  },
  {
    q: "Vật khối lượng 1 kg ở độ cao 5 m so với mặt đất (g = 10 m/s²). Thế năng trọng trường là:",
    options: ["50 J", "5 J", "500 J", "25 J"],
    ans: 0,
    exp: "W_t = mgh = 1 × 10 × 5 = 50 J."
  },
  {
    q: "Cơ năng của một vật được bảo toàn khi:",
    options: [
      "Vật chỉ chịu tác dụng của các lực thế (như trọng lực, lực đàn hồi)",
      "Có lực ma sát cản trở chuyển động",
      "Vật chuyển động trong môi trường có lực cản lớn",
      "Nhiệt năng của môi trường không đổi"
    ],
    ans: 0,
    exp: "Cơ năng bảo toàn khi không có lực không thế (ma sát, lực cản) sinh công: W = const."
  },
  {
    q: "Vật rơi tự do từ độ cao h. Khi động năng bằng 3 lần thế năng thì độ cao của vật bằng:",
    options: ["h / 4", "h / 3", "3h / 4", "h / 2"],
    ans: 0,
    exp: "W = W_đ + W_t = 3W_t + W_t = 4W_t. Mà W = mgh và W_t = mgh' => 4mgh' = mgh => h' = h/4."
  },
  {
    q: "Một quả bóng khối lượng 0,5 kg bay với vận tốc 10 m/s. Động lượng của quả bóng là:",
    options: ["5 kg·m/s", "50 kg·m/s", "2 kg·m/s", "25 kg·m/s"],
    ans: 0,
    exp: "p = m · v = 0,5 × 10 = 5 kg·m/s."
  },
  {
    q: "Định luật bảo toàn động lượng áp dụng đúng cho:",
    options: [
      "Hệ kín (hệ cô lập không chịu ngoại lực hoặc tổng ngoại lực bằng 0)",
      "Mọi hệ vật có ma sát lớn",
      "Chỉ vật chuyển động tròn đều",
      "Chỉ vật rơi tự do"
    ],
    ans: 0,
    exp: "Hệ kín là hệ không chịu ngoại lực hoặc các ngoại lực triệt tiêu lẫn nhau: vectơ p_hệ = const."
  },
  {
    q: "Trong va chạm mềm giữa hai vật:",
    options: [
      "Động lượng bảo toàn nhưng động năng không bảo toàn (tiêu hao thành nhiệt)",
      "Cả động lượng và động năng đều được bảo toàn",
      "Động lượng không bảo toàn nhưng động năng bảo toàn",
      "Không có định luật bảo toàn nào thỏa mãn"
    ],
    ans: 0,
    exp: "Va chạm mềm: sau va chạm hai vật dính vào nhau và chuyển động cùng vận tốc. Động lượng bảo toàn, động năng bị hao hụt thành nhiệt năng và biến dạng."
  },
  {
    q: "Kim phút của một chiếc đồng hồ có chu kì quay bằng:",
    options: ["3 600 s (1 giờ)", "60 s", "86 400 s", "43 200 s"],
    ans: 0,
    exp: "Kim phút quay 1 vòng hết 1 giờ = 60 phút = 3 600 s."
  },
  {
    q: "Một chất điểm quay đều trên đường tròn bán kính r = 0,5 m với tốc độ góc 4 rad/s. Tốc độ dài là:",
    options: ["2 m/s", "8 m/s", "1 m/s", "0,125 m/s"],
    ans: 0,
    exp: "v = ω · r = 4 × 0,5 = 2 m/s."
  },
  {
    q: "Lực hướng tâm tác dụng vào vật chuyển động tròn đều có vai trò:",
    options: [
      "Làm thay đổi hướng của vectơ vận tốc",
      "Làm thay đổi độ lớn của tốc độ chuyển động",
      "Làm vật chuyển động dạt ra xa tâm quay",
      "Triệt tiêu hoàn toàn vận tốc của vật"
    ],
    ans: 0,
    exp: "Lực hướng tâm luôn vuông góc với vận tốc nên không làm thay đổi độ lớn tốc độ mà chỉ làm đổi hướng vectơ vận tốc."
  },
  {
    q: "Một lò xo có độ cứng k = 100 N/m bị kéo dãn 2 cm (0,02 m). Độ lớn lực đàn hồi là:",
    options: ["2 N", "200 N", "50 N", "0,02 N"],
    ans: 0,
    exp: "F_đh = k · |Δl| = 100 × 0,02 = 2 N."
  },
  {
    q: "Khi treo vật 200 g (0,2 kg) vào lò xo thẳng đứng thì lò xo dãn 4 cm (g = 10 m/s²). Độ cứng k là:",
    options: ["50 N/m", "20 N/m", "100 N/m", "5 N/m"],
    ans: 0,
    exp: "Khi cân bằng: F_đh = P <=> k · Δl = mg => k = 0,2 × 10 / 0,04 = 50 N/m."
  },
  {
    q: "Ở độ sâu h = 10 m trong nước (ρ = 1 000 kg/m³, g = 10 m/s²). Áp suất do cột nước gây ra là:",
    options: ["100 000 Pa", "10 000 Pa", "1 000 Pa", "50 000 Pa"],
    ans: 0,
    exp: "p = ρ · g · h = 1 000 × 10 × 10 = 100 000 Pa = 10⁵ Pa."
  },
  {
    q: "Một tàu ngầm lặn sâu từ 20 m xuống 50 m dưới đáy biển. Áp suất tác dụng lên vỏ tàu sẽ:",
    options: [
      "Tăng lên do độ sâu tăng",
      "Giảm đi do nhiệt độ giảm",
      "Không đổi do khối lượng tàu không đổi",
      "Bằng 0 khi ở dưới nước biển"
    ],
    ans: 0,
    exp: "Áp suất thủy tĩnh p = p₀ + ρgh, do độ sâu h tăng nên áp suất tác dụng lên vỏ tàu tăng lên."
  }
];

// Helper: Parse Inline Markdown
function parseInline(text) {
  if (!text) return '';
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs sm:text-sm">$1</code>');
}

// Helper: Parse Table to clean HTML table with airy spacing
function parseTable(lines) {
  if (!lines || lines.length < 2) return '';
  const headerLine = lines[0];
  const rowLines = lines.slice(2);
  const headers = headerLine.split('|').map(s => s.trim()).filter(Boolean);

  let html = `
    <div class="my-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-blue-50/80 dark:bg-blue-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700 tracking-wide">
            ${headers.map((h, i) => `<th class="p-4 font-extrabold ${i === 0 ? 'w-1/4' : ''}">${parseInline(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed tracking-[0.012em]">
  `;

  for (let r of rowLines) {
    if (!r.trim()) continue;
    const cells = r.split('|').map(s => s.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    if (cells.length === 0) continue;
    html += `
      <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
        ${cells.map((c, i) => `
          <td class="p-4 align-top ${i === 0 ? 'font-bold text-blue-700 dark:text-blue-400' : ''}">
            ${parseInline(c)}
          </td>
        `).join('')}
      </tr>
    `;
  }

  html += `
        </tbody>
      </table>
    </div>
  `;
  return html;
}

// Helper: Parse lesson raw markdown into clean structured blocks matching toan_9 with ROBUST MULTI-LINE EQUATION SUPPORT
function parseBlocks(rawText) {
  const lines = rawText.split('\n');
  const blocks = [];
  let currentBlock = null;
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();
    if (!trimmed) {
      i++;
      continue;
    }

    // Table line
    if (trimmed.startsWith('|')) {
      if (currentBlock && currentBlock.type === 'table') {
        currentBlock.lines.push(trimmed);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: 'table', lines: [trimmed] };
      }
      i++;
      continue;
    }

    // Section header: ### Title
    const h3Match = /^###\s+(.*)$/.exec(trimmed);
    if (h3Match) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = null;
      blocks.push({
        type: 'section_header',
        title: h3Match[1].trim()
      });
      i++;
      continue;
    }

    // Display LaTeX equation: starts with \[ or $$
    if (trimmed.startsWith('\\[') || trimmed.startsWith('$$')) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }

      const isBracket = trimmed.startsWith('\\[');
      const closeDelim = isBracket ? '\\]' : '$$';

      // Check if it's already a complete single-line equation: e.g. "\[ a = b \]"
      if (isBracket && trimmed.length > 2 && trimmed.endsWith('\\]')) {
        blocks.push({ type: 'equation', math: trimmed });
        i++;
        continue;
      }
      if (!isBracket && trimmed.length > 2 && trimmed.slice(2).includes('$$')) {
        blocks.push({ type: 'equation', math: trimmed });
        i++;
        continue;
      }

      // Multi-line equation: collect all lines until closing delimiter
      let eqLines = [trimmed];
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();
        eqLines.push(nextTrimmed);
        if (nextTrimmed.includes(closeDelim)) {
          i++;
          break;
        }
        i++;
      }
      blocks.push({
        type: 'equation',
        math: eqLines.join('\n')
      });
      continue;
    }

    // Bullet with bold term: - **Term:** Desc
    const bulletBold = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletBold) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletBold[1].replace(/[:\s]+$/, '').trim(),
        lead: bulletBold[2].trim()
      };
      i++;
      continue;
    }

    // Numbered item: 1. text
    const numMatch = /^(\d+)\.\s+(.*)$/.exec(trimmed);
    if (numMatch) {
      if (currentBlock && currentBlock.type === 'numbered_list') {
        currentBlock.items.push({ num: numMatch[1], text: numMatch[2].trim() });
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'numbered_list',
          items: [{ num: numMatch[1], text: numMatch[2].trim() }]
        };
      }
      i++;
      continue;
    }

    // Plain bullet: - text
    const plainBullet = /^[-*]\s+(.*)$/.exec(trimmed);
    if (plainBullet) {
      const content = plainBullet[1].trim();
      if (currentBlock && currentBlock.type === 'bullet_list') {
        currentBlock.items.push(content);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'bullet_list',
          items: [content]
        };
      }
      i++;
      continue;
    }

    // Standalone bold line: **Title**
    const standaloneBold = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (standaloneBold && standaloneBold[1].length < 50) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: standaloneBold[1].trim(),
        lead: standaloneBold[2] ? standaloneBold[2].trim() : ''
      };
      i++;
      continue;
    }

    // Regular paragraph
    if (currentBlock && currentBlock.type === 'paragraph') {
      currentBlock.lead += ' ' + trimmed;
    } else {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'paragraph',
        lead: trimmed
      };
    }
    i++;
  }

  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

// Helper: Render structured blocks to HTML with airy line-height and generous spacing
function renderBlocks(blocks) {
  let html = '<div class="space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-[1.85] tracking-[0.015em]">';

  for (let b of blocks) {
    if (b.type === 'table') {
      html += parseTable(b.lines);
    } else if (b.type === 'section_header') {
      html += `
        <div class="mt-8 mb-4 pt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-2.5">
          <span class="w-3 h-3 rounded-full bg-blue-500 shrink-0"></span>
          <h4 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
            ${parseInline(b.title)}
          </h4>
        </div>
      `;
    } else if (b.type === 'equation') {
      html += `
        <div class="my-5 p-5 sm:p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-center overflow-x-auto text-slate-900 dark:text-blue-200 font-medium text-sm sm:text-base shadow-xs leading-loose">
          ${b.math}
        </div>
      `;
    } else if (b.type === 'card') {
      const isSafety = b.term.toLowerCase().includes('an toàn') || b.term.toLowerCase().includes('rủi ro') || b.term.toLowerCase().includes('sự cố') || b.term.toLowerCase().includes('lưu ý');
      const cardBorder = isSafety ? 'border-amber-300 dark:border-amber-800/80 bg-amber-50/30 dark:bg-amber-950/20' : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50';
      const icon = isSafety ? 'fa-triangle-exclamation text-amber-500' : 'fa-atom text-blue-500';

      html += `
        <div class="p-5 sm:p-6 rounded-2xl border ${cardBorder} shadow-xs mb-4">
          <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid ${icon} text-base"></i>
            <h5 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-wide">
              ${b.term}
            </h5>
          </div>
          ${b.lead ? `<p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-[1.85] tracking-[0.015em]">${parseInline(b.lead)}</p>` : ''}
        </div>
      `;
    } else if (b.type === 'numbered_list') {
      html += `
        <div class="p-5 sm:p-6 bg-slate-50/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3.5 mb-4 shadow-xs">
          ${b.items.map(it => `
            <div class="flex items-start gap-3.5 sm:gap-4">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                ${it.num}
              </span>
              <div class="flex-1 leading-[1.85] tracking-[0.015em]">${parseInline(it.text)}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (b.type === 'bullet_list') {
      html += `
        <div class="p-5 sm:p-6 bg-slate-50/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 mb-4 shadow-xs">
          <ul class="space-y-4 sm:space-y-4.5">
            ${b.items.map(it => `
              <li class="flex items-start gap-3 sm:gap-3.5">
                <i class="fa-solid fa-circle-dot text-blue-500 text-xs mt-1.5 shrink-0"></i>
                <div class="flex-1 leading-[1.85] tracking-[0.015em]">${parseInline(it)}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    } else if (b.type === 'paragraph') {
      html += `
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-4">
          ${parseInline(b.lead)}
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
}

// 7 Diagrams mapping
function getDiagramHTML(num) {
  let svg = null;
  let title = '';
  if (num === 7) {
    svg = diagrams.motionGraphSVG;
    title = 'Mô hình Đồ thị v - t: Độ dốc Gia tốc và Diện tích Độ dịch chuyển';
  } else if (num === 12) {
    svg = diagrams.projectileSVG;
    title = 'Mô hình Quỹ đạo Parabol Ném ngang và Phân tích Hai phương Ox, Oy';
  } else if (num === 17) {
    svg = diagrams.inclinedPlaneSVG;
    title = 'Mô hình Phân tích Lực trên Mặt phẳng nghiêng và Ma sát trượt';
  } else if (num === 21) {
    svg = diagrams.momentLeverSVG;
    title = 'Mô hình Moment lực và Điều kiện Cân bằng Đòn bẩy';
  } else if (num === 26) {
    svg = diagrams.conservationEnergySVG;
    title = 'Mô hình Bảo toàn và Chuyển hóa Cơ năng: Động năng và Thế năng';
  } else if (num === 31) {
    svg = diagrams.circularMotionSVG;
    title = 'Mô hình Chuyển động tròn đều: Vận tốc tiếp tuyến và Gia tốc hướng tâm';
  } else if (num === 33) {
    svg = diagrams.hookePressureSVG;
    title = 'Mô hình Định luật Hooke độ dãn lò xo & Áp suất Thủy tĩnh theo độ sâu';
  }

  if (!svg) return '';

  return `
    <div class="my-6 p-4 sm:p-5 bg-slate-900 rounded-2xl border border-slate-800 shadow-md">
      <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold text-blue-400 flex items-center gap-2">
          <i class="fa-solid fa-chart-line"></i> ${title}
        </span>
        <span class="text-slate-400 text-[11px]">Mô hình Vật lí Trực quan</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        ${svg}
      </div>
    </div>
  `;
}

// Build Search Index
const searchItems = [];
for (let i = 1; i <= 34; i++) {
  const l = lessonsData[i];
  if (l) {
    searchItems.push({
      id: `bai-${i}`,
      title: `Bài ${i}: ${l.title}`,
      tag: `Chương ${chapterMeta[l.chapter] ? chapterMeta[l.chapter].badge : l.chapter}`
    });
  }
}

// Generate Lessons HTML
let lessonsHTML = '';
for (let i = 1; i <= 34; i++) {
  const lesson = lessonsData[i];
  if (!lesson) continue;

  const chMeta = chapterMeta[lesson.chapter] || { badge: `Chương ${lesson.chapter}`, icon: 'fa-book' };
  const blocks = parseBlocks(lesson.body);
  const bodyHTML = renderBlocks(blocks);
  const diagramHTML = getDiagramHTML(i);
  const quizzes = lessonQuizzes[i] || [];

  lessonsHTML += `
    <article id="bai-${i}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-12">
      
      <!-- Top meta bar -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-blue-500/20 tracking-wide">
            <i class="fa-solid ${chMeta.icon}"></i> Bài ${i}
          </span>
          <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60">
            ${chMeta.badge}
          </span>
        </div>
        <button onclick="toggleBookmark('bai-${i}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
          <i class="fa-regular fa-bookmark"></i>
        </button>
      </div>

      <!-- Title -->
      <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-snug tracking-tight">
        <span class="text-blue-600 dark:text-blue-400">Bài ${i}:</span> ${lesson.title}
      </h3>

      <!-- Diagram if available -->
      ${diagramHTML}

      <!-- Main Lesson Body -->
      ${bodyHTML}

      <!-- Mini-Quiz for Lesson -->
      ${quizzes.length > 0 ? `
        <div class="mt-9 pt-7 border-t border-slate-100 dark:border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố Bài ${i}
            </h4>
            <span class="text-[11px] font-semibold text-slate-400">Kiểm tra nhanh</span>
          </div>
          <div class="space-y-4">
            ${quizzes.map((qItem, qIdx) => `
              <div class="p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm">
                <p class="font-bold text-slate-900 dark:text-white mb-3 leading-relaxed">
                  <span class="text-blue-600 dark:text-blue-400">Câu ${qIdx + 1}:</span> ${qItem.q}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                  ${qItem.options.map((opt, optIdx) => `
                    <button type="button" 
                            onclick="checkLessonQuiz(this, ${optIdx === qItem.ans}, '${qItem.exp.replace(/'/g, "\\'")}')" 
                            class="quiz-btn text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition flex items-center gap-2.5">
                      <span class="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-300 shrink-0">
                        ${String.fromCharCode(65 + optIdx)}
                      </span>
                      <span class="font-medium text-slate-700 dark:text-slate-300 leading-normal">${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="quiz-feedback hidden"></div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

    </article>
  `;
}

// Generate Sidebar HTML with comfortable spacing
let sidebarChaptersHTML = '';
chapters.forEach(ch => {
  const meta = chapterMeta[ch.num] || { badge: ch.title, icon: 'fa-book' };
  sidebarChaptersHTML += `
    <div class="mb-4">
      <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1.5 flex items-center justify-between">
        <span>${ch.title}</span>
        <span class="text-[10px] lowercase text-blue-500 font-bold">${ch.lessons.length} bài</span>
      </div>
      <div class="space-y-1">
        ${ch.lessons.map(lNum => {
          const lObj = lessonsData[lNum];
          if (!lObj) return '';
          return `
            <a href="#bai-${lNum}" class="nav-link block px-3 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-blue-950/40 transition leading-snug">
              <span class="font-bold text-slate-400 mr-1.5">Bài ${lNum}:</span>
              ${lObj.title}
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;
});

// Full Formula Table HTML Section
const formulaTableHTML = `
  <section id="bang-cong-thuc" class="scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-12">
    <div class="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
        <i class="fa-solid fa-square-root-variable"></i>
      </div>
      <div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Bảng Công Thức Tra Cứu Toàn Diện</h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">Trọn bộ công thức cốt lõi SGK Vật lí 10 Kết nối tri thức</p>
      </div>
    </div>
    ${parseTable(formulaTableText.split('\n'))}
  </section>
`;

// Terms HTML Section
const termsHTML = `
  <section id="thuat-ngu-vat-ly" class="scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-12">
    <div class="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
        <i class="fa-solid fa-spell-check"></i>
      </div>
      <div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Đơn Vị và Thuật Ngữ Cốt Lõi</h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">Kí hiệu, đơn vị chuẩn SI và định nghĩa chuẩn xác</p>
      </div>
    </div>
    ${parseTable(termsText.split('\n'))}
  </section>
`;

// 20 Core formulas for Modal Tra cứu
const coreFormulasModal = [
  { name: "Vận tốc trong chuyển động thẳng biến đổi đều", formula: "v = v_0 + at" },
  { name: "Độ dịch chuyển chuyển động biến đổi đều", formula: "d = v_0 t + \\frac{1}{2}at^2" },
  { name: "Công thức độc lập thời gian", formula: "v^2 - v_0^2 = 2ad" },
  { name: "Thời gian rơi tự do từ độ cao h", formula: "t = \\sqrt{\\frac{2h}{g}}" },
  { name: "Tầm xa ném ngang từ độ cao H", formula: "L = v_0 \\sqrt{\\frac{2H}{g}}" },
  { name: "Định luật II Newton", formula: "\\vec{F} = m\\vec{a} \\iff a = \\frac{F}{m}" },
  { name: "Định luật III Newton", formula: "\\vec{F}_{AB} = -\\vec{F}_{BA}" },
  { name: "Lực ma sát trượt", formula: "F_{mst} = \\mu_t \\cdot N" },
  { name: "Moment lực đối với trục quay", formula: "M = F \\cdot d" },
  { name: "Điều kiện cân bằng đòn bẩy", formula: "F_1 \\cdot d_1 = F_2 \\cdot d_2" },
  { name: "Công của lực không đổi", formula: "A = F \\cdot s \\cdot \\cos(\\alpha)" },
  { name: "Công suất cơ học", formula: "P = \\frac{A}{t} = F \\cdot v" },
  { name: "Động năng chất điểm", formula: "W_đ = \\frac{1}{2}mv^2" },
  { name: "Thế năng trọng trường", formula: "W_t = mgh" },
  { name: "Bảo toàn cơ năng trọng trường", formula: "W = W_đ + W_t = \\text{hằng số}" },
  { name: "Động lượng của một vật", formula: "\\vec{p} = m\\vec{v}" },
  { name: "Bảo toàn động lượng hệ kín", formula: "\\vec{p}_1 + \\vec{p}_2 = \\vec{p}_1' + \\vec{p}_2'" },
  { name: "Gia tốc hướng tâm tròn đều", formula: "a_{ht} = \\frac{v^2}{r} = \\omega^2 r" },
  { name: "Định luật Hooke đàn hồi lò xo", formula: "F_{đh} = k|\\Delta l|" },
  { name: "Áp suất thủy tĩnh chất lỏng", formula: "p = p_0 + \\rho gh" }
];

// 10 Mistakes for Modal Cạm bẫy
const mistakesList = [
  {
    title: "1. Quên đổi đơn vị km/h sang m/s",
    desc: "Trong các công thức động học và động năng, vận tốc bắt buộc phải dùng đơn vị mét trên giây (m/s). Quy tắc đổi chuẩn: 1 km/h = 1/3,6 m/s (Ví dụ: 36 km/h = 10 m/s; 72 km/h = 20 m/s)."
  },
  {
    title: "2. Nhầm dấu của gia tốc a trong chuyển động chậm dần đều",
    desc: "Trong chuyển động chậm dần đều, gia tốc và vận tốc ngược dấu: a · v < 0. Nếu chọn chiều dương là chiều chuyển động (v > 0) thì bắt buộc gia tốc a phải mang dấu âm (a < 0)."
  },
  {
    title: "3. Nhầm lẫn giữa độ dịch chuyển d và quãng đường s",
    desc: "Quãng đường s là chiều dài toàn bộ quỹ đạo đã đi (luôn s ≥ 0). Độ dịch chuyển d là vectơ nối vị trí đầu và cuối, có thể mang giá trị âm, dương hoặc bằng 0 (khi vật quay về vị trí ban đầu)."
  },
  {
    title: "4. Nhầm cặp lực và phản lực trong Định luật III Newton",
    desc: "Lực và phản lực luôn cùng độ lớn, ngược chiều nhưng đặt vào HAI VẬT KHÁC NHAU. Do đó chúng KHÔNG BAO GIỜ triệt tiêu nhau."
  },
  {
    title: "5. Quên điều kiện áp dụng Định luật Bảo toàn cơ năng",
    desc: "Cơ năng chỉ được bảo toàn (W = const) khi vật chỉ chịu tác dụng của các lực thế (trọng lực hoặc lực đàn hồi). Nếu có lực ma sát, lực cản thì cơ năng bị tiêu hao thành nhiệt năng: A_ms = W₂ − W₁."
  },
  {
    title: "6. Thế năng trọng trường W_t = mgh phụ thuộc mốc thế năng",
    desc: "Độ cao h luôn phải được tính so với mốc chọn h = 0. Nếu vật ở vị trí thấp hơn mốc thế năng thì h < 0 và thế năng W_t < 0."
  },
  {
    title: "7. Quên rằng Định luật Bảo toàn động lượng là dạng vectơ",
    desc: "Phương trình vectơ p₁ + p₂ = p₁' + p₂' bắt buộc phải chiếu lên trục tọa độ thì mới suy ra phương trình đại số với dấu cộng/trừ tương ứng với chiều chuyển động của từng vật."
  },
  {
    title: "8. Nhầm giữa độ biến dạng Δl và chiều dài tự nhiên l₀",
    desc: "Trong định luật Hooke F_đh = k|Δl|, Δl = |l − l₀| là độ dãn hoặc độ nén của lò xo, tuyệt đối không được thay trực tiếp chiều dài toàn bộ l của lò xo vào công thức."
  },
  {
    title: "9. Áp suất tuyệt đối p vs áp suất do cột chất lỏng p_cl",
    desc: "Áp suất tại độ sâu h tính từ mặt thoáng là p = p₀ + ρgh (trong đó p₀ là áp suất khí quyển bề mặt). Chỉ khi đề bài hỏi 'áp suất do cột chất lỏng gây ra' thì mới dùng p_cl = ρgh."
  },
  {
    title: "10. Nhầm lẫn giữa chu kì T và tần số f trong chuyển động tròn",
    desc: "Chu kì T là thời gian quay hết 1 vòng (đơn vị giây s): T = 2π / ω. Tần số f là số vòng quay được trong 1 giây (đơn vị Hertz Hz): f = 1 / T = ω / (2π)."
  }
];

// Full HTML Template matching toan_9.html with airy, comfortable reading typography
const fullHTML = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Vật Lí 10 (Trọn Bộ 7 Chương & 34 Bài Học SGK Kết Nối Tri Thức • Mô Hình SVG Trực Quan & Trạng Nguyên 45:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            math: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a'
            },
            slate: {
              850: '#151f32',
              950: '#090d16'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    };
  </script>

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- KaTeX CSS & JS Auto-render -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <style>
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
      height: 5px;
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
    .quiz-btn.selected {
      border-color: #3b82f6;
      background-color: #eff6ff;
    }
    .dark .quiz-btn.selected {
      border-color: #60a5fa;
      background-color: rgba(30, 58, 138, 0.4);
    }
    /* Chữ viết thoáng đãng, dễ đọc */
    body {
      letter-spacing: 0.015em;
    }
    .lesson-card p, .lesson-card li, .lesson-card td {
      line-height: 1.85 !important;
      letter-spacing: 0.015em !important;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Logo & Breadcrumb -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition">
            <i class="fa-solid fa-atom"></i>
          </div>
          <div>
            <span class="text-sm font-black text-slate-900 dark:text-white leading-none block">VẬT LÍ 10</span>
            <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400">KẾT NỐI TRI THỨC</span>
          </div>
        </a>
        <div class="hidden md:flex items-center gap-1.5 text-xs text-slate-400 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
          <span>THPT</span>
          <i class="fa-solid fa-angle-right text-[10px]"></i>
          <span>Khối 10</span>
          <i class="fa-solid fa-angle-right text-[10px]"></i>
          <span class="text-blue-600 dark:text-blue-400 font-semibold">7 Chương • 34 Bài Học</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Quick Search -->
        <button onclick="openModal('modal-search')" class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 transition">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>Tìm kiếm...</span>
          <kbd class="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border text-[10px] font-mono text-slate-400">Ctrl K</kbd>
        </button>

        <!-- Sổ tay công thức -->
        <button onclick="openModal('modal-formulas')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900 transition">
          <i class="fa-solid fa-book-bookmark"></i>
          <span class="hidden sm:inline">Sổ Tay</span> Công Thức
        </button>

        <!-- 10 Cạm bẫy lỗi sai -->
        <button onclick="openModal('modal-mistakes')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold hover:bg-rose-100 dark:hover:bg-rose-900 transition">
          <i class="fa-solid fa-shield-halved"></i>
          <span class="hidden sm:inline">10</span> Cạm Bẫy
        </button>

        <!-- Đấu Trường Trạng Nguyên -->
        <button onclick="openModal('modal-exam')" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 transition">
          <i class="fa-solid fa-crown text-amber-300"></i>
          <span>Trạng Nguyên</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleTheme()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:block text-amber-400"></i>
        </button>

        <!-- Mobile Menu Toggle -->
        <button onclick="toggleMobileNav()" class="lg:hidden w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO SECTION ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-certificate"></i> Bộ Sách Kết Nối Tri Thức Với Cuộc Sống • Trọn Bộ 7 Chương 34 Bài
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Học Liệu Cốt Lõi <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vật Lí 10 Toàn Diện</span>
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-6">
          Hệ thống hóa toàn bộ <strong>7 Chương, 34 Bài Học</strong>: Động học, Đồ thị v - t, Ba định luật Newton, Moment lực & cân bằng đòn bẩy, Năng lượng - Công - Công suất, Động lượng & va chạm, Chuyển động tròn đều, Định luật Hooke và Áp suất chất lỏng.
        </p>
        
        <!-- Stats Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">7</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Chương Học</div>
          </div>
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">34</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Bài SGK Chuẩn</div>
          </div>
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">7</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Mô Hình SVG</div>
          </div>
          <div class="p-3 bg-white dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <div class="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">KaTeX</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Chuẩn Toán Lí</div>
          </div>
        </div>

        <!-- Quick CTAs -->
        <div class="flex flex-wrap gap-3 mt-6">
          <a href="#bai-1" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
            <i class="fa-solid fa-play"></i> Bắt Đầu Học Ngay
          </a>
          <button onclick="openModal('modal-formulas')" class="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-2">
            <i class="fa-solid fa-book-bookmark text-blue-600"></i> Tra Cứu Công Thức
          </button>
          <button onclick="openModal('modal-exam')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs sm:text-sm shadow-md hover:from-amber-600 hover:to-orange-600 transition flex items-center gap-2">
            <i class="fa-solid fa-crown text-amber-200"></i> Thi Trạng Nguyên 45'
          </button>
        </div>

      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTENT ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- STICKY SIDEBAR NAVIGATION (4 Cols) -->
      <aside class="hidden lg:block lg:col-span-4 sticky top-24 max-h-[85vh] overflow-y-auto custom-scrollbar p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="text-xs font-black uppercase text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-list-check text-blue-600"></i> Mục Lục 7 Chương
          </span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
            34 Bài SGK
          </span>
        </div>
        
        <nav class="space-y-1">
          ${sidebarChaptersHTML}

          <!-- Quick Access Section -->
          <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
            <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1">
              Phần Bổ Trợ Đặc Biệt
            </div>
            <a href="#bang-cong-thuc" class="nav-link block px-3 py-2 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-blue-950/40 transition">
              <i class="fa-solid fa-square-root-variable mr-1.5"></i> Bảng Công Thức Tra Cứu
            </a>
            <a href="#thuat-ngu-vat-ly" class="nav-link block px-3 py-2 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/40 transition">
              <i class="fa-solid fa-spell-check mr-1.5"></i> Đơn Vị và Thuật Ngữ Cốt Lõi
            </a>
            <button onclick="openModal('modal-exam')" class="w-full text-left nav-link block px-3 py-2 rounded-xl text-xs font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-50/60 dark:hover:bg-amber-950/40 transition">
              <i class="fa-solid fa-crown mr-1.5"></i> Đấu Trường Trạng Nguyên (25 Câu)
            </button>
          </div>
        </nav>
      </aside>

      <!-- LESSONS & SECTIONS (8 Cols) -->
      <section class="lg:col-span-8 space-y-12">
        ${lessonsHTML}
        ${formulaTableHTML}
        ${termsHTML}
      </section>

    </div>
  </main>

  <!-- ==================== MODALS ==================== -->

  <!-- Modal 1: Sổ Tay 20 Công Thức Cốt Lõi -->
  <div id="modal-formulas" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">Bảng Tra Cứu 20 Công Thức Cốt Lõi Vật Lí 10</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Trọn bộ công thức Động học, Định luật Newton, Năng lượng, Động lượng & Áp suất</p>
          </div>
        </div>
        <button onclick="closeModal('modal-formulas')" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-3">
        ${coreFormulasModal.map(cf => `
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <div class="font-bold text-blue-700 dark:text-blue-300 sm:w-1/3">${cf.name}</div>
            <div class="text-slate-900 dark:text-white sm:w-2/3 text-left sm:text-right font-semibold">$$${cf.formula}$$</div>
          </div>
        `).join('')}
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span class="text-xs text-slate-500">Đầy đủ 7 chương học SGK Kết nối tri thức</span>
        <button onclick="closeModal('modal-formulas')" class="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition">Đóng</button>
      </div>
    </div>
  </div>

  <!-- Modal 2: 10 Cạm Bẫy Lỗi Sai -->
  <div id="modal-mistakes" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-sm font-bold">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div>
            <h3 class="text-base font-black text-slate-900 dark:text-white">10 Cạm Bẫy Vật Lí Cần Tránh Khi Làm Bài Thi</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Các lỗi sai kinh điển khiến học sinh mất điểm đáng tiếc</p>
          </div>
        </div>
        <button onclick="closeModal('modal-mistakes')" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar space-y-3.5">
        ${mistakesList.map(m => `
          <div class="p-4 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900/60 text-xs sm:text-sm">
            <div class="font-bold text-rose-700 dark:text-rose-400 mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-triangle-exclamation"></i>
              ${m.title}
            </div>
            <div class="text-slate-700 dark:text-slate-300 leading-relaxed">${m.desc}</div>
          </div>
        `).join('')}
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span class="text-xs text-slate-500">Ghi nhớ kỹ để đạt điểm 9+ môn Vật lí</span>
        <button onclick="closeModal('modal-mistakes')" class="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-900 transition">Đã hiểu</button>
      </div>
    </div>
  </div>

  <!-- Modal 3: Đấu Trường Trạng Nguyên Vật Lí 10 -->
  <div id="modal-exam" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
      
      <!-- Exam Header -->
      <div class="p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
            <i class="fa-solid fa-crown text-amber-300"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black leading-tight">Đấu Trường Trạng Nguyên Vật Lí 10</h3>
            <p class="text-xs text-blue-100">25 Câu Hỏi Tuyển Chọn Toàn Bộ 7 Chương &bull; Thời gian 45:00 &bull; Chấm Điểm Tự Động</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Countdown Timer -->
          <div class="px-3.5 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 text-white font-mono font-bold text-sm flex items-center gap-2">
            <i class="fa-regular fa-clock text-amber-300"></i>
            <span id="exam-timer">45:00</span>
          </div>
          <button onclick="closeModal('modal-exam')" class="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div id="exam-container" class="p-6 overflow-y-auto custom-scrollbar space-y-6 flex-1">
        <!-- Rendered by JS -->
      </div>

      <!-- Exam Footer -->
      <div class="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
        <div class="text-xs text-slate-500">
          Đã làm: <span id="answered-count" class="font-bold text-blue-600 dark:text-blue-400">0</span>/25 câu
        </div>
        <div class="flex gap-2">
          <button id="btn-submit-exam" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs shadow-md transition">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài Thi
          </button>
          <button id="btn-reset-exam" onclick="resetExam()" class="hidden px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs transition">
            <i class="fa-solid fa-rotate-right mr-1.5"></i> Làm Lại
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Modal 4: Quick Search -->
  <div id="modal-search" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden flex items-start justify-center p-4 pt-20">
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-full max-w-xl shadow-2xl overflow-hidden">
      <div class="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
        <i class="fa-solid fa-magnifying-glass text-slate-400 ml-2"></i>
        <input type="text" id="search-input" oninput="handleSearch(this.value)" placeholder="Tìm bài học, công thức, định luật..." class="w-full bg-transparent border-0 focus:outline-none text-sm text-slate-900 dark:text-white placeholder-slate-400">
        <button onclick="closeModal('modal-search')" class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div id="search-results" class="max-h-72 overflow-y-auto p-2 text-xs text-slate-500">
        <p class="p-3 text-center">Nhập từ khóa hoặc số bài để tra cứu nhanh...</p>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">
        Học Liệu Vật Lí 10 • Bộ Sách Kết Nối Tri Thức Với Cuộc Sống
      </p>
      <p>
        Bản quyền nội dung thuộc CodeHub Platform &bull; Chuẩn hóa 7 Chương, 34 Bài Học SGK, Bảng Công Thức & 7 Mô Hình SVG
      </p>
      <div class="flex items-center justify-center gap-4 pt-2 text-slate-400">
        <a href="../index.html" class="hover:text-blue-600 transition">Trang Chủ</a>
        <span>&bull;</span>
        <a href="#bai-1" class="hover:text-blue-600 transition">Đầu Trang</a>
        <span>&bull;</span>
        <a href="#bang-cong-thuc" class="hover:text-blue-600 transition">Sổ Tay Công Thức</a>
      </div>
    </div>
  </footer>

  <!-- ==================== JAVASCRIPT ==================== -->
  <script>
    // Theme Toggle matching toan_9
    function toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Modal Control
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (id === 'modal-exam' && !examTimerInterval) {
          startExam();
        }
        renderMath();
      }
    }
    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
      if (e.key === 'Escape') {
        ['modal-formulas', 'modal-mistakes', 'modal-exam', 'modal-search'].forEach(closeModal);
      }
    });

    // Mobile nav toggle
    function toggleMobileNav() {
      const aside = document.querySelector('aside');
      if (aside) {
        aside.classList.toggle('hidden');
      }
    }

    // Mini Quiz Handler matching toan_9
    function checkLessonQuiz(btn, isCorrect, exp) {
      const parent = btn.closest('.p-4') || btn.closest('.p-3\\.5') || btn.parentElement.parentElement;
      const feedback = parent.querySelector('.quiz-feedback');
      const allBtns = parent.querySelectorAll('.quiz-btn');
      
      allBtns.forEach(b => {
        b.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
      });

      if (isCorrect) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40');
        if (feedback) {
          feedback.className = 'quiz-feedback p-3 rounded-xl text-xs mt-2.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 block leading-relaxed';
          feedback.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-600 mr-1.5\"></i><strong>Chính xác!</strong> ' + exp;
        }
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
        if (feedback) {
          feedback.className = 'quiz-feedback p-3 rounded-xl text-xs mt-2.5 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 block leading-relaxed';
          feedback.innerHTML = '<i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1.5\"></i><strong>Chưa đúng!</strong> ' + exp;
        }
      }
      renderMath();
    }

    // Bookmark Toggle
    function toggleBookmark(id) {
      const btn = document.querySelector('#' + id + ' .bookmark-btn');
      if (btn) {
        const icon = btn.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
          icon.className = 'fa-solid fa-bookmark text-amber-500';
        } else {
          icon.className = 'fa-regular fa-bookmark text-slate-400';
        }
      }
    }

    // Quick Search Index Data
    const searchData = ${JSON.stringify(searchItems)};

    function handleSearch(query) {
      const container = document.getElementById('search-results');
      if (!query.trim()) {
        container.innerHTML = '<p class=\"p-3 text-center text-slate-400\">Nhập từ khóa hoặc số bài để tra cứu...</p>';
        return;
      }
      const q = query.toLowerCase();
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.tag.toLowerCase().includes(q)
      );

      if (results.length === 0) {
        container.innerHTML = '<p class=\"p-3 text-center text-slate-400\">Không tìm thấy bài học phù hợp</p>';
        return;
      }

      container.innerHTML = results.map(r => \`
        <a href="#\${r.id}" onclick="closeModal('modal-search')" class="block p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition flex items-center justify-between">
          <span class="font-bold text-slate-800 dark:text-slate-200">\${r.title}</span>
          <span class="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">\${r.tag}</span>
        </a>
      \`).join('');
    }

    // Exam System Logic matching toan_9
    const examData = ${JSON.stringify(examQuestions)};
    let userAnswers = {};
    let examTimerInterval = null;
    let timeLeft = 45 * 60; // 45 minutes

    function startExam() {
      renderExamQuestions();
      updateTimerDisplay();
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
          clearInterval(examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      const el = document.getElementById('exam-timer');
      if (el) {
        el.innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
      }
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-container');
      if (!container) return;
      container.innerHTML = examData.map((item, idx) => \`
        <div class="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 exam-q-card" data-idx="\${idx}">
          <p class="font-bold text-slate-900 dark:text-white mb-3 text-xs sm:text-sm leading-relaxed">
            <span class="text-blue-600 dark:text-blue-400">Câu \${idx + 1}:</span> \${item.q}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            \${item.options.map((opt, optIdx) => \`
              <button onclick="selectExamAnswer(\${idx}, \${optIdx}, this)" 
                      class="exam-opt-btn text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-300 shrink-0">
                  \${String.fromCharCode(65 + optIdx)}
                </span>
                <span class="font-medium text-slate-700 dark:text-slate-300 leading-normal">\${opt}</span>
              </button>
            \`).join('')}
          </div>
          <div class="exam-exp hidden mt-3 p-3.5 rounded-xl text-xs sm:text-sm bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 leading-relaxed">
            <strong>Lời giải chi tiết:</strong> \${item.exp}
          </div>
        </div>
      \`).join('');
      renderMath();
    }

    function selectExamAnswer(qIdx, optIdx, btn) {
      userAnswers[qIdx] = optIdx;
      const parent = btn.closest('.exam-q-card');
      parent.querySelectorAll('.exam-opt-btn').forEach(b => {
        b.classList.remove('border-blue-600', 'bg-blue-50', 'dark:bg-blue-950/40');
      });
      btn.classList.add('border-blue-600', 'bg-blue-50', 'dark:bg-blue-950/40');

      const count = Object.keys(userAnswers).length;
      const countEl = document.getElementById('answered-count');
      if (countEl) countEl.innerText = count;
    }

    function submitExam() {
      clearInterval(examTimerInterval);
      let score = 0;
      examData.forEach((item, idx) => {
        const parent = document.querySelector(\`.exam-q-card[data-idx="\${idx}"]\`);
        if (!parent) return;
        const btns = parent.querySelectorAll('.exam-opt-btn');
        const userChoice = userAnswers[idx];

        btns.forEach((b, optIdx) => {
          b.disabled = true;
          if (optIdx === item.ans) {
            b.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40');
          }
          if (userChoice === optIdx && userChoice !== item.ans) {
            b.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40');
          }
        });

        if (userChoice === item.ans) {
          score++;
        }
        const expEl = parent.querySelector('.exam-exp');
        if (expEl) expEl.classList.remove('hidden');
      });

      const total = examData.length;
      const percent = Math.round((score / total) * 100);
      alert(\`Kết Quả Đấu Trường Trạng Nguyên:\\nĐúng: \${score}/\${total} câu (\${percent}%)\\nĐiểm số: \${(score / total * 10).toFixed(1)} / 10 điểm!\`);

      document.getElementById('btn-submit-exam').classList.add('hidden');
      document.getElementById('btn-reset-exam').classList.remove('hidden');
      renderMath();
    }

    function resetExam() {
      userAnswers = {};
      timeLeft = 45 * 60;
      document.getElementById('btn-submit-exam').classList.remove('hidden');
      document.getElementById('btn-reset-exam').classList.add('hidden');
      document.getElementById('answered-count').innerText = '0';
      startExam();
    }

    // Auto Render KaTeX
    function renderMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\(', right: '\\\\)', display: false}
          ],
          throwOnError: false
        });
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      renderMath();
    });
    window.addEventListener("load", () => {
      renderMath();
    });
  </script>

</body>
</html>
`;

fs.writeFileSync('courses/vatly_10.html', fullHTML, 'utf8');
console.log('Successfully generated courses/vatly_10.html with airy typography! Size:', fullHTML.length);
