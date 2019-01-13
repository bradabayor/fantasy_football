{
  /*import React, { Component } from "react";

import { Feed, Icon } from "semantic-ui-react";

const API = require("../../utils/Msp");

const CumPlayerStatsPost = post => (
  <Feed.Event>
    <Feed.Label>
      <Icon name="redo" />
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>{post.feed.Description}</Feed.Summary>
    </Feed.Content>
  </Feed.Event>
);

class APIFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    API.fetchFeedUpdates().then(feeds =>
      this.setState({ feeds: feeds.slice(0, 14) })
    );
  }

  render() {
    return (
      <div>
        {this.state.feeds
          ? this.state.feeds.map(post => {
              <Feed>
                {post.feed.Name === "Cumulative Player Stats" ? (
                  <CumPlayerStatsPost post={post} />
                ) : (
                  <p>Not CPS</p>
                )}
              </Feed>;
            })
          : null}
      </div>
    );
  }
}

export default APIFeed;
*/
}
