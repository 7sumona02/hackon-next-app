import type { Metadata } from "next";
import { Pixelify_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const pixel = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

const dm = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm',
});

export const metadata: Metadata = {
  title: "HackON  Tech",
  description: "Developed in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm.variable} ${pixel.variable}`}>{children}</body>
    </html>
  );
}
