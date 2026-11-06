// Topic 6 to 9 & Topic 10 (Review) for HDTN 7
module.exports = [
  // Chủ đề 6
  {
    id: "chu-de-6",
    num: "Chủ đề 6",
    title: "Chủ đề 6. Em với cộng đồng",
    pages: "SGK tr. 39–45",
    circuit: "Hướng đến xã hội",
    circuitTag: "XÃ HỘI",
    circuitColor: "bg-blue-600",
    objective: "Giao tiếp văn hóa và tôn trọng sự khác biệt trong cộng đồng; tổ chức và tham gia hoạt động thiện nguyện nhân ái; tìm hiểu, tự hào và góp phần bảo tồn truyền thống quê hương.",
    mindmap: {
      nodes: [
        { title: "GIAO TIẾP VĂN HÓA", desc: "Tôn trọng khác biệt vùng miền, ngôn ngữ, tập quán; không định kiến hay phân biệt đối xử", color: "#2563eb" },
        { title: "HOẠT ĐỘNG THIỆN NGUYỆN", desc: "3 Nguyên tắc: Khảo sát đúng nhu cầu, Minh bạch tài chính, Tôn trọng quyền riêng tư", color: "#059669" },
        { title: "TRUYỀN THỐNG QUÊ HƯƠNG", desc: "Lễ hội, làng nghề truyền thống, di tích lịch sử; hành động bảo tồn thiết thực", color: "#d97706" }
      ]
    },
    sections: [
      {
        title: "1. Giao tiếp văn hóa và tôn trọng sự khác biệt",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Cộng đồng là nơi hội tụ đa dạng các nền văn hóa, vùng miền và lối sống. Người có văn hóa là người biết chấp nhận và tôn trọng sự khác biệt của người khác.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-900 dark:text-blue-300 text-sm mb-1">
                <i class="fa-solid fa-check text-blue-600 mr-1"></i> Hành vi văn minh nên làm
              </h5>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Chào hỏi, mỉm cười thân thiện khi gặp hàng xóm, láng giềng.</li>
                <li>Tôn trọng trang phục, giọng nói vùng miền và phong tục tập quán của các dân tộc.</li>
                <li>Nhường ghế cho người già, phụ nữ mang thai, trẻ nhỏ trên phương tiện công cộng.</li>
                <li>Xếp hàng ngay ngắn, nói năng nhỏ nhẹ nơi công cộng.</li>
              </ul>
            </div>
            <div class="p-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <h5 class="font-bold text-red-900 dark:text-red-300 text-sm mb-1">
                <i class="fa-solid fa-xmark text-red-600 mr-1"></i> Hành vi cần tránh
              </h5>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Nhại giọng, chê bai cách phát âm hay trang phục truyền thống của người khác.</li>
                <li>Cười cợt người có hoàn cảnh khó khăn hoặc người khuyết tật.</li>
                <li>Gây ồn ào, xả rác bừa bãi nơi sinh hoạt chung của khu dân cư.</li>
                <li>Lan truyền thông tin bịa đặt, định kiến sai lệch về vùng miền.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Hoạt động thiện nguyện và nhân đạo",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Thiện nguyện xuất phát từ tấm lòng nhân ái, mong muốn sẻ chia với những mảnh đời bất hạnh. Để hoạt động ý nghĩa và lan tỏa, cần tuân thủ 3 nguyên tắc vàng:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-center mb-3">
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">1. KHẢO SÁT NHU CẦU</strong>
              <p class="text-gray-600 dark:text-gray-400">Cho đi cái người nhận thực sự cần (sách vở cho học sinh vùng cao, chăn ấm cho mùa đông), tránh tặng đồ hỏng nát.</p>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">2. MINH BẠCH TÀI CHÍNH</strong>
              <p class="text-gray-600 dark:text-gray-400">Ghi chép sổ sách rõ ràng từng khoản đóng góp, chi tiêu và công khai cho mọi người cùng giám sát.</p>
            </div>
            <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-700 dark:text-purple-300 block mb-1">3. TÔN TRỌNG RIÊNG TƯ</strong>
              <p class="text-gray-600 dark:text-gray-400">"Của cho không bằng cách cho". Trao quà tế nhị, không tự ý chụp ảnh cận cảnh hoàn cảnh éo le đăng lên mạng câu like.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Tự hào và bảo tồn truyền thống quê hương",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Mỗi miền quê đều có những lễ hội lịch sử, danh lam thắng cảnh và làng nghề truyền thống đặc sắc (gốm Bát Tràng, chiếu Nga Sơn, lụa Vạn Phúc...).
          </p>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            <strong>Hành động của học sinh:</strong> Tích cực tham gia ngày hội di sản địa phương, dọn dẹp vệ sinh khuôn viên đền đài tưởng niệm anh hùng liệt sĩ, viết bài giới thiệu sản phẩm làng nghề quê hương tới bạn bè quốc tế.
          </p>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-hands-holding-child"></i> 3 Nguyên Tắc Vàng Trong Hoạt Động Thiện Nguyện Cộng Đồng
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">KNTT Tr. 39-45</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 160" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="210" height="100" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
            <text x="135" y="60" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">1. ĐÚNG NHU CẦU</text>
            <text x="135" y="85" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Khảo sát kĩ thực tế</text>
            <text x="135" y="105" fill="#a7f3d0" font-size="9.5" text-anchor="middle">Tặng đồ thiết thực, lành lặn</text>

            <rect x="275" y="30" width="210" height="100" rx="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
            <text x="380" y="60" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">2. CÔNG KHAI MINH BẠCH</text>
            <text x="380" y="85" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Sổ sách thu - chi rõ ràng</text>
            <text x="380" y="105" fill="#93c5fd" font-size="9.5" text-anchor="middle">Báo cáo tài chính đầy đủ</text>

            <rect x="520" y="30" width="210" height="100" rx="12" fill="#581c87" stroke="#a855f7" stroke-width="2"/>
            <text x="625" y="60" fill="#d8b4fe" font-size="13" font-weight="bold" text-anchor="middle">3. TÔN TRỌNG PHẨM GIÁ</text>
            <text x="625" y="85" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Trao tặng bằng sự chân thành</text>
            <text x="625" y="105" fill="#e9d5ff" font-size="9.5" text-anchor="middle">Không đăng ảnh chụp câu view</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Khi lớp tổ chức quyên góp ủng hộ đồng bào bị lũ lụt, hành động nào sau đây là văn minh và thiết thực nhất?",
        options: [
          "Gom quần áo rách nát, bẩn thỉu không dùng được nữa mang đi ủng hộ",
          "Giặt giũ sạch sẽ, gấp gọn gàng quần áo lành lặn và ủng hộ sách vở mới kèm lời chúc yêu thương",
          "Chụp ảnh người nhận đăng lên mạng kèm bình luận chê bai nghèo nàn",
          "Tự ý lấy tiền đóng học của cha mẹ đi ủng hộ mà không xin phép"
        ],
        answer: 1,
        explain: "Thiện nguyện phải xuất phát từ sự tôn trọng: đồ đạc ủng hộ phải lành lặn, sạch sẽ và mang lại giá trị sử dụng thực sự cho người nhận."
      },
      {
        question: "Hành vi nào sau đây thể hiện sự tôn trọng khác biệt văn hóa khi gặp một bạn học sinh dân tộc thiểu số mặc trang phục truyền thống?",
        options: [
          "Tụ tập chỉ trỏ và cười đùa chê trang phục kỳ lạ",
          "Tìm hiểu với thái độ trân trọng nét đẹp văn hóa độc đáo và kết bạn hòa đồng",
          "Yêu cầu bạn không được mặc bộ đồ đó đến trường nữa",
          "Lén chụp hình đưa lên mạng xã hội để chế giễu"
        ],
        answer: 1,
        explain: "Tôn trọng khác biệt là thái độ văn minh, cởi mở tìm hiểu và trân quý các giá trị văn hóa truyền thống của các dân tộc anh em."
      }
    ],
    checklist: [
      "Luôn chào hỏi lễ phép với người lớn tuổi trong khu dân cư.",
      "Tham gia ít nhất một hoạt động quyên góp thiện nguyện hoặc lao động vệ sinh công cộng.",
      "Không bao giờ có hành vi chế giễu tiếng nói hay trang phục vùng miền khác.",
      "Có thể kể tên và giới thiệu 1 di tích lịch sử hoặc làng nghề của địa phương."
    ]
  },

  // Chủ đề 7
  {
    id: "chu-de-7",
    num: "Chủ đề 7",
    title: "Chủ đề 7. Em với thiên nhiên và môi trường",
    pages: "SGK tr. 46–52",
    circuit: "Hướng đến tự nhiên",
    circuitTag: "TỰ NHIÊN",
    circuitColor: "bg-emerald-600",
    objective: "Thiết kế sản phẩm giới thiệu cảnh quan thiên nhiên sau chuyến tham quan; thực hiện hành vi chuẩn mực bảo vệ môi trường, di tích; hiểu rõ nguyên nhân, tác động của hiệu ứng nhà kính và tham gia chiến dịch truyền thông xanh.",
    mindmap: {
      nodes: [
        { title: "GIỚI THIỆU CẢNH QUAN", desc: "Tên, vị trí, đặc điểm thiên nhiên/văn hóa; sản phẩm: bài viết, video, tranh ảnh, infographic", color: "#059669" },
        { title: "BẢO VỆ DANH THẮNG", desc: "Không xả rác, không bẻ cành bái hoa, không viết vẽ bậy lên vách đá/di tích", color: "#d97706" },
        { title: "HIỆU ỨNG NHÀ KÍNH", desc: "Khí giữ nhiệt CO2, CH4 tăng -> Trái Đất nóng lên, nước biển dâng, thời tiết cực đoan; chiến dịch truyền thông", color: "#dc2626" }
      ]
    },
    sections: [
      {
        title: "1. Tìm hiểu và giới thiệu cảnh quan thiên nhiên",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Sau mỗi chuyến tham quan dã ngoại cùng gia đình hay nhà trường, học sinh cần hệ thống lại những điều đã trải nghiệm và sáng tạo sản phẩm truyền thông giới thiệu cảnh đẹp quê hương.
          </p>
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5">
              <i class="fa-solid fa-map-location-dot text-emerald-600 mr-1"></i> Nội dung sản phẩm giới thiệu cảnh quan
            </h5>
            <ul class="space-y-1 list-disc pl-4">
              <li><strong>Tên và vị trí địa lý:</strong> Thuộc tỉnh/thành phố nào, đường đi ra sao.</li>
              <li><strong>Vẻ đẹp đặc trưng:</strong> Hang động, thác nước, bãi biển hay thảm thực vật rừng nguyên sinh.</li>
              <li><strong>Yếu tố văn hóa - lịch sử:</strong> Sự tích gắn liền với danh thắng, phong tục lễ hội của cư dân bản địa.</li>
              <li><strong>Cảm xúc & Thông điệp:</strong> Niềm tự hào và lời kêu gọi chung tay gìn giữ vẻ đẹp hoang sơ.</li>
            </ul>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            <strong>Hình thức sản phẩm phong phú:</strong> Bài thuyết trình đa phương tiện, video clip khám phá (vlog), tập bưu ảnh handmade, tranh vẽ cổ động hoặc tờ rơi song ngữ.
          </p>
        `
      },
      {
        title: "2. Quy tắc ứng xử bảo vệ cảnh quan và di tích lịch sử",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Để bảo tồn vẻ đẹp thiên nhiên và sự tôn nghiêm của di tích, mỗi du khách học sinh phải tuân thủ nghiêm ngặt các chuẩn mực:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">Quy tắc "Không lấy gì ngoài những bức ảnh"</strong>
              <p class="text-gray-700 dark:text-gray-300">Không ngắt hoa, bẻ cành; không bắt giữ động vật hoang dã; không mang sỏi đá, san hô về làm kỷ niệm.</p>
            </div>
            <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
              <strong class="text-rose-800 dark:text-rose-300 block mb-1">Quy tắc "Không để lại gì ngoài những dấu chân"</strong>
              <p class="text-gray-700 dark:text-gray-300">Tuyệt đối không vứt rác bừa bãi; thu gom rác mang về thùng rác công cộng; tuyệt đối không viết, vẽ, khắc tên lên vách đá, thân cây hay bia đá di tích.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Hiệu ứng nhà kính và chiến dịch truyền thông xanh",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Hiệu ứng nhà kính khí quyển:</strong> Do hoạt động của con người (đốt nhiên liệu hóa thạch, chặt phá rừng bừa bãi, khí thải công nghiệp) làm nồng độ các khí $CO_2$, $CH_4$ tăng vọt, giữ lại nhiệt bức xạ từ mặt đất khiến Trái Đất nóng lên toàn cầu.
          </p>
          <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1.5">
              <i class="fa-solid fa-temperature-arrow-up text-amber-600 mr-1"></i> Hậu quả nghiêm trọng
            </h5>
            <p class="mb-1">Băng hai cực tan chảy nhanh làm nước biển dâng, đe dọa nhấn chìm các vùng đồng bằng ven biển; thời tiết cực đoan (bão lũ dữ dội, hạn hán khốc liệt); sụt giảm năng suất nông nghiệp.</p>
          </div>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            <strong>4 Hành động cụ thể của học sinh:</strong>
            <br>1. Trồng và chăm sóc cây xanh tại trường và nhà.
            <br>2. Tắt các thiết bị điện khi ra khỏi phòng học.
            <br>3. Đi bộ, đi xe đạp hoặc sử dụng xe buýt công cộng.
            <br>4. Thực hiện nguyên tắc 3R (Reduce - Giảm thiểu, Reuse - Tái sử dụng, Recycle - Tái chế).
          </p>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-earth-americas"></i> Cơ Chế Hiệu Ứng Nhà Kính & 4 Hành Động Xanh
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">KNTT Tr. 46-52</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 170" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="220" height="120" rx="12" fill="#7f1d1d" fill-opacity="0.3" stroke="#ef4444" stroke-width="2"/>
            <text x="130" y="50" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">HIỆU ỨNG NHÀ KÍNH</text>
            <text x="130" y="75" fill="#fecaca" font-size="10" text-anchor="middle">Khí CO2, CH4 tăng vọt</text>
            <text x="130" y="95" fill="#fee2e2" font-size="10" text-anchor="middle">Nhiệt lượng bị giữ lại</text>
            <text x="130" y="115" fill="#ef4444" font-size="10.5" font-weight="bold" text-anchor="middle">Trái Đất nóng lên toàn cầu</text>

            <path d="M 240 85 L 280 85" stroke="#ef4444" stroke-width="2"/>

            <rect x="280" y="25" width="460" height="120" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
            <text x="510" y="48" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">4 HÀNH ĐỘNG GIẢM THIỂU CỦA HỌC SINH</text>
            
            <g transform="translate(300, 65)">
              <rect width="95" height="65" rx="8" fill="#022c22" stroke="#059669"/>
              <text x="47" y="25" fill="#fff" font-size="14" text-anchor="middle">🌱</text>
              <text x="47" y="45" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Trồng cây</text>
              <text x="47" y="57" fill="#6ee7b7" font-size="8" text-anchor="middle">Hấp thụ CO2</text>
            </g>
            <g transform="translate(405, 65)">
              <rect width="95" height="65" rx="8" fill="#022c22" stroke="#059669"/>
              <text x="47" y="25" fill="#fff" font-size="14" text-anchor="middle">💡</text>
              <text x="47" y="45" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Tiết kiệm điện</text>
              <text x="47" y="57" fill="#6ee7b7" font-size="8" text-anchor="middle">Tắt khi rời đi</text>
            </g>
            <g transform="translate(510, 65)">
              <rect width="95" height="65" rx="8" fill="#022c22" stroke="#059669"/>
              <text x="47" y="25" fill="#fff" font-size="14" text-anchor="middle">🚲</text>
              <text x="47" y="45" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Đi xe đạp</text>
              <text x="47" y="57" fill="#6ee7b7" font-size="8" text-anchor="middle">Giảm khói bụi</text>
            </g>
            <g transform="translate(615, 65)">
              <rect width="105" height="65" rx="8" fill="#022c22" stroke="#059669"/>
              <text x="52" y="25" fill="#fff" font-size="14" text-anchor="middle">♻</text>
              <text x="52" y="45" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Phân loại rác</text>
              <text x="52" y="57" fill="#6ee7b7" font-size="8" text-anchor="middle">Tái sử dụng</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Hành động nào sau đây tại khu di tích lịch sử hoặc danh lam thắng cảnh là ĐÁNG LÊN ÁN và vi phạm pháp luật?",
        options: [
          "Bỏ rác đúng nơi quy định trong thùng rác có nắp đậy",
          "Dùng bút xóa hoặc dao nhỏ khắc tên mình lên bia đá, vách hang động",
          "Đi theo đúng đường chỉ dẫn của ban quản lí di tích",
          "Chụp ảnh kỉ niệm cùng bạn bè tại khu vực cho phép"
        ],
        answer: 1,
        explain: "Hành vi viết, vẽ, khắc tên lên vách đá hoặc di tích làm phá hoại cảnh quan, xâm phạm di sản văn hóa và bị pháp luật nghiêm cấm."
      },
      {
        question: "Khí nào sau đây là nguyên nhân chủ yếu gây nên hiệu ứng nhà kính tăng cường do hoạt động công nghiệp và giao thông đốt nhiên liệu hóa thạch?",
        options: ["Khí Oxy (O2)", "Khí Carbon dioxide (CO2)", "Khí Nitơ (N2)", "Khí Hydro (H2)"],
        answer: 1,
        explain: "Carbon dioxide (CO2) sinh ra từ việc đốt than đá, dầu mỏ và phá rừng là loại khí nhà kính giữ nhiệt chủ yếu làm Trái Đất nóng lên."
      }
    ],
    checklist: [
      "Có ít nhất 1 sản phẩm (tranh/ảnh/bài viết) sau chuyến dã ngoại thiên nhiên.",
      "Thực hiện nghiêm túc việc không xả rác và nhắc nhở bạn cùng làm theo.",
      "Giải thích được nguyên nhân và hậu quả cơ bản của hiện tượng hiệu ứng nhà kính.",
      "Tham gia trồng cây hoặc tắt điện lớp học khi kết thúc buổi học."
    ]
  },

  // Chủ đề 8
  {
    id: "chu-de-8",
    num: "Chủ đề 8",
    title: "Chủ đề 8. Khám phá thế giới nghề nghiệp",
    pages: "SGK tr. 52–59",
    circuit: "Hướng nghiệp",
    circuitTag: "HƯỚNG NGHIỆP",
    circuitColor: "bg-rose-600",
    objective: "Kể tên và tìm hiểu đặc trưng các nghề nghiệp phổ biến tại địa phương; nắm vững 6 trụ cột thông tin về một nghề; biết cách thu thập thông tin nghề nghiệp và thực hiện dự án khám phá nghề.",
    mindmap: {
      nodes: [
        { title: "6 TRỤ CỘT NGHỀ", desc: "Tên nghề, Công việc đặc trưng, Trang thiết bị, Yêu cầu phẩm chất/năng lực, Nguy cơ an toàn, Nơi đào tạo", color: "#e11d48" },
        { title: "CÁCH THU THẬP", desc: "Quan sát thực tế, Phỏng vấn người làm nghề, Tra cứu sách báo/internet, Trải nghiệm có giám sát", color: "#059669" },
        { title: "DỰ ÁN TÌM HIỂU NGHỀ", desc: "Lập kế hoạch, phân công nhóm, tổng hợp thông tin và báo cáo sản phẩm đa phương tiện", color: "#d97706" }
      ]
    },
    sections: [
      {
        title: "1. 6 Trụ cột nội dung cần tìm hiểu về một nghề",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Để có định hướng nghề nghiệp đúng đắn trong tương lai, khi tìm hiểu bất kì ngành nghề nào, học sinh cần trả lời trọn vẹn 6 trụ cột thông tin:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
              <strong class="text-rose-700 dark:text-rose-300 block mb-1">1. Tên nghề & Nơi làm việc</strong>
              <p class="text-gray-600 dark:text-gray-400">Tên gọi chính xác của nghề; môi trường làm việc (văn phòng, xưởng máy ngoài trời, bệnh viện, trường học hay trên tàu biển).</p>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">2. Hoạt động & Sản phẩm</strong>
              <p class="text-gray-600 dark:text-gray-400">Các công việc đặc trưng hàng ngày phải làm; sản phẩm vật chất hoặc dịch vụ tinh thần tạo ra phục vụ xã hội.</p>
            </div>
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">3. Trang thiết bị & Dụng cụ</strong>
              <p class="text-gray-600 dark:text-gray-400">Máy móc, thiết bị công nghệ, phương tiện bảo hộ lao động mà người làm nghề bắt buộc phải thao tác sử dụng thành thạo.</p>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">4. Yêu cầu Phẩm chất & Năng lực</strong>
              <p class="text-gray-600 dark:text-gray-400">Trình độ học vấn, kỹ năng chuyên môn, sức khỏe thể chất và các đức tính cần thiết (tỉ mỉ, sáng tạo, kiên nhẫn, trung thực...).</p>
            </div>
            <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-700 dark:text-purple-300 block mb-1">5. Nguy cơ mất an toàn & Phòng tránh</strong>
              <p class="text-gray-600 dark:text-gray-400">Các yếu tố độc hại, nguy hiểm nghề nghiệp (bỏng, điện giật, ngộ độc hóa chất, bệnh nghề nghiệp) và biện pháp bảo hộ an toàn.</p>
            </div>
            <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
              <strong class="text-indigo-700 dark:text-indigo-300 block mb-1">6. Nơi đào tạo & Cơ hội phát triển</strong>
              <p class="text-gray-600 dark:text-gray-400">Các trường đại học, cao đẳng, trung cấp hoặc trường dạy nghề đào tạo ngành đó; triển vọng phát triển và nhu cầu xã hội.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Các phương pháp thu thập thông tin nghề nghiệp",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Học sinh có thể chủ động tìm hiểu thực tế qua nhiều kênh đa dạng:
          </p>
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Quan sát trực tiếp:</strong> Đến tận xưởng mộc, vườn ươm, trạm y tế, cửa hàng bánh để theo dõi các thao tác thực tế.</li>
            <li><strong>Phỏng vấn người trong nghề:</strong> Soạn sẵn 3-5 câu hỏi ngắn hỏi thăm về niềm vui, nỗi vất vả, thu nhập và lời khuyên dành cho học sinh.</li>
            <li><strong>Đọc tài liệu & Internet:</strong> Đọc sách báo định hướng nghề nghiệp, xem các video ký sự "Một ngày làm việc của..." trên truyền hình.</li>
            <li><strong>Trải nghiệm có giám sát:</strong> Thử phụ việc đơn giản như xếp sách trong thư viện, phụ cắm hoa, trộn bột làm bánh dưới sự hướng dẫn an toàn.</li>
          </ul>
        `
      },
      {
        title: "3. Triển khai dự án tìm hiểu nghề nghiệp địa phương",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Mỗi nhóm học sinh (4-6 bạn) cùng chọn một nghề phổ biến ở địa phương (nghề trồng hoa kiểng, nghề gốm sứ, nghề y tá điều dưỡng, kĩ sư công nghệ thông tin...).
          </p>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            <strong>Kế hoạch dự án:</strong> Phân công thành viên phụ trách phỏng vấn, quay phim/chụp ảnh (xin phép trước), tổng hợp tư liệu, thiết kế sơ đồ tư duy hoặc poster thuyết trình trước lớp.
          </p>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-rose-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-rose-500/20">
          <span class="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-compass-drafting"></i> 6 Trụ Cột Khám Phá Thế Giới Nghề Nghiệp
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">KNTT Tr. 52-59</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 170" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(15, 20)">
              <rect width="115" height="125" rx="10" fill="#1e293b" stroke="#e11d48"/>
              <text x="57" y="35" fill="#f43f5e" font-size="16" text-anchor="middle">🏷</text>
              <text x="57" y="60" fill="#fda4af" font-size="10.5" font-weight="bold" text-anchor="middle">1. Tên Nghề</text>
              <text x="57" y="80" fill="#cbd5e1" font-size="9" text-anchor="middle">Tên gọi</text>
              <text x="57" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Nơi làm việc</text>
            </g>
            <g transform="translate(140, 20)">
              <rect width="115" height="125" rx="10" fill="#1e293b" stroke="#3b82f6"/>
              <text x="57" y="35" fill="#3b82f6" font-size="16" text-anchor="middle">⚙</text>
              <text x="57" y="60" fill="#93c5fd" font-size="10.5" font-weight="bold" text-anchor="middle">2. Công Việc</text>
              <text x="57" y="80" fill="#cbd5e1" font-size="9" text-anchor="middle">Thao tác chính</text>
              <text x="57" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Sản phẩm tạo ra</text>
            </g>
            <g transform="translate(265, 20)">
              <rect width="115" height="125" rx="10" fill="#1e293b" stroke="#f59e0b"/>
              <text x="57" y="35" fill="#f59e0b" font-size="16" text-anchor="middle">🛠</text>
              <text x="57" y="60" fill="#fde68a" font-size="10.5" font-weight="bold" text-anchor="middle">3. Dụng Cụ</text>
              <text x="57" y="80" fill="#cbd5e1" font-size="9" text-anchor="middle">Máy móc thiết bị</text>
              <text x="57" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Đồ bảo hộ</text>
            </g>
            <g transform="translate(390, 20)">
              <rect width="115" height="125" rx="10" fill="#1e293b" stroke="#10b981"/>
              <text x="57" y="35" fill="#10b981" font-size="16" text-anchor="middle">🧠</text>
              <text x="57" y="60" fill="#6ee7b7" font-size="10.5" font-weight="bold" text-anchor="middle">4. Phẩm Chất</text>
              <text x="57" y="80" fill="#cbd5e1" font-size="9" text-anchor="middle">Kĩ năng nghề</text>
              <text x="57" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Đức tính cần có</text>
            </g>
            <g transform="translate(515, 20)">
              <rect width="115" height="125" rx="10" fill="#1e293b" stroke="#ef4444"/>
              <text x="57" y="35" fill="#ef4444" font-size="16" text-anchor="middle">⚠</text>
              <text x="57" y="60" fill="#fca5a5" font-size="10.5" font-weight="bold" text-anchor="middle">5. Nguy Cơ</text>
              <text x="57" y="80" fill="#cbd5e1" font-size="9" text-anchor="middle">Mất an toàn</text>
              <text x="57" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Cách phòng ngừa</text>
            </g>
            <g transform="translate(640, 20)">
              <rect width="105" height="125" rx="10" fill="#1e293b" stroke="#8b5cf6"/>
              <text x="52" y="35" fill="#8b5cf6" font-size="16" text-anchor="middle">🎓</text>
              <text x="52" y="60" fill="#c4b5fd" font-size="10.5" font-weight="bold" text-anchor="middle">6. Đào Tạo</text>
              <text x="52" y="80" fill="#cbd5e1" font-size="9" text-anchor="middle">Trường đào tạo</text>
              <text x="52" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Cơ hội việc làm</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Khi tiến hành phỏng vấn người làm nghề để thu thập thông tin làm dự án, hành vi nào sau đây là BẮT BUỘC phải thực hiện?",
        options: [
          "Bật máy quay phim lén khi người ta chưa đồng ý",
          "Chào hỏi lễ phép, xin phép trước khi quay phim/chụp ảnh và chuẩn bị sẵn câu hỏi ngắn gọn",
          "Tự ý thò tay vào máy móc xưởng xí nghiệp bấm thử các nút bấm",
          "Ngắt lời người lao động khi họ đang giải thích công việc"
        ],
        answer: 1,
        explain: "Tôn trọng người lao động, xin phép trước khi chụp ảnh/ghi âm và không tự ý chạm vào máy móc nguy hiểm là quy tắc an toàn và đạo đức cơ bản."
      },
      {
        question: "Trụ cột nào sau đây giúp người tìm hiểu nghề nhận biết được các nguy hiểm có thể xảy ra và trang bị đồ bảo hộ phù hợp?",
        options: [
          "Nơi đào tạo nghề",
          "Tên gọi của nghề",
          "Nguy cơ mất an toàn và cách phòng tránh",
          "Mức lương hàng tháng"
        ],
        answer: 2,
        explain: "Trụ cột 'Nguy cơ mất an toàn và cách phòng tránh' chỉ ra các rủi ro độc hại, tai nạn nghề nghiệp và hướng dẫn sử dụng đồ bảo hộ chuẩn."
      }
    ],
    checklist: [
      "Kể tên được ít nhất 3 nghề truyền thống hoặc nghề đang phát triển tại địa phương.",
      "Thu thập đủ 6 trụ cột thông tin về 1 nghề mà bản thân yêu thích.",
      "Thực hiện nghiêm quy tắc an toàn khi tham quan thực tế xưởng sản xuất.",
      "Hoàn thành sản phẩm dự án (báo cáo/sơ đồ tư duy/poster) cùng nhóm bạn."
    ]
  },

  // Chủ đề 9
  {
    id: "chu-de-9",
    num: "Chủ đề 9",
    title: "Chủ đề 9. Hiểu bản thân – chọn đúng nghề",
    pages: "SGK tr. 59–64",
    circuit: "Hướng nghiệp",
    circuitTag: "HƯỚNG NGHIỆP",
    circuitColor: "bg-rose-600",
    objective: "Tự đánh giá mức độ thể hiện các phẩm chất và năng lực của bản thân; nắm vững 10 phẩm chất cốt lõi; thực hiện quy trình 5 bước đối chiếu độ phù hợp giữa bản thân với nghề quan tâm; xây dựng kế hoạch rèn luyện tương lai.",
    mindmap: {
      nodes: [
        { title: "4 MỨC THỂ HIỆN", desc: "Thường xuyên; Có thể hiện nhưng chưa thường xuyên; Ít khi; Chưa thể hiện", color: "#e11d48" },
        { title: "10 PHẨM CHẤT CỐT LÕI", desc: "Trung thực, Tự trọng, Tự lực, Tự chủ, Cẩn thận, Chăm chỉ, Tự hoàn thiện, Tự nguyện, Kỉ luật, Pháp luật", color: "#059669" },
        { title: "5 BƯỚC ĐỐI CHIẾU NGHỀ", desc: "1. Chọn nghề -> 2. Tìm yêu cầu -> 3. Tự đối chiếu -> 4. Tham vấn chuyên gia -> 5. Lập kế hoạch", color: "#2563eb" }
      ]
    },
    sections: [
      {
        title: "1. Tự nhận thức phẩm chất và năng lực của bản thân",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Để biết mình phù hợp với ngành nghề nào trong tương lai, học sinh cần tự soi rọi mức độ thể hiện các phẩm chất cá nhân dựa trên minh chứng hành động thực tế theo <strong>4 thang đo</strong>:
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs mb-3">
            <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-300 dark:border-emerald-700">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">MỨC 1</strong>
              <span>Thường xuyên thể hiện</span>
            </div>
            <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">MỨC 2</strong>
              <span>Có thể hiện nhưng chưa thường xuyên</span>
            </div>
            <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">MỨC 3</strong>
              <span>Ít khi thể hiện</span>
            </div>
            <div class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <strong class="text-gray-700 dark:text-gray-300 block mb-1">MỨC 4</strong>
              <span>Chưa thể hiện</span>
            </div>
          </div>
        `
      },
      {
        title: "2. 10 Phẩm chất cốt lõi của người lao động trong thời đại mới",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>1. Trung thực:</strong> Không gian dối, tôn trọng sự thật, không nhận công của người khác.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>2. Tự trọng:</strong> Giữ gìn nhân cách, danh dự bản thân; cư xử đúng mực, làm tròn lời hứa.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>3. Tự lực:</strong> Chủ động suy nghĩ và làm việc của mình; không ỷ lại, trông chờ người khác làm thay.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>4. Tự chủ:</strong> Bình tĩnh làm chủ cảm xúc, suy nghĩ và hành động; ứng xử hòa nhã, có chừng mực.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>5. Cẩn thận:</strong> Chu đáo, cân nhắc kĩ các yếu tố trước khi làm nhằm bảo đảm tính chính xác cao.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>6. Chăm chỉ, vượt khó:</strong> Siêng năng, kiên trì theo đuổi công việc đến cùng dù gặp muôn vàn trở ngại.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>7. Tự hoàn thiện:</strong> Thường xuyên tự soi rọi, cầu thị học hỏi điều mới để ngày một tiến bộ.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>8. Tự nguyện:</strong> Hăng hái tham gia các hoạt động chung vì lợi ích cộng đồng, không cần ai ép buộc.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>9. Chấp hành kỉ luật:</strong> Nắm vững và nghiêm túc tuân theo nội quy, quy định tập thể.
            </div>
            <div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border">
              <strong>10. Tuân thủ pháp luật:</strong> Sống và làm việc theo Hiến pháp và pháp luật, dũng cảm đấu tranh với sai phạm.
            </div>
          </div>
        `
      },
      {
        title: "3. Quy trình 5 bước đánh giá độ phù hợp với nghề nghiệp",
        content: `
          <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-xs text-gray-700 dark:text-gray-300">
            <ol class="space-y-2 list-decimal pl-4">
              <li><strong>Bước 1. Chọn nghề quan tâm:</strong> Chọn 1-2 nghề tại địa phương hoặc nghề mình hằng mơ ước (Ví dụ: Bác sĩ, Hướng dẫn viên du lịch, Lập trình viên).</li>
              <li><strong>Bước 2. Xác định yêu cầu nghề nghiệp:</strong> Tìm hiểu chi tiết các yêu cầu về phẩm chất (cẩn thận, giao tiếp tốt...) và năng lực (ngoại ngữ, tư duy logic, sức khỏe dẻo dai...).</li>
              <li><strong>Bước 3. Tự đối chiếu với minh chứng bản thân:</strong> Chỉ ra điểm nào mình đã ĐẠT (kèm minh chứng: được khen thưởng, điểm số, thói quen), điểm nào CHƯA ĐẠT.</li>
              <li><strong>Bước 4. Tham vấn chuyên gia:</strong> Trao đổi với cha mẹ, thầy cô hoặc người đang trực tiếp làm nghề để có góc nhìn khách quan, tránh ảo tưởng hay tự ti vô căn cứ.</li>
              <li><strong>Bước 5. Lập kế hoạch rèn luyện:</strong> Đề ra lộ trình cụ thể từ lớp 7 (học thêm ngoại ngữ, tập thể dục, đọc sách chuyên ngành) để bù đắp các điểm còn thiếu.</li>
            </ol>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
            *Lưu ý cốt lõi:* Không đồng nhất khái niệm "Chưa giỏi" với "Không thể làm được". Mọi phẩm chất và năng lực đều có thể trau dồi qua quá trình rèn luyện bền bỉ mỗi ngày!
          </p>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-rose-500/30">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-rose-500/20">
          <span class="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-stairs"></i> Thang 5 Bước Đối Chiếu & Định Hướng Nghề Tương Lai
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">KNTT Tr. 59-64</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 170" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(15, 20)">
              <rect width="135" height="125" rx="10" fill="#1e293b" stroke="#64748b"/>
              <circle cx="67" cy="35" r="14" fill="#64748b"/>
              <text x="67" y="40" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">1</text>
              <text x="67" y="65" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">CHỌN NGHỀ</text>
              <text x="67" y="85" fill="#94a3b8" font-size="9" text-anchor="middle">Nghề yêu thích</text>
              <text x="67" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Nghề địa phương</text>
            </g>
            <g transform="translate(165, 20)">
              <rect width="135" height="125" rx="10" fill="#1e293b" stroke="#3b82f6"/>
              <circle cx="67" cy="35" r="14" fill="#3b82f6"/>
              <text x="67" y="40" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">2</text>
              <text x="67" y="65" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">TÌM YÊU CẦU</text>
              <text x="67" y="85" fill="#94a3b8" font-size="9" text-anchor="middle">Phẩm chất cần có</text>
              <text x="67" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Năng lực cốt lõi</text>
            </g>
            <g transform="translate(315, 20)">
              <rect width="135" height="125" rx="10" fill="#1e293b" stroke="#f59e0b"/>
              <circle cx="67" cy="35" r="14" fill="#f59e0b"/>
              <text x="67" y="40" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">3</text>
              <text x="67" y="65" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">TỰ ĐỐI CHIẾU</text>
              <text x="67" y="85" fill="#94a3b8" font-size="9" text-anchor="middle">Điểm ĐẠT & CHƯA</text>
              <text x="67" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Dựa trên minh chứng</text>
            </g>
            <g transform="translate(465, 20)">
              <rect width="135" height="125" rx="10" fill="#1e293b" stroke="#8b5cf6"/>
              <circle cx="67" cy="35" r="14" fill="#8b5cf6"/>
              <text x="67" y="40" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">4</text>
              <text x="67" y="65" fill="#c4b5fd" font-size="11" font-weight="bold" text-anchor="middle">THAM VẤN</text>
              <text x="67" y="85" fill="#94a3b8" font-size="9" text-anchor="middle">Hỏi bố mẹ, thầy cô</text>
              <text x="67" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Người làm nghề thực tế</text>
            </g>
            <g transform="translate(615, 20)">
              <rect width="130" height="125" rx="10" fill="#1e293b" stroke="#10b981"/>
              <circle cx="65" cy="35" r="14" fill="#10b981"/>
              <text x="65" y="40" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">5</text>
              <text x="65" y="65" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">LẬP KẾ HOẠCH</text>
              <text x="65" y="85" fill="#94a3b8" font-size="9" text-anchor="middle">Rèn luyện từ lớp 7</text>
              <text x="65" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Hành động mỗi ngày</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Phẩm chất nào sau đây thể hiện tinh thần 'Chủ động học hỏi, làm việc của bản thân, không ỷ lại trông chờ người khác'?",
        options: ["Tự lực", "Tự nguyện", "Tự trọng", "Cẩn thận"],
        answer: 0,
        explain: "Tự lực là khả năng tự mình chủ động nỗ lực giải quyết các công việc cá nhân mà không ỷ lại hay phụ thuộc vào người khác."
      },
      {
        question: "Khi đối chiếu bản thân với nghề hướng dẫn viên du lịch và nhận thấy khả năng ngoại ngữ của mình chưa tốt, thái độ đúng đắn nhất là gì?",
        options: [
          "Tuyệt vọng bỏ cuộc ngay vì nghĩ mình không bao giờ có thể làm được",
          "Thừa nhận điểm chưa đạt và lập kế hoạch rèn luyện ngoại ngữ kiên trì mỗi ngày từ ngay hôm nay",
          "Nói dối rằng mình rất giỏi tiếng Anh để được bạn bè khen",
          "Đổ lỗi cho bố mẹ không thuê gia sư đắt tiền cho mình"
        ],
        answer: 1,
        explain: "'Chưa giỏi' không đồng nghĩa với 'không thể làm được'. Nhận biết điểm hạn chế và lập kế hoạch rèn luyện kiên trì là tinh thần hướng nghiệp khoa học."
      }
    ],
    checklist: [
      "Tự chấm điểm mức độ thể hiện của bản thân trên ít nhất 5 phẩm chất lao động.",
      "Chỉ ra được 2 điểm phù hợp và 1 điểm cần cải thiện đối với nghề nghiệp tương lai.",
      "Trao đổi cùng bố mẹ hoặc thầy cô về sở thích nghề nghiệp của mình.",
      "Lập bản cam kết rèn luyện 1 kĩ năng quan trọng (ngoại ngữ, tin học hoặc thể lực)."
    ]
  },

  // Topic 10: Ôn tập toàn môn & Mẫu ghi nhận & Từ khóa cốt lõi
  {
    id: "on-tap",
    num: "Ôn tập",
    title: "Ôn tập toàn môn & Mẫu ghi nhận trải nghiệm",
    pages: "Tổng kết 105 tiết",
    circuit: "Tổng hợp",
    circuitTag: "TOÀN MÔN",
    circuitColor: "bg-slate-700",
    objective: "Hệ thống hóa toàn bộ kiến thức và kĩ năng qua 9 chủ đề thuộc 4 mạch nội dung; thực hành ghi nhận hoạt động trải nghiệm theo mẫu chuẩn 8 mục; tra cứu và khắc sâu các từ khóa cốt lõi.",
    mindmap: {
      nodes: [
        { title: "4 MẠCH NỘI DUNG", desc: "Bản thân (CĐ 2,3,4) • Xã hội (CĐ 1,5,6) • Tự nhiên (CĐ 7) • Hướng nghiệp (CĐ 8,9)", color: "#3b82f6" },
        { title: "MẪU GHI NHẬN 8 MỤC", desc: "Chủ đề -> Mục tiêu -> Việc đã làm -> Người hỗ trợ -> Kết quả -> Khó khăn -> Bài học -> Tiếp tục rèn", color: "#10b981" },
        { title: "TỪ KHÓA CỐT LÕI", desc: "Kĩ năng, Kiểm soát cảm xúc, Kiên trì, Cảnh quan, Dự án, Truyền thông, Phẩm chất, Năng lực", color: "#f59e0b" }
      ]
    },
    sections: [
      {
        title: "1. Bảng ma trận 9 chủ đề Hoạt động trải nghiệm, hướng nghiệp 7",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  <th class="p-2.5 border border-gray-200 dark:border-gray-700 font-bold">Mạch nội dung</th>
                  <th class="p-2.5 border border-gray-200 dark:border-gray-700 font-bold">Chủ đề</th>
                  <th class="p-2.5 border border-gray-200 dark:border-gray-700 font-bold">Yêu cầu cần đạt cốt lõi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                <tr>
                  <td rowspan="3" class="p-2.5 border border-gray-200 dark:border-gray-700 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10">HƯỚNG VÀO BẢN THÂN</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 2: Khám phá bản thân</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">Chỉ ra điểm mạnh/hạn chế; lập kế hoạch tự rèn luyện; kiểm soát cảm xúc bực dọc.</td>
                </tr>
                <tr>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 3: Trách nhiệm với bản thân</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">Vượt khó trong học tập; kĩ năng tự bảo vệ (bạo lực, xâm hại, an toàn mạng, số 111).</td>
                </tr>
                <tr>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 4: Rèn luyện bản thân</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">Nếp sống ngăn nắp, gọn gàng; tính kiên trì, chăm chỉ; quản lí chi tiêu theo quy tắc 50/30/20.</td>
                </tr>
                <tr>
                  <td rowspan="3" class="p-2.5 border border-gray-200 dark:border-gray-700 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">HƯỚNG ĐẾN XÃ HỘI</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 1: Em với nhà trường</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">Hòa đồng với thầy cô, bạn bè; 5 bước hợp tác nhóm; xây dựng lớp học hạnh phúc.</td>
                </tr>
                <tr>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 5: Em với gia đình</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">Chăm sóc người thân khi ốm; tham gia lao động việc nhà; lắng nghe tích cực cha mẹ.</td>
                </tr>
                <tr>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 6: Em với cộng đồng</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">Giao tiếp văn hóa tôn trọng khác biệt; 3 nguyên tắc thiện nguyện; bảo tồn truyền thống địa phương.</td>
                </tr>
                <tr>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10">HƯỚNG ĐẾN TỰ NHIÊN</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 7: Em với thiên nhiên & môi trường</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">Sản phẩm giới thiệu cảnh quan; hiểu hiệu ứng nhà kính; hành vi xanh giảm thiểu phát thải.</td>
                </tr>
                <tr>
                  <td rowspan="2" class="p-2.5 border border-gray-200 dark:border-gray-700 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-900/10">HƯỚNG NGHIỆP</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 8: Khám phá nghề nghiệp</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">6 Trụ cột tìm hiểu nghề; phương pháp phỏng vấn, khảo sát; dự án tìm hiểu nghề địa phương.</td>
                </tr>
                <tr>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700 font-semibold">Chủ đề 9: Hiểu bản thân – chọn nghề</td>
                  <td class="p-2.5 border border-gray-200 dark:border-gray-700">10 Phẩm chất cốt lõi; quy trình 5 bước đối chiếu bản thân với nghề; kế hoạch rèn luyện.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "2. Mẫu ghi nhận hoạt động trải nghiệm (8 Mục chuẩn SGK KNTT)",
        content: `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300">
            <p class="font-bold text-sm text-gray-900 dark:text-white mb-2 flex items-center justify-between">
              <span><i class="fa-solid fa-file-signature text-blue-600 mr-1.5"></i> Cấu trúc 8 mục ghi chép nhật ký trải nghiệm</span>
              <button onclick="openJournalModal()" class="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium text-[11px] transition shadow">
                <i class="fa-solid fa-pen-to-square mr-1"></i> Mở Mẫu Trực Tuyến
              </button>
            </p>
            <ol class="space-y-1.5 list-decimal pl-4">
              <li><strong>Chủ đề / Tình huống trải nghiệm:</strong> Ghi rõ tên chủ đề hoặc sự việc thực tế em đã tham gia.</li>
              <li><strong>Mục tiêu của em:</strong> Điều em mong muốn đạt được sau hoạt động.</li>
              <li><strong>Việc em đã làm:</strong> Các hành động, bước làm cụ thể của bản thân.</li>
              <li><strong>Người em đã phối hợp / tìm hỗ trợ:</strong> Thầy cô, cha mẹ, bạn bè hay chuyên gia.</li>
              <li><strong>Kết quả / Minh chứng:</strong> Sản phẩm, điểm số, sự thay đổi tâm lý hoặc lời nhận xét.</li>
              <li><strong>Khó khăn & Cách điều chỉnh:</strong> Trở ngại gặp phải và cách em xử lí vượt qua.</li>
              <li><strong>Điều em rút ra:</strong> Bài học kinh nghiệm sâu sắc nhất cho bản thân.</li>
              <li><strong>Việc em sẽ tiếp tục rèn luyện:</strong> Cam kết duy trì thói quen hoặc khắc phục khuyết điểm.</li>
            </ol>
          </div>
        `
      },
      {
        title: "3. Từ điển thuật ngữ cốt lõi Hoạt động trải nghiệm 7",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300 mt-3">
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-blue-600 dark:text-blue-400 block mb-1">Kĩ năng:</strong>
              Khả năng vận dụng những tri thức, hiểu biết đã học vào giải quyết các tình huống thực tiễn một cách hiệu quả và thuần thục.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-rose-600 dark:text-rose-400 block mb-1">Kiểm soát cảm xúc:</strong>
              Năng lực nhận ra, điều chỉnh và thể hiện cảm xúc của mình một cách phù hợp với chuẩn mực xã hội và hoàn cảnh giao tiếp.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-amber-600 dark:text-amber-400 block mb-1">Kiên trì:</strong>
              Đức tính theo đuổi công việc, mục tiêu đã đề ra đến cùng dù gặp phải muôn vàn khó khăn, trở ngại hay thất bại tạm thời.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Cảnh quan:</strong>
              Cảnh đẹp của tự nhiên (sông, núi, hang động, biển đảo) hoặc các công trình nhân tạo hài hòa do con người kiến tạo nên.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-purple-600 dark:text-purple-400 block mb-1">Dự án trải nghiệm:</strong>
              Hoạt động nhóm có mục tiêu rõ ràng, cùng thống nhất nội dung, lập kế hoạch, phân công thực hiện và tạo ra sản phẩm có giá trị.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">Truyền thông:</strong>
              Quá trình truyền đạt thông điệp bằng lời nói, chữ viết, âm thanh, hình ảnh nhằm tác động tích cực đến nhận thức và hành vi của đối tượng.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-red-600 dark:text-red-400 block mb-1">Phẩm chất:</strong>
              Những tính tốt, nét đẹp đạo đức của một con người được bộc lộ thông qua thái độ, lời nói và hành vi ứng xử hàng ngày.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-teal-600 dark:text-teal-400 block mb-1">Năng lực:</strong>
              Khả năng huy động tổng hợp các kiến thức, kĩ năng, thái độ và tố chất cá nhân để thực hiện thành công một hoạt động cụ thể.
            </div>
          </div>
        `
      }
    ],
    illustration: `
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-slate-700">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
          <span class="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-graduation-cap"></i> Hệ Thống Ma Trận Tích Hợp 4 Mạch Nội Dung HDTN 7 (105 Tiết)
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">Tổng Kết Năm Học</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 760 160" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <rect width="165" height="120" rx="10" fill="#1e1b4b" stroke="#818cf8"/>
              <text x="82" y="35" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">BẢN THÂN</text>
              <text x="82" y="55" fill="#e0e7ff" font-size="10" text-anchor="middle">Chủ đề 2, 3, 4</text>
              <text x="82" y="80" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tự hiểu - Vượt khó</text>
              <text x="82" y="98" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Ngăn nắp - Tiết kiệm</text>
            </g>
            <g transform="translate(205, 20)">
              <rect width="165" height="120" rx="10" fill="#1e3a8a" stroke="#60a5fa"/>
              <text x="82" y="35" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">XÃ HỘI</text>
              <text x="82" y="55" fill="#dbeafe" font-size="10" text-anchor="middle">Chủ đề 1, 5, 6</text>
              <text x="82" y="80" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Nhà trường - Gia đình</text>
              <text x="82" y="98" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Cộng đồng nhân ái</text>
            </g>
            <g transform="translate(390, 20)">
              <rect width="165" height="120" rx="10" fill="#064e3b" stroke="#34d399"/>
              <text x="82" y="35" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">TỰ NHIÊN</text>
              <text x="82" y="55" fill="#d1fae5" font-size="10" text-anchor="middle">Chủ đề 7</text>
              <text x="82" y="80" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Cảnh quan thiên nhiên</text>
              <text x="82" y="98" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Chiến dịch xanh 3R</text>
            </g>
            <g transform="translate(575, 20)">
              <rect width="165" height="120" rx="10" fill="#881337" stroke="#fb7185"/>
              <text x="82" y="35" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">HƯỚNG NGHIỆP</text>
              <text x="82" y="55" fill="#ffe4e6" font-size="10" text-anchor="middle">Chủ đề 8, 9</text>
              <text x="82" y="80" fill="#cbd5e1" font-size="8.5" text-anchor="middle">6 Trụ cột nghề</text>
              <text x="82" y="98" fill="#cbd5e1" font-size="8.5" text-anchor="middle">10 Phẩm chất cốt lõi</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Hoạt động giáo dục theo chương trình Hoạt động trải nghiệm, hướng nghiệp 7 được tổ chức theo bao nhiêu hình thức chính?",
        options: [
          "2 hình thức: Học trên lớp và Thi học kỳ",
          "3 hình thức: Sinh hoạt dưới cờ, Hoạt động giáo dục theo chủ đề và Sinh hoạt lớp",
          "4 hình thức: Thể dục thể thao, Văn nghệ, Viết văn và Ngoại khóa",
          "1 hình thức duy nhất: Tham quan dã ngoại"
        ],
        answer: 1,
        explain: "SGK quy định rõ 3 hình thức tổ chức trải nghiệm cốt lõi gồm: Sinh hoạt dưới cờ, Hoạt động giáo dục theo chủ đề và Sinh hoạt lớp."
      },
      {
        question: "Bốn mạch nội dung xuyên suốt toàn bộ chương trình Hoạt động trải nghiệm, hướng nghiệp 7 gồm những mạch nào?",
        options: [
          "Toán học, Văn học, Ngoại ngữ và Khoa học tự nhiên",
          "Hướng vào bản thân, Hướng đến xã hội, Hướng đến tự nhiên và Hướng nghiệp",
          "Lý thuyết, Thực hành, Kiểm tra và Đánh giá",
          "Gia đình, Nhà trường, Xã hội và Quốc tế"
        ],
        answer: 1,
        explain: "4 Mạch nội dung chuẩn GDPT 2018 môn HĐTN-HN 7 gồm: Hướng vào bản thân, Hướng đến xã hội, Hướng đến tự nhiên và Hướng nghiệp."
      }
    ],
    checklist: [
      "Nắm vững 4 mạch nội dung và thông điệp chính của 9 chủ đề trong năm học.",
      "Hoàn thành ít nhất 1 phiếu ghi nhận hoạt động trải nghiệm theo mẫu 8 mục.",
      "Giải thích chính xác ý nghĩa của 8 thuật ngữ cốt lõi.",
      "Sẵn sàng tham gia Đấu trường Trạng Nguyên Trải Nghiệm 60:00."
    ]
  }
];
