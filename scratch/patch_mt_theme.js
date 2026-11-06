const fs = require('fs');

['mithuat_7.html', 'art_7.html'].forEach(f => {
  const p = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/' + f;
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('Bulletproof Dark/Light Mode Fallbacks')) {
    const stylePatch = `
    /* Bulletproof Dark/Light Mode Fallbacks */
    html.dark { color-scheme: dark; }
    html.dark body { background-color: #0b0f19 !important; color: #f1f5f9 !important; }
    html.dark .dark\\:bg-gray-850, html.dark .bg-gray-850, html.dark .lesson-section {
      background-color: #151b28 !important;
      border-color: #1e293b !important;
    }
  </style>`;
    c = c.replace(/<\/style>/i, stylePatch);
    fs.writeFileSync(p, c, 'utf8');
    console.log('Added dark mode CSS fallback to', f);
  }
});
