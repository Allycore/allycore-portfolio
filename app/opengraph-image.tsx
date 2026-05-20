import { ImageResponse } from "next/og";

export const alt = "Allycore — Sites web professionnels pour les artisans du bâtiment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A1A2E",
          padding: "72px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              backgroundColor: "#F5C518",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 6,
              paddingBottom: 16,
              marginRight: 20,
            }}
          >
            <div style={{ width: 9, height: 14, backgroundColor: "#1A1A2E", borderRadius: 3 }} />
            <div style={{ width: 9, height: 24, backgroundColor: "#1A1A2E", borderRadius: 3 }} />
            <div style={{ width: 9, height: 32, backgroundColor: "#1A1A2E", borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: "#FEF9E7" }}>Allycore</div>
        </div>

        {/* Titre */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 800,
              color: "#FEF9E7",
              lineHeight: 1.1,
            }}
          >
            <div style={{ display: "flex" }}>Sites web pour</div>
            <div style={{ display: "flex", color: "#F5C518" }}>les artisans du bâtiment</div>
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#9CA3AF", marginTop: 28 }}>
            Visibilité Google · Livraison en 10 à 15 jours
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Plombiers", "Électriciens", "Chauffagistes"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 26,
                color: "#F5C518",
                border: "1px solid rgba(245,197,24,0.4)",
                borderRadius: 999,
                padding: "12px 28px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
