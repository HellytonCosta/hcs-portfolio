import type { Metadata } from "next";
import "./globals.css";
import MainMenu from "@/components/global/MainMenu";


export const metadata: Metadata = {
  title: "HCS",
  description: "Professional Portfolio",
  icons: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <MainMenu/>
        {children}
      </body>
    </html>
  );
}
