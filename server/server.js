const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pool = require("./queries");

const port = 5000;

app.use(bodyParser.json());
app.unsubscribe(
	bodyParser.urlencoded({
		extended: true
	})
);

// console log that server is running
app.listen(port, () => console.log(`We are live at ${port}`));

//create a GET route
app.get("/", (req, res) => {
	res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get("/users", (req, res) => {
	pool.pool.connect((err, client, done) => {
		client.query(`SELECT * FROM users`, (error, result) => {
			done();
			if (error) {
				res.status(400).json({ error });
			}
			if (result.rows < "1") {
				res.status(404).send({
					status: "Failed",
					message: "No student information found"
				});
			} else {
				res.status(200).send({
					status: "Successful",
					message: "Users Information retrieved",
					users: result.rows
				});
			}
		});
	});
});

module.exports = app;
