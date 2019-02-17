import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import LandingPage from "./LandingPage";
import FantasyFootball from "./FantasyFootball";

import "../styles/app.scss";
import "../constants/fontAwesome";

import { withAuthentication } from "./Session";
import routes from "../routes";
import Base from "./Base";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" component={Base} />
					<Route path="/fantasy" component={FantasyFootball} />
				</div>
			</Router>
		);
	}
}

export default App;
