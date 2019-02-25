import React, { Component, Fragment } from "react";
import { Table, Loader } from "semantic-ui-react";

const API = require("../../api/mysportfeeds");

class PlayerDetails extends Component {
  state = { player: null };

  componentDidMount = async () => {
    try {
      const player = await API.fetchPlayerDetailsMSP(this.props.player);
      this.setState({ player: player.activeplayers.playerentry[0] });
    } catch (err) {
      console.error("Issue Fetching Player Details from MSF");
      this.props.handlePlayerDetail();
    }
  };

  render() {
    let playerDetail = null;
    if (this.state.player !== null) {
      playerDetail = (
        <Table.Row>
          <div>
            <img src={this.state.player.player.officialImageSrc} />
          </div>
        </Table.Row>
      );
    } else {
      playerDetail = <Loader />;
    }

    return <Fragment>{playerDetail}</Fragment>;
  }
}

export default PlayerDetails;
