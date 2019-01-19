import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Players from "../components/Players/Players";
import Home from "../components/Home/Home";

import "../styles/app.scss";
import AppHeader from "./AppHeader";
import Navigation from "./Navigation";

class FantasyFootball extends Component {
  render() {
    return (
      <div>
        <AppHeader
          path={this.props.location.pathname}
          authUser={this.props.authUser}
        />
        <div className="ff-container">
          <Navigation />
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
