import { Urbanist } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";
import GetQuotePopup from "@/shared/GetQuotePopup/GetQuotePopup";
import ThanksPopup from "@/shared/ThanksPopup/ThanksPopup";
import SmoothScrolling from "@/shared/SmoothScrolling";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Script from "next/script";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Modulixo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-X4YTW1XWJH" />

      <body
        className={`${urbanist.variable} ${urbanist.className}`}
        style={{ position: "relative" }}
      >
        <SmoothScrolling>
          <Header />
          <main>{children}</main>
          <Footer />
          <GetQuotePopup />
          <ThanksPopup />
        </SmoothScrolling>
        <ToastContainer />
      </body>
    </html>
  );
}
