const bcrypt = require("bcrypt");
const jwtsecret = require("./jwtsecret");

const BCRYPT_SALT_ROUNDS = 10;

const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const db = require("../models");
const JWTstrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;

passport.use(
	"register",
	new localStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			session: false
		},
		(username, password, done) => {
			db.User.findOne({
				where: {
					username: username
				}
			})
				.then(user => {
					if (user != null) {
						console.log("username already taken");
						return done(null, false, { message: "username already taken" });
					} else {
						bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
							db.User.create({
								username: username,
								password: hashedPassword
							}).then(user => {
								console.log("user created");
								return done(null, user);
							});
						});
					}
				})
				.catch(err => done(err));
		}
	)
);

passport.use(
	"login",
	new localStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			session: false
		},
		(username, password, done) => {
			db.User.findOne({
				where: {
					username: username
				}
			})
				.then(user => {
					if (user === null) {
						return done(null, false, { message: "incorrect username" });
					} else {
						bcrypt.compare(password, user.password).then(res => {
							if (res !== true) {
								console.log("passwords do not match");
								return done(null, false, { message: "passwords do not match" });
							}
							console.log("passport: user found and authenticated");
							//console.log(user);
							return done(null, user);
						});
					}
				})
				.catch(err => done(err));
		}
	)
);

const opts = {
	jwtFromRequest: extractJWT.fromAuthHeaderWithScheme("JWT"),
	secretOrKey: jwtsecret.secret
};

passport.use(
	"jwt",
	new JWTstrategy(opts, (jwt_payload, done) => {
		db.User.findOne({
			where: {
				username: jwt_payload.id
			}
		})
			.then(user => {
				if (user) {
					console.log("user found in db in passport");
					done(null, user);
				} else {
					console.log("user not found in db");
					done(null, false);
				}
			})
			.catch(err => done(err));
	})
);
