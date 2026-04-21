/**
 * Pre-generate all lead magnet PDFs as static files.
 *
 * Run: npx tsx scripts/generate-pdfs.ts
 *
 * This generates verified, static PDFs that the API routes serve
 * instead of building them on every request. Eliminates the risk
 * of runtime math errors in a compliance-regulated environment.
 *
 * Re-run this script whenever:
 * - Fee formula changes
 * - Tax figures are updated (annually in December)
 * - PDF content/branding is modified
 * - Any change to fee-math.ts or the PDF components
 */

import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";
import { writeFileSync } from "fs";
import { join } from "path";

import {
  REInvestorChecklistPDF,
  BusinessOwnerRoadmapPDF,
  W2EscapePlanPDF,
} from "../src/lib/pdf/lead-magnet-pdf";
import AumMathPDF from "../src/lib/pdf/aum-math";

const OUT_DIR = join(process.cwd(), "public", "pdfs");

const pdfs = [
  { name: "RE-Investor-Tax-Strategy-Checklist-WIY.pdf", component: REInvestorChecklistPDF },
  { name: "Entrepreneurs-Wealth-Extraction-Roadmap-WIY.pdf", component: BusinessOwnerRoadmapPDF },
  { name: "W2-Escape-Plan-Financial-Checklist-WIY.pdf", component: W2EscapePlanPDF },
  { name: "aum-math.pdf", component: AumMathPDF },
];

async function main() {
  console.log("Generating static PDFs...\n");

  for (const { name, component } of pdfs) {
    const buffer = await renderToBuffer(createElement(component));
    const path = join(OUT_DIR, name);
    writeFileSync(path, Buffer.from(buffer));
    const sizeKB = Math.round(buffer.byteLength / 1024);
    console.log(`  ✓ ${name} (${sizeKB} KB)`);
  }

  console.log(`\nAll PDFs written to public/pdfs/`);
  console.log("IMPORTANT: Verify each PDF visually before deploying.");
}

main().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
