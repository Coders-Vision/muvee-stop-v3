import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/layout/root-layout/header/header";
import Footer from "@/layout/root-layout/footer/footer";
import { Providers } from "@/providers/providers";
// import NextTopLoader from "nextjs-toploader";
import { data } from "@/lib/seo-data";
// import CookieBanner from "@/components/ui/cookie-banner";
// import GoogleTagManager from "@/analytics/google/google-tag-manager";
// import GoogleAnalytics from "@/analytics/google/google-analytics";
import { GoogleTagManager } from "@next/third-parties/google";

// export const revalidate = 3600; // revalidate at most every hour

const inter = Inter({ subsets: ["latin"] });

// const base_url = async () => {
//   "use server";
//   return new URL(getCurrentHost());
// };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DEPOLY_URL || "/"),
  title: {
    default: data.title,
    template: `%s | ${data.title}`,
  },
  description: data.description,
  openGraph: {
    images: `${process.env.DEPOLY_URL}/images/og-image.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* //Custom Implementation of Google Tags */}
        {/* <GoogleTagManager
          GTM_ID={process.env.NEXT_PUBLIC_MUVEE_STOP_GTM || ""}
        /> */}
        {/* OR */}
        {/* <GoogleAnalytics GA_MEASUREMENT_ID="G-0000000000" /> */}
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
        {/* Next JS In-built implementation */}
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_MUVEE_STOP_GTM || ""}
        />
      </body>
    </html>
  );
}
