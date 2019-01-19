// src/components/Home.js

// Main App Navigation

// Modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Stylesheets
import "../styles/app.scss";

// Constants
import * as ROUTES from "../constants/routes";

// Component Class
class Navigation extends Component {
  render() {
    var icon_color = "#fad000";

    return (
      <div className="nav-container">
        <NavLink exact to={"/fantasy/home"}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.TEAM}>
          <FontAwesomeIcon icon="sitemap" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.LEAGUE}>
          <FontAwesomeIcon icon="trophy" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={"/fantasy/players"}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.SCORES}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.ACCOUNT}>
          <FontAwesomeIcon icon="home" color={icon_color} size="1x" />
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
