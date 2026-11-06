const fs = require('fs');
const path = require('path');
const { themesData } = require('./data_tiengnga6.js');

console.log("Building complete HTML for tiengnga_6.html...");

// 40 questions for Trang Nguyen Russian 6 Competition
const examQuestions = [
  { q: "Từ nào trong tiếng Nga có nghĩa là 'gọi điện thoại lại'?", options: ["перезвонить", "звонить", "позвонить", "ждать"], ans: 0 },
  { q: "Điền đại từ ở Cách 3: 'Я перезвоню _____ (ты) через десять минут.'", options: ["тебе", "тебя", "тобой", "о тебе"], ans: 0 },
  { q: "Cụm từ lịch sự 'Làm ơn cho hỏi, bác có nhà không ạ?' trong tiếng Nga là:", options: ["Будьте добры, Антон дома?", "Антон, иди сюда!", "Где Антон?", "Кто здесь?"], ans: 0 },
  { q: "Từ nào chỉ đồ dùng học tập 'thước kẻ'?", options: ["линейка", "ручка", "тетрадь", "ластик"], ans: 0 },
  { q: "Chọn dạng đúng của số thứ tự: 'Учебники лежат на _____ (четвёртая) полке.'", options: ["четвёртой", "четвёртая", "четвёртую", "четвёртом"], ans: 0 },
  { q: "Chọn dạng đúng: 'Я учусь в _____ (шестой) классе этой школы.'", options: ["шестом", "шестой", "шестого", "шестому"], ans: 0 },
  { q: "Mùa thu trong tiếng Nga là từ nào (giống cái)?", options: ["осень", "весна", "лето", "зима"], ans: 0 },
  { q: "Điền tính từ đuôi mềm ở Cách 6: 'Мы отдыхаем на _____ (свежий) воздухе.'", options: ["свежем", "свежим", "свежего", "свежему"], ans: 0 },
  { q: "Cấu trúc 'giống ai' đi với giới từ 'на' và Cách mấy?", options: ["Cách 4 (Akkusativ)", "Cách 2 (Genitiv)", "Cách 3 (Dativ)", "Cách 5 (Instrumental)"], ans: 0 },
  { q: "Câu nào mang nghĩa 'Bạn rất giống anh trai của mình'?", options: ["Ты очень похожа на своего брата.", "Ты похожа с твоим братом.", "Ты похожа о брате.", "Ты похожа брату."], ans: 0 },
  { q: "Đại từ sở hữu 'свой' (của mình) được dùng khi nào?", options: ["Khi người sở hữu chính là chủ ngữ của câu", "Khi chủ ngữ là người khác", "Chỉ dùng cho đồ vật", "Không bao giờ đi với danh từ giống đực"], ans: 0 },
  { q: "Điền đại từ свой: 'Я очень люблю _____ (своя) семью.' (Cách 4)", options: ["свою", "своей", "своей", "своим"], ans: 0 },
  { q: "Cấu trúc tương đương với 'Я люблю музыку' là:", options: ["Мне нравится музыка.", "У меня есть музыка.", "Я нравлюсь музыке.", "Мне нравиться музыка."], ans: 0 },
  { q: "Tính từ ngắn đuôi diễn tả 'đang rảnh rỗi' (dành cho bạn nam) là:", options: ["свободен", "свободна", "свободно", "свободные"], ans: 0 },
  { q: "Thủ đô của Liên bang Nga là thành phố nào?", options: ["Москва", "Санкт-Петербург", "Казань", "Сочи"], ans: 0 },
  { q: "Hồ nước sâu nhất và chứa lượng nước ngọt lớn nhất thế giới ở Nga là:", options: ["озеро Байкал", "Ладожское озеро", "Онежское озеро", "Каспийское море"], ans: 0 },
  { q: "Đại từ quan hệ 'который' đi với danh từ giống cái 'столица' ở Cách 1 là:", options: ["которая", "который", "которое", "которые"], ans: 0 },
  { q: "Để nói 'Việt Nam nằm ở khu vực Đông Nam Á', ta dùng giới từ và cách nào?", options: ["в Юgo-Восточной Азии (Cách 6)", "на Юgo-Восточную Азию", "о Юgo-Восточной Азии", "с Юgo-Восточной Азией"], ans: 0 },
  { q: "Động từ 'являться' (là / đóng vai trò là) đòi hỏi danh từ ở Cách mấy?", options: ["Cách 5 (Tvoritel'nyy)", "Cách 1", "Cách 4", "Cách 6"], ans: 0 },
  { q: "'Ханой является _____ (столица) Вьетнама' điền đúng là:", options: ["столицей", "столицу", "столице", "столицы"], ans: 0 },
  { q: "Hang động tự nhiên lớn nhất thế giới tại Việt Nam được nhắc tới là:", options: ["пещера Шондонг", "пещера Фонгня", "пещера Хыонг", "пещера Даугод"], ans: 0 },
  { q: "Cặp câu nào dưới đây diễn đạt đồng nghĩa?", options: ["Я был в Москве. = Я ездил в Москву.", "Я был в Москве. = Я уехал из Москвы.", "Я был в Москве. = Я живу в Москве.", "Я был в Москве. = Я не видел Москву."], ans: 0 },
  { q: "Hồ Hoàn Kiếm được mệnh danh là trái tim của Hà Nội: 'Озеро Хоанкием называется _____ (сердце) Ханоя.'", options: ["сердцем", "сердцу", "сердца", "сердце"], ans: 0 },
  { q: "Cấu trúc chúc mừng: 'Поздравлять кого (4) _____ чем (5)' điền giới từ nào?", options: ["с", "на", "о", "по"], ans: 0 },
  { q: "Câu chúc 'Chúc bạn dồi dào sức khỏe và hạnh phúc' trong tiếng Nga là:", options: ["Желаю тебе крепкого здоровья и счастья!", "Желаю тебе много денег!", "Поздравляю тебя на здоровье!", "Будь здоров без счастья!"], ans: 0 },
  { q: "Từ chỉ tần suất ở Cách 4 không dùng giới từ: 'Mỗi năm bố mẹ đều tặng tôi sách' là:", options: ["Каждый год", "В каждый год", "На каждом году", "С каждым годом"], ans: 0 },
  { q: "Tiền tố nào của động từ chuyển động biểu thị hành động 'bắt đầu khởi hành'?", options: ["по- (пойти, поехать)", "при- (прийти, приехать)", "у- (уйти, уехать)", "в- (войти)"], ans: 0 },
  { q: "Tiền tố nào của động từ chuyển động biểu thị hành động 'đã đến nơi đích'?", options: ["при- (прийти, приехать)", "по- (пойти)", "у- (уйти)", "вы- (выйти)"], ans: 0 },
  { q: "Tiền tố nào biểu thị 'đã rời khỏi nơi xuất phát, đi vắng'?", options: ["у- (уйти, уехать)", "при- (прийти)", "по- (пойти)", "под- (подойти)"], ans: 0 },
  { q: "Đi sau số '2, 3, 4', danh từ 'градус' biến đổi thành:", options: ["градуса", "градусов", "градус", "градусам"], ans: 0 },
  { q: "Cấp so sánh hơn của tính từ 'тёплый' (ấm áp) là:", options: ["теплее", "более тёплый", "самый тёплый", "тепло"], ans: 0 },
  { q: "Hành động đồng thời diễn ra trong quá khứ dùng thể động từ nào?", options: ["Cả 2 động từ đều ở thể Chưa hoàn thành (НСВ)", "Cả 2 đều ở thể Hoàn thành (СВ)", "Động từ 1 СВ, động từ 2 НСВ", "Không cần chia thì"], ans: 0 },
  { q: "Hành động nối tiếp: 'Trước tiên làm bài tập, sau đó đi chơi' dùng cặp liên từ:", options: ["Сначала..., потом...", "Когда..., тогда...", "Хотя..., но...", "Если..., то..."], ans: 0 },
  { q: "Từ nào trong tiếng Nga có nghĩa là 'thời khóa biểu'?", options: ["расписание", "учебник", "перемена", "столовая"], ans: 0 },
  { q: "Đổi câu trực tiếp sang gián tiếp: 'Антон сказал: \"Я люблю математику\"':", options: ["Антон сказал, что он любит математику.", "Антон сказал, как он любит математику.", "Антон сказал, если он любит математику.", "Антон сказал, ли он любит."], ans: 0 },
  { q: "Động từ 'увлекаться' (say mê, đam mê) đòi hỏi danh từ ở Cách mấy?", options: ["Cách 5 (Tvoritel'nyy)", "Cách 2", "Cách 3", "Cách 4"], ans: 0 },
  { q: "Điền danh từ ở Cách 5: 'Я хочу стать хорошим _____ (врач).'", options: ["врачом", "врача", "врачу", "враче"], ans: 0 },
  { q: "Nghề nghiệp 'kỹ sư lập trình viên' trong tiếng Nga là:", options: ["программист", "переводчик", "инженер", "архитектор"], ans: 0 },
  { q: "Câu ngạn ngữ 'Повторение – мать учения' mang ý nghĩa gì?", options: ["Ôn tập là mẹ của thành công / Học đi đôi với hành", "Học nhiều thì mau quên", "Không cần ôn lại bài cũ", "Bài thi luôn rất khó"], ans: 0 },
  { q: "Mã ngôn ngữ chuẩn Web Speech API của tiếng Nga là gì?", options: ["ru-RU", "de-DE", "zh-CN", "en-US"], ans: 0 }
];

function renderSidebar() {
  return `
    <div class="space-y-4">
      <div class="px-3 py-2 bg-gradient-to-r from-blue-600/10 via-red-500/10 to-transparent dark:from-blue-950/40 rounded-xl border border-blue-500/20">
        <span class="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">Mục Lục Tiếng Nga 6</span>
        <p class="text-xs text-gray-600 dark:text-gray-300">Chương trình GDPT 2018 &bull; Ngoại ngữ 1 &amp; 2</p>
      </div>

      <!-- Quick Section Jump -->
      <div class="space-y-1 text-xs">
        <a href="#tap-1" class="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold transition">
          <span><i class="fa-solid fa-bookmark text-blue-500 mr-2"></i>I. Tập Một (Урок 1–9)</span>
          <span class="text-[10px] bg-blue-200/60 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 px-1.5 py-0.5 rounded font-black">Тема 1-3</span>
        </a>
        <a href="#tap-2" class="flex items-center justify-between px-3 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-bold transition">
          <span><i class="fa-solid fa-book-open text-red-500 mr-2"></i>II. Tập Hai (Урок 10–16)</span>
          <span class="text-[10px] bg-red-200/60 dark:bg-red-900/60 text-red-800 dark:text-red-200 px-1.5 py-0.5 rounded font-black">Тема 4-5</span>
        </a>
        <a href="#kien-thuc-bat-buoc" class="flex items-center px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-star text-amber-500 mr-2"></i>III. 16 Trọng tâm bắt buộc
        </a>
        <a href="#ngu-dieu-tieng-nga" class="flex items-center px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-waveform-lines text-emerald-500 mr-2"></i>IV. 5 Kiểu ngữ điệu (ИК-1 đến 5)
        </a>
        <a href="#chi-tiet-urok" class="flex items-center px-3 py-1.5 rounded-lg text-red-600 dark:text-red-400 font-bold transition">
          <i class="fa-solid fa-list-check mr-2"></i>V. Chi tiết 16 Bài học
        </a>
        <a href="#dinh-huong-kiem-tra" class="flex items-center px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-semibold transition">
          <i class="fa-solid fa-trophy text-amber-500 mr-2"></i>VI. Thi Trạng Nguyên 60:00
        </a>
      </div>

      <!-- Detail unit by unit tree -->
      <div class="pt-2 border-t border-gray-100 dark:border-gray-800">
        <div class="text-[10px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 px-2 mb-2 flex items-center justify-between">
          <span>Chi tiết 16 Bài học</span>
          <span class="text-[9px] bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-1 rounded">5 Chủ đề</span>
        </div>
        <div class="space-y-2 text-xs">
          ${themesData.map(t => `
            <div class="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-dark-card/40 p-2 space-y-1">
              <div class="font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span class="truncate">${t.themeTitleRu.split(':')[0]}</span>
                <span class="text-[10px] text-gray-400 shrink-0 ml-1">${t.part}</span>
              </div>
              <div class="pl-2 space-y-0.5 border-l border-gray-200 dark:border-gray-700 ml-1">
                ${t.uroks.map(u => `
                  <a href="#urok-${u.num}" class="flex items-center justify-between text-[11px] text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 py-0.5 truncate transition">
                    <span class="truncate"><span class="font-semibold text-gray-700 dark:text-gray-300">Урок ${u.num}:</span> ${u.titleRu}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderOverviewTable(part) {
  const filteredThemes = themesData.filter(t => t.part === part);
  return `
    <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
      <table class="w-full text-left text-xs sm:text-sm">
        <thead class="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/40 dark:to-red-950/20 text-gray-900 dark:text-white font-bold border-b border-gray-200 dark:border-gray-800">
          <tr>
            <th class="py-3 px-3 text-center whitespace-nowrap">Chủ đề</th>
            <th class="py-3 px-4">Tên chủ đề tiếng Nga &amp; Tiếng Việt</th>
            <th class="py-3 px-4">Các bài học (Уроки) &amp; Trọng tâm</th>
            <th class="py-3 px-3 text-center">Phát âm</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          ${filteredThemes.map(t => `
            <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
              <td class="py-3 px-3 font-bold text-blue-600 dark:text-blue-400 text-center whitespace-nowrap">
                Тема ${t.themeNum}
              </td>
              <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">
                <div>${t.themeTitleRu}</div>
                <div class="text-xs font-normal text-gray-500 dark:text-gray-400">${t.themeTitleVi}</div>
              </td>
              <td class="py-3 px-4">
                <div class="space-y-1.5 text-xs">
                  ${t.uroks.map(u => `
                    <div class="flex items-start gap-1.5">
                      <span class="font-bold text-red-600 dark:text-red-400 shrink-0">Урок ${u.num}:</span>
                      <div>
                        <span class="font-semibold text-gray-800 dark:text-gray-200">${u.titleRu}</span>
                        <span class="block text-[11px] text-gray-500 dark:text-gray-400 italic">${u.titleVi}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </td>
              <td class="py-3 px-3 text-center">
                <button onclick="playRussian('${t.themeTitleRu.replace(/'/g, "\\'")}')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition" title="Nghe tiêu đề chủ đề">
                  <i class="fa-solid fa-volume-high text-xs"></i>
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderDetailedUroks() {
  return themesData.map(theme => `
    <div class="space-y-6">
      <div class="p-4 rounded-2xl bg-gradient-to-r from-blue-600/10 via-red-500/10 to-transparent border border-blue-500/20 flex items-center justify-between">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-[10px] uppercase tracking-wider">
            ${theme.part} &bull; Chủ đề ${theme.themeNum}
          </span>
          <h3 class="text-base sm:text-lg font-black text-gray-900 dark:text-white mt-1">${theme.themeTitleRu}</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400">${theme.themeTitleVi} &bull; ${theme.themeDesc}</p>
        </div>
        <button onclick="playRussian('${theme.themeTitleRu.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 text-xs font-semibold text-blue-600 hover:text-blue-700 transition flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid fa-volume-high"></i> Nghe chủ đề
        </button>
      </div>

      ${theme.uroks.map(u => `
        <article id="urok-${u.num}" class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-6 scroll-mt-24">
          <!-- Lesson Header -->
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl russian-flag-gradient text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20">
                ${u.num}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold text-[10px] uppercase tracking-wider">
                    Урок ${u.num}
                  </span>
                  <span class="text-[11px] font-semibold text-gray-400">Tiếng Nga 6</span>
                </div>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white mt-0.5">${u.titleRu}</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 italic">"${u.titleVi}"</p>
              </div>
            </div>
            <button onclick="playRussian('${u.titleRu.replace(/'/g, "\\'")}')"
              class="px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-dark-card hover:bg-blue-50 text-gray-600 dark:text-gray-300 hover:text-blue-600 text-xs font-semibold flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 transition">
              <i class="fa-solid fa-volume-high text-blue-500"></i> <span>Nghe tiêu đề bài</span>
            </button>
          </div>

          <!-- Core Grammar Summary Banner -->
          <div class="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2.5">
            <i class="fa-solid fa-graduation-cap text-blue-600 dark:text-blue-400 text-base mt-0.5 shrink-0"></i>
            <div>
              <span class="font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider text-[10px] block">Kiến thức cốt lõi bài học:</span>
              <span>${u.grammar}</span>
            </div>
          </div>

          <!-- 1. Vocabulary with Web Speech API -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-spell-check text-blue-500"></i> Bảng từ vựng trọng tâm (Click vào thẻ hoặc bấm nút "🔊 Từ" để nghe phát âm ru-RU)
              </h4>
              <span class="text-[11px] font-semibold text-gray-400">${u.vocab.length} từ vựng</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              ${u.vocab.map(v => `
                <div class="vocab-chip p-3 rounded-2xl bg-gray-50/80 dark:bg-dark-card border border-gray-200 dark:border-gray-800 hover:border-blue-400 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition flex items-center justify-between gap-2 shadow-sm">
                  <div class="flex-1 cursor-pointer" onclick="playRussian('${v.ru.replace(/'/g, "\\'")}')">
                    <span class="font-bold text-gray-900 dark:text-white text-xs sm:text-sm block">${v.ru}</span>
                    <span class="text-[10px] text-blue-500 font-mono">[${v.phonetic}]</span>
                    <span class="block text-[11px] text-gray-500 dark:text-gray-400">${v.vi}</span>
                  </div>
                  <button onclick="playRussian('${v.ru.replace(/'/g, "\\'")}')" class="btn-audio shrink-0 flex items-center gap-1" title="Nghe từ">
                    🔊 Từ
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 2. Sample Sentences with Audio -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-comments text-emerald-500"></i> Câu mẫu ứng dụng chuẩn ngữ pháp (Click nút "🔊 Cả câu" để nghe luyện khẩu ngữ)
              </h4>
              <span class="text-[11px] font-semibold text-gray-400">${u.sentences.length} câu trọng điểm</span>
            </div>
            <div class="p-4 rounded-2xl bg-gray-50/60 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2.5">
              ${u.sentences.map(s => `
                <div class="item-row flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div class="flex-1 flex flex-wrap items-baseline gap-2">
                    <span class="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm"><em>${s.ru}</em></span>
                    <span class="meaning text-xs text-gray-500 dark:text-gray-400">(${s.vi})</span>
                  </div>
                  <button onclick="playRussian('${s.ru.replace(/'/g, "\\'")}')" class="btn-audio btn-sentence shrink-0 flex items-center gap-1" title="Nghe cả câu">
                    🔊 Cả câu
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 3. Phonetics & Dialogue -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Phonetics -->
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
              <h5 class="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-waveform text-purple-500"></i> Quy tắc ngữ âm &amp; Ngữ điệu
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">${u.phoneticsRule}</p>
            </div>

            <!-- Dialogue -->
            <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-comment-dots text-blue-500"></i> Hội thoại mẫu (Диалог)
                </h5>
                <button onclick="playRussian('${u.dialogue.map(d => d.speaker + ': ' + d.text).join('. ').replace(/'/g, "\\'")}')" class="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <i class="fa-solid fa-play text-[10px]"></i> Nghe hội thoại
                </button>
              </div>
              <div class="space-y-1.5 text-xs">
                ${u.dialogue.map(d => `
                  <div class="flex items-start gap-2">
                    <span class="font-bold text-gray-800 dark:text-gray-200 shrink-0">${d.speaker}:</span>
                    <span class="text-gray-600 dark:text-gray-300 italic">"${d.text}"</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- 4. Interactive Quick Quiz -->
          <div class="p-4 rounded-2xl bg-gradient-to-r from-blue-500/5 via-red-500/5 to-transparent border border-blue-500/20 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                <i class="fa-solid fa-circle-question"></i> Kiểm tra nhanh Урок ${u.num} (Click để chọn đáp án)
              </span>
              <span class="text-[10px] font-semibold text-gray-400">Trắc nghiệm tương tác</span>
            </div>
            <p class="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">${u.quiz.q}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              ${u.quiz.options.map((opt, oIdx) => `
                <button onclick="checkAnswer(this, ${oIdx === u.quiz.ans}, '${u.quiz.explain.replace(/'/g, "\\'")}')"
                  class="p-2.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 text-left hover:border-blue-400 transition font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                  <span class="font-bold mr-1.5 text-blue-500">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                </button>
              `).join('')}
            </div>
            <div class="quiz-feedback hidden text-xs p-2.5 rounded-lg font-medium"></div>
          </div>
        </article>
      `).join('')}
    </div>
  `).join('');
}

// Client-side JavaScript content (safely constructed without conflicting quotes)
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

    // Web Speech API Voice synthesis (ru-RU)
    function playRussian(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[\\/\\\\#,+()$~%.'":*?<>{}]/g, ' ');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.85;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Trình duyệt của bạn hiện chưa hỗ trợ Web Speech API.');
      }
    }

    function speakRussian(text) {
      playRussian(text);
    }

    function toggleDrawer() {
      const drawer = document.getElementById('mobile-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer.classList.contains('-translate-x-full')) {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    function checkAnswer(btn, isCorrect, explain) {
      const parent = btn.parentElement;
      const buttons = parent.querySelectorAll('button');
      buttons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-blue-400');
      });

      const feedback = parent.parentElement.querySelector('.quiz-feedback');
      feedback.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        feedback.className = 'quiz-feedback text-xs p-2.5 rounded-lg font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i><strong>Chính xác!</strong> ' + explain;
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        feedback.className = 'quiz-feedback text-xs p-2.5 rounded-lg font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200';
        feedback.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-600 mr-1.5"></i><strong>Chưa đúng!</strong> ' + explain;
      }
    }

    const examQuestionsData = ` + JSON.stringify(examQuestions, null, 2) + `;
    let userAnswers = {};
    let timerInterval = null;
    let secondsLeft = 60 * 60;

    function openCertificationModal() {
      document.getElementById('certification-modal').classList.remove('hidden');
      userAnswers = {};
      secondsLeft = 60 * 60;
      document.getElementById('exam-questions-list').classList.remove('hidden');
      document.getElementById('certificate-result').classList.add('hidden');
      document.getElementById('submit-exam-btn').classList.remove('hidden');
      renderExamQuestions();
      startTimer();
    }

    function closeCertificationModal() {
      document.getElementById('certification-modal').classList.add('hidden');
      if (timerInterval) clearInterval(timerInterval);
    }

    function startTimer() {
      if (timerInterval) clearInterval(timerInterval);
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft <= 0) {
          clearInterval(timerInterval);
          submitExam();
        } else {
          updateTimerDisplay();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      document.getElementById('timer-display').innerText = 
        (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function renderExamQuestions() {
      const container = document.getElementById('exam-questions-list');
      let html = '';
      for (let idx = 0; idx < examQuestionsData.length; idx++) {
        const q = examQuestionsData[idx];
        html += '<div class="p-4 rounded-2xl bg-gray-50/70 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-3">';
        html += '  <div class="font-bold text-gray-900 dark:text-white flex items-start gap-2">';
        html += '    <span class="px-2 py-0.5 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs">#' + (idx + 1) + '</span>';
        html += '    <span>' + q.q + '</span>';
        html += '  </div>';
        html += '  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">';
        for (let oIdx = 0; oIdx < q.options.length; oIdx++) {
          const opt = q.options[oIdx];
          const char = String.fromCharCode(65 + oIdx);
          html += '    <button onclick="selectExamOption(' + idx + ', ' + oIdx + ', this)" class="exam-opt-btn-' + idx + ' p-2.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 text-left hover:border-blue-400 transition font-medium text-gray-700 dark:text-gray-300">';
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
      document.getElementById('exam-progress-text').innerText = 'Đã chọn ' + count + '/40 câu';
    }

    function submitExam() {
      if (timerInterval) clearInterval(timerInterval);
      let score = 0;
      examQuestionsData.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) {
          score++;
        }
      });

      document.getElementById('exam-questions-list').classList.add('hidden');
      document.getElementById('submit-exam-btn').classList.add('hidden');
      const certView = document.getElementById('certificate-result');
      certView.classList.remove('hidden');

      const percent = Math.round((score / 40) * 100);
      document.getElementById('cert-score').innerText = 'Bạn đạt ' + score + '/40 điểm (' + percent + '%)';
      
      let rank = "Trạng Nguyên Nga Ngữ Xuất Sắc";
      if (percent < 50) rank = "Cần Ôn Luyện Thêm";
      else if (percent < 80) rank = "Bảng Nhãn Nga Ngữ";
      document.getElementById('cert-rank').innerText = rank;
    }
`;

const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiếng Nga 6 - CodeHub | Chương trình GDPT 2018</title>
  <meta name="description" content="Chương trình Tiếng Nga 6 chuẩn GDPT 2018: 2 Tập, 5 Chủ đề, 16 Bài học (Уроки), phát âm giọng bản xứ ru-RU qua Web Speech API, sổ tay 6 Cách và Đấu trường Trạng Nguyên 60:00.">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0f172a',
              surface: '#1e293b',
              card: '#334155'
            }
          }
        }
      }
    }
  </script>

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 4px; }
    .russian-flag-gradient {
      background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%);
    }
    .vocab-chip {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .vocab-chip:hover {
      transform: translateY(-2px);
    }
    .btn-audio {
      cursor: pointer;
      border: none;
      background: #0284c7;
      color: white;
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 700;
      transition: all 0.2s ease;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .btn-audio:hover { background: #0369a1; transform: scale(1.04); }
    .btn-sentence { background: #16a34a; }
    .btn-sentence:hover { background: #15803d; }
  </style>
</head>

<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 min-h-screen flex flex-col antialiased transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawer-backdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 hidden lg:hidden transition-opacity"></div>

  <!-- Mobile Drawer -->
  <div id="mobile-drawer" class="fixed top-0 left-0 bottom-0 w-80 bg-white dark:bg-dark-surface z-50 transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-6 shadow-2xl border-r border-gray-100 dark:border-gray-800">
    <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
      <div class="flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg russian-flag-gradient flex items-center justify-center text-white font-black text-sm">
          <i class="fa-solid fa-flag"></i>
        </span>
        <span class="font-bold text-gray-900 dark:text-white text-base">Tiếng Nga 6</span>
      </div>
      <button onclick="toggleDrawer()" class="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto sidebar-scroll py-4 space-y-2 text-xs">
      ${renderSidebar()}
    </div>

    <div class="pt-4 border-t border-gray-100 dark:border-gray-800">
      <button onclick="openCertificationModal(); toggleDrawer();" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md">
        <i class="fa-solid fa-award"></i>
        <span>Hội Thi Trạng Nguyên Nga Ngữ 6 (60:00)</span>
      </button>
    </div>
  </div>

  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-30 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button onclick="toggleDrawer()" class="lg:hidden p-2 rounded-xl bg-gray-50 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-2xl russian-flag-gradient flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-flag"></i>
          </div>
          <div class="hidden sm:block">
            <span class="text-sm font-black bg-gradient-to-r from-blue-700 via-red-600 to-red-700 bg-clip-text text-transparent">TIẾNG NGA 6</span>
            <span class="block text-[10px] font-semibold text-gray-400">Русский язык 6 &bull; GDPT 2018</span>
          </div>
        </a>
      </div>

      <!-- Quick Language Links Grade 6 -->
      <div class="hidden md:flex items-center gap-1.5 overflow-x-auto py-1 text-xs font-semibold">
        <a href="tienganh_6.html" class="px-2.5 py-1 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-language"></i> Tiếng Anh 6
        </a>
        <a href="tiengduc_6.html" class="px-2.5 py-1 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-beer-mug-empty"></i> Tiếng Đức 6
        </a>
        <span class="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 font-bold border border-red-200 dark:border-red-800 flex items-center gap-1">
          <i class="fa-solid fa-star"></i> Tiếng Nga 6
        </span>
        <a href="tiengphap_6.html" class="px-2.5 py-1 rounded-lg text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-tower-observation"></i> Tiếng Pháp 6
        </a>
        <a href="tiengtrung_6.html" class="px-2.5 py-1 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-dragon"></i> Tiếng Trung 6
        </a>
      </div>

      <!-- Right controls -->
      <div class="flex items-center gap-2">
        <button id="theme-toggle" class="p-2 rounded-xl bg-gray-50 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition" title="Chuyển chế độ sáng / tối">
          <i class="fa-solid fa-sun dark:hidden text-amber-500"></i>
          <i class="fa-solid fa-moon hidden dark:block text-blue-400"></i>
        </button>
        <button onclick="openCertificationModal()" class="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition">
          <i class="fa-solid fa-award"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-b from-blue-600/10 via-red-500/5 to-transparent border-b border-gray-100 dark:border-gray-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div class="space-y-4 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold text-xs">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Chương trình GDPT 2018 &bull; Ngoại ngữ 1 &amp; 2
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Khóa Học Kiến Thức Cốt Lõi <span class="bg-gradient-to-r from-blue-600 via-red-600 to-red-700 bg-clip-text text-transparent">Tiếng Nga 6</span>
          </h1>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Hệ thống hóa toàn bộ 2 Tập sách gồm 5 Chủ đề &amp; 16 Bài học (Уроки). Tích hợp phát âm giọng đọc tiếng Nga chuẩn bản xứ <strong>ru-RU qua Web Speech API</strong>, bảng từ vựng tương tác click-to-speak, mẫu câu ngữ pháp, 5 kiểu ngữ điệu Nga (ИК-1 đến 5) và ngân hàng đề thi Trạng Nguyên 60:00.
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
            <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm">
              <i class="fa-solid fa-book-bookmark text-blue-600"></i> 2 Tập &bull; 5 Chủ đề lớn
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm">
              <i class="fa-solid fa-list-check text-red-600"></i> 16 Bài học (Уроки)
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm">
              <i class="fa-solid fa-volume-high text-emerald-600"></i> Web Speech API (ru-RU)
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm">
              <i class="fa-solid fa-trophy text-amber-500"></i> Đấu trường 60:00
            </span>
          </div>
        </div>

        <!-- Quick Jump Card -->
        <div class="w-full lg:w-80 p-5 rounded-3xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-xl space-y-4">
          <div class="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-gray-800">
            <div class="w-10 h-10 rounded-2xl russian-flag-gradient text-white flex items-center justify-center font-black text-sm">
              <i class="fa-solid fa-compass"></i>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white text-sm">Điều hướng nhanh</h3>
              <p class="text-[11px] text-gray-400">Chọn nội dung học tập</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs font-semibold">
            <a href="#tap-1" class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition text-center">
              Tập 1 (Урок 1-9)
            </a>
            <a href="#tap-2" class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/60 transition text-center">
              Tập 2 (Урок 10-16)
            </a>
            <a href="#kien-thuc-bat-buoc" class="p-2.5 rounded-xl bg-gray-50 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center">
              16 Trọng tâm
            </a>
            <a href="#ngu-dieu-tieng-nga" class="p-2.5 rounded-xl bg-gray-50 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center">
              5 Kiểu ngữ điệu
            </a>
          </div>
          <button onclick="openCertificationModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md">
            <i class="fa-solid fa-play"></i> Bắt đầu thi thử 60:00
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Desktop Aside Menu -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 bg-white dark:bg-dark-surface p-4 sm:p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
          <div class="flex items-center gap-2.5 pb-3 border-b border-gray-100 dark:border-gray-800">
            <div class="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center font-bold">
              <i class="fa-solid fa-book-bookmark"></i>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Mục lục chi tiết</h3>
              <p class="text-sm font-black text-gray-900 dark:text-white">5 Chủ đề &bull; 16 Bài</p>
            </div>
          </div>
          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
            ${renderSidebar()}
          </nav>
        </div>
      </aside>

      <!-- Main Body 3 Columns -->
      <div class="lg:col-span-3 space-y-12">

        <!-- ==================== I. TẬP MỘT ==================== -->
        <section id="tap-1" class="space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-500">Học kì 1</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">I. Tập Một – Các chủ đề và bài học chính</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
              Тема 1 – 3 &bull; Урок 1 – 9
            </span>
          </div>

          ${renderOverviewTable("Tập Một")}
        </section>

        <!-- ==================== II. TẬP HAI ==================== -->
        <section id="tap-2" class="space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-red-500">Học kì 2</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">II. Tập Hai – Các chủ đề và bài học chính</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800">
              Тема 4 – 5 &bull; Урок 10 – 16
            </span>
          </div>

          ${renderOverviewTable("Tập Hai")}
        </section>

        <!-- ==================== III. 16 TRỌNG TÂM BẮT BUỘC ==================== -->
        <section id="kien-thuc-bat-buoc" class="space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-500">Hệ thống hóa</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">III. 16 Trọng tâm kiến thức bắt buộc giữ lại</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
              Ngữ pháp cốt lõi Lớp 6
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">1. Giao tiếp qua điện thoại</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cách chào hỏi thân mật và lịch sự: <em>Будьте добры, Антон дома?</em>. Động từ <strong>звонить / позвонить / перезвонить кому (Cách 3 - Dativ)</strong>; động từ <strong>ждать кого (Cách 4 - Akkusativ)</strong>.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">2. Số thứ tự &amp; Đại từ chỉ định</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Biến đổi số thứ tự (первый, второй, третий... шестой) theo giống, số, cách như tính từ. Đại từ chỉ định <strong>этот, эта, это, эти</strong> biến đổi ở các cách số ít (в шестом классе этой школы).</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">3. Biến cách tính từ đuôi mềm</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Các tính từ có thân từ kết thúc bằng phụ âm mềm hoặc suýt (синий, свежий, осенний) nhận đuôi -ем ở Cách 6 giống đực: <em>на свежем воздухе</em>; đuôi -яя, -юю ở giống cái.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">4. Cấu trúc so sánh giống ai</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cấu trúc: <strong>Кто (1) + похож / похожа / похожи + на кого (Cách 4)</strong>: <em>Ты очень похожа на своего брата</em>. Đại từ sở hữu наш, ваш biến đổi theo cách.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">5. Đại từ phản thân "свой"</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Đại từ <strong>свой</strong> (của mình) thay thế cho мой, твой, его, её, наш, ваш, их khi người sở hữu chính là chủ ngữ của hành động: <em>Я очень люблю свою семью</em>.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">6. Hai cấu trúc sở thích tương đương</span>
              <p class="text-xs text-gray-600 dark:text-gray-300"><strong>[Кто (1) любит + V-inf / Danh từ (4)]</strong> = <strong>[Кому (3) нравится / нравятся + V-inf / Danh từ (1)]</strong>. Tính từ ngắn đuôi: свободен / свободна, занят / занята.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">7. Đại từ quan hệ "который"</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Đại từ quan hệ <strong>который, которая, которое, которые</strong> làm liên từ nối mệnh đề phụ, hòa hợp giống và số với danh từ mà nó bổ nghĩa ở mệnh đề chính.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">8. Bốn phương hướng &amp; Động từ являться</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Phương hướng: север, юг, восток, запад (vị trí: <em>на севере, на юге...</em>). Cấu trúc <strong>Кто/Что является кем/чем (Cách 5)</strong> = là, đóng vai trò là.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">9. Cấu trúc địa điểm du lịch &amp; Đặt tên</span>
              <p class="text-xs text-gray-600 dark:text-gray-300"><strong>Кто был где (Cách 6) = Кто ездил куда (Cách 4)</strong>. Cấu trúc đặt tên: <em>Как называется что? / Что называется чем (Cách 5)</em> (Озеро называется сердцем Ханоя).</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">10. Mẫu câu chúc tụng &amp; Tần suất</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cụm từ chỉ tần suất ở Cách 4 không giới từ: <em>каждый день, каждую неделю, каждый год</em>. Mẫu câu: <strong>Поздравлять кого (4) с чем (5)</strong> và <strong>Желать кому (3) чего (2)</strong>.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">11. Hệ thống động từ chuyển động có tiền tố</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">3 tiền tố cốt lõi: <strong>по-</strong> (bắt đầu đi, sắp đi: пойти, поехать); <strong>при-</strong> (đến nơi, xuất hiện: прийти, приехать); <strong>у-</strong> (rời khỏi, đi vắng: уйти, уехать).</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">12. Số đo nhiệt độ &amp; So sánh tính từ</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Quy tắc chia 'градус': <em>1 градус; 2, 3, 4 градуса; 5-20 градусов</em>. So sánh hơn tính từ: đuôi -ее / -е hoặc bất quy tắc (лучше, хуже, больше, меньше, теплее, холоднее).</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">13. Thể động từ НСВ &amp; СВ</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Chưa hoàn thành (НСВ) biểu thị quá trình, thói quen; Hoàn thành (СВ) biểu thị kết quả, một lần. Hành động đồng thời: <em>Когда + НСВ...</em>; hành động nối tiếp: <em>Сначала СВ..., потом СВ...</em></p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">14. Chuyển đổi câu gián tiếp</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Động từ dẫn dắt: сказать, спросить, ответить. Câu trần thuật gián tiếp dùng liên từ <strong>что</strong>; câu hỏi gián tiếp dùng từ để hỏi làm từ nối (Маша спросила Антона, какой предмет он любит).</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">15. Động từ đi với Cách 5: увлекаться &amp; стать</span>
              <p class="text-xs text-gray-600 dark:text-gray-300"><strong>Увлекаться чем (Cách 5)</strong> = say mê, đam mê cái gì; <strong>Стать кем (Cách 5)</strong> = trở thành ai, làm nghề gì. Liên từ nguyên nhân: <em>так как / потому что / поэтому</em>.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
              <span class="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider">16. Quy tắc phát âm &amp; biến âm chữ viết</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Hiện tượng vô thanh hóa phụ âm hữu thanh cuối từ (год = /гот/, город = /горат/); âm câm trong từ 'праздник', 'честный'; chữ 'г' đọc là /v/ trong đuôi -ого/-его.</p>
            </div>
          </div>
        </section>

        <!-- ==================== IV. 5 KIỂU NGỮ ĐIỆU TIẾNG NGA ==================== -->
        <section id="ngu-dieu-tieng-nga" class="space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-500">Ngữ âm học ứng dụng</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">IV. 5 Kiểu ngữ điệu trong tiếng Nga (Интонационные конструкции: ИК-1 đến ИК-5)</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
              Chuẩn phát âm Lớp 6
            </span>
          </div>

          <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead class="bg-gray-50 dark:bg-dark-card font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th class="py-3 px-3 text-center whitespace-nowrap">Kiểu ngữ điệu</th>
                  <th class="py-3 px-4">Đặc điểm cao độ giọng nói</th>
                  <th class="py-3 px-4">Loại câu áp dụng</th>
                  <th class="py-3 px-4">Ví dụ thực tế</th>
                  <th class="py-3 px-3 text-center">Phát âm</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td class="py-3 px-3 font-bold text-blue-600 text-center">ИК-1</td>
                  <td class="py-3 px-4">Hạ giọng đều ở âm tiết trọng tâm đến cuối câu</td>
                  <td class="py-3 px-4">Câu trần thuật, thông báo hoàn tất</td>
                  <td class="py-3 px-4 italic">Я учусь в шестом классе.</td>
                  <td class="py-3 px-3 text-center"><button onclick="playRussian('Я учусь в шестом классе.')" class="btn-audio">🔊 Nghe</button></td>
                </tr>
                <tr>
                  <td class="py-3 px-3 font-bold text-blue-600 text-center">ИК-2</td>
                  <td class="py-3 px-4">Nhấn mạnh cao giọng ở từ để hỏi, sau đó hạ giọng</td>
                  <td class="py-3 px-4">Câu hỏi có từ để hỏi (Кто, Что, Где, Куда...)</td>
                  <td class="py-3 px-4 italic">Как тебя зовут? Где ты живёшь?</td>
                  <td class="py-3 px-3 text-center"><button onclick="playRussian('Как тебя зовут? Где ты живёшь?')" class="btn-audio">🔊 Nghe</button></td>
                </tr>
                <tr>
                  <td class="py-3 px-3 font-bold text-blue-600 text-center">ИК-3</td>
                  <td class="py-3 px-4">Vút giọng lên rất cao ở từ trọng tâm muốn hỏi</td>
                  <td class="py-3 px-4">Câu hỏi không có từ để hỏi (Yes/No question)</td>
                  <td class="py-3 px-4 italic">Антон дома? Ты свободен сейчас?</td>
                  <td class="py-3 px-3 text-center"><button onclick="playRussian('Антон дома? Ты свободен сейчас?')" class="btn-audio">🔊 Nghe</button></td>
                </tr>
                <tr>
                  <td class="py-3 px-3 font-bold text-blue-600 text-center">ИК-4</td>
                  <td class="py-3 px-4">Hạ giọng rồi ngân cao nhẹ ở cuối từ</td>
                  <td class="py-3 px-4">Câu hỏi rút gọn với liên từ 'А...' hoặc liệt kê</td>
                  <td class="py-3 px-4 italic">А ты? А твоя мама?</td>
                  <td class="py-3 px-3 text-center"><button onclick="playRussian('А ты? А твоя мама?')" class="btn-audio">🔊 Nghe</button></td>
                </tr>
                <tr>
                  <td class="py-3 px-3 font-bold text-blue-600 text-center">ИК-5</td>
                  <td class="py-3 px-4">Lên giọng ở từ đầu và lên cao ở từ cuối cảm thán</td>
                  <td class="py-3 px-4">Câu cảm thán, ngợi ca (Какой, Как...)</td>
                  <td class="py-3 px-4 italic">Какая красивая осень! Как здесь тихо!</td>
                  <td class="py-3 px-3 text-center"><button onclick="playRussian('Какая красивая осень! Как здесь тихо!')" class="btn-audio">🔊 Nghe</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- ==================== V. CHI TIẾT TỪNG BÀI HỌC ==================== -->
        <section id="chi-tiet-urok" class="space-y-8 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-red-500">Chi tiết từng bài học</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">V. Bản chi tiết theo từng Урок (16 Bài học đầy đủ Tập 1 &amp; Tập 2)</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800">
              100% Khung chuẩn SGK
            </span>
          </div>

          ${renderDetailedUroks()}
        </section>

        <!-- ==================== VI. ĐỊNH HƯỚNG KIỂM TRA & THI TRẠNG NGUYÊN ==================== -->
        <section id="dinh-huong-kiem-tra" class="space-y-6 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-500">Đấu trường trí tuệ</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">VI. Hội Thi Trạng Nguyên Nga Ngữ 6 (Thời gian làm bài: 60:00)</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
              40 câu trắc nghiệm bao quát 16 bài
            </span>
          </div>

          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 text-white shadow-xl space-y-4">
            <div class="max-w-2xl space-y-2">
              <span class="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-sm">
                Khảo sát năng lực Tiếng Nga 6
              </span>
              <h4 class="text-2xl sm:text-3xl font-black">Hội Thi Trạng Nguyên Tiếng Nga 6</h4>
              <p class="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Đề thi 40 câu hỏi trắc nghiệm tự động đảo ngẫu nhiên bao quát toàn diện từ vựng, ngữ pháp 6 cách, động từ chuyển động và giao tiếp chuẩn GDPT 2018. Hệ thống chấm điểm tự động và cấp chứng chỉ vinh danh điện tử.
              </p>
            </div>
            <div class="pt-2 flex flex-wrap items-center gap-3">
              <button onclick="openCertificationModal()" class="px-5 py-3 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-black text-sm flex items-center gap-2 shadow-lg transition">
                <i class="fa-solid fa-play"></i> Bắt đầu thi ngay (60:00)
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  </main>

  <!-- Certification / Exam Modal -->
  <div id="certification-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-dark-surface rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-trophy text-amber-300"></i>
          </div>
          <div>
            <h4 class="font-bold text-sm sm:text-base">Hội Thi Trạng Nguyên Nga Ngữ 6</h4>
            <p class="text-[11px] text-blue-100">40 câu hỏi trắc nghiệm &bull; Thời gian: 60 phút</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div id="timer-display" class="px-3 py-1 rounded-xl bg-black/20 font-mono font-bold text-xs">
            60:00
          </div>
          <button onclick="closeCertificationModal()" class="p-1.5 rounded-lg hover:bg-white/20 transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body -->
      <div id="exam-container" class="flex-1 overflow-y-auto p-6 space-y-6 text-xs sm:text-sm">
        <div id="exam-questions-list" class="space-y-6"></div>
      </div>

      <!-- Exam Result / Certificate View (Hidden initially) -->
      <div id="certificate-result" class="hidden flex-1 overflow-y-auto p-6 space-y-6 text-center">
        <div class="w-16 h-16 mx-auto rounded-3xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-3xl font-black shadow-lg">
          <i class="fa-solid fa-award"></i>
        </div>
        <div class="space-y-1">
          <h4 id="cert-title" class="text-2xl font-black text-gray-900 dark:text-white">Chúc Mừng Bạn Đã Hoàn Thành!</h4>
          <p id="cert-score" class="text-sm font-bold text-blue-600 dark:text-blue-400"></p>
        </div>
        <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300 space-y-1">
          <p><strong>Danh hiệu:</strong> <span id="cert-rank" class="text-amber-500 font-bold">Trạng Nguyên Tiếng Nga 6</span></p>
          <p>Chứng chỉ điện tử được lưu trực tiếp trên hệ thống CodeHub Platform.</p>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-dark-card">
        <span class="text-xs text-gray-500" id="exam-progress-text">Đã chọn 0/40 câu</span>
        <div class="flex items-center gap-2">
          <button id="submit-exam-btn" onclick="submitExam()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:opacity-95 text-white font-bold text-xs shadow-md transition">
            Nộp bài thi
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-100 dark:border-gray-800 py-8 text-center text-xs text-gray-500 transition-colors">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <div class="w-6 h-6 rounded-lg russian-flag-gradient flex items-center justify-center text-white text-xs font-bold">
          <i class="fa-solid fa-flag"></i>
        </div>
        <span class="font-bold text-gray-700 dark:text-gray-300">CodeHub - Nền Tảng Học Tập Số Hóa GDPT 2018</span>
      </div>
      <p>Chương trình Tiếng Nga 6 (Русский язык 6): 2 Tập &bull; 5 Chủ đề &bull; 16 Bài học &bull; Web Speech API ru-RU.</p>
    </div>
  </footer>

  <!-- Web Speech API & Application Logic -->
  <script>
` + clientScript + `
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengnga_6.html', fullHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/russian_6.html', fullHtml, 'utf8');

console.log("Successfully generated courses/tiengnga_6.html and courses/russian_6.html! Size:", fullHtml.length);
