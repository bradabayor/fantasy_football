// src/components/AppHeader.js

// Project Title Banner

// Modules
import React, { Component } from "react";
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
          <FontAwesomeIcon icon="football-ball" color="white" size="1x" />
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
