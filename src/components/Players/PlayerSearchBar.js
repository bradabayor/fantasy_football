import React, { Component } from "react";

import "../../App.css";

class PlayerSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { activePosition: "QB" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState({ activePosition: e.target.value }, () => {});
    this.props.getPlayers(e.target.value);
  };

  render() {
    const { activePosition } = this.state;

    return (
      <span className="player-search-container">
        <button
          value="QB"
          onClick={this.handleClick}
          className={
            this.state.activePosition === "QB"
              ? "player-search-button player-search-button-active"
              : "player-search-button"
          }
        >
          QB
        </button>
        <button
          active
          value="RB"
          onClick={this.handleClick}
          className={
            this.state.activePosition === "RB"
              ? "player-search-button player-search-button-active"
              : "player-search-button"
          }
        >
          RB
        </button>
        <button
          value="WR"
          onClick={this.handleClick}
          className={
            this.state.activePosition === "WR"
              ? "player-search-button player-search-button-active"
              : "player-search-button"
          }
        >
          WR
        </button>
        <button
          value="TE"
          onClick={this.handleClick}
          className={
            this.state.activePosition === "TE"
              ? "player-search-button player-search-button-active"
              : "player-search-button"
          }
        >
          TE
        </button>
        <button
          value="K"
          onClick={this.handleClick}
          className={
            this.state.activePosition === "K"
              ? "player-search-button player-search-button-active"
              : "player-search-button"
          }
        >
          K
        </button>

        <input placeholder="Search..." style={{ float: "right" }} />
      </span>
    );
  }
}

export default PlayerSearchBar;
