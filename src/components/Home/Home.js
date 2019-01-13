import React, { Component } from "react";

import { Container, Segment, Dropdown, Table, Grid } from "semantic-ui-react";
import RedditFeed from "./RedditFeed";

class Home extends Component {
  render() {
    return (
      <div className="home-grid-container">
        <div className="home-grid-element">1</div>
        <div className="home-grid-element">2</div>
        <div className="home-grid-element">3</div>
        <div className="home-grid-element">
          <RedditFeed />
        </div>
        <div className="home-grid-element">5</div>
        <div className="home-grid-element">6</div>
      </div>
    );
  }
}

export default Home;
