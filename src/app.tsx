import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Header } from "./components/header";
import HomePage from "./pages/home/index";
import PullPage from "./pages/pull";
import IssuePage from "./pages/issue";
import MarketPage from "./pages/market";
import ExplorePage from "./pages/explore";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/pulls" component={PullPage} />
        <Route path="/issues" component={IssuePage} />
        <Route path="/market" component={MarketPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
