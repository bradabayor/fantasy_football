import React, { Component, PropTypes } from "react";
import { Link, Route } from "react-router-dom";
import Auth from "../utils/auth";

import SignUpContainer from "./SignUp";
import SignInContainer from "./SignIn";

class Base extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="top-bar">
					<div className="top-bar-left">
						<Link to="/">React App</Link>
					</div>

					{Auth.isUserAuthenticated() ? (
						<div className="top-bar-right">
							<Link to="/signin" onClick={() => Auth.deauthenticateUser()}>
								Log Out
							</Link>
						</div>
					) : (
						<div className="top-bar-right">
							<Link to="/signin">Log In</Link>
							<Link to="/signup">Sign Up</Link>
						</div>
					)}
				</div>
				<div>
					<Route path="/signup" component={SignUpContainer} />
					<Route path="/signin" component={SignInContainer} />
				</div>
			</div>
		);
	}
}

export default Base;
