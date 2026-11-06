// Mĩ thuật 7 - Bộ Kết nối tri thức với cuộc sống (Part 2: Bài 9 - Bài 16 + Trưng bày cuối năm)
module.exports = [
  // CHỦ ĐỀ 5. HIỆN THỰC CUỘC SỐNG TRONG SÁNG TẠO MĨ THUẬT
  {
    id: 'mt-bai-9',
    num: 9,
    branch: 'Mĩ thuật tạo hình',
    branchTag: 'Tạo hình',
    branchColor: 'pink',
    chapter: 'Chủ đề 5. Hiện thực cuộc sống trong sáng tạo mĩ thuật',
    title: 'Bài 9. Tìm hiểu nguồn sáng trong tranh',
    pages: 'tr. 46–50',
    objective: 'Xác định hướng chiếu và vai trò của nguồn sáng đối với màu sắc, sắc độ, khối và bóng đổ trong tranh phong cảnh; phân tích tác phẩm của Claude Monet và Lê Quốc Lộc.',
    mindmap: 'Nguồn sáng: Tạo cảm xúc, hòa sắc, bóng đổ & khối → Các vùng sáng tối: Vùng sáng nhất → Vùng chuyển tiếp → Vùng tối → Bóng đổ (đối diện nguồn sáng) → Tác phẩm tiêu biểu: "Đồng cỏ khô trên tuyết" (Claude Monet) & "Qua bản cũ" (Lê Quốc Lộc - sơn mài) → Quy trình vẽ phong cảnh có hướng sáng rõ nét.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fffbeb" stroke="#f59e0b"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#f59e0b" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VAI TRÒ NGUỒN SÁNG</text>
        <text x="100" y="48" text-anchor="middle" fill="#fef3c7" font-size="10">Định hình khối vật thể</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef3c7" font-size="10">Tạo bóng đổ & không gian</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#d97706" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">CLAUDE MONET</text>
        <text x="100" y="48" text-anchor="middle" fill="#fef3c7" font-size="10">"Đồng cỏ khô trên tuyết" (1891)</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Trường phái Ấn tượng ánh sáng</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#b45309" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">LÊ QUỐC LỘC</text>
        <text x="95" y="48" text-anchor="middle" fill="#fef3c7" font-size="10">"Qua bản cũ" (1957)</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Sơn mài lung linh ánh vàng</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Vai trò của nguồn sáng trong tạo hình',
        content: `• Nguồn sáng quyết định toàn bộ sắc độ đậm nhạt, hướng bóng đổ, cảm giác về khối tích và không khí cảm xúc của bức tranh.<br>• <strong>Các vùng sáng tối trên vật thể:</strong><br>
        - <em>Vùng đón sáng trực tiếp:</em> Có sắc độ sáng nhất, màu sắc tươi tắn.<br>
        - <em>Vùng trung gian:</em> Chuyển tiếp êm giữa sáng và tối.<br>
        - <em>Vùng tối:</em> Phần khuất ánh sáng của vật thể.<br>
        - <em>Bóng đổ (Cast shadow):</em> Nằm ở mặt nền phía đối diện với hướng chiếu của nguồn sáng.<br>• Trong tranh phong cảnh, nguồn sáng không nhất thiết phải vẽ trực tiếp mặt trời hay vầng trăng, mà được biểu hiện tinh tế qua sự tương phản sáng tối của cây cối, mái nhà và mặt nước.`
      },
      {
        title: '2. Phân tích tác phẩm bậc thầy',
        content: `• <strong>Claude Monet (1840–1926):</strong> Tác phẩm <em>"Đồng cỏ khô trên tuyết" (1891)</em>. Danh họa trường phái Ấn tượng đã nắm bắt khoảnh khắc kỳ diệu của ánh sáng mặt trời mùa đông rọi lên đụn cỏ khô, tạo nên những vệt bóng đổ màu tím xanh huyền ảo trên tuyết trắng.<br>• <strong>Lê Quốc Lộc (1918–1987):</strong> Bức tranh sơn mài <em>"Qua bản cũ" (1957)</em>. Ánh sáng vàng son lấp lánh xuyên qua những tán cọ, rọi chiếu lên những nếp nhà sàn vùng cao tạo nên không gian rực rỡ và ấm cúng.`
      }
    ],
    quiz: [
      {
        question: 'Trong hội họa, bóng đổ của một vật thể trên mặt đất luôn có xu hướng nằm ở vị trí nào?',
        options: [
          'Cùng phía với nguồn sáng chiếu vào',
          'Phía đối diện với hướng chiếu của nguồn sáng',
          'Nằm lơ lửng trên đỉnh đầu vật thể',
          'Luôn luôn nằm lệch về bên tay trái'
        ],
        answer: 1,
        explanation: 'Do ánh sáng truyền thẳng, bóng đổ của vật thể luôn ngả về phía đối diện với nguồn sáng.'
      }
    ],
    checklist: [
      'Xác định được hướng nguồn sáng chính và quy luật tạo bóng đổ trong tranh',
      'Phân tích được vai trò của ánh sáng trong tranh của Claude Monet và Lê Quốc Lộc',
      'Thể hiện được hướng sáng nhất quán trong bài vẽ phong cảnh'
    ]
  },
  {
    id: 'mt-bai-10',
    num: 10,
    branch: 'Mĩ thuật ứng dụng',
    branchTag: 'Ứng dụng',
    branchColor: 'pink',
    chapter: 'Chủ đề 5. Hiện thực cuộc sống trong sáng tạo mĩ thuật',
    title: 'Bài 10. Thiết kế tạo mẫu trang phục',
    pages: 'tr. 51–55',
    objective: 'Nêu các yếu tố trong thiết kế thời trang (kiểu dáng, màu sắc, hoa văn, công năng); thực hành vẽ phác thảo mẫu trang phục đi chơi phù hợp lứa tuổi hoặc khai thác hoa văn dân tộc.',
    mindmap: 'Thiết kế thời trang: Thẩm mĩ + Tiện dụng + Phong cách cá nhân → Ngôn ngữ thiết kế: Phom dáng (silhouette), cấu trúc (cổ, tay, thân), màu sắc, hoa văn → Phác thảo thời trang: Vẽ trục dáng người tỉ lệ → Dựng kiểu dáng áo váy → Phối màu & họa tiết → Hoàn thiện bộ sưu tập.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fdf2f8" stroke="#f43f5e"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#f43f5e" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KIỂU DÁNG & PHOM DÁNG</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffe4e6" font-size="10">Phù hợp lứa tuổi & dịp mặc</text>
        <text x="100" y="68" text-anchor="middle" fill="#ffe4e6" font-size="10">Cổ áo, tay áo, vạt thân</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#e11d48" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">HOA VĂN & MÀU SẮC</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffe4e6" font-size="10">Họa tiết dân tộc / Hiện đại</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Hòa sắc trẻ trung, năng động</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#be123c" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">BỘ SƯU TẬP THỜI TRANG</text>
        <text x="95" y="48" text-anchor="middle" fill="#ffe4e6" font-size="10">Tính đồng bộ về phong cách</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Trang phục nam & nữ</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Các yếu tố cốt lõi trong thiết kế thời trang',
        content: `• Thiết kế thời trang là nghệ thuật ứng dụng nhằm tạo ra trang phục đáp ứng nhu cầu làm đẹp, tiện dụng trong vận động và phù hợp với thuần phong mĩ tục.<br>• <strong>Bốn yếu tố quan trọng:</strong><br>
        - <em>Đối tượng & Dịp sử dụng:</em> Nam/nữ, trang phục đi học, dạo phố, thể thao hay dự lễ hội.<br>
        - <em>Kiểu dáng (Phom dáng):</em> Dáng suông, xòe, ôm vừa vặn; cấu trúc các bộ phận cổ áo, tay áo, túi áo, gấu quần/váy.<br>
        - <em>Màu sắc:</em> Thể hiện cá tính, hòa sắc theo mùa hoặc theo chủ đề bộ sưu tập.<br>
        - <em>Chất liệu & Hoa văn:</em> Khai thác họa tiết thổ cẩm truyền thống, họa tiết hình học cách điệu hiện đại.`
      },
      {
        title: '2. Quy trình thiết kế mẫu trang phục đi dạo phố',
        content: `• <strong>Bước 1:</strong> Xác định đối tượng người mặc và phong cách chủ đạo (năng động, thanh lịch).<br>• <strong>Bước 2:</strong> Phác thảo trục dáng người và tỉ lệ cơ bản.<br>• <strong>Bước 3:</strong> Dựng phom dáng trang phục lên mẫu người, làm rõ đường nét cấu tạo cổ áo, tay áo.<br>• <strong>Bước 4:</strong> Bố trí hoa văn trang trí ở vị trí hợp lí (ngực áo, viền tay, vạt váy).<br>• <strong>Bước 5:</strong> Tô màu hoàn thiện bản vẽ phác thảo thời trang.`
      }
    ],
    quiz: [
      {
        question: 'Một bản vẽ phác thảo thiết kế thời trang đạt yêu cầu cần thể hiện rõ điều gì?',
        options: [
          'Vẽ càng nhiều lớp vải dày đặc che kín mẫu càng tốt',
          'Kiểu dáng rõ ràng, cấu trúc các bộ phận hợp lí, hòa sắc hài hòa và phù hợp mục đích sử dụng',
          'Chỉ cần vẽ hoa văn mà không cần dựng dáng trang phục',
          'Sao chép hoàn toàn mẫu quần áo bán sẵn trên thị trường'
        ],
        answer: 1,
        explanation: 'Bản thiết kế thời trang cần thể hiện rõ kiểu dáng, cấu trúc, hoa văn, màu sắc và công năng tiện dụng.'
      }
    ],
    checklist: [
      'Nắm được các yếu tố cơ bản trong thiết kế tạo mẫu trang phục',
      'Biết cách khai thác hoa văn truyền thống vào kiểu dáng thời trang hiện đại',
      'Vẽ hoàn thiện bản phác thảo trang phục đi chơi cho lứa tuổi học sinh'
    ]
  },

  // CHỦ ĐỀ 6. TẠO HÌNH NGÔI NHÀ TRONG SÁNG TẠO MĨ THUẬT
  {
    id: 'mt-bai-11',
    num: 11,
    branch: 'Mĩ thuật tạo hình',
    branchTag: 'Tạo hình',
    branchColor: 'pink',
    chapter: 'Chủ đề 6. Tạo hình ngôi nhà trong sáng tạo mĩ thuật',
    title: 'Bài 11. Tạo hình ngôi nhà từ vật liệu sẵn có',
    pages: 'tr. 56–60',
    objective: 'Biết cách tái sử dụng vật liệu phế liệu sạch (bìa carton, vỏ hộp, que kem, que gỗ) để tạo hình mô hình ngôi nhà mơ ước đứng vững, có cảnh quan sinh động.',
    mindmap: 'Tái sử dụng rác thải sạch (bìa carton, que kem, vỏ hộp) → Tạo hình mô hình 3D vững chắc → Ý tưởng: "Ngôi nhà trong mây", nhà vườn sinh thái, khu phố xanh → Kĩ năng an toàn khi dùng kéo, dao trổ, keo dán → Tinh thần bảo vệ môi trường.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#f0fdf4" stroke="#10b981"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#10b981" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VẬT LIỆU TÁI CHẾ</text>
        <text x="100" y="48" text-anchor="middle" fill="#d1fae5" font-size="10">Bìa carton, vỏ hộp sữa</text>
        <text x="100" y="68" text-anchor="middle" fill="#d1fae5" font-size="10">Que kem, lá cây khô, sỏi</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#059669" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KẾT CẤU VỮNG CHẮC</text>
        <text x="100" y="48" text-anchor="middle" fill="#d1fae5" font-size="10">Tỉ lệ thân tường & mái nhà</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Gia cố chân đế & mối dán</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#047857" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KHÔNG GIAN CẢNH QUAN</text>
        <text x="95" y="48" text-anchor="middle" fill="#d1fae5" font-size="10">Cây xanh, sân vườn, mây</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Ghép thành khu phố xanh</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Khai thác vật liệu tái sử dụng và ý tưởng kiến trúc',
        content: `• Sử dụng các phế liệu sinh hoạt sạch (bìa cứng, que gỗ, nắp chai, vỏ hộp bánh) vừa tiết kiệm chi phí, vừa lan tỏa thông điệp bảo vệ môi trường.<br>• Quan sát hình khối sẵn có của vỏ hộp để chọn làm thân nhà, mái nghiêng hay hàng rào; phối hợp các mảng màu tự nhiên hoặc tô màu trang trí.<br>• <strong>An toàn thực hành:</strong> Chỉ sử dụng vật liệu khô sạch; cẩn trọng khi dùng kéo hoặc dao rọc giấy trên tấm lót cắt chuyên dụng; hướng lưỡi dao ra xa phía cơ thể.`
      },
      {
        title: '2. Quy trình chế tác mô hình "Ngôi nhà trong mây"',
        content: `• <strong>Bước 1:</strong> Phác thảo ý tưởng ngôi nhà mơ ước và cảnh quan xung quanh trên giấy.<br>• <strong>Bước 2:</strong> Cắt, gấp và dán các mảng bìa carton tạo thành tường, mái nhà, cửa sổ và cửa ra vào.<br>• <strong>Bước 3:</strong> Dán gắn mô hình ngôi nhà lên tấm bìa đế vững chắc.<br>• <strong>Bước 4:</strong> Làm thêm cảnh quan xung quanh (cây xanh bằng que kem/bông gòn, hàng rào, đám mây bay bổng).<br>• <strong>Bước 5:</strong> Tô màu và hoàn thiện tác phẩm.`
      }
    ],
    quiz: [
      {
        question: 'Nguyên tắc an toàn quan trọng nhất khi sử dụng dao rọc giấy hoặc kéo để cắt bìa carton làm mô hình là gì?',
        options: [
          'Cắt thật nhanh không cần nhìn',
          'Đặt bìa lên tấm lót cắt và luôn hướng lưỡi dao ra phía xa người',
          'Dùng tay giữ sát vào đường cắt của lưỡi dao',
          'Để dao kéo bừa bãi dưới sàn nhà'
        ],
        answer: 1,
        explanation: 'Cắt trên tấm lót và hướng lưỡi dao ra xa cơ thể là kĩ năng an toàn lao động bắt buộc trong thực hành mĩ thuật.'
      }
    ],
    checklist: [
      'Biết cách thu gom và tái sử dụng vật liệu sạch làm mô hình',
      'Thực hiện mô hình ngôi nhà đứng vững, có tỉ lệ cân đối',
      'Tuân thủ tuyệt đối quy tắc an toàn khi sử dụng dụng cụ cắt dán'
    ]
  },
  {
    id: 'mt-bai-12',
    num: 12,
    branch: 'Mĩ thuật ứng dụng',
    branchTag: 'Ứng dụng',
    branchColor: 'pink',
    chapter: 'Chủ đề 6. Tạo hình ngôi nhà trong sáng tạo mĩ thuật',
    title: 'Bài 12. Tranh cổ động',
    pages: 'tr. 61–65',
    objective: 'Nêu đặc điểm, vai trò của tranh cổ động (thông điệp ngắn, hình tượng cô đọng, màu sắc tương phản mạnh); thực hành vẽ tranh cổ động bảo vệ môi trường hoặc an toàn trường học.',
    mindmap: 'Tranh cổ động: Tác phẩm truyền thông thị giác tuyên truyền thông điệp ngắn → Đặc điểm: Hình ảnh tượng trưng + Khẩu hiệu súc tích, dễ nhớ + Mảng màu tương phản mạnh nhìn rõ từ xa → Phân biệt với tranh giá vẽ → Quy trình: Xác định thông điệp → Phác mảng hình & chữ → Kẻ chữ rõ ràng → Tô màu tương phản.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fff7ed" stroke="#f97316"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#f97316" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">MỤC TIÊU TRUYỀN THÔNG</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffedd5" font-size="10">Kêu gọi hành động cộng đồng</text>
        <text x="100" y="68" text-anchor="middle" fill="#ffedd5" font-size="10">Thông điệp rõ ràng, tức thì</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#ea580c" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KẾT HỢP HÌNH & CHỮ</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffedd5" font-size="10">Hình tượng mang tính biểu trưng</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Chữ khẩu hiệu ngắn gọn, dễ đọc</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#c2410c" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">MÀU SẮC TƯƠNG PHẢN</text>
        <text x="95" y="48" text-anchor="middle" fill="#ffedd5" font-size="10">Mảng màu lớn, dứt khoát</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Gây ấn tượng từ khoảng cách xa</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Khái niệm và đặc điểm của tranh cổ động (Áp phích)',
        content: `• <strong>Tranh cổ động:</strong> Là thể loại đồ họa ứng dụng phục vụ công tác thông tin, tuyên truyền, cổ vũ hành động tích cực trong xã hội (bảo vệ môi trường, an toàn giao thông, phòng chống dịch bệnh, hòa bình...).<br>• <strong>Ba đặc trưng cơ bản:</strong><br>
        - <em>Hình ảnh:</em> Có tính tượng trưng cao, cô đọng, dễ hiểu ngay sau một lần nhìn.<br>
        - <em>Chữ khẩu hiệu:</em> Ngắn gọn, súc tích, kiểu chữ in hoa rõ ràng, mạch lạc, dễ nhớ.<br>
        - <em>Màu sắc:</em> Thường sử dụng các mảng màu nguyên chất, độ tương phản mạnh (đỏ - trắng, vàng - xanh...) để tác động mạnh mẽ tới thị giác từ xa.`
      },
      {
        title: '2. Quy trình sáng tạo tranh cổ động "Bảo vệ môi trường"',
        content: `• <strong>Bước 1:</strong> Xác định thông điệp cốt lõi (VD: <em>"Chung tay giữ sạch hành tinh xanh"</em>, <em>"Bỏ rác đúng nơi quy định"</em>).<br>• <strong>Bước 2:</strong> Chọn hình tượng ẩn dụ (Trái Đất được nâng niu, cây xanh, dòng nước mát, đôi bàn tay đoàn kết).<br>• <strong>Bước 3:</strong> Phác mảng bố cục phân định rõ vị trí của hình ảnh chính và phần chữ khẩu hiệu.<br>• <strong>Bước 4:</strong> Kẻ chữ ngay ngắn, đúng chính tả; tô các mảng màu phẳng, tương phản nổi bật.`
      }
    ],
    quiz: [
      {
        question: 'Đặc điểm nào sau đây KHÔNG PHẢI là đặc trưng của tranh cổ động?',
        options: [
          'Hình tượng cô đọng, mang tính biểu tượng cao',
          'Chữ khẩu hiệu ngắn gọn, dễ đọc, tác động nhận thức nhanh',
          'Vẽ vờn tỉa chi tiết tả thực rườm rà như tranh phong cảnh sơn dầu',
          'Màu sắc có độ tương phản mạnh gây ấn tượng thị giác từ xa'
        ],
        answer: 2,
        explanation: 'Tranh cổ động cần sự giản lược, dứt khoát; không vẽ rườm rà hay tả thực phức tạp làm loãng thông điệp tuyên truyền.'
      }
    ],
    checklist: [
      'Phân biệt được tranh cổ động với tranh hội họa biểu cảm',
      'Lựa chọn được hình tượng ẩn dụ và khẩu hiệu tuyên truyền sắc bén',
      'Hoàn thành bức tranh cổ động có bố cục hình - chữ cân đối, màu sắc tương phản rõ'
    ]
  },

  // CHỦ ĐỀ 7. SUM HỌP GIA ĐÌNH
  {
    id: 'mt-bai-13',
    num: 13,
    branch: 'Mĩ thuật tạo hình',
    branchTag: 'Tạo hình',
    branchColor: 'pink',
    chapter: 'Chủ đề 7. Sum họp gia đình',
    title: 'Bài 13. Đề tài gia đình trong sáng tạo mĩ thuật',
    pages: 'tr. 66–70',
    objective: 'Cảm nhận tình cảm gia đình qua tác phẩm hội họa (Lê Mai Khanh, Pierre-Auguste Renoir); nắm vững kĩ thuật in độc bản (Monoprint) để sáng tạo bức tranh sum họp gia đình ấm áp.',
    mindmap: 'Đề tài gia đình: Khoảnh khắc yêu thương, sum họp, kỷ niệm ấm áp → Tác phẩm tiêu biểu: "Bà cháu" (Lê Mai Khanh - khắc gỗ), "Gia đình nghệ sĩ" (Pierre-Auguste Renoir - sơn dầu) → Kĩ thuật In độc bản (Monoprint): Vẽ màu lên bề mặt trơn (tấm mica/kính) → Đặt giấy lên xoa đều → Bóc giấy thu được bản in độc nhất duy nhất.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fdf4ff" stroke="#c084fc"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#c084fc" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">TÌNH CẢM GIA ĐÌNH</text>
        <text x="100" y="48" text-anchor="middle" fill="#f3e8ff" font-size="10">Bữa cơm sum vầy, vui chơi</text>
        <text x="100" y="68" text-anchor="middle" fill="#f3e8ff" font-size="10">Quan hệ ánh mắt, cử chỉ</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#a855f7" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KĨ THUẬT IN ĐỘC BẢN</text>
        <text x="100" y="48" text-anchor="middle" fill="#f3e8ff" font-size="10">Vẽ màu lên tấm mica/kính</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Tạo bản in duy nhất (Monoprint)</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#9333ea" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">HIỆU ỨNG THỊ GIÁC</text>
        <text x="95" y="48" text-anchor="middle" fill="#f3e8ff" font-size="10">Chất cảm loang màu ngẫu nhiên</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Lưu ý hình in đảo chiều</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Ý nghĩa đề tài gia đình trong sáng tạo hội họa',
        content: `• Gia đình là bến đỗ bình yên, nơi lưu giữ những khoảnh khắc gắn kết thiêng liêng nhất của đời người: bữa cơm tất niên, quây quần nghe bà kể chuyện, cùng bố mẹ dọn dẹp nhà cửa.<br>• Trong tranh đề tài gia đình, việc sắp xếp bố cục nhóm nhân vật gần gũi, các ánh mắt hướng về nhau và cử chỉ yêu thương tạo nên bầu không khí ấm áp, tràn ngập hạnh phúc.<br>• Tác phẩm <em>"Bà cháu" (1978)</em> của Lê Mai Khanh (khắc gỗ) và <em>"Gia đình nghệ sĩ" (1898)</em> của Renoir là những mẫu mực tuyệt đẹp về hòa sắc và cảm xúc gia đình.`
      },
      {
        title: '2. Kĩ thuật sáng tạo bằng In độc bản (Monoprint)',
        content: `• <strong>In độc bản:</strong> Là kĩ thuật in đồ họa đặc biệt, trong đó người nghệ sĩ chỉ tạo ra <strong>một bản in duy nhất</strong>.<br>• <strong>Quy trình thực hiện:</strong><br>
        1. Phác thảo bố cục bức tranh gia đình lên giấy.<br>
        2. Dùng màu acrylic, màu bột hoặc sơn dầu vẽ trực tiếp lên một tấm kính hoặc tấm mica phẳng sạch.<br>
        3. Khi màu còn độ ẩm thích hợp, nhẹ nhàng đặt tờ giấy in lên bề mặt tấm kính, dùng tay hoặc con lăn xoa đều nhẹ nhàng khắp mặt giấy.<br>
        4. Cẩn thận bóc tờ giấy ra; lưu ý: hình ảnh in ra sẽ bị <strong>ngược chiều trái – phải</strong> so với hình vẽ ban đầu trên tấm kính (cần tính toán trước hướng chữ hoặc cử chỉ nhân vật).`
      }
    ],
    quiz: [
      {
        question: 'Đặc điểm đặc trưng nhất của kĩ thuật "In độc bản" (Monoprint) trong mĩ thuật là gì?',
        options: [
          'Có thể in hàng ngàn bản giống hệt nhau như in offset',
          'Chỉ in ra được một bản duy nhất mang hiệu ứng chất cảm màu loang tự nhiên độc đáo',
          'Phải khắc chìm thật sâu vào bản gỗ lim',
          'Chỉ in được bằng mực đen trắng'
        ],
        answer: 1,
        explanation: 'In độc bản chỉ cho ra một bản in duy nhất bởi lớp màu trên bề mặt kính/mica sẽ chuyển phần lớn sang giấy in.'
      }
    ],
    checklist: [
      'Lựa chọn được khoảnh khắc sum họp gia đình giàu cảm xúc',
      'Nắm vững 4 bước kĩ thuật in độc bản trên tấm mica/kính',
      'Hiểu quy luật đảo chiều trái - phải của bản in đồ họa'
    ]
  },
  {
    id: 'mt-bai-14',
    num: 14,
    branch: 'Mĩ thuật ứng dụng',
    branchTag: 'Ứng dụng',
    branchColor: 'pink',
    chapter: 'Chủ đề 7. Sum họp gia đình',
    title: 'Bài 14. Thiết kế khung ảnh từ vật liệu sẵn có',
    pages: 'tr. 71–75',
    objective: 'Nêu công năng của khung ảnh; hiểu nguyên lí nhịp điệu (sự lặp lại có quy luật của họa tiết/màu sắc); thực hành làm khung ảnh gia đình từ bìa cứng và giấy cuộn/que gỗ.',
    mindmap: 'Khung ảnh: Bảo vệ + Tôn vinh vẻ đẹp bức ảnh kỉ niệm gia đình → Nguyên lí nhịp điệu: Sự nhắc lại có quy luật của hình, nét, màu (dày - thưa, to - nhỏ, đối xứng) → Vật liệu tái chế: Bìa carton, que kem, vỏ sò, giấy báo cuộn → Quy trình: Cắt khung chuẩn cỡ ảnh → Tạo họa tiết nhịp điệu → Dán trang trí & Chân đỡ.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fdf2f8" stroke="#ec4899"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#ec4899" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">CÔNG NĂNG KHUNG ẢNH</text>
        <text x="100" y="48" text-anchor="middle" fill="#fce7f3" font-size="10">Bảo vệ & Tôn nổi bức ảnh</text>
        <text x="100" y="68" text-anchor="middle" fill="#fce7f3" font-size="10">Phù hợp không gian bàn học</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#db2777" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">NGUYÊN LÍ NHỊP ĐIỆU</text>
        <text x="100" y="48" text-anchor="middle" fill="#fce7f3" font-size="10">Lặp lại hình dáng, màu sắc</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Dày – thưa, đều đặn dẫn mắt</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#be185d" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VẬT LIỆU SÁNG TẠO</text>
        <text x="95" y="48" text-anchor="middle" fill="#fce7f3" font-size="10">Giấy cuộn, vỏ ốc, que kem</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Mối ghép keo chắc chắn</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Chức năng của khung ảnh và nguyên lí Nhịp điệu',
        content: `• <strong>Chức năng:</strong> Khung ảnh tạo đường viền trang trọng bảo vệ bức ảnh khỏi ẩm mốc, làm nổi bật chủ thể chính của bức ảnh và hài hòa với không gian nội thất trưng bày.<br>• <strong>Nguyên lí Nhịp điệu (Rhythm):</strong> Là sự sắp xếp lặp đi lặp lại có quy luật của các yếu tố tạo hình (hình khối, đường nét, mảng màu, sắc độ hoặc họa tiết). Nhịp điệu tạo nên dòng chảy thị giác êm ái, liên kết các cạnh khung ảnh chặt chẽ mà không làm rối mắt.`
      },
      {
        title: '2. Quy trình làm khung ảnh từ bìa cứng và giấy cuộn',
        content: `• <strong>Bước 1:</strong> Đo kích thước bức ảnh gia đình cần lồng (ví dụ: cỡ 10x15 cm), tính toán viền khung rộng từ 3–5 cm mỗi cạnh.<br>• <strong>Bước 2:</strong> Cắt bìa cứng làm mặt trước (khoét rỗng lòng sổ) và mặt lưng có chân đế tựa hoặc móc treo.<br>• <strong>Bước 3:</strong> Cuộn giấy báo/giấy màu thành các ống tròn hoặc gấp họa tiết hoa lá nhỏ.<br>• <strong>Bước 4:</strong> Sắp xếp họa tiết theo quy luật nhịp điệu (đối xứng, xen kẽ to nhỏ) quanh viền khung và dán keo chắc chắn.<br>• <strong>Bước 5:</strong> Lắp ảnh, gia cố mặt sau và đặt tại góc học tập.`
      }
    ],
    quiz: [
      {
        question: 'Trong mĩ thuật ứng dụng, "Nhịp điệu" được định nghĩa là gì?',
        options: [
          'Âm thanh phát ra từ nhạc cụ',
          'Sự lặp lại có quy luật của hình ảnh, đường nét, màu sắc hoặc họa tiết tạo nên dòng chảy thị giác liên kết',
          'Vẽ càng nhiều màu sắc rực rỡ càng tốt',
          'Chỉ vẽ các đường thẳng song song tuyệt đối'
        ],
        answer: 1,
        explanation: 'Nhịp điệu thị giác là sự lặp lại có quy luật của các yếu tố tạo hình mang lại vẻ đẹp sinh động và hài hòa.'
      }
    ],
    checklist: [
      'Nắm được tỉ lệ kích thước tiêu chuẩn khi làm khung cho một bức ảnh',
      'Ứng dụng thành thạo nguyên lí nhịp điệu trong trang trí viền khung',
      'Tạo ra sản phẩm khung ảnh đứng vững, chắc chắn, giàu tính thẩm mĩ'
    ]
  },

  // CHỦ ĐỀ 8. MĨ THUẬT VIỆT NAM THỜI KÌ TRUNG ĐẠI
  {
    id: 'mt-bai-15',
    num: 15,
    branch: 'Mĩ thuật tạo hình',
    branchTag: 'Tạo hình',
    branchColor: 'pink',
    chapter: 'Chủ đề 8. Mĩ thuật Việt Nam thời kì trung đại',
    title: 'Bài 15. Di sản mĩ thuật Việt Nam thời kì trung đại',
    pages: 'tr. 76–81',
    objective: 'Nhận biết các di sản điêu khắc kinh điển qua các triều đại Lý, Trần, Lê sơ, Mạc và Chăm-pa; thực hành nặn mô phỏng tượng con giống/linh thú truyền thống.',
    mindmap: 'Di sản trung đại Việt Nam: Tính ước lệ cao + Gắn liền tín ngưỡng & cuộc sống mộc mạc → Thời Lý: Phù điêu chim phượng đất nung (mềm mại, thanh thoát) → Thời Trần: Tượng hổ đá lăng Trần Thủ Độ (khỏe khoắn, gân guốc) → Thời Mạc: Tượng Phật bà Quan âm gỗ phủ sơn → Chăm-pa: Tượng sư tử đá (uy nghiêm) → Nặn mô phỏng linh thú.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fefce8" stroke="#eab308"/>
      <g transform="translate(25, 25)">
        <rect x="0" y="0" width="145" height="90" rx="8" fill="#ca8a04" />
        <text x="72" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">THỜI LÝ (XI – XIII)</text>
        <text x="72" y="48" text-anchor="middle" fill="#fef9c3" font-size="9">Phượng đất nung</text>
        <text x="72" y="68" text-anchor="middle" fill="#fef9c3" font-size="9">Uốn lượn mềm mại</text>
      </g>
      <g transform="translate(180, 25)">
        <rect x="0" y="0" width="155" height="90" rx="8" fill="#a16207" />
        <text x="77" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">THỜI TRẦN (XIII – XIV)</text>
        <text x="77" y="48" text-anchor="middle" fill="#fef9c3" font-size="9">Hổ đá lăng Trần Thủ Độ</text>
        <text x="77" y="68" text-anchor="middle" fill="#fef9c3" font-size="9">Hình khối khỏe khoắn</text>
      </g>
      <g transform="translate(345, 25)">
        <rect x="0" y="0" width="165" height="90" rx="8" fill="#854d0e" />
        <text x="82" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">THỜI MẠC & LÊ TRUNG HƯNG</text>
        <text x="82" y="48" text-anchor="middle" fill="#fef9c3" font-size="9">Phật bà Quan âm gỗ sơn</text>
        <text x="82" y="68" text-anchor="middle" fill="#fef9c3" font-size="9">Chạm gỗ đình làng mộc mạc</text>
      </g>
      <g transform="translate(520, 25)">
        <rect x="0" y="0" width="155" height="90" rx="8" fill="#713f12" />
        <text x="77" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">ĐIÊU KHẮC CHĂM-PA</text>
        <text x="77" y="48" text-anchor="middle" fill="#fef9c3" font-size="9">Sư tử đá, vũ nữ Apsara</text>
        <text x="77" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="9">Sa thạch sống động</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Đặc điểm nghệ thuật điêu khắc qua các thời kì lịch sử',
        content: `• Di sản mĩ thuật tạo hình trung đại Việt Nam mang đậm <strong>tính ước lệ, hình khối mộc mạc, giản dị</strong> và gắn bó mật thiết với thế giới tâm linh và sinh hoạt thôn quê:<br>
        - <em>Thời Lý:</em> Nghệ thuật cung đình đạt độ tinh xảo, đường nét mềm mại, uyển chuyển (phù điêu chim phượng đất nung, rồng thời Lý uốn khúc hình túi thon dần).<br>
        - <em>Thời Trần:</em> Hình khối căng đầy, khỏe khoắn, gân guốc phản ánh hào khí Đông A quật cường (tượng hổ đá lăng Thái sư Trần Thủ Độ ở Thái Bình).<br>
        - <em>Thời Mạc & Lê:</em> Điêu khắc gỗ dân gian phát triển rực rỡ ở các ngôi đình làng (đình Hạ Hiệp), tượng Phật bà Quan âm ngàn mắt ngàn tay tĩnh tại, bao dung.<br>
        - <em>Điêu khắc Chăm-pa:</em> Khối sa thạch đồ sộ, cơ bắp căng tràn, đường nét phóng khoáng tôn vinh các vị thần và linh thú (sư tử đá, chim thần Garuda).`
      },
      {
        title: '2. Quy trình nặn mô phỏng tượng linh thú truyền thống',
        content: `• <strong>Bước 1:</strong> Chọn hình tượng (tượng hổ đá, tượng nghê đá, sư tử) và phân tích dáng khối tổng thể.<br>• <strong>Bước 2:</strong> Dùng đất nặn tạo các khối hình học lớn (thân, đầu, 4 chân) và so sánh tương quan tỉ lệ.<br>• <strong>Bước 3:</strong> Ghép các khối lại với nhau, gia cố mối nối và chỉnh sửa dáng đứng vững chãi.<br>• <strong>Bước 4:</strong> Nặn khắc chi tiết nhận diện (tai, bờm, mắt, móng vuốt) và tạo chất cảm bề mặt đá rêu phong.`
      }
    ],
    quiz: [
      {
        question: 'Tác phẩm điêu khắc "Tượng hổ đá" nổi tiếng với hình khối khỏe khoắn, gân guốc tại lăng Thái sư Trần Thủ Độ thuộc thời kì lịch sử nào?',
        options: ['Thời Lý', 'Thời Trần', 'Thời Hậu Lê', 'Thời Nguyễn'],
        answer: 1,
        explanation: 'Tượng hổ đá thời Trần là đỉnh cao điêu khắc lăng mộ, phản ánh hào khí Đông A dũng mãnh của quân dân nhà Trần.'
      }
    ],
    checklist: [
      'Phân biệt được phong cách điêu khắc thời Lý (mềm mại) và thời Trần (khỏe khoắn)',
      'Nhận biết được tượng hổ đá thời Trần và tượng sư tử đá Chăm-pa',
      'Nặn thành công một mô hình con giống/linh thú giữ đúng đặc trưng tạo hình truyền thống'
    ]
  },
  {
    id: 'mt-bai-16',
    num: 16,
    branch: 'Mĩ thuật ứng dụng',
    branchTag: 'Ứng dụng',
    branchColor: 'pink',
    chapter: 'Chủ đề 8. Mĩ thuật Việt Nam thời kì trung đại',
    title: 'Bài 16. Khai thác giá trị tạo hình truyền thống trong trang trí đồ vật',
    pages: 'tr. 82–86',
    objective: 'Nhận biết các đồ vật ứng dụng trung đại (gốm hoa nâu, gốm hoa lam, đồ vàng bạc, gạch đất nung trang trí); thực hành khai thác hoa văn cổ truyền để trang trí chậu cây, hộp bút hoặc vật dụng cá nhân.',
    mindmap: 'Di sản ứng dụng trung đại: Gốm hoa nâu (TK XIII-XIV), Gốm hoa lam (TK XV), Gạch đất nung trang trí ngựa (TK XVI), Đĩa hình rồng gốm pháp lam → Khai thác hoa văn cổ: Hoa sen, hoa cúc cách điệu, mây cuộn, sóng nước → Quy trình trang trí chậu cây cảnh/hộp bút: Làm sạch bề mặt → Phác họa tiết di sản → Tô màu chịu nước bền vững.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#f0fdf4" stroke="#059669"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#059669" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">GỐM HOA NÂU & HOA LAM</text>
        <text x="100" y="48" text-anchor="middle" fill="#d1fae5" font-size="10">Gốm hoa nâu thời Trần (TK XIV)</text>
        <text x="100" y="68" text-anchor="middle" fill="#d1fae5" font-size="10">Ấm gốm hoa lam thời Lê (TK XV)</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#047857" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">HỌA TIẾT CỔ TRUYỀN</text>
        <text x="100" y="48" text-anchor="middle" fill="#d1fae5" font-size="10">Hoa sen dây, hoa cúc vạn thọ</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Sóng nước thủy ba, mây cuộn</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#065f46" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">TRANG TRÍ VẬT DỤNG</text>
        <text x="95" y="48" text-anchor="middle" fill="#d1fae5" font-size="10">Chậu cây cảnh, hộp bút</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Bảo tồn di sản qua đời sống</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Kho tàng mĩ thuật ứng dụng cổ truyền Việt Nam',
        content: `• Di sản ứng dụng trung đại của cha ông ta vô cùng phong phú và đạt kĩ thuật chế tác đỉnh cao:<br>
        - <em>Gốm hoa nâu thời Lý – Trần:</em> Liễn có nắp, thạp gốm men trắng ngà vẽ men nâu họa tiết hoa sen, chiến binh dũng mãnh.<br>
        - <em>Gốm hoa lam thời Lê sơ:</em> Men lam coban xanh biếc vẽ mây trời, chim muông, hoa cúc thanh thoát.<br>
        - <em>Gạch đất nung trang trí:</em> Đắp nổi hình tượng ngựa có cánh, phượng múa ở các tháp chùa thời Mạc (TK XVI).<br>
        - <em>Kim hoàn & Pháp lam:</em> Chế tác đồ vàng bạc cung đình tinh xảo thời Nguyễn.`
      },
      {
        title: '2. Quy trình trang trí chậu cây / hộp bút bằng hoa văn truyền thống',
        content: `• <strong>Bước 1:</strong> Chuẩn bị chậu cây đất nung hoặc hộp bút gỗ/bìa; làm sạch và lau khô bề mặt.<br>• <strong>Bước 2:</strong> Lựa chọn họa tiết di sản yêu thích (hoa cúc dây, sóng nước, vân mây) và giản lược nét cho phù hợp với độ cong của miệng chậu.<br>• <strong>Bước 3:</strong> Dùng bút chì phác nhẹ các đường chu vi và phân chia khoảng cách nhịp điệu đều đặn.<br>• <strong>Bước 4:</strong> Dùng màu acrylic hoặc màu vẽ gốm tô viền nét và mảng màu; sơn phủ lớp bóng bảo vệ chống thấm nước.<br>• <strong>Bước 5:</strong> Trồng cây cảnh xanh tươi vào chậu và trưng bày làm đẹp không gian sống.`
      }
    ],
    quiz: [
      {
        question: 'Dòng gốm cổ truyền nào đặc trưng cho thời kì nhà Trần với kĩ thuật cạo men để lộ màu nâu mộc mạc?',
        options: ['Gốm hoa lam', 'Gốm hoa nâu', 'Gốm men ngọc (celadon)', 'Gốm pháp lam'],
        answer: 1,
        explanation: 'Gốm hoa nâu thời Lý - Trần là đỉnh cao gốm cổ thuần Việt với sắc nâu giản dị, khỏe khoắn.'
      }
    ],
    checklist: [
      'Nhận diện được các dòng gốm hoa nâu thời Trần và gốm hoa lam thời Lê',
      'Khai thác được họa tiết hoa sen, sóng nước cổ truyền vào bề mặt cong của vật dụng',
      'Hoàn thành sản phẩm chậu cây trang trí đẹp mắt và giữ nguyên công năng sử dụng'
    ]
  },

  // CHUYÊN ĐỀ: KIỂM TRA, TRƯNG BÀY CUỐI NĂM
  {
    id: 'mt-bai-kt2',
    num: 'KT2',
    branch: 'Trưng bày & Đánh giá',
    branchTag: 'Trưng bày',
    branchColor: 'indigo',
    chapter: 'Kiểm tra & Trưng bày',
    title: 'Kiểm tra, trưng bày sản phẩm cuối năm học',
    pages: 'tr. 87–88',
    objective: 'Tổng kết và tuyển chọn các sản phẩm mĩ thuật xuất sắc nhất trong cả năm học; tổ chức ngày hội triển lãm mĩ thuật toàn khóa; đánh giá toàn diện 4 phẩm chất và năng lực mĩ thuật.',
    mindmap: 'Tuyển chọn tác phẩm tiêu biểu cả năm học → Bố trí triển lãm mĩ thuật khoa học: Ánh sáng, lối đi, khoảng cách, nhãn tác phẩm → Tổng kết 4 năng lực cốt lõi: Quan sát nhận thức - Sáng tạo ứng dụng - Phân tích đánh giá - Vận dụng đời sống → Tự hào hành trình sáng tạo.',
    svg: `<svg viewBox="0 0 700 150" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="130" rx="16" fill="#eef2ff" stroke="#6366f1"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#6366f1" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">BỘ SƯU TẬP CẢ NĂM</text>
        <text x="100" y="48" text-anchor="middle" fill="#e0e7ff" font-size="10">8 Chủ đề &bull; 16 Bài học</text>
        <text x="100" y="68" text-anchor="middle" fill="#e0e7ff" font-size="10">Tạo hình &bull; Ứng dụng &bull; Di sản</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#4f46e5" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KHÔNG GIAN TRIỂN LÃM</text>
        <text x="100" y="48" text-anchor="middle" fill="#e0e7ff" font-size="10">Bàn trưng bày mô hình 3D</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Vách treo tranh ngang tầm mắt</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#4338ca" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">TỔNG KẾT NĂNG LỰC</text>
        <text x="95" y="48" text-anchor="middle" fill="#e0e7ff" font-size="10">Quan sát & nhận thức</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Sáng tạo & Đánh giá thẩm mĩ</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Kế hoạch tổ chức triển lãm mĩ thuật cuối năm',
        content: `• <strong>Mục tiêu:</strong> Tôn vinh hành trình sáng tạo của từng cá nhân và nhóm học sinh trong suốt 8 chủ đề học tập.<br>• <strong>Phân khu triển lãm:</strong><br>
        - <em>Khu vực Tranh 2D:</em> Tranh phong cảnh có chiều sâu không gian, tranh tĩnh vật chì/màu, tranh in độc bản gia đình, tranh cổ động môi trường.<br>
        - <em>Khu vực Mô hình 3D:</em> Tượng nặn di tích, mô hình ngôi nhà tái chế, chậu cây trang trí gốm hoa nâu.<br>
        - <em>Khu vực Thiết kế đồ họa:</em> Bản thiết kế tem bưu chính, logo lớp học, bản vẽ mẫu trang phục thời trang.<br>• <strong>Quy chuẩn:</strong> Bố trí lối đi an toàn, chiếu sáng đầy đủ, gắn nhãn chú thích chuyên nghiệp.`
      },
      {
        title: '2. Đánh giá và tổng kết 4 năng lực mĩ thuật cốt lõi',
        content: `• <strong>Năng lực quan sát và nhận thức thẩm mĩ:</strong> Biết rung cảm trước vẻ đẹp thiên nhiên, con người và nhận biết các di sản văn hóa nghệ thuật của dân tộc và thế giới.<br>• <strong>Năng lực sáng tạo và ứng dụng:</strong> Biết vận dụng linh hoạt các yếu tố và nguyên lí tạo hình để làm ra sản phẩm có giá trị sử dụng và thẩm mĩ.<br>• <strong>Năng lực phân tích và đánh giá:</strong> Biết nhận xét, chia sẻ cảm xúc và góp ý xây dựng bằng ngôn ngữ mĩ thuật khách quan.<br>• <strong>Tự hào và lan tỏa:</strong> Ý thức bảo tồn di sản văn hóa và làm đẹp cho ngôi nhà, trường lớp.`
      }
    ],
    quiz: [
      {
        question: 'Mục đích cao nhất của việc tổ chức triển lãm và đánh giá sản phẩm mĩ thuật cuối năm học là gì?',
        options: [
          'Chấm điểm xếp loại để phạt những bạn vẽ chưa đẹp',
          'Tôn vinh nỗ lực sáng tạo, tổng kết sự tiến bộ về năng lực thẩm mĩ và lan tỏa tình yêu nghệ thuật vào đời sống',
          'Bán đấu giá sản phẩm lấy tiền chia nhau',
          'Vứt bỏ các bài tập cũ để chuẩn bị nghỉ hè'
        ],
        answer: 1,
        explanation: 'Triển lãm cuối năm giúp học sinh nhìn lại sự trưởng thành thẩm mĩ, tự hào về thành quả sáng tạo của bản thân và bạn bè.'
      }
    ],
    checklist: [
      'Lập được danh mục hồ sơ sản phẩm mĩ thuật cá nhân tiêu biểu trong năm',
      'Tham gia tích cực vào công tác thiết kế và bài trí không gian triển lãm của lớp',
      'Tự đánh giá được sự tiến bộ của bản thân qua 4 năng lực mĩ thuật cốt lõi'
    ]
  }
];
