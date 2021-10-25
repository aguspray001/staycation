import LandingPage from "pages/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import "assets/scss/style.scss";
import DetailPage from "pages/DetailPage";

function App() {
  return (
    <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties/:id" component={DetailPage} />
    </Router>
  );
}

export default App;
