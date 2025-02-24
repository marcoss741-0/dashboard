import type { Metadata } from "next";
import "./globals.css";
import { SideBar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
