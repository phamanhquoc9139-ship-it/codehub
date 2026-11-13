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
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 1: Phản Ứng Tổng Hợp Nước ($2\\text{H}_2 + \\text{O}_2 \\xrightarrow{t^\\circ} 2\\text{H}_2\\text{O}$)</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-400/20 text-amber-200 border border-amber-300/30">Hóa 10 • Bài 12 & 17</span>
                </div>
                <p class="text-xs text-teal-100/90 mt-0.5">Phá vỡ liên kết $\\text{H–H}, \\text{O=O}$, hình thành liên kết cộng hóa trị phân cực $\\text{O–H}$ & tỏa nhiệt mạnh</p>
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
              <span><strong>Lưu ý an toàn:</strong> Hỗn hợp khí $\\text{H}_2$ và $\\text{O}_2$ tỉ lệ thể tích $2:1$ là hỗn hợp nổ mạnh. Chỉ thực hiện mô phỏng ảo an toàn trên máy tính.</span>
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
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-500 inline-block"></span> Phân tử $\\text{H}_2$</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> Phân tử $\\text{O}_2$</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span> Phân tử $\\text{H}_2\\text{O}$</span>
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
                <strong>H₂O:</strong> Góc liên kết $\\widehat{\\text{HOH}} = 104.5^\\circ$ • Liên kết cộng hóa trị phân cực. Kéo chuột để xoay 360°.
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
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Số mol $\\text{H}_2$ ban đầu</label>
                  <span class="font-bold text-teal-600 dark:text-teal-400" data-disp="nH2">${this.params.nH2.toFixed(1)} mol</span>
                </div>
                <input type="range" data-ctrl="nH2" min="0.2" max="5.0" step="0.2" value="${this.params.nH2}" class="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Số mol $\\text{O}_2$ ban đầu</label>
                  <span class="font-bold text-rose-600 dark:text-rose-400" data-disp="nO2">${this.params.nO2.toFixed(1)} mol</span>
                </div>
                <input type="range" data-ctrl="nO2" min="0.2" max="5.0" step="0.2" value="${this.params.nO2}" class="w-full accent-rose-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nhiệt độ kích hoạt ($T$)</label>
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
                  <span>$\\text{H}_2(g)$ +</span>
                  <input type="number" data-bal="O2" min="1" max="10" value="1" class="w-12 px-2 py-1 text-center rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900">
                  <span>$\\text{O}_2(g)$ $\\xrightarrow{t^\\circ}$</span>
                  <input type="number" data-bal="H2O" min="1" max="10" value="1" class="w-12 px-2 py-1 text-center rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900">
                  <span>$\\text{H}_2\\text{O}(l)$</span>
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
      window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
      window.addEventListener('mouseup', stopDrag);
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

      window.addEventListener('resize', () => this.renderAll());
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
      equation: '\\text{Zn}(s) + 2\\text{HCl}(aq) \\rightarrow \\text{ZnCl}_2(aq) + \\text{H}_2(g)\\uparrow',
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
      equation: '\\text{Mg}(s) + 2\\text{HCl}(aq) \\rightarrow \\text{MgCl}_2(aq) + \\text{H}_2(g)\\uparrow',
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
      equation: '\\text{Fe}(s) + 2\\text{HCl}(aq) \\rightarrow \\text{FeCl}_2(aq) + \\text{H}_2(g)\\uparrow',
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
      equation: '\\text{Cu}(s) + \\text{HCl}(aq) \\rightarrow \\text{Không phản ứng}',
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
                  <h3 class="font-bold text-base sm:text-lg leading-tight">Mô Phỏng 2: Kim Loại Tác Dụng Với Dung Dịch Axit ($\\text{M} + 2\\text{HCl} \\rightarrow \\text{MCl}_2 + \\text{H}_2\\uparrow$)</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white/20 text-white">Hóa 10 • Bài 15 & 19</span>
                </div>
                <p class="text-xs text-amber-100/90 mt-0.5">Khảo sát dãy hoạt động hóa học ($\\text{Mg, Zn, Fe, Cu}$), quá trình nhường – nhận electron và tốc độ thoát khí $\\text{H}_2$</p>
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
                  <i class="fa-solid fa-chart-area text-amber-600"></i> Đồ Thị Thể Tích Khí $\\text{H}_2(t)$ (Đkc 25°C, 1 bar)
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
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Lượng kim loại ($n_M$)</label>
                  <span class="font-bold text-amber-600 dark:text-amber-400" data-disp="nMetal">${this.params.nMetal.toFixed(2)} mol</span>
                </div>
                <input type="range" data-ctrl="nMetal" min="0.05" max="0.80" step="0.05" value="${this.params.nMetal}" class="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nồng độ $\\text{HCl}$ ($C_M$)</label>
                  <span class="font-bold text-blue-600 dark:text-blue-400" data-disp="cAcid">${this.params.cAcid.toFixed(1)} M</span>
                </div>
                <input type="range" data-ctrl="cAcid" min="0.2" max="2.0" step="0.2" value="${this.params.cAcid}" class="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Thể tích dd $\\text{HCl}$ ($V$)</label>
                  <span class="font-bold text-indigo-600 dark:text-indigo-400" data-disp="vAcid">${this.params.vAcid} mL</span>
                </div>
                <input type="range" data-ctrl="vAcid" min="100" max="500" step="50" value="${this.params.vAcid}" class="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <label class="font-semibold text-slate-700 dark:text-slate-300">Nhiệt độ dung dịch ($t^\\circ$)</label>
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

      window.addEventListener('resize', () => this.renderAll());
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
      netIonic: '\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)\\downarrow (\\text{trắng})',
      reactantA: { formula: 'BaCl₂', ion: 'Ba²⁺', ratio: 1 },
      reactantB: { formula: 'Na₂SO₄', ion: 'SO₄²⁻', ratio: 1 },
      precipitate: { formula: 'BaSO₄', molarMass: 233.39, color: '#f1f5f9', border: '#94a3b8', colorName: 'Trắng tinh thể (không tan trong axit)' },
      solutionTint: 'rgba(226, 232, 240, 0.22)'
    },
    AgCl: {
      title: 'AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)',
      netIonic: '\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)\\downarrow (\\text{trắng})',
      reactantA: { formula: 'AgNO₃', ion: 'Ag⁺', ratio: 1 },
      reactantB: { formula: 'NaCl', ion: 'Cl⁻', ratio: 1 },
      precipitate: { formula: 'AgCl', molarMass: 143.32, color: '#f8fafc', border: '#cbd5e1', colorName: 'Trắng kết tủa (hóa xám ngoài ánh sáng)' },
      solutionTint: 'rgba(226, 232, 240, 0.22)'
    },
    CuOH2: {
      title: 'CuSO₄(aq) + 2NaOH(aq) → Cu(OH)₂(s)↓ + Na₂SO₄(aq)',
      netIonic: '\\text{Cu}^{2+}(aq) + 2\\text{OH}^-(aq) \\rightarrow \\text{Cu(OH)}_2(s)\\downarrow (\\text{xanh lam})',
      reactantA: { formula: 'CuSO₄', ion: 'Cu²⁺', ratio: 1 },
      reactantB: { formula: 'NaOH', ion: 'OH⁻', ratio: 2 },
      precipitate: { formula: 'Cu(OH)₂', molarMass: 97.56, color: '#38bdf8', border: '#0284c7', colorName: 'Xanh lam keo' },
      solutionTint: 'rgba(56, 189, 248, 0.22)'
    },
    FeOH3: {
      title: 'FeCl₃(aq) + 3NaOH(aq) → Fe(OH)₃(s)↓ + 3NaCl(aq)',
      netIonic: '\\text{Fe}^{3+}(aq) + 3\\text{OH}^-(aq) \\rightarrow \\text{Fe(OH)}_3(s)\\downarrow (\\text{nâu đỏ})',
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
                  <i class="fa-solid fa-chart-line text-indigo-600"></i> Đồ Thị Khối Lượng Kết Tủa $m_{\\downarrow}$ Theo $V_{\\text{thuốc thử}}$
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

      window.addEventListener('resize', () => this.renderAll());
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
      window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
      window.addEventListener('mouseup', endDrag);

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

      window.addEventListener('resize', () => this.render3D());
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
  return {
    MOLECULE_DB,
    EQUATION_CHALLENGES,
    WaterSynthesisSim,
    MetalAcidSim,
    PrecipitationSim,
    MoleculeExplorerArena,
    renderMolecule3D,
    create(type, container, options = {}) {
      switch ((type || '').toLowerCase()) {
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
