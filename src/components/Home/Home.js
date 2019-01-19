// src/components/Home.js

// Home Screen Layout

// Modules
import React, { Component } from "react";

// Stylesheets
import "../../styles/app.scss";

// Referenced Components
import RedditFeed from "./RedditFeed";

// Component Class
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-home-element" />
        <div className="home-element">2</div>
        <div className="home-element">3</div>
        <div className="home-element">
          <RedditFeed />
        </div>
        <div className="home-element">5</div>
        <div className="home-element">6</div>
      </div>
    );
  }
}

export default Home;
