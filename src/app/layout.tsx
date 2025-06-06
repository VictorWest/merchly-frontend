import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/transitions/ScrollToTop";

const poppins = Poppins({
    weight: '400',
    // variable: "--font-poppins",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Merchly",
  description: "The Merchly Fintech App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ScrollToTop />
        <Navigation key={"nav"} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
