import { ImageResponse } from "next/og";

export const alt = "Forth Street — web application development for UK SMEs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#081831",
        color: "#f7f4ed",
        padding: "58px 68px 62px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 31,
            fontWeight: 800,
            letterSpacing: "0.12em",
            lineHeight: 0.82,
          }}
        >
          <span>FORTH</span>
          <span style={{ fontSize: 18, letterSpacing: "0.3em" }}>STREET</span>
        </div>
        <div style={{ color: "#9cb8df", fontSize: 20 }}>forthstreet.com</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", width: 825 }}>
          <div style={{ width: 76, height: 4, marginBottom: 28, background: "#6fa8ff" }} />
          <div
            style={{ fontSize: 70, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.98 }}
          >
            Web application development for UK SMEs
          </div>
          <div style={{ marginTop: 30, color: "#cbd7e8", fontSize: 27 }}>
            Internal tools · Reporting · Legacy rebuilds
          </div>
        </div>

        <div
          style={{
            width: 210,
            height: 210,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#e8a73c",
          }}
        >
          <div
            style={{
              width: 118,
              height: 118,
              border: "3px solid #081831",
              borderRadius: "50%",
              background: "#f7f4ed",
            }}
          />
        </div>
      </div>
    </div>,
    size
  );
}
