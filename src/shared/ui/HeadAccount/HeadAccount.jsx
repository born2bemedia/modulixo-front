"use client";
import useAuthStore from "@/stores/authStore";
import React from "react";
import styles from "./HeadAccount.module.scss";
import Link from "next/link";
import usePopupStore from "@/stores/popupStore";

const HeadAccount = () => {
  const { user, logout } = useAuthStore();
  const {
    signPopupDisplay,
    setSignPopupDisplay,
    signPopupType,
    setSignPopupType,
  } = usePopupStore();

  const handleSignPopup = (type) => {
    setSignPopupType(type);
    setSignPopupDisplay(true);
  };

  return (
    <>
      {user ? (
        <div className={styles.headAccount}>
          <Link className={styles.user} href="/account">
            {user?.firstName} {user?.lastName}
            <span>
              <img src="/images/icons/user.svg" alt="account" />
            </span>
          </Link>
        </div>
      ) : (
        <div className={styles.headAccount}>
          <Link className={styles.login} href="/log-in">
            Login
          </Link>
          <Link className={styles.signUp} href="/sign-up">
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
};

export default HeadAccount;
