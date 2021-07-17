import * as React from "react";

import Nav from "react-bootstrap/Nav";
import styles from "./Navigation.module.css";

import wcLogo from "../assets/wc-logo.svg";

const mapUrl = "https://i.imgur.com/b07MpWz.jpg";
const donateUrl = "https://paypal.me/pools/c/8AoF9rrqIb";

const Navigation = () => {
  return <Nav className={styles.navigation} variant="pills">
    <Nav.Item>
      <Nav.Link eventKey="home">
        {<img className={styles.wcLogo} alt="Woodland Critters" src={wcLogo} />}
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="register">Register</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="events">Events</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="packingGuide">Packing Guide</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <a className="nav-link" href={mapUrl} target="_blank" rel="noreferrer">Map</a>
    </Nav.Item>

    <Nav.Item>
      <a className="nav-link" href={donateUrl} target="_blank" rel="noreferrer">Donate</a>
    </Nav.Item>
  </Nav>
};

export default Navigation;