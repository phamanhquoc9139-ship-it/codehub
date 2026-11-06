// Tiếng Trung Quốc 8 - 12 SVG Vector Concept Mindmaps
module.exports = {
  'map-neng-keyi': `
    <svg viewBox="0 0 680 240" class="w-full h-auto max-h-72 select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-neng" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
        <linearGradient id="grad-keyi" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <!-- Background Card -->
      <rect x="10" y="10" width="660" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <!-- Header -->
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">PHÂN BIỆT ĐỘNG TỪ NĂNG NGUYỆN: 能 (NÉNG) VS 可以 (KĚYǐ)</text>
      
      <!-- Box NENG -->
      <g transform="translate(30, 55)">
        <rect width="300" height="155" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <rect width="300" height="34" rx="12" fill="url(#grad-neng)"/>
        <text x="150" y="23" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">能 (Néng) — Năng lực & Điều kiện</text>
        <text x="15" y="60" font-size="12" font-weight="bold" fill="#065f46">✔ Bản thân có khả năng / điều kiện khách quan:</text>
        <text x="25" y="80" font-size="11.5" fill="#047857">• 我能说两种外语。(Năng lực ngoại ngữ)</text>
        <text x="15" y="105" font-size="12" font-weight="bold" fill="#b91c1c">✘ Phủ định 不能: Không đủ năng lực/sức khỏe</text>
        <text x="25" y="125" font-size="11.5" fill="#991b1b">• 生病了就不能去爬山了。(Sức khỏe không cho phép)</text>
        <text x="150" y="145" text-anchor="middle" font-size="11" font-style="italic" fill="#0f766e">Nghi vấn: 你能不能再说一遍？</text>
      </g>

      <!-- Box KEYI -->
      <g transform="translate(350, 55)">
        <rect width="300" height="155" rx="12" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <rect width="300" height="34" rx="12" fill="url(#grad-keyi)"/>
        <text x="150" y="23" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">可以 (Kěyǐ) — Sự cho phép & Quy định</text>
        <text x="15" y="60" font-size="12" font-weight="bold" fill="#075985">✔ Được phép làm gì / Phù hợp quy định:</text>
        <text x="25" y="80" font-size="11.5" fill="#0284c7">• 我可以参加夏令营吗？(Hỏi xin phép)</text>
        <text x="15" y="105" font-size="12" font-weight="bold" fill="#b91c1c">✘ Phủ định 不可以: Bị cấm đoán / Sai quy tắc</text>
        <text x="25" y="125" font-size="11.5" fill="#991b1b">• 图书馆里不可以吃东西！(Nghiêm cấm theo nội quy)</text>
        <text x="150" y="145" text-anchor="middle" font-size="11" font-style="italic" fill="#0369a1">Nghi vấn: 我们可以进教室吗？</text>
      </g>
    </svg>
  `,

  'map-simple-direction': `
    <svg viewBox="0 0 680 240" class="w-full h-auto max-h-72 select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
        </marker>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
        </marker>
      </defs>
      <rect x="10" y="10" width="660" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">BỔ NGỮ XU HƯỚNG ĐƠN GIẢN: 来 (LÁI) VS 去 (QÙ)</text>

      <!-- Center Speaker Reference -->
      <g transform="translate(340, 130)">
        <circle r="34" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
        <text x="0" y="-8" text-anchor="middle" font-size="16">🗣️</text>
        <text x="0" y="10" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#854d0e">Người nói</text>
        <text x="0" y="24" text-anchor="middle" font-size="9" fill="#a16207">Điểm quy chiếu</text>
      </g>

      <!-- Moving towards: LAI -->
      <g transform="translate(50, 75)">
        <rect width="210" height="110" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="105" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#047857">LẠI GẦN: Động từ + 来</text>
        <text x="105" y="48" text-anchor="middle" font-size="11.5" fill="#065f46">Chuyển động về phía người nói</text>
        <text x="105" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">进来 / 出来 / 回来 / 过来</text>
        <text x="105" y="94" text-anchor="middle" font-size="10.5" fill="#0f766e">VD: 请大家快点儿进来吧！</text>
      </g>
      <!-- Arrow to Center -->
      <line x1="265" y1="130" x2="300" y2="130" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)"/>

      <!-- Moving away: QU -->
      <g transform="translate(420, 75)">
        <rect width="210" height="110" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="105" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">ĐI XA: Động từ + 去</text>
        <text x="105" y="48" text-anchor="middle" font-size="11.5" fill="#1e40af">Chuyển động rời xa người nói</text>
        <text x="105" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">进去 / 出去 / 回去 / 过去</text>
        <text x="105" y="94" text-anchor="middle" font-size="10.5" fill="#2563eb">VD: 他回中国去了。(Nơi chốn + 去)</text>
      </g>
      <!-- Arrow from Center -->
      <line x1="380" y1="130" x2="415" y2="130" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-blue)"/>
      
      <!-- Footer Note -->
      <text x="340" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">★ QUY TẮC BẮT BUỘC: Tân ngữ chỉ nơi chốn phải kẹp ở giữa: [Động từ + Nơi chốn + 来/去]</text>
    </svg>
  `,

  'map-complex-direction': `
    <svg viewBox="0 0 680 240" class="w-full h-auto max-h-72 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="36" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">BỔ NGỮ XU HƯỚNG PHỨC HỢP (复合趋向补语)</text>
      <text x="340" y="56" text-anchor="middle" font-size="12" fill="#475569">Công thức: Động từ + [Thành tố phương hướng] + [来 / 去]</text>

      <g transform="translate(30, 70)">
        <rect width="190" height="140" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="95" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">1. Lên / Xuống (Trục đứng)</text>
        <text x="95" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">上来 / 上去</text>
        <text x="95" y="70" text-anchor="middle" font-size="11" fill="#78350f">Lên đây / Lên đó</text>
        <text x="95" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">下来 / 下去</text>
        <text x="95" y="116" text-anchor="middle" font-size="11" fill="#78350f">Xuống đây / Xuống đó</text>
      </g>

      <g transform="translate(245, 70)">
        <rect width="190" height="140" rx="10" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
        <text x="95" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#4338ca">2. Trong / Ngoài (Không gian)</text>
        <text x="95" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">进来 / 进去</text>
        <text x="95" y="70" text-anchor="middle" font-size="11" fill="#312e81">Vào đây / Vào đó</text>
        <text x="95" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">出来 / 出去</text>
        <text x="95" y="116" text-anchor="middle" font-size="11" fill="#312e81">Ra đây / Ra đó</text>
      </g>

      <g transform="translate(460, 70)">
        <rect width="190" height="140" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
        <text x="95" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#be185d">3. Về / Qua / Khởi phát</text>
        <text x="95" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">回来 / 回去</text>
        <text x="95" y="70" text-anchor="middle" font-size="11" fill="#831843">Về lại đây / Về lại đó</text>
        <text x="95" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#9d174d">过来 / 过去 / 起来</text>
        <text x="95" y="116" text-anchor="middle" font-size="11" fill="#831843">Qua đây / Qua đó / Dậy</text>
      </g>
    </svg>
  `,

  'map-huozhe-haishi': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-70 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">PHÂN BIỆT LIÊN TỪ LỰA CHỌN: 或者 (HUÒZHĚ) VS 还是 (HÁISHÌ)</text>

      <g transform="translate(30, 55)">
        <rect width="300" height="145" rx="12" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
        <rect width="300" height="34" rx="12" fill="#e11d48"/>
        <text x="150" y="23" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">或者 (Huòzhě) — Câu Trần Thuật ( . )</text>
        <text x="15" y="60" font-size="12" font-weight="bold" fill="#9f1239">Dùng trong câu khẳng định / trần thuật:</text>
        <text x="20" y="80" font-size="11.5" fill="#881337">• Tôi uống trà hoặc cà phê đều được.</text>
        <text x="20" y="100" font-size="11.5" font-family="monospace" fill="#be123c">我喝茶或者咖啡都可以。</text>
        <text x="15" y="125" font-size="11" fill="#4c0519">Nêu các phương án khả dĩ người nói chấp nhận.</text>
      </g>

      <g transform="translate(350, 55)">
        <rect width="300" height="145" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
        <rect width="300" height="34" rx="12" fill="#2563eb"/>
        <text x="150" y="23" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">还是 (Háishì) — Câu Hỏi Lựa Chọn ( ? )</text>
        <text x="15" y="60" font-size="12" font-weight="bold" fill="#1e40af">Dùng trong câu nghi vấn lựa chọn giữa A và B:</text>
        <text x="20" y="80" font-size="11.5" fill="#1e3a8a">• Bạn muốn ăn món Trung hay món Việt?</text>
        <text x="20" y="100" font-size="11.5" font-family="monospace" fill="#1d4ed8">你想吃中国菜还是越南菜？</text>
        <text x="15" y="125" font-size="11" fill="#172554">Câu trả lời chọn 1 vế hoặc dùng: "都可以" (Cả hai đều được).</text>
      </g>
    </svg>
  `,

  'map-attributive-v': `
    <svg viewBox="0 0 680 220" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="200" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">CỤM ĐỘNG TỪ LÀM ĐỊNH NGỮ VỚI TRỢ TỪ “的” (DE)</text>

      <g transform="translate(40, 60)">
        <rect width="210" height="75" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">Cụm Động Từ / Hành động</text>
        <text x="105" y="55" text-anchor="middle" font-size="12" font-family="monospace" fill="#92400e">今天吃的 / 会做饭的</text>
      </g>

      <g transform="translate(265, 75)">
        <circle cx="20" cy="20" r="22" fill="#ec4899"/>
        <text x="20" y="27" text-anchor="middle" font-size="18" font-weight="bold" fill="#ffffff">的</text>
      </g>

      <g transform="translate(320, 60)">
        <rect width="210" height="75" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="105" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">Trung Tâm Ngữ (Danh từ)</text>
        <text x="105" y="55" text-anchor="middle" font-size="12" font-family="monospace" fill="#1e40af">菜 (Món ăn) / 人 (Người)</text>
      </g>

      <text x="340" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="#047857">⇒ Dịch nghĩa: Danh từ + (mà / do / được...) + Hành động</text>
      <text x="340" y="188" text-anchor="middle" font-size="11.5" fill="#475569">VD: 今天吃的菜 = Món ăn mà chúng ta ăn hôm nay; 会做饭的人 = Người biết nấu ăn</text>
    </svg>
  `,

  'map-haoxiang-duan': `
    <svg viewBox="0 0 680 220" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="200" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">PHÓ TỪ 好像 (HǍOXIÀNG) & LƯỢNG TỪ 段 (DUÀN)</text>

      <g transform="translate(40, 60)">
        <rect width="280" height="125" rx="10" fill="#fdf4ff" stroke="#c084fc" stroke-width="2"/>
        <text x="140" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#7e22ce">好像 (Hǎoxiàng) — Dường như, hình như</text>
        <text x="15" y="55" font-size="11.5" fill="#6b21a8">• Biểu thị phỏng đoán nhẹ nhàng, cảm nhận cá nhân:</text>
        <text x="15" y="78" font-size="11" font-family="monospace" fill="#581c87">这部电影好像很有意思。</text>
        <text x="15" y="102" font-size="11" fill="#4c1d95">Bộ phim này có vẻ như rất thú vị.</text>
      </g>

      <g transform="translate(360, 60)">
        <rect width="280" height="125" rx="10" fill="#f0fdf4" stroke="#4ade80" stroke-width="2"/>
        <text x="140" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Lượng từ 段 (Duàn) — Đoạn, khoảng</text>
        <text x="15" y="55" font-size="11.5" fill="#166534">• Đoạn thời gian: 一段时间 (một khoảng thời gian)</text>
        <text x="15" y="78" font-size="11.5" fill="#166534">• Đoạn đường: 一段路 (một đoạn đường đi)</text>
        <text x="15" y="102" font-size="11.5" fill="#166534">• Tác phẩm / lời nói: 一段音乐 / 视频 / 话</text>
      </g>
    </svg>
  `,

  'map-aspect-zhe': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-70 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">TRỢ TỪ ĐỘNG THÁI 着 (ZHE) — DUY TRÌ TRẠNG THÁI TỒN TẠI</text>

      <g transform="translate(30, 55)">
        <rect width="300" height="140" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#c2410c">1. Trạng Thái Đồ Vật Tồn Tại Trong Không Gian</text>
        <text x="15" y="52" font-size="12" font-weight="bold" fill="#9a3412">[Nơi chốn] + Động từ + 着 + [Danh từ tồn tại]</text>
        <text x="15" y="76" font-size="11.5" fill="#7c2d12">• 墙上挂着一幅中国画。(Trên tường đang treo bức tranh)</text>
        <text x="15" y="98" font-size="11.5" fill="#7c2d12">• 门开着呢。(Cửa đang mở)</text>
        <text x="15" y="120" font-size="11" fill="#ea580c">★ Nhấn mạnh trạng thái TĨNH đang được duy trì.</text>
      </g>

      <g transform="translate(350, 55)">
        <rect width="300" height="140" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#a16207">2. Phương Thức / Tư Thế Đi Kèm Hành Động</text>
        <text x="15" y="52" font-size="12" font-weight="bold" fill="#854d0e">[Động từ 1 + 着] + [Động từ 2 (Hành động chính)]</text>
        <text x="15" y="76" font-size="11.5" fill="#713f12">• 他笑着跟朋友聊天。(Anh ấy vừa cười vừa trò chuyện)</text>
        <text x="15" y="98" font-size="11.5" fill="#713f12">• 老师站着讲课。(Thầy giáo đứng giảng bài)</text>
        <text x="15" y="120" font-size="11" fill="#ca8a04">★ Kết hợp 一边……一边…… diễn đạt 2 việc song song.</text>
      </g>
    </svg>
  `,

  'map-passive-bei': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-70 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">CÂU BỊ ĐỘNG VỚI “被” (BÈI) — KHẲNG ĐỊNH & PHỦ ĐỊNH</text>

      <g transform="translate(30, 55)">
        <rect width="620" height="70" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <text x="310" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">CÔNG THỨC KHẲNG ĐỊNH: ĐỐI TƯỢNG + 被 (+ TÁC NHÂN) + ĐỘNG TỪ + KẾT QUẢ</text>
        <text x="310" y="48" text-anchor="middle" font-size="12" font-family="monospace" fill="#075985">我的自行车被他骑走了。(Xe đạp của tôi bị anh ấy đi mất rồi)</text>
      </g>

      <g transform="translate(30, 135)">
        <rect width="620" height="70" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
        <text x="310" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">CÔNG THỨC PHỦ ĐỊNH: ĐỐI TƯỢNG + 没(有) + 被 (+ TÁC NHÂN) + ĐỘNG TỪ</text>
        <text x="310" y="48" text-anchor="middle" font-size="12" font-family="monospace" fill="#991b1b">我的自行车没有被他骑走。(Xe đạp của tôi không bị anh ấy đi mất)</text>
      </g>
    </svg>
  `,

  'map-passive-jiao-rang': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-70 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">CÂU BỊ ĐỘNG KHẨU NGỮ VỚI 叫 (JIÀO) VÀ 让 (RÀNG)</text>

      <g transform="translate(30, 55)">
        <rect width="300" height="140" rx="10" fill="#fdf2f8" stroke="#db2777" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#be185d">Cấu Trúc & Ví Dụ</text>
        <text x="15" y="52" font-size="12" font-weight="bold" fill="#9d174d">Đối tượng + 叫 / 让 + Tác nhân + ĐT + KQ</text>
        <text x="15" y="78" font-size="11.5" fill="#831843">• 苹果让猴子抢走了！(Táo bị khỉ cướp mất)</text>
        <text x="15" y="100" font-size="11.5" fill="#831843">• 竹子叫大熊猫吃光了！(Tre bị gấu ăn sạch)</text>
        <text x="15" y="122" font-size="11" fill="#be185d">Phủ định: 没(有)让猴子抢走</text>
      </g>

      <g transform="translate(350, 55)">
        <rect width="300" height="140" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">⚠️ QUY TẮC CỐT LÕI CẦN NHỚ</text>
        <text x="15" y="55" font-size="11.5" font-weight="bold" fill="#991b1b">1. BẮT BUỘC PHẢI CÓ TÁC NHÂN SAU 叫/让:</text>
        <text x="25" y="75" font-size="11" fill="#7f1d1d">Tuyệt đối không được để trống tác nhân.</text>
        <text x="15" y="100" font-size="11.5" font-weight="bold" fill="#991b1b">2. SO VỚI 被:</text>
        <text x="25" y="120" font-size="11" fill="#7f1d1d">被 có thể khuyết tác nhân; 叫/让 mang đậm màu sắc khẩu ngữ giao tiếp đời sống.</text>
      </g>
    </svg>
  `,

  'map-zhe-vs-zhengzai': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-70 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">ĐỐI CHIẾU TRỌNG ĐIỂM: 着 (ZHE) VS 正 / 正在 / 在 (ZHÈNGZÀI)</text>

      <g transform="translate(30, 55)">
        <rect width="300" height="140" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">Động từ + 着 — TRẠNG THÁI TĨNH</text>
        <text x="15" y="52" font-size="11.5" fill="#115e59">• Nhấn mạnh tư thế hoặc sự tồn tại duy trì kéo dài:</text>
        <text x="15" y="76" font-size="11.5" font-family="monospace" fill="#134e4a">墙上贴着一张照片。(Trên tường dán 1 bức ảnh)</text>
        <text x="15" y="98" font-size="11.5" font-family="monospace" fill="#134e4a">他站着看书。(Anh ấy đứng đọc sách)</text>
        <text x="15" y="120" font-size="11" fill="#0d9488">Không thể hiện động thái tiến hành của bản thân ảnh.</text>
      </g>

      <g transform="translate(350, 55)">
        <rect width="300" height="140" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#6d28d9">正在 + Động từ — TIẾN TRÌNH ĐỘNG</text>
        <text x="15" y="52" font-size="11.5" fill="#5b21b6">• Nhấn mạnh hành động đang diễn ra tại thời điểm nói:</text>
        <text x="15" y="76" font-size="11.5" font-family="monospace" fill="#4c1d95">我正在看电影呢。(Tôi đang xem phim nè)</text>
        <text x="15" y="98" font-size="11.5" font-family="monospace" fill="#4c1d95">老师在讲课。(Thầy giáo đang giảng bài)</text>
        <text x="15" y="120" font-size="11" fill="#7c3aed">Thường kết hợp trợ từ "呢" ở cuối câu khẩu ngữ.</text>
      </g>
    </svg>
  `,

  'map-imminent-future': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-70 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">DIỄN ĐẠT SỰ VIỆC SẮP XẢY RA: 快要……了 VS 就要……了</text>

      <g transform="translate(30, 55)">
        <rect width="300" height="140" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#a16207">快 / 快要……了 (Sắp sửa cận kề)</text>
        <text x="15" y="52" font-size="11.5" fill="#854d0e">• Thời điểm đã rất gần kề:</text>
        <text x="15" y="74" font-size="11" font-family="monospace" fill="#713f12">天快黑了。(Trời sắp tối rồi)</text>
        <text x="15" y="94" font-size="11" font-family="monospace" fill="#713f12">我们快要放假了。(Chúng ta sắp nghỉ rồi)</text>
        <text x="15" y="120" font-size="11" font-weight="bold" fill="#dc2626">✘ KHÔNG ĐƯỢC đi kèm mốc thời gian cụ thể!</text>
      </g>

      <g transform="translate(350, 55)">
        <rect width="300" height="140" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">要 / 就要……了 (Theo kế hoạch)</text>
        <text x="15" y="52" font-size="11.5" fill="#166534">• Thường có mốc thời gian ấn định cụ thể:</text>
        <text x="15" y="74" font-size="11" font-family="monospace" fill="#14532d">明天下午两点就要出发了。</text>
        <text x="15" y="94" font-size="11" font-family="monospace" fill="#14532d">火车马上就要进站了。</text>
        <text x="15" y="120" font-size="11" font-weight="bold" fill="#16a34a">✔ ĐI ĐƯỢC với trạng ngữ thời gian (明天, 下周...).</text>
      </g>
    </svg>
  `,

  'map-rhetorical-questions': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-70 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="660" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">CÂU HỎI TU TỪ PHẢN VẤN: 不是……吗？ VS 难道……吗？</text>

      <g transform="translate(30, 55)">
        <rect width="300" height="140" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">不是……吗？ (Chẳng phải là... sao?)</text>
        <text x="15" y="52" font-size="11.5" fill="#1e40af">• Nhắc nhở người nghe điều hiển nhiên đã biết:</text>
        <text x="15" y="74" font-size="11" font-family="monospace" fill="#1e3a8a">他不是你的同班同学吗？</text>
        <text x="15" y="94" font-size="11" fill="#1e40af">(= Cậu ấy chính là bạn cùng lớp cậu mà!)</text>
        <text x="15" y="120" font-size="11" fill="#2563eb">Mang ngữ điệu nhắc nhở thân thiện hoặc nhấn mạnh.</text>
      </g>

      <g transform="translate(350, 55)">
        <rect width="300" height="140" rx="10" fill="#fdf2f8" stroke="#ec4899" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#be185d">难道……吗？ (Chẳng lẽ... sao?)</text>
        <text x="15" y="52" font-size="11.5" fill="#9d174d">• Biểu thị sự ngạc nhiên tột độ hoặc chất vấn trách móc:</text>
        <text x="15" y="74" font-size="11" font-family="monospace" fill="#831843">难道你不明白早睡早起的重要性吗？</text>
        <text x="15" y="94" font-size="11" fill="#9d174d">(= Bạn bắt buộc phải hiểu được điều đó chứ!)</text>
        <text x="15" y="120" font-size="11" fill="#db2777">Ngữ điệu mạnh mẽ, hàm ý đối lập với điều vừa nêu.</text>
      </g>
    </svg>
  `
};
