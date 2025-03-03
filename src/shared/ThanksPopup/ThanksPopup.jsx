"use client";
import React from "react";
import styles from "./ThanksPopup.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WhiteButton from "../ui/WhiteButton/WhiteButton";

const ThanksPopup = () => {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();
  const router = useRouter();

  const handleClose = () => {
    setThanksPopupDisplay(false);
    if (router.pathname === "/") {
      router.refresh();
    } else {
      router.push("/");
    }
  };
  return (
    <div
      className={`${styles.thanksPopup} ${
        thanksPopupDisplay && styles.popupOpened
      }`}
    >
      <div className="_container">
        <div className={styles.popupWrap}>
          <div className={styles.popupInner}>
            <img src="/images/icons/success.svg" alt="success" />
            <h2>
              Thank you for choosing Modulixo! <br />
              Our representative will reach out to you shortly.
            </h2>
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

export default ThanksPopup;
