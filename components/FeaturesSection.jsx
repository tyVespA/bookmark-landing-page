import React from "react";
import { useState } from "react";
import styles from "./FeaturesSection.module.css";
import FeatureTab from "./FeatureTab";

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
      <section className={styles.featuresTabsSection}>
        <div
          className={`${styles.featureOneContainer} ${
            activeIndex === 0 ? "visible" : "hidden"
          }`}
        >
          <FeatureTab
            imgName="illustration-features-tab-1"
            title="Bookmark in one click"
          >
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </FeatureTab>
        </div>
        <div
          className={`${styles.featureTwoContainer} ${
            activeIndex === 1 ? "visible" : "hidden"
          }`}
        >
          <FeatureTab
            imgName="illustration-features-tab-2"
            title="Intelligent search"
          >
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </FeatureTab>
        </div>
        <div
          className={`${styles.featureThreeContainer} ${
            activeIndex === 2 ? "visible" : "hidden"
          }`}
        >
          <FeatureTab
            imgName="illustration-features-tab-3"
            title="Share your bookmarks"
          >
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </FeatureTab>
        </div>
      </section>
    </section>
  );
}
