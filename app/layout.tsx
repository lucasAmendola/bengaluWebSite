"use client"

import "./globals.css";
import { Head } from "next/document";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js" defer></script>
      </Head>
      <body>
        {children}
        </body>
    </html>
  );
}
