// Topics Part 2: Chủ đề 3, 4, 5, 6
const topicsDataP2 = [
  // ==================== CHỦ ĐỀ 3 ====================
  {
    id: "chu-de-3",
    num: "Chủ đề 3",
    title: "Chủ đề 3. Trách nhiệm với bản thân",
    pages: "SGK tr. 19–24",
    circuit: "Hướng vào bản thân",
    circuitTag: "BẢN THÂN",
    circuitColor: "bg-purple-600",
    objective: "Biết lập và thực hiện kế hoạch vượt qua khó khăn trong tình huống cụ thể; nhận diện các tình huống nguy hiểm và biết tìm kiếm sự trợ giúp, tự bảo vệ bản thân phù hợp.",
    mindmap: {
      nodes: [
        { title: "VƯỢT QUA KHÓ KHĂN", desc: "Xác định nguyên nhân &bull; Chia nhỏ mục tiêu &bull; Học hỏi tấm gương vượt khó", color: "#9333ea" },
        { title: "TỰ BẢO VỆ NGUY HIỂM", desc: "Tránh đối đầu, đến nơi đông người; Cảnh giác người lạ & an toàn trên mạng", color: "#ef4444" },
        { title: "TỔNG ĐÀI QUỐC GIA 111", desc: "Tổng đài quốc gia bảo vệ trẻ em 111 (miễn phí, 24/7); Báo người lớn tin cậy", color: "#2563eb" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA CHỦ ĐỀ 3: SƠ ĐỒ VƯỢT KHÓ & NGUYÊN TẮC TỰ BẢO VỆ 111 -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-purple-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-purple-500/20">
          <span class="text-xs font-bold text-purple-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-shield-halved"></i> Hình 3: Sơ Đồ Kế Hoạch Vượt Khó &amp; Nguyên Tắc Tự Bảo Vệ Trước Nguy Hiểm
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 19–24</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 190" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="160" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#7f1d1d"/>
            <text x="410" y="41" text-anchor="middle" fill="#fecaca" font-size="11" font-weight="900">KẾ HOẠCH VƯỢT KHÓ &amp; NGUYÊN TẮC BẢO VỆ TÍNH MẠNG HÀNG ĐẦU</text>

            <g transform="translate(35, 60)">
              <!-- Sơ đồ vượt khó -->
              <rect x="0" y="0" width="350" height="100" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.2"/>
              <text x="175" y="20" text-anchor="middle" fill="#d8b4fe" font-size="10" font-weight="900">4 BƯỚC VƯỢT QUA KHÓ KHĂN HỌC TẬP / ĐỜI SỐNG</text>
              <text x="15" y="42" fill="#cbd5e1" font-size="8">&bull; Bước 1: Xác định rõ khó khăn &amp; điều mình có thể kiểm soát</text>
              <text x="15" y="58" fill="#cbd5e1" font-size="8">&bull; Bước 2: Chia nhỏ mục tiêu ôn tập/hành động theo ngày</text>
              <text x="15" y="74" fill="#cbd5e1" font-size="8">&bull; Bước 3: Tìm người hỗ trợ (thầy cô, bạn học, gia đình)</text>
              <text x="15" y="90" fill="#6ee7b7" font-size="7.8" font-weight="700">&bull; Bước 4: Kiên trì theo đuổi, tự tin vào khả năng tiến bộ</text>

              <!-- Nguyên tắc tự bảo vệ -->
              <rect x="380" y="0" width="370" height="100" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2"/>
              <text x="565" y="20" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="900">NGUYÊN TẮC TỰ BẢO VỆ TRƯỚC NGUY HIỂM</text>
              <text x="395" y="42" fill="#fecaca" font-size="8">1. Ưu tiên tính mạng: Không cố giữ tài sản khi bị cướp/đe dọa</text>
              <text x="395" y="58" fill="#cbd5e1" font-size="8">2. Di chuyển nhanh đến nơi đông người, cửa hàng sáng đèn</text>
              <text x="395" y="74" fill="#cbd5e1" font-size="8">3. Gặp động vật hung dữ: Bình tĩnh lùi xa, cấm ném đá trêu chọc</text>
              <rect x="395" y="82" width="340" height="15" rx="3" fill="#991b1b"/>
              <text x="565" y="93" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="900">📞 GỌI NGAY TỔNG ĐÀI QUỐC GIA BẢO VỆ TRẺ EM: 111 (MIỄN PHÍ 24/7)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Kĩ năng vượt qua khó khăn trong học tập và đời sống",
        content: `
          <p class="text-xs">Khó khăn là một phần tất yếu của quá trình trưởng thành (khó khăn về học lực, hoàn cảnh gia đình, mâu thuẫn quan hệ bạn bè). Thay vì chán nản buông xuôi, học sinh cần rèn luyện tinh thần trách nhiệm với chính mình.</p>
          <div class="p-3 rounded-lg bg-slate-800 border border-slate-700 text-xs space-y-1.5 mt-1 text-slate-200">
            <span class="font-bold text-amber-400 block">Mẫu kế hoạch vượt khó khoa học:</span>
            <p>&bull; <strong>Xác định vấn đề:</strong> Cụ thể hóa môn học hay việc đang gặp khó (ví dụ: yếu môn Tiếng Anh phần ngữ pháp).</p>
            <p>&bull; <strong>Tìm nguyên nhân:</strong> Do hổng kiến thức căn bản, chưa tập trung nghe giảng hay phương pháp học chưa phù hợp.</p>
            <p>&bull; <strong>Lên kế hoạch hành động:</strong> Chia nhỏ nhiệm vụ: Học 5 từ mới mỗi ngày, làm 2 bài tập ngữ pháp, nhờ bạn học giỏi cùng bàn kèm cặp 15 phút giờ ra chơi.</p>
            <p>&bull; <strong>Học tập tấm gương:</strong> Tìm hiểu tấm gương các danh nhân, bạn bè khuyết tật vượt khó để tiếp thêm nghị lực.</p>
          </div>
        `
      },
      {
        heading: "2. Kĩ năng tự bảo vệ bản thân trước các tình huống nguy hiểm",
        content: `
          <p class="text-xs">Các tình huống nguy hiểm thường gặp: Bị đe dọa trấn lột ở ngõ vắng, bị người lạ bám theo theo dõi, gặp động vật nguy hiểm (chó dại, rắn độc), hoặc bị đe dọa bạo lực trên mạng xã hội.</p>
          <ul class="list-disc pl-5 space-y-1 text-xs mt-1">
            <li><strong>Nguyên tắc số 1 &ndash; An toàn tính mạng là trên hết:</strong> Không được khiêu khích, cãi cọ hay cố giữ tài sản (điện thoại, xe đạp, tiền bạc) khi đối tượng có vũ khí; bình tĩnh nhượng bộ tài sản để bảo toàn tính mạng.</li>
            <li><strong>Thoát hiểm thông minh:</strong> Tìm cách chạy nhanh vào nơi đông người, trụ sở công an, trường học hoặc cửa hàng tiện lợi có người lớn; hô to kêu cứu khi an toàn.</li>
            <li><strong>Gặp động vật nguy hiểm:</strong> Tuyệt đối không trêu chọc, ném đá; đứng yên hoặc lùi lại từ từ không quay lưng bỏ chạy kích động con vật đuổi theo; báo ngay người lớn.</li>
            <li><strong>An toàn trên không gian mạng:</strong> Không đáp trả bằng lời lẽ xúc phạm hay thách thức; chụp màn hình lưu chứng cứ và báo cáo ngay với cha mẹ, thầy cô.</li>
            <li><strong>Kênh cứu trợ khẩn cấp:</strong> Ghi nhớ số điện thoại <strong>Tổng đài Quốc gia Bảo vệ Trẻ em 111</strong> (miễn cước cuộc gọi, trực 24/7) để được tư vấn và can thiệp pháp lí kịp thời.</li>
          </ul>
        `
      }
    ],
    selfEval: {
      checklist: [
        "Lập và thực hiện được ít nhất một kế hoạch vượt khó cụ thể cho bản thân.",
        "Nhận diện được 5 tình huống nguy hiểm có thể gặp phải trong cuộc sống hằng ngày.",
        "Nắm vững nguyên tắc ưu tiên bảo vệ tính mạng và các cách thoát hiểm an toàn.",
        "Ghi nhớ số điện thoại Tổng đài 111 và biết cách tìm sự trợ giúp từ người lớn tin cậy.",
        "Không tham gia vào các hành vi khiêu khích, bạo lực hay thách thức trên mạng xã hội."
      ]
    },
    quizzes: [
      {
        q: "Số điện thoại của Tổng đài Quốc gia Bảo vệ Trẻ em hoạt động 24/7 miễn cước là số nào?",
        opts: ["111", "113", "114", "115"],
        ans: 0,
        explain: "111 là số điện thoại đường dây nóng quốc gia tiếp nhận tin báo và can thiệp bảo vệ quyền lợi trẻ em tại Việt Nam."
      },
      {
        q: "Khi bị kẻ xấu chặn đường đe dọa cướp tài sản ở đoạn đường vắng vẻ, cách xử lí đúng đắn nhất là gì?",
        opts: ["Bình tĩnh bảo vệ tính mạng, không đối đầu hay cố giữ tài sản, chạy vào nơi đông người", "Liều mình lao vào đánh nhau với kẻ cướp", "Khóc lóc van xin và đứng im tại chỗ", "Thách thức kẻ cướp"],
        ans: 0,
        explain: "Tính mạng và sức khỏe là quan trọng nhất; cần nhượng bộ tài sản tạm thời và chạy vào nơi có người để tìm sự giúp đỡ."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 4 ====================
  {
    id: "chu-de-4",
    num: "Chủ đề 4",
    title: "Chủ đề 4. Rèn luyện bản thân",
    pages: "SGK tr. 25–31",
    circuit: "Hướng vào bản thân",
    circuitTag: "BẢN THÂN",
    circuitColor: "bg-purple-600",
    objective: "Rèn nếp sống ngăn nắp, gọn gàng, sạch sẽ; hình thành tính kiên trì, chăm chỉ; kiểm soát chi tiêu, thực hành tiết kiệm; lập kế hoạch chi tiêu cho sự kiện gia đình phù hợp.",
    mindmap: {
      nodes: [
        { title: "NGĂN NẮP & SẠCH SẼ", desc: "Quy trình nhóm 6 bước; rèn luyện thói quen dọn dẹp hằng ngày ở nhà và trường", color: "#9333ea" },
        { title: "KIÊN TRÌ & CHĂM CHỈ", desc: "Theo đuổi công việc đến cùng; chia nhỏ mục tiêu, không nản lòng khi gặp trở ngại", color: "#2563eb" },
        { title: "QUẢN LÍ CHI TIÊU", desc: "Phân biệt 'cần' vs 'muốn'; lập kế hoạch chi tiêu cho sự kiện gia đình", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA CHỦ ĐỀ 4: QUY TRÌNH RÈN NẾP NGĂN NẮP & KẾ HOẠCH TÀI CHÍNH -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-purple-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-purple-500/20">
          <span class="text-xs font-bold text-purple-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-broom"></i> Hình 4: Quy Trình Rèn Nếp Ngăn Nắp &amp; Bảng Kế Hoạch Chi Tiêu Sự Kiện Gia Đình
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 25–31</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#581c87"/>
            <text x="410" y="41" text-anchor="middle" fill="#f3e8ff" font-size="11" font-weight="900">RÈN NẾP GỌN GÀNG &amp; NGUYÊN TẮC QUẢN LÍ TÀI CHÍNH CÁ NHÂN</text>

            <g transform="translate(35, 60)">
              <!-- Nếp sống ngăn nắp -->
              <rect x="0" y="0" width="350" height="90" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.2"/>
              <text x="175" y="20" text-anchor="middle" fill="#d8b4fe" font-size="10" font-weight="900">QUY TRÌNH NHÓM RÈN NẾP NGĂN NẮP (6 BƯỚC)</text>
              <text x="15" y="40" fill="#cbd5e1" font-size="8">1. Đề xuất việc &rarr; 2. Phân công &rarr; 3. Chuẩn bị dụng cụ</text>
              <text x="15" y="55" fill="#cbd5e1" font-size="8">4. Thực hiện theo kế hoạch &rarr; 5. Kiểm tra nhận xét</text>
              <text x="15" y="70" fill="#6ee7b7" font-size="8" font-weight="700">6. Duy trì hằng ngày: Đồ nào chỗ nấy, không đợi bừa mới dọn</text>

              <!-- Quản lí chi tiêu -->
              <rect x="380" y="0" width="370" height="90" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="565" y="20" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="900">NGUYÊN TẮC QUẢN LÍ CHI TIÊU &amp; TIẾT KIỆM</text>
              <text x="395" y="40" fill="#fde68a" font-size="8">&bull; Phân biệt RÕ RÀNG: NHU CẦU THIẾT YẾU vs KHOẢN MONG MUỐN</text>
              <text x="395" y="55" fill="#cbd5e1" font-size="8">&bull; Được giao tiền đi chợ: Mua đúng và đủ món người nhà dặn</text>
              <text x="395" y="70" fill="#cbd5e1" font-size="8">&bull; Kế hoạch sự kiện: Liệt kê &rarr; Dự toán &rarr; So sánh ngân sách</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Rèn luyện nếp sống ngăn nắp, gọn gàng, sạch sẽ",
        content: `
          <p class="text-xs">Sự ngăn nắp, sạch sẽ không chỉ giúp không gian sống thoáng đãng, bảo vệ sức khỏe mà còn rèn luyện tính kỉ luật và tư duy mạch lạc. <em>Quy trình thực hiện:</em> Xác định khu vực cần dọn &rarr; Lập kế hoạch phân công &rarr; Chuẩn bị chổi, khăn lau &rarr; Dọn dẹp phân loại đồ dùng &rarr; Kiểm tra đánh giá &rarr; <strong>Duy trì thói quen: Dùng xong cất ngay về vị trí cũ</strong>.</p>
        `
      },
      {
        heading: "2. Rèn luyện đức tính kiên trì, chăm chỉ",
        content: `
          <p class="text-xs"><em>Kiên trì</em> là khả năng theo đuổi công việc đến cùng dù gặp trở ngại. <em>Chăm chỉ</em> là sự siêng năng, tự giác thực hiện công việc đều đặn hằng ngày. Phương pháp rèn luyện: Chia nhỏ mục tiêu lớn thành các việc nhỏ vừa sức; đánh dấu vào bảng theo dõi tiến độ; không bỏ cuộc giữa chừng khi gặp bài tập khó hay việc nhà vất vả.</p>
        `
      },
      {
        heading: "3. Kĩ năng quản lí chi tiêu và lập kế hoạch sự kiện gia đình",
        content: `
          <p class="text-xs"><strong>Quy tắc chi tiêu thông minh:</strong> Luôn ưu tiên cho những <em>nhu cầu thiết yếu</em> (sách vở, đồ dùng học tập, thực phẩm dinh dưỡng) trước các <em>khoản mong muốn nhất thời</em> (đồ chơi, đồ ăn vặt đắt tiền, trò chơi điện tử). Khi được giao tiền đi chợ, phải mua đúng và đủ danh mục người lớn dặn, không tự ý dùng tiền mua đồ riêng.</p>
          <div class="overflow-x-auto mt-1">
            <table class="w-full text-left text-xs border border-gray-200 dark:border-gray-700">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold">
                <tr><th class="p-2 border">Khoản chi</th><th class="p-2 border">Số lượng</th><th class="p-2 border">Đơn giá</th><th class="p-2 border">Thành tiền</th><th class="p-2 border">Mức ưu tiên</th></tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr><td class="p-2 border">Bánh sinh nhật nhỏ</td><td class="p-2 border">1 cái</td><td class="p-2 border">180.000</td><td class="p-2 border">180.000</td><td class="p-2 border text-emerald-600 font-bold">Thiết yếu</td></tr>
                <tr><td class="p-2 border">Trái cây (dưa hấu, xoài)</td><td class="p-2 border">2 kg</td><td class="p-2 border">35.000</td><td class="p-2 border">70.000</td><td class="p-2 border text-emerald-600 font-bold">Thiết yếu</td></tr>
                <tr><td class="p-2 border">Bóng bay trang trí</td><td class="p-2 border">1 túi</td><td class="p-2 border">25.000</td><td class="p-2 border">25.000</td><td class="p-2 border text-amber-600">Có thể giảm</td></tr>
                <tr class="font-bold bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-300"><td class="p-2 border" colspan="3">TỔNG NGÂN SÁCH DỰ TOÁN</td><td class="p-2 border" colspan="2">275.000 VNĐ</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    selfEval: {
      checklist: [
        "Duy trì thói quen giữ gìn góc học tập và phòng ngủ luôn ngăn nắp, sạch sẽ.",
        "Thể hiện tính kiên trì và chăm chỉ khi hoàn thành bài tập khó hoặc việc nhà.",
        "Biết phân biệt giữa nhu cầu thiết yếu và các khoản mua sắm theo sở thích nhất thời.",
        "Lập được bảng kế hoạch chi tiêu dự toán hợp lí cho một sự kiện nhỏ của gia đình.",
        "Biết tiết kiệm tiền và sử dụng tiền được giao đúng mục đích."
      ]
    },
    quizzes: [
      {
        q: "Khi phân bổ chi tiêu cá nhân, nguyên tắc tài chính thông minh nào cần được ưu tiên hàng đầu?",
        opts: ["Ưu tiên các nhu cầu thiết yếu trước các khoản mong muốn nhất thời", "Mua hết tất cả những món đồ mình thích ngay khi có tiền", "Dành toàn bộ tiền để chơi game", "Không bao giờ lên kế hoạch chi tiêu"],
        ans: 0,
        explain: "Phân biệt rõ giữa 'cần' (thiết yếu cho cuộc sống) và 'muốn' (sở thích) giúp tránh lãng phí và kiểm soát ngân sách hiệu quả."
      },
      {
        q: "Thói quen nào sau đây thể hiện nếp sống ngăn nắp, gọn gàng đúng chuẩn?",
        opts: ["Đồ dùng sau khi sử dụng cất ngay về vị trí quy định", "Đợi đến khi phòng quá bừa bộn mới dọn dẹp một lần", "Bày bừa sách vở khắp sàn nhà", "Nhờ bố mẹ dọn dẹp hộ"],
        ans: 0,
        explain: "Nếp sống ngăn nắp là thói quen duy trì thường xuyên: dùng xong cất ngay vào vị trí cũ."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 5 ====================
  {
    id: "chu-de-5",
    num: "Chủ đề 5",
    title: "Chủ đề 5. Em với gia đình",
    pages: "SGK tr. 32–38",
    circuit: "Hướng đến xã hội",
    circuitTag: "XÃ HỘI",
    circuitColor: "bg-blue-600",
    objective: "Bước đầu biết chăm sóc người thân khi mệt, ốm; lập và thực hiện kế hoạch lao động tại gia đình; thực hành kĩ năng lắng nghe tích cực ý kiến, góp ý của người thân.",
    mindmap: {
      nodes: [
        { title: "CHĂM SÓC NGƯỜI THÂN", desc: "Hỏi thăm ân cần, giúp việc nhẹ; CẢNH BÁO: Không tự ý cho uống kháng sinh", color: "#2563eb" },
        { title: "KẾ HOẠCH LAO ĐỘNG", desc: "Liệt kê việc nhà vừa sức, phân bổ thời gian hợp lí, không ảnh hưởng học tập", color: "#059669" },
        { title: "LẮNG NGHE TÍCH CỰC", desc: "5 Kĩ thuật: Dừng xao nhãng &bull; Không ngắt lời &bull; Nhắc lại ý chính &bull; Bình tĩnh trao đổi", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA CHỦ ĐỀ 5: CHĂM SÓC AN TOÀN & 5 KĨ THUẬT LẮNG NGHE TÍCH CỰC -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-house-chimney-window"></i> Hình 5: Quy Tắc Chăm Sóc Người Thân An Toàn &amp; 5 Kĩ Thuật Lắng Nghe Tích Cực
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 32–38</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#0369a1"/>
            <text x="410" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">CHĂM SÓC NGƯỜI THÂN AN TOÀN &amp; 5 KĨ THUẬT LẮNG NGHE TÍCH CỰC</text>

            <g transform="translate(35, 60)">
              <!-- Chăm sóc an toàn -->
              <rect x="0" y="0" width="350" height="90" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.2"/>
              <text x="175" y="20" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="900">CHĂM SÓC NGƯỜI THÂN KHI MỆT / ỐM</text>
              <text x="15" y="40" fill="#cbd5e1" font-size="8">&bull; Việc nên làm: Đắp khăn ấm, rót nước ấm, nấu cháo, hỏi thăm</text>
              <text x="15" y="55" fill="#fecaca" font-size="8" font-weight="800">🚫 CẢNH BÁO Y TẾ:</text>
              <text x="15" y="70" fill="#fca5a5" font-size="7.5">&bull; Tuyệt đối không tự ý cho uống thuốc kháng sinh hoặc áp dụng mẹo dân gian</text>
              <text x="15" y="82" fill="#cbd5e1" font-size="7.5">&bull; Báo người lớn hoặc đưa đi khám bác sĩ khi sốt cao, đau bụng dữ dội</text>

              <!-- 5 Kĩ thuật lắng nghe -->
              <rect x="380" y="0" width="370" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
              <text x="565" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">5 BƯỚC LẮNG NGHE TÍCH CỰC KHI ĐƯỢC GÓP Ý</text>
              <text x="395" y="38" fill="#f8fafc" font-size="8">1. Dừng xao nhãng: Tắt điện thoại, nhìn vào người nói</text>
              <text x="395" y="52" fill="#f8fafc" font-size="8">2. Không ngắt lời: Để người thân nói hết ý, không vội cãi</text>
              <text x="395" y="66" fill="#f8fafc" font-size="8">3. Nhắc lại để làm rõ: "Ý của mẹ là con cần..."</text>
              <text x="395" y="80" fill="#a7f3d0" font-size="8" font-weight="700">4. Bình tĩnh giải thích &rarr; 5. Tiếp thu và sửa đổi hành vi</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Kĩ năng chăm sóc người thân khi mệt, ốm",
        content: `
          <p class="text-xs">Khi người thân (ông bà, cha mẹ, anh chị em) bị mệt mỏi hoặc ốm đau, sự quan tâm chăm sóc kịp thời của học sinh mang lại niềm an ủi rất lớn. Những việc làm vừa sức: Đỡ người thân nằm nghỉ ngơi nơi thoáng khí; rót cốc nước ấm; giặt khăn ấm chườm trán; nấu cháo loãng hoặc mua đồ ăn nhẹ.</p>
          <div class="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs font-bold mt-1.5 space-y-0.5">
            <p>⚠️ Cảnh báo an toàn y tế từ SGK:</p>
            <p>&bull; Tuyệt đối không tự ý lấy thuốc kháng sinh cho người thân uống khi đau bụng hoặc sốt (dễ gây sốc thuốc, kháng kháng sinh).</p>
            <p>&bull; Không tùy tiện áp dụng các mẹo dân gian chưa được kiểm chứng (như vắt chanh vào miệng người đang ngất/đói lả).</p>
            <p>&bull; Khi tình trạng diễn biến nặng, phải lập tức báo cho người lớn hoặc gọi nhân viên y tế.</p>
          </div>
        `
      },
      {
        heading: "2. Lập kế hoạch lao động tại gia đình",
        content: `
          <p class="text-xs">Lao động giúp đỡ gia đình là bổn phận và niềm vui của con cái. Lập kế hoạch phân bổ thời gian hợp lí: Quét dọn nhà cửa, rửa bát sau bữa ăn, phơi gấp quần áo, tưới cây cảnh. Sắp xếp khoa học để việc nhà không làm ảnh hưởng đến thời gian tự học và nghỉ ngơi.</p>
        `
      },
      {
        heading: "3. Kĩ năng lắng nghe tích cực khi nhận góp ý",
        content: `
          <p class="text-xs">Khi cha mẹ hoặc người thân góp ý về việc học tập, giờ giấc chơi điện tử hay thói quen sinh hoạt, hãy áp dụng <strong>5 kĩ thuật lắng nghe tích cực</strong>:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs mt-1">
            <li>Tạm dừng các việc gây xao nhãng (tắt màn hình điện thoại, ngừng chơi game), ngồi hướng về phía người nói.</li>
            <li>Để người thân trình bày hết ý kiến; không ngắt lời, không vùng vằng cãi lại.</li>
            <li>Đặt câu hỏi nhẹ nhàng hoặc nhắc lại ý chính để xác nhận mình đã hiểu đúng mong muốn của cha mẹ.</li>
            <li>Bình tĩnh chia sẻ quan điểm của mình bằng lời nói lễ phép; tiếp thu những điểm đúng đắn.</li>
            <li>Nghiêm túc suy ngẫm và điều chỉnh hành vi của mình cho phù hợp.</li>
          </ul>
        `
      }
    ],
    selfEval: {
      checklist: [
        "Biết quan tâm, hỏi han và thực hiện các việc chăm sóc người thân bị ốm an toàn.",
        "Tuyệt đối không tự ý cho người thân uống thuốc kháng sinh bừa bãi.",
        "Chủ động lập và thực hiện kế hoạch làm việc nhà hằng ngày giúp đỡ cha mẹ.",
        "Áp dụng được 5 bước lắng nghe tích cực khi nhận lời góp ý từ gia đình.",
        "Biết bình tĩnh đối thoại để giải quyết những bất đồng quan điểm với người thân."
      ]
    },
    quizzes: [
      {
        q: "Khi người thân trong gia đình bị đau bụng hoặc sốt nhẹ, hành động nào sau đây là KHÔNG ĐƯỢC PHÉP tự ý thực hiện?",
        opts: ["Tự ý tìm thuốc kháng sinh cho người thân uống", "Rót một cốc nước ấm cho người thân uống", "Hỏi thăm ân cần tình trạng sức khỏe", "Báo ngay cho người lớn hoặc bác sĩ"],
        ans: 0,
        explain: "Thuốc kháng sinh bắt buộc phải có chỉ định của bác sĩ; tự ý uống có thể gây sốc phản vệ, nguy hiểm tính mạng."
      },
      {
        q: "Kĩ thuật then chốt đầu tiên của việc 'Lắng nghe tích cực' khi cha mẹ đang góp ý là gì?",
        opts: ["Tạm dừng việc gây xao nhãng (tắt điện thoại), ngồi hướng về người nói và không ngắt lời", "Vừa bấm điện thoại vừa gật đầu", "Cắt ngang lời cha mẹ để thanh minh", "Bỏ đi vào phòng đóng sầm cửa"],
        ans: 0,
        explain: "Dừng việc xao nhãng và chăm chú lắng nghe thể hiện sự tôn trọng và giúp tiếp nhận trọn vẹn thông điệp của cha mẹ."
      }
    ]
  },

  // ==================== CHỦ ĐỀ 6 ====================
  {
    id: "chu-de-6",
    num: "Chủ đề 6",
    title: "Chủ đề 6. Em với cộng đồng",
    pages: "SGK tr. 39–45",
    circuit: "Hướng đến xã hội",
    circuitTag: "XÃ HỘI",
    circuitColor: "bg-blue-600",
    objective: "Giao tiếp, ứng xử có văn hóa; tôn trọng sự khác biệt, không kì thị; tích cực tham gia và khuyến khích các hoạt động thiện nguyện; tìm hiểu và tự hào giới thiệu truyền thống quê hương.",
    mindmap: {
      nodes: [
        { title: "ỨNG XỬ CÓ VĂN HÓA", desc: "Tôn trọng khác biệt giới tính, dân tộc, hoàn cảnh; từ chối lịch sự khi gặp tập quán lạ", color: "#2563eb" },
        { title: "HOẠT ĐỘNG THIỆN NGUYỆN", desc: "5 bước tổ chức: Tìm hiểu đối tượng &rarr; Thống nhất &rarr; Chuẩn bị &rarr; Thực hiện &rarr; Tổng kết", color: "#059669" },
        { title: "TRUYỀN THỐNG QUÊ HƯƠNG", desc: "Lịch sử, lễ hội, làng nghề thủ công, danh nhân; đa dạng hình thức giới thiệu", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA CHỦ ĐỀ 6: ỨNG XỬ VĂN HÓA & 5 BƯỚC HOẠT ĐỘNG THIỆN NGUYỆN -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-blue-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-blue-500/20">
          <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-people-carry-box"></i> Hình 6: Văn Hóa Tôn Trọng Khác Biệt &amp; 5 Bước Hoạt Động Thiện Nguyện
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 39–45</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 180" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#0369a1"/>
            <text x="410" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">VĂN HÓA CỘNG ĐỒNG &amp; QUY TRÌNH THIỆN NGUYỆN MINH BẠCH - AN TOÀN</text>

            <g transform="translate(35, 60)">
              <!-- Tôn trọng khác biệt -->
              <rect x="0" y="0" width="340" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
              <text x="170" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">VĂN HÓA TÔN TRỌNG KHÁC BIỆT</text>
              <text x="15" y="40" fill="#cbd5e1" font-size="8">&bull; Không chê bai, chế giễu hoàn cảnh, giọng nói, trang phục</text>
              <text x="15" y="55" fill="#cbd5e1" font-size="8">&bull; Khi gặp món ăn/tập quán lạ: Lắng nghe, tìm hiểu lịch sự</text>
              <text x="15" y="70" fill="#a7f3d0" font-size="8" font-weight="700">&bull; Từ chối khéo léo, tế nhị, không xúc phạm người mời</text>

              <!-- 5 Bước thiện nguyện -->
              <rect x="365" y="0" width="385" height="90" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <text x="557" y="20" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="900">5 BƯỚC TỔ CHỨC THIỆN NGUYỆN Ý NGHĨA</text>
              <text x="380" y="38" fill="#f8fafc" font-size="8">1. Khảo sát đúng đối tượng &amp; đúng nhu cầu thực tế</text>
              <text x="380" y="52" fill="#f8fafc" font-size="8">2. Thống nhất hình thức hỗ trợ (sách vở, áo ấm, đồ dùng)</text>
              <text x="380" y="66" fill="#f8fafc" font-size="8">3. Phân công chuẩn bị &rarr; 4. Trao tặng với thái độ tôn trọng</text>
              <text x="380" y="80" fill="#bae6fd" font-size="7.5" font-weight="700">5. Công khai minh bạch &amp; bảo vệ thông tin riêng tư người nhận</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Giao tiếp có văn hóa và tôn trọng sự khác biệt",
        content: `
          <p class="text-xs">Ứng xử văn hóa thể hiện ở lời nói nhã nhặn, hành vi chuẩn mực và thái độ tôn trọng sự đa dạng. Tuyệt đối không chê bai, kì thị hay định kiến về giới tính, dân tộc, địa vị xã hội hay hoàn cảnh khó khăn của người khác.</p>
          <p class="text-xs mt-1">Khi giao lưu và tiếp xúc với các tập quán, trang phục hay món ăn truyền thống khác lạ: Giữ thái độ cởi mở, tôn trọng văn hóa địa phương; nếu bản thân không quen dùng món ăn thì từ chối một cách khéo léo, tế nhị, tuyệt đối không chê bai hay làm người mời cảm thấy bị xúc phạm.</p>
        `
      },
      {
        heading: "2. Hoạt động thiện nguyện, nhân đạo vì cộng đồng",
        content: `
          <p class="text-xs">Thiện nguyện là hành động tự nguyện sẻ chia với những hoàn cảnh khó khăn (người già neo đơn, trẻ em mồ côi, đồng bào vùng lũ lụt). <strong>4 nguyên tắc vàng khi làm thiện nguyện:</strong></p>
          <ul class="list-disc pl-5 space-y-1 text-xs mt-1">
            <li><em>Đúng nhu cầu:</em> Tặng những thứ người nhận thực sự cần (sách vở mới, áo ấm mùa đông, đồ dùng học tập).</li>
            <li><em>Tôn trọng người nhận:</em> "Của cho không bằng cách cho" &ndash; trao gửi bằng sự kính trọng, ấm áp, không ban ơn.</li>
            <li><em>Bảo vệ quyền riêng tư:</em> Không tùy tiện chụp ảnh, quay video cận cảnh đăng lên mạng xã hội để câu like làm tổn thương danh dự người được giúp đỡ.</li>
            <li><em>Minh bạch và an toàn:</em> Tham gia dưới sự hướng dẫn của nhà trường hoặc đoàn thể địa phương; ghi chép sổ sách thu chi rõ ràng.</li>
          </ul>
        `
      },
      {
        heading: "3. Tự hào và giới thiệu truyền thống quê hương",
        content: `
          <p class="text-xs">Tìm hiểu lịch sử đấu tranh giữ nước hào hùng, các lễ hội dân gian mang đậm bản sắc, làng nghề thủ công truyền thống và các tấm gương danh nhân của quê hương mình. Giới thiệu tới bạn bè bằng bài thuyết trình, poster, tập san hoặc video ngắn với thông tin xác thực.</p>
        `
      }
    ],
    selfEval: {
      checklist: [
        "Thể hiện thái độ ứng xử lịch sự, tôn trọng sự khác biệt văn hóa, vùng miền.",
        "Biết cách từ chối khéo léo khi gặp món ăn/tập quán lạ mà không xúc phạm người khác.",
        "Tham gia hoặc vận động người thân tham gia ít nhất một hoạt động thiện nguyện phù hợp.",
        "Tuân thủ nguyên tắc tôn trọng và bảo vệ quyền riêng tư của người được giúp đỡ.",
        "Giới thiệu được một truyền thống lịch sử, lễ hội hoặc làng nghề đáng tự hào của quê hương."
      ]
    },
    quizzes: [
      {
        q: "Khi tham gia các hoạt động từ thiện, giúp đỡ những người có hoàn cảnh khó khăn, nguyên tắc nào cần được ghi nhớ sâu sắc?",
        opts: ["'Của cho không bằng cách cho', tôn trọng và bảo vệ quyền riêng tư người nhận", "Quay video cận mặt người nhận để đăng lên mạng câu like", "Tỏ thái độ ban ơn, kẻ cả", "Tặng những đồ ăn đã hết hạn sử dụng"],
        ans: 0,
        explain: "Thiện nguyện phải xuất phát từ sự tôn trọng, đồng cảm chân thành và bảo vệ danh dự, quyền riêng tư của người nhận."
      },
      {
        q: "Khi đi du lịch hoặc giao lưu văn hóa, nếu được mời một món ăn truyền thống địa phương mà em không ăn được, cách ứng xử văn minh là:",
        opts: ["Cảm ơn người mời và khéo léo từ chối một cách lịch sự, tế nhị", "Chê bai ầm ĩ và bảo món ăn bẩn thỉu", "Bĩu môi bỏ đi nơi khác", "Hét toáng lên"],
        ans: 0,
        explain: "Từ chối lịch sự và cảm ơn tấm lòng hiếu khách thể hiện sự tôn trọng nét đẹp văn hóa của địa phương."
      }
    ]
  }
];

module.exports = { topicsDataP2 };
console.log("Topics part 2 ready. Length:", topicsDataP2.length);
