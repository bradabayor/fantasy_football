import React, { Component } from "react";

import "../../styles/app.scss";
import PlayerRow from "./PlayerRow";

class PlayerTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.players) {
      var playersToShow = this.props.players.slice(0, 18);

      return (
        <div className="players-container-table">
          <div>Action</div>
          <div>Name</div>
          <div>Status</div>
          <div>Yards</div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          {playersToShow.map(player => {
            return <PlayerRow player={player} team={player.team} />;
          })}
        </div>
      );
    }
  }
}

export default PlayerTable;
