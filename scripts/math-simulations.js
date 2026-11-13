/**
 * Học viện CodeHub - Hệ Thống Phòng Thực Hành Toán Học Tương Tác (THPT 10 - 11 - 12)
 * Pure HTML5 Canvas, SVG & Vanilla JavaScript (100% Client-Side, Open-Source MIT, Zero Paid AI APIs)
 *
 * Bao gồm 3 Giai đoạn triển khai (6 Mô phỏng Toán học tương tác chuyên sâu):
 * - Giai đoạn 1:
 *   1. Đồ thị hàm số bậc nhất, bậc hai & Tam thức bậc hai (Toán 10 - Bài 15, 16, 17)
 *   2. Đường tròn lượng giác & Đồ thị hàm số lượng giác sin, cos, tan, cot (Toán 10 Bài 5 & Toán 11 Bài 1, 3)
 *   3. Hình học phẳng động: Kéo đỉnh tam giác, Đường tròn ngoại/nội tiếp, Đường thẳng Euler & Elip Conic (Toán 10 Bài 6, 21, 22)
 * - Giai đoạn 2:
 *   4. Khảo sát hàm số (Đa thức, Phân thức, Mũ, Logarit), Giới hạn, Đạo hàm, Tiếp tuyến & Tích phân diện tích (Toán 11 Bài 20, 31 & Toán 12 Bài 1, 3, 4, 12, 13)
 *   5. Hình học Không gian 3D & Hệ tọa độ Oxyz: Xoay 360°, Thiết diện, Góc, Khoảng cách & Thể tích (Toán 11 Bài 26, 27 & Toán 12 Bài 7, 14, 16)
 * - Giai đoạn 3:
 *   6. Xác suất & Thống kê thực nghiệm: Gieo xúc xắc, Nhị thức, Tứ phân vị, Phương sai & Độ lệch chuẩn (Toán 10 Bài 13, 14, 27 & Toán 12 Bài 9, 10)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CodeHubMath = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const TWO_PI = Math.PI * 2;
  const DEG_TO_RAD = Math.PI / 180;
  const RAD_TO_DEG = 180 / Math.PI;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function fmt(num, digits = 2) {
    if (num === null || num === undefined || Number.isNaN(num)) return 'Không xác định';
    if (!Number.isFinite(num)) return num > 0 ? '+∞' : '-∞';
    const v = Math.abs(num) < 1e-9 ? 0 : num;
    return Number(v.toFixed(digits)).toString();
  }

  function isDarkMode() {
    if (typeof document === 'undefined') return false;
    return document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
  }

  function getTheme() {
    const dark = isDarkMode();
    return {
      dark,
      bg: dark ? '#0f172a' : '#ffffff',
      canvasBg: dark ? '#090f1d' : '#f8fafc',
      grid: dark ? 'rgba(148, 163, 184, 0.13)' : 'rgba(100, 116, 139, 0.15)',
      subGrid: dark ? 'rgba(148, 163, 184, 0.06)' : 'rgba(100, 116, 139, 0.07)',
      axis: dark ? '#94a3b8' : '#334155',
      text: dark ? '#f1f5f9' : '#0f172a',
      muted: dark ? '#94a3b8' : '#64748b',
      blue: '#3b82f6',
      indigo: '#6366f1',
      emerald: '#10b981',
      rose: '#f43f5e',
      amber: '#f59e0b',
      purple: '#a855f7',
      cyan: '#06b6d4'
    };
  }

  function setupCanvas(canvas, width, height) {
    const dpr = Math.min((typeof window !== 'undefined' && window.devicePixelRatio) || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, width, height, dpr };
  }

  function renderKaTeX(el) {
    if (typeof renderMathInElement === 'function' && el) {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  // Draw standard Cartesian coordinate grid on Canvas
  function drawCoordinatePlane(ctx, width, height, originX, originY, scaleX, scaleY, theme) {
    ctx.fillStyle = theme.canvasBg;
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = theme.grid;
    ctx.fillStyle = theme.muted;
    ctx.font = '10px "JetBrains Mono", monospace';

    const xMin = Math.floor(-originX / scaleX);
    const xMax = Math.ceil((width - originX) / scaleX);
    const yMin = Math.floor(-(height - originY) / scaleY);
    const yMax = Math.ceil(originY / scaleY);

    ctx.beginPath();
    for (let x = xMin; x <= xMax; x++) {
      const px = originX + x * scaleX;
      ctx.moveTo(px, 0);
      ctx.lineTo(px, height);
    }
    for (let y = yMin; y <= yMax; y++) {
      const py = originY - y * scaleY;
      ctx.moveTo(0, py);
      ctx.lineTo(width, py);
    }
    ctx.stroke();

    // Axes
    ctx.strokeStyle = theme.axis;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Tick numbers
    ctx.textAlign = 'center';
    for (let x = xMin; x <= xMax; x++) {
      if (x === 0) continue;
      if (scaleX < 26 && x % 2 !== 0) continue;
      const px = originX + x * scaleX;
      if (px > 18 && px < width - 18) {
        ctx.fillText(String(x), px, clamp(originY + 14, 14, height - 6));
      }
    }
    ctx.textAlign = 'right';
    for (let y = yMin; y <= yMax; y++) {
      if (y === 0) continue;
      if (scaleY < 26 && y % 2 !== 0) continue;
      const py = originY - y * scaleY;
      if (py > 14 && py < height - 14) {
        ctx.fillText(String(y), clamp(originX - 6, 22, width - 6), py + 3);
      }
    }

    ctx.fillStyle = theme.text;
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('O', originX + 5, originY + 14);
    ctx.fillText('x', width - 14, originY - 6);
    ctx.fillText('y', originX + 8, 14);
  }

  // =========================================================================
  // MÔ PHỎNG 1: ĐỒ THỊ HÀM SỐ BẬC NHẤT, BẬC HAI & TAM THỨC BẬC HAI (GIAI ĐOẠN 1)
  // =========================================================================
  class QuadraticGraphSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        a: options.a !== undefined ? options.a : 1.0,
        b: options.b !== undefined ? options.b : -2.0,
        c: options.c !== undefined ? options.c : -3.0,
        zoom: 32
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    computeProperties() {
      const { a, b, c } = this.params;
      if (Math.abs(a) < 1e-6) {
        // Suy biến về hàm bậc nhất y = bx + c hoặc hàm hằng y = c
        const isConst = Math.abs(b) < 1e-6;
        const root = isConst ? null : -c / b;
        return {
          isQuadratic: false,
          isConst,
          a: 0,
          b,
          c,
          root,
          formulaText: isConst
            ? `y = ${fmt(c)} (Hàm hằng)`
            : `y = ${fmt(b)}x ${c >= 0 ? '+ ' + fmt(c) : '- ' + fmt(Math.abs(c))} (Hàm bậc nhất)`
        };
      }

      const delta = b * b - 4 * a * c;
      const vx = -b / (2 * a);
      const vy = -delta / (4 * a);
      let roots = [];
      if (Math.abs(delta) < 1e-6) {
        roots = [vx];
      } else if (delta > 0) {
        const sqrtD = Math.sqrt(delta);
        const x1 = (-b - sqrtD) / (2 * a);
        const x2 = (-b + sqrtD) / (2 * a);
        roots = [Math.min(x1, x2), Math.max(x1, x2)];
      }

      const signA = a > 0 ? '+' : '−';
      const oppSignA = a > 0 ? '−' : '+';
      let signRule = '';
      if (delta < -1e-6) {
        signRule = `Δ < 0: f(x) luôn cùng dấu với a (${signA}) với mọi x ∈ ℝ`;
      } else if (Math.abs(delta) <= 1e-6) {
        signRule = `Δ = 0: f(x) cùng dấu với a (${signA}) với mọi x ≠ ${fmt(vx)}`;
      } else {
        signRule = `Trong khoảng (${fmt(roots[0])}; ${fmt(roots[1])}) trái dấu a (${oppSignA}); ngoài khoảng cùng dấu a (${signA})`;
      }

      return {
        isQuadratic: true,
        a,
        b,
        c,
        delta,
        vx,
        vy,
        roots,
        signRule
      };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-bezier-curve"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 1: Đồ Thị Hàm Số Bậc Hai & Xét Dấu Tam Thức ($y = ax^2 + bx + c$)</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Bài 16 & 17</span>
                </div>
                <p class="text-xs text-blue-100/90 mt-0.5">Kéo thanh trượt $a, b, c$ để khảo sát đỉnh Parabol $I$, trục đối xứng, nghiệm và dấu của $f(x)$</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-preset="2roots" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">Δ &gt; 0 (2 nghiệm)</button>
              <button data-preset="1root" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">Δ = 0 (Tiếp xúc Ox)</button>
              <button data-preset="0root" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">Δ &lt; 0 (Vô nghiệm)</button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs transition cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Left Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 relative">
              <canvas class="quad-canvas block w-full h-[330px] rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner"></canvas>
              <div class="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                <div class="flex items-center gap-3">
                  <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Đồ thị $y=f(x)$</span>
                  <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Đỉnh $I(-b/2a; -\\Delta/4a)$</span>
                  <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Nghiệm $f(x)=0$</span>
                </div>
                <div class="flex items-center gap-1">
                  <button data-zoom="in" class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">+</button>
                  <button data-zoom="out" class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">−</button>
                </div>
              </div>
            </div>

            <!-- Right Analytical Summary (5 cols) -->
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-3">
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                  <i class="fa-solid fa-square-root-variable"></i> Phân Tích Giải Tích Chính Xác
                </div>
                <div data-val="equation" class="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800/60 font-mono font-bold text-sm text-blue-900 dark:text-blue-200 text-center">
                  y = x² - 2x - 3
                </div>

                <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800">
                    <div class="text-[10px] text-slate-500">Tọa độ Đỉnh I & Trục ĐX</div>
                    <div class="font-bold text-rose-600 dark:text-rose-400 mt-0.5" data-val="vertex">I(1; -4) • x = 1</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800">
                    <div class="text-[10px] text-slate-500">Biệt thức Δ = b² − 4ac</div>
                    <div class="font-bold text-indigo-600 dark:text-indigo-400 mt-0.5" data-val="delta">Δ = 16 &gt; 0</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 col-span-2">
                    <div class="text-[10px] text-slate-500">Giao điểm với trục hoành Ox (Nghiệm) & Oy</div>
                    <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5" data-val="roots">x₁ = -1; x₂ = 3 • Giao Oy: (0; -3)</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 col-span-2">
                    <div class="text-[10px] text-slate-500">Sự biến thiên (Đồng biến / Nghịch biến)</div>
                    <div class="font-semibold text-slate-800 dark:text-slate-200 mt-0.5" data-val="monotonicity">Nghịch biến trên (-∞; 1), Đồng biến trên (1; +∞)</div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-200">
                <div class="font-bold mb-0.5"><i class="fa-solid fa-table-cells mr-1"></i>Định lý về dấu tam thức bậc hai:</div>
                <div data-val="signRule">Trong khoảng (-1; 3): f(x) &lt; 0; Ngoài khoảng: f(x) &gt; 0</div>
              </div>
            </div>
          </div>

          <!-- Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300">Hệ số bậc hai ($a$)</label>
                <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="a">1.0</span>
              </div>
              <input type="range" data-ctrl="a" min="-3" max="3" step="0.25" value="${this.params.a}" class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300">Hệ số bậc nhất ($b$)</label>
                <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="b">-2.0</span>
              </div>
              <input type="range" data-ctrl="b" min="-6" max="6" step="0.5" value="${this.params.b}" class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300">Hệ số tự do ($c$)</label>
                <span class="font-bold text-emerald-600 dark:text-emerald-400" data-disp="c">-3.0</span>
              </div>
              <input type="range" data-ctrl="c" min="-6" max="6" step="0.5" value="${this.params.c}" class="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.quad-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      ['a', 'b', 'c'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = fmt(this.params[k], 2);
          this.renderAll();
        });
      });

      const setCoeff = (a, b, cVal) => {
        this.params.a = a;
        this.params.b = b;
        this.params.c = cVal;
        ['a', 'b', 'c'].forEach(k => {
          const inp = c.querySelector(`[data-ctrl="${k}"]`);
          const disp = c.querySelector(`[data-disp="${k}"]`);
          if (inp) inp.value = this.params[k];
          if (disp) disp.textContent = fmt(this.params[k], 2);
        });
        this.renderAll();
      };

      c.querySelector('[data-preset="2roots"]').addEventListener('click', () => setCoeff(1, -2, -3));
      c.querySelector('[data-preset="1root"]').addEventListener('click', () => setCoeff(1, -2, 1));
      c.querySelector('[data-preset="0root"]').addEventListener('click', () => setCoeff(1, -2, 2.5));
      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.params.zoom = 32;
        setCoeff(1, -2, -3);
      });

      c.querySelectorAll('[data-zoom]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.params.zoom = clamp(this.params.zoom + (btn.dataset.zoom === 'in' ? 6 : -6), 18, 64);
          this.renderAll();
        });
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const props = this.computeProperties();
      const c = this.container;

      // Update text cards
      const eqEl = c.querySelector('[data-val="equation"]');
      const vEl = c.querySelector('[data-val="vertex"]');
      const dEl = c.querySelector('[data-val="delta"]');
      const rEl = c.querySelector('[data-val="roots"]');
      const mEl = c.querySelector('[data-val="monotonicity"]');
      const sEl = c.querySelector('[data-val="signRule"]');

      if (!props.isQuadratic) {
        if (eqEl) eqEl.textContent = props.formulaText;
        if (vEl) vEl.textContent = 'Suy biến a = 0 (Không có đỉnh Parabol)';
        if (dEl) dEl.textContent = 'Bậc ≤ 1';
        if (rEl) rEl.textContent = props.isConst ? (Math.abs(props.c) < 1e-6 ? 'Vô số nghiệm' : 'Vô nghiệm') : `Nghiệm duy nhất x = ${fmt(props.root)} • Giao Oy: (0; ${fmt(props.c)})`;
        if (mEl) mEl.textContent = props.isConst ? 'Hàm hằng trên ℝ' : (props.b > 0 ? 'Đồng biến trên ℝ' : 'Nghịch biến trên ℝ');
        if (sEl) sEl.textContent = props.isConst ? `Hàm không đổi dấu (${props.c >= 0 ? '+' : '−'})` : `Đổi dấu qua nghiệm x = ${fmt(props.root)}`;
      } else {
        const bStr = props.b === 0 ? '' : (props.b > 0 ? ` + ${fmt(props.b)}x` : ` - ${fmt(Math.abs(props.b))}x`);
        const cStr = props.c === 0 ? '' : (props.c > 0 ? ` + ${fmt(props.c)}` : ` - ${fmt(Math.abs(props.c))}`);
        if (eqEl) eqEl.textContent = `y = ${fmt(props.a)}x²${bStr}${cStr}`;
        if (vEl) vEl.textContent = `I(${fmt(props.vx)}; ${fmt(props.vy)}) • Trục ĐX: x = ${fmt(props.vx)}`;
        if (dEl) dEl.textContent = `Δ = ${fmt(props.delta)} (${props.delta > 0 ? '> 0' : props.delta === 0 ? '= 0' : '< 0'})`;
        if (rEl) {
          if (props.roots.length === 2) rEl.textContent = `x₁ = ${fmt(props.roots[0])}; x₂ = ${fmt(props.roots[1])} • Giao Oy: (0; ${fmt(props.c)})`;
          else if (props.roots.length === 1) rEl.textContent = `Nghiệm kép x = ${fmt(props.roots[0])} • Giao Oy: (0; ${fmt(props.c)})`;
          else rEl.textContent = `Vô nghiệm thực trên Ox • Giao Oy: (0; ${fmt(props.c)})`;
        }
        if (mEl) {
          mEl.textContent = props.a > 0
            ? `Nghịch biến trên (-∞; ${fmt(props.vx)}), Đồng biến trên (${fmt(props.vx)}; +∞)`
            : `Đồng biến trên (-∞; ${fmt(props.vx)}), Nghịch biến trên (${fmt(props.vx)}; +∞)`;
        }
        if (sEl) sEl.textContent = props.signRule;
      }

      // Draw Canvas
      const rect = this.canvas.getBoundingClientRect();
      const width = rect.width || 460;
      const height = rect.height || 330;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      const scale = this.params.zoom;
      const ox = width * 0.5;
      const oy = height * 0.55;

      drawCoordinatePlane(ctx, width, height, ox, oy, scale, scale, theme);

      if (props.isQuadratic) {
        // Axis of symmetry x = vx
        const vxPx = ox + props.vx * scale;
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = theme.rose;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(vxPx, 0);
        ctx.lineTo(vxPx, height);
        ctx.stroke();
        ctx.restore();
      }

      // Plot function y = ax^2 + bx + c
      ctx.save();
      ctx.strokeStyle = theme.blue;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      for (let px = 0; px <= width; px += 2) {
        const x = (px - ox) / scale;
        const y = this.params.a * x * x + this.params.b * x + this.params.c;
        const py = oy - y * scale;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.restore();

      // Highlight roots & vertex
      if (props.isQuadratic) {
        props.roots.forEach((rx, idx) => {
          const px = ox + rx * scale;
          const py = oy;
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, TWO_PI);
          ctx.fillStyle = theme.emerald;
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.fillStyle = theme.emerald;
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(`x${idx + 1}(${fmt(rx, 1)};0)`, px - 18, py - 10);
        });

        const vpx = ox + props.vx * scale;
        const vpy = oy - props.vy * scale;
        ctx.beginPath();
        ctx.arc(vpx, vpy, 6, 0, TWO_PI);
        ctx.fillStyle = theme.rose;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.fillStyle = theme.rose;
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`I(${fmt(props.vx, 2)}; ${fmt(props.vy, 2)})`, vpx + 8, vpy + (props.a > 0 ? 15 : -8));
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 2: ĐƯỜNG TRÒN LƯỢNG GIÁC & ĐỒ THỊ HÀM SỐ LƯỢNG GIÁC (GIAI ĐOẠN 1)
  // =========================================================================
  class TrigCircleSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        angleDeg: options.angleDeg !== undefined ? options.angleDeg : 45,
        func: options.func || 'sin-cos', // 'sin-cos' | 'tan' | 'cot'
        running: false,
        draggingCircle: false
      };

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-circle-nodes"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 2: Đường Tròn Lượng Giác & Đồ Thị Hàm Số Lượng Giác</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 Bài 5 • Toán 11 Bài 1 & 3</span>
                </div>
                <p class="text-xs text-emerald-100/90 mt-0.5">Kéo điểm $M$ trên đường tròn đơn vị hoặc thanh trượt góc $\\alpha$ để quan sát $\\sin\\alpha, \\cos\\alpha, \\tan\\alpha, \\cot\\alpha$ và tiệm cận</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-play"></i> <span>Quay tự động</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại 45°
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Unit Circle (5 cols) -->
            <div class="lg:col-span-5 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col items-center">
              <div class="w-full flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                <span>Đường Tròn Lượng Giác ($R = 1$)</span>
                <span class="text-[11px] text-teal-600 dark:text-teal-400">Kéo điểm M trên vòng tròn</span>
              </div>
              <canvas class="unit-circle-canvas block w-full h-[270px] rounded-xl border border-slate-200 dark:border-slate-800 cursor-grab active:cursor-grabbing"></canvas>
            </div>

            <!-- Wave Graph (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Đồ thị hàm số lượng giác trên $[-\\pi; 2\\pi]$:</span>
                <div class="flex items-center gap-1.5">
                  <button data-fn="sin-cos" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-teal-600 text-white cursor-pointer">y = sin x &amp; cos x</button>
                  <button data-fn="tan" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">y = tan x (Tiệm cận)</button>
                  <button data-fn="cot" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">y = cot x (Tiệm cận)</button>
                </div>
              </div>
              <canvas class="trig-wave-canvas block w-full h-[215px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>

              <div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div class="p-2 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/50">
                  <div class="text-[10px] text-rose-600 dark:text-rose-400 font-bold">sin α (Tung độ)</div>
                  <div class="font-mono font-extrabold text-rose-700 dark:text-rose-300" data-val="sin">0.707</div>
                </div>
                <div class="p-2 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50">
                  <div class="text-[10px] text-blue-600 dark:text-blue-400 font-bold">cos α (Hoành độ)</div>
                  <div class="font-mono font-extrabold text-blue-700 dark:text-blue-300" data-val="cos">0.707</div>
                </div>
                <div class="p-2 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50">
                  <div class="text-[10px] text-amber-600 dark:text-amber-400 font-bold">tan α = sin α / cos α</div>
                  <div class="font-mono font-extrabold text-amber-700 dark:text-amber-300" data-val="tan">1.000</div>
                </div>
                <div class="p-2 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/50">
                  <div class="text-[10px] text-purple-600 dark:text-purple-400 font-bold">cot α = cos α / sin α</div>
                  <div class="font-mono font-extrabold text-purple-700 dark:text-purple-300" data-val="cot">1.000</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Angle Slider & Quick Special Angles -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="w-full sm:w-2/3 space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300">Số đo góc lượng giác $\\alpha$ (Độ &amp; Radian)</label>
                <span class="font-mono font-bold text-teal-600 dark:text-teal-400" data-disp="angle">45° (0.25π rad)</span>
              </div>
              <input type="range" data-ctrl="angle" min="-180" max="360" step="1" value="${this.state.angleDeg}" class="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
            <div class="flex flex-wrap items-center gap-1.5 text-xs">
              <span class="text-slate-500 font-semibold mr-1">Góc đặc biệt:</span>
              <button data-ang="0" class="px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold cursor-pointer">0°</button>
              <button data-ang="30" class="px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold cursor-pointer">30°</button>
              <button data-ang="45" class="px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold cursor-pointer">45°</button>
              <button data-ang="60" class="px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold cursor-pointer">60°</button>
              <button data-ang="90" class="px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold cursor-pointer">90°</button>
              <button data-ang="180" class="px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold cursor-pointer">180°</button>
            </div>
          </div>
        </div>
      `;

      this.canvasCircle = this.container.querySelector('.unit-circle-canvas');
      this.canvasWave = this.container.querySelector('.trig-wave-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      const inp = c.querySelector('[data-ctrl="angle"]');
      const toggleBtn = c.querySelector('[data-act="toggle"]');

      const setAngle = deg => {
        this.state.angleDeg = clamp(deg, -180, 360);
        if (inp) inp.value = Math.round(this.state.angleDeg);
        this.renderAll();
      };

      inp.addEventListener('input', e => setAngle(parseFloat(e.target.value)));

      c.querySelectorAll('[data-ang]').forEach(btn => {
        btn.addEventListener('click', () => setAngle(parseFloat(btn.dataset.ang)));
      });

      c.querySelectorAll('[data-fn]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-fn]').forEach(b => {
            b.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer';
          });
          btn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-teal-600 text-white cursor-pointer';
          this.state.func = btn.dataset.fn;
          this.renderAll();
        });
      });

      toggleBtn.addEventListener('click', () => {
        this.state.running = !this.state.running;
        toggleBtn.innerHTML = this.state.running
          ? '<i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>'
          : '<i class="fa-solid fa-play"></i> <span>Quay tự động</span>';
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.state.running = false;
        toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Quay tự động</span>';
        setAngle(45);
      });

      // Drag point M on unit circle
      const updateFromPointer = (clientX, clientY) => {
        const rect = this.canvasCircle.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = clientX - rect.left - cx;
        const dy = -(clientY - rect.top - cy);
        let deg = Math.atan2(dy, dx) * RAD_TO_DEG;
        if (deg < -180) deg += 360;
        setAngle(Math.round(deg));
      };

      this.canvasCircle.addEventListener('mousedown', e => {
        this.state.draggingCircle = true;
        updateFromPointer(e.clientX, e.clientY);
      });
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', e => {
          if (this.state.draggingCircle) updateFromPointer(e.clientX, e.clientY);
        });
        window.addEventListener('mouseup', () => { this.state.draggingCircle = false; });
        window.addEventListener('resize', () => this.renderAll());
      }
      this.canvasCircle.addEventListener('touchstart', e => {
        if (e.touches.length === 1) {
          this.state.draggingCircle = true;
          updateFromPointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });
      this.canvasCircle.addEventListener('touchmove', e => {
        if (this.state.draggingCircle && e.touches.length === 1) {
          updateFromPointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });
      this.canvasCircle.addEventListener('touchend', () => { this.state.draggingCircle = false; });
    }

    setupObserver() {
      this.inView = true;
      if (typeof IntersectionObserver !== 'undefined') {
        this.observer = new IntersectionObserver(entries => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.08 });
        this.observer.observe(this.container);
      }
    }

    start() {
      this.renderAll();
      const loop = () => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || document.hidden) return;
        this.state.angleDeg += 0.8;
        if (this.state.angleDeg > 360) this.state.angleDeg = -180;
        const inp = this.container.querySelector('[data-ctrl="angle"]');
        if (inp) inp.value = Math.round(this.state.angleDeg);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    renderAll() {
      const deg = this.state.angleDeg;
      const rad = deg * DEG_TO_RAD;
      const sinV = Math.sin(rad);
      const cosV = Math.cos(rad);
      const cosZero = Math.abs(cosV) < 1e-4;
      const sinZero = Math.abs(sinV) < 1e-4;

      const c = this.container;
      const disp = c.querySelector('[data-disp="angle"]');
      if (disp) disp.textContent = `${fmt(deg, 0)}° (${fmt(deg / 180, 2)}π rad)`;

      c.querySelector('[data-val="sin"]').textContent = fmt(sinV, 3);
      c.querySelector('[data-val="cos"]').textContent = fmt(cosV, 3);
      c.querySelector('[data-val="tan"]').textContent = cosZero ? 'Không XĐ (∄)' : fmt(sinV / cosV, 3);
      c.querySelector('[data-val="cot"]').textContent = sinZero ? 'Không XĐ (∄)' : fmt(cosV / sinV, 3);

      this.renderUnitCircle(rad, sinV, cosV);
      this.renderWave(rad, sinV, cosV, cosZero, sinZero);
    }

    renderUnitCircle(rad, sinV, cosV) {
      const rect = this.canvasCircle.getBoundingClientRect();
      const width = rect.width || 300;
      const height = rect.height || 270;
      const { ctx } = setupCanvas(this.canvasCircle, width, height);
      const theme = getTheme();

      const cx = width / 2;
      const cy = height / 2;
      const R = Math.min(width, height) * 0.36;

      drawCoordinatePlane(ctx, width, height, cx, cy, R, R, theme);

      // Unit Circle
      ctx.strokeStyle = theme.text;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TWO_PI);
      ctx.stroke();

      const mx = cx + cosV * R;
      const my = cy - sinV * R;

      // Angle sector
      ctx.fillStyle = 'rgba(20, 184, 166, 0.2)';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R * 0.28, 0, -rad, rad > 0);
      ctx.closePath();
      ctx.fill();

      // Projections cos (blue on Ox) and sin (rose on Oy)
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = theme.muted;
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(mx, cy);
      ctx.moveTo(mx, my);
      ctx.lineTo(cx, my);
      ctx.stroke();
      ctx.setLineDash([]);

      // cos segment
      ctx.strokeStyle = theme.blue;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(mx, cy);
      ctx.stroke();

      // sin segment
      ctx.strokeStyle = theme.rose;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx, my);
      ctx.stroke();

      // Radius OM
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(mx, my);
      ctx.stroke();

      // Point M
      ctx.beginPath();
      ctx.arc(mx, my, 6.5, 0, TWO_PI);
      ctx.fillStyle = theme.emerald;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = theme.text;
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`M(${fmt(cosV, 2)}; ${fmt(sinV, 2)})`, clamp(mx + 8, 8, width - 95), clamp(my - 8, 16, height - 10));
    }

    renderWave(rad, sinV, cosV, cosZero, sinZero) {
      const rect = this.canvasWave.getBoundingClientRect();
      const width = rect.width || 420;
      const height = rect.height || 215;
      const { ctx } = setupCanvas(this.canvasWave, width, height);
      const theme = getTheme();

      // Plot domain [-pi, 2*pi]
      const xMin = -Math.PI;
      const xMax = 2 * Math.PI;
      const ox = width * (Math.PI / (3 * Math.PI));
      const oy = height / 2;
      const scaleX = width / (3 * Math.PI);
      const scaleY = this.state.func === 'sin-cos' ? height * 0.34 : height * 0.22;

      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      // Axes
      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, oy);
      ctx.lineTo(width, oy);
      ctx.moveTo(ox, 0);
      ctx.lineTo(ox, height);
      ctx.stroke();

      // Pi ticks
      const ticks = [
        { v: -Math.PI, l: '-π' },
        { v: -Math.PI / 2, l: '-π/2' },
        { v: Math.PI / 2, l: 'π/2' },
        { v: Math.PI, l: 'π' },
        { v: 1.5 * Math.PI, l: '3π/2' },
        { v: 2 * Math.PI, l: '2π' }
      ];
      ctx.fillStyle = theme.muted;
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ticks.forEach(t => {
        const px = ox + t.v * scaleX;
        ctx.fillText(t.l, px, oy + 14);
      });

      if (this.state.func === 'sin-cos') {
        // Draw cos x (blue)
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 2) {
          const x = xMin + (px / width) * (xMax - xMin);
          const py = oy - Math.cos(x) * scaleY;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Draw sin x (rose)
        ctx.strokeStyle = theme.rose;
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 2) {
          const x = xMin + (px / width) * (xMax - xMin);
          const py = oy - Math.sin(x) * scaleY;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Current angle marker
        const curPx = ox + rad * scaleX;
        const sinPy = oy - sinV * scaleY;
        const cosPy = oy - cosV * scaleY;
        ctx.beginPath();
        ctx.arc(curPx, sinPy, 5, 0, TWO_PI);
        ctx.fillStyle = theme.rose;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(curPx, cosPy, 5, 0, TWO_PI);
        ctx.fillStyle = theme.blue;
        ctx.fill();
      } else {
        // Draw tan x or cot x WITHOUT connecting across vertical asymptotes!
        const isTan = this.state.func === 'tan';
        const asymptotes = isTan
          ? [-Math.PI / 2, Math.PI / 2, 1.5 * Math.PI]
          : [-Math.PI, 0, Math.PI, 2 * Math.PI];

        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = theme.rose;
        asymptotes.forEach(asx => {
          const apx = ox + asx * scaleX;
          ctx.beginPath();
          ctx.moveTo(apx, 0);
          ctx.lineTo(apx, height);
          ctx.stroke();
        });
        ctx.restore();

        ctx.strokeStyle = isTan ? theme.amber : theme.purple;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        let penDown = false;
        let prevY = 0;
        for (let px = 0; px <= width; px += 1.5) {
          const x = xMin + (px / width) * (xMax - xMin);
          const denom = isTan ? Math.cos(x) : Math.sin(x);
          if (Math.abs(denom) < 0.04) {
            penDown = false;
            continue;
          }
          const yVal = isTan ? Math.tan(x) : Math.cos(x) / Math.sin(x);
          if (Math.abs(yVal) > 8) {
            penDown = false;
            continue;
          }
          const py = oy - yVal * scaleY;
          // Guard against jumping across vertical asymptotes
          if (penDown && Math.abs(py - prevY) > height * 0.7) {
            penDown = false;
          }
          if (!penDown) {
            ctx.moveTo(px, py);
            penDown = true;
          } else {
            ctx.lineTo(px, py);
          }
          prevY = py;
        }
        ctx.stroke();

        const validNow = isTan ? !cosZero : !sinZero;
        if (validNow) {
          const curVal = isTan ? sinV / cosV : cosV / sinV;
          if (Math.abs(curVal) < 6) {
            const curPx = ox + rad * scaleX;
            const curPy = oy - curVal * scaleY;
            ctx.beginPath();
            ctx.arc(curPx, curPy, 5.5, 0, TWO_PI);
            ctx.fillStyle = isTan ? theme.amber : theme.purple;
            ctx.fill();
          }
        }
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 3: HÌNH HỌC PHẲNG ĐỘNG - KÉO ĐIỂM TAM GIÁC, ĐƯỜNG TRÒN & CONIC (GIAI ĐOẠN 1)
  // =========================================================================
  class DynamicGeometrySim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'triangle', // 'triangle' | 'ellipse'
        // Triangle vertices in mathematical coordinates
        pts: [
          { label: 'A', x: -1.5, y: 3.0, color: '#ef4444' },
          { label: 'B', x: -4.0, y: -2.0, color: '#3b82f6' },
          { label: 'C', x: 4.0, y: -1.5, color: '#10b981' }
        ],
        showCircumcircle: true,
        showIncircle: true,
        showEuler: true,
        draggingIdx: -1,
        // Ellipse parameters
        ellipseA: 4.5,
        ellipseB: 2.8,
        ellipseThetaDeg: 55
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-draw-polygon"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 3: Hình Học Phẳng Động — Tam Giác, Đường Tròn &amp; Đường Elip</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Bài 6, 21 &amp; 22</span>
                </div>
                <p class="text-xs text-purple-100/90 mt-0.5">Kéo trực tiếp các đỉnh $A, B, C$ trên mặt phẳng tọa độ hoặc khảo sát tiêu điểm $F_1, F_2$ của Elip</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-mode="triangle" class="px-3 py-1.5 rounded-xl bg-white text-purple-900 font-bold text-xs cursor-pointer">1. Tam giác &amp; Đường tròn</button>
              <button data-mode="ellipse" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">2. Đường Elip (Conic)</button>
              <button data-act="reset" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Interactive Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="geom-canvas block w-full h-[330px] rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer"></canvas>
              <div class="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs" data-tri-toggles>
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-chk="showCircumcircle" checked class="accent-blue-600">
                  <span>Đường tròn ngoại tiếp $(O; R)$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-chk="showIncircle" checked class="accent-emerald-600">
                  <span>Đường tròn nội tiếp $(I; r)$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-chk="showEuler" checked class="accent-rose-600">
                  <span>Đường thẳng Euler ($O - G - H$)</span>
                </label>
              </div>
            </div>

            <!-- Right Measurements Panel (5 cols) -->
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-info-box class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Ellipse Sliders (shown in ellipse mode) -->
          <div data-ellipse-controls class="hidden p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Bán trục lớn ($a$)</label>
                <span class="font-bold text-indigo-600" data-disp="ea">4.5</span>
              </div>
              <input type="range" data-ctrl="ellipseA" min="2.0" max="6.0" step="0.2" value="4.5" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Bán trục nhỏ ($b &lt; a$)</label>
                <span class="font-bold text-emerald-600" data-disp="eb">2.8</span>
              </div>
              <input type="range" data-ctrl="ellipseB" min="1.0" max="5.0" step="0.2" value="2.8" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Vị trí điểm $M$ trên Elip ($\\theta$)</label>
                <span class="font-bold text-rose-600" data-disp="eth">55°</span>
              </div>
              <input type="range" data-ctrl="ellipseThetaDeg" min="0" max="360" step="2" value="55" class="w-full accent-rose-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.geom-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = b.dataset.mode === this.state.mode
              ? 'px-3 py-1.5 rounded-xl bg-white text-purple-900 font-bold text-xs cursor-pointer'
              : 'px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          c.querySelector('[data-tri-toggles]').classList.toggle('hidden', this.state.mode !== 'triangle');
          c.querySelector('[data-ellipse-controls]').classList.toggle('hidden', this.state.mode !== 'ellipse');
          this.renderAll();
        });
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.state.pts = [
          { label: 'A', x: -1.5, y: 3.0, color: '#ef4444' },
          { label: 'B', x: -4.0, y: -2.0, color: '#3b82f6' },
          { label: 'C', x: 4.0, y: -1.5, color: '#10b981' }
        ];
        this.state.ellipseA = 4.5;
        this.state.ellipseB = 2.8;
        this.state.ellipseThetaDeg = 55;
        this.renderAll();
      });

      c.querySelectorAll('[data-chk]').forEach(chk => {
        chk.addEventListener('change', e => {
          this.state[chk.dataset.chk] = e.target.checked;
          this.renderAll();
        });
      });

      ['ellipseA', 'ellipseB', 'ellipseThetaDeg'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (this.state.ellipseB >= this.state.ellipseA) {
            this.state.ellipseB = Math.max(1.0, this.state.ellipseA - 0.2);
            c.querySelector('[data-ctrl="ellipseB"]').value = this.state.ellipseB;
          }
          c.querySelector('[data-disp="ea"]').textContent = fmt(this.state.ellipseA, 1);
          c.querySelector('[data-disp="eb"]').textContent = fmt(this.state.ellipseB, 1);
          c.querySelector('[data-disp="eth"]').textContent = `${this.state.ellipseThetaDeg}°`;
          this.renderAll();
        });
      });

      // Drag vertices A, B, C
      const getScaleAndOrigin = () => {
        const rect = this.canvas.getBoundingClientRect();
        const w = rect.width || 460;
        const h = rect.height || 330;
        return { rect, w, h, ox: w / 2, oy: h / 2, scale: 32 };
      };

      const onDown = (clientX, clientY) => {
        if (this.state.mode !== 'triangle') return;
        const { rect, ox, oy, scale } = getScaleAndOrigin();
        const mx = (clientX - rect.left - ox) / scale;
        const my = -(clientY - rect.top - oy) / scale;
        let bestIdx = -1;
        let minDist = 0.65;
        this.state.pts.forEach((p, idx) => {
          const d = Math.hypot(p.x - mx, p.y - my);
          if (d < minDist) {
            minDist = d;
            bestIdx = idx;
          }
        });
        this.state.draggingIdx = bestIdx;
      };

      const onMove = (clientX, clientY) => {
        if (this.state.draggingIdx < 0 || this.state.mode !== 'triangle') return;
        const { rect, ox, oy, scale } = getScaleAndOrigin();
        const mx = clamp((clientX - rect.left - ox) / scale, -6.2, 6.2);
        const my = clamp(-(clientY - rect.top - oy) / scale, -4.4, 4.4);
        this.state.pts[this.state.draggingIdx].x = Math.round(mx * 4) / 4;
        this.state.pts[this.state.draggingIdx].y = Math.round(my * 4) / 4;
        this.renderAll();
      };

      this.canvas.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
        window.addEventListener('mouseup', () => { this.state.draggingIdx = -1; });
        window.addEventListener('resize', () => this.renderAll());
      }
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) onDown(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas.addEventListener('touchmove', e => {
        if (this.state.draggingIdx >= 0 && e.touches.length === 1) {
          onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });
      this.canvas.addEventListener('touchend', () => { this.state.draggingIdx = -1; });
    }

    renderAll() {
      const rect = this.canvas.getBoundingClientRect();
      const width = rect.width || 460;
      const height = rect.height || 330;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      const ox = width / 2;
      const oy = height / 2;
      const scale = 32;

      drawCoordinatePlane(ctx, width, height, ox, oy, scale, scale, theme);

      if (this.state.mode === 'triangle') {
        this.renderTriangleMode(ctx, ox, oy, scale, theme);
      } else {
        this.renderEllipseMode(ctx, ox, oy, scale, theme);
      }
    }

    renderTriangleMode(ctx, ox, oy, scale, theme) {
      const [A, B, C] = this.state.pts;
      const a = Math.hypot(B.x - C.x, B.y - C.y);
      const b = Math.hypot(A.x - C.x, A.y - C.y);
      const c = Math.hypot(A.x - B.x, A.y - B.y);
      const det = A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y);
      const area = Math.abs(det) / 2;
      const collinear = area < 0.08;

      // Centroid G
      const G = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };

      // Incenter I & inradius r
      const pSum = a + b + c;
      const I = {
        x: (a * A.x + b * B.x + c * C.x) / pSum,
        y: (a * A.y + b * B.y + c * C.y) / pSum
      };
      const rIn = collinear ? 0 : (2 * area) / pSum;

      // Circumcenter O & circumradius R
      let O = null, ROut = 0, H = null;
      if (!collinear) {
        const D = 2 * det;
        const aSq = A.x * A.x + A.y * A.y;
        const bSq = B.x * B.x + B.y * B.y;
        const cSq = C.x * C.x + C.y * C.y;
        O = {
          x: (aSq * (B.y - C.y) + bSq * (C.y - A.y) + cSq * (A.y - B.y)) / D,
          y: (aSq * (C.x - B.x) + bSq * (A.x - C.x) + cSq * (B.x - A.x)) / D
        };
        ROut = Math.hypot(A.x - O.x, A.y - O.y);
        // Orthocenter H using Euler relation: OH = 3*OG => H = 3G - 2O
        H = { x: 3 * G.x - 2 * O.x, y: 3 * G.y - 2 * O.y };
      }

      // Draw Circumcircle
      if (!collinear && this.state.showCircumcircle && ROut < 25) {
        ctx.save();
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 1.6;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.arc(ox + O.x * scale, oy - O.y * scale, ROut * scale, 0, TWO_PI);
        ctx.stroke();
        ctx.restore();
      }

      // Draw Incircle
      if (!collinear && this.state.showIncircle) {
        ctx.save();
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(ox + I.x * scale, oy - I.y * scale, rIn * scale, 0, TWO_PI);
        ctx.stroke();
        ctx.restore();
      }

      // Draw Triangle ABC
      ctx.save();
      ctx.fillStyle = 'rgba(99, 102, 241, 0.13)';
      ctx.strokeStyle = theme.indigo;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(ox + A.x * scale, oy - A.y * scale);
      ctx.lineTo(ox + B.x * scale, oy - B.y * scale);
      ctx.lineTo(ox + C.x * scale, oy - C.y * scale);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Euler line (O - G - H)
      if (!collinear && this.state.showEuler && O && H) {
        ctx.save();
        ctx.strokeStyle = theme.rose;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(ox + O.x * scale, oy - O.y * scale);
        ctx.lineTo(ox + H.x * scale, oy - H.y * scale);
        ctx.stroke();
        [
          { pt: G, name: 'G', col: '#f59e0b' },
          { pt: O, name: 'O', col: '#3b82f6' },
          { pt: H, name: 'H', col: '#f43f5e' }
        ].forEach(cPt => {
          const px = ox + cPt.pt.x * scale;
          const py = oy - cPt.pt.y * scale;
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, TWO_PI);
          ctx.fillStyle = cPt.col;
          ctx.fill();
          ctx.fillText(cPt.name, px + 5, py - 5);
        });
        ctx.restore();
      }

      // Draw draggable vertices A, B, C
      this.state.pts.forEach(p => {
        const px = ox + p.x * scale;
        const py = oy - p.y * scale;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, TWO_PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`${p.label}(${fmt(p.x, 1)}; ${fmt(p.y, 1)})`, px + 9, py - 7);
      });

      // Info Box
      const infoBox = this.container.querySelector('[data-info-box]');
      if (!infoBox) return;
      if (collinear) {
        infoBox.innerHTML = `
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-300 text-rose-800 dark:text-rose-200 font-bold">
            Trường hợp đặc biệt: Ba điểm A, B, C thẳng hàng (Diện tích S = 0). Không tồn tại tam giác và đường tròn ngoại tiếp!
          </div>
        `;
      } else {
        const angA = Math.acos(clamp((b * b + c * c - a * a) / (2 * b * c), -1, 1)) * RAD_TO_DEG;
        const angB = Math.acos(clamp((a * a + c * c - b * b) / (2 * a * c), -1, 1)) * RAD_TO_DEG;
        const angC = 180 - angA - angB;
        infoBox.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Thông Số Hình Học Tam Giác ABC</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Độ dài 3 cạnh (a, b, c)</div>
              <div class="font-bold mt-0.5">a=${fmt(a, 2)} • b=${fmt(b, 2)} • c=${fmt(c, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Số đo 3 góc</div>
              <div class="font-bold mt-0.5">Â=${fmt(angA, 1)}° • B̂=${fmt(angB, 1)}° • Ĉ=${fmt(angC, 1)}°</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Diện tích S &amp; Bán kính R, r</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">S = ${fmt(area, 2)} • R = ${fmt(ROut, 2)} • r = ${fmt(rIn, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Trọng tâm G &amp; Tâm ngoại tiếp O</div>
              <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">G(${fmt(G.x, 1)};${fmt(G.y, 1)}) • O(${fmt(O.x, 1)};${fmt(O.y, 1)})</div>
            </div>
            <div class="p-2.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 col-span-2">
              <div class="text-[10px] text-indigo-700 dark:text-indigo-300 font-semibold">Phương trình đường tròn ngoại tiếp (O; R):</div>
              <div class="font-mono font-bold text-indigo-900 dark:text-indigo-200 mt-0.5">(x ${O.x >= 0 ? '− ' + fmt(O.x, 2) : '+ ' + fmt(Math.abs(O.x), 2)})² + (y ${O.y >= 0 ? '− ' + fmt(O.y, 2) : '+ ' + fmt(Math.abs(O.y), 2)})² = ${fmt(ROut * ROut, 2)}</div>
            </div>
          </div>
        `;
      }
    }

    renderEllipseMode(ctx, ox, oy, scale, theme) {
      const a = this.state.ellipseA;
      const b = this.state.ellipseB;
      const c = Math.sqrt(Math.max(0, a * a - b * b));
      const e = c / a;
      const rad = this.state.ellipseThetaDeg * DEG_TO_RAD;
      const mx = a * Math.cos(rad);
      const my = b * Math.sin(rad);

      // Draw Ellipse
      ctx.save();
      ctx.strokeStyle = theme.indigo;
      ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.ellipse(ox, oy, a * scale, b * scale, 0, 0, TWO_PI);
      ctx.fill();
      ctx.stroke();

      // Foci F1, F2 and segments MF1, MF2
      const f1x = ox - c * scale;
      const f2x = ox + c * scale;
      const mpx = ox + mx * scale;
      const mpy = oy - my * scale;

      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(f1x, oy);
      ctx.lineTo(mpx, mpy);
      ctx.lineTo(f2x, oy);
      ctx.stroke();
      ctx.setLineDash([]);

      [
        { x: f1x, y: oy, l: `F₁(-${fmt(c, 2)}; 0)`, col: '#f59e0b' },
        { x: f2x, y: oy, l: `F₂(${fmt(c, 2)}; 0)`, col: '#f59e0b' },
        { x: mpx, y: mpy, l: `M(${fmt(mx, 2)}; ${fmt(my, 2)})`, col: '#ef4444' }
      ].forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 5.5, 0, TWO_PI);
        ctx.fillStyle = pt.col;
        ctx.fill();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(pt.l, pt.x - 24, pt.y - 10);
      });
      ctx.restore();

      const mf1 = Math.hypot(mx + c, my);
      const mf2 = Math.hypot(mx - c, my);
      const infoBox = this.container.querySelector('[data-info-box]');
      if (infoBox) {
        infoBox.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Phương Trình Chính Tắc Của Elip (E)</div>
          <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 font-mono font-bold text-center text-sm">
            x² / ${fmt(a * a, 2)} + y² / ${fmt(b * b, 2)} = 1
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tiêu cự 2c &amp; Tâm sai e = c/a</div>
              <div class="font-bold mt-0.5">c = ${fmt(c, 2)} • 2c = ${fmt(2 * c, 2)} • e = ${fmt(e, 3)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Bán kính qua tiêu MF₁ + MF₂ = 2a</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">${fmt(mf1, 2)} + ${fmt(mf2, 2)} = ${fmt(2 * a, 2)}</div>
            </div>
          </div>
        `;
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 4: KHẢO SÁT HÀM SỐ, ĐẠO HÀM, TIẾP TUYẾN & TÍCH PHÂN (GIAI ĐOẠN 2)
  // =========================================================================
  class CalculusExplorerSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        family: options.family || 'cubic', // 'cubic' | 'rational' | 'exp' | 'log'
        x0: options.x0 !== undefined ? options.x0 : 1.0,
        dx: 1.2,
        intA: -1.0,
        intB: 2.0,
        showTangent: true,
        showSecant: false,
        showIntegral: true,
        baseA: 2.0 // for exp / log
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    evalFn(x) {
      const f = this.state.family;
      if (f === 'cubic') {
        // y = x^3 - 3x
        return x * x * x - 3 * x;
      } else if (f === 'rational') {
        // y = (2x - 1) / (x - 1), vertical asymptote x = 1, horizontal asymptote y = 2
        if (Math.abs(x - 1.0) < 1e-4) return NaN;
        return (2 * x - 1) / (x - 1);
      } else if (f === 'exp') {
        return Math.pow(this.state.baseA, x);
      } else if (f === 'log') {
        if (x <= 1e-4) return NaN;
        return Math.log(x) / Math.log(this.state.baseA);
      }
      return 0;
    }

    evalDeriv(x) {
      const f = this.state.family;
      if (f === 'cubic') {
        return 3 * x * x - 3;
      } else if (f === 'rational') {
        if (Math.abs(x - 1.0) < 1e-4) return NaN;
        // ((2)(x-1) - (2x-1)(1)) / (x-1)^2 = -1 / (x-1)^2
        return -1 / ((x - 1) * (x - 1));
      } else if (f === 'exp') {
        return Math.pow(this.state.baseA, x) * Math.log(this.state.baseA);
      } else if (f === 'log') {
        if (x <= 1e-4) return NaN;
        return 1 / (x * Math.log(this.state.baseA));
      }
      return 0;
    }

    computeIntegral() {
      const a = Math.min(this.state.intA, this.state.intB);
      const b = Math.max(this.state.intA, this.state.intB);
      if (this.state.family === 'rational' && a <= 1.0 && b >= 1.0) {
        return { valid: false, reason: 'Khoảng tích phân chứa điểm gián đoạn x = 1 (Tiệm cận đứng)!' };
      }
      if (this.state.family === 'log' && a <= 0) {
        return { valid: false, reason: 'Hàm logarit chỉ xác định trên miền x > 0!' };
      }
      const N = 200;
      const h = (b - a) / N;
      let signedSum = 0;
      let areaSum = 0;
      for (let i = 0; i < N; i++) {
        const xm = a + (i + 0.5) * h;
        const ym = this.evalFn(xm);
        if (Number.isNaN(ym)) return { valid: false, reason: 'Không xác định trên đoạn lấy tích phân' };
        signedSum += ym * h;
        areaSum += Math.abs(ym) * h;
      }
      return { valid: true, signed: signedSum, area: areaSum, a, b };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-wave-square"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 4: Khảo Sát Hàm Số, Tiếp Tuyến Đạo Hàm &amp; Diện Tích Tích Phân</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 11 Bài 20, 31 • Toán 12 Bài 1, 3, 4, 13</span>
                </div>
                <p class="text-xs text-rose-100/90 mt-0.5">Khảo sát cực trị, tiệm cận đứng/ngang, tiếp tuyến tại $x_0$ và diện tích hình phẳng $S = \\int_a^b |f(x)|dx$</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button data-fam="cubic" class="px-2.5 py-1.5 rounded-xl bg-white text-rose-900 font-bold text-xs cursor-pointer">Bậc ba: x³ − 3x</button>
              <button data-fam="rational" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">Phân thức: (2x−1)/(x−1)</button>
              <button data-fam="exp" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">Hàm mũ: aˣ</button>
              <button data-fam="log" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">Logarit: logₐ(x)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="calc-canvas block w-full h-[330px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>
              <div class="mt-2 flex flex-wrap items-center gap-3 text-xs">
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-chk="showTangent" checked class="accent-rose-600">
                  <span>Tiếp tuyến tại $x_0$ ($y = f'(x_0)(x-x_0)+f(x_0)$)</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-chk="showSecant" class="accent-amber-600">
                  <span>Cát tuyến qua $(x_0, x_0+\\Delta x)$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" data-chk="showIntegral" checked class="accent-emerald-600">
                  <span>Tô diện tích hình phẳng $\\int_a^b |f(x)|dx$</span>
                </label>
              </div>
            </div>

            <!-- Analysis Panel (5 cols) -->
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-3">
              <div data-calc-summary class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Hoành độ tiếp điểm ($x_0$)</label>
                <span class="font-bold text-rose-600" data-disp="x0">1.0</span>
              </div>
              <input type="range" data-ctrl="x0" min="-3.0" max="3.5" step="0.1" value="1.0" class="w-full accent-rose-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Cận dưới tích phân ($a$)</label>
                <span class="font-bold text-emerald-600" data-disp="intA">-1.0</span>
              </div>
              <input type="range" data-ctrl="intA" min="-3.0" max="3.0" step="0.2" value="-1.0" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Cận trên tích phân ($b$)</label>
                <span class="font-bold text-emerald-600" data-disp="intB">2.0</span>
              </div>
              <input type="range" data-ctrl="intB" min="-2.0" max="4.0" step="0.2" value="2.0" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Cơ số $a$ (Hàm mũ/log)</label>
                <span class="font-bold text-indigo-600" data-disp="baseA">2.0</span>
              </div>
              <input type="range" data-ctrl="baseA" min="0.4" max="3.0" step="0.2" value="2.0" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.calc-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-fam]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.family = btn.dataset.fam;
          c.querySelectorAll('[data-fam]').forEach(b => {
            b.className = b.dataset.fam === this.state.family
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-rose-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          if (this.state.family === 'log') {
            this.state.x0 = Math.max(0.5, this.state.x0);
            this.state.intA = 0.5;
            this.state.intB = 3.0;
          } else if (this.state.family === 'rational') {
            this.state.x0 = 2.0;
            this.state.intA = 1.4;
            this.state.intB = 3.4;
          }
          ['x0', 'intA', 'intB'].forEach(k => {
            const inp = c.querySelector(`[data-ctrl="${k}"]`);
            const disp = c.querySelector(`[data-disp="${k}"]`);
            if (inp) inp.value = this.state[k];
            if (disp) disp.textContent = fmt(this.state[k], 1);
          });
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-chk]').forEach(chk => {
        chk.addEventListener('change', e => {
          this.state[chk.dataset.chk] = e.target.checked;
          this.renderAll();
        });
      });

      ['x0', 'intA', 'intB', 'baseA'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          let v = parseFloat(e.target.value);
          if (k === 'baseA' && Math.abs(v - 1.0) < 0.08) v = 1.2;
          this.state[k] = v;
          if (disp) disp.textContent = fmt(v, 1);
          this.renderAll();
        });
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const rect = this.canvas.getBoundingClientRect();
      const width = rect.width || 460;
      const height = rect.height || 330;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      const scale = 36;
      const ox = width * 0.45;
      const oy = height * 0.55;

      drawCoordinatePlane(ctx, width, height, ox, oy, scale, scale, theme);

      // Shaded Integral Area
      const intRes = this.computeIntegral();
      if (this.state.showIntegral && intRes.valid) {
        ctx.save();
        ctx.fillStyle = 'rgba(16, 185, 129, 0.22)';
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.55)';
        const NRect = 28;
        const step = (intRes.b - intRes.a) / NRect;
        for (let i = 0; i < NRect; i++) {
          const xL = intRes.a + i * step;
          const xm = xL + 0.5 * step;
          const ym = this.evalFn(xm);
          if (Number.isNaN(ym)) continue;
          const px = ox + xL * scale;
          const pw = step * scale;
          const py = oy - Math.max(0, ym) * scale;
          const ph = Math.abs(ym) * scale;
          ctx.fillRect(px, ym >= 0 ? py : oy, pw, ph);
          ctx.strokeRect(px, ym >= 0 ? py : oy, pw, ph);
        }
        ctx.restore();
      }

      // Asymptotes for Rational / Exp / Log
      ctx.save();
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = theme.amber;
      ctx.lineWidth = 1.6;
      if (this.state.family === 'rational') {
        // Vertical x = 1, Horizontal y = 2
        const vx = ox + 1.0 * scale;
        const hy = oy - 2.0 * scale;
        ctx.beginPath();
        ctx.moveTo(vx, 0);
        ctx.lineTo(vx, height);
        ctx.moveTo(0, hy);
        ctx.lineTo(width, hy);
        ctx.stroke();
      }
      ctx.restore();

      // Plot function f(x) without connecting across discontinuities
      ctx.save();
      ctx.strokeStyle = theme.blue;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      let penDown = false;
      let prevPy = 0;
      for (let px = 0; px <= width; px += 1.5) {
        const x = (px - ox) / scale;
        if (this.state.family === 'rational' && Math.abs(x - 1.0) < 0.035) {
          penDown = false;
          continue;
        }
        const y = this.evalFn(x);
        if (Number.isNaN(y) || !Number.isFinite(y) || Math.abs(y) > 25) {
          penDown = false;
          continue;
        }
        const py = oy - y * scale;
        if (penDown && Math.abs(py - prevPy) > height * 0.75) {
          penDown = false;
        }
        if (!penDown) {
          ctx.moveTo(px, py);
          penDown = true;
        } else {
          ctx.lineTo(px, py);
        }
        prevPy = py;
      }
      ctx.stroke();
      ctx.restore();

      // Tangent line at x0
      const x0 = this.state.x0;
      const y0 = this.evalFn(x0);
      const dy0 = this.evalDeriv(x0);
      if (this.state.showTangent && !Number.isNaN(y0) && !Number.isNaN(dy0)) {
        ctx.save();
        ctx.strokeStyle = theme.rose;
        ctx.lineWidth = 2;
        ctx.beginPath();
        const xLeft = -6, xRight = 7;
        const yLeft = dy0 * (xLeft - x0) + y0;
        const yRight = dy0 * (xRight - x0) + y0;
        ctx.moveTo(ox + xLeft * scale, oy - yLeft * scale);
        ctx.lineTo(ox + xRight * scale, oy - yRight * scale);
        ctx.stroke();

        const p0x = ox + x0 * scale;
        const p0y = oy - y0 * scale;
        ctx.beginPath();
        ctx.arc(p0x, p0y, 6, 0, TWO_PI);
        ctx.fillStyle = theme.rose;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      // Secant line
      if (this.state.showSecant && !Number.isNaN(y0)) {
        const x1 = x0 + this.state.dx;
        const y1 = this.evalFn(x1);
        if (!Number.isNaN(y1)) {
          const mSec = (y1 - y0) / (x1 - x0);
          ctx.save();
          ctx.setLineDash([4, 3]);
          ctx.strokeStyle = theme.amber;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          const xL = -6, xR = 7;
          ctx.moveTo(ox + xL * scale, oy - (mSec * (xL - x0) + y0) * scale);
          ctx.lineTo(ox + xR * scale, oy - (mSec * (xR - x0) + y0) * scale);
          ctx.stroke();
          ctx.restore();
        }
      }

      // Update Summary Panel
      const box = this.container.querySelector('[data-calc-summary]');
      if (!box) return;
      let domainDesc = '';
      if (this.state.family === 'cubic') {
        domainDesc = 'TXĐ: D = ℝ • Cực đại: (-1; 2), Cực tiểu: (1; -2), Tâm đối xứng I(0; 0)';
      } else if (this.state.family === 'rational') {
        domainDesc = 'TXĐ: D = ℝ \\ {1} • Tiệm cận đứng: x = 1 • Tiệm cận ngang: y = 2 • Nghịch biến trên từng khoảng xác định';
      } else if (this.state.family === 'exp') {
        domainDesc = `TXĐ: D = ℝ • Tiệm cận ngang: y = 0 (Ox) • Cơ số a = ${fmt(this.state.baseA)} (${this.state.baseA > 1 ? 'Đồng biến' : 'Nghịch biến'})`;
      } else {
        domainDesc = `TXĐ: D = (0; +∞) • Tiệm cận đứng: x = 0 (Oy) • Cơ số a = ${fmt(this.state.baseA)} (${this.state.baseA > 1 ? 'Đồng biến' : 'Nghịch biến'})`;
      }

      const tangentText = Number.isNaN(y0)
        ? `Không xác định tại x₀ = ${fmt(x0)}`
        : `M₀(${fmt(x0)}; ${fmt(y0)}) • Hệ số góc f'(${fmt(x0)}) = ${fmt(dy0)} ⇒ y = ${fmt(dy0)}(x − ${fmt(x0)}) + ${fmt(y0)}`;

      const intText = intRes.valid
        ? `∫ f(x)dx = ${fmt(intRes.signed, 3)} • Diện tích hình phẳng S = ∫|f(x)|dx = ${fmt(intRes.area, 3)}`
        : intRes.reason;

      box.innerHTML = `
        <div class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Bảng Phân Tích Giải Tích 11 &amp; 12</div>
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div class="text-[10px] text-slate-500">Tập xác định, Cực trị &amp; Tiệm cận</div>
          <div class="font-semibold mt-0.5">${domainDesc}</div>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800">
          <div class="text-[10px] text-rose-600 dark:text-rose-400 font-bold">Đạo hàm &amp; Phương trình tiếp tuyến tại x₀</div>
          <div class="font-mono font-bold text-rose-900 dark:text-rose-200 mt-0.5">${tangentText}</div>
        </div>
        <div class="p-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
          <div class="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">Tích phân &amp; Diện tích trên đoạn [${fmt(Math.min(this.state.intA, this.state.intB))}; ${fmt(Math.max(this.state.intA, this.state.intB))}]</div>
          <div class="font-bold text-emerald-900 dark:text-emerald-200 mt-0.5">${intText}</div>
        </div>
      `;
    }
  }

  // =========================================================================
  // MÔ PHỎNG 5: HÌNH HỌC KHÔNG GIAN 3D & HỆ TỌA ĐỘ OXYZ (GIAI ĐOẠN 2)
  // =========================================================================
  class SpatialGeometry3DSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        solid: options.solid || 'pyramid4', // 'pyramid4' | 'prism3' | 'box'
        a: 4.0,     // cạnh đáy
        h: 5.0,     // chiều cao SO hoặc AA'
        cutRatio: 0.45, // tỉ số thiết diện k = SM/SA
        rotX: 0.42,
        rotY: -0.62,
        zoom: 1.0,
        autoRotate: false,
        dragging: false,
        lastX: 0,
        lastY: 0
      };

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-cube"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 5: Hình Học Không Gian 3D &amp; Tọa Độ $Oxyz$</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 11 Bài 26, 27 • Toán 12 Bài 7, 14, 16</span>
                </div>
                <p class="text-xs text-cyan-100/90 mt-0.5">Xoay $360^\\circ$ khối chóp, lăng trụ, hình hộp; quan sát thiết diện song song đáy, góc, khoảng cách và tọa độ đỉnh</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-solid="pyramid4" class="px-2.5 py-1.5 rounded-xl bg-white text-blue-900 font-bold text-xs cursor-pointer">Chóp tứ giác đều S.ABCD</button>
              <button data-solid="prism3" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">Lăng trụ đứng ABC.A'B'C'</button>
              <button data-solid="box" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">Hình hộp Oxyz</button>
              <button data-act="autorot" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-arrows-rotate"></i> Tự xoay
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- 3D Viewport (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-950 relative border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="spatial-3d-canvas block w-full h-[330px] rounded-xl border border-slate-800 cursor-grab active:cursor-grabbing"></canvas>
              <div class="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span><i class="fa-solid fa-hand-pointer mr-1 text-cyan-400"></i>Kéo chuột / ngón tay để xoay 360° • Thiết diện màu vàng cam</span>
                <div class="flex items-center gap-1">
                  <button data-zoom="in" class="px-2 py-0.5 rounded bg-slate-800 text-white font-bold cursor-pointer">+</button>
                  <button data-zoom="out" class="px-2 py-0.5 rounded bg-slate-800 text-white font-bold cursor-pointer">−</button>
                </div>
              </div>
            </div>

            <!-- 3D Metrics & Oxyz Coordinates (5 cols) -->
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-spatial-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Cạnh đáy ($a$)</label>
                <span class="font-bold text-blue-600" data-disp="a">4.0</span>
              </div>
              <input type="range" data-ctrl="a" min="2.0" max="6.0" step="0.5" value="4.0" class="w-full accent-blue-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Chiều cao ($h = SO$)</label>
                <span class="font-bold text-indigo-600" data-disp="h">5.0</span>
              </div>
              <input type="range" data-ctrl="h" min="2.0" max="7.0" step="0.5" value="5.0" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Vị trí mặt phẳng thiết diện ($k = SM/SA$)</label>
                <span class="font-bold text-amber-600" data-disp="cutRatio">0.45</span>
              </div>
              <input type="range" data-ctrl="cutRatio" min="0.15" max="0.85" step="0.05" value="0.45" class="w-full accent-amber-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.spatial-3d-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-solid]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.solid = btn.dataset.solid;
          c.querySelectorAll('[data-solid]').forEach(b => {
            b.className = b.dataset.solid === this.state.solid
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-blue-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          this.renderAll();
        });
      });

      c.querySelector('[data-act="autorot"]').addEventListener('click', () => {
        this.state.autoRotate = !this.state.autoRotate;
      });

      c.querySelectorAll('[data-zoom]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.zoom = clamp(this.state.zoom + (btn.dataset.zoom === 'in' ? 0.15 : -0.15), 0.6, 1.8);
          this.renderAll();
        });
      });

      ['a', 'h', 'cutRatio'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = fmt(this.state[k], 2);
          this.renderAll();
        });
      });

      const startDrag = (x, y) => {
        this.state.dragging = true;
        this.state.autoRotate = false;
        this.state.lastX = x;
        this.state.lastY = y;
      };
      const moveDrag = (x, y) => {
        if (!this.state.dragging) return;
        this.state.rotY += (x - this.state.lastX) * 0.011;
        this.state.rotX = clamp(this.state.rotX + (y - this.state.lastY) * 0.011, -1.3, 1.3);
        this.state.lastX = x;
        this.state.lastY = y;
        this.renderAll();
      };
      const endDrag = () => { this.state.dragging = false; };

      this.canvas.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
        window.addEventListener('mouseup', endDrag);
        window.addEventListener('resize', () => this.renderAll());
      }
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas.addEventListener('touchmove', e => {
        if (this.state.dragging && e.touches.length === 1) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas.addEventListener('touchend', endDrag);
    }

    setupObserver() {
      this.inView = true;
      if (typeof IntersectionObserver !== 'undefined') {
        this.observer = new IntersectionObserver(entries => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.08 });
        this.observer.observe(this.container);
      }
    }

    start() {
      this.renderAll();
      const loop = () => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.autoRotate || !this.inView || document.hidden) return;
        this.state.rotY += 0.01;
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    project3D(pt, cx, cy, scale) {
      // In math Oxyz: Z is vertical (up), X is forward-left, Y is right
      // Map (X, Y, Z) -> camera space (xCam, yCam, zCam)
      const x0 = pt.x;
      const y0 = pt.z - this.state.h * 0.35;
      const z0 = pt.y;

      const cosY = Math.cos(this.state.rotY), sinY = Math.sin(this.state.rotY);
      const x1 = x0 * cosY + z0 * sinY;
      const z1 = -x0 * sinY + z0 * cosY;

      const cosX = Math.cos(this.state.rotX), sinX = Math.sin(this.state.rotX);
      const y2 = y0 * cosX - z1 * sinX;
      const z2 = y0 * sinX + z1 * cosX;

      const fov = 18 / (18 + z2 * 0.35);
      return {
        px: cx + x1 * scale * fov,
        py: cy - y2 * scale * fov
      };
    }

    renderAll() {
      const rect = this.canvas.getBoundingClientRect();
      const width = rect.width || 460;
      const height = rect.height || 330;
      const { ctx } = setupCanvas(this.canvas, width, height);

      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.56;
      const scale = 28 * this.state.zoom;
      const { a, h, cutRatio } = this.state;
      const half = a / 2;

      // Draw Oxyz axes
      const O = { x: 0, y: 0, z: 0 };
      const axes = [
        { to: { x: half + 1.8, y: 0, z: 0 }, label: 'x', col: '#ef4444' },
        { to: { x: 0, y: half + 1.8, z: 0 }, label: 'y', col: '#22c55e' },
        { to: { x: 0, y: 0, z: h + 1.2 }, label: 'z', col: '#38bdf8' }
      ];
      const pO = this.project3D(O, cx, cy, scale);
      axes.forEach(ax => {
        const pTo = this.project3D(ax.to, cx, cy, scale);
        ctx.strokeStyle = ax.col;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(pO.px, pO.py);
        ctx.lineTo(pTo.px, pTo.py);
        ctx.stroke();
        ctx.fillStyle = ax.col;
        ctx.font = 'bold 11px monospace';
        ctx.fillText(ax.label, pTo.px + 4, pTo.py - 4);
      });

      const lerpPt = (P, Q, t) => ({
        x: P.x + (Q.x - P.x) * t,
        y: P.y + (Q.y - P.y) * t,
        z: P.z + (Q.z - P.z) * t
      });

      let vertices = [];
      let edges = [];
      let sectionPoly = [];
      let infoHtml = '';

      if (this.state.solid === 'pyramid4') {
        const S = { l: 'S', x: 0, y: 0, z: h };
        const A = { l: 'A', x: -half, y: -half, z: 0 };
        const B = { l: 'B', x: half, y: -half, z: 0 };
        const C = { l: 'C', x: half, y: half, z: 0 };
        const D = { l: 'D', x: -half, y: half, z: 0 };
        vertices = [S, A, B, C, D];
        edges = [
          [S, A], [S, B], [S, C], [S, D],
          [A, B], [B, C], [C, D], [D, A]
        ];
        sectionPoly = [A, B, C, D].map(V => lerpPt(S, V, cutRatio));

        // Altitude SO
        const pS = this.project3D(S, cx, cy, scale);
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#f43f5e';
        ctx.beginPath();
        ctx.moveTo(pS.px, pS.py);
        ctx.lineTo(pO.px, pO.py);
        ctx.stroke();
        ctx.restore();

        const baseArea = a * a;
        const vol = (1 / 3) * baseArea * h;
        const secArea = baseArea * cutRatio * cutRatio;
        const slantEdge = Math.hypot(h, (a * Math.sqrt(2)) / 2);
        const angleEdgeBase = Math.atan2(h, (a * Math.sqrt(2)) / 2) * RAD_TO_DEG;
        const dOToSBC = (h * (a / 2)) / Math.hypot(h, a / 2);

        infoHtml = `
          <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Hình Chóp Tứ Giác Đều S.ABCD (Oxyz)</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Thể tích V = ⅓·S_đáy·h</div>
              <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">V = ${fmt(vol, 2)} (đvtt)</div>
            </div>
            <div class="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
              <div class="text-[10px] text-amber-700 dark:text-amber-300">Diện tích thiết diện S_td = k²·S_đáy</div>
              <div class="font-bold text-amber-600 dark:text-amber-400 mt-0.5">S_td = ${fmt(secArea, 2)} (k=${fmt(cutRatio)})</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Góc giữa cạnh bên SA và (ABCD)</div>
              <div class="font-bold mt-0.5">(SA, AO) = ${fmt(angleEdgeBase, 1)}° • SA = ${fmt(slantEdge, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Khoảng cách d(O, (SBC))</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">d = ${fmt(dOToSBC, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-2 font-mono text-[11px]">
              Tọa độ: S(0; 0; ${fmt(h, 1)}) • A(-${fmt(half, 1)}; -${fmt(half, 1)}; 0) • C(${fmt(half, 1)}; ${fmt(half, 1)}; 0)
            </div>
          </div>
        `;
      } else if (this.state.solid === 'prism3') {
        const r = a / Math.sqrt(3);
        const A = { l: 'A', x: r, y: 0, z: 0 };
        const B = { l: 'B', x: -r / 2, y: a / 2, z: 0 };
        const C = { l: 'C', x: -r / 2, y: -a / 2, z: 0 };
        const A1 = { l: "A'", x: r, y: 0, z: h };
        const B1 = { l: "B'", x: -r / 2, y: a / 2, z: h };
        const C1 = { l: "C'", x: -r / 2, y: -a / 2, z: h };
        vertices = [A, B, C, A1, B1, C1];
        edges = [
          [A, B], [B, C], [C, A],
          [A1, B1], [B1, C1], [C1, A1],
          [A, A1], [B, B1], [C, C1]
        ];
        sectionPoly = [
          lerpPt(A1, A, cutRatio),
          lerpPt(B1, B, cutRatio),
          lerpPt(C1, C, cutRatio)
        ];
        const baseArea = (a * a * Math.sqrt(3)) / 4;
        const vol = baseArea * h;
        infoHtml = `
          <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Lăng Trụ Tam Giác Đều ABC.A'B'C'</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Diện tích đáy S_ABC = a²√3/4</div>
              <div class="font-bold mt-0.5">S_đáy = ${fmt(baseArea, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Thể tích lăng trụ V = S_đáy · h</div>
              <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">V = ${fmt(vol, 2)}</div>
            </div>
          </div>
        `;
      } else {
        const A = { l: 'A', x: -half, y: -half, z: 0 };
        const B = { l: 'B', x: half, y: -half, z: 0 };
        const C = { l: 'C', x: half, y: half, z: 0 };
        const D = { l: 'D', x: -half, y: half, z: 0 };
        const A1 = { l: "A'", x: -half, y: -half, z: h };
        const B1 = { l: "B'", x: half, y: -half, z: h };
        const C1 = { l: "C'", x: half, y: half, z: h };
        const D1 = { l: "D'", x: -half, y: half, z: h };
        vertices = [A, B, C, D, A1, B1, C1, D1];
        edges = [
          [A, B], [B, C], [C, D], [D, A],
          [A1, B1], [B1, C1], [C1, D1], [D1, A1],
          [A, A1], [B, B1], [C, C1], [D, D1]
        ];
        sectionPoly = [
          lerpPt(A1, A, cutRatio),
          lerpPt(B1, B, cutRatio),
          lerpPt(C1, C, cutRatio),
          lerpPt(D1, D, cutRatio)
        ];
        const diag = Math.sqrt(a * a + a * a + h * h);
        infoHtml = `
          <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Hình Hộp Đứng ABCD.A'B'C'D' Trong Oxyz</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Thể tích V = a² · h</div>
              <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">V = ${fmt(a * a * h, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Đường chéo AC' = √(2a² + h²)</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">d = ${fmt(diag, 2)}</div>
            </div>
          </div>
        `;
      }

      // Draw Cross-Section Polygon
      if (sectionPoly.length >= 3) {
        ctx.save();
        ctx.fillStyle = 'rgba(245, 158, 11, 0.35)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        sectionPoly.forEach((pt, idx) => {
          const p = this.project3D(pt, cx, cy, scale);
          if (idx === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      // Draw Wireframe Edges
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2;
      edges.forEach(([P, Q]) => {
        const p1 = this.project3D(P, cx, cy, scale);
        const p2 = this.project3D(Q, cx, cy, scale);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Draw Vertices
      vertices.forEach(V => {
        const p = this.project3D(V, cx, cy, scale);
        ctx.beginPath();
        ctx.arc(p.px, p.py, 4.5, 0, TWO_PI);
        ctx.fillStyle = '#38bdf8';
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(V.l, p.px + 6, p.py - 6);
      });

      const infoEl = this.container.querySelector('[data-spatial-info]');
      if (infoEl) infoEl.innerHTML = infoHtml;
    }
  }

  // =========================================================================
  // MÔ PHỎNG 6: XÁC SUẤT THỰC NGHIỆM & THỐNG KÊ MẪU SỐ LIỆU (GIAI ĐOẠN 3)
  // =========================================================================
  class ProbabilityStatsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        expType: options.expType || 'dice2', // 'dice2' (tổng 2 xúc xắc 2..12) | 'binomial10' (số mặt ngửa trong 10 đồng xu 0..10)
        counts: {},
        samples: [],
        totalTrials: 0
      };

      this.resetData();
      this.initDOM();
      this.bindEvents();
      this.runTrials(50); // Khởi tạo mẫu 50 phép thử ban đầu
    }

    resetData() {
      this.state.counts = {};
      this.state.samples = [];
      this.state.totalTrials = 0;
      const keys = this.state.expType === 'dice2'
        ? [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      keys.forEach(k => { this.state.counts[k] = 0; });
    }

    theoreticalProb(k) {
      if (this.state.expType === 'dice2') {
        const ways = 6 - Math.abs(7 - k);
        return ways / 36;
      } else {
        // C(10, k) * 0.5^10
        const comb = nCr(10, k);
        return comb / 1024;
      }
    }

    runTrials(n) {
      for (let i = 0; i < n; i++) {
        let val = 0;
        if (this.state.expType === 'dice2') {
          const d1 = 1 + Math.floor(Math.random() * 6);
          const d2 = 1 + Math.floor(Math.random() * 6);
          val = d1 + d2;
        } else {
          let heads = 0;
          for (let c = 0; c < 10; c++) {
            if (Math.random() < 0.5) heads++;
          }
          val = heads;
        }
        this.state.counts[val] = (this.state.counts[val] || 0) + 1;
        this.state.samples.push(val);
        this.state.totalTrials++;
      }
      this.renderAll();
    }

    computeStats() {
      const N = this.state.totalTrials;
      if (N === 0) return null;
      const sorted = [...this.state.samples].sort((a, b) => a - b);
      const sum = sorted.reduce((acc, v) => acc + v, 0);
      const mean = sum / N;
      const variance = sorted.reduce((acc, v) => acc + (v - mean) * (v - mean), 0) / N;
      const stdDev = Math.sqrt(variance);

      const medianOfSlice = arr => {
        const m = Math.floor(arr.length / 2);
        return arr.length % 2 !== 0 ? arr[m] : (arr[m - 1] + arr[m]) / 2;
      };
      const q2 = medianOfSlice(sorted);
      const half = Math.floor(sorted.length / 2);
      const lower = sorted.slice(0, half);
      const upper = sorted.length % 2 === 0 ? sorted.slice(half) : sorted.slice(half + 1);
      const q1 = lower.length ? medianOfSlice(lower) : q2;
      const q3 = upper.length ? medianOfSlice(upper) : q2;

      return { N, mean, variance, stdDev, q1, q2, q3, iqr: q3 - q1 };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-dice"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 6: Thí Nghiệm Xác Suất Ngẫu Nhiên &amp; Thống Kê Mẫu Số Liệu</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 Bài 13, 14, 27 • Toán 12 Bài 9, 10</span>
                </div>
                <p class="text-xs text-amber-100/90 mt-0.5">Kiểm chứng Luật số lớn (Tần suất thực nghiệm $f_i \\to P(A)$) và tự động tính $\\bar{x}, Q_1, Q_2, Q_3, \\Delta_Q, s^2, s$</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button data-exp="dice2" class="px-2.5 py-1.5 rounded-xl bg-white text-amber-900 font-bold text-xs cursor-pointer">Gieo 2 Xúc xắc (Tổng 2..12)</button>
              <button data-exp="binomial10" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">Tung 10 Đồng xu B(10; 0.5)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Histogram Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="prob-canvas block w-full h-[290px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>
              <div class="mt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-amber-500 inline-block"></span> Tần suất thực nghiệm $f_k = n_k / N$</span>
                <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-blue-600 inline-block"></span> Xác suất lý thuyết $P(X = k)$</span>
              </div>
            </div>

            <!-- Statistical Indicators (5 cols) -->
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-stats-box class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="p-4 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <button data-run="1" class="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer">+1 phép thử</button>
              <button data-run="10" class="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer">+10 phép thử</button>
              <button data-run="100" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer">+100 phép thử</button>
              <button data-run="1000" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer">+1000 phép thử (Luật số lớn)</button>
            </div>
            <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-300 font-bold text-xs cursor-pointer">
              <i class="fa-solid fa-rotate-left"></i> Đặt lại mẫu (N = 0)
            </button>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.prob-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-exp]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.expType = btn.dataset.exp;
          c.querySelectorAll('[data-exp]').forEach(b => {
            b.className = b.dataset.exp === this.state.expType
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-amber-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          this.resetData();
          this.runTrials(50);
        });
      });

      c.querySelectorAll('[data-run]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.runTrials(parseInt(btn.dataset.run, 10));
        });
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.resetData();
        this.renderAll();
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const rect = this.canvas.getBoundingClientRect();
      const width = rect.width || 460;
      const height = rect.height || 290;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();

      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      const keys = Object.keys(this.state.counts).map(Number).sort((a, b) => a - b);
      const padL = 38, padR = 16, padT = 22, padB = 28;
      const plotW = width - padL - padR;
      const plotH = height - padT - padB;
      const maxProb = 0.28;

      // Axes
      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL, height - padB);
      ctx.lineTo(width - padR, height - padB);
      ctx.stroke();

      const colW = plotW / keys.length;
      const N = Math.max(1, this.state.totalTrials);

      keys.forEach((k, idx) => {
        const empFreq = this.state.totalTrials > 0 ? (this.state.counts[k] || 0) / N : 0;
        const theoP = this.theoreticalProb(k);

        const xCenter = padL + (idx + 0.5) * colW;
        const barW = colW * 0.58;
        const barH = clamp((empFreq / maxProb) * plotH, 0, plotH);

        // Empirical Bar
        ctx.fillStyle = theme.amber;
        ctx.fillRect(xCenter - barW / 2, height - padB - barH, barW, barH);

        // Theoretical marker
        const theoY = height - padB - (theoP / maxProb) * plotH;
        ctx.beginPath();
        ctx.arc(xCenter, theoY, 4.5, 0, TWO_PI);
        ctx.fillStyle = theme.blue;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label k
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(String(k), xCenter, height - 10);
      });

      const stats = this.computeStats();
      const box = this.container.querySelector('[data-stats-box]');
      if (!box) return;
      if (!stats) {
        box.innerHTML = `<div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-center font-semibold">Hãy bấm "+10" hoặc "+100 phép thử" để bắt đầu thu thập mẫu số liệu!</div>`;
        return;
      }

      box.innerHTML = `
        <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Các Số Đặc Trưng Đo Xu Thế Trung Tâm &amp; Độ Phân Tán</div>
        <div class="grid grid-cols-2 gap-2">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div class="text-[10px] text-slate-500">Kích thước mẫu (N) &amp; Số trung bình (x̄)</div>
            <div class="font-bold text-amber-600 dark:text-amber-400 mt-0.5">N = ${stats.N} • x̄ = ${fmt(stats.mean, 3)}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div class="text-[10px] text-slate-500">Trung vị M_e (Q₂)</div>
            <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">M_e = ${fmt(stats.q2, 2)}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div class="text-[10px] text-slate-500">Tứ phân vị Q₁, Q₃ &amp; Khoảng Δ_Q</div>
            <div class="font-bold mt-0.5">Q₁=${fmt(stats.q1, 1)} • Q₃=${fmt(stats.q3, 1)} • Δ_Q=${fmt(stats.iqr, 1)}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div class="text-[10px] text-slate-500">Phương sai s² &amp; Độ lệch chuẩn s</div>
            <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">s² = ${fmt(stats.variance, 3)} • s = ${fmt(stats.stdDev, 3)}</div>
          </div>
        </div>
      `;
    }
  }

  function nCr(n, r) {
    if (r < 0 || r > n) return 0;
    let res = 1;
    for (let i = 1; i <= r; i++) {
      res = (res * (n - i + 1)) / i;
    }
    return Math.round(res);
  }

  return {
    QuadraticGraphSim,
    TrigCircleSim,
    DynamicGeometrySim,
    CalculusExplorerSim,
    SpatialGeometry3DSim,
    ProbabilityStatsSim,
    create(type, container, options = {}) {
      switch ((type || '').toLowerCase()) {
        case 'quadratic':
        case 'parabola':
          return new QuadraticGraphSim(container, options);
        case 'trig':
        case 'trig_circle':
          return new TrigCircleSim(container, options);
        case 'geometry':
        case 'dynamic_geometry':
          return new DynamicGeometrySim(container, options);
        case 'calculus':
        case 'calculus_explorer':
          return new CalculusExplorerSim(container, options);
        case 'spatial':
        case 'spatial_3d':
          return new SpatialGeometry3DSim(container, options);
        case 'probability':
        case 'probability_stats':
          return new ProbabilityStatsSim(container, options);
        default:
          return new QuadraticGraphSim(container, options);
      }
    }
  };
});
