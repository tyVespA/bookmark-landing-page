import React, { useState } from "react";
import styles from "./FooterBanner.module.css";
import Button from "./Button";

export default function FooterBanner() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const value = e.target.value;

    if (!emailRegex.test(value)) {
      setErrorMessage("Please enter a valid email address");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <section className={styles.footerBannerContainer}>
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>
      <form action="" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          value={email}
          placeholder="Enter your email address"
          required
          onChange={handleEmailChange}
        />
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
        <Button type="submit" backgroundColor="red">
          Contact Us
        </Button>
      </form>
    </section>
  );
}
