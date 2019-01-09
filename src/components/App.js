import React from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';

import Header from './Header';
import Players from './Players/Players';
import SignUpPage from './SignUp';

import '../App.css';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={SignUpPage}/>
      <Route exact path="team" />
      <Route exact path="/players" component={Players} />
    </div>
  </Router>
);
  


export default App;
