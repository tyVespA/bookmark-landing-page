import React from "react";
import logoBookmark from "/logo-bookmark.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <button>
          <a href="/">
            <img src={logoBookmark} alt="Bookmark logo" />
          </a>
        </button>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
