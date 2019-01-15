import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AppLoader extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px", width: "100%" }}>
        <FontAwesomeIcon icon="football-ball" size="3x" spin color="#e70049" />
      </div>
    );
  }
}

export default AppLoader;
