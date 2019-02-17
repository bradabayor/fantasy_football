const passport = require("passport");
const auth = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../models");
const jwtSecret = require("../passport/jwtsecret");

require("../passport");

/*
auth.post("/signup", (req, res) => {
	db.User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}).then(result => res.json(result));
});
*/

auth.post("/register", (req, res, next) => {
	console.log(req.body);
	passport.authenticate("register", (err, user, info) => {
		if (err) {
			console.log(err);
		}
		if (info !== undefined) {
			console.log(`info.message: ${info.message}`);
			res.send(info.message);
		} else {
			req.logIn(user, err => {
				const data = {
					username: req.body.username,
					email: req.body.email
				};
				db.User.findOne({
					where: {
						username: data.username
					}
				})
					.then(user => {
						user.update({
							email: data.email
						});
					})
					.then(() => {
						console.log("user created in db");
						res.status(200).send({ message: "user created" });
					});
			});
		}
	})(req, res, next);
});

auth.post("/login", (req, res, next) => {
	console.log(req.body);
	passport.authenticate("login", (err, user, info) => {
		if (err) {
			console.log(err);
		}
		if (info !== undefined) {
			console.log(info.message);
			res.send(info.message);
		} else {
			req.logIn(user, err => {
				db.User.findOne({
					where: {
						username: user.username
					}
				}).then(user => {
					const token = jwt.sign({ id: user.username }, jwtSecret.secret);
					res.status(200).send({
						auth: true,
						token: token,
						message: "user found and authenticated"
					});
				});
			});
		}
	})(req, res, next);
});

auth.get("/findUser", (req, res, next) => {
	passport.authenticate("jwt", { session: false }, (err, user, info) => {
		console.log(req.body);
		if (err) {
			console.log(err);
		}
		if (info != undefined) {
			console.log(info.message);
			res.send(info.message);
		} else {
			console.log("user found in db from route");
			res.status(200).send({
				auth: true,
				username: user.username,
				email: user.email,
				message: "user found in db"
			});
		}
	})(req, res, next);
});

module.exports = auth;
