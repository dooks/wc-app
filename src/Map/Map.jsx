import * as React from "react";

import mapImage from "../assets/wc-map.jpeg";

const Map = () => {
  return <div className="heroContainer">
    <div className="container">
      <img
        style={{width: "100%"}}
        src={mapImage} alt="Woodland Critters Map" />
    </div>
  </div>;
};

export default Map;