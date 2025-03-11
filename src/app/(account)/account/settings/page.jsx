import React from "react";
import YourData from "./components/YourData/YourData";
import styles from "./page.module.scss";
import AccountAccess from "./components/AccountAccess/AccountAccess";

const YourDataPage = () => {
  return (
    <>
      <div className={styles.settingsWrap}>
        <div>
          <h2>Personal Information</h2>
          <YourData />
        </div>
        <div>
          <h2>Account Access</h2>
        </div>
      </div>
    </>
  );
};

export default YourDataPage;
