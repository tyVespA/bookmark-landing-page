import React from "react";
import styles from "./FooterBanner.module.css";
import Button from "./Button";

export default function FooterBanner() {
  return (
    <section className={styles.footerBannerContainer}>
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>
      <form action="">
        <input type="email" placeholder="Enter your email address" required />
        <Button backgroundColor="red">Contact Us</Button>
      </form>
    </section>
  );
}
