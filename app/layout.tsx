import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavContext from "./appContext/NavContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MN | WebDev Portfolio",
  description: "Matthew Nicholson WebDev Portfolio",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <NavContext>
        <body className={inter.className}>{children}</body>
      </NavContext>
    </html>
  );
}
