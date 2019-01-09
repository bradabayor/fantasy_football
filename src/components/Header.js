import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, Icon } from 'antd';

class AppHeader extends Component {
  render() {
    return (
        <Menu
          mode="horizontal"
          defaultSelectedKeys="home"
        >
          <Menu.Item key="home">
            <NavLink exact to="/home">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="team">
            <NavLink exact to="/team">Team</NavLink>
          </Menu.Item>
          <Menu.Item key="players">
            <NavLink exact to="/players">Players</NavLink>
          </Menu.Item>
        </Menu>
    );
  }
}

export default AppHeader;