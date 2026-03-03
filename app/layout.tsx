import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Fuzzy Bloom",
  description: "Handmade Flowers & Crafts",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f6f6f6] text-gray-800">
        {children}
      </body>
    </html>
  );
}