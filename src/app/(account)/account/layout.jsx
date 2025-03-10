"use client";
import React, { useEffect } from "react";
import styles from "./layout.module.scss";
import useAuthStore from "@/stores/authStore";
import AccountNav from "./components/AccountNav/AccountNav";

import { usePathname, useRouter } from "next/navigation";
import ThanksPopup from "@/shared/ThanksPopup/ThanksPopup";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";

const DashboardLayout = ({ children }) => {
  const { user, logout, isHydrated } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

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
            {pathname !== "/account/wishlist" ? (
              <h1>
                Welcome, <span>{user?.firstName}!</span>
              </h1>
            ) : (
              <>
                <h1>Welcome to Your Modulixo Wishlist!</h1>
                <TextBlock text="This is your personalized space to save and organize your favorite 3D models and animations. Easily revisit and manage the designs that inspire you anytime." />
              </>
            )}
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
