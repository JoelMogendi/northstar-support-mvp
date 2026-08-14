
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Northstar Support Hub",
  description: "Self-service support for Northstar Retail Co.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        <Navbar />
        <div className="max-w-5xl mx-auto">{children}</div>
      </body>
    </html>
  );
}