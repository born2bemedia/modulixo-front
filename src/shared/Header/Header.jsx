"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Instagram from "@/shared/ui/socials/Instagram";
import Facebook from "@/shared/ui/socials/Facebook";
import X from "@/shared/ui/socials/X";
import MenuIcon from "../icons/MenuIcon";
import { usePathname } from "next/navigation";
import ChevronDown from "../icons/ChevronDown";
import HeadAccount from "../ui/HeadAccount/HeadAccount";

const Header = () => {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuPopupOpen(false);
  }, [pathname]);

  const menuHandler = () => {
    setIsMenuPopupOpen(!isMenuPopupOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.topGradient} />
      <div className={styles.topHeader}>
        <div className="_container">
          <div className={styles.row}>
            <div className={styles.contacts}>
              <Link href="#">example@email.com</Link>
              <Link href="#">+1(000) 000-0000</Link>
            </div>
            <div className={styles.soc}>
              <Instagram />
              <Facebook />
              <X />
            </div>
          </div>
        </div>
      </div>
      <header
        className={`${styles.header} ${scrolling ? styles.scrolling : ""} ${
          isMenuPopupOpen ? styles.open : ""
        }`}
      >
        <div className="_container">
          <div className={styles.headerWrap}>
            <Link href="/">
              <img src="/images/logo.svg" />
            </Link>
            <div className={styles.menuButtonWrap}>
              <Link href="#">
                <img src="/images/icons/cart.svg" />
              </Link>
              <button
                className={styles.menuButton}
                onClick={() => menuHandler()}
              >
                <MenuIcon />
              </button>
            </div>

            <div
              className={`${styles.row} ${isMenuPopupOpen ? styles.open : ""}`}
            >
              <div className={styles.col1}>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About</Link>
                  </li>
                  <li>
                    <Link href="#">
                      Services <ChevronDown />
                    </Link>
                    <div className={styles.subMenu}>
                      <div>
                        <Link href="/services/3d-modelling">3D Modelling</Link>
                        <Link href="#">Animation</Link>
                        <Link href="#">Production</Link>
                        <Link href="#">UI/UX Design</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="#">Showcase</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#">Insights</Link>
                  </li>
                  <li>
                    <Link href="#">Q&A</Link>
                  </li>
                  <li>
                    <Link href="#">Contacts</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.col2}>
                <Link href="#">
                  <img src="/images/icons/cart.svg" />
                </Link>
                <HeadAccount />
                <div className={styles.contacts}>
                  <Link href="#">example@email.com</Link>
                  <Link href="#">+1(000) 000-0000</Link>
                  <div className={styles.soc}>
                    <Instagram />
                    <Facebook />
                    <X />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
