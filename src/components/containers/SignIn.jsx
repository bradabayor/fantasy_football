import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Auth from "../../api/passport";
import SignInForm from "../Forms/SignInForm";

class SignInContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				email: "",
				username: "",
				password: ""
			},
			errors: {},
			redirectToApp: false
		};
	}

	changeUser = e => {
		const field = e.target.name;
		const user = this.state.user;
		user[field] = e.target.value;

		this.setState({
			user
		});
	};

	processForm = e => {
		e.preventDefault();

		const username = encodeURIComponent(this.state.user.username);
		const password = encodeURIComponent(this.state.user.password);
		const formData = `username=${username}&password=${password}`;

		fetch("http://localhost:5000/auth/login", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/x-www-form-urlencoded",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: formData
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(data => {
				console.log(`after .json: ${data.token}`);
				Auth.authenticateUser(data.token);

				this.setState({
					redirectToApp: true
				});
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
				{this.state.redirectToApp && <Redirect to="/app" />}
				<SignInForm
					onSubmit={this.processForm}
					onChange={this.changeUser}
					errors={this.state.errors}
					user={this.state.user}
				/>
			</div>
		);
	}
}

export default withRouter(SignInContainer);
