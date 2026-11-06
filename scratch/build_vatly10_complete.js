// scratch/build_vatly10_complete.js
const fs = require('fs');
const path = require('path');
const diagrams = require('./vatly10_diagrams.js');

const rawData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/vatly10_parsed_raw.json', 'utf8'));
const { chapters, formulaTableText, termsText } = rawData;

// Import all 34 expanded rich lessons
const part1 = require('./lessons_part1.js');
const part2 = require('./lessons_part2.js');
const part3 = require('./lessons_part3.js');
const lessonsData = { ...part1, ...part2, ...part3 };

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
      exp: "Độ dịch chuyển là vectơ nối điểm đầu và điểm cuối; có thể dương, âm hoặc bằng 0 tùy thuộc vào chiều chọn."
    }
  ],
  5: [
    {
      q: "Tốc độ và vận tốc phân biệt nhau như thế nào?",
      options: [
        "Tốc độ là vô hướng không âm; vận tốc là vectơ có hướng và dấu",
        "Tốc độ luôn có hướng; vận tốc không có hướng",
        "Hai khái niệm hoàn toàn đồng nhất trong mọi trường hợp",
        "Vận tốc chỉ dùng khi vật chuyển động cong"
      ],
      ans: 0,
      exp: "Tốc độ bằng quãng đường chia thời gian (vô hướng $\\ge 0$), còn vận tốc bằng độ dịch chuyển chia thời gian (vectơ có hướng)."
    }
  ],
  6: [
    {
      q: "Hệ số góc (độ dốc) của đồ thị độ dịch chuyển – thời gian ($d - t$) cho biết:",
      options: [
        "Vận tốc của chuyển động",
        "Gia tốc của chuyển động",
        "Quãng đường đi được",
        "Lực tác dụng lên vật"
      ],
      ans: 0,
      exp: "Độ dốc của đường thẳng trên đồ thị $d - t$ bằng $\\Delta d / \\Delta t = v$ (vận tốc)."
    }
  ],
  7: [
    {
      q: "Khi một vật chuyển động trên một chiếc thuyền đang trôi sông, vận tốc tuyệt đối bằng:",
      options: [
        "Vectơ tổng của vận tốc tương đối và vận tốc kéo theo",
        "Luôn bằng hiệu độ lớn của hai vận tốc",
        "Bằng tích của vận tốc tương đối và vận tốc dòng chảy",
        "Luôn bằng vận tốc của thuyền so với bờ"
      ],
      ans: 0,
      exp: "Theo công thức cộng vận tốc: $\\vec{v}_{13} = \\vec{v}_{12} + \\vec{v}_{23}$."
    }
  ],
  8: [
    {
      q: "Gia tốc trong chuyển động thẳng biến đổi đều đặc trưng cho:",
      options: [
        "Sự thay đổi nhanh hay chậm của vận tốc theo thời gian",
        "Sự thay đổi vị trí của vật trong không gian",
        "Mức độ nhanh hay chậm của chuyển động",
        "Lực cản của môi trường lên vật"
      ],
      ans: 0,
      exp: "Gia tốc $a = \\Delta v / \\Delta t$ đặc trưng cho tốc độ thay đổi của vectơ vận tốc."
    }
  ],
  9: [
    {
      q: "Công thức liên hệ giữa gia tốc, vận tốc và độ dịch chuyển trong chuyển động thẳng biến đổi đều:",
      options: [
        "$v^2 - v_0^2 = 2ad$",
        "$v - v_0 = 2ad$",
        "$v^2 + v_0^2 = 2ad$",
        "$d = 2a(v^2 - v_0^2)$"
      ],
      ans: 0,
      exp: "Hệ thức độc lập thời gian: $v^2 - v_0^2 = 2ad$."
    }
  ],
  10: [
    {
      q: "Rơi tự do là chuyển động của vật:",
      options: [
        "Chỉ chịu tác dụng của trọng lực với vận tốc ban đầu bằng 0",
        "Chịu tác dụng của trọng lực và lực cản không khí rất lớn",
        "Bị ném thẳng đứng từ trên xuống dưới",
        "Có gia tốc thay đổi liên tục theo thời gian"
      ],
      ans: 0,
      exp: "Rơi tự do là chuyển động chỉ dưới tác dụng của trọng lực, thả rơi không vận tốc đầu ($a = g$)."
    }
  ],
  11: [
    {
      q: "Trong thí nghiệm đo gia tốc rơi tự do, thiết bị thường dùng gồm:",
      options: [
        "Cổng quang điện, đồng hồ bấm thời gian hiện số và viên bi thép",
        "Thước dây và nhiệt kế điện tử",
        "Lực kế lò xo và cân đồng hồ",
        "Ampe kế và vôn kế một chiều"
      ],
      ans: 0,
      exp: "Thí nghiệm dùng đồng hồ đo thời gian hiện số nối hai cổng quang điện đo khoảng thời gian bi thép rơi giữa hai mốc."
    }
  ],
  12: [
    {
      q: "Quỹ đạo của chuyển động ném ngang trong trọng trường (bỏ qua cản không khí) có dạng:",
      options: [
        "Một nhánh của đường parabol",
        "Một đường thẳng nghiêng",
        "Một cung tròn",
        "Một đường cong hyperbol"
      ],
      ans: 0,
      exp: "Phương trình quỹ đạo $y = \\frac{g}{2v_0^2}x^2$, có dạng một nhánh đường parabol đỉnh tại điểm ném."
    }
  ],
  13: [
    {
      q: "Tổng hợp lực là phép thay thế:",
      options: [
        "Nhiều lực tác dụng đồng thời bằng một lực duy nhất có tác dụng tương đương",
        "Một lực duy nhất thành vô số lực thành phần",
        "Các lực ngược chiều thành một lực cùng chiều",
        "Trọng lực bằng lực ma sát"
      ],
      ans: 0,
      exp: "Tổng hợp lực là thay thế nhiều lực tác dụng đồng thời lên một vật bằng một lực duy nhất gây tác dụng tương đương: $\\vec{F} = \\sum \\vec{F}_i$."
    }
  ],
  14: [
    {
      q: "Theo định luật I Newton, một vật sẽ giữ nguyên trạng thái đứng yên hoặc chuyển động thẳng đều khi:",
      options: [
        "Không chịu tác dụng của lực nào hoặc hợp lực bằng 0",
        "Chịu một lực tác dụng không đổi cùng hướng chuyển động",
        "Trọng lực bị triệt tiêu hoàn toàn bởi ma sát",
        "Khối lượng của vật tiến tới vô cùng"
      ],
      ans: 0,
      exp: "Định luật I Newton: Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng 0, vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều."
    }
  ],
  15: [
    {
      q: "Định luật II Newton được biểu diễn bằng hệ thức vectơ:",
      options: [
        "$\\vec{a} = \\frac{\\vec{F}}{m}$ hay $\\vec{F} = m\\vec{a}$",
        "$\\vec{F} = \\frac{\\vec{a}}{m}$",
        "$\\vec{a} = m\\vec{F}$",
        "$F = m + a$"
      ],
      ans: 0,
      exp: "Định luật II Newton: Gia tốc của một vật cùng hướng với hợp lực tác dụng; độ lớn tỉ lệ thuận với hợp lực và tỉ lệ nghịch với khối lượng: $\\vec{F} = m\\vec{a}$."
    }
  ],
  16: [
    {
      q: "Đặc điểm của cặp lực và phản lực trong định luật III Newton:",
      options: [
        "Xuất hiện và mất đi đồng thời, cùng độ lớn, ngược chiều, đặt vào hai vật khác nhau",
        "Tác dụng vào cùng một vật và triệt tiêu lẫn nhau",
        "Có bản chất lực hoàn toàn khác nhau",
        "Lực tác dụng luôn xuất hiện trước phản lực"
      ],
      ans: 0,
      exp: "Cặp lực và phản lực là trực đối: cùng độ lớn, ngược chiều, cùng bản chất, đặt vào hai vật khác nhau (không triệt tiêu nhau)."
    }
  ],
  17: [
    {
      q: "Trọng lực tác dụng lên một vật có khối lượng $m$ tại nơi có gia tốc trọng trường $g$ có độ lớn:",
      options: [
        "$P = mg$",
        "$P = m/g$",
        "$P = g/m$",
        "$P = \\frac{1}{2}mg^2$"
      ],
      ans: 0,
      exp: "Trọng lực $\\vec{P} = m\\vec{g}$, có độ lớn $P = mg$ (trọng lượng)."
    }
  ],
  18: [
    {
      q: "Lực ma sát trượt có đặc điểm nào sau đây?",
      options: [
        "Tỉ lệ thuận với áp lực vuông góc $N$: $F_{mst} = \\mu_t N$",
        "Tỉ lệ thuận với diện tích bề mặt tiếp xúc",
        "Tỉ lệ thuận với tốc độ trượt của vật",
        "Luôn cùng hướng với vận tốc chuyển động"
      ],
      ans: 0,
      exp: "Lực ma sát trượt cản trở chuyển động trượt, có độ lớn $F_{mst} = \\mu_t N$, không phụ thuộc vào diện tích tiếp xúc hay tốc độ tương đối."
    }
  ],
  19: [
    {
      q: "Lực cản và lực nâng của chất lưu phụ thuộc chủ yếu vào yếu tố nào?",
      options: [
        "Hình dạng khí động học của vật và tốc độ tương đối",
        "Màu sắc bề mặt của vật",
        "Thời gian vật ở trong chất lưu",
        "Chỉ phụ thuộc vào khối lượng của vật"
      ],
      ans: 0,
      exp: "Lực cản và lực nâng phụ thuộc vào hình dạng khí động học, tiết diện cản, mật độ chất lưu và bình phương vận tốc."
    }
  ],
  20: [
    {
      q: "Khối lượng riêng $\\rho$ của một chất đồng tính có thể tích $V$ và khối lượng $m$ được tính bằng:",
      options: [
        "$\\rho = \\frac{m}{V}$",
        "$\\rho = m \\cdot V$",
        "$\\rho = \\frac{V}{m}$",
        "$\\rho = m \\cdot g \\cdot V$"
      ],
      ans: 0,
      exp: "Khối lượng riêng bằng khối lượng trên một đơn vị thể tích: $\\rho = m/V$ ($kg/m^3$)."
    }
  ],
  21: [
    {
      q: "Moment của một lực $\\vec{F}$ đối với trục quay vuông góc với giá lực cách một khoảng $d$ được tính bằng:",
      options: [
        "$M = F \\cdot d$",
        "$M = F / d$",
        "$M = F + d$",
        "$M = \\frac{1}{2}Fd$"
      ],
      ans: 0,
      exp: "Moment lực đặc trưng cho tác dụng làm quay: $M = F \\cdot d$ (đơn vị $N\\cdot m$), với $d$ là cánh tay đòn."
    }
  ],
  22: [
    {
      q: "Điều kiện cân bằng tổng quát của một vật rắn có trục quay cố định là:",
      options: [
        "Tổng các moment lực làm quay theo chiều kim đồng hồ bằng tổng các moment làm quay ngược chiều",
        "Tổng độ lớn các lực tác dụng phải bằng 0",
        "Vật phải có hình dạng đối xứng hoàn hảo",
        "Trọng tâm của vật phải nằm ngoài vật"
      ],
      ans: 0,
      exp: "Quy tắc moment lực: Tổng moment lực có xu hướng làm quay theo một chiều bằng tổng moment lực có xu hướng làm quay theo chiều ngược lại."
    }
  ],
  23: [
    {
      q: "Công cơ học do lực không đổi $\\vec{F}$ sinh ra khi vật dịch chuyển quãng đường $s$ theo góc $\\alpha$ là:",
      options: [
        "$A = F \\cdot s \\cdot \\cos\\alpha$",
        "$A = F \\cdot s \\cdot \\sin\\alpha$",
        "$A = F \\cdot s / \\cos\\alpha$",
        "$A = mgh$"
      ],
      ans: 0,
      exp: "Công cơ học $A = F s \\cos\\alpha$. Nếu $0 \\le \\alpha < 90^\\circ$ công phát động ($A>0$); nếu $90^\\circ < \\alpha \\le 180^\\circ$ công cản ($A<0$); nếu $\\alpha = 90^\\circ$ thì $A = 0$."
    }
  ],
  24: [
    {
      q: "Công suất cơ học $P$ đặc trưng cho:",
      options: [
        "Tốc độ thực hiện công của lực: $P = A / t$",
        "Tổng lượng công tích lũy được trong vật",
        "Độ bền cơ học của máy móc",
        "Khả năng tiết kiệm nhiên liệu"
      ],
      ans: 0,
      exp: "Công suất $P = A/t = F \\cdot v$ đo lượng công thực hiện được trong một đơn vị thời gian (đơn vị Watt - W)."
    }
  ],
  25: [
    {
      q: "Động năng của một vật khối lượng $m$ chuyển động với vận tốc $v$ được xác định bởi:",
      options: [
        "$W_d = \\frac{1}{2}mv^2$",
        "$W_d = mv^2$",
        "$W_d = 2mv$",
        "$W_d = \\frac{1}{2}m^2v$"
      ],
      ans: 0,
      exp: "Động năng là năng lượng do vật chuyển động mà có: $W_d = \\frac{1}{2}mv^2$ (Joule)."
    }
  ],
  26: [
    {
      q: "Thế năng trọng trường của một vật khối lượng $m$ ở độ cao $z$ so với mốc thế năng:",
      options: [
        "$W_t = mgz$",
        "$W_t = \\frac{1}{2}mgz^2$",
        "$W_t = m/z$",
        "$W_t = gz$"
      ],
      ans: 0,
      exp: "Thế năng trọng trường đặc trưng cho tương tác giữa Trái Đất và vật: $W_t = mgz$."
    }
  ],
  27: [
    {
      q: "Cơ năng của một vật chuyển động chỉ dưới tác dụng của trọng lực hoặc lực đàn hồi:",
      options: [
        "Được bảo toàn: $W = W_d + W_t = \\text{hằng số}$",
        "Liên tục tăng đều theo thời gian",
        "Luôn luôn bằng 0",
        "Biến đổi thành nhiệt năng tức thì"
      ],
      ans: 0,
      exp: "Định luật bảo toàn cơ năng: Khi vật chỉ chịu tác dụng của lực thế (trọng lực, lực đàn hồi), tổng động năng và thế năng không đổi."
    }
  ],
  28: [
    {
      q: "Động lượng của một vật có khối lượng $m$ chuyển động với vận tốc $\\vec{v}$ là:",
      options: [
        "Vectơ $\\vec{p} = m\\vec{v}$ cùng hướng với vận tốc",
        "Đại lượng vô hướng $p = mv^2$",
        "Vectơ $\\vec{p} = \\frac{1}{2}m\\vec{v}$",
        "Lực tác dụng lên vật trong 1 giây"
      ],
      ans: 0,
      exp: "Động lượng là đại lượng vectơ đặc trưng cho sự truyền chuyển động: $\\vec{p} = m\\vec{v}$ ($kg\\cdot m/s$)."
    }
  ],
  29: [
    {
      q: "Định luật bảo toàn động lượng áp dụng cho:",
      options: [
        "Hệ kín (hệ cô lập không chịu ngoại lực hoặc tổng ngoại lực bằng 0)",
        "Mọi hệ vật bất kể có lực ma sát lớn hay nhỏ",
        "Vật chuyển động có gia tốc không đổi",
        "Hệ chỉ gồm một chất điểm duy nhất"
      ],
      ans: 0,
      exp: "Trong một hệ kín, tổng động lượng của hệ trước và sau tương tác được bảo toàn: $\\sum \\vec{p}_{truoc} = \\sum \\vec{p}_{sau}$."
    }
  ],
  30: [
    {
      q: "Trong va chạm hoàn toàn mềm (hai vật dính vào nhau sau va chạm), đại lượng nào KHÔNG được bảo toàn?",
      options: [
        "Cơ năng (động năng) của hệ",
        "Động lượng toàn phần của hệ kín",
        "Tổng khối lượng của hệ",
        "Vị trí khối tâm"
      ],
      ans: 0,
      exp: "Trong va chạm mềm, một phần cơ năng chuyển hóa thành nhiệt và công làm biến dạng, nên cơ năng không bảo toàn (nhưng động lượng vẫn bảo toàn)."
    }
  ],
  31: [
    {
      q: "Đặc điểm của vectơ gia tốc trong chuyển động tròn đều:",
      options: [
        "Luôn hướng vào tâm quỹ đạo: $a_{ht} = \\frac{v^2}{r} = \\omega^2 r$",
        "Cùng hướng với vectơ vận tốc tức thời",
        "Có độ lớn thay đổi liên tục",
        "Luôn tiếp tuyến với đường tròn"
      ],
      ans: 0,
      exp: "Gia tốc hướng tâm vuông góc với vận tốc, luôn hướng vào tâm quỹ đạo: $a_{ht} = v^2/r = \\omega^2 r$."
    }
  ],
  32: [
    {
      q: "Lực hướng tâm giữ cho vật chuyển động tròn đều có bản chất là:",
      options: [
        "Hợp lực của các lực thực tế đóng vai trò hướng vào tâm",
        "Một loại lực cơ bản mới trong tự nhiên",
        "Lực đẩy ly tâm từ tâm hất ra ngoài",
        "Chỉ có thể là lực ma sát nghỉ"
      ],
      ans: 0,
      exp: "Lực hướng tâm không phải là loại lực mới mà là hợp lực của các lực đã biết (hấp dẫn, căng dây, ma sát nghỉ, v.v.) đóng vai trò tạo gia tốc hướng tâm: $F_{ht} = m a_{ht}$."
    }
  ],
  33: [
    {
      q: "Định luật Hooke về biến dạng đàn hồi của lò xo trong giới hạn đàn hồi phát biểu:",
      options: [
        "Lực đàn hồi tỉ lệ thuận với độ biến dạng: $F_{dh} = k|\\Delta l|$",
        "Lực đàn hồi tỉ lệ nghịch với chiều dài tự nhiên",
        "Lực đàn hồi tỉ lệ thuận với bình phương độ dãn",
        "Độ cứng $k$ phụ thuộc vào khối lượng quả cân treo"
      ],
      ans: 0,
      exp: "Trong giới hạn đàn hồi, lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng: $F_{dh} = k |\\Delta l|$ ($k$ là độ cứng, đơn vị $N/m$)."
    }
  ],
  34: [
    {
      q: "Độ chênh lệch áp suất chất lỏng giữa hai điểm ở độ sâu chênh lệch $h$ là:",
      options: [
        "$\\Delta p = \\rho g h$",
        "$\\Delta p = \\frac{\\rho g}{h}$",
        "$\\Delta p = \\frac{1}{2}\\rho g h^2$",
        "$\\Delta p = mgh$"
      ],
      ans: 0,
      exp: "Áp suất thủy tĩnh ở độ sâu $h$: $p = p_0 + \\rho gh$, độ chênh áp suất $\\Delta p = \\rho gh$."
    }
  ]
};

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

// Inline Markdown parser (handles **bold**, *italic*, `code`, and KaTeX inline math)
function parseInline(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-blue-100/70 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-mono text-xs">$1</code>');
}

// Markdown Table parser into Tailwind Table
function parseTable(lines) {
  if (!lines || lines.length < 2) return '';
  const rows = lines.map(line =>
    line.split('|')
        .map(c => c.trim())
        .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1)
  );
  if (rows.length < 2) return '';

  const headerRow = rows[0];
  const dataRows = rows.slice(2); // Skip separator row

  let html = `
    <div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-blue-50/80 dark:bg-blue-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-800">
            ${headerRow.map(h => `<th class="p-3.5 font-extrabold">${parseInline(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
          ${dataRows.map(r => `
            <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
              ${r.map((c, i) => `<td class="p-3.5 ${i === 0 ? 'font-semibold text-slate-900 dark:text-white' : ''}">${parseInline(c)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  return html;
}

// Block parser for markdown text
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

    // Blockquote line: starts with > (e.g. "> Quote text" or "  > Quote text")
    if (trimmed.startsWith('>')) {
      const quoteText = trimmed.replace(/^>\s*/, '').trim();

      // If inside a card that has no lead (e.g. - **Phát biểu định luật:** followed by > quote)
      if (currentBlock && currentBlock.type === 'card' && !currentBlock.lead) {
        currentBlock.lead = quoteText;
        currentBlock.isQuote = true;
      } else if (currentBlock && currentBlock.type === 'card') {
        currentBlock.quote = quoteText;
      } else if (currentBlock && currentBlock.type === 'blockquote') {
        currentBlock.text += ' ' + quoteText;
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'blockquote',
          text: quoteText
        };
      }
      i++;
      continue;
    }

    // Display LaTeX equation: starts with \[ or $$
    if (trimmed.startsWith('\\[') || trimmed.startsWith('$$')) {
      const isBracket = trimmed.startsWith('\\[');
      const closeDelim = isBracket ? '\\]' : '$$';

      let eqLines = [];
      if (isBracket && trimmed.length > 2 && trimmed.endsWith('\\]')) {
        eqLines.push(trimmed);
        i++;
      } else if (!isBracket && trimmed.length > 2 && trimmed.slice(2).includes('$$')) {
        eqLines.push(trimmed);
        i++;
      } else {
        eqLines.push(trimmed);
        i++;
        while (i < lines.length) {
          const nextTrimmed = lines[i].trim();
          eqLines.push(nextTrimmed);
          if (nextTrimmed.includes(closeDelim)) {
            i++;
            break;
          }
          i++;
        }
      }

      const fullEq = eqLines.join('\n');

      // If current block is a card with empty lead, attach equation to the card
      if (currentBlock && currentBlock.type === 'card' && !currentBlock.equation) {
        currentBlock.equation = fullEq;
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = null;
        blocks.push({
          type: 'equation',
          math: fullEq
        });
      }
      continue;
    }

    // Bullet with bold term: - **Term:** Desc
    const bulletBold = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletBold) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletBold[1].replace(/[:\s]+$/, '').trim(),
        lead: bulletBold[2].trim(),
        items: []
      };
      i++;
      continue;
    }

    // Sub-bullet under card: e.g. "  - Item" or line starts with "- " while inside card
    if (currentBlock && currentBlock.type === 'card' && (rawLine.startsWith('  -') || rawLine.startsWith('    -') || (trimmed.startsWith('- ') && !trimmed.startsWith('- **')))) {
      const subText = trimmed.replace(/^[-*]\s+/, '').trim();
      currentBlock.items.push(subText);
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

    // Standalone bold line: **Title**
    const standaloneBold = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (standaloneBold && standaloneBold[1].length < 60) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: standaloneBold[1].trim(),
        lead: standaloneBold[2] ? standaloneBold[2].trim() : '',
        items: []
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

// Render blocks into HTML with airy typography (line-height: 1.85, tracking: 0.015em)
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
    } else if (b.type === 'blockquote') {
      html += `
        <div class="my-4 p-5 sm:p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 shadow-2xs mb-4">
          <div class="italic font-medium text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-[1.85] tracking-[0.015em]">
            “${parseInline(b.text)}”
          </div>
        </div>
      `;
    } else if (b.type === 'card') {
      const isLaw = b.isQuote || b.term.toLowerCase().includes('định luật') || b.term.toLowerCase().includes('định lý') || b.term.toLowerCase().includes('phát biểu');
      const isSafety = b.term.toLowerCase().includes('an toàn') || b.term.toLowerCase().includes('rủi ro') || b.term.toLowerCase().includes('sự cố') || b.term.toLowerCase().includes('lưu ý');

      let cardBorder = 'border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50';
      let icon = 'fa-atom text-blue-500';

      if (isSafety) {
        cardBorder = 'border-amber-300 dark:border-amber-800/80 bg-amber-50/30 dark:bg-amber-950/20';
        icon = 'fa-triangle-exclamation text-amber-500';
      } else if (isLaw) {
        cardBorder = 'border-indigo-200/80 dark:border-indigo-800/80 bg-indigo-50/30 dark:bg-indigo-950/25';
        icon = 'fa-scroll text-indigo-500';
      }

      html += `
        <div class="p-5 sm:p-6 rounded-2xl border ${cardBorder} shadow-xs mb-4">
          <div class="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid ${icon} text-sm"></i>
            <span class="font-bold text-slate-900 dark:text-white uppercase tracking-wide text-xs sm:text-sm">${parseInline(b.term)}</span>
          </div>
          ${b.isQuote ? `
            <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border-l-4 border-indigo-500 shadow-2xs mb-3">
              <p class="italic font-medium text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-[1.85] tracking-[0.015em]">
                “${parseInline(b.lead)}”
              </p>
            </div>
          ` : b.lead ? `
            <div class="text-slate-600 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-2">${parseInline(b.lead)}</div>
          ` : ''}
          ${b.quote ? `
            <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border-l-4 border-indigo-500 shadow-2xs my-3">
              <p class="italic font-medium text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-[1.85] tracking-[0.015em]">
                “${parseInline(b.quote)}”
              </p>
            </div>
          ` : ''}
          ${b.equation ? `
            <div class="my-3 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 text-center text-slate-900 dark:text-blue-100 font-medium text-sm sm:text-base leading-loose overflow-x-auto">
              ${b.equation}
            </div>
          ` : ''}
          ${b.items && b.items.length > 0 ? `
            <ul class="mt-3 space-y-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm pl-2">
              ${b.items.map(it => `
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle text-[6px] text-blue-500 mt-2 shrink-0"></i>
                  <span>${parseInline(it)}</span>
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
      `;
    } else if (b.type === 'bullet_list') {
      html += `
        <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 mb-4">
          <ul class="space-y-4 sm:space-y-4.5">
            ${b.items.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <div class="leading-[1.85] tracking-[0.015em]">${parseInline(item)}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    } else if (b.type === 'numbered_list') {
      html += `
        <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 mb-4">
          <ol class="space-y-4 sm:space-y-4.5">
            ${b.items.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/70 text-blue-600 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ${item.num}
                </span>
                <div class="leading-[1.85] tracking-[0.015em]">${parseInline(item.text)}</div>
              </li>
            `).join('')}
          </ol>
        </div>
      `;
    } else if (b.type === 'paragraph') {
      html += `
        <div class="p-5 sm:p-6 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-4">
          ${parseInline(b.lead)}
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
}

// Generate the complete HTML page
function buildHtml() {
  const allLessonsArray = [];
  for (let i = 1; i <= 34; i++) {
    if (lessonsData[i]) allLessonsArray.push(lessonsData[i]);
  }

  // Sidebar navigation items grouped by chapter
  let sidebarHtml = '';
  chapters.forEach(ch => {
    const meta = chapterMeta[ch.num] || { badge: ch.title, icon: 'fa-book' };
    sidebarHtml += `
      <div class="mb-5">
        <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <i class="fa-solid ${meta.icon}"></i>
          <span>Chương ${ch.num}: ${meta.badge}</span>
        </div>
        <div class="mt-1 space-y-1">
    `;

    ch.lessons.forEach(lNum => {
      const l = typeof lNum === 'object' ? lNum : lessonsData[lNum];
      if (!l) return;
      sidebarHtml += `
        <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-800/60 hover:bg-blue-50/70 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-blue-600 dark:text-blue-400">Bài ${l.num}</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Chương ${ch.num}</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-snug">
            ${escapeHtml(l.title)}
          </div>
        </a>
      `;
    });

    sidebarHtml += `
        </div>
      </div>
    `;
  });

  // Main lesson cards
  let mainContentHtml = '';
  allLessonsArray.forEach(lesson => {
    const meta = chapterMeta[lesson.chapter] || { badge: lesson.chapterTitle, icon: 'fa-book' };
    const blocks = parseBlocks(lesson.body);
    const renderedBody = renderBlocks(blocks);
    const diagramSvg = diagrams[lesson.num];
    const quiz = lessonQuizzes[lesson.num] && lessonQuizzes[lesson.num][0];

    mainContentHtml += `
      <!-- Bài ${lesson.num} -->
      <article id="bai-${lesson.num}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition mb-10">
        
        <!-- Header badge & bookmark -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-xs shadow-blue-500/20 tracking-wide">
              <i class="fa-solid fa-atom"></i> Bài ${lesson.num}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60">
              ${escapeHtml(meta.badge)}
            </span>
          </div>
          <button onclick="toggleBookmark('bai-${lesson.num}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <!-- Lesson Title -->
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-6 leading-snug tracking-tight">
          <span class="text-blue-600 dark:text-blue-400">Bài ${lesson.num}:</span> ${escapeHtml(lesson.title)}
        </h3>

        <!-- Diagram Illustration -->
        ${diagramSvg || ''}

        <!-- Lesson Body -->
        <div class="mt-4">
          ${renderedBody}
        </div>

        <!-- Lesson Mini-Quiz -->
        ${quiz ? `
          <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
            <div class="p-5 sm:p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                <i class="fa-solid fa-circle-question"></i> Câu hỏi củng cố nhanh
              </div>
              <p class="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-4">
                ${parseInline(quiz.q)}
              </p>
              <div class="space-y-2.5">
                ${quiz.options.map((opt, oIdx) => `
                  <button onclick="checkQuiz(this, ${lesson.num}, ${oIdx}, ${quiz.ans}, '${escapeHtml(quiz.exp).replace(/'/g, "\\'")}')" 
                          class="quiz-opt w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-blue-950/30 transition text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3">
                    <span class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center font-bold text-xs text-slate-500 dark:text-slate-400 shrink-0 mt-0.5">
                      ${String.fromCharCode(65 + oIdx)}
                    </span>
                    <span class="leading-relaxed">${parseInline(opt)}</span>
                  </button>
                `).join('')}
              </div>
              <div id="quiz-exp-${lesson.num}" class="hidden mt-4 p-4 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
            </div>
          </div>
        ` : ''}

      </article>
    `;
  });

  // Modal 1: Sổ tay công thức tra cứu nhanh
  const formulaBlocks = parseBlocks(formulaTableText);
  const renderedFormulaTable = renderBlocks(formulaBlocks);

  // Modal 2: Đơn vị & Thuật ngữ cốt lõi
  const termsBlocks = parseBlocks(termsText);
  const renderedTerms = renderBlocks(termsBlocks);

  // Assemble full HTML document matching toan_9 styling
  const fullHtml = `<!DOCTYPE html>
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

  <!-- Google Fonts & Font Awesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

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
      border-radius: 9999px;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #334155;
    }
    .lesson-card {
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .nav-link.active {
      border-color: #3b82f6 !important;
      background-color: rgba(59, 130, 246, 0.12) !important;
      color: #2563eb !important;
    }
    .dark .nav-link.active {
      background-color: rgba(59, 130, 246, 0.2) !important;
      color: #60a5fa !important;
    }
    /* KaTeX equation styling */
    .katex-display {
      margin: 0.75em 0 !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0.25em 0;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen selection:bg-blue-500 selection:text-white">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Trang chủ">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-blue-500/30">
            <i class="fa-solid fa-atom"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-none">Vật Lí 10</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-[10px] tracking-wide uppercase">Kết Nối Tri Thức</span>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">Trọn bộ 7 Chương • 34 Bài học chuẩn SGK</p>
          </div>
        </div>
      </div>

      <!-- Action Tools: Search, Formulas, Mistakes, Exam, DarkMode -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        
        <!-- Search Trigger -->
        <button onclick="openModal('modal-search')" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold transition" title="Tìm kiếm bài học & công thức (Ctrl+K)">
          <i class="fa-solid fa-magnifying-glass text-xs"></i>
          <span class="hidden md:inline">Tìm kiếm</span>
          <kbd class="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 rounded border border-slate-300 dark:border-slate-700 shadow-2xs">Ctrl K</kbd>
        </button>

        <!-- Quick Formula Handbook Modal Trigger -->
        <button onclick="openModal('modal-formulas')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-100 dark:hover:bg-blue-900/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/80 text-xs font-bold transition">
          <i class="fa-solid fa-book-bookmark text-xs"></i>
          <span class="hidden sm:inline">Sổ tay</span> Công thức
        </button>

        <!-- Key Terms Trigger -->
        <button onclick="openModal('modal-mistakes')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/70 hover:bg-amber-100 dark:hover:bg-amber-900/80 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/80 text-xs font-bold transition">
          <i class="fa-solid fa-key text-xs"></i>
          <span class="hidden sm:inline">Thuật ngữ</span> Cốt lõi
        </button>

        <!-- Trạng Nguyên Exam Mode 45:00 -->
        <button onclick="openModal('modal-exam')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-sm shadow-blue-500/25 transition">
          <i class="fa-solid fa-stopwatch text-xs"></i>
          <span class="hidden lg:inline">Thi Đấu</span> 45:00
        </button>

        <!-- Dark Mode Toggle -->
        <button id="theme-toggle" class="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện Sáng/Tối">
          <i id="theme-icon" class="fa-solid fa-moon text-sm"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button onclick="toggleMobileSidebar()" class="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <i class="fa-solid fa-bars text-base"></i>
        </button>

      </div>
    </div>
  </header>

  <!-- Hero Header Section -->
  <section class="relative bg-gradient-to-b from-blue-50/80 via-white to-slate-50 dark:from-slate-850 dark:via-slate-900 dark:to-slate-900 py-10 sm:py-14 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-certificate"></i> Chương Trình GDPT 2018 Mới • Bộ SGK Kết Nối Tri Thức
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Học Liệu Số <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Vật Lí 10</span> Chuẩn SGK
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-[1.85] tracking-[0.015em] mb-6">
          Bản hệ thống hóa đầy đủ, chi tiết và khoa học theo trình tự 7 chương và 34 bài học SGK Kết nối tri thức. Tích hợp mô hình hình học vectơ SVG chuẩn xác, công thức KaTeX sắc nét, quy trình thí nghiệm thực hành, ứng dụng kỹ thuật số và phòng thi Trạng Nguyên 45:00.
        </p>

        <!-- Quick stat badges -->
        <div class="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-layer-group text-blue-500"></i>
            <span>7 Chương lý thuyết</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-book-open-reader text-indigo-500"></i>
            <span>34 Bài học chi tiết</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-diagram-project text-sky-500"></i>
            <span>Mô hình SVG trực quan</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs">
            <i class="fa-solid fa-square-root-variable text-emerald-500"></i>
            <span>100% KaTeX Math</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Layout: 12-Column Grid (4-Col Sidebar Sticky + 8-Col Main Content) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Sticky Sidebar Navigation (4 cols) -->
      <aside id="sidebar-container" class="lg:col-span-4 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar pr-2 hidden lg:block bg-white dark:bg-slate-850 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
        
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <i class="fa-solid fa-list-ol"></i> Mục lục bài học
          </div>
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300">
            34 Bài
          </span>
        </div>

        <nav class="space-y-4">
          ${sidebarHtml}
        </nav>
      </aside>

      <!-- Main Content (8 cols) -->
      <section class="lg:col-span-8 min-w-0">
        ${mainContentHtml}
      </section>

    </div>
  </main>

  <!-- Mobile Sidebar Drawer Backdrop -->
  <div id="mobile-backdrop" onclick="toggleMobileSidebar()" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden transition-opacity lg:hidden"></div>

  <!-- Mobile Sidebar Drawer -->
  <aside id="mobile-sidebar" class="fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-slate-850 p-6 overflow-y-auto custom-scrollbar transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden shadow-2xl border-r border-slate-200 dark:border-slate-800">
    <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
          <i class="fa-solid fa-atom"></i>
        </div>
        <span class="font-extrabold text-sm text-slate-900 dark:text-white">Mục Lục Vật Lí 10</span>
      </div>
      <button onclick="toggleMobileSidebar()" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <nav class="space-y-4">
      ${sidebarHtml}
    </nav>
  </aside>

  <!-- Modal 1: Sổ Tay Tra Cứu Công Thức Nhanh -->
  <div id="modal-formulas" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
      <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold">
            <i class="fa-solid fa-book-bookmark text-sm"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Sổ Tay Công Thức Vật Lí 10</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Tra cứu nhanh công thức, điều kiện áp dụng & đơn vị đo</p>
          </div>
        </div>
        <button onclick="closeModal('modal-formulas')" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-xs sm:text-sm">
        ${renderedFormulaTable}
      </div>
    </div>
  </div>

  <!-- Modal 2: Thuật Ngữ Cốt Lõi -->
  <div id="modal-mistakes" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
      <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold">
            <i class="fa-solid fa-key text-sm"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 dark:text-white">Đơn Vị & Thuật Ngữ Cốt Lõi</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Bảng đối chiếu định nghĩa, thứ nguyên & đơn vị chuẩn SI</p>
          </div>
        </div>
        <button onclick="closeModal('modal-mistakes')" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div class="p-6 overflow-y-auto custom-scrollbar flex-1 text-xs sm:text-sm">
        ${renderedTerms}
      </div>
    </div>
  </div>

  <!-- Modal 3: Tìm Kiếm Nhanh (Ctrl+K) -->
  <div id="modal-search" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
    <div class="bg-white dark:bg-slate-850 rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
        <i class="fa-solid fa-magnifying-glass text-slate-400"></i>
        <input id="search-input" type="text" placeholder="Tìm bài học, công thức, định luật Newton..." 
               class="w-full bg-transparent border-0 focus:outline-hidden text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400"
               oninput="handleSearch(this.value)">
        <button onclick="closeModal('modal-search')" class="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs">
          ESC
        </button>
      </div>
      <div id="search-results" class="max-h-80 overflow-y-auto custom-scrollbar p-3 space-y-1 text-xs sm:text-sm">
        <div class="p-4 text-center text-slate-400 text-xs">Nhập từ khóa để tìm kiếm trong 34 bài học Vật Lí 10...</div>
      </div>
    </div>
  </div>

  <!-- Modal 4: Thi Đấu Trạng Nguyên 45:00 -->
  <div id="modal-exam" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-850 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
      <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div class="flex items-center gap-2.5">
          <i class="fa-solid fa-award text-xl text-amber-300"></i>
          <div>
            <h3 class="font-extrabold text-base">Phòng Thi Trạng Nguyên Vật Lí 10</h3>
            <p class="text-xs text-blue-100">Thời gian làm bài: 45:00 • 10 Câu hỏi trắc nghiệm chuẩn đề thi</p>
          </div>
        </div>
        <button onclick="closeModal('modal-exam')" class="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto custom-scrollbar flex-1">
        <!-- Exam Timer & Score Bar -->
        <div class="flex items-center justify-between p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
              <i class="fa-solid fa-clock text-lg"></i>
            </div>
            <div>
              <div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Thời gian còn lại</div>
              <div id="exam-timer" class="font-mono font-black text-xl text-blue-600 dark:text-blue-400">45:00</div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Điểm số hiện tại</div>
            <div id="exam-score" class="font-black text-xl text-emerald-600 dark:text-emerald-400">0 / 10</div>
          </div>
        </div>

        <div id="exam-questions-list" class="space-y-6">
          <!-- Dynamically populated 10 questions -->
        </div>

        <div class="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button onclick="resetExam()" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition">
            <i class="fa-solid fa-rotate-right mr-1.5"></i> Làm lại đề
          </button>
          <button onclick="submitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 hover:opacity-90 transition">
            <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp bài thi
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-slate-850 border-t border-slate-200/80 dark:border-slate-800 py-10 mt-20 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
      <div class="flex items-center justify-center gap-2 font-bold text-sm text-slate-800 dark:text-slate-200">
        <i class="fa-solid fa-atom text-blue-600"></i> CodeHub • Học Liệu Số Vật Lí 10
      </div>
      <p>Dựa trên nội dung chuẩn Sách giáo khoa Vật lí 10 — Kết nối tri thức với cuộc sống (Chương trình GDPT 2018).</p>
      <p class="text-[11px] text-slate-400 dark:text-slate-500">Toàn bộ công thức được render chuẩn KaTeX • Sơ đồ vật lí vector SVG trực quan</p>
    </div>
  </footer>

  <!-- Interactive Scripts (Dark mode, active scroll spy, bookmarks, quiz & exam) -->
  <script>
    // Theme Dark / Light toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon text-sm text-slate-500';
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      applyTheme(isDark);
    });

    // Mobile Sidebar Drawer
    function toggleMobileSidebar() {
      const sidebar = document.getElementById('mobile-sidebar');
      const backdrop = document.getElementById('mobile-backdrop');
      const isHidden = sidebar.classList.contains('-translate-x-full');
      if (isHidden) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Modal Control
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        if (id === 'modal-search') {
          setTimeout(() => document.getElementById('search-input')?.focus(), 100);
        } else if (id === 'modal-exam') {
          startExam();
        }
        renderMath();
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    }

    // Close on backdrop or ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('[id^="modal-"]').forEach(m => m.classList.add('hidden'));
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal('modal-search');
      }
    });

    // Active Scroll Spy for Sidebar Links
    window.addEventListener('scroll', () => {
      const lessons = document.querySelectorAll('article.lesson-card');
      const scrollPos = window.scrollY + 160;

      lessons.forEach(lesson => {
        const top = lesson.offsetTop;
        const height = lesson.offsetHeight;
        const id = lesson.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    });

    // Bookmark Feature
    function toggleBookmark(lessonId) {
      let bookmarks = JSON.parse(localStorage.getItem('vatly10_bookmarks') || '[]');
      const idx = bookmarks.indexOf(lessonId);
      const btn = document.querySelector(\`#\${lessonId} .bookmark-btn i\`);

      if (idx > -1) {
        bookmarks.splice(idx, 1);
        if (btn) btn.className = 'fa-regular fa-bookmark';
      } else {
        bookmarks.push(lessonId);
        if (btn) btn.className = 'fa-solid fa-bookmark text-amber-500';
      }
      localStorage.setItem('vatly10_bookmarks', JSON.stringify(bookmarks));
    }

    function loadBookmarks() {
      const bookmarks = JSON.parse(localStorage.getItem('vatly10_bookmarks') || '[]');
      bookmarks.forEach(id => {
        const btn = document.querySelector(\`#\${id} .bookmark-btn i\`);
        if (btn) btn.className = 'fa-solid fa-bookmark text-amber-500';
      });
    }

    // Mini-Quiz Handler
    function checkQuiz(btn, lessonNum, selectedIdx, correctIdx, expText) {
      const parent = btn.parentElement;
      const buttons = parent.querySelectorAll('.quiz-opt');
      const expBox = document.getElementById('quiz-exp-' + lessonNum);

      buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) {
          b.className = 'quiz-opt w-full text-left p-3.5 rounded-xl border border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 font-semibold flex items-start gap-3';
        } else if (idx === selectedIdx) {
          b.className = 'quiz-opt w-full text-left p-3.5 rounded-xl border border-rose-500 bg-rose-50/80 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 flex items-start gap-3';
        } else {
          b.className = 'quiz-opt w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 text-slate-400 dark:text-slate-500 opacity-60 flex items-start gap-3';
        }
      });

      if (expBox) {
        expBox.classList.remove('hidden');
        if (selectedIdx === correctIdx) {
          expBox.className = 'mt-4 p-4 rounded-xl text-xs sm:text-sm leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200';
          expBox.innerHTML = '<strong class="font-bold">Chính xác!</strong> ' + expText;
        } else {
          expBox.className = 'mt-4 p-4 rounded-xl text-xs sm:text-sm leading-relaxed bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200';
          expBox.innerHTML = '<strong class="font-bold">Chưa đúng.</strong> ' + expText;
        }
        renderMath();
      }
    }

    // Search Database
    const searchData = ${JSON.stringify(allLessonsArray.map(l => ({ num: l.num, title: l.title, ch: l.chapter })))};

    function handleSearch(query) {
      const q = query.trim().toLowerCase();
      const resultsContainer = document.getElementById('search-results');
      if (!q) {
        resultsContainer.innerHTML = '<div class="p-4 text-center text-slate-400 text-xs">Nhập từ khóa để tìm kiếm trong 34 bài học Vật Lí 10...</div>';
        return;
      }
      const matches = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        ('bài ' + item.num).includes(q) || 
        ('chương ' + item.ch).includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = '<div class="p-4 text-center text-slate-400 text-xs">Không tìm thấy bài học nào phù hợp với từ khóa "' + escapeHtml(query) + '".</div>';
        return;
      }

      resultsContainer.innerHTML = matches.map(m => \`
        <a href="#bai-\${m.num}" onclick="closeModal('modal-search')" class="block p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 transition border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-bold text-blue-600 dark:text-blue-400">Bài \${m.num}</span>
            <span class="text-slate-400 text-[10px]">Chương \${m.ch}</span>
          </div>
          <div class="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">\${escapeHtml(m.title)}</div>
        </a>
      \`).join('');
    }

    // Exam System 45:00
    let examTimeLeft = 45 * 60;
    let examTimerInterval = null;
    let examAnswers = {};

    const examPool = ${JSON.stringify(
      Object.keys(lessonQuizzes).map(k => ({
        lesson: k,
        ...lessonQuizzes[k][0]
      }))
    )};

    let currentExamQuestions = [];

    function startExam() {
      if (currentExamQuestions.length === 0) {
        // Pick 10 random questions across the 34 lessons
        const shuffled = [...examPool].sort(() => 0.5 - Math.random());
        currentExamQuestions = shuffled.slice(0, 10);
      }
      renderExamQuestions();

      if (!examTimerInterval) {
        examTimerInterval = setInterval(() => {
          if (examTimeLeft <= 0) {
            clearInterval(examTimerInterval);
            submitExam();
          } else {
            examTimeLeft--;
            const m = Math.floor(examTimeLeft / 60);
            const s = examTimeLeft % 60;
            document.getElementById('exam-timer').innerText = 
              (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
          }
        }, 1000);
      }
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-questions-list');
      container.innerHTML = currentExamQuestions.map((q, idx) => \`
        <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850">
          <div class="flex items-center justify-between mb-2">
            <span class="font-extrabold text-xs text-blue-600 dark:text-blue-400">Câu \${idx + 1} / 10 (Bài \${q.lesson})</span>
          </div>
          <p class="font-semibold text-sm text-slate-900 dark:text-white mb-3">\${q.q}</p>
          <div class="space-y-2">
            \${q.options.map((opt, oIdx) => \`
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:bg-blue-50/40 dark:hover:bg-blue-950/40 cursor-pointer text-xs sm:text-sm text-slate-800 dark:text-slate-200 transition">
                <input type="radio" name="exam-q-\${idx}" value="\${oIdx}" onchange="examAnswers[\${idx}] = \${oIdx}" class="text-blue-600 focus:ring-blue-500">
                <span>\${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
      renderMath();
    }

    function submitExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      let score = 0;
      currentExamQuestions.forEach((q, idx) => {
        if (examAnswers[idx] === q.ans) score++;
      });
      document.getElementById('exam-score').innerText = score + ' / 10';
      alert('Bạn đã hoàn thành bài thi Trạng Nguyên Vật Lí 10!\\nĐiểm số: ' + score + ' / 10');
    }

    function resetExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimeLeft = 45 * 60;
      examAnswers = {};
      currentExamQuestions = [];
      document.getElementById('exam-timer').innerText = '45:00';
      document.getElementById('exam-score').innerText = '0 / 10';
      startExam();
    }

    // KaTeX Math Rendering Trigger with Retry Polling (ensures all display and inline equations render)
    function renderMath() {
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\[', right: '\\\\]', display: true},
            {left: '\\\\(', right: '\\\\)', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function ensureMathRendered() {
      renderMath();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (typeof renderMathInElement === 'function') {
          renderMath();
          if (attempts > 5) clearInterval(interval);
        }
        if (attempts > 20) clearInterval(interval);
      }, 250);
    }

    document.addEventListener("DOMContentLoaded", () => {
      loadBookmarks();
      ensureMathRendered();
    });
    window.addEventListener("load", ensureMathRendered);
    setTimeout(ensureMathRendered, 500);
  </script>

</body>
</html>
`;

  fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', fullHtml, 'utf8');
  console.log('Successfully built courses/vatly_10.html! Length:', fullHtml.length);
}

buildHtml();
