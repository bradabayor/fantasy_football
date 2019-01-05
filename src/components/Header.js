import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <div className="nav">
        <Menu>
          <Menu.Item
            header
            name="home"
            as={NavLink}
            exact to="/"
            activeClassName="active"
          />
          <Menu.Item
            header
            name="Players"
            as={NavLink}
            exact to="/players"
            activeClassName="active"
          />
        </Menu>
      </div>
    );
  }
}

export default Header;