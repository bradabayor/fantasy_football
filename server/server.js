const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const db = require("./models");

const routes = require("./routes/routes");
const auth = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

// Import Routes

app.use("/", routes);
app.use("/auth", auth);

// DB Sync and Listen

db.db
	.sync()
	.then(() => {
		app.listen(5000, () => console.log(`fumble_db live @ port 5000`));
	})
	.catch(err => {
		console.error(err, "Something is wrong with the DB connection");
	});

module.exports = app;
