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
    var icon_color = "#83da7c";

    return (
      <div className="nav-container">
        <div>
          {this.props.firebase.auth.currentUser ? (
            <p onClick={this.doSignOut}>LO</p>
          ) : null}
        </div>
        <NavLink exact to={"/fantasy/home"} onClick={this.handleChange}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.TEAM} onClick={this.handleChange}>
          <FontAwesomeIcon icon="sitemap" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.LEAGUE} onClick={this.handleChange}>
          <FontAwesomeIcon icon="trophy" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={"/fantasy/players"} onClick={this.handleChange}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.SCORES} onClick={this.handleChange}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.ACCOUNT} onClick={this.handleChange}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
      </div>
    );
  }
}

export default withRouter(withAuthentication(Navigation));
