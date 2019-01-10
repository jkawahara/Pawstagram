var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load community-page (index)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/community-page.html"));
  });
  // Load signup-page
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup-page.html"));
  });
  // Load login-page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login-page.html"));
  });
  // Load user-page
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-page.html"));
  });
  // Load pet-page
  app.get("/pet", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pet-page.html"));
  });

  // For testing model using starter views
  app.get("/index", function(req, res) {
    db.User.findAll({ raw: true }).then(function(dbUsers) {
      res.render("usertest", {
        msg: "Welcome!",
        users: dbUsers
      });
    });
  });

  app.get("/index3", function(req, res) {
    db.Community.findAll({ raw: true }).then(function(dbComms) {
      res.render("commtest", {
        msg: "Welcome!",
        comms: dbComms
      });
    });
  });

  app.get("/index2", function(req, res) {
    db.Pet.findAll({ raw: true }).then(function(dbPets) {
      res.render("pettest", {
        msg: "Welcome!",
        pets: dbPets
      });
    });
  });

  // For testing model using starter views
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  // For testing model using starter views
  app.get("/comm/:id", function(req, res) {
    db.Community.findOne({ where: { id: req.params.id } }).then(function(
      dbComm
    ) {
      res.render("comm", {
        comm: dbComm
      });
    });
  });

  // For testing model using starter views
  app.get("/pet/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("pet", {
        user: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
