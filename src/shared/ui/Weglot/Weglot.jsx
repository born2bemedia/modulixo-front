"use client";

import { useState } from "react";
import { useWeglot } from "react-weglot";

const LANGUAGES = [
  { code: "en", label: "English", icon: "EN" },
  
  { code: "pl", label: "Polish", icon: "PL" },
];

/**{ code: "de", label: "German", icon: "DE" },
  { code: "it", label: "Italian", icon: "IT" }, */

export default function LangChanger() {
  const [currentLang, setCurrentLang] = useWeglot(
    "wg_cedfef9d1e0bef51d3711570ff2682df9",
    "pl" // початкова мова
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (code) => {
    setCurrentLang(code);
    setIsDropdownOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsDropdownOpen((o) => !o)}
        style={{
          padding: 0,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img
          width={28}
          height={20}
          src={`/images/${currentLang.toUpperCase()}.svg`}
          alt={currentLang}
        />
      </button>

      {isDropdownOpen && (
        <ul
          translate="no"
          style={{
            position: "absolute",
            top: 40,
            left: -16,
            zIndex: 10000,
            backgroundColor: "#000000D9",
            listStyle: "none",
            padding: 16,
            margin: 0,
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: 5,
            width: 130,
          }}
        >
          {LANGUAGES.map(({ code, label, icon }) => (
            <li
              key={code}
              onClick={() => handleLanguageChange(code)}
              style={{
                padding: "7px 0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#fff",
              }}
            >
              <img
                width={28}
                height={20}
                src={`/images/${icon}.svg`}
                alt={label}
              />
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
