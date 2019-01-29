import React, { Component } from "react";
import AppLoader from "../../utils/AppLoader";

const API = require("../../utils/Msp");

class TeamCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      stats: null
    };
  }

  componentDidMount() {
    var promises = [
      API.fetchPlayerInfoByID(this.props.player),
      API.fetchSinglePlayerStats(this.props.player)
    ];

    Promise.all(promises)
      .then(data => {
        console.log(data);

        this.setState({ info: data[0], stats: data[1] });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    let playerCard;
    let stats = this.state.stats ? this.state.stats : null;

    if (this.state.info !== null) {
      let info = this.state.info;
      playerCard = (
        <div className="elements">
          <img src={info.player.officialImageSrc} alt="player" />
          <p>
            <span className="position">{info.player.Position}</span>
            <span className="name">
              {info.player.FirstName} {info.player.LastName}
            </span>
            <span className="city">{info.team.City}</span>
          </p>
          <p className="stat">
            <span className="label">YARDS</span>
            <span className="number">{stats.stats.PassYards["#text"]}</span>
          </p>
          <p className="stat">
            <span className="label">TDs</span>
            <span className="number">{stats.stats.PassTD["#text"]}</span>
          </p>
          <p className="stat">
            <span className="label">POINTS</span>
            <span className="number">277.46</span>
          </p>
          <div className="position" />
          <button>ACTION</button>
        </div>
      );
    } else {
      playerCard = <AppLoader />;
    }

    return <div className="team-card">{playerCard}</div>;
  }
}

export default TeamCard;
