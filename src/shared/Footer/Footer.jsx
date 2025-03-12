"use client";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Instagram from "../ui/socials/Instagram";
import Facebook from "../ui/socials/Facebook";
import X from "../ui/socials/X";
import TextBlock from "../ui/TextBlock/TextBlock";
import {
  WEBSITE_EMAIL,
  WEBSITE_OFFICE_ADDRESS,
  WEBSITE_PHONE,
  WEBSITE_REGISTRATION_ADDRESS,
} from "@/helpers/constants";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/log-in" &&
        pathname !== "/sign-up" &&
        pathname !== "/set-password" &&
        pathname !== "/reset-password" && (
          <footer className={styles.footer}>
            <div className="_container">
              <div className={styles.body}>
                <div className={styles.col1}>
                  <div className={styles.company}>
                    <Link href="/">
                      <img src="/images/logo.svg" />
                    </Link>
                    <TextBlock
                      text={`© ${currentYear} Savedavani Sp. z o.o.<br/>All Rights Reserved.`}
                    />
                  </div>
                  <div className={styles.addresses}>
                    <TextBlock
                      text={`Office address: ${WEBSITE_OFFICE_ADDRESS}`}
                    />
                    <TextBlock
                      text={`Registration address: ${WEBSITE_REGISTRATION_ADDRESS}`}
                    />
                  </div>
                </div>
                <div className={styles.col2}>
                  <div>
                    <h3>Company</h3>
                    <nav>
                      <Link href="/">Home</Link>
                      <Link href="#">About</Link>
                      <Link href="#">Contacts</Link>
                    </nav>
                  </div>
                  <div>
                    <h3>Company</h3>
                    <nav>
                      <Link href="/services/3d-modelling">3D Modelling</Link>
                      <Link href="/services/animation">Animation</Link>
                      <Link href="/services/video-production">
                        Video Production
                      </Link>
                      <Link href="/services/ui-ux-design">UI/UX Design</Link>
                    </nav>
                  </div>
                  <div>
                    <h3>Resources</h3>
                    <nav>
                      <Link href="/showcase">Showcase</Link>
                      <Link href="/pricing">Pricing</Link>
                      <Link href="/insights">Insights</Link>
                      <Link href="/qa">Q&A</Link>
                    </nav>
                  </div>
                  <div>
                    <h3>Legal</h3>
                    <nav>
                      <Link href="/legal/terms-and-conditions">
                        Terms and Conditions{" "}
                      </Link>
                      <Link href="/legal/privacy-policy">Privacy Policy</Link>
                      <Link href="/legal/cookie-policy">Cookie Policy</Link>
                      <Link href="/legal/refund-policy">Refund Policy</Link>
                    </nav>
                  </div>
                  <div>
                    <h3>Get in Touch</h3>
                    <nav>
                      <Link href={`mailto:${WEBSITE_EMAIL}`}>
                        {WEBSITE_EMAIL}
                      </Link>
                      <Link href={`tel:${WEBSITE_PHONE}`}>{WEBSITE_PHONE}</Link>
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
        )}
    </>
  );
};

export default Footer;
