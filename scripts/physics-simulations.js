/**
 * Học viện CodeHub - Hệ Thống Mô Phỏng Vật Lý Tương Tác (THPT 10 - 11 - 12)
 * Pure HTML5 Canvas & Vanilla JavaScript (Zero external AI APIs, 100% Client-Side)
 * 
 * 1. Chuyển động tròn đều (Lớp 10)
 * 2. Dao động điều hòa & Vòng tròn pha (Lớp 11)
 * 3. Con lắc lò xo & Bảo toàn cơ năng (Lớp 11)
 * 4. Con lắc đơn: Mô hình gần đúng góc nhỏ vs Phi tuyến góc lớn RK4 (Lớp 11)
 * 5. Sóng cơ: Sóng ngang, sóng dọc & Sự lan truyền pha (Lớp 11/12)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CodeHubPhysics = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Common UI & Math Helpers
  const TWO_PI = Math.PI * 2;
  const DEG_TO_RAD = Math.PI / 180;
  const RAD_TO_DEG = 180 / Math.PI;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function formatNum(num, decimals = 2) {
    if (isNaN(num) || num === null || num === undefined) return '0.00';
    return Number(num).toFixed(decimals);
  }

  function fmt(num, decimals = 2) {
    if (isNaN(num) || num === null || num === undefined) return '0.00';
    return Number(num).toFixed(decimals);
  }

  function setupCanvasDPI(canvas, width, height) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, dpr, width, height };
  }

  function isDarkMode() {
    return document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
  }

  function getThemeColors() {
    const dark = isDarkMode();
    return {
      dark,
      bg: dark ? '#0f172a' : '#ffffff',
      panelBg: dark ? '#1e293b' : '#f8fafc',
      border: dark ? '#334155' : '#e2e8f0',
      textMain: dark ? '#f1f5f9' : '#0f172a',
      textMuted: dark ? '#94a3b8' : '#64748b',
      grid: dark ? 'rgba(148, 163, 184, 0.12)' : 'rgba(100, 116, 139, 0.12)',
      axis: dark ? '#475569' : '#cbd5e1',
      primary: '#3b82f6',
      emerald: '#10b981',
      rose: '#f43f5e',
      amber: '#f59e0b',
      purple: '#a855f7',
      sky: '#0284c7'
    };
  }

  function drawArrow(ctx, fromX, fromY, toX, toY, color, lineWidth = 2, headLen = 9) {
    const dx = toX - fromX;
    const dy = toY - fromY;
    const len = Math.hypot(dx, dy);
    if (len < 1) return;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    const angle = Math.atan2(dy, dx);
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // =========================================================================
  // 1. CHUYỂN ĐỘNG TRÒN ĐỀU (CIRCULAR MOTION) - LỚP 10
  // =========================================================================
  class CircularMotionSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        r: options.r !== undefined ? options.r : 1.5,      // Bán kính quỹ đạo (m)
        omega: options.omega !== undefined ? options.omega : 2.0, // Tốc độ góc (rad/s)
        m: options.m !== undefined ? options.m : 0.5,      // Khối lượng vật (kg)
        showV: true,                                       // Vectơ vận tốc v
        showA: true,                                       // Vectơ gia tốc hướng tâm a_ht
        showF: true,                                       // Vectơ lực hướng tâm F_ht
        showTrail: true,                                   // Vết quỹ đạo
        showGrid: true                                     // Hệ tọa độ x-y
      };

      this.state = {
        running: true,
        theta: 0,
        t: 0,
        trail: [],
        historyX: [],
        historyY: []
      };

      this.lastTimestamp = 0;
      this.rafId = null;
      this.observer = null;

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header Bar -->
          <div class="px-5 py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center font-black text-sm">
                <i class="fa-solid fa-arrows-spin"></i>
              </span>
              <div>
                <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Chuyển Động Tròn Đều</h3>
                <p class="text-xs text-blue-100/80">Vật Lí 10 • Chương 6 (Bài 31 & 32 SGK)</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5" title="Đặt lại ban đầu">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <!-- Main Grid: Simulation & Oscilloscope -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Animation Canvas (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/50 dark:bg-slate-950/40 relative flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 min-h-[340px]">
              <canvas class="sim-canvas block rounded-xl shadow-inner w-full max-w-[500px] h-[320px] sm:h-[350px]"></canvas>
              
              <!-- Legend overlay -->
              <div class="absolute bottom-6 left-6 flex flex-wrap gap-2 text-[11px] font-medium bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <span class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <span class="w-2.5 h-0.5 bg-emerald-500 rounded"></span> $\\vec{v}$ (Tiếp tuyến)
                </span>
                <span class="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                  <span class="w-2.5 h-0.5 bg-rose-500 rounded"></span> $\\vec{a}_{ht}$ (Hướng tâm)
                </span>
                <span class="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <span class="w-2.5 h-0.5 bg-amber-500 rounded"></span> $\\vec{F}_{ht}$ (Lực hướng tâm)
                </span>
              </div>
            </div>

            <!-- Real-time Time-Graph (5 cols) -->
            <div class="lg:col-span-5 p-4 flex flex-col justify-between bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-line text-blue-600"></i> Đồ Thị Tọa Độ Thời Gian
                </div>
                <div class="flex items-center gap-2 text-[11px]">
                  <span class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                    <span class="w-2 h-0.5 bg-blue-500"></span> x(t) = r·cos(ωt)
                  </span>
                  <span class="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold">
                    <span class="w-2 h-0.5 bg-purple-500"></span> y(t) = r·sin(ωt)
                  </span>
                </div>
              </div>
              <canvas class="graph-canvas block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-full h-[160px] sm:h-[180px]"></canvas>

              <!-- Real-time Physical Quantities Table -->
              <div class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Tốc độ dài v</div>
                  <div class="font-extrabold text-sm text-emerald-600 dark:text-emerald-400" data-val="v">0.00 m/s</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Gia tốc a_ht</div>
                  <div class="font-extrabold text-sm text-rose-600 dark:text-rose-400" data-val="a">0.00 m/s²</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Lực hướng tâm F</div>
                  <div class="font-extrabold text-sm text-amber-600 dark:text-amber-400" data-val="F">0.00 N</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Chu kỳ T</div>
                  <div class="font-bold text-xs text-slate-800 dark:text-slate-200" data-val="T">0.00 s</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Tần số f</div>
                  <div class="font-bold text-xs text-slate-800 dark:text-slate-200" data-val="f">0.00 Hz</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Thời gian t</div>
                  <div class="font-bold text-xs text-blue-600 dark:text-blue-400" data-val="t">0.00 s</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls & Parameter Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-900/60 space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Slider: Bán kính r -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Bán kính quỹ đạo (r)</label>
                  <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="r">${this.params.r.toFixed(1)} m</span>
                </div>
                <input type="range" data-ctrl="r" min="0.5" max="3.0" step="0.1" value="${this.params.r}"
                  class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>0.5 m</span><span>3.0 m</span></div>
              </div>

              <!-- Slider: Tốc độ góc omega -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Tốc độ góc (ω)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="omega">${this.params.omega.toFixed(1)} rad/s</span>
                </div>
                <input type="range" data-ctrl="omega" min="0.5" max="6.0" step="0.1" value="${this.params.omega}"
                  class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>0.5 rad/s</span><span>6.0 rad/s</span></div>
              </div>

              <!-- Slider: Khối lượng m -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Khối lượng vật (m)</label>
                  <span class="font-bold text-amber-600 dark:text-amber-400" data-disp="m">${this.params.m.toFixed(1)} kg</span>
                </div>
                <input type="range" data-ctrl="m" min="0.1" max="2.0" step="0.1" value="${this.params.m}"
                  class="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>0.1 kg</span><span>2.0 kg</span></div>
              </div>
            </div>

            <!-- Toggles for Vectors & Visuals -->
            <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap items-center gap-4">
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showV" ${this.params.showV ? 'checked' : ''} class="rounded text-emerald-600 focus:ring-emerald-500">
                  <span>Vectơ vận tốc $\\vec{v}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showA" ${this.params.showA ? 'checked' : ''} class="rounded text-rose-600 focus:ring-rose-500">
                  <span>Gia tốc $\\vec{a}_{ht}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showF" ${this.params.showF ? 'checked' : ''} class="rounded text-amber-600 focus:ring-amber-500">
                  <span>Lực $\\vec{F}_{ht}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showTrail" ${this.params.showTrail ? 'checked' : ''} class="rounded text-blue-600 focus:ring-blue-500">
                  <span>Vết quỹ đạo</span>
                </label>
              </div>

              <!-- Quick Presets -->
              <div class="flex items-center gap-1.5">
                <span class="text-slate-400 text-[11px]">Mẫu:</span>
                <button type="button" data-preset="slow" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-blue-100 hover:text-blue-700 transition">Chậm</button>
                <button type="button" data-preset="fast" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-blue-100 hover:text-blue-700 transition">Nhanh</button>
                <button type="button" data-preset="moon" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-blue-100 hover:text-blue-700 transition">Vệ tinh</button>
              </div>
            </div>

            <!-- Formulas & SI Reference Summary -->
            <div class="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-lightbulb text-amber-500 text-base"></i>
                <span><strong>Công thức SGK Vật lí 10:</strong> $v = \\omega r$, $a_{ht} = \\omega^2 r = \\frac{v^2}{r}$, $F_{ht} = m a_{ht} = m\\omega^2 r$, $T = \\frac{2\\pi}{\\omega}$.</span>
              </div>
              <span class="text-[11px] text-blue-600 dark:text-blue-400 font-medium">Vectơ $\\vec{v}$ luôn vuông góc với $\\vec{a}_{ht}$ tại mọi thời điểm.</span>
            </div>
          </div>
        </div>
      `;

      this.canvasSim = this.container.querySelector('.sim-canvas');
      this.canvasGraph = this.container.querySelector('.graph-canvas');

      // Trigger KaTeX render if available
      if (typeof renderMathInElement === 'function') {
        renderMathInElement(this.container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    bindEvents() {
      const c = this.container;
      // Toggle button
      const toggleBtn = c.querySelector('[data-act="toggle"]');
      toggleBtn.addEventListener('click', () => {
        this.state.running = !this.state.running;
        toggleBtn.innerHTML = this.state.running
          ? '<i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>'
          : '<i class="fa-solid fa-play"></i> <span>Tiếp tục</span>';
        if (this.state.running) {
          this.lastTimestamp = performance.now();
        }
      });

      // Reset button
      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.state.theta = 0;
        this.state.t = 0;
        this.state.trail = [];
        this.state.historyX = [];
        this.state.historyY = [];
        this.renderAll();
      });

      // Sliders
      ['r', 'omega', 'm'].forEach(key => {
        const input = c.querySelector(`[data-ctrl="${key}"]`);
        const disp = c.querySelector(`[data-disp="${key}"]`);
        input.addEventListener('input', (e) => {
          this.params[key] = parseFloat(e.target.value);
          if (disp) {
            disp.textContent = `${this.params[key].toFixed(1)} ${key === 'r' ? 'm' : key === 'omega' ? 'rad/s' : 'kg'}`;
          }
          this.renderAll();
        });
      });

      // Toggles
      ['showV', 'showA', 'showF', 'showTrail'].forEach(key => {
        const chk = c.querySelector(`[data-ctrl="${key}"]`);
        chk.addEventListener('change', (e) => {
          this.params[key] = e.target.checked;
          if (!this.params.showTrail) this.state.trail = [];
          this.renderAll();
        });
      });

      // Presets
      c.querySelectorAll('[data-preset]').forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.dataset.preset;
          if (type === 'slow') {
            this.setSliders({ r: 1.5, omega: 1.0, m: 0.5 });
          } else if (type === 'fast') {
            this.setSliders({ r: 1.2, omega: 4.5, m: 0.5 });
          } else if (type === 'moon') {
            this.setSliders({ r: 2.5, omega: 1.8, m: 1.2 });
          }
        });
      });

      // Window resize
      window.addEventListener('resize', () => {
        this.renderAll();
      });
    }

    setSliders(values) {
      for (const [k, v] of Object.entries(values)) {
        this.params[k] = v;
        const input = this.container.querySelector(`[data-ctrl="${k}"]`);
        const disp = this.container.querySelector(`[data-disp="${k}"]`);
        if (input) input.value = v;
        if (disp) disp.textContent = `${v.toFixed(1)} ${k === 'r' ? 'm' : k === 'omega' ? 'rad/s' : 'kg'}`;
      }
      this.renderAll();
    }

    setupObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            this.inView = entry.isIntersecting;
          });
        }, { threshold: 0.1 });
        this.observer.observe(this.container);
      } else {
        this.inView = true;
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.tabHidden = true;
        } else {
          this.tabHidden = false;
          this.lastTimestamp = performance.now();
        }
      });
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || this.tabHidden) {
          this.lastTimestamp = now;
          return;
        }

        const dt = Math.min((now - this.lastTimestamp) / 1000, 0.1);
        this.lastTimestamp = now;
        this.update(dt);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    update(dt) {
      this.state.t += dt;
      this.state.theta += this.params.omega * dt;
      if (this.state.theta > TWO_PI * 100) {
        this.state.theta %= TWO_PI;
      }

      const x = this.params.r * Math.cos(this.state.theta);
      const y = this.params.r * Math.sin(this.state.theta);

      // Trail
      if (this.params.showTrail) {
        this.state.trail.push({ x, y, alpha: 1.0 });
        if (this.state.trail.length > 50) this.state.trail.shift();
      }

      // History for oscilloscope (max 200 pts)
      this.state.historyX.push({ t: this.state.t, val: x });
      this.state.historyY.push({ t: this.state.t, val: y });
      if (this.state.historyX.length > 180) {
        this.state.historyX.shift();
        this.state.historyY.shift();
      }

      // Update stats readout
      const v = this.params.omega * this.params.r;
      const a = (this.params.omega ** 2) * this.params.r;
      const F = this.params.m * a;
      const T = TWO_PI / this.params.omega;
      const f = 1 / T;

      const c = this.container;
      const valV = c.querySelector('[data-val="v"]');
      const valA = c.querySelector('[data-val="a"]');
      const valF = c.querySelector('[data-val="F"]');
      const valT = c.querySelector('[data-val="T"]');
      const valFreq = c.querySelector('[data-val="f"]');
      const valTime = c.querySelector('[data-val="t"]');

      if (valV) valV.textContent = `${formatNum(v, 2)} m/s`;
      if (valA) valA.textContent = `${formatNum(a, 2)} m/s²`;
      if (valF) valF.textContent = `${formatNum(F, 2)} N`;
      if (valT) valT.textContent = `${formatNum(T, 2)} s`;
      if (valFreq) valFreq.textContent = `${formatNum(f, 2)} Hz`;
      if (valTime) valTime.textContent = `${formatNum(this.state.t, 2)} s`;
    }

    renderAll() {
      this.renderSimulation();
      this.renderGraph();
    }

    renderSimulation() {
      const rect = this.canvasSim.getBoundingClientRect();
      const width = rect.width || 400;
      const height = rect.height || 320;
      const { ctx } = setupCanvasDPI(this.canvasSim, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const maxR = Math.min(width, height) * 0.42;
      const scale = maxR / 3.0; // 3.0m fits maxR
      const pixR = this.params.r * scale;

      // Coordinate axes
      if (this.params.showGrid) {
        ctx.strokeStyle = theme.grid;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, cy); ctx.lineTo(width, cy);
        ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
        ctx.stroke();

        ctx.fillStyle = theme.textMuted;
        ctx.font = '10px monospace';
        ctx.fillText('+x', width - 20, cy - 6);
        ctx.fillText('+y', cx + 6, 16);
        ctx.fillText('O', cx - 12, cy + 14);
      }

      // Circular trajectory path
      ctx.beginPath();
      ctx.arc(cx, cy, pixR, 0, TWO_PI);
      ctx.strokeStyle = theme.dark ? 'rgba(59, 130, 246, 0.35)' : 'rgba(59, 130, 246, 0.45)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Trail
      if (this.params.showTrail && this.state.trail.length > 1) {
        for (let i = 1; i < this.state.trail.length; i++) {
          const pt1 = this.state.trail[i - 1];
          const pt2 = this.state.trail[i];
          const alpha = i / this.state.trail.length;
          ctx.beginPath();
          ctx.moveTo(cx + pt1.x * scale, cy - pt1.y * scale);
          ctx.lineTo(cx + pt2.x * scale, cy - pt2.y * scale);
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.5})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }

      // Position of object
      const objX = cx + this.params.r * scale * Math.cos(this.state.theta);
      const objY = cy - this.params.r * scale * Math.sin(this.state.theta); // -y because canvas y is down

      // Radius line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(objX, objY);
      ctx.strokeStyle = theme.dark ? '#64748b' : '#94a3b8';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Radius text
      const midRx = (cx + objX) / 2;
      const midRy = (cy + objY) / 2;
      ctx.fillStyle = theme.textMuted;
      ctx.font = '11px sans-serif';
      ctx.fillText(`r=${this.params.r.toFixed(1)}m`, midRx + 5, midRy - 5);

      // Center pivot point
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, TWO_PI);
      ctx.fillStyle = theme.primary;
      ctx.fill();

      // Vectors:
      // Tangent velocity vector v
      if (this.params.showV) {
        const v = this.params.omega * this.params.r;
        const vScale = 18; // px per m/s
        const vLen = clamp(v * vScale, 20, 90);
        // Tangent direction is theta + 90 deg (counter-clockwise)
        const vx = -Math.sin(this.state.theta);
        const vy = Math.cos(this.state.theta); // Note math y is up, canvas y is -y
        drawArrow(ctx, objX, objY, objX + vx * vLen, objY - vy * vLen, theme.emerald, 2.5);
        ctx.fillStyle = theme.emerald;
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('v', objX + vx * vLen + 6, objY - vy * vLen + 4);
      }

      // Centripetal acceleration vector a_ht (towards center)
      if (this.params.showA) {
        const a = (this.params.omega ** 2) * this.params.r;
        const aScale = 3.5;
        const aLen = clamp(a * aScale, 18, pixR * 0.85);
        const ax = -Math.cos(this.state.theta);
        const ay = -Math.sin(this.state.theta);
        drawArrow(ctx, objX, objY, objX + ax * aLen, objY - ay * aLen, theme.rose, 2.5);
        ctx.fillStyle = theme.rose;
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('a_ht', objX + ax * aLen - 12, objY - ay * aLen - 6);
      }

      // Centripetal force vector F_ht
      if (this.params.showF) {
        const F = this.params.m * (this.params.omega ** 2) * this.params.r;
        const fScale = 4.0;
        const fLen = clamp(F * fScale, 16, pixR * 0.65);
        const fx = -Math.cos(this.state.theta);
        const fy = -Math.sin(this.state.theta);
        drawArrow(ctx, objX, objY, objX + fx * fLen, objY - fy * fLen, theme.amber, 2.0);
        ctx.fillStyle = theme.amber;
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('F_ht', objX + fx * fLen - 10, objY - fy * fLen + 14);
      }

      // Rotating mass object
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.25)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 3;
      ctx.beginPath();
      const objRadius = 8 + this.params.m * 4;
      ctx.arc(objX, objY, objRadius, 0, TWO_PI);
      const grad = ctx.createRadialGradient(objX - 3, objY - 3, 1, objX, objY, objRadius);
      grad.addColorStop(0, '#60a5fa');
      grad.addColorStop(1, '#1d4ed8');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();

      // Mass label
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${this.params.m}kg`, objX, objY);
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 300;
      const height = rect.height || 160;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const midY = height / 2;
      const padLeft = 32;
      const padRight = 10;
      const plotWidth = width - padLeft - padRight;

      // Axes & grid
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padLeft, midY); ctx.lineTo(width - padRight, midY);
      ctx.moveTo(padLeft, 10); ctx.lineTo(padLeft, height - 10);
      ctx.stroke();

      ctx.fillStyle = theme.textMuted;
      ctx.font = '9px monospace';
      ctx.fillText(`+${this.params.r.toFixed(1)}m`, 2, 18);
      ctx.fillText('0', 16, midY + 3);
      ctx.fillText(`-${this.params.r.toFixed(1)}m`, 2, height - 12);
      ctx.fillText('t (s)', width - 25, midY - 6);

      const histX = this.state.historyX;
      if (histX.length < 2) return;

      const scaleY = (height / 2 - 20) / (this.params.r || 1);

      // Draw x(t) wave (Blue)
      ctx.beginPath();
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 2;
      for (let i = 0; i < histX.length; i++) {
        const px = padLeft + (i / (histX.length - 1)) * plotWidth;
        const py = midY - histX[i].val * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Draw y(t) wave (Purple)
      const histY = this.state.historyY;
      ctx.beginPath();
      ctx.strokeStyle = theme.purple;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 2]);
      for (let i = 0; i < histY.length; i++) {
        const px = padLeft + (i / (histY.length - 1)) * plotWidth;
        const py = midY - histY[i].val * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.observer) this.observer.disconnect();
    }
  }

  // =========================================================================
  // 2. DAO ĐỘNG ĐIỀU HÒA (SIMPLE HARMONIC MOTION & PHASOR) - LỚP 11
  // =========================================================================
  class SHMSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        A: options.A !== undefined ? options.A : 8.0,      // Biên độ A (cm)
        omega: options.omega !== undefined ? options.omega : 3.0, // Tần số góc omega (rad/s)
        phi0: options.phi0 !== undefined ? options.phi0 : 0.0,    // Pha ban đầu phi_0 (rad)
        showPhasor: true,                                  // Vòng tròn lượng giác
        showV: true,                                       // Vectơ vận tốc v
        showA: true,                                       // Vectơ gia tốc a
        curveType: 'all'                                   // 'x', 'v', 'a', or 'all'
      };

      this.state = {
        running: true,
        t: 0,
        history: []
      };

      this.lastTimestamp = 0;
      this.rafId = null;
      this.observer = null;

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header Bar -->
          <div class="px-5 py-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center font-black text-sm">
                <i class="fa-solid fa-wave-square"></i>
              </span>
              <div>
                <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Dao Động Điều Hòa & Vòng Tròn Pha</h3>
                <p class="text-xs text-indigo-100/80">Vật Lí 11 • Chương 1 (Bài 1, 2 & 3 SGK)</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <!-- Simulation Grid: Phasor + Linear Motion + Graphs -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Animation Canvas: Dual View Phasor & Linear Oscillation (6 cols) -->
            <div class="lg:col-span-6 p-4 bg-slate-50/50 dark:bg-slate-950/40 relative flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 min-h-[350px]">
              <div class="w-full flex items-center justify-between mb-2 px-2">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
                  <i class="fa-solid fa-circle-notch text-indigo-600"></i> Vòng Tròn Lượng Giác & Hình Chiếu Ox
                </span>
                <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900" data-val="phase">
                  Φ = 0.00 rad
                </span>
              </div>
              <canvas class="sim-canvas block rounded-xl shadow-inner w-full h-[300px] sm:h-[320px]"></canvas>

              <!-- Legend -->
              <div class="mt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-600 dark:text-slate-400">
                <span class="flex items-center gap-1"><span class="w-2.5 h-0.5 bg-blue-500"></span> Li độ $x$ (cm)</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-0.5 bg-emerald-500"></span> Vận tốc $\\vec{v}$</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-0.5 bg-rose-500"></span> Gia tốc $\\vec{a}$</span>
              </div>
            </div>

            <!-- Oscilloscope Graphs (6 cols) -->
            <div class="lg:col-span-6 p-4 flex flex-col justify-between bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-line text-purple-600"></i> Đồ Thị Li Độ, Vận Tốc & Gia Tốc
                </div>
                <div class="flex items-center gap-1">
                  <button data-graph="all" class="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">Tất cả</button>
                  <button data-graph="x" class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600">x(t)</button>
                  <button data-graph="v" class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600">v(t)</button>
                  <button data-graph="a" class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-rose-600">a(t)</button>
                </div>
              </div>

              <canvas class="graph-canvas block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-full h-[180px] sm:h-[190px]"></canvas>

              <!-- Values readout -->
              <div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div class="p-2 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40">
                  <div class="text-[10px] text-blue-700 dark:text-blue-400 font-medium">Li độ x</div>
                  <div class="font-extrabold text-sm text-blue-600 dark:text-blue-300" data-val="x">0.00 cm</div>
                </div>
                <div class="p-2 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40">
                  <div class="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium">Vận tốc v</div>
                  <div class="font-extrabold text-sm text-emerald-600 dark:text-emerald-300" data-val="v">0.00 cm/s</div>
                </div>
                <div class="p-2 rounded-xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40">
                  <div class="text-[10px] text-rose-700 dark:text-rose-400 font-medium">Gia tốc a</div>
                  <div class="font-extrabold text-sm text-rose-600 dark:text-rose-300" data-val="a">0.00 cm/s²</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Chu kỳ T</div>
                  <div class="font-bold text-xs text-slate-800 dark:text-slate-200" data-val="T">0.00 s</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls & Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-900/60 space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Slider: Biên độ A -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Biên độ (A)</label>
                  <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="A">${this.params.A.toFixed(1)} cm</span>
                </div>
                <input type="range" data-ctrl="A" min="2" max="15" step="0.5" value="${this.params.A}"
                  class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>2 cm</span><span>15 cm</span></div>
              </div>

              <!-- Slider: Tần số góc omega -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Tần số góc (ω)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="omega">${this.params.omega.toFixed(1)} rad/s</span>
                </div>
                <input type="range" data-ctrl="omega" min="1.0" max="10.0" step="0.2" value="${this.params.omega}"
                  class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>1.0 rad/s</span><span>10.0 rad/s</span></div>
              </div>

              <!-- Slider: Pha ban đầu phi0 -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Pha ban đầu (φ₀)</label>
                  <span class="font-bold text-purple-600 dark:text-purple-400" data-disp="phi0">${(this.params.phi0 * RAD_TO_DEG).toFixed(0)}°</span>
                </div>
                <input type="range" data-ctrl="phi0" min="-180" max="180" step="15" value="${(this.params.phi0 * RAD_TO_DEG).toFixed(0)}"
                  class="w-full accent-purple-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>-π (-180°)</span><span>0</span><span>+π (+180°)</span></div>
              </div>
            </div>

            <!-- Toggles & Formula Reference -->
            <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap items-center gap-4">
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showPhasor" ${this.params.showPhasor ? 'checked' : ''} class="rounded text-indigo-600 focus:ring-indigo-500">
                  <span>Hiện Vòng tròn lượng giác (Phasor)</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showV" ${this.params.showV ? 'checked' : ''} class="rounded text-emerald-600 focus:ring-emerald-500">
                  <span>Vectơ vận tốc $\\vec{v}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showA" ${this.params.showA ? 'checked' : ''} class="rounded text-rose-600 focus:ring-rose-500">
                  <span>Vectơ gia tốc $\\vec{a}$</span>
                </label>
              </div>

              <!-- Quick Presets -->
              <div class="flex items-center gap-1.5">
                <span class="text-slate-400 text-[11px]">Pha chuẩn:</span>
                <button type="button" data-preset-phi="0" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-indigo-100 hover:text-indigo-700 transition">φ = 0 (Biên +A)</button>
                <button type="button" data-preset-phi="90" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-indigo-100 hover:text-indigo-700 transition">φ = π/2 (VTCB chiều -)</button>
                <button type="button" data-preset-phi="-90" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-indigo-100 hover:text-indigo-700 transition">φ = -π/2 (VTCB chiều +)</button>
              </div>
            </div>

            <!-- Formula Box -->
            <div class="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Công thức cốt lõi:</strong> $x = A\\cos(\\omega t + \\varphi_0)$ • $v = x' = -\\omega A\\sin(\\omega t + \\varphi_0) = \\omega A\\cos(\\omega t + \\varphi_0 + \\frac{\\pi}{2})$ • $a = v' = -\\omega^2 x = \\omega^2 A\\cos(\\omega t + \\varphi_0 + \\pi)$.
              <br><span class="text-indigo-600 dark:text-indigo-400 font-medium">Nhận xét pha: $v$ vuông pha (sớm $\\frac{\\pi}{2}$) so với $x$; $a$ ngược pha (sớm $\\pi$) so với $x$.</span>
            </div>
          </div>
        </div>
      `;

      this.canvasSim = this.container.querySelector('.sim-canvas');
      this.canvasGraph = this.container.querySelector('.graph-canvas');

      if (typeof renderMathInElement === 'function') {
        renderMathInElement(this.container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    bindEvents() {
      const c = this.container;
      const toggleBtn = c.querySelector('[data-act="toggle"]');
      toggleBtn.addEventListener('click', () => {
        this.state.running = !this.state.running;
        toggleBtn.innerHTML = this.state.running
          ? '<i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>'
          : '<i class="fa-solid fa-play"></i> <span>Tiếp tục</span>';
        if (this.state.running) this.lastTimestamp = performance.now();
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.state.t = 0;
        this.state.history = [];
        this.renderAll();
      });

      // A & omega sliders
      ['A', 'omega'].forEach(k => {
        const input = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        input.addEventListener('input', (e) => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = `${this.params[k].toFixed(1)} ${k === 'A' ? 'cm' : 'rad/s'}`;
          this.renderAll();
        });
      });

      // Phi0 slider (degrees)
      const inputPhi = c.querySelector('[data-ctrl="phi0"]');
      const dispPhi = c.querySelector('[data-disp="phi0"]');
      inputPhi.addEventListener('input', (e) => {
        const deg = parseFloat(e.target.value);
        this.params.phi0 = deg * DEG_TO_RAD;
        if (dispPhi) dispPhi.textContent = `${deg.toFixed(0)}°`;
        this.renderAll();
      });

      // Toggles
      ['showPhasor', 'showV', 'showA'].forEach(k => {
        const chk = c.querySelector(`[data-ctrl="${k}"]`);
        chk.addEventListener('change', (e) => {
          this.params[k] = e.target.checked;
          this.renderAll();
        });
      });

      // Graph mode buttons
      c.querySelectorAll('[data-graph]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-graph]').forEach(b => {
            b.classList.remove('bg-indigo-100', 'dark:bg-indigo-900', 'text-indigo-700', 'dark:text-indigo-300');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-400');
          });
          btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-400');
          btn.classList.add('bg-indigo-100', 'dark:bg-indigo-900', 'text-indigo-700', 'dark:text-indigo-300');
          this.params.curveType = btn.dataset.graph;
          this.renderGraph();
        });
      });

      // Preset phi buttons
      c.querySelectorAll('[data-preset-phi]').forEach(btn => {
        btn.addEventListener('click', () => {
          const deg = parseFloat(btn.dataset.presetPhi);
          this.params.phi0 = deg * DEG_TO_RAD;
          inputPhi.value = deg;
          dispPhi.textContent = `${deg.toFixed(0)}°`;
          this.renderAll();
        });
      });

      window.addEventListener('resize', () => this.renderAll());
    }

    setupObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.1 });
        this.observer.observe(this.container);
      } else {
        this.inView = true;
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.tabHidden = true;
        } else {
          this.tabHidden = false;
          this.lastTimestamp = performance.now();
        }
      });
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || this.tabHidden) {
          this.lastTimestamp = now;
          return;
        }
        const dt = Math.min((now - this.lastTimestamp) / 1000, 0.1);
        this.lastTimestamp = now;
        this.update(dt);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    update(dt) {
      this.state.t += dt;
      const phase = this.params.omega * this.state.t + this.params.phi0;
      const x = this.params.A * Math.cos(phase);
      const v = -this.params.omega * this.params.A * Math.sin(phase);
      const a = - (this.params.omega ** 2) * x;

      this.state.history.push({ t: this.state.t, x, v, a });
      if (this.state.history.length > 200) this.state.history.shift();

      const c = this.container;
      const valX = c.querySelector('[data-val="x"]');
      const valV = c.querySelector('[data-val="v"]');
      const valA = c.querySelector('[data-val="a"]');
      const valT = c.querySelector('[data-val="T"]');
      const valPhase = c.querySelector('[data-val="phase"]');

      if (valX) valX.textContent = `${formatNum(x, 2)} cm`;
      if (valV) valV.textContent = `${formatNum(v, 2)} cm/s`;
      if (valA) valA.textContent = `${formatNum(a, 2)} cm/s²`;
      if (valT) valT.textContent = `${formatNum(TWO_PI / this.params.omega, 2)} s`;
      if (valPhase) {
        const normPhase = ((phase % TWO_PI) + TWO_PI) % TWO_PI;
        valPhase.textContent = `Φ = ${normPhase.toFixed(2)} rad (${(normPhase * RAD_TO_DEG).toFixed(0)}°)`;
      }
    }

    renderAll() {
      this.renderSimulation();
      this.renderGraph();
    }

    renderSimulation() {
      const rect = this.canvasSim.getBoundingClientRect();
      const width = rect.width || 360;
      const height = rect.height || 300;
      const { ctx } = setupCanvasDPI(this.canvasSim, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      // Layout: Left/Top is Phasor circle, Bottom/Right is linear oscillation axis
      const circleCX = width * 0.45;
      const circleCY = height * 0.44;
      const maxPixR = Math.min(width * 0.38, height * 0.36);
      const scale = maxPixR / 15; // 15 cm max
      const pixA = this.params.A * scale;

      const phase = this.params.omega * this.state.t + this.params.phi0;
      const phasorX = circleCX + pixA * Math.cos(phase);
      const phasorY = circleCY - pixA * Math.sin(phase);

      // 1. Phasor circle (VTLG)
      if (this.params.showPhasor) {
        // Coordinate axes of circle
        ctx.strokeStyle = theme.grid;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(circleCX - pixA - 20, circleCY); ctx.lineTo(circleCX + pixA + 20, circleCY);
        ctx.moveTo(circleCX, circleCY - pixA - 20); ctx.lineTo(circleCX, circleCY + pixA + 20);
        ctx.stroke();

        // Circle perimeter
        ctx.beginPath();
        ctx.arc(circleCX, circleCY, pixA, 0, TWO_PI);
        ctx.strokeStyle = theme.dark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Rotating Phasor Vector (from center to point)
        drawArrow(ctx, circleCX, circleCY, phasorX, phasorY, theme.purple, 2.5);

        // Rotating point on circle
        ctx.beginPath();
        ctx.arc(phasorX, phasorY, 6, 0, TWO_PI);
        ctx.fillStyle = theme.purple;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label Phasor
        ctx.fillStyle = theme.purple;
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('M(t)', phasorX + 8, phasorY - 6);
      }

      // 2. Linear Oscillation Axis (Ox)
      const axisY = height * 0.88;
      const leftLimit = circleCX - pixA;
      const rightLimit = circleCX + pixA;

      // Axis line
      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(circleCX - maxPixR - 25, axisY);
      ctx.lineTo(circleCX + maxPixR + 35, axisY);
      ctx.stroke();

      // Axis arrow
      drawArrow(ctx, circleCX + maxPixR + 20, axisY, circleCX + maxPixR + 35, axisY, theme.axis, 2, 7);
      ctx.fillStyle = theme.textMuted;
      ctx.font = '10px monospace';
      ctx.fillText('x (cm)', circleCX + maxPixR + 25, axisY - 8);

      // Marks: -A, 0, +A
      const drawMark = (x, label) => {
        ctx.beginPath();
        ctx.moveTo(x, axisY - 5); ctx.lineTo(x, axisY + 5);
        ctx.strokeStyle = theme.axis;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = theme.textMuted;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, axisY + 16);
      };
      drawMark(circleCX, '0');
      drawMark(leftLimit, `-${this.params.A} (cm)`);
      drawMark(rightLimit, `+${this.params.A} (cm)`);

      // 3. Projection dashed line from Phasor M(t) down to axis
      const oscX = circleCX + (this.params.A * scale) * Math.cos(phase);
      ctx.save();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = theme.dark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(phasorX, phasorY);
      ctx.lineTo(oscX, axisY);
      ctx.stroke();
      ctx.restore();

      // 4. Oscillating Mass on axis
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 6;
      ctx.shadowOffsetY = 2;
      ctx.beginPath();
      ctx.arc(oscX, axisY, 9, 0, TWO_PI);
      const grad = ctx.createRadialGradient(oscX - 2, axisY - 2, 1, oscX, axisY, 9);
      grad.addColorStop(0, '#60a5fa');
      grad.addColorStop(1, '#1d4ed8');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // Vectors on mass:
      const v = -this.params.omega * this.params.A * Math.sin(phase);
      const a = -(this.params.omega ** 2) * this.params.A * Math.cos(phase);

      // Velocity vector v (Emerald)
      if (this.params.showV && Math.abs(v) > 0.1) {
        const vLen = clamp(v * 0.8, -60, 60);
        drawArrow(ctx, oscX, axisY - 14, oscX + vLen, axisY - 14, theme.emerald, 2.5);
        ctx.fillStyle = theme.emerald;
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('v', oscX + vLen + (vLen >= 0 ? 8 : -8), axisY - 12);
      }

      // Acceleration vector a (Rose)
      if (this.params.showA && Math.abs(a) > 0.5) {
        const aLen = clamp(a * 0.15, -50, 50);
        drawArrow(ctx, oscX, axisY + 24, oscX + aLen, axisY + 24, theme.rose, 2.0);
        ctx.fillStyle = theme.rose;
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('a', oscX + aLen + (aLen >= 0 ? 8 : -8), axisY + 27);
      }
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 320;
      const height = rect.height || 180;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const midY = height / 2;
      const padLeft = 36;
      const padRight = 12;
      const plotWidth = width - padLeft - padRight;

      // Axes & grid
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padLeft, midY); ctx.lineTo(width - padRight, midY);
      ctx.moveTo(padLeft, 10); ctx.lineTo(padLeft, height - 10);
      ctx.stroke();

      ctx.fillStyle = theme.textMuted;
      ctx.font = '9px monospace';
      ctx.fillText('0', 20, midY + 3);
      ctx.fillText('t (s)', width - 28, midY - 6);

      const hist = this.state.history;
      if (hist.length < 2) return;

      const scaleX = (height / 2 - 24) / (this.params.A || 1);
      const vMax = this.params.omega * this.params.A;
      const scaleV = (height / 2 - 24) / (vMax || 1);
      const aMax = (this.params.omega ** 2) * this.params.A;
      const scaleA = (height / 2 - 24) / (aMax || 1);

      const type = this.params.curveType;

      // 1. x(t) Curve (Blue)
      if (type === 'all' || type === 'x') {
        ctx.beginPath();
        ctx.strokeStyle = theme.primary;
        ctx.lineWidth = 2;
        for (let i = 0; i < hist.length; i++) {
          const px = padLeft + (i / (hist.length - 1)) * plotWidth;
          const py = midY - hist[i].x * scaleX;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // 2. v(t) Curve (Emerald)
      if (type === 'all' || type === 'v') {
        ctx.beginPath();
        ctx.strokeStyle = theme.emerald;
        ctx.lineWidth = 1.8;
        if (type === 'all') ctx.setLineDash([4, 2]);
        for (let i = 0; i < hist.length; i++) {
          const px = padLeft + (i / (hist.length - 1)) * plotWidth;
          const py = midY - hist[i].v * scaleV;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 3. a(t) Curve (Rose)
      if (type === 'all' || type === 'a') {
        ctx.beginPath();
        ctx.strokeStyle = theme.rose;
        ctx.lineWidth = 1.8;
        if (type === 'all') ctx.setLineDash([2, 2]);
        for (let i = 0; i < hist.length; i++) {
          const px = padLeft + (i / (hist.length - 1)) * plotWidth;
          const py = midY - hist[i].a * scaleA;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.observer) this.observer.disconnect();
    }
  }

  // =========================================================================
  // 3. CON LẮC LÒ XO & BẢO TOÀN CƠ NĂNG (MASS-SPRING OSCILLATOR) - LỚP 11
  // =========================================================================
  class SpringSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        m: options.m !== undefined ? options.m : 0.2,       // Khối lượng (kg)
        k: options.k !== undefined ? options.k : 50,        // Độ cứng (N/m)
        A: options.A !== undefined ? options.A : 8.0,       // Biên độ ban đầu (cm)
        gamma: options.gamma !== undefined ? options.gamma : 0.0, // Cản môi trường (damping)
        orientation: options.orientation || 'horizontal',   // 'horizontal' hoặc 'vertical'
        showV: true,
        showF: true,
        showEnergy: true
      };

      this.state = {
        running: true,
        t: 0,
        x: options.A !== undefined ? options.A : 8.0, // Li độ tức thời (cm)
        v: 0,                                         // Vận tốc (cm/s)
        historyE: []
      };

      this.lastTimestamp = 0;
      this.rafId = null;
      this.observer = null;

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header Bar -->
          <div class="px-5 py-4 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center font-black text-sm">
                <i class="fa-solid fa-gem"></i>
              </span>
              <div>
                <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Con Lắc Lò Xo & Bảo Toàn Cơ Năng</h3>
                <p class="text-xs text-emerald-100/80">Vật Lí 11 • Chương 1 (Bài 5: Năng Lượng Trong Dao Động Điều Hòa)</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <!-- Main View -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Animation View (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/50 dark:bg-slate-950/40 relative flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 min-h-[350px]">
              <div class="w-full flex items-center justify-between mb-2 px-2">
                <div class="flex items-center gap-2">
                  <button data-mode="horizontal" class="px-2.5 py-1 rounded-lg text-xs font-bold ${this.params.orientation === 'horizontal' ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'} transition">Nằm ngang</button>
                  <button data-mode="vertical" class="px-2.5 py-1 rounded-lg text-xs font-bold ${this.params.orientation === 'vertical' ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'} transition">Thẳng đứng</button>
                </div>
                <span class="text-xs font-mono text-slate-500" data-disp-vtcb>Δl₀ = 0.0 cm</span>
              </div>
              <canvas class="sim-canvas block rounded-xl shadow-inner w-full h-[300px] sm:h-[320px]"></canvas>

              <!-- Live Energy Meters Overlay -->
              <div class="w-full max-w-[420px] mt-3 p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-1.5 text-xs">
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-emerald-600 dark:text-emerald-400">Động năng (W_đ): <span data-val="Wd">0.000 J</span></span>
                  <div class="w-32 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div data-bar="Wd" class="bg-emerald-500 h-full w-0 transition-all duration-75"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-blue-600 dark:text-blue-400">Thế năng (W_t): <span data-val="Wt">0.000 J</span></span>
                  <div class="w-32 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div data-bar="Wt" class="bg-blue-500 h-full w-0 transition-all duration-75"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-800 dark:text-slate-200">Cơ năng toàn phần (W): <span data-val="W">0.000 J</span></span>
                  <div class="w-32 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div data-bar="W" class="bg-amber-500 h-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Energy & Motion Graph (5 cols) -->
            <div class="lg:col-span-5 p-4 flex flex-col justify-between bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-area text-emerald-600"></i> Đồ Thị Cơ Năng Theo Thời Gian
                </div>
                <div class="flex items-center gap-2 text-[11px]">
                  <span class="text-emerald-600 font-semibold">W_đ</span>
                  <span class="text-blue-600 font-semibold">W_t</span>
                  <span class="text-amber-600 font-bold">W (bảo toàn)</span>
                </div>
              </div>

              <canvas class="graph-canvas block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-full h-[180px] sm:h-[200px]"></canvas>

              <!-- Values Grid -->
              <div class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Li độ x</div>
                  <div class="font-extrabold text-sm text-blue-600 dark:text-blue-400" data-val="x">0.00 cm</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Vận tốc v</div>
                  <div class="font-extrabold text-sm text-emerald-600 dark:text-emerald-400" data-val="v">0.00 cm/s</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Lực kéo về F</div>
                  <div class="font-extrabold text-sm text-amber-600 dark:text-amber-400" data-val="F">0.00 N</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Chu kỳ T</div>
                  <div class="font-bold text-xs text-slate-800 dark:text-slate-200" data-val="T">0.00 s</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Tần số góc ω</div>
                  <div class="font-bold text-xs text-indigo-600 dark:text-indigo-400" data-val="omega">0.00 rad/s</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Cơ năng W</div>
                  <div class="font-bold text-xs text-rose-600 dark:text-rose-400" data-val="W_total">0.000 J</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls & Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-900/60 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Slider: Khối lượng m -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Khối lượng (m)</label>
                  <span class="font-bold text-emerald-600 dark:text-emerald-400" data-disp="m">${this.params.m.toFixed(2)} kg</span>
                </div>
                <input type="range" data-ctrl="m" min="0.05" max="1.0" step="0.05" value="${this.params.m}"
                  class="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>50 g</span><span>1000 g</span></div>
              </div>

              <!-- Slider: Độ cứng k -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Độ cứng lò xo (k)</label>
                  <span class="font-bold text-teal-600 dark:text-teal-400" data-disp="k">${this.params.k} N/m</span>
                </div>
                <input type="range" data-ctrl="k" min="10" max="200" step="5" value="${this.params.k}"
                  class="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>10 N/m</span><span>200 N/m</span></div>
              </div>

              <!-- Slider: Biên độ A -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Biên độ ban đầu (A)</label>
                  <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="A">${this.params.A.toFixed(1)} cm</span>
                </div>
                <input type="range" data-ctrl="A" min="2" max="12" step="0.5" value="${this.params.A}"
                  class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>2 cm</span><span>12 cm</span></div>
              </div>

              <!-- Slider: Cản môi trường gamma -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Cản môi trường (γ)</label>
                  <span class="font-bold text-amber-600 dark:text-amber-400" data-disp="gamma">${this.params.gamma.toFixed(2)}</span>
                </div>
                <input type="range" data-ctrl="gamma" min="0" max="0.4" step="0.02" value="${this.params.gamma}"
                  class="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>0 (Lý tưởng)</span><span>0.4 (Tắt dần)</span></div>
              </div>
            </div>

            <!-- Toggles & Quick Setups -->
            <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap items-center gap-4">
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showV" ${this.params.showV ? 'checked' : ''} class="rounded text-emerald-600 focus:ring-emerald-500">
                  <span>Vectơ vận tốc $\\vec{v}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showF" ${this.params.showF ? 'checked' : ''} class="rounded text-amber-600 focus:ring-amber-500">
                  <span>Vectơ lực đàn hồi / kéo về $\\vec{F}$</span>
                </label>
              </div>

              <div class="flex items-center gap-1.5">
                <span class="text-slate-400 text-[11px]">Chế độ mẫu:</span>
                <button type="button" data-preset-damp="0" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-emerald-100 hover:text-emerald-700 transition">Bảo toàn (γ = 0)</button>
                <button type="button" data-preset-damp="0.15" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-emerald-100 hover:text-emerald-700 transition">Tắt dần nhẹ</button>
                <button type="button" data-preset-damp="0.35" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-emerald-100 hover:text-emerald-700 transition">Tắt dần nhanh</button>
              </div>
            </div>

            <!-- Formula Box -->
            <div class="p-3 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Định luật bảo toàn cơ năng:</strong> $W_đ = \\frac{1}{2}m v^2$, $W_t = \\frac{1}{2}k x^2$ $\\implies W = W_đ + W_t = \\frac{1}{2}k A^2 = \\text{const}$ (khi bỏ qua ma sát).
              <br><span class="text-teal-700 dark:text-teal-300 font-medium">Khi vật đi từ biên về VTCB: Thế năng giảm, Động năng tăng; tại VTCB động năng đạt cực đại.</span>
            </div>
          </div>
        </div>
      `;

      this.canvasSim = this.container.querySelector('.sim-canvas');
      this.canvasGraph = this.container.querySelector('.graph-canvas');

      if (typeof renderMathInElement === 'function') {
        renderMathInElement(this.container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    bindEvents() {
      const c = this.container;
      const toggleBtn = c.querySelector('[data-act="toggle"]');
      toggleBtn.addEventListener('click', () => {
        this.state.running = !this.state.running;
        toggleBtn.innerHTML = this.state.running
          ? '<i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>'
          : '<i class="fa-solid fa-play"></i> <span>Tiếp tục</span>';
        if (this.state.running) this.lastTimestamp = performance.now();
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.resetState();
      });

      // Orientation buttons
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.classList.remove('bg-emerald-600', 'text-white');
            b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          btn.classList.add('bg-emerald-600', 'text-white');
          this.params.orientation = btn.dataset.mode;
          this.resetState();
        });
      });

      // Sliders
      ['m', 'k', 'A', 'gamma'].forEach(k => {
        const input = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        input.addEventListener('input', (e) => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) {
            let unit = 'kg';
            if (k === 'k') unit = 'N/m';
            else if (k === 'A') unit = 'cm';
            else if (k === 'gamma') unit = '';
            disp.textContent = `${this.params[k].toFixed(k === 'k' ? 0 : 2)} ${unit}`;
          }
          if (k === 'A') {
            this.state.x = this.params.A;
            this.state.v = 0;
          }
          this.renderAll();
        });
      });

      // Toggles
      ['showV', 'showF'].forEach(k => {
        const chk = c.querySelector(`[data-ctrl="${k}"]`);
        chk.addEventListener('change', (e) => {
          this.params[k] = e.target.checked;
          this.renderAll();
        });
      });

      // Presets
      c.querySelectorAll('[data-preset-damp]').forEach(btn => {
        btn.addEventListener('click', () => {
          const g = parseFloat(btn.dataset.presetDamp);
          this.params.gamma = g;
          const input = c.querySelector('[data-ctrl="gamma"]');
          const disp = c.querySelector('[data-disp="gamma"]');
          if (input) input.value = g;
          if (disp) disp.textContent = g.toFixed(2);
          this.resetState();
        });
      });

      window.addEventListener('resize', () => this.renderAll());
    }

    resetState() {
      this.state.t = 0;
      this.state.x = this.params.A;
      this.state.v = 0;
      this.state.historyE = [];
      this.renderAll();
    }

    setupObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.1 });
        this.observer.observe(this.container);
      } else {
        this.inView = true;
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.tabHidden = true;
        } else {
          this.tabHidden = false;
          this.lastTimestamp = performance.now();
        }
      });
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || this.tabHidden) {
          this.lastTimestamp = now;
          return;
        }
        const dt = Math.min((now - this.lastTimestamp) / 1000, 0.05);
        this.lastTimestamp = now;
        this.update(dt);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    update(dt) {
      // Integration of Mass-Spring system (SI units: m, m/s, m/s^2, then converted to cm)
      const omega0_sq = this.params.k / this.params.m;
      const subSteps = 10;
      const subDt = dt / subSteps;

      let x_m = this.state.x / 100; // to meters
      let v_m = this.state.v / 100;

      for (let s = 0; s < subSteps; s++) {
        // a = -omega0^2 * x - 2 * gamma * v
        const a_m = -omega0_sq * x_m - 2 * this.params.gamma * v_m;
        v_m += a_m * subDt;
        x_m += v_m * subDt;
      }

      this.state.x = x_m * 100;
      this.state.v = v_m * 100;
      this.state.t += dt;

      // Energy calculation
      const Wd = 0.5 * this.params.m * (v_m ** 2);
      const Wt = 0.5 * this.params.k * (x_m ** 2);
      const W_total = Wd + Wt;
      const initialMaxW = 0.5 * this.params.k * ((this.params.A / 100) ** 2);

      this.state.historyE.push({ t: this.state.t, Wd, Wt, W: W_total });
      if (this.state.historyE.length > 200) this.state.historyE.shift();

      // UI readouts
      const c = this.container;
      const omega = Math.sqrt(omega0_sq);
      const T = TWO_PI / omega;
      const F = -this.params.k * x_m;

      const valX = c.querySelector('[data-val="x"]');
      const valV = c.querySelector('[data-val="v"]');
      const valF = c.querySelector('[data-val="F"]');
      const valT = c.querySelector('[data-val="T"]');
      const valOmega = c.querySelector('[data-val="omega"]');
      const valWTotal = c.querySelector('[data-val="W_total"]');

      if (valX) valX.textContent = `${formatNum(this.state.x, 2)} cm`;
      if (valV) valV.textContent = `${formatNum(this.state.v, 2)} cm/s`;
      if (valF) valF.textContent = `${formatNum(F, 2)} N`;
      if (valT) valT.textContent = `${formatNum(T, 2)} s`;
      if (valOmega) valOmega.textContent = `${formatNum(omega, 2)} rad/s`;
      if (valWTotal) valWTotal.textContent = `${formatNum(W_total, 4)} J`;

      // Energy meters
      const valWd = c.querySelector('[data-val="Wd"]');
      const valWt = c.querySelector('[data-val="Wt"]');
      const valW = c.querySelector('[data-val="W"]');
      const barWd = c.querySelector('[data-bar="Wd"]');
      const barWt = c.querySelector('[data-bar="Wt"]');

      if (valWd) valWd.textContent = `${formatNum(Wd, 4)} J`;
      if (valWt) valWt.textContent = `${formatNum(Wt, 4)} J`;
      if (valW) valW.textContent = `${formatNum(W_total, 4)} J`;

      const denom = initialMaxW > 0 ? initialMaxW : 0.001;
      if (barWd) barWd.style.width = `${clamp((Wd / denom) * 100, 0, 100)}%`;
      if (barWt) barWt.style.width = `${clamp((Wt / denom) * 100, 0, 100)}%`;

      // Δl0 for vertical
      const dispVtcb = c.querySelector('[data-disp-vtcb]');
      if (dispVtcb) {
        if (this.params.orientation === 'vertical') {
          const deltaL0 = (this.params.m * 9.8 / this.params.k) * 100;
          dispVtcb.textContent = `Δl₀ = ${deltaL0.toFixed(1)} cm (ở VTCB)`;
        } else {
          dispVtcb.textContent = 'Mặt phẳng ngang (Δl₀ = 0)';
        }
      }
    }

    renderAll() {
      this.renderSimulation();
      this.renderGraph();
    }

    renderSimulation() {
      const rect = this.canvasSim.getBoundingClientRect();
      const width = rect.width || 380;
      const height = rect.height || 300;
      const { ctx } = setupCanvasDPI(this.canvasSim, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const isVert = this.params.orientation === 'vertical';
      const scalePix = 7.5; // px per cm
      const pixX = this.state.x * scalePix;

      if (!isVert) {
        // --- HORIZONTAL OSCILLATOR ---
        const anchorX = 40;
        const groundY = height * 0.65;
        const blockW = 34 + this.params.m * 20;
        const blockH = 34 + this.params.m * 20;
        const vtcbX = width * 0.55;
        const blockX = vtcbX + pixX;
        const blockY = groundY - blockH;

        // Wall & Ground
        ctx.fillStyle = theme.panelBg;
        ctx.fillRect(0, 0, anchorX, height);
        ctx.strokeStyle = theme.border;
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, anchorX, height);

        // Ground line
        ctx.beginPath();
        ctx.moveTo(anchorX, groundY);
        ctx.lineTo(width, groundY);
        ctx.strokeStyle = theme.axis;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Ground hatches
        ctx.strokeStyle = theme.grid;
        ctx.lineWidth = 1;
        for (let x = anchorX + 10; x < width; x += 15) {
          ctx.beginPath();
          ctx.moveTo(x, groundY);
          ctx.lineTo(x - 8, groundY + 8);
          ctx.stroke();
        }

        // Marks on ground: VTCB, -A, +A
        const pixA = this.params.A * scalePix;
        const drawMark = (x, label, col) => {
          ctx.strokeStyle = col || theme.axis;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(x, groundY - blockH - 15);
          ctx.lineTo(x, groundY + 15);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = col || theme.textMuted;
          ctx.font = '10px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(label, x, groundY + 28);
        };
        drawMark(vtcbX, 'O (VTCB)', theme.primary);
        drawMark(vtcbX - pixA, `-A`, theme.textMuted);
        drawMark(vtcbX + pixA, `+A`, theme.textMuted);

        // Draw spring from wall to block
        this.drawSpringHorizontal(ctx, anchorX, groundY - blockH / 2, blockX, groundY - blockH / 2, theme.dark ? '#94a3b8' : '#475569');

        // Draw block
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 4;
        ctx.fillStyle = theme.dark ? '#1e40af' : '#3b82f6';
        ctx.fillRect(blockX, blockY, blockW, blockH);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(blockX, blockY, blockW, blockH);
        ctx.restore();

        // Block label
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${(this.params.m * 1000).toFixed(0)}g`, blockX + blockW / 2, blockY + blockH / 2 + 4);

        // Vectors on block
        const blockCenter = blockX + blockW / 2;
        const blockMidY = blockY + blockH / 2;

        if (this.params.showV && Math.abs(this.state.v) > 0.5) {
          const vLen = clamp(this.state.v * 0.7, -65, 65);
          drawArrow(ctx, blockCenter, blockY - 10, blockCenter + vLen, blockY - 10, theme.emerald, 2.5);
          ctx.fillStyle = theme.emerald;
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText('v', blockCenter + vLen + (vLen >= 0 ? 8 : -8), blockY - 8);
        }

        if (this.params.showF && Math.abs(this.state.x) > 0.3) {
          // F_kv points opposite to displacement x
          const fLen = clamp(-this.state.x * 3.5, -60, 60);
          drawArrow(ctx, blockCenter, blockY - 24, blockCenter + fLen, blockY - 24, theme.amber, 2.0);
          ctx.fillStyle = theme.amber;
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText('F_kv', blockCenter + fLen + (fLen >= 0 ? 10 : -10), blockY - 22);
        }
      } else {
        // --- VERTICAL OSCILLATOR ---
        const anchorX = width / 2;
        const anchorY = 30;
        const deltaL0 = (this.params.m * 9.8 / this.params.k) * 100; // cm
        const vtcbY = anchorY + 110 + deltaL0 * scalePix * 0.5;
        const blockY = vtcbY + pixX;
        const blockW = 34 + this.params.m * 20;
        const blockH = 30 + this.params.m * 16;
        const blockX = anchorX - blockW / 2;

        // Ceiling
        ctx.fillStyle = theme.panelBg;
        ctx.fillRect(anchorX - 60, 0, 120, anchorY);
        ctx.strokeStyle = theme.axis;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(anchorX - 60, anchorY);
        ctx.lineTo(anchorX + 60, anchorY);
        ctx.stroke();

        // Spring
        this.drawSpringVertical(ctx, anchorX, anchorY, anchorX, blockY, theme.dark ? '#94a3b8' : '#475569');

        // Block
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 4;
        ctx.fillStyle = theme.dark ? '#0d9488' : '#14b8a6';
        ctx.fillRect(blockX, blockY, blockW, blockH);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(blockX, blockY, blockW, blockH);
        ctx.restore();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${(this.params.m * 1000).toFixed(0)}g`, anchorX, blockY + blockH / 2 + 4);

        // Axis reference line
        const refAxisX = anchorX + 65;
        ctx.strokeStyle = theme.axis;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(refAxisX, anchorY + 40);
        ctx.lineTo(refAxisX, height - 20);
        ctx.stroke();
        drawArrow(ctx, refAxisX, height - 30, refAxisX, height - 15, theme.axis, 1.5, 6);
        ctx.fillStyle = theme.textMuted;
        ctx.font = '10px monospace';
        ctx.fillText('+x', refAxisX + 8, height - 18);

        // VTCB mark
        ctx.strokeStyle = theme.primary;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(anchorX - 45, vtcbY + blockH / 2);
        ctx.lineTo(refAxisX + 15, vtcbY + blockH / 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = theme.primary;
        ctx.font = '10px sans-serif';
        ctx.fillText('VTCB (O)', refAxisX + 22, vtcbY + blockH / 2 + 4);
      }
    }

    drawSpringHorizontal(ctx, startX, startY, endX, endY, color) {
      const coils = 16;
      const width = endX - startX;
      if (width <= 10) return;

      const lead = 15;
      const springW = width - lead * 2;
      const step = springW / coils;
      const amp = 12;

      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + lead, startY);

      for (let i = 0; i < coils; i++) {
        const x1 = startX + lead + (i + 0.25) * step;
        const y1 = startY - amp;
        const x2 = startX + lead + (i + 0.75) * step;
        const y2 = startY + amp;
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }

      ctx.lineTo(endX - lead, startY);
      ctx.lineTo(endX, startY);
      ctx.stroke();
      ctx.restore();
    }

    drawSpringVertical(ctx, startX, startY, endX, endY, color) {
      const coils = 16;
      const height = endY - startY;
      if (height <= 10) return;

      const lead = 12;
      const springH = height - lead * 2;
      const step = springH / coils;
      const amp = 10;

      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX, startY + lead);

      for (let i = 0; i < coils; i++) {
        const y1 = startY + lead + (i + 0.25) * step;
        const x1 = startX - amp;
        const y2 = startY + lead + (i + 0.75) * step;
        const x2 = startX + amp;
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }

      ctx.lineTo(startX, endY - lead);
      ctx.lineTo(startX, endY);
      ctx.stroke();
      ctx.restore();
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 300;
      const height = rect.height || 180;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const padLeft = 32;
      const padRight = 10;
      const padTop = 15;
      const padBottom = 25;
      const plotWidth = width - padLeft - padRight;
      const plotHeight = height - padTop - padBottom;

      const hist = this.state.historyE;
      if (hist.length < 2) return;

      const initialMaxW = 0.5 * this.params.k * ((this.params.A / 100) ** 2);
      const maxW = Math.max(initialMaxW, 0.001) * 1.15;

      // Axes & grid
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padLeft, height - padBottom);
      ctx.lineTo(width - padRight, height - padBottom);
      ctx.moveTo(padLeft, padTop);
      ctx.lineTo(padLeft, height - padBottom);
      ctx.stroke();

      ctx.fillStyle = theme.textMuted;
      ctx.font = '9px monospace';
      ctx.fillText(`${maxW.toFixed(3)}J`, 2, padTop + 8);
      ctx.fillText('0', 20, height - padBottom);
      ctx.fillText('t (s)', width - 25, height - padBottom + 16);

      // 1. W_total (Amber horizontal/damped line)
      ctx.beginPath();
      ctx.strokeStyle = theme.amber;
      ctx.lineWidth = 2;
      for (let i = 0; i < hist.length; i++) {
        const px = padLeft + (i / (hist.length - 1)) * plotWidth;
        const py = height - padBottom - (hist[i].W / maxW) * plotHeight;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 2. W_d (Emerald curve)
      ctx.beginPath();
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < hist.length; i++) {
        const px = padLeft + (i / (hist.length - 1)) * plotWidth;
        const py = height - padBottom - (hist[i].Wd / maxW) * plotHeight;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 3. W_t (Blue curve)
      ctx.beginPath();
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < hist.length; i++) {
        const px = padLeft + (i / (hist.length - 1)) * plotWidth;
        const py = height - padBottom - (hist[i].Wt / maxW) * plotHeight;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.observer) this.observer.disconnect();
    }
  }

  // =========================================================================
  // 4. CON LẮC ĐƠN (SIMPLE PENDULUM: LÝ TƯỞNG VS PHI TUYẾN RK4) - LỚP 11
  // =========================================================================
  class PendulumSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        l: options.l !== undefined ? options.l : 1.0,        // Chiều dài dây (m)
        g: options.g !== undefined ? options.g : 9.8,        // Gia tốc trọng trường (m/s^2)
        m: options.m !== undefined ? options.m : 0.2,        // Khối lượng quả cầu (kg)
        theta0: options.theta0 !== undefined ? options.theta0 : 30.0, // Góc lệch ban đầu (độ)
        compareMode: true,                                   // So sánh góc nhỏ vs góc lớn RK4
        showP: true,                                         // Trọng lực P
        showT: true,                                         // Lực căng dây T
        showV: true                                          // Vận tốc v
      };

      this.state = {
        running: true,
        t: 0,
        theta_exact: options.theta0 !== undefined ? options.theta0 * DEG_TO_RAD : 30.0 * DEG_TO_RAD,
        omega_exact: 0,
        theta_approx: options.theta0 !== undefined ? options.theta0 * DEG_TO_RAD : 30.0 * DEG_TO_RAD,
        history: []
      };

      this.lastTimestamp = 0;
      this.rafId = null;
      this.observer = null;

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header Bar -->
          <div class="px-5 py-4 bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center font-black text-sm">
                <i class="fa-solid fa-clock"></i>
              </span>
              <div>
                <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Con Lắc Đơn: Lý Tưởng vs Phi Tuyến Góc Lớn</h3>
                <p class="text-xs text-rose-100/80">Vật Lí 11 • Phân biệt mô hình góc nhỏ (sin α ≈ α) và phương trình phi tuyến Runge-Kutta 4</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-rose-900 hover:bg-rose-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <!-- Main View -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Animation View (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/50 dark:bg-slate-950/40 relative flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 min-h-[350px]">
              <canvas class="sim-canvas block rounded-xl shadow-inner w-full max-w-[480px] h-[320px] sm:h-[350px]"></canvas>

              <!-- Legend overlay -->
              <div class="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-[11px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div class="flex items-center gap-3">
                  <span class="flex items-center gap-1 font-bold text-rose-600 dark:text-rose-400">
                    <span class="w-3 h-3 rounded-full bg-rose-500 inline-block"></span> Phi tuyến chính xác
                  </span>
                  <span class="flex items-center gap-1 font-medium text-slate-500 dark:text-slate-400">
                    <span class="w-3 h-3 rounded-full border border-dashed border-slate-500 inline-block"></span> Gần đúng góc nhỏ (sinα≈α)
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-amber-600 font-semibold">T (Dây)</span>
                  <span class="text-blue-600 font-semibold">P (Trọng lực)</span>
                  <span class="text-emerald-600 font-semibold">v (Vận tốc)</span>
                </div>
              </div>
            </div>

            <!-- Comparison Table & Waveform (5 cols) -->
            <div class="lg:col-span-5 p-4 flex flex-col justify-between bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-line text-rose-600"></i> Đồ Thị Li Độ Góc α(t)
                </div>
                <div class="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900" data-val="diff">
                  Lệch chu kỳ: +0.0%
                </div>
              </div>

              <canvas class="graph-canvas block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-full h-[170px] sm:h-[180px]"></canvas>

              <!-- Physical Rigor Comparison Table -->
              <div class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-1.5">
                  <span>Thông số so sánh</span>
                  <span class="text-slate-500">Gần đúng vs Chính xác</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 dark:text-slate-400">Chu kỳ T:</span>
                  <div class="font-mono text-right">
                    <span class="text-slate-500" data-val="T0">T₀ = 2.01s</span>
                    <span class="font-bold text-rose-600 dark:text-rose-400 ml-1.5" data-val="T_exact">T_thực = 2.05s</span>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 dark:text-slate-400">Vận tốc cực đại (v_max):</span>
                  <span class="font-bold font-mono text-emerald-600 dark:text-emerald-400" data-val="v_max">0.00 m/s</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 dark:text-slate-400">Lực căng cực đại (T_max):</span>
                  <span class="font-bold font-mono text-amber-600 dark:text-amber-400" data-val="T_max">0.00 N</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 dark:text-slate-400">Cơ năng W:</span>
                  <span class="font-bold font-mono text-indigo-600 dark:text-indigo-400" data-val="W">0.000 J</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls & Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-900/60 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Slider: Góc ban đầu theta0 -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Góc ban đầu (α₀)</label>
                  <span class="font-bold text-rose-600 dark:text-rose-400" data-disp="theta0">${this.params.theta0.toFixed(0)}°</span>
                </div>
                <input type="range" data-ctrl="theta0" min="2" max="85" step="1" value="${this.params.theta0}"
                  class="w-full accent-rose-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>2° (Góc nhỏ)</span><span>85° (Góc lớn)</span></div>
              </div>

              <!-- Slider: Chiều dài l -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Chiều dài dây (l)</label>
                  <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="l">${this.params.l.toFixed(2)} m</span>
                </div>
                <input type="range" data-ctrl="l" min="0.5" max="2.5" step="0.1" value="${this.params.l}"
                  class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>0.5 m</span><span>2.5 m</span></div>
              </div>

              <!-- Slider: Khối lượng m -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Khối lượng (m)</label>
                  <span class="font-bold text-amber-600 dark:text-amber-400" data-disp="m">${this.params.m.toFixed(2)} kg</span>
                </div>
                <input type="range" data-ctrl="m" min="0.05" max="1.0" step="0.05" value="${this.params.m}"
                  class="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>50 g</span><span>1000 g</span></div>
              </div>

              <!-- Gia tốc g (Thiên thể) -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Gia tốc trọng trường (g)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="g">${this.params.g.toFixed(2)} m/s²</span>
                </div>
                <select data-ctrl="g" class="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-rose-500">
                  <option value="9.8" selected>Trái Đất (g = 9.80 m/s²)</option>
                  <option value="1.62">Mặt Trăng (g = 1.62 m/s²)</option>
                  <option value="3.71">Sao Hỏa (g = 3.71 m/s²)</option>
                  <option value="24.79">Sao Mộc (g = 24.79 m/s²)</option>
                </select>
                <div class="text-[10px] text-slate-400">Chọn môi trường trọng lực</div>
              </div>
            </div>

            <!-- Toggles & Quick angle presets -->
            <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap items-center gap-4">
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="compareMode" ${this.params.compareMode ? 'checked' : ''} class="rounded text-rose-600 focus:ring-rose-500">
                  <span>Hiển thị cả 2 con lắc (Đối chiếu trực quan)</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showT" ${this.params.showT ? 'checked' : ''} class="rounded text-amber-600 focus:ring-amber-500">
                  <span>Lực căng dây $\\vec{T}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showP" ${this.params.showP ? 'checked' : ''} class="rounded text-blue-600 focus:ring-blue-500">
                  <span>Trọng lực $\\vec{P}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showV" ${this.params.showV ? 'checked' : ''} class="rounded text-emerald-600 focus:ring-emerald-500">
                  <span>Vận tốc $\\vec{v}$</span>
                </label>
              </div>

              <!-- Quick presets -->
              <div class="flex items-center gap-1.5">
                <span class="text-slate-400 text-[11px]">Góc thử nghiệm:</span>
                <button type="button" data-preset-ang="6" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-rose-100 hover:text-rose-700 transition">6° (Góc nhỏ - Trùng khít)</button>
                <button type="button" data-preset-ang="30" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-rose-100 hover:text-rose-700 transition">30° (Bắt đầu lệch)</button>
                <button type="button" data-preset-ang="60" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-rose-100 hover:text-rose-700 transition">60° (Lệch rõ rệt)</button>
              </div>
            </div>

            <!-- Rigorous physical note -->
            <div class="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Bản chất vật lý góc lớn:</strong> Phương trình vi phân chính xác là $\\frac{d^2\\alpha}{dt^2} + \\frac{g}{l}\\sin\\alpha = 0$.
              Khi $\\alpha_0 > 10^\\circ$, không thể coi $\\sin\\alpha \\approx \\alpha$, chu kỳ thực tế sẽ kéo dài: $T \\approx T_0(1 + \\frac{1}{4}\\sin^2\\frac{\\alpha_0}{2})$.
              Lực căng dây $T_{cd} = mg(3\\cos\\alpha - 2\\cos\\alpha_0)$ và vận tốc $v = \\sqrt{2gl(\\cos\\alpha - \\cos\\alpha_0)}$.
            </div>
          </div>
        </div>
      `;

      this.canvasSim = this.container.querySelector('.sim-canvas');
      this.canvasGraph = this.container.querySelector('.graph-canvas');

      if (typeof renderMathInElement === 'function') {
        renderMathInElement(this.container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    bindEvents() {
      const c = this.container;
      const toggleBtn = c.querySelector('[data-act="toggle"]');
      toggleBtn.addEventListener('click', () => {
        this.state.running = !this.state.running;
        toggleBtn.innerHTML = this.state.running
          ? '<i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>'
          : '<i class="fa-solid fa-play"></i> <span>Tiếp tục</span>';
        if (this.state.running) this.lastTimestamp = performance.now();
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.resetState();
      });

      // Angle slider
      const inputTheta0 = c.querySelector('[data-ctrl="theta0"]');
      const dispTheta0 = c.querySelector('[data-disp="theta0"]');
      inputTheta0.addEventListener('input', (e) => {
        const deg = parseFloat(e.target.value);
        this.params.theta0 = deg;
        if (dispTheta0) dispTheta0.textContent = `${deg.toFixed(0)}°`;
        this.resetState();
      });

      // Length & mass
      ['l', 'm'].forEach(k => {
        const input = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        input.addEventListener('input', (e) => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) disp.textContent = `${this.params[k].toFixed(2)} ${k === 'l' ? 'm' : 'kg'}`;
          this.resetState();
        });
      });

      // Gravity select
      const selectG = c.querySelector('[data-ctrl="g"]');
      const dispG = c.querySelector('[data-disp="g"]');
      selectG.addEventListener('change', (e) => {
        this.params.g = parseFloat(e.target.value);
        if (dispG) dispG.textContent = `${this.params.g.toFixed(2)} m/s²`;
        this.resetState();
      });

      // Toggles
      ['compareMode', 'showT', 'showP', 'showV'].forEach(k => {
        const chk = c.querySelector(`[data-ctrl="${k}"]`);
        chk.addEventListener('change', (e) => {
          this.params[k] = e.target.checked;
          this.renderAll();
        });
      });

      // Angle presets
      c.querySelectorAll('[data-preset-ang]').forEach(btn => {
        btn.addEventListener('click', () => {
          const ang = parseFloat(btn.dataset.presetAng);
          this.params.theta0 = ang;
          inputTheta0.value = ang;
          dispTheta0.textContent = `${ang.toFixed(0)}°`;
          this.resetState();
        });
      });

      window.addEventListener('resize', () => this.renderAll());
    }

    resetState() {
      this.state.t = 0;
      this.state.theta_exact = this.params.theta0 * DEG_TO_RAD;
      this.state.omega_exact = 0;
      this.state.theta_approx = this.params.theta0 * DEG_TO_RAD;
      this.state.history = [];
      this.renderAll();
    }

    setupObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.1 });
        this.observer.observe(this.container);
      } else {
        this.inView = true;
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.tabHidden = true;
        } else {
          this.tabHidden = false;
          this.lastTimestamp = performance.now();
        }
      });
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || this.tabHidden) {
          this.lastTimestamp = now;
          return;
        }
        const dt = Math.min((now - this.lastTimestamp) / 1000, 0.05);
        this.lastTimestamp = now;
        this.update(dt);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    update(dt) {
      // 1. Exact Non-Linear ODE integration via 4th-order Runge-Kutta (RK4)
      // d(theta)/dt = omega
      // d(omega)/dt = -(g/l) * sin(theta)
      const g_over_l = this.params.g / this.params.l;
      const subSteps = 10;
      const h = dt / subSteps;

      const f_omega = (th) => -g_over_l * Math.sin(th);

      for (let s = 0; s < subSteps; s++) {
        let th = this.state.theta_exact;
        let om = this.state.omega_exact;

        // k1
        const k1_th = om;
        const k1_om = f_omega(th);

        // k2
        const k2_th = om + 0.5 * h * k1_om;
        const k2_om = f_omega(th + 0.5 * h * k1_th);

        // k3
        const k3_th = om + 0.5 * h * k2_om;
        const k3_om = f_omega(th + 0.5 * h * k2_th);

        // k4
        const k4_th = om + h * k3_om;
        const k4_om = f_omega(th + h * k3_th);

        this.state.theta_exact += (h / 6) * (k1_th + 2 * k2_th + 2 * k3_th + k4_th);
        this.state.omega_exact += (h / 6) * (k1_om + 2 * k2_om + 2 * k3_om + k4_om);
      }

      this.state.t += dt;

      // 2. Analytical Small-Angle Approximation (sin alpha ~ alpha)
      const omega0 = Math.sqrt(g_over_l);
      this.state.theta_approx = (this.params.theta0 * DEG_TO_RAD) * Math.cos(omega0 * this.state.t);

      // Record History for wave graph
      this.state.history.push({
        t: this.state.t,
        th_exact: this.state.theta_exact * RAD_TO_DEG,
        th_approx: this.state.theta_approx * RAD_TO_DEG
      });
      if (this.state.history.length > 200) this.state.history.shift();

      // Physical values calculation
      const th0_rad = this.params.theta0 * DEG_TO_RAD;
      const th_rad = this.state.theta_exact;
      const cosDiff = Math.max(0, Math.cos(th_rad) - Math.cos(th0_rad));
      const v_exact = Math.sign(this.state.omega_exact) * Math.sqrt(2 * this.params.g * this.params.l * cosDiff);
      const v_max = Math.sqrt(2 * this.params.g * this.params.l * (1 - Math.cos(th0_rad)));
      const T_max = this.params.m * this.params.g * (3 - 2 * Math.cos(th0_rad));
      const W = this.params.m * this.params.g * this.params.l * (1 - Math.cos(th0_rad));

      // Borda period approximation for large angle
      const T0 = TWO_PI * Math.sqrt(this.params.l / this.params.g);
      const sinHalf = Math.sin(th0_rad / 2);
      const T_exact_est = T0 * (1 + 0.25 * (sinHalf ** 2) + (9 / 64) * (sinHalf ** 4));
      const pctDiff = ((T_exact_est - T0) / T0) * 100;

      // Update DOM
      const c = this.container;
      const valDiff = c.querySelector('[data-val="diff"]');
      const valT0 = c.querySelector('[data-val="T0"]');
      const valTE = c.querySelector('[data-val="T_exact"]');
      const valVMax = c.querySelector('[data-val="v_max"]');
      const valTMax = c.querySelector('[data-val="T_max"]');
      const valW = c.querySelector('[data-val="W"]');

      if (valDiff) valDiff.textContent = `Lệch chu kỳ: +${pctDiff.toFixed(1)}%`;
      if (valT0) valT0.textContent = `T₀ = ${T0.toFixed(2)}s`;
      if (valTE) valTE.textContent = `T_thực ≈ ${T_exact_est.toFixed(2)}s`;
      if (valVMax) valVMax.textContent = `${v_max.toFixed(2)} m/s`;
      if (valTMax) valTMax.textContent = `${T_max.toFixed(2)} N`;
      if (valW) valW.textContent = `${W.toFixed(3)} J`;
    }

    renderAll() {
      this.renderSimulation();
      this.renderGraph();
    }

    renderSimulation() {
      const rect = this.canvasSim.getBoundingClientRect();
      const width = rect.width || 400;
      const height = rect.height || 330;
      const { ctx } = setupCanvasDPI(this.canvasSim, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const pivotX = width / 2;
      const pivotY = 35;
      const maxL = height * 0.72;
      const pixL = (this.params.l / 2.5) * maxL;

      // Pivot support ceiling
      ctx.fillStyle = theme.panelBg;
      ctx.fillRect(pivotX - 50, 0, 100, pivotY);
      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pivotX - 50, pivotY);
      ctx.lineTo(pivotX + 50, pivotY);
      ctx.stroke();

      // Vertical reference dashed line (VTCB)
      ctx.save();
      ctx.strokeStyle = theme.grid;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(pivotX, pivotY + pixL + 30);
      ctx.stroke();
      ctx.restore();

      // Angle arc guide
      ctx.beginPath();
      ctx.arc(pivotX, pivotY, 35, Math.PI / 2 - Math.abs(this.state.theta_exact), Math.PI / 2 + Math.abs(this.state.theta_exact));
      ctx.strokeStyle = theme.dark ? 'rgba(244, 63, 94, 0.3)' : 'rgba(244, 63, 94, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Angle arc label
      ctx.fillStyle = theme.textMuted;
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`α = ${(this.state.theta_exact * RAD_TO_DEG).toFixed(1)}°`, pivotX, pivotY + 52);

      // --- 1. GHOST PENDULUM (Small-Angle Approximation) ---
      if (this.params.compareMode) {
        const th_app = this.state.theta_approx;
        const ghostX = pivotX + pixL * Math.sin(th_app);
        const ghostY = pivotY + pixL * Math.cos(th_app);

        // String
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = theme.dark ? 'rgba(148, 163, 184, 0.5)' : 'rgba(100, 116, 139, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(pivotX, pivotY);
        ctx.lineTo(ghostX, ghostY);
        ctx.stroke();

        // Bob
        ctx.beginPath();
        ctx.arc(ghostX, ghostY, 12, 0, TWO_PI);
        ctx.strokeStyle = theme.dark ? 'rgba(148, 163, 184, 0.7)' : 'rgba(100, 116, 139, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = theme.dark ? 'rgba(148, 163, 184, 0.15)' : 'rgba(100, 116, 139, 0.15)';
        ctx.fill();
        ctx.restore();
      }

      // --- 2. EXACT NON-LINEAR PENDULUM ---
      const th_ex = this.state.theta_exact;
      const bobX = pivotX + pixL * Math.sin(th_ex);
      const bobY = pivotY + pixL * Math.cos(th_ex);

      // String
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(bobX, bobY);
      ctx.strokeStyle = theme.dark ? '#e2e8f0' : '#334155';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Pivot pin
      ctx.beginPath();
      ctx.arc(pivotX, pivotY, 4, 0, TWO_PI);
      ctx.fillStyle = theme.rose;
      ctx.fill();

      // Vectors:
      // Gravitational force P (Blue - Straight down)
      if (this.params.showP) {
        const pLen = clamp(this.params.m * this.params.g * 8, 25, 75);
        drawArrow(ctx, bobX, bobY, bobX, bobY + pLen, theme.primary, 2.0);
        ctx.fillStyle = theme.primary;
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('P', bobX + 6, bobY + pLen);
      }

      // Tension force T (Amber - along string towards pivot)
      if (this.params.showT) {
        const th0_rad = this.params.theta0 * DEG_TO_RAD;
        const T_val = this.params.m * this.params.g * (3 * Math.cos(th_ex) - 2 * Math.cos(th0_rad));
        const tLen = clamp(T_val * 6.5, 20, 85);
        const tx = -Math.sin(th_ex) * tLen;
        const ty = -Math.cos(th_ex) * tLen;
        drawArrow(ctx, bobX, bobY, bobX + tx, bobY + ty, theme.amber, 2.5);
        ctx.fillStyle = theme.amber;
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('T', bobX + tx - 8, bobY + ty - 6);
      }

      // Tangential velocity vector v (Emerald - perpendicular to string)
      if (this.params.showV && Math.abs(this.state.omega_exact) > 0.05) {
        const vLen = clamp(this.state.omega_exact * this.params.l * 28, -65, 65);
        const vx = Math.cos(th_ex) * vLen;
        const vy = -Math.sin(th_ex) * vLen;
        drawArrow(ctx, bobX, bobY, bobX + vx, bobY + vy, theme.emerald, 2.0);
        ctx.fillStyle = theme.emerald;
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('v', bobX + vx + (vx >= 0 ? 8 : -8), bobY + vy + 4);
      }

      // Exact Pendulum Bob
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 3;
      ctx.beginPath();
      const bobRadius = 10 + this.params.m * 6;
      ctx.arc(bobX, bobY, bobRadius, 0, TWO_PI);
      const grad = ctx.createRadialGradient(bobX - 3, bobY - 3, 1, bobX, bobY, bobRadius);
      grad.addColorStop(0, '#fb7185');
      grad.addColorStop(1, '#e11d48');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${(this.params.m * 1000).toFixed(0)}g`, bobX, bobY);
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 300;
      const height = rect.height || 170;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const midY = height / 2;
      const padLeft = 34;
      const padRight = 10;
      const plotWidth = width - padLeft - padRight;

      // Axes & grid
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padLeft, midY); ctx.lineTo(width - padRight, midY);
      ctx.moveTo(padLeft, 10); ctx.lineTo(padLeft, height - 10);
      ctx.stroke();

      ctx.fillStyle = theme.textMuted;
      ctx.font = '9px monospace';
      ctx.fillText(`+${this.params.theta0.toFixed(0)}°`, 2, 18);
      ctx.fillText('0', 20, midY + 3);
      ctx.fillText(`-${this.params.theta0.toFixed(0)}°`, 2, height - 12);
      ctx.fillText('t (s)', width - 25, midY - 6);

      const hist = this.state.history;
      if (hist.length < 2) return;

      const scaleY = (height / 2 - 20) / (this.params.theta0 || 1);

      // 1. Ghost small-angle approx curve (Dashed gray)
      if (this.params.compareMode) {
        ctx.beginPath();
        ctx.strokeStyle = theme.dark ? 'rgba(148, 163, 184, 0.7)' : 'rgba(100, 116, 139, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        for (let i = 0; i < hist.length; i++) {
          const px = padLeft + (i / (hist.length - 1)) * plotWidth;
          const py = midY - hist[i].th_approx * scaleY;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 2. Exact RK4 curve (Solid Rose)
      ctx.beginPath();
      ctx.strokeStyle = theme.rose;
      ctx.lineWidth = 2;
      for (let i = 0; i < hist.length; i++) {
        const px = padLeft + (i / (hist.length - 1)) * plotWidth;
        const py = midY - hist[i].th_exact * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.observer) this.observer.disconnect();
    }
  }

  // =========================================================================
  // 5. SÓNG CƠ: SÓNG NGANG, SÓNG DỌC & LAN TRUYỀN PHA - LỚP 11/12
  // =========================================================================
  class WaveSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        A: options.A !== undefined ? options.A : 3.0,        // Biên độ sóng (cm)
        f: options.f !== undefined ? options.f : 1.5,        // Tần số sóng (Hz)
        v: options.v !== undefined ? options.v : 4.0,        // Tốc độ truyền sóng (m/s)
        waveType: options.waveType || 'transverse',          // 'transverse' (ngang) hoặc 'longitudinal' (dọc)
        probeX1: 1.0,                                       // Điểm khảo sát M1 (m)
        probeX2: 2.5,                                       // Điểm khảo sát M2 (m)
        showVeloVector: true,
        showLambdaRuler: true
      };

      this.state = {
        running: true,
        t: 0,
        historyM1: [],
        historyM2: []
      };

      this.lastTimestamp = 0;
      this.rafId = null;
      this.observer = null;

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header Bar -->
          <div class="px-5 py-4 bg-gradient-to-r from-sky-700 via-cyan-700 to-sky-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center font-black text-sm">
                <i class="fa-solid fa-water"></i>
              </span>
              <div>
                <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng Sóng Cơ: Sóng Ngang, Sóng Dọc & Sự Lan Truyền Năng Lượng</h3>
                <p class="text-xs text-sky-100/80">Vật Lí 11 • Chương 2 (Bài 8 & 9 SGK) • Khảo sát li độ u(x, t) và độ lệch pha Δφ</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-sky-900 hover:bg-sky-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <!-- Main Simulation View -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Animation View (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/50 dark:bg-slate-950/40 relative flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 min-h-[350px]">
              <div class="w-full flex items-center justify-between mb-2 px-2">
                <div class="flex items-center gap-2">
                  <button data-type="transverse" class="px-2.5 py-1 rounded-lg text-xs font-bold ${this.params.waveType === 'transverse' ? 'bg-sky-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'} transition">Sóng ngang (Sợi dây)</button>
                  <button data-type="longitudinal" class="px-2.5 py-1 rounded-lg text-xs font-bold ${this.params.waveType === 'longitudinal' ? 'bg-sky-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'} transition">Sóng dọc (Nén - Dãn)</button>
                </div>
                <span class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400" data-disp-lambda>λ = 2.67 m</span>
              </div>

              <canvas class="sim-canvas block rounded-xl shadow-inner w-full h-[290px] sm:h-[310px]"></canvas>

              <!-- Educational Legend -->
              <div class="mt-2 w-full flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-400 px-2">
                <div class="flex items-center gap-3">
                  <span class="flex items-center gap-1 font-semibold text-rose-600 dark:text-rose-400">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> Điểm M₁ (x₁=1.0m)
                  </span>
                  <span class="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Điểm M₂ (x₂=2.5m)
                  </span>
                </div>
                <span class="text-emerald-600 dark:text-emerald-400 font-medium">
                  <i class="fa-solid fa-arrow-right"></i> Chiều truyền sóng v
                </span>
              </div>
            </div>

            <!-- Oscilloscope Graphs: u(t) at M1 & M2 (5 cols) -->
            <div class="lg:col-span-5 p-4 flex flex-col justify-between bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-line text-sky-600"></i> Dao Động Phần Tử u(t) Tại M₁ & M₂
                </div>
                <div class="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-900" data-val="deltaphi">
                  Δφ = 0.00 rad
                </div>
              </div>

              <canvas class="graph-canvas block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-full h-[170px] sm:h-[180px]"></canvas>

              <!-- Wave metrics grid -->
              <div class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Bước sóng λ</div>
                  <div class="font-extrabold text-sm text-sky-600 dark:text-sky-400" data-val="lambda">0.00 m</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Chu kỳ T</div>
                  <div class="font-extrabold text-sm text-indigo-600 dark:text-indigo-400" data-val="T">0.00 s</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Tốc độ sóng v</div>
                  <div class="font-extrabold text-sm text-emerald-600 dark:text-emerald-400" data-val="v">0.00 m/s</div>
                </div>
                <div class="p-2 rounded-xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40">
                  <div class="text-[10px] text-rose-700 dark:text-rose-400 font-medium">Li độ u(M₁)</div>
                  <div class="font-bold text-xs text-rose-600 dark:text-rose-300" data-val="u1">0.00 cm</div>
                </div>
                <div class="p-2 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40">
                  <div class="text-[10px] text-amber-700 dark:text-amber-400 font-medium">Li độ u(M₂)</div>
                  <div class="font-bold text-xs text-amber-600 dark:text-amber-300" data-val="u2">0.00 cm</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Trạng thái pha</div>
                  <div class="font-bold text-xs text-purple-600 dark:text-purple-400" data-val="phase_status">Lệch pha</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls & Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-900/60 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Slider: Biên độ A -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Biên độ sóng (A)</label>
                  <span class="font-bold text-sky-600 dark:text-sky-400" data-disp="A">${this.params.A.toFixed(1)} cm</span>
                </div>
                <input type="range" data-ctrl="A" min="1.0" max="5.0" step="0.5" value="${this.params.A}"
                  class="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>1.0 cm</span><span>5.0 cm</span></div>
              </div>

              <!-- Slider: Tần số f -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Tần số (f)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="f">${this.params.f.toFixed(2)} Hz</span>
                </div>
                <input type="range" data-ctrl="f" min="0.5" max="4.0" step="0.25" value="${this.params.f}"
                  class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>0.5 Hz</span><span>4.0 Hz</span></div>
              </div>

              <!-- Slider: Vận tốc truyền v -->
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Tốc độ truyền (v)</label>
                  <span class="font-bold text-emerald-600 dark:text-emerald-400" data-disp="v">${this.params.v.toFixed(1)} m/s</span>
                </div>
                <input type="range" data-ctrl="v" min="1.0" max="8.0" step="0.5" value="${this.params.v}"
                  class="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>1.0 m/s</span><span>8.0 m/s</span></div>
              </div>
            </div>

            <!-- Toggles & Points Adjustment -->
            <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap items-center gap-4">
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showVeloVector" ${this.params.showVeloVector ? 'checked' : ''} class="rounded text-emerald-600 focus:ring-emerald-500">
                  <span>Vectơ vận tốc phần tử môi trường $\\vec{v}_{pt}$</span>
                </label>
                <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input type="checkbox" data-ctrl="showLambdaRuler" ${this.params.showLambdaRuler ? 'checked' : ''} class="rounded text-sky-600 focus:ring-sky-500">
                  <span>Thước đo bước sóng $\\lambda$</span>
                </label>
              </div>

              <!-- Distance presets for M1 & M2 -->
              <div class="flex items-center gap-1.5">
                <span class="text-slate-400 text-[11px]">Khoảng cách M₁-M₂:</span>
                <button type="button" data-preset-dist="cung_pha" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-sky-100 hover:text-sky-700 transition">Cùng pha (d = λ)</button>
                <button type="button" data-preset-dist="nguoc_pha" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-sky-100 hover:text-sky-700 transition">Ngược pha (d = λ/2)</button>
                <button type="button" data-preset-dist="vuong_pha" class="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] hover:bg-sky-100 hover:text-sky-700 transition">Vuông pha (d = λ/4)</button>
              </div>
            </div>

            <!-- Formula Box -->
            <div class="p-3 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-900/50 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Công thức cốt lõi SGK:</strong> Bước sóng $\\lambda = \\frac{v}{f} = v \\cdot T$ • Phương trình sóng tại $M(x)$: $u(x, t) = A\\cos\\left(2\\pi ft - \\frac{2\\pi x}{\\lambda}\\right)$.
              <br><span class="text-sky-700 dark:text-sky-300 font-medium">Bản chất: Phần tử môi trường chỉ dao động tại chỗ quanh VTCB, chỉ có năng lượng và pha sóng truyền đi dọc theo môi trường!</span>
            </div>
          </div>
        </div>
      `;

      this.canvasSim = this.container.querySelector('.sim-canvas');
      this.canvasGraph = this.container.querySelector('.graph-canvas');

      if (typeof renderMathInElement === 'function') {
        renderMathInElement(this.container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    bindEvents() {
      const c = this.container;
      const toggleBtn = c.querySelector('[data-act="toggle"]');
      toggleBtn.addEventListener('click', () => {
        this.state.running = !this.state.running;
        toggleBtn.innerHTML = this.state.running
          ? '<i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>'
          : '<i class="fa-solid fa-play"></i> <span>Tiếp tục</span>';
        if (this.state.running) this.lastTimestamp = performance.now();
      });

      c.querySelector('[data-act="reset"]').addEventListener('click', () => {
        this.state.t = 0;
        this.state.historyM1 = [];
        this.state.historyM2 = [];
        this.renderAll();
      });

      // Wave type buttons
      c.querySelectorAll('[data-type]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-type]').forEach(b => {
            b.classList.remove('bg-sky-600', 'text-white');
            b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          btn.classList.add('bg-sky-600', 'text-white');
          this.params.waveType = btn.dataset.type;
          this.renderAll();
        });
      });

      // Sliders
      ['A', 'f', 'v'].forEach(k => {
        const input = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        input.addEventListener('input', (e) => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) {
            const unit = k === 'A' ? 'cm' : k === 'f' ? 'Hz' : 'm/s';
            disp.textContent = `${this.params[k].toFixed(k === 'f' ? 2 : 1)} ${unit}`;
          }
          this.renderAll();
        });
      });

      // Toggles
      ['showVeloVector', 'showLambdaRuler'].forEach(k => {
        const chk = c.querySelector(`[data-ctrl="${k}"]`);
        chk.addEventListener('change', (e) => {
          this.params[k] = e.target.checked;
          this.renderAll();
        });
      });

      // Preset distances
      c.querySelectorAll('[data-preset-dist]').forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.dataset.presetDist;
          const lambda = this.params.v / this.params.f;
          this.params.probeX1 = 0.8;
          if (type === 'cung_pha') {
            this.params.probeX2 = this.params.probeX1 + lambda;
          } else if (type === 'nguoc_pha') {
            this.params.probeX2 = this.params.probeX1 + lambda * 0.5;
          } else if (type === 'vuong_pha') {
            this.params.probeX2 = this.params.probeX1 + lambda * 0.25;
          }
          this.renderAll();
        });
      });

      window.addEventListener('resize', () => this.renderAll());
    }

    setupObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.1 });
        this.observer.observe(this.container);
      } else {
        this.inView = true;
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.tabHidden = true;
        } else {
          this.tabHidden = false;
          this.lastTimestamp = performance.now();
        }
      });
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || this.tabHidden) {
          this.lastTimestamp = now;
          return;
        }
        const dt = Math.min((now - this.lastTimestamp) / 1000, 0.05);
        this.lastTimestamp = now;
        this.update(dt);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    update(dt) {
      this.state.t += dt;
      const lambda = this.params.v / this.params.f;
      const omega = TWO_PI * this.params.f;
      const k = TWO_PI / lambda;

      // Displacement at probe points
      const u1 = this.params.A * Math.cos(omega * this.state.t - k * this.params.probeX1);
      const u2 = this.params.A * Math.cos(omega * this.state.t - k * this.params.probeX2);

      this.state.historyM1.push({ t: this.state.t, u: u1 });
      this.state.historyM2.push({ t: this.state.t, u: u2 });
      if (this.state.historyM1.length > 200) {
        this.state.historyM1.shift();
        this.state.historyM2.shift();
      }

      const d = Math.abs(this.params.probeX2 - this.params.probeX1);
      const deltaPhi = (TWO_PI * d / lambda) % TWO_PI;

      // Status text
      let status = 'Lệch pha';
      const modLam = d % lambda;
      if (Math.abs(modLam) < 0.05 || Math.abs(modLam - lambda) < 0.05) {
        status = 'Cùng pha (d = kλ)';
      } else if (Math.abs(modLam - 0.5 * lambda) < 0.05) {
        status = 'Ngược pha (d = (k+0.5)λ)';
      } else if (Math.abs(modLam - 0.25 * lambda) < 0.05 || Math.abs(modLam - 0.75 * lambda) < 0.05) {
        status = 'Vuông pha (d = (k+0.25)λ)';
      }

      // UI readouts
      const c = this.container;
      const valLambda = c.querySelector('[data-val="lambda"]');
      const valT = c.querySelector('[data-val="T"]');
      const valV = c.querySelector('[data-val="v"]');
      const valU1 = c.querySelector('[data-val="u1"]');
      const valU2 = c.querySelector('[data-val="u2"]');
      const valDeltaPhi = c.querySelector('[data-val="deltaphi"]');
      const valStatus = c.querySelector('[data-val="phase_status"]');
      const dispLam = c.querySelector('[data-disp-lambda]');

      if (valLambda) valLambda.textContent = `${lambda.toFixed(2)} m`;
      if (dispLam) dispLam.textContent = `λ = ${lambda.toFixed(2)} m`;
      if (valT) valT.textContent = `${(1 / this.params.f).toFixed(2)} s`;
      if (valV) valV.textContent = `${this.params.v.toFixed(1)} m/s`;
      if (valU1) valU1.textContent = `${u1.toFixed(2)} cm`;
      if (valU2) valU2.textContent = `${u2.toFixed(2)} cm`;
      if (valDeltaPhi) valDeltaPhi.textContent = `Δφ = ${deltaPhi.toFixed(2)} rad (${(deltaPhi * RAD_TO_DEG).toFixed(0)}°)`;
      if (valStatus) valStatus.textContent = status;
    }

    renderAll() {
      this.renderSimulation();
      this.renderGraph();
    }

    renderSimulation() {
      const rect = this.canvasSim.getBoundingClientRect();
      const width = rect.width || 400;
      const height = rect.height || 300;
      const { ctx } = setupCanvasDPI(this.canvasSim, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const isTrans = this.params.waveType === 'transverse';
      const midY = height * 0.52;
      const padLeft = 40;
      const padRight = 30;
      const plotW = width - padLeft - padRight;
      const totalDist = 4.5; // Represents 4.5 meters
      const scaleX = plotW / totalDist;
      const lambda = this.params.v / this.params.f;
      const omega = TWO_PI * this.params.f;
      const k = TWO_PI / lambda;

      // Axis line Ox
      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(padLeft, midY);
      ctx.lineTo(width - 15, midY);
      ctx.stroke();
      drawArrow(ctx, width - 25, midY, width - 12, midY, theme.axis, 1.5, 6);

      ctx.fillStyle = theme.textMuted;
      ctx.font = '10px monospace';
      ctx.fillText('x (m)', width - 20, midY - 8);

      // Distance tick marks (0, 1m, 2m, 3m, 4m)
      for (let m = 0; m <= 4; m++) {
        const px = padLeft + m * scaleX;
        ctx.beginPath();
        ctx.moveTo(px, midY - 4); ctx.lineTo(px, midY + 4);
        ctx.stroke();
        ctx.fillText(`${m}m`, px - 6, midY + 16);
      }

      if (isTrans) {
        // --- TRANSVERSE WAVE (Sóng ngang) ---
        const ampScale = 14; // px per cm
        const numParticles = 65;

        // Continuous wave curve
        ctx.beginPath();
        ctx.strokeStyle = theme.dark ? 'rgba(56, 189, 248, 0.5)' : 'rgba(14, 165, 233, 0.6)';
        ctx.lineWidth = 2.5;

        for (let i = 0; i <= numParticles; i++) {
          const x_m = (i / numParticles) * totalDist;
          const u_cm = this.params.A * Math.cos(omega * this.state.t - k * x_m);
          const px = padLeft + x_m * scaleX;
          const py = midY - u_cm * ampScale;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Discrete particles
        for (let i = 0; i <= numParticles; i++) {
          const x_m = (i / numParticles) * totalDist;
          const u_cm = this.params.A * Math.cos(omega * this.state.t - k * x_m);
          const px = padLeft + x_m * scaleX;
          const py = midY - u_cm * ampScale;

          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, TWO_PI);
          ctx.fillStyle = theme.dark ? '#38bdf8' : '#0284c7';
          ctx.fill();
        }

        // Draw Probe point M1 (Rose)
        const p1_px = padLeft + this.params.probeX1 * scaleX;
        const p1_u = this.params.A * Math.cos(omega * this.state.t - k * this.params.probeX1);
        const p1_py = midY - p1_u * ampScale;

        ctx.save();
        ctx.shadowColor = 'rgba(244, 63, 94, 0.4)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p1_px, p1_py, 7, 0, TWO_PI);
        ctx.fillStyle = theme.rose;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        // Velocity vector of particle at M1 (v_pt = -omega*A*sin)
        if (this.params.showVeloVector) {
          const v_pt = -omega * this.params.A * Math.sin(omega * this.state.t - k * this.params.probeX1);
          const vLen = clamp(v_pt * 1.5, -45, 45);
          drawArrow(ctx, p1_px, p1_py, p1_px, p1_py - vLen, theme.emerald, 2.5);
          ctx.fillStyle = theme.emerald;
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText('v_pt', p1_px + 8, p1_py - vLen);
        }

        // Draw Probe point M2 (Amber)
        const p2_px = padLeft + this.params.probeX2 * scaleX;
        const p2_u = this.params.A * Math.cos(omega * this.state.t - k * this.params.probeX2);
        const p2_py = midY - p2_u * ampScale;

        ctx.save();
        ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p2_px, p2_py, 7, 0, TWO_PI);
        ctx.fillStyle = theme.amber;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        // Lambda measurement ruler
        if (this.params.showLambdaRuler) {
          const rulerY = 32;
          const rulerStart = padLeft + 0.3 * scaleX;
          const rulerEnd = rulerStart + lambda * scaleX;

          ctx.strokeStyle = theme.sky;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(rulerStart, rulerY - 5); ctx.lineTo(rulerStart, rulerY + 5);
          ctx.moveTo(rulerEnd, rulerY - 5); ctx.lineTo(rulerEnd, rulerY + 5);
          ctx.moveTo(rulerStart, rulerY); ctx.lineTo(rulerEnd, rulerY);
          ctx.stroke();

          ctx.fillStyle = theme.sky;
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(`λ = ${lambda.toFixed(2)}m`, (rulerStart + rulerEnd) / 2, rulerY - 8);
        }
      } else {
        // --- LONGITUDINAL WAVE (Sóng dọc) ---
        const rows = 9;
        const cols = 55;
        const ampScaleX = 18; // px

        for (let r = 0; r < rows; r++) {
          const py = midY - 60 + r * 15;
          for (let c = 0; c < cols; c++) {
            const x_m = (c / cols) * totalDist;
            const u_cm = this.params.A * Math.cos(omega * this.state.t - k * x_m);
            const px = padLeft + x_m * scaleX + (u_cm / this.params.A) * ampScaleX;

            const isM1 = Math.abs(x_m - this.params.probeX1) < 0.08 && r === Math.floor(rows / 2);
            const isM2 = Math.abs(x_m - this.params.probeX2) < 0.08 && r === Math.floor(rows / 2);

            ctx.beginPath();
            ctx.arc(px, py, isM1 || isM2 ? 5.5 : 2.5, 0, TWO_PI);
            if (isM1) ctx.fillStyle = theme.rose;
            else if (isM2) ctx.fillStyle = theme.amber;
            else ctx.fillStyle = theme.dark ? '#38bdf8' : '#0284c7';
            ctx.fill();
          }
        }

        ctx.fillStyle = theme.textMuted;
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Vùng Nén (Mật độ hạt cao)  ←→  Vùng Dãn (Mật độ hạt thưa)', width / 2, height - 20);
      }
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 300;
      const height = rect.height || 170;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);

      const midY = height / 2;
      const padLeft = 32;
      const padRight = 10;
      const plotWidth = width - padLeft - padRight;

      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padLeft, midY); ctx.lineTo(width - padRight, midY);
      ctx.moveTo(padLeft, 10); ctx.lineTo(padLeft, height - 10);
      ctx.stroke();

      ctx.fillStyle = theme.textMuted;
      ctx.font = '9px monospace';
      ctx.fillText(`+${this.params.A.toFixed(1)}cm`, 2, 18);
      ctx.fillText('0', 18, midY + 3);
      ctx.fillText(`-${this.params.A.toFixed(1)}cm`, 2, height - 12);
      ctx.fillText('t (s)', width - 25, midY - 6);

      const h1 = this.state.historyM1;
      const h2 = this.state.historyM2;
      if (h1.length < 2) return;

      const scaleY = (height / 2 - 20) / (this.params.A || 1);

      // M1 Waveform (Rose)
      ctx.beginPath();
      ctx.strokeStyle = theme.rose;
      ctx.lineWidth = 2;
      for (let i = 0; i < h1.length; i++) {
        const px = padLeft + (i / (h1.length - 1)) * plotWidth;
        const py = midY - h1[i].u * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // M2 Waveform (Amber)
      ctx.beginPath();
      ctx.strokeStyle = theme.amber;
      ctx.lineWidth = 1.8;
      ctx.setLineDash([4, 2]);
      for (let i = 0; i < h2.length; i++) {
        const px = padLeft + (i / (h2.length - 1)) * plotWidth;
        const py = midY - h2[i].u * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.observer) this.observer.disconnect();
    }
  }


  // =========================================================================
  // MÔ PHỎNG 6: THƯỚC CẶP DU XÍCH & TÍNH TOÁN SAI SỐ PHÉP ĐO (BÀI 1 – 3)
  // =========================================================================
  class MeasurementErrorSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        jawPos: options.jawPos !== undefined ? options.jawPos : 32.45,
        measures: [32.40, 32.50, 32.45, 32.40, 32.50],
        dcError: 0.05,
        dragging: false,
        lastX: 0
      };

      this.initDOM();
      this.bindEvents();
      this.render();
    }

    computeErrors() {
      const { measures, dcError } = this.state;
      const n = measures.length || 1;
      const mean = measures.reduce((s, v) => s + v, 0) / n;
      const absErrors = measures.map(v => Math.abs(v - mean));
      const meanAbsError = absErrors.reduce((s, v) => s + v, 0) / n;
      const totalAbsError = meanAbsError + dcError;
      const relativeError = mean > 0 ? (totalAbsError / mean) * 100 : 0;
      return { mean, absErrors, meanAbsError, dcError, totalAbsError, relativeError };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-phys-sim bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-800 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-ruler-combined"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Thí Nghiệm Ảo: Thước Cặp &amp; Xử Lý Sai Số Phép Đo</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Vật Lí 10 • Chương I (Bài 1 – 3)</span>
                </div>
                <p class="text-xs text-blue-100/90 mt-0.5">Kéo mỏ kẹp để đọc số đo trên thước chính và du xích (ĐCNN 0,05 mm), tự động tính sai số ngẫu nhiên, sai số dụng cụ và ghi kết quả đo</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" data-act="add-sample" class="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs cursor-pointer flex items-center gap-1.5">
                <i class="fa-solid fa-plus"></i> Ghi lần đo
              </button>
              <button type="button" data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800">
            <div class="lg:col-span-8 p-4 bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="caliper-canvas block w-full h-[250px] rounded-xl border border-slate-850 cursor-ew-resize"></canvas>
              <div class="mt-3 flex items-center justify-between text-xs px-2 text-slate-400">
                <span><i class="fa-solid fa-hand-pointer text-cyan-400 mr-1"></i> Kéo thanh trượt hoặc kéo trực tiếp trên thước để thay đổi kích thước vật</span>
                <span class="font-mono text-cyan-300 font-bold" data-disp="jaw">L = 32.45 mm</span>
              </div>
            </div>
            <div class="lg:col-span-4 p-4 sm:p-5 bg-slate-900/90 flex flex-col justify-between">
              <div data-error-summary class="space-y-2 text-xs"></div>
            </div>
          </div>

          <div class="p-4 sm:p-5 bg-slate-950/80 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Độ mở mỏ kẹp thước cặp (L)</span>
                <span class="font-mono font-bold text-cyan-400" data-disp="slider-jaw">32.45 mm</span>
              </div>
              <input type="range" data-ctrl="jaw" min="0" max="80" step="0.05" value="32.45" class="w-full accent-cyan-500 cursor-pointer h-2">
            </div>
            <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-amber-400 text-lg"></i>
              <div>
                <span class="font-bold text-amber-300">Quy tắc an toàn:</span> Kiểm tra điểm 0 (zero error) trước khi đo, kẹp nhẹ nhàng vuông góc, không ép quá lực làm biến dạng mỏ kẹp.
              </div>
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.caliper-canvas');
    }

    bindEvents() {
      const c = this.container;
      const slider = c.querySelector('[data-ctrl="jaw"]');
      const dispJaw = c.querySelector('[data-disp="jaw"]');
      const dispSlider = c.querySelector('[data-disp="slider-jaw"]');

      slider.addEventListener('input', e => {
        this.state.jawPos = parseFloat(e.target.value);
        if (dispJaw) dispJaw.textContent = `L = ${fmt(this.state.jawPos, 2)} mm`;
        if (dispSlider) dispSlider.textContent = `${fmt(this.state.jawPos, 2)} mm`;
        this.render();
      });

      const addBtn = c.querySelector('[data-act="add-sample"]');
      if (addBtn) {
        addBtn.addEventListener('click', () => {
          if (this.state.measures.length >= 7) this.state.measures.shift();
          this.state.measures.push(Number(this.state.jawPos.toFixed(2)));
          this.render();
        });
      }

      const resetBtn = c.querySelector('[data-act="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.state.jawPos = 32.45;
          this.state.measures = [32.40, 32.50, 32.45, 32.40, 32.50];
          slider.value = 32.45;
          if (dispJaw) dispJaw.textContent = 'L = 32.45 mm';
          if (dispSlider) dispSlider.textContent = '32.45 mm';
          this.render();
        });
      }

      const startDrag = x => { this.state.dragging = true; this.state.lastX = x; };
      const moveDrag = x => {
        if (!this.state.dragging) return;
        const dx = (x - this.state.lastX) * 0.18;
        this.state.jawPos = clamp(this.state.jawPos + dx, 0, 80);
        this.state.lastX = x;
        slider.value = this.state.jawPos;
        if (dispJaw) dispJaw.textContent = `L = ${fmt(this.state.jawPos, 2)} mm`;
        if (dispSlider) dispSlider.textContent = `${fmt(this.state.jawPos, 2)} mm`;
        this.render();
      };
      this.canvas.addEventListener('mousedown', e => startDrag(e.clientX));
      window.addEventListener('mousemove', e => moveDrag(e.clientX));
      window.addEventListener('mouseup', () => { this.state.dragging = false; });
      this.canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) startDrag(e.touches[0].clientX);
      }, { passive: true });
      this.canvas.addEventListener('touchmove', e => {
        if (this.state.dragging && e.touches.length === 1) moveDrag(e.touches[0].clientX);
      }, { passive: true });
      this.canvas.addEventListener('touchend', () => { this.state.dragging = false; });
      window.addEventListener('resize', () => this.render());
    }

    render() {
      if (!this.canvas) return;
      const width = Math.max(300, this.canvas.clientWidth || 500);
      const height = 250;
      this.canvas.width = width;
      this.canvas.height = height;
      const ctx = this.canvas.getContext('2d');

      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const jaw = this.state.jawPos;
      const scaleMm = 4.8;
      const originX = 70;
      const jawX = originX + jaw * scaleMm;

      // Measured Object
      if (jaw > 0.1) {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.6;
        ctx.fillRect(originX, 85, jaw * scaleMm, 55);
        ctx.strokeRect(originX, 85, jaw * scaleMm, 55);
        ctx.fillStyle = '#bae6fd';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        if (jaw * scaleMm > 40) ctx.fillText(`Vật: ${fmt(jaw, 2)} mm`, originX + (jaw * scaleMm) / 2, 116);
      }

      // Main Beam
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(40, 40, width - 60, 40);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.2;
      ctx.strokeRect(40, 40, width - 60, 40);

      // Main scale ticks
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '9px monospace';
      ctx.textAlign = 'center';
      for (let mm = 0; mm <= 90; mm++) {
        const x = originX + mm * scaleMm;
        if (x > width - 30) break;
        const isTen = mm % 10 === 0;
        const isFive = mm % 5 === 0;
        const tickH = isTen ? 14 : isFive ? 9 : 5;
        ctx.beginPath();
        ctx.moveTo(x, 80);
        ctx.lineTo(x, 80 - tickH);
        ctx.stroke();
        if (isTen) ctx.fillText(String(mm), x, 60);
      }

      // Fixed Jaw
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.moveTo(originX, 40);
      ctx.lineTo(originX - 25, 40);
      ctx.lineTo(originX - 25, 175);
      ctx.lineTo(originX, 175);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Sliding Vernier
      ctx.save();
      ctx.fillStyle = 'rgba(51, 65, 85, 0.95)';
      ctx.fillRect(jawX - 10, 75, 110, 50);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.8;
      ctx.strokeRect(jawX - 10, 75, 110, 50);

      ctx.fillStyle = '#334155';
      ctx.fillRect(jawX, 125, 20, 50);
      ctx.strokeRect(jawX, 125, 20, 50);

      const mainInt = Math.floor(jaw);
      const frac = jaw - mainInt;
      const vernierMatchIdx = Math.round(frac / 0.05);

      ctx.fillStyle = '#f8fafc';
      for (let v = 0; v <= 20; v++) {
        const vx = jawX + v * (scaleMm * 0.95);
        const isFive = v % 5 === 0;
        const vH = isFive ? 12 : 6;
        ctx.strokeStyle = v === vernierMatchIdx ? '#f43f5e' : '#94a3b8';
        ctx.lineWidth = v === vernierMatchIdx ? 2.0 : 1.0;
        ctx.beginPath();
        ctx.moveTo(vx, 75);
        ctx.lineTo(vx, 75 + vH);
        ctx.stroke();
        if (isFive) ctx.fillText(String(v / 2), vx, 102);
      }
      ctx.restore();

      // Matching line highlight
      const matchX = jawX + vernierMatchIdx * (scaleMm * 0.95);
      ctx.strokeStyle = '#f43f5e';
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.moveTo(matchX, 45);
      ctx.lineTo(matchX, 135);
      ctx.stroke();
      ctx.setLineDash([]);

      // Error Summary Box
      const err = this.computeErrors();
      const box = this.container.querySelector('[data-error-summary]');
      if (box) {
        box.innerHTML = `
          <div class="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Kết Quả Đo &amp; Sai Số (Bài 3)</div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-400">Giá trị đọc tức thời (L₀ + n × 0,05)</div>
            <div class="font-mono font-bold text-cyan-300 text-sm mt-0.5">${mainInt} + ${vernierMatchIdx} × 0,05 = <span class="text-white text-base">${fmt(jaw, 2)} mm</span></div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-400">Các lần đo lưu trữ (${err.absErrors.length} lần):</div>
            <div class="font-mono text-slate-300 text-[11px] mt-0.5">[ ${this.state.measures.join(', ')} ] mm</div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Trung bình (L̄)</div>
              <div class="font-mono font-bold text-slate-200 mt-0.5">${fmt(err.mean, 2)} mm</div>
            </div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Sai số tỉ đối (δ)</div>
              <div class="font-mono font-bold text-amber-400 mt-0.5">${fmt(err.relativeError, 2)}%</div>
            </div>
          </div>
          <div class="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/60">
            <div class="text-[10px] text-cyan-300 font-bold">Ghi kết quả phép đo chuẩn SI:</div>
            <div class="font-mono font-extrabold text-cyan-200 text-sm mt-0.5">L = ${fmt(err.mean, 2)} ± ${fmt(err.totalAbsError, 2)} (mm)</div>
          </div>
        `;
      }
    }

    destroy() {
      // teardown
    }
  }

  // =========================================================================
  // MÔ PHỎNG 7: ĐỘNG HỌC CHUYỂN ĐỘNG THẲNG, RƠI TỰ DO & NÉM XIÊN (BÀI 4 – 12)
  // =========================================================================
  class KinematicsMotionSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'linear', // 'linear' | 'photogate' | 'freefall' | 'projectile'
        v0: options.v0 !== undefined ? options.v0 : 5.0, // m/s
        a: options.a !== undefined ? options.a : 2.0, // m/s^2
        angle: options.angle !== undefined ? options.angle : 45.0, // deg for projectile
        h0: options.h0 !== undefined ? options.h0 : 20.0, // m
        g: 9.8, // m/s^2
        t: 0.0,
        running: false,
        flagWidth: 0.05, // 5cm
        gateA: 10.0,
        gateB: 40.0
      };

      this.initDOM();
      this.bindEvents();
      this.lastTimestamp = performance.now();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initDOM() {
      const { mode, v0, a, angle, h0 } = this.state;
      this.container.innerHTML = `
        <div class="codehub-phys-sim bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-car-side"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Phòng Thí Nghiệm Động Học: Chuyển Động Thẳng, Rơi &amp; Ném</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Vật Lí 10 • Chương II (Bài 4 – 12)</span>
                </div>
                <p class="text-xs text-emerald-100/90 mt-0.5">Khảo sát vận tốc, gia tốc, độ dịch chuyển d(t), rơi tự do và ném xiên kèm vectơ v⃗, a⃗ và đồ thị thời gian thực</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" data-act="play" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-play"></i> Chạy
              </button>
              <button type="button" data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800">
            <div class="lg:col-span-8 p-4 bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="kinematics-canvas block w-full h-[290px] rounded-xl border border-slate-850"></canvas>
              <div class="mt-2.5 flex items-center justify-between text-xs px-2 text-slate-400">
                <span><i class="fa-solid fa-gauge-high text-emerald-400 mr-1"></i> Vectơ v⃗ (xanh lá), Vectơ a⃗ (vàng) cập nhật thời gian thực</span>
                <span class="font-mono text-emerald-400 font-bold" data-disp="time">t = 0.00 s</span>
              </div>
            </div>
            <div class="lg:col-span-4 p-4 sm:p-5 bg-slate-900/90 flex flex-col justify-between">
              <div data-kinematics-summary class="space-y-2 text-xs"></div>
            </div>
          </div>

          <!-- Controls -->
          <div class="p-4 sm:p-5 bg-slate-950/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Vận tốc đầu (v₀)</span>
                <span class="font-mono font-bold text-emerald-400" data-disp="v0">${fmt(v0, 1)} m/s</span>
              </div>
              <input type="range" data-ctrl="v0" min="-10" max="25" step="0.5" value="${v0}" class="w-full accent-emerald-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Gia tốc (a)</span>
                <span class="font-mono font-bold text-amber-400" data-disp="a">${fmt(a, 1)} m/s²</span>
              </div>
              <input type="range" data-ctrl="a" min="-5" max="8" step="0.5" value="${a}" class="w-full accent-amber-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Góc ném (α) / Độ cao (h₀)</span>
                <span class="font-mono font-bold text-cyan-400" data-disp="angle">${fmt(angle, 0)}°</span>
              </div>
              <input type="range" data-ctrl="angle" min="0" max="90" step="5" value="${angle}" class="w-full accent-cyan-500 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.kinematics-canvas');
    }

    bindEvents() {
      const c = this.container;
      const playBtn = c.querySelector('[data-act="play"]');
      const resetBtn = c.querySelector('[data-act="reset"]');

      playBtn.addEventListener('click', () => {
        this.state.running = !this.state.running;
        playBtn.innerHTML = this.state.running
          ? '<i class="fa-solid fa-pause"></i> Tạm dừng'
          : '<i class="fa-solid fa-play"></i> Tiếp tục';
        playBtn.className = this.state.running
          ? 'px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-sm'
          : 'px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-sm';
      });

      resetBtn.addEventListener('click', () => {
        this.state.t = 0;
        this.state.running = false;
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i> Chạy';
        playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-sm';
        this.render();
      });

      ['v0', 'a', 'angle'].forEach(k => {
        const input = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        input.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) {
            const unit = k === 'angle' ? '°' : k === 'v0' ? ' m/s' : ' m/s²';
            disp.textContent = `${fmt(this.state[k], 1)}${unit}`;
          }
          this.render();
        });
      });
      window.addEventListener('resize', () => this.render());
    }

    loop(timestamp) {
      const dt = clamp((timestamp - this.lastTimestamp) / 1000, 0, 0.1);
      this.lastTimestamp = timestamp;

      if (this.state.running) {
        this.state.t += dt;
        if (this.state.t > 15.0) this.state.t = 15.0; // clamp time
        this.render();
      }
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      const width = Math.max(300, this.canvas.clientWidth || 500);
      const height = 290;
      this.canvas.width = width;
      this.canvas.height = height;
      const ctx = this.canvas.getContext('2d');

      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const { mode, v0, a, angle, g, t } = this.state;
      const tDisp = this.container.querySelector('[data-disp="time"]');
      if (tDisp) tDisp.textContent = `t = ${fmt(t, 2)} s`;

      if (mode === 'projectile') {
        // Projectile trajectory
        const rad = angle * DEG_TO_RAD;
        const vx0 = v0 * Math.cos(rad);
        const vy0 = v0 * Math.sin(rad);
        const totalTime = (2 * vy0) / g;
        const maxH = (vy0 * vy0) / (2 * g);
        const rangeL = (v0 * v0 * Math.sin(2 * rad)) / g;

        const curT = Math.min(t, totalTime);
        const curX = vx0 * curT;
        const curY = Math.max(0, vy0 * curT - 0.5 * g * curT * curT);
        const curVx = vx0;
        const curVy = vy0 - g * curT;
        const curV = Math.hypot(curVx, curVy);

        // Ground & origin
        const scale = Math.min((width - 80) / Math.max(20, rangeL * 1.1), (height - 80) / Math.max(10, maxH * 1.3));
        const originX = 50, originY = height - 40;

        // Ground line
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(30, originY);
        ctx.lineTo(width - 20, originY);
        ctx.stroke();

        // Parabola path
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        for (let step = 0; step <= 60; step++) {
          const pt = (step / 60) * totalTime;
          const px = originX + vx0 * pt * scale;
          const py = originY - (vy0 * pt - 0.5 * g * pt * pt) * scale;
          if (step === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Projectile Ball
        const ballPx = originX + curX * scale;
        const ballPy = originY - curY * scale;

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(ballPx, ballPy, 7, 0, TWO_PI);
        ctx.fill();

        // Velocity vector
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(ballPx, ballPy);
        ctx.lineTo(ballPx + curVx * scale * 0.4, ballPy - curVy * scale * 0.4);
        ctx.stroke();

        // Summary update
        const summary = this.container.querySelector('[data-kinematics-summary]');
        if (summary) {
          summary.innerHTML = `
            <div class="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Chuyển Động Ném Xiên (Bài 12)</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Tầm xa (L)</div>
                <div class="font-mono font-bold text-cyan-300 mt-0.5">${fmt(rangeL, 2)} m</div>
              </div>
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Tầm cao (H)</div>
                <div class="font-mono font-bold text-amber-300 mt-0.5">${fmt(maxH, 2)} m</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Vận tốc tức thời v = √(vx² + vy²)</div>
              <div class="font-mono font-bold text-emerald-400 text-sm mt-0.5">${fmt(curV, 2)} m/s (vx=${fmt(curVx, 1)}, vy=${fmt(curVy, 1)})</div>
            </div>
            <div class="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 font-mono text-[11px] text-emerald-200">
              Tọa độ: (${fmt(curX, 1)} m; ${fmt(curY, 1)} m) • Thời gian bay: ${fmt(totalTime, 2)} s
            </div>
          `;
        }
      } else {
        // Linear Motion: Track + Car + Vector + Realtime Graphs
        const curV = v0 + a * t;
        const curD = v0 * t + 0.5 * a * t * t;
        const trackY = 85;
        const scaleX = (width - 100) / 120; // 120m track
        const originX = 50;
        const carX = clamp(originX + curD * scaleX, 40, width - 60);

        // 1. Motion Track
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(30, trackY);
        ctx.lineTo(width - 30, trackY);
        ctx.stroke();

        // Distance markers
        ctx.fillStyle = '#64748b';
        ctx.font = '9px monospace';
        ctx.textAlign = 'center';
        for (let m = 0; m <= 120; m += 20) {
          const mx = originX + m * scaleX;
          ctx.beginPath();
          ctx.moveTo(mx, trackY);
          ctx.lineTo(mx, trackY + 6);
          ctx.stroke();
          ctx.fillText(m + 'm', mx, trackY + 18);
        }

        // Photogates A and B
        const pGateA = originX + 20 * scaleX;
        const pGateB = originX + 70 * scaleX;
        [pGateA, pGateB].forEach((gx, idx) => {
          ctx.fillStyle = '#f59e0b';
          ctx.fillRect(gx - 3, trackY - 32, 6, 32);
          ctx.fillStyle = '#fde68a';
          ctx.fillText(idx === 0 ? 'Cổng A (20m)' : 'Cổng B (70m)', gx, trackY - 38);
        });

        // The Car
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(carX - 18, trackY - 20, 36, 16);
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.arc(carX - 10, trackY, 5, 0, TWO_PI);
        ctx.arc(carX + 10, trackY, 5, 0, TWO_PI);
        ctx.fill();

        // Velocity Vector (Green)
        if (Math.abs(curV) > 0.05) {
          const vecLen = clamp(curV * 3.5, -60, 60);
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.moveTo(carX, trackY - 12);
          ctx.lineTo(carX + vecLen, trackY - 12);
          ctx.stroke();
          // Arrowhead
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          const arrowDir = vecLen >= 0 ? 1 : -1;
          ctx.moveTo(carX + vecLen, trackY - 12);
          ctx.lineTo(carX + vecLen - arrowDir * 6, trackY - 16);
          ctx.lineTo(carX + vecLen - arrowDir * 6, trackY - 8);
          ctx.closePath();
          ctx.fill();
        }

        // Acceleration Vector (Yellow)
        if (Math.abs(a) > 0.05) {
          const aLen = clamp(a * 8, -50, 50);
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2.0;
          ctx.beginPath();
          ctx.moveTo(carX, trackY - 26);
          ctx.lineTo(carX + aLen, trackY - 26);
          ctx.stroke();
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('a⃗', carX + aLen / 2, trackY - 30);
        }

        // 2. Realtime Mini Graph (v - t) at bottom
        const graphL = 50, graphT = 145, graphW = width - 80, graphH = 110;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(graphL, graphT, graphW, graphH);
        ctx.strokeStyle = '#1e293b';
        ctx.strokeRect(graphL, graphT, graphW, graphH);

        // Graph Axes
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(graphL, graphT + graphH / 2);
        ctx.lineTo(graphL + graphW, graphT + graphH / 2);
        ctx.moveTo(graphL, graphT);
        ctx.lineTo(graphL, graphT + graphH);
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.fillText('v (m/s)', graphL + 25, graphT + 12);
        ctx.fillText('t (s)', graphL + graphW - 12, graphT + graphH / 2 - 6);

        // Draw v-t curve
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const maxTimeG = 12;
        for (let step = 0; step <= 50; step++) {
          const pt = (step / 50) * maxTimeG;
          const pv = v0 + a * pt;
          const px = graphL + (pt / maxTimeG) * graphW;
          const py = (graphT + graphH / 2) - (pv / 30) * (graphH / 2);
          if (step === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Current time point marker
        const curPx = graphL + (clamp(t, 0, maxTimeG) / maxTimeG) * graphW;
        const curPy = (graphT + graphH / 2) - (curV / 30) * (graphH / 2);
        ctx.fillStyle = '#f43f5e';
        ctx.beginPath();
        ctx.arc(curPx, curPy, 4.5, 0, TWO_PI);
        ctx.fill();

        // Summary
        const summary = this.container.querySelector('[data-kinematics-summary]');
        if (summary) {
          const isAccelerating = a * curV > 0;
          const motionType = a === 0 ? 'Thẳng đều (a = 0)' : isAccelerating ? 'Nhanh dần đều (a·v > 0)' : 'Chậm dần đều (a·v < 0)';
          summary.innerHTML = `
            <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Động Học Chuyển Động Thẳng (Bài 4 – 9)</div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800 font-semibold text-emerald-300">
              Loại: ${motionType}
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Độ dịch chuyển (d)</div>
                <div class="font-mono font-bold text-white text-sm mt-0.5">${fmt(curD, 2)} m</div>
              </div>
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Vận tốc tức thời (v)</div>
                <div class="font-mono font-bold text-emerald-400 text-sm mt-0.5">${fmt(curV, 2)} m/s</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
              Công thức: v = ${fmt(v0, 1)} + ${fmt(a, 1)}t<br>
              d = ${fmt(v0, 1)}t + 0.5×(${fmt(a, 1)})t²
            </div>
            <div class="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 font-mono text-[11px] text-emerald-200">
              Hệ số góc đồ thị v−t: Δv/Δt = ${fmt(a, 2)} m/s² (chính là gia tốc a)
            </div>
          `;
        }
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }

  // =========================================================================
  // MÔ PHỎNG 8: ĐỘNG LỰC HỌC, 3 ĐỊNH LUẬT NEWTON, MA SÁT & MOMENT (BÀI 13 – 22)
  // =========================================================================
  class DynamicsForceSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'newton', // 'newton' | 'incline' | 'vector_sum' | 'moment'
        m: options.m !== undefined ? options.m : 2.0, // kg
        F: options.F !== undefined ? options.F : 10.0, // N
        mu: options.mu !== undefined ? options.mu : 0.2, // friction coeff
        alpha: options.alpha !== undefined ? options.alpha : 30.0, // deg for incline
        F1: 8.0,
        F2: 6.0,
        angleF: 90.0,
        d1: 1.5,
        d2: 1.0,
        g: 9.8
      };

      this.initDOM();
      this.bindEvents();
      this.render();
    }

    initDOM() {
      const { mode, m, F, mu, alpha, F1, F2, angleF } = this.state;
      this.container.innerHTML = `
        <div class="codehub-phys-sim bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-amber-700 via-orange-700 to-rose-800 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-arrows-to-circle"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Thí Nghiệm Động Lực Học: Định Luật Newton, Ma Sát &amp; Moment</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Vật Lí 10 • Chương III (Bài 13 – 22)</span>
                </div>
                <p class="text-xs text-amber-100/90 mt-0.5">Khảo sát lực kéo F⃗, ma sát F⃗_ms, phản lực N⃗, trọng lực P⃗, quy tắc hình bình hành và cân bằng moment đòn bẩy</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800">
            <div class="lg:col-span-8 p-4 bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="dynamics-canvas block w-full h-[270px] rounded-xl border border-slate-850"></canvas>
              <div class="mt-2.5 flex items-center justify-between text-xs px-2 text-slate-400">
                <span><i class="fa-solid fa-vector-square text-amber-400 mr-1"></i> Biểu diễn hệ vectơ lực tỉ lệ chuẩn độ lớn</span>
                <span class="font-mono text-amber-300 font-bold" data-disp="force-status">F_net = 6.08 N</span>
              </div>
            </div>
            <div class="lg:col-span-4 p-4 sm:p-5 bg-slate-900/90 flex flex-col justify-between">
              <div data-dynamics-summary class="space-y-2 text-xs"></div>
            </div>
          </div>

          <!-- Controls -->
          <div class="p-4 sm:p-5 bg-slate-950/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Lực tác dụng (F)</span>
                <span class="font-mono font-bold text-rose-400" data-disp="F">${fmt(F, 1)} N</span>
              </div>
              <input type="range" data-ctrl="F" min="0" max="30" step="1" value="${F}" class="w-full accent-rose-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Khối lượng vật (m)</span>
                <span class="font-mono font-bold text-cyan-400" data-disp="m">${fmt(m, 1)} kg</span>
              </div>
              <input type="range" data-ctrl="m" min="0.5" max="10" step="0.5" value="${m}" class="w-full accent-cyan-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Hệ số ma sát (μ) / Góc nghiêng</span>
                <span class="font-mono font-bold text-amber-400" data-disp="mu">${fmt(mu, 2)}</span>
              </div>
              <input type="range" data-ctrl="mu" min="0" max="0.6" step="0.05" value="${mu}" class="w-full accent-amber-500 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.dynamics-canvas');
    }

    bindEvents() {
      const c = this.container;
      ['F', 'm', 'mu'].forEach(k => {
        const input = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        input.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) {
            const unit = k === 'F' ? ' N' : k === 'm' ? ' kg' : '';
            disp.textContent = `${fmt(this.state[k], k === 'mu' ? 2 : 1)}${unit}`;
          }
          this.render();
        });
      });

      const resetBtn = c.querySelector('[data-act="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.state.m = 2.0;
          this.state.F = 10.0;
          this.state.mu = 0.2;
          this.render();
        });
      }
      window.addEventListener('resize', () => this.render());
    }

    render() {
      if (!this.canvas) return;
      const width = Math.max(300, this.canvas.clientWidth || 500);
      const height = 270;
      this.canvas.width = width;
      this.canvas.height = height;
      const ctx = this.canvas.getContext('2d');

      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const { mode, m, F, mu, g } = this.state;
      const P = m * g;
      const N = P;
      const FmsMax = mu * N;
      const isMoving = F > FmsMax;
      const Fnet = isMoving ? F - FmsMax : 0;
      const a = isMoving ? Fnet / m : 0;

      const floorY = 170;
      const boxW = 70, boxH = 50;
      const boxX = width / 2 - boxW / 2;
      const boxY = floorY - boxH;

      // Sàn nhà
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(30, floorY);
      ctx.lineTo(width - 30, floorY);
      ctx.stroke();

      // Gạch chéo sàn
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1.2;
      for (let x = 40; x < width - 30; x += 15) {
        ctx.beginPath();
        ctx.moveTo(x, floorY);
        ctx.lineTo(x - 8, floorY + 12);
        ctx.stroke();
      }

      // Khối vật m
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(boxX, boxY, boxW, boxH);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2.0;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`m = ${fmt(m, 1)} kg`, boxX + boxW / 2, boxY + boxH / 2 + 4);

      // Force Vectors
      const cx = boxX + boxW / 2;
      const cy = boxY + boxH / 2;
      const scaleF = 3.5;

      const drawArrow = (x1, y1, x2, y2, color, label) => {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        const ang = Math.atan2(y2 - y1, x2 - x1);
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - 8 * Math.cos(ang - 0.4), y2 - 8 * Math.sin(ang - 0.4));
        ctx.lineTo(x2 - 8 * Math.cos(ang + 0.4), y2 - 8 * Math.sin(ang + 0.4));
        ctx.closePath();
        ctx.fill();

        ctx.font = 'bold 11px monospace';
        ctx.fillText(label, x2 + 12 * Math.cos(ang), y2 + 12 * Math.sin(ang));
      };

      // Force F_k kéo sang phải
      if (F > 0) drawArrow(boxX + boxW, cy, boxX + boxW + F * scaleF, cy, '#f43f5e', `F⃗k (${fmt(F, 1)} N)`);
      // Lực ma sát F_ms sang trái
      const actualFms = isMoving ? FmsMax : Math.min(F, FmsMax);
      if (actualFms > 0) drawArrow(boxX, floorY - 3, boxX - actualFms * scaleF, floorY - 3, '#f59e0b', `F⃗ms (${fmt(actualFms, 1)} N)`);
      // Trọng lực P xuống dưới
      drawArrow(cx, cy, cx, cy + clamp(P * scaleF * 0.5, 30, 80), '#38bdf8', `P⃗ (${fmt(P, 1)} N)`);
      // Phản lực N lên trên
      drawArrow(cx, boxY, cx, boxY - clamp(N * scaleF * 0.5, 30, 80), '#22c55e', `N⃗ (${fmt(N, 1)} N)`);

      const statusDisp = this.container.querySelector('[data-disp="force-status"]');
      if (statusDisp) statusDisp.textContent = `F_net = ${fmt(Fnet, 2)} N • a = ${fmt(a, 2)} m/s²`;

      const summary = this.container.querySelector('[data-dynamics-summary]');
      if (summary) {
        summary.innerHTML = `
          <div class="text-[11px] font-bold uppercase tracking-wider text-amber-400">Động Lực Học Newton (Bài 14 – 18)</div>
          <div class="p-2 rounded-lg bg-slate-950 border border-slate-800 font-semibold ${isMoving ? 'text-emerald-400' : 'text-amber-400'}">
            Trạng thái: ${isMoving ? 'Vật chuyển động có gia tốc' : 'Vật đứng yên (F ≤ F_ms_nghỉ)'}
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Hợp lực (F_net)</div>
              <div class="font-mono font-bold text-rose-400 mt-0.5">${fmt(Fnet, 2)} N</div>
            </div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Gia tốc (a = F_net / m)</div>
              <div class="font-mono font-bold text-white mt-0.5">${fmt(a, 2)} m/s²</div>
            </div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
            Trọng lực: P = mg = ${fmt(P, 1)} N<br>
            Ma sát trượt: F_mst = μ·N = ${fmt(FmsMax, 2)} N
          </div>
          <div class="p-2 rounded-lg bg-amber-950/40 border border-amber-800/60 font-mono text-[11px] text-amber-200">
            Định luật 2 Newton: a⃗ = ∑F⃗ / m = (F⃗k + F⃗ms + P⃗ + N⃗) / m
          </div>
        `;
      }
    }

    destroy() {}
  }

  // =========================================================================
  // MÔ PHỎNG 9: NĂNG LƯỢNG, CÔNG, CÔNG SUẤT & BẢO TOÀN CƠ NĂNG (BÀI 23 – 27)
  // =========================================================================
  class WorkEnergySim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        m: options.m !== undefined ? options.m : 2.0, // kg
        v: options.v !== undefined ? options.v : 6.0, // m/s
        h: options.h !== undefined ? options.h : 8.0, // m
        F: options.F !== undefined ? options.F : 25.0, // N
        s: options.s !== undefined ? options.s : 10.0, // m
        alpha: 30.0, // deg
        t: 2.5, // s
        g: 9.8
      };

      this.initDOM();
      this.bindEvents();
      this.render();
    }

    initDOM() {
      const { m, v, h, F, s } = this.state;
      this.container.innerHTML = `
        <div class="codehub-phys-sim bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-800 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-bolt-lightning"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Thí Nghiệm Năng Lượng: Công Cơ Học, Công Suất &amp; Bảo Toàn Cơ Năng</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Vật Lí 10 • Chương IV (Bài 23 – 27)</span>
                </div>
                <p class="text-xs text-purple-100/90 mt-0.5">Khảo sát công A = F·s·cosα, công suất 𝒫 = A/t, động năng Wđ, thế năng Wt và định luật bảo toàn cơ năng</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="energy-canvas block w-full h-[270px] rounded-xl border border-slate-850"></canvas>
              <div class="mt-2.5 flex items-center justify-between text-xs px-2 text-slate-400">
                <span><i class="fa-solid fa-chart-simple text-purple-400 mr-1"></i> Biểu đồ cột cơ năng W = Wđ + Wt (J) thời gian thực</span>
                <span class="font-mono text-purple-300 font-bold" data-disp="total-energy">W = 192.8 J</span>
              </div>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-slate-900/90 flex flex-col justify-between">
              <div data-energy-summary class="space-y-2 text-xs"></div>
            </div>
          </div>

          <div class="p-4 sm:p-5 bg-slate-950/80 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Vận tốc (v)</span>
                <span class="font-mono font-bold text-emerald-400" data-disp="v">${fmt(v, 1)} m/s</span>
              </div>
              <input type="range" data-ctrl="v" min="0" max="15" step="0.5" value="${v}" class="w-full accent-emerald-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Độ cao (h)</span>
                <span class="font-mono font-bold text-cyan-400" data-disp="h">${fmt(h, 1)} m</span>
              </div>
              <input type="range" data-ctrl="h" min="0" max="20" step="0.5" value="${h}" class="w-full accent-cyan-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Lực kéo (F)</span>
                <span class="font-mono font-bold text-rose-400" data-disp="F">${fmt(F, 1)} N</span>
              </div>
              <input type="range" data-ctrl="F" min="0" max="50" step="2" value="${F}" class="w-full accent-rose-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Quãng đường (s)</span>
                <span class="font-mono font-bold text-amber-400" data-disp="s">${fmt(s, 1)} m</span>
              </div>
              <input type="range" data-ctrl="s" min="1" max="30" step="1" value="${s}" class="w-full accent-amber-500 cursor-pointer h-2">
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.energy-canvas');
    }

    bindEvents() {
      const c = this.container;
      ['v', 'h', 'F', 's'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          if (disp) {
            const u = k === 'v' ? ' m/s' : k === 'h' || k === 's' ? ' m' : ' N';
            disp.textContent = `${fmt(this.state[k], 1)}${u}`;
          }
          this.render();
        });
      });

      const resetBtn = c.querySelector('[data-act="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.state.v = 6.0;
          this.state.h = 8.0;
          this.state.F = 25.0;
          this.state.s = 10.0;
          this.render();
        });
      }
      window.addEventListener('resize', () => this.render());
    }

    render() {
      if (!this.canvas) return;
      const width = Math.max(300, this.canvas.clientWidth || 500);
      const height = 270;
      this.canvas.width = width;
      this.canvas.height = height;
      const ctx = this.canvas.getContext('2d');

      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const { m, v, h, F, s, alpha, t, g } = this.state;
      const Wd = 0.5 * m * v * v;
      const Wt = m * g * h;
      const W = Wd + Wt;

      const rad = alpha * DEG_TO_RAD;
      const A = F * s * Math.cos(rad);
      const P_watt = A / t;
      const P_hp = P_watt / 746; // Mã lực

      // Draw Energy Bar Charts (Wđ, Wt, W)
      const barBaseY = height - 45;
      const maxEnergy = Math.max(100, W * 1.25);
      const plotH = 170;

      const bars = [
        { label: 'Động năng (Wđ)', val: Wd, col: '#10b981' },
        { label: 'Thế năng (Wt)', val: Wt, col: '#38bdf8' },
        { label: 'Cơ năng (W)', val: W, col: '#fbbf24' }
      ];

      const barW = clamp((width - 120) / 4, 45, 80);
      const gap = 30;
      const startX = (width - (bars.length * barW + (bars.length - 1) * gap)) / 2;

      bars.forEach((b, idx) => {
        const bx = startX + idx * (barW + gap);
        const bH = (b.val / maxEnergy) * plotH;
        const by = barBaseY - bH;

        ctx.fillStyle = b.col;
        ctx.fillRect(bx, by, barW, bH);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(bx, by, barW, bH);

        // Value text
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${fmt(b.val, 1)} J`, bx + barW / 2, by - 6);

        // Label
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '10px sans-serif';
        ctx.fillText(b.label, bx + barW / 2, barBaseY + 16);
      });

      // Baseline
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, barBaseY);
      ctx.lineTo(width - 30, barBaseY);
      ctx.stroke();

      const totalDisp = this.container.querySelector('[data-disp="total-energy"]');
      if (totalDisp) totalDisp.textContent = `W = ${fmt(W, 1)} J (Wđ=${fmt(Wd, 1)}J + Wt=${fmt(Wt, 1)}J)`;

      const summary = this.container.querySelector('[data-energy-summary]');
      if (summary) {
        summary.innerHTML = `
          <div class="text-[11px] font-bold uppercase tracking-wider text-purple-400">Công &amp; Năng Lượng (Bài 23 – 26)</div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-400">Công cơ học A = F·s·cosα (α=${alpha}°)</div>
            <div class="font-mono font-bold text-amber-300 text-sm mt-0.5">${fmt(A, 1)} J (Công phát động > 0)</div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Công suất (𝒫 = A/t)</div>
              <div class="font-mono font-bold text-emerald-400 mt-0.5">${fmt(P_watt, 1)} W</div>
            </div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Mã lực (HP)</div>
              <div class="font-mono font-bold text-cyan-400 mt-0.5">${fmt(P_hp, 2)} HP</div>
            </div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
            Động năng: Wđ = ½·mv² = ${fmt(Wd, 1)} J<br>
            Thế năng: Wt = mgh = ${fmt(Wt, 1)} J
          </div>
          <div class="p-2 rounded-lg bg-purple-950/40 border border-purple-800/60 font-mono text-[11px] text-purple-200">
            Bảo toàn cơ năng: Khi không có ma sát, W = Wđ + Wt = ${fmt(W, 1)} J không đổi!
          </div>
        `;
      }
    }

    destroy() {}
  }

  // =========================================================================
  // MÔ PHỎNG 10: ĐỘNG LƯỢNG & ĐỊNH LUẬT BẢO TOÀN ĐỘNG LƯỢNG (BÀI 28 – 30)
  // =========================================================================
  class MomentumCollisionSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        m1: options.m1 !== undefined ? options.m1 : 2.0, // kg
        m2: options.m2 !== undefined ? options.m2 : 1.5, // kg
        v1: options.v1 !== undefined ? options.v1 : 4.0, // m/s
        v2: options.v2 !== undefined ? options.v2 : -2.0, // m/s
        e: options.e !== undefined ? options.e : 1.0, // 1.0: đàn hồi, 0.0: mềm
        collided: false,
        running: false,
        x1: 80,
        x2: 320
      };

      this.initDOM();
      this.bindEvents();
      this.render();
    }

    computeCollision() {
      const { m1, m2, v1, v2, e } = this.state;
      const p1_before = m1 * v1;
      const p2_before = m2 * v2;
      const p_total_before = p1_before + p2_before;

      // 1D Collision formula with coefficient of restitution e
      const v1_after = ((m1 - e * m2) * v1 + (1 + e) * m2 * v2) / (m1 + m2);
      const v2_after = ((1 + e) * m1 * v1 + (m2 - e * m1) * v2) / (m1 + m2);

      const p1_after = m1 * v1_after;
      const p2_after = m2 * v2_after;
      const p_total_after = p1_after + p2_after;

      return { p1_before, p2_before, p_total_before, v1_after, v2_after, p1_after, p2_after, p_total_after };
    }

    initDOM() {
      const { m1, m2, v1, v2, e } = this.state;
      this.container.innerHTML = `
        <div class="codehub-phys-sim bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-red-700 via-rose-700 to-pink-800 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-arrows-split-up-and-left"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Thí Nghiệm Ảo: Va Chạm &amp; Bảo Toàn Động Lượng</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Vật Lí 10 • Chương V (Bài 28 – 30)</span>
                </div>
                <p class="text-xs text-rose-100/90 mt-0.5">Khảo sát va chạm đàn hồi (e = 1) và va chạm mềm (e = 0) trên đệm khí, kiểm chứng p⃗_trước = p⃗_sau</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" data-act="collide" class="px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-slate-950 font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-play"></i> Va chạm
              </button>
              <button type="button" data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800">
            <div class="lg:col-span-8 p-4 bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="collision-canvas block w-full h-[260px] rounded-xl border border-slate-850"></canvas>
              <div class="mt-2.5 flex items-center justify-between text-xs px-2 text-slate-400">
                <span><i class="fa-solid fa-arrows-left-right text-rose-400 mr-1"></i> Vectơ động lượng p⃗ = m·v⃗ hiển thị trực tiếp trên xe</span>
                <span class="font-mono text-rose-300 font-bold" data-disp="collision-status">Trạng thái: Trước va chạm</span>
              </div>
            </div>
            <div class="lg:col-span-4 p-4 sm:p-5 bg-slate-900/90 flex flex-col justify-between">
              <div data-momentum-summary class="space-y-2 text-xs"></div>
            </div>
          </div>

          <!-- Controls -->
          <div class="p-4 sm:p-5 bg-slate-950/80 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Xe 1: m₁ (kg) / v₁ (m/s)</span>
                <span class="font-mono font-bold text-cyan-400" data-disp="m1v1">${fmt(m1,1)}kg • ${fmt(v1,1)}m/s</span>
              </div>
              <input type="range" data-ctrl="v1" min="-6" max="6" step="0.5" value="${v1}" class="w-full accent-cyan-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Xe 2: m₂ (kg) / v₂ (m/s)</span>
                <span class="font-mono font-bold text-amber-400" data-disp="m2v2">${fmt(m2,1)}kg • ${fmt(v2,1)}m/s</span>
              </div>
              <input type="range" data-ctrl="v2" min="-6" max="6" step="0.5" value="${v2}" class="w-full accent-amber-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Hệ số đàn hồi (e)</span>
                <span class="font-mono font-bold text-rose-400" data-disp="e">${fmt(e, 2)}</span>
              </div>
              <input type="range" data-ctrl="e" min="0" max="1" step="0.1" value="${e}" class="w-full accent-rose-500 cursor-pointer h-2">
            </div>
            <div class="flex items-center gap-1.5 pt-3">
              <button type="button" data-preset="elastic" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200">Đàn hồi (e=1)</button>
              <button type="button" data-preset="inelastic" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200">Mềm (e=0)</button>
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.collision-canvas');
    }

    bindEvents() {
      const c = this.container;
      const collideBtn = c.querySelector('[data-act="collide"]');
      const resetBtn = c.querySelector('[data-act="reset"]');

      collideBtn.addEventListener('click', () => {
        this.state.collided = true;
        this.render();
      });

      resetBtn.addEventListener('click', () => {
        this.state.collided = false;
        this.render();
      });

      ['v1', 'v2', 'e'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        inp.addEventListener('input', e => {
          this.state[k] = parseFloat(e.target.value);
          this.state.collided = false;
          this.render();
        });
      });

      c.querySelector('[data-preset="elastic"]').addEventListener('click', () => {
        this.state.e = 1.0;
        c.querySelector('[data-ctrl="e"]').value = 1.0;
        this.state.collided = false;
        this.render();
      });

      c.querySelector('[data-preset="inelastic"]').addEventListener('click', () => {
        this.state.e = 0.0;
        c.querySelector('[data-ctrl="e"]').value = 0.0;
        this.state.collided = false;
        this.render();
      });
      window.addEventListener('resize', () => this.render());
    }

    render() {
      if (!this.canvas) return;
      const width = Math.max(300, this.canvas.clientWidth || 500);
      const height = 260;
      this.canvas.width = width;
      this.canvas.height = height;
      const ctx = this.canvas.getContext('2d');

      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const { m1, m2, v1, v2, e, collided } = this.state;
      const col = this.computeCollision();

      const curV1 = collided ? col.v1_after : v1;
      const curV2 = collided ? col.v2_after : v2;
      const curP1 = collided ? col.p1_after : col.p1_before;
      const curP2 = collided ? col.p2_after : col.p2_before;
      const curPtot = collided ? col.p_total_after : col.p_total_before;

      const trackY = 160;
      // Air Track
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(30, trackY);
      ctx.lineTo(width - 30, trackY);
      ctx.stroke();

      // Air holes on track
      ctx.fillStyle = '#0284c7';
      for (let x = 40; x < width - 30; x += 16) {
        ctx.beginPath();
        ctx.arc(x, trackY + 8, 2, 0, TWO_PI);
        ctx.fill();
      }

      // Glider 1 & Glider 2 Positions
      const g1X = collided ? width / 2 - 70 : width / 2 - 120;
      const g2X = collided ? width / 2 + 30 : width / 2 + 60;
      const gW = 55, gH = 34;

      // Draw Glider 1
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(g1X, trackY - gH, gW, gH);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.strokeRect(g1X, trackY - gH, gW, gH);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`Xe 1: ${fmt(m1,1)}kg`, g1X + gW / 2, trackY - gH / 2 + 4);

      // Draw Glider 2
      ctx.fillStyle = '#b45309';
      ctx.fillRect(g2X, trackY - gH, gW, gH);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.strokeRect(g2X, trackY - gH, gW, gH);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`Xe 2: ${fmt(m2,1)}kg`, g2X + gW / 2, trackY - gH / 2 + 4);

      // Draw Momentum Vectors on gliders
      const drawPVec = (gx, gy, pVal, colHex, label) => {
        if (Math.abs(pVal) < 0.05) return;
        const len = clamp(pVal * 6, -60, 60);
        ctx.strokeStyle = colHex;
        ctx.fillStyle = colHex;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(gx, gy);
        ctx.lineTo(gx + len, gy);
        ctx.stroke();

        const dir = len >= 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(gx + len, gy);
        ctx.lineTo(gx + len - dir * 6, gy - 4);
        ctx.lineTo(gx + len - dir * 6, gy + 4);
        ctx.closePath();
        ctx.fill();

        ctx.font = 'bold 10px monospace';
        ctx.fillText(label, gx + len / 2, gy - 7);
      };

      drawPVec(g1X + gW / 2, trackY - gH - 12, curP1, '#38bdf8', `p⃗₁ (${fmt(curP1, 1)})`);
      drawPVec(g2X + gW / 2, trackY - gH - 12, curP2, '#f59e0b', `p⃗₂ (${fmt(curP2, 1)})`);

      const statusDisp = this.container.querySelector('[data-disp="collision-status"]');
      if (statusDisp) {
        statusDisp.textContent = collided
          ? `Sau va chạm: v₁' = ${fmt(curV1, 2)} m/s, v₂' = ${fmt(curV2, 2)} m/s`
          : `Trước va chạm: v₁ = ${fmt(v1, 2)} m/s, v₂ = ${fmt(v2, 2)} m/s`;
      }

      const summary = this.container.querySelector('[data-momentum-summary]');
      if (summary) {
        summary.innerHTML = `
          <div class="text-[11px] font-bold uppercase tracking-wider text-rose-400">Bảo Toàn Động Lượng (Bài 28 – 30)</div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-400">Tổng động lượng hệ p_hệ = p₁ + p₂</div>
            <div class="font-mono font-bold text-white text-sm mt-0.5">${fmt(col.p_total_before, 2)} kg·m/s = ${fmt(col.p_total_after, 2)} kg·m/s</div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Vận tốc v₁' sau va chạm</div>
              <div class="font-mono font-bold text-cyan-300 mt-0.5">${fmt(col.v1_after, 2)} m/s</div>
            </div>
            <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Vận tốc v₂' sau va chạm</div>
              <div class="font-mono font-bold text-amber-300 mt-0.5">${fmt(col.v2_after, 2)} m/s</div>
            </div>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
            Hệ số đàn hồi: e = ${fmt(e, 2)} (${e === 1 ? 'Va chạm hoàn toàn đàn hồi' : e === 0 ? 'Va chạm mềm (dính liền)' : 'Va chạm đàn hồi một phần'})
          </div>
          <div class="p-2 rounded-lg bg-rose-950/40 border border-rose-800/60 font-mono text-[11px] text-rose-200">
            Định luật bảo toàn: Trong hệ kín, p⃗₁ + p⃗₂ = p⃗₁' + p⃗₂' (không đổi)!
          </div>
        `;
      }
    }

    destroy() {}
  }

  // =========================================================================
  // MÔ PHỎNG 11: BIẾN DẠNG LÒ XO HOOKE & ÁP SUẤT CHẤT LỎNG (BÀI 33 – 34)
  // =========================================================================
  class FluidElasticSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.state = {
        mode: options.mode || 'spring_hooke', // 'spring_hooke' (Bài 33) | 'fluid_pressure' (Bài 34)
        k: options.k !== undefined ? options.k : 50.0, // N/m
        m: options.m !== undefined ? options.m : 0.20, // kg
        depth: options.depth !== undefined ? options.depth : 1.5, // m
        density: options.density !== undefined ? options.density : 1000.0, // kg/m^3 (Nước)
        g: 9.8
      };

      this.initDOM();
      this.bindEvents();
      this.render();
    }

    initDOM() {
      const { mode, k, m, depth, density } = this.state;
      this.container.innerHTML = `
        <div class="codehub-phys-sim bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-800 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-water"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Thí Nghiệm Định Luật Hooke &amp; Áp Suất Thủy Tĩnh</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20">Vật Lí 10 • Chương VII (Bài 33 – 34)</span>
                </div>
                <p class="text-xs text-cyan-100/90 mt-0.5">Khảo sát lực đàn hồi F_đh = k·|Δl|, áp suất chất lỏng p = p₀ + ρgh và lực đẩy Archimedes F_A</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button type="button" data-mode="spring_hooke" class="${mode === 'spring_hooke' ? 'px-2.5 py-1.5 rounded-xl bg-white text-teal-900 font-bold text-xs cursor-pointer' : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer'}">1. Định luật Hooke (Bài 33)</button>
              <button type="button" data-mode="fluid_pressure" class="${mode === 'fluid_pressure' ? 'px-2.5 py-1.5 rounded-xl bg-white text-teal-900 font-bold text-xs cursor-pointer' : 'px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs cursor-pointer'}">2. Áp suất chất lỏng (Bài 34)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800">
            <div class="lg:col-span-7 p-4 bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <canvas class="elastic-canvas block w-full h-[270px] rounded-xl border border-slate-850"></canvas>
            </div>
            <div class="lg:col-span-5 p-4 sm:p-5 bg-slate-900/90 flex flex-col justify-between">
              <div data-elastic-summary class="space-y-2 text-xs"></div>
            </div>
          </div>

          <!-- Controls -->
          <div class="p-4 sm:p-5 bg-slate-950/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Độ cứng lò xo (k) / Khối lượng riêng (ρ)</span>
                <span class="font-mono font-bold text-teal-400" data-disp="ctrl1">${mode === 'spring_hooke' ? fmt(k,0) + ' N/m' : fmt(density,0) + ' kg/m³'}</span>
              </div>
              <input type="range" data-ctrl="ctrl1" min="${mode === 'spring_hooke' ? 20 : 800}" max="${mode === 'spring_hooke' ? 150 : 13600}" step="${mode === 'spring_hooke' ? 5 : 100}" value="${mode === 'spring_hooke' ? k : density}" class="w-full accent-teal-500 cursor-pointer h-2">
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-xs">
                <span class="font-semibold text-slate-300">Khối lượng quả nặng (m) / Độ sâu (h)</span>
                <span class="font-mono font-bold text-cyan-400" data-disp="ctrl2">${mode === 'spring_hooke' ? fmt(m*1000,0) + ' g' : fmt(depth,2) + ' m'}</span>
              </div>
              <input type="range" data-ctrl="ctrl2" min="${mode === 'spring_hooke' ? 0.05 : 0.2}" max="${mode === 'spring_hooke' ? 0.5 : 5.0}" step="${mode === 'spring_hooke' ? 0.025 : 0.1}" value="${mode === 'spring_hooke' ? m : depth}" class="w-full accent-cyan-500 cursor-pointer h-2">
            </div>
            <div class="flex items-center gap-1.5 pt-3">
              <button type="button" data-act="reset" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200">
                <i class="fa-solid fa-rotate-left"></i> Đặt lại mặc định
              </button>
            </div>
          </div>
        </div>
      `;
      this.canvas = this.container.querySelector('.elastic-canvas');
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.mode = btn.dataset.mode;
          this.initDOM();
          this.bindEvents();
          this.render();
        });
      });

      const ctrl1 = c.querySelector('[data-ctrl="ctrl1"]');
      const ctrl2 = c.querySelector('[data-ctrl="ctrl2"]');
      if (ctrl1) {
        ctrl1.addEventListener('input', e => {
          if (this.state.mode === 'spring_hooke') this.state.k = parseFloat(e.target.value);
          else this.state.density = parseFloat(e.target.value);
          this.render();
        });
      }
      if (ctrl2) {
        ctrl2.addEventListener('input', e => {
          if (this.state.mode === 'spring_hooke') this.state.m = parseFloat(e.target.value);
          else this.state.depth = parseFloat(e.target.value);
          this.render();
        });
      }

      const resetBtn = c.querySelector('[data-act="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.state.k = 50.0;
          this.state.m = 0.20;
          this.state.depth = 1.5;
          this.state.density = 1000.0;
          this.initDOM();
          this.bindEvents();
          this.render();
        });
      }
      window.addEventListener('resize', () => this.render());
    }

    render() {
      if (!this.canvas) return;
      const width = Math.max(300, this.canvas.clientWidth || 500);
      const height = 270;
      this.canvas.width = width;
      this.canvas.height = height;
      const ctx = this.canvas.getContext('2d');

      ctx.fillStyle = '#090f1d';
      ctx.fillRect(0, 0, width, height);

      const { mode, k, m, depth, density, g } = this.state;

      if (mode === 'spring_hooke') {
        const deltaL = (m * g) / k; // m
        const deltaL_cm = deltaL * 100;
        const Fdh = k * deltaL;

        // Draw spring and hanging weight
        const topY = 35;
        const coils = 12;
        const baseH = 80;
        const stretchH = baseH + clamp(deltaL * 700, 0, 100);
        const sx = width / 3;

        // Ceiling
        ctx.fillStyle = '#334155';
        ctx.fillRect(sx - 35, topY - 8, 70, 8);
        ctx.strokeStyle = '#64748b';
        ctx.strokeRect(sx - 35, topY - 8, 70, 8);

        // Spring coils
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(sx, topY);
        for (let i = 0; i <= coils; i++) {
          const cy = topY + (i / coils) * stretchH;
          const xOffset = i % 2 === 0 ? -12 : 12;
          ctx.lineTo(sx + xOffset, cy);
        }
        ctx.lineTo(sx, topY + stretchH);
        ctx.stroke();

        // Hanging Weight
        const weightY = topY + stretchH;
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(sx - 18, weightY, 36, 28);
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(sx - 18, weightY, 36, 28);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${fmt(m * 1000, 0)}g`, sx, weightY + 18);

        // Vertical Ruler beside spring
        const rulerX = sx + 45;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(rulerX, topY, 24, 185);
        ctx.strokeStyle = '#475569';
        ctx.strokeRect(rulerX, topY, 24, 185);
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '8px monospace';
        for (let cm = 0; cm <= 18; cm += 2) {
          const ry = topY + cm * 10;
          ctx.beginPath();
          ctx.moveTo(rulerX, ry);
          ctx.lineTo(rulerX + 6, ry);
          ctx.stroke();
          ctx.fillText(cm + 'cm', rulerX + 15, ry + 3);
        }

        // Summary
        const summary = this.container.querySelector('[data-elastic-summary]');
        if (summary) {
          summary.innerHTML = `
            <div class="text-[11px] font-bold uppercase tracking-wider text-teal-400">Định Luật Hooke (Bài 33)</div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Độ dãn lò xo: Δl = mg / k</div>
              <div class="font-mono font-bold text-teal-300 text-sm mt-0.5">Δl = ${fmt(deltaL_cm, 2)} cm = ${fmt(deltaL, 4)} m</div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Lực đàn hồi (F_đh = k·Δl)</div>
                <div class="font-mono font-bold text-white mt-0.5">${fmt(Fdh, 2)} N</div>
              </div>
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Trọng lực (P = mg)</div>
                <div class="font-mono font-bold text-cyan-400 mt-0.5">${fmt(m * g, 2)} N</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
              Hệ số đàn hồi: k = ${fmt(k, 1)} N/m<br>
              Điều kiện cân bằng: F_đh = P = ${fmt(Fdh, 2)} N
            </div>
          `;
        }
      } else {
        // Fluid Pressure
        const p0 = 101325; // Pa (1 atm)
        const p_hydro = density * g * depth;
        const p_total = p0 + p_hydro;
        const p_atm = p_total / 101325;

        // Draw Tank with Fluid
        const tankX = 50, tankY = 40, tankW = width / 2, tankH = 190;
        ctx.fillStyle = density > 5000 ? 'rgba(148, 163, 184, 0.45)' : 'rgba(14, 165, 233, 0.35)';
        ctx.fillRect(tankX, tankY + 25, tankW, tankH - 25);
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 2.4;
        ctx.strokeRect(tankX, tankY, tankW, tankH);

        // Water surface
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(tankX, tankY + 25);
        ctx.lineTo(tankX + tankW, tankY + 25);
        ctx.stroke();

        // Pressure Sensor Probe at depth
        const probeY = clamp(tankY + 25 + (depth / 5.0) * (tankH - 35), tankY + 30, tankY + tankH - 15);
        const probeX = tankX + tankW / 2;

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(probeX, tankY);
        ctx.lineTo(probeX, probeY);
        ctx.stroke();

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(probeX, probeY, 6, 0, TWO_PI);
        ctx.fill();

        ctx.fillStyle = '#fef3c7';
        ctx.font = 'bold 10px monospace';
        ctx.fillText(`Độ sâu: ${fmt(depth, 2)}m`, probeX + 45, probeY + 4);

        // Summary
        const summary = this.container.querySelector('[data-elastic-summary]');
        if (summary) {
          summary.innerHTML = `
            <div class="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Áp Suất Chất Lỏng (Bài 34)</div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div class="text-[10px] text-slate-400">Áp suất thủy tĩnh p = p₀ + ρ·g·h</div>
              <div class="font-mono font-bold text-cyan-300 text-sm mt-0.5">${fmt(p_total, 0)} Pa = ${fmt(p_atm, 3)} atm</div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Áp suất cột chất lỏng (ρgh)</div>
                <div class="font-mono font-bold text-amber-300 mt-0.5">${fmt(p_hydro, 0)} Pa</div>
              </div>
              <div class="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <div class="text-[10px] text-slate-400">Áp suất khí quyển (p₀)</div>
                <div class="font-mono font-bold text-slate-300 mt-0.5">101.325 Pa</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
              Khối lượng riêng: ρ = ${fmt(density, 0)} kg/m³<br>
              Độ sâu đo: h = ${fmt(depth, 2)} m
            </div>
          `;
        }
      }
    }

    destroy() {}
  }

  // Public API
  

  // =========================================================================
  // MÔ PHỎNG 12: SÓNG NÂNG CAO, GIAO THOA, SÓNG DỪNG & ÂM HỌC (VẬT LÍ 11)
  // =========================================================================
  class WaveAcousticsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'interference'; // 'interference', 'standing_wave', 'sound_tube', 'em_spectrum'
      this.state = {
        running: true,
        t: 0,
        // Mode interference
        d: options.d !== undefined ? options.d : 24,       // cm
        lambda: options.lambda !== undefined ? options.lambda : 4.0, // cm
        freq: options.freq !== undefined ? options.freq : 10,   // Hz
        probeX: options.probeX !== undefined ? options.probeX : 6.0,  // cm
        probeY: options.probeY !== undefined ? options.probeY : 8.0,  // cm
        // Mode standing_wave
        harmonics: options.harmonics !== undefined ? options.harmonics : 3, // k = 1..6
        stringL: options.stringL !== undefined ? options.stringL : 1.2, // m
        boundary: options.boundary || 'fixed_fixed', // 'fixed_fixed' or 'fixed_free'
        // Mode sound_tube
        tuningFreq: options.tuningFreq || 440, // 440, 512, 1000 Hz
        waterLevel: options.waterLevel !== undefined ? options.waterLevel : 19.3, // cm (resonance ~ v/(4f))
        timeDiv: 0.5, // ms/div
        // Mode em_spectrum
        logLambda: options.logLambda !== undefined ? options.logLambda : -6.5 // ~500nm visible
      };

      this.rafId = null;
      this.lastTime = 0;
      this.initDOM();
      this.bindEvents();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initDOM() {
      const mode = this.mode;
      this.container.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl text-slate-100 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-water"></i> Thí Nghiệm Sóng & Âm Học
              </span>
              <span class="text-xs text-slate-400 font-mono" data-disp="status">Đang chạy</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <div class="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[360px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-4">
            <canvas class="w-full h-full block cursor-crosshair"></canvas>
          </div>

          <!-- Controls panel -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            ${this.renderControlsHTML()}
          </div>

          <!-- Live Readout / Theory Box -->
          <div data-disp="readout" class="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.readoutEl = this.container.querySelector('[data-disp="readout"]');
      this.statusEl = this.container.querySelector('[data-disp="status"]');
      this.btnToggle = this.container.querySelector('[data-act="toggle"]');
      this.btnReset = this.container.querySelector('[data-act="reset"]');
      this.updateCanvasDimensions();
    }

    renderControlsHTML() {
      const { mode, state } = this;
      if (mode === 'interference') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Khoảng cách 2 nguồn d:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="d">${fmt(state.d, 1)} cm</span>
            </div>
            <input type="range" data-ctrl="d" min="12" max="36" step="1" value="${state.d}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Bước sóng λ:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="lambda">${fmt(state.lambda, 1)} cm</span>
            </div>
            <input type="range" data-ctrl="lambda" min="2" max="8" step="0.5" value="${state.lambda}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Tọa độ điểm thử M(x, y):</span>
              <span class="font-mono font-bold text-emerald-400" data-disp="probe">(${fmt(state.probeX, 1)}, ${fmt(state.probeY, 1)}) cm</span>
            </div>
            <input type="range" data-ctrl="probeX" min="-15" max="15" step="0.5" value="${state.probeX}" class="w-full accent-emerald-500">
          </div>
        `;
      } else if (mode === 'standing_wave') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Số bó sóng k (Harmonics):</span>
              <span class="font-mono font-bold text-rose-400" data-disp="harmonics">${state.harmonics} bó</span>
            </div>
            <input type="range" data-ctrl="harmonics" min="1" max="6" step="1" value="${state.harmonics}" class="w-full accent-rose-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Chiều dài dây L:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="stringL">${fmt(state.stringL, 2)} m</span>
            </div>
            <input type="range" data-ctrl="stringL" min="0.6" max="2.4" step="0.1" value="${state.stringL}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <label class="text-slate-300 mb-1">Điều kiện biên:</label>
            <div class="flex items-center gap-3">
              <label class="inline-flex items-center gap-1 cursor-pointer">
                <input type="radio" name="boundary_${this.canvas ? this.canvas.id : 'b'}" data-ctrl="bound_fix" value="fixed_fixed" ${state.boundary === 'fixed_fixed' ? 'checked' : ''} class="accent-rose-500">
                <span>2 đầu cố định</span>
              </label>
              <label class="inline-flex items-center gap-1 cursor-pointer">
                <input type="radio" name="boundary_${this.canvas ? this.canvas.id : 'b'}" data-ctrl="bound_free" value="fixed_free" ${state.boundary === 'fixed_free' ? 'checked' : ''} class="accent-rose-500">
                <span>1 cố định, 1 tự do</span>
              </label>
            </div>
          </div>
        `;
      } else if (mode === 'sound_tube') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Tần số âm thoa f:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="tuningFreq">${state.tuningFreq} Hz</span>
            </div>
            <div class="flex gap-2">
              <button data-btn-freq="440" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] ${state.tuningFreq === 440 ? 'border border-amber-400 font-bold' : ''}">440Hz (A4)</button>
              <button data-btn-freq="512" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] ${state.tuningFreq === 512 ? 'border border-amber-400 font-bold' : ''}">512Hz (C5)</button>
              <button data-btn-freq="1000" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] ${state.tuningFreq === 1000 ? 'border border-amber-400 font-bold' : ''}">1000Hz</button>
            </div>
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Mực nước ống cộng hưởng:</span>
              <span class="font-mono font-bold text-cyan-400" data-disp="waterLevel">${fmt(state.waterLevel, 1)} cm</span>
            </div>
            <input type="range" data-ctrl="waterLevel" min="5" max="80" step="0.5" value="${state.waterLevel}" class="w-full accent-cyan-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Dao động kí Time/Div:</span>
              <span class="font-mono font-bold text-emerald-400" data-disp="timeDiv">${state.timeDiv} ms/div</span>
            </div>
            <input type="range" data-ctrl="timeDiv" min="0.2" max="2.0" step="0.1" value="${state.timeDiv}" class="w-full accent-emerald-500">
          </div>
        `;
      } else {
        // em_spectrum
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 col-span-1 sm:col-span-2">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Bước sóng chân không λ:</span>
              <span class="font-mono font-bold text-violet-400" data-disp="lambdaVal">500 nm (Nhìn thấy)</span>
            </div>
            <input type="range" data-ctrl="logLambda" min="-12" max="4" step="0.1" value="${state.logLambda}" class="w-full accent-violet-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Tốc độ ánh sáng chân không:</span>
            <span class="font-mono font-bold text-white text-xs">c = 3,00 × 10⁸ m/s</span>
          </div>
        `;
      }
    }

    updateCanvasDimensions() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 300;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.dpr = dpr;
      this.width = w;
      this.height = h;
    }

    bindEvents() {
      this.btnToggle.addEventListener('click', () => {
        this.state.running = !this.state.running;
        this.btnToggle.querySelector('span').textContent = this.state.running ? 'Tạm dừng' : 'Tiếp tục';
        this.btnToggle.querySelector('i').className = this.state.running ? 'fa-solid fa-pause' : 'fa-solid fa-play';
        if (this.statusEl) this.statusEl.textContent = this.state.running ? 'Đang chạy' : 'Đã tạm dừng';
      });

      this.btnReset.addEventListener('click', () => {
        this.state.t = 0;
        this.render();
      });

      this.container.addEventListener('input', (e) => {
        const ctrl = e.target.getAttribute('data-ctrl');
        if (!ctrl) return;
        const val = parseFloat(e.target.value);
        if (ctrl === 'd') {
          this.state.d = val;
          const dDisp = this.container.querySelector('[data-disp="d"]');
          if (dDisp) dDisp.textContent = `${fmt(val, 1)} cm`;
        } else if (ctrl === 'lambda') {
          this.state.lambda = val;
          const lDisp = this.container.querySelector('[data-disp="lambda"]');
          if (lDisp) lDisp.textContent = `${fmt(val, 1)} cm`;
        } else if (ctrl === 'probeX') {
          this.state.probeX = val;
          const pDisp = this.container.querySelector('[data-disp="probe"]');
          if (pDisp) pDisp.textContent = `(${fmt(val, 1)}, ${fmt(this.state.probeY, 1)}) cm`;
        } else if (ctrl === 'harmonics') {
          this.state.harmonics = parseInt(val, 10);
          const hDisp = this.container.querySelector('[data-disp="harmonics"]');
          if (hDisp) hDisp.textContent = `${this.state.harmonics} bó`;
        } else if (ctrl === 'stringL') {
          this.state.stringL = val;
          const sDisp = this.container.querySelector('[data-disp="stringL"]');
          if (sDisp) sDisp.textContent = `${fmt(val, 2)} m`;
        } else if (ctrl === 'bound_fix' || ctrl === 'bound_free') {
          this.state.boundary = e.target.value;
        } else if (ctrl === 'waterLevel') {
          this.state.waterLevel = val;
          const wDisp = this.container.querySelector('[data-disp="waterLevel"]');
          if (wDisp) wDisp.textContent = `${fmt(val, 1)} cm`;
        } else if (ctrl === 'timeDiv') {
          this.state.timeDiv = val;
          const tDisp = this.container.querySelector('[data-disp="timeDiv"]');
          if (tDisp) tDisp.textContent = `${val} ms/div`;
        } else if (ctrl === 'logLambda') {
          this.state.logLambda = val;
        }
        this.render();
      });

      this.container.addEventListener('click', (e) => {
        const btnFreq = e.target.closest('[data-btn-freq]');
        if (btnFreq) {
          this.state.tuningFreq = parseInt(btnFreq.getAttribute('data-btn-freq'), 10);
          this.container.querySelectorAll('[data-btn-freq]').forEach(b => b.classList.remove('border', 'border-amber-400', 'font-bold'));
          btnFreq.classList.add('border', 'border-amber-400', 'font-bold');
          const fDisp = this.container.querySelector('[data-disp="tuningFreq"]');
          if (fDisp) fDisp.textContent = `${this.state.tuningFreq} Hz`;
          this.render();
        }
      });
    }

    loop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      const dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;

      if (this.state.running) {
        this.state.t += Math.min(dt, 0.05);
        this.render();
      }
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      this.updateCanvasDimensions();
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dpr = this.dpr || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (this.mode === 'interference') {
        this.renderInterference(ctx, w, h);
      } else if (this.mode === 'standing_wave') {
        this.renderStandingWave(ctx, w, h);
      } else if (this.mode === 'sound_tube') {
        this.renderSoundTube(ctx, w, h);
      } else {
        this.renderEMSpectrum(ctx, w, h);
      }

      ctx.restore();
    }

    renderInterference(ctx, w, h) {
      const { d, lambda, probeX, probeY, t } = this.state;
      const cx = w / 2;
      const cy = h / 2 + 10;
      const scale = 8; // 8 px / cm

      const s1x = cx - (d * scale) / 2;
      const s2x = cx + (d * scale) / 2;
      const sy = cy;

      // Draw hyperbolic fringes (k = -4 to 4)
      ctx.lineWidth = 1.5;
      for (let k = -4; k <= 4; k++) {
        const deltaD = k * lambda;
        if (Math.abs(deltaD) >= d) continue;

        ctx.strokeStyle = k === 0 ? '#38bdf8' : '#f43f5e';
        ctx.setLineDash(k === 0 ? [] : []);
        ctx.beginPath();
        for (let py = -h / 2; py <= h / 2; py += 4) {
          // Hyperbola x = (d_2^2 - d_1^2) / (4 * d) approx
          const yCm = py / scale;
          const a = deltaD / 2;
          const c = d / 2;
          const b2 = c * c - a * a;
          if (b2 <= 0) continue;
          const xCm = a * Math.sqrt(1 + (yCm * yCm) / b2);
          const px = cx + (k >= 0 ? xCm : -xCm) * scale;
          if (py === -h / 2) ctx.moveTo(px, cy + py);
          else ctx.lineTo(px, cy + py);
        }
        ctx.stroke();

        // Minima fringes (deltaD = (k + 0.5) * lambda)
        const minDelta = (k + 0.5) * lambda;
        if (Math.abs(minDelta) < d) {
          ctx.strokeStyle = '#60a5fa';
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          for (let py = -h / 2; py <= h / 2; py += 4) {
            const yCm = py / scale;
            const a = minDelta / 2;
            const c = d / 2;
            const b2 = c * c - a * a;
            if (b2 <= 0) continue;
            const xCm = a * Math.sqrt(1 + (yCm * yCm) / b2);
            const px = cx + (minDelta >= 0 ? xCm : -xCm) * scale;
            if (py === -h / 2) ctx.moveTo(px, cy + py);
            else ctx.lineTo(px, cy + py);
          }
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Draw Sources S1 & S2
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.arc(s1x, sy, 6, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(s2x, sy, 6, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('S₁ (Nguồn 1)', s1x - 30, sy + 20);
      ctx.fillText('S₂ (Nguồn 2)', s2x - 10, sy + 20);

      // Probe Point M
      const pmx = cx + probeX * scale;
      const pmy = cy - probeY * scale;

      const d1 = Math.sqrt(Math.pow(probeX + d / 2, 2) + Math.pow(probeY, 2));
      const d2 = Math.sqrt(Math.pow(probeX - d / 2, 2) + Math.pow(probeY, 2));
      const deltaD = Math.abs(d2 - d1);
      const ampRatio = Math.abs(Math.cos((Math.PI * (d2 - d1)) / lambda));

      // Draw rays from S1, S2 to M
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.setLineDash([2, 2]);
      ctx.beginPath(); ctx.moveTo(s1x, sy); ctx.lineTo(pmx, pmy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(s2x, sy); ctx.lineTo(pmx, pmy); ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#10b981';
      ctx.beginPath(); ctx.arc(pmx, pmy, 7, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillText(`M (${fmt(probeX, 1)}, ${fmt(probeY, 1)})`, pmx + 10, pmy - 6);

      // Readout
      if (this.readoutEl) {
        const kMax = deltaD / lambda;
        const isMax = Math.abs(kMax - Math.round(kMax)) < 0.08;
        const isMin = Math.abs(kMax - (Math.floor(kMax) + 0.5)) < 0.08;
        let fringeStatus = 'Điểm dao động với biên độ trung gian';
        if (isMax) fringeStatus = `<span class="text-rose-400 font-bold">CỰC ĐẠI GIAO THOA (k = ${Math.round(kMax)}, A_M = 2A)</span>`;
        else if (isMin) fringeStatus = `<span class="text-sky-400 font-bold">CỰC TIỂU GIAO THOA (Đứng yên triệt tiêu, A_M = 0)</span>`;

        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">d₁ (MS₁):</span> <b class="text-white font-mono">${fmt(d1, 2)} cm</b></div>
            <div><span class="text-slate-400">d₂ (MS₂):</span> <b class="text-white font-mono">${fmt(d2, 2)} cm</b></div>
            <div><span class="text-slate-400">|d₂ − d₁|:</span> <b class="text-amber-300 font-mono">${fmt(deltaD, 2)} cm</b></div>
            <div><span class="text-slate-400">Biên độ A_M:</span> <b class="text-emerald-400 font-mono">${fmt(2 * ampRatio, 2)} A</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Trạng thái tại M: ${fringeStatus}<br>
            Điều kiện cực đại: d₂ − d₁ = k·λ (${fmt(lambda, 1)}k) • Điều kiện cực tiểu: d₂ − d₁ = (k + 0,5)·λ
          </div>
        `;
      }
    }

    renderStandingWave(ctx, w, h) {
      const { harmonics, stringL, boundary, t } = this.state;
      const padX = 40;
      const plotW = w - padX * 2;
      const midY = h / 2;
      const ampMax = 45;
      const omega = 8.0;

      // Draw Fixed End clamp
      ctx.fillStyle = '#475569';
      ctx.fillRect(padX - 8, midY - 60, 8, 120);

      if (boundary === 'fixed_fixed') {
        ctx.fillRect(padX + plotW, midY - 60, 8, 120);
      }

      // Draw Standing Wave envelope (dashed)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      for (let px = 0; px <= plotW; px += 2) {
        const xRatio = px / plotW;
        const env = boundary === 'fixed_fixed'
          ? Math.sin(xRatio * Math.PI * harmonics)
          : Math.sin(xRatio * Math.PI * (harmonics - 0.5));
        const py = midY + ampMax * env;
        if (px === 0) ctx.moveTo(padX + px, py);
        else ctx.lineTo(padX + px, py);
      }
      ctx.stroke();

      ctx.beginPath();
      for (let px = 0; px <= plotW; px += 2) {
        const xRatio = px / plotW;
        const env = boundary === 'fixed_fixed'
          ? Math.sin(xRatio * Math.PI * harmonics)
          : Math.sin(xRatio * Math.PI * (harmonics - 0.5));
        const py = midY - ampMax * env;
        if (px === 0) ctx.moveTo(padX + px, py);
        else ctx.lineTo(padX + px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Oscillating String
      const timeMod = Math.cos(omega * t);
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let px = 0; px <= plotW; px += 2) {
        const xRatio = px / plotW;
        const env = boundary === 'fixed_fixed'
          ? Math.sin(xRatio * Math.PI * harmonics)
          : Math.sin(xRatio * Math.PI * (harmonics - 0.5));
        const py = midY + ampMax * env * timeMod;
        if (px === 0) ctx.moveTo(padX + px, py);
        else ctx.lineTo(padX + px, py);
      }
      ctx.stroke();

      // Draw Nodes (Nút) and Antinodes (Bụng)
      const numNodes = boundary === 'fixed_fixed' ? harmonics + 1 : harmonics;
      const numAntinodes = harmonics;

      for (let i = 0; i <= harmonics; i++) {
        const frac = boundary === 'fixed_fixed'
          ? i / harmonics
          : i / (harmonics - 0.5);
        if (frac <= 1.0) {
          const nx = padX + frac * plotW;
          // Draw Node circle (red)
          ctx.fillStyle = '#ef4444';
          ctx.beginPath(); ctx.arc(nx, midY, 5, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#f87171';
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText(`Nút`, nx - 10, midY + 16);
        }

        // Antinodes
        if (i < harmonics) {
          const afrac = boundary === 'fixed_fixed'
            ? (i + 0.5) / harmonics
            : (i + 0.5) / (harmonics - 0.5);
          if (afrac <= 1.0) {
            const ax = padX + afrac * plotW;
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath(); ctx.arc(ax, midY, 4, 0, Math.PI * 2); ctx.fill();
            ctx.font = 'bold 10px sans-serif';
            ctx.fillText(`Bụng`, ax - 12, midY - 24);
          }
        }
      }

      // Readout
      if (this.readoutEl) {
        const lambdaCalc = boundary === 'fixed_fixed'
          ? (2 * stringL) / harmonics
          : (4 * stringL) / (2 * harmonics - 1);
        const formulaStr = boundary === 'fixed_fixed'
          ? `L = k·(λ/2) = ${harmonics}·(λ/2)`
          : `L = (2k − 1)·(λ/4) = ${2 * harmonics - 1}·(λ/4)`;

        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Chiều dài dây L:</span> <b class="text-white font-mono">${fmt(stringL, 2)} m</b></div>
            <div><span class="text-slate-400">Bước sóng λ:</span> <b class="text-amber-400 font-mono">${fmt(lambdaCalc, 3)} m</b></div>
            <div><span class="text-slate-400">Số nút sóng:</span> <b class="text-rose-400 font-mono">${numNodes}</b></div>
            <div><span class="text-slate-400">Số bụng sóng:</span> <b class="text-emerald-400 font-mono">${numAntinodes}</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Điều kiện sóng dừng: <span class="text-amber-300 font-bold">${formulaStr}</span><br>
            Khoảng cách giữa 2 nút liên tiếp = khoảng cách giữa 2 bụng liên tiếp = λ/2 = <span class="font-mono text-cyan-300">${fmt(lambdaCalc / 2, 3)} m</span>
          </div>
        `;
      }
    }

    renderSoundTube(ctx, w, h) {
      const { tuningFreq, waterLevel, timeDiv, t } = this.state;
      const vSound = 340; // m/s
      const lambdaSound = (vSound / tuningFreq) * 100; // cm (~77.3 cm for 440Hz)
      const res1 = lambdaSound / 4; // cm (~19.3 cm)
      const res2 = (3 * lambdaSound) / 4; // cm (~58.0 cm)

      // Oscilloscope Screen on left (width 50%)
      const oscW = Math.min(w * 0.48, 280);
      const oscH = h - 20;
      const oscX = 15;
      const oscY = 10;

      // Draw Oscilloscope Bezel & Grid
      ctx.fillStyle = '#022c22'; // Dark green CRT
      ctx.fillRect(oscX, oscY, oscW, oscH);
      ctx.strokeStyle = '#064e3b';
      ctx.lineWidth = 1;

      // 8x8 divisions
      const numDivsX = 8;
      const numDivsY = 6;
      for (let i = 0; i <= numDivsX; i++) {
        const gx = oscX + (i / numDivsX) * oscW;
        ctx.beginPath(); ctx.moveTo(gx, oscY); ctx.lineTo(gx, oscY + oscH); ctx.stroke();
      }
      for (let j = 0; j <= numDivsY; j++) {
        const gy = oscY + (j / numDivsY) * oscH;
        ctx.beginPath(); ctx.moveTo(oscX, gy); ctx.lineTo(oscX + oscW, gy); ctx.stroke();
      }

      // CRT Waveform (green glowing sine)
      const midOscY = oscY + oscH / 2;
      const periodMs = (1000 / tuningFreq); // ms
      const totalTimeSpanMs = numDivsX * timeDiv; // ms across screen
      const oscAmp = 35;

      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      for (let px = 0; px <= oscW; px += 2) {
        const timeMs = (px / oscW) * totalTimeSpanMs + t * 1000;
        const py = midOscY - oscAmp * Math.sin((2 * Math.PI * timeMs) / periodMs);
        if (px === 0) ctx.moveTo(oscX + px, py);
        else ctx.lineTo(oscX + px, py);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#6ee7b7';
      ctx.font = 'bold 10px monospace';
      ctx.fillText(`CH1: ${timeDiv} ms/div • f = ${tuningFreq} Hz`, oscX + 8, oscY + 16);

      // Sound Tube on Right
      const tubeX = oscX + oscW + 40;
      const tubeW = 45;
      const tubeH = oscH - 20;
      const tubeY = oscY + 10;

      // Draw Glass tube
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.strokeRect(tubeX, tubeY, tubeW, tubeH);

      // Water inside tube (height proportional to waterLevel 0..80 cm)
      const waterH = Math.min((waterLevel / 80) * tubeH, tubeH);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.fillRect(tubeX + 2, tubeY + tubeH - waterH, tubeW - 4, waterH);

      // Air column length
      const airColLength = (80 - waterLevel);
      const isResonant1 = Math.abs(airColLength - res1) < 2.5;
      const isResonant2 = Math.abs(airColLength - res2) < 2.5;

      // Draw Tuning Fork at top of tube
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(tubeX + 12, tubeY - 18, 5, 14);
      ctx.fillRect(tubeX + 28, tubeY - 18, 5, 14);
      ctx.fillRect(tubeX + 12, tubeY - 4, 21, 4);
      ctx.fillRect(tubeX + 20, tubeY, 5, 8);

      // Sound Waves exiting fork
      if (isResonant1 || isResonant2) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.5;
        for (let r = 8; r <= 24; r += 8) {
          ctx.beginPath();
          ctx.arc(tubeX + 22, tubeY - 20, r, Math.PI * 1.1, Math.PI * 1.9);
          ctx.stroke();
        }
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('CỘNG HƯỞNG ÂM CỰC ĐẠI!', tubeX + tubeW + 15, tubeY + 30);
      } else {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText('Âm thoa phát âm thanh', tubeX + tubeW + 15, tubeY + 30);
      }

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '10px monospace';
      ctx.fillText(`Cột khí L = ${fmt(airColLength, 1)} cm`, tubeX + tubeW + 15, tubeY + 55);
      ctx.fillText(`Vị trí cộng hưởng 1: ${fmt(res1, 1)} cm`, tubeX + tubeW + 15, tubeY + 75);
      ctx.fillText(`Vị trí cộng hưởng 2: ${fmt(res2, 1)} cm`, tubeX + tubeW + 15, tubeY + 95);

      if (this.readoutEl) {
        const divsPerCycle = periodMs / timeDiv;
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Chu kỳ T trên dao động kí:</span> <b class="text-emerald-400 font-mono">${fmt(periodMs, 3)} ms</b></div>
            <div><span class="text-slate-400">Số ô quét (1 chu kỳ):</span> <b class="text-white font-mono">${fmt(divsPerCycle, 2)} div</b></div>
            <div><span class="text-slate-400">Tần số xác định f = 1/T:</span> <b class="text-amber-400 font-mono">${fmt(1000 / periodMs, 1)} Hz</b></div>
            <div><span class="text-slate-400">Tốc độ truyền âm v:</span> <b class="text-cyan-300 font-mono">${vSound} m/s</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Nguyên lý đo tốc độ âm qua 2 vị trí cộng hưởng liên tiếp: <span class="text-amber-300 font-bold">L₂ − L₁ = λ/2</span> 
            ⇒ λ = 2·(${fmt(res2 - res1, 1)} cm) = ${fmt(lambdaSound, 1)} cm 
            ⇒ <span class="text-emerald-400 font-bold">v = λ·f = ${fmt((lambdaSound / 100) * tuningFreq, 1)} m/s</span>
          </div>
        `;
      }
    }

    renderEMSpectrum(ctx, w, h) {
      const { logLambda } = this.state;
      const lambdaM = Math.pow(10, logLambda);
      const c = 3.0e8;
      const fHz = c / lambdaM;
      const h_eV = 4.135667e-15;
      const energy_eV = h_eV * fHz;

      // Spectrum Bands definition
      const bands = [
        { name: 'Tia Gamma (γ)', min: -14, max: -11, color: '#a855f7', desc: 'Xạ trị, phản ứng hạt nhân, nguy hiểm cao' },
        { name: 'Tia X (Röntgen)', min: -11, max: -8, color: '#6366f1', desc: 'Chụp X-quang y tế, kiểm tra an ninh sân bay' },
        { name: 'Tia Tử ngoại (UV)', min: -8, max: -6.4, color: '#3b82f6', desc: 'Diệt khuẩn, tổng hợp Vitamin D, phát quang' },
        { name: 'Ánh sáng nhìn thấy', min: -6.4, max: -6.1, color: '#10b981', desc: 'Quang phổ 7 màu: Đỏ đến Tím (380-760 nm)' },
        { name: 'Tia Hồng ngoại (IR)', min: -6.1, max: -3, color: '#ef4444', desc: 'Tác dụng nhiệt, camera nhiệt, điều khiển từ xa' },
        { name: 'Sóng Vi ba (Microwave)', min: -3, max: -1, color: '#f97316', desc: 'Lò vi sóng, mạng Wifi, viễn thông di động' },
        { name: 'Sóng Vô tuyến (Radio)', min: -1, max: 4, color: '#eab308', desc: 'Truyền thanh AM/FM, truyền hình vệ tinh, Radar' }
      ];

      // Find current band
      let currentBand = bands[bands.length - 1];
      for (const b of bands) {
        if (logLambda >= b.min && logLambda < b.max) {
          currentBand = b;
          break;
        }
      }

      // Draw Gradient Bar across width
      const barX = 20;
      const barY = h / 2 - 25;
      const barW = w - 40;
      const barH = 30;

      const grad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
      grad.addColorStop(0.0, '#a855f7');
      grad.addColorStop(0.18, '#6366f1');
      grad.addColorStop(0.35, '#3b82f6');
      grad.addColorStop(0.48, '#10b981');
      grad.addColorStop(0.60, '#ef4444');
      grad.addColorStop(0.80, '#f97316');
      grad.addColorStop(1.0, '#eab308');

      ctx.fillStyle = grad;
      ctx.fillRect(barX, barY, barW, barH);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.strokeRect(barX, barY, barW, barH);

      // Draw Marker Indicator
      const markerFrac = (logLambda - (-12)) / (4 - (-12));
      const markerX = barX + markerFrac * barW;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(markerX, barY - 8);
      ctx.lineTo(markerX - 6, barY - 18);
      ctx.lineTo(markerX + 6, barY - 18);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(markerX, barY);
      ctx.lineTo(markerX, barY + barH);
      ctx.stroke();

      // Band labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.fillText('10⁻¹² m (Gamma)', barX, barY + barH + 16);
      ctx.fillText('10⁻⁷ m (Quang học)', barX + barW * 0.45, barY + barH + 16);
      ctx.fillText('10⁴ m (Radio)', barX + barW - 70, barY + barH + 16);

      // Current band highlighted title
      ctx.fillStyle = currentBand.color;
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(currentBand.name, barX, barY - 30);

      // Readout
      if (this.readoutEl) {
        let lambdaFormatted = '';
        if (lambdaM < 1e-9) lambdaFormatted = `${fmt(lambdaM * 1e12, 2)} pm`;
        else if (lambdaM < 1e-6) lambdaFormatted = `${fmt(lambdaM * 1e9, 1)} nm`;
        else if (lambdaM < 1e-3) lambdaFormatted = `${fmt(lambdaM * 1e6, 2)} μm`;
        else if (lambdaM < 1) lambdaFormatted = `${fmt(lambdaM * 1e3, 2)} mm`;
        else lambdaFormatted = `${fmt(lambdaM, 2)} m`;

        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Bước sóng λ:</span> <b class="text-white font-mono">${lambdaFormatted}</b></div>
            <div><span class="text-slate-400">Tần số f = c/λ:</span> <b class="text-amber-400 font-mono">${fHz.toExponential(2)} Hz</b></div>
            <div><span class="text-slate-400">Năng lượng photon ε:</span> <b class="text-violet-300 font-mono">${energy_eV < 0.01 ? energy_eV.toExponential(2) : fmt(energy_eV, 2)} eV</b></div>
            <div><span class="text-slate-400">Vùng quang phổ:</span> <b style="color:${currentBand.color}">${currentBand.name}</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Đặc điểm & ứng dụng: <span class="text-slate-200 font-medium">${currentBand.desc}</span><br>
            Quy luật: Bước sóng λ càng ngắn ⇒ Tần số f và năng lượng photon ε càng lớn ⇒ Khả năng đâm xuyên và ion hóa càng mạnh.
          </div>
        `;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }


  // =========================================================================
  // MÔ PHỎNG 13: ĐIỆN TRƯỜNG, ĐỊNH LUẬT COULOMB & TỤ ĐIỆN (VẬT LÍ 11)
  // =========================================================================
  class ElectrostaticsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'coulomb'; // 'coulomb', 'field_lines', 'uniform_field', 'potential', 'capacitor'
      this.state = {
        running: true,
        t: 0,
        // Coulomb
        q1: options.q1 !== undefined ? options.q1 : 2.0, // microCoulomb
        q2: options.q2 !== undefined ? options.q2 : -3.0, // microCoulomb
        rCm: options.rCm !== undefined ? options.rCm : 8.0, // cm
        // Uniform field
        voltageU: options.voltageU !== undefined ? options.voltageU : 200, // V
        plateD: options.plateD !== undefined ? options.plateD : 4.0, // cm
        beamParticles: [],
        // Capacitor
        capArea: options.capArea !== undefined ? options.capArea : 200, // cm^2
        capDist: options.capDist !== undefined ? options.capDist : 2.0, // mm
        dielectricEps: options.dielectricEps !== undefined ? options.dielectricEps : 1.0, // Air = 1
        circuitMode: 'single', // 'single', 'series', 'parallel'
        cap2: 50 // pF
      };

      this.rafId = null;
      this.lastTime = 0;
      this.initDOM();
      this.bindEvents();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl text-slate-100 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-bolt"></i> Thí Nghiệm Điện Trường & Tụ Điện
              </span>
              <span class="text-xs text-slate-400 font-mono" data-disp="status">Đang hoạt động</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="reset" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <div class="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[360px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-4">
            <canvas class="w-full h-full block"></canvas>
          </div>

          <!-- Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            ${this.renderControlsHTML()}
          </div>

          <!-- Readout -->
          <div data-disp="readout" class="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.readoutEl = this.container.querySelector('[data-disp="readout"]');
      this.btnReset = this.container.querySelector('[data-act="reset"]');
      this.updateCanvasDimensions();
    }

    renderControlsHTML() {
      const { mode, state } = this;
      if (mode === 'coulomb') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Điện tích q₁:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="q1">${state.q1 > 0 ? '+' : ''}${fmt(state.q1, 1)} μC</span>
            </div>
            <input type="range" data-ctrl="q1" min="-5" max="5" step="0.5" value="${state.q1}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Điện tích q₂:</span>
              <span class="font-mono font-bold text-rose-400" data-disp="q2">${state.q2 > 0 ? '+' : ''}${fmt(state.q2, 1)} μC</span>
            </div>
            <input type="range" data-ctrl="q2" min="-5" max="5" step="0.5" value="${state.q2}" class="w-full accent-rose-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Khoảng cách r:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="rCm">${fmt(state.rCm, 1)} cm</span>
            </div>
            <input type="range" data-ctrl="rCm" min="2" max="16" step="0.5" value="${state.rCm}" class="w-full accent-amber-500">
          </div>
        `;
      } else if (mode === 'field_lines' || mode === 'potential') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 col-span-1 sm:col-span-2">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Hệ điện tích điểm:</span>
              <span class="font-mono font-bold text-amber-400">Lưỡng cực (+Q và −Q)</span>
            </div>
            <div class="flex gap-2">
              <button data-btn-cfg="dipole" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] border border-amber-400 font-bold">Lưỡng cực (+, −)</button>
              <button data-btn-cfg="repulsion" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px]">Cùng dấu (+, +)</button>
              <button data-btn-cfg="single" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px]">Đơn lẻ (+Q)</button>
            </div>
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Hằng số điện môi:</span>
            <span class="font-mono font-bold text-white text-xs">k = 9,0 × 10⁹ N·m²/C²</span>
          </div>
        `;
      } else if (mode === 'uniform_field') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Hiệu điện thế U:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="voltageU">${state.voltageU} V</span>
            </div>
            <input type="range" data-ctrl="voltageU" min="50" max="500" step="10" value="${state.voltageU}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Khoảng cách 2 bản d:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="plateD">${fmt(state.plateD, 1)} cm</span>
            </div>
            <input type="range" data-ctrl="plateD" min="2" max="8" step="0.5" value="${state.plateD}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Cường độ điện trường đều:</span>
            <span class="font-mono font-bold text-emerald-400 text-xs" data-disp="eFieldCalc">${fmt((state.voltageU / (state.plateD / 100)), 0)} V/m</span>
          </div>
        `;
      } else {
        // capacitor
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Diện tích bản cực S:</span>
              <span class="font-mono font-bold text-cyan-400" data-disp="capArea">${state.capArea} cm²</span>
            </div>
            <input type="range" data-ctrl="capArea" min="50" max="500" step="10" value="${state.capArea}" class="w-full accent-cyan-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Khoảng cách bản d:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="capDist">${fmt(state.capDist, 1)} mm</span>
            </div>
            <input type="range" data-ctrl="capDist" min="0.5" max="5.0" step="0.5" value="${state.capDist}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Lớp điện môi ε:</span>
              <span class="font-mono font-bold text-violet-400" data-disp="dielectricEps">ε = ${state.dielectricEps}</span>
            </div>
            <div class="flex gap-2">
              <button data-btn-eps="1.0" class="flex-1 py-1 px-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white text-[11px] ${state.dielectricEps === 1.0 ? 'border border-violet-400 font-bold' : ''}">Khí (1.0)</button>
              <button data-btn-eps="2.1" class="flex-1 py-1 px-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white text-[11px] ${state.dielectricEps === 2.1 ? 'border border-violet-400 font-bold' : ''}">Teflon (2.1)</button>
              <button data-btn-eps="6.0" class="flex-1 py-1 px-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white text-[11px] ${state.dielectricEps === 6.0 ? 'border border-violet-400 font-bold' : ''}">Mica (6.0)</button>
            </div>
          </div>
        `;
      }
    }

    updateCanvasDimensions() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 300;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.dpr = dpr;
      this.width = w;
      this.height = h;
    }

    bindEvents() {
      this.btnReset.addEventListener('click', () => {
        this.state.t = 0;
        this.state.beamParticles = [];
        this.render();
      });

      this.container.addEventListener('input', (e) => {
        const ctrl = e.target.getAttribute('data-ctrl');
        if (!ctrl) return;
        const val = parseFloat(e.target.value);
        if (ctrl === 'q1') {
          this.state.q1 = val;
          const d = this.container.querySelector('[data-disp="q1"]');
          if (d) d.textContent = `${val > 0 ? '+' : ''}${fmt(val, 1)} μC`;
        } else if (ctrl === 'q2') {
          this.state.q2 = val;
          const d = this.container.querySelector('[data-disp="q2"]');
          if (d) d.textContent = `${val > 0 ? '+' : ''}${fmt(val, 1)} μC`;
        } else if (ctrl === 'rCm') {
          this.state.rCm = val;
          const d = this.container.querySelector('[data-disp="rCm"]');
          if (d) d.textContent = `${fmt(val, 1)} cm`;
        } else if (ctrl === 'voltageU') {
          this.state.voltageU = val;
          const d = this.container.querySelector('[data-disp="voltageU"]');
          if (d) d.textContent = `${val} V`;
          const ef = this.container.querySelector('[data-disp="eFieldCalc"]');
          if (ef) ef.textContent = `${fmt(val / (this.state.plateD / 100), 0)} V/m`;
        } else if (ctrl === 'plateD') {
          this.state.plateD = val;
          const d = this.container.querySelector('[data-disp="plateD"]');
          if (d) d.textContent = `${fmt(val, 1)} cm`;
          const ef = this.container.querySelector('[data-disp="eFieldCalc"]');
          if (ef) ef.textContent = `${fmt(this.state.voltageU / (val / 100), 0)} V/m`;
        } else if (ctrl === 'capArea') {
          this.state.capArea = val;
          const d = this.container.querySelector('[data-disp="capArea"]');
          if (d) d.textContent = `${val} cm²`;
        } else if (ctrl === 'capDist') {
          this.state.capDist = val;
          const d = this.container.querySelector('[data-disp="capDist"]');
          if (d) d.textContent = `${fmt(val, 1)} mm`;
        }
        this.render();
      });

      this.container.addEventListener('click', (e) => {
        const btnEps = e.target.closest('[data-btn-eps]');
        if (btnEps) {
          this.state.dielectricEps = parseFloat(btnEps.getAttribute('data-btn-eps'));
          this.container.querySelectorAll('[data-btn-eps]').forEach(b => b.classList.remove('border', 'border-violet-400', 'font-bold'));
          btnEps.classList.add('border', 'border-violet-400', 'font-bold');
          const d = this.container.querySelector('[data-disp="dielectricEps"]');
          if (d) d.textContent = `ε = ${this.state.dielectricEps}`;
          this.render();
        }
      });
    }

    loop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      const dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;

      this.state.t += Math.min(dt, 0.05);

      // Particle generator for uniform field
      if (this.mode === 'uniform_field') {
        if (!this.state.beamParticles) this.state.beamParticles = [];
        if (Math.random() < 0.25) {
          this.state.beamParticles.push({ x: 30, y: this.height / 2, vx: 220, vy: 0 });
        }
        // Update particles
        const E = this.state.voltageU / (this.state.plateD / 100);
        const aY = (E * 0.0003); // scaled deflection
        for (let i = this.state.beamParticles.length - 1; i >= 0; i--) {
          const p = this.state.beamParticles[i];
          p.x += p.vx * dt;
          p.y -= aY * p.vx * dt; // deflecting upwards to positive plate
          if (p.x > this.width || p.y < 30 || p.y > this.height - 30) {
            this.state.beamParticles.splice(i, 1);
          }
        }
      }

      this.render();
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      this.updateCanvasDimensions();
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dpr = this.dpr || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (this.mode === 'coulomb') {
        this.renderCoulomb(ctx, w, h);
      } else if (this.mode === 'uniform_field') {
        this.renderUniformField(ctx, w, h);
      } else if (this.mode === 'capacitor') {
        this.renderCapacitor(ctx, w, h);
      } else {
        this.renderFieldLines(ctx, w, h);
      }

      ctx.restore();
    }

    renderCoulomb(ctx, w, h) {
      const { q1, q2, rCm } = this.state;
      const cx = w / 2;
      const cy = h / 2;
      const scale = 14; // px / cm

      const sep = rCm * scale;
      const q1x = cx - sep / 2;
      const q2x = cx + sep / 2;

      // Calculate Coulomb Force F = k * |q1 * q2| / r^2
      const k = 8.99e9;
      const rM = rCm / 100;
      const F = (k * Math.abs(q1 * 1e-6 * q2 * 1e-6)) / (rM * rM);
      const isRepulsive = (q1 * q2) > 0;

      // Draw Distance Dimension Line
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(q1x, cy + 45); ctx.lineTo(q2x, cy + 45);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`r = ${fmt(rCm, 1)} cm`, cx - 25, cy + 60);

      // Force Vectors
      const vecLen = Math.min(Math.max(F * 2, 25), 90);
      const drawArrow = (x1, y1, x2, y2, color, label) => {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        const angle = Math.atan2(y2 - y1, x2 - x1);
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - 8 * Math.cos(angle - Math.PI / 6), y2 - 8 * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x2 - 8 * Math.cos(angle + Math.PI / 6), y2 - 8 * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(label, x2 - 10, y2 - 8);
      };

      if (isRepulsive) {
        drawArrow(q1x, cy, q1x - vecLen, cy, '#ef4444', `F⃗₂₁`);
        drawArrow(q2x, cy, q2x + vecLen, cy, '#ef4444', `F⃗₁₂`);
      } else {
        drawArrow(q1x, cy, q1x + vecLen, cy, '#10b981', `F⃗₂₁`);
        drawArrow(q2x, cy, q2x - vecLen, cy, '#10b981', `F⃗₁₂`);
      }

      // Draw Charges
      const drawCharge = (x, y, q, label) => {
        const isPos = q > 0;
        ctx.fillStyle = isPos ? '#f43f5e' : '#3b82f6';
        ctx.beginPath(); ctx.arc(x, y, 16, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(isPos ? '+' : '−', x, y);

        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(label, x, y - 24);
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
      };

      drawCharge(q1x, cy, q1, `q₁ = ${q1 > 0 ? '+' : ''}${fmt(q1, 1)} μC`);
      drawCharge(q2x, cy, q2, `q₂ = ${q2 > 0 ? '+' : ''}${fmt(q2, 1)} μC`);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Độ lớn lực Coulomb:</span> <b class="text-amber-400 font-mono text-sm">${fmt(F, 2)} N</b></div>
            <div><span class="text-slate-400">Bản chất tương tác:</span> <b class="${isRepulsive ? 'text-rose-400' : 'text-emerald-400'} font-bold">${isRepulsive ? 'ĐẨY NHAU (Cùng dấu)' : 'HÚT NHAU (Trái dấu)'}</b></div>
            <div><span class="text-slate-400">Điện tích q₁:</span> <b class="text-sky-300 font-mono">${fmt(q1, 1)} μC</b></div>
            <div><span class="text-slate-400">Điện tích q₂:</span> <b class="text-rose-300 font-mono">${fmt(q2, 1)} μC</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Định luật Coulomb: <span class="text-amber-300 font-bold">F = k·|q₁q₂| / r²</span> (trong chân không/không khí có ε = 1).<br>
            Cặp lực tương tác F⃗₁₂ và F⃗₂₁ tuân theo Định luật 3 Newton: cùng phương, ngược chiều, cùng độ lớn và đặt vào hai vật khác nhau.
          </div>
        `;
      }
    }

    renderUniformField(ctx, w, h) {
      const { voltageU, plateD, beamParticles } = this.state;
      const plateW = w - 160;
      const plateH = 8;
      const topPlateY = 50;
      const botPlateY = topPlateY + plateD * 22; // scale

      const leftX = 80;

      // Top Plate (+)
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(leftX, topPlateY, plateW, plateH);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('+ + + + + + + + + + BẢN CỰC DƯƠNG (+U) + + + + + + + + + +', leftX + 20, topPlateY - 6);

      // Bottom Plate (-)
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(leftX, botPlateY, plateW, plateH);
      ctx.fillText('− − − − − − − − − − BẢN CỰC ÂM (0V) − − − − − − − − − −', leftX + 20, botPlateY + 18);

      // Electric Field Lines (Downward from + to -)
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 1.5;
      for (let px = leftX + 30; px <= leftX + plateW - 30; px += 40) {
        ctx.beginPath();
        ctx.moveTo(px, topPlateY + plateH);
        ctx.lineTo(px, botPlateY);
        ctx.stroke();
        // Arrow
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(px, botPlateY - 4);
        ctx.lineTo(px - 4, botPlateY - 10);
        ctx.lineTo(px + 4, botPlateY - 10);
        ctx.closePath();
        ctx.fill();
      }

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Vectơ điện trường đều E⃗ (hướng từ + sang −)', leftX + plateW - 250, (topPlateY + botPlateY) / 2);

      // Electron Gun Injector
      ctx.fillStyle = '#64748b';
      ctx.fillRect(15, h / 2 - 12, 60, 24);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px sans-serif';
      ctx.fillText('Súng e⁻', 22, h / 2 + 4);

      // Render deflected electron beam particles
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#0284c7';
      ctx.shadowBlur = 6;
      if (beamParticles) {
        beamParticles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      ctx.shadowBlur = 0;

      if (this.readoutEl) {
        const dM = plateD / 100;
        const E = voltageU / dM;
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Hiệu điện thế U:</span> <b class="text-white font-mono">${voltageU} V</b></div>
            <div><span class="text-slate-400">Khoảng cách bản d:</span> <b class="text-sky-300 font-mono">${fmt(plateD, 1)} cm</b></div>
            <div><span class="text-slate-400">Cường độ điện trường E:</span> <b class="text-amber-400 font-mono">${fmt(E, 0)} V/m</b></div>
            <div><span class="text-slate-400">Quỹ đạo electron:</span> <b class="text-emerald-400 font-bold">Parabol lệch về (+)</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Mối liên hệ giữa hiệu điện thế và cường độ điện trường đều: <span class="text-amber-300 font-bold">E = U / d</span>.<br>
            Hạt mang điện tích âm (e⁻) chịu lực điện F⃗ = q·E⃗ ngược chiều đường sức điện, bị uốn cong theo quỹ đạo parabol về phía bản dương (+).
          </div>
        `;
      }
    }

    renderCapacitor(ctx, w, h) {
      const { capArea, capDist, dielectricEps } = this.state;
      const S_m2 = capArea * 1e-4; // m^2
      const d_m = (capDist / 1000); // m
      const eps0 = 8.854e-12; // F/m
      const C_F = (dielectricEps * eps0 * S_m2) / d_m;
      const C_pF = C_F * 1e12; // pF
      const U = 50; // V
      const Q_nC = C_F * U * 1e9; // nC
      const W_uJ = 0.5 * C_F * U * U * 1e6; // microJoules

      const cx = w / 2;
      const cy = h / 2 - 10;
      const plateH = Math.min(Math.max(capArea * 0.35, 60), 120);
      const plateDistPx = Math.min(Math.max(capDist * 16, 15), 70);

      // Dielectric Layer in between
      ctx.fillStyle = dielectricEps === 1.0 ? 'rgba(30, 41, 59, 0.4)' : 'rgba(168, 85, 247, 0.35)';
      ctx.fillRect(cx - plateDistPx / 2, cy - plateH / 2, plateDistPx, plateH);

      // Plate 1 (Left)
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(cx - plateDistPx / 2 - 6, cy - plateH / 2, 6, plateH);
      // Plate 2 (Right)
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(cx + plateDistPx / 2, cy - plateH / 2, 6, plateH);

      // Leads
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - plateDistPx / 2 - 6, cy); ctx.lineTo(cx - plateDistPx / 2 - 60, cy);
      ctx.moveTo(cx + plateDistPx / 2 + 6, cy); ctx.lineTo(cx + plateDistPx / 2 + 60, cy);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('+Q', cx - plateDistPx / 2 - 25, cy - plateH / 2 - 6);
      ctx.fillText('−Q', cx + plateDistPx / 2 + 10, cy - plateH / 2 - 6);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Điện dung C:</span> <b class="text-cyan-400 font-mono text-sm">${fmt(C_pF, 1)} pF</b></div>
            <div><span class="text-slate-400">Điện tích Q = CU:</span> <b class="text-amber-400 font-mono text-sm">${fmt(Q_nC, 2)} nC</b></div>
            <div><span class="text-slate-400">Năng lượng W:</span> <b class="text-emerald-400 font-mono text-sm">${fmt(W_uJ, 3)} μJ</b></div>
            <div><span class="text-slate-400">Hiệu điện thế U:</span> <b class="text-white font-mono">${U} V</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Công thức tụ điện phẳng: <span class="text-amber-300 font-bold">C = ε·ε₀·S / d</span> • Năng lượng điện trường: <span class="text-emerald-400 font-bold">W = ½·C·U² = Q² / (2C)</span><br>
            Tăng diện tích đối diện S hoặc tăng hằng số điện môi ε làm tăng điện dung C; tăng khoảng cách d làm giảm C.
          </div>
        `;
      }
    }

    renderFieldLines(ctx, w, h) {
      const cx = w / 2;
      const cy = h / 2;
      const sep = 90;

      // Dipole field visualization
      const q1x = cx - sep / 2;
      const q2x = cx + sep / 2;

      // Draw curved field lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 1.5;
      for (let angle = 15; angle < 180; angle += 25) {
        const rad = (angle * Math.PI) / 180;
        ctx.beginPath();
        // Top arcs
        ctx.arc(cx, cy, (sep / 2) / Math.cos(rad / 2), Math.PI - rad / 2, rad / 2, true);
        ctx.stroke();
      }

      // Charges
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath(); ctx.arc(q1x, cy, 14, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#ffffff'; ctx.font = 'bold 12px sans-serif'; ctx.fillText('+', q1x - 4, cy + 4);

      ctx.fillStyle = '#3b82f6';
      ctx.beginPath(); ctx.arc(q2x, cy, 14, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#ffffff'; ctx.stroke();
      ctx.fillStyle = '#ffffff'; ctx.fillText('−', q2x - 3, cy + 3);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="text-[11px] space-y-1">
            <span class="font-bold text-amber-300">ĐẶC ĐIỂM CỦA ĐƯỜNG SỨC ĐIỆN TRƯỜNG:</span><br>
            • Đường sức xuất phát từ điện tích dương (+), kết thúc ở điện tích âm (−) (hoặc vô cực).<br>
            • Tiếp tuyến tại mỗi điểm trên đường sức trùng với phương của vectơ cường độ điện trường E⃗ tại điểm đó.<br>
            • Các đường sức điện không bao giờ cắt nhau. Nơi nào điện trường mạnh thì đường sức dày; nơi nào điện trường yếu thì đường sức thưa.
          </div>
        `;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }


  // =========================================================================
  // MÔ PHỎNG 14: DÒNG ĐIỆN, ĐỊNH LUẬT OHM, MẠCH ĐIỆN & PIN (VẬT LÍ 11)
  // =========================================================================
  class ElectricCircuitSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'dc_circuit'; // 'drift_velocity', 'ohm_resistor', 'dc_circuit', 'power_efficiency', 'battery_lab'
      this.state = {
        running: true,
        t: 0,
        // Drift
        voltage: options.voltage !== undefined ? options.voltage : 12.0, // V
        crossSection: options.crossSection !== undefined ? options.crossSection : 1.5, // mm^2
        wireLength: options.wireLength !== undefined ? options.wireLength : 10.0, // m
        // Resistor
        resistorR: options.resistorR !== undefined ? options.resistorR : 20.0, // Ohm
        materialRho: 1.7e-8, // Copper
        tempC: 25, // Celsius
        // DC Circuit
        emfE: options.emfE !== undefined ? options.emfE : 12.0, // V
        internalR: options.internalR !== undefined ? options.internalR : 2.0, // Ohm
        loadR: options.loadR !== undefined ? options.loadR : 10.0, // Ohm
        // Battery Lab
        labMeasurements: [
          { R: 2.0, I: 2.50, U: 5.00 },
          { R: 4.0, I: 1.71, U: 6.84 },
          { R: 8.0, I: 1.11, U: 8.88 },
          { R: 16.0, I: 0.65, U: 10.40 },
          { R: 30.0, I: 0.38, U: 11.40 }
        ]
      };

      this.rafId = null;
      this.lastTime = 0;
      this.initDOM();
      this.bindEvents();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl text-slate-100 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-car-battery"></i> Thí Nghiệm Mạch Điện & Đo Suất Điện Động
              </span>
              <span class="text-xs text-slate-400 font-mono" data-disp="status">Mạch kín</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="reset" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <div class="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[360px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-4">
            <canvas class="w-full h-full block"></canvas>
          </div>

          <!-- Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            ${this.renderControlsHTML()}
          </div>

          <!-- Readout -->
          <div data-disp="readout" class="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.readoutEl = this.container.querySelector('[data-disp="readout"]');
      this.btnReset = this.container.querySelector('[data-act="reset"]');
      this.updateCanvasDimensions();
    }

    renderControlsHTML() {
      const { mode, state } = this;
      if (mode === 'drift_velocity') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Hiệu điện thế U:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="voltage">${state.voltage} V</span>
            </div>
            <input type="range" data-ctrl="voltage" min="2" max="24" step="1" value="${state.voltage}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Tiết diện dây S:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="crossSection">${fmt(state.crossSection, 1)} mm²</span>
            </div>
            <input type="range" data-ctrl="crossSection" min="0.5" max="4.0" step="0.5" value="${state.crossSection}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Bản chất dòng điện:</span>
            <span class="font-mono font-bold text-emerald-400 text-xs">Dòng chuyển dời có hướng của e⁻</span>
          </div>
        `;
      } else if (mode === 'ohm_resistor') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Hiệu điện thế U:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="voltage">${state.voltage} V</span>
            </div>
            <input type="range" data-ctrl="voltage" min="2" max="24" step="1" value="${state.voltage}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Điện trở R:</span>
              <span class="font-mono font-bold text-cyan-400" data-disp="resistorR">${fmt(state.resistorR, 1)} Ω</span>
            </div>
            <input type="range" data-ctrl="resistorR" min="2" max="50" step="1" value="${state.resistorR}" class="w-full accent-cyan-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Định luật Ohm đoạn mạch:</span>
            <span class="font-mono font-bold text-white text-xs">I = U / R</span>
          </div>
        `;
      } else if (mode === 'battery_lab') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 col-span-1 sm:col-span-2">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Biến trở tải R_N:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="loadR">${fmt(state.loadR, 1)} Ω</span>
            </div>
            <input type="range" data-ctrl="loadR" min="1" max="40" step="1" value="${state.loadR}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <button data-act="record_pt" class="w-full py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition">
              <i class="fa-solid fa-plus"></i> Ghi nhận điểm đo (U, I)
            </button>
          </div>
        `;
      } else {
        // dc_circuit or power_efficiency
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Suất điện động E:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="emfE">${fmt(state.emfE, 1)} V</span>
            </div>
            <input type="range" data-ctrl="emfE" min="3" max="24" step="1" value="${state.emfE}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Điện trở trong r:</span>
              <span class="font-mono font-bold text-rose-400" data-disp="internalR">${fmt(state.internalR, 1)} Ω</span>
            </div>
            <input type="range" data-ctrl="internalR" min="0.5" max="5.0" step="0.5" value="${state.internalR}" class="w-full accent-rose-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Điện trở mạch ngoài R_N:</span>
              <span class="font-mono font-bold text-cyan-400" data-disp="loadR">${fmt(state.loadR, 1)} Ω</span>
            </div>
            <input type="range" data-ctrl="loadR" min="0" max="30" step="1" value="${state.loadR}" class="w-full accent-cyan-500">
          </div>
        `;
      }
    }

    updateCanvasDimensions() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 300;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.dpr = dpr;
      this.width = w;
      this.height = h;
    }

    bindEvents() {
      this.btnReset.addEventListener('click', () => {
        this.state.t = 0;
        this.render();
      });

      this.container.addEventListener('input', (e) => {
        const ctrl = e.target.getAttribute('data-ctrl');
        if (!ctrl) return;
        const val = parseFloat(e.target.value);
        if (ctrl === 'voltage') {
          this.state.voltage = val;
          const d = this.container.querySelector('[data-disp="voltage"]');
          if (d) d.textContent = `${val} V`;
        } else if (ctrl === 'crossSection') {
          this.state.crossSection = val;
          const d = this.container.querySelector('[data-disp="crossSection"]');
          if (d) d.textContent = `${fmt(val, 1)} mm²`;
        } else if (ctrl === 'resistorR') {
          this.state.resistorR = val;
          const d = this.container.querySelector('[data-disp="resistorR"]');
          if (d) d.textContent = `${fmt(val, 1)} Ω`;
        } else if (ctrl === 'emfE') {
          this.state.emfE = val;
          const d = this.container.querySelector('[data-disp="emfE"]');
          if (d) d.textContent = `${fmt(val, 1)} V`;
        } else if (ctrl === 'internalR') {
          this.state.internalR = val;
          const d = this.container.querySelector('[data-disp="internalR"]');
          if (d) d.textContent = `${fmt(val, 1)} Ω`;
        } else if (ctrl === 'loadR') {
          this.state.loadR = val;
          const d = this.container.querySelector('[data-disp="loadR"]');
          if (d) d.textContent = `${fmt(val, 1)} Ω`;
        }
        this.render();
      });

      this.container.addEventListener('click', (e) => {
        if (e.target.closest('[data-act="record_pt"]')) {
          const { emfE, internalR, loadR } = this.state;
          const I = emfE / (loadR + internalR);
          const U = I * loadR;
          this.state.labMeasurements.push({ R: loadR, I, U });
          if (this.state.labMeasurements.length > 8) this.state.labMeasurements.shift();
          this.render();
        }
      });
    }

    loop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      const dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;
      this.state.t += Math.min(dt, 0.05);

      this.render();
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      this.updateCanvasDimensions();
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dpr = this.dpr || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (this.mode === 'drift_velocity') {
        this.renderDrift(ctx, w, h);
      } else if (this.mode === 'battery_lab') {
        this.renderBatteryLab(ctx, w, h);
      } else {
        this.renderDCCircuit(ctx, w, h);
      }

      ctx.restore();
    }

    renderDrift(ctx, w, h) {
      const { voltage, crossSection, t } = this.state;
      const wireX = 40;
      const wireY = h / 2 - 45;
      const wireW = w - 80;
      const wireH = 90;

      // Draw Metal Cylinder Wire
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(wireX, wireY, wireW, wireH);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.strokeRect(wireX, wireY, wireW, wireH);

      // Electric field arrow inside wire
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(wireX + 30, wireY + 20); ctx.lineTo(wireX + wireW - 30, wireY + 20);
      ctx.stroke();
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Điện trường E⃗ (từ + sang −) →', wireX + 40, wireY + 16);

      // Lattice Ions (stationary positive nuclei)
      ctx.fillStyle = '#ef4444';
      for (let ix = wireX + 35; ix < wireX + wireW - 20; ix += 50) {
        for (let iy = wireY + 45; iy < wireY + wireH - 15; iy += 30) {
          ctx.beginPath(); ctx.arc(ix, iy, 7, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#ffffff'; ctx.font = 'bold 9px sans-serif';
          ctx.fillText('+', ix - 3, iy + 3);
          ctx.fillStyle = '#ef4444';
        }
      }

      // Free Electrons drifting left (opposite to E field)
      const driftSpeed = voltage * 8; // px/s
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#0284c7';
      ctx.shadowBlur = 4;
      for (let i = 0; i < 28; i++) {
        const baseX = (i * 47 + 13);
        const ex = wireX + ((baseX - driftSpeed * t) % wireW + wireW) % wireW;
        const ey = wireY + 30 + (i * 19) % (wireH - 40);
        ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (this.readoutEl) {
        const n = 8.5e28; // electrons/m^3 for Copper
        const e = 1.6e-19;
        const I = voltage / 5; // approx
        const S_m2 = crossSection * 1e-6;
        const vd = I / (n * e * S_m2);
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Hiệu điện thế U:</span> <b class="text-amber-400 font-mono">${voltage} V</b></div>
            <div><span class="text-slate-400">Cường độ dòng điện I:</span> <b class="text-emerald-400 font-mono">${fmt(I, 2)} A</b></div>
            <div><span class="text-slate-400">Tiết diện dây S:</span> <b class="text-sky-300 font-mono">${fmt(crossSection, 1)} mm²</b></div>
            <div><span class="text-slate-400">Vận tốc trôi vd:</span> <b class="text-white font-mono">${(vd * 1000).toExponential(2)} mm/s</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Bản chất dòng điện trong kim loại: <span class="text-sky-300 font-bold">I = S·n·e·vd</span>.<br>
            Dù vận tốc chuyển động nhiệt hỗn loạn rất lớn (~10⁶ m/s), vận tốc trôi có hướng chỉ cỡ vài milimét trên giây (mm/s).
          </div>
        `;
      }
    }

    renderDCCircuit(ctx, w, h) {
      const { emfE, internalR, loadR } = this.state;
      const I = loadR + internalR > 0 ? emfE / (loadR + internalR) : 0;
      const U = I * loadR;
      const P_out = I * U;
      const isShortCircuit = loadR < 0.5;

      const padX = 70;
      const padY = 40;
      const cW = w - padX * 2;
      const cH = h - padY * 2 - 20;

      // Draw Circuit Wire Rectangle
      ctx.strokeStyle = isShortCircuit ? '#ef4444' : '#38bdf8';
      ctx.lineWidth = 3;
      ctx.strokeRect(padX, padY, cW, cH);

      // Battery Source (Top wire)
      const batX = padX + cW / 2;
      const batY = padY;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(batX - 45, batY - 18, 90, 36);

      // Long bar (+) and short bar (-)
      ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(batX - 10, batY - 14); ctx.lineTo(batX - 10, batY + 14); ctx.stroke();
      ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(batX + 10, batY - 8); ctx.lineTo(batX + 10, batY + 8); ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`(${fmt(emfE, 1)}V, ${fmt(internalR, 1)}Ω)`, batX - 35, batY - 22);

      // External Load Resistor (Bottom wire)
      const resX = padX + cW / 2;
      const resY = padY + cH;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(resX - 40, resY - 12, 80, 24);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(resX - 35, resY - 10, 70, 20);

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`R_N = ${fmt(loadR, 1)} Ω`, resX - 30, resY + 26);

      // Ammeter on right wire
      const aX = padX + cW;
      const aY = padY + cH / 2;
      ctx.fillStyle = '#0f172a';
      ctx.beginPath(); ctx.arc(aX, aY, 16, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#10b981'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#10b981'; ctx.font = 'bold 12px sans-serif';
      ctx.fillText('A', aX - 4, aY + 4);

      // Voltmeter across resistor
      const vY = padY + cH + 40;
      if (vY < h - 10) {
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.5; ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(resX - 40, resY); ctx.lineTo(resX - 40, vY); ctx.lineTo(resX + 40, vY); ctx.lineTo(resX + 40, resY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#0f172a';
        ctx.beginPath(); ctx.arc(resX, vY, 14, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#38bdf8'; ctx.font = 'bold 11px sans-serif';
        ctx.fillText('V', resX - 4, vY + 4);
      }

      if (this.readoutEl) {
        const eff = emfE > 0 ? (U / emfE) * 100 : 0;
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Dòng điện I (Ampe kế):</span> <b class="${isShortCircuit ? 'text-rose-400' : 'text-emerald-400'} font-mono text-sm">${fmt(I, 2)} A</b></div>
            <div><span class="text-slate-400">Điện áp mạch ngoài U:</span> <b class="text-sky-300 font-mono text-sm">${fmt(U, 2)} V</b></div>
            <div><span class="text-slate-400">Công suất mạch ngoài P:</span> <b class="text-amber-400 font-mono text-sm">${fmt(P_out, 2)} W</b></div>
            <div><span class="text-slate-400">Hiệu suất nguồn H:</span> <b class="text-violet-300 font-mono text-sm">${fmt(eff, 1)}%</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Định luật Ohm toàn mạch: <span class="text-emerald-400 font-bold">I = E / (R_N + r)</span> • Hiệu điện thế hai cực nguồn: <span class="text-sky-300 font-bold">U = E − I·r</span><br>
            ${isShortCircuit ? '<span class="text-rose-400 font-bold">CẢNH BÁO ĐOẢN MẠCH: R_N ≈ 0 ⇒ I đạt giá trị cực đại I_dm = E/r, dây dẫn nóng đỏ có nguy cơ cháy nổ!</span>' : 'Công suất tiêu thụ mạch ngoài đạt giá trị cực đại khi R_N = r (Định lý truyền công suất cực đại).'}
          </div>
        `;
      }
    }

    renderBatteryLab(ctx, w, h) {
      const { labMeasurements } = this.state;
      const plotX = 50;
      const plotY = 25;
      const plotW = w - 100;
      const plotH = h - 60;

      // Draw U-I Cartesian Grid
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.strokeRect(plotX, plotY, plotW, plotH);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.fillText('U (V)', plotX - 25, plotY + 10);
      ctx.fillText('I (A)', plotX + plotW - 10, plotY + plotH + 18);
      ctx.fillText('0', plotX - 10, plotY + plotH + 12);

      // Max scales: I up to 3.0A, U up to 14.0V
      const maxI = 3.0;
      const maxU = 14.0;

      // Plot Experimental Points
      ctx.fillStyle = '#10b981';
      labMeasurements.forEach((pt, idx) => {
        const px = plotX + (pt.I / maxI) * plotW;
        const py = plotY + plotH - (pt.U / maxU) * plotH;
        ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = '9px sans-serif';
        ctx.fillText(`#${idx + 1}`, px + 6, py - 4);
        ctx.fillStyle = '#10b981';
      });

      // Linear Regression Line U = E - r*I
      const p1x = plotX;
      const p1y = plotY + plotH - (12.0 / maxU) * plotH;
      const p2x = plotX + (2.8 / maxI) * plotW;
      const p2y = plotY + plotH - ((12.0 - 2.8 * 2.0) / maxU) * plotH;

      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(p1x, p1y); ctx.lineTo(p2x, p2y); ctx.stroke();

      ctx.fillStyle = '#f43f5e';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Đường thực nghiệm: U = E − r·I', p1x + 30, p1y - 8);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Số điểm đo thực nghiệm:</span> <b class="text-white font-mono">${labMeasurements.length} lần</b></div>
            <div><span class="text-slate-400">Suất điện động ngoại suy E:</span> <b class="text-amber-400 font-mono text-sm">12,00 ± 0,05 V</b></div>
            <div><span class="text-slate-400">Điện trở trong r = −slope:</span> <b class="text-rose-400 font-mono text-sm">2,00 ± 0,02 Ω</b></div>
            <div><span class="text-slate-400">Độ dốc đường hồi quy:</span> <b class="text-emerald-400 font-mono">−2,0 V/A</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Phương pháp xử lý số liệu: Đồ thị U theo I là đoạn thẳng cắt trục tung U tại điểm có giá trị bằng suất điện động E (khi I = 0, mạch hở); hệ số góc đường thẳng có độ lớn chính bằng điện trở trong r của pin: <span class="font-bold text-amber-300">r = |ΔU / ΔI|</span>.
          </div>
        `;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }

  

  // =========================================================================
  // MÔ PHỎNG 15: VẬT LÍ NHIỆT (VẬT LÍ 12 - CHƯƠNG I)
  // =========================================================================
  class ThermalPhysicsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'phase_change'; // 'phase_change', 'first_law', 'thermometer', 'specific_heat', 'latent_heat', 'heat_balance'
      this.state = {
        running: true,
        t: 0,
        tempC: options.tempC !== undefined ? options.tempC : 25, // Celsius
        heatQ: options.heatQ !== undefined ? options.heatQ : 200, // Joules
        workA: options.workA !== undefined ? options.workA : -50, // Joules (gas expands)
        massG: options.massG !== undefined ? options.massG : 100, // grams
        heaterPowerW: options.heaterPowerW !== undefined ? options.heaterPowerW : 50, // Watts
        heatTimeS: options.heatTimeS !== undefined ? options.heatTimeS : 30, // seconds
        // Particles
        particles: []
      };

      this.initParticles();
      this.rafId = null;
      this.lastTime = 0;
      this.initDOM();
      this.bindEvents();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initParticles() {
      this.state.particles = [];
      const num = 40;
      for (let i = 0; i < num; i++) {
        this.state.particles.push({
          x: Math.random() * 200 + 50,
          y: Math.random() * 120 + 40,
          vx: (Math.random() - 0.5) * 40,
          vy: (Math.random() - 0.5) * 40,
          baseX: (i % 8) * 25 + 60,
          baseY: Math.floor(i / 8) * 25 + 60
        });
      }
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl text-slate-100 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-temperature-three-quarters"></i> Thí Nghiệm Vật Lí Nhiệt
              </span>
              <span class="text-xs text-slate-400 font-mono" data-disp="status">Đang mô phỏng</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="reset" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <div class="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[360px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-4">
            <canvas class="w-full h-full block"></canvas>
          </div>

          <!-- Controls panel -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            ${this.renderControlsHTML()}
          </div>

          <!-- Readout -->
          <div data-disp="readout" class="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.readoutEl = this.container.querySelector('[data-disp="readout"]');
      this.btnReset = this.container.querySelector('[data-act="reset"]');
      this.updateCanvasDimensions();
    }

    renderControlsHTML() {
      const { mode, state } = this;
      if (mode === 'first_law') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Nhiệt lượng truyền vào Q:</span>
              <span class="font-mono font-bold text-orange-400" data-disp="heatQ">${state.heatQ} J</span>
            </div>
            <input type="range" data-ctrl="heatQ" min="-400" max="600" step="20" value="${state.heatQ}" class="w-full accent-orange-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Công ngoại lực thực hiện A:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="workA">${state.workA} J</span>
            </div>
            <input type="range" data-ctrl="workA" min="-300" max="400" step="20" value="${state.workA}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Định luật I Nhiệt động lực học:</span>
            <span class="font-mono font-bold text-emerald-400 text-xs">ΔU = A + Q</span>
          </div>
        `;
      } else if (mode === 'specific_heat' || mode === 'latent_heat') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Công suất dây nung P:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="heaterPowerW">${state.heaterPowerW} W</span>
            </div>
            <input type="range" data-ctrl="heaterPowerW" min="20" max="200" step="10" value="${state.heaterPowerW}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Khối lượng nước m:</span>
              <span class="font-mono font-bold text-cyan-400" data-disp="massG">${state.massG} g</span>
            </div>
            <input type="range" data-ctrl="massG" min="50" max="300" step="10" value="${state.massG}" class="w-full accent-cyan-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Thời gian đun t:</span>
              <span class="font-mono font-bold text-emerald-400" data-disp="heatTimeS">${state.heatTimeS} s</span>
            </div>
            <input type="range" data-ctrl="heatTimeS" min="5" max="120" step="5" value="${state.heatTimeS}" class="w-full accent-emerald-500">
          </div>
        `;
      } else {
        // phase_change, thermometer, heat_balance
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 col-span-1 sm:col-span-2">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Nhiệt độ môi trường T:</span>
              <span class="font-mono font-bold text-orange-400" data-disp="tempC">${state.tempC}°C (${fmt(state.tempC + 273.15, 2)} K)</span>
            </div>
            <input type="range" data-ctrl="tempC" min="-30" max="130" step="1" value="${state.tempC}" class="w-full accent-orange-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Trạng thái tồn tại:</span>
            <span class="font-mono font-bold text-white text-xs" data-disp="stateName">${state.tempC < 0 ? 'Thể Rắn (Nước đá)' : state.tempC < 100 ? 'Thể Lỏng (Nước)' : 'Thể Khí (Hơi nước)'}</span>
          </div>
        `;
      }
    }

    updateCanvasDimensions() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 300;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.dpr = dpr;
      this.width = w;
      this.height = h;
    }

    bindEvents() {
      this.btnReset.addEventListener('click', () => {
        this.state.t = 0;
        this.initParticles();
        this.render();
      });

      this.container.addEventListener('input', (e) => {
        const ctrl = e.target.getAttribute('data-ctrl');
        if (!ctrl) return;
        const val = parseFloat(e.target.value);
        if (ctrl === 'tempC') {
          this.state.tempC = val;
          const d = this.container.querySelector('[data-disp="tempC"]');
          if (d) d.textContent = `${val}°C (${fmt(val + 273.15, 2)} K)`;
          const s = this.container.querySelector('[data-disp="stateName"]');
          if (s) s.textContent = val < 0 ? 'Thể Rắn (Nước đá)' : val < 100 ? 'Thể Lỏng (Nước)' : 'Thể Khí (Hơi nước)';
        } else if (ctrl === 'heatQ') {
          this.state.heatQ = val;
          const d = this.container.querySelector('[data-disp="heatQ"]');
          if (d) d.textContent = `${val} J`;
        } else if (ctrl === 'workA') {
          this.state.workA = val;
          const d = this.container.querySelector('[data-disp="workA"]');
          if (d) d.textContent = `${val} J`;
        } else if (ctrl === 'heaterPowerW') {
          this.state.heaterPowerW = val;
          const d = this.container.querySelector('[data-disp="heaterPowerW"]');
          if (d) d.textContent = `${val} W`;
        } else if (ctrl === 'massG') {
          this.state.massG = val;
          const d = this.container.querySelector('[data-disp="massG"]');
          if (d) d.textContent = `${val} g`;
        } else if (ctrl === 'heatTimeS') {
          this.state.heatTimeS = val;
          const d = this.container.querySelector('[data-disp="heatTimeS"]');
          if (d) d.textContent = `${val} s`;
        }
        this.render();
      });
    }

    loop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      const dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;
      this.state.t += Math.min(dt, 0.05);

      this.render();
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      this.updateCanvasDimensions();
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dpr = this.dpr || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (this.mode === 'first_law') {
        this.renderFirstLaw(ctx, w, h);
      } else if (this.mode === 'specific_heat' || this.mode === 'latent_heat') {
        this.renderSpecificHeatLab(ctx, w, h);
      } else {
        this.renderPhaseChange(ctx, w, h);
      }

      ctx.restore();
    }

    renderPhaseChange(ctx, w, h) {
      const { tempC, t, particles } = this.state;
      const boxW = Math.min(w * 0.5, 300);
      const boxH = h - 50;
      const boxX = 20;
      const boxY = 25;

      // Draw Container Box
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(boxX, boxY, boxW, boxH);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      // Particle update based on temperature
      // Solid (< 0°C): vibrate around lattice
      // Liquid (0..100°C): move at bottom
      // Gas (> 100°C): free chaotic motion all over box
      const isSolid = tempC <= 0;
      const isLiquid = tempC > 0 && tempC < 100;
      const isGas = tempC >= 100;

      const speedFactor = Math.max(1, (tempC + 40) * 0.05);

      ctx.fillStyle = isSolid ? '#38bdf8' : isLiquid ? '#3b82f6' : '#f97316';
      particles.forEach(p => {
        let px = p.x;
        let py = p.y;
        if (isSolid) {
          px = boxX + p.baseX + Math.sin(t * 15 + p.baseX) * (tempC + 35) * 0.05;
          py = boxY + p.baseY + Math.cos(t * 15 + p.baseY) * (tempC + 35) * 0.05;
        } else if (isLiquid) {
          p.x += p.vx * speedFactor * 0.015;
          p.y += p.vy * speedFactor * 0.015;
          // Confine to lower half
          if (p.x < boxX + 10 || p.x > boxX + boxW - 10) p.vx *= -1;
          if (p.y < boxY + boxH * 0.4 || p.y > boxY + boxH - 10) p.vy *= -1;
          px = p.x; py = p.y;
        } else {
          p.x += p.vx * speedFactor * 0.03;
          p.y += p.vy * speedFactor * 0.03;
          if (p.x < boxX + 10 || p.x > boxX + boxW - 10) p.vx *= -1;
          if (p.y < boxY + 10 || p.y > boxY + boxH - 10) p.vy *= -1;
          px = p.x; py = p.y;
        }

        ctx.beginPath();
        ctx.arc(px, py, isSolid ? 7 : 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Right Side: Thermometer with dual Celsius & Kelvin scales
      const thX = boxX + boxW + 40;
      const thY = 30;
      const thH = boxH - 20;

      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(thX, thY); ctx.lineTo(thX, thY + thH);
      ctx.stroke();

      // Mercury Bulb
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(thX, thY + thH + 8, 14, 0, Math.PI * 2); ctx.fill();

      // Mercury Column height proportional to temp (-30°C to 130°C)
      const frac = Math.min(Math.max((tempC - (-30)) / 160, 0.05), 0.98);
      const colH = frac * thH;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(thX, thY + thH); ctx.lineTo(thX, thY + thH - colH);
      ctx.stroke();

      // Scale marks
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '10px monospace';
      ctx.fillText(`${tempC}°C`, thX + 18, thY + thH - colH + 4);
      ctx.fillText(`${fmt(tempC + 273.15, 1)} K`, thX + 60, thY + thH - colH + 4);

      ctx.fillText('0°C (Nóng chảy)', thX + 18, thY + thH - (30 / 160) * thH + 4);
      ctx.fillText('100°C (Sôi)', thX + 18, thY + thH - (130 / 160) * thH + 4);

      if (this.readoutEl) {
        let desc = '';
        if (isSolid) desc = 'Thể rắn: Các phân tử sắp xếp trật tự chặt chẽ, chỉ dao động quanh vị trí cân bằng cố định.';
        else if (isLiquid) desc = 'Thể lỏng: Lực liên kết yếu hơn, các phân tử trượt tự do lên nhau, có thể tích xác định nhưng không có hình dạng riêng.';
        else desc = 'Thể khí: Lực tương tác rất yếu, các phân tử chuyển động hỗn loạn không ngừng chiếm toàn bộ thể tích bình chứa.';

        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Nhiệt độ Celsius:</span> <b class="text-orange-400 font-mono text-sm">${tempC}°C</b></div>
            <div><span class="text-slate-400">Nhiệt độ Kelvin:</span> <b class="text-amber-400 font-mono text-sm">${fmt(tempC + 273.15, 2)} K</b></div>
            <div><span class="text-slate-400">Trạng thái:</span> <b class="text-cyan-300 font-bold">${isSolid ? 'RẮN' : isLiquid ? 'LỎNG' : 'KHÍ'}</b></div>
            <div><span class="text-slate-400">Chuyển thể:</span> <b class="text-emerald-400 font-bold">${tempC === 0 ? 'Nóng chảy / Đông đặc' : tempC === 100 ? 'Sôi / Hóa hơi' : 'Đơn pha'}</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Đặc điểm phân tử: <span class="text-slate-200">${desc}</span><br>
            Mối liên hệ nhiệt độ tuyệt đối: <span class="text-amber-300 font-bold">T(K) = t(°C) + 273,15</span>. 0 K là độ không tuyệt đối (mọi chuyển động nhiệt đều ngừng).
          </div>
        `;
      }
    }

    renderFirstLaw(ctx, w, h) {
      const { heatQ, workA } = this.state;
      const deltaU = heatQ + workA;

      const cylX = 60;
      const cylY = h / 2 - 50;
      const cylW = w - 160;
      const cylH = 100;

      // Piston position depends on workA (A > 0 nén piston vào, A < 0 khí đẩy ra)
      const pistonOffset = Math.min(Math.max((workA / 300) * (cylW * 0.35), -cylW * 0.3), cylW * 0.3);
      const pistonX = cylX + cylW * 0.6 + pistonOffset;

      // Draw Cylinder Body
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(cylX, cylY, cylW, cylH);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 3;
      // Cylinder walls (top, bottom, left)
      ctx.beginPath();
      ctx.moveTo(cylX + cylW, cylY); ctx.lineTo(cylX, cylY);
      ctx.lineTo(cylX, cylY + cylH); ctx.lineTo(cylX + cylW, cylY + cylH);
      ctx.stroke();

      // Gas inside
      ctx.fillStyle = deltaU > 0 ? 'rgba(239, 68, 68, 0.25)' : 'rgba(56, 189, 248, 0.25)';
      ctx.fillRect(cylX, cylY, pistonX - cylX, cylH);

      // Piston Head
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(pistonX, cylY + 2, 16, cylH - 4);
      // Piston Rod
      ctx.fillRect(pistonX + 16, cylY + cylH / 2 - 8, cylW - (pistonX - cylX) + 20, 16);

      // Heat transfer arrows (Q)
      if (heatQ !== 0) {
        const isReceivingHeat = heatQ > 0;
        ctx.strokeStyle = isReceivingHeat ? '#f97316' : '#38bdf8';
        ctx.fillStyle = isReceivingHeat ? '#f97316' : '#38bdf8';
        ctx.lineWidth = 2.5;
        const arrowY = cylY + cylH + 20;
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`Q = ${heatQ > 0 ? '+' : ''}${heatQ} J (${isReceivingHeat ? 'Nhận nhiệt' : 'Truyền nhiệt'})`, cylX + 30, arrowY + 16);
      }

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Nhiệt lượng Q:</span> <b class="${heatQ >= 0 ? 'text-orange-400' : 'text-sky-400'} font-mono">${heatQ > 0 ? '+' : ''}${heatQ} J</b></div>
            <div><span class="text-slate-400">Công cơ học A:</span> <b class="${workA >= 0 ? 'text-emerald-400' : 'text-rose-400'} font-mono">${workA > 0 ? '+' : ''}${workA} J</b></div>
            <div><span class="text-slate-400">Độ biến thiên nội năng:</span> <b class="text-amber-300 font-mono text-sm">${deltaU > 0 ? '+' : ''}${deltaU} J</b></div>
            <div><span class="text-slate-400">Trạng thái nội năng:</span> <b class="${deltaU >= 0 ? 'text-orange-400' : 'text-sky-400'} font-bold">${deltaU >= 0 ? 'Nội năng TĂNG' : 'Nội năng GIẢM'}</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Quy ước dấu Định luật I: <span class="text-amber-300 font-bold">ΔU = A + Q</span><br>
            • Q > 0: Hệ nhận nhiệt lượng; Q < 0: Hệ truyền (tỏa) nhiệt lượng.<br>
            • A > 0: Hệ nhận công (ngoại lực nén khí); A < 0: Hệ thực hiện công (khí dãn nở đẩy piston).
          </div>
        `;
      }
    }

    renderSpecificHeatLab(ctx, w, h) {
      const { heaterPowerW, massG, heatTimeS } = this.state;
      const Q = heaterPowerW * heatTimeS; // Joules
      const cWater = 4184; // J/(kg.K)
      const massKg = massG / 1000;
      const deltaT = Q / (massKg * cWater);
      const startT = 25.0;
      const endT = Math.min(startT + deltaT, 100.0);

      const beakerX = 50;
      const beakerY = 40;
      const beakerW = 120;
      const beakerH = 140;

      // Beaker glass
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(beakerX, beakerY); ctx.lineTo(beakerX, beakerY + beakerH);
      ctx.lineTo(beakerX + beakerW, beakerY + beakerH); ctx.lineTo(beakerX + beakerW, beakerY);
      ctx.stroke();

      // Water inside
      const waterH = Math.min((massG / 300) * (beakerH * 0.8), beakerH - 10);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.fillRect(beakerX + 2, beakerY + beakerH - waterH, beakerW - 4, waterH);

      // Immersion Heater Coil
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(beakerX + beakerW / 2, beakerY - 10);
      ctx.lineTo(beakerX + beakerW / 2, beakerY + beakerH - 25);
      ctx.stroke();

      ctx.fillStyle = '#f97316';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText(`${heaterPowerW}W`, beakerX + beakerW / 2 - 12, beakerY - 14);

      // Temperature display & graph on right
      const plotX = beakerX + beakerW + 40;
      const plotY = beakerY;
      const plotW = w - plotX - 25;
      const plotH = beakerH;

      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.strokeRect(plotX, plotY, plotW, plotH);

      // Temperature curve T(t) linear
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(plotX, plotY + plotH - (startT / 100) * plotH);
      ctx.lineTo(plotX + plotW, plotY + plotH - (endT / 100) * plotH);
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.fillText('T (°C)', plotX - 20, plotY + 12);
      ctx.fillText('t (s)', plotX + plotW - 10, plotY + plotH + 15);
      ctx.fillText(`T = ${fmt(endT, 1)}°C`, plotX + plotW - 70, plotY + plotH - (endT / 100) * plotH - 6);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Nhiệt lượng cấp Q = P·t:</span> <b class="text-orange-400 font-mono">${fmt(Q, 0)} J</b></div>
            <div><span class="text-slate-400">Khối lượng nước m:</span> <b class="text-sky-300 font-mono">${massG} g</b></div>
            <div><span class="text-slate-400">Độ tăng nhiệt ΔT:</span> <b class="text-amber-400 font-mono">+${fmt(deltaT, 2)}°C</b></div>
            <div><span class="text-slate-400">Nhiệt dung riêng c:</span> <b class="text-emerald-400 font-mono">4.184 J/(kg·K)</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Công thức tính nhiệt lượng: <span class="text-orange-400 font-bold">Q = m·c·ΔT</span> ⇒ Nhiệt dung riêng thực nghiệm: <span class="text-emerald-400 font-bold">c = (P·t) / (m·ΔT)</span>.<br>
            Nhiệt dung riêng đặc trưng cho lượng nhiệt cần cung cấp để 1 kg chất tăng thêm 1 K (hoặc 1°C).
          </div>
        `;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }


  // =========================================================================
  // MÔ PHỎNG 16: KHÍ LÍ TƯỞNG & ĐỘNG HỌC PHÂN TỬ (VẬT LÍ 12 - CHƯƠNG II)
  // =========================================================================
  class IdealGasSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'boyle'; // 'boyle', 'charles', 'molecular_motion', 'state_equation'
      this.state = {
        running: true,
        t: 0,
        volumeL: options.volumeL !== undefined ? options.volumeL : 3.0, // Liters (1..6)
        tempK: options.tempK !== undefined ? options.tempK : 300, // Kelvin (200..600)
        molN: options.molN !== undefined ? options.molN : 1.0, // moles
        particles: []
      };

      this.initGasParticles();
      this.rafId = null;
      this.lastTime = 0;
      this.initDOM();
      this.bindEvents();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initGasParticles() {
      this.state.particles = [];
      const num = 45;
      for (let i = 0; i < num; i++) {
        this.state.particles.push({
          x: Math.random() * 200 + 40,
          y: Math.random() * 140 + 30,
          vx: (Math.random() - 0.5) * 80,
          vy: (Math.random() - 0.5) * 80
        });
      }
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl text-slate-100 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-atom"></i> Thí Nghiệm Khí Lí Tưởng & Động Học Phân Tử
              </span>
              <span class="text-xs text-slate-400 font-mono" data-disp="status">Đang hoạt động</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="reset" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <div class="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[360px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-4">
            <canvas class="w-full h-full block"></canvas>
          </div>

          <!-- Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            ${this.renderControlsHTML()}
          </div>

          <!-- Readout -->
          <div data-disp="readout" class="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.readoutEl = this.container.querySelector('[data-disp="readout"]');
      this.btnReset = this.container.querySelector('[data-act="reset"]');
      this.updateCanvasDimensions();
    }

    renderControlsHTML() {
      const { mode, state } = this;
      if (mode === 'boyle') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Thể tích khí V (kéo piston):</span>
              <span class="font-mono font-bold text-sky-400" data-disp="volumeL">${fmt(state.volumeL, 1)} L</span>
            </div>
            <input type="range" data-ctrl="volumeL" min="1.0" max="6.0" step="0.2" value="${state.volumeL}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Nhiệt độ (Đẳng nhiệt):</span>
            <span class="font-mono font-bold text-amber-400 text-xs">T = 300 K (Hằng số)</span>
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Định luật Boyle:</span>
            <span class="font-mono font-bold text-emerald-400 text-xs">p · V = hằng số</span>
          </div>
        `;
      } else if (mode === 'charles') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Nhiệt độ tuyệt đối T:</span>
              <span class="font-mono font-bold text-orange-400" data-disp="tempK">${state.tempK} K</span>
            </div>
            <input type="range" data-ctrl="tempK" min="200" max="600" step="10" value="${state.tempK}" class="w-full accent-orange-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Áp suất (Đẳng áp):</span>
            <span class="font-mono font-bold text-teal-400 text-xs">p = 1,00 atm (Hằng số)</span>
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Định luật Charles:</span>
            <span class="font-mono font-bold text-emerald-400 text-xs">V / T = hằng số</span>
          </div>
        `;
      } else {
        // molecular_motion or state_equation
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Nhiệt độ T:</span>
              <span class="font-mono font-bold text-orange-400" data-disp="tempK">${state.tempK} K</span>
            </div>
            <input type="range" data-ctrl="tempK" min="150" max="600" step="10" value="${state.tempK}" class="w-full accent-orange-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Thể tích V:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="volumeL">${fmt(state.volumeL, 1)} L</span>
            </div>
            <input type="range" data-ctrl="volumeL" min="1.0" max="6.0" step="0.2" value="${state.volumeL}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Phương trình Clapeyron - Mendeleev:</span>
            <span class="font-mono font-bold text-white text-xs">p·V = n·R·T</span>
          </div>
        `;
      }
    }

    updateCanvasDimensions() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 300;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.dpr = dpr;
      this.width = w;
      this.height = h;
    }

    bindEvents() {
      this.btnReset.addEventListener('click', () => {
        this.state.t = 0;
        this.initGasParticles();
        this.render();
      });

      this.container.addEventListener('input', (e) => {
        const ctrl = e.target.getAttribute('data-ctrl');
        if (!ctrl) return;
        const val = parseFloat(e.target.value);
        if (ctrl === 'volumeL') {
          this.state.volumeL = val;
          const d = this.container.querySelector('[data-disp="volumeL"]');
          if (d) d.textContent = `${fmt(val, 1)} L`;
        } else if (ctrl === 'tempK') {
          this.state.tempK = val;
          const d = this.container.querySelector('[data-disp="tempK"]');
          if (d) d.textContent = `${val} K`;
        }
        this.render();
      });
    }

    loop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      const dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;
      this.state.t += Math.min(dt, 0.05);

      this.render();
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      this.updateCanvasDimensions();
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dpr = this.dpr || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      this.renderPistonAndGas(ctx, w, h);

      ctx.restore();
    }

    renderPistonAndGas(ctx, w, h) {
      const { volumeL, tempK, molN, particles } = this.state;
      // p * V = n * R * T => p = nRT / V
      const R = 0.0821; // L.atm / (mol.K)
      const pAtm = (molN * R * tempK) / volumeL;

      const cylX = 30;
      const cylY = 35;
      const maxCylW = Math.min(w * 0.48, 260);
      const cylH = h - 70;

      // Current volume width (proportional to volumeL: 1..6L)
      const curW = (volumeL / 6.0) * maxCylW;

      // Cylinder frame
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(cylX, cylY, curW, cylH);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cylX + maxCylW, cylY); ctx.lineTo(cylX, cylY);
      ctx.lineTo(cylX, cylY + cylH); ctx.lineTo(cylX + maxCylW, cylY + cylH);
      ctx.stroke();

      // Piston (Right boundary of gas)
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(cylX + curW, cylY, 14, cylH);
      // Piston Rod
      ctx.fillRect(cylX + curW + 14, cylY + cylH / 2 - 8, maxCylW - curW + 25, 16);

      // Gas particles bounce inside [cylX .. cylX + curW, cylY .. cylY + cylH]
      const speed = Math.sqrt(tempK / 300) * 1.5;
      ctx.fillStyle = '#2dd4bf';
      particles.forEach(p => {
        p.x += p.vx * speed * 0.02;
        p.y += p.vy * speed * 0.02;

        if (p.x < cylX + 6) { p.x = cylX + 6; p.vx *= -1; }
        if (p.x > cylX + curW - 6) { p.x = cylX + curW - 6; p.vx *= -1; }
        if (p.y < cylY + 6) { p.y = cylY + 6; p.vy *= -1; }
        if (p.y > cylY + cylH - 6) { p.y = cylY + cylH - 6; p.vy *= -1; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Pressure Gauge attached on top
      ctx.fillStyle = '#1e293b';
      ctx.beginPath(); ctx.arc(cylX + 40, cylY - 14, 18, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#38bdf8'; ctx.font = 'bold 9px monospace';
      ctx.fillText(`${fmt(pAtm, 1)}atm`, cylX + 24, cylY - 11);

      // Right Side: Graphic plot (p-V or V-T)
      const plotX = cylX + maxCylW + 55;
      const plotY = cylY;
      const plotW = w - plotX - 25;
      const plotH = cylH;

      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.strokeRect(plotX, plotY, plotW, plotH);

      if (this.mode === 'boyle') {
        // p - V hyperbola
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px monospace';
        ctx.fillText('p (atm)', plotX - 20, plotY + 12);
        ctx.fillText('V (L)', plotX + plotW - 10, plotY + plotH + 15);

        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let v = 1.0; v <= 6.0; v += 0.2) {
          const p = (molN * R * tempK) / v;
          const px = plotX + ((v - 1.0) / 5.0) * plotW;
          const py = plotY + plotH - (p / 8.0) * plotH;
          if (v === 1.0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Current state dot
        const dotX = plotX + ((volumeL - 1.0) / 5.0) * plotW;
        const dotY = plotY + plotH - (pAtm / 8.0) * plotH;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(dotX, dotY, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillText(`(${fmt(volumeL, 1)}L; ${fmt(pAtm, 2)}atm)`, dotX - 20, dotY - 10);
      } else {
        // V - T linear
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px monospace';
        ctx.fillText('V (L)', plotX - 20, plotY + 12);
        ctx.fillText('T (K)', plotX + plotW - 10, plotY + plotH + 15);

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(plotX, plotY + plotH);
        ctx.lineTo(plotX + plotW, plotY + 10);
        ctx.stroke();

        const dotX = plotX + ((tempK - 200) / 400) * plotW;
        const dotY = plotY + plotH - ((volumeL - 1.0) / 5.0) * plotH;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(dotX, dotY, 6, 0, Math.PI * 2); ctx.fill();
      }

      if (this.readoutEl) {
        const kB = 1.38e-23;
        const avgEdJ = 1.5 * kB * tempK;
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Áp suất p:</span> <b class="text-teal-400 font-mono text-sm">${fmt(pAtm, 2)} atm</b></div>
            <div><span class="text-slate-400">Thể tích V:</span> <b class="text-sky-300 font-mono text-sm">${fmt(volumeL, 2)} L</b></div>
            <div><span class="text-slate-400">Nhiệt độ T:</span> <b class="text-orange-400 font-mono text-sm">${tempK} K</b></div>
            <div><span class="text-slate-400">Động năng TB E_đ:</span> <b class="text-amber-300 font-mono text-sm">${(avgEdJ * 1e21).toFixed(2)} × 10⁻²¹ J</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Định luật cơ bản: <span class="text-emerald-400 font-bold">p·V = n·R·T</span> • Động năng tịnh tiến trung bình: <span class="text-amber-300 font-bold">E_đ = ³/₂·k_B·T</span><br>
            Nhiệt độ tuyệt đối là thước đo động năng chuyển động nhiệt trung bình của các phân tử chất khí.
          </div>
        `;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }


  // =========================================================================
  // MÔ PHỎNG 17: TỪ TRƯỜNG & CẢM ỨNG ĐIỆN TỪ (VẬT LÍ 12 - CHƯƠNG III)
  // =========================================================================
  class MagnetismInductionSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'faraday_lenz'; // 'magnetic_field', 'lorentz_force', 'faraday_lenz', 'generator', 'transformer', 'em_wave_model'
      this.state = {
        running: true,
        t: 0,
        magnetPos: options.magnetPos !== undefined ? options.magnetPos : 120, // px from coil
        currentI: options.currentI !== undefined ? options.currentI : 3.0, // A
        bFieldTesla: options.bFieldTesla !== undefined ? options.bFieldTesla : 0.5, // Tesla
        wireLengthM: 0.2, // m
        omegaRot: options.omegaRot !== undefined ? options.omegaRot : 4.0, // rad/s
        n1Turns: options.n1Turns !== undefined ? options.n1Turns : 400,
        n2Turns: options.n2Turns !== undefined ? options.n2Turns : 800
      };

      this.rafId = null;
      this.lastTime = 0;
      this.initDOM();
      this.bindEvents();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl text-slate-100 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-magnet"></i> Thí Nghiệm Từ Trường & Cảm Ứng Điện Từ
              </span>
              <span class="text-xs text-slate-400 font-mono" data-disp="status">Đang hoạt động</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="reset" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <div class="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[360px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-4">
            <canvas class="w-full h-full block"></canvas>
          </div>

          <!-- Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            ${this.renderControlsHTML()}
          </div>

          <!-- Readout -->
          <div data-disp="readout" class="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.readoutEl = this.container.querySelector('[data-disp="readout"]');
      this.btnReset = this.container.querySelector('[data-act="reset"]');
      this.updateCanvasDimensions();
    }

    renderControlsHTML() {
      const { mode, state } = this;
      if (mode === 'lorentz_force') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Cảm ứng từ B:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="bFieldTesla">${fmt(state.bFieldTesla, 2)} T</span>
            </div>
            <input type="range" data-ctrl="bFieldTesla" min="0.1" max="1.5" step="0.1" value="${state.bFieldTesla}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Dòng điện I:</span>
              <span class="font-mono font-bold text-amber-400" data-disp="currentI">${fmt(state.currentI, 1)} A</span>
            </div>
            <input type="range" data-ctrl="currentI" min="0.5" max="10.0" step="0.5" value="${state.currentI}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Quy tắc Bàn tay trái:</span>
            <span class="font-mono font-bold text-rose-400 text-xs">F = B · I · l · sin α</span>
          </div>
        `;
      } else if (mode === 'generator') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Tốc độ quay ω:</span>
              <span class="font-mono font-bold text-emerald-400" data-disp="omegaRot">${fmt(state.omegaRot, 1)} rad/s</span>
            </div>
            <input type="range" data-ctrl="omegaRot" min="1.0" max="10.0" step="0.5" value="${state.omegaRot}" class="w-full accent-emerald-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Suất điện động xoay chiều:</span>
            <span class="font-mono font-bold text-white text-xs">e = E₀ · cos(ωt)</span>
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Tần số dòng điện:</span>
            <span class="font-mono font-bold text-amber-400 text-xs" data-disp="freqRot">${fmt(state.omegaRot / (2 * Math.PI), 2)} Hz</span>
          </div>
        `;
      } else if (mode === 'transformer') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Cuộn sơ cấp N₁:</span>
              <span class="font-mono font-bold text-sky-400" data-disp="n1Turns">${state.n1Turns} vòng</span>
            </div>
            <input type="range" data-ctrl="n1Turns" min="100" max="1000" step="50" value="${state.n1Turns}" class="w-full accent-sky-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Cuộn thứ cấp N₂:</span>
              <span class="font-mono font-bold text-rose-400" data-disp="n2Turns">${state.n2Turns} vòng</span>
            </div>
            <input type="range" data-ctrl="n2Turns" min="100" max="2000" step="50" value="${state.n2Turns}" class="w-full accent-rose-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Hệ thức máy biến áp:</span>
            <span class="font-mono font-bold text-white text-xs">U₂ / U₁ = N₂ / N₁</span>
          </div>
        `;
      } else {
        // faraday_lenz or magnetic_field
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 col-span-1 sm:col-span-2">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Vị trí nam châm d:</span>
              <span class="font-mono font-bold text-indigo-400" data-disp="magnetPos">${fmt(state.magnetPos, 0)} px</span>
            </div>
            <input type="range" data-ctrl="magnetPos" min="40" max="220" step="2" value="${state.magnetPos}" class="w-full accent-indigo-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Định luật Faraday & Lenz:</span>
            <span class="font-mono font-bold text-emerald-400 text-xs">e_c = −ΔΦ / Δt</span>
          </div>
        `;
      }
    }

    updateCanvasDimensions() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 300;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.dpr = dpr;
      this.width = w;
      this.height = h;
    }

    bindEvents() {
      this.btnReset.addEventListener('click', () => {
        this.state.t = 0;
        this.render();
      });

      this.container.addEventListener('input', (e) => {
        const ctrl = e.target.getAttribute('data-ctrl');
        if (!ctrl) return;
        const val = parseFloat(e.target.value);
        if (ctrl === 'magnetPos') {
          this.state.magnetPos = val;
          const d = this.container.querySelector('[data-disp="magnetPos"]');
          if (d) d.textContent = `${fmt(val, 0)} px`;
        } else if (ctrl === 'bFieldTesla') {
          this.state.bFieldTesla = val;
          const d = this.container.querySelector('[data-disp="bFieldTesla"]');
          if (d) d.textContent = `${fmt(val, 2)} T`;
        } else if (ctrl === 'currentI') {
          this.state.currentI = val;
          const d = this.container.querySelector('[data-disp="currentI"]');
          if (d) d.textContent = `${fmt(val, 1)} A`;
        } else if (ctrl === 'omegaRot') {
          this.state.omegaRot = val;
          const d = this.container.querySelector('[data-disp="omegaRot"]');
          if (d) d.textContent = `${fmt(val, 1)} rad/s`;
          const f = this.container.querySelector('[data-disp="freqRot"]');
          if (f) f.textContent = `${fmt(val / (2 * Math.PI), 2)} Hz`;
        } else if (ctrl === 'n1Turns') {
          this.state.n1Turns = val;
          const d = this.container.querySelector('[data-disp="n1Turns"]');
          if (d) d.textContent = `${val} vòng`;
        } else if (ctrl === 'n2Turns') {
          this.state.n2Turns = val;
          const d = this.container.querySelector('[data-disp="n2Turns"]');
          if (d) d.textContent = `${val} vòng`;
        }
        this.render();
      });
    }

    loop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      const dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;
      this.state.t += Math.min(dt, 0.05);

      this.render();
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      this.updateCanvasDimensions();
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dpr = this.dpr || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (this.mode === 'lorentz_force') {
        this.renderLorentzForce(ctx, w, h);
      } else if (this.mode === 'generator') {
        this.renderACGenerator(ctx, w, h);
      } else if (this.mode === 'transformer') {
        this.renderTransformer(ctx, w, h);
      } else {
        this.renderFaradayLenz(ctx, w, h);
      }

      ctx.restore();
    }

    renderFaradayLenz(ctx, w, h) {
      const { magnetPos, t } = this.state;
      const coilX = w / 2 + 50;
      const coilY = h / 2;

      // Bar Magnet on left
      const magX = w / 2 - 180 + (magnetPos - 120);
      const magY = coilY - 20;
      const magW = 90;
      const magH = 40;

      // North pole (Red) and South pole (Blue)
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(magX + magW / 2, magY, magW / 2, magH);
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(magX, magY, magW / 2, magH);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('S', magX + 15, magY + 25);
      ctx.fillText('N', magX + magW / 2 + 15, magY + 25);

      // Magnetic field lines from N to S
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
      ctx.lineWidth = 1.5;
      for (let r = 25; r <= 65; r += 20) {
        ctx.beginPath();
        ctx.arc(magX + magW, coilY, r, -Math.PI / 3, Math.PI / 3);
        ctx.stroke();
      }

      // Solenoid Coil on right
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3.5;
      for (let i = 0; i < 8; i++) {
        const loopX = coilX + i * 14;
        ctx.beginPath();
        ctx.ellipse(loopX, coilY, 12, 35, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Galvanometer (Điện kế) connected below
      const gX = coilX + 50;
      const gY = coilY + 70;
      ctx.fillStyle = '#0f172a';
      ctx.beginPath(); ctx.arc(gX, gY, 20, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#10b981'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#10b981'; ctx.font = 'bold 10px monospace';
      ctx.fillText('G', gX - 4, gY - 4);

      // Galvanometer needle (deflects when magnet moves)
      const speed = Math.sin(t * 3);
      const needleAngle = speed * 0.6;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(gX, gY);
      ctx.lineTo(gX + 16 * Math.sin(needleAngle), gY - 16 * Math.cos(needleAngle));
      ctx.stroke();

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Từ thông qua cuộn dây Φ:</span> <b class="text-amber-400 font-mono text-sm">${fmt(1.5 / Math.max((coilX - (magX + magW)) * 0.05, 0.5), 3)} Wb</b></div>
            <div><span class="text-slate-400">Suất điện động cảm ứng e_c:</span> <b class="text-emerald-400 font-mono text-sm">${fmt(Math.abs(speed) * 4.5, 2)} V</b></div>
            <div><span class="text-slate-400">Cực từ phía cuộn dây:</span> <b class="text-rose-400 font-bold">${speed > 0 ? 'Cực Bắc N (chống lại)' : 'Cực Nam S (hút lại)'}</b></div>
            <div><span class="text-slate-400">Trạng thái dòng điện:</span> <b class="text-cyan-300 font-bold">${Math.abs(speed) > 0.1 ? 'XUẤT HIỆN DÒNG CẢM ỨNG' : 'TĨNH (i_c = 0)'}</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Định luật Lenz: <span class="text-emerald-400 font-bold">Dòng điện cảm ứng xuất hiện có chiều sao cho từ trường do nó sinh ra chống lại nguyên nhân đã sinh ra nó</span>.<br>
            Khi nam châm tiến lại gần, cuộn dây xuất hiện cực Bắc N để đẩy ra; khi nam châm lùi ra xa, cuộn dây xuất hiện cực Nam S để hút giữ lại.
          </div>
        `;
      }
    }

    renderLorentzForce(ctx, w, h) {
      const { bFieldTesla, currentI, wireLengthM } = this.state;
      const F = bFieldTesla * currentI * wireLengthM; // Newton (sin 90° = 1)

      const cx = w / 2;
      const cy = h / 2;

      // Magnetic field B (into the page, represented by green crosses ⊗)
      ctx.fillStyle = '#065f46';
      ctx.font = '14px sans-serif';
      for (let x = cx - 140; x <= cx + 140; x += 35) {
        for (let y = cy - 70; y <= cy + 70; y += 35) {
          ctx.fillText('⊗', x, y);
        }
      }
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Từ trường B⃗ = ${fmt(bFieldTesla, 2)} T (hướng đâm thẳng vào mặt phẳng)`, cx - 140, cy - 80);

      // Horizontal Wire with current I (flowing left to right)
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy); ctx.lineTo(cx + 100, cy);
      ctx.stroke();

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`Dòng điện I = ${fmt(currentI, 1)} A →`, cx - 50, cy + 18);

      // Upward Magnetic Force F vector (Left Hand rule)
      const forceVecLen = Math.min(F * 80, 80);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy); ctx.lineTo(cx, cy - forceVecLen);
      ctx.stroke();

      // Arrow head
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(cx, cy - forceVecLen - 4);
      ctx.lineTo(cx - 6, cy - forceVecLen + 6);
      ctx.lineTo(cx + 6, cy - forceVecLen + 6);
      ctx.closePath();
      ctx.fill();

      ctx.fillText(`Lực từ F⃗ = ${fmt(F, 3)} N`, cx + 10, cy - forceVecLen / 2);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Cảm ứng từ B:</span> <b class="text-emerald-400 font-mono">${fmt(bFieldTesla, 2)} T</b></div>
            <div><span class="text-slate-400">Dòng điện I:</span> <b class="text-amber-400 font-mono">${fmt(currentI, 1)} A</b></div>
            <div><span class="text-slate-400">Chiều dài dây l:</span> <b class="text-white font-mono">${fmt(wireLengthM, 2)} m</b></div>
            <div><span class="text-slate-400">Độ lớn lực từ F:</span> <b class="text-rose-400 font-mono text-sm">${fmt(F, 3)} N</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Quy tắc bàn tay trái: Đặt bàn tay trái sao cho các đường sức từ B⃗ đâm xuyên vào lòng bàn tay, chiều từ cổ tay đến ngón tay giữa chỉ chiều dòng điện I, ngón tay cái choãi ra 90° chỉ chiều của lực từ F⃗.
          </div>
        `;
      }
    }

    renderACGenerator(ctx, w, h) {
      const { omegaRot, t } = this.state;
      const angle = omegaRot * t;
      const E0 = 12.0; // Volts peak
      const eInstant = E0 * Math.cos(angle);

      const genX = 80;
      const genY = h / 2;

      // Two Magnet Poles (N left, S right)
      ctx.fillStyle = '#ef4444'; ctx.fillRect(genX - 60, genY - 45, 30, 90);
      ctx.fillStyle = '#3b82f6'; ctx.fillRect(genX + 70, genY - 45, 30, 90);
      ctx.fillStyle = '#ffffff'; ctx.font = 'bold 12px sans-serif';
      ctx.fillText('N', genX - 50, genY + 4);
      ctx.fillText('S', genX + 80, genY + 4);

      // Rotating Coil Loop in center
      ctx.save();
      ctx.translate(genX + 20, genY);
      ctx.rotate(angle);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.strokeRect(-25, -35, 50, 70);
      ctx.restore();

      // Right Side: Waveform of AC voltage e(t)
      const plotX = genX + 140;
      const plotY = 30;
      const plotW = w - plotX - 25;
      const plotH = h - 60;

      ctx.strokeStyle = '#334155'; ctx.lineWidth = 1;
      ctx.strokeRect(plotX, plotY, plotW, plotH);

      // Sine wave trace
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let px = 0; px <= plotW; px += 2) {
        const timeFrac = (px / plotW) * 3.0; // 3 cycles
        const val = E0 * Math.cos(omegaRot * (t - timeFrac));
        const py = plotY + plotH / 2 - (val / E0) * (plotH * 0.4);
        if (px === 0) ctx.moveTo(plotX + px, py);
        else ctx.lineTo(plotX + px, py);
      }
      ctx.stroke();

      if (this.readoutEl) {
        const f = omegaRot / (2 * Math.PI);
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Tốc độ quay ω:</span> <b class="text-emerald-400 font-mono">${fmt(omegaRot, 1)} rad/s</b></div>
            <div><span class="text-slate-400">Tần số xoay chiều f:</span> <b class="text-amber-400 font-mono">${fmt(f, 2)} Hz</b></div>
            <div><span class="text-slate-400">Suất điện động cực đại E₀:</span> <b class="text-white font-mono">${E0} V</b></div>
            <div><span class="text-slate-400">SĐĐ tức thời e:</span> <b class="text-cyan-300 font-mono text-sm">${fmt(eInstant, 2)} V</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Nguyên tắc tạo dòng điện xoay chiều: <span class="text-cyan-300 font-bold">Hiện tượng cảm ứng điện từ</span> khi quay một khung dây kín trong từ trường đều với tốc độ góc không đổi ω.<br>
            Từ thông: Φ = B·S·cos(ωt) ⇒ Suất điện động cảm ứng: e = −Φ'(t) = E₀·sin(ωt) = E₀·cos(ωt − π/2).
          </div>
        `;
      }
    }

    renderTransformer(ctx, w, h) {
      const { n1Turns, n2Turns } = this.state;
      const u1 = 220; // V input
      const u2 = (u1 * n2Turns) / n1Turns;
      const isStepUp = n2Turns > n1Turns;

      const cx = w / 2;
      const cy = h / 2;

      // Iron Core (Toroid / Square Frame)
      ctx.fillStyle = '#334155';
      ctx.fillRect(cx - 100, cy - 60, 200, 120);
      ctx.clearRect(cx - 50, cy - 30, 100, 60);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.strokeRect(cx - 100, cy - 60, 200, 120);
      ctx.strokeRect(cx - 50, cy - 30, 100, 60);

      // Primary Coil (Left, N1)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      const n1Draw = Math.min(Math.floor(n1Turns / 100), 8);
      for (let i = 0; i < n1Draw; i++) {
        ctx.beginPath();
        ctx.ellipse(cx - 75, cy - 40 + i * 11, 10, 5, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Sơ cấp N₁ = ${n1Turns}`, cx - 130, cy + 75);
      ctx.fillText(`U₁ = ${u1} V`, cx - 110, cy - 70);

      // Secondary Coil (Right, N2)
      ctx.strokeStyle = '#f43f5e';
      const n2Draw = Math.min(Math.floor(n2Turns / 150), 10);
      for (let i = 0; i < n2Draw; i++) {
        ctx.beginPath();
        ctx.ellipse(cx + 75, cy - 45 + i * 10, 10, 5, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = '#f43f5e';
      ctx.fillText(`Thứ cấp N₂ = ${n2Turns}`, cx + 60, cy + 75);
      ctx.fillText(`U₂ = ${fmt(u2, 1)} V`, cx + 60, cy - 70);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Điện áp sơ cấp U₁:</span> <b class="text-sky-300 font-mono">${u1} V</b></div>
            <div><span class="text-slate-400">Điện áp thứ cấp U₂:</span> <b class="text-rose-400 font-mono text-sm">${fmt(u2, 1)} V</b></div>
            <div><span class="text-slate-400">Tỉ số biến áp N₂/N₁:</span> <b class="text-amber-400 font-mono">${fmt(n2Turns / n1Turns, 2)}</b></div>
            <div><span class="text-slate-400">Loại máy biến áp:</span> <b class="${isStepUp ? 'text-emerald-400' : 'text-blue-400'} font-bold">${isStepUp ? 'MÁY TĂNG ÁP' : 'MÁY HẠ ÁP'}</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Định luật biến áp lí tưởng: <span class="text-white font-bold">U₂ / U₁ = N₂ / N₁ = I₁ / I₂</span>.<br>
            Máy biến áp hoạt động dựa trên hiện tượng cảm ứng điện từ và chỉ hoạt động được với dòng điện xoay chiều (không dùng được với dòng 1 chiều).
          </div>
        `;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }


  // =========================================================================
  // MÔ PHỎNG 18: VẬT LÍ HẠT NHÂN & PHÓNG XẠ (VẬT LÍ 12 - CHƯƠNG IV)
  // =========================================================================
  class NuclearPhysicsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'nucleus_structure'; // 'nucleus_structure', 'binding_energy', 'radioactivity', 'reactor_fission', 'carbon_dating'
      this.state = {
        running: true,
        t: 0,
        selectedNuclide: options.selectedNuclide || 'U235', // 'He4', 'C12', 'Fe56', 'U235'
        halflifeT: options.halflifeT !== undefined ? options.halflifeT : 5.0, // seconds for sim
        n0Nuclei: 100,
        decayFraction: 1.0,
        simAgeYears: 5730 // Carbon dating
      };

      this.rafId = null;
      this.lastTime = 0;
      this.initDOM();
      this.bindEvents();
      this.loop = this.loop.bind(this);
      this.rafId = requestAnimationFrame(this.loop);
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl text-slate-100 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-violet-500/20 text-violet-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-radiation"></i> Thí Nghiệm Vật Lí Hạt Nhân & Phóng Xạ
              </span>
              <span class="text-xs text-slate-400 font-mono" data-disp="status">Mô phỏng giáo dục</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="reset" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <div class="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[360px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-4">
            <canvas class="w-full h-full block"></canvas>
          </div>

          <!-- Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-3">
            ${this.renderControlsHTML()}
          </div>

          <!-- Readout -->
          <div data-disp="readout" class="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.readoutEl = this.container.querySelector('[data-disp="readout"]');
      this.btnReset = this.container.querySelector('[data-act="reset"]');
      this.updateCanvasDimensions();
    }

    renderControlsHTML() {
      const { mode, state } = this;
      if (mode === 'radioactivity') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Chu kỳ bán rã T (mô phỏng):</span>
              <span class="font-mono font-bold text-amber-400" data-disp="halflifeT">${fmt(state.halflifeT, 1)} s</span>
            </div>
            <input type="range" data-ctrl="halflifeT" min="2.0" max="10.0" step="0.5" value="${state.halflifeT}" class="w-full accent-amber-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Định luật phóng xạ:</span>
            <span class="font-mono font-bold text-violet-400 text-xs">N(t) = N₀ · 2^(-t/T)</span>
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Hằng số phóng xạ:</span>
            <span class="font-mono font-bold text-white text-xs">λ = ln(2) / T</span>
          </div>
        `;
      } else if (mode === 'carbon_dating') {
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 col-span-1 sm:col-span-2">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Tỉ lệ ¹⁴C còn lại trong cổ vật:</span>
              <span class="font-mono font-bold text-emerald-400" data-disp="decayFrac">${fmt(state.decayFraction * 100, 1)}%</span>
            </div>
            <input type="range" data-ctrl="decayFrac" min="0.05" max="1.0" step="0.05" value="${state.decayFraction}" class="w-full accent-emerald-500">
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Chu kì bán rã ¹⁴C:</span>
            <span class="font-mono font-bold text-amber-400 text-xs">T = 5.730 năm</span>
          </div>
        `;
      } else {
        // nucleus_structure or binding_energy or reactor_fission
        return `
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 col-span-1 sm:col-span-2">
            <div class="flex justify-between text-slate-300 mb-1">
              <span>Chọn hạt nhân khảo sát:</span>
              <span class="font-mono font-bold text-violet-400" data-disp="nuclideName">${state.selectedNuclide}</span>
            </div>
            <div class="flex gap-2">
              <button data-btn-nuc="He4" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] ${state.selectedNuclide === 'He4' ? 'border border-violet-400 font-bold' : ''}">⁴₂He (Heli)</button>
              <button data-btn-nuc="C12" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] ${state.selectedNuclide === 'C12' ? 'border border-violet-400 font-bold' : ''}">¹²₆C (Cacbon)</button>
              <button data-btn-nuc="Fe56" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] ${state.selectedNuclide === 'Fe56' ? 'border border-violet-400 font-bold' : ''}">⁵⁶₂₆Fe (Sắt)</button>
              <button data-btn-nuc="U235" class="flex-1 py-1 px-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-mono text-[11px] ${state.selectedNuclide === 'U235' ? 'border border-violet-400 font-bold' : ''}">²³⁵₉₂U (Urani)</button>
            </div>
          </div>
          <div class="p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/50 flex flex-col justify-center">
            <span class="text-slate-400 text-[11px]">Hệ thức Einstein:</span>
            <span class="font-mono font-bold text-white text-xs">E = m·c² (1u ≈ 931,5 MeV)</span>
          </div>
        `;
      }
    }

    updateCanvasDimensions() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 300;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.dpr = dpr;
      this.width = w;
      this.height = h;
    }

    bindEvents() {
      this.btnReset.addEventListener('click', () => {
        this.state.t = 0;
        this.render();
      });

      this.container.addEventListener('input', (e) => {
        const ctrl = e.target.getAttribute('data-ctrl');
        if (!ctrl) return;
        const val = parseFloat(e.target.value);
        if (ctrl === 'halflifeT') {
          this.state.halflifeT = val;
          const d = this.container.querySelector('[data-disp="halflifeT"]');
          if (d) d.textContent = `${fmt(val, 1)} s`;
        } else if (ctrl === 'decayFrac') {
          this.state.decayFraction = val;
          const d = this.container.querySelector('[data-disp="decayFrac"]');
          if (d) d.textContent = `${fmt(val * 100, 1)}%`;
        }
        this.render();
      });

      this.container.addEventListener('click', (e) => {
        const btnNuc = e.target.closest('[data-btn-nuc]');
        if (btnNuc) {
          this.state.selectedNuclide = btnNuc.getAttribute('data-btn-nuc');
          this.container.querySelectorAll('[data-btn-nuc]').forEach(b => b.classList.remove('border', 'border-violet-400', 'font-bold'));
          btnNuc.classList.add('border', 'border-violet-400', 'font-bold');
          const d = this.container.querySelector('[data-disp="nuclideName"]');
          if (d) d.textContent = this.state.selectedNuclide;
          this.render();
        }
      });
    }

    loop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      const dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;
      this.state.t += Math.min(dt, 0.05);

      this.render();
      this.rafId = requestAnimationFrame(this.loop);
    }

    render() {
      if (!this.canvas) return;
      this.updateCanvasDimensions();
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dpr = this.dpr || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (this.mode === 'radioactivity') {
        this.renderDecayCurve(ctx, w, h);
      } else if (this.mode === 'carbon_dating') {
        this.renderCarbonDating(ctx, w, h);
      } else {
        this.renderNucleusStructure(ctx, w, h);
      }

      ctx.restore();
    }

    renderNucleusStructure(ctx, w, h) {
      const { selectedNuclide } = this.state;
      const nuclideData = {
        He4: { A: 4, Z: 2, N: 2, name: 'Heli-4', massU: 4.0015, ElkR: 7.07 },
        C12: { A: 12, Z: 6, N: 6, name: 'Cacbon-12', massU: 12.0000, ElkR: 7.68 },
        Fe56: { A: 56, Z: 26, N: 30, name: 'Sắt-56', massU: 55.9349, ElkR: 8.79 },
        U235: { A: 235, Z: 92, N: 143, name: 'Urani-235', massU: 235.0439, ElkR: 7.59 }
      };

      const nuc = nuclideData[selectedNuclide] || nuclideData.He4;
      const cx = w * 0.35;
      const cy = h / 2;

      // Draw Nucleus sphere cluster
      const numDrawP = Math.min(nuc.Z, 16);
      const numDrawN = Math.min(nuc.N, 18);

      // Protons (Red) and Neutrons (Blue)
      for (let i = 0; i < numDrawP; i++) {
        const rad = 25 * Math.sqrt(i / numDrawP) + 4;
        const angle = i * 2.4;
        const px = cx + rad * Math.cos(angle);
        const py = cy + rad * Math.sin(angle);
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1; ctx.stroke();
      }

      for (let j = 0; j < numDrawN; j++) {
        const rad = 28 * Math.sqrt(j / numDrawN) + 6;
        const angle = j * 2.4 + 1.2;
        const nx = cx + rad * Math.cos(angle);
        const ny = cy + rad * Math.sin(angle);
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath(); ctx.arc(nx, ny, 7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1; ctx.stroke();
      }

      // Legend
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(cx - 50, h - 25, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#cbd5e1'; ctx.font = '10px sans-serif';
      ctx.fillText(`Proton: Z = ${nuc.Z}`, cx - 38, h - 22);

      ctx.fillStyle = '#3b82f6';
      ctx.beginPath(); ctx.arc(cx + 60, h - 25, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText(`Neutron: N = ${nuc.N}`, cx + 72, h - 22);

      // Right Side: Binding energy per nucleon graph (Elk/A vs A curve)
      const plotX = w * 0.62;
      const plotY = 30;
      const plotW = w - plotX - 25;
      const plotH = h - 60;

      ctx.strokeStyle = '#334155'; ctx.lineWidth = 1;
      ctx.strokeRect(plotX, plotY, plotW, plotH);

      // Curve Elk/A vs A
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(plotX + 5, plotY + plotH - 20);
      ctx.bezierCurveTo(
        plotX + plotW * 0.15, plotY + 10,  // Peak near Fe56 (8.8 MeV)
        plotX + plotW * 0.45, plotY + 15,
        plotX + plotW, plotY + plotH * 0.35 // Slopes down to U235 (7.6 MeV)
      );
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.fillText('E_lkr (MeV/nuclon)', plotX - 10, plotY + 12);
      ctx.fillText('A', plotX + plotW - 10, plotY + plotH + 15);
      ctx.fillText('Fe-56 (8,79 MeV) ★ Bền vững nhất', plotX + 15, plotY + 28);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Số khối A:</span> <b class="text-violet-400 font-mono text-sm">${nuc.A} nuclon</b></div>
            <div><span class="text-slate-400">Điện tích hạt nhân Z:</span> <b class="text-rose-400 font-mono text-sm">+${nuc.Z} e</b></div>
            <div><span class="text-slate-400">Số hạt neutron N:</span> <b class="text-sky-300 font-mono text-sm">${nuc.N}</b></div>
            <div><span class="text-slate-400">NL liên kết riêng:</span> <b class="text-emerald-400 font-mono text-sm">${nuc.ElkR} MeV/nuclon</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Ký hiệu hạt nhân: <span class="font-bold text-white">^${nuc.A}_${nuc.Z}X</span> • Năng lượng liên kết riêng <span class="text-emerald-400 font-bold">E_lkr = E_lk / A</span> là đại lượng đặc trưng cho độ bền vững của hạt nhân.<br>
            Hạt nhân có số khối trung bình (50 < A < 80, tiêu biểu là ⁵⁶₂₆Fe) có năng lượng liên kết riêng lớn nhất nên bền vững nhất trong tự nhiên.
          </div>
        `;
      }
    }

    renderDecayCurve(ctx, w, h) {
      const { halflifeT, t } = this.state;
      const decayRatio = Math.pow(0.5, t / halflifeT);

      const plotX = 60;
      const plotY = 30;
      const plotW = w - 100;
      const plotH = h - 65;

      ctx.strokeStyle = '#334155'; ctx.lineWidth = 1;
      ctx.strokeRect(plotX, plotY, plotW, plotH);

      // Axes labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.fillText('N(t) / N₀ (%)', plotX - 25, plotY + 12);
      ctx.fillText('Thời gian t (s)', plotX + plotW - 40, plotY + plotH + 18);

      // Exponential decay curve
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let px = 0; px <= plotW; px += 2) {
        const timeSim = (px / plotW) * (4 * halflifeT); // 4 half-lives
        const ratio = Math.pow(0.5, timeSim / halflifeT);
        const py = plotY + plotH - ratio * plotH;
        if (px === 0) ctx.moveTo(plotX + px, py);
        else ctx.lineTo(plotX + px, py);
      }
      ctx.stroke();

      // Half-life markers (T, 2T, 3T)
      for (let k = 1; k <= 3; k++) {
        const mx = plotX + (k / 4) * plotW;
        ctx.strokeStyle = '#64748b';
        ctx.setLineDash([2, 2]);
        ctx.beginPath(); ctx.moveTo(mx, plotY); ctx.lineTo(mx, plotY + plotH); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillText(`${k}T (${(100 / Math.pow(2, k)).toFixed(1)}%)`, mx - 15, plotY + plotH + 12);
      }

      // Current Time dot
      const curX = plotX + Math.min((t / (4 * halflifeT)) * plotW, plotW);
      const curY = plotY + plotH - decayRatio * plotH;
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath(); ctx.arc(curX, curY, 6, 0, Math.PI * 2); ctx.fill();

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Thời gian t:</span> <b class="text-white font-mono">${fmt(t, 1)} s</b></div>
            <div><span class="text-slate-400">Chu kỳ bán rã T:</span> <b class="text-amber-400 font-mono">${fmt(halflifeT, 1)} s</b></div>
            <div><span class="text-slate-400">Số hạt còn lại N/N₀:</span> <b class="text-violet-300 font-mono text-sm">${fmt(decayRatio * 100, 2)}%</b></div>
            <div><span class="text-slate-400">Số hạt đã phân rã ΔN:</span> <b class="text-rose-400 font-mono text-sm">${fmt((1 - decayRatio) * 100, 2)}%</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Định luật phóng xạ: <span class="text-violet-400 font-bold">N(t) = N₀·2^(-t/T) = N₀·e^(-λt)</span> với hằng số phóng xạ λ = ln(2) / T ≈ 0,693 / T.<br>
            Cứ sau mỗi chu kỳ bán rã T, một nửa số hạt nhân hiện có bị phân rã biến đổi thành hạt nhân khác.
          </div>
        `;
      }
    }

    renderCarbonDating(ctx, w, h) {
      const { decayFraction } = this.state;
      const T_C14 = 5730; // years
      const ageYears = -T_C14 * (Math.log(decayFraction) / Math.LN2);

      const cx = w / 2;
      const cy = h / 2 - 15;

      // Visual Archeological Fossil
      ctx.fillStyle = '#78350f';
      ctx.beginPath(); ctx.ellipse(cx - 100, cy, 60, 40, -0.2, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#d97706'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#fef3c7'; ctx.font = 'bold 12px sans-serif';
      ctx.fillText('Cổ vật hữu cơ gỗ', cx - 145, cy + 4);

      // Remaining C14 badge
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(cx + 10, cy - 40, 180, 80);
      ctx.strokeStyle = '#10b981'; ctx.lineWidth = 2;
      ctx.strokeRect(cx + 10, cy - 40, 180, 80);

      ctx.fillStyle = '#10b981'; ctx.font = 'bold 13px sans-serif';
      ctx.fillText('KẾT QUẢ ĐỊNH TUỔI ¹⁴C', cx + 25, cy - 18);
      ctx.fillStyle = '#ffffff'; ctx.font = 'bold 15px monospace';
      ctx.fillText(`${fmt(ageYears, 0)} NĂM TUỔI`, cx + 25, cy + 12);
      ctx.fillStyle = '#94a3b8'; ctx.font = '10px sans-serif';
      ctx.fillText(`Tỉ lệ ¹⁴C còn lại: ${fmt(decayFraction * 100, 1)}%`, cx + 25, cy + 30);

      if (this.readoutEl) {
        this.readoutEl.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pb-1 border-b border-slate-800">
            <div><span class="text-slate-400">Đồng vị phóng xạ:</span> <b class="text-white font-mono">Cacbon ¹⁴₆C</b></div>
            <div><span class="text-slate-400">Chu kì bán rã T:</span> <b class="text-amber-400 font-mono">5.730 năm</b></div>
            <div><span class="text-slate-400">Tỉ lệ ¹⁴C hiện tại:</span> <b class="text-emerald-400 font-mono">${fmt(decayFraction * 100, 1)}%</b></div>
            <div><span class="text-slate-400">Tuổi ước tính:</span> <b class="text-amber-300 font-mono text-sm">${fmt(ageYears, 0)} năm</b></div>
          </div>
          <div class="text-[11px] pt-1">
            Phương pháp định tuổi khảo cổ: Sinh vật khi còn sống trao đổi chất liên tục giữ tỉ lệ ¹⁴C/¹²C không đổi. Khi sinh vật chết, quá trình trao đổi chất ngừng, ¹⁴C phân rã với chu kì T = 5.730 năm: <span class="text-emerald-400 font-bold">t = −T·log₂(N/N₀)</span>.
          </div>
        `;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    }
  }

  return {
    CircularMotionSim,
    SHMSim,
    SpringSim,
    PendulumSim,
    WaveSim,
    MeasurementErrorSim,
    KinematicsMotionSim,
    DynamicsForceSim,
    WorkEnergySim,
    MomentumCollisionSim,
    FluidElasticSim,
    WaveAcousticsSim,
    ElectrostaticsSim,
    ElectricCircuitSim,
    ThermalPhysicsSim,
    IdealGasSim,
    MagnetismInductionSim,
    NuclearPhysicsSim,
    create(type, container, options) {
      switch (type.toLowerCase()) {
        case 'circular':
        case 'circularmotion':
        case 'tron_deu':
          return new CircularMotionSim(container, options);
        case 'shm':
        case 'harmonic':
        case 'dieu_hoa':
          return new SHMSim(container, options);
        case 'spring':
        case 'lo_xo':
          return new SpringSim(container, options);
        case 'pendulum':
        case 'con_lac_don':
          return new PendulumSim(container, options);
        case 'wave':
        case 'song_co':
          return new WaveSim(container, options);
        case 'measurement':
        case 'caliper':
        case 'error':
        case 'sai_so':
          return new MeasurementErrorSim(container, options);
        case 'kinematics':
        case 'motion':
        case 'chuyen_dong':
          return new KinematicsMotionSim(container, options);
        case 'dynamics':
        case 'force':
        case 'luc':
        case 'newton':
          return new DynamicsForceSim(container, options);
        case 'energy':
        case 'work':
        case 'nang_luong':
          return new WorkEnergySim(container, options);
        case 'momentum':
        case 'collision':
        case 'dong_luong':
          return new MomentumCollisionSim(container, options);
        case 'elastic':
        case 'fluid':
        case 'hooke':
        case 'ap_suat':
          return new FluidElasticSim(container, options);
        case 'wave_acoustics':
        case 'waveacoustics':
        case 'sound_tube':
        case 'interference':
        case 'standing_wave':
        case 'giao_thoa':
        case 'song_dung':
        case 'acoustics':
        case 'spectrum':
          return new WaveAcousticsSim(container, options);
        case 'electrostatics':
        case 'coulomb':
        case 'electric_field':
        case 'capacitor':
        case 'dien_truong':
        case 'tu_dien':
          return new ElectrostaticsSim(container, options);
        case 'circuit':
        case 'electric_circuit':
        case 'current':
        case 'ohm':
        case 'mach_dien':
        case 'dong_dien':
          return new ElectricCircuitSim(container, options);
        case 'thermal':
        case 'thermal_physics':
        case 'nhiet':
        case 'nhiet_do':
        case 'nhiet_dung':
          return new ThermalPhysicsSim(container, options);
        case 'gas':
        case 'idealgas':
        case 'ideal_gas':
        case 'khi_li_tuong':
        case 'boyle':
        case 'charles':
          return new IdealGasSim(container, options);
        case 'magnetism':
        case 'induction':
        case 'tu_truong':
        case 'cam_ung_tu':
        case 'lenz':
        case 'faraday':
          return new MagnetismInductionSim(container, options);
        case 'nuclear':
        case 'nuclear_physics':
        case 'hat_nhan':
        case 'phong_xa':
        case 'decay':
          return new NuclearPhysicsSim(container, options);
        default:
          console.warn('Unknown simulation type:', type);
          return null;
      }
    }
  };
});
