import React from "react";
import styles from "./Button.module.css";

export default function Button({ backgroundColor, children }) {
  return (
    <button className={`${styles.button} ${styles[backgroundColor]}`}>
      {children}
    </button>
  );
}
