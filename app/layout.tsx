import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Stoa",
  description: "A collection of stoic quotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="flex justify-center p-4" aria-label="breadcrumb">
            <Breadcrumb />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
