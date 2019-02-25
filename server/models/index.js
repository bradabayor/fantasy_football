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
  title: {
    type: Sequelize.STRING(30)
  },
  rules: {
    type: Sequelize.STRING(30)
  }
});

const Team = db.define("team", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(30),
    notEmpty: true
  }
});

RosteredPlayer = db.define("rosteredplayer", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(30),
    notEmpty: true
  },
  apiKey: {
    type: Sequelize.STRING(30),
    notEmpty: true
  }
});

User.belongsToMany(League, {
  through: "userleague",
  foreignKey: "userId",
  otherKey: "leagueId"
});
League.belongsToMany(User, {
  through: "userleague",
  foreignKey: "leagueId",
  otherKey: "userId"
});

RosteredPlayer.belongsToMany(Team, {
  through: "teamrosteredplayers",
  foreignKey: "rosteredPlayerId",
  otherKey: "teamId"
});

League.belongsToMany(RosteredPlayer, {
  through: "teamrosteredplayers",
  foreignKey: "teamId",
  otherKey: "rosteredPlayerId"
});

Team.belongsTo(User, { as: "owner", foreignKey: "userId" });
Team.belongsTo(League, { as: "league", foreignKey: "leagueId" });

module.exports = {
  db,
  User,
  Team,
  League,
  RosteredPlayer
};
