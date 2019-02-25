import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class LeagueStandings extends Component {
  state = { teams: null };

  componentWillReceiveProps = () => {
    console.log(this.props);
    if (this.props.currentLeague) {
      this.getStandings(this.props.currentLeague.id);
    }
  };

  getStandings = async id => {
    const response = await fetch(`http://localhost:5000/teamsbyleague/${id}`);
    const json = await response.json();
    console.log(json);
    this.setState({ teams: json });
  };

  render() {
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">League Standings</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.teams
            ? this.state.teams.map(team => {
                return (
                  <Table.Row key={team.id}>
                    <Table.Cell collapsing>{team.id}</Table.Cell>
                    <Table.Cell>{team.name}</Table.Cell>
                    <Table.Cell>{team.owner.username}</Table.Cell>
                  </Table.Row>
                );
              })
            : null}
        </Table.Body>
      </Table>
    );
  }
}

export default LeagueStandings;
