import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProjectContext from "./appContext/ProjectContext";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <meta
        name="google-site-verification"
        content="IuzFpoymtIWd5ArsR72ilxXQHlKOH5GjUbMKuaX5tWE"
      />
      <GoogleTagManager gtmId="G-T566SKVN3J" />
      <ProjectContext>
        <body className={inter.className}>{children}</body>
      </ProjectContext>
    </html>
  );
}
