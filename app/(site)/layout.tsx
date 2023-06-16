import { Playfair_Display, Raleway } from "next/font/google";
import Navbar from "@/components/ui/layout/Navbar";
import "../globals.css";
import Footer from "@/components/ui/layout/Footer";

import { FormProvider } from "@/components/QuoteForm/FormContext";

export const metadata = {
  title: "The Cleaning GouRou Inc",
  description: "Professional Cleaning For a Professional You",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body>
        <div id="contact-modal"></div>
        <div id="popup-modal"></div>
        <Navbar />
        <FormProvider>
          <main className="min-h-screen">{children}</main>
        </FormProvider>
        <Footer />
      </body>
    </html>
  );
}
