import { ImageResponse } from "next/og";
import { text } from "@/content/text";

export const alt = text.meta.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraph() {
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
            "radial-gradient(ellipse at 20% 10%, rgba(226,118,27,0.35), transparent 55%), radial-gradient(ellipse at 90% 90%, rgba(122,31,43,0.4), transparent 60%)",
          color: "#F5EBDC",
          fontFamily: "serif",
        }}
      >
        {/* Top row — Logo (monogram + wordmark) on the left, kicker on the right.
            Satori doesn't support conic-gradient or bg-clip:text, so the ring is a
            linear gradient and the brand period is solid saffron. */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Monogram — gradient ring + ember disc + italic K + tittle */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 999,
                padding: 2,
                backgroundImage:
                  "linear-gradient(135deg, #E2761B 0%, #C9A24A 45%, #7A1F2B 100%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: 999,
                  backgroundColor: "#0E0B09",
                }}
              >
                <span
                  style={{
                    fontSize: 36,
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "#F5EBDC",
                    letterSpacing: -1,
                    lineHeight: 1,
                    transform: "translateY(-1px)",
                  }}
                >
                  K
                </span>
              </div>
              {/* Saffron tittle */}
              <span
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  backgroundColor: "#E2761B",
                }}
              />
            </div>

            {/* Wordmark */}
            <span
              style={{
                fontSize: 38,
                fontStyle: "italic",
                fontWeight: 600,
                letterSpacing: -1,
                color: "#F5EBDC",
              }}
            >
              Kishwar<span style={{ color: "#E2761B" }}>.</span>
            </span>
          </div>

          {/* Kicker */}
          <div
            style={{
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              opacity: 0.7,
              textAlign: "right",
            }}
          >
            MasterChef Finalist · Author · Storyteller
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 160, lineHeight: 0.95, letterSpacing: -4, fontStyle: "italic" }}>
            Bengal
          </div>
          <div style={{ fontSize: 160, lineHeight: 0.95, letterSpacing: -4 }}>
            on a Plate.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.7 }}>
          <span>Kishwar Chowdhury</span>
          <span>kishwar.com.au</span>
        </div>
      </div>
    ),
    size,
  );
}
