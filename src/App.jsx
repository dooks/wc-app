import * as React from "react";

import Tab from "react-bootstrap/Tab";

import Footer from "./Footer";
import Navigation from "./Navigation";

const TabbedComponents = {
  Home: React.lazy(() => import("./Home")),
  Register: React.lazy(() => import("./Register")),
  Faq: React.lazy(() => import("./Faq")),
  Events: React.lazy(() => import("./Events")),
  PackingGuide: React.lazy(() => import("./PackingGuide")),
};

const App = () => {
  const [ activeKey, setActiveKey ] = React.useState("home");

  return <>
    <Tab.Container activeKey={activeKey} mountOnEnter>
      <Navigation selectKey={(ev) => setActiveKey(ev)} />

      <Tab.Content>
        <React.Suspense fallback={<></>}>
          <Tab.Pane eventKey="home">
            <TabbedComponents.Home selectKey={(ev) => setActiveKey(ev)} />
            <TabbedComponents.Faq />
          </Tab.Pane>

          <Tab.Pane eventKey="register">
            <TabbedComponents.Register />
          </Tab.Pane>

          <Tab.Pane eventKey="packingGuide">
            <TabbedComponents.PackingGuide />
          </Tab.Pane>

          <Tab.Pane eventKey="events">
            <TabbedComponents.Events />
          </Tab.Pane>
        </React.Suspense>
      </Tab.Content>
    </Tab.Container>

    <Footer />
  </>;
}

export default App;
