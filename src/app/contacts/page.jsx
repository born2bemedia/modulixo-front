import React from "react";
import ContactDetails from "./components/ContactDetails";

export const metadata = {
  title: "Contact Modulixo | Let’s Discuss Your Project",
  description:
    "Have an idea? Need a quote? Contact Modulixo to discuss 3D modelling, animation, video production, and UI/UX design solutions.",
  openGraph: {
    title: "Contact Modulixo | Let’s Discuss Your Project",
    description:
      "Have an idea? Need a quote? Contact Modulixo to discuss 3D modelling, animation, video production, and UI/UX design solutions.",
    images: "https://modulixo.com/images/meta.png",
  },
};

const page = () => {
  return (
    <>
      <ContactDetails />
    </>
  );
};

export default page;
