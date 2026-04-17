import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import AumMathPDF from "@/lib/pdf/aum-math";

export async function GET() {
  const buffer = await renderToBuffer(
    React.createElement(AumMathPDF)
  );

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="aum-math.pdf"',
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
