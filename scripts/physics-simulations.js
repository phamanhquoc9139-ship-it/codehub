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

  // Public API
  return {
    CircularMotionSim,
    SHMSim,
    SpringSim,
    PendulumSim,
    WaveSim,
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
        default:
          console.warn('Unknown simulation type:', type);
          return null;
      }
    }
  };
});
