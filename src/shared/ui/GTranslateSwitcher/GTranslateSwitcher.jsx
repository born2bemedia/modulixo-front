"use client";
import { useEffect, useState, useRef } from "react";
import Script from "next/script";

const GTranslateSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("PL");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Set default language cookie if not already set
      if (!document.cookie.includes("googtrans")) {
        // Use a more reliable cookie setting approach
        const domain = window.location.hostname;
        const cookieValue = `googtrans=/en/pl;path=/;domain=${domain}`;
        document.cookie = cookieValue;
        setCurrentLang("PL");
      } else {
        // Get current language from cookie
        const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
        if (match && match[1]) {
          setCurrentLang(match[1].toUpperCase());
        }
      }
    }
  }, []);

  useEffect(() => {
    // Handle clicks outside the dropdown to close it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language, languageCode) => {
    if (typeof window !== "undefined") {
      // Set the cookie with a more reliable approach
      const domain = window.location.hostname;
      const cookieValue = `googtrans=/en/${language};path=/;domain=${domain}`;
      document.cookie = cookieValue;

      // Also set a localStorage item as a backup
      localStorage.setItem("preferred_language", language);

      // Update the current language state
      setCurrentLang(languageCode);
      setIsDropdownOpen(false);

      // Force a page reload to apply the translation
      window.location.reload();
    }
  };

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div className="gtranslate_wrapper">
        <img
          width={28}
          height={20}
          src={`/images/${currentLang}.svg`}
          alt={currentLang}
          style={{ cursor: "pointer" }}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </div>

      {isDropdownOpen && (
        <ul
          translate="no"
          style={{
            position: "absolute",
            top: "40px",
            left: "-16px",
            zIndex: 10000,
            backgroundColor: "#000000D9",
            listStyle: "none",
            padding: "16px",
            margin: 0,
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "5px",
            width: "130px",
          }}
        >
          <li
            onClick={() => handleLanguageChange("en", "EN")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img width={28} height={20} src="/images/EN.svg" />
            English
          </li>
          <li
            onClick={() => handleLanguageChange("de", "DE")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img width={28} height={20} src="/images/DE.svg" />
            German
          </li>
          <li
            onClick={() => handleLanguageChange("it", "IT")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img width={28} height={20} src="/images/IT.svg" />
            Italian
          </li>
          <li
            onClick={() => handleLanguageChange("pl", "PL")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img width={28} height={20} src="/images/PL.svg" />
            Polish
          </li>
        </ul>
      )}

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script id="gtranslate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            // Check for preferred language in localStorage
            const preferredLang = localStorage.getItem('preferred_language');
            
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,pl,de,it',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'gtranslate_wrapper');
            
            // If there's a preferred language, set it after initialization
            if (preferredLang) {
              setTimeout(() => {
                const select = document.querySelector('.goog-te-combo');
                if (select) {
                  select.value = preferredLang;
                  const event = new Event('change', { bubbles: true });
                  select.dispatchEvent(event);
                }
              }, 1000);
            }
          }
        `}
      </Script>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default GTranslateSwitcher;
