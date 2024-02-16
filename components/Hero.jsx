import React from "react";
import styles from "./Hero.module.css";
import Button from "./Button";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={styles.buttonsContainer}>
          <Button backgroundColor="blue">Get it on Chrome</Button>
          <Button backgroundColor="grey">Get it on Firefox</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="../images/illustration-hero.svg" alt="" />
      </div>
    </section>
  );
}
