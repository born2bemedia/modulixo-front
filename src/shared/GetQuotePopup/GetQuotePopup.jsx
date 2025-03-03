"use client";
import React, { useEffect } from "react";
import styles from "./GetQuotePopup.module.scss";
import Image from "next/image";
import usePopupStore from "@/stores/popupStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WhiteButton from "../ui/WhiteButton/WhiteButton";
import CloseIcon from "../icons/CloseIcon";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import GetQuoteForm from "../GetQuoteForm/GetQuoteForm";
import TextBlock from "../ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";

const GetQuotePopup = () => {
  const { getQuotePopupDisplay, setGetQuotePopupDisplay } = usePopupStore();
  const router = useRouter();

  const handleClose = () => {
    setGetQuotePopupDisplay(false);
    //router.push("/");
  };
  return (
    <>
      {getQuotePopupDisplay && (
        <motion.div
          className={`${styles.getQuotePopup} ${
            getQuotePopupDisplay && styles.popupOpened
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
              <SectionTitle
                text="Get a Quote – Transforming <br/>Your Ideas into Reality"
                tag={"h2"}
              />
              <TextBlock text="Your vision deserves expert craftsmanship. Fill out the form below, and we’ll get back to you within 24 hours with a <br/>custom quote and the next steps. Let’s create something extraordinary together! " />
              <GetQuoteForm />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GetQuotePopup;
