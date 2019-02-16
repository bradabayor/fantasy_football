import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import FantasyFootball from "./FantasyFootball";

import "../styles/app.scss";
import "../constants/fontAwesome";

import { withAuthentication } from "./Session";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null
		};
	}

	handleLeagueChange = () => {};

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

export default withAuthentication(App);
