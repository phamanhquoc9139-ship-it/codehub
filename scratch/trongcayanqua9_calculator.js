// trongcayanqua9_calculator.js - Widget tính toán hiệu quả kinh tế dự án trồng cây ăn quả (Bài 8)

const orchardCalculatorWidget = `
  <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/70 dark:from-slate-900 dark:to-emerald-950/30 border border-emerald-300 dark:border-emerald-800 shadow-sm" id="orchard-project-calculator">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-200 dark:border-emerald-800">
      <div>
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 mr-2">
          <i class="fa-solid fa-calculator"></i> Công cụ Thực hành Dự án
        </span>
        <strong class="text-sm sm:text-base text-gray-900 dark:text-white font-bold">BẢNG TÍNH TOÁN HIỆU QUẢ KINH TẾ DỰ ÁN TRỒNG CÂY ĂN QUẢ (BÀI 8)</strong>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
          Áp dụng công thức SGK: Cây hằng năm ($C_1 = B_1 - A_1$) hoặc Cây lâu năm 3 năm đầu kinh doanh ($D = C_2 - (A_2 + B_2)$).
        </p>
      </div>

      <!-- Mode Selector -->
      <div class="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-emerald-300 dark:border-emerald-700 text-xs font-semibold">
        <button type="button" id="calc-mode-perennial" onclick="setOrchardMode('perennial')" class="px-2.5 py-1 rounded-lg bg-emerald-600 text-white transition">
          Cây lâu năm (Cam, Bưởi, Nhãn, Xoài...)
        </button>
        <button type="button" id="calc-mode-annual" onclick="setOrchardMode('annual')" class="px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition">
          Cây hằng năm (Chuối, Dứa...)
        </button>
      </div>
    </div>

    <!-- Inputs Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <!-- Cột trái: Chi phí đầu tư -->
      <div class="p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 space-y-3">
        <strong class="text-emerald-800 dark:text-emerald-300 block font-bold text-xs pb-1 border-b border-emerald-100 dark:border-slate-700 flex items-center gap-1.5">
          <i class="fa-solid fa-coins text-amber-500"></i> Các khoản Chi Phí Đầu Tư (VNĐ)
        </strong>

        <!-- Row 1: Chi phí KTCB hoặc Chi phí vụ -->
        <div>
          <label class="block text-gray-700 dark:text-gray-300 font-medium mb-1" id="lbl-cost-stage1">
            Chi phí thời kì Kiến thiết cơ bản ($A_2$ - Cây giống, đào hố, bón lót, cọc chống):
          </label>
          <div class="relative">
            <input type="number" id="orchard-cost-a" value="25000000" step="500000" oninput="calculateOrchardEconomics()" class="w-full px-2.5 py-1.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-semibold" />
            <span class="absolute right-2.5 top-1.5 text-gray-400 font-medium text-[11px]">VNĐ</span>
          </div>
        </div>

        <!-- Row 2: Chi phí kinh doanh (chỉ có ở cây lâu năm) -->
        <div id="group-cost-b">
          <label class="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Chi phí 3 năm đầu kinh doanh ($B_2$ - Phân bón thúc, thuốc BVTV, tưới tiêu, công thu hái):
          </label>
          <div class="relative">
            <input type="number" id="orchard-cost-b" value="30000000" step="500000" oninput="calculateOrchardEconomics()" class="w-full px-2.5 py-1.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-semibold" />
            <span class="absolute right-2.5 top-1.5 text-gray-400 font-medium text-[11px]">VNĐ</span>
          </div>
        </div>

        <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold flex justify-between items-center text-xs">
          <span>Tổng chi phí đầu tư:</span>
          <span id="orchard-total-cost" class="text-sm font-black">55,000,000 VNĐ</span>
        </div>
      </div>

      <!-- Cột phải: Sản lượng và Nguồn thu -->
      <div class="p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 space-y-3">
        <strong class="text-emerald-800 dark:text-emerald-300 block font-bold text-xs pb-1 border-b border-emerald-100 dark:border-slate-700 flex items-center gap-1.5">
          <i class="fa-solid fa-basket-shopping text-emerald-500"></i> Ước Tính Sản Lượng &amp; Nguồn Thu (VNĐ)
        </strong>

        <!-- Quy mô vườn -->
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-gray-600 dark:text-gray-400 mb-1">Số lượng cây / khóm:</label>
            <input type="number" id="orchard-trees" value="100" min="1" step="5" oninput="calculateOrchardEconomics()" class="w-full px-2.5 py-1.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-semibold text-center" />
          </div>
          <div>
            <label class="block text-gray-600 dark:text-gray-400 mb-1">Năng suất bình quân:</label>
            <div class="relative">
              <input type="number" id="orchard-yield-tree" value="35" min="1" step="1" oninput="calculateOrchardEconomics()" class="w-full px-2.5 py-1.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-semibold text-center" />
              <span class="absolute right-2 top-1.5 text-gray-400 text-[10px]" id="orchard-yield-unit">kg/cây/năm</span>
            </div>
          </div>
        </div>

        <!-- Đơn giá bán -->
        <div>
          <label class="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Giá bán bình quân tại vườn:
          </label>
          <div class="relative">
            <input type="number" id="orchard-price-kg" value="25000" step="500" oninput="calculateOrchardEconomics()" class="w-full px-2.5 py-1.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-semibold" />
            <span class="absolute right-2.5 top-1.5 text-gray-400 font-medium text-[11px]">VNĐ/kg</span>
          </div>
        </div>

        <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-bold flex justify-between items-center text-xs">
          <span id="lbl-total-revenue">Tổng nguồn thu (3 năm đầu KD):</span>
          <span id="orchard-total-revenue" class="text-sm font-black">262,500,000 VNĐ</span>
        </div>
      </div>
    </div>

    <!-- Kết quả Lãi thuần & Tỷ suất sinh lời -->
    <div class="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex flex-wrap items-center justify-between gap-3 shadow-sm">
      <div>
        <span class="text-xs uppercase font-bold text-emerald-200 block" id="lbl-profit-title">
          LÃI THUẦN DỰ ÁN 3 NĂM ĐẦU KINH DOANH (D = C₂ − (A₂ + B₂))
        </span>
        <div class="text-2xl font-black tracking-tight" id="orchard-net-profit">
          +207,500,000 VNĐ
        </div>
      </div>

      <div class="flex items-center gap-3 text-xs">
        <div class="p-2 rounded-lg bg-white/20 backdrop-blur text-center">
          <span class="block text-[10px] text-emerald-100 uppercase">Tỷ suất lãi / Chi phí</span>
          <strong class="text-sm font-black" id="orchard-roi">+377.3%</strong>
        </div>
        <div class="p-2 rounded-lg bg-white/20 backdrop-blur text-center">
          <span class="block text-[10px] text-emerald-100 uppercase">Đánh giá dự án</span>
          <strong class="text-sm font-black text-yellow-300" id="orchard-eval">Rất hiệu quả ⭐⭐⭐</strong>
        </div>
      </div>
    </div>
  </div>
`;

module.exports = { orchardCalculatorWidget };
