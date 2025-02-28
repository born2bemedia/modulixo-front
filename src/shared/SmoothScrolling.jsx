"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function SmoothScrolling({ children }) {
  const pathname = usePathname();
  const lenis = useLenis();

  // On route change, scroll to top and force a resize.
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    }
  }, [pathname, lenis]);

  // Resize on window load.
  useEffect(() => {
    const handleLoad = () => {
      if (lenis) {
        lenis.resize();
      }
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [lenis]);

  // Resize when fonts have finished loading.
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (lenis) {
        lenis.resize();
      }
    });
  }, [lenis]);

  // Also trigger a resize on window resize events.
  useEffect(() => {
    const handleResize = () => {
      if (lenis) {
        lenis.resize();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [lenis]);

  // Optional: trigger a delayed resize to catch any late layout shifts.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (lenis) {
        lenis.resize();
      }
    }, 1000); // Adjust the delay as needed.
    return () => clearTimeout(timeout);
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
