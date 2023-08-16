import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import { ThemeProviders } from "./providers";
import Footer from "@/components/layout/Footer";
import { Metadata } from 'next'

const popins = Poppins({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({
  weight: ["700", "300", "400"],
  variable: "--font-roboto",
  subsets: ["latin"],
  style: ["normal"],
});

const APP_NAME = "Ikhsanuddin";
const APP_DEFAULT_TITLE = "Ikhsanuddin Syamsuri";
const APP_TITLE_TEMPLATE = "%s - Ikhsanuddin Syamsuri";
const APP_DESCRIPTION = "Sofware Engineer - Senior Web Developer - React.js - Typescript";

export const metadata: Metadata = {
  metadataBase: new URL('https://ikhsanuddin.com'),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#111827",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${popins.className} ${roboto.variable}`}
      lang="en"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased bg-gradient-to-b dark:bg-gradient-to-b dark:from-gray-900 dark:text-slate-50 dark:to-gray-800 from-slate-100 min-h-screen text-slate-900 to-white">
        <ThemeProviders>
          <>
            <Header />
            {children}
          </>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
