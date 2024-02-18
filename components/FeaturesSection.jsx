import React from "react";
import { useState } from "react";
import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.featureSectionContainer}>
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <section className={styles.tabsSection}>
        <button
          className={`${styles.tabsButton} ${
            activeIndex === 0 ? styles.active : ""
          }`}
          onClick={() => handleTabClick(0)}
        >
          Simple Bookmarking
        </button>
        <button
          className={`${styles.tabsButton} ${
            activeIndex === 1 ? styles.active : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Speedy Searching
        </button>
        <button
          className={`${styles.tabsButton} ${
            activeIndex === 2 ? styles.active : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Easy Sharing
        </button>
      </section>
    </section>
  );
}
