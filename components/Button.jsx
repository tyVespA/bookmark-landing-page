import React from "react";
import styles from "./Button.module.css";

export default function Button({ backgroundColor, children, type = "submit" }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[backgroundColor]}`}
    >
      {children}
    </button>
  );
}
