import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout, { Content } from "antd/es/layout/layout";

import { AppHeader } from "@/components/AppHeader";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
        <AntdRegistry>
          <Layout className="min-h-screen">
            <AppHeader />
            <Content className="pl-24 pr-24 pt-6">{children}</Content>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
