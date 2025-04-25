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
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-[#043060] to-[#051f3b]">
        <TopMenu />
        <main className="flex-1 bg-[#f7f7f7] text-black gap-8 row-start-2 items-center sm:items-start">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
