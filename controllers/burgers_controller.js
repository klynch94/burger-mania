const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

// home route
router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// create new burger route
router.post("/api/burgers", function (req, res) {
    burger.create(
        "name",
        req.body.name, 
        function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// update burger route
router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: "true"
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;