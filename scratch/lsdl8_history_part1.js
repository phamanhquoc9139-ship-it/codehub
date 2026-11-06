// scratch/lsdl8_history_part1.js
// Lịch sử 8 - Bài 1 đến Bài 9 (SGK Kết nối tri thức với cuộc sống)

module.exports = [
  {
    id: "ls-1",
    unitNumber: 1,
    type: "history",
    chapter: "Chương 1. Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 1. Cách mạng tư sản Anh và chiến tranh giành độc lập của 13 thuộc địa ở Bắc Mỹ",
    badge: "Lịch sử Thế giới Cận đại",
    objective: "Nhận biết tiền đề, nguyên nhân, tiến trình, ý nghĩa của Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ; so sánh tính chất và hình thức của hai cuộc cách mạng.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flagUS" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#1e3a8a"/>
          <stop offset="100%" stop-color="#b91c1c"/>
        </linearGradient>
      </defs>
      <!-- Parliament / UK Side -->
      <rect x="25" y="45" width="160" height="135" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <path d="M 105 20 L 45 45 L 165 45 Z" fill="#0284c7"/>
      <text x="105" y="40" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">NGHỊ VIỆN ANH (1640-1688)</text>
      <circle cx="105" cy="75" r="16" fill="#0f172a" stroke="#38bdf8"/>
      <text x="105" y="79" fill="#38bdf8" font-size="10" font-weight="black" text-anchor="middle">1688</text>
      <text x="105" y="105" fill="#e2e8f0" font-size="9" text-anchor="middle">Cách mạng Vinh Quang</text>
      <rect x="40" y="120" width="130" height="48" rx="6" fill="#0f172a"/>
      <text x="105" y="136" fill="#93c5fd" font-size="8.5" font-weight="bold" text-anchor="middle">Đạo luật về Quyền (1689)</text>
      <text x="105" y="152" fill="#cbd5e1" font-size="8" text-anchor="middle">Xác lập Quân chủ lập hiến</text>

      <!-- Center arrow -->
      <path d="M 195 110 L 205 110" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,3"/>

      <!-- 13 Colonies Side -->
      <rect x="215" y="45" width="160" height="135" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
      <path d="M 295 20 L 235 45 L 355 45 Z" fill="#be123c"/>
      <text x="295" y="40" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">13 THUỘC ĐỊA BẮC MỸ</text>
      <rect x="230" y="60" width="130" height="28" rx="4" fill="url(#flagUS)"/>
      <text x="295" y="78" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">4 - 7 - 1776: ĐỘC LẬP</text>
      <rect x="230" y="98" width="130" height="70" rx="6" fill="#0f172a"/>
      <text x="295" y="114" fill="#fda4af" font-size="8.5" font-weight="bold" text-anchor="middle">G. Washington chỉ huy</text>
      <text x="295" y="130" fill="#cbd5e1" font-size="8" text-anchor="middle">1781: Đại thắng Yorktown</text>
      <text x="295" y="146" fill="#facc15" font-size="8" font-weight="bold" text-anchor="middle">1783: Hiệp ước Paris</text>
      <text x="295" y="160" fill="#94a3b8" font-size="7.5" text-anchor="middle">Thành lập Hợp chúng quốc Hoa Kỳ</text>

      <text x="200" y="202" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Bước ngoặt mở đường cho Chủ nghĩa Tư bản thế giới bứt phá</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-crown text-amber-500"></i> I. Cách mạng tư sản Anh (Thế kỉ XVII)
          </h5>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <li><strong>Bối cảnh:</strong> Kinh tế tư bản chủ nghĩa phát triển mạnh (hiện tượng "rào đất cướp ruộng" biến nông dân thành công nhân làm thuê). Xuất hiện tầng lớp quý tộc mới (quý tộc tư sản hóa) liên minh chặt chẽ với tư sản nhưng bị chế độ phong kiến chuyên chế Stuart (vua Sác-lơ I) kìm hãm bằng thuế má, độc quyền và tôn giáo.</li>
            <li><strong>Tiến trình:</strong>
              <br>• <em>1640:</em> Vua triệu tập Quốc hội đòi tăng thuế nhưng bị bác bỏ $\rightarrow$ Khởi đầu xung đột.
              <br>• <em>1642 - 1649:</em> Nội chiến ác liệt giữa quân đội Quốc hội (do Ô-li-vơ Crôm-oen chỉ huy) và quân nhà vua. Năm 1649, Charles I bị xử tử, thành lập nước Cộng hòa.
              <br>• <em>1653 - 1658:</em> Chế độ Độc tài quân sự của Crôm-oen (Bảo hộ công).
              <br>• <em>1688 (Cách mạng Vinh quang):</em> Quốc hội phế truất vua James II, mời William III xứ Orange và Mary lên ngôi.
              <br>• <em>1689:</em> Thông qua <strong>Đạo luật về quyền (Bill of Rights)</strong>, hạn chế tối đa vương quyền, trao quyền lực thực tế cho Nghị viện $\rightarrow$ Xác lập chế độ <em>Quân chủ lập hiến</em>.
            </li>
            <li><strong>Ý nghĩa:</strong> Lật đổ ách thống trị phong kiến, mở đường cho kinh tế TBCN Anh phát triển vượt bậc, là sự kiện mở đầu thời kì lịch sử cận đại thế giới.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-flag-usa text-rose-500"></i> II. Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ (1775 - 1783)
          </h5>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <li><strong>Nguyên nhân:</strong> Thực dân Anh cướp bóc tài nguyên, cấm phát triển công nghiệp nội địa, đánh thuế vô lí (thuế chè, thuế tem) với khẩu hiệu nổi tiếng của nhân dân: <em>"Không có đại diện trong nghị viện thì không nộp thuế"</em>. Duyên cớ: Sự kiện Chè Boston (1773).</li>
            <li><strong>Tiến trình:</strong>
              <br>• <em>1775:</em> Chiến tranh bùng nổ tại Lexington và Concord. George Washington được cử làm Tổng chỉ huy quân thuộc địa.
              <br>• <em>4/7/1776:</em> Đại hội thông qua bản <strong>Tuyên ngôn Độc lập</strong> do Thomas Jefferson soạn thảo, tuyên bố thành lập Hợp chúng quốc Hoa Kỳ (USA).
              <br>• <em>1777:</em> Thắng lợi lớn tại Saratoga làm xoay chuyển tình thế chiến lược.
              <br>• <em>1781:</em> Trận đại thắng Yorktown buộc quân Anh đầu hàng.
              <br>• <em>1783:</em> Hiệp ước Paris được kí kết, Anh chính thức công nhận nền độc lập của 13 thuộc địa.
            </li>
            <li><strong>Ý nghĩa & Tính chất:</strong> Vừa là cuộc chiến tranh giải phóng dân tộc, vừa là cuộc cách mạng tư sản giải phóng sức sản xuất; mở rộng tư tưởng nhân quyền và pháp quyền (Hiến pháp 1787). Hạn chế: Chưa xóa bỏ chế độ nô lệ da đen và quyền lợi của người bản địa da đỏ.</li>
          </ul>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs space-y-2">
        <h6 class="font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-scale-balanced"></i> Phân tích so sánh Cách mạng Anh & Chiến tranh Bắc Mỹ
        </h6>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-indigo-100 dark:border-indigo-900">
            <span class="font-bold text-sky-700 dark:text-sky-400 block mb-1">Cách mạng tư sản Anh</span>
            <p class="text-slate-600 dark:text-slate-300">• <strong>Hình thức:</strong> Nội chiến lật đổ chế độ phong kiến chuyên chế.<br>• <strong>Lãnh đạo:</strong> Liên minh Tư sản & Quý tộc mới.<br>• <strong>Thể chế thiết lập:</strong> Quân chủ lập hiến (Vua trị vì nhưng Nghị viện cai trị).</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-indigo-100 dark:border-indigo-900">
            <span class="font-bold text-rose-700 dark:text-rose-400 block mb-1">Chiến tranh giành độc lập 13 thuộc địa</span>
            <p class="text-slate-600 dark:text-slate-300">• <strong>Hình thức:</strong> Chiến tranh giải phóng dân tộc chống ách đô hộ của chính quốc.<br>• <strong>Lãnh đạo:</strong> Giai cấp tư sản & Chủ nô đồn điền.<br>• <strong>Thể chế thiết lập:</strong> Cộng hòa liên bang tư sản (Tổng thống đứng đầu).</p>
          </div>
        </div>
      </div>
    `,
    commonMistakes: "Học sinh thường nhầm lẫn Cách mạng Anh là xóa bỏ hoàn toàn vương quyền. Thực chất nước Anh không xóa bỏ ngôi vua mà chuyển hóa thành Quân chủ lập hiến (vua chỉ mang tính biểu tượng). Với Bắc Mỹ, nhiều em nhầm ngày 4/7/1776 là ngày chiến tranh kết thúc; thực tế chiến tranh kéo dài đến 1781 (Yorktown) và Hiệp ước Paris kí năm 1783 mới kết thúc chính thức.",
    quiz: {
      q: "Điểm chung nổi bật về động lực lãnh đạo giữa Cách mạng tư sản Anh và Chiến tranh giành độc lập ở Bắc Mỹ là gì?",
      options: [
        "Đều do giai cấp vô sản và nông dân nghèo hoàn toàn lãnh đạo",
        "Đều có sự tham gia lãnh đạo của giai cấp tư sản nhằm mở đường cho CNTB phát triển",
        "Đều nhằm mục đích lật đổ chế độ phong kiến trong nước và lập chế độ quân chủ lập hiến",
        "Đều xóa bỏ triệt để chế độ người bóc lột người và giải phóng hoàn toàn người nô lệ"
      ],
      ans: 1,
      expl: "Cả hai cuộc cách mạng đều có sự lãnh đạo của giai cấp tư sản (ở Anh liên minh với quý tộc mới, ở Bắc Mỹ liên minh với chủ nô) nhằm gạt bỏ chướng ngại vật mở đường cho quan hệ sản xuất tư bản chủ nghĩa phát triển tự do."
    }
  },
  {
    id: "ls-2",
    unitNumber: 2,
    type: "history",
    chapter: "Chương 1. Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 2. Cách mạng tư sản Pháp cuối thế kỉ XVIII",
    badge: "Lịch sử Thế giới Cận đại",
    objective: "Nắm vững tình hình kinh tế - xã hội nước Pháp trước cách mạng; trào lưu Triết học Ánh sáng; các giai đoạn phát triển đỉnh cao của cách mạng; ý nghĩa lịch sử sâu rộng của Cách mạng tư sản Pháp.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <!-- Bastille Fortress -->
      <path d="M 40 160 L 40 80 L 70 80 L 70 100 L 90 100 L 90 80 L 120 80 L 120 160 Z" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="55" cy="65" r="14" fill="#475569"/>
      <circle cx="105" cy="65" r="14" fill="#475569"/>
      <rect x="70" y="125" width="20" height="35" rx="10" fill="#0f172a"/>
      <!-- Smoke / Fire -->
      <path d="M 60 70 Q 75 40 90 65 Q 105 35 120 60" fill="none" stroke="#f97316" stroke-width="3"/>
      <text x="80" y="185" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">14-7-1789: Chiếm ngục Bastille</text>

      <!-- Triết học Ánh Sáng -->
      <rect x="155" y="30" width="220" height="42" rx="8" fill="#1e293b" stroke="#38bdf8"/>
      <text x="265" y="47" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">TRIẾT HỌC ÁNH SÁNG PHÁP</text>
      <text x="265" y="63" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Montesquieu • Voltaire • Rousseau</text>

      <!-- Timeline steps -->
      <rect x="155" y="85" width="220" height="105" rx="8" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="265" y="103" fill="#fbbf24" font-size="9" font-weight="black" text-anchor="middle">CÁC GIAI ĐOẠN PHÁT TRIỂN</text>

      <path d="M 170 120 L 360 120" stroke="#475569" stroke-width="2"/>
      <circle cx="185" cy="120" r="5" fill="#38bdf8"/>
      <text x="185" y="137" fill="#93c5fd" font-size="7.5" text-anchor="middle">Lập hiến</text>
      <text x="185" y="148" fill="#64748b" font-size="7" text-anchor="middle">1789-1792</text>

      <circle cx="265" cy="120" r="5" fill="#f43f5e"/>
      <text x="265" y="137" fill="#fda4af" font-size="7.5" text-anchor="middle">Gia-cô-banh (Đỉnh cao)</text>
      <text x="265" y="148" fill="#f43f5e" font-size="7" font-weight="bold" text-anchor="middle">1793-1794 (Rô-be-spie)</text>

      <circle cx="345" cy="120" r="5" fill="#a855f7"/>
      <text x="345" y="137" fill="#d8b4fe" font-size="7.5" text-anchor="middle">Sau Técmri-đo</text>
      <text x="345" y="148" fill="#64748b" font-size="7" text-anchor="middle">1794-1799</text>

      <text x="265" y="176" fill="#4ade80" font-size="8.5" font-weight="bold" text-anchor="middle">Tự do - Bình đẳng - Bác ái (Liberté, Égalité, Fraternité)</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-users text-amber-500"></i> I. Tình hình nước Pháp trước cách mạng
          </h5>
          <p>• <strong>Kinh tế:</strong> Nông nghiệp lạc hậu, công thương nghiệp tư bản phát triển mạnh nhưng bị chế độ phường hội phong kiến kìm hãm nặng nề.<br>
          • <strong>Xã hội:</strong> Phân chia sâu sắc thành 3 đẳng cấp:
            <br>&nbsp;&nbsp;- <em>Đẳng cấp 1 (Tăng lữ) & Đẳng cấp 2 (Quý tộc):</em> Nắm mọi đặc quyền, chiếm nhiều ruộng đất, không phải đóng thuế.
            <br>&nbsp;&nbsp;- <em>Đẳng cấp 3 (Tư sản, nông dân, bình dân):</em> Chiếm 98% dân số, không có quyền chính trị, phải gánh chịu mọi thứ thuế khóa bất công.
          <br>• <strong>Tư tưởng:</strong> Trào lưu <em>Triết học Ánh sáng</em> thế kỉ XVIII với các đại biểu kiệt xuất: Mông-te-xki-ơ, Vôn-te, Rút-xô kịch liệt phê phán chế độ quân chủ chuyên chế và giáo hội độc đoán, mở đường về mặt tư tưởng cho bão táp cách mạng.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-fire text-rose-500"></i> II. Diễn biến các giai đoạn chính & Ý nghĩa lịch sử
          </h5>
          <p>• <strong>14/7/1789:</strong> Quần chúng vũ trang tấn công và phá hủy pháo đài - ngục Bastille (biểu tượng của nền quân chủ chuyên chế) $\rightarrow$ Mở đầu cuộc cách mạng.<br>
          • <strong>Tháng 8/1789:</strong> Quốc hội Lập hiến thông qua <em>Tuyên ngôn Nhân quyền và Dân quyền</em> với khẩu hiệu vang dội: "Tự do - Bình đẳng - Bác ái".<br>
          • <strong>1792:</strong> Nền Cộng hòa thứ nhất được thiết lập sau khi nhân dân lật đổ phái Lập hiến; xử tử vua Louis XVI (1793).<br>
          • <strong>1793 - 1794 (Nền chuyên chính dân chủ Jacobin):</strong> Đứng đầu là M. Robespierre. Đây là đỉnh cao của cách mạng với các biện pháp kiên quyết: chia ruộng đất cho nông dân, ban hành luật giá tối đa, đập tan thúng thù trong giặc ngoài.<br>
          • <strong>1794 - 1799:</strong> Đảo chính ngày 9 Thermidor hạ bệ Robespierre. Đến tháng 11/1799, Napoleon Bonaparte làm đảo chính lập ra chế độ Độc tài quân sự.<br>
          • <strong>Ý nghĩa lịch sử:</strong> Là cuộc cách mạng tư sản triệt để nhất thời cận đại, lật đổ tận gốc chế độ phong kiến, xóa bỏ chế độ đẳng cấp, mở rộng đường cho chủ nghĩa tư bản phát triển và cổ vũ phong trào đấu tranh toàn châu Âu.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-2">
        <h6 class="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-check-double"></i> Vì sao nói Cách mạng Pháp là cuộc cách mạng tư sản triệt để nhất?
        </h6>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
          1. <strong>Lật đổ hoàn toàn chế độ quân chủ chuyên chế:</strong> Xóa bỏ vĩnh viễn tàn dư phong kiến hàng thế kỉ, xử tử nhà vua phong kiến phản quốc.<br>
          2. <strong>Giải quyết quyền lợi thiết thực của nông dân:</strong> Phái Jacobin đã chia nhỏ đất đai công làng xã bán trả dần cho nông dân, đốt bỏ mọi văn tự phong kiến.<br>
          3. <strong>Sức mạnh quần chúng nhân dân:</strong> Nhân dân lao động Paris là động lực chính thúc đẩy cách mạng tiến lên qua từng giai đoạn khủng hoảng.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm lẫn phái Girondin và phái Jacobin: Girondin đại diện cho tư sản công thương lớn (dừng lại khi nền cộng hòa được lập), trong khi Jacobin đại diện cho tư sản vừa và nhỏ liên minh với bình dân nông dân, đưa cách mạng đạt tới đỉnh cao dân chủ.",
    quiz: {
      q: "Sự kiện lịch sử nào đánh dấu sự bùng nổ của Cách mạng tư sản Pháp năm 1789?",
      options: [
        "Vua Louis XVI bị đưa lên máy chém xử tử (1793)",
        "Quần chúng nhân dân Paris tấn công chiếm pháo đài - nhà tù Bastille (14/7/1789)",
        "Quốc hội thông qua Tuyên ngôn Nhân quyền và Dân quyền",
        "Napoleon Bonaparte thực hiện cuộc đảo chính ngày 18 tháng Sương Mù (1799)"
      ],
      ans: 1,
      expl: "Ngày 14/7/1789, quần chúng nhân dân tấn công phá ngục Bastille - biểu tượng kiên cố của chế độ quân chủ chuyên chế phong kiến, mở đầu thắng lợi cho Cách mạng Pháp."
    }
  },
  {
    id: "ls-3",
    unitNumber: 3,
    type: "history",
    chapter: "Chương 1. Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 3. Cách mạng công nghiệp (nửa sau thế kỉ XVIII – giữa thế kỉ XIX)",
    badge: "Lịch sử Thế giới Cận đại",
    objective: "Trình bày tiền đề, các phát minh quan trọng trong Cách mạng công nghiệp (máy kéo sợi Jenny, máy hơi nước James Watt, luyện kim, tàu hỏa Stephenson); phân tích tác động sâu sắc về kinh tế và biến đổi cơ cấu xã hội.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <!-- James Watt Steam Engine Outline -->
      <rect x="30" y="60" width="70" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="65" cy="105" r="28" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <line x1="65" y1="77" x2="65" y2="133" stroke="#f59e0b" stroke-width="3"/>
      <line x1="37" y1="105" x2="93" y2="105" stroke="#f59e0b" stroke-width="3"/>
      <rect x="95" y="70" width="45" height="18" rx="4" fill="#334155"/>
      <path d="M 120 70 L 145 35" stroke="#94a3b8" stroke-width="4"/>
      <!-- Steam puff -->
      <circle cx="150" cy="30" r="10" fill="#64748b" opacity="0.6"/>
      <circle cx="165" cy="20" r="14" fill="#94a3b8" opacity="0.4"/>
      <text x="65" y="170" fill="#fcd34d" font-size="8.5" font-weight="bold" text-anchor="middle">MÁY HƠI NƯỚC (J. WATT)</text>

      <!-- Arrow -->
      <path d="M 175 105 L 205 105" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4,2"/>

      <!-- Impacts block -->
      <rect x="215" y="30" width="165" height="160" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="297" y="48" fill="#38bdf8" font-size="10" font-weight="black" text-anchor="middle">TÁC ĐỘNG KINH TẾ - XÃ HỘI</text>

      <rect x="225" y="58" width="145" height="42" rx="6" fill="#0f172a"/>
      <text x="297" y="72" fill="#4ade80" font-size="8.5" font-weight="bold" text-anchor="middle">1. Kinh tế & Sản xuất</text>
      <text x="297" y="86" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Thủ công $\rightarrow$ Cơ khí máy móc</text>
      <text x="297" y="96" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Đầu máy xe lửa, tàu thủy hơi nước</text>

      <rect x="225" y="108" width="145" height="72" rx="6" fill="#0f172a"/>
      <text x="297" y="123" fill="#f43f5e" font-size="8.5" font-weight="bold" text-anchor="middle">2. Cơ cấu giai cấp mới</text>
      <text x="297" y="138" fill="#fbcfe8" font-size="8" font-weight="bold" text-anchor="middle">TƯ SẢN CÔNG NGHIỆP</text>
      <text x="297" y="150" fill="#94a3b8" font-size="7" text-anchor="middle">đối kháng trực tiếp với</text>
      <text x="297" y="163" fill="#fda4af" font-size="8" font-weight="bold" text-anchor="middle">VÔ SẢN (GIAI CẤP CÔNG NHÂN)</text>
      <text x="297" y="174" fill="#64748b" font-size="7" text-anchor="middle">Đô thị hóa bùng nổ</text>

      <text x="200" y="208" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Nước Anh trở thành "Công xưởng của thế giới"</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-industry text-sky-500"></i> I. Những thành tựu kĩ thuật then chốt
          </h5>
          <p>• <strong>Khởi đầu tại Anh:</strong> Diễn ra từ những năm 60 của thế kỉ XVIII, khởi đầu ở ngành dệt may vì vốn ít, thu hồi nhanh và nhu cầu tiêu thụ toàn cầu lớn.<br>
          • <strong>Các mốc phát minh quan trọng:</strong>
            <br>&nbsp;&nbsp;- <em>1764:</em> James Hargreaves chế tạo <strong>máy kéo sợi Jenny</strong>, nâng năng suất sợi lên 8 lần.
            <br>&nbsp;&nbsp;- <em>1769 & 1785:</em> Máy kéo sợi chạy bằng sức nước của Arkwright và máy dệt của Edmund Cartwright.
            <br>&nbsp;&nbsp;- <em>1784:</em> <strong>James Watt</strong> hoàn thiện phát minh <strong>máy hơi nước</strong>. Máy hơi nước tạo ra nguồn động lực vạn năng mới, giải phóng sản xuất khỏi sự phụ thuộc vào gió và sức nước, nhà máy có thể xây dựng ở bất cứ nơi đâu.
            <br>&nbsp;&nbsp;- <em>Giao thông vận tải:</em> Tàu thủy hơi nước Fulton (1807), đầu máy xe lửa hơi nước của George Stephenson (1814) mở ra kỉ nguyên đường sắt tốc độ cao.
          <br>• <strong>Sự lan rộng:</strong> Nhanh chóng lan tỏa sang Pháp, Đức, Bỉ và Hoa Kỳ vào nửa đầu thế kỉ XIX.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-chart-line text-teal-500"></i> II. Hệ quả kinh tế - xã hội sâu rộng
          </h5>
          <p>• <strong>Về kinh tế:</strong> Thay đổi căn bản phương thức sản xuất từ lao động thủ công trong công trường thủ công sang sản xuất bằng máy móc trong các đại công xưởng. Năng suất lao động tăng vọt, của cải dồi dào, hệ thống giao thông và mạng lưới thương mại toàn cầu phát triển.<br>
          • <strong>Về xã hội:</strong>
            <br>&nbsp;&nbsp;- Hình thành hai giai cấp cơ bản đối kháng nhau sâu sắc trong xã hội tư bản: <strong>Giai cấp tư sản công nghiệp</strong> (nắm tư liệu sản xuất) và <strong>Giai cấp vô sản</strong> (công nhân làm thuê bán sức lao động).
            <br>&nbsp;&nbsp;- Thúc đẩy quá trình <em>đô thị hóa</em> nhanh chóng; hàng triệu nông dân rời bỏ nông thôn tập trung tại các trung tâm công nghiệp lớn (Manchester, Birmingham, London...).
            <br>&nbsp;&nbsp;- Mặt trái: Bóc lột lao động phụ nữ và trẻ em, điều kiện làm việc nguy hiểm, giờ làm kéo dài 14-16 tiếng/ngày, ô nhiễm môi trường khói bụi nghiêm trọng.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
        <h6 class="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-gear"></i> Tại sao máy hơi nước của James Watt được xem là phát minh vĩ đại nhất của Cách mạng công nghiệp?
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Trước James Watt, các xưởng sản xuất phải phụ thuộc vào dòng chảy của sông suối để quay cối xay nước, mùa đông nước đóng băng thì sản xuất đình trệ. Máy hơi nước hoạt động dựa trên áp suất hơi nhiệt đốt than, có thể đặt ở bất kì địa hình nào, vận hành liên tục cả ngày đêm, cung cấp lực kéo khổng lồ cho cả máy dệt, máy luyện kim lẫn tàu hỏa và tàu thủy.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm James Watt là người đầu tiên chế tạo ra máy hơi nước. Trước ông đã có máy hơi nước Newcomen dùng hút nước mỏ than nhưng rất cồng kềnh, tiêu hao nhiều nhiên liệu. James Watt là người cải tiến, lắp thêm bình ngưng tụ riêng và biến chuyển động thẳng thành chuyển động quay, biến nó thành động cơ vạn năng thương mại hóa.",
    quiz: {
      q: "Phát minh kĩ thuật nào đã tạo ra động lực mới, giúp các nhà máy có thể xây dựng ở bất cứ nơi đâu thay vì phải dựng cạnh bờ sông suối?",
      options: [
        "Máy kéo sợi Jenny của Hargreaves",
        "Máy dệt vải bằng sức nước của Cartwright",
        "Máy hơi nước được James Watt cải tiến và hoàn thiện",
        "Đầu máy xe lửa hơi nước của Stephenson"
      ],
      ans: 2,
      expl: "Máy hơi nước của James Watt (1784) đã tạo ra nguồn động lực vạn năng tự do, giải phóng sản xuất khỏi sự phụ thuộc vào sức nước, mở đường cho sự bùng nổ của các nhà máy công nghiệp."
    }
  },
  {
    id: "ls-4",
    unitNumber: 4,
    type: "history",
    chapter: "Chương 2. Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX",
    title: "Bài 4. Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX",
    badge: "Lịch sử Khu vực",
    objective: "Mô tả quá trình xâm nhập và áp đặt ách cai trị của thực dân phương Tây tại các nước Đông Nam Á; phong trào đấu tranh kiên cường của nhân dân khu vực; lí giải trường hợp ngoại lệ giữ được độc lập tương đối của Xiêm (Thái Lan).",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="compassG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0369a1"/>
        </radialGradient>
      </defs>
      <!-- Sea Routes / Map visual -->
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="45" fill="#f8fafc" font-size="11" font-weight="black" text-anchor="middle">BẢN ĐỒ CHIẾM ĐÓNG CỦA THỰC DÂN TẠI ĐÔNG NAM Á</text>

      <!-- Colonizers tags -->
      <rect x="40" y="60" width="145" height="34" rx="6" fill="#1e293b" stroke="#f43f5e"/>
      <text x="112" y="75" fill="#fda4af" font-size="8.5" font-weight="bold" text-anchor="middle">Tây Ban Nha & Hoa Kỳ</text>
      <text x="112" y="88" fill="#e2e8f0" font-size="8" text-anchor="middle">Thống trị Philippines</text>

      <rect x="215" y="60" width="145" height="34" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="287" y="75" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">Hà Lan (Cty Đông Ấn Hà Lan)</text>
      <text x="287" y="88" fill="#e2e8f0" font-size="8" text-anchor="middle">Kiểm soát Indonesia (Quần đảo gia vị)</text>

      <rect x="40" y="102" width="145" height="34" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="112" y="117" fill="#bae6fd" font-size="8.5" font-weight="bold" text-anchor="middle">Thực dân Anh</text>
      <text x="112" y="130" fill="#e2e8f0" font-size="8" text-anchor="middle">Chiếm Miến Điện & Mã Lai</text>

      <rect x="215" y="102" width="145" height="34" rx="6" fill="#1e293b" stroke="#a855f7"/>
      <text x="287" y="117" fill="#e9d5ff" font-size="8.5" font-weight="bold" text-anchor="middle">Thực dân Pháp</text>
      <text x="287" y="130" fill="#e2e8f0" font-size="8" text-anchor="middle">Xâm lược 3 nước Đông Dương</text>

      <!-- Siam Exception -->
      <rect x="100" y="145" width="200" height="36" rx="8" fill="#047857" stroke="#34d399" stroke-width="1.5"/>
      <text x="200" y="160" fill="#ffffff" font-size="9" font-weight="black" text-anchor="middle">VƯƠNG QUỐC XIÊM (THÁI LAN)</text>
      <text x="200" y="174" fill="#a7f3d0" font-size="8" text-anchor="middle">Giữ vững độc lập tương đối (Vùng đệm Anh - Pháp & Ngoại giao khôn khéo)</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-ship text-amber-500"></i> I. Quá trình xâm nhập của thực dân phương Tây
          </h5>
          <p>• <strong>Nguyên nhân:</strong> Đông Nam Á có vị trí chiến lược ngã tư đường hàng hải quốc tế, giàu tài nguyên thiên nhiên quý hiếm (gia vị hồ tiêu, đinh hương, quế, trầm hương, lúa gạo, cao su, khoáng sản), thị trường tiêu thụ rộng lớn.<br>
          • <strong>Quá trình thôn tính:</strong>
            <br>&nbsp;&nbsp;- <em>Bồ Đào Nha:</em> Nổ súng chiếm cảng thị Ma-lắc-ca (1511).
            <br>&nbsp;&nbsp;- <em>Tây Ban Nha:</em> Chiếm đóng quần đảo Philippines từ nửa sau thế kỉ XVI.
            <br>&nbsp;&nbsp;- <em>Hà Lan:</em> Thông qua Công ty Đông Ấn Hà Lan (VOC), từng bước loại trừ Bồ Đào Nha để độc quyền kiểm soát In-đô-nê-xi-a.
            <br>&nbsp;&nbsp;- <em>Anh:</em> Chiếm Miến Điện (qua 3 cuộc chiến tranh xâm lược 1824-1885), kiểm soát bán đảo Mã Lai và Singapore.
            <br>&nbsp;&nbsp;- <em>Pháp:</em> Mở đầu xâm lược Việt Nam (1858), sau đó thôn tính Campuchia và Lào, lập ra Liên bang Đông Dương (1887).</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-emerald-500"></i> II. Ngoại lệ Xiêm & Phong trào chống ách thống trị
          </h5>
          <p>• <strong>Hiện tượng nước Xiêm (Thái Lan):</strong> Duy trì được độc lập tương đối nhờ:
            <br>&nbsp;&nbsp;1. Chính sách cải cách tiến bộ, mở cửa và hiện đại hóa đất nước của vua Ra-ma IV (Mongkut) và Ra-ma V (Chulalongkorn).
            <br>&nbsp;&nbsp;2. Chính sách ngoại giao mềm dẻo, khôn khéo ("ngoại giao cây tre"), tận dụng tối đa vị thế là <em>vùng đệm địa - chính trị</em> giữa khu vực kiểm soát của Anh (Miến Điện, Mã Lai) và Pháp (Đông Dương).
          <br>• <strong>Phong trào phản kháng:</strong> Các cuộc khởi nghĩa vũ trang của nhân dân diễn ra liên tục (khởi nghĩa Dipo Negoro ở Indonesia 1825-1830, khởi nghĩa người Tagalog ở Philippines, phong trào yêu nước chống thực dân tại Miến Điện và Đông Dương), dù thất bại vì chênh lệch vũ khí nhưng đã đặt nền móng cho phong trào giải phóng dân tộc thế kỉ XX.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-blue-50/70 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-1.5">
        <h6 class="font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-lightbulb"></i> Đánh giá bản chất độc lập của Xiêm thời cận đại
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Cần nhận định khách quan: Xiêm giữ được chủ quyền danh nghĩa và không bị biến thành thuộc địa trực tiếp, nhưng thực tế phải nhượng bộ nhiều quyền lợi kinh tế, cắt một phần lãnh thổ phụ thuộc ở biên giới cho cả Anh và Pháp để đổi lấy sự tồn vong của vương triều.
        </p>
      </div>
    `,
    commonMistakes: "Tránh quan niệm Xiêm giữ được độc lập hoàn toàn chỉ nhờ may mắn. Đó là kết quả tổng hòa của cải cách nội trị chủ động theo mô hình phương Tây kết hợp thế cân bằng quyền lực địa chính trị giữa hai đế quốc Anh - Pháp.",
    quiz: {
      q: "Quốc gia duy nhất ở khu vực Đông Nam Á giữ được nền độc lập tương đối trước làn sóng xâm lược của thực dân phương Tây thời kì này là:",
      options: [
        "In-đô-nê-xi-a",
        "Phi-líp-pin",
        "Vương quốc Xiêm (Thái Lan)",
        "Miến Điện (Myanmar)"
      ],
      ans: 2,
      expl: "Nhờ chính sách cải cách tiến bộ của các triều vua Rama và đường lối ngoại giao khôn khéo tận dụng vị trí vùng đệm giữa thuộc địa của Anh và Pháp, Xiêm là nước duy nhất ở Đông Nam Á không bị biến thành thuộc địa."
    }
  },
  {
    id: "ls-5",
    unitNumber: 5,
    type: "history",
    chapter: "Chương 3. Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 5. Cuộc xung đột Nam – Bắc triều và Trịnh – Nguyễn",
    badge: "Lịch sử Việt Nam Cận trung đại",
    objective: "Trình bày nguyên nhân, diễn biến chính và hậu quả to lớn của cuộc xung đột Nam - Bắc triều (Lê - Mạc) và xung đột Trịnh - Nguyễn; giải thích sự chia cắt lãnh thổ Đàng Trong - Đàng Ngoài lấy sông Gianh làm giới tuyến.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <!-- North and South Vietnam Map Representation -->
      <rect x="30" y="25" width="340" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">CỤC DIỆN PHÂN LIỆT THẾ KỈ XVI - XVII</text>

      <!-- Đàng Ngoài -->
      <rect x="50" y="58" width="300" height="42" rx="8" fill="#1e293b" stroke="#38bdf8"/>
      <text x="70" y="76" fill="#38bdf8" font-size="9.5" font-weight="black">ĐÀNG NGOÀI (BẮC SÔNG GIANH)</text>
      <text x="70" y="91" fill="#cbd5e1" font-size="8">Vua Lê tượng trưng • Chúa Trịnh nắm thực quyền quản trị</text>

      <!-- River Gianh boundary -->
      <path d="M 40 115 C 120 105, 280 125, 360 115" stroke="#ef4444" stroke-width="4" stroke-dasharray="6,4"/>
      <rect x="135" y="105" width="130" height="20" rx="10" fill="#dc2626"/>
      <text x="200" y="119" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">SÔNG GIANH (QUẢNG BÌNH)</text>

      <!-- Đàng Trong -->
      <rect x="50" y="135" width="300" height="42" rx="8" fill="#1e293b" stroke="#f59e0b"/>
      <text x="70" y="153" fill="#f59e0b" font-size="9.5" font-weight="black">ĐÀNG TRONG (NAM SÔNG GIANH)</text>
      <text x="70" y="168" fill="#cbd5e1" font-size="8">Chúa Nguyễn xây dựng cơ đồ, mở cõi về phương Nam</text>

      <text x="200" y="205" fill="#fca5a5" font-size="8.5" text-anchor="middle">Nội chiến liên miên làm nhân dân lầm than, tổn hao nguyên khí quốc gia</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-arrows-split-up-and-left text-sky-500"></i> I. Cuộc xung đột Nam - Bắc triều (1533 - 1592)
          </h5>
          <p>• <strong>Bối cảnh bùng nổ:</strong> Năm 1527, Mạc Đăng Dung cướp ngôi nhà Lê lập ra <em>triều Mạc</em> (đóng đô ở Thăng Long, gọi là <strong>Bắc triều</strong>).<br>
          • Năm 1533, cựu thần nhà Lê là Nguyễn Kim tập hợp lực lượng với danh nghĩa "Phù Lê diệt Mạc", tôn Lê Duy Ninh lên làm vua, lập căn cứ ở Thanh Hóa (gọi là <strong>Nam triều</strong>).<br>
          • <strong>Diễn biến & Kết cục:</strong> Chiến tranh Nam - Bắc triều kéo dài gần 60 năm với hàng chục trận đánh đẫm máu. Đến năm 1592, quân Nam triều (do Trịnh Tùng chỉ huy) chiếm lại Thăng Long. Họ Mạc chạy lên Cao Bằng cát cứ đến năm 1677 mới chấm dứt.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-water text-amber-500"></i> II. Cuộc xung đột Trịnh - Nguyễn (1627 - 1672)
          </h5>
          <p>• <strong>Nguyên nhân:</strong> Sau khi Nguyễn Kim chết, quyền bính lọt vào tay rể là Trịnh Kiểm. Lo sợ bị sát hại, con thứ của Nguyễn Kim là Nguyễn Hoàng xin vào trấn thủ Thuận Hóa năm 1558, từng bước gây dựng cơ nghiệp riêng của họ Nguyễn ở phương Nam.<br>
          • <strong>Diễn biến:</strong> Từ 1627 đến 1672, hai tập đoàn Trịnh - Nguyễn đánh nhau 7 lần lớn không phân thắng bại.<br>
          • <strong>Hệ quả:</strong> Hai bên ngừng bắn, lấy <strong>sông Gianh (Quảng Bình)</strong> và lũy Thầy làm ranh giới chia cắt đất nước:
            <br>&nbsp;&nbsp;- <em>Đàng Ngoài:</em> Từ sông Gianh trở ra Bắc, vua Lê trị vì tượng trưng, phủ chúa Trịnh nắm toàn quyền cai trị.
            <br>&nbsp;&nbsp;- <em>Đàng Trong:</em> Từ sông Gianh trở vào Nam, do chúa Nguyễn cai quản.
          <br>• <strong>Tác động lịch sử:</strong> Làm đất nước bị chia cắt hơn một thế kỉ, làng mạc bị tàn phá, đời sống nông dân điêu đứng; tuy nhiên chúa Nguyễn ở Đàng Trong ra sức khai hoang mở mang bờ cõi về phía Nam.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-1.5">
        <h6 class="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-triangle-exclamation"></i> Nhận xét tính chất của các cuộc nội chiến thế kỉ XVI - XVII
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Cả hai cuộc chiến tranh Nam - Bắc triều và Trịnh - Nguyễn đều là các cuộc nội chiến phi nghĩa giữa các tập đoàn phong kiến quân phiệt nhằm tranh giành quyền lực, ngôi báu và quyền bóc lột tô thuế, không đem lại lợi ích gì cho nhân dân mà chỉ mang lại đau thương chia cắt.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm sông Bến Hải (vĩ tuyến 17 thời kháng chiến chống Mỹ) với sông Gianh (Quảng Bình) trong thời kì Trịnh - Nguyễn phân tranh thế kỉ XVII.",
    quiz: {
      q: "Ranh giới tự nhiên chia cắt đất nước thành Đàng Trong và Đàng Ngoài sau cuộc xung đột Trịnh - Nguyễn năm 1672 là dòng sông nào?",
      options: [
        "Sông Bến Hải (Quảng Trị)",
        "Sông Gianh (Quảng Bình)",
        "Sông Thạch Hãn (Quảng Trị)",
        "Sông Hồng (Hà Nội)"
      ],
      ans: 1,
      expl: "Sau cuộc chiến năm 1672 không phân thắng bại, chúa Trịnh và chúa Nguyễn đành đình chiến, lấy sông Gianh (Quảng Bình) làm ranh giới phân chia Đàng Ngoài và Đàng Trong."
    }
  },
  {
    id: "ls-6",
    unitNumber: 6,
    type: "history",
    chapter: "Chương 3. Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 6. Công cuộc khai phá vùng đất phía Nam từ thế kỉ XVI đến thế kỉ XVIII",
    badge: "Lịch sử Việt Nam Cận trung đại",
    objective: "Nêu các mốc son lịch sử trong công cuộc khai phá và xác lập chủ quyền của chúa Nguyễn tại vùng đất Nam Bộ; vai trò của Nguyễn Hữu Cảnh năm 1698; sự cộng cư hòa hợp giữa các dân tộc Việt, Chăm, Khmer, Hoa.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="southGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
      </defs>
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="45" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">MỐC SON KHAI PHÁ VÙNG ĐẤT PHÍA NAM</text>

      <!-- 1558 -->
      <rect x="40" y="60" width="95" height="48" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="87" y="76" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">1558: KHỞI ĐẦU</text>
      <text x="87" y="90" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Nguyễn Hoàng vào</text>
      <text x="87" y="100" fill="#cbd5e1" font-size="7.5" text-anchor="middle">trấn thủ Thuận Hóa</text>

      <!-- 1611 & 1653 -->
      <rect x="150" y="60" width="100" height="48" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="200" y="76" fill="#f59e0b" font-size="9" font-weight="bold" text-anchor="middle">1611 & 1653</text>
      <text x="200" y="90" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Lập phủ Phú Yên</text>
      <text x="200" y="100" fill="#cbd5e1" font-size="7.5" text-anchor="middle">và dinh Khánh Hòa</text>

      <!-- 1698 Kinh lược -->
      <rect x="265" y="60" width="95" height="48" rx="6" fill="#1e293b" stroke="#ef4444"/>
      <text x="312" y="76" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">1698: ĐẠI MỐC</text>
      <text x="312" y="90" fill="#fca5a5" font-size="7.5" font-weight="bold" text-anchor="middle">Nguyễn Hữu Cảnh</text>
      <text x="312" y="100" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Lập Phủ Gia Định</text>

      <!-- Bottom summary -->
      <rect x="40" y="122" width="320" height="60" rx="8" fill="url(#southGrad)"/>
      <text x="200" y="140" fill="#ffffff" font-size="9.5" font-weight="black" text-anchor="middle">GIỮA THẾ KỈ XVIII: HOÀN TẤT LÃNH THỔ PHÍA NAM</text>
      <text x="200" y="156" fill="#d1fae5" font-size="8" text-anchor="middle">• Sáp nhập vùng đất Hà Tiên (Mạc Cửu dâng đất năm 1708)</text>
      <text x="200" y="170" fill="#d1fae5" font-size="8" text-anchor="middle">• Khai khẩn đồng bằng Nam Bộ, biến đầm lầy thành vựa lúa trù phú</text>

      <text x="200" y="206" fill="#a7f3d0" font-size="8" text-anchor="middle">Sự hòa hợp, cộng cư bền chặt của các dân tộc Việt, Chăm, Khmer, Hoa</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-map-location-dot text-teal-500"></i> I. Tiến trình khai phá lãnh thổ phía Nam
          </h5>
          <p>• <strong>1558:</strong> Nguyễn Hoàng vào trấn thủ Thuận Hóa, mở đầu công cuộc tiến về phương Nam.<br>
          • <strong>1611:</strong> Chúa Nguyễn Hoàng lập phủ Phú Yên.<br>
          • <strong>1653:</strong> Chúa Nguyễn Phúc Tần lập dinh Thái Khang (Khánh Hòa ngày nay).<br>
          • <strong>1698 (Mốc son lịch sử):</strong> Chúa Nguyễn Phúc Chu cử Lễ Thành Hầu <strong>Nguyễn Hữu Cảnh</strong> vào kinh lược xứ Đồng Nai - Gia Định. Ông đặt tên xứ Đồng Nai là huyện Phước Long (dinh Trấn Biên), đặt xứ Sài Gòn là huyện Tân Bình (dinh Phiên Trấn), chính thức đưa toàn bộ vùng đất Nam Bộ vào hệ thống hành chính của quốc gia Đại Việt.<br>
          • <strong>1708:</strong> Mạc Cửu dâng vùng đất Hà Tiên cho chúa Nguyễn, được phong làm Tổng binh trấn Hà Tiên.<br>
          • Đến giữa thế kỉ XVIII, chủ quyền của chúa Nguyễn đã xác lập vững chắc tới tận mũi Cà Mau.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-handshake-angle text-sky-500"></i> II. Ý nghĩa lịch sử & Tinh thần cộng cư văn hóa
          </h5>
          <p>• Công cuộc mở cõi không phải là việc đến một vùng đất hoang vu không người, mà là quá trình <strong>cộng cư hòa bình, đoàn kết</strong> giữa người Việt di cư với các cộng đồng cư dân bản địa lâu đời như <em>người Khmer, người Chăm, người Hoa và các dân tộc thiểu số</em>.<br>
          • Bằng bàn tay lao động cần cù, các thế hệ tiền nhân đã đào kênh, xẻ rạch, cải tạo đất phèn mặn, biến đầm lầy hoang vu thành đồng bằng phì nhiêu màu mỡ, vựa lúa gạo lớn nhất cả nước và trung tâm thương mại sầm uất (Gia Định - Sài Gòn, Cù lao Phố, Mỹ Tho, Hà Tiên).<br>
          • Mở rộng không gian sinh tồn của dân tộc, định hình hình thể non sông chữ S hoàn chỉnh.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
        <h6 class="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-monument"></i> Đóng góp lịch sử của danh tướng Nguyễn Hữu Cảnh năm 1698
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Nguyễn Hữu Cảnh không chỉ thiết lập bộ máy hành chính, định ngạch thuế, làm sổ hộ tịch mà còn chiêu tập lưu dân lập thôn xóm, củng cố đồn lũy quốc phòng, đặt nền móng pháp lí vững chắc biến vùng đất phương Nam thành một phần máu thịt của Tổ quốc Việt Nam.
        </p>
      </div>
    `,
    commonMistakes: "Tránh hiểu lầm đất Nam Bộ trước thế kỉ XVII là vùng đất hoàn toàn hoang vắng vô chủ. Thực tế đã có các cộng đồng cư dân Khmer, Chăm sinh sống rải rác; người Việt và người Hoa đến cùng hợp lực khai phá, lập làng mở chợ trong tinh thần gắn kết tương trợ.",
    quiz: {
      q: "Năm 1698, danh tướng nào được chúa Nguyễn cử vào kinh lược phương Nam, chính thức thành lập phủ Gia Định?",
      options: [
        "Nguyễn Hoàng",
        "Nguyễn Hữu Cảnh",
        "Mạc Cửu",
        "Hoàng Công Chất"
      ],
      ans: 1,
      expl: "Năm 1698, Lễ Thành Hầu Nguyễn Hữu Cảnh vào kinh lược, lập phủ Gia Định gồm hai huyện Phước Long và Tân Bình, đặt nền tảng quản lí hành chính cho vùng đất Nam Bộ."
    }
  },
  {
    id: "ls-7",
    unitNumber: 7,
    type: "history",
    chapter: "Chương 3. Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 7. Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII",
    badge: "Lịch sử Việt Nam Cận trung đại",
    objective: "Phân tích nguyên nhân bùng nổ các cuộc khởi nghĩa nông dân ở Đàng Ngoài giữa thế kỉ XVIII; các cuộc khởi nghĩa tiêu biểu (Nguyễn Danh Phương, Hoàng Công Chất, Nguyễn Hữu Cầu); ý nghĩa lịch sử làm rung chuyển chế độ vua Lê - chúa Trịnh.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="45" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">BÃO TÁP KHỞI NGHĨA NÔNG DÂN ĐÀNG NGOÀI (THẾ KỈ XVIII)</text>

      <!-- Causes -->
      <rect x="40" y="60" width="150" height="60" rx="6" fill="#1e293b" stroke="#f43f5e"/>
      <text x="115" y="75" fill="#fda4af" font-size="8.5" font-weight="bold" text-anchor="middle">NGUYÊN NHÂN SÂU XA</text>
      <text x="115" y="90" fill="#e2e8f0" font-size="7.5" text-anchor="middle">• Chúa Trịnh xa hoa suy đồi</text>
      <text x="115" y="102" fill="#e2e8f0" font-size="7.5" text-anchor="middle">• Quan lại tham nhũng, địa chủ lấn đất</text>
      <text x="115" y="114" fill="#e2e8f0" font-size="7.5" text-anchor="middle">• Mất mùa đói kém, nông dân cùng quẫn</text>

      <!-- Leaders -->
      <rect x="210" y="60" width="150" height="60" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="75" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">CÁC THỦ LĨNH TIÊU BIỂU</text>
      <text x="285" y="90" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Hoàng Công Chất (Điện Biên)</text>
      <text x="285" y="102" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Nguyễn Danh Phương (Vĩnh Phúc)</text>
      <text x="285" y="114" fill="#cbd5e1" font-size="7.5" text-anchor="middle">• Nguyễn Hữu Cầu - Quận He (Hải Dương)</text>

      <!-- Impacts box -->
      <rect x="40" y="130" width="320" height="50" rx="8" fill="#451a03" stroke="#d97706" stroke-width="1.5"/>
      <text x="200" y="148" fill="#fef3c7" font-size="9" font-weight="black" text-anchor="middle">Ý NGHĨA LỊCH SỬ</text>
      <text x="200" y="163" fill="#fed7aa" font-size="8" text-anchor="middle">Thể hiện ý chí quật khởi "cướp của nhà giàu chia cho người nghèo"</text>
      <text x="200" y="174" fill="#fed7aa" font-size="8" text-anchor="middle">Làm lung lay tận gốc và đẩy tập đoàn phong kiến Lê - Trịnh vào bờ vực sụp đổ</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-volcano text-rose-500"></i> I. Nguyên nhân bùng nổ phong trào
          </h5>
          <p>• Từ giữa thế kỉ XVIII, chính quyền phong kiến Lê - Trịnh ở Đàng Ngoài lâm vào khủng hoảng trầm trọng: vua Lê bù nhìn, chúa Trịnh đắm chìm trong yến tiệc, quan lại mua quan bán tước, hoạn quan lộng quyền.<br>
          • Địa chủ cường hào chiếm đoạt ruộng đất công, tô thuế nặng nề. Hạn hán, bão lụt xảy ra liên miên, đê điều vỡ lở không người tu sửa dẫn đến nạn đói khủng khiếp năm 1740-1741, nông dân phải phiêu dạt, chết đói đầy đường $\rightarrow$ Mâu thuẫn xã hội gay gắt bùng nổ thành khởi nghĩa vũ trang.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-flag text-amber-500"></i> II. Các cuộc khởi nghĩa lớn & Kết quả
          </h5>
          <p>• <strong>Khởi nghĩa Hoàng Công Chất (1739 - 1769):</strong> Hoạt động mạnh ở vùng Sơn Nam rồi chuyển lên vùng Tây Bắc (Mường Thanh, Điện Biên), xây dựng căn cứ thành Bản Phủ bảo vệ dân làng khỏi giặc ngoại xâm phỉ tặc.<br>
          • <strong>Khởi nghĩa Nguyễn Danh Phương (1740 - 1751):</strong> Tự xưng là Chàng Lía xứ Bắc, xây dựng căn cứ núi Tam Đảo (Vĩnh Phúc), kiểm soát một vùng rộng lớn.<br>
          • <strong>Khởi nghĩa Nguyễn Hữu Cầu (1741 - 1751):</strong> Tức Quận He, xuất phát từ Đồ Sơn (Hải Phòng), nghĩa quân nêu khẩu hiệu "Lấy của nhà giàu chia cho dân nghèo", đánh tan nhiều đạo quân của chúa Trịnh, uy hiếp kinh thành Thăng Long.<br>
          • <strong>Kết cục & Ý nghĩa:</strong> Các cuộc khởi nghĩa cuối cùng đều bị dập tắt do nổ ra lẻ tẻ, thiếu sự phối hợp liên kết; tuy nhiên đã giáng đòn chí mạng vào chế độ phong kiến Đàng Ngoài, tạo tiền đề thuận lợi cho phong trào Tây Sơn tiến ra Bắc sau này.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-purple-50/70 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800 text-xs space-y-1.5">
        <h6 class="font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-bullhorn"></i> Vì sao phong trào nông dân Đàng Ngoài thất bại nhưng vẫn giữ vị trí trọng đại?
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Dù thiếu một đường lối chính trị nhất quán và lãnh đạo thống nhất trên cả nước, phong trào đã làm suy yếu triệt để quân đội chúa Trịnh, phơi bày sự mục ruỗng bất lực của tập đoàn Lê - Trịnh, thức tỉnh ý thức làm chủ của quần chúng nhân dân.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm lẫn địa bàn của thủ lĩnh Hoàng Công Chất: ban đầu ông khởi nghĩa ở vùng đồng bằng Sơn Nam (Thái Bình, Hưng Yên), sau đó mới chuyển đại bản doanh lên vùng Mường Thanh (Điện Biên).",
    quiz: {
      q: "Thủ lĩnh nghĩa quân nào ở Đàng Ngoài thế kỉ XVIII được nhân dân suy tôn là 'Quận He', nêu cao khẩu hiệu 'Lấy của người giàu chia cho người nghèo'?",
      options: [
        "Hoàng Công Chất",
        "Nguyễn Danh Phương",
        "Nguyễn Hữu Cầu",
        "Phan Bá Vành"
      ],
      ans: 2,
      expl: "Nguyễn Hữu Cầu (biệt danh Quận He) nổi dậy ở Hải Dương, Đồ Sơn, là vị tướng tài ba nêu cao khẩu hiệu cứu giúp dân nghèo làm chấn động Thăng Long."
    }
  },
  {
    id: "ls-8",
    unitNumber: 8,
    type: "history",
    chapter: "Chương 3. Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 8. Phong trào Tây Sơn",
    badge: "Lịch sử Việt Nam Cận trung đại",
    objective: "Tường thuật bối cảnh bùng nổ khởi nghĩa Tây Sơn (1771); các chiến công hiển hách lật đổ chúa Nguyễn, chúa Trịnh, vua Lê; đại thắng quân Xiêm (Rạch Gầm - Xoài Mút 1785) và đại phá quân Thanh (Ngọc Hồi - Đống Đa 1789); chính sách xây dựng đất nước của vua Quang Trung.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fireTaySon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#991b1b"/>
        </radialGradient>
      </defs>
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="45" fill="#f8fafc" font-size="11" font-weight="black" text-anchor="middle">ANH HÙNG DÂN TỘC QUANG TRUNG - NGUYỄN HUỆ</text>

      <!-- 1785 Rach Gam Xoai Mut -->
      <rect x="40" y="60" width="145" height="52" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="112" y="76" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">RẠCH GẦM - XOÀI MÚT (1785)</text>
      <text x="112" y="90" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Đánh tan 5 vạn quân Xiêm</text>
      <text x="112" y="102" fill="#93c5fd" font-size="7.5" text-anchor="middle">Chiến thắng thủy chiến vang dội</text>

      <!-- 1789 Ngoc Hoi Dong Da -->
      <rect x="215" y="60" width="145" height="52" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
      <text x="287" y="76" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">NGỌC HỒI - ĐỐNG ĐA (1789)</text>
      <text x="287" y="90" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Tốc chiến thần tốc Tết Kỉ Dậu</text>
      <text x="287" y="102" fill="#fca5a5" font-size="7.5" text-anchor="middle">Quét sạch 29 vạn quân Mãn Thanh</text>

      <!-- Two-fold mission -->
      <rect x="40" y="122" width="320" height="58" rx="8" fill="url(#fireTaySon)"/>
      <text x="200" y="140" fill="#ffffff" font-size="9.5" font-weight="black" text-anchor="middle">SỨ MỆNH KÉP CỦA PHONG TRÀO TÂY SƠN</text>
      <text x="200" y="156" fill="#fef2f2" font-size="8" text-anchor="middle">1. Lật đổ các tập đoàn phong kiến phân tranh (Nguyễn, Trịnh, Lê) $\rightarrow$ Thống nhất non sông</text>
      <text x="200" y="170" fill="#fef2f2" font-size="8" text-anchor="middle">2. Đánh bại hai đế quốc phong kiến xâm lược (Xiêm, Mãn Thanh) $\rightarrow$ Bảo vệ nền độc lập</text>

      <text x="200" y="206" fill="#fef08a" font-size="8.5" font-weight="bold" text-anchor="middle">"Đánh cho để dài tóc - Đánh cho để đen răng - Đánh cho nó chích luân bất phản..."</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-red-800 dark:text-red-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-burst text-red-500"></i> I. Những chiến công oanh liệt đánh đổ thế lực phong kiến
          </h5>
          <p>• <strong>1771:</strong> Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa ở Tây Sơn thượng đạo (An Khê, Gia Lai), được nhân dân hưởng ứng nồng nhiệt.<br>
          • <strong>1777:</strong> Nghĩa quân Tây Sơn lật đổ chính quyền chúa Nguyễn ở Đàng Trong.<br>
          • <strong>1786 - 1788:</strong> Nguyễn Huệ tiến quân ra Bắc Hà, lật đổ chúa Trịnh với danh nghĩa "Phù Lê diệt Trịnh". Sau đó, trước sự hèn hạ của vua tôi Lê Chiêu Thống, triều Lê sụp đổ hoàn toàn. Cục diện phân liệt Trịnh - Nguyễn chấm dứt, bước đầu lập lại sự thống nhất quốc gia.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-amber-500"></i> II. Đánh tan giặc ngoại xâm & Cải cách tiến bộ
          </h5>
          <p>• <strong>Kháng chiến chống quân Xiêm (1785):</strong> Nguyễn Ánh cầu viện quân Xiêm; 5 vạn quân Xiêm tràn vào Nam Bộ. Đêm 19 rạng ngày 20/1/1785, Nguyễn Huệ bố trí mai phục tại khúc sông <em>Rạch Gầm - Xoài Mút</em> (Tiền Giang), tiêu diệt gần như toàn bộ quân giặc.<br>
          • <strong>Kháng chiến chống quân Mãn Thanh (1789):</strong> Lê Chiêu Thống rước 29 vạn quân Thanh vào Thăng Long. Ngày 22 tháng Chạp năm Mậu Thân (1788), Nguyễn Huệ lên ngôi Hoàng đế tại núi Bân (Huế), lấy niên hiệu <strong>Quang Trung</strong> rồi thần tốc hành quân ra Bắc. Trong dịp Tết Kỉ Dậu (1789), với các trận đánh vang dội Hà Hồi, Ngọc Hồi, Đống Đa, quân ta đại phá tan tành quân Thanh, Tôn Sĩ Nghị hoảng loạn tháo chạy.<br>
          • <strong>Chính sách dựng nước của vua Quang Trung:</strong> Ban hành <em>Chiếu khuyến nông</em> phục hồi sản xuất, <em>Chiếu lập học</em> mở trường học, đề cao chữ Nôm thành chữ viết chính thức quốc gia, đúc tiền mới, mở rộng ngoại thương và kiên quyết bảo vệ chủ quyền biên giới.</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-1.5">
        <h6 class="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-trophy"></i> Nghệ thuật quân sự thần tốc của Quang Trung Tết Kỉ Dậu 1789
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Vừa hành quân vừa tuyển mộ binh lính tại Nghệ An; chia quân thành 5 đạo tạo thế gọng kìm bất ngờ; tổ chức hành quân thần tốc đêm ngày (hai người cáng một người nghỉ luân phiên); tấn công đúng dịp Tết khi địch say sưa khinh địch; dùng rơm bện tẩm ướt kết hợp voi chiến áp đảo pháo kích giặc.
        </p>
      </div>
    `,
    commonMistakes: "Tránh nhầm thời điểm lên ngôi Hoàng đế của Nguyễn Huệ: Ông lên ngôi vào cuối năm 1788 tại Phú Xuân (Huế) trước khi tiến quân ra Bắc đánh tan quân Thanh, chứ không phải sau khi chiến thắng Đống Đa mới lên ngôi.",
    quiz: {
      q: "Chiến thắng thủy chiến nổi tiếng của Nguyễn Huệ đã đập tan 5 vạn quân xâm lược Xiêm năm 1785 diễn ra tại địa danh nào?",
      options: [
        "Bạch Đằng",
        "Rạch Gầm - Xoài Mút",
        "Cần Giờ",
        "Cửa Tùng"
      ],
      ans: 1,
      expl: "Trận Rạch Gầm - Xoài Mút (Tiền Giang) ngày 19-20/1/1785 là một trong những trận thủy chiến tiêu diệt chiến thuyền giặc lừng lẫy nhất trong lịch sử chống ngoại xâm của dân tộc."
    }
  },
  {
    id: "ls-9",
    unitNumber: 9,
    type: "history",
    chapter: "Chương 3. Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII",
    title: "Bài 9. Tình hình kinh tế, văn hóa, tôn giáo trong các thế kỉ XVI–XVIII",
    badge: "Lịch sử Việt Nam Cận trung đại",
    objective: "Mô tả sự phát triển của thủ công nghiệp, nông nghiệp và thương mại (sự phồn thịnh của các đô thị Thăng Long, Phố Hiến, Hội An); tình hình tôn giáo (sự truyền bá Công giáo); thành tựu văn học chữ Nôm và nghệ thuật dân gian.",
    svg: `<svg viewBox="0 0 400 220" class="w-full h-auto max-h-56 rounded-xl bg-slate-900 border border-slate-700/60 shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="350" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="200" y="44" fill="#f8fafc" font-size="10.5" font-weight="black" text-anchor="middle">KINH TẾ - VĂN HÓA ĐẠI VIỆT THẾ KỈ XVI - XVIII</text>

      <!-- Port cities -->
      <rect x="40" y="58" width="150" height="60" rx="6" fill="#1e293b" stroke="#38bdf8"/>
      <text x="115" y="74" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">ĐÔ THỊ & THƯƠNG CẢNG SẦM UẤT</text>
      <text x="115" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">"Thứ nhất Kinh Kì, thứ nhì Phố Hiến"</text>
      <text x="115" y="99" fill="#93c5fd" font-size="7.5" text-anchor="middle">Thương cảng quốc tế Hội An (Đàng Trong)</text>
      <text x="115" y="110" fill="#cbd5e1" font-size="7" text-anchor="middle">Giao thương Bồ Đào Nha, Hà Lan, Nhật, Hoa</text>

      <!-- Culture / Religion -->
      <rect x="210" y="58" width="150" height="60" rx="6" fill="#1e293b" stroke="#f59e0b"/>
      <text x="285" y="74" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">VĂN HÓA & TÔN GIÁO</text>
      <text x="285" y="88" fill="#e2e8f0" font-size="7.5" text-anchor="middle">Phật, Đạo, Nho hòa đồng</text>
      <text x="285" y="99" fill="#fed7aa" font-size="7.5" text-anchor="middle">Công giáo du nhập thế kỉ XVI</text>
      <text x="285" y="110" fill="#fcd34d" font-size="7.5" font-weight="bold" text-anchor="middle">Sự ra đời của Chữ Quốc ngữ</text>

      <!-- Bottom bar: Arts -->
      <rect x="40" y="128" width="320" height="52" rx="8" fill="#047857" stroke="#10b981"/>
      <text x="200" y="145" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">NGHỆ THUẬT DÂN GIAN & VĂN HỌC CHỮ NÔM</text>
      <text x="200" y="160" fill="#d1fae5" font-size="7.5" text-anchor="middle">Điêu khắc đình làng sống động (chèo thuyền, bắt cá), nghệ thuật múa rối nước, tuồng chèo</text>
      <text x="200" y="172" fill="#d1fae5" font-size="7.5" text-anchor="middle">Văn học dân gian bộc lộ tính hiện thực phê phán giai cấp thống trị</text>
    </svg>`,
    coreKnowledge: `
      <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-sky-800 dark:text-sky-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-coins text-amber-500"></i> I. Kinh tế hàng hóa và sự phồn vinh của các thương cảng
          </h5>
          <p>• <strong>Nông nghiệp:</strong> Đàng Trong có ưu thế khai hoang diện tích rộng lớn, lúa gạo dồi dào; Đàng Ngoài chịu ảnh hưởng chiến tranh liên miên nhưng kĩ thuật thâm canh vẫn được duy trì.<br>
          • <strong>Thủ công nghiệp:</strong> Phát triển rực rỡ với các làng nghề danh tiếng: gốm Bát Tràng, Chu Đậu, đúc đồng Đại Bái, dệt Vạn Phúc, rèn sắt Nho Lâm...<br>
          • <strong>Ngoại thương & Đô thị:</strong>
            <br>&nbsp;&nbsp;- Giao thương với thương nhân phương Tây (Bồ Đào Nha, Hà Lan, Anh, Pháp) và phương Đông (Nhật Bản, Trung Hoa) diễn ra sôi nổi.
            <br>&nbsp;&nbsp;- <em>Đàng Ngoài:</em> Có câu ca <strong>"Thứ nhất Kinh Kì, thứ nhì Phố Hiến"</strong> (Hưng Yên) là nơi hội tụ tàu buôn buôn bán tấp nập.
            <br>&nbsp;&nbsp;- <em>Đàng Trong:</em> <strong>Hội An</strong> (Quảng Nam) trở thành thương cảng quốc tế sầm uất nhất với các khu phố của người Nhật và người Hoa.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book-open text-teal-500"></i> II. Tôn giáo, Chữ Quốc ngữ & Nghệ thuật
          </h5>
          <p>• <strong>Tôn giáo:</strong> Nho giáo tiếp tục được duy trì làm hệ tư tưởng chính thống; Phật giáo và Đạo giáo phục hồi vị thế trong dân gian. <strong>Công giáo</strong> (Đạo Gia-tô) được các giáo sĩ phương Tây truyền bá vào từ thế kỉ XVI.<br>
          • <strong>Chữ Quốc ngữ:</strong> Được các giáo sĩ phương Tây (tiêu biểu là Alexandre de Rhodes) dùng chữ cái La-tinh ghi âm tiếng Việt nhằm phục vụ việc truyền đạo vào thế kỉ XVII. Về sau chữ Quốc ngữ trở thành chữ viết chính thức của dân tộc Việt Nam nhờ tính khoa học, tiện lợi.<br>
          • <strong>Văn học & Nghệ thuật:</strong> Văn học chữ Nôm phát triển rực rỡ; nghệ thuật điêu khắc gỗ đình làng thoát khỏi quy chuẩn Nho giáo gò bó, phản ánh chân thực cuộc sống đời thường của người lao động (cảnh chèo thuyền, đấu vật, gảy đàn, tắm ao...).</p>
        </div>
      </div>
    `,
    analysisModel: `
      <div class="p-3.5 bg-sky-50/70 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-800 text-xs space-y-1.5">
        <h6 class="font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wide flex items-center gap-2">
          <i class="fa-solid fa-feather-pointed"></i> Ý nghĩa của sự ra đời Chữ Quốc ngữ thế kỉ XVII
        </h6>
        <p class="text-slate-700 dark:text-slate-300">
          Dù ban đầu chỉ là công cụ truyền giáo của các giáo sĩ Dòng Tên phương Tây, nhưng do hệ thống mẫu tự La-tinh đơn giản, dễ học, dễ nhớ, phản ánh chính xác ngữ âm tiếng Việt nên về sau đã trở thành phương tiện phổ biến tri thức văn hóa vô giá của dân tộc ta.
        </p>
      </div>
    `,
    commonMistakes: "Tránh hiểu lầm chữ Quốc ngữ được nhân dân ta sử dụng phổ biến ngay từ thế kỉ XVII. Thời kì đầu chữ Quốc ngữ chỉ lưu hành trong cộng đồng Công giáo; đến cuối thế kỉ XIX - đầu thế kỉ XX mới được truyền bá rộng rãi trong toàn xã hội.",
    quiz: {
      q: "Đô thị nào ở Đàng Trong thế kỉ XVII - XVIII được coi là thương cảng quốc tế sầm uất bậc nhất, nơi cư ngụ buôn bán của đông đảo thương nhân Nhật Bản và Trung Hoa?",
      options: [
        "Phố Hiến",
        "Thăng Long",
        "Hội An",
        "Gia Định"
      ],
      ans: 2,
      expl: "Hội An (Quảng Nam) là thương cảng quốc tế lớn nhất ở Đàng Trong, nơi diễn ra giao thương sầm uất giữa thuyền buôn Việt Nam với Nhật Bản, Trung Hoa và phương Tây."
    }
  }
];
