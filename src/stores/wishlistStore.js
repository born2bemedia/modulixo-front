import { create } from "zustand";

const useWishlistStore = create((set, get) => ({
  wishlist:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("wishlist")) || []
      : [],

  addToWishlist: (product) => {
    const { wishlist } = get();
    const existingIndex = wishlist.findIndex((item) => item.id === product.id);
    if (existingIndex === -1) {
      const updatedWishlist = [...wishlist, product];
      set({ wishlist: updatedWishlist });
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  },

  removeFromWishlist: (productId) => {
    const { wishlist } = get();
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    set({ wishlist: updatedWishlist });
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  },

  clearWishlist: () => {
    set({ wishlist: [] });
    localStorage.removeItem("wishlist");
  },
}));

export default useWishlistStore;
