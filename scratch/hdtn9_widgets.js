// hdtn9_widgets.js - 2 Widget tương tác thực hành môn HĐTN, HN 9

const personalBudgetPlannerWidget = `
<div id="budget-planner-widget" class="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-emerald-200 dark:border-emerald-800 shadow-md">
  <div class="flex items-center justify-between pb-4 border-b border-emerald-200 dark:border-emerald-800 mb-5">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg shadow-sm">
        <i class="fa-solid fa-wallet"></i>
      </div>
      <div>
        <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">Công Cụ Quản Lí Ngân Sách Cá Nhân Học Sinh</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400">Cân đối 4 nhóm: Thu – Chi thiết yếu – Sở thích/Cho tặng – Tiết kiệm (Chủ đề 4 SGK)</p>
      </div>
    </div>
    <span class="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
      Thực hành số
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <!-- Form Inputs -->
    <div class="space-y-3.5 bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
      <h5 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
        <i class="fa-solid fa-pen-to-square text-emerald-500"></i> Nhập số tiền dự kiến trong tháng (VNĐ)
      </h5>

      <div>
        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
          1. Tổng Thu nhập dự kiến (Tiêu vặt, lì xì, thưởng...):
        </label>
        <input type="number" id="budget-income" value="500000" step="10000" min="0" oninput="calculatePersonalBudget()"
          class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
          2. Chi Thiết yếu (Ăn sáng, sách vở, xe buýt...):
        </label>
        <input type="number" id="budget-essential" value="250000" step="10000" min="0" oninput="calculatePersonalBudget()"
          class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
          3. Chi Sở thích &amp; Cho tặng (Truyện, sinh nhật, từ thiện):
        </label>
        <input type="number" id="budget-hobby" value="150000" step="10000" min="0" oninput="calculatePersonalBudget()"
          class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
          4. Tiết kiệm dự kiến (Nuôi heo đất, quỹ tương lai):
        </label>
        <input type="number" id="budget-savings" value="100000" step="10000" min="0" oninput="calculatePersonalBudget()"
          class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
      </div>
    </div>

    <!-- Results Analysis -->
    <div class="bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
      <div>
        <h5 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-chart-pie text-teal-500"></i> Phân Tích Cân Đối Ngân Sách
        </h5>

        <div class="space-y-2 text-xs">
          <div class="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-700">
            <span class="text-slate-600 dark:text-slate-400">Tổng thu nhập:</span>
            <span id="budget-res-income" class="font-bold text-slate-900 dark:text-white">500,000 đ</span>
          </div>
          <div class="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-700">
            <span class="text-slate-600 dark:text-slate-400">Tổng chi + tiết kiệm:</span>
            <span id="budget-res-total-out" class="font-bold text-slate-900 dark:text-white">500,000 đ</span>
          </div>
          <div class="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-700">
            <span class="text-slate-600 dark:text-slate-400">Chênh lệch (Dư/Bội chi):</span>
            <span id="budget-res-diff" class="font-bold text-emerald-600 dark:text-emerald-400">0 đ (Cân bằng)</span>
          </div>
        </div>

        <!-- Progress Bars -->
        <div class="mt-4 space-y-2.5">
          <div>
            <div class="flex justify-between text-[11px] mb-1 font-semibold">
              <span class="text-slate-700 dark:text-slate-300">Thiết yếu (Mục tiêu: ~50%)</span>
              <span id="budget-pct-essential" class="text-red-600 dark:text-red-400 font-bold">50%</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div id="bar-essential" class="bg-red-500 h-2 rounded-full transition-all" style="width: 50%"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-[11px] mb-1 font-semibold">
              <span class="text-slate-700 dark:text-slate-300">Sở thích &amp; Quà tặng (Mục tiêu: ~25-30%)</span>
              <span id="budget-pct-hobby" class="text-amber-600 dark:text-amber-400 font-bold">30%</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div id="bar-hobby" class="bg-amber-500 h-2 rounded-full transition-all" style="width: 30%"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-[11px] mb-1 font-semibold">
              <span class="text-slate-700 dark:text-slate-300">Tiết kiệm (Mục tiêu: ~20%)</span>
              <span id="budget-pct-savings" class="text-emerald-600 dark:text-emerald-400 font-bold">20%</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div id="bar-savings" class="bg-emerald-500 h-2 rounded-full transition-all" style="width: 20%"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="budget-feedback" class="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs leading-relaxed border border-emerald-200 dark:border-emerald-800/50">
        <i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i>
        <span>Kế hoạch ngân sách của bạn đạt trạng thái cân bằng lí tưởng! Tỉ lệ thiết yếu 50%, sở thích 30% và tiết kiệm 20% giúp bạn chủ động tài chính.</span>
      </div>
    </div>
  </div>
</div>
`;

const careerDecisionGuideWidget = `
<div id="career-decision-widget" class="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900 border border-indigo-200 dark:border-indigo-800 shadow-md">
  <div class="flex items-center justify-between pb-4 border-b border-indigo-200 dark:border-indigo-800 mb-5">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg shadow-sm">
        <i class="fa-solid fa-compass"></i>
      </div>
      <div>
        <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">Bảng Tự Đánh Giá Chọn Hướng Đi Sau THCS</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400">Đối chiếu 5 yếu tố cốt lõi để chọn hướng: THPT, Giáo dục nghề nghiệp (9+) hoặc Lao động</p>
      </div>
    </div>
    <span class="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
      Định hướng nghề
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Option 1: THPT -->
    <div class="p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 transition">
      <div class="flex items-center gap-2 mb-2.5">
        <span class="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold">1</span>
        <h5 class="text-sm font-bold text-slate-900 dark:text-white">Học tiếp THPT</h5>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">Lộ trình 3 năm học tập trung văn hóa, thi đại học/cao đẳng.</p>
      <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-indigo-500 mt-0.5 text-[10px]"></i> Học lực: Khá, Giỏi trở lên</li>
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-indigo-500 mt-0.5 text-[10px]"></i> Khả năng tư duy lí thuyết tốt</li>
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-indigo-500 mt-0.5 text-[10px]"></i> Kinh tế gia đình đảm bảo dài hạn</li>
      </ul>
    </div>

    <!-- Option 2: GDNN (9+) -->
    <div class="p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-500 transition">
      <div class="flex items-center gap-2 mb-2.5">
        <span class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-bold">2</span>
        <h5 class="text-sm font-bold text-slate-900 dark:text-white">Giáo Dục Nghề Nghiệp (9+)</h5>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">Vừa học nghề vừa học văn hóa, có bằng nghề ở tuổi 18.</p>
      <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-emerald-500 mt-0.5 text-[10px]"></i> Học lực: Trung bình, Khá</li>
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-emerald-500 mt-0.5 text-[10px]"></i> Thích thực hành, máy móc, kĩ thuật</li>
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-emerald-500 mt-0.5 text-[10px]"></i> Muốn sớm có việc làm và thu nhập</li>
      </ul>
    </div>

    <!-- Option 3: Tham gia lao động -->
    <div class="p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 border-2 border-amber-200 dark:border-amber-800 hover:border-amber-500 transition">
      <div class="flex items-center gap-2 mb-2.5">
        <span class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-bold">3</span>
        <h5 class="text-sm font-bold text-slate-900 dark:text-white">Tham Gia Lao Động</h5>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">Học việc trực tiếp, phụ giúp kinh tế gia đình hoặc cơ sở sản xuất.</p>
      <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-amber-500 mt-0.5 text-[10px]"></i> Hoàn cảnh gia đình đặc biệt khó khăn</li>
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-amber-500 mt-0.5 text-[10px]"></i> Vừa làm vừa học các khóa sơ cấp ngắn</li>
        <li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-amber-500 mt-0.5 text-[10px]"></i> Học tiếp GDTX khi có điều kiện</li>
      </ul>
    </div>
  </div>
</div>
`;

module.exports = {
  personalBudgetPlannerWidget,
  careerDecisionGuideWidget
};
