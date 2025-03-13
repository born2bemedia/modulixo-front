import React from "react";
import ShowcaseHero from "./components/ShowcaseHero/ShowcaseHero";
import ShowcaseSection from "./components/ShowcaseSection/ShowcaseSection";
import {
  animationShowcase,
  threeDShowcase,
  uxShowcase,
  videoShowcase,
} from "@/lib/showcase";

export const metadata = {
  title: "Modulixo Portfolio | 3D Modelling, Animation, Video & UI/UX Work",
  description:
    "See Modulixo in action! Browse our portfolio of 3D models, animations, video productions, and UI/UX projects that bring ideas to life.",
  openGraph: {
    title: "Modulixo Portfolio | 3D Modelling, Animation, Video & UI/UX Work",
    description:
      "See Modulixo in action! Browse our portfolio of 3D models, animations, video productions, and UI/UX projects that bring ideas to life.",
    images: "https://modulixo.com/images/meta.png",
  },
};

const page = () => {
  return (
    <>
      <ShowcaseHero />
      <ShowcaseSection
        title={"3D Modelling – From Concept to Reality"}
        text={
          "Our 3D models are designed for efficiency, quality, and printability, making them perfect for functional prototypes, collectibles, home decor, and beyond."
        }
        subtitle={"Browse Our Packages"}
        buttonText={"View Pricing"}
        buttonLink={"/pricing"}
        showcase={threeDShowcase}
      />
      <ShowcaseSection
        title={"Animation – Motion That Tells a Story"}
        text={
          "We specialize in dynamic, expressive animations that enhance brand storytelling, product showcases, and UI experiences."
        }
        subtitle={"Your Story, Our Expertise"}
        buttonText={"Discover Our Team"}
        buttonLink={"/about-us"}
        showcase={animationShowcase}
      />
      <ShowcaseSection
        title={"Video Production – Storytelling Through Visuals"}
        text={
          "Our video production expertise ensures that every frame serves a purpose — a high-energy promo, a brand film, or a short-form social media video."
        }
        subtitle={"Let’s Make Your Project a Success"}
        buttonText={"Get a Quote"}
        buttonLink={"#"}
        showcase={videoShowcase}
      />
      <ShowcaseSection
        title={"UI/UX Design – Digital Experiences That Feel Right"}
        text={
          "Our UI/UX designs are crafted for clarity, engagement, and seamless navigation, ensuring an effortless user experience across platforms."
        }
        subtitle={"Your Turn?"}
        buttonText={"Start a Project"}
        buttonLink={"#"}
        showcase={uxShowcase}
      />
    </>
  );
};

export default page;
