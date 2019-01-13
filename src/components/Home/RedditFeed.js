import React, { Component } from "react";
import { getRedditFeed } from "../../utils/Reddit";
import reddit_logo from "../../images/reddit_logo.svg";

function RedditPost(props) {
  var post = props.post.data;
  var link = "//www.reddit.com" + post.permalink;
  return (
    <div className="reddit-post">
      {!post.thumbnail === "self" || !post.thumbnail === "default" ? (
        <img src={post.thumbnail} alt="thumbnail" />
      ) : (
        <img src={reddit_logo} alt="reddit_logo" />
      )}
      <div className="reddit-post-title">
        <a href={link} target="_blank">
          {post.title}
        </a>
        <span>{post.subreddit_name_prefixed}</span>
      </div>
    </div>
  );
}

function RedditPosts(props) {
  var postList = [];
  props.posts.map(post => {
    postList.push(<RedditPost post={post} />);
  });
  return postList;
}

class RedditFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    getRedditFeed().then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="reddit-posts">
        {!this.state.posts ? null : <RedditPosts posts={this.state.posts} />}
      </div>
    );
  }
}

export default RedditFeed;
