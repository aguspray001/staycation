import LandingPage from "pages/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import "assets/scss/style.scss";

function App() {
  return (
    <Router>
        <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
