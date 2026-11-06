// gdtc9_widgets.js - Công cụ tương tác trực quan môn Giáo dục thể chất 9

const sportsNutritionCalculatorWidget = `
  <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-sky-50 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900 border border-emerald-200 dark:border-emerald-800 shadow-sm" id="nutrition-calculator-widget">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-200 dark:border-emerald-800">
      <div>
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 mr-2">
          <i class="fa-solid fa-calculator"></i> Công cụ tương tác
        </span>
        <strong class="text-sm sm:text-base text-gray-900 dark:text-white font-bold">MÁY TÍNH NHU CẦU DINH DƯỠNG &amp; BÙ NƯỚC THEO MỤC TIÊU VẬN ĐỘNG</strong>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
          Tính toán khẩu phần dinh dưỡng (Carbohydrate, Protein, Lipid) và lượng nước cần bù dựa trên mục tiêu luyện tập theo SGK GDTC 9.
        </p>
      </div>
      <div class="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-300">
        Chuẩn SGK GDTC 9 KNTT
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
      <div>
        <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Mục tiêu luyện tập thể thao:</label>
        <select id="calc-sport-type" onchange="calculateNutritionPlan()" class="w-full p-2 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-500">
          <option value="speed">Tốc độ &amp; Cự li ngắn (100 m)</option>
          <option value="endurance">Sức bền (Chạy cự li trung bình)</option>
          <option value="strength">Sức mạnh (Nhảy cao nằm nghiêng)</option>
          <option value="balls">Môn bóng phối hợp (Bóng đá, Cầu lông, Bóng rổ)</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Cân nặng học sinh (kg):</label>
        <input type="number" id="calc-weight" oninput="calculateNutritionPlan()" value="48" min="30" max="100" class="w-full p-2 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-500">
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Thời gian tập luyện (phút/buổi):</label>
        <input type="number" id="calc-duration" oninput="calculateNutritionPlan()" value="45" min="15" max="180" step="5" class="w-full p-2 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:border-emerald-500">
      </div>
    </div>

    <!-- Output Dashboard -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/50 shadow-sm">
        <span class="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 block mb-0.5">Carbohydrate (Đường bột)</span>
        <span class="text-base sm:text-lg font-black text-rose-700 dark:text-rose-300" id="calc-res-carbs">~58% (235g)</span>
        <span class="text-[10px] text-gray-500 dark:text-gray-400 block mt-0.5">ATP tốc độ tức thời</span>
      </div>

      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-900/50 shadow-sm">
        <span class="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">Protein (Chất đạm)</span>
        <span class="text-base sm:text-lg font-black text-emerald-700 dark:text-emerald-300" id="calc-res-protein">~1.8g/kg (86g)</span>
        <span class="text-[10px] text-gray-500 dark:text-gray-400 block mt-0.5">Tái tạo và phát triển cơ bắp</span>
      </div>

      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-900/50 shadow-sm">
        <span class="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 block mb-0.5">Lipid (Chất béo lành)</span>
        <span class="text-base sm:text-lg font-black text-blue-700 dark:text-blue-300" id="calc-res-lipid">~24% (43g)</span>
        <span class="text-[10px] text-gray-500 dark:text-gray-400 block mt-0.5">Dự trữ năng lượng bền bỉ</span>
      </div>

      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-sky-200 dark:border-sky-900/50 shadow-sm">
        <span class="text-[10px] uppercase font-bold text-sky-600 dark:text-sky-400 block mb-0.5">Lượng nước cần bù</span>
        <span class="text-base sm:text-lg font-black text-sky-700 dark:text-sky-300" id="calc-res-water">~500 - 650 ml</span>
        <span class="text-[10px] text-gray-500 dark:text-gray-400 block mt-0.5">Uống từng ngụm nhỏ 15p/lần</span>
      </div>
    </div>

    <!-- Practical Guideline Advice -->
    <div class="mt-3.5 p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-emerald-100 dark:border-slate-700 text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">
      <i class="fa-solid fa-circle-info text-emerald-600 mt-0.5"></i>
      <div id="calc-sport-advice" class="leading-relaxed">
        <strong>Lời khuyên chuyên môn:</strong> Với bài tập tốc độ 100m, ưu tiên ăn nhẹ các thực phẩm giàu carbohydrate dễ tiêu hoá (chuối, yến mạch, bánh mì nguyên cám) cách giờ tập khoảng 1,5–2 tiếng; uống đủ nước và không ăn đồ chiên xào nhiều dầu mỡ sát giờ thi đấu.
      </div>
    </div>
  </div>
`;

module.exports = { sportsNutritionCalculatorWidget };
