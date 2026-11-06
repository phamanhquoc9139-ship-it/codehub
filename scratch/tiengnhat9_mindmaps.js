// tiengnhat9_mindmaps.js
// 17 Bespoke Concept Mindmaps / Infographic SVGs for Tiếng Nhật 9
// Lessons 1 to 13 + Reviews 1 to 4

function getMindmapSVG(unitId) {
  switch (unitId) {
    case 'bai-1':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg-b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff1f2"/><stop offset="1%" stop-color="#ffe4e6"/></linearGradient>
            <linearGradient id="rose-b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e11d48"/><stop offset="1%" stop-color="#be123c"/></linearGradient>
          </defs>
          <rect width="840" height="210" rx="16" fill="url(#bg-b1)" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 1: 外国語の勉強 — QUÁ TRÌNH HỌC NGOẠI NGỮ & DANH TỪ HÓA ĐỘNG TỪ</text>

          <!-- Timeline: N から Vています -->
          <g transform="translate(40, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="url(#rose-b1)"/>
            <text x="180" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">TRỤC THỜI GIAN: N から Vています</text>
            
            <line x1="30" y1="75" x2="330" y2="75" stroke="#cbd5e1" stroke-width="2.5"/>
            <circle cx="60" cy="75" r="7" fill="#e11d48"/>
            <text x="60" y="58" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#be123c">小学生のとき</text>
            <text x="60" y="94" text-anchor="middle" font-size="9" fill="#64748b">(Mốc bắt đầu: から)</text>

            <line x1="60" y1="75" x2="300" y2="75" stroke="#e11d48" stroke-width="3"/>
            <circle cx="300" cy="75" r="7" fill="#0284c7"/>
            <text x="300" y="58" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">今 (Hiện tại)</text>
            <text x="300" y="94" text-anchor="middle" font-size="9" fill="#64748b">Vています (Kéo dài)</text>

            <text x="180" y="120" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#be123c">六年間、日本語を勉強しています。</text>
          </g>

          <!-- Nominalization: Vるのが + Tính từ -->
          <g transform="translate(440, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#be123c"/>
            <text x="180" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">DANH TỪ HÓA: V thể từ điển + のが + Tính từ</text>
            
            <rect x="25" y="45" width="145" height="42" rx="8" fill="#ffe4e6" stroke="#fb7185"/>
            <text x="97" y="64" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">漢字を覚える のが</text>
            <text x="97" y="78" text-anchor="middle" font-size="9" fill="#881337">Việc nhớ chữ Hán</text>

            <text x="185" y="70" font-size="14" font-weight="bold" fill="#be123c">→</text>

            <rect x="205" y="45" width="130" height="42" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
            <text x="270" y="64" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">むずかしい / 楽しい</text>
            <text x="270" y="78" text-anchor="middle" font-size="9" fill="#64748b">Khó / Thú vị</text>

            <text x="180" y="115" text-anchor="middle" font-size="9.5" fill="#475569">💡 Nói suy nghĩ khiêm tốn: ...と思います (Tôi nghĩ rằng)</text>
          </g>
        </svg>
      `;

    case 'bai-2':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg-b2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff1f2"/><stop offset="1%" stop-color="#ffe4e6"/></linearGradient>
          </defs>
          <rect width="840" height="210" rx="16" fill="url(#bg-b2)" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 2: 発表の準備 — PHÂN CÔNG THUYẾT TRÌNH & YÊU CẦU LỊCH SỰ</text>

          <g transform="translate(50, 48)">
            <rect width="220" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="220" height="28" rx="12" fill="#e11d48"/>
            <text x="110" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">MỞ LỜI: 〜ですけど</text>
            <text x="15" y="52" font-size="10" font-weight="bold" fill="#0f172a">• Mở đầu chủ đề mềm mại:</text>
            <text x="15" y="72" font-size="9.5" fill="#be123c">発表の準備ですけど、</text>
            <text x="15" y="90" font-size="9.5" fill="#be123c">だれが何をしますか。</text>
            <text x="15" y="115" font-size="9" fill="#64748b">(Về bài phát biểu, ai làm gì?)</text>
          </g>

          <g transform="translate(310, 48)">
            <rect width="220" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="220" height="28" rx="12" fill="#be123c"/>
            <text x="110" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">KHẢ NĂNG + と思います</text>
            <text x="15" y="52" font-size="10" font-weight="bold" fill="#0f172a">• Nêu khả năng bản thân:</text>
            <text x="15" y="72" font-size="9.5" fill="#0284c7">パソコンが借りられる</text>
            <text x="15" y="90" font-size="9.5" fill="#0284c7">と思います。</text>
            <text x="15" y="115" font-size="9" fill="#64748b">(Tôi nghĩ là mượn được máy tính)</text>
          </g>

          <g transform="translate(570, 48)">
            <rect width="220" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="220" height="28" rx="12" fill="#e11d48"/>
            <text x="110" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">MONG MUỐN: Vてほしい</text>
            <text x="15" y="52" font-size="10" font-weight="bold" fill="#0f172a">• Muốn bạn làm giúp:</text>
            <text x="15" y="72" font-size="9.5" fill="#be123c">予定を変えてほしいです。</text>
            <text x="15" y="92" font-size="9.5" fill="#be123c">原稿を読んでほしいです。</text>
            <text x="15" y="115" font-size="9" fill="#64748b">(Muốn bạn đổi lịch / đọc bản thảo)</text>
          </g>
        </svg>
      `;

    case 'bai-3':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg-b3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff1f2"/><stop offset="1%" stop-color="#ffe4e6"/></linearGradient>
          </defs>
          <rect width="840" height="210" rx="16" fill="url(#bg-b3)" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 3: 写真の説明 — MỆNH ĐỀ BỔ NGHĨA DANH TỪ (ĐỊNH NGỮ TIẾNG NHẬT)</text>

          <g transform="translate(60, 48)">
            <rect width="340" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="340" height="28" rx="12" fill="#e11d48"/>
            <text x="170" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">ĐÃ XẢY RA: Vた + Danh từ</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">Hành động đã hoàn thành bổ nghĩa cho N:</text>
            <rect x="25" y="70" width="290" height="36" rx="8" fill="#fff1f2" stroke="#f43f5e"/>
            <text x="170" y="92" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#be123c">みんなで撮った 写真 (ảnh chụp cùng mn)</text>
            <text x="170" y="122" text-anchor="middle" font-size="9.5" fill="#64748b">きのう食べた ケーキ (chiếc bánh đã ăn hôm qua)</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="340" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="340" height="28" rx="12" fill="#be123c"/>
            <text x="170" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">ĐANG DIỄN RA: Vている + Danh từ</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">Trạng thái/đặc điểm nhận diện người/vật:</text>
            <rect x="25" y="70" width="290" height="36" rx="8" fill="#f0f9ff" stroke="#38bdf8"/>
            <text x="170" y="92" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">となりに座っている 人 (người đang ngồi bên)</text>
            <text x="170" y="122" text-anchor="middle" font-size="9.5" fill="#64748b">眼鏡をかけている 人 (người đang đeo kính)</text>
          </g>
        </svg>
      `;

    case 'on-tap-1':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">ÔN TẬP 1: TỔNG HỢP KIẾN THỨC BÀI 1 — BÀI 3</text>
          
          <g transform="translate(40, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#e11d48"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 1: HỌC NGOẠI NGỮ</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• Nから Vています</text>
            <text x="12" y="68" font-size="9" fill="#475569">Bắt đầu từ mốc nào</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• Vるのが + Tính từ</text>
            <text x="12" y="106" font-size="9" fill="#475569">Danh từ hóa động từ</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 林・始・思・堂・身</text>
          </g>

          <g transform="translate(300, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#be123c"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 2: THUYẾT TRÌNH</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• Khả năng + と思います</text>
            <text x="12" y="68" font-size="9" fill="#475569">Nghĩ rằng có thể làm</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• Vてほしいです</text>
            <text x="12" y="106" font-size="9" fill="#475569">Muốn ai làm gì cho mình</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 集・説・貸・待・助</text>
          </g>

          <g transform="translate(565, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#e11d48"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 3: MIÊU TẢ ẢNH</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• Vた + Danh từ</text>
            <text x="12" y="68" font-size="9" fill="#475569">Việc đã hoàn thành</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• Vている + Danh từ</text>
            <text x="12" y="106" font-size="9" fill="#475569">Đặc điểm, nhận diện</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 所・立・箱・知・終</text>
          </g>
        </svg>
      `;

    case 'bai-4':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 4: 困ったこと — HỎI THĂM, GIẢI THÍCH RẮC RỐI & PHỎNG ĐOÁN</text>

          <g transform="translate(50, 48)">
            <rect width="220" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="220" height="28" rx="12" fill="#e11d48"/>
            <text x="110" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">HỎI THĂM: どうしたんですか</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Nhận thấy nét mặt buồn:</text>
            <text x="15" y="78" font-size="9.5" fill="#be123c">「どうしたんですか。」</text>
            <text x="15" y="105" font-size="9" fill="#64748b">(Có chuyện gì vậy?)</text>
          </g>

          <g transform="translate(310, 48)">
            <rect width="220" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="220" height="28" rx="12" fill="#be123c"/>
            <text x="110" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">GIẢI THÍCH: 〜んです</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Trình bày hoàn cảnh:</text>
            <text x="15" y="78" font-size="9.5" fill="#be123c">さいふがないんです。</text>
            <text x="15" y="105" font-size="9" fill="#64748b">(Tớ bị mất ví tiền rồi.)</text>
          </g>

          <g transform="translate(570, 48)">
            <rect width="220" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="220" height="28" rx="12" fill="#e11d48"/>
            <text x="110" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">PHỎNG ĐOÁN: かもしれません</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Suy đoán nguyên nhân:</text>
            <text x="15" y="78" font-size="9.5" fill="#0284c7">落としたかもしれません。</text>
            <text x="15" y="105" font-size="9" fill="#64748b">(Có thể tớ đã đánh rơi.)</text>
          </g>
        </svg>
      `;

    case 'bai-5':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 5: 料理の食べ方 — LÍ DO LỊCH SỰ (〜ので) & HƯỚNG DẪN CÁCH ĂN (〜てください)</text>

          <g transform="translate(60, 48)">
            <rect width="340" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="340" height="28" rx="12" fill="#e11d48"/>
            <text x="170" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">NÊU NGUYÊN NHÂN LỊCH SỰ: 〜ので</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Khách quan, mềm mỏng hơn から:</text>
            <rect x="25" y="70" width="290" height="36" rx="8" fill="#fff1f2" stroke="#f43f5e"/>
            <text x="170" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">おいしい店があるので、行きませんか。</text>
            <text x="170" y="122" text-anchor="middle" font-size="9" fill="#64748b">(Vì có quán ngon nên chúng mình cùng đi nhé?)</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="340" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="340" height="28" rx="12" fill="#be123c"/>
            <text x="170" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">HƯỚNG DẪN THAO TÁC: Vてください</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Chỉ dẫn các bước thưởng thức món ăn:</text>
            <rect x="25" y="70" width="290" height="36" rx="8" fill="#f0f9ff" stroke="#38bdf8"/>
            <text x="170" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">このたれをつけて 食べてください。</text>
            <text x="170" y="122" text-anchor="middle" font-size="9" fill="#64748b">Hỏi món kiêng: 食べられないものがありますか。</text>
          </g>
        </svg>
      `;

    case 'bai-6':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 6: 特別な日 — TRÌNH TỰ TRƯỚC - SAU (前に / 後で) & ĐỊNH NGHĨA (という)</text>

          <g transform="translate(40, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#e11d48"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">TRÌNH TỰ: Vる前に vs. Vた後で</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#be123c">• Trước khi: Vる + 前に (Thể từ điển!)</text>
            <text x="25" y="75" font-size="9.5" fill="#334155">初詣に行く前に、おせちを食べます。</text>
            <text x="15" y="98" font-size="10" font-weight="bold" fill="#0284c7">• Sau khi: Vた + 後で (Thể quá khứ!)</text>
            <text x="25" y="118" font-size="9.5" fill="#334155">家に帰った後で、おせちを食べます。</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#be123c"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">ĐỊNH NGHĨA TÊN GỌI: N1 という N2</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• N2 có tên gọi là N1:</text>
            <rect x="25" y="70" width="310" height="35" rx="8" fill="#fff1f2" stroke="#fb7185"/>
            <text x="180" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">「バイン・チュン」という 伝統料理</text>
            <text x="180" y="122" text-anchor="middle" font-size="9" fill="#64748b">Hỏi giải thích: それはどんな料理ですか。</text>
          </g>
        </svg>
      `;

    case 'on-tap-2':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">ÔN TẬP 2: TỔNG HỢP KIẾN THỨC BÀI 4 — BÀI 6</text>
          
          <g transform="translate(40, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#e11d48"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 4: VIỆC RẮC RỐI</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• どうしたんですか</text>
            <text x="12" y="68" font-size="9" fill="#475569">〜んです (giải thích)</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• Vたかもしれません</text>
            <text x="12" y="106" font-size="9" fill="#475569">Có thể đã đánh rơi</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 点・試・験・安・員</text>
          </g>

          <g transform="translate(300, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#be123c"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 5: CÁCH ĂN MÓN ĂN</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• Câu thường + ので</text>
            <text x="12" y="68" font-size="9" fill="#475569">Nguyên nhân lịch sự</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• Vてください</text>
            <text x="12" y="106" font-size="9" fill="#475569">Hướng dẫn chấm & ăn</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 牛・野・暑・電・池</text>
          </g>

          <g transform="translate(565, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#e11d48"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 6: NGÀY ĐẶC BIỆT</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• Vる前に / Vた後で</text>
            <text x="12" y="68" font-size="9" fill="#475569">Thứ tự trước và sau</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• N1 という N2</text>
            <text x="12" y="106" font-size="9" fill="#475569">Món ăn tên là Osechi</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 別・米・老・草・王・千</text>
          </g>
        </svg>
      `;

    case 'bai-7':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 7: 自然災害 — THUẬT LẠI TIN TỨC (そうです / によると) & MỤC ĐÍCH (ために)</text>

          <g transform="translate(40, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#e11d48"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">TRUYỀN TIN: 〜によると ... そうです</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Nêu nguồn tin & thuật lại:</text>
            <rect x="25" y="70" width="310" height="35" rx="8" fill="#fff1f2" stroke="#fb7185"/>
            <text x="180" y="92" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#be123c">ニュースによると、地震があったそうです。</text>
            <text x="180" y="122" text-anchor="middle" font-size="9" fill="#64748b">(Theo tin tức, nghe nói đã xảy ra động đất.)</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#be123c"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">MỤC ĐÍCH HÀNH ĐỘNG: Vるために</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Để thực hiện mục đích hỗ trợ:</text>
            <rect x="25" y="70" width="310" height="35" rx="8" fill="#f0f9ff" stroke="#38bdf8"/>
            <text x="180" y="92" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0369a1">物資を送るために、お金を集めませんか。</text>
            <text x="180" y="122" text-anchor="middle" font-size="9" fill="#64748b">(Quyên tiền để gửi đồ cứu trợ nhé?)</text>
          </g>
        </svg>
      `;

    case 'bai-8':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 8: トラブル — THỂ BỊ ĐỘNG (受身形 - UKEMIKEI)</text>

          <g transform="translate(50, 48)">
            <rect width="340" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="340" height="28" rx="12" fill="#e11d48"/>
            <text x="170" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">QUY TẮC BIẾN ĐỔI THỂ BỊ ĐỘNG</text>
            <text x="15" y="55" font-size="10" fill="#0f172a">• Nhóm 1: đuôi hàng 'u' -> hàng 'a' + れる (しかる -> しかられる)</text>
            <text x="15" y="78" font-size="10" fill="#0f172a">• Nhóm 2: bỏ る + られる (ほめる -> ほめられる)</text>
            <text x="15" y="100" font-size="10" fill="#0f172a">• Nhóm 3: する -> される, くる -> こられる</text>
            <text x="15" y="122" font-size="9" font-weight="bold" fill="#be123c">Tác nhân gây ra hành động đi với trợ từ に!</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="350" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="350" height="28" rx="12" fill="#be123c"/>
            <text x="175" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">2 SẮC THÁI CÂU BỊ ĐỘNG</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#047857">1. Được khen thưởng / Mời mọc:</text>
            <text x="25" y="74" font-size="9.5" fill="#047857">先生にほめられました。(Được thầy khen)</text>
            <text x="15" y="98" font-size="10" font-weight="bold" fill="#dc2626">2. Bị hại / Phiền toái (Hại bị động):</text>
            <text x="25" y="118" font-size="9.5" fill="#dc2626">電車で足を踏まれました。(Bị giẫm vào chân)</text>
          </g>
        </svg>
      `;

    case 'bai-9':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 9: 待ち合わせ — PHÂN BIỆT 2 CẤU TRÚC SOUDESU & MITAIDESU</text>

          <g transform="translate(40, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#0284c7"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">TRỰC GIÁC MẮT THẤY: V bỏ ます + そうです</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0369a1">Trông có vẻ sắp... (Dấu hiệu trước mắt):</text>
            <rect x="20" y="70" width="320" height="36" rx="8" fill="#f0f9ff" stroke="#38bdf8"/>
            <text x="180" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">空が暗いです。雨が降りそうです。</text>
            <text x="180" y="122" text-anchor="middle" font-size="9" fill="#64748b">Phủ định: 間に合わなさそうです (Có vẻ không kịp)</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#be123c"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">TRUYỀN TIN NGHE LẠI: Câu thường + そうです</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#be123c">Nghe nói rằng... (Báo đài, người khác kể):</text>
            <rect x="20" y="70" width="320" height="36" rx="8" fill="#fff1f2" stroke="#fb7185"/>
            <text x="180" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">天気予報によると、雨が降るそうです。</text>
            <text x="180" y="122" text-anchor="middle" font-size="9" fill="#64748b">みたいな: イベントをしているみたいです (Có vẻ đang làm)</text>
          </g>
        </svg>
      `;

    case 'on-tap-3':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">ÔN TẬP 3: TỔNG HỢP KIẾN THỨC BÀI 7 — BÀI 9</text>
          
          <g transform="translate(40, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#e11d48"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 7: THIÊN TAI</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• Câu thường + そうです</text>
            <text x="12" y="68" font-size="9" fill="#475569">Thuật lại nghe nói</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• Vるために</text>
            <text x="12" y="106" font-size="9" fill="#475569">Mục đích quyên góp</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 心・送・死・洋・貧・石</text>
          </g>

          <g transform="translate(300, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#be123c"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 8: THỂ BỊ ĐỘNG</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• N1 は N2 に V-bị động</text>
            <text x="12" y="68" font-size="9" fill="#475569">Được khen / Bị mắng</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• Hại bị động</text>
            <text x="12" y="106" font-size="9" fill="#475569">Bị giẫm vào chân</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 質・問・用・止・良</text>
          </g>

          <g transform="translate(565, 48)">
            <rect width="235" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="235" height="26" rx="12" fill="#e11d48"/>
            <text x="117" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 9: HẸN GẶP</text>
            <text x="12" y="50" font-size="9.5" font-weight="bold" fill="#be123c">• V bỏ ます + そうです</text>
            <text x="12" y="68" font-size="9" fill="#475569">Trông có vẻ sắp mưa</text>
            <text x="12" y="88" font-size="9.5" font-weight="bold" fill="#be123c">• みたいです</text>
            <text x="12" y="106" font-size="9" fill="#475569">Có vẻ như đang diễn ra</text>
            <text x="12" y="124" font-size="9" fill="#64748b">Kanji: 事・工・暗・若・界</text>
          </g>
        </svg>
      `;

    case 'bai-10':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 10: そうだん — NGHI VẤN GIÁN TIẾP (かどうか) & NHƯỢNG BỘ QUYẾT TÂM (〜ても)</text>

          <g transform="translate(50, 48)">
            <rect width="350" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="350" height="28" rx="12" fill="#e11d48"/>
            <text x="175" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">NGHI VẤN GIÁN TIẾP: Thể thường + かどうか</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Băn khoăn liệu có... hay không:</text>
            <rect x="20" y="70" width="310" height="35" rx="8" fill="#fff1f2" stroke="#fb7185"/>
            <text x="175" y="92" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#be123c">高校に入れるかどうか 心配です。</text>
            <text x="175" y="122" text-anchor="middle" font-size="9" fill="#64748b">(Lo không biết liệu có vào được cấp 3 hay không)</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="350" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="350" height="28" rx="12" fill="#be123c"/>
            <text x="175" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">NHƯỢNG BỘ QUYẾT TÂM: 〜ても / 〜でも</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Dù khó khăn vẫn không bỏ cuộc:</text>
            <rect x="20" y="70" width="310" height="35" rx="8" fill="#f0f9ff" stroke="#38bdf8"/>
            <text x="175" y="92" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0369a1">試験がむずかしくても、がんばります。</text>
            <text x="175" y="122" text-anchor="middle" font-size="9" fill="#64748b">(Dù kì thi có khó, tôi vẫn sẽ nỗ lực hết mình)</text>
          </g>
        </svg>
      `;

    case 'bai-11':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 11: しょう来の計画 — THAY ĐỔI NĂNG LỰC / THÓI QUEN & DỰ ĐỊNH TƯƠNG LAI</text>

          <g transform="translate(40, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#e11d48"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BIẾN ĐỔI: Vるようになる / Vなくなる</text>
            <text x="15" y="55" font-size="9.5" font-weight="bold" fill="#047857">• Đã trở nên có thể làm:</text>
            <text x="25" y="73" font-size="9.5" fill="#047857">日本語で話せるようになりました。</text>
            <text x="15" y="95" font-size="9.5" font-weight="bold" fill="#dc2626">• Không còn thói quen cũ nữa:</text>
            <text x="25" y="115" font-size="9.5" fill="#dc2626">昼寝をしなくなりました。(Không ngủ trưa nữa)</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="360" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="360" height="28" rx="12" fill="#be123c"/>
            <text x="180" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">DỰ ĐỊNH: V thể ý chí + と思っています</text>
            <text x="15" y="55" font-size="10" font-weight="bold" fill="#0f172a">• Dự định tương lai đã nhen nhóm:</text>
            <rect x="25" y="70" width="310" height="36" rx="8" fill="#f0f9ff" stroke="#38bdf8"/>
            <text x="180" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">プログラミングを習おうと思っています。</text>
            <text x="180" y="122" text-anchor="middle" font-size="9" fill="#64748b">(Tôi đang định sẽ học lập trình máy tính)</text>
          </g>
        </svg>
      `;

    case 'on-tap-4':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">ÔN TẬP 4: TỔNG HỢP KIẾN THỨC BÀI 10 — BÀI 11</text>
          
          <g transform="translate(60, 48)">
            <rect width="340" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="340" height="26" rx="12" fill="#e11d48"/>
            <text x="170" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 10: TƯ VẤN & BĂN KHOĂN</text>
            <text x="15" y="52" font-size="10" font-weight="bold" fill="#be123c">• Thể thường + かどうか (Liệu có... hay không)</text>
            <text x="15" y="72" font-size="9" fill="#475569">Mệnh đề nghi vấn gián tiếp</text>
            <text x="15" y="94" font-size="10" font-weight="bold" fill="#be123c">• 〜ても (Dù... vẫn quyết tâm)</text>
            <text x="15" y="114" font-size="9" fill="#475569">試験がむずかしくてもがんばる</text>
          </g>

          <g transform="translate(440, 48)">
            <rect width="340" height="135" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="340" height="26" rx="12" fill="#be123c"/>
            <text x="170" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 11: KẾ HOẠCH TƯƠNG LAI</text>
            <text x="15" y="52" font-size="10" font-weight="bold" fill="#be123c">• Vるようになる / Vなくなる</text>
            <text x="15" y="72" font-size="9" fill="#475569">Thay đổi năng lực & thói quen</text>
            <text x="15" y="94" font-size="10" font-weight="bold" fill="#be123c">• Vようと思っています</text>
            <text x="15" y="114" font-size="9" fill="#475569">Dự định tương lai (Ý chí)</text>
          </g>
        </svg>
      `;

    case 'bai-12':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 12: ふりかえり — BẢN ĐỒ TỔNG THỂ 11 BÀI CHỦ ĐỀ TIẾNG NHẬT 9</text>
          
          <g transform="translate(40, 48)">
            <rect width="180" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <text x="90" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">ÔN TẬP 1 (BÀI 1-3)</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Từ mốc: NからVています</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Danh từ hóa: Vるのが</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Mong muốn: Vてほしい</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• Định ngữ: VたN / VているN</text>
          </g>

          <g transform="translate(235, 48)">
            <rect width="180" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <text x="90" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">ÔN TẬP 2 (BÀI 4-6)</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Hỏi thăm: どうしたの</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Giải thích: 〜んです</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Nguyên nhân: 〜ので</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• Thứ tự: 前に / 後で</text>
          </g>

          <g transform="translate(430, 48)">
            <rect width="180" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <text x="90" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">ÔN TẬP 3 (BÀI 7-9)</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Nguồn tin: によると</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Truyền tin: 〜そうです</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Bị động: Vられる</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• Phỏng đoán: 降りそう</text>
          </g>

          <g transform="translate(625, 48)">
            <rect width="175" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <text x="87" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">ÔN TẬP 4 (BÀI 10-11)</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Gián tiếp: かどうか</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Nhượng bộ: 〜ても</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Thay đổi: ようになる</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• Dự định: ようと思う</text>
          </g>
        </svg>
      `;

    case 'bai-13':
      return `
        <svg viewBox="0 0 840 210" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="840" height="210" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
          <text x="420" y="26" text-anchor="middle" font-size="13" font-weight="900" fill="#be123c">BÀI 13: 中学のまとめ — TRỤC PHÁT TRIỂN NĂNG LỰC TIẾNG NHẬT 4 NĂM THCS</text>

          <g transform="translate(30, 48)">
            <rect width="180" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="180" height="24" rx="10" fill="#e11d48"/>
            <text x="90" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">LỚP 6: LÀM QUEN</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Bảng chữ cái Kana</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Chào hỏi, số đếm</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Giới thiệu bản thân</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• Cấu trúc です・ます</text>
          </g>

          <g transform="translate(230, 48)">
            <rect width="180" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="180" height="24" rx="10" fill="#be123c"/>
            <text x="90" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">LỚP 7: MỞ RỘNG</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Thể て & Vています</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Cho phép: てもいい</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Cấm đoán: てはいけない</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• So sánh hơn/nhất</text>
          </g>

          <g transform="translate(430, 48)">
            <rect width="180" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="180" height="24" rx="10" fill="#e11d48"/>
            <text x="90" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">LỚP 8: NÂNG CAO</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Thể ngắn (thông thường)</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Thể ない (phải làm)</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Khả năng: ことができる</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• Kinh nghiệm: たことがある</text>
          </g>

          <g transform="translate(630, 48)">
            <rect width="180" height="135" rx="10" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="180" height="24" rx="10" fill="#be123c"/>
            <text x="90" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">LỚP 9: HOÀN THIỆN</text>
            <text x="10" y="45" font-size="9" fill="#0f172a">• Mệnh đề bổ nghĩa N</text>
            <text x="10" y="65" font-size="9" fill="#0f172a">• Thể bị động (受身形)</text>
            <text x="10" y="85" font-size="9" fill="#0f172a">• Truyền tin & Phỏng đoán</text>
            <text x="10" y="105" font-size="9" fill="#0f172a">• Thay đổi & Định hướng vào 10</text>
          </g>
        </svg>
      `;

    default:
      return '';
  }
}

module.exports = { getMindmapSVG };
