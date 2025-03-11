import React from "react";
import PackageSection from "./components/PackageSection/PackageSection";
import PricingDownload from "./components/PricingDownload/PricingDownload";
import PricingHero from "./components/PricingHero/PricingHero";

const page = () => {
  return (
    <>
      <PricingHero />
      <PackageSection
        title="Animation Packages"
        description="Flexible, scalable, and tailored to your needs — our packages fit every project, from short clips to high-end cinematic productions."
        categorySlug="animation-package"
        color="#09f"
      />
      <PackageSection
        title="Video Production Packages"
        description="We offer flexible packages for creatives and brands looking for exceptional video content."
        categorySlug="video-production-package"
        color="#7B00FF"
      />
      <PackageSection
        title="UI/UX Packages"
        description="We offer scalable design solutions tailored for individuals and independent creators."
        categorySlug="uiux-package"
        color="#00FFF2"
      />
      <PricingDownload />
    </>
  );
};

export default page;
