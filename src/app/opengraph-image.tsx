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
        <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", opacity: 0.7 }}>
          MasterChef Australia Finalist · Author · Storyteller
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
