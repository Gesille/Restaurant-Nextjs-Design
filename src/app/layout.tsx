import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "font-awesome/css/font-awesome.min.css";
import "../styles/bootstrap.min.css";
import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/flaticon.css";
import "../styles/style.css";
import "../styles/enhancements.css";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Topbar from "@/components/Topbar";

export const metadata: Metadata = {
  title: { default: "ASHTAR MISHOO Restaurant", template: "%s | Ashtar mishoo" },
  description: "ASHTAR MISHOO restaurant: menu, master chefs, table reservations and news.",
  icons: {
    icon: "/logo/logo.png", 
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <ScrollProgress />
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
// 