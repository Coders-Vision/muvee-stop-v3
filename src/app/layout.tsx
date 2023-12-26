import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/layout/root-layout/header/header";
import Footer from "@/layout/root-layout/footer/footer";
import { Providers } from "@/providers/providers";
// import NextTopLoader from "nextjs-toploader";
import getCurrentHost from "@/lib/get-current-host";
import { data } from "@/lib/seo-data";
import CookieBanner from "@/components/ui/cookie-banner";
// import GoogleTagManager from "@/analytics/google/google-tag-manager";
import { GoogleTagManager } from '@next/third-parties/google'

export const revalidate = 3600; // revalidate at most every hour

const inter = Inter({ subsets: ["latin"] });

// const base_url = async () => {
//   "use server";
//   return new URL(getCurrentHost());
// };

export const metadata: Metadata = {
  // metadataBase: base_url,
  title: {
    default: data.title,
    template: `%s | ${data.title}`,
  },
  description: data.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  
      </head>
      <body className={inter.className}>
        {/* <NextTopLoader
          color="#6ebf8a"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={false}
          showSpinner={false}
          easing="ease"
          speed={200}
          zIndex={1600}
          showAtBottom={false}
        /> */}
        <Providers>
          <Header />
          <main className="">
            {/* <Navbar /> */}
            {children}
          </main>
          <Footer />
          {/* <CookieBanner /> */}
        </Providers>
        <GoogleTagManager gtmId="GTM-XYZ" />
      </body>
    </html>
  );
}
