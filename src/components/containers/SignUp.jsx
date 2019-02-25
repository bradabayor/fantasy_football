// src/SignIn.jsx

// Modules
import React, { Component } from "react";

//Styles
import Card from "@material-ui/core/Card";

import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";

import CardContent from "@material-ui/core/CardContent";

class SignUpContainer extends Component {
	constructor(props) {
		super(props);

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

		const username = encodeURIComponent(this.state.user.name);
		const email = encodeURIComponent(this.state.user.email);
		const password = encodeURIComponent(this.state.user.password);
		const formData = `username=${username}&email=${email}&password=${password}`;

		fetch("http://localhost:5000/auth/register", {
			method: "POST",
			headers: {
				Accept: "application/x-www-form-urlencoded",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: formData
		});
	};

	render() {
		return (
			<SignUpForm
				onSubmit={this.processForm}
				onChange={this.changeUser}
				errors={this.state.errors}
				user={this.state.user}
			/>
		);
	}
}

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
	<Card>
		<form action="/" onSubmit={onSubmit}>
			<h2>Sign Up</h2>
			{errors.summary && <p>{errors.summary}</p>}

			<div>
				<TextField
					autoComplete="off"
					name="name"
					placeholder="name"
					errorText={errors.name}
					onChange={onChange}
					value={user.name}
				/>
			</div>

			<div>
				<TextField
					autoComplete="off"
					name="email"
					placeholder="email"
					errorText={errors.email}
					onChange={onChange}
					value={user.email}
				/>
			</div>

			<div>
				<TextField
					autoComplete="off"
					name="password"
					placeholder="password"
					errorText={errors.password}
					onChange={onChange}
					value={user.password}
				/>
			</div>

			<div>
				<Fab type="submit" color="primary">
					Submit
				</Fab>
			</div>

			<CardContent>Already Have an Account?</CardContent>
		</form>
	</Card>
);

export default SignUpContainer;
