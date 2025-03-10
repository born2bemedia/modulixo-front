import React from "react";
import Checkout from "./_components/Checkout/Checkout";
import ThanksPopup from "@/shared/ThanksPopup/ThanksPopup";

export const metadata = {
  title: "Checkout | Modulixo",
  description: "",
  openGraph: {
    title: "Checkout | Modulixo",
    description: "",
    //images: "#",
  },
};

const CheckoutPage = () => {
  return (
    <>
      <Checkout />
      <ThanksPopup />
    </>
  );
};

export default CheckoutPage;
