import React, { Component } from "react";
import { Route } from "react-router-dom";
import Players from "../components/Players/Players";
import Home from "../components/Home/Home";

import "../styles/app.scss";
import Navigation from "./Navigation";
import Team from "./Team/Team";

class FantasyFootball extends Component {
  render() {
    return (
      <div>
        {/*<AppHeader
          path={this.props.location.pathname}
          authUser={this.props.authUser}
        />*/}
        <div className="ff-container">
          <Navigation path={this.props.location.pathname} />
          <Route
            exact
            path={`${this.props.match.path}/home`}
            component={Home}
          />
          <Route
            exact
            path={`${this.props.match.path}/team`}
            component={Team}
          />
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
