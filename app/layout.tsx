import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    template: "%s | Stoa",
    default: "Stoa",
  },
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
