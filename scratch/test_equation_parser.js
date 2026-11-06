const fs = require('fs');

function parseBlocksFixed(rawText) {
  const lines = rawText.split('\n');
  const blocks = [];
  let currentBlock = null;
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();
    if (!trimmed) {
      i++;
      continue;
    }

    // Check table
    if (trimmed.startsWith('|')) {
      if (currentBlock && currentBlock.type === 'table') {
        currentBlock.lines.push(trimmed);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: 'table', lines: [trimmed] };
      }
      i++;
      continue;
    }

    // Section header: ### Title
    const h3Match = /^###\s+(.*)$/.exec(trimmed);
    if (h3Match) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = null;
      blocks.push({
        type: 'section_header',
        title: h3Match[1].trim()
      });
      i++;
      continue;
    }

    // Display LaTeX equation: starts with \[ or $$
    if (trimmed.startsWith('\\[') || trimmed.startsWith('$$')) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      
      const isBracket = trimmed.startsWith('\\[');
      const closeDelim = isBracket ? '\\]' : '$$';

      // Check if it's already a complete single-line equation: e.g. "\[ a = b \]"
      if (isBracket && trimmed.length > 2 && trimmed.endsWith('\\]')) {
        blocks.push({ type: 'equation', math: trimmed });
        i++;
        continue;
      }
      if (!isBracket && trimmed.length > 2 && trimmed.slice(2).includes('$$')) {
        blocks.push({ type: 'equation', math: trimmed });
        i++;
        continue;
      }

      // Multi-line equation: collect all lines until closing delimiter
      let eqLines = [trimmed];
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();
        eqLines.push(nextTrimmed);
        if (nextTrimmed.includes(closeDelim)) {
          i++;
          break;
        }
        i++;
      }
      blocks.push({
        type: 'equation',
        math: eqLines.join('\n')
      });
      continue;
    }

    // Bullet with bold term: - **Term:** Desc
    const bulletBold = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletBold) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletBold[1].replace(/[:\s]+$/, '').trim(),
        lead: bulletBold[2].trim()
      };
      i++;
      continue;
    }

    // Numbered item: 1. text
    const numMatch = /^(\d+)\.\s+(.*)$/.exec(trimmed);
    if (numMatch) {
      if (currentBlock && currentBlock.type === 'numbered_list') {
        currentBlock.items.push({ num: numMatch[1], text: numMatch[2].trim() });
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'numbered_list',
          items: [{ num: numMatch[1], text: numMatch[2].trim() }]
        };
      }
      i++;
      continue;
    }

    // Plain bullet: - text
    const plainBullet = /^[-*]\s+(.*)$/.exec(trimmed);
    if (plainBullet) {
      const content = plainBullet[1].trim();
      if (currentBlock && currentBlock.type === 'bullet_list') {
        currentBlock.items.push(content);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'bullet_list',
          items: [content]
        };
      }
      i++;
      continue;
    }

    // Standalone bold line: **Title**
    const standaloneBold = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (standaloneBold && standaloneBold[1].length < 50) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: standaloneBold[1].trim(),
        lead: standaloneBold[2] ? standaloneBold[2].trim() : ''
      };
      i++;
      continue;
    }

    // Regular paragraph
    if (currentBlock && currentBlock.type === 'paragraph') {
      currentBlock.lead += ' ' + trimmed;
    } else {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'paragraph',
        lead: trimmed
      };
    }
    i++;
  }

  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

// Test on Lesson 3
const data = JSON.parse(fs.readFileSync('scratch/vatly10_parsed_raw.json', 'utf8'));
const b3Blocks = parseBlocksFixed(data.lessonsData[3].body);

console.log('Total blocks in Lesson 3:', b3Blocks.length);
b3Blocks.forEach((b, idx) => {
  console.log(`Block #${idx}: type=${b.type}`, b.type === 'equation' ? `math="${b.math}"` : (b.term || b.title || (b.lead ? b.lead.substring(0, 40) : '')));
});

module.exports = { parseBlocksFixed };
