import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from './Firebase';

import { Button, Input } from 'semantic-ui-react';
import { EventEmitter } from 'events';

const INITAL_STATE = {
  username : '',
  email : '',
  passwordOne : '',
  passwordTwo : '',
  error : null
};

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITAL_STATE };
  };

  onSubmit = event => {
    event.preventDefault();

    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITAL_STATE });
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name] : event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const IsInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Name"
        />
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="text"
          placeholder="Password"
        />
        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="text"
          placeholder="Confirm Password"
        />
        <Button
          primary
          type="submit"
          disabled={IsInvalid}
        >
        Sign Up
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    <Link to="/signup">Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpForm;

export { SignUpLink, SignUpPage };