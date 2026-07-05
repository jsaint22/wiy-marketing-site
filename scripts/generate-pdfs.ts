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
import FiveQuestionsPDF from "../src/lib/pdf/five-questions-pdf";
import ThreeQuestionsPDF from "../src/lib/pdf/three-questions-pdf";

const OUT_DIR = join(process.cwd(), "public", "pdfs");

const pdfs = [
  { name: "RE-Investor-Tax-Strategy-Checklist-WIY.pdf", component: REInvestorChecklistPDF },
  { name: "Entrepreneurs-Wealth-Extraction-Roadmap-WIY.pdf", component: BusinessOwnerRoadmapPDF },
  { name: "W2-Escape-Plan-Financial-Checklist-WIY.pdf", component: W2EscapePlanPDF },
  { name: "5-Questions-Your-Advisor-Should-Answer-WIY.pdf", component: FiveQuestionsPDF },
  // DRAFT — compliance review required before publish (Play-4, open NV exam
  // CIC26-050). Generated here so the /three-questions dark route + email-copy
  // API have a file to serve, but the route itself stays unlinked/noindex
  // until Josh + compliance clear it.
  { name: "The-Three-Questions-Worksheet-WIY.pdf", component: ThreeQuestionsPDF },
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
