import React, { Component } from "react";

class PlayerSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { activePosition: "QB" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState(
      { activePosition: e.target.value },
      this.props.getPlayers(e.target.value)
    );
  };

  render() {
    const { activePosition } = this.state;

    return (
      <span className="players-container-search">
        <div className="position-selections">
          <button
            value="QB"
            onClick={this.handleClick}
            className={activePosition === "QB" ? "active" : " "}>
            QB
          </button>
          <button
            value="RB"
            onClick={this.handleClick}
            className={activePosition === "RB" ? "active" : " "}>
            RB
          </button>
          <button
            value="WR"
            onClick={this.handleClick}
            className={activePosition === "WR" ? "active" : " "}>
            WR
          </button>
          <button
            value="TE"
            onClick={this.handleClick}
            className={
              activePosition === "TE"
                ? "player-search-button player-search-button-active"
                : "player-search-button"
            }>
            TE
          </button>
          <button
            value="K"
            onClick={this.handleClick}
            className={
              activePosition === "K"
                ? "player-search-button player-search-button-active"
                : "player-search-button"
            }>
            K
          </button>
        </div>
        <input placeholder="Search..." />
      </span>
    );
  }
}

export default PlayerSearchBar;
