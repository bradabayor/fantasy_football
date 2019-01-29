import React, { Component } from "react";

import "../styles/app.scss";
import SignInForm from "./SignIn";
import AppHeader from "./AppHeader";

class LandingPage extends Component {
  componentDidMount() {
    console.log(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <AppHeader path={this.props.location.pathname} />
        <div className="landing-container">
          <SignInForm />
        </div>
      </div>
    );
  }
}

export default LandingPage;
