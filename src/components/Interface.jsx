import React, { Component, Fragment } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import AppHeader from "./Header";
//import "../styles/app.scss";

import Auth from "../api/passport";
import AppDrawer from "./Drawer";
import Drawer from "./Sidebar";
import LeagueStandings from "./League";
import AppMenu from "./AppMenu";
import Players from "./Players/Players";

class Interface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      user: null,
      currentLeague: null
    };
  }

  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/auth/findUser", {
      params: {
        username: this.props.match.params.username
      },
      headers: { Authorization: `JWT ${Auth.getToken()}` }
    });
    var json = await response.json();
    console.log(json);
    response = await fetch(`http://localhost:5000/users/${json.id}`);
    json = await response.json();
    console.log(json);
    this.setState({
      auth: true,
      user: json,
      currentLeague: json.leagues[0]
    });
  };

  deauthenticateUser = () => {
    Auth.deauthenticateUser();
    this.setState({ auth: false });
  };

  changeCurrentLeague = league => {
    this.setState({ currentLeague: league });
  };

  render() {
    return (
      <Fragment>
        {Auth.isUserAuthenticated() ? (
          <Fragment>
            <AppHeader
              user={this.state.user ? this.state.user.username : null}
              leagues={this.state.user ? this.state.user.leagues : null}
              deAuthUser={() => this.deauthenticateUser()}
              changeCurrentLeague={league => this.changeCurrentLeague(league)}
              currentLeague={
                this.state.currentLeague ? this.state.currentLeague.title : null
              }
            />
            <AppMenu />
            <div>
              <Route
                path="/app/players"
                render={props => (
                  <Players
                    {...props}
                    user={this.state.user}
                    currentLeague={this.state.currentLeague}
                  />
                )}
              />
            </div>
          </Fragment>
        ) : (
          <Redirect to="/login" />
        )}
      </Fragment>
    );
  }
}

export default Interface;
