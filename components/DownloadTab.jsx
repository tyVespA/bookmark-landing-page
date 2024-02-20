import React from "react";
import styles from "./DownloadTab.module.css";
import Button from "./Button";

export default function DownloadTab({ imgName, title, children }) {
  return (
    <div className={styles.downloadTab}>
      <img src={`../images/${imgName}.svg`} alt="" />
      <h3>{title}</h3>
      <p>{children}</p>
      <img src="../images/bg-dots.svg" alt="" className={styles.divider} />
      <Button backgroundColor="blue">Add & Install Extension</Button>
    </div>
  );
}
