import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "./Firebase";

import "../App.css";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();

    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const IsInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="signup-container">
        <form size="large" autoComplete="off" onSubmit={this.onSubmit}>
          <input
            className="signup-input"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Name"
            fluid
          />
          <input
            className="signup-input"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email"
            fluid
          />
          <input
            className="signup-input"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            placeholder="Password"
            fluid
            type="password"
          />
          <input
            className="signup-input"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            placeholder="Confirm Password"
            fluid
            type="password"
          />
          <button className="signup-button" type="submit" disabled={IsInvalid}>
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpForm;
