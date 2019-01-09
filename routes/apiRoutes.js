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


  
};
