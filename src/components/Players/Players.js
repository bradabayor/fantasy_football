import React, { Component } from 'react';
import { Loader, Pagination } from 'semantic-ui-react'

import PlayerTable from './PlayerTable';
import PlayerSearchBar from './PlayerSearchBar';

import '../../App.css';

const API = require('../../utils/Msp');


class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: null,
      playersOnPage : null
    }
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
    this.updateSelectedPlayer = this.updateSelectedPlayer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.getPlayers("All");
  }

  getPlayers(position) {
    this.setState({ players : null });

    API.fetchCumulativePlayerStats(position)
    .then(function(players) {
      this.setState(function() {
        return {
          players : players,
          playersOnPage : players.slice(0, 20)
        }
      })
    }.bind(this));
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

    this.setState({ playersOnPage : this.state.players.slice(playerRange[0], playerRange[1])})
  }

  render() {
    return (
      <div className="container">
        <PlayerSearchBar getPlayers={this.getPlayers}/>
        {!this.state.players ?
          null :
          <PlayerTable players={this.state.playersOnPage} updateSelectedPlayer={this.updateSelectedPlayer}/>
        }
        {this.state.players ?
          <Pagination 
            boundaryRange={0}
            defaultActivePage={1}
            siblingRange={1}
            totalPages={10}
            onPageChange={this.handlePageChange.bind(this)}
          /> : <Loader active inline='centered' />
        }
      </div>
    );
  }
}

export default Players;
