"use client";
import styles from "./Cart.module.scss";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@/shared/icons/DeleteIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCartStore from "@/stores/cartStore"; // Імпорт Zustend Store
import Image from "next/image";
import { API_URL } from "@/helpers/constants";
import TermsAndConditions from "../../../checkout/_components/Checkout/TermsAndConditions";

const Cart = () => {
  const {
    cart,
    deleteFromCart,
    clearCart,
    totalAmount,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <>
          <div className={styles.cart}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.imageWrapper}>
                  <Image src={`${API_URL}${item.image}`} alt={item.name} fill />
                </div>
                <div className={styles.cartItemInfo}>
                  <div className={styles.cartItemInfoHeader}>
                    <div className={styles.cartItemInfoHeaderLeft}>
                      <h3>{item.name}</h3>
                      <div className={styles.cartItemInfoPrice}>
                        <span>€</span>
                        {item.attributes.price}
                      </div>
                    </div>
                    <div className={styles.cartItemTotal}>
                      <span>€</span>
                      {item.quantity * item.attributes.price}
                    </div>
                  </div>
                  <div className={styles.cartItemInfoFooter}>
                    <div className={styles.cartItemInfoQuantity}>
                      <img
                        src="/images/cart/minus.svg"
                        onClick={() => decreaseQuantity(item.id)}
                      />
                      <span style={{ fontSize: "16px", fontWeight: "500" }}>
                        {item.quantity}
                      </span>
                      <img
                        src="/images/cart/plus.svg"
                        onClick={() => increaseQuantity(item.id)}
                      />
                    </div>
                    <button onClick={() => deleteFromCart(item.id)}>
                      Delete{" "}
                      <span>
                        <DeleteIcon />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartTotal}>
            <div>
              <span>Total</span>
              <span>€{totalAmount}</span>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Cart;
