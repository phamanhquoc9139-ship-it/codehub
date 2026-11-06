// Lessons 9 to 16 for Am Nhac 8 (Topics 5 to 8)

const lessonsPart2 = [
  // BÀI 9
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Chào xuân",
    title: "Bài 9: Hát bài 'Ngày Tết quê em' & Thưởng thức Nhạc sĩ Trần Hoàn và 'Một mùa xuân nho nhỏ'",
    tag: "Hát & Thường thức",
    objectives: [
      "Hát bài 'Ngày Tết quê em' đúng giai điệu, lời ca, nhịp độ; thể hiện không khí tưng bừng, niềm vui sum họp ngày Tết.",
      "Tìm hiểu cuộc đời và sự nghiệp vẻ vang của Nhạc sĩ Trần Hoàn – cây đại thụ của tân nhạc Việt Nam (Giải thưởng Hồ Chí Minh về VH-NT).",
      "Thưởng thức ca khúc bất hủ 'Một mùa xuân nho nhỏ' (thơ: Thanh Hải, nhạc: Trần Hoàn), cảm nhận giai điệu đằm thắm, tha thiết.",
      "Hát kết hợp vận động, gõ đệm theo nhịp hoặc hòa tấu nhạc cụ gõ; liên hệ nét đẹp văn hóa đón Tết của gia đình và quê hương."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="470" height="90" rx="14" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="26" fill="#fee2e2"/>
      <text x="55" y="68" text-anchor="middle" font-size="22" fill="#dc2626"><tspan font-family="FontAwesome">&#xf06c;</tspan></text>
      <text x="100" y="45" font-size="13" font-weight="bold" fill="#991b1b">HÁT: NGÀY TẾT QUÊ EM (Từ Huy) • Rộn ràng xuân sang</text>
      <text x="100" y="65" font-size="11" fill="#b91c1c">• Tết sum vầy, câu chúc may mắn, hoa mai hoa đào nở rộ</text>
      <text x="100" y="85" font-size="11" font-weight="bold" fill="#047857">THƯỞNG THỨC: NHẠC SĨ TRẦN HOÀN • Một mùa xuân nho nhỏ</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-sun text-rose-600"></i>
            1. Học hát: "Ngày Tết quê em" (Nhạc &amp; lời: Từ Huy)
          </h4>
          <p>• <strong>Không khí âm nhạc:</strong> Ca khúc mang giai điệu rộn rã, tưng bừng, đậm đà sắc xuân truyền thống Việt Nam: <em>"Tết Tết Tết Tết đến rồi... Tết đến trong tim mọi người"</em>.</p>
          <p class="mt-1">• <strong>Ý nghĩa nhân văn:</strong> Nhắc nhở nét đẹp sum họp gia đình, con cháu quây quần chúc thọ ông bà, cha mẹ, phong tục mừng tuổi và ước mong một năm mới an khang thịnh vượng.</p>
          <p class="mt-1">• <strong>Kĩ thuật hát:</strong> Tiết tấu nhảy nhót tươi vui, phát âm nhả chữ dứt khoát, nụ cười rạng rỡ khi trình bày bài hát.</p>
        </div>

        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-award text-amber-600"></i>
            2. Thưởng thức âm nhạc: Nhạc sĩ Trần Hoàn và ca khúc "Một mùa xuân nho nhỏ"
          </h4>
          <p>• <strong>Nhạc sĩ Trần Hoàn (1928 – 2003):</strong> Quê ở Quảng Trị, là nhạc sĩ lớn có đóng góp to lớn cho nền âm nhạc cách mạng Việt Nam. Ông từng giữ chức Bộ trưởng Bộ Văn hóa – Thông tin và được Nhà nước truy tặng <em>Giải thưởng Hồ Chí Minh về Văn học – Nghệ thuật</em>.</p>
          <p class="mt-1">• Các tác phẩm nổi tiếng: <em>Sơn nữ ca, Lời ru trên nương, Giữa Mạc Tư Khoa nghe câu hò Nghệ Tĩnh, Lời Bác dặn trước lúc đi xa...</em></p>
          <p class="mt-1">• <strong>Ca khúc "Một mùa xuân nho nhỏ":</strong> Phổ nhạc từ bài thơ tuyệt bút của nhà thơ Thanh Hải viết trước lúc lâm chung. Giai điệu mang âm hưởng dân ca miền Trung đằm thắm, ngọt ngào, gửi gắm ước nguyện được làm một mùa xuân nho nhỏ lặng lẽ dâng hiến cho đời.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Bài hát nổi tiếng 'Ngày Tết quê em' do nhạc sĩ nào sáng tác?",
        options: ["(Recommended) Từ Huy", "Trần Hoàn", "Phạm Tuyên", "Hoàng Hiệp"],
        ans: 0,
        expl: "'Ngày Tết quê em' là sáng tác trứ danh của nhạc sĩ Từ Huy mỗi dịp Tết đến xuân về."
      },
      {
        q: "Ca khúc 'Một mùa xuân nho nhỏ' của nhạc sĩ Trần Hoàn được phổ nhạc từ bài thơ của nhà thơ nào?",
        options: ["(Recommended) Thanh Hải", "Xuân Diệu", "Huy Cận", "Tố Hữu"],
        ans: 0,
        expl: "Nhạc sĩ Trần Hoàn đã phổ nhạc xuất sắc bài thơ 'Một mùa xuân nho nhỏ' của nhà thơ xứ Huế Thanh Hải."
      },
      {
        q: "Giải thưởng cao quý nhất mà cố Nhạc sĩ Trần Hoàn được Nhà nước trao tặng là gì?",
        options: ["(Recommended) Giải thưởng Hồ Chí Minh về Văn học – Nghệ thuật", "Giải thưởng Nhà nước", "Huân chương Kháng chiến", "Kỷ niệm chương Vì sự nghiệp Âm nhạc"],
        ans: 0,
        expl: "Nhạc sĩ Trần Hoàn được truy tặng Giải thưởng Hồ Chí Minh về Văn học – Nghệ thuật vào năm 2007."
      },
      {
        q: "Âm hưởng dân ca vùng miền nào được thể hiện rõ nét trong bài hát 'Một mùa xuân nho nhỏ'?",
        options: ["(Recommended) Dân ca miền Trung (xứ Huế)", "Dân ca Quan họ Bắc Ninh", "Dân ca Nam Bộ", "Dân ca Tây Bắc"],
        ans: 0,
        expl: "Giai điệu bài hát mang đậm chất dân ca miền Trung đằm thắm, dịu dàng, phảng phất chất Huế."
      }
    ]
  },

  // BÀI 10
  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Chào xuân",
    title: "Bài 10: Lý thuyết âm nhạc: Nhịp 6/8 & Bài đọc nhạc số 3",
    tag: "Lí thuyết & Đọc nhạc",
    objectives: [
      "Hiểu rõ bản chất nhịp 6/8: mỗi ô nhịp có 6 phách, mỗi phách bằng một nốt móc đơn.",
      "Nắm vững 2 trọng âm chính: Phách 1 mạnh, Phách 4 mạnh vừa; các phách 2, 3, 5, 6 là phách nhẹ.",
      "Cảm nhận nhịp 6/8 theo hai nhóm ba phách, tạo cảm giác nhịp nhàng, dập dềnh, uyển chuyển.",
      "Phân biệt nhịp 6/8 với nhịp 3/8 và đọc đúng Bài đọc nhạc số 3 kết hợp gõ phách."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cấu trúc Nhịp 6/8 -->
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="250" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">QUY LUẬT PHÁCH TRONG NHỊP 6/8 (2 NHÓM BA PHÁCH)</text>
      <!-- 6 Phách -->
      <g transform="translate(40, 42)" text-anchor="middle">
        <!-- Nhóm 1 -->
        <rect x="0" y="0" width="60" height="58" rx="8" fill="#d1fae5" stroke="#059669"/>
        <text x="30" y="24" font-size="11" font-weight="bold" fill="#065f46">Phách 1</text>
        <text x="30" y="44" font-size="11" font-weight="bold" fill="#dc2626">MẠNH</text>

        <rect x="68" y="0" width="60" height="58" rx="8" fill="#f0fdf4" stroke="#86efac"/>
        <text x="98" y="24" font-size="11" fill="#166534">Phách 2</text>
        <text x="98" y="44" font-size="11" fill="#4b5563">Nhẹ</text>

        <rect x="136" y="0" width="60" height="58" rx="8" fill="#f0fdf4" stroke="#86efac"/>
        <text x="166" y="24" font-size="11" fill="#166534">Phách 3</text>
        <text x="166" y="44" font-size="11" fill="#4b5563">Nhẹ</text>

        <!-- Ngăn cách -->
        <line x1="208" y1="5" x2="208" y2="53" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Nhóm 2 -->
        <rect x="220" y="0" width="60" height="58" rx="8" fill="#e0f2fe" stroke="#0284c7"/>
        <text x="250" y="24" font-size="11" font-weight="bold" fill="#075985">Phách 4</text>
        <text x="250" y="44" font-size="11" font-weight="bold" fill="#0284c7">M. VỪA</text>

        <rect x="288" y="0" width="60" height="58" rx="8" fill="#f0fdf4" stroke="#86efac"/>
        <text x="318" y="24" font-size="11" fill="#166534">Phách 5</text>
        <text x="318" y="44" font-size="11" fill="#4b5563">Nhẹ</text>

        <rect x="356" y="0" width="60" height="58" rx="8" fill="#f0fdf4" stroke="#86efac"/>
        <text x="386" y="24" font-size="11" fill="#166534">Phách 6</text>
        <text x="386" y="44" font-size="11" fill="#4b5563">Nhẹ</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-clock text-emerald-600"></i>
            1. Lí thuyết âm nhạc: Nhịp 6/8 và so sánh với Nhịp 3/8
          </h4>
          <p>• <strong>Khái niệm nhịp 6/8:</strong> Mỗi ô nhịp có <strong>6 phách</strong>, mỗi phách bằng một nốt móc đơn (♪). Nhịp 6/8 có 2 trọng âm chính:</p>
          <p class="pl-4 font-medium text-emerald-800 dark:text-emerald-300">• <strong>Phách 1:</strong> Trọng âm MẠNH nhất.</p>
          <p class="pl-4 font-medium text-blue-700 dark:text-blue-300">• <strong>Phách 4:</strong> Trọng âm MẠNH VỪA.</p>
          <p class="pl-4 text-gray-600 dark:text-gray-400">• Các phách 2, 3, 5, 6 là phách nhẹ.</p>
          <p class="mt-1">• <strong>Cảm nhận nhịp 6/8:</strong> Thường được gom thành <strong>2 nhóm ba phách</strong> (mỗi nhóm tương đương 1 nốt đen chấm dôi), tạo cảm giác đung đưa, lướt sóng, nhịp nhàng uyển chuyển (thường dùng trong các điệu Barcarolle - chèo thuyền, điệu ru, nhạc valse chậm).</p>
          <p class="mt-1">• <strong>Phân biệt 6/8 với 3/8:</strong> Nhịp 3/8 chỉ có 3 phách móc đơn với 1 trọng âm duy nhất ở phách 1; nhịp 6/8 có 6 phách móc đơn với 2 trọng âm (phách 1 và phách 4).</p>
        </div>

        <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-teal-600"></i>
            2. Thực hành: Bài đọc nhạc số 3
          </h4>
          <p>• Viết ở nhịp <strong>6/8</strong>.</p>
          <p class="mt-1">• <strong>Phương pháp luyện đọc:</strong></p>
          <p class="pl-4">1. Đếm phách chậm theo 6 phách: <em>"1-2-3-4-5-6"</em>.</p>
          <p class="pl-4">2. Nhấn giọng rõ ở phách 1 và phách 4.</p>
          <p class="pl-4">3. Chuyển sang cảm nhận theo 2 nhịp lớn (mỗi nốt đen chấm dôi là 1 phách lớn).</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Trong nhịp 6/8, hai trọng âm rơi vào những phách nào trong ô nhịp?",
        options: ["(Recommended) Phách 1 (mạnh) và Phách 4 (mạnh vừa)", "Phách 1 và Phách 3", "Phách 1 và Phách 6", "Phách 2 và Phách 5"],
        ans: 0,
        expl: "Nhịp 6/8 chia làm 2 nhóm ba: Phách 1 mang trọng âm mạnh, Phách 4 mang trọng âm mạnh vừa."
      },
      {
        q: "Một nốt đen chấm dôi trong nhịp 6/8 có độ dài ngân bằng bao nhiêu phách móc đơn?",
        options: ["(Recommended) 3 phách", "2 phách", "4 phách", "6 phách"],
        ans: 0,
        expl: "Nốt đen = 2 phách móc đơn, dấu chấm dôi thêm 1/2 giá trị (+1) = 3 phách móc đơn."
      },
      {
        q: "Để có giá trị trường độ bằng cả một ô nhịp 6/8, ta cần một hình nốt nào?",
        options: ["(Recommended) Nốt trắng chấm dôi", "Nốt tròn", "Nốt trắng", "Nốt đen chấm dôi"],
        ans: 0,
        expl: "Nốt trắng = 4 móc đơn, dấu chấm dôi thêm 2 móc đơn -> Nốt trắng chấm dôi = 6 phách móc đơn."
      },
      {
        q: "Cảm giác chuyển động đặc trưng mà nhịp 6/8 mang lại cho người nghe là gì?",
        options: ["(Recommended) Nhịp nhàng, đung đưa, uyển chuyển như sóng nước", "Gấp gáp, giật cục", "Trầm uất, nặng nề", "Hành khúc duyệt binh cứng cáp"],
        ans: 0,
        expl: "Nhịp 6/8 tạo nên làn điệu dập dềnh êm ái, rất phù hợp với các điệu chèo thuyền, ca khúc ngợi ca mùa xuân."
      }
    ]
  },

  // BÀI 11
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Âm nhạc nước ngoài",
    title: "Bài 11: Hát 'Hát lên cho ngày mai'; Nghe 'Trở về Surriento' & Nhạc cụ",
    tag: "Hát & Nghe nhạc",
    objectives: [
      "Hát ca khúc quốc tế 'Hát lên cho ngày mai' với sắc thái trong sáng, lạc quan, tăng dần nhịp độ (accelerando).",
      "Thưởng thức ca khúc bất hủ 'Trở về Surriento' (Torna a Surriento - Nhạc Ý), cảm nhận giai điệu trữ tình Địa Trung Hải.",
      "Luyện tập Recorder / Kèn phím Melodica với bài thực hành giai điệu quốc tế theo đúng tiết tấu.",
      "Mở rộng hiểu biết về âm nhạc thế giới, so sánh nét tương đồng và khác biệt giữa âm nhạc Việt Nam và quốc tế."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="470" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="26" fill="#dbeafe"/>
      <text x="55" y="68" text-anchor="middle" font-size="22" fill="#2563eb"><tspan font-family="FontAwesome">&#xf57d;</tspan></text>
      <text x="100" y="45" font-size="13" font-weight="bold" fill="#1e40af">HÁT: HÁT LÊN CHO NGÀY MAI (Nhạc nước ngoài)</text>
      <text x="100" y="65" font-size="11" fill="#1d4ed8">• Trong sáng, niềm tin tương lai, nhịp độ dồn dập phấn chấn</text>
      <text x="100" y="85" font-size="11" font-weight="bold" fill="#c026d3">NGHE: TRỞ VỀ SURRIENTO (Torna a Surriento) • Kiệt tác Dân ca Ý</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-globe text-blue-600"></i>
            1. Học hát: "Hát lên cho ngày mai" (Ca khúc quốc tế)
          </h4>
          <p>• <strong>Chủ đề:</strong> Khát vọng hòa bình, tình hữu nghị giữa các dân tộc và niềm tin vững chắc vào một ngày mai tươi sáng.</p>
          <p class="mt-1">• <strong>Kĩ thuật biểu hiện:</strong> Hát với giọng hát mở rộng, âm thanh vang sáng; chú ý kĩ thuật tăng dần tốc độ (accelerando) ở phần điệp khúc tạo nên khí thế hào hứng cuốn hút.</p>
        </div>

        <div class="p-3.5 bg-fuchsia-50 dark:bg-fuchsia-950/40 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
          <h4 class="font-bold text-fuchsia-900 dark:text-fuchsia-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-record-vinyl text-fuchsia-600"></i>
            2. Nghe nhạc: "Trở về Surriento" (Torna a Surriento - Nhạc Ý)
          </h4>
          <p>• <strong>Tác giả:</strong> Do hai anh em nhạc sĩ người Ý Ernesto De Curtis (nhạc) và Giambattista De Curtis (lời) sáng tác năm 1902.</p>
          <p class="mt-1">• <strong>Vẻ đẹp âm nhạc:</strong> Ca khúc mang đậm phong cách Canzone Napoletana (dân ca vùng Napoli) với giai điệu tha thiết, nồng nàn, ca ngợi cảnh sắc biển trời Surriento thơ mộng bên vịnh Napoli và tiếng gọi người thương trở về.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Ca khúc bất hủ 'Trở về Surriento' (Torna a Surriento) là kiệt tác âm nhạc của quốc gia nào?",
        options: ["(Recommended) Nước Ý (Italia)", "Nước Pháp", "Nước Nga", "Nước Đức"],
        ans: 0,
        expl: "'Torna a Surriento' là ca khúc lừng danh thế giới xuất xứ từ thành phố biển Napoli của nước Ý."
      },
      {
        q: "Thuật ngữ âm nhạc 'Accelerando' xuất hiện trong bài hát có nghĩa là gì?",
        options: ["(Recommended) Tăng dần tốc độ bài hát", "Giảm dần tốc độ bài hát", "Hát nhỏ dần", "Hát to dần"],
        ans: 0,
        expl: "Accelerando (viết tắt là accel.) là chỉ dẫn âm nhạc yêu cầu tăng dần nhịp độ nhanh hơn."
      },
      {
        q: "Tính chất âm nhạc của ca khúc 'Trở về Surriento' mang màu sắc gì?",
        options: ["(Recommended) Trữ tình tha thiết, nồng nàn, giai điệu đẹp lay động lòng người", "Nhảy múa sôi động", "Vui tươi nhí nhảnh", "Hành khúc mạnh mẽ"],
        ans: 0,
        expl: "Giai điệu đậm chất Địa Trung Hải nồng nàn, tha thiết của nước Ý làm say đắm người nghe."
      },
      {
        q: "Khi thực hành bài nhạc quốc tế trên sáo Recorder, điều quan trọng nhất là:",
        options: ["(Recommended) Giữ nhịp độ đều đặn, ngón tay bấm dứt khoát và luồng hơi ổn định", "Thổi thật to để át các bạn", "Bỏ qua các dấu lặng", "Bấm ngón tùy ý"],
        ans: 0,
        expl: "Kiểm soát luồng hơi và thế bấm ngón chính xác giúp bài thổi đạt chuẩn cao độ và tiết tấu."
      }
    ]
  },

  // BÀI 12
  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Âm nhạc nước ngoài",
    title: "Bài 12: Lý thuyết: Gam thứ, giọng thứ, La thứ & Bài đọc nhạc số 4",
    tag: "Lí thuyết & Đọc nhạc",
    objectives: [
      "Hiểu khái niệm gam thứ, giọng thứ và cấu trúc cung / nửa cung của gam thứ tự nhiên.",
      "Nhận biết giọng La thứ (a-moll / A Minor), âm chủ La, hóa biểu không có dấu thăng hoặc giáng.",
      "Phân biệt tính chất cảm xúc giữa Giọng trưởng (trong sáng, vui tươi) và Giọng thứ (trữ tình, mềm mại, sâu lắng).",
      "Đọc đúng cao độ, trường độ, nhịp 3/4 của Bài đọc nhạc số 4 theo tính chất giọng La thứ."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cấu trúc Gam La thứ: A - B - C - D - E - F - G - A -->
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
      <text x="250" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">CẤU TRÚC GAM THỨ TỰ NHIÊN: 1 – 1/2 – 1 – 1 – 1/2 – 1 – 1</text>
      <!-- Nốt nhạc -->
      <g transform="translate(35, 45)" font-size="13" font-weight="bold" text-anchor="middle">
        <circle cx="20" cy="20" r="14" fill="#ea580c"/><text x="20" y="25" fill="#fff">La</text>
        <circle cx="75" cy="20" r="14" fill="#ea580c"/><text x="75" y="25" fill="#fff">Si</text>
        <circle cx="130" cy="20" r="14" fill="#ef4444"/><text x="130" y="25" fill="#fff">Đô</text>
        <circle cx="185" cy="20" r="14" fill="#ea580c"/><text x="185" y="25" fill="#fff">Rê</text>
        <circle cx="240" cy="20" r="14" fill="#ea580c"/><text x="240" y="25" fill="#fff">Mi</text>
        <circle cx="295" cy="20" r="14" fill="#ef4444"/><text x="295" y="25" fill="#fff">Fa</text>
        <circle cx="350" cy="20" r="14" fill="#ea580c"/><text x="350" y="25" fill="#fff">Sol</text>
        <circle cx="405" cy="20" r="14" fill="#ea580c"/><text x="405" y="25" fill="#fff">La</text>
      </g>
      <!-- Cung và nửa cung -->
      <g transform="translate(35, 90)" font-size="11" font-weight="bold" text-anchor="middle" fill="#78350f">
        <text x="47" y="10">1c</text>
        <text x="102" y="10" fill="#dc2626">1/2c</text>
        <text x="157" y="10">1c</text><text x="212" y="10">1c</text>
        <text x="267" y="10" fill="#dc2626">1/2c</text>
        <text x="322" y="10">1c</text><text x="377" y="10">1c</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shapes text-orange-600"></i>
            1. Gam thứ, giọng thứ và giọng La thứ
          </h4>
          <p>• <strong>Gam thứ tự nhiên:</strong> Gồm 7 bậc âm liên tiếp từ âm chủ (bậc I) lên âm chủ quãng tám (bậc VIII). Cấu trúc cung và nửa cung:</p>
          <div class="p-2 my-2 bg-white dark:bg-gray-800 rounded-lg text-center font-bold text-orange-700 dark:text-orange-300 tracking-wider">
            Bậc I <span class="text-gray-400">—1c—</span> Bậc II <span class="text-red-500">—½c—</span> Bậc III <span class="text-gray-400">—1c—</span> Bậc IV <span class="text-gray-400">—1c—</span> Bậc V <span class="text-red-500">—½c—</span> Bậc VI <span class="text-gray-400">—1c—</span> Bậc VII <span class="text-gray-400">—1c—</span> Bậc VIII
          </div>
          <p>• Nửa cung nằm giữa: <strong>Bậc II – Bậc III</strong> và <strong>Bậc V – Bậc VI</strong>.</p>
          <p class="mt-1">• <strong>Giọng La thứ (a-moll / A Minor):</strong> Có âm chủ là nốt <strong>La (A)</strong>. Thang âm: La – Si – Đô – Rê – Mi – Fa – Sol – (La). <em>Hóa biểu không có dấu thăng (#) hoặc dấu giáng (b).</em></p>
          <p class="mt-1">• <strong>So sánh giọng Đô trưởng và La thứ:</strong> Cùng chung hóa biểu không có dấu hóa, nhưng Đô trưởng lấy Đô làm âm chủ (tươi sáng), còn La thứ lấy La làm âm chủ (mềm mại, trữ tình, sâu lắng).</p>
        </div>

        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-amber-600"></i>
            2. Thực hành: Bài đọc nhạc số 4
          </h4>
          <p>• Viết ở giọng <strong>La thứ</strong>, nhịp <strong>3/4</strong>.</p>
          <p class="mt-1">• Luyện cao độ thang âm La thứ; chú ý nốt kết bài về âm chủ La tạo cảm giác ổn định, trọn vẹn.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Cấu trúc cung và nửa cung của gam thứ tự nhiên là:",
        options: ["(Recommended) 1 – 1/2 – 1 – 1 – 1/2 – 1 – 1", "1 – 1 – 1/2 – 1 – 1 – 1 – 1/2", "1/2 – 1 – 1 – 1/2 – 1 – 1 – 1", "1 – 1 – 1 – 1/2 – 1 – 1 – 1/2"],
        ans: 0,
        expl: "Gam thứ tự nhiên có khoảng cách nửa cung nằm giữa bậc II - III và bậc V - VI: 1 - 1/2 - 1 - 1 - 1/2 - 1 - 1."
      },
      {
        q: "Khoảng cách nửa cung trong gam La thứ tự nhiên nằm ở những cặp nốt nào?",
        options: ["(Recommended) Si – Đô và Mi – Fa", "La – Si và Đô – Rê", "Rê – Mi và Sol – La", "Fa – Sol và La – Si"],
        ans: 0,
        expl: "Trong thang âm La thứ: Si - Đô (bậc II - III) và Mi - Fa (bậc V - VI) là hai khoảng cách nửa cung."
      },
      {
        q: "Mặc dù cùng không có dấu hóa ở hóa biểu, giọng La thứ khác giọng Đô trưởng ở điểm cơ bản nào?",
        options: ["(Recommended) Âm chủ và tính chất cảm xúc (Đô trưởng tươi sáng, La thứ trữ tình êm dịu)", "Số lượng nốt nhạc khác nhau", "La thứ có dấu thăng ngầm", "Đô trưởng nhịp nhanh hơn"],
        ans: 0,
        expl: "Đô trưởng lấy nốt Đô làm âm chủ mang màu sắc trong sáng; La thứ lấy nốt La làm âm chủ mang màu sắc trữ tình, lắng đọng."
      },
      {
        q: "Tính chất biểu cảm đặc trưng của các bài hát viết ở giọng thứ là gì?",
        options: ["(Recommended) Trữ tình, mềm mại, sâu lắng, tha thiết", "Hùng tráng, uy nghi", "Nhảy nhót tinh nghịch", "Vui tươi rộn rã"],
        ans: 0,
        expl: "Giọng thứ thường mang vẻ đẹp trữ tình, man mác và lắng đọng cảm xúc."
      }
    ]
  },

  // BÀI 13
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Giai điệu quê hương",
    title: "Bài 13: Hát 'Soi bóng bên hồ' & Thưởng thức Đàn Nguyệt và Đàn Tính",
    tag: "Hát & Thường thức",
    objectives: [
      "Hát bài dân ca 'Soi bóng bên hồ' đúng giai điệu, lời ca; thể hiện chất giọng mượt mà, ngân nga, luyến láy dân gian.",
      "Tìm hiểu Đàn Nguyệt (Đàn Kìm): nhạc cụ dây gảy truyền thống với thùng tròn trăng rằm, linh hồn của nghệ thuật Chầu Văn và Đờn ca tài tử.",
      "Tìm hiểu Đàn Tính (Tính Tẩu): nhạc cụ bầu đàn bằng quả bầu khô của dân tộc Tày, Nùng, Thái gắn với Di sản Thực hành Then (UNESCO vinh danh 2019).",
      "Phân biệt rõ cấu tạo, cách chơi và môi trường văn hóa của Đàn Nguyệt và Đàn Tính."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="225" height="90" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="127" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">ĐÀN NGUYỆT (ĐÀN KÌM)</text>
      <text x="127" y="65" text-anchor="middle" font-size="11" fill="#78350f">• Thùng tròn mặt gỗ, cần dài</text>
      <text x="127" y="85" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#c2410c">Hát Văn, Ca trù, Tài tử Nam Bộ</text>

      <rect x="260" y="15" width="225" height="90" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="372" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">ĐÀN TÍNH (TÍNH TẨU)</text>
      <text x="372" y="65" text-anchor="middle" font-size="11" fill="#166534">• Hộp đàn bằng quả bầu khô</text>
      <text x="372" y="85" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">Hát Then Tày - Nùng (UNESCO 2019)</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-water text-amber-600"></i>
            1. Học hát: "Soi bóng bên hồ" (Dân ca vùng đồng bằng Bắc Bộ)
          </h4>
          <p>• <strong>Đặc trưng dân ca:</strong> Nét nhạc thanh bình, miêu tả cảnh hồ nước trong xanh in bóng mây trời. Kĩ thuật hát đòi hỏi lối hát luyến láy mềm mại, ngân rung tự nhiên như sóng nước.</p>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-guitar text-emerald-600"></i>
            2. Thưởng thức âm nhạc: Đàn Nguyệt và Đàn Tính
          </h4>
          <p>• <strong>Đàn Nguyệt (miền Nam gọi là Đàn Kìm):</strong> Nhạc cụ dây gảy truyền thống có thùng đàn hình tròn như mặt trăng rằm. Cần đàn dài có gắn các phím cao để ngón tay bấm nhấn nhá tạo các nốt luyến, rung, vuốt vô cùng phong phú. Đàn Nguyệt có 2 dây, âm sắc vang, trong trẻo, đĩnh đạc; giữ vị trí chủ lực trong Hát Chầu Văn, Ca trù và Đờn ca tài tử Nam Bộ.</p>
          <p class="mt-1">• <strong>Đàn Tính (Tính Tẩu):</strong> Nhạc cụ dây gảy độc đáo của các dân tộc Tày, Nùng, Thái ở miền núi phía Bắc. Hộp cộng hưởng làm từ nửa <strong>quả bầu khô</strong>, cần đàn bằng gỗ dẻo dài. Âm thanh mộc mạc, ngọt ngào, huyền bí, gắn liền với làn điệu <em>Hát Then</em> (được UNESCO ghi danh Di sản văn hóa phi vật thể của nhân loại năm 2019).</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Đàn Tính (Tính tẩu) của đồng bào Tày, Nùng có hộp cộng hưởng được làm từ nguyên liệu gì?",
        options: ["(Recommended) Quả bầu khô gọt phẳng một mặt", "Thùng gỗ tròn đóng đinh", "Ống tre nứa", "Vỏ quả dừa khô"],
        ans: 0,
        expl: "Hộp đàn Tính được chế tác khéo léo từ nửa quả bầu khô, phủ mặt bằng gỗ nhẹ."
      },
      {
        q: "Đàn Nguyệt (Đàn Kìm) giữ vai trò then chốt trong loại hình nghệ thuật dân gian nào?",
        options: ["(Recommended) Hát Văn (Chầu văn) và Đờn ca tài tử Nam Bộ", "Hát Xoan Phú Thọ", "Hát Quan họ Bắc Ninh", "Cồng chiêng Tây Nguyên"],
        ans: 0,
        expl: "Đàn Nguyệt là linh hồn dẫn dắt giai điệu trong các buổi hầu đồng Hát Chầu Văn và ban nhạc Tài tử."
      },
      {
        q: "Di sản Thực hành Then của người Tày, Nùng, Thái với cây Đàn Tính được UNESCO vinh danh năm nào?",
        options: ["(Recommended) Năm 2019", "Năm 2005", "Năm 2012", "Năm 2021"],
        ans: 0,
        expl: "Thực hành Then của người Tày, Nùng, Thái chính thức được UNESCO ghi danh vào tháng 12 năm 2019."
      },
      {
        q: "Đặc điểm hình dáng nổi bật nhất của cây Đàn Nguyệt là gì?",
        options: ["(Recommended) Thùng đàn hình tròn dẹt như mặt trăng rằm và cần đàn dài", "Thùng đàn hình quả lê", "Thùng đàn hình tam giác", "Thùng đàn bằng ống trúc"],
        ans: 0,
        expl: "Tên gọi Đàn Nguyệt xuất phát từ chính thùng đàn tròn trịa tựa ánh trăng tròn."
      }
    ]
  },

  // BÀI 14
  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Giai điệu quê hương",
    title: "Bài 14: Lý thuyết âm nhạc: Đảo phách & Bài đọc nhạc số 5",
    tag: "Lí thuyết & Đọc nhạc",
    objectives: [
      "Hiểu rõ hiện tượng Đảo phách (Syncopation): âm bắt đầu vang ở phách nhẹ/phần nhẹ rồi ngân sang phách mạnh/phần mạnh.",
      "Nhận biết 2 trường hợp đảo phách: Đảo phách trong một ô nhịp và Đảo phách nối qua vạch nhịp.",
      "Hiểu tác dụng của đảo phách: tạo điểm nhấn bất ngờ, phá vỡ sự đều đặn đơn điệu, tăng tính sinh động cho tác phẩm.",
      "Đọc đúng cao độ, trường độ và xử lý chính xác tiết tấu đảo phách trong Bài đọc nhạc số 5."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Sơ đồ Đảo phách -->
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="250" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce">HIỆN TƯỢNG ĐẢO PHÁCH (SYNCOPATION)</text>
      <!-- Mô hình tiết tấu đảo phách: Móc đơn - Nốt đen - Móc đơn -->
      <g transform="translate(60, 45)" font-size="12" font-weight="bold" text-anchor="middle">
        <rect x="0" y="0" width="100" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7"/>
        <text x="50" y="22" fill="#7e22ce">Móc đơn (♪)</text>
        <text x="50" y="40" font-size="10" fill="#6b21a8">Phần nhẹ (1/2)</text>

        <rect x="120" y="0" width="140" height="50" rx="8" fill="#e9d5ff" stroke="#9333ea"/>
        <text x="190" y="22" fill="#581c87">NỐT ĐEN (♩)</text>
        <text x="190" y="40" font-size="10" fill="#dc2626">Ngân qua phách mạnh!</text>

        <rect x="280" y="0" width="100" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7"/>
        <text x="330" y="22" fill="#7e22ce">Móc đơn (♪)</text>
        <text x="330" y="40" font-size="10" fill="#6b21a8">Phần nhẹ (1/2)</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-wave-square text-purple-600"></i>
            1. Lí thuyết âm nhạc: Hiện tượng Đảo phách (Syncopation)
          </h4>
          <p>• <strong>Khái niệm:</strong> Đảo phách là hiện tượng một âm thanh bắt đầu ngân vang ở phách nhẹ (hoặc phần nhẹ của phách), sau đó ngân dài qua phách mạnh (hoặc phần mạnh của phách tiếp theo), làm cho trọng âm thông thường bị dịch chuyển lệch sang vị trí khác.</p>
          <p class="mt-1">• <strong>Hai trường hợp đảo phách thường gặp:</strong></p>
          <p class="pl-4">1. <em>Đảo phách trong một ô nhịp:</em> Âm vang ở phần nhẹ phách trước ngân qua phần mạnh phách sau (Ví dụ: tiết tấu <strong>Móc đơn – Đen – Móc đơn</strong> trong nhịp 2/4).</p>
          <p class="pl-4">2. <em>Đảo phách qua vạch nhịp:</em> Âm vang từ phách nhẹ cuối ô nhịp trước và dùng dấu nối (tie) ngân dài sang phách 1 (phách mạnh) của ô nhịp sau.</p>
          <p class="mt-1">• <strong>Tác dụng:</strong> Tạo điểm nhấn kịch tính, nhịp điệu giật nẩy sôi nổi, rất phổ biến trong âm nhạc dân gian, Jazz, Pop và Rock.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-indigo-600"></i>
            2. Thực hành: Bài đọc nhạc số 5
          </h4>
          <p>• Đọc đúng cao độ và trường độ; đặc biệt giữ đúng độ dài ngân của nốt đảo phách, không nhấn nhầm vào phách mạnh khi nốt trước đang ngân qua.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Thế nào là hiện tượng Đảo phách trong âm nhạc?",
        options: ["(Recommended) Nốt nhạc vang ở phách nhẹ và ngân dài qua phách mạnh tiếp theo", "Tất cả các nốt đều hát thật to", "Bỏ qua một ô nhịp không hát", "Đổi số chỉ nhịp liên tục"],
        ans: 0,
        expl: "Đảo phách dịch chuyển trọng âm từ phách mạnh thông thường sang nốt bắt đầu ở phách nhẹ."
      },
      {
        q: "Mô hình âm hình tiết tấu nào dưới đây là ví dụ điển hình của đảo phách trong ô nhịp 2/4?",
        options: ["(Recommended) Nốt móc đơn – Nốt đen – Nốt móc đơn", "Nốt đen – Nốt đen", "Bốn nốt móc đơn", "Nốt trắng"],
        ans: 0,
        expl: "Móc đơn (nửa phách) - Đen (1 phách chiếm phần mạnh phách 2) - Móc đơn (nửa phách cuối) là mô hình đảo phách kinh điển."
      },
      {
        q: "Khi gặp đảo phách nối qua vạch nhịp, người đọc nhạc cần chú ý điều gì?",
        options: ["(Recommended) Giữ ngân nốt nhạc liên tục qua vạch nhịp, không ngắt quãng và không đánh đòn phách mới", "Hát ngắt đôi nốt nhạc làm hai", "Bỏ qua nốt nhạc đứng sau vạch nhịp", "Gõ thật mạnh vào phách đầu ô nhịp sau"],
        ans: 0,
        expl: "Dấu nối buộc người biểu diễn phải giữ nguyên âm thanh ngân qua vạch nhịp mà không phát âm lại."
      },
      {
        q: "Tác dụng biểu cảm nghệ thuật chính của thủ pháp đảo phách là:",
        options: ["(Recommended) Tạo sự bất ngờ, điểm nhấn sôi nổi, tránh cảm giác đơn điệu", "Làm cho bài hát trở nên buồn ngủ", "Khiến bài hát bị sai nhịp", "Chỉ dùng để kết thúc bài hát"],
        ans: 0,
        expl: "Đảo phách tạo nên tính sinh động, nhịp điệu cuốn hút và điểm nhấn đầy màu sắc cho giai điệu."
      }
    ]
  },

  // BÀI 15
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Nhịp điệu mùa hè",
    title: "Bài 15: Nghe 'Xôn xao mùa hè' & Nhạc sĩ Frédéric Chopin - 'Khúc tùy hứng giọng Đô thăng thứ'",
    tag: "Nghe & Thường thức",
    objectives: [
      "Nghe và cảm nhận bài hát 'Xôn xao mùa hè', nhận xét âm hưởng tươi sáng, tiếng ve ngân và vẻ đẹp rực rỡ của mùa hè tuổi học trò.",
      "Tìm hiểu cuộc đời và sự nghiệp của Nhạc sĩ Frédéric Chopin – 'Nhà thơ của cây đàn piano' lừng danh thế giới người Ba Lan.",
      "Thưởng thức kiệt tác piano 'Khúc tùy hứng giọng Đô thăng thứ' (Fantaisie-Impromptu in C Sharp Minor), nhận biết tính chất tương phản âm nhạc.",
      "Bồi dưỡng tình yêu với âm nhạc cổ điển phương Tây và khả năng cảm thụ tác phẩm khí nhạc thính phòng."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="470" height="90" rx="14" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="26" fill="#ffe4e6"/>
      <text x="55" y="68" text-anchor="middle" font-size="22" fill="#e11d48"><tspan font-family="FontAwesome">&#xf001;</tspan></text>
      <text x="100" y="45" font-size="13" font-weight="bold" fill="#9f1239">FRÉDÉRIC CHOPIN (1810 – 1849) • Ba Lan</text>
      <text x="100" y="65" font-size="11" fill="#be123c">• "Nhà thơ của cây đàn piano" thời kì Lãng mạn</text>
      <text x="100" y="85" font-size="11" font-weight="bold" fill="#4338ca">KIỆT TÁC: FANTAISIE-IMPROMPTU IN C SHARP MINOR (Op. 66)</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-sun text-rose-600"></i>
            1. Nghe nhạc: "Xôn xao mùa hè"
          </h4>
          <p>• <strong>Cảm nhận tác phẩm:</strong> Ca khúc gợi lên không khí tươi vui rộn ràng của những ngày đầu hè, tiếng ve râm ran trên vòm lá và sắc phượng vĩ thắm đỏ báo hiệu mùa bế giảng năm học.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-music text-indigo-600"></i>
            2. Thường thức âm nhạc: Nhạc sĩ Frédéric Chopin và "Khúc tùy hứng giọng Đô thăng thứ"
          </h4>
          <p>• <strong>Frédéric Chopin (1810 – 1849):</strong> Là nhà soạn nhạc thiên tài và nghệ sĩ dương cầm vĩ đại người Ba Lan thế kỉ XIX thời kì Lãng mạn. Toàn bộ tài năng của ông đều dành trọn cho cây đàn piano, được nhân loại tôn vinh là <em>"Nhà thơ của cây đàn piano"</em> (The Poet of the Piano). Trái tim của ông theo di nguyện sau khi qua đời được đưa về an nghỉ tại nhà thờ Thánh Giá ở thủ đô Warsaw (Ba Lan).</p>
          <p class="mt-1">• <strong>Tác phẩm "Khúc tùy hứng giọng Đô thăng thứ" (Fantaisie-Impromptu in C Sharp Minor, Op. 66):</strong></p>
          <p class="pl-4">• Viết cho đàn <strong>piano độc tấu</strong>, hoàn thành năm 1834.</p>
          <p class="pl-4">• <em>Cấu trúc tương phản đặc sắc:</em> Phần mở đầu và phần kết có tốc độ cực nhanh, kỹ thuật điêu luyện dồn dập (tay phải chơi 4 nốt trên nền tay trái chơi 3 nốt phức điệu); Phần giữa (Moderato cantabile) chuyển sang giọng Rê giáng trưởng với giai điệu êm ái, ngọt ngào, lãng mạn như một khúc tình ca.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Nhạc sĩ thiên tài Frédéric Chopin được mệnh danh là gì trong lịch sử âm nhạc thế giới?",
        options: ["(Recommended) Nhà thơ của cây đàn piano", "Vua nhạc giao hưởng", "Người cha của thể loại hợp xướng", "Thần đồng opera"],
        ans: 0,
        expl: "Chopin được vinh danh là 'Nhà thơ của cây đàn piano' nhờ những kiệt tác piano lãng mạn, tinh tế bậc nhất."
      },
      {
        q: "Nhạc sĩ Frédéric Chopin là người con ưu tú của đất nước nào?",
        options: ["(Recommended) Ba Lan", "Nước Đức", "Nước Áo", "Nước Nga"],
        ans: 0,
        expl: "Chopin sinh ra tại Ba Lan và âm nhạc của ông luôn thấm đượm lòng yêu nước Ba Lan nồng nàn."
      },
      {
        q: "Tác phẩm 'Khúc tùy hứng giọng Đô thăng thứ' (Fantaisie-Impromptu) của Chopin được viết cho nhạc cụ nào?",
        options: ["(Recommended) Đàn Piano độc tấu", "Đàn Violon và dàn nhạc", "Sáo Flute", "Đàn Guitar"],
        ans: 0,
        expl: "Fantaisie-Impromptu là tác phẩm độc tấu piano nổi tiếng nhất của Chopin."
      },
      {
        q: "Điểm nổi bật về nghệ thuật trong cấu trúc của bản 'Fantaisie-Impromptu' là gì?",
        options: ["(Recommended) Sự tương phản giữa phần nhanh dồn dập kỹ thuật cao và phần giữa êm dịu, lãng mạn", "Tất cả các phần đều buồn bã chậm chạp", "Không có giai điệu rõ ràng", "Chỉ có phần đệm không có chủ đề"],
        ans: 0,
        expl: "Sự đối lập giữa những đợt sóng âm thanh dồn dập tốc độ cao với khúc hát trữ tình ngọt ngào ở phần giữa tạo nên sức lôi cuốn bất hủ."
      }
    ]
  },

  // BÀI 16
  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Nhịp điệu mùa hè",
    title: "Bài 16: Nhạc cụ: Hòa tấu 'Row, row, row your boat' & Vận dụng cuối chủ đề",
    tag: "Nhạc cụ & Vận dụng",
    objectives: [
      "Thực hành bản nhạc quốc tế 'Row, row, row your boat' trên sáo Recorder hoặc Kèn phím Melodica theo đúng nốt nhạc và tiết tấu.",
      "Hòa tấu theo bè (hát đuổi Canon hoặc hòa tấu giai điệu và bè đệm), giữ nhịp ổn định, lắng nghe và kết thúc cùng nhau.",
      "Ôn tập củng cố ca khúc 'Trở về Surriento' và hệ thống hóa các kiến thức âm nhạc đã học trong toàn bộ chương trình lớp 8.",
      "Tự tin tham gia hoạt động biểu diễn âm nhạc học đường, tự đánh giá năng lực âm nhạc bản thân."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="470" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <circle cx="55" cy="60" r="26" fill="#d1fae5"/>
      <text x="55" y="68" text-anchor="middle" font-size="22" fill="#059669"><tspan font-family="FontAwesome">&#xf001;</tspan></text>
      <text x="100" y="45" font-size="13" font-weight="bold" fill="#065f46">HÒA TẤU: ROW, ROW, ROW YOUR BOAT (Chèo thuyền xuôi dòng)</text>
      <text x="100" y="65" font-size="11" fill="#047857">• Phong cách hát đuổi Canon trên Recorder &amp; Melodica</text>
      <text x="100" y="85" font-size="11" font-weight="bold" fill="#7c3aed">TỔNG KẾT &amp; DỰ ÁN ÂM NHẠC LỚP 8 • Biểu diễn cuối năm học</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-guitar text-emerald-600"></i>
            1. Thực hành nhạc cụ: Hòa tấu bài "Row, row, row your boat"
          </h4>
          <p>• <strong>Bài luyện tập:</strong> Bản dân ca thiếu nhi kinh điển của Anh - Mỹ viết ở nhịp 6/8 vui tươi, nhịp nhàng: <em>"Row, row, row your boat, gently down the stream..."</em>.</p>
          <p class="mt-1">• <strong>Hình thức hòa tấu:</strong></p>
          <p class="pl-4">• <em>Hình thức đuổi bè (Canon):</em> Bè 1 thổi trước, Bè 2 vào sau cách 1 ô nhịp, duy trì âm thanh đan cài nhịp nhàng.</p>
          <p class="pl-4">• <em>Hòa tấu hai nhạc cụ:</em> Recorder đảm nhận giai điệu bay bổng, Melodica giữ bè hòa âm và nhịp phách.</p>
        </div>

        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-award text-purple-600"></i>
            2. Ôn tập &amp; Tổng kết chương trình Âm nhạc 8
          </h4>
          <p>• Ôn tập ca khúc <em>"Trở về Surriento"</em> và các bài hát trọng tâm trong năm học.</p>
          <p class="mt-1">• Hệ thống hóa các kiến thức cốt lõi: Gam Đô trưởng, Gam La thứ, Nhịp 3/8, Nhịp 6/8, Hiện tượng Đảo phách.</p>
          <p class="mt-1">• Tự đánh giá quá trình học tập theo các tiêu chí: cao độ, trường độ, nhịp độ, sắc thái biểu cảm, kĩ năng nhạc cụ và tinh thần hợp tác nhóm.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Hình thức biểu diễn âm nhạc mà một bè đi trước rồi bè sau nhắc lại cùng giai điệu gọi là:",
        options: ["(Recommended) Hát đuổi (Canon)", "Hát đồng thanh", "Hát lĩnh xướng", "Hát solo"],
        ans: 0,
        expl: "Canon (hát đuổi) là kỹ thuật đa âm trong đó các bè vào lần lượt cùng một giai điệu nhưng lệch nhau vài phách/ô nhịp."
      },
      {
        q: "Bài hát 'Row, row, row your boat' thường được viết ở số chỉ nhịp nào?",
        options: ["(Recommended) Nhịp 6/8", "Nhịp 2/4", "Nhịp 3/4", "Nhịp 4/4"],
        ans: 0,
        expl: "'Row, row, row your boat' viết ở nhịp 6/8 đung đưa tựa như nhịp chèo thuyền lướt nhẹ trên sông."
      },
      {
        q: "Khi hòa tấu nhóm nhiều nhạc cụ cùng nhau, quy tắc quan trọng nhất là gì?",
        options: ["(Recommended) Giữ nhịp ổn định, lắng nghe bè bạn, điều chỉnh âm lượng cân bằng và kết thúc cùng lúc", "Ai thổi nhanh hơn là thắng", "Thổi to nhất có thể", "Tự dừng lại khi mệt"],
        ans: 0,
        expl: "Hòa tấu đòi hỏi sự hòa quyện tập thể, tôn trọng nhịp chung và cân đối âm lượng giữa các bè."
      },
      {
        q: "Khóa học Âm nhạc 8 đã giúp em làm quen và phân biệt hai thang âm cơ bản nào?",
        options: ["(Recommended) Giọng Đô trưởng (C-dur) và Giọng La thứ (a-moll)", "Giọng Sol trưởng và Rê thứ", "Giọng Fa trưởng và Rê trưởng", "Giọng Mi thứ và Si trưởng"],
        ans: 0,
        expl: "Chương trình lớp 8 tập trung vào cặp giọng tự nhiên không có dấu hóa: Đô trưởng và La thứ."
      }
    ]
  }
];

module.exports = { lessonsPart2 };
