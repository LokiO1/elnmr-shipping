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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Changa:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
