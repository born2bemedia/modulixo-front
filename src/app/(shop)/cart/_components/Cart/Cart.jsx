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

  //console.log(cart);
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
                    <button onClick={() => deleteFromCart(item.id)}>
                      <DeleteIcon />
                    </button>
                    <h3>{item.name}</h3>
                  </div>
                  <div className={styles.cartItemInfoFooter}>
                    <div className={styles.cartItemInfoPriceItem}>
                      {item.quantity * item.attributes.price}
                      <span>€</span>
                    </div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartTotal}>
            <span>
              Total cost:
              <p className={styles.delievery}>
                Delivery method: by email <br />
                (within 3 business days)
              </p>
            </span>
            <span>€{totalAmount}</span>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Cart;
