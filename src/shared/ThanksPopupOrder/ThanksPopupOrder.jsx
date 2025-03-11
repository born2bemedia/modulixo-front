"use client";
import React from "react";
import styles from "./ThanksPopupOrder.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WhiteButton from "../ui/WhiteButton/WhiteButton";
import TextBlock from "../ui/TextBlock/TextBlock";
import useCartStore from "@/stores/cartStore";

const ThanksPopupOrder = () => {
  const { thanksPopupOrderDisplay, setThanksPopupOrderDisplay } =
    usePopupStore();
  const { cart, clearCart } = useCartStore();
  const router = useRouter();

  const handleClose = () => {
    setThanksPopupOrderDisplay(false);
    router.push("/");
    setTimeout(() => {
      clearCart();
    }, 1000);
  };
  return (
    <div
      className={`${styles.thanksPopup} ${
        thanksPopupOrderDisplay && styles.popupOpened
      }`}
    >
      <div className="_container">
        <div className={styles.popupWrap}>
          <div className={styles.popupInner}>
            <img src="/images/icons/success.svg" alt="success" />
            <h2>Thank You for Your Order!</h2>
            <TextBlock text="We’re grateful that you’ve chosen Modulixo. <br/>Our team will contact you shortly to confirm your order details." />
            <WhiteButton
              text="Back to Home"
              type={"button"}
              onClick={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksPopupOrder;
