import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexaro – Build Smarter Workflows with AI",
  description: "Designed for investors and financial teams who want deeper insights, faster decisions, and better performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
