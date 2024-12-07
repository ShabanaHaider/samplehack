import Navbar from "./Component/Navbar";
import Navbar2 from "./Component/Navbar2";
import Footer from "./Component/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Navbar2 />

        {children}
         <Footer />
      </body>
    </html>
  );
}


