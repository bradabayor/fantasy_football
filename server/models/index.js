const Sequelize = require("sequelize");

const bcrypt = require("bcrypt");

const db = new Sequelize("fumble_db", "bradabayor", "password", {
	host: "localhost",
	dialect: "postgres",
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

// User Model

const User = db.define("user", {
	id: {
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	username: {
		type: Sequelize.TEXT,
		notEmpty: true
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING,
		notEmpty: true
	}
});

const League = db.define("league", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: Sequelize.STRING(30)
	},
	rules: {
		type: Sequelize.STRING(30)
	}
});

User.belongsToMany(League, { through: "UserLeague" });
League.belongsToMany(User, { through: "UserLeague" });

module.exports = {
	db,
	User,
	League
};
