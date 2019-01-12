var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load sign up page
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/user");
    }
    res.sendFile(path.join(__dirname, "../public/signup-page.html"));
  });
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup-page.html"));
  });
  // Load login page
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/user");
    }
    res.sendFile(path.join(__dirname, "../public/login-page.html"));
  });
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/user", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/user-page.html"));
    res.redirect("/user/" + req.user.id);
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
  app.get("/user/:id", isAuthenticated, function(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [db.Pet] }).then(
      function(dbUser) {
        res.render("userprofile", {
          user: dbUser
        });
      }
    );
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
    db.Pet.findOne({
      where: { id: req.params.id },
      include: [db.User, db.PetPhoto]
    }).then(function(dbPets) {
      res.render("petprofile", {
        pets: dbPets
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
