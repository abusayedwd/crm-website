// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "../src/component/pages/Navbar";
// import Footer from "../src/component/pages/Footer";
import Head from "next/head";
import Providers from "@/redux/Provider";
import Navbar from "./component/pages/Navbar";
import Footer from "./component/pages/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CRM Web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" /> {/* Ensure the correct path to your logo */}
    
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers> 
        <Navbar />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
