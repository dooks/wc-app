import * as React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return <div className={styles.footer}>
    <div>
      <span>Woodland Critters</span>
      <span> {currentYear}</span>
    </div>
    <div>
      <a href="mailto:info@woodlandcritters.net">Contact Us</a>
    </div>
  </div>;
};

export default Footer;