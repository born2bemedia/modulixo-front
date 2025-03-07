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
import useCartStore from "@/stores/cartStore";
import { WEBSITE_EMAIL, WEBSITE_PHONE } from "@/helpers/constants";

const Header = () => {
  const { cart } = useCartStore();
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
  const [cartCount, setCartCount] = useState(0);
  const subMenuButtonRef = useRef(null);

  useEffect(() => {
    setIsMenuPopupOpen(false);
    setIsSubMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setCartCount(cart?.length);
  }, [cart]);

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

  useEffect(() => {
    const updateSubmenuPosition = () => {
      if (subMenuButtonRef.current) {
        const rect = subMenuButtonRef.current.getBoundingClientRect();
        setSubmenuPosition({
          top: rect.bottom,
          left: rect.left + 30,
        });
      }
    };
    updateSubmenuPosition();
    window.addEventListener("scroll", updateSubmenuPosition);
    return () => window.removeEventListener("scroll", updateSubmenuPosition);
  }, []);

  return (
    <>
      <div className={styles.topGradient} />
      <div className={styles.topHeader}>
        <div className="_container">
          <div className={styles.row}>
            <div className={styles.contacts}>
              <Link href="#">{WEBSITE_EMAIL}</Link>
              <Link href="#">{WEBSITE_PHONE}</Link>
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
              <Link href="#" className={styles.cart}>
                <img src="/images/icons/cart.svg" />
                {cartCount > 0 ? <span /> : ""}
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
                    <Link
                      href="/"
                      className={pathname === "/" ? styles.active : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className={pathname === "/about-us" ? styles.active : ""}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <button ref={subMenuButtonRef} onClick={subMenuHandler}>
                      Services <ChevronDown />
                    </button>
                    <div className={styles.subMenu}>
                      <div>
                        <Link
                          href="/services/3d-modelling"
                          className={
                            pathname === "/services/3d-modelling"
                              ? styles.active
                              : ""
                          }
                        >
                          3D Modelling
                        </Link>
                        <Link
                          href="/services/animation"
                          className={
                            pathname === "/services/animation"
                              ? styles.active
                              : ""
                          }
                        >
                          Animation
                        </Link>
                        <Link
                          href="/services/video-production"
                          className={
                            pathname === "/services/video-production"
                              ? styles.active
                              : ""
                          }
                        >
                          Production
                        </Link>
                        <Link
                          href="/services/ui-ux-design"
                          className={
                            pathname === "/services/ui-ux-design"
                              ? styles.active
                              : ""
                          }
                        >
                          UI/UX Design
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/showcase"
                      className={pathname === "/showcase" ? styles.active : ""}
                    >
                      Showcase
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className={pathname === "/pricing" ? styles.active : ""}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights"
                      className={pathname === "/insights" ? styles.active : ""}
                    >
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/qa"
                      className={pathname === "/qa" ? styles.active : ""}
                    >
                      Q&A
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacts"
                      className={pathname === "/contacts" ? styles.active : ""}
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.col2}>
                <Link href="#" className={styles.cart}>
                  <img src="/images/icons/cart.svg" />
                  {cartCount > 0 ? <span /> : ""}
                </Link>
                <HeadAccount />
                <div className={styles.contacts}>
                  <Link href="#">{WEBSITE_EMAIL}</Link>
                  <Link href="#">{WEBSITE_PHONE}</Link>
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
        className={`${styles.subMenuDesktop} ${
          isSubMenuOpen ? styles.open : ""
        }`}
        style={{ top: submenuPosition.top, left: submenuPosition.left }}
      >
        <div>
          <Link
            href="/services/3d-modelling"
            className={
              pathname === "/services/3d-modelling" ? styles.active : ""
            }
          >
            3D Modelling
          </Link>
          <Link
            href="/services/animation"
            className={pathname === "/services/animation" ? styles.active : ""}
          >
            Animation
          </Link>
          <Link
            href="/services/video-production"
            className={
              pathname === "/services/video-production" ? styles.active : ""
            }
          >
            Production
          </Link>
          <Link
            href="/services/ui-ux-design"
            className={
              pathname === "/services/ui-ux-design" ? styles.active : ""
            }
          >
            UI/UX Design
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
