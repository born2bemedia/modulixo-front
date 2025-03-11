"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AddToWishlistButton.module.scss";
import useWishlistStore from "@/stores/wishlistStore";
import WishListIcon from "@/shared/icons/WishListIcon";
import useAuthStore from "@/stores/authStore";

const AddToWishlistButton = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const inWishlist = wishlist.some((item) => item.id === product.id);
  const [isInWishList, setIsInWishList] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    setIsInWishList(inWishlist);
  }, [wishlist, inWishlist]);

  const handleClick = () => {
    if (!isInWishList) {
      addToWishlist({
        id: product.id,
        documentId: product.documentId,
        name: product.title,
        quantity: 1,
        attributes: { price: product.price },
        image: product.image?.url,
      });
      toast.success(`${product.title} added to wishlist!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      removeFromWishlist(product.id);
      toast.success(`${product.title} removed from wishlist!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <button
        className={`${styles.addToWishlistButton} ${
          isInWishList ? styles.inWishlist : ""
        }`}
        onClick={handleClick}
      >
        <WishListIcon />
      </button>
    </>
  );
};

export default AddToWishlistButton;
