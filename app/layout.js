import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from "next/script";

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Metadata for SEO
export const metadata = {
  title: 'Scholar Bucket - Education Consultancy | 10th, 12th, Graduation, Distance Education',
  description: 'Scholar Bucket offers expert guidance for admissions in 10th, 12th, Graduation, Post-Graduation, Distance & Open Education from top Indian universities. Serving students since 2021.',
  keywords: 'education consultancy, distance education, NIOS admission, graduation admission, 12th admission, online degree, MBA distance, B.Com distance, university admission',
  authors: [{ name: 'Scholar Bucket Education Consultancy' }],
  openGraph: {
    title: 'Scholar Bucket - Your Trusted Education Partner',
    description: 'Get admitted to top universities with expert counselling and complete admission support.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code', // Add your verification code
  },
};

/**
 * Root Layout Component
 * - Wraps all pages with common structure
 * - Includes Navbar, Footer, WhatsApp button
 * - Sets up fonts and global styles
 * - Manages SEO metadata
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="antialiased">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="min-h-screen ">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp & Call Buttons */}
        <WhatsAppButton />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-JT1FYJWXZM`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JT1FYJWXZM');
  `}
        </Script>
      </body>
    </html>
  );
}