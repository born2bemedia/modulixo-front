"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function SmoothScrolling({ children }) {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
    

    setTimeout(() => {
      const windowHeight = document.documentElement.scrollHeight;
      lenis.dimensions.scrollHeight = windowHeight;
      console.log("lenis instance:", lenis.dimensions.scrollHeight);
    }, 1000);
    

    const handleScrollToTop = () => {
      if (lenis) {
        lenis.start();
        window.scrollTo(0, 0);
      }
    };

    handleScrollToTop();
  }, [pathname, lenis]);

  return (
    <ReactLenis className="h-full" options={{ lerp: 0.1 }} root>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
