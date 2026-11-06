// khtn9_widgets.js - 3 Widget tương tác thực nghiệm môn Khoa học tự nhiên 9
module.exports = {
  // Widget 1: Mô phỏng Thấu kính hội tụ & Dựng ảnh (Quang học)
  lensCalculatorWidget: `
    <div id="lens-calc-widget" class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-900/90 dark:to-indigo-950/40 border border-purple-200 dark:border-purple-900/60 shadow-sm">
      <div class="flex items-center justify-between mb-3 pb-2 border-b border-purple-200/60 dark:border-purple-800/60">
        <h4 class="text-sm font-extrabold text-purple-900 dark:text-purple-300 flex items-center gap-2">
          <i class="fa-solid fa-wand-magic-sparkles text-purple-600"></i>
          MÔ PHỎNG & TÍNH TOÁN ẢNH QUA THẤU KÍNH HỘI TỤ
        </h4>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">Công cụ tương tác</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 mb-4">
        Nhập tiêu cự <strong>f</strong> và khoảng cách từ vật đến thấu kính <strong>d</strong> để tính vị trí ảnh <strong>d'</strong>, độ phóng đại <strong>k</strong> và xác định tính chất ảnh.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Tiêu cự thấu kính f (cm):</label>
          <input type="number" id="lens_f" value="10" min="1" max="100" class="w-full px-3 py-1.5 text-xs rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Khoảng cách vật d (cm):</label>
          <input type="number" id="lens_d" value="15" min="1" max="200" class="w-full px-3 py-1.5 text-xs rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
        </div>
      </div>
      <div class="flex gap-2 mb-4">
        <button type="button" onclick="calculateLensImage()" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid fa-calculator"></i> Tính toán tính chất ảnh
        </button>
        <button type="button" onclick="setLensPreset(10, 25)" class="px-3 py-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 hover:bg-purple-200 text-xs font-bold transition">
          d &gt; 2f
        </button>
        <button type="button" onclick="setLensPreset(10, 15)" class="px-3 py-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 hover:bg-purple-200 text-xs font-bold transition">
          f &lt; d &lt; 2f
        </button>
        <button type="button" onclick="setLensPreset(10, 6)" class="px-3 py-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 hover:bg-purple-200 text-xs font-bold transition">
          d &lt; f (ảnh ảo)
        </button>
      </div>
      <div id="lens_result" class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-xs space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="text-slate-500 dark:text-slate-400">Khoảng cách ảnh d':</span>
          <span id="res_d_prime" class="font-bold text-purple-700 dark:text-purple-300 text-sm">30.0 cm</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-slate-500 dark:text-slate-400">Tính chất ảnh:</span>
          <span id="res_nature" class="font-extrabold text-emerald-600 dark:text-emerald-400 text-xs">Ảnh thật, ngược chiều với vật</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-slate-500 dark:text-slate-400">Độ phóng đại ảnh k:</span>
          <span id="res_mag" class="font-bold text-slate-800 dark:text-slate-200 text-xs">|k| = 2.0 (Ảnh lớn gấp 2 lần vật)</span>
        </div>
      </div>
    </div>
  `,

  // Widget 2: Máy tính Định luật Ohm & Đoạn mạch nối tiếp / song song (Điện học)
  circuitOhmCalculatorWidget: `
    <div id="ohm-calc-widget" class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900/90 dark:to-teal-950/40 border border-blue-200 dark:border-teal-900/60 shadow-sm">
      <div class="flex items-center justify-between mb-3 pb-2 border-b border-blue-200/60 dark:border-teal-800/60">
        <h4 class="text-sm font-extrabold text-blue-900 dark:text-teal-300 flex items-center gap-2">
          <i class="fa-solid fa-microchip text-teal-600"></i>
          PHÂN TÍCH ĐOẠN MẠCH ĐIỆN & ĐỊNH LUẬT OHM
        </h4>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-teal-950 text-blue-700 dark:text-teal-300">Vật lí 9</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Hiệu điện thế U (V):</label>
          <input type="number" id="circuit_u" value="12" min="1" max="500" class="w-full px-3 py-1.5 text-xs rounded-xl border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none">
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Điện trở R1 (Ω):</label>
          <input type="number" id="circuit_r1" value="6" min="0.1" max="1000" class="w-full px-3 py-1.5 text-xs rounded-xl border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none">
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Điện trở R2 (Ω):</label>
          <input type="number" id="circuit_r2" value="12" min="0.1" max="1000" class="w-full px-3 py-1.5 text-xs rounded-xl border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none">
        </div>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label class="inline-flex items-center text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer">
          <input type="radio" name="circuit_type" value="parallel" checked onchange="calculateCircuit()" class="text-teal-600 focus:ring-teal-500 mr-1.5"> Mắc song song
        </label>
        <label class="inline-flex items-center text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer">
          <input type="radio" name="circuit_type" value="series" onchange="calculateCircuit()" class="text-teal-600 focus:ring-teal-500 mr-1.5"> Mắc nối tiếp
        </label>
        <button type="button" onclick="calculateCircuit()" class="ml-auto px-4 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition">
          <i class="fa-solid fa-arrows-rotate"></i> Tính dòng &amp; Công suất
        </button>
      </div>
      <div id="circuit_result" class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-800 border border-teal-200 dark:border-slate-700 text-xs">
        <div class="p-2 rounded-lg bg-teal-50/60 dark:bg-slate-900">
          <span class="block text-[10px] text-slate-400">Điện trở R_tđ:</span>
          <span id="res_rtd" class="font-black text-teal-700 dark:text-teal-300 text-sm">4.00 Ω</span>
        </div>
        <div class="p-2 rounded-lg bg-blue-50/60 dark:bg-slate-900">
          <span class="block text-[10px] text-slate-400">Dòng mạch chính I:</span>
          <span id="res_itotal" class="font-black text-blue-700 dark:text-blue-300 text-sm">3.00 A</span>
        </div>
        <div class="p-2 rounded-lg bg-amber-50/60 dark:bg-slate-900">
          <span class="block text-[10px] text-slate-400">Dòng qua R1 &amp; R2:</span>
          <span id="res_ibranches" class="font-bold text-amber-700 dark:text-amber-300 text-xs">I1=2.0A | I2=1.0A</span>
        </div>
        <div class="p-2 rounded-lg bg-emerald-50/60 dark:bg-slate-900">
          <span class="block text-[10px] text-slate-400">Công suất toàn mạch:</span>
          <span id="res_power" class="font-black text-emerald-700 dark:text-emerald-300 text-sm">36.0 W</span>
        </div>
      </div>
    </div>
  `,

  // Widget 3: Bảng Punnett phân li Mendel (Sinh học)
  punnettSquareWidget: `
    <div id="mendel-punnett-widget" class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-slate-900/90 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 shadow-sm">
      <div class="flex items-center justify-between mb-3 pb-2 border-b border-emerald-200/60 dark:border-emerald-800/60">
        <h4 class="text-sm font-extrabold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
          <i class="fa-solid fa-table-cells text-emerald-600"></i>
          MÔ PHỎNG KHUNG PUNNETT DI TRUYỀN HỌC MENDEL
        </h4>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">Sinh học 9</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">
        Chọn kiểu gene của bố và mẹ để lập bảng Punnett tổ hợp giao tử và dự đoán tỉ lệ kiểu gene, kiểu hình ở đời con.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Kiểu gene P (Bố):</label>
          <select id="parent_dad" onchange="generatePunnett()" class="w-full px-3 py-1.5 text-xs rounded-xl border border-emerald-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none">
            <option value="Aa" selected>Aa (Dị hợp 1 cặp - Hoa đỏ)</option>
            <option value="AA">AA (Đồng hợp trội - Hoa đỏ)</option>
            <option value="aa">aa (Đồng hợp lặn - Hoa trắng)</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Kiểu gene P (Mẹ):</label>
          <select id="parent_mom" onchange="generatePunnett()" class="w-full px-3 py-1.5 text-xs rounded-xl border border-emerald-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none">
            <option value="Aa" selected>Aa (Dị hợp 1 cặp - Hoa đỏ)</option>
            <option value="AA">AA (Đồng hợp trội - Hoa đỏ)</option>
            <option value="aa">aa (Đồng hợp lặn - Hoa trắng)</option>
          </select>
        </div>
      </div>
      <div id="punnett_table_box" class="overflow-x-auto mb-3">
        <!-- Render bảng Punnett động -->
      </div>
      <div id="punnett_summary" class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs">
        <!-- Tỉ lệ kiểu gene & kiểu hình -->
      </div>
    </div>
  `
};
