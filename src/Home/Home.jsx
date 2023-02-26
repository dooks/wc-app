import * as React from "react";
import styles from "./Home.module.css";

import Button from "react-bootstrap/Button";
import classnames from "classnames";

const Home = (props) => {
  return <>
    <div className={styles.hero}>
      <h1 className={styles.title}>Woodland Critters</h1>
      <h2>June 15th - 19th, 2023</h2>

      <p style={{
        textAlign: "center",
        width: "450px",
        fontSize: "1.2em"
      }}>
        Woodland Critters is a private outdoor furry event located in the mountains of Donner Pass.
      </p>

      <Button
        className={styles.registerBtn}

        // Disable registration button
        style={{ cursor: "not-allowed", pointerEvents: "all" }}

        size="lg"
        variant="light"
        disabled
        onClick={() => props.selectKey("register")}>
        Register
      </Button>
    </div>
  </>
};

export default Home;