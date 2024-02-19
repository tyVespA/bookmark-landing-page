import React from "react";
import styles from "./FeatureTab.module.css";
import Button from "./Button";

export default function FeatureTab({ imgName, title, children }) {
  return (
    <div className={styles.featureTabContainer}>
      <div className={styles.imageContainer}>
        <img src={`../images/${imgName}.svg`} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{children}</p>
        <Button backgroundColor="blue">More info</Button>
      </div>
    </div>
  );
}
