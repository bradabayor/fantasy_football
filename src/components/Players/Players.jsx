import React, { Component, Fragment } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import PlayerDetails from "./PlayerDetails";

const API = require("../../api/mysportfeeds");

class Players extends Component {
  state = {
    players: null,
    showPlayerDetail: null,
    playerDetailId: null
  };

  componentDidMount = async () => {
    const players = await API.fetchPlayerStats();
    this.setState({ players: players.players });
  };

  handlePlayerDetail = (playerId = null) => {
    this.state.showPlayerDetail
      ? this.setState({ showPlayerDetail: false, playerDetailId: null })
      : this.setState({ showPlayerDetail: true, playerDetailId: playerId });
    console.log(playerId);
  };

  handleAddPlayer = async player => {
    console.log(`Adding: ${player.name}`);
    const response = await fetch(`http://localhost:5000/rosteredplayers/add`, {
      method: "POST",
      body: JSON.stringify({
        name: player.name,
        apiKey: player.id,
        team: this.props.currentLeague.title
      })
    });
  };

  render() {
    const showPlayerDetail = this.state.showPlayerDetail;
    const playerdetailId = this.state.playerDetailId;
    let playerRows = [];

    if (this.state.players) {
      this.state.players.map(player => {
        playerRows.push(
          <Fragment>
            <Table.Row key={player.id}>
              <Table.Cell>
                <Button
                  positive
                  circular
                  icon="add"
                  onClick={() => this.handleAddPlayer(player)}
                />
              </Table.Cell>
              <Table.Cell>{player.position}</Table.Cell>
              <Table.Cell onClick={() => this.handlePlayerDetail(player.id)}>
                {player.name}
              </Table.Cell>
            </Table.Row>
            {showPlayerDetail && playerdetailId === player.id && (
              <PlayerDetails
                player={player.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}
                handlePlayerDetail={() => this.handlePlayerDetail()}
              />
            )}
          </Fragment>
        );
      });
    }

    return (
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Action</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{playerRows}</Table.Body>
      </Table>
    );
  }
}

export default Players;
