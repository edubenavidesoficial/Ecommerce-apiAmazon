var db = require("../models");


module.exports = function (app) {
  // Ruta en Express para manejar esta lógica
  app.get("/api/categories/", function(req, res) {
    db.Category.findAll()
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};

//module.exports = search;
