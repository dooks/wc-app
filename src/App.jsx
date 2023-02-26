import * as React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";

const Home = React.lazy(() => import("./Home"));
const Venue = React.lazy(() => import("./Venue"));
const Policies = React.lazy(() => import("./Policies"));
const Events = React.lazy(() => import("./Events"));
const PackingGuide = React.lazy(() => import("./PackingGuide"));

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<><Navigation /><Outlet /></>}>
        <Route path="/venue" element={<React.Suspense fallback={<></>}><Venue /></React.Suspense>} />
        <Route path="/policies" element={<React.Suspense fallback={<></>}><Policies /></React.Suspense>} />
        <Route path="/events" element={<React.Suspense fallback={<></>}><Events /></React.Suspense>} />
        <Route path="/packing" element={<React.Suspense fallback={<></>}><PackingGuide /></React.Suspense>} />

        <Route path="/*?" element={<React.Suspense fallback={<></>}><Home /></React.Suspense>} />
      </Route>
    </Routes>

    <Footer />
  </>;
}

export default App;
