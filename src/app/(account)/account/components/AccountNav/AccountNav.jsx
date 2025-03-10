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
        href="/account/settings"
        className={pathname === "/account/settings" ? styles.current : ""}
      >
        Account Settings
      </Link>
      <Link
        href="/account/wishlist"
        className={pathname === "/account/wishlist" ? styles.current : ""}
      >
        Wishlist
      </Link>
      <div className={styles.divider}></div>
      <button onClick={logout}>Log Out</button>
    </nav>
  );
};

export default AccountNav;
