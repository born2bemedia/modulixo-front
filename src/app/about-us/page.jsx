import React from 'react'
import Hero from './components/Hero/Hero'
import Meet from './components/Meet/Meet';
import What from './components/What/What';
import Our from './components/Our/Our';
import Lets from './components/Lets/Lets';
import Beyond from './components/Beyond/Beyond';
import styles from "./page.module.scss";

export const metadata = {
  title: "About Modulixo | Crafting Digital Experiences in 3D, Motion & Design",
  description:
    "Learn more about Modulixo – a creative powerhouse specializing in 3D modelling, animation, video production, and UI/UX design. Discover our process and team.",
  openGraph: {
    title: "About Modulixo | Crafting Digital Experiences in 3D, Motion & Design",
    description:
      "Learn more about Modulixo – a creative powerhouse specializing in 3D modelling, animation, video production, and UI/UX design. Discover our process and team.",
    images: "https://modulixo.com/images/meta.png",
  },
};

export default function About() {
  return (
    <>
      <Hero />
      <Beyond />
      <What />
      <Our />
      <Meet />
      <Lets />
      <div className={styles.footerImage}></div>
    </>
  );
}