import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-elements">
          <FontAwesomeIcon icon="football-ball" color="white" size="2x" />
          <p style={{ color: "white", fontWeight: "bold", fontSize: "12px" }}>
            Log In
          </p>
        </div>
      </div>
    );
  }
}

export default AppHeader;
