import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MN | The Journey",
  description: "Matthew Nicholson Blog About Web Development and Life",
  icons: {
    icon: "./icon.png",
  },
};

export default function theJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      {/* <meta
        name="google-site-verification"
        content="IuzFpoymtIWd5ArsR72ilxXQHlKOH5GjUbMKuaX5tWE"
      /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
