import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import "../styles/app.scss";
import "../constants/fontAwesome";

import Base from "./containers/Base";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ width: "1024px", margin: "auto" }}>
          <Route path="/" component={Base} />
        </div>
      </Router>
    );
  }
}

export default App;
