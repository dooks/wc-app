import * as React from "react";

import Tab from "react-bootstrap/Tab";

import Home from "./Home";
import Register from "./Register";
import Faq from "./Faq";
import Map from "./Map";
import Footer from "./Footer";
import Navigation from "./Navigation";

const App = () => {
  return <>
    <Tab.Container defaultActiveKey="home">
      <Navigation />

      <Tab.Content>
        <Tab.Pane eventKey="home">
          <Home />
          <Faq />
        </Tab.Pane>

        <Tab.Pane eventKey="register">
          <Register />
        </Tab.Pane>

        <Tab.Pane eventKey="map">
          <Map />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>

    <Footer />
  </>;
}

export default App;
