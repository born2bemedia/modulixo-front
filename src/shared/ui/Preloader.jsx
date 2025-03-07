"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import the Player component with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const Preloader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 200);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        color: "#ffffff",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#0c0b0e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.5s ease",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {/*<Player
        src="/images/preloader.json"  
        autoplay
        loop
        style={{ width: 300, height: 300 }}
      />*/}
      <img
        src="/preloader.gif"
        alt="preloader"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Preloader;
