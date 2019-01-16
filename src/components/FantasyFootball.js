import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./MainMenu";
import * as ROUTES from "../constants/routes";
import Players from "../components/Players/Players";
import Home from "../components/Home/Home";

import "../App.css";
import AppHeader from "./AppHeader";

class FantasyFootball extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div className="app-container">
          <MainMenu />
          <Route
            exact
            path={`${this.props.match.path}/home`}
            component={Home}
          />
          <Route exact path={`${this.props.match.path}/team`} />
          <Route
            exact
            path={`${this.props.match.path}/players`}
            component={Players}
          />
        </div>
      </div>
    );
  }
}

export default FantasyFootball;
