import React from "react";
import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <section className={styles.featureSectionContainer}>
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <section className={styles.tabsSection}>
        <button className={styles.tabsButton}>Simple Bookmarking</button>
        <button className={styles.tabsButton}>Speedy Searching</button>
        <button className={styles.tabsButton}>Easy Sharing</button>
      </section>
    </section>
  );
}
