var db = require("../models");
var passport = require("../config/passport")

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({ include: [db.Pet] }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get user
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({ include: [db.Pet] }).then(function(dbUser) {
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

  // Get comm
  app.get("/api/comms/:id", function(req, res) {
    db.Community.findOne({}).then(function(dbComm) {
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
    db.Pet.findAll({ include: [db.User] }).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Get pet
  app.get("/api/pets/:id", function(req, res) {
    db.Pet.findOne({ include: [db.User] }).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Create a new pet
  app.post("/api/pets", function(req, res) {
    db.Pet.create(req.body).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the home page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/home-page");
  });
  
  // Delete a pet by id
  app.delete("/api/pets/:id", function(req, res) {
    db.Pet.destroy({ where: { id: req.params.id } }).then(function(dbPets) {
      res.json(dbPets);
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
};


