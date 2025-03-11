import React from "react";
import Checkout from "./_components/Checkout/Checkout";
import ThanksPopup from "@/shared/ThanksPopup/ThanksPopup";
import ThanksPopupOrder from "@/shared/ThanksPopupOrder/ThanksPopupOrder";

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
      <ThanksPopupOrder />
    </>
  );
};

export default CheckoutPage;
