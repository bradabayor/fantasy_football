import React, { Component } from 'react';

import { Table, Col } from 'antd';

import '../../App.css';

const { Column, ColumnGroup } = Table;

class PlayerTable extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  

  render() {
    return (
      <Table size="small" dataSource={this.props.players} pagination={{ pageSize : 30 }}>
        <Column
          title="Player"
          dataIndex="player"
          key="player"
          render={ (name) => name.FirstName + ' ' + name.LastName}
        />
        <ColumnGroup title="Passing">
          <Column
            title="Yards"
            dataIndex="stats.PassYards['#text']"
            key="passYards"
          />
          <Column
            title="TD"
            dataIndex="stats.PassTD['#text']"
            key="passTD"
          />
          <Column
            title="Int"
            dataIndex="stats.PassInt['#text']"
            key="passInt"
          />
        </ColumnGroup>
        <ColumnGroup title="Rushing">
          <Column
            title="Yards"
            dataIndex="stats.RushYards['#text']"
            key="rushYards"
          />
          <Column
            title="TD"
            dataIndex="stats.RushTD['#text']"
            key="rushTD"
          />
        </ColumnGroup>
        <ColumnGroup title="Receiving">
          <Column
            title="Yards"
            dataIndex="stats.RecYards['#text']"
            key="recYards"
          />
          <Column
            title="TD"
            dataIndex="stats.RecTD['#text']"
            key="recTD"
          />
        </ColumnGroup>
        <ColumnGroup title="Misc">
          <Column
            title="Fum Lost"
            dataIndex="stats.FumLost['#text']"
            key="fumLost"
          />
          <Column
            title="2PT"
            dataIndex="stats.TwoPtPassRec['#text']"
            key="2PT"
          />
        </ColumnGroup>
        <ColumnGroup>
          <Column
            title="points"
            dataIndex="fantasyPoints"
            key="fantasyPoints"
            defaultSortOrder="descend"
            className="player-table-points"
          />
        </ColumnGroup>
      </Table>
    )
  }
}

export default PlayerTable;