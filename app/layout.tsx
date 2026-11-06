import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شركة النمر للشحن | El NMR Shipping",
  description: "شركة النمر للشحن - خدمات لوجستية متكاملة | Complete logistics services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
