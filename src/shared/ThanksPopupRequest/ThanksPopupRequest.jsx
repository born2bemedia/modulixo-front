"use client";
import React from "react";
import styles from "./ThanksPopupRequest.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WhiteButton from "../ui/WhiteButton/WhiteButton";

const ThanksPopupRequest = () => {
  const { thanksPopupRequestDisplay, setThanksPopupRequestDisplay } =
    usePopupStore();
  const router = useRouter();

  const handleClose = () => {
    setThanksPopupRequestDisplay(false);
    if (router.pathname === "/") {
      router.refresh();
    } else {
      router.push("/");
    }
  };
  return (
    <div
      className={`${styles.thanksPopup} ${
        thanksPopupRequestDisplay && styles.popupOpened
      }`}
    >
      <div className="_container">
        <div className={styles.popupWrap}>
          <div className={styles.popupInner}>
            <img src="/images/icons/success.svg" alt="success" />
            <h2>Thank you for reaching out!</h2>
            <p>
              We’ve received your request for a service package. Our team is
              reviewing your details and will contact you shortly <br />
              to discuss the next steps and how we can assist you.
            </p>
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

export default ThanksPopupRequest;
