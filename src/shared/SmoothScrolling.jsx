"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function SmoothScrolling({ children }) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    }
  }, [pathname]);

  useEffect(() => {
    const handleLoad = () => {
      if (lenis) {
        lenis.resize();
      }
    };

    window.addEventListener("load", handleLoad);

    document.fonts.ready.then(() => {
      if (lenis) {
        lenis.resize();
      }
    });

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
