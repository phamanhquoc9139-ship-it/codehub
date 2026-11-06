// gdcd9_widgets.js - Widget tương tác thực hành Giáo dục công dân 9

const legalCaseAnalyzerWidget = `
  <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50/70 dark:from-slate-900 dark:to-red-950/30 border border-red-200 dark:border-red-800 shadow-sm" id="legal-case-analyzer">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-red-200 dark:border-red-800">
      <div>
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300 mr-2">
          <i class="fa-solid fa-gavel"></i> Công cụ Phân tích Thực tế
        </span>
        <strong class="text-sm sm:text-base text-gray-900 dark:text-white font-bold">BỘ CÔNG CỤ NHẬN DIỆN VI PHẠM &amp; TRÁCH NHIỆM PHÁP LÍ (BÀI 9)</strong>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
          Thực hành phân tích 4 tình huống thực tế: Xác định hành vi, lỗi, loại vi phạm và chế tài xử lí tương ứng của Nhà nước.
        </p>
      </div>
      <div class="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-red-200 dark:border-slate-700 text-red-700 dark:text-red-300">
        4 Dạng vi phạm: Hình sự • Hành chính • Dân sự • Kỉ luật
      </div>
    </div>

    <!-- Case selector -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs font-semibold">
      <button type="button" onclick="selectLegalCase(0)" id="btn-case-0" class="p-2 rounded-xl bg-red-600 text-white transition text-center shadow-sm">
        Tình huống 1: Vượt đèn đỏ
      </button>
      <button type="button" onclick="selectLegalCase(1)" id="btn-case-1" class="p-2 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-slate-700 transition text-center border border-gray-200 dark:border-slate-700">
        Tình huống 2: Trộm cắp xe
      </button>
      <button type="button" onclick="selectLegalCase(2)" id="btn-case-2" class="p-2 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-slate-700 transition text-center border border-gray-200 dark:border-slate-700">
        Tình huống 3: Quỵt tiền cọc
      </button>
      <button type="button" onclick="selectLegalCase(3)" id="btn-case-3" class="p-2 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-slate-700 transition text-center border border-gray-200 dark:border-slate-700">
        Tình huống 4: Bỏ ca trực
      </button>
    </div>

    <!-- Case Details & Interactive Form -->
    <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700 text-xs space-y-3">
      <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
        <strong class="text-gray-900 dark:text-white font-bold block mb-1" id="case-title">Tình huống 1: Anh B điều khiển xe máy vượt đèn đỏ tại ngã tư</strong>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed" id="case-desc">Anh B (25 tuổi) điều khiển xe máy chở hàng vội vã vượt đèn đỏ ở ngã tư, va quẹt nhẹ làm vỡ gương xe của một người đi đường khác, không gây thương tích cho ai.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div>
          <label class="block font-bold text-gray-800 dark:text-gray-200 mb-1">Theo em, hành vi này thuộc loại vi phạm pháp luật nào?</label>
          <select id="user-violation-type" class="w-full p-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-xs font-semibold">
            <option value="none">-- Chọn loại vi phạm --</option>
            <option value="hanh_chinh">Vi phạm hành chính</option>
            <option value="hinh_su">Vi phạm hình sự (Tội phạm)</option>
            <option value="dan_su">Vi phạm dân sự</option>
            <option value="ki_luat">Vi phạm kỉ luật</option>
          </select>
        </div>

        <div>
          <label class="block font-bold text-gray-800 dark:text-gray-200 mb-1">Trách nhiệm pháp lí tương ứng là gì?</label>
          <select id="user-liability-type" class="w-full p-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-xs font-semibold">
            <option value="none">-- Chọn trách nhiệm pháp lí --</option>
            <option value="hanh_chinh">Trách nhiệm hành chính (Phạt tiền, tước bằng lái...)</option>
            <option value="hinh_su">Trách nhiệm hình sự (Phạt tù, cải tạo...)</option>
            <option value="dan_su">Trách nhiệm dân sự (Bồi thường thiệt hại, xin lỗi...)</option>
            <option value="ki_luat">Trách nhiệm kỉ luật (Khiển trách, thôi việc...)</option>
          </select>
        </div>
      </div>

      <div class="flex items-center justify-between pt-2">
        <button type="button" onclick="checkLegalCaseAnswer()" class="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid fa-check"></i> Kiểm Tra Kết Quả Phân Tích
        </button>
        <div id="case-result-badge" class="hidden text-xs font-bold px-3 py-1 rounded-full"></div>
      </div>

      <div id="case-explanation" class="hidden p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 leading-relaxed text-gray-700 dark:text-gray-300">
        <!-- Explanation populated dynamically -->
      </div>
    </div>
  </div>
`;

module.exports = { legalCaseAnalyzerWidget };
