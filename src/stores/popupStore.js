import { create } from "zustand";

const usePopupStore = create((set) => ({
  thanksPopupDisplay: false,
  thanksPopupDefaultDisplay: false,
  thanksPopupOrderDisplay: false,
  signPopupDisplay: false,
  signPopupType: "login",
  getQuotePopupDisplay: false,
  requestPopupDisplay: false,
  requestValue: "",
  thanksPopupRequestDisplay: false,

  setThanksPopupDisplay: (value) => set({ thanksPopupDisplay: value }),
  setThanksPopupDefaultDisplay: (value) =>
    set({ thanksPopupDefaultDisplay: value }),
  setThanksPopupOrderDisplay: (value) =>
    set({ thanksPopupOrderDisplay: value }),
  setSignPopupDisplay: (value) => set({ signPopupDisplay: value }),
  setSignPopupType: (value) => set({ signPopupType: value }),
  setGetQuotePopupDisplay: (value) => set({ getQuotePopupDisplay: value }),
  setRequestPopupDisplay: (value) => set({ requestPopupDisplay: value }),
  setRequestValue: (value) => set({ requestValue: value }),
  setThanksPopupRequestDisplay: (value) =>
    set({ thanksPopupRequestDisplay: value }),
}));

export default usePopupStore;
