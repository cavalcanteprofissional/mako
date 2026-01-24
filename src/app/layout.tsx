import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { seo } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: seo.default.title,
    template: `%s | ${seo.default.title}`,
  },
  description: seo.default.description,
  keywords: seo.default.keywords,
  authors: [{ name: seo.default.author }],
  openGraph: {
    ...seo.openGraph,
    title: seo.default.title,
    description: seo.default.description,
    images: [seo.default.image],
    url: seo.default.url,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.default.title,
    description: seo.default.description,
    images: [seo.default.image],
  },
  verification: {
    google: "u8CHN6HM-91gDrGQfJPWT4l92DxnsNXnzYq-JZXzHSg",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${openSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
