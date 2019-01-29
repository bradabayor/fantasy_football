// src/components/AppHeader.js

// Project Title Banner

// Modules
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Stylesheets
import "../styles/app.scss";
import { withAuthentication } from "./Session";

// Component Class
class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leagues: null
    };

    this.signOut = this.signOut.bind(this);
    this.getUserLeagues = this.getUserLeagues.bind(this);
  }

  signOut = () => this.props.firebase.doSignOut();

  getUserLeagues = uid => {
    return this.props.firebase.db
      .ref(`/users/${uid}/leagues`)
      .once("value")
      .then(leagues => {
        this.setState({ leagues: leagues.val() });
      });
  };

  render() {
    let userInfo = null;
    if (this.props.firebase.auth.currentUser) {
      this.getUserLeagues(this.props.firebase.auth.currentUser.uid).then(
        (userInfo = (
          <div>
            <button
              className="header__button button--no-border"
              onClick={() => this.signOut()}
            >
              {this.props.firebase.auth.currentUser.email}
            </button>
          </div>
        ))
      );
    }

    return (
      <div className="header">
        <span className="header__logo">
          <FontAwesomeIcon
            icon="running"
            rotation={180}
            color="#2196F3"
            size="2x"
          />
          <h1>Fumble.</h1>
        </span>
        <div className="header__nav">
          <button className="header__button button--no-border">About</button>
          <button className="header__button button--no-border">Help</button>
          {userInfo}
        </div>
      </div>
    );
  }
}

AppHeader.defaultProps = {
  authUser: null
};

// Export AppHeader components with pre-loaded firebase context prop //
export default withAuthentication(AppHeader);
