import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Studija — Premium Web Dizaino Studija Lietuvoje",
  description:
    "Kuriame premium svetaines verslams, kurie vertina kokybę. Next.js, motion design, konversijų optimizacija.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="lt"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
