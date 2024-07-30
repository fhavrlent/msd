import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { AppHeader } from "@/components/AppHeader";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout className="min-h-screen">
          <AppHeader />
          <Content className="pl-24 pr-24 pt-6">{children}</Content>
        </Layout>
      </body>
    </html>
  );
}
