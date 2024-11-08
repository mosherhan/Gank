import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter, IBM_Plex_Serif} from "next/font/google";

const inter= Inter({
  subsets: ['cyrillic'] ,
  variable: "--font-inter",
  weight: ['400','700'],
});
const ibmplexserif= IBM_Plex_Serif({
  subsets: ['latin'] ,
  weight: ['400','700'],
  variable:'--font-ibm-plex-serif',
})

export const metadata: Metadata = {
  title: "Bank",
  description: "Modern Bank for everyone",
  icons:{ icon: "/icons/logo.svg" }};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmplexserif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
