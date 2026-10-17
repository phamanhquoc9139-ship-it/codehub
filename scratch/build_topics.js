const fs = require('fs');
const path = require('path');

const targetFilePath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\olympic_tienganh_thpt.html';

const topicsHtml = `
      <!-- ========================================== -->
      <!-- CHUYÊN ĐỀ 5: MORPHOLOGICAL NEOLOGISMS & ROOTS -->
      <!-- ========================================== -->
      <article id="chuyende-5" class="lesson-section bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-black text-xs">
              CHUYÊN ĐỀ 05
            </span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Hình Thái Học Đột Biến, Tiếp Vĩ Ngữ Cổ &amp; Phái Sinh Gốc Hy - La</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> Thời lượng dự kiến: 90 phút
          </span>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Morphological Neologisms, Archaic Suffixes &amp; Classical Derivations
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Trong các đề thi HSG Quốc gia và Olympic 30/4, phần cấu tạo từ (Word Formation) ở cấp độ C2 kiểm tra các tiếp vĩ ngữ học thuật cổ, hiện tượng rút gọn ngược (Back-formation), từ ghép lai tạo (Portmanteau) và sự phân hóa ngữ nghĩa đa tầng giữa các phái sinh cùng gốc:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-spell-check text-amber-600"></i> Tiếp Vĩ Ngữ Cổ &amp; Ghép Hợp Đặc Thù
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>-monger:</strong> chỉ kẻ gieo rắc điều tiêu cực hoặc thương buôn: <em>scaremonger</em> (kẻ tung tin đồn gây hoang mang), <em>warmonger</em> (kẻ hiếu chiến), <em>rumourmonger</em>, <em>ironmonger</em>.</li>
                <li>• <strong>-wright:</strong> người thợ chế tác thủ công bậc thầy (chú ý chữ 'w'): <em>playwright</em> (nhà soạn kịch), <em>shipwright</em> (thợ đóng tàu), <em>wheelwright</em>.</li>
                <li>• <strong>-wise:</strong> xét theo phương diện / hướng chuyển động: <em>clockwise</em> (theo chiều kim đồng hồ), <em>career-wise</em> (về mặt sự nghiệp), <em>streetwise</em> (tinh khôn, trải đời).</li>
                <li>• <strong>-bound:</strong> bị ràng buộc / kìm hãm / hướng tới: <em>duty-bound</em> (buộc phải làm vì nghĩa vụ), <em>fog-bound</em> (kẹt do sương mù), <em>desk-bound</em>, <em>earthbound</em>.</li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
              <h4 class="font-bold text-purple-900 dark:text-purple-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-diagram-project text-purple-600"></i> Phân Hóa Ngữ Nghĩa &amp; Đột Biến Hình Thái
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>Back-formation:</strong> rút bỏ hậu tố giả lập để tạo động từ mới: <em>burglar &rarr; burgle</em>, <em>editor &rarr; edit</em>, <em>baby-sitter &rarr; baby-sit</em>.</li>
                <li>• <strong>Portmanteau:</strong> ghép lai tạp 2 từ gốc: <em>staycation</em> (stay + vacation), <em>infotainment</em>, <em>brunch</em>, <em>podcast</em> (iPod + broadcast).</li>
                <li>• <strong>Dị biệt phái sinh ba nhánh (Multi-branch Split):</strong>
                  <br>- <em>continue:</em> <em>continuation</em> (sự tiếp tục lại sau gián đoạn) vs <em>continuity</em> (tính liền mạch) vs <em>continuum</em> (dải phổ liên tục vô hạn).
                  <br>- <em>industry:</em> <em>industrial</em> (thuộc công nghiệp) vs <em>industrious</em> (siêng năng, cần mẫn).
                  <br>- <em>moment:</em> <em>momentary</em> (thoáng qua chốc lát) vs <em>momentous</em> (trọng đại mang tính lịch sử).
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quizzes Chuyên đề 5 -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-amber-500"></i> Bài Tập Tự Luyện Chuyên Đề 5 (Chuẩn Olympic &amp; C2)
          </h4>
          <div class="space-y-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                1. The sensationalist press was severely castigated by the judiciary for acting as an irresponsible ________, inciting mass hysteria over the epidemic.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_5_1', 0, true, 'Chính xác! Scaremonger = kẻ gieo rắc tin đồn nhảm gây hoang mang, sợ hãi trong quần chúng nhân dân.')" class="quiz-btn-oly_eng_5_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. scaremonger
                </button>
                <button onclick="checkQuiz('oly_eng_5_1', 1, false, 'Sai. Warmonger = kẻ hiếu chiến muốn kích động chiến tranh.')" class="quiz-btn-oly_eng_5_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. warmonger
                </button>
                <button onclick="checkQuiz('oly_eng_5_1', 2, false, 'Sai. Playwright = nhà soạn kịch sân khấu.')" class="quiz-btn-oly_eng_5_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. playwright
                </button>
                <button onclick="checkQuiz('oly_eng_5_1', 3, false, 'Sai. Ironmonger = người bán đồ kim khí.')" class="quiz-btn-oly_eng_5_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. ironmonger
                </button>
              </div>
              <div id="feedback-oly_eng_5_1" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                2. Which of the following words came into the English lexicon through the morphological process of <strong>back-formation</strong>?
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_5_2', 0, true, 'Chính xác! Động từ \'burgle\' được hình thành nhờ back-formation từ danh từ gốc \'burglar\' (chứ không phải burglar phái sinh từ burgle).')" class="quiz-btn-oly_eng_5_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. burgle
                </button>
                <button onclick="checkQuiz('oly_eng_5_2', 1, false, 'Sai. Staycation là từ ghép lai tạo (portmanteau) giữa stay và vacation.')" class="quiz-btn-oly_eng_5_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. staycation
                </button>
                <button onclick="checkQuiz('oly_eng_5_2', 2, false, 'Sai. Ungentlemanliness là quá trình tiếp đầu/tiếp vĩ thông thường (prefixation + suffixation).')" class="quiz-btn-oly_eng_5_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. ungentlemanliness
                </button>
                <button onclick="checkQuiz('oly_eng_5_2', 3, false, 'Sai. Hypercritical dùng tiền tố hyper-.')" class="quiz-btn-oly_eng_5_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. hypercritical
                </button>
              </div>
              <div id="feedback-oly_eng_5_2" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                3. The cognitive psychologist argued that human consciousness exists along an unbroken ________ of mental states rather than a series of disconnected phases.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_5_3', 0, true, 'Chính xác! Continuum = một thể/dải liên tục liền mạch không có ranh giới phân tách rõ rệt.')" class="quiz-btn-oly_eng_5_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. continuum
                </button>
                <button onclick="checkQuiz('oly_eng_5_3', 1, false, 'Sai. Continuation = sự tiếp diễn lại của một câu chuyện hoặc chuỗi sự việc sau khi ngắt quãng.')" class="quiz-btn-oly_eng_5_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. continuation
                </button>
                <button onclick="checkQuiz('oly_eng_5_3', 2, false, 'Sai. Continuity = tính liên tục không ngắt quãng (dùng cho công việc, dòng phim ảnh).')" class="quiz-btn-oly_eng_5_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. continuity
                </button>
                <button onclick="checkQuiz('oly_eng_5_3', 3, false, 'Sai ngữ pháp (danh từ không phù hợp ngữ cảnh).')" class="quiz-btn-oly_eng_5_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. continuance
                </button>
              </div>
              <div id="feedback-oly_eng_5_3" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                4. Feeling ________ by his sacred sworn pledge to the late monarch, Lord William refused to ratify the treacherous petition.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_5_4', 0, true, 'Chính xác! Duty-bound = bị ràng buộc chặt chẽ bởi danh dự, nghĩa vụ hoặc lời thề thiêng liêng.')" class="quiz-btn-oly_eng_5_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. duty-bound
                </button>
                <button onclick="checkQuiz('oly_eng_5_4', 1, false, 'Sai. Dutiful = có tính chất vâng lời, có hiếu vụ thông thường.')" class="quiz-btn-oly_eng_5_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. dutiful
                </button>
                <button onclick="checkQuiz('oly_eng_5_4', 2, false, 'Sai. Duty-free = miễn thuế.')" class="quiz-btn-oly_eng_5_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. duty-free
                </button>
                <button onclick="checkQuiz('oly_eng_5_4', 3, false, 'Sai nét nghĩa học thuật.')" class="quiz-btn-oly_eng_5_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. duty-conscious
                </button>
              </div>
              <div id="feedback-oly_eng_5_4" class="hidden"></div>
            </div>
          </div>
        </div>
      </article>

      <!-- ========================================== -->
      <!-- CHUYÊN ĐỀ 6: MICRO-SYNTACTIC ERROR ANALYSIS -->
      <!-- ========================================== -->
      <article id="chuyende-6" class="lesson-section bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-black text-xs">
              CHUYÊN ĐỀ 06
            </span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Phát Hiện Vi Lỗi Cú Pháp Tầng Sâu &amp; Sửa Sai Đoạn Văn Triết Học</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> Thời lượng dự kiến: 100 phút
          </span>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Olympic Micro-syntactic Error Analysis &amp; Cryptic Grammatical Fallacies
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Phần sửa lỗi sai (Error Identification) trong đề thi Olympic và Vòng tuyển chọn Đội tuyển Quốc tế (TST) không kiểm tra lỗi chính tả cơ bản mà nhắm vào các "vi lỗi cú pháp" tinh vi: biến cách cách tử của đại từ, lỗi phân từ lơ lửng, lỗi so sánh khập khiễng phi logic và bẫy hòa hợp vị ngữ giả định:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-triangle-exclamation text-amber-600"></i> Ba Cạm Bẫy Cú Pháp Vi Mô "Tử Thần"
              </h4>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Case Inflection in Compound Objects:</strong> Sau giới từ (between, except, like), đại từ bắt buộc phải ở dạng tân ngữ: <em>Between you and me</em> (ĐÚNG) &mdash; cấm dùng <em>Between you and I</em>.</li>
                <li>• <strong>Dangling Modifier (Phân từ lơ lửng):</strong> Khi mệnh đề phân từ đầu câu không có cùng chủ ngữ logic với mệnh đề chính:
                  <br><span class="text-rose-600 font-medium">&times; Walking down the boulevard, the museum came into view.</span> (Bảo tàng không thể đi bộ).
                  <br><span class="text-emerald-600 font-medium">&check; Walking down the boulevard, we saw the museum.</span>
                </li>
                <li>• <strong>Illogical / Faulty Comparison:</strong> So sánh khập khiễng giữa vật thể và đối tượng không đồng nhất:
                  <br><span class="text-rose-600 font-medium">&times; The cognitive aptitude of crows exceeds dogs.</span>
                  <br><span class="text-emerald-600 font-medium">&check; The cognitive aptitude of crows exceeds that of dogs.</span>
                </li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
              <h4 class="font-bold text-purple-900 dark:text-purple-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-code-merge text-purple-600"></i> Hòa Hợp Giả Định &amp; Trật Tự Thành Phần Song Hành
              </h4>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Mandative Subjunctive:</strong> Các động từ chỉ mệnh lệnh, yêu cầu (demand, recommend, insist) đòi hỏi động từ nguyên thể không chia: <em>It is imperative that each envoy (submit, not submits) their credential.</em></li>
                <li>• <strong>Correlative Conjunction Parallelism:</strong> Cấu trúc <em>not only... but also...</em>, <em>neither... nor...</em> bắt buộc hai vế tương thích hoàn hảo về cấu trúc ngữ pháp (danh từ song song danh từ, mệnh đề đảo ngữ song song mệnh đề đảo ngữ).</li>
                <li>• <strong>Prepositional Pied-piping:</strong> Đưa giới từ lên trước đại từ quan hệ trong văn phong trang trọng: <em>the extent to which</em>, <em>the premise on which</em>.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quizzes Chuyên đề 6 -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-amber-500"></i> Bài Tập Tự Luyện Chuyên Đề 6 (Chuẩn Olympic &amp; C2)
          </h4>
          <div class="space-y-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                1. Identify the underlined part that contains a grammatical error: "The grand cathedral exhibits ornate stone gargoyles that <u>amazes</u> (A) <u>whomever</u> (B) walks through the cloister, <u>standing</u> (C) as a testament to medieval craftsmanship <u>dating back to</u> (D) the twelfth century."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_6_1', 0, true, 'Chính xác! Lỗi hòa hợp chủ vị mệnh đề quan hệ: gargoyles là danh từ số nhiều, nên động từ phải chia là \'amaze\' (không có \'s\').')" class="quiz-btn-oly_eng_6_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. amazes &rarr; amaze
                </button>
                <button onclick="checkQuiz('oly_eng_6_1', 1, false, 'Sai. Whomever đứng làm tân ngữ cho động từ amaze là chính xác.')" class="quiz-btn-oly_eng_6_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. whomever
                </button>
                <button onclick="checkQuiz('oly_eng_6_1', 2, false, 'Sai. Standing phân từ hiện tại bổ nghĩa cho cathedral là chuẩn.')" class="quiz-btn-oly_eng_6_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. standing
                </button>
                <button onclick="checkQuiz('oly_eng_6_1', 3, false, 'Sai. Dating back to là phân từ rút gọn chính xác.')" class="quiz-btn-oly_eng_6_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. dating back to
                </button>
              </div>
              <div id="feedback-oly_eng_6_1" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                2. Choose the correct form to complete the formal legal statement: "The protracted boundary dispute between ________ was resolved amicably by the maritime tribunal."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_6_2', 0, true, 'Chính xác! Đại từ đứng sau giới từ \'between\' bắt buộc phải ở cách tân ngữ (objective case): \'him and me\'.')" class="quiz-btn-oly_eng_6_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. him and me
                </button>
                <button onclick="checkQuiz('oly_eng_6_2', 1, false, 'Sai. \'he and I\' là cách chủ ngữ (nominative case), không được làm tân ngữ giới từ.')" class="quiz-btn-oly_eng_6_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. he and I
                </button>
                <button onclick="checkQuiz('oly_eng_6_2', 2, false, 'Sai. \'he\' là cách chủ ngữ.')" class="quiz-btn-oly_eng_6_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. he and me
                </button>
                <button onclick="checkQuiz('oly_eng_6_2', 3, false, 'Sai. \'I\' không thể làm tân ngữ sau giới từ.')" class="quiz-btn-oly_eng_6_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. him and I
                </button>
              </div>
              <div id="feedback-oly_eng_6_2" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                3. Which sentence completely eliminates the fatal flaw of a <strong>dangling participle</strong>?
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_6_3', 0, true, 'Chính xác! Chủ ngữ \'the research team\' thực hiện hành động \'having deciphered the codex\', tránh hoàn toàn lỗi phân từ lơ lửng.')" class="quiz-btn-oly_eng_6_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. Having deciphered the codex, the research team announced the breakthrough.
                </button>
                <button onclick="checkQuiz('oly_eng_6_3', 1, false, 'Sai. The manuscript không thể tự giải mã chính mình (dangling modifier).')" class="quiz-btn-oly_eng_6_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. Having deciphered the codex, the manuscript was published online.
                </button>
                <button onclick="checkQuiz('oly_eng_6_3', 2, false, 'Sai. An astonishment không thể giải mã codex.')" class="quiz-btn-oly_eng_6_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. Having deciphered the codex, an immense astonishment swept the academy.
                </button>
                <button onclick="checkQuiz('oly_eng_6_3', 3, false, 'Sai. The ancient ruins không thể giải mã codex.')" class="quiz-btn-oly_eng_6_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. Having deciphered the codex, the ancient ruins yielded new secrets.
                </button>
              </div>
              <div id="feedback-oly_eng_6_3" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                4. Select the option that remedies the fault of <strong>illogical comparison</strong>: "The linguistic dexterity of corvids is remarkably comparable to ________."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_6_4', 0, true, 'Chính xác! Phải dùng đại từ chỉ định \'that of\' để thay thế cho danh từ số ít trừu tượng \'linguistic dexterity\', so sánh khả năng với khả năng chứ không so với cá thể con vật.')" class="quiz-btn-oly_eng_6_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. that of primates
                </button>
                <button onclick="checkQuiz('oly_eng_6_4', 1, false, 'Sai. So sánh dexterity với cả con khỉ (primates) là phi lý.')" class="quiz-btn-oly_eng_6_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. primates
                </button>
                <button onclick="checkQuiz('oly_eng_6_4', 2, false, 'Sai. Dexterity là danh từ không đếm được/số ít nên không dùng \'those of\'.')" class="quiz-btn-oly_eng_6_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. those of primates
                </button>
                <button onclick="checkQuiz('oly_eng_6_4', 3, false, 'Sai cấu trúc ngữ pháp học thuật.')" class="quiz-btn-oly_eng_6_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. primate's
                </button>
              </div>
              <div id="feedback-oly_eng_6_4" class="hidden"></div>
            </div>
          </div>
        </div>
      </article>

      <!-- ========================================== -->
      <!-- CHUYÊN ĐỀ 7: TRI-GAPPED & PHILOSOPHICAL OPEN CLOZE -->
      <!-- ========================================== -->
      <article id="chuyende-7" class="lesson-section bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-black text-xs">
              CHUYÊN ĐỀ 07
            </span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Kỹ Thuật Điền Từ Đoạn Văn Triết Học Cổ Điển &amp; Liên Từ Cổ</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> Thời lượng dự kiến: 90 phút
          </span>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Tri-gapped &amp; Philosophical Open Cloze: Archaic Particles &amp; High Register
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Dạng bài Open Cloze trong các kỳ thi Olympic khu vực và toàn quốc thường trích dẫn các văn bản hàn lâm thế kỷ 18-20 (Immanuel Kant, John Stuart Mill, Bertrand Russell). Muốn đạt điểm tối đa, học sinh phải nằm lòng hệ thống liên từ cổ và cấu trúc ngữ pháp chức năng:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-feather-pointed text-amber-600"></i> Hệ Thống Liên Từ &amp; Đại Từ Cổ Điển
              </h4>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>whence:</strong> từ nơi nào / từ nguồn cội nào (= from where / from which origin). Ví dụ: <em>Let us examine the axioms whence these deductions were drawn.</em></li>
                <li>• <strong>whither:</strong> đến nơi nào (= to where / towards what place). Ví dụ: <em>Whither should humanity steer its collective moral compass?</em></li>
                <li>• <strong>whereupon:</strong> ngay sau sự việc đó (= immediately after which). Ví dụ: <em>The prime minister resigned, whereupon spontaneous jubilation erupted.</em></li>
                <li>• <strong>notwithstanding:</strong> mặc dù, bất kể (= despite / in spite of). Đặc biệt có thể đứng SAU danh từ: <em>His formidable intellectual reputation notwithstanding,...</em></li>
                <li>• <strong>insofar as:</strong> trong chừng mực mà (= to the extent that / in so far as).</li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
              <h4 class="font-bold text-purple-900 dark:text-purple-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-puzzle-piece text-purple-600"></i> Cụm Từ Ngữ Pháp Cố Định Thường Điền C2
              </h4>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>by dint of:</strong> nhờ vào, bằng sự nỗ lực kiên trì (= by means of hard work).</li>
                <li>• <strong>in lieu of:</strong> thay vì, thay thế cho (= in place of / instead of).</li>
                <li>• <strong>under the auspices of:</strong> dưới sự bảo trợ / hướng dẫn của một tổ chức danh giá.</li>
                <li>• <strong>at variance with:</strong> mâu thuẫn hoàn toàn, bất đồng gay gắt với điều gì.</li>
                <li>• <strong>with a view to (+ V-ing):</strong> với mục đích hướng tới việc làm gì.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quizzes Chuyên đề 7 -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-amber-500"></i> Bài Tập Tự Luyện Chuyên Đề 7 (Chuẩn Olympic &amp; C2)
          </h4>
          <div class="space-y-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                1. "The historian adamantly refused to disclose the obscure clandestine library ________ he had acquired the lost illuminated manuscript."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_7_1', 0, true, 'Chính xác! Whence = from which place / from where (từ nơi mà ông ấy đã lấy được bản thảo cổ).')" class="quiz-btn-oly_eng_7_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. whence
                </button>
                <button onclick="checkQuiz('oly_eng_7_1', 1, false, 'Sai. Whither = to which place (hướng tới nơi nào).')" class="quiz-btn-oly_eng_7_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. whither
                </button>
                <button onclick="checkQuiz('oly_eng_7_1', 2, false, 'Sai. Whereupon = as a result of which / immediately after.')" class="quiz-btn-oly_eng_7_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. whereupon
                </button>
                <button onclick="checkQuiz('oly_eng_7_1', 3, false, 'Sai. Wherein = in which (bên trong cái gì).')" class="quiz-btn-oly_eng_7_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. wherein
                </button>
              </div>
              <div id="feedback-oly_eng_7_1" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                2. "The magistrate pronounced a sweeping sentence of penal exile, ________ the condemned felon sank to the flagstones in utter despair."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_7_2', 0, true, 'Chính xác! Whereupon = immediately after which (ngay sau hành động tuyên án của quan tòa).')" class="quiz-btn-oly_eng_7_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. whereupon
                </button>
                <button onclick="checkQuiz('oly_eng_7_2', 1, false, 'Sai. Notwithstanding mang nghĩa nhượng bộ (mặc dù).')" class="quiz-btn-oly_eng_7_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. notwithstanding
                </button>
                <button onclick="checkQuiz('oly_eng_7_2', 2, false, 'Sai. Whence chỉ xuất xứ nguồn gốc.')" class="quiz-btn-oly_eng_7_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. whence
                </button>
                <button onclick="checkQuiz('oly_eng_7_2', 3, false, 'Sai. Wherefore = for what reason (vì lý do gì).')" class="quiz-btn-oly_eng_7_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. wherefore
                </button>
              </div>
              <div id="feedback-oly_eng_7_2" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                3. "The vociferous protestations of the opposition ________, the austerity bill was passed into law by a comfortable parliamentary margin."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_7_3', 0, true, 'Chính xác! Notwithstanding có thể đứng sau cụm danh từ làm giới từ nhượng bộ đảo (Noun Phrase + notwithstanding).')" class="quiz-btn-oly_eng_7_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. notwithstanding
                </button>
                <button onclick="checkQuiz('oly_eng_7_3', 1, false, 'Sai. Despite bắt buộc phải đứng TRƯỚC danh từ, không đứng sau.')" class="quiz-btn-oly_eng_7_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. despite
                </button>
                <button onclick="checkQuiz('oly_eng_7_3', 2, false, 'Sai. Although đòi hỏi một mệnh đề (S + V).')" class="quiz-btn-oly_eng_7_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. although
                </button>
                <button onclick="checkQuiz('oly_eng_7_3', 3, false, 'Sai. Nevertheless là trạng từ liên kết nối câu.')" class="quiz-btn-oly_eng_7_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. nevertheless
                </button>
              </div>
              <div id="feedback-oly_eng_7_3" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                4. "The moral philosopher argued that civil disobedience is ethically justifiable only ________ it opposes institutional tyranny without infringing upon fundamental human rights."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_7_4', 0, true, 'Chính xác! Insofar as = trong chừng mực mà / to the extent that (cụm liên từ điều kiện triết học chuẩn C2).')" class="quiz-btn-oly_eng_7_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. insofar as
                </button>
                <button onclick="checkQuiz('oly_eng_7_4', 1, false, 'Sai. In case mang nghĩa phòng khi / trong trường hợp xảy ra sự cố.')" class="quiz-btn-oly_eng_7_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. in case
                </button>
                <button onclick="checkQuiz('oly_eng_7_4', 2, false, 'Sai. As though = như thể là.')" class="quiz-btn-oly_eng_7_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. as though
                </button>
                <button onclick="checkQuiz('oly_eng_7_4', 3, false, 'Sai. So that chỉ mục đích kết quả.')" class="quiz-btn-oly_eng_7_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. so that
                </button>
              </div>
              <div id="feedback-oly_eng_7_4" class="hidden"></div>
            </div>
          </div>
        </div>
      </article>

      <!-- ========================================== -->
      <!-- CHUYÊN ĐỀ 8: MULTI-TEXT & FALLACY ANALYSIS -->
      <!-- ========================================== -->
      <article id="chuyende-8" class="lesson-section bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-black text-xs">
              CHUYÊN ĐỀ 08
            </span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Đọc Hiểu Đa Văn Bản, Bóc Tách Luận Điểm Đối Nghịch &amp; Ngụy Biện Logic</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> Thời lượng dự kiến: 120 phút
          </span>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Multi-Text Cross-Examination, Logical Fallacies &amp; Rhetorical Tropes
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Kỳ thi Tuyển chọn Đội tuyển Quốc tế (TST) và Cambridge CPE đưa ra các cặp văn bản đối kháng cùng bàn luận về một vấn đề triết học hoặc xã hội hóc búa. Thí sinh phải giải mã các ngụy biện logic (Logical Fallacies) và nhận diện các biện pháp tu từ kinh điển (Rhetorical Devices):
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-brain text-amber-600"></i> 5 Ngụy Biện Logic Kinh Điển (Logical Fallacies)
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>Ad Hominem:</strong> Công kích đời tư hoặc nhân cách người tranh luận thay vì phản biện lập luận học thuật.</li>
                <li>• <strong>Straw Man (Người rơm):</strong> Bóp méo quan điểm đối phương thành dạng cực đoan, lố bịch để dễ dàng bác bỏ.</li>
                <li>• <strong>False Dilemma / Dichotomy:</strong> Ép đối phương vào 2 lựa chọn cực đoan duy nhất ("hoặc ta hoặc thù") trong khi còn nhiều giải pháp khác.</li>
                <li>• <strong>Post Hoc Ergo Propter Hoc:</strong> Giả định rằng sự kiện A gây ra sự kiện B chỉ vì B xảy ra ngay sau A.</li>
                <li>• <strong>Slippery Slope (Dốc trượt):</strong> Suy diễn phi lý rằng một hành động nhỏ sẽ kéo theo chuỗi thảm họa khôn lường.</li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
              <h4 class="font-bold text-purple-900 dark:text-purple-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-scroll text-purple-600"></i> 4 Thủ Pháp Tu Từ Bậc Thầy (Rhetorical Tropes)
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>Litotes:</strong> Phép nói giảm qua hai lần phủ định để nhấn mạnh: <em>"The general's valor was by no means negligible"</em> (= vô cùng hiển hách).</li>
                <li>• <strong>Chiasmus:</strong> Phép đảo đối xứng cấu trúc (AB &rarr; BA): <em>"Ask not what your country can do for you &mdash; ask what you can do for your country."</em></li>
                <li>• <strong>Zeugma:</strong> Một động từ/tính từ điều phối hai tân ngữ mang tầng nghĩa khác nhau: <em>"He lost his coat and his temper."</em></li>
                <li>• <strong>Oxymoron:</strong> Ghép hai khái niệm tương phản tuyệt đối: <em>"deafening silence"</em>, <em>"cruel kindness"</em>.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quizzes Chuyên đề 8 -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-amber-500"></i> Bài Tập Tự Luyện Chuyên Đề 8 (Chuẩn Olympic &amp; C2)
          </h4>
          <div class="space-y-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                1. In a televised debate on academic tenure, candidate X said: "My esteemed opponent wants to abolish all student tuition fees, which proves he wishes to bankrupt the universities and eradicate higher education entirely!" Which fallacy is this?
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_8_1', 0, true, 'Chính xác! Straw Man Fallacy (Ngụy biện người rơm): bóp méo đề xuất cải cách của đối phương thành việc \'phá hủy toàn bộ nền đại học\' để dễ công kích.')" class="quiz-btn-oly_eng_8_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. Straw Man Fallacy
                </button>
                <button onclick="checkQuiz('oly_eng_8_1', 1, false, 'Sai. Ad Hominem nhắm vào đời tư cá nhân chứ không bóp méo lập luận.')" class="quiz-btn-oly_eng_8_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. Ad Hominem Fallacy
                </button>
                <button onclick="checkQuiz('oly_eng_8_1', 2, false, 'Sai. Slippery Slope suy diễn theo chuỗi nhân quả tương lai.')" class="quiz-btn-oly_eng_8_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. Slippery Slope
                </button>
                <button onclick="checkQuiz('oly_eng_8_1', 3, false, 'Sai. Red Herring đánh lạc hướng đề tài.')" class="quiz-btn-oly_eng_8_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. Red Herring
                </button>
              </div>
              <div id="feedback-oly_eng_8_1" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                2. Which of the following sentences embodies the classical rhetorical device of <strong>Litotes</strong>?
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_8_2', 0, true, 'Chính xác! \'by no means insignificant\' = cực kỳ to lớn; dùng phủ định kép (no + in-) để diễn tả lời khẳng định tao nhã mang tính tu từ Litotes.')" class="quiz-btn-oly_eng_8_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. "The ambassador\'s contribution to the armistice was by no means insignificant."
                </button>
                <button onclick="checkQuiz('oly_eng_8_2', 1, false, 'Sai. Đây là câu trần thuật thông thường.')" class="quiz-btn-oly_eng_8_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. "The ambassador spoke with boundless eloquence and fiery zeal."
                </button>
                <button onclick="checkQuiz('oly_eng_8_2', 2, false, 'Sai. Đây là thủ pháp nhân hóa (Personification).')" class="quiz-btn-oly_eng_8_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. "The night sky wept glistening tears of dewy sorrow."
                </button>
                <button onclick="checkQuiz('oly_eng_8_2', 3, false, 'Sai. Đây là thủ pháp hoán dụ (Metonymy).')" class="quiz-btn-oly_eng_8_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. "The pen proved mightier than the sword in the historic revolution."
                </button>
              </div>
              <div id="feedback-oly_eng_8_2" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                3. The sentence "He stole her heirloom emerald pendant and her innocent heart" is an exquisite illustration of:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_8_3', 0, true, 'Chính xác! Phép Zeugma: động từ \'stole\' đồng thời chi phối cả tân ngữ nghĩa đen (emerald pendant) và tân ngữ nghĩa bóng trừu tượng (innocent heart).')" class="quiz-btn-oly_eng_8_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. Zeugma
                </button>
                <button onclick="checkQuiz('oly_eng_8_3', 1, false, 'Sai. Chiasmus là phép đảo chéo đối xứng AB-BA.')" class="quiz-btn-oly_eng_8_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. Chiasmus
                </button>
                <button onclick="checkQuiz('oly_eng_8_3', 2, false, 'Sai. Oxymoron là phép nghịch hợp giữa hai từ cạnh nhau.')" class="quiz-btn-oly_eng_8_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. Oxymoron
                </button>
                <button onclick="checkQuiz('oly_eng_8_3', 3, false, 'Sai. Hyperbole là phép cường điệu hóa.')" class="quiz-btn-oly_eng_8_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. Hyperbole
                </button>
              </div>
              <div id="feedback-oly_eng_8_3" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                4. "Either you embrace unconditional fiscal deregulation, or you desire to witness our civilization crumble into catastrophic ruin." This argument commits the fallacy of:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_8_4', 0, true, 'Chính xác! False Dilemma (Song đề giả): ép người nghe chọn giữa 2 thái cực mà lờ đi nhiều con đường dung hòa khả thi khác.')" class="quiz-btn-oly_eng_8_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. False Dilemma
                </button>
                <button onclick="checkQuiz('oly_eng_8_4', 1, false, 'Sai. Ad Hominem công kích phẩm chất cá nhân.')" class="quiz-btn-oly_eng_8_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. Ad Hominem
                </button>
                <button onclick="checkQuiz('oly_eng_8_4', 2, false, 'Sai. Post Hoc ngụy biện về thứ tự thời gian.')" class="quiz-btn-oly_eng_8_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. Post Hoc Ergo Propter Hoc
                </button>
                <button onclick="checkQuiz('oly_eng_8_4', 3, false, 'Sai. Bandwagon là ngụy biện chạy theo số đông.')" class="quiz-btn-oly_eng_8_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. Bandwagon Fallacy
                </button>
              </div>
              <div id="feedback-oly_eng_8_4" class="hidden"></div>
            </div>
          </div>
        </div>
      </article>

      <!-- ========================================== -->
      <!-- CHUYÊN ĐỀ 9: CPE KEY WORD TRANSFORMATION -->
      <!-- ========================================== -->
      <article id="chuyende-9" class="lesson-section bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-black text-xs">
              CHUYÊN ĐỀ 09
            </span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Viết Lại Câu Đẳng Cấp Cambridge CPE C2 &amp; Olympic 30/4</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> Thời lượng dự kiến: 110 phút
          </span>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            CPE Key Word Transformation, Inversion Paraphrase &amp; Idiomatic Register
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Phần viết lại câu biến đổi từ khóa (Key Word Transformation) cấp độ C2 yêu cầu thí sinh giữ nguyên nghĩa gốc bằng 3 đến 8 từ với từ cho sẵn viết hoa, kết hợp thành ngữ học thuật tinh xảo và các mẫu câu đảo ngữ phức tạp:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-gem text-amber-600"></i> 4 Mẫu Thành Ngữ "Điểm Mười" Trong Olympic
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>BRUNT:</strong> <em>The coastal hamlets suffered the worst consequences of the tsunami.</em>
                  <br>&rarr; The coastal hamlets <strong>bore the brunt of</strong> the tsunami.
                </li>
                <li>• <strong>BRINK:</strong> <em>The two nations came dangerously close to plunging into total war.</em>
                  <br>&rarr; The two nations were <strong>hovering on the brink of</strong> total war.
                </li>
                <li>• <strong>QUALMS:</strong> <em>The minister did not hesitate at all to dismiss his subordinates.</em>
                  <br>&rarr; The minister had <strong>no qualms about dismissing</strong> his subordinates.
                </li>
                <li>• <strong>BOUNDS:</strong> <em>His bizarre statements exceeded all limits of diplomatic decency.</em>
                  <br>&rarr; His bizarre statements were <strong>beyond the bounds of</strong> diplomatic decency.
                </li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
              <h4 class="font-bold text-purple-900 dark:text-purple-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-arrows-split-up-and-left text-purple-600"></i> Cấu Trúc Biến Đổi Đảo Ngữ &amp; Nhượng Bộ
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>LITTLE DID:</strong> <em>He was completely oblivious to the coup plotting against him.</em>
                  <br>&rarr; <strong>Little did he realize</strong> that a coup was plotting against him.
                </li>
                <li>• <strong>NO CIRCUMSTANCES:</strong> <em>You must never reveal this classified cipher to anyone.</em>
                  <br>&rarr; Under <strong>no circumstances are you to reveal</strong> this cipher.
                </li>
                <li>• <strong>HARD / MUCH AS:</strong> <em>Although he pleaded with exceptional eloquence, he failed.</em>
                  <br>&rarr; <strong>Hard as he might plead</strong>, he failed to persuade the senate.
                </li>
                <li>• <strong>ACCOUNT:</strong> <em>Never leave the archive unlocked under any circumstance.</em>
                  <br>&rarr; On <strong>no account should the archive be left</strong> unlocked.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quizzes Chuyên đề 9 -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-amber-500"></i> Bài Tập Tự Luyện Chuyên Đề 9 (Chuẩn Olympic &amp; C2)
          </h4>
          <div class="space-y-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                1. "The rural agrarian population suffered the worst impact of the unprecedented economic inflation." Complete the sentence with <strong>BRUNT</strong>: "The rural agrarian population ________ the unprecedented economic inflation."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_9_1', 0, true, 'Chính xác! To bear the brunt of something = gánh chịu hậu quả nặng nề nhất của một biến cố xấu.')" class="quiz-btn-oly_eng_9_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. bore the brunt of
                </button>
                <button onclick="checkQuiz('oly_eng_9_1', 1, false, 'Sai giới từ (không dùng brunt on).')" class="quiz-btn-oly_eng_9_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. took the brunt on
                </button>
                <button onclick="checkQuiz('oly_eng_9_1', 2, false, 'Sai động từ (không dùng stood the brunt).')" class="quiz-btn-oly_eng_9_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. stood the brunt of
                </button>
                <button onclick="checkQuiz('oly_eng_9_1', 3, false, 'Sai cấu trúc ngữ cảnh.')" class="quiz-btn-oly_eng_9_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. held the brunt for
                </button>
              </div>
              <div id="feedback-oly_eng_9_1" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                2. "The diplomatic mission was on the very verge of collapse when new concessions were made." Complete with <strong>BRINK</strong>: "The diplomatic mission ________ collapse when new concessions were made."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_9_2', 0, true, 'Chính xác! To be on the brink of / hover on the brink of = đứng trên bờ vực sụp đổ.')" class="quiz-btn-oly_eng_9_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. was on the brink of
                </button>
                <button onclick="checkQuiz('oly_eng_9_2', 1, false, 'Sai giới từ (không dùng in the brink).')" class="quiz-btn-oly_eng_9_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. was in the brink of
                </button>
                <button onclick="checkQuiz('oly_eng_9_2', 2, false, 'Sai giới từ (không dùng at the brink).')" class="quiz-btn-oly_eng_9_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. stood at the brink for
                </button>
                <button onclick="checkQuiz('oly_eng_9_2', 3, false, 'Sai cấu trúc từ vựng.')" class="quiz-btn-oly_eng_9_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. hovered in brink to
                </button>
              </div>
              <div id="feedback-oly_eng_9_2" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                3. "The corporate whistleblower did not hesitate in the slightest to expose the fiscal embezzlement." Complete with <strong>QUALMS</strong>: "The corporate whistleblower had ________ the fiscal embezzlement."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_9_3', 0, true, 'Chính xác! To have no qualms about doing something = hoàn toàn không ngần ngại hay cắn rứt lương tâm khi làm việc gì.')" class="quiz-btn-oly_eng_9_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. no qualms about exposing
                </button>
                <button onclick="checkQuiz('oly_eng_9_3', 1, false, 'Sai giới từ (không dùng qualms of).')" class="quiz-btn-oly_eng_9_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. no qualm of exposing
                </button>
                <button onclick="checkQuiz('oly_eng_9_3', 2, false, 'Sai dạng số ít/số nhiều và cấu trúc to-V.')" class="quiz-btn-oly_eng_9_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. few qualms to expose
                </button>
                <button onclick="checkQuiz('oly_eng_9_3', 3, false, 'Sai giới từ (không dùng qualms against).')" class="quiz-btn-oly_eng_9_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. no qualms against exposing
                </button>
              </div>
              <div id="feedback-oly_eng_9_3" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                4. "The executive\'s insolent outburst exceeded all acceptable limits of professional decorum." Complete with <strong>BOUNDS</strong>: "The executive\'s insolent outburst was ________ professional decorum."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_9_4', 0, true, 'Chính xác! Beyond the bounds of something = vượt quá mọi giới hạn cho phép hoặc chuẩn mực đạo đức.')" class="quiz-btn-oly_eng_9_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. beyond the bounds of
                </button>
                <button onclick="checkQuiz('oly_eng_9_4', 1, false, 'Sai giới từ (không dùng out of bounds to trong ngữ cảnh này).')" class="quiz-btn-oly_eng_9_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. out of the bounds to
                </button>
                <button onclick="checkQuiz('oly_eng_9_4', 2, false, 'Sai giới từ.')" class="quiz-btn-oly_eng_9_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. past the bounds in
                </button>
                <button onclick="checkQuiz('oly_eng_9_4', 3, false, 'Sai ngữ nghĩa.')" class="quiz-btn-oly_eng_9_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. beneath the bounds of
                </button>
              </div>
              <div id="feedback-oly_eng_9_4" class="hidden"></div>
            </div>
          </div>
        </div>
      </article>

      <!-- ========================================== -->
      <!-- CHUYÊN ĐỀ 10: CRITICAL DISCOURSE ESSAY -->
      <!-- ========================================== -->
      <article id="chuyende-10" class="lesson-section bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-black text-xs">
              CHUYÊN ĐỀ 10
            </span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Viết Luận Biện Luận Triết Học &amp; Xã Hội C2 (Discursive Essay)</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> Thời lượng dự kiến: 120 phút
          </span>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Critical Discourse Essay, Syllogistic Logic &amp; Counter-Rebuttal Architecture
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Bài luận Olympic Tiếng Anh (350-450 từ) không sử dụng văn phong học trò đơn giản mà yêu cầu tư duy lập luận tam đoạn luận (Syllogism), kỹ thuật củng cố lập trường đối lập rồi bẻ gãy (Steel-manning &amp; Counter-rebuttal) cùng kho ngữ liệu triết học sâu sắc:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-landmark text-amber-600"></i> Cấu Trúc Luận Điểm 5 Đoạn Chuẩn Olympic TST
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>1. Exordium (Introduction):</strong> Đặt vấn đề bằng một nghịch lý triết học (philosophical paradox) và khẳng định luận đề không khoan nhượng (Thesis Statement).</li>
                <li>• <strong>2. Probatio I (Deductive Syllogism):</strong> Xây dựng tam đoạn luận: Tiền đề chính (Major Premise) &rarr; Tiền đề phụ (Minor Premise) &rarr; Kết luận tất yếu.</li>
                <li>• <strong>3. Probatio II (Dialectical Nuance):</strong> Đào sâu tính đạo đức học (Deontology vs Consequentialism) hoặc các tác động kinh tế &ndash; xã hội vi mô.</li>
                <li>• <strong>4. Refutatio (Steel-manning &amp; Rebuttal):</strong> Tái hiện luận điểm của phe đối lập ở trạng thái thuyết phục nhất, sau đó vạch trần điểm mù cốt tử để bác bỏ.</li>
                <li>• <strong>5. Peroratio (Synthesis):</strong> Đúc kết thông điệp thời đại và dự phóng tương lai nhân loại.</li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
              <h4 class="font-bold text-purple-900 dark:text-purple-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-quote-left text-purple-600"></i> Thuật Ngữ Triết Học &amp; Mẫu Câu Lập Luận C2
              </h4>
              <ul class="space-y-1.5 text-gray-700 dark:text-gray-300">
                <li>• <strong>a fortiori:</strong> càng có lý do mạnh mẽ hơn nữa để khẳng định (= with even stronger reason).</li>
                <li>• <strong>ipso facto:</strong> chính do sự thật đó, hiển nhiên là (= by that very fact).</li>
                <li>• <strong>per se:</strong> tự bản thân nó (= intrinsically / in itself).</li>
                <li>• <strong>shibboleth:</strong> tín điều hoặc khẩu hiệu sáo rỗng được số đông chấp nhận mù quáng.</li>
                <li>• <em>"It is a prevailing shibboleth that economic deregulation inherently engenders human well-being."</em></li>
                <li>• <em>"To subscribe uncritically to this dogma is to invite intellectual myopia."</em></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quizzes Chuyên đề 10 -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-amber-500"></i> Bài Tập Tự Luyện Chuyên Đề 10 (Chuẩn Olympic &amp; C2)
          </h4>
          <div class="space-y-4 text-xs sm:text-sm">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                1. In rigorous philosophical discourse, which Latin locution means <strong>"with even stronger reason"</strong> or <strong>"all the more so"</strong>?
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_10_1', 0, true, 'Chính xác! A fortiori = với lý do càng mạnh mẽ và xác đáng hơn nữa (thuật ngữ biện luận triết học C2).')" class="quiz-btn-oly_eng_10_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. a fortiori
                </button>
                <button onclick="checkQuiz('oly_eng_10_1', 1, false, 'Sai. Ipso facto = bởi chính sự việc đó (by that very fact).')" class="quiz-btn-oly_eng_10_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. ipso facto
                </button>
                <button onclick="checkQuiz('oly_eng_10_1', 2, false, 'Sai. Per se = tự bản thân nó (in itself).')" class="quiz-btn-oly_eng_10_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. per se
                </button>
                <button onclick="checkQuiz('oly_eng_10_1', 3, false, 'Sai. Ad infinitum = kéo dài đến vô tận.')" class="quiz-btn-oly_eng_10_1 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. ad infinitum
                </button>
              </div>
              <div id="feedback-oly_eng_10_1" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                2. Which sentence exhibits the most sophisticated academic register suitable for opening a critique of a widely accepted dogma?
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_10_2', 0, true, 'Chính xác! \'It is a prevailing shibboleth that...\' thể hiện đẳng cấp từ vựng học thuật C2 để thách thức một tín điều số đông.')" class="quiz-btn-oly_eng_10_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. "It is a prevailing shibboleth that untrammeled technological innovation is universally benevolent."
                </button>
                <button onclick="checkQuiz('oly_eng_10_2', 1, false, 'Sai. Văn phong giao tiếp thông thường, không đạt chuẩn Olympic C2.')" class="quiz-btn-oly_eng_10_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. "A lot of ordinary folks assume new technology is always amazing and wonderful."
                </button>
                <button onclick="checkQuiz('oly_eng_10_2', 2, false, 'Sai. Cấu trúc câu đơn giản thiếu tính luận biện.')" class="quiz-btn-oly_eng_10_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. "People usually think technology has no bad points, which is definitely a major mistake."
                </button>
                <button onclick="checkQuiz('oly_eng_10_2', 3, false, 'Sai. Văn phong thô sơ.')" class="quiz-btn-oly_eng_10_2 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. "Technology cannot always be good because bad things can actually happen."
                </button>
              </div>
              <div id="feedback-oly_eng_10_2" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                3. Consider the classical deductive syllogism: "Major Premise: All synthetic neural networks lack biological sentient mortality. Minor Premise: Autonomous AI systems are synthetic neural networks. Conclusion: ________."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_10_3', 0, true, 'Chính xác! Kết luận logic tất yếu của tam đoạn luận: Autonomous AI systems lack biological sentient mortality.')" class="quiz-btn-oly_eng_10_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. Autonomous AI systems lack biological sentient mortality.
                </button>
                <button onclick="checkQuiz('oly_eng_10_3', 1, false, 'Sai. Suy diễn phi logic nằm ngoài tiền đề đã nêu.')" class="quiz-btn-oly_eng_10_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. Autonomous AI systems will inevitably exterminate all mortals.
                </button>
                <button onclick="checkQuiz('oly_eng_10_3', 2, false, 'Sai. Trái ngược hoàn toàn với tiền đề.')" class="quiz-btn-oly_eng_10_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. All biological sentient entities are autonomous AI systems.
                </button>
                <button onclick="checkQuiz('oly_eng_10_3', 3, false, 'Sai kết cấu nhân quả.')" class="quiz-btn-oly_eng_10_3 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. Synthetic neural networks possess biological immortality.
                </button>
              </div>
              <div id="feedback-oly_eng_10_3" class="hidden"></div>
            </div>

            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 space-y-3">
              <p class="font-bold text-gray-900 dark:text-white">
                4. In philosophical debate and academic discourse, the rhetorical technique of <strong>"Steel-manning"</strong> signifies:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button onclick="checkQuiz('oly_eng_10_4', 0, true, 'Chính xác! Steel-manning là kỹ thuật xây dựng và trình bày phiên bản mạnh mẽ, thuyết phục nhất của luận điểm đối phương trước khi phản biện (ngược lại hoàn toàn với ngụy biện người rơm Straw-manning).')" class="quiz-btn-oly_eng_10_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  A. Constructing the strongest possible form of an opposing argument prior to refutation.
                </button>
                <button onclick="checkQuiz('oly_eng_10_4', 1, false, 'Sai. Đây là hành vi công kích thô lỗ trong tranh luận.')" class="quiz-btn-oly_eng_10_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  B. Constantly interrupting the interlocutor with overwhelming statistics.
                </button>
                <button onclick="checkQuiz('oly_eng_10_4', 2, false, 'Sai. Đây chính là định nghĩa của ngụy biện người rơm (Straw-manning).')" class="quiz-btn-oly_eng_10_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  C. Crafting a caricature of the counterargument to demolish it with ease.
                </button>
                <button onclick="checkQuiz('oly_eng_10_4', 3, false, 'Sai định nghĩa học thuật.')" class="quiz-btn-oly_eng_10_4 text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-amber-50 dark:hover:bg-gray-700/60 transition">
                  D. Refusing to alter one\'s dogmatic premises regardless of empirical proofs.
                </button>
              </div>
              <div id="feedback-oly_eng_10_4" class="hidden"></div>
            </div>
          </div>
        </div>
      </article>
`;

let content = fs.readFileSync(targetFilePath, 'utf8');

// Locate the segment from <!-- CHUYÊN ĐỀ 5 ĐẾN 10 (COMPREHENSIVE OLYMPIC CURRICULUM) --> to <!-- Completion Section -->
const startMarker = '<!-- CHUY\xc3\x8aN \xc4\x90\xe1\xbb\x80 5 \xc4\x90\xe1\xba\xbeN 10 (COMPREHENSIVE OLYMPIC CURRICULUM) -->';
const endMarker = '<!-- Completion Section -->';

let startIndex = content.indexOf('<!-- CHUYÊN ĐỀ 5 ĐẾN 10');
if (startIndex === -1) {
  startIndex = content.indexOf('CHUYEN D? 5 D?N 10');
}
if (startIndex === -1) {
  // Let's find by id="chuyende-5"
  const art5Index = content.indexOf('<article id="chuyende-5"');
  if (art5Index !== -1) {
    // Find the comment before it
    const lastComment = content.lastIndexOf('<!--', art5Index);
    startIndex = lastComment !== -1 ? lastComment : art5Index;
  }
}

const endIndex = content.indexOf('<!-- Completion Section -->');

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not locate markers in file! startIndex:', startIndex, 'endIndex:', endIndex);
  process.exit(1);
}

const newContent = content.slice(0, startIndex) + topicsHtml.trim() + '\n\n      ' + content.slice(endIndex);
fs.writeFileSync(targetFilePath, newContent, 'utf8');
console.log('Successfully updated courses/olympic_tienganh_thpt.html!');
