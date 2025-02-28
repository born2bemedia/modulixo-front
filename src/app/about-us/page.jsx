import React from 'react'
import Hero from './components/Hero/Hero'
import Meet from './components/Meet/Meet';
import What from './components/What/What';
import Our from './components/Our/Our';
import Lets from './components/Lets/Lets';
import Beyond from './components/Beyond/Beyond';
import styles from "./page.module.scss";

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