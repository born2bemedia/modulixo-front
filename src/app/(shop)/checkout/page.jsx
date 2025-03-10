import React from "react";
import Checkout from "./_components/Checkout/Checkout";
import ThanksPopup from "@/shared/ThanksPopup/ThanksPopup";

export const metadata = {
  title: "Checkout | 3Dellium",
  description: "",
  openGraph: {
    title: "Checkout | 3Dellium",
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
