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
    onSelect={(ev) => props.selectKey(ev)}
    collapseOnSelect
    className={styles.navigation}
    variant="dark"
    expand="sm"
    sticky="top"
    fixed="top">
  <Container>
    <Navbar.Brand>
      {<img
        style={{ cursor: "pointer" }}
        onClick={() => props.selectKey("home")}
        alt="Home"
        width="30"
        height="30"
        src={wcLogo}
      />}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills" className={styles.wcNav}>
          <Nav.Link eventKey="home">Home</Nav.Link>
          <Nav.Link eventKey="register">Register</Nav.Link>
          <Nav.Link eventKey="events">Events</Nav.Link>
          <Nav.Link eventKey="packingGuide">Packing Guide</Nav.Link>
          <a className="nav-link" href={mapUrl} target="_blank" rel="noreferrer">Map</a>
          <a className="nav-link" href={donateUrl} target="_blank" rel="noreferrer">Donate</a>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};

export default Navigation;