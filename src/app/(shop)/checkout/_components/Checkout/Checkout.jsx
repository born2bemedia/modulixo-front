"use client";
import styles from "./Checkout.module.scss";
import React, { useState, useEffect } from "react";
import useCartStore from "@/stores/cartStore";
import CheckoutForm from "./CheckoutForm";
import Link from "next/link";
import Image from "next/image";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const Checkout = () => {
  const { cart } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.checkout}>
      <div className="_container">
        <div className={styles.checkoutForm}>
          {cart.length > 0 ? (
            <div className={styles.checkoutWrapper}>
              <CheckoutForm />
            </div>
          ) : (
            <section className={styles.emptyCart}>
              <div className="_container">
                <div className={styles.content}>
                  <Image
                    src="/images/cart.webp"
                    alt="404"
                    width={126}
                    height={120}
                  />
                  <h1>Your cart is empty</h1>
                  <TextBlock text="Browse our collection of unique creations and find the perfect design to bring your ideas to life!" />
                  <WhiteButton text="Start Exploring" url="/" />
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
