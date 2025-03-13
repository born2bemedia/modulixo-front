import React from "react";
import ModellingHero from "./components/ModellingHero/ModellingHero";
import CategorySection from "../../../shared/ui/CategorySection/CategorySection";
import ModellingContact from "./components/ModellingContact/ModellingContact";

export const metadata = {
  title: "3D Modelling Services | Print-Ready, High-Quality Digital Designs",
  description:
    "Explore our expertly crafted 3D models designed for printing. From home decor to custom prototypes, Modulixo delivers precision in every design.",
  openGraph: {
    title: "3D Modelling Services | Print-Ready, High-Quality Digital Designs",
    description:
      "Explore our expertly crafted 3D models designed for printing. From home decor to custom prototypes, Modulixo delivers precision in every design.",
    images: "https://modulixo.com/images/meta.png",
  },
};

const ModellingPage = () => {
  return (
    <>
      <ModellingHero />
      <CategorySection
        title={"Home & Decor"}
        subtitle={"Elevate Your Space with 3D-Printed Elegance"}
        description={
          "Transform your living space with a unique, 3D-printed home décor. From modern vases to space-saving organizers, our designs blend style and functionality, adding a personalized touch to any home."
        }
        link={"/services/3d-modelling/home-and-decor"}
        buttonText={"Explore Home & Decor Models"}
        categorySlug={"home-and-decor"}
      />
      <CategorySection
        title={"Toys & Collectibles"}
        subtitle={"Play, Collect, Create – 3D Models for Fun & Display"}
        description={
          "Bring imagination to life with articulated figures, puzzles, and collectibles designed for 3D printing enthusiasts of all ages. Our models add a creative twist to every collection, whether for play or display."
        }
        link={"/services/3d-modelling/toys-and-collectibles"}
        buttonText={"Browse Toys & Collectibles"}
        categorySlug={"toys-and-collectibles"}
      />
      <CategorySection
        title={"Office & Stationery"}
        subtitle={"Smart Designs for a More Productive Workspace"}
        description={
          "Upgrade your desk with functional 3D-printed tools. From cable organizers to ergonomic stands, our designs help streamline workspaces while adding a touch of modern innovation."
        }
        link={"/services/3d-modelling/office-and-stationery"}
        buttonText={"Shop Office Essentials"}
        categorySlug={"office-and-stationery"}
      />
      <CategorySection
        title={"Tech & Gaming"}
        subtitle={"Game On – 3D Accessories for Gamers & Tech Lovers"}
        description={
          "Enhance your gaming and tech setup with custom controller stands, headphone hooks, and cable management solutions. Designed for functionality and style, these prints bring digital convenience to reality."
        }
        link={"/services/3d-modelling/tech-and-gaming"}
        buttonText={"Level Up with 3D Accessories"}
        categorySlug={"tech-and-gaming"}
      />
      <CategorySection
        title={"DIY & Tools"}
        subtitle={"Practical 3D-Printed Tools for Makers & Fixers"}
        description={
          "For those who love to build, tinker, and create, our DIY-friendly 3D models include adjustable wrenches, tool organizers, and modular storage solutions — engineered for real-world durability and usability."
        }
        link={"/services/3d-modelling/diy-and-tools"}
        buttonText={"Discover DIY & Tool Prints"}
        categorySlug={"diy-and-tools"}
      />
      <CategorySection
        title={"Fitness & Lifestyle"}
        subtitle={"Print Your Way to a Healthier Lifestyle"}
        description={
          "From gym accessories to ergonomic grips, our 3D-printed fitness collection is designed to enhance workouts, improve organization, and support an active lifestyle — one layer at a time."
        }
        link={"/services/3d-modelling/fitness-and-lifestyle"}
        buttonText={"Enhance Your Fitness Gear"}
        categorySlug={"fitness-and-lifestyle"}
      />
      <ModellingContact />
    </>
  );
};

export default ModellingPage;
