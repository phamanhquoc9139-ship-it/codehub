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
    const de = document.documentElement;
    const db = document.body;
    return (de && de.classList && de.classList.contains('dark')) || (db && db.classList && db.classList.contains('dark'));
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

  function getCanvasMetrics(canvas, desktopHeight = 440, mobileHeight = 350) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const targetH = isMobile ? mobileHeight : desktopHeight;
    let w = 0;
    if (canvas && canvas.parentElement) {
      const style = typeof window !== 'undefined' && window.getComputedStyle ? window.getComputedStyle(canvas.parentElement) : null;
      const padX = style ? (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.paddingRight) || 0) : 32;
      w = (canvas.parentElement.clientWidth || 0) - padX;
    }
    if (w < 200 && canvas && typeof canvas.getBoundingClientRect === 'function') {
      const rect = canvas.getBoundingClientRect();
      if (rect && rect.width >= 200) w = rect.width;
    }
    const targetW = Math.max(280, Math.round(w >= 200 ? w : (isMobile ? 330 : 540)));
    return { width: targetW, height: targetH, isMobile };
  }

  function setupCanvas(canvas, width, height) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const minH = isMobile ? 300 : 380;
    const metrics = getCanvasMetrics(canvas, 440, 350);
    const safeW = Math.max(280, Math.round(width && width >= 200 ? width : metrics.width));
    const safeH = Math.max(minH, Math.round(height && height >= minH ? height : metrics.height));
    const dpr = Math.min((typeof window !== 'undefined' && window.devicePixelRatio) || 1, 2);
    canvas.width = Math.round(safeW * dpr);
    canvas.height = Math.round(safeH * dpr);
    canvas.style.width = '100%';
    canvas.style.height = safeH + 'px';
    canvas.style.minHeight = safeH + 'px';
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, width: safeW, height: safeH, dpr };
  }

  function attachCanvasResizeObserver(instance, targetEl) {
    if (typeof window === 'undefined' || !instance || typeof instance.renderAll !== 'function') return;
    const reRender = () => {
      if (typeof instance.renderAll === 'function') instance.renderAll();
    };
    if (typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(reRender);
    }
    setTimeout(reRender, 120);
    setTimeout(reRender, 400);
    if (typeof ResizeObserver === 'function' && targetEl) {
      let lastW = 0;
      const ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const w = Math.round(entry.contentRect.width);
          if (w > 100 && Math.abs(w - lastW) > 2) {
            lastW = w;
            reRender();
          }
        }
      });
      ro.observe(targetEl);
      instance._ro = ro;
    }
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
  // MÔ PHỎNG 1: ĐỒ THỊ HÀM SỐ, BẬC HAI, DẤU TAM THỨC & PT QUY VỀ BẬC HAI (TOÁN 10 CHƯƠNG VI)
  // =========================================================================
  class QuadraticGraphSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        mode: options.mode || 'parabola', // 'parabola' | 'irrat_eq'
        a: options.a !== undefined ? options.a : 1.0,
        b: options.b !== undefined ? options.b : -2.0,
        c: options.c !== undefined ? options.c : -3.0,
        x0: options.x0 !== undefined ? options.x0 : 2.0,
        d: options.d !== undefined ? options.d : 1.0,
        e: options.e !== undefined ? options.e : -1.0,
        zoom: 32
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    computeProperties() {
      const { a, b, c } = this.params;
      if (Math.abs(a) < 1e-6) {
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
        signRule = `Δ = 0: f(x) cùng dấu với a (${signA}) với mọi x ≠ ${fmt(vx)} (tại x = ${fmt(vx)} thì f(x) = 0)`;
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
        signA,
        oppSignA,
        signRule
      };
    }

    initDOM() {
      const isIrrat = this.params.mode === 'irrat_eq';
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-bezier-curve"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Hàm Số, Bậc Hai, Xét Dấu Tam Thức &amp; PT Chứa Căn</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Bài 15, 16, 17, 18</span>
                </div>
                <p class="text-xs text-blue-100/90 mt-0.5">Kéo thanh trượt $a, b, c$ và điểm $M(x_0; f(x_0))$ để khảo sát đồ thị, bảng xét dấu và phương trình $\\sqrt{f(x)} = dx + e$</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-qmode="parabola" class="px-2.5 py-1.5 rounded-xl ${!isIrrat ? 'bg-white text-blue-900' : 'bg-white/15 hover:bg-white/25 text-white'} font-bold text-xs transition cursor-pointer">1. Đồ thị &amp; Xét dấu f(x)</button>
              <button type="button" data-qmode="irrat_eq" class="px-2.5 py-1.5 rounded-xl ${isIrrat ? 'bg-white text-blue-900' : 'bg-white/15 hover:bg-white/25 text-white'} font-bold text-xs transition cursor-pointer">2. PT √f(x) = dx + e (Bài 18)</button>
              <button type="button" data-preset="2roots" class="px-2 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">Δ &gt; 0</button>
              <button type="button" data-preset="1root" class="px-2 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">Δ = 0</button>
              <button type="button" data-preset="0root" class="px-2 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">Δ &lt; 0</button>
              <button type="button" data-act="reset" class="px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Left Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 relative">
              <canvas class="quad-canvas block w-full h-[330px] rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner"></canvas>
              <div class="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Đồ thị</span>
                  <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Đỉnh $I$ / Nghiệm loại</span>
                  <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Nghiệm thỏa mãn</span>
                  <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Điểm $M(x_0; f(x_0))$</span>
                </div>
                <div class="flex items-center gap-1">
                  <button type="button" data-zoom="in" class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">+</button>
                  <button type="button" data-zoom="out" class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">−</button>
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
                    <div class="text-[10px] text-slate-500" data-lbl="vertex">Tọa độ Đỉnh I &amp; Trục ĐX</div>
                    <div class="font-bold text-rose-600 dark:text-rose-400 mt-0.5" data-val="vertex">I(1; -4) • x = 1</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800">
                    <div class="text-[10px] text-slate-500" data-lbl="delta">Biệt thức Δ = b² − 4ac</div>
                    <div class="font-bold text-indigo-600 dark:text-indigo-400 mt-0.5" data-val="delta">Δ = 16 &gt; 0</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 col-span-2">
                    <div class="text-[10px] text-slate-500" data-lbl="roots">Giao điểm với trục hoành Ox (Nghiệm) &amp; Điểm M(x₀; f(x₀))</div>
                    <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5" data-val="roots">x₁ = -1; x₂ = 3 • Giao Oy: (0; -3)</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 col-span-2">
                    <div class="text-[10px] text-slate-500" data-lbl="mono">Sự biến thiên (Đồng biến / Nghịch biến)</div>
                    <div class="font-semibold text-slate-800 dark:text-slate-200 mt-0.5" data-val="monotonicity">Nghịch biến trên (-∞; 1), Đồng biến trên (1; +∞)</div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-200">
                <div class="font-bold mb-0.5"><i class="fa-solid fa-table-cells mr-1"></i><span data-lbl="signTitle">Bảng xét dấu tam thức bậc hai:</span></div>
                <div data-val="signRule">Trong khoảng (-1; 3): f(x) &lt; 0; Ngoài khoảng: f(x) &gt; 0</div>
              </div>
            </div>
          </div>

          <!-- Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300">Hệ số bậc hai ($a$)</label>
                <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="a">${fmt(this.params.a, 2)}</span>
              </div>
              <input type="range" data-ctrl="a" min="-3" max="3" step="0.25" value="${this.params.a}" class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300">Hệ số bậc nhất ($b$)</label>
                <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="b">${fmt(this.params.b, 2)}</span>
              </div>
              <input type="range" data-ctrl="b" min="-6" max="6" step="0.5" value="${this.params.b}" class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300">Hệ số tự do ($c$)</label>
                <span class="font-bold text-emerald-600 dark:text-emerald-400" data-disp="c">${fmt(this.params.c, 2)}</span>
              </div>
              <input type="range" data-ctrl="c" min="-6" max="6" step="0.5" value="${this.params.c}" class="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
            <div class="space-y-1" data-x0-box>
              <div class="flex justify-between text-xs">
                <label class="font-semibold text-slate-700 dark:text-slate-300" data-lbl-fourth>${isIrrat ? 'Hệ số đường thẳng ($e$)' : 'Điểm khảo sát ($x_0$)'}</label>
                <span class="font-bold text-amber-600 dark:text-amber-400" data-disp="x0">${fmt(isIrrat ? this.params.e : this.params.x0, 2)}</span>
              </div>
              <input type="range" data-ctrl="x0" min="-4" max="5" step="0.25" value="${isIrrat ? this.params.e : this.params.x0}" class="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
            </div>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.quad-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-qmode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.params.mode = btn.dataset.qmode;
          c.querySelectorAll('[data-qmode]').forEach(b => {
            b.className = b.dataset.qmode === this.params.mode
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-blue-900 font-bold text-xs transition cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer';
          });
          const isIrrat = this.params.mode === 'irrat_eq';
          const lblFourth = c.querySelector('[data-lbl-fourth]');
          const inpFourth = c.querySelector('[data-ctrl="x0"]');
          const dispFourth = c.querySelector('[data-disp="x0"]');
          if (lblFourth) lblFourth.textContent = isIrrat ? 'Hệ số tự do VP (e)' : 'Điểm khảo sát (x₀)';
          if (inpFourth) inpFourth.value = isIrrat ? this.params.e : this.params.x0;
          if (dispFourth) dispFourth.textContent = fmt(isIrrat ? this.params.e : this.params.x0, 2);
          if (isIrrat) {
            this.params.a = 1;
            this.params.b = -3;
            this.params.c = 2;
            this.params.d = 1;
            this.params.e = -1;
            ['a', 'b', 'c'].forEach(k => {
              const inp = c.querySelector(`[data-ctrl="${k}"]`);
              const disp = c.querySelector(`[data-disp="${k}"]`);
              if (inp) inp.value = this.params[k];
              if (disp) disp.textContent = fmt(this.params[k], 2);
            });
            if (inpFourth) inpFourth.value = this.params.e;
            if (dispFourth) dispFourth.textContent = fmt(this.params.e, 2);
          }
          this.renderAll();
        });
      });

      ['a', 'b', 'c'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = fmt(this.params[k], 2);
          this.renderAll();
        });
      });

      const x0Inp = c.querySelector('[data-ctrl="x0"]');
      const x0Disp = c.querySelector('[data-disp="x0"]');
      if (x0Inp) {
        x0Inp.addEventListener('input', e => {
          const val = parseFloat(e.target.value);
          if (this.params.mode === 'irrat_eq') {
            this.params.e = val;
          } else {
            this.params.x0 = val;
          }
          if (x0Disp) x0Disp.textContent = fmt(val, 2);
          this.renderAll();
        });
      }

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
        if (this.params.mode === 'irrat_eq') {
          this.params.d = 1;
          this.params.e = -1;
          setCoeff(1, -3, 2);
        } else {
          this.params.x0 = 2.0;
          setCoeff(1, -2, -3);
        }
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

    renderIrrationalMode() {
      const { a, b, c: cVal, d, e } = this.params;
      const c = this.container;
      const eqEl = c.querySelector('[data-val="equation"]');
      const vEl = c.querySelector('[data-val="vertex"]');
      const dEl = c.querySelector('[data-val="delta"]');
      const rEl = c.querySelector('[data-val="roots"]');
      const mEl = c.querySelector('[data-val="monotonicity"]');
      const sEl = c.querySelector('[data-val="signRule"]');

      // Solve (a - d^2)x^2 + (b - 2de)x + (c - e^2) = 0
      const A = a - d * d;
      const B = b - 2 * d * e;
      const C = cVal - e * e;
      let candRoots = [];
      if (Math.abs(A) < 1e-6) {
        if (Math.abs(B) > 1e-6) candRoots = [-C / B];
      } else {
        const del = B * B - 4 * A * C;
        if (Math.abs(del) < 1e-6) candRoots = [-B / (2 * A)];
        else if (del > 0) {
          const r1 = (-B - Math.sqrt(del)) / (2 * A);
          const r2 = (-B + Math.sqrt(del)) / (2 * A);
          candRoots = [Math.min(r1, r2), Math.max(r1, r2)];
        }
      }

      const validRoots = [];
      const extrRoots = [];
      candRoots.forEach(rx => {
        const rhs = d * rx + e;
        const rad = a * rx * rx + b * rx + cVal;
        if (rhs >= -1e-5 && rad >= -1e-5) validRoots.push(rx);
        else extrRoots.push(rx);
      });

      const bStr = b >= 0 ? `+ ${fmt(b)}x` : `- ${fmt(Math.abs(b))}x`;
      const cStr = cVal >= 0 ? `+ ${fmt(cVal)}` : `- ${fmt(Math.abs(cVal))}`;
      const eStr = e >= 0 ? `+ ${fmt(e)}` : `- ${fmt(Math.abs(e))}`;
      if (eqEl) eqEl.textContent = `√(${fmt(a)}x² ${bStr} ${cStr}) = ${fmt(d)}x ${eStr}`;
      if (vEl) vEl.textContent = `Điều kiện VP: ${fmt(d)}x ${eStr} ≥ 0 ⇔ x ≥ ${fmt(-e / d, 2)}`;
      if (dEl) dEl.textContent = `PT hệ quả: ${fmt(A)}x² + (${fmt(B)})x + (${fmt(C)}) = 0`;
      if (rEl) {
        rEl.textContent = validRoots.length
          ? `Nghiệm thỏa mãn: ${validRoots.map(r => 'x = ' + fmt(r, 2)).join('; ')}`
          : 'Phương trình VÔ NGHIỆM';
      }
      if (mEl) {
        mEl.textContent = extrRoots.length
          ? `Nghiệm ngoại lai bị loại (do dx + e < 0): ${extrRoots.map(r => 'x = ' + fmt(r, 2)).join('; ')}`
          : 'Không có nghiệm ngoại lai bị loại';
      }
      if (sEl) {
        sEl.textContent = 'Quy tắc Bài 18: √f(x) = g(x) ⇔ g(x) ≥ 0 và f(x) = [g(x)]². Nếu quên điều kiện g(x) ≥ 0 sẽ lấy nhầm giao điểm với nhánh âm −√f(x)!';
      }

      const metrics = getCanvasMetrics(this.canvas, 420, 340);
      const { ctx, width, height } = setupCanvas(this.canvas, metrics.width, metrics.height);
      const theme = getTheme();
      const scale = this.params.zoom;
      const ox = width * 0.45;
      const oy = height * 0.58;
      drawCoordinatePlane(ctx, width, height, ox, oy, scale, scale, theme);

      // Draw y = sqrt(f(x)) (solid blue) and y = -sqrt(f(x)) (dashed slate)
      ctx.save();
      ctx.strokeStyle = theme.blue;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      let started = false;
      for (let px = 0; px <= width; px += 2) {
        const x = (px - ox) / scale;
        const val = a * x * x + b * x + cVal;
        if (val >= 0) {
          const py = oy - Math.sqrt(val) * scale;
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        } else {
          started = false;
        }
      }
      ctx.stroke();

      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = theme.muted;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      started = false;
      for (let px = 0; px <= width; px += 2) {
        const x = (px - ox) / scale;
        const val = a * x * x + b * x + cVal;
        if (val >= 0) {
          const py = oy + Math.sqrt(val) * scale;
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        } else {
          started = false;
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw line y = d*x + e
      ctx.strokeStyle = theme.amber;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      const xL = -10, xR = 10;
      ctx.moveTo(ox + xL * scale, oy - (d * xL + e) * scale);
      ctx.lineTo(ox + xR * scale, oy - (d * xR + e) * scale);
      ctx.stroke();

      validRoots.forEach(rx => {
        const ry = d * rx + e;
        ctx.beginPath();
        ctx.arc(ox + rx * scale, oy - ry * scale, 6, 0, TWO_PI);
        ctx.fillStyle = theme.emerald;
        ctx.fill();
        ctx.fillText(`Nhận x=${fmt(rx, 2)}`, ox + rx * scale + 8, oy - ry * scale - 8);
      });

      extrRoots.forEach(rx => {
        const ry = d * rx + e;
        ctx.beginPath();
        ctx.arc(ox + rx * scale, oy - ry * scale, 6, 0, TWO_PI);
        ctx.fillStyle = theme.rose;
        ctx.fill();
        ctx.fillText(`Loại x=${fmt(rx, 2)}`, ox + rx * scale + 8, oy - ry * scale + 14);
      });
      ctx.restore();
    }

    renderAll() {
      if (this.params.mode === 'irrat_eq') {
        this.renderIrrationalMode();
        return;
      }
      const props = this.computeProperties();
      const c = this.container;

      // Update text cards
      const eqEl = c.querySelector('[data-val="equation"]');
      const vEl = c.querySelector('[data-val="vertex"]');
      const dEl = c.querySelector('[data-val="delta"]');
      const rEl = c.querySelector('[data-val="roots"]');
      const mEl = c.querySelector('[data-val="monotonicity"]');
      const sEl = c.querySelector('[data-val="signRule"]');

      const x0 = this.params.x0;
      const fx0 = this.params.a * x0 * x0 + this.params.b * x0 + this.params.c;

      if (!props.isQuadratic) {
        if (eqEl) eqEl.textContent = props.formulaText;
        if (vEl) vEl.textContent = 'Suy biến a = 0 (Không có đỉnh Parabol)';
        if (dEl) dEl.textContent = 'Bậc ≤ 1';
        if (rEl) rEl.textContent = (props.isConst ? (Math.abs(props.c) < 1e-6 ? 'Vô số nghiệm' : 'Vô nghiệm') : `Nghiệm x = ${fmt(props.root)}`) + ` • M(${fmt(x0)}; ${fmt(fx0)})`;
        if (mEl) mEl.textContent = props.isConst ? 'Hàm hằng trên ℝ' : (props.b > 0 ? 'Đồng biến trên ℝ' : 'Nghịch biến trên ℝ');
        if (sEl) sEl.textContent = props.isConst ? `Hàm không đổi dấu (${props.c >= 0 ? '+' : '−'})` : `Đổi dấu qua nghiệm x = ${fmt(props.root)}`;
      } else {
        const bStr = props.b === 0 ? '' : (props.b > 0 ? ` + ${fmt(props.b)}x` : ` - ${fmt(Math.abs(props.b))}x`);
        const cStr = props.c === 0 ? '' : (props.c > 0 ? ` + ${fmt(props.c)}` : ` - ${fmt(Math.abs(props.c))}`);
        if (eqEl) eqEl.textContent = `y = ${fmt(props.a)}x²${bStr}${cStr}`;
        if (vEl) vEl.textContent = `I(${fmt(props.vx)}; ${fmt(props.vy)}) • Trục ĐX: x = ${fmt(props.vx)}`;
        if (dEl) dEl.textContent = `Δ = ${fmt(props.delta)} (${props.delta > 0 ? '> 0' : props.delta === 0 ? '= 0' : '< 0'})`;
        if (rEl) {
          let rText = '';
          if (props.roots.length === 2) rText = `x₁ = ${fmt(props.roots[0])}; x₂ = ${fmt(props.roots[1])}`;
          else if (props.roots.length === 1) rText = `Nghiệm kép x = ${fmt(props.roots[0])}`;
          else rText = `Vô nghiệm thực`;
          rEl.textContent = `${rText} • M(${fmt(x0, 2)}; ${fmt(fx0, 2)})`;
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
        // Shade sign intervals along Ox
        for (let px = 0; px < width; px += 4) {
          const x = (px - ox) / scale;
          const y = this.params.a * x * x + this.params.b * x + this.params.c;
          ctx.fillStyle = y >= 0 ? 'rgba(16, 185, 129, 0.22)' : 'rgba(244, 63, 94, 0.22)';
          ctx.fillRect(px, oy - 4, 4, 8);
        }

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

      // Draw explorer point M(x0, f(x0))
      const mpx = ox + x0 * scale;
      const mpy = oy - fx0 * scale;
      if (mpy >= -20 && mpy <= height + 20) {
        ctx.save();
        ctx.setLineDash([3, 3]);
        ctx.strokeStyle = theme.amber;
        ctx.beginPath();
        ctx.moveTo(mpx, oy);
        ctx.lineTo(mpx, mpy);
        ctx.lineTo(ox, mpy);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(mpx, mpy, 6, 0, TWO_PI);
        ctx.fillStyle = theme.amber;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.fillStyle = theme.amber;
        ctx.font = 'bold 11px monospace';
        ctx.fillText(`M(${fmt(x0, 1)};${fmt(fx0, 1)})`, mpx + 8, mpy - 8);
        ctx.restore();
      }

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
  // MÔ PHỎNG 2: ĐƯỜNG TRÒN LƯỢNG GIÁC 360° & ĐỒ THỊ HÀM SỐ LƯỢNG GIÁC (GIAI ĐOẠN 1)
  // =========================================================================
  const TRIG_SPECIAL_ANGLES_360 = [0, 30, 45, 60, 90, 120, 150, 180, 210, 270, 300, 360];

  class TrigCircleSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      // Default to 'full360' (Khám phá mở rộng 0°–360°) so students can always drag M full 360°
      const initialMode = options.studyMode || 'full360'; // 'full360' | 'lesson180'
      const defaultAngle = options.angleDeg !== undefined ? clamp(options.angleDeg, 0, 360) : 60;

      this.state = {
        studyMode: initialMode,
        defaultAngle,
        specialAngles: TRIG_SPECIAL_ANGLES_360,
        angleDeg: defaultAngle,
        func: options.func || 'sin-cos', // 'sin-cos' | 'tan' | 'cot'
        running: false,
        draggingCircle: false
      };

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    getQuadrantLabel(deg) {
      const d = ((deg % 360) + 360) % 360;
      if (d === 0 || deg === 360) return 'Tia Ox dương (0° / 360°)';
      if (d === 90) return 'Tia Oy dương (90°)';
      if (d === 180) return 'Tia Ox âm (180°)';
      if (d === 270) return 'Tia Oy âm (270°)';
      if (d > 0 && d < 90) return 'Góc phần tư I (sin > 0, cos > 0)';
      if (d > 90 && d < 180) return 'Góc phần tư II (sin > 0, cos < 0)';
      if (d > 180 && d < 270) return 'Góc phần tư III (sin < 0, cos < 0)';
      return 'Góc phần tư IV (sin < 0, cos > 0)';
    }

    initDOM() {
      const { studyMode, defaultAngle, specialAngles, angleDeg } = this.state;

      const specialBtnsHtml = specialAngles.map(ang => `
        <button type="button" data-ang="${ang}" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/60 border border-slate-200 dark:border-slate-700 hover:border-teal-500 font-bold text-xs text-slate-700 dark:text-slate-200 transition cursor-pointer">${ang}°</button>
      `).join('');

      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-circle-nodes"></i>
              </span>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Đường Tròn Lượng Giác 360° &amp; Đồ Thị Lượng Giác</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20" data-mode-badge>
                    ${studyMode === 'lesson180' ? 'Chế độ Bài 5 Toán 10 (0°–180°)' : 'Khám phá mở rộng (0°–360°)'}
                  </span>
                </div>
                <p class="text-xs text-emerald-100/90 mt-0.5">Kéo điểm $M$ liên tục một vòng tròn $360^\\circ$ qua cả 4 góc phần tư hoặc điều chỉnh thanh trượt góc $\\alpha$</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <!-- Mode Switcher: Lesson 0-180 vs Full 0-360 -->
              <div class="inline-flex rounded-xl bg-black/20 p-0.5 border border-white/15 text-[11px] font-bold">
                <button type="button" data-study-mode="full360" class="px-2.5 py-1 rounded-lg transition cursor-pointer ${studyMode === 'full360' ? 'bg-white text-teal-900 shadow-2xs' : 'text-white/90 hover:text-white'}">
                  Khám phá 360°
                </button>
                <button type="button" data-study-mode="lesson180" class="px-2.5 py-1 rounded-lg transition cursor-pointer ${studyMode === 'lesson180' ? 'bg-white text-teal-900 shadow-2xs' : 'text-white/90 hover:text-white'}">
                  Bài 5 Toán 10 (0°–180°)
                </button>
              </div>
              <button type="button" data-act="toggle" class="px-3 py-1.5 rounded-xl bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-play"></i> <span>Quay tự động</span>
              </button>
              <button type="button" data-act="reset" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại ${defaultAngle}°
              </button>
            </div>
          </div>

          <!-- Responsive Grid: 1 col on Mobile (Circle above Wave), 2 equal cols (6+6) on Desktop -->
          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Unit Circle Column (6 cols on Desktop for large 280-360px circle) -->
            <div class="lg:col-span-6 p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
              <div class="w-full max-w-[440px] flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">
                <span>Đường Tròn Lượng Giác ($R = 1$, Kéo $M$ đủ $360^\\circ$)</span>
                <span class="text-[11px] font-bold text-teal-600 dark:text-teal-400" data-quadrant-badge>Góc phần tư I</span>
              </div>
              <div class="w-full max-w-[440px] flex items-center justify-center">
                <canvas class="unit-circle-canvas block w-full rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner cursor-grab active:cursor-grabbing" style="touch-action: none;"></canvas>
              </div>
              <div class="w-full max-w-[440px] mt-2.5 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                <span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> Điểm $M(\\cos\\alpha; \\sin\\alpha)$</span>
                <span class="inline-flex items-center gap-1.5"><span class="w-3 h-1.5 rounded bg-blue-600 inline-block"></span> $OH = \\cos\\alpha$</span>
                <span class="inline-flex items-center gap-1.5"><span class="w-3 h-1.5 rounded bg-rose-600 inline-block"></span> $OK = \\sin\\alpha$</span>
              </div>
            </div>

            <!-- Wave Graph & Live Readout Column (6 cols on Desktop) -->
            <div class="lg:col-span-6 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Đồ thị lượng giác đồng bộ ($0^\\circ \\to 360^\\circ$):</span>
                  <div class="flex flex-wrap items-center gap-1.5">
                    <button type="button" data-fn="sin-cos" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-teal-600 text-white cursor-pointer">y = sin α &amp; cos α</button>
                    <button type="button" data-fn="tan" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">y = tan α</button>
                    <button type="button" data-fn="cot" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">y = cot α</button>
                  </div>
                </div>
                <canvas class="trig-wave-canvas block w-full h-[250px] rounded-2xl border border-slate-200 dark:border-slate-800"></canvas>
              </div>

              <div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                <div class="p-2.5 rounded-xl bg-rose-50/90 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/60">
                  <div class="text-[11px] text-rose-600 dark:text-rose-400 font-bold">sin α (Tung độ y_M)</div>
                  <div class="font-mono font-extrabold text-sm text-rose-700 dark:text-rose-300 mt-0.5" data-val="sin">0.866</div>
                </div>
                <div class="p-2.5 rounded-xl bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60">
                  <div class="text-[11px] text-blue-600 dark:text-blue-400 font-bold">cos α (Hoành độ x_M)</div>
                  <div class="font-mono font-extrabold text-sm text-blue-700 dark:text-blue-300 mt-0.5" data-val="cos">0.500</div>
                </div>
                <div class="p-2.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60">
                  <div class="text-[11px] text-amber-600 dark:text-amber-400 font-bold">tan α = sin α / cos α</div>
                  <div class="font-mono font-extrabold text-sm text-amber-700 dark:text-amber-300 mt-0.5" data-val="tan">1.732</div>
                </div>
                <div class="p-2.5 rounded-xl bg-purple-50/90 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/60">
                  <div class="text-[11px] text-purple-600 dark:text-purple-400 font-bold">cot α = cos α / sin α</div>
                  <div class="font-mono font-extrabold text-sm text-purple-700 dark:text-purple-300 mt-0.5" data-val="cot">0.577</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Angle Slider (0° - 360°) & 12 Quick Special Angles -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div class="w-full lg:w-5/12 space-y-1.5">
              <div class="flex justify-between items-center text-xs sm:text-sm">
                <label class="font-bold text-slate-700 dark:text-slate-200" data-slider-label>
                  Số đo góc $\\alpha$ (0° đến 360°):
                </label>
                <span class="font-mono font-extrabold text-sm text-teal-600 dark:text-teal-400 px-2.5 py-0.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800" data-disp="angle">${angleDeg}°</span>
              </div>
              <input type="range" data-ctrl="angle" min="0" max="360" step="1" value="${angleDeg}" class="w-full accent-teal-600 cursor-pointer h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg">
              <div class="flex justify-between text-[10px] font-mono text-slate-400">
                <span>0°</span>
                <span>90°</span>
                <span>180°</span>
                <span>270°</span>
                <span>360°</span>
              </div>
            </div>
            <div class="w-full lg:w-7/12 flex flex-wrap items-center gap-1.5 text-xs">
              <span class="text-slate-600 dark:text-slate-300 font-bold mr-1">Góc đặc biệt:</span>
              ${specialBtnsHtml}
            </div>
          </div>
        </div>
      `;

      this.canvasCircle = this.container.querySelector('.unit-circle-canvas');
      this.canvasWave = this.container.querySelector('.trig-wave-canvas');
      renderKaTeX(this.container);
    }

    setStudyMode(mode) {
      this.state.studyMode = mode;
      const c = this.container;
      const badge = c.querySelector('[data-mode-badge]');
      if (badge) {
        badge.textContent = mode === 'lesson180'
          ? 'Chế độ Bài 5 Toán 10 (Trọng tâm 0°–180°)'
          : 'Chế độ Khám phá mở rộng (0°–360°)';
      }
      c.querySelectorAll('[data-study-mode]').forEach(btn => {
        const active = btn.dataset.studyMode === mode;
        btn.className = active
          ? 'px-2.5 py-1 rounded-lg transition cursor-pointer bg-white text-teal-900 shadow-2xs'
          : 'px-2.5 py-1 rounded-lg transition cursor-pointer text-white/90 hover:text-white';
      });
      if (mode === 'lesson180' && this.state.angleDeg > 180) {
        this.state.angleDeg = 120;
        const inp = c.querySelector('[data-ctrl="angle"]');
        if (inp) inp.value = 120;
      }
      this.renderAll();
    }

    bindEvents() {
      const c = this.container;
      const inp = c.querySelector('[data-ctrl="angle"]');
      const toggleBtn = c.querySelector('[data-act="toggle"]');
      const { defaultAngle } = this.state;

      const setAngle = deg => {
        this.state.angleDeg = clamp(Math.round(deg), 0, 360);
        if (inp) inp.value = this.state.angleDeg;
        this.renderAll();
      };

      inp.addEventListener('input', e => {
        const val = parseFloat(e.target.value);
        if (val > 180 && this.state.studyMode === 'lesson180') {
          this.setStudyMode('full360');
        }
        setAngle(val);
      });

      c.querySelectorAll('[data-study-mode]').forEach(btn => {
        btn.addEventListener('click', () => this.setStudyMode(btn.dataset.studyMode));
      });

      c.querySelectorAll('[data-ang]').forEach(btn => {
        btn.addEventListener('click', () => {
          const val = parseFloat(btn.dataset.ang);
          if (val > 180 && this.state.studyMode === 'lesson180') {
            this.setStudyMode('full360');
          }
          setAngle(val);
        });
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
        setAngle(defaultAngle);
      });

      // Drag point M continuously 0° -> 360° across all 4 quadrants using atan2(y, x)
      const updateFromPointer = (clientX, clientY) => {
        const rect = this.canvasCircle.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = clientX - rect.left - cx;
        const dy = -(clientY - rect.top - cy);
        let deg = Math.atan2(dy, dx) * RAD_TO_DEG;
        if (deg < 0) deg += 360;
        deg = Math.round(deg);
        if (deg > 180 && this.state.studyMode === 'lesson180') {
          this.setStudyMode('full360');
        }
        setAngle(deg);
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
      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => this.renderAll());
        this.resizeObserver.observe(this.container);
      }
      this.canvasCircle.addEventListener('touchstart', e => {
        if (e.touches.length === 1) {
          this.state.draggingCircle = true;
          updateFromPointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });
      this.canvasCircle.addEventListener('touchmove', e => {
        if (this.state.draggingCircle && e.touches.length === 1) {
          if (e.cancelable) e.preventDefault();
          updateFromPointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });
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
        const maxLimit = this.state.studyMode === 'lesson180' ? 180 : 360;
        this.state.angleDeg += 0.6;
        if (this.state.angleDeg > maxLimit) {
          this.state.angleDeg = 0;
        }
        const inp = this.container.querySelector('[data-ctrl="angle"]');
        if (inp) inp.value = Math.round(this.state.angleDeg);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    computeExactTrig(deg) {
      const d = ((Math.round(deg) % 360) + 360) % 360;
      const rad = deg * DEG_TO_RAD;
      let sinV = Math.sin(rad);
      let cosV = Math.cos(rad);
      if (d === 0 || d === 180) sinV = 0;
      if (d === 90 || d === 270) cosV = 0;
      const cosZero = Math.abs(cosV) < 1e-6;
      const sinZero = Math.abs(sinV) < 1e-6;
      return { deg, rad, sinV, cosV, cosZero, sinZero };
    }

    renderAll() {
      const deg = clamp(this.state.angleDeg, 0, 360);
      const { rad, sinV, cosV, cosZero, sinZero } = this.computeExactTrig(deg);

      const c = this.container;
      const disp = c.querySelector('[data-disp="angle"]');
      if (disp) disp.textContent = `${fmt(deg, 0)}° (${fmt(deg / 180, 2)}π rad)`;

      const quadBadge = c.querySelector('[data-quadrant-badge]');
      if (quadBadge) quadBadge.textContent = this.getQuadrantLabel(deg);

      c.querySelector('[data-val="sin"]').textContent = fmt(sinV, 3);
      c.querySelector('[data-val="cos"]').textContent = fmt(cosV, 3);
      c.querySelector('[data-val="tan"]').textContent = cosZero ? 'Không xác định' : fmt(sinV / cosV, 3);
      c.querySelector('[data-val="cot"]').textContent = sinZero ? 'Không xác định' : fmt(cosV / sinV, 3);

      // Highlight active special angle button if matched
      c.querySelectorAll('[data-ang]').forEach(btn => {
        const bVal = parseFloat(btn.dataset.ang);
        const isMatch = Math.abs(bVal - deg) < 0.5;
        const isDimmed = this.state.studyMode === 'lesson180' && bVal > 180;
        btn.className = isMatch
          ? 'px-2.5 py-1 rounded-lg bg-teal-600 text-white border border-teal-600 font-extrabold text-xs shadow-xs transition cursor-pointer'
          : `px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/60 border border-slate-200 dark:border-slate-700 hover:border-teal-500 font-bold text-xs text-slate-700 dark:text-slate-200 transition cursor-pointer ${isDimmed ? 'opacity-60' : ''}`;
      });

      this.renderUnitCircle(deg, rad, sinV, cosV);
      this.renderWave(deg, rad, sinV, cosV, cosZero, sinZero);
    }

    renderUnitCircle(deg, rad, sinV, cosV) {
      const parentEl = this.canvasCircle.parentElement;
      const availW = (parentEl && parentEl.clientWidth) ? parentEl.clientWidth : (this.canvasCircle.clientWidth || 380);
      const width = clamp(availW, 260, 440);
      // Circle diameter occupies ~79% of available width (280px - 352px on desktop, ~240px on 375px mobile)
      const diameter = clamp(Math.round(width * 0.79), 210, 352);
      const R = diameter / 2;
      const height = Math.round(diameter + 78);

      const { ctx } = setupCanvas(this.canvasCircle, width, height);
      const theme = getTheme();

      const cx = Math.round(width / 2);
      const cy = Math.round(height / 2);

      // 1. Background
      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle grid & special angle radial rays across all 4 quadrants
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      [-1, -0.5, 0.5, 1].forEach(t => {
        const gx = cx + t * R;
        const gy = cy - t * R;
        ctx.beginPath();
        ctx.moveTo(gx, 12);
        ctx.lineTo(gx, height - 12);
        ctx.moveTo(12, gy);
        ctx.lineTo(width - 12, gy);
        ctx.stroke();
      });

      ctx.save();
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = theme.subGrid;
      [30, 45, 60, 120, 135, 150, 210, 225, 240, 300, 315, 330].forEach(aDeg => {
        const aRad = aDeg * DEG_TO_RAD;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(aRad) * R, cy - Math.sin(aRad) * R);
        ctx.stroke();
      });
      ctx.restore();

      // 3. Axes Ox and Oy with bold arrowheads
      ctx.strokeStyle = theme.axis;
      ctx.fillStyle = theme.axis;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(14, cy);
      ctx.lineTo(width - 14, cy);
      ctx.moveTo(cx, height - 14);
      ctx.lineTo(cx, 14);
      ctx.stroke();

      // Ox Arrowhead
      ctx.beginPath();
      ctx.moveTo(width - 10, cy);
      ctx.lineTo(width - 20, cy - 5);
      ctx.lineTo(width - 20, cy + 5);
      ctx.closePath();
      ctx.fill();

      // Oy Arrowhead
      ctx.beginPath();
      ctx.moveTo(cx, 10);
      ctx.lineTo(cx - 5, 20);
      ctx.lineTo(cx + 5, 20);
      ctx.closePath();
      ctx.fill();

      // Axis labels O, x, y & Quadrant Roman Numerals
      ctx.fillStyle = theme.text;
      ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('x', width - 22, cy - 10);
      ctx.fillText('y', cx + 10, 22);
      ctx.fillText('O', cx - 18, cy + 18);

      ctx.fillStyle = theme.muted;
      ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('I', cx + R * 0.52, cy - R * 0.52);
      ctx.fillText('II', cx - R * 0.52, cy - R * 0.52);
      ctx.fillText('III', cx - R * 0.52, cy + R * 0.58);
      ctx.fillText('IV', cx + R * 0.52, cy + R * 0.58);

      // 4. Unit Circle (Full 360° circle; if in lesson180 mode, highlight upper semicircle)
      ctx.strokeStyle = theme.dark ? '#cbd5e1' : '#1e293b';
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TWO_PI);
      ctx.stroke();

      if (this.state.studyMode === 'lesson180') {
        ctx.save();
        ctx.strokeStyle = '#14b8a6';
        ctx.lineWidth = 3.6;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI, true);
        ctx.stroke();
        ctx.restore();
      }

      // Active arc from A(1; 0) counterclockwise by angle α to M(cos α; sin α)
      if (deg > 0) {
        ctx.save();
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 4.2;
        ctx.beginPath();
        if (deg >= 360) {
          ctx.arc(cx, cy, R, 0, TWO_PI);
        } else {
          ctx.arc(cx, cy, R, 0, TWO_PI - rad, true);
        }
        ctx.stroke();
        ctx.restore();
      }

      // Cardinal points on Unit Circle: A(1;0), B(0;1), A'(-1;0), B'(0;-1)
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      const cardinals = [
        { x: cx + R, y: cy, lx: cx + R + 6, ly: cy + 16, align: 'left', text: 'A(1;0)' },
        { x: cx - R, y: cy, lx: cx - R - 6, ly: cy + 16, align: 'right', text: "A'(-1;0)" },
        { x: cx, y: cy - R, lx: cx - 8, ly: cy - R - 8, align: 'right', text: 'B(0;1)' },
        { x: cx, y: cy + R, lx: cx + 8, ly: cy + R + 16, align: 'left', text: "B'(0;-1)" }
      ];
      cardinals.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3.8, 0, TWO_PI);
        ctx.fillStyle = theme.axis;
        ctx.fill();
        ctx.fillStyle = theme.text;
        ctx.textAlign = pt.align;
        ctx.fillText(pt.text, pt.lx, pt.ly);
      });

      const mx = cx + cosV * R;
      const my = cy - sinV * R;

      // 5. Angle Sector & Directed Angle Arc α (0° -> 360°)
      const arcR = Math.max(36, R * 0.28);
      if (deg > 0) {
        ctx.save();
        ctx.fillStyle = 'rgba(20, 184, 166, 0.24)';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        if (deg >= 360) {
          ctx.arc(cx, cy, arcR, 0, TWO_PI);
        } else {
          ctx.arc(cx, cy, arcR, 0, TWO_PI - rad, true);
        }
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#0d9488';
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        if (deg >= 360) {
          ctx.arc(cx, cy, arcR, 0, TWO_PI);
        } else {
          ctx.arc(cx, cy, arcR, 0, TWO_PI - rad, true);
        }
        ctx.stroke();

        // Angle label α = ...° placed along the half-angle bisector
        const midRad = rad / 2;
        const labelR = arcR + 18;
        const lx = cx + Math.cos(midRad) * labelR;
        const ly = cy - Math.sin(midRad) * labelR;
        ctx.fillStyle = theme.dark ? '#5eead4' : '#0f766e';
        ctx.font = 'bold 12.5px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`α = ${fmt(deg, 0)}°`, lx, ly + 4);
        ctx.restore();
      }

      // 6. Auxiliary Dashed Projection Lines (MH ⊥ Ox, MK ⊥ Oy)
      ctx.save();
      ctx.setLineDash([6, 4]);
      ctx.strokeStyle = theme.dark ? '#94a3b8' : '#475569';
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(mx, cy); // H(mx, cy)
      ctx.moveTo(mx, my);
      ctx.lineTo(cx, my); // K(cx, my)
      ctx.stroke();
      ctx.restore();

      // 7. Highlighted Vector Projections: OH = cos α (Blue) & OK = sin α (Rose)
      ctx.strokeStyle = theme.blue;
      ctx.lineWidth = 5.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(mx, cy);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(mx, cy, 4.8, 0, TWO_PI);
      ctx.fillStyle = theme.blue;
      ctx.fill();

      ctx.strokeStyle = theme.rose;
      ctx.lineWidth = 5.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx, my);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, my, 4.8, 0, TWO_PI);
      ctx.fillStyle = theme.rose;
      ctx.fill();
      ctx.lineCap = 'butt';

      // Direct labels for cos α and sin α on the axes
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      if (Math.abs(cosV) > 0.12) {
        ctx.fillStyle = theme.dark ? '#60a5fa' : '#1d4ed8';
        ctx.textAlign = 'center';
        ctx.fillText(`cos α = ${fmt(cosV, 2)}`, (cx + mx) / 2, cy + (sinV >= 0 ? 22 : -10));
      }
      if (Math.abs(sinV) > 0.12) {
        ctx.fillStyle = theme.dark ? '#fb7185' : '#be123c';
        ctx.textAlign = cosV >= 0 ? 'right' : 'left';
        ctx.fillText(`sin α = ${fmt(sinV, 2)}`, cx + (cosV >= 0 ? -10 : 10), (cy + my) / 2 + 4);
      }

      // 8. Radius Vector OM
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 3.8;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(mx, my);
      ctx.stroke();

      // 9. Large Draggable Point M with Halo & High-Contrast Pill Label
      ctx.beginPath();
      ctx.arc(mx, my, 14, 0, TWO_PI);
      ctx.fillStyle = 'rgba(16, 185, 129, 0.22)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(mx, my, 9, 0, TWO_PI);
      ctx.fillStyle = theme.emerald;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.8;
      ctx.stroke();

      // M Coordinate Badge
      const mLabel = `M(${fmt(cosV, 2)}; ${fmt(sinV, 2)})`;
      ctx.font = 'bold 12.5px "JetBrains Mono", monospace';
      const textW = ctx.measureText(mLabel).width;
      const badgeW = textW + 14;
      const badgeH = 24;
      const rawBx = cosV >= 0 ? mx + 12 : mx - badgeW - 12;
      const rawBy = sinV >= 0 ? my - badgeH - 10 : my + 12;
      const bx = clamp(rawBx, 6, width - badgeW - 6);
      const by = clamp(rawBy, 6, height - badgeH - 6);

      ctx.fillStyle = theme.dark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.94)';
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.roundRect(bx, by, badgeW, badgeH, 7);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = theme.dark ? '#34d399' : '#047857';
      ctx.textAlign = 'left';
      ctx.fillText(mLabel, bx + 7, by + 16);
    }

    renderWave(deg, rad, sinV, cosV, cosZero, sinZero) {
      const parentEl = this.canvasWave.parentElement;
      const width = Math.max(260, this.canvasWave.clientWidth || (parentEl ? parentEl.clientWidth : 420));
      const height = 250;
      const { ctx } = setupCanvas(this.canvasWave, width, height);
      const theme = getTheme();

      // Plot full [0, 2*pi] with small margins [-pi/6, 2*pi + pi/6]
      const xMin = -Math.PI / 6;
      const xMax = TWO_PI + Math.PI / 6;
      const span = xMax - xMin;
      const ox = width * (-xMin / span);
      const oy = height / 2;
      const scaleX = width / span;
      const scaleY = this.state.func === 'sin-cos' ? height * 0.35 : height * 0.22;

      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      // Highlight [0, pi] band when in Bài 5 Toán 10 focus mode
      if (this.state.studyMode === 'lesson180') {
        const x0Px = ox;
        const xPiPx = ox + Math.PI * scaleX;
        ctx.fillStyle = theme.dark ? 'rgba(20, 184, 166, 0.10)' : 'rgba(20, 184, 166, 0.11)';
        ctx.fillRect(x0Px, 0, xPiPx - x0Px, height);
      }

      // Horizontal guide lines y = 1 and y = -1
      if (this.state.func === 'sin-cos') {
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = theme.grid;
        [1, -1].forEach(v => {
          const py = oy - v * scaleY;
          ctx.beginPath();
          ctx.moveTo(0, py);
          ctx.lineTo(width, py);
          ctx.stroke();
        });
        ctx.restore();
      }

      // Axes
      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(0, oy);
      ctx.lineTo(width, oy);
      ctx.moveTo(ox, 0);
      ctx.lineTo(ox, height);
      ctx.stroke();

      // Ticks across 0° -> 360°
      const ticks = [
        { v: 0, l: '0°' },
        { v: Math.PI / 2, l: '90° (π/2)' },
        { v: Math.PI, l: '180° (π)' },
        { v: 1.5 * Math.PI, l: '270° (3π/2)' },
        { v: TWO_PI, l: '360° (2π)' }
      ];
      ctx.fillStyle = theme.muted;
      ctx.font = 'bold 10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ticks.forEach(t => {
        const px = ox + t.v * scaleX;
        if (px > 14 && px < width - 14) {
          ctx.fillText(t.l, px, oy + 16);
        }
      });

      if (this.state.func === 'sin-cos') {
        // Draw cos x (blue)
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 2) {
          const x = xMin + (px / width) * span;
          const py = oy - Math.cos(x) * scaleY;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Draw sin x (rose)
        ctx.strokeStyle = theme.rose;
        ctx.lineWidth = 3.0;
        ctx.beginPath();
        for (let px = 0; px <= width; px += 2) {
          const x = xMin + (px / width) * span;
          const py = oy - Math.sin(x) * scaleY;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Current angle vertical guide & markers
        const curPx = ox + rad * scaleX;
        const sinPy = oy - sinV * scaleY;
        const cosPy = oy - cosV * scaleY;

        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = theme.muted;
        ctx.beginPath();
        ctx.moveTo(curPx, 12);
        ctx.lineTo(curPx, height - 12);
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(curPx, sinPy, 6, 0, TWO_PI);
        ctx.fillStyle = theme.rose;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(curPx, cosPy, 6, 0, TWO_PI);
        ctx.fillStyle = theme.blue;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        // Draw tan x or cot x WITHOUT connecting across vertical asymptotes!
        const isTan = this.state.func === 'tan';
        const asymptotes = isTan
          ? [Math.PI / 2, 1.5 * Math.PI]
          : [0, Math.PI, TWO_PI];

        ctx.save();
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = theme.rose;
        asymptotes.forEach(asx => {
          const apx = ox + asx * scaleX;
          if (apx >= 0 && apx <= width) {
            ctx.beginPath();
            ctx.moveTo(apx, 0);
            ctx.lineTo(apx, height);
            ctx.stroke();
          }
        });
        ctx.restore();

        ctx.strokeStyle = isTan ? theme.amber : theme.purple;
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        let penDown = false;
        let prevY = 0;
        for (let px = 0; px <= width; px += 1.5) {
          const x = xMin + (px / width) * span;
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
            ctx.arc(curPx, curPy, 6, 0, TWO_PI);
            ctx.fillStyle = isTan ? theme.amber : theme.purple;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 3: HÌNH HỌC PHẲNG ĐỘNG - TAM GIÁC (BÀI 6), ĐƯỜNG TRÒN & TIẾP TUYẾN (BÀI 21), BA ĐƯỜNG CONIC (BÀI 22)
  // =========================================================================
  class DynamicGeometrySim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      const initMode = options.mode || 'triangle'; // 'triangle' | 'circle' | 'ellipse' | 'hyperbola' | 'parabola_conic'
      this.state = {
        mode: initMode,
        zoom: options.zoom || 38,
        pts: [
          { label: 'A', x: -1.5, y: 3.0, color: '#ef4444' },
          { label: 'B', x: -4.0, y: -2.0, color: '#3b82f6' },
          { label: 'C', x: 4.0, y: -1.5, color: '#10b981' }
        ],
        showCircumcircle: true,
        showIncircle: true,
        showEuler: true,
        draggingTarget: null, // 'tri-0' | 'tri-1' | 'tri-2' | 'circle-M' | 'circle-I' | 'conic-M'
        // Circle & Tangent parameters (Bài 21)
        circleR: options.circleR !== undefined ? options.circleR : (initMode === 'circle' && options.ellipseA ? options.ellipseA : 2.8),
        circleXI: options.circleXI !== undefined ? options.circleXI : (initMode === 'circle' && options.ellipseB !== undefined ? options.ellipseB : 1.0),
        circleYI: options.circleYI !== undefined ? options.circleYI : 0.5,
        circleThetaDeg: options.ellipseThetaDeg !== undefined ? options.ellipseThetaDeg : 55,
        // Conic parameters (Bài 22)
        ellipseA: initMode === 'hyperbola' ? 2.2 : (initMode === 'parabola_conic' ? 2.0 : 4.2),
        ellipseB: initMode === 'hyperbola' ? 1.6 : 2.6,
        ellipseThetaDeg: options.ellipseThetaDeg !== undefined ? options.ellipseThetaDeg : 55
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
      attachCanvasResizeObserver(this, this.canvas ? this.canvas.parentElement : this.container);
    }

    initDOM() {
      const m = this.state.mode;
      const btnCls = (modeName) => m === modeName
        ? 'px-2.5 py-1.5 rounded-xl bg-white text-purple-900 font-bold text-xs cursor-pointer shadow-2xs'
        : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';

      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-draw-polygon"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Hình Học Phẳng Động — Tam Giác, Đường Tròn &amp; Ba Đường Conic</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Bài 6, 21 &amp; 22</span>
                </div>
                <p class="text-xs text-purple-100/90 mt-0.5">Kéo trực tiếp các điểm hình học $A, B, C, I, M$ trên mặt phẳng tọa độ hoặc điều chỉnh thanh trượt</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-mode="triangle" class="${btnCls('triangle')}">1. Tam giác (Bài 6)</button>
              <button type="button" data-mode="circle" class="${btnCls('circle')}">2. Đường tròn &amp; TT (Bài 21)</button>
              <button type="button" data-mode="ellipse" class="${btnCls('ellipse')}">3. Elip (Bài 22)</button>
              <button type="button" data-mode="hyperbola" class="${btnCls('hyperbola')}">4. Hypebol (Bài 22)</button>
              <button type="button" data-mode="parabola_conic" class="${btnCls('parabola_conic')}">5. Parabol (Bài 22)</button>
              <button type="button" data-act="reset" class="px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Interactive Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="geom-canvas block w-full rounded-xl border border-slate-200 dark:border-slate-800 cursor-grab active:cursor-grabbing shadow-inner" style="width: 100%; height: 440px; min-height: 350px; display: block; touch-action: none;"></canvas>
              <div class="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div class="flex flex-wrap items-center gap-3 ${m === 'triangle' ? '' : 'hidden'}" data-tri-toggles>
                  <label class="inline-flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" data-chk="showCircumcircle" checked class="accent-blue-600">
                    <span>Ngoại tiếp $(O; R)$</span>
                  </label>
                  <label class="inline-flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" data-chk="showIncircle" checked class="accent-emerald-600">
                    <span>Nội tiếp $(I; r)$</span>
                  </label>
                  <label class="inline-flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" data-chk="showEuler" checked class="accent-rose-600">
                    <span>Đường Euler ($O-G-H$)</span>
                  </label>
                </div>
                <div class="text-[11px] text-slate-600 dark:text-slate-400 ${m === 'triangle' ? 'hidden' : ''}" data-conic-hint>
                  <i class="fa-solid fa-hand-pointer text-purple-500 mr-1"></i>Kéo trực tiếp điểm <strong>M</strong> (hoặc tâm <strong>I</strong>) trên hình để quan sát tiếp tuyến và bán kính qua tiêu cập nhật tức thời
                </div>
                <div class="flex items-center gap-1.5 ml-auto">
                  <span class="text-[11px] text-slate-500">Tỉ lệ:</span>
                  <button type="button" data-zoom="in" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 font-bold cursor-pointer" title="Phóng to">+</button>
                  <button type="button" data-zoom="out" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 font-bold cursor-pointer" title="Thu nhỏ">−</button>
                </div>
              </div>
            </div>

            <!-- Right Measurements Panel (5 cols) -->
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-info-box class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Triangle Presets Bar (shown when mode === 'triangle') -->
          <div data-tri-presets class="${m === 'triangle' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-300">Chọn mẫu tam giác đặc biệt (hoặc kéo trực tiếp đỉnh A, B, C):</span>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-tpreset="acute" class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300 font-bold cursor-pointer">Tam giác nhọn</button>
              <button type="button" data-tpreset="right" class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold cursor-pointer">Tam giác vuông tại A (Â=90°)</button>
              <button type="button" data-tpreset="obtuse" class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-bold cursor-pointer">Tam giác tù (Â&gt;90°)</button>
              <button type="button" data-tpreset="collinear" class="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 font-bold cursor-pointer">3 điểm thẳng hàng (S=0)</button>
            </div>
          </div>

          <!-- Circle & Tangent Sliders (shown when mode === 'circle') -->
          <div data-circle-controls class="${m === 'circle' ? '' : 'hidden'} p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div class="space-y-1">
              <div class="flex justify-between"><label class="font-semibold">Bán kính $R$</label><span class="font-bold text-blue-600" data-disp="cR">${fmt(this.state.circleR, 1)}</span></div>
              <input type="range" data-ctrl="circleR" min="1.2" max="4.2" step="0.2" value="${this.state.circleR}" class="w-full accent-blue-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between"><label class="font-semibold">Hoành độ tâm $x_I$</label><span class="font-bold text-indigo-600" data-disp="cXI">${fmt(this.state.circleXI, 1)}</span></div>
              <input type="range" data-ctrl="circleXI" min="-2.5" max="2.5" step="0.5" value="${this.state.circleXI}" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between"><label class="font-semibold">Tung độ tâm $y_I$</label><span class="font-bold text-emerald-600" data-disp="cYI">${fmt(this.state.circleYI, 1)}</span></div>
              <input type="range" data-ctrl="circleYI" min="-2.0" max="2.0" step="0.5" value="${this.state.circleYI}" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between"><label class="font-semibold">Vị trí điểm $M$ ($\\theta$)</label><span class="font-bold text-rose-600" data-disp="cTh">${Math.round(this.state.circleThetaDeg)}°</span></div>
              <input type="range" data-ctrl="circleThetaDeg" min="0" max="360" step="5" value="${this.state.circleThetaDeg}" class="w-full accent-rose-600 cursor-pointer h-2">
            </div>
          </div>

          <!-- Conic Sliders (shown when mode in ['ellipse', 'hyperbola', 'parabola_conic']) -->
          <div data-ellipse-controls class="${m === 'triangle' || m === 'circle' ? 'hidden' : ''} p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div class="space-y-1">
              <div class="flex justify-between">
                <label class="font-semibold" data-lbl-ca>${m === 'parabola_conic' ? 'Tham số tiêu p (p > 0)' : 'Bán trục thực / lớn (a)'}</label>
                <span class="font-bold text-indigo-600" data-disp="ea">${fmt(this.state.ellipseA, 1)}</span>
              </div>
              <input type="range" data-ctrl="ellipseA" min="1.2" max="5.2" step="0.2" value="${this.state.ellipseA}" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1" data-box-cb>
              <div class="flex justify-between">
                <label class="font-semibold" data-lbl-cb>${m === 'ellipse' ? 'Bán trục nhỏ (b < a)' : 'Bán trục ảo (b)'}</label>
                <span class="font-bold text-emerald-600" data-disp="eb">${fmt(this.state.ellipseB, 1)}</span>
              </div>
              <input type="range" data-ctrl="ellipseB" min="0.8" max="4.6" step="0.2" value="${this.state.ellipseB}" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between">
                <label class="font-semibold" data-lbl-cth>Vị trí điểm $M$ trên Conic</label>
                <span class="font-bold text-rose-600" data-disp="eth">${Math.round(this.state.ellipseThetaDeg)}°</span>
              </div>
              <input type="range" data-ctrl="ellipseThetaDeg" min="0" max="360" step="5" value="${this.state.ellipseThetaDeg}" class="w-full accent-rose-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.geom-canvas');
      renderKaTeX(this.container);
    }

    syncModeControls() {
      const c = this.container;
      const m = this.state.mode;
      c.querySelectorAll('[data-mode]').forEach(b => {
        b.className = b.dataset.mode === m
          ? 'px-2.5 py-1.5 rounded-xl bg-white text-purple-900 font-bold text-xs cursor-pointer shadow-2xs'
          : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
      });
      c.querySelector('[data-tri-toggles]').classList.toggle('hidden', m !== 'triangle');
      c.querySelector('[data-conic-hint]').classList.toggle('hidden', m === 'triangle');
      c.querySelector('[data-tri-presets]').classList.toggle('hidden', m !== 'triangle');
      c.querySelector('[data-circle-controls]').classList.toggle('hidden', m !== 'circle');
      c.querySelector('[data-ellipse-controls]').classList.toggle('hidden', m === 'triangle' || m === 'circle');

      const lblCA = c.querySelector('[data-lbl-ca]');
      const lblCB = c.querySelector('[data-lbl-cb]');
      const boxCB = c.querySelector('[data-box-cb]');
      if (lblCA) lblCA.textContent = m === 'parabola_conic' ? 'Tham số tiêu p (p > 0)' : (m === 'hyperbola' ? 'Bán trục thực a (a > 0)' : 'Bán trục lớn a (a > b > 0)');
      if (lblCB) lblCB.textContent = m === 'hyperbola' ? 'Bán trục ảo b (b > 0)' : 'Bán trục nhỏ b (b < a)';
      if (boxCB) boxCB.classList.toggle('hidden', m === 'parabola_conic');
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          if (this.state.mode === 'ellipse') {
            this.state.ellipseA = 4.2;
            this.state.ellipseB = 2.6;
          } else if (this.state.mode === 'hyperbola') {
            this.state.ellipseA = 2.2;
            this.state.ellipseB = 1.6;
          } else if (this.state.mode === 'parabola_conic') {
            this.state.ellipseA = 2.0;
          }
          c.querySelector('[data-ctrl="ellipseA"]').value = this.state.ellipseA;
          c.querySelector('[data-ctrl="ellipseB"]').value = this.state.ellipseB;
          c.querySelector('[data-disp="ea"]').textContent = fmt(this.state.ellipseA, 1);
          c.querySelector('[data-disp="eb"]').textContent = fmt(this.state.ellipseB, 1);
          this.syncModeControls();
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-zoom]').forEach(btn => {
        btn.addEventListener('click', () => {
          const delta = btn.dataset.zoom === 'in' ? 6 : -6;
          this.state.zoom = clamp(this.state.zoom + delta, 22, 68);
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-tpreset]').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = btn.dataset.tpreset;
          if (p === 'acute') {
            this.state.pts = [
              { label: 'A', x: -1.0, y: 3.2, color: '#ef4444' },
              { label: 'B', x: -3.5, y: -2.0, color: '#3b82f6' },
              { label: 'C', x: 3.5, y: -2.0, color: '#10b981' }
            ];
          } else if (p === 'right') {
            // Right triangle at A(-3, -1.5): AB(0, 4), AC(5, 0)
            this.state.pts = [
              { label: 'A', x: -2.5, y: -1.5, color: '#ef4444' },
              { label: 'B', x: -2.5, y: 2.5, color: '#3b82f6' },
              { label: 'C', x: 2.5, y: -1.5, color: '#10b981' }
            ];
          } else if (p === 'obtuse') {
            this.state.pts = [
              { label: 'A', x: 0.0, y: 1.0, color: '#ef4444' },
              { label: 'B', x: -4.0, y: -1.5, color: '#3b82f6' },
              { label: 'C', x: 4.0, y: -1.5, color: '#10b981' }
            ];
          } else if (p === 'collinear') {
            this.state.pts = [
              { label: 'A', x: -3.0, y: -1.5, color: '#ef4444' },
              { label: 'B', x: 0.0, y: 0.0, color: '#3b82f6' },
              { label: 'C', x: 3.0, y: 1.5, color: '#10b981' }
            ];
          }
          this.renderAll();
        });
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.state.zoom = 38;
        this.state.pts = [
          { label: 'A', x: -1.5, y: 3.0, color: '#ef4444' },
          { label: 'B', x: -4.0, y: -2.0, color: '#3b82f6' },
          { label: 'C', x: 4.0, y: -1.5, color: '#10b981' }
        ];
        this.state.circleR = 2.8;
        this.state.circleXI = 1.0;
        this.state.circleYI = 0.5;
        this.state.circleThetaDeg = 55;
        this.state.ellipseA = this.state.mode === 'hyperbola' ? 2.2 : (this.state.mode === 'parabola_conic' ? 2.0 : 4.2);
        this.state.ellipseB = this.state.mode === 'hyperbola' ? 1.6 : 2.6;
        this.state.ellipseThetaDeg = 55;
        ['circleR', 'circleXI', 'circleYI', 'circleThetaDeg', 'ellipseA', 'ellipseB', 'ellipseThetaDeg'].forEach(k => {
          const inp = c.querySelector(`[data-ctrl="${k}"]`);
          if (inp) inp.value = this.state[k];
        });
        c.querySelector('[data-disp="cR"]').textContent = fmt(this.state.circleR, 1);
        c.querySelector('[data-disp="cXI"]').textContent = fmt(this.state.circleXI, 1);
        c.querySelector('[data-disp="cYI"]').textContent = fmt(this.state.circleYI, 1);
        c.querySelector('[data-disp="cTh"]').textContent = `${Math.round(this.state.circleThetaDeg)}°`;
        c.querySelector('[data-disp="ea"]').textContent = fmt(this.state.ellipseA, 1);
        c.querySelector('[data-disp="eb"]').textContent = fmt(this.state.ellipseB, 1);
        c.querySelector('[data-disp="eth"]').textContent = `${Math.round(this.state.ellipseThetaDeg)}°`;
        this.renderAll();
      });

      c.querySelectorAll('[data-chk]').forEach(chk => {
        chk.addEventListener('change', e => {
          this.state[chk.dataset.chk] = e.target.checked;
          this.renderAll();
        });
      });

      // Circle sliders
      [
        { key: 'circleR', disp: 'cR', isDeg: false },
        { key: 'circleXI', disp: 'cXI', isDeg: false },
        { key: 'circleYI', disp: 'cYI', isDeg: false },
        { key: 'circleThetaDeg', disp: 'cTh', isDeg: true }
      ].forEach(({ key, disp, isDeg }) => {
        const inp = c.querySelector(`[data-ctrl="${key}"]`);
        if (inp) {
          inp.addEventListener('input', e => {
            this.state[key] = parseFloat(e.target.value);
            const dEl = c.querySelector(`[data-disp="${disp}"]`);
            if (dEl) dEl.textContent = isDeg ? `${Math.round(this.state[key])}°` : fmt(this.state[key], 1);
            this.renderAll();
          });
        }
      });

      // Conic sliders
      ['ellipseA', 'ellipseB', 'ellipseThetaDeg'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (this.state.mode === 'ellipse') {
            if (this.state.ellipseB < 1.0) this.state.ellipseB = 1.0;
            if (this.state.ellipseB >= this.state.ellipseA) {
              this.state.ellipseB = Math.max(0.8, Number((this.state.ellipseA - 0.2).toFixed(1)));
            }
            c.querySelector('[data-ctrl="ellipseB"]').value = this.state.ellipseB;
          } else if (this.state.mode === 'hyperbola' && this.state.ellipseB < 0.8) {
            this.state.ellipseB = 0.8;
            c.querySelector('[data-ctrl="ellipseB"]').value = 0.8;
          }
          c.querySelector('[data-disp="ea"]').textContent = fmt(this.state.ellipseA, 1);
          c.querySelector('[data-disp="eb"]').textContent = fmt(this.state.ellipseB, 1);
          c.querySelector('[data-disp="eth"]').textContent = `${Math.round(this.state.ellipseThetaDeg)}°`;
          this.renderAll();
        });
      });

      // Unified interactive drag handler across all 5 modes
      const getPlaneCoords = (clientX, clientY) => {
        const rect = this.canvas.getBoundingClientRect();
        const w = this._lastWidth || rect.width || 540;
        const h = this._lastHeight || rect.height || 440;
        const scale = this._lastScale || this.state.zoom || 38;
        const ox = w / 2;
        const oy = h / 2;
        const mx = (clientX - rect.left - ox) / scale;
        const my = -(clientY - rect.top - oy) / scale;
        return { mx, my, ox, oy, scale, w, h };
      };

      const onDown = (clientX, clientY) => {
        const { mx, my } = getPlaneCoords(clientX, clientY);
        const m = this.state.mode;
        if (m === 'triangle') {
          let bestIdx = -1;
          let minDist = 0.75;
          this.state.pts.forEach((p, idx) => {
            const d = Math.hypot(p.x - mx, p.y - my);
            if (d < minDist) {
              minDist = d;
              bestIdx = idx;
            }
          });
          this.state.draggingTarget = bestIdx >= 0 ? `tri-${bestIdx}` : null;
        } else if (m === 'circle') {
          const R = this.state.circleR;
          const xI = this.state.circleXI;
          const yI = this.state.circleYI;
          const rad = this.state.circleThetaDeg * DEG_TO_RAD;
          const xM = xI + R * Math.cos(rad);
          const yM = yI + R * Math.sin(rad);
          const dM = Math.hypot(mx - xM, my - yM);
          const dI = Math.hypot(mx - xI, my - yI);
          if (dI < 0.7 && dI < dM) {
            this.state.draggingTarget = 'circle-I';
          } else {
            this.state.draggingTarget = 'circle-M';
            onMove(clientX, clientY);
          }
        } else {
          this.state.draggingTarget = 'conic-M';
          onMove(clientX, clientY);
        }
      };

      const onMove = (clientX, clientY) => {
        if (!this.state.draggingTarget) return;
        const { mx, my } = getPlaneCoords(clientX, clientY);
        const t = this.state.draggingTarget;
        if (t.startsWith('tri-')) {
          const idx = parseInt(t.split('-')[1], 10);
          this.state.pts[idx].x = Math.round(clamp(mx, -6.5, 6.5) * 4) / 4;
          this.state.pts[idx].y = Math.round(clamp(my, -5.0, 5.0) * 4) / 4;
        } else if (t === 'circle-I') {
          this.state.circleXI = Math.round(clamp(mx, -2.5, 2.5) * 2) / 2;
          this.state.circleYI = Math.round(clamp(my, -2.0, 2.0) * 2) / 2;
          const inpX = c.querySelector('[data-ctrl="circleXI"]');
          const inpY = c.querySelector('[data-ctrl="circleYI"]');
          if (inpX) inpX.value = this.state.circleXI;
          if (inpY) inpY.value = this.state.circleYI;
          c.querySelector('[data-disp="cXI"]').textContent = fmt(this.state.circleXI, 1);
          c.querySelector('[data-disp="cYI"]').textContent = fmt(this.state.circleYI, 1);
        } else if (t === 'circle-M') {
          const dx = mx - this.state.circleXI;
          const dy = my - this.state.circleYI;
          let deg = Math.atan2(dy, dx) * RAD_TO_DEG;
          if (deg < 0) deg += 360;
          this.state.circleThetaDeg = Math.round(deg);
          const inpTh = c.querySelector('[data-ctrl="circleThetaDeg"]');
          if (inpTh) inpTh.value = this.state.circleThetaDeg;
          c.querySelector('[data-disp="cTh"]').textContent = `${this.state.circleThetaDeg}°`;
        } else if (t === 'conic-M') {
          let deg = Math.atan2(my, mx) * RAD_TO_DEG;
          if (deg < 0) deg += 360;
          this.state.ellipseThetaDeg = Math.round(deg);
          const inpTh = c.querySelector('[data-ctrl="ellipseThetaDeg"]');
          if (inpTh) inpTh.value = this.state.ellipseThetaDeg;
          c.querySelector('[data-disp="eth"]').textContent = `${this.state.ellipseThetaDeg}°`;
        }
        this.renderAll();
      };

      this.canvas.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
        window.addEventListener('mouseup', () => { this.state.draggingTarget = null; });
        window.addEventListener('resize', () => this.renderAll());
      }
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) onDown(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas.addEventListener('touchmove', e => {
        if (this.state.draggingTarget && e.touches.length === 1) {
          if (e.cancelable) e.preventDefault();
          onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });
      this.canvas.addEventListener('touchend', () => { this.state.draggingTarget = null; });
    }

    renderAll() {
      // Desktop: 440px (in 400-500px range), Mobile: 350px (in 300-400px range)
      const metrics = getCanvasMetrics(this.canvas, 440, 350);
      const { ctx, width, height } = setupCanvas(this.canvas, metrics.width, metrics.height);
      const theme = getTheme();
      const ox = width / 2;
      const oy = height / 2;

      // Compute adaptive scale so geometry objects are always fully visible inside the canvas
      let baseScale = metrics.isMobile ? Math.min(this.state.zoom, 30) : this.state.zoom;
      if (this.state.mode === 'circle') {
        const maxExtentX = Math.abs(this.state.circleXI) + this.state.circleR + 1.4;
        const maxExtentY = Math.abs(this.state.circleYI) + this.state.circleR + 1.2;
        const fitScale = Math.min((width * 0.48) / maxExtentX, (height * 0.48) / maxExtentY);
        baseScale = clamp(Math.min(baseScale, fitScale), 22, 68);
      } else if (this.state.mode === 'ellipse') {
        const fitScale = Math.min((width * 0.44) / (this.state.ellipseA + 0.8), (height * 0.44) / (this.state.ellipseB + 0.8));
        baseScale = clamp(Math.min(baseScale, fitScale), 22, 68);
      }
      const scale = Math.round(baseScale);
      this._lastWidth = width;
      this._lastHeight = height;
      this._lastScale = scale;

      drawCoordinatePlane(ctx, width, height, ox, oy, scale, scale, theme);

      if (this.state.mode === 'triangle') {
        this.renderTriangleMode(ctx, ox, oy, scale, theme);
      } else if (this.state.mode === 'circle') {
        this.renderCircleTangentMode(ctx, ox, oy, scale, width, height, theme);
      } else if (this.state.mode === 'hyperbola') {
        this.renderHyperbolaMode(ctx, ox, oy, scale, width, height, theme);
      } else if (this.state.mode === 'parabola_conic') {
        this.renderParabolaConicMode(ctx, ox, oy, scale, width, height, theme);
      } else {
        this.renderEllipseMode(ctx, ox, oy, scale, theme);
      }
    }

    renderCircleTangentMode(ctx, ox, oy, scale, width, height, theme) {
      const R = Math.max(1.0, this.state.circleR);
      const xI = clamp(this.state.circleXI, -2.5, 2.5);
      const yI = clamp(this.state.circleYI, -2.0, 2.0);
      const rad = this.state.circleThetaDeg * DEG_TO_RAD;
      // Guarantee M(x0, y0) lies strictly on Circle (C): (x0 - xI)^2 + (y0 - yI)^2 = R^2
      const x0 = xI + R * Math.cos(rad);
      const y0 = yI + R * Math.sin(rad);
      const nx = x0 - xI;
      const ny = y0 - yI;

      const cxPx = ox + xI * scale;
      const cyPx = oy - yI * scale;
      const mxPx = ox + x0 * scale;
      const myPx = oy - y0 * scale;
      const rPx = R * scale;

      ctx.save();
      // 1. Draw Circle (C)
      ctx.strokeStyle = theme.blue;
      ctx.fillStyle = 'rgba(59, 130, 246, 0.12)';
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.arc(cxPx, cyPx, rPx, 0, TWO_PI);
      ctx.fill();
      ctx.stroke();

      // 2. Draw Radius IM and Right-Angle Symbol at M
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(cxPx, cyPx);
      ctx.lineTo(mxPx, myPx);
      ctx.stroke();

      // Right-angle square marker at M(mxPx, myPx)
      const ux = (cxPx - mxPx) / rPx; // unit vector M -> I in screen coords
      const uy = (cyPx - myPx) / rPx;
      const vx = -uy; // unit tangent vector in screen coords
      const vy = ux;
      const sq = 11;
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(mxPx + ux * sq, myPx + uy * sq);
      ctx.lineTo(mxPx + ux * sq + vx * sq, myPx + uy * sq + vy * sq);
      ctx.lineTo(mxPx + vx * sq, myPx + vy * sq);
      ctx.stroke();

      // 3. Draw Tangent Line Δ at M(x0, y0): nx*(x - x0) + ny*(y - y0) = 0
      const tx = -ny / R, ty = nx / R;
      ctx.strokeStyle = theme.rose;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.moveTo(ox + (x0 - 12 * tx) * scale, oy - (y0 - 12 * ty) * scale);
      ctx.lineTo(ox + (x0 + 12 * tx) * scale, oy - (y0 + 12 * ty) * scale);
      ctx.stroke();

      // Midpoint label for Radius R
      const midRx = (cxPx + mxPx) / 2;
      const midRy = (cyPx + myPx) / 2;
      ctx.fillStyle = theme.emerald;
      ctx.font = 'bold 12px monospace';
      ctx.fillText(`R = ${fmt(R, 1)}`, midRx + 6, midRy - 6);

      // Draw Center I and Contact Point M
      [
        { x: cxPx, y: cyPx, l: `I(${fmt(xI, 1)}; ${fmt(yI, 1)})`, col: theme.blue },
        { x: mxPx, y: myPx, l: `M(${fmt(x0, 2)}; ${fmt(y0, 2)})`, col: theme.rose }
      ].forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6.5, 0, TWO_PI);
        ctx.fillStyle = pt.col;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 12px monospace';
        ctx.fillText(pt.l, pt.x + 9, pt.y - 9);
      });
      ctx.restore();

      const infoBox = this.container.querySelector('[data-info-box]');
      if (infoBox) {
        const cConst = -(nx * x0 + ny * y0);
        const circleCheck = (x0 - xI) * (x0 - xI) + (y0 - yI) * (y0 - yI);
        const tangentCheckAtM = nx * x0 + ny * y0 + cConst;
        const cGen = xI * xI + yI * yI - R * R;
        const xIStr = xI === 0 ? 'x²' : `(x ${xI > 0 ? '− ' + fmt(xI, 1) : '+ ' + fmt(Math.abs(xI), 1)})²`;
        const yIStr = yI === 0 ? 'y²' : `(y ${yI > 0 ? '− ' + fmt(yI, 1) : '+ ' + fmt(Math.abs(yI), 1)})²`;

        infoBox.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Phương Trình Đường Tròn (C) &amp; Tiếp Tuyến Δ Tại M (Bài 21)</div>
          <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 font-mono font-bold text-center text-xs sm:text-sm">
            (C): ${xIStr} + ${yIStr} = ${fmt(R * R, 2)} (R = ${fmt(R, 1)})
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tâm I(a; b) &amp; Điểm M ∈ (C)</div>
              <div class="font-bold mt-0.5">I(${fmt(xI, 1)}; ${fmt(yI, 1)})<br>M(${fmt(x0, 2)}; ${fmt(y0, 2)})</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">VTPT tiếp tuyến n⃗ = IM⃗</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">IM⃗ = (${fmt(nx, 2)}; ${fmt(ny, 2)})<br>|IM⃗| = R = ${fmt(Math.sqrt(circleCheck), 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 col-span-2">
              <div class="text-[10px] text-rose-700 dark:text-rose-300 font-bold">Phương trình tiếp tuyến Δ tại M(x₀; y₀): (x₀−a)(x−x₀) + (y₀−b)(y−y₀) = 0</div>
              <div class="font-mono font-bold text-rose-900 dark:text-rose-200 mt-0.5">Δ: ${fmt(nx, 2)}x + (${fmt(ny, 2)})y + (${fmt(cConst, 2)}) = 0</div>
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 col-span-2">
              <div class="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">✓ Kiểm chứng tọa độ M(${fmt(x0, 2)}; ${fmt(y0, 2)}) thuộc (C) và thuộc tiếp tuyến Δ:</div>
              <div class="font-mono text-[11px] text-emerald-900 dark:text-emerald-200 mt-0.5">
                • Thay M vào (C): (${fmt(x0, 2)}−${fmt(xI, 1)})² + (${fmt(y0, 2)}−${fmt(yI, 1)})² = ${fmt(circleCheck, 2)} = R²<br>
                • Thay M vào Δ: ${fmt(nx, 2)}·(${fmt(x0, 2)}) + (${fmt(ny, 2)})·(${fmt(y0, 2)}) + (${fmt(cConst, 2)}) = ${fmt(tangentCheckAtM, 2)} (Đúng!)<br>
                • Dạng khai triển (C): x² + y² − (${fmt(2 * xI, 1)})x − (${fmt(2 * yI, 1)})y + (${fmt(cGen, 2)}) = 0
              </div>
            </div>
          </div>
        `;
      }
    }

    renderHyperbolaMode(ctx, ox, oy, scale, width, height, theme) {
      const a = clamp(this.state.ellipseA, 1.2, 3.2);
      const b = clamp(Math.abs(this.state.ellipseB), 0.8, 2.8);
      const c = Math.sqrt(a * a + b * b);
      const e = c / a;

      ctx.save();
      // Fundamental rectangle 2a x 2b
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = theme.grid;
      ctx.strokeRect(ox - a * scale, oy - b * scale, 2 * a * scale, 2 * b * scale);

      // Asymptotes y = ±(b/a)x
      ctx.setLineDash([5, 4]);
      ctx.strokeStyle = theme.muted;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(ox - 9 * scale, oy - (b / a) * (-9) * scale);
      ctx.lineTo(ox + 9 * scale, oy - (b / a) * 9 * scale);
      ctx.moveTo(ox - 9 * scale, oy + (b / a) * (-9) * scale);
      ctx.lineTo(ox + 9 * scale, oy + (b / a) * 9 * scale);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Hyperbola branches x = ±a cosh(t), y = b sinh(t)
      ctx.strokeStyle = theme.rose;
      ctx.lineWidth = 2.8;
      [-1, 1].forEach(sign => {
        ctx.beginPath();
        for (let t = -1.6; t <= 1.6; t += 0.04) {
          const x = sign * a * Math.cosh(t);
          const y = b * Math.sinh(t);
          const px = ox + x * scale, py = oy - y * scale;
          if (t === -1.6) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      });

      const tM = ((this.state.ellipseThetaDeg - 180) / 180) * 1.1;
      const mx = a * Math.cosh(tM);
      const my = b * Math.sinh(tM);
      const f1x = ox - c * scale, f2x = ox + c * scale;
      const mpx = ox + mx * scale, mpy = oy - my * scale;

      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      ctx.moveTo(f1x, oy);
      ctx.lineTo(mpx, mpy);
      ctx.lineTo(f2x, oy);
      ctx.stroke();
      ctx.setLineDash([]);

      [
        { x: f1x, y: oy, l: `F₁(-${fmt(c, 2)};0)`, col: theme.amber },
        { x: f2x, y: oy, l: `F₂(${fmt(c, 2)};0)`, col: theme.amber },
        { x: mpx, y: mpy, l: `M(${fmt(mx, 2)};${fmt(my, 2)})`, col: theme.rose }
      ].forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6, 0, TWO_PI);
        ctx.fillStyle = pt.col;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 11px monospace';
        ctx.fillText(pt.l, pt.x - 22, pt.y - 10);
      });
      ctx.restore();

      const mf1 = Math.hypot(mx + c, my);
      const mf2 = Math.hypot(mx - c, my);
      const infoBox = this.container.querySelector('[data-info-box]');
      if (infoBox) {
        infoBox.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Phương Trình Chính Tắc Của Hypebol (H) (Bài 22)</div>
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 font-mono font-bold text-center text-sm">
            x² / ${fmt(a * a, 2)} − y² / ${fmt(b * b, 2)} = 1 (a = ${fmt(a, 1)}, b = ${fmt(b, 1)})
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tiêu điểm F₁, F₂ (c = √(a²+b²))</div>
              <div class="font-bold mt-0.5">F₁(−${fmt(c, 2)}; 0), F₂(${fmt(c, 2)}; 0)<br>Tiêu cự 2c = ${fmt(2 * c, 2)} • e = ${fmt(e, 2)} &gt; 1</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Hiệu bán kính qua tiêu |MF₁ − MF₂| = 2a</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">|${fmt(mf1, 2)} − ${fmt(mf2, 2)}| = ${fmt(2 * a, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-2">
              <div class="text-[10px] text-slate-500">Đỉnh thực A₁(−a;0), A₂(a;0) &amp; Hai đường tiệm cận</div>
              <div class="font-mono font-bold mt-0.5">A₁(−${fmt(a, 1)}; 0), A₂(${fmt(a, 1)}; 0) • Tiệm cận: y = ±(b/a)x = ±${fmt(b / a, 2)}x</div>
            </div>
          </div>
        `;
      }
    }

    renderParabolaConicMode(ctx, ox, oy, scale, width, height, theme) {
      const p = clamp(this.state.ellipseA, 0.8, 4.5);
      const yM = ((this.state.ellipseThetaDeg - 180) / 180) * 3.5;
      const xM = (yM * yM) / (2 * p);
      const fx = p / 2;
      const dirX = -p / 2;

      ctx.save();
      // Directrix x = -p/2
      ctx.setLineDash([5, 4]);
      ctx.strokeStyle = theme.rose;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(ox + dirX * scale, 0);
      ctx.lineTo(ox + dirX * scale, height);
      ctx.stroke();
      ctx.fillStyle = theme.rose;
      ctx.font = 'bold 11px monospace';
      ctx.fillText(`Đường chuẩn Δ: x = -${fmt(p / 2, 2)}`, Math.max(8, ox + dirX * scale - 95), 22);

      // Parabola y^2 = 2px => x = y^2 / (2p)
      ctx.setLineDash([]);
      ctx.strokeStyle = theme.blue;
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      for (let y = -4.8; y <= 4.8; y += 0.06) {
        const x = (y * y) / (2 * p);
        const px = ox + x * scale, py = oy - y * scale;
        if (y === -4.8) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Segments MF and MH (to directrix)
      const mpx = ox + xM * scale, mpy = oy - yM * scale;
      const fpx = ox + fx * scale, fpy = oy;
      const hpx = ox + dirX * scale, hpy = mpy;

      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(fpx, fpy);
      ctx.lineTo(mpx, mpy);
      ctx.lineTo(hpx, hpy);
      ctx.stroke();
      ctx.setLineDash([]);

      [
        { x: fpx, y: fpy, l: `F(${fmt(fx, 2)};0)`, col: theme.amber },
        { x: hpx, y: hpy, l: `H(-${fmt(fx, 2)};${fmt(yM, 1)})`, col: theme.rose },
        { x: mpx, y: mpy, l: `M(${fmt(xM, 2)};${fmt(yM, 2)})`, col: theme.emerald }
      ].forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6, 0, TWO_PI);
        ctx.fillStyle = pt.col;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 11px monospace';
        ctx.fillText(pt.l, pt.x + 8, pt.y - 8);
      });
      ctx.restore();

      const distMF = Math.hypot(xM - fx, yM);
      const distMH = xM + p / 2;
      const infoBox = this.container.querySelector('[data-info-box]');
      if (infoBox) {
        infoBox.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Phương Trình Chính Tắc Của Parabol (P): y² = 2px (Bài 22)</div>
          <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 font-mono font-bold text-center text-sm">
            y² = ${fmt(2 * p, 2)}x (Tham số tiêu p = ${fmt(p, 2)} &gt; 0)
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tiêu điểm F(p/2; 0) &amp; Đường chuẩn Δ</div>
              <div class="font-bold mt-0.5">F(${fmt(p / 2, 2)}; 0)<br>Δ: x + ${fmt(p / 2, 2)} = 0</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Kiểm chứng MF = d(M, Δ) = x_M + p/2</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">MF = ${fmt(distMF, 2)} = d(M, Δ) = ${fmt(distMH, 2)}</div>
            </div>
          </div>
        `;
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

      const G = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
      const pSum = a + b + c;
      const I = {
        x: (a * A.x + b * B.x + c * C.x) / pSum,
        y: (a * A.y + b * B.y + c * C.y) / pSum
      };
      const rIn = collinear ? 0 : (2 * area) / pSum;

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
        H = { x: 3 * G.x - 2 * O.x, y: 3 * G.y - 2 * O.y };
      }

      if (!collinear && this.state.showCircumcircle && ROut < 25) {
        ctx.save();
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 1.8;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.arc(ox + O.x * scale, oy - O.y * scale, ROut * scale, 0, TWO_PI);
        ctx.stroke();
        ctx.restore();
      }

      if (!collinear && this.state.showIncircle) {
        ctx.save();
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.arc(ox + I.x * scale, oy - I.y * scale, rIn * scale, 0, TWO_PI);
        ctx.stroke();
        ctx.restore();
      }

      ctx.save();
      ctx.fillStyle = 'rgba(99, 102, 241, 0.14)';
      ctx.strokeStyle = theme.indigo;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.moveTo(ox + A.x * scale, oy - A.y * scale);
      ctx.lineTo(ox + B.x * scale, oy - B.y * scale);
      ctx.lineTo(ox + C.x * scale, oy - C.y * scale);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

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
          ctx.arc(px, py, 4.5, 0, TWO_PI);
          ctx.fillStyle = cPt.col;
          ctx.fill();
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(cPt.name, px + 6, py - 6);
        });
        ctx.restore();
      }

      this.state.pts.forEach(p => {
        const px = ox + p.x * scale;
        const py = oy - p.y * scale;
        ctx.beginPath();
        ctx.arc(px, py, 7.5, 0, TWO_PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.2;
        ctx.stroke();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`${p.label}(${fmt(p.x, 1)}; ${fmt(p.y, 1)})`, px + 9, py - 8);
      });

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
          <div class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Thông Số Hệ Thức Lượng Tam Giác ABC (Bài 6)</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Độ dài 3 cạnh (a, b, c)</div>
              <div class="font-bold mt-0.5">a=${fmt(a, 2)} • b=${fmt(b, 2)} • c=${fmt(c, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Số đo 3 góc (Â + B̂ + Ĉ = 180°)</div>
              <div class="font-bold mt-0.5">Â=${fmt(angA, 1)}° • B̂=${fmt(angB, 1)}° • Ĉ=${fmt(angC, 1)}°</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Diện tích S (Heron) &amp; Bán kính R, r</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">S = ${fmt(area, 2)} • R = ${fmt(ROut, 2)} • r = ${fmt(rIn, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Định lý Sin: a / sin Â = 2R</div>
              <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">${fmt(a / Math.sin(angA * DEG_TO_RAD), 2)} = 2R (${fmt(2 * ROut, 2)})</div>
            </div>
            <div class="p-2.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 col-span-2">
              <div class="text-[10px] text-indigo-700 dark:text-indigo-300 font-semibold">Phương trình đường tròn ngoại tiếp tâm O(${fmt(O.x, 1)}; ${fmt(O.y, 1)}):</div>
              <div class="font-mono font-bold text-indigo-900 dark:text-indigo-200 mt-0.5">(x ${O.x >= 0 ? '− ' + fmt(O.x, 2) : '+ ' + fmt(Math.abs(O.x), 2)})² + (y ${O.y >= 0 ? '− ' + fmt(O.y, 2) : '+ ' + fmt(Math.abs(O.y), 2)})² = ${fmt(ROut * ROut, 2)}</div>
            </div>
          </div>
        `;
      }
    }

    renderEllipseMode(ctx, ox, oy, scale, theme) {
      const a = Math.max(1.4, this.state.ellipseA);
      const b = clamp(this.state.ellipseB, 0.8, a - 0.2);
      const c = Math.sqrt(Math.max(0, a * a - b * b));
      const e = c / a;
      const rad = this.state.ellipseThetaDeg * DEG_TO_RAD;
      const mx = a * Math.cos(rad);
      const my = b * Math.sin(rad);

      ctx.save();
      // Fundamental rectangle 2a x 2b
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = theme.grid;
      ctx.strokeRect(ox - a * scale, oy - b * scale, 2 * a * scale, 2 * b * scale);
      ctx.setLineDash([]);

      // Draw Ellipse
      ctx.strokeStyle = theme.indigo;
      ctx.fillStyle = 'rgba(99, 102, 241, 0.12)';
      ctx.lineWidth = 2.8;
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
      ctx.lineWidth = 2.0;
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
        ctx.arc(pt.x, pt.y, 6, 0, TWO_PI);
        ctx.fillStyle = pt.col;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.8;
        ctx.stroke();
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
          <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Phương Trình Chính Tắc Của Elip (E) (Bài 22)</div>
          <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 font-mono font-bold text-center text-sm">
            x² / ${fmt(a * a, 2)} + y² / ${fmt(b * b, 2)} = 1 (a = ${fmt(a, 1)} &gt; b = ${fmt(b, 1)} &gt; 0)
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tiêu cự 2c (c=√(a²−b²)) &amp; Tâm sai e</div>
              <div class="font-bold mt-0.5">c = ${fmt(c, 2)} • 2c = ${fmt(2 * c, 2)} • e = ${fmt(e, 3)} &lt; 1</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tổng bán kính qua tiêu MF₁ + MF₂ = 2a</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">${fmt(mf1, 2)} + ${fmt(mf2, 2)} = ${fmt(2 * a, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-2">
              <div class="text-[10px] text-slate-500">Độ dài trục lớn 2a, trục nhỏ 2b &amp; 4 đỉnh</div>
              <div class="font-mono font-bold mt-0.5">2a = ${fmt(2 * a, 1)} • 2b = ${fmt(2 * b, 1)} • Đỉnh: (±${fmt(a, 1)}; 0), (0; ±${fmt(b, 1)})</div>
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
        dx: options.dx !== undefined ? options.dx : 1.2,
        intA: options.intA !== undefined ? options.intA : -1.0,
        intB: options.intB !== undefined ? options.intB : 2.0,
        showTangent: options.showTangent !== undefined ? options.showTangent : true,
        showSecant: options.showSecant !== undefined ? options.showSecant : false,
        showIntegral: options.showIntegral !== undefined ? options.showIntegral : true,
        baseA: options.baseA !== undefined ? options.baseA : 2.0 // for exp / log
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
      let volRev = 0;
      for (let i = 0; i < N; i++) {
        const xm = a + (i + 0.5) * h;
        const ym = this.evalFn(xm);
        if (Number.isNaN(ym)) return { valid: false, reason: 'Không xác định trên đoạn lấy tích phân' };
        signedSum += ym * h;
        areaSum += Math.abs(ym) * h;
        volRev += Math.PI * ym * ym * h;
      }
      return { valid: true, signed: signedSum, area: areaSum, volRev, a, b };
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
        ? `∫ f(x)dx = ${fmt(intRes.signed, 3)} • Diện tích S = ${fmt(intRes.area, 3)} • Thể tích tròn xoay V_Ox = ${fmt(intRes.volRev, 3)}`
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

  // =========================================================================
  // MÔ PHỎNG 7: BẤT PHƯƠNG TRÌNH & HỆ BPT BẬC NHẤT HAI ẨN — QUY HOẠCH TUYẾN TÍNH
  // =========================================================================
  class LinearInequalitySim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'single', // 'single' (ax + by <= c) | 'system' (Hệ BPT & Quy hoạch tuyến tính)
        a: options.a !== undefined ? options.a : 2.0,
        b: options.b !== undefined ? options.b : 1.0,
        c: options.c !== undefined ? options.c : 4.0,
        px: 1.0, // Điểm kiểm tra M(px, py) kéo được
        py: 1.0,
        dragging: false
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-layer-group"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 7: Miền Nghiệm BPT &amp; Hệ BPT Bậc Nhất Hai Ẩn</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Bài 3 &amp; Bài 4</span>
                </div>
                <p class="text-xs text-sky-100/90 mt-0.5">Kéo điểm kiểm tra $M(x_0; y_0)$ trên mặt phẳng tọa độ hoặc điều chỉnh $a, b, c$ để khảo sát miền nghiệm và bài toán tối ưu $F(x,y)$</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button type="button" data-mode="single" class="px-3 py-1.5 rounded-xl bg-white text-blue-900 font-bold text-xs cursor-pointer">1. BPT đơn (ax + by ≤ c)</button>
              <button type="button" data-mode="system" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">2. Hệ BPT &amp; Tối ưu F(x,y)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="ineq-canvas block w-full h-[320px] rounded-xl border border-slate-200 dark:border-slate-800 cursor-grab active:cursor-grabbing" style="touch-action: none;"></canvas>
              <div class="mt-2 text-[11px] text-slate-600 dark:text-slate-400 flex items-center justify-between">
                <span><i class="fa-solid fa-hand-pointer text-blue-500 mr-1"></i>Kéo điểm $M(x_0; y_0)$ trực tiếp trên mặt phẳng $Oxy$</span>
                <span>Vùng tô màu xanh lá = Miền nghiệm thỏa mãn</span>
              </div>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-ineq-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <div data-single-sliders class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Hệ số $a$</label><span class="font-bold text-blue-600" data-disp="a">2.0</span></div>
              <input type="range" data-ctrl="a" min="-3" max="3" step="0.5" value="2.0" class="w-full accent-blue-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Hệ số $b$</label><span class="font-bold text-indigo-600" data-disp="b">1.0</span></div>
              <input type="range" data-ctrl="b" min="-3" max="3" step="0.5" value="1.0" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Hằng số $c$</label><span class="font-bold text-emerald-600" data-disp="c">4.0</span></div>
              <input type="range" data-ctrl="c" min="-4" max="6" step="0.5" value="4.0" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.ineq-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = b.dataset.mode === this.state.mode
              ? 'px-3 py-1.5 rounded-xl bg-white text-blue-900 font-bold text-xs cursor-pointer'
              : 'px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          c.querySelector('[data-single-sliders]').classList.toggle('hidden', this.state.mode !== 'single');
          this.renderAll();
        });
      });

      ['a', 'b', 'c'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = fmt(this.state[k], 1);
          this.renderAll();
        });
      });

      const updatePt = (clientX, clientY) => {
        const rect = this.canvas.getBoundingClientRect();
        const ox = this.state.mode === 'system' ? rect.width * 0.25 : rect.width * 0.5;
        const oy = this.state.mode === 'system' ? rect.height * 0.78 : rect.height * 0.55;
        const scale = 32;
        this.state.px = Math.round(clamp((clientX - rect.left - ox) / scale, -6, 7) * 4) / 4;
        this.state.py = Math.round(clamp(-(clientY - rect.top - oy) / scale, -4, 6) * 4) / 4;
        this.renderAll();
      };

      this.canvas.addEventListener('mousedown', e => { this.state.dragging = true; updatePt(e.clientX, e.clientY); });
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', e => { if (this.state.dragging) updatePt(e.clientX, e.clientY); });
        window.addEventListener('mouseup', () => { this.state.dragging = false; });
        window.addEventListener('resize', () => this.renderAll());
      }
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) { this.state.dragging = true; updatePt(e.touches[0].clientX, e.touches[0].clientY); }
      }, { passive: true });
      this.canvas.addEventListener('touchmove', e => {
        if (this.state.dragging && e.touches.length === 1) {
          if (e.cancelable) e.preventDefault();
          updatePt(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });
      this.canvas.addEventListener('touchend', () => { this.state.dragging = false; });
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 320;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      const scale = 32;
      const ox = this.state.mode === 'system' ? width * 0.25 : width * 0.5;
      const oy = this.state.mode === 'system' ? height * 0.78 : height * 0.55;

      drawCoordinatePlane(ctx, width, height, ox, oy, scale, scale, theme);

      const { a, b, c, px, py } = this.state;
      const infoEl = this.container.querySelector('[data-ineq-info]');

      if (this.state.mode === 'single') {
        const degenerate = Math.abs(a) < 1e-6 && Math.abs(b) < 1e-6;
        if (!degenerate) {
          // Shade half-plane ax + by <= c
          ctx.save();
          ctx.fillStyle = 'rgba(16, 185, 129, 0.20)';
          for (let sx = 0; sx < width; sx += 6) {
            for (let sy = 0; sy < height; sy += 6) {
              const x = (sx - ox) / scale;
              const y = (oy - sy) / scale;
              if (a * x + b * y <= c + 1e-6) {
                ctx.fillRect(sx, sy, 6, 6);
              }
            }
          }
          // Draw boundary line ax + by = c
          ctx.strokeStyle = theme.blue;
          ctx.lineWidth = 2.6;
          ctx.beginPath();
          if (Math.abs(b) > 1e-5) {
            const xL = -10, xR = 10;
            const yL = (c - a * xL) / b;
            const yR = (c - a * xR) / b;
            ctx.moveTo(ox + xL * scale, oy - yL * scale);
            ctx.lineTo(ox + xR * scale, oy - yR * scale);
          } else {
            const x0 = c / a;
            ctx.moveTo(ox + x0 * scale, 0);
            ctx.lineTo(ox + x0 * scale, height);
          }
          ctx.stroke();
          ctx.restore();
        }

        const valM = a * px + b * py;
        const ok = valM <= c + 1e-6;
        const mScreenX = ox + px * scale;
        const mScreenY = oy - py * scale;
        ctx.beginPath();
        ctx.arc(mScreenX, mScreenY, 7, 0, TWO_PI);
        ctx.fillStyle = ok ? theme.emerald : theme.rose;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 12px monospace';
        ctx.fillText(`M(${fmt(px, 1)}; ${fmt(py, 1)})`, mScreenX + 9, mScreenY - 7);

        if (infoEl) {
          infoEl.innerHTML = degenerate
            ? `<div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-300 text-rose-800 dark:text-rose-200 font-bold">Trường hợp suy biến a = b = 0: BPT trở thành 0 ≤ ${fmt(c)} (${c >= 0 ? 'Nghiệm đúng với mọi (x;y) ∈ ℝ²' : 'Vô nghiệm'})</div>`
            : `
              <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Kiểm Tra Điểm M Trên Miền Nghiệm BPT</div>
              <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 font-mono font-bold text-center text-sm">
                ${fmt(a)}x + (${fmt(b)})y ≤ ${fmt(c)}
              </div>
              <div class="p-3 rounded-xl border ${ok ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-900 dark:text-rose-200'}">
                <div class="font-bold">Thay tọa độ M(${fmt(px)}; ${fmt(py)}) vào vế trái:</div>
                <div class="font-mono mt-1">${fmt(a)}·(${fmt(px)}) + ${fmt(b)}·(${fmt(py)}) = <strong>${fmt(valM, 2)}</strong> ${ok ? '≤' : '>'} ${fmt(c)}</div>
                <div class="mt-1 font-extrabold">${ok ? '✓ Điểm M THUỘC miền nghiệm!' : '✗ Điểm M KHÔNG thuộc miền nghiệm!'}</div>
              </div>
            `;
        }
      } else {
        // System of inequalities: x >= 0, y >= 0, x + y <= 5, 2x + y <= 8
        // Vertices: O(0,0), A(0,5), B(3,2), C(4,0)
        // Objective function: F(x, y) = 3x + 2y => Max at B(3, 2) with F = 13
        const verts = [
          { l: 'O(0;0)', x: 0, y: 0 },
          { l: 'A(0;5)', x: 0, y: 5 },
          { l: 'B(3;2)', x: 3, y: 2 },
          { l: 'C(4;0)', x: 4, y: 0 }
        ];
        ctx.save();
        ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        verts.forEach((v, idx) => {
          const vx = ox + v.x * scale;
          const vy = oy - v.y * scale;
          if (idx === 0) ctx.moveTo(vx, vy);
          else ctx.lineTo(vx, vy);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        verts.forEach(v => {
          const vx = ox + v.x * scale;
          const vy = oy - v.y * scale;
          ctx.beginPath();
          ctx.arc(vx, vy, 5, 0, TWO_PI);
          ctx.fillStyle = theme.amber;
          ctx.fill();
          ctx.fillStyle = theme.text;
          ctx.font = 'bold 11px monospace';
          ctx.fillText(v.l, vx + 6, vy - 6);
        });
        ctx.restore();

        const inFeasible = px >= -1e-5 && py >= -1e-5 && (px + py <= 5 + 1e-5) && (2 * px + py <= 8 + 1e-5);
        const fVal = 3 * px + 2 * py;
        const mScreenX = ox + px * scale;
        const mScreenY = oy - py * scale;
        ctx.beginPath();
        ctx.arc(mScreenX, mScreenY, 7, 0, TWO_PI);
        ctx.fillStyle = inFeasible ? theme.emerald : theme.rose;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Bài Toán Quy Hoạch Tuyến Tính (Tối Ưu F = 3x + 2y)</div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px]">
              Hệ BPT: x ≥ 0; y ≥ 0; x + y ≤ 5; 2x + y ≤ 8<br>
              Miền nghiệm: Tứ giác lồi OABC
            </div>
            <div class="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800">F(O) = 3(0)+2(0) = 0</div>
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800">F(A) = 3(0)+2(5) = 10</div>
              <div class="p-2 rounded-lg bg-amber-100/80 dark:bg-amber-950/60 font-extrabold text-amber-800 dark:text-amber-300">F(B) = 3(3)+2(2) = 13 (MAX)</div>
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800">F(C) = 3(4)+2(0) = 12</div>
            </div>
            <div class="p-2.5 rounded-xl border ${inFeasible ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300'}">
              Điểm đang chọn M(${fmt(px)}; ${fmt(py)}): <strong>F(M) = ${fmt(fVal, 2)}</strong> (${inFeasible ? 'Thuộc miền OABC' : 'Ngoài miền OABC'})
            </div>
          `;
        }
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 8: VECTƠ (BÀI 7–11) & PHƯƠNG TRÌNH ĐƯỜNG THẲNG, VỊ TRÍ TƯƠNG ĐỐI OXY (BÀI 19–20)
  // =========================================================================
  class VectorLinePlane2DSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'vectors', // 'concepts' | 'vectors' | 'line' | 'twolines'
        scalarK: options.scalarK !== undefined ? options.scalarK : 1.5,
        ux: options.ux !== undefined ? options.ux : 3.0,
        uy: options.uy !== undefined ? options.uy : 2.0,
        vx: options.vx !== undefined ? options.vx : 1.0,
        vy: options.vy !== undefined ? options.vy : 3.0,
        la: options.la !== undefined ? options.la : 2.0,
        lb: options.lb !== undefined ? options.lb : -1.0,
        lc: options.lc !== undefined ? options.lc : -1.0,
        l2a: options.l2a !== undefined ? options.l2a : 1.0,
        l2b: options.l2b !== undefined ? options.l2b : 2.0,
        l2c: options.l2c !== undefined ? options.l2c : -3.0,
        mx: -2.0,
        my: 2.0,
        draggingTarget: null
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    initDOM() {
      const m = this.state.mode;
      const btnCls = (modeName) => m === modeName
        ? 'px-2.5 py-1.5 rounded-xl bg-white text-indigo-900 font-bold text-xs cursor-pointer'
        : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';

      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-location-arrow"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Vectơ (Bài 7–11) &amp; Đường Thẳng Oxy (Bài 19–20)</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Chương IV &amp; VII</span>
                </div>
                <p class="text-xs text-indigo-100/90 mt-0.5">Kéo ngọn vectơ $\\vec{u}, \\vec{v}$ hoặc điểm $M_0$ để khảo sát vectơ cùng phương, $k\\vec{u}$, tích vô hướng, PT đường thẳng và góc giữa 2 đường thẳng</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-mode="concepts" class="${btnCls('concepts')}">1. Khái niệm &amp; k·u⃗ (Bài 7, 9)</button>
              <button type="button" data-mode="vectors" class="${btnCls('vectors')}">2. Tổng, Tọa độ &amp; Tích vô hướng (Bài 8, 10, 11)</button>
              <button type="button" data-mode="line" class="${btnCls('line')}">3. PT Đường thẳng (Bài 19)</button>
              <button type="button" data-mode="twolines" class="${btnCls('twolines')}">4. Hai đường thẳng &amp; Góc (Bài 20)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="vec-canvas block w-full h-[320px] rounded-xl border border-slate-200 dark:border-slate-800 cursor-grab active:cursor-grabbing" style="touch-action: none;"></canvas>
              <div class="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
                <i class="fa-solid fa-arrows-up-down-left-right text-indigo-500 mr-1"></i>Kéo trực tiếp đầu mút $\\vec{u}$ (xanh dương), $\\vec{v}$ (hồng) hoặc điểm $M_0$ trên mặt phẳng tọa độ
              </div>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-vec-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Scalar k slider for concepts mode -->
          <div data-scalar-sliders class="${m === 'concepts' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-4">
            <div class="flex-1 min-w-[200px] space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Số thực $k$ trong tích $k\\vec{u}$ (Bài 7 &amp; Bài 9)</label><span class="font-bold text-indigo-600" data-disp="sk">${fmt(this.state.scalarK, 1)}</span></div>
              <input type="range" data-ctrl="scalarK" min="-2.5" max="2.5" step="0.25" value="${this.state.scalarK}" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
            <div class="flex flex-wrap items-center gap-1.5 text-xs">
              <button type="button" data-kpreset="1" class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold cursor-pointer">k = 1 (Hai vectơ bằng nhau)</button>
              <button type="button" data-kpreset="-1" class="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 font-bold cursor-pointer">k = −1 (Hai vectơ đối nhau)</button>
              <button type="button" data-kpreset="0" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold cursor-pointer">k = 0 (Vectơ-không 0⃗)</button>
            </div>
          </div>

          <!-- Line sliders for line / twolines modes -->
          <div data-line-sliders class="${m === 'line' || m === 'twolines' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">VTPT $a_1$ ($\\Delta_1: a_1x+b_1y+c_1=0$)</label><span class="font-bold text-indigo-600" data-disp="la">${fmt(this.state.la, 1)}</span></div>
              <input type="range" data-ctrl="la" min="-3" max="3" step="0.5" value="${this.state.la}" class="w-full accent-indigo-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">VTPT $b_1$</label><span class="font-bold text-blue-600" data-disp="lb">${fmt(this.state.lb, 1)}</span></div>
              <input type="range" data-ctrl="lb" min="-3" max="3" step="0.5" value="${this.state.lb}" class="w-full accent-blue-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Hệ số $c_1$</label><span class="font-bold text-emerald-600" data-disp="lc">${fmt(this.state.lc, 1)}</span></div>
              <input type="range" data-ctrl="lc" min="-5" max="5" step="0.5" value="${this.state.lc}" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div data-twoline-presets class="${m === 'twolines' ? '' : 'hidden'} sm:col-span-3 flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200 dark:border-slate-800 text-xs">
              <span class="font-bold text-slate-600 dark:text-slate-400">Chọn nhanh vị trí tương đối Δ₁ và Δ₂:</span>
              <button type="button" data-l2preset="perp" class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold cursor-pointer">Vuông góc (φ = 90°)</button>
              <button type="button" data-l2preset="cut" class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 font-bold cursor-pointer">Cắt nhau (φ = 45°)</button>
              <button type="button" data-l2preset="para" class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-bold cursor-pointer">Song song (Δ₁ // Δ₂)</button>
              <button type="button" data-l2preset="coin" class="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 font-bold cursor-pointer">Trùng nhau (Δ₁ ≡ Δ₂)</button>
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.vec-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = b.dataset.mode === this.state.mode
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-indigo-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          c.querySelector('[data-scalar-sliders]').classList.toggle('hidden', this.state.mode !== 'concepts');
          c.querySelector('[data-line-sliders]').classList.toggle('hidden', this.state.mode !== 'line' && this.state.mode !== 'twolines');
          c.querySelector('[data-twoline-presets]').classList.toggle('hidden', this.state.mode !== 'twolines');
          this.renderAll();
        });
      });

      const skInp = c.querySelector('[data-ctrl="scalarK"]');
      const skDisp = c.querySelector('[data-disp="sk"]');
      if (skInp) {
        skInp.addEventListener('input', e => {
          this.state.scalarK = parseFloat(e.target.value);
          if (skDisp) skDisp.textContent = fmt(this.state.scalarK, 2);
          this.renderAll();
        });
      }

      c.querySelectorAll('[data-kpreset]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.scalarK = parseFloat(btn.dataset.kpreset);
          if (skInp) skInp.value = this.state.scalarK;
          if (skDisp) skDisp.textContent = fmt(this.state.scalarK, 2);
          this.renderAll();
        });
      });

      ['la', 'lb', 'lc'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = fmt(this.state[k], 1);
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-l2preset]').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = btn.dataset.l2preset;
          if (p === 'perp') {
            this.state.la = 2.0; this.state.lb = -1.0; this.state.lc = -1.0;
            this.state.l2a = 1.0; this.state.l2b = 2.0; this.state.l2c = -3.0;
          } else if (p === 'cut') {
            this.state.la = 1.0; this.state.lb = -1.0; this.state.lc = 0.0;
            this.state.l2a = 0.0; this.state.l2b = 1.0; this.state.l2c = -2.0;
          } else if (p === 'para') {
            this.state.la = 2.0; this.state.lb = -1.0; this.state.lc = -2.0;
            this.state.l2a = 2.0; this.state.l2b = -1.0; this.state.l2c = 3.0;
          } else if (p === 'coin') {
            this.state.la = 2.0; this.state.lb = -1.0; this.state.lc = -1.0;
            this.state.l2a = 4.0; this.state.l2b = -2.0; this.state.l2c = -2.0;
          }
          ['la', 'lb', 'lc'].forEach(k => {
            const inp = c.querySelector(`[data-ctrl="${k}"]`);
            const disp = c.querySelector(`[data-disp="${k}"]`);
            if (inp) inp.value = this.state[k];
            if (disp) disp.textContent = fmt(this.state[k], 1);
          });
          this.renderAll();
        });
      });

      const onDown = (clientX, clientY) => {
        const rect = this.canvas.getBoundingClientRect();
        const ox = rect.width * 0.45, oy = rect.height * 0.58, scale = 30;
        const x = (clientX - rect.left - ox) / scale;
        const y = -(clientY - rect.top - oy) / scale;
        if (this.state.mode === 'vectors' || this.state.mode === 'concepts') {
          const du = Math.hypot(x - this.state.ux, y - this.state.uy);
          const dv = Math.hypot(x - this.state.vx, y - this.state.vy);
          this.state.draggingTarget = du <= dv ? 'u' : 'v';
        } else {
          this.state.draggingTarget = 'm';
        }
        onMove(clientX, clientY);
      };

      const onMove = (clientX, clientY) => {
        if (!this.state.draggingTarget) return;
        const rect = this.canvas.getBoundingClientRect();
        const ox = rect.width * 0.45, oy = rect.height * 0.58, scale = 30;
        const x = Math.round(clamp((clientX - rect.left - ox) / scale, -5, 6) * 2) / 2;
        const y = Math.round(clamp(-(clientY - rect.top - oy) / scale, -4, 5) * 2) / 2;
        if (this.state.draggingTarget === 'u') { this.state.ux = x; this.state.uy = y; }
        else if (this.state.draggingTarget === 'v') { this.state.vx = x; this.state.vy = y; }
        else if (this.state.draggingTarget === 'm') { this.state.mx = x; this.state.my = y; }
        this.renderAll();
      };

      this.canvas.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
        window.addEventListener('mouseup', () => { this.state.draggingTarget = null; });
        window.addEventListener('resize', () => this.renderAll());
      }
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) onDown(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas.addEventListener('touchmove', e => {
        if (this.state.draggingTarget && e.touches.length === 1) {
          if (e.cancelable) e.preventDefault();
          onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });
      this.canvas.addEventListener('touchend', () => { this.state.draggingTarget = null; });
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 320;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      const ox = width * 0.45, oy = height * 0.58, scale = 30;

      drawCoordinatePlane(ctx, width, height, ox, oy, scale, scale, theme);
      const infoEl = this.container.querySelector('[data-vec-info]');

      const drawVec = (x1, y1, x2, y2, col, label) => {
        const px1 = ox + x1 * scale, py1 = oy - y1 * scale;
        const px2 = ox + x2 * scale, py2 = oy - y2 * scale;
        ctx.save();
        ctx.strokeStyle = col;
        ctx.fillStyle = col;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();
        const lenPx = Math.hypot(px2 - px1, py2 - py1);
        if (lenPx > 4) {
          const ang = Math.atan2(py2 - py1, px2 - px1);
          ctx.beginPath();
          ctx.moveTo(px2, py2);
          ctx.lineTo(px2 - 10 * Math.cos(ang - 0.35), py2 - 10 * Math.sin(ang - 0.35));
          ctx.lineTo(px2 - 10 * Math.cos(ang + 0.35), py2 - 10 * Math.sin(ang + 0.35));
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(px1, py1, 5, 0, TWO_PI);
          ctx.fill();
        }
        ctx.font = 'bold 12px monospace';
        ctx.fillText(label, px2 + 6, py2 - 6);
        ctx.restore();
      };

      if (this.state.mode === 'concepts') {
        const { ux, uy, vx, vy, scalarK } = this.state;
        const kx = scalarK * ux, ky = scalarK * uy;
        const lenU = Math.hypot(ux, uy);
        const lenKU = Math.hypot(kx, ky);
        const midX = ux / 2, midY = uy / 2;
        const gx = (0 + ux + vx) / 3, gy = (0 + uy + vy) / 3;

        drawVec(0, 0, ux, uy, theme.blue, `u⃗ = OA⃗(${fmt(ux, 1)};${fmt(uy, 1)})`);
        drawVec(-1.5, -1.5, -1.5 + kx, -1.5 + ky, theme.emerald, `${fmt(scalarK, 2)}u⃗(${fmt(kx, 1)};${fmt(ky, 1)})`);

        // Midpoint I of OA and Centroid G of triangle OAB
        ctx.save();
        ctx.beginPath();
        ctx.arc(ox + midX * scale, oy - midY * scale, 5, 0, TWO_PI);
        ctx.fillStyle = theme.amber;
        ctx.fill();
        ctx.fillText(`Trung điểm I(${fmt(midX, 1)};${fmt(midY, 1)})`, ox + midX * scale + 6, oy - midY * scale + 14);

        ctx.beginPath();
        ctx.arc(ox + gx * scale, oy - gy * scale, 5, 0, TWO_PI);
        ctx.fillStyle = theme.rose;
        ctx.fill();
        ctx.fillText(`Trọng tâm G(${fmt(gx, 1)};${fmt(gy, 1)})`, ox + gx * scale + 6, oy - gy * scale - 6);
        ctx.restore();

        let relText = '';
        if (Math.abs(scalarK) < 1e-6 || lenU < 1e-6) {
          relText = 'k = 0 ⇒ k·u⃗ = 0⃗ (Vectơ-không có độ dài bằng 0, cùng phương mọi vectơ)';
        } else if (Math.abs(scalarK - 1) < 1e-6) {
          relText = 'k = 1 ⇒ Hai vectơ BẰNG NHAU (Cùng hướng và cùng độ dài)';
        } else if (Math.abs(scalarK + 1) < 1e-6) {
          relText = 'k = −1 ⇒ Hai vectơ ĐỐI NHAU (Ngược hướng và cùng độ dài, u⃗ + (−u⃗) = 0⃗)';
        } else if (scalarK > 0) {
          relText = `k = ${fmt(scalarK, 2)} > 0 ⇒ k·u⃗ CÙNG HƯỚNG với u⃗, độ dài gấp ${fmt(scalarK, 2)} lần`;
        } else {
          relText = `k = ${fmt(scalarK, 2)} < 0 ⇒ k·u⃗ NGƯỢC HƯỚNG với u⃗, độ dài gấp ${fmt(Math.abs(scalarK), 2)} lần`;
        }

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Khái Niệm Vectơ (Bài 7) &amp; Tích Với Một Số k·u⃗ (Bài 9)</div>
            <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 font-semibold text-emerald-900 dark:text-emerald-200">
              ${relText}
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Độ dài |u⃗| và |k·u⃗| = |k|·|u⃗|</div>
                <div class="font-bold mt-0.5">|u⃗| = ${fmt(lenU, 2)}<br>|k·u⃗| = ${fmt(lenKU, 2)}</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Trung điểm I &amp; Trọng tâm G</div>
                <div class="font-bold text-amber-600 dark:text-amber-400 mt-0.5">IA⃗+IB⃗=0⃗ • I(${fmt(midX, 1)};${fmt(midY, 1)})<br>GA⃗+GB⃗+GC⃗=0⃗</div>
              </div>
            </div>
          `;
        }
      } else if (this.state.mode === 'vectors') {
        const { ux, uy, vx, vy } = this.state;
        const sx = ux + vx, sy = uy + vy;

        // Parallelogram dashed lines
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = theme.muted;
        ctx.beginPath();
        ctx.moveTo(ox + ux * scale, oy - uy * scale);
        ctx.lineTo(ox + sx * scale, oy - sy * scale);
        ctx.lineTo(ox + vx * scale, oy - vy * scale);
        ctx.stroke();
        ctx.restore();

        drawVec(0, 0, ux, uy, theme.blue, `u(${fmt(ux, 1)};${fmt(uy, 1)})`);
        drawVec(0, 0, vx, vy, theme.rose, `v(${fmt(vx, 1)};${fmt(vy, 1)})`);
        drawVec(0, 0, sx, sy, theme.emerald, `u+v(${fmt(sx, 1)};${fmt(sy, 1)})`);

        const lenU = Math.hypot(ux, uy);
        const lenV = Math.hypot(vx, vy);
        const dot = ux * vx + uy * vy;
        const zeroVec = lenU < 1e-6 || lenV < 1e-6;
        const cosAng = zeroVec ? NaN : clamp(dot / (lenU * lenV), -1, 1);
        const angDeg = zeroVec ? NaN : Math.acos(cosAng) * RAD_TO_DEG;

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Tổng, Hiệu (Bài 8), Tọa Độ u⃗ = x·i⃗ + y·j⃗ (Bài 10) &amp; Tích Vô Hướng (Bài 11)</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Tổng u⃗ + v⃗ &amp; Hiệu u⃗ − v⃗</div>
                <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">u⃗+v⃗ = (${fmt(sx)}; ${fmt(sy)})<br>u⃗−v⃗ = (${fmt(ux - vx)}; ${fmt(uy - vy)})</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Phân tích theo i⃗(1;0), j⃗(0;1)</div>
                <div class="font-bold mt-0.5">u⃗ = ${fmt(ux)}i⃗ ${uy >= 0 ? '+ ' + fmt(uy) : '− ' + fmt(Math.abs(uy))}j⃗<br>|u⃗| = ${fmt(lenU, 2)} • |v⃗| = ${fmt(lenV, 2)}</div>
              </div>
              <div class="p-2.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 col-span-2">
                <div class="text-[10px] text-indigo-700 dark:text-indigo-300 font-bold">Tích vô hướng u⃗ · v⃗ = x₁x₂ + y₁y₂ &amp; Góc (u⃗, v⃗):</div>
                <div class="font-mono font-bold mt-0.5">u⃗ · v⃗ = ${fmt(dot, 2)} ${Math.abs(dot) < 1e-5 && !zeroVec ? '(Hai vectơ vuông góc u⃗ ⊥ v⃗)' : ''}</div>
                <div class="font-mono text-[11px] mt-0.5">${zeroVec ? 'Góc không xác định (vectơ-không)' : `cos(u⃗, v⃗) = ${fmt(cosAng, 3)} ⇒ (u⃗, v⃗) = ${fmt(angDeg, 1)}°`}</div>
              </div>
            </div>
          `;
        }
      } else if (this.state.mode === 'twolines') {
        const { la: a1, lb: b1, lc: c1, l2a: a2, l2b: b2, l2c: c2, mx, my } = this.state;
        const n1Sq = a1 * a1 + b1 * b1;
        const n2Sq = a2 * a2 + b2 * b2;
        const drawLineABC = (a, b, cVal, col, label) => {
          if (a * a + b * b < 1e-6) return;
          ctx.save();
          ctx.strokeStyle = col;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          if (Math.abs(b) > 1e-5) {
            const xL = -10, xR = 10;
            ctx.moveTo(ox + xL * scale, oy - ((-a * xL - cVal) / b) * scale);
            ctx.lineTo(ox + xR * scale, oy - ((-a * xR - cVal) / b) * scale);
          } else {
            const x0 = -cVal / a;
            ctx.moveTo(ox + x0 * scale, 0);
            ctx.lineTo(ox + x0 * scale, height);
          }
          ctx.stroke();
          ctx.restore();
        };

        drawLineABC(a1, b1, c1, theme.blue, 'Δ₁');
        drawLineABC(a2, b2, c2, theme.emerald, 'Δ₂');

        // Determinant D = a1*b2 - a2*b1
        const D = a1 * b2 - a2 * b1;
        const Dx = -c1 * b2 + c2 * b1;
        const Dy = -a1 * c2 + a2 * c1;
        let relStatus = '';
        if (Math.abs(D) > 1e-5) {
          const ix = Dx / D, iy = Dy / D;
          ctx.beginPath();
          ctx.arc(ox + ix * scale, oy - iy * scale, 6, 0, TWO_PI);
          ctx.fillStyle = theme.amber;
          ctx.fill();
          ctx.fillStyle = theme.text;
          ctx.font = 'bold 11px monospace';
          ctx.fillText(`I(${fmt(ix, 2)};${fmt(iy, 2)})`, ox + ix * scale + 8, oy - iy * scale - 8);
          relStatus = `Cắt nhau tại giao điểm duy nhất I(${fmt(ix, 2)}; ${fmt(iy, 2)})`;
        } else if (Math.abs(Dx) < 1e-5 && Math.abs(Dy) < 1e-5) {
          relStatus = 'Hai đường thẳng TRÙNG NHAU (Δ₁ ≡ Δ₂, vô số điểm chung)';
        } else {
          relStatus = 'Hai đường thẳng SONG SONG (Δ₁ // Δ₂, không có điểm chung)';
        }

        const cosPhi = (n1Sq > 1e-6 && n2Sq > 1e-6)
          ? clamp(Math.abs(a1 * a2 + b1 * b2) / Math.sqrt(n1Sq * n2Sq), 0, 1)
          : 0;
        const phiDeg = Math.acos(cosPhi) * RAD_TO_DEG;
        const distM = n1Sq > 1e-6 ? Math.abs(a1 * mx + b1 * my + c1) / Math.sqrt(n1Sq) : 0;

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Vị Trí Tương Đối, Góc &amp; Khoảng Cách (Bài 20)</div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs">
              <div><strong class="text-blue-600">Δ₁:</strong> ${fmt(a1)}x + (${fmt(b1)})y + (${fmt(c1)}) = 0</div>
              <div><strong class="text-emerald-600">Δ₂:</strong> ${fmt(a2)}x + (${fmt(b2)})y + (${fmt(c2)}) = 0</div>
            </div>
            <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 font-bold text-amber-900 dark:text-amber-200">
              ${relStatus}
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                <div class="text-[10px] text-indigo-700 dark:text-indigo-300 font-bold">Góc φ giữa Δ₁ và Δ₂ (0° ≤ φ ≤ 90°):</div>
                <div class="font-mono font-extrabold text-indigo-900 dark:text-indigo-200 mt-0.5">cos φ = ${fmt(cosPhi, 3)} ⇒ φ = ${fmt(phiDeg, 1)}°</div>
              </div>
              <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                <div class="text-[10px] text-rose-700 dark:text-rose-300 font-bold">Khoảng cách d(M₀, Δ₁):</div>
                <div class="font-mono font-extrabold text-rose-900 dark:text-rose-200 mt-0.5">d = ${fmt(distM, 3)}</div>
              </div>
            </div>
          `;
        }
      } else {
        const { la, lb, lc, mx, my } = this.state;
        const normSq = la * la + lb * lb;
        const degenerate = normSq < 1e-6;
        if (!degenerate) {
          ctx.save();
          ctx.strokeStyle = theme.blue;
          ctx.lineWidth = 2.6;
          ctx.beginPath();
          if (Math.abs(lb) > 1e-5) {
            const xL = -10, xR = 10;
            ctx.moveTo(ox + xL * scale, oy - (( -la * xL - lc) / lb) * scale);
            ctx.lineTo(ox + xR * scale, oy - (( -la * xR - lc) / lb) * scale);
          } else {
            const x0 = -lc / la;
            ctx.moveTo(ox + x0 * scale, 0);
            ctx.lineTo(ox + x0 * scale, height);
          }
          ctx.stroke();

          // Orthogonal projection H of M(mx, my) onto line la*x + lb*y + lc = 0
          const t = -(la * mx + lb * my + lc) / normSq;
          const hx = mx + la * t;
          const hy = my + lb * t;
          const dist = Math.abs(la * mx + lb * my + lc) / Math.sqrt(normSq);

          ctx.setLineDash([5, 4]);
          ctx.strokeStyle = theme.rose;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(ox + mx * scale, oy - my * scale);
          ctx.lineTo(ox + hx * scale, oy - hy * scale);
          ctx.stroke();
          ctx.restore();

          // Draw H and M0
          ctx.beginPath();
          ctx.arc(ox + hx * scale, oy - hy * scale, 5, 0, TWO_PI);
          ctx.fillStyle = theme.amber;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(ox + mx * scale, oy - my * scale, 7, 0, TWO_PI);
          ctx.fillStyle = theme.rose;
          ctx.fill();
          ctx.fillStyle = theme.text;
          ctx.font = 'bold 12px monospace';
          ctx.fillText(`M₀(${fmt(mx, 1)};${fmt(my, 1)})`, ox + mx * scale + 8, oy - my * scale - 8);

          if (infoEl) {
            infoEl.innerHTML = `
              <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Phương Trình Tổng Quát Đường Thẳng &amp; Khoảng Cách</div>
              <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 font-mono font-bold text-center">
                Δ: ${fmt(la)}x + (${fmt(lb)})y + (${fmt(lc)}) = 0
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div class="text-[10px] text-slate-500">VTPT n⃗ &amp; VTCP u⃗</div>
                  <div class="font-bold mt-0.5">n⃗ = (${fmt(la)}; ${fmt(lb)})<br>u⃗ = (${fmt(-lb)}; ${fmt(la)})</div>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div class="text-[10px] text-slate-500">Hình chiếu vuông góc H</div>
                  <div class="font-bold text-amber-600 dark:text-amber-400 mt-0.5">H(${fmt(hx, 2)}; ${fmt(hy, 2)})</div>
                </div>
                <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 col-span-2">
                  <div class="text-[10px] text-rose-600 dark:text-rose-400 font-bold">Khoảng cách d(M₀, Δ) = |ax₀ + by₀ + c| / √(a² + b²):</div>
                  <div class="font-mono font-extrabold text-sm text-rose-700 dark:text-rose-300 mt-0.5">d(M₀, Δ) = ${fmt(dist, 3)}</div>
                </div>
              </div>
            `;
          }
        } else if (infoEl) {
          infoEl.innerHTML = `<div class="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 font-bold">Không xác định: Vectơ pháp tuyến n⃗(a; b) không được đồng thời bằng (0; 0)!</div>`;
        }
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 9: DÃY SỐ, CẤP SỐ CỘNG, CẤP SỐ NHÂN & GIỚI HẠN DÃY SỐ (TOÁN 11)
  // =========================================================================
  class SequenceLimitSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'ap', // 'ap' (CSC) | 'gp' (CSN & Giới hạn)
        u1: options.u1 !== undefined ? options.u1 : 2.0,
        d: options.d !== undefined ? options.d : 1.5,
        q: options.q !== undefined ? options.q : 0.6,
        nTerms: 10
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-chart-column"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 9: Cấp Số Cộng, Cấp Số Nhân &amp; Giới Hạn Dãy Số</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 11 • Chương II &amp; Chương V</span>
                </div>
                <p class="text-xs text-purple-100/90 mt-0.5">Khảo sát số hạng tổng quát $u_n$, tổng $S_n$ và sự hội tụ của cấp số nhân lùi vô hạn khi $|q| &lt; 1$</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button type="button" data-mode="ap" class="px-3 py-1.5 rounded-xl bg-white text-purple-900 font-bold text-xs cursor-pointer">1. Cấp số cộng (u₁, d)</button>
              <button type="button" data-mode="gp" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">2. Cấp số nhân &amp; Giới hạn (u₁, q)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="seq-canvas block w-full h-[290px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-seq-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Số hạng đầu ($u_1$)</label><span class="font-bold text-purple-600" data-disp="u1">2.0</span></div>
              <input type="range" data-ctrl="u1" min="-4" max="6" step="0.5" value="2.0" class="w-full accent-purple-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Công sai CSC ($d$)</label><span class="font-bold text-blue-600" data-disp="d">1.5</span></div>
              <input type="range" data-ctrl="d" min="-3" max="3" step="0.5" value="1.5" class="w-full accent-blue-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Công bội CSN ($q$)</label><span class="font-bold text-emerald-600" data-disp="q">0.6</span></div>
              <input type="range" data-ctrl="q" min="-0.9" max="1.6" step="0.1" value="0.6" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Số số hạng ($n$)</label><span class="font-bold text-amber-600" data-disp="nTerms">10</span></div>
              <input type="range" data-ctrl="nTerms" min="4" max="15" step="1" value="10" class="w-full accent-amber-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.seq-canvas');
      if (this.state.mode === 'gp') {
        const btns = this.container.querySelectorAll('[data-mode]');
        btns[0].className = 'px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
        btns[1].className = 'px-3 py-1.5 rounded-xl bg-white text-purple-900 font-bold text-xs cursor-pointer';
      }
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
          this.renderAll();
        });
      });

      ['u1', 'd', 'q', 'nTerms'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = k === 'nTerms' ? String(this.state[k]) : fmt(this.state[k], 1);
          this.renderAll();
        });
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 290;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();

      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      const { mode, u1, d, q, nTerms } = this.state;
      const terms = [];
      let sumN = 0;
      for (let i = 1; i <= nTerms; i++) {
        const val = mode === 'ap' ? u1 + (i - 1) * d : u1 * Math.pow(q, i - 1);
        terms.push(val);
        sumN += val;
      }

      const maxAbs = Math.max(5, ...terms.map(v => Math.abs(v))) * 1.15;
      const padL = 40, padR = 16, oy = height / 2;
      const plotW = width - padL - padR;
      const scaleY = (height * 0.42) / maxAbs;

      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(padL, 14);
      ctx.lineTo(padL, height - 14);
      ctx.moveTo(padL, oy);
      ctx.lineTo(width - padR, oy);
      ctx.stroke();

      const colW = plotW / nTerms;
      terms.forEach((v, idx) => {
        const x = padL + (idx + 0.5) * colW;
        const y = oy - v * scaleY;
        ctx.strokeStyle = mode === 'ap' ? theme.blue : theme.emerald;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, oy);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, TWO_PI);
        ctx.fillStyle = mode === 'ap' ? theme.blue : theme.emerald;
        ctx.fill();

        ctx.fillStyle = theme.muted;
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`u${idx + 1}`, x, oy + (v >= 0 ? 14 : -6));
      });

      const infoEl = this.container.querySelector('[data-seq-info]');
      if (!infoEl) return;
      const un = terms[terms.length - 1];
      if (mode === 'ap') {
        infoEl.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Cấp Số Cộng: u_n = u₁ + (n − 1)d</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Số hạng thứ n (u_${nTerms})</div>
              <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">u_${nTerms} = ${fmt(un, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tổng n số hạng đầu S_${nTerms}</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">S_${nTerms} = ${fmt(sumN, 2)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 col-span-2 font-mono text-[11px]">
              S_n = n(u₁ + u_n)/2 = ${nTerms}·(${fmt(u1)} + ${fmt(un)})/2 = ${fmt(sumN, 2)}
            </div>
          </div>
        `;
      } else {
        const isConvergent = Math.abs(q) < 1;
        const sInf = isConvergent ? u1 / (1 - q) : null;
        infoEl.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Cấp Số Nhân &amp; Giới Hạn Khi n → +∞</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Số hạng u_${nTerms} = u₁·q^${nTerms - 1}</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">u_${nTerms} = ${fmt(un, 3)}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Tổng S_${nTerms}</div>
              <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">S_${nTerms} = ${fmt(sumN, 3)}</div>
            </div>
            <div class="p-2.5 rounded-xl border col-span-2 ${isConvergent ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200' : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 text-amber-900 dark:text-amber-200'}">
              <div class="font-bold">${isConvergent ? '✓ Cấp số nhân lùi vô hạn (|q| < 1):' : '⚠ Trường hợp |q| ≥ 1 (Dãy phân kỳ):'}</div>
              <div class="font-mono mt-0.5">${isConvergent ? `lim u_n = 0 • Tổng vô hạn S = u₁/(1−q) = ${fmt(sInf, 3)}` : 'lim qⁿ không tiến về 0 ⇒ Không tồn tại tổng CSN lùi vô hạn!'}</div>
            </div>
          </div>
        `;
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 10: PHƯƠNG PHÁP TỌA ĐỘ OXYZ — MẶT PHẲNG & MẶT CẦU (TOÁN 12)
  // =========================================================================
  class OxyzAnalytic3DSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        R: options.R !== undefined ? options.R : 3.5,
        cutZ: options.cutZ !== undefined ? options.cutZ : 1.5,
        rotX: 0.35,
        rotY: -0.65,
        dragging: false,
        lastX: 0,
        lastY: 0
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-globe"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 10: Phương Trình Mặt Cầu &amp; Mặt Phẳng Trong Không Gian Oxyz</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 12 • Chương V (Bài 14 – 17)</span>
                </div>
                <p class="text-xs text-cyan-100/90 mt-0.5">Xoay 360° mặt cầu $(S): x^2+y^2+z^2=R^2$ và mặt phẳng cắt $(\\alpha): z = h$ để khảo sát giao tuyến đường tròn $r = \\sqrt{R^2-d^2}$</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="oxyz-sphere-canvas block w-full h-[310px] rounded-xl border border-slate-800 cursor-grab active:cursor-grabbing" style="touch-action: none;"></canvas>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-sphere-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Bán kính mặt cầu ($R$)</label><span class="font-bold text-cyan-600" data-disp="R">3.5</span></div>
              <input type="range" data-ctrl="R" min="2.0" max="4.5" step="0.25" value="3.5" class="w-full accent-cyan-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Độ cao mặt phẳng cắt $(\\alpha): z = h$</label><span class="font-bold text-amber-600" data-disp="cutZ">1.5</span></div>
              <input type="range" data-ctrl="cutZ" min="-4.5" max="4.5" step="0.25" value="1.5" class="w-full accent-amber-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.oxyz-sphere-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      ['R', 'cutZ'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = fmt(this.state[k], 2);
          this.renderAll();
        });
      });

      const startDrag = (x, y) => { this.state.dragging = true; this.state.lastX = x; this.state.lastY = y; };
      const moveDrag = (x, y) => {
        if (!this.state.dragging) return;
        this.state.rotY += (x - this.state.lastX) * 0.012;
        this.state.rotX = clamp(this.state.rotX + (y - this.state.lastY) * 0.012, -1.2, 1.2);
        this.state.lastX = x;
        this.state.lastY = y;
        this.renderAll();
      };
      this.canvas.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
        window.addEventListener('mouseup', () => { this.state.dragging = false; });
        window.addEventListener('resize', () => this.renderAll());
      }
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas.addEventListener('touchmove', e => {
        if (this.state.dragging && e.touches.length === 1) {
          if (e.cancelable) e.preventDefault();
          moveDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });
      this.canvas.addEventListener('touchend', () => { this.state.dragging = false; });
    }

    project(pt, cx, cy, scale) {
      const cosY = Math.cos(this.state.rotY), sinY = Math.sin(this.state.rotY);
      const x1 = pt.x * cosY + pt.y * sinY;
      const z1 = -pt.x * sinY + pt.y * cosY;
      const cosX = Math.cos(this.state.rotX), sinX = Math.sin(this.state.rotX);
      const y2 = pt.z * cosX - z1 * sinX;
      return { px: cx + x1 * scale, py: cy - y2 * scale };
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 310;
      const { ctx } = setupCanvas(this.canvas, width, height);
      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2, cy = height / 2, scale = 28;
      const { R, cutZ } = this.state;
      const d = Math.abs(cutZ);
      const intersects = d < R - 1e-4;
      const tangent = Math.abs(d - R) <= 1e-4;
      const rSec = intersects ? Math.sqrt(R * R - d * d) : 0;

      // Wireframe latitudes & longitudes of Sphere
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.28)';
      ctx.lineWidth = 1.2;
      for (let lat = -60; lat <= 60; lat += 30) {
        const z = R * Math.sin(lat * DEG_TO_RAD);
        const rLat = R * Math.cos(lat * DEG_TO_RAD);
        ctx.beginPath();
        for (let th = 0; th <= 360; th += 10) {
          const p = this.project({ x: rLat * Math.cos(th * DEG_TO_RAD), y: rLat * Math.sin(th * DEG_TO_RAD), z }, cx, cy, scale);
          if (th === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        }
        ctx.stroke();
      }

      // Cutting plane z = cutZ
      const pCorners = [
        { x: -4.2, y: -4.2, z: cutZ },
        { x: 4.2, y: -4.2, z: cutZ },
        { x: 4.2, y: 4.2, z: cutZ },
        { x: -4.2, y: 4.2, z: cutZ }
      ];
      ctx.save();
      ctx.fillStyle = 'rgba(245, 158, 11, 0.16)';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      pCorners.forEach((pt, idx) => {
        const p = this.project(pt, cx, cy, scale);
        if (idx === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Intersection circle on plane z = cutZ
      if (intersects || tangent) {
        ctx.strokeStyle = '#10b981';
        ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        for (let th = 0; th <= 360; th += 8) {
          const p = this.project({ x: rSec * Math.cos(th * DEG_TO_RAD), y: rSec * Math.sin(th * DEG_TO_RAD), z: cutZ }, cx, cy, scale);
          if (th === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        }
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();

      const infoEl = this.container.querySelector('[data-sphere-info]');
      if (infoEl) {
        infoEl.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Vị Trí Tương Đối Giữa Mặt Cầu (S) &amp; Mặt Phẳng (α)</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs">
            Mặt cầu (S): x² + y² + z² = ${fmt(R * R, 2)} (Tâm O, R = ${fmt(R)})<br>
            Mặt phẳng (α): z − (${fmt(cutZ)}) = 0 (VTPT n⃗ = (0; 0; 1))
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Khoảng cách d(O, (α)) = |h|</div>
              <div class="font-bold text-amber-600 dark:text-amber-400 mt-0.5">d = ${fmt(d, 2)} ${d < R ? '< R' : d === R ? '= R' : '> R'}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-500">Bán kính đường tròn giao tuyến</div>
              <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">${intersects ? `r = √(R² − d²) = ${fmt(rSec, 2)}` : tangent ? 'r = 0 (Tiếp xúc)' : 'Không cắt nhau'}</div>
            </div>
          </div>
        `;
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 11: XÁC SUẤT CÓ ĐIỀU KIỆN, SƠ ĐỒ HÌNH CÂY & CÔNG THỨC BAYES (TOÁN 11 & 12)
  // =========================================================================
  class BayesTreeSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        pA: options.pA !== undefined ? options.pA : 0.20,      // P(A)
        pB_A: options.pB_A !== undefined ? options.pB_A : 0.90, // P(B | A)
        pB_notA: options.pB_notA !== undefined ? options.pB_notA : 0.10 // P(B | Ā)
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    computeBayes() {
      const { pA, pB_A, pB_notA } = this.state;
      const pNotA = 1 - pA;
      const pAB = pA * pB_A;
      const pNotAB = pNotA * pB_notA;
      const pB = pAB + pNotAB;
      const pA_given_B = pB > 1e-8 ? pAB / pB : NaN;
      return { pA, pNotA, pB_A, pB_notA, pAB, pNotAB, pB, pA_given_B };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-diagram-project"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 11: Sơ Đồ Hình Cây, Xác Suất Toàn Phần &amp; Công Thức Bayes</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 11 Chương VIII • Toán 12 Chương VI</span>
                </div>
                <p class="text-xs text-fuchsia-100/90 mt-0.5">Điều chỉnh $P(A), P(B|A), P(B|\\overline{A})$ để trực quan hóa nhánh xác suất có điều kiện và công thức Bayes $P(A|B)$</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="bayes-canvas block w-full h-[285px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-bayes-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Xác suất tiên nghiệm $P(A)$</label><span class="font-bold text-purple-600" data-disp="pA">0.20</span></div>
              <input type="range" data-ctrl="pA" min="0.05" max="0.95" step="0.05" value="0.20" class="w-full accent-purple-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Xác suất điều kiện $P(B|A)$</label><span class="font-bold text-emerald-600" data-disp="pB_A">0.90</span></div>
              <input type="range" data-ctrl="pB_A" min="0.05" max="0.99" step="0.05" value="0.90" class="w-full accent-emerald-600 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs"><label class="font-semibold">Xác suất $P(B|\\overline{A})$</label><span class="font-bold text-rose-600" data-disp="pB_notA">0.10</span></div>
              <input type="range" data-ctrl="pB_notA" min="0.01" max="0.90" step="0.05" value="0.10" class="w-full accent-rose-600 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.bayes-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      ['pA', 'pB_A', 'pB_notA'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = fmt(this.state[k], 2);
          this.renderAll();
        });
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 285;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      const b = this.computeBayes();

      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      // Draw Probability Tree
      const x0 = 36, y0 = height / 2;
      const x1 = width * 0.42, yA = height * 0.28, yNotA = height * 0.72;
      const x2 = width - 115;
      const yAB = height * 0.16, yANotB = height * 0.40;
      const yNotAB = height * 0.60, yNotANotB = height * 0.84;

      const drawEdge = (px1, py1, px2, py2, col, text) => {
        ctx.strokeStyle = col;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(text, (px1 + px2) / 2, (py1 + py2) / 2 - 5);
      };

      drawEdge(x0, y0, x1, yA, theme.purple, `P(A)=${fmt(b.pA, 2)}`);
      drawEdge(x0, y0, x1, yNotA, theme.muted, `P(Ā)=${fmt(b.pNotA, 2)}`);
      drawEdge(x1, yA, x2, yAB, theme.emerald, `P(B|A)=${fmt(b.pB_A, 2)}`);
      drawEdge(x1, yA, x2, yANotB, theme.muted, `${fmt(1 - b.pB_A, 2)}`);
      drawEdge(x1, yNotA, x2, yNotAB, theme.rose, `P(B|Ā)=${fmt(b.pB_notA, 2)}`);
      drawEdge(x1, yNotA, x2, yNotANotB, theme.muted, `${fmt(1 - b.pB_notA, 2)}`);

      ctx.textAlign = 'left';
      ctx.fillStyle = theme.emerald;
      ctx.fillText(`P(AB) = ${fmt(b.pAB, 3)}`, x2 + 8, yAB + 4);
      ctx.fillStyle = theme.rose;
      ctx.fillText(`P(ĀB) = ${fmt(b.pNotAB, 3)}`, x2 + 8, yNotAB + 4);

      const infoEl = this.container.querySelector('[data-bayes-info]');
      if (infoEl) {
        infoEl.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Kết Quả Xác Suất Toàn Phần &amp; Bayes</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div class="text-[10px] text-slate-500">Công thức xác suất toàn phần P(B) = P(A)P(B|A) + P(Ā)P(B|Ā)</div>
            <div class="font-mono font-bold text-blue-600 dark:text-blue-400 mt-0.5">P(B) = ${fmt(b.pAB, 3)} + ${fmt(b.pNotAB, 3)} = ${fmt(b.pB, 4)}</div>
          </div>
          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
            <div class="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">Công thức Bayes P(A | B) = P(A)·P(B|A) / P(B):</div>
            <div class="font-mono font-extrabold text-sm text-emerald-800 dark:text-emerald-200 mt-0.5">
              P(A | B) = ${fmt(b.pA_given_B, 4)} (${fmt(b.pA_given_B * 100, 1)}%)
            </div>
          </div>
        `;
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 12: MỆNH ĐỀ LOGIC, TẬP HỢP, BIỂU ĐỒ VENN & TRỤC SỐ (TOÁN 10 CHƯƠNG I - BÀI 1 & 2)
  // =========================================================================
  class LogicSetVennSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'logic', // 'logic' (Bài 1) | 'venn' (Bài 2) | 'interval' (Bài 2)
        pVal: options.pVal !== undefined ? options.pVal : true,
        qVal: options.qVal !== undefined ? options.qVal : false,
        varX: options.varX !== undefined ? options.varX : 2.0,
        vennOp: options.vennOp || 'inter', // 'inter' | 'union' | 'diffAB' | 'diffBA' | 'compA'
        cardA: 18,
        cardB: 15,
        cardInter: 7,
        a1: -3.0,
        a2: 2.0,
        b1: -1.0,
        b2: 4.5
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    initDOM() {
      const m = this.state.mode;
      const btnCls = (modeName) => m === modeName
        ? 'px-2.5 py-1.5 rounded-xl bg-white text-blue-900 font-bold text-xs cursor-pointer'
        : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';

      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-diagram-project"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Mệnh Đề Logic, Biểu Đồ Venn &amp; Tập Hợp Trên Trục Số ℝ</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Chương I (Bài 1 &amp; Bài 2)</span>
                </div>
                <p class="text-xs text-blue-100/90 mt-0.5">Đổi chân trị mệnh đề $P, Q$, tô miền Biểu đồ Venn và kéo mút khoảng/đoạn trên trục số thực</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-mode="logic" class="${btnCls('logic')}">1. Mệnh đề &amp; Lượng từ (Bài 1)</button>
              <button type="button" data-mode="venn" class="${btnCls('venn')}">2. Biểu đồ Venn (Bài 2)</button>
              <button type="button" data-mode="interval" class="${btnCls('interval')}">3. Tập con trục số ℝ (Bài 2)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="logic-canvas block w-full h-[300px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-logic-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Controls for Logic Mode -->
          <div data-ctrl-logic class="${m === 'logic' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="font-bold text-slate-700 dark:text-slate-300">Chọn chân trị:</span>
              <button type="button" data-toggle-p class="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold cursor-pointer">Mệnh đề P: ĐÚNG (Đ)</button>
              <button type="button" data-toggle-q class="px-3 py-1.5 rounded-xl bg-rose-600 text-white font-bold cursor-pointer">Mệnh đề Q: SAI (S)</button>
            </div>
            <div class="flex-1 min-w-[220px] space-y-1">
              <div class="flex justify-between text-xs">
                <label class="font-semibold">Biến $x$ trong $P(x): x^2 - 4x + 3 \\le 0$</label>
                <span class="font-bold text-blue-600" data-disp="vx">${fmt(this.state.varX, 1)}</span>
              </div>
              <input type="range" data-ctrl="varX" min="-1" max="5" step="0.5" value="${this.state.varX}" class="w-full accent-blue-600 cursor-pointer h-2">
            </div>
          </div>

          <!-- Controls for Venn Mode -->
          <div data-ctrl-venn class="${m === 'venn' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 space-y-3">
            <div class="flex flex-wrap items-center gap-1.5 text-xs">
              <span class="font-bold text-slate-700 dark:text-slate-300 mr-1">Phép toán tập hợp:</span>
              <button type="button" data-vop="inter" class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold cursor-pointer">Giao A ∩ B</button>
              <button type="button" data-vop="union" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">Hợp A ∪ B</button>
              <button type="button" data-vop="diffAB" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">Hiệu A \\ B</button>
              <button type="button" data-vop="diffBA" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">Hiệu B \\ A</button>
              <button type="button" data-vop="compA" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">Phần bù C_E(A)</button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div><div class="flex justify-between"><label class="font-semibold">Số phần tử n(A)</label><span class="font-bold text-blue-600" data-disp="cA">18</span></div><input type="range" data-ctrl="cardA" min="5" max="30" step="1" value="18" class="w-full accent-blue-600 cursor-pointer h-2"></div>
              <div><div class="flex justify-between"><label class="font-semibold">Số phần tử n(B)</label><span class="font-bold text-emerald-600" data-disp="cB">15</span></div><input type="range" data-ctrl="cardB" min="5" max="30" step="1" value="15" class="w-full accent-emerald-600 cursor-pointer h-2"></div>
              <div><div class="flex justify-between"><label class="font-semibold">Phần chung n(A ∩ B)</label><span class="font-bold text-amber-600" data-disp="cI">7</span></div><input type="range" data-ctrl="cardInter" min="0" max="15" step="1" value="7" class="w-full accent-amber-600 cursor-pointer h-2"></div>
            </div>
          </div>

          <!-- Controls for Interval Mode -->
          <div data-ctrl-interval class="${m === 'interval' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div><div class="flex justify-between"><label class="font-semibold">Đầu mút trái $a_1$ của $A=[a_1;a_2]$</label><span class="font-bold text-blue-600" data-disp="a1">-3.0</span></div><input type="range" data-ctrl="a1" min="-5" max="4" step="0.5" value="-3.0" class="w-full accent-blue-600 cursor-pointer h-2"></div>
            <div><div class="flex justify-between"><label class="font-semibold">Đầu mút phải $a_2$</label><span class="font-bold text-blue-600" data-disp="a2">2.0</span></div><input type="range" data-ctrl="a2" min="-4" max="5" step="0.5" value="2.0" class="w-full accent-blue-600 cursor-pointer h-2"></div>
            <div><div class="flex justify-between"><label class="font-semibold">Đầu mút trái $b_1$ của $B=(b_1;b_2)$</label><span class="font-bold text-emerald-600" data-disp="b1">-1.0</span></div><input type="range" data-ctrl="b1" min="-5" max="4" step="0.5" value="-1.0" class="w-full accent-emerald-600 cursor-pointer h-2"></div>
            <div><div class="flex justify-between"><label class="font-semibold">Đầu mút phải $b_2$</label><span class="font-bold text-emerald-600" data-disp="b2">4.5</span></div><input type="range" data-ctrl="b2" min="-4" max="5.5" step="0.5" value="4.5" class="w-full accent-emerald-600 cursor-pointer h-2"></div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.logic-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = b.dataset.mode === this.state.mode
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-blue-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          c.querySelector('[data-ctrl-logic]').classList.toggle('hidden', this.state.mode !== 'logic');
          c.querySelector('[data-ctrl-venn]').classList.toggle('hidden', this.state.mode !== 'venn');
          c.querySelector('[data-ctrl-interval]').classList.toggle('hidden', this.state.mode !== 'interval');
          this.renderAll();
        });
      });

      const btnP = c.querySelector('[data-toggle-p]');
      const btnQ = c.querySelector('[data-toggle-q]');
      if (btnP) {
        btnP.addEventListener('click', () => {
          this.state.pVal = !this.state.pVal;
          btnP.textContent = `Mệnh đề P: ${this.state.pVal ? 'ĐÚNG (Đ)' : 'SAI (S)'}`;
          btnP.className = `px-3 py-1.5 rounded-xl ${this.state.pVal ? 'bg-emerald-600' : 'bg-rose-600'} text-white font-bold cursor-pointer`;
          this.renderAll();
        });
      }
      if (btnQ) {
        btnQ.addEventListener('click', () => {
          this.state.qVal = !this.state.qVal;
          btnQ.textContent = `Mệnh đề Q: ${this.state.qVal ? 'ĐÚNG (Đ)' : 'SAI (S)'}`;
          btnQ.className = `px-3 py-1.5 rounded-xl ${this.state.qVal ? 'bg-emerald-600' : 'bg-rose-600'} text-white font-bold cursor-pointer`;
          this.renderAll();
        });
      }

      const vxInp = c.querySelector('[data-ctrl="varX"]');
      if (vxInp) {
        vxInp.addEventListener('input', e => {
          this.state.varX = parseFloat(e.target.value);
          c.querySelector('[data-disp="vx"]').textContent = fmt(this.state.varX, 1);
          this.renderAll();
        });
      }

      c.querySelectorAll('[data-vop]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.vennOp = btn.dataset.vop;
          c.querySelectorAll('[data-vop]').forEach(b => {
            b.className = b.dataset.vop === this.state.vennOp
              ? 'px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold cursor-pointer'
              : 'px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer';
          });
          this.renderAll();
        });
      });

      ['cardA', 'cardB', 'cardInter'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        if (inp) {
          inp.addEventListener('input', e => {
            this.state[k] = parseInt(e.target.value, 10);
            const maxInter = Math.min(this.state.cardA, this.state.cardB);
            if (this.state.cardInter > maxInter) {
              this.state.cardInter = maxInter;
              c.querySelector('[data-ctrl="cardInter"]').value = maxInter;
            }
            c.querySelector('[data-disp="cA"]').textContent = this.state.cardA;
            c.querySelector('[data-disp="cB"]').textContent = this.state.cardB;
            c.querySelector('[data-disp="cI"]').textContent = this.state.cardInter;
            this.renderAll();
          });
        }
      });

      ['a1', 'a2', 'b1', 'b2'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        if (inp) {
          inp.addEventListener('input', e => {
            this.state[k] = parseFloat(e.target.value);
            if (this.state.a1 > this.state.a2) {
              this.state.a2 = this.state.a1;
              c.querySelector('[data-ctrl="a2"]').value = this.state.a2;
            }
            if (this.state.b1 >= this.state.b2) {
              this.state.b2 = this.state.b1 + 0.5;
              c.querySelector('[data-ctrl="b2"]').value = this.state.b2;
            }
            ['a1', 'a2', 'b1', 'b2'].forEach(id => {
              const d = c.querySelector(`[data-disp="${id}"]`);
              if (d) d.textContent = fmt(this.state[id], 1);
            });
            this.renderAll();
          });
        }
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 300;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      const infoEl = this.container.querySelector('[data-logic-info]');

      if (this.state.mode === 'logic') {
        const P = this.state.pVal;
        const Q = this.state.qVal;
        const notP = !P;
        const impPQ = !P || Q;
        const impQP = !Q || P;
        const eqPQ = P === Q;
        const x = this.state.varX;
        const pxVal = x * x - 4 * x + 3;
        const pxTrue = pxVal <= 1e-6;

        // Draw Truth Table on Canvas
        const rows = [
          { p: true, q: true, imp: true, rev: true, eq: true },
          { p: true, q: false, imp: false, rev: true, eq: false },
          { p: false, q: true, imp: true, rev: false, eq: false },
          { p: false, q: false, imp: true, rev: true, eq: true }
        ];
        const headers = ['P', 'Q', 'P̄', 'P ⇒ Q', 'Q ⇒ P', 'P ⇔ Q'];
        const colW = (width - 40) / 6;
        const startX = 20, startY = 24, rowH = 44;

        ctx.fillStyle = theme.blue;
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        headers.forEach((h, i) => {
          ctx.fillText(h, startX + colW * (i + 0.5), startY + 18);
        });

        rows.forEach((r, rIdx) => {
          const y = startY + 32 + rIdx * rowH;
          const active = r.p === P && r.q === Q;
          if (active) {
            ctx.fillStyle = 'rgba(59, 130, 246, 0.18)';
            ctx.fillRect(startX, y, width - 40, rowH - 4);
            ctx.strokeStyle = theme.blue;
            ctx.lineWidth = 2;
            ctx.strokeRect(startX, y, width - 40, rowH - 4);
          }
          const vals = [r.p, r.q, !r.p, r.imp, r.rev, r.eq];
          vals.forEach((v, cIdx) => {
            ctx.fillStyle = v ? theme.emerald : theme.rose;
            ctx.font = active ? 'bold 13px monospace' : '12px monospace';
            ctx.fillText(v ? 'Đúng (Đ)' : 'Sai (S)', startX + colW * (cIdx + 0.5), y + 24);
          });
        });

        ctx.fillStyle = pxTrue ? theme.emerald : theme.rose;
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(
          `Mệnh đề chứa biến P(${fmt(x, 1)}): (${fmt(x, 1)})² − 4(${fmt(x, 1)}) + 3 = ${fmt(pxVal, 2)} ≤ 0 là ${pxTrue ? 'MỆNH ĐỀ ĐÚNG' : 'MỆNH ĐỀ SAI'}`,
          width / 2,
          height - 20
        );

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Phân Tích Mệnh Đề Logic &amp; Lượng Từ ∀, ∃ (Bài 1)</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl border ${impPQ ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300'}">
                <div class="text-[10px] text-slate-500">Mệnh đề kéo theo P ⇒ Q</div>
                <div class="font-extrabold mt-0.5 ${impPQ ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}">${impPQ ? 'ĐÚNG (Đ)' : 'SAI (S) — P đúng mà Q sai!'}</div>
              </div>
              <div class="p-2.5 rounded-xl border ${eqPQ ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
                <div class="text-[10px] text-slate-500">Tương đương P ⇔ Q &amp; Đảo Q ⇒ P</div>
                <div class="font-bold mt-0.5">P⇔Q: ${eqPQ ? 'Đúng' : 'Sai'} • Q⇒P: ${impQP ? 'Đúng' : 'Sai'}</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
              <div class="font-bold text-indigo-800 dark:text-indigo-300">Phủ định mệnh đề có lượng từ ∀ và ∃:</div>
              <div class="font-mono text-[11px] mt-0.5">• Phủ định của "∀x ∈ ℝ, P(x)" là "∃x ∈ ℝ, P̄(x)"<br>• Phủ định của "∃x ∈ ℝ, P(x)" là "∀x ∈ ℝ, P̄(x)"</div>
            </div>
          `;
        }
      } else if (this.state.mode === 'venn') {
        const { vennOp, cardA, cardB, cardInter } = this.state;
        const onlyA = cardA - cardInter;
        const onlyB = cardB - cardInter;
        const unionAB = cardA + cardB - cardInter;
        const cxA = width * 0.40, cxB = width * 0.60, cy = height * 0.52, r = 78;

        // Universal set E box
        ctx.strokeStyle = theme.muted;
        ctx.lineWidth = 2;
        ctx.strokeRect(24, 20, width - 48, height - 40);
        ctx.fillStyle = theme.muted;
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('Tập vũ trụ E', 36, 40);

        // Pixel-by-pixel or composite shading for Venn operations
        ctx.save();
        for (let px = 28; px < width - 28; px += 4) {
          for (let py = 24; py < height - 24; py += 4) {
            const inA = Math.hypot(px - cxA, py - cy) <= r;
            const inB = Math.hypot(px - cxB, py - cy) <= r;
            let hit = false;
            if (vennOp === 'inter') hit = inA && inB;
            else if (vennOp === 'union') hit = inA || inB;
            else if (vennOp === 'diffAB') hit = inA && !inB;
            else if (vennOp === 'diffBA') hit = inB && !inA;
            else if (vennOp === 'compA') hit = !inA;
            if (hit) {
              ctx.fillStyle = 'rgba(59, 130, 246, 0.28)';
              ctx.fillRect(px, py, 4, 4);
            }
          }
        }
        ctx.restore();

        // Draw circles A and B
        ctx.beginPath();
        ctx.arc(cxA, cy, r, 0, TWO_PI);
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 2.6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cxB, cy, r, 0, TWO_PI);
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 2.6;
        ctx.stroke();

        ctx.fillStyle = theme.text;
        ctx.font = 'bold 13px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`A\\B (${onlyA})`, cxA - 36, cy);
        ctx.fillText(`A∩B (${cardInter})`, (cxA + cxB) / 2, cy);
        ctx.fillText(`B\\A (${onlyB})`, cxB + 36, cy);

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Biểu Đồ Venn &amp; Công Thức Lực Lượng Tập Hợp (Bài 2)</div>
            <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 font-mono font-bold text-center">
              n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = ${cardA} + ${cardB} − ${cardInter} = ${unionAB}
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Hiệu A \\ B và B \\ A</div>
                <div class="font-bold mt-0.5">n(A \\ B) = ${onlyA}<br>n(B \\ A) = ${onlyB}</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Giao A ∩ B &amp; Hợp A ∪ B</div>
                <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">n(A ∩ B) = ${cardInter}<br>n(A ∪ B) = ${unionAB}</div>
              </div>
            </div>
          `;
        }
      } else {
        // Interval mode on real line R
        const { a1, a2, b1, b2 } = this.state;
        const ox = width / 2, scale = (width - 70) / 12;
        const toPx = x => ox + x * scale;

        const drawAxis = (y, title) => {
          ctx.strokeStyle = theme.axis;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(20, y);
          ctx.lineTo(width - 20, y);
          ctx.stroke();
          for (let v = -5; v <= 5; v++) {
            const px = toPx(v);
            ctx.beginPath();
            ctx.moveTo(px, y - 4);
            ctx.lineTo(px, y + 4);
            ctx.stroke();
            if (y > 200) {
              ctx.fillStyle = theme.muted;
              ctx.font = '10px monospace';
              ctx.textAlign = 'center';
              ctx.fillText(String(v), px, y + 16);
            }
          }
          ctx.fillStyle = theme.text;
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(title, 24, y - 12);
        };

        drawAxis(65, `Tập A = [${fmt(a1, 1)}; ${fmt(a2, 1)}]`);
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(toPx(a1), 65);
        ctx.lineTo(toPx(a2), 65);
        ctx.stroke();

        drawAxis(145, `Tập B = (${fmt(b1, 1)}; ${fmt(b2, 1)})`);
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(toPx(b1), 145);
        ctx.lineTo(toPx(b2), 145);
        ctx.stroke();

        const iL = Math.max(a1, b1), iR = Math.min(a2, b2);
        const hasInter = iL < iR;
        drawAxis(225, `Giao A ∩ B = ${hasInter ? `(${fmt(iL, 1)}; ${fmt(iR, 1)}]` : '∅ (Rỗng)'}`);
        if (hasInter) {
          ctx.strokeStyle = theme.amber;
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(toPx(iL), 225);
          ctx.lineTo(toPx(iR), 225);
          ctx.stroke();
        }

        const touchingOrOverlap = !(a2 < b1 || b2 < a1);
        const unionStr = touchingOrOverlap
          ? `[${fmt(Math.min(a1, b1), 1)}; ${fmt(Math.max(a2, b2), 1)})`
          : `[${fmt(a1, 1)}; ${fmt(a2, 1)}] ∪ (${fmt(b1, 1)}; ${fmt(b2, 1)})`;

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Các Tập Hợp Con Của ℝ Trên Trục Số (Bài 2)</div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono">
              <div><strong class="text-blue-600">A = [${fmt(a1, 1)}; ${fmt(a2, 1)}]</strong> (Đoạn có chứa 2 đầu mút)</div>
              <div><strong class="text-emerald-600">B = (${fmt(b1, 1)}; ${fmt(b2, 1)})</strong> (Khoảng không chứa đầu mút)</div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                <div class="text-[10px] text-amber-700 dark:text-amber-300 font-bold">Giao A ∩ B:</div>
                <div class="font-mono font-bold mt-0.5">${hasInter ? `${iL === a1 && a1 > b1 ? '[' : '('}${fmt(iL, 1)}; ${iR === a2 && a2 < b2 ? fmt(iR, 1) + ']' : fmt(iR, 1) + ')'}` : '∅ (Hai tập rời nhau)'}</div>
              </div>
              <div class="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                <div class="text-[10px] text-indigo-700 dark:text-indigo-300 font-bold">Hợp A ∪ B &amp; Phần bù ℝ \\ A:</div>
                <div class="font-mono font-bold mt-0.5">A∪B = ${unionStr}<br>ℝ\\A = (-∞;${fmt(a1, 1)})∪(${fmt(a2, 1)};+∞)</div>
              </div>
            </div>
          `;
        }
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 13: SỐ GẦN ĐÚNG, SAI SỐ, XU THẾ TRUNG TÂM & BIỂU ĐỒ HỘP BOX-PLOT (TOÁN 10 CHƯƠNG V - BÀI 12, 13, 14)
  // =========================================================================
  class DescriptiveStats10Sim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'dispersion', // 'error' (Bài 12) | 'central' (Bài 13) | 'dispersion' (Bài 14)
        approxA: 3.14159265,
        precD: 0.01,
        sample: options.sample || [5, 6, 6, 7, 7, 8, 9],
        x7: options.x7 !== undefined ? options.x7 : 9
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    computeSampleStats() {
      const raw = [...this.state.sample.slice(0, 6), this.state.x7];
      const sorted = [...raw].sort((a, b) => a - b);
      const n = sorted.length; // 7
      const sum = sorted.reduce((s, v) => s + v, 0);
      const mean = sum / n;
      // n = 7: median Q2 = sorted[3], lower half sorted[0..2] => Q1 = sorted[1], upper half sorted[4..6] => Q3 = sorted[5]
      const q1 = sorted[1];
      const me = sorted[3];
      const q3 = sorted[5];
      const iqr = q3 - q1;
      const rangeR = sorted[n - 1] - sorted[0];
      const variance = sorted.reduce((s, v) => s + (v - mean) * (v - mean), 0) / n;
      const stdDev = Math.sqrt(variance);
      const lowFence = q1 - 1.5 * iqr;
      const highFence = q3 + 1.5 * iqr;
      const outliers = sorted.filter(v => v < lowFence - 1e-6 || v > highFence + 1e-6);

      return { raw, sorted, n, mean, q1, me, q3, iqr, rangeR, variance, stdDev, lowFence, highFence, outliers };
    }

    initDOM() {
      const m = this.state.mode;
      const btnCls = (modeName) => m === modeName
        ? 'px-2.5 py-1.5 rounded-xl bg-white text-emerald-900 font-bold text-xs cursor-pointer'
        : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';

      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-chart-Simple"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Thống Kê Toán 10: Sai Số, Xu Thế Trung Tâm &amp; Độ Phân Tán (Box-plot)</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Chương V (Bài 12, 13, 14)</span>
                </div>
                <p class="text-xs text-emerald-100/90 mt-0.5">Khảo sát khoảng sai số $[a-d; a+d]$, điểm cân bằng $\\bar{x}$ vs Trung vị $M_e$, Tứ phân vị và phát hiện Giá trị bất thường (Outlier)</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-mode="error" class="${btnCls('error')}">1. Số gần đúng &amp; Sai số (Bài 12)</button>
              <button type="button" data-mode="central" class="${btnCls('central')}">2. Xu thế trung tâm (Bài 13)</button>
              <button type="button" data-mode="dispersion" class="${btnCls('dispersion')}">3. Độ phân tán &amp; Box-plot (Bài 14)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="stats10-canvas block w-full h-[290px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-stats10-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Controls for Error Mode (Bài 12) -->
          <div data-ctrl-error class="${m === 'error' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="font-bold">Chọn phép đo $a$:</span>
              <button type="button" data-apreset="3.14159265" class="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold cursor-pointer">π ≈ 3,14159265</button>
              <button type="button" data-apreset="1.41421356" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">√2 ≈ 1,41421356</button>
              <button type="button" data-apreset="152.68" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">Chiều dài cầu 152,68 m</button>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-bold">Độ chính xác $d$:</span>
              <button type="button" data-dpreset="0.1" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">d = 0,1</button>
              <button type="button" data-dpreset="0.01" class="px-2.5 py-1 rounded-lg bg-teal-600 text-white font-bold cursor-pointer">d = 0,01</button>
              <button type="button" data-dpreset="0.001" class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">d = 0,001</button>
            </div>
          </div>

          <!-- Controls for Sample Mode (Bài 13 & 14) -->
          <div data-ctrl-sample class="${m !== 'error' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div class="flex-1 min-w-[240px] space-y-1">
              <div class="flex justify-between">
                <label class="font-semibold">Kéo giá trị phần tử thứ 7 ($x_7$) trong mẫu $\{5, 6, 6, 7, 7, 8, x_7\}$:</label>
                <span class="font-bold text-rose-600" data-disp="x7">${this.state.x7}</span>
              </div>
              <input type="range" data-ctrl="x7" min="1" max="19" step="1" value="${this.state.x7}" class="w-full accent-rose-600 cursor-pointer h-2">
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-spreset="normal" class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold cursor-pointer">Mẫu cân đối (x₇ = 9)</button>
              <button type="button" data-spreset="outlier" class="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 font-bold cursor-pointer">Tạo giá trị bất thường (x₇ = 18)</button>
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.stats10-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = b.dataset.mode === this.state.mode
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-emerald-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          c.querySelector('[data-ctrl-error]').classList.toggle('hidden', this.state.mode !== 'error');
          c.querySelector('[data-ctrl-sample]').classList.toggle('hidden', this.state.mode === 'error');
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-apreset]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.approxA = parseFloat(btn.dataset.apreset);
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-dpreset]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.precD = parseFloat(btn.dataset.dpreset);
          this.renderAll();
        });
      });

      const x7Inp = c.querySelector('[data-ctrl="x7"]');
      const x7Disp = c.querySelector('[data-disp="x7"]');
      if (x7Inp) {
        x7Inp.addEventListener('input', e => {
          this.state.x7 = parseFloat(e.target.value);
          if (x7Disp) x7Disp.textContent = this.state.x7;
          this.renderAll();
        });
      }

      c.querySelectorAll('[data-spreset]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.x7 = btn.dataset.spreset === 'outlier' ? 18 : 9;
          if (x7Inp) x7Inp.value = this.state.x7;
          if (x7Disp) x7Disp.textContent = this.state.x7;
          this.renderAll();
        });
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 290;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);
      const infoEl = this.container.querySelector('[data-stats10-info]');

      if (this.state.mode === 'error') {
        const a = this.state.approxA;
        const d = this.state.precD;
        const relErr = (d / Math.abs(a)) * 100;
        // Quy tròn: nếu d = 0.01 (hàng phần trăm) thì quy tròn đến hàng phần mười (gấp 10 lần d)
        const roundStep = d * 10;
        const rounded = Math.round(a / roundStep) * roundStep;
        const decDigits = Math.max(0, Math.round(-Math.log10(roundStep)));

        // Draw Confidence Interval [a - d, a + d]
        const cy = height * 0.5;
        ctx.strokeStyle = theme.axis;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(30, cy);
        ctx.lineTo(width - 30, cy);
        ctx.stroke();

        const xL = width * 0.22, xC = width * 0.5, xR = width * 0.78;
        ctx.fillStyle = 'rgba(16, 185, 129, 0.22)';
        ctx.fillRect(xL, cy - 22, xR - xL, 44);
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 3;
        ctx.strokeRect(xL, cy - 22, xR - xL, 44);

        [
          { x: xL, l: `a − d = ${(a - d).toFixed(4)}`, col: theme.rose },
          { x: xC, l: `Số gần đúng a = ${a}`, col: theme.blue },
          { x: xR, l: `a + d = ${(a + d).toFixed(4)}`, col: theme.rose }
        ].forEach(pt => {
          ctx.beginPath();
          ctx.arc(pt.x, cy, 6, 0, TWO_PI);
          ctx.fillStyle = pt.col;
          ctx.fill();
          ctx.fillStyle = theme.text;
          ctx.font = 'bold 11px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(pt.l, pt.x, cy - 32);
        });

        ctx.fillStyle = theme.emerald;
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(`Số đúng ā luôn nằm trong đoạn [${(a - d).toFixed(4)}; ${(a + d).toFixed(4)}]`, xC, cy + 52);

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Số Gần Đúng, Sai Số Tuyệt Đối &amp; Quy Tròn (Bài 12)</div>
            <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 font-mono font-bold text-center">
              ā = ${a} ± ${d} ⇒ Δ_a ≤ ${d}
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Sai số tương đối δ_a ≤ d / |a|</div>
                <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">δ_a ≤ ${fmt(relErr, 4)}%</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Số quy tròn chuẩn SGK</div>
                <div class="font-extrabold text-amber-600 dark:text-amber-400 mt-0.5">${rounded.toFixed(decDigits)}</div>
              </div>
            </div>
          `;
        }
      } else {
        const st = this.computeSampleStats();
        const padX = 36;
        const minScale = 0, maxScale = 20;
        const toPx = v => padX + ((v - minScale) / (maxScale - minScale)) * (width - 2 * padX);

        // Number line at y = 210
        const axisY = 215;
        ctx.strokeStyle = theme.axis;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padX, axisY);
        ctx.lineTo(width - padX, axisY);
        ctx.stroke();

        for (let v = 0; v <= 20; v += 2) {
          const px = toPx(v);
          ctx.beginPath();
          ctx.moveTo(px, axisY - 4);
          ctx.lineTo(px, axisY + 4);
          ctx.stroke();
          ctx.fillStyle = theme.muted;
          ctx.font = '10px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(String(v), px, axisY + 16);
        }

        // Box-plot at y = 105
        const boxY = 105, boxH = 48;
        const pxQ1 = toPx(st.q1), pxMe = toPx(st.me), pxQ3 = toPx(st.q3);
        const nonOutliers = st.sorted.filter(v => v >= st.lowFence - 1e-6 && v <= st.highFence + 1e-6);
        const whiskerMin = nonOutliers[0];
        const whiskerMax = nonOutliers[nonOutliers.length - 1];

        // Whiskers
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(toPx(whiskerMin), boxY);
        ctx.lineTo(pxQ1, boxY);
        ctx.moveTo(pxQ3, boxY);
        ctx.lineTo(toPx(whiskerMax), boxY);
        ctx.moveTo(toPx(whiskerMin), boxY - 14);
        ctx.lineTo(toPx(whiskerMin), boxY + 14);
        ctx.moveTo(toPx(whiskerMax), boxY - 14);
        ctx.lineTo(toPx(whiskerMax), boxY + 14);
        ctx.stroke();

        // Box [Q1, Q3]
        ctx.fillStyle = 'rgba(59, 130, 246, 0.22)';
        ctx.fillRect(pxQ1, boxY - boxH / 2, Math.max(4, pxQ3 - pxQ1), boxH);
        ctx.strokeStyle = theme.blue;
        ctx.lineWidth = 2.5;
        ctx.strokeRect(pxQ1, boxY - boxH / 2, Math.max(4, pxQ3 - pxQ1), boxH);

        // Median line Q2 = Me
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.moveTo(pxMe, boxY - boxH / 2);
        ctx.lineTo(pxMe, boxY + boxH / 2);
        ctx.stroke();

        ctx.fillStyle = theme.text;
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`Q₁=${st.q1}`, pxQ1, boxY - 30);
        ctx.fillText(`Mₑ=${st.me}`, pxMe, boxY - 30);
        ctx.fillText(`Q₃=${st.q3}`, pxQ3, boxY - 30);

        // Plot data dots on axisY and Mean fulcrum
        st.sorted.forEach((v, idx) => {
          const isOut = v < st.lowFence - 1e-6 || v > st.highFence + 1e-6;
          const px = toPx(v);
          ctx.beginPath();
          ctx.arc(px, axisY - 12 - (idx % 2) * 10, 6, 0, TWO_PI);
          ctx.fillStyle = isOut ? theme.rose : theme.indigo;
          ctx.fill();
          if (isOut) {
            ctx.fillStyle = theme.rose;
            ctx.font = 'bold 11px sans-serif';
            ctx.fillText(`Outlier (${v})`, px, axisY - 32);
          }
        });

        // Mean fulcrum triangle
        const pxMean = toPx(st.mean);
        ctx.fillStyle = theme.amber;
        ctx.beginPath();
        ctx.moveTo(pxMean, axisY + 2);
        ctx.lineTo(pxMean - 8, axisY + 18);
        ctx.lineTo(pxMean + 8, axisY + 18);
        ctx.closePath();
        ctx.fill();
        ctx.fillText(`x̄ = ${fmt(st.mean, 2)}`, pxMean, axisY + 34);

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Xu Thế Trung Tâm (Bài 13) &amp; Độ Phân Tán (Bài 14)</div>
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-center font-bold">
              Mẫu sắp thứ tự: [${st.sorted.join('; ')}]
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Trung bình x̄ &amp; Trung vị M_e</div>
                <div class="font-bold mt-0.5">x̄ = ${fmt(st.mean, 2)} • M_e = ${st.me}<br>Q₁ = ${st.q1} • Q₃ = ${st.q3}</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Độ phân tán R, Δ_Q, s², s</div>
                <div class="font-bold text-blue-600 dark:text-blue-400 mt-0.5">R = ${st.rangeR} • Δ_Q = ${st.iqr}<br>s² = ${fmt(st.variance, 2)} • s = ${fmt(st.stdDev, 2)}</div>
              </div>
              <div class="p-2.5 rounded-xl border ${st.outliers.length ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-900 dark:text-rose-200' : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200'} col-span-2">
                <div class="font-bold">Ngưỡng phát hiện giá trị bất thường [Q₁ − 1,5Δ_Q; Q₃ + 1,5Δ_Q] = [${fmt(st.lowFence, 1)}; ${fmt(st.highFence, 1)}]:</div>
                <div class="mt-0.5">${st.outliers.length ? `⚠️ Phát hiện giá trị bất thường (Outlier): ${st.outliers.join(', ')} (làm lệch x̄ nhưng M_e và Δ_Q không đổi!)` : '✓ Không có giá trị bất thường trong mẫu số liệu.'}</div>
              </div>
            </div>
          `;
        }
      }
    }
  }

  
  // =========================================================================
  // MÔ PHỎNG 13B: THỐNG KÊ TOÁN 11 — MẪU SỐ LIỆU GHÉP NHÓM & CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM (TOÁN 11 CHƯƠNG III - BÀI 8, 9)
  // =========================================================================
  class GroupedStats11Sim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;

      this.state = {
        mode: options.mode || 'grouped_freq', // 'grouped_freq' (Bài 8) | 'central_tendency' (Bài 9)
        presetKey: options.presetKey || 'exam',
        intervals: [[20, 40], [40, 60], [60, 80], [80, 100], [100, 120]],
        freqs: options.freqs && Array.isArray(options.freqs) ? [...options.freqs] : [6, 14, 20, 8, 2],
        title: options.title || 'Thời gian làm bài thi (phút) của 50 học sinh'
      };

      if (!this.container) return;

      this.initDOM();
      this.bindEvents();
      this.renderAll();
      attachCanvasResizeObserver(this, this.canvas ? this.canvas.parentElement : this.container);
    }

    computeStats() {
      const { intervals, freqs } = this.state;
      const n = freqs.reduce((s, v) => s + v, 0);
      const reps = intervals.map(([a, b]) => (a + b) / 2);
      const h = intervals[0][1] - intervals[0][0];

      const cf = [];
      let accum = 0;
      for (let i = 0; i < freqs.length; i++) {
        accum += freqs[i];
        cf.push(accum);
      }

      // Mean
      const sumProd = reps.reduce((s, c, i) => s + c * freqs[i], 0);
      const mean = n > 0 ? sumProd / n : 0;

      // Median Me: group containing n/2
      const halfN = n / 2;
      const pIdx = Math.max(0, cf.findIndex(c => c >= halfN));
      const [ap, ap1] = intervals[pIdx] || [0, 0];
      const prevCfMe = pIdx > 0 ? cf[pIdx - 1] : 0;
      const me = freqs[pIdx] > 0 ? ap + ((halfN - prevCfMe) / freqs[pIdx]) * (ap1 - ap) : ap;

      // Q1: group containing n/4
      const quarterN = n / 4;
      const q1Idx = Math.max(0, cf.findIndex(c => c >= quarterN));
      const [aq1, aq11] = intervals[q1Idx] || [0, 0];
      const prevCfQ1 = q1Idx > 0 ? cf[q1Idx - 1] : 0;
      const q1 = freqs[q1Idx] > 0 ? aq1 + ((quarterN - prevCfQ1) / freqs[q1Idx]) * (aq11 - aq1) : aq1;

      // Q3: group containing 3n/4
      const threeQuarterN = (3 * n) / 4;
      const q3Idx = Math.max(0, cf.findIndex(c => c >= threeQuarterN));
      const [aq3, aq31] = intervals[q3Idx] || [0, 0];
      const prevCfQ3 = q3Idx > 0 ? cf[q3Idx - 1] : 0;
      const q3 = freqs[q3Idx] > 0 ? aq3 + ((threeQuarterN - prevCfQ3) / freqs[q3Idx]) * (aq31 - aq3) : aq3;

      const iqr = q3 - q1;

      // Mode Mo: group with maximum frequency
      let maxF = -1, modeIdx = 0;
      freqs.forEach((f, idx) => {
        if (f > maxF) { maxF = f; modeIdx = idx; }
      });
      const [aj, aj1] = intervals[modeIdx] || [0, 0];
      const mj = freqs[modeIdx];
      const mjPrev = modeIdx > 0 ? freqs[modeIdx - 1] : 0;
      const mjNext = modeIdx < freqs.length - 1 ? freqs[modeIdx + 1] : 0;
      const denom = (mj - mjPrev) + (mj - mjNext);
      const mo = denom > 0 ? aj + ((mj - mjPrev) / denom) * (aj1 - aj) : (aj + aj1) / 2;

      // Dispersion measures (Toán 12 Bài 9 & 10)
      const minVal = intervals[0][0];
      const maxVal = intervals[intervals.length - 1][1];
      const rangeR = maxVal - minVal;
      const varNumerator = reps.reduce((sum, c, i) => sum + freqs[i] * Math.pow(c - mean, 2), 0);
      const variance = n > 0 ? varNumerator / n : 0;
      const stdDev = Math.sqrt(variance);

      return { n, reps, cf, mean, me, q1, q3, iqr, mo, pIdx, q1Idx, q3Idx, modeIdx, h, minVal, maxVal, rangeR, variance, stdDev };
    }

    initDOM() {
      const m = this.state.mode;
      const btnCls = (modeName) => m === modeName
        ? 'px-2.5 py-1.5 rounded-xl bg-white text-teal-900 font-bold text-xs cursor-pointer'
        : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';

      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-teal-700 via-emerald-700 to-cyan-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-chart-column"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Thống Kê Toán 11: Mẫu Số Liệu Ghép Nhóm &amp; Các Số Đặc Trưng Đo Xu Thế Trung Tâm</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 11 • Chương III (Bài 8 &amp; Bài 9)</span>
                </div>
                <p class="text-xs text-teal-100/90 mt-0.5">Khảo sát biểu đồ tần số ghép nhóm (Histogram), tính số trung bình $\\bar{x}$, trung vị $M_e$, tứ phân vị $Q_1, Q_3$ và mốt $M_o$</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-mode="grouped_freq" class="${btnCls('grouped_freq')}">1. Bảng &amp; Biểu đồ ghép nhóm (Toán 11 B8)</button>
              <button type="button" data-mode="central_tendency" class="${btnCls('central_tendency')}">2. Xu thế trung tâm (Toán 11 B9)</button>
              <button type="button" data-mode="dispersion" class="${btnCls('dispersion')}">3. Mức độ phân tán (Toán 12 B9 &amp; B10)</button>
              <button type="button" data-act="preset" class="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate"></i> Đổi mẫu
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <!-- Histogram Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <div class="flex items-center justify-between mb-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>Biểu đồ tần số ghép nhóm (Histogram)</span>
                <span class="text-teal-600 dark:text-teal-400 font-mono" data-disp-title>${this.state.title}</span>
              </div>
              <canvas class="grouped-stats-canvas block w-full rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner" style="width: 100%; height: 350px; min-height: 300px; display: block; touch-action: none;"></canvas>
              <div class="mt-2.5 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded bg-emerald-500 inline-block"></span> Tần số nhóm mᵢ</span>
                <span class="inline-flex items-center gap-1 ${m === 'central_tendency' ? '' : 'hidden'}" data-disp-legend-central>
                  <span class="w-2 h-2 rounded-full bg-blue-600 inline-block"></span> $\\bar{x}$
                  <span class="w-2 h-2 rounded-full bg-rose-600 inline-block ml-1"></span> $M_e$
                  <span class="w-2 h-2 rounded-full bg-amber-600 inline-block ml-1"></span> $Q_1, Q_3$
                  <span class="w-2 h-2 rounded-full bg-purple-600 inline-block ml-1"></span> $M_o$
                </span>
              </div>
            </div>

            <!-- Stats & Step-by-Step Metrics (5 cols) -->
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-info-box class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Frequency Sliders for 5 Groups -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            ${this.state.intervals.map(([a, b], idx) => `
              <div class="space-y-1">
                <div class="flex justify-between font-semibold">
                  <span>[${a}; ${b})</span>
                  <span class="font-bold text-teal-600" data-disp-f="${idx}">${this.state.freqs[idx]}</span>
                </div>
                <input type="range" data-ctrl-f="${idx}" min="1" max="35" step="1" value="${this.state.freqs[idx]}" class="w-full accent-teal-600 cursor-pointer h-2">
              </div>
            `).join('')}
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.grouped-stats-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = b.dataset.mode === this.state.mode
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-teal-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          const leg = c.querySelector('[data-disp-legend-central]');
          if (leg) leg.classList.toggle('hidden', this.state.mode !== 'central_tendency');
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-ctrl-f]').forEach(inp => {
        inp.addEventListener('input', e => {
          const idx = parseInt(e.target.dataset.ctrlF, 10);
          this.state.freqs[idx] = parseInt(e.target.value, 10);
          const disp = c.querySelector(`[data-disp-f="${idx}"]`);
          if (disp) disp.textContent = String(this.state.freqs[idx]);
          this.renderAll();
        });
      });

      const presetBtn = c.querySelector('[data-act="preset"]');
      if (presetBtn) {
        const presets = [
          { title: 'Thời gian làm bài thi (phút) của 50 học sinh', freqs: [6, 14, 20, 8, 2] },
          { title: 'Thời gian chạy cự ly 100m (giây) của 40 vận động viên', freqs: [4, 12, 16, 6, 2] },
          { title: 'Cân nặng (kg) của 60 học sinh lớp 11', freqs: [8, 18, 22, 10, 2] }
        ];
        let pIdx = 0;
        presetBtn.addEventListener('click', () => {
          pIdx = (pIdx + 1) % presets.length;
          this.state.title = presets[pIdx].title;
          this.state.freqs = [...presets[pIdx].freqs];
          c.querySelector('[data-disp-title]').textContent = this.state.title;
          this.state.freqs.forEach((f, idx) => {
            const inp = c.querySelector(`[data-ctrl-f="${idx}"]`);
            const disp = c.querySelector(`[data-disp-f="${idx}"]`);
            if (inp) inp.value = f;
            if (disp) disp.textContent = String(f);
          });
          this.renderAll();
        });
      }
    }

    renderAll() {
      const metrics = getCanvasMetrics(this.canvas, 350, 300);
      const { ctx, width, height } = setupCanvas(this.canvas, metrics.width, metrics.height);
      const theme = getTheme();
      const st = this.computeStats();
      const { intervals, freqs, mode } = this.state;

      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);

      const padL = 44, padR = 24, padT = 30, padB = 40;
      const plotW = width - padL - padR;
      const plotH = height - padT - padB;

      const minX = intervals[0][0];
      const maxX = intervals[intervals.length - 1][1];
      const maxF = Math.max(10, Math.ceil(Math.max(...freqs) * 1.25));

      const toPx = x => padL + ((x - minX) / (maxX - minX)) * plotW;
      const toPy = f => padT + plotH - (f / maxF) * plotH;

      // Draw Grid & Axes
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      for (let f = 5; f <= maxF; f += 5) {
        const y = toPy(f);
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(width - padR, y);
        ctx.stroke();

        ctx.fillStyle = theme.muted;
        ctx.font = '10px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(String(f), padL - 8, y + 4);
      }

      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL, height - padB);
      ctx.lineTo(width - padR + 10, height - padB);
      ctx.stroke();

      // Histogram Bars
      const barColors = [
        'rgba(20, 184, 166, 0.75)',
        'rgba(14, 165, 233, 0.75)',
        'rgba(99, 102, 241, 0.75)',
        'rgba(245, 158, 11, 0.75)',
        'rgba(244, 63, 94, 0.75)'
      ];

      intervals.forEach(([a, b], idx) => {
        const x1 = toPx(a);
        const x2 = toPx(b);
        const w = x2 - x1;
        const f = freqs[idx];
        const y = toPy(f);
        const barH = height - padB - y;

        ctx.fillStyle = barColors[idx % barColors.length];
        ctx.fillRect(x1 + 1.5, y, w - 3, barH);
        ctx.strokeStyle = theme.dark ? '#ffffff' : '#0f172a';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(x1 + 1.5, y, w - 3, barH);

        // Value on bar
        ctx.fillStyle = theme.text;
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(String(f), (x1 + x2) / 2, y - 6);

        // X tick label
        ctx.fillStyle = theme.muted;
        ctx.font = '10px monospace';
        ctx.fillText(String(a), x1, height - padB + 16);
      });
      ctx.fillText(String(maxX), toPx(maxX), height - padB + 16);

      // Central Tendency Indicators (Bài 9)
      if (mode === 'central_tendency') {
        const indicators = [
          { val: st.mean, label: 'x̄ = ' + fmt(st.mean, 1), col: '#2563eb' },
          { val: st.me, label: 'Me = ' + fmt(st.me, 1), col: '#e11d48' },
          { val: st.q1, label: 'Q1 = ' + fmt(st.q1, 1), col: '#d97706' },
          { val: st.q3, label: 'Q3 = ' + fmt(st.q3, 1), col: '#d97706' },
          { val: st.mo, label: 'Mo = ' + fmt(st.mo, 1), col: '#9333ea' }
        ];

        indicators.forEach((ind, i) => {
          const px = toPx(ind.val);
          ctx.save();
          ctx.setLineDash([4, 3]);
          ctx.strokeStyle = ind.col;
          ctx.lineWidth = 2.0;
          ctx.beginPath();
          ctx.moveTo(px, padT);
          ctx.lineTo(px, height - padB);
          ctx.stroke();

          ctx.fillStyle = ind.col;
          ctx.font = 'bold 10px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(ind.label, px, padT - 8 - (i % 2) * 12);
          ctx.restore();
        });
      }

      // Information Box
      const infoEl = this.container.querySelector('[data-info-box]');
      if (!infoEl) return;

      const [ap, ap1] = intervals[st.pIdx];
      const prevCfMe = st.pIdx > 0 ? st.cf[st.pIdx - 1] : 0;
      const [aq1, aq11] = intervals[st.q1Idx];
      const prevCfQ1 = st.q1Idx > 0 ? st.cf[st.q1Idx - 1] : 0;
      const [aq3, aq31] = intervals[st.q3Idx];
      const prevCfQ3 = st.q3Idx > 0 ? st.cf[st.q3Idx - 1] : 0;
      const [aj, aj1] = intervals[st.modeIdx];
      const mj = freqs[st.modeIdx];
      const mjPrev = st.modeIdx > 0 ? freqs[st.modeIdx - 1] : 0;
      const mjNext = st.modeIdx < freqs.length - 1 ? freqs[st.modeIdx + 1] : 0;

      if (mode === 'dispersion') {
        infoEl.innerHTML = [
          '<div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Các Số Đặc Trưng Đo Mức Độ Phân Tán (Toán 12 Bài 9 & 10)</div>',
          '<div class="grid grid-cols-2 gap-2 text-xs">',
          '  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">',
          '    <div class="text-[10px] text-slate-500">Khoảng biến thiên R = a_k − a_1</div>',
          '    <div class="font-bold text-amber-600 dark:text-amber-400 mt-0.5">R = ' + st.maxVal + ' − ' + st.minVal + ' = ' + fmt(st.rangeR, 2) + '</div>',
          '  </div>',
          '  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">',
          '    <div class="text-[10px] text-slate-500">Khoảng tứ phân vị Δ_Q = Q_3 − Q_1</div>',
          '    <div class="font-bold text-amber-600 dark:text-amber-400 mt-0.5">Δ_Q = ' + fmt(st.q3, 2) + ' − ' + fmt(st.q1, 2) + ' = ' + fmt(st.iqr, 2) + '</div>',
          '  </div>',
          '  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">',
          '    <div class="text-[10px] text-slate-500">Phương sai mẫu ghép nhóm s²</div>',
          '    <div class="font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">s² = ' + fmt(st.variance, 3) + '</div>',
          '  </div>',
          '  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">',
          '    <div class="text-[10px] text-slate-500">Độ lệch chuẩn s = √(s²)</div>',
          '    <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">s = ' + fmt(st.stdDev, 3) + '</div>',
          '  </div>',
          '  <div class="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 col-span-2">',
          '    <div class="text-[10px] text-amber-800 dark:text-amber-300 font-bold">Ý nghĩa thống kê:</div>',
          '    <div class="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">',
          '      • <b>Δ_Q = ' + fmt(st.iqr, 2) + '</b>: Đo độ phân tán của 50% số liệu chính giữa, không bị ảnh hưởng bởi giá trị ngoại lai.<br>',
          '      • <b>s = ' + fmt(st.stdDev, 2) + '</b>: Độ lệch chuẩn càng nhỏ thì số liệu càng tập trung quanh số trung bình x̄ = ' + fmt(st.mean, 2) + '.',
          '    </div>',
          '  </div>',
          '</div>'
        ].join('\n');
        renderKaTeX(infoEl);
        return;
      }

      if (mode === 'grouped_freq') {
        infoEl.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Bảng Tần Số Ghép Nhóm &amp; Giá Trị Đại Diện (Bài 8)</div>
          <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table class="w-full text-center text-xs font-mono">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
                <tr>
                  <th class="p-1.5 border-b border-r border-slate-200 dark:border-slate-700">Nhóm [aᵢ; aᵢ₊₁)</th>
                  <th class="p-1.5 border-b border-r border-slate-200 dark:border-slate-700">Giá trị cᵢ</th>
                  <th class="p-1.5 border-b border-r border-slate-200 dark:border-slate-700">Tần số mᵢ</th>
                  <th class="p-1.5 border-b border-slate-200 dark:border-slate-700">Tích lũy cfᵢ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                ${intervals.map(([a, b], idx) => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-1.5 border-r border-slate-200 dark:border-slate-700 font-bold">[${a}; ${b})</td>
                    <td class="p-1.5 border-r border-slate-200 dark:border-slate-700 text-teal-600">${st.reps[idx]}</td>
                    <td class="p-1.5 border-r border-slate-200 dark:border-slate-700 font-bold">${freqs[idx]}</td>
                    <td class="p-1.5 text-slate-500">${st.cf[idx]}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <div class="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
            <div class="font-bold text-teal-800 dark:text-teal-200">Tổng cỡ mẫu: n = ${st.n} học sinh</div>
            <div class="text-[11px] text-teal-700 dark:text-teal-300 mt-0.5">Độ dài mỗi khoảng nhóm: h = ${st.h} phút • Giá trị đại diện cᵢ = (aᵢ + aᵢ₊₁)/2</div>
          </div>
        `;
      } else {
        infoEl.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Các Số Đặc Trưng Đo Xu Thế Trung Tâm (Bài 9)</div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <div class="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">1. Số trung bình x̄</div>
              <div class="font-mono font-bold text-sm text-blue-700 dark:text-blue-300">x̄ = ${fmt(st.mean, 2)}</div>
              <div class="text-[9px] text-slate-500">x̄ = (Σmᵢcᵢ)/n</div>
            </div>
            <div class="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
              <div class="text-[10px] text-rose-600 dark:text-rose-400 font-semibold">2. Trung vị Mₑ (n/2 = ${st.n / 2})</div>
              <div class="font-mono font-bold text-sm text-rose-700 dark:text-rose-300">Mₑ = ${fmt(st.me, 2)}</div>
              <div class="text-[9px] text-slate-500">Nhóm [${ap}; ${ap1})</div>
            </div>
            <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <div class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">3. Tứ phân vị Q₁ &amp; Q₃</div>
              <div class="font-mono font-bold text-xs text-amber-700 dark:text-amber-300">Q₁=${fmt(st.q1, 2)} • Q₃=${fmt(st.q3, 2)}</div>
              <div class="text-[9px] text-slate-500">ΔQ = Q₃ − Q₁ = ${fmt(st.iqr, 2)}</div>
            </div>
            <div class="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
              <div class="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">4. Mốt Mₒ (max mᵢ = ${mj})</div>
              <div class="font-mono font-bold text-sm text-purple-700 dark:text-purple-300">Mₒ = ${fmt(st.mo, 2)}</div>
              <div class="text-[9px] text-slate-500">Nhóm [${aj}; ${aj1})</div>
            </div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10.5px] font-mono leading-relaxed">
            <div>• Mₑ = ${ap} + [(${st.n/2} − ${prevCfMe})/${freqs[st.pIdx]}]·${st.h} = <strong>${fmt(st.me, 2)}</strong></div>
            <div>• Q₁ = ${aq1} + [(${st.n/4} − ${prevCfQ1})/${freqs[st.q1Idx]}]·${st.h} = <strong>${fmt(st.q1, 2)}</strong></div>
            <div>• Mₒ = ${aj} + [(${mj}−${mjPrev})/((${mj}−${mjPrev})+(${mj}−${mjNext}))]·${st.h} = <strong>${fmt(st.mo, 2)}</strong></div>
          </div>
        `;
      }
    }
  }

  // =========================================================================
  // MÔ PHỎNG 14: ĐẠI SỐ TỔ HỢP — SƠ ĐỒ CÂY QUY TẮC ĐẾM, P_n - A_n^k - C_n^k & NHỊ THỨC NEWTON (TOÁN 10 CHƯƠNG VIII - BÀI 23, 24, 25)
  // =========================================================================
  class Combinatorics10Sim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'counting', // 'counting' (Bài 23) | 'pac' (Bài 24) | 'newton' (Bài 25)
        ruleType: options.ruleType || 'mul', // 'mul' (Quy tắc nhân) | 'add' (Quy tắc cộng)
        mChoices: 3,
        nChoices: 4,
        nTotal: options.nTotal !== undefined ? options.nTotal : 5,
        kPick: options.kPick !== undefined ? options.kPick : 3,
        newtonN: options.newtonN !== undefined ? options.newtonN : 4,
        newtonA: 1,
        newtonB: 2
      };

      this.initDOM();
      this.bindEvents();
      this.renderAll();
    }

    fact(n) {
      let r = 1;
      for (let i = 2; i <= n; i++) r *= i;
      return r;
    }

    comb(n, k) {
      if (k < 0 || k > n) return 0;
      return Math.round(this.fact(n) / (this.fact(k) * this.fact(n - k)));
    }

    initDOM() {
      const m = this.state.mode;
      const btnCls = (modeName) => m === modeName
        ? 'px-2.5 py-1.5 rounded-xl bg-white text-amber-900 font-bold text-xs cursor-pointer'
        : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';

      this.container.innerHTML = `
        <div class="codehub-math-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-sitemap"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Đại Số Tổ Hợp: Sơ Đồ Cây, Hoán Vị – Chỉnh Hợp – Tổ Hợp &amp; Nhị Thức Newton</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Toán 10 • Chương VIII (Bài 23, 24, 25)</span>
                </div>
                <p class="text-xs text-amber-100/90 mt-0.5">Trực quan hóa sơ đồ hình cây quy tắc đếm, phân biệt $P_n, A_n^k, C_n^k$ và khai triển Nhị thức Newton $(ax+b)^n$ bậc 4, 5</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <button type="button" data-mode="counting" class="${btnCls('counting')}">1. Quy tắc đếm &amp; Sơ đồ cây (Bài 23)</button>
              <button type="button" data-mode="pac" class="${btnCls('pac')}">2. Hoán vị, Chỉnh hợp, Tổ hợp (Bài 24)</button>
              <button type="button" data-mode="newton" class="${btnCls('newton')}">3. Nhị thức Newton &amp; Tam giác Pascal (Bài 25)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200 dark:border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/60 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
              <canvas class="comb10-canvas block w-full h-[290px] rounded-xl border border-slate-200 dark:border-slate-800"></canvas>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div data-comb10-info class="space-y-2.5 text-xs"></div>
            </div>
          </div>

          <!-- Controls for Counting Tree Mode (Bài 23) -->
          <div data-ctrl-counting class="${m === 'counting' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div class="flex items-center gap-2">
              <button type="button" data-rule="mul" class="px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold cursor-pointer">Quy tắc Nhân (m × n)</button>
              <button type="button" data-rule="add" class="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer">Quy tắc Cộng (m + n)</button>
            </div>
            <div><div class="flex justify-between"><label class="font-semibold">Số cách chọn Áo / Phương án A ($m$)</label><span class="font-bold text-amber-600" data-disp="mc">3</span></div><input type="range" data-ctrl="mChoices" min="1" max="4" step="1" value="3" class="w-full accent-amber-600 cursor-pointer h-2"></div>
            <div><div class="flex justify-between"><label class="font-semibold">Số cách chọn Quần / Phương án B ($n$)</label><span class="font-bold text-rose-600" data-disp="nc">4</span></div><input type="range" data-ctrl="nChoices" min="1" max="5" step="1" value="4" class="w-full accent-rose-600 cursor-pointer h-2"></div>
          </div>

          <!-- Controls for P_n, A_n^k, C_n^k Mode (Bài 24) -->
          <div data-ctrl-pac class="${m === 'pac' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div><div class="flex justify-between"><label class="font-semibold">Tổng số phần tử $n$ ($1 \\le n \\le 8$)</label><span class="font-bold text-amber-600" data-disp="nt">${this.state.nTotal}</span></div><input type="range" data-ctrl="nTotal" min="2" max="8" step="1" value="${this.state.nTotal}" class="w-full accent-amber-600 cursor-pointer h-2"></div>
            <div><div class="flex justify-between"><label class="font-semibold">Số phần tử lấy ra $k$ ($0 \\le k \\le n$)</label><span class="font-bold text-rose-600" data-disp="kp">${this.state.kPick}</span></div><input type="range" data-ctrl="kPick" min="0" max="8" step="1" value="${this.state.kPick}" class="w-full accent-rose-600 cursor-pointer h-2"></div>
          </div>

          <!-- Controls for Newton Binomial Mode (Bài 25) -->
          <div data-ctrl-newton class="${m === 'newton' ? '' : 'hidden'} p-4 bg-slate-50/80 dark:bg-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div><div class="flex justify-between"><label class="font-semibold">Bậc nhị thức $n$ trong $(ax+b)^n$</label><span class="font-bold text-amber-600" data-disp="nn">${this.state.newtonN}</span></div><input type="range" data-ctrl="newtonN" min="1" max="5" step="1" value="${this.state.newtonN}" class="w-full accent-amber-600 cursor-pointer h-2"></div>
            <div><div class="flex justify-between"><label class="font-semibold">Hệ số $a$</label><span class="font-bold text-blue-600" data-disp="na">${this.state.newtonA}</span></div><input type="range" data-ctrl="newtonA" min="1" max="3" step="1" value="${this.state.newtonA}" class="w-full accent-blue-600 cursor-pointer h-2"></div>
            <div><div class="flex justify-between"><label class="font-semibold">Hằng số $b$</label><span class="font-bold text-emerald-600" data-disp="nb">${this.state.newtonB}</span></div><input type="range" data-ctrl="newtonB" min="-3" max="3" step="1" value="${this.state.newtonB}" class="w-full accent-emerald-600 cursor-pointer h-2"></div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.comb10-canvas');
      renderKaTeX(this.container);
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = b.dataset.mode === this.state.mode
              ? 'px-2.5 py-1.5 rounded-xl bg-white text-amber-900 font-bold text-xs cursor-pointer'
              : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer';
          });
          c.querySelector('[data-ctrl-counting]').classList.toggle('hidden', this.state.mode !== 'counting');
          c.querySelector('[data-ctrl-pac]').classList.toggle('hidden', this.state.mode !== 'pac');
          c.querySelector('[data-ctrl-newton]').classList.toggle('hidden', this.state.mode !== 'newton');
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-rule]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.ruleType = btn.dataset.rule;
          c.querySelectorAll('[data-rule]').forEach(b => {
            b.className = b.dataset.rule === this.state.ruleType
              ? 'px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold cursor-pointer'
              : 'px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 font-bold cursor-pointer';
          });
          this.renderAll();
        });
      });

      ['mChoices', 'nChoices'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        if (inp) {
          inp.addEventListener('input', e => {
            this.state[k] = parseInt(e.target.value, 10);
            c.querySelector('[data-disp="mc"]').textContent = this.state.mChoices;
            c.querySelector('[data-disp="nc"]').textContent = this.state.nChoices;
            this.renderAll();
          });
        }
      });

      ['nTotal', 'kPick'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        if (inp) {
          inp.addEventListener('input', e => {
            this.state[k] = parseInt(e.target.value, 10);
            if (this.state.kPick > this.state.nTotal) {
              this.state.kPick = this.state.nTotal;
              c.querySelector('[data-ctrl="kPick"]').value = this.state.kPick;
            }
            c.querySelector('[data-disp="nt"]').textContent = this.state.nTotal;
            c.querySelector('[data-disp="kp"]').textContent = this.state.kPick;
            this.renderAll();
          });
        }
      });

      ['newtonN', 'newtonA', 'newtonB'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        if (inp) {
          inp.addEventListener('input', e => {
            this.state[k] = parseInt(e.target.value, 10);
            c.querySelector('[data-disp="nn"]').textContent = this.state.newtonN;
            c.querySelector('[data-disp="na"]').textContent = this.state.newtonA;
            c.querySelector('[data-disp="nb"]').textContent = this.state.newtonB;
            this.renderAll();
          });
        }
      });

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.renderAll());
      }
    }

    renderAll() {
      const width = Math.max(280, this.canvas.clientWidth || 440);
      const height = 290;
      const { ctx } = setupCanvas(this.canvas, width, height);
      const theme = getTheme();
      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, width, height);
      const infoEl = this.container.querySelector('[data-comb10-info]');

      if (this.state.mode === 'counting') {
        const { ruleType, mChoices: m, nChoices: n } = this.state;
        const rootX = 40, rootY = height / 2;

        if (ruleType === 'mul') {
          const x1 = width * 0.40, x2 = width * 0.80;
          for (let i = 0; i < m; i++) {
            const y1 = ((i + 0.5) / m) * (height - 20) + 10;
            ctx.strokeStyle = theme.blue;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(rootX, rootY);
            ctx.lineTo(x1, y1);
            ctx.stroke();

            for (let j = 0; j < n; j++) {
              const y2 = y1 + (j - (n - 1) / 2) * (height / (m * n + 2));
              ctx.strokeStyle = theme.emerald;
              ctx.lineWidth = 1.4;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
              ctx.fillStyle = theme.text;
              ctx.font = '10px monospace';
              ctx.fillText(`A${i + 1}-Q${j + 1}`, x2 + 6, y2 + 3);
            }
            ctx.beginPath();
            ctx.arc(x1, y1, 5, 0, TWO_PI);
            ctx.fillStyle = theme.blue;
            ctx.fill();
            ctx.fillStyle = theme.text;
            ctx.font = 'bold 11px monospace';
            ctx.fillText(`Áo ${i + 1}`, x1 - 36, y1 - 6);
          }
        } else {
          // Addition rule: m + n independent branches from root
          const total = m + n;
          const x1 = width * 0.65;
          for (let i = 0; i < total; i++) {
            const y1 = ((i + 0.5) / total) * (height - 24) + 12;
            const isA = i < m;
            ctx.strokeStyle = isA ? theme.blue : theme.rose;
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(rootX, rootY);
            ctx.lineTo(x1, y1);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x1, y1, 5, 0, TWO_PI);
            ctx.fillStyle = isA ? theme.blue : theme.rose;
            ctx.fill();
            ctx.fillStyle = theme.text;
            ctx.font = 'bold 11px monospace';
            ctx.fillText(isA ? `Phương án A - Cách ${i + 1}` : `Phương án B - Cách ${i - m + 1}`, x1 + 10, y1 + 4);
          }
        }

        if (infoEl) {
          const totalWays = ruleType === 'mul' ? m * n : m + n;
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Quy Tắc Đếm &amp; Sơ Đồ Hình Cây (Bài 23)</div>
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 font-mono font-extrabold text-center text-sm">
              ${ruleType === 'mul' ? `Quy tắc Nhân: m × n = ${m} × ${n} = ${totalWays} cách` : `Quy tắc Cộng: m + n = ${m} + ${n} = ${totalWays} cách`}
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 leading-relaxed">
              ${ruleType === 'mul'
                ? `• Thực hiện liên tiếp 2 công đoạn: Công đoạn 1 có <strong>${m} cách</strong>, ứng với mỗi cách đó Công đoạn 2 có <strong>${n} cách</strong> ⇒ Số nhánh lá trên sơ đồ cây là <strong>${m} × ${n} = ${totalWays}</strong>.`
                : `• Công việc chia làm 2 phương án độc lập (không trùng nhau): Phương án A có <strong>${m} cách</strong> HOẶC Phương án B có <strong>${n} cách</strong> ⇒ Tổng cộng <strong>${m} + ${n} = ${totalWays} cách</strong>.`}
            </div>
          `;
        }
      } else if (this.state.mode === 'pac') {
        const n = this.state.nTotal;
        const k = clamp(this.state.kPick, 0, n);
        const Pn = this.fact(n);
        const Cnk = this.comb(n, k);
        const Ank = Cnk * this.fact(k);

        // Bar visual comparison of C_n^k, A_n^k, P_n
        const maxVal = Math.max(1, Pn);
        const bars = [
          { label: `Tổ hợp C(${n},${k})`, val: Cnk, col: theme.emerald, sub: 'Chọn k phần tử (KHÔNG thứ tự)' },
          { label: `Chỉnh hợp A(${n},${k})`, val: Ank, col: theme.blue, sub: `Chọn k & xếp thứ tự (= k!·C = ${this.fact(k)}×${Cnk})` },
          { label: `Hoán vị P_${n} = ${n}!`, val: Pn, col: theme.amber, sub: `Xếp thứ tự toàn bộ ${n} phần tử` }
        ];

        bars.forEach((b, idx) => {
          const y = 38 + idx * 80;
          const barW = Math.max(12, (Math.log10(b.val + 1) / Math.log10(maxVal + 1)) * (width - 140));
          ctx.fillStyle = theme.text;
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`${b.label} = ${b.val.toLocaleString('vi-VN')} (${b.sub})`, 24, y);
          ctx.fillStyle = b.col;
          ctx.fillRect(24, y + 10, barW, 26);
        });

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Hoán Vị, Chỉnh Hợp &amp; Tổ Hợp (Bài 24)</div>
            <div class="grid grid-cols-3 gap-1.5 text-center font-mono">
              <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <div class="text-[10px] text-slate-500">Tổ hợp Cₙᵏ</div>
                <div class="font-extrabold text-sm text-emerald-700 dark:text-emerald-300">${Cnk}</div>
              </div>
              <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                <div class="text-[10px] text-slate-500">Chỉnh hợp Aₙᵏ</div>
                <div class="font-extrabold text-sm text-blue-700 dark:text-blue-300">${Ank}</div>
              </div>
              <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                <div class="text-[10px] text-slate-500">Hoán vị Pₙ</div>
                <div class="font-extrabold text-sm text-amber-700 dark:text-amber-300">${Pn}</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px] leading-relaxed">
              • C_${n}^${k} = ${n}! / [${k}!·(${n}−${k})!] = ${Cnk}<br>
              • A_${n}^${k} = ${k}! · C_${n}^${k} = ${this.fact(k)} × ${Cnk} = ${Ank}<br>
              • Tính chất đối xứng: C_${n}^${k} = C_${n}^${n - k} = ${Cnk}
            </div>
          `;
        }
      } else {
        // Newton Binomial & Pascal Triangle (Bài 25)
        const { newtonN: n, newtonA: a, newtonB: b } = this.state;
        const rowH = 42;
        ctx.textAlign = 'center';
        for (let r = 0; r <= n; r++) {
          const y = 32 + r * rowH;
          const isTarget = r === n;
          for (let k = 0; k <= r; k++) {
            const x = width / 2 + (k - r / 2) * 54;
            const cVal = this.comb(r, k);
            ctx.beginPath();
            ctx.arc(x, y, 16, 0, TWO_PI);
            ctx.fillStyle = isTarget ? theme.amber : 'rgba(148, 163, 184, 0.2)';
            ctx.fill();
            ctx.fillStyle = isTarget ? '#ffffff' : theme.text;
            ctx.font = 'bold 12px monospace';
            ctx.fillText(String(cVal), x, y + 4);
          }
        }

        const terms = [];
        for (let k = 0; k <= n; k++) {
          const cnk = this.comb(n, k);
          const coeff = cnk * Math.pow(a, n - k) * Math.pow(b, k);
          const p = n - k;
          const xPart = p === 0 ? '' : (p === 1 ? 'x' : `x^${p}`);
          terms.push(`${coeff >= 0 && k > 0 ? '+ ' : ''}${coeff}${xPart}`);
        }
        const sumCoeffs = Math.pow(a + b, n);

        if (infoEl) {
          infoEl.innerHTML = `
            <div class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Nhị Thức Newton &amp; Tam Giác Pascal (Bài 25)</div>
            <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 font-mono font-bold text-center">
              (${a === 1 ? '' : a}x ${b >= 0 ? '+ ' + b : '− ' + Math.abs(b)})^${n} = ${terms.join(' ')}
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Số các số hạng (n + 1)</div>
                <div class="font-bold mt-0.5">${n + 1} số hạng (k = 0..${n})</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div class="text-[10px] text-slate-500">Tổng hệ số &amp; Tổng ΣCₙᵏ</div>
                <div class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">ΣC_${n}^k = 2^${n} = ${Math.pow(2, n)}<br>P(1) = (${a}+${b})^${n} = ${sumCoeffs}</div>
              </div>
            </div>
          `;
        }
      }
    }
  }

  return {
    QuadraticGraphSim,
    TrigCircleSim,
    DynamicGeometrySim,
    CalculusExplorerSim,
    SpatialGeometry3DSim,
    ProbabilityStatsSim,
    LinearInequalitySim,
    VectorLinePlane2DSim,
    SequenceLimitSim,
    OxyzAnalytic3DSim,
    BayesTreeSim,
    LogicSetVennSim,
    DescriptiveStats10Sim,
    GroupedStats11Sim,
    Combinatorics10Sim,
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
        case 'inequality':
        case 'linear_inequality':
          return new LinearInequalitySim(container, options);
        case 'vector':
        case 'vector_line':
          return new VectorLinePlane2DSim(container, options);
        case 'sequence':
        case 'sequence_limit':
          return new SequenceLimitSim(container, options);
        case 'oxyz_analytic':
        case 'sphere_plane':
          return new OxyzAnalytic3DSim(container, options);
        case 'bayes':
        case 'bayes_tree':
          return new BayesTreeSim(container, options);
        case 'logic_set':
        case 'venn':
          return new LogicSetVennSim(container, options);
        case 'stats11':
        case 'grouped_stats':
          return new GroupedStats11Sim(container, options);
        case 'stats10':
        case 'boxplot':
          return new DescriptiveStats10Sim(container, options);
        case 'combinatorics10':
        case 'newton':
          return new Combinatorics10Sim(container, options);
        default:
          return new QuadraticGraphSim(container, options);
      }
    }
  };
});
