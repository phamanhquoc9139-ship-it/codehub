const fs = require('fs');

const targetFilePath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\olympic_hoa_thpt.html';
let content = fs.readFileSync(targetFilePath, 'utf8');

// 1. Add header button before themeToggle
const headerBtnMarker = '<button id="themeToggle"';
const headerBtnHtml = `<button onclick="openCourseQuizModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-sm transition">
          <i class="fa-solid fa-stopwatch"></i>
          <span class="hidden sm:inline">Phòng Thi Thử Olympic</span>
          <span class="sm:hidden">Thi Thử</span>
        </button>
        `;

if (!content.includes('Phòng Thi Thử Olympic')) {
  content = content.replace(headerBtnMarker, headerBtnHtml + headerBtnMarker);
}

// 2. Add quick button in Hero Progress tracker
const heroTrackerEndMarker = '</div>\n        </div>\n      </div>\n    </div>\n  </section>';
const heroQuickBtnHtml = `</div>
        </div>
        <div class="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
          <button onclick="openCourseQuizModal()" class="w-full sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-crown text-teal-900"></i> Vào Phòng Thi Thử Olympic Hóa (60:00)
          </button>
        </div>
      </div>
    </div>
  </section>`;

if (!content.includes('Vào Phòng Thi Thử Olympic Hóa (60:00)')) {
  content = content.replace(heroTrackerEndMarker, heroQuickBtnHtml);
}

// 3. Add sidebar exam card in Desktop Sticky Sidebar
const sidebarNavEndMarker = '</nav>\n        </div>\n      </div>\n    </aside>';
const sidebarExamCardHtml = `</nav>
        </div>

        <!-- Sidebar Olympic Exam Banner -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-teal-950 via-cyan-950 to-slate-950 text-white border border-teal-500/30 shadow-lg space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider">
            <i class="fa-solid fa-medal"></i> Phòng Thi Thử Trực Tuyến
          </div>
          <p class="text-xs text-teal-100 leading-relaxed">
            Đề thi thử Olympic Hóa Học THPT 10 câu tinh hoa chuẩn IChO &amp; Mendeleev, có đồng hồ bấm giờ 60 phút và xếp hạng Huy Chương.
          </p>
          <button onclick="openCourseQuizModal()" class="w-full py-2.5 px-3 rounded-xl bg-white text-teal-950 hover:bg-teal-50 text-xs font-black transition shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-play text-teal-600"></i> Bắt đầu thi thử (60:00)
          </button>
        </div>
      </div>
    </aside>`;

if (!content.includes('Đề thi thử Olympic Hóa Học THPT 10 câu tinh hoa chuẩn IChO')) {
  content = content.replace(sidebarNavEndMarker, sidebarExamCardHtml);
}

// 4. Add summary button in Course Summary Banner
const summaryBtnsMarker = '<a href="../index.html" class="px-6 py-3 rounded-xl bg-white text-teal-900 font-bold hover:bg-teal-50 transition shadow">';
const summaryBtnHtml = `<button onclick="openCourseQuizModal()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-slate-950 font-black shadow-lg transition flex items-center gap-2">
            <i class="fa-solid fa-crown text-teal-900"></i> Bắt Đầu Thi Thử Olympic Hóa (60:00)
          </button>
          `;

if (!content.includes('Bắt Đầu Thi Thử Olympic Hóa (60:00)')) {
  content = content.replace(summaryBtnsMarker, summaryBtnHtml + summaryBtnsMarker);
}

// 5. Add Course Exam Modal HTML before Footer
const modalHtml = `
  <!-- ======================================================== -->
  <!-- MODAL: PHÒNG THI THỬ OLYMPIC HÓA HỌC THPT (60:00) -->
  <!-- ======================================================== -->
  <div id="courseQuizModal" class="fixed inset-0 z-50 hidden overflow-y-auto bg-slate-950/80 backdrop-blur-sm transition-opacity p-3 sm:p-6 flex items-center justify-center">
    <div class="relative w-full max-w-4xl bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-teal-500/30 overflow-hidden my-auto max-h-[92vh] flex flex-col">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-6 bg-gradient-to-r from-teal-800 via-cyan-900 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-teal-500/20 shrink-0">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-teal-400/20 border border-teal-400/30 text-teal-300 text-[11px] font-bold uppercase tracking-wider">
              Chuẩn Quốc Tế IChO • Mendeleev
            </span>
            <span class="text-xs text-teal-200 hidden sm:inline">• 10 Câu Hỏi Đỉnh Cao Học Thuật</span>
          </div>
          <h3 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <i class="fa-solid fa-award text-yellow-400"></i> Đề Thi Thử Olympic Hóa Học Cấp 3 (THPT &amp; Chuyên)
          </h3>
        </div>

        <!-- Live Countdown Timer & Close Button -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-teal-400/30 text-teal-300 font-mono font-black text-sm sm:text-base shadow-inner">
            <i class="fa-solid fa-stopwatch animate-pulse text-teal-400"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeCourseQuizModal()" class="p-2 rounded-xl text-teal-200 hover:text-white hover:bg-white/10 transition" aria-label="Đóng phòng thi">
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
            <button onclick="toggleSolutionsReview()" class="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5">
              <i class="fa-solid fa-book-open"></i> Xem Lời Giải Chi Tiết Từng Câu
            </button>
            <button onclick="restartExam()" class="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-rotate-right"></i> Làm Lại Đề Thi
            </button>
          </div>
        </div>

        <!-- Exam Form with 10 Rigorous Olympic Chemistry Questions -->
        <form id="courseExamForm" onsubmit="submitCourseExam(event)" class="space-y-6">

          <!-- Câu 1: Cơ học lượng tử & Hộp thế 1D -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 01 / 10 • LƯỢNG TỬ &amp; HỘP THẾ 1D</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Áp dụng mô hình hạt trong hộp thế thế năng 1 chiều (1D Particle in a box) chiều dài $L$ cho hệ thống $N$ electron $\pi$ ($N$ chẵn) chuyển động tự do trong mạch polyene liên hợp. Biểu thức bước sóng hấp thụ $\lambda_{\max}$ kích thích electron từ mức HOMO lên LUMO là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> $\lambda_{\max} = \frac{8mc L^2}{(N+1)h}$ (với $m$ là khối lượng electron, $c$ là tốc độ ánh sáng, $h$ là hằng số Planck).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> $\lambda_{\max} = \frac{8mc L^2}{N^2 h}$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> $\lambda_{\max} = \frac{4mc L^2}{(2N+1)h}$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq1" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> $\lambda_{\max} = \frac{h^2}{8mL^2 (N+1)}$</span>
              </label>
            </div>
          </div>

          <!-- Câu 2: Nhiệt động học thống kê & Phân bố Boltzmann -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 02 / 10 • NHIỆT ĐỘNG THỐNG KÊ &amp; PHÂN BỐ BOLTZMANN</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Theo định luật phân bố Boltzmann, ở trạng thái cân bằng nhiệt động tại nhiệt độ $T$, tỷ số số phân tử $N_j / N_i$ giữa hai mức năng lượng $\epsilon_j$ và $\epsilon_i$ có độ thoái hóa (bội suy biến) lần lượt là $g_j$ và $g_i$ được biểu diễn bởi công thức nào?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> $\frac{N_j}{N_i} = \frac{g_j}{g_i} \exp\left(-\frac{\epsilon_j - \epsilon_i}{k_B T}\right)$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> $\frac{N_j}{N_i} = \frac{g_i}{g_j} \exp\left(-\frac{\epsilon_j - \epsilon_i}{k_B T}\right)$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> $\frac{N_j}{N_i} = \frac{g_j}{g_i} \exp\left(+\frac{\epsilon_j - \epsilon_i}{k_B T}\right)$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq2" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> $\frac{N_j}{N_i} = \frac{g_j}{g_i} \cdot \frac{k_B T}{\epsilon_j - \epsilon_i}$</span>
              </label>
            </div>
          </div>

          <!-- Câu 3: Phương trình Eyring & Trạng thái chuyển tiếp TST -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 03 / 10 • PHƯƠNG TRÌNH EYRING &amp; TRẠNG THÁI CHUYỂN TIẾP (TST)</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Theo thuyết trạng thái chuyển tiếp (Eyring-Polanyi), hằng số tốc độ phản ứng tuân theo phương trình: $k = \frac{k_B T}{h} e^{\Delta S^\ddagger / R} e^{-\Delta H^\ddagger / RT}$. Nếu một phản ứng hóa học có entropi hoạt hóa âm rất lớn ($\Delta S^\ddagger \ll 0$), điều này phản ánh bản chất gì của trạng thái chuyển tiếp?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> Trạng thái chuyển tiếp có cấu trúc liên kết chặt chẽ, trật tự cao hơn chất phản ứng (phản ứng liên hợp lưỡng phân tử hoặc tạo vòng tuần hoàn khép kín).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> Phản ứng diễn ra theo cơ chế phân ly đơn phân tử giải phóng nhiều mảnh phân tử tự do làm tăng độ hỗn loạn.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> Năng lượng hoạt hóa của phản ứng bằng 0 ở mọi nhiệt độ.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq3" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Tốc độ phản ứng không phụ thuộc vào nhiệt độ môi trường.</span>
              </label>
            </div>
          </div>

          <!-- Câu 4: Hấp phụ Langmuir & Hóa keo -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 04 / 10 • ĐƯỜNG ĐẲNG NHIỆT LANGMUIR &amp; XÚC TÁC DỊ THỂ</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Phương trình đẳng nhiệt hấp phụ Langmuir mô tả độ che phủ bề mặt $\theta = \frac{K \cdot P}{1 + K \cdot P}$. Khi áp suất chất khí $P$ rất lớn ($K \cdot P \gg 1$), bậc động học biểu kiến của phản ứng phân hủy xúc tác dị thể trên bề mặt kim loại chuyển thành:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> Bậc 0 (độ che phủ $\theta \to 1$, bề mặt xúc tác bị bão hòa hoàn toàn, tốc độ phản ứng không phụ thuộc vào áp suất).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> Bậc 1 (tốc độ tỷ lệ thuận bậc nhất với áp suất).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> Bậc 2 (do va chạm lưỡng phân tử trên bề mặt pha rắn).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq4" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Bậc âm -1 (do chất khí ức chế hoàn toàn các tâm hoạt tính).</span>
              </label>
            </div>
          </div>

          <!-- Câu 5: Thuyết trường tinh thể & Hiệu ứng Jahn-Teller -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 05 / 10 • TRƯỜNG TINH THỂ &amp; HIỆU ỨNG JAHN-TELLER</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Ion phức bát diện thủy hóa $[\text{Cu}(\text{H}_2\text{O})_6]^{2+}$ (ion trung tâm $\text{Cu}^{2+}$ cấu hình $d^9$) không có dạng bát diện đều mà bị biến dạng hình học (Jahn-Teller distortion). Kiểu biến dạng phổ biến nhất là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> Biến dạng tứ giác kéo dài dọc trục $z$ (Tetragonal elongation): hai liên kết $\text{Cu}-\text{O}$ ở vị trí trục dài hơn đáng kể so với bốn liên kết $\text{Cu}-\text{O}$ ở mặt phẳng xích đạo.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> Biến dạng nén ép dọc trục $z$ (Tetragonal compression): hai liên kết trục ngắn hơn bốn liên kết xích đạo.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> Chuyển thành dạng hình học tứ diện đều để triệt tiêu hoàn toàn độ thoái hóa obitan $d$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq5" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Hoàn toàn không biến dạng vì phân lớp $d^9$ có tính đối xứng cầu hoàn hảo.</span>
              </label>
            </div>
          </div>

          <!-- Câu 6: Giản đồ Latimer, Frost & Pourbaix -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 06 / 10 • GIẢN ĐỒ LATIMER &amp; PHẢN ỨNG DỊ PHÂN</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Trên giản đồ Latimer trong môi trường axit: $\\text{A} \\xrightarrow{E^\\circ_L} \\text{B} \\xrightarrow{E^\\circ_R} \\text{C}$. Điều kiện nhiệt động học để dạng trung gian $\\text{B}$ tự phát phân rã qua phản ứng dị phân (Dismutation / Disproportionation) thành $\\text{A}$ và $\\text{C}$ là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> $E^\circ_R > E^\circ_L$ (thế điện cực bên phải lớn hơn thế điện cực bên trái, làm cho $\Delta G^\circ_{\text{dị phân}} < 0$).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> $E^\circ_R < E^\circ_L$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> $E^\circ_R + E^\circ_L = 0$</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq6" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Phản ứng dị phân không bao giờ tự xảy ra trừ khi có chiếu sáng quang hóa.</span>
              </label>
            </div>
          </div>

          <!-- Câu 7: Hiệu ứng đồng vị KIE & Phóng xạ -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 07 / 10 • HIỆU ỨNG ĐỒNG VỊ ĐỘNG HỌC (KIE)</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Khi nghiên cứu cơ chế phản ứng hữu cơ, hiệu ứng đồng vị động học sơ cấp $k_H / k_D$ thường đạt giá trị xấp xỉ từ 6 đến 8 ở nhiệt độ phòng ($298\text{ K}$). Nguyên nhân cốt lõi từ cơ học lượng tử là:
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> Năng lượng dao động điểm không (Zero-Point Energy - ZPE) của liên kết $\text{C}-\text{H}$ cao hơn liên kết $\text{C}-\text{D}$ do khối lượng rút gọn nhỏ hơn, khiến năng lượng hoạt hóa bẻ gãy $\text{C}-\text{H}$ thấp hơn.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> Nguyên tử deuterium có bán kính hạt nhân gấp đôi proton nên cản trở không gian.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> Liên kết $\text{C}-\text{H}$ có độ âm điện lớn hơn nhiều so với liên kết $\text{C}-\text{D}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq7" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Hiệu ứng đường hầm lượng tử chỉ xảy ra với deuterium mà không xảy ra với hydro.</span>
              </label>
            </div>
          </div>

          <!-- Câu 8: Phản ứng Pericyclic & Woodward-Hoffmann -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 08 / 10 • PHẢN ỨNG PERICYCLIC &amp; QUY TẮC WOODWARD-HOFFMANN</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Theo quy tắc bảo toàn tính đối xứng obitan Woodward-Hoffmann, phản ứng đóng vòng/mở vòng điện hóa (Electrocyclic reaction) của hệ thống liên hợp $4n$ electron $\pi$ (như buta-1,3-dien $\rightleftharpoons$ cyclobuten) dưới điều kiện nhiệt động ($\Delta$) sẽ diễn ra theo kiểu lập thể nào?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> Quay cùng chiều (Conrotatory) để đảm bảo obitan xen phủ cùng pha mang tính liên kết.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> Quay ngược chiều (Disrotatory).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> Diễn ra ngẫu nhiên tạo hỗn hợp raxemic 50:50.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq8" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Phản ứng bị cấm hoàn toàn về mặt nhiệt động, chỉ có thể xảy ra khi có chiếu sáng quang hóa.</span>
              </label>
            </div>
          </div>

          <!-- Câu 9: Tổng hợp lùi & Khớp nối C-C có xúc tác Pd -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 09 / 10 • TỔNG HỢP HỮU CƠ &amp; KHỚP NỐI SUZUKI-MIYAURA</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Chu trình xúc tác $\text{Pd}(0)$ trong phản ứng khớp nối chéo Suzuki-Miyaura giữa aryl halogenua $\text{Ar}-\text{X}$ và axit arylboronic $\text{Ar}'-\text{B(OH)}_2$ tuân theo trình tự ba giai đoạn cơ bản nào?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> Cộng oxy hóa (Oxidative addition) &rarr; Chuyển vị phối tử (Transmetalation) &rarr; Khử loại (Reductive elimination).</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> Chuyển vị phối tử &rarr; Cộng oxy hóa &rarr; Khử loại.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> Khử loại &rarr; Di chuyển hydrua beta &rarr; Cộng oxy hóa.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq9" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Tách phối tử &rarr; Phối trí pi &rarr; Thủy phân liên kết C-B.</span>
              </label>
            </div>
          </div>

          <!-- Câu 10: Động học enzym & Chất ức chế -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border space-y-3">
            <div class="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>CÂU HỎI 10 / 10 • ĐỘNG HỌC ENZYM &amp; CHẤT ỨC CHẾ CẠNH TRANH</span>
              <span class="text-gray-400">1.0 Điểm</span>
            </div>
            <p class="font-bold text-gray-900 dark:text-white leading-relaxed">
              Theo phương trình động học Michaelis-Menten: $v_0 = \frac{V_{\max}[S]}{K_m + [S]}$, sự hiện diện của một chất ức chế cạnh tranh (Competitive inhibitor) liên kết thuận nghịch với tâm hoạt động của enzym sẽ làm biến đổi các thông số động học như thế nào?
            </p>
            <div class="space-y-2 text-xs sm:text-sm">
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="A" required class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>A.</strong> Làm tăng giá trị biểu kiến $K_m^{\text{app}}$ (giảm ái lực của enzym với cơ chất), nhưng giữ nguyên tốc độ cực đại $V_{\max}$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="B" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>B.</strong> Làm giảm tốc độ cực đại $V_{\max}$, trong khi giữ nguyên hằng số $K_m$.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="C" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>C.</strong> Làm giảm đồng thời cả $V_{\max}$ và $K_m$ theo cùng một tỷ lệ.</span>
              </label>
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 cursor-pointer transition">
                <input type="radio" name="eq10" value="D" class="mt-0.5 text-teal-600 focus:ring-teal-500">
                <span><strong>D.</strong> Làm enzym mất hoạt tính vĩnh viễn không thể phục hồi kể cả khi tăng nồng độ cơ chất $[S]$.</span>
              </label>
            </div>
          </div>

          <!-- Submit Button Container -->
          <div class="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              <i class="fa-solid fa-circle-info mr-1"></i> Kiểm tra kỹ các câu trước khi nộp bài. Hệ thống sẽ tự động xếp hạng Huy Chương Olympic.
            </span>
            <button type="submit" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-black text-sm shadow-xl shadow-teal-500/25 transition flex items-center gap-2">
              <i class="fa-solid fa-paper-plane"></i> Nộp Bài &amp; Xếp Hạng Huy Chương
            </button>
          </div>

        </form>

        <!-- Detailed Review Solutions Container -->
        <div id="examSolutionsReview" class="hidden mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <h4 class="text-base font-black text-teal-600 dark:text-teal-400 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Lời Giải Chi Tiết 10 Bài Toán Đề Thi Thử Olympic Hóa Học
          </h4>
          
          <div class="space-y-3 text-xs sm:text-sm">
            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 1: Đáp án A.</strong><br>
              Với $N$ electron, mức HOMO tương ứng mức lượng tử $n_1 = N/2$, mức LUMO là $n_2 = N/2 + 1$. Biến thiên năng lượng: $\Delta E = E_{n_2} - E_{n_1} = \frac{h^2}{8mL^2} \left[(N/2 + 1)^2 - (N/2)^2\right] = \frac{h^2 (N+1)}{8mL^2}$. Vì $\Delta E = \frac{hc}{\lambda} \implies \lambda_{\max} = \frac{8mc L^2}{(N+1)h}$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 2: Đáp án A.</strong><br>
              Theo định luật phân bố kinh điển Boltzmann trong nhiệt động thống kê: xác suất chiếm cứ trạng thái $i$ tỷ lệ với trọng số thống kê thoái hóa $g_i$ và thừa số Boltzmann $\exp(-\epsilon_i / k_B T)$. Do đó $\frac{N_j}{N_i} = \frac{g_j}{g_i} \exp\left(-\frac{\epsilon_j - \epsilon_i}{k_B T}\right)$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 3: Đáp án A.</strong><br>
              Theo phương trình Eyring, entropi hoạt hóa $\Delta S^\ddagger = S^\ddagger - \sum S_{\text{chất đầu}}$. Giá trị $\Delta S^\ddagger \ll 0$ chứng tỏ phức chất hoạt động (trạng thái chuyển tiếp) đã mất nhiều bậc tự do tịnh tiến và quay, cấu trúc bị thắt chặt và định hướng cao (đặc trưng cho phản ứng cộng hợp lưỡng phân tử hoặc phản ứng đóng vòng Pericyclic).
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 4: Đáp án A.</strong><br>
              Khi áp suất $P \gg 1/K$, mẫu số $1 + KP \approx KP \implies \theta = \frac{KP}{KP} = 1$. Mọi tâm hoạt tính trên bề mặt chất xúc tác đều bị chất khí che phủ bão hòa, tốc độ phản ứng $v = k \theta = k \cdot 1 = k$ (hằng số), tức là phản ứng chuyển thành bậc 0 đối với áp suất chất phản ứng.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 5: Đáp án A.</strong><br>
              Định lý Jahn-Teller: mọi hệ thống phi tuyến có trạng thái suy biến electron đều sẽ tự biến dạng hình học để hạ thấp tính đối xứng và triệt tiêu độ suy biến. Ion $\text{Cu}^{2+} (d^9)$ có cấu hình $t_{2g}^6 e_g^3$. Sự bất đối xứng trong obitan $e_g$ ($d_{z^2}^2 d_{x^2-y^2}^1$) làm cho mật độ electron trên trục $z$ lớn hơn trục $x, y$, đẩy 2 phối tử trục ra xa hơn, sinh ra biến dạng kéo dài tứ giác dọc trục $z$ (Tetragonal elongation).
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 6: Đáp án A.</strong><br>
              Phản ứng dị phân: $2\text{B} \to \text{A} + \text{C}$. Ta có $\Delta G^\circ = -nF(E^\circ_{\text{catot}} - E^\circ_{\text{anot}}) = -nF(E^\circ_R - E^\circ_L)$. Phản ứng tự diễn biến khi $\Delta G^\circ < 0 \iff E^\circ_R > E^\circ_L$. Tức là trên giản đồ Latimer, thế của nấc bên phải phải cao hơn nấc bên trái kề nó.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 7: Đáp án A.</strong><br>
              Theo cơ học lượng tử, năng lượng dao động điểm không $E_0 = \frac{1}{2} h\nu = \frac{h}{4\pi}\sqrt{\frac{k}{\mu}}$. Do deuterium có khối lượng lớn gấp đôi ($m_D \approx 2m_H$), khối lượng rút gọn $\mu_{CD} > \mu_{CH} \implies E_{0,CH} > E_{0,CD}$. Trạng thái chuyển tiếp có liên kết bị nới lỏng gần như đứt gãy nên mức năng lượng gần bằng nhau. Do đó rào cản năng lượng hoạt hóa $E_{a,CH} < E_{a,CD}$, dẫn đến $k_H / k_D \approx \exp(\Delta E_0 / RT) \approx 6.5 - 7.0$ ở $298\text{ K}$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 8: Đáp án A.</strong><br>
              Với hệ $4n$ electron $\pi$ dưới tác dụng nhiệt ($\Delta$), trạng thái kích hoạt electron tuân theo obitan HOMO của butadien ($\psi_2$). Obitan $\psi_2$ có tính phản đối xứng (dấu hai thùy ở hai đầu ngược chiều nhau). Để hai thùy cùng pha quay vào nhau tạo liên kết $\sigma$ mới, hai thùy biên bắt buộc phải quay cùng chiều (Conrotatory).
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 9: Đáp án A.</strong><br>
              Chu trình xúc tác Suzuki-Miyaura gồm 3 bước căn bản: (1) Cộng oxy hóa (Oxidative addition) của $\text{Ar}-\text{X}$ vào $\text{Pd}(0)L_2$ tạo phức $\text{Pd}(II)$; (2) Chuyển vị phối tử (Transmetalation) giữa phức $\text{Pd}(II)$ với phức borat hoạt hóa tạo phức $\text{Pd}(II)\text{ArAr}'$; (3) Khử loại (Reductive elimination) tạo liên kết $\text{Ar}-\text{Ar}'$ và tái sinh xúc tác $\text{Pd}(0)L_2$.
            </div>

            <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400">Câu 10: Đáp án A.</strong><br>
              Chất ức chế cạnh tranh có cấu trúc tương đồng với cơ chất và cạnh tranh trực tiếp vị trí tại tâm hoạt tính của enzym tự do. Khi tăng nồng độ cơ chất $[S]$ lên đủ lớn, cơ chất có thể đẩy hoàn toàn chất ức chế ra khỏi tâm hoạt tính $\implies V_{\max}$ không đổi. Tuy nhiên, cần nồng độ cơ chất cao hơn để đạt được một nửa $V_{\max}$, tức là hằng số biểu kiến $K_m^{\text{app}} = K_m(1 + [I]/K_i) > K_m$.
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-gray-100 dark:bg-dark-surface/80 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500">
        <span>Kỳ Thi Huấn Luyện Đội Tuyển Olympic Quốc Tế (IChO) &amp; Mendeleev</span>
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
    // LOGIC PHÒNG THI THỬ OLYMPIC HÓA HỌC THPT (60:00 & SCORING)
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
          alert('⏰ Đã hết 60 phút làm bài thi thử Olympic Hóa Học! Hệ thống sẽ tự động thu bài và xếp hạng Huy Chương.');
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
      if (confirm('Bạn có chắc muốn làm lại toàn bộ đề thi thử Olympic Hóa Học từ đầu?')) {
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
        titleEl.innerHTML = '<i class="fa-solid fa-trophy text-yellow-500 text-2xl"></i> Xuất Sắc! HUY CHƯƠNG VÀNG OLYMPIC HÓA HỌC QUỐC TẾ (IChO GOLD MEDAL)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-yellow-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Trình độ hóa học đỉnh cao! Bạn đã xuất sắc giải quyết trọn vẹn cả 10 bài toán học thuật từ Hộp thế lượng tử 1D, Thống kê Boltzmann, Phương trình Eyring, Hấp phụ Langmuir, Hiệu ứng Jahn-Teller, Giản đồ Latimer, Hiệu ứng đồng vị KIE, Woodward-Hoffmann đến Khớp nối Suzuki và Động học Enzym. Bạn là ứng cử viên hàng đầu cho Đội tuyển Olympic Quốc tế!';
      } else if (score >= 8) {
        resultBox.className = 'p-5 rounded-2xl border bg-teal-50 dark:bg-teal-950/40 border-teal-500/50 text-teal-950 dark:text-teal-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-teal-500 text-2xl"></i> Chúc Mừng! HUY CHƯƠNG BẠC OLYMPIC HÓA HỌC (SILVER MEDAL)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-teal-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Tư duy hóa học lượng tử và tổng hợp hữu cơ rất xuất sắc! Chỉ cần trau chuốt thêm các biến đổi nhiệt động thống kê là bạn sẽ đạt điểm số tuyệt đối.';
      } else if (score >= 6) {
        resultBox.className = 'p-5 rounded-2xl border bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500/50 text-cyan-950 dark:text-cyan-200';
        titleEl.innerHTML = '<i class="fa-solid fa-medal text-cyan-600 text-2xl"></i> HUY CHƯƠNG ĐỒNG OLYMPIC HÓA HỌC (BRONZE MEDAL)!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-cyan-600 text-white font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Kết quả rất khả quan! Đề thi Olympic IChO có độ khó cao vượt trội so với chương trình phổ thông. Hãy xem lại phần Lời giải chi tiết để rèn luyện phương pháp lập luận.';
      } else {
        resultBox.className = 'p-5 rounded-2xl border bg-amber-50 dark:bg-amber-950/40 border-amber-500/50 text-amber-950 dark:text-amber-200';
        titleEl.innerHTML = '<i class="fa-solid fa-certificate text-amber-500 text-2xl"></i> BẰNG KHEN OLYMPIC (HONORABLE MENTION) / Cần Rèn Luyện Thêm!';
        badgeEl.className = 'px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow';
        badgeEl.innerText = score + ' / 10 Điểm';
        feedbackEl.innerText = 'Các chuyên đề Olympic đòi hỏi sự kết hợp sâu giữa Toán học, Vật lý lượng tử và Bản đồ cơ chế hữu cơ. Hãy click nút "Xem Lời Giải Chi Tiết Từng Câu" để phân tích kỹ từng bài toán!';
      }

      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      renderAllMath(resultBox);
    }
`;

const windowLoadMarker = 'window.addEventListener(\'DOMContentLoaded\', () => {';
if (!content.includes('submitCourseExam')) {
  content = content.replace(windowLoadMarker, scriptAddition + '\n    ' + windowLoadMarker);
}

fs.writeFileSync(targetFilePath, content, 'utf8');
console.log('Successfully added mock exam to courses/olympic_hoa_thpt.html!');
