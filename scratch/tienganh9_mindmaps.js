// tienganh9_mindmaps.js
// 16 Bespoke Concept Mindmap & Infographic SVGs for Tiếng Anh 9 (Global Success)
// Units 1 to 12 + Reviews 1 to 4

function getMindmapSVG(unitId) {
  switch (unitId) {
    case 'unit-1':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u1-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7" stop-opacity="0.08"/><stop offset="1%" stop-color="#0369a1" stop-opacity="0.02"/></linearGradient>
            <linearGradient id="u1-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="1%" stop-color="#0369a1"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u1-bg)" stroke="#bae6fd" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1">UNIT 1: QUESTION WORD + TO-V & LOCAL COMMUNITY NETWORK</text>
          
          <!-- Center Node -->
          <circle cx="400" cy="140" r="44" fill="url(#u1-blue)" filter="drop-shadow(0 4px 6px rgba(2,132,199,0.3))"/>
          <text x="400" y="136" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">QUESTION</text>
          <text x="400" y="152" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">WORD + TO-V</text>

          <!-- Branch 1: WHAT -->
          <line x1="360" y1="120" x2="180" y2="80" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="4,3"/>
          <rect x="70" y="55" width="200" height="55" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="85" y="76" font-size="12" font-weight="800" fill="#0284c7">WHAT TO DO / BUY</text>
          <text x="85" y="96" font-size="10.5" fill="#475569">"I don't know what to buy for souvenir."</text>

          <!-- Branch 2: HOW -->
          <line x1="360" y1="160" x2="180" y2="200" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="4,3"/>
          <rect x="70" y="175" width="200" height="55" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="85" y="196" font-size="12" font-weight="800" fill="#0284c7">HOW TO MAKE / PRESERVE</text>
          <text x="85" y="216" font-size="10.5" fill="#475569">"Artisans show us how to mold pottery."</text>

          <!-- Branch 3: WHERE -->
          <line x1="440" y1="120" x2="620" y2="80" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="4,3"/>
          <rect x="530" y="55" width="200" height="55" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="545" y="76" font-size="12" font-weight="800" fill="#0284c7">WHERE TO GO / FIND</text>
          <text x="545" y="96" font-size="10.5" fill="#475569">"Tell me where to visit in Van Phuc."</text>

          <!-- Branch 4: WHO -->
          <line x1="440" y1="160" x2="620" y2="200" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="4,3"/>
          <rect x="530" y="175" width="200" height="55" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="545" y="196" font-size="12" font-weight="800" fill="#0284c7">WHO TO CONTACT</text>
          <text x="545" y="216" font-size="10.5" fill="#475569">"Ask the community helper who to call."</text>

          <!-- Bottom Note -->
          <rect x="230" y="245" width="340" height="26" rx="8" fill="#e0f2fe"/>
          <text x="400" y="262" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">⚠️ LƯU Ý QUAN TRỌNG: KHÔNG DÙNG "WHY + TO-V"</text>
        </svg>
      `;

    case 'unit-2':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u2-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7" stop-opacity="0.08"/><stop offset="1%" stop-color="#0369a1" stop-opacity="0.02"/></linearGradient>
            <linearGradient id="u2-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="1%" stop-color="#0369a1"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u2-bg)" stroke="#bae6fd" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1">UNIT 2: DOUBLE COMPARATIVES (SO SÁNH KÉP CÀNG... CÀNG...)</text>

          <!-- Two Scales -->
          <g transform="translate(60, 60)">
            <rect width="320" height="155" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
            <rect width="320" height="32" rx="12" fill="#0284c7"/>
            <text x="160" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">DẠNG 1: THE + COMP..., THE + COMP...</text>
            <text x="20" y="60" font-size="11" font-weight="700" fill="#0f172a">• Hai biến số thay đổi song hành:</text>
            <text x="20" y="82" font-size="11" fill="#0369a1">Tính từ ngắn: The + adj-er, the + adj-er</text>
            <text x="30" y="102" font-size="10.5" fill="#64748b">Ex: The bigger the city, the noisier it is.</text>
            <text x="20" y="124" font-size="11" fill="#0369a1">Tính từ dài: The more + adj, the more + adj</text>
            <text x="30" y="144" font-size="10.5" fill="#64748b">Ex: The more modern, the more convenient.</text>
          </g>

          <g transform="translate(420, 60)">
            <rect width="320" height="155" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
            <rect width="320" height="32" rx="12" fill="#0369a1"/>
            <text x="160" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">DẠNG 2: COMPARATIVE + AND + COMPARATIVE</text>
            <text x="20" y="60" font-size="11" font-weight="700" fill="#0f172a">• Mức độ tăng hoặc giảm dần theo thời gian:</text>
            <text x="20" y="82" font-size="11" fill="#0369a1">Tính từ ngắn: adj-er and adj-er</text>
            <text x="30" y="102" font-size="10.5" fill="#64748b">Ex: The traffic is getting worse and worse.</text>
            <text x="20" y="124" font-size="11" fill="#0369a1">Tính từ dài: more and more + adj</text>
            <text x="30" y="144" font-size="10.5" fill="#64748b">Ex: Living in megacities is more and more costly.</text>
          </g>

          <!-- Key Phrasal verbs in City life -->
          <rect x="60" y="230" width="680" height="36" rx="10" fill="#e0f2fe" stroke="#7dd3fc"/>
          <text x="400" y="253" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">🏙️ Cụm động từ đô thị: cut down on (cắt giảm) | carry out (thực hiện) | come down with (ốm) | hang out with (la cà)</text>
        </svg>
      `;

    case 'unit-3':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u3-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7" stop-opacity="0.08"/><stop offset="1%" stop-color="#0369a1" stop-opacity="0.02"/></linearGradient>
            <linearGradient id="u3-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="1%" stop-color="#0369a1"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u3-bg)" stroke="#bae6fd" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1">UNIT 3: FIRST CONDITIONAL WITH MODAL VERBS (ĐIỀU KIỆN LOẠI 1)</text>

          <!-- Formula block -->
          <rect x="80" y="55" width="640" height="60" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
          <text x="400" y="80" text-anchor="middle" font-size="13" font-weight="900" fill="#0369a1">IF + S + V (Hiện tại đơn) , S + CAN / SHOULD / MUST / MIGHT + V-inf</text>
          <text x="400" y="102" text-anchor="middle" font-size="11" fill="#64748b">Quy tắc vàng: Tuyệt đối KHÔNG dùng "will" trong mệnh đề chứa IF</text>

          <!-- 4 Modal Functions -->
          <g transform="translate(80, 130)">
            <rect width="145" height="100" rx="10" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
            <rect width="145" height="26" rx="10" fill="#0284c7"/>
            <text x="72" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">SHOULD (Lời khuyên)</text>
            <text x="12" y="46" font-size="10" font-weight="700" fill="#0284c7">If you feel stressed,</text>
            <text x="12" y="64" font-size="10" fill="#334155">you should talk to</text>
            <text x="12" y="82" font-size="10" fill="#334155">a school counsellor.</text>
          </g>

          <g transform="translate(245, 130)">
            <rect width="145" height="100" rx="10" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
            <rect width="145" height="26" rx="10" fill="#0369a1"/>
            <text x="72" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">CAN (Khả năng)</text>
            <text x="12" y="46" font-size="10" font-weight="700" fill="#0369a1">If you plan well,</text>
            <text x="12" y="64" font-size="10" fill="#334155">you can finish your</text>
            <text x="12" y="82" font-size="10" fill="#334155">homework on time.</text>
          </g>

          <g transform="translate(410, 130)">
            <rect width="145" height="100" rx="10" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
            <rect width="145" height="26" rx="10" fill="#0284c7"/>
            <text x="72" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">MUST (Bắt buộc)</text>
            <text x="12" y="46" font-size="10" font-weight="700" fill="#0284c7">If you want to pass,</text>
            <text x="12" y="64" font-size="10" fill="#334155">you must avoid all</text>
            <text x="12" y="82" font-size="10" fill="#334155">procrastination.</text>
          </g>

          <g transform="translate(575, 130)">
            <rect width="145" height="100" rx="10" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
            <rect width="145" height="26" rx="10" fill="#0369a1"/>
            <text x="72" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">MIGHT (Xác suất)</text>
            <text x="12" y="46" font-size="10" font-weight="700" fill="#0369a1">If you sleep late,</text>
            <text x="12" y="64" font-size="10" fill="#334155">you might feel very</text>
            <text x="12" y="82" font-size="10" fill="#334155">exhausted in class.</text>
          </g>

          <!-- Bottom Footer -->
          <text x="400" y="258" text-anchor="middle" font-size="11" font-weight="700" fill="#0284c7">💡 Unless = If ... not (Unless you manage time, you cannot achieve a balanced life)</text>
        </svg>
      `;

    case 'review-1':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="r1-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7" stop-opacity="0.1"/><stop offset="1%" stop-color="#0369a1" stop-opacity="0.03"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#r1-bg)" stroke="#7dd3fc" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1">REVIEW 1: THEME 1 – OUR COMMUNITIES (HỆ THỐNG KIẾN THỨC)</text>

          <g transform="translate(50, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#0284c7"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 1: LOCAL COMMUNITY</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Từ để hỏi + to-V:</text>
            <text x="20" y="70" font-size="10" fill="#475569">what / where / how + to V</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Cụm động từ 1:</text>
            <text x="20" y="110" font-size="10" fill="#475569">hand down, look around</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#0284c7">/æ/ vs. /ɑː/ vs. /e/</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#0369a1">• Giao tiếp: Xin giúp đỡ</text>
          </g>

          <g transform="translate(295, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#0369a1"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 2: CITY LIFE</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• So sánh kép:</text>
            <text x="20" y="70" font-size="10" fill="#475569">The more..., the better...</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Cụm động từ 2:</text>
            <text x="20" y="110" font-size="10" fill="#475569">cut down on, carry out</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#0369a1">/aʊ/, /əʊ/, /eɪ/</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#0284c7">• Giao tiếp: Đề nghị giúp đỡ</text>
          </g>

          <g transform="translate(540, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#0284c7"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 3: HEALTHY LIVING</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Điều kiện loại 1:</text>
            <text x="20" y="70" font-size="10" fill="#475569">If + present, can/should + V</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Kĩ năng sống:</text>
            <text x="20" y="110" font-size="10" fill="#475569">time management, balance</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#0284c7">/h/ vs. /r/</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#0369a1">• Giao tiếp: Nhờ nhắc lại</text>
          </g>
        </svg>
      `;

    case 'unit-4':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u4-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e11d48" stop-opacity="0.08"/><stop offset="1%" stop-color="#be123c" stop-opacity="0.02"/></linearGradient>
            <linearGradient id="u4-rose" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e11d48"/><stop offset="1%" stop-color="#be123c"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u4-bg)" stroke="#fecdd3" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c">UNIT 4: PAST CONTINUOUS & WISH FOR THE PRESENT</text>

          <!-- Timeline: Past Continuous -->
          <g transform="translate(60, 55)">
            <rect width="680" height="90" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <text x="20" y="24" font-size="12" font-weight="800" fill="#be123c">1. THÌ QUÁ KHỨ TIẾP DIỄN: S + WAS / WERE + V-ING</text>
            <line x1="40" y1="58" x2="640" y2="58" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="200" cy="58" r="6" fill="#e11d48"/>
            <text x="200" y="44" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">At 8 p.m. yesterday</text>
            <text x="200" y="78" text-anchor="middle" font-size="9.5" fill="#64748b">I was listening to radio</text>

            <rect x="360" y="48" width="120" height="20" rx="4" fill="#ffe4e6" stroke="#fb7185"/>
            <text x="420" y="62" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">While cooking...</text>

            <path d="M 520,38 L 520,78" stroke="#0284c7" stroke-width="3"/>
            <text x="520" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">Interrupted (When it rained)</text>
          </g>

          <!-- Wish for Present -->
          <g transform="translate(60, 160)">
            <rect width="680" height="95" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <text x="20" y="24" font-size="12" font-weight="800" fill="#be123c">2. CẤU TRÚC WISH Ở HIỆN TẠI: S + WISH(ES) + S + V-PAST / WERE / COULD + V</text>
            <text x="20" y="48" font-size="11" fill="#334155">• Diễn tả mong ước trái ngược với hiện tại hoặc khó có thật:</text>
            <text x="35" y="68" font-size="10.5" font-weight="700" fill="#be123c">Reality: I don't live near my grandparents. -> Wish: I wish I lived closer to my grandparents.</text>
            <text x="35" y="86" font-size="10.5" font-weight="700" fill="#0369a1">To be chuẩn học thuật: Dùng "WERE" cho mọi ngôi (She wishes she were a history researcher).</text>
          </g>
        </svg>
      `;

    case 'unit-5':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u5-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e11d48" stop-opacity="0.08"/><stop offset="1%" stop-color="#be123c" stop-opacity="0.02"/></linearGradient>
            <linearGradient id="u5-rose" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e11d48"/><stop offset="1%" stop-color="#be123c"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u5-bg)" stroke="#fecdd3" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c">UNIT 5: PRESENT PERFECT TENSE (HIỆN TẠI HOÀN THÀNH - S + HAVE/HAS + V3)</text>

          <!-- 4 Pillars of Present Perfect -->
          <g transform="translate(60, 55)">
            <rect width="155" height="150" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="155" height="28" rx="12" fill="#e11d48"/>
            <text x="77" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">TRẢI NGHIỆM (Ever/Never)</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#be123c">Kể về kinh nghiệm:</text>
            <text x="12" y="72" font-size="10" fill="#334155">• Have you ever tried kayaking?</text>
            <text x="12" y="105" font-size="10" fill="#334155">• I have never joined a summer camp.</text>
          </g>

          <g transform="translate(235, 55)">
            <rect width="155" height="150" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="155" height="28" rx="12" fill="#be123c"/>
            <text x="77" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">VỪA XẢY RA (Just/Already)</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#be123c">Hành động mới xong:</text>
            <text x="12" y="72" font-size="10" fill="#334155">• She has just completed the test.</text>
            <text x="12" y="105" font-size="10" fill="#334155">• We have already reached the summit.</text>
          </g>

          <g transform="translate(410, 55)">
            <rect width="155" height="150" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="155" height="28" rx="12" fill="#e11d48"/>
            <text x="77" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">CHƯA LÀM (Yet)</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#be123c">Cuối câu phủ định/hỏi:</text>
            <text x="12" y="72" font-size="10" fill="#334155">• They haven't announced scores yet.</text>
            <text x="12" y="105" font-size="10" fill="#334155">• Have you eaten breakfast yet?</text>
          </g>

          <g transform="translate(585, 55)">
            <rect width="155" height="150" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="155" height="28" rx="12" fill="#be123c"/>
            <text x="77" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">KÉO DÀI (Since / For)</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#be123c">Bắt đầu ở quá khứ:</text>
            <text x="12" y="72" font-size="10" fill="#334155">• since + mốc thời gian (since 2020)</text>
            <text x="12" y="105" font-size="10" fill="#334155">• for + khoảng thời gian (for 5 years)</text>
          </g>

          <!-- Caution banner -->
          <rect x="60" y="220" width="680" height="35" rx="10" fill="#fff1f2" stroke="#f43f5e"/>
          <text x="400" y="242" text-anchor="middle" font-size="11" font-weight="700" fill="#be123c">⚠️ CẢNH BÁO: Khi có mốc quá khứ rõ ràng (yesterday, last year, ago) BẮT BUỘC dùng Quá khứ đơn!</text>
        </svg>
      `;

    case 'unit-6':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u6-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e11d48" stop-opacity="0.08"/><stop offset="1%" stop-color="#be123c" stop-opacity="0.02"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u6-bg)" stroke="#fecdd3" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c">UNIT 6: VERBS FOLLOWED BY TO-INFINITIVE OR V-ING</text>

          <g transform="translate(60, 55)">
            <rect width="210" height="195" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#e11d48"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">NHÓM 1: ĐỘNG TỪ + TO-V</text>
            <text x="12" y="50" font-size="10.5" font-weight="700" fill="#0f172a">• Dự định, mong muốn, quyết định:</text>
            <text x="12" y="70" font-size="10.5" fill="#be123c">want, hope, decide, plan, promise, agree, refuse, expect</text>
            <text x="12" y="105" font-size="10" font-weight="bold" fill="#334155">Ví dụ:</text>
            <text x="12" y="125" font-size="10" fill="#475569">• We decided to renovate the old thatched house.</text>
            <text x="12" y="155" font-size="10" fill="#475569">• He promised to visit his hometown.</text>
          </g>

          <g transform="translate(295, 55)">
            <rect width="210" height="195" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#be123c"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">NHÓM 2: ĐỘNG TỪ + V-ING</text>
            <text x="12" y="50" font-size="10.5" font-weight="700" fill="#0f172a">• Sở thích, tránh né, gợi ý:</text>
            <text x="12" y="70" font-size="10.5" fill="#be123c">enjoy, avoid, suggest, consider, practice, finish, mind</text>
            <text x="12" y="105" font-size="10" font-weight="bold" fill="#334155">Ví dụ:</text>
            <text x="12" y="125" font-size="10" fill="#475569">• Children enjoy playing folk games.</text>
            <text x="12" y="155" font-size="10" fill="#475569">• Avoid using smartphones too late.</text>
          </g>

          <g transform="translate(530, 55)">
            <rect width="210" height="195" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#e11d48"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">NHÓM 3: ĐỔI NGHĨA THEO DẠNG</text>
            <text x="10" y="50" font-size="10" font-weight="bold" fill="#be123c">stop to do vs. stop doing:</text>
            <text x="10" y="68" font-size="9.5" fill="#475569">• Dừng lại để làm vs. Bỏ hẳn việc đang làm</text>
            <text x="10" y="90" font-size="10" font-weight="bold" fill="#be123c">remember to do vs. remember doing:</text>
            <text x="10" y="108" font-size="9.5" fill="#475569">• Nhớ phải làm vs. Nhớ đã làm trong QK</text>
            <text x="10" y="130" font-size="10" font-weight="bold" fill="#be123c">forget to do vs. forget doing:</text>
            <text x="10" y="148" font-size="9.5" fill="#475569">• Quên làm vs. Quên việc đã từng làm</text>
            <text x="10" y="170" font-size="10" font-weight="bold" fill="#be123c">try to do vs. try doing (cố gắng vs. thử)</text>
          </g>
        </svg>
      `;

    case 'review-2':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="r2-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e11d48" stop-opacity="0.1"/><stop offset="1%" stop-color="#be123c" stop-opacity="0.03"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#r2-bg)" stroke="#fda4af" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c">REVIEW 2: THEME 2 – OUR HERITAGE (HỆ THỐNG KIẾN THỨC)</text>

          <g transform="translate(50, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#e11d48"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 4: PAST TRADITIONS</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Quá khứ tiếp diễn:</text>
            <text x="20" y="70" font-size="10" fill="#475569">was/were + V-ing</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Wish hiện tại:</text>
            <text x="20" y="110" font-size="10" fill="#475569">wish + S + V-past / were</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#e11d48">/m/ vs. /l/</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#be123c">• Giao tiếp: Cảm ơn & Đáp lại</text>
          </g>

          <g transform="translate(295, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#be123c"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 5: OUR EXPERIENCES</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Hiện tại hoàn thành:</text>
            <text x="20" y="70" font-size="10" fill="#475569">have/has + V3/ed</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Dấu hiệu nhận biết:</text>
            <text x="20" y="110" font-size="10" fill="#475569">ever, never, just, yet, since, for</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#be123c">/j/ vs. /w/</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#e11d48">• Giao tiếp: Xin lỗi & Đáp lại</text>
          </g>

          <g transform="translate(540, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#e11d48"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 6: THEN AND NOW</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Dạng động từ:</text>
            <text x="20" y="70" font-size="10" fill="#475569">Verb + to-V vs. Verb + V-ing</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Các cặp đổi nghĩa:</text>
            <text x="20" y="110" font-size="10" fill="#475569">stop, remember, forget, try</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#e11d48">/fl/ vs. /fr/</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#be123c">• Giao tiếp: Hứa hẹn & Đáp lại</text>
          </g>
        </svg>
      `;

    case 'unit-7':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u7-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.08"/><stop offset="1%" stop-color="#047857" stop-opacity="0.02"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u7-bg)" stroke="#a7f3d0" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#047857">UNIT 7: REPORTED SPEECH FOR YES/NO QUESTIONS (CÂU TƯỜNG THUẬT)</text>

          <!-- Direct to Indirect Diagram -->
          <g transform="translate(60, 55)">
            <rect width="320" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="320" height="30" rx="12" fill="#059669"/>
            <text x="160" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">CÂU TRỰC TIẾP (DIRECT QUESTION)</text>
            <text x="20" y="55" font-size="11" font-weight="700" fill="#065f46">Mẫu câu hỏi trực tiếp Yes/No:</text>
            <text x="20" y="75" font-size="10.5" fill="#334155">"Are you ready to explore the cave?"</text>
            <text x="20" y="95" font-size="10.5" fill="#334155">"Have you visited Ha Long Bay before?"</text>
            <text x="20" y="125" font-size="10.5" font-weight="bold" fill="#dc2626">• Có dấu ngoặc kép, đảo trợ động từ lên đầu</text>
          </g>

          <!-- Transition Arrow -->
          <path d="M 395,130 L 415,130" stroke="#059669" stroke-width="4" marker-end="url(#arrow)"/>
          <circle cx="405" cy="130" r="16" fill="#059669"/>
          <text x="405" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">→</text>

          <g transform="translate(430, 55)">
            <rect width="320" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="320" height="30" rx="12" fill="#047857"/>
            <text x="160" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">CÂU GIÁN TIẾP (REPORTED SPEECH)</text>
            <text x="20" y="55" font-size="11" font-weight="700" fill="#065f46">Mẫu: S + asked + (O) + if / whether + S + V</text>
            <text x="20" y="75" font-size="10.5" fill="#047857">He asked me IF I was ready to explore...</text>
            <text x="20" y="95" font-size="10.5" fill="#047857">She asked WHETHER I had visited...</text>
            <text x="20" y="125" font-size="10.5" font-weight="bold" fill="#059669">✓ Đổi trật tự khẳng định, lùi thì, BỎ dấu (?) </text>
          </g>

          <rect x="60" y="220" width="690" height="36" rx="10" fill="#ecfdf5" stroke="#a7f3d0"/>
          <text x="405" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">🌿 4 Bước chuyển: (1) asked if/whether -> (2) Đổi đại từ -> (3) Lùi thì động từ -> (4) Đổi thời gian/nơi chốn</text>
        </svg>
      `;

    case 'unit-8':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u8-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.08"/><stop offset="1%" stop-color="#047857" stop-opacity="0.02"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u8-bg)" stroke="#a7f3d0" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#047857">UNIT 8: RELATIVE PRONOUNS (ĐẠI TỪ QUAN HỆ TRONG DU LỊCH)</text>

          <g transform="translate(60, 55)">
            <rect width="130" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="130" height="28" rx="12" fill="#059669"/>
            <text x="65" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">WHO</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#047857">Người (Person):</text>
            <text x="12" y="75" font-size="9.5" fill="#334155">• The tour guide who led us was very humorous.</text>
            <text x="12" y="125" font-size="9.5" fill="#64748b">(Làm chủ ngữ hoặc tân ngữ)</text>
          </g>

          <g transform="translate(205, 55)">
            <rect width="130" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="130" height="28" rx="12" fill="#047857"/>
            <text x="65" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">WHICH</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#047857">Vật / Sự việc:</text>
            <text x="12" y="75" font-size="9.5" fill="#334155">• We booked a package tour which was cheap.</text>
            <text x="12" y="125" font-size="9.5" fill="#64748b">(Thay thế danh từ đồ vật, tour)</text>
          </g>

          <g transform="translate(350, 55)">
            <rect width="130" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="130" height="28" rx="12" fill="#059669"/>
            <text x="65" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">THAT</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#047857">Thay who & which:</text>
            <text x="12" y="75" font-size="9.5" fill="#334155">• The resort that we stayed at was luxury.</text>
            <text x="12" y="125" font-size="9.5" font-weight="bold" fill="#dc2626">(CẤM sau dấu phẩy và giới từ)</text>
          </g>

          <g transform="translate(495, 55)">
            <rect width="130" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="130" height="28" rx="12" fill="#047857"/>
            <text x="65" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">WHOSE</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#047857">Sở hữu (Possessive):</text>
            <text x="12" y="75" font-size="9.5" fill="#334155">• The tourist whose luggage was lost got help.</text>
            <text x="12" y="125" font-size="9.5" fill="#64748b">(whose + Noun)</text>
          </g>

          <g transform="translate(640, 55)">
            <rect width="130" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="130" height="28" rx="12" fill="#059669"/>
            <text x="65" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">WHERE</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#047857">Nơi chốn (Place):</text>
            <text x="12" y="75" font-size="9.5" fill="#334155">• Da Nang is the city where I was born.</text>
            <text x="12" y="125" font-size="9.5" fill="#64748b">(= in / at which)</text>
          </g>

          <!-- Stress box -->
          <rect x="60" y="220" width="710" height="36" rx="10" fill="#ecfdf5" stroke="#a7f3d0"/>
          <text x="415" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">🎯 Trọng âm đuôi -ic và -ious: Luôn rơi vào âm tiết NGAY TRƯỚC nó (his'toric, ro'mantic, de'licious, mys'terious)</text>
        </svg>
      `;

    case 'unit-9':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u9-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.08"/><stop offset="1%" stop-color="#047857" stop-opacity="0.02"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u9-bg)" stroke="#a7f3d0" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#047857">UNIT 9: DEFINING RELATIVE CLAUSES & WORLD ENGLISHES</text>

          <g transform="translate(60, 55)">
            <rect width="320" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="320" height="30" rx="12" fill="#059669"/>
            <text x="160" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">MỆNH ĐỀ XÁC ĐỊNH (DEFINING)</text>
            <text x="16" y="55" font-size="11" font-weight="700" fill="#065f46">• Cung cấp thông tin thiết yếu:</text>
            <text x="16" y="75" font-size="10.5" fill="#334155">Nếu bỏ mệnh đề, câu sẽ tối nghĩa hoặc thiếu thông tin.</text>
            <text x="16" y="100" font-size="11" font-weight="700" fill="#065f46">• Quy tắc dấu câu:</text>
            <text x="16" y="120" font-size="10.5" fill="#dc2626">KHÔNG BAO GIỜ đặt giữa hai dấu phẩy.</text>
            <text x="16" y="140" font-size="10.5" fill="#059669">• Dùng who, which, that linh hoạt.</text>
          </g>

          <g transform="translate(420, 55)">
            <rect width="320" height="150" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="320" height="30" rx="12" fill="#047857"/>
            <text x="160" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">QUY TẮC LƯỢC BỎ ĐẠI TỪ (ZERO RELATIVE)</text>
            <text x="16" y="55" font-size="11" font-weight="700" fill="#065f46">• ĐƯỢC BỎ khi đại từ làm TÂN NGỮ:</text>
            <text x="24" y="75" font-size="10" fill="#334155">The language app (which) I installed is great.</text>
            <text x="24" y="95" font-size="10" fill="#047857">-> 'which' là tân ngữ của 'installed' -> Bỏ được!</text>
            <text x="16" y="120" font-size="11" font-weight="700" fill="#dc2626">• KHÔNG ĐƯỢC BỎ khi đại từ làm CHỦ NGỮ:</text>
            <text x="24" y="140" font-size="10" fill="#334155">The teacher who taught us -> Không thể bỏ 'who'.</text>
          </g>

          <rect x="60" y="220" width="680" height="36" rx="10" fill="#ecfdf5" stroke="#a7f3d0"/>
          <text x="400" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">🌐 Trọng âm đuôi -ion và -ity: Rơi vào âm tiết đứng trước (cele'bration, pol'lution, di'versity, a'bility)</text>
        </svg>
      `;

    case 'review-3':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="r3-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.1"/><stop offset="1%" stop-color="#047857" stop-opacity="0.03"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#r3-bg)" stroke="#6ee7b7" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#047857">REVIEW 3: THEME 3 – OUR WORLD (HỆ THỐNG KIẾN THỨC)</text>

          <g transform="translate(50, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#059669"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 7: NATURAL WONDERS</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Reported Yes/No:</text>
            <text x="20" y="70" font-size="10" fill="#475569">asked + if/whether + S + V</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Địa hình & Hang động:</text>
            <text x="20" y="110" font-size="10" fill="#475569">karst, stalactite, canyon</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#059669">/sl/ vs. /sn/</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#047857">• Giao tiếp: Xin phép & Đáp lại</text>
          </g>

          <g transform="translate(295, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#047857"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 8: TOURISM</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Đại từ quan hệ:</text>
            <text x="20" y="70" font-size="10" fill="#475569">who, which, that, whose, where</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Trọng âm từ:</text>
            <text x="20" y="110" font-size="10" fill="#475569">Đuôi -ic và -ious</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Du lịch bền vững:</text>
            <text x="20" y="150" font-size="10" fill="#047857">package tour, itinerary</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#059669">• Giao tiếp: Diễn đạt nghĩa vụ</text>
          </g>

          <g transform="translate(540, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#059669"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 9: WORLD ENGLISHES</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Mệnh đề xác định:</text>
            <text x="20" y="70" font-size="10" fill="#475569">Defining relative clauses</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Trọng âm từ:</text>
            <text x="20" y="110" font-size="10" fill="#475569">Đuôi -ion và -ity</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Tiếng Anh toàn cầu:</text>
            <text x="20" y="150" font-size="10" fill="#059669">lingua franca, borrowed words</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#047857">• Giao tiếp: Chúc may mắn</text>
          </g>
        </svg>
      `;

    case 'unit-10':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u10-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4f46e5" stop-opacity="0.08"/><stop offset="1%" stop-color="#4338ca" stop-opacity="0.02"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u10-bg)" stroke="#c7d2fe" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#4338ca">UNIT 10: NON-DEFINING RELATIVE CLAUSES & PLANET EARTH</text>

          <g transform="translate(60, 55)">
            <rect width="320" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="320" height="30" rx="12" fill="#4f46e5"/>
            <text x="160" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">ĐẶC ĐIỂM MỆNH ĐỀ KHÔNG XÁC ĐỊNH</text>
            <text x="16" y="55" font-size="11" font-weight="700" fill="#312e81">• Bổ sung thông tin phụ (Extra info):</text>
            <text x="16" y="75" font-size="10.5" fill="#334155">Danh từ đứng trước đã quá rõ (tên riêng, có this/that/my).</text>
            <text x="16" y="100" font-size="11" font-weight="700" fill="#4f46e5">• Dấu phẩy BẮT BUỘC:</text>
            <text x="16" y="120" font-size="10.5" fill="#475569">Ngăn cách với mệnh đề chính bằng 2 dấu phẩy.</text>
            <text x="16" y="140" font-size="10.5" fill="#312e81">Ex: The Amazon, which is huge, is endangered.</text>
          </g>

          <g transform="translate(420, 55)">
            <rect width="320" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="320" height="30" rx="12" fill="#dc2626"/>
            <text x="160" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">2 ĐIỀU CẤM KỴ TUYỆT ĐỐI ⛔</text>
            <text x="16" y="55" font-size="11" font-weight="700" fill="#dc2626">1. TUYỆT ĐỐI KHÔNG DÙNG "THAT":</text>
            <text x="24" y="75" font-size="10.5" fill="#334155">Không bao giờ dùng "that" sau dấu phẩy.</text>
            <text x="24" y="95" font-size="10.5" fill="#dc2626">Sai: Cat Ba, that is an island, is scenic. (X)</text>
            <text x="16" y="120" font-size="11" font-weight="700" fill="#dc2626">2. TUYỆT ĐỐI KHÔNG LƯỢC BỎ ĐẠI TỪ:</text>
            <text x="24" y="140" font-size="10.5" fill="#334155">Dù làm tân ngữ, vẫn phải giữ nguyên who/which.</text>
          </g>

          <rect x="60" y="220" width="680" height="36" rx="10" fill="#eef2ff" stroke="#c7d2fe"/>
          <text x="400" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#4338ca">🌍 Nhịp điệu câu (Rhythm): Nhấn Content words (danh từ, động từ) và lướt nhẹ Structure words (mạo từ, giới từ)</text>
        </svg>
      `;

    case 'unit-11':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u11-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4f46e5" stop-opacity="0.08"/><stop offset="1%" stop-color="#4338ca" stop-opacity="0.02"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u11-bg)" stroke="#c7d2fe" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#4338ca">UNIT 11: STRUCTURES WITH SUGGEST / ADVISE / RECOMMEND</text>

          <g transform="translate(60, 55)">
            <rect width="210" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#4f46e5"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">SUGGEST</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#312e81">• suggest + V-ing:</text>
            <text x="20" y="70" font-size="10" fill="#475569">suggest backing up files</text>
            <text x="12" y="95" font-size="10.5" font-weight="700" fill="#312e81">• suggest (that) S (should) V:</text>
            <text x="20" y="115" font-size="10" fill="#475569">suggest we should upgrade</text>
            <text x="12" y="138" font-size="10" font-weight="bold" fill="#dc2626">⛔ KHÔNG DÙNG: suggest sb to V</text>
          </g>

          <g transform="translate(295, 55)">
            <rect width="210" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#4338ca"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">ADVISE</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#312e81">• advise sb to V:</text>
            <text x="20" y="70" font-size="10" fill="#475569">advise students to update</text>
            <text x="12" y="95" font-size="10.5" font-weight="700" fill="#312e81">• advise + V-ing:</text>
            <text x="20" y="115" font-size="10" fill="#475569">advise limiting screen time</text>
            <text x="12" y="138" font-size="10" font-weight="bold" fill="#4338ca">✓ Đi được cả 2 cấu trúc trên</text>
          </g>

          <g transform="translate(530, 55)">
            <rect width="210" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#4f46e5"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">RECOMMEND</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#312e81">• recommend + V-ing:</text>
            <text x="20" y="70" font-size="10" fill="#475569">recommend buying a case</text>
            <text x="12" y="95" font-size="10.5" font-weight="700" fill="#312e81">• recommend that S (should) V:</text>
            <text x="20" y="115" font-size="10" fill="#475569">recommend that he install AI</text>
            <text x="12" y="138" font-size="10" font-weight="bold" fill="#4f46e5">✓ Dùng nhiều trong công nghệ</text>
          </g>

          <rect x="60" y="220" width="680" height="36" rx="10" fill="#eef2ff" stroke="#c7d2fe"/>
          <text x="400" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#4338ca">💻 Trọng âm câu (Sentence Stress): Nhấn vào từ mang thông tin mới để làm nổi bật thông điệp chính</text>
        </svg>
      `;

    case 'unit-12':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="u12-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4f46e5" stop-opacity="0.08"/><stop offset="1%" stop-color="#4338ca" stop-opacity="0.02"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#u12-bg)" stroke="#c7d2fe" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#4338ca">UNIT 12: ADVERBIAL CLAUSES OF CONCESSION, RESULT, AND REASON</text>

          <g transform="translate(60, 55)">
            <rect width="210" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#4f46e5"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">NHƯỢNG BỘ (CONCESSION)</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#312e81">• Although / Even though + S + V</text>
            <text x="12" y="72" font-size="9.5" fill="#475569">Although the job is demanding,...</text>
            <text x="12" y="95" font-size="10.5" font-weight="700" fill="#312e81">• Despite / In spite of + N / V-ing</text>
            <text x="12" y="115" font-size="9.5" fill="#475569">Despite the pressure, she smiled.</text>
            <text x="12" y="138" font-size="9.5" font-weight="bold" fill="#dc2626">⛔ KHÔNG DÙNG although & but cùng câu</text>
          </g>

          <g transform="translate(295, 55)">
            <rect width="210" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#4338ca"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">KẾT QUẢ (RESULT)</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#312e81">• so + Clause (Vì vậy...)</text>
            <text x="12" y="72" font-size="9.5" fill="#475569">She trained hard, so she got hired.</text>
            <text x="12" y="95" font-size="10.5" font-weight="700" fill="#312e81">• so + Adj + that + Clause</text>
            <text x="12" y="115" font-size="9.5" fill="#475569">It was so hard that we needed help.</text>
            <text x="12" y="138" font-size="10" font-weight="bold" fill="#4338ca">• such + (a/an) + Adj + N + that</text>
          </g>

          <g transform="translate(530, 55)">
            <rect width="210" height="150" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="28" rx="12" fill="#4f46e5"/>
            <text x="105" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">NGUYÊN NHÂN (REASON)</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#312e81">• Because / Since / As + S + V</text>
            <text x="12" y="72" font-size="9.5" fill="#475569">Because he loves robotics,...</text>
            <text x="12" y="95" font-size="10.5" font-weight="700" fill="#312e81">• Because of / Due to + N / V-ing</text>
            <text x="12" y="115" font-size="9.5" fill="#475569">Due to his tireless efforts,...</text>
            <text x="12" y="138" font-size="10" font-weight="bold" fill="#4f46e5">✓ Phân biệt Clause vs. Noun phrase</text>
          </g>

          <rect x="60" y="220" width="680" height="36" rx="10" fill="#eef2ff" stroke="#c7d2fe"/>
          <text x="400" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#4338ca">🎯 Ngữ điệu câu trần thuật hỏi: LÊN GIỌNG Ở CUỐI CÂU (↗) để xác nhận hoặc biểu thị sự ngạc nhiên</text>
        </svg>
      `;

    case 'review-4':
      return `
        <svg viewBox="0 0 800 280" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="r4-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4f46e5" stop-opacity="0.1"/><stop offset="1%" stop-color="#4338ca" stop-opacity="0.03"/></linearGradient>
          </defs>
          <rect width="800" height="280" rx="16" fill="url(#r4-bg)" stroke="#a5b4fc" stroke-width="1.5"/>
          <text x="400" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="#4338ca">REVIEW 4: THEME 4 – VISIONS OF THE FUTURE (HỆ THỐNG KIẾN THỨC)</text>

          <g transform="translate(50, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#4f46e5"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 10: PLANET EARTH</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Mệnh đề không xác định:</text>
            <text x="20" y="70" font-size="10" fill="#475569">Có dấu phẩy, cấm dùng that</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Hệ sinh thái:</text>
            <text x="20" y="110" font-size="10" fill="#475569">flora & fauna, food chain</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#4f46e5">Nhịp điệu câu (Rhythm)</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#4338ca">• Giao tiếp: Thuyết phục ai đó</text>
          </g>

          <g transform="translate(295, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#4338ca"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 11: SMART DEVICES</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Khuyên & Đề xuất:</text>
            <text x="20" y="70" font-size="10" fill="#475569">suggest, advise, recommend</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Công nghệ số:</text>
            <text x="20" y="110" font-size="10" fill="#475569">AI, storage, backup</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#4338ca">Trọng âm câu (Stress)</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#4f46e5">• Giao tiếp: Kiểm tra sự hiểu</text>
          </g>

          <g transform="translate(540, 60)">
            <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.5"/>
            <rect width="210" height="30" rx="12" fill="#4f46e5"/>
            <text x="105" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">UNIT 12: CAREER CHOICES</text>
            <text x="12" y="52" font-size="10.5" font-weight="700" fill="#0f172a">• Mệnh đề trạng ngữ:</text>
            <text x="20" y="70" font-size="10" fill="#475569">concession, result, reason</text>
            <text x="12" y="92" font-size="10.5" font-weight="700" fill="#0f172a">• Thị trường việc làm:</text>
            <text x="20" y="110" font-size="10" fill="#475569">soft skills, vocational, AI</text>
            <text x="12" y="132" font-size="10.5" font-weight="700" fill="#0f172a">• Phát âm:</text>
            <text x="20" y="150" font-size="10" fill="#4f46e5">Statements as questions (↗)</text>
            <text x="12" y="172" font-size="10.5" font-weight="700" fill="#4338ca">• Giao tiếp: Bày tỏ hi vọng</text>
          </g>
        </svg>
      `;

    default:
      return '';
  }
}

module.exports = { getMindmapSVG };
