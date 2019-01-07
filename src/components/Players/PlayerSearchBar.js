import React, { Component } from 'react';

import { Button, Input } from 'antd';

import '../../App.css';

const PositionButtonGroup = Button.Group;
const Search = Input.Search;

class PlayerSearchBar extends Component {

  state = { activePosition : 'All' };

  handleClick = (e) => {
    this.setState({ activePosition : e.target.name }, () => {this.props.getPlayers(this.state.activePosition)});
  };

  render() {
    const { activePosition } = this.state

    return (
      <div>
        <PositionButtonGroup>
          <Button
            name="All"
            active={activePosition === "All"}
            onClick={this.handleClick}
          >
          All
          </Button>
          <Button
            name="QB"
            active={activePosition === "QB"}
            onClick={this.handleClick}
          >
          QB
          </Button>
          <Button
            name="RB"
            active={activePosition === "RB"}
            onClick={this.handleClick}
          >
          RB
          </Button>
          <Button
            name="WR"
            active={activePosition === "WR"}
            onClick={this.handleClick}
          >
          WR
          </Button>
          <Button
            name="TE"
            active={activePosition === "TE"}
            onClick={this.handleClick}
          >
          TE
          </Button>
          <Button
            name="K"
            active={activePosition === "K"}
            onClick={this.handleClick}
          >
          K
          </Button> 
        </PositionButtonGroup>
        <Search
          placeholder="Search Players..."
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
    )
  }
}

export default PlayerSearchBar;