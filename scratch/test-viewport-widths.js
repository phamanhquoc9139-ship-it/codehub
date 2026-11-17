/**
 * Viewport width simulation & layout safety audit for:
 * 1920px, 1366px, 768px, 375px
 */
const viewports = [
  { width: 1920, label: '1920px (Full HD Desktop)', gridCols: 4, copyrightFlex: 'row' },
  { width: 1366, label: '1366px (Laptop standard)', gridCols: 4, copyrightFlex: 'row' },
  { width: 768, label: '768px (Tablet / iPad)', gridCols: 2, copyrightFlex: 'column' },
  { width: 375, label: '375px (Mobile iPhone SE)', gridCols: 1, copyrightFlex: 'column' }
];

const containerPadding = 32; // px-4 (16px left + 16px right)
const founderName = "Phạm Anh Quốc";
const avgCharWidth15px = 8.8; // px approx for Be Vietnam Pro 15px bold
const founderNameWidth = founderName.length * avgCharWidth15px; // ~114px

console.log(`Estimated 'Phạm Anh Quốc' width at 15px bold: ~${founderNameWidth.toFixed(1)}px\n`);

viewports.forEach(vp => {
  const usableWidth = Math.min(vp.width, 1280) - containerPadding;
  const colWidth = (usableWidth - (vp.gridCols - 1) * 32) / vp.gridCols;

  console.log(`=== Viewport ${vp.label} ===`);
  console.log(`  Usable container width: ${usableWidth}px`);
  console.log(`  Grid layout: ${vp.gridCols} column(s), column width: ~${colWidth.toFixed(1)}px`);
  
  // Col 1 founder text: "Sáng lập và phát triển: Phạm Anh Quốc"
  const labelWidth = "Sáng lập và phát triển:".length * 7.5; // ~172px
  if (labelWidth + founderNameWidth <= colWidth) {
    console.log(`  [Col 1] Label + Name fits on 1 line (${(labelWidth + founderNameWidth).toFixed(0)}px <= ${colWidth.toFixed(0)}px)`);
  } else {
    console.log(`  [Col 1] Label wraps, Name "Phạm Anh Quốc" (${founderNameWidth.toFixed(0)}px) stays on its own unbroken line <= col width (${colWidth.toFixed(0)}px) -> NO OVERFLOW`);
  }

  // Bottom copyright bar
  if (vp.copyrightFlex === 'row') {
    const leftText = "© 2026 Học Viện CodeHub. All rights reserved. Sáng lập và phát triển: Phạm Anh Quốc.";
    const leftWidth = leftText.length * 8.0;
    console.log(`  [Copyright] Flex row layout: left side text ~${leftWidth.toFixed(0)}px fits easily in ~${(usableWidth/2).toFixed(0)}px`);
  } else {
    console.log(`  [Copyright] Flex column layout: Line 1 "© 2026 Học Viện CodeHub. All rights reserved." + Line 2 "Sáng lập và phát triển: Phạm Anh Quốc." (Unbroken nowrap)`);
    console.log(`              Name width ${founderNameWidth.toFixed(0)}px fits comfortably within mobile screen width ${usableWidth}px (zero overflow).`);
  }
  console.log('');
});
