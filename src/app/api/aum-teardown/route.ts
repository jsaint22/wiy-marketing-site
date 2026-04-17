import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import AumTeardownPDF from "@/lib/pdf/aum-teardown";

export async function GET() {
  const buffer = await renderToBuffer(
    React.createElement(AumTeardownPDF)
  );

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="The-AUM-Teardown-WIY.pdf"',
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
