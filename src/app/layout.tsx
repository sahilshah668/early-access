import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "StoresA2Z Early Partner Access - Mobile Commerce Partner Program | ₹50K-5L Per Client",
  description: "Join StoresA2Z Early Partner Access for digital agencies. Earn ₹50,000-₹5,00,000 per mobile commerce client. Only 66 spots available. 7-day app delivery. No technical knowledge required.",
  keywords: "mobile commerce partner program, digital agency partnership, mobile app development, e-commerce solutions, D2C mobile apps, agency revenue, mobile commerce platform, partner access, early access program, mobile app delivery, agency business model, mobile commerce revenue, digital agency opportunities, mobile app marketplace, e-commerce mobile solutions",
  authors: [{ name: "StoresA2Z", url: "https://storesa2z.com" }],
  creator: "StoresA2Z",
  publisher: "StoresA2Z",
  category: "Business",
  classification: "Mobile Commerce Partner Program",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://early-access.storesa2z.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "StoresA2Z Early Partner Access - Mobile Commerce Partner Program | ₹50K-5L Per Client",
    description: "Join StoresA2Z Early Partner Access for digital agencies. Earn ₹50,000-₹5,00,000 per mobile commerce client. Only 66 spots available. 7-day app delivery. No technical knowledge required.",
    url: 'https://early-access.storesa2z.com',
    siteName: 'StoresA2Z',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StoresA2Z Early Partner Access - Mobile Commerce Partner Program',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: "StoresA2Z Early Partner Access - Mobile Commerce Partner Program | ₹50K-5L Per Client",
    description: "Join StoresA2Z Early Partner Access for digital agencies. Earn ₹50,000-₹5,00,000 per mobile commerce client. Only 66 spots available.",
    images: ['/og-image.jpg'],
    creator: '@storesa2z',
    site: '@storesa2z',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'application-name': 'StoresA2Z Early Partner Access',
    'apple-mobile-web-app-title': 'StoresA2Z Partner Access',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Schema.org markup for Google */}
        <meta itemProp="name" content="StoresA2Z Early Partner Access" />
        <meta itemProp="description" content="Join StoresA2Z Early Partner Access for digital agencies. Earn ₹50,000-₹5,00,000 per mobile commerce client. Only 66 spots available." />
        <meta itemProp="image" content="https://early-access.storesa2z.com/og-image.jpg" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0RP4G3S7LP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0RP4G3S7LP');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t1fkiqndov");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
