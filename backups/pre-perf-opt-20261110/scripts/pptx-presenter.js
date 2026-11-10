/**
 * CodeHub PowerPoint & Presentation Studio (Client-side PPTX/PDF Presenter)
 * Only enabled for authenticated Supabase users.
 */
(function () {
  const DB_NAME = 'CodeHubPptxDB';
  const DB_VERSION = 1;
  const STORE_NAME = 'decks';

  let currentUser = null;
  let currentSlides = []; // Array of { html, bg, notes, widthEmu, heightEmu }
  let currentSlideIdx = 0;
  let currentDeckName = '';
  let currentDeckType = 'pptx'; // 'pptx' | 'pdf'
  let currentPdfUrl = null;
  let activeBlobUrls = [];
  let laserEnabled = false;
  let timerSeconds = 0;
  let timerInterval = null;
  let timerRunning = false;

  // --- IndexedDB Helpers ---
  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('userId', 'userId', { unique: false });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function saveDeckToDB(deck) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(deck);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function getDecksByUser(userId) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const idx = tx.objectStore(STORE_NAME).index('userId');
      const req = idx.getAll(userId);
      req.onsuccess = () => resolve((req.result || []).sort((a, b) => b.addedAt - a.addedAt));
      req.onerror = () => reject(req.error);
    });
  }

  async function getDeckById(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function deleteDeckById(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  // --- Utility Helpers ---
  function escapeHtml(str = '') {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function formatBytes(bytes) {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function formatTimer(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  }

  function revokeActiveBlobs() {
    activeBlobUrls.forEach((url) => {
      try { URL.revokeObjectURL(url); } catch (_) {}
    });
    activeBlobUrls = [];
    if (currentPdfUrl) {
      try { URL.revokeObjectURL(currentPdfUrl); } catch (_) {}
      currentPdfUrl = null;
    }
  }

  function showStatusToast(msg, isError = false) {
    const toast = document.getElementById('ppt-status-msg');
    if (!toast) return;
    toast.className = `mt-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 ${
      isError
        ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
        : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
    }`;
    toast.innerHTML = `<i class="fa-solid ${isError ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i> <span>${escapeHtml(msg)}</span>`;
    toast.classList.remove('hidden');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.add('hidden'), 5000);
  }

  // --- XML / PPTX Parser ---
  function getElementsByLocalName(parent, localName) {
    if (!parent) return [];
    const res = [];
    const all = parent.getElementsByTagName('*');
    for (let i = 0; i < all.length; i++) {
      if (all[i].localName === localName) res.push(all[i]);
    }
    return res;
  }

  function getFirstByLocalName(parent, localName) {
    if (!parent) return null;
    const all = parent.getElementsByTagName('*');
    for (let i = 0; i < all.length; i++) {
      if (all[i].localName === localName) return all[i];
    }
    return null;
  }

  function getDirectChildByLocalName(parent, localName) {
    if (!parent) return null;
    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].localName === localName) return parent.children[i];
    }
    return null;
  }

  function extractHexColor(node) {
    if (!node) return null;
    const srgb = getFirstByLocalName(node, 'srgbClr');
    if (srgb && srgb.getAttribute('val')) {
      return '#' + srgb.getAttribute('val');
    }
    const scheme = getFirstByLocalName(node, 'schemeClr');
    if (scheme) {
      const val = scheme.getAttribute('val');
      const map = {
        tx1: '#1e293b', dk1: '#0f172a',
        tx2: '#475569', dk2: '#334155',
        bg1: '#ffffff', lt1: '#ffffff',
        bg2: '#f1f5f9', lt2: '#e2e8f0',
        accent1: '#2563eb', accent2: '#ea580c',
        accent3: '#64748b', accent4: '#eab308',
        accent5: '#0ea5e9', accent6: '#16a34a'
      };
      if (map[val]) return map[val];
    }
    return null;
  }

  function resolveRelPath(baseDir, target) {
    if (!target) return '';
    if (target.startsWith('/')) return target.slice(1);
    const parts = (baseDir + '/' + target).split('/');
    const stack = [];
    for (const p of parts) {
      if (!p || p === '.') continue;
      if (p === '..') stack.pop();
      else stack.push(p);
    }
    return stack.join('/');
  }

  async function parsePptxBuffer(arrayBuffer) {
    if (typeof window.JSZip === 'undefined') {
      throw new Error('Thư viện giải nén JSZip chưa được tải. Vui lòng kiểm tra kết nối mạng.');
    }
    revokeActiveBlobs();
    const zip = await window.JSZip.loadAsync(arrayBuffer);
    const parser = new DOMParser();

    // 1. Read presentation.xml for slide size and order
    let slideWidth = 12192000; // Default 16:9 widescreen
    let slideHeight = 6858000;
    let slidePaths = [];

    const presFile = zip.file('ppt/presentation.xml');
    const presRelsFile = zip.file('ppt/_rels/presentation.xml.rels');

    if (presFile) {
      const presXml = parser.parseFromString(await presFile.async('string'), 'application/xml');
      const sldSz = getFirstByLocalName(presXml, 'sldSz');
      if (sldSz) {
        const cx = parseInt(sldSz.getAttribute('cx'), 10);
        const cy = parseInt(sldSz.getAttribute('cy'), 10);
        if (cx > 0 && cy > 0) {
          slideWidth = cx;
          slideHeight = cy;
        }
      }

      const relMap = {};
      if (presRelsFile) {
        const relsXml = parser.parseFromString(await presRelsFile.async('string'), 'application/xml');
        const rels = getElementsByLocalName(relsXml, 'Relationship');
        rels.forEach((r) => {
          relMap[r.getAttribute('Id')] = resolveRelPath('ppt', r.getAttribute('Target'));
        });
      }

      const sldIds = getElementsByLocalName(presXml, 'sldId');
      sldIds.forEach((sid) => {
        const rId = sid.getAttribute('r:id') || sid.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships', 'id');
        if (rId && relMap[rId]) slidePaths.push(relMap[rId]);
      });
    }

    // Fallback natural order if sldIdList empty
    if (!slidePaths.length) {
      slidePaths = Object.keys(zip.files)
        .filter((name) => /^ppt\/slides\/slide\d+\.xml$/i.test(name))
        .sort((a, b) => {
          const na = parseInt(a.match(/\d+/)[0], 10);
          const nb = parseInt(b.match(/\d+/)[0], 10);
          return na - nb;
        });
    }

    if (!slidePaths.length) {
      throw new Error('Không tìm thấy Slide nào bên trong tệp PowerPoint (.pptx) này.');
    }

    const slides = [];

    for (let sIdx = 0; sIdx < slidePaths.length; sIdx++) {
      const slidePath = slidePaths[sIdx];
      const slideFile = zip.file(slidePath);
      if (!slideFile) continue;

      const slideXml = parser.parseFromString(await slideFile.async('string'), 'application/xml');

      // Relationships for this slide (images, notes)
      const slideFileName = slidePath.split('/').pop();
      const relsPath = `ppt/slides/_rels/${slideFileName}.rels`;
      const slideRels = {};
      let notesPath = null;
      const relsFile = zip.file(relsPath);
      if (relsFile) {
        const rXml = parser.parseFromString(await relsFile.async('string'), 'application/xml');
        getElementsByLocalName(rXml, 'Relationship').forEach((r) => {
          const target = resolveRelPath('ppt/slides', r.getAttribute('Target'));
          slideRels[r.getAttribute('Id')] = target;
          if ((r.getAttribute('Type') || '').includes('notesSlide')) {
            notesPath = target;
          }
        });
      }

      // Extract Speaker Notes
      let notesText = '';
      if (notesPath && zip.file(notesPath)) {
        const notesXml = parser.parseFromString(await zip.file(notesPath).async('string'), 'application/xml');
        const spNodes = getElementsByLocalName(notesXml, 'sp');
        const noteChunks = [];
        spNodes.forEach((sp) => {
          const ph = getFirstByLocalName(sp, 'ph');
          if (ph && ph.getAttribute('type') === 'sldNum') return;
          const ps = getElementsByLocalName(sp, 'p');
          ps.forEach((p) => {
            const texts = getElementsByLocalName(p, 't').map((t) => t.textContent).join('');
            if (texts.trim()) noteChunks.push(texts.trim());
          });
        });
        notesText = noteChunks.join('\n');
      }

      // Slide Background
      let slideBg = '#ffffff';
      const bgNode = getFirstByLocalName(slideXml, 'bg');
      if (bgNode) {
        const bgColor = extractHexColor(bgNode);
        if (bgColor) slideBg = bgColor;
      }

      // Parse spTree elements
      const spTree = getFirstByLocalName(slideXml, 'spTree');
      let elementsHtml = '';

      if (spTree) {
        for (let c = 0; c < spTree.children.length; c++) {
          const child = spTree.children[c];
          const tag = child.localName;

          if (tag === 'sp') {
            elementsHtml += renderShapeXml(child, slideWidth, slideHeight);
          } else if (tag === 'pic') {
            elementsHtml += await renderPicXml(child, zip, slideRels, slideWidth, slideHeight);
          } else if (tag === 'graphicFrame') {
            elementsHtml += renderGraphicFrameXml(child, slideWidth, slideHeight);
          } else if (tag === 'grpSp') {
            // Simple group flattening
            const subShapes = getElementsByLocalName(child, 'sp');
            for (const sub of subShapes) {
              elementsHtml += renderShapeXml(sub, slideWidth, slideHeight);
            }
          }
        }
      }

      slides.push({
        index: sIdx + 1,
        bg: slideBg,
        html: elementsHtml || `<div class="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">Slide ${sIdx + 1} (Trống)</div>`,
        notes: notesText,
        widthEmu: slideWidth,
        heightEmu: slideHeight
      });
    }

    return slides;
  }

  function extractBoxMetrics(node, slideWidth, slideHeight) {
    const xfrm = getFirstByLocalName(node, 'xfrm');
    if (!xfrm) return null;
    const off = getDirectChildByLocalName(xfrm, 'off');
    const ext = getDirectChildByLocalName(xfrm, 'ext');
    if (!off || !ext) return null;
    const x = parseInt(off.getAttribute('x') || '0', 10);
    const y = parseInt(off.getAttribute('y') || '0', 10);
    const cx = parseInt(ext.getAttribute('cx') || '0', 10);
    const cy = parseInt(ext.getAttribute('cy') || '0', 10);
    if (cx <= 0 || cy <= 0) return null;
    return {
      left: (x / slideWidth) * 100,
      top: (y / slideHeight) * 100,
      width: (cx / slideWidth) * 100,
      height: (cy / slideHeight) * 100
    };
  }

  function renderShapeXml(sp, slideWidth, slideHeight) {
    const spPr = getDirectChildByLocalName(sp, 'spPr');
    const box = extractBoxMetrics(spPr || sp, slideWidth, slideHeight);
    if (!box) return '';

    let bgStyle = '';
    if (spPr) {
      const solidFill = getDirectChildByLocalName(spPr, 'solidFill');
      if (solidFill) {
        const hex = extractHexColor(solidFill);
        if (hex) bgStyle = `background-color:${hex};`;
      }
      const ln = getDirectChildByLocalName(spPr, 'ln');
      if (ln) {
        const lnColor = extractHexColor(ln);
        if (lnColor) bgStyle += `border:1.5px solid ${lnColor};`;
      }
    }

    const txBody = getDirectChildByLocalName(sp, 'txBody');
    let textHtml = '';
    if (txBody) {
      const ph = getFirstByLocalName(sp, 'ph');
      const phType = ph ? ph.getAttribute('type') || '' : '';
      const isTitle = phType === 'title' || phType === 'ctrTitle';
      const defaultPt = isTitle ? 36 : 18;

      const paragraphs = [];
      for (let i = 0; i < txBody.children.length; i++) {
        if (txBody.children[i].localName === 'p') paragraphs.push(txBody.children[i]);
      }

      paragraphs.forEach((p) => {
        const pPr = getDirectChildByLocalName(p, 'pPr');
        let align = isTitle && phType === 'ctrTitle' ? 'center' : 'left';
        let hasBullet = false;
        if (pPr) {
          const algn = pPr.getAttribute('algn');
          if (algn === 'ctr') align = 'center';
          else if (algn === 'r') align = 'right';
          else if (algn === 'just') align = 'justify';
          if (getDirectChildByLocalName(pPr, 'buChar') || getDirectChildByLocalName(pPr, 'buAutoNum')) {
            hasBullet = true;
          }
        }

        let runsHtml = '';
        for (let r = 0; r < p.children.length; r++) {
          const rc = p.children[r];
          if (rc.localName === 'r' || rc.localName === 'fld') {
            const tNode = getDirectChildByLocalName(rc, 't');
            if (!tNode) continue;
            const txt = tNode.textContent;
            const rPr = getDirectChildByLocalName(rc, 'rPr');
            let pt = defaultPt;
            let bold = isTitle;
            let italic = false;
            let underline = false;
            let color = '#1e293b';

            if (rPr) {
              const sz = parseInt(rPr.getAttribute('sz') || '0', 10);
              if (sz > 0) pt = sz / 100;
              if (rPr.getAttribute('b') === '1') bold = true;
              else if (rPr.getAttribute('b') === '0') bold = false;
              if (rPr.getAttribute('i') === '1') italic = true;
              if (rPr.getAttribute('u') && rPr.getAttribute('u') !== 'none') underline = true;
              const fillColor = extractHexColor(getDirectChildByLocalName(rPr, 'solidFill'));
              if (fillColor) color = fillColor;
            }

            // Responsive font size in cqw based on slide width in EMUs
            const cqw = Math.max(0.9, ((pt * 12700) / slideWidth) * 100).toFixed(2);
            const styles = [
              `font-size:${cqw}cqw`,
              `color:${color}`,
              bold ? 'font-weight:700' : '',
              italic ? 'font-style:italic' : '',
              underline ? 'text-decoration:underline' : ''
            ].filter(Boolean).join(';');

            runsHtml += `<span style="${styles}">${escapeHtml(txt)}</span>`;
          } else if (rc.localName === 'br') {
            runsHtml += '<br/>';
          }
        }

        if (runsHtml) {
          const bulletPrefix = hasBullet ? '<span style="margin-right:0.4em;opacity:0.75;">•</span>' : '';
          textHtml += `<div style="text-align:${align};line-height:1.28;margin-bottom:0.25em;">${bulletPrefix}${runsHtml}</div>`;
        }
      });
    }

    if (!bgStyle && !textHtml) return '';

    return `<div style="position:absolute;left:${box.left.toFixed(2)}%;top:${box.top.toFixed(2)}%;width:${box.width.toFixed(2)}%;height:${box.height.toFixed(2)}%;${bgStyle}padding:0.5% 1%;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;">${textHtml}</div>`;
  }

  async function renderPicXml(pic, zip, slideRels, slideWidth, slideHeight) {
    const spPr = getDirectChildByLocalName(pic, 'spPr');
    const box = extractBoxMetrics(spPr || pic, slideWidth, slideHeight);
    if (!box) return '';

    const blip = getFirstByLocalName(pic, 'blip');
    if (!blip) return '';
    const rId = blip.getAttribute('r:embed') || blip.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships', 'embed');
    const targetPath = slideRels[rId];
    if (!targetPath) return '';

    const mediaFile = zip.file(targetPath);
    if (!mediaFile) return '';

    const blob = await mediaFile.async('blob');
    const url = URL.createObjectURL(blob);
    activeBlobUrls.push(url);

    return `<div style="position:absolute;left:${box.left.toFixed(2)}%;top:${box.top.toFixed(2)}%;width:${box.width.toFixed(2)}%;height:${box.height.toFixed(2)}%;overflow:hidden;"><img src="${url}" alt="Slide image" style="width:100%;height:100%;object-fit:contain;display:block;"/></div>`;
  }

  function renderGraphicFrameXml(gf, slideWidth, slideHeight) {
    const box = extractBoxMetrics(gf, slideWidth, slideHeight);
    if (!box) return '';
    const tbl = getFirstByLocalName(gf, 'tbl');
    if (!tbl) return '';

    const rows = getElementsByLocalName(tbl, 'tr');
    let rowsHtml = '';
    rows.forEach((tr, rIdx) => {
      const cells = getElementsByLocalName(tr, 'tc');
      let cellsHtml = '';
      cells.forEach((tc) => {
        const text = getElementsByLocalName(tc, 't').map((t) => t.textContent).join(' ');
        const tag = rIdx === 0 ? 'th' : 'td';
        const cellBg = rIdx === 0 ? 'background:#1e40af;color:#fff;font-weight:700;' : 'background:rgba(248,250,252,0.9);color:#0f172a;';
        cellsHtml += `<${tag} style="border:1px solid #cbd5e1;padding:0.4em 0.6em;${cellBg}font-size:1.3cqw;">${escapeHtml(text)}</${tag}>`;
      });
      rowsHtml += `<tr>${cellsHtml}</tr>`;
    });

    return `<div style="position:absolute;left:${box.left.toFixed(2)}%;top:${box.top.toFixed(2)}%;width:${box.width.toFixed(2)}%;height:${box.height.toFixed(2)}%;overflow:auto;"><table style="width:100%;height:100%;border-collapse:collapse;">${rowsHtml}</table></div>`;
  }

  function getCurrentSlideRatio() {
    const slide = currentSlides[currentSlideIdx];
    if (slide && slide.widthEmu && slide.heightEmu) {
      return slide.widthEmu / slide.heightEmu;
    }
    return 16 / 9;
  }

  function fitSlideCanvas() {
    const stageWrapper = document.getElementById('ppt-stage-wrapper');
    const slideStage = document.getElementById('ppt-slide-stage');
    const canvas = document.getElementById('ppt-slide-canvas');
    if (!canvas) return;

    const ratio = getCurrentSlideRatio();
    canvas.style.setProperty('--ppt-ratio', ratio.toFixed(6));

    const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
    const isFs = fsEl && stageWrapper && fsEl === stageWrapper;
    if (!isFs) {
      canvas.style.width = '';
      canvas.style.height = '';
      return;
    }

    const availW = Math.max(320, (slideStage?.clientWidth || window.innerWidth) - 24);
    const availH = Math.max(200, (slideStage?.clientHeight || (window.innerHeight - 170)) - 16);

    let targetW, targetH;
    if (availW / availH > ratio) {
      targetH = availH;
      targetW = availH * ratio;
    } else {
      targetW = availW;
      targetH = availW / ratio;
    }

    canvas.style.width = Math.floor(targetW) + 'px';
    canvas.style.height = Math.floor(targetH) + 'px';
  }

  // --- Stage Rendering ---
  function renderCurrentSlide() {
    const canvas = document.getElementById('ppt-slide-canvas');
    const indicator = document.getElementById('ppt-slide-counter');
    const notesContent = document.getElementById('ppt-notes-content');
    const prevBtn = document.getElementById('ppt-prev-btn');
    const nextBtn = document.getElementById('ppt-next-btn');

    if (!canvas || !currentSlides.length) return;
    if (currentSlideIdx < 0) currentSlideIdx = 0;
    if (currentSlideIdx >= currentSlides.length) currentSlideIdx = currentSlides.length - 1;

    const slide = currentSlides[currentSlideIdx];
    const ratio = slide.widthEmu && slide.heightEmu ? `${slide.widthEmu} / ${slide.heightEmu}` : '16 / 9';
    canvas.style.aspectRatio = ratio;
    canvas.style.backgroundColor = slide.bg || '#ffffff';
    canvas.innerHTML = slide.html;
    fitSlideCanvas();

    if (indicator) {
      indicator.textContent = `Slide ${currentSlideIdx + 1} / ${currentSlides.length}`;
    }
    if (notesContent) {
      notesContent.textContent = slide.notes || 'Slide này không có ghi chú diễn giả (Speaker Notes).';
    }
    if (prevBtn) prevBtn.disabled = currentSlideIdx === 0;
    if (nextBtn) nextBtn.disabled = currentSlideIdx === currentSlides.length - 1;

    // Update thumbnail active border
    document.querySelectorAll('#ppt-thumbnails .ppt-thumb-btn').forEach((btn, idx) => {
      if (idx === currentSlideIdx) {
        btn.classList.add('ring-2', 'ring-orange-500', 'bg-orange-50', 'dark:bg-orange-950/60', 'text-orange-700', 'dark:text-orange-300', 'font-bold');
      } else {
        btn.classList.remove('ring-2', 'ring-orange-500', 'bg-orange-50', 'dark:bg-orange-950/60', 'text-orange-700', 'dark:text-orange-300', 'font-bold');
      }
    });
  }

  function renderThumbnails() {
    const strip = document.getElementById('ppt-thumbnails');
    if (!strip) return;
    strip.innerHTML = currentSlides
      .map(
        (s, idx) => `
      <button type="button" onclick="window.pptGoToSlide(${idx})"
        class="ppt-thumb-btn shrink-0 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-200 hover:border-orange-400 transition flex items-center gap-2">
        <span class="w-5 h-5 rounded-md bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 font-bold flex items-center justify-center text-[10px]">${idx + 1}</span>
        <span class="truncate max-w-[100px]">Slide ${idx + 1}</span>
      </button>`
      )
      .join('');
  }

  async function openDeck(deckRecord) {
    const stageWrapper = document.getElementById('ppt-stage-wrapper');
    const pptxView = document.getElementById('ppt-pptx-viewer');
    const pdfFrame = document.getElementById('ppt-pdf-frame');
    const deckTitleEl = document.getElementById('ppt-active-deck-title');

    if (!stageWrapper) return;
    currentDeckName = deckRecord.name;
    currentDeckType = deckRecord.type;
    if (deckTitleEl) deckTitleEl.textContent = deckRecord.name;

    stageWrapper.classList.remove('hidden');

    if (deckRecord.type === 'pdf') {
      revokeActiveBlobs();
      const blob = new Blob([deckRecord.buffer], { type: 'application/pdf' });
      currentPdfUrl = URL.createObjectURL(blob);
      pptxView.classList.add('hidden');
      pdfFrame.classList.remove('hidden');
      pdfFrame.src = currentPdfUrl;
      showStatusToast(`Đang trình chiếu tệp PDF: ${deckRecord.name}`);
    } else {
      try {
        showStatusToast(`Đang xử lý các slide của "${deckRecord.name}"...`);
        currentSlides = await parsePptxBuffer(deckRecord.buffer);
        currentSlideIdx = 0;
        pdfFrame.classList.add('hidden');
        pdfFrame.src = '';
        pptxView.classList.remove('hidden');
        renderThumbnails();
        renderCurrentSlide();
        showStatusToast(`Đã mở "${deckRecord.name}" (${currentSlides.length} slide). Nhấn Toàn Màn Hình (F) để thuyết trình!`);
      } catch (err) {
        console.error('PPTX parse error:', err);
        showStatusToast(err.message || 'Không thể đọc tệp PowerPoint này.', true);
      }
    }

    stageWrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  async function refreshDeckLibrary() {
    const listEl = document.getElementById('ppt-deck-list');
    if (!listEl || !currentUser) return;

    const decks = await getDecksByUser(currentUser.id);
    if (!decks.length) {
      listEl.innerHTML = `
        <div class="col-span-full p-5 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Chưa có bài thuyết trình nào được lưu. Hãy kéo thả tệp <strong>.pptx</strong> hoặc <strong>.pdf</strong> vào khung phía trên để chuẩn bị thuyết trình!
        </div>`;
      return;
    }

    listEl.innerHTML = decks
      .map(
        (d) => `
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 hover:border-orange-400 transition">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 rounded-xl ${d.type === 'pdf' ? 'bg-rose-100 dark:bg-rose-950 text-rose-600' : 'bg-orange-100 dark:bg-orange-950 text-orange-600'} flex items-center justify-center text-lg shrink-0">
            <i class="fa-solid ${d.type === 'pdf' ? 'fa-file-pdf' : 'fa-file-powerpoint'}"></i>
          </div>
          <div class="min-w-0">
            <div class="font-bold text-sm text-slate-900 dark:text-white truncate" title="${escapeHtml(d.name)}">${escapeHtml(d.name)}</div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400">
              ${formatBytes(d.size)} • ${d.slideCount ? d.slideCount + ' slide' : 'PDF Deck'} • ${new Date(d.addedAt).toLocaleDateString('vi-VN')}
            </div>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" onclick="window.pptLaunchDeck('${d.id}')" class="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition flex items-center gap-1.5">
            <i class="fa-solid fa-display"></i> Trình Chiếu
          </button>
          <button type="button" onclick="window.pptDeleteDeck('${d.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition" title="Xóa khỏi thư viện">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>`
      )
      .join('');
  }

  async function handleFilesUpload(files) {
    if (!currentUser) {
      showStatusToast('Bạn cần đăng nhập để sử dụng khu vực trình chiếu.', true);
      return;
    }
    if (!files || !files.length) return;

    for (const file of files) {
      const lower = file.name.toLowerCase();
      if (lower.endsWith('.ppt')) {
        showStatusToast(`Tệp "${file.name}" đang ở định dạng PowerPoint 97-2003 (.ppt). Vui lòng Save As sang .pptx hoặc .pdf để trình duyệt hiển thị trực tiếp!`, true);
        continue;
      }
      if (!lower.endsWith('.pptx') && !lower.endsWith('.pdf')) {
        showStatusToast(`Định dạng "${file.name}" chưa hỗ trợ. Vui lòng chọn tệp .pptx hoặc .pdf.`, true);
        continue;
      }

      const type = lower.endsWith('.pdf') ? 'pdf' : 'pptx';
      const buffer = await file.arrayBuffer();
      let slideCount = null;

      if (type === 'pptx') {
        try {
          const parsed = await parsePptxBuffer(buffer);
          slideCount = parsed.length;
        } catch (err) {
          showStatusToast(err.message || `Lỗi đọc tệp ${file.name}`, true);
          continue;
        }
      }

      const record = {
        id: 'deck_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        userId: currentUser.id,
        name: file.name,
        size: file.size,
        type,
        slideCount,
        addedAt: Date.now(),
        buffer
      };

      await saveDeckToDB(record);
      await refreshDeckLibrary();
      await openDeck(record);
    }
  }

  // --- Global Controls exposed to HTML ---
  window.pptGoToSlide = function (idx) {
    currentSlideIdx = idx;
    renderCurrentSlide();
  };

  window.pptNextSlide = function () {
    if (currentSlideIdx < currentSlides.length - 1) {
      currentSlideIdx++;
      renderCurrentSlide();
    }
  };

  window.pptPrevSlide = function () {
    if (currentSlideIdx > 0) {
      currentSlideIdx--;
      renderCurrentSlide();
    }
  };

  window.pptLaunchDeck = async function (id) {
    const deck = await getDeckById(id);
    if (deck) await openDeck(deck);
  };

  window.pptDeleteDeck = async function (id) {
    await deleteDeckById(id);
    await refreshDeckLibrary();
    showStatusToast('Đã xóa bài thuyết trình khỏi thư viện cục bộ.');
  };

  window.pptToggleFullscreen = function () {
    const stage = document.getElementById('ppt-stage-wrapper');
    if (!stage) return;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      const req = stage.requestFullscreen || stage.webkitRequestFullscreen || stage.mozRequestFullScreen || stage.msRequestFullscreen;
      if (req) {
        Promise.resolve(req.call(stage)).catch((err) => {
          showStatusToast('Không thể bật toàn màn hình: ' + (err?.message || err), true);
        });
      }
    } else {
      const exit = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
      exit?.call(document);
    }
  };

  window.pptToggleLaser = function () {
    laserEnabled = !laserEnabled;
    const btn = document.getElementById('ppt-laser-btn');
    const stage = document.getElementById('ppt-slide-stage');
    const dot = document.getElementById('ppt-laser-dot');
    if (btn) {
      btn.className = laserEnabled
        ? 'px-2.5 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm'
        : 'px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold transition flex items-center gap-1.5';
    }
    if (stage) stage.style.cursor = laserEnabled ? 'none' : 'default';
    if (dot && !laserEnabled) dot.classList.add('hidden');
  };

  window.pptToggleNotes = function () {
    const panel = document.getElementById('ppt-notes-panel');
    if (panel) {
      panel.classList.toggle('hidden');
      requestAnimationFrame(fitSlideCanvas);
    }
  };

  window.pptToggleTimer = function () {
    const btn = document.getElementById('ppt-timer-btn');
    const disp = document.getElementById('ppt-timer-display');
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
      if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> <span id="ppt-timer-display">${formatTimer(timerSeconds)}</span>`;
    } else {
      timerRunning = true;
      timerInterval = setInterval(() => {
        timerSeconds++;
        const d = document.getElementById('ppt-timer-display');
        if (d) d.textContent = formatTimer(timerSeconds);
      }, 1000);
      if (btn) btn.innerHTML = `<i class="fa-solid fa-pause text-emerald-500"></i> <span id="ppt-timer-display">${formatTimer(timerSeconds)}</span>`;
    }
  };

  window.pptResetTimer = function () {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 0;
    const btn = document.getElementById('ppt-timer-btn');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> <span id="ppt-timer-display">00:00</span>`;
  };

  window.pptCloseStage = function () {
    if (document.fullscreenElement) document.exitFullscreen?.();
    const stageWrapper = document.getElementById('ppt-stage-wrapper');
    if (stageWrapper) stageWrapper.classList.add('hidden');
    revokeActiveBlobs();
  };

  // --- Auth Synchronization ---
  async function syncAuthState(session) {
    const locked = document.getElementById('ppt-locked-view');
    const unlocked = document.getElementById('ppt-unlocked-view');
    const badge = document.getElementById('ppt-user-badge');
    if (!locked || !unlocked) return;

    if (session?.user) {
      currentUser = session.user;
      locked.classList.add('hidden');
      unlocked.classList.remove('hidden');

      let displayName = session.user.email || 'Thành viên';
      try {
        const client = window.supabaseClient;
        if (client) {
          const { data: profile } = await client
            .from('profiles')
            .select('full_name, role')
            .eq('id', session.user.id)
            .maybeSingle();
          if (profile?.full_name) {
            const roleLabel = profile.role === 'teacher' ? 'Giáo viên' : profile.role === 'admin' ? 'Quản trị' : 'Thành viên';
            displayName = `${profile.full_name} (${roleLabel})`;
          }
        }
      } catch (_) {}

      if (badge) {
        badge.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i> Đã đăng nhập: <strong>${escapeHtml(displayName)}</strong>`;
      }
      await refreshDeckLibrary();
    } else {
      currentUser = null;
      unlocked.classList.add('hidden');
      locked.classList.remove('hidden');
      window.pptCloseStage();
    }
  }

  // --- Initialize ---
  document.addEventListener('DOMContentLoaded', async () => {
    const dropzone = document.getElementById('ppt-dropzone');
    const fileInput = document.getElementById('ppt-file-input');
    const slideStage = document.getElementById('ppt-slide-stage');
    const laserDot = document.getElementById('ppt-laser-dot');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        if (e.target.files?.length) {
          handleFilesUpload(e.target.files);
          fileInput.value = '';
        }
      });

      ['dragenter', 'dragover'].forEach((ev) => {
        dropzone.addEventListener(ev, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('border-orange-500', 'bg-orange-50/70', 'dark:bg-orange-950/40');
        });
      });

      ['dragleave', 'drop'].forEach((ev) => {
        dropzone.addEventListener(ev, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('border-orange-500', 'bg-orange-50/70', 'dark:bg-orange-950/40');
        });
      });

      dropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer?.files;
        if (files?.length) handleFilesUpload(files);
      });
    }

    // Laser pointer tracking
    if (slideStage && laserDot) {
      slideStage.addEventListener('mousemove', (e) => {
        if (!laserEnabled) return;
        const rect = slideStage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        laserDot.style.left = x + 'px';
        laserDot.style.top = y + 'px';
        laserDot.classList.remove('hidden');
      });
      slideStage.addEventListener('mouseleave', () => {
        laserDot.classList.add('hidden');
      });
    }

    // Keyboard shortcuts when stage is open
    document.addEventListener('keydown', (e) => {
      const stageWrapper = document.getElementById('ppt-stage-wrapper');
      if (!stageWrapper || stageWrapper.classList.contains('hidden')) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (currentDeckType === 'pptx') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          window.pptNextSlide();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          window.pptPrevSlide();
        } else if (e.key.toLowerCase() === 'l') {
          window.pptToggleLaser();
        } else if (e.key.toLowerCase() === 'n') {
          window.pptToggleNotes();
        }
      }
      if (e.key.toLowerCase() === 'f') {
        window.pptToggleFullscreen();
      }
    });

    // Refit slide canvas on fullscreen transition & window resize
    function handleFullscreenChange() {
      fitSlideCanvas();
      requestAnimationFrame(fitSlideCanvas);
      setTimeout(fitSlideCanvas, 120);
      const fsBtn = document.querySelector('#ppt-stage-wrapper button[onclick="window.pptToggleFullscreen()"]');
      if (fsBtn) {
        const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
        fsBtn.innerHTML = isFs
          ? '<i class="fa-solid fa-compress"></i> <span class="hidden sm:inline">Thu Nhỏ</span>'
          : '<i class="fa-solid fa-expand"></i> <span class="hidden sm:inline">Toàn Màn Hình</span>';
      }
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    window.addEventListener('resize', fitSlideCanvas);

    // Wait for Supabase client
    let tries = 0;
    while (!window.supabaseClient && tries < 40) {
      await new Promise((r) => setTimeout(r, 100));
      tries++;
    }

    const client = window.supabaseClient;
    if (client) {
      const { data: { session } } = await client.auth.getSession();
      await syncAuthState(session);

      client.auth.onAuthStateChange((_event, newSession) => {
        setTimeout(() => syncAuthState(newSession), 0);
      });
    } else {
      await syncAuthState(null);
    }
  });
})();
