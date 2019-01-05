import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../../App.css';

const API = require('../../utils/Msp');

class PlayerCard extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
  }

 

  componentDidMount() {
    this.setState(function() {
      return {
        player : this.props.player
      }
    });
  }

  updatePlayerInfo(player) {
    API.fetchPlayerInfoByID(player)
    .then(function(playerinfo) {
      this.setState(function() {
        return {
          player : playerinfo,
        }
      })
    }.bind(this));
  }

  render() {
    return (
      <div className="player-card">
        <Button onClick={() => this.updatePlayerInfo(this.props.player)}>Load Player Info</Button>
        { this.state.player ? <PlayerInfo player={this.state.player} /> : null }
      </div>
    );
  }
}

function PlayerInfo (props) {
    let player = props.player.player;
    return (
      <React.Fragment>
        <ul>
          <li>Name: {player.FirstName} {player.LastName}</li>
          <li>Age: {player.Age}</li>
          <li>Position: {player.Position}</li>
          <li>Number: {player.JerseyNumber}</li>
        </ul>
      </React.Fragment>
    )
  }


export default PlayerCard;
