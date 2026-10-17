const fs = require('fs');

const outputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\veo3.html';

function createQuiz(id, question, options, correctIdx, explanation) {
  const letters = ['A', 'B', 'C', 'D'];
  const buttons = options.map((opt, idx) => {
    const isCorrect = idx === correctIdx;
    const cleanExp = explanation.replace(/'/g, "\\'");
    return `<button onclick="checkQuiz('${id}', ${idx}, ${isCorrect}, '${cleanExp}')" class="quiz-btn-${id} text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition">${letters[idx]}. ${opt}</button>`;
  }).join('\n                ');

  return `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">${question}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                ${buttons}
              </div>
              <div id="feedback-${id}" class="hidden mt-3 p-3 rounded-lg text-xs font-medium"></div>
            </div>`;
}

// 10 Comprehensive Google Veo 3 Topics
const topics = [
  {
    id: 'bai1',
    num: '01',
    sub: 'Tổng Quan & Kiến Trúc • Cuộc Cách Mạng Video AI',
    title: 'Tổng Quan Google Veo 3 & Kiến Trúc Sinh Video Đỉnh Cao Của Google DeepMind',
    intro: 'Google Veo 3 là mô hình trí tuệ nhân tạo tạo sinh video tiên tiến nhất của Google DeepMind, đánh dấu bước nhảy vọt vượt bậc trong ngành công nghiệp điện ảnh và sáng tạo nội dung số. Veo 3 kết hợp kiến trúc Diffusion Transformer (DiT) với khả năng thấu hiểu ngôn ngữ tự nhiên sâu sắc, cho phép sản xuất video độ phân giải cao 1080p và nâng cấp 4K chuẩn điện ảnh với độ dài vượt trội.',
    b1Title: 'Sự Tiến Hóa Của Dòng Mô Hình Veo & Các Nền Tảng Ứng Dụng',
    b1Content: `• <strong>Từ Veo 1, Veo 2 đến Veo 3:</strong> Cải thiện vượt bậc về tính chân thực của vật lý, độ mượt mà khung hình (24fps, 60fps), loại bỏ hoàn toàn các lỗi nhấp nháy (flickering) và biến dạng cơ thể.<br>• <strong>Các bề mặt tiếp cận:</strong><br>- <strong>VideoFX (labs.google):</strong> Sân chơi thử nghiệm sáng tạo trực tiếp cho nhà sáng tạo nội dung.<br>- <strong>Google Flow (flow.google.com):</strong> Xưởng phim AI tích hợp kịch bản, âm nhạc và phân cảnh.<br>- <strong>YouTube Shorts Dream Screen:</strong> Tích hợp sinh phông nền và video ngắn trực tiếp cho hàng tỷ người dùng YouTube.<br>- <strong>Google Cloud Vertex AI:</strong> Cung cấp API cấp doanh nghiệp cho các hãng phim, công ty quảng cáo và nhà phát triển phần mềm.`,
    b2Title: 'Kiến Trúc Diffusion Transformer (DiT) & Mã Hóa Video Không-Thời Gian',
    b2Content: `• <strong>Spatiotemporal Video Compression:</strong> Nén video theo cả 3 chiều: không gian (chiều rộng x, chiều cao y) và thời gian (chiều thời gian t) thành các latent patches cô đọng.<br>• <strong>Hiểu biết ngôn ngữ điện ảnh:</strong> Mô hình được huấn luyện đa phương thức (Multimodal Video-Text Alignment) trên hàng triệu giờ video chất lượng cao, giúp Veo 3 hiểu chính xác các thuật ngữ máy quay, ống kính và ánh sáng chuyên nghiệp.`,
    quizzes: [
      {
        q: '1. Đơn vị nào thuộc Google đã nghiên cứu và phát triển dòng mô hình video AI Google Veo?',
        opts: ['Google DeepMind', 'Google Maps Platform', 'Google Chrome OS Team', 'Google Hardware Division'],
        ans: 0,
        exp: 'Chính xác! Google Veo là thành tựu nghiên cứu tiên phong của đội ngũ trí tuệ nhân tạo Google DeepMind.'
      },
      {
        q: '2. Nền tảng nào của Google cho phép các nhà phát triển và doanh nghiệp gọi API của Veo để tự động hóa sản xuất video trên quy mô lớn?',
        opts: ['Google Cloud Vertex AI', 'Google Play Store', 'Google Classroom', 'Google Keep'],
        ans: 0,
        exp: 'Chính xác! Vertex AI là nền tảng điện toán đám mây doanh nghiệp cung cấp API Veo chính thức cho các ứng dụng thương mại.'
      },
      {
        q: '3. Kiến trúc nền tảng giúp Veo 3 nén và sinh video mượt mà theo cả không gian và thời gian là gì?',
        opts: ['Diffusion Transformer (DiT) với cơ chế Spatiotemporal Patches', 'Mạng nơ-ron hồi quy RNN đơn giản', 'Thuật toán nén ảnh JPEG cổ điển', 'Cây quyết định Random Forest'],
        ans: 0,
        exp: 'Chính xác! Kiến trúc Diffusion Transformer (DiT) xử lý các khối video không-thời gian (Spatiotemporal patches) là chìa khóa tạo ra các thước phim mượt mà và chân thực.'
      },
      {
        q: '4. Veo được tích hợp vào tính năng "Dream Screen" của nền tảng nào để hỗ trợ hàng triệu nhà sáng tạo nội dung?',
        opts: ['YouTube Shorts', 'Gmail Compose', 'Google Sheets', 'Google Calculator'],
        ans: 0,
        exp: 'Chính xác! Dream Screen trên YouTube Shorts sử dụng sức mạnh của Veo để tạo phông nền video AI sống động theo lời nhắc của người sáng tạo.'
      }
    ]
  },
  {
    id: 'bai2',
    num: '02',
    sub: 'Cinematic Prompting • Công Thức Viết Lời Nhắc',
    title: 'Nghệ Thuật Cinematic Prompt Engineering: Công Thức Viết Lời Nhắc Chuẩn Đạo Diễn',
    intro: 'Để Veo 3 biến ý tưởng trong đầu bạn thành những thước phim điện ảnh chuẩn Hollywood, bạn không thể sử dụng những câu lệnh chung chung. Nghệ thuật Cinematic Prompting đòi hỏi một cấu trúc giải phẫu câu lệnh chặt chẽ, kết hợp chính xác giữa chủ thể, hành động, bối cảnh, góc máy và hiệu ứng ánh sáng.',
    b1Title: 'Công Thức Giải Phẫu Prompt Điện Ảnh 6 Thành Phần',
    b1Content: `• <strong>Công thức chuẩn:</strong> <code>[Chủ thể] + [Hành động] + [Bối cảnh] + [Chuyển động Camera &amp; Ống kính] + [Ánh sáng &amp; Không khí] + [Thông số Kỹ thuật]</code>.<br>• <strong>Ví dụ mẫu:</strong> <em>"Cinematic medium shot of an elderly Vietnamese artisan meticulously carving lacquer art, warm golden hour sunlight streaming through wooden shutters, slow push-in tracking shot, shallow depth of field, 85mm lens, dust motes floating in light rays, photorealistic 4k, 24fps cinematic film look."</em>`,
    b2Title: 'Từ Điển Thuật Ngữ Điện Ảnh Cần Nắm Vững',
    b2Content: `• <strong>Cỡ cảnh (Shot Sizes):</strong> Extreme Wide Shot (Toàn cảnh rộng), Wide Shot, Medium Shot (Trung cảnh), Close-up (Cận cảnh), Extreme Close-up (Đặc tả chi tiết ánh mắt, giọt nước).<br>• <strong>Ánh sáng (Lighting Styles):</strong> Golden hour (Giờ vàng hoàng hôn), Volumetric lighting (Ánh sáng luồng sương khói), Chiaroscuro (Tương phản sáng tối kịch tính Rembrandt), Moody neon cyberpunk, Backlit (Ngược sáng tạo đường viền tóc).<br>• <strong>Phong cách chất phim:</strong> 35mm film grain, Kodachrome vintage, IMAX 70mm crisp detail, anamorphic lens flare.`,
    quizzes: [
      {
        q: '1. Cấu trúc một prompt điện ảnh chuyên nghiệp cho Google Veo 3 nên bao gồm những yếu tố cốt lõi nào?',
        opts: ['Chủ thể, Hành động, Bối cảnh, Chuyển động Camera & Ống kính, Ánh sáng và Thông số kỹ thuật', 'Chỉ cần một từ khóa ngắn gọn duy nhất', 'Đoạn văn thơ lục bát', 'Đường dẫn liên kết website'],
        ans: 0,
        exp: 'Chính xác! Công thức 6 thành phần cung cấp đủ chi tiết không gian, chuyển động và phong cách để mô hình DiT diễn hoạt chính xác nhất.'
      },
      {
        q: '2. Thuật ngữ điện ảnh "Extreme Close-up" (ECU) thường được dùng để chỉ cỡ cảnh nào?',
        opts: ['Cảnh đặc tả cực cận vào một chi tiết nhỏ (như con ngươi mắt, ngón tay)', 'Toàn cảnh thành phố nhìn từ vệ tinh', 'Cảnh quay từ xa thấy toàn bộ cơ thể', 'Cảnh quay xe ô tô đang chạy'],
        ans: 0,
        exp: 'Chính xác! Extreme Close-up phóng đại tối đa một chi tiết cảm xúc tinh tế trên khuôn mặt hoặc một vật thể nhỏ.'
      },
      {
        q: '3. Để tạo ra cảnh phim có các tia sáng mặt trời chiếu xuyên qua kẽ lá hoặc cửa sổ tạo thành các luồng ánh sáng sương mờ rõ rệt, bạn nên dùng từ khóa ánh sáng nào?',
        opts: ['Volumetric lighting (God rays)', 'Flat fluorescent light', 'Total darkness', 'Overexposed midday sun'],
        ans: 0,
        exp: 'Chính xác! Volumetric lighting (hay God rays / Crepuscular rays) tạo ra hiệu ứng các luồng sáng xuyên qua không khí bụi sương cực kỳ ấn tượng.'
      },
      {
        q: '4. Chuẩn tốc độ khung hình (frame rate) kinh điển tạo nên cảm giác "chất phim điện ảnh" (cinematic look) truyền thống là:',
        opts: ['24 frames per second (24fps)', '120 frames per second (120fps)', '15 frames per second (15fps)', '240 frames per second (240fps)'],
        ans: 0,
        exp: 'Chính xác! Tốc độ 24fps là tiêu chuẩn vàng của ngành công nghiệp điện ảnh suốt hơn một thế kỷ qua, mang lại độ nhòe chuyển động (motion blur) tự nhiên.'
      }
    ]
  },
  {
    id: 'bai3',
    num: '03',
    sub: 'Mô Phỏng Vật Lý • Nhất Quán Không-Thời Gian',
    title: 'Mô Phỏng Vật Lý Học & Tính Nhất Quán Không Gian - Thời Gian (Temporal Consistency)',
    intro: 'Thách thức lớn nhất của các mô hình video AI trước đây là hiện tượng nhấp nháy (flickering), biến dạng cơ thể (morphing) và vi phạm các định luật vật lý cơ bản. Veo 3 giải quyết triệt để vấn đề này nhờ mạng nơ-ron được huấn luyện sâu sắc về quy luật cơ học chất lưu, trọng lực và sự phản xạ ánh sáng.',
    b1Title: 'Hiểu Biết Sâu Sắc Về Các Quy Luật Vật Lý Thực Nghiệm',
    b1Content: `• <strong>Động lực học chất lưu:</strong> Dòng nước chảy, sóng biển đập vào vách đá, giọt cà phê bắn tung tóe tuân thủ chính xác cơ học chất lỏng Navier-Stokes.<br>• <strong>Quang học &amp; Đổ bóng chân thực:</strong> Bóng đổ di chuyển mượt mà tương ứng với hướng nguồn sáng, bề mặt kim loại phản chiếu đúng bối cảnh chuyển động xung quanh.<br>• <strong>Động lực học trang phục &amp; vật liệu:</strong> Vải lụa bay mềm mại trong gió, tóc chuyển động tự nhiên theo quán tính bước đi của nhân vật.`,
    b2Title: 'Duy Trì Tính Nhất Quán Không Gian - Thời Gian (Temporal Consistency)',
    b2Content: `• <strong>Bảo toàn đặc điểm nhân vật:</strong> Khuôn mặt, nốt ruồi, trang phục và phụ kiện của nhân vật không bị biến dạng khi nhân vật quay đầu 360° hoặc bước đi ra xa máy quay.<br>• <strong>Bảo toàn cấu trúc hình học bối cảnh:</strong> Khi máy quay lướt qua một căn phòng rồi quay trở lại, các đồ vật trên bàn vẫn nằm nguyên vị trí cũ, không bị "sinh ảo" hay biến mất bất thường.`,
    quizzes: [
      {
        q: '1. Khái niệm "Temporal Consistency" (Tính nhất quán theo thời gian) trong video AI có ý nghĩa gì?',
        opts: ['Sự ổn định và bảo toàn liên tục về hình dáng nhân vật, màu sắc và bối cảnh qua từng khung hình mà không bị méo mó hay nhấp nháy', 'Video có thời lượng vô hạn', 'Tốc độ xuất video nhanh gấp 10 lần', 'Khả năng xem lại video nhiều lần'],
        ans: 0,
        exp: 'Chính xác! Temporal Consistency là thước đo quan trọng nhất của mô hình video AI, đảm bảo các chi tiết không bị biến dạng bất thường giữa các khung hình liên tiếp.'
      },
      {
        q: '2. Khi mô phỏng cảnh một cốc nước thủy tinh rơi xuống sàn gạch vỡ tan trong Veo 3, mô hình thể hiện ưu thế vượt trội ở điểm nào?',
        opts: ['Mô phỏng chân thực quỹ đạo rơi tự do, mảnh vỡ văng theo quán tính và chất lỏng bắn tung tóe theo quy luật thủy khí động lực học', 'Cốc nước biến thành con chim bay đi', 'Nước biến mất không có lý do', 'Mặt sàn bị thủng một lỗ lớn'],
        ans: 0,
        exp: 'Chính xác! Veo 3 được huấn luyện để hiểu cơ chế va chạm, trọng lực và động lực học chất lỏng như trong thế giới thực.'
      },
      {
        q: '3. Hiện tượng các chi tiết trên khuôn mặt nhân vật bị thay đổi méo mó hoặc mọc thêm ngón tay khi chuyển động trong các mô hình video AI đời cũ được gọi là:',
        opts: ['Hallucination & Morphing artifacts', 'High-definition rendering', 'Motion blur điện ảnh', 'Depth of field'],
        ans: 0,
        exp: 'Chính xác! Morphing artifacts là lỗi biến dạng không mong muốn do mô hình không duy trì được biểu diễn không gian 3D ổn định qua thời gian.'
      },
      {
        q: '4. Yếu tố nào giúp Veo 3 duy trì ánh sáng phản chiếu trên mặt hồ nước chính xác khi máy quay chuyển động?',
        opts: ['Mô hình hóa sự thay đổi góc tới và góc phản xạ ánh sáng tương ứng với vị trí camera ảo', 'Sử dụng một bức ảnh cố định dán lên mặt nước', 'Xóa bỏ hoàn toàn mặt nước', 'Giảm độ phân giải xuống mức thấp'],
        ans: 0,
        exp: 'Chính xác! Veo 3 liên kết chặt chẽ giữa vị trí camera ảo và nguồn sáng, giúp các vệt sáng phản chiếu thay đổi góc nhìn chuẩn xác.'
      }
    ]
  },
  {
    id: 'bai4',
    num: '04',
    sub: 'Camera & Lens Control • Góc Máy Điện Ảnh',
    title: 'Điều Khiển Góc Máy Ảo, Chuyển Động Camera & Kỹ Thuật Ống Kính',
    intro: 'Một đạo diễn giỏi là người biết cách dùng ngôn ngữ máy quay để kể chuyện. Veo 3 cho phép bạn chỉ đạo một người quay phim ảo (Virtual Cinematographer) với độ chính xác tuyệt đối: từ các chuyển động xoay quanh chủ thể, lướt trên ray trượt, đến việc lựa chọn độ dài tiêu cự ống kính và độ sâu trường ảnh.',
    b1Title: 'Làm Chủ Các Trục Chuyển Động Camera Trong Veo 3',
    b1Content: `• <strong>Pan &amp; Tilt:</strong> Pan (xoay máy sang trái/phải theo phương ngang), Tilt (ngước máy lên cao hoặc chúi máy xuống thấp).<br>• <strong>Dolly &amp; Truck:</strong> Dolly In / Dolly Out (đẩy máy tiến sát vào hoặc kéo lùi xa chủ thể), Truck Left / Right (máy quay tịnh tiến song song sang ngang).<br>• <strong>Orbit Shot (Quay quỹ đạo):</strong> Máy quay bay vòng tròn 360° quanh chủ thể đang đứng yên hoặc chuyển động chậm, tạo cảm giác choáng ngợp.<br>• <strong>Dolly Zoom (Hiệu ứng Vertigo của Hitchcock):</strong> Vừa đẩy máy lại gần (Dolly In) vừa zoom ống kính rộng ra (Zoom Out), khiến hậu cảnh dãn nở kịch tính trong khi kích thước chủ thể không đổi.`,
    b2Title: 'Lựa Chọn Tiêu Cự Ống Kính &amp; Hiệu Ứng Xóa Phông',
    b2Content: `• <strong>Ống kính góc rộng (Wide-angle 16mm - 24mm):</strong> Mở rộng không gian bối cảnh, tạo cảm giác hùng vĩ và tăng cường cảm giác tốc độ khi máy quay lướt nhanh.<br>• <strong>Ống kính tiêu chuẩn &amp; Chân dung (50mm - 85mm):</strong> Tái tạo góc nhìn chân thực của mắt người, xóa phông nhẹ nhàng nổi bật nhân vật.<br>• <strong>Rack Focus (Chuyển nét):</strong> Đang lấy nét sắc sảo ở bông hoa tiền cảnh thì chuyển mượt mà sang lấy nét gương mặt nhân vật ở hậu cảnh.`,
    quizzes: [
      {
        q: '1. Hiệu ứng máy quay "Dolly Zoom" (Vertigo Effect) kinh điển tạo ra cảm giác thị giác như thế nào?',
        opts: ['Chủ thể giữ nguyên kích thước trong khi hậu cảnh bị bóp méo hoặc giãn nở bất ngờ, tạo cảm giác choáng váng kịch tính', 'Hình ảnh bị quay tròn 10 vòng', 'Toàn bộ màn hình chuyển sang màu đen trắng', 'Máy quay rung lắc mất kiểm soát'],
        ans: 0,
        exp: 'Chính xác! Dolly Zoom (kết hợp dolly camera và zoom ngược hướng) là kỹ thuật kinh điển của Alfred Hitchcock để bộc lộ cảm xúc sốc tâm lý.'
      },
      {
        q: '2. Khi muốn quay một cảnh rượt đuổi nghẹt thở với góc nhìn bao quát toàn bộ khung cảnh thành phố từ trên cao, từ khóa chuyển động camera nào phù hợp nhất?',
        opts: ['Aerial drone tracking shot', 'Static tripod close-up', 'Dutch angle macro', 'Macro rack focus'],
        ans: 0,
        exp: 'Chính xác! Aerial drone tracking shot mô phỏng máy bay không người lái bay bám theo chuyển động từ trên cao với tầm nhìn khoáng đạt.'
      },
      {
        q: '3. Kỹ thuật "Rack Focus" trong điện ảnh được định nghĩa là:',
        opts: ['Chuyển điểm lấy nét mượt mà từ một đối tượng ở tiền cảnh sang một đối tượng ở hậu cảnh (hoặc ngược lại)', 'Tắt nguồn máy quay đột ngột', 'Đổi màu sắc của toàn bộ khung hình', 'Tăng tốc độ video lên gấp đôi'],
        ans: 0,
        exp: 'Chính xác! Rack focus hướng sự chú ý của khán giả từ chủ thể này sang chủ thể khác trong cùng một cảnh quay liên tục.'
      },
      {
        q: '4. Để nhân vật nổi bật hoàn toàn trên nền hậu cảnh bị làm mờ lung linh (bokeh tròn đẹp mắt), bạn nên yêu cầu thông số ống kính nào trong prompt?',
        opts: ['Shallow depth of field, 85mm f/1.4 lens, beautiful creamy bokeh', 'Deep focus, f/22, everything sharp', 'Pin-hole camera', 'Fish-eye extreme lens'],
        ans: 0,
        exp: 'Chính xác! Khẩu độ lớn f/1.4 và tiêu cự 85mm tạo ra độ sâu trường ảnh mỏng (shallow depth of field) với hiệu ứng bokeh lung linh chuyên nghiệp.'
      }
    ]
  },
  {
    id: 'bai5',
    num: '05',
    sub: 'Image-to-Video & Video-to-Video • I2V & V2V',
    title: 'Chuyển Động Hóa Ảnh Tĩnh (I2V) & Biến Đổi Phong Cách Video (V2V)',
    intro: 'Không chỉ tạo video từ văn bản thuần túy (Text-to-Video), Veo 3 cung cấp hai vũ khí sáng tạo cực mạnh: Image-to-Video (I2V) - thổi hồn chuyển động điện ảnh vào bất kỳ bức ảnh tĩnh nào, và Video-to-Video (V2V) - tái cấu trúc hoàn toàn phong cách nghệ thuật của một video có sẵn mà vẫn giữ nguyên chuyển động gốc.',
    b1Title: 'Quy Trình Image-to-Video (I2V) Chuẩn Xác',
    b1Content: `• <strong>Input bức ảnh mỏ neo (Anchor Frame):</strong> Cung cấp một hình ảnh chất lượng cao (từ Midjourney, Imagen 3 hoặc ảnh chụp thực tế).<br>• <strong>Điều khiển hướng diễn hoạt:</strong> Sử dụng prompt để chỉ định rõ phần nào được chuyển động (ví dụ: nước chảy, mây trôi, ánh mắt chớp, tà áo bay) và phần nào giữ cố định (núi non, kiến trúc).<br>• <strong>Ưu điểm vượt trội:</strong> Đảm bảo 100% tính nhất quán về mặt visual concept đã được duyệt trước đó, loại bỏ tính bất định của Text-to-Video.`,
    b2Title: 'Video-to-Video Stylization (V2V)',
    b2Content: `• <strong>Giữ nguyên bộ khung chuyển động (Motion Transfer):</strong> Đưa vào một video quay người thật đang nhảy múa hoặc diễn xuất xuất sắc.<br>• <strong>Thay đổi phong cách toàn diện:</strong> Biến đổi người thật thành chiến binh anime phong cách Studio Ghibli, người máy kim loại cyberpunk, hoặc tượng đất sét stop-motion.<br>• <strong>Điều chỉnh môi trường ánh sáng:</strong> Biến cảnh quay ban ngày ngoài trời thành cảnh ban đêm dưới trời mưa tầm tã phản chiếu ánh đèn neon.`,
    quizzes: [
      {
        q: '1. Ưu điểm nổi bật nhất của phương thức Image-to-Video (I2V) so với Text-to-Video truyền thống là gì?',
        opts: ['Cho phép cố định chính xác thiết kế nhân vật và phong cách hình ảnh mong muốn từ bức ảnh gốc trước khi diễn hoạt', 'Video sinh ra nhẹ hơn về dung lượng', 'Không cần dùng máy tính để chạy', 'Chỉ xuất được video đen trắng'],
        ans: 0,
        exp: 'Chính xác! I2V giúp đạo diễn kiểm soát hoàn toàn tạo hình nhân vật, trang phục và bố cục từ bức ảnh mỏ neo trước khi đưa vào chuyển động.'
      },
      {
        q: '2. Tính năng Video-to-Video (V2V) trong Veo 3 hoạt động dựa trên nguyên lý cốt lõi nào?',
        opts: ['Trích xuất bộ khung chuyển động và nhịp điệu từ video gốc, sau đó diễn họa lại toàn bộ phong cách bề mặt theo prompt mới', 'Nén video thành file zip', 'Thêm phụ đề tự động vào video', 'Tăng tốc độ video lên 10 lần'],
        ans: 0,
        exp: 'Chính xác! V2V bảo tồn chuyển động vật lý, biểu cảm và cử động gốc nhưng thay thế hoàn toàn phong cách hình thái nghệ thuật theo ý muốn.'
      },
      {
        q: '3. Khi thực hiện I2V cho một bức tranh chân dung cổ điển, làm sao để tránh việc toàn bộ bối cảnh phía sau bị rung lắc không mong muốn?',
        opts: ['Chỉ rõ trong prompt các chuyển động cục bộ tinh tế (ví dụ: gentle breathing, blinking eyes, static background)', 'Không viết gì vào prompt', 'Xóa bối cảnh phía sau', 'Chèn nhạc lớn vào video'],
        ans: 0,
        exp: 'Chính xác! Lời nhắc cần phân tách rõ giữa chuyển động của chủ thể và sự tĩnh lặng của các yếu tố hậu cảnh.'
      },
      {
        q: '4. Đâu là một trường hợp ứng dụng thực tế đắt giá của tính năng V2V trong ngành công nghiệp điện ảnh?',
        opts: ['Diễn viên đóng thế quay các cảnh võ thuật phức tạp trong phòng phông xanh, sau đó V2V biến đổi thành quái vật hoặc siêu anh hùng CGI', 'Dùng để gửi email cho khách hàng', 'Dùng để in ảnh ra giấy', 'Dùng để quét mã vạch sản phẩm'],
        ans: 0,
        exp: 'Chính xác! Motion transfer qua V2V giúp tiết kiệm hàng triệu đô la chi phí làm kỹ xảo điện ảnh phức tạp.'
      }
    ]
  },
  {
    id: 'bai6',
    num: '06',
    sub: 'Inpainting & Outpainting • Chỉnh Sửa Video Theo Vùng',
    title: 'Biên Tập Video Theo Vùng Chọn: Video Inpainting & Outpainting Mở Rộng Khung Hình',
    intro: 'Không còn phải render lại toàn bộ video khi có một lỗi nhỏ! Veo 3 mang đến công nghệ Video Inpainting (thay thế hoặc thêm bớt chi tiết trong một vùng chọn có chuyển động) và Video Outpainting (mở rộng tỷ lệ khung hình từ dọc sang ngang điện ảnh mà không làm méo hình).',
    b1Title: 'Video Inpainting: Xóa Bỏ &amp; Thay Thế Đối Tượng Di Động',
    b1Content: `• <strong>Mặt nạ chuyển động (Temporal Masking):</strong> Bôi chọn một đối tượng (ví dụ: chiếc micro lọt vào khung hình, hoặc chiếc xe hơi hiện đại trong phim cổ trang).<br>• <strong>Bảo toàn chuyển động nền:</strong> Veo 3 tự động phân tích các khung hình trước và sau để "bù đắp" phông nền phía sau đối tượng bị xóa một cách hoàn hảo.<br>• <strong>Thay thế thông minh:</strong> Thay đổi trang phục của nhân vật từ áo sơ mi sang áo giáp hiệp sĩ trong khi cử động cơ thể vẫn giữ nguyên 100%.`,
    b2Title: 'Video Outpainting: Mở Rộng Khung Hình Đa Tỷ Lệ',
    b2Content: `• <strong>Từ video dọc (9:16) sang chuẩn màn ảnh rộng (16:9 / 2.39:1):</strong> Veo 3 tự động tưởng tượng và sinh tiếp hai bên cánh gà của khung hình với độ ăn khớp hoàn hảo về bối cảnh, ánh sáng và chuyển động mây trời.<br>• <strong>Tái sử dụng nội dung đa nền tảng:</strong> Biến một video ngắn TikTok thành một cảnh quay trailer điện ảnh trên YouTube màn ảnh rộng chỉ với một lệnh Outpaint.`,
    quizzes: [
      {
        q: '1. Tính năng Video Inpainting trong Veo 3 được sử dụng cho mục đích chính nào?',
        opts: ['Xóa bỏ chi tiết thừa hoặc thay thế đối tượng trong một vùng chọn cụ thể của video mà không làm ảnh hưởng đến phần còn lại', 'Tăng âm lượng của video', 'Dịch video sang tiếng nước ngoài', 'Đo dung lượng pin điện thoại'],
        ans: 0,
        exp: 'Chính xác! Inpainting cho phép chỉnh sửa cục bộ có chọn lọc ngay trên video đang chuyển động.'
      },
      {
        q: '2. Khi thực hiện Video Outpainting từ một video dọc tỷ lệ 9:16 sang tỷ lệ ngang 16:9, điều gì sẽ xảy ra?',
        opts: ['Mô hình tự động sinh thêm nội dung bối cảnh chuyển động ở hai bên viền sao cho hòa quyện liền mạch với video trung tâm', 'Video bị kéo dãn bẹp dí ngang sang hai bên', 'Hai bên mép màn hình bị biến thành vạch đen sì', 'Video bị cắt mất nửa trên và nửa dưới'],
        ans: 0,
        exp: 'Chính xác! Outpainting sáng tạo và mở rộng không gian thị giác hai bên cạnh mà không làm biến dạng tỷ lệ gốc.'
      },
      {
        q: '3. Điểm khác biệt quan trọng giữa Image Inpainting (ảnh tĩnh) và Video Inpainting (video động) là gì?',
        opts: ['Video Inpainting phải theo dõi và đồng bộ vùng mặt nạ (mask) theo chuyển động của đối tượng qua hàng trăm khung hình liên tiếp', 'Video Inpainting dễ làm hơn ảnh tĩnh', 'Video Inpainting không cần dùng AI', 'Không có điểm khác biệt nào'],
        ans: 0,
        exp: 'Chính xác! Video Inpainting đòi hỏi thuật toán theo dõi quang sai và bảo toàn tính nhất quán thời gian cực kỳ phức tạp.'
      },
      {
        q: '4. Một đoàn làm phim quay cảnh thời Trung Cổ nhưng vô tình để lọt một chiếc máy bay trên bầu trời. Công cụ nào trong Veo 3 giải quyết nhanh nhất?',
        opts: ['Sử dụng Video Inpainting để khoanh vùng máy bay và thay thế bằng bầu trời mây trôi tự nhiên', 'Quay lại toàn bộ cảnh quay với chi phí hàng nghìn đô', 'Vẽ đè một hình vuông đen lên máy bay', 'Hủy bỏ dự án phim'],
        ans: 0,
        exp: 'Chính xác! Temporal Inpainting cho phép loại bỏ các yếu tố ngoại lai lọt vào khung hình một cách thần tốc.'
      }
    ]
  },
  {
    id: 'bai7',
    num: '07',
    sub: 'Foley & Audio Sync • Âm Thanh Điện Ảnh',
    title: 'Đồng Bộ Âm Thanh, Hiệu Ứng Tiếng Động (Foley) & Nhịp Điệu Dựng Phim',
    intro: 'Âm thanh chiếm 50% trải nghiệm điện ảnh. Veo 3 kết hợp cùng các mô hình âm thanh thế hệ mới của Google để tự động phân tích hành động thị giác và sinh ra hiệu ứng tiếng động môi trường (Foley SFX), tiếng bước chân, tiếng động cơ rít và nhịp điệu cắt cảnh chuẩn xác đến từng mili-giây.',
    b1Title: 'Cơ Chế Sinh Tiếng Động Môi Trường Tự Động (Foley Generation)',
    b1Content: `• <strong>Nhận diện chất liệu va chạm:</strong> Khi gót giày cao gót chạm xuống mặt đá cẩm thạch, âm thanh sinh ra có độ vang sắc nét; khi bước trên lá khô, âm thanh xào xạc giòn tan.<br>• <strong>Đồng bộ pha âm thanh và chuyển động (Audio-Visual Sync):</strong> Âm thanh tiếng sấm sét nổ rền vang chính xác ngay sau ánh chớp chói lòa; tiếng nổ súng khớp từng khung hình khói súng phụt ra đầu nòng.`,
    b2Title: 'Nhịp Điệu Cắt Dựng Video (Pacing &amp; Rhythm Editing)',
    b2Content: `• <strong>Beat-synced Generation:</strong> Sinh video theo nhịp điệu âm nhạc (BPM - Beats Per Minute), giúp các chuyển động nhảy múa, đổi góc máy hoặc va chạm hành động rơi đúng vào các nhịp phách mạnh (Drop / Downbeat).<br>• <strong>Tạo không gian âm thanh đa chiều (Spatial Audio):</strong> Khi xe ô tô chạy từ trái sang phải màn hình, âm thanh tiếng gầm rú của pô xe cũng di chuyển mượt mà từ tai nghe trái sang tai nghe phải.`,
    quizzes: [
      {
        q: '1. Khái niệm "Foley" trong ngành sản xuất phim và âm thanh video dùng để chỉ điều gì?',
        opts: ['Các hiệu ứng tiếng động sinh động mô phỏng âm thanh thực tế (tiếng bước chân, tiếng sột soạt quần áo, tiếng va đập đồ vật)', 'Lời thoại của diễn viên lồng tiếng', 'Bản nhạc nền giao hưởng không lời', 'Tiếng quạt gió làm mát máy tính'],
        ans: 0,
        exp: 'Chính xác! Foley là nghệ thuật tái tạo các âm thanh chuyển động vật lý hàng ngày để làm cho thước phim trở nên sống động và chân thực.'
      },
      {
        q: '2. Yếu tố cốt lõi giúp cảnh quay hành động trở nên nghẹt thở và cuốn hút khi kết hợp với âm nhạc là gì?',
        opts: ['Chuyển động hình ảnh và các điểm cắt cảnh được đồng bộ chuẩn xác với nhịp phách mạnh (Beats/Downbeat) của bản nhạc', 'Bật âm lượng lên mức tối đa làm rè loa', 'Chèn thật nhiều đoạn im lặng tuyệt đối', 'Không cho nhân vật chuyển động'],
        ans: 0,
        exp: 'Chính xác! Sự đồng bộ nhịp nhàng giữa thị giác và thính giác (Beat-matching) kích hoạt phản ứng cảm xúc hưng phấn mạnh mẽ của khán giả.'
      },
      {
        q: '3. Hiệu ứng âm thanh không gian (Spatial Audio) trong video mang lại trải nghiệm gì cho người xem đeo tai nghe?',
        opts: ['Âm thanh di chuyển định vị chính xác theo vị trí nguồn phát trên màn hình (từ trái sang phải, từ xa lại gần)', 'Âm thanh chỉ phát ra ở một bên tai', 'Âm thanh bị méo tiếng như dưới nước', 'Biến giọng nói thành tiếng robot'],
        ans: 0,
        exp: 'Chính xác! Spatial Audio tái tạo không gian 3 chiều, giúp người xem cảm nhận được phương hướng và khoảng cách của vật thể phát ra âm thanh.'
      },
      {
        q: '4. Khi tạo video cảnh mưa rơi trên mái tôn bằng Veo 3, hệ thống âm thanh thông minh sẽ tự động sinh ra âm thanh như thế nào?',
        opts: ['Tiếng rào rào giòn dã đặc trưng của giọt nước gõ liên hồi trên kim loại mỏng, biến đổi âm lượng theo độ lớn của hạt mưa', 'Tiếng còi tàu hỏa', 'Tiếng nhạc khiêu vũ tango', 'Không có bất kỳ âm thanh nào'],
        ans: 0,
        exp: 'Chính xác! Mô hình nhận diện ngữ cảnh vật liệu (nước tương tác với mái tôn) để sinh ra profile âm thanh vật lý chính xác nhất.'
      }
    ]
  },
  {
    id: 'bai8',
    num: '08',
    sub: 'Full Production Pipeline • Từ Kịch Bản Đến Final Cut',
    title: 'Quy Trình Sản Xuất Phim Hoàn Chỉnh: Từ Ý Tưởng Đến Bản Dựng Final Cut',
    intro: 'Làm chủ Veo 3 không chỉ là gõ vài câu lệnh ngẫu nhiên, mà là vận hành một dây chuyền làm phim kỹ thuật số hoàn chỉnh (Full Production Pipeline). Bạn sẽ học cách kết hợp Gemini Pro để viết kịch bản phân cảnh, tạo thư viện nhân vật nhất quán bằng Seed, và hậu kỳ chuyên nghiệp trên Premiere Pro / DaVinci Resolve.',
    b1Title: 'Quy Trình 5 Bước Sản Xuất Phim Ngắn Hoàn Toàn Bằng AI',
    b1Content: `• <strong>Bước 1: Kịch bản &amp; Phân cảnh (Scriptwriting &amp; Storyboarding):</strong> Sử dụng Gemini 1.5 Pro để lên ý tưởng, viết kịch bản chi tiết 3 hồi và bảng phân cảnh từng cú máy (Shot-list).<br>• <strong>Bước 2: Thiết lập Concept Art &amp; Nhân vật mỏ neo:</strong> Tạo ảnh concept nhân vật và bối cảnh chuẩn, lưu mã hạt giống (Seed number) và prompt tham chiếu.<br>• <strong>Bước 3: Sản xuất cảnh quay hàng loạt với Veo 3:</strong> Render từng cú máy từ Shot 1 đến Shot N với các góc máy toàn, trung, cận.<br>• <strong>Bước 4: Đồng bộ âm thanh &amp; Giọng đọc lồng tiếng:</strong> Kết hợp ElevenLabs cho giọng thoại diễn cảm và Google Audio FX cho tiếng động.<br>• <strong>Bước 5: Hậu kỳ dựng phim (Final Assembly):</strong> Cắt gọt, chỉnh màu (Color Grading) và xuất bản phẩm 4K trên Premiere Pro hoặc DaVinci Resolve.`,
    b2Title: 'Chiến Thuật Giữ Nhân Vật Nhất Quán Qua Toàn Bộ Phim',
    b2Content: `• <strong>Character Sheet:</strong> Tạo bảng mô tả nhân vật chi tiết về trang phục đặc trưng, kiểu tóc, màu mắt và phụ kiện cố định.<br>• <strong>Cố định Seed &amp; Image Prompt:</strong> Sử dụng bức ảnh chân dung gốc làm mỏ neo đầu vào cho mọi shot quay I2V tiếp theo.<br>• <strong>Tận dụng góc máy đa dạng:</strong> Xen kẽ giữa cảnh quay sau lưng, cảnh qua vai (Over-the-shoulder) và cảnh đặc tả chi tiết bàn tay để tạo nhịp phim mà không làm lộ nhược điểm AI.`,
    quizzes: [
      {
        q: '1. Bước đầu tiên mang tính quyết định trong quy trình sản xuất một bộ phim ngắn chuyên nghiệp bằng AI là gì?',
        opts: ['Xây dựng kịch bản chặt chẽ và lập bảng phân cảnh cú máy chi tiết (Shot-list)', 'Vào render video ngẫu nhiên ngay lập tức', 'Mua dàn máy tính đắt tiền nhất', 'Đăng tải video lên mạng trước khi làm'],
        ans: 0,
        exp: 'Chính xác! Một bộ phim hay bắt đầu từ kịch bản và bảng phân cảnh rõ ràng để định hướng cho các prompt sinh video tiếp theo.'
      },
      {
        q: '2. Bí quyết then chốt để duy trì ngoại hình một nhân vật không bị thay đổi từ cảnh này sang cảnh khác trong phim là gì?',
        opts: ['Sử dụng Character Sheet chi tiết và dùng chung một bức ảnh gốc làm mỏ neo (Anchor) cho các cảnh Image-to-Video', 'Mỗi cảnh mô tả một người hoàn toàn khác nhau', 'Không cho nhân vật xuất hiện trên màn hình', 'Đổi tên nhân vật liên tục'],
        ans: 0,
        exp: 'Chính xác! Cố định thông tin đặc điểm nhân vật qua Character Sheet và ảnh mỏ neo đảm bảo sự nhất quán xuyên suốt bộ phim.'
      },
      {
        q: '3. Khi hai cảnh quay liên tiếp có sự sai lệch nhẹ về tông màu ánh sáng, công đoạn nào trong hậu kỳ giúp cân bằng màu sắc hài hòa?',
        opts: ['Chỉnh màu & Khớp màu (Color Grading & Color Matching) trên phần mềm dựng phim', 'Xóa bỏ một trong hai cảnh', 'Tăng độ sáng màn hình điện thoại', 'Thêm phụ đề chữ màu đỏ'],
        ans: 0,
        exp: 'Chính xác! Color grading giúp cân chỉnh tông màu (color temperature, tint, exposure) để các cảnh quay do AI sinh ra hòa quyện tự nhiên như quay cùng một ngày.'
      },
      {
        q: '4. Việc xen kẽ các cỡ cảnh (Toàn cảnh - Trung cảnh - Cận cảnh) trong một phân đoạn phim có tác dụng gì?',
        opts: ['Tạo nhịp điệu kể chuyện điện ảnh tự nhiên, dẫn dắt cảm xúc người xem và che đi các hạn chế nhỏ của AI', 'Làm khán giả bị chóng mặt', 'Kéo dài thời gian render video', 'Giảm dung lượng file xuất ra'],
        ans: 0,
        exp: 'Chính xác! Ngôn ngữ điện ảnh chuẩn mực luôn kết hợp đa dạng các cỡ cảnh để tạo nên cấu trúc dẫn dắt câu chuyện cuốn hút.'
      }
    ]
  },
  {
    id: 'bai9',
    num: '09',
    sub: 'Bản Quyền & An Toàn AI • Công Nghệ SynthID',
    title: 'Bản Quyền Tác Giả, Đạo Đức AI & Thủy Vân Kỹ Thuật Số SynthID Của Google',
    intro: 'Khi sức mạnh tạo sinh video đạt đến mức độ chân thực tuyệt đối, các nguy cơ về tin giả (deepfake), vi phạm bản quyền và đánh cắp danh tính trở thành vấn đề cấp bách. Google DeepMind trang bị cho Veo 3 công nghệ đóng dấu thủy vân kỹ thuật số SynthID tối tân cùng các bộ lọc an toàn nghiêm ngặt.',
    b1Title: 'Công Nghệ Thủy Vân Kỹ Thuật Số SynthID',
    b1Content: `• <strong>SynthID cho Video:</strong> Nhúng trực tiếp một tín hiệu thủy vân kỹ thuật số vô hình vào các pixel của từng khung hình video mà mắt người không thể nhận biết được.<br>• <strong>Tính bền vững siêu việt:</strong> Dấu thủy vân SynthID không thể bị phá hủy ngay cả khi video bị nén dung lượng, đổi định dạng (từ MP4 sang WebM), cắt cúp (crop), chỉnh màu hay áp dụng các bộ lọc làm mờ.<br>• <strong>Xác thực nguồn gốc:</strong> Cho phép các nền tảng kiểm tra và gắn nhãn "Được tạo bởi AI" một cách minh bạch, bảo vệ người xem khỏi thông tin sai lệch.`,
    b2Title: 'Quy Chuẩn Bản Quyền &amp; Khai Thác Thương Mại Hợp Pháp',
    b2Content: `• <strong>Bản quyền nội dung tạo ra:</strong> Khách hàng sử dụng dịch vụ trả phí trên Vertex AI sở hữu bản quyền khai thác thương mại đối với các video được tạo ra theo điều khoản của Google Cloud.<br>• <strong>Bộ lọc an toàn nội dung (Safety Filters):</strong> Tự động chặn đứng các yêu cầu tạo nội dung bạo lực, khiêu dâm, bắt chước khuôn mặt người nổi tiếng trái phép hoặc vi phạm bản quyền hình ảnh thương hiệu đã đăng ký.`,
    quizzes: [
      {
        q: '1. Công nghệ đóng dấu thủy vân kỹ thuật số độc quyền do Google DeepMind phát triển để nhận diện nội dung AI là gì?',
        opts: ['SynthID', 'Watermark123', 'CopyrightLabel', 'PixelStamp'],
        ans: 0,
        exp: 'Chính xác! SynthID là công nghệ thủy vân tiên tiến của Google DeepMind, nhúng trực tiếp vào cấu trúc pixel mà mắt người không thể thấy.'
      },
      {
        q: '2. Đặc tính ưu việt nhất của con dấu kỹ thuật số SynthID trong video là gì?',
        opts: ['Vô hình với mắt thường nhưng cực kỳ bền vững, không bị mất đi ngay cả khi video bị nén, cắt cúp hay đổi định dạng', 'Có hình logo Google to đè lên giữa màn hình', 'Làm video bị nhòe mờ', 'Tự động xóa video sau 24 giờ'],
        ans: 0,
        exp: 'Chính xác! SynthID có khả năng chống chịu cực cao trước các thao tác chỉnh sửa, nén video hay đổi màu sắc.'
      },
      {
        q: '3. Mục đích lớn nhất của việc gắn nhãn minh bạch các video do AI tạo ra trên các nền tảng mạng xã hội là:',
        opts: ['Ngăn chặn tin giả (Misinformation), deepfake lừa đảo và bảo vệ tính xác thực của thông tin xã hội', 'Làm cho video trông đẹp hơn', 'Tăng tốc độ tải video', 'Bắt người xem phải trả thêm phí'],
        ans: 0,
        exp: 'Chính xác! Minh bạch hóa nguồn gốc AI là tiêu chuẩn đạo đức hàng đầu để bảo vệ cộng đồng khỏi các hiểm họa deepfake thao túng dư luận.'
      },
      {
        q: '4. Khi sử dụng Veo 3 thương mại thông qua tài khoản trả phí trên Google Cloud Vertex AI, doanh nghiệp có quyền lợi gì về bản quyền?',
        opts: ['Sở hữu quyền sử dụng và khai thác thương mại các video được sinh ra theo thỏa thuận điều khoản của Google Cloud', 'Không được phép chia sẻ video cho bất kỳ ai', 'Phải nộp lại toàn bộ lợi nhuận cho Google', 'Chỉ được xem thử 1 lần duy nhất'],
        ans: 0,
        exp: 'Chính xác! Các gói dịch vụ điện toán đám mây Vertex AI cung cấp cam kết bản quyền thương mại rõ ràng cho doanh nghiệp.'
      }
    ]
  },
  {
    id: 'bai10',
    num: '10',
    sub: 'Enterprise Integration • Vertex AI API Automation',
    title: 'Tích Hợp Doanh Nghiệp: Lập Trình Vertex AI API & Tự Động Hóa Sản Xuất Video',
    intro: 'Đỉnh cao của việc ứng dụng Veo 3 là biến nó thành một "nhà máy sản xuất video tự động" phục vụ kinh doanh. Thông qua Vertex AI API, các kỹ sư phần mềm có thể viết kịch bản Python/Node.js để tự động hóa quy trình: từ nhận diện sản phẩm trong kho đến sinh hàng nghìn video quảng cáo cá nhân hóa theo thời gian thực.',
    b1Title: 'Lập Trình Gọi API Veo Trên Google Cloud Vertex AI',
    b1Content: `• <strong>Khởi tạo kết nối Vertex AI:</strong> Sử dụng thư viện <code>google-cloud-aiplatform</code> chính thức bằng Python.<br><pre class="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto"><code>from google.cloud import aiplatform

aiplatform.init(project="my-movie-studio", location="us-central1")
# Khởi tạo tác vụ sinh video Veo 3
model = aiplatform.Model("publishers/google/models/veo-003")
operation = model.generate_video(
    prompt="Cinematic drone shot of electric sports car speeding through neon Tokyo at night, 4k",
    aspect_ratio="16:9",
    duration_seconds=8
)
video_uri = operation.result().video_uri</code></pre>`,
    b2Title: 'Các Use-Cases Tự Động Hóa Thực Tế Cho Doanh Nghiệp',
    b2Content: `• <strong>Quảng cáo cá nhân hóa quy mô lớn (Dynamic Video Ads):</strong> Tự động tạo 10.000 biến thể video ngắn cho 10.000 sản phẩm khác nhau trên sàn thương mại điện tử chỉ trong một đêm.<br>• <strong>Bản tin tự động (Automated News Video):</strong> Đọc bài báo văn bản RSS, Gemini tóm tắt kịch bản và Veo 3 tự render video phóng sự minh họa hoàn chỉnh.<br>• <strong>Trò chơi điện tử &amp; Metaverse:</strong> Sinh các đoạn cắt cảnh (Cinematic cutscenes) động dựa theo quyết định và hành vi của người chơi trong game.`,
    quizzes: [
      {
        q: '1. Thư viện Python chính thức được sử dụng để kết nối và gọi mô hình Veo 3 trên Google Cloud là gì?',
        opts: ['google-cloud-aiplatform', 'google-video-maker-v1', 'deepmind-movie-py', 'opencv-python'],
        ans: 0,
        exp: 'Chính xác! Thư viện google-cloud-aiplatform là SDK chuẩn để tương tác với toàn bộ hệ sinh thái mô hình Foundation trên Vertex AI.'
      },
      {
        q: '2. Ứng dụng "Dynamic Product Ads" của Veo 3 trong thương mại điện tử giúp doanh nghiệp giải quyết bài toán lớn nào?',
        opts: ['Tự động hóa sản xuất hàng nghìn video quảng cáo sản phẩm chất lượng cao với chi phí và thời gian chỉ bằng một phần nhỏ so với quay thủ công', 'Tự động giảm giá sản phẩm về 0 đồng', 'Xóa bỏ website bán hàng', 'Tự động mua hàng thay cho người dùng'],
        ans: 0,
        exp: 'Chính xác! Tự động hóa sản xuất video cá nhân hóa quy mô lớn là bước đột phá cách mạng cho marketing thương mại điện tử hiện đại.'
      },
      {
        q: '3. Do tác vụ sinh video có khối lượng tính toán rất nặng, lệnh gọi API sinh video của Veo thường được xử lý theo phương thức nào?',
        opts: ['Bất đồng bộ (Asynchronous Operation / Long Running Operation) trả về tiến trình để kiểm tra kết quả sau', 'Đồng bộ khóa chặt màn hình chờ 2 tiếng', 'Không bao giờ trả về kết quả', 'Chỉ chạy được vào ban đêm'],
        ans: 0,
        exp: 'Chính xác! Các tác vụ sinh video lớn được xử lý dưới dạng Long Running Operation (LRO) bất đồng bộ, hệ thống sẽ thông báo khi video render xong.'
      },
      {
        q: '4. Kết hợp giữa mô hình ngôn ngữ lớn (Gemini) và mô hình sinh video (Veo 3) tạo thành quy trình tự động hóa nào?',
        opts: ['Gemini đóng vai trò biên kịch/đạo diễn viết prompt phân cảnh, sau đó Veo 3 đóng vai trò quay phim diễn hoạt các cảnh quay', 'Hai mô hình tranh cãi lẫn nhau', 'Làm máy chủ bị quá tải', 'Chỉ dùng để dịch thuật văn bản'],
        ans: 0,
        exp: 'Chính xác! Sự kết hợp giữa LLM (tư duy logic kịch bản) và DiT Video AI (năng lực tạo hình chuyển động) tạo thành một xưởng phim số tự động hóa hoàn hảo.'
      }
    ]
  }
];

// 10 Certification Exam Questions
const examQuestions = [
  {
    id: 'eq1',
    num: 1,
    topic: 'Kiến Trúc & Khung Nền',
    q: 'Kiến trúc cốt lõi nào giúp Google Veo 3 có khả năng thấu hiểu không gian - thời gian vượt trội và duy trì chuyển động vật lý mượt mà so với các mô hình video AI thế hệ cũ?',
    options: [
      'Diffusion Transformer (DiT) kết hợp nén Spatiotemporal Video Patches',
      'Mạng nơ-ron tích chập 2D CNN đơn thuần',
      'Mạng sinh đối nghịch GANs không có Transformer',
      'Thuật toán nội suy khung hình quang sai truyền thống'
    ],
    ans: 'A',
    sol: 'Veo 3 ứng dụng kiến trúc Diffusion Transformer (DiT) hiện đại, xử lý video dưới dạng các khối spatiotemporal patches (không-thời gian 3 chiều), giúp mô hình nắm bắt sâu sắc mối tương quan vật lý và chuyển động xuyên suốt các khung hình.'
  },
  {
    id: 'eq2',
    num: 2,
    topic: 'Kỹ Thuật Prompting',
    q: 'Một đạo diễn muốn tạo ra một cảnh quay rùng rợn, trong đó máy quay vừa lùi xa nhân vật nhưng góc nhìn lại zoom cận vào gương mặt khiến hậu cảnh phía sau giãn nở méo mó đầy sợ hãi. Thuật ngữ máy quay nào bắt buộc phải đưa vào prompt?',
    options: [
      'Dolly Zoom (Vertigo Effect)',
      'Static wide landscape shot',
      'Fast forward timelapse',
      'Dutch tilt extreme close-up'
    ],
    ans: 'A',
    sol: 'Dolly Zoom (hay Vertigo effect) là kỹ thuật kinh điển kết hợp giữa việc di chuyển camera tịnh tiến và zoom quang học ngược chiều, tạo cảm giác hậu cảnh co giãn kịch tính trong khi kích thước chủ thể không đổi.'
  },
  {
    id: 'eq3',
    num: 3,
    topic: 'Độ Nhất Quán Nhân Vật',
    q: 'Trong quá trình sản xuất phim ngắn gồm 12 cảnh quay khác nhau với cùng một nhân vật chính, phương thức nào giúp đảm bảo khuôn mặt và trang phục của nhân vật không bị biến đổi ngẫu nhiên qua các cảnh?',
    options: [
      'Sử dụng phương thức Image-to-Video (I2V) với cùng một bức ảnh chân dung mỏ neo (Anchor) kết hợp Character Sheet',
      'Nhập lại một đoạn văn mô tả ngắn ngẫu nhiên cho mỗi cảnh',
      'Đổi hạt giống (seed) liên tục sau mỗi 5 giây',
      'Chỉ quay nhân vật ở khoảng cách siêu xa không thấy rõ mặt'
    ],
    ans: 'A',
    sol: 'Phương thức Image-to-Video (I2V) sử dụng một ảnh mỏ neo chuẩn đã duyệt làm gốc (Anchor Frame) kết hợp với các chỉ dẫn chi tiết về chuyển động trong prompt là chìa khóa vàng để duy trì tính nhất quán nhân vật tuyệt đối.'
  },
  {
    id: 'eq4',
    num: 4,
    topic: 'Chuyển Động Camera Ảo',
    q: 'Bạn muốn tạo một cảnh quay hoành tráng trong đó máy quay bay lượn trọn vẹn một vòng tròn 360° xung quanh một vận động viên điền kinh đang chuẩn bị xuất phát. Từ khóa chuyển động nào sẽ chỉ đạo Veo 3 thực hiện chính xác ý đồ này?',
    options: [
      '360-degree Orbit tracking shot around the athlete',
      'Camera pan left to right',
      'Camera tilt down to ground',
      'High-speed zoom in to the sky'
    ],
    ans: 'A',
    sol: 'Orbit tracking shot (hay Arc shot) là kỹ thuật điều khiển máy quay bay theo quỹ đạo tròn bao quanh chủ thể ở tâm, tạo chiều sâu không gian 3 chiều đầy cuốn hút.'
  },
  {
    id: 'eq5',
    num: 5,
    topic: 'Biên Tập Vùng Chọn Inpainting',
    q: 'Một cảnh quay hoàn hảo nhưng vô tình có một chiếc xe đạp hiện đại dựng ở góc sân nhà cổ thời phong kiến. Cách xử lý tối ưu và tiết kiệm chi phí nhất bằng Veo 3 là gì?',
    options: [
      'Sử dụng tính năng Video Inpainting khoanh vùng chiếc xe đạp và prompt mô tả thay thế bằng chum nước cổ hoặc phông nền tự nhiên',
      'Quay lại toàn bộ cảnh quay thực tế ngoài phim trường',
      'Lấy bút xóa vẽ đè lên màn hình máy tính',
      'Cắt bỏ toàn bộ phân đoạn đó khỏi bộ phim'
    ],
    ans: 'A',
    sol: 'Video Inpainting cho phép khoanh vùng đối tượng chuyển động không mong muốn và diễn hoạt lại mượt mà dựa trên sự liên kết ngữ cảnh của các khung hình xung quanh.'
  },
  {
    id: 'eq6',
    num: 6,
    topic: 'Mở Rộng Tỷ Lệ Outpainting',
    q: 'Một video quảng cáo thời trang ấn tượng được quay ở tỷ lệ dọc 9:16 cho TikTok, nay nhãn hàng muốn phát trên màn hình LED ngang tỷ lệ 16:9 tại trung tâm thương mại. Tính năng nào của Veo 3 giải quyết bài toán này mà không làm méo hình?',
    options: [
      'Video Outpainting mở rộng hai cạnh bên của khung hình với bối cảnh chuyển động liền mạch',
      'Kéo giãn bề ngang (Stretch) khiến người mẫu bị bẹp',
      'Phóng to cắt cúp (Crop) làm mất đầu và chân của người mẫu',
      'Để hai vạch đen khổng lồ ở hai bên'
    ],
    ans: 'A',
    sol: 'Video Outpainting tự động phân tích và tưởng tượng ra không gian tiếp nối ở hai bên cạnh, tạo thành một khung hình ngang 16:9 hoàn chỉnh với chuyển động tự nhiên.'
  },
  {
    id: 'eq7',
    num: 7,
    topic: 'Stylization Video-to-Video',
    q: 'Khi sử dụng tính năng Video-to-Video (V2V) để biến một đoạn phim quay người thật thành một thước phim hoạt hình Anime 3D, yếu tố nào từ video gốc được giữ lại nguyên vẹn?',
    options: [
      'Quỹ đạo chuyển động, nhịp điệu cử động cơ thể và góc máy quay',
      'Màu sắc da và tóc của người thật',
      'Độ phân giải thấp của camera điện thoại',
      'Tạp âm môi trường ồn ào'
    ],
    ans: 'A',
    sol: 'V2V trích xuất chuyển động học (motion dynamics) và sự diễn hoạt cử động cơ thể từ video gốc, sau đó phủ lên một lớp phong cách đồ họa nghệ thuật hoàn toàn mới.'
  },
  {
    id: 'eq8',
    num: 8,
    topic: 'Âm Thanh & Foley Sync',
    q: 'Điểm đột phá của hệ thống âm thanh thông minh trong Veo 3 khi kết hợp cùng mô hình sinh âm thanh của Google là gì?',
    options: [
      'Tự động phân tích chất liệu va chạm thị giác và đồng bộ tiếng động Foley chính xác theo từng chuyển động trong khung hình',
      'Tự động chèn một bài hát ngẫu nhiên không liên quan',
      'Tắt toàn bộ âm thanh để giữ yên tĩnh',
      'Chỉ phát ra tiếng bíp bíp đơn điệu'
    ],
    ans: 'A',
    sol: 'Veo 3 sở hữu khả năng liên kết nghe - nhìn (Audio-Visual Alignment), tự động nhận biết hành động va chạm cơ học để sinh ra hiệu ứng tiếng động Foley chuẩn xác cả về âm sắc lẫn thời điểm.'
  },
  {
    id: 'eq9',
    num: 9,
    topic: 'Bản Quyền & SynthID',
    q: 'Làm thế nào để các cơ quan báo chí và mạng xã hội có thể xác định một đoạn video phóng sự là sản phẩm nhân tạo do Google Veo sinh ra chứ không phải sự kiện thực tế?',
    options: [
      'Sử dụng thuật toán quét con dấu thủy vân vô hình SynthID đã được nhúng vào các pixel của video',
      'Bằng cách xem kỹ bằng mắt thường xem có logo Google không',
      'Hỏi ý kiến của cộng đồng mạng',
      'Kiểm tra tên file xem có chữ "veo" hay không'
    ],
    ans: 'A',
    sol: 'SynthID là công nghệ thủy vân kỹ thuật số của Google DeepMind được nhúng sâu vào ma trận pixel, vô hình trước mắt thường nhưng có thể giải mã xác thực bằng thuật toán chuyên dụng để chứng minh nguồn gốc AI.'
  },
  {
    id: 'eq10',
    num: 10,
    topic: 'Tự Động Hóa Vertex AI',
    q: 'Một công ty du lịch quốc tế muốn xây dựng hệ thống tự động sinh 1.000 video quảng cáo ngắn giới thiệu 1.000 điểm đến du lịch mỗi sáng dựa trên dữ liệu thời tiết và xu hướng người dùng. Kiến trúc giải pháp tối ưu nhất là gì?',
    options: [
      'Sử dụng Python Script trên Vertex AI: Gemini phân tích xu hướng để sinh prompt -> Gọi Veo API bất đồng bộ (LRO) để render video -> Lưu trữ trên Cloud Storage',
      'Thuê 500 nhà quay phim bay đến 1.000 thành phố mỗi buổi sáng',
      'Mở ứng dụng VideoFX bằng tay và bấm từng nút 1.000 lần',
      'Tải video của người khác trên mạng về cắt nhỏ'
    ],
    ans: 'A',
    sol: 'Sự kết hợp giữa Gemini (phân tích dữ liệu & sinh prompt điện ảnh) và Veo 3 API trên Vertex AI chạy ngầm dưới dạng Long Running Operations là mô hình kiến trúc tự động hóa sản xuất nội dung quy mô công nghiệp hàng đầu hiện nay.'
  }
];

// Generate Articles HTML
const articlesHtml = topics.map(t => {
  const quizzesHtml = t.quizzes.map((q, idx) => createQuiz(`${t.id}_q${idx + 1}`, q.q, q.opts, q.ans, q.exp)).join('\n');
  return `
      <!-- Bài ${t.num}: ${t.title} -->
      <article id="${t.id}" class="bg-white dark:bg-dark-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-extrabold text-sm border border-rose-200 dark:border-rose-800">
            CHUYÊN ĐỀ ${t.num}
          </span>
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">${t.sub}</span>
        </div>

        <div>
          <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
            ${t.title}
          </h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            ${t.intro}
          </p>
        </div>

        <!-- Section 1 -->
        <div class="p-5 rounded-2xl bg-rose-50/50 dark:bg-dark-card/50 border border-rose-100 dark:border-rose-950/40 space-y-3">
          <h3 class="text-base font-bold text-rose-950 dark:text-rose-300 flex items-center gap-2">
            <i class="fa-solid fa-video text-rose-600"></i> ${t.b1Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b1Content}
          </div>
        </div>

        <!-- Section 2 -->
        <div class="p-5 rounded-2xl bg-purple-50/50 dark:bg-dark-card/50 border border-purple-100 dark:border-purple-950/40 space-y-3">
          <h3 class="text-base font-bold text-purple-950 dark:text-purple-300 flex items-center gap-2">
            <i class="fa-solid fa-clapperboard text-purple-600"></i> ${t.b2Title}
          </h3>
          <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
            ${t.b2Content}
          </div>
        </div>

        <!-- Interactive Quizzes -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-rose-600"></i> Câu Hỏi Trắc Nghiệm Thực Hành (4 câu)
            </h4>
            <span class="text-xs text-gray-500 dark:text-gray-400">Tự động chấm điểm &amp; lưu tiến độ</span>
          </div>
          <div class="space-y-4">
            ${quizzesHtml}
          </div>
        </div>
      </article>`;
}).join('\n\n');

// Generate Mock Exam Questions HTML
const examCardsHtml = examQuestions.map(eq => {
  const letters = ['A', 'B', 'C', 'D'];
  const optsHtml = eq.options.map((opt, idx) => `
              <label class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-gray-700/80 hover:bg-rose-50 dark:hover:bg-rose-950/30 cursor-pointer transition">
                <input type="radio" name="${eq.id}" value="${letters[idx]}" class="mt-1 text-rose-600 focus:ring-rose-500">
                <span class="text-xs sm:text-sm text-gray-800 dark:text-gray-200"><strong class="text-rose-600 dark:text-rose-400 mr-1">${letters[idx]}.</strong> ${opt}</span>
              </label>`).join('\n');

  return `
            <!-- Câu ${eq.num} -->
            <div class="exam-card p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-black">
                  CÂU ${eq.num}
                </span>
                <span class="text-xs font-semibold text-gray-400 dark:text-gray-500">${eq.topic}</span>
              </div>
              <p class="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-relaxed">${eq.q}</p>
              <div class="grid grid-cols-1 gap-2.5 pt-1">
                ${optsHtml}
              </div>
            </div>`;
}).join('\n');

// Generate Solutions Review HTML
const solutionsReviewHtml = examQuestions.map(eq => `
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 space-y-2 text-xs sm:text-sm">
              <div class="flex items-center justify-between font-bold">
                <span class="text-rose-600 dark:text-rose-400">Câu ${eq.num}: ${eq.topic}</span>
                <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 text-xs">Đáp án đúng: ${eq.ans}</span>
              </div>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-xs bg-white dark:bg-dark-card p-3 rounded-lg border border-gray-100 dark:border-gray-700">${eq.sol}</p>
            </div>`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Google Veo 3 - Sáng Tạo Video Điện Ảnh Đỉnh Cao Bằng AI | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#080914',
              surface: '#111322',
              card: '#1A1D33'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #f43f5e; border-radius: 4px; }
    .veo-hero-bg {
      background: radial-gradient(circle at 25% 25%, #4c0519 0%, #030712 55%, #2e1065 100%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-200">

  <!-- Top Header / Navigation -->
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-surface/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-lg hover:opacity-90">
          <i class="fa-solid fa-graduation-cap text-xl"></i>
          <span class="hidden sm:inline">CodeHub</span>
        </a>
        <div class="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
        <div class="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs sm:text-sm font-semibold">
          <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
            <i class="fa-solid fa-film"></i> Google Veo 3
          </span>
          <a href="google_flow.html" class="px-2.5 py-1 rounded-lg text-violet-600 dark:text-violet-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Flow AI
          </a>
          <a href="gemini_google.html" class="px-2.5 py-1 rounded-lg text-cyan-600 dark:text-cyan-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-brain"></i> Gemini
          </a>
          <a href="antigravity.html" class="px-2.5 py-1 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-white dark:hover:bg-gray-700 flex items-center gap-1">
            <i class="fa-solid fa-robot"></i> Antigravity
          </a>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-clapperboard"></i>
          <span class="hidden sm:inline">Thi Đạo Diễn AI (60:00)</span>
          <span class="sm:hidden">Thi Đánh Giá</span>
        </button>
        <button id="theme-toggle" class="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition" aria-label="Đổi giao diện">
          <i id="theme-icon" class="fa-solid fa-moon"></i>
        </button>
        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition" aria-label="Menu bài học">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="veo-hero-bg text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-rose-900/40 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs font-semibold tracking-wide">
          <i class="fa-brands fa-google text-rose-400"></i> Google DeepMind • Generative Video AI Flagship
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Làm Chủ <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-300">Google Veo 3</span> &amp; Xưởng Phim AI Điện Ảnh
        </h1>
        <p class="text-gray-200 text-sm sm:text-base leading-relaxed">
          Khóa học toàn diện làm chủ mô hình tạo sinh video điện ảnh thế hệ mới nhất của Google DeepMind: Nghệ thuật Cinematic Prompting chuẩn Hollywood, kiểm soát góc máy ảo (Dolly zoom, Orbit, Rack focus), mô phỏng vật lý học chân thực, Image-to-Video &amp; Video-to-Video, Inpainting xóa đối tượng, Outpainting đa tỷ lệ, âm thanh Foley đồng bộ và lập trình tự động hóa với Vertex AI API.
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-film text-rose-400"></i> 10 Chuyên đề sản xuất phim AI</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-rose-400"></i> 40 Bài tập thực hành đạo diễn</span>
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-award text-amber-400"></i> Đánh giá năng lực Đạo diễn AI 60:00</span>
        </div>
      </div>

      <!-- Quick Learning Card -->
      <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 w-full md:w-80 shrink-0 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-rose-200">Tiến Độ Khóa Học</span>
          <span id="quiz-completed-count" class="text-lg font-black text-rose-300">0 / 40</span>
        </div>
        <div class="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
          <div id="progress-bar" class="bg-gradient-to-r from-rose-400 to-amber-400 h-full w-0 transition-all duration-300"></div>
        </div>
        <p class="text-xs text-gray-300 leading-relaxed">
          Thực hành các câu hỏi tình huống đạo diễn và biên tập phim dưới mỗi chuyên đề để tích lũy kinh nghiệm làm phim AI.
        </p>
        <div class="pt-2 border-t border-white/10 flex flex-col gap-2">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-play text-slate-950"></i> Thi Đạo Diễn AI (60:00)
          </button>
          <button onclick="resetAllQuizzes()" class="w-full py-2 px-3 text-xs text-center rounded-xl bg-white/15 hover:bg-white/25 transition text-white font-medium border border-white/20 flex items-center justify-center gap-2">
            <i class="fa-solid fa-rotate-right"></i> Làm lại từ đầu
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile Drawer Backdrop -->
  <div id="drawer-backdrop" class="fixed inset-0 bg-black/60 z-50 hidden transition-opacity lg:hidden" onclick="toggleDrawer(false)"></div>

  <!-- Mobile Drawer Content -->
  <div id="mobile-drawer" class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col">
    <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
      <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold">
        <i class="fa-solid fa-film"></i>
        <span>Mục Lục Google Veo 3</span>
      </div>
      <button onclick="toggleDrawer(false)" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    <div class="overflow-y-auto p-4 space-y-1 text-sm flex-1 sidebar-scroll">
      ${topics.map(t => `<a href="#${t.id}" onclick="toggleDrawer(false)" class="block px-3 py-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 text-gray-700 dark:text-gray-300 hover:text-rose-600 font-medium transition">Bài ${parseInt(t.num)}: ${t.sub}</a>`).join('\n      ')}
    </div>
  </div>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8">
    
    <!-- Desktop Sticky Sidebar -->
    <aside class="hidden lg:block w-72 shrink-0">
      <div class="sticky top-24 space-y-4">
        <div class="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700/60 font-bold text-sm text-rose-600 dark:text-rose-400">
            <i class="fa-solid fa-compass"></i>
            <span>Mục Lục 10 Chuyên Đề</span>
          </div>
          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
            ${topics.map(t => `<a href="#${t.id}" class="nav-link block px-2.5 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600 dark:hover:text-rose-400 transition font-medium">${parseInt(t.num)}. ${t.sub}</a>`).join('\n            ')}
          </nav>
        </div>

        <!-- Sidebar Certification Banner -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-indigo-950 text-white border border-rose-500/30 shadow-lg space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
            <i class="fa-solid fa-clapperboard"></i> Chứng Nhận Đạo Diễn AI
          </div>
          <p class="text-xs text-rose-100 leading-relaxed">
            Đánh giá toàn diện kỹ năng đạo diễn, kiểm soát góc máy, ánh sáng và tự động hóa video với Veo 3 qua 10 tình huống điện ảnh.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-3 rounded-xl bg-white text-rose-950 hover:bg-rose-50 text-xs font-black transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play text-rose-600"></i> Bắt đầu làm bài thi (60:00)
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 space-y-12">
      ${articlesHtml}

      <!-- Course Summary Banner -->
      <section class="bg-gradient-to-br from-rose-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 border border-rose-500/30 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-400/20 text-rose-300 text-xs font-semibold border border-rose-400/30">
            <i class="fa-solid fa-video text-amber-400"></i> Veo 3 Certified Film Director
          </div>
          <h2 class="text-2xl sm:text-3xl font-black">Sẵn Sàng Trở Thành Đạo Diễn Điện Ảnh Thời Đại Mới?</h2>
          <p class="text-sm text-rose-100 leading-relaxed">
            Bạn đã nắm vững toàn bộ nghệ thuật và công nghệ từ Google DeepMind Veo 3: viết prompt chuẩn điện ảnh, điều khiển chuyển động máy quay ảo, tạo hình nhân vật nhất quán, inpainting/outpainting và tự động hóa quy trình với Vertex AI. Hãy tham gia bài thi đánh giá 60 phút để nhận chứng chỉ Đạo Diễn Video AI Chuyên Nghiệp!
          </p>
          <div class="pt-2">
            <button onclick="openCourseQuizModal()" class="py-3 px-6 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 hover:opacity-90 text-slate-950 font-black text-sm shadow-xl transition flex items-center gap-2">
              <i class="fa-solid fa-clapperboard text-slate-950"></i> Bắt Đầu Bài Thi Đạo Diễn AI (60 Phút)
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-medium text-gray-700 dark:text-gray-300">
        Khóa Học Google Veo 3 - Sáng Tạo Video Điện Ảnh Đỉnh Cao Bằng AI • CodeHub Learning Platform
      </p>
      <p>
        Biên soạn theo tài liệu kỹ thuật chính thức của Google DeepMind Veo, Google Cloud Vertex AI &amp; Chuẩn công nghiệp làm phim kỹ thuật số.
      </p>
    </div>
  </footer>

  <!-- Modal Thi Đánh Giá Năng Lực Trực Tuyến -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <div class="bg-white dark:bg-dark-surface w-full max-w-4xl rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between border-b border-rose-800/50 shrink-0">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-rose-500/20 rounded-xl border border-rose-400/30 text-rose-300">
            <i class="fa-solid fa-clapperboard text-xl text-amber-400"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Phòng Đánh Giá Năng Lực Đạo Diễn Video AI • Google Veo 3</h3>
            <p class="text-xs text-rose-200">10 Tình Huống Kỹ Xảo Điện Ảnh Thực Tế • Chuẩn Google DeepMind</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <!-- Countdown Timer Display -->
          <div class="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-rose-400/30">
            <i class="fa-solid fa-stopwatch text-rose-400 animate-pulse"></i>
            <span id="examTimer" class="font-mono font-black text-sm sm:text-base text-rose-300 tracking-wider">60:00</span>
          </div>
          <button onclick="closeCourseQuizModal()" class="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body (Questions Form) -->
      <div class="p-6 overflow-y-auto flex-1 space-y-6">
        <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6">
          ${examCardsHtml}

          <!-- Submit Buttons -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700">
            <button type="button" onclick="restartExam()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold transition flex items-center justify-center gap-2">
              <i class="fa-solid fa-rotate-left"></i> Làm lại từ đầu
            </button>
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button type="button" onclick="closeCourseQuizModal()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs font-bold transition">
                Đóng
              </button>
              <button type="submit" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white text-xs font-black shadow-lg transition flex items-center justify-center gap-2">
                <i class="fa-solid fa-paper-plane"></i> Nộp Bài &amp; Xem Kết Quả
              </button>
            </div>
          </div>
        </form>

        <!-- Exam Result Box -->
        <div id="examResultBox" class="hidden p-5 rounded-2xl border transition-all duration-300 space-y-4">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div id="examResultTitle" class="font-black text-lg sm:text-xl flex items-center gap-2"></div>
            <div id="examScoreBadge" class="text-xs font-black px-3 py-1 rounded-full shrink-0"></div>
          </div>
          <p id="examFeedbackText" class="text-xs sm:text-sm leading-relaxed"></p>
          <div class="pt-2 flex items-center gap-3">
            <button type="button" onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-book-open"></i> Xem Lời Giải &amp; Phân Tích Kỹ Thuật
            </button>
            <button type="button" onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-rotate-right"></i> Thi lại
            </button>
          </div>
        </div>

        <!-- Solutions Review Container -->
        <div id="examSolutionsReview" class="hidden pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <h4 class="font-black text-sm text-rose-600 dark:text-rose-400 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Phân Tích &amp; Giải Pháp Cho 10 Tình Huống Điện Ảnh:
          </h4>
          <div class="space-y-3">
            ${solutionsReviewHtml}
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script>
    const STORAGE_KEY = 'veo3_course_solved_quizzes';
    const TOTAL_QUIZZES = 40;

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-400';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-gray-600';
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        applyTheme(!isDark);
      });
    }

    // Drawer Navigation
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    function toggleDrawer(open) {
      if (!mobileDrawer) return;
      if (open) {
        mobileDrawer.classList.remove('translate-x-full');
        if (drawerBackdrop) drawerBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer.classList.add('translate-x-full');
        if (drawerBackdrop) drawerBackdrop.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => toggleDrawer(true));
    }

    // Quiz Storage & Progress
    function getSolvedQuizzes() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      } catch (e) {
        return {};
      }
    }

    function saveSolvedQuiz(quizId, optionIndex, isCorrect) {
      const solved = getSolvedQuizzes();
      solved[quizId] = { optionIndex, isCorrect };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(solved)); } catch (e) {}
      updateProgressDisplay();
    }

    function checkQuiz(quizId, optionIndex, isCorrect, explanation) {
      const buttons = document.querySelectorAll('.quiz-btn-' + quizId);
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('bg-rose-100', 'border-rose-500', 'bg-rose-100', 'border-rose-500');
        if (idx === optionIndex) {
          if (isCorrect) {
            btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200', 'font-bold');
          } else {
            btn.classList.add('bg-rose-100', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-900', 'dark:text-rose-200');
          }
        }
      });

      const feedbackEl = document.getElementById('feedback-' + quizId);
      if (feedbackEl) {
        feedbackEl.classList.remove('hidden');
        feedbackEl.className = 'mt-3 p-3 rounded-lg text-xs font-medium border leading-relaxed ' +
          (isCorrect ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/30' : 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 border-rose-500/30');
        feedbackEl.innerHTML = (isCorrect ? '<i class="fa-solid fa-circle-check mr-1.5 text-emerald-600"></i>' : '<i class="fa-solid fa-circle-xmark mr-1.5 text-rose-600"></i>') + explanation;
      }

      saveSolvedQuiz(quizId, optionIndex, isCorrect);
    }

    function updateProgressDisplay() {
      const solved = getSolvedQuizzes();
      const count = Object.keys(solved).length;
      const pct = Math.round((count / TOTAL_QUIZZES) * 100);
      const countEl = document.getElementById('quiz-completed-count');
      const progressBarEl = document.getElementById('progress-bar');
      if (countEl) countEl.innerText = count + ' / ' + TOTAL_QUIZZES;
      if (progressBarEl) progressBarEl.style.width = pct + '%';
    }

    function resetAllQuizzes() {
      if (confirm('Bạn có chắc muốn đặt lại toàn bộ kết quả bài tập để làm lại từ đầu?')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
      }
    }

    // Live Countdown Timer & Exam Handling
    let examTimerInterval = null;
    let examSecondsLeft = 60 * 60;

    function updateExamTimerDisplay() {
      const timerEl = document.getElementById('examTimer');
      if (!timerEl) return;
      const m = Math.floor(examSecondsLeft / 60);
      const s = examSecondsLeft % 60;
      timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function startExamTimer() {
      stopExamTimer();
      updateExamTimerDisplay();
      examTimerInterval = setInterval(() => {
        if (examSecondsLeft > 0) {
          examSecondsLeft--;
          updateExamTimerDisplay();
        } else {
          stopExamTimer();
          alert('Hết giờ làm bài thi đạo diễn! Hệ thống sẽ tự động chấm điểm bài nộp của bạn.');
          submitCourseExam();
        }
      }, 1000);
    }

    function stopExamTimer() {
      if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
      }
    }

    function openCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (!examTimerInterval && examSecondsLeft === 60 * 60) {
          startExamTimer();
        }
      }
    }

    function closeCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    function restartExam() {
      if (confirm('Bạn có chắc muốn làm lại bài thi đánh giá năng lực đạo diễn từ đầu?')) {
        const form = document.getElementById('courseExamForm');
        if (form) form.reset();
        const resultBox = document.getElementById('examResultBox');
        if (resultBox) resultBox.classList.add('hidden');
        const reviewBox = document.getElementById('examSolutionsReview');
        if (reviewBox) reviewBox.classList.add('hidden');
        examSecondsLeft = 60 * 60;
        startExamTimer();
      }
    }

    function toggleSolutionsReview() {
      const reviewBox = document.getElementById('examSolutionsReview');
      if (reviewBox) {
        reviewBox.classList.toggle('hidden');
      }
    }

    const examAnswers = {
      eq1: 'A', eq2: 'A', eq3: 'A', eq4: 'A', eq5: 'A',
      eq6: 'A', eq7: 'A', eq8: 'A', eq9: 'A', eq10: 'A'
    };

    function submitCourseExam(event) {
      if (event && event.preventDefault) event.preventDefault();
      stopExamTimer();

      const form = document.getElementById('courseExamForm');
      if (!form) return;

      const formData = new FormData(form);
      let score = 0;
      for (let i = 1; i <= 10; i++) {
        if (formData.get('eq' + i) === examAnswers['eq' + i]) score++;
      }

      const resultBox = document.getElementById('examResultBox');
      const titleEl = document.getElementById('examResultTitle');
      const badgeEl = document.getElementById('examScoreBadge');
      const feedbackEl = document.getElementById('examFeedbackText');

      if (!resultBox || !titleEl || !badgeEl || !feedbackEl) return;
      resultBox.classList.remove('hidden');

      if (score === 10) {
        resultBox.className = 'p-5 rounded-2xl border bg-yellow-50 dark:bg-yellow-950/40 border-yellow-500/50 text-yellow-950 dark:text-yellow-200';
        titleEl.innerHTML = '<i class="fa-solid fa-trophy text-yellow-500 text-2xl"></i> Xuất Sắc! VEO 3 MASTER FILM DIRECTOR (ĐẠT ĐIỂM TUYỆT ĐỐI)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Trí tuệ đạo diễn AI xuất chúng! Bạn đã làm chủ hoàn hảo cả 10 kỹ năng làm phim điện ảnh tối tân của Google Veo 3: từ kiến trúc DiT, Dolly zoom kịch tính, nhất quán nhân vật qua I2V, Orbit shot 360 độ, Temporal Inpainting, Outpainting đa tỷ lệ, Motion transfer V2V, âm thanh Foley đồng bộ đến kiểm chứng SynthID và tự động hóa với Vertex AI API!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-rose-50 dark:bg-rose-950/40 border-rose-500/50 text-rose-950 dark:text-rose-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-rose-600 text-2xl"></i> Chúc Mừng! SENIOR AI VIDEO PRODUCER (HẠNG GIỎI)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-rose-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kiến thức sản xuất phim AI của bạn rất ấn tượng và chuyên nghiệp. Đạt mức Senior Producer chứng minh bạn có thể dẫn dắt các dự án kỹ xảo hình ảnh và video thương mại cao cấp!';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-purple-50 dark:bg-purple-950/40 border-purple-500/50 text-purple-950 dark:text-purple-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-purple-600 text-2xl"></i> ĐẠT CHỨNG CHỈ ASSOCIATE AI CREATOR!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-purple-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Bạn đã nắm vững các nguyên lý cơ bản của Veo 3. Hãy bấm "Xem Lời Giải & Phân Tích Kỹ Thuật" bên dưới để hoàn thiện nốt các kỹ năng nâng cao về Inpainting và quy trình Vertex AI nhé!';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-clapperboard text-amber-500 text-2xl"></i> VEO 3 VIDEO EXPLORER / Cần Rèn Luyện Thêm!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Làm phim bằng AI đòi hỏi sự kết hợp tinh tế giữa ngôn ngữ điện ảnh và kỹ thuật tham số. Hãy xem kỹ từng bước phân tích và lời giải chi tiết bên dưới nhé!';
      }

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    document.addEventListener('DOMContentLoaded', () => {
      updateProgressDisplay();
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outputPath, fullHtml, 'utf8');
console.log('Successfully created courses/veo3.html!');
