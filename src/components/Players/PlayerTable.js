import React, { Component } from "react";

import "../../styles/app.scss";
import PlayerRow from "./PlayerRow";
import PlayerDetail from "./PlayerDetail";

class PlayerTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerDetailID: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(ID) {
    this.setState({ playerDetailID: ID });
  }

  handleClose() {
    this.setState({ playerDetailID: null });
  }

  render() {
    if (this.props.players) {
      var playersToShow = this.props.players.slice(0, 18);

      var playerID = this.state.playerDetailID;

      var overlay = this.state.playerDetailID ? (
        <PlayerDetail playerID={playerID} handleClose={this.handleClose} />
      ) : null;

      return (
        <div className="players-container-table">
          {overlay}
          <div className="players-table-titles">
            <div />
            <div>NAME</div>
            <div>STATUS</div>
            <div>YARDS</div>
            <div>TD</div>
            <div>INT</div>
            <div>YARDS</div>
            <div>TD</div>
            <div>YARDS</div>
            <div>TD</div>
            <div>FUMB</div>
            <div>2PT</div>
            <div>POINTS</div>
          </div>
          {playersToShow.map(player => {
            return (
              <div>
                <PlayerRow
                  key={player.player.ID}
                  player={player}
                  team={player.team}
                  handleClick={this.handleClick}
                />
                <div className="spacer" />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default PlayerTable;
