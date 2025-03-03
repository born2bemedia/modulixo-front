import React from "react";
import styles from "./AccountNav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AccountNav = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <Link
        href="/account"
        className={pathname === "/account" ? styles.current : ""}
      >
        Your orders
      </Link>
      <Link
        href="/account/your-data"
        className={pathname === "/account/your-data" ? styles.current : ""}
      >
        Your Data
      </Link>
      <Link
        href="/account/account-access"
        className={pathname === "/account/account-access" ? styles.current : ""}
      >
        Account Access
      </Link>
    </nav>
  );
};

export default AccountNav;
