const fs = require('fs');

const targetFilePath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\hsg_hoa_thpt.html';
let content = fs.readFileSync(targetFilePath, 'utf8');

// 1. Add header button
const headerMarker = '<!-- Dark/Light Mode Button -->';
const headerBtnHtml = `<button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-stopwatch"></i>
          <span class="hidden sm:inline">Phòng Thi Thử HSG Hóa</span>
          <span class="sm:hidden">Thi Thử</span>
        </button>
        `;

if (!content.includes('Phòng Thi Thử HSG Hóa')) {
  content = content.replace(headerMarker, headerBtnHtml + headerMarker);
}

// 2. Add hero quick action button inside Quick Progress Card
const heroProgressMarker = '<button onclick="resetAllQuizzes()" class="w-full py-2 px-3 text-xs text-center rounded-xl bg-white/15 hover:bg-white/25 transition text-white font-medium border border-white/20 flex items-center justify-center gap-2">';
const heroQuickActionHtml = `<div class="pt-2 border-t border-white/10 flex flex-col gap-2">
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-trophy text-emerald-950"></i> Thi Thử Đề HSG Hóa Học (60:00)
          </button>
          <button onclick="resetAllQuizzes()" class="w-full py-2 px-3 text-xs text-center rounded-xl bg-white/15 hover:bg-white/25 transition text-white font-medium border border-white/20 flex items-center justify-center gap-2">`;

if (!content.includes('Thi Thử Đề HSG Hóa Học (60:00)')) {
  content = content.replace(heroProgressMarker, heroQuickActionHtml);
}

// 3. Add sidebar exam card in Desktop Sticky Sidebar
const sidebarNavCloseMarker = '</nav>\n        </div>\n      </div>\n    </aside>';
const sidebarExamCardHtml = `</nav>
        </div>

        <!-- Sidebar Mock Exam Banner -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white border border-emerald-500/30 shadow-lg space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <i class="fa-solid fa-flask-vial"></i> Phòng Thi Thử Trực Tuyến
          </div>
          <p class="text-xs text-emerald-100 leading-relaxed">
            Đề thi thử HSG Hóa Học THPT chuyên sâu 10 câu tinh hoa chuẩn VChO/IChO, có đồng hồ đếm ngược 60 phút và xếp hạng Huy Chương.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-3 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 text-xs font-black transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play text-emerald-600"></i> Bắt đầu thi thử (60:00)
          </button>
        </div>
      </div>
    </aside>`;

if (!content.includes('Đề thi thử HSG Hóa Học THPT chuyên sâu 10 câu tinh hoa')) {
  content = content.replace(sidebarNavCloseMarker, sidebarExamCardHtml);
}

// 4. Add exam button in Course Summary Banner (End of main)
const summaryBtnMarker = '<button onclick="window.scrollTo({top: 0, behavior: \'smooth\'})"';
const summaryExamBtnHtml = `<button onclick="openCourseQuizModal()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-black text-sm shadow-lg shadow-teal-500/30 transition flex items-center gap-2">
              <i class="fa-solid fa-trophy text-emerald-900"></i> Bắt Đầu Thi Thử HSG Hóa (60:00)
            </button>
            <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})"`;

if (!content.includes('Bắt Đầu Thi Thử HSG Hóa (60:00)')) {
  content = content.replace(summaryBtnMarker, summaryExamBtnHtml);
}

// 5. Add Course Exam Modal markup right before </body> or <footer>
const modalHtml = `
  <!-- ======================================================== -->
  <!-- MODAL: PHÒNG THI THỬ HỌC SINH GIỎI HÓA HỌC THPT (60:00) -->
  <!-- ======================================================== -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 hidden overflow-y-auto bg-slate-950/80 backdrop-blur-sm transition-opacity p-3 sm:p-6 flex items-center justify-center">
    <div class="relative w-full max-w-4xl bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-emerald-500/30 overflow-hidden my-auto max-h-[92vh] flex flex-col">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-6 bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-emerald-500/20 shrink-0">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
              HSG Quốc Gia • IChO
            </span>
            <span class="text-xs text-emerald-200 hidden sm:inline">• 10 Câu Hỏi Chuyên Sâu Tích Hợp</span>
          </div>
          <h3 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <i class="fa-solid fa-trophy text-yellow-400"></i> Đề Thi Thử Học Sinh Giỏi Môn Hóa Học Cấp 3
          </h3>
        </div>

        <!-- Live Countdown Timer & Close Button -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-emerald-400/30 text-emerald-300 font-mono font-black text-sm sm:text-base shadow-inner">
            <i class="fa-solid fa-stopwatch animate-pulse text-emerald-400"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeCourseQuizModal()" class="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition" aria-label="Đóng phòng thi">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body (Scrollable Exam Content) -->
      <div class="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm sidebar-scroll text-gray-800 dark:text-gray-200">
        
        <!-- Score Result Notification (Hidden initially) -->
        <div id="examResultBox" class="hidden p-5 rounded-2xl border transition-all duration-300 space-y-3">
          <div class="flex items-center justify-between">
            <h4 id="examResultTitle" class="text-lg font-black flex items-center gap-2"></h4>
            <span id="examScoreBadge" class="px-3 py-1 rounded-xl font-black text-sm"></span>
          </div>
          <p id="examFeedbackText" class="text-xs sm:text-sm leading-relaxed"></p>
          <div class="pt-2 flex flex-wrap gap-3">
            <button onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5">
              <i class="fa-solid fa-book-open"></i> Xem Lời Giải Chi Tiết Từng Câu
            </button>
            <button onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-rotate-right"></i> Làm Lại Đề Thi
            </button>
          </div>
        </div>

        <!-- Exam Form with 10 Rigorous Chemistry Questions -->
        <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6">

          <!-- Câu 1: Cấu tạo nguyên tử & Thuyết Obitan MO -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 01 / 10 • NGUYÊN TỬ &amp; OBITAN MO</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Dựa vào thuyết obitan phân tử (MO) đối với phân tử dị hạch $NO$, khi ion hóa tạo thành cation nitrozyl $NO^+$, bậc liên kết (Bond Order) và từ tính của $NO^+$ thay đổi như thế nào so với $NO$?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> Bậc liên kết tăng từ 2.5 lên 3.0; chuyển từ thuận từ (paramagnetic) sang nghịch từ (diamagnetic) do tách electron ở MO phản liên kết $\pi^*_{2p}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> Bậc liên kết giảm từ 2.5 xuống 2.0; từ tính vẫn giữ nguyên tính thuận từ với 1 electron độc thân.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> Bậc liên kết giữ nguyên bằng 2.5; chuyển từ nghịch từ sang thuận từ do kích thích electron.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> Bậc liên kết tăng lên 3.5; phân tử vẫn có 2 electron độc thân trên obitan $\sigma_{2p_z}$.</span>
              </label>
            </div>
          </div>

          <!-- Câu 2: Nhiệt động học & Phương trình Gibbs -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 02 / 10 • NHIỆT ĐỘNG LỰC HỌC &amp; GIBBS</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Cho phản ứng: $\text{N}_2\text{O}_4(k) \rightleftharpoons 2\text{NO}_2(k)$ có $\Delta H^\circ_{298} = +57.2\text{ kJ/mol}$ và $\Delta S^\circ_{298} = +175.8\text{ J/(mol}\cdot\text{K)}$. Bỏ qua sự phụ thuộc của $\Delta H^\circ$ và $\Delta S^\circ$ vào nhiệt độ, ở điều kiện áp suất chuẩn 1 bar, phản ứng bắt đầu tự diễn biến theo chiều thuận ở khoảng nhiệt độ nào?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> $T > 325.4\text{ K}$ (tức $t > 52.4^\circ\text{C}$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> $T < 325.4\text{ K}$ (tức $t < 52.4^\circ\text{C}$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> $T > 572.0\text{ K}$ (tức $t > 299^\circ\text{C}$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> Phản ứng luôn tự diễn biến ở mọi nhiệt độ vì có $\Delta S^\circ > 0$.</span>
              </label>
            </div>
          </div>

          <!-- Câu 3: Động hóa học & Phương trình Arrhenius -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 03 / 10 • ĐỘNG HÓA HỌC &amp; ARRHENIUS</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Một phản ứng phân hủy pha khí tuân theo quy luật động học bậc một có chu kỳ bán hủy $t_{1/2} = 30$ phút ở $300\text{ K}$ và $t_{1/2} = 5$ phút ở $320\text{ K}$. Lấy $R = 8.314\text{ J/(mol}\cdot\text{K})$, năng lượng hoạt hóa $E_a$ của phản ứng xấp xỉ bằng:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> $71.5\text{ kJ/mol}$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> $43.8\text{ kJ/mol}$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> $108.2\text{ kJ/mol}$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> $14.3\text{ kJ/mol}$</span>
              </label>
            </div>
          </div>

          <!-- Câu 4: Cân bằng hóa học & Hằng số Kp, Kc -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 04 / 10 • CÂN BẰNG PHA KHÍ &amp; HẰNG SỐ CÂN BẰNG</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Ở $1000\text{ K}$, phản ứng dị thể $\text{CO}_2(k) + \text{C}(r) \rightleftharpoons 2\text{CO}(k)$ có hằng số cân bằng $K_p = 1.5\text{ atm}$. Nếu tổng áp suất của hệ khí ở trạng thái cân bằng là $3.0\text{ atm}$, áp suất riêng phần của $\text{CO}$ và phần mol của nó trong pha khí là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> $P_{\text{CO}} = 1.5\text{ atm}$ (phần mol $x_{\text{CO}} = 0.50$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> $P_{\text{CO}} = 2.0\text{ atm}$ (phần mol $x_{\text{CO}} = 0.67$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> $P_{\text{CO}} = 1.0\text{ atm}$ (phần mol $x_{\text{CO}} = 0.33$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> $P_{\text{CO}} = 2.5\text{ atm}$ (phần mol $x_{\text{CO}} = 0.83$).</span>
              </label>
            </div>
          </div>

          <!-- Câu 5: Cân bằng axit-bazơ & Dung dịch đệm -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 05 / 10 • AXIT - BAZƠ &amp; DUNG DỊCH ĐỆM</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Trộn $100\text{ mL}$ dung dịch axit axetic $\text{CH}_3\text{COOH } 0.20\text{ M}$ ($pK_a = 4.76$) với $100\text{ mL}$ dung dịch $\text{NaOH } 0.10\text{ M}$. Giá trị $pH$ của dung dịch thu được sau khi đạt trạng thái cân bằng ở $25^\circ\text{C}$ là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> $pH = 4.76$ (tạo hệ đệm cân bằng tỷ lệ mol $[\text{CH}_3\text{COOH}] : [\text{CH}_3\text{COO}^-] = 1 : 1$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> $pH = 7.00$ (do phản ứng trung hòa hoàn toàn giữa axit và bazơ).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> $pH = 5.06$ (dư muối bazơ liên hợp).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> $pH = 3.25$ (do ảnh hưởng của sự phân ly axit dư).</span>
              </label>
            </div>
          </div>

          <!-- Câu 6: Phức chất vô cơ & Thuyết Trường Tinh Thể CFT -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 06 / 10 • PHỨC CHẤT &amp; TRƯỜNG TINH THỂ (CFT)</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Theo thuyết trường tinh thể (Crystal Field Theory), hai ion phức bát diện $[\text{Fe}(\text{CN})_6]^{3-}$ và $[\text{FeF}_6]^{3-}$ có đặc điểm phân bố electron trên phân mức $d$ và từ tính như thế nào?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> $[\text{Fe}(\text{CN})_6]^{3-}$ là phức spin thấp ($t_{2g}^5 e_g^0$) có 1 electron độc thân; $[\text{FeF}_6]^{3-}$ là phức spin cao ($t_{2g}^3 e_g^2$) có 5 electron độc thân.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> Cả hai ion phức đều là phức spin thấp và đều chỉ có 1 electron độc thân vì đều chứa ion trung tâm $\text{Fe}^{3+}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> $[\text{Fe}(\text{CN})_6]^{3-}$ là phức nghịch từ hoàn toàn (0 electron độc thân); $[\text{FeF}_6]^{3-}$ có 3 electron độc thân.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> $[\text{Fe}(\text{CN})_6]^{3-}$ có 5 electron độc thân (spin cao); $[\text{FeF}_6]^{3-}$ có 1 electron độc thân (spin thấp).</span>
              </label>
            </div>
          </div>

          <!-- Câu 7: Điện hóa học, Pin Galvani & Phương trình Nernst -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 07 / 10 • ĐIỆN HÓA HỌC &amp; PIN GALVANI</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Cho pin Galvani Daniell: $\text{Zn} | \text{Zn}^{2+}(1\text{ M}) \parallel \text{Cu}^{2+}(1\text{ M}) | \text{Cu}$ ở $298\text{ K}$. Biết thế điện cực chuẩn $E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0.763\text{ V}$ và $E^\circ(\text{Cu}^{2+}/\text{Cu}) = +0.340\text{ V}$, hằng số Faraday $F = 96485\text{ C/mol}$. Sức điện động chuẩn $E^\circ_{\text{pin}}$ và biến thiên năng lượng tự do Gibbs chuẩn $\Delta G^\circ$ của pin là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> $E^\circ_{\text{pin}} = +1.103\text{ V}$ và $\Delta G^\circ = -212.85\text{ kJ/mol}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> $E^\circ_{\text{pin}} = +0.423\text{ V}$ và $\Delta G^\circ = -81.63\text{ kJ/mol}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> $E^\circ_{\text{pin}} = +1.103\text{ V}$ và $\Delta G^\circ = +212.85\text{ kJ/mol}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> $E^\circ_{\text{pin}} = -1.103\text{ V}$ và $\Delta G^\circ = -106.42\text{ kJ/mol}$.</span>
              </label>
            </div>
          </div>

          <!-- Câu 8: Tinh thể học & Cấu trúc ô mạng cơ sở -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 08 / 10 • TINH THỂ HỌC &amp; Ô MẠNG CƠ SỞ</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Kim loại đồng ($\text{Cu}$, khối lượng mol $M = 63.55\text{ g/mol}$) kết tinh theo mạng lập phương tâm diện (FCC) với độ dài cạnh ô mạng cơ sở $a = 3.61 \times 10^{-8}\text{ cm}$. Lấy số Avogadro $N_A = 6.022 \times 10^{23}\text{ mol}^{-1}$. Số nguyên tử $\text{Cu}$ trong một ô mạng cơ sở và khối lượng riêng lý thuyết của kim loại đồng lần lượt là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> $Z = 4$ nguyên tử; khối lượng riêng $d \approx 8.97\text{ g/cm}^3$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> $Z = 2$ nguyên tử; khối lượng riêng $d \approx 4.48\text{ g/cm}^3$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> $Z = 6$ nguyên tử; khối lượng riêng $d \approx 13.45\text{ g/cm}^3$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> $Z = 4$ nguyên tử; khối lượng riêng $d \approx 11.23\text{ g/cm}^3$.</span>
              </label>
            </div>
          </div>

          <!-- Câu 9: Hóa học hữu cơ & Cấu hình lập thể R/S -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 09 / 10 • HÓA HỮU CƠ &amp; DANH PHÁP LẬP THỂ R/S</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Theo quy tắc danh pháp lập thể Cahn-Ingold-Prelog (CIP), hãy xác định thứ tự ưu tiên của các nhóm thế và cấu hình lập thể $(R/S)$ tại nguyên tử cacbon bất đối của phân tử axit $(+)$-lactic tự nhiên: $\text{CH}_3-\text{CH(OH)}-\text{COOH}$ khi nhóm $-\text{H}$ hướng ra xa người quan sát:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> Ưu tiên: $-\text{OH} > -\text{COOH} > -\text{CH}_3 > -\text{H}$; cấu hình là $(S)$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> Ưu tiên: $-\text{COOH} > -\text{OH} > -\text{CH}_3 > -\text{H}$; cấu hình là $(R)$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> Ưu tiên: $-\text{OH} > -\text{CH}_3 > -\text{COOH} > -\text{H}$; cấu hình là $(S)$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> Ưu tiên: $-\text{OH} > -\text{COOH} > -\text{CH}_3 > -\text{H}$; cấu hình là $(R)$.</span>
              </label>
            </div>
          </div>

          <!-- Câu 10: Cơ chế phản ứng hữu cơ chuyên sâu -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>CÂU HỎI 10 / 10 • CƠ CHẾ PHẢN ỨNG HỮU CƠ $S_N1$ VS $S_N2$</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Khi cho chất quang hoạt $(R)\text{-2-bromooctan}$ phản ứng với dung dịch $\text{NaOH}$ trong dung môi aprotic phân cực (DMSO) ở nhiệt độ phòng, phản ứng diễn ra ưu thế theo cơ chế nào và hóa học lập thể của sản phẩm thu được là gì?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="A" required class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>A.</strong> Cơ chế $S_N2$ với sự nghịch đảo cấu hình Walden hoàn toàn, tạo ra $(S)\text{-octan-2-ol}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="B" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>B.</strong> Cơ chế $S_N1$ qua trạng thái cacbocation phẳng, tạo ra hỗn hợp raxemic $(\pm)\text{-octan-2-ol}$ không quang hoạt.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="C" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>C.</strong> Cơ chế $S_N2$ giữ nguyên cấu hình không gian, tạo ra $(R)\text{-octan-2-ol}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="D" class="mt-0.5 text-emerald-600 focus:ring-emerald-500">
                <span><strong>D.</strong> Cơ chế tách $E2$ tạo thành hỗn hợp đồng phân hình học cis-trans của oct-2-en mà không tạo ancol.</span>
              </label>
            </div>
          </div>

          <!-- Submit Button Container -->
          <div class="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              <i class="fa-solid fa-circle-info mr-1"></i> Kiểm tra kỹ các câu trước khi nộp bài. Hệ thống sẽ tự động xếp giải HSG.
            </span>
            <button type="submit" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm shadow-xl shadow-emerald-500/25 transition flex items-center gap-2">
              <i class="fa-solid fa-paper-plane"></i> Nộp Bài &amp; Xếp Hạng Giải
            </button>
          </div>

        </form>

        <!-- Detailed Review Solutions Container -->
        <div id="examSolutionsReview" class="hidden mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <h4 class="text-base font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Phân Tích &amp; Lời Giải Chi Tiết 10 Câu Đề Thi Thử HSG Hóa Học
          </h4>
          
          <div class="space-y-3 text-xs sm:text-sm">
            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 1: Đáp án A.</strong><br>
              Theo thuyết MO, phân tử $NO$ có 11 electron hóa trị: $\sigma_{2s}^2 \sigma_{2s}^{*2} \pi_{2p_x}^2 \pi_{2p_y}^2 \sigma_{2p_z}^2 \pi_{2p_x}^{*1}$. Bậc liên kết $BO = (8 - 3)/2 = 2.5$, có 1 e độc thân nên thuận từ. Khi mất 1e ở MO $\pi^*$ tạo cation $NO^+$, cấu hình trở thành đẳng electron với $N_2$ (10 e hóa trị): $BO = (8 - 2)/2 = 3.0$ và mọi electron đều đã ghép đôi $\to$ $NO^+$ là ion nghịch từ (diamagnetic) rất bền.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 2: Đáp án A.</strong><br>
              Phản ứng tự diễn biến khi $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ < 0$. Do $\Delta H^\circ > 0$ và $\Delta S^\circ > 0$, nhiệt độ ngưỡng đảo chiều là $T_{\text{cb}} = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{57200\text{ J/mol}}{175.8\text{ J/(mol}\cdot\text{K)}} \approx 325.37\text{ K} \approx 52.4^\circ\text{C}$. Do đó khi $T > 325.4\text{ K}$, số hạng $-T\Delta S^\circ$ chiếm ưu thế làm $\Delta G^\circ < 0$, phản ứng tự diễn biến theo chiều thuận.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 3: Đáp án A.</strong><br>
              Với phản ứng bậc một: $k = \frac{\ln 2}{t_{1/2}} \implies \frac{k_{320}}{k_{300}} = \frac{t_{1/2}(300)}{t_{1/2}(320)} = \frac{30}{5} = 6$. Theo phương trình Arrhenius dạng tích phân: $\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right) \iff \ln(6) = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right) \implies E_a \approx 71478\text{ J/mol} \approx 71.5\text{ kJ/mol}$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 4: Đáp án A.</strong><br>
              Carbon rắn $C(r)$ có hoạt độ bằng 1 nên không xuất hiện trong biểu thức hằng số cân bằng: $K_p = \frac{P_{\text{CO}}^2}{P_{\text{CO}_2}} = 1.5$. Ta có $P_{\text{tổng}} = P_{\text{CO}} + P_{\text{CO}_2} = 3.0\text{ atm} \implies P_{\text{CO}_2} = 3.0 - P_{\text{CO}}$. Thay vào: $P_{\text{CO}}^2 + 1.5 P_{\text{CO}} - 4.5 = 0$. Phương trình bậc hai có nghiệm dương $P_{\text{CO}} = 1.5\text{ atm}$. Phần mol $x_{\text{CO}} = \frac{1.5}{3.0} = 0.50$ (50%).
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 5: Đáp án A.</strong><br>
              Số mol axit: $n_{\text{CH}_3\text{COOH}} = 0.1 \times 0.2 = 0.02\text{ mol}$; số mol kiềm $n_{\text{NaOH}} = 0.1 \times 0.1 = 0.01\text{ mol}$. Sau phản ứng tạo ra $0.01\text{ mol CH}_3\text{COONa}$ và còn dư $0.02 - 0.01 = 0.01\text{ mol CH}_3\text{COOH}$. Nồng độ hai chất trong hệ đệm bằng nhau: $[\text{CH}_3\text{COOH}] = [\text{CH}_3\text{COO}^-]$. Áp dụng phương trình Henderson-Hasselbalch: $pH = pK_a + \log\frac{[\text{CH}_3\text{COO}^-]}{[\text{CH}_3\text{COOH}]} = 4.76 + \log(1) = 4.76$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 6: Đáp án A.</strong><br>
              Ion $\text{Fe}^{3+}$ có cấu hình $[Ar]3d^5$. Phối tử $CN^-$ là phối tử trường mạnh ($\Delta_o > P$), các electron dồn ghép đôi tối đa ở obitan $t_{2g}$ tạo cấu hình $t_{2g}^5 e_g^0$ $\implies$ chỉ có 1 electron độc thân (phức spin thấp). Ngược lại, phối tử $F^-$ là phối tử trường yếu ($\Delta_o < P$), các electron phân bố đều tuân theo quy tắc Hund $t_{2g}^3 e_g^2 \implies$ có 5 electron độc thân (phức spin cao).
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 7: Đáp án A.</strong><br>
              Sức điện động chuẩn của pin: $E^\circ_{\text{pin}} = E^\circ_{\text{catot}} - E^\circ_{\text{anot}} = E^\circ(\text{Cu}^{2+}/\text{Cu}) - E^\circ(\text{Zn}^{2+}/\text{Zn}) = 0.340 - (-0.763) = +1.103\text{ V}$. Phản ứng pin trao đổi $n = 2$ electron ($\text{Zn} + \text{Cu}^{2+} \to \text{Zn}^{2+} + \text{Cu}$). Biến thiên năng lượng tự do Gibbs: $\Delta G^\circ = -nFE^\circ_{\text{pin}} = -2 \times 96485 \times 1.103 = -212846\text{ J/mol} = -212.85\text{ kJ/mol}$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 8: Đáp án A.</strong><br>
              Mạng lập phương tâm diện (FCC) có số nguyên tử hiệu dụng trong một ô mạng: $Z = 8 \times \frac{1}{8} \text{ (đỉnh)} + 6 \times \frac{1}{2} \text{ (mặt)} = 4$ nguyên tử. Thể tích ô mạng $V = a^3 = (3.61 \times 10^{-8})^3 \approx 4.7046 \times 10^{-23}\text{ cm}^3$. Khối lượng riêng thực tế: $d = \frac{Z \times M}{N_A \times V} = \frac{4 \times 63.55}{6.022 \times 10^{23} \times 4.7046 \times 10^{-23}} \approx 8.97\text{ g/cm}^3$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 9: Đáp án A.</strong><br>
              Xác định độ ưu tiên của 4 nhóm thế gắn vào cacbon bất đối $C^*$ của axit lactic theo CIP: (1) $-OH$ (nguyên tử O có $Z=8$ lớn nhất); (2) $-COOH$ (C gắn với $(O, O, O)$); (3) $-CH_3$ (C gắn với $(H, H, H)$); (4) $-H$ ($Z=1$ nhỏ nhất). Đưa $-H$ ra xa người quan sát, vòng quay từ nhóm (1) $\to$ (2) $\to$ (3) ngược chiều kim đồng hồ, do đó cacbon mang cấu hình $(S)$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 dark:text-emerald-400">Câu 10: Đáp án A.</strong><br>
              Trong dung môi aprotic phân cực như DMSO, ion $OH^-$ không bị sonvat hóa mạnh bởi liên kết hidro nên có tính ái nhân (nucleophile) rất mạnh, thúc đẩy phản ứng theo cơ chế lưỡng phân tử $S_N2$. Phản ứng $S_N2$ diễn ra với sự tấn công từ phía đối diện (back-side attack) dẫn đến hiện tượng nghịch đảo cấu hình Walden 100%, chuyển chất đầu $(R)\text{-2-bromooctan}$ thành sản phẩm $(S)\text{-octan-2-ol}$.
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-gray-100 dark:bg-dark-surface/80 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500">
        <span>Kỳ Thi Huấn Luyện Đội Tuyển HSG Quốc Gia (VChO) &amp; IChO</span>
        <button onclick="closeCourseQuizModal()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-bold transition">
          Đóng
        </button>
      </div>

    </div>
  </div>
`;

if (!content.includes('id="courseQuizModal"')) {
  const footerMarker = '<!-- Footer -->';
  content = content.replace(footerMarker, modalHtml + '\n  ' + footerMarker);
}

// 6. Add JavaScript functions for Exam Timer, Submissions, Scoring, Solutions Review
const scriptAddition = `
    // ========================================================
    // LOGIC PHÒNG THI THỬ HSG HÓA HỌC THPT (60:00 & SCORING)
    // ========================================================
    let examTimerInterval = null;
    let examSecondsLeft = 60 * 60; // 60 minutes countdown

    function updateExamTimerDisplay() {
      const timerEl = document.getElementById('examTimer');
      if (!timerEl) return;
      const m = Math.floor(examSecondsLeft / 60);
      const s = examSecondsLeft % 60;
      timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function startExamTimer() {
      stopExamTimer();
      updateExamTimerDisplay();
      examTimerInterval = setInterval(() => {
        if (examSecondsLeft > 0) {
          examSecondsLeft--;
          updateExamTimerDisplay();
        } else {
          stopExamTimer();
          alert('⏰ Đã hết 60 phút làm bài thi thử HSG Hóa Học! Hệ thống sẽ tự động thu bài và xếp hạng giải thưởng.');
          const form = document.getElementById('courseExamForm');
          if (form) {
            submitCourseExam(new Event('submit'));
          }
        }
      }, 1000);
    }

    function stopExamTimer() {
      if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
      }
    }

    function openCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (examSecondsLeft === 60 * 60) {
          startExamTimer();
        }
        renderAllMath(modal);
      }
    }

    function closeCourseQuizModal() {
      const modal = document.getElementById('courseQuizModal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    function restartExam() {
      if (confirm('Bạn có chắc muốn làm lại toàn bộ đề thi thử HSG Hóa Học từ đầu?')) {
        const form = document.getElementById('courseExamForm');
        if (form) form.reset();
        const resultBox = document.getElementById('examResultBox');
        if (resultBox) resultBox.classList.add('hidden');
        const reviewBox = document.getElementById('examSolutionsReview');
        if (reviewBox) reviewBox.classList.add('hidden');
        examSecondsLeft = 60 * 60;
        startExamTimer();
      }
    }

    function toggleSolutionsReview() {
      const reviewBox = document.getElementById('examSolutionsReview');
      if (reviewBox) {
        reviewBox.classList.toggle('hidden');
        if (!reviewBox.classList.contains('hidden')) {
          renderAllMath(reviewBox);
        }
      }
    }

    const examAnswers = {
      eq1: 'A',
      eq2: 'A',
      eq3: 'A',
      eq4: 'A',
      eq5: 'A',
      eq6: 'A',
      eq7: 'A',
      eq8: 'A',
      eq9: 'A',
      eq10: 'A'
    };

    function submitCourseExam(event) {
      if (event && event.preventDefault) event.preventDefault();
      stopExamTimer();

      const form = document.getElementById('courseExamForm');
      if (!form) return;

      const formData = new FormData(form);
      let score = 0;
      const totalQuestions = 10;

      for (let i = 1; i <= totalQuestions; i++) {
        const userAns = formData.get('eq' + i);
        if (userAns === examAnswers['eq' + i]) {
          score++;
        }
      }

      const resultBox = document.getElementById('examResultBox');
      const titleEl = document.getElementById('examResultTitle');
      const badgeEl = document.getElementById('examScoreBadge');
      const feedbackEl = document.getElementById('examFeedbackText');

      if (!resultBox || !titleEl || !badgeEl || !feedbackEl) return;

      resultBox.classList.remove('hidden');

      if (score === 10) {
        resultBox.className = 'p-5 rounded-2xl border bg-yellow-50 dark:bg-yellow-950/40 border-yellow-500/50 text-yellow-950 dark:text-yellow-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-yellow-500 text-2xl"></i> Xuất Sắc! Đoạt GIẢI NHẤT Học Sinh Giỏi Quốc Gia Môn Hóa Học!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Tuyệt đỉnh! Bạn đã giải chính xác trọn vẹn cả 10 câu hỏi tích hợp từ Thuyết MO, Nhiệt động Gibbs, Arrhenius, Cân bằng Van t Hoff, Đệm axit-bazơ, Phức chất CFT, Điện hóa Nernst, Tinh thể FCC đến Hóa hữu cơ lập thể R/S và cơ chế SN2. Bạn đã sẵn sàng dẫn đầu đội tuyển IChO!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/50 text-emerald-950 dark:text-emerald-200';
        titleEl.innerHTML = '<i class="fa-solid fa-award text-emerald-500 text-2xl"></i> Chúc Mừng! Đạt GIẢI NHÌ Học Sinh Giỏi Môn Hóa Học!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Phong độ rất ấn tượng! Khả năng tính toán và tư duy bản chất hóa học lý thuyết của bạn rất vững vàng. Hãy xem lại các câu chưa đúng để hoàn thiện điểm số tuyệt đối.';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-teal-50 dark:bg-teal-950/40 border-teal-500/50 text-teal-950 dark:text-teal-200';
        titleEl.innerHTML = '<i class="fa-solid fa-award text-teal-500 text-2xl"></i> Đạt GIẢI BA Học Sinh Giỏi Môn Hóa Học!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-teal-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kết quả khá tốt! Bạn đã nắm được phần lớn kiến thức chuyên đề nâng cao. Nên ôn luyện thêm về tính toán nhiệt động lực học và các bài toán phân bố electron phức chất.';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-amber-500 text-2xl"></i> Đạt GIẢI KHUYẾN KHÍCH / Cần Rèn Luyện Thêm!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Đề thi HSG Hóa Học THPT đòi hỏi khả năng biến đổi đại số nhiệt động và phân tích cơ chế hữu cơ sâu. Hãy click "Xem Lời Giải Chi Tiết Từng Câu" bên dưới để nắm vững phương pháp giải chuẩn!';
      }

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      renderAllMath(resultBox);
    }
`;

const domReadyMarker = '// ScrollSpy cho Sidebar navigation & Render Math';
if (!content.includes('submitCourseExam')) {
  content = content.replace(domReadyMarker, scriptAddition + '\n    ' + domReadyMarker);
}

fs.writeFileSync(targetFilePath, content, 'utf8');
console.log('Successfully added mock exam to courses/hsg_hoa_thpt.html!');
