// src/components/Home.js

// Home Screen Layout

// Modules
import React, { Component } from "react";

// Stylesheets
import "../../styles/app.scss";

// Referenced Components
import RedditFeed from "./RedditFeed";
import APIFeed from "../Feed/Feed";

// Component Class
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: null
		};
	}

	componentDidMount = () => {
		this.callAPI();
	};

	callAPI = async () => {
		const res = await fetch("http://localhost:5000/users");
		const body = await res.json();
		if (res.status !== 200) {
			throw Error(res.message);
		}
		console.log(res.status);
		console.log(body);
		this.setState({ users: body.users });
	};

	render() {
		return (
			<section className="home">
				<div className="element element-1">
					<p>Player of the Week</p>
					<p>PLAYER HERE</p>
					<p className="home__link">Players</p>
				</div>
				<div className="element element-2">
					<p>My Team</p>
					<p>Team</p>
				</div>
				<div className="element element-3">
					<p>Feed</p>
					{/* <APIFeed /> */}
					<p className="home__link" />
				</div>
				<div className="element element-4">
					<p>League Standings</p>
					{this.state.users !== null ? (
						<p>{this.state.users[0].email}</p>
					) : null}
					<p className="home__link">Scores</p>
				</div>
				<div className="element element-5">
					<p>Players</p>
					<p>Players</p>
				</div>
				<div className="element element-6">
					<p>Reddit</p>
					{/* <RedditFeed /> */}
					<p className="home__link">More Reddit</p>
				</div>
				<div className="element element-7">
					<p>Account</p>
					<p>My Account</p>
				</div>
				<div className="element element-8">
					<p>Photos</p>
				</div>
				<div className="element element-9">
					<p>Videos</p>
				</div>
				<div className="element element-10">
					<p>NFL Scores</p>
					<p>Scores</p>
				</div>
				<div className="element element-11">
					<p>Activity</p>
				</div>
			</section>
		);
	}
}

export default Home;
