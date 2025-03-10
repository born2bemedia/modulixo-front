import React from "react";
import styles from "./AccountNav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthStore from "@/stores/authStore";

const AccountNav = () => {
  const { logout } = useAuthStore();
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <Link
        href="/account"
        className={pathname === "/account" ? styles.current : ""}
      >
        Order History
      </Link>
      <Link
        href="/account/your-data"
        className={pathname === "/account/your-data" ? styles.current : ""}
      >
        Account Settings
      </Link>
      <Link
        href="/account/account-access"
        className={pathname === "/account/account-access" ? styles.current : ""}
      >
        Account Access
      </Link>
      <div className={styles.divider}></div>
      <button onClick={logout}>Log Out</button>
    </nav>
  );
};

export default AccountNav;
