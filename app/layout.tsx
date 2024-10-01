import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/global/TopMenu";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "HCS - Portfolio",
  description: "Professional Portfolio",
  icons: "/logos/hcs-logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <TopMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
