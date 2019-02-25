const routes = require("express").Router();
const db = require("../models");

routes.get("/users", (req, res) => {
  db.User.findAll({
    include: [
      {
        model: db.League,
        through: {
          attributes: ["userId", "leagueId"]
        }
      }
    ]
  }).then(result => res.json(result));
});

routes.get("/users/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: db.League,
        through: {
          attributes: ["userId", "leagueId"]
        }
      }
    ]
  }).then(result => res.json(result));
});

routes.get("/teamsbyleague/:id", (req, res) => {
  db.Team.findAll({
    where: {
      leagueId: parseInt(req.params.id)
    },
    include: [
      {
        model: db.User,
        as: "owner"
      }
    ]
  }).then(result => res.json(result));
});

routes.post("/rosteredplayers/add", (req, res) => {
  console.log(req.body);
  db.RosteredPlayer.create({
    name: req.body.name,
    apiKey: req.body.apikey
  }),
    {
      include: [db.Team]
    };
});

module.exports = routes;
