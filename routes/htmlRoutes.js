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

  // Load static home-page for demo
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home-page.html"));
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/user", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/user-page.html"));
    res.redirect("/myprofile/" + req.user.id);
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

  app.get("/newcomm", function(req, res) {
    db.Community.findAll({ raw: true }).then(function(dbComms) {
      res.render("newComm", {
        msg: "Welcome!",
        comms: dbComms
      });
    });
  });

  //sends user to edit page
  app.get("/useredit", function(req, res) {
    res.render("userEdit");
  });

  app.get("/newpet", isAuthenticated, function(req, res) {
    db.Pet.findAll({ raw: true }).then(function(dbPets) {
      res.render("newPet", {
        msg: "Welcome!",
        pets: dbPets
      });
    });
  });

  app.get("/newpet", isAuthenticated, function(req, res) {
    db.Pet.findAll({ raw: true }).then(function(dbPets) {
      res.render("newPet", {
        msg: "Welcome!",
        pets: dbPets
      });
    });
  });

  var user;
  app.get("/user/:id", isAuthenticated, function(req, res) {
    db.User.findOne({
      where: { id: req.params.id },
      include: [
        db.Pet,
        {
          model: db.Community,
          as: "Communities",
          required: false,
          attributes: ["id", "name"],
          through: { attributes: [] }
        }
      ]
    })
      .then(function(dbUser) {
        user = dbUser;
      })
      .then(function() {
        db.User.findOne({
          where: { id: req.user.id },
          include: [
            db.Pet,
            {
              model: db.Community,
              as: "Communities",
              required: false,
              attributes: ["id", "name"],
              through: { attributes: [] }
            }
          ]
        }).then(function(dbUser) {
          res.render("userprofile", {
            user: user,
            thisUser: dbUser
          });
        });
      });
  });

  var comm;
  app.get("/comm/:id", function(req, res) {
    db.Community.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: db.User,
          as: "Communities",
          required: false,
          attributes: ["id", "name", "userPhotoUrl"],
          through: { attributes: [] }
        }
      ]
    })
      .then(function(dbComm) {
        comm = dbComm;
      })
      .then(function() {
        db.User.findOne({
          where: { id: req.user.id },
          include: [
            db.Pet,
            {
              model: db.Community,
              as: "Communities",
              required: false,
              attributes: ["id", "name"],
              through: { attributes: [] }
            }
          ]
        }).then(function(dbUser) {
          res.render("comm", {
            comm: comm,
            thisUser: dbUser
          });
        });
      });
  });

  var pet;
  app.get("/pet/:id", function(req, res) {
    db.Pet.findOne({
      where: { id: req.params.id },
      include: [db.User, db.PetPhoto]
    })
      .then(function(dbPets) {
        pet = dbPets;
      })
      .then(function() {
        db.User.findOne({
          where: { id: req.user.id },
          include: [
            db.Pet,
            {
              model: db.Community,
              as: "Communities",
              required: false,
              attributes: ["id", "name"],
              through: { attributes: [] }
            }
          ]
        }).then(function(dbUser) {
          res.render("petprofile", {
            pets: pet,
            thisUser: dbUser
          });
        });
      });
  });

  app.get("/myprofile/:id", isAuthenticated, function(req, res) {
    db.User.findOne({
      where: { id: req.user.id },
      include: [
        db.Pet,
        {
          model: db.Community,
          as: "Communities",
          required: false,
          attributes: ["id", "name"],
          through: { attributes: [] }
        }
      ]
    }).then(function(dbUser) {
      res.render("myprofile", {
        user: dbUser,
        thisUser: dbUser
      });
    });
  });
};
