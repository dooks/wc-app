import * as React from "react";
import styles from "./Home.module.css";

import Button from "react-bootstrap/Button";
import classnames from "classnames";

const Home = (props) => {
  return <>
    <div className={styles.hero}>
      <h1 style={{ marginBottom: "32px" }}>Woodland Critters</h1>
      <h4>Donner Pass, California</h4>
      <h4>August 5th-8th, 2021</h4>
      <Button
        style={{
          marginTop: "32px",
          border: "1px solid black"
        }}
        size="lg"
        variant="light"
        onClick={() => props.selectKey("register")}>
        Register
      </Button>
    </div>

    <div className={classnames("container", styles.description)}>
      <p>
        Woodland Critters is a private outdoor furry event inspired by Campfire Tails and Burning Man.
        Hosted in the mountains of Donner Pass, we provide 75 acres of forest to camp in, with access
        roads, basic amenities and an outdoor kitchen.
      </p>

      <p>
        We abide by the <a href="https://burningman.org/culture/philosophical-center/10-principles" target="_blank" rel="noreferrer">
          Burning Man 10 Principles.
        </a>
      </p>
    </div>
  </>
};

export default Home;