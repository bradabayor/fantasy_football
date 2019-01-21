import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "../components/Firebase";

import LandingPage from "./LandingPage";
import FantasyFootball from "./FantasyFootball";

import "../styles/app.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faHome,
  faSitemap,
  faTrophy,
  faFootballBall,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "./SignUp";
import { withAuthentication } from "./Session";

library.add({
  faPlus,
  faHome,
  faSitemap,
  faTrophy,
  faFootballBall,
  faTimes
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/fantasy" component={FantasyFootball} />
          />
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
