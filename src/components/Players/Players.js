import React, { Component } from 'react';

import { Icon } from 'antd';

import PlayerTable from './PlayerTable';
import PlayerSearchBar from './PlayerSearchBar';

import { calculateFantasyPoints } from '../Helpers';

import '../../App.css';

const API = require('../../utils/Msp');

class Players extends Component {
    constructor(props) {
    super(props);

    this.state = {
      players: null,
    }

    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
    this.updateSelectedPlayer = this.updateSelectedPlayer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.appendFantasyPoints = this.appendFantasyPoints.bind(this);
  }

  getPlayers(position) {
    this.setState({ players : null });

    API.fetchCumulativePlayerStats(position)
    .then(function(players) {
      this.setState(function() {
        return {
          players : players,
        }
      }, () => this.appendFantasyPoints())
    }.bind(this));
  }

  appendFantasyPoints() {
    let players = this.state.players;

    players.map( (player) => {
      player.fantasyPoints = calculateFantasyPoints(player);
    })

    players.sort( (a, b) => {
      let pointsA = a.fantasyPoints;
      let pointsB = b.fantasyPoints;
      return pointsB - pointsA;
    })
    
    this.setState({ players : players });
  }

  handleChangePosition(event, data) {
    console.log(data.value);
    this.setState(function() {
      return {
        selected : data.value
      }
    });
  }

  updateSelectedPlayer(firstname, lastname, ID) {
    let fullname = (firstname + '-' + lastname + '-' + ID).toLowerCase();
    this.setState(function() {
      return {
        selectedPlayer : fullname
      }
    })
  }

  handlePageChange(event, data) {
    let activePage = data.activePage;
    let playerRange = [0, 20]

    if (activePage !== 1) {
      playerRange[1] = activePage * 20;
      playerRange[0] = playerRange[1] - 19;
    }

    console.log(playerRange);

    this.createTableData();

    this.setState({ playersOnPage : this.state.players.slice(playerRange[0], playerRange[1])})
  }

  render() {
    return (
      <div className="container">
        <PlayerSearchBar getPlayers={this.getPlayers}/>
        {!this.state.players ?
          <Icon type="loading" /> :
          <PlayerTable players={this.state.players} updateSelectedPlayer={this.updateSelectedPlayer}/>
        }
      </div>
    );
  }
}

export default Players;
