import { ImageResponse } from "next/og";

export const alt = "PercentBox — Free Percentage Calculator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 40%, #f8fafc 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #10b981, #0d9488)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 56,
              fontWeight: 800,
            }}
          >
            %
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: -1,
              }}
            >
              PercentBox
            </div>
            <div style={{ fontSize: 28, color: "#64748b", marginTop: 4 }}>
              Free percentage calculator
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 40,
            fontWeight: 700,
            color: "#134e4a",
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          What is X% of Y · Increase · Tips · Discounts
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#64748b" }}>
          percentbox.com · Instant · No signup
        </div>
      </div>
    ),
    { ...size }
  );
}
