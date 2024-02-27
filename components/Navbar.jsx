import React from "react";
import { useState } from "react";
import logoBookmark from "/logo-bookmark.svg";
import iconHamburger from "/icon-hamburger.svg";
import iconClose from "/icon-close.svg";
import styles from "./Navbar.module.css";
import Button from "./Button";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  function handleClick() {
    setMenuOpened(!menuOpened);
    console.log(menuOpened);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <button>
          <a href="/">
            <img src={logoBookmark} alt="Bookmark logo" />
          </a>
        </button>
      </div>
      <div className={`${styles.links} ${menuOpened ? "" : "displayNone"}`}>
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
            <Button backgroundColor="red">Login</Button>
          </li>
        </ul>
      </div>
      <button
        className={`${menuOpened ? "displayNone" : styles.hamburgerButton}`}
        onClick={handleClick}
      >
        <img src={iconHamburger} alt="Open menu icon" />
      </button>
      <button
        className={`${menuOpened ? styles.closeButton : "displayNone"}`}
        onClick={handleClick}
      >
        <img src={iconClose} alt="Close menu icon" />
      </button>
    </div>
  );
}
