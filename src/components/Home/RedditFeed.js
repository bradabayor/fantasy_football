import React, { Component } from "react";
import { getRedditFeed } from "../../utils/Reddit";

import "../../styles/app.scss";

const Post = post => (
  <div className="reddit">
    <div className="reddit__thumbnail-container">
      <a href={123}>
        <img className="reddit__thumbnail" src={123} alt="" />
      </a>
    </div>
    <h2 className="reddit__title">{123}</h2>
    <p className="reddit__subreddit">{123}</p>
    <p />
  </div>
);

class RedditFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    getRedditFeed().then(posts => this.setState({ posts }));
  }

  render() {
    return <div>{this.state.posts && <Post post={this.state.posts[1]} />}</div>;
  }
}

export default RedditFeed;
