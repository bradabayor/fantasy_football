// src/components/Home.js

// Main App Navigation

// Modules
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Authentication
import { withAuthentication } from "./Session";

// Stylesheets
import "../styles/app.scss";

// Constants
import * as ROUTES from "../constants/routes";

// Component Class
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };

    this.doSignOut = this.doSignOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  doSignOut() {
    this.props.firebase.doSignOut();
    this.props.history.push("/");
  }

  handleChange() {}

  render() {
    var icon_color = "black";

    return (
      <span className="nav">
        <NavLink
          className="nav__link"
          exact
          to={"/fantasy/home"}
          onClick={this.handleChange}
        >
          <FontAwesomeIcon
            className="nav__icon"
            icon="home"
            color={icon_color}
            size="1x"
          />
          <p>Home</p>
        </NavLink>
        <NavLink
          className="nav__link"
          exact
          to={ROUTES.TEAM}
          onClick={this.handleChange}
        >
          <FontAwesomeIcon
            className="nav__icon"
            icon="sitemap"
            color={icon_color}
            size="1x"
          />
          <p>My Team</p>
        </NavLink>
        <NavLink
          className="nav__link"
          exact
          to={ROUTES.LEAGUE}
          onClick={this.handleChange}
        >
          <FontAwesomeIcon
            className="nav__icon"
            icon="trophy"
            color={icon_color}
            size="1x"
          />
          <p>League</p>
        </NavLink>
        <NavLink
          className="nav__link"
          exact
          to={"/fantasy/players"}
          onClick={this.handleChange}
        >
          <FontAwesomeIcon
            className="nav__icon"
            icon="users"
            color={icon_color}
            size="1x"
          />
          <p>Players</p>
        </NavLink>
        <NavLink
          className="nav__link"
          exact
          to={ROUTES.SCORES}
          onClick={this.handleChange}
        >
          <FontAwesomeIcon
            className="nav__icon"
            icon="list-ol"
            color={icon_color}
            size="1x"
          />
          <p>Scores</p>
        </NavLink>
        <NavLink
          className="nav__link"
          exact
          to={ROUTES.ACCOUNT}
          onClick={this.handleChange}
        >
          <FontAwesomeIcon
            className="nav__icon"
            icon="home"
            color={icon_color}
            size="1x"
          />
          <p>Account</p>
        </NavLink>
      </span>
    );
  }
}

export default withRouter(withAuthentication(Navigation));
