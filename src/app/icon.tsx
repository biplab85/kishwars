import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0B09",
          color: "#F5EBDC",
          fontFamily: "serif",
          fontSize: 44,
          letterSpacing: -2,
        }}
      >
        K<span style={{ color: "#E2761B" }}>.</span>
      </div>
    ),
    size,
  );
}
