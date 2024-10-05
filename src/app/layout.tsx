import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

import { Roboto } from "next/font/google";

const montSerrat = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montSerrat.className} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
