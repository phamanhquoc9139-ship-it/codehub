// scratch/test_format.js
function formatInline(str) {
  if (!str) return '';
  let s = String(str);
  
  // Specific math display block
  if (s.startsWith('$$') && s.endsWith('$$')) {
    const inner = s.slice(2, -2).trim();
    return `<div class="katex-display-box my-3 p-3.5 sm:p-4 rounded-xl bg-teal-50/70 dark:bg-slate-900/60 border border-teal-200/80 dark:border-teal-800/60 text-center font-mono text-base sm:text-lg text-teal-900 dark:text-teal-200 shadow-sm overflow-x-auto">$$${inner}$$</div>`;
  }

  // Markdown bold & italic & code
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  s = s.replace(/\*(.*?)\*/g, '<em class="italic text-teal-700 dark:text-teal-300 font-medium">$1</em>');
  s = s.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-teal-100/80 dark:bg-slate-700 text-teal-800 dark:text-teal-300 font-mono text-xs font-semibold">$1</code>');
  
  // Mathematical and chemical arrows
  s = s.replace(/<=>|<==>/g, ' <span class="font-bold text-teal-600 dark:text-teal-400 font-sans">⇌</span> ');
  s = s.replace(/\s->\s/g, ' <span class="font-bold text-teal-600 dark:text-teal-400 font-sans">→</span> ');
  s = s.replace(/\s=>\s/g, ' <span class="font-bold text-teal-600 dark:text-teal-400 font-sans">⇒</span> ');
  s = s.replace(/\s>>\s/g, ' <span class="font-bold font-sans">≫</span> ');
  s = s.replace(/\s<<\s/g, ' <span class="font-bold font-sans">≪</span> ');

  // Symbols & kinetics
  s = s.replace(/\bDelta H\b/g, 'Δ<i>H</i>');
  s = s.replace(/\bvt = vn\b/g, '<i>v</i><sub>t</sub> = <i>v</i><sub>n</sub>');
  s = s.replace(/\bKc\b/g, '<i>K</i><sub>c</sub>');
  s = s.replace(/\bKw\b/g, '<i>K</i><sub>w</sub>');
  s = s.replace(/\bKa\b/g, '<i>K</i><sub>a</sub>');
  s = s.replace(/\bKb\b/g, '<i>K</i><sub>b</sub>');
  s = s.replace(/10\^-14/g, '10<sup>-14</sup>');
  s = s.replace(/10\^-(\d+)/g, '10<sup>-$1</sup>');

  // Common chemical subscripts
  s = s.replace(/\bCaCO3\b/g, 'CaCO<sub>3</sub>');
  s = s.replace(/\bCO2\b/g, 'CO<sub>2</sub>');
  s = s.replace(/\bH2O\b/g, 'H<sub>2</sub>O');
  s = s.replace(/\bSO2\b/g, 'SO<sub>2</sub>');
  s = s.replace(/\bSO3\b/g, 'SO<sub>3</sub>');
  s = s.replace(/\bNO2\b/g, 'NO<sub>2</sub>');
  s = s.replace(/\bN2O4\b/g, 'N<sub>2</sub>O<sub>4</sub>');
  s = s.replace(/\bNH3\b/g, 'NH<sub>3</sub>');
  s = s.replace(/\bCH4\b/g, 'CH<sub>4</sub>');
  s = s.replace(/\bC2H5OH\b/g, 'C<sub>2</sub>H<sub>5</sub>OH');
  s = s.replace(/\bCH3COOH\b/g, 'CH<sub>3</sub>COOH');
  s = s.replace(/\bH2SO4\b/g, 'H<sub>2</sub>SO<sub>4</sub>');
  s = s.replace(/\bHNO3\b/g, 'HNO<sub>3</sub>');
  s = s.replace(/\bBaSO4\b/g, 'BaSO<sub>4</sub>');
  s = s.replace(/\bNa2CO3\b/g, 'Na<sub>2</sub>CO<sub>3</sub>');
  s = s.replace(/\bNaHCO3\b/g, 'NaHCO<sub>3</sub>');
  s = s.replace(/\bNa2SO4\b/g, 'Na<sub>2</sub>SO<sub>4</sub>');
  s = s.replace(/\bK2CO3\b/g, 'K<sub>2</sub>CO<sub>3</sub>');
  s = s.replace(/\bAl\(OH\)3\b/g, 'Al(OH)<sub>3</sub>');
  s = s.replace(/\bFe\(OH\)3\b/g, 'Fe(OH)<sub>3</sub>');
  s = s.replace(/\bBa\(OH\)2\b/g, 'Ba(OH)<sub>2</sub>');
  s = s.replace(/\bCa\(OH\)2\b/g, 'Ca(OH)<sub>2</sub>');
  s = s.replace(/\bN2\b/g, 'N<sub>2</sub>');
  s = s.replace(/\bO2\b/g, 'O<sub>2</sub>');
  s = s.replace(/\bH2\b/g, 'H<sub>2</sub>');
  s = s.replace(/\bCl2\b/g, 'Cl<sub>2</sub>');
  s = s.replace(/\bBr2\b/g, 'Br<sub>2</sub>');
  s = s.replace(/\bI2\b/g, 'I<sub>2</sub>');

  // Ions
  s = s.replace(/\bAl\^3\+/g, 'Al<sup>3+</sup>');
  s = s.replace(/\bBa\^2\+/g, 'Ba<sup>2+</sup>');
  s = s.replace(/\bCa\^2\+/g, 'Ca<sup>2+</sup>');
  s = s.replace(/\bMg\^2\+/g, 'Mg<sup>2+</sup>');
  s = s.replace(/\bCu\^2\+/g, 'Cu<sup>2+</sup>');
  s = s.replace(/\bFe\^2\+/g, 'Fe<sup>2+</sup>');
  s = s.replace(/\bFe\^3\+/g, 'Fe<sup>3+</sup>');
  s = s.replace(/\bNa\+/g, 'Na<sup>+</sup>');
  s = s.replace(/\bK\+/g, 'K<sup>+</sup>');
  s = s.replace(/\bH\+/g, 'H<sup>+</sup>');
  s = s.replace(/\bOH\-/g, 'OH<sup>-</sup>');
  s = s.replace(/\bCl\-/g, 'Cl<sup>-</sup>');
  s = s.replace(/\bSO4\^2\-/g, 'SO<sub>4</sub><sup>2-</sup>');
  s = s.replace(/\bCO3\^2\-/g, 'CO<sub>3</sub><sup>2-</sup>');
  s = s.replace(/\bHCO3\-/g, 'HCO<sub>3</sub><sup>-</sup>');
  s = s.replace(/\bNH4\+/g, 'NH<sub>4</sub><sup>+</sup>');
  s = s.replace(/\bNO3\-/g, 'NO<sub>3</sub><sup>-</sup>');
  s = s.replace(/\bPO4\^3\-/g, 'PO<sub>4</sub><sup>3-</sup>');
  s = s.replace(/\bCH3COO\-/g, 'CH<sub>3</sub>COO<sup>-</sup>');

  return s;
}

console.log('1:', formatInline('Xét phản ứng thuận nghịch: aA + bB <=> cC + dD'));
console.log('2:', formatInline('Kc >> 1: Cân bằng chuyển dịch mạnh'));
console.log('3:', formatInline('Ví dụ dị thể: CaCO3(s) <=> CaO(s) + CO2(g) => Kc = [CO2].'));
