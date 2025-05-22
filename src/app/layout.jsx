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
import Preloader from "@/shared/ui/Preloader";
import CookiePopup from "@/shared/CookiePopup/CookiePopup";
import RequestPopup from "@/shared/RequestPopup/RequestPopup";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Modulixo | 3D Modelling, Animation, Video & UI/UX Solutions",
  description:
    "Bring your ideas to life with Modulixo! Explore expert 3D modelling, animation, video production, and UI/UX design services tailored for creatives and businesses.",
  openGraph: {
    title: "Modulixo | 3D Modelling, Animation, Video & UI/UX Solutions",
    description:
      "Bring your ideas to life with Modulixo! Explore expert 3D modelling, animation, video production, and UI/UX design services tailored for creatives and businesses.",
    images: "https://modulixo.com/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <GoogleAnalytics gaId="G-X4YTW1XWJH" />

      <body
        className={`${urbanist.variable} ${urbanist.className}`}
        style={{ position: "relative" }}
      >
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <GetQuotePopup />
        <RequestPopup />
        <ThanksPopup />
        <ToastContainer />
        <CookiePopup />
      </body>
    </html>
  );
}
