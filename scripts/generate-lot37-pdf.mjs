/**
 * Generates an improved version of the Lot 37 architectural proposal PDF.
 *
 * Improvements over the original:
 *   1. Proper PDF metadata (title, author, subject, keywords)
 *   2. A Table of Contents page inserted after the cover
 *   3. Named PDF outline (bookmarks) for every section — enables in-viewer navigation
 *   4. Optimised file size via image re-encoding at 88 % quality
 *
 * Usage:
 *   node scripts/generate-lot37-pdf.mjs [<source.pdf> [<output.pdf>]]
 */

import { PDFDocument, PDFName, PDFNumber, PDFArray, PDFDict, PDFString, PDFHexString, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Brand colours ────────────────────────────────────────────────────────────
const CREAM = rgb(0.973, 0.969, 0.953);
const GREEN = rgb(0.612, 0.773, 0.137);
const DARK  = rgb(0.102, 0.118, 0.137);
const MID   = rgb(0.361, 0.400, 0.424);
const LIGHT = rgb(0.831, 0.831, 0.831);

// ─── Page dimensions (landscape 960 × 540 pt, matches the original) ──────────
const W = 960;
const H = 540;

// ─── Section metadata (page numbers reflect the FINAL document) ───────────────
const SECTIONS = [
  { page: 1,  title: 'Cover',                      subtitle: 'Lot 37 — Moradia Unifamiliar Isolada' },
  { page: 2,  title: 'Table of Contents',           subtitle: 'Document overview' },
  { page: 3,  title: 'Project Vision',              subtitle: 'A modern Portuguese villa' },
  { page: 4,  title: 'Site Context & Orientation',  subtitle: 'South-facing road — ocean views west' },
  { page: 5,  title: 'Site Plan — Top View',        subtitle: 'Regular volume in an irregular landscape' },
  { page: 6,  title: 'Vertical Organisation',       subtitle: 'Concrete base + two HSB storeys' },
  { page: 7,  title: 'Ground Level — Cave & Pool',  subtitle: 'Solid concrete base in terrain' },
  { page: 8,  title: 'Main Living Level',           subtitle: 'Logical flow, separate service zones' },
  { page: 9,  title: 'Upper Floor — Four Suites',  subtitle: 'Symmetric suites, back-to-back plumbing' },
  { page: 10, title: 'Roof & Section',              subtitle: 'Rooftop terrace + solar generation' },
  { page: 11, title: 'Exterior Aesthetics',         subtitle: 'Sophisticated material palette' },
  { page: 12, title: 'Photorealistic Rendering',    subtitle: 'Refined geometric volume' },
  { page: 13, title: 'Hybrid Construction System',  subtitle: 'Concrete base · HSB frames · Glulam' },
  { page: 14, title: 'Sustainability & Comfort',    subtitle: '90 % lower energy bills for life' },
  { page: 15, title: 'Regulatory Compliance',       subtitle: 'Compliant with PP do Espartal' },
  { page: 16, title: 'Closing — Next Steps',        subtitle: 'From concept to construction' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function truncate(text, maxChars) {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars - 1) + '…';
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const sourcePdf = process.argv[2]
    || '/root/.claude/uploads/56c206b2-0c34-505a-ab99-92284d2ac3d5/16aef568-Lot_37___Moradia_Unifamiliar_Isolada.pdf';
  const outputPdf = process.argv[3]
    || path.join(__dirname, '../Lot_37_Moradia_Unifamiliar_Isolada_IMPROVED.pdf');

  console.log('📄 Reading source PDF …');
  const srcBytes = fs.readFileSync(sourcePdf);
  const srcDoc   = await PDFDocument.load(srcBytes);
  console.log(`   ${srcDoc.getPageCount()} pages found in source.`);

  // Render source pages as JPEG images (quality 88) via pdftoppm
  const tmpDir = '/tmp/lot37_frames';
  fs.mkdirSync(tmpDir, { recursive: true });
  console.log('🖼️  Rendering source pages …');
  execSync(`pdftoppm -r 192 -jpeg -jpegopt quality=88 "${sourcePdf}" "${tmpDir}/frame"`, { stdio: 'inherit' });
  const frames = fs.readdirSync(tmpDir)
    .filter(f => f.endsWith('.jpg'))
    .sort()
    .map(f => path.join(tmpDir, f));
  console.log(`   ${frames.length} frames ready.`);

  // ── Build the improved document ──────────────────────────────────────────────
  const doc = await PDFDocument.create();

  doc.setTitle('Lot 37 — Moradia Unifamiliar Isolada | Architectural Concept');
  doc.setAuthor('Groenvastbouw');
  doc.setSubject('Architectural Concept · Design Development · Urbanização do Espartal, Aljezur');
  doc.setKeywords([
    'Lot 37', 'Moradia Unifamiliar', 'Aljezur', 'Costa Vicentina',
    'HSB', 'Hybrid Construction', 'Groenvastbouw', 'Architectural Concept',
  ]);
  doc.setCreator('Groenvastbouw — groenvastbouw.nl');
  doc.setProducer('pdf-lib (https://github.com/Hopding/pdf-lib)');
  doc.setCreationDate(new Date());
  doc.setModificationDate(new Date());

  const helvetica     = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const helveticaObl  = await doc.embedFont(StandardFonts.HelveticaOblique);

  async function addImagePage(framePath) {
    const img  = await doc.embedJpg(fs.readFileSync(framePath));
    const page = doc.addPage([W, H]);
    page.drawImage(img, { x: 0, y: 0, width: W, height: H });
    return page;
  }

  // ── 1. Cover (frame 0) ───────────────────────────────────────────────────────
  console.log('📑 Building pages …');
  await addImagePage(frames[0]);

  // ── 2. Table of Contents ─────────────────────────────────────────────────────
  const tocPage = doc.addPage([W, H]);
  tocPage.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
  tocPage.drawRectangle({ x: 0, y: 0, width: 6,  height: H, color: GREEN });

  tocPage.drawText('Table of Contents', {
    x: 52, y: H - 68, size: 34, font: helveticaBold, color: DARK,
  });
  tocPage.drawLine({
    start: { x: 52, y: H - 81 }, end: { x: 222, y: H - 81 },
    thickness: 3, color: GREEN,
  });
  tocPage.drawText('Lot 37  ·  Moradia Unifamiliar Isolada  ·  Groenvastbouw', {
    x: 52, y: H - 101, size: 10.5, font: helveticaObl, color: MID,
  });
  tocPage.drawLine({
    start: { x: 52, y: H - 118 }, end: { x: W - 52, y: H - 118 },
    thickness: 0.5, color: LIGHT,
  });

  // Two-column entry list (skip cover and TOC itself)
  const entries = SECTIONS.filter(s => s.page > 2);
  const col1 = entries.slice(0, Math.ceil(entries.length / 2));
  const col2 = entries.slice(Math.ceil(entries.length / 2));

  const COL_X   = [52, W / 2 + 14];
  const START_Y  = H - 148;
  const ROW_H    = 38;
  const COL_W    = W / 2 - 66;        // available width per column

  for (let ci = 0; ci < 2; ci++) {
    const col = ci === 0 ? col1 : col2;
    const cx  = COL_X[ci];

    col.forEach((sec, i) => {
      const y      = START_Y - i * ROW_H;
      const numStr = String(sec.page);

      // Page number badge
      tocPage.drawRectangle({ x: cx, y: y - 4, width: 28, height: 20, color: GREEN, borderRadius: 3 });
      tocPage.drawText(numStr, {
        x: cx + (numStr.length > 1 ? 5 : 9), y: y + 1,
        size: 10, font: helveticaBold, color: rgb(1, 1, 1),
      });

      // Title
      tocPage.drawText(sec.title, {
        x: cx + 38, y: y + 2,
        size: 12, font: helveticaBold, color: DARK,
      });

      // Subtitle (truncated to fit column)
      tocPage.drawText(truncate(sec.subtitle, 45), {
        x: cx + 38, y: y - 11,
        size: 9, font: helvetica, color: MID,
      });

      // Dot leader for column 1
      if (ci === 0) {
        const titleW = helveticaBold.widthOfTextAtSize(sec.title, 12);
        for (let dx = cx + 40 + titleW; dx < COL_X[1] - 12; dx += 7) {
          tocPage.drawText('.', { x: dx, y: y + 2, size: 9, font: helvetica, color: LIGHT });
        }
      }
    });
  }

  // Footer
  tocPage.drawRectangle({ x: 0, y: 0, width: W, height: 34, color: DARK });
  tocPage.drawText('GROENVASTBOUW', { x: 52,       y: 11, size: 9, font: helveticaBold, color: GREEN });
  tocPage.drawText('Hybrid Construction: Concrete Base  ·  HSB Timber Frame', {
    x: 220, y: 11, size: 9, font: helvetica, color: rgb(0.7, 0.7, 0.7),
  });
  tocPage.drawText('May 2026', { x: W - 100, y: 11, size: 9, font: helvetica, color: rgb(0.7, 0.7, 0.7) });

  // ── 3. Remaining source pages (frames 1–14) ──────────────────────────────────
  for (let i = 1; i < frames.length; i++) {
    await addImagePage(frames[i]);
  }

  // ── 4. PDF Outline (bookmarks) ────────────────────────────────────────────────
  // We use the low-level context API with proper PDFName objects.
  const allPages = doc.getPages();

  function pageIndexForSection(sec) {
    if (sec.page === 1) return 0;   // cover
    if (sec.page === 2) return 1;   // TOC
    return sec.page - 1;             // rest shifted +1 by TOC insertion
  }

  const ctx         = doc.context;
  const outlineRef  = ctx.nextRef();
  const itemRefs    = SECTIONS.map(() => ctx.nextRef());

  const itemDicts = SECTIONS.map((sec, i) => {
    const pageIndex = pageIndexForSection(sec);
    const pdfPage   = allPages[pageIndex];

    // Destination: [pageRef /Fit]
    const destArr = ctx.obj([pdfPage.ref, PDFName.of('Fit')]);

    const dict = PDFDict.withContext(ctx);
    dict.set(PDFName.of('Title'),  PDFHexString.fromText(sec.title));
    dict.set(PDFName.of('Parent'), outlineRef);
    dict.set(PDFName.of('Dest'),   destArr);
    dict.set(PDFName.of('Count'),  PDFNumber.of(0));
    if (i > 0)                    dict.set(PDFName.of('Prev'), itemRefs[i - 1]);
    if (i < SECTIONS.length - 1)  dict.set(PDFName.of('Next'), itemRefs[i + 1]);
    return dict;
  });

  const outlineDict = PDFDict.withContext(ctx);
  outlineDict.set(PDFName.of('Type'),  PDFName.of('Outlines'));
  outlineDict.set(PDFName.of('First'), itemRefs[0]);
  outlineDict.set(PDFName.of('Last'),  itemRefs[SECTIONS.length - 1]);
  outlineDict.set(PDFName.of('Count'), PDFNumber.of(SECTIONS.length));

  ctx.assign(outlineRef, outlineDict);
  itemDicts.forEach((d, i) => ctx.assign(itemRefs[i], d));

  const catalog = doc.catalog;
  catalog.set(PDFName.of('Outlines'), outlineRef);
  catalog.set(PDFName.of('PageMode'), PDFName.of('UseOutlines'));

  // ── 5. Save ──────────────────────────────────────────────────────────────────
  console.log('💾 Saving …');
  const pdfBytes = await doc.save();
  fs.writeFileSync(outputPdf, pdfBytes);

  const origKB = Math.round(srcBytes.length / 1024);
  const newKB  = Math.round(pdfBytes.length / 1024);
  console.log(`✅  Done!`);
  console.log(`    Source : ${origKB} KB  (${srcDoc.getPageCount()} pages)`);
  console.log(`    Output : ${newKB} KB  (${allPages.length} pages)  →  ${outputPdf}`);
}

main().catch(err => { console.error(err); process.exit(1); });
