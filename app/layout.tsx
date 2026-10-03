import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andiile — Digital Creator & Lifestyle Muse",
  description: "A warm editorial portfolio for fashion, beauty, lifestyle and travel collaborations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
