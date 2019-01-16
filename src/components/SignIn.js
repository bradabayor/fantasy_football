import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "./Firebase";

import "../App.css";

const INITAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITAL_STATE });
        this.props.history.push("/fantasy/home");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const IsInvalid = password === "" || email === "";

    return (
      <div className="signup-container">
        <h1>Log In</h1>
        <form size="large" autoComplete="off" onSubmit={this.onSubmit}>
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
            name="password"
            value={password}
            onChange={this.onChange}
            placeholder="Password"
            fluid
            type="password"
          />
          <button className="signup-button" type="submit" disabled={IsInvalid}>
            Log In
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignInFormBase));

export default SignUpForm;

export { SignInFormBase };
