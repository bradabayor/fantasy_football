// src/Players/PlayerRow.js

// Generates a player stat line

// Modules
import React, { Component } from "react";

// Stylesheets
import "../../styles/app.scss";

// Class Component
class PlayerRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: this.props.player.player.ID
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.player.player.ID);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <div className="player-row">
          <div className="player-row-position">
            {this.props.player.player.Position}
          </div>
          <div className="player-row-nametag">
            <p className="name">
              {`${this.props.player.player.FirstName} ${
                this.props.player.player.LastName
              }`}
            </p>
            <p>
              {this.props.player.team
                ? this.props.player.team.Abbreviation
                : null}
            </p>
          </div>
          <div>-</div>
          <div>
            {!this.props.player.stats.PassYards
              ? "-"
              : this.props.player.stats.PassYards["#text"]}
          </div>
          <div>
            {!this.props.player.stats.PassTD
              ? "-"
              : this.props.player.stats.PassTD["#text"]}
          </div>
          <div>
            {!this.props.player.stats.PassInt
              ? "-"
              : this.props.player.stats.PassInt["#text"]}
          </div>
          <div>
            {!this.props.player.stats.RushYards
              ? "-"
              : this.props.player.stats.RushYards["#text"]}
          </div>
          <div>
            {!this.props.player.stats.RushTD
              ? "-"
              : this.props.player.stats.RushTD["#text"]}
          </div>
          <div>
            {!this.props.player.stats.RecYards
              ? "-"
              : this.props.player.stats.RecYards["#text"]}
          </div>
          <div>
            {!this.props.player.stats.RecTD
              ? "-"
              : this.props.player.stats.RecTD["#text"]}
          </div>
          <div>
            {!this.props.player.stats.Fumbles
              ? "-"
              : this.props.player.stats.Fumbles["#text"]}
          </div>
          <div>
            {!this.props.player.stats.TwoPtMade
              ? "-"
              : this.props.player.stats.TwoPtMade["#text"]}
          </div>
          <div>
            {!this.props.player.fantasyPoints
              ? "-"
              : this.props.player.fantasyPoints}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerRow;
