// tiengtrung9_svgs.js
// 12 Bespoke Concept Mindmaps / Infographic SVGs for Tiếng Trung Quốc 9 (viewBox="0 0 840 210")

function getChineseLessonSVG(lessonId) {
  switch (lessonId) {
    case 'bai-1':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-red-100 dark:border-red-950/60 bg-gradient-to-r from-red-50/70 via-rose-50/60 to-amber-50/70 dark:from-slate-900 dark:via-red-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <!-- Node 1: Sân khấu biểu diễn -->
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fecdd3" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#dc2626" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">才艺表演 &bull; SÂN KHẤU TÀI NĂNG</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c">&bull; 主持人 / zhǔchírén (MC)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c">&bull; 节目 / jiémù (tiết mục)</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ffe4e6" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">上台 shàngtái &bull; 表演 biǎoyǎn</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">紧张 jǐnzhāng &bull; 歌词 gēcí</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">分享 fēnxiǎng &bull; 鼓励 gǔlì</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#dc2626">丰富多彩 fēngfù duōcǎi</text>
  </g>

  <!-- Node 2: Trợ từ động thái 过 (Trải nghiệm) -->
  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#b91c1c" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">TRỢ TỪ ĐỘNG THÁI 过 (KINH NGHIỆM)</text>
    
    <!-- Khẳng định -->
    <rect x="15" y="46" width="240" height="36" rx="8" fill="#fff1f2" class="dark:fill-slate-700/60" stroke="#fecdd3" stroke-width="1" />
    <text x="25" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#9f1239">KHẲNG ĐỊNH: V + 过 + O</text>
    <text x="25" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#e11d48">我参加过才艺表演。 (Tôi từng tham gia)</text>

    <!-- Phủ định -->
    <rect x="15" y="88" width="240" height="36" rx="8" fill="#fff7ed" class="dark:fill-slate-700/60" stroke="#fed7aa" stroke-width="1" />
    <text x="25" y="102" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#c2410c">PHỦ ĐỊNH: 没(有) + V + 过</text>
    <text x="25" y="116" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#ea580c">我没有上台表演过。 (Tôi chưa từng lên sân khấu)</text>

    <!-- Nghi vấn -->
    <rect x="15" y="130" width="240" height="38" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="800" fill="#334155" class="dark:fill-slate-200">NGHI VẤN: V + 过 + … + 吗 / 没有？</text>
    <text x="25" y="159" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#64748b">你学过太极拳吗？ / 吃过没有？</text>
  </g>

  <!-- Node 3: Giao tiếp & Cảm xúc -->
  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fecdd3" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#dc2626" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">GIAO TIẾP &amp; VẬN DỤNG</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#b91c1c">Hỏi kinh nghiệm:</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">你参加过才艺表演吗？</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ffe4e6" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#9f1239">Diễn đạt cảm xúc:</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">心里特别紧张 &bull; 感到很自豪</text>
    <text x="20" y="138" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">展示才华 &bull; 展现风采</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#dc2626">社团活动 (Câu lạc bộ học đường)</text>
  </g>
</svg>`;

    case 'bai-2':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/60 bg-gradient-to-r from-emerald-50/70 via-teal-50/60 to-amber-50/70 dark:from-slate-900 dark:via-emerald-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#a7f3d0" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#059669" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">好人好事 &bull; VIỆC TỐT QUANH TA</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#047857">&bull; 助人为乐 zhù rén wéi lè</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">帮助 bāngzhù &bull; 老人 lǎorén</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#d1fae5" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">扶老爷爷过马路 (Dìu ông qua đường)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">爱心专座 àixīn zhuānzuò (Ghế ưu tiên)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">孕妇 yùnfù &bull; 残疾人 cánjírén</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#059669">值得学习 zhíde xuéxí</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#6ee7b7" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#047857" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">只有……才…… &amp; 副词 正好</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#ecfdf5" class="dark:fill-slate-700/60" stroke="#a7f3d0" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#047857">1. 只有 + ĐIỀU KIỆN CẦN, 才 + KẾT QUẢ</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#065f46">只有大家合作，才能完成这个任务。</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#047857">(Chỉ có mọi người hợp tác mới hoàn thành được)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#fffbeb" class="dark:fill-slate-700/60" stroke="#fde68a" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#b45309">2. 正好 zhènghǎo (VỪA KHÉO, ĐÚNG LÚC)</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#92400e">我正好要去超市。 (Tôi vừa khéo định đi siêu thị)</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#92400e">衣服大小正好。 (Áo vừa khít cỡ)</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#a7f3d0" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#059669" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Ý NGHĨA &amp; GIÁ TRỊ NHÂN VĂN</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#047857">Tấm lòng tương thân tương ái</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">主动让座 (Chủ động nhường ghế)</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#d1fae5" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#065f46">Tinh thần Lôi Phong (雷锋精神):</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Việc thiện nhỏ bé mang lại ấm áp to lớn</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">人人献出一份爱，世界更美好</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#059669">值得点赞 &bull; 值得学习</text>
  </g>
</svg>`;

    case 'bai-3':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-blue-100 dark:border-blue-950/60 bg-gradient-to-r from-blue-50/70 via-indigo-50/60 to-sky-50/70 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#2563eb" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">社会活动 &bull; TÌNH NGUYỆN CUỐI TUẦN</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1d4ed8">&bull; 志愿活动 zhìyuàn huódòng</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1d4ed8">&bull; 志愿者 zhìyuànzhě (TNV)</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#dbeafe" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">养老院 yǎnglǎoyuàn (Viện dưỡng lão)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">福利院 fúlìyuàn (Cơ sở bảo trợ)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">照顾 zhàogù &bull; 陪 péi (bầu bạn)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#2563eb">责任 zérèn &bull; 有意义 yǒu yìyì</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#93c5fd" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#1d4ed8" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">只要……就…… &amp; 副词 只</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#eff6ff" class="dark:fill-slate-700/60" stroke="#bfdbfe" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#1d4ed8">1. 只要 + ĐIỀU KIỆN ĐỦ, 就 + KẾT QUẢ</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#1e40af">只要注意卫生，就能保护大家的健康。</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#2563eb">(Chỉ cần chú ý vệ sinh là có thể bảo vệ sức khỏe)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">2. 副词 只 (GIỚI HẠN: CHỈ, CHỈ CÓ)</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">时间不多了，我们只能看一个景点。</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">一个小时只做完两个练习。</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#2563eb" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">SO SÁNH HAI CẶP ĐIỀU KIỆN</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1d4ed8">只有……才…… (Điều kiện cần)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Bắt buộc duy nhất: Chỉ có... thì mới...</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#dbeafe" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#059669">只要……就…… (Điều kiện đủ)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Đủ điều kiện là có kết quả: Chỉ cần... là...</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Hoạt động công ích bảo vệ cộng đồng</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#2563eb">Tuổi trẻ cống hiến</text>
  </g>
</svg>`;

    case 'bai-5':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-red-100 dark:border-red-950/60 bg-gradient-to-r from-red-50/70 via-amber-50/60 to-orange-50/70 dark:from-slate-900 dark:via-red-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fecdd3" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#b91c1c" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">春节 &bull; TẾT VIỆT NAM &amp; TRUNG QUỐC</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#9f1239">&bull; 除夕 chúxī &bull; 团圆饭 tuányuánfàn</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#9f1239">&bull; 压岁钱 yāsuìqián &bull; 拜年 bàinián</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ffe4e6" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Trung Quốc: 包饺子 bāo jiǎozi (sủi cảo)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Việt Nam: 包方粽 bāo fāngzòng (bánh chưng)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">烟花 yānhuā &bull; 舞龙舞狮 wǔlóng-wǔshī</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c">十分热闹 shífēn rènao</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#9f1239" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">副词 再 &amp; 副词 十分</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#fff1f2" class="dark:fill-slate-700/60" stroke="#fecdd3" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#9f1239">1. 再 + ĐỘNG TỪ (LẶP LẠI TƯƠNG LAI)</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#be123c">请再说一遍。 (Xin hãy nói lại lần nữa)</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#be123c">今年我还想再去一次。 (Năm nay muốn đi lại)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#fff7ed" class="dark:fill-slate-700/60" stroke="#fed7aa" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#c2410c">2. 十分 + TÍNH TỪ (MỨC ĐỘ VÔ CÙNG CAO)</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#ea580c">今天的表演十分精彩。 (Buổi diễn vô cùng đặc sắc)</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#ea580c">孩子们十分开心。 (Trẻ nhỏ rất vui)</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fecdd3" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#b91c1c" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">SO SÁNH PHÓ TỪ: 再 vs 又</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#b91c1c">再 (zài) &bull; Tương lai</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Chưa xảy ra: 明天再来 (mai lại đến)</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ffe4e6" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#c2410c">又 (yòu) &bull; Quá khứ / Đã xảy ra</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Đã xảy ra: 昨天他又来了 (hôm qua lại đến)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Nét đẹp văn hóa Tết cổ truyền</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c">Đoàn viên sum vầy</text>
  </g>
</svg>`;

    case 'bai-6':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-rose-100 dark:border-rose-950/60 bg-gradient-to-r from-rose-50/70 via-pink-50/60 to-purple-50/70 dark:from-slate-900 dark:via-rose-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fbcfe8" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#be185d" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">奥黛 &amp; 旗袍 &bull; TRANG PHỤC CỔ TRUYỀN</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#9d174d">&bull; 越南奥黛 (Áo dài Việt Nam)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#9d174d">&bull; 中国旗袍 (Sườn xám Trung Quốc)</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#fce7f3" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">文化特色 wénhuà tèsè (Nét đặc sắc)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">东方文化 dōngfāng wénhuà (Phương Đông)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">气质 qìzhì &bull; 高雅 gāoyǎ (Thanh nhã)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#be185d">量词: 一套服装 / 一条裙子</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#f472b6" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#9d174d" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">一……就…… (VỪA... LIỀN/LÀ...)</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#fdf2f8" class="dark:fill-slate-700/60" stroke="#fbcfe8" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#9d174d">HÀNH ĐỘNG NỐI TIẾP CỰC NHANH</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#be185d">我一回家就吃饭。 (Tôi vừa về nhà là ăn cơm)</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#be185d">老师一进教室，同学们就站起来。</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f5f3ff" class="dark:fill-slate-700/60" stroke="#ddd6fe" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#6d28d9">ĐIỀU KIỆN DẪN ĐẾN KẾT QUẢ TỨC THÌ</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#5b21b6">中国朋友一看见奥黛，就非常喜欢。</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#7c3aed">(Vừa nhìn thấy áo dài là bạn Trung Quốc thích mê ngay)</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fbcfe8" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#be185d" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">LƯỢNG TỪ 套 VÀ 条</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#9d174d">套 (tào) &bull; Bộ trang phục</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">一套西装 &bull; 一套传统服装</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#fce7f3" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#be185d">条 (tiáo) &bull; Đồ dài / Váy / Quần</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">一条裤子 &bull; 一条裙子 &bull; 一条河</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Nét đẹp phụ nữ Á Đông</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#9d174d">Dịu dàng &amp; Kiêu sa</text>
  </g>
</svg>`;

    case 'bai-7':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-purple-100 dark:border-purple-950/60 bg-gradient-to-r from-purple-50/70 via-indigo-50/60 to-blue-50/70 dark:from-slate-900 dark:via-purple-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#7e22ce" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">传统艺术 vs 现代艺术</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#6b21a8">&bull; 朝剧 cháojù (Chèo Việt Nam)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#6b21a8">&bull; 京剧 jīngjù (Kinh kịch Trung Quốc)</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#f3e8ff" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">相声 xiàngsheng &bull; 书法 shūfǎ</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">剪纸 jiǎnzhǐ &bull; 水上木偶 shuǐshàng mù'ǒu</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">民歌 míngē (Dân ca Quan họ)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#7e22ce">深受大众欢迎 shòu huānyíng</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#c084fc" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#6b21a8" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">之所以……是因为…… (SỞ DĨ... LÀ VÌ...)</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#faf5ff" class="dark:fill-slate-700/60" stroke="#e9d5ff" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#6b21a8">KẾT QUẢ + 之所以, 是因为 + NGUYÊN NHÂN</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#7e22ce">她之所以取得好成绩，是因为她认真学习。</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#9333ea">(Sở dĩ cô ấy đạt thành tích tốt là vì học tập chăm chỉ)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">CÂU HỎI LỰA CHỌN: A 还是 B？</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">你喜欢传统艺术还是现代艺术？</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">我喜欢水上木偶戏，是因为它生动有趣。</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#7e22ce" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">DI SẢN VĂN HÓA PHI VẬT THỂ</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#6b21a8">Kinh kịch (京剧 - UNESCO 2010)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Sinh, đán, tịnh, sửu &bull; Mặt nạ đa sắc</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#f3e8ff" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#7e22ce">Múa rối nước (水上木偶)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Chú Tễu, bắt vịt, đua thuyền, múa rồng</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Độc đáo sông nước châu thổ sông Hồng</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#6b21a8">Tự hào di sản</text>
  </g>
</svg>`;

    case 'bai-9':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-teal-100 dark:border-teal-950/60 bg-gradient-to-r from-teal-50/70 via-emerald-50/60 to-cyan-50/70 dark:from-slate-900 dark:via-teal-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#99f6e4" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#0f766e" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">我家乡在老街 &bull; QUÊ HƯƠNG LÀO CAI</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#115e59">&bull; 山区 shānqū &bull; 省市 shěngshì</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#115e59">&bull; 平静 píngjìng &bull; 接近大自然</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ccfbf1" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Thành thị: 高楼 gāolóu, 地铁 dìtiě</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Nông thôn: 农村 nóngcūn, 交通工具</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Dân số: 人口 rénkǒu, 拥挤 yōngjǐ</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#0f766e">选择生活环境 (Lựa chọn nơi sống)</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#5eead4" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#115e59" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">CÂU PHẢN VẤN VỚI 谁 VÀ 怎么 (…呢)</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#f0fdfa" class="dark:fill-slate-700/60" stroke="#99f6e4" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#115e59">1. 谁 + ĐỘNG TỪ + 呢？ (AI CHẲNG...)</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#0f766e">谁说下龙湾的风景不漂亮啊？</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#0d9488">(Ai bảo phong cảnh không đẹp chứ? &rarr; Cực kỳ đẹp)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">2. 怎么 + ĐỘNG TỪ + 呢？ (SAO CÓ THỂ...)</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">好朋友请我吃饭，我怎么能不去呢？</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#475569" class="dark:fill-slate-300">(Bạn tốt mời ăn, sao tôi có thể không đi &rarr; Nhất định đi)</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#99f6e4" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#0f766e" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">SO SÁNH THÀNH THỊ &amp; NÔNG THÔN</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#115e59">Thành phố lớn (大城市):</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Tiện lợi, đông đúc, cơ hội việc làm</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ccfbf1" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0f766e">Miền quê / Miền núi (农村 / 山区):</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Yên bình, không khí trong lành</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Gần gũi thiên nhiên, gắn kết tình làng nghĩa xóm</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#115e59">Yêu mến quê hương</text>
  </g>
</svg>`;

    case 'bai-10':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-amber-100 dark:border-amber-950/60 bg-gradient-to-r from-amber-50/70 via-orange-50/60 to-yellow-50/70 dark:from-slate-900 dark:via-amber-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#d97706" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">走遍全世界 &bull; HÀNH LÝ DU LỊCH</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#b45309">&bull; 行李 xíngli &bull; 收拾 shōushi</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#b45309">&bull; 背包 bèibāo &bull; 雨伞 yǔsǎn</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#fef3c7" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">长城 Chángchéng (Vạn Lý Trường Thành)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">故宫 Gùgōng (Cố Cung Bắc Kinh)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">兵马俑 bīngmǎyǒng (Binh mã dũng Tây An)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#d97706">天气预报 tiānqì yùbào</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#fcd34d" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#b45309" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">CÂU CHỮ 把 (1), (2) - XỬ LÝ ĐỐI TƯỢNG</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#fffbeb" class="dark:fill-slate-700/60" stroke="#fde68a" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#b45309">S + 把 + O XÁC ĐỊNH + V + NƠI CHỐN/KẾT QUẢ</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#92400e">王老师把那本中文书放在桌子上了。</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#b45309">(Thầy Vương đặt quyển sách đó lên bàn rồi)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">ĐƯA VÀO VỊ TRÍ (BỔ NGỮ XU HƯỚNG)</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">我把雨伞放进背包里了。 (Bỏ ô vào ba lô)</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#64748b">Động từ năng nguyện: 想/要/应该 + 把...</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#d97706" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">LƯU Ý QUAN TRỌNG VỚI CÂU 把</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#b45309">1. Tân ngữ sau 把 phải xác định</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">(这本书, 那件衣服, 雨伞...)</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#fef3c7" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#d97706">2. Động từ không được đứng trơ trọi</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Bắt buộc có thành phần kết quả, nơi chốn</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">hoặc trợ từ '了' đi kèm phía sau</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#b45309">Ước mơ vươn ra biển lớn</text>
  </g>
</svg>`;

    case 'bai-11':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-sky-100 dark:border-sky-950/60 bg-gradient-to-r from-sky-50/70 via-blue-50/60 to-indigo-50/70 dark:from-slate-900 dark:via-sky-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#0284c7" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">看电视了解世界 &bull; TRUYỀN HÌNH</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">&bull; 频道 píndào (kênh truyền hình)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">&bull; 电视台 diànshìtái &bull; 新闻 xīnwén</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#e0f2fe" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">旅游 lǚyóu &bull; 教育 jiàoyù &bull; 体育 tǐyù</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">世界遗产 shìjiè yíchǎn (Di sản TG)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">名胜古迹 míngshèng gǔjì (Di tích)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#0284c7">收看节目 &bull; 开阔眼界</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#7dd3fc" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#0369a1" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">CÂU CHỮ 把 (3), (4) - MẪU COI A LÀ B</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#f0f9ff" class="dark:fill-slate-700/60" stroke="#bae6fd" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#0369a1">MẪU: 把 A 当成 / 看成 B (COI A LÀ B)</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#0284c7">我把电视当成了看世界的窗口。</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#0284c7">如果你不把别人当朋友，别人也不会...</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#fff1f2" class="dark:fill-slate-700/60" stroke="#fecdd3" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#be123c">PHỦ ĐỊNH CỦA CÂU CHỮ 把: 没(有) + 把</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#9f1239">弟弟没有把那杯牛奶喝完。</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#be123c">(Từ phủ định bắt buộc đứng TRƯỚC chữ 把)</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#0284c7" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">GIÁ TRỊ TRI THỨC TRUYỀN HÌNH</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">Cửa sổ nhìn ra thế giới</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Phim tài liệu địa lý, lịch sử phong phú</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#e0f2fe" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0284c7">Cân bằng giải trí &amp; học hỏi</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Chọn lọc kênh khoa học bổ ích</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Học ngoại ngữ qua phim ảnh có phụ đề</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">Trải nghiệm tri thức</text>
  </g>
</svg>`;

    case 'bai-13':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-950/60 bg-gradient-to-r from-emerald-50/70 via-teal-50/60 to-green-50/70 dark:from-slate-900 dark:via-emerald-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#a7f3d0" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#047857" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">导游职业 &bull; HƯỚNG DẪN VIÊN DU LỊCH</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#065f46">&bull; 性格开朗 xìnggé kāilǎng (cởi mở)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#065f46">&bull; 适合 shìhé &bull; 印象 yìnxiàng</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#d1fae5" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">当地风俗习惯 (Phong tục địa phương)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">交通工具: 火车, 飞机, 长途汽车</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">费用 fèiyòng &bull; 节省 jiéshěng (tiết kiệm)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#047857">文化传播的使者</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#6ee7b7" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#065f46" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">LƯỢNG TỪ LẶP LẠI (个个、张张、一件件)</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#ecfdf5" class="dark:fill-slate-700/60" stroke="#a7f3d0" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#047857">1. DẠNG AA: LƯỢNG TỪ + LƯỢNG TỪ + 都</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#065f46">同学们个个都很努力。 (Ai nấy đều cố gắng)</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#065f46">这里的菜样样都好吃。 (Món nào cũng ngon)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">2. DẠNG 一AA: 一 + LƯỢNG TỪ LẶP + DANH TỪ</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">一张张开心的笑脸 (Từng nụ cười rạng rỡ)</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">一件件漂亮的衣服 (Từng bộ áo đẹp)</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#a7f3d0" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#047857" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">ƯỚC MƠ &amp; KỸ NĂNG NGHỀ NGHIỆP</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#065f46">Yêu cầu với nghề hướng dẫn viên:</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Thành thạo ngoại ngữ &bull; Kiến thức sâu rộng</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#d1fae5" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#047857">Kỹ năng giao tiếp &amp; Ứng xử:</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Nhiệt tình, chu đáo, xử lý tình huống linh hoạt</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Quảng bá hình ảnh đất nước mến khách</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#065f46">Tự tin hướng tới tương lai</text>
  </g>
</svg>`;

    case 'bai-14':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-950/60 bg-gradient-to-r from-indigo-50/70 via-blue-50/60 to-purple-50/70 dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#4338ca" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">我要学好外语 &bull; HỌC NGOẠI NGỮ</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#3730a3">&bull; 语法 yǔfǎ &bull; 生词 shēngcí</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#3730a3">&bull; 方法 fāngfǎ &bull; 复习 fùxí</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#e0e7ff" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">克服困难 kèfú kùnnan (Vượt khó)</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">提高能力 tígāo nénglì (Nâng cao)</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">听、说、读、写 (4 kỹ năng toàn diện)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#4338ca">坚持不懈 jiānchí bú xiè</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#a5b4fc" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#3730a3" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">CỤM CHỦ VỊ LÀM ĐỊNH NGỮ VỚI 的</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#eef2ff" class="dark:fill-slate-700/60" stroke="#c7d2fe" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#3730a3">[CỤM CHỦ VỊ] + 的 + DANH TỪ TRUNG TÂM</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#4338ca">我能听懂中国人说的话。</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#4f46e5">('中国人说' là cụm chủ vị bổ nghĩa cho '话')</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">CÁC VÍ DỤ PHỔ BIẾN:</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">妈妈做的菜很好吃。 (Món ăn mẹ nấu)</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">你们去参观的博物馆远吗？</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#4338ca" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">CHIẾN LƯỢC HỌC CHỮ HÁN &amp; NGỮ PHÁP</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#3730a3">Chữ hội ý (会意字):</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">木 + 木 + 木 = 森 (sēn - rừng rậm)</text>
    <text x="20" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">日 + 日 + 日 = 晶 (jīng - sáng lấp lánh)</text>
    <line x1="20" y1="102" x2="210" y2="102" stroke="#e0e7ff" stroke-width="1" />
    <text x="20" y="118" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#4338ca">Học theo cụm và ngữ cảnh:</text>
    <text x="20" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">Chữ Hán &bull; Pinyin &bull; Nghĩa &bull; Đặt câu</text>
    <text x="20" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#3730a3">Học đi đôi với hành</text>
  </g>
</svg>`;

    case 'bai-15':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-violet-100 dark:border-violet-950/60 bg-gradient-to-r from-violet-50/70 via-purple-50/60 to-indigo-50/70 dark:from-slate-900 dark:via-violet-950/30 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(35, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#ddd6fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#7c3aed" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">智能手机 &bull; ĐIỆN THOẠI THÔNG MINH</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#5b21b6">&bull; 功能 gōngnéng &bull; 操作 cāozuò</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#5b21b6">&bull; 浏览网页 liúlǎn &bull; 下载 xiàzài</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ede9fe" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Lợi ích: 便利 biànlì, 学习, 查资料</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Nguy cơ: 过度 guòdù, 依赖 yīlài</text>
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">面对面 miànduìmiàn (trực tiếp)</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#7c3aed">合理使用 hélǐ shǐyòng</text>
  </g>

  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#c4b5fd" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#5b21b6" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">TRẠNG NGỮ CHỈ CÁCH THỨC VỚI 地</text>
    
    <rect x="15" y="48" width="240" height="54" rx="8" fill="#f5f3ff" class="dark:fill-slate-700/60" stroke="#ddd6fe" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#5b21b6">[TÍNH TỪ / CỤM MIÊU TẢ] + 地 + ĐỘNG TỪ</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#7c3aed">他们认真地学习中文。 (Học một cách chăm chỉ)</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#7c3aed">他愉快地参加了活动。 (Vui vẻ tham gia)</text>

    <rect x="15" y="110" width="240" height="54" rx="8" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="126" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">VỊ TRÍ TRONG CÂU:</text>
    <text x="25" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">Trạng ngữ luôn đứng TRƯỚC động từ chính.</text>
    <text x="25" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#6d28d9">Chỉ rõ trạng thái, tâm thế khi thực hiện hành động.</text>
  </g>

  <g transform="translate(575, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#ddd6fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#7c3aed" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">PHÂN BIỆT BỘ BA 的、地、得</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#2563eb">1. 的 + Danh từ (Định ngữ)</text>
    <text x="20" y="72" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">认真学习的学生 (Học sinh chăm học)</text>
    <line x1="20" y1="84" x2="210" y2="84" stroke="#ede9fe" stroke-width="1" />
    <text x="20" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#7c3aed">2. 地 + Động từ (Trạng ngữ)</text>
    <text x="20" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">认真地学习 (Học một cách chăm chỉ)</text>
    <line x1="20" y1="124" x2="210" y2="124" stroke="#ede9fe" stroke-width="1" />
    <text x="20" y="138" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#059669">3. Động từ + 得 + Bổ ngữ</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">学得很好 (Học rất tốt)</text>
  </g>
</svg>`;

    default:
      return '';
  }
}

module.exports = { getChineseLessonSVG };
