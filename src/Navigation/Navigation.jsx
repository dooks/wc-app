import * as React from "react";

import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import styles from "./Navigation.module.css";
import wcLogo from "../assets/wc-logo-2022.svg";

const Navigation = (props) => {
  const [ activeKey, setActiveKey ] = React.useState("home");

  return <Navbar
    collapseOnSelect
    className={styles.navigation}
    variant="dark"
    expand="sm"
    sticky="top">
    <Container>
      <Navbar.Brand>
        <a href="/">
          <img
            style={{ cursor: "pointer" }}
            href="/"
            alt="Home"
            width="30"
            height="30"
            src={wcLogo} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills">
          {/* <Nav.Link as="a" to="/home">Home</Nav.Link>
          <Nav.Link as="a" to="/register">Register</Nav.Link>
          <Nav.Link as="a" to="/events">Events</Nav.Link>
          <Nav.Link as="a" to="/packing">Packing Guide</Nav.Link> */}

          <Nav.Link as={NavLink} eventKey="home" to="/">Home</Nav.Link>
          <Nav.Link as="a" style={{ textDecoration: "line-through", cursor: "not-allowed" }}>Register</Nav.Link>
          <Nav.Link as={NavLink} eventKey="venue" to="/venue">Venue</Nav.Link>
          <Nav.Link as={NavLink} eventKey="policies" to="/policies">Policies</Nav.Link>
          <Nav.Link as={NavLink} eventKey="events" to="/events">Events</Nav.Link>
          <Nav.Link as={NavLink} eventKey="packing" to="/packing">Packing Guide</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};

export default Navigation;