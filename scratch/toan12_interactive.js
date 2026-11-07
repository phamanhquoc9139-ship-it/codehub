// toan12_interactive.js - 5 Interactive Mathematical Tools for Toán 12
module.exports = {
  renderInteractiveTools: function() {
    return `
    <section id="interactive-tools" class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-3 mb-6">
        <span class="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-lg">🧮</span>
        <div>
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Bộ Công Cụ Tính Toán & Khảo Sát Toán 12 Tương Tác</h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">5 tiện ích thực hành trực tiếp: khảo sát hàm số, đại số vectơ 3D, khoảng cách Oxyz, thống kê ghép nhóm và Bayes.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- TOOL 1: KHẢO SÁT TIỆM CẬN & TÂM ĐỐI XỨNG HÀM PHÂN THỨC -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div class="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm sm:text-base">
              <span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              1. Khảo Sát Tiệm Cận Hàm y = (ax + b) / (cx + d)
            </h3>
            <span class="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 border border-indigo-200 dark:border-indigo-800">Chương I</span>
          </div>
          <p class="text-xs text-slate-500 mb-4">Nhập 4 hệ số của hàm số để tìm tiệm cận đứng, ngang, tâm đối xứng và chiều biến thiên.</p>
          
          <div class="grid grid-cols-4 gap-2 mb-3">
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Hệ số a</label>
              <input type="number" id="t1_a" value="2" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Hệ số b</label>
              <input type="number" id="t1_b" value="-1" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Hệ số c (≠ 0)</label>
              <input type="number" id="t1_c" value="1" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Hệ số d</label>
              <input type="number" id="t1_d" value="2" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
          </div>
          
          <button onclick="calcTool1()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-all shadow-sm">Khảo sát tiệm cận</button>
          
          <div id="t1_res" class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            <div>Nhấn "Khảo sát tiệm cận" để xem kết quả chi tiết.</div>
          </div>
        </div>

        <!-- TOOL 2: TÍCH CÓ HƯỚNG [u, v] & TÍCH VÔ HƯỚNG VECTƠ 3D -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div class="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm sm:text-base">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              2. Tích Có Hướng [u, v] & Góc Giữa 2 Vectơ 3D
            </h3>
            <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 border border-emerald-200 dark:border-emerald-800">Chương II & V</span>
          </div>
          <p class="text-xs text-slate-500 mb-4">Nhập tọa độ 2 vectơ u(x₁, y₁, z₁) và v(x₂, y₂, z₂) để tìm tích có hướng, tích vô hướng và góc.</p>
          
          <div class="grid grid-cols-2 gap-3 mb-3">
            <div class="space-y-1">
              <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">Vectơ u = (x₁, y₁, z₁)</span>
              <div class="grid grid-cols-3 gap-1">
                <input type="number" id="t2_u1" value="1" placeholder="x₁" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t2_u2" value="2" placeholder="y₁" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t2_u3" value="-1" placeholder="z₁" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              </div>
            </div>
            <div class="space-y-1">
              <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">Vectơ v = (x₂, y₂, z₂)</span>
              <div class="grid grid-cols-3 gap-1">
                <input type="number" id="t2_v1" value="2" placeholder="x₂" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t2_v2" value="0" placeholder="y₂" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t2_v3" value="3" placeholder="z₂" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              </div>
            </div>
          </div>
          
          <button onclick="calcTool2()" class="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-all shadow-sm">Tính toán đại số vectơ</button>
          
          <div id="t2_res" class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            <div>Nhấn "Tính toán đại số vectơ" để xem tọa độ [u, v] và góc.</div>
          </div>
        </div>

        <!-- TOOL 3: KHOẢNG CÁCH TỪ ĐIỂM ĐẾN MẶT PHẲNG OXYZ -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div class="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm sm:text-base">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
              3. Khoảng Cách Từ Điểm M Đến Mặt Phẳng (P)
            </h3>
            <span class="text-xs px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-600 border border-rose-200 dark:border-rose-800">Chương V</span>
          </div>
          <p class="text-xs text-slate-500 mb-4">Tính d(M, P) = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²).</p>
          
          <div class="space-y-2 mb-3">
            <div>
              <span class="text-[11px] font-bold text-slate-600 dark:text-slate-400">Điểm M(x₀, y₀, z₀):</span>
              <div class="grid grid-cols-3 gap-2 mt-1">
                <input type="number" id="t3_x0" value="1" placeholder="x₀" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t3_y0" value="2" placeholder="y₀" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t3_z0" value="3" placeholder="z₀" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              </div>
            </div>
            <div>
              <span class="text-[11px] font-bold text-slate-600 dark:text-slate-400">Mặt phẳng (P): Ax + By + Cz + D = 0:</span>
              <div class="grid grid-cols-4 gap-2 mt-1">
                <input type="number" id="t3_A" value="2" placeholder="A" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t3_B" value="-2" placeholder="B" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t3_C" value="1" placeholder="C" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <input type="number" id="t3_D" value="-6" placeholder="D" class="px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              </div>
            </div>
          </div>
          
          <button onclick="calcTool3()" class="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-lg transition-all shadow-sm">Tính khoảng cách</button>
          
          <div id="t3_res" class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            <div>Nhấn "Tính khoảng cách" để xem phân tích số liệu.</div>
          </div>
        </div>

        <!-- TOOL 4: NỘI SUY TỨ PHÂN VỊ & PHƯƠNG SAI GHÉP NHÓM -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div class="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm sm:text-base">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              4. Tính Tứ Phân Vị & Phương Sai Ghép Nhóm
            </h3>
            <span class="text-xs px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-600 border border-amber-200 dark:border-amber-800">Chương III</span>
          </div>
          <p class="text-xs text-slate-500 mb-2">Nhập 4 tần số của 4 nhóm lớp [0; 5), [5; 10), [10; 15), [15; 20):</p>
          
          <div class="grid grid-cols-4 gap-2 mb-3">
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">[0; 5)</label>
              <input type="number" id="t4_m1" value="4" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">[5; 10)</label>
              <input type="number" id="t4_m2" value="14" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">[10; 15)</label>
              <input type="number" id="t4_m3" value="16" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">[15; 20)</label>
              <input type="number" id="t4_m4" value="6" class="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            </div>
          </div>
          
          <button onclick="calcTool4()" class="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs rounded-lg transition-all shadow-sm">Tính toán thống kê</button>
          
          <div id="t4_res" class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            <div>Nhấn "Tính toán thống kê" để xem R, Q₁, Q₃, ΔQ, x̄, s², s.</div>
          </div>
        </div>

        <!-- TOOL 5: TÍNH XÁC SUẤT BAYES & CHẨN ĐOÁN Y TẾ (Spans 2 cols on lg) -->
        <div class="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div class="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm sm:text-base">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
              5. Máy Tính Xác Suất Bayes & Nghịch Lý Tỉ Lệ Nền Y Tế
            </h3>
            <span class="text-xs px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-600 border border-purple-200 dark:border-purple-800">Chương VI</span>
          </div>
          <p class="text-xs text-slate-500 mb-3">Mô phỏng xác suất một người thực sự mắc bệnh khi có kết quả xét nghiệm dương tính (+).</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Tỉ lệ mắc bệnh trong dân số P(Bệnh) (%)</label>
              <input type="number" id="t5_prev" value="1" step="0.1" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <span class="text-[10px] text-slate-400">Ví dụ: 1% dân số</span>
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Độ nhạy P(+ | Bệnh) (%)</label>
              <input type="number" id="t5_sens" value="95" step="0.5" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <span class="text-[10px] text-slate-400">Người bệnh có xét nghiệm (+)</span>
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Tỉ lệ dương tính giả P(+ | Khỏe) (%)</label>
              <input type="number" id="t5_fpr" value="5" step="0.5" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <span class="text-[10px] text-slate-400">Người khỏe bị báo (+) nhầm</span>
            </div>
          </div>
          
          <button onclick="calcTool5()" class="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-lg transition-all shadow-sm">Tính xác suất Bayes P(Bệnh | +)</button>
          
          <div id="t5_res" class="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
            <div>Nhấn "Tính xác suất Bayes" để xem phân tích nghịch lý tỷ lệ nền.</div>
          </div>
        </div>

      </div>
    </section>

    <script>
      function calcTool1() {
        const a = parseFloat(document.getElementById('t1_a').value) || 0;
        const b = parseFloat(document.getElementById('t1_b').value) || 0;
        const c = parseFloat(document.getElementById('t1_c').value) || 1;
        const d = parseFloat(document.getElementById('t1_d').value) || 0;
        
        if (c === 0) {
          document.getElementById('t1_res').innerHTML = '<span class="text-rose-500 font-bold">Lỗi: Hệ số c phải khác 0 đối với hàm phân thức.</span>';
          return;
        }
        
        const delta = a * d - b * c;
        const tcd = -d / c;
        const tcn = a / c;
        const monotonic = delta > 0 ? 'Đồng biến trên (-∞; ' + tcd + ') và (' + tcd + '; +∞)' : (delta < 0 ? 'Nghịch biến trên (-∞; ' + tcd + ') và (' + tcd + '; +∞)' : 'Hàm hằng (suy biến)');
        
        document.getElementById('t1_res').innerHTML = \`
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>• <b>Đạo hàm:</b> y' = \${delta} / (\${c}x + \${d})² (\${delta > 0 ? '> 0' : (delta < 0 ? '< 0' : '= 0')})</div>
            <div>• <b>Tiệm cận đứng (TCĐ):</b> x = \${tcd}</div>
            <div>• <b>Tiệm cận ngang (TCN):</b> y = \${tcn}</div>
            <div>• <b>Tâm đối xứng:</b> I(\${tcd}; \${tcn})</div>
            <div class="sm:col-span-2 text-indigo-600 dark:text-indigo-400 font-semibold">• <b>Chiều biến thiên:</b> \${monotonic}</div>
          </div>
        \`;
      }

      function calcTool2() {
        const u1 = parseFloat(document.getElementById('t2_u1').value) || 0;
        const u2 = parseFloat(document.getElementById('t2_u2').value) || 0;
        const u3 = parseFloat(document.getElementById('t2_u3').value) || 0;
        const v1 = parseFloat(document.getElementById('t2_v1').value) || 0;
        const v2 = parseFloat(document.getElementById('t2_v2').value) || 0;
        const v3 = parseFloat(document.getElementById('t2_v3').value) || 0;
        
        const cx = u2 * v3 - u3 * v2;
        const cy = u3 * v1 - u1 * v3;
        const cz = u1 * v2 - u2 * v1;
        
        const dot = u1 * v1 + u2 * v2 + u3 * v3;
        const lenU = Math.sqrt(u1*u1 + u2*u2 + u3*u3);
        const lenV = Math.sqrt(v1*v1 + v2*v2 + v3*v3);
        
        let angleDeg = 0;
        if (lenU > 0 && lenV > 0) {
          const cosTheta = Math.max(-1, Math.min(1, dot / (lenU * lenV)));
          angleDeg = (Math.acos(cosTheta) * 180 / Math.PI).toFixed(2);
        }
        
        document.getElementById('t2_res').innerHTML = \`
          <div class="space-y-1 text-xs">
            <div>• <b>Tích có hướng [u, v]:</b> (\${cx}; \${cy}; \${cz})</div>
            <div>• <b>Tích vô hướng u · v:</b> \${dot} \${dot === 0 ? '<span class=\"text-emerald-600 font-bold\">(u ⊥ v)</span>' : ''}</div>
            <div>• <b>Độ dài:</b> |u| = \${lenU.toFixed(3)}, |v| = \${lenV.toFixed(3)}</div>
            <div>• <b>Góc giữa 2 vectơ (u, v):</b> \${angleDeg}°</div>
          </div>
        \`;
      }

      function calcTool3() {
        const x0 = parseFloat(document.getElementById('t3_x0').value) || 0;
        const y0 = parseFloat(document.getElementById('t3_y0').value) || 0;
        const z0 = parseFloat(document.getElementById('t3_z0').value) || 0;
        const A = parseFloat(document.getElementById('t3_A').value) || 0;
        const B = parseFloat(document.getElementById('t3_B').value) || 0;
        const C = parseFloat(document.getElementById('t3_C').value) || 0;
        const D = parseFloat(document.getElementById('t3_D').value) || 0;
        
        const numerator = Math.abs(A * x0 + B * y0 + C * z0 + D);
        const denom = Math.sqrt(A*A + B*B + C*C);
        
        if (denom === 0) {
          document.getElementById('t3_res').innerHTML = '<span class="text-rose-500 font-bold">Lỗi: Vectơ pháp tuyến (A, B, C) không thể bằng vectơ không.</span>';
          return;
        }
        
        const dist = numerator / denom;
        document.getElementById('t3_res').innerHTML = \`
          <div class="space-y-1 text-xs">
            <div>• <b>Tử số |Ax₀ + By₀ + Cz₀ + D|:</b> |\${(A*x0 + B*y0 + C*z0 + D).toFixed(3)}| = \${numerator.toFixed(3)}</div>
            <div>• <b>Độ dài VTPT √(A² + B² + C²):</b> \${denom.toFixed(3)}</div>
            <div class="text-rose-600 dark:text-rose-400 font-bold text-sm">• <b>Khoảng cách d(M, P):</b> \${dist.toFixed(4)} \${dist === 0 ? '(M thuộc mặt phẳng P)' : ''}</div>
          </div>
        \`;
      }

      function calcTool4() {
        const m1 = parseFloat(document.getElementById('t4_m1').value) || 0;
        const m2 = parseFloat(document.getElementById('t4_m2').value) || 0;
        const m3 = parseFloat(document.getElementById('t4_m3').value) || 0;
        const m4 = parseFloat(document.getElementById('t4_m4').value) || 0;
        
        const n = m1 + m2 + m3 + m4;
        if (n <= 0) {
          document.getElementById('t4_res').innerHTML = '<span class="text-rose-500 font-bold">Lỗi: Tổng cỡ mẫu n phải lớn hơn 0.</span>';
          return;
        }
        
        // Midpoints: 2.5, 7.5, 12.5, 17.5
        const mid = [2.5, 7.5, 12.5, 17.5];
        const freqs = [m1, m2, m3, m4];
        
        let sumX = 0, sumX2 = 0;
        for (let i = 0; i < 4; i++) {
          sumX += freqs[i] * mid[i];
          sumX2 += freqs[i] * mid[i] * mid[i];
        }
        const mean = sumX / n;
        const variance = (sumX2 / n) - (mean * mean);
        const stdDev = Math.sqrt(Math.max(0, variance));
        const cv = mean > 0 ? (stdDev / mean * 100).toFixed(2) + '%' : 'N/A';
        
        // Range R = 20 - 0 = 20
        const R = 20;
        
        // Cumulative freqs
        const cf = [m1, m1 + m2, m1 + m2 + m3, n];
        
        // Q1 (n/4)
        const posQ1 = n / 4;
        let Q1 = 0;
        if (posQ1 <= cf[0]) {
          Q1 = 0 + (posQ1 / m1) * 5;
        } else if (posQ1 <= cf[1]) {
          Q1 = 5 + ((posQ1 - cf[0]) / m2) * 5;
        } else if (posQ1 <= cf[2]) {
          Q1 = 10 + ((posQ1 - cf[1]) / m3) * 5;
        } else {
          Q1 = 15 + ((posQ1 - cf[2]) / m4) * 5;
        }
        
        // Q3 (3n/4)
        const posQ3 = 3 * n / 4;
        let Q3 = 0;
        if (posQ3 <= cf[0]) {
          Q3 = 0 + (posQ3 / m1) * 5;
        } else if (posQ3 <= cf[1]) {
          Q3 = 5 + ((posQ3 - cf[0]) / m2) * 5;
        } else if (posQ3 <= cf[2]) {
          Q3 = 10 + ((posQ3 - cf[1]) / m3) * 5;
        } else {
          Q3 = 15 + ((posQ3 - cf[2]) / m4) * 5;
        }
        
        const deltaQ = Q3 - Q1;
        
        document.getElementById('t4_res').innerHTML = \`
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div>• <b>Cỡ mẫu n:</b> \${n}</div>
            <div>• <b>Trung bình x̄:</b> \${mean.toFixed(2)}</div>
            <div>• <b>Khoảng biến thiên R:</b> \${R}</div>
            <div>• <b>Tứ phân vị Q₁:</b> \${Q1.toFixed(2)}</div>
            <div>• <b>Tứ phân vị Q₃:</b> \${Q3.toFixed(2)}</div>
            <div>• <b>Khoảng tứ phân vị ΔQ:</b> \${deltaQ.toFixed(2)}</div>
            <div>• <b>Phương sai s²:</b> \${variance.toFixed(3)}</div>
            <div>• <b>Độ lệch chuẩn s:</b> \${stdDev.toFixed(3)}</div>
            <div class="col-span-2 sm:col-span-4 text-amber-600 dark:text-amber-400 font-semibold">• <b>Hệ số biến thiên CV:</b> \${cv}</div>
          </div>
        \`;
      }

      function calcTool5() {
        const prev = (parseFloat(document.getElementById('t5_prev').value) || 1) / 100;
        const sens = (parseFloat(document.getElementById('t5_sens').value) || 95) / 100;
        const fpr = (parseFloat(document.getElementById('t5_fpr').value) || 5) / 100;
        
        const pDisease = prev;
        const pHealthy = 1 - prev;
        
        const pPosGivenDisease = sens;
        const pPosGivenHealthy = fpr;
        
        // Total Probability of Positive Test
        const pPositive = (pDisease * pPosGivenDisease) + (pHealthy * pPosGivenHealthy);
        
        // Bayes Theorem
        const pDiseaseGivenPos = (pDisease * pPosGivenDisease) / pPositive;
        
        const pctPos = (pPositive * 100).toFixed(3);
        const pctDiseaseGivenPos = (pDiseaseGivenPos * 100).toFixed(2);
        
        document.getElementById('t5_res').innerHTML = \`
          <div class="space-y-2 text-xs">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-1.5">
              <span>• Xác suất toàn phần có kết quả Dương tính P(+):</span>
              <span class="font-bold text-slate-800 dark:text-slate-100">\${pctPos}%</span>
            </div>
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-1.5">
              <span>• Trong 100,000 người: Dương tính thật = \${Math.round(100000 * pDisease * pPosGivenDisease)} người, Dương tính giả = \${Math.round(100000 * pHealthy * pPosGivenHealthy)} người.</span>
              <span class="font-semibold text-slate-500">Mô phỏng</span>
            </div>
            <div class="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200">
              <div class="font-bold text-sm">🎯 Kết luận theo Định lý Bayes: P(Bệnh | +) = \${pctDiseaseGivenPos}%</div>
              <div class="mt-1 text-[11px] leading-relaxed">
                Dù xét nghiệm có độ nhạy rất cao (\${(sens*100).toFixed(1)}%), nhưng vì bệnh hiếm (\${(prev*100).toFixed(1)}%), nên khi nhận kết quả dương tính (+), xác suất thực tế người đó có bệnh chỉ là <b>\${pctDiseaseGivenPos}%</b>! Phần lớn các ca dương tính là do dương tính giả từ quần thể người khỏe mạnh.
              </div>
            </div>
          </div>
        \`;
      }
    </script>
    `;
  }
};
