const fs = require('fs');
const path = require('path');

const svgs = require('./toan9_svgs.js');

for (const [key, svgStr] of Object.entries(svgs)) {
  const hasDiv = svgStr.includes('<div') || svgStr.includes('<p') || svgStr.includes('<table');
  const hasForeign = svgStr.includes('<foreignObject');
  if (hasDiv && !hasForeign) {
    console.warn(`BUG in SVG "${key}": contains HTML tags without foreignObject!`);
  } else if (hasDiv && hasForeign) {
    console.log(`SVG "${key}" has HTML inside foreignObject.`);
  } else {
    console.log(`SVG "${key}" uses pure SVG tags.`);
  }
}
