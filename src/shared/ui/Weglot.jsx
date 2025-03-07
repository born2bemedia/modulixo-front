import { useWeglot } from "react-weglot";

export const Weglot = () => {
  const [lang, setLang] = useWeglot(
    "wg_9e939665942918481cb6c3058e0982524",
    "en"
  );
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        EN
      </button>
      <button
        className={lang === "de" ? "active" : ""}
        onClick={() => setLang("de")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        DE
      </button>
    </div>
  );
};
