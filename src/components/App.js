import React from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';

import Header from './Header';
import Players from './Players/Players';
import SignUpForm, { SignUpPage } from './SignUp';

import * as ROUTES from '../constants/routes';
import '../App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={SignUpPage}/>
      <Route path={ROUTES.TEAM} />
      <Route path={ROUTES.PLAYERS} component={Players} />
    </div>
  </Router>
);
  


export default App;
