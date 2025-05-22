"use client";
import React, { useEffect } from "react";
import styles from "./RequestPopup.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WhiteButton from "../ui/WhiteButton/WhiteButton";
import CloseIcon from "../icons/CloseIcon";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import RequestForm from "../RequestForm/RequestForm";

const RequestPopup = () => {
  const {
    requestPopupDisplay,
    setRequestPopupDisplay,
    requestValue,
    setThanksPopupRequestDisplay,
  } = usePopupStore();
  const router = useRouter();

  const handleClose = () => {
    setRequestPopupDisplay(false);
    setThanksPopupRequestDisplay(false);
    //router.push("/");
  };
  return (
    <>
      {requestPopupDisplay && (
        <motion.div
          className={`${styles.getQuotePopup} ${
            requestPopupDisplay && styles.popupOpened
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className={styles.popupWrap}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            style={{ overflowY: "auto" }}
          >
            <button className={styles.closeButton} onClick={handleClose}>
              <CloseIcon />
            </button>
            <div className={styles.popupInner}>
              <SectionTitle text="Package Request Form" tag={"h2"} />
              <RequestForm requestValue={requestValue} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default RequestPopup;
