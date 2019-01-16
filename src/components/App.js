import React, { Component } from "react";
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";
import { withFirebase } from "../components/Firebase";

import Players from "./Players/Players";
import APIFeed from "./Feed/Feed";
import AppHeader from "./AppHeader";
import Home from "./Home/Home";
import MainMenu from "./MainMenu";
import LandingPage from "./LandingPage";
import FantasyFootball from "./FantasyFootball";

import * as ROUTES from "../constants/routes";
import "../App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHome,
  faSitemap,
  faTrophy,
  faFootballBall
} from "@fortawesome/free-solid-svg-icons";
import AppLoader from "../utils/AppLoader";
library.add({ faPlus, faHome, faSitemap, faTrophy, faFootballBall });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/fantasy" component={FantasyFootball} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
