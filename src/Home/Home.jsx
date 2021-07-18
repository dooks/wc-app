import * as React from "react";
import styles from "./Home.module.css";

import Button from "react-bootstrap/Button";
import classnames from "classnames";

const Home = (props) => {
  return <>
    <div className={classnames("heroContainer firewatchBg", styles.hero)}>
      <h1>Woodland Critters</h1>
      <h3>Donner Pass, California</h3>
      <h3>August 5th-8th, 2021</h3>
      <Button
        style={{ "margin-top": "32px" }}
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