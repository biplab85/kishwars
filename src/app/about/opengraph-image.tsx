import { ImageResponse } from "next/og";

export const alt =
  "About Kishwar Chowdhury — Bangladeshi-Australian chef, author, MasterChef Australia finalist.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function AboutOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
          backgroundColor: "#0E0B09",
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(226,118,27,0.32), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(122,31,43,0.45), transparent 60%)",
          color: "#F5EBDC",
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#C9A24A",
          }}
        >
          <span style={{ width: 50, height: 1, backgroundColor: "#C9A24A" }} />
          <span>About</span>
          <span style={{ width: 50, height: 1, backgroundColor: "#C9A24A" }} />
        </div>

        {/* Name */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 112,
              lineHeight: 0.98,
              letterSpacing: -3,
              fontStyle: "italic",
            }}
          >
            Kishwar
          </div>
          <div
            style={{
              fontSize: 112,
              lineHeight: 0.98,
              letterSpacing: -3,
            }}
          >
            Chowdhury
          </div>
        </div>

        {/* Roles */}
        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#F5EBDC",
            opacity: 0.85,
          }}
        >
          <span>Chef</span>
          <span style={{ color: "#E2761B" }}>·</span>
          <span style={{ fontStyle: "italic" }}>Author</span>
          <span style={{ color: "#E2761B" }}>·</span>
          <span>Storyteller</span>
        </div>

        {/* Caption */}
        <div
          style={{
            marginTop: 38,
            fontSize: 24,
            lineHeight: 1.45,
            maxWidth: "44ch",
            opacity: 0.7,
            fontStyle: "italic",
          }}
        >
          A Bangladeshi-Australian story, told one plate at a time.
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          <span>MasterChef Australia · S13 Finalist</span>
          <span>kishwar.com.au/about</span>
        </div>
      </div>
    ),
    size,
  );
}
