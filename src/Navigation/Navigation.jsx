import * as React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import styles from "./Navigation.module.css";
import wcLogo from "../assets/wc-logo.svg";

import mapUrl from "../assets/wc-map.jpeg";
const donateUrl = "https://paypal.me/pools/c/8AoF9rrqIb";

const Navigation = (props) => {
  return <Navbar
    className={styles.navigation}
    variant="dark"
    expand="sm"
    sticky="top"
    fixed="top">
  <Container>
    <Navbar.Brand>
      {<img
        onClick={() => props.selectKey("home")}
        alt="Home"
        width="30"
        height="30"
        src={wcLogo}
      />}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav navbar variant="pills">
          <a className="nav-link" onClick={() => props.selectKey("home")}>Home</a>
          <a className="nav-link" onClick={() => props.selectKey("register")}>Register</a>
          <a className="nav-link" onClick={() => props.selectKey("events")}>Events</a>
          <a className="nav-link" onClick={() => props.selectKey("packingGuide")}>Packing Guide</a>
          <a className="nav-link" href={mapUrl} target="_blank" rel="noreferrer">Map</a>
          <a className="nav-link" href={donateUrl} target="_blank" rel="noreferrer">Donate</a>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};

export default Navigation;