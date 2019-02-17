const routes = require("express").Router();
const db = require("../models");

routes.get("/users", (req, res) => {
	db.User.findAll().then(result => res.json(result));
});

routes.get("/users/:id", (req, res) => {
	db.User.findOne({
		where: {
			id: req.params.id
		}
	}).then(result => res.json(result));
});

module.exports = routes;
