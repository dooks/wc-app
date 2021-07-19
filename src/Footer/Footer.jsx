import * as React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return <>
    <hr />
    <div className={styles.footer}>
      <a href="mailto:info@woodlandcritters.net">Contact Us</a>
      <div>
        <span>Woodland Critters</span>
        <span> {currentYear}</span>
      </div>
    </div>
  </>;
};

export default Footer;