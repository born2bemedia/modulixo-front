// lib/useCountryCode.js
import { useEffect, useState } from "react";
import axios from "axios";

const useCountryCode = () => {
  const [countryCode, setCountryCode] = useState("us"); // Default to "us"

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipResponse.json();

        const countryResponse = await fetch(
          `https://ipinfo.io/${ip}?token=a1de4b6d03b20a`
        );
        const { country } = await countryResponse.json();

        setCountryCode(country.toLowerCase());
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };

    fetchCountryCode();
  }, []);

  return countryCode;
};

export default useCountryCode;
