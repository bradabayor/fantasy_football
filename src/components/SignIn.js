import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "./Firebase";

import "../styles/app.scss";

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
      <div className="sign-in">
        <h1>SIGN IN</h1>
        <form
          className="form"
          size="large"
          autoComplete="off"
          onSubmit={this.onSubmit}
        >
          <input
            className="form__input"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Username"
          />

          <input
            className="form__input"
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button className="form__button" type="submit" disabled={IsInvalid}>
            Log In
          </button>
        </form>
        {error && <p className="sign-in-error">{error.message}</p>}
      </div>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignInFormBase));

export default SignUpForm;

export { SignInFormBase };
