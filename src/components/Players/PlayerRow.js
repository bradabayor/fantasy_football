// src/Players/PlayerRow.js

// Generates a player stat line

// Modules
import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Stylesheets
import "../../styles/app.scss";

// Constants
import * as COLORS from "../../constants/teamColors";

// Styled Components

const NameTag = styled.div`
  backgroundd-color: ${props => {
    if (props.team === null) {
      return "none";
    } else if (props.team === undefined) {
      return "none";
    } else if (props.hasOwnProperty["team"]) {
      return COLORS[props.team].PRIMARY;
    }
  }};
`;

// Class Component
class PlayerRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="player-row">
          <div style={{ cursor: "pointer" }}>
            <FontAwesomeIcon className="plus-icon" icon="plus" />
          </div>
          <div>
            <NameTag team={this.props.team}>{`${
              this.props.player.player.FirstName
            } ${this.props.player.player.LastName}`}</NameTag>
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
        <div className="spacer" />
      </div>
    );
  }
}

export default PlayerRow;
