import React, { Component } from "react";

import "../styles/app.scss";
import SignUpContainer from "./SignUp";
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
					<SignUpContainer />
				</div>
			</div>
		);
	}
}

export default LandingPage;
