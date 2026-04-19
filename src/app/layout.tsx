import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const isStaging = process.env.NEXT_PUBLIC_ENVIRONMENT !== "production";

export const metadata: Metadata = {
  title: {
    default: "Wealth In Yourself — Flat-Fee Fiduciary Financial Planning",
    template: "%s | Wealth In Yourself",
  },
  description:
    "A flat-fee fiduciary advisory firm for business owners, real estate investors, and people designing their lives on their own terms. No AUM fees. No conflicts.",
  metadataBase: new URL(
    isStaging
      ? "https://wiy-marketing-site.vercel.app"
      : "https://wealthinyourself.com"
  ),
  robots: isStaging ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wealth In Yourself",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FinancialService",
                name: "Wealth In Yourself",
                url: "https://wealthinyourself.com",
                logo: "https://wealthinyourself.com/logos/wiy-logo-stacked.png",
                description:
                  "A flat-fee fiduciary financial life planning firm for entrepreneurs, real estate investors, and people designing their lives on their own terms.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "195 Highway 50 STE 205",
                  addressLocality: "Zephyr Cove",
                  addressRegion: "NV",
                  postalCode: "89448",
                  addressCountry: "US",
                },
                telephone: "+14159155948",
                priceRange: "$$",
                areaServed: "US",
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Josh St. Laurent",
                jobTitle: "Founder & Financial Life Planner",
                worksFor: {
                  "@type": "Organization",
                  name: "Wealth In Yourself",
                },
                alumniOf: {
                  "@type": "EducationalOrganization",
                  name: "Golden Gate University",
                },
                url: "https://joshstlaurent.com",
              },
            ]),
          }}
        />
        <ScrollToTop />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
