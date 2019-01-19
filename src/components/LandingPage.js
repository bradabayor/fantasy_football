import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/app.scss";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";
import AppHeader from "./AppHeader";

class LandingPage extends Component {
  componentDidMount() {
    console.log(this.props.location.pathname);
  }

  render() {
    return (
      <div className="landing-container">
        <AppHeader path={this.props.location.pathname} />
        <SignInForm />
      </div>
    );
  }
}

export default LandingPage;
