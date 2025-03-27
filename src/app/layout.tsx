"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import PaperOverlay from "@/components/Common/PaperOverlay";
import { Inter, Darumadrop_One, Outfit, Sigmar, Bowlby_One, Noto_Serif } from "next/font/google";
import "../styles/index.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });
const darumadropOne = Darumadrop_One({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-darumadrop-one"
});
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit"
});
const sigmar = Sigmar({
  subsets: ["latin"],
  variable: "--font-sigmar",
  weight: "400"
});
const bowlbyOne = Bowlby_One({
  subsets: ["latin"],
  variable: "--font-bowlby-one",
  weight: "400"
});
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] ${outfit.className} ${darumadropOne.variable} ${outfit.variable} ${sigmar.variable} ${bowlbyOne.variable} ${notoSerif.variable}`}>
        <CartProvider>
          <Providers>
            <div className="relative">
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
              <PaperOverlay />
            </div>
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
