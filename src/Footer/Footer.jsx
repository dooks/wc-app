import * as React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return <div className={styles.footer}>
    <span>Woodland Critters</span>
    <span> {currentYear}</span>
  </div>;
};

export default Footer;