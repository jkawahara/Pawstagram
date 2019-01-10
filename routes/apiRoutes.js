var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  
  app.get("/api/pets", function(req, res) {
    db.Pet.findAll({}).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Create a new example
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
    res.json("/homepage");
  });
  
};
