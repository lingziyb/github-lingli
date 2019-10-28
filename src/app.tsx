import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
