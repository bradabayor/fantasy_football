import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from './Firebase';

import { Form, Button, Grid, Header, Segment, Icon, Message } from 'semantic-ui-react';
import { EventEmitter } from 'events';

import LandingHeader from './LandingHeader';

import '../App.css';

const INITAL_STATE = {
  username : '',
  email : '',
  passwordOne : '',
  passwordTwo : '',
  error : null
};

const SignUpPage = () => (
  <div>
    <LandingHeader />
    <div style={{ marginTop : 50 }}>
      <Grid verticalAlign="middle" textAlign="center" className="ui middle aligned center aligned grid">
          <Grid.Column style={{ maxWidth : 450 }}>
            <Icon name="football ball" size="huge" color="pink"></Icon>
            <Header as="h1">Sign Up</Header>
            <SignUpForm />
          </Grid.Column>
      </Grid>
    </div>
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
      <div>
        <Form size="large" autoComplete="off" onSubmit={this.onSubmit}>
          <Segment style={{ Width : 450 }}>
            <Form.Input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Name"
              fluid
            />
            <Form.Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email"
              fluid
            />
            <Form.Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="text"
              placeholder="Password"
              fluid
              type="password"
            />
            <Form.Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="text"
              placeholder="Confirm Password"
              fluid
              type="password"
            />
            <Button
              fluid
              color="pink"
              type="submit"
              disabled={IsInvalid}
            >
            Sign Up
            </Button>

            
          </Segment>
        </Form>
        {error && 
          <Message
            error
            header="Uh Oh..."
            content={error.message}
            style={{ maxWidth : 450 }}
          />}
      </div>
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