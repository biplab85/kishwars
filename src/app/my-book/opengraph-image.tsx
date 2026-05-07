import { ImageResponse } from "next/og";

export const alt = "Smoke Rice Water — A cookbook by Kishwar Chowdhury. Hardie Grant, June 2026.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function MyBookOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#0E0B09",
          color: "#F5EBDC",
          fontFamily: "serif",
        }}
      >
        {/* Left rail — book spine */}
        <div
          style={{
            width: "38%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 40px",
            backgroundImage:
              "linear-gradient(160deg, #7A1F2B 0%, #4a1119 60%, #2a0a0f 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              border: "1px solid rgba(245,235,220,0.18)",
              padding: "36px 28px",
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#C9A24A",
              }}
            >
              A Cookbook
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 64,
                lineHeight: 1.0,
                fontStyle: "italic",
                textAlign: "center",
                letterSpacing: -1,
              }}
            >
              Smoke
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.0,
                textAlign: "center",
                letterSpacing: -1,
              }}
            >
              Rice
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.0,
                fontStyle: "italic",
                textAlign: "center",
                letterSpacing: -1,
              }}
            >
              Water
            </div>
            <div
              style={{
                marginTop: 36,
                width: 36,
                height: 1,
                backgroundColor: "#C9A24A",
              }}
            />
            <div
              style={{
                marginTop: 28,
                fontSize: 14,
                letterSpacing: 4,
                textTransform: "uppercase",
                opacity: 0.75,
              }}
            >
              Kishwar Chowdhury
            </div>
          </div>
        </div>

        {/* Right rail — copy */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "70px 64px",
            backgroundImage:
              "radial-gradient(ellipse at 80% 0%, rgba(226,118,27,0.22), transparent 55%), radial-gradient(ellipse at 20% 100%, rgba(122,31,43,0.28), transparent 60%)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#E2761B",
            }}
          >
            Forthcoming · Hardie Grant
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.98,
                letterSpacing: -2,
                fontStyle: "italic",
              }}
            >
              Recipes
            </div>
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.98,
                letterSpacing: -2,
              }}
            >
              & stories
            </div>
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.98,
                letterSpacing: -2,
              }}
            >
              from a
            </div>
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.98,
                letterSpacing: -2,
                fontStyle: "italic",
                color: "#C9A24A",
              }}
            >
              Bengali home.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            <span>23 June 2026</span>
            <span>kishwar.com.au/my-book</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
