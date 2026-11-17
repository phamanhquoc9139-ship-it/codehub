const fs = require('fs');
const path = require('path');

const coursesDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';

const fontLinkOld = `<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">`;
const fontLinkNew = `<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">`;

const labFooterCSS = `
    /* ==========================================================================
       CodeHub Lab Footer Redesign (Be Vietnam Pro, Navy Tech, 4-Column Layout)
       ========================================================================== */
    .codehub-lab-footer {
      font-family: 'Be Vietnam Pro', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(180deg, #0a1628 0%, #060e1d 100%);
      color: #E2E8F0;
      line-height: 1.7;
      border-top: 1px solid rgba(56, 189, 248, 0.25);
    }
    .lab-footer-title {
      font-size: 17.5px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.4;
      letter-spacing: 0.01em;
    }
    .lab-footer-logo-title {
      font-size: 21px;
      font-weight: 800;
      color: #FFFFFF;
      line-height: 1.25;
    }
    .lab-footer-text {
      font-size: 15px;
      color: #E2E8F0;
      line-height: 1.7;
    }
    .lab-footer-muted {
      font-size: 14px;
      color: #CBD5E1;
      line-height: 1.7;
    }
    .lab-footer-link {
      font-size: 15px;
      color: #E2E8F0;
      line-height: 1.7;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      padding: 3px 0;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .lab-footer-link:hover {
      color: #38bdf8;
      transform: translateX(4px);
    }
    .lab-footer-link i {
      color: rgba(56, 189, 248, 0.85);
      font-size: 14px;
      width: 16px;
      text-align: center;
      transition: transform 0.2s ease, color 0.2s ease;
      flex-shrink: 0;
    }
    .lab-footer-link:hover i {
      transform: scale(1.15);
      color: #38bdf8;
    }
    .lab-footer-btn-website {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 18px;
      border-radius: 12px;
      background: linear-gradient(135deg, #4f46e5 0%, #2563eb 100%);
      color: #FFFFFF !important;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid rgba(165, 180, 252, 0.35);
      box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .lab-footer-btn-website:hover {
      background: linear-gradient(135deg, #4338ca 0%, #1d4ed8 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(79, 70, 229, 0.5);
      border-color: rgba(199, 210, 254, 0.6);
    }
    .lab-footer-badge {
      font-size: 12px;
      font-weight: 500;
      color: #CBD5E1;
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid rgba(71, 85, 105, 0.6);
      border-radius: 6px;
      padding: 2px 8px;
      line-height: 1.4;
      white-space: nowrap;
    }
    .lab-footer-copyright {
      font-size: 14px;
      color: #CBD5E1;
      line-height: 1.7;
    }
    .lab-footer-founder {
      font-size: 14px;
      color: #E2E8F0;
      font-weight: 500;
      line-height: 1.7;
    }
    .lab-footer-founder-name {
      white-space: nowrap !important;
      font-weight: 700;
      color: #67e8f9;
      display: inline-block;
    }
  </style>`;

function buildFooterHTML(subDesc) {
  return `  <!-- Footer (CodeHub Standard) -->
  <footer aria-label="Thông tin chân trang phòng thực hành CodeHub" class="codehub-lab-footer mt-auto pt-14 pb-10" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        
        <!-- Cột 1: Học Viện CodeHub -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shadow-sm shrink-0">
              <i class="fa-solid fa-code text-lg"></i>
            </span>
            <div>
              <span class="lab-footer-logo-title block tracking-tight">Học Viện <span class="text-cyan-400">CodeHub</span></span>
              <span class="text-xs font-semibold text-cyan-300 tracking-wide block mt-0.5">Học tập – Luyện tập – Sáng tạo</span>
            </div>
          </div>
          <p class="lab-footer-text">
            Nền tảng học tập số tích hợp AI dành cho học sinh từ lớp 1 đến lớp 12. Phòng thực hành khoa học và mô phỏng tương tác chuyên sâu.
          </p>
          <div class="pt-1 space-y-0.5">
            <p class="lab-footer-founder">
              <span class="text-slate-300 font-semibold">Sáng lập và phát triển:</span>
              <span class="lab-footer-founder-name whitespace-nowrap">Phạm Anh Quốc</span>
            </p>
            <p class="lab-footer-muted italic">
              Dự án giáo dục số cá nhân độc lập.
            </p>
          </div>
        </div>

        <!-- Cột 2: Khám phá -->
        <div class="space-y-4">
          <h3 class="lab-footer-title flex items-center gap-2 pb-2.5 border-b border-cyan-400/25">
            <span aria-hidden="true" class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span> Khám phá
          </h3>
          <nav aria-label="Khám phá các khóa học và phòng thực hành">
            <ul class="space-y-3">
              <li>
                <a href="toan_10.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-square-root-variable"></i>
                  <span>Toán 10 (Đại số &amp; Hình học)</span>
                </a>
              </li>
              <li>
                <a href="toan_11.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-chart-line"></i>
                  <span>Toán 11 (Lượng giác &amp; Giải tích)</span>
                </a>
              </li>
              <li>
                <a href="toan_12.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-cube"></i>
                  <span>Toán 12 (Hàm số, Tích phân &amp; Oxyz)</span>
                </a>
              </li>
              <li>
                <a href="physics_lab.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-atom"></i>
                  <span>Phòng Thí Nghiệm Vật Lí Ảo</span>
                </a>
              </li>
              <li>
                <a href="chemistry_lab.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-flask"></i>
                  <span>Phòng Thí Nghiệm Hóa Học Ảo</span>
                </a>
              </li>
              <li>
                <a href="math_lab.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-shapes"></i>
                  <span>Phòng Thực Hành Toán Học Ảo</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Cột 3: Hỗ trợ & Giới thiệu -->
        <div class="space-y-4">
          <h3 class="lab-footer-title flex items-center gap-2 pb-2.5 border-b border-cyan-400/25">
            <span aria-hidden="true" class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span> Hỗ trợ &amp; Giới thiệu
          </h3>
          <nav aria-label="Thông tin hỗ trợ và chính sách">
            <ul class="space-y-3">
              <li>
                <a href="../about.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-circle-info"></i>
                  <span>Giới thiệu CodeHub</span>
                </a>
              </li>
              <li>
                <a href="../guide.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-book-open"></i>
                  <span>Hướng dẫn sử dụng</span>
                </a>
              </li>
              <li>
                <a href="../privacy.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-shield-halved"></i>
                  <span>Chính sách bảo mật</span>
                </a>
              </li>
              <li>
                <a href="../terms.html" class="lab-footer-link group">
                  <i aria-hidden="true" class="fa-solid fa-file-contract"></i>
                  <span>Điều khoản sử dụng</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Cột 4: Liên hệ & Phản hồi -->
        <div class="space-y-4">
          <h3 class="lab-footer-title flex items-center gap-2 pb-2.5 border-b border-cyan-400/25">
            <span aria-hidden="true" class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span> Liên hệ &amp; Phản hồi
          </h3>
          <p class="lab-footer-text">
            Học sinh và thầy cô có thể gửi góp ý, báo lỗi thí nghiệm và đề xuất bài học qua kênh phản hồi trực tuyến của CodeHub.
          </p>
          <div class="pt-1">
            <a href="https://codehub.io.vn/" target="_blank" rel="noopener noreferrer" class="lab-footer-btn-website">
              <i class="fa-solid fa-globe text-base"></i>
              <span>Website: codehub.io.vn</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-75"></i>
            </a>
          </div>
          <div class="pt-1">
            <div class="flex items-center justify-between gap-2.5 lab-footer-muted">
              <span class="inline-flex items-center gap-2">
                <i class="fa-solid fa-envelope text-cyan-400/70 text-xs"></i>
                <span>Email hỗ trợ</span>
              </span>
              <span class="lab-footer-badge">contact@codehub.io.vn</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Dòng bản quyền & Người sáng lập -->
      <div class="mt-12 pt-6 border-t border-slate-800/90 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
        <p class="lab-footer-copyright leading-relaxed">
          <span class="block sm:inline">© <span class="lab-footer-year">2026</span> Học Viện CodeHub. All rights reserved.</span>
          <span class="hidden sm:inline"> • </span>
          <span class="block sm:inline mt-1 sm:mt-0">Sáng lập và phát triển: <span class="lab-footer-founder-name whitespace-nowrap">Phạm Anh Quốc</span>.</span>
        </p>
        <p class="lab-footer-muted text-xs">
          ${subDesc}
        </p>
      </div>
    </div>
    <script>
      (function () {
        var yearEls = document.querySelectorAll('.lab-footer-year');
        var currentYear = new Date().getFullYear();
        var yStr = String(currentYear >= 2026 ? currentYear : 2026);
        yearEls.forEach(function (el) { el.textContent = yStr; });
      })();
    </script>
  </footer>`;
}

const labs = [
  {
    file: 'math_lab.html',
    desc: 'Hệ thống phòng thực hành Toán học tương tác HTML5 Canvas &amp; KaTeX • Không dùng API trả phí'
  },
  {
    file: 'physics_lab.html',
    desc: 'Hệ thống phòng thí nghiệm Vật lí ảo tương tác HTML5 Canvas &amp; JavaScript • Không dùng API trả phí • Tối ưu 60 FPS'
  },
  {
    file: 'chemistry_lab.html',
    desc: 'Hệ thống phòng thí nghiệm Hóa học ảo 2D/3D &amp; SVG • Không dùng API trả phí • Tối ưu 60 FPS'
  }
];

labs.forEach(lab => {
  const filePath = path.join(coursesDir, lab.file);
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Update font in <head>
  if (html.includes(fontLinkOld)) {
    html = html.replace(fontLinkOld, fontLinkNew);
    console.log(`[${lab.file}] Font link updated in <head>`);
  } else if (!html.includes('Be+Vietnam+Pro')) {
    html = html.replace('</head>', `  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap">\n</head>`);
    console.log(`[${lab.file}] Be Vietnam Pro stylesheet added to <head>`);
  }

  // 2. Ensure CSS is up to date
  const styleStart = html.indexOf('<style>');
  const styleEnd = html.indexOf('</style>', styleStart) + 8;
  if (html.includes('.codehub-lab-footer')) {
    // Replace old .codehub-lab-footer CSS block
    const cssStart = html.indexOf('/* ==========================================================================\n       CodeHub Lab Footer Redesign');
    if (cssStart !== -1) {
      const cssEnd = html.indexOf('</style>', cssStart);
      html = html.substring(0, cssStart) + labFooterCSS.replace('<style>', '').replace('</style>', '') + html.substring(cssEnd);
      console.log(`[${lab.file}] Existing lab footer CSS updated with .lab-footer-founder-name`);
    }
  } else {
    html = html.replace('</style>', labFooterCSS);
    console.log(`[${lab.file}] Footer CSS injected into <style>`);
  }

  // 3. Replace <footer>...</footer>
  const fStart = html.indexOf('<footer');
  const fEnd = html.indexOf('</footer>', fStart) + 9;
  if (fStart !== -1 && fEnd > fStart) {
    const newFooter = buildFooterHTML(lab.desc);
    html = html.substring(0, fStart) + newFooter + html.substring(fEnd);
    console.log(`[${lab.file}] <footer> block replaced successfully with nowrap founder name`);
  } else {
    console.error(`[${lab.file}] Could not find <footer> block!`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`[${lab.file}] Saved updated file (${html.length} bytes).`);
});
