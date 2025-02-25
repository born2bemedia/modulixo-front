// lib/useCountryCode.js
import { useEffect, useState } from "react";
import axios from "axios";

const useCountryCode = () => {
  const [countryCode, setCountryCode] = useState("us"); // Default to "us"

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data && data.country_code) {
          setCountryCode(data.country_code.toLowerCase());
        }
      } catch (error) {
        console.error("Error fetching user country:", error);
      }
    };

    fetchCountryCode();
  }, []);

  return countryCode;
};

export default useCountryCode;
