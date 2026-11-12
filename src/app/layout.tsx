import type { Metadata, Viewport } from "next";
// 한글 글리프를 unicode-range 단위로 쪼갠 subset이라, 페이지에 쓰인 글자 묶음만 내려받는다.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "박승규 | Frontend Developer",
  description:
    "제품의 맥락까지 이해하는 프론트엔드 개발자 박승규의 포트폴리오. AI 음성 대화, 학습 데이터 대시보드, 교사용 업무 도구.",
  openGraph: {
    title: "박승규 | Frontend Developer",
    description: "제품의 맥락까지 이해하는 프론트엔드 개발자",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e1428" },
    { media: "(prefers-color-scheme: dark)", color: "#111830" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="antialiased">
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
