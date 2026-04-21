import type { Metadata } from "next";
import { Courier_Prime, Share_Tech_Mono, VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
});

const courierPrime = Courier_Prime({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Muhammad Hassan Mughal | Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer specializing in SaaS and MVP development, real-time systems, and production-ready web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${shareTechMono.variable} ${courierPrime.variable}`}>
        {children}
      </body>
    </html>
  );
}
