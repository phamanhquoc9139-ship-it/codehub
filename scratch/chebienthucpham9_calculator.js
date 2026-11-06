// chebienthucpham9_calculator.js - Widget tính toán chi phí bữa ăn gia đình theo thực đơn (Dự án Bài 5)

const mealCalculatorWidget = `
  <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/70 dark:from-slate-900 dark:to-amber-950/30 border border-amber-200 dark:border-amber-800 shadow-sm" id="meal-cost-calculator">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-amber-200 dark:border-amber-800">
      <div>
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 mr-2">
          <i class="fa-solid fa-calculator"></i> Công cụ Thực hành Dự án
        </span>
        <strong class="text-sm sm:text-base text-gray-900 dark:text-white font-bold">BẢNG TÍNH TOÁN CHI PHÍ BỮA ĂN THEO THỰC ĐƠN (BÀI 5)</strong>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
          Nhập số lượng thực phẩm cần mua, quy đổi g/kg và đơn giá thực tế để tính tổng chi phí bữa ăn và chi phí bình quân cho mỗi khẩu phần.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <label class="text-xs font-semibold text-gray-700 dark:text-gray-300">Khẩu phần:</label>
        <div class="flex items-center border border-amber-300 dark:border-amber-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
          <button type="button" onclick="adjustDiners(-1)" class="px-2.5 py-1 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-amber-900">-</button>
          <input type="number" id="calc-diners" value="4" min="1" max="20" onchange="calculateMealCost()" class="w-12 text-center text-xs font-bold bg-transparent outline-none py-1 text-amber-700 dark:text-amber-300" />
          <button type="button" onclick="adjustDiners(1)" class="px-2.5 py-1 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-amber-900">+</button>
        </div>
        <span class="text-xs text-gray-500">người</span>
      </div>
    </div>

    <!-- Table of ingredients -->
    <div class="overflow-x-auto rounded-xl border border-amber-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-inner">
      <table class="w-full text-left text-xs" id="calc-table">
        <thead class="bg-amber-100/70 dark:bg-slate-700/80 text-amber-950 dark:text-amber-200 font-bold uppercase text-[11px]">
          <tr>
            <th class="p-2.5">Món ăn / Thực phẩm</th>
            <th class="p-2.5">Số lượng</th>
            <th class="p-2.5">Đơn vị</th>
            <th class="p-2.5">Đơn giá (VNĐ)</th>
            <th class="p-2.5 text-right">Thành tiền (VNĐ)</th>
            <th class="p-2.5 text-center w-10">Xoá</th>
          </tr>
        </thead>
        <tbody id="calc-tbody" class="divide-y divide-amber-100 dark:divide-slate-700 text-gray-700 dark:text-gray-300">
          <!-- Default Row 1: Thịt lợn ba chỉ -->
          <tr data-row="1">
            <td class="p-2"><input type="text" value="Thịt ba chỉ (Món luộc)" class="w-full bg-transparent border-b border-dashed border-gray-300 dark:border-slate-600 outline-none text-xs font-medium" /></td>
            <td class="p-2"><input type="number" value="400" min="1" step="10" oninput="calculateMealCost()" class="row-qty w-16 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-center text-xs font-semibold" /></td>
            <td class="p-2">
              <select onchange="calculateMealCost()" class="row-unit bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded text-[11px] p-0.5">
                <option value="g" selected>gam (g)</option>
                <option value="kg">kg</option>
                <option value="item">quả/mớ</option>
              </select>
            </td>
            <td class="p-2"><input type="number" value="140000" step="1000" oninput="calculateMealCost()" class="row-price w-24 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-right text-xs" /></td>
            <td class="p-2 text-right font-bold text-amber-700 dark:text-amber-300 row-total">56,000 đ</td>
            <td class="p-2 text-center"><button type="button" onclick="removeCalcRow(this)" class="text-rose-500 hover:text-rose-700 text-xs"><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
          <!-- Row 2: Trứng gà -->
          <tr data-row="2">
            <td class="p-2"><input type="text" value="Trứng gà (Món trứng chiên)" class="w-full bg-transparent border-b border-dashed border-gray-300 dark:border-slate-600 outline-none text-xs font-medium" /></td>
            <td class="p-2"><input type="number" value="4" min="1" step="1" oninput="calculateMealCost()" class="row-qty w-16 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-center text-xs font-semibold" /></td>
            <td class="p-2">
              <select onchange="calculateMealCost()" class="row-unit bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded text-[11px] p-0.5">
                <option value="g">gam (g)</option>
                <option value="kg">kg</option>
                <option value="item" selected>quả/mớ</option>
              </select>
            </td>
            <td class="p-2"><input type="number" value="3500" step="500" oninput="calculateMealCost()" class="row-price w-24 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-right text-xs" /></td>
            <td class="p-2 text-right font-bold text-amber-700 dark:text-amber-300 row-total">14,000 đ</td>
            <td class="p-2 text-center"><button type="button" onclick="removeCalcRow(this)" class="text-rose-500 hover:text-rose-700 text-xs"><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
          <!-- Row 3: Rau muống hoặc rau ngót -->
          <tr data-row="3">
            <td class="p-2"><input type="text" value="Rau muống (Món canh / luộc)" class="w-full bg-transparent border-b border-dashed border-gray-300 dark:border-slate-600 outline-none text-xs font-medium" /></td>
            <td class="p-2"><input type="number" value="1" min="1" step="1" oninput="calculateMealCost()" class="row-qty w-16 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-center text-xs font-semibold" /></td>
            <td class="p-2">
              <select onchange="calculateMealCost()" class="row-unit bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded text-[11px] p-0.5">
                <option value="g">gam (g)</option>
                <option value="kg">kg</option>
                <option value="item" selected>quả/mớ</option>
              </select>
            </td>
            <td class="p-2"><input type="number" value="8000" step="1000" oninput="calculateMealCost()" class="row-price w-24 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-right text-xs" /></td>
            <td class="p-2 text-right font-bold text-amber-700 dark:text-amber-300 row-total">8,000 đ</td>
            <td class="p-2 text-center"><button type="button" onclick="removeCalcRow(this)" class="text-rose-500 hover:text-rose-700 text-xs"><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
          <!-- Row 4: Dưa chuột / Cà chua -->
          <tr data-row="4">
            <td class="p-2"><input type="text" value="Dưa chuột (Ăn kèm / Trộn dầu giấm)" class="w-full bg-transparent border-b border-dashed border-gray-300 dark:border-slate-600 outline-none text-xs font-medium" /></td>
            <td class="p-2"><input type="number" value="300" min="1" step="50" oninput="calculateMealCost()" class="row-qty w-16 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-center text-xs font-semibold" /></td>
            <td class="p-2">
              <select onchange="calculateMealCost()" class="row-unit bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded text-[11px] p-0.5">
                <option value="g" selected>gam (g)</option>
                <option value="kg">kg</option>
                <option value="item">quả/mớ</option>
              </select>
            </td>
            <td class="p-2"><input type="number" value="25000" step="1000" oninput="calculateMealCost()" class="row-price w-24 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-right text-xs" /></td>
            <td class="p-2 text-right font-bold text-amber-700 dark:text-amber-300 row-total">7,500 đ</td>
            <td class="p-2 text-center"><button type="button" onclick="removeCalcRow(this)" class="text-rose-500 hover:text-rose-700 text-xs"><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
          <!-- Row 5: Gia vị, chanh ớt mắm muối -->
          <tr data-row="5">
            <td class="p-2"><input type="text" value="Gia vị, dầu ăn, chanh, ớt, mắm" class="w-full bg-transparent border-b border-dashed border-gray-300 dark:border-slate-600 outline-none text-xs font-medium" /></td>
            <td class="p-2"><input type="number" value="1" min="1" step="1" oninput="calculateMealCost()" class="row-qty w-16 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-center text-xs font-semibold" /></td>
            <td class="p-2">
              <select onchange="calculateMealCost()" class="row-unit bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded text-[11px] p-0.5">
                <option value="g">gam (g)</option>
                <option value="kg">kg</option>
                <option value="item" selected>suất</option>
              </select>
            </td>
            <td class="p-2"><input type="number" value="10000" step="1000" oninput="calculateMealCost()" class="row-price w-24 px-1.5 py-0.5 border rounded bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-right text-xs" /></td>
            <td class="p-2 text-right font-bold text-amber-700 dark:text-amber-300 row-total">10,000 đ</td>
            <td class="p-2 text-center"><button type="button" onclick="removeCalcRow(this)" class="text-rose-500 hover:text-rose-700 text-xs"><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Actions and Summary -->
    <div class="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
      <button type="button" onclick="addCalcRow()" class="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm">
        <i class="fa-solid fa-plus"></i> Thêm món / Nguyên liệu
      </button>

      <div class="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
        <div class="p-2.5 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800">
          <span class="text-gray-600 dark:text-gray-300">Tổng chi phí bữa ăn:</span>
          <span class="ml-1 text-base font-black text-amber-700 dark:text-amber-300" id="calc-grand-total">95,500 VNĐ</span>
        </div>
        <div class="p-2.5 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800">
          <span class="text-gray-600 dark:text-gray-300">Chi phí / Khẩu phần:</span>
          <span class="ml-1 text-base font-black text-emerald-700 dark:text-emerald-300" id="calc-per-person">23,875 VNĐ/người</span>
        </div>
      </div>
    </div>
  </div>
`;

module.exports = { mealCalculatorWidget };
