import React, { Component } from "react";

import { Grid, Header, Icon } from "semantic-ui-react";

import "../App.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-elements">
          <Icon name="football ball" size="large" inverted />
          <p style={{ color: "white", fontWeight: "bold" }}>Log In</p>
        </div>
      </div>
    );
  }
}

export default AppHeader;
