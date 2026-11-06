const fs = require('fs');
const path = require('path');
const { unitsData } = require('./data_tiengduc6.js');

console.log("Generating Tieng Duc 6 with exact Tieng Anh 6 UI...");

// 40 questions for Trang Nguyen German 6 Competition
const examQuestions = [
  { q: "Mạo từ xác định cho danh từ giống đực (Maskulinum) ở cách Nominativ (Cách 1) là:", opts: ["der", "die", "das", "den"], ans: 0 },
  { q: "Mạo từ bất định của danh từ giống đực ở cách Akkusativ (Cách 4) là gì?", opts: ["einen", "ein", "eine", "einem"], ans: 0 },
  { q: "Câu nào dùng để hỏi 'Bạn làm gì trong giờ ra chơi?'", opts: ["Was machst du in der Pause?", "Wie geht es dir in der Schule?", "Wo ist das Klassenzimmer?", "Welches Fach magst du?"], ans: 0 },
  { q: "Động từ 'warten auf' (chờ đợi ai/cái gì) đòi hỏi danh từ đi sau ở cách nào?", opts: ["Akkusativ (Cách 4)", "Dativ (Cách 3)", "Nominativ (Cách 1)", "Genitiv (Cách 2)"], ans: 0 },
  { q: "Điền giới từ và mạo từ thích hợp: 'Ich nehme _____ (der Tanzclub) teil.'", opts: ["am Tanzclub", "im Tanzclub", "auf dem Tanzclub", "für den Tanzclub"], ans: 0 },
  { q: "Từ nào trong tiếng Đức có nghĩa là 'làm đồ thủ công'?", opts: ["basteln", "zeichnen", "schwimmen", "spazieren gehen"], ans: 0 },
  { q: "Trong mệnh đề phụ với liên từ 'weil' (bởi vì), động từ chia sẽ đứng ở vị trí nào?", opts: ["Ở cuối câu", "Ở vị trí thứ 2", "Ở vị trí đầu câu", "Ngay sau liên từ weil"], ans: 0 },
  { q: "Chọn câu có cấu trúc đúng với liên từ 'weil':", opts: ["Wir basteln oft zusammen, weil er das sehr gut kann.", "Wir basteln oft zusammen, weil kann er das sehr gut.", "Weil wir basteln oft zusammen er kann das gut.", "Wir basteln weil oft zusammen er das kann."], ans: 0 },
  { q: "Liên từ nào biểu thị nguyên nhân mà vị trí động từ trong câu KHÔNG bị đảo xuống cuối (liên từ đứng ở vị trí 0)?", opts: ["denn", "weil", "deshalb", "da"], ans: 0 },
  { q: "Liên từ kết quả nào yêu cầu đảo trợ động từ/động từ lên vị trí thứ 2 ngay sau nó?", opts: ["deshalb", "weil", "denn", "und"], ans: 0 },
  { q: "Từ nào sau đây là danh từ số nhiều của 'das Buch' (quyển sách)?", opts: ["die Bücher", "die Buche", "die Bucher", "die Büchern"], ans: 0 },
  { q: "Giới từ 2 cách (Wechselpräpositionen) trả lời cho câu hỏi 'Wo?' (Ở đâu?) đòi hỏi cách nào?", opts: ["Dativ (Cách 3)", "Akkusativ (Cách 4)", "Nominativ (Cách 1)", "Genitiv (Cách 2)"], ans: 0 },
  { q: "Điền dạng đúng của mạo từ ở Dativ: 'Das Regal hängt über _____ (der Schreibtisch).'", opts: ["dem Schreibtisch", "den Schreibtisch", "der Schreibtisch", "des Schreibtisches"], ans: 0 },
  { q: "Động từ chỉ trạng thái 'nằm' trên mặt phẳng trong tiếng Đức là:", opts: ["liegen", "legen", "stehen", "stellen"], ans: 0 },
  { q: "Đại từ nhân xưng 'du' (bạn) khi chuyển sang cách Dativ (Cách 3) có dạng là:", opts: ["dir", "dich", "dein", "du"], ans: 0 },
  { q: "Động từ nào sau đây luôn đòi hỏi tân ngữ ở cách 3 (Dativ)?", opts: ["gratulieren (chúc mừng)", "kaufen (mua)", "besuchen (thăm)", "sehen (nhìn thấy)"], ans: 0 },
  { q: "Điền đại từ thích hợp: 'Das Hemd gefällt _____ (tôi) sehr gut.'", opts: ["mir", "mich", "mein", "ich"], ans: 0 },
  { q: "Cách nói ngày tháng 'Vào ngày 15 tháng 5' trong tiếng Đức là:", opts: ["am 15. Mai", "im 15. Mai", "an dem 15 Mai", "auf 15. Mai"], ans: 0 },
  { q: "Thức mệnh lệnh (Imperativ) ở ngôi 'du' của động từ 'nehmen' (lấy) là:", opts: ["Nimm!", "Nehm!", "Nehme!", "Nehmt!"], ans: 0 },
  { q: "Từ nào trong tiếng Đức chỉ đơn vị đo lường 'cốc, ly'?", opts: ["das Glas / die Tasse", "die Flasche", "das Stück", "die Packung"], ans: 0 },
  { q: "Cấu trúc hỏi giá tiền 'Cái này giá bao nhiêu?' là:", opts: ["Wie viel kostet das?", "Wie viele ist das?", "Wie schmeckt das?", "Was machst du das?"], ans: 0 },
  { q: "Động từ tách 'fernsehen' (xem tivi) khi chia ở ngôi 'er' ở thì hiện tại là:", opts: ["Er sieht fern.", "Er fernsieht.", "Er seht fern.", "Er fernseht."], ans: 0 },
  { q: "Từ nào chỉ thể loại 'phim hoạt hình' trong tiếng Đức?", opts: ["der Zeichentrickfilm", "die Gameshow", "die Nachrichten", "die Dokumentation"], ans: 0 },
  { q: "Cụm từ diễn đạt 'Tôi bị đau đầu' trong tiếng Đức là:", opts: ["Ich habe Kopfschmerzen.", "Mein Kopf hat Weh.", "Ich bin Kopfschmerzen.", "Mir habe Kopfschmerzen."], ans: 0 },
  { q: "Động từ khuyết thiếu nào dùng để diễn đạt lời khuyên 'bạn nên'?", opts: ["sollen (du solltest / du sollst)", "müssen", "dürfen", "wollen"], ans: 0 },
  { q: "Từ nào chỉ 'hiệu thuốc' trong tiếng Đức?", opts: ["die Apotheke", "das Krankenhaus", "das Wartezimmer", "die Praxis"], ans: 0 },
  { q: "Mùa thu trong tiếng Đức là gì?", opts: ["der Herbst", "der Frühling", "der Sommer", "der Winter"], ans: 0 },
  { q: "Câu diễn đạt thời tiết 'Trời đang mưa' là:", opts: ["Es regnet.", "Es schneit.", "Es ist sonnig.", "Es ist windig."], ans: 0 },
  { q: "Dạng quá khứ đơn (Präteritum) ngôi 'ich' của động từ 'sein' là:", opts: ["war", "hatte", "bin", "wäre"], ans: 0 },
  { q: "Dạng quá khứ đơn (Präteritum) ngôi 'wir' của động từ 'haben' là:", opts: ["hatten", "waren", "haben", "hätten"], ans: 0 },
  { q: "Thì quá khứ hoàn thành (Perfekt) của hầu hết các động từ chuyển động (như gehen, fahren) đi với trợ động từ nào?", opts: ["sein", "haben", "werden", "können"], ans: 0 },
  { q: "Dạng phân từ hai (Partizip II) của động từ 'besuchen' (thăm quan) là:", opts: ["besucht", "gebesucht", "besuchen", "gebesuchen"], ans: 0 },
  { q: "Chọn câu Perfekt đúng: 'Hôm qua chúng tôi đã đi thăm bảo tàng sô-cô-la ở Köln':", opts: ["Gestern haben wir das Schokoladenmuseum besucht.", "Gestern haben wir das Schokoladenmuseum besuchten.", "Gestern sind wir das Schokoladenmuseum besucht.", "Gestern wir haben das Schokoladenmuseum besucht."], ans: 0 },
  { q: "Trọng âm của động từ có tiền tố tách được (ví dụ 'aufräumen') rơi vào đâu?", opts: ["Rơi vào tiền tố tách (AUF-räumen)", "Rơi vào gốc động từ (auf-RÄU-men)", "Rơi vào âm đuôi (-en)", "Không có trọng âm"], ans: 0 },
  { q: "Nguyên âm đôi 'ei' trong tiếng Đức được phát âm giống âm nào trong tiếng Việt?", opts: ["ai / ay (như trong 'mai', 'tay')", "i (như trong 'đi')", "âu (như trong 'nâu')", "uê (như trong 'quê')"], ans: 0 },
  { q: "Chữ cái đặc biệt 'ß' trong tiếng Đức phát âm là:", opts: ["Âm s sắc nét (scharfes s)", "Âm b", "Âm z", "Âm ch"], ans: 0 },
  { q: "Biến âm 'ä' trong tiếng Đức được phát âm tương đương với âm nào?", opts: ["e / ê hở", "a", "u", "o"], ans: 0 },
  { q: "Mã ngôn ngữ chuẩn Web Speech API của tiếng Đức là gì?", opts: ["de-DE", "en-US", "ru-RU", "zh-CN"], ans: 0 },
  { q: "Bảo tàng nổi tiếng 'Das Schokoladenmuseum' nằm ở thành phố nào của nước Đức?", opts: ["Köln", "Berlin", "München", "Frankfurt"], ans: 0 },
  { q: "Trạm ôn tập định kỳ trong sách giáo khoa Tiếng Đức 6 Kết nối tri thức được gọi là:", opts: ["Plattform", "Station", "Review", "Kontrolle"], ans: 0 }
];

// Helper to generate SVG Mindmap
function generateMindmapSvg(u) {
  const allVocab = [];
  u.lektions.forEach(l => {
    if (l.vocab) l.vocab.forEach(v => allVocab.push(v.de));
  });
  const vList = allVocab.slice(0, 3).join(', ') || u.titleDe;
  
  let gFocus = "Ngữ pháp & Cấu trúc cốt lõi";
  const firstL = u.lektions[0];
  if (firstL && firstL.grammarTitle) {
    gFocus = firstL.grammarTitle.split('(')[0].substring(0, 32);
  } else if (u.desc) {
    gFocus = u.desc.split(',')[0].substring(0, 30);
  }

  let sSample = "Hội thoại & Giao tiếp thực tế";
  if (firstL && firstL.grammarContent && firstL.grammarContent[0]) {
    sSample = firstL.grammarContent[0].pattern.substring(0, 26);
  } else if (firstL && firstL.dialogue && firstL.dialogue[0]) {
    sSample = firstL.dialogue[0].text.substring(0, 26);
  }

  const gradId = `g_de_${u.id.replace(/[^a-zA-Z0-9]/g, '_')}`;

  return `
    <svg viewBox="0 0 650 130" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#b91c1c"/>
          <stop offset="50%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </linearGradient>
      </defs>
      
      <!-- Node 1: Unit Title & Vocabulary -->
      <rect x="15" y="20" width="185" height="90" rx="12" fill="url(#${gradId})" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.12))"/>
      <text x="107" y="44" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TỪ VỰNG TRỌNG TÂM</text>
      <text x="107" y="64" fill="#fef08a" font-size="9" text-anchor="middle">${vList}...</text>
      <text x="107" y="84" fill="#ffffff" font-size="8.5" opacity="0.9" text-anchor="middle">🔊 Phát âm de-DE (${allVocab.length} từ)</text>

      <!-- Arrow 1 -->
      <path d="M 205 65 L 235 65" stroke="#b91c1c" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="235,60 243,65 235,70" fill="#b91c1c"/>

      <!-- Node 2: Grammar Focus -->
      <rect x="245" y="20" width="200" height="90" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
      <text x="345" y="44" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">NGỮ PHÁP CỐT LÕI</text>
      <text x="345" y="64" fill="#ffffff" font-size="9" text-anchor="middle">${gFocus}...</text>
      <text x="345" y="84" fill="#94a3b8" font-size="8.5" text-anchor="middle">Quy tắc ngữ pháp &amp; mẫu câu</text>

      <!-- Arrow 2 -->
      <path d="M 450 65 L 480 65" stroke="#b91c1c" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="480,60 488,65 480,70" fill="#b91c1c"/>

      <!-- Node 3: Communication & Skills -->
      <rect x="490" y="20" width="145" height="90" rx="12" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
      <text x="562" y="44" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">GIAO TIẾP &amp; DỰ ÁN</text>
      <text x="562" y="64" fill="#ffffff" font-size="8.5" text-anchor="middle">${sSample}...</text>
      <text x="562" y="84" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Hội thoại thực tế &amp; Văn hóa</text>
    </svg>
  `;
}

// Generate Unit Sections
function renderUnitSections() {
  let quizIndexGlobal = 0;

  return unitsData.map((u, uIdx) => {
    // Collect all vocab for "speak all" button
    const allVocabWords = [];
    u.lektions.forEach(l => {
      if (l.vocab) l.vocab.forEach(v => allVocabWords.push(v.de));
    });
    const vocabListText = allVocabWords.join(', ').replace(/'/g, "\\'");

    // Determine badge color
    const isTerm1 = u.bookPart.includes('1') || u.bookPart.includes('Một');
    const badgeColor = isTerm1 ? 'bg-amber-600' : 'bg-red-600';
    const unitTag = u.number === 'Start' ? 'BÀI MỞ ĐẦU' : (u.isStation ? 'TRẠM ÔN TẬP' : `EINHEIT ${u.number}`);

    // Render each sub-lektion
    const lektionsHtml = u.lektions.map(l => {
      // Vocab cards
      let vocabCardsHtml = '';
      if (l.vocab && l.vocab.length > 0) {
        vocabCardsHtml = `
          <div class="my-4">
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-spell-check text-red-600 dark:text-red-400"></i> Từ vựng ${l.num}: ${l.nameDe} (${l.vocab.length} từ)
              </span>
              <span class="text-[11px] text-gray-400">Bấm 🔊 để nghe âm de-DE</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              ${l.vocab.map(v => `
                <div class="vocab-card p-3 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 hover:border-red-400 dark:hover:border-red-500 shadow-sm transition flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-black tracking-wider uppercase ${v.gender === 'm.' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300' : (v.gender === 'f.' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300' : (v.gender === 'n.' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'))}">
                        ${v.gender || 'de'}
                      </span>
                      <button onclick="speakText('${v.de.replace(/'/g, "\\'")}')" class="w-7 h-7 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950 dark:hover:bg-red-900 text-red-600 dark:text-red-300 flex items-center justify-center transition shadow-sm" title="Phát âm tiếng Đức">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </div>
                    <div class="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-1">${v.de}</div>
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700/60 pt-1.5 font-medium">
                    ${v.vi}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Grammar & Dialogue 2 columns
      let grammarDialogueHtml = '';
      if (l.grammarTitle || l.phonetik || (l.grammarContent && l.grammarContent.length > 0) || (l.dialogue && l.dialogue.length > 0)) {
        grammarDialogueHtml = `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <!-- Cột Ngữ Pháp -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700">
              <h5 class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-graduation-cap text-amber-500"></i> ${l.grammarTitle || 'Ngữ Pháp Cốt Lõi'}
              </h5>
              <div class="space-y-2 text-xs">
                ${(l.grammarContent || []).map(g => `
                  <div class="p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700/80">
                    <div class="flex items-start justify-between gap-2">
                      <div class="font-bold text-gray-900 dark:text-white">${g.pattern}</div>
                      <button onclick="speakText('${g.pattern.replace(/'/g, "\\'")}')" class="text-gray-400 hover:text-red-600 transition flex-shrink-0" title="Nghe mẫu câu">
                        <i class="fa-solid fa-volume-high"></i>
                      </button>
                    </div>
                    <div class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 italic">${g.vi}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Cột Ngữ Âm & Hội Thoại -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700">
              <div class="mb-3">
                <h5 class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-comment-dots text-emerald-500"></i> Ngữ Âm &amp; Hội Thoại Thực Tế
                </h5>
                ${l.phonetik ? `
                  <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-[11px] text-emerald-800 dark:text-emerald-300">
                    <span class="font-bold"><i class="fa-solid fa-bullhorn text-emerald-600"></i> Ngữ âm (Phonetik):</span> ${l.phonetik}
                  </div>
                ` : ''}
              </div>
              <div class="space-y-2 text-xs">
                ${(l.dialogue || []).map(d => `
                  <div class="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700/80">
                    <span class="px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 font-bold text-[10px] flex-shrink-0">${d.speaker}</span>
                    <div class="flex-1">
                      <div class="text-gray-800 dark:text-gray-200">${d.text}</div>
                    </div>
                    <button onclick="speakText('${d.text.replace(/'/g, "\\'")}')" class="text-gray-400 hover:text-red-600 transition flex-shrink-0" title="Nghe câu này">
                      <i class="fa-solid fa-volume-high"></i>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      }

      // Quiz for this sub-lektion
      let quizHtml = '';
      if (l.quiz) {
        const qId = quizIndexGlobal++;
        quizHtml = `
          <div class="my-4 p-4 rounded-xl bg-amber-50/50 dark:bg-gray-800/60 border border-amber-200 dark:border-amber-900/40">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-circle-question text-amber-500"></i> Câu hỏi củng cố • ${l.num}
              </span>
              <span class="text-[11px] text-gray-400">Tự chấm điểm ngay</span>
            </div>
            <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-3">${l.quiz.q}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="quiz-options-${qId}">
              ${l.quiz.options.map((opt, optIdx) => `
                <button onclick="checkLektionQuiz(${qId}, ${optIdx}, ${l.quiz.ans}, '${l.quiz.explain.replace(/'/g, "\\'")}')" 
                        class="quiz-btn-${qId} text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-400 dark:hover:border-red-500 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">${String.fromCharCode(65 + optIdx)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
            <div id="quiz-feedback-${qId}" class="hidden mt-2.5 p-2.5 rounded-lg text-xs"></div>
          </div>
        `;
      }

      return `
        <!-- Lektion Block: ${l.num} -->
        <div class="my-5 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md ${l.num.includes('Landeskunde') ? 'bg-teal-600 text-white' : (l.num.includes('Projekt') ? 'bg-purple-600 text-white' : 'bg-slate-700 text-white')} font-bold text-xs">
                ${l.num}
              </span>
              <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">${l.nameDe}</h4>
            </div>
            <span class="text-xs text-gray-400 italic">S. ${l.page} • ${l.nameVi}</span>
          </div>

          ${vocabCardsHtml}
          ${grammarDialogueHtml}
          ${quizHtml}
        </div>
      `;
    }).join('');

    return `
      <!-- ==================== ${unitTag}: ${u.titleDe} ==================== -->
      <section id="${u.id}" class="unit-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md mb-8">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg ${badgeColor} text-white font-black text-xs uppercase tracking-wider">${u.bookPart}</span>
            <span class="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-semibold text-xs border border-red-200 dark:border-red-800">
              ${unitTag}
            </span>
            <span class="text-xs font-bold text-gray-400">Trang ${u.page}</span>
          </div>
          <span class="text-xs font-bold text-gray-400">Đơn vị ${uIdx + 1} / ${unitsData.length}</span>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-book-open text-red-600"></i> ${u.number === 'Start' ? 'Start' : (u.isStation ? u.titleDe : 'Einheit ' + u.number)}: ${u.titleDe}
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 italic mt-0.5">"${u.titleVi}"</p>
          </div>
          <!-- Nút Nghe Toàn Bộ Từ Vựng -->
          <button onclick="speakText('${vocabListText}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold shadow-sm shadow-red-500/20 transition cursor-pointer w-fit">
            <i class="fa-solid fa-headphones"></i>
            <span>Nghe toàn bài (${allVocabWords.length} từ vựng)</span>
          </button>
        </div>

        <p class="text-xs text-gray-600 dark:text-gray-300 mb-4">${u.desc}</p>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-4 p-4 rounded-xl bg-gradient-to-br from-red-50/40 via-amber-50/20 to-rose-50/30 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border border-red-100 dark:border-red-900/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-red-700 dark:text-red-400 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy cốt lõi • ${u.titleDe}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Deutsch 6 • KNTT</span>
          </div>
          <div class="w-full overflow-x-auto py-1">
            ${generateMindmapSvg(u)}
          </div>
        </div>

        <!-- Render All Lektions -->
        ${lektionsHtml}

      </section>
    `;
  }).join('');
}

// Generate Sidebar Navigation Items
function renderSidebarNav() {
  return unitsData.map(u => {
    const isTerm1 = u.bookPart.includes('1') || u.bookPart.includes('Một');
    const termTag = isTerm1 ? 'T1' : 'T2';
    const tagClass = isTerm1 ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300';
    const shortLabel = u.number === 'Start' ? 'Start' : (u.isStation ? u.number : `E.${u.number}`);

    return `
      <a href="#${u.id}" class="nav-unit-item flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group" data-term="${termTag}">
        <div class="flex items-center gap-2 overflow-hidden">
          <span class="w-8 h-6 rounded-md ${tagClass} text-[10px] font-black flex items-center justify-center flex-shrink-0">
            ${shortLabel}
          </span>
          <span class="truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition">${u.titleDe}</span>
        </div>
        <span class="text-[10px] font-mono text-gray-400 flex-shrink-0">${termTag}</span>
      </a>
    `;
  }).join('');
}

// Client-side script string
const clientScript = `
  let speechRate = 0.9;
  let totalQuizzes = 57;
  let answeredQuizzes = new Set();

  function updateSpeechRate(val) {
    speechRate = parseFloat(val);
    document.getElementById('rateLabel').textContent = speechRate.toFixed(1) + 'x';
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt không hỗ trợ Web Speech API.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = speechRate;
    
    // Find de-DE voice if available
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de') || v.lang.includes('DE'));
    if (deVoice) utterance.voice = deVoice;

    window.speechSynthesis.speak(utterance);
  }

  // Ensure voices loaded
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }

  // Filter Nav Units
  function filterNavUnits(term) {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active', 'bg-red-600', 'text-white');
      b.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');
    });
    event.target.classList.add('active', 'bg-red-600', 'text-white');
    event.target.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');

    document.querySelectorAll('.nav-unit-item').forEach(item => {
      if (term === 'all' || item.getAttribute('data-term') === term) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Check Lektion Quiz
  function checkLektionQuiz(qId, selectedIdx, correctIdx, explanation) {
    const optionsContainer = document.getElementById('quiz-options-' + qId);
    const feedbackBox = document.getElementById('quiz-feedback-' + qId);
    const buttons = optionsContainer.querySelectorAll('.quiz-btn-' + qId);

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove('hover:border-red-400', 'dark:hover:border-red-500');
      if (idx === correctIdx) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300', 'font-bold');
      } else if (idx === selectedIdx) {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
      }
    });

    feedbackBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200', 'bg-rose-50', 'text-rose-800', 'border-rose-200');
    feedbackBox.classList.add('border');

    if (selectedIdx === correctIdx) {
      feedbackBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-800', 'dark:text-emerald-300', 'border-emerald-200', 'dark:border-emerald-800');
      feedbackBox.innerHTML = '<strong>Chính xác!</strong> ' + explanation;
    } else {
      feedbackBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-800', 'dark:text-rose-300', 'border-rose-200', 'dark:border-rose-800');
      feedbackBox.innerHTML = '<strong>Chưa đúng!</strong> ' + explanation;
    }

    // Update global progress
    if (!answeredQuizzes.has(qId)) {
      answeredQuizzes.add(qId);
      const percent = Math.min(100, Math.round((answeredQuizzes.size / totalQuizzes) * 100));
      document.getElementById('progress-bar').style.width = percent + '%';
      document.getElementById('progress-percent').textContent = percent + '%';
      document.getElementById('answered-count').textContent = answeredQuizzes.size;
    }
  }

  // Modals handling
  function openPhoneticsModal() {
    document.getElementById('phoneticsModal').classList.remove('hidden');
  }
  function closePhoneticsModal() {
    document.getElementById('phoneticsModal').classList.add('hidden');
  }

  function openGrammarModal() {
    document.getElementById('grammarModal').classList.remove('hidden');
  }
  function closeGrammarModal() {
    document.getElementById('grammarModal').classList.add('hidden');
  }

  // Exam Logic (40 questions, 60 minutes)
  const examData = ${JSON.stringify(examQuestions)};
  let examTimerInterval = null;
  let examTimeRemaining = 3600; // 60 mins
  let userAnswers = {};

  function openExamModal() {
    document.getElementById('examModal').classList.remove('hidden');
    renderExamQuestions();
    startExamTimer();
  }

  function closeExamModal() {
    document.getElementById('examModal').classList.add('hidden');
    clearInterval(examTimerInterval);
  }

  function startExamTimer() {
    clearInterval(examTimerInterval);
    examTimeRemaining = 3600;
    updateTimerDisplay();
    examTimerInterval = setInterval(() => {
      examTimeRemaining--;
      updateTimerDisplay();
      if (examTimeRemaining <= 0) {
        clearInterval(examTimerInterval);
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    document.getElementById('exam-timer').textContent = 
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }

  function renderExamQuestions() {
    userAnswers = {};
    const container = document.getElementById('exam-questions-list');
    document.getElementById('exam-result-view').classList.add('hidden');
    container.classList.remove('hidden');
    document.getElementById('exam-submit-btn').classList.remove('hidden');

    container.innerHTML = examData.map((item, idx) => {
      return '<div class=\"p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2\">' +
        '<div class=\"font-bold text-gray-900 dark:text-white text-xs sm:text-sm flex items-start gap-2\">' +
          '<span class=\"px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 text-xs font-black\">Câu ' + (idx + 1) + '</span>' +
          '<span>' + item.q + '</span>' +
        '</div>' +
        '<div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1\">' +
          item.opts.map((opt, oIdx) => {
            return '<label class=\"exam-opt flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 cursor-pointer hover:border-red-400 text-xs text-gray-700 dark:text-gray-300\">' +
              '<input type=\"radio\" name=\"exam_q_' + idx + '\" value=\"' + oIdx + '\" onchange=\"recordExamAnswer(' + idx + ', ' + oIdx + ')\" class=\"accent-red-600\">' +
              '<span>' + opt + '</span>' +
            '</label>';
          }).join('') +
        '</div>' +
      '</div>';
    }).join('');
    updateExamStatus();
  }

  function recordExamAnswer(qIdx, optIdx) {
    userAnswers[qIdx] = optIdx;
    updateExamStatus();
  }

  function updateExamStatus() {
    const answered = Object.keys(userAnswers).length;
    document.getElementById('exam-status-text').textContent = 'Đã chọn ' + answered + '/' + examData.length + ' câu';
  }

  function submitExam() {
    clearInterval(examTimerInterval);
    let correctCount = 0;
    examData.forEach((item, idx) => {
      if (userAnswers[idx] === item.ans) {
        correctCount++;
      }
    });

    const score = (correctCount / examData.length) * 10;
    document.getElementById('exam-questions-list').classList.add('hidden');
    document.getElementById('exam-submit-btn').classList.add('hidden');

    const resultView = document.getElementById('exam-result-view');
    resultView.classList.remove('hidden');
    document.getElementById('exam-final-score').innerHTML = 
      'Điểm số của bạn: <span class=\"text-2xl font-black text-red-600 dark:text-red-400\">' + score.toFixed(1) + ' / 10</span> (' + correctCount + '/' + examData.length + ' câu đúng)';
    
    let rank = 'Khá';
    if (score >= 9) rank = 'Trạng Nguyên Đức Ngữ Xuất Sắc';
    else if (score >= 8) rank = 'Bảng Nhãn Tiếng Đức Giỏi';
    else if (score >= 6.5) rank = 'Thám Hoa Tiếng Đức Tiên Tiến';
    document.getElementById('exam-final-rank').textContent = rank;
  }

  // Real-time search units
  document.getElementById('unitSearchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.unit-section').forEach(sec => {
      const text = sec.innerText.toLowerCase();
      if (!term || text.includes(term)) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });

  // Dark mode toggle
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('codehub_theme', isDark ? 'dark' : 'light');
  }

  // Restore dark mode
  if (localStorage.getItem('codehub_theme') === 'dark' || (!localStorage.getItem('codehub_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
`;

// Full HTML Document
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Đức 6 (Deutsch 6 - GDPT 2018: 10 Einheiten &bull; Web Speech API &bull; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            red: {
              50: '#fef2f2',
              100: '#fee2e2',
              200: '#fecaca',
              300: '#fca5a5',
              400: '#f87171',
              500: '#ef4444',
              600: '#dc2626',
              700: '#b91c1c',
              800: '#991b1b',
              900: '#7f1d1d',
              950: '#450a0a'
            },
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0b0f19'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Tiếng Đức 6">

  <style>
    body { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.4); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.6); }
    .vocab-card:hover { transform: translateY(-2px); }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen antialiased transition-colors duration-200">

  <!-- ==================== STICKY HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button (Về trang chính) -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 text-white flex items-center justify-center shadow-md shadow-red-500/20 font-black text-sm group-hover:scale-105 transition">
            DE
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              TIẾNG ĐỨC 6 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; Deutsch 6 &bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Phonetik Studio Modal Button -->
        <button onclick="openPhoneticsModal()" class="px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/60 dark:hover:bg-red-900/60 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-microphone-lines text-red-600 dark:text-red-400"></i>
          <span class="hidden md:inline">Phonetik Studio</span>
        </button>

        <!-- Sổ Tay Ngữ Pháp Modal Button -->
        <button onclick="openGrammarModal()" class="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-book-bookmark text-amber-600 dark:text-amber-400"></i>
          <span class="hidden md:inline">Sổ Tay Ngữ Pháp</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-black shadow-md shadow-red-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-950 to-slate-900 text-white py-10 sm:py-14 border-b border-red-900/40">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="absolute -right-20 -top-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold tracking-wide">
            <i class="fa-solid fa-star text-amber-400"></i>
            <span>GDPT 2018 &bull; KẾT NỐI TRI THỨC VỚI CUỘC SỐNG &bull; CEFR A1-A2</span>
          </div>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Khóa Học Toàn Diện Tiếng Đức Lớp 6
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            Hệ thống hóa toàn bộ 10 Einheiten, 30 Lektionen, 10 Landeskunde, 10 Projekte và 4 Trạm Plattform theo chuẩn SGK Tiếng Đức 6 Kết nối tri thức. Tích hợp Web Speech API chuẩn de-DE, 15 sơ đồ tư duy trực quan SVG và hệ thống trắc nghiệm tự chấm điểm.
          </p>
          
          <!-- Chips -->
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-book-open text-red-400 mr-1"></i> 10 Einheiten + 4 Plattformen
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-layer-group text-amber-400 mr-1"></i> 30 Lektionen + Văn hóa &amp; Dự án
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-volume-high text-emerald-400 mr-1"></i> Web Speech API (de-DE)
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-diagram-project text-cyan-400 mr-1"></i> 15 Sơ đồ tư duy SVG
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-circle-check text-purple-400 mr-1"></i> 57 Trắc nghiệm tự chấm
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <i class="fa-solid fa-award mr-1"></i> Đấu trường 60:00
            </span>
          </div>
        </div>

        <!-- Quick Term Summary Card -->
        <div class="grid grid-cols-2 gap-3 w-full lg:w-80 flex-shrink-0">
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
            <span class="text-[10px] font-black uppercase text-amber-400">TẬP 1 (HỌC KÌ 1)</span>
            <div class="text-sm font-bold text-white">Einheit 1 – 5</div>
            <p class="text-[11px] text-gray-400">Start, E1-E5 &bull; Plattform 1 &amp; 2</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
            <span class="text-[10px] font-black uppercase text-red-400">TẬP 2 (HỌC KÌ 2)</span>
            <div class="text-sm font-bold text-white">Einheit 6 – 10</div>
            <p class="text-[11px] text-gray-400">E6-E10 &bull; Plattform 3 &amp; 4</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTAINER ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ==================== LEFT STICKY SIDEBAR ==================== -->
      <aside class="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-20 space-y-5">
        <div class="bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          
          <!-- Search box -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="unitSearchInput" placeholder="Tìm kiếm bài học, từ vựng..." class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition">
          </div>

          <!-- Tiến độ bài học -->
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-gray-700 dark:text-gray-300">Tiến độ củng cố</span>
              <span id="progress-percent" class="font-mono font-bold text-red-600 dark:text-red-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-red-600 to-amber-500 w-0 transition-all duration-300"></div>
            </div>
            <div class="flex justify-between text-[11px] text-gray-500 dark:text-gray-400">
              <span>Đã làm: <b id="answered-count">0</b>/57 câu</span>
              <span>15 đơn vị bài</span>
            </div>
          </div>

          <!-- Thanh trượt tốc độ phát âm (Web Speech API) -->
          <div class="p-3 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 space-y-1.5">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-red-800 dark:text-red-300 flex items-center gap-1.5">
                <i class="fa-solid fa-gauge-high text-red-600"></i> Tốc độ phát âm (de-DE)
              </span>
              <span id="rateLabel" class="font-mono font-bold text-red-600 dark:text-red-400">0.9x</span>
            </div>
            <input type="range" id="speechRateRange" min="0.6" max="1.2" step="0.1" value="0.9" onchange="updateSpeechRate(this.value)" class="w-full accent-red-600 cursor-pointer h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <div class="flex justify-between text-[10px] text-gray-400">
              <span>0.6x (Chậm)</span>
              <span>0.9x (Chuẩn)</span>
              <span>1.2x (Nhanh)</span>
            </div>
          </div>

          <!-- Bộ lọc bài học -->
          <div class="space-y-1.5">
            <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Bộ Lọc Danh Sách</div>
            <div class="grid grid-cols-3 gap-1">
              <button onclick="filterNavUnits('all')" class="filter-btn active py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs transition">Tất cả</button>
              <button onclick="filterNavUnits('T1')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold text-xs transition">Tập 1</button>
              <button onclick="filterNavUnits('T2')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold text-xs transition">Tập 2</button>
            </div>
          </div>

          <!-- Danh sách bài học -->
          <div class="space-y-1 max-h-[50vh] overflow-y-auto custom-scrollbar pr-1" id="sidebar-nav-list">
            ${renderSidebarNav()}
          </div>

          <!-- CTA Trạng Nguyên 60:00 -->
          <div class="p-3.5 rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-600 text-white text-center space-y-2 shadow-md">
            <div class="text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-trophy text-amber-300"></i> Đấu Trường Trạng Nguyên
            </div>
            <p class="text-[11px] text-red-100 leading-tight">40 câu trắc nghiệm tổng hợp &bull; Thời gian làm bài 60:00</p>
            <button onclick="openExamModal()" class="w-full py-1.5 rounded-lg bg-white text-red-700 hover:bg-red-50 text-xs font-black shadow transition">
              Vào Thi Ngay
            </button>
          </div>

        </div>
      </aside>

      <!-- ==================== MAIN CONTENT: 15 UNITS ==================== -->
      <div class="flex-1 min-w-0 space-y-6">
        ${renderUnitSections()}
      </div>

    </div>
  </main>

  <!-- ==================== MODALS ==================== -->

  <!-- Modal 1: Phonetik Studio (Luyện phát âm Tiếng Đức) -->
  <div id="phoneticsModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-red-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-microphone-lines"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base">PHONETIK STUDIO • LUYỆN PHÁT ÂM TIẾNG ĐỨC 6</h3>
            <p class="text-[11px] text-red-100">Bảng quy tắc ngữ âm kèm phát âm mẫu chuẩn de-DE</p>
          </div>
        </div>
        <button onclick="closePhoneticsModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 space-y-2">
          <h4 class="font-bold text-red-900 dark:text-red-300 flex items-center justify-between">
            <span>1. Biến Âm Umlaut (ä, ö, ü, äu)</span>
            <button onclick="speakText('Käse, schön, für, Häuser')" class="text-xs text-red-600 hover:underline">🔊 Nghe ví dụ</button>
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>ä</strong>: Phát âm giống 'e' trong tiếng Việt (<em>Käse, spät, März</em>).<br>
            &bull; <strong>ö</strong>: Để môi tròn như phát âm 'o' nhưng phát ra âm 'ê' (<em>schön, hören, möchten</em>).<br>
            &bull; <strong>ü</strong>: Để môi tròn như phát âm 'u' nhưng phát ra âm 'i' (<em>für, Schüler, Küche</em>).<br>
            &bull; <strong>äu</strong>: Phát âm tương tự 'oi' trong tiếng Việt (<em>Häuser, Bäume</em>).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-2">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 flex items-center justify-between">
            <span>2. Nguyên Âm Đôi (Diphthonge: ei, ie, eu, au)</span>
            <button onclick="speakText('mein, spielen, Deutsch, Haus')" class="text-xs text-amber-600 hover:underline">🔊 Nghe ví dụ</button>
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>ei</strong>: Phát âm giống 'ai' trong tiếng Việt (<em>mein, Freizeit, heißen</em>).<br>
            &bull; <strong>ie</strong>: Phát âm là 'i' kéo dài [i:] (<em>spielen, wie, sie, nie</em>).<br>
            &bull; <strong>eu</strong>: Phát âm giống 'oi' (<em>Deutsch, Freund, neu</em>).<br>
            &bull; <strong>au</strong>: Phát âm giống 'ao' (<em>Haus, Frau, laufen</em>).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 space-y-2">
          <h4 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
            <span>3. Phụ Âm Đặc Trưng (ch, sch, sp/st, ß, ig, v, w, z)</span>
            <button onclick="speakText('ich, Buch, Schule, Sport, Straße, wichtig, Vater, wo, Zeit')" class="text-xs text-slate-600 dark:text-slate-300 hover:underline">🔊 Nghe ví dụ</button>
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>ch (ich-Laut)</strong>: Đi sau e, i, ä, ö, ü hoặc phụ âm phát âm xì nhẹ vòm họng (<em>ich, nicht, sprechen</em>).<br>
            &bull; <strong>ch (ach-Laut)</strong>: Đi sau a, o, u phát âm khè sâu trong cổ họng (<em>Buch, machen, doch</em>).<br>
            &bull; <strong>sch</strong>: Phát âm nặng như 's' uốn lưỡi [ʃ] (<em>Schule, schön, schreiben</em>).<br>
            &bull; <strong>sp / st</strong> ở đầu từ: Phát âm thành 'schp' / 'scht' (<em>Sport, spielen, stehen, Straße</em>).<br>
            &bull; <strong>ß (scharfes S)</strong>: Luôn phát âm là 's' sắc nét, không bao giờ rung (<em>heißen, groß, Fußball</em>).<br>
            &bull; <strong>-ig</strong> ở cuối từ: Phát âm thành 'ich' (<em>wichtig, fleißig, richtig</em>).<br>
            &bull; <strong>v</strong>: Phát âm như 'f' (<em>Vater, vier, von</em>) trừ từ mượn; <strong>w</strong> phát âm như 'v' (<em>wo, was, wir</em>); <strong>z</strong> phát âm như 'ts' (<em>Zeit, Zimmer, zwei</em>).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-2">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center justify-between">
            <span>4. Âm Không Nhấn &amp; Đuôi Từ (-e, -er, -en)</span>
            <button onclick="speakText('Pause, Schule, Lehrer, Schülerin')" class="text-xs text-emerald-600 hover:underline">🔊 Nghe ví dụ</button>
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; Đuôi <strong>-e</strong> không nhấn: Phát âm lướt nhẹ âm ơ ngắn (<em>Schule, Pause, heiße</em>).<br>
            &bull; Đuôi <strong>-er</strong>: Phát âm lướt gần như âm 'a' ngắn trong cổ họng (<em>Mutter, Vater, Lehrer, Zimmer</em>).
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 2: Sổ Tay Ngữ Pháp Tiếng Đức 6 -->
  <div id="grammarModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-amber-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base">SỔ TAY NGỮ PHÁP TIẾNG ĐỨC 6 (GRAMMATIK A1-A2)</h3>
            <p class="text-[11px] text-amber-100">Hệ thống hóa toàn bộ kiến thức trọng tâm SGK KNTT</p>
          </div>
        </div>
        <button onclick="closeGrammarModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-5 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-table-list"></i> 1. Hệ Thống Mạo Từ Trong 4 Cách (Kasus)
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="border-b border-amber-200 dark:border-amber-800 font-bold">
                <tr>
                  <th class="py-2">Cách</th>
                  <th class="py-2">Giống đực (m.)</th>
                  <th class="py-2">Giống cái (f.)</th>
                  <th class="py-2">Giống trung (n.)</th>
                  <th class="py-2">Số nhiều (Pl.)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-amber-100 dark:divide-amber-900/40">
                <tr><td>Nominativ (Cách 1)</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / -</td></tr>
                <tr><td>Akkusativ (Cách 4)</td><td><b>den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die / -</td></tr>
                <tr><td>Dativ (Cách 3)</td><td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>dem / einem</b></td><td><b>den / -n</b></td></tr>
                <tr><td>Genitiv (Cách 2)</td><td>des / eines (+s)</td><td>der / einer</td><td>des / eines (+s)</td><td>der / -</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 space-y-2">
          <h4 class="font-bold text-red-900 dark:text-red-300 flex items-center gap-2">
            <i class="fa-solid fa-link"></i> 2. Liên Từ Chỉ Nguyên Nhân - Kết Quả (weil, denn, deshalb)
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>weil</strong>: Đẩy động từ chia xuống <em>cuối câu</em> (<em>Ich lerne Deutsch, weil ich in Deutschland studieren <b>möchte</b></em>).<br>
            &bull; <strong>denn</strong>: Đứng ở vị trí 0, trật tự câu bình thường không đổi (<em>..., denn ich <b>möchte</b> in Deutschland studieren</em>).<br>
            &bull; <strong>deshalb</strong>: Đảo động từ lên ngay vị trí 2 (<em>Chi ist neu im Club, deshalb <b>spricht</b> sie wenig Deutsch</em>).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 space-y-2">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
            <i class="fa-solid fa-location-dot"></i> 3. Giới Từ 2 Cách (Wechselpräpositionen)
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            9 giới từ: <strong>in, an, auf, neben, hinter, über, unter, vor, zwischen</strong>.<br>
            &bull; Trả lời câu hỏi <strong>Wo? (Ở đâu? - Trạng thái tĩnh)</strong> &rarr; Đi với <strong>Dativ (Cách 3)</strong>: <em>Das Bild hängt an der Wand. Die Katze sitzt unter dem Tisch.</em><br>
            &bull; Trả lời câu hỏi <strong>Wohin? (Đi đâu? - Hướng chuyển động)</strong> &rarr; Đi với <strong>Akkusativ (Cách 4)</strong>: <em>Ich hänge das Bild an die Wand.</em>
          </p>
        </div>

        <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-2">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-clock-rotate-left"></i> 4. Các Thì Quá Khứ (Präteritum &amp; Perfekt)
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>Präteritum của sein &amp; haben</strong>: <em>ich war (tôi đã ở), ich hatte (tôi đã có)</em>.<br>
            &bull; <strong>Perfekt (Quá khứ hoàn thành)</strong>: haben / sein (vị trí 2) + Partizip II (cuối câu).<br>
            - Động từ chuyển động/thay đổi trạng thái dùng <strong>sein</strong>: <em>Wir sind nach Köln gefahren.</em><br>
            - Các động từ còn lại dùng <strong>haben</strong>: <em>Wir haben das Museum besucht.</em>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 3: Hội Thi Trạng Nguyên Đức Ngữ 6 (60:00) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Exam Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-award text-amber-300 text-lg"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black tracking-tight">HỘI THI TRẠNG NGUYÊN ĐỨC NGỮ 6</h3>
            <p class="text-[11px] text-red-100">40 câu hỏi trắc nghiệm &bull; Thời gian: 60:00 &bull; CEFR A1-A2</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1 rounded-xl bg-black/20 font-mono font-bold text-xs" id="exam-timer">
            60:00
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="flex-1 overflow-y-auto p-5 space-y-4 text-xs sm:text-sm">
        <div id="exam-questions-list" class="space-y-4"></div>

        <!-- Exam Result Certificate -->
        <div id="exam-result-view" class="hidden text-center py-6 space-y-4">
          <div class="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">Chúc Mừng Bạn Đã Hoàn Thành Bài Thi!</h4>
          <p id="exam-final-score" class="text-base font-bold text-red-600 dark:text-red-400"></p>
          <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-w-md mx-auto text-xs space-y-1">
            <p><strong>Danh hiệu:</strong> <span id="exam-final-rank" class="text-amber-500 font-bold">Trạng Nguyên Đức Ngữ Xuất Sắc</span></p>
            <p class="text-gray-500 dark:text-gray-400">Chứng nhận hoàn thành chương trình Tiếng Đức 6 chuẩn GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-850">
        <span id="exam-status-text" class="text-xs text-gray-500">Đã chọn 0/40 câu</span>
        <button id="exam-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs shadow-md transition">
          Nộp bài thi
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 transition-colors">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <div class="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold">
          <i class="fa-solid fa-flag"></i>
        </div>
        <span class="font-bold text-gray-700 dark:text-gray-300">CodeHub - Nền Tảng Học Tập Số Hóa GDPT 2018</span>
      </div>
      <p>Chương trình Tiếng Đức 6 (Deutsch 6): 2 Tập &bull; 10 Einheiten &bull; 30 Lektionen &bull; Giao diện chuẩn Tiếng Anh 6.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
${clientScript}
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', fullHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/german_6.html', fullHtml, 'utf8');

console.log("Successfully generated courses/tiengduc_6.html and courses/german_6.html with English 6 UI! Size:", fullHtml.length);
