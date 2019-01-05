import React, { Component } from 'react';
import { Table} from 'semantic-ui-react';
import '../../App.css';

class PlayerTable extends Component {

constructor(props) {
  super(props);

  this.state = {};
}

updateSelectedPlayer = (player) => {
  this.props.updateSelectedPlayer(player.player.FirstName, player.player.LastName, player.player.ID);
}

render() {
  return (
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan="2">Player</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Team</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Position</Table.HeaderCell>
          <Table.HeaderCell colSpan="3">Passing</Table.HeaderCell>
          <Table.HeaderCell colSpan="2">Rushing</Table.HeaderCell>
          <Table.HeaderCell colSpan="2">Receiving</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Yrd</Table.HeaderCell>
          <Table.HeaderCell>TD</Table.HeaderCell>
          <Table.HeaderCell>Int</Table.HeaderCell>
          <Table.HeaderCell>Yrd</Table.HeaderCell>
          <Table.HeaderCell>TD</Table.HeaderCell>
          <Table.HeaderCell>Yrd</Table.HeaderCell>
          <Table.HeaderCell>TD</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {this.props.players.map(function (player) {
            return (
              <Table.Row>
                <Table.Cell singleline selectable positive>{player.player.FirstName + ' ' + player.player.LastName}</Table.Cell>
                {player.team === null ? 
                  <Table.Cell singleline>N/A</Table.Cell> :
                  <Table.Cell singleline>{player.team.Abbreviation}</Table.Cell>
                }
                <Table.Cell singleline>{player.player.Position}</Table.Cell>
              </Table.Row>
            )
          }
        )}
      </Table.Body>
    </Table>
  )
}
}

function TableFragmentPassing(props) {
  if (props.player.player.Position === "QB" || props.player.player.Position === "RB" || props.player.player.Position === "WR" || props.player.player.Position === "TE") {
    return (
      <React.Fragment>
        <Table.Cell singleLine>{props.player.stats.PassYards['#text']}</Table.Cell>
        <Table.Cell singleLine>{props.player.stats.PassTD['#text']}</Table.Cell>
        <Table.Cell singleLine>{props.player.stats.PassInt['#text']}</Table.Cell>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Table.Cell singleLine>-</Table.Cell>
      <Table.Cell singleLine>-</Table.Cell>
      <Table.Cell singleLine>-</Table.Cell>
    </React.Fragment>
  )
}

function TableFragmentRushing(props) {
  if (props.player.player.Position === "QB" || props.player.player.Position === "RB" || props.player.player.Position === "WR" || props.player.player.Position === "TE") {
    return (
      <React.Fragment>
        <Table.Cell singleLine>{props.player.stats.RushYards['#text']}</Table.Cell>
        <Table.Cell singleLine>{props.player.stats.RushTD['#text']}</Table.Cell>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Table.Cell singleLine>-</Table.Cell>
      <Table.Cell singleLine>-</Table.Cell>
    </React.Fragment>
  )
}

function TableFragmentReceiving(props) {
  if (props.player.player.Position === "QB" || props.player.player.Position === "RB" || props.player.player.Position === "WR" || props.player.player.Position === "TE") {
    return (
      <React.Fragment>
        <Table.Cell singleLine>{props.player.stats.RecYards['#text']}</Table.Cell>
        <Table.Cell singleLine>{props.player.stats.RecTD['#text']}</Table.Cell>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Table.Cell singleLine>-</Table.Cell>
      <Table.Cell singleLine>-</Table.Cell>
    </React.Fragment>
  )
}

export default PlayerTable;