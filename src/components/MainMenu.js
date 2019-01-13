import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Icon } from "semantic-ui-react";

import * as ROUTES from "../constants/routes";

class MainMenu extends Component {
  render() {
    return (
      <div className="mainmenu-container">
        <NavLink exact to={ROUTES.HOME} className="mainmenu-element">
          <Icon name="home" />
          Home
        </NavLink>
        <NavLink exact to={ROUTES.TEAM} className="mainmenu-element">
          <Icon name="clipboard list" />
          Team
        </NavLink>
        <NavLink exact to={ROUTES.LEAGUE} className="mainmenu-element">
          <Icon name="trophy" />
          League
        </NavLink>
        <NavLink exact to={ROUTES.PLAYERS} className="mainmenu-element">
          <Icon name="users" />
          Players
        </NavLink>
        <NavLink exact to={ROUTES.SCORES} className="mainmenu-element">
          <Icon name="football ball" />
          Scores
        </NavLink>
        <NavLink exact to={ROUTES.ACCOUNT} className="mainmenu-element">
          <Icon name="user" />
          Account
        </NavLink>
      </div>
    );
  }
}

export default MainMenu;
