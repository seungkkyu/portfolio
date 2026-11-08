import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "박승규 포트폴리오",
    short_name: "SK Portfolio",
    description: "제품의 맥락까지 이해하는 프론트엔드 개발자",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#1c1917",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
