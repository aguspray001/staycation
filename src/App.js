import LandingPage from "pages/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "assets/scss/style.scss";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/properties/:id" component={DetailPage} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
}

export default App;
