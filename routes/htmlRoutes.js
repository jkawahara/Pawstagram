// var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load community-page (index)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/community-page.html"));
  });
  // Load singup-page
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

  // app.get("/", function(req, res) {
  //   db.User.findAll({ raw: true }).then(function(dbUsers) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       users: dbUsers
  //     });
  //   });
  // });

  // // Load user page and pass in a user by id
  // app.get("/user/:id", function(req, res) {
  //   db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
  //     res.render("user", {
  //       user: dbUser
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
