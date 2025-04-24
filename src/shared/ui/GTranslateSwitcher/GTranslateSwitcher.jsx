"use client";
import { useEffect, useState, useRef } from "react";

const GTranslateSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("PL");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    
    // Set Polish as default language
    const doTranslate = () => {
      if (window.doGTranslate) {
        window.doGTranslate('en|pl');
        setCurrentLang("PL");
      } else {
        setTimeout(doTranslate, 100);
      }
    };
    
    doTranslate();
  }, []);

  useEffect(() => {
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
    if (window.doGTranslate) {
      window.doGTranslate(`en|${language}`);
      setCurrentLang(languageCode);
      setIsDropdownOpen(false);
    }
  };

  if (!isClient) {
    return <div className="gtranslate_wrapper" style={{ width: "28px", height: "20px" }}></div>;
  }

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div className="gtranslate_wrapper" style={{ cursor: "pointer" }}>
        <div id="google_translate_element2"></div>
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
            right: "0",
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
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <img width={28} height={20} src="/images/EN.svg" alt="English" />
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
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <img width={28} height={20} src="/images/DE.svg" alt="German" />
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
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <img width={28} height={20} src="/images/IT.svg" alt="Italian" />
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
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <img width={28} height={20} src="/images/PL.svg" alt="Polish" />
            Polish
          </li>
        </ul>
      )}
    </div>
  );
};

export default GTranslateSwitcher;
