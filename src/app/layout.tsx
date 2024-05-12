import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 손하늘",
  description: "2023~2024년도 개발 프로젝트를 소개하는 포트폴리오 홈페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko">
        <body>{children}</body>
      </html>
  );
}
