import React from "react";
import styles from "./DownloadsSection.module.css";
import DownloadTab from "./DownloadTab";

export default function DownloadsSection() {
  return (
    <section className={styles.downloadsSectionContainer}>
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className={styles.downloadTabsContainer}>
        <DownloadTab imgName="logo-chrome" title="Add to Chrome">
          Minimum version 62
        </DownloadTab>
        <DownloadTab imgName="logo-firefox" title="Add to Firefox">
          Minimum version 62
        </DownloadTab>
        <DownloadTab imgName="logo-opera" title="Add to Opera">
          Minimum version 62
        </DownloadTab>
      </div>
    </section>
  );
}
