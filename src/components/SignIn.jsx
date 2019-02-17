// src/SignIn.jsx

// Modules
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//Styles
import Card from "@material-ui/core/Card";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import "../styles/app.scss";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import Auth from "../utils/auth";

const useStyles = makeStyles({
	container: {
		width: "400px",
		height: "600px"
	}
});

class SignInContainer extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			user: {
				email: "",
				name: "",
				password: ""
			},
			errors: {}
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
			headers: {
				Accept: "application/x-www-form-urlencoded",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: formData
		})
			.then(res => res.clone().json())
			.then(data => {
				Auth.authenticateUser(data.token);
				this.props.history.push("/fantasy");
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<SignInForm
				onSubmit={this.processForm}
				onChange={this.changeUser}
				errors={this.state.errors}
				user={this.state.user}
			/>
		);
	}
}

const SignInForm = ({ onSubmit, onChange, errors, user }) => (
	<Card>
		<form action="/" onSubmit={onSubmit}>
			<h2>Sign In</h2>

			{errors.summary && <p>{errors.summary}</p>}

			<div>
				<TextField
					name="username"
					placeholder="username"
					errorText={errors.username}
					onChange={onChange}
					value={user.username}
				/>
			</div>

			<div>
				<TextField
					name="password"
					placeholder="password"
					errorText={errors.password}
					onChange={onChange}
					value={user.password}
				/>
			</div>

			<div>
				<Fab type="submit" color="primary">
					Log In
				</Fab>
			</div>

			<CardContent>Already Have an Account?</CardContent>
		</form>
	</Card>
);

export default withRouter(SignInContainer);
