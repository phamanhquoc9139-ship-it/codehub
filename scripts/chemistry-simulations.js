/**
 * Học viện CodeHub - Hệ Thống Phòng Thí Nghiệm Hóa Học Ảo Tương Tác (THPT 10 - 11 - 12)
 * Pure HTML5 Canvas 2D/3D Projection, SVG & Vanilla JavaScript (100% Client-Side, Zero Paid AI APIs)
 *
 * Triển khai 3 mô phỏng phản ứng trọng tâm + Mô hình phân tử 2D/3D + Luyện tập cân bằng phương trình:
 * 1. Phản ứng tạo nước: 2H₂(g) + O₂(g) → 2H₂O(g/l) (Lớp 10 - Liên kết hóa học & Enthalpy)
 * 2. Kim loại tác dụng với Axit: M(Zn, Mg, Fe, Cu) + HCl(aq) → Muối + H₂↑ (Lớp 10 - Oxi hóa khử & Tốc độ phản ứng)
 * 3. Phản ứng tạo kết tủa: BaSO₄, AgCl, Cu(OH)₂, Fe(OH)₃ (Lớp 11 - Dung dịch điện li & Trao đổi ion)
 * 4. Mô hình Phân tử 2D/3D tương tác (Xoay 360°, Phóng to/Thu nhỏ, Cầu-Thanh, Đặc CPK, Lewis 2D)
 * 5. Luyện tập Cân bằng Phương trình & Kiểm tra Bảo toàn Nguyên tố
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CodeHubChemistry = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const TWO_PI = Math.PI * 2;
  const DEG_TO_RAD = Math.PI / 180;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function formatNum(num, decimals = 2) {
    if (isNaN(num) || num === null || num === undefined) return '0.00';
    return Number(num).toFixed(decimals);
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
      grid: dark ? 'rgba(148, 163, 184, 0.14)' : 'rgba(100, 116, 139, 0.14)',
      axis: dark ? '#475569' : '#cbd5e1',
      glassStroke: dark ? '#94a3b8' : '#475569',
      glassFill: dark ? 'rgba(30, 41, 59, 0.45)' : 'rgba(241, 245, 249, 0.65)',
      primary: '#0d9488',
      emerald: '#10b981',
      rose: '#f43f5e',
      amber: '#f59e0b',
      blue: '#3b82f6',
      purple: '#8b5cf6'
    };
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

  // CPK Atomic Colors & Radii (pm scaled)
  const ATOM_SPECS = {
    H:  { color: '#f8fafc', stroke: '#64748b', radius: 14, mass: 1.008, name: 'Hydrogen' },
    O:  { color: '#ef4444', stroke: '#991b1b', radius: 22, mass: 15.999, name: 'Oxygen' },
    C:  { color: '#334155', stroke: '#0f172a', radius: 24, mass: 12.011, name: 'Carbon' },
    N:  { color: '#3b82f6', stroke: '#1d4ed8', radius: 23, mass: 14.007, name: 'Nitrogen' },
    Cl: { color: '#22c55e', stroke: '#15803d', radius: 26, mass: 35.45, name: 'Chlorine' },
    Na: { color: '#a855f7', stroke: '#6b21a8', radius: 27, mass: 22.99, name: 'Sodium' },
    Zn: { color: '#94a3b8', stroke: '#475569', radius: 26, mass: 65.38, name: 'Zinc' },
    Mg: { color: '#cbd5e1', stroke: '#64748b', radius: 25, mass: 24.305, name: 'Magnesium' },
    Fe: { color: '#d97706', stroke: '#92400e', radius: 26, mass: 55.845, name: 'Iron' },
    Cu: { color: '#ea580c', stroke: '#9a3412', radius: 26, mass: 63.546, name: 'Copper' },
    Ba: { color: '#14b8a6', stroke: '#0f766e', radius: 29, mass: 137.33, name: 'Barium' },
    S:  { color: '#eab308', stroke: '#a16207', radius: 25, mass: 32.06, name: 'Sulfur' },
    Ag: { color: '#e2e8f0', stroke: '#475569', radius: 27, mass: 107.87, name: 'Silver' }
  };

  // Database of 3D Molecular Geometries (coordinates in Angstroms, scaled for 3D viewer)
  const MOLECULE_DB = {
    H2O: {
      name: 'Nước (H₂O)',
      formula: 'H₂O',
      geometry: 'Góc (Bent - VSEPR AX₂E₂)',
      angle: '104.5°',
      bondLength: 'O–H: 95.8 pm',
      bondType: 'Liên kết cộng hóa trị phân cực (2 liên kết đơn σ)',
      dipole: 'Có phân cực (μ = 1.85 D)',
      lewis2D: 'H — Ö — H (2 cặp electron hóa trị chưa liên kết trên O)',
      atoms: [
        { el: 'O', x: 0, y: -0.15, z: 0 },
        { el: 'H', x: 0.76, y: 0.45, z: 0 },
        { el: 'H', x: -0.76, y: 0.45, z: 0 }
      ],
      bonds: [
        { a: 0, b: 1, order: 1 },
        { a: 0, b: 2, order: 1 }
      ]
    },
    H2: {
      name: 'Khí Hydrogen (H₂)',
      formula: 'H₂',
      geometry: 'Đường thẳng (Linear)',
      angle: '180°',
      bondLength: 'H–H: 74 pm',
      bondType: 'Liên kết cộng hóa trị không phân cực (xen phủ trục s–s tạo liên kết σ)',
      dipole: 'Không phân cực (μ = 0 D)',
      lewis2D: 'H — H (1 cặp electron dùng chung)',
      atoms: [
        { el: 'H', x: -0.45, y: 0, z: 0 },
        { el: 'H', x: 0.45, y: 0, z: 0 }
      ],
      bonds: [
        { a: 0, b: 1, order: 1 }
      ]
    },
    O2: {
      name: 'Khí Oxygen (O₂)',
      formula: 'O₂',
      geometry: 'Đường thẳng (Linear)',
      angle: '180°',
      bondLength: 'O=O: 121 pm',
      bondType: 'Liên kết đôi cộng hóa trị không cực (1 liên kết σ + 1 liên kết π)',
      dipole: 'Không phân cực (μ = 0 D)',
      lewis2D: ':Ö = Ö: (2 cặp electron dùng chung)',
      atoms: [
        { el: 'O', x: -0.62, y: 0, z: 0 },
        { el: 'O', x: 0.62, y: 0, z: 0 }
      ],
      bonds: [
        { a: 0, b: 1, order: 2 }
      ]
    },
    HCl: {
      name: 'Hydrogen Chloride (HCl)',
      formula: 'HCl',
      geometry: 'Đường thẳng (Linear)',
      angle: '180°',
      bondLength: 'H–Cl: 127 pm',
      bondType: 'Liên kết cộng hóa trị phân cực mạnh về phía Cl (Δχ = 0.96)',
      dipole: 'Phân cực (μ = 1.08 D)',
      lewis2D: 'H — Cl (Cl có 3 cặp electron riêng)',
      atoms: [
        { el: 'H', x: -0.65, y: 0, z: 0 },
        { el: 'Cl', x: 0.55, y: 0, z: 0 }
      ],
      bonds: [
        { a: 0, b: 1, order: 1 }
      ]
    },
    CO2: {
      name: 'Carbon Dioxide (CO₂)',
      formula: 'CO₂',
      geometry: 'Đường thẳng (Linear - lai hóa sp)',
      angle: '180°',
      bondLength: 'C=O: 116 pm',
      bondType: '2 liên kết đôi C=O phân cực nhưng triệt tiêu nhau do đối xứng thẳng',
      dipole: 'Không phân cực tổng cộng (μ = 0 D)',
      lewis2D: ':Ö = C = Ö:',
      atoms: [
        { el: 'C', x: 0, y: 0, z: 0 },
        { el: 'O', x: -1.16, y: 0, z: 0 },
        { el: 'O', x: 1.16, y: 0, z: 0 }
      ],
      bonds: [
        { a: 0, b: 1, order: 2 },
        { a: 0, b: 2, order: 2 }
      ]
    },
    NH3: {
      name: 'Ammonia (NH₃)',
      formula: 'NH₃',
      geometry: 'Chóp tam giác (Trigonal Pyramidal - AX₃E₁)',
      angle: '107.3°',
      bondLength: 'N–H: 101.7 pm',
      bondType: '3 liên kết đơn N–H cộng hóa trị phân cực',
      dipole: 'Phân cực (μ = 1.42 D)',
      lewis2D: 'H — N̈(H) — H (1 cặp electron hóa trị riêng trên N)',
      atoms: [
        { el: 'N', x: 0, y: -0.25, z: 0 },
        { el: 'H', x: 0.94, y: 0.35, z: 0 },
        { el: 'H', x: -0.47, y: 0.35, z: 0.81 },
        { el: 'H', x: -0.47, y: 0.35, z: -0.81 }
      ],
      bonds: [
        { a: 0, b: 1, order: 1 },
        { a: 0, b: 2, order: 1 },
        { a: 0, b: 3, order: 1 }
      ]
    },
    CH4: {
      name: 'Methane (CH₄)',
      formula: 'CH₄',
      geometry: 'Tứ diện đều (Tetrahedral - AX₄)',
      angle: '109.5°',
      bondLength: 'C–H: 108.7 pm',
      bondType: '4 liên kết đơn σ (C–H) gần như không phân cực',
      dipole: 'Không phân cực (μ = 0 D)',
      lewis2D: 'H — C(H)(H) — H',
      atoms: [
        { el: 'C', x: 0, y: 0, z: 0 },
        { el: 'H', x: 0, y: -1.08, z: 0 },
        { el: 'H', x: 1.02, y: 0.36, z: 0 },
        { el: 'H', x: -0.51, y: 0.36, z: 0.88 },
        { el: 'H', x: -0.51, y: 0.36, z: -0.88 }
      ],
      bonds: [
        { a: 0, b: 1, order: 1 },
        { a: 0, b: 2, order: 1 },
        { a: 0, b: 3, order: 1 },
        { a: 0, b: 4, order: 1 }
      ]
    },
    BaSO4: {
      name: 'Barium Sulfate (BaSO₄ - Cụm ion)',
      formula: 'BaSO₄',
      geometry: 'Mạng tinh thể ion (Ba²⁺ và tứ diện SO₄²⁻)',
      angle: 'O–S–O: 109.5°',
      bondLength: 'S–O: 149 pm',
      bondType: 'Liên kết ion giữa Ba²⁺ và SO₄²⁻; liên kết cộng hóa trị trong SO₄²⁻',
      dipole: 'Tinh thể ion bền vững, kết tủa trắng không tan trong axit',
      lewis2D: '[Ba]²⁺ [SO₄]²⁻',
      atoms: [
        { el: 'S', x: 0.3, y: 0, z: 0 },
        { el: 'O', x: 0.3, y: -1.1, z: 0 },
        { el: 'O', x: 1.3, y: 0.36, z: 0 },
        { el: 'O', x: -0.25, y: 0.36, z: 0.9 },
        { el: 'O', x: -0.25, y: 0.36, z: -0.9 },
        { el: 'Ba', x: -1.65, y: -0.1, z: 0 }
      ],
      bonds: [
        { a: 0, b: 1, order: 2 },
        { a: 0, b: 2, order: 2 },
        { a: 0, b: 3, order: 1 },
        { a: 0, b: 4, order: 1 }
      ]
    }
  };

  // Helper to draw shaded 3D sphere on 2D canvas
  function draw3DSphere(ctx, x, y, radius, baseColor, strokeColor, label, showLabel = true) {
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.28)';
    ctx.shadowBlur = Math.max(4, radius * 0.35);
    ctx.shadowOffsetY = radius * 0.12;

    const grad = ctx.createRadialGradient(
      x - radius * 0.32,
      y - radius * 0.32,
      radius * 0.1,
      x,
      y,
      radius
    );
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.3, baseColor);
    grad.addColorStop(1, strokeColor || '#0f172a');

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TWO_PI);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = strokeColor || '#334155';
    ctx.stroke();
    ctx.restore();

    if (showLabel && label && radius >= 8) {
      ctx.save();
      ctx.fillStyle = label === 'H' || label === 'Ag' || label === 'Mg' ? '#0f172a' : '#ffffff';
      ctx.font = `bold ${Math.max(9, Math.round(radius * 0.58))}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, x, y);
      ctx.restore();
    }
  }

  // Helper to render a 3D molecule with rotation (rotX, rotY), zoom, and mode ('ball-stick', 'cpk', '2d')
  function renderMolecule3D(ctx, width, height, molKey, viewState) {
    const mol = MOLECULE_DB[molKey] || MOLECULE_DB.H2O;
    const theme = getThemeColors();
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const scaleBase = Math.min(width, height) * 0.27 * (viewState.zoom || 1.0);

    if (viewState.mode === '2d') {
      // Render 2D structural formula & Lewis view
      ctx.save();
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      for (let x = 20; x < width; x += 24) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 20; y < height; y += 24) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // Draw 2D bonds and flat circles
      mol.bonds.forEach(b => {
        const a1 = mol.atoms[b.a];
        const a2 = mol.atoms[b.b];
        const x1 = cx + a1.x * scaleBase;
        const y1 = cy + a1.y * scaleBase;
        const x2 = cx + a2.x * scaleBase;
        const y2 = cy + a2.y * scaleBase;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        ctx.strokeStyle = theme.textMain;
        ctx.lineWidth = 3;
        if (b.order === 2) {
          ctx.beginPath();
          ctx.moveTo(x1 + nx * 4, y1 + ny * 4);
          ctx.lineTo(x2 + nx * 4, y2 + ny * 4);
          ctx.moveTo(x1 - nx * 4, y1 - ny * 4);
          ctx.lineTo(x2 - nx * 4, y2 - ny * 4);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      });

      mol.atoms.forEach(a => {
        const spec = ATOM_SPECS[a.el] || ATOM_SPECS.C;
        const x = cx + a.x * scaleBase;
        const y = cy + a.y * scaleBase;
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, TWO_PI);
        ctx.fillStyle = theme.panelBg;
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = spec.stroke;
        ctx.stroke();

        ctx.fillStyle = theme.textMain;
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(a.el, x, y);
      });

      ctx.fillStyle = theme.primary;
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`Biểu diễn phẳng 2D: ${mol.lewis2D}`, cx, height - 18);
      ctx.restore();
      return;
    }

    // 3D Rotation Matrices
    const cosX = Math.cos(viewState.rotX || 0);
    const sinX = Math.sin(viewState.rotX || 0);
    const cosY = Math.cos(viewState.rotY || 0);
    const sinY = Math.sin(viewState.rotY || 0);

    const projected = mol.atoms.map((a, idx) => {
      // Rotate around Y then X
      const x1 = a.x * cosY - a.z * sinY;
      const z1 = a.x * sinY + a.z * cosY;
      const y2 = a.y * cosX - z1 * sinX;
      const z2 = a.y * sinX + z1 * cosX;

      const fov = 4.2;
      const persp = fov / (fov - z2 * 0.45);
      return {
        idx,
        el: a.el,
        px: cx + x1 * scaleBase * persp,
        py: cy + y2 * scaleBase * persp,
        z: z2,
        persp
      };
    });

    // Draw bonds first if ball-and-stick
    if (viewState.mode !== 'cpk') {
      mol.bonds.forEach(b => {
        const p1 = projected[b.a];
        const p2 = projected[b.b];
        const dx = p2.px - p1.px;
        const dy = p2.py - p1.py;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        ctx.save();
        ctx.strokeStyle = theme.dark ? '#94a3b8' : '#64748b';
        ctx.lineCap = 'round';
        if (b.order === 2) {
          ctx.lineWidth = 4.5 * (viewState.zoom || 1);
          ctx.beginPath();
          ctx.moveTo(p1.px + nx * 4.5, p1.py + ny * 4.5);
          ctx.lineTo(p2.px + nx * 4.5, p2.py + ny * 4.5);
          ctx.moveTo(p1.px - nx * 4.5, p1.py - ny * 4.5);
          ctx.lineTo(p2.px - nx * 4.5, p2.py - ny * 4.5);
          ctx.stroke();
        } else {
          ctx.lineWidth = 6.5 * (viewState.zoom || 1);
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }
        ctx.restore();
      });
    }

    // Painter's algorithm: sort atoms back-to-front by z
    const sortedAtoms = [...projected].sort((a, b) => a.z - b.z);
    const cpkMultiplier = viewState.mode === 'cpk' ? 1.85 : 1.0;

    sortedAtoms.forEach(p => {
      const spec = ATOM_SPECS[p.el] || ATOM_SPECS.C;
      const r = spec.radius * cpkMultiplier * (viewState.zoom || 1) * p.persp * 0.95;
      draw3DSphere(ctx, p.px, p.py, r, spec.color, spec.stroke, p.el, viewState.showLabels !== false);
    });

    // Show bond angle / info badge
    if (viewState.showAngles !== false) {
      ctx.save();
      ctx.fillStyle = theme.textMuted;
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`Góc liên kết: ${mol.angle} • Độ dài: ${mol.bondLength}`, 12, height - 12);
      ctx.restore();
    }
  }

  // =========================================================================
  // MÔ PHỎNG 1: PHẢN ỨNG TẠO NƯỚC (2H₂ + O₂ → 2H₂O)
  // =========================================================================
  class WaterSynthesisSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        nH2: options.nH2 !== undefined ? options.nH2 : 2.0, // mol H2 ban đầu
        nO2: options.nO2 !== undefined ? options.nO2 : 1.0, // mol O2 ban đầu
        tempK: options.tempK !== undefined ? options.tempK : 650, // Nhiệt độ K (cần >= 500K để khơi mào)
        speed: 1.0,
        mol3DKey: 'H2O',
        mol3DMode: 'ball-stick' // 'ball-stick', 'cpk', '2d'
      };

      this.state = {
        running: true,
        progress: 0, // 0.0 -> 1.0
        t: 0,
        particles: [],
        history: [],
        rotX: 0.25,
        rotY: -0.4,
        zoom: 1.0,
        dragging3D: false,
        lastMouseX: 0,
        lastMouseY: 0,
        balanceCoeffs: { H2: 1, O2: 1, H2O: 1 }
      };

      this.initParticles();
      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initParticles() {
      this.state.particles = [];
      const countH2 = Math.round(clamp(this.params.nH2 * 4, 2, 20));
      const countO2 = Math.round(clamp(this.params.nO2 * 4, 1, 15));

      for (let i = 0; i < countH2; i++) {
        this.state.particles.push({
          type: 'H2',
          x: 40 + Math.random() * 240,
          y: 40 + Math.random() * 180,
          vx: (Math.random() - 0.5) * 90,
          vy: (Math.random() - 0.5) * 90,
          angle: Math.random() * TWO_PI
        });
      }
      for (let i = 0; i < countO2; i++) {
        this.state.particles.push({
          type: 'O2',
          x: 40 + Math.random() * 240,
          y: 40 + Math.random() * 180,
          vx: (Math.random() - 0.5) * 65,
          vy: (Math.random() - 0.5) * 65,
          angle: Math.random() * TWO_PI
        });
      }
    }

    computeStoichiometry() {
      // 2 H2 + O2 -> 2 H2O
      const nH2_0 = this.params.nH2;
      const nO2_0 = this.params.nO2;
      const xiMax = Math.min(nH2_0 / 2, nO2_0 / 1); // Mức độ phản ứng cực đại (mol)
      const ignited = this.params.tempK >= 500;
      const xi = ignited ? xiMax * this.state.progress : 0;

      const nH2 = Math.max(0, nH2_0 - 2 * xi);
      const nO2 = Math.max(0, nO2_0 - xi);
      const nH2O = 2 * xi;

      // Enthalpy: ΔrH°298 = -571.6 kJ per mol of reaction (i.e. per 2 mol H2O(l))
      const heatReleased = 571.6 * xi; // kJ

      let limitingText = 'Tỉ lệ vừa đủ (2 : 1)';
      if (nH2_0 / 2 < nO2_0 - 1e-5) limitingText = 'H₂ phản ứng hết, O₂ dư';
      else if (nO2_0 < nH2_0 / 2 - 1e-5) limitingText = 'O₂ phản ứng hết, H₂ dư';

      return { nH2_0, nO2_0, nH2, nO2, nH2O, xi, xiMax, heatReleased, ignited, limitingText };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-chem-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header -->
          <div class="px-5 py-4 bg-gradient-to-r from-teal-700 via-emerald-700 to-cyan-800 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-fire-flame-simple"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 1: Phản Ứng Tổng Hợp Nước (2H₂ + O₂ → 2H₂O)</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-400/20 text-amber-200 border border-amber-300/30">Hóa 10 • Bài 12 & 17</span>
                </div>
                <p class="text-xs text-teal-100/90 mt-0.5">Phá vỡ liên kết H–H, O=O, hình thành liên kết cộng hóa trị phân cực O–H &amp; tỏa nhiệt mạnh</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <!-- Safety & Method Notice Banner -->
          <div class="px-4 py-2.5 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200/80 dark:border-amber-800/60 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2 text-amber-900 dark:text-amber-200">
              <i class="fa-solid fa-triangle-exclamation text-amber-600 dark:text-amber-400"></i>
              <span><strong>Lưu ý an toàn:</strong> Hỗn hợp khí H₂ và O₂ tỉ lệ thể tích 2 : 1 là hỗn hợp nổ mạnh. Chỉ thực hiện mô phỏng ảo an toàn trên máy tính.</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-semibold text-[11px]">
              Định lượng mol & Enthalpy chuẩn + Hoạt ảnh hạt định tính
            </span>
          </div>

          <!-- Main 3-Column Visual Area: Reaction Chamber + 3D Molecule Viewer + Real-time Graph -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Left: Reaction Chamber Canvas (5 cols) -->
            <div class="lg:col-span-5 p-4 bg-slate-50/60 dark:bg-slate-950/50 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-flask text-teal-600"></i> Bình Phản Ứng Vi Mô
                </span>
                <span data-status-badge class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Đang phản ứng (T ≥ 500 K)
                </span>
              </div>
              <canvas class="chamber-canvas block w-full h-[260px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-inner"></canvas>
              <div class="mt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-500 inline-block"></span> Phân tử H₂</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> Phân tử O₂</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span> Phân tử H₂O</span>
              </div>
            </div>

            <!-- Middle: Interactive 2D/3D Molecule Viewer (4 cols) -->
            <div class="lg:col-span-4 p-4 bg-white dark:bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <i class="fa-solid fa-cube text-indigo-600"></i> Cấu Trúc Phân Tử 2D/3D
                </span>
                <div class="flex items-center gap-1">
                  <select data-mol-select class="text-[11px] font-bold px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <option value="H2O" selected>H₂O (Nước)</option>
                    <option value="H2">H₂ (Hydrogen)</option>
                    <option value="O2">O₂ (Oxygen)</option>
                  </select>
                  <button data-view-mode="ball-stick" class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-600 text-white">3D Cầu-Thanh</button>
                  <button data-view-mode="cpk" class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">3D Đặc</button>
                  <button data-view-mode="2d" class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">2D Lewis</button>
                </div>
              </div>
              <div class="relative">
                <canvas class="mol3d-canvas block w-full h-[220px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 cursor-grab active:cursor-grabbing"></canvas>
                <div class="absolute top-2 right-2 flex items-center gap-1">
                  <button data-zoom="in" class="w-6 h-6 rounded bg-white/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-indigo-50" title="Phóng to">+</button>
                  <button data-zoom="out" class="w-6 h-6 rounded bg-white/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-indigo-50" title="Thu nhỏ">−</button>
                </div>
              </div>
              <div data-mol-info class="mt-2 p-2 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50 text-[11px] text-slate-700 dark:text-slate-300">
                <strong>H₂O:</strong> Góc liên kết H–O–H = 104.5° • Liên kết cộng hóa trị phân cực. Kéo chuột để xoay 360°.
              </div>
            </div>

            <!-- Right: Stoichiometry & Real-time Graph (3 cols) -->
            <div class="lg:col-span-3 p-4 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5 mb-2">
                <i class="fa-solid fa-chart-line text-emerald-600"></i> Đồ Thị Số Mol & Nhiệt Lượng
              </div>
              <canvas class="graph-canvas block w-full h-[150px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"></canvas>

              <div class="mt-2 grid grid-cols-2 gap-1.5 text-center">
                <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800">
                  <div class="text-[10px] text-slate-500">Số mol H₂O tạo thành</div>
                  <div class="font-extrabold text-sm text-sky-600 dark:text-sky-400" data-val="nH2O">0.00 mol</div>
                </div>
                <div class="p-2 rounded-lg bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/50">
                  <div class="text-[10px] text-rose-700 dark:text-rose-300">Nhiệt tỏa ra (Q)</div>
                  <div class="font-extrabold text-sm text-rose-600 dark:text-rose-400" data-val="heat">0.0 kJ</div>
                </div>
                <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 col-span-2">
                  <div class="text-[10px] text-slate-500">Trạng thái hợp thức (Chất hết - Chất dư)</div>
                  <div class="font-bold text-xs text-teal-700 dark:text-teal-300" data-val="limiting">Tỉ lệ vừa đủ (2 : 1)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls & Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/70 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Số mol H₂ ban đầu</label>
                  <span class="font-bold text-teal-600 dark:text-teal-400" data-disp="nH2">${this.params.nH2.toFixed(1)} mol</span>
                </div>
                <input type="range" data-ctrl="nH2" min="0.2" max="5.0" step="0.2" value="${this.params.nH2}" class="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Số mol O₂ ban đầu</label>
                  <span class="font-bold text-rose-600 dark:text-rose-400" data-disp="nO2">${this.params.nO2.toFixed(1)} mol</span>
                </div>
                <input type="range" data-ctrl="nO2" min="0.2" max="5.0" step="0.2" value="${this.params.nO2}" class="w-full accent-rose-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nhiệt độ kích hoạt (<em>T</em>)</label>
                  <span class="font-bold text-amber-600 dark:text-amber-400" data-disp="tempK">${this.params.tempK} K</span>
                </div>
                <input type="range" data-ctrl="tempK" min="300" max="1000" step="25" value="${this.params.tempK}" class="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <div class="flex justify-between text-[10px] text-slate-400"><span>300K (Chưa cháy)</span><span>≥500K (Khơi mào)</span></div>
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Tốc độ hoạt ảnh</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="speed">${this.params.speed.toFixed(1)}x</span>
                </div>
                <input type="range" data-ctrl="speed" min="0.25" max="2.0" step="0.25" value="${this.params.speed}" class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>
            </div>

            <!-- Interactive Equation Balancing & Atom Conservation Checker -->
            <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div class="space-y-1">
                <div class="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                  <i class="fa-solid fa-scale-balanced"></i> Luyện Tập Cân Bằng Phương Trình & Bảo Toàn Nguyên Tố
                </div>
                <div class="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-100 mt-1">
                  <input type="number" data-bal="H2" min="1" max="10" value="1" class="w-12 px-2 py-1 text-center rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900">
                  <span>H₂(g) +</span>
                  <input type="number" data-bal="O2" min="1" max="10" value="1" class="w-12 px-2 py-1 text-center rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900">
                  <span>O₂(g) <span class="font-sans">→</span></span>
                  <input type="number" data-bal="H2O" min="1" max="10" value="1" class="w-12 px-2 py-1 text-center rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900">
                  <span>H₂O(l)</span>
                  <button type="button" data-act="auto-balance" class="ml-2 px-2.5 py-1 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-semibold hover:bg-teal-200 transition cursor-pointer">Gợi ý chuẩn (2 : 1 : 2)</button>
                </div>
              </div>
              <div data-bal-status class="text-xs font-semibold px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                Kiểm tra nguyên tử: Vế trái (2 H, 2 O) ≠ Vế phải (2 H, 1 O) — Chưa bảo toàn nguyên tố O!
              </div>
            </div>
          </div>
        </div>
      `;

      this.canvasChamber = this.container.querySelector('.chamber-canvas');
      this.canvasMol3D = this.container.querySelector('.mol3d-canvas');
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
      this.updateBalanceCheck();
    }

    updateBalanceCheck() {
      const cH2 = parseInt(this.container.querySelector('[data-bal="H2"]').value, 10) || 1;
      const cO2 = parseInt(this.container.querySelector('[data-bal="O2"]').value, 10) || 1;
      const cH2O = parseInt(this.container.querySelector('[data-bal="H2O"]').value, 10) || 1;

      const leftH = cH2 * 2;
      const leftO = cO2 * 2;
      const rightH = cH2O * 2;
      const rightO = cH2O * 1;

      const statusEl = this.container.querySelector('[data-bal-status]');
      if (!statusEl) return;

      if (leftH === rightH && leftO === rightO) {
        const isMinimal = (cH2 === 2 && cO2 === 1 && cH2O === 2);
        statusEl.className = 'text-xs font-bold px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
        statusEl.textContent = isMinimal
          ? `✅ Chính xác! Bảo toàn nguyên tố (${leftH} H, ${leftO} O) với hệ số nguyên tối giản (2 : 1 : 2).`
          : `✅ Đã bảo toàn nguyên tố (${leftH} H, ${leftO} O), có thể rút gọn về tỉ lệ tối giản 2 : 1 : 2.`;
      } else {
        statusEl.className = 'text-xs font-semibold px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800';
        statusEl.textContent = `⚠️ Chưa cân bằng: Vế trái (${leftH} H, ${leftO} O) ≠ Vế phải (${rightH} H, ${rightO} O)`;
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
        this.state.progress = 0;
        this.state.t = 0;
        this.state.history = [];
        this.initParticles();
        this.renderAll();
      });

      ['nH2', 'nO2', 'tempK', 'speed'].forEach(k => {
        const input = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        input.addEventListener('input', (e) => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) {
            if (k === 'tempK') disp.textContent = `${this.params[k]} K`;
            else if (k === 'speed') disp.textContent = `${this.params[k].toFixed(2)}x`;
            else disp.textContent = `${this.params[k].toFixed(1)} mol`;
          }
          if (k === 'nH2' || k === 'nO2') {
            this.state.progress = 0;
            this.state.history = [];
            this.initParticles();
          }
          this.renderAll();
        });
      });

      // Molecule 3D selector & modes
      const molSelect = c.querySelector('[data-mol-select]');
      const molInfo = c.querySelector('[data-mol-info]');
      molSelect.addEventListener('change', (e) => {
        this.params.mol3DKey = e.target.value;
        const m = MOLECULE_DB[this.params.mol3DKey];
        if (molInfo && m) {
          molInfo.innerHTML = `<strong>${m.name}:</strong> Hình học ${m.geometry} • Góc ${m.angle} • ${m.bondType}`;
        }
        this.renderAll();
      });

      c.querySelectorAll('[data-view-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-view-mode]').forEach(b => {
            b.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
          });
          btn.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-600 text-white';
          this.params.mol3DMode = btn.dataset.viewMode;
          this.renderAll();
        });
      });

      c.querySelectorAll('[data-zoom]').forEach(btn => {
        btn.addEventListener('click', () => {
          const dir = btn.dataset.zoom;
          this.state.zoom = clamp(this.state.zoom + (dir === 'in' ? 0.15 : -0.15), 0.6, 1.8);
          this.renderAll();
        });
      });

      // 3D Canvas Drag Rotation
      const startDrag = (x, y) => {
        this.state.dragging3D = true;
        this.state.lastMouseX = x;
        this.state.lastMouseY = y;
      };
      const moveDrag = (x, y) => {
        if (!this.state.dragging3D) return;
        const dx = x - this.state.lastMouseX;
        const dy = y - this.state.lastMouseY;
        this.state.rotY += dx * 0.012;
        this.state.rotX = clamp(this.state.rotX + dy * 0.012, -Math.PI / 2, Math.PI / 2);
        this.state.lastMouseX = x;
        this.state.lastMouseY = y;
        this.renderAll();
      };
      const stopDrag = () => { this.state.dragging3D = false; };

      this.canvasMol3D.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mouseup', stopDrag);
      this.canvasMol3D.addEventListener('touchstart', e => {
        if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvasMol3D.addEventListener('touchmove', e => {
        if (e.touches.length === 1) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvasMol3D.addEventListener('touchend', stopDrag);

      // Equation balancing inputs
      c.querySelectorAll('[data-bal]').forEach(inp => {
        inp.addEventListener('input', () => this.updateBalanceCheck());
      });
      c.querySelector('[data-act="auto-balance"]').addEventListener('click', () => {
        c.querySelector('[data-bal="H2"]').value = 2;
        c.querySelector('[data-bal="O2"]').value = 1;
        c.querySelector('[data-bal="H2O"]').value = 2;
        this.updateBalanceCheck();
      });

      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.renderAll());
    }

    setupObserver() {
      this.inView = true;
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.08 });
        this.observer.observe(this.container);
      }
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || document.hidden) {
          this.lastTimestamp = now;
          return;
        }
        const dt = Math.min((now - this.lastTimestamp) / 1000, 0.05) * this.params.speed;
        this.lastTimestamp = now;
        this.update(dt);
        this.renderAll();
      };
      this.rafId = requestAnimationFrame(loop);
    }

    update(dt) {
      this.state.t += dt;
      if (!this.state.dragging3D) {
        this.state.rotY += dt * 0.35;
      }

      const stoi = this.computeStoichiometry();
      if (stoi.ignited && this.state.progress < 1.0) {
        const rateFactor = (this.params.tempK - 450) / 400;
        this.state.progress = clamp(this.state.progress + dt * 0.18 * rateFactor, 0, 1.0);
      }

      // Convert particles visually according to progress
      const targetH2OCount = Math.round(stoi.nH2O * 4);
      let currentH2O = this.state.particles.filter(p => p.type === 'H2O').length;
      if (stoi.ignited && currentH2O < targetH2OCount) {
        const h2Idx = this.state.particles.findIndex(p => p.type === 'H2');
        if (h2Idx !== -1) this.state.particles[h2Idx].type = 'H2O';
      }

      // Move particles
      const tempSpeed = Math.sqrt(this.params.tempK / 300);
      this.state.particles.forEach(p => {
        p.x += p.vx * dt * tempSpeed;
        p.y += p.vy * dt * tempSpeed;
        if (p.x < 24 || p.x > 300) p.vx *= -1;
        if (p.y < 24 || p.y > 230) p.vy *= -1;
        p.x = clamp(p.x, 20, 310);
        p.y = clamp(p.y, 20, 235);
      });

      this.state.history.push({
        t: this.state.t,
        nH2: stoi.nH2,
        nO2: stoi.nO2,
        nH2O: stoi.nH2O
      });
      if (this.state.history.length > 160) this.state.history.shift();

      // Update UI badges
      const c = this.container;
      const badge = c.querySelector('[data-status-badge]');
      if (badge) {
        if (!stoi.ignited) {
          badge.className = 'text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300';
          badge.textContent = 'Chưa phản ứng (Cần T ≥ 500 K)';
        } else if (this.state.progress >= 0.99) {
          badge.className = 'text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300';
          badge.textContent = 'Phản ứng hoàn tất (100%)';
        } else {
          badge.className = 'text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300';
          badge.textContent = `Đang tổng hợp (${Math.round(this.state.progress * 100)}%)`;
        }
      }

      const elNH2O = c.querySelector('[data-val="nH2O"]');
      const elHeat = c.querySelector('[data-val="heat"]');
      const elLim = c.querySelector('[data-val="limiting"]');
      if (elNH2O) elNH2O.textContent = `${stoi.nH2O.toFixed(2)} mol`;
      if (elHeat) elHeat.textContent = `${stoi.heatReleased.toFixed(1)} kJ`;
      if (elLim) elLim.textContent = stoi.limitingText;
    }

    renderAll() {
      this.renderChamber();
      this.renderMol3D();
      this.renderGraph();
    }

    renderChamber() {
      const rect = this.canvasChamber.getBoundingClientRect();
      const width = rect.width || 320;
      const height = rect.height || 260;
      const { ctx } = setupCanvasDPI(this.canvasChamber, width, height);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      // Thermal glow at bottom if tempK >= 500
      if (this.params.tempK >= 500) {
        const glow = ctx.createLinearGradient(0, height - 45, 0, height);
        glow.addColorStop(0, 'rgba(245, 158, 11, 0)');
        glow.addColorStop(1, 'rgba(239, 68, 68, 0.35)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, height - 45, width, 45);
      }

      // Draw molecules in chamber
      this.state.particles.forEach(p => {
        const px = (p.x / 330) * (width - 30) + 15;
        const py = (p.y / 255) * (height - 30) + 15;
        if (p.type === 'H2') {
          draw3DSphere(ctx, px - 5, py, 6, '#f8fafc', '#64748b', '', false);
          draw3DSphere(ctx, px + 5, py, 6, '#f8fafc', '#64748b', '', false);
        } else if (p.type === 'O2') {
          draw3DSphere(ctx, px - 7, py, 9, '#ef4444', '#991b1b', '', false);
          draw3DSphere(ctx, px + 7, py, 9, '#ef4444', '#991b1b', '', false);
        } else {
          // H2O molecule
          draw3DSphere(ctx, px, py - 2, 9, '#38bdf8', '#0284c7', '', false);
          draw3DSphere(ctx, px - 7, py + 5, 5.5, '#f8fafc', '#64748b', '', false);
          draw3DSphere(ctx, px + 7, py + 5, 5.5, '#f8fafc', '#64748b', '', false);
        }
      });

      const stoi = this.computeStoichiometry();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 11px monospace';
      ctx.fillText(`H₂: ${stoi.nH2.toFixed(2)} mol | O₂: ${stoi.nO2.toFixed(2)} mol | H₂O: ${stoi.nH2O.toFixed(2)} mol`, 12, 20);
    }

    renderMol3D() {
      const rect = this.canvasMol3D.getBoundingClientRect();
      const width = rect.width || 280;
      const height = rect.height || 220;
      const { ctx } = setupCanvasDPI(this.canvasMol3D, width, height);

      renderMolecule3D(ctx, width, height, this.params.mol3DKey, {
        rotX: this.state.rotX,
        rotY: this.state.rotY,
        zoom: this.state.zoom,
        mode: this.params.mol3DMode,
        showLabels: true,
        showAngles: true
      });
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 240;
      const height = rect.height || 150;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);
      const padL = 28, padR = 10, padT = 12, padB = 20;
      const plotW = width - padL - padR;
      const plotH = height - padT - padB;
      const maxMol = Math.max(this.params.nH2, this.params.nO2, 2.5) * 1.15;

      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL, height - padB);
      ctx.lineTo(width - padR, height - padB);
      ctx.stroke();

      const hist = this.state.history;
      if (hist.length < 2) return;

      const drawSeries = (key, color) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        for (let i = 0; i < hist.length; i++) {
          const x = padL + (i / (hist.length - 1)) * plotW;
          const y = height - padB - (hist[i][key] / maxMol) * plotH;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };

      drawSeries('nH2', '#94a3b8');
      drawSeries('nO2', '#ef4444');
      drawSeries('nH2O', '#0284c7');
    }
  }

  // =========================================================================
  // MÔ PHỎNG 2: KIM LOẠI TÁC DỤNG VỚI AXIT (M + HCl → Muối + H₂↑)
  // =========================================================================
  const METAL_ACID_SPECS = {
    Zn: {
      name: 'Kẽm (Zn)',
      symbol: 'Zn',
      molarMass: 65.38,
      e0: -0.76,
      reacts: true,
      rateMultiplier: 1.0,
      saltFormula: 'ZnCl₂',
      solutionColor: 'rgba(226, 232, 240, 0.25)',
      metalColor: '#94a3b8',
      deltaH: -153.9,
      equation: 'Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)↑',
      phenomenon: 'Viên kẽm tan dần, bọt khí H₂ không màu thoát ra đều đặn trên bề mặt kẽm, dung dịch ZnCl₂ trong suốt không màu, cốc ấm lên.'
    },
    Mg: {
      name: 'Magnesium (Mg)',
      symbol: 'Mg',
      molarMass: 24.31,
      e0: -2.37,
      reacts: true,
      rateMultiplier: 2.2,
      saltFormula: 'MgCl₂',
      solutionColor: 'rgba(226, 232, 240, 0.25)',
      metalColor: '#cbd5e1',
      deltaH: -466.8,
      equation: 'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)↑',
      phenomenon: 'Mẫu Mg tan rất nhanh, khí H₂ sủi bọt mãnh liệt do Mg có tính khử mạnh (E° = -2.37 V), phản ứng tỏa nhiều nhiệt.'
    },
    Fe: {
      name: 'Sắt (Fe)',
      symbol: 'Fe',
      molarMass: 55.85,
      e0: -0.44,
      reacts: true,
      rateMultiplier: 0.55,
      saltFormula: 'FeCl₂',
      solutionColor: 'rgba(74, 222, 128, 0.22)',
      metalColor: '#64748b',
      deltaH: -89.1,
      equation: 'Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)↑',
      phenomenon: 'Đinh sắt tan chậm hơn kẽm, bọt khí H₂ thoát ra nhẹ nhàng, dung dịch chuyển dần sang màu lục nhạt của muối sắt(II) FeCl₂.'
    },
    Cu: {
      name: 'Đồng (Cu)',
      symbol: 'Cu',
      molarMass: 63.55,
      e0: +0.34,
      reacts: false,
      rateMultiplier: 0,
      saltFormula: 'Không tạo muối',
      solutionColor: 'rgba(226, 232, 240, 0.2)',
      metalColor: '#ea580c',
      deltaH: 0,
      equation: 'Cu(s) + HCl(aq) → Không phản ứng',
      phenomenon: 'Không có hiện tượng sủi bọt khí! Đồng (Cu) đứng sau Hydrogen trong dãy điện hóa (E° = +0.34 V > 0 V) nên không khử được ion H⁺ trong dung dịch HCl.'
    }
  };

  class MetalAcidSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        metal: options.metal || 'Zn',
        nMetal: options.nMetal !== undefined ? options.nMetal : 0.20, // mol kim loại
        cAcid: options.cAcid !== undefined ? options.cAcid : 1.0,    // nồng độ HCl (M)
        vAcid: options.vAcid !== undefined ? options.vAcid : 300,    // thể tích dd HCl (mL)
        tempC: options.tempC !== undefined ? options.tempC : 25,     // nhiệt độ (°C)
        speed: 1.0
      };

      this.state = {
        running: true,
        progress: 0,
        t: 0,
        bubbles: [],
        history: []
      };

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    computeReaction() {
      const spec = METAL_ACID_SPECS[this.params.metal];
      const nAcid0 = this.params.cAcid * (this.params.vAcid / 1000); // mol HCl
      const nMetal0 = this.params.nMetal;

      if (!spec.reacts) {
        return {
          spec,
          nAcid0,
          nMetal0,
          xiMax: 0,
          xi: 0,
          nMetalRem: nMetal0,
          nAcidRem: nAcid0,
          nH2: 0,
          vH2_dkc: 0,
          limitingText: 'Cu không tác dụng với dung dịch HCl loãng'
        };
      }

      // M + 2HCl -> MCl2 + H2
      const xiMax = Math.min(nMetal0, nAcid0 / 2);
      const xi = xiMax * this.state.progress;
      const nMetalRem = Math.max(0, nMetal0 - xi);
      const nAcidRem = Math.max(0, nAcid0 - 2 * xi);
      const nH2 = xi;
      const vH2_dkc = nH2 * 24.79; // Lít ở 25°C, 1 bar (đkc GDPT 2018)

      let limitingText = 'Hai chất phản ứng vừa đủ';
      if (nMetal0 < nAcid0 / 2 - 1e-4) limitingText = `${spec.symbol} phản ứng hết, HCl dư (${(nAcid0 - 2 * xiMax).toFixed(2)} mol)`;
      else if (nAcid0 / 2 < nMetal0 - 1e-4) limitingText = `HCl hết, kim loại ${spec.symbol} còn dư (${(nMetal0 - xiMax).toFixed(2)} mol)`;

      return { spec, nAcid0, nMetal0, xiMax, xi, nMetalRem, nAcidRem, nH2, vH2_dkc, limitingText };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-chem-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header -->
          <div class="px-5 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-vial-circle-check"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 2: Kim Loại Tác Dụng Với Dung Dịch Axit (M + 2HCl → MCl₂ + H₂↑)</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20 text-white">Hóa 10 • Bài 15 & 19</span>
                </div>
                <p class="text-xs text-amber-100/90 mt-0.5">Khảo sát dãy hoạt động hóa học (Mg, Zn, Fe, Cu), quá trình nhường – nhận electron và tốc độ thoát khí H₂</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-amber-900 hover:bg-amber-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> <span>Đặt lại</span>
              </button>
            </div>
          </div>

          <!-- Main Visual Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Beaker Animation (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/50 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div class="flex items-center gap-1.5">
                  <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Chọn kim loại:</span>
                  <button data-metal="Mg" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">Mg (Rất mạnh)</button>
                  <button data-metal="Zn" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-600 text-white cursor-pointer">Zn (Trung bình)</button>
                  <button data-metal="Fe" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">Fe (Chậm)</button>
                  <button data-metal="Cu" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">Cu (Sau H)</button>
                </div>
                <span class="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400" data-eq-badge>Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)↑</span>
              </div>

              <canvas class="beaker-canvas block w-full h-[270px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner"></canvas>

              <div data-phenomenon class="mt-2 p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Hiện tượng:</strong> Viên kẽm tan dần, bọt khí H₂ không màu thoát ra đều đặn trên bề mặt kẽm, dung dịch ZnCl₂ trong suốt.
              </div>
            </div>

            <!-- Right: Kinetics Graph & Stoichiometry Readout (5 cols) -->
            <div class="lg:col-span-5 p-4 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-area text-amber-600"></i> Đồ Thị Thể Tích Khí H₂(t) (Đkc 25°C, 1 bar)
                </span>
                <span class="text-[10px] text-slate-400">V = n × 24.79 L</span>
              </div>

              <canvas class="graph-canvas block w-full h-[170px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"></canvas>

              <div class="mt-3 grid grid-cols-2 gap-2 text-center">
                <div class="p-2 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/50">
                  <div class="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium">Thể tích khí H₂ (đkc)</div>
                  <div class="font-extrabold text-sm text-emerald-600 dark:text-emerald-300" data-val="vH2">0.00 L</div>
                </div>
                <div class="p-2 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50">
                  <div class="text-[10px] text-blue-700 dark:text-blue-400 font-medium">Số mol HCl còn lại</div>
                  <div class="font-extrabold text-sm text-blue-600 dark:text-blue-300" data-val="nAcid">0.30 mol</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 col-span-2">
                  <div class="text-[10px] text-slate-500">Kết luận định lượng sau phản ứng</div>
                  <div class="font-bold text-xs text-amber-700 dark:text-amber-300" data-val="limiting">HCl hết, kim loại còn dư</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls & Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/70 space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Lượng kim loại (<em>n</em><sub>M</sub>)</label>
                  <span class="font-bold text-amber-600 dark:text-amber-400" data-disp="nMetal">${this.params.nMetal.toFixed(2)} mol</span>
                </div>
                <input type="range" data-ctrl="nMetal" min="0.05" max="0.80" step="0.05" value="${this.params.nMetal}" class="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nồng độ HCl (<em>C</em><sub>M</sub>)</label>
                  <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="cAcid">${this.params.cAcid.toFixed(1)} M</span>
                </div>
                <input type="range" data-ctrl="cAcid" min="0.2" max="2.0" step="0.2" value="${this.params.cAcid}" class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Thể tích dd HCl (<em>V</em>)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="vAcid">${this.params.vAcid} mL</span>
                </div>
                <input type="range" data-ctrl="vAcid" min="100" max="500" step="50" value="${this.params.vAcid}" class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nhiệt độ dung dịch (<em>t</em>°)</label>
                  <span class="font-bold text-rose-600 dark:text-rose-400" data-disp="tempC">${this.params.tempC} °C</span>
                </div>
                <input type="range" data-ctrl="tempC" min="20" max="60" step="5" value="${this.params.tempC}" class="w-full accent-rose-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>
            </div>
          </div>
        </div>
      `;

      this.canvasBeaker = this.container.querySelector('.beaker-canvas');
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
        this.state.progress = 0;
        this.state.t = 0;
        this.state.bubbles = [];
        this.state.history = [];
        this.renderAll();
      });

      c.querySelectorAll('[data-metal]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-metal]').forEach(b => {
            b.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer';
          });
          btn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-600 text-white cursor-pointer';
          this.params.metal = btn.dataset.metal;
          this.state.progress = 0;
          this.state.t = 0;
          this.state.bubbles = [];
          this.state.history = [];

          const spec = METAL_ACID_SPECS[this.params.metal];
          const phenEl = c.querySelector('[data-phenomenon]');
          const eqEl = c.querySelector('[data-eq-badge]');
          if (phenEl) phenEl.innerHTML = `<strong>Hiện tượng (${spec.name}):</strong> ${spec.phenomenon}`;
          if (eqEl) eqEl.textContent = spec.reacts ? `${spec.symbol}(s) + 2HCl(aq) → ${spec.saltFormula}(aq) + H₂(g)↑` : `Cu(s) + HCl(aq) → Không phản ứng`;
          this.renderAll();
        });
      });

      ['nMetal', 'cAcid', 'vAcid', 'tempC'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', (e) => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) {
            if (k === 'nMetal') disp.textContent = `${this.params[k].toFixed(2)} mol`;
            else if (k === 'cAcid') disp.textContent = `${this.params[k].toFixed(1)} M`;
            else if (k === 'vAcid') disp.textContent = `${this.params[k]} mL`;
            else if (k === 'tempC') disp.textContent = `${this.params[k]} °C`;
          }
          this.state.progress = 0;
          this.state.history = [];
          this.renderAll();
        });
      });

      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.renderAll());
    }

    setupObserver() {
      this.inView = true;
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.08 });
        this.observer.observe(this.container);
      }
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || document.hidden) {
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
      const rxn = this.computeReaction();
      this.state.t += dt;

      if (rxn.spec.reacts && this.state.progress < 1.0) {
        // Rate scales with concentration cAcid and temperature tempC
        const tempFactor = Math.pow(1.6, (this.params.tempC - 25) / 10);
        const rate = 0.14 * rxn.spec.rateMultiplier * (this.params.cAcid / 1.0) * tempFactor;
        this.state.progress = clamp(this.state.progress + dt * rate, 0, 1.0);

        // Spawn H2 gas bubbles from metal piece
        if (Math.random() < clamp(rate * 2.5, 0.15, 0.9)) {
          this.state.bubbles.push({
            x: 0.45 + (Math.random() - 0.5) * 0.12,
            y: 0.78,
            r: 3 + Math.random() * 4,
            vy: 0.25 + Math.random() * 0.18
          });
        }
      }

      // Update bubbles
      this.state.bubbles.forEach(b => {
        b.y -= b.vy * dt;
        b.x += Math.sin(this.state.t * 6 + b.r) * 0.0015;
      });
      this.state.bubbles = this.state.bubbles.filter(b => b.y > 0.26);

      const updatedRxn = this.computeReaction();
      this.state.history.push({
        t: this.state.t,
        vH2: updatedRxn.vH2_dkc
      });
      if (this.state.history.length > 160) this.state.history.shift();

      const c = this.container;
      const elVH2 = c.querySelector('[data-val="vH2"]');
      const elNAcid = c.querySelector('[data-val="nAcid"]');
      const elLim = c.querySelector('[data-val="limiting"]');
      if (elVH2) elVH2.textContent = `${updatedRxn.vH2_dkc.toFixed(2)} L`;
      if (elNAcid) elNAcid.textContent = `${updatedRxn.nAcidRem.toFixed(2)} mol`;
      if (elLim) elLim.textContent = updatedRxn.limitingText;
    }

    renderAll() {
      this.renderBeaker();
      this.renderGraph();
    }

    renderBeaker() {
      const rect = this.canvasBeaker.getBoundingClientRect();
      const width = rect.width || 380;
      const height = rect.height || 270;
      const { ctx } = setupCanvasDPI(this.canvasBeaker, width, height);
      const theme = getThemeColors();
      const rxn = this.computeReaction();

      ctx.clearRect(0, 0, width, height);

      // Draw Glass Beaker
      const bLeft = width * 0.22;
      const bRight = width * 0.78;
      const bTop = 28;
      const bBottom = height - 24;
      const bWidth = bRight - bLeft;
      const liqLevel = bBottom - (bBottom - bTop) * (0.45 + (this.params.vAcid / 500) * 0.35);

      // Liquid fill
      ctx.fillStyle = rxn.spec.solutionColor;
      ctx.fillRect(bLeft + 3, liqLevel, bWidth - 6, bBottom - liqLevel - 3);

      // Beaker outline
      ctx.strokeStyle = theme.glassStroke;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(bLeft, bTop);
      ctx.lineTo(bLeft, bBottom);
      ctx.lineTo(bRight, bBottom);
      ctx.lineTo(bRight, bTop);
      ctx.stroke();

      // Metal bar / granules at bottom
      const metalRatio = rxn.nMetal0 > 0 ? rxn.nMetalRem / rxn.nMetal0 : 0;
      if (metalRatio > 0.02) {
        const mw = (56 + this.params.nMetal * 45) * Math.sqrt(metalRatio);
        const mh = (22 + this.params.nMetal * 16) * Math.sqrt(metalRatio);
        const mx = (bLeft + bRight) / 2 - mw / 2;
        const my = bBottom - mh - 4;

        ctx.save();
        ctx.fillStyle = rxn.spec.metalColor;
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(mx, my, mw, mh, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${rxn.spec.symbol}(s)`, mx + mw / 2, my + mh / 2 + 4);
        ctx.restore();
      }

      // Draw H2 bubbles
      this.state.bubbles.forEach(b => {
        const bx = bLeft + b.x * bWidth;
        const by = bTop + b.y * (bBottom - bTop);
        if (by > liqLevel) {
          ctx.beginPath();
          ctx.arc(bx, by, b.r, 0, TWO_PI);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
          ctx.fill();
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Labels for ions in solution
      ctx.fillStyle = theme.textMain;
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Dung dịch HCl (${this.params.cAcid.toFixed(1)} M, ${this.params.vAcid} mL)`, bLeft + 12, liqLevel + 20);
      if (rxn.spec.reacts && rxn.xi > 0.001) {
        ctx.fillStyle = theme.primary;
        ctx.fillText(`Ion tạo thành: ${rxn.spec.symbol}²⁺(aq), Cl⁻(aq) • Khí H₂↑: ${rxn.vH2_dkc.toFixed(2)} L`, bLeft + 12, liqLevel + 38);
      } else if (!rxn.spec.reacts) {
        ctx.fillStyle = theme.rose;
        ctx.fillText(`E°(Cu²⁺/Cu) = +0.34 V > 0 V: Không khử được H⁺`, bLeft + 12, liqLevel + 38);
      }
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 280;
      const height = rect.height || 170;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();

      ctx.clearRect(0, 0, width, height);
      const padL = 34, padR = 12, padT = 14, padB = 22;
      const plotW = width - padL - padR;
      const plotH = height - padT - padB;
      const rxn = this.computeReaction();
      const maxV = Math.max(rxn.xiMax * 24.79 * 1.15, 2.0);

      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL, height - padB);
      ctx.lineTo(width - padR, height - padB);
      ctx.stroke();

      ctx.fillStyle = theme.textMuted;
      ctx.font = '9px monospace';
      ctx.fillText(`${maxV.toFixed(1)}L`, 2, padT + 6);
      ctx.fillText('0', 18, height - padB);

      const hist = this.state.history;
      if (hist.length < 2) return;

      ctx.beginPath();
      ctx.strokeStyle = theme.emerald;
      ctx.lineWidth = 2.5;
      for (let i = 0; i < hist.length; i++) {
        const x = padL + (i / (hist.length - 1)) * plotW;
        const y = height - padB - (hist[i].vH2 / maxV) * plotH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  // =========================================================================
  // MÔ PHỎNG 3: PHẢN ỨNG TẠO KẾT TỦA TRONG DUNG DỊCH ĐIỆN LI (TRAO ĐỔI ION)
  // =========================================================================
  const PRECIPITATION_SYSTEMS = {
    BaSO4: {
      title: 'BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq)',
      netIonic: 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)↓ (trắng)',
      reactantA: { formula: 'BaCl₂', ion: 'Ba²⁺', ratio: 1 },
      reactantB: { formula: 'Na₂SO₄', ion: 'SO₄²⁻', ratio: 1 },
      precipitate: { formula: 'BaSO₄', molarMass: 233.39, color: '#f1f5f9', border: '#94a3b8', colorName: 'Trắng tinh thể (không tan trong axit)' },
      solutionTint: 'rgba(226, 232, 240, 0.22)'
    },
    AgCl: {
      title: 'AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)',
      netIonic: 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)↓ (trắng)',
      reactantA: { formula: 'AgNO₃', ion: 'Ag⁺', ratio: 1 },
      reactantB: { formula: 'NaCl', ion: 'Cl⁻', ratio: 1 },
      precipitate: { formula: 'AgCl', molarMass: 143.32, color: '#f8fafc', border: '#cbd5e1', colorName: 'Trắng kết tủa (hóa xám ngoài ánh sáng)' },
      solutionTint: 'rgba(226, 232, 240, 0.22)'
    },
    CuOH2: {
      title: 'CuSO₄(aq) + 2NaOH(aq) → Cu(OH)₂(s)↓ + Na₂SO₄(aq)',
      netIonic: 'Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s)↓ (xanh lam)',
      reactantA: { formula: 'CuSO₄', ion: 'Cu²⁺', ratio: 1 },
      reactantB: { formula: 'NaOH', ion: 'OH⁻', ratio: 2 },
      precipitate: { formula: 'Cu(OH)₂', molarMass: 97.56, color: '#38bdf8', border: '#0284c7', colorName: 'Xanh lam keo' },
      solutionTint: 'rgba(56, 189, 248, 0.22)'
    },
    FeOH3: {
      title: 'FeCl₃(aq) + 3NaOH(aq) → Fe(OH)₃(s)↓ + 3NaCl(aq)',
      netIonic: 'Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)↓ (nâu đỏ)',
      reactantA: { formula: 'FeCl₃', ion: 'Fe³⁺', ratio: 1 },
      reactantB: { formula: 'NaOH', ion: 'OH⁻', ratio: 3 },
      precipitate: { formula: 'Fe(OH)₃', molarMass: 106.87, color: '#b45309', border: '#78350f', colorName: 'Nâu đỏ' },
      solutionTint: 'rgba(245, 158, 11, 0.22)'
    }
  };

  class PrecipitationSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        sysKey: options.sysKey || 'BaSO4',
        cA: options.cA !== undefined ? options.cA : 0.5, // Nồng độ chất A trong cốc (M)
        vA: options.vA !== undefined ? options.vA : 200, // Thể tích chất A (mL)
        cB: options.cB !== undefined ? options.cB : 0.5, // Nồng độ thuốc thử B nhỏ vào (M)
        vB: options.vB !== undefined ? options.vB : 200  // Thể tích thuốc thử B (mL)
      };

      this.state = {
        running: true,
        progress: 0,
        particles: []
      };

      this.initParticles();
      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initParticles() {
      this.state.particles = [];
      for (let i = 0; i < 42; i++) {
        this.state.particles.push({
          x: 0.15 + Math.random() * 0.7,
          y: 0.25 + Math.random() * 0.35,
          targetY: 0.85 + Math.random() * 0.1,
          vy: 0.18 + Math.random() * 0.15,
          r: 3.5 + Math.random() * 2.5
        });
      }
    }

    computeStoichiometry() {
      const sys = PRECIPITATION_SYSTEMS[this.params.sysKey];
      const nA0 = this.params.cA * (this.params.vA / 1000);
      const nB0 = this.params.cB * (this.params.vB / 1000);

      // rA * A + rB * B -> 1 Precipitate
      const rA = sys.reactantA.ratio;
      const rB = sys.reactantB.ratio;
      const nPrecipMax = Math.min(nA0 / rA, nB0 / rB);
      const nPrecipNow = nPrecipMax * this.state.progress;
      const massMax = nPrecipMax * sys.precipitate.molarMass;
      const massNow = nPrecipNow * sys.precipitate.molarMass;

      // Equivalent volume of B needed to precipitate all A:
      // nB_eq = nA0 * (rB / rA) => vB_eq (mL) = (nB_eq / cB) * 1000
      const vB_eq = ((nA0 * (rB / rA)) / this.params.cB) * 1000;

      return { sys, nA0, nB0, nPrecipMax, nPrecipNow, massMax, massNow, vB_eq };
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="codehub-chem-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <!-- Header -->
          <div class="px-5 py-4 bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-droplet"></i>
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 3: Phản Ứng Tạo Kết Tủa Trong Dung Dịch Điện Li</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20 text-white">Hóa 11 • Bài 2 & Bài 8</span>
                </div>
                <p class="text-xs text-blue-100/90 mt-0.5">Phản ứng trao đổi ion trong dung dịch, nhận biết các cation/anion và định lượng khối lượng kết tủa $m_{\\downarrow}$</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button data-act="toggle" class="px-3.5 py-1.5 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-xs shadow-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-pause"></i> <span>Tạm dừng</span>
              </button>
              <button data-act="reset" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-rotate-left"></i> <span>Nhỏ lại thuốc thử</span>
              </button>
            </div>
          </div>

          <!-- Main Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 dark:border-slate-800">
            <!-- Beaker & Precipitate Settling (7 cols) -->
            <div class="lg:col-span-7 p-4 bg-slate-50/60 dark:bg-slate-950/50 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div class="flex flex-wrap items-center gap-1.5">
                  <button data-sys="BaSO4" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white cursor-pointer">BaSO₄↓ (Trắng)</button>
                  <button data-sys="AgCl" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">AgCl↓ (Trắng)</button>
                  <button data-sys="CuOH2" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">Cu(OH)₂↓ (Xanh lam)</button>
                  <button data-sys="FeOH3" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">Fe(OH)₃↓ (Nâu đỏ)</button>
                </div>
              </div>

              <canvas class="precip-canvas block w-full h-[265px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-inner"></canvas>

              <div data-ionic-box class="mt-2 p-2.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/60 text-xs text-slate-700 dark:text-slate-300">
                <strong>Phương trình phân tử:</strong> <span data-full-eq>BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq)</span><br>
                <strong>Màu sắc & Đặc điểm kết tủa:</strong> <span data-color-desc class="font-semibold text-indigo-700 dark:text-indigo-300">Trắng tinh thể (không tan trong axit)</span>
              </div>
            </div>

            <!-- Stoichiometric Precipitation Curve (5 cols) -->
            <div class="lg:col-span-5 p-4 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-line text-indigo-600"></i> Đồ Thị Khối Lượng Kết Tủa <em>m</em><sub>↓</sub> Theo <em>V</em><sub>thuốc thử</sub>
                </span>
              </div>

              <canvas class="graph-canvas block w-full h-[170px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"></canvas>

              <div class="mt-3 grid grid-cols-2 gap-2 text-center">
                <div class="p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50">
                  <div class="text-[10px] text-indigo-700 dark:text-indigo-300 font-medium">Số mol kết tủa</div>
                  <div class="font-extrabold text-sm text-indigo-600 dark:text-indigo-400" data-val="nPrecip">0.100 mol</div>
                </div>
                <div class="p-2 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/50">
                  <div class="text-[10px] text-emerald-700 dark:text-emerald-300 font-medium">Khối lượng kết tủa (m↓)</div>
                  <div class="font-extrabold text-sm text-emerald-600 dark:text-emerald-400" data-val="mPrecip">23.34 g</div>
                </div>
                <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 col-span-2">
                  <div class="text-[10px] text-slate-500">Thể tích thuốc thử cần để kết tủa cực đại</div>
                  <div class="font-bold text-xs text-slate-800 dark:text-slate-200" data-val="vEq">V_tương đương = 200 mL</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sliders -->
          <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/70">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nồng độ dung dịch cốc ($C_1$)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="cA">${this.params.cA.toFixed(1)} M</span>
                </div>
                <input type="range" data-ctrl="cA" min="0.1" max="1.5" step="0.1" value="${this.params.cA}" class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Thể tích dung dịch cốc ($V_1$)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="vA">${this.params.vA} mL</span>
                </div>
                <input type="range" data-ctrl="vA" min="50" max="300" step="25" value="${this.params.vA}" class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nồng độ thuốc thử ($C_2$)</label>
                  <span class="font-bold text-emerald-600 dark:text-emerald-400" data-disp="cB">${this.params.cB.toFixed(1)} M</span>
                </div>
                <input type="range" data-ctrl="cB" min="0.1" max="1.5" step="0.1" value="${this.params.cB}" class="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Thể tích thuốc thử nhỏ vào ($V_2$)</label>
                  <span class="font-bold text-emerald-600 dark:text-emerald-400" data-disp="vB">${this.params.vB} mL</span>
                </div>
                <input type="range" data-ctrl="vB" min="25" max="400" step="25" value="${this.params.vB}" class="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>
            </div>
          </div>
        </div>
      `;

      this.canvasPrecip = this.container.querySelector('.precip-canvas');
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
        this.state.progress = 0;
        this.initParticles();
        this.renderAll();
      });

      c.querySelectorAll('[data-sys]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-sys]').forEach(b => {
            b.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer';
          });
          btn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white cursor-pointer';
          this.params.sysKey = btn.dataset.sys;
          this.state.progress = 0;
          this.initParticles();

          const sys = PRECIPITATION_SYSTEMS[this.params.sysKey];
          const fullEq = c.querySelector('[data-full-eq]');
          const colorDesc = c.querySelector('[data-color-desc]');
          if (fullEq) fullEq.textContent = sys.title;
          if (colorDesc) colorDesc.textContent = sys.precipitate.colorName;
          this.renderAll();
        });
      });

      ['cA', 'vA', 'cB', 'vB'].forEach(k => {
        const inp = c.querySelector(`[data-ctrl="${k}"]`);
        const disp = c.querySelector(`[data-disp="${k}"]`);
        inp.addEventListener('input', (e) => {
          this.params[k] = parseFloat(e.target.value);
          if (disp) {
            disp.textContent = k.startsWith('c') ? `${this.params[k].toFixed(1)} M` : `${this.params[k]} mL`;
          }
          this.state.progress = 1.0; // Instant update when dragging slider
          this.renderAll();
        });
      });

      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.renderAll());
    }

    setupObserver() {
      this.inView = true;
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.08 });
        this.observer.observe(this.container);
      }
    }

    start() {
      this.lastTimestamp = performance.now();
      const loop = (now) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.state.running || !this.inView || document.hidden) {
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
      if (this.state.progress < 1.0) {
        this.state.progress = clamp(this.state.progress + dt * 0.45, 0, 1.0);
      }
      this.state.particles.forEach(p => {
        if (p.y < p.targetY) {
          p.y = Math.min(p.targetY, p.y + p.vy * dt);
        }
      });

      const stoi = this.computeStoichiometry();
      const c = this.container;
      const elNP = c.querySelector('[data-val="nPrecip"]');
      const elMP = c.querySelector('[data-val="mPrecip"]');
      const elVEq = c.querySelector('[data-val="vEq"]');
      if (elNP) elNP.textContent = `${stoi.nPrecipNow.toFixed(3)} mol`;
      if (elMP) elMP.textContent = `${stoi.massNow.toFixed(2)} g`;
      if (elVEq) elVEq.textContent = `V_tương đương = ${stoi.vB_eq.toFixed(0)} mL (${stoi.sys.reactantB.formula})`;
    }

    renderAll() {
      this.renderBeaker();
      this.renderGraph();
    }

    renderBeaker() {
      const rect = this.canvasPrecip.getBoundingClientRect();
      const width = rect.width || 380;
      const height = rect.height || 265;
      const { ctx } = setupCanvasDPI(this.canvasPrecip, width, height);
      const stoi = this.computeStoichiometry();
      const sys = stoi.sys;

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      const bLeft = width * 0.22;
      const bRight = width * 0.78;
      const bTop = 32;
      const bBottom = height - 22;
      const bWidth = bRight - bLeft;
      const liqTop = bTop + 45;

      // Liquid background
      ctx.fillStyle = sys.solutionTint;
      ctx.fillRect(bLeft + 3, liqTop, bWidth - 6, bBottom - liqTop - 3);

      // Precipitate sediment layer at bottom
      const layerHeight = clamp(stoi.nPrecipNow * 110, 4, 48);
      ctx.save();
      ctx.fillStyle = sys.precipitate.color;
      ctx.beginPath();
      ctx.roundRect(bLeft + 6, bBottom - layerHeight - 3, bWidth - 12, layerHeight, [8, 8, 2, 2]);
      ctx.fill();
      ctx.restore();

      // Settling flocculent particles
      this.state.particles.forEach(p => {
        const px = bLeft + p.x * bWidth;
        const py = liqTop + p.y * (bBottom - liqTop - 8);
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, TWO_PI);
        ctx.fillStyle = sys.precipitate.color;
        ctx.fill();
        ctx.strokeStyle = sys.precipitate.border;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Beaker glass border
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(bLeft, bTop);
      ctx.lineTo(bLeft, bBottom);
      ctx.lineTo(bRight, bBottom);
      ctx.lineTo(bRight, bTop);
      ctx.stroke();

      // Labels
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Kết tủa ${sys.precipitate.formula}↓: ${stoi.massNow.toFixed(2)} gam (${stoi.nPrecipNow.toFixed(3)} mol)`, bLeft + 10, liqTop - 10);
    }

    renderGraph() {
      const rect = this.canvasGraph.getBoundingClientRect();
      const width = rect.width || 280;
      const height = rect.height || 170;
      const { ctx } = setupCanvasDPI(this.canvasGraph, width, height);
      const theme = getThemeColors();
      const stoi = this.computeStoichiometry();
      const sys = stoi.sys;

      ctx.clearRect(0, 0, width, height);
      const padL = 36, padR = 14, padT = 16, padB = 24;
      const plotW = width - padL - padR;
      const plotH = height - padT - padB;

      // Maximum possible precipitate if B is in excess
      const maxPossibleMol = stoi.nA0 / sys.reactantA.ratio;
      const maxPossibleMass = Math.max(maxPossibleMol * sys.precipitate.molarMass * 1.2, 5.0);
      const maxVPlot = 400; // mL

      ctx.strokeStyle = theme.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL, height - padB);
      ctx.lineTo(width - padR, height - padB);
      ctx.stroke();

      // Plot theoretical curve m_precip vs V_B (0 -> 400 mL)
      ctx.beginPath();
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 2.5;
      for (let v = 0; v <= maxVPlot; v += 5) {
        const nB = this.params.cB * (v / 1000);
        const nP = Math.min(stoi.nA0 / sys.reactantA.ratio, nB / sys.reactantB.ratio);
        const mP = nP * sys.precipitate.molarMass;
        const x = padL + (v / maxVPlot) * plotW;
        const y = height - padB - (mP / maxPossibleMass) * plotH;
        if (v === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Current operating point marker (V_B = this.params.vB)
      const curX = padL + (this.params.vB / maxVPlot) * plotW;
      const curY = height - padB - (stoi.massMax / maxPossibleMass) * plotH;
      ctx.beginPath();
      ctx.arc(curX, curY, 5, 0, TWO_PI);
      ctx.fillStyle = theme.rose;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = theme.textMuted;
      ctx.font = '9px monospace';
      ctx.fillText(`${maxPossibleMass.toFixed(1)}g`, 2, padT + 6);
      ctx.fillText('V₂ (mL)', width - 44, height - 6);
    }
  }

  // =========================================================================
  // MÔ PHỎNG 4: KHÁM PHÁ CẤU TRÚC PHÂN TỬ 3D & LUYỆN TẬP CÂN BẰNG PHƯƠNG TRÌNH
  // =========================================================================
  const EQUATION_CHALLENGES = [
    {
      id: 'water',
      grade: 'Hóa 10',
      title: 'Tổng hợp nước từ đơn chất',
      reactants: [{ formula: 'H₂(g)', atoms: { H: 2 } }, { formula: 'O₂(g)', atoms: { O: 2 } }],
      products: [{ formula: 'H₂O(g)', atoms: { H: 2, O: 1 } }],
      condition: 't° / tia lửa điện',
      answer: [2, 1, 2]
    },
    {
      id: 'zn_hcl',
      grade: 'Hóa 10',
      title: 'Kẽm tác dụng với dung dịch Hydrochloric acid',
      reactants: [{ formula: 'Zn(s)', atoms: { Zn: 1 } }, { formula: 'HCl(aq)', atoms: { H: 1, Cl: 1 } }],
      products: [{ formula: 'ZnCl₂(aq)', atoms: { Zn: 1, Cl: 2 } }, { formula: 'H₂(g)↑', atoms: { H: 2 } }],
      condition: 'dd loãng',
      answer: [1, 2, 1, 1]
    },
    {
      id: 'al_hcl',
      grade: 'Hóa 10',
      title: 'Nhôm tác dụng với dung dịch HCl (Oxi hóa – khử)',
      reactants: [{ formula: 'Al(s)', atoms: { Al: 1 } }, { formula: 'HCl(aq)', atoms: { H: 1, Cl: 1 } }],
      products: [{ formula: 'AlCl₃(aq)', atoms: { Al: 1, Cl: 3 } }, { formula: 'H₂(g)↑', atoms: { H: 2 } }],
      condition: '25°C',
      answer: [2, 6, 2, 3]
    },
    {
      id: 'haber',
      grade: 'Hóa 11',
      title: 'Tổng hợp Ammonia (Quá trình Haber–Bosch)',
      reactants: [{ formula: 'N₂(g)', atoms: { N: 2 } }, { formula: 'H₂(g)', atoms: { H: 2 } }],
      products: [{ formula: 'NH₃(g)', atoms: { N: 1, H: 3 } }],
      condition: 't°, p, xt Fe',
      answer: [1, 3, 2]
    },
    {
      id: 'feoh3',
      grade: 'Hóa 11',
      title: 'Phản ứng trao đổi ion tạo kết tủa nâu đỏ Fe(OH)₃',
      reactants: [{ formula: 'FeCl₃(aq)', atoms: { Fe: 1, Cl: 3 } }, { formula: 'NaOH(aq)', atoms: { Na: 1, O: 1, H: 1 } }],
      products: [{ formula: 'Fe(OH)₃(s)↓', atoms: { Fe: 1, O: 3, H: 3 } }, { formula: 'NaCl(aq)', atoms: { Na: 1, Cl: 1 } }],
      condition: 'dd nước',
      answer: [1, 3, 1, 3]
    },
    {
      id: 'methane',
      grade: 'Hóa 11',
      title: 'Đốt cháy hoàn toàn khí Methane (Alkane)',
      reactants: [{ formula: 'CH₄(g)', atoms: { C: 1, H: 4 } }, { formula: 'O₂(g)', atoms: { O: 2 } }],
      products: [{ formula: 'CO₂(g)', atoms: { C: 1, O: 2 } }, { formula: 'H₂O(g)', atoms: { H: 2, O: 1 } }],
      condition: 't°',
      answer: [1, 2, 1, 2]
    }
  ];

  class MoleculeExplorerArena {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.molState = {
        molKey: options.molKey || 'CH4',
        mode: 'ball-stick',
        rotX: 0.35,
        rotY: 0.55,
        zoom: 1.1,
        autoRotate: true,
        dragging: false,
        lastX: 0,
        lastY: 0
      };

      this.eqIdx = 0;
      this.coeffs = [1, 1, 1, 1];

      this.initDOM();
      this.bindEvents();
      this.setupObserver();
      this.start();
    }

    initDOM() {
      const molButtons = Object.keys(MOLECULE_DB).map(k => {
        const m = MOLECULE_DB[k];
        const active = k === this.molState.molKey;
        return `<button data-mol="${k}" class="px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
          active ? 'bg-teal-600 text-white shadow-xs' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        }">${m.formula}</button>`;
      }).join('');

      const eqOptions = EQUATION_CHALLENGES.map((eq, i) =>
        `<option value="${i}">[${eq.grade}] ${eq.title}</option>`
      ).join('');

      this.container.innerHTML = `
        <div class="codehub-chem-sim bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col font-sans">
          <div class="px-5 py-4 bg-gradient-to-r from-purple-700 via-indigo-700 to-teal-700 text-white flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-base">
                <i class="fa-solid fa-atom"></i>
              </span>
              <div>
                <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Hình Phân Tử 2D/3D & Luyện Tập Bảo Toàn Nguyên Tố</h3>
                <p class="text-xs text-purple-100/90 mt-0.5">Xoay 360°, phóng to/thu nhỏ cấu trúc VSEPR và rèn luyện kỹ năng cân bằng phương trình hóa học</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <!-- Left: 3D Molecule Viewer (6 cols) -->
            <div class="lg:col-span-6 p-4 bg-slate-950 text-white border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div class="flex flex-wrap gap-1.5">${molButtons}</div>
                <div class="flex items-center gap-1">
                  <button data-mode="ball-stick" class="px-2 py-1 rounded text-[11px] font-bold bg-indigo-600 text-white cursor-pointer">3D Cầu-Thanh</button>
                  <button data-mode="space-filling" class="px-2 py-1 rounded text-[11px] font-bold bg-slate-800 text-slate-300 cursor-pointer">3D Đặc</button>
                  <button data-mode="2d-lewis" class="px-2 py-1 rounded text-[11px] font-bold bg-slate-800 text-slate-300 cursor-pointer">2D Lewis</button>
                </div>
              </div>

              <div class="relative">
                <canvas class="explorer-3d-canvas block w-full h-[270px] rounded-xl border border-slate-800 bg-slate-900 cursor-grab active:cursor-grabbing"></canvas>
                <div class="absolute bottom-2 right-2 flex items-center gap-1 bg-slate-900/80 backdrop-blur px-2 py-1 rounded-lg border border-slate-700">
                  <button data-zoom="in" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold cursor-pointer">+</button>
                  <button data-zoom="out" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold cursor-pointer">−</button>
                  <button data-zoom="reset" class="px-1.5 h-6 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-bold cursor-pointer">Xoay tự động</button>
                </div>
              </div>

              <div data-mol-details class="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 grid grid-cols-2 gap-2"></div>
            </div>

            <!-- Right: Multi-Equation Balancer (6 cols) -->
            <div class="lg:col-span-6 p-4 sm:p-5 bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                    <i class="fa-solid fa-scale-balanced"></i> Trạm Luyện Tập Cân Bằng Phương Trình
                  </span>
                  <button data-eq-solve class="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold hover:bg-purple-200 transition cursor-pointer">
                    Gợi ý hệ số chuẩn
                  </button>
                </div>

                <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Chọn phương trình hóa học trong chương trình THPT:</label>
                <select data-eq-select class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-100 mb-4">
                  ${eqOptions}
                </select>

                <!-- Dynamic Coefficient Inputs -->
                <div data-eq-inputs class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-center gap-2 text-sm font-bold"></div>

                <!-- Atom Conservation Table -->
                <div class="mt-4">
                  <div class="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">Kiểm tra Định luật Bảo toàn Nguyên tố:</div>
                  <div data-atom-table class="grid grid-cols-2 sm:grid-cols-3 gap-2"></div>
                </div>
              </div>

              <div data-eq-feedback class="mt-4 p-3 rounded-xl font-bold text-xs text-center"></div>
            </div>
          </div>
        </div>
      `;

      this.canvas3D = this.container.querySelector('.explorer-3d-canvas');
      this.updateMolDetails();
      this.renderEquationChallenge();
    }

    updateMolDetails() {
      const m = MOLECULE_DB[this.molState.molKey];
      const box = this.container.querySelector('[data-mol-details]');
      if (!box || !m) return;
      box.innerHTML = `
        <div><span class="text-slate-400">Phân tử:</span> <strong class="text-teal-400">${m.name}</strong></div>
        <div><span class="text-slate-400">Hình học:</span> <strong class="text-white">${m.geometry}</strong></div>
        <div><span class="text-slate-400">Góc liên kết:</span> <strong class="text-amber-300">${m.angle}</strong></div>
        <div><span class="text-slate-400">Độ dài LK:</span> <strong class="text-emerald-300">${m.bondLength}</strong></div>
        <div class="col-span-2"><span class="text-slate-400">Bản chất liên kết:</span> <span class="text-slate-200">${m.bondType} (${m.dipole})</span></div>
      `;
    }

    renderEquationChallenge() {
      const eq = EQUATION_CHALLENGES[this.eqIdx];
      const totalTerms = eq.reactants.length + eq.products.length;
      this.coeffs = new Array(totalTerms).fill(1);

      const inputsBox = this.container.querySelector('[data-eq-inputs]');
      let html = '';
      let idx = 0;

      eq.reactants.forEach((r, i) => {
        if (i > 0) html += `<span class="text-slate-400">+</span>`;
        html += `
          <label class="inline-flex items-center gap-1 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <input type="number" data-coeff-idx="${idx}" min="1" max="12" value="1" class="w-11 text-center font-extrabold text-teal-600 dark:text-teal-400 bg-transparent focus:outline-none">
            <span>${r.formula}</span>
          </label>
        `;
        idx++;
      });

      html += `<span class="px-1.5 text-slate-500 font-mono">→</span>`;

      eq.products.forEach((p, i) => {
        if (i > 0) html += `<span class="text-slate-400">+</span>`;
        html += `
          <label class="inline-flex items-center gap-1 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <input type="number" data-coeff-idx="${idx}" min="1" max="12" value="1" class="w-11 text-center font-extrabold text-indigo-600 dark:text-indigo-400 bg-transparent focus:outline-none">
            <span>${p.formula}</span>
          </label>
        `;
        idx++;
      });

      inputsBox.innerHTML = html;
      inputsBox.querySelectorAll('[data-coeff-idx]').forEach(inp => {
        inp.addEventListener('input', () => {
          const k = parseInt(inp.dataset.coeffIdx, 10);
          this.coeffs[k] = Math.max(1, parseInt(inp.value, 10) || 1);
          this.evaluateEquation();
        });
      });

      this.evaluateEquation();
    }

    evaluateEquation() {
      const eq = EQUATION_CHALLENGES[this.eqIdx];
      const leftCounts = {};
      const rightCounts = {};
      const allElements = new Set();

      let idx = 0;
      eq.reactants.forEach(r => {
        const c = this.coeffs[idx++];
        Object.keys(r.atoms).forEach(el => {
          allElements.add(el);
          leftCounts[el] = (leftCounts[el] || 0) + c * r.atoms[el];
        });
      });

      eq.products.forEach(p => {
        const c = this.coeffs[idx++];
        Object.keys(p.atoms).forEach(el => {
          allElements.add(el);
          rightCounts[el] = (rightCounts[el] || 0) + c * p.atoms[el];
        });
      });

      let allBalanced = true;
      let tableHtml = '';
      allElements.forEach(el => {
        const l = leftCounts[el] || 0;
        const r = rightCounts[el] || 0;
        const ok = l === r && l > 0;
        if (!ok) allBalanced = false;
        tableHtml += `
          <div class="p-2 rounded-xl border text-center ${
            ok
              ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
              : 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300'
          }">
            <div class="text-[11px] font-bold">Nguyên tố ${el}</div>
            <div class="text-xs font-extrabold mt-0.5">Trái: ${l} ${ok ? '=' : '≠'} Phải: ${r}</div>
          </div>
        `;
      });

      const tableEl = this.container.querySelector('[data-atom-table]');
      if (tableEl) tableEl.innerHTML = tableHtml;

      const fbEl = this.container.querySelector('[data-eq-feedback]');
      if (fbEl) {
        if (allBalanced) {
          fbEl.className = 'mt-4 p-3 rounded-xl font-bold text-xs text-center bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800';
          fbEl.innerHTML = `<i class="fa-solid fa-circle-check mr-1"></i> Chính xác! Phương trình đã bảo toàn số nguyên tử của mọi nguyên tố (Hệ số: ${this.coeffs.join(' : ')}).`;
        } else {
          fbEl.className = 'mt-4 p-3 rounded-xl font-bold text-xs text-center bg-amber-100/80 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800';
          fbEl.innerHTML = `<i class="fa-solid fa-Scale-unbalanced mr-1"></i> Chưa cân bằng! Hãy điều chỉnh hệ số sao cho số nguyên tử mỗi nguyên tố ở hai vế bằng nhau.`;
        }
      }
    }

    bindEvents() {
      const c = this.container;
      c.querySelectorAll('[data-mol]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-mol]').forEach(b => {
            b.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer bg-slate-800 text-slate-300 hover:bg-slate-700';
          });
          btn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer bg-teal-600 text-white shadow-xs';
          this.molState.molKey = btn.dataset.mol;
          this.updateMolDetails();
          this.render3D();
        });
      });

      c.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          c.querySelectorAll('[data-mode]').forEach(b => {
            b.className = 'px-2 py-1 rounded text-[11px] font-bold bg-slate-800 text-slate-300 cursor-pointer';
          });
          btn.className = 'px-2 py-1 rounded text-[11px] font-bold bg-indigo-600 text-white cursor-pointer';
          this.molState.mode = btn.dataset.mode;
          this.render3D();
        });
      });

      c.querySelectorAll('[data-zoom]').forEach(btn => {
        btn.addEventListener('click', () => {
          const z = btn.dataset.zoom;
          if (z === 'in') this.molState.zoom = clamp(this.molState.zoom + 0.15, 0.6, 2.2);
          else if (z === 'out') this.molState.zoom = clamp(this.molState.zoom - 0.15, 0.6, 2.2);
          else {
            this.molState.zoom = 1.1;
            this.molState.autoRotate = !this.molState.autoRotate;
          }
          this.render3D();
        });
      });

      const startDrag = (x, y) => {
        this.molState.dragging = true;
        this.molState.autoRotate = false;
        this.molState.lastX = x;
        this.molState.lastY = y;
      };
      const moveDrag = (x, y) => {
        if (!this.molState.dragging) return;
        const dx = x - this.molState.lastX;
        const dy = y - this.molState.lastY;
        this.molState.rotY += dx * 0.012;
        this.molState.rotX = clamp(this.molState.rotX + dy * 0.012, -1.4, 1.4);
        this.molState.lastX = x;
        this.molState.lastY = y;
        this.render3D();
      };
      const endDrag = () => { this.molState.dragging = false; };

      this.canvas3D.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mouseup', endDrag);

      this.canvas3D.addEventListener('touchstart', e => {
        if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas3D.addEventListener('touchmove', e => {
        if (e.touches.length === 1) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      this.canvas3D.addEventListener('touchend', endDrag);

      const sel = c.querySelector('[data-eq-select]');
      sel.addEventListener('change', (e) => {
        this.eqIdx = parseInt(e.target.value, 10) || 0;
        this.renderEquationChallenge();
      });

      c.querySelector('[data-eq-solve]').addEventListener('click', () => {
        const eq = EQUATION_CHALLENGES[this.eqIdx];
        this.coeffs = [...eq.answer];
        c.querySelectorAll('[data-coeff-idx]').forEach((inp, i) => {
          inp.value = this.coeffs[i];
        });
        this.evaluateEquation();
      });

      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.render3D());
    }

    setupObserver() {
      this.inView = true;
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { this.inView = e.isIntersecting; });
        }, { threshold: 0.08 });
        this.observer.observe(this.container);
      }
    }

    start() {
      const loop = () => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.inView || document.hidden) return;
        if (this.molState.autoRotate && !this.molState.dragging && this.molState.mode !== '2d-lewis') {
          this.molState.rotY += 0.01;
          this.render3D();
        }
      };
      this.render3D();
      this.rafId = requestAnimationFrame(loop);
    }

    render3D() {
      const rect = this.canvas3D.getBoundingClientRect();
      const width = rect.width || 380;
      const height = rect.height || 270;
      const { ctx } = setupCanvasDPI(this.canvas3D, width, height);
      renderMolecule3D(ctx, width, height, MOLECULE_DB[this.molState.molKey], this.molState);
    }
  }

  // Public Factory API
  const rAF = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : cb => setTimeout(cb, 16));
  const cAF = typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : id => clearTimeout(id));

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function formatNum(num, dec = 2) {
    if (isNaN(num) || num === null || num === undefined) return '0.00';
    return Number(num).toFixed(dec);
  }

  function isDarkMode() {
    return document.documentElement.classList.contains('dark') || (document.body && document.body.classList.contains('dark'));
  }

  // -------------------------------------------------------------
  // 1. AtomicStructureSim (Chương 1: Bài 1-4)
  // -------------------------------------------------------------
  class AtomicStructureSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'rutherford'; // 'rutherford', 'isotope', 'electron-orbitals'
      this.options = options;
      this.animId = null;
      this.running = true;

      // Rutherford state
      this.rfParams = {
        beamRate: options.beamRate || 40,
        energyMeV: options.energyMeV || 5.5,
        targetZ: options.targetZ || 79 // Gold: 79, Silver: 47, Al: 13
      };
      this.rfParticles = [];
      this.rfStats = { total: 0, undeflected: 0, deflected: 0, backscatter: 0 };

      // Isotope state
      this.isoElement = options.isoElement || 'Cl';
      this.isoRatio = options.isoRatio !== undefined ? options.isoRatio : 75.77; // % of first isotope

      // Electron orbitals state
      this.orbitalZ = options.orbitalZ || 11; // Na by default

      this.initDOM();
      this.bindEvents();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-atomic-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Control Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <!-- Mode Switcher -->
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-mode="rutherford" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'rutherford' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                Thí nghiệm Rutherford
              </button>
              <button type="button" data-mode="isotope" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'isotope' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                Đồng vị & Khối lượng TB
              </button>
              <button type="button" data-mode="electron-orbitals" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'electron-orbitals' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                Cấu hình e & Orbital
              </button>
            </div>

            <!-- Global Action Controls -->
            <div class="flex items-center gap-2">
              <button type="button" data-action="toggle-run" class="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center gap-1 cursor-pointer">
                <span>${this.running ? '⏸ Tạm dừng' : '▶ Tiếp tục'}</span>
              </button>
              <button type="button" data-action="reset" class="px-2.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-slate-200 font-bold transition cursor-pointer">
                ↺ Đặt lại
              </button>
            </div>
          </div>

          <!-- Dynamic Mode Viewport -->
          <div data-mode-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-mode-view]');
      if (!view) return;

      if (this.mode === 'rutherford') {
        view.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Canvas Simulation -->
            <div class="lg:col-span-2 space-y-2">
              <div class="relative w-full h-[320px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <canvas data-rutherford-canvas class="w-full h-full block"></canvas>
                <div class="absolute top-2 left-3 text-[11px] font-bold text-amber-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                  Nguồn hạt α (He²⁺) → Lá vàng (Au, Z=79) → Màn huỳnh quang ZnS
                </div>
              </div>
              <!-- Realtime Counters -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div class="text-[10px] text-slate-500">Tổng số hạt α</div>
                  <div data-cnt-total class="text-sm font-extrabold text-slate-800 dark:text-slate-200 font-mono">0</div>
                </div>
                <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <div class="text-[10px] text-emerald-600 dark:text-emerald-400">Đi thẳng (~99.9%)</div>
                  <div data-cnt-straight class="text-sm font-extrabold text-emerald-700 dark:text-emerald-300 font-mono">0</div>
                </div>
                <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <div class="text-[10px] text-amber-600 dark:text-amber-400">Lệch góc nhỏ (&lt;90°)</div>
                  <div data-cnt-deflected class="text-sm font-extrabold text-amber-700 dark:text-amber-300 font-mono">0</div>
                </div>
                <div class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                  <div class="text-[10px] text-rose-600 dark:text-rose-400">Bật ngược lại (&gt;90°)</div>
                  <div data-cnt-back class="text-sm font-extrabold text-rose-700 dark:text-rose-300 font-mono">0</div>
                </div>
              </div>
            </div>

            <!-- Parameters & Theory -->
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
                <span>⚙️</span> Tham số thực nghiệm
              </h5>

              <div>
                <label class="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">Kim loại lá bia:</label>
                <select data-rf-target class="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-200">
                  <option value="79" ${this.rfParams.targetZ === 79 ? 'selected' : ''}>Vàng (Gold Au - Z = 79)</option>
                  <option value="47" ${this.rfParams.targetZ === 47 ? 'selected' : ''}>Bạc (Silver Ag - Z = 47)</option>
                  <option value="13" ${this.rfParams.targetZ === 13 ? 'selected' : ''}>Nhôm (Aluminum Al - Z = 13)</option>
                </select>
              </div>

              <div>
                <div class="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                  <span>Năng lượng hạt α:</span>
                  <span data-rf-energy-val class="font-bold text-teal-600 font-mono">${this.rfParams.energyMeV} MeV</span>
                </div>
                <input type="range" data-rf-energy min="3.0" max="8.5" step="0.5" value="${this.rfParams.energyMeV}" class="w-full accent-teal-600 cursor-pointer">
              </div>

              <div>
                <div class="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                  <span>Cường độ chùm hạt α:</span>
                  <span data-rf-rate-val class="font-bold text-teal-600 font-mono">${this.rfParams.beamRate} hạt/giây</span>
                </div>
                <input type="range" data-rf-rate min="10" max="100" step="10" value="${this.rfParams.beamRate}" class="w-full accent-teal-600 cursor-pointer">
              </div>

              <div class="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
                <strong class="text-teal-700 dark:text-teal-300">Kết luận của Rutherford (1911):</strong>
                <ul class="list-disc pl-4 space-y-1 mt-1">
                  <li>Nguyên tử có <strong>cấu tạo rỗng</strong>, hầu hết các hạt α xuyên thẳng qua lớp vỏ electron.</li>
                  <li>Phần mang điện tích dương và tập trung gần như toàn bộ khối lượng là <strong>hạt nhân nguyên tử</strong>, có kích thước rất nhỏ so với nguyên tử (<em>r</em><sub>hn</sub> ≈ 10<sup>-14</sup> m ≪ <em>r</em><sub>nt</sub> ≈ 10<sup>-10</sup> m).</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'isotope') {
        const elementsData = {
          Cl: { name: 'Chlorine (Cl)', a1: 35, a2: 37, defRatio: 75.77, unit: 'u' },
          Cu: { name: 'Đồng (Copper Cu)', a1: 63, a2: 65, defRatio: 69.15, unit: 'u' },
          C:  { name: 'Carbon (C)', a1: 12, a2: 13, defRatio: 98.89, unit: 'u' },
          H:  { name: 'Hydrogen (H)', a1: 1, a2: 2, defRatio: 99.985, unit: 'u' }
        };
        const el = elementsData[this.isoElement] || elementsData.Cl;
        const x1 = this.isoRatio;
        const x2 = 100 - x1;
        const avgA = (x1 * el.a1 + x2 * el.a2) / 100;

        view.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Controls & Calculations -->
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
                <span>⚖️</span> Xác định nguyên tử khối trung bình
              </h5>

              <div>
                <label class="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">Chọn nguyên tố hóa học:</label>
                <select data-iso-select class="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-200">
                  <option value="Cl" ${this.isoElement === 'Cl' ? 'selected' : ''}>Chlorine (³⁵Cl và ³⁷Cl)</option>
                  <option value="Cu" ${this.isoElement === 'Cu' ? 'selected' : ''}>Đồng (⁶³Cu và ⁶⁵Cu)</option>
                  <option value="C" ${this.isoElement === 'C' ? 'selected' : ''}>Carbon (¹²C và ¹³C)</option>
                  <option value="H" ${this.isoElement === 'H' ? 'selected' : ''}>Hydrogen (¹H và ²H - Deuterium)</option>
                </select>
              </div>

              <div>
                <div class="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                  <span>Đồng vị <strong><sup>${el.a1}</sup>${this.isoElement}</strong>:</span>
                  <span data-iso-pct1 class="font-bold text-teal-600 font-mono">${formatNum(x1, 2)}%</span>
                </div>
                <input type="range" data-iso-range min="0.0" max="100.0" step="0.01" value="${x1}" class="w-full accent-teal-600 cursor-pointer">
              </div>

              <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                <div class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Công thức tổng quát:</div>
                <div class="flex items-center gap-2 font-serif text-teal-700 dark:text-teal-300 text-sm">
                  <span class="italic font-bold text-base">A&#772;</span>
                  <span class="font-sans font-bold">=</span>
                  <span class="inline-flex flex-col items-center align-middle mx-1 text-xs">
                    <span class="border-b border-current pb-0.5 px-1 font-semibold">x₁ · A₁ + x₂ · A₂</span>
                    <span class="pt-0.5 font-semibold">100</span>
                  </span>
                </div>
                <div class="flex items-center gap-2 font-serif text-slate-700 dark:text-slate-300 text-xs pt-1.5 border-t border-slate-100 dark:border-slate-800">
                  <span class="font-sans font-bold invisible">A&#772;</span>
                  <span class="font-sans font-bold">=</span>
                  <span class="inline-flex flex-col items-center align-middle mx-1">
                    <span class="border-b border-current pb-0.5 px-1 font-mono font-semibold">${formatNum(x1, 2)} × ${el.a1} + ${formatNum(x2, 2)} × ${el.a2}</span>
                    <span class="pt-0.5 font-mono font-semibold">100</span>
                  </span>
                </div>
                <div class="text-sm font-extrabold text-teal-600 dark:text-teal-400 font-mono pt-1">
                  = ${formatNum(avgA, 4)} u (amu)
                </div>
              </div>
            </div>

            <!-- Mass Spectrometry Graph -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div class="text-xs font-bold text-slate-300 mb-2 flex items-center justify-between">
                <span>Phổ khối lượng (Mass Spectrometry)</span>
                <span class="text-teal-400 font-mono text-[11px]">Tỉ lệ phần trăm (%)</span>
              </div>
              <div class="h-[200px] flex items-end justify-center gap-12 px-6 pb-4 border-b border-slate-700 relative">
                <!-- Bar 1 -->
                <div class="flex flex-col items-center gap-1 w-16">
                  <span class="text-[10px] text-teal-300 font-mono font-bold">${formatNum(x1, 1)}%</span>
                  <div class="w-10 bg-teal-500 rounded-t-md transition-all duration-300" style="height: ${Math.max(4, x1 * 1.6)}px"></div>
                  <span class="text-xs font-bold text-slate-200 mt-1"><sup>${el.a1}</sup>${this.isoElement}</span>
                </div>
                <!-- Bar 2 -->
                <div class="flex flex-col items-center gap-1 w-16">
                  <span class="text-[10px] text-amber-300 font-mono font-bold">${formatNum(x2, 1)}%</span>
                  <div class="w-10 bg-amber-500 rounded-t-md transition-all duration-300" style="height: ${Math.max(4, x2 * 1.6)}px"></div>
                  <span class="text-xs font-bold text-slate-200 mt-1"><sup>${el.a2}</sup>${this.isoElement}</span>
                </div>
              </div>
              <div class="text-[11px] text-slate-400 mt-2 text-center">
                Trục hoành: Số khối <em>A</em> (<em>m/z</em>) • Trục tung: Độ phổ biến tương đối (%)
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'electron-orbitals') {
        const elementsZ = [
          null,
          { sym: 'H', name: 'Hydrogen', z: 1, cfg: '1s¹' },
          { sym: 'He', name: 'Helium', z: 2, cfg: '1s²' },
          { sym: 'Li', name: 'Lithium', z: 3, cfg: '[He] 2s¹' },
          { sym: 'Be', name: 'Beryllium', z: 4, cfg: '[He] 2s²' },
          { sym: 'B', name: 'Boron', z: 5, cfg: '[He] 2s² 2p¹' },
          { sym: 'C', name: 'Carbon', z: 6, cfg: '[He] 2s² 2p²' },
          { sym: 'N', name: 'Nitrogen', z: 7, cfg: '[He] 2s² 2p³' },
          { sym: 'O', name: 'Oxygen', z: 8, cfg: '[He] 2s² 2p⁴' },
          { sym: 'F', name: 'Fluorine', z: 9, cfg: '[He] 2s² 2p⁵' },
          { sym: 'Ne', name: 'Neon', z: 10, cfg: '[He] 2s² 2p⁶' },
          { sym: 'Na', name: 'Sodium', z: 11, cfg: '[Ne] 3s¹' },
          { sym: 'Mg', name: 'Magnesium', z: 12, cfg: '[Ne] 3s²' },
          { sym: 'Al', name: 'Aluminium', z: 13, cfg: '[Ne] 3s² 3p¹' },
          { sym: 'Si', name: 'Silicon', z: 14, cfg: '[Ne] 3s² 3p²' },
          { sym: 'P', name: 'Phosphorus', z: 15, cfg: '[Ne] 3s² 3p³' },
          { sym: 'S', name: 'Sulfur', z: 16, cfg: '[Ne] 3s² 3p⁴' },
          { sym: 'Cl', name: 'Chlorine', z: 17, cfg: '[Ne] 3s² 3p⁵' },
          { sym: 'Ar', name: 'Argon', z: 18, cfg: '[Ne] 3s² 3p⁶' },
          { sym: 'K', name: 'Potassium', z: 19, cfg: '[Ar] 4s¹' },
          { sym: 'Ca', name: 'Calcium', z: 20, cfg: '[Ar] 4s²' },
          { sym: 'Sc', name: 'Scandium', z: 21, cfg: '[Ar] 3d¹ 4s²' },
          { sym: 'Ti', name: 'Titanium', z: 22, cfg: '[Ar] 3d² 4s²' },
          { sym: 'V', name: 'Vanadium', z: 23, cfg: '[Ar] 3d³ 4s²' },
          { sym: 'Cr', name: 'Chromium', z: 24, cfg: '[Ar] 3d⁵ 4s¹ (bán bão hòa)' },
          { sym: 'Mn', name: 'Manganese', z: 25, cfg: '[Ar] 3d⁵ 4s²' },
          { sym: 'Fe', name: 'Iron', z: 26, cfg: '[Ar] 3d⁶ 4s²' },
          { sym: 'Co', name: 'Cobalt', z: 27, cfg: '[Ar] 3d⁷ 4s²' },
          { sym: 'Ni', name: 'Nickel', z: 28, cfg: '[Ar] 3d⁸ 4s²' },
          { sym: 'Cu', name: 'Copper', z: 29, cfg: '[Ar] 3d¹⁰ 4s¹ (bão hòa)' },
          { sym: 'Zn', name: 'Zinc', z: 30, cfg: '[Ar] 3d¹⁰ 4s²' }
        ];

        const el = elementsZ[this.orbitalZ] || elementsZ[11];

        // Fill orbital boxes according to Hund and Pauli rules
        // Subshells: 1s(1), 2s(1), 2p(3), 3s(1), 3p(3), 4s(1), 3d(5)
        const subshells = [
          { name: '1s', cap: 2, boxes: 1 },
          { name: '2s', cap: 2, boxes: 1 },
          { name: '2p', cap: 6, boxes: 3 },
          { name: '3s', cap: 2, boxes: 1 },
          { name: '3p', cap: 6, boxes: 3 },
          { name: '4s', cap: 2, boxes: 1 },
          { name: '3d', cap: 10, boxes: 5 }
        ];

        let remainingE = el.z;
        // Handle Cr and Cu exceptions
        let configCounts = {};
        if (el.z === 24) { // Cr
          configCounts = { '1s': 2, '2s': 2, '2p': 6, '3s': 2, '3p': 6, '4s': 1, '3d': 5 };
        } else if (el.z === 29) { // Cu
          configCounts = { '1s': 2, '2s': 2, '2p': 6, '3s': 2, '3p': 6, '4s': 1, '3d': 10 };
        } else {
          // Standard Aufbau filling: 1s, 2s, 2p, 3s, 3p, 4s, 3d
          for (let sub of subshells) {
            let take = Math.min(remainingE, sub.cap);
            configCounts[sub.name] = take;
            remainingE -= take;
            if (remainingE <= 0) break;
          }
        }

        // Generate box diagrams
        const boxHtml = subshells.filter(s => (configCounts[s.name] || 0) > 0).map(sub => {
          let eCount = configCounts[sub.name] || 0;
          let boxElec = [];
          for (let b = 0; b < sub.boxes; b++) boxElec.push(0);

          // Hund's rule filling
          for (let i = 0; i < eCount; i++) {
            if (i < sub.boxes) {
              boxElec[i] = 1; // single spin-up
            } else {
              boxElec[i - sub.boxes] = 2; // paired spin-down
            }
          }

          let boxesRender = boxElec.map(count => {
            let symbol = '';
            if (count === 1) symbol = '<span class="text-teal-600 font-bold">↑</span>';
            if (count === 2) symbol = '<span class="text-teal-600 font-bold">↑</span><span class="text-rose-500 font-bold">↓</span>';
            return `<div class="w-8 h-8 rounded border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 flex items-center justify-center text-xs tracking-tighter">${symbol}</div>`;
          }).join('');

          return `
            <div class="flex flex-col items-center gap-1">
              <span class="font-bold text-[11px] text-slate-500 font-mono">${sub.name}<sup>${eCount}</sup></span>
              <div class="flex gap-1">${boxesRender}</div>
            </div>
          `;
        }).join('');

        view.innerHTML = `
          <div class="space-y-4">
            <!-- Selector Header -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-teal-600 text-white flex flex-col items-center justify-center font-black">
                  <span class="text-[10px] leading-none opacity-80">${el.z}</span>
                  <span class="text-base leading-none">${el.sym}</span>
                </div>
                <div>
                  <h4 class="text-sm font-extrabold text-slate-800 dark:text-white">${el.name} (Z = ${el.z})</h4>
                  <p class="text-xs font-mono text-teal-600 dark:text-teal-300 font-bold">${el.cfg}</p>
                </div>
              </div>

              <!-- Z Slider -->
              <div class="flex items-center gap-2">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Số hiệu Z:</span>
                <input type="range" data-orbital-z min="1" max="30" value="${el.z}" class="w-36 accent-teal-600 cursor-pointer">
                <span class="font-mono font-bold text-teal-600 w-6 text-center">${el.z}</span>
              </div>
            </div>

            <!-- Orbital Box Diagram -->
            <div class="p-4 bg-slate-100/70 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <div class="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center justify-between">
                <span>Ô Orbital (Ô lượng tử) & Chiều tự quay của Electron (Spin ↑↓)</span>
                <span class="text-[11px] text-slate-500">Quy tắc Hund & Pauli</span>
              </div>
              <div class="flex flex-wrap items-end gap-3 justify-center sm:justify-start">
                ${boxHtml}
              </div>
            </div>

            <!-- Shape Preview (s vs p) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-teal-500/20 border-2 border-teal-500 flex items-center justify-center font-bold text-teal-600 shrink-0">s</div>
                <div>
                  <div class="font-bold text-slate-800 dark:text-slate-200">Orbital s (Hình cầu)</div>
                  <div class="text-[11px] text-slate-500">Đối xứng không gian tâm hạt nhân, tối đa chứa 2 electron.</div>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center font-bold text-indigo-600 shrink-0">p</div>
                <div>
                  <div class="font-bold text-slate-800 dark:text-slate-200">Orbital p (Hình số 8 nổi)</div>
                  <div class="text-[11px] text-slate-500">3 hướng trục không gian (p_x, p_y, p_z), tối đa chứa 6 electron.</div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      // Switch mode buttons
      this.container.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.mode;
          this.container.querySelectorAll('[data-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'dark:border-slate-700', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          btn.classList.remove('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'dark:border-slate-700', 'text-slate-700', 'dark:text-slate-300');
          this.renderCurrentMode();
        });
      });

      // Play/Pause button
      const runBtn = this.container.querySelector('[data-action="toggle-run"]');
      if (runBtn) {
        runBtn.addEventListener('click', () => {
          this.running = !this.running;
          runBtn.innerHTML = `<span>${this.running ? '⏸ Tạm dừng' : '▶ Tiếp tục'}</span>`;
        });
      }

      // Reset button
      const resetBtn = this.container.querySelector('[data-action="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.rfParticles = [];
          this.rfStats = { total: 0, undeflected: 0, deflected: 0, backscatter: 0 };
          this.renderCurrentMode();
        });
      }
    }

    bindModeControls() {
      if (this.mode === 'rutherford') {
        const targetSel = this.container.querySelector('[data-rf-target]');
        if (targetSel) {
          targetSel.addEventListener('change', (e) => {
            this.rfParams.targetZ = parseInt(e.target.value, 10);
          });
        }
        const energySlider = this.container.querySelector('[data-rf-energy]');
        if (energySlider) {
          energySlider.addEventListener('input', (e) => {
            this.rfParams.energyMeV = parseFloat(e.target.value);
            const valEl = this.container.querySelector('[data-rf-energy-val]');
            if (valEl) valEl.textContent = `${this.rfParams.energyMeV} MeV`;
          });
        }
        const rateSlider = this.container.querySelector('[data-rf-rate]');
        if (rateSlider) {
          rateSlider.addEventListener('input', (e) => {
            this.rfParams.beamRate = parseInt(e.target.value, 10);
            const valEl = this.container.querySelector('[data-rf-rate-val]');
            if (valEl) valEl.textContent = `${this.rfParams.beamRate} hạt/giây`;
          });
        }
        this.setupRutherfordCanvas();
      } else if (this.mode === 'isotope') {
        const sel = this.container.querySelector('[data-iso-select]');
        if (sel) {
          sel.addEventListener('change', (e) => {
            this.isoElement = e.target.value;
            const defs = { Cl: 75.77, Cu: 69.15, C: 98.89, H: 99.985 };
            this.isoRatio = defs[this.isoElement] || 50;
            this.renderCurrentMode();
          });
        }
        const range = this.container.querySelector('[data-iso-range]');
        if (range) {
          range.addEventListener('input', (e) => {
            this.isoRatio = parseFloat(e.target.value);
            this.renderCurrentMode();
          });
        }
      } else if (this.mode === 'electron-orbitals') {
        const zSlider = this.container.querySelector('[data-orbital-z]');
        if (zSlider) {
          zSlider.addEventListener('input', (e) => {
            this.orbitalZ = parseInt(e.target.value, 10);
            this.renderCurrentMode();
          });
        }
      }
    }

    setupRutherfordCanvas() {
      const canvas = this.container.querySelector('[data-rutherford-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 600;
      canvas.height = rect.height || 320;
    }

    start() {
      let lastTime = performance.now();
      let particleTimer = 0;

      const loop = (now) => {
        const dt = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;

        if (this.running && this.mode === 'rutherford') {
          this.updateRutherford(dt);
          this.drawRutherford();
        }

        this.animId = rAF(loop);
      };
      this.animId = rAF(loop);
    }

    updateRutherford(dt) {
      const canvas = this.container.querySelector('[data-rutherford-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const w = canvas.width;
      const h = canvas.height;
      const foilX = w * 0.55;
      const foilY = h * 0.5;

      // Spawn particles based on beamRate
      const spawnInterval = 1 / this.rfParams.beamRate;
      this.spawnTimer = (this.spawnTimer || 0) + dt;
      while (this.spawnTimer >= spawnInterval) {
        this.spawnTimer -= spawnInterval;
        // Impact parameter b relative to foil nucleus center
        // Most pass with large b, tiny fraction near nucleus
        const impactY = foilY + (Math.random() - 0.5) * (h * 0.85);
        this.rfParticles.push({
          x: 20,
          y: impactY,
          vx: 300 * Math.sqrt(this.rfParams.energyMeV / 5.5),
          vy: 0,
          initialY: impactY,
          deflected: false
        });
        this.rfStats.total++;
      }

      // Update particle positions with Coulomb deflection
      for (let i = this.rfParticles.length - 1; i >= 0; i--) {
        const p = this.rfParticles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Interaction with gold nucleus near foilX, foilY
        const dx = foilX - p.x;
        const dy = foilY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repulsive force ~ Z / dist^2
        if (dist < 80 && dist > 2) {
          const force = (this.rfParams.targetZ * 4500) / (dist * dist);
          const fx = -(dx / dist) * force;
          const fy = -(dy / dist) * force;
          p.vx += fx * dt;
          p.vy += fy * dt;
          p.deflected = true;
        }

        // Particle reached detector boundary or screen edge
        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          const angleDeg = Math.abs(Math.atan2(p.vy, p.vx) * 180 / Math.PI);
          if (angleDeg < 5) {
            this.rfStats.undeflected++;
          } else if (angleDeg < 90) {
            this.rfStats.deflected++;
          } else {
            this.rfStats.backscatter++;
          }
          this.rfParticles.splice(i, 1);
        }
      }

      // Update counters in DOM
      const totEl = this.container.querySelector('[data-cnt-total]');
      const strEl = this.container.querySelector('[data-cnt-straight]');
      const defEl = this.container.querySelector('[data-cnt-deflected]');
      const bckEl = this.container.querySelector('[data-cnt-back]');
      if (totEl) totEl.textContent = this.rfStats.total;
      if (strEl) strEl.textContent = this.rfStats.undeflected;
      if (defEl) defEl.textContent = this.rfStats.deflected;
      if (bckEl) bckEl.textContent = this.rfStats.backscatter;
    }

    drawRutherford() {
      const canvas = this.container.querySelector('[data-rutherford-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Background glow
      ctx.fillStyle = '#050b14';
      ctx.fillRect(0, 0, w, h);

      // Alpha Source Box
      ctx.fillStyle = '#475569';
      ctx.fillRect(10, h * 0.5 - 25, 20, 50);
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(25, h * 0.5 - 6, 8, 12);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '9px monospace';
      ctx.fillText('α Source', 8, h * 0.5 - 30);

      // Gold Foil in center
      const foilX = w * 0.55;
      const foilY = h * 0.5;
      ctx.strokeStyle = '#eab308';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(foilX, 20);
      ctx.lineTo(foilX, h - 20);
      ctx.stroke();

      // Gold Nucleus illustration point
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(foilX, foilY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#fef08a';
      ctx.font = '10px sans-serif';
      ctx.fillText(`Nucleus (Z=${this.rfParams.targetZ})`, foilX - 35, foilY - 12);

      // Fluorescent circular detector screen
      ctx.strokeStyle = '#065f46';
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(foilX, foilY, Math.min(w, h) * 0.44, -Math.PI * 0.85, Math.PI * 0.85);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Alpha Particles
      for (const p of this.rfParticles) {
        ctx.fillStyle = p.deflected ? '#f43f5e' : '#34d399';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    destroy() {
      if (this.animId) cAF(this.animId);
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 2. PeriodicTableSim (Chương 2: Bài 5-9)
  // -------------------------------------------------------------
  class PeriodicTableSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'periodic-table'; // 'periodic-table', 'atomic-trends', 'oxide-hydroxide'
      this.selectedElement = options.selectedElement || 'Na';
      this.trendProperty = options.trendProperty || 'radius'; // 'radius', 'en', 'ie1'

      this.elementsDB = [
        { z: 1, sym: 'H', name: 'Hydrogen', m: 1.008, p: 1, g: 'IA', blk: 's', type: 'nonmetal', r: 53, en: 2.20, ie: 1312, cfg: '1s¹' },
        { z: 2, sym: 'He', name: 'Helium', m: 4.003, p: 1, g: 'VIIIA', blk: 's', type: 'noble', r: 31, en: null, ie: 2372, cfg: '1s²' },
        { z: 3, sym: 'Li', name: 'Lithium', m: 6.94, p: 2, g: 'IA', blk: 's', type: 'alkali', r: 152, en: 0.98, ie: 520, cfg: '[He] 2s¹' },
        { z: 4, sym: 'Be', name: 'Beryllium', m: 9.012, p: 2, g: 'IIA', blk: 's', type: 'alkaline', r: 112, en: 1.57, ie: 899, cfg: '[He] 2s²' },
        { z: 5, sym: 'B', name: 'Boron', m: 10.81, p: 2, g: 'IIIA', blk: 'p', type: 'metalloid', r: 85, en: 2.04, ie: 801, cfg: '[He] 2s² 2p¹' },
        { z: 6, sym: 'C', name: 'Carbon', m: 12.01, p: 2, g: 'IVA', blk: 'p', type: 'nonmetal', r: 77, en: 2.55, ie: 1086, cfg: '[He] 2s² 2p²' },
        { z: 7, sym: 'N', name: 'Nitrogen', m: 14.01, p: 2, g: 'VA', blk: 'p', type: 'nonmetal', r: 70, en: 3.04, ie: 1402, cfg: '[He] 2s² 2p³' },
        { z: 8, sym: 'O', name: 'Oxygen', m: 16.00, p: 2, g: 'VIA', blk: 'p', type: 'nonmetal', r: 66, en: 3.44, ie: 1314, cfg: '[He] 2s² 2p⁴' },
        { z: 9, sym: 'F', name: 'Fluorine', m: 19.00, p: 2, g: 'VIIA', blk: 'p', type: 'halogen', r: 64, en: 3.98, ie: 1681, cfg: '[He] 2s² 2p⁵' },
        { z: 10, sym: 'Ne', name: 'Neon', m: 20.18, p: 2, g: 'VIIIA', blk: 'p', type: 'noble', r: 38, en: null, ie: 2081, cfg: '[He] 2s² 2p⁶' },
        { z: 11, sym: 'Na', name: 'Sodium', m: 22.99, p: 3, g: 'IA', blk: 's', type: 'alkali', r: 186, en: 0.93, ie: 496, cfg: '[Ne] 3s¹' },
        { z: 12, sym: 'Mg', name: 'Magnesium', m: 24.31, p: 3, g: 'IIA', blk: 's', type: 'alkaline', r: 160, en: 1.31, ie: 738, cfg: '[Ne] 3s²' },
        { z: 13, sym: 'Al', name: 'Aluminium', m: 26.98, p: 3, g: 'IIIA', blk: 'p', type: 'metal', r: 143, en: 1.61, ie: 578, cfg: '[Ne] 3s² 3p¹' },
        { z: 14, sym: 'Si', name: 'Silicon', m: 28.09, p: 3, g: 'IVA', blk: 'p', type: 'metalloid', r: 118, en: 1.90, ie: 786, cfg: '[Ne] 3s² 3p²' },
        { z: 15, sym: 'P', name: 'Phosphorus', m: 30.97, p: 3, g: 'VA', blk: 'p', type: 'nonmetal', r: 110, en: 2.19, ie: 1012, cfg: '[Ne] 3s² 3p³' },
        { z: 16, sym: 'S', name: 'Sulfur', m: 32.06, p: 3, g: 'VIA', blk: 'p', type: 'nonmetal', r: 103, en: 2.58, ie: 1000, cfg: '[Ne] 3s² 3p⁴' },
        { z: 17, sym: 'Cl', name: 'Chlorine', m: 35.45, p: 3, g: 'VIIA', blk: 'p', type: 'halogen', r: 99, en: 3.16, ie: 1251, cfg: '[Ne] 3s² 3p⁵' },
        { z: 18, sym: 'Ar', name: 'Argon', m: 39.95, p: 3, g: 'VIIIA', blk: 'p', type: 'noble', r: 71, en: null, ie: 1521, cfg: '[Ne] 3s² 3p⁶' },
        { z: 19, sym: 'K', name: 'Potassium', m: 39.10, p: 4, g: 'IA', blk: 's', type: 'alkali', r: 227, en: 0.82, ie: 419, cfg: '[Ar] 4s¹' },
        { z: 20, sym: 'Ca', name: 'Calcium', m: 40.08, p: 4, g: 'IIA', blk: 's', type: 'alkaline', r: 197, en: 1.00, ie: 590, cfg: '[Ar] 4s²' }
      ];

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-pt-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Control Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-pt-mode="periodic-table" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'periodic-table' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                Bảng tuần hoàn tương tác
              </button>
              <button type="button" data-pt-mode="atomic-trends" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'atomic-trends' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                Xu hướng biến đổi tuần hoàn
              </button>
              <button type="button" data-pt-mode="oxide-hydroxide" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'oxide-hydroxide' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                Hợp chất Oxide & Hydroxide
              </button>
            </div>
          </div>

          <!-- Dynamic Viewport -->
          <div data-pt-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-pt-view]');
      if (!view) return;

      if (this.mode === 'periodic-table') {
        const curEl = this.elementsDB.find(x => x.sym === this.selectedElement) || this.elementsDB[10];

        // Grid of first 20 elements with proper periodic spacing
        const gridCells = this.elementsDB.map(el => {
          const typeColors = {
            alkali: 'bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-200 border-rose-300',
            alkaline: 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-200 border-amber-300',
            metalloid: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border-emerald-300',
            nonmetal: 'bg-cyan-100 dark:bg-cyan-950/70 text-cyan-800 dark:text-cyan-200 border-cyan-300',
            halogen: 'bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border-purple-300',
            noble: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-400',
            metal: 'bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-200 border-blue-300'
          };
          const colorClass = typeColors[el.type] || 'bg-slate-100 text-slate-800';
          const isSelected = el.sym === this.selectedElement;

          return `
            <button type="button" data-elem="${el.sym}" class="p-1 sm:p-2 rounded-lg border text-center transition flex flex-col items-center justify-between cursor-pointer ${colorClass} ${isSelected ? 'ring-2 ring-teal-500 scale-105 shadow-md font-black' : 'hover:scale-102'}">
              <span class="text-[9px] opacity-75">${el.z}</span>
              <span class="text-xs sm:text-sm font-extrabold">${el.sym}</span>
              <span class="text-[8px] truncate hidden sm:block">${el.name}</span>
            </button>
          `;
        }).join('');

        view.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Table Grid -->
            <div class="lg:col-span-2 space-y-2">
              <div class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>Chọn nguyên tố trong bảng tuần hoàn (Z = 1 → 20):</span>
                <span class="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Khối s & p</span>
              </div>
              <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-1.5 sm:gap-2">
                ${gridCells}
              </div>
            </div>

            <!-- Detail Inspector Card -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-3">
              <div class="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div class="w-14 h-14 rounded-2xl bg-teal-600 text-white flex flex-col items-center justify-center font-black shrink-0 shadow-sm">
                  <span class="text-[10px] leading-none opacity-80">${curEl.z}</span>
                  <span class="text-xl leading-none">${curEl.sym}</span>
                  <span class="text-[9px] leading-none opacity-90 mt-0.5">${curEl.m}</span>
                </div>
                <div>
                  <h4 class="text-base font-extrabold text-slate-900 dark:text-white">${curEl.name}</h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Chu kì ${curEl.p} • Nhóm ${curEl.g} (Khối ${curEl.blk})</p>
                </div>
              </div>

              <div class="space-y-1.5">
                <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-500">Cấu hình electron:</span>
                  <span class="font-mono font-bold text-teal-600 dark:text-teal-400">${curEl.cfg}</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-500">Bán kính nguyên tử:</span>
                  <span class="font-mono font-bold">${curEl.r} pm</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-500">Độ âm điện (Pauling):</span>
                  <span class="font-mono font-bold text-amber-600">${curEl.en !== null ? curEl.en : 'Không xác định'}</span>
                </div>
                <div class="flex justify-between py-1">
                  <span class="text-slate-500">Năng lượng ion hóa I₁:</span>
                  <span class="font-mono font-bold text-indigo-600">${curEl.ie} kJ/mol</span>
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'atomic-trends') {
        // Comparative chart for Period 3 (Na to Cl) or Group IA (Li to K)
        const period3 = this.elementsDB.filter(x => x.p === 3);

        const barsHtml = period3.map(el => {
          let val = 0;
          let maxVal = 200;
          let unit = '';
          if (this.trendProperty === 'radius') {
            val = el.r;
            maxVal = 200;
            unit = 'pm';
          } else if (this.trendProperty === 'en') {
            val = el.en || 0;
            maxVal = 4.0;
            unit = '';
          } else if (this.trendProperty === 'ie1') {
            val = el.ie;
            maxVal = 1600;
            unit = 'kJ/mol';
          }
          const pct = Math.max(5, (val / maxVal) * 100);

          return `
            <div class="flex flex-col items-center gap-1 w-12">
              <span class="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400">${val}</span>
              <div class="w-8 rounded-t-md bg-teal-500 dark:bg-teal-400 transition-all duration-300" style="height: ${pct * 1.5}px"></div>
              <span class="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">${el.sym}</span>
            </div>
          `;
        }).join('');

        const explanations = {
          radius: '<strong>Bán kính nguyên tử giảm dần qua chu kì 3 (Na → Cl):</strong> Do số lớp electron không đổi (3 lớp), điện tích hạt nhân Z tăng dần (+11 → +17) làm lực hút giữa hạt nhân với các electron lớp ngoài cùng tăng, kéo các electron lại gần hạt nhân hơn.',
          en: '<strong>Độ âm điện tăng dần qua chu kì 3 (Na → Cl):</strong> Khả năng hút electron liên kết tăng do bán kính nguyên tử giảm và điện tích hạt nhân tăng.',
          ie1: '<strong>Năng lượng ion hóa I₁ có xu hướng tăng dần:</strong> Cần nhiều năng lượng hơn để bứt electron lớp ngoài cùng khỏi nguyên tử khi bán kính giảm và lực hút hạt nhân tăng.'
        };

        view.innerHTML = `
          <div class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <span class="font-bold text-slate-700 dark:text-slate-300">Khảo sát xu hướng biến đổi trong Chu kì 3 (Na → Cl):</span>
              <div class="flex items-center gap-1.5">
                <button type="button" data-prop="radius" class="px-2.5 py-1 rounded font-bold border ${this.trendProperty === 'radius' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Bán kính nguyên tử</button>
                <button type="button" data-prop="en" class="px-2.5 py-1 rounded font-bold border ${this.trendProperty === 'en' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Độ âm điện</button>
                <button type="button" data-prop="ie1" class="px-2.5 py-1 rounded font-bold border ${this.trendProperty === 'ie1' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Năng lượng ion hóa I₁</button>
              </div>
            </div>

            <!-- Bar Chart -->
            <div class="p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex items-end justify-around h-[220px]">
              ${barsHtml}
            </div>

            <!-- Explanation Box -->
            <div class="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              ${explanations[this.trendProperty] || ''}
            </div>
          </div>
        `;
      } else if (this.mode === 'oxide-hydroxide') {
        const compounds = [
          { el: 'Na', oxide: 'Na₂O', oxType: 'Oxide base mạnh', hydro: 'NaOH', hyType: 'Base mạnh (Kiềm)', phColor: '#1d4ed8' },
          { el: 'Mg', oxide: 'MgO', oxType: 'Oxide base', hydro: 'Mg(OH)₂', hyType: 'Base yếu, ít tan', phColor: '#3b82f6' },
          { el: 'Al', oxide: 'Al₂O₃', oxType: 'Oxide lưỡng tính', hydro: 'Al(OH)₃', hyType: 'Hydroxide lưỡng tính', phColor: '#10b981' },
          { el: 'Si', oxide: 'SiO₂', oxType: 'Oxide acid yếu', hydro: 'H₂SiO₃', hyType: 'Acid rất yếu', phColor: '#eab308' },
          { el: 'P',  oxide: 'P₂O₅', oxType: 'Oxide acid', hydro: 'H₃PO₄', hyType: 'Acid trung bình', phColor: '#f97316' },
          { el: 'S',  oxide: 'SO₃', oxType: 'Oxide acid mạnh', hydro: 'H₂SO₄', hyType: 'Acid mạnh', phColor: '#ef4444' },
          { el: 'Cl', oxide: 'Cl₂O₇', oxType: 'Oxide acid rất mạnh', hydro: 'HClO₄', hyType: 'Acid rất mạnh', phColor: '#b91c1c' }
        ];

        const cards = compounds.map(c => `
          <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-1.5 text-xs text-center shadow-xs">
            <span class="text-base font-extrabold text-slate-800 dark:text-white">${c.el}</span>
            <div class="pt-1 border-t border-slate-100 dark:border-slate-800">
              <div class="font-bold text-teal-600 dark:text-teal-400">${c.oxide}</div>
              <div class="text-[10px] text-slate-500">${c.oxType}</div>
            </div>
            <div class="pt-1 border-t border-slate-100 dark:border-slate-800">
              <div class="font-bold text-rose-600 dark:text-rose-400">${c.hydro}</div>
              <div class="text-[10px] text-slate-500">${c.hyType}</div>
            </div>
            <div class="w-full h-1.5 rounded-full mt-1" style="background-color: ${c.phColor}"></div>
          </div>
        `).join('');

        view.innerHTML = `
          <div class="space-y-4">
            <div class="text-xs font-bold text-slate-700 dark:text-slate-300">
              Quy luật biến đổi tính Acid – Base của Oxide cao nhất và Hydroxide tương ứng (Chu kì 3):
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
              ${cards}
            </div>
            <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span class="font-bold text-blue-600 dark:text-blue-400">← Tính Base tăng dần</span>
              <span class="font-bold text-emerald-600 dark:text-emerald-400">Lưỡng tính (Al)</span>
              <span class="font-bold text-rose-600 dark:text-rose-400">Tính Acid tăng dần →</span>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-pt-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.ptMode;
          this.container.querySelectorAll('[data-pt-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'dark:border-slate-700', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {
      if (this.mode === 'periodic-table') {
        this.container.querySelectorAll('[data-elem]').forEach(b => {
          b.addEventListener('click', () => {
            this.selectedElement = b.dataset.elem;
            this.renderCurrentMode();
          });
        });
      } else if (this.mode === 'atomic-trends') {
        this.container.querySelectorAll('[data-prop]').forEach(b => {
          b.addEventListener('click', () => {
            this.trendProperty = b.dataset.prop;
            this.renderCurrentMode();
          });
        });
      }
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 3. ChemicalBondingSim (Chương 3: Bài 10-14)
  // -------------------------------------------------------------
  class ChemicalBondingSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'covalent-bond'; // 'octet-rule', 'ionic-bond', 'covalent-bond', 'hydrogen-bond'
      this.activeMolecule = options.activeMolecule || 'H2O';
      this.animId = null;
      this.rotX = 0.3;
      this.rotY = -0.4;
      this.dragging = false;

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-bond-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Control Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-bond-mode="octet-rule" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'octet-rule' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Quy tắc Octet
              </button>
              <button type="button" data-bond-mode="ionic-bond" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'ionic-bond' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Liên kết Ion & Tinh thể NaCl
              </button>
              <button type="button" data-bond-mode="covalent-bond" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'covalent-bond' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Cộng hóa trị & Mô hình 3D
              </button>
              <button type="button" data-bond-mode="hydrogen-bond" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'hydrogen-bond' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Liên kết Hydrogen & Van der Waals
              </button>
            </div>
          </div>

          <div data-bond-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-bond-view]');
      if (!view) return;

      if (this.mode === 'octet-rule') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="p-3 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-teal-700 dark:text-teal-300">Quy tắc Octet (Bát tử):</strong> Các nguyên tử có xu hướng nhường, nhận hoặc góp chung electron để đạt được cấu hình electron bền vững với <strong>8 electron ở lớp ngoài cùng</strong> (giống khí hiếm Ne, Ar), hoặc <strong>2 electron</strong> (giống khí hiếm He).
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-2 text-center">
                <span class="text-xs font-bold text-amber-600 uppercase tracking-wide">Nhường electron (Kim loại)</span>
                <div class="font-mono text-base font-extrabold text-slate-800 dark:text-white">Na → Na⁺ + 1e</div>
                <div class="text-[11px] text-slate-500">Na (2,8,1) nhường 1e trở thành cation Na⁺ (2,8) mang cấu hình khí hiếm Ne.</div>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-2 text-center">
                <span class="text-xs font-bold text-cyan-600 uppercase tracking-wide">Nhận electron (Phi kim)</span>
                <div class="font-mono text-base font-extrabold text-slate-800 dark:text-white">Cl + 1e → Cl⁻</div>
                <div class="text-[11px] text-slate-500">Cl (2,8,7) nhận 1e trở thành anion Cl⁻ (2,8,8) mang cấu hình khí hiếm Ar.</div>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-2 text-center">
                <span class="text-xs font-bold text-indigo-600 uppercase tracking-wide">Góp chung electron (Cộng hóa trị)</span>
                <div class="font-mono text-base font-extrabold text-slate-800 dark:text-white">H· + ·Cl: → H : Cl̈:</div>
                <div class="text-[11px] text-slate-500">H đạt cấu hình bền của He (2e), Cl đạt cấu hình bền của Ar (8e).</div>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'ionic-bond') {
        view.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3 text-xs">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Bản chất Liên kết Ion</h5>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                Là liên kết hóa học được hình thành bởi <strong>lực hút tĩnh điện</strong> giữa các ion mang điện tích trái dấu (cation kim loại và anion phi kim).
              </p>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-center font-bold text-teal-700 dark:text-teal-300">
                Na⁺ + Cl⁻ → NaCl
              </div>
              <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                <strong>Đặc điểm tinh thể ion:</strong>
                <ul class="list-disc pl-4 space-y-1 mt-1">
                  <li>Ở trạng thái rắn, các ion sắp xếp tuần hoàn tạo mạng tinh thể lập phương tâm diện.</li>
                  <li>Lực liên kết ion rất mạnh, do đó hợp chất ion có <strong>nhiệt độ nóng chảy và nhiệt độ sôi rất cao</strong>.</li>
                  <li>Dẫn điện khi nóng chảy hoặc hòa tan trong nước, không dẫn điện ở trạng thái rắn.</li>
                </ul>
              </div>
            </div>

            <!-- Canvas 3D Lattice Preview -->
            <div class="bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center relative min-h-[220px]">
              <div class="text-xs font-bold text-slate-300 mb-2">Mô hình Mạng Tinh thể NaCl (Lập phương tâm diện)</div>
              <div class="grid grid-cols-3 gap-3 p-4 bg-slate-900/80 rounded-xl border border-slate-800">
                <div class="w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Na⁺</div>
                <div class="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Cl⁻</div>
                <div class="w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Na⁺</div>
                <div class="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Cl⁻</div>
                <div class="w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Na⁺</div>
                <div class="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Cl⁻</div>
                <div class="w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Na⁺</div>
                <div class="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Cl⁻</div>
                <div class="w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-[10px] flex items-center justify-center shadow">Na⁺</div>
              </div>
              <div class="flex items-center gap-4 text-[11px] text-slate-400 mt-3">
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Cation Na⁺</span>
                <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500"></span> Anion Cl⁻ (Bán kính lớn hơn)</span>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'covalent-bond') {
        const molData = {
          H2O: { name: 'Nước (H₂O)', lewis: 'H — Ö — H', geom: 'Gấp nếp (Góc 104.5°)', type: 'Cộng hóa trị phân cực (2 liên kết đơn σ)' },
          CO2: { name: 'Carbon dioxide (CO₂)', lewis: ':Ö = C = Ö:', geom: 'Đường thẳng (180°)', type: 'Liên kết đôi (2 liên kết σ + 2 liên kết π), phân tử không phân cực' },
          CH4: { name: 'Methane (CH₄)', lewis: 'Tứ diện 4 liên kết C—H', geom: 'Tứ diện đều (109.5°)', type: '4 liên kết đơn σ không phân cực' },
          NH3: { name: 'Ammonia (NH₃)', lewis: 'Chóp tam giác H—N̈—H', geom: 'Hình chóp tam giác (107°)', type: '3 liên kết đơn σ phân cực + 1 cặp e tự do' },
          O2:  { name: 'Khí Oxygen (O₂)', lewis: ':Ö = Ö:', geom: 'Đường thẳng', type: '1 liên kết σ + 1 liên kết π' },
          N2:  { name: 'Khí Nitrogen (N₂)', lewis: ':N ≡ N:', geom: 'Đường thẳng', type: '1 liên kết σ + 2 liên kết π (bền vững cao)' }
        };

        const mol = molData[this.activeMolecule] || molData.H2O;

        view.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Molecule Selector & Details -->
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Phân tử Cộng hóa trị</h5>
              <div class="grid grid-cols-3 gap-1.5">
                ${Object.keys(molData).map(k => `
                  <button type="button" data-pick-mol="${k}" class="py-1.5 px-2 rounded-lg border font-bold text-center transition ${k === this.activeMolecule ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                    ${k}
                  </button>
                `).join('')}
              </div>

              <div class="pt-2 border-t border-slate-200 dark:border-slate-700 space-y-2">
                <div>
                  <span class="text-slate-500">Tên phân tử:</span>
                  <div class="font-bold text-slate-800 dark:text-white text-sm">${mol.name}</div>
                </div>
                <div>
                  <span class="text-slate-500">Công thức Lewis:</span>
                  <div class="font-mono font-extrabold text-teal-600 dark:text-teal-400 text-sm">${mol.lewis}</div>
                </div>
                <div>
                  <span class="text-slate-500">Hình học phân tử (VSEPR):</span>
                  <div class="font-bold text-slate-700 dark:text-slate-300">${mol.geom}</div>
                </div>
                <div>
                  <span class="text-slate-500">Loại liên kết:</span>
                  <div class="text-[11px] text-slate-600 dark:text-slate-400">${mol.type}</div>
                </div>
              </div>
            </div>

            <!-- 3D Projection Canvas -->
            <div class="md:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between relative min-h-[260px]">
              <div class="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Mô hình 3D (Xoay tương tác 360°)</span>
                <span class="text-[11px] text-teal-400 font-mono">${this.activeMolecule}</span>
              </div>
              <canvas data-covalent-canvas class="w-full h-[200px] block cursor-grab"></canvas>
              <div class="text-[11px] text-slate-500 text-center">
                Dùng chuột kéo xoay không gian 3 chiều • Xen phủ trục tạo liên kết σ, xen phủ bên tạo liên kết π
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'hydrogen-bond') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/40 space-y-2">
                <h5 class="font-extrabold text-teal-800 dark:text-teal-300 text-sm">1. Liên kết Hydrogen (H-bond)</h5>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Là tương tác tĩnh điện giữa nguyên tử H linh động (mang điện tích δ⁺ do liên kết với nguyên tử có độ âm điện lớn: F, O, N) với cặp electron tự do của nguyên tử F, O, N khác:
                </p>
                <div class="font-mono font-bold text-center text-teal-700 dark:text-teal-300 py-1 bg-white/70 dark:bg-slate-900/70 rounded">
                  ··· H — Ö — H ··· Ö(H) — H ···
                </div>
                <div class="text-[11px] text-slate-600 dark:text-slate-400">
                  <strong>Ý nghĩa:</strong> Làm nhiệt độ sôi và nhiệt độ nóng chảy của H₂O (100°C) cao bất thường so với H₂S (-60°C).
                </div>
              </div>

              <div class="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 space-y-2">
                <h5 class="font-extrabold text-indigo-800 dark:text-indigo-300 text-sm">2. Tương tác Van der Waals</h5>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Là tương tác tĩnh điện yếu giữa các lưỡng cực tạm thời hoặc cảm ứng giữa các phân tử không phân cực (khí hiếm, halogen):
                </p>
                <div class="text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                  <div>• Tăng khi khối lượng phân tử và kích thước đám mây electron tăng.</div>
                  <div>• Giải thích xu hướng nhiệt độ sôi tăng dần: F₂ (-188°C) &lt; Cl₂ (-34°C) &lt; Br₂ (59°C) &lt; I₂ (184°C).</div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-bond-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.bondMode;
          this.container.querySelectorAll('[data-bond-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {
      if (this.mode === 'covalent-bond') {
        this.container.querySelectorAll('[data-pick-mol]').forEach(b => {
          b.addEventListener('click', () => {
            this.activeMolecule = b.dataset.pickMol;
            this.renderCurrentMode();
          });
        });
        this.setup3DCanvas();
      }
    }

    setup3DCanvas() {
      const canvas = this.container.querySelector('[data-covalent-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 400;
      canvas.height = rect.height || 200;

      let lastX = 0, lastY = 0;
      canvas.addEventListener('mousedown', (e) => {
        this.dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mousemove', (e) => {
        if (!this.dragging) return;
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        this.rotY += dx * 0.01;
        this.rotX += dy * 0.01;
        lastX = e.clientX;
        lastY = e.clientY;
        this.draw3DMolecule();
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mouseup', () => { this.dragging = false; });

      this.draw3DMolecule();
    }

    draw3DMolecule() {
      const canvas = this.container.querySelector('[data-covalent-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Define 3D atom coords for activeMolecule
      let atoms = [];
      if (this.activeMolecule === 'H2O') {
        atoms = [
          { sym: 'O', x: 0, y: -0.2, z: 0, r: 18, color: '#ef4444' },
          { sym: 'H', x: -0.7, y: 0.4, z: 0, r: 10, color: '#f8fafc' },
          { sym: 'H', x: 0.7, y: 0.4, z: 0, r: 10, color: '#f8fafc' }
        ];
      } else if (this.activeMolecule === 'CH4') {
        atoms = [
          { sym: 'C', x: 0, y: 0, z: 0, r: 16, color: '#475569' },
          { sym: 'H', x: 0, y: -0.8, z: 0, r: 9, color: '#f8fafc' },
          { sym: 'H', x: 0.75, y: 0.3, z: -0.4, r: 9, color: '#f8fafc' },
          { sym: 'H', x: -0.75, y: 0.3, z: -0.4, r: 9, color: '#f8fafc' },
          { sym: 'H', x: 0, y: 0.3, z: 0.8, r: 9, color: '#f8fafc' }
        ];
      } else if (this.activeMolecule === 'CO2') {
        atoms = [
          { sym: 'C', x: 0, y: 0, z: 0, r: 16, color: '#475569' },
          { sym: 'O', x: -0.85, y: 0, z: 0, r: 16, color: '#ef4444' },
          { sym: 'O', x: 0.85, y: 0, z: 0, r: 16, color: '#ef4444' }
        ];
      } else {
        // H2, O2, N2
        atoms = [
          { sym: this.activeMolecule[0], x: -0.5, y: 0, z: 0, r: 14, color: '#3b82f6' },
          { sym: this.activeMolecule[0], x: 0.5, y: 0, z: 0, r: 14, color: '#3b82f6' }
        ];
      }

      // Rotate and project
      const scale = Math.min(w, h) * 0.42;
      const proj = atoms.map(a => {
        // Rotate Y
        let x1 = a.x * Math.cos(this.rotY) + a.z * Math.sin(this.rotY);
        let z1 = -a.x * Math.sin(this.rotY) + a.z * Math.cos(this.rotY);
        // Rotate X
        let y2 = a.y * Math.cos(this.rotX) - z1 * Math.sin(this.rotX);
        let z2 = a.y * Math.sin(this.rotX) + z1 * Math.cos(this.rotX);
        return {
          sym: a.sym,
          px: w * 0.5 + x1 * scale,
          py: h * 0.5 + y2 * scale,
          pz: z2,
          r: a.r,
          color: a.color
        };
      });

      // Draw Bonds from central atom (proj[0])
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 4;
      for (let i = 1; i < proj.length; i++) {
        ctx.beginPath();
        ctx.moveTo(proj[0].px, proj[0].py);
        ctx.lineTo(proj[i].px, proj[i].py);
        ctx.stroke();
      }

      // Sort by Z for painter's algorithm
      proj.sort((a, b) => a.pz - b.pz);

      // Draw atoms
      for (let p of proj) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = p.color === '#f8fafc' ? '#0f172a' : '#ffffff';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.sym, p.px, p.py);
      }
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 4. RedoxReactionSim (Chương 4: Bài 15-16)
  // -------------------------------------------------------------
  class RedoxReactionSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'redox-process'; // 'redox-process', 'electron-balance'
      this.rxnKey = options.rxnKey || 'Zn_Cu';

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-redox-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Control Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-redox-mode="redox-process" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'redox-process' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Quá trình Oxi hóa – Khử
              </button>
              <button type="button" data-redox-mode="electron-balance" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'electron-balance' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Cân bằng phương trình (Thăng bằng e)
              </button>
            </div>
          </div>

          <div data-redox-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-redox-view]');
      if (!view) return;

      if (this.mode === 'redox-process') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <!-- Mnemonic Banner -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center">
                <span class="font-extrabold text-amber-700 dark:text-amber-300 text-sm">CHẤT KHỬ (Chất bị oxi hóa)</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1"><strong>Nhường electron</strong> • Số oxi hóa <strong>TĂNG</strong> sau phản ứng.</p>
                <div class="font-mono font-bold text-amber-600 mt-1">Zn⁰ → Zn⁺² + 2e</div>
              </div>
              <div class="p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-center">
                <span class="font-extrabold text-cyan-700 dark:text-cyan-300 text-sm">CHẤT OXI HÓA (Chất bị khử)</span>
                <p class="text-slate-600 dark:text-slate-400 mt-1"><strong>Nhận electron</strong> • Số oxi hóa <strong>GIẢM</strong> sau phản ứng.</p>
                <div class="font-mono font-bold text-cyan-600 mt-1">Cu⁺² + 2e → Cu⁰</div>
              </div>
            </div>

            <!-- Electron Transfer Simulation View -->
            <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 flex flex-col items-center justify-center space-y-4">
              <div class="text-sm font-bold text-amber-300">Dòng chuyển dịch Electron giữa các nguyên tử</div>
              <div class="flex items-center gap-6 sm:gap-12">
                <div class="flex flex-col items-center gap-1">
                  <div class="w-14 h-14 rounded-full bg-slate-700 border-2 border-amber-400 flex items-center justify-center font-bold text-base text-amber-300 shadow">Zn</div>
                  <span class="text-[10px] text-amber-400 font-bold">Chất khử (SOH: 0 → +2)</span>
                </div>

                <div class="flex flex-col items-center gap-1">
                  <span class="font-mono text-xs font-bold text-teal-400">2e⁻ ➔ ➔ ➔</span>
                  <div class="w-24 sm:w-36 h-1 bg-gradient-to-r from-amber-500 via-teal-400 to-cyan-500 rounded"></div>
                  <span class="text-[10px] text-slate-400">Chuyển dịch trực tiếp</span>
                </div>

                <div class="flex flex-col items-center gap-1">
                  <div class="w-14 h-14 rounded-full bg-blue-900 border-2 border-cyan-400 flex items-center justify-center font-bold text-base text-cyan-300 shadow">Cu²⁺</div>
                  <span class="text-[10px] text-cyan-400 font-bold">Chất oxi hóa (SOH: +2 → 0)</span>
                </div>
              </div>
              <div class="font-mono text-xs text-center text-teal-300 font-bold">
                Phương trình ion rút gọn: Zn + Cu²⁺ → Zn²⁺ + Cu↓
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'electron-balance') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 class="font-bold text-slate-800 dark:text-slate-200 mb-1">4 Bước Cân Bằng Phản Ứng Oxi Hóa – Khử:</h5>
              <ol class="list-decimal pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                <li>Xác định số oxi hóa của các nguyên tố thay đổi để tìm chất khử và chất oxi hóa.</li>
                <li>Viết quá trình oxi hóa và quá trình khử, cân bằng mỗi quá trình.</li>
                <li>Tìm hệ số thích hợp cho chất khử và chất oxi hóa sao cho: <strong>Tổng electron cho = Tổng electron nhận</strong>.</li>
                <li>Đặt hệ số vào phương trình hóa học và hoàn thành cân bằng (Kim loại → Phi kim → H → O).</li>
              </ol>
            </div>

            <!-- Example Walkthrough Box -->
            <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3">
              <div class="text-sm font-extrabold text-teal-700 dark:text-teal-300 font-mono">
                Thí dụ: Cu + HNO₃ (đặc) → Cu(NO₃)₂ + NO₂↑ + H₂O
              </div>
              <div class="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/70 space-y-1.5 font-mono text-[11px]">
                <div class="flex items-center gap-2">
                  <span class="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-[9px] font-bold">1</span>
                  <span>1 × | Cu⁰ → Cu⁺² + 2e  (quá trình oxi hóa)</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-4 h-4 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[9px] font-bold">2</span>
                  <span>2 × | N⁺⁵ + 1e → N⁺⁴  (quá trình khử)</span>
                </div>
              </div>
              <div class="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-xs text-center">
                Phương trình hoàn chỉnh: Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O
              </div>
            </div>
          </div>
        `;
      }
    }

    bindEvents() {
      this.container.querySelectorAll('[data-redox-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.redoxMode;
          this.container.querySelectorAll('[data-redox-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 5. ChemicalEnergySim (Chương 5: Bài 17-18)
  // -------------------------------------------------------------
  class ChemicalEnergySim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'enthalpy-diagram'; // 'enthalpy-diagram', 'enthalpy-calc'
      this.rxnType = options.rxnType || 'exo'; // 'exo' (tỏa nhiệt), 'endo' (thu nhiệt)
      this.actEnergy = options.actEnergy || 60; // kJ/mol

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-energy-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Control Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-energy-mode="enthalpy-diagram" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'enthalpy-diagram' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Biểu đồ Năng lượng & Biến thiên Enthalpy
              </button>
              <button type="button" data-energy-mode="enthalpy-calc" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'enthalpy-calc' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Tính toán ΔrH°₂₉₈ (Nhiệt tạo thành & Năng lượng liên kết)
              </button>
            </div>
          </div>

          <div data-energy-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-energy-view]');
      if (!view) return;

      if (this.mode === 'enthalpy-diagram') {
        const isExo = this.rxnType === 'exo';
        const deltaH = isExo ? -285.8 : +178.5;

        view.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Loại Phản Ứng Nhiệt</h5>
              <div class="flex gap-2">
                <button type="button" data-pick-rxn="exo" class="flex-1 py-1.5 rounded-lg border font-bold text-center transition ${isExo ? 'bg-rose-600 text-white border-rose-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                  Tỏa nhiệt (ΔH &lt; 0)
                </button>
                <button type="button" data-pick-rxn="endo" class="flex-1 py-1.5 rounded-lg border font-bold text-center transition ${!isExo ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                  Thu nhiệt (ΔH &gt; 0)
                </button>
              </div>

              <div class="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <div class="flex justify-between">
                  <span class="text-slate-500">Biến thiên Enthalpy ΔrH°₂₉₈:</span>
                  <span class="font-mono font-extrabold ${isExo ? 'text-rose-600' : 'text-blue-600'}">${deltaH} kJ/mol</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">Năng lượng hoạt hóa Ea:</span>
                  <span class="font-mono font-bold">${this.actEnergy} kJ/mol</span>
                </div>
              </div>

              <div class="p-2.5 rounded-lg ${isExo ? 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200 border border-rose-200' : 'bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200 border border-blue-200'} text-[11px] leading-relaxed">
                ${isExo
                  ? '<strong>Phản ứng tỏa nhiệt:</strong> Hệ giải phóng nhiệt lượng ra môi trường làm nhiệt độ môi trường tăng lên (ví dụ: phản ứng đốt cháy nhiên liệu).'
                  : '<strong>Phản ứng thu nhiệt:</strong> Hệ hấp thụ nhiệt lượng từ môi trường làm nhiệt độ môi trường giảm xuống (ví dụ: nhiệt phân đá vôi CaCO₃).'
                }
              </div>
            </div>

            <!-- Energy Profile SVG Chart -->
            <div class="md:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div class="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Biểu đồ Tiến trình Năng lượng Phản ứng</span>
                <span class="font-mono text-teal-400 font-bold">${isExo ? 'Tỏa nhiệt (Exothermic)' : 'Thu nhiệt (Endothermic)'}</span>
              </div>

              <div class="relative w-full h-[180px] flex items-center justify-center">
                <svg viewBox="0 0 400 160" class="w-full h-full">
                  <!-- Axes -->
                  <line x1="40" y1="140" x2="380" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                  <line x1="40" y1="140" x2="40" y2="20" stroke="#64748b" stroke-width="2"/>
                  <!-- Curve -->
                  ${isExo
                    ? '<path d="M 50 80 L 120 80 Q 200 10 240 70 L 360 120" fill="none" stroke="#f43f5e" stroke-width="3"/>'
                    : '<path d="M 50 120 L 120 120 Q 200 20 240 50 L 360 60" fill="none" stroke="#3b82f6" stroke-width="3"/>'
                  }
                  <!-- Labels -->
                  <text x="60" y="${isExo ? 72 : 112}" fill="#94a3b8" font-size="10" font-weight="bold">Chất đầu</text>
                  <text x="300" y="${isExo ? 112 : 52}" fill="#94a3b8" font-size="10" font-weight="bold">Sản phẩm</text>
                  <text x="200" y="25" fill="#facc15" font-size="10" font-weight="bold">Trạng thái chuyển tiếp (Ea)</text>
                  <text x="45" y="20" fill="#94a3b8" font-size="10">Enthalpy (H)</text>
                  <text x="310" y="152" fill="#94a3b8" font-size="9">Tiến trình phản ứng</text>
                </svg>
              </div>

              <div class="text-[11px] text-slate-400 text-center">
                ΔrH = H(sản phẩm) - H(chất đầu) ${isExo ? '< 0 (Tỏa nhiệt)' : '> 0 (Thu nhiệt)'}
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'enthalpy-calc') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Method 1 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 text-sm flex items-center gap-1.5">
                  <span class="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">1</span>
                  <span>Cách 1: Từ Nhiệt Tạo Thành Chuẩn (Δ<sub>f</sub>H°₂₉₈)</span>
                </h5>
                <div class="font-serif font-bold text-sm sm:text-base p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200 flex items-center justify-center gap-1.5 flex-wrap shadow-xs">
                  <span class="italic">Δ</span><sub>r</sub><em>H</em>°<sub>298</sub>
                  <span>=</span>
                  <span>∑ <span class="italic">Δ</span><sub>f</sub><em>H</em>°<sub>298</sub>(sp)</span>
                  <span>−</span>
                  <span>∑ <span class="italic">Δ</span><sub>f</sub><em>H</em>°<sub>298</sub>(cđ)</span>
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  <strong>Lưu ý:</strong> Nhiệt tạo thành chuẩn của các đơn chất ở trạng thái bền vững nhất bằng 0 (ví dụ: O₂(g), H₂(g), C(graphite) có Δ<sub>f</sub>H°₂₉₈ = 0 kJ/mol).
                </p>
                <div class="p-2.5 rounded-lg bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900/50 text-[11px] text-teal-900 dark:text-teal-200 space-y-1">
                  <div class="font-bold">Ví dụ thực tế: Đốt cháy khí methane CH₄(g)</div>
                  <div class="font-mono text-[10px]">CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)</div>
                  <div class="font-mono text-[10px] text-teal-700 dark:text-teal-300 font-semibold">
                    Δ<sub>r</sub>H°₂₉₈ = [-393.5 + 2(-285.8)] - [-74.8 + 2(0)] = -890.3 kJ (Tỏa nhiệt)
                  </div>
                </div>
              </div>

              <!-- Method 2 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-sm flex items-center gap-1.5">
                  <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-xs">2</span>
                  <span>Cách 2: Từ Năng Lượng Liên Kết (E<sub>b</sub>)</span>
                </h5>
                <div class="font-serif font-bold text-sm sm:text-base p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200 flex items-center justify-center gap-1.5 flex-wrap shadow-xs">
                  <span class="italic">Δ</span><sub>r</sub><em>H</em>°<sub>298</sub>
                  <span>=</span>
                  <span>∑ <em>E</em><sub>b</sub>(cđ)</span>
                  <span>−</span>
                  <span>∑ <em>E</em><sub>b</sub>(sp)</span>
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  <strong>Quy tắc:</strong> Năng lượng phá vỡ liên kết chất đầu (thu vào) trừ năng lượng tạo thành liên kết sản phẩm (tỏa ra). Chỉ áp dụng cho phản ứng ở thể khí (g).
                </p>
                <div class="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50 text-[11px] text-indigo-900 dark:text-indigo-200 space-y-1">
                  <div class="font-bold">Ví dụ thực tế: Phản ứng clo hóa methane</div>
                  <div class="font-mono text-[10px]">CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g)</div>
                  <div class="font-mono text-[10px] text-indigo-700 dark:text-indigo-300 font-semibold">
                    Δ<sub>r</sub>H°₂₉₈ = [4(414) + 243] - [3(414) + 339 + 431] = -113 kJ (Tỏa nhiệt)
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-energy-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.energyMode;
          this.container.querySelectorAll('[data-energy-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {
      this.container.querySelectorAll('[data-pick-rxn]').forEach(b => {
        b.addEventListener('click', () => {
          this.rxnType = b.dataset.pickRxn;
          this.renderCurrentMode();
        });
      });
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 6. ReactionRateSim (Chương 6: Bài 19-20)
  // -------------------------------------------------------------
  class ReactionRateSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.params = {
        tempC: options.tempC !== undefined ? options.tempC : 25,
        concM: options.concM !== undefined ? options.concM : 1.0,
        surface: options.surface || 'powder', // 'powder' or 'chunk'
        hasCatalyst: options.hasCatalyst || false
      };

      this.running = true;
      this.animId = null;
      this.particles = [];
      this.history = [];
      this.progress = 0;

      this.initDOM();
      this.bindEvents();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-kinetics-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-teal-500"></span>
              <h4 class="font-extrabold text-slate-800 dark:text-white text-sm">Thực nghiệm 5 Yếu tố ảnh hưởng đến Tốc độ phản ứng</h4>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" data-action="toggle-run" class="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center gap-1 cursor-pointer">
                <span>${this.running ? '⏸ Tạm dừng' : '▶ Tiếp tục'}</span>
              </button>
              <button type="button" data-action="reset" class="px-2.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold transition cursor-pointer">
                ↺ Đặt lại
              </button>
            </div>
          </div>

          <div class="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Canvas Visualizer -->
            <div class="lg:col-span-2 space-y-2">
              <div class="relative w-full h-[260px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <canvas data-kinetics-canvas class="w-full h-full block"></canvas>
                <div class="absolute bottom-2 left-3 text-[11px] font-mono text-teal-300 bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs">
                  Tốc độ tức thời: <span data-rate-val class="font-bold text-white">0.00</span> mol/(L·s)
                </div>
              </div>

              <!-- Live Curves / Metrics -->
              <div class="grid grid-cols-3 gap-2 text-center text-xs">
                <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div class="text-[10px] text-slate-500">Nồng độ [A] còn lại</div>
                  <div data-conc-val class="font-mono font-bold text-slate-800 dark:text-white text-sm">1.00 M</div>
                </div>
                <div class="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
                  <div class="text-[10px] text-teal-600 dark:text-teal-400">Sản phẩm sinh ra</div>
                  <div data-prod-val class="font-mono font-bold text-teal-700 dark:text-teal-300 text-sm">0.00 M</div>
                </div>
                <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <div class="text-[10px] text-amber-600 dark:text-amber-400">Va chạm hiệu quả</div>
                  <div data-eff-val class="font-mono font-bold text-amber-700 dark:text-amber-300 text-sm">0</div>
                </div>
              </div>
            </div>

            <!-- Parameters Panel -->
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Điều khiển yếu tố:</h5>

              <!-- 1. Temp -->
              <div>
                <div class="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                  <span>1. Nhiệt độ (T):</span>
                  <span data-temp-val class="font-mono font-bold text-teal-600">${this.params.tempC} °C</span>
                </div>
                <input type="range" data-kin-temp min="10" max="80" step="5" value="${this.params.tempC}" class="w-full accent-teal-600 cursor-pointer">
              </div>

              <!-- 2. Concentration -->
              <div>
                <div class="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                  <span>2. Nồng độ chất tan (C):</span>
                  <span data-conc-lbl class="font-mono font-bold text-teal-600">${this.params.concM} M</span>
                </div>
                <input type="range" data-kin-conc min="0.2" max="3.0" step="0.2" value="${this.params.concM}" class="w-full accent-teal-600 cursor-pointer">
              </div>

              <!-- 3. Surface Area -->
              <div>
                <label class="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">3. Diện tích bề mặt chất rắn:</label>
                <div class="grid grid-cols-2 gap-1.5">
                  <button type="button" data-kin-surface="powder" class="py-1 rounded border font-bold text-center ${this.params.surface === 'powder' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Dạng bột (Lớn)</button>
                  <button type="button" data-kin-surface="chunk" class="py-1 rounded border font-bold text-center ${this.params.surface === 'chunk' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Hạt to (Nhỏ)</button>
                </div>
              </div>

              <!-- 4. Catalyst -->
              <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <span class="font-bold text-slate-700 dark:text-slate-300 block">4. Chất xúc tác (Catalyst):</span>
                  <span class="text-[10px] text-slate-500">Giảm năng lượng hoạt hóa Ea</span>
                </div>
                <input type="checkbox" data-kin-cat ${this.params.hasCatalyst ? 'checked' : ''} class="w-4 h-4 accent-teal-600 cursor-pointer">
              </div>
            </div>
          </div>
        </div>
      `;

      this.setupCanvas();
    }

    setupCanvas() {
      const canvas = this.container.querySelector('[data-kinetics-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 500;
      canvas.height = rect.height || 260;

      // Spawn initial particles
      this.particles = [];
      const num = Math.round(this.params.concM * 30);
      for (let i = 0; i < num; i++) {
        this.particles.push({
          x: Math.random() * (canvas.width - 20) + 10,
          y: Math.random() * (canvas.height - 20) + 10,
          vx: (Math.random() - 0.5) * (100 + this.params.tempC * 3),
          vy: (Math.random() - 0.5) * (100 + this.params.tempC * 3),
          type: Math.random() > 0.5 ? 'A' : 'B'
        });
      }
    }

    bindEvents() {
      const tempSlider = this.container.querySelector('[data-kin-temp]');
      if (tempSlider) {
        tempSlider.addEventListener('input', (e) => {
          this.params.tempC = parseFloat(e.target.value);
          const lbl = this.container.querySelector('[data-temp-val]');
          if (lbl) lbl.textContent = `${this.params.tempC} °C`;
          this.setupCanvas();
        });
      }

      const concSlider = this.container.querySelector('[data-kin-conc]');
      if (concSlider) {
        concSlider.addEventListener('input', (e) => {
          this.params.concM = parseFloat(e.target.value);
          const lbl = this.container.querySelector('[data-conc-lbl]');
          if (lbl) lbl.textContent = `${this.params.concM} M`;
          this.setupCanvas();
        });
      }

      this.container.querySelectorAll('[data-kin-surface]').forEach(b => {
        b.addEventListener('click', () => {
          this.params.surface = b.dataset.kinSurface;
          this.initDOM();
          this.bindEvents();
        });
      });

      const catCheck = this.container.querySelector('[data-kin-cat]');
      if (catCheck) {
        catCheck.addEventListener('change', (e) => {
          this.params.hasCatalyst = e.target.checked;
        });
      }

      const runBtn = this.container.querySelector('[data-action="toggle-run"]');
      if (runBtn) {
        runBtn.addEventListener('click', () => {
          this.running = !this.running;
          runBtn.innerHTML = `<span>${this.running ? '⏸ Tạm dừng' : '▶ Tiếp tục'}</span>`;
        });
      }

      const resetBtn = this.container.querySelector('[data-action="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.progress = 0;
          this.setupCanvas();
        });
      }
    }

    start() {
      let lastTime = performance.now();
      const loop = (now) => {
        const dt = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;

        if (this.running) {
          this.update(dt);
          this.draw();
        }

        this.animId = rAF(loop);
      };
      this.animId = rAF(loop);
    }

    update(dt) {
      const canvas = this.container.querySelector('[data-kinetics-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const w = canvas.width;
      const h = canvas.height;

      // Rate formula based on temp, conc, surface, catalyst
      const kTemp = Math.pow(2.5, (this.params.tempC - 25) / 10);
      const catFactor = this.params.hasCatalyst ? 3.0 : 1.0;
      const surfFactor = this.params.surface === 'powder' ? 1.8 : 0.8;
      const currentRate = 0.08 * this.params.concM * kTemp * catFactor * surfFactor;

      this.progress = Math.min(1.0, this.progress + currentRate * dt * 0.1);
      const currentConc = Math.max(0, this.params.concM * (1 - this.progress));
      const productConc = this.params.concM * this.progress;

      // Move particles
      for (let p of this.particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < 5 || p.x > w - 5) p.vx *= -1;
        if (p.y < 5 || p.y > h - 5) p.vy *= -1;
      }

      // Update labels
      const rateEl = this.container.querySelector('[data-rate-val]');
      const concEl = this.container.querySelector('[data-conc-val]');
      const prodEl = this.container.querySelector('[data-prod-val]');
      const effEl = this.container.querySelector('[data-eff-val]');
      if (rateEl) rateEl.textContent = formatNum(currentRate * (1 - this.progress), 3);
      if (concEl) concEl.textContent = `${formatNum(currentConc, 2)} M`;
      if (prodEl) prodEl.textContent = `${formatNum(productConc, 2)} M`;
      if (effEl) effEl.textContent = Math.round(this.progress * 150);
    }

    draw() {
      const canvas = this.container.querySelector('[data-kinetics-canvas]');
      if (!canvas || typeof canvas.getContext !== "function") return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#050b14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      for (let p of this.particles) {
        ctx.fillStyle = p.type === 'A' ? '#38bdf8' : '#f43f5e';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    destroy() {
      if (this.animId) cAF(this.animId);
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 7. HalogenChemistrySim (Chương 7: Bài 21-23)
  // -------------------------------------------------------------
  class HalogenChemistrySim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'halide-precipitation'; // 'halogen-properties', 'halide-precipitation'
      this.selectedHalide = options.selectedHalide || 'all';

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-halogen-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Control Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-hal-mode="halogen-properties" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'halogen-properties' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Tính chất Nhóm Halogen & Phản ứng thế
              </button>
              <button type="button" data-hal-mode="halide-precipitation" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'halide-precipitation' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Nhận biết ion Halide bằng dung dịch AgNO₃
              </button>
            </div>
          </div>

          <div data-halogen-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-halogen-view]');
      if (!view) return;

      if (this.mode === 'halogen-properties') {
        const halData = [
          { sym: 'F₂', name: 'Fluorine', color: 'Khí màu lục rất nhạt', ox: 'Oxi hóa cực mạnh (mạnh nhất)', rxn: 'Oxi hóa được nước ngay nhiệt độ thường: 2F₂ + 2H₂O → 4HF + O₂↑' },
          { sym: 'Cl₂', name: 'Chlorine', color: 'Khí màu vàng lục, mùi hắc', ox: 'Tính oxi hóa rất mạnh', rxn: 'Đẩy được Br⁻, I⁻ ra khỏi dung dịch muối: Cl₂ + 2NaBr → 2NaCl + Br₂' },
          { sym: 'Br₂', name: 'Bromine', color: 'Chất lỏng màu nâu đỏ, dễ bay hơi', ox: 'Tính oxi hóa mạnh', rxn: 'Đẩy được I⁻ ra khỏi dung dịch muối: Br₂ + 2NaI → 2NaBr + I₂' },
          { sym: 'I₂', name: 'Iodine', color: 'Chất rắn tím đen, thăng hoa', ox: 'Tính oxi hóa yếu hơn', rxn: 'Tác dụng chậm với H₂, phản ứng thuận nghịch: H₂ + I₂ ⇌ 2HI' }
        ];

        const cards = halData.map(h => `
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-2 text-xs">
            <div class="flex items-center justify-between">
              <span class="text-base font-extrabold text-teal-700 dark:text-teal-300">${h.sym} (${h.name})</span>
              <span class="text-[10px] text-slate-500 font-bold">${h.color}</span>
            </div>
            <div class="text-slate-700 dark:text-slate-300 font-semibold">• Khả năng phản ứng: ${h.ox}</div>
            <div class="font-mono text-[11px] p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-teal-600 dark:text-teal-400">
              ${h.rxn}
            </div>
          </div>
        `).join('');

        view.innerHTML = `
          <div class="space-y-4">
            <div class="p-3 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span class="font-bold text-teal-700 dark:text-teal-300">Tính oxi hóa giảm dần: F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂</span>
              <span class="font-bold text-indigo-700 dark:text-indigo-300">Tính khử của ion halide tăng dần: F⁻ &lt; Cl⁻ &lt; Br⁻ &lt; I⁻</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${cards}
            </div>
          </div>
        `;
      } else if (this.mode === 'halide-precipitation') {
        const tubes = [
          { ion: 'F⁻ (NaF)', result: 'Không có hiện tượng kết tủa', color: '#94a3b8', bg: 'bg-slate-100 dark:bg-slate-800', note: 'AgF tan hoàn toàn trong nước' },
          { ion: 'Cl⁻ (NaCl)', result: 'Kết tủa TRẮNG (AgCl↓)', color: '#f8fafc', bg: 'bg-slate-300 dark:bg-slate-700', note: 'AgCl ↓ trắng, hóa đen ngoài ánh sáng' },
          { ion: 'Br⁻ (NaBr)', result: 'Kết tủa VÀNG NHẠT (AgBr↓)', color: '#fef08a', bg: 'bg-amber-100 dark:bg-amber-950/70', note: 'AgBr ↓ vàng nhạt, nhạy sáng (chế phim)' },
          { ion: 'I⁻ (NaI)', result: 'Kết tủa VÀNG ĐẬM (AgI↓)', color: '#facc15', bg: 'bg-yellow-200 dark:bg-yellow-950/70', note: 'AgI ↓ vàng đậm, không tan trong axit' }
        ];

        const tubesHtml = tubes.map(t => `
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-3 text-center flex flex-col justify-between shadow-xs">
            <div class="font-extrabold text-sm text-slate-800 dark:text-slate-200 font-mono">${t.ion}</div>
            
            <!-- Test Tube Graphic -->
            <div class="w-16 h-36 mx-auto rounded-b-2xl border-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-950/80 relative overflow-hidden flex flex-col justify-end p-1">
              <div class="w-full h-16 rounded-b-xl ${t.bg} border-t-2 border-slate-400 flex items-center justify-center font-bold text-[10px] text-slate-800 dark:text-slate-200">
                ${t.ion.slice(0, 2)}
              </div>
            </div>

            <div>
              <div class="font-bold text-xs text-slate-800 dark:text-slate-200">${t.result}</div>
              <div class="text-[10px] text-slate-500 mt-0.5">${t.note}</div>
            </div>
          </div>
        `).join('');

        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Thí nghiệm nhỏ dung dịch AgNO₃ vào 4 ống nghiệm chứa muối Halide:</span>
              <span class="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Thuốc thử: AgNO₃ (aq)</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${tubesHtml}
            </div>
          </div>
        `;
      }
    }

    bindEvents() {
      this.container.querySelectorAll('[data-hal-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.halMode;
          this.container.querySelectorAll('[data-hal-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  
  

  // ==================== HÓA HỌC 11 ENGINES ====================
  class ChemicalEquilibriumSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'equilibrium-shift'; // 'equilibrium-shift', 'acid-base-titration'
      this.animId = null;
      this.running = true;

      // Equilibrium shift params: 2NO2 (brown) <=> N2O4 (colorless), DeltaH = -58 kJ/mol (exothermic)
      this.eqParams = {
        tempC: options.tempC !== undefined ? options.tempC : 25,
        pressureBar: options.pressureBar !== undefined ? options.pressureBar : 1.0,
        cNO2_init: options.cNO2 || 0.10, // M
        cN2O4_init: options.cN2O4 || 0.05 // M
      };

      // Titration params (0.1M HCl with 0.1M NaOH, 20mL HCl)
      this.titrParams = {
        vAcid: 20.0, // mL HCl
        cAcid: 0.10, // M HCl
        cBase: 0.10, // M NaOH
        vBaseAdded: 0.0, // mL NaOH added
        indicator: 'phenolphthalein' // 'phenolphthalein', 'litmus', 'methyl-orange'
      };

      this.initDOM();
      this.bindEvents();
      this.start();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-eq-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-eq-mode="equilibrium-shift" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'equilibrium-shift' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Chuyển Dịch Cân Bằng (Le Chatelier & Kc)
              </button>
              <button type="button" data-eq-mode="acid-base-titration" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'acid-base-titration' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Sự Điện Li, pH & Chuẩn Độ Acid–Base
              </button>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" data-action="toggle-run" class="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center gap-1 cursor-pointer">
                <span>${this.running ? '⏸ Tạm dừng' : '▶ Tiếp tục'}</span>
              </button>
              <button type="button" data-action="reset" class="px-2.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold transition cursor-pointer">
                ↺ Đặt lại
              </button>
            </div>
          </div>

          <div data-eq-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-eq-view]');
      if (!view) return;

      if (this.mode === 'equilibrium-shift') {
        // Calculate equilibrium state: 2NO2 (g, brown) <=> N2O4 (g, colorless), DeltaH < 0
        // Kc(298K) = 170. As T increases, Kc decreases (shifts left towards NO2).
        const tempK = this.eqParams.tempC + 273.15;
        const R = 8.314;
        // van 't Hoff equation: ln(K2/K1) = -DeltaH/R * (1/T2 - 1/T1)
        const deltaH = -57200; // J/mol
        const Kc = 170 * Math.exp((-deltaH / R) * (1 / tempK - 1 / 298.15));

        // Let total N = 2*cN2O4_init + cNO2_init = C0
        const C0 = 2 * this.eqParams.cN2O4_init + this.eqParams.cNO2_init;
        // Solving Kc = [N2O4] / [NO2]^2 => Kc*x^2 + 0.5*x - 0.5*C0 = 0 (where x = [NO2])
        // 2*Kc * x^2 + x - C0 = 0
        const a = 2 * Kc * this.eqParams.pressureBar; // pressure effect
        const b = 1;
        const c = -C0;
        const xNO2 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        const xN2O4 = Math.max(0, (C0 - xNO2) / 2);

        // Brown color intensity based on [NO2]
        const brownAlpha = clamp(xNO2 * 10, 0.05, 0.95);

        view.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Piston Gas Cylinder Canvas -->
            <div class="lg:col-span-2 space-y-2">
              <div class="relative w-full h-[260px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                <!-- Gas Chamber -->
                <div class="relative w-48 h-56 rounded-b-2xl border-4 border-slate-400 bg-slate-900 overflow-hidden flex flex-col justify-end shadow-2xl">
                  <!-- Piston Head -->
                  <div class="absolute top-0 left-0 w-full bg-slate-500 border-b-4 border-slate-700 flex items-center justify-center transition-all duration-300" style="height: ${Math.round(20 + (this.eqParams.pressureBar - 0.5) * 25)}px">
                    <div class="w-4 h-12 bg-slate-300 -top-12 absolute rounded-t"></div>
                  </div>
                  <!-- Gas Fluid Layer -->
                  <div class="w-full h-full transition-all duration-500 flex items-center justify-center p-3 text-center" style="background-color: rgba(180, 83, 9, ${brownAlpha})">
                    <span class="text-xs font-mono font-black text-amber-200 drop-shadow-md">
                      2NO₂ (nâu đỏ) ⇌ N₂O₄ (không màu)<br>
                      ΔrH° = -58 kJ/mol
                    </span>
                  </div>
                </div>
              </div>

              <!-- Metrics -->
              <div class="grid grid-cols-3 gap-2 text-center text-xs">
                <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <div class="text-[10px] text-amber-600">Nồng độ [NO₂] (Màu nâu đỏ)</div>
                  <div class="font-mono font-bold text-amber-700 dark:text-amber-300 text-sm">${formatNum(xNO2, 3)} M</div>
                </div>
                <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div class="text-[10px] text-slate-500">Nồng độ [N₂O₄] (Không màu)</div>
                  <div class="font-mono font-bold text-slate-800 dark:text-white text-sm">${formatNum(xN2O4, 3)} M</div>
                </div>
                <div class="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
                  <div class="text-[10px] text-teal-600">Hằng số cân bằng Kc</div>
                  <div class="font-mono font-bold text-teal-700 dark:text-teal-300 text-sm">${formatNum(Kc, 1)}</div>
                </div>
              </div>
            </div>

            <!-- Controls & Le Chatelier Explanation -->
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Tác động các yếu tố:</h5>

              <!-- Temperature Slider -->
              <div>
                <div class="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                  <span>1. Nhiệt độ (T):</span>
                  <span class="font-mono font-bold text-teal-600">${this.eqParams.tempC} °C</span>
                </div>
                <input type="range" data-eq-temp min="0" max="100" step="5" value="${this.eqParams.tempC}" class="w-full accent-teal-600 cursor-pointer">
              </div>

              <!-- Pressure Slider -->
              <div>
                <div class="flex justify-between text-slate-600 dark:text-slate-400 mb-1">
                  <span>2. Áp suất (P):</span>
                  <span class="font-mono font-bold text-teal-600">${formatNum(this.eqParams.pressureBar, 1)} bar</span>
                </div>
                <input type="range" data-eq-press min="0.5" max="3.0" step="0.1" value="${this.eqParams.pressureBar}" class="w-full accent-teal-600 cursor-pointer">
              </div>

              <!-- Le Chatelier Rule Text -->
              <div class="p-3 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-xl text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                <strong class="text-teal-700 dark:text-teal-300">Nguyên lí chuyển dịch Le Chatelier:</strong>
                <ul class="list-disc pl-4 space-y-1 mt-1">
                  <li><strong>Tăng nhiệt độ:</strong> Cân bằng chuyển dịch theo chiều <em>thu nhiệt</em> (chiều nghịch $\to$ màu nâu đậm lên).</li>
                  <li><strong>Hạ nhiệt độ:</strong> Cân bằng chuyển dịch theo chiều <em>tỏa nhiệt</em> (chiều thuận $\to$ màu nhạt dần).</li>
                  <li><strong>Tăng áp suất:</strong> Cân bằng chuyển dịch về phía có <em>ít số mol khí hơn</em> (2 mol $NO_2 \to$ 1 mol $N_2O_4$).</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'acid-base-titration') {
        // Calculate titration curve: 20mL of 0.1M HCl titrated with 0.1M NaOH
        const vAdded = this.titrParams.vBaseAdded;
        const nAcid0 = (this.titrParams.vAcid / 1000) * this.titrParams.cAcid; // 0.002 mol
        const nBase = (vAdded / 1000) * this.titrParams.cBase;
        const totalV = (this.titrParams.vAcid + vAdded) / 1000;

        let pH = 7.0;
        let solutionColor = '#ffffff';

        if (nBase < nAcid0) {
          // Excess acid
          const remAcid = nAcid0 - nBase;
          const cH = remAcid / totalV;
          pH = Math.max(1.0, -Math.log10(cH));
        } else if (nBase > nAcid0) {
          // Excess base
          const remBase = nBase - nAcid0;
          const cOH = remBase / totalV;
          const pOH = -Math.log10(cOH);
          pH = Math.min(13.0, 14.0 - pOH);
        } else {
          // Equivalence point
          pH = 7.0;
        }

        // Indicator colors
        if (this.titrParams.indicator === 'phenolphthalein') {
          solutionColor = pH >= 8.3 ? 'rgba(244, 63, 94, 0.65)' : 'rgba(255, 255, 255, 0.2)';
        } else if (this.titrParams.indicator === 'litmus') {
          solutionColor = pH < 6 ? 'rgba(239, 68, 68, 0.5)' : (pH > 8 ? 'rgba(59, 130, 246, 0.5)' : 'rgba(168, 85, 247, 0.5)');
        } else {
          // methyl orange
          solutionColor = pH < 3.1 ? 'rgba(239, 68, 68, 0.6)' : (pH > 4.4 ? 'rgba(234, 179, 8, 0.6)' : 'rgba(249, 115, 22, 0.6)');
        }

        view.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
            <!-- Virtual Burette & Flask -->
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Thí Nghiệm Chuẩn Độ Acid–Base</h5>

              <!-- Burette Illustration -->
              <div class="flex items-center justify-center gap-6 py-2">
                <div class="flex flex-col items-center">
                  <div class="text-[10px] text-slate-500 font-mono mb-1">Burette chứa NaOH 0.1M</div>
                  <div class="w-6 h-36 rounded-t border-2 border-slate-400 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex flex-col justify-end">
                    <div class="w-full bg-cyan-500/40 transition-all duration-200" style="height: ${Math.max(4, (1 - vAdded / 40) * 100)}%"></div>
                  </div>
                  <!-- Stopcock -->
                  <div class="w-10 h-3 bg-slate-600 rounded-sm my-0.5"></div>
                  <!-- Conical Flask (Erlenmeyer) -->
                  <div class="w-20 h-20 border-2 border-slate-400 rounded-b-2xl bg-slate-50 dark:bg-slate-900 relative overflow-hidden flex flex-col justify-end p-1 shadow-md">
                    <div class="w-full rounded-b-xl transition-all duration-300 flex items-center justify-center font-bold text-[10px]" style="height: ${Math.min(75, 30 + vAdded * 1.5)}%; background-color: ${solutionColor}">
                      pH = ${formatNum(pH, 2)}
                    </div>
                  </div>
                  <div class="text-[10px] text-slate-500 font-mono mt-1">Bình tam giác: 20 mL HCl 0.1M</div>
                </div>
              </div>

              <!-- Titration Controls -->
              <div class="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <div class="flex justify-between">
                  <span>Thể tích NaOH thêm vào:</span>
                  <span class="font-mono font-bold text-teal-600">${formatNum(vAdded, 1)} / 40.0 mL</span>
                </div>
                <input type="range" data-titr-vol min="0.0" max="40.0" step="0.5" value="${vAdded}" class="w-full accent-teal-600 cursor-pointer">

                <div class="flex gap-2">
                  <button type="button" data-titr-add="0.5" class="flex-1 py-1 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold hover:bg-teal-200">+0.5 mL</button>
                  <button type="button" data-titr-add="1.0" class="flex-1 py-1 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold hover:bg-teal-200">+1.0 mL</button>
                  <button type="button" data-titr-add="drop" class="flex-1 py-1 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 font-bold hover:bg-cyan-200">+1 giọt (0.05 mL)</button>
                </div>
              </div>
            </div>

            <!-- Titration Curve Chart & Indicators -->
            <div class="lg:col-span-2 space-y-3">
              <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div class="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>Đường Cong Chuẩn Độ Acid Mạnh – Base Mạnh (pH vs V_NaOH)</span>
                  <span class="font-mono text-amber-400">Điểm tương đương: V = 20 mL, pH = 7.0</span>
                </div>

                <!-- SVG Curve -->
                <div class="relative w-full h-[180px]">
                  <svg viewBox="0 0 400 160" class="w-full h-full">
                    <!-- Grid & Axes -->
                    <line x1="35" y1="140" x2="385" y2="140" stroke="#475569" stroke-width="1.5"/>
                    <line x1="35" y1="140" x2="35" y2="10" stroke="#475569" stroke-width="1.5"/>
                    <text x="350" y="152" fill="#94a3b8" font-size="9">V_NaOH (mL)</text>
                    <text x="40" y="15" fill="#94a3b8" font-size="9">pH</text>
                    <!-- pH 7 Line -->
                    <line x1="35" y1="75" x2="385" y2="75" stroke="#334155" stroke-dasharray="3,3"/>
                    <text x="15" y="78" fill="#64748b" font-size="9">7</text>
                    <text x="15" y="138" fill="#64748b" font-size="9">1</text>
                    <text x="10" y="20" fill="#64748b" font-size="9">13</text>
                    <!-- Equivalence vertical line V=20mL (x=210) -->
                    <line x1="210" y1="140" x2="210" y2="10" stroke="#334155" stroke-dasharray="3,3"/>
                    <text x="200" y="152" fill="#64748b" font-size="9">20 mL</text>

                    <!-- Titration Sigmoid Curve -->
                    <path d="M 35 135 L 180 120 Q 205 110 210 75 Q 215 40 240 30 L 385 25" fill="none" stroke="#2dd4bf" stroke-width="3"/>

                    <!-- Current Position Point -->
                    <!-- Map vAdded (0-40) to x (35-385) and pH (1-13) to y (135-25) -->
                    <circle cx="${35 + (vAdded / 40) * 350}" cy="${135 - ((pH - 1) / 12) * 110}" r="5" fill="#f43f5e" stroke="#ffffff" stroke-width="1.5"/>
                  </svg>
                </div>

                <div class="text-[11px] text-slate-400 text-center">
                  Tại điểm tương đương (V_NaOH = 20 mL): H⁺ + OH⁻ → H₂O, dung dịch trung tính (pH = 7.0).
                </div>
              </div>

              <!-- Indicator Selection -->
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2">
                <span class="font-bold text-slate-700 dark:text-slate-300">Chất chỉ thị pH:</span>
                <div class="flex gap-1.5">
                  <button type="button" data-ind="phenolphthalein" class="px-2.5 py-1 rounded font-bold border ${this.titrParams.indicator === 'phenolphthalein' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Phenolphthalein</button>
                  <button type="button" data-ind="litmus" class="px-2.5 py-1 rounded font-bold border ${this.titrParams.indicator === 'litmus' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Quỳ tím</button>
                  <button type="button" data-ind="methyl-orange" class="px-2.5 py-1 rounded font-bold border ${this.titrParams.indicator === 'methyl-orange' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Methyl da cam</button>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-eq-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.eqMode;
          this.container.querySelectorAll('[data-eq-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });

      const resetBtn = this.container.querySelector('[data-action="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.eqParams.tempC = 25;
          this.eqParams.pressureBar = 1.0;
          this.titrParams.vBaseAdded = 0.0;
          this.renderCurrentMode();
        });
      }
    }

    bindModeControls() {
      if (this.mode === 'equilibrium-shift') {
        const tempSlider = this.container.querySelector('[data-eq-temp]');
        if (tempSlider) {
          tempSlider.addEventListener('input', (e) => {
            this.eqParams.tempC = parseFloat(e.target.value);
            this.renderCurrentMode();
          });
        }
        const pressSlider = this.container.querySelector('[data-eq-press]');
        if (pressSlider) {
          pressSlider.addEventListener('input', (e) => {
            this.eqParams.pressureBar = parseFloat(e.target.value);
            this.renderCurrentMode();
          });
        }
      } else if (this.mode === 'acid-base-titration') {
        const volSlider = this.container.querySelector('[data-titr-vol]');
        if (volSlider) {
          volSlider.addEventListener('input', (e) => {
            this.titrParams.vBaseAdded = parseFloat(e.target.value);
            this.renderCurrentMode();
          });
        }
        this.container.querySelectorAll('[data-titr-add]').forEach(b => {
          b.addEventListener('click', () => {
            const val = b.dataset.titrAdd;
            const inc = val === 'drop' ? 0.05 : parseFloat(val);
            this.titrParams.vBaseAdded = clamp(this.titrParams.vBaseAdded + inc, 0, 40);
            this.renderCurrentMode();
          });
        });
        this.container.querySelectorAll('[data-ind]').forEach(b => {
          b.addEventListener('click', () => {
            this.titrParams.indicator = b.dataset.ind;
            this.renderCurrentMode();
          });
        });
      }
    }

    start() {}
    destroy() {
      if (this.animId) cAF(this.animId);
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 2. NitrogenSulfurSim (Chương 2: Bài 4-9)
  // -------------------------------------------------------------
  class NitrogenSulfurSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'haber-bosch'; // 'haber-bosch', 'acid-rain', 'sulfur-allotropes', 'sulfuric-acid'
      this.hbParams = { tempC: 450, pressBar: 200, hasCat: true };

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-ns-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-ns-mode="haber-bosch" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'haber-bosch' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Tổng Hợp Ammonia (Haber–Bosch)
              </button>
              <button type="button" data-ns-mode="acid-rain" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'acid-rain' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Sự Hình Thành Mưa Acid & Phú Dưỡng
              </button>
              <button type="button" data-ns-mode="sulfur-allotropes" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'sulfur-allotropes' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Cấu Trúc Thù Hình Của Sulfur (S₈)
              </button>
              <button type="button" data-ns-mode="sulfuric-acid" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'sulfuric-acid' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                H₂SO₄ Loãng / Đặc & Nhận Biết SO₄²⁻
              </button>
            </div>
          </div>

          <div data-ns-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-ns-view]');
      if (!view) return;

      if (this.mode === 'haber-bosch') {
        // N2 + 3H2 <=> 2NH3, DeltaH = -92 kJ/mol (exothermic, delta n = -2)
        // High P favours NH3, Low T favours NH3 thermodynamically but too slow kinetically -> optimal 400-500C, 200bar, Fe catalyst
        const t = this.hbParams.tempC;
        const p = this.hbParams.pressBar;
        const cat = this.hbParams.hasCat ? 1.0 : 0.2;
        // Yield approximation %
        const yieldPct = clamp((45 - (t - 400) * 0.08 + (p - 100) * 0.12) * cat, 5, 65);

        view.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 class="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Điều Kiện Tổng Hợp Ammonia</h5>
              <div class="font-mono text-center font-bold text-teal-700 dark:text-teal-300 p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                N₂(g) + 3H₂(g) ⇌ 2NH₃(g)<br>
                ΔrH°₂₉₈ = -92 kJ/mol
              </div>

              <!-- Sliders -->
              <div class="space-y-2">
                <div>
                  <div class="flex justify-between text-slate-500">
                    <span>Nhiệt độ (T):</span>
                    <span class="font-mono font-bold text-teal-600">${this.hbParams.tempC} °C</span>
                  </div>
                  <input type="range" data-hb-temp min="300" max="600" step="25" value="${this.hbParams.tempC}" class="w-full accent-teal-600 cursor-pointer">
                </div>
                <div>
                  <div class="flex justify-between text-slate-500">
                    <span>Áp suất (P):</span>
                    <span class="font-mono font-bold text-teal-600">${this.hbParams.pressBar} bar</span>
                  </div>
                  <input type="range" data-hb-press min="50" max="350" step="25" value="${this.hbParams.pressBar}" class="w-full accent-teal-600 cursor-pointer">
                </div>
                <div class="flex items-center justify-between pt-1">
                  <span>Chất xúc tác Fe bột:</span>
                  <input type="checkbox" data-hb-cat ${this.hbParams.hasCat ? 'checked' : ''} class="w-4 h-4 accent-teal-600 cursor-pointer">
                </div>
              </div>
            </div>

            <!-- Reaction Reactor Graphics & Yield -->
            <div class="md:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div class="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Tháp Tổng Hợp Ammonia Công Nghiệp (Haber–Bosch)</span>
                <span class="text-teal-400 font-mono text-sm font-extrabold">Hiệu suất: ${formatNum(yieldPct, 1)}%</span>
              </div>

              <div class="p-6 flex items-center justify-around">
                <div class="text-center space-y-1">
                  <div class="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center font-bold text-white text-xs mx-auto">N₂</div>
                  <span class="text-[10px] text-slate-400">1 thể tích</span>
                </div>
                <span class="text-slate-600 font-black text-lg">+</span>
                <div class="text-center space-y-1">
                  <div class="w-12 h-12 rounded-full bg-slate-500/20 border-2 border-slate-300 flex items-center justify-center font-bold text-white text-xs mx-auto">3H₂</div>
                  <span class="text-[10px] text-slate-400">3 thể tích</span>
                </div>
                <span class="text-teal-500 font-black text-xl">⇌</span>
                <div class="text-center space-y-1">
                  <div class="w-14 h-14 rounded-full bg-teal-500/30 border-2 border-teal-400 flex items-center justify-center font-bold text-teal-300 text-sm mx-auto shadow-lg shadow-teal-500/20">2NH₃</div>
                  <span class="text-[10px] text-teal-400 font-bold">Khí Ammonia</span>
                </div>
              </div>

              <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
                <strong>Điều kiện tối ưu trong công nghiệp:</strong> Nhiệt độ 400–450 °C (thỏa hiệp giữa tốc độ phản ứng và chuyển dịch cân bằng), áp suất 150–200 bar, xúc tác bột sắt được hoạt hóa bởi Al₂O₃ và K₂O.
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'acid-rain') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Acid Rain Flow -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-extrabold text-rose-700 dark:text-rose-300 text-sm">1. Cơ Chế Hình Thành Mưa Acid</h5>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Khí thải SO₂ và NOₓ từ hoạt động đốt nhiên liệu hóa thạch bị oxi hóa trong khí quyển dưới tác dụng của xúc tác ion kim loại và ánh sáng mặt trời tạo thành H₂SO₄ và HNO₃:
                </p>
                <div class="font-mono text-[11px] space-y-1 p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-400">
                  <div>2SO₂ + O₂ + 2H₂O → 2H₂SO₄</div>
                  <div>4NO₂ + O₂ + 2H₂O → 4HNO₃</div>
                </div>
                <p class="text-[11px] text-slate-500">
                  Nước mưa có pH &lt; 5.6 được gọi là mưa acid, gây ăn mòn công trình đá vôi (CaCO₃), kim loại và làm chua đất, nguồn nước.
                </p>
              </div>

              <!-- Eutrophication Flow -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-extrabold text-emerald-700 dark:text-emerald-300 text-sm">2. Hiện Tượng Phú Dưỡng (Eutrophication)</h5>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Xảy ra khi nguồn nước ao hồ tiếp nhận lượng dư thừa các chất dinh dưỡng chứa Nitrogen (NO₃⁻, NH₄⁺) và Phosphorus (PO₄³⁻) từ phân bón và nước thải sinh hoạt:
                </p>
                <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                  <div class="flex items-center gap-2"><span>🌱</span><span>Tảo và thực vật thủy sinh bùng phát dữ dội</span></div>
                  <div class="flex items-center gap-2"><span>🌑</span><span>Khi tảo chết, vi khuẩn phân hủy tiêu thụ cạn kiệt O₂ hòa tan</span></div>
                  <div class="flex items-center gap-2"><span>🐟</span><span>Cá và sinh vật dưới nước bị ngạt thở chết hàng loạt</span></div>
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'sulfur-allotropes') {
        view.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h5 class="font-extrabold text-amber-700 dark:text-amber-300 text-sm">Dạng Thù Hình & Phân Tử S₈</h5>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                Ở điều kiện thường, sulfur tồn tại ở dạng phân tử gồm 8 nguyên tử liên kết cộng hóa trị khép thành vòng hình vương miện (Crown-shaped S₈):
              </p>
              <div class="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg text-center font-mono font-bold text-amber-800 dark:text-amber-200">
                Sulfur tà phương (S_α) ⇌ Sulfur đơn tà (S_β) ở 95.5 °C
              </div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h5 class="font-extrabold text-teal-700 dark:text-teal-300 text-sm">Tính Oxi Hóa & Khử Của Sulfur</h5>
              <div class="space-y-1.5 font-mono text-[11px]">
                <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                  <span class="text-teal-600 font-bold">Tính oxi hóa:</span> S⁰ + Fe⁰ → Fe⁺²S⁻² (tạo muối sulfide)
                </div>
                <div class="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                  <span class="text-rose-600 font-bold">Tính khử:</span> S⁰ + O₂ → S⁺⁴O₂ (cháy ngọn lửa xanh nhạt)
                </div>
                <div class="p-2 bg-amber-50 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-800 text-[10px]">
                  💡 <strong>Thu hồi thủy ngân rơi vãi:</strong> Hg + S → HgS (xảy ra ngay ở nhiệt độ thường).
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'sulfuric-acid') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Dilute vs Conc H2SO4 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-bold text-slate-800 dark:text-white text-sm">So Sánh H₂SO₄ Loãng &amp; H₂SO₄ Đặc</h5>
                <ul class="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <li>• <strong>H₂SO₄ loãng:</strong> Tính acid mạnh, tác dụng kim loại trước H giải phóng H₂: <code class="font-mono text-teal-600">Fe + H₂SO₄ → FeSO₄ + H₂↑</code>.</li>
                  <li>• <strong>H₂SO₄ đặc, nóng:</strong> Tính oxi hóa cực mạnh, hòa tan Cu và oxi hóa Fe lên mức +3: <code class="font-mono text-rose-600">Cu + 2H₂SO₄ (đặc) → CuSO₄ + SO₂↑ + 2H₂O</code>.</li>
                  <li>• <strong>Tính háo nước mãnh liệt:</strong> Hút nước của đường saccarozơ biến thành than xốp đen: <code class="font-mono text-amber-600">C₁₂H₂₂O₁₁ → 12C + 11H₂O</code>.</li>
                </ul>
              </div>

              <!-- Sulfate Ion Identification -->
              <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-3">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 text-sm">Nhận Biết Ion Sulfate (SO₄²⁻)</h5>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Thuốc thử đặc trưng là dung dịch chứa ion Ba²⁺ (như BaCl₂ hoặc Ba(OH)₂):
                </p>
                <div class="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 font-mono text-center font-bold text-teal-800 dark:text-teal-300">
                  Ba²⁺ + SO₄²⁻ → BaSO₄↓ (Kết tủa trắng)
                </div>
                <p class="text-[11px] text-slate-500">
                  Kết tủa BaSO₄ không tan trong nước và không tan trong các acid mạnh (HCl, HNO₃).
                </p>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-ns-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.nsMode;
          this.container.querySelectorAll('[data-ns-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {
      if (this.mode === 'haber-bosch') {
        const tempSlider = this.container.querySelector('[data-hb-temp]');
        if (tempSlider) {
          tempSlider.addEventListener('input', (e) => {
            this.hbParams.tempC = parseFloat(e.target.value);
            this.renderCurrentMode();
          });
        }
        const pressSlider = this.container.querySelector('[data-hb-press]');
        if (pressSlider) {
          pressSlider.addEventListener('input', (e) => {
            this.hbParams.pressBar = parseFloat(e.target.value);
            this.renderCurrentMode();
          });
        }
        const catCheck = this.container.querySelector('[data-hb-cat]');
        if (catCheck) {
          catCheck.addEventListener('change', (e) => {
            this.hbParams.hasCat = e.target.checked;
            this.renderCurrentMode();
          });
        }
      }
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 3. OrganicBasicsSim (Chương 3: Bài 10-14)
  // -------------------------------------------------------------
  class OrganicBasicsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'purification'; // 'purification', 'spectroscopy-ir', 'isomers'
      this.purifyMethod = options.purifyMethod || 'distillation'; // 'distillation', 'extraction', 'crystallization', 'chromatography'

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-org-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-org-mode="purification" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'purification' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Phương Pháp Tách & Tinh Chế Hữu Cơ
              </button>
              <button type="button" data-org-mode="spectroscopy-ir" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'spectroscopy-ir' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Phổ Hồng Ngoại (IR) & Khối Phổ (MS)
              </button>
              <button type="button" data-org-mode="isomers" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'isomers' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Đồng Phân Cấu Tạo & Hình Học (Cis-Trans)
              </button>
            </div>
          </div>

          <div data-org-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-org-view]');
      if (!view) return;

      if (this.mode === 'purification') {
        const methods = {
          distillation: {
            title: 'Chưng cất thường (Distillation)',
            principle: 'Dựa vào sự khác nhau về nhiệt độ sôi giữa các chất lỏng trong hỗn hợp ở cùng áp suất.',
            app: 'Tách ethanol (sôi ở 78.3 °C) ra khỏi hỗn hợp nước (sôi ở 100 °C) trong quá trình nấu rượu truyền thống.',
            equip: 'Bình cầu đáy tròn, nhiệt kế, ống sinh hàn Liebig (làm lạnh bằng nước chảy ngược chiều), bình hứng.'
          },
          extraction: {
            title: 'Chiết lỏng – lỏng bằng phễu chiết (Extraction)',
            principle: 'Dựa vào sự hòa tan khác nhau của một chất trong hai dung môi không trộn lẫn vào nhau.',
            app: 'Chiết tinh dầu hoặc chất hữu cơ từ dung dịch nước sang dung môi hữu cơ không tan trong nước (như hexane, dietyl ete).',
            equip: 'Phễu chiết quả lê có khóa nhám, giá đỡ sắt, bình hứng.'
          },
          crystallization: {
            title: 'Kết tinh lại (Crystallization)',
            principle: 'Dựa vào sự thay đổi độ tan của chất rắn theo nhiệt độ trong dung môi thích hợp.',
            app: 'Tinh chế đường ăn, muối ăn, acid benzoic rắn bị lẫn tạp chất.',
            equip: 'Cốc đun, phễu lọc nóng, chậu nước đá làm lạnh, phễu lọc hút chân không Büchner.'
          },
          chromatography: {
            title: 'Sắc kí cột & bản mỏng (Chromatography)',
            principle: 'Dựa vào sự phân bố khác nhau của các chất giữa pha tĩnh (chất hấp phụ) và pha động (dung môi rửa giải).',
            app: 'Tách các sắc tố thực vật (chlorophyll a, chlorophyll b, carotenoid) từ lá cây.',
            equip: 'Cột thủy tinh nhồi silica gel (pha tĩnh), dung môi hữu cơ rửa giải (pha động).'
          }
        };

        const cur = methods[this.purifyMethod] || methods.distillation;

        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <!-- Method Tabs -->
            <div class="flex flex-wrap gap-2">
              <button type="button" data-pur-pick="distillation" class="px-3 py-1.5 rounded-lg border font-bold ${this.purifyMethod === 'distillation' ? 'bg-teal-600 text-white border-teal-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">1. Chưng cất</button>
              <button type="button" data-pur-pick="extraction" class="px-3 py-1.5 rounded-lg border font-bold ${this.purifyMethod === 'extraction' ? 'bg-teal-600 text-white border-teal-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">2. Chiết</button>
              <button type="button" data-pur-pick="crystallization" class="px-3 py-1.5 rounded-lg border font-bold ${this.purifyMethod === 'crystallization' ? 'bg-teal-600 text-white border-teal-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">3. Kết tinh</button>
              <button type="button" data-pur-pick="chromatography" class="px-3 py-1.5 rounded-lg border font-bold ${this.purifyMethod === 'chromatography' ? 'bg-teal-600 text-white border-teal-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">4. Sắc kí</button>
            </div>

            <!-- Detail Display -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
              <h5 class="text-base font-extrabold text-teal-700 dark:text-teal-300">${cur.title}</h5>
              <div>
                <span class="font-bold text-slate-700 dark:text-slate-300">• Nguyên tắc:</span>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5">${cur.principle}</p>
              </div>
              <div>
                <span class="font-bold text-slate-700 dark:text-slate-300">• Dụng cụ cốt lõi:</span>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5">${cur.equip}</p>
              </div>
              <div>
                <span class="font-bold text-slate-700 dark:text-slate-300">• Ứng dụng thực tiễn:</span>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5">${cur.app}</p>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'spectroscopy-ir') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- IR Spectroscopy Card -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-extrabold text-teal-700 dark:text-teal-300 text-sm">1. Phổ Hồng Ngoại (IR Spectroscopy)</h5>
                <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Cho biết sự có mặt của các <strong>nhóm chức</strong> đặc trưng trong phân tử thông qua các dải hấp thụ:
                </p>
                <div class="space-y-1 font-mono text-[10px] p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                  <div class="text-teal-600">O–H (alcohol/phenol): 3200 – 3650 cm⁻¹ (peak tù rộng)</div>
                  <div class="text-rose-600">C=O (carbonyl/acid): 1680 – 1750 cm⁻¹ (peak nhọn sâu)</div>
                  <div class="text-cyan-600">C–H (alkane/arene): 2850 – 3100 cm⁻¹</div>
                  <div class="text-amber-600">C=C (alkene): 1620 – 1680 cm⁻¹</div>
                </div>
              </div>

              <!-- Mass Spectrometry Card -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-extrabold text-indigo-700 dark:text-indigo-300 text-sm">2. Khối Phổ (MS - Mass Spectrometry)</h5>
                <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Dùng để xác định <strong>phân tử khối (M)</strong> của hợp chất hữu cơ thông qua peak ion phân tử $[M^+]$:
                </p>
                <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded border border-indigo-200 dark:border-indigo-800 text-[11px] text-indigo-900 dark:text-indigo-200">
                  Giá trị $m/z$ của peak ion phân tử $[M^+]$ có cường độ xuất hiện ở vùng khối lượng lớn nhất tương ứng với phân tử khối của chất.
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'isomers') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Structural Isomers -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-bold text-slate-800 dark:text-white text-sm">1. Đồng Phân Cấu Tạo</h5>
                <div class="space-y-1.5 text-[11px]">
                  <div>• <strong>Đồng phân mạch carbon (C₄H₁₀):</strong> Butane (mạch thẳng) và Isobutane (mạch nhánh).</div>
                  <div>• <strong>Đồng phân vị trí nhóm chức (C₃H₈O):</strong> Propan-1-ol (CH₃CH₂CH₂OH) và Propan-2-ol (CH₃CH(OH)CH₃).</div>
                  <div>• <strong>Đồng phân nhóm chức (C₂H₆O):</strong> Ethanol (C₂H₅OH) và Dimethyl ether (CH₃–O–CH₃).</div>
                </div>
              </div>

              <!-- Geometric Isomers (Cis-Trans) -->
              <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 text-sm">2. Đồng Phân Hình Học (Cis – Trans)</h5>
                <p class="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Xuất hiện khi có liên kết đôi $C=C$ và mỗi nguyên tử carbon mang 2 nhóm thế khác nhau ($R_1 \ne R_2$ và $R_3 \ne R_4$):
                </p>
                <div class="grid grid-cols-2 gap-2 text-center font-mono text-[11px]">
                  <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded">
                    <span class="font-bold text-teal-600 block">Cis-but-2-ene</span>
                    2 nhóm –CH₃ cùng phía
                  </div>
                  <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded">
                    <span class="font-bold text-rose-600 block">Trans-but-2-ene</span>
                    2 nhóm –CH₃ khác phía (đối đỉnh)
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-org-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.orgMode;
          this.container.querySelectorAll('[data-org-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {
      if (this.mode === 'purification') {
        this.container.querySelectorAll('[data-pur-pick]').forEach(b => {
          b.addEventListener('click', () => {
            this.purifyMethod = b.dataset.purPick;
            this.renderCurrentMode();
          });
        });
      }
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 4. HydrocarbonSim (Chương 4: Bài 15-18)
  // -------------------------------------------------------------
  class HydrocarbonSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'hydrocarbon-tests'; // 'hydrocarbon-tests', 'markovnikov', 'arene-benzene'
      this.testReagent = options.testReagent || 'Br2'; // 'Br2', 'KMnO4', 'AgNO3_NH3'

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-hc-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-hc-mode="hydrocarbon-tests" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'hydrocarbon-tests' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Phòng Thí Nghiệm Nhận Biết Hydrocarbon
              </button>
              <button type="button" data-hc-mode="markovnikov" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'markovnikov' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Phản Ứng Cộng & Quy Tắc Markovnikov
              </button>
              <button type="button" data-hc-mode="arene-benzene" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'arene-benzene' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Arene (Benzene & Phản Ứng Thế Nhân Thơm)
              </button>
            </div>
          </div>

          <div data-hc-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-hc-view]');
      if (!view) return;

      if (this.mode === 'hydrocarbon-tests') {
        const tests = {
          Br2: {
            title: 'Dung dịch Bromine (Br₂ trong CCl₄ / nước Br₂ màu nâu đỏ)',
            results: [
              { hc: 'Alkane (Hexane)', phen: 'Không mất màu ở nhiệt độ phòng', color: '#b45309', note: 'Chỉ thế halogen khi có ánh sáng khuếch tán' },
              { hc: 'Alkene (Ethylene)', phen: 'Làm MẤT MÀU da cam của Br₂ nhanh chóng', color: '#f8fafc', note: 'Phản ứng cộng tạo C₂H₄Br₂ không màu' },
              { hc: 'Alk-1-yne (Acetylene)', phen: 'Làm MẤT MÀU da cam của Br₂', color: '#f8fafc', note: 'Cộng Br₂ qua 2 nấc: C₂H₂Br₂ → C₂H₂Br₄' },
              { hc: 'Arene (Benzene)', phen: 'Không mất màu dung dịch Br₂ ở đk thường', color: '#b45309', note: 'Chỉ phản ứng thế Br₂ khan khi có xúc tác FeBr₃' }
            ]
          },
          KMnO4: {
            title: 'Dung dịch Thuốc tím (KMnO₄ loãng, màu tím)',
            results: [
              { hc: 'Alkane (Hexane)', phen: 'Không đổi màu tím', color: '#7e22ce', note: 'Bền vững với chất oxi hóa ở điều kiện thường' },
              { hc: 'Alkene (Ethylene)', phen: 'Mất màu tím + Xuất hiện kết tủa đen MnO₂', color: '#475569', note: 'Tạo ethylene glycol C₂H₄(OH)₂ + MnO₂↓' },
              { hc: 'Alk-1-yne (Acetylene)', phen: 'Mất màu tím + Xuất hiện kết tủa đen MnO₂', color: '#475569', note: 'Oxi hóa liên kết ba' },
              { hc: 'Arene (Toluene)', phen: 'Chỉ mất màu khi ĐUN NÓNG', color: '#475569', note: 'Oxi hóa nhóm –CH₃ thành muối benzoate –COOK' }
            ]
          },
          AgNO3_NH3: {
            title: 'Thuốc thử Tollens (AgNO₃ trong NH₃)',
            results: [
              { hc: 'Alkane / Alkene', phen: 'Không có hiện tượng', color: '#e2e8f0', note: 'Không có nguyên tử H linh động ở liên kết ba' },
              { hc: 'Alk-1-yne (Acetylene)', phen: 'Xuất hiện KẾT TỦA VÀNG NHẠT (Ag–C≡C–Ag↓)', color: '#fef08a', note: 'Phản ứng thế nguyên tử H linh động ở đầu mạch' },
              { hc: 'Alkyne giữa mạch (But-2-yne)', phen: 'Không có kết tủa', color: '#e2e8f0', note: 'Không còn H gắn vào carbon liên kết ba' },
              { hc: 'Benzene', phen: 'Không có hiện tượng', color: '#e2e8f0', note: 'Không phản ứng' }
            ]
          }
        };

        const curTest = tests[this.testReagent] || tests.Br2;

        const tubesHtml = curTest.results.map(r => `
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2 text-center flex flex-col justify-between">
            <span class="font-extrabold text-xs text-slate-800 dark:text-white">${r.hc}</span>
            <div class="w-12 h-28 mx-auto rounded-b-xl border-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-950 flex flex-col justify-end p-1">
              <div class="w-full h-14 rounded-b-lg border-t border-slate-400 transition-all duration-300" style="background-color: ${r.color}"></div>
            </div>
            <div>
              <div class="font-bold text-[11px] text-teal-600 dark:text-teal-400">${r.phen}</div>
              <div class="text-[9px] text-slate-500 mt-0.5">${r.note}</div>
            </div>
          </div>
        `).join('');

        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <span class="font-bold text-slate-700 dark:text-slate-300">Chọn thuốc thử hóa học:</span>
              <div class="flex gap-1.5">
                <button type="button" data-hc-pick="Br2" class="px-2.5 py-1 rounded font-bold border ${this.testReagent === 'Br2' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Dung dịch Br₂</button>
                <button type="button" data-hc-pick="KMnO4" class="px-2.5 py-1 rounded font-bold border ${this.testReagent === 'KMnO4' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">Dung dịch KMnO₄</button>
                <button type="button" data-hc-pick="AgNO3_NH3" class="px-2.5 py-1 rounded font-bold border ${this.testReagent === 'AgNO3_NH3' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">AgNO₃ / NH₃ (Alk-1-yne)</button>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${tubesHtml}
            </div>
          </div>
        `;
      } else if (this.mode === 'markovnikov') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h5 class="font-bold text-teal-700 dark:text-teal-300 text-sm">Quy Tắc Markovnikov Trong Phản Ứng Cộng Bất Đối Xứng</h5>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                Khi cộng một tác nhân bất đối xứng $H-X$ ($X$ là $OH, Cl, Br$) vào liên kết đôi của alkene bất đối xứng:
              </p>
              <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono text-[11px]">
                <div class="text-teal-700 dark:text-teal-300 font-bold">
                  Thí dụ: CH₃–CH=CH₂ + H–Br →
                </div>
                <div class="pl-4 border-l-2 border-teal-500 space-y-1">
                  <div>• <strong>Sản phẩm chính (~90%):</strong> CH₃–CH(Br)–CH₃ (2-bromopropane) — Nguyên tử H cộng vào C bậc thấp hơn (nhiều H hơn), Br cộng vào C bậc cao hơn.</div>
                  <div class="text-slate-400">• Sản phẩm phụ (~10%): CH₃–CH₂–CH₂Br (1-bromopropane).</div>
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'arene-benzene') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-bold text-slate-800 dark:text-white text-sm">Cấu Trúc Hệ Thống Thơm Benzene</h5>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Vòng 6 cạnh phẳng đều, 6 liên kết $C-C$ hoàn toàn tương đương nhau (độ dài 139 pm, nằm giữa liên kết đơn và đôi) do hệ liên hợp $\pi$ khép kín phân bố đồng đều trên cả 6 nguyên tử carbon.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-bold text-rose-700 dark:text-rose-300 text-sm">Quy Tắc Thế Ở Nhân Thơm (Alkylbenzene)</h5>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Các nhóm alkyl (như –CH₃ trong toluene) là nhóm hoạt hóa nhân thơm, định hướng các tác nhân thế mới vào vị trí <strong>ortho (o-)</strong> và <strong>para (p-)</strong>:
                </p>
                <div class="font-mono text-[10px] p-2 bg-slate-100 dark:bg-slate-800 rounded text-rose-600 dark:text-rose-400">
                  Toluene + 3HNO₃ (đặc, H₂SO₄ đặc) → 2,4,6-trinitrotoluene (TNT thuốc nổ) + 3H₂O
                </div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-hc-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.hcMode;
          this.container.querySelectorAll('[data-hc-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {
      if (this.mode === 'hydrocarbon-tests') {
        this.container.querySelectorAll('[data-hc-pick]').forEach(b => {
          b.addEventListener('click', () => {
            this.testReagent = b.dataset.hcPick;
            this.renderCurrentMode();
          });
        });
      }
    }

    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 5. HalogenAlcoholPhenolSim (Chương 5: Bài 19-22)
  // -------------------------------------------------------------
  class HalogenAlcoholPhenolSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'alcohol-reactions'; // 'haloalkane-elim', 'alcohol-reactions', 'phenol-test'

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-hap-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-hap-mode="alcohol-reactions" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'alcohol-reactions' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Tính Chất Đặc Trưng Của Alcohol
              </button>
              <button type="button" data-hap-mode="phenol-test" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'phenol-test' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Phenol & Nhận Biết Bằng Nước Bromine
              </button>
              <button type="button" data-hap-mode="haloalkane-elim" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'haloalkane-elim' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Dẫn Xuất Halogen & Quy Tắc Zaitsev
              </button>
            </div>
          </div>

          <div data-hap-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-hap-view]');
      if (!view) return;

      if (this.mode === 'alcohol-reactions') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <!-- Rxn 1: with Na -->
              <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-1.5">
                <span class="font-bold text-teal-600 text-xs block">1. Tác dụng với kim loại kiềm Na</span>
                <div class="font-mono text-[10px] p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-teal-700 dark:text-teal-300">
                  2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑
                </div>
                <p class="text-slate-500 text-[10px]">Hiện tượng: Miếng Na tan dần, sủi bọt khí không màu H₂.</p>
              </div>

              <!-- Rxn 2: Dehydration -->
              <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-1.5">
                <span class="font-bold text-amber-600 text-xs block">2. Tách nước (H₂SO₄ đặc)</span>
                <div class="font-mono text-[10px] p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-amber-700 dark:text-amber-300">
                  C₂H₅OH xrightarrow{170°C} C₂H₄ + H₂O (tạo alkene)<br>
                  2C₂H₅OH xrightarrow{140°C} (C₂H₅)₂O + H₂O (tạo ether)
                </div>
                <p class="text-slate-500 text-[10px]">Nhiệt độ quyết định tạo alkene hay ether.</p>
              </div>

              <!-- Rxn 3: Oxidation by CuO -->
              <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-1.5">
                <span class="font-bold text-rose-600 text-xs block">3. Oxi hóa không hoàn toàn bằng CuO</span>
                <div class="font-mono text-[10px] p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-rose-700 dark:text-rose-300">
                  R–CH₂OH + CuO (đen) xrightarrow{t°} R–CHO + Cu (đỏ) + H₂O
                </div>
                <p class="text-slate-500 text-[10px]">Alcohol bậc I tạo aldehyde, bậc II tạo ketone, bậc III không bị oxi hóa.</p>
              </div>
            </div>

            <!-- Polyalcohol Test (Cu(OH)2) -->
            <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-between">
              <div>
                <strong class="text-blue-900 dark:text-blue-200">Nhận biết Polyalcohol có nhiều nhóm –OH kề nhau (Glycerol, Ethylene glycol):</strong>
                <p class="text-slate-600 dark:text-slate-400 mt-0.5 text-[11px]">Hòa tan kết tủa Cu(OH)₂ màu xanh lam tạo thành phức chất màu xanh lam thẫm (dung dịch xanh thẫm đặc trưng).</p>
              </div>
              <div class="w-8 h-8 rounded-full bg-blue-600 shrink-0 shadow-md"></div>
            </div>
          </div>
        `;
      } else if (this.mode === 'phenol-test') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Phenol Acidity -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-bold text-slate-800 dark:text-white text-sm">Tính Acid Yếu Của Phenol</h5>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Do ảnh hưởng của vòng benzene hút electron làm liên kết O–H phân cực mạnh hơn alcohol, phenol có tính acid yếu:
                </p>
                <div class="font-mono text-[11px] p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-teal-600">
                  C₆H₅OH + NaOH → C₆H₅ONa + H₂O
                </div>
                <p class="text-slate-500 text-[10px]">
                  Tính acid yếu hơn H₂CO₃ nên sục khí CO₂ vào dung dịch sodium phenolate làm phenol bị đẩy ra dạng vẩn đục: C₆H₅ONa + CO₂ + H₂O → C₆H₅OH↓ + NaHCO₃.
                </p>
              </div>

              <!-- Bromine Water Test -->
              <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                <h5 class="font-bold text-rose-700 dark:text-rose-300 text-sm">Phản Ứng Nhận Biết Phenol Bằng Nước Bromine</h5>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Phenol phản ứng rất nhạy với nước bromine ở điều kiện thường không cần xúc tác:
                </p>
                <div class="font-mono text-[11px] p-2 bg-rose-50 dark:bg-rose-950/40 rounded border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300">
                  C₆H₅OH + 3Br₂ → 2,4,6-tribromophenol↓ (Kết tủa TRẮNG) + 3HBr
                </div>
                <p class="text-slate-500 text-[10px]">
                  Hiện tượng: Nước bromine bị mất màu và xuất hiện kết tủa trắng (dùng để định tính và định lượng phenol).
                </p>
              </div>
            </div>
          </div>
        `;
      } else if (this.mode === 'haloalkane-elim') {
        view.innerHTML = `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            <h5 class="font-bold text-teal-700 dark:text-teal-300 text-sm">Quy Tắc Tách Zaitsev Trong Dẫn Xuất Halogen</h5>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
              Khi đun nóng dẫn xuất halogen với dung dịch KOH trong ethanol, nguyên tử halogen bị tách cùng với nguyên tử H ở carbon bên cạnh:
            </p>
            <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono text-[11px]">
              <div class="text-slate-800 dark:text-white font-bold">Thí dụ: CH₃–CH(Br)–CH₂–CH₃ + KOH (alcohol, t°) →</div>
              <div class="pl-4 border-l-2 border-teal-500 space-y-1">
                <div class="text-teal-600 dark:text-teal-300 font-bold">• Sản phẩm chính: CH₃–CH=CH–CH₃ (But-2-ene) — H bị tách ưu tiên ở C bậc cao hơn.</div>
                <div class="text-slate-400">• Sản phẩm phụ: CH₂=CH–CH₂–CH₃ (But-1-ene).</div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-hap-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.hapMode;
          this.container.querySelectorAll('[data-hap-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {}
    destroy() {
      this.container.innerHTML = '';
    }
  }

  // -------------------------------------------------------------
  // 6. CarbonylCarboxylicSim (Chương 6: Bài 23-25)
  // -------------------------------------------------------------
  class CarbonylCarboxylicSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) return;

      this.mode = options.mode || 'silver-mirror'; // 'silver-mirror', 'esterification'

      this.initDOM();
      this.bindEvents();
    }

    initDOM() {
      this.container.innerHTML = `
        <div class="chem-cc-box rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden font-sans">
          <!-- Toolbar -->
          <div class="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[11px] mr-1">Chủ đề:</span>
              <button type="button" data-cc-mode="silver-mirror" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'silver-mirror' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Phản Ứng Tráng Bạc & Thuốc Thử Tollens
              </button>
              <button type="button" data-cc-mode="esterification" class="px-2.5 py-1 rounded-lg font-bold border transition ${this.mode === 'esterification' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-300 text-slate-700 dark:text-slate-300'}">
                Carboxylic Acid & Phản Ứng Ester Hóa
              </button>
            </div>
          </div>

          <div data-cc-view class="p-4 sm:p-5"></div>
        </div>
      `;

      this.renderCurrentMode();
    }

    renderCurrentMode() {
      const view = this.container.querySelector('[data-cc-view]');
      if (!view) return;

      if (this.mode === 'silver-mirror') {
        view.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <!-- Silver Mirror Explanation -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
              <h5 class="font-extrabold text-slate-800 dark:text-white text-sm">Phản Ứng Tráng Bạc (Tollens Reagent)</h5>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                Aldehyde (–CHO) bị oxi hóa bởi phức chất $[Ag(NH_3)_2]OH$ trong môi trường kiềm ấm tạo thành kim loại Bạc bám sáng bóng như gương trên thành ống nghiệm:
              </p>
              <div class="font-mono text-[11px] p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-teal-700 dark:text-teal-300 font-bold">
                R–CHO + 2[Ag(NH₃)₂]OH xrightarrow{t°} R–COONH₄ + 2Ag↓ + 3NH₃ + H₂O
              </div>
              <p class="text-slate-500 text-[10px]">
                Riêng Formaldehyde (HCHO) phản ứng tráng bạc với tỉ lệ 1 mol HCHO sinh ra <strong>4 mol Ag</strong>. Ketone không có phản ứng này.
              </p>
            </div>

            <!-- Virtual Test Tube Mirror Graphic -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-3">
              <div class="text-xs font-bold text-slate-300">Thí Nghiệm Tráng Bạc Trong Ống Nghiệm</div>
              <div class="w-16 h-36 rounded-b-2xl border-2 border-slate-500 bg-slate-900 relative overflow-hidden flex flex-col justify-end p-1 shadow-lg">
                <!-- Silver mirror inner lining -->
                <div class="w-full h-24 rounded-b-xl bg-gradient-to-tr from-slate-300 via-white to-slate-400 border border-white flex items-center justify-center font-bold text-[10px] text-slate-800 shadow-inner">
                  Lớp Bạc (Ag)
                </div>
              </div>
              <span class="text-[10px] text-slate-400">Ứng dụng sản xuất ruột phích (bình thủy), tráng gương soi</span>
            </div>
          </div>
        `;
      } else if (this.mode === 'esterification') {
        view.innerHTML = `
          <div class="space-y-4 text-xs">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h5 class="font-bold text-teal-700 dark:text-teal-300 text-sm">Phản Ứng Ester Hóa (Fischer Esterification)</h5>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                Phản ứng giữa Carboxylic acid và Alcohol dưới xúc tác của acid $H_2SO_4$ đặc khi đun nóng là phản ứng thuận nghịch:
              </p>
              <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-center font-bold text-teal-800 dark:text-teal-300 text-sm">
                CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (Ethyl acetate) + H₂O<br>
                (Xúc tác: H₂SO₄ đặc, đun nóng nhẹ)
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                <div class="p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                  <strong>Vai trò H₂SO₄ đặc:</strong> Vừa làm chất xúc tác làm tăng tốc độ phản ứng, vừa hút nước làm chuyển dịch cân bằng sang phải tạo nhiều ester hơn.
                </div>
                <div class="p-2 rounded bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800">
                  <strong>Đặc điểm Ester:</strong> Nhẹ hơn nước, ít tan trong nước, nổi lên trên và thường có mùi thơm hoa quả đặc trưng (mùi chuối, táo, dứa).
                </div>
              </div>
            </div>
          </div>
        `;
      }

      this.bindModeControls();
    }

    bindEvents() {
      this.container.querySelectorAll('[data-cc-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.mode = btn.dataset.ccMode;
          this.container.querySelectorAll('[data-cc-mode]').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
            b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-300', 'text-slate-700', 'dark:text-slate-300');
          });
          btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
          this.renderCurrentMode();
        });
      });
    }

    bindModeControls() {}
    destroy() {
      this.container.innerHTML = '';
    }
  }

  

  // ==================== HÓA HỌC 12 ENGINES ====================

  // =========================================================================
  // 1. ESTER - LIPID SIMULATION ENGINE (Chương 1: Bài 1 - 3)
  // =========================================================================
  class EsterLipidSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'esterification'; // 'esterification', 'saponification', 'micelle'
      this.temp = 65; // °C
      this.catalyst = true; // H2SO4 đ
      this.t = 0;
      this.animId = null;
      this.oilCount = 18;
      this.particles = [];
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.initParticles();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'esterification', label: 'Ester Hóa & Thủy Phân' },
        { id: 'saponification', label: 'Xà Phòng Hóa Chất Béo' },
        { id: 'micelle', label: 'Hạt Micelle & Tẩy Rửa' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="ester-lipid-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 1: Ester – Lipid & Cơ Chế Micelle</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="canvas-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Bảng Điều Khiển</span>
                  <span class="text-[11px] font-normal text-teal-600 dark:text-teal-400" id="chem-eq-hint">Hồi lưu nhiệt</span>
                </h5>

                <div class="space-y-1.5" id="controls-panel">
                  <!-- Dynamic controls injected by mode -->
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/50 space-y-1.5">
                <div class="font-bold text-teal-900 dark:text-teal-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-square-root-variable text-teal-500"></i> Phương Trình & Cơ Chế
                </div>
                <div id="equation-display" class="font-mono text-[11px] text-teal-950 dark:text-teal-200 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-teal-100 dark:border-teal-900">
                  CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (H₂SO₄ đ, t°)
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    initParticles() {
      this.particles = [];
      const count = 40;
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * (this.w || 600),
          y: Math.random() * (this.h || 380),
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          angle: Math.random() * Math.PI * 2,
          type: i % 2 === 0 ? 'ester' : 'water'
        });
      }
    }

    updateControls() {
      const panel = this.container.querySelector('#controls-panel');
      const badge = this.container.querySelector('#canvas-badge');
      const eq = this.container.querySelector('#equation-display');
      if (!panel) return;

      if (this.mode === 'esterification') {
        panel.innerHTML = `
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Nhiệt độ phản ứng:</span>
              <span class="font-bold text-teal-600 dark:text-teal-400" id="val-temp">${this.temp} °C</span>
            </div>
            <input type="range" min="25" max="100" value="${this.temp}" id="slider-temp" class="w-full accent-teal-600">
          </div>
          <div class="flex items-center justify-between pt-1">
            <span class="text-slate-700 dark:text-slate-300">Xúc tác H₂SO₄ đặc:</span>
            <input type="checkbox" id="check-cat" ${this.catalyst ? 'checked' : ''} class="accent-teal-600 h-4 w-4">
          </div>
          <button type="button" id="btn-reflux" class="w-full py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-fire"></i> Đun Hồi Lưu & Tách Este
          </button>
        `;
        badge.innerHTML = `<i class="fa-solid fa-flask"></i> Phản ứng ester hóa Fischer (Hiệu suất: <strong>${this.catalyst ? '67%' : '12%'}</strong>)`;
        eq.innerHTML = 'CH₃COOH + C₂H₅OH \u21cc CH₃COOC₂H₅ + H₂O<br><span class="text-[10px] text-slate-500">H₂SO₄ đặc vừa xúc tác vừa hút nước chuyển dịch cân bằng thuận.</span>';
      } else if (this.mode === 'saponification') {
        panel.innerHTML = `
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Nồng độ dung dịch NaOH:</span>
              <span class="font-bold text-teal-600 dark:text-teal-400">40% (Đặc)</span>
            </div>
            <p class="text-[11px] text-slate-500">Chất béo: (C₁₇H₃₅COO)₃C₃H₅ (Tristearin)</p>
          </div>
          <button type="button" id="btn-salting" class="w-full py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-cubes-stacked"></i> Thêm NaCl Bão Hòa (Tách Xà Phòng)
          </button>
        `;
        badge.innerHTML = `<i class="fa-solid fa-soap"></i> Thủy phân chất béo trong môi trường kiềm (Xà phòng hóa)`;
        eq.innerHTML = '(C₁₇H₃₅COO)₃C₃H₅ + 3NaOH \u2192 3C₁₇H₃₅COONa + C₃H₅(OH)₃<br><span class="text-[10px] text-slate-500">Phản ứng một chiều, sinh ra xà phòng và glycerol.</span>';
      } else {
        panel.innerHTML = `
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Nồng độ phân tử xà phòng:</span>
              <span class="font-bold text-teal-600 dark:text-teal-400">Cao (> CMC)</span>
            </div>
            <p class="text-[11px] text-slate-500">Đầu ưa nước (-COO⁻Na⁺) hướng ra ngoài, đuôi kị nước bẫy dầu mỡ.</p>
          </div>
          <button type="button" id="btn-rinse" class="w-full py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-water"></i> Xả Nước Rửa Trôi Hạt Micelle
          </button>
        `;
        badge.innerHTML = `<i class="fa-solid fa-circle-nodes"></i> Cấu trúc Micelle bọc giọt dầu mỡ trong nước`;
        eq.innerHTML = 'R-COO⁻Na⁺: Đuôi kị nước hòa tan vào dầu mỡ, đầu ưa nước tương tác với H₂O.<br><span class="text-[10px] text-slate-500">Hạt micelle phân tán giọt dầu thành các hạt li ti bị nước cuốn trôi.</span>';
      }

      this.bindControlEvents();
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    bindControlEvents() {
      const slider = this.container.querySelector('#slider-temp');
      if (slider) {
        slider.addEventListener('input', (e) => {
          this.temp = parseInt(e.target.value);
          const valEl = this.container.querySelector('#val-temp');
          if (valEl) valEl.innerText = this.temp + ' °C';
        });
      }
      const cat = this.container.querySelector('#check-cat');
      if (cat) {
        cat.addEventListener('change', (e) => {
          this.catalyst = e.target.checked;
          const badge = this.container.querySelector('#canvas-badge');
          if (badge) badge.innerHTML = `<i class="fa-solid fa-flask"></i> Phản ứng ester hóa Fischer (Hiệu suất: <strong>${this.catalyst ? '67%' : '12%'}</strong>)`;
        });
      }
    }

    startLoop() {
      const loop = () => {
        this.t += 0.03;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      if (this.mode === 'esterification') {
        this.renderEsterification(ctx);
      } else if (this.mode === 'saponification') {
        this.renderSaponification(ctx);
      } else {
        this.renderMicelle(ctx);
      }
    }

    renderEsterification(ctx) {
      // Draw distillation flask and reflux column
      const cx = this.w * 0.5;
      const cy = this.h * 0.55;

      // Flask liquid
      ctx.save();
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, this.w, this.h);

      // Liquid container
      const grad = ctx.createLinearGradient(cx - 100, cy, cx + 100, cy + 100);
      grad.addColorStop(0, '#0284c7');
      grad.addColorStop(1, '#0d9488');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy + 40, 90, 0, Math.PI);
      ctx.fill();

      // Top layer: Ester (lighter)
      ctx.fillStyle = 'rgba(251, 191, 36, 0.7)';
      ctx.fillRect(cx - 80, cy + 20, 160, 20);

      // Bubbles rising
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      for (let i = 0; i < 15; i++) {
        const bx = cx - 70 + (i * 11 + Math.sin(this.t * 3 + i) * 15) % 140;
        const by = cy + 120 - ((this.t * 50 + i * 20) % 100);
        ctx.beginPath();
        ctx.arc(bx, by, 3 + (i % 3), 0, Math.PI * 2);
        ctx.fill();
      }

      // Labels
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Hỗn Hợp Phản Ứng (CH₃COOH + C₂H₅OH + H₂SO₄ đ)', cx, cy + 100);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Lớp Este Nổi Lên (Ethyl acetate - Mùi thơm hoa quả)', cx, cy + 10);

      ctx.restore();
    }

    renderSaponification(ctx) {
      const cx = this.w * 0.5;
      const cy = this.h * 0.5;

      ctx.save();
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, this.w, this.h);

      // Soap curd floating
      ctx.fillStyle = '#f1f5f9';
      for (let i = 0; i < 6; i++) {
        const sx = cx - 120 + i * 45 + Math.sin(this.t + i) * 6;
        const sy = cy - 40 + Math.cos(this.t * 1.5 + i) * 4;
        ctx.beginPath();
        ctx.ellipse(sx, sy, 22, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#94a3b8';
        ctx.stroke();
      }

      // Solution beneath (glycerol + NaCl aq)
      ctx.fillStyle = 'rgba(14, 165, 233, 0.4)';
      ctx.fillRect(cx - 150, cy, 300, 100);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Lớp Xà Phòng Rắn Đóng Bánh (C₁₇H₃₅COONa) Nổi Lên Khi Thêm NaCl', cx, cy - 65);
      ctx.fillText('Dung Dịch Phía Dưới: Glycerol C₃H₅(OH)₃ + Nước Muối', cx, cy + 60);

      ctx.restore();
    }

    renderMicelle(ctx) {
      const cx = this.w * 0.5;
      const cy = this.h * 0.5;

      ctx.save();
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      // Oil droplet in center
      const oilGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 55);
      oilGrad.addColorStop(0, '#f59e0b');
      oilGrad.addColorStop(1, '#b45309');
      ctx.fillStyle = oilGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 55, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Dầu Mỡ', cx, cy + 4);

      // Soap molecules radiating outward
      const numSoap = 24;
      for (let i = 0; i < numSoap; i++) {
        const ang = (i / numSoap) * Math.PI * 2 + this.t * 0.2;
        const innerR = 55;
        const outerR = 110;

        // Hydrophobic tail (zigzag)
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang) * innerR, cy + Math.sin(ang) * innerR);

        const mid1R = innerR + 18;
        const mid2R = innerR + 36;
        ctx.lineTo(cx + Math.cos(ang + 0.05) * mid1R, cy + Math.sin(ang + 0.05) * mid1R);
        ctx.lineTo(cx + Math.cos(ang - 0.05) * mid2R, cy + Math.sin(ang - 0.05) * mid2R);
        ctx.lineTo(cx + Math.cos(ang) * outerR, cy + Math.sin(ang) * outerR);
        ctx.stroke();

        // Hydrophilic head (blue sphere -COO⁻)
        const hx = cx + Math.cos(ang) * (outerR + 10);
        const hy = cy + Math.sin(ang) * (outerR + 10);
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(hx, hy, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0284c7';
        ctx.stroke();
      }

      ctx.fillStyle = '#38bdf8';
      ctx.font = '11px sans-serif';
      ctx.fillText('Đầu ưa nước (-COO⁻) quay ra ngoài tiếp xúc nước H₂O', cx, cy + 150);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('Đuôi kị nước hòa tan và giữ chặt giọt dầu bên trong', cx, cy + 168);

      ctx.restore();
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // =========================================================================
  // 2. CARBOHYDRATE SIMULATION ENGINE (Chương 2: Bài 4 - 7)
  // =========================================================================
  class CarbohydrateSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'glucose-fructose'; // 'glucose-fructose', 'disaccharides', 'polysaccharides-iodine'
      this.temp = 25;
      this.t = 0;
      this.animId = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'glucose-fructose', label: 'Glucose & Fructose (Tráng Bạc / Cu(OH)₂)' },
        { id: 'disaccharides', label: 'Saccharose & Maltose (Thủy Phân)' },
        { id: 'polysaccharides-iodine', label: 'Tinh Bột, Cellulose & Phản Ứng Iodine' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="carb-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 2: Carbohydrate & Phản Ứng Nhận Biết</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="carb-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Điều Khiển Thí Nghiệm</span>
                </h5>
                <div class="space-y-1.5" id="carb-controls"></div>
              </div>

              <div class="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5">
                <div class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-atom text-emerald-500"></i> Cơ Chế Phản Ứng & Màu Sắc
                </div>
                <div id="carb-equation" class="font-mono text-[11px] text-emerald-950 dark:text-emerald-200 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-emerald-100 dark:border-emerald-900"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    updateControls() {
      const panel = this.container.querySelector('#carb-controls');
      const badge = this.container.querySelector('#carb-badge');
      const eq = this.container.querySelector('#carb-equation');
      if (!panel) return;

      if (this.mode === 'glucose-fructose') {
        panel.innerHTML = `
          <button type="button" id="btn-tollens" class="w-full py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Phản Ứng Tráng Bạc (AgNO₃/NH₃)
          </button>
          <button type="button" id="btn-cuoh2" class="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-vial"></i> Phản Ứng Cu(OH)₂ (Đun Nóng Đỏ Gạch Cu₂O)
          </button>
        `;
        badge.innerHTML = `<i class="fa-solid fa-circle-check"></i> Cấu trúc Monosaccharide & Phản ứng của nhóm -CHO / đa chức -OH`;
        eq.innerHTML = 'Glucose + 2[Ag(NH₃)₂]OH \u2192 Ammonium gluconate + 2Ag\u2193 + 3NH₃ + H₂O<br><span class="text-[10px] text-slate-500">Fructose trong môi trường kiềm chuyển hóa thành glucose nên cũng tráng bạc.</span>';
      } else if (this.mode === 'disaccharides') {
        panel.innerHTML = `
          <button type="button" id="btn-hydrolysis" class="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-scissors"></i> Thủy Phân Cắt Cầu Nối Glycosidic
          </button>
          <p class="text-[11px] text-slate-500">Saccharose ($\alpha$-glucose + $\beta$-fructose) không tráng bạc; sau thủy phân tráng bạc được.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-link-slash"></i> Cấu tạo Disaccharide & Phản ứng thủy phân`;
        eq.innerHTML = 'C₁₂H₂₂O₁₁ + H₂O \u2192 C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose)<br><span class="text-[10px] text-slate-500">Xúc tác acid vô cơ hoặc enzyme sucrase đun nóng.</span>';
      } else {
        panel.innerHTML = `
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Nhiệt độ ống nghiệm:</span>
              <span class="font-bold text-teal-600 dark:text-teal-400" id="val-carb-temp">${this.temp} °C</span>
            </div>
            <input type="range" min="20" max="90" value="${this.temp}" id="slider-carb-temp" class="w-full accent-teal-600">
          </div>
          <p class="text-[11px] text-slate-500">Đun nóng: phân tử I₂ thoát khỏi lòng xoắn amylose -> mất màu; để nguội -> hiện lại màu xanh tím.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-dna"></i> Tinh bột (xoắn amylose) bẫy phân tử Iodine (I₂)`;
        eq.innerHTML = 'Amylose (xoắn lò xo) + I₂ \u21cc Hợp chất màu xanh tím (ở nhiệt độ thường)<br><span class="text-[10px] text-slate-500">Cellulose có mạch kéo dài song song không xoắn nên KHÔNG cho phản ứng màu với I₂.</span>';
      }

      this.bindControlEvents();
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    bindControlEvents() {
      const slider = this.container.querySelector('#slider-carb-temp');
      if (slider) {
        slider.addEventListener('input', (e) => {
          this.temp = parseInt(e.target.value);
          const val = this.container.querySelector('#val-carb-temp');
          if (val) val.innerText = this.temp + ' °C';
        });
      }
    }

    startLoop() {
      const loop = () => {
        this.t += 0.03;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      if (this.mode === 'glucose-fructose') {
        // Draw test tubes: Silver mirror & Cu2O red
        const cx1 = this.w * 0.35;
        const cx2 = this.w * 0.65;
        const cy = this.h * 0.5;

        // Tube 1: Silver mirror
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx1 - 25, cy - 80, 50, 160);
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(cx1 - 25, cy - 80, 50, 160);

        // Silver coating on walls
        ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
        ctx.fillRect(cx1 - 23, cy - 70, 6, 140);
        ctx.fillRect(cx1 + 17, cy - 70, 6, 140);

        // Tube 2: Cu2O brick-red precipitate
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx2 - 25, cy - 80, 50, 160);
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(cx2 - 25, cy - 80, 50, 160);

        // Red brick bottom
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(cx2 - 23, cy + 30, 46, 45);

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Thành Ống Sáng Bóng Lớp Bạc (Ag)', cx1, cy + 105);
        ctx.fillText('Kết Tủa Đỏ Gạch (Cu₂O)', cx2, cy + 105);

      } else if (this.mode === 'disaccharides') {
        // Ring structures linked
        const cx = this.w * 0.5;
        const cy = this.h * 0.45;

        // Glucose ring
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          const px = cx - 80 + Math.cos(a) * 45;
          const py = cy + Math.sin(a) * 35;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        // Fructose ring
        ctx.strokeStyle = '#34d399';
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2;
          const px = cx + 80 + Math.cos(a) * 40;
          const py = cy + Math.sin(a) * 32;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        // Glycosidic bond -O- in between
        ctx.strokeStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(cx - 35, cy);
        ctx.lineTo(cx, cy - 15);
        ctx.lineTo(cx + 40, cy);
        ctx.stroke();

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('- O -', cx, cy - 20);

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('Gốc α-glucose', cx - 80, cy + 60);
        ctx.fillText('Gốc β-fructose', cx + 80, cy + 60);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText('Liên kết α-1,2-glycosidic trong phân tử Saccharose', cx, cy + 90);

      } else {
        // Amylose helix trapping I2
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Color intensity based on temp (cooler = deep purple/blue; hot = faint)
        const alpha = Math.max(0.1, 1 - (this.temp - 20) / 70);
        const color = `rgba(79, 70, 229, ${alpha})`;

        ctx.strokeStyle = color;
        ctx.lineWidth = 14;
        ctx.beginPath();
        for (let x = -200; x <= 200; x += 4) {
          const y = Math.sin(x * 0.05 + this.t * 2) * 40;
          if (x === -200) ctx.moveTo(cx + x, cy + y);
          else ctx.lineTo(cx + x, cy + y);
        }
        ctx.stroke();

        // Iodine molecules trapped inside
        ctx.fillStyle = '#a855f7';
        for (let i = -4; i <= 4; i++) {
          const ix = cx + i * 45;
          const iy = cy + Math.sin(i * 45 * 0.05 + this.t * 2) * 10;
          ctx.beginPath();
          ctx.arc(ix, iy, 7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`Màu Sắc Dung Dịch ở ${this.temp} °C: ${this.temp > 65 ? 'Không màu (I₂ thoát khỏi mạch)' : 'Xanh Tím Đặc Trưng'}`, cx, cy + 90);
      }
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // =========================================================================
  // 3. AMINE - AMINO ACID - PROTEIN SIMULATION (Chương 3: Bài 8 - 11)
  // =========================================================================
  class AmineAminoAcidProteinSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'amine'; // 'amine', 'amino-acid-ph', 'peptide-biuret'
      this.pH = 6.0;
      this.t = 0;
      this.animId = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'amine', label: 'Amine & Tính Base / Kết Tủa Aniline' },
        { id: 'amino-acid-ph', label: 'Amino Acid & Ion Lưỡng Cực Theo pH' },
        { id: 'peptide-biuret', label: 'Liên Kết Peptide & Phản Ứng Biuret' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="nitrogen-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 3: Hợp Chất Chứa Nitrogen & Peptide</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="amine-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Thông Số Thí Nghiệm</span>
                </h5>
                <div class="space-y-1.5" id="amine-controls"></div>
              </div>

              <div class="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 space-y-1.5">
                <div class="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-dna text-indigo-500"></i> Cơ Chế Điện Ly & Màu Sắc
                </div>
                <div id="amine-equation" class="font-mono text-[11px] text-indigo-950 dark:text-indigo-200 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-indigo-100 dark:border-indigo-900"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    updateControls() {
      const panel = this.container.querySelector('#amine-controls');
      const badge = this.container.querySelector('#amine-badge');
      const eq = this.container.querySelector('#amine-equation');
      if (!panel) return;

      if (this.mode === 'amine') {
        panel.innerHTML = `
          <button type="button" id="btn-aniline-br2" class="w-full py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-flask-vial"></i> Nhỏ Nước Bromine Vào Aniline (Kết tủa trắng)
          </button>
          <p class="text-[11px] text-slate-500">Thứ tự tính base: (CH₃)₂NH > CH₃NH₂ > NH₃ > C₆H₅NH₂ (Aniline rất yếu không làm đổi màu quỳ).</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-vial"></i> Aniline (C₆H₅NH₂) phản ứng với Bromine`;
        eq.innerHTML = 'C₆H₅NH₂ + 3Br₂ \u2192 2,4,6-tribromoaniline\u2193 (trắng) + 3HBr<br><span class="text-[10px] text-slate-500">Ảnh hưởng của nhóm -NH₂ làm tăng hoạt tính thế ở vị trí ortho và para.</span>';
      } else if (this.mode === 'amino-acid-ph') {
        panel.innerHTML = `
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Độ pH của dung dịch:</span>
              <span class="font-bold text-indigo-600 dark:text-indigo-400" id="val-ph">${this.pH.toFixed(1)}</span>
            </div>
            <input type="range" min="1" max="13" step="0.5" value="${this.pH}" id="slider-ph" class="w-full accent-indigo-600">
          </div>
          <p class="text-[11px] text-slate-500">pH < pI: cation (+), di chuyển về cực âm.<br>pH = pI: ion lưỡng cực (0), đứng yên.<br>pH > pI: anion (-), di chuyển về cực dương.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-bolt"></i> Điện di Amino Acid: Dạng tồn tại phụ thuộc pH`;
        eq.innerHTML = 'H₃N⁺-CH₂-COOH (pH < 6) \u21cc H₃N⁺-CH₂-COO⁻ (pH ≈ 6) \u21cc H₂N-CH₂-COO⁻ (pH > 6)<br><span class="text-[10px] text-slate-500">Glycine có điểm đẳng điện pI = 5,97.</span>';
      } else {
        panel.innerHTML = `
          <button type="button" id="btn-biuret" class="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-eye-dropper"></i> Thử Màu Biuret (Cu(OH)₂ / NaOH)
          </button>
          <p class="text-[11px] text-slate-500">Tripeptide trở lên và Protein có từ 2 liên kết peptide tạo phức màu tím hoa cà đặc trưng.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-shapes"></i> Phức chất màu tím Biuret của chuỗi Protein`;
        eq.innerHTML = 'Protein + Cu(OH)₂ (môi trường kiềm) \u2192 Phức chất màu tím hoa cà (Violet)<br><span class="text-[10px] text-slate-500">Dipeptide KHÔNG có phản ứng màu biuret.</span>';
      }

      this.bindControlEvents();
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    bindControlEvents() {
      const slider = this.container.querySelector('#slider-ph');
      if (slider) {
        slider.addEventListener('input', (e) => {
          this.pH = parseFloat(e.target.value);
          const val = this.container.querySelector('#val-ph');
          if (val) val.innerText = this.pH.toFixed(1);
        });
      }
    }

    startLoop() {
      const loop = () => {
        this.t += 0.03;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      if (this.mode === 'amine') {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Aniline test tube with white ppt
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 30, cy - 80, 60, 160);
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(cx - 30, cy - 80, 60, 160);

        // White precipitate flakes falling
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 20; i++) {
          const px = cx - 20 + (i * 13) % 40;
          const py = cy - 20 + ((this.t * 30 + i * 25) % 90);
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Kết Tủa Trắng 2,4,6-tribromoaniline', cx, cy + 105);

      } else if (this.mode === 'amino-acid-ph') {
        // Electrophoresis tank
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Cathode (-) on left, Anode (+) on right
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(cx - 180, cy - 50, 12, 100); // Cathode (-)
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(cx + 168, cy - 50, 12, 100); // Anode (+)

        // Liquid channel
        ctx.fillStyle = 'rgba(30, 41, 59, 0.7)';
        ctx.fillRect(cx - 168, cy - 30, 336, 60);

        // Particle position based on pH
        // pI ≈ 6.0: center. pH < 6 -> to left (-). pH > 6 -> to right (+)
        const offset = (this.pH - 6.0) * 25;
        const px = cx + offset;
        const py = cy;

        ctx.fillStyle = '#a855f7';
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#c084fc';
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        const chargeStr = this.pH < 5.5 ? '+1' : (this.pH > 6.5 ? '-1' : '±0');
        ctx.fillText(chargeStr, px, py + 4);

        ctx.fillStyle = '#ef4444';
        ctx.fillText('Cực Âm (-)', cx - 174, cy + 70);
        ctx.fillStyle = '#3b82f6';
        ctx.fillText('Cực Dương (+)', cx + 174, cy + 70);

      } else {
        // Biuret violet color
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Beaker with violet color
        ctx.fillStyle = 'rgba(147, 51, 234, 0.7)';
        ctx.beginPath();
        ctx.arc(cx, cy + 20, 80, 0, Math.PI);
        ctx.fill();

        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Phức Đồng - Protein Màu Tím Hoa Cà (Biuret Test)', cx, cy + 60);
      }
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // =========================================================================
  // 4. POLYMER MATERIALS SIMULATION (Chương 4: Bài 12 - 14)
  // =========================================================================
  class PolymerMaterialsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'polymerization'; // 'polymerization', 'elastomer-vulcanization', 'composite-recycling'
      this.stretch = 0;
      this.t = 0;
      this.animId = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'polymerization', label: 'Trùng Hợp & Trùng Ngưng' },
        { id: 'elastomer-vulcanization', label: 'Cao Su Lưu Hóa (Cầu Disulfide)' },
        { id: 'composite-recycling', label: 'Vật Liệu Composite & Nhựa Tái Chế' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="polymer-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 4: Polymer & Vật Liệu Cao Phân Tử</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="poly-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Điều Khiển Đàn Hồi & Phản Ứng</span>
                </h5>
                <div class="space-y-1.5" id="poly-controls"></div>
              </div>

              <div class="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-1.5">
                <div class="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-recycle text-amber-500"></i> Phương Trình Trùng Hợp
                </div>
                <div id="poly-equation" class="font-mono text-[11px] text-amber-950 dark:text-amber-200 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-amber-100 dark:border-amber-900"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    updateControls() {
      const panel = this.container.querySelector('#poly-controls');
      const badge = this.container.querySelector('#poly-badge');
      const eq = this.container.querySelector('#poly-equation');
      if (!panel) return;

      if (this.mode === 'polymerization') {
        panel.innerHTML = `
          <button type="button" id="btn-pe" class="w-full py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition">Trùng Hợp Ethylene \u2192 PE</button>
          <button type="button" id="btn-nylon" class="w-full py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition">Trùng Ngưng Nylon-6,6</button>
        `;
        badge.innerHTML = `<i class="fa-solid fa-link"></i> Phản ứng trùng hợp n(CH₂=CH₂) \u2192 (-CH₂-CH₂-)n`;
        eq.innerHTML = 'n CH₂=CH₂ -(xt, t°, p)-> (-CH₂-CH₂-)n (Polyethylene - PE)<br><span class="text-[10px] text-slate-500">Trùng ngưng nylon-6,6 giải phóng thêm phân tử nhỏ H₂O.</span>';
      } else if (this.mode === 'elastomer-vulcanization') {
        panel.innerHTML = `
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Lực kéo dãn đàn hồi:</span>
              <span class="font-bold text-amber-600 dark:text-amber-400" id="val-stretch">${this.stretch} %</span>
            </div>
            <input type="range" min="0" max="100" value="${this.stretch}" id="slider-stretch" class="w-full accent-amber-600">
          </div>
          <p class="text-[11px] text-slate-500">Cầu nối disulfide (-S-S-) giữ các mạch polymer không trượt khỏi nhau, giúp cao su đàn hồi tốt hơn và chịu nhiệt cao hơn.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-arrows-left-right"></i> Mạng lưới không gian ba chiều cao su lưu hóa (-S-S-)`;
        eq.innerHTML = 'Polyisoprene + S (đun nóng) \u2192 Cao su lưu hóa có cầu nối -S-S-<br><span class="text-[10px] text-slate-500">Độ đàn hồi, độ bền kéo và khả năng chống mài mòn tăng vọt.</span>';
      } else {
        panel.innerHTML = `
          <div class="grid grid-cols-3 gap-1.5 text-center font-bold">
            <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800">♳ 1 PETE</div>
            <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800">♴ 2 HDPE</div>
            <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800">♵ 3 PVC</div>
            <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800">♶ 4 LDPE</div>
            <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800">♷ 5 PP</div>
            <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800">♸ 6 PS</div>
          </div>
          <p class="text-[11px] text-slate-500 mt-2">Vật liệu composite gồm pha nền (chất dẻo) và pha gia cường (sợi thủy tinh, carbon) tăng độ bền cơ học.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-recycle"></i> 7 Mã nhận diện nhựa tái chế & Vật liệu Composite`;
        eq.innerHTML = 'Composite = Pha nền (Polymer kết dính) + Pha gia cường (Sợi thủy tinh, carbon chịu lực)<br><span class="text-[10px] text-slate-500">Ứng dụng làm vỏ tàu thuyền, thân máy bay, ống dẫn nước cao cấp.</span>';
      }

      this.bindControlEvents();
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    bindControlEvents() {
      const slider = this.container.querySelector('#slider-stretch');
      if (slider) {
        slider.addEventListener('input', (e) => {
          this.stretch = parseInt(e.target.value);
          const val = this.container.querySelector('#val-stretch');
          if (val) val.innerText = this.stretch + ' %';
        });
      }
    }

    startLoop() {
      const loop = () => {
        this.t += 0.03;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, 0, this.h);

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      if (this.mode === 'elastomer-vulcanization') {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;
        const stretchFac = 1 + (this.stretch / 100) * 0.7;

        // Two parallel chains connected by -S-S- disulfide bridges
        for (let row = 0; row < 2; row++) {
          const ry = cy - 40 + row * 80;
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 4;
          ctx.beginPath();
          for (let x = -160; x <= 160; x += 10) {
            const actualX = cx + x * stretchFac;
            const actualY = ry + Math.sin(x * 0.1) * (15 / stretchFac);
            if (x === -160) ctx.moveTo(actualX, actualY);
            else ctx.lineTo(actualX, actualY);
          }
          ctx.stroke();
        }

        // Bridges
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        for (let i = -2; i <= 2; i++) {
          const bx = cx + i * 70 * stretchFac;
          ctx.beginPath();
          ctx.moveTo(bx, cy - 40);
          ctx.lineTo(bx, cy + 40);
          ctx.stroke();

          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('-S-S-', bx + 16, cy);
        }

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`Độ Dãn: ${this.stretch}% - Cầu Nối Disulfide (-S-S-) Đảm Bảo Tính Đàn Hồi Hồi Phục`, cx, cy + 90);

      } else {
        // Polymer chain repeating units
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 4;
        ctx.beginPath();
        for (let i = -5; i <= 5; i++) {
          const px = cx + i * 36;
          const py = cy + Math.sin(i + this.t * 2) * 20;
          if (i === -5) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        for (let i = -5; i <= 5; i++) {
          const px = cx + i * 36;
          const py = cy + Math.sin(i + this.t * 2) * 20;
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Chuỗi Mạch Polymer Dài Vô Tận Gồm Các Mắt Xích Lặp Lại', cx, cy + 70);
      }
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // =========================================================================
  // 5. ELECTROCHEMISTRY SIMULATION (Chương 5: Bài 15 - 17)
  // =========================================================================
  class ElectrochemistrySim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'galvanic-cell'; // 'galvanic-cell', 'electrolysis', 'faraday-calculator'
      this.currentI = 2.0; // Amperes
      this.timeT = 1930; // Seconds
      this.t = 0;
      this.animId = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'galvanic-cell', label: 'Pin Galvani Zn - Cu (E° = 1,10 V)' },
        { id: 'electrolysis', label: 'Bình Điện Phân & Mạ Điện' },
        { id: 'faraday-calculator', label: 'Định Luật Faraday (m = AIt / nF)' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="electro-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 5: Pin Điện Hóa & Điện Phân</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="electro-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Thông Số Dòng Điện & Điện Cực</span>
                </h5>
                <div class="space-y-1.5" id="electro-controls"></div>
              </div>

              <div class="p-3.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/50 space-y-1.5">
                <div class="font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt-lightning text-cyan-500"></i> Quá Trình Điện Cực
                </div>
                <div id="electro-equation" class="font-mono text-[11px] text-cyan-950 dark:text-cyan-200 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-cyan-100 dark:border-cyan-900"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    updateControls() {
      const panel = this.container.querySelector('#electro-controls');
      const badge = this.container.querySelector('#electro-badge');
      const eq = this.container.querySelector('#electro-equation');
      if (!panel) return;

      if (this.mode === 'galvanic-cell') {
        panel.innerHTML = `
          <div class="space-y-1">
            <p><strong>Cực âm (Anode):</strong> Kẽm Zn (E° = -0,76 V)</p>
            <p><strong>Cực dương (Cathode):</strong> Đồng Cu (E° = +0,34 V)</p>
            <p class="text-teal-600 dark:text-teal-400 font-bold">Sức điện động chuẩn: E°pin = 1,10 V</p>
          </div>
          <p class="text-[11px] text-slate-500">Electron chảy từ cực Zn qua dây dẫn sang cực Cu. Dòng điện quy ước đi ngược lại.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-car-battery"></i> Pin Daniell Zn - Cu: Vôn kế chỉ 1,10 V`;
        eq.innerHTML = 'Anode (-): Zn \u2192 Zn²⁺ + 2e (Oxi hóa)<br>Cathode (+): Cu²⁺ + 2e \u2192 Cu (Khử)<br>E°pin = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 - (-0,76) = 1,10 V';
      } else if (this.mode === 'electrolysis') {
        panel.innerHTML = `
          <div class="space-y-1">
            <p><strong>Điện phân dung dịch CuSO₄:</strong></p>
            <p>Cathode (-): Cu²⁺ + 2e \u2192 Cu\u2193</p>
            <p>Anode (+) trơ: 2H₂O \u2192 O₂\u2191 + 4H⁺ + 4e</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-plug"></i> Điện phân dung dịch & Hiện tượng mạ đồng`;
        eq.innerHTML = '2CuSO₄ + 2H₂O -(đpdd)-> 2Cu\u2193 (cathode) + O₂\u2191 (anode) + 2H₂SO₄<br><span class="text-[10px] text-slate-500">Màu xanh của dung dịch nhạt dần, dung dịch có tính acid.</span>';
      } else {
        const massCu = ((64 * this.currentI * this.timeT) / (2 * 96500)).toFixed(3);
        panel.innerHTML = `
          <div>
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Cường độ dòng điện I:</span>
              <span class="font-bold text-cyan-600 dark:text-cyan-400" id="val-i">${this.currentI} A</span>
            </div>
            <input type="range" min="0.5" max="5.0" step="0.5" value="${this.currentI}" id="slider-i" class="w-full accent-cyan-600">
          </div>
          <div class="mt-2">
            <div class="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
              <span>Thời gian điện phân t:</span>
              <span class="font-bold text-cyan-600 dark:text-cyan-400" id="val-t">${this.timeT} s</span>
            </div>
            <input type="range" min="500" max="5000" step="100" value="${this.timeT}" id="slider-t" class="w-full accent-cyan-600">
          </div>
          <div class="p-2 rounded bg-cyan-900/30 border border-cyan-800 mt-2 font-bold text-cyan-300 text-center">
            Khối lượng Cu thoát ra: <span id="val-mass">${massCu}</span> g
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-calculator"></i> Tính toán lượng chất thoát ra theo Định luật Faraday`;
        eq.innerHTML = 'm = (A \u00b7 I \u00b7 t) / (n \u00b7 F)<br>với F = 96500 C/mol, n = 2 (Cu²⁺ + 2e \u2192 Cu).';
      }

      this.bindControlEvents();
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    bindControlEvents() {
      const sliderI = this.container.querySelector('#slider-i');
      if (sliderI) {
        sliderI.addEventListener('input', (e) => {
          this.currentI = parseFloat(e.target.value);
          const val = this.container.querySelector('#val-i');
          if (val) val.innerText = this.currentI + ' A';
          this.calcMass();
        });
      }
      const sliderT = this.container.querySelector('#slider-t');
      if (sliderT) {
        sliderT.addEventListener('input', (e) => {
          this.timeT = parseInt(e.target.value);
          const val = this.container.querySelector('#val-t');
          if (val) val.innerText = this.timeT + ' s';
          this.calcMass();
        });
      }
    }

    calcMass() {
      const massCu = ((64 * this.currentI * this.timeT) / (2 * 96500)).toFixed(3);
      const valMass = this.container.querySelector('#val-mass');
      if (valMass) valMass.innerText = massCu;
    }

    startLoop() {
      const loop = () => {
        this.t += 0.04;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      const cx = this.w * 0.5;
      const cy = this.h * 0.5;

      // Draw Daniell cell beakers
      // Beaker 1: Zn in ZnSO4
      const b1x = cx - 110;
      const b2x = cx + 110;

      // Solution 1 (clear/pale)
      ctx.fillStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.fillRect(b1x - 55, cy - 10, 110, 100);
      ctx.strokeStyle = '#94a3b8';
      ctx.strokeRect(b1x - 55, cy - 10, 110, 100);

      // Solution 2 (CuSO4 blue)
      ctx.fillStyle = 'rgba(14, 165, 233, 0.4)';
      ctx.fillRect(b2x - 55, cy - 10, 110, 100);
      ctx.strokeStyle = '#0284c7';
      ctx.strokeRect(b2x - 55, cy - 10, 110, 100);

      // Electrodes
      // Zn electrode
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(b1x - 15, cy - 60, 30, 110);
      ctx.strokeStyle = '#cbd5e1';
      ctx.strokeRect(b1x - 15, cy - 60, 30, 110);

      // Cu electrode
      ctx.fillStyle = '#b45309';
      ctx.fillRect(b2x - 15, cy - 60, 30, 110);
      ctx.strokeStyle = '#f59e0b';
      ctx.strokeRect(b2x - 15, cy - 60, 30, 110);

      // Salt bridge (inverted U-tube)
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(b1x + 25, cy + 30);
      ctx.lineTo(b1x + 25, cy - 30);
      ctx.lineTo(b2x - 25, cy - 30);
      ctx.lineTo(b2x - 25, cy + 30);
      ctx.stroke();

      // Wires connecting to voltmeter
      ctx.strokeStyle = '#f87171';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(b1x, cy - 60);
      ctx.lineTo(b1x, cy - 100);
      ctx.lineTo(cx - 30, cy - 100);
      ctx.moveTo(cx + 30, cy - 100);
      ctx.lineTo(b2x, cy - 100);
      ctx.lineTo(b2x, cy - 60);
      ctx.stroke();

      // Voltmeter in center
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(cx, cy - 100, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#38bdf8';
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('1.10 V', cx, cy - 96);

      // Animated electrons in wire
      ctx.fillStyle = '#fbbf24';
      const eProgress = (this.t * 40) % 200;
      const ex = b1x + eProgress;
      if (ex < b2x) {
        ctx.beginPath();
        ctx.arc(ex, cy - 100, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Zn (Anode -)', b1x, cy + 110);
      ctx.fillText('Cu (Cathode +)', b2x, cy + 110);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '10px sans-serif';
      ctx.fillText('Cầu Muối KCl', cx, cy - 36);
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // =========================================================================
  // 6. GENERAL METALS SIMULATION (Chương 6: Bài 18 - 23)
  // =========================================================================
  class GeneralMetalsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'metal-crystal'; // 'metal-crystal', 'displacement-series', 'corrosion-protection'
      this.rotX = 0.5;
      this.rotY = 0.5;
      this.t = 0;
      this.animId = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'metal-crystal', label: 'Mạng Tinh Thể Kim Loại (BCC / FCC / HCP)' },
        { id: 'displacement-series', label: 'Dãy Điện Hóa & Kim Loại Đẩy Muối' },
        { id: 'corrosion-protection', label: 'Ăn Mòn Điện Hóa & Bảo Vệ Vỏ Tàu' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="metals-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-slate-400 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 6: Đại Cương Về Kim Loại</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block cursor-grab active:cursor-grabbing"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="metal-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Khảo Sát Kim Loại</span>
                </h5>
                <div class="space-y-1.5" id="metal-controls"></div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div class="font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                  <i class="fa-solid fa-cube text-slate-400"></i> Quy Tắc Phản Ứng & Cơ Chế
                </div>
                <div id="metal-equation" class="font-mono text-[11px] text-slate-800 dark:text-slate-300 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-slate-200 dark:border-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    updateControls() {
      const panel = this.container.querySelector('#metal-controls');
      const badge = this.container.querySelector('#metal-badge');
      const eq = this.container.querySelector('#metal-equation');
      if (!panel) return;

      if (this.mode === 'metal-crystal') {
        panel.innerHTML = `
          <p class="text-[11px] text-slate-500">Kéo chuột trên ô mô phỏng để xoay mạng tinh thể kim loại lập phương 3D.</p>
          <div class="space-y-1">
            <p>• <strong>BCC (Lập phương tâm khối):</strong> Li, Na, K, Fe, Cr (Độ đặc khít 68%).</p>
            <p>• <strong>FCC (Lập phương tâm diện):</strong> Cu, Ag, Au, Al (Độ đặc khít 74%).</p>
            <p>• <strong>HCP (Lục phương):</strong> Be, Mg, Zn (Độ đặc khít 74%).</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-cube"></i> Mô hình mạng tinh thể & Khí electron tự do`;
        eq.innerHTML = 'Electron tự do chuyển động hỗn loạn trong toàn bộ tinh thể giải thích tính dẫn điện, dẫn nhiệt, ánh kim và tính dẻo của kim loại.';
      } else if (this.mode === 'displacement-series') {
        panel.innerHTML = `
          <p class="text-[11px] text-slate-500">Quy tắc $\alpha$: Chất oxi hóa mạnh hơn phản ứng với chất khử mạnh hơn tạo chất oxi hóa yếu hơn và chất khử yếu hơn.</p>
          <div class="p-2 rounded bg-slate-900/40 border border-slate-700 space-y-1 font-mono text-[10px]">
            <p>Fe + CuSO₄ \u2192 FeSO₄ + Cu\u2193</p>
            <p>Cu + 2AgNO₃ \u2192 Cu(NO₃)₂ + 2Ag\u2193</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-arrows-split-up-and-left"></i> Phản ứng kim loại đẩy ion kim loại yếu hơn ra khỏi muối`;
        eq.innerHTML = 'Fe + Cu²⁺ \u2192 Fe²⁺ + Cu\u2193<br><span class="text-[10px] text-slate-500">Đinh sắt bị phủ một lớp đồng màu đỏ gạch, dung dịch xanh lam nhạt dần.</span>';
      } else {
        panel.innerHTML = `
          <p class="text-[11px] text-slate-500">Bảo vệ điện hóa: Gắn khối kẽm (vật hi sinh) vào vỏ tàu bằng thép (Fe). Kẽm có tính khử mạnh hơn sắt nên bị ăn mòn trước.</p>
          <div class="space-y-1">
            <p>• Anode (-): Zn \u2192 Zn²⁺ + 2e (Kẽm tan dần)</p>
            <p>• Cathode (+): O₂ + 2H₂O + 4e \u2192 4OH⁻ (Thép được bảo vệ)</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-shield-halved"></i> Cơ chế bảo vệ điện hóa vỏ tàu thủy bằng khối Kẽm Zn`;
        eq.innerHTML = 'Zn bị ăn mòn thay thế cho Fe (vật hi sinh); định kì thay thế các khối kẽm mới.';
      }
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });

      // Mouse drag rotation
      let isDragging = false;
      let lastX, lastY;
      if (this.canvas) {
        this.canvas.addEventListener('mousedown', (e) => {
          isDragging = true;
          lastX = e.clientX;
          lastY = e.clientY;
        });
        typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          const dx = e.clientX - lastX;
          const dy = e.clientY - lastY;
          this.rotY += dx * 0.01;
          this.rotX += dy * 0.01;
          lastX = e.clientX;
          lastY = e.clientY;
        });
        typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mouseup', () => { isDragging = false; });
      }
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    startLoop() {
      const loop = () => {
        this.t += 0.02;
        this.rotY += 0.005;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      if (this.mode === 'metal-crystal') {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;
        const size = 70;

        // 8 vertices of cube in 3D
        const vertices = [
          [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
          [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
          [0, 0, 0] // Body center
        ];

        // Project 3D points
        const proj = vertices.map(v => {
          let x = v[0] * size;
          let y = v[1] * size;
          let z = v[2] * size;

          // Rotate X
          const y1 = y * Math.cos(this.rotX) - z * Math.sin(this.rotX);
          const z1 = y * Math.sin(this.rotX) + z * Math.cos(this.rotX);
          // Rotate Y
          const x2 = x * Math.cos(this.rotY) + z1 * Math.sin(this.rotY);
          const z2 = -x * Math.sin(this.rotY) + z1 * Math.cos(this.rotY);

          return { x: cx + x2, y: cy + y1, z: z2 };
        });

        // Edges
        const edges = [
          [0,1], [1,2], [2,3], [3,0],
          [4,5], [5,6], [6,7], [7,4],
          [0,4], [1,5], [2,6], [3,7]
        ];

        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        edges.forEach(e => {
          ctx.beginPath();
          ctx.moveTo(proj[e[0]].x, proj[e[0]].y);
          ctx.lineTo(proj[e[1]].x, proj[e[1]].y);
          ctx.stroke();
        });

        // Draw spheres
        proj.forEach((p, idx) => {
          const isCenter = idx === 8;
          ctx.fillStyle = isCenter ? '#f59e0b' : '#38bdf8';
          ctx.beginPath();
          ctx.arc(p.x, p.y, isCenter ? 14 : 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();
        });

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Mạng Tinh Thể Lập Phương Tâm Khối (BCC) 3D Xoay Được', cx, cy + 120);

      } else if (this.mode === 'displacement-series') {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Beaker with Fe nail in CuSO4 solution
        ctx.fillStyle = 'rgba(14, 165, 233, 0.45)';
        ctx.fillRect(cx - 60, cy - 30, 120, 110);
        ctx.strokeStyle = '#0284c7';
        ctx.strokeRect(cx - 60, cy - 30, 120, 110);

        // Iron nail
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(cx - 10, cy - 70, 20, 120);

        // Copper coating deposited on submerged part
        ctx.fillStyle = '#b45309';
        ctx.fillRect(cx - 12, cy - 20, 24, 70);

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Đinh Sắt Bị Bám Lớp Đồng Đỏ (Cu)', cx, cy + 105);

      } else {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Ship hull steel plate (gray)
        ctx.fillStyle = '#475569';
        ctx.fillRect(cx - 140, cy - 40, 280, 80);

        // Sacrificial Zinc block attached
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(cx - 40, cy - 10, 80, 25);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 40, cy - 10, 80, 25);

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Khối Kẽm Zn (Vật Hi Sinh Bị Ăn Mòn Trước)', cx, cy + 4);
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('Vỏ Thép Thân Tàu (Fe) Được Bảo Vệ Nguyên Vẹn', cx, cy + 60);
      }
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // =========================================================================
  // 7. MAIN GROUP METALS SIMULATION (Chương 7: Bài 24 - 26)
  // =========================================================================
  class MainGroupMetalsSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'group-ia-reaction'; // 'group-ia-reaction', 'group-iia-solubility', 'hard-water'
      this.flameMetal = 'Na';
      this.t = 0;
      this.animId = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'group-ia-reaction', label: 'Kim Loại Kiềm (Na + Nước & Màu Ngọn Lửa)' },
        { id: 'group-iia-solubility', label: 'Độ Tan Của Hợp Chất Nhóm IIA' },
        { id: 'hard-water', label: 'Nước Cứng & Phương Pháp Làm Mềm' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="maingroup-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 7: Nguyên Tố Nhóm IA & Nhóm IIA</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="mg-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Thao Tác Thí Nghiệm</span>
                </h5>
                <div class="space-y-1.5" id="mg-controls"></div>
              </div>

              <div class="p-3.5 rounded-xl bg-yellow-50/70 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800/50 space-y-1.5">
                <div class="font-bold text-yellow-900 dark:text-yellow-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-fire-burner text-yellow-500"></i> Hiện Tượng & Phương Trình
                </div>
                <div id="mg-equation" class="font-mono text-[11px] text-yellow-950 dark:text-yellow-200 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-yellow-100 dark:border-yellow-900"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    updateControls() {
      const panel = this.container.querySelector('#mg-controls');
      const badge = this.container.querySelector('#mg-badge');
      const eq = this.container.querySelector('#mg-equation');
      if (!panel) return;

      if (this.mode === 'group-ia-reaction') {
        panel.innerHTML = `
          <p class="text-[11px] text-slate-500">Thử màu ngọn lửa muối kim loại kiềm và kiềm thổ:</p>
          <div class="grid grid-cols-3 gap-1.5 font-bold">
            <button type="button" data-flame="Li" class="flame-btn p-1.5 rounded bg-rose-600 text-white">Li (Đỏ)</button>
            <button type="button" data-flame="Na" class="flame-btn p-1.5 rounded bg-amber-500 text-white">Na (Vàng)</button>
            <button type="button" data-flame="K" class="flame-btn p-1.5 rounded bg-purple-500 text-white">K (Tím)</button>
            <button type="button" data-flame="Ca" class="flame-btn p-1.5 rounded bg-orange-600 text-white">Ca (Cam)</button>
            <button type="button" data-flame="Ba" class="flame-btn p-1.5 rounded bg-lime-600 text-white">Ba (Lục)</button>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-fire"></i> Thí nghiệm màu ngọn lửa đặc trưng kim loại kiềm / kiềm thổ`;
        eq.innerHTML = '2Na + 2H₂O \u2192 2NaOH + H₂\u2191<br><span class="text-[10px] text-slate-500">Mẩu Na nóng chảy thành giọt tròn, chạy trên mặt nước, sủi bọt khí H₂.</span>';
      } else if (this.mode === 'group-iia-solubility') {
        panel.innerHTML = `
          <div class="space-y-1">
            <p>• <strong>Độ tan muối SO₄²⁻:</strong> MgSO₄ (tan) > CaSO₄ (ít tan) > BaSO₄ (kết tủa trắng).</p>
            <p>• <strong>Đá vôi tạo hang động:</strong> CaCO₃ + CO₂ + H₂O \u21cc Ca(HCO₃)₂.</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-mountain"></i> Sự xâm thực đá vôi tạo nhũ đá hang động & Kết tủa BaSO₄`;
        eq.innerHTML = 'Ba²⁺ + SO₄²⁻ \u2192 BaSO₄\u2193 (trắng, không tan trong acid mạnh)<br>CaCO₃ + CO₂ + H₂O \u21cc Ca(HCO₃)₂ (quá trình hình thành thạch nhũ).';
      } else {
        panel.innerHTML = `
          <p class="text-[11px] text-slate-500">Nước cứng chứa nhiều ion Ca²⁺ và Mg²⁺. Các phương pháp làm mềm:</p>
          <div class="space-y-1 font-mono text-[10px]">
            <p>1. Đun sôi (Nước cứng tạm thời): Ca(HCO₃)₂ -(t°)-> CaCO₃\u2193 + CO₂ + H₂O</p>
            <p>2. Hóa chất: Thêm Na₂CO₃ hoặc Na₃PO₄ tạo kết tủa CaCO₃\u2193</p>
            <p>3. Trao đổi ion: Cột nhựa Zeolite giữ Ca²⁺, nhả Na⁺</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-filter"></i> Làm mềm nước cứng bằng phương pháp trao đổi ion`;
        eq.innerHTML = 'Ca²⁺(aq) + 2Na-Zeolite \u2192 Ca-(Zeolite)₂ + 2Na⁺(aq)<br><span class="text-[10px] text-slate-500">Loại bỏ hoàn toàn ion Ca²⁺ và Mg²⁺, làm nước trở nên mềm.</span>';
      }

      this.bindControlEvents();
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    bindControlEvents() {
      this.container.querySelectorAll('.flame-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.flameMetal = e.target.getAttribute('data-flame');
        });
      });
    }

    startLoop() {
      const loop = () => {
        this.t += 0.04;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      if (this.mode === 'group-ia-reaction') {
        const cx = this.w * 0.5;
        const cy = this.h * 0.55;

        // Burner burner flame
        const flameColors = {
          'Li': ['#f43f5e', '#be123c'],
          'Na': ['#f59e0b', '#d97706'],
          'K': ['#a855f7', '#7e22ce'],
          'Ca': ['#ea580c', '#c2410c'],
          'Ba': ['#84cc16', '#65a30d']
        };

        const colors = flameColors[this.flameMetal] || flameColors['Na'];

        // Flame animation
        ctx.save();
        const flameHeight = 110 + Math.sin(this.t * 6) * 15;
        const flameGrad = ctx.createRadialGradient(cx, cy - 30, 10, cx, cy - 30, flameHeight);
        flameGrad.addColorStop(0, '#ffffff');
        flameGrad.addColorStop(0.3, colors[0]);
        flameGrad.addColorStop(1, colors[1]);

        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.moveTo(cx - 30, cy + 30);
        ctx.quadraticCurveTo(cx - 40, cy - 40, cx, cy - flameHeight);
        ctx.quadraticCurveTo(cx + 40, cy - 40, cx + 30, cy + 30);
        ctx.closePath();
        ctx.fill();

        // Wire loop
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - 100, cy - 20);
        ctx.lineTo(cx, cy - 20);
        ctx.stroke();

        ctx.restore();

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`Màu Ngọn Lửa Của Muối ${this.flameMetal}`, cx, cy + 80);

      } else {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Hard water softening beaker
        ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.fillRect(cx - 60, cy - 40, 120, 100);
        ctx.strokeStyle = '#0284c7';
        ctx.strokeRect(cx - 60, cy - 40, 120, 100);

        // White precipitate settling (CaCO3)
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(cx - 55, cy + 45, 110, 12);

        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Kết Tủa CaCO₃ Lắng Xuống Khi Làm Mềm', cx, cy + 90);
      }
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }

  // =========================================================================
  // 8. TRANSITION METALS & COMPLEX SIMULATION (Chương 8: Bài 27 - 30)
  // =========================================================================
  class TransitionMetalsComplexSim {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.options = options;
      this.mode = options.mode || 'complex-geometry-3d'; // 'oxidation-states', 'complex-geometry-3d', 'complex-formation-color'
      this.rotX = 0.5;
      this.rotY = 0.5;
      this.dropCount = 0;
      this.t = 0;
      this.animId = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';
      this.buildUI();
      this.initCanvas();
      this.bindEvents();
      this.startLoop();
    }

    buildUI() {
      const modeLabels = [
        { id: 'oxidation-states', label: 'Cấu Hình 3d & Số Oxi Hóa Biến Đổi' },
        { id: 'complex-geometry-3d', label: 'Cấu Trúc Phức Chất Bát Diện 3D' },
        { id: 'complex-formation-color', label: 'Tạo Phức Đổi Màu (Cu²⁺ + NH₃)' }
      ];

      const navBtns = modeLabels.map(m => 
        `<button type="button" data-mode="${m.id}" class="mode-btn px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.mode === m.id ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}>${m.label}</button>`
      ).join('');

      this.container.innerHTML = `
        <div class="complex-sim p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse"></span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Hóa 12 • Chương 8: Kim Loại Chuyển Tiếp & Phức Chất</h4>
            </div>
            <div class="flex flex-wrap gap-1.5">${navBtns}</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 flex flex-col items-center">
              <div class="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner" style="height: 380px;">
                <canvas class="sim-canvas w-full h-full block cursor-grab active:cursor-grabbing"></canvas>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200" id="complex-badge">
                  Đang tải mô phỏng...
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <h5 class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Khảo Sát Phức Chất</span>
                </h5>
                <div class="space-y-1.5" id="complex-controls"></div>
              </div>

              <div class="p-3.5 rounded-xl bg-violet-50/70 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800/50 space-y-1.5">
                <div class="font-bold text-violet-900 dark:text-violet-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-gem text-violet-500"></i> Công Thức & Màu Sắc
                </div>
                <div id="complex-equation" class="font-mono text-[11px] text-violet-950 dark:text-violet-200 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-2 rounded-lg border border-violet-100 dark:border-violet-900"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.updateControls();
    }

    initCanvas() {
      this.canvas = this.container.querySelector('.sim-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = (rect.width || 600) * dpr;
      this.canvas.height = (rect.height || 380) * dpr;
      this.ctx.scale(dpr, dpr);
      this.w = rect.width || 600;
      this.h = rect.height || 380;
    }

    updateControls() {
      const panel = this.container.querySelector('#complex-controls');
      const badge = this.container.querySelector('#complex-badge');
      const eq = this.container.querySelector('#complex-equation');
      if (!panel) return;

      if (this.mode === 'oxidation-states') {
        panel.innerHTML = `
          <p class="text-[11px] text-slate-500">Cấu hình electron phân lớp 3d cho phép kim loại chuyển tiếp có nhiều trạng thái oxi hóa:</p>
          <div class="space-y-1">
            <p>• <strong>Cr:</strong> +2 (xanh lơ), +3 (xanh lục), +6 (vàng/da cam)</p>
            <p>• <strong>Mn:</strong> +2 (hồng nhạt), +4 (nâu đen), +7 (tím thẫm)</p>
            <p>• <strong>Fe:</strong> +2 (xanh nhạt), +3 (vàng nâu)</p>
            <p>• <strong>Cu:</strong> +1 (đỏ gạch), +2 (xanh lam)</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-palette"></i> Màu sắc ion dung dịch & Trạng thái oxi hóa 3d`;
        eq.innerHTML = 'MnO₄⁻ (+7, tím thẫm) + 5Fe²⁺ + 8H⁺ \u2192 Mn²⁺ (+2, không màu) + 5Fe³⁺ + 4H₂O';
      } else if (this.mode === 'complex-geometry-3d') {
        panel.innerHTML = `
          <p class="text-[11px] text-slate-500">Kéo chuột để xoay cấu trúc hình học bát diện của phức chất [Fe(CN)₆]³⁻ hoặc [Co(NH₃)₆]³⁺.</p>
          <div class="space-y-1">
            <p>• <strong>Nguyên tử trung tâm:</strong> Cation kim loại chuyển tiếp (Fe³⁺, Co³⁺, Cu²⁺)</p>
            <p>• <strong>Phối tử:</strong> Phân tử hoặc ion có cặp electron tự do (CN⁻, NH₃, H₂O, Cl⁻)</p>
            <p>• <strong>Số phối trí:</strong> Số liên kết phối trí quanh tâm (thường là 6 bát diện hoặc 4 tứ diện/vuông phẳng).</p>
          </div>
        `;
        badge.innerHTML = `<i class="fa-solid fa-gem"></i> Cấu trúc phức chất bát diện 3D xoay được`;
        eq.innerHTML = '[Fe(CN)₆]³⁻: Tâm Fe³⁺, 6 phối tử cyano CN⁻ tạo liên kết cho - nhận.';
      } else {
        panel.innerHTML = `
          <button type="button" id="btn-add-nh3" class="w-full py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-droplet"></i> Nhỏ Từng Giọt Dung Dịch NH₃ Vào CuSO₄
          </button>
          <p class="text-[11px] text-slate-500 mt-2">Ban đầu: Kết tủa xanh nhạt Cu(OH)₂.<br>Dư NH₃: Kết tủa tan tạo dung dịch phức [Cu(NH₃)₄(H₂O)₂]²⁺ màu xanh lam thẫm.</p>
        `;
        badge.innerHTML = `<i class="fa-solid fa-vial-circle-check"></i> Tạo phức chất [Cu(NH₃)₄(H₂O)₂]²⁺ màu xanh lam thẫm`;
        eq.innerHTML = 'Cu(OH)₂\u2193 + 4NH₃ + 2H₂O \u2192 [Cu(NH₃)₄(H₂O)₂]²⁺ + 2OH⁻<br><span class="text-[10px] text-slate-500">Phản ứng đặc trưng nhận biết Cu²⁺ hoặc điều chế tơ đồng-ammoniac.</span>';
      }

      this.bindControlEvents();
    }

    bindEvents() {
      this.container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.mode = e.target.getAttribute('data-mode');
          this.container.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
            b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
          });
          e.target.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
          this.updateControls();
        });
      });

      // Mouse drag rotation
      let isDragging = false;
      let lastX, lastY;
      if (this.canvas) {
        this.canvas.addEventListener('mousedown', (e) => {
          isDragging = true;
          lastX = e.clientX;
          lastY = e.clientY;
        });
        typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          const dx = e.clientX - lastX;
          const dy = e.clientY - lastY;
          this.rotY += dx * 0.01;
          this.rotX += dy * 0.01;
          lastX = e.clientX;
          lastY = e.clientY;
        });
        typeof window !== 'undefined' && window.addEventListener && window.addEventListener('mouseup', () => { isDragging = false; });
      }
      typeof window !== 'undefined' && window.addEventListener && window.addEventListener('resize', () => this.resize());
    }

    bindControlEvents() {
      const btn = this.container.querySelector('#btn-add-nh3');
      if (btn) {
        btn.addEventListener('click', () => {
          this.dropCount = (this.dropCount + 1) % 4;
        });
      }
    }

    startLoop() {
      const loop = () => {
        this.t += 0.02;
        this.rotY += 0.005;
        this.render();
        this.animId = (typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : (cb) => setTimeout(cb, 16)))(loop);
      };
      loop();
    }

    render() {
      if (!this.ctx || !this.w) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, this.w, this.h);

      if (this.mode === 'complex-geometry-3d') {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;
        const r = 75;

        // 6 octahedral ligand positions (±x, ±y, ±z)
        const ligands = [
          [1, 0, 0], [-1, 0, 0],
          [0, 1, 0], [0, -1, 0],
          [0, 0, 1], [0, 0, -1]
        ];

        // Central metal
        const projLigands = ligands.map(v => {
          let x = v[0] * r;
          let y = v[1] * r;
          let z = v[2] * r;

          const y1 = y * Math.cos(this.rotX) - z * Math.sin(this.rotX);
          const z1 = y * Math.sin(this.rotX) + z * Math.cos(this.rotX);
          const x2 = x * Math.cos(this.rotY) + z1 * Math.sin(this.rotY);
          const z2 = -x * Math.sin(this.rotY) + z1 * Math.cos(this.rotY);

          return { x: cx + x2, y: cy + y1, z: z2 };
        });

        // Bonds from center to ligands
        ctx.strokeStyle = '#a78bfa';
        ctx.lineWidth = 2.5;
        projLigands.forEach(p => {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        });

        // Central atom (Fe³⁺)
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Fe³⁺', cx, cy + 4);

        // Ligands (CN⁻)
        projLigands.forEach((p, idx) => {
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();

          ctx.fillStyle = '#0f172a';
          ctx.font = 'bold 9px sans-serif';
          ctx.fillText('CN⁻', p.x, p.y + 3);
        });

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Cấu Trúc Bát Diện [Fe(CN)₆]³⁻ 3D Xoay Được', cx, cy + 120);

      } else if (this.mode === 'complex-formation-color') {
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        // Color transition based on dropCount
        // 0: light blue CuSO4
        // 1: pale blue Cu(OH)2 precipitate
        // 2, 3: deep royal blue complex [Cu(NH3)4]2+
        const colors = [
          'rgba(56, 189, 248, 0.5)',
          'rgba(147, 197, 253, 0.8)',
          'rgba(30, 58, 138, 0.95)',
          'rgba(29, 78, 216, 0.95)'
        ];

        const titles = [
          'Dung Dịch CuSO₄ Ban Đầu (Xanh Lam Nhạt)',
          'Tạo Kết Tủa Cu(OH)₂ (Xanh Nhạt Vẩn Đục)',
          'Phức Tan: [Cu(NH₃)₄(H₂O)₂]²⁺ (Xanh Lam Thẫm)',
          'Dung Dịch Phức Chất Trong Suốt Xanh Thẫm Tuyệt Đẹp'
        ];

        ctx.fillStyle = colors[this.dropCount] || colors[0];
        ctx.beginPath();
        ctx.arc(cx, cy + 20, 80, 0, Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(titles[this.dropCount], cx, cy + 70);

      } else {
        // Oxidation states color cards
        const cx = this.w * 0.5;
        const cy = this.h * 0.5;

        const ions = [
          { name: 'Cr²⁺', color: '#38bdf8', label: 'Xanh lơ' },
          { name: 'Cr³⁺', color: '#10b981', label: 'Xanh lục' },
          { name: 'CrO₄²⁻', color: '#facc15', label: 'Vàng' },
          { name: 'Cr₂O₇²⁻', color: '#ea580c', label: 'Da cam' },
          { name: 'MnO₄⁻', color: '#9333ea', label: 'Tím thẫm' }
        ];

        ions.forEach((ion, idx) => {
          const ix = cx - 160 + idx * 80;
          ctx.fillStyle = ion.color;
          ctx.beginPath();
          ctx.arc(ix, cy, 24, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();

          ctx.fillStyle = '#f8fafc';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(ion.name, ix, cy + 45);
          ctx.font = '10px sans-serif';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(ion.label, ix, cy + 60);
        });
      }
    }

    destroy() {
      if (this.animId) (typeof window !== 'undefined' && window.cancelAnimationFrame ? window.cancelAnimationFrame : (typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : clearTimeout))(this.animId);
      if (this.container) this.container.innerHTML = '';
    }
  }


  return {
    MOLECULE_DB,
    EQUATION_CHALLENGES,
    WaterSynthesisSim,
    MetalAcidSim,
    PrecipitationSim,
    MoleculeExplorerArena,
    AtomicStructureSim,
    PeriodicTableSim,
    ChemicalBondingSim,
    RedoxReactionSim,
    ChemicalEnergySim,
    ReactionRateSim,
    HalogenChemistrySim,
    ChemicalEquilibriumSim,
    NitrogenSulfurSim,
    OrganicBasicsSim,
    HydrocarbonSim,
    HalogenAlcoholPhenolSim,
    CarbonylCarboxylicSim,
    EsterLipidSim,
    CarbohydrateSim,
    AmineAminoAcidProteinSim,
    PolymerMaterialsSim,
    ElectrochemistrySim,
    GeneralMetalsSim,
    MainGroupMetalsSim,
    TransitionMetalsComplexSim,
    renderMolecule3D,
    create(type, container, options = {}) {
      switch ((type || '').toLowerCase()) {
        case 'atomic':
        case 'atomic-structure':
        case 'rutherford':
        case 'isotope':
        case 'orbital':
          return new AtomicStructureSim(container, options);
        case 'periodic':
        case 'periodic-table':
        case 'trends':
        case 'oxide':
          return new PeriodicTableSim(container, options);
        case 'bonding':
        case 'chemical-bonding':
        case 'octet':
        case 'ionic':
        case 'covalent':
        case 'hydrogen':
          return new ChemicalBondingSim(container, options);
        case 'redox':
        case 'redox-reaction':
        case 'electron-balance':
          return new RedoxReactionSim(container, options);
        case 'energy':
        case 'chemical-energy':
        case 'enthalpy':
          return new ChemicalEnergySim(container, options);
        case 'kinetics':
        case 'reaction-rate':
        case 'collision':
          return new ReactionRateSim(container, options);
        case 'halogen':
        case 'halide':
        case 'halogen-chemistry':
          return new HalogenChemistrySim(container, options);
        case 'equilibrium':
        case 'lechatelier':
        case 'titration':
        case 'acid-base':
          return new ChemicalEquilibriumSim(container, options);
        case 'nitrogen':
        case 'sulfur':
        case 'haber-bosch':
        case 'acid-rain':
        case 'ammonia':
          return new NitrogenSulfurSim(container, options);
        case 'organic-basics':
        case 'purification':
        case 'spectroscopy':
        case 'isomers':
          return new OrganicBasicsSim(container, options);
        case 'hydrocarbon':
        case 'alkane':
        case 'alkene':
        case 'alkyne':
        case 'arene':
          return new HydrocarbonSim(container, options);
        case 'halogen-alcohol-phenol':
        case 'alcohol':
        case 'phenol':
        case 'haloalkane':
        case 'polyalcohol':
          return new HalogenAlcoholPhenolSim(container, options);
        case 'carbonyl':
        case 'carboxylic':
        case 'aldehyde':
        case 'esterification':
        case 'tollens':
          return new CarbonylCarboxylicSim(container, options);
        // HÓA HỌC 12 ALIASES
        case 'ester':
        case 'lipid':
        case 'saponification':
        case 'micelle':
          return new EsterLipidSim(container, options);
        case 'carbohydrate':
        case 'glucose':
        case 'fructose':
        case 'saccharose':
        case 'maltose':
        case 'starch':
        case 'cellulose':
          return new CarbohydrateSim(container, options);
        case 'amine':
        case 'amino-acid':
        case 'peptide':
        case 'protein':
        case 'enzyme':
        case 'biuret':
          return new AmineAminoAcidProteinSim(container, options);
        case 'polymer':
        case 'polymer-materials':
        case 'composite':
        case 'recycling':
          return new PolymerMaterialsSim(container, options);
        case 'electrochemistry':
        case 'galvanic-cell':
        case 'electrolysis':
        case 'faraday':
          return new ElectrochemistrySim(container, options);
        case 'metals':
        case 'metal-crystal':
        case 'displacement-series':
        case 'corrosion':
          return new GeneralMetalsSim(container, options);
        case 'group-ia':
        case 'group-iia':
        case 'hard-water':
        case 'water-softening':
          return new MainGroupMetalsSim(container, options);
        case 'transition-metals':
        case 'complexes':
        case 'coordination':
          return new TransitionMetalsComplexSim(container, options);


        case 'water':
        case 'h2o':
          return new WaterSynthesisSim(container, options);
        case 'metal-acid':
        case 'metal_acid':
        case 'kim_loai_axit':
          return new MetalAcidSim(container, options);
        case 'precipitation':
        case 'ket_tua':
          return new PrecipitationSim(container, options);
        case 'explorer':
        case 'molecule':
        case 'balancer':
          return new MoleculeExplorerArena(container, options);
        default:
          return new WaterSynthesisSim(container, options);
      }
    }
  };
});
