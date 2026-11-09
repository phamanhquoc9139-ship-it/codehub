const katex = require('katex');

const formulas = [
  '{}^{235}_{92}U + {}^{1}_{0}n \\to {}^{95}_{38}Sr + {}^{A}_{Z}X + 3\\,{}^{1}_{0}n',
  '{}^{235}_{92}\\text{U} + {}^{1}_{0}\\text{n} \\to {}^{95}_{38}\\text{Sr} + {}^{A}_{Z}\\text{X} + 3\\,{}^{1}_{0}\\text{n}',
  '{}^{14}\\text{C}'
];

for (const f of formulas) {
  try {
    const html = katex.renderToString(f, { throwOnError: true });
    console.log(`SUCCESS: ${f}`);
  } catch (err) {
    console.error(`FAILED: ${f} -> ${err.message}`);
  }
}
