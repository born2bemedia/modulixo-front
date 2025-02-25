import Image from "next/image";
import Hero from "./components/Hero/Hero";
import WhatWeCreate from "./components/WhatWeCreate/WhatWeCreate";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeCreate />
    </>
  );
}
