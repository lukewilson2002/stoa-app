import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Breadcrumb from "@/components/Breadcrumb";
import Profile from "@/components/Profile";
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
        <SpeedInsights />
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
