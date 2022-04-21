import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "./assets/scss/paper-kit.scss";

// pages
import LandingPage from "./pages/LandingPage.js";
import AboutUsPage from "./pages/AboutUsPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import SearchPage from "./pages/SearchPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <LandingPage {...props} />} />
      <Route path="/about-us" render={(props) => <AboutUsPage {...props} />} />
      <Route
        path="/apartment/:id"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/search"
        render={(props) => <SearchPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
