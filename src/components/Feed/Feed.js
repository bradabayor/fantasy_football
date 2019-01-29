import React, { Component } from "react";

const API = require("../../utils/Msp");

class Feed extends Component {
  render() {
    return <p>{this.props.feed.feed.Name}</p>;
  }
}

class APIFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: null
    };
  }

  componentDidMount() {
    API.fetchFeedUpdates().then(feeds =>
      this.setState({ feeds: feeds.slice(0, 5) })
    );
  }

  render() {
    var index = 0;

    return (
      <div>
        {this.state.feeds &&
          this.state.feeds.map(feed => {
            index += 1;
            return <Feed feed={feed} key={index} />;
          })}
      </div>
    );
  }
}

export default APIFeed;
