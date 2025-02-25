import { Urbanist } from "next/font/google";
import "@/styles/base.scss";

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
      <body className={`${urbanist.variable}`}>{children}</body>
    </html>
  );
}
