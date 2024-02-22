import React from "react";
import styles from "./FAQSection.module.css";
import Button from "./Button";

export default function FAQSection() {
  return (
    <section className={styles.FAQSectionContainer}>
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <section className={styles.FAQContainer}></section>
      <div className={styles.buttonContainer}>
        <Button backgroundColor="blue">More info</Button>
      </div>
    </section>
  );
}
