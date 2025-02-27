import Lenis from "lenis";

let lenis;
if (typeof window !== "undefined") {
  lenis = new Lenis({
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true,
  });
}

export { lenis };
