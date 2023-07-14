import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import { ThemeProviders } from "./providers";
import Footer from "@/components/layout/Footer";

const popins = Poppins({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({
  weight: ["700", "300", "400"],
  variable: "--font-roboto",
  subsets: ["latin"],
  style: ["normal"],
});

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
