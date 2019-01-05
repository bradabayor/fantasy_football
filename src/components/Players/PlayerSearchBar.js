import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import '../../App.css';

class PlayerSearchBar extends Component {
  options = [
    { value: 'ALL', text: '<All>' },
    { value: 'QB', text: 'QB' },
    { value: 'RB', text: 'RB' },
    { value: 'WR', text: 'WR' },
    { value: 'TE', text: 'TE' },
    { value: 'K', text: 'K' }
  ]

  state = { activePosition : 'All' };

  handleClick = (e, { name }) => {
    this.setState({ activePosition : name }, () => {this.props.getPlayers(this.state.activePosition)});
  };

  render() {
    const { activePosition } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name="All"
          active={activePosition === 'All'}
          onClick={this.handleClick}
        >
        All
        </Menu.Item>
        <Menu.Item
          name="QB"
          active={activePosition === 'QB'}
          onClick={this.handleClick}
        >
        QB
        </Menu.Item>
        <Menu.Item
          name="RB"
          active={activePosition === 'RB'}
          onClick={this.handleClick}
        >
        RB
        </Menu.Item>
        <Menu.Item
          name="WR"
          active={activePosition === 'WR'}
          onClick={this.handleClick}
        >
        WR
        </Menu.Item>
        <Menu.Item
          name="TE"
          active={activePosition === 'TE'}
          onClick={this.handleClick}
        >
        TE
        </Menu.Item>
        <Menu.Item
          name="K"
          active={activePosition === 'K'}
          onClick={this.handleClick}
        >
        K
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default PlayerSearchBar;