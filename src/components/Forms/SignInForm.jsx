import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const SignInForm = ({ onSubmit, onChange, errors, user, classes }) => (
	<Card className={classes.root}>
		<form action="/" onSubmit={onSubmit}>
			<h2>Sign In</h2>
			{errors.summary && <p>{errors.summary}</p>}
			<div>
				<TextField
					name="username"
					placeholder="username"
					onChange={onChange}
					value={user.username}
					autoComplete="off"
					className={classes.textInput}
				/>
			</div>
			<div>
				<TextField
					name="password"
					placeholder="password"
					type="password"
					onChange={onChange}
					value={user.password}
					autoComplete="off"
					className={classes.textInput}
				/>
			</div>

			<div>
				<Button
					className={classes.submitButton}
					type="submit"
					variant="contained"
					color="primary">
					Log In
				</Button>
			</div>

			<CardContent>Already Have an Account?</CardContent>
		</form>
	</Card>
);

const styles = {
	root: {
		width: "300px",
		height: "350px",
		margin: "50px auto auto auto",
		paddingTop: "20px",
		textAlign: "center"
	},
	textInput: {
		margin: "10px"
	},
	submitButton: {
		width: "200px",
		margin: "30px"
	}
};

export default withStyles(styles)(SignInForm);
