import React, { Component } from "react";
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";
import { withFirebase } from "../components/Firebase";

import LandingPage from "./LandingPage";
import FantasyFootball from "./FantasyFootball";

import "../styles/app.scss";

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
      authUser: null,
      user: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });

      console.log(this.props.firebase.auth.currentUser.providerData[0].uid);
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
          <Route
            path="/fantasy"
            render={props => (
              <FantasyFootball {...props} authUser={this.state.authUser} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
