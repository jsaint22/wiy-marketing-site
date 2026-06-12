import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { LenisProvider } from "@/components/cinematic/LenisProvider";
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
  // Icons ship via app-dir file conventions: src/app/favicon.ico + icon.png + apple-icon.png.
  // Canonical source: wiy-operating-system/brands/assets/wiy/favicon/ — regenerate there, copy here.
  alternates: {
    canonical: isStaging ? undefined : "https://wealthinyourself.com",
  },
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
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
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
                affiliation: {
                  "@type": "EducationalOrganization",
                  name: "Golden Gate University",
                  department: "Adjunct Faculty, Financial Planning",
                  url: "https://ggu.edu/faculty/josh-st-laurent-adjunct-professor/",
                },
                hasCredential: [
                  { "@type": "EducationalOccupationalCredential", name: "MS — Financial Life Planning, Golden Gate University" },
                  { "@type": "EducationalOccupationalCredential", name: "CFP®" },
                  { "@type": "EducationalOccupationalCredential", name: "CFT™" },
                  { "@type": "EducationalOccupationalCredential", name: "APFC®" },
                  { "@type": "EducationalOccupationalCredential", name: "ACC" },
                ],
                sameAs: [
                  "https://www.linkedin.com/in/joshstlaurent/",
                  "https://x.com/josh_stlaurent",
                  "https://www.tiktok.com/@wealthinyourself",
                  "https://ggu.edu/faculty/josh-st-laurent-adjunct-professor/",
                  "https://joshstlaurent.substack.com",
                  "https://podcasters.spotify.com/pod/show/wealth-in-yourself/",
                  "https://www.advisorpedia.com/author/joshua-st-laurent/",
                  "https://joshstlaurent.com",
                  "https://www.biggerpockets.com/users/jsaint",
                ],
                url: "https://joshstlaurent.com",
              },
            ]),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <ScrollToTop />
          <Navigation />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
        <GoogleAnalytics gaId="G-0BE9T7ZX38" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wed2rzq4bf");`,
          }}
        />
      </body>
    </html>
  );
}
