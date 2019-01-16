import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../constants/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

class MainMenu extends Component {
  render() {
    return (
      <div className="mainmenu-container">
        <NavLink exact to={"/fantasy/home"} className="mainmenu-element">
          <FontAwesomeIcon icon="home" color="#ea243e" size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.TEAM} className="mainmenu-element">
          <FontAwesomeIcon icon="sitemap" color="#ea243e" size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.LEAGUE} className="mainmenu-element">
          <FontAwesomeIcon icon="trophy" color="#ea243e" size="1x" />
        </NavLink>
        <NavLink exact to={"/fantasy/players"} className="mainmenu-element">
          <FontAwesomeIcon icon="home" color="#ea243e" size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.SCORES} className="mainmenu-element">
          <FontAwesomeIcon icon="home" color="#ea243e" size="1x" />
        </NavLink>
        <NavLink exact to={ROUTES.ACCOUNT} className="mainmenu-element">
          <FontAwesomeIcon icon="home" color="#ea243e" size="1x" />
        </NavLink>
      </div>
    );
  }
}

export default MainMenu;
