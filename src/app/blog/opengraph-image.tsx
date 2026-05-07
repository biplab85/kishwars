import { ImageResponse } from "next/og";

export const alt =
  "Notes from the stove — essays from the kitchen by Kishwar Chowdhury.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function BlogOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0E0B09",
          backgroundImage:
            "radial-gradient(ellipse at 0% 0%, rgba(122,31,43,0.42), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(226,118,27,0.32), transparent 60%)",
          color: "#F5EBDC",
          fontFamily: "serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#E2761B",
          }}
        >
          <span style={{ width: 60, height: 1, backgroundColor: "#E2761B" }} />
          <span>Blog · Essays from the kitchen</span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "16ch" }}>
          <div
            style={{
              fontSize: 132,
              lineHeight: 0.98,
              letterSpacing: -3,
            }}
          >
            Notes from
          </div>
          <div
            style={{
              fontSize: 132,
              lineHeight: 0.98,
              letterSpacing: -3,
              fontStyle: "italic",
              color: "#C9A24A",
            }}
          >
            the stove.
          </div>
        </div>

        {/* Caption */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              maxWidth: "44ch",
              opacity: 0.75,
              fontStyle: "italic",
            }}
          >
            Heritage cooking, the road to MasterChef, the cookbook process,
            dispatches from the table.
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            <span>Kishwar Chowdhury</span>
            <span>kishwar.com.au/blog</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
