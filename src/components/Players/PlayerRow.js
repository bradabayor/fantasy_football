import React, { Component } from "react";
import styled from "styled-components";

import * as COLORS from "../../constants/teamColors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NameTag = styled.p`
  display: inline-block;
  padding: 6px;
  display: inline-block;
  padding: 6px;
  background-color: ${props => {
    switch (props.team) {
      case "ARI":
        return COLORS.ARI.PRIMARY;
      case "ATL":
        return COLORS.ATL.PRIMARY;
      case "BAL":
        return COLORS.BAL.PRIMARY;
      case "BUF":
        return COLORS.BUF.PRIMARY;
      case "CAR":
        return COLORS.CAR.PRIMARY;
      case "CHI":
        return COLORS.CHI.PRIMARY;
      case "CIN":
        return COLORS.CIN.PRIMARY;
      case "CLE":
        return COLORS.CLE.PRIMARY;
      case "DAL":
        return COLORS.DAL.PRIMARY;
      case "DEN":
        return COLORS.DEN.PRIMARY;
      case "DET":
        return COLORS.DET.PRIMARY;
      case "GB":
        return COLORS.GB.PRIMARY;
      case "HOU":
        return COLORS.HOU.PRIMARY;
      case "IND":
        return COLORS.IND.PRIMARY;
      case "JAX":
        return COLORS.JAX.PRIMARY;
      default:
        return "lightgray";
    }
  }}
  border-radius: 10px;
  color: white;
  cursor: pointer;
  float: left;
  box-sizing: border-box;

  :hover {
    color: ${props => {
      switch (props.team) {
        case "ARI":
          return COLORS.ARI.SECONDARY;
        case "ATL":
          return COLORS.ATL.SECONDARY;
        case "BAL":
          return COLORS.BAL.SECONDARY;
        case "BUF":
          return COLORS.BUF.SECONDARY;
        case "CAR":
          return COLORS.CAR.SECONDARY;
        case "CHI":
          return COLORS.CHI.SECONDARY;
        case "CIN":
          return COLORS.CIN.SECONDARY;
        case "CLE":
          return COLORS.CLE.SECONDARY;
        case "DAL":
          return COLORS.DAL.SECONDARY;
        case "DEN":
          return COLORS.DEN.SECONDARY;
        default:
          return "lightgray";
      }
    }}
  }
`;

class PlayerRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="player-row">
        <td style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon="plus" color="lightgreen" />
        </td>
        <td>
          <NameTag team={this.props.team}>{`${
            this.props.player.player.FirstName
          } ${this.props.player.player.LastName}`}</NameTag>
        </td>
        <td>-</td>
        <td>
          {!this.props.player.stats.PassYards
            ? "-"
            : this.props.player.stats.PassYards["#text"]}
        </td>
        <td>
          {!this.props.player.stats.PassTD
            ? "-"
            : this.props.player.stats.PassTD["#text"]}
        </td>
        <td>
          {!this.props.player.stats.PassInt
            ? "-"
            : this.props.player.stats.PassInt["#text"]}
        </td>
        <td>
          {!this.props.player.stats.RushYards
            ? "-"
            : this.props.player.stats.RushYards["#text"]}
        </td>
        <td>
          {!this.props.player.stats.RushTD
            ? "-"
            : this.props.player.stats.RushTD["#text"]}
        </td>
        <td>
          {!this.props.player.stats.RecYards
            ? "-"
            : this.props.player.stats.RecYards["#text"]}
        </td>
        <td>
          {!this.props.player.stats.RecTD
            ? "-"
            : this.props.player.stats.RecTD["#text"]}
        </td>
        <td>
          {!this.props.player.stats.Fumbles
            ? "-"
            : this.props.player.stats.Fumbles["#text"]}
        </td>
        <td>
          {!this.props.player.stats.TwoPtMade
            ? "-"
            : this.props.player.stats.TwoPtMade["#text"]}
        </td>
        <td>
          {!this.props.player.fantasyPoints
            ? "-"
            : this.props.player.fantasyPoints}
        </td>
      </tr>
    );
  }
}

export default PlayerRow;
