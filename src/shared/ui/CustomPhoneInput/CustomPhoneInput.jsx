"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import { filteredCountries } from "@/helpers/excludedCountries";

const DynamicPhoneInput = dynamic(() => import("react-phone-input-2"), {
  ssr: false,
});

const allowedCountries = filteredCountries.map(
  (country) => country.value.toLowerCase()
);
//console.log("allowedCountries", allowedCountries);

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
      <DynamicPhoneInput
        {...props}
        enableSearch={false}
        onlyCountries={allowedCountries}
      />
    </div>
  );
}
