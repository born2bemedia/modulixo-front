import { create } from "zustand";

const usePopupStore = create((set) => ({
  thanksPopupDisplay: false,
  thanksPopupDefaultDisplay: false,
  thanksPopupOrderDisplay: false,
  signPopupDisplay: false,
  signPopupType: "login",
  getQuotePopupDisplay: false,

  setThanksPopupDisplay: (value) => set({ thanksPopupDisplay: value }),
  setThanksPopupDefaultDisplay: (value) =>
    set({ thanksPopupDefaultDisplay: value }),
  setThanksPopupOrderDisplay: (value) =>
    set({ thanksPopupOrderDisplay: value }),
  setSignPopupDisplay: (value) => set({ signPopupDisplay: value }),
  setSignPopupType: (value) => set({ signPopupType: value }),
  setGetQuotePopupDisplay: (value) => set({ getQuotePopupDisplay: value }),
}));

export default usePopupStore;
