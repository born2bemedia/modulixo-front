"use client";
import { useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CustomPhoneInput(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      // If the wheel event occurs within the flag dropdown, stop propagation so Lenis doesn't capture it.
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
      <PhoneInput {...props} />
    </div>
  );
}
