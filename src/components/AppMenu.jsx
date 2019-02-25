import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const items = [
  { key: "home", name: "Home" },
  { key: "team", name: "My Team" },
  { key: "players", name: "Players" },
  { key: "gamecenter", name: "Gamecenter" },
  { key: "league", name: "League" },
  { key: "account", name: "Account" }
];

const AppMenu = () => <Menu items={items} />;

export default AppMenu;
