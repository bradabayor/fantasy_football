import React, { Component } from 'react';
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react';
import '../App.css';
const API = require('../utils/Msp');

function PlayerTable (props) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleline>Player</Table.HeaderCell>
          <Table.HeaderCell>Team</Table.HeaderCell>
          <Table.HeaderCell>Position</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.players.map(function (player) {
          return (
            <Table.Row>
              <Table.Cell singleline>{player.player.FirstName + ' ' + player.player.LastName}</Table.Cell>
              <Table.Cell singleline>{player.team.City}</Table.Cell>
              <Table.Cell singleline>{player.player.Position}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: null
    }

    this.updatePlayers = this.updatePlayers.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Button positive onClick={this.updatePlayers}>Load Players</Button>
        {!this.state.players ?
            <p>Loading...</p> :
            <PlayerTable players={this.state.players} />}
      </div>
    );
  }

  updatePlayers() {
    API.fetchAllPlayers()
    .then(function(players) {
      this.setState(function() {
        return {
          players : players,
        }
      })
    }.bind(this));
    }

}

export default Players;
