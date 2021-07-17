import * as React from "react";

import Nav from "react-bootstrap/Nav";
import styles from "./Navigation.module.css";

import wcLogo from "../assets/wc-logo.svg";

const donateUrl = "https://paypal.me/pools/c/8AoF9rrqIb";

const Navigation = () => {
  return <Nav className={styles.navigation}>
    <Nav.Item>
      <Nav.Link eventKey="home">
        {<img className={styles.wcLogo} alt="Woodland Critters" src={wcLogo} />}
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="register">Register</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="map">Map</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link href={donateUrl} target="_blank">Donate</Nav.Link>
    </Nav.Item>
  </Nav>
};

export default Navigation;