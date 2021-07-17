import * as React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return <>
    <div className="heroContainer firewatchBg">
      <h1>Woodland Critters</h1>
      <h2>Donner Pass, California</h2>
      <h2>August 5th-8th, 2021</h2>
    </div>

    <div className={styles.description}>
      <p>
        Woodland Critters is a private outdoor furry event inspired by Campfire Tails and Burning Man. Hosted in the mountains of Donner Pass, we provide 75 acres of forest to camp in, with access roads, basic amenities and an outdoor kitchen.
      </p>

      <p>
        We abide by the Burning Man 10 Principles.
        https://burningman.org/culture/philosophical-center/10-principles
      </p>
    </div>
  </>
};

export default Home;