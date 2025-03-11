"use client";
import React, { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast, ToastContainer } from "react-toastify"; // Import Toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import styles from "./AddToCartButton.module.scss";
import PlusIcon from "@/shared/icons/PlusIcon";

const AddToCartButton = ({ product, text = "Add to cart", icon = true }) => {
  const { cart, addToCart } = useCartStore();
  const inCart = cart.some((item) => item.id === product.id);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(inCart);
  }, [cart]);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({
        id: product.id,
        documentId: product.documentId,
        name: product.title,
        quantity: 1,
        attributes: { price: product.price },
        image: product.image?.url,
      });
      toast.success(`${product.title} added to cart!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <button
        className={styles.addToCartButton}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {icon && <PlusIcon />}
        {isInCart ? "In Cart" : text}
      </button>
    </>
  );
};

export default AddToCartButton;
