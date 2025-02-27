import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Instagram from "../ui/socials/Instagram";
import Facebook from "../ui/socials/Facebook";
import X from "../ui/socials/X";
import TextBlock from "../ui/TextBlock/TextBlock";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.col1}>
            <div className={styles.company}>
              <Link href="/">
                <img src="/images/logo.svg" />
              </Link>
              <TextBlock
                text={`© ${currentYear} COMPANY NAME<br/>All Rights Reserved.`}
              />
            </div>
            <div className={styles.addresses}>
              <TextBlock text="Office address" />
              <TextBlock text="Registered address" />
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <h3>Company</h3>
              <nav>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Contacts</Link>
              </nav>
            </div>
            <div>
              <h3>Company</h3>
              <nav>
                <Link href="/services/3d-modelling">3D Modelling</Link>
                <Link href="#">Animation</Link>
                <Link href="#">Video Production</Link>
                <Link href="#">UI/UX Design</Link>
              </nav>
            </div>
            <div>
              <h3>Resources</h3>
              <nav>
                <Link href="#">Showcase</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Insights</Link>
                <Link href="#">Q&A</Link>
              </nav>
            </div>
            <div>
              <h3>Legal</h3>
              <nav>
                <Link href="#">Terms and Conditions </Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Cookie Policy</Link>
                <Link href="#">Refund Policy</Link>
              </nav>
            </div>
            <div>
              <h3>Get in Touch</h3>
              <nav>
                <Link href="#">example@email.com</Link>
                <Link href="#">+1(000) 000-0000</Link>
                <div className={styles.soc}>
                  <Instagram />
                  <Facebook />
                  <X />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
