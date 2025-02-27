import { Urbanist } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";
import GetQuotePopup from "@/shared/GetQuotePopup/GetQuotePopup";

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
      <body
        className={`${urbanist.variable} ${urbanist.className}`}
        style={{ position: "relative" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <GetQuotePopup />
      </body>
    </html>
  );
}
