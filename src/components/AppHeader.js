import React, { Component } from "react";
import SignOutButton from "../components/SignOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-elements">
          <FontAwesomeIcon icon="football-ball" color="white" size="2x" />
          <SignOutButton />
        </div>
      </div>
    );
  }
}

export default AppHeader;
