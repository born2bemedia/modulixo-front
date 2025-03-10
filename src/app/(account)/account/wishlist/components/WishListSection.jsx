"use client";
import useWishlistStore from "@/stores/wishlistStore";
import styles from "./WishListSection.module.scss";
import { API_URL } from "@/helpers/constants";
import DeleteIcon from "@/shared/icons/DeleteIcon";
import { useEffect, useState } from "react";
import Image from "next/image";

const WishListSection = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted && (
        <div className={styles.wishlist}>
          {wishlist.map((item) => (
            <div key={item.id} className={styles.wishlistItem}>
              <div className={styles.wishlistItemImage}>
                <Image
                  src={`${API_URL}${item.image}`}
                  alt={item.name}
                  width={92}
                  height={92}
                />
              </div>
              <div className={styles.wishlistItemInfo}>
                <h3>{item.name}</h3>
              </div>
              <div className={styles.wishlistItemActions}>
                <button onClick={() => removeFromWishlist(item.id)}>
                  Delete{" "}
                  <span>
                    <DeleteIcon />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WishListSection;
