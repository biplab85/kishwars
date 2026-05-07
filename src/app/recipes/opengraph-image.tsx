import { ImageResponse } from "next/og";

export const alt = "Recipes by Kishwar Chowdhury — Bengali heritage cooking told as stories.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const categories = [
  "Bengali Classics",
  "Street Food",
  "Fish & Seafood",
  "Sweets",
  "Rice & Breads",
  "Quick Weeknight",
];

export default function RecipesOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0E0B09",
          backgroundImage:
            "radial-gradient(ellipse at 90% 10%, rgba(201,162,74,0.30), transparent 55%), radial-gradient(ellipse at 10% 95%, rgba(226,118,27,0.30), transparent 60%)",
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
          <span>Recipes · Kishwar Chowdhury</span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 150,
              lineHeight: 0.95,
              letterSpacing: -4,
              fontStyle: "italic",
            }}
          >
            Recipes,
          </div>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: -1,
              marginTop: 12,
              maxWidth: "26ch",
              opacity: 0.92,
            }}
          >
            written as stories.
          </div>
        </div>

        {/* Category strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginTop: 20,
          }}
        >
          {categories.map((c) => (
            <div
              key={c}
              style={{
                padding: "10px 18px",
                fontSize: 16,
                letterSpacing: 3,
                textTransform: "uppercase",
                border: "1px solid rgba(245,235,220,0.20)",
                borderRadius: 999,
                color: "#F5EBDC",
                opacity: 0.82,
              }}
            >
              {c}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: 0.65,
          }}
        >
          <span>Heritage Bengali cooking</span>
          <span>kishwar.com.au/recipes</span>
        </div>
      </div>
    ),
    size,
  );
}
