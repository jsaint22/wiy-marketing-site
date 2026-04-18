import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wealth In Yourself — Flat-Fee Fiduciary Financial Planning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a3a4a 0%, #0d2633 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Your money should buy you time.
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 40,
          }}
        >
          Not the other way around.
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Wealth In Yourself — Flat-Fee Fiduciary Financial Life Planning
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          wealthinyourself.com
        </div>
      </div>
    ),
    { ...size }
  );
}
