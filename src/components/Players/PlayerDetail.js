import React, { Component } from "react";

import "../../styles/app.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppLoader from "../../utils/AppLoader";
import { withAuthentication } from "../Session";

const API = require("../../utils/Msp");

class PlayerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.writeToDatabase = this.writeToDatabase.bind(this);
  }

  componentDidMount() {
    API.fetchPlayerInfoByID(this.props.playerID).then(player => {
      this.setState({ player: player });
    });
  }

  writeToDatabase() {
    console.log("writing to database");
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
              onClick={this.writeToDatabase(this.state.player.player.FirstName)}
            >
              Add
            </button>
            <img
              src={this.state.player.player.officialImageSrc}
              alt="player photo"
            />
          </div>
        ) : (
          <AppLoader />
        )}
      </div>
    );
  }
}

export default withAuthentication(PlayerDetail);
