// Requiring the models
var db = require("../models");

// Routes
module.exports = function (app) {
    // GET route for all burgers
    app.get("/api/burger", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            //console.log(dbBurger);
            res.json(dbBurger);
        });
    });

    // POST route for saving new burgers
    app.post("/api/burger/:burger", function (req, res) {
        db.Burger.create({
            burger: req.body.burger,
            devoured: req.body.devoured
        }).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // DELETE route for "devouring" burgers
    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });
};