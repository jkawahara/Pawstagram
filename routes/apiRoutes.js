var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get all comms
  app.get("/api/comms", function(req, res) {
    db.Community.findAll({}).then(function(dbComm) {
      res.json(dbComm);
    });
  });

  // Create a new comm
  app.post("/api/comms", function(req, res) {
    db.Community.create(req.body).then(function(dbComm) {
      res.json(dbComm);
    });
  });

  // Delete a comm by id
  app.delete("/api/comms/:id", function(req, res) {
    db.Community.destroy({ where: { id: req.params.id } }).then(function(
      dbComm
    ) {
      res.json(dbComm);
    });
  });

  // Get all pets
  app.get("/api/pets", function(req, res) {
    db.Pet.findAll({}).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Create a new pet
  app.post("/api/pets", function(req, res) {
    db.Pet.create(req.body).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Delete a pet by id
  app.delete("/api/pets/:id", function(req, res) {
    db.Pet.destroy({ where: { id: req.params.id } }).then(function(dbPets) {
      res.json(dbPets);
    });
  });
};
