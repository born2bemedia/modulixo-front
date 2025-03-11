"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";

// Dynamically import PhoneInput with SSR disabled.
const DynamicPhoneInput = dynamic(() => import("react-phone-input-2"), {
  ssr: false,
});

export default function CustomPhoneInput(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.target.closest(".flag-dropdown")) {
        e.stopPropagation();
      }
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener("wheel", handleWheel, { capture: true });
    }

    return () => {
      if (node) {
        node.removeEventListener("wheel", handleWheel, { capture: true });
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <DynamicPhoneInput {...props} />
    </div>
  );
}
