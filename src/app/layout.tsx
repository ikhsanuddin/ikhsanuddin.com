import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from 'next'
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProviders } from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const APP_NAME = "Ikhsanuddin";
const APP_DEFAULT_TITLE = "Ikhsanuddin - Senior Full-Stack Engineer";
const APP_TITLE_TEMPLATE = "%s - Ikhsanuddin";
const APP_DESCRIPTION = "Senior Full-Stack Engineer — React/Next.js, Node, TypeScript, Go, AWS & Kubernetes. Open to remote roles with US teams.";

export const metadata: Metadata = {
  metadataBase: new URL('https://ikhsanuddin.com'),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#0C0C0C",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
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
      className={inter.variable}
      lang="en"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
