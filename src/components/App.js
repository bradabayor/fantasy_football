import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Players from "./Players/Players";
import SignUpForm, { SignUpPage } from "./SignUp";
import APIFeed from "./Feed/Feed";
import AppHeader from "./AppHeader";
import Home from "./Home/Home";
import MainMenu from "./MainMenu";

import * as ROUTES from "../constants/routes";
import "../App.css";

const App = () => (
  <Router>
    <div>
      <AppHeader />
      <div className="app-container">
        <MainMenu />
        <Route exact path={ROUTES.LANDING} component={SignUpPage} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.TEAM} />
        <Route path={ROUTES.PLAYERS} component={Players} />
      </div>
    </div>
  </Router>
);

export default App;
