const fs = require('fs');

const { themes, glossary } = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_themes_base.json', 'utf8'));

const lessonsData = [
  // CHỦ ĐỀ 1: CUỘC SỐNG MUÔN MÀU
  {
    id: "bai-1",
    themeId: 1,
    number: 1,
    title: "Bài 1. Vẻ đẹp cuộc sống trong tác phẩm mĩ thuật",
    pages: "Trang 4 – 8",
    objectives: [
      "Nhận biết các yếu tố và nguyên lí tạo hình trong tác phẩm thể hiện đề tài cuộc sống",
      "Phân tích vẻ đẹp của con người, thiên nhiên và cảnh sinh hoạt qua các chất liệu mĩ thuật",
      "Vẽ hoặc sáng tác sản phẩm thể hiện góc nhìn cá nhân về nét đẹp đời sống xung quanh"
    ],
    keywords: ["Hiện thực cuộc sống", "Bố cục thị giác", "Hoà sắc", "Chất liệu hội hoạ", "Biểu cảm thẩm mĩ"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-rose-600 dark:text-rose-400">1. Nguồn cảm hứng bất tận từ hiện thực:</strong> Thiên nhiên, cảnh sinh hoạt, lao động sản xuất, con người và nhịp sống đời thường là nguồn đề tài phong phú nhất cho sáng tác mĩ thuật. Người nghệ sĩ chắt lọc từ thực tế, tái hiện qua lăng kính cảm xúc để tôn vinh cái đẹp và truyền tải thông điệp nhân văn.</p>
        <p><strong class="text-rose-600 dark:text-rose-400">2. Ngôn ngữ tạo hình:</strong> Để tác phẩm bộc lộ trọn vẹn chủ đề, người sáng tác vận dụng linh hoạt hệ thống ngôn ngữ tạo hình:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Bố cục:</strong> Sắp xếp mảng chính - mảng phụ cân đối, tạo nhịp điệu chuyển động hoặc tĩnh lặng theo ý đồ tư tưởng.</li>
          <li><strong>Đường nét & Hình khối:</strong> Nét dứt khoát gợi sự mạnh mẽ của lao động; nét mềm mại diễn tả vẻ dịu dàng của con người và cảnh vật.</li>
          <li><strong>Đậm nhạt & Hoà sắc:</strong> Tương phản sáng tối làm nổi bật trọng tâm; hoà sắc ấm gợi không khí sum vầy, hoà sắc lạnh tạo cảm giác bình yên hoặc suy tư.</li>
          <li><strong>Chất liệu đa dạng:</strong> Sơn dầu, sơn mài, lụa, khắc gỗ, màu bột... mỗi chất liệu mang một vẻ đẹp biểu cảm và cảm xúc bề mặt riêng biệt.</li>
        </ul>
        <p><strong class="text-rose-600 dark:text-rose-400">3. Phương pháp thưởng thức tác phẩm:</strong> Đọc hiểu tác phẩm từ lớp bề mặt thị giác (đối tượng, chất liệu, bố cục, hoà sắc) đến tầng sâu nội dung (thông điệp, tâm tư của tác giả đối với cuộc đời).</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Quan sát & Chọn lọc", desc: "Chọn một hình ảnh, khoảnh khắc đời thường giàu cảm xúc (lao động, sum họp gia đình, phố phường, lễ hội làng quê)." },
      { step: "Bước 2. Phác thảo bố cục", desc: "Phân chia mảng chính, mảng phụ; xác định tỉ lệ nhân vật và vị trí đặt điểm nhấn thị giác trong khuôn tranh." },
      { step: "Bước 3. Vẽ hình chi tiết & Sắc độ", desc: "Thể hiện rõ nét đặc điểm dáng điệu, trang phục, biểu cảm khuôn mặt và không gian bối cảnh xung quanh." },
      { step: "Bước 4. Hoàn thiện màu sắc", desc: "Thiết lập gam màu chủ đạo, diễn tả đậm nhạt, đẩy sáng tạo điểm nhấn và giữ sự hài hoà cho toàn bộ bức tranh." }
    ],
    evaluation: [
      "Thể hiện rõ ràng nội dung, chủ đề về vẻ đẹp cuộc sống con người hoặc thiên nhiên.",
      "Bố cục chặt chẽ, có trọng tâm chính - phụ rõ rệt; không gian có chiều sâu.",
      "Hoà sắc biểu cảm, kiểm soát tốt tương phản sáng tối và chất cảm của vật liệu."
    ],
    application: "Tổ chức góc triển lãm nhỏ 'Góc nhìn cuộc sống quanh em' tại lớp học; viết đoạn cảm nhận ngắn 5-7 câu chia sẻ thông điệp bức tranh với bạn bè.",
    quiz: [
      {
        q: "Nguồn cảm hứng phong phú và phổ biến nhất trong các tác phẩm mĩ thuật là gì?",
        options: ["Thế giới ảo trong trò chơi điện tử", "Hiện thực cuộc sống, con người, lao động và thiên nhiên", "Chỉ những câu chuyện thần thoại cổ đại", "Những công thức toán học trừu tượng"],
        answer: 1,
        explain: "Thiên nhiên, đời sống sinh hoạt, con người và lao động luôn là suối nguồn cảm hứng chân thực và dồi dào nhất của mĩ thuật tạo hình."
      },
      {
        q: "Trong tác phẩm hội hoạ, yếu tố nào đóng vai trò xác định trật tự sắp xếp giữa các mảng hình chính và mảng hình phụ?",
        options: ["Bố cục thị giác", "Khung tranh bằng gỗ", "Kích thước chữ kí của tác giả", "Giá vẽ"],
        answer: 0,
        explain: "Bố cục là cách tổ chức, sắp xếp các yếu tố tạo hình (hình, nét, mảng, không gian) nhằm tạo ra sự cân bằng, nhịp điệu và làm nổi bật chủ đề chính."
      },
      {
        q: "Để tạo không khí ấm áp, sum vầy và tràn đầy sinh khí cho bức tranh cảnh bữa cơm gia đình, hoạ sĩ thường sử dụng hoà sắc nào?",
        options: ["Hoà sắc lạnh với gam xanh lục đậm và xám", "Hoà sắc đen trắng đơn điệu", "Hoà sắc ấm nóng với gam vàng, cam, nâu ấm", "Chỉ dùng một màu tím tuyền"],
        answer: 2,
        explain: "Các gam màu ấm nóng (vàng, cam, đỏ, nâu ấm) mang lại cảm giác thân thương, ấm áp và gần gũi cho không gian sinh hoạt gia đình."
      },
      {
        q: "Khi thưởng thức một tác phẩm mĩ thuật, trình tự phân tích khoa học và toàn diện nhất là gì?",
        options: ["Chỉ nhìn vào giá tiền của bức tranh", "Quan sát đối tượng, bố cục, màu sắc, chất liệu rồi suy ngẫm về thông điệp ý nghĩa", "Chỉ đọc tên tác giả mà không xem hình", "Chỉ đếm số lượng người có trong tranh"],
        answer: 1,
        explain: "Quy trình thưởng thức chuẩn gồm quan sát yếu tố thị giác trực quan (hình, chất liệu, bố cục, hoà sắc), sau đó phân tích và cảm thụ chiều sâu nội dung."
      }
    ]
  },
  {
    id: "bai-2",
    themeId: 1,
    number: 2,
    title: "Bài 2. Thiết kế phụ kiện thời trang",
    pages: "Trang 9 – 13",
    objectives: [
      "Hiểu công năng và giá trị thẩm mĩ của các phụ kiện thời trang (túi xách, thắt lưng, vòng tay, mũ, khăn)",
      "Vận dụng nguyên lí cân đối, nhịp điệu và tương phản để thiết kế bản vẽ hoặc tạo mẫu phụ kiện",
      "Tận dụng vật liệu sẵn có, thân thiện môi trường để hoàn thiện một phụ kiện thời trang độc đáo"
    ],
    keywords: ["Mĩ thuật ứng dụng", "Phụ kiện thời trang", "Bản vẽ kĩ thuật mẫu", "Công năng sử dụng", "Vật liệu tái chế"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-rose-600 dark:text-rose-400">1. Vai trò của phụ kiện trong thời trang:</strong> Phụ kiện (túi, mũ, khăn, trang sức, thắt lưng...) không chỉ đảm nhận công năng bảo vệ hoặc chứa đựng mà còn là điểm nhấn thị giác quan trọng, tôn vinh cá tính và phong cách của người mặc.</p>
        <p><strong class="text-rose-600 dark:text-rose-400">2. Yêu cầu thiết kế sản phẩm ứng dụng:</strong> Thiết kế mĩ thuật ứng dụng luôn phải giải quyết hài hoà phương trình giữa <em>Thẩm mĩ (Aesthetics)</em> và <em>Công năng (Functionality)</em>:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Hình thức & Tỉ lệ:</strong> Kích thước phải phù hợp với nhân trắc học con người, tỉ lệ các chi tiết cân đối, màu sắc hài hoà với trang phục.</li>
          <li><strong>Công năng & Tiện ích:</strong> Dễ dàng cầm nắm, đóng mở, cất giữ đồ đạc, êm ái và an toàn khi tiếp xúc với da.</li>
          <li><strong>Vật liệu & Kết cấu:</strong> Chọn vật liệu bền vững (vải bố canvas, da nhân tạo, cói tre, hạt gỗ, sợi len dệt, kim loại không gỉ).</li>
        </ul>
        <p><strong class="text-rose-600 dark:text-rose-400">3. Bản vẽ thiết kế:</strong> Gồm hình chiếu thẳng mặt trước, mặt bên và mặt đáy sản phẩm, có ghi chú kích thước và vật liệu dự kiến.</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Xác định ý tưởng & Công năng", desc: "Lựa chọn loại phụ kiện cần làm (ví dụ: túi tote đeo vai, túi đựng bút, quạt trang trí, nơ cài tóc) và đối tượng sử dụng." },
      { step: "Bước 2. Vẽ phác thảo tạo dáng", desc: "Vẽ phác nhiều phương án tạo hình dáng ngoài, vị trí quai đeo, khoá bấm và họa tiết trang trí bề mặt." },
      { step: "Bước 3. Cắt rập & Gia công vật liệu", desc: "Triển khai bản rập mẫu lên giấy xi măng, đặt lên vật liệu (vải vụn, da, cói) rồi cắt chính xác theo đường bao." },
      { step: "Bước 4. Lắp ráp & Hoàn thiện", desc: "May, khâu hoặc đính kết các bộ phận bằng chỉ bền, bổ sung phụ kiện trang trí (nút gỗ, thêu họa tiết, tua rua)." }
    ],
    evaluation: [
      "Ý tưởng tạo dáng sáng tạo, độc đáo, thể hiện phong cách thẩm mĩ cá nhân.",
      "Đảm bảo đầy đủ công năng sử dụng thực tế (đựng vừa đồ, quai đeo êm ái, chắc chắn).",
      "Kĩ thuật cắt may, liên kết tỉ mỉ, mép biên gọn gàng, đường khâu thẩm mĩ."
    ],
    application: "Tổ chức buổi trình diễn thời trang tái chế Mini Fashion Show trong buổi sinh hoạt lớp hoặc làm quà tặng sinh nhật bạn thân.",
    quiz: [
      {
        q: "Hai yếu tố cốt lõi bắt buộc phải song hành trong bất kì sản phẩm mĩ thuật ứng dụng nào là gì?",
        options: ["Độ nặng và giá tiền cao", "Tính thẩm mĩ và công năng sử dụng thực tế", "Sự phức tạp và chất liệu độc quyền", "Chỉ cần vẽ đẹp trên giấy mà không cần dùng được"],
        answer: 1,
        explain: "Mĩ thuật ứng dụng khác với mĩ thuật tạo hình thuần tuý ở chỗ sản phẩm vừa phải đẹp mắt (thẩm mĩ) vừa phải phục vụ nhu cầu đời sống tiện lợi (công năng)."
      },
      {
        q: "Khi thiết kế một chiếc túi xách cá nhân, bước đầu tiên cần làm là gì?",
        options: ["May ghép các mảnh vải lại ngay lập tức", "Xác định rõ đối tượng, mục đích sử dụng và ý tưởng tạo dáng", "Quảng cáo bán sản phẩm", "Mua những phụ kiện đắt tiền nhất"],
        answer: 1,
        explain: "Quy trình thiết kế luôn bắt đầu từ việc nghiên cứu nhu cầu sử dụng (đựng gì, ai dùng, hoàn cảnh nào) để định hướng ý tưởng tạo dáng."
      },
      {
        q: "Vật liệu nào sau đây vừa thân thiện môi trường vừa rất thích hợp để thiết kế túi thời trang thủ công học sinh?",
        options: ["Vải bạt nilon khó phân huỷ", "Nhựa xốp dùng một lần", "Vải bố canvas, bao bố sợi gai hoặc vải vụn may mặc", "Kính chịu lực"],
        answer: 2,
        explain: "Vải bố canvas, sợi gai và vải vụn là các vật liệu tự nhiên hoặc tái chế dễ gia công, an toàn và thân thiện với môi trường."
      },
      {
        q: "Bản rập (pattern) trong quy trình may phụ kiện thời trang đóng vai trò gì?",
        options: ["Làm bìa lót cho túi khi đã may xong", "Bản mẫu kích thước chuẩn 1:1 trên giấy giúp cắt chi tiết vải chính xác", "Tranh vẽ trang trí đóng khung treo tường", "Mẫu nhãn mác đính sau gáy"],
        answer: 1,
        explain: "Bản rập là khuôn mẫu kích thước chuẩn trên giấy giúp thợ may/nhà thiết kế cắt phôi vật liệu chuẩn xác trước khi may ghép."
      }
    ]
  },

  // CHỦ ĐỀ 2: NGHỆ THUẬT ĐƯƠNG ĐẠI THẾ GIỚI
  {
    id: "bai-3",
    themeId: 2,
    number: 3,
    title: "Bài 3. Một số trào lưu của nghệ thuật đương đại thế giới",
    pages: "Trang 14 – 18",
    objectives: [
      "Nhận biết bối cảnh ra đời và đặc trưng thị giác của các trào lưu nghệ thuật đương đại tiêu biểu",
      "Phân biệt hình thức nghệ thuật đại chúng (Pop Art), Nghệ thuật ý niệm (Conceptual Art), Sắp đặt (Installation) và Trình diễn (Performance Art)",
      "Sáng tác tác phẩm mang tinh thần nghệ thuật đương đại bằng việc sử dụng biểu tượng văn hoá quen thuộc"
    ],
    keywords: ["Nghệ thuật đương đại", "Pop Art", "Ý niệm (Conceptual Art)", "Nghệ thuật sắp đặt", "Nghệ thuật trình diễn"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-purple-600 dark:text-purple-400">1. Bối cảnh và tinh thần nghệ thuật đương đại:</strong> Xuất hiện từ nửa sau thế kỉ XX đến nay, nghệ thuật đương đại phá vỡ ranh giới truyền thống giữa hội hoạ, điêu khắc và đời sống thường nhật; đề cao tiếng nói cá nhân, tính tương tác và các vấn đề xã hội.</p>
        <p><strong class="text-purple-600 dark:text-purple-400">2. Các trào lưu tiêu biểu:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Pop Art (Nghệ thuật đại chúng):</strong> Lấy cảm hứng từ hình ảnh quảng cáo, truyện tranh, nhãn hiệu bao bì công nghiệp (Andy Warhol, Roy Lichtenstein); màu sắc tương phản rực rỡ, kĩ thuật in lưới, lặp lại hình ảnh.</li>
          <li><strong>Nghệ thuật ý niệm (Conceptual Art):</strong> Ý tưởng hoặc khái niệm của tác phẩm quan trọng hơn việc chế tác vật thể thủ công. Nghệ thuật nằm ở tư duy chứ không chỉ ở thị giác.</li>
          <li><strong>Nghệ thuật sắp đặt (Installation Art):</strong> Tổ chức, kết hợp nhiều vật liệu (ánh sáng, âm thanh, đồ vật đời thường) trong một không gian ba chiều cụ thể để người xem bước vào trải nghiệm toàn diện.</li>
          <li><strong>Nghệ thuật trình diễn (Performance Art):</strong> Hành động của người nghệ sĩ diễn ra trong thời gian và không gian thực, có sự chứng kiến và tương tác của công chúng.</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Lựa chọn biểu tượng & Ý niệm", desc: "Chọn một hình ảnh văn hoá quen thuộc của thời đại (icon mạng xã hội, nhãn hàng, đồ công nghệ, tranh truyền thống)." },
      { step: "Bước 2. Biến hoá tạo hình theo Pop Art", desc: "Đơn giản hoá đường viền nét đậm, tái lặp hình ảnh thành một chuỗi nhịp điệu với các gam màu đối lập rực rỡ." },
      { step: "Bước 3. Thể hiện chất liệu", desc: "Thực hiện bằng vẽ màu acrylic, cắt dán collage tạp chí hoặc đồ hoạ kĩ thuật số." },
      { step: "Bước 4. Đặt tên tác phẩm & Thông điệp", desc: "Viết bản thuyết minh ngắn (Artist Statement) diễn giải ý niệm phê phán hoặc ca ngợi lối sống hiện đại." }
    ],
    evaluation: [
      "Thể hiện rõ phong cách đặc trưng của trào lưu (nhịp điệu lặp, màu tương phản rực rỡ hoặc tính ý niệm không gian).",
      "Khai thác sáng tạo các hình ảnh quen thuộc của đời sống hiện đại.",
      "Có lời thuyết minh ý niệm rõ ràng, gợi mở suy nghĩ cho người xem."
    ],
    application: "Tạo một bức tranh Pop Art chân dung hoặc biểu tượng văn hoá giới trẻ để trang trí không gian góc học tập cá nhân.",
    quiz: [
      {
        q: "Trào lưu Pop Art (Nghệ thuật đại chúng) nổi tiếng với đặc điểm thị giác nào sau đây?",
        options: ["Tranh thuỷ mặc đen trắng tĩnh lặng", "Sử dụng hình ảnh quảng cáo, truyện tranh, màu sắc tương phản rực rỡ và kĩ thuật lặp hình", "Vẽ tượng điêu khắc đá cổ đại La Mã", "Chỉ dùng màu nước loang nhạt nhoà"],
        answer: 1,
        explain: "Pop Art gắn liền với văn hoá đại chúng, bao bì sản phẩm thương mại, màu sắc đối lập chói sáng và phong cách đồ hoạ in ấn ấn tượng."
      },
      {
        q: "Trong trào lưu Nghệ thuật ý niệm (Conceptual Art), yếu tố nào được xem là quan trọng nhất?",
        options: ["Khung tranh mạ vàng lộng lẫy", "Kĩ thuật vẽ tỉ mỉ giống hệt như ảnh chụp", "Ý tưởng và thông điệp tư tưởng của tác phẩm", "Trọng lượng của khối điêu khắc"],
        answer: 2,
        explain: "Nghệ thuật ý niệm xem tư duy, ý tưởng phản biện xã hội của nghệ sĩ là trung tâm, vật thể tạo tác chỉ là phương tiện biểu đạt."
      },
      {
        q: "Nghệ thuật sắp đặt (Installation Art) mang lại trải nghiệm khác biệt gì cho khán giả so với tranh treo tường truyền thống?",
        options: ["Khán giả chỉ được nhìn từ xa qua ống nhòm", "Tác phẩm chiếm lĩnh không gian 3D, khán giả có thể bước vào và trải nghiệm tương tác đa giác quan", "Khán giả phải mua vé đắt hơn gấp 10 lần", "Tác phẩm biến mất ngay sau 5 giây"],
        answer: 1,
        explain: "Sắp đặt tổ chức toàn bộ không gian căn phòng hoặc địa điểm thành một thực thể nghệ thuật để người xem bước vào cảm nhận."
      },
      {
        q: "Hoạ sĩ nổi tiếng nào được mệnh danh là 'Ông hoàng Pop Art' với tác phẩm vẽ hộp súp Campbell và chân dung Marilyn Monroe lặp màu?",
        options: ["Leonardo da Vinci", "Andy Warhol", "Vincent van Gogh", "Claude Monet"],
        answer: 1,
        explain: "Andy Warhol (1928–1987) là gương mặt đại diện tiêu biểu nhất của trào lưu Pop Art thế giới."
      }
    ]
  },
  {
    id: "bai-4",
    themeId: 2,
    number: 4,
    title: "Bài 4. Thiết kế giá đỡ thiết bị công nghệ",
    pages: "Trang 19 – 23",
    objectives: [
      "Khảo sát kích thước, trọng tâm và tư thế sử dụng điện thoại, máy tính bảng để thiết kế giá đỡ phù hợp",
      "Vận dụng nguyên lí cân bằng trọng lực và góc nhìn công thái học (Ergonomics) trong tạo dáng sản phẩm",
      "Thực hành chế tác mô hình giá đỡ vững chắc từ vật liệu dễ gia công (bìa carton sóng, que kem gỗ, xốp dẻo)"
    ],
    keywords: ["Thiết kế công nghiệp", "Công thái học (Ergonomics)", "Giá đỡ công nghệ", "Trọng tâm cân bằng", "Bìa carton sóng"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-purple-600 dark:text-purple-400">1. Đặt vấn đề thiết kế trong thời đại số:</strong> Học sinh thường xuyên sử dụng điện thoại, máy tính bảng để học tập trực tuyến. Một chiếc giá đỡ đạt chuẩn công thái học giúp giữ màn hình ngang tầm mắt (góc nghiêng 45° - 60°), chống mỏi cổ vai gáy và bảo vệ cột sống.</p>
        <p><strong class="text-purple-600 dark:text-purple-400">2. Các nguyên tắc cơ học & thẩm mĩ:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Cân bằng trọng tâm:</strong> Chân đế phải đủ rộng, trọng tâm thấp để giá đỡ không bị lật đổ khi chạm tay thao tác trên màn hình cảm ứng.</li>
          <li><strong>Gờ đỡ & Chống trượt:</strong> Khe hoặc mấu chặn ở mặt trước giữ mép dưới thiết bị không bị trượt; có đệm mút cao su hoặc vải nỉ chống xước vỏ máy.</li>
          <li><strong>Tản nhiệt & Cổng sạc:</strong> Thiết kế khoảng hở ở lưng để thiết bị toả nhiệt và rãnh luồn dây sạc pin thuận tiện.</li>
          <li><strong>Tạo hình thẩm mĩ:</strong> Cách điệu hình dáng sinh vật (chú mèo, robot, phi thuyền) hoặc hình khối kỉ hà tối giản (Minimalism).</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Thu thập dữ liệu & Đo đạc", desc: "Đo kích thước chiều dài, rộng, dày và trọng lượng của điện thoại hoặc máy tính bảng cần đỡ." },
      { step: "Bước 2. Phác thảo dáng & Thiết kế khớp gài", desc: "Vẽ bản vẽ chi tiết các bộ phận (mặt lưng đỡ nghiêng, chân chống đáy, ngàm giữ và rãnh khoá)." },
      { step: "Bước 3. Cắt gọt vật liệu", desc: "Chuyển bản vẽ lên bìa carton cứng nhiều lớp hoặc gỗ dán, dùng dao rọc giấy cắt chuẩn xác từng khớp mộng." },
      { step: "Bước 4. Ghép mộng & Trang trí", desc: "Lắp ráp thử nghiệm tải trọng thiết bị, gia cố keo dán và trang trí màu sắc, decal theo sở thích." }
    ],
    evaluation: [
      "Kết cấu vững vàng, chịu lực tốt, không bị rung lắc hay đổ khi chạm màn hình.",
      "Góc nghiêng hợp lí (45°–60°), có khe cắm sạc pin và tản nhiệt thông minh.",
      "Hình thức đẹp mắt, các mép cắt ghép mộng chính xác, mối nối kín khít."
    ],
    application: "Sử dụng sản phẩm giá đỡ vừa tạo ra để phục vụ việc học tập trực tuyến hằng ngày hoặc tặng người thân trong gia đình.",
    quiz: [
      {
        q: "Yếu tố cơ học quan trọng nhất giúp giá đỡ không bị lật đổ khi đặt thiết bị lên là gì?",
        options: ["Sơn màu đỏ thật bắt mắt", "Mặt đế có diện tích tiếp xúc đủ rộng và trọng tâm của hệ thống nằm thấp trong phạm vi chân đế", "Dùng chất liệu đắt tiền nhất", "Trang trí thật nhiều hoa văn"],
        answer: 1,
        explain: "Theo vật lí cơ học, một vật chỉ đứng vững khi đường thẳng đứng đi qua trọng tâm nằm trong mặt phẳng chân đế nâng đỡ."
      },
      {
        q: "Góc nghiêng lý tưởng của mặt đỡ để người dùng nhìn màn hình điện thoại thoải mái nhất là khoảng bao nhiêu?",
        options: ["0° (nằm bẹp sát mặt bàn)", "Khoảng 45° đến 60° so với mặt phẳng ngang", "90° (thẳng đứng vuông góc làm máy dễ đổ về trước)", "180°"],
        answer: 1,
        explain: "Góc nghiêng 45° - 60° là góc nhìn công thái học tự nhiên của mắt và đầu khi ngồi học trên bàn, giúp tránh thoái hoá đốt sống cổ."
      },
      {
        q: "Khi thiết kế giá đỡ thiết bị thông minh, chi tiết tiện ích nào sau đây KHÔNG THỂ THIẾU?",
        options: ["Rãnh luồn cáp sạc pin và khe thông gió tản nhiệt", "Một chiếc gương cầu lồi thật to", "Bánh xe trượt tự do không có phanh", "Lắp thêm chuông reo báo thức"],
        answer: 0,
        explain: "Khoảng hở cắm dây sạc và rãnh tản nhiệt ở lưng máy là tiêu chuẩn công năng bắt buộc của giá đỡ thông minh hiện đại."
      },
      {
        q: "Kĩ thuật ghép các chi tiết bìa cứng bằng các khe rãnh đan cài vào nhau mà không cần nhiều keo dán được gọi là gì?",
        options: ["Hàn xì điện", "Khớp mộng gài (Slot-together structure)", "Đúc khuôn áp lực", "Ghim bấm dập"],
        answer: 1,
        explain: "Khớp mộng gài phẳng cho phép lắp ráp nhanh chóng, tiết kiệm keo, dễ tháo gập phẳng để mang theo khi di chuyển."
      }
    ]
  },

  // CHỦ ĐỀ 3: THIẾT KẾ MĨ THUẬT SÁCH
  {
    id: "bai-5",
    themeId: 3,
    number: 5,
    title: "Bài 5. Thiết kế bìa sách",
    pages: "Trang 24 – 28",
    objectives: [
      "Hiểu cấu trúc đồ hoạ và chức năng truyền thông thị giác của bìa sách (bìa 1, gáy sách, bìa 4)",
      "Vận dụng nguyên lí phân cấp thị giác (Visual Hierarchy), nghệ thuật chữ (Typography) và tương phản màu sắc trong thiết kế bìa sách",
      "Thiết kế hoàn thiện một mẫu bìa sách cho tác phẩm văn học hoặc sách thiếu nhi"
    ],
    keywords: ["Thiết kế xuất bản", "Bìa sách", "Phân cấp thị giác", "Typography", "Gáy sách"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-sky-600 dark:text-sky-400">1. Bìa sách - Gương mặt của tác phẩm:</strong> Bìa sách là ấn tượng thị giác đầu tiên thu hút bạn đọc, thể hiện cô đọng tinh thần và thể loại của tác phẩm (văn học, khoa học viễn tưởng, lịch sử, thiếu nhi).</p>
        <p><strong class="text-sky-600 dark:text-sky-400">2. Cấu trúc tổng thể bìa sách đầy đủ:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Bìa trước (Bìa 1):</strong> Tên sách (chính), Tên tác giả, Nhà xuất bản / Logo, Hình ảnh minh hoạ chủ đạo.</li>
          <li><strong>Gáy sách:</strong> Tên sách, Tên tác giả, Logo NXB (kích thước bề dày phụ thuộc vào số trang ruột).</li>
          <li><strong>Bìa sau (Bìa 4):</strong> Đoạn tóm tắt giới thiệu nội dung (Blurb), Mã vạch ISBN, Giá tiền, Trích dẫn nhận xét.</li>
        </ul>
        <p><strong class="text-sky-600 dark:text-sky-400">3. Nghệ thuật chữ (Typography) & Bố cục:</strong> Tên sách phải có kích thước lớn nhất, kiểu phông chữ phù hợp với thể loại (phông có chân serif gợi nét cổ điển trang nghiêm; phông không chân sans-serif gợi sự hiện đại; chữ viết tay gợi sự hồn nhiên, lãng mạn).</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Nghiên cứu nội dung & Xác định thể loại", desc: "Đọc tóm tắt tác phẩm, rút ra thông điệp chính và xác định đối tượng độc giả mục tiêu." },
      { step: "Bước 2. Phác thảo bố cục (Thumbnail sketches)", desc: "Vẽ nhanh 3-4 phương án phân bổ tỉ lệ giữa phần chữ (Text) và phần hình minh hoạ (Image)." },
      { step: "Bước 3. Thiết kế chữ & Vẽ hình minh hoạ", desc: "Tạo hình chữ tên sách mang tính biểu cảm cao; vẽ chi tiết hình ảnh chủ đạo ăn nhập với ý nghĩa truyện." },
      { step: "Bước 4. Hoàn thiện màu sắc & Thông tin phụ", desc: "Tô màu hài hoà, căn chỉnh tên tác giả, logo NXB, mã vạch để bìa sách đạt chuẩn xuất bản chuyên nghiệp." }
    ],
    evaluation: [
      "Bố cục rõ ràng, có phân cấp thị giác nổi bật: tên sách là điểm nhấn thị giác đầu tiên.",
      "Kiểu chữ (Typography) đẹp mắt, dễ đọc và truyền tải đúng linh hồn thể loại cuốn sách.",
      "Hình ảnh minh hoạ độc đáo, hoà sắc phù hợp với tâm lí lứa tuổi độc giả."
    ],
    application: "Tự tay thiết kế bìa mới cho cuốn sách em yêu thích nhất để làm bìa bọc bảo vệ cuốn sách của mình.",
    quiz: [
      {
        q: "Thành phần chữ nào bắt buộc phải có kích thước lớn nhất và giữ vị trí trung tâm thị giác trên bìa trước của cuốn sách?",
        options: ["Tên nhà xuất bản", "Tên cuốn sách", "Mã vạch ISBN", "Số điện thoại liên hệ phát hành"],
        answer: 1,
        explain: "Theo nguyên tắc phân cấp thị giác, tên sách là thông tin quan trọng nhất cần được nhận diện ngay lập tức từ khoảng cách xa."
      },
      {
        q: "Đối với một cuốn sách truyện cổ tích thiếu nhi, kiểu chữ nào sau đây là phù hợp nhất?",
        options: ["Chữ uốn lượn gothic sắc nhọn u ám", "Chữ tròn trịa, mềm mại, vui tươi và dễ đọc", "Chữ số kĩ thuật mã hoá máy tính", "Chữ cực nhỏ in nghiêng mờ nhạt"],
        answer: 1,
        explain: "Sách thiếu nhi đòi hỏi phông chữ rõ ràng, nét tròn đẫy đà, thân thiện và giàu cảm xúc vui tươi."
      },
      {
        q: "Bộ phận nào của cuốn sách giúp bạn đọc dễ dàng tìm thấy cuốn sách khi nó đang được xếp dựng đứng trên giá sách thư viện?",
        options: ["Trang lót trắng", "Gáy sách", "Bìa 4 phía sau", "Mép cắt xén dưới đáy"],
        answer: 1,
        explain: "Khi sách được xếp trên giá, chỉ có gáy sách lộ ra ngoài; do đó gáy sách phải in tên sách và tên tác giả rõ ràng."
      },
      {
        q: "Nguyên lí 'Phân cấp thị giác' (Visual Hierarchy) trong thiết kế đồ hoạ bìa sách có ý nghĩa gì?",
        options: ["Làm cho tất cả các chữ và hình to bằng nhau tuyệt đối", "Sắp xếp các yếu tố theo thứ tự ưu tiên thị giác: cái quan trọng nhất đập vào mắt trước, thông tin phụ đọc sau", "Chỉ được dùng duy nhất 1 tông màu", "Vẽ kín toàn bộ nền không chừa một khoảng trống nào"],
        answer: 1,
        explain: "Phân cấp thị giác dẫn dắt ánh nhìn của người đọc theo một trình tự mạch lạc: Tên sách → Hình minh hoạ chính → Tên tác giả → NXB."
      }
    ]
  },
  {
    id: "bai-6",
    themeId: 3,
    number: 6,
    title: "Bài 6. Tranh minh hoạ",
    pages: "Trang 29 – 33",
    objectives: [
      "Hiểu vai trò của tranh minh hoạ trong việc trực quan hoá văn bản, làm phong phú cảm xúc của tác phẩm",
      "Biết cách chọn trích đoạn tiêu biểu, phân tích hành động nhân vật và bối cảnh để lên ý tưởng minh hoạ",
      "Vẽ tranh minh hoạ hoàn chỉnh bằng chất liệu truyền thống hoặc công cụ kĩ thuật số"
    ],
    keywords: ["Tranh minh hoạ (Illustration)", "Trực quan hoá văn bản", "Điểm nhấn kịch tính", "Tạo hình nhân vật", "Bối cảnh"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-sky-600 dark:text-sky-400">1. Sứ mệnh của tranh minh hoạ:</strong> Tranh minh hoạ đồng hành cùng câu chữ, không chỉ đơn thuần là sao chép lại đoạn văn mà còn bổ sung cảm xúc, khắc hoạ tính cách nhân vật và tái hiện không gian lịch sử, văn hoá của câu chuyện.</p>
        <p><strong class="text-sky-600 dark:text-sky-400">2. Các loại hình minh hoạ phổ biến:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Minh hoạ truyện kể / Văn học:</strong> Tập trung vào khoảnh khắc cao trào xung đột hoặc tình cảm sâu lắng của nhân vật.</li>
          <li><strong>Minh hoạ khoa học / Bách khoa:</strong> Yêu cầu độ chuẩn xác cao về cấu tạo giải phẫu động thực vật hoặc cơ chế máy móc.</li>
          <li><strong>Minh hoạ báo chí / Xã luận:</strong> Mang tính biểu tượng ẩn dụ và châm biếm sâu sắc.</li>
        </ul>
        <p><strong class="text-sky-600 dark:text-sky-400">3. Kĩ thuật thể hiện:</strong> Vẽ nét viền mực đen kết hợp loang màu nước; tranh khắc gỗ mộc mạc; hoặc vẽ kĩ thuật số trên máy tính bảng (Digital Painting).</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Đọc kĩ văn bản & Chọn phân cảnh đắt giá", desc: "Tìm đoạn văn giàu hình tượng, chứa đựng bước ngoặt cốt truyện hoặc tâm trạng nhân vật đặc sắc nhất." },
      { step: "Bước 2. Tạo hình nhân vật & Nghiên cứu bối cảnh", desc: "Quy định đặc điểm diện mạo, trang phục theo thời đại và góc máy phối cảnh (góc rộng toàn cảnh hay cận cảnh đặc tả)." },
      { step: "Bước 3. Phác hình nét", desc: "Vẽ nhịp điệu chuyển động của nhân vật chính, các nhân vật phụ và lớp cảnh nền phía xa." },
      { step: "Bước 4. Lên màu & Tạo chiều sâu không gian", desc: "Sử dụng ánh sáng và sắc độ để hút ánh mắt người xem vào nhân vật trung tâm; hoàn thiện chi tiết trang trí." }
    ],
    evaluation: [
      "Bám sát nội dung trích đoạn văn học và truyền tải đúng tinh thần câu chuyện.",
      "Nhân vật có tạo hình ấn tượng, biểu cảm sống động, động tác tự nhiên.",
      "Không gian cảnh trí có chiều sâu thị giác (tiền cảnh, trung cảnh, hậu cảnh rõ rệt)."
    ],
    application: "Vẽ minh hoạ cho một bài thơ hoặc truyện ngắn trong chương trình Ngữ văn 9 (ví dụ: Ánh trăng, Đồng chí, Chiếc lược ngà...).",
    quiz: [
      {
        q: "Vai trò quan trọng nhất của tranh minh hoạ đối với tác phẩm văn học là gì?",
        options: ["Làm tăng số lượng trang sách để bán đắt hơn", "Cụ thể hoá câu chữ bằng hình ảnh, bổ sung cảm xúc và gợi mở trí tưởng tượng cho người đọc", "Thay thế hoàn toàn văn bản chữ viết", "Che lấp các lỗi in ấn trong sách"],
        answer: 1,
        explain: "Tranh minh hoạ giúp độc giả dễ dàng hình dung bối cảnh, cảm nhận sâu sắc tính cách nhân vật và thế giới tinh thần của tác phẩm."
      },
      {
        q: "Khi chọn trích đoạn văn học để vẽ tranh minh hoạ, người hoạ sĩ nên ưu tiên lựa chọn phân cảnh nào?",
        options: ["Một đoạn liệt kê số liệu khô khan", "Khoảnh khắc giàu kịch tính, biểu cảm cao trào hoặc có tính hình tượng thị giác đặc sắc", "Một trang giấy trắng không có chữ", "Đoạn lời bạt cuối cùng của biên tập viên"],
        answer: 1,
        explain: "Những phân cảnh có hành động, cảm xúc mạnh hoặc không gian giàu hình ảnh sẽ tạo nên tác phẩm hội hoạ lôi cuốn nhất."
      },
      {
        q: "Để tạo chiều sâu không gian ba chiều trong bức tranh minh hoạ, phương pháp nào thường được áp dụng?",
        options: ["Vẽ tất cả mọi thứ có cùng kích thước và độ đậm nhạt như nhau", "Phân chia các lớp không gian: Tiền cảnh (rõ, đậm, to) - Trung cảnh - Hậu cảnh (mờ, nhạt, nhỏ)", "Chỉ vẽ một nửa bức tranh", "Tô kín màu đen toàn bộ khung tranh"],
        answer: 1,
        explain: "Luật xa gần không khí và luật phối cảnh đường nét quy định vật ở gần sẽ to, rõ, tương phản mạnh; vật ở xa sẽ nhỏ, mờ và sắc độ nhạt dần."
      },
      {
        q: "Tranh minh hoạ cho tác phẩm văn học lịch sử đòi hỏi người hoạ sĩ phải đặc biệt chú ý đến yếu tố nào?",
        options: ["Vẽ xe hơi hiện đại vào thời trung cổ", "Tính chính xác của trang phục, kiến trúc, vũ khí và phong tục đúng thời kì lịch sử đó", "Vẽ theo phong cách hoạt hình người ngoài hành tinh", "Chỉ dùng màu dạ quang rực sáng"],
        answer: 1,
        explain: "Minh hoạ đề tài lịch sử đòi hỏi tính xác thực về trang phục, vũ khí, kiến trúc và đạo cụ để bảo đảm giá trị chân thực của văn hoá dân tộc."
      }
    ]
  },

  // CHỦ ĐỀ 4: CẢM HỨNG TRONG SÁNG TÁC MĨ THUẬT
  {
    id: "bai-7",
    themeId: 4,
    number: 7,
    title: "Bài 7. Cảm hứng trong sáng tác hội hoạ",
    pages: "Trang 34 – 38",
    objectives: [
      "Hiểu nguồn gốc của cảm hứng nghệ thuật từ trải nghiệm thực tế, kí ức cá nhân hoặc cảm xúc nội tâm",
      "Biết cách chuyển hoá cảm xúc trừu tượng thành hệ thống đường nét, màu sắc và ngôn ngữ hội hoạ",
      "Sáng tác một bức tranh giàu cảm xúc cá nhân về một kỉ niệm sâu sắc tuổi học trò"
    ],
    keywords: ["Cảm hứng nghệ thuật", "Biểu đạt cảm xúc", "Ngôn ngữ hội hoạ", "Kí ức tuổi thơ", "Hình tượng trừu tượng"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-emerald-600 dark:text-emerald-400">1. Bản chất của cảm hứng sáng tác:</strong> Cảm hứng không tự nhiên rơi xuống mà được thai nghén từ sự rung động chân thành của trái tim trước cuộc sống, vẻ đẹp của thiên nhiên, tình yêu thương con người hoặc những trăn trở về thời gian.</p>
        <p><strong class="text-emerald-600 dark:text-emerald-400">2. Hai con đường chuyển hoá cảm hứng:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Từ quan sát trực tiếp hiện thực:</strong> Tác giả kí hoạ cảnh vật thực tế, sau đó gia tăng mức độ biểu cảm qua nét vẽ phóng khoáng hoặc hoà sắc cường điệu hoá để bộc lộ tâm trạng.</li>
          <li><strong>Từ thế giới nội tâm & Kí ức:</strong> Tác giả sử dụng các biểu tượng thị giác, hình thể ẩn dụ, không gian phi thực tế để diễn tả giấc mơ, nỗi nhớ, niềm vui hoặc nỗi buồn lắng đọng.</li>
        </ul>
        <p><strong class="text-emerald-600 dark:text-emerald-400">3. Sức mạnh của màu sắc biểu cảm:</strong> Màu sắc trong tranh cảm xúc không nhất thiết phải giống y hệt màu thật của đồ vật ngoài đời, mà phục vụ cho nhịp điệu tâm trạng của tác giả (như Van Gogh dùng màu vàng rực rỡ để diễn tả nỗi khát khao mãnh liệt).</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Đánh thức cảm xúc & Chọn đề tài", desc: "Nhớ lại một kỉ niệm sâu đậm (buổi chia tay bạn bè, cơn mưa rào mùa hạ, ánh mắt người bà thân thương)." },
      { step: "Bước 2. Xác định gam màu cảm xúc chủ đạo", desc: "Quyết định hoà sắc: tươi vui hy vọng (vàng, xanh lá non) hay hoài niệm trầm tư (nâu trầm, tím than, lam thẫm)." },
      { step: "Bước 3. Thể hiện nhịp điệu nét & Mảng", desc: "Vẽ phóng khoáng theo dòng chảy cảm xúc; nét vẽ có thể cuồn cuộn, mềm mại hoặc dứt khoát góc cạnh." },
      { step: "Bước 4. Gia tăng chiều sâu biểu đạt", desc: "Chồng lớp màu, tạo vân texture trên bề mặt tranh để tăng sức truyền cảm và hoàn thiện tổng thể." }
    ],
    evaluation: [
      "Bức tranh thể hiện rõ ràng dòng cảm xúc chân thực, có tâm hồn và cá tính riêng.",
      "Vận dụng sáng tạo màu sắc và đường nét mang tính biểu cảm cao, không rập khuôn máy móc.",
      "Có sự hài hoà, thống nhất giữa ý niệm nội tâm và hình thức thị giác biểu đạt."
    ],
    application: "Tạo một cuốn nhật kí nghệ thuật (Art Journal) bằng hình vẽ để ghi lại những khoảnh khắc cảm xúc đáng nhớ của năm học cuối cấp THCS.",
    quiz: [
      {
        q: "Nguồn gốc sâu xa nhất nhen nhóm nên cảm hứng sáng tạo nghệ thuật đích thực là gì?",
        options: ["Sao chép y hệt tranh của hoạ sĩ khác trên mạng", "Sự rung cảm chân thành của người nghệ sĩ trước đời sống, con người và thiên nhiên", "Yêu cầu bắt buộc phải làm bài tập lấy điểm", "Sử dụng những dụng cụ vẽ đắt đỏ nhất"],
        answer: 1,
        explain: "Cảm hứng nghệ thuật đích thực luôn khởi nguồn từ tình cảm chân thành, sự quan sát tinh tế và những rung động sâu sắc trước cuộc đời."
      },
      {
        q: "Trong trường phái Biểu hiện (Expressionism), màu sắc trong tranh được sử dụng với mục đích chủ yếu nào?",
        options: ["Tô màu chuẩn xác tuyệt đối như máy chụp ảnh", "Bộc lộ trực tiếp cảm xúc mãnh liệt và tâm trạng bên trong của nghệ sĩ", "Tiết kiệm tối đa tiền mua sơn", "Chỉ dùng màu xám tro để vẽ"],
        answer: 1,
        explain: "Các hoạ sĩ Biểu hiện sử dụng màu sắc tự do, cường điệu để phản chiếu thế giới tâm trạng nội tâm chứ không gò bó theo thực tế thị giác."
      },
      {
        q: "Khi muốn diễn tả một kỉ niệm hoài niệm, sâu lắng và ấm áp về tình bà cháu, gam màu nào sau đây là gợi cảm nhất?",
        options: ["Màu xanh neon chói lọi", "Màu nâu trầm, vàng đất, vàng ấm điểm chút sắc cam ấm", "Màu bạc kim loại lạnh buốt", "Toàn bộ là màu đỏ tươi gắt gao"],
        answer: 1,
        explain: "Các tông màu đất, vàng ấm, nâu trầm mang lại cảm giác bình yên, hoài niệm và tràn ngập sự che chở yêu thương."
      },
      {
        q: "Hành động ghi chép nhanh những ấn tượng thị giác và cảm xúc ban đầu bằng nét vẽ nhanh được gọi là gì?",
        options: ["Kí hoạ (Sketching)", "Đánh bóng cơ học", "Sao chép can giấy", "Pha màu hàng loạt"],
        answer: 0,
        explain: "Kí hoạ là phương pháp ghi chép thị giác nhanh nhất giúp nắm bắt tức thì cái thần, dáng điệu và cảm xúc của khoảnh khắc đời sống."
      }
    ]
  },
  {
    id: "bai-8",
    themeId: 4,
    number: 8,
    title: "Bài 8. Thiết kế hình ảnh nhận diện thương hiệu",
    pages: "Trang 39 – 43",
    objectives: [
      "Hiểu khái niệm và tầm quan trọng của hệ thống nhận diện thương hiệu (Brand Identity) trong kinh tế xã hội hiện đại",
      "Nắm vững các thành tố cốt lõi của bộ nhận diện: Biểu trưng (Logo), Bảng màu quy chuẩn, Kiểu chữ đặc trưng",
      "Thiết kế logo và ứng dụng nhận diện cho một câu lạc bộ học sinh hoặc một thương hiệu nông sản địa phương"
    ],
    keywords: ["Nhận diện thương hiệu", "Logo (Biểu trưng)", "Đồ hoạ nhận diện", "Bảng màu chuẩn", "Ứng dụng thương hiệu"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-emerald-600 dark:text-emerald-400">1. Nhận diện thương hiệu là gì?</strong> Là tập hợp tất cả các yếu tố thị giác được thiết kế đồng bộ nhằm xây dựng hình ảnh chuyên nghiệp, giúp công chúng phân biệt ngay lập tức thương hiệu này với thương hiệu khác trên thị trường.</p>
        <p><strong class="text-emerald-600 dark:text-emerald-400">2. Các thành phần nền tảng:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Logo (Biểu trưng):</strong> Hạt nhân của bộ nhận diện. Có 3 dạng chính: Logo dạng chữ (Wordmark), Logo dạng biểu tượng hình ảnh (Icon/Symbol), hoặc kết hợp cả hai.</li>
          <li><strong>Hệ màu nhận diện (Color Palette):</strong> Chọn từ 1 đến 3 màu chủ đạo, gắn liền với bản sắc ngành nghề (xanh lá - môi trường/nông sản; xanh dương - công nghệ/tin cậy; cam/đỏ - nhiệt huyết/ẩm thực).</li>
          <li><strong>Hệ phông chữ (Typography):</strong> Phông chữ chính cho tiêu đề và phông chữ phụ cho nội dung văn bản.</li>
          <li><strong>Vật phẩm ứng dụng (Mockup):</strong> Danh thiếp (Namecard), phong bì thư, áo đồng phục, thẻ đeo, bao bì túi xách, bảng hiệu.</li>
        </ul>
        <p><strong class="text-emerald-600 dark:text-emerald-400">3. Tiêu chí một logo xuất sắc:</strong> <em>Đơn giản (Simple) – Dễ nhớ (Memorable) – Độc đáo (Unique) – Dễ ứng dụng thu phóng mọi kích cỡ (Versatile)</em>.</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Nghiên cứu giá trị cốt lõi", desc: "Xác định tên thương hiệu, sứ mệnh, tính cách và thông điệp mà tổ chức/sản phẩm muốn truyền tải." },
      { step: "Bước 2. Cách điệu biểu tượng (Stylization)", desc: "Tìm kiếm các hình ảnh biểu trưng, lược bỏ chi tiết rườm rà, chắt lọc các đường nét kỉ hà tối giản, cô đọng." },
      { step: "Bước 3. Kết hợp chữ & Xác lập màu chuẩn", desc: "Căn chỉnh tỉ lệ vàng giữa biểu tượng và phần tên chữ; gán mã màu chuẩn (Pantone / Hex / CMYK)." },
      { step: "Bước 4. Trình bày ứng dụng thực tế", desc: "Thể hiện logo lên các sản phẩm mẫu (áo thun, cốc sứ, sổ tay, tem nhãn bao bì sản phẩm)." }
    ],
    evaluation: [
      "Logo có ý tưởng tạo hình độc đáo, đơn giản, dễ nhớ, mang ý nghĩa biểu tượng sâu sắc.",
      "Màu sắc và kiểu chữ thống nhất, thể hiện đúng phong cách và tính chất thương hiệu.",
      "Khả năng ứng dụng thực tế cao: hiển thị rõ nét cả khi in đen trắng và khi thu nhỏ kích thước."
    ],
    application: "Thiết kế bộ nhận diện thương hiệu cho Câu lạc bộ Sách hoặc Đội Thanh niên tình nguyện của trường em.",
    quiz: [
      {
        q: "Hạt nhân trung tâm quan trọng nhất trong toàn bộ hệ thống nhận diện thương hiệu là gì?",
        options: ["Tấm bảng quảng cáo ngoài trời to nhất", "Logo (Biểu trưng thương hiệu)", "Số tài khoản ngân hàng của công ty", "Hoá đơn bán lẻ"],
        answer: 1,
        explain: "Logo là dấu ấn thị giác cốt lõi, là biểu tượng đại diện pháp lí và thẩm mĩ xuyên suốt của mọi thương hiệu."
      },
      {
        q: "Bốn tiêu chuẩn vàng để đánh giá một thiết kế logo chuyên nghiệp là gì?",
        options: ["Càng nhiều chi tiết nhỏ càng tốt, màu sắc sặc sỡ trên 10 màu, thật phức tạp, thật to", "Đơn giản, dễ nhớ, độc đáo và dễ ứng dụng thu phóng ở mọi kích cỡ", "Phải sao chép giống hệt logo của công ty nổi tiếng", "Chỉ dùng hình vẽ chụp ảnh không qua chỉnh sửa"],
        answer: 1,
        explain: "Một logo tốt phải tối giản, dễ khắc sâu vào trí nhớ công chúng, độc nhất vô nhị và linh hoạt trên mọi chất liệu (từ tem nhỏ đến biển hiệu lớn)."
      },
      {
        q: "Một thương hiệu chuyên về sản phẩm nông sản hữu cơ sạch và bảo vệ môi trường nên chọn gam màu nhận diện chủ đạo nào?",
        options: ["Màu tím than u tối", "Màu xanh lá cây thiên nhiên kết hợp màu nâu đất", "Màu đen tuyền phủ bóng", "Màu đỏ rực rỡ cảnh báo nguy hiểm"],
        answer: 1,
        explain: "Xanh lá cây và nâu đất là hai gam màu thị giác gợi liên tưởng trực tiếp nhất tới mầm cây, sự sống, thiên nhiên tươi lành và đất mẹ màu mỡ."
      },
      {
        q: "Thuật ngữ 'Mockup' trong quy trình thiết kế nhận diện thương hiệu có nghĩa là gì?",
        options: ["Bản vẽ mô phỏng logo được in áp dụng lên các sản phẩm đời thực (như áo thun, cốc, danh thiếp)", "Hành động xoá bỏ toàn bộ file thiết kế", "Việc viết sai chính tả tên thương hiệu", "Máy in bị hỏng mực"],
        answer: 0,
        explain: "Mockup là mô hình trực quan hoá giúp khách hàng hình dung chính xác logo sẽ trông như thế nào khi được sản xuất thực tế trên áo, cốc, túi xách..."
      }
    ]
  },

  // KIỂM TRA TRƯNG BÀY CUỐI HỌC KÌ I
  {
    id: "trien-lam-1",
    themeId: 4,
    number: 8.5,
    isExhibition: true,
    title: "Kiểm tra, trưng bày sản phẩm mĩ thuật cuối học kì I",
    pages: "Trang 44",
    objectives: [
      "Hệ thống hoá toàn bộ sản phẩm thực hành từ Chủ đề 1 đến Chủ đề 4 (Tranh cuộc sống, Phụ kiện, Pop Art, Giá đỡ, Bìa sách, Minh hoạ, Logo)",
      "Vận dụng nguyên lí trưng bày triển lãm: sắp xếp không gian, phân khu chủ đề, ánh sáng và bảng thông tin tác phẩm",
      "Tự tin thuyết trình, phản biện nghệ thuật và đánh giá sản phẩm của bản thân và bạn bè theo các tiêu chí sư phạm"
    ],
    keywords: ["Triển lãm học đường", "Không gian trưng bày", "Thẻ chú thích (Tag)", "Phản biện nghệ thuật", "Đánh giá học kì I"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-rose-600 dark:text-rose-400">1. Ý nghĩa của hoạt động trưng bày cuối kì:</strong> Không chỉ là buổi kiểm tra đánh giá kết quả học tập, triển lãm là không gian giao lưu văn hoá, nơi học sinh tự tin giới thiệu thành quả sáng tạo của mình với thầy cô và bạn bè.</p>
        <p><strong class="text-rose-600 dark:text-rose-400">2. Quy chuẩn trưng bày sản phẩm mĩ thuật:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Phân khu chuyên đề rõ ràng:</strong> Khu vực Mĩ thuật tạo hình (Hội hoạ, Tranh minh hoạ); Khu vực Mĩ thuật ứng dụng (Thiết kế phụ kiện, Giá đỡ công nghệ, Bìa sách, Bộ nhận diện).</li>
          <li><strong>Thẻ định danh tác phẩm (Artwork Label):</strong> Tên tác phẩm, Họ tên tác giả, Chất liệu kĩ thuật, Kích thước, Lời bình ngắn (1-2 câu).</li>
          <li><strong>Ánh sáng & Khoảng cách thị giác:</strong> Tác phẩm treo cách mặt đất vừa tầm mắt người xem (tâm tranh cao 1.45m - 1.55m), khoảng cách giữa các tác phẩm thông thoáng.</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Tuyển chọn & Hoàn thiện sản phẩm", desc: "Rà soát lại các bài tập đã làm, hoàn thiện các chi tiết chưa ưng ý, đóng khung hoặc làm bo viền thẩm mĩ." },
      { step: "Bước 2. Viết thẻ chú thích tác phẩm", desc: "Chuẩn bị nhãn thông tin ghi rõ tên tác giả, tên sản phẩm, lớp, chất liệu và thông điệp ngắn gọn." },
      { step: "Bước 3. Bố trí không gian phòng trưng bày", desc: "Kê bàn ghế, dựng vách ngăn, sắp đặt sản phẩm theo đúng sơ đồ thiết kế triển lãm của lớp." },
      { step: "Bước 4. Khai mạc, Thuyết trình & Đánh giá", desc: "Đóng vai hướng dẫn viên nghệ thuật chia sẻ ý tưởng; tham gia bỏ phiếu bình chọn sản phẩm ấn tượng nhất." }
    ],
    evaluation: [
      "Có đủ các sản phẩm thực hành theo chương trình Học kì I, hoàn thiện chỉn chu.",
      "Kĩ năng trình bày, bố trí không gian triển lãm khoa học, thẩm mĩ và ngăn nắp.",
      "Thuyết trình mạch lạc, tự tin; có thái độ tôn trọng và tiếp thu các đóng góp ý kiến."
    ],
    application: "Chụp ảnh lưu lại phòng triển lãm để xây dựng ấn phẩm kỉ yếu nghệ thuật hoặc đăng tải lên trang tin trường học.",
    quiz: [
      {
        q: "Khoảng cách chiều cao chuẩn từ mặt đất đến tâm bức tranh khi treo trưng bày triển lãm ngang tầm mắt người lớn là khoảng bao nhiêu?",
        options: ["Khoảng 50 cm sát mặt đất", "Khoảng 1.45 m đến 1.55 m", "Treo sát trần nhà cao 3 mét", "Để lộn xộn dưới sàn nhà"],
        answer: 1,
        explain: "Chiều cao 1.45m - 1.55m tính từ mặt sàn đến tâm tranh là tiêu chuẩn quốc tế giúp người xem quan sát tác phẩm thoải mái nhất mà không phải ngước hay cúi đầu."
      },
      {
        q: "Thẻ định danh (Artwork Label) đặt cạnh mỗi sản phẩm trong triển lãm KHÔNG THỂ THIẾU thông tin nào sau đây?",
        options: ["Tên tác phẩm, tác giả, chất liệu và thông điệp", "Số tài khoản ngân hàng của tác giả", "Địa chỉ nhà riêng đầy đủ", "Bảng điểm tổng kết các môn học"],
        answer: 0,
        explain: "Thẻ thông tin tác phẩm tiêu chuẩn cung cấp thông tin học thuật cơ bản: Tên tranh, tác giả, năm sáng tác, chất liệu và thông điệp ngắn."
      },
      {
        q: "Mục đích cốt lõi nhất của hoạt động thảo luận và chia sẻ trong giờ trưng bày mĩ thuật là gì?",
        options: ["Chê bai sản phẩm của bạn bè để mình được điểm cao hơn", "Học hỏi kinh nghiệm tạo hình, rèn luyện tư duy phản biện thẩm mĩ và tự tin giao tiếp", "Rút ngắn thời gian để được về sớm", "Tranh cãi gay gắt gây mất đoàn kết"],
        answer: 1,
        explain: "Thảo luận nghệ thuật là cơ hội vàng để học sinh rèn luyện tư duy phản biện thẩm mĩ, học hỏi cách giải quyết vấn đề sáng tạo từ bạn bè."
      },
      {
        q: "Để phân biệt rõ ràng các thể loại sản phẩm trong một triển lãm tổng hợp, ban tổ chức nên làm gì?",
        options: ["Xếp chồng tất cả các sản phẩm lên nhau thành một đống", "Phân khu vực trưng bày theo từng mạch nội dung rõ ràng (Tạo hình vs Ứng dụng)", "Chỉ trưng bày 1 sản phẩm duy nhất", "Tắt toàn bộ đèn trong phòng triển lãm"],
        answer: 1,
        explain: "Phân khu chuyên đề rõ ràng giúp không gian triển lãm ngăn nắp, mạch lạc và dẫn dắt người tham quan thưởng ngoạn dễ dàng."
      }
    ]
  },

  // CHỦ ĐỀ 5: VẺ ĐẸP CỦA NGUYÊN MẪU TRONG THỰC HÀNH, SÁNG TẠO
  {
    id: "bai-9",
    themeId: 5,
    number: 9,
    title: "Bài 9. Tỉ lệ và hình khối của đồ vật",
    pages: "Trang 45 – 49",
    objectives: [
      "Nắm vững phương pháp quan sát, so sánh tỉ lệ và quy các đồ vật thực tế về hệ hình khối cơ bản (khối hộp, cầu, trụ, nón)",
      "Hiểu và vận dụng thành thạo luật phối cảnh (luật viễn cận xa gần) và phân tích các diện đậm nhạt theo hướng nguồn sáng",
      "Vẽ bài tĩnh vật đồ vật có cấu trúc phức tạp bằng chì đen hoặc màu bột"
    ],
    keywords: ["Nguyên mẫu thực tế", "Hình khối cơ bản", "Tỉ lệ so sánh", "Luật phối cảnh", "Diện đậm nhạt"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-amber-600 dark:text-amber-400">1. Nguyên mẫu và việc quy khối:</strong> Mọi đồ vật phong phú trong tự nhiên (cái bình hoa, ấm trà, quả bóng, toà nhà) đều có thể quy về các hình khối cơ bản: <em>khối hộp, khối trụ, khối cầu, khối nón</em>. Việc quy khối giúp người vẽ nắm bắt nhanh chóng cấu trúc không gian và bản chất của mẫu.</p>
        <p><strong class="text-amber-600 dark:text-amber-400">2. Phương pháp dóng tỉ lệ chính xác:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Dóng trục đối xứng:</strong> Đa số đồ vật sinh hoạt có cấu trúc đối xứng trục tròn xoay; cần dựng đường trục thẳng đứng trước khi vẽ thân và quai.</li>
          <li><strong>So sánh tỉ lệ tương quan:</strong> Dùng bút chì dóng tay thẳng đứng để so sánh: Chiều rộng so với chiều cao; kích thước miệng, cổ, thân so với đáy.</li>
          <li><strong>Đường chân trời & Điểm tụ:</strong> Áp dụng luật xa gần: các đường thẳng song song trong không gian sẽ hội tụ về đường chân trời (Eye level).</li>
        </ul>
        <p><strong class="text-amber-600 dark:text-amber-400">3. Phân mảng sáng tối (5 sắc độ chuẩn):</strong> Sáng nhất (Highlight) → Sáng (Light) → Ranh giới tối (Terminator/Core shadow) → Phản quang (Reflected light) → Bóng đổ (Cast shadow).</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Quan sát & Dựng khung hình bao quát", desc: "Xác định tỉ lệ chiều cao nhất và rộng nhất của toàn bộ nhóm mẫu để đặt khung hình cân đối vào giữa trang giấy." },
      { step: "Bước 2. Phác khung hình riêng & Dựng trục", desc: "Phác khung hình của từng vật mẫu đơn lẻ, kẻ trục đối xứng và tìm các điểm mốc (miệng, vai, đáy)." },
      { step: "Bước 3. Vẽ nét chi tiết & Phân mảng sáng tối", desc: "Nối các điểm mốc bằng nét cong mềm mại; tẩy nét thừa; phác ranh giới phân định mảng sáng và mảng tối." },
      { step: "Bước 4. Lên đậm nhạt & Diễn tả chất cảm", desc: "Dùng các lớp nét chì đan nhau diễn tả chuyển tiếp sắc độ êm ái, nhấn đậm các hốc khuất và bóng đổ chân mẫu." }
    ],
    evaluation: [
      "Khung hình cân đối trên trang giấy (không bị lệch sang một bên, không quá to chạm mép, không quá bé).",
      "Tỉ lệ giữa các bộ phận của đồ vật chuẩn xác; trục đối xứng chuẩn mực.",
      "Sắc độ đậm nhạt thể hiện rõ khối 3 chiều và không gian sâu của mẫu tĩnh vật."
    ],
    application: "Tự bày mẫu một góc tĩnh vật gồm ấm trà và quả táo tại nhà để luyện tập kĩ năng hình hoạ chì.",
    quiz: [
      {
        q: "Phương pháp tư duy tạo hình cốt lõi nhất khi bắt đầu vẽ một đồ vật có cấu trúc phức tạp là gì?",
        options: ["Cố gắng vẽ ngay các chi tiết trang trí nhỏ li ti", "Quy đồ vật đó về các hình khối hình học cơ bản (khối cầu, trụ, hộp, nón)", "Vẽ viền khung ngoài thật đậm", "Nhắm mắt lại và tưởng tượng"],
        answer: 1,
        explain: "Quy các vật thể phức tạp về hệ hình khối cơ bản là nguyên tắc kinh điển của hình hoạ giúp phân tích cấu trúc khối chuẩn xác nhất."
      },
      {
        q: "Dụng cụ đơn giản và hiệu quả nhất mà người học vẽ thường dùng để đo đạc và dóng so sánh tỉ lệ mẫu vật là gì?",
        options: ["Một chiếc thước dây dài 10 mét", "Chiếc bút chì cầm thẳng đứng ở cẳng tay duỗi thẳng", "Thước đo góc ê-ke", "Kính hiển vi"],
        answer: 1,
        explain: "Bút chì dóng thẳng tay ngang tầm mắt là công cụ đo tỉ lệ linh hoạt và tiện lợi nhất của người hoạ sĩ khi vẽ hình hoạ trực tiếp."
      },
      {
        q: "Theo quy luật phân tích ánh sáng trên khối cầu, vùng ranh giới ngăn cách giữa phần nhận sáng và phần khuất sáng được gọi là gì?",
        options: ["Vùng bóng đổ trên mặt bàn", "Đường ranh giới sáng tối (Terminator / Core shadow)", "Điểm sáng nhất (Highlight)", "Vùng phản quang"],
        answer: 1,
        explain: "Đường ranh giới sáng tối là nơi bề mặt vật thể uốn cong khuất khỏi tia sáng trực tiếp, thường có sắc độ đậm nhất trên khối vật thể."
      },
      {
        q: "Ánh sáng phản chiếu từ mặt bàn hắt ngược lại phần đáy khuất sáng của quả cầu tạo ra hiện tượng gì?",
        options: ["Bóng đổ", "Ánh sáng phản quang (Reflected light)", "Điểm tụ biến mất", "Mất khối hoàn toàn"],
        answer: 1,
        explain: "Ánh sáng phản quang (ánh sáng gián tiếp hắt từ môi trường) làm cho phần đáy tối không bị đen bệt mà trong trẻo, có chiều sâu khối."
      }
    ]
  },
  {
    id: "bai-10",
    themeId: 5,
    number: 10,
    title: "Bài 10. Nguyên mẫu trong tác phẩm điêu khắc",
    pages: "Trang 50 – 54",
    objectives: [
      "Phân biệt hai hình thức điêu khắc cơ bản: Điêu khắc tượng tròn (3D toàn diện) và Điêu khắc phù điêu (khối nổi trên nền phẳng)",
      "Hiểu cách người nghệ sĩ chuyển hoá nguyên mẫu đời thực vào ngôn ngữ khối, diện, mảng của điêu khắc",
      "Thực hành nặn phù điêu hoặc tạo hình tượng tròn tĩnh vật bằng đất nặn hoặc xốp dẻo"
    ],
    keywords: ["Điêu khắc", "Tượng tròn", "Phù điêu (Relief)", "Chuyển hoá nguyên mẫu", "Đất nặn"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-amber-600 dark:text-amber-400">1. Đặc trưng của nghệ thuật điêu khắc:</strong> Nếu như hội hoạ sử dụng ảo giác không gian 2D trên mặt phẳng, thì điêu khắc chiếm lĩnh không gian vật lí thực sự thông qua thể tích, khối lượng và chất cảm bề mặt vật liệu (đá, gỗ, đồng, đất sét).</p>
        <p><strong class="text-amber-600 dark:text-amber-400">2. Hai hình thức điêu khắc cốt lõi:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Tượng tròn (Sculpture in the round):</strong> Tác phẩm điêu khắc độc lập trong không gian 3 chiều hoàn chỉnh. Khán giả có thể đi vòng quanh 360 độ để chiêm ngưỡng tác phẩm từ mọi góc nhìn (mặt trước, nghiêng, sau lưng).</li>
          <li><strong>Phù điêu (Relief):</strong> Tác phẩm có các khối hình gắn liền và nổi lên (hoặc khắc lõm) trên một mặt phẳng nền. Phù điêu chia thành: <em>Phù điêu nổi cao (High relief)</em> và <em>Phù điêu nổi thấp / Chạm nổi (Low relief / Bas-relief)</em>.</li>
        </ul>
        <p><strong class="text-amber-600 dark:text-amber-400">3. Chuyển hoá nguyên mẫu:</strong> Người tạo hình không sao chép máy móc mà giản lược chi tiết, cô đọng các khối lớn để tác phẩm có sức nặng biểu cảm và tính khái quát cao.</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Chuẩn bị bảng nền phẳng", desc: "Cán phẳng một tấm đất nặn dày khoảng 1-1.5 cm trên bảng gỗ làm mặt phẳng nền cho bức phù điêu." },
      { step: "Bước 2. Phác hình dáng nguyên mẫu lên nền", desc: "Dùng que nhọn phác ranh giới hình thể hoa quả, bình hoa hoặc nhân vật lên mặt nền đất sét." },
      { step: "Bước 3. Đắp khối từ thấp đến cao", desc: "Đắp các mảng đất theo thứ tự: lớp nền xa đắp mỏng (nổi thấp), lớp đối tượng chính đắp dày (nổi cao) tạo lớp không gian." },
      { step: "Bước 4. Gọt tỉa chi tiết & Tạo chất cảm", desc: "Dùng dao điêu khắc gọt tỉa các khối diện dứt khoát, dùng dụng cụ tạo vân nhám bề mặt làm sinh động tác phẩm." }
    ],
    evaluation: [
      "Khối phù điêu gắn chắc chắn trên mặt phẳng nền, không bị bong tróc hay nứt vỡ.",
      "Tỉ lệ khối phân lớp rõ ràng: có sự tương phản giữa khối nổi cao và khối nổi thấp.",
      "Hình khối nguyên mẫu được khái quát đẹp mắt, giàu tính thẩm mĩ và xúc giác."
    ],
    application: "Tạo một bức phù điêu nhỏ trang trí khung ảnh kỉ niệm hoặc làm quà tặng lưu niệm bằng đất sét tự khô.",
    quiz: [
      {
        q: "Điểm khác biệt cơ bản nhất giữa 'Tượng tròn' và 'Phù điêu' là gì?",
        options: ["Tượng tròn vẽ bằng màu nước còn phù điêu vẽ bằng chì", "Tượng tròn là khối 3 chiều hoàn chỉnh xem được 360 độ quanh tác phẩm, còn phù điêu là khối nổi trên một mặt phẳng nền", "Phù điêu luôn đắt tiền hơn tượng tròn", "Tượng tròn chỉ để trong nhà còn phù điêu chỉ để ngoài trời"],
        answer: 1,
        explain: "Tượng tròn tồn tại độc lập trong không gian 3D xem được từ mọi hướng; phù điêu có sự kết hợp giữa khối điêu khắc và bề mặt nền phẳng nâng đỡ."
      },
      {
        q: "Hình thức điêu khắc mà trong đó các hình khối nổi lên rất nhiều, nhô ra khỏi mặt phẳng nền hơn một nửa thể tích thực được gọi là gì?",
        options: ["Phù điêu nổi thấp (Bas-relief)", "Phù điêu nổi cao (High relief)", "Khắc nét lõm (Intaglio)", "Tranh in đá"],
        answer: 1,
        explain: "High relief (phù điêu nổi cao) có khối nhô ra rất mạnh, thậm chí gần như tách rời khỏi nền phẳng ở một số chi tiết."
      },
      {
        q: "Khi thực hành đắp một bức phù điêu tĩnh vật bằng đất sét, nguyên tắc đắp khối đúng đắn là gì?",
        options: ["Đắp các chi tiết nhỏ trước rồi mới đắp khối lớn", "Đắp từ các lớp cảnh ở xa (nổi thấp) trước, sau đó mới đắp chồng các khối đối tượng chính ở gần (nổi cao)", "Bôi đất ngẫu nhiên không cần theo mẫu", "Chỉ dán một lớp giấy mỏng lên nền"],
        answer: 1,
        explain: "Quy trình chuẩn là đắp lớp nền không gian phía xa trước với độ nổi thấp, sau đó đắp các khối nhân vật/đồ vật chính phía trước nổi cao hơn."
      },
      {
        q: "Chất liệu nào sau đây là chất liệu điêu khắc truyền thống lâu đời và bền vững nhất trong lịch sử mĩ thuật Việt Nam?",
        options: ["Đá tự nhiên, gỗ và đồng", "Giấy báo bồi mỏng", "Nhựa bóng xốp dùng một lần", "Bột mì nhào nước"],
        answer: 0,
        explain: "Đá (như điêu khắc Chăm-pa, tượng đá chùa Phật Tích), gỗ (tượng gỗ đình làng) và đồng (trống đồng Đông Sơn, tượng đồng thời Lê) là di sản ngàn đời."
      }
    ]
  },

  // CHỦ ĐỀ 6: NGHỆ THUẬT MÚA RỐI
  {
    id: "bai-11",
    themeId: 6,
    number: 11,
    title: "Bài 11. Vẻ đẹp tạo hình con rối",
    pages: "Trang 55 – 59",
    objectives: [
      "Khám phá lịch sử, nguồn gốc dân gian và đặc trưng tạo hình cách điệu cao của nghệ thuật múa rối truyền thống",
      "Phân biệt các loại hình rối cạn: Rối que, Rối tay, Rối bóng, Rối dây",
      "Thiết kế và chế tác một con rối que hoặc rối bóng có khớp chuyển động để biểu diễn kịch ngắn"
    ],
    keywords: ["Nghệ thuật múa rối", "Rối que", "Rối bóng", "Khớp cử động", "Tạo hình nhân vật"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-red-600 dark:text-red-400">1. Nghệ thuật múa rối - Di sản sân khấu dân gian:</strong> Múa rối là loại hình nghệ thuật sân khấu biểu diễn độc đáo, dùng các hình tượng con rối vô tri được nghệ sĩ điều khiển để kể chuyện, truyền tải ước mơ và tiếng cười lạc quan của nhân dân lao động.</p>
        <p><strong class="text-red-600 dark:text-red-400">2. Các loại hình múa rối cạn đặc sắc:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Rối que:</strong> Thân và tay rối được gắn trên các que tre/gỗ để nghệ sĩ cầm que điều khiển hành động từ phía dưới phông màn.</li>
          <li><strong>Rối tay (Rối bao tay):</strong> Đầu và hai tay rối được lồng trực tiếp vào các ngón tay của người điều khiển; động tác linh hoạt, hóm hỉnh.</li>
          <li><strong>Rối bóng (Shadow puppetry):</strong> Hình rối phẳng được cắt từ da hoặc bìa cứng có các khớp đinh tán, biểu diễn sau một tấm màn vải trắng có đèn chiếu sáng phía sau, tạo bóng đen tương phản kịch tính.</li>
          <li><strong>Rối dây (Marionette):</strong> Con rối có nhiều khớp phức tạp, được điều khiển bằng hệ thống dây cước nối với khung chữ thập bằng gỗ từ phía trên cao.</li>
        </ul>
        <p><strong class="text-red-600 dark:text-red-400">3. Đặc trưng tạo hình:</strong> Tính cách điệu cao, phóng đại các nét đặc trưng (mắt to, miệng cười ngoác, mũi hếch) để khán giả ngồi xa vẫn nhận diện được tích cách nhân vật (chính diện hay phản diện).</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Xây dựng kịch bản & Ý tưởng nhân vật", desc: "Chọn nhân vật truyện cổ tích (Thạch Sanh, Cô Tấm, Chú Cuội) và phác thảo tính cách tạo hình." },
      { step: "Bước 2. Vẽ tách rời các bộ phận cơ thể", desc: "Vẽ thân, đầu, cánh tay, cẳng tay riêng rẽ lên bìa cứng; chừa các phần tròn ở khớp để đục lỗ xỏ chốt." },
      { step: "Bước 3. Đục lỗ & Ghép chốt xoay (Đinh tán chẻ)", desc: "Dùng ghim cánh phượng hoặc dây dù nhỏ liên kết các khớp tay chân để bộ phận có thể cử động gập duỗi tự do." },
      { step: "Bước 4. Gắn que điều khiển & Tô màu", desc: "Cố định que tre vào sống lưng và bàn tay rối bằng keo nến; tô màu sặc sỡ hoặc trổ thủng hoa văn cho rối bóng." }
    ],
    evaluation: [
      "Tạo hình nhân vật có nét biểu cảm sinh động, mang đậm phong cách văn hoá dân gian.",
      "Các khớp nối xoay chuyển trơn tru, không bị kẹt hay quá lỏng lẻo khi giật que điều khiển.",
      "Màu sắc nổi bật, tương phản mạnh, bắt sáng tốt trên sân khấu biểu diễn."
    ],
    application: "Cùng nhóm bạn dàn dựng một vở kịch rối bóng ngắn 3 phút về chủ đề an toàn giao thông hoặc bảo vệ môi trường để biểu diễn trước lớp.",
    quiz: [
      {
        q: "Đặc trưng tạo hình nổi bật nhất của nhân vật con rối trong sân khấu dân gian là gì?",
        options: ["Vẽ giống hệt người thật từng nếp nhăn nhỏ", "Tính cách điệu cao, phóng đại nét mặt và hình dáng để bộc lộ rõ tính cách nhân vật", "Chỉ dùng hình khối tròn vo không có tay chân", "Kích thước siêu nhỏ mắt thường không thấy"],
        answer: 1,
        explain: "Nghệ thuật tạo hình con rối dân gian đòi hỏi tính ước lệ và cách điệu cao, phóng đại biểu cảm để khán giả từ xa vẫn thấu hiểu cảm xúc nhân vật."
      },
      {
        q: "Loại hình múa rối nào sử dụng các hình bóng đen phẳng chuyển động in trên màn vải trắng nhờ ánh sáng đèn chiếu từ phía sau?",
        options: ["Rối nước", "Rối bóng (Shadow puppet)", "Rối dây", "Rối bay"],
        answer: 1,
        explain: "Rối bóng tận dụng quy luật quang học: bóng đen của hình rối phẳng được phóng to hoặc thu nhỏ in trên phông màn vải sáng."
      },
      {
        q: "Bộ phận nào giữ vai trò quyết định giúp tay chân của con rối phẳng có thể cử động co gập linh hoạt theo ý người điều khiển?",
        options: ["Khớp xoay liên kết bằng chốt đinh tán (ghim cánh phượng / eyelet)", "Băng dính dán cứng nhắc", "Keo dán chết hai mảnh bìa lại", "Một lớp sơn bóng phủ kín"],
        answer: 0,
        explain: "Các khớp xoay bằng đinh tán chẻ hoặc chốt luồn giúp các phân đoạn cánh tay, cẳng tay xoay quanh một trục linh hoạt."
      },
      {
        q: "Để điều khiển một con rối dây (Marionette), nghệ sĩ sân khấu phải thao tác từ vị trí nào?",
        options: ["Ngồi ngâm mình dưới nước", "Đứng trên cầu cạn phía trên cao và điều khiển giật các sợi dây nối vào khung chữ thập", "Nằm dưới gầm sàn diễn", "Đứng lẫn trong khán giả"],
        answer: 1,
        explain: "Rối dây được điều khiển từ giàn cầu treo phía trên sân khấu thông qua hàng chục sợi dây dù nhỏ nối xuống các khớp con rối."
      }
    ]
  },
  {
    id: "bai-12",
    themeId: 6,
    number: 12,
    title: "Bài 12. Tạo hình nhân vật múa rối nước",
    pages: "Trang 60 – 64",
    objectives: [
      "Khám phá giá trị văn hoá độc nhất vô nhị của nghệ thuật Múa rối nước truyền thống vùng châu thổ sông Hồng",
      "Hiểu cấu trúc sân khấu Thủy đình, cơ chế buồng trò, hệ thống máy sào, dây kéo ngầm dưới mặt nước",
      "Tạo hình mô hình nhân vật chú Tễu hoặc linh vật dân gian (rồng, cá chép) bằng vật liệu nhẹ chống thấm"
    ],
    keywords: ["Múa rối nước", "Thủy đình", "Chú Tễu", "Gỗ sung", "Cơ chế sào dây ngầm"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-red-600 dark:text-red-400">1. Kiệt tác nghệ thuật dân gian độc bản thế giới:</strong> Ra đời từ thế kỉ XI thời nhà Lý gắn liền với nền văn minh lúa nước sông Hồng, múa rối nước Việt Nam là loại hình nghệ thuật sân khấu duy nhất trên thế giới lấy mặt nước ao hồ làm sân khấu biểu diễn.</p>
        <p><strong class="text-red-600 dark:text-red-400">2. Cấu trúc không gian sân khấu rối nước:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Thủy đình (Nhà rối):</strong> Gian nhà mái cong cổ kính dựng giữa ao hồ, có tấm mành tre thả rủ che giấu các nghệ nhân đang lội ngâm mình trong nước điều khiển.</li>
          <li><strong>Mặt nước (Sân khấu):</strong> Vừa là sàn diễn, vừa là tấm gương phản chiếu, vừa là nơi che giấu toàn bộ hệ thống máy sào, dây kéo ngầm phức tạp.</li>
          <li><strong>Chất liệu tạc con rối:</strong> Thường đẽo gọt từ <em>gỗ sung</em> (loại gỗ nhẹ, xốp, nổi tốt trên nước và không bị nứt nẻ), sau đó phủ nhiều lớp sơn ta chống thấm nước và vẽ sơn then, son đỏ rực rỡ.</li>
        </ul>
        <p><strong class="text-red-600 dark:text-red-400">3. Biểu tượng nhân vật Chú Tễu:</strong> Nhân vật dẫn chuyện hóm hỉnh, thân hình mập mạp đẫy đà, cởi trần đóng khố, ngực nở, nụ cười rạng rỡ lạc quan, hai tay vung vẩy chào đón khán giả.</p>
      </div>
    `,
    process: [
      { step: "Bước 1. Nghiên cứu hình mẫu Chú Tễu / Rồng nước", desc: "Quan sát các đặc điểm kinh điển: búi tóc ba chỏm, khuôn mặt tròn phúc hậu, nụ cười tươi và tư thế vận động." },
      { step: "Bước 2. Tạo phôi khối chính", desc: "Dùng đất sét tự khô, xốp đặc hoặc gọt củ quả/gỗ mềm để định hình khối đầu, thân mình và chân đế." },
      { step: "Bước 3. Tạo khớp cử động cánh tay & Cơ chế que đẩy", desc: "Gắn chốt trục xoay ở vai; gắn que đẩy điều khiển phía sau để tay có thể vung lên vẫy chào." },
      { step: "Bước 4. Vẽ biểu cảm dân gian & Phủ bóng chống nước", desc: "Vẽ mắt híp cười, miệng son đỏ, hoạ tiết khố; phủ một lớp keo bóng hoặc sơn bóng bảo vệ bề mặt mô hình." }
    ],
    evaluation: [
      "Mô hình thể hiện được thần thái hóm hỉnh, hồn hậu đặc trưng của nhân vật rối nước dân gian.",
      "Cấu trúc khối chắc chắn, cân đối; cơ chế que đẩy điều khiển tay chân hoạt động tốt.",
      "Màu sắc tươi sáng mang đậm sắc thái lễ hội truyền thống (đỏ, vàng, trắng, đen tương phản)."
    ],
    application: "Tổ chức một buổi triển lãm mô hình rối nước mini kết hợp thuyết minh về lịch sử Thủy đình làng gốm Bát Tràng hoặc chùa Thầy.",
    quiz: [
      {
        q: "Mặt sàn sân khấu đặc biệt và duy nhất trên thế giới của nghệ thuật múa rối nước truyền thống Việt Nam là gì?",
        options: ["Sàn gỗ phủ thảm nhung đỏ", "Mặt nước phẳng lặng của ao, hồ hoặc bể bơi nhân tạo", "Sân gạch đình làng khô ráo", "Sân khấu treo lơ lửng trên không trung"],
        answer: 1,
        explain: "Rối nước độc nhất vô nhị ở chỗ lấy chính mặt nước làm sàn diễn tự nhiên, mặt nước vừa nâng đỡ con rối vừa phản chiếu lung linh và che giấu bộ máy điều khiển ngầm."
      },
      {
        q: "Nhân vật dẫn chuyện mang tính biểu tượng kinh điển nhất trong múa rối nước Việt Nam, đại diện cho tinh thần lạc quan, vui tươi của người nông dân là ai?",
        options: ["Thạch Sanh", "Chú Tễu", "Lý Thông", "Chàng Trương Chi"],
        answer: 1,
        explain: "Chú Tễu (nghĩa là tiếng cười) là linh hồn của rối nước: thân hình tròn trĩnh, cởi trần đóng khố, cười rạng rỡ và đóng vai trò người mở màn hóm hỉnh."
      },
      {
        q: "Vì sao các nghệ nhân dân gian Việt Nam thường ưu tiên lựa chọn gỗ cây sung để tạc tượng con rối nước?",
        options: ["Vì gỗ sung rất nặng giúp con rối chìm sâu xuống bùn", "Vì gỗ sung xốp, nhẹ, nổi tốt trên mặt nước, dễ đục đẽo và ít bị nứt toác khi ngâm nước lâu ngày", "Vì gỗ sung có mùi thơm ngào ngạt", "Vì gỗ sung đắt tiền nhất trong các loại gỗ quý"],
        answer: 1,
        explain: "Gỗ sung có thớ xốp nhẹ, nổi bềnh bồng trên nước rất tốt, không bị cong vênh nứt nẻ khi ngâm nước trường kì như các loại gỗ nặng khác."
      },
      {
        q: "Ngôi nhà kiến trúc cổ kính dựng trên mặt nước nơi người nghệ nhân đứng sau tấm mành tre để điều khiển con rối được gọi là gì?",
        options: ["Thủy đình (Nhà rối)", "Lầu vọng nguyệt", "Tháp rùa", "Gác chuông"],
        answer: 0,
        explain: "Thủy đình (nhà trên mặt nước) là kiến trúc biểu tượng linh thiêng nơi buồng trò múa rối nước diễn ra."
      }
    ]
  },

  // CHỦ ĐỀ 7: MĨ THUẬT ĐƯƠNG ĐẠI VIỆT NAM
  {
    id: "bai-13",
    themeId: 7,
    number: 13,
    title: "Bài 13. Khuynh hướng sáng tác mĩ thuật",
    pages: "Trang 65 – 69",
    objectives: [
      "Tìm hiểu những chuyển biến phong phú của mĩ thuật đương đại Việt Nam từ thời kì Đổi mới (1986) đến nay",
      "Nhận diện các khuynh hướng tạo hình: Hiện thực đổi mới, Biểu hiện tâm linh, Trừu tượng hiện đại và Kết hợp chất liệu truyền thống với tư duy mới",
      "Sáng tác tác phẩm mang phong cách đương đại khai thác tinh hoa chất liệu văn hoá bản địa"
    ],
    keywords: ["Mĩ thuật đương đại Việt Nam", "Chất liệu bản địa", "Sơn mài đương đại", "Tranh lụa cách tân", "Bản sắc văn hoá"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-teal-600 dark:text-teal-400">1. Diện mạo mĩ thuật Việt Nam đương đại:</strong> Mĩ thuật Việt Nam ngày nay kế thừa nền tảng vững chắc của trường phái Mĩ thuật Đông Dương, đồng thời hoà nhập sâu rộng với dòng chảy nghệ thuật thế giới, tạo nên sự đa thanh đa sắc trong ngôn ngữ tạo hình.</p>
        <p><strong class="text-teal-600 dark:text-teal-400">2. Các khuynh hướng sáng tác nổi bật:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Khuynh hướng Hiện thực đương đại:</strong> Không sao chép khô khan mà phản ánh sâu sắc những đổi thay xã hội, đô thị hoá, đời sống con người thời hội nhập với góc nhìn nhân văn.</li>
          <li><strong>Khuynh hướng Trừu tượng & Biểu hiện:</strong> Khám phá thế giới nội tâm sâu kín, diễn tả năng lượng vũ trụ qua nhịp điệu vệt cọ, sự va đập của các khối màu và bề mặt gồ ghề (texture).</li>
          <li><strong>Khuynh hướng cách tân chất liệu truyền thống:</strong> Đột phá trong nghệ thuật <em>sơn mài</em> (kết hợp vỏ trứng, vàng quỳ, bạc dán với bố cục hiện đại) và <em>tranh lụa</em> (không chỉ nhuộm phẳng mà kết hợp vẽ nét biểu cảm và hiệu ứng ánh sáng mới).</li>
          <li><strong>Nghệ thuật Đa phương tiện & Bản địa:</strong> Sử dụng gốm, thổ cẩm dân tộc, tre trúc, giấy dó kết hợp video art và sắp đặt không gian.</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Chọn mạch cảm xúc & Đề tài", desc: "Xác định câu chuyện em muốn kể (nhịp sống phố cổ, kí ức làng quê, bản sắc trang phục vùng cao, khát vọng tương lai)." },
      { step: "Bước 2. Thử nghiệm kết hợp chất liệu", desc: "Kết hợp giấy dó, vải xô, cát mịn, keo sữa hoặc màu acrylic trên bìa cứng để tạo bề mặt vật liệu phong phú." },
      { step: "Bước 3. Xây dựng bố cục mang tư duy mới", desc: "Phá cách góc nhìn, có thể lồng ghép mảng hình trừu tượng với các chi tiết hoa văn truyền thống." },
      { step: "Bước 4. Hoàn thiện sắc thái biểu cảm", desc: "Gia tăng tương phản đậm nhạt, nhấn mạnh chất cảm thô mộc hoặc lấp lánh để hoàn thiện tác phẩm." }
    ],
    evaluation: [
      "Tác phẩm có ý tưởng sáng tạo mới mẻ, mang hơi thở đương đại nhưng vẫn đậm đà tâm hồn Việt.",
      "Vận dụng thành công các kĩ thuật chất liệu phong phú, tạo được hiệu ứng bề mặt độc đáo.",
      "Bố cục chặt chẽ, màu sắc có chiều sâu văn hoá và sắc thái biểu cảm riêng biệt."
    ],
    application: "Sáng tác một tác phẩm mĩ thuật tổng hợp (Mixed Media) kết hợp giấy dó và cọ vẽ để tham dự cuộc thi Mĩ thuật thiếu nhi cấp thành phố.",
    quiz: [
      {
        q: "Điểm nổi bật nhất của mĩ thuật đương đại Việt Nam trong việc kế thừa và phát huy di sản truyền thống là gì?",
        options: ["Vứt bỏ hoàn toàn tất cả các chất liệu cổ truyền", "Cách tân các chất liệu truyền thống (như sơn mài, tranh lụa, giấy dó, gốm) bằng tư duy tạo hình và ngôn ngữ hiện đại", "Chỉ sao chép lại nguyên si tranh cổ thế kỉ XVIII", "Không vẽ tranh nữa mà chuyển sang chơi game"],
        answer: 1,
        explain: "Mĩ thuật Việt Nam đương đại khẳng định bản sắc riêng trên trường quốc tế bằng việc thổi hồn tư duy đương đại vào các chất liệu bản địa độc đáo như sơn mài, lụa, giấy dó."
      },
      {
        q: "Kĩ thuật độc đáo trong nghệ thuật tranh sơn mài truyền thống Việt Nam tạo nên các tầng màu sâu thẳm biến ảo kì diệu là kĩ thuật gì?",
        options: ["Kĩ thuật mài tranh dưới nước bằng giấy ráp và than củi", "Dùng bút chì tô bóng", "Phun sơn bằng bình xịt công nghiệp 1 lần duy nhất", "Dán băng dính màu lên gỗ"],
        answer: 0,
        explain: "Sơn mài Việt Nam độc đáo ở chữ 'MÀI': vẽ nhiều lớp then, son, vàng, bạc, vỏ trứng chồng lên nhau rồi ngâm nước mài phẳng để các lớp màu ẩn hiện huyền ảo."
      },
      {
        q: "Nghệ thuật hỗn hợp (Mixed Media) trong mĩ thuật đương đại có nghĩa là gì?",
        options: ["Chỉ dùng một thỏi phấn trắng duy nhất để vẽ", "Kết hợp đồng thời nhiều chất liệu và kĩ thuật khác nhau (acrylic, giấy báo, vải, cát, vỏ cây) trên cùng một tác phẩm", "Vẽ tranh bằng ngón chân", "Chụp một bức ảnh đen trắng"],
        answer: 1,
        explain: "Mixed Media là xu hướng nghệ thuật tổng hợp phá vỡ giới hạn truyền thống, tự do phối trộn nhiều vật liệu trên bề mặt tác phẩm."
      },
      {
        q: "Chất liệu giấy truyền thống làm từ vỏ cây dó của người Việt, có độ dai bền hàng trăm năm và khả năng thấm hút màu loang tuyệt đẹp là loại giấy nào?",
        options: ["Giấy in báo thông thường", "Giấy Dó", "Giấy photocopy A4", "Giấy carton sóng"],
        answer: 1,
        explain: "Giấy Dó là báu vật thủ công truyền thống của dân tộc, làm từ vỏ cây dó, bền vững với thời gian và là nguồn cảm hứng lớn cho hội hoạ đương đại."
      }
    ]
  },
  {
    id: "bai-14",
    themeId: 7,
    number: 14,
    title: "Bài 14. Thiết kế sản phẩm đồ gia dụng từ vật liệu đã qua sử dụng",
    pages: "Trang 70 – 74",
    objectives: [
      "Hiểu ý nghĩa của tư duy Thiết kế xanh (Green Design) và xu hướng Nâng cấp tuần hoàn (Upcycling) trong bảo vệ môi trường",
      "Khảo sát tính chất cơ lí của các vật liệu phế thải (chai nhựa, hộp sữa, lõi giấy, que gỗ, vải thừa) để tạo hình sản phẩm",
      "Thiết kế và chế tác hoàn chỉnh một món đồ gia dụng hữu ích cho gia đình (đèn bàn trang trí, hộp đựng đồ đa năng, chậu cây treo)"
    ],
    keywords: ["Thiết kế xanh", "Tái chế nâng cấp (Upcycling)", "Đồ gia dụng", "Kinh tế tuần hoàn", "Vật liệu tái sinh"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-teal-600 dark:text-teal-400">1. Từ Tái chế (Recycling) đến Nâng cấp giá trị (Upcycling):</strong> Nếu như tái chế thông thường là nghiền nát vật liệu để sản xuất lại, thì <em>Upcycling</em> là hoạt động sáng tạo mĩ thuật biến các vật dụng bỏ đi thành sản phẩm mới có giá trị thẩm mĩ và công năng cao hơn nguyên bản.</p>
        <p><strong class="text-teal-600 dark:text-teal-400">2. Yêu cầu thiết kế sản phẩm đồ gia dụng Upcycling:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Công năng & Tiện ích:</strong> Sản phẩm phải thực sự dùng được trong gia đình (hộp bút xoay, kệ đựng gia vị, đèn ngủ khuếch tán ánh sáng, ống đựng chìa khoá).</li>
          <li><strong>Độ bền & An toàn:</strong> Vật liệu phải được rửa sạch, khử khuẩn, khử mùi; các cạnh sắc bén của kim loại/thuỷ tinh phải được mài nhẵn hoặc bọc viền silicon bảo vệ.</li>
          <li><strong>Tính thẩm mĩ cao:</strong> Khéo léo che giấu vẻ thô kệch của rác thải bằng cách điêu khắc bề mặt, quấn dây thừng đay trang trí, sơn phủ màu hài hoà.</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Thu gom & Xử lí an toàn vật liệu", desc: "Thu thập vỏ chai thuỷ tinh, hộp thiếc, bìa carton; rửa sạch bằng xà phòng, phơi khô ráo và loại bỏ mép sắc nhọn." },
      { step: "Bước 2. Phác thảo kiểu dáng & Cơ cấu lắp ghép", desc: "Vẽ bản thiết kế cấu trúc sản phẩm gia dụng (ví dụ: chụp đèn bàn phong cách Vintage kết hợp dây dù và lõi giấy)." },
      { step: "Bước 3. Gia công & Tạo hình chi tiết", desc: "Cắt, khoét lỗ thông gió, quấn dây sợi đay quanh thân chai hoặc ghép các nan gỗ cố định bằng súng bắn keo." },
      { step: "Bước 4. Hoàn thiện công năng & Thử nghiệm", desc: "Lắp đui đèn LED an toàn (điện áp thấp 5V/12V), kiểm tra độ vững của đế chân và độ toả sáng trong phòng tối." }
    ],
    evaluation: [
      "Ý tưởng chuyển đổi vật liệu thông minh, mang tính nghệ thuật và giá trị tái sinh cao.",
      "Sản phẩm có công năng sử dụng thực tế bền chắc, phục vụ tốt đời sống sinh hoạt gia đình.",
      "Tuyệt đối an toàn về điện, cơ học; bề mặt sản phẩm xử lí gọn gàng, tinh tế."
    ],
    application: "Tổ chức 'Ngày hội Sáng tạo Xanh' tại trường học để đấu giá các sản phẩm đồ gia dụng tái chế gây quỹ từ thiện vì môi trường.",
    quiz: [
      {
        q: "Thuật ngữ 'Upcycling' trong thiết kế mĩ thuật đương đại khác với tái chế thông thường (Recycling) ở điểm mấu chốt nào?",
        options: ["Upcycling vứt bỏ đồ dùng cũ xuống biển", "Upcycling là biến phế liệu thành sản phẩm mới có giá trị thẩm mĩ, công năng và chất lượng cao hơn vật phẩm gốc ban đầu", "Upcycling làm cho đồ vật trở nên xấu hơn", "Upcycling chỉ sử dụng kim cương và vàng"],
        answer: 1,
        explain: "Upcycling là nghệ thuật nâng cấp tuần hoàn: tái sinh rác thải thành những tác phẩm thiết kế tinh xảo, giàu giá trị thẩm mĩ và kinh tế."
      },
      {
        q: "Bước quan trọng hàng đầu bắt buộc phải thực hiện trước khi bắt tay vào chế tác đồ dùng từ vật liệu tái chế là gì?",
        options: ["Sơn màu ngay lên bề mặt dính dầu mỡ", "Làm sạch, khử khuẩn, làm khô và xử lí triệt tiêu các góc cạnh sắc nhọn để đảm bảo an toàn", "Bán phế liệu lấy tiền tiêu vặt", "Đập vỡ tan tành các vật phẩm"],
        answer: 1,
        explain: "An toàn vệ sinh và xử lí các cạnh sắc (mép nắp hộp thiếc, mảnh thuỷ tinh) là nguyên tắc số một để bảo vệ người chế tác và người sử dụng."
      },
      {
        q: "Khi tự chế tạo một chiếc đèn ngủ để bàn từ chai lọ tái chế, loại bóng đèn nào sau đây là an toàn nhất để chống nguy cơ cháy nổ do nhiệt độ?",
        options: ["Bóng đèn sợi đốt công suất cao 100W toả nhiệt cực nóng", "Bóng đèn LED toả nhiệt thấp, tiết kiệm điện và sử dụng nguồn điện một chiều an toàn", "Dùng nến thắp lửa trần bên trong chai nhựa kín", "Bếp ga mini"],
        answer: 1,
        explain: "Bóng đèn LED sinh rất ít nhiệt, tiết kiệm điện và có thể dùng nguồn USB 5V cực kì an toàn cho các cấu trúc làm bằng bìa, nhựa hoặc gỗ."
      },
      {
        q: "Chất liệu tự nhiên nào thường được sử dụng phối hợp cùng chai lọ thuỷ tinh cũ để tạo phong cách trang trí mộc mạc (Rustic / Vintage)?",
        options: ["Dây thừng sợi đay gai, vỏ gỗ thông hoặc que kem gỗ", "Nhựa vinyl bóng loáng", "Dây kẽm gai sắc nhọn", "Xốp bọt biển ướt"],
        answer: 0,
        explain: "Dây sợi đay gai tự nhiên có màu nâu mộc mạc, độ bám cao, mang lại vẻ đẹp ấm cúng, thân thiện môi trường cho đồ gia dụng."
      }
    ]
  },

  // CHỦ ĐỀ 8: HƯỚNG NGHIỆP
  {
    id: "bai-15",
    themeId: 8,
    number: 15,
    title: "Bài 15. Ngành, nghề liên quan đến mĩ thuật ứng dụng",
    pages: "Trang 75 – 79",
    objectives: [
      "Nhận biết bức tranh toàn cảnh và vai trò then chốt của các ngành nghề Mĩ thuật ứng dụng trong nền kinh tế sáng tạo hiện đại",
      "Phân biệt các nhóm nghề mũi nhọn: Thiết kế đồ hoạ (Graphic Design), Thiết kế thời trang (Fashion), Thiết kế nội thất (Interior), Thiết kế công nghiệp (Product) và Thiết kế giao diện (UI/UX)",
      "Tự đánh giá sở thích, năng khiếu và phẩm chất cá nhân để xây dựng định hướng học tập sau THCS"
    ],
    keywords: ["Mĩ thuật ứng dụng", "Kinh tế sáng tạo", "Graphic Design", "UI/UX Design", "Định hướng nghề nghiệp"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-indigo-600 dark:text-indigo-400">1. Sự bùng nổ của Kinh tế sáng tạo (Creative Economy):</strong> Trong kỉ nguyên công nghệ 4.0, các sản phẩm không chỉ cần bền mà phải đẹp, đem lại trải nghiệm cảm xúc cho người dùng. Mĩ thuật ứng dụng trở thành cầu nối sống còn giữa nghệ thuật thẩm mĩ và công nghiệp sản xuất thương mại.</p>
        <p><strong class="text-indigo-600 dark:text-indigo-400">2. Các nhóm ngành nghề chính thuộc Mĩ thuật ứng dụng:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Thiết kế đồ hoạ (Graphic Design):</strong> Thiết kế nhận diện thương hiệu, bao bì sản phẩm, poster quảng cáo, xuất bản sách báo và đồ hoạ truyền thông số.</li>
          <li><strong>Thiết kế công nghiệp / Tạo dáng sản phẩm (Industrial / Product Design):</strong> Nghiên cứu hình dáng, công năng của đồ gia dụng, xe máy ô tô, thiết bị điện tử, đồ chơi thông minh.</li>
          <li><strong>Thiết kế nội thất & Không gian (Interior Design):</strong> Tổ chức ánh sáng, vật liệu, màu sắc và đồ đạc để kiến tạo không gian sống, làm việc, quán cà phê, nhà hàng tiện nghi và thẩm mĩ.</li>
          <li><strong>Thiết kế thời trang (Fashion Design):</strong> Sáng tạo trang phục, phụ kiện, giày dép, túi xách đón đầu các xu hướng thời trang quốc tế.</li>
          <li><strong>Thiết kế giao diện & Trải nghiệm số (UI/UX Design - Game - Hoạt hình):</strong> Thiết kế giao diện ứng dụng điện thoại (App), website, đồ hoạ nhân vật hoạt hình 2D/3D và kĩ xảo điện ảnh.</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Lập sơ đồ cây nghề nghiệp Mĩ thuật ứng dụng", desc: "Vẽ sơ đồ tư duy phân nhánh các nhóm ngành nghề và những sản phẩm đặc trưng của từng ngành." },
      { step: "Bước 2. Phỏng vấn / Tìm hiểu hồ sơ chuyên gia", desc: "Tìm hiểu câu chuyện nghề nghiệp của một nhà thiết kế đồ hoạ hoặc kiến trúc sư nội thất tiêu biểu." },
      { step: "Bước 3. Tự chấm điểm năng khiếu & Sở thích", desc: "Lập bảng tự đánh giá 5 tiêu chí: óc thẩm mĩ, khả năng vẽ tay, kĩ năng công nghệ, sự kiên trì và tư duy logic." },
      { step: "Bước 4. Xây dựng kế hoạch rèn luyện", desc: "Liệt kê các kĩ năng cần học thêm (phần mềm đồ hoạ Photoshop/Illustrator, ngoại ngữ, quan sát cuộc sống)." }
    ],
    evaluation: [
      "Hiểu rõ và phân biệt chính xác đặc thù công việc của các nhóm ngành mĩ thuật ứng dụng.",
      "Sơ đồ nghề nghiệp trình bày mạch lạc, trực quan, thẩm mĩ và đầy đủ thông tin.",
      "Có thái độ nghiêm túc trong việc tự đánh giá năng lực và xác định mục tiêu học tập tương lai."
    ],
    application: "Thiết kế một bản infographic 'Bản đồ nghề nghiệp Mĩ thuật ứng dụng' dán ở bảng tin hướng nghiệp của nhà trường.",
    quiz: [
      {
        q: "Ngành nghề nào trong mĩ thuật ứng dụng chuyên chịu trách nhiệm thiết kế giao diện ứng dụng di động (App) và trải nghiệm người dùng trên website?",
        options: ["Thiết kế thời trang áo dài", "Thiết kế giao diện và trải nghiệm người dùng (UI/UX Design)", "Nghệ nhân đúc đồng thủ công", "Thợ uốn sắt xây dựng"],
        answer: 1,
        explain: "UI/UX Design là ngành nghề thời thượng chuyên thiết kế giao diện thị giác (UI) và tối ưu hoá hành trình trải nghiệm người dùng (UX) trên nền tảng kĩ thuật số."
      },
      {
        q: "Nhà thiết kế nội thất (Interior Designer) có nhiệm vụ chính là làm gì?",
        options: ["May đo quần áo dạ hội", "Tổ chức không gian, phối hợp ánh sáng, vật liệu, màu sắc và đồ đạc bên trong công trình kiến trúc", "Sửa chữa động cơ xe ô tô", "Lắp ráp chip máy tính vi mạch"],
        answer: 1,
        explain: "Thiết kế nội thất kiến tạo không gian sống bên trong các công trình (nhà ở, khách sạn, văn phòng) sao cho vừa đẹp mắt vừa tiện ích."
      },
      {
        q: "Để trở thành một nhà thiết kế đồ hoạ (Graphic Designer) chuyên nghiệp trong thời đại số, ngoài khả năng thẩm mĩ cần trang bị kĩ năng quan trọng nào?",
        options: ["Thành thạo các phần mềm thiết kế kĩ thuật số (như Photoshop, Illustrator, Figma...) và tư duy truyền thông thị giác", "Khả năng chạy bộ marathon 42km", "Biết lái máy bay thương mại", "Chỉ cần vẽ phấn trên bảng đen"],
        answer: 0,
        explain: "Kĩ năng công nghệ số và sự am hiểu phần mềm đồ hoạ là công cụ bắt buộc của các nhà thiết kế hiện đại để hiện thực hoá ý tưởng."
      },
      {
        q: "Thiết kế công nghiệp / tạo dáng sản phẩm (Industrial Design) tác động trực tiếp đến nhóm sản phẩm nào trong đời sống?",
        options: ["Đồ dùng gia dụng, điện thoại, bàn ghế, xe cộ và máy móc thiết bị", "Những bài thơ tình lãng mạn", "Công thức hoá học trong phòng thí nghiệm", "Những bản nhạc giao hưởng"],
        answer: 0,
        explain: "Thiết kế tạo dáng công nghiệp định hình vẻ ngoài và công năng cơ học của mọi đồ vật được sản xuất hàng loạt trong các nhà máy."
      }
    ]
  },
  {
    id: "bai-16",
    themeId: 8,
    number: 16,
    title: "Bài 16. Đặc trưng của ngành, nghề liên quan đến mĩ thuật ứng dụng",
    pages: "Trang 80 – 84",
    objectives: [
      "Phân tích sâu sắc các phẩm chất, năng lực cốt lõi cần có của một người làm nghề mĩ thuật ứng dụng",
      "Hiểu quy trình phối hợp làm việc nhóm (Teamwork) giữa nhà thiết kế với kĩ sư chế tạo, nhà sản xuất và khách hàng",
      "Xây dựng một hồ sơ năng lực cá nhân (Portfolio ban đầu) thể hiện niềm đam mê và các sản phẩm sáng tạo tiêu biểu"
    ],
    keywords: ["Hồ sơ năng lực (Portfolio)", "Phẩm chất nghề nghiệp", "Tư duy sáng tạo", "Làm việc nhóm", "Đạo đức nghề nghiệp"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-indigo-600 dark:text-indigo-400">1. Chân dung năng lực của nhà thiết kế tương lai:</strong> Làm việc trong lĩnh vực mĩ thuật ứng dụng đòi hỏi sự hội tụ của ba trụ cột: <em>Năng khiếu thẩm mĩ – Kĩ năng công nghệ – Tư duy giải quyết vấn đề (Design Thinking)</em>.</p>
        <p><strong class="text-indigo-600 dark:text-indigo-400">2. Các đặc trưng nghề nghiệp cốt lõi:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Tư duy hướng đến người dùng (Human-Centered):</strong> Thiết kế không phải để thoả mãn cái tôi cá nhân của hoạ sĩ, mà để giải quyết nỗi đau và mang lại sự tiện nghi, an toàn cho người dùng thực tế.</li>
          <li><strong>Kĩ năng làm việc liên ngành (Cross-functional Collaboration):</strong> Nhà thiết kế không làm việc đơn độc trong xưởng hoạ mà phải phối hợp liên tục với kĩ sư công nghệ, chuyên gia vật liệu, bộ phận marketing và nhà sản xuất.</li>
          <li><strong>Đạo đức nghề nghiệp & Bản quyền:</strong> Tôn trọng quyền sở hữu trí tuệ, nói không với việc 'đạo nhái' ý tưởng; có trách nhiệm xã hội và môi trường trong việc lựa chọn vật liệu.</li>
          <li><strong>Hồ sơ Portfolio:</strong> Bộ sưu tập các dự án và tác phẩm xuất sắc nhất của cá nhân, là tấm 'hộ chiếu' giá trị nhất để tuyển sinh vào các trường đại học mĩ thuật và ứng tuyển việc làm.</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Thu thập & Phân loại tác phẩm xuất sắc", desc: "Lựa chọn từ 4 đến 6 tác phẩm ưng ý nhất đã hoàn thành trong các năm học THCS (tranh vẽ, thiết kế bìa, mô hình đồ vật)." },
      { step: "Bước 2. Chụp ảnh chất lượng cao & Số hoá", desc: "Chụp ảnh sản phẩm dưới ánh sáng tự nhiên đủ nét, chỉnh sửa ngay ngắn và lưu thành tệp hình ảnh kĩ thuật số." },
      { step: "Bước 3. Biên tập thông tin dự án", desc: "Viết tóm tắt cho từng tác phẩm: Ý tưởng thiết kế, công năng, vật liệu sử dụng và điều em học được sau khi làm." },
      { step: "Bước 4. Trình bày Portfolio cá nhân", desc: "Thiết kế cuốn Portfolio (dạng bản in hoặc tệp PDF / trang web cá nhân) có trang bìa, mục lục và lời giới thiệu bản thân." }
    ],
    evaluation: [
      "Portfolio được biên tập cẩn thận, hình ảnh sắc nét, bố cục trang trình bày chuyên nghiệp.",
      "Thông tin mô tả tác phẩm rõ ràng, làm nổi bật được quá trình tư duy giải quyết vấn đề.",
      "Thể hiện rõ cá tính sáng tạo riêng và sự đam mê học hỏi đối với lĩnh vực mĩ thuật ứng dụng."
    ],
    application: "Hoàn thiện bản Portfolio số cá nhân để sẵn sàng định hướng thi tuyển vào các trường THPT chuyên nghệ thuật hoặc các khóa đào tạo đồ hoạ.",
    quiz: [
      {
        q: "Hồ sơ năng lực cá nhân (Portfolio) trong lĩnh vực mĩ thuật và thiết kế đóng vai trò gì?",
        options: ["Là cuốn sổ ghi danh bạ điện thoại", "Là tập hợp các tác phẩm, dự án xuất sắc nhất chứng minh năng lực sáng tạo và phong cách của nhà thiết kế", "Là sổ ghi chép hoá đơn mua sắm cá nhân", "Chỉ là một bài kiểm tra trắc nghiệm lí thuyết"],
        answer: 1,
        explain: "Portfolio là bằng chứng trực quan và quan trọng nhất đánh giá trình độ chuyên môn, tư duy thẩm mĩ và kinh nghiệm thực tế của người làm sáng tạo."
      },
      {
        q: "Sự khác biệt căn bản trong tư duy sáng tạo giữa 'Mĩ thuật tạo hình thuần tuý' và 'Mĩ thuật ứng dụng' là gì?",
        options: ["Mĩ thuật tạo hình giải phóng cảm xúc cá nhân hoạ sĩ; Mĩ thuật ứng dụng tập trung giải quyết vấn đề và phục vụ nhu cầu của người sử dụng", "Mĩ thuật ứng dụng không cần phải đẹp", "Mĩ thuật tạo hình luôn dùng máy tính để vẽ", "Cả hai hoàn toàn giống hệt nhau không có điểm khác"],
        answer: 0,
        explain: "Mĩ thuật tạo hình (Hội hoạ, Điêu khắc thuần tuý) thiên về biểu đạt cảm xúc chủ quan; trong khi Mĩ thuật ứng dụng bắt buộc phải giải quyết bài toán nhu cầu thực tế của người dùng."
      },
      {
        q: "Quy chuẩn đạo đức nghề nghiệp tối thượng mà mọi nhà thiết kế chân chính bắt buộc phải tuân thủ là gì?",
        options: ["Sao chép y hệt thiết kế của người khác rồi kí tên mình vào", "Tôn trọng quyền sở hữu trí tuệ, trung thực sáng tạo và không đạo nhái tác phẩm", "Nói xấu sản phẩm của các đồng nghiệp", "Bán hàng giả mạo nhãn hiệu"],
        answer: 1,
        explain: "Đạo đức nghề nghiệp và tôn trọng quyền tác giả là nền tảng danh dự sống còn của người làm nghề sáng tạo."
      },
      {
        q: "Tư duy thiết kế lấy con người làm trung tâm (Human-Centered Design) đòi hỏi nhà thiết kế phải bắt đầu từ bước nào?",
        options: ["Tự vẽ ngay bản vẽ kĩ thuật theo ý mình", "Thấu cảm, lắng nghe và nghiên cứu sâu sắc thói quen, khó khăn và nhu cầu của người sử dụng", "Bán sản phẩm ra thị trường", "Mua máy tính cấu hình mạnh nhất"],
        answer: 1,
        explain: "Tư duy thiết kế lấy người dùng làm trung tâm luôn bắt đầu từ sự thấu cảm (Empathize) để hiểu người dùng thực sự cần gì trước khi đưa ra giải pháp tạo hình."
      }
    ]
  },

  // KIỂM TRA TRƯNG BÀY CUỐI NĂM
  {
    id: "trien-lam-2",
    themeId: 8,
    number: 16.5,
    isExhibition: true,
    title: "Kiểm tra, trưng bày sản phẩm mĩ thuật cuối năm học",
    pages: "Trang 85",
    objectives: [
      "Tổng kết, đánh giá toàn diện hành trình học tập môn Mĩ thuật 9 xuyên suốt cả năm học",
      "Tổ chức ngày hội Triển lãm nghệ thuật tổng kết khối 9: từ khâu phân loại, thiết kế không gian gian hàng đến thuyết minh tác phẩm",
      "Đánh giá sự trưởng thành về năng lực thẩm mĩ, tư duy thiết kế và định hình phong cách nghệ thuật cá nhân trước khi tốt nghiệp THCS"
    ],
    keywords: ["Triển lãm tổng kết", "Đánh giá cuối năm", "Portfolio tốt nghiệp", "Hành trình nghệ thuật", "Tốt nghiệp THCS"],
    coreKnowledge: `
      <div class="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p><strong class="text-indigo-600 dark:text-indigo-400">1. Cột mốc trưởng thành nghệ thuật:</strong> Buổi trưng bày sản phẩm cuối năm học lớp 9 là dấu ấn khép lại toàn bộ chương trình Mĩ thuật cấp Trung học cơ sở, minh chứng cho sự tiến bộ vượt bậc từ nét vẽ ngây ngô lớp 6 đến tư duy tạo hình và thiết kế chững chạc của lớp 9.</p>
        <p><strong class="text-indigo-600 dark:text-indigo-400">2. Nội dung trưng bày toàn diện:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Bộ sưu tập tác phẩm tiêu biểu cả năm:</strong> Tranh hội hoạ cuộc sống, sản phẩm thời trang tái chế, tác phẩm Pop Art, mô hình giá đỡ công nghệ, bìa sách, phù điêu đất nặn, mô hình rối nước và đồ gia dụng Upcycling.</li>
          <li><strong>Gian hàng Portfolio cá nhân:</strong> Mỗi học sinh có một góc trưng bày riêng giới thiệu cuốn Portfolio tổng kết và dự án hướng nghiệp ấp ủ cho tương lai.</li>
          <li><strong>Hội đồng phản biện & Tương tác công chúng:</strong> Học sinh tự tin thuyết minh về hành trình sáng tạo trước phụ huynh, thầy cô và bạn bè; giải đáp các câu hỏi phản biện nghệ thuật.</li>
        </ul>
      </div>
    `,
    process: [
      { step: "Bước 1. Tổng hợp & Hoàn thiện hồ sơ sản phẩm", desc: "Rà soát lại toàn bộ sản phẩm của Học kì I và Học kì II; lựa chọn những tác phẩm tiêu biểu nhất để đóng khung hoặc làm giá đỡ trưng bày." },
      { step: "Bước 2. Thiết kế nhận diện & Không gian triển lãm", desc: "Cả lớp cùng thiết kế poster triển lãm, vé mời, phân chia sơ đồ các gian hàng trưng bày theo nhóm chủ đề mạch lạc." },
      { step: "Bước 3. Thi công lắp đặt & Ánh sáng", desc: "Bố trí bàn trưng bày mô hình khối, treo tranh phẳng đúng tầm mắt, lắp đặt hệ thống đèn chiếu điểm tôn vinh tác phẩm." },
      { step: "Bước 4. Tổ chức sự kiện & Đánh giá tổng kết", desc: "Tiến hành lễ khai mạc, đón tiếp khách tham quan, thuyết minh và tiếp nhận phiếu nhận xét đánh giá từ hội đồng giáo viên." }
    ],
    evaluation: [
      "Có bộ sưu tập sản phẩm phong phú, hoàn thiện đạt chuẩn chất lượng cao của cả năm học.",
      "Không gian triển lãm được tổ chức chuyên nghiệp, thẩm mĩ, sáng tạo và mang tính tập thể cao.",
      "Học sinh thể hiện năng lực tự chủ, tự tin thuyết trình, giao tiếp nghệ thuật và phản biện văn minh."
    ],
    application: "Tổ chức bán đấu giá các sản phẩm đồ gia dụng tái chế và tranh vẽ để quyên góp vào quỹ khuyến học hoặc tặng lại phòng truyền thống của nhà trường.",
    quiz: [
      {
        q: "Mục đích lớn nhất của triển lãm trưng bày sản phẩm mĩ thuật cuối năm học lớp 9 là gì?",
        options: ["Chỉ để dọn dẹp phòng học cho sạch sẽ trước kì nghỉ hè", "Tổng kết, đánh giá toàn diện hành trình phát triển năng lực thẩm mĩ, tư duy sáng tạo và khẳng định dấu ấn cá nhân của học sinh sau 4 năm THCS", "Bắt buộc học sinh phải mua lại tranh của mình", "Chỉ dành riêng cho các bạn học sinh giỏi vẽ"],
        answer: 1,
        explain: "Triển lãm cuối năm là ngày hội vinh danh sự nỗ lực, đúc kết toàn bộ năng lực thẩm mĩ, kĩ năng tạo hình và tư duy thiết kế trước ngưỡng cửa THPT."
      },
      {
        q: "Yếu tố thị giác nào có tác động quyết định đến việc tôn vinh vẻ đẹp nổi khối của các tác phẩm điêu khắc và mô hình trưng bày trong triển lãm?",
        options: ["Để trong bóng tối hoàn toàn", "Hệ thống ánh sáng rọi điểm (Spotlight) tạo bóng đổ và tương phản khối rõ nét", "Bật nhạc sàn thật to", "Bọc kín sản phẩm bằng túi nilon đen"],
        answer: 1,
        explain: "Ánh sáng chiếu điểm chuyên dụng (Spotlight) với góc chiếu chuẩn làm nổi bật hình khối 3 chiều, đường lượn và chất cảm bề mặt của tác phẩm điêu khắc."
      },
      {
        q: "Cuốn sách lưu bút (Guestbook) đặt ở cửa ra vào phòng triển lãm phục vụ mục đích gì?",
        options: ["Để ghi danh sách đòi tiền vé", "Nơi khách tham quan, thầy cô và bạn bè ghi lại những lời cảm nhận, động viên và góp ý chân thành cho các tác giả", "Dùng làm giấy nháp vẽ bậy", "Để kiểm tra sĩ số lớp"],
        answer: 1,
        explain: "Sổ cảm tưởng (Guestbook) là nơi kết nối tâm hồn giữa nghệ sĩ và công chúng, lưu giữ những kỉ niệm và nhận xét quý báu về sự kiện."
      },
      {
        q: "Sau khi hoàn thành chương trình Mĩ thuật 9, năng lực cốt lõi nào giúp học sinh tự tin ứng dụng vào cuộc sống hằng ngày dù sau này có làm hoạ sĩ hay không?",
        options: ["Khả năng cảm thụ cái đẹp, tư duy sáng tạo thẩm mĩ, sự khéo léo và kĩ năng giải quyết vấn đề bằng hình ảnh", "Chỉ nhớ tên các hoạ sĩ nổi tiếng mà không biết làm gì", "Kĩ năng sao chép tranh của người khác", "Năng lực cãi nhau với người khác"],
        answer: 0,
        explain: "Giáo dục mĩ thuật trang bị cho mọi học sinh tư duy thẩm mĩ, thị hiếu lành mạnh, óc sáng tạo và tình yêu đối với cái đẹp trong cuộc sống muôn màu."
      }
    ]
  }
];

// Attach lessons to their respective themes
themes.forEach(t => {
  t.lessons = lessonsData.filter(l => l.themeId === t.id);
});

console.log('Dataset built successfully.');
console.log('Total themes:', themes.length);
console.log('Total units (lessons + exhibitions):', lessonsData.length);

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_dataset.json', JSON.stringify({ themes, lessonsData, glossary }, null, 2), 'utf8');
console.log('Written to mithuat9_dataset.json successfully.');
