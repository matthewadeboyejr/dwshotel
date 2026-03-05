import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReduxProvider from "./lib/redux/provider";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "sonner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dwshotels.com'),
  title: {
    default: "DWS Hotels - Luxury Stay in Abraka",
    template: "%s | DWS Hotels"
  },
  description: "Experience world-class hospitality at DWS Hotel. Luxury rooms, exquisite dining, and premium amenities in the heart of Abraka, Delta State.",
  keywords: ["Hotel", "Abraka", "Delta State", "Accommodation", "Luxury", "Booking", "DWS"],
  authors: [{ name: "DWS Hotels" }],
  creator: "DWS Hotels",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dwshotels.com",
    title: "DWS Hotels - Luxury Stay in Abraka",
    description: "Book your perfect accommodation with Dwshotels. Browse and book rooms, villas, apartments, and more.",
    siteName: "DWS Hotels",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DWS Hotels Luxury Accommodation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DWS Hotels - Find the Best Stay",
    description: "Experience luxury and comfort in Abraka.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
          <Toaster richColors position="top-right" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
