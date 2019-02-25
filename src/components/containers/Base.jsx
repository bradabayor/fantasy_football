import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header";
import Interface from "../Interface";
import SignUpContainer from "./SignUp";
import SignInContainer from "./SignIn";

const Base = () => (
  <section>
    <div>
      <Route exact path="/login" component={SignInContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route path="/app" component={Interface} />
    </div>
  </section>
);

export default Base;
