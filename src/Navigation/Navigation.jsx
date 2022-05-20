import * as React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import styles from "./Navigation.module.css";
import wcLogo from "../assets/wc-logo-2022.svg";

// import mapUrl from "../assets/wc-map-new.png";
// import exitIcon from "../assets/box-arrow-up-right.svg";
// const donateUrl = "/";

const Navigation = (props) => {
  return <Navbar
    onSelect={(ev) => props.selectKey(ev)}
    collapseOnSelect
    className={styles.navigation}
    variant="dark"
    expand="sm"
    sticky="top">
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
        <Nav variant="pills">
          <Nav.Link className={styles.navLink} eventKey="home">Home</Nav.Link>
          <Nav.Link className={styles.navLink} eventKey="register">Register</Nav.Link>
          <Nav.Link eventKey="events">Events</Nav.Link>
          <Nav.Link eventKey="packingGuide">Packing Guide</Nav.Link>
          {/* <a className="nav-link" href={mapUrl}>Map</a> */}
          {/* <a className="nav-link" href={donateUrl} target="_blank" rel="noreferrer">
            Donate <img src={exitIcon} width={20} height={24} alt="" />
          </a> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};

export default Navigation;