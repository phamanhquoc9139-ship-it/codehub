const fs = require('fs');
const path = require('path');
const { themesData } = require('./data_tiengnga6_expanded.js');

console.log("Generating Tieng Nga 6 with exact Tieng Anh 6 UI...");

// 40 questions for Trang Nguyen Russian 6 Competition
const examQuestions = [
  { q: "Từ nào trong tiếng Nga có nghĩa là 'gọi điện thoại lại'?", opts: ["перезвонить", "звонить", "позвонить", "ждать"], ans: 0 },
  { q: "Điền đại từ ở Cách 3: 'Я перезвоню _____ (ты) через десять минут.'", opts: ["тебе", "тебя", "тобой", "о тебе"], ans: 0 },
  { q: "Cụm từ lịch sự 'Làm ơn cho hỏi, bác có nhà không ạ?' trong tiếng Nga là:", opts: ["Будьте добры, Антон дома?", "Антон, иди сюда!", "Где Антон?", "Кто здесь?"], ans: 0 },
  { q: "Từ nào chỉ đồ dùng học tập 'thước kẻ'?", opts: ["линейка", "ручка", "тетрадь", "ластик"], ans: 0 },
  { q: "Chọn dạng đúng của số thứ tự: 'Учебники лежат на _____ (четвёртая) полке.'", opts: ["четвёртой", "четвёртая", "четвёртую", "четвёртом"], ans: 0 },
  { q: "Chọn dạng đúng: 'Я учусь в _____ (шестой) классе этой школы.'", opts: ["шестом", "шестой", "шестого", "шестому"], ans: 0 },
  { q: "Mùa thu trong tiếng Nga là từ nào (giống cái)?", opts: ["осень", "весна", "лето", "зима"], ans: 0 },
  { q: "Điền tính từ đuôi mềm ở Cách 6: 'Мы отдыхаем на _____ (свежий) воздухе.'", opts: ["свежем", "свежим", "свежего", "свежему"], ans: 0 },
  { q: "Cấu trúc 'giống ai' đi với giới từ 'на' và Cách mấy?", opts: ["Cách 4 (Akkusativ)", "Cách 2 (Genitiv)", "Cách 3 (Dativ)", "Cách 5 (Instrumental)"], ans: 0 },
  { q: "Câu nào mang nghĩa 'Bạn rất giống anh trai của mình'?", opts: ["Ты очень похожа на своего брата.", "Ты похожа с твоим братом.", "Ты похожа о брате.", "Ты похожа брату."], ans: 0 },
  { q: "Đại từ sở hữu 'свой' (của mình) được dùng khi nào?", opts: ["Khi người sở hữu chính là chủ ngữ của câu", "Khi chủ ngữ là người khác", "Chỉ dùng cho đồ vật", "Không bao giờ đi với danh từ giống đực"], ans: 0 },
  { q: "Điền đại từ свой: 'Я очень люблю _____ (своя) семью.' (Cách 4)", opts: ["свою", "своей", "своей", "своим"], ans: 0 },
  { q: "Cấu trúc tương đương với 'Я люблю музыку' là:", opts: ["Мне нравится музыка.", "У меня есть музыка.", "Я нравлюсь музыке.", "Мне нравиться музыка."], ans: 0 },
  { q: "Tính từ ngắn đuôi diễn tả 'đang rảnh rỗi' (dành cho bạn nam) là:", opts: ["свободен", "свободна", "свободно", "свободные"], ans: 0 },
  { q: "Thủ đô của Liên bang Nga là thành phố nào?", opts: ["Москва", "Санкт-Петербург", "Казань", "Сочи"], ans: 0 },
  { q: "Hồ nước sâu nhất và chứa lượng nước ngọt lớn nhất thế giới ở Nga là:", opts: ["озеро Байкал", "Ладожское озеро", "Онежское озеро", "Каспийское море"], ans: 0 },
  { q: "Đại từ quan hệ 'который' đi với danh từ giống cái 'столица' ở Cách 1 là:", opts: ["которая", "который", "которое", "которые"], ans: 0 },
  { q: "Để nói 'Việt Nam nằm ở khu vực Đông Nam Á', ta dùng giới từ và cách nào?", opts: ["в Юго-Восточной Азии (Cách 6)", "на Юго-Восточную Азию", "о Юго-Восточной Азии", "с Юго-Восточной Азией"], ans: 0 },
  { q: "Động từ 'являться' (là / đóng vai trò là) đòi hỏi danh từ ở Cách mấy?", opts: ["Cách 5 (Tvoritel'nyy)", "Cách 1", "Cách 4", "Cách 6"], ans: 0 },
  { q: "'Ханой является _____ (столица) Вьетнама' điền đúng là:", opts: ["столицей", "столицу", "столице", "столицы"], ans: 0 },
  { q: "Hang động tự nhiên lớn nhất thế giới tại Việt Nam được nhắc tới là:", opts: ["пещера Шондонг", "пещера Фонгня", "пещера Хыонг", "пещера Даугод"], ans: 0 },
  { q: "Cặp câu nào dưới đây diễn đạt đồng nghĩa?", opts: ["Я был в Москве. = Я ездил в Москву.", "Я был в Москве. = Я уехал из Москвы.", "Я был в Москве. = Я живу в Москве.", "Я был в Москве. = Я не видел Москву."], ans: 0 },
  { q: "Hồ Hoàn Kiếm được mệnh danh là trái tim của Hà Nội: 'Озеро Хоанкием называется _____ (сердце) Ханоя.'", opts: ["сердцем", "сердцу", "сердца", "сердце"], ans: 0 },
  { q: "Cấu trúc chúc mừng: 'Поздравлять кого (4) _____ чем (5)' điền giới từ nào?", opts: ["с", "на", "о", "по"], ans: 0 },
  { q: "Câu chúc 'Chúc bạn dồi dào sức khỏe và hạnh phúc' trong tiếng Nga là:", opts: ["Желаю тебе крепкого здоровья и счастья!", "Желаю тебе много денег!", "Поздравляю тебя на здоровье!", "Будь здоров без счастья!"], ans: 0 },
  { q: "Từ chỉ tần suất ở Cách 4 không dùng giới từ: 'Mỗi năm bố mẹ đều tặng tôi sách' là:", opts: ["Каждый год", "В каждый год", "На каждом году", "С каждым годом"], ans: 0 },
  { q: "Tiền tố nào của động từ chuyển động biểu thị hành động 'bắt đầu khởi hành'?", opts: ["по- (пойти, поехать)", "при- (прийти, приехать)", "у- (уйти, уехать)", "в- (войти)"], ans: 0 },
  { q: "Tiền tố nào của động từ chuyển động biểu thị hành động 'đã đến nơi đích'?", opts: ["при- (прийти, приехать)", "по- (пойти)", "у- (уйти)", "вы- (выйти)"], ans: 0 },
  { q: "Tiền tố nào biểu thị 'đã rời khỏi nơi xuất phát, đi vắng'?", opts: ["у- (уйти, уехать)", "при- (прийти)", "по- (пойти)", "под- (подойти)"], ans: 0 },
  { q: "Đi sau số '2, 3, 4', danh từ 'градус' biến đổi thành:", opts: ["градуса", "градусов", "градус", "градусам"], ans: 0 },
  { q: "Cấp so sánh hơn của tính từ 'тёплый' (ấm áp) là:", opts: ["теплее", "более тёплый", "самый тёплый", "тепло"], ans: 0 },
  { q: "Hành động đồng thời diễn ra trong quá khứ dùng thể động từ nào?", opts: ["Cả 2 động từ đều ở thể Chưa hoàn thành (НСВ)", "Cả 2 đều ở thể Hoàn thành (СВ)", "Động từ 1 СВ, động từ 2 НСВ", "Không cần chia thì"], ans: 0 },
  { q: "Hành động nối tiếp: 'Trước tiên làm bài tập, sau đó đi chơi' dùng cặp liên từ:", opts: ["Сначала..., потом...", "Когда..., тогда...", "Хотя..., но...", "Если..., то..."], ans: 0 },
  { q: "Từ nào trong tiếng Nga có nghĩa là 'thời khóa biểu'?", opts: ["расписание", "учебник", "перемена", "столовая"], ans: 0 },
  { q: "Đổi câu trực tiếp sang gián tiếp: 'Антон сказал: \"Я люблю математику\"':", opts: ["Антон сказал, что он любит математику.", "Антон сказал, как он любит математику.", "Антон сказал, если он любит математику.", "Антон сказал, ли он любит."], ans: 0 },
  { q: "Động từ 'увлекаться' (say mê, đam mê) đòi hỏi danh từ ở Cách mấy?", opts: ["Cách 5 (Tvoritel'nyy)", "Cách 2", "Cách 3", "Cách 4"], ans: 0 },
  { q: "Điền danh từ ở Cách 5: 'Я хочу стать хорошим _____ (врач).'", opts: ["врачом", "врача", "врачу", "враче"], ans: 0 },
  { q: "Nghề nghiệp 'kỹ sư lập trình viên' trong tiếng Nga là:", opts: ["программист", "переводчик", "инженер", "архитектор"], ans: 0 },
  { q: "Câu ngạn ngữ 'Повторение – мать учения' mang ý nghĩa gì?", opts: ["Ôn tập là mẹ của thành công / Học đi đôi với hành", "Học nhiều thì mau quên", "Không cần ôn lại bài cũ", "Bài thi luôn rất khó"], ans: 0 },
  { q: "Mã ngôn ngữ chuẩn Web Speech API của tiếng Nga là gì?", opts: ["ru-RU", "de-DE", "zh-CN", "en-US"], ans: 0 }
];

// Helper to generate SVG Mindmap
function generateMindmapSvg(u) {
  const vList = u.vocab.slice(0, 3).map(v => v.ru).join(', ');
  const gFocus = u.grammar.split(';')[0].substring(0, 32);
  const sSample = u.sentences[0]?.ru.substring(0, 28) || "";

  return `
    <svg viewBox="0 0 650 130" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g_${u.num}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2563eb"/>
          <stop offset="100%" stop-color="#1e3a8a"/>
        </linearGradient>
      </defs>
      
      <!-- Node 1: Unit Title & Vocabulary -->
      <rect x="15" y="20" width="185" height="90" rx="12" fill="url(#g_${u.num})" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
      <text x="107" y="46" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TỪ VỰNG TRỌNG TÂM</text>
      <text x="107" y="66" fill="#bfdbfe" font-size="9.5" text-anchor="middle">${vList}...</text>
      <text x="107" y="86" fill="#ffffff" font-size="8.5" opacity="0.9" text-anchor="middle">🔊 Phát âm ru-RU (${u.vocab.length} từ)</text>

      <!-- Arrow 1 -->
      <path d="M 205 65 L 235 65" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="235,60 243,65 235,70" fill="#2563eb"/>

      <!-- Node 2: Grammar Focus -->
      <rect x="245" y="20" width="200" height="90" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
      <text x="345" y="46" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">NGỮ PHÁP CỐT LÕI</text>
      <text x="345" y="66" fill="#ffffff" font-size="9" text-anchor="middle">${gFocus}...</text>
      <text x="345" y="86" fill="#94a3b8" font-size="8.5" text-anchor="middle">Quy tắc biến cách &amp; mẫu câu</text>

      <!-- Arrow 2 -->
      <path d="M 450 65 L 480 65" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="480,60 488,65 480,70" fill="#2563eb"/>

      <!-- Node 3: Communication & Skills -->
      <rect x="490" y="20" width="145" height="90" rx="12" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
      <text x="562" y="46" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">GIAO TIẾP</text>
      <text x="562" y="66" fill="#ffffff" font-size="8.5" text-anchor="middle">${sSample}...</text>
      <text x="562" y="86" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Hội thoại thực tế</text>
    </svg>
  `;
}

// Generate 16 Urok Sections
function renderUrokSections() {
  return themesData.map(theme => {
    return theme.uroks.map(u => {
      const vocabListText = u.vocab.map(v => v.ru).join(', ').replace(/'/g, "\\'");
      return `
      <!-- ==================== УРОК ${u.num}: ${u.titleRu} ==================== -->
      <section id="urok-${u.num}" class="unit-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg ${theme.part === 'Tập Một' ? 'bg-blue-600' : 'bg-red-600'} text-white font-black text-xs uppercase tracking-wider">${theme.part}</span>
            <span class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold text-xs border border-blue-200 dark:border-blue-800">
              ${theme.themeTitleRu.split(':')[0]}: ${theme.themeTitleVi}
            </span>
          </div>
          <span class="text-xs font-bold text-gray-400">Урок ${u.num} / 16</span>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-book-open text-blue-600"></i> Урок ${u.num}: ${u.titleRu}
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 italic mt-0.5">"${u.titleVi}"</p>
          </div>
          <!-- Nút Nghe Toàn Bộ Từ Vựng -->
          <button onclick="speakText('${vocabListText}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition cursor-pointer w-fit">
            <i class="fa-solid fa-headphones"></i>
            <span>Nghe toàn bài (${u.vocab.length} từ vựng)</span>
          </button>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-4 p-4 rounded-xl bg-gradient-to-br from-blue-50/40 via-indigo-50/20 to-sky-50/30 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border border-blue-100 dark:border-blue-900/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy cốt lõi • Урок ${u.num}: ${u.titleRu}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Русский язык 6</span>
          </div>
          <div class="w-full overflow-x-auto py-1">
            ${generateMindmapSvg(u)}
          </div>
        </div>

        <!-- Danh Mục Từ Vựng Cốt Lõi -->
        <div class="my-5">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-spell-check text-blue-600"></i> Danh Mục ${u.vocab.length} Từ Vựng Cốt Lõi (Kèm Phát Âm &amp; Phiên Âm)
            </h4>
            <span class="text-[11px] text-gray-400">Bấm 🔊 để nghe phát âm</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            ${u.vocab.map(v => `
              <div class="vocab-card p-3 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm transition flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-xs font-black text-blue-600 dark:text-blue-400 tracking-wide uppercase">ru</span>
                    <button onclick="speakText('${v.ru.replace(/'/g, "\\'")}')" class="w-7 h-7 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center transition shadow-sm" title="Phát âm tiếng Nga">
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                  </div>
                  <div class="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-0.5">${v.ru}</div>
                  <div class="text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">[${v.phonetic}]</div>
                </div>
                <div class="text-xs text-gray-700 dark:text-gray-300 font-medium pt-1.5 border-t border-gray-100 dark:border-gray-700/60">
                  ${v.vi}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Khối Ngữ Pháp & Phát Âm -->
        <div class="my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Cột 1: Ngữ Pháp & Mẫu Câu -->
          <div class="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 space-y-3">
            <h4 class="text-sm font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
              <i class="fa-solid fa-cube text-indigo-600"></i> Ngữ pháp &amp; Mẫu câu trọng điểm
            </h4>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              ${u.grammar}
            </p>
            <div class="space-y-2 pt-1 border-t border-indigo-100 dark:border-indigo-900/40">
              <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">Câu mẫu ứng dụng:</span>
              ${u.sentences.map(s => `
                <div class="flex items-start justify-between gap-2 p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-indigo-100 dark:border-indigo-800 text-xs">
                  <div>
                    <div class="font-bold text-gray-900 dark:text-white"><em>${s.ru}</em></div>
                    <div class="text-[11px] text-gray-500 dark:text-gray-400">${s.vi}</div>
                  </div>
                  <button onclick="speakText('${s.ru.replace(/'/g, "\\'")}')" class="p-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 text-indigo-600 shrink-0" title="Nghe câu mẫu">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Cột 2: Phát Âm & Hội thoại -->
          <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 flex flex-col justify-between space-y-3">
            <div>
              <h4 class="text-sm font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2">
                <i class="fa-solid fa-microphone-lines text-emerald-600"></i> Hướng Dẫn Ngữ Âm &amp; Ngữ Điệu (Phonetics)
              </h4>
              <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                ${u.phoneticsRule}
              </p>
              
              <div class="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-emerald-100 dark:border-emerald-800 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <i class="fa-solid fa-comments"></i> Hội thoại mẫu (Диалог)
                  </span>
                  <button onclick="speakText('${u.dialogue.map(d => d.speaker + ': ' + d.text).join('. ').replace(/'/g, "\\'")}')" class="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                    <i class="fa-solid fa-play text-[10px]"></i> Nghe hội thoại
                  </button>
                </div>
                <div class="space-y-1.5 text-xs">
                  ${u.dialogue.map(d => `
                    <div class="flex items-start gap-1.5">
                      <span class="font-bold text-gray-800 dark:text-gray-200 shrink-0">${d.speaker}:</span>
                      <span class="text-gray-600 dark:text-gray-300 italic">"${d.text}"</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
            <div class="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium pt-2 border-t border-emerald-100 dark:border-emerald-800/40">
              💡 Hãy bật loa và nhắc lại theo giọng bản xứ để rèn ngữ điệu ИК chuẩn xác.
            </div>
          </div>
        </div>

        <!-- 2 Câu Trắc Nghiệm Tự Chấm Mỗi Bài -->
        <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-blue-600"></i> Kiểm Tra Nhanh Урок ${u.num} (2 Câu Trắc Nghiệm Tự Chấm)
            </h4>
            <span class="text-[11px] text-gray-400">Chọn đáp án đúng nhất</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${u.quizzes.map((quiz, qIdx) => `
              <div class="quiz-item p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/80 space-y-2.5">
                <p class="text-xs font-bold text-gray-900 dark:text-white flex items-start gap-1.5">
                  <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold">Q${qIdx + 1}</span>
                  <span>${quiz.q}</span>
                </p>
                <div class="space-y-2">
                  ${quiz.options.map((opt, optIdx) => `
                    <button onclick="checkUnitQuiz(this, ${u.num}, ${qIdx}, ${optIdx}, ${quiz.ans})" class="quiz-opt-btn w-full text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 text-xs text-gray-700 dark:text-gray-300 transition flex items-center justify-between">
                      <span><b>${String.fromCharCode(65 + optIdx)}.</b> ${opt}</span>
                      <i class="quiz-feedback-icon fa-regular fa-circle text-gray-300 text-xs"></i>
                    </button>
                  `).join('')}
                </div>
                <div class="quiz-expl hidden text-[11px] p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mt-2">
                  💡 <b>Giải thích:</b> ${quiz.explain}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </section>
      `;
    }).join('');
  }).join('');
}

// Generate Navigation Links in Sidebar
function renderSidebarNavLinks() {
  return themesData.map(theme => {
    return theme.uroks.map(u => `
      <a href="#urok-${u.num}" data-id="${u.num}" class="unit-nav-link flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 transition group">
        <div class="flex items-center gap-2 truncate">
          <span class="w-6 h-6 rounded-lg ${theme.part === 'Tập Một' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'} font-bold flex items-center justify-center text-[10px] shrink-0">
            ${u.num}
          </span>
          <span class="truncate font-semibold">${u.titleRu}</span>
        </div>
        <span class="text-[10px] text-gray-400 shrink-0 ml-1">Урок ${u.num}</span>
      </a>
    `).join('');
  }).join('');
}

// Client-side script logic
const clientScript = `
    // Theme Switcher Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElem = document.documentElement;

    function applyInitialTheme() {
      const saved = localStorage.getItem('codehub_theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElem.classList.add('dark');
      } else {
        htmlElem.classList.remove('dark');
      }
    }
    applyInitialTheme();

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function() {
        if (htmlElem.classList.contains('dark')) {
          htmlElem.classList.remove('dark');
          localStorage.setItem('codehub_theme', 'light');
        } else {
          htmlElem.classList.add('dark');
          localStorage.setItem('codehub_theme', 'dark');
        }
      });
    }

    // Web Speech API Voice synthesis (ru-RU) with dynamic rate slider
    let currentSpeechRate = 0.85;
    const rateRange = document.getElementById('speechRateRange');
    const rateLabel = document.getElementById('rateLabel');

    if (rateRange && rateLabel) {
      rateRange.addEventListener('input', (e) => {
        currentSpeechRate = parseFloat(e.target.value);
        rateLabel.innerText = currentSpeechRate.toFixed(1) + 'x';
      });
    }

    function speakText(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[\\/\\\\#,+()$~%.'":*?<>{}]/g, ' ');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ru-RU';
        utterance.rate = currentSpeechRate;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Trình duyệt của bạn hiện chưa hỗ trợ Web Speech API.');
      }
    }

    function playRussian(text) {
      speakText(text);
    }

    // Modals controls
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

    // Interactive Quiz Tracking
    const answeredSet = new Set();
    const totalQuizQuestions = 32;

    function checkUnitQuiz(btn, urokNum, qIdx, optIdx, correctIdx) {
      const parent = btn.closest('.quiz-item');
      const allBtns = parent.querySelectorAll('.quiz-opt-btn');
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-rose-500', 'bg-rose-50');
      });

      const icon = btn.querySelector('.quiz-feedback-icon');
      if (optIdx === correctIdx) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-800', 'dark:text-emerald-300', 'font-bold');
        icon.className = 'quiz-feedback-icon fa-solid fa-circle-check text-emerald-500';
      } else {
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-800', 'dark:text-rose-300', 'font-bold');
        icon.className = 'quiz-feedback-icon fa-solid fa-circle-xmark text-rose-500';
        const correctBtn = allBtns[correctIdx];
        if (correctBtn) {
          correctBtn.classList.add('border-emerald-500', 'bg-emerald-50/50', 'dark:bg-emerald-950/20');
          correctBtn.querySelector('.quiz-feedback-icon').className = 'quiz-feedback-icon fa-solid fa-circle-check text-emerald-500';
        }
      }

      parent.querySelector('.quiz-expl')?.classList.remove('hidden');
      answeredSet.add(urokNum + '-' + qIdx);
      updateProgressBar();
    }

    function updateProgressBar() {
      const count = answeredSet.size;
      const pct = Math.min(100, Math.round((count / totalQuizQuestions) * 100));
      document.getElementById('answered-count').innerText = count;
      document.getElementById('progress-percent').innerText = pct + '%';
      document.getElementById('progress-bar').style.width = pct + '%';
    }

    // Filter sidebar tabs (All, Tap 1: 1-9, Tap 2: 10-16)
    function filterNavUnits(tab) {
      const links = document.querySelectorAll('.unit-nav-link');
      links.forEach(l => {
        const id = parseInt(l.getAttribute('data-id'));
        if (tab === 'all') {
          l.classList.remove('hidden');
        } else if (tab === 'T1') {
          if (id <= 9) l.classList.remove('hidden'); else l.classList.add('hidden');
        } else if (tab === 'T2') {
          if (id >= 10) l.classList.remove('hidden'); else l.classList.add('hidden');
        }
      });
    }

    // Live search inside urok page
    const searchInput = document.getElementById('unitSearchInput');
    searchInput?.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      const sections = document.querySelectorAll('.unit-section');
      sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
    });

    // ==================== TRẠNG NGUYÊN (60:00) LOGIC ====================
    let examTimeSeconds = 3600;
    let examInterval = null;
    const examQuestionsData = ` + JSON.stringify(examQuestions, null, 2) + `;
    let userAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      userAnswers = {};
      examTimeSeconds = 3600;
      document.getElementById('exam-questions-list').classList.remove('hidden');
      document.getElementById('exam-result-view').classList.add('hidden');
      document.getElementById('exam-submit-btn').classList.remove('hidden');
      renderExamQuestions();
      startExamTimer();
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
      if (examInterval) clearInterval(examInterval);
    }

    function startExamTimer() {
      if (examInterval) clearInterval(examInterval);
      updateExamTimerDisplay();
      examInterval = setInterval(() => {
        examTimeSeconds--;
        if (examTimeSeconds <= 0) {
          clearInterval(examInterval);
          submitExam();
        } else {
          updateExamTimerDisplay();
        }
      }, 1000);
    }

    function updateExamTimerDisplay() {
      const mins = Math.floor(examTimeSeconds / 60);
      const secs = examTimeSeconds % 60;
      document.getElementById('exam-timer').innerText = 
        (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-questions-list');
      let html = '';
      for (let idx = 0; idx < examQuestionsData.length; idx++) {
        const q = examQuestionsData[idx];
        html += '<div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-2.5">';
        html += '  <div class="font-bold text-gray-900 dark:text-white flex items-start gap-2">';
        html += '    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono text-xs">#' + (idx + 1) + '</span>';
        html += '    <span>' + q.q + '</span>';
        html += '  </div>';
        html += '  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">';
        for (let oIdx = 0; oIdx < q.opts.length; oIdx++) {
          const opt = q.opts[oIdx];
          const char = String.fromCharCode(65 + oIdx);
          html += '    <button onclick="selectExamOption(' + idx + ', ' + oIdx + ', this)" class="exam-opt-btn-' + idx + ' p-2.5 rounded-lg bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 text-left hover:border-blue-400 transition font-medium text-gray-700 dark:text-gray-300">';
          html += '      <span class="font-bold mr-1 text-blue-500">' + char + '.</span> ' + opt;
          html += '    </button>';
        }
        html += '  </div>';
        html += '</div>';
      }
      container.innerHTML = html;
    }

    function selectExamOption(qIdx, oIdx, btn) {
      userAnswers[qIdx] = oIdx;
      const allBtns = document.querySelectorAll('.exam-opt-btn-' + qIdx);
      allBtns.forEach(b => {
        b.classList.remove('bg-blue-50', 'dark:bg-blue-950/60', 'border-blue-500', 'text-blue-700', 'dark:text-blue-300', 'font-bold');
      });
      btn.classList.add('bg-blue-50', 'dark:bg-blue-950/60', 'border-blue-500', 'text-blue-700', 'dark:text-blue-300', 'font-bold');
      
      const count = Object.keys(userAnswers).length;
      document.getElementById('exam-status-text').innerText = 'Đã chọn ' + count + '/40 câu';
    }

    function submitExam() {
      if (examInterval) clearInterval(examInterval);
      let score = 0;
      examQuestionsData.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) {
          score++;
        }
      });

      document.getElementById('exam-questions-list').classList.add('hidden');
      document.getElementById('exam-submit-btn').classList.add('hidden');
      const resView = document.getElementById('exam-result-view');
      resView.classList.remove('hidden');

      const percent = Math.round((score / 40) * 100);
      document.getElementById('exam-final-score').innerText = 'Bạn đạt ' + score + '/40 điểm (' + percent + '%)';
      
      let rank = "Trạng Nguyên Nga Ngữ Xuất Sắc";
      if (percent < 50) rank = "Cần Ôn Luyện Thêm";
      else if (percent < 80) rank = "Bảng Nhãn Nga Ngữ";
      document.getElementById('exam-final-rank').innerText = rank;
    }
`;

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Nga 6 (Русский язык 6 - CTGDPT 2018: 16 Bài học • Web Speech API Audio &amp; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            blue: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554'
            },
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0a0d14'
            }
          }
        }
      }
    };
  </script>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', sans-serif; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-thumb { background: #334155; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .vocab-card {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .vocab-card:hover {
      transform: translateY(-2px);
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen antialiased transition-colors duration-200">

  <!-- ==================== HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-red-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <i class="fa-solid fa-flag text-lg"></i>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block leading-tight">CodeHub THCS</span>
            <h1 class="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white leading-tight">TIẾNG NGA 6</h1>
          </div>
        </a>
        <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          Русский язык 6 &bull; 16 Bài học &bull; 5 Chủ đề
        </span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Nút Luyện Phát Âm (Phonetics Studio) -->
        <button onclick="openPhoneticsModal()" class="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold transition flex items-center gap-1.5 border border-blue-200 dark:border-blue-800">
          <i class="fa-solid fa-microphone-lines text-blue-600"></i>
          <span class="hidden md:inline">5 Kiểu Ngữ Điệu (ИК)</span>
        </button>

        <!-- Nút Sổ Tay Ngữ Pháp (Grammar Handbook) -->
        <button onclick="openGrammarModal()" class="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800">
          <i class="fa-solid fa-book-bookmark text-indigo-600"></i>
          <span class="hidden md:inline">Sổ Tay 6 Cách</span>
        </button>

        <!-- Dark/Light Theme Toggle -->
        <button id="theme-toggle" class="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition" title="Đổi giao diện sáng/tối">
          <i class="fa-solid fa-sun text-sm dark:hidden text-amber-500"></i>
          <i class="fa-solid fa-moon text-sm hidden dark:inline text-blue-400"></i>
        </button>

        <!-- Nút Trạng Nguyên 60:00 -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white text-xs font-black shadow-md shadow-blue-500/20 transition flex items-center gap-1.5">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== BODY WRAPPER ==================== -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex flex-col lg:flex-row gap-6">

      <!-- ==================== SIDEBAR ==================== -->
      <aside class="w-full lg:w-72 flex-shrink-0">
        <div class="sticky top-20 bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          
          <!-- Search in page -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="unitSearchInput" placeholder="Tìm từ vựng, ngữ pháp, bài học..."
              class="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>

          <!-- Progress Widget -->
          <div class="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950/40 dark:to-gray-800 border border-blue-100 dark:border-blue-900/40">
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span class="font-bold text-blue-900 dark:text-blue-300">Tiến độ bài học</span>
              <span id="progress-percent" class="font-bold text-blue-600 dark:text-blue-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-blue-600 rounded-full transition-all duration-300" style="width: 0%;"></div>
            </div>
            <div class="mt-2 text-[10px] text-gray-500 dark:text-gray-400 flex justify-between">
              <span>Đã trả lời <b id="answered-count">0</b>/32 câu</span>
              <span>16 Bài học</span>
            </div>
          </div>

          <!-- Voice Selector & Speed -->
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 space-y-2 text-xs">
            <div class="flex items-center justify-between font-bold text-gray-700 dark:text-gray-300">
              <span><i class="fa-solid fa-volume-high text-blue-500"></i> Tốc độ phát âm:</span>
              <span id="rateLabel" class="text-blue-600 font-mono">0.85x</span>
            </div>
            <input type="range" id="speechRateRange" min="0.6" max="1.2" step="0.05" value="0.85" class="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600">
            <p class="text-[10px] text-gray-400 leading-tight">Giọng đọc bản xứ ru-RU chuẩn mực qua Web Speech API.</p>
          </div>

          <!-- Navigation Links -->
          <div>
            <div class="flex items-center justify-between mb-2 px-1">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Danh mục 16 Bài học</span>
              <div class="flex gap-1 text-[10px]">
                <button onclick="filterNavUnits('all')" class="px-1.5 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">Tất cả</button>
                <button onclick="filterNavUnits('T1')" class="px-1.5 py-0.5 rounded text-gray-500 hover:text-gray-900 dark:hover:text-gray-200">Tập 1</button>
                <button onclick="filterNavUnits('T2')" class="px-1.5 py-0.5 rounded text-gray-500 hover:text-gray-900 dark:hover:text-gray-200">Tập 2</button>
              </div>
            </div>
            
            <div class="max-h-[380px] overflow-y-auto space-y-1 pr-1 text-xs">
              ${renderSidebarNavLinks()}
            </div>
          </div>

          <!-- Trạng Nguyên CTA Box in sidebar -->
          <div class="p-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-red-600 text-white space-y-2 shadow-md">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-trophy text-amber-300 text-base"></i>
              <span class="font-black text-xs uppercase tracking-wide">Trạng Nguyên 60:00</span>
            </div>
            <p class="text-[11px] text-blue-100 leading-tight">40 câu hỏi trắc nghiệm kiểm tra tổng hợp kiến thức 2 tập Tiếng Nga 6.</p>
            <button onclick="openExamModal()" class="w-full py-1.5 rounded-lg bg-white hover:bg-blue-50 text-blue-700 font-bold text-xs transition shadow-sm">
              Tham gia thi ngay
            </button>
          </div>

        </div>
      </aside>

      <!-- ==================== MAIN CONTENT ==================== -->
      <main class="flex-1 min-w-0 space-y-6">

        <!-- HERO BANNER -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 text-white shadow-xl relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 opacity-10 text-9xl font-black select-none pointer-events-none">
            РУС
          </div>
          <div class="relative z-10 max-w-2xl space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Chương trình GDPT 2018 &bull; Ngoại ngữ 1 &amp; 2
            </div>
            <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Khóa Học Tiếng Nga 6 Cốt Lõi
            </h2>
            <p class="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Trọn bộ 2 Tập sách với 5 Chủ đề lớn &amp; 16 Bài học (Уроки). Tích hợp phát âm giọng đọc tiếng Nga chuẩn bản xứ <strong>ru-RU qua Web Speech API</strong>, bảng từ vựng tương tác click-to-speak, sơ đồ tư duy trực quan SVG, sổ tay 6 cách Kasus, 5 kiểu ngữ điệu Nga (ИК-1 đến 5) và đấu trường Trạng Nguyên 60:00.
            </p>
            <div class="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-md text-white flex items-center gap-1.5">
                <i class="fa-solid fa-book-bookmark text-blue-300"></i> 16 Bài học &bull; 5 Chủ đề
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-md text-white flex items-center gap-1.5">
                <i class="fa-solid fa-volume-high text-emerald-300"></i> Web Speech API (ru-RU)
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-black/20 backdrop-blur-md text-white flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-emerald-300"></i> 32 Câu Trắc Nghiệm Tự Chấm
              </span>
            </div>
          </div>
        </div>

        <!-- 16 UROK SECTIONS -->
        <div class="space-y-6">
          ${renderUrokSections()}
        </div>

      </main>

    </div>
  </div>

  <!-- ==================== MODALS ==================== -->

  <!-- Modal 1: Luyện Ngữ Âm & 5 Kiểu Ngữ Điệu Nga (Phonetics Studio) -->
  <div id="phoneticsModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-microphone-lines text-lg text-emerald-300"></i>
          <h3 class="font-bold text-sm sm:text-base">5 Kiểu Ngữ Điệu Chuẩn Tiếng Nga (Интонационные Конструкции: ИК-1 – ИК-5)</h3>
        </div>
        <button onclick="closePhoneticsModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
        <p class="text-gray-600 dark:text-gray-300">Trong tiếng Nga, cùng một câu chữ nhưng khi thay đổi kiểu ngữ điệu (ИК) sẽ mang ý nghĩa câu trần thuật, câu hỏi hay cảm thán khác nhau. Dưới đây là 5 kiểu ngữ điệu bắt buộc trong chương trình Lớp 6:</p>
        
        <div class="space-y-3">
          <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-blue-600 dark:text-blue-400">ИК-1: Câu trần thuật hoàn tất</span>
              <button onclick="speakText('Я учусь в шестом классе.')" class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold">🔊 Nghe mẫu</button>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Đặc điểm: Hạ giọng đều đặn ở âm tiết mang trọng âm cho đến hết câu.</p>
            <div class="font-mono text-xs text-gray-800 dark:text-gray-200">Ví dụ: <em>Я учусь в шестом классе.</em> (Tôi học ở lớp 6.)</div>
          </div>

          <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-indigo-600 dark:text-indigo-400">ИК-2: Câu hỏi có từ để hỏi (Кто, Что, Где, Куда...)</span>
              <button onclick="speakText('Как тебя зовут? Где ты живёшь?')" class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold">🔊 Nghe mẫu</button>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Đặc điểm: Nhấn mạnh cao giọng ở từ để hỏi, sau đó hạ giọng về cuối câu.</p>
            <div class="font-mono text-xs text-gray-800 dark:text-gray-200">Ví dụ: <em>Как тебя зовут?</em> (Bạn tên là gì?)</div>
          </div>

          <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-emerald-600 dark:text-emerald-400">ИК-3: Câu hỏi không có từ để hỏi (Yes/No Question)</span>
              <button onclick="speakText('Антон дома? Ты свободен сейчас?')" class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold">🔊 Nghe mẫu</button>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Đặc điểm: Vút giọng lên rất cao ở từ trọng tâm muốn hỏi thông tin.</p>
            <div class="font-mono text-xs text-gray-800 dark:text-gray-200">Ví dụ: <em>Антон дома?</em> (Anton có nhà không ạ?)</div>
          </div>

          <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-amber-600 dark:text-amber-400">ИК-4: Câu hỏi rút gọn với liên từ 'А...'</span>
              <button onclick="speakText('А ты? А твоя мама?')" class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs font-bold">🔊 Nghe mẫu</button>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Đặc điểm: Hạ giọng rồi ngân cao nhẹ ở cuối từ.</p>
            <div class="font-mono text-xs text-gray-800 dark:text-gray-200">Ví dụ: <em>А ты?</em> (Còn bạn thì sao?)</div>
          </div>

          <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-rose-600 dark:text-rose-400">ИК-5: Câu cảm thán ngợi ca</span>
              <button onclick="speakText('Какая красивая осень! Как здесь тихо!')" class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 text-xs font-bold">🔊 Nghe mẫu</button>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Đặc điểm: Lên giọng ở từ đầu và lên cao ở từ cuối cảm thán.</p>
            <div class="font-mono text-xs text-gray-800 dark:text-gray-200">Ví dụ: <em>Какая красивая осень!</em> (Mùa thu đẹp biết bao!)</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 2: Sổ Tay Ngữ Pháp Tiếng Nga 6 (Grammar Handbook) -->
  <div id="grammarModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-book-bookmark text-lg text-amber-300"></i>
          <h3 class="font-bold text-sm sm:text-base">Sổ Tay 6 Cách (Kasus) &amp; Trọng Tâm Ngữ Pháp Tiếng Nga 6</h3>
        </div>
        <button onclick="closeGrammarModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-5 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-table-list"></i> Bảng Hệ Thống 6 Cách Trong Tiếng Nga
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="border-b border-blue-200 dark:border-blue-800 font-bold">
                <tr>
                  <th class="py-2">Cách</th>
                  <th class="py-2">Tên tiếng Nga</th>
                  <th class="py-2">Câu hỏi</th>
                  <th class="py-2">Ý nghĩa chính</th>
                  <th class="py-2">Ví dụ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-blue-100 dark:divide-blue-900/40">
                <tr><td>Cách 1</td><td>Именительный (И.п.)</td><td>Кто? Что?</td><td>Chủ ngữ câu</td><td>Это <b>учебник</b>.</td></tr>
                <tr><td>Cách 2</td><td>Родительный (Р.п.)</td><td>Кого? Чего? Чей?</td><td>Sở hữu, số lượng, chúc tụng</td><td>Желаю <b>здоровья</b>.</td></tr>
                <tr><td>Cách 3</td><td>Дательный (Д.п.)</td><td>Кому? Чему?</td><td>Đối tượng gián tiếp, sở thích</td><td>Мне <b>нравится</b> музыка.</td></tr>
                <tr><td>Cách 4</td><td>Винительный (В.п.)</td><td>Кого? Что? Куда?</td><td>Tân ngữ trực tiếp, hướng đi</td><td>Я жду <b>сестру</b>.</td></tr>
                <tr><td>Cách 5</td><td>Творительный (Т.п.)</td><td>Кем? Чем?</td><td>Công cụ, nghề nghiệp, đam mê</td><td>Он станет <b>врачом</b>.</td></tr>
                <tr><td>Cách 6</td><td>Предложный (П.п.)</td><td>О ком? О чём? Где?</td><td>Nơi chốn, nội dung bàn luận</td><td>Учусь в <b>школе</b>.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900 space-y-2">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
            <i class="fa-solid fa-route"></i> 3 Tiền Tố Động Từ Chuyển Động Cốt Lõi
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>по-</strong>: Bắt đầu khởi hành, sắp đi (пойти, поехать: <em>Сначала сделаю уроки, потом пойду гулять</em>).<br>
            &bull; <strong>при-</strong>: Đã đến nơi đích, xuất hiện (прийти, приехать: <em>Поезд приедет в полдень</em>).<br>
            &bull; <strong>у-</strong>: Đã rời khỏi điểm xuất phát, đi vắng (уйти, уехать: <em>Антона нет дома, он ушёл в библиотеку</em>).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-2">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-arrows-spin"></i> Cặp Thể Của Động Từ (Виды глагола: НСВ vs СВ)
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>НСВ (Chưa hoàn thành thể)</strong>: Nhấn mạnh quá trình, thói quen lặp lại thường xuyên (читать, делать, объяснять).<br>
            &bull; <strong>СВ (Hoàn thành thể)</strong>: Nhấn mạnh kết quả hoàn tất, hành động xảy ra một lần duy nhất (прочитать, сделать, объяснить).
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 3: Hội Thi Trạng Nguyên Nga Ngữ 6 (60:00) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Exam Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-award text-amber-300 text-lg"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black tracking-tight">HỘI THI TRẠNG NGUYÊN NGA NGỮ 6</h3>
            <p class="text-[11px] text-blue-100">40 câu hỏi trắc nghiệm &bull; Thời gian: 60:00</p>
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
          <p id="exam-final-score" class="text-base font-bold text-blue-600 dark:text-blue-400"></p>
          <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-w-md mx-auto text-xs space-y-1">
            <p><strong>Danh hiệu:</strong> <span id="exam-final-rank" class="text-amber-500 font-bold">Trạng Nguyên Nga Ngữ Xuất Sắc</span></p>
            <p class="text-gray-500 dark:text-gray-400">Chứng nhận hoàn thành chương trình Tiếng Nga 6 chuẩn GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-850">
        <span id="exam-status-text" class="text-xs text-gray-500">Đã chọn 0/40 câu</span>
        <button id="exam-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-xs shadow-md transition">
          Nộp bài thi
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 transition-colors">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <div class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
          <i class="fa-solid fa-flag"></i>
        </div>
        <span class="font-bold text-gray-700 dark:text-gray-300">CodeHub - Nền Tảng Học Tập Số Hóa GDPT 2018</span>
      </div>
      <p>Chương trình Tiếng Nga 6 (Русский язык 6): 2 Tập &bull; 5 Chủ đề &bull; 16 Bài học &bull; Giao diện chuẩn Tiếng Anh 6.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
${clientScript}
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengnga_6.html', fullHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/russian_6.html', fullHtml, 'utf8');

console.log("Successfully generated courses/tiengnga_6.html and courses/russian_6.html with English 6 UI! Size:", fullHtml.length);
