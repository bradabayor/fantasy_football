// src/Team/Team.js

// Team list componenet for users current team.

// Modules
import React, { Component } from "react";

// Components
import TeamCard from "./TeamCard";

// Stylesheets
import "../../styles/app.scss";

// Component Class
class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qb1: "deshaun-watson-13027",
      rb1: "todd-gurley-8469",
      rb2: "jay-ajayi-7369"
    };
  }

  render() {
    var qb1 = this.state.qb1 ? this.state.qb1 : null;
    var rb1 = this.state.rb1 ? this.state.rb1 : null;
    var rb2 = this.state.rb2 ? this.state.rb2 : null;

    return (
      <div className="team-list">
        <p className="title">STARTING LINEUP</p>
        <div className="list">
          <TeamCard position="qb" player={qb1} />
          <TeamCard position="rb" player={rb1} />
          <TeamCard position="rb" player={rb2} />
        </div>
        <p className="title">BENCH</p>
      </div>
    );
  }
}

export default Team;
