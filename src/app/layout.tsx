import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "StoresA2Z Early Partner Access - Be First. Build Faster. Scale Smarter.",
  description: "We're opening Early Partner Access for agencies who want to shape the future of mobile commerce before our official launch. Only 66 spots available.",
  keywords: "mobile commerce, e-commerce, digital agencies, partner program, early access, mobile apps, D2C",
  authors: [{ name: "StoresA2Z" }],
  creator: "StoresA2Z",
  publisher: "StoresA2Z",
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
    title: "StoresA2Z Early Partner Access - Be First. Build Faster. Scale Smarter.",
    description: "We're opening Early Partner Access for agencies who want to shape the future of mobile commerce before our official launch. Only 66 spots available.",
    url: 'https://early-access.storesa2z.com',
    siteName: 'StoresA2Z',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StoresA2Z Early Partner Access',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "StoresA2Z Early Partner Access - Be First. Build Faster. Scale Smarter.",
    description: "We're opening Early Partner Access for agencies who want to shape the future of mobile commerce before our official launch. Only 66 spots available.",
    images: ['/og-image.jpg'],
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
