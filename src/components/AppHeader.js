// src/components/AppHeader.js

// Project Title Banner

// Modules
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../components/Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Stylesheets
import "../styles/app.scss";

// One-Use Stateless Components
const SignOutButton = props => <p onClick={props.signOut}>SignOut</p>;
const SignUpButton = props => <p>SignUp</p>;

// Component Class
class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut = () => this.props.firebase.doSignOut();

  render() {
    return (
      <div className="app-header">
        <div className="app-header-elements">
          <FontAwesomeIcon icon="football-ball" color="white" size="2x" />
          <h1>Fumble.</h1>
          <div className="header-user-info">
            {/* Show user email if logged-in and within fantasy app */}
            {this.props.authUser !== null &&
            /\/fantasy/.test(this.props.path) ? (
              <div>
                <p>{this.props.authUser.email}</p>
                <SignOutButton signOut={this.signOut} />
              </div>
            ) : null}

            {/* display the SignUp element if not logged in */}
            {this.props.authUser === null ? <SignUpButton /> : null}
          </div>
        </div>
      </div>
    );
  }
}

AppHeader.defaultProps = {
  authUser: null
};

// Export AppHeader components with pre-loaded firebase context prop //
export default withFirebase(AppHeader);
