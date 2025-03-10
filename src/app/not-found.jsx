import React from "react";
import styles from "./not-found.module.scss";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import Image from "next/image";

const notFound = () => {
  return (
    <section className={styles.notFound}>
      <div className="_container">
        <div className={styles.content}>
          <Image src="/images/404.png" alt="404" width={126} height={120} />
          <h1>Oops! Page Not Found</h1>
          <TextBlock text="Looks like this page took a little detour or doesn’t exist. No worries! Let’s get you back to where you need to be." />
          <WhiteButton text="Back to Home" url="/" />
        </div>
      </div>
    </section>
  );
};

export default notFound;
