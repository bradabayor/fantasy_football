import React, { Component } from "react";

import "../../App.css";
import PlayerRow from "./PlayerRow";

class PlayerTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.players) {
      var playersToShow = this.props.players.slice(0, 20);

      return (
        <div className="player-table-container">
          <table className="player-table">
            <tr>
              <th style={{ width: "50px" }}>Action</th>
              <th>Player</th>
              <th>Status</th>
              <th colspan="3">Passing</th>
              <th colspan="2">Rushing</th>
              <th colspan="2">Receiving</th>
              <th colspan="2">Miscellaneous</th>
              <th>Points</th>
            </tr>
            <tr>
              <th />
              <th />
              <th />
              <th>Yards</th>
              <th>TD</th>
              <th>Int</th>
              <th>Yards</th>
              <th>TD</th>
              <th>Yards</th>
              <th>TD</th>
              <th>Fum</th>
              <th>2PT</th>
            </tr>
            {playersToShow.map(player => {
              return <PlayerRow player={player} team={player.team} />;
            })}
          </table>
        </div>
      );
    }
  }
}

export default PlayerTable;
