"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Instagram from "@/shared/ui/socials/Instagram";
import Facebook from "@/shared/ui/socials/Facebook";
import X from "@/shared/ui/socials/X";
import MenuIcon from "../icons/MenuIcon";
import { usePathname } from "next/navigation";
import ChevronDown from "../icons/ChevronDown";
import HeadAccount from "../ui/HeadAccount/HeadAccount";
import CloseIcon from "../icons/CloseIcon";

const Header = () => {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  // Ref for the button that triggers the submenu.
  const subMenuButtonRef = useRef(null);

  useEffect(() => {
    setIsMenuPopupOpen(false);
    setIsSubMenuOpen(false);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updates submenu position when clicking the submenu button.
  const subMenuHandler = (e) => {
    e.preventDefault();
    if (subMenuButtonRef.current) {
      const rect = subMenuButtonRef.current.getBoundingClientRect();
      setSubmenuPosition({
        top: rect.bottom,
        left: rect.left + 30,
      });
    }
    setIsSubMenuOpen((prev) => !prev);
  };

  // When submenu is open, update its position on scroll.
  useEffect(() => {
    const updateSubmenuPosition = () => {
      if (isSubMenuOpen && subMenuButtonRef.current) {
        const rect = subMenuButtonRef.current.getBoundingClientRect();
        setSubmenuPosition({
          top: rect.bottom,
          left: rect.left + 30,
        });
      }
    };

    window.addEventListener("scroll", updateSubmenuPosition);
    return () => window.removeEventListener("scroll", updateSubmenuPosition);
  }, [isSubMenuOpen]);

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
              <button className={styles.menuButton} onClick={menuHandler}>
                {isMenuPopupOpen ? <CloseIcon /> : <MenuIcon />}
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
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <button ref={subMenuButtonRef} onClick={subMenuHandler}>
                      Services <ChevronDown />
                    </button>
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
      <div
        className={`${styles.subMenuDesktop} ${isSubMenuOpen ? styles.open : ""}`}
        style={{ top: submenuPosition.top, left: submenuPosition.left }}
      >
        <div>
          <Link href="/services/3d-modelling">3D Modelling</Link>
          <Link href="#">Animation</Link>
          <Link href="#">Production</Link>
          <Link href="#">UI/UX Design</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
