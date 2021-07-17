import * as React from "react";

import Nav from "react-bootstrap/Nav";
import styles from "./Navigation.module.css";

import wcLogo from "../assets/wc-logo.svg";

const mapUrl = "https://i.imgur.com/YPVGp1E.jpg";
const donateUrl = "https://paypal.me/pools/c/8AoF9rrqIb";

const Navigation = () => {
  return <Nav className={styles.navigation} variant="pills">
      <Nav.Link eventKey="home">
        {<img
          alt="Home"
          width="30"
          height="30"
          src={wcLogo}
        />}
      </Nav.Link>

      <Nav.Link eventKey="register">Register</Nav.Link>
      <Nav.Link eventKey="events">Events</Nav.Link>
      <Nav.Link eventKey="packingGuide">Packing Guide</Nav.Link>
      <a className="nav-link" href={mapUrl} target="_blank" rel="noreferrer">Map</a>
      <a className="nav-link" href={donateUrl} target="_blank" rel="noreferrer">Donate</a>
  </Nav>;
};

export default Navigation;