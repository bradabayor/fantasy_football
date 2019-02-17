import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Players from "../components/Players/Players";
import Home from "../components/Home/Home";

import "../styles/app.scss";
import Navigation from "./Navigation";
import AppHeader from "./AppHeader";
import Team from "./Team/Team";
import Auth from "../utils/auth";
import { jsonEval } from "@firebase/util";

class FantasyFootball extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authUsername: null,
			authEmail: null
		};
	}

	componentDidMount() {
		let accessString = Auth.getToken();
		console.log(accessString);
		if (accessString === null) {
			this.setState({
				isLoading: false,
				error: true
			});
		}

		fetch("http://localhost:5000/auth/findUser", {
			params: {
				username: this.props.match.params.username
			},
			headers: { Authorization: `JWT ${accessString}` }
		})
			.then(res => res.json())
			.then(res => {
				this.setState({
					authUsername: res.username,
					authEmail: res.email
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				{Auth.isUserAuthenticated() === true ? (
					<div>
						<p>Logged In User: {this.state.authUsername}</p>
						<div className="ff-container">
							<Navigation path={this.props.location.pathname} />
							<Route
								exact
								path={`${this.props.match.path}/home`}
								component={Home}
							/>
							<Route
								exact
								path={`${this.props.match.path}/team`}
								component={Team}
							/>
							<Route
								exact
								path={`${this.props.match.path}/players`}
								component={Players}
							/>
						</div>
					</div>
				) : (
					<p>You Need to Log In!</p>
				)}
			</div>
		);
	}
}

export default FantasyFootball;
