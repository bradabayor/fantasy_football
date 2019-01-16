import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-header-container">
          <div className="header-elements">
            <FontAwesomeIcon icon="football-ball" color="white" size="2x" />
            <p style={{ color: "white", fontWeight: "bold", fontSize: "12px" }}>
              Log In
            </p>
          </div>
        </div>
        <SignInForm />
      </div>
    );
  }
}

export default LandingPage;
