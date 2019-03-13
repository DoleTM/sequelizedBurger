// Requiring the models
var db = require("../models");

// Routes
module.exports = function(app) {
    // GET route for all burgers
    app.get("/api/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    // POST route for saving new burgers
    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            burger: DataTypes.STRING
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    }).catch(function(err) {
        res.json(err);
    });

    // DELETE route for "devouring" burgers
    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });
};