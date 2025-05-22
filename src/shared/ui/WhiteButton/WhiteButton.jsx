"use client";
import ButtonArrow from "@/shared/icons/ButtonArrow";
import Link from "next/link";
import React from "react";
import styles from "./WhiteButton.module.scss";
import usePopupStore from "@/stores/popupStore";

const WhiteButton = ({ text, type, onClick, url, requestValue }) => {
  const { setGetQuotePopupDisplay, setRequestPopupDisplay, setRequestValue } =
    usePopupStore();

  const handleClick = () => {
    setGetQuotePopupDisplay(true);
  };

  const handleRequestClick = () => {
    setRequestPopupDisplay(true);
    setRequestValue(requestValue);
  };

  switch (type) {
    case "button":
      return (
        <button className={styles.whiteButton} onClick={onClick}>
          {text}
          <ButtonArrow />
        </button>
      );
      break;
    case "link":
      return (
        <Link className={styles.whiteButton} href={url}>
          {text}
          <ButtonArrow />
        </Link>
      );
      break;
    case "popup":
      return (
        <button className={styles.whiteButton} onClick={() => handleClick()}>
          {text}
          <ButtonArrow />
        </button>
      );
    case "request":
      return (
        <button
          className={styles.whiteButton}
          onClick={() => handleRequestClick()}
        >
          {text}
        </button>
      );
    default:
      return (
        <Link className={styles.whiteButton} href={url}>
          {text}
          <ButtonArrow />
        </Link>
      );
  }
};

export default WhiteButton;
