"use client";
import React from "react";
import styles from "./ContactDetails.module.scss";
import ContactForm from "@/shared/ContactForm/ContactForm";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
// import Instagram from "@/shared/ui/socials/Instagram";
import Facebook from "@/shared/ui/socials/Facebook";
import X from "@/shared/ui/socials/X";
import {
  WEBSITE_EMAIL,
  WEBSITE_OFFICE_ADDRESS,
  WEBSITE_PHONE,
  WEBSITE_REGISTRATION_ADDRESS,
} from "@/helpers/constants";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <section className={styles.contactDetails}>
      <div className="_container">
        <SectionLabel text={"We’d Love to Hear from You!"} />
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionTitle text={"Get in Touch"} tag="h1" />
            <div className={styles.block}>
              <h3>Let’s Create Something Amazing Together</h3>
              <TextBlock text="Whether you have a question, a project idea, or need a custom quote, we’re here to help. At Modulixo, we believe that great collaborations start with a conversation. Reach out to us, and let’s bring your vision to life!" />
            </div>
            <div className={styles.contacts}>
              <Link href={`mailto:${WEBSITE_EMAIL}`}>
                <img src="/images/mail.svg" alt="email" />
                {WEBSITE_EMAIL}
              </Link>
              <Link href={`tel:${WEBSITE_PHONE}`}>
                <img src="/images/phone.svg" alt="phone" />
                {WEBSITE_PHONE}
              </Link>
            </div>
            <div className={styles.addresses}>
              <div>
                <h4>Office Address</h4>
                <TextBlock text={WEBSITE_OFFICE_ADDRESS} />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.6127708715953!2d21.018400976551856!3d52.28673167200099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eceac8e1fd7b7%3A0x3d916edfa3af8a43!2zxbt5dG9taWVyc2thIDUsIDAzLTM2MCBXYXJzemF3YSwg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sua!4v1741706201177!5m2!1sru!2sua&language=en"
                  width="370"
                  height="244"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <h4>Registration Address</h4>
                <TextBlock text={WEBSITE_REGISTRATION_ADDRESS} />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.040814911675!2d21.00408047654785!3d52.224476271985175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccecfd4f37cb%3A0x38c31ba5cb5ac520!2zSG_FvGEgODYsIDAwLTY4MiBXYXJzemF3YSwg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sua!4v1741706376352!5m2!1sru!2sua&language=en"
                  width="370"
                  height="244"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className={styles.block}>
              <h3>Connect with Us on Social Media</h3>
              <TextBlock text="Follow Modulixo to stay updated on our latest projects, industry trends, and creative insights. Engage with us, get inspired, and be part of our growing community!" />
              <div className={styles.soc}>
                {/* <Instagram /> */}
                <Facebook />
                <X />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
