import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
