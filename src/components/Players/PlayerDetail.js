import React, { Component } from "react";

import "../../styles/app.scss";

import AppLoader from "../../utils/AppLoader";
import { withAuthentication } from "../Session";

const API = require("../../utils/Msp");

class PlayerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {
    API.fetchPlayerInfoByID(this.props.playerID).then(player => {
      this.setState({ player: player });
    });
  }

  render() {
    return (
      <div className="player-detail-overlay">
        <div
          className="player-detail-banner"
          onClick={this.props.handleClose}
        />
        {this.state.player ? (
          <div className="player-detail-grid">
            <h2>
              {this.state.player.player.FirstName}{" "}
              {this.state.player.player.LastName}
            </h2>
            <button
              onClick={() => {
                this.writeToDatabase();
              }}
            >
              Add
            </button>
            <img src={this.state.player.player.officialImageSrc} alt="player" />
          </div>
        ) : (
          <AppLoader />
        )}
      </div>
    );
  }
}

export default withAuthentication(PlayerDetail);
