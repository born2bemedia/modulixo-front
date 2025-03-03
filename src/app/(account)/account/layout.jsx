"use client";
import React, { useEffect } from "react";
import styles from "./layout.module.scss";
import useAuthStore from "@/stores/authStore";
import AccountNav from "./components/AccountNav/AccountNav";

import { useRouter } from "next/navigation";
import ThanksPopup from "@/shared/ThanksPopup/ThanksPopup";

const DashboardLayout = ({ children }) => {
  const { user, logout, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isHydrated) return;
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      <section className={styles.dashboard}>
        <div className="_container">
          <div className={styles.top}>
            <h2>
              Welcome, <span>{user?.firstName}!</span>
            </h2>

            <button onClick={logout}>Logout</button>
          </div>
          <div className={styles.body}>
            <AccountNav />
            <div>{children}</div>
          </div>
        </div>
      </section>

      <ThanksPopup />
    </>
  );
};

export default DashboardLayout;
