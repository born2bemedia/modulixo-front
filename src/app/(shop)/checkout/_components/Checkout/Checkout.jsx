"use client";
import styles from "./Checkout.module.scss";
import React, { useState, useEffect } from "react";
import useCartStore from "@/stores/cartStore";
import CheckoutForm from "./CheckoutForm";
import Link from "next/link";
import Image from "next/image";

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
              <h1>Your Cart, Ready to Go</h1>
              <CheckoutForm />
            </div>
          ) : (
            <div className="_container">
              <div className={styles.emptyCart}>
                <div className={styles.emptyCartInner}>
                  <div className={styles.col1}>
                    <Image src={"/images/cart/empty.png"} alt="thanks" fill />
                  </div>
                  <div className={styles.col2}>
                    <h2>
                      Oops!
                      <br />
                      Your Cart is Empty
                      <span>Let’s Fill It with Something Amazing</span>
                    </h2>
                    <p>
                      It looks like you haven't added any digital creations yet.
                      At 3Dellium, every design is crafted to transform your
                      ideas into reality. Explore our collections and uncover
                      your next inspiration.
                    </p>
                    <Link href={"/3d-modelling"}>
                      <div>
                        <span>Start Here</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
