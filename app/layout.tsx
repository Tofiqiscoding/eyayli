import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Universitet Kitabı",
  description: "Universitet portalı",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }:RootLayoutProps) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <div className="app-shell">
          <Header />
          <main className="app-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
