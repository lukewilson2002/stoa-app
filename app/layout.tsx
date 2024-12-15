import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import "./globals.scss";
import Profile from "@/components/Profile";

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
          <div className="flex items-center justify-center border p-4">
            <div className="flex-1"></div>
            <div className="text-nowrap">
              <Breadcrumb />
            </div>
            <div className="flex-1">
              <Profile />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
