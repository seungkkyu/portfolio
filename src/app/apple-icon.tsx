import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1917",
          color: "#fafaf9",
          fontSize: 80,
          fontWeight: 700,
          position: "relative",
        }}
      >
        SK
        <div
          style={{
            position: "absolute",
            top: 34,
            right: 34,
            width: 20,
            height: 20,
            borderRadius: 10,
            background: "#60a5fa",
          }}
        />
      </div>
    ),
    size,
  );
}
